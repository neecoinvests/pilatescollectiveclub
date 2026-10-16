import type { Metadata } from "next";
import EquipmentGuide, { type EquipmentGuideProps } from "@/components/EquipmentGuide";
import { item } from "@/lib/reformerCatalog";
import { gift, GIFTS_CHECKED, GIFTS_CHECKED_ISO } from "@/lib/giftCatalog";

const SLUG = "pilates-christmas-gifts-over-500";
const URL = `https://pilatescollectiveclub.com/blog/${SLUG}`;
const HERO = "/pictures/stitch-luxury-studio-wide.png";
const TITLE = "Pilates Christmas Gifts Over $500 (2026): 16 Splurge Gifts";
const DESCRIPTION = "16 splurge Pilates Christmas gifts from $529.99 to $3,349: home reformers, the Lagree Micro, Normatec boots, Theragun, a sauna blanket and indoor bikes.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["luxury pilates christmas gifts over 500", "pilates christmas gifts over 500", "luxury pilates christmas gifts", "splurge gifts for pilates lovers", "expensive pilates gifts", "home reformer christmas gift", "normatec christmas gift", "best luxury fitness gifts 2026", "big christmas gifts for her fitness"],
  openGraph: { title: TITLE, description: DESCRIPTION, type: "article", url: URL, images: [{ url: `https://pilatescollectiveclub.com${HERO}`, width: 1200, height: 630, alt: "A light-filled Pilates studio" }] },
  twitter: { card: "summary_large_image", title: "Pilates Christmas Gifts Over $500 (2026)", description: DESCRIPTION, images: [`https://pilatescollectiveclub.com${HERO}`] },
  alternates: { canonical: URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const GUIDE: EquipmentGuideProps = {
  slug: SLUG,
  title: TITLE,
  description: DESCRIPTION,
  breadcrumb: "Pilates Christmas Gifts Over $500",
  eyebrow: "Christmas 2026",
  eyebrowAccent: "Splurge Gifts",
  h1: "Pilates Christmas Gifts Over $500",
  h1Accent: "(2026): 16 Splurge Gifts",
  readTime: "12 min read",
  updatedLabel: `Prices checked ${GIFTS_CHECKED}`,
  datePublished: "2026-10-15",
  dateModified: GIFTS_CHECKED_ISO,
  heroImage: HERO,
  heroAlt: "A light-filled Pilates studio at sunset",
  heroCaption: "Reformers · Recovery · Lagree · Indoor bikes",
  intro: [
    "Some Christmases call for the big gift: the one that changes how someone trains for years, not weeks. For a Pilates lover that means a reformer of their own, a Lagree machine, or the kind of recovery kit you usually only find in a sports clinic.",
    "Here are 16 gifts from $529.99 to $3,349, all on Amazon with the price and stock we checked today. Every one is something a serious Pilates practitioner will use several times a week.",
  ],
  quickPicks: [
    { label: "Best reformer gift", itemId: "align-c8-pro" },
    { label: "Best reformer under $1,000", itemId: "paeta-wooden-foldable-reformer" },
    { label: "Best Lagree gift", itemId: "lagree-micro" },
    { label: "Best recovery gift", itemId: "hyperice-normatec-3-legs" },
    { label: "Best massage gun", itemId: "therabody-theragun-pro-plus" },
  ],
  blocks: [
    {
      kind: "table",
      eyebrow: "At a glance",
      heading: "Splurge gifts by budget",
      columns: ["Budget", "Best gifts", "Best for"],
      rows: [
        ["$500 to $1,000", "Theragun PRO, Theragun PRO Plus, Normatec Elite Hips, JetBoots Prime, HigherDOSE sauna blanket, PAETA wooden reformer, Schwinn IC4, Lagree Micro, Normatec 3 Legs", "Recovery lovers, first home machine"],
        ["$1,000 to $2,000", "Normatec Elite, Echelon Smart Connect, DELAVIN reformer with tower", "Daily trainers, home cardio"],
        ["$2,000 and up", "Balanced Body Metro IQ, PersonalHour Janet La Force Plus, Align-Pilates C8-PRO, Merrithew At Home SPX", "Studio regulars ready for their own reformer"],
      ],
      note: `Prices are Amazon prices checked on ${GIFTS_CHECKED} and can change before Christmas.`,
    },
    {
      kind: "products",
      id: "reformers",
      eyebrow: "The ultimate gift",
      heading: "Home reformers",
      intro: "A reformer at home is the gift most Pilates lovers secretly want. Check room dimensions and the delivery estimate before you buy.",
      items: [
        gift("paetaWoodFold", { badge: "Best Under $1,000", pros: ["Solid oak frame", "Folds away", "Sitting box included"], cons: ["Newer brand than the studio names"] }),
        item("delavinTower", { badge: "Best with a Tower", pros: ["Reformer and tower in one", "Solid wood frame", "In stock"], cons: ["287 lb and tall: needs a dedicated spot"] }),
        item("metroIQ", { badge: "Best for Small Homes", pros: ["Telescopes from 98\" to 62\" for storage", "Balanced Body Signature Springs", "85 lb"], cons: ["Low stock"] }),
        item("janetLaForce", { badge: "Most Beautiful", pros: ["Solid walnut", "Folds upright on wheels", "Jumpboard and box included"], cons: ["Low stock"] }),
        item("alignC8Pro", { badge: "Best Reformer Gift", pros: ["Same springs as Align's professional reformers", "Stackable, optional leg extensions", "In stock"], cons: ["Low bed without the leg extensions"] }),
        item("spxHome", { badge: "Best Complete Package", pros: ["Box, roll-up pole, platform extender and straps included", "Sold and shipped by Amazon.com"], cons: ["Low frame height"] }),
      ],
    },
    {
      kind: "products",
      id: "machines",
      eyebrow: "Beyond the reformer",
      heading: "Lagree and indoor cycling",
      items: [
        gift("lagreeMicro", { badge: "Best Lagree Gift", pros: ["Megaformer-style workout at home", "Stores under a bed or against a wall"], cons: ["Add-ons sold separately"] }),
        gift("schwinnIC4", { badge: "Best Value Bike", pros: ["Works with Peloton and Zwift apps", "Sold by Amazon.com"], cons: ["No built-in screen"] }),
        gift("echelon", { badge: "Best Connected Bike", pros: ["22\" rotating touchscreen", "32 motorized resistance levels"], cons: ["Membership needed after the trial"] }),
      ],
    },
    {
      kind: "products",
      id: "recovery",
      eyebrow: "Luxury recovery",
      heading: "Recovery gifts",
      items: [
        gift("theragunPro", { badge: "Classic Massage Gun", pros: ["6 attachments", "Built-in routines"], cons: ["Ships at a later date: check the listing"] }),
        gift("jetbootsPrime", { badge: "Best Value Boots", pros: ["Wireless", "Folds into a backpack"], cons: ["Choose the right inseam size"] }),
        gift("normatecHips", { badge: "Best for Hips & Back", pros: ["Cordless", "Up to 4 hours of battery"], cons: ["Hips and lower back only"] }),
        gift("theragunProPlus", { badge: "Best Massage Gun", pros: ["Heat and vibration on top of percussion"], cons: ["Cold attachment sold separately"] }),
        gift("higherdose", { badge: "Best Wellness Splurge", pros: ["Home sauna, no installation", "9 heat levels"], cons: ["Low stock"] }),
        gift("normatec3Legs", { badge: "Best Recovery Gift", pros: ["The original air-compression boots", "7 levels"], cons: ["Needs floor or sofa space to use"] }),
        gift("normatecElite", { badge: "Best Wireless Normatec", pros: ["Hose-free", "Synchronised legs"], cons: ["Costs more than Normatec 3"] }),
      ],
    },
    {
      kind: "callout",
      eyebrow: "Before you buy",
      heading: "Will it arrive by Christmas?",
      body: [
        "Most gifts here are in stock. A few are marked low stock, so do not leave them late.",
        "Check the delivery estimate on the listing before you order, especially for reformers, which are large and heavy.",
        "For boots and rings, sizing matters: JetBoots come in inseam sizes. If unsure, check the holiday returns window on the listing.",
      ],
    },
  ],
  faqs: [
    { q: "What is the best expensive gift for a Pilates lover?", a: "A home reformer is the gift most Pilates lovers want. The Align-Pilates C8-PRO ($2,750) uses the same springs as Align's professional reformers; for under $1,000, the PAETA wooden foldable reformer is $699.98. For recovery, Normatec 3 Legs boots are $899." },
    { q: "Is a home reformer a good Christmas gift?", a: "For someone who takes classes several times a week and has the space, yes. Measure the room, check the delivery date, and choose a foldable or telescoping model if space is tight." },
    { q: "Normatec or Therabody JetBoots?", a: "Normatec 3 Legs ($899) is the original air-compression system with 7 levels. JetBoots Prime ($549.99) is wireless and more portable at a lower price. JetBoots PRO Plus ($1,149.99) adds vibration and light therapy." },
    { q: "Is the Lagree Micro worth it as a gift?", a: "For a Lagree regular, yes: it brings the Megaformer-style workout home for $990 and stores under a bed or against a wall. The rear platform, handlebars and cables are sold separately." },
    { q: "Are these prices final?", a: `They are the Amazon prices we checked on ${GIFTS_CHECKED}. Prices often drop around Black Friday (November 27) and Cyber Monday (November 30), so it can pay to wait if delivery time allows.` },
  ],
  related: [
    { title: "Home Pilates Studio Christmas Gift", excerpt: "Reformers with towers, Cadillacs and studio apparatus.", href: "/blog/home-pilates-studio-christmas-gift", imageUrl: "/pictures/stitch-reformer-row-studio.png", category: "Gifts", readTime: "12 min read" },
    { title: "Luxury Recovery Christmas Gifts", excerpt: "Normatec, JetBoots, Theragun and more.", href: "/blog/luxury-recovery-christmas-gifts-for-pilates", imageUrl: "/pictures/stitch-studio-bench-towels.png", category: "Gifts", readTime: "11 min read" },
    { title: "Home Workout Machine Christmas Gifts", excerpt: "Reformer, Lagree Micro or indoor bike?", href: "/blog/best-home-workout-machine-christmas-gift", imageUrl: "/pictures/stitch-reformer-spring-detail.png", category: "Gifts", readTime: "11 min read" },
    { title: "Best Pilates Christmas Gifts", excerpt: "Our main Christmas gift guide at every budget.", href: "/blog/best-pilates-christmas-gifts", imageUrl: "/pictures/stitch-props-cork-ring.png", category: "Gifts", readTime: "9 min read" },
  ],
  ctaTitle: "Find a studio near you",
  ctaSubtitle: "Use our curated city guides to find the best Pilates studios worldwide.",
};

export default function Page() {
  return <EquipmentGuide {...GUIDE} />;
}
