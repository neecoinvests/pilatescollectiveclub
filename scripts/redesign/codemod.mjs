#!/usr/bin/env node
// Rail redesign codemod. Rewrites the old inline styling in page and component
// files to the Rail system. It works on the syntax tree and only edits
// className strings, style objects and style constants: text, links, data and
// structure are never touched. Idempotent.
//
//   node scripts/redesign/codemod.mjs [--dry] <file or directory>...
//
// What it does:
//   - removes every fontFamily (one family site-wide, inherited)
//   - maps the old colours to the Rail palette
//   - old serif headings become display type (h1, h2) or bold (the rest)
//   - tracked uppercase labels become plain small bold labels
//   - filled buttons become pill buttons
//   - bordered white or tinted boxes become cream panels
//   - article header and hero image blocks take the Rail header classes
// Anything it cannot read confidently (dynamic className, unknown shapes) is
// left alone and listed at the end.
import ts from "typescript";
import fs from "node:fs";
import path from "node:path";

const argv = process.argv.slice(2);
const DRY = argv.includes("--dry");
const targets = argv.filter((a) => !a.startsWith("--"));
if (!targets.length) {
  console.error("Usage: codemod.mjs [--dry] <file or directory>...");
  process.exit(2);
}

const TEXT = { "#8b4a31": "#0a0a0a", "#7a3f29": "#0a0a0a", "#1b1c1c": "#0a0a0a", "#303030": "#0a0a0a", "#53433e": "#3a3530", "#4a4540": "#3a3530", "#4a473e": "#3a3530", "#3b4a40": "#3a3530", "#536257": "#3a3530", "#71361e": "#3a3530", "#86736d": "#6f6964", "#6b6560": "#6f6964", "#a8988f": "#6f6964", "#c4b8b3": "#6f6964", "#d9c2ba": "#9a9490", "#8f6d3f": "#0a0a0a" };
const FILL = { "#8b4a31": "#0a0a0a", "#7a3f29": "#0a0a0a", "#1b1c1c": "#0a0a0a", "#fcf9f8": "#f7f4f0", "#faf8f5": "#f7f4f0", "#f5f0eb": "#f7f4f0", "#f6f3f2": "#ede9e3", "#f0ece6": "#ede9e3", "#f0f7f1": "#ede9e3", "#fdf5f3": "#ede9e3", "#f6f8f5": "#ede9e3", "#d6e7d9": "#ede9e3", "#ffdbce": "#ede9e3", "#e8e2d6": "#ede9e3", "#dcd9d9": "#ede9e3", "#d9c2ba": "#ddd6cc", "#ddd8d0": "#ddd6cc", "#536257": "#3a3530" };
const LINE = "#ddd6cc";
const OLD_RGBA = /rgba\(\s*(217,\s*194,\s*186|139,\s*74,\s*49|83,\s*98,\s*87)\s*,\s*[\d.]+\s*\)/g;
const mapHex = (text, table) => text.replace(/#[0-9a-fA-F]{6}\b/g, (h) => table[h.toLowerCase()] ?? h);
const mapFill = (text) => mapHex(text.replace(OLD_RGBA, LINE), FILL);
const mapText = (text) => mapHex(text.replace(OLD_RGBA, LINE), TEXT);

const SERIF = /Playfair|--font-serif|Cormorant/;
const OLD_FONT = /Playfair|Montserrat|Cormorant|Jost|--font-serif|--font-sans/;
const BTN_BG = /^"#(8b4a31|0a0a0a|1b1c1c|7a3f29)"$/i;
const BTN_DROP = new Set(["color", "backgroundColor", "padding", "paddingTop", "paddingBottom", "paddingLeft", "paddingRight", "fontSize", "letterSpacing", "textTransform", "fontWeight", "textDecoration", "display", "whiteSpace", "border", "borderRadius", "textAlign", "transition", "lineHeight", "boxSizing"]);
const FILL_PROPS = new Set(["backgroundColor", "background", "border", "borderTop", "borderBottom", "borderLeft", "borderRight", "borderColor", "boxShadow", "outline", "borderBlock", "borderInline"]);

function* walkFiles(p) {
  const st = fs.statSync(p);
  if (st.isFile()) return void (yield p);
  for (const e of fs.readdirSync(p, { withFileTypes: true })) {
    const c = path.join(p, e.name);
    if (e.isDirectory()) yield* walkFiles(c);
    else if (/\.tsx?$/.test(c)) yield c;
  }
}

const skipped = new Map();
const note = (k, file) => skipped.set(k, [...(skipped.get(k) ?? []), file]);
let changed = 0;

function transform(file, src) {
  const sf = ts.createSourceFile(file, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const edits = [];
  const text = (n) => n.getText(sf);

  // Top-level constants, to see through style={h2Style} and fontFamily: serif.
  const consts = new Map();
  for (const st of sf.statements) {
    if (!ts.isVariableStatement(st)) continue;
    for (const d of st.declarationList.declarations) if (ts.isIdentifier(d.name) && d.initializer) consts.set(d.name.text, d.initializer);
  }
  const resolve = (expr, depth = 0) => {
    if (!expr || depth > 3) return "";
    let out = text(expr);
    if (ts.isIdentifier(expr) && consts.has(expr.text)) return out + " " + resolve(consts.get(expr.text), depth + 1);
    if (ts.isPropertyAccessExpression(expr) && ts.isIdentifier(expr.expression) && consts.has(expr.expression.text)) {
      const obj = consts.get(expr.expression.text);
      if (ts.isObjectLiteralExpression(obj)) {
        const p = obj.properties.find((q) => q.name && text(q.name) === expr.name.text);
        if (p && ts.isPropertyAssignment(p)) return out + " " + resolve(p.initializer, depth + 1);
      }
      return out;
    }
    if (ts.isObjectLiteralExpression(expr)) {
      for (const p of expr.properties) {
        if (ts.isSpreadAssignment(p)) out += " " + resolve(p.expression, depth + 1);
        else if (ts.isPropertyAssignment(p) && (ts.isIdentifier(p.initializer) || ts.isPropertyAccessExpression(p.initializer))) out += " " + resolve(p.initializer, depth + 1);
      }
    }
    return out;
  };

  // Rewrite one style object. ctx: { tag, serif, button, drop:Set }
  const renderObject = (obj, ctx = {}) => {
    const props = obj.properties;
    const names = new Map();
    for (const p of props) if (ts.isPropertyAssignment(p) && p.name) names.set(text(p.name), text(p.initializer));
    if ([...names.keys()].some((k) => k.startsWith('"@') || k.startsWith("'@"))) return null; // JSON-LD
    const hadFont = names.has("fontFamily");
    const serif = ctx.serif || SERIF.test(resolveFont(names.get("fontFamily")));
    const upper = /uppercase/.test(names.get("textTransform") ?? "");
    const borderOld = ["border"].some((k) => OLD_RGBA.test(names.get(k) ?? "") || /"1px solid #(ede9e3|ddd8d0)"/.test(names.get(k) ?? ""));
    OLD_RGBA.lastIndex = 0;
    const bg = (names.get("backgroundColor") ?? "").toLowerCase();
    const panel = borderOld && /^"#(ffffff|f6f3f2|fcf9f8|faf8f5|f0f7f1|fdf5f3|f6f8f5)"$/.test(bg);
    const out = [];
    let dirty = false;
    for (const p of props) {
      if (!ts.isPropertyAssignment(p) || !p.name) {
        out.push(text(p));
        continue;
      }
      const k = text(p.name);
      let v = text(p.initializer);
      const orig = v;
      const drop = () => { dirty = true; };
      const innerObj = ts.isObjectLiteralExpression(p.initializer) ? p.initializer : ts.isAsExpression(p.initializer) && ts.isObjectLiteralExpression(p.initializer.expression) ? p.initializer.expression : null;
      if (innerObj) {
        const before = text(innerObj);
        const inner = renderObject(innerObj, {});
        if (inner !== null && inner !== before) { v = inner + v.slice(before.length); dirty = true; }
        out.push(`${k}: ${v}`);
        continue;
      }
      if (k === "fontFamily") { drop(); continue; }
      if (ctx.drop?.has(k)) { drop(); continue; }
      if (k === "fontWeight") {
        const n = Number(v.replace(/["']/g, ""));
        if ((ctx.heading || (serif && hadFont)) && hadFont) { drop(); continue; }
        if (n === 300) { drop(); continue; }
        if (upper && n < 600) v = "700";
      }
      if (k === "textTransform" && upper) { drop(); continue; }
      if (k === "letterSpacing" && (upper || /^"0\.(0[5-9]|[1-9]\d?)\d*em"$/.test(v))) { drop(); continue; }
      if (k === "fontSize") {
        const m = /^"(\d+(?:\.\d+)?)px"$/.exec(v);
        if (ctx.heading && hadFont) { drop(); continue; }
        if (m && upper && Number(m[1]) <= 11.5) v = '"12.5px"';
        else if (m && hadFont && !upper && !serif && Number(m[1]) >= 13 && Number(m[1]) <= 15) v = `"${Number(m[1]) + 2}px"`;
      }
      if (k === "lineHeight") {
        if (ctx.heading && hadFont) { drop(); continue; }
        const n = Number(v.replace(/["']/g, ""));
        if (n >= 1.65 && n <= 2) v = "1.55";
      }
      if (k === "color") {
        if (ctx.inH1 && /^"#8b4a31"$/i.test(v)) v = '"#a98a5f"';
        if (ctx.heading && /^"#(1b1c1c|0a0a0a)"$/i.test(v)) { drop(); continue; }
        v = mapText(v);
      }
      if (FILL_PROPS.has(k)) {
        if (panel && k === "border") { drop(); continue; }
        if (panel && k === "backgroundColor") v = '"#ede9e3"';
        else if (ctx.tag === "section" && k === "backgroundColor" && /^"#(ffffff|f7f4f0|ede9e3)"$/i.test(mapFill(v))) { drop(); continue; }
        else v = mapFill(v);
      }
      if (v !== orig) dirty = true;
      out.push(`${k}: ${v}`);
    }
    if (!dirty) return text(obj);
    return out.length ? `{ ${out.join(", ")} }` : "{}";
  };
  const resolveFont = (v) => {
    if (!v) return "";
    const id = v.trim();
    if (consts.has(id)) return v + " " + text(consts.get(id));
    return v;
  };

  const attrOf = (open, name) => open.attributes.properties.find((p) => ts.isJsxAttribute(p) && text(p.name) === name);
  const handledObjects = new Set();

  const visit = (node) => {
    const open = ts.isJsxElement(node) ? node.openingElement : ts.isJsxSelfClosingElement(node) ? node : null;
    if (open) element(open, node);
    if (ts.isObjectLiteralExpression(node) && !handledObjects.has(node)) {
      // Style constants and other style-like objects outside JSX attributes.
      let inObj = false;
      for (let p = node.parent; p; p = p.parent) if (ts.isObjectLiteralExpression(p)) inObj = true;
      if (!inObj) {
        const out = renderObject(node, {});
        if (out !== null && out !== text(node)) edits.push({ start: node.getStart(sf), end: node.getEnd(), text: out });
        const mark = (n) => { if (ts.isObjectLiteralExpression(n)) handledObjects.add(n); ts.forEachChild(n, mark); };
        mark(node);
      }
    }
    ts.forEachChild(node, visit);
  };

  const element = (open, node) => {
    const tag = text(open.tagName);
    const clsAttr = attrOf(open, "className");
    const styleAttr = attrOf(open, "style");
    const styleExpr = styleAttr?.initializer && ts.isJsxExpression(styleAttr.initializer) ? styleAttr.initializer.expression : null;
    const styleObj = styleExpr && ts.isObjectLiteralExpression(styleExpr) ? styleExpr : null;
    const resolved = styleExpr ? resolve(styleExpr) : "";
    const fontText = /fontFamily:\s*([^,}]+)/.exec(resolved)?.[1] ?? "";
    const serif = SERIF.test(fontText) || [...consts].some(([n, init]) => new RegExp(`fontFamily:\\s*${n}\\b`).test(resolved) && SERIF.test(text(init)));
    const hadOldFont = /fontFamily/.test(resolved);
    const clsLiteral = clsAttr?.initializer && ts.isStringLiteral(clsAttr.initializer) ? clsAttr.initializer.text : null;
    if (clsAttr && clsLiteral === null && (styleAttr || /uppercase|#8b4a31/.test(text(clsAttr)))) note("dynamic className, classes left as they are", file);
    let cls = (clsLiteral ?? "").split(/\s+/).filter(Boolean);
    const had = (re) => cls.some((c) => re.test(c));
    const remove = (re) => { cls = cls.filter((c) => !re.test(c)); };
    const add = (...cs) => { for (const c of cs) if (!cls.includes(c)) cls.push(c); };
    const ctx = { tag, serif, drop: null, heading: false, inH1: false };
    for (let p = node.parent; p; p = p.parent) if (ts.isJsxElement(p) && text(p.openingElement.tagName) === "h1") ctx.inH1 = true;
    const styleNames = new Map();
    if (styleObj) for (const p of styleObj.properties) if (ts.isPropertyAssignment(p) && p.name) styleNames.set(text(p.name), text(p.initializer));
    const SIZE = /^((sm|md|lg|xl):)?(text-(xs|sm|base|lg|xl|[2-9]xl|\[[\d.]+(px|rem)\])|leading-.+|font-(light|normal|medium|semibold|bold))$/;

    // Old article header block
    if (tag === "section" && clsLiteral === "pt-32 pb-16 px-6") {
      cls = ["r-ah", "r-ah-legacy"];
      const first = ts.isJsxElement(node) ? node.children.find((c) => ts.isJsxElement(c)) : null;
      const fa = first && attrOf(first.openingElement, "className");
      if (fa?.initializer && ts.isStringLiteral(fa.initializer) && /^max-w-(3xl|4xl) mx-auto$/.test(fa.initializer.text)) edits.push({ start: fa.getStart(sf), end: fa.getEnd(), text: 'className="r-wrap"' });
    }
    // Hero image frame
    if (cls.includes("pcc-city-hero-image") && !cls.includes("r-ah-img")) {
      remove(/^(w-full|rounded-.*|overflow-hidden)$/);
      add("r-ah-img");
      ctx.drop = new Set(["height"]);
    }
    if (tag === "Image" && /brightness/.test(styleNames.get("filter") ?? "")) ctx.drop = new Set(["filter"]);

    // Headings in the old serif
    if (serif && hadOldFont) {
      if (tag === "h1" || tag === "h2") {
        remove(SIZE);
        remove(/^tracking-/);
        add("r-d", tag === "h1" ? "r-h1" : "r-h2");
        ctx.heading = true;
      } else {
        remove(/^font-(light|normal|medium|semibold|bold)$/);
        add("r-hx");
      }
    }
    // Page titles and section headings written with utility classes only
    if ((tag === "h1" || tag === "h2") && clsLiteral !== null && !cls.includes("r-d") && had(/^text-[2-6]xl$/)) {
      remove(SIZE);
      remove(/^tracking-/);
      add("r-d", tag === "h1" ? "r-h1" : "r-h2");
    }
    // Tracked uppercase labels
    if (cls.includes("uppercase")) {
      remove(/^(uppercase|tracking-.*)$/);
      cls = cls.map((c) => (/^text-(xs|\[(9|10|11)px\])$/.test(c) ? "text-[12.5px]" : c === "font-semibold" || c === "font-medium" ? "font-bold" : c));
    }
    // Filled buttons
    const bgv = styleNames.get("backgroundColor") ?? "";
    const isLink = tag === "a" || tag === "Link" || tag === "button";
    const pad = had(/^p[xy]?-\d/) || styleNames.has("padding");
    if (isLink && styleObj && pad && (BTN_BG.test(bgv) || (/^"#ffffff"$/i.test(bgv) && /#8b4a31|#0a0a0a|#1b1c1c/i.test(styleNames.get("color") ?? "")))) {
      const block = cls.includes("block") || cls.includes("w-full") || /"block"/.test(styleNames.get("display") ?? "");
      remove(/^((sm|md):)?(p[xy]?-.+|rounded.*|text-(xs|sm|base|lg|\[.+\])|uppercase|tracking-.*|font-.*|inline-block|block|transition.*|hover:opacity-.*|leading-.*)$/);
      add("r-btn", "r-btn-sm");
      if (block) add("r-btn-block");
      if (/^"#ffffff"$/i.test(bgv)) add("r-btn-light");
      ctx.drop = BTN_DROP;
      for (const ev of ["onMouseEnter", "onMouseLeave"]) {
        const a = attrOf(open, ev);
        if (a && /backgroundColor/.test(text(a))) edits.push({ start: a.getFullStart(), end: a.getEnd(), text: "" });
      }
    }
    // Body copy: nothing under 16px
    if ((tag === "p" || tag === "li") && hadOldFont && !serif) cls = cls.map((c) => (c === "text-sm" ? "text-base" : c));
    // Panels
    if (styleObj && OLD_RGBA.test(styleNames.get("border") ?? "")) cls = cls.map((c) => (c === "rounded-xl" || c === "rounded-lg" ? "rounded-2xl" : c));
    OLD_RGBA.lastIndex = 0;
    // Old accent colours written as utility classes
    cls = cls.map((c) => c.replace(/\[#8b4a31\]/i, c.includes("hover:") ? "[#a98a5f]" : "[#0a0a0a]").replace(/\[#c5a882\]/i, c.startsWith("text-") ? "[#0a0a0a]" : "[#c5a882]"));

    // Style attribute
    if (styleObj) {
      handledObjects.add(styleObj);
      const mark = (n) => { if (ts.isObjectLiteralExpression(n)) handledObjects.add(n); ts.forEachChild(n, mark); };
      mark(styleObj);
      const out = renderObject(styleObj, ctx);
      if (out !== null && out !== text(styleObj)) {
        if (out === "{}") edits.push({ start: styleAttr.getFullStart(), end: styleAttr.getEnd(), text: "" });
        else edits.push({ start: styleObj.getStart(sf), end: styleObj.getEnd(), text: out });
      }
    } else if (tag === "section" && clsLiteral === "pt-32 pb-16 px-6" && styleAttr) {
      edits.push({ start: styleAttr.getFullStart(), end: styleAttr.getEnd(), text: "" });
    }
    // className attribute
    const next = cls.join(" ");
    if (clsLiteral !== null && next !== clsLiteral.trim().split(/\s+/).join(" ")) {
      if (next) edits.push({ start: clsAttr.getStart(sf), end: clsAttr.getEnd(), text: `className="${next}"` });
      else edits.push({ start: clsAttr.getFullStart(), end: clsAttr.getEnd(), text: "" });
    } else if (clsLiteral === null && !clsAttr && next) {
      edits.push({ start: open.tagName.getEnd(), end: open.tagName.getEnd(), text: ` className="${next}"` });
    }
  };

  visit(sf);
  if (!edits.length) return src;
  // Drop edits nested inside another edit (outer wins), then apply back to front.
  edits.sort((a, b) => a.start - b.start || b.end - a.end);
  const flat = [];
  for (const e of edits) if (!flat.length || e.start >= flat[flat.length - 1].end) flat.push(e);
  let out = src;
  for (const e of flat.reverse()) out = out.slice(0, e.start) + e.text + out.slice(e.end);
  return out;
}

// After the main pass: remove font constants nothing uses any more, and
// rename any font family still written inside a string.
function cleanup(file, src) {
  const sf = ts.createSourceFile(file, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const edits = [];
  for (const st of sf.statements) {
    if (!ts.isVariableStatement(st) || st.declarationList.declarations.length !== 1) continue;
    const d = st.declarationList.declarations[0];
    if (!ts.isIdentifier(d.name) || !d.initializer) continue;
    const init = d.initializer.getText(sf);
    const stringy = ts.isStringLiteral(d.initializer) && OLD_FONT.test(init);
    const emptyObj = init === "{}";
    if (!stringy && !emptyObj) continue;
    const uses = src.match(new RegExp(`\\b${d.name.text}\\b`, "g"))?.length ?? 0;
    if (uses <= 1 && !st.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword)) edits.push({ start: st.getFullStart(), end: st.getEnd(), text: "" });
  }
  let out = src;
  for (const e of edits.reverse()) out = out.slice(0, e.start) + e.text + out.slice(e.end);
  out = out.replace(/#8b4a31/gi, "#0a0a0a").replace(/rgba\(\s*139,\s*74,\s*49\s*,\s*[\d.]+\s*\)/g, "#ddd6cc");
  out = out.replace(/'(Playfair Display|Cormorant Garamond)',\s*(Georgia,\s*)?serif/g, "var(--font-sans)").replace(/'(Montserrat|Jost)',\s*(system-ui,\s*)?sans-serif/g, "var(--font-sans)");
  return out;
}

for (const file of targets.flatMap((t) => [...walkFiles(t)])) {
  const src = fs.readFileSync(file, "utf8");
  if (!/style=|fontFamily|uppercase|#8b4a31/.test(src)) continue;
  let out;
  try {
    out = cleanup(file, transform(file, src));
    // A second cleanup pass catches empty style constants left by the first.
    out = cleanup(file, out);
  } catch (e) {
    note(`error: ${e.message.slice(0, 80)}`, file);
    continue;
  }
  if (out === src) continue;
  changed++;
  if (DRY) console.log(`would change ${file}`);
  else fs.writeFileSync(file, out);
}
console.log(`${changed} file(s) ${DRY ? "would change" : "changed"}.`);
for (const [k, files] of skipped) console.log(`\n${k}: ${new Set(files).size} file(s)\n  ${[...new Set(files)].slice(0, 12).join("\n  ")}`);
