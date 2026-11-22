#!/usr/bin/env node
// One "At a Glance" product list per page. Run once; safe to run again.
//
// Rule:
//  - Where the short Quick Picks box sits directly above a longer complete
//    list, the complete list stays and the Quick Picks box goes.
//  - Where a second list repeats the same products further down the page,
//    the top Quick Picks box stays and the repeat goes.
// Comparison tables and fact panels are not product lists and are kept
// (they are styled as outlined tables so they do not read as a repeat).
import ts from "typescript";
import fs from "node:fs";

const b = (slug) => `src/app/blog/${slug}/page.tsx`;
const DROP_QUICK_PICKS = [b("lagree-fitness"), "src/app/partner-preview/the-core-collab/lagree-fitness/page.tsx", b("lagree-essentials"), b("pilates-princess-essentials"), b("reformer-pilates-essentials"), b("best-lagree-gifts"), b("pilates-essentials")];
// file -> text that identifies the repeated box by its title
const DROP_BOX = {
  [b("lagree-for-weight-loss")]: "At a Glance: Weight-Loss Tracking Tools",
  [b("lagree-recovery")]: "At a Glance: Lagree Recovery Gear",
  [b("lagree-exercises")]: "At a Glance: Home Lagree-Style Kit",
  [b("lagree-vs-solidcore")]: "At a Glance: The Two-Studio Kit",
  [b("best-pilates-chair")]: "Pilates Chair Options",
  [b("best-pilates-cadillac")]: "Cadillac Options",
  [b("best-pilates-reformer-for-beginners")]: "Reformers for Beginners",
};

function removeElement(file, match) {
  const src = fs.readFileSync(file, "utf8");
  const sf = ts.createSourceFile(file, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  let target = null;
  const walk = (n) => {
    if (target) return;
    if ((ts.isJsxElement(n) || ts.isJsxSelfClosingElement(n)) && match(n, sf)) return void (target = n);
    ts.forEachChild(n, walk);
  };
  walk(sf);
  if (!target) return false;
  // Take the whole line(s) the element occupies.
  let start = target.getStart(sf);
  while (start > 0 && src[start - 1] !== "\n") start--;
  let end = target.getEnd();
  while (end < src.length && src[end] !== "\n") end++;
  fs.writeFileSync(file, src.slice(0, start) + src.slice(end + 1));
  return true;
}

for (const file of DROP_QUICK_PICKS) {
  const ok = removeElement(file, (n, sf) => ts.isJsxSelfClosingElement(n) && n.tagName.getText(sf) === "QuickPicks");
  let src = fs.readFileSync(file, "utf8");
  if (ok && !/<QuickPicks\b/.test(src)) fs.writeFileSync(file, src.replace(/^import QuickPicks from "@\/components\/QuickPicks";\n/m, ""));
  console.log(`${ok ? "removed Quick Picks box" : "nothing to do"}: ${file}`);
}
for (const [file, title] of Object.entries(DROP_BOX)) {
  const ok = removeElement(file, (n, sf) => {
    if (!ts.isJsxElement(n)) return false;
    const cls = n.openingElement.attributes.properties.find((p) => ts.isJsxAttribute(p) && p.name.getText(sf) === "className");
    return /\br-glance\b/.test(cls?.getText(sf) ?? "") && n.getText(sf).includes(title);
  });
  console.log(`${ok ? "removed repeated list" : "nothing to do"}: ${file}`);
}
