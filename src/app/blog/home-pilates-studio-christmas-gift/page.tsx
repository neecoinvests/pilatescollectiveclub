import type { Metadata } from "next";
import EquipmentGuide, { type EquipmentGuideProps } from "@/components/EquipmentGuide";
import { item } from "@/lib/reformerCatalog";
import { GIFTS_CHECKED, GIFTS_CHECKED_ISO } from "@/lib/giftCatalog";

const SLUG = "home-pilates-studio-christmas-gift";
const URL = `https://pilatescollectiveclub.com/blog/${SLUG}`;
const HERO = "/pictures/stitch-reformer-row-studio.png";
const TITLE = "Home Pilates Studio Christmas Gift (2026): Reformers";
const DESCRIPTION = "The ultimate Pilates Christmas gift: a home studio. Reformers with towers, a Cadillac, barrel and chair from Balanced Body and Merrithew, with live prices.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["home pilates studio christmas gift", "pilates reformer christmas gift", "home pilates studio gift", "pilates reformer with tower gift", "balanced body christmas gift", "pilates cadillac for home", "home pilates studio equipment", "luxury pilates christmas gift", "reformer tower christmas", "pilates apparatus for home"],
  openGraph: { title: TITLE, description: DESCRIPTION, type: "article", url: URL, images: [{ url: `https://pilatescollectiveclub.com${HERO}`, width: 1200, height: 630, alt: "Reformers in a Pilates studio" }] },
  twitter: { card: "summary_large_image", title: "Home Pilates Studio Christmas Gift (2026): Reformers & Towers", description: DESCRIPTION, images: [`https://pilatescollectiveclub.com${HERO}`] },
  alternates: { canonical: URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const GUIDE: EquipmentGuideProps = {
  slug: SLUG,
  title: TITLE,
  description: DESCRIPTION,
  breadcrumb: "Home Pilates Studio Christmas Gift",
  eyebrow: "Christmas 2026",
  eyebrowAccent: "The Ultimate Gift",
  h1: "The Ultimate Home Pilates Studio",
  h1Accent: "Christmas Gift (2026): Reformers & Towers",
  readTime: "12 min read",
  updatedLabel: `Prices checked ${GIFTS_CHECKED}`,
  datePublished: "2026-10-15",
  dateModified: GIFTS_CHECKED_ISO,
  heroImage: HERO,
  heroAlt: "A row of Pilates reformers in a studio",
  heroCaption: "Reformer + tower · Cadillac · Barrel · Chair",
  intro: [
    "For the person whose Pilates practice has outgrown the studio timetable, the ultimate gift is a studio of their own: a reformer with a tower, or a full set of classical apparatus, in a spare room at home.",
    "This guide covers the studio-grade machines sold on Amazon, mostly from Balanced Body, with the price and lead time we checked today. Most are made to order, so they will not all arrive by Christmas. Many people wrap a photo or a card and let the machine follow.",
  ],
  quickPicks: [
    { label: "Best reformer with tower", itemId: "balanced-body-studio-reformer-tower" },
    { label: "Best value reformer + tower", itemId: "balanced-body-rialto-tower" },
    { label: "Best for tall users", itemId: "balanced-body-allegro-stretch-tower" },
    { label: "Best Cadillac", itemId: "balanced-body-cadillac" },
    { label: "Best budget tower setup", itemId: "paeta-wood-reformer-tower" },
  ],
  blocks: [
    {
      kind: "table",
      eyebrow: "Plan the room",
      heading: "Four home studio set-ups and what they cost",
      columns: ["Set-up", "Apparatus", "Total"],
      rows: [
        ["Budget tower set-up", "PAETA Wooden Reformer with Tower", "$1,299.99"],
        ["Starter home studio", "Balanced Body Rialto with Tower $4,230 + EXO Chair $1,255", "$5,485"],
        ["Classical home studio", "Studio Reformer with Tower $6,975 + Ladder Barrel $2,195 + EXO Chair $1,255", "$10,425"],
        ["Full apparatus room", "Studio Reformer (Revo) $4,700 + Cadillac $5,030 + Ladder Barrel $2,195 + EXO Chair $1,255", "$13,180"],
      ],
      note: `Amazon prices checked on ${GIFTS_CHECKED}. Excludes shipping and tax. Balanced Body machines are made to order.`,
    },
    {
      kind: "products",
      id: "reformer-tower",
      eyebrow: "Reformer + tower",
      heading: "Reformers with towers",
      intro: "A tower adds Cadillac-style springs and bars to a reformer, opening up much more of the repertoire in one footprint.",
      items: [
        item("paetaTower", { badge: "Best Budget Tower Set-Up", pros: ["Oak frame, tower and converter mat", "Box and jumpboard included", "In stock"], cons: ["Newer brand", "Ships in three boxes"] }),
        item("rialtoTower", { badge: "Best Value Reformer + Tower", pros: ["Tower with 29 spring-attachment points", "Maple frame", "180 lb"], cons: ["Made to order"] }),
        item("allegroStretchTower", { badge: "Best for Tall Users", pros: ["Longer, wider carriage", "Drop-in mat conversion"], cons: ["Made to order", "251 lb"] }),
        item("studioTower", { badge: "Best Reformer with Tower", pros: ["Strata Rock Maple reformer", "Stainless steel tower; twin conversion mats", "Sitting box included"], cons: ["78\" high: check the ceiling", "341 lb"] }),
      ],
    },
    {
      kind: "products",
      id: "apparatus",
      eyebrow: "Classical apparatus",
      heading: "Cadillac, barrel and chair",
      items: [
        item("exoChair", { badge: "Best First Apparatus", pros: ["Compact and stackable", "55 lb"], cons: ["Single pedal"] }),
        item("ladderBarrel", { badge: "Best Barrel", pros: ["Single-pedal ladder adjustment"], cons: ["Made to order"] }),
        item("cadillac", { badge: "Best Cadillac", pros: ["12 Signature Springs", "Made in the USA"], cons: ["87\" tall with canopy", "Made to order"] }),
      ],
    },
    {
      kind: "products",
      id: "rehab",
      eyebrow: "For clinics and serious home studios",
      heading: "Merrithew and premium wood",
      items: [
        item("nanoElitePlus", { badge: "Best Premium Wood", pros: ["2\" layered maple frame", "Box and jumpboard included"], cons: ["290 lb", "Made to order"] }),
        item("v2MaxPlus", { badge: "Best Rehab Reformer", pros: ["Raised frame for easier transfers", "Vertical Frame for tower-style work"], cons: ["$8,199", "Made to order"] }),
      ],
    },
    {
      kind: "cards",
      eyebrow: "Before you buy",
      heading: "Five things to check",
      cards: [
        { h: "Ceiling height", b: "Towers and the Cadillac are tall: the Studio Reformer with Tower lists at 78\" and the Cadillac at 87\" with its canopy." },
        { h: "Floor and access", b: "These machines are heavy (the Studio Reformer with Tower lists at 341 lb). Measure doorways, stairs and turns before ordering." },
        { h: "Lead time", b: "Most Balanced Body machines are made to order. Check the delivery estimate and plan a 'gift card' reveal if it will arrive after Christmas." },
        { h: "Who will use it", b: "Tall users should look at the Allegro Stretch; people who need an easier transfer should look at a raised frame like the V2 Max Plus." },
        { h: "Room to grow", b: "A Rialto can take a tower later with Balanced Body's retrofit kit, so you can start with the reformer and add on." },
      ],
    },
  ],
  faqs: [
    { q: "How much does a home Pilates studio cost?", a: `Using Amazon prices checked on ${GIFTS_CHECKED}: a Balanced Body Rialto with Tower and an EXO Chair cost $5,485; a Studio Reformer with Tower, Ladder Barrel and EXO Chair cost $10,425. A wooden reformer with tower from PAETA is $1,299.99.` },
    { q: "Will a Balanced Body reformer arrive before Christmas?", a: "Most Balanced Body machines on Amazon are made to order and ship after a lead time, so check the delivery estimate on the listing. Many people give a card or photo on Christmas Day and let the machine follow." },
    { q: "What is a reformer with a tower?", a: "A reformer with an upright frame at one end that adds springs, a push-through bar and a roll-down bar, giving Cadillac-style exercises without a separate Cadillac." },
    { q: "Do I need a Cadillac at home?", a: "Not usually. A reformer with a tower covers much of the same work in less space. A Cadillac suits a dedicated studio room or someone training in the classical method." },
  ],
  related: [
    { title: "Pilates Christmas Gifts Over $500", excerpt: "16 splurge gifts, from reformers to recovery.", href: "/blog/pilates-christmas-gifts-over-500", imageUrl: "/pictures/stitch-luxury-studio-wide.png", category: "Gifts", readTime: "12 min read" },
    { title: "Best Pilates Reformer Under $5,000", excerpt: "Studio machines compared.", href: "/blog/best-pilates-reformer-under-5000", imageUrl: "/pictures/stitch-reformer-row-studio.png", category: "Equipment", readTime: "15 min read" },
    { title: "Wood vs Aluminium Pilates Reformer", excerpt: "Which frame suits your home.", href: "/blog/wood-vs-aluminium-pilates-reformer", imageUrl: "/pictures/stitch-white-reformer-plaster.png", category: "Equipment", readTime: "11 min read" },
    { title: "Best Pilates Reformer as a Gift", excerpt: "Reformers that make a great gift.", href: "/blog/best-pilates-reformer-gift", imageUrl: "/pictures/stitch-reformer-sunlit-minimal.png", category: "Gifts", readTime: "10 min read" },
  ],
  ctaTitle: "Find a studio near you",
  ctaSubtitle: "Use our curated city guides to find the best Pilates studios worldwide.",
};

export default function Page() {
  return <EquipmentGuide {...GUIDE} />;
}
