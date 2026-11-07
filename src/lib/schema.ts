// Google rejects a Product unless it carries offers, review or aggregateRating,
// and rejects offers whose price is empty, zero or not a plain number. Pages
// list some items without a verifiable price (brand-direct, "contact for
// pricing"), so run every JSON-LD object through this before rendering it.

import { amazonImageFor } from "@/lib/amazonImages";

type Node = Record<string, unknown>;

const isProduct = (t: unknown) => t === "Product" || (Array.isArray(t) && t.includes("Product"));

// "$1,329.99", "~$128 (alo.com)", "From $19.99" -> "1329.99"; null when no positive amount.
function cleanPrice(raw: unknown): string | null {
  const match = String(raw ?? "").match(/\d[\d,]*(?:\.\d+)?/);
  if (!match) return null;
  const n = Number(match[0].replace(/,/g, ""));
  return n > 0 ? String(n) : null;
}

function validOffer(offer: unknown, fallbackUrl: unknown): Node | null {
  if (!offer || typeof offer !== "object" || Array.isArray(offer)) return null;
  const o = offer as Node;
  const price = cleanPrice(o.price);
  if (!price) return null;
  return { ...o, price, url: o.url ?? fallbackUrl };
}

// Turns a Product node into one Google accepts, or null when it cannot be valid.
// Merchant listings also need an image: Amazon items get their product photo
// from the Creators API data; a priced item with no real photo is not marked up
// as a product for sale rather than shown with an unrelated picture.
function cleanProduct(p: Node): Node | null {
  const offer = validOffer(p.offers, p.url);
  const image = p.image ?? amazonImageFor(String(offer?.url ?? p.url ?? ""));
  if (offer && image) return { ...p, image, offers: offer };
  if (!p.review && !p.aggregateRating) return null;
  // Reviewed products stay valid without an offer; drop an unusable one.
  const { offers: _o, ...rest } = p;
  void _o;
  return image ? { ...rest, image } : rest;
}

// Product lists follow the site rule: Amazon product (ASIN) links first, then
// Amazon search links, then brand-direct links. Entries without a shop link
// (and The Core Collab partner placements) keep their slot; the rest are
// stably sorted around them and the positions renumbered.
function linkRank(url: unknown): number | null {
  const u = typeof url === "string" ? url : "";
  if (!u || /thecorecollab/i.test(u)) return null;
  if (/amazon\.[a-z.]+\/(?:[^/?#]+\/)?(?:dp|gp\/product)\//.test(u)) return 0;
  if (/amazon\.[a-z.]+\/s\?/.test(u)) return 1;
  return /^https?:\/\//.test(u) && !u.includes("pilatescollectiveclub.com") ? 2 : null;
}

function sortItemList(list: Node): Node {
  const items = list.itemListElement;
  if (!Array.isArray(items)) return list;
  const urlOf = (li: Node) => {
    const item = (li.item && typeof li.item === "object" ? li.item : {}) as Node;
    return (item.offers as Node | undefined)?.url ?? item.url ?? li.url;
  };
  const ranks = items.map((li) => linkRank(urlOf(li as Node)));
  const movable = ranks.map((r, i) => (r === null ? -1 : i)).filter((i) => i >= 0);
  const order = [...movable].sort((a, b) => (ranks[a] as number) - (ranks[b] as number) || a - b);
  const next = [...items];
  movable.forEach((slot, k) => { next[slot] = items[order[k]]; });
  return { ...list, itemListElement: next.map((li, i) => (li && typeof li === "object" && "position" in (li as Node) ? { ...(li as Node), position: i + 1 } : li)) };
}

function clean(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(clean);
  if (!value || typeof value !== "object") return value;
  const node = value["@type" as keyof typeof value] === "ItemList" ? sortItemList(value as Node) : (value as Node);

  // ItemList entries: keep the list position but drop the Product type when
  // the item has no valid price, so it stays a plain named, linked list item.
  if (node["@type"] === "ListItem" && node.item && typeof node.item === "object" && isProduct((node.item as Node)["@type"])) {
    const item = node.item as Node;
    const product = cleanProduct(item);
    if (product) return { ...node, item: product };
    const { item: _unused, ...rest } = node;
    void _unused;
    const url = item.url ?? (item.offers as Node | undefined)?.url;
    return { ...rest, name: item.name, ...(url ? { url } : {}) };
  }

  const out: Node = {};
  for (const [k, v] of Object.entries(node)) out[k] = clean(v);
  if (isProduct(out["@type"])) {
    const product = cleanProduct(out);
    if (!product) {
      const { offers: _o, ...rest } = out;
      void _o;
      return { ...rest, "@type": "Thing" };
    }
    return product;
  }
  return out;
}

export function cleanSchema<T>(jsonLd: T): T {
  return clean(jsonLd) as T;
}

export function jsonLdHtml(jsonLd: unknown): string {
  return JSON.stringify(cleanSchema(jsonLd));
}

// ItemList of Products with USD offers, matching the top guides' markup.
// Descriptions are stripped of HTML; items without a usable price are dropped
// by jsonLdHtml when the page renders.
export function productItemList(name: string, items: { name: string; description?: string; price: string; url: string; inStock?: boolean }[]) {
  const text = (s = "") => s.replace(/<[^>]+>/g, "").replace(/&apos;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
  return {
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        ...(p.description ? { description: text(p.description) } : {}),
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          price: p.price,
          url: p.url,
          // inStock: false marks made-to-order listings (Amazon shows a lead time).
          availability: p.inStock === false ? "https://schema.org/MadeToOrder" : "https://schema.org/InStock",
        },
      },
    })),
  };
}
