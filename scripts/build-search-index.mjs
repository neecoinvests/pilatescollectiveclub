// Builds public/search-index.json from every page's metadata (title, description, keywords).
// Runs automatically before `next build` (see the "prebuild" script in package.json).
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const APP = path.join(ROOT, "src", "app");
const OUT = path.join(ROOT, "public", "search-index.json");

const SKIP = [/^partner-preview/, /^api\//, /\[/];

function walk(dir, rel = "") {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const r = rel ? `${rel}/${entry.name}` : entry.name;
    if (entry.isDirectory()) out.push(...walk(path.join(dir, entry.name), r));
    else if (entry.name === "page.tsx") out.push(rel);
  }
  return out;
}

function str(block, key, src = "") {
  let m = block.match(new RegExp(`["']?\\b${key}["']?\\s*:\\s*("(?:[^"\\\\]|\\\\.)*"|'(?:[^'\\\\]|\\\\.)*')`));
  if (!m && src) {
    // Value held in a constant, e.g. `title: TITLE` with `const TITLE = "..."` elsewhere in the file.
    const id = block.match(new RegExp(`["']?\\b${key}["']?\\s*:\\s*([A-Z_][A-Z0-9_]*)\\s*[,}\\n]`));
    if (id) m = src.match(new RegExp(`const\\s+${id[1]}\\s*(?::[^=]+)?=\\s*("(?:[^"\\\\]|\\\\.)*"|'(?:[^'\\\\]|\\\\.)*')`));
  }
  if (!m) return "";
  try {
    return m[1].startsWith('"') ? JSON.parse(m[1]) : m[1].slice(1, -1);
  } catch {
    return m[1].slice(1, -1);
  }
}

function metadataBlock(src) {
  const i = src.indexOf("export const metadata");
  if (i < 0) return "";
  // Stop at openGraph so its shorter title/description do not win.
  const rest = src.slice(i);
  const og = rest.search(/["']?openGraph["']?\s*:/);
  return og > 0 ? rest.slice(0, og) : rest.slice(0, 4000);
}

// Category and image for blog posts, taken from the blog index list.
const blogIndex = fs.readFileSync(path.join(APP, "blog", "page.tsx"), "utf8");
const postInfo = {};
for (const m of blogIndex.matchAll(/\{\s*title:[\s\S]*?href:\s*"([^"]+)"[\s\S]*?category:\s*"([^"]+)"[\s\S]*?imageUrl:\s*"([^"]+)"/g)) {
  postInfo[m[1]] = { category: m[2], image: m[3] };
}

const items = [];
for (const rel of walk(APP)) {
  if (SKIP.some((re) => re.test(rel))) continue;
  const src = fs.readFileSync(path.join(APP, rel, "page.tsx"), "utf8");
  const block = metadataBlock(src);
  if (!block) continue;
  if (/robots\s*:\s*\{[^}]*index\s*:\s*false/.test(block)) continue;
  let title = str(block, "title", src);
  if (!title) {
    const abs = block.match(/title\s*:\s*\{[^}]*absolute\s*:\s*"([^"]+)"/);
    title = abs ? abs[1] : "";
  }
  if (!title) continue;
  const description = str(block, "description", src);
  const kw = block.match(/["']?keywords["']?\s*:\s*\[([\s\S]*?)\]/);
  const keywords = kw ? [...kw[1].matchAll(/"([^"]+)"/g)].map((x) => x[1]) : [];
  const url = rel ? `/${rel}` : "/";
  const section = rel.split("/")[0];
  const type =
    section === "blog" && rel !== "blog" ? (postInfo[url]?.category || "Guide")
    : section === "cities" && rel !== "cities" ? "City guide"
    : "Page";
  items.push({
    url,
    title: title.replace(/\s*\|\s*Pilates Collective Club\s*$/, ""),
    description,
    keywords,
    type,
    image: postInfo[url]?.image || "",
  });
}

items.sort((a, b) => a.url.localeCompare(b.url));
fs.writeFileSync(OUT, JSON.stringify(items));
console.log(`search index: ${items.length} pages -> public/search-index.json`);
