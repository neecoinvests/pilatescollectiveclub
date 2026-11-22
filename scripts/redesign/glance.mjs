#!/usr/bin/env node
// Converts the hand-written "At a Glance" boxes in article files to the Rail
// classes (the same ones the QuickPicks component uses). Works on the syntax
// tree and only rewrites className and style attributes inside those boxes:
// text, links and structure are untouched. Idempotent.
//
//   node scripts/redesign/glance.mjs           apply
//   node scripts/redesign/glance.mjs --dry     print what would change
import ts from "typescript";
import fs from "node:fs";
import path from "node:path";

const DRY = process.argv.includes("--dry");
const BOX = /rgba\(217,\s*194,\s*186,\s*0\.4\)/;

// Exact old className -> new className. The style attribute is dropped.
const MAP = new Map([
  ["px-6 py-4", "r-qp-hd"],
  ["flex items-center gap-3 sm:gap-4 px-6 py-4", "r-qp-row"],
  ["flex items-start gap-3 sm:gap-4 px-6 py-4", "r-qp-row r-qp-row-top"],
  ["flex gap-4 px-6 py-4", "r-qp-row r-qp-row-top"],
  ["text-base font-semibold w-7 shrink-0 text-center", "r-qp-no"],
  ["flex-1 min-w-0", "r-qp-tx"],
  ["text-xs font-semibold uppercase tracking-[0.2em]", "r-qp-title"],
  ["text-xs font-semibold uppercase tracking-widest", "r-qp-title"],
  ["text-sm font-semibold leading-tight", "r-qp-name"],
  ["text-sm font-semibold leading-tight mt-0.5", "r-qp-name"],
  ["text-sm font-semibold", "r-qp-name"],
  ["text-xs mt-0.5", "r-qp-sub"],
  ["text-xs mt-0.5 leading-relaxed", "r-qp-sub"],
  ["text-xs mt-0.5 md:hidden", "r-qp-sub md:hidden"],
  ["text-xs uppercase tracking-[0.12em]", "r-qp-tag"],
  ["text-xs font-semibold uppercase tracking-[0.12em] mb-0.5", "r-qp-tag"],
  ["text-[10px] font-semibold uppercase tracking-widest", "r-qp-tag"],
  ["text-xs font-semibold hidden md:block shrink-0 mr-3", "r-qp-price hidden md:block"],
  ["px-6 py-4 flex justify-between gap-3 text-sm font-semibold", "r-qp-row r-qp-total"],
  ["font-semibold", "r-qp-b"],
  ["sm:hidden font-semibold", "r-qp-b sm:hidden"],
]);

function* walkFiles(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walkFiles(p);
    else if (p.endsWith(".tsx")) yield p;
  }
}

let filesChanged = 0;
const unmapped = new Map();
// Articles only: other pages reuse the same border colour for unrelated panels.
const ROOTS = ["src/app/blog", "src/app/partner-preview"];
for (const file of ROOTS.flatMap((r) => [...walkFiles(r)])) {
  const src = fs.readFileSync(file, "utf8");
  if (!BOX.test(src) && !/\br-glance\b/.test(src)) continue;
  const sf = ts.createSourceFile(file, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const edits = []; // { start, end, text }
  const get = (open, name) => open.attributes.properties.find((p) => ts.isJsxAttribute(p) && p.name.getText(sf) === name);
  const str = (a) => (a?.initializer && ts.isStringLiteral(a.initializer) ? a.initializer.text : null);
  // Remove an attribute together with the whitespace before it.
  const drop = (a) => edits.push({ start: a.getFullStart(), end: a.getEnd(), text: "" });
  const setClass = (open, value) => {
    const a = get(open, "className");
    if (a) edits.push({ start: a.getStart(sf), end: a.getEnd(), text: `className="${value}"` });
    else edits.push({ start: open.tagName.getEnd(), end: open.tagName.getEnd(), text: ` className="${value}"` });
  };

  const inside = (node) => {
    const open = ts.isJsxElement(node) ? node.openingElement : ts.isJsxSelfClosingElement(node) ? node : null;
    if (open) {
      const tag = open.tagName.getText(sf);
      const cls = str(get(open, "className"));
      const style = get(open, "style");
      const styleText = style ? style.getText(sf) : "";
      if (cls !== null && MAP.has(cls)) {
        setClass(open, MAP.get(cls));
        if (style) drop(style);
      } else if ((tag === "a" || tag === "Link") && /backgroundColor: "#0a0a0a"/.test(styleText) && cls === null) {
        setClass(open, "r-btn r-btn-sm shrink-0");
        drop(style);
      } else if ((tag === "a" || tag === "Link") && /^style=\{\{ color: "#86736d", textDecoration: "none" \}\}$/.test(styleText) && cls === null) {
        setClass(open, "r-qp-a");
        drop(style);
      } else if (style && !/^r-/.test(cls ?? "")) {
        const k = `${tag} | ${cls ?? ""} | ${styleText.replace(/\s+/g, " ").slice(0, 90)}`;
        unmapped.set(k, [...(unmapped.get(k) ?? []), file]);
      }
    }
    ts.forEachChild(node, inside);
  };

  const walk = (node) => {
    if (ts.isJsxElement(node)) {
      const open = node.openingElement;
      const style = get(open, "style");
      if (style && BOX.test(style.getText(sf)) && /borderRadius: "16px"/.test(style.getText(sf)) && /overflow-hidden/.test(str(get(open, "className")) ?? "")) {
        const cls = str(get(open, "className")) ?? "";
        const keep = cls.split(/\s+/).filter((c) => c && c !== "overflow-hidden");
        setClass(open, [...keep, "r-qp", "r-glance"].join(" "));
        drop(style);
        node.children.forEach(inside);
        return;
      }
      // Already converted: still report leftovers inside it.
      if (/\br-glance\b/.test(str(get(open, "className")) ?? "")) {
        node.children.forEach(inside);
        return;
      }
    }
    ts.forEachChild(node, walk);
  };
  walk(sf);
  if (!edits.length) continue;
  filesChanged++;
  let out = src;
  for (const e of edits.sort((a, b) => b.start - a.start)) out = out.slice(0, e.start) + e.text + out.slice(e.end);
  console.log(`${DRY ? "would change" : "changed"} ${file} (${edits.length} edits)`);
  if (!DRY) fs.writeFileSync(file, out);
}
console.log(`\n${filesChanged} file(s) ${DRY ? "would change" : "changed"}.`);
if (unmapped.size) {
  console.log("\nElements inside the boxes that keep their inline style (styled by the .r-glance fallback rules, check by eye):");
  for (const [k, files] of unmapped) console.log(`  ${files.length}x ${k}\n      ${[...new Set(files)].map((f) => f.replace("src/app/", "").replace("/page.tsx", "")).join(", ")}`);
}
