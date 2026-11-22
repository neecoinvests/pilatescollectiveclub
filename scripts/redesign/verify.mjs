#!/usr/bin/env node
// Redesign verification: the branch must serve the same content as the base commit.
//
//   node scripts/redesign/verify.mjs --base-dir /path/to/base-checkout [--branch-dir .] [--build] [--only /path,/path]
//
// Both checkouts need node_modules and (unless --build is passed) a finished `next build`.
// The script starts `next start` for each, fetches every URL in the sitemap from both,
// and exits 1 if any page differs in visible text, headings, links, head tags,
// JSON-LD, image alt texts, status or robots.

import { spawn, execSync } from "node:child_process";
import path from "node:path";

const args = process.argv.slice(2);
const arg = (name, fallback) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : fallback;
};
const BASE_DIR = arg("--base-dir");
const BRANCH_DIR = path.resolve(arg("--branch-dir", "."));
const ONLY = arg("--only");
const BASE_PORT = Number(arg("--base-port", 3201));
const BRANCH_PORT = Number(arg("--branch-port", 3202));
if (!BASE_DIR) {
  console.error("Missing --base-dir");
  process.exit(2);
}

// Pages that are noindex and deliberately left out of the sitemap. Checked by path.
const NOINDEX_PATHS = ["/partner-preview/the-core-collab/lagree-fitness"];

// Documented, intended differences. Everything else must match exactly.
//  1. Every page: the new "Skip to content" link (class r-skip) is ignored.
//  2. Homepage: the featured stories used to be a rotator that put one story in the
//     HTML at a time; all of them are now cards in the HTML. The featured block is
//     compared separately: everything the base had must still be there.
const FEATURED = { base: /\bpcc-featured-grid\b/, branch: null, branchAttr: "data-track-item" };

//  3. One "At a Glance" product list per page (owner request): on these pages a
//     repeated list was removed (see dedupe-glance.mjs). Text and links may only
//     be removed, never added or changed, and every removed link is reported if
//     its destination no longer appears anywhere else on the page.
const b = (slug) => `/blog/${slug}`;
const DEDUPED = new Set([
  b("lagree-fitness"), "/partner-preview/the-core-collab/lagree-fitness", b("lagree-essentials"), b("pilates-princess-essentials"),
  b("reformer-pilates-essentials"), b("best-lagree-gifts"), b("pilates-essentials"), b("lagree-for-weight-loss"), b("lagree-recovery"),
  b("lagree-exercises"), b("lagree-vs-solidcore"), b("best-pilates-chair"), b("best-pilates-cadillac"), b("best-pilates-reformer-for-beginners"),
]);
const isSubsequence = (small, big) => {
  let i = 0;
  for (let j = 0; j < big.length && i < small.length; j++) if (small[i] === big[j]) i++;
  return i === small.length;
};
export const lostLinks = [];

const VOID = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr"]);
const ENT = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };
const decode = (s) =>
  s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) => {
    if (e[0] === "#") return String.fromCodePoint(e[1].toLowerCase() === "x" ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10));
    return ENT[e.toLowerCase()] ?? m;
  });
const attrsOf = (tag) => {
  const out = {};
  const re = /([^\s=/<>"']+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g;
  const body = tag.replace(/^<\/?[a-zA-Z][^\s/>]*/, "").replace(/\/?>$/, "");
  let m;
  while ((m = re.exec(body))) out[m[1].toLowerCase()] = decode(m[2] ?? m[3] ?? m[4] ?? "");
  return out;
};
const squash = (s) => s.replace(/\s+/g, "");
const sortKeys = (v) =>
  Array.isArray(v) ? v.map(sortKeys) : v && typeof v === "object" ? Object.fromEntries(Object.keys(v).sort().map((k) => [k, sortKeys(v[k])])) : v;

// Small tolerant HTML walker. Good enough for server-rendered React output.
function analyse(html, side, pathname) {
  const res = { text: "", headings: [], links: [], alts: [], imgNoAlt: 0, jsonld: [], head: {}, featured: { text: "", links: [], alts: [] } };
  const re = /<!--[\s\S]*?-->|<(script|style)\b[^>]*>[\s\S]*?<\/\1\s*>|<\/?[a-zA-Z][^>]*>|[^<]+/g;
  const stack = []; // { name, hidden, featured, heading }
  let inBody = false;
  let m;
  while ((m = re.exec(html))) {
    const tok = m[0];
    if (tok.startsWith("<!--")) continue;
    const top = stack[stack.length - 1];
    const hidden = top?.hidden;
    const featured = top?.featured;
    if (m[1]) {
      if (m[1].toLowerCase() === "script") {
        const open = tok.slice(0, tok.indexOf(">") + 1);
        const a = attrsOf(open);
        if (a.type === "application/ld+json") {
          const raw = tok.slice(open.length, tok.lastIndexOf("</"));
          try {
            res.jsonld.push(JSON.stringify(sortKeys(JSON.parse(raw))));
          } catch {
            res.jsonld.push("UNPARSEABLE:" + raw);
          }
        }
      }
      continue;
    }
    if (tok[0] !== "<") {
      if (!inBody) {
        if (top?.name === "title") res.head.title = decode(tok);
        continue;
      }
      if (hidden) continue;
      const t = decode(tok);
      (featured ? res.featured : res).text += t;
      for (const el of stack) if (el.heading) el.heading.text += t;
      continue;
    }
    if (tok[1] === "/") {
      const name = tok.slice(2, -1).trim().toLowerCase();
      for (let i = stack.length - 1; i >= 0; i--) {
        if (stack[i].name === name) {
          stack.length = i;
          break;
        }
      }
      continue;
    }
    const name = /^<([a-zA-Z][^\s/>]*)/.exec(tok)[1].toLowerCase();
    const a = attrsOf(tok);
    if (name === "body") inBody = true;
    if (name === "meta") {
      const key = a.name ?? a.property;
      if (key && /^(description|robots|googlebot|og:|twitter:)/.test(key)) (res.head[key] ??= []).push(a.content ?? "");
    }
    if (name === "link" && a.rel === "canonical") res.head.canonical = a.href;
    const skip = /\br-skip\b/.test(a.class ?? "");
    const isFeatured =
      featured ||
      (pathname === "/" && (side === "base" ? FEATURED.base.test(a.class ?? "") : FEATURED.branchAttr in a));
    const isHidden = hidden || skip || a["aria-hidden"] === "true";
    const bucket = isFeatured ? res.featured : res;
    if (inBody && !skip) {
      if (name === "a" && "href" in a) bucket.links.push([a.href, a.rel ?? "", a.target ?? ""].join(" | "));
      if (name === "img") {
        if ("alt" in a) {
          if (a.alt) bucket.alts.push(a.alt);
        } else res.imgNoAlt++;
      }
    }
    let heading = null;
    if (inBody && !isHidden && /^h[1-4]$/.test(name) && !isFeatured) {
      heading = { level: name, text: "" };
      res.headings.push(heading);
    }
    if (!VOID.has(name) && !tok.endsWith("/>")) stack.push({ name, hidden: isHidden, featured: isFeatured, heading });
  }
  res.text = squash(res.text);
  res.featured.text = squash(res.featured.text);
  res.headings = res.headings.map((h) => `${h.level}: ${squash(h.text)}`);
  res.alts.sort();
  res.jsonld.sort();
  return res;
}

const firstDiff = (a, b) => {
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) i++;
  return `at ${i}: base "...${a.slice(Math.max(0, i - 40), i + 60)}" vs branch "...${b.slice(Math.max(0, i - 40), i + 60)}"`;
};
const listDiff = (a, b) => {
  const out = [];
  const n = Math.max(a.length, b.length);
  for (let i = 0; i < n && out.length < 3; i++) if (a[i] !== b[i]) out.push(`#${i}: base ${JSON.stringify(a[i])} vs branch ${JSON.stringify(b[i])}`);
  return `${a.length} vs ${b.length}; ${out.join("; ")}`;
};

function compare(pathname, base, branch) {
  const fails = [];
  if (DEDUPED.has(pathname)) {
    if (!isSubsequence(branch.text, base.text) || branch.text.length >= base.text.length) fails.push("deduped page: text was added or changed, not only removed");
    if (!isSubsequence(branch.links, base.links)) fails.push("deduped page: a link was added or changed, not only removed");
    const hrefs = new Set(branch.links.map((l) => l.split(" | ")[0]));
    for (const l of base.links) {
      const href = l.split(" | ")[0];
      if (!hrefs.has(href)) lostLinks.push(`${pathname}: ${href}`);
    }
    if (JSON.stringify(base.headings) !== JSON.stringify(branch.headings)) fails.push(`headings ${listDiff(base.headings, branch.headings)}`);
    if (JSON.stringify(sortKeys(base.head)) !== JSON.stringify(sortKeys(branch.head))) fails.push("head differs");
    if (JSON.stringify(base.jsonld) !== JSON.stringify(branch.jsonld)) fails.push("json-ld differs");
    if (branch.alts.some((a) => !base.alts.includes(a))) fails.push("image alt added");
    return fails;
  }
  if (base.text !== branch.text) fails.push(`text ${firstDiff(base.text, branch.text)}`);
  if (JSON.stringify(base.headings) !== JSON.stringify(branch.headings)) fails.push(`headings ${listDiff(base.headings, branch.headings)}`);
  const h1 = branch.headings.filter((h) => h.startsWith("h1:")).length;
  if (h1 !== 1) fails.push(`h1 count is ${h1}`);
  if (JSON.stringify(base.links) !== JSON.stringify(branch.links)) fails.push(`links ${listDiff(base.links, branch.links)}`);
  if (JSON.stringify(sortKeys(base.head)) !== JSON.stringify(sortKeys(branch.head))) fails.push(`head ${firstDiff(JSON.stringify(sortKeys(base.head)), JSON.stringify(sortKeys(branch.head)))}`);
  if (JSON.stringify(base.jsonld) !== JSON.stringify(branch.jsonld)) fails.push(`json-ld ${listDiff(base.jsonld, branch.jsonld)}`);
  if (JSON.stringify(base.alts) !== JSON.stringify(branch.alts)) fails.push(`image alts ${listDiff(base.alts, branch.alts)}`);
  if (branch.imgNoAlt > base.imgNoAlt) fails.push(`${branch.imgNoAlt - base.imgNoAlt} image(s) added without alt`);
  // Homepage featured block: nothing the base showed may be missing.
  if (pathname === "/") {
    if (!branch.featured.text.includes(base.featured.text)) fails.push("featured: base text missing from the track");
    let i = 0;
    for (const l of branch.featured.links) if (l === base.featured.links[i]) i++;
    if (i !== base.featured.links.length) fails.push(`featured: base link missing from the track (${base.featured.links[i]})`);
    for (const alt of base.featured.alts) if (!branch.featured.alts.includes(alt)) fails.push(`featured: alt missing (${alt})`);
  }
  return fails;
}

async function waitFor(url) {
  for (let i = 0; i < 120; i++) {
    try {
      const r = await fetch(url);
      if (r.status < 500) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Server did not start: ${url}`);
}

function start(dir, port) {
  if (args.includes("--build")) execSync("npm run build", { cwd: dir, stdio: "inherit" });
  const child = spawn("npx", ["next", "start", "-p", String(port)], { cwd: dir, stdio: "ignore", detached: true });
  return child;
}

async function pool(items, size, fn) {
  let i = 0;
  await Promise.all(
    Array.from({ length: size }, async () => {
      while (i < items.length) {
        const item = items[i++];
        await fn(item);
      }
    }),
  );
}

const servers = [start(BASE_DIR, BASE_PORT), start(BRANCH_DIR, BRANCH_PORT)];
const stop = () => servers.forEach((s) => { try { process.kill(-s.pid); } catch {} });
process.on("exit", stop);

const B = `http://localhost:${BASE_PORT}`;
const N = `http://localhost:${BRANCH_PORT}`;
let failed = 0;
const fail = (msg) => {
  failed++;
  console.log(`FAIL ${msg}`);
};

try {
  await Promise.all([waitFor(B), waitFor(N)]);

  const [smBase, smBranch] = await Promise.all([fetch(`${B}/sitemap.xml`).then((r) => r.text()), fetch(`${N}/sitemap.xml`).then((r) => r.text())]);
  // Some entries are stamped with the build time, which differs between two builds.
  // Replace each side's build stamp (its most frequent lastmod) before comparing.
  const smNorm = (x) => {
    const stamps = [...x.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((m) => m[1]);
    const freq = new Map();
    for (const t of stamps) freq.set(t, (freq.get(t) ?? 0) + 1);
    const build = [...freq].sort((a, b) => b[1] - a[1])[0]?.[0];
    return build ? x.replaceAll(`<lastmod>${build}</lastmod>`, "<lastmod>BUILD</lastmod>") : x;
  };
  if (smNorm(smBase) !== smNorm(smBranch)) fail("sitemap.xml differs between base and branch");
  for (const f of ["/robots.txt", "/manifest.webmanifest"]) {
    const [a, b] = await Promise.all([fetch(B + f).then((r) => r.text()), fetch(N + f).then((r) => r.text())]);
    if (a !== b) fail(`${f} differs`);
  }
  let paths = [...smBranch.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(decode(m[1])).pathname.replace(/\/$/, "") || "/");
  for (const p of NOINDEX_PATHS) if (paths.includes(p)) fail(`${p} must not be in the sitemap`);
  const sitemapCount = paths.length;
  paths = [...new Set([...paths, ...NOINDEX_PATHS])];
  if (ONLY) paths = ONLY.split(",");

  const amazon = { base: 0, branch: 0, baseTagged: 0, branchTagged: 0 };
  const failedPages = [];
  await pool(paths, 8, async (p) => {
    const [rb, rn] = await Promise.all([fetch(B + p), fetch(N + p)]);
    if (rn.status !== 200) return fail(`${p} status ${rn.status} on branch (base ${rb.status})`);
    const [hb, hn] = await Promise.all([rb.text(), rn.text()]);
    const a = analyse(hb, "base", p);
    const b = analyse(hn, "branch", p);
    for (const [side, r] of [["base", a], ["branch", b]]) {
      for (const l of [...r.links, ...r.featured.links]) {
        if (/^https?:\/\/(www\.)?(amazon\.|amzn\.)/.test(l)) {
          amazon[side]++;
          if (l.includes("tag=pilatescollective-20")) amazon[`${side}Tagged`]++;
        }
      }
    }
    if (NOINDEX_PATHS.includes(p) && !/noindex/.test((b.head.robots ?? []).join(","))) fail(`${p} is no longer noindex`);
    const fails = compare(p, a, b);
    if (fails.length) {
      failedPages.push(p);
      fail(`${p}\n     ${fails.join("\n     ")}`);
    }
  });

  console.log("");
  console.log(`Sitemap URLs: ${sitemapCount}. Pages compared: ${paths.length}. Pages with differences: ${failedPages.length}.`);
  console.log(`Amazon links: base ${amazon.base} (${amazon.baseTagged} tagged), branch ${amazon.branch} (${amazon.branchTagged} tagged).`);
  console.log(`Deduped pages (one At a Glance list each): ${DEDUPED.size}. Link destinations that no longer appear on their page: ${lostLinks.length}.`);
  for (const l of lostLinks) console.log(`   ${l}`);
  console.log("Counted per page across all pages, so shared header, footer and card links repeat. The homepage count rises because every featured story is now in the HTML.");
} finally {
  stop();
}
console.log(failed ? `\nVERIFY FAILED: ${failed} problem(s)` : "\nVERIFY PASSED");
process.exit(failed ? 1 : 0);
