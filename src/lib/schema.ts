// Google rejects a Product unless it carries offers, review or aggregateRating,
// and rejects offers whose price is empty, zero or not a plain number. Pages
// list some items without a verifiable price (brand-direct, "contact for
// pricing"), so run every JSON-LD object through this before rendering it.

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
function cleanProduct(p: Node): Node | null {
  const offer = validOffer(p.offers, p.url);
  if (offer) return { ...p, offers: offer };
  if (!p.review && !p.aggregateRating) return null;
  // Reviewed products stay valid without an offer; drop an unusable one.
  const { offers: _o, ...rest } = p;
  void _o;
  return rest;
}

function clean(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(clean);
  if (!value || typeof value !== "object") return value;
  const node = value as Node;

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
