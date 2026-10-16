import type { Metadata } from "next";
import EquipmentGuide, { type EquipmentGuideProps } from "@/components/EquipmentGuide";
import { gift, GIFTS_CHECKED, GIFTS_CHECKED_ISO } from "@/lib/giftCatalog";

const SLUG = "black-friday-cyber-monday-recovery-deals";
const URL = `https://pilatescollectiveclub.com/blog/${SLUG}`;
const HERO = "/pictures/stitch-studio-bench-towels.png";
const TITLE = "Black Friday & Cyber Monday Recovery Deals 2026: Price to Beat";
const DESCRIPTION = "Normatec, Therabody JetBoots, Theragun, Hypervolt and HigherDOSE deals to watch this Black Friday and Cyber Monday, with today's Amazon price to beat for each.";

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
  h1Accent: "Recovery Deals 2026: Price to Beat",
  readTime: "11 min read",
  updatedLabel: `Prices checked ${GIFTS_CHECKED}`,
  datePublished: GIFTS_CHECKED_ISO,
  dateModified: GIFTS_CHECKED_ISO,
  heroImage: HERO,
  heroAlt: "Folded towels on a bench in a Pilates studio",
  heroCaption: "Compression boots · Massage guns · Heat therapy",
  intro: [
    "Recovery tech is one of the most popular categories every Black Friday (November 27) and Cyber Monday (November 30), and the prices are high enough that a discount really matters.",
    "Here are 13 premium recovery products from Hyperice, Therabody and HigherDOSE, each with the Amazon price we checked today. Use it as your baseline: a real deal beats it. We will update the page as deals go live.",
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
      eyebrow: "The watchlist",
      heading: "Price to beat on every recovery product",
      columns: ["Product", "Price today", "Availability"],
      rows: [
        ["Therabody ThermBack LED", "$329.99", "In stock"],
        ["Hyperice Hypervolt 3 Pro", "$349.00", "In stock"],
        ["Therabody Theragun Prime Plus", "$429.99", "In stock"],
        ["Therabody Theragun PRO (5th Gen)", "$529.99", "Ships later"],
        ["Therabody JetBoots Prime", "$549.99", "In stock"],
        ["Hyperice Normatec Elite Hips", "$599.00", "In stock"],
        ["Therabody Theragun PRO Plus", "$649.99", "In stock"],
        ["HigherDOSE Infrared Sauna Blanket", "$699.00", "Low stock"],
        ["Hyperice Normatec 3 Legs", "$899.00", "In stock"],
        ["Hyperice Normatec Elite", "$1,099.00", "In stock"],
        ["Hyperice Normatec 3 Lower Body", "$1,149.00", "In stock"],
        ["Therabody JetBoots PRO Plus", "$1,149.99", "In stock"],
        ["Hyperice Normatec 3 Full Body", "$1,549.00", "In stock"],
      ],
      note: `Amazon prices and availability checked on ${GIFTS_CHECKED}.`,
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
        gift("normatecElite", { badge: "Best Wireless Normatec", pros: ["Hose-free", "Synchronised legs"], cons: ["Costs more than Normatec 3"] }),
        gift("normatec3Lower", { badge: "Legs + Hips", pros: ["Hip attachment included"], cons: ["$1,149"] }),
        gift("jetbootsProPlus", { badge: "Most Advanced Boots", pros: ["Compression, vibration and light"], cons: ["The priciest boots here"] }),
        gift("normatec3Full", { badge: "The Complete System", pros: ["Legs, arms and hips"], cons: ["$1,549"] }),
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
        gift("theragunPro", { badge: "Classic Theragun", pros: ["6 attachments", "Built-in routines"], cons: ["Ships at a later date: check the listing"] }),
        gift("theragunProPlus", { badge: "Best Massage Gun", pros: ["Heat and vibration on top of percussion"], cons: ["Cold attachment sold separately"] }),
        gift("higherdose", { badge: "Best Wellness Splurge", pros: ["Home sauna sessions", "9 heat levels"], cons: ["Low stock"] }),
      ],
    },
    {
      kind: "cards",
      eyebrow: "Before you buy",
      heading: "How to spot a real recovery deal",
      cards: [
        { h: "Compare to today's price", b: "Recovery products often show a high 'list price'. Compare any deal with the price in our table, not the crossed-out number." },
        { h: "Check the version", b: "Normatec 3 and Normatec Elite are different products, and Theragun has several generations. Make sure the deal is for the model you want." },
        { h: "Check the size", b: "JetBoots come in inseam sizes. A deal on the wrong size is no deal." },
        { h: "Check returns", b: "Amazon usually extends holiday returns on many items bought from November. Confirm on the listing, especially for gifts." },
      ],
    },
  ],
  faqs: [
    { q: "Does Normatec go on sale for Black Friday?", a: "Recovery products, including compression boots, are popular holiday deals. Compare any Black Friday or Cyber Monday price with today's prices in our table: Normatec 3 Legs is $899 and Normatec Elite $1,099." },
    { q: "Which Theragun should I buy on Black Friday?", a: "The Theragun PRO Plus ($649.99 today) is the most advanced; the Theragun PRO 5th Gen ($529.99) is the classic professional model; the Prime Plus ($429.99) adds heat at a lower price." },
    { q: "Normatec or JetBoots?", a: "Normatec 3 Legs ($899) is the original air-compression system with 7 levels. JetBoots Prime ($549.99) is wireless and portable. JetBoots PRO Plus ($1,149.99) adds vibration and light therapy." },
    { q: "When are Black Friday and Cyber Monday 2026?", a: "Black Friday is Friday, November 27, 2026 and Cyber Monday is Monday, November 30, 2026." },
  ],
  related: [
    { title: "Luxury Recovery Christmas Gifts", excerpt: "The same products as Christmas gifts, compared.", href: "/blog/luxury-recovery-christmas-gifts-for-pilates", imageUrl: "/pictures/stitch-studio-bench-towels.png", category: "Gifts", readTime: "11 min read" },
    { title: "Black Friday & Cyber Monday Studio Reformer Deals", excerpt: "Balanced Body, Merrithew and Align: prices to beat.", href: "/blog/black-friday-cyber-monday-studio-reformer-deals", imageUrl: "/pictures/stitch-reformers-aerial-row.png", category: "Deals", readTime: "Deals" },
    { title: "Pilates Black Friday Deals 2026", excerpt: "The Black Friday hub.", href: "/blog/black-friday-pilates-deals", imageUrl: "/pictures/stitch-luxury-studio-wide.png", category: "Deals", readTime: "Deals" },
    { title: "Best Massage Gun for Pilates", excerpt: "Massage guns compared for Pilates recovery.", href: "/blog/best-massage-gun-for-pilates", imageUrl: "/pictures/stitch-studio-shelf-props.png", category: "Recovery", readTime: "9 min read" },
  ],
  ctaTitle: "Find a studio near you",
  ctaSubtitle: "Use our curated city guides to find the best Pilates studios worldwide.",
};

export default function Page() {
  return <EquipmentGuide {...GUIDE} />;
}
