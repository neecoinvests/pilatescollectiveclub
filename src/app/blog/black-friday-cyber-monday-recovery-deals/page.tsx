import type { Metadata } from "next";
import EquipmentGuide, { type EquipmentGuideProps } from "@/components/EquipmentGuide";
import { gift as catalogGift, type GiftKey } from "@/lib/giftCatalog";
import type { GuideItem } from "@/components/EquipmentGuide";
import { BF_DEALS_END, BF_DEALS_END_ISO, BF_PRICES_CHECKED, BF_PRICES_CHECKED_ISO } from "@/lib/blackFriday";

const SLUG = "black-friday-cyber-monday-recovery-deals";
const URL = `https://pilatescollectiveclub.com/blog/${SLUG}`;
const HERO = "/pictures/stitch-studio-bench-towels.png";
const TITLE = "Black Friday & Cyber Monday Recovery Deals (2026)";
const DESCRIPTION = "Normatec, Therabody JetBoots, Theragun, Hypervolt and HigherDOSE Black Friday and Cyber Monday deals live on Amazon, up to 21% off, with current prices.";

// Live Amazon prices and deals (Creators API, November 19, 2026). These override the gift catalog
// for this page only; the catalog itself keeps the prices its other pages were checked against.
const DEAL = { badge: "Black Friday Deal", endsIso: BF_DEALS_END_ISO };
const LIVE: Partial<Record<GiftKey, Partial<GuideItem>>> = {
  jetbootsPrime: { price: "$439.99", availability: "in-stock", wasPrice: "$549.99", wasLabel: "List", pctOff: 20, amazonDeal: DEAL },
  normatecHips: { price: "$524.00", availability: "in-stock", wasPrice: "$599.00", wasLabel: "List", pctOff: 13 },
  normatec3Legs: { price: "$719.00", availability: "in-stock", wasPrice: "$899.00", wasLabel: "List", pctOff: 20, amazonDeal: DEAL },
  normatec3Lower: { price: "$919.00", availability: "in-stock", wasPrice: "$1,149.00", wasLabel: "List", pctOff: 20, amazonDeal: DEAL },
  jetbootsProPlus: { price: "$919.99", availability: "in-stock", wasPrice: "$1,149.99", wasLabel: "List", pctOff: 20, amazonDeal: DEAL },
  normatec3Full: { price: "$1,299.00", availability: "in-stock", wasPrice: "$1,549.00", wasLabel: "List", pctOff: 16, amazonDeal: DEAL },
  thermBack: { price: "$259.99", availability: "in-stock", wasPrice: "$329.99", wasLabel: "List", pctOff: 21, amazonDeal: DEAL },
  hypervolt3Pro: { price: "$299.00", availability: "in-stock", wasPrice: "$349.00", wasLabel: "List", pctOff: 14 },
  theragunPrimePlus: { price: "$349.99", availability: "in-stock", wasPrice: "$429.99", wasLabel: "List", pctOff: 19, amazonDeal: DEAL },
  theragunProPlus: { price: "$549.99", availability: "in-stock", wasPrice: "$649.99", wasLabel: "List", pctOff: 15, amazonDeal: DEAL },
  higherdose: { price: "$559.20", availability: "in-stock", wasPrice: "$699.00", wasLabel: "List", pctOff: 20, amazonDeal: DEAL },
};
const gift = (key: GiftKey, overrides: Partial<GuideItem> & { badge: string }): GuideItem => ({ ...catalogGift(key, overrides), ...LIVE[key] });

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["normatec black friday", "theragun black friday", "cyber monday massage gun deals", "jetboots black friday", "recovery deals black friday 2026", "hypervolt cyber monday", "compression boots black friday", "higherdose sauna blanket black friday"],
  openGraph: { title: TITLE, description: DESCRIPTION, type: "article", url: URL, images: [{ url: `https://pilatescollectiveclub.com${HERO}`, width: 1200, height: 630, alt: "Towels on a studio bench" }] },
  twitter: { card: "summary_large_image", title: "Black Friday & Cyber Monday Recovery Deals 2026", description: DESCRIPTION, images: [`https://pilatescollectiveclub.com${HERO}`] },
  alternates: { canonical: URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const GUIDE: EquipmentGuideProps = {
  slug: SLUG,
  title: TITLE,
  description: DESCRIPTION,
  breadcrumb: "Recovery Deals",
  eyebrow: "Black Friday & Cyber Monday 2026",
  eyebrowAccent: "Recovery",
  h1: "Black Friday & Cyber Monday",
  h1Accent: "Recovery Deals 2026: Live Now",
  readTime: "11 min read",
  updatedLabel: `Prices checked ${BF_PRICES_CHECKED}`,
  datePublished: "2026-10-20",
  dateModified: BF_PRICES_CHECKED_ISO,
  heroImage: HERO,
  heroAlt: "Folded towels on a bench in a Pilates studio",
  heroCaption: "Compression boots · Massage guns · Heat therapy",
  intro: [
    "Recovery tech is one of the most popular categories every Black Friday (November 27) and Cyber Monday (November 30), and the prices are high enough that a discount really matters.",
    `Amazon's Black Friday deals are live through ${BF_DEALS_END}. Here are 11 premium recovery products from Hyperice, Therabody and HigherDOSE with their Amazon price on ${BF_PRICES_CHECKED}: nine are on an Amazon Black Friday Deal, at 15% to 21% off the list price Amazon shows.`,
  ],
  quickPicks: [
    { label: "Best compression boots", itemId: "hyperice-normatec-3-legs" },
    { label: "Best value boots", itemId: "therabody-jetboots-prime" },
    { label: "Best massage gun", itemId: "therabody-theragun-pro-plus" },
    { label: "Best Hyperice massage gun", itemId: "hyperice-hypervolt-3-pro" },
    { label: "Best wellness splurge", itemId: "higherdose-infrared-sauna-blanket" },
  ],
  blocks: [
    {
      kind: "table",
      eyebrow: "At a glance",
      heading: "Every recovery deal, by price",
      columns: ["Product", "Price now", "List price", "Saving"],
      rows: [
        ["Therabody ThermBack LED", "$259.99", "$329.99", "21% (Black Friday Deal)"],
        ["Hyperice Hypervolt 3 Pro", "$299.00", "$349.00", "14%"],
        ["Therabody Theragun Prime Plus", "$349.99", "$429.99", "19% (Black Friday Deal)"],
        ["Therabody JetBoots Prime", "$439.99", "$549.99", "20% (Black Friday Deal)"],
        ["Hyperice Normatec Elite Hips", "$524.00", "$599.00", "13%"],
        ["Therabody Theragun PRO Plus", "$549.99", "$649.99", "15% (Black Friday Deal)"],
        ["HigherDOSE Infrared Sauna Blanket", "$559.20", "$699.00", "20% (Black Friday Deal)"],
        ["Hyperice Normatec 3 Legs", "$719.00", "$899.00", "20% (Black Friday Deal)"],
        ["Hyperice Normatec 3 Lower Body", "$919.00", "$1,149.00", "20% (Black Friday Deal)"],
        ["Therabody JetBoots PRO Plus", "$919.99", "$1,149.99", "20% (Black Friday Deal)"],
        ["Hyperice Normatec 3 Full Body", "$1,299.00", "$1,549.00", "16% (Black Friday Deal)"],
      ],
      note: `Amazon prices, list prices and deal badges checked on ${BF_PRICES_CHECKED}. Amazon's Black Friday deals run through ${BF_DEALS_END}.`,
    },
    {
      kind: "products",
      id: "boots",
      eyebrow: "Compression",
      heading: "Compression boots and wraps",
      items: [
        gift("jetbootsPrime", { badge: "Best Value Boots", pros: ["Wireless", "Folds into a backpack"], cons: ["Choose the right inseam size"] }),
        gift("normatecHips", { badge: "Best for Hips & Back", pros: ["Cordless", "Up to 4 hours of battery"], cons: ["Hips and lower back only"] }),
        gift("normatec3Legs", { badge: "Best Compression Boots", pros: ["The original system", "7 levels"], cons: ["Hose to a control unit"] }),
        gift("normatec3Lower", { badge: "Legs + Hips", pros: ["Hip attachment included"], cons: ["Hose to a control unit"] }),
        gift("jetbootsProPlus", { badge: "Most Advanced Boots", pros: ["Compression, vibration and light"], cons: ["The priciest boots here"] }),
        gift("normatec3Full", { badge: "The Complete System", pros: ["Legs, arms and hips"], cons: ["The most expensive Normatec setup here"] }),
      ],
    },
    {
      kind: "products",
      id: "massage",
      eyebrow: "Percussion and heat",
      heading: "Massage guns and heat therapy",
      items: [
        gift("thermBack", { badge: "Best for Lower Back", pros: ["Heat, infrared, LED and vibration"], cons: ["Lower back only"] }),
        gift("hypervolt3Pro", { badge: "Best Hyperice Massage Gun", pros: ["Heated head attachment", "4-hour battery"], cons: ["2.5 lb"] }),
        gift("theragunPrimePlus", { badge: "Best Heated Theragun", pros: ["3 heat levels"], cons: ["4 attachments"] }),
        gift("theragunProPlus", { badge: "Best Massage Gun", pros: ["Heat and vibration on top of percussion"], cons: ["Cold attachment sold separately"] }),
        gift("higherdose", { badge: "Best Wellness Splurge", pros: ["Home sauna sessions", "9 heat levels"], cons: ["Sold by a third-party seller (FRONT ROW)"] }),
      ],
    },
    {
      kind: "cards",
      eyebrow: "Before you buy",
      heading: "How to spot a real recovery deal",
      cards: [
        { h: "Know what the saving is measured against", b: "The savings here are against the list price Amazon shows, which is set by the seller. Treat it as a guide and compare a few days of prices if you can." },
        { h: "Check the version", b: "Normatec 3 and Normatec Elite are different products, and Theragun has several generations. Make sure the deal is for the model you want." },
        { h: "Check the size", b: "JetBoots come in inseam sizes. A deal on the wrong size is no deal." },
        { h: "Check returns", b: "Amazon usually extends holiday returns on many items bought from November. Confirm on the listing, especially for gifts." },
      ],
    },
  ],
  faqs: [
    { q: "Is Normatec on sale for Black Friday?", a: `Yes. On ${BF_PRICES_CHECKED}, Amazon had the Normatec 3 Legs at $719 (20% off its $899 list price), the Normatec 3 Lower Body at $919 and the Full Body at $1,299, all as Black Friday Deals running through ${BF_DEALS_END}.` },
    { q: "Which Theragun should I buy on Black Friday?", a: `The Theragun PRO Plus ($549.99, 15% off on ${BF_PRICES_CHECKED}) is the most advanced, with heat and vibration on top of percussion. The Prime Plus ($349.99, 19% off) adds heat at a lower price. Both are Amazon Black Friday Deals.` },
    { q: "Normatec or JetBoots?", a: `Normatec 3 Legs ($719 on ${BF_PRICES_CHECKED}) is the original air-compression system with 7 levels. JetBoots Prime ($439.99) is wireless and portable. JetBoots PRO Plus ($919.99) adds vibration and light therapy. All three are on a Black Friday Deal.` },
    { q: "When are Black Friday and Cyber Monday 2026?", a: `Black Friday is Friday, November 27, 2026 and Cyber Monday is Monday, November 30, 2026. Amazon's Black Friday deals started on November 19 and run through ${BF_DEALS_END}.` },
  ],
  related: [
    { title: "Luxury Recovery Christmas Gifts", excerpt: "The same products as Christmas gifts, compared.", href: "/blog/luxury-recovery-christmas-gifts-for-pilates", imageUrl: "/pictures/stitch-studio-bench-towels.png", category: "Gifts", readTime: "11 min read" },
    { title: "Black Friday & Cyber Monday Studio Reformer Deals", excerpt: "Balanced Body, Merrithew and Align: current prices.", href: "/blog/black-friday-cyber-monday-studio-reformer-deals", imageUrl: "/pictures/stitch-reformers-aerial-row.png", category: "Deals", readTime: "Deals" },
    { title: "Pilates Black Friday Deals 2026", excerpt: "The Black Friday hub.", href: "/blog/black-friday-pilates-deals", imageUrl: "/pictures/stitch-luxury-studio-wide.png", category: "Deals", readTime: "Deals" },
    { title: "Best Massage Gun for Pilates", excerpt: "Massage guns compared for Pilates recovery.", href: "/blog/best-massage-gun-for-pilates", imageUrl: "/pictures/stitch-studio-shelf-props.png", category: "Recovery", readTime: "9 min read" },
  ],
  ctaTitle: "Find a studio near you",
  ctaSubtitle: "Use our curated city guides to find the best Pilates studios worldwide.",
};

export default function Page() {
  return <EquipmentGuide {...GUIDE} />;
}
