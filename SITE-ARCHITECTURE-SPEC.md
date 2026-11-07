# Site Architecture Spec: Pilates Collective Club

A rebuild-from-scratch specification of the technical foundation of **pilatescollectiveclub.com**, written from the live code and the live site on 2026-11-07. It is meant to be handed to a fresh Claude Code session building a new affiliate site.

Conventions in this document:

- Code blocks are copied from the real codebase unless marked *adapted*.
- **[NICHE]** marks things specific to Pilates that you must change for a new topic.
- **[KNOWN ISSUE]** marks a flaw found while documenting. Do not copy it; the fix is given.
- No credentials appear anywhere in this file or in the repo. Environment variable names only.

---

## 0. The short version

- **Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, deployed on Vercel.
- **Content:** no CMS, no Markdown. Every article is a `page.tsx` holding its data as typed TypeScript arrays (products, FAQs, studios), plus `export const metadata`.
- **Page generation:** almost every page is statically pre-rendered at build time.
- **SEO stack:**
  - Next.js Metadata API on every page (title, description, canonical, Open Graph, Twitter, robots);
  - a filesystem-derived sitemap;
  - a permissive robots.txt;
  - an IndexNow key file plus a submission script.
- **Structured data:** every page ships one `@graph` of JSON-LD.
  - Every JSON-LD object passes through one shared cleaner, `jsonLdHtml()` in `src/lib/schema.ts`.
  - The cleaner normalises prices, injects the Amazon product photo, and strips any Product that Google would reject.
  - Live result: **335 of 361 URLs emit Product markup, about 2,014 Product items, 100% with `image` + `offers`.**
- **Amazon:**
  - Links are plain `https://www.amazon.com/dp/<ASIN>?tag=<tag>` strings in page data.
  - Prices, availability, sellers and product photos come from the **Amazon Creators API**, pulled by an offline script (not at runtime).
  - Photos are stored as an ASIN → image URL map in `src/data/amazon-images.json`.
- **Article template:**
  1. H1 and "Prices checked <date>";
  2. a "Top pick" box;
  3. intro;
  4. hero image;
  5. "Quick Picks" table;
  6. affiliate disclosure;
  7. numbered product cards (photo, name, price, description, button) with specs and pros/cons;
  8. buying guide;
  9. FAQ, matching the FAQPage schema;
  10. further reading;
  11. CTA.

---

## 1. Stack and structure

### 1.1 Versions

`package.json`:

```json
{
  "name": "pilatescollectiveclub",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "node scripts/build-search-index.mjs && next dev",
    "prebuild": "node scripts/build-search-index.mjs",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "@vercel/analytics": "^2.0.1",
    "next": "16.2.6",
    "react": "19.2.4",
    "react-dom": "19.2.4"
  },
  "engines": { "node": ">=20.9.0" },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.2.6",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

Only three runtime dependencies. No CMS, no MDX, no UI library.

> Next.js 16 has breaking changes from older versions. The repo's `AGENTS.md` tells agents to read `node_modules/next/dist/docs/` before writing Next code. Keep that instruction in the new repo:
>
> ```md
> # This is NOT the Next.js you know
> This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
> ```
>
> `CLAUDE.md` contains just `@AGENTS.md`.

### 1.2 Config files

`next.config.ts`:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "m.media-amazon.com" },
    ],
  },
  // Christmas guides renamed to include "christmas" in the URL (October 2026).
  async redirects() {
    return [
      ["pilates-stocking-stuffers", "pilates-christmas-stocking-stuffers"],
      ["pilates-secret-santa-gifts", "pilates-secret-santa-christmas-gifts"],
      // ...
    ].map(([from, to]) => ({ source: `/blog/${from}`, destination: `/blog/${to}`, permanent: true }));
  },
};

export default nextConfig;
```

`vercel.json`:

```json
{ "framework": "nextjs", "buildCommand": "npm run build", "devCommand": "npm run dev", "installCommand": "npm install" }
```

`tsconfig.json` (relevant parts): `"strict": true`, `"moduleResolution": "bundler"`, `"resolveJsonModule": true`, `"paths": { "@/*": ["./src/*"] }`.

`postcss.config.mjs`:

```js
const config = { plugins: { "@tailwindcss/postcss": {} } };
export default config;
```

`eslint.config.mjs`:

```js
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
```

### 1.3 Deployment

- **Platform:** Vercel, Git-connected to GitHub (`neecoinvests/pilatescollectiveclub`).
- **Previews:** each push to a branch creates a **preview** deployment.
- **Production:** going live is a manual **Promote to Production** in Vercel. Nothing goes live on push.
- **Build:** `npm run build`, which runs `prebuild` first and so regenerates the site search index.

### 1.4 Directory structure

```
/
├── AGENTS.md, CLAUDE.md              agent instructions (see 1.1)
├── next.config.ts, vercel.json, tsconfig.json, postcss.config.mjs, eslint.config.mjs
├── public/
│   ├── pictures/                     71 local editorial images (Unsplash + generated studio shots)
│   ├── <indexnow-key>.txt            IndexNow key file (see 2.6)
│   ├── manifest.webmanifest
│   ├── search-index.json             generated at build by scripts/build-search-index.mjs
│   └── icon.png, apple-icon.png, favicon.ico, logo-mark.svg
├── scripts/
│   └── build-search-index.mjs        builds public/search-index.json from page metadata
└── src/
    ├── app/
    │   ├── layout.tsx                root metadata, Organization + WebSite JSON-LD, GA4, Vercel Analytics
    │   ├── globals.css               Tailwind 4 + fonts + design tokens
    │   ├── page.tsx                  homepage
    │   ├── not-found.tsx             404 (noindex)
    │   ├── robots.ts                 robots.txt
    │   ├── sitemap.ts                sitemap.xml (filesystem-derived)
    │   ├── icon.png, icon.svg, apple-icon.png, favicon.ico   (Next file-based icons)
    │   ├── blog/
    │   │   ├── layout.tsx            removes the " | Site Name" title suffix (see 2.1)
    │   │   ├── page.tsx              /blog hub: posts list + ?category= filter
    │   │   └── <slug>/page.tsx       one folder per article (277 articles)
    │   ├── cities/
    │   │   ├── layout.tsx            same title override as blog
    │   │   ├── page.tsx              /cities hub
    │   │   └── <city>/page.tsx       one folder per city guide (75)
    │   ├── brands/page.tsx           /brands hub
    │   └── about-style pages: contact/, advertise/, affiliate-disclosure/, privacy/, terms/
    ├── components/                   shared UI (see 1.6)
    ├── lib/
    │   ├── schema.ts                 THE structured-data cleaner + productItemList()
    │   ├── amazonImages.ts           ASIN -> Amazon photo lookup
    │   ├── categories.ts             blog category list
    │   ├── giftCatalog.ts, reformerCatalog.ts, adventCatalog.ts, blackFriday.ts, seasonalGuides.ts
    │   │                             shared verified product catalogs reused by many pages
    └── data/
        └── amazon-images.json        ASIN -> image URL map (578 entries), from the Creators API
```

### 1.5 How content is stored and rendered

**There is no CMS, no Markdown, no frontmatter.** Each article is a React Server Component file that contains:

1. `export const metadata: Metadata = { ... }`, all SEO tags (see 2.2);
2. typed data arrays (`PRODUCTS`, `FAQS`, `STUDIOS`, `GEAR`);
3. a `jsonLd` object built from those same arrays, so markup always matches the page;
4. the JSX layout, or a call to a shared template component with a props object.

The "frontmatter schema" is therefore the TypeScript shape of the data. Product entry on a hand-built article (`src/app/blog/best-pilates-gloves/page.tsx`):

```ts
const PRODUCTS = [
  {
    rank: "01",
    name: "TAVI Half Finger Gym Gloves (Full Coverage Grips)",
    price: "$31.99",
    verdict: "Best overall: from a dedicated Pilates/barre grip brand",
    description: "TAVI is a dedicated Pilates and barre grip brand, and this half-finger glove pairs a full-coverage grip palm with open fingertips for reformer handles, straps and mat work. ...",
    affiliateUrl: "https://www.amazon.com/dp/B09GPVMF86?tag=pilatescollective-20",
    imageUrl: "https://m.media-amazon.com/images/I/415sXqF7ebL._SL500_.jpg",
    tag: "Best Overall",
  },
  // ...
];
```

Template-driven articles (`EquipmentGuide`, 24 pages; `DealsGuide`, 16 pages) pass a props object instead. Their item type (`src/components/EquipmentGuide.tsx`):

```ts
export type GuideItem = {
  id: string;
  badge: string;
  name: string;
  brand: string;
  price: string;
  url: string;
  // "in-stock" | "low-stock" | "made-to-order" | "back-order" | "direct"
  availability: "in-stock" | "low-stock" | "made-to-order" | "back-order" | "direct";
  soldBy?: string;
  specs: string[];
  body: string;
  pros?: string[];
  cons?: string[];
  ctaLabel?: string;
};

export type GuideBlock =
  | { kind: "prose"; id?: string; eyebrow?: string; heading: string; paragraphs: string[] }
  | { kind: "products"; id: string; eyebrow?: string; heading: string; intro?: string; items: GuideItem[] }
  | { kind: "table"; id?: string; eyebrow?: string; heading: string; intro?: string; columns: string[]; rows: string[][]; note?: string }
  | { kind: "cards"; id?: string; eyebrow?: string; heading: string; intro?: string; cards: { h: string; b: string }[] }
  | { kind: "callout"; eyebrow: string; heading: string; body: string[]; dark?: boolean }
  | { kind: "steps"; id?: string; eyebrow?: string; heading: string; intro?: string; steps: { h: string; b: string }[] };

export type EquipmentGuideProps = {
  slug: string; title: string; description: string; breadcrumb: string;
  eyebrow: string; eyebrowAccent: string; h1: string; h1Accent: string;
  readTime: string; updatedLabel: string; datePublished: string; dateModified: string;
  heroImage: string; heroAlt: string; heroCaption?: string;
  intro: string[];
  quickPicks?: { label: string; itemId: string }[];
  blocks: GuideBlock[];
  faqs: { q: string; a: string }[];
  related: { title: string; excerpt: string; href: string; imageUrl: string; category: string; readTime: string }[];
  sources?: { label: string; url: string }[];
  ctaTitle?: string; ctaSubtitle?: string;
};
```

Products reused across many pages live in catalogs (`src/lib/giftCatalog.ts`, `adventCatalog.ts`, `reformerCatalog.ts`). Pages spread an entry and override the context-specific fields:

```ts
// src/lib/adventCatalog.ts
const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=pilatescollective-20`;

export const ADVENT = {
  twiningsTea: {
    id: "twinings-tea-advent-calendar", name: "Twinings Tea Advent Calendar Gift Set", brand: "Twinings", price: "$25.99", url: amz("B0FHX88QXK"),
    availability: "in-stock", soldBy: "Amazon.com",
    specs: ["48 tea bags: 2 a day for 24 days", "20 of Twinings' blends: black, chai, green and herbal", "A message or recipe behind every door"],
    body: "Two tea bags a day, so there is one to share. ...",
  },
  // ...
} satisfies Record<string, Omit<GuideItem, "badge">>;

export function advent(key: keyof typeof ADVENT, overrides: Partial<GuideItem> & { badge: string }): GuideItem {
  return { ...ADVENT[key], ...overrides } as GuideItem;
}

// in a page:
items: [ advent("twiningsTea", { badge: "Best Tea Calendar", pros: ["2 tea bags a day"], cons: ["Mostly classic blends"] }) ]
```

**Recommendation for the new site:** start every article on the `EquipmentGuide`-style template (data in, layout and schema out) plus catalogs. Hand-built pages drift: three different Article schema shapes exist on this site (see 3.6).

### 1.6 Shared components

| Component | Role |
|---|---|
| `Header.tsx` + `nav-menus.ts` | Fixed header. Desktop mega menus for Journal, Brands, Cities, About and Shop Gear (tabbed panels, featured card). Mobile accordion. Site search trigger. |
| `Footer.tsx` | Site-wide links: hubs, blog categories, top city guides, legal pages. |
| `SiteSearch.tsx` | Client-side fuzzy search over `public/search-index.json` (Cmd/Ctrl+K). |
| `TopPick.tsx` | "Our top pick" box right under the H1 (first affiliate link on the first mobile screen). |
| `QuickPicks.tsx` | "Quick Picks: At a Glance" numbered table with Shop buttons. |
| `AffiliateNote.tsx` | Disclosure line, placed after Quick Picks. |
| `ProductCard.tsx` (server) → `ProductCardView.tsx` (client) | The product card. Auto-adds the Amazon photo. |
| `EquipmentGuide.tsx` | Full article template (layout + JSON-LD). |
| `DealsGuide.tsx` | Black Friday / Cyber Monday deals template. |
| `UpsellCTA.tsx` | Mid-article cross-sell box (text-only, no photos). |
| `FaqSection.tsx` | Visible FAQ, can be generated from the page's FAQPage JSON-LD. |
| `ArticleCard.tsx` | "Further reading" card. |
| `CTASection.tsx` | End-of-page call to action (find a studio). |
| `StudioListing.tsx`, `CityCard.tsx` | City guide studio entries and city tiles. **[NICHE]** |

### 1.7 Routing

| URL | Source | Notes |
|---|---|---|
| `/` | `src/app/page.tsx` | Homepage |
| `/blog` | `src/app/blog/page.tsx` | Hub: every post, from a `posts` array in this file. Marked `ƒ` (dynamic) in the build output. |
| `/blog?category=Equipment` | same file | Category "hubs" are **query-string filters**, not separate URLs. Canonical stays `/blog`. Uses `searchParams`, so `/blog` renders dynamically. |
| `/blog/<slug>` | `src/app/blog/<slug>/page.tsx` | One folder per article. Static. |
| `/cities` | `src/app/cities/page.tsx` | Hub grouped by region |
| `/cities/<city>` | `src/app/cities/<city>/page.tsx` | One folder per city. Static. **[NICHE]** |
| `/brands` | `src/app/brands/page.tsx` | Brand hub linking to brand-guide articles |
| `/contact`, `/advertise`, `/affiliate-disclosure`, `/privacy`, `/terms` | own folders | |

No dynamic `[slug]` routes are used. A new article is a new folder, which the sitemap and search index pick up automatically.

Blog categories (`src/lib/categories.ts`):

```ts
export const CATEGORIES = [
  "All", "Equipment", "Brand Guide", "Method", "Health", "Guide", "Beginners", "Performance",
  "Comparison", "Reading", "Travel", "Tech & Devices", "Clothing", "Studio Essentials", "Lagree", "Spinning",
] as const;
```

**[NICHE]** Category names. Note that adding a post means adding it to the `posts` array in `src/app/blog/page.tsx` too (title, excerpt, href, category, readTime, imageUrl).

---

## 2. SEO implementation

### 2.1 Root metadata and title strategy

`src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { jsonLdHtml } from "@/lib/schema";

const BASE_URL = "https://pilatescollectiveclub.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Pilates Collective Club: Find Your Perfect Studio",
    template: "%s | Pilates Collective Club",
  },
  description: "Curated city guides, expert studio recommendations, and equipment picks for Pilates practitioners worldwide. ...",
  keywords: ["pilates studios", "best pilates studios", "reformer pilates", /* ... */],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Pilates Collective Club: Find Your Perfect Studio",
    description: "Curated city guides, expert studio recommendations, and equipment picks for Pilates practitioners worldwide.",
    siteName: "Pilates Collective Club",
    type: "website",
    url: BASE_URL,
    images: [{ url: "/pictures/roxana-popovici-2QeonB1SdQk-unsplash.jpg", width: 1200, height: 630, alt: "Pilates Collective Club: Find Your Perfect Studio" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilates Collective Club: Find Your Perfect Studio",
    description: "Curated city guides, expert studio recommendations, and equipment picks for Pilates practitioners worldwide.",
    images: ["/pictures/roxana-popovici-2QeonB1SdQk-unsplash.jpg"],
    site: "@pilatescollective",
  },
  alternates: { canonical: BASE_URL },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}</Script>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(orgSchema) }} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

(The real file has the GA4 measurement ID hardcoded; it is replaced with `G-XXXXXXXXXX` here.)

**Article titles skip the site-name suffix.** `src/app/blog/layout.tsx` and `src/app/cities/layout.tsx` are identical:

```tsx
import type { Metadata } from "next";

// Article and guide titles are already long and keyword-led, and Google shows
// the site name separately, so they skip the root " | Pilates Collective Club"
// suffix to stay inside the ~60 characters Google displays.
export const metadata: Metadata = {
  title: { template: "%s", default: "Pilates Collective Club" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
```

So `/contact` renders `<title>Contact | Pilates Collective Club</title>`, while `/blog/best-pilates-gloves` renders `<title>Best Pilates Gloves (2026): 5 Verified Grip Gloves</title>`.

**Title formula used on money pages:** `Best <Product> (<Year>): <Number> <Benefit>`, e.g. "Best Pilates Gloves (2026): 5 Verified Grip Gloves", "Best Home Pilates Reformer (2026): $359 to $4,700 Compared". Keep it under about 60 characters.

### 2.2 Per-page metadata (every article and city page)

Real example, `src/app/blog/best-pilates-gloves/page.tsx`:

```tsx
export const metadata: Metadata = {
  title: "Best Pilates Gloves (2026): 5 Verified Grip Gloves",
  description: "5 verified, in-stock Pilates grip gloves on Amazon: TAVI, Gaiam, oasymala and Eurzom for reformer, barre and mat, plus one wrist-support pick for Lagree.",
  keywords: ["best pilates gloves", "lagree gloves", "reformer pilates gloves", "grip gloves pilates", /* ... */],
  openGraph: {
    title: "Best Pilates Gloves (2026): 5 Verified Grip Gloves",
    description: "Five verified, in-stock Pilates grip gloves for reformer, barre and mat, plus one wrist-support pick for Lagree. Real ASINs, exact prices, honest notes.",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-gloves",
    type: "article",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg", width: 1200, height: 630, alt: "Best Pilates Gloves" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Gloves (2026): 5 Verified Grip Gloves",
    description: "Five verified, in-stock Pilates grip gloves: TAVI, Gaiam, oasymala, Eurzom and MhIL.",
    images: ["https://pilatescollectiveclub.com/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-pilates-gloves" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};
```

Template pages build the same object from constants:

```tsx
const SLUG = "best-pilates-yoga-advent-calendars";
const URL = `https://pilatescollectiveclub.com/blog/${SLUG}`;
const HERO = "/pictures/stitch-magic-circle-hand.png";
const TITLE = "Best Pilates & Yoga Advent Calendars (2026)";
const DESCRIPTION = "9 Pilates and yoga advent calendars on Amazon for 2026: MOVINPE, JAZOZT and pidouzim prop kits, ...";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [/* ... */],
  openGraph: { title: TITLE, description: DESCRIPTION, type: "article", url: URL, images: [{ url: `https://pilatescollectiveclub.com${HERO}`, width: 1200, height: 630, alt: "A hand holding a grey Pilates ring" }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [`https://pilatescollectiveclub.com${HERO}`] },
  alternates: { canonical: URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};
```

**Exact tags output** (live HTML of `/blog/best-pilates-gloves`, `<head>`):

```html
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Best Pilates Gloves (2026): 5 Verified Grip Gloves</title>
<meta name="description" content="5 verified, in-stock Pilates grip gloves on Amazon: TAVI, Gaiam, oasymala and Eurzom ..."/>
<link rel="manifest" href="/manifest.webmanifest"/>
<meta name="keywords" content="best pilates gloves,lagree gloves,reformer pilates gloves,..."/>
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1"/>
<link rel="canonical" href="https://pilatescollectiveclub.com/blog/best-pilates-gloves"/>
<meta property="og:title" content="Best Pilates Gloves (2026): 5 Verified Grip Gloves"/>
<meta property="og:description" content="Five verified, in-stock Pilates grip gloves ..."/>
<meta property="og:url" content="https://pilatescollectiveclub.com/blog/best-pilates-gloves"/>
<meta property="og:image" content="https://pilatescollectiveclub.com/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"/>
<meta property="og:image:alt" content="Best Pilates Gloves"/>
<meta property="og:type" content="article"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="Best Pilates Gloves (2026): 5 Verified Grip Gloves"/>
<meta name="twitter:description" content="Five verified, in-stock Pilates grip gloves: TAVI, Gaiam, oasymala, Eurzom and MhIL."/>
<meta name="twitter:image" content="https://pilatescollectiveclub.com/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg"/>
<link rel="icon" href="/favicon.ico" sizes="16x16" type="image/x-icon"/>
<link rel="icon" href="/icon.png" sizes="512x512" type="image/png"/>
<link rel="icon" href="/icon.svg" sizes="any" type="image/svg+xml"/>
<link rel="apple-touch-icon" href="/apple-icon.png" sizes="180x180" type="image/png"/>
```

Coverage on the 352 article and city pages: canonical on 352, Open Graph on 352, Twitter card on 343, `dateModified` in JSON-LD on 336, FAQPage on 311.

The `<meta name="keywords">` tag is ignored by Google. It is kept because the site search uses it (see 6.4).

### 2.3 Canonical URLs

- Every indexable page sets `alternates.canonical` to its **absolute** URL, with no trailing slash and no query string.
- Query-string views (`/blog?category=...`) inherit the `/blog` canonical, so filters never create duplicate URLs.
- `metadataBase` is set in the root layout, so relative Open Graph image paths resolve to absolute URLs.

### 2.4 Sitemap

`src/app/sitemap.ts` reads the route folders, so a new article folder is in the sitemap on the next build:

```ts
import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";

const BASE_URL = "https://pilatescollectiveclub.com";

// Derived from the route folders rather than a hand-kept list, which had drifted
// 13 pages behind the app directory.
function routeSlugs(segment: string): string[] {
  const dir = path.join(process.cwd(), "src", "app", segment);

  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && fs.existsSync(path.join(dir, entry.name, "page.tsx")))
    .map((entry) => entry.name)
    .sort();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE_URL}/brands`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/cities`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE_URL}/advertise`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/affiliate-disclosure`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  return [
    ...staticRoutes,
    ...routeSlugs("cities").map((slug) => ({ url: `${BASE_URL}/cities/${slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 })),
    ...routeSlugs("blog").map((slug) => ({ url: `${BASE_URL}/blog/${slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
```

| Group | priority | changefreq |
|---|---|---|
| Homepage | 1.0 | weekly |
| /brands, /cities, each city guide | 0.9 | weekly (hubs) / monthly (cities) |
| /blog | 0.85 | weekly |
| Each article | 0.7 | monthly |
| Contact, advertise | 0.4 | yearly |
| Privacy, terms, disclosure | 0.3 | yearly |

> **[KNOWN ISSUE]** `lastModified` is the build time for every URL, so each deploy claims every page changed. Google learns to ignore it. **Fix for the new site:** export each page's real modified date (you already have it in the JSON-LD `dateModified`) and use that. One way is a small `src/lib/pageDates.ts` map, or reading `dateModified` the same way `build-search-index.mjs` reads metadata.

### 2.5 robots.txt

`src/app/robots.ts`:

```ts
import type { MetadataRoute } from "next";

const BASE_URL = "https://pilatescollectiveclub.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
```

Only the 404 page is `noindex` (via its own metadata).

### 2.6 IndexNow

Present. There is no package and no build hook: it's a key file plus a submission request.

**Step 1.** Generate a key once and publish it as `public/<key>.txt`, containing exactly the key:

```bash
K=$(python3 -c "import secrets;print(secrets.token_hex(16))")
printf "%s" "$K" > public/$K.txt
```

**Step 2.** After the pages are **live in production**, POST the URL list:

```bash
cat > indexnow.json <<EOF
{
  "host": "example.com",
  "key": "<key>",
  "keyLocation": "https://example.com/<key>.txt",
  "urlList": ["https://example.com/blog/new-article-1", "https://example.com/blog/new-article-2"]
}
EOF
curl -sS -X POST https://api.indexnow.org/indexnow \
  -H "Content-Type: application/json; charset=utf-8" --data @indexnow.json -w "HTTP %{http_code}\n"
```

- **Responses:** 202 means accepted and the key is still being validated (first submission); 200 means accepted. Both are success.
- **Who receives it:** one submission reaches Bing, Yandex, Seznam and Naver.
- **Google doesn't use IndexNow.** Use Search Console "Request indexing" plus the sitemap.

Because production deploys are manual promotions, the working pattern was a small watcher script. It polls until the new URLs return 200 on the production domain, then submits once:

```bash
#!/bin/bash
for i in $(seq 1 240); do
  ok=0
  for u in $(jq -r '.urlList[]' indexnow.json); do
    [ "$(curl -s -o /dev/null -m 20 -w '%{http_code}' "$u")" = 200 ] && ok=$((ok+1))
  done
  if [ "$ok" = "$(jq '.urlList|length' indexnow.json)" ]; then
    curl -sS -X POST https://api.indexnow.org/indexnow -H "Content-Type: application/json; charset=utf-8" --data @indexnow.json -w "IndexNow HTTP %{http_code}\n"
    exit 0
  fi
  sleep 60
done
exit 1
```

*(adapted: the original hard-coded the URLs instead of using `jq`)*

### 2.7 Internal linking

These linking layers exist on every page:

1. **Header mega menus** (desktop) from `src/components/nav-menus.ts`. About 165 curated links to money pages and hubs on every page.
   - **Journal:** tabs by topic. **Brands:** grouped by type. **Cities:** tabs by region. **About.**
   - **Shop Gear:** 9 category tabs. Each tab has 2 to 4 link groups, one featured article card with an image, and an "All …" link to the category filter.

   Data shape:

   ```ts
   export type MenuLink = { label: string; href: string };
   export type MenuTab = {
     label: string;
     groups: { label: string; links: MenuLink[] }[];
     featured?: { title: string; href: string; image: string };
     intro?: { title: string; body: string };
     all?: MenuLink;
   };
   export type Menu = { id: string; label: string; href?: string; tabs: MenuTab[] };

   // example tab
   {
     label: "Reformers",
     groups: [
       { label: "By need", links: [{ label: "Best Home Reformers", href: "/blog/best-home-pilates-reformer" }, /* ... */] },
       { label: "By budget", links: [{ label: "Under $500", href: "/blog/best-pilates-reformer-under-500" }, /* ... */] },
     ],
     featured: { title: "Best Home Pilates Reformer (2026): $359 to $4,700 Compared", href: "/blog/best-home-pilates-reformer", image: "/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg" },
     all: { label: "All equipment", href: "/blog?category=Equipment" },
   }
   ```

   The nav labels themselves (Journal, Brands, Cities) are real `<Link>`s to their hubs, so crawlers follow them; the panel opens on hover.
2. **Footer:** hub links, 8 blog category filters, 6 top city guides, legal pages.
3. **In-article "Further reading"** at the end of every article: 2 to 6 `ArticleCard`s to closely related guides.
4. **In-article cross-links:** prose links to sibling guides (comparison ↔ brand reviews ↔ "best X" roundups), and an `UpsellCTA` box linking to complementary products.
5. **Hubs:** `/blog` lists every post with filters; `/brands` links each brand guide; `/cities` lists every city by region. City guides link to 3 related cities plus further reading.
6. **Site search** (header, Cmd/Ctrl+K). This is for users, not crawlers.

Measured on two articles: 7 to 8 internal links inside `<main>`, plus the roughly 165 menu links and the footer links.

### 2.8 Breadcrumbs

- **Breadcrumbs are structured data only.** Nothing visible is rendered on the page.
- **Articles:** Home › Blog › Article.

  ```ts
  {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "Best Pilates Gloves", "item": "https://pilatescollectiveclub.com/blog/best-pilates-gloves" },
    ],
  }
  ```

- **City guides:** Home › City.

> **[KNOWN ISSUE]** City breadcrumbs skip the `/cities` hub (Home › London instead of Home › Cities › London). **Fix:** always include the hub level.

### 2.9 Heading hierarchy

- **H1:** exactly one per page, in two parts: the keyword title plus a coloured second line, e.g. `Best Pilates Gloves (2026):` / `Grip Gloves for Reformer & Lagree`.
- **H2:** each major section (products block heading, buying guide, comparison, FAQ, "Further reading", CTA).
- **H3:** each product name (inside `ProductCard`), each FAQ question, each buying-guide sub-point, each further-reading card title.
- **Template pages (`EquipmentGuide`):** always H1 → H2 (block heading) → H3 (product).

> **[KNOWN ISSUE]** Some hand-built articles go from H1 straight to the H3 product names, with no H2 above the product list. The gloves page is one example. **Fix:** always put an H2 such as "The 5 best Pilates gloves" above the cards.

---

## 3. Structured data

### 3.1 Live coverage (measured 2026-11-07 on the production site)

| Measure | Value |
|---|---|
| URLs in sitemap | 361 |
| URLs emitting `Product` markup | **335** (261 blog, 74 city guides) |
| Product items in total | about 2,014 |
| Products with `offers` but no `image` | **0** |
| Pages with `FAQPage` | 311 of 352 article/city pages |

Search Console's "Product snippets" count (121 in your report) is the number of items Google has crawled, parsed and reported. That count lags and samples. It isn't a count of what the site outputs. I can't see your Search Console from here, and can't prove the snippets cause the outperformance. What the code guarantees is that **every** Product the site outputs passes Google's validity rules (section 3.3). That is what you replicate.

### 3.2 Architecture: three layers

1. **Site-wide**, in `src/app/layout.tsx`: one `@graph` with `Organization` + `WebSite`.
2. **Per page**, in each `page.tsx` or template component: one `@graph` with `Article`, `ItemList` of `Product`, `BreadcrumbList` and `FAQPage`. City pages add an `ItemList` of `ExerciseGym`.
3. **The cleaner**, `jsonLdHtml()` in `src/lib/schema.ts`. **Every** JSON-LD object on the site is rendered through it. It is the single most important file to replicate.

Rendering pattern, identical on every page:

```tsx
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
```

### 3.3 The cleaner: `src/lib/schema.ts` (complete file)

```ts
import { amazonImageFor } from "@/lib/amazonImages";

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
```

What the cleaner guarantees for every Product:

- **Price:** `offers.price` is a positive plain number string ("31.99"), never "$31.99", "From $19", "contact" or "0".
- **Offer URL:** `offers.url` is always present (it falls back to the product URL).
- **Image:** `image` is always present. It's the page's own value or the Amazon photo looked up from the offer URL's ASIN.
- **Invalid items:** an item that can't be valid is downgraded rather than emitted as a broken Product.
  - Inside an ItemList, it becomes a plain `ListItem` with name and url.
  - Elsewhere, it becomes `Thing`.
- **Pages can't break it:** page authors can write sloppy data (display prices with $ and text, brand-direct items with no photo) and the output is still valid.

### 3.4 Amazon photo lookup used by the cleaner: `src/lib/amazonImages.ts`

```ts
import amazonImages from "@/data/amazon-images.json";

// Product photos from the Amazon Creators API: ASIN -> image URL on Amazon's CDN (hotlinked, never rehosted).
const IMAGES = amazonImages as Record<string, string>;

/** The Amazon product photo for an Amazon product link, if we have one. */
export function amazonImageFor(url?: string): string | undefined {
  const asin = url?.match(/amazon\.[a-z.]+\/(?:[^/?#]+\/)?(?:dp|gp\/product)\/([A-Z0-9]{10})/)?.[1];
  return asin ? IMAGES[asin] : undefined;
}
```

`src/data/amazon-images.json` (excerpt):

```json
{
"0593980441":"https://m.media-amazon.com/images/I/417ShL+L2jL._SL500_.jpg",
"B09GPVMF86":"https://m.media-amazon.com/images/I/415sXqF7ebL._SL500_.jpg",
"B0FHX88QXK":"https://m.media-amazon.com/images/I/..._SL500_.jpg"
}
```

### 3.5 Real output: Product schema as served (live `/blog/best-pilates-gloves`)

The two `<script type="application/ld+json">` blocks on the page:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://pilatescollectiveclub.com/#organization",
      "name": "Pilates Collective Club",
      "url": "https://pilatescollectiveclub.com",
      "logo": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/pcc-logo.png", "width": 859, "height": 286 },
      "description": "Curated city guides, expert studio recommendations, and equipment picks for Pilates practitioners worldwide.",
      "sameAs": ["https://www.instagram.com/pilatescollectiveclub", "https://www.pinterest.com/pilatescollectiveclub"]
    },
    {
      "@type": "WebSite",
      "@id": "https://pilatescollectiveclub.com/#website",
      "url": "https://pilatescollectiveclub.com",
      "name": "Pilates Collective Club",
      "publisher": { "@id": "https://pilatescollectiveclub.com/#organization" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": { "@type": "EntryPoint", "urlTemplate": "https://pilatescollectiveclub.com/blog?q={search_term_string}" },
        "query-input": "required name=search_term_string"
      }
    }
  ]
}
```

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Gloves (2026): Grip Gloves for Reformer & Lagree",
      "description": "Five verified Pilates grip gloves for reformer, barre and mat, led by TAVI's half-finger glove, plus one wrist-support glove for Lagree and weighted work.",
      "url": "https://pilatescollectiveclub.com/blog/best-pilates-gloves",
      "datePublished": "2026-06-28",
      "dateModified": "2026-11-04",
      "image": "https://pilatescollectiveclub.com/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg",
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com", "logo": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/logo.png" } },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-pilates-gloves" }
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Gloves 2026",
      "numberOfItems": 5,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Product",
            "name": "TAVI Half Finger Gym Gloves (Full Coverage Grips)",
            "image": "https://m.media-amazon.com/images/I/415sXqF7ebL._SL500_.jpg",
            "description": "TAVI is a dedicated Pilates and barre grip brand, and this half-finger glove pairs a full-coverage grip palm with open fingertips for reformer handles, straps and mat work. Sold on Amazon by The Active Footwear Store, TAVI's official distributor. At $31.99 it's the priciest glove here: the one to buy if you want a glove designed for the studio rather than the weights floor.",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "price": "31.99",
              "availability": "https://schema.org/InStock",
              "url": "https://www.amazon.com/dp/B09GPVMF86?tag=pilatescollective-20"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Product",
            "name": "Gaiam Grippy Yoga Gloves",
            "image": "https://m.media-amazon.com/images/I/51bEW--3d-L._SL500_.jpg",
            "description": "Gaiam is an established yoga and Pilates accessories brand, ...",
            "offers": { "@type": "Offer", "priceCurrency": "USD", "price": "7.65", "availability": "https://schema.org/InStock", "url": "https://www.amazon.com/dp/B001VROVEM?tag=pilatescollective-20" }
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Pilates Gloves", "item": "https://pilatescollectiveclub.com/blog/best-pilates-gloves" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Do you need gloves for Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "Gloves are not required for Pilates or Lagree, but many practitioners use them ..." } }
      ]
    }
  ]
}
```

(Product 3 to 5 and FAQ 2 to 4 trimmed. The real list has 5 products and 4 questions.)

Source code that produced it (in the page file):

```ts
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: "...", description: "...", url: "...", datePublished: "2026-06-28", dateModified: "2026-11-04", image: "...", author: { /* ... */ }, publisher: { /* ... */ }, mainEntityOfPage: { /* ... */ } },
    {
      "@type": "ItemList",
      name: "Best Pilates Gloves 2026",
      numberOfItems: PRODUCTS.length,
      itemListElement: PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Product",
          name: p.name,
          image: p.imageUrl,
          description: p.description,
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: p.price.replace(/[^0-9.]/g, ""),
            availability: "https://schema.org/InStock",
            url: p.affiliateUrl,
          },
        },
      })),
    },
    { "@type": "BreadcrumbList", itemListElement: [ /* Home, Blog, page */ ] },
    { "@type": "FAQPage", mainEntity: [ /* the same questions as the visible FAQ */ ] },
  ],
};
```

### 3.6 Where each field comes from

| Field | Source |
|---|---|
| `Product.name` | Page data (`PRODUCTS[].name` or catalog `name`). Rule: **brand + model**, matching the Amazon title. |
| `Product.description` | The same text shown on the card (`description` / `body`), HTML stripped by `productItemList`. |
| `Product.image` | Page data `imageUrl` if set, otherwise injected by the cleaner from `src/data/amazon-images.json` (Creators API `images.primary.large.url`). |
| `Product.brand` | Template pages only (`GuideItem.brand`), omitted when empty (e.g. books). |
| `offers.price` | Page data display price ("$31.99"), normalised to "31.99" by the cleaner. The value comes from the Creators API `offersV2.listings.price` at the time of writing. |
| `offers.availability` | Hardcoded InStock, or from the template's `availability` enum (InStock / LimitedAvailability / BackOrder / MadeToOrder), set from the API's `offersV2.listings.availability.type`. |
| `offers.url` | The affiliate link in page data. |
| `offers.priceCurrency` | Hardcoded "USD". |
| `Article.datePublished` / `dateModified` | Hardcoded per page or per catalog (`ADVENT_CHECKED_ISO`), updated when prices are re-checked. |
| `Article.image` | The page's hero image (absolute URL). |
| FAQ questions and answers | A `FAQS` array in the page, rendered both visibly and in `FAQPage`, so they always match. `FaqSection.tsx` can also derive the visible list from the JSON-LD (`faqsFromJsonLd`). |

Template schema (`EquipmentGuide.tsx`, used by 24 pages; `DealsGuide.tsx` is the same shape with `articleSection: season.section`):

```ts
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${pageUrl}/#article`,
      "headline": props.title,
      "description": props.description,
      "image": { "@type": "ImageObject", "url": heroUrl, "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "@id": `${SITE}/#organization`, "name": "Pilates Collective Club", "url": SITE },
      "publisher": { "@type": "Organization", "@id": `${SITE}/#organization`, "name": "Pilates Collective Club", "logo": { "@type": "ImageObject", "url": `${SITE}/pictures/pcc-logo.png` } },
      "datePublished": props.datePublished,
      "dateModified": props.dateModified,
      "url": pageUrl,
      "mainEntityOfPage": pageUrl,
      "articleSection": "Equipment",
      "inLanguage": "en-US",
    },
    {
      "@type": "ItemList",
      "name": props.title,
      "numberOfItems": allItems.length,
      "itemListElement": allItems.map((it, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": it.name,
          ...(it.brand ? { "brand": { "@type": "Brand", "name": it.brand } } : {}),
          "description": it.body,
          "offers": { "@type": "Offer", "priceCurrency": "USD", "price": it.price, "availability": AVAILABILITY[it.availability].schema, "url": it.url },
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${SITE}/blog` },
        { "@type": "ListItem", "position": 3, "name": props.breadcrumb, "item": pageUrl },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": props.faqs.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
  ],
};

const AVAILABILITY = {
  "in-stock": { label: "In stock", schema: "https://schema.org/InStock" },
  "low-stock": { label: "Low stock", schema: "https://schema.org/LimitedAvailability" },
  "made-to-order": { label: "Made to order, ships after a lead time", schema: "https://schema.org/BackOrder" },
  "back-order": { label: "Back-ordered, ships at a later date", schema: "https://schema.org/BackOrder" },
  direct: { label: "Sold direct by the brand or its dealers", schema: "https://schema.org/InStock" },
};
```

(No `image` in the template's Product: the cleaner adds it from the ASIN.)

### 3.7 Schema by page type

| Page type | Schema in its `@graph` (plus site-wide Organization + WebSite) |
|---|---|
| "Best X" roundup / buying guide | Article, ItemList of Product+Offer, BreadcrumbList, FAQPage |
| Comparison (A vs B) | Article (+WebPage), BreadcrumbList, FAQPage, ItemList of Product for the "recommended kit" section |
| Deals (Black Friday) | Same as roundup, via `DealsGuide`; `availability` LimitedAvailability for low stock |
| Health / method article | Article, BreadcrumbList, FAQPage, small ItemList of Product (the gear block, via `productItemList`) |
| City guide **[NICHE]** | Article, FAQPage, ItemList of `ExerciseGym` (name, short description, PostalAddress), ItemList of Product (gear for class, via `productItemList`), BreadcrumbList |
| Hubs (/blog, /brands, /cities) | `CollectionPage` with an `ItemList` of `ListItem` links (277 on /blog, 13 on /brands, 65 on /cities) |

City studio ItemList (from `src/app/cities/london/page.tsx`):

```ts
{
  "@type": "ItemList",
  "name": "Best Pilates Studios in London",
  "url": "https://pilatescollectiveclub.com/cities/london",
  "description": "Curated guide to the top 5 Pilates studios in London.",
  "numberOfItems": 6,
  "itemListElement": STUDIOS.map((s, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "item": {
      "@type": "ExerciseGym",
      "name": s.name,
      "description": s.review.slice(0, 200),
      "address": { "@type": "PostalAddress", "streetAddress": s.address, "addressLocality": "London", "addressCountry": "GB" },
    },
  })),
}
```

City gear list via the helper:

```ts
productItemList("Pilates gear for classes in London",
  GEAR.filter((g) => /amazon\.[a-z.]+\/dp\//.test(g.url))
      .map((g) => ({ name: g.note.match(/Our pick: ([^.]+(?:\.\d+[^.]*)?)\./)?.[1] ?? g.name, description: g.note, price: g.price, url: g.url })))
```

> **[KNOWN ISSUE]** There are three Article shapes across hand-built pages:
> - the template shape, with `@id` links to `#organization`;
> - the gloves shape, whose publisher logo points to `/logo.png`;
> - the city shape, which has no publisher logo.
>
> **18 pages point the publisher logo at `https://pilatescollectiveclub.com/logo.png`, which returns 404.** Fix for the new site: generate Article from one helper that always references `/#organization`.
>
> **[KNOWN ISSUE]** The WebSite `SearchAction` targets `/blog?q=`, but `/blog` doesn't read `q`. Either implement `?q=` filtering on the hub or remove the SearchAction.

### 3.8 Rules to replicate exactly

1. **One `@graph` per page,** rendered through the cleaner. Never `JSON.stringify` schema directly.
2. **Every product a page recommends is a Product in an ItemList,** with a numeric price, USD currency, availability, affiliate URL and image.
3. **Real photos only.** Take the image from the Amazon API by ASIN; never a stock or lifestyle photo as a product image. If no real photo exists (brand-direct item), don't mark it up as for sale.
4. **Brand + model in `name`.** Write the description in your own words, matching the visible card.
5. **The FAQPage text is the visible FAQ text,** generated from the same array.
6. **`dateModified` changes whenever prices are re-checked,** and the page shows "Prices checked <date>".
7. **Validate after changes:** run [Rich Results Test](https://search.google.com/test/rich-results) on one page per template, and check Search Console → Shopping/Product snippets and Merchant listings.

---

## 4. Amazon affiliate implementation

### 4.1 Link format and tracking tag

There is no link component and no redirect or cloaking. Links are plain strings in page data:

```ts
const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=pilatescollective-20`;
```

- **[NICHE] Tag:** `pilatescollective-20` is hardcoded in page data and catalogs. For the new site, put it in one exported constant, e.g. `src/lib/affiliate.ts` → `export const AMAZON_TAG = "newsite-20";`.
- **Marketplace:** amazon.com (US), USD prices.
- **Fallback when no single listing can be verified:** an Amazon search link, `https://www.amazon.com/s?k=<query>&tag=<tag>`. 123 such links remain on 63 pages. Search links get no photo and no Product markup, because the cleaner can't find an ASIN.

### 4.2 `rel` attributes

All outbound affiliate links open in a new tab. Amazon links are detected by URL:

```ts
const linkRel = /amazon\./i.test(affiliateUrl) ? "noopener noreferrer nofollow sponsored" : "noopener noreferrer nofollow";
// <a href={affiliateUrl} target="_blank" rel={linkRel}>
```

- **Amazon:** `noopener noreferrer nofollow sponsored`.
- **Brand-direct shop links:** `noopener noreferrer nofollow`.
- **Source and citation links:** `noopener noreferrer` (followed).

### 4.3 Button labels

- `ProductCard`: "Shop on Amazon" for Amazon links, "Shop Direct" otherwise. Overridable with `ctaLabel`.
- `QuickPicks` and `TopPick`: "Shop Now →" for Amazon, "Shop Direct →" otherwise.
- A brand-direct item carries a note in its description, e.g. "Not sold on Amazon: this links to lagreefitness.com".

### 4.4 Disclosure

`src/components/AffiliateNote.tsx` is placed **where shopping starts**, right after the Quick Picks table, not in the header:

```tsx
import Link from "next/link";
import type { ReactNode } from "react";

// Affiliate disclosure placed where the shopping starts (after the Quick Picks
// or just before the first product list), not in the page header.
export default function AffiliateNote({ children, className = "mb-10" }: { children?: ReactNode; className?: string }) {
  return (
    <p className={`text-[11px] leading-relaxed ${className}`} style={{ color: "#c4b8b3", fontFamily: "'Montserrat', sans-serif" }}>
      {children ?? "Some links on this page go to Amazon. As an Amazon Associate we earn from qualifying purchases, at no extra cost to you."}{" "}
      <Link href="/affiliate-disclosure" style={{ color: "#c4b8b3", textDecoration: "underline" }}>Affiliate disclosure</Link>
    </p>
  );
}
```

There is also a full `/affiliate-disclosure` page, linked from the footer. The disclosure text in the template version adds: "Specifications are taken from each product's listing or the manufacturer, not from our own testing. Prices were checked live on Amazon on the date above and change often."

### 4.5 The Amazon Creators API (offline, not at runtime)

**The site never calls Amazon at runtime.** Prices, stock, sellers, titles, brands and photos are pulled by a script while writing or refreshing an article, then written into page data and into `src/data/amazon-images.json`. That keeps pages fully static and fast, with no API keys in the deployment.

**Environment variables (local shell only, never in the repo or on Vercel):** `AMZ_ID` (client ID), `AMZ_SECRET` (client secret).

**Rule:** export them only inside the temporary shell command that runs the script, and never write them to a file.

Helper used for all lookups (Python, standard library only):

```python
# Amazon Creators API helper. Credentials come only from env vars AMZ_ID / AMZ_SECRET.
import json, os, sys, urllib.request, urllib.error
TAG = "pilatescollective-20"
def post(url, data, headers):
    req = urllib.request.Request(url, data=data, headers=headers, method="POST")
    try:
        with urllib.request.urlopen(req, timeout=40) as r: return json.loads(r.read())
    except urllib.error.HTTPError as e:
        return {"_error": e.code, "_body": e.read().decode()[:800]}
def token():
    body = json.dumps({"grant_type": "client_credentials", "client_id": os.environ["AMZ_ID"], "client_secret": os.environ["AMZ_SECRET"], "scope": "creatorsapi::default"}).encode()
    r = post("https://api.amazon.com/auth/o2/token", body, {"Content-Type": "application/json"})
    if "access_token" not in r: sys.exit("token error: " + json.dumps(r)[:500])
    return r["access_token"]
def call(op, payload, tok):
    return post("https://creatorsapi.amazon/catalog/v1/" + op, json.dumps(payload).encode(),
                {"Authorization": "Bearer " + tok, "Content-Type": "application/json", "x-marketplace": "www.amazon.com"})
```

Operations used:

```python
# Verify specific products (max 10 ASINs per call, ~1 call per second)
call("getItems", {
  "itemIds": ["B09GPVMF86", "B001VROVEM"], "itemIdType": "ASIN",
  "partnerTag": TAG, "marketplace": "www.amazon.com",
  "resources": ["itemInfo.title", "itemInfo.byLineInfo", "itemInfo.features",
                "offersV2.listings.price", "offersV2.listings.availability",
                "offersV2.listings.merchantInfo", "images.primary.large"]
}, tok)

# Find candidates for a new roundup
call("searchItems", {"keywords": "pilates advent calendar", "partnerTag": TAG,
                     "marketplace": "www.amazon.com", "itemCount": 10,
                     "resources": ["itemInfo.title", "itemInfo.byLineInfo", "offersV2.listings.price",
                                   "offersV2.listings.availability", "images.primary.large"]}, tok)
```

Fields used from the response: `itemInfo.title.displayValue`, `itemInfo.byLineInfo.brand.displayValue` (books: `contributors[].name`), `itemInfo.features.displayValues` (contents and specs), `offersV2.listings[0].price.money.displayAmount`, `offersV2.listings[0].availability.type` (IN_STOCK, IN_STOCK_SCARCE, AVAILABLE_DATE = pre-order), `offersV2.listings[0].merchantInfo.name` (seller), `images.primary.large.url`.

> The API returns **no star ratings or review counts** (`customerReviews.*` came back empty). Picks are chosen on brand, contents and price; never invent ratings.

Image-map refresh script *(adapted from the one used)*. Scan the repo for every ASIN, fetch photos for any missing from the map, and write the map:

```python
import json, re, glob, time
import amz  # the helper above
m = json.load(open("src/data/amazon-images.json"))
asins = set()
for f in glob.glob("src/**/*.ts*", recursive=True):
    s = open(f).read()
    asins |= set(re.findall(r'amazon\.com/(?:[^"\s/]+/)?(?:dp|gp/product)/([A-Z0-9]{10})', s))
    asins |= set(re.findall(r'["\'`](B0[A-Z0-9]{8})["\'`]', s))            # amz("B0...") helpers
    asins |= set(re.findall(r'\b(?:amz|asin)\w*\s*[:(=]\s*["\']([A-Z0-9]{10})["\']', s, re.I))
missing = sorted(a for a in asins if a not in m)
tok = amz.token()
for i in range(0, len(missing), 10):
    r = amz.call("getItems", {"itemIds": missing[i:i+10], "itemIdType": "ASIN", "partnerTag": amz.TAG,
                              "marketplace": "www.amazon.com", "resources": ["images.primary.large"]}, tok)
    for it in (r.get("itemsResult") or {}).get("items") or []:
        url = (((it.get("images") or {}).get("primary") or {}).get("large") or {}).get("url")
        if url: m[it["asin"]] = url
    time.sleep(1.1)
json.dump(dict(sorted(m.items())), open("src/data/amazon-images.json", "w"), indent=0, separators=(",", ":"))
```

Run it as: `AMZ_ID=... AMZ_SECRET=... python3 refresh_images.py`, with the credentials passed in the command only.

**Match check before publishing.** Compare each card's name with the API's title and brand. The first word of the card name must appear in the API brand or title; otherwise hide that card's photo (`showProductImage={false}`) and report it.

### 4.6 Product photos on the page

`ProductCard` is a server component that looks up the photo, then hands off to the client card:

```tsx
// src/components/ProductCard.tsx
import ProductCardView from "@/components/ProductCardView";
import { amazonImageFor } from "@/lib/amazonImages";

export default function ProductCard({ showProductImage = true, ...props }: ProductCardProps) {
  // Cards that already carry their own lifestyle photo keep it; otherwise show the Amazon product photo when we have one.
  const productImageUrl = !showProductImage ? undefined : props.productImageUrl ?? (props.imageUrl ? undefined : amazonImageFor(props.affiliateUrl));
  return <ProductCardView {...props} productImageUrl={productImageUrl} />;
}
```

```tsx
// src/components/ProductCardView.tsx ("use client"), photo branch
<div className="@container h-full" style={{ borderTop: "1px solid #ede9e3", paddingTop: "24px", paddingBottom: "28px" }}>
  <div className="flex flex-col @lg:flex-row @lg:items-start gap-6 @lg:gap-8 h-full">
    <a href={affiliateUrl} target="_blank" rel={linkRel} aria-label={`${name} on Amazon`}
       className="block relative w-full max-w-[280px] mx-auto @lg:mx-0 @lg:w-[200px] @lg:max-w-none shrink-0 aspect-square"
       style={{ backgroundColor: "#ffffff", border: "1px solid #ede9e3" }}>
      <Image src={productImageUrl} alt={name} fill unoptimized sizes="280px" className="object-contain" style={{ padding: "14px" }} />
    </a>
    <div className="flex-1 min-w-0 flex flex-col">
      {/* h3 name + price, description, black full-width button */}
    </div>
  </div>
</div>
```

How the photo behaves:

- **Layout:** a container query (`@container` / `@lg:`) puts the photo beside the text when the card is wide, and above it on phones and in narrow grid cells.
- **Hosting:** photos are hotlinked from `m.media-amazon.com` (allowed in `remotePatterns`) and served `unoptimized`, as Amazon's terms require: no rehosting or resizing.
- **Where they appear:** only in the detailed product sections. Quick picks, top-pick boxes and CTA banners stay text-only.

### 4.7 Price freshness

- Each article shows **"Prices checked <Month D, YYYY>"** under the H1, from a constant (e.g. `ADVENT_CHECKED = "November 6, 2026"`). It's mirrored by `dateModified` (`ADVENT_CHECKED_ISO = "2026-11-06"`).
- **There is no automatic refresh.** Re-checking means re-running `getItems`, updating prices in the data, and bumping both constants.
- Deals pages use a `season` object (`checked`, `checkedIso`) from `src/lib/blackFriday.ts` for the same purpose.

---

## 5. Article anatomy

### 5.1 "Best X" roundup: `/blog/best-pilates-gloves`

Measured on the live page: **about 1,226 words** in `<main>`, 6 images, 7 internal links in the body, 18 Amazon links (7 unique), 0 tables.

Section order:

1. **Eyebrow:** "Equipment Guide · Accessories".
2. **H1** in two parts: "Best Pilates Gloves (2026):" / coloured "Grip Gloves for Reformer & Lagree".
3. **Meta line:** "Prices checked November 4, 2026 · 6 min read".
4. **TopPick box:** #1 product name, price, one-line reason, "Shop Now →". This is the first affiliate link, on the first mobile screen.
5. **Divider, then the intro paragraph** (about 110 words). Pattern:
   - the reader's problem ("Most Pilates practitioners never think about gloves until…");
   - what to look for;
   - what we did ("We checked five gloves against live Amazon listings and confirmed all five as real, currently-sold, in-stock products");
   - the brands covered and the price range.
6. **Hero image**, full-width, 420px tall, `brightness(0.85)`, descriptive alt.
7. **QuickPicks table:** 5 rows (rank, name, note, price, Shop Now).
8. **AffiliateNote** disclosure.
9. **Product sections × 5,** each:
   - a large rank number ("01") and a tag pill ("BEST OVERALL");
   - a `ProductCard`: the photo, the H3 name and price, a description of 40 to 80 words, and the "Shop on Amazon" button.
10. **UpsellCTA** box (H2 "Grip handled. The upgrade that matters more"), cross-selling a mat and a budget reformer, text-only.
11. **Buying guide** (H2 "How to Choose Pilates Gloves") with 4 H3 sub-points.
12. **FAQ** (H2) with 4 questions, identical to the FAQPage schema.
13. **Further reading** (H2): 4 ArticleCards.
14. **CTASection:** "Find a studio near you" **[NICHE]**.

### 5.2 Comparison: `/blog/balanced-body-vs-merrithew`

Measured: **about 1,621 words**, 6 images, 8 internal links in the body, 16 Amazon links (5 unique).

Section order:

1. Eyebrow, then H1 "Balanced Body vs Merrithew:" / "Which Reformer Is Right for You?".
2. Prices-checked line, TopPick box, intro (frames the decision and who each brand is for).
3. Hero image.
4. QuickPicks, then AffiliateNote.
5. **H2 "The brands in brief":** one block per brand.
6. **H2 "Head-to-head across six dimensions":** card or grid comparison (price, build, springs, footbar, warranty, best for) instead of an HTML table.
7. **H2 "The recommendation by context":** "Choose X if…, choose Y if…".
8. **H2 FAQ** with 4 questions.
9. **H2 "Recommended kit: real, verified listings":** 5 ProductCards with photos (each brand's machine plus props). This is the Product schema list.
10. **H2 "Further reading":** 6 cards to each brand's review, other comparisons and the brands hub.
11. CTASection.

Template comparisons (`EquipmentGuide`, e.g. `/blog/align-pilates-vs-balanced-body`) use `table` blocks with a real `<table>`, scrollable on mobile with `min-width: 560px`.

### 5.3 Conventions across articles

- **Word count:** about 1,200 to 1,700 for roundups and comparisons; city guides run longer.
- **Product count:** 4 to 8 per roundup, or grouped blocks for bigger guides (9 to 16).
- **Intro pattern:**
  - the problem or occasion;
  - what we checked and how ("verified live on Amazon today");
  - the brands named, with the price range;
  - an honesty caveat (e.g. "specs come from the listing, not our own testing").
- **Internal links:** 7 to 8 in the body, mainly in "Further reading" (siblings), the UpsellCTA and comparison cross-links, plus the disclosure link. Prose links point to the sibling comparison or brand guide.
- **Images:**
  - **Hero:** one local editorial photo per article, at least 1200 px wide, also used as the Open Graph image (1200×630 declared). The alt text describes the photo literally ("A hand holding a grey Pilates ring"), not as keyword stuffing.
  - **Product photos:** alt text is the exact product name.
  - **Further reading cards:** no images. `ArticleCard` accepts `imageUrl` but doesn't render it.
- **Copy rules:**
  - Brand is always paired with the model.
  - No em dashes.
  - Never invent prices, ratings or availability.
  - "Not sold on Amazon" is stated plainly.
  - Starter-quality brands are described honestly.

---

## 6. Performance and config

### 6.1 Rendering

- **Static:** almost every page is pre-rendered at build time (`next build`), with no runtime data fetching.
- **Dynamic:** `/blog` reads `searchParams` for the category filter, so it renders dynamically.
- **Server components by default:** client components only where interaction is needed (Header, SiteSearch, ProductCardView hover, StudioListing).

### 6.2 Images

- **Local editorial images:** `next/image` with `fill` and `className="object-cover"`. The hero uses `priority` on template pages. Next serves AVIF/WebP at responsive sizes.
- **Amazon product photos:** `next/image` with `unoptimized`, 500 px `_SL500_` images, lazy-loaded below the fold by default.
- **Remote hosts allowed:** `images.unsplash.com`, `upload.wikimedia.org`, `m.media-amazon.com`.

### 6.3 Fonts and CSS

`src/app/globals.css` starts with:

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Jost:ital,wght@0,300;0,400;0,500;1,300&display=swap');
@import "tailwindcss";

:root {
  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-sans: 'Jost', system-ui, sans-serif;
}
```

> **[KNOWN ISSUE]** Two font problems, both affecting Core Web Vitals and consistency:
> 1. **Render-blocking import:** the CSS `@import` of Google Fonts blocks rendering.
> 2. **Fonts never loaded:** many components set `fontFamily: "'Playfair Display', serif"` / `"'Montserrat', sans-serif"` inline, but those fonts are never loaded, so the browser falls back to system fonts.
>
> **Fix:** load fonts with `next/font/google` in the root layout (self-hosted, preloaded, no layout shift), expose them as CSS variables, and use only `var(--font-serif)` / `var(--font-sans)` in components.

Styling is mostly inline `style={{ }}` objects plus Tailwind utility classes. Hover effects on links use small CSS classes in `globals.css` (e.g. `.pcc-mega-link:hover`).

### 6.4 Site search (helps engagement)

`scripts/build-search-index.mjs` runs before every build and dev start. It reads each page's `export const metadata` (title, description, keywords) and writes `public/search-index.json`. Core logic:

```js
const APP = path.join(ROOT, "src", "app");
const SKIP = [/^partner-preview/, /^api\//, /\[/];

function metadataBlock(src) {
  const i = src.indexOf("export const metadata");
  if (i < 0) return "";
  const rest = src.slice(i);
  const og = rest.search(/["']?openGraph["']?\s*:/);   // stop before openGraph's shorter title
  return og > 0 ? rest.slice(0, og) : rest.slice(0, 4000);
}
// ...for each page.tsx: skip robots index:false, read title/description/keywords
// (also resolves `title: TITLE` constants), type = blog category | "City guide" | "Page",
// then: fs.writeFileSync(OUT, JSON.stringify(items));
```

`SiteSearch.tsx` lazy-loads the JSON on first open and ranks results with stemming, synonyms and typo tolerance (Damerau-Levenshtein, first letter must match). It uses field weights: title 10, URL 7, keywords 5, type 3, description 2. **[NICHE]** The synonym map (glove→grip, legging↔tight, lagree↔megaformer).

### 6.5 Analytics

- **GA4:** loaded via `next/script` with `strategy="afterInteractive"` in the root layout. The measurement ID is hardcoded; for the new site use `process.env.NEXT_PUBLIC_GA_ID`.
- **Vercel Analytics:** `<Analytics />` from `@vercel/analytics/next` in the root layout.
- **No cookie or consent banner** is implemented. Add one if you target the EU or UK.

### 6.6 Environment variables

| Name | Where | Purpose |
|---|---|---|
| *(none)* | Next.js app / Vercel | The deployed app currently uses **no** environment variables. |
| `AMZ_ID` | local shell only | Amazon Creators API client ID (offline scripts). |
| `AMZ_SECRET` | local shell only | Amazon Creators API client secret (offline scripts). |
| `NEXT_PUBLIC_GA_ID` | Vercel (recommended for the new site) | GA4 ID instead of hardcoding. |
| `NEXT_PUBLIC_SITE_URL` | Vercel (recommended for the new site) | Base URL instead of repeating `https://pilatescollectiveclub.com` in every file. |

---

## 7. Pilates-specific items to adapt **[NICHE]**

- **Brand identity:** domain, site name, Organization schema (name, logo 859×286, `sameAs` Instagram/Pinterest), Twitter handle, manifest colours (`#c5a882`), palette (`#8b4a31`, `#f6f3f2`, `#fcf9f8`, `#d9c2ba`), fonts.
- **City guides:** `/cities`, `StudioListing`, `CityCard`, `ExerciseGym` schema with PostalAddress, regions, "find a studio" CTA. Replace with your niche's local or entity pages, or drop them.
- **Navigation data:** `nav-menus.ts` tabs (Reformers, Lagree, Spin), blog categories (`categories.ts`), footer category links.
- **Catalogs:** `reformerCatalog.ts`, `giftCatalog.ts`, `adventCatalog.ts`.
- **Seasonal content:** `blackFriday.ts`, `seasonalGuides.ts` (keep the mechanism, change the products).
- **Site search:** synonyms in `SiteSearch.tsx`.
- **Affiliate setup:** the tag `pilatescollective-20` and the US marketplace.
- **Templates:**
  - `EquipmentGuide` hard-codes `articleSection: "Equipment"`, the publisher name, and a closing "Compare every brand in our reformer brands guide" link;
  - `CTASection` copy is "Find a studio near you".
- **Content conventions:** "Pilates princess", reformer/mat language, health-topic articles.

---

## 8. Known issues found while documenting (do not replicate)

| # | Issue | Fix for the new site |
|---|---|---|
| 1 | 18 hand-built pages set the Article publisher logo to `/logo.png`, which 404s | One Article helper that references `/#organization` (with the real logo) |
| 2 | `SearchAction` points to `/blog?q=`, which the blog doesn't handle | Implement `?q=` on the hub, or drop the SearchAction |
| 3 | Sitemap `lastModified` = build time for all URLs | Use each page's real `dateModified` |
| 4 | Render-blocking Google Fonts `@import`; components reference fonts that are never loaded | `next/font/google` + CSS variables only |
| 5 | City breadcrumbs skip the `/cities` hub | Home › Cities › City |
| 6 | Some articles jump H1 → H3 (no H2 above the product list) | Always an H2 heading the product list |
| 7 | Three different Article schema shapes on hand-built pages | Generate every page's `@graph` from one helper or template |
| 8 | Affiliate tag, base URL and GA ID repeated in hundreds of files | Central constants or env vars |
| 9 | Newsletter form only sets local state ("Thanks for subscribing") and sends nothing | Wire it to a real email provider or remove it |
| 10 | `ArticleCard` accepts `imageUrl` but never renders it | Render it or remove the prop |
| 11 | London studio ItemList description says "top 5" but lists 6 | Generate the count from the data |
| 12 | Adding a post requires a manual entry in the `/blog` `posts` array | Derive the hub list from page metadata (like the search index) |
| 13 | 10 city guides (Baltimore, Cincinnati, Columbus, Indianapolis, Kansas City, Orlando, Pittsburgh, Sacramento, San Antonio, St Louis) are missing from the `/cities` hub list and the menus; Baltimore has no internal links at all (orphan page) | Generate hub lists and menus from the route folders, and fail the build on orphan pages |

---

## 9. Rebuild checklist (in order)

1. `npx create-next-app@latest` with TypeScript, Tailwind and the App Router. Pin Next 16.x and add `AGENTS.md`/`CLAUDE.md` (section 1.1).
2. Root `layout.tsx`:
   - metadata with `metadataBase`, the title template, robots, Open Graph and Twitter;
   - the Organization + WebSite JSON-LD;
   - GA4 via env, plus Vercel Analytics;
   - fonts via `next/font`.
3. A `blog/layout.tsx` title override (no site-name suffix on articles).
4. `src/lib/schema.ts` copied **verbatim** (section 3.3), plus `src/lib/amazonImages.ts` and `src/data/amazon-images.json`.
5. `src/lib/affiliate.ts` with `AMAZON_TAG`, an `amz(asin)` helper and `linkRel(url)`.
6. Components:
   - `ProductCard` (server) + `ProductCardView` (client, container-query photo layout);
   - `QuickPicks`, `TopPick`, `AffiliateNote`, `FaqSection`, `ArticleCard`, `UpsellCTA`.
7. The `EquipmentGuide`-style article template (data → layout + full `@graph`), with one Article helper referencing `/#organization`.
8. `sitemap.ts` (filesystem-derived, real `lastModified`), `robots.ts`, `not-found.tsx` (noindex).
9. Hubs: `/blog` (filters with canonical `/blog`), category and brand hubs as your niche needs.
10. Header mega menu driven by a `nav-menus.ts` data file; footer with hub and category links.
11. `scripts/build-search-index.mjs` as `prebuild`, plus `SiteSearch`.
12. Offline tooling (not deployed):
    - the Creators API helper;
    - the image-map refresh script;
    - the photo/name match check;
    - the IndexNow key file and watcher.
13. Vercel: Git-connected, preview on push, manual promote. Search Console plus Bing Webmaster Tools; submit the sitemap.
14. **Validation gate before each publish:**
    - typecheck, lint and build;
    - Rich Results Test on one page per template;
    - check that every priced Product has `image` + numeric `price`;
    - desktop and mobile screenshots.
