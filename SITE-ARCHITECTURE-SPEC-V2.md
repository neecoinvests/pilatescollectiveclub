# Site Architecture Spec V2: Amazon Affiliate Content Site

A rebuild specification of the technical foundation behind pilatescollectiveclub.com, written for a fresh Claude Code session that will build a new affiliate site in a different niche.

- **Source:** repository `neecoinvests/pilatescollectiveclub` at commit `73b6e70` (November 10, 2026).
- **Measured on:** the production build of that commit, and the live production site where stated.
- **This document changes no code.** It only reads and documents.

## How to read this document

| Marker | Meaning |
|---|---|
| **[VERBATIM]** | Copied unchanged from the codebase. |
| **[ADAPTED]** | Copied from the codebase, then changed. The change is described next to it. |
| **[NEW]** | Not in the codebase. Written for the rebuild, usually to fix a flaw. It has not been run in this repository; the validation gate in section 8 is what proves it. |
| **[NICHE]** | Pilates-specific. Replace it for the new niche. |
| **FIX** | A flaw in the current site. The corrected version follows immediately. **Build the corrected version, not the original.** |

**Out of scope.** The city and location system is excluded entirely: `/cities`, `StudioListing`, `CityCard`, `ExerciseGym` and `PostalAddress` schema, regional content and "find a studio" CTAs. The new site has no local or entity pages. Where a shared file mixes city code with general code (header menus, sitemap, homepage, `CTASection`), only the general part is documented, and the corrected version drops the city part.

**Credentials.** Only environment variable names appear here. No keys, secrets or tokens.

**Next.js version.** The repository's `AGENTS.md` says:

```md
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
```

Keep that file in the new repo (`CLAUDE.md` contains the single line `@AGENTS.md`). The Next.js 16 behaviors this spec relies on were checked against `node_modules/next/dist/docs/`:

- `params` is a Promise.
- `generateStaticParams` with `dynamicParams = false` returns a 404 for unknown slugs.
- `next/font/google` takes a `variable` option.
- Route handlers can be forced static with `export const dynamic = "force-static"` when Cache Components is off. Leave Cache Components off, as this site does.

---

## 0. The foundation in one screen

- **Stack:** Next.js 16.2.6 (App Router), React 19.2.4, TypeScript 5, Tailwind CSS 4, deployed on Vercel.
  - Every article is prerendered as static HTML at build time: 366 of 367 routes are static.
- **No CMS, MDX or database.** Every article is TypeScript: a typed data object rendered by one template component.
  - The template renders the visible page and the JSON-LD from the **same object**, so they cannot disagree.
- **Amazon is never called at runtime.**
  - The Amazon Creators API is called offline by scripts the operator runs with credentials in environment variables.
  - Prices, availability and product photo URLs are written into the repository.
  - Links are plain `https://www.amazon.com/dp/<ASIN>?tag=<tag>` URLs.
- **Every JSON-LD object passes through one cleaner** (`src/lib/schema.ts`) before it is printed. The cleaner:
  - normalizes prices to plain numbers;
  - injects the Amazon product photo for any Amazon ASIN link;
  - demotes any Product that would fail Google's validation (no positive price and no image, or no offer, review or rating) to a plain list item or `Thing`.
  - This is why Product markup holds up across hundreds of pages written by different hands.
- **Measured coverage:** 261 of 277 articles (94%) emit valid `Product` nodes inside an `ItemList`. Every article also emits `Article`, `BreadcrumbList` and `FAQPage`.

---

## 1. Stack and structure

### 1.1 Framework and pinned versions

`package.json` **[VERBATIM]**:

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
  "engines": {
    "node": ">=20.9.0"
  },
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

There are only four runtime dependencies. Everything else (search, menus, product cards, schema) is hand-written.

**FIX: the prebuild step and the search index.** `prebuild` regex-scrapes every `page.tsx` for its `metadata` to build `public/search-index.json`. That file is committed, so every build dirties the working tree, and the scraper breaks when metadata is written in a way the regex does not expect. In the corrected structure (1.5), article data lives in typed content modules, so the index is generated by a static route handler from the same data (6.4). There is no prebuild scraper and no committed generated file.

`package.json` **[ADAPTED]** for the rebuild. The prebuild scraper is removed, and scripts for the offline tools and the validation gate are added. Keep the same pinned versions; `npm install` writes the lockfile.

```json
{
  "name": "<site-slug>",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint",
    "typecheck": "tsc --noEmit -p .",
    "validate": "node scripts/validate.mjs",
    "indexnow": "node scripts/indexnow.mjs"
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

The Amazon scripts are Python 3 standard library only (no `pip install`). They run on the operator's machine or in a Claude Code session, never on Vercel.

### 1.2 Config files

`next.config.ts` **[VERBATIM]**:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
    ],
  },
  // Christmas guides renamed to include "christmas" in the URL (October 2026).
  async redirects() {
    return [
      ["pilates-stocking-stuffers", "pilates-christmas-stocking-stuffers"],
      ["pilates-secret-santa-gifts", "pilates-secret-santa-christmas-gifts"],
      ["best-pilates-gifts-for-her", "best-pilates-christmas-gifts-for-her"],
      ["best-reformer-pilates-gifts", "reformer-pilates-christmas-gifts"],
      ["luxury-recovery-gifts-for-pilates", "luxury-recovery-christmas-gifts-for-pilates"],
      ["fitness-tech-gifts-for-pilates-lovers", "fitness-tech-christmas-gifts-for-pilates-lovers"],
      ["luxury-fitness-gifts-for-him", "luxury-fitness-christmas-gifts-for-him"],
    ].map(([from, to]) => ({ source: `/blog/${from}`, destination: `/blog/${to}`, permanent: true }))
      // Core Collab partner previews went live on the real articles (October 2026).
      .concat(
        ["best-pilates-reformer-brands", "best-megaformer-machine"].map((slug) => ({
          source: `/partner-preview/the-core-collab/${slug}`,
          destination: `/blog/${slug}`,
          permanent: true,
        })),
      );
  },
};

export default nextConfig;
```

`next.config.ts` **[ADAPTED]**. The niche redirects are gone, but the pattern stays: whenever a slug changes, add a permanent redirect in the same commit. Unused image hosts are dropped. `m.media-amazon.com` must stay, because product photos load from Amazon's CDN.

```ts
import type { NextConfig } from "next";

// Every renamed slug gets a permanent redirect in the same commit. [NICHE] entries.
const RENAMED: [from: string, to: string][] = [];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "m.media-amazon.com" }],
  },
  async redirects() {
    return RENAMED.map(([from, to]) => ({ source: `/blog/${from}`, destination: `/blog/${to}`, permanent: true }));
  },
};

export default nextConfig;
```

`tsconfig.json` **[VERBATIM]**. The `@/*` alias maps to `./src/*`, and `resolveJsonModule` lets data JSON be imported.

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
```

`eslint.config.mjs` **[VERBATIM]**:

```js
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
```

`postcss.config.mjs` **[VERBATIM]**. Tailwind 4 needs no `tailwind.config` file.

```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

`vercel.json` **[VERBATIM]**:

```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```

`.gitignore` **[VERBATIM]**, the relevant lines:

```gitignore
/node_modules
/.next/
/out/
/build
.DS_Store
*.pem
npm-debug.log*
.env*
.vercel
*.tsbuildinfo
next-env.d.ts
.claude/
```

**FIX: unused files in the repo.** The repo root holds about 87 MB of unused source photos and logo drafts (`*.png`, `*-unsplash.jpg`) next to `package.json`. `public/` also holds the create-next-app leftovers `file.svg`, `globe.svg`, `next.svg`, `vercel.svg` and `window.svg`. Keep originals outside the repo, and only commit compressed images that pages use (6.2).

### 1.3 Deployment setup

- **Hosting:** a Vercel project connected to the GitHub repository through Vercel's Git integration.
  - Every pushed branch gets a Preview deployment.
  - The operator promotes a checked preview to Production in the Vercel dashboard (Deployments, then Promote to Production).
  - Promotion through the Vercel API returned HTTP 422 for this project, so treat promotion as a manual dashboard step.
- **Build:** `npm run build` on Vercel's Node runtime. No environment variables are set on Vercel today: the analytics ID is hard-coded (fixed in 6.5).
- **Domain:** the apex domain `pilatescollectiveclub.com` is the canonical host. Every absolute URL in metadata and JSON-LD uses it.
- **Branching:** work happens on a feature branch, is pushed, previewed, then promoted. Nothing is committed straight to production.

### 1.4 Directory structure

**Current** (city system omitted):

```
.
├── AGENTS.md, CLAUDE.md, README.md
├── next.config.ts, tsconfig.json, eslint.config.mjs, postcss.config.mjs, vercel.json
├── public/
│   ├── <indexnow-key>.txt                      IndexNow key file
│   ├── manifest.webmanifest, icon.png, apple-icon.png, favicon.ico, logo-mark.svg
│   ├── pictures/                               71 images (131 MB), heroes and logo
│   └── search-index.json                       generated at prebuild, committed
├── scripts/
│   ├── build-search-index.mjs                  prebuild search index
│   └── *.py                                    one-off migration scripts (not needed)
└── src/
    ├── app/
    │   ├── layout.tsx, globals.css, icon.png, icon.svg, apple-icon.png, favicon.ico
    │   ├── page.tsx                            homepage
    │   ├── not-found.tsx, robots.ts, sitemap.ts
    │   ├── blog/layout.tsx                     title template "%s"
    │   ├── blog/page.tsx                       journal index (hand-kept list of 277 posts)
    │   ├── blog/<slug>/page.tsx                277 article folders
    │   ├── brands/page.tsx                     brand hub [NICHE]
    │   └── advertise, affiliate-disclosure, contact, privacy, terms /page.tsx
    ├── components/                             Header, Footer, nav-menus.ts, EquipmentGuide, DealsGuide,
    │                                           ProductCard(+View), QuickPicks, TopPick, AffiliateNote,
    │                                           FaqSection, ArticleCard, BlogFilter, SiteSearch, CTASection, …
    ├── data/amazon-images.json                 ASIN → Amazon image URL (587 entries)
    └── lib/
        ├── schema.ts                           JSON-LD cleaner
        ├── amazonImages.ts                     ASIN image lookup
        ├── categories.ts                       blog categories [NICHE]
        ├── reformerCatalog.ts, giftCatalog.ts, adventCatalog.ts   product catalogs [NICHE]
        └── blackFriday.ts, seasonalGuides.ts   seasonal modules [NICHE]
```

**FIX: content spread across many files.** Each article's title, description, dates, category, excerpt and image are typed in up to five places:

- the page's `metadata`;
- the page's JSON-LD;
- the blog index's hand-kept 2,310-line `posts` array;
- other articles' "Further reading" cards;
- the scraped search index.

They drift. The sitemap once ran 13 pages behind, and every sitemap date is the build time (2.4). In the corrected structure, each article is **one typed content module**. A single dynamic route renders all of them, and every consumer (route, metadata, sitemap, blog index, related cards, search index) reads the same module.

**Corrected structure** **[NEW]**:

```
.
├── AGENTS.md, CLAUDE.md
├── next.config.ts, tsconfig.json, eslint.config.mjs, postcss.config.mjs, vercel.json
├── public/
│   ├── <indexnow-key>.txt
│   ├── manifest.webmanifest
│   ├── brand/logo.png                       publisher logo (real pixel size recorded in site.ts)
│   └── pictures/                            compressed heroes (≤ 300 KB) + 1200×630 OG crops
├── scripts/
│   ├── amazon/creators.py                   Creators API client (env credentials)
│   ├── amazon/refresh.py                    writes src/data/products.json
│   ├── indexnow.mjs                         IndexNow submission
│   └── validate.mjs                         pre-publish validation gate
└── src/
    ├── app/
    │   ├── layout.tsx, globals.css, icon.png, apple-icon.png, favicon.ico
    │   ├── page.tsx                         homepage
    │   ├── not-found.tsx, robots.ts, sitemap.ts
    │   ├── search-index.json/route.ts       static search index (built from content)
    │   ├── blog/layout.tsx                  title template "%s"
    │   ├── blog/page.tsx                    journal index (reads content)
    │   ├── blog/[slug]/page.tsx             ONE route for every article
    │   └── about, contact, advertise, privacy, terms, affiliate-disclosure /page.tsx
    ├── components/                          Header, Footer, nav-menus.ts, Guide (template), ProductCard,
    │                                        QuickPicks, TopPick, AffiliateNote, Breadcrumbs, ArticleCard,
    │                                        BlogFilter, SiteSearch
    ├── content/
    │   ├── guides/<slug>.ts                 one module per article (the only place its data lives)
    │   └── guides/index.ts                  registry of every guide (build fails if a file is missing)
    ├── data/products.json                   generated by scripts/amazon/refresh.py
    └── lib/
        ├── site.ts                          domain, brand, logo, organization IDs
        ├── affiliate.ts                     tag, link builders, link classification, rel
        ├── products.ts                      typed lookup into products.json
        ├── guide.ts                         Guide types, resolver, metadata builder, dates
        ├── guideSchema.ts                   the article JSON-LD graph
        ├── schema.ts                        JSON-LD cleaner (corrected)
        ├── text.ts                          strips inline-link syntax for JSON-LD
        └── categories.ts                    [NICHE]
```

### 1.5 How content is stored and rendered

#### 1.5.1 The current page shapes

Articles on the current site come in three shapes:

| Shape | Count | Where the data lives | Replicate? |
|---|---|---|---|
| `EquipmentGuide` data page | 24 | A `GUIDE: EquipmentGuideProps` object in the page; schema built by the template | **Yes. This is the model.** |
| `DealsGuide` seasonal page | 16 | `DealsGuideProps`; schema built by the template | Only if the niche has seasonal deals **[NICHE]** |
| Hand-built JSX article | 237 | Local `PRODUCTS` arrays, hand-written JSX and a hand-written JSON-LD graph per page | **No.** Each page carries its own copy of the schema graph. That copying caused the publisher logo 404 on 18 pages (`/logo.png`), visible FAQ text that differs from the FAQPage text on 5 pages, and inconsistent availability values. The cleaner in 3.3 is what keeps their Product markup valid. |

Every article in the new site uses the single template.

#### 1.5.2 The template data shape (current)

`src/components/EquipmentGuide.tsx` **[VERBATIM]**, the type block:

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
  slug: string;
  title: string;
  description: string;
  breadcrumb: string;
  eyebrow: string;
  eyebrowAccent: string;
  h1: string;
  h1Accent: string;
  readTime: string;
  updatedLabel: string;
  datePublished: string;
  dateModified: string;
  heroImage: string;
  heroAlt: string;
  heroCaption?: string;
  intro: string[];
  quickPicks?: { label: string; itemId: string }[];
  blocks: GuideBlock[];
  faqs: { q: string; a: string }[];
  related: { title: string; excerpt: string; href: string; imageUrl: string; category: string; readTime: string }[];
  sources?: { label: string; url: string }[];
  ctaTitle?: string;
  ctaSubtitle?: string;
};
```

Shared product catalogs let several pages reuse one verified listing. `src/lib/reformerCatalog.ts` **[VERBATIM]**, the header, one entry and the helper **[NICHE]**:

```ts
import type { GuideItem } from "@/components/EquipmentGuide";

// Verified high-value Pilates equipment listings (Amazon Creators API,
// checked 2026-10-12). Specs are taken from each listing. Pages spread an
// entry and override badge/body/pros/cons for their own context.

export const PRICES_CHECKED = "October 20, 2026";
export const PRICES_CHECKED_ISO = "2026-10-20";

const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=pilatescollective-20`;

type Base = Omit<GuideItem, "badge" | "body"> & { body: string };

export const CATALOG = {
  alignC8Pro: {
    id: "align-c8-pro", name: "Align-Pilates C8-PRO Reformer", brand: "Align-Pilates", price: "$2,750.00", url: amz("B099ZJ4C25"),
    availability: "in-stock", soldBy: "Merrithew (Amazon storefront)",
    specs: ["8 PU-wheel carriage system", "Rapid Change Spring Bar", "Same springs as Align's professional reformers", "Stackable; optional leg extensions raise the bed from 26 cm to 44 cm", "239.5 cm L × 66 cm W × 26 cm H", "Users 145–193 cm tall; max user weight 150 kg"],
    body: "Align-Pilates' home reformer uses the same springs as the brand's professional machines and an 8-wheel PU carriage that Align describes as its quietest, lowest-maintenance ride. It stacks for storage, and optional leg extensions lift it to a standard studio bed height.",
  },
  // … more entries …
  spxMaxDirect: {
    id: "merrithew-spx-max", name: "Merrithew SPX Max Reformer", brand: "Merrithew", price: "Contact Merrithew or a dealer", url: "https://www.merrithew.com/",
    availability: "direct",
    specs: ["Reformer frame about 26.5\" W × 97\" L; 128 lb (dealer listings)", "Carriage 22\" W × 38.5\" L; 9\" from the floor (dealer listings)", "Springs: 3 × 100%, 1 × 50%, 1 × 25% (dealer listings)", "350 lb user weight capacity (dealer listings)"],
    body: "Merrithew's compact studio-and-home reformer. It is not sold on Amazon; buy it from Merrithew or an authorized dealer, who will quote current pricing and bundles.",
    ctaLabel: "Shop Now at Merrithew →",
  },
} satisfies Record<string, Base>;

export function item(key: keyof typeof CATALOG, overrides: Partial<GuideItem> & { badge: string }): GuideItem {
  return { ...(CATALOG[key] as Base), ...overrides } as GuideItem;
}
```

**FIX: prices and availability typed by hand.**

- The problem:
  - Price, availability and seller are copied by hand from API output into four catalogs and about 260 pages.
  - Each catalog keeps its own "checked" date (`PRICES_CHECKED`, `GIFTS_CHECKED`, `ADVENT_CHECKED`, `BF_PRICES_CHECKED`, `SEASONAL_PRICES_CHECKED`).
  - Nothing re-checks them, and nothing records which listing changed.
  - The affiliate tag is typed 1,841 times in 318 files, and `amz()` is redefined in 28 files.
- **Corrected design:**
  - Store Amazon-sourced fields (price, availability, image, seller, title) in one generated file, `src/data/products.json`, keyed by ASIN. The refresh script writes it (4.6).
  - Guides reference an **ASIN**, never a typed price.
  - Editorial fields (name, brand, badge, body, specs, pros, cons) stay in the guide.
  - The tag lives in one constant.

#### 1.5.3 The corrected data shape

`src/lib/site.ts` **[NEW]**, the single source for every absolute URL and the organization:

```ts
// Every absolute URL, the brand name and the publisher logo come from here.
export const SITE = {
  url: "https://www.example.com", // [NICHE] canonical origin, no trailing slash
  name: "Example Site", // [NICHE]
  description: "Independent buying guides for …", // [NICHE]
  language: "en-US",
  locale: "en_US",
  logo: { path: "/brand/logo.png", width: 859, height: 286 }, // [NICHE] real pixel size of the file
  sameAs: [] as string[], // [NICHE] official social profiles only
} as const;

export const ORG_ID = `${SITE.url}/#organization`;
export const WEBSITE_ID = `${SITE.url}/#website`;
export const abs = (path: string) => (/^https?:\/\//.test(path) ? path : `${SITE.url}${path}`);
```

`src/lib/affiliate.ts` **[NEW]**. Everything the current code does with Amazon links (link building, ASIN parsing, link-type ranking, `rel` and button labels) is spread over `schema.ts`, `amazonImages.ts`, `EquipmentGuide.tsx`, `ProductCardView.tsx`, `QuickPicks.tsx` and `TopPick.tsx`. Here it is one module, with these corrections:

- `isAmazon` matches the host, not any URL containing `amazon.`.
- The site domain comes from `SITE`.

```ts
import { SITE } from "@/lib/site";

export const AMAZON_TAG = "yourtag-20"; // [NICHE] Associates tracking ID (public, not a secret)
const AMAZON = "https://www.amazon.com";

export const amz = (asin: string) => `${AMAZON}/dp/${asin}?tag=${AMAZON_TAG}`;
export const amzSearch = (query: string) => `${AMAZON}/s?k=${encodeURIComponent(query).replace(/%20/g, "+")}&tag=${AMAZON_TAG}`;

const ASIN_RE = /^https?:\/\/(?:www\.)?amazon\.[a-z.]+\/(?:[^/?#]+\/)?(?:dp|gp\/product)\/([A-Z0-9]{10})/;
export const asinOf = (url = "") => url.match(ASIN_RE)?.[1];
export const isAmazon = (url = "") => /^https?:\/\/(?:www\.)?amazon\.[a-z.]+\//i.test(url);
export const isAmazonProduct = (url = "") => ASIN_RE.test(url);
export const isAmazonSearch = (url = "") => /^https?:\/\/(?:www\.)?amazon\.[a-z.]+\/s\?/i.test(url);
export const isExternal = (url = "") => /^https?:\/\//.test(url) && !url.startsWith(SITE.url);

// Site rule: Amazon product (ASIN) links first, then Amazon search links, then brand-direct links.
export const linkRank = (url: string) => (isAmazonProduct(url) ? 0 : isAmazonSearch(url) ? 1 : 2);
export function byLinkType<T>(list: T[], url: (x: T) => string): T[] {
  return list.map((x, i) => ({ x, i })).sort((a, b) => linkRank(url(a.x)) - linkRank(url(b.x)) || a.i - b.i).map((e) => e.x);
}

// Every outbound shopping link: nofollow; Amazon links are also "sponsored".
export const shopRel = (url: string) => (isAmazon(url) ? "sponsored nofollow noopener noreferrer" : "nofollow noopener noreferrer");

// Button labels: product cards say "Shop on Amazon" / "Shop Direct"; quick picks and the top pick add an arrow.
export const cardLabel = (url: string) => (isAmazon(url) ? "Shop on Amazon" : "Shop Direct");
export const pickLabel = (url: string) => (isAmazon(url) ? "Shop Now →" : "Shop Direct →");
```

`src/lib/products.ts` **[NEW]** is the typed lookup into the generated file. A guide that names an ASIN missing from `products.json` **fails the build**, so no page can ship a product the API never confirmed.

```ts
import data from "@/data/products.json";

// Written only by scripts/amazon/refresh.py. Never edit by hand.
export type Availability = "in-stock" | "low-stock" | "back-order" | "pre-order" | "out-of-stock" | "unknown";
export type AmazonProduct = {
  asin: string;
  title: string; // Amazon's listing title (for checking the editorial name; not displayed)
  price: number | null; // USD buy-box price; null when Amazon returns no offer
  availability: Availability;
  availabilityMessage?: string; // Amazon's text, e.g. "Usually ships within 3 to 5 weeks"
  image?: string; // m.media-amazon.com URL, hotlinked, never rehosted
  merchant?: string; // seller name when the API returns it
  checkedAt: string; // ISO date of the last successful API read
  changedAt: string; // ISO date the price or availability last changed
};

const PRODUCTS = data as Record<string, AmazonProduct>;

export function amazonProduct(asin: string): AmazonProduct {
  const p = PRODUCTS[asin];
  if (!p) throw new Error(`ASIN ${asin} is not in src/data/products.json. Run scripts/amazon/refresh.py --add ${asin}`);
  return p;
}

export const amazonImage = (asin?: string) => (asin ? PRODUCTS[asin]?.image : undefined);

export const usd = (n: number) =>
  `$${n.toLocaleString("en-US", { minimumFractionDigits: Number.isInteger(n) ? 0 : 2, maximumFractionDigits: 2 })}`;
```

`src/lib/guide.ts` **[NEW]**. These are the guide types plus the resolver that turns the guide's ASIN references into fully priced items. They are `EquipmentGuideProps` with these changes:

- Items are ASIN references or direct links.
- Dates are split into an editorial `updated` and the product data's `changedAt`.
- Listing fields (category, excerpt, image) are added so the blog index, sitemap and search read the guide itself.
- `breadcrumb` and `related` are slug references.

```ts
import type { Metadata } from "next";
import { SITE, abs } from "@/lib/site";
import { amz, byLinkType } from "@/lib/affiliate";
import { amazonProduct, usd, type Availability } from "@/lib/products";
import type { Category } from "@/lib/categories";

// ---------- Authoring types (what a guide module writes) ----------

type ItemCopy = {
  id: string; // anchor id, unique on the page, kebab-case
  name: string; // Brand + model, as sold
  brand: string;
  badge: string; // "Best Overall", "Best Budget", …
  specs: string[]; // from the listing or manufacturer, never invented
  body: string; // 2–3 sentences
  pros?: string[];
  cons?: string[];
  ctaLabel?: string;
};
export type AmazonItemInput = ItemCopy & { asin: string };
export type DirectItemInput = ItemCopy & {
  url: string; // brand-direct page
  price?: number; // only when the brand publishes it; omit for "contact for pricing"
  priceNote?: string; // shown instead of a price, e.g. "Dealer quote"
  soldBy?: string;
};
export type ItemInput = AmazonItemInput | DirectItemInput;

export type BlockInput =
  | { kind: "prose"; id?: string; eyebrow?: string; heading: string; paragraphs: string[] }
  | { kind: "products"; id: string; eyebrow?: string; heading: string; intro?: string; items: ItemInput[] }
  | { kind: "table"; id?: string; eyebrow?: string; heading: string; intro?: string; columns: string[]; rows: string[][]; note?: string }
  | { kind: "specTable"; id?: string; eyebrow?: string; heading: string; intro?: string; itemIds: string[]; columns: { label: string; value: (it: ResolvedItem) => string }[]; note?: string }
  | { kind: "cards"; id?: string; eyebrow?: string; heading: string; intro?: string; cards: { h: string; b: string }[] }
  | { kind: "callout"; eyebrow: string; heading: string; body: string[]; dark?: boolean }
  | { kind: "steps"; id?: string; eyebrow?: string; heading: string; intro?: string; steps: { h: string; b: string }[] };

export type Guide = {
  slug: string;
  // Listing (blog index, search, related cards, sitemap)
  category: Category;
  excerpt: string; // ≤ 160 chars, used on cards
  readTime: string; // "8 min read"
  // SEO
  title: string; // ≤ 60 chars, keyword first, "(2026)" year, no site name
  description: string; // 140–160 chars, names the brands/models covered
  keywords?: string[];
  // Dates (ISO yyyy-mm-dd). `updated` = last editorial change. Product changes are added automatically.
  published: string;
  updated: string;
  // Hero
  eyebrow: string;
  eyebrowAccent: string;
  h1: string;
  h1Accent: string;
  breadcrumb: string; // short page name for the breadcrumb trail
  heroImage: string; // /pictures/… (portrait or landscape; displayed with object-cover)
  ogImage: string; // /pictures/og/<slug>.jpg, exactly 1200×630
  heroAlt: string; // describes what is in the photo
  heroCaption?: string;
  intro: string[]; // 2 paragraphs
  quickPicks?: { label: string; itemId: string }[];
  blocks: BlockInput[];
  faqs: { q: string; a: string }[];
  related: string[]; // 4 slugs of other guides
  sources?: { label: string; url: string }[];
};

// ---------- Resolved types (what the template renders) ----------

export type ResolvedItem = ItemCopy & {
  url: string;
  asin?: string;
  price: number | null;
  priceLabel: string; // "$16.95", or the direct item's priceNote
  availability: Availability | "direct";
  availabilityLabel: string;
  soldBy?: string;
  image?: string;
  checkedAt?: string;
};

const AVAILABILITY_LABEL: Record<Availability | "direct", string> = {
  "in-stock": "In stock",
  "low-stock": "Low stock",
  "back-order": "Made to order or back-ordered, ships after a lead time",
  "pre-order": "Pre-order",
  "out-of-stock": "Currently unavailable",
  unknown: "Check availability on Amazon",
  direct: "Sold direct by the brand or its dealers",
};

// Prices are printed by the card, from products.json. A typed "$" in pros, cons or specs goes stale
// at the next refresh (the current site has "Under $11" on a $12 item), so it fails the build.
function assertNoTypedPrices(input: ItemInput) {
  for (const line of [...(input.pros ?? []), ...(input.cons ?? []), ...input.specs]) {
    if (/\$\s?\d/.test(line)) throw new Error(`${input.id}: "${line}" types a price. Remove it, or quote {price:ASIN} in prose.`);
  }
}

export function resolveItem(input: ItemInput): ResolvedItem {
  assertNoTypedPrices(input);
  if ("asin" in input) {
    const p = amazonProduct(input.asin);
    return {
      ...input,
      url: amz(input.asin),
      price: p.price,
      priceLabel: p.price ? usd(p.price) : "See price on Amazon",
      availability: p.availability,
      availabilityLabel: p.availabilityMessage || AVAILABILITY_LABEL[p.availability],
      soldBy: p.merchant,
      image: p.image,
      checkedAt: p.checkedAt,
    };
  }
  return {
    ...input,
    price: input.price ?? null,
    priceLabel: input.price ? usd(input.price) : input.priceNote ?? "See price at the brand",
    availability: "direct",
    availabilityLabel: AVAILABILITY_LABEL.direct,
  };
}

export type ResolvedGuide = Omit<Guide, "blocks"> & {
  blocks: (Exclude<BlockInput, { kind: "products" }> | (Omit<Extract<BlockInput, { kind: "products" }>, "items"> & { items: ResolvedItem[] }))[];
  items: ResolvedItem[]; // every product on the page, in display order
  dateModified: string; // max(updated, latest changedAt of the page's Amazon products)
  pricesChecked?: string; // latest checkedAt of the page's Amazon products
};

// Copy that needs a live price (intro, FAQ answers, tables, cards) writes {price:B002L9ZEHW};
// it renders as "$16.95 on November 10, 2026" from products.json, so it can never disagree with the card.
const PRICE_TOKEN = /\{price:([A-Z0-9]{10})\}/g;
export function fillPrices(text: string): string {
  return text.replace(PRICE_TOKEN, (_, asin: string) => {
    const p = amazonProduct(asin);
    return p.price ? `${usd(p.price)} on ${formatDate(p.checkedAt)}` : "the current Amazon price";
  });
}
// Applies fillPrices to every string in the guide (functions, e.g. specTable columns, pass through).
function fill<T>(v: T): T {
  if (typeof v === "string") return fillPrices(v) as T;
  if (Array.isArray(v)) return v.map(fill) as T;
  if (v && typeof v === "object") return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, fill(x)])) as T;
  return v;
}

// Display order = schema order. Each products block is sorted once by link type (ASIN → search → direct);
// the page's ranks, the quick picks and the ItemList all use this one list. Nothing re-sorts it later.
export function resolveGuide(input: Guide): ResolvedGuide {
  const g = fill(input);
  const blocks = g.blocks.map((b) => (b.kind === "products" ? { ...b, items: byLinkType(b.items.map(resolveItem), (it) => it.url) } : b));
  const items = blocks.flatMap((b) => (b.kind === "products" ? b.items : []));
  const amazonItems = items.filter((it) => it.asin);
  const changed = amazonItems.map((it) => amazonProduct(it.asin!).changedAt);
  const checked = amazonItems.map((it) => it.checkedAt!).sort();
  return {
    ...g,
    blocks,
    items,
    dateModified: [g.updated, ...changed].sort().at(-1)!,
    pricesChecked: checked.at(-1),
  };
}

export const guideUrl = (slug: string) => `${SITE.url}/blog/${slug}`;

export function guideMetadata(g: Guide): Metadata {
  const url = guideUrl(g.slug);
  const image = { url: abs(g.ogImage), width: 1200, height: 630, alt: g.heroAlt };
  return {
    title: g.title,
    description: g.description,
    keywords: g.keywords,
    alternates: { canonical: url },
    openGraph: { title: g.title, description: g.description, type: "article", url, images: [image], publishedTime: g.published },
    twitter: { card: "summary_large_image", title: g.title, description: g.description, images: [image.url] },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  };
}

export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
```

**About the resolver's design.**

- **Sorting.** Display order and schema order are the same list, sorted once. In the current site the template sorts **within each block**, while `schema.ts` then re-sorts the **whole ItemList**, so they can disagree.
  - Example: on `/blog/merrithew-spx-max-vs-v2-max` the brand-direct SPX Max is visible as item **02** but is schema position **5** (see 3.6).
  - The fix keeps the per-block sort (section headings group the items), and the ItemList is that same list. If a niche needs a brand-direct item early (a paid placement), make that an explicit exception in `byLinkType`, not a second sort.
- **Prices in copy.** Pros, cons and specs may not contain a typed price (build error). Intro, FAQ, table and card text quote live prices with `{price:ASIN}`.
- **Dates.** `dateModified` changes only when something visible changes: an editorial edit (`updated`) or an Amazon price or availability change (`changedAt`). A refresh that finds the same price changes `checkedAt` (shown as "Prices checked …") but not `dateModified`.

A guide module **[NEW]**. This is the real `/blog/best-headband-for-lagree` page re-expressed in the corrected shape (5.1 shows the original):

```ts
// src/content/guides/best-headband-for-lagree.ts
import type { Guide } from "@/lib/guide";

const guide: Guide = {
  slug: "best-headband-for-lagree",
  category: "Lagree", // [NICHE]
  excerpt: "Sweatproof, no-slip headbands for Lagree, compared on grip and sweat control.",
  readTime: "7 min read",
  title: "Best Headband for Lagree (2026): 6 Sweatproof, No-Slip Picks",
  description: "The best sweatproof, no-slip headbands for Lagree: Halo, Sweaty Bands, Nike, Under Armour, Bondi Band and a 6-pack, compared on grip and sweat control.",
  keywords: ["best headband for lagree", "lagree headband", "sweatproof headband for lagree"],
  published: "2026-10-20",
  updated: "2026-10-20",
  eyebrow: "Lagree",
  eyebrowAccent: "Accessories",
  h1: "The Best Headband for Lagree",
  h1Accent: "6 Sweatproof, No-Slip Picks (2026)",
  breadcrumb: "Best Headband for Lagree",
  heroImage: "/pictures/stitch-studio-round-mirror.png",
  ogImage: "/pictures/og/best-headband-for-lagree.jpg",
  heroAlt: "A round mirror in a boutique studio",
  heroCaption: "Sweat control · No-slip grip · Flat at the back",
  intro: ["…", "…"],
  quickPicks: [{ label: "Best for heavy sweat", itemId: "halo-headband-ii" }],
  blocks: [
    {
      kind: "products",
      id: "headbands",
      eyebrow: "Our picks",
      heading: "The best headbands for Lagree",
      items: [
        {
          asin: "B002L9ZEHW", id: "halo-headband-ii", name: "Halo Headband II Pullover Sweatband", brand: "Halo Headband",
          badge: "Best for Heavy Sweat",
          specs: ["Patented silicone SweatSeal channels sweat away from the eyes", "Silver ions to reduce odor"],
          body: "The headband for heavy sweaters. …",
          pros: ["SweatSeal keeps sweat out of eyes"], cons: ["Pullover, sporty look"],
        },
      ],
    },
  ],
  faqs: [{ q: "What is the best headband for Lagree?", a: "…" }],
  related: ["best-sweat-towel-for-lagree", "best-lagree-workout-sets", "best-water-bottle-for-lagree", "what-to-wear-to-lagree"],
};

export default guide;
```

`src/content/guides/index.ts` **[NEW]** is the registry. It is an explicit import list, and the check makes the build fail when a file in the folder is missing from the list, or a slug does not match its file name.

```ts
import fs from "node:fs";
import path from "node:path";
import type { Guide } from "@/lib/guide";
import bestHeadbandForLagree from "./best-headband-for-lagree";
// … one import per guide

export const GUIDES: Guide[] = [
  bestHeadbandForLagree,
  // …
];

// Runs at build time on the server: every file must be registered, every slug must match its file.
const files = fs.readdirSync(path.join(process.cwd(), "src/content/guides")).filter((f) => f.endsWith(".ts") && f !== "index.ts").map((f) => f.replace(/\.ts$/, "")).sort();
const slugs = GUIDES.map((g) => g.slug).sort();
if (JSON.stringify(files) !== JSON.stringify(slugs)) {
  throw new Error(`Guide registry mismatch.\nfiles: ${files.join(", ")}\nregistered: ${slugs.join(", ")}`);
}

export const guideBySlug = (slug: string) => GUIDES.find((g) => g.slug === slug);
```

Import `GUIDES` only from server code: route files, `sitemap.ts`, the search-index route and server components. The `fs` check must not reach a client bundle.

#### 1.5.4 Other page data shapes

**Blog index card (current)**, `src/app/blog/page.tsx` **[VERBATIM]**:

```ts
const posts: { title: string; excerpt: string; href: string; category: string; readTime: string; imageUrl: string; featured?: boolean }[] = [
  {
    title: "Pilates Essentials (2026): The Complete List",
    excerpt: "Every Pilates essential on one page: the best, budget and splurge pick for leggings, grip socks, mat, props, recovery and a home reformer.",
    href: "/blog/pilates-essentials",
    category: "Equipment",
    readTime: "14 min",
    imageUrl: "/pictures/stitch-pilates-essentials-logbook.png",
    featured: true,
  },
  // … 276 more, hand-kept
];
```

In the corrected structure this array is derived from `GUIDES`: `{ title: g.title, excerpt: g.excerpt, href: `/blog/${g.slug}`, category: g.category, readTime: g.readTime, imageUrl: g.heroImage }`. A `featured` slug constant picks the top card.

**Search index entry (current)**, generated as `public/search-index.json`. Type from `SiteSearch.tsx` **[VERBATIM]**:

```ts
type Entry = { url: string; title: string; description: string; keywords: string[]; type: string; image: string };
```

**Seasonal deal guide** **[NICHE]**: `DealsGuideProps` in `src/components/DealsGuide.tsx` **[VERBATIM]**. Only build this if the niche has Black Friday or holiday traffic.

```ts
export type DealItem = {
  asin: string;
  name: string;
  price: string;
  badge: string;
  note: string;
  lowStock?: boolean;
};
export type DealSection = {
  id: string;
  title: string;
  intro: string;
  items: DealItem[];
};
export type DealsGuideProps = {
  slug: string;
  title: string;
  description: string;
  breadcrumb: string;
  eyebrow: string;
  h1: string;
  h1Accent: string;
  readTime: string;
  heroImage: string;
  heroAlt: string;
  intro: string;
  sections: DealSection[];
  watchFor: { h: string; b: string }[];
  faqs: { q: string; a: string }[];
  guides?: { label: string; href: string }[];
  ctaPlaceholder?: string;
  season?: "black-friday" | "cyber-monday" | "christmas";
  datePublished?: string;
};
```

In the rebuild, a deals page is a normal `Guide` with a seasonal intro. Its items are ASIN references, so prices come from `products.json`. A separate template is not needed.

### 1.6 Routing

**Current:**

- **One folder per URL.** `src/app/blog/<slug>/page.tsx` becomes `/blog/<slug>`. There is no dynamic segment for articles.
- **Static pages:** `/`, `/blog`, `/brands`, `/advertise`, `/affiliate-disclosure`, `/contact`, `/privacy`, `/terms`.
- **Metadata routes:** `src/app/sitemap.ts` serves `/sitemap.xml`, and `src/app/robots.ts` serves `/robots.txt`. `src/app/icon.png`, `apple-icon.png` and `favicon.ico` are file-convention icons.
- **Layouts:** the root `src/app/layout.tsx` wraps everything. `src/app/blog/layout.tsx` only changes the title template (2.1).
- **Not found:** `src/app/not-found.tsx`.
- **Redirects:** permanent redirects in `next.config.ts` for renamed slugs.
- **Rendering:** 366 routes are static (`○`). `/blog` is dynamic (`ƒ`) because it reads `searchParams` for `?category=`.

**FIX: the blog index renders on every request.** `/blog` renders the full 277-card list on each request only to preselect a category filter. The filter is client-side anyway. The corrected index is static and reads `?category=` on the client (6.1).

**Corrected routing** **[NEW]**. One route renders every guide, and unknown slugs return 404 at the edge.

```tsx
// src/app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import Guide from "@/components/Guide";
import { GUIDES, guideBySlug } from "@/content/guides";
import { guideMetadata } from "@/lib/guide";

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guideBySlug(slug);
  return guide ? guideMetadata(guide) : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guideBySlug(slug);
  if (!guide) notFound();
  return <Guide guide={guide} />;
}
```

`src/app/blog/layout.tsx` stays as in 2.1. Static pages (about, contact, legal) stay as their own folders.

---

## 2. SEO

### 2.1 Root metadata and title strategy

`src/app/layout.tsx` **[VERBATIM]**:

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
  description:
    "Curated city guides, expert studio recommendations, and equipment picks for Pilates practitioners worldwide. Discover the best reformer classes, mat studios, and home equipment.",
  keywords: [
    "pilates studios",
    "best pilates studios",
    "reformer pilates",
    "pilates classes near me",
    "pilates equipment",
    "pilates for beginners",
    "classical pilates",
    "contemporary pilates",
    "pilates instructor",
    "pilates mat workout",
    "home pilates reformer",
    "pilates london",
    "pilates new york",
    "pilates paris",
    "pilates zurich",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Pilates Collective Club: Find Your Perfect Studio",
    description:
      "Curated city guides, expert studio recommendations, and equipment picks for Pilates practitioners worldwide.",
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
  alternates: {
    canonical: BASE_URL,
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": "Pilates Collective Club",
      "url": BASE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/pictures/pcc-logo.png`,
        "width": 859,
        "height": 286,
      },
      "description": "Curated city guides, expert studio recommendations, and equipment picks for Pilates practitioners worldwide.",
      "sameAs": [
        "https://www.instagram.com/pilatescollectiveclub",
        "https://www.pinterest.com/pilatescollectiveclub",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      "url": BASE_URL,
      "name": "Pilates Collective Club",
      "publisher": { "@id": `${BASE_URL}/#organization` },
      "potentialAction": {
        "@type": "SearchAction",
        "target": { "@type": "EntryPoint", "urlTemplate": `${BASE_URL}/blog?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-5H5C236ZVF" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5H5C236ZVF');
        `}</Script>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(orgSchema) }} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

Four flaws are fixed in the corrected layout below.

1. **FIX: canonical in the root layout.** `alternates.canonical: BASE_URL` in the root layout is inherited by **any page that forgets its own canonical**, which would point that page at the homepage. Every current page sets its own canonical, so nothing is broken today, but one missed line would de-index a page. Set the homepage canonical in `src/app/page.tsx`, never in a layout.
2. **FIX: broken site search action.** The `SearchAction` points at `/blog?q=…`, which the blog index ignores (it only reads `?category=`). Google also retired the sitelinks search box in late 2024. Remove `potentialAction`.
3. **FIX: hard-coded analytics ID.** The GA4 measurement ID is hard-coded. Read it from `NEXT_PUBLIC_GA_ID` and render nothing when it is unset, so preview and local builds do not send hits.
4. **FIX: fonts not loaded.** Fonts come from a render-blocking `@import` in `globals.css`. Components ask for fonts that are never loaded (6.3). Load them with `next/font` in the layout.

`src/app/layout.tsx` **[ADAPTED]**, with all four fixes and every literal moved to `SITE` **[NICHE values]**:

```tsx
import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { Cormorant_Garamond, Jost } from "next/font/google"; // [NICHE] pick the new brand's pair
import "./globals.css";
import { jsonLdHtml } from "@/lib/schema";
import { SITE, ORG_ID, WEBSITE_ID, abs } from "@/lib/site";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500", "600"], style: ["normal", "italic"], display: "swap", variable: "--font-serif" });
const sans = Jost({ subsets: ["latin"], display: "swap", variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.name, template: `%s | ${SITE.name}` },
  description: SITE.description,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  manifest: "/manifest.webmanifest",
  openGraph: { siteName: SITE.name, type: "website", locale: SITE.locale },
  twitter: { card: "summary_large_image" },
};

const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: SITE.name,
      url: SITE.url,
      logo: { "@type": "ImageObject", url: abs(SITE.logo.path), width: SITE.logo.width, height: SITE.logo.height },
      description: SITE.description,
      ...(SITE.sameAs.length ? { sameAs: SITE.sameAs } : {}),
    },
    { "@type": "WebSite", "@id": WEBSITE_ID, url: SITE.url, name: SITE.name, inLanguage: SITE.language, publisher: { "@id": ORG_ID } },
  ],
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`h-full ${serif.variable} ${sans.variable}`}>
      <body className="min-h-full flex flex-col antialiased">
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}</Script>
          </>
        )}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(siteGraph) }} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

The `keywords` list is dropped from the root layout. Google ignores the keywords meta tag, and a site-wide list leaks into every page. Per-article `keywords` are kept only because the site search uses them (6.4).

**Title strategy.**

- **Articles** skip the site-name suffix. `src/app/blog/layout.tsx` **[VERBATIM]**:

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

- A layout's `title.template` applies to **child** segments, not to the page in its own segment. So `/blog` itself keeps the root suffix ("Pilates Journal: … | Pilates Collective Club"), while `/blog/<slug>` gets the bare title.
- Served examples:
  - `/blog/best-headband-for-lagree` serves `<title>Best Headband for Lagree (2026): 6 Sweatproof, No-Slip Picks</title>`.
  - `/affiliate-disclosure` serves `<title>Affiliate Disclosure | Pilates Collective Club</title>`.
- **Article title formula:** `<Primary keyword> (<year>): <count or differentiator>`. Keep it at 60 characters or fewer, with the year in parentheses. Examples:
  - "Best Pilates Grip Socks (2026): 5 Verified Picks"
  - "Merrithew SPX Max vs V2 Max (2026): Which STOTT Reformer?"
- **The H1 is not the title.** The H1 is split into a main line and an accent line (`h1` and `h1Accent`) and may be longer.
- **Descriptions** run 140–160 characters and name the brands or models covered. Example: "10 wellness advent calendars on Amazon for 2026: Twinings, Pukka, Stash, Taylors and Tea Forte tea, …".

### 2.2 Per-page metadata

Per-article metadata as currently written, `src/app/blog/best-headband-for-lagree/page.tsx` **[VERBATIM]**:

```ts
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["best headband for lagree", "lagree headband", "sweatproof headband for lagree", "non slip workout headband", "halo headband lagree", "sweaty bands lagree", "best sweatband for lagree", "headband that doesn't slip"],
  openGraph: { title: TITLE, description: DESCRIPTION, type: "article", url: URL, images: [{ url: `https://pilatescollectiveclub.com${HERO}`, width: 1200, height: 630, alt: "A round mirror in a studio" }] },
  twitter: { card: "summary_large_image", title: "Best Headband for Lagree (2026)", description: DESCRIPTION, images: [`https://pilatescollectiveclub.com${HERO}`] },
  alternates: { canonical: URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};
```

Every article sets all six: title, description, keywords, Open Graph (type `article`, absolute URL, image), Twitter `summary_large_image`, the absolute canonical, and robots `max-image-preview:large`. The served page renders:

```html
<link rel="canonical" href="https://pilatescollectiveclub.com/blog/best-headband-for-lagree"/>
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1"/>
```

**FIX: wrong image size declared.** Open Graph declares `width: 1200, height: 630` for the hero image, but the heroes are **832×1248 portrait PNGs**, and `Article.image` in JSON-LD repeats the false size. Social platforms then crop a portrait photo into a landscape card. Some heroes are also 6–10 MB JPEGs served unoptimized to crawlers.

- Give each guide a real 1200×630 JPEG (`ogImage`, under 300 KB) cut from the hero.
- Declare its true size.
- The rebuild generates all article metadata with `guideMetadata()` (1.5.3), which uses `ogImage`. Pages do not hand-write metadata.

### 2.3 Canonical handling

- Every indexable page sets `alternates.canonical` to its **absolute** URL on the apex domain, with no trailing slash and no query string.
- Filtered views (`/blog?category=Equipment`) are not canonical. They inherit the `/blog` canonical.
- A renamed slug gets a 301 in `next.config.ts`, and its old URL is removed everywhere.
- **Rule:** canonical is set per page (by `guideMetadata` for articles, by hand for static pages), never in a layout (FIX in 2.1).

### 2.4 Sitemap generation

`src/app/sitemap.ts` **[VERBATIM]**, the city block shown for completeness and excluded from the rebuild:

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
    .filter(
      (entry) =>
        entry.isDirectory() &&
        fs.existsSync(path.join(dir, entry.name, "page.tsx")),
    )
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
    ...routeSlugs("cities").map((slug) => ({
      url: `${BASE_URL}/cities/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...routeSlugs("blog").map((slug) => ({
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
```

**FIX: every page claims to change on every build.** `lastModified: now` stamps every URL with the build time, so any deploy (even a typo fix) tells search engines all pages changed. Google ignores `lastmod` from sites where it proves unreliable, which wastes the signal exactly when a page really changes. `changeFrequency` and `priority` are ignored by Google, so they are dropped.

`src/app/sitemap.ts` **[ADAPTED]**. Article dates use the same `dateModified` the page prints in JSON-LD (1.5.3). Static pages carry a hand-set date that is changed only when their content changes.

```ts
import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { GUIDES } from "@/content/guides";
import { resolveGuide } from "@/lib/guide";

// Update a date here only when that page's visible content changes.
const STATIC: { path: string; modified: string }[] = [
  { path: "", modified: "2026-01-01" }, // [NICHE] dates
  { path: "/blog", modified: "2026-01-01" },
  { path: "/about", modified: "2026-01-01" },
  { path: "/contact", modified: "2026-01-01" },
  { path: "/advertise", modified: "2026-01-01" },
  { path: "/affiliate-disclosure", modified: "2026-01-01" },
  { path: "/privacy", modified: "2026-01-01" },
  { path: "/terms", modified: "2026-01-01" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const guides = GUIDES.map(resolveGuide);
  const newest = guides.map((g) => g.dateModified).sort().at(-1) ?? "2026-01-01";
  return [
    ...STATIC.map((s) => ({
      url: `${SITE.url}${s.path}`,
      // The homepage and the blog index list articles, so they change when the newest article does.
      lastModified: s.path === "" || s.path === "/blog" ? [s.modified, newest].sort().at(-1)! : s.modified,
    })),
    ...guides.map((g) => ({ url: `${SITE.url}/blog/${g.slug}`, lastModified: g.dateModified })),
  ];
}
```

### 2.5 robots.txt

`src/app/robots.ts` **[VERBATIM]**. It is correct as is; only the domain moves to `SITE.url`.

```ts
import type { MetadataRoute } from "next";

const BASE_URL = "https://pilatescollectiveclub.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
```

### 2.6 IndexNow key file and submission script

**Key file.**

- The key is a 32-character hex string. It lives in a text file at the site root, named after the key and containing only the key: `public/<key>.txt` is served as `https://<domain>/<key>.txt`.
- The current site has one such file in `public/` (its key is not repeated here). **Generate a new key for the new site; never reuse the old one.**
- The key is public by design (anyone can read the file). It is still not typed into scripts: the submission script reads it from `INDEXNOW_KEY`.
- Create one with:

```bash
KEY=$(openssl rand -hex 16) && printf '%s' "$KEY" > "public/$KEY.txt" && echo "$KEY"
```

**Submission (current).** Submissions were sent with `curl` from a temporary shell script, waiting for the pages to return 200 in production first. That script lived outside the repo **[VERBATIM]**, with the key and file path shortened:

```bash
#!/bin/bash
# Waits until all 4 advent pages are live in production, then submits them to IndexNow once.
for i in $(seq 1 240); do
  ok=0
  for s in best-pilates-yoga-advent-calendars best-fitness-gym-advent-calendars best-sports-advent-calendars best-wellness-self-care-advent-calendars; do
    c=$(curl -s -o /dev/null -m 20 -w "%{http_code}" https://pilatescollectiveclub.com/blog/$s); [ "$c" = 200 ] && ok=$((ok+1))
  done
  if [ $ok = 4 ]; then
    echo "pages live after $i checks"
    curl -sS -m 30 -w "IndexNow HTTP %{http_code}\n" -X POST https://api.indexnow.org/indexnow -H "Content-Type: application/json; charset=utf-8" --data @indexnow-advent.json
    exit 0
  fi
  sleep 60
done
echo "pages not live within 4 hours"; exit 1
```

with a payload of this shape:

```json
{
  "host": "pilatescollectiveclub.com",
  "key": "<key>",
  "keyLocation": "https://pilatescollectiveclub.com/<key>.txt",
  "urlList": ["https://pilatescollectiveclub.com/blog/…"]
}
```

**FIX: submission tooling lives outside the repo.** The submission tooling never entered the repository, so each submission was rebuilt by hand. `scripts/indexnow.mjs` **[NEW]** keeps the same behavior:

- It waits until each URL returns 200 in production.
- It submits only the URLs given (no bulk "everything" submissions).
- It reads the key from the environment.

```js
// Usage: INDEXNOW_KEY=… node scripts/indexnow.mjs /blog/slug-a /blog/slug-b
// Submits only after every URL returns 200 on production. IndexNow shares submissions with Bing, Yandex, Seznam, Naver and others.
const SITE = "https://www.example.com"; // [NICHE] must match src/lib/site.ts
const key = process.env.INDEXNOW_KEY;
if (!key) throw new Error("Set INDEXNOW_KEY");
const urls = process.argv.slice(2).map((p) => (p.startsWith("http") ? p : SITE + p));
if (!urls.length) throw new Error("Pass one or more paths");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
for (let attempt = 1; ; attempt++) {
  const codes = await Promise.all(urls.map((u) => fetch(u, { method: "HEAD", redirect: "manual" }).then((r) => r.status).catch(() => 0)));
  if (codes.every((c) => c === 200)) break;
  if (attempt === 240) throw new Error(`Not live after 4 hours: ${urls.filter((_, i) => codes[i] !== 200).join(", ")}`);
  await sleep(60_000);
}
const keyFile = await fetch(`${SITE}/${key}.txt`).then((r) => r.text());
if (keyFile.trim() !== key) throw new Error("Key file is not live or does not match INDEXNOW_KEY");

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(SITE).host, key, keyLocation: `${SITE}/${key}.txt`, urlList: urls }),
});
console.log(`IndexNow HTTP ${res.status}`); // 200 or 202 = accepted
if (![200, 202].includes(res.status)) process.exit(1);
```

Submit new pages and pages whose visible content changed. Google does not use IndexNow; it reads the sitemap's `lastmod` (2.4).

### 2.7 Internal linking patterns

Five link systems, in order of weight:

1. **The header mega menu** (every page). Data in `src/components/nav-menus.ts` **[VERBATIM]**, types and one tab **[NICHE content]**:

```ts
// Desktop mega menu content (and the mobile Shop Gear accordion).
export type MenuLink = { label: string; href: string };
export type MenuTab = {
  label: string;
  groups: { label: string; links: MenuLink[] }[];
  featured?: { title: string; href: string; image: string };
  /** Short text shown in place of the featured card. */
  intro?: { title: string; body: string };
  all?: MenuLink;
};
export type Menu = { id: string; label: string; href?: string; tabs: MenuTab[] };

export const SHOP_CATEGORIES: MenuTab[] = [
  // …
  {
    label: "Reformers",
    groups: [
      {
        label: "By need",
        links: [
          { label: "Best Home Reformers", href: "/blog/best-home-pilates-reformer" },
          { label: "Best for Beginners", href: "/blog/best-pilates-reformer-for-beginners" },
          { label: "Foldable Reformers", href: "/blog/best-foldable-pilates-reformer" },
          // …
        ],
      },
      {
        label: "By budget",
        links: [
          { label: "Under $500", href: "/blog/best-pilates-reformer-under-500" },
          { label: "Under $1,000", href: "/blog/best-pilates-reformer-under-1000" },
          // …
        ],
      },
    ],
    featured: { title: "Best Home Pilates Reformer (2026): $359 to $4,700 Compared", href: "/blog/best-home-pilates-reformer", image: "/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg" },
    all: { label: "All equipment", href: "/blog?category=Equipment" },
  },
];

export const MENUS: Menu[] = [
  { id: "journal", label: "Journal", href: "/blog", tabs: JOURNAL_TABS },
  { id: "brands", label: "Brands", href: "/brands", tabs: BRANDS_TABS },
  { id: "cities", label: "Cities", href: "/cities", tabs: CITIES_TABS },
  { id: "about", label: "About", href: "/#about", tabs: ABOUT_TABS },
];

export const SHOP_MENU: Menu = { id: "shop", label: "Shop Gear", tabs: SHOP_CATEGORIES };
```

- Each top item opens a full-width panel with three columns:
  - a left rail of tabs (category);
  - link groups ("By need", "By budget");
  - a featured article card.
- The same data drives the mobile accordion. Drop the `cities` entry in the rebuild.

**FIX: menu links are invisible to crawlers.**

- The problem:
  - `Header.tsx` renders a panel only while it is open (`{openMenuData && <MegaPanel … />}`), and the mobile menu only while toggled (`{menuOpen && …}`).
  - So the roughly 150 menu links **are not in the server HTML**. Crawlers see only the five top-level links.
  - The footer partly compensates.
- **The fix:** render every panel in the server HTML and toggle visibility with the `hidden` attribute, so all links are crawlable and the interaction stays the same. **[ADAPTED]**:

```tsx
{/* Inside <nav> in Header.tsx: every panel is always rendered; only the open one is visible. */}
{[...MENUS, SHOP_MENU].map((menu) => (
  <MegaPanel
    key={menu.id}
    menu={menu}
    hidden={openId !== menu.id}
    active={activeTabs[menu.id] ?? 0}
    setActive={(i) => setActiveTabs((a) => ({ ...a, [menu.id]: i }))}
    onNavigate={closeNow}
  />
))}
```

- `MegaPanel` passes `hidden` to its root `<div>`.
- Inactive tabs inside a panel must also be rendered with `hidden`, not dropped, so every tab's links are in the HTML.
- Do the same for the mobile menu: render it always, `hidden={!menuOpen}`.

2. **The footer**, with grouped link columns on every page.

3. **Related articles.** Every article ends with exactly four "Further reading" cards to sibling guides in the same cluster (`related`, rendered with `ArticleCard`). In the rebuild, `related` is a list of slugs, so titles and excerpts come from the target guide and cannot go stale.

4. **Contextual links in copy.** Two or three inline links in intros, callouts and FAQ answers point to the cluster's hub and to comparison pages.
   - **FIX: hard-coded hub link in the template.** The template appends a sentence that always links `/blog/best-pilates-reformer-brands`, even on headband or advent-calendar pages. Make the closing hub link a per-guide field, or drop it.

5. **Hub pages.** Hubs list their spokes: the deals hub links every deal guide, `/brands` links every brand guide, and the blog index links everything. The seasonal modules (`BF_GUIDES`, `CM_GUIDES`, `XMAS_GUIDES`, 7) exist so every seasonal page can link all its siblings from one list.

### 2.8 Breadcrumbs

Every article emits a three-level `BreadcrumbList` (Home > Blog > page). From the template **[VERBATIM]**:

```ts
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${SITE}/blog` },
    { "@type": "ListItem", "position": 3, "name": props.breadcrumb, "item": pageUrl },
  ],
},
```

**FIX: breadcrumb markup with no visible breadcrumb.** The template emits breadcrumb markup but renders **no visible breadcrumb**. Structured data should describe what is on the page, and a visible trail is also an internal link to `/blog`. `src/components/Breadcrumbs.tsx` **[NEW]** renders the trail and its markup from one array. Place it above the eyebrow in the hero.

```tsx
import Link from "next/link";
import { SITE } from "@/lib/site";

export type Crumb = { name: string; path: string };

export function breadcrumbLd(crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: `${SITE.url}${c.path}` })),
  };
}

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-xs" style={{ color: "var(--muted)" }}>
        {crumbs.map((c, i) => (
          <li key={c.path} className="flex items-center gap-2">
            {i < crumbs.length - 1 ? <Link href={c.path || "/"} className="underline-offset-2 hover:underline">{c.name}</Link> : <span aria-current="page">{c.name}</span>}
            {i < crumbs.length - 1 && <span aria-hidden>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
```

The guide uses `[{ name: "Home", path: "" }, { name: "Blog", path: "/blog" }, { name: g.breadcrumb, path: `/blog/${g.slug}` }]` for both the component and `breadcrumbLd()`.

### 2.9 Heading hierarchy rules

The served outline of `/blog/best-headband-for-lagree` (production build, `h1`–`h3`):

```
h1 The Best Headband for Lagree  6 Sweatproof, No-Slip Picks (2026)
h2 The six headbands compared
h2 The best headbands for Lagree
h3 Halo Headband II Pullover Sweatband
h3 Sweaty Bands No-Slip Velvet-Lined Headband (5/8")
h3 Nike Dri-FIT Fury Classic Wide Headband
h3 Under Armour Women's Play Up Headband
h3 Bondi Band Tapered Anti-Slip Workout Headband
h3 QiShang 6-Pack Sweat Headbands
h2 What matters in a Lagree headband
h2 Frequently asked questions
h3 What is the best headband for Lagree?
h3 Do you need a headband for Lagree?
h3 How do I stop my headband slipping in class?
h3 Can men wear these headbands?
h2 Further reading
h3 Best Sweat Towel for Lagree
h3 Best Lagree Workout Sets
h3 Best Water Bottle for Lagree
h3 What to Wear to Lagree
h2 Find a Lagree studio near you
```

Rules the template enforces:

- **Exactly one `h1`.** It is the main line plus the accent line, joined by a `<br/>` inside the same `h1`. Header, footer and cards never use `h1`.
- **`h2`:** one per content block (table, products, cards, steps, prose, callout), plus "Frequently asked questions", "Sources" and "Further reading".
- **`h3`:**
  - every product name (in the product card);
  - every FAQ question;
  - every related-article title;
  - step and card titles use styled `<p>`, not headings, so the outline stays clean.
- **Never skip a level** (no `h3` without a parent `h2`, no `h4`).
- Eyebrows ("At a glance", "Our picks") are `<p>` text, not headings.

The last `h2` ("Find a Lagree studio near you") belongs to the city CTA, which is removed in the rebuild (6.7).

---

## 3. Structured data

This is the site's main measurable advantage. Product markup sits on nearly every article, and every Product node that is printed is one Google accepts.

### 3.1 Coverage (measured)

All 361 sitemap URLs on the production build of commit `73b6e70` were crawled, and every `application/ld+json` block was parsed. Excluding the out-of-scope city pages, there are 285 URLs.

| Measure | Result |
|---|---|
| Articles (`/blog/<slug>`) | 277 |
| Articles emitting at least one `Product` | **261 (94%)** |
| Articles emitting `Article` + `BreadcrumbList` + `FAQPage` | 277 (100%) |

Type sets per URL (non-city):

| URLs | Types emitted (excluding nested `ListItem`, `Offer`, `Brand`, `ImageObject`, `Question`, `Answer`) |
|---|---|
| 151 | Article, BreadcrumbList, FAQPage, ItemList, Organization, Product, WebPage, WebSite |
| 104 | Article, BreadcrumbList, FAQPage, ItemList, Organization, Product, WebSite |
| 5 | Article, BreadcrumbList, FAQPage, ItemList / Product, Organization, **Review, Rating**, WebSite (WebPage on some) |
| 1 | Article, BreadcrumbList, ItemList, Organization, Product, WebPage, WebSite (no FAQ) |
| 16 | Article-only articles (no Product): brand profiles, method comparisons, pages whose picks are brand-direct only |
| 2 | CollectionPage, ItemList, Organization, WebSite (`/blog`, `/brands`) |
| 1 | WebPage, ItemList, Organization, WebSite (homepage) |
| 1 | ContactPage, ContactPoint, Organization, WebSite (`/contact`) |
| 1 | WebPage, BreadcrumbList, Organization, WebSite (`/advertise`) |
| 3 | Organization, WebSite only (`/affiliate-disclosure`, `/privacy`, `/terms`) |

The 16 articles without Product markup are the ones whose picks are brand-direct or search links with no verifiable Amazon price, or which are not shopping pages. The cleaner deliberately produces no Product there rather than an invalid one.

### 3.2 Architecture: three layers

1. **Site graph (every page).** The root layout prints `Organization` + `WebSite` in their own `<script type="application/ld+json">`, with stable `@id`s (`https://<domain>/#organization`, `/#website`).
2. **Page graph (every article).** The template builds one `@graph` from the **same data object that renders the visible page**: `Article`, `ItemList` of `Product`, `BreadcrumbList`, `FAQPage`. Visible ranks, prices, product names and FAQ text cannot drift from the markup, because there is only one copy.
3. **The cleaner.** Every JSON-LD object on the site, including the site graph, is printed with `jsonLdHtml()`, which runs `cleanSchema()` first. The cleaner:
   - normalizes prices to plain numbers;
   - attaches the Amazon product image for any Amazon ASIN link;
   - validates each Product, demoting one that would fail to a plain named and linked `ListItem` (inside lists) or to `Thing` (elsewhere).

### 3.3 `src/lib/schema.ts` (current, complete)

**[VERBATIM]**, all 136 lines:

```ts
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
```

**How it is used.** Every page prints JSON-LD with:

```tsx
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
```

Four flaws in this file are fixed in the corrected version.

1. **FIX: unescaped script content.** `jsonLdHtml` returns raw `JSON.stringify` output inside `<script>`. Any string containing `</script>` (product names, FAQ answers, copy pasted from a listing) closes the tag early, breaking the markup and opening an injection path. Escape `<`, `>`, `&`, U+2028 and U+2029. The result is still valid JSON.
2. **FIX: schema order differs from the page.** `sortItemList` re-sorts the whole `ItemList` after the template has already sorted each block, so schema positions can differ from the visible ranks (3.6 shows a live case). Sort once, in `resolveGuide()` (1.5.3), and do not reorder in the cleaner. This also removes the hard-coded domain and partner name from `linkRank`.
3. **FIX: wrong number taken from mixed text.** `cleanPrice` takes the **first** number in the string, so `"2-pack, $30"` becomes `2`. Prefer the amount after `$`. With `products.json`, prices arrive as numbers anyway, and this is only a safety net.
4. **FIX: inconsistent made-to-order value.** "Made to order" maps to `MadeToOrder` here, but to `BackOrder` in the template, and `productItemList` marks every other item `InStock` without checking. In the rebuild, availability comes from the API through one mapping (3.7), and `productItemList` is dropped because there are no hand-built pages.

`src/lib/schema.ts` **[ADAPTED]** for the rebuild:

```ts
// Every JSON-LD object on the site is printed through jsonLdHtml(). It guarantees:
// - every Product that is printed has a positive numeric USD price and a real product image,
//   or carries a review/aggregateRating; otherwise it is demoted (ListItem → named link, else → Thing);
// - prices are plain numbers ("1329.99"), never "$1,329.99";
// - the output cannot close its <script> tag.
// It never reorders anything: list order is decided once, in resolveGuide().

import { asinOf } from "@/lib/affiliate";
import { amazonImage } from "@/lib/products";

type Node = Record<string, unknown>;

const isProduct = (t: unknown) => t === "Product" || (Array.isArray(t) && t.includes("Product"));

// 16.95 -> "16.95"; "$1,329.99" -> "1329.99"; "2-pack, $30" -> "30"; "Contact for pricing" -> null.
function cleanPrice(raw: unknown): string | null {
  const s = String(raw ?? "");
  const m = s.match(/\$\s*(\d[\d,]*(?:\.\d+)?)/) ?? s.match(/(\d[\d,]*(?:\.\d+)?)/);
  if (!m) return null;
  const n = Number(m[1].replace(/,/g, ""));
  return Number.isFinite(n) && n > 0 ? String(n) : null;
}

function validOffer(offer: unknown, fallbackUrl: unknown): Node | null {
  if (!offer || typeof offer !== "object" || Array.isArray(offer)) return null;
  const o = offer as Node;
  const price = cleanPrice(o.price);
  if (!price) return null;
  return { ...o, price, priceCurrency: o.priceCurrency ?? "USD", url: o.url ?? fallbackUrl };
}

function cleanProduct(p: Node): Node | null {
  const offer = validOffer(p.offers, p.url);
  const image = p.image ?? amazonImage(asinOf(String(offer?.url ?? p.url ?? "")));
  if (offer && image) return { ...p, image, offers: offer };
  if (!p.review && !p.aggregateRating) return null;
  const { offers: _o, ...rest } = p;
  void _o;
  return image ? { ...rest, image } : rest;
}

function clean(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(clean);
  if (!value || typeof value !== "object") return value;
  const node = value as Node;

  // ItemList entries keep their position; an invalid Product becomes a plain named, linked entry.
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

// Safe inside <script type="application/ld+json">: the escapes are valid JSON and cannot end the tag.
export function jsonLdHtml(jsonLd: unknown): string {
  return JSON.stringify(cleanSchema(jsonLd))
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}
```

### 3.4 The Amazon image lookup and the ASIN → image map

`src/lib/amazonImages.ts` **[VERBATIM]**:

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

`src/data/amazon-images.json` **[VERBATIM]**, the first entries of 587. It is a flat object mapping an ASIN (or a 10-character ISBN for books) to the `images.primary.large.url` the Creators API returned, a 500×500 JPEG on `m.media-amazon.com`.

```json
{
"0593980441":"https://m.media-amazon.com/images/I/417ShL+L2jL._SL500_.jpg",
"0857836706":"https://m.media-amazon.com/images/I/41ER88gZoPL._SL500_.jpg",
"0939616815":"https://m.media-amazon.com/images/I/319PCk3CPeL._SL500_.jpg",
"096149378X":"https://m.media-amazon.com/images/I/41zBLHSb0IL._SL500_.jpg",
"0998785075":"https://m.media-amazon.com/images/I/51bP8gJHllL._SL500_.jpg",
"1492567701":"https://m.media-amazon.com/images/I/41dl7fjbj0L._SL500_.jpg",
"1928564909":"https://m.media-amazon.com/images/I/41pMLP+dOXL._SL500_.jpg",
"B0000534W0":"https://m.media-amazon.com/images/I/31ZaSJgPhvL._SL500_.jpg"
}
```

**How the map was built.**

1. Every ASIN in the repository was collected.
2. `getItems` was called in batches of 10 with the resource `images.primary.large`.
3. The image URLs were written into the JSON file.

The script (4.5) is `fetchimg.py`.

**Two consumers use the map:**

- `cleanSchema` adds `image` to every Product whose offer URL is an Amazon ASIN link. This is what fixed Search Console's "Missing field 'image'" errors in the Merchant listings report.
- `ProductCard` shows the photo next to the product (6.2).

**FIX: image URLs never refreshed.**

- The problem:
  - The map was fetched once and is never refreshed, so Amazon can retire an image URL without anyone noticing.
  - It is also separate from prices, so the image and the price of one product can come from different API reads.
- **The fix:** fold the image into `products.json`, which the refresh script rewrites on every run (4.6). `amazonImage(asin)` in `src/lib/products.ts` (1.5.3) replaces `amazonImageFor(url)`.

### 3.5 What the template builds (current)

`src/components/EquipmentGuide.tsx` **[VERBATIM]**, the availability map and the page graph:

```ts
const AVAILABILITY: Record<GuideItem["availability"], { label: string; schema: string }> = {
  "in-stock": { label: "In stock", schema: "https://schema.org/InStock" },
  "low-stock": { label: "Low stock", schema: "https://schema.org/LimitedAvailability" },
  "made-to-order": { label: "Made to order, ships after a lead time", schema: "https://schema.org/BackOrder" },
  "back-order": { label: "Back-ordered, ships at a later date", schema: "https://schema.org/BackOrder" },
  direct: { label: "Sold direct by the brand or its dealers", schema: "https://schema.org/InStock" },
};
```

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
```

Five flaws in the template's graph:

- **FIX: "direct" claims stock nobody checked.** A `direct` item maps to `InStock`, although nobody checked the brand's stock. When a direct item has a numeric price, the page asserts availability without evidence. In the rebuild, availability is printed only when it comes from the API, and direct items carry no availability.
- **FIX: wrong hero size in the Article image.** `Article.image` declares 1200×630 for a hero that is 832×1248 (2.2). Use the real 1200×630 `ogImage`.
- **FIX: fixed article section.** `articleSection` is always `"Equipment"`, even on comparison and advent pages. Use the guide's `category`.
- **FIX: odd article ID.** The `@id` is `…/<slug>/#article`, with a slash between the page path and the fragment, which is a different URL from the page. Use `…/<slug>#article`.
- **FIX: unbacked review ratings.**
  - The 5 hand-built pages with `Review` give a numeric `reviewRating` (for example 4.6 out of 5) authored by the Organization.
  - Yet the site's own disclosure says specifications "are taken from each product's listing or the manufacturer, not from our own testing".
  - A rating with no visible rating method or hands-on basis is the kind Google's review-snippet policies reject. **Do not emit `Review` or `AggregateRating` in the new site** unless the page shows a real, first-hand rating method and the same rating visibly. Never copy Amazon's star ratings into markup.

`guideJsonLd()` **[ADAPTED]** builds the graph for the rebuild in its own file, `src/lib/guideSchema.ts`. It is the same four nodes, with the five fixes above applied:

```ts
import { SITE, ORG_ID, abs } from "@/lib/site";
import { breadcrumbLd } from "@/components/Breadcrumbs";
import { plain } from "@/lib/text"; // strips [label](/path) link syntax (5.4)
import type { ResolvedGuide, ResolvedItem } from "@/lib/guide";

const SCHEMA_AVAILABILITY: Partial<Record<ResolvedItem["availability"], string>> = {
  "in-stock": "https://schema.org/InStock",
  "low-stock": "https://schema.org/LimitedAvailability",
  "back-order": "https://schema.org/BackOrder",
  "pre-order": "https://schema.org/PreOrder",
  "out-of-stock": "https://schema.org/OutOfStock",
  // "unknown" and "direct": no availability claim
};

export function guideJsonLd(g: ResolvedGuide) {
  const url = `${SITE.url}/blog/${g.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: g.title,
        description: g.description,
        image: { "@type": "ImageObject", url: abs(g.ogImage), width: 1200, height: 630 },
        author: { "@type": "Organization", "@id": ORG_ID, name: SITE.name, url: SITE.url },
        publisher: {
          "@type": "Organization",
          "@id": ORG_ID,
          name: SITE.name,
          logo: { "@type": "ImageObject", url: abs(SITE.logo.path), width: SITE.logo.width, height: SITE.logo.height },
        },
        datePublished: g.published,
        dateModified: g.dateModified,
        url,
        mainEntityOfPage: url,
        articleSection: g.category,
        inLanguage: SITE.language,
      },
      {
        "@type": "ItemList",
        name: g.title,
        numberOfItems: g.items.length,
        itemListElement: g.items.map((it, i) => ({
          "@type": "ListItem",
          position: i + 1, // equals the visible rank: same array, same order
          item: {
            "@type": "Product",
            name: it.name,
            brand: { "@type": "Brand", name: it.brand },
            description: plain(it.body),
            ...(it.image ? { image: it.image } : {}),
            url: it.url,
            ...(it.price
              ? {
                  offers: {
                    "@type": "Offer",
                    priceCurrency: "USD",
                    price: it.price,
                    url: it.url,
                    ...(SCHEMA_AVAILABILITY[it.availability] ? { availability: SCHEMA_AVAILABILITY[it.availability] } : {}),
                  },
                }
              : {}),
          },
        })),
      },
      breadcrumbLd([
        { name: "Home", path: "" },
        { name: "Blog", path: "/blog" },
        { name: g.breadcrumb, path: `/blog/${g.slug}` },
      ]),
      {
        "@type": "FAQPage",
        mainEntity: g.faqs.map((f) => ({ "@type": "Question", name: plain(f.q), acceptedAnswer: { "@type": "Answer", text: plain(f.a) } })),
      },
    ],
  };
}
```

The template prints it with `jsonLdHtml(guideJsonLd(resolved))`, so the cleaner still validates every Product.

### 3.6 A real served example: the complete markup of a live product roundup

Page: `https://pilatescollectiveclub.com/blog/best-headband-for-lagree`, fetched from **live production** on November 10, 2026. The output was byte-identical to the production build of `73b6e70`. The page prints two blocks, shown here pretty-printed: the site graph from the root layout, then the page graph from the template after `cleanSchema`.

Things to notice:

- Every `Product` has `image` (added by the cleaner from the ASIN map; the template never set it).
- Every `price` is a plain number string (`"16"`, not `"$16.00"`).
- Positions match the visible ranks 01–06.
- The FAQ text is the visible FAQ text.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://pilatescollectiveclub.com/#organization",
      "name": "Pilates Collective Club",
      "url": "https://pilatescollectiveclub.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://pilatescollectiveclub.com/pictures/pcc-logo.png",
        "width": 859,
        "height": 286
      },
      "description": "Curated city guides, expert studio recommendations, and equipment picks for Pilates practitioners worldwide.",
      "sameAs": [
        "https://www.instagram.com/pilatescollectiveclub",
        "https://www.pinterest.com/pilatescollectiveclub"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://pilatescollectiveclub.com/#website",
      "url": "https://pilatescollectiveclub.com",
      "name": "Pilates Collective Club",
      "publisher": {
        "@id": "https://pilatescollectiveclub.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://pilatescollectiveclub.com/blog?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    }
  ]
}
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://pilatescollectiveclub.com/blog/best-headband-for-lagree/#article",
      "headline": "Best Headband for Lagree (2026): 6 Sweatproof, No-Slip Picks",
      "description": "The best sweatproof, no-slip headbands for Lagree: Halo, Sweaty Bands, Nike, Under Armour, Bondi Band and a 6-pack, compared on grip and sweat control.",
      "image": {
        "@type": "ImageObject",
        "url": "https://pilatescollectiveclub.com/pictures/stitch-studio-round-mirror.png",
        "width": 1200,
        "height": 630
      },
      "author": {
        "@type": "Organization",
        "@id": "https://pilatescollectiveclub.com/#organization",
        "name": "Pilates Collective Club",
        "url": "https://pilatescollectiveclub.com"
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://pilatescollectiveclub.com/#organization",
        "name": "Pilates Collective Club",
        "logo": {
          "@type": "ImageObject",
          "url": "https://pilatescollectiveclub.com/pictures/pcc-logo.png"
        }
      },
      "datePublished": "2026-10-20",
      "dateModified": "2026-10-20",
      "url": "https://pilatescollectiveclub.com/blog/best-headband-for-lagree",
      "mainEntityOfPage": "https://pilatescollectiveclub.com/blog/best-headband-for-lagree",
      "articleSection": "Equipment",
      "inLanguage": "en-US"
    },
    {
      "@type": "ItemList",
      "name": "Best Headband for Lagree (2026): 6 Sweatproof, No-Slip Picks",
      "numberOfItems": 6,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Product",
            "name": "Halo Headband II Pullover Sweatband",
            "brand": {
              "@type": "Brand",
              "name": "Halo Headband"
            },
            "description": "The headband for heavy sweaters. Halo's silicone SweatSeal strip channels sweat to the sides instead of into your eyes, which is exactly the problem in a dripping Lagree plank.",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "price": "16.95",
              "availability": "https://schema.org/InStock",
              "url": "https://www.amazon.com/dp/B002L9ZEHW?tag=pilatescollective-20"
            },
            "image": "https://m.media-amazon.com/images/I/310P2iFr2vL._SL500_.jpg"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Product",
            "name": "Sweaty Bands No-Slip Velvet-Lined Headband (5/8\")",
            "brand": {
              "@type": "Brand",
              "name": "Sweaty Bands"
            },
            "description": "A slim headband with a velvet lining that grips without pulling your hair. It keeps flyaways back rather than soaking up lots of sweat, and looks good after class.",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "price": "19.99",
              "availability": "https://schema.org/InStock",
              "url": "https://www.amazon.com/dp/B01FSSEBIU?tag=pilatescollective-20"
            },
            "image": "https://m.media-amazon.com/images/I/41I1-zROJeL._SL500_.jpg"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Product",
            "name": "Nike Dri-FIT Fury Classic Wide Headband",
            "brand": {
              "@type": "Brand",
              "name": "Nike"
            },
            "description": "A wide Dri-FIT headband sold and shipped by Amazon.com. The width covers more of the forehead, so it soaks up more sweat than slim bands.",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "price": "16",
              "availability": "https://schema.org/InStock",
              "url": "https://www.amazon.com/dp/B0DTSWNXC3?tag=pilatescollective-20"
            },
            "image": "https://m.media-amazon.com/images/I/31KfqDbZhtL._SL500_.jpg"
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Product",
            "name": "Under Armour Women's Play Up Headband",
            "brand": {
              "@type": "Brand",
              "name": "Under Armour"
            },
            "description": "An inexpensive band with an exposed elastic interior that grips without pulling hair. Sold by Amazon.com.",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "price": "12",
              "availability": "https://schema.org/InStock",
              "url": "https://www.amazon.com/dp/B08LMSGBHY?tag=pilatescollective-20"
            },
            "image": "https://m.media-amazon.com/images/I/2108DGhIFFL._SL500_.jpg"
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "Product",
            "name": "Bondi Band Tapered Anti-Slip Workout Headband",
            "brand": {
              "@type": "Brand",
              "name": "Bondi Band"
            },
            "description": "A wide, tapered moisture-wicking band made in the USA. The tapered back sits comfortably when you lie on the carriage.",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "price": "9.99",
              "availability": "https://schema.org/InStock",
              "url": "https://www.amazon.com/dp/B00JQXSQ2Q?tag=pilatescollective-20"
            },
            "image": "https://m.media-amazon.com/images/I/51nq+it1jaL._SL500_.jpg"
          }
        },
        {
          "@type": "ListItem",
          "position": 6,
          "item": {
            "@type": "Product",
            "name": "QiShang 6-Pack Sweat Headbands",
            "brand": {
              "@type": "Brand",
              "name": "QiShang"
            },
            "description": "Six bands for under $10, each with two silicone strips inside. A good way to have a clean band for every class. Skip if you have a latex allergy.",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "price": "9.99",
              "availability": "https://schema.org/InStock",
              "url": "https://www.amazon.com/dp/B08HLRSP6B?tag=pilatescollective-20"
            },
            "image": "https://m.media-amazon.com/images/I/51XJceY6wjL._SL500_.jpg"
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://pilatescollectiveclub.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://pilatescollectiveclub.com/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Best Headband for Lagree",
          "item": "https://pilatescollectiveclub.com/blog/best-headband-for-lagree"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the best headband for Lagree?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For heavy sweaters, the Halo Headband II ($16.95 on October 20, 2026), whose silicone SweatSeal channels sweat away from the eyes. For a slim, no-slip band, Sweaty Bands' velvet-lined headband."
          }
        },
        {
          "@type": "Question",
          "name": "Do you need a headband for Lagree?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not always, but Lagree is very sweaty and involves planks and lying on the carriage. A headband keeps sweat out of your eyes and hair off your face."
          }
        },
        {
          "@type": "Question",
          "name": "How do I stop my headband slipping in class?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Choose a band with a velvet lining or silicone strips, and put it on over dry hair before class. Slim bands tend to stay put better than wide, loose ones."
          }
        },
        {
          "@type": "Question",
          "name": "Can men wear these headbands?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The Halo Headband II and the Nike Dri-FIT Fury headband are sold as unisex or for men and women."
          }
        }
      ]
    }
  ]
}
```

**The second sorting flaw, in production.** The live comparison page `/blog/merrithew-spx-max-vs-v2-max` shows "Merrithew SPX Max Reformer" (brand-direct, price "Contact Merrithew or a dealer") as visible item **02**. The schema lists it at position **5**, because the cleaner re-sorted the list. With no numeric price, the cleaner also demoted it to a plain entry, which is the correct behavior for an unpriced item:

```json
{
  "@type": "ListItem",
  "position": 5,
  "name": "Merrithew SPX Max Reformer",
  "url": "https://www.merrithew.com/"
}
```

The corrected `resolveGuide()` sorts the items once for both the page and the schema (1.5.3).

### 3.7 Where every field value comes from

| Node.field | Current source | Rebuild source |
|---|---|---|
| `Organization.name/url/logo/sameAs` | Literals in `layout.tsx` and repeated in every template | `SITE` in `src/lib/site.ts` |
| `WebSite.potentialAction` | Literal pointing at `/blog?q=` | Removed (2.1) |
| `Article.headline` | `title` (same string as `<title>`) | `guide.title` |
| `Article.description` | `description` (same as meta description) | `guide.description` |
| `Article.image` | Hero path with a hard-coded 1200×630 | `guide.ogImage`, a real 1200×630 file |
| `Article.author`, `.publisher` | Literals with Organization `@id` | `SITE`, `ORG_ID` |
| `Article.datePublished` | `datePublished` prop (hand-typed ISO) | `guide.published` |
| `Article.dateModified` | `dateModified` prop, usually the catalog's `*_CHECKED_ISO` constant | `max(guide.updated, changedAt of every Amazon product on the page)` |
| `Article.articleSection` | Literal `"Equipment"` | `guide.category` |
| `ItemList.name` | `title` | `guide.title` |
| `ItemList.numberOfItems` | Count of items in all product blocks | `items.length` |
| `ListItem.position` | Index after the template's per-block sort, then re-sorted by the cleaner | Index in the one resolved list (= visible rank) |
| `Product.name` | Editorial `name`: brand + model as sold | Same |
| `Product.brand.name` | Editorial `brand` | Same |
| `Product.description` | Editorial `body` (the visible card text) | Same |
| `Product.image` | Injected by the cleaner: ASIN → `amazon-images.json` (`images.primary.large.url`) | `products.json[asin].image`, same API field, refreshed each run |
| `Product.url` | Not set | Affiliate URL |
| `Offer.price` | Hand-typed `price` string ("$16.95") copied from API output, normalized by `cleanPrice` | `products.json[asin].price` = `offersV2.listings[0].price.money.amount` |
| `Offer.priceCurrency` | Literal `"USD"` | Literal `"USD"` (amazon.com marketplace only) |
| `Offer.availability` | Hand-set enum mapped by the template (`direct` → InStock) | `offersV2.listings[0].availability.type` mapped in `refresh.py`; omitted for direct and unknown |
| `Offer.url` | The affiliate link (`amz(asin)`) | `amz(asin)` |
| `BreadcrumbList` | Home, Blog, `breadcrumb` prop | `breadcrumbLd()`, same array as the visible trail |
| `FAQPage.mainEntity` | `faqs` prop, the same array rendered as the visible FAQ | `guide.faqs` |

### 3.8 Schema types each page template emits

Current site (city templates excluded):

| Template / page | Script 1 (root layout) | Script 2 (page) |
|---|---|---|
| Every page | Organization, WebSite (+SearchAction) | none |
| `EquipmentGuide` article (24) | same | Article, ItemList → ListItem → Product (Brand, Offer, image), BreadcrumbList, FAQPage |
| `DealsGuide` seasonal article (16) | same | Article, ItemList → Product (Offer: InStock or LimitedAvailability from `lowStock`), BreadcrumbList, FAQPage |
| Hand-built article (237) | same | Article, often WebPage, ItemList → Product (via `productItemList` or inline), BreadcrumbList, FAQPage; 5 add Review and Rating |
| `/blog` index | same | CollectionPage, ItemList → ListItem (url, name) for all 277 posts |
| `/brands` hub [NICHE] | same | CollectionPage, ItemList → ListItem (url, name) |
| Homepage | same | WebPage, ItemList → ListItem (url, name) of featured links |
| `/contact` | same | ContactPage, ContactPoint, and a second Organization copy |
| `/advertise` | same | WebPage, BreadcrumbList |
| `/affiliate-disclosure`, `/privacy`, `/terms` | same | none |

Rebuild:

| Page | Page graph |
|---|---|
| Every page | Root layout: Organization, WebSite (no SearchAction) |
| Article (all of them, one template) | Article, ItemList → Product, BreadcrumbList, FAQPage |
| `/blog` | CollectionPage (`isPartOf` → `#website`), ItemList → ListItem (url, name), generated from `GUIDES` |
| Homepage | WebPage, ItemList → ListItem (url, name) of the featured guides |
| `/contact` | ContactPage that references `ORG_ID`. Do not print a second Organization. |
| `/about`, `/advertise`, legal pages | WebPage + BreadcrumbList (optional) |

The blog index graph **[VERBATIM]** (generate `posts` from `GUIDES` in the rebuild):

```ts
const blogJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://pilatescollectiveclub.com/blog/#webpage",
      "url": "https://pilatescollectiveclub.com/blog",
      "name": "Pilates Journal: Equipment Reviews, Method Guides & Studio Advice",
      "description": "In-depth Pilates guides covering equipment reviews, beginner advice, method comparisons, and studio tips.",
      "isPartOf": { "@id": "https://pilatescollectiveclub.com/#website" },
      "inLanguage": "en-US",
    },
    {
      "@type": "ItemList",
      "name": "Pilates Articles and Equipment Reviews",
      "url": "https://pilatescollectiveclub.com/blog",
      "numberOfItems": posts.length,
      "itemListElement": posts.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "url": `https://pilatescollectiveclub.com${p.href}`,
        "name": p.title,
      })),
    },
  ],
};
```

### 3.9 Non-negotiable rules for replicating the structured data

1. **One data object, two outputs.** The visible page and the JSON-LD are rendered from the same object in the same component. Never hand-write a second copy of names, prices, ranks or FAQs for the markup.
2. **Every JSON-LD block goes through `jsonLdHtml()`.** No `JSON.stringify` in a page. The cleaner is the only reason Product markup stays valid at scale.
3. **A Product is printed only when it can pass:**
   - a positive numeric `price` (plain number, no symbol or commas);
   - `priceCurrency: "USD"`;
   - an `image` that is the real product photo;
   - an `offers.url`.
   - Otherwise it is demoted. Never substitute a stock or lifestyle photo for a missing product image; drop the Product instead.
4. **Prices and availability come from the API,** through `products.json`. No hand-typed price on an Amazon item. Brand-direct items carry a price only when the brand publishes one, and they never carry `availability`.
5. **Schema order = visible order.** `ListItem.position` equals the number printed next to the product. Sort once, upstream.
6. **The visible FAQ is the FAQPage.**
   - Same questions, same answers, same order, rendered from one array.
   - Every article has 4–5 FAQs. Answers state facts from the page (names, prices with the check date) and are 1–3 sentences.
7. **No ratings you cannot show.** No `Review`, `AggregateRating` or `reviewRating` unless the page shows the same rating with a stated, first-hand method. Never copy Amazon star ratings or review counts into markup.
8. **Stable IDs.**
   - `Organization` is `<origin>/#organization`.
   - `WebSite` is `<origin>/#website`.
   - `Article` is `<page-url>#article`.
   - Every page references these IDs, and none prints a second, different Organization.
9. **Dates are honest.** `datePublished` never changes. `dateModified` changes only when visible content changes, and the sitemap's `lastmod` is the same value.
10. **Absolute URLs everywhere in JSON-LD,** from `SITE.url`. No relative paths and no other host.
11. **Escape the output.** The escapes in `jsonLdHtml` stay. A product name containing `</script>` must not break the page.
12. **Validate before publishing.** The gate in section 8 parses every built page's JSON-LD and fails on any Product without price and image, any position mismatch, and any FAQ mismatch.

---

## 4. Amazon affiliate implementation

### 4.1 Link format and the tag constant

**Product link** (every Amazon product on the site). The format is the bare `/dp/` URL plus the tracking tag and nothing else: no `ref=`, no `linkCode=`, no title slug.

```
https://www.amazon.com/dp/<ASIN>?tag=pilatescollective-20
```

- The Creators API returns `detailPageURL` values such as `https://www.amazon.com/dp/B07R61Z2PG?tag=pilatescollective-20&linkCode=osi&th=1&psc=1`. The site rebuilds the short form from the ASIN instead.
- The short form is stable and readable, and the ASIN regex used by the image lookup and the link sorter always matches it.

**Search link** (used only when no single listing qualifies):

```
https://www.amazon.com/s?k=pilates+gym+bag+compact&tag=pilatescollective-20
```

**Brand-direct link** (product not on Amazon): the brand's own product page, untagged.

**Current builder.** It is redefined locally in 28 files. Example from `/blog/best-headband-for-lagree` **[VERBATIM]**:

```ts
const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=pilatescollective-20`;
```

Every Amazon URL in `src/` was checked: all 1,841 occurrences carry the tag, and none is untagged.

**FIX: the tag is copied everywhere.** The tag literal appears in 318 files. Changing it, or adding a second marketplace, would mean editing hundreds of files. In the rebuild:

- the tag exists once (`AMAZON_TAG` in `src/lib/affiliate.ts`, 1.5.3);
- Amazon URLs are built only by `amz()` and `amzSearch()`;
- guides store ASINs, not URLs;
- the validation gate fails if `?tag=` appears anywhere else in `src/` (8).

### 4.2 `rel` attributes

Current rule, applied in `ProductCardView`, `QuickPicks` and `TopPick` **[VERBATIM]** (from `ProductCardView.tsx`):

```ts
const linkRel = /amazon\./i.test(affiliateUrl) ? "noopener noreferrer nofollow sponsored" : "noopener noreferrer nofollow";
```

| Link | `rel` | `target` |
|---|---|---|
| Amazon link (product or search), any component | `noopener noreferrer nofollow sponsored` | `_blank` |
| Brand-direct shopping link | `noopener noreferrer nofollow` | `_blank` |
| "Sources" list in the template (Amazon) | `noopener noreferrer sponsored` | `_blank` |
| "Sources" list (non-Amazon) | `noopener noreferrer` | `_blank` |
| Internal links | none (Next `<Link>`) | same tab |

**FIX: loose Amazon detection and an inconsistent Sources list.**

- `/amazon\./i` matches any URL containing "amazon." (for example a blog called `notamazon.example`).
- The Sources list drops `nofollow` on Amazon links.

In the rebuild every shopping link uses `shopRel(url)` from `src/lib/affiliate.ts`, which checks the host. Sources use `shopRel` when they are Amazon links and plain `noopener noreferrer` otherwise.

### 4.3 Button labels

| Component | Amazon link | Brand-direct link | Override |
|---|---|---|---|
| Product card (`ProductCardView`) | `Shop on Amazon` | `Shop Direct` | `ctaLabel` on the item, for example `Shop Now at Merrithew →` |
| Quick picks box (`QuickPicks`) | `Shop Now →` | `Shop Direct →` | `cta` |
| Top pick box under the H1 (`TopPick`) | `Shop Now →` | `Shop Direct →` | `cta` |
| Upsell box (`UpsellCTA`, hand-built pages) | `View on Amazon →` | none | `ctaLabel` |

Card buttons are full-width black blocks with uppercase, letter-spaced 10px text, turning to the accent color on hover. Quick-pick and top-pick buttons are compact and black.

**Rule:** the product name next to a button always pairs **brand + model** ("Nike Dri-FIT Fury Classic Wide Headband", never "Wide Headband").

### 4.4 Disclosure rendering

Three layers.

**1. At the point of shopping.** `src/components/AffiliateNote.tsx` **[VERBATIM]**:

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

The template places it directly under the Quick Picks box, with this text **[VERBATIM]**:

```tsx
<AffiliateNote className={picks.length > 0 ? "mb-16" : "mb-10 mt-4"}>Some links on this page are affiliate links: we earn a small commission on qualifying purchases at no extra cost to you. Specifications are taken from each product&apos;s listing or the manufacturer, not from our own testing. Prices were checked live on Amazon on the date above and change often.</AffiliateNote>
```

**2. Site-wide.** The footer's last line on every page **[VERBATIM]**:

```
© 2026 Pilates Collective Club. All rights reserved. As an Amazon Associate we earn from qualifying purchases.
```

**3. The disclosure page** (`/affiliate-disclosure`). It contains the Amazon program statement **[VERBATIM]**:

> Pilates Collective Club is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com and its international variants (Amazon.co.uk, Amazon.de, Amazon.fr, etc.).

The page then explains which buttons are affiliate links ("Shop Now →") and which are not ("Shop Direct →", internal links), and states editorial independence.

**FIX: disclosure text too faint, and missing the Amazon sentence on the page.**

- The note is 11px `#c4b8b3` on a near-white background, a contrast ratio of about 2:1. The FTC expects affiliate disclosures to be clear and conspicuous, and WCAG asks for 4.5:1 for body text.
- The template's custom text also drops the Amazon sentence. It is still in the footer, but not next to the links.

In the rebuild:

- use the body text color (at least 4.5:1) at 12–13px;
- always include "As an Amazon Associate we earn from qualifying purchases" in the note itself;
- keep the short honesty lines ("not from our own testing", "prices checked on …") after it.

### 4.5 The offline Creators API helper

**FIX: the API scripts were never committed.** The helper and its batch scripts lived in a temporary session folder, never in the repository, so every price check was re-improvised. Commit them under `scripts/amazon/`. They read credentials only from the environment and print nothing secret.

**Environment variables** (names only; set them in the shell for the single command, never in a file):

| Name | What |
|---|---|
| `AMZ_ID` | Creators API OAuth client ID (`amzn1.application-oa2-client.…`) |
| `AMZ_SECRET` | Creators API OAuth client secret |

Example: `AMZ_ID=… AMZ_SECRET=… python3 scripts/amazon/refresh.py`. Do not write them to `.env`, the repo, Vercel or any document.

`scripts/amazon/creators.py`: the helper as used for this site **[VERBATIM]**, with the tag line marked **[NICHE]**:

```python
# Amazon Creators API helper. Credentials come only from env vars AMZ_ID / AMZ_SECRET.
import json, os, sys, urllib.request, urllib.error, urllib.parse
TAG = "pilatescollective-20"  # [NICHE]
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
RES = ["itemInfo.title", "itemInfo.byLineInfo", "offersV2.listings.price", "offersV2.listings.availability", "offersV2.listings.merchantInfo"]
def call(op, payload, tok):
    return post("https://creatorsapi.amazon/catalog/v1/" + op, json.dumps(payload).encode(),
                {"Authorization": "Bearer " + tok, "Content-Type": "application/json", "x-marketplace": "www.amazon.com"})
if __name__ == "__main__":
    cmd = sys.argv[1]; tok = token()
    if cmd == "raw":
        print(json.dumps(call(sys.argv[2], json.loads(sys.argv[3]), tok), indent=1))
    elif cmd == "get":
        r = call("getItems", {"itemIds": sys.argv[2:], "itemIdType": "ASIN", "partnerTag": TAG, "marketplace": "www.amazon.com", "resources": RES}, tok)
        print(json.dumps(r))
```

**How it is used.**

- **Token:** an OAuth2 client-credentials grant against `https://api.amazon.com/auth/o2/token` with scope `creatorsapi::default`. The bearer token goes in `Authorization`.
- **Operations:**
  - `POST https://creatorsapi.amazon/catalog/v1/getItems`, with up to **10 ASINs per call**;
  - `POST …/searchItems` to find candidates for a new guide.
- **Headers:** `x-marketplace: www.amazon.com`. Every payload carries `partnerTag` and `marketplace`.
- **Pacing:** about 1 call per second (`time.sleep(1.1)` between batches).
- **Commands:**
  - `python3 scripts/amazon/creators.py get B002L9ZEHW B01FSSEBIU` verifies listings.
  - `python3 scripts/amazon/creators.py raw searchItems '{"keywords":"…","searchIndex":"All","partnerTag":"…","marketplace":"www.amazon.com","resources":[…]}'` finds candidates.

A real `getItems` item (the response is `{"itemsResult": {"items": [ … ]}}`, with `errors` listing ASINs it could not return). The `features` text is shortened:

```json
{
  "asin": "B07R61Z2PG",
  "detailPageURL": "https://www.amazon.com/dp/B07R61Z2PG?tag=pilatescollective-20&linkCode=osi&th=1&psc=1",
  "images": { "primary": { "large": { "height": 500, "url": "https://m.media-amazon.com/images/I/31IHMDa93kL._SL500_.jpg", "width": 500 } } },
  "itemInfo": {
    "byLineInfo": { "brand": { "displayValue": "Core Balance", "label": "Brand", "locale": "en_US" } },
    "features": { "displayValues": ["RANGE OF SIZES FOR A PERFECT WORKOUT: …"] },
    "title": { "displayValue": "Core Balance …" }
  },
  "offersV2": {
    "listings": [
      {
        "availability": { "maxOrderQuantity": 9, "message": "In Stock", "minOrderQuantity": 1, "type": "IN_STOCK" },
        "isBuyBoxWinner": true,
        "price": { "money": { "amount": 31.99, "currency": "USD", "displayAmount": "$31.99" } },
        "violatesMAP": false
      }
    ]
  }
}
```

**How each displayed field was pulled:**

- **price** = `offersV2.listings[0].price.money.amount`
- **availability** = `offersV2.listings[0].availability.type` and `.message`
- **brand** = `itemInfo.byLineInfo.brand.displayValue`
- **seller** = `offersV2.listings[0].merchantInfo.name`, when present
- **photo** = `images.primary.large.url`
- **specs** = from `itemInfo.features`, rewritten in plain words, never invented

The image batch script that built `amazon-images.json` **[VERBATIM]**, with the scratch path replaced by `.`:

```python
import json,sys,time
sys.path.insert(0,'.')
import amz
S='.'
asins=open(S+'/asins.txt').read().split()
tok=amz.token(); out={}; errs=[]
for i in range(0,len(asins),10):
    batch=asins[i:i+10]
    r=amz.call("getItems",{"itemIds":batch,"itemIdType":"ASIN","partnerTag":amz.TAG,"marketplace":"www.amazon.com","resources":["images.primary.large","itemInfo.title"]},tok)
    if i==0: print(json.dumps(r)[:1500])
    items=(r.get("itemsResult") or {}).get("items") or []
    for it in items:
        url=((((it.get("images") or {}).get("primary") or {}).get("large")) or {}).get("url")
        if url: out[it["asin"]]={"img":url,"title":((it.get("itemInfo") or {}).get("title") or {}).get("displayValue","")}
    if r.get("errors"): errs+=r["errors"]
    if "_error" in r: errs.append(r); print("ERR",r)
    time.sleep(1.1)
json.dump(out,open(S+'/asin-images.json','w'),indent=0)
json.dump(errs,open(S+'/asin-errors.json','w'),indent=0)
print("found",len(out),"of",len(asins),"errors",len(errs))
```

**Selection rules** used with the API when building a guide. They are editorial, but they are why the Product markup is clean:

- Only list an item the API returns with a live offer, so `getItems` gives a price.
- Prefer listings sold by Amazon.com or the brand's official storefront, and say who sells it.
- Brand + model must match the API title. Never put a well-known brand's name on a third-party listing.
- If no Amazon listing qualifies, a brand-direct link is the second option, and an Amazon search link the third. They are sorted in that order after all ASIN items.

### 4.6 Price freshness

**Current mechanism.**

- **One "checked" date per product family.** Each catalog or seasonal module exports a human date and an ISO date, set by hand after a re-check:

```ts
export const PRICES_CHECKED = "October 20, 2026";
export const PRICES_CHECKED_ISO = "2026-10-20";
```

Equivalents: `GIFTS_CHECKED`, `ADVENT_CHECKED`, `BF_PRICES_CHECKED` and `SEASONAL_PRICES_CHECKED`. Standalone pages use a local `CHECKED`.

- **The page shows the date.** The hero line reads `Prices checked October 20, 2026 · 7 min read` (from `updatedLabel`). The disclosure note says "Prices were checked live on Amazon on the date above and change often". FAQ answers that quote a price attach the date, for example "($16.95 on October 20, 2026)".
- **`dateModified` is set to the same ISO date.**
- **Re-checks are manual.** The operator runs `getItems` over the ASINs, edits the changed prices by hand, and bumps the constant.

**FIX: freshness depends on someone remembering.**

- Prices age silently.
- One constant covers dozens of pages, whether or not their prices changed, so `dateModified` jumps on pages where nothing changed.
- Out-of-stock listings stay on pages until someone happens to look.

Also check the current Amazon Associates Program Policies and the Creators API terms on how long product data may be cached and how prices may be displayed before launch. Design for a **daily** automated refresh, so a stricter rule costs nothing.

`scripts/amazon/refresh.py` **[NEW]** is the only writer of `src/data/products.json`.

- It collects every ASIN referenced in `src/content/`.
- It reads them in batches of 10.
- It records `checkedAt` on every product, and `changedAt` only when the price or availability actually changed.
- It reports what changed and which ASINs failed.
- It exits non-zero when any referenced ASIN has no offer or is out of stock, so those products get replaced before the next publish.

```python
#!/usr/bin/env python3
"""Refresh src/data/products.json from the Amazon Creators API.

Usage:
  AMZ_ID=… AMZ_SECRET=… python3 scripts/amazon/refresh.py            # refresh every ASIN used in src/content
  AMZ_ID=… AMZ_SECRET=… python3 scripts/amazon/refresh.py --add B0…  # also add new ASINs (before using them in a guide)
"""
import datetime, json, os, re, sys, time
sys.path.insert(0, os.path.dirname(__file__))
import creators  # scripts/amazon/creators.py

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
OUT = os.path.join(ROOT, "src", "data", "products.json")
CONTENT = os.path.join(ROOT, "src", "content")
ASIN_RE = re.compile(r'asin:\s*"([A-Z0-9]{10})"')
RES = ["itemInfo.title", "itemInfo.byLineInfo", "images.primary.large",
       "offersV2.listings.price", "offersV2.listings.availability", "offersV2.listings.merchantInfo"]

# Creators API availability.type -> site enum. IN_STOCK is confirmed in real responses;
# confirm the other type names against the Creators API reference and extend this map.
AVAIL = {"IN_STOCK": "in-stock", "IN_STOCK_SCARCE": "low-stock", "LIMITED": "low-stock",
         "BACK_ORDER": "back-order", "BACKORDER": "back-order", "PRE_ORDER": "pre-order", "PREORDER": "pre-order",
         "OUT_OF_STOCK": "out-of-stock", "UNAVAILABLE": "out-of-stock"}

def used_asins():
    found = set()
    for dirpath, _, files in os.walk(CONTENT):
        for f in files:
            if f.endswith(".ts"):
                found |= set(ASIN_RE.findall(open(os.path.join(dirpath, f), encoding="utf-8").read()))
    return found

def parse(item, today):
    listing = ((item.get("offersV2") or {}).get("listings") or [{}])[0]
    money = ((listing.get("price") or {}).get("money") or {})
    avail = listing.get("availability") or {}
    info = item.get("itemInfo") or {}
    price = money.get("amount") if money.get("currency") == "USD" else None
    status = AVAIL.get(avail.get("type") or "", "unknown") if listing else "out-of-stock"
    msg = avail.get("message") or ""
    if status == "in-stock" and re.search(r"usually ships within|weeks|months", msg, re.I):
        status = "back-order"  # made to order: Amazon shows a lead time
    return {
        "asin": item["asin"],
        "title": (info.get("title") or {}).get("displayValue", ""),
        "price": price,
        "availability": status,
        **({"availabilityMessage": msg} if msg and status != "in-stock" else {}),
        **({"image": u} if (u := (((item.get("images") or {}).get("primary") or {}).get("large") or {}).get("url")) else {}),
        **({"merchant": m} if (m := (listing.get("merchantInfo") or {}).get("name")) else {}),
        "checkedAt": today,
    }

def main():
    today = datetime.date.today().isoformat()
    old = json.load(open(OUT)) if os.path.exists(OUT) else {}
    extra = sys.argv[sys.argv.index("--add") + 1:] if "--add" in sys.argv else []
    asins = sorted(used_asins() | set(extra))
    tok = creators.token()
    new, failed = {}, []
    for i in range(0, len(asins), 10):
        batch = asins[i:i + 10]
        r = creators.call("getItems", {"itemIds": batch, "itemIdType": "ASIN", "partnerTag": creators.TAG,
                                       "marketplace": "www.amazon.com", "resources": RES}, tok)
        if "_error" in r:
            sys.exit(f"API error {r['_error']}: {r['_body'][:300]}")
        for item in (r.get("itemsResult") or {}).get("items") or []:
            p = parse(item, today)
            prev = old.get(p["asin"], {})
            same = prev.get("price") == p["price"] and prev.get("availability") == p["availability"]
            p["changedAt"] = prev.get("changedAt", today) if same else today
            if not same and prev:
                print(f'{p["asin"]}: {prev.get("price")} {prev.get("availability")} -> {p["price"]} {p["availability"]}')
            new[p["asin"]] = p
        failed += [e.get("message", str(e)) for e in r.get("errors") or []]
        time.sleep(1.1)
    for asin in asins:
        if asin not in new and asin in old:
            new[asin] = {**old[asin], "price": None, "availability": "out-of-stock", "checkedAt": today, "changedAt": today}
    json.dump(dict(sorted(new.items())), open(OUT, "w"), indent=1, ensure_ascii=False)
    bad = [a for a, p in new.items() if a in used_asins() and (p["price"] is None or p["availability"] == "out-of-stock")]
    print(f"{len(new)} products written; {len(failed)} API errors; {len(bad)} unusable: {' '.join(bad)}")
    for f in failed:
        print("  error:", f)
    sys.exit(1 if bad else 0)

if __name__ == "__main__":
    main()
```

**Freshness loop in the rebuild.**

1. Run `refresh.py` on a schedule (daily is the target): a Claude Code scheduled task or the operator's machine, with the two environment variables set for that command only.
2. If prices or availability changed, commit `src/data/products.json`. Only guides containing a changed product get a new `dateModified`, and the sitemap follows automatically.
3. If the script exits non-zero, replace or remove the unusable products before the next publish.
4. On each page, "Prices checked {date}" comes from the newest `checkedAt` of that page's products (`pricesChecked` in `resolveGuide`), not from a hand-set constant.

---

## 5. Article anatomy

Both example articles below are real, live pages built on the current template (`EquipmentGuide`), so their source shows the whole data contract. Section 5.3 gives the rendered section order, 5.4 the corrected template that renders them in the rebuild, and 5.5–5.8 the conventions.

### 5.1 "Best X" roundup: `/blog/best-headband-for-lagree`

**What it is:** six products, all Amazon ASIN links, one comparison table, one product block, one "how to choose" card block and four FAQs. **[NICHE content]**

Complete source, `src/app/blog/best-headband-for-lagree/page.tsx` **[VERBATIM]**:

```tsx
import type { Metadata } from "next";
import EquipmentGuide, { type EquipmentGuideProps, type GuideItem } from "@/components/EquipmentGuide";

const SLUG = "best-headband-for-lagree";
const URL = `https://pilatescollectiveclub.com/blog/${SLUG}`;
const HERO = "/pictures/stitch-studio-round-mirror.png";
const CHECKED = "October 20, 2026";
const CHECKED_ISO = "2026-10-20";
const TITLE = "Best Headband for Lagree (2026): 6 Sweatproof, No-Slip Picks";
const DESCRIPTION = "The best sweatproof, no-slip headbands for Lagree: Halo, Sweaty Bands, Nike, Under Armour, Bondi Band and a 6-pack, compared on grip and sweat control.";

const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=pilatescollective-20`;

const ITEMS: Record<string, Omit<GuideItem, "badge">> = {
  halo: {
    id: "halo-headband-ii", name: "Halo Headband II Pullover Sweatband", brand: "Halo Headband", price: "$16.95", url: amz("B002L9ZEHW"),
    availability: "in-stock", soldBy: "Halo Headband",
    specs: ["Patented silicone SweatSeal channels sweat away from the eyes", "Dryline fabric: 63% nylon, 23% polyester, 14% Lycra", "Silver ions to reduce odor", "Non-slip grip", "Pullover; men or women"],
    body: "The headband for heavy sweaters. Halo's silicone SweatSeal strip channels sweat to the sides instead of into your eyes, which is exactly the problem in a dripping Lagree plank.",
  },
  sweatyBands: {
    id: "sweaty-bands-velvet-lined", name: "Sweaty Bands No-Slip Velvet-Lined Headband (5/8\")", brand: "Sweaty Bands", price: "$19.99", url: amz("B01FSSEBIU"),
    availability: "in-stock", soldBy: "Sweaty Bands",
    specs: ["Velvet lining for non-slip grip", "Stretchy elastic", "Sweat-wicking fabric", "5/8\" wide", "Hand wash, drip dry"],
    body: "A slim headband with a velvet lining that grips without pulling your hair. It keeps flyaways back rather than soaking up lots of sweat, and looks good after class.",
  },
  nike: {
    id: "nike-dri-fit-fury-wide-headband", name: "Nike Dri-FIT Fury Classic Wide Headband", brand: "Nike", price: "$16.00", url: amz("B0DTSWNXC3"),
    availability: "in-stock", soldBy: "Amazon.com",
    specs: ["Dri-FIT fabric", "Breathable", "Wide", "Unisex"],
    body: "A wide Dri-FIT headband sold and shipped by Amazon.com. The width covers more of the forehead, so it soaks up more sweat than slim bands.",
  },
  ua: {
    id: "under-armour-play-up-headband", name: "Under Armour Women's Play Up Headband", brand: "Under Armour", price: "$12.00", url: amz("B08LMSGBHY"),
    availability: "in-stock", soldBy: "Amazon.com",
    specs: ["Breathable, stretchy fabric", "Anti-odor technology", "Exposed spandex elastic interior for grip", "One size"],
    body: "An inexpensive band with an exposed elastic interior that grips without pulling hair. Sold by Amazon.com.",
  },
  bondi: {
    id: "bondi-band-tapered", name: "Bondi Band Tapered Anti-Slip Workout Headband", brand: "Bondi Band", price: "$9.99", url: amz("B00JQXSQ2Q"),
    availability: "in-stock", soldBy: "Liangt Boss",
    specs: ["Moisture-wicking", "Non-slip design, per the listing", "Tapered end", "Made in USA", "One size"],
    body: "A wide, tapered moisture-wicking band made in the USA. The tapered back sits comfortably when you lie on the carriage.",
  },
  qishang: {
    id: "qishang-6-pack-headbands", name: "QiShang 6-Pack Sweat Headbands", brand: "QiShang", price: "$9.99", url: amz("B08HLRSP6B"),
    availability: "in-stock", soldBy: "Qishang Trading",
    specs: ["6 headbands", "Nylon and spandex", "Two silicone non-slip strips inside", "Contains a small amount of latex, per the listing"],
    body: "Six bands for under $10, each with two silicone strips inside. A good way to have a clean band for every class. Skip if you have a latex allergy.",
  },
};

const it = (key: string, badge: string, pros: string[], cons: string[]): GuideItem => ({ ...ITEMS[key], badge, pros, cons });

const GUIDE: EquipmentGuideProps = {
  slug: SLUG,
  title: TITLE,
  description: DESCRIPTION,
  breadcrumb: "Best Headband for Lagree",
  eyebrow: "Lagree",
  eyebrowAccent: "Accessories",
  h1: "The Best Headband for Lagree",
  h1Accent: "6 Sweatproof, No-Slip Picks (2026)",
  readTime: "7 min read",
  updatedLabel: `Prices checked ${CHECKED}`,
  datePublished: CHECKED_ISO,
  dateModified: CHECKED_ISO,
  heroImage: HERO,
  heroAlt: "A round mirror in a boutique studio",
  heroCaption: "Sweat control · No-slip grip · Flat at the back",
  intro: [
    "A Lagree class is slow, hard and very sweaty. Sweat in your eyes in the middle of a plank, or a headband that slides off when you lie back on the carriage, is the last thing you need.",
    "We compared six headbands on Amazon on the two things that matter in Lagree: sweat control and grip. Prices and stock were checked today.",
  ],
  quickPicks: [
    { label: "Best for heavy sweat", itemId: "halo-headband-ii" },
    { label: "Best no-slip slim band", itemId: "sweaty-bands-velvet-lined" },
    { label: "Best wide band", itemId: "nike-dri-fit-fury-wide-headband" },
    { label: "Best budget", itemId: "under-armour-play-up-headband" },
    { label: "Best multipack", itemId: "qishang-6-pack-headbands" },
  ],
  blocks: [
    {
      kind: "table",
      eyebrow: "At a glance",
      heading: "The six headbands compared",
      columns: ["Headband", "Price", "Best for", "Grip"],
      rows: [
        ["Halo Headband II", "$16.95", "Heavy sweat", "Non-slip grip + SweatSeal"],
        ["Sweaty Bands 5/8\"", "$19.99", "Flyaways, style", "Velvet lining"],
        ["Nike Dri-FIT Fury Wide", "$16.00", "Sweat absorption", "Elastic"],
        ["Under Armour Play Up", "$12.00", "Budget", "Exposed elastic interior"],
        ["Bondi Band Tapered", "$9.99", "Lying on the carriage", "Non-slip design"],
        ["QiShang 6-Pack", "$9.99", "A clean band every class", "Silicone strips"],
      ],
      note: `Amazon prices checked on ${CHECKED}.`,
    },
    {
      kind: "products",
      id: "headbands",
      eyebrow: "Our picks",
      heading: "The best headbands for Lagree",
      items: [
        it("halo", "Best for Heavy Sweat", ["SweatSeal keeps sweat out of eyes", "Anti-odor fabric"], ["Pullover, sporty look"]),
        it("sweatyBands", "Best No-Slip Slim Band", ["Velvet grip", "Looks good after class"], ["Slim: absorbs less sweat", "Hand wash only"]),
        it("nike", "Best Wide Band", ["Covers more forehead", "Sold by Amazon.com"], ["Simple elastic grip"]),
        it("ua", "Best Budget", ["Under $11", "Sold by Amazon.com"], ["Thinner than the wide bands"]),
        it("bondi", "Best for Lying Back", ["Tapered back", "Made in USA"], ["Third-party seller"]),
        it("qishang", "Best Multipack", ["Six bands", "Silicone strips"], ["Contains latex"]),
      ],
    },
    {
      kind: "cards",
      eyebrow: "How to choose",
      heading: "What matters in a Lagree headband",
      cards: [
        { h: "Sweat control", b: "Wide bands absorb more. A silicone sweat channel like Halo's redirects sweat away from the eyes." },
        { h: "Grip", b: "Velvet linings and silicone strips stop the band sliding when you lie back or move between front and back of the machine." },
        { h: "A flat back", b: "Knots and bows press into your head on the carriage. Choose a flat or tapered back." },
        { h: "Easy care", b: "You will wash it after every class. Check the care label, and consider a multipack." },
      ],
    },
  ],
  faqs: [
    { q: "What is the best headband for Lagree?", a: `For heavy sweaters, the Halo Headband II ($16.95 on ${CHECKED}), whose silicone SweatSeal channels sweat away from the eyes. For a slim, no-slip band, Sweaty Bands' velvet-lined headband.` },
    { q: "Do you need a headband for Lagree?", a: "Not always, but Lagree is very sweaty and involves planks and lying on the carriage. A headband keeps sweat out of your eyes and hair off your face." },
    { q: "How do I stop my headband slipping in class?", a: "Choose a band with a velvet lining or silicone strips, and put it on over dry hair before class. Slim bands tend to stay put better than wide, loose ones." },
    { q: "Can men wear these headbands?", a: "Yes. The Halo Headband II and the Nike Dri-FIT Fury headband are sold as unisex or for men and women." },
  ],
  related: [
    { title: "Best Sweat Towel for Lagree", excerpt: "Towels for the sweatiest class in fitness.", href: "/blog/best-sweat-towel-for-lagree", imageUrl: "/pictures/stitch-studio-bench-towels.png", category: "Lagree", readTime: "7 min read" },
    { title: "Best Lagree Workout Sets", excerpt: "Matching outfits for class.", href: "/blog/best-lagree-workout-sets", imageUrl: "/pictures/stitch-retail-activewear.png", category: "Lagree", readTime: "8 min read" },
    { title: "Best Water Bottle for Lagree", excerpt: "Bottles for sweaty classes.", href: "/blog/best-water-bottle-for-lagree", imageUrl: "/pictures/stitch-water-towel-bench.png", category: "Lagree", readTime: "7 min read" },
    { title: "What to Wear to Lagree", excerpt: "The complete Lagree outfit guide.", href: "/blog/what-to-wear-to-lagree", imageUrl: "/pictures/stitch-studio-changing-area.png", category: "Lagree", readTime: "8 min read" },
  ],
  ctaTitle: "Find a Lagree studio near you",
  ctaSubtitle: "Use our city guides to find Lagree and boutique Pilates studios worldwide.",
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["best headband for lagree", "lagree headband", "sweatproof headband for lagree", "non slip workout headband", "halo headband lagree", "sweaty bands lagree", "best sweatband for lagree", "headband that doesn't slip"],
  openGraph: { title: TITLE, description: DESCRIPTION, type: "article", url: URL, images: [{ url: `https://pilatescollectiveclub.com${HERO}`, width: 1200, height: 630, alt: "A round mirror in a studio" }] },
  twitter: { card: "summary_large_image", title: "Best Headband for Lagree (2026)", description: DESCRIPTION, images: [`https://pilatescollectiveclub.com${HERO}`] },
  alternates: { canonical: URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

export default function Page() {
  return <EquipmentGuide {...GUIDE} />;
}
```

**What to copy from it:**

- **Constants first:** `SLUG`, `URL`, `HERO`, `CHECKED` and `CHECKED_ISO`, `TITLE`, `DESCRIPTION`. Metadata and the guide read the same constants.
- **Items** are defined once in a record (`ITEMS`) with the listing facts. `it(key, badge, pros, cons)` adds the page's editorial verdict. Quick picks refer to items by `id`.
- **Block order** for a roundup: comparison table, then products, then a "How to choose" card block.

**FIX: three content flaws in this page.**

- **Table prices typed twice.** The "At a glance" table repeats every price by hand, so it can disagree with the cards after a price change. In the rebuild, use the `specTable` block (5.4), which reads `priceLabel` and other fields from the resolved items.
- **A pro that contradicts the price.** The Under Armour item's pro says "Under $11" while its price is $12.00. In the rebuild, `assertNoTypedPrices` (1.5.3) makes a typed price in pros, cons or specs a build error.
- **An unrelated hero photo.** The hero is a mirror (alt "A round mirror in a boutique studio") on a headband guide. It is not wrong, but it is a missed chance: a hero that shows the product category helps image search and the social card. Rule: the hero shows the category in use, and its alt text describes what is in the photo.

### 5.2 Head-to-head comparison: `/blog/merrithew-spx-max-vs-v2-max`

**What it is:**

- two product families compared;
- items from the shared catalog (`item(key, overrides)`);
- the comparison blocks in this order: short-answer callout, spec table, "what the differences mean" cards, then one product block per side plus an accessories block.

**[NICHE content]**

Complete source, `src/app/blog/merrithew-spx-max-vs-v2-max/page.tsx` **[VERBATIM]**:

```tsx
import type { Metadata } from "next";
import EquipmentGuide, { type EquipmentGuideProps } from "@/components/EquipmentGuide";
import { item, PRICES_CHECKED, PRICES_CHECKED_ISO } from "@/lib/reformerCatalog";

const SLUG = "merrithew-spx-max-vs-v2-max";
const URL = `https://pilatescollectiveclub.com/blog/${SLUG}`;
const HERO = "/pictures/stitch-reformer-spring-detail.png";
const TITLE = "Merrithew SPX Max vs V2 Max (2026): Which STOTT Reformer?";
const DESCRIPTION = "Merrithew SPX Max vs V2 Max: carriage width (22\" vs 24\"), frame height, springs, Vertical Frame and price, plus the At Home SPX and Rehab V2 Max Plus.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["merrithew spx max vs v2 max", "spx max vs v2 max", "stott pilates spx max", "merrithew v2 max plus", "spx max reformer review", "v2 max reformer review", "stott reformer comparison", "merrithew at home spx", "rehab v2 max plus"],
  openGraph: { title: TITLE, description: DESCRIPTION, type: "article", url: URL, images: [{ url: `https://pilatescollectiveclub.com${HERO}`, width: 1200, height: 630, alt: "Reformer springs close-up" }] },
  twitter: { card: "summary_large_image", title: "Merrithew SPX Max vs V2 Max (2026)", description: DESCRIPTION, images: [`https://pilatescollectiveclub.com${HERO}`] },
  alternates: { canonical: URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const GUIDE: EquipmentGuideProps = {
  slug: SLUG,
  title: TITLE,
  description: DESCRIPTION,
  breadcrumb: "Merrithew SPX Max vs V2 Max",
  eyebrow: "Comparison",
  eyebrowAccent: "Merrithew · STOTT PILATES",
  h1: "Merrithew SPX Max vs V2 Max",
  h1Accent: "(2026): Which STOTT Reformer?",
  readTime: "11 min read",
  updatedLabel: `Prices checked ${PRICES_CHECKED}`,
  datePublished: "2026-10-12",
  dateModified: PRICES_CHECKED_ISO,
  heroImage: HERO,
  heroAlt: "Close-up of reformer springs",
  heroCaption: "SPX Max · V2 Max · At Home SPX · Rehab V2 Max Plus",
  intro: [
    "Merrithew, the company behind STOTT PILATES, makes two reformer families that buyers most often weigh against each other: the compact SPX Max and the larger, higher V2 Max. Merrithew's own material describes the SPX as built lower to the ground and narrower than the V2 Max, and positions the V2 Max for boutique studios, clubs and dedicated Pilates spaces.",
    "Below we compare the two on the specifications Merrithew and its dealers publish, and show the versions you can buy on Amazon today: the At Home SPX package and the Rehab V2 Max Plus.",
  ],
  quickPicks: [
    { label: "Best for most homes", itemId: "merrithew-at-home-spx" },
    { label: "Compact studio machine", itemId: "merrithew-spx-max" },
    { label: "Best for clinics and rehab", itemId: "merrithew-rehab-v2-max-plus" },
  ],
  blocks: [
    {
      kind: "callout",
      eyebrow: "The short answer",
      heading: "SPX Max or V2 Max?",
      body: [
        "Choose the SPX family for a home, a small studio or a room you share. It is narrower, lower and lighter, and Merrithew sells it as a home package on Amazon.",
        "Choose the V2 Max family for a dedicated studio or clinic. Its wider 24-inch carriage and higher frame make it easier to get on and off, and the Rehab V2 Max Plus adds a Vertical Frame for tower-style work.",
      ],
    },
    {
      kind: "table",
      eyebrow: "Head to head",
      heading: "SPX Max vs V2 Max Plus: the specs",
      intro: "SPX Max figures are from Merrithew dealer listings; V2 Max Plus figures combine a dealer listing with the Amazon listing for the Rehab V2 Max Plus. Confirm with Merrithew before you buy.",
      columns: ["Spec", "SPX Max", "V2 Max Plus"],
      rows: [
        ["Carriage width", "22\"", "24\""],
        ["Frame width", "About 26.5\"", "About 30\""],
        ["Frame length", "About 97\"", "About 97\""],
        ["Height from floor", "About 9\" (carriage)", "About 16\""],
        ["Springs", "3 × 100%, 1 × 50%, 1 × 25%", "5 high-precision springs"],
        ["Vertical Frame", "Optional", "Included on the Plus"],
        ["Weight", "About 128 lb", "224 lb (Rehab V2 Max Plus, Amazon)"],
        ["Price", "Dealer quote", "$8,199 on Amazon (Rehab V2 Max Plus)"],
      ],
      note: "Merrithew's own jumpboard listing confirms the carriage split: the 22\" jumpboard fits SPX-model reformers, the 24\" fits V2 Max, V2 Max Plus, Rehab and Rack & Roll reformers.",
    },
    {
      kind: "cards",
      eyebrow: "What the differences mean",
      heading: "How the two feel in practice",
      cards: [
        { h: "Carriage width", b: "Two inches matters most for larger or taller practitioners and for side-lying work. The V2 Max's 24-inch carriage gives more room; the SPX's 22-inch carriage keeps the whole machine narrower." },
        { h: "Frame height", b: "A higher frame (about 16 inches on the V2 Max Plus versus about 9 on the SPX) makes it easier to get on and off, which is why clinics and older clients often prefer it." },
        { h: "Footprint", b: "Both are about 97 inches long. The SPX is roughly 3.5 inches narrower and far lighter, so it is easier to move and to fit beside a bed or sofa." },
        { h: "Vertical Frame", b: "The V2 Max Plus includes a Vertical Frame for tower-style exercises. On the SPX Max it is an option, and a mat converter turns a reformer with a Vertical Frame into a virtual Cadillac." },
        { h: "Accessories", b: "Accessories are sized to the carriage. Merrithew lists 22-inch versions for SPX (jumpboard, mat converter, Cardio-Tramp) and 24-inch versions for V2 Max." },
        { h: "Price", b: "The SPX is the lower-cost family. On Amazon, the At Home SPX package is $3,349; the Rehab V2 Max Plus is $8,199." },
      ],
    },
    {
      kind: "products",
      id: "spx",
      eyebrow: "The SPX family",
      heading: "SPX: the compact choice",
      intro: "Amazon carries the At Home SPX package, sold by Amazon.com. The SPX Max itself is sold through Merrithew and its dealers.",
      items: [
        item("spxHome", {
          badge: "Best for Most Homes",
          pros: ["Box, roll-up pole, platform extender and straps included", "Sold and shipped by Amazon.com, in stock", "Aluminum rails, 115 lb"],
          cons: ["Lower frame than the V2 Max", "22\" carriage is narrower"],
        }),
        item("spxMaxDirect", {
          badge: "Compact Studio Machine",
          pros: ["Merrithew's compact studio reformer", "350 lb user capacity (dealer listings)", "Vertical Frame and mat converter available"],
          cons: ["Not sold on Amazon", "Dealer pricing varies by bundle"],
        }),
      ],
    },
    {
      kind: "products",
      id: "v2-max",
      eyebrow: "The V2 Max family",
      heading: "V2 Max: the studio and clinic choice",
      items: [
        item("v2MaxPlus", {
          badge: "Best for Clinics and Rehab",
          pros: ["Raised frame for easier transfers", "Vertical Frame for tower-style work", "24\" carriage"],
          cons: ["$8,199 and 224 lb", "Made to order", "Needs ceiling height for the Vertical Frame (dealer listings cite 84\" minimum)"],
        }),
      ],
    },
    {
      kind: "products",
      id: "spx-accessories",
      eyebrow: "SPX accessories",
      heading: "Accessories sized for the SPX carriage",
      items: [
        item("spxJumpboard", { badge: "Jumpboard" }),
        item("spxMatConverter", { badge: "Mat Converter" }),
      ],
    },
  ],
  faqs: [
    { q: "What is the difference between the Merrithew SPX Max and V2 Max?", a: "The SPX Max is the compact family: a 22-inch carriage, a frame about 26.5 inches wide and about 9 inches off the floor (dealer listings). The V2 Max is larger: a 24-inch carriage, a frame about 30 inches wide and about 16 inches high on the V2 Max Plus. Merrithew positions the V2 Max for dedicated studios and clubs." },
    { q: "Is the SPX Max good for home use?", a: "Yes. It is the narrower, lighter, lower family, and Merrithew sells the SPX as an At Home package on Amazon ($3,349, sold by Amazon.com) with a box, roll-up pole, platform extender and straps." },
    { q: "Is the V2 Max Plus worth the extra money?", a: "For a clinic, a studio, or a user who finds a low reformer hard to get on and off, often yes: the higher frame and included Vertical Frame are real advantages. For most homes, the SPX covers the same core repertoire for far less." },
    { q: "Can I buy the SPX Max on Amazon?", a: "Not the SPX Max itself. Amazon carries the At Home SPX Reformer Package and SPX-sized accessories. Buy the SPX Max from Merrithew or an authorized dealer." },
    { q: "Do SPX and V2 Max accessories interchange?", a: "Not always. Merrithew's jumpboard listing gives a 22-inch version for SPX carriages and a 24-inch version for V2 Max, V2 Max Plus, Rehab and Rack & Roll reformers. Match accessories to the carriage width." },
  ],
  related: [
    { title: "Merrithew V2 Max Review", excerpt: "The Rehab V2 Max Plus reviewed in detail.", href: "/blog/merrithew-v2-max-review", imageUrl: "/pictures/stitch-reformer-row-studio.png", category: "Review", readTime: "10 min read" },
    { title: "Merrithew SPX Max Review", excerpt: "The compact STOTT reformer, reviewed.", href: "/blog/merrithew-spx-max-review", imageUrl: "/pictures/stitch-reformer-morning-light.png", category: "Review", readTime: "10 min read" },
    { title: "Best Pilates Reformer Under $5,000", excerpt: "Studio machines from Balanced Body, Merrithew and Align.", href: "/blog/best-pilates-reformer-under-5000", imageUrl: "/pictures/stitch-reformer-row-studio.png", category: "Equipment", readTime: "15 min read" },
    { title: "Balanced Body vs Merrithew", excerpt: "The two biggest reformer brands compared.", href: "/blog/balanced-body-vs-merrithew", imageUrl: "/pictures/stitch-reformers-aerial-row.png", category: "Comparison", readTime: "12 min read" },
  ],
};

export default function Page() {
  return <EquipmentGuide {...GUIDE} />;
}
```

**What to copy from it:**

- **The answer comes first.** A `callout` titled "The short answer" says which to choose, for whom, in two short paragraphs, before any table.
- **The spec table** has `Spec | A | B` columns, and every figure is sourced in the table `intro` ("from Merrithew dealer listings…") and `note`.
- **"What the differences mean" cards** translate each spec row into a buying consequence, one card per row that matters.
- **Products are grouped per side,** one `products` block each, so readers can buy either side. Accessories follow last.
- **The FAQ's first question** is the head term: "What is the difference between A and B?"
- **Dates:** `datePublished` is fixed (`"2026-10-12"`), and `dateModified` follows the catalog check date.

**FIX: two flaws on this page.**

- **Visible rank differs from schema position.** The brand-direct SPX Max (visible **02**) is at schema position **5**. Corrected by the single sort in `resolveGuide` (1.5.3, 3.6).
- **Prices typed into copy.** The cons "$8,199 and 224 lb" and the cards text "$3,349 … $8,199" type prices by hand. In the rebuild they become `{price:B002ABYKFI}` in card text, and are removed from cons.

### 5.3 Rendered section order (both page types)

As served, top to bottom:

1. **Header** (fixed, 96px desktop, 60px mobile).
2. **Hero text block**, `max-w-3xl`, on the page background:
   1. Eyebrow row: `eyebrow · eyebrowAccent` (for example "Lagree · Accessories").
   2. **H1**: the main line, a line break, then the accent line in the accent color.
   3. Meta line: `Prices checked October 20, 2026 · 7 min read`.
   4. **Top pick box**: the first quick pick that is an Amazon ASIN link, with name, price, label and a `Shop Now →` button. It puts the first affiliate link on the first mobile screen.
   5. Short divider.
   6. **Intro**: 2 paragraphs. The first is larger and lighter.
3. **Hero image**: `max-w-5xl`, 420px tall (220px on mobile), rounded, slightly darkened, with an optional caption overlay. No product photos here.
4. **Content column** (`max-w-3xl`):
   1. **Quick Picks: At a Glance**: up to 5 numbered rows, each with name, label, price and `Shop Now →`.
   2. **Affiliate note** (4.4).
   3. **Blocks in data order.** Each block has an eyebrow, an H2 and an optional intro. A `products` block renders ranked product cards (5.6).
   4. **Frequently asked questions**: H2, then one card per question (H3 question, answer text).
   5. **Sources** (optional): an H2 and a list of outbound links.
   6. **Further reading**: an H2 and four article cards.
5. **CTA band** (city CTA: removed in the rebuild, 6.7).
6. **Footer**.

**Roundup block order:** table ("At a glance") → products ("Our picks") → cards ("How to choose") → optional steps or prose.

**Comparison block order:** callout ("The short answer") → table ("Head to head") → cards ("What the differences mean") → products per side → products (accessories).

### 5.4 The corrected template

`src/components/Guide.tsx` **[ADAPTED]** from `EquipmentGuide.tsx`. It keeps the same layout and section order, with these changes:

- reads a `Guide` and resolves it;
- a visible breadcrumb (2.8);
- one list for ranks and schema (3.6);
- `specTable` derived from items;
- inline internal links through `Rich`;
- `data-*` attributes the validation gate reads (8);
- no hard-coded hub sentence, no city CTA, no fake card date;
- colors from CSS variables (7.1);
- throws on a broken quick-pick or related slug instead of silently dropping it.

```tsx
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AffiliateNote from "@/components/AffiliateNote";
import ArticleCard from "@/components/ArticleCard";
import Breadcrumbs, { type Crumb } from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import QuickPicks from "@/components/QuickPicks";
import TopPick from "@/components/TopPick";
import Rich from "@/components/Rich";
import { jsonLdHtml } from "@/lib/schema";
import { byLinkType, isAmazon, isAmazonProduct, shopRel } from "@/lib/affiliate";
import { formatDate, resolveGuide, type Guide as GuideData, type ResolvedItem } from "@/lib/guide";
import { guideJsonLd } from "@/lib/guideSchema";
import { guideBySlug } from "@/content/guides";

const eyebrowCls = "text-xs font-semibold uppercase tracking-[0.2em]";
const h2Cls = "text-3xl font-semibold";

function Eyebrow({ text }: { text?: string }) {
  if (!text) return null;
  return (
    <div className="flex items-center gap-4 mb-6">
      <p className={`${eyebrowCls} shrink-0`} style={{ color: "var(--accent)" }}>{text}</p>
      <div className="flex-1 h-px" style={{ backgroundColor: "var(--line)" }} />
    </div>
  );
}

function ItemCard({ item, rank }: { item: ResolvedItem; rank: number }) {
  return (
    <div id={item.id} className="scroll-mt-28" data-rank={rank} data-product={item.name}>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl font-semibold" style={{ color: "var(--line)", fontFamily: "var(--font-serif)" }}>{String(rank).padStart(2, "0")}</span>
        <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "var(--soft)", color: "var(--accent)" }}>{item.badge}</span>
      </div>
      <ProductCard name={item.name} description={item.body} price={item.priceLabel} url={item.url} image={item.image} ctaLabel={item.ctaLabel} />
      <div className="rounded-lg p-4" style={{ backgroundColor: "var(--soft)", border: "1px solid var(--line-soft)" }}>
        <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--accent)" }}>Key specs (from the listing)</p>
        <ul className="space-y-1">
          {item.specs.map((sp) => <li key={sp} className="text-xs leading-relaxed" style={{ color: "var(--body)" }}>· {sp}</li>)}
        </ul>
        <p className="text-xs mt-3" style={{ color: "var(--muted)" }}>
          {item.availabilityLabel}{item.soldBy ? ` · Sold by ${item.soldBy}` : ""}
        </p>
      </div>
      {(item.pros || item.cons) && (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {item.pros && (
            <div className="rounded-lg p-4" style={{ backgroundColor: "var(--good-bg)", border: "1px solid var(--good-line)" }}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--good)" }}>Pros</p>
              <ul className="space-y-1">{item.pros.map((p) => <li key={p} className="text-xs" style={{ color: "var(--body)" }}>+ {p}</li>)}</ul>
            </div>
          )}
          {item.cons && (
            <div className="rounded-lg p-4" style={{ backgroundColor: "var(--bad-bg)", border: "1px solid var(--bad-line)" }}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--accent)" }}>Cons</p>
              <ul className="space-y-1">{item.cons.map((c) => <li key={c} className="text-xs" style={{ color: "var(--body)" }}>− {c}</li>)}</ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function Table({ columns, rows }: { columns: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-2xl" style={{ border: "1px solid var(--line-soft)" }}>
      <table className="w-full text-sm" style={{ minWidth: "560px" }}>
        <thead>
          <tr style={{ backgroundColor: "var(--soft)" }}>
            {columns.map((c, ci) => (
              <th key={c} scope="col" className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-widest" style={{ color: ci === 0 ? "var(--ink)" : "var(--accent)" }}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr key={ri} style={{ borderTop: "1px solid var(--line-soft)", backgroundColor: "#ffffff" }}>
              {r.map((cell, ci) =>
                ci === 0 ? (
                  <th key={ci} scope="row" className="text-left px-4 py-3 align-top text-sm font-semibold" style={{ color: "var(--ink)" }}>{cell}</th>
                ) : (
                  <td key={ci} className="px-4 py-3 align-top text-sm leading-relaxed" style={{ color: "var(--body)" }}>{cell}</td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Guide({ guide }: { guide: GuideData }) {
  const g = resolveGuide(guide);
  const byId = new Map(g.items.map((it) => [it.id, it]));
  const rankById = new Map(g.items.map((it, i) => [it.id, i + 1]));
  const need = (id: string) => {
    const it = byId.get(id);
    if (!it) throw new Error(`${g.slug}: unknown item id "${id}"`);
    return it;
  };

  // Quick picks: the guide's own list, else the first five ranked items. Amazon ASIN links first.
  const picks = byLinkType(
    g.quickPicks?.length ? g.quickPicks.map((q) => ({ it: need(q.itemId), label: q.label })) : g.items.slice(0, 5).map((it) => ({ it, label: it.badge })),
    (x) => x.it.url,
  );
  const top = picks.find((x) => isAmazonProduct(x.it.url)) ?? picks[0];
  const related = g.related.map((slug) => {
    const r = guideBySlug(slug);
    if (!r) throw new Error(`${g.slug}: related slug "${slug}" does not exist`);
    return r;
  });
  const crumbs: Crumb[] = [
    { name: "Home", path: "" },
    { name: "Blog", path: "/blog" },
    { name: g.breadcrumb, path: `/blog/${g.slug}` },
  ];
  const meta = g.pricesChecked ? `Prices checked ${formatDate(g.pricesChecked)}` : `Updated ${formatDate(g.dateModified)}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(guideJsonLd(g)) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "var(--paper)" }}>
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs crumbs={crumbs} />
            <div className="flex items-center gap-3 mb-6">
              <span className={eyebrowCls} style={{ color: "var(--accent)" }}>{g.eyebrow}</span>
              <span style={{ color: "var(--line)" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "var(--good)" }}>{g.eyebrowAccent}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "var(--ink)" }}>
              {g.h1}<br /><span style={{ color: "var(--accent)" }}>{g.h1Accent}</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>{meta} · {g.readTime}</p>
            {top && <TopPick name={top.it.name} price={top.it.priceLabel} url={top.it.url} note={top.it.soldBy ? `${top.label} · sold by ${top.it.soldBy}` : top.label} />}
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "var(--line)" }} />
            {g.intro.map((p, i) => (
              <p key={i} className={i === 0 ? "text-lg leading-relaxed mb-5 font-light" : "text-base leading-relaxed mb-5"} style={{ color: "var(--body)" }}><Rich text={p} /></p>
            ))}
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src={g.heroImage} alt={g.heroAlt} fill priority sizes="(min-width: 1024px) 1024px, 100vw" className="object-cover" style={{ filter: "brightness(0.85)" }} />
              {g.heroCaption && (
                <div className="absolute inset-0 flex items-end p-8">
                  <p className="text-sm font-light" style={{ color: "rgba(255,255,255,0.85)" }}>{g.heroCaption}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            {picks.length > 0 && <QuickPicks className="mb-6 mt-4" picks={picks.map((x) => ({ name: x.it.name, price: x.it.priceLabel, url: x.it.url, note: x.label }))} />}
            <AffiliateNote className={picks.length > 0 ? "mb-16" : "mb-10 mt-4"} />

            {g.blocks.map((b, bi) => {
              const head = (
                <>
                  <Eyebrow text={"eyebrow" in b ? b.eyebrow : undefined} />
                  <h2 className={`${h2Cls} mb-4`} style={{ color: "var(--ink)" }}>{b.heading}</h2>
                  {"intro" in b && b.intro && <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--body)" }}><Rich text={b.intro} /></p>}
                </>
              );
              switch (b.kind) {
                case "prose":
                  return (
                    <div key={bi} id={b.id} className="mb-16 scroll-mt-28">
                      {head}
                      {b.paragraphs.map((p, i) => <p key={i} className="text-base leading-relaxed mb-4" style={{ color: "var(--body)" }}><Rich text={p} /></p>)}
                    </div>
                  );
                case "products":
                  return (
                    <div key={bi} id={b.id} className="mb-16 scroll-mt-28">
                      {head}
                      <div className="space-y-12">{b.items.map((it) => <ItemCard key={it.id} item={it} rank={rankById.get(it.id)!} />)}</div>
                    </div>
                  );
                case "table":
                  return (
                    <div key={bi} id={b.id} className="mb-16 scroll-mt-28">
                      {head}
                      <Table columns={b.columns} rows={b.rows} />
                      {b.note && <p className="text-xs mt-3" style={{ color: "var(--muted)" }}>{b.note}</p>}
                    </div>
                  );
                case "specTable":
                  return (
                    <div key={bi} id={b.id} className="mb-16 scroll-mt-28">
                      {head}
                      <Table columns={["Product", ...b.columns.map((c) => c.label)]} rows={b.itemIds.map((id) => need(id)).map((it) => [it.name, ...b.columns.map((c) => c.value(it))])} />
                      {b.note && <p className="text-xs mt-3" style={{ color: "var(--muted)" }}>{b.note}</p>}
                    </div>
                  );
                case "cards":
                  return (
                    <div key={bi} id={b.id} className="mb-16 scroll-mt-28">
                      {head}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {b.cards.map((c) => (
                          <div key={c.h} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid var(--line-soft)" }}>
                            <p className="text-sm font-semibold mb-1.5" style={{ color: "var(--ink)", fontFamily: "var(--font-serif)" }}>{c.h}</p>
                            <p className="text-sm leading-relaxed" style={{ color: "var(--body)" }}><Rich text={c.b} /></p>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                case "steps":
                  return (
                    <div key={bi} id={b.id} className="mb-16 scroll-mt-28">
                      {head}
                      <ol className="space-y-5">
                        {b.steps.map((s, si) => (
                          <li key={s.h} className="flex gap-4">
                            <span className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold" style={{ backgroundColor: "var(--ink)", color: "#ffffff" }}>{si + 1}</span>
                            <div>
                              <p className="text-base font-semibold mb-1" style={{ color: "var(--ink)", fontFamily: "var(--font-serif)" }}>{s.h}</p>
                              <p className="text-sm leading-relaxed" style={{ color: "var(--body)" }}><Rich text={s.b} /></p>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </div>
                  );
                case "callout":
                  return (
                    <div key={bi} className="mb-16 rounded-2xl p-6 md:p-8" style={b.dark ? { backgroundColor: "var(--ink)" } : { backgroundColor: "var(--soft)", border: "1px solid var(--line)" }}>
                      <p className={`${eyebrowCls} mb-3`} style={{ color: b.dark ? "var(--gold)" : "var(--accent)" }}>{b.eyebrow}</p>
                      <h2 className="text-2xl font-semibold mb-4" style={{ color: b.dark ? "#ffffff" : "var(--ink)" }}>{b.heading}</h2>
                      {b.body.map((p, i) => <p key={i} className="text-sm leading-relaxed mb-3" style={{ color: b.dark ? "rgba(255,255,255,0.85)" : "var(--body)" }}><Rich text={p} /></p>)}
                    </div>
                  );
              }
            })}

            <div className="mb-16" data-faq>
              <h2 className={`${h2Cls} mb-8`} style={{ color: "var(--ink)" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {g.faqs.map((f) => (
                  <div key={f.q} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid var(--line-soft)" }}>
                    <h3 className="text-base font-semibold mb-2" style={{ color: "var(--ink)" }} data-faq-q><Rich text={f.q} /></h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--body)" }} data-faq-a><Rich text={f.a} /></p>
                  </div>
                ))}
              </div>
            </div>

            {g.sources && g.sources.length > 0 && (
              <div className="mb-16">
                <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--ink)" }}>Sources</h2>
                <ul className="space-y-2 list-disc pl-5">
                  {g.sources.map((s) => (
                    <li key={s.url} className="text-sm leading-relaxed" style={{ color: "var(--body)" }}>
                      <a href={s.url} target="_blank" rel={isAmazon(s.url) ? shopRel(s.url) : "noopener noreferrer"} style={{ color: "var(--accent)", textDecoration: "underline" }}>{s.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h2 className="text-2xl font-semibold mb-8" style={{ color: "var(--ink)" }}>Further reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {related.map((r) => (
                  <ArticleCard key={r.slug} title={r.title} excerpt={r.excerpt} href={`/blog/${r.slug}`} category={r.category} readTime={r.readTime} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
```

The page route (1.6) renders `<Guide guide={guide} />`.

**Supporting text helpers** **[NEW]**:

- `src/components/Rich.tsx` renders `[label](/internal-path)` as a Next `<Link>`. Only internal paths starting with `/` are allowed. There is no HTML, and outbound links stay in Sources and product cards.
- `src/lib/text.ts` strips that syntax for JSON-LD, so the FAQPage text equals the visible text content.

```tsx
// src/components/Rich.tsx
import Link from "next/link";
import type { ReactNode } from "react";

const LINK = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;

export default function Rich({ text }: { text: string }) {
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(LINK)) {
    out.push(text.slice(last, m.index));
    out.push(<Link key={m.index} href={m[2]} style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "2px" }}>{m[1]}</Link>);
    last = m.index! + m[0].length;
  }
  out.push(text.slice(last));
  return <>{out}</>;
}
```

```ts
// src/lib/text.ts
export const plain = (s: string) => s.replace(/\[([^\]]+)\]\((\/[^)\s]*)\)/g, "$1");
```

**FIX: no way to link inside template copy.** Template strings were plain text, so a template page could not carry a contextual internal link in its intro, FAQ or cards. That is why the current template appended one hard-coded hub sentence to every page. `Rich` makes inline links possible without allowing raw HTML.

### 5.5 Intro and copy patterns

- **Intro paragraph 1 states the reader's problem in the niche's own terms.** Example: "A Lagree class is slow, hard and very sweaty. Sweat in your eyes in the middle of a plank, or a headband that slides off when you lie back on the carriage, is the last thing you need."
- **Intro paragraph 2 states the method and its limits:** what was compared, on what criteria, and that prices and stock were checked today. Example: "We compared six headbands on Amazon on the two things that matter in Lagree: sweat control and grip. Prices and stock were checked today."
- **Never claim testing that did not happen.** The site's honesty line ("Specifications are taken from each product's listing or the manufacturer, not from our own testing") sits in the affiliate note. Spec lists are headed "Key specs (from the listing)", and hedges like "per the listing" or "dealer listings" are used inline.
- **Badges** name the use case ("Best for Heavy Sweat", "Best Budget", "Best Multipack") and appear once per page.
- **Product body:** 2–3 sentences. Say what it is, who it suits, and the one fact that sets it apart. **Pros and cons:** 1–3 each, short, and no typed prices.
- **Style:** US English, no em dashes, brand + model in every product name, and no superlatives that are not backed by a listed fact.

### 5.6 Product cards and image conventions

`src/components/ProductCard.tsx` **[VERBATIM]**, the server wrapper that picks the image:

```tsx
import ProductCardView from "@/components/ProductCardView";
import { amazonImageFor } from "@/lib/amazonImages";

interface ProductCardProps {
  name: string;
  description: string;
  price?: string;
  affiliateUrl?: string;
  imageUrl?: string;
  productImageUrl?: string;
  ctaLabel?: string;
  descriptionHtml?: string;
  /** Set to false when the link goes to a stand-in product, so its photo is not shown under another product's name. */
  showProductImage?: boolean;
}

export default function ProductCard({ showProductImage = true, ...props }: ProductCardProps) {
  // The real Amazon product photo always wins over a stock lifestyle photo; the lifestyle photo is only used when there is no product photo.
  const productImageUrl = !showProductImage ? undefined : props.productImageUrl ?? amazonImageFor(props.affiliateUrl);
  return <ProductCardView {...props} imageUrl={productImageUrl ? undefined : props.imageUrl} productImageUrl={productImageUrl} />;
}
```

`src/components/ProductCardView.tsx` **[VERBATIM]**, the photo layout (the branch used whenever a product photo exists):

```tsx
"use client";

import Image from "next/image";

// … props interface …

export default function ProductCardView({ name, description, price, affiliateUrl = "#", imageUrl, productImageUrl, ctaLabel, descriptionHtml }: ProductCardProps) {
  const buttonLabel = ctaLabel ?? (/amazon\.[a-z.]+\//.test(affiliateUrl) ? "Shop on Amazon" : "Shop Direct");
  const linkRel = /amazon\./i.test(affiliateUrl) ? "noopener noreferrer nofollow sponsored" : "noopener noreferrer nofollow";
  if (productImageUrl) {
    return (
      // Container query: photo beside the text when the card is wide (single-column lists), above it in narrow grid cells.
      <div className="@container h-full" style={{ borderTop: "1px solid #ede9e3", paddingTop: "24px", paddingBottom: "28px" }}>
      <div className="flex flex-col @lg:flex-row @lg:items-start gap-6 @lg:gap-8 h-full">
        <a
          href={affiliateUrl}
          target="_blank"
          rel={linkRel}
          aria-label={`${name} on Amazon`}
          className="block relative w-full max-w-[280px] mx-auto @lg:mx-0 @lg:w-[200px] @lg:max-w-none shrink-0 aspect-square"
          style={{ backgroundColor: "#ffffff", border: "1px solid #ede9e3" }}
        >
          <Image
            src={productImageUrl}
            alt={name}
            fill
            unoptimized
            sizes="280px"
            className="object-contain"
            style={{ padding: "14px" }}
          />
        </a>
        <div className="flex-1 min-w-0 flex flex-col">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", marginBottom: "10px" }}>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "20px", fontWeight: 400, color: "#0a0a0a", lineHeight: 1.2, margin: 0 }}>
              {name}
            </h3>
            {price && (
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "12px", fontWeight: 400, color: "#c5a882", whiteSpace: "nowrap", textAlign: "right", letterSpacing: "0.05em" }}>
                {price}
              </span>
            )}
          </div>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "13px", fontWeight: 300, color: "#6b6560", lineHeight: 1.75, marginBottom: "24px", flex: 1 }} dangerouslySetInnerHTML={descriptionHtml ? { __html: descriptionHtml } : undefined}>
            {descriptionHtml ? null : description}
          </p>
          <a
            href={affiliateUrl}
            target="_blank"
            rel={linkRel}
            style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "14px 20px", textAlign: "center", transition: "background-color 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#c5a882"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#0a0a0a"; }}
          >
            {buttonLabel}
          </a>
        </div>
      </div>
      </div>
    );
  }
  // … no-photo branch: optional 4:3 lifestyle image (alt `${name}: Pilates equipment`), same text and button …
}
```

**Image conventions on the current site** (keep all of them):

- **Product photos only where they have room to live.** That means the product cards in product blocks. There are **no photos in Quick Picks, the Top pick box, tables or CTA bands**.
- **The product photo is Amazon's own** (`images.primary.large`, 500×500). It is hotlinked from `m.media-amazon.com` with `unoptimized`, so Next does not proxy or re-host it. It sits in a white square box with `object-contain` and 14px padding, beside the text on wide cards and above it on narrow ones (container query `@lg`).
- **Alt text** for a product photo is the product name (brand + model). The image is a link to the same affiliate URL as the button, labeled `"<name> on Amazon"`.
- **No stand-in photos.** When a card links to a stand-in listing (not the named product), `showProductImage={false}` keeps that listing's photo off the card, so a product is never shown with another product's picture. With no product photo, the card shows no image or a generic lifestyle photo, never a mismatched product.
- **Hero images** are local files in `public/pictures/` through `next/image` (`fill`, `priority`, `object-cover`, darkened to 85%), and are never product photos. Their alt text describes the scene.

**FIX: four flaws in the product card.**

- **A client component just for hover.** `ProductCardView` is a client component only to run hover handlers, so every card ships JavaScript and hydrates. Use a CSS `:hover` class and make it a server component.
- **Niche text in fallback alt.** The no-photo branch hard-codes the alt text "`${name}: Pilates equipment`" **[NICHE]**. Drop the fallback lifestyle photo entirely.
- **Raw HTML in descriptions.** `descriptionHtml` injects raw HTML. Use `Rich` instead.
- **Same label for every link.** The `aria-label` says "on Amazon" for every link. Derive it from the URL.

`src/components/ProductCard.tsx` **[ADAPTED]**, one server component:

```tsx
import Image from "next/image";
import Rich from "@/components/Rich";
import { cardLabel, isAmazon, shopRel } from "@/lib/affiliate";

type Props = { name: string; description: string; price?: string; url: string; image?: string; ctaLabel?: string };

export default function ProductCard({ name, description, price, url, image, ctaLabel }: Props) {
  const rel = shopRel(url);
  const where = isAmazon(url) ? "Amazon" : "the brand's site";
  return (
    <div className="@container" style={{ borderTop: "1px solid var(--line-soft)", paddingTop: "24px", paddingBottom: "28px" }}>
      <div className="flex flex-col @lg:flex-row @lg:items-start gap-6 @lg:gap-8">
        {image && (
          <a href={url} target="_blank" rel={rel} aria-label={`${name} on ${where}`}
            className="block relative w-full max-w-[280px] mx-auto @lg:mx-0 @lg:w-[200px] @lg:max-w-none shrink-0 aspect-square bg-white"
            style={{ border: "1px solid var(--line-soft)" }}>
            {/* Amazon's own photo, hotlinked: unoptimized so it is never proxied or re-hosted. */}
            <Image src={image} alt={name} fill unoptimized sizes="(min-width: 1024px) 200px, 280px" className="object-contain" style={{ padding: "14px" }} />
          </a>
        )}
        <div className="flex-1 min-w-0 flex flex-col">
          <div className="flex justify-between items-start gap-4 mb-2.5">
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "20px", fontWeight: 400, color: "var(--ink)", lineHeight: 1.2, margin: 0 }}>{name}</h3>
            {price && <span className="text-right" style={{ fontSize: "12px", color: "var(--price)", letterSpacing: "0.05em", whiteSpace: price.length > 16 ? "normal" : "nowrap", maxWidth: price.length > 16 ? "45%" : undefined }}>{price}</span>}
          </div>
          <p style={{ fontSize: "13px", fontWeight: 300, color: "var(--body)", lineHeight: 1.75, marginBottom: "24px" }}><Rich text={description} /></p>
          <a href={url} target="_blank" rel={rel} className="shop-btn">{ctaLabel ?? cardLabel(url)}</a>
        </div>
      </div>
    </div>
  );
}
```

with this in `globals.css`:

```css
.shop-btn { display: block; font-size: 10px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: #fff; background: var(--btn); padding: 14px 20px; text-align: center; text-decoration: none; transition: background-color 0.2s; }
.shop-btn:hover, .shop-btn:focus-visible { background: var(--btn-hover); }
```

`src/components/QuickPicks.tsx` and `src/components/TopPick.tsx` are kept as in the current code (4.3), with two substitutions:

- `rel` becomes `shopRel(p.url)`, and the label becomes `p.cta ?? pickLabel(p.url)`;
- the inline font-family strings become `var(--font-sans)` and `var(--font-serif)` (6.3).

`QuickPicks.tsx` **[VERBATIM]**:

```tsx
// The "Quick Picks: At a Glance" box used on the top-performing guides
// (grip socks, reformer brands): numbered rows, short note, price, black
// Shop Now button. Shared so every guide renders the same box.
export type QuickPick = { name: string; note: string; price: string; url: string; tag?: string; cta?: string };

export default function QuickPicks({ picks, title = "Quick Picks: At a Glance", subtitle, className = "mb-10 mt-4" }: { picks: QuickPick[]; title?: string; subtitle?: string; className?: string }) {
  return (
    <div className={`${className} overflow-hidden`} style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
      <div className="px-6 py-4" style={{ backgroundColor: "#f6f3f2" }}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{title}</p>
        {subtitle && <p className="text-xs mt-1" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{subtitle}</p>}
      </div>
      {picks.map((p, i) => {
        const amazon = /amazon\.[a-z.]+\//.test(p.url);
        return (
        <div key={p.url + i} className="flex items-center gap-3 sm:gap-4 px-6 py-4" style={{ borderTop: i === 0 ? "none" : "1px solid rgba(217,194,186,0.25)", backgroundColor: "#ffffff" }}>
          <span className="text-base font-semibold w-7 shrink-0 text-center" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{String(i + 1).padStart(2, "0")}</span>
          <div className="flex-1 min-w-0">
            {p.tag && <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{p.tag}</p>}
            <p className="text-sm font-semibold leading-tight" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{p.name}</p>
            <p className="text-xs mt-0.5" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{p.note}<span className="md:hidden"> · <span className="font-semibold" style={{ color: "#1b1c1c" }}>{p.price}</span></span></p>
          </div>
          <span className="text-xs font-semibold hidden md:block shrink-0 mr-3" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{p.price}</span>
          <a href={p.url} target="_blank" rel={amazon ? "noopener noreferrer nofollow sponsored" : "noopener noreferrer nofollow"}
            style={{ display: "block", fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "10px 14px", whiteSpace: "nowrap", flexShrink: 0 }}
          >{p.cta ?? (amazon ? "Shop Now →" : "Shop Direct →")}</a>
        </div>
        );
      })}
    </div>
  );
}
```

`TopPick.tsx` **[VERBATIM]**:

```tsx
// Compact "our top pick" box placed straight under the H1 so the first
// affiliate link is on the first mobile screen.
export default function TopPick({ label = "Our top pick", name, price, note, url, cta }: { label?: string; name: string; price: string; note: string; url: string; cta?: string }) {
  return (
    <div className="rounded-2xl p-5 mb-8 flex flex-col sm:flex-row sm:items-center gap-4" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(139,74,49,0.25)" }}>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-1" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{label}</p>
        <p className="text-base font-semibold leading-snug" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{name}</p>
        <p className="text-xs mt-1" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}><span className="font-semibold" style={{ color: "#1b1c1c" }}>{price}</span> · {note}</p>
      </div>
      <a href={url} target="_blank" rel={/amazon\.[a-z.]+\//.test(url) ? "noopener noreferrer nofollow sponsored" : "noopener noreferrer nofollow"} className="text-center shrink-0"
        style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "12px 18px", whiteSpace: "nowrap" }}
      >{cta ?? (/amazon\.[a-z.]+\//.test(url) ? "Shop Now →" : "Shop Direct →")}</a>
    </div>
  );
}
```

`ArticleCard` (the "Further reading" card) is a text card: category, title (H3), excerpt and "Read → {readTime}". It accepts `imageUrl` but does not render it.

**FIX: a fake date on every related card.** The template passes `date="October 2026"` to every related card, regardless of the article's real date. Drop the `date` prop, or pass the related guide's real `dateModified` formatted.

### 5.7 Tables

- **Roundup:** one "At a glance" table near the top. The first column is the product (bold, a row header); then price, best for, and one niche attribute.
- **Comparison:** one "Head to head" spec table, `Spec | A | B`.
  - The table `intro` names where the figures come from.
  - The `note` adds any caveat, for example "Confirm with the brand before you buy".
  - Approximate figures say "About".
- Tables scroll horizontally on mobile (`overflow-x-auto`, `minWidth: 560px`). They never squeeze columns.
- **In the rebuild,** any column that repeats item data (price, availability, seller) comes from `specTable`, so it cannot disagree with the cards. Free `table` blocks are only for data that is not on the cards, such as spec comparisons.

### 5.8 Internal link placement in an article

| Where | What | Count |
|---|---|---|
| Header mega menu | Cluster hubs and top guides | every page (crawlable after the 2.7 FIX) |
| Breadcrumb | Home, Blog | every article (after the 2.8 FIX) |
| Intro | Link to the cluster hub or the parent guide with `Rich` | 0–1 |
| Callout / cards / prose | Links to a comparison or a sibling guide | 1–2 |
| FAQ answers | A link where the answer is "see our X guide" | 0–1 |
| Further reading | 4 sibling guides in the same cluster | exactly 4 |
| Footer | Category hubs, legal pages | every page |

### 5.9 FAQ and FAQPage pairing

**In the template,** both are rendered from the one `faqs` array: the visible cards in JSX, and `FAQPage.mainEntity` in the JSON-LD (3.5). They cannot differ.

**Hand-built pages** that wrote the JSON-LD first render the visible FAQ from the schema with this helper. `src/components/FaqSection.tsx` **[VERBATIM]**, the extractor:

```ts
type Faq = { q: string; a: string };

// Pulls the questions out of a page's FAQPage schema so the visible FAQ always matches the markup.
export function faqsFromJsonLd(ld: unknown): Faq[] {
  const out: Faq[] = [];
  const walk = (o: unknown) => {
    if (Array.isArray(o)) return o.forEach(walk);
    if (!o || typeof o !== "object") return;
    const node = o as Record<string, unknown>;
    if (node["@type"] === "Question") {
      const ans = node.acceptedAnswer as Record<string, unknown> | undefined;
      if (typeof node.name === "string" && typeof ans?.text === "string") out.push({ q: node.name, a: ans.text });
      return;
    }
    Object.values(node).forEach(walk);
  };
  walk(ld);
  return out;
}
```

Five hand-built pages typed their visible FAQ separately, and their text no longer matches their FAQPage. With every article on the one template there is nothing to drift, and the validation gate compares visible and schema FAQs on every page anyway.

**FAQ rules:**

- 4–5 questions.
- The first question is the page's head term as a question ("What is the best X?" or "What is the difference between A and B?").
- One question is about buying logistics (timing, sizing or compatibility).
- Answers are 1–3 sentences. They name products with brand + model, and quote prices only as `{price:ASIN}`.
- No question repeats an H2.

---

## 6. Performance and config

### 6.1 Rendering strategy

From the production build of `73b6e70`:

```
○  (Static)   prerendered as static content      366 routes
ƒ  (Dynamic)  server-rendered on demand            1 route: /blog
```

- **Every article, hub and legal page is static HTML** generated at build time and served from Vercel's CDN.
- **Server components by default.** Client components are limited to:
  - `Header` (menus);
  - `SiteSearch` (the search modal);
  - `BlogFilter` (category chips);
  - `FeaturedRotator` (homepage carousel);
  - `NewsletterForm`;
  - `ProductCardView`, client only for hover (FIX in 5.6).
- **No runtime data fetching anywhere:** no API routes, no ISR and no `fetch` in pages. Product data is in the repo.

**FIX: `/blog` renders on demand.** `/blog` is dynamic only because it reads `searchParams` to preselect a category, so every visit renders all 277 cards on the server. Make the page static and read the parameter on the client.

`src/app/blog/page.tsx` **[ADAPTED]** (body):

```tsx
import { Suspense } from "react";
import BlogFilter from "@/components/BlogFilter";
import BlogFilterFromUrl from "@/components/BlogFilterFromUrl";
import { GUIDES } from "@/content/guides";

const FEATURED = "<slug-of-the-featured-guide>"; // [NICHE]
const posts = [...GUIDES]
  .sort((a, b) => b.published.localeCompare(a.published))
  .map((g) => ({ title: g.title, excerpt: g.excerpt, href: `/blog/${g.slug}`, category: g.category, readTime: g.readTime, imageUrl: g.heroImage, featured: g.slug === FEATURED }));

// …metadata (canonical /blog) and the CollectionPage graph from 3.8, built from `posts`…

export default function BlogPage() {
  return (
    <>
      {/* script, Header, hero … */}
      <Suspense fallback={<BlogFilter posts={posts} initialCategory="All" />}>
        <BlogFilterFromUrl posts={posts} />
      </Suspense>
      {/* Footer */}
    </>
  );
}
```

`src/components/BlogFilterFromUrl.tsx` **[NEW]**:

```tsx
"use client";
import { useSearchParams } from "next/navigation";
import BlogFilter, { type Post } from "@/components/BlogFilter";
import { CATEGORIES } from "@/lib/categories";

export default function BlogFilterFromUrl({ posts }: { posts: Post[] }) {
  const raw = useSearchParams().get("category") ?? "";
  const initial = CATEGORIES.find((c) => c.toLowerCase() === raw.toLowerCase()) ?? "All";
  return <BlogFilter key={initial} posts={posts} initialCategory={initial} />;
}
```

`BlogFilter` stays as it is. It holds the active category in state, shows the featured post first, then a grid of cards filtered by category, with a chip per category from `CATEGORIES`.

### 6.2 Image optimization

**Current:**

| Image | How it is served |
|---|---|
| Hero and lifestyle photos (`public/pictures/`, 71 files, **131 MB**, up to 10 MB each) | `next/image` with `fill`, `priority` on the hero, `object-cover`. Next generates resized WebP/AVIF for visitors. |
| Amazon product photos (500×500 JPEG on `m.media-amazon.com`) | `next/image` with `unoptimized`, so the browser loads Amazon's file directly. It is never proxied or re-hosted. |
| Open Graph / Twitter images | The raw hero file (up to 10 MB), declared as 1200×630 although most are 832×1248 |
| Logo (`/pictures/pcc-logo.png`, 859×286) | `next/image` with `priority` in the header |

**FIX: oversized source images.** The source images are far larger than any display size. Social crawlers and Google's image crawler fetch the raw file, not Next's optimized version. In the rebuild:

- Commit heroes at most 1600px wide and 300 KB or less (JPEG quality 80, or WebP).
- Commit one 1200×630 JPEG of 300 KB or less per article in `public/pictures/og/` (2.2).
- Keep source originals out of the repo (1.2).
- Give every `next/image` with `fill` a `sizes` value: the hero is `(min-width: 1024px) 1024px, 100vw`, product photos `(min-width: 1024px) 200px, 280px`.

### 6.3 Font loading

**Current** `src/app/globals.css` **[VERBATIM]**, top:

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Jost:ital,wght@0,300;0,400;0,500;1,300&display=swap');
@import "tailwindcss";

:root {
  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-sans: 'Jost', system-ui, sans-serif;

  --black: #0a0a0a;
  --white: #ffffff;
  --off-white: #f7f4f0;
  --cream: #ede9e3;
  --mid: #9a9490;
  --dark: #3a3530;
  --gold: #c5a882;
}

* {
  box-sizing: border-box;
}

body {
  font-family: var(--font-sans);
  background-color: #ffffff;
  color: #0a0a0a;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4 {
  font-family: var(--font-serif);
  font-weight: 400;
}
```

**FIX: two font families that are never loaded, and a render-blocking font request.**

- The problem:
  - The CSS `@import` loads Cormorant Garamond and Jost from Google with a render-blocking request chain (HTML → CSS → Google CSS → font files).
  - **326 files** set inline `fontFamily: "'Montserrat', sans-serif"` or `"'Playfair Display', serif"`. Neither font is loaded anywhere, so those elements fall back to the system sans and serif. The site shows four font families in practice:
    - templates and article bodies use the fallbacks;
    - the header, cards and product names use Cormorant and Jost.
- **The fix:**
  - Load exactly two families with `next/font/google` in the layout (2.1). Fonts are then self-hosted at build, preloaded and size-adjusted, with no layout shift and no third-party request.
  - Expose them as `--font-serif` and `--font-sans`.
  - Reference only those two variables. **Never write a font name in a component.**

`src/app/globals.css` **[ADAPTED]**, top. The fonts come from the layout. The color tokens use the current palette **[NICHE]**, corrected for contrast.

```css
@import "tailwindcss";

:root {
  /* Fonts: set by next/font in layout.tsx (--font-serif, --font-sans). */

  /* [NICHE] palette: the current site's colors, as tokens */
  --ink: #1b1c1c;        /* headings, 17:1 on white */
  --body: #53433e;       /* body text, 9.4:1 */
  --muted: #7a6a64;      /* meta text, 5.2:1 (current #86736d is 4.3:1 on the page background) */
  --accent: #8b4a31;     /* links, eyebrows, H1 accent line, 6.7:1 */
  --good: #536257;       /* eyebrow accent, "Pros" heading */
  --gold: #c5a882;       /* decorative only: never text on white (2.3:1) */
  --price: #8b4a31;      /* product price (current gold #c5a882 is 2.3:1, too faint) */
  --line: #d9c2ba;       /* rules, rank numbers (decorative) */
  --line-soft: rgba(217, 194, 186, 0.4);
  --paper: #fcf9f8;      /* hero background */
  --soft: #f6f3f2;       /* table head, spec box */
  --good-bg: #f0f7f1;  --good-line: rgba(83, 98, 87, 0.2);
  --bad-bg: #fdf5f3;   --bad-line: rgba(139, 74, 49, 0.15);
  --btn: #0a0a0a;      --btn-hover: #8b4a31;
}

* { box-sizing: border-box; }

body {
  font-family: var(--font-sans), system-ui, sans-serif;
  background-color: #ffffff;
  color: var(--ink);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4 { font-family: var(--font-serif), Georgia, serif; font-weight: 400; }

@media (max-width: 768px) {
  .hero-image { height: 220px !important; }
}
```

**Styling convention.** Tailwind utility classes handle layout; brand colors and fonts come only from the variables above. The current site mixes Tailwind with inline style objects containing hex values, and a `globals.css` of mobile overrides with `!important` keyed to class names (`.pcc-*`). Keep the `.pcc-*` mobile overrides only for the components you keep. The `.pcc-mega-*` and `.pcc-nav-trigger` rules belong to the header.

### 6.4 Site search and its build-time index

**Current index builder.** `scripts/build-search-index.mjs` **[VERBATIM]**, run by `prebuild`:

```js
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
```

**FIX: a fragile, regex-scraped index.** The index is scraped with regular expressions from TypeScript source, written into `public/` and committed. The corrected version is a static route handler built from the same guide modules at build time. It has no parsing, no committed artifact and no drift.

`src/app/search-index.json/route.ts` **[NEW]**:

```ts
import { GUIDES } from "@/content/guides";

export const dynamic = "force-static"; // generated once at build (Cache Components stays off)

const PAGES = [
  { url: "/blog", title: "Journal", description: "Every guide on the site.", keywords: [], type: "Page", image: "" },
  { url: "/about", title: "About", description: "Who we are and how we choose products.", keywords: [], type: "Page", image: "" },
]; // [NICHE] static pages worth finding

export function GET() {
  const guides = GUIDES.map((g) => ({
    url: `/blog/${g.slug}`,
    title: g.title,
    description: g.description,
    keywords: g.keywords ?? [],
    type: g.category,
    image: g.heroImage,
  }));
  return Response.json([...guides, ...PAGES]);
}
```

The client keeps fetching `/search-index.json`. Remove the `prebuild` and `dev` hooks and `public/search-index.json`.

**The search client**, `src/components/SiteSearch.tsx` (client component, 287 lines). It opens as a modal from a header button, with Cmd/Ctrl+K or `/`. On first open it fetches the index once and caches it in module scope. Ranking, **[VERBATIM]** (`SYNONYMS`, `STOP` and the boosts are **[NICHE]**):

```ts
type Entry = { url: string; title: string; description: string; keywords: string[]; type: string; image: string };
type Doc = Entry & { fields: { tokens: string[]; weight: number }[]; titleStem: string; pilates: boolean };

const STOP = new Set("a an the and or of for to in on at with my your is are best top what which how do does i me find show page article guide 2025 2026".split(" "));

// Words people type, mapped to words our pages use.
const SYNONYMS: Record<string, string[]> = {
  glove: ["grip"], grip: ["sock", "glove"], sock: ["grip", "toe"], legging: ["tight", "pant"], tight: ["legging"], pant: ["legging"],
  bra: ["sport", "top"], top: ["bra", "shirt"], mat: ["yoga"], reformer: ["machine"], machine: ["reformer"], ring: ["circle", "magic"],
  circle: ["ring"], roller: ["foam"], band: ["loop", "resistance"], loop: ["band"], weight: ["dumbbell", "ankle"], dumbbell: ["weight"],
  bag: ["tote", "backpack"], tote: ["bag"], lagree: ["megaformer"], megaformer: ["lagree"], spin: ["cycling", "bike"],
  cycling: ["spin", "bike"], bike: ["spin", "cycling"], peloton: ["spin", "bike"], cheap: ["budget", "under"], budget: ["cheap", "under"],
  affordable: ["budget", "under"], gift: ["christmas", "present"], present: ["gift"], christmas: ["gift"], xmas: ["christmas", "gift"],
  deal: ["sale", "friday", "monday"], sale: ["deal"], discount: ["deal", "sale"], beginner: ["first", "start"], studio: ["class"],
  class: ["studio"], shoe: ["sneaker"], sneaker: ["shoe"], bottle: ["water"], watch: ["smartwatch", "tracker"], tracker: ["watch"],
  pregnancy: ["prenatal", "pregnant"], prenatal: ["pregnancy"], back: ["spine", "pain"], nyc: ["york"], la: ["angeles"],
};

function norm(s: string) {
  return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/&/g, " and ");
}
function stem(w: string) {
  if (w.length > 4 && w.endsWith("ies")) return w.slice(0, -3) + "y";
  if (w.length > 4 && /(sses|xes|ches|shes)$/.test(w)) return w.slice(0, -2);
  if (w.length > 3 && w.endsWith("s") && !w.endsWith("ss")) return w.slice(0, -1);
  if (w.length > 5 && w.endsWith("ing")) return w.slice(0, -3);
  return w;
}
function tokens(s: string) {
  return norm(s).split(/[^a-z0-9$]+/).filter(Boolean).map(stem);
}
function within(a: string, b: string, max: number) {
  if (Math.abs(a.length - b.length) > max) return false;
  const prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let diag = prev[0];
    prev[0] = i;
    let rowMin = prev[0];
    for (let j = 1; j <= b.length; j++) {
      const tmp = prev[j];
      prev[j] = Math.min(prev[j] + 1, prev[j - 1] + 1, diag + (a[i - 1] === b[j - 1] ? 0 : 1));
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) prev[j] = Math.min(prev[j], tmp);
      diag = tmp;
      rowMin = Math.min(rowMin, prev[j]);
    }
    if (rowMin > max) return false;
  }
  return prev[b.length] <= max;
}
function matchQuality(term: string, tok: string, isLast: boolean) {
  if (tok === term) return 1;
  if (isLast && term.length >= 2 && tok.startsWith(term)) return 0.85; // still typing
  if (term.length >= 4 && tok.length >= 4 && term[0] === tok[0] && within(term, tok, term.length >= 7 ? 2 : 1)) return 0.5; // typo
  return 0;
}

function prepare(list: Entry[]): Doc[] {
  return list.map((e) => ({
    ...e,
    titleStem: " " + tokens(e.title).join(" ") + " ",
    pilates: /pilates/i.test(e.title),
    fields: [
      { tokens: tokens(e.title), weight: 10 },
      { tokens: tokens(e.url.replace(/[/-]/g, " ")), weight: 7 },
      { tokens: tokens(e.keywords.join(" ")), weight: 5 },
      { tokens: tokens(e.type), weight: 3 },
      { tokens: tokens(e.description), weight: 2 },
    ],
  }));
}

function search(docs: Doc[], query: string) {
  const raw = tokens(query);
  const terms = raw.filter((t) => !STOP.has(t));
  const use = terms.length ? terms : raw;
  if (!use.length) return [];
  const qStem = " " + raw.join(" ") + " ";
  const otherSport = use.some((t) => /^(lagree|megaformer|spin|cycling|bike|peloton|barre|yoga)$/.test(t));
  const scored = docs.map((d) => {
    let score = 0;
    let missed = 0;
    use.forEach((term, idx) => {
      const isLast = idx === use.length - 1;
      let best = 0;
      const variants: [string, number][] = [[term, 1], ...(SYNONYMS[term] || []).map((s): [string, number] => [s, 0.7])];
      for (const [v, vw] of variants) {
        for (const f of d.fields) {
          for (const tok of f.tokens) {
            const q = matchQuality(v, tok, isLast && vw === 1);
            if (q) best = Math.max(best, q * f.weight * vw);
          }
        }
      }
      if (best === 0) missed++;
      score += best;
    });
    if (missed) score *= missed === use.length ? 0 : 0.3;
    if (score && raw.length > 1 && d.titleStem.includes(qStem)) score += 12;
    if (score && d.pilates && !otherSport) score += 4;
    if (score && d.type !== "City guide" && d.url.startsWith("/blog/")) score += 0.5;
    return { d, score };
  });
  return scored.filter((s) => s.score > 0).sort((a, b) => b.score - a.score).slice(0, 8).map((s) => s.d);
}
```

**How the ranking works:**

- Each page is scored on five weighted fields: title 10, URL words 7, keywords 5, category 3, description 2.
- Each query term matches exactly (1.0), as a prefix of the last word being typed (0.85), or with one or two typos (0.5).
- Synonyms count at 0.7.
- A page missing a term keeps 30% of its score; a page missing all terms is dropped.
- An exact title phrase match adds 12.
- The top 8 results are shown. With no query, a "Popular" list shows hand-picked links.
- Keyboard: arrows move, Enter opens, Esc closes.

In the rebuild:

- replace `SYNONYMS`, `STOP` (keep the years current), the `pilates` and `otherSport` boosts, the "City guide" check, the placeholder text and the `POPULAR` list with niche equivalents **[NICHE]**;
- remove the `/cities` popular link.

### 6.5 Analytics

- **Google Analytics 4** through `next/script` with `strategy="afterInteractive"` in the root layout (2.1). Page views only; there are no custom events.
- **Vercel Web Analytics**: `<Analytics />` from `@vercel/analytics/next` in the root layout. Enable Web Analytics on the Vercel project.
- **FIX: the GA ID is hard-coded,** so previews and local runs report to production analytics. Read `NEXT_PUBLIC_GA_ID` (2.1).
- **Optional, recommended:** send a GA4 event on affiliate clicks, so revenue per page can be estimated before Amazon's reports arrive. One delegated listener in a small client component in the layout:

```tsx
"use client";
import { useEffect } from "react";

// Sends one GA4 event per click on an Amazon link: label = page path, link_url = the Amazon URL.
export default function AffiliateClicks() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a[href*='amazon.']") as HTMLAnchorElement | null;
      const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
      if (a && gtag) gtag("event", "affiliate_click", { link_url: a.href, page_path: location.pathname });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
```

### 6.6 Environment variables (names only)

The current site reads **no** environment variables at runtime: `process.env` appears nowhere in `src/` or `scripts/`.

The rebuild uses these:

| Name | Where it is set | Used by | Notes |
|---|---|---|---|
| `NEXT_PUBLIC_GA_ID` | Vercel project (Production only) | `src/app/layout.tsx` | GA4 measurement ID. Unset means no GA tag. |
| `AMZ_ID` | The shell, for one command | `scripts/amazon/*.py` | Creators API client ID. Never in a file, never on Vercel. |
| `AMZ_SECRET` | The shell, for one command | `scripts/amazon/*.py` | Creators API client secret. Never in a file, never on Vercel. |
| `INDEXNOW_KEY` | The shell, for one command | `scripts/indexnow.mjs` | Must equal the name and content of `public/<key>.txt`. |

`.env*` stays in `.gitignore`. Nothing secret is needed at build time, because the Amazon data is already in `products.json`.

**FIX: the newsletter form pretends to subscribe.** `NewsletterForm` and `NewsletterInline` show "Thanks for subscribing! Check your inbox Sunday morning." on submit **without sending the address anywhere**. That misleads visitors. Do not ship a signup form until a provider is chosen. Then post to the provider from a server action, with its key in a server-only environment variable (for example `NEWSLETTER_API_KEY`, set on Vercel), and show success only after the provider confirms.

### 6.7 CTA band

`CTASection` is hard-wired to the city system: its button always links `/cities` ("Explore City Guides →"), whatever title the page passes. It is out of scope. In the rebuild:

- either drop the band;
- or replace it with a **cluster hub CTA**: a title, a subtitle and one internal link to the guide's hub, with the link passed per guide.

Never use a CTA that sends shopping visitors away from the shopping page to an unrelated section.

---

## 7. Niche-specific items to replace [NICHE]

Everything below is Pilates-specific. Keep the mechanics; replace the content.

### 7.1 Brand identity and palette

| Item | Current value | Where |
|---|---|---|
| Site name | Pilates Collective Club | `layout.tsx`, every template, footer, manifest → `SITE.name` |
| Domain | `https://pilatescollectiveclub.com` (hard-coded in 367 files) | → `SITE.url` |
| Root description | "Curated city guides, expert studio recommendations, and equipment picks for Pilates practitioners worldwide." | `layout.tsx`, manifest → `SITE.description` |
| Logo | `/pictures/pcc-logo.png` (859×286) | Header, Organization logo → `SITE.logo` |
| Icons | `src/app/icon.png`, `icon.svg`, `apple-icon.png`, `favicon.ico`, `public/icon.png`, `public/logo-mark.svg` | Replace all |
| Manifest | `public/manifest.webmanifest`: name, short_name "PCC", theme and background `#c5a882` | Replace |
| Social profiles | Instagram and Pinterest `pilatescollectiveclub`; Twitter `@pilatescollective` | `SITE.sameAs` (only accounts that exist) |
| Fonts | Cormorant Garamond (serif) + Jost (sans); Montserrat and Playfair referenced but not loaded | `layout.tsx` via `next/font` |
| Palette | ink `#1b1c1c`, body `#53433e`, accent `#8b4a31`, green `#536257`, gold `#c5a882`, line `#d9c2ba`, paper `#fcf9f8`, soft `#f6f3f2`, black `#0a0a0a` | `globals.css` tokens (6.3) |
| Default OG image | `/pictures/roxana-popovici-2QeonB1SdQk-unsplash.jpg` | Homepage metadata |
| GA4 ID | `G-5H5C236ZVF` | → `NEXT_PUBLIC_GA_ID` |
| Header style | Cream glass bar `rgba(245,240,235,0.97)` with blur, uppercase 11px nav, accent "Shop Gear" button | `Header.tsx` |

### 7.2 Navigation data files

- **`src/components/nav-menus.ts`** (601 lines):
  - `SHOP_CATEGORIES` tabs: Deals, Reformers, Equipment, Clothing, Lagree, Spin and more, each with link groups, a featured guide and an "all" link;
  - `JOURNAL_TABS`, `BRANDS_TABS`, `CITIES_TABS` (drop) and `ABOUT_TABS` (with the "The independent guide for serious practitioners." intro);
  - `MENUS` order: Journal, Brands, Cities (drop), About; `SHOP_MENU` label "Shop Gear".
- **`src/components/Footer.tsx`**: link columns, the copyright line with the Amazon sentence, and the `/cities` accent link (drop).
- **`src/lib/categories.ts`** **[VERBATIM]**. Replace the list, and keep `"All"` first.

```ts
export const CATEGORIES = [
  "All",
  "Equipment",
  "Brand Guide",
  "Method",
  "Health",
  "Guide",
  "Beginners",
  "Performance",
  "Comparison",
  "Reading",
  "Travel",
  "Tech & Devices",
  "Clothing",
  "Studio Essentials",
  "Lagree",
  "Spinning",
] as const;
```

In the rebuild, also export `export type Category = Exclude<(typeof CATEGORIES)[number], "All">;` for `Guide.category`.

### 7.3 Product catalogs

| File | Content | Checked-date constants |
|---|---|---|
| `src/lib/reformerCatalog.ts` | High-value Pilates equipment (reformers, towers, accessories), Amazon and brand-direct | `PRICES_CHECKED`, `PRICES_CHECKED_ISO` |
| `src/lib/giftCatalog.ts` | Gift items reused across gift guides | `GIFTS_CHECKED`, `GIFTS_CHECKED_ISO` |
| `src/lib/adventCatalog.ts` | Advent calendars | `ADVENT_CHECKED`, `ADVENT_CHECKED_ISO` |
| `src/data/amazon-images.json` | 587 ASIN → photo URLs | (none) |
| Local `ITEMS` / `PRODUCTS` arrays in about 250 article files | Everything else | per-page `CHECKED` |

In the rebuild these all become `products.json` (generated) plus editorial items inside each guide module. If several guides share an editorial description, a niche catalog of `AmazonItemInput` objects (no prices) is fine; spread it into guides as the current `item()` helper does.

### 7.4 Seasonal content modules

- **`src/lib/blackFriday.ts`**:
  - `BF_DATES` (Black Friday Friday, November 27, 2026; Cyber Monday Monday, November 30, 2026);
  - the BF price-check constants;
  - `BF_GUIDES`, 10 hub and spoke entries with a `group` of `"Pilates" | "Lagree" | "Spin"`.
- **`src/lib/seasonalGuides.ts`**: `CM_DATE`, `XMAS_DATE` (Friday, December 25, 2026), the seasonal price-check constants, `CM_GUIDES` (7) and `XMAS_GUIDES` (12).
- **`src/components/DealsGuide.tsx`** (300 lines): a season-aware template with per-season disclaimers ("The prices shown are the current Amazon prices we checked, not sale prices…").
- **Gift and advent guides** use the standard template with seasonal copy and catalogs.
- **Redirects:** the October 2026 "christmas" slug renames in `next.config.ts`.

**What to keep for a new niche with seasonal demand:**

- one module of dates and a list of sibling guides per season, so each seasonal page links all its siblings;
- dates written as both human and ISO strings;
- the honesty rule: say "current price, not a sale price" until a deal is live.

Build the pages on the normal `Guide` template.

### 7.5 Search synonyms

`SYNONYMS`, `STOP`, `POPULAR`, the `pilates` and `otherSport` boosts, and the "Search gloves, reformers, Lagree, Zurich…" placeholder in `SiteSearch.tsx` (6.4).

### 7.6 Templates and components with hard-coded Pilates copy

| File | Hard-coded niche copy |
|---|---|
| `EquipmentGuide.tsx` | `articleSection: "Equipment"`; the closing sentence linking `/blog/best-pilates-reformer-brands` ("Compare every brand in our reformer brands guide"); the CTA defaults "Find a studio near you" / "Use our curated city guides…" with the placeholder "Ask: best reformer studios in New York…"; `date="October 2026"` on related cards; the `.pcc-city-hero-image` class |
| `DealsGuide.tsx` | Season labels, disclaimers, `BF_GUIDES` / `CM_GUIDES` / `XMAS_GUIDES` groups |
| `ProductCardView.tsx` | Fallback alt "`${name}: Pilates equipment`" |
| `CTASection.tsx` | "Explore City Guides →" to `/cities` (out of scope) |
| `AffiliateNote.tsx` | Default text is generic; keep |
| `affiliate-disclosure/page.tsx` | "Pilates Collective Club is a participant…", commission range, mention of city guide and studio links |
| `Header.tsx`, `Footer.tsx`, `nav-menus.ts` | Menu labels and links, "Shop Gear", the About intro |
| `src/app/page.tsx` (homepage, 836 lines) | Hero copy, `CityCard` grid (drop), `FeaturedRotator` items, featured products, WebPage graph |
| `src/app/brands/page.tsx` | Pilates brand hub (CollectionPage); rebuild as a niche brand hub if relevant |
| `src/app/advertise/page.tsx`, `contact/page.tsx`, `privacy`, `terms` | Brand name and Pilates copy |
| `PartnerBrandEntry.tsx` + the "Core Collab" redirects and `thecorecollab` exception in `schema.ts` | A paid partner placement for one Pilates brand. Do not carry over. If the new site sells placements, give them an explicit flag and a visible "Sponsored" label. |
| `public/manifest.webmanifest`, `layout.tsx` keywords list | Pilates terms and cities |
| `scripts/*.py` (`add_gear_sections.py`, `conversion_improvements.py`, `fix_corrupted.py`, `fix_seo_metadata.py`, `rollout_footer_links.py`) | One-off migrations for this site; do not copy |

### 7.7 Affiliate tag

`pilatescollective-20`, typed in 318 files and in `amz.py`. In the rebuild it lives only in `AMAZON_TAG` (`src/lib/affiliate.ts`) and `TAG` (`scripts/amazon/creators.py`). Create a new tracking ID for the new site in Amazon Associates, so revenue is reported per site.

---

## 8. Rebuild checklist

Follow it top to bottom. Each step depends only on the steps above it.

1. **Create the repo and app.**
   - `npx create-next-app@16.2.6` with TypeScript, ESLint, Tailwind, App Router and the `src/` directory.
   - Pin `next`, `react`, `react-dom` and `eslint-config-next` as in 1.1.
   - Add `@vercel/analytics`.
   - Delete the starter SVGs in `public/`.
   - Add `AGENTS.md` (verbatim, top of this document) and `CLAUDE.md` containing `@AGENTS.md`.
   - Do not enable Cache Components.
2. **Config files:** `next.config.ts` (1.2, adapted), `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`, `vercel.json` and `.gitignore` (1.2).
3. **Site constants:**
   - `src/lib/site.ts` with the new domain, name, description, logo size and real social profiles;
   - put the logo in `public/brand/`;
   - put the icons in `src/app/` and the manifest in `public/`.
4. **Brand styling:**
   - pick two Google fonts and load them with `next/font` in the layout;
   - write `globals.css` with the color tokens (6.3), checking every text color is at least 4.5:1;
   - add the `.shop-btn` and `.hero-image` rules.
5. **Affiliate module:** `src/lib/affiliate.ts` (1.5.3) with the new Associates tracking ID in `AMAZON_TAG`.
6. **Amazon scripts:**
   - `scripts/amazon/creators.py` (4.5) with the same tag;
   - `scripts/amazon/refresh.py` (4.6);
   - confirm the Creators API `availability.type` names with a real `getItems` call and complete the `AVAIL` map;
   - re-check the current Associates Program Policies and Creators API terms on data caching and price display.
7. **Product data:**
   - shortlist products with `searchItems`;
   - verify each with `getItems` (a live offer, brand + model matching the title, the seller noted);
   - run `refresh.py --add <ASINs…>` to create `src/data/products.json`;
   - add `src/lib/products.ts` (1.5.3).
8. **Schema cleaner:** `src/lib/schema.ts`, the corrected version (3.3), plus `src/lib/text.ts` (5.4).
9. **Categories:** `src/lib/categories.ts` with the niche categories and the `Category` type (7.2).
10. **Guide layer:**
    - `src/lib/guide.ts` with the types, `resolveItem`, `resolveGuide`, `fillPrices`, `guideMetadata` and `formatDate` (1.5.3);
    - `src/lib/guideSchema.ts` with `guideJsonLd` (3.5).
11. **Components:**
    - `Breadcrumbs` (2.8), `Rich` (5.4), `ProductCard` (5.6);
    - `QuickPicks`, `TopPick` (5.6, with `shopRel`/`pickLabel`);
    - `AffiliateNote` (4.4, readable color, Amazon sentence);
    - `ArticleCard` (no fake date);
    - `Header` with all panels rendered and hidden when closed (2.7), with `nav-menus.ts` data;
    - `Footer` with the Amazon sentence and link columns;
    - `SiteSearch` (6.4, niche synonyms);
    - `BlogFilter` and `BlogFilterFromUrl` (6.1);
    - `Guide` (5.4).
12. **Root layout:** `src/app/layout.tsx` (2.1, adapted), with the site graph, `next/font`, GA from `NEXT_PUBLIC_GA_ID` and `<Analytics />`. Optionally add `AffiliateClicks` (6.5).
13. **Content:**
    - write the first guides in `src/content/guides/<slug>.ts` (roundup pattern 5.1, comparison pattern 5.2, copy rules 5.5–5.9);
    - register each in `src/content/guides/index.ts`;
    - make each `ogImage` (1200×630, 300 KB or less) and each compressed hero.
14. **Routes:**
    - `src/app/blog/layout.tsx` (title template `%s`);
    - `src/app/blog/[slug]/page.tsx` (1.6);
    - `src/app/blog/page.tsx` (6.1, with the CollectionPage graph from 3.8);
    - the homepage with its own canonical and WebPage graph;
    - `about`, `contact`, `advertise`, `affiliate-disclosure` (with the Amazon program statement, 4.4), `privacy`, `terms`;
    - `not-found.tsx`.
15. **Discovery routes:** `src/app/sitemap.ts` (2.4, adapted), `src/app/robots.ts`, `src/app/search-index.json/route.ts` (6.4).
16. **IndexNow:**
    - generate a new key (2.6) and commit `public/<key>.txt`;
    - add `scripts/indexnow.mjs`.
17. **Validation script:** add `scripts/validate.mjs` (below).
18. **Vercel:**
    - import the GitHub repo;
    - set `NEXT_PUBLIC_GA_ID` for Production;
    - enable Web Analytics;
    - add the domain and choose the canonical host (apex or `www`, matching `SITE.url`; redirect the other);
    - verify the domain in Google Search Console and Bing Webmaster Tools, and submit `/sitemap.xml` in both.
19. **First publish:** pass the validation gate below, promote the preview to Production, then run `scripts/indexnow.mjs` with the new URLs.
20. **Ongoing:**
    - run `refresh.py` daily;
    - commit `products.json` when it changes;
    - replace unusable products before the next publish;
    - submit changed and new URLs to IndexNow;
    - add a 301 in `next.config.ts` with every slug change.

### 8.1 `scripts/validate.mjs` [NEW]

It runs against a local production server and fails (exit 1) on anything that would publish broken SEO, broken schema or a broken affiliate link. It has no dependencies (Node 20 `fetch`). Set `ORIGIN` and `TAG` to the values in `src/lib/site.ts` and `src/lib/affiliate.ts`.

```js
// Usage: npm run build && npx next start -p 3100 & sleep 5; node scripts/validate.mjs http://localhost:3100
import fs from "node:fs";
import path from "node:path";

const BASE = process.argv[2] ?? "http://localhost:3100";
const ORIGIN = "https://www.example.com"; // [NICHE] = SITE.url
const TAG = "yourtag-20"; // [NICHE] = AMAZON_TAG
const errors = [];
const fail = (where, msg) => errors.push(`${where}: ${msg}`);
const text = (s = "") =>
  s.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/\s+/g, " ").trim();
const is = (n, t) => n?.["@type"] === t || (Array.isArray(n?.["@type"]) && n["@type"].includes(t));

// ---- 1. Source rules ----
const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]));
for (const file of walk("src").filter((f) => /\.(ts|tsx)$/.test(f))) {
  const src = fs.readFileSync(file, "utf8");
  if (!file.endsWith(path.join("lib", "affiliate.ts")) && /[?&]tag=/.test(src)) fail(file, "Amazon tag outside src/lib/affiliate.ts");
  if (/application\/ld\+json/.test(src) && !/jsonLdHtml\(/.test(src)) fail(file, "JSON-LD printed without jsonLdHtml()");
  if (/fontFamily:\s*["'`][^"'`]*['"][A-Z]/.test(src)) fail(file, "font name in a component; use var(--font-sans|serif)");
  if (file.includes(path.join("src", "content")) && /\u2014/.test(src)) fail(file, "em dash in copy (house style)");
}

// ---- 2. Sitemap ----
const sitemap = await (await fetch(`${BASE}/sitemap.xml`)).text();
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const lastmods = [...sitemap.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)];
if (!urls.length) fail("sitemap", "no URLs");
if (lastmods.length !== urls.length) fail("sitemap", "every URL needs a lastmod");

const seen = new Map();
const exists = (u) => {
  if (!seen.has(u)) seen.set(u, fetch(u.replace(ORIGIN, BASE), { method: "HEAD" }).then((r) => r.ok).catch(() => false));
  return seen.get(u);
};

// ---- 3. Every page ----
for (const url of urls) {
  const res = await fetch(url.replace(ORIGIN, BASE), { redirect: "manual" });
  if (res.status !== 200) { fail(url, `HTTP ${res.status}`); continue; }
  const html = await res.text();
  const article = new URL(url).pathname.startsWith("/blog/");

  // Head
  const title = text(html.match(/<title>([\s\S]*?)<\/title>/)?.[1]);
  if (!title) fail(url, "no <title>");
  else if (article && title.length > 60) fail(url, `title is ${title.length} chars`);
  const desc = text(html.match(/<meta name="description" content="([^"]*)"/)?.[1]);
  if (desc.length < 70 || desc.length > 160) fail(url, `meta description is ${desc.length} chars`);
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (canonical !== url) fail(url, `canonical is ${canonical}`);
  const og = html.match(/<meta property="og:image" content="([^"]+)"/)?.[1];
  if (!og) fail(url, "no og:image");
  else if (og.startsWith(ORIGIN) && !(await exists(og))) fail(url, `og:image 404 ${og}`);
  if (/<meta name="robots" content="[^"]*noindex/.test(html)) fail(url, "noindex on a sitemap URL");

  // Headings and images
  const h1s = html.match(/<h1[\s>]/g)?.length ?? 0;
  if (h1s !== 1) fail(url, `${h1s} <h1> elements`);
  for (const img of html.match(/<img\b[^>]*>/g) ?? []) if (!/\salt="[^"]+"/.test(img)) fail(url, `image without alt: ${img.slice(0, 120)}`);

  // Links
  for (const m of html.matchAll(/<a\b[^>]*href="(https?:\/\/[^"]+)"[^>]*>/g)) {
    const href = m[1].replace(/&amp;/g, "&");
    const rel = m[0].match(/\srel="([^"]*)"/)?.[1] ?? "";
    if (/^https?:\/\/(www\.)?amazon\.[a-z.]+\//.test(href)) {
      if (!new URL(href).searchParams.get("tag")) fail(url, `untagged Amazon link ${href}`);
      else if (new URL(href).searchParams.get("tag") !== TAG) fail(url, `wrong tag ${href}`);
      if (!/\bsponsored\b/.test(rel) || !/\bnofollow\b/.test(rel)) fail(url, `Amazon link without rel="sponsored nofollow": ${href}`);
    }
  }

  // JSON-LD
  const nodes = [];
  const visit = (o) => {
    if (Array.isArray(o)) o.forEach(visit);
    else if (o && typeof o === "object") { nodes.push(o); Object.values(o).forEach(visit); }
  };
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { visit(JSON.parse(m[1])); } catch { fail(url, "JSON-LD does not parse"); }
  }
  const orgs = new Set(nodes.filter((n) => is(n, "Organization")).map((n) => n["@id"]));
  if (orgs.size !== 1 || !orgs.has(`${ORIGIN}/#organization`)) fail(url, `Organization @id(s): ${[...orgs].join(", ")}`);
  for (const n of nodes) {
    for (const k of ["url", "item", "@id", "mainEntityOfPage"]) if (typeof n[k] === "string" && n[k].startsWith("/")) fail(url, `relative ${k} ${n[k]}`);
    if (is(n, "ImageObject") && typeof n.url === "string" && n.url.startsWith(ORIGIN) && !(await exists(n.url))) fail(url, `schema image 404 ${n.url}`);
    if (is(n, "Review") || is(n, "AggregateRating") || n.reviewRating) fail(url, "Review/AggregateRating/reviewRating present (rule 3.9.7)");
  }
  for (const p of nodes.filter((n) => is(n, "Product"))) {
    const o = p.offers;
    if (!o || !/^\d+(\.\d+)?$/.test(String(o.price)) || Number(o.price) <= 0) fail(url, `Product "${p.name}": no valid offer price`);
    if (o && o.priceCurrency !== "USD") fail(url, `Product "${p.name}": priceCurrency ${o.priceCurrency}`);
    if (!/^https:\/\//.test(p.image ?? "")) fail(url, `Product "${p.name}": no image`);
    if (!p.brand?.name) fail(url, `Product "${p.name}": no brand`);
  }

  if (!article) continue;

  // Article graph
  for (const t of ["Article", "BreadcrumbList", "FAQPage"]) if (!nodes.some((n) => is(n, t))) fail(url, `no ${t}`);
  const art = nodes.find((n) => is(n, "Article"));
  if (art && !(art.dateModified >= art.datePublished)) fail(url, "dateModified before datePublished");

  // Visible ranks = ItemList positions and names
  const cards = [...html.matchAll(/data-rank="(\d+)" data-product="([^"]*)"/g)].map((m) => ({ rank: Number(m[1]), name: text(m[2]) }));
  const list = nodes.find((n) => is(n, "ItemList") && n.itemListElement?.some((li) => li.item || li.name));
  const names = (list?.itemListElement ?? []).map((li) => li.item?.name ?? li.name);
  if (cards.length !== names.length) fail(url, `${cards.length} product cards vs ${names.length} ItemList entries`);
  cards.forEach((c, i) => {
    if (c.rank !== i + 1) fail(url, `card "${c.name}" shows rank ${c.rank} at position ${i + 1}`);
    if (names[i] !== c.name) fail(url, `position ${i + 1}: page "${c.name}" vs schema "${names[i]}"`);
  });
  (list?.itemListElement ?? []).forEach((li, i) => { if (li.position !== i + 1) fail(url, `ItemList position ${li.position} at index ${i}`); });

  // Visible FAQ = FAQPage
  const vq = [...html.matchAll(/data-faq-q="true"[^>]*>([\s\S]*?)<\/h3>/g)].map((m) => text(m[1]));
  const va = [...html.matchAll(/data-faq-a="true"[^>]*>([\s\S]*?)<\/p>/g)].map((m) => text(m[1]));
  const faq = nodes.find((n) => is(n, "FAQPage"));
  const sq = (faq?.mainEntity ?? []).map((q) => text(q.name));
  const sa = (faq?.mainEntity ?? []).map((q) => text(q.acceptedAnswer?.text));
  if (vq.length < 3) fail(url, `${vq.length} visible FAQs`);
  if (JSON.stringify(vq) !== JSON.stringify(sq)) fail(url, "visible FAQ questions differ from FAQPage");
  if (JSON.stringify(va) !== JSON.stringify(sa)) fail(url, "visible FAQ answers differ from FAQPage");
}

if (errors.length) {
  console.error(errors.join("\n"));
  console.error(`\n${errors.length} problem(s) across ${urls.length} URLs`);
  process.exit(1);
}
console.log(`OK: ${urls.length} URLs passed`);
```

### 8.2 The validation gate: pass it before every publish

Run it on the exact commit you will promote. **Every item must pass.**

1. **Product data is fresh.** `python3 scripts/amazon/refresh.py` (with `AMZ_ID`, `AMZ_SECRET`) exits 0 the same day. If `products.json` changed, it is committed.
2. **Lint:** `npm run lint` has 0 errors.
3. **Types:** `npm run typecheck` has 0 errors.
4. **Build:** `npm run build` succeeds. Every article route is listed as static (`●` or `○`, never `ƒ`), and `/blog` is static. The build also fails, by design, on:
   - a guide missing from the registry;
   - an unknown ASIN, quick-pick id or related slug;
   - a typed price in pros, cons or specs.
5. **Validator:** `npx next start -p 3100` in the background, then `node scripts/validate.mjs http://localhost:3100` prints `OK`.
6. **Google's Rich Results Test on the Preview URL**, one page per template (one roundup, one comparison, the blog index, the homepage):
   - Product snippets and Breadcrumbs are detected;
   - "Merchant listings" shows **0 errors** (warnings about optional shipping or return fields are acceptable);
   - FAQ shows no errors.
7. **Desktop and mobile visual check** of every new or changed page on the Preview URL, at 1280px and 390px:
   - the top pick is on the first mobile screen;
   - product photos sit beside the text on desktop and above it on mobile;
   - tables scroll sideways rather than squeeze;
   - the mega menu opens and closes;
   - no horizontal page scroll.
8. **Spot-check three Amazon links** from the preview in a private window. Each lands on the named product (brand + model match) with `tag=` in the URL, at the price the page shows.
9. **Copy check** of new pages:
   - US English;
   - no em dashes;
   - brand + model on every product name;
   - no claim of testing that did not happen;
   - every number on the page comes from the listing, the brand or `products.json`.
10. **Publish:** promote the Preview to Production in Vercel. Then run `node scripts/indexnow.mjs <new and changed paths>` (with `INDEXNOW_KEY`) and confirm HTTP 200 or 202.
