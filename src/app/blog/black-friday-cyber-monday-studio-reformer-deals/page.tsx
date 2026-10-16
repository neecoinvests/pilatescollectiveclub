import type { Metadata } from "next";
import EquipmentGuide, { type EquipmentGuideProps } from "@/components/EquipmentGuide";
import { item } from "@/lib/reformerCatalog";
import { GIFTS_CHECKED, GIFTS_CHECKED_ISO } from "@/lib/giftCatalog";

const SLUG = "black-friday-cyber-monday-studio-reformer-deals";
const URL = `https://pilatescollectiveclub.com/blog/${SLUG}`;
const HERO = "/pictures/stitch-reformers-aerial-row.png";
const TITLE = "Black Friday & Cyber Monday Studio Reformer Deals 2026";
const DESCRIPTION = "Studio reformer deals to watch this Black Friday and Cyber Monday: Balanced Body, Merrithew, Align-Pilates and PersonalHour, with today's price to beat.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["black friday balanced body reformer", "cyber monday reformer deals", "studio reformer black friday", "merrithew black friday", "balanced body cyber monday", "align pilates black friday", "premium pilates reformer sale", "black friday pilates reformer 2026"],
  openGraph: { title: TITLE, description: DESCRIPTION, type: "article", url: URL, images: [{ url: `https://pilatescollectiveclub.com${HERO}`, width: 1200, height: 630, alt: "Rows of studio reformers seen from above" }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [`https://pilatescollectiveclub.com${HERO}`] },
  alternates: { canonical: URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const GUIDE: EquipmentGuideProps = {
  slug: SLUG,
  title: TITLE,
  description: DESCRIPTION,
  breadcrumb: "Studio Reformer Deals",
  eyebrow: "Black Friday & Cyber Monday 2026",
  eyebrowAccent: "Studio Reformers",
  h1: "Black Friday & Cyber Monday",
  h1Accent: "Studio Reformer Deals 2026",
  readTime: "13 min read",
  updatedLabel: `Prices checked ${GIFTS_CHECKED}`,
  datePublished: GIFTS_CHECKED_ISO,
  dateModified: GIFTS_CHECKED_ISO,
  heroImage: HERO,
  heroAlt: "Rows of studio reformers seen from above",
  heroCaption: "Balanced Body · Merrithew · Align-Pilates · PersonalHour",
  intro: [
    "Black Friday is Friday, November 27 and Cyber Monday is Monday, November 30. For anyone planning to buy a studio-grade reformer, these are the days to watch: on a $3,000 to $8,000 machine, even a modest discount is real money.",
    "This guide tracks 13 studio-grade reformers sold on Amazon, from Balanced Body, Merrithew, Align-Pilates and PersonalHour. Each shows the price we checked today, so you can tell at a glance whether a holiday deal is genuine. We will update the page as deals go live.",
  ],
  quickPicks: [
    { label: "Best value studio-grade", itemId: "align-c8-pro" },
    { label: "Best Balanced Body", itemId: "balanced-body-studio-reformer" },
    { label: "Best reformer + tower", itemId: "balanced-body-rialto-tower" },
    { label: "Best Merrithew package", itemId: "merrithew-at-home-spx" },
    { label: "Best for small spaces", itemId: "balanced-body-metro-iq" },
  ],
  blocks: [
    {
      kind: "table",
      eyebrow: "The watchlist",
      heading: "Price to beat on every studio reformer",
      intro: "A Black Friday or Cyber Monday deal is only a deal if it beats these numbers.",
      columns: ["Reformer", "Price today", "Availability"],
      rows: [
        ["Balanced Body Metro IQ", "$2,330.00", "Low stock"],
        ["PersonalHour Janet La Force Plus", "$2,555.00", "Low stock"],
        ["PersonalHour Nano Elite Plus", "$2,690.00", "Made to order"],
        ["Align-Pilates C8-PRO", "$2,750.00", "In stock"],
        ["Merrithew At Home SPX", "$3,349.00", "In stock"],
        ["Balanced Body Rialto (with box)", "$3,495.00", "Made to order"],
        ["Balanced Body Allegro Stretch", "$3,710.00", "Made to order"],
        ["Balanced Body Rialto with Tower", "$4,230.00", "Made to order"],
        ["Balanced Body Studio Reformer (Revo)", "$4,700.00", "Made to order"],
        ["Balanced Body Studio Reformer (XSR)", "$4,850.00", "Made to order"],
        ["Balanced Body Allegro Stretch with Tower", "$5,275.00", "Made to order"],
        ["Balanced Body Studio Reformer with Tower", "$6,975.00", "Made to order"],
        ["Merrithew Rehab V2 Max Plus", "$8,199.00", "Made to order"],
      ],
      note: `Amazon prices and availability checked on ${GIFTS_CHECKED}.`,
    },
    {
      kind: "callout",
      eyebrow: "Read this first",
      heading: "What to expect from studio reformer deals",
      body: [
        "Studio brands such as Balanced Body and Merrithew are discounted less often than budget home reformers, so any genuine saving on these machines is worth acting on.",
        "Most Balanced Body machines are made to order and ship after a lead time. If it is a Christmas gift, check the delivery estimate before you buy.",
        "Compare like with like: some listings include a sitting box, tower or stand. Our table lists exactly what each one is.",
      ],
    },
    {
      kind: "products",
      id: "under-3000",
      eyebrow: "Under $3,000",
      heading: "Studio-grade reformers under $3,000",
      items: [
        item("metroIQ", { badge: "Best for Small Spaces", pros: ["Telescopes to 62\" for storage", "Signature Springs", "85 lb"], cons: ["Low stock"] }),
        item("janetLaForce", { badge: "Best Foldable Premium", pros: ["Solid walnut", "Folds upright on wheels", "Jumpboard and box included"], cons: ["Low stock"] }),
        item("nanoElitePlus", { badge: "Best Thick Wood Frame", pros: ["2\" layered maple", "Box and jumpboard included"], cons: ["290 lb", "Made to order"] }),
        item("alignC8Pro", { badge: "Best Value Studio-Grade", pros: ["Same springs as Align's pro machines", "Stackable", "In stock"], cons: ["Low bed without leg extensions"] }),
      ],
    },
    {
      kind: "products",
      id: "3000-5000",
      eyebrow: "$3,000 to $5,000",
      heading: "Merrithew and Balanced Body classics",
      items: [
        item("spxHome", { badge: "Best Merrithew Package", pros: ["Box, pole, extender and straps included", "Sold by Amazon.com"], cons: ["Low frame height"] }),
        item("rialtoBox", { badge: "Best Value Balanced Body", pros: ["Maple frame on aluminium legs", "Sitting box included"], cons: ["Made to order"] }),
        item("allegroStretch", { badge: "Best for Tall Users", pros: ["Longer, wider carriage", "Transport wheels"], cons: ["111\" long", "Made to order"] }),
        item("rialtoTower", { badge: "Best Reformer + Tower", pros: ["29 spring-attachment points", "Mat conversion"], cons: ["Made to order"] }),
        item("studioRevo", { badge: "Best Balanced Body", pros: ["Strata Rock Maple", "Up to 46 resistance settings"], cons: ["Made to order"] }),
        item("studioXsr", { badge: "Studio Reformer with Box", pros: ["XSR footbar", "Sitting box included"], cons: ["Made to order"] }),
      ],
    },
    {
      kind: "products",
      id: "over-5000",
      eyebrow: "$5,000 and up",
      heading: "Towers and clinical machines",
      items: [
        item("allegroStretchTower", { badge: "Tall Users + Tower", pros: ["Drop-in mat conversion", "22 spring-attachment points"], cons: ["251 lb", "Made to order"] }),
        item("studioTower", { badge: "The Flagship", pros: ["Maple reformer with stainless steel tower", "Twin conversion mats"], cons: ["78\" high", "341 lb"] }),
        item("v2MaxPlus", { badge: "Best for Clinics", pros: ["Raised frame", "Vertical Frame"], cons: ["$8,199", "Made to order"] }),
      ],
    },
  ],
  faqs: [
    { q: "Does Balanced Body have Black Friday deals?", a: "Studio brands like Balanced Body discount less often than budget reformer brands. We track their Amazon listings and will update this page if prices drop; use today's price in our table to judge any deal." },
    { q: "When are Black Friday and Cyber Monday 2026?", a: "Black Friday is Friday, November 27, 2026 and Cyber Monday is Monday, November 30, 2026. Many retailers start sales earlier in November." },
    { q: "What is the best studio-grade reformer to buy on Black Friday?", a: "For value, the Align-Pilates C8-PRO ($2,750 today) uses the same springs as Align's professional reformers. For the classic studio machine, the Balanced Body Studio Reformer ($4,700). For a reformer with a tower, the Balanced Body Rialto with Tower ($4,230)." },
    { q: "Will a studio reformer arrive before Christmas?", a: "In-stock machines usually can, but most Balanced Body reformers are made to order and ship after a lead time. Check the delivery estimate on the listing." },
  ],
  related: [
    { title: "Black Friday Reformer Deals", excerpt: "Home reformers from $295.99, with prices to beat.", href: "/blog/black-friday-pilates-reformer-deals", imageUrl: "/pictures/stitch-reformer-sunlit-minimal.png", category: "Deals", readTime: "Deals" },
    { title: "Cyber Monday Reformer Deals", excerpt: "Every budget, from foldable to studio-grade.", href: "/blog/cyber-monday-pilates-reformer-deals", imageUrl: "/pictures/stitch-reformer-sunlit-minimal.png", category: "Deals", readTime: "Deals" },
    { title: "Best Pilates Reformer Under $5,000", excerpt: "Studio machines compared in depth.", href: "/blog/best-pilates-reformer-under-5000", imageUrl: "/pictures/stitch-reformer-row-studio.png", category: "Equipment", readTime: "15 min read" },
    { title: "Black Friday & Cyber Monday Recovery Deals", excerpt: "Normatec, JetBoots and Theragun: prices to beat.", href: "/blog/black-friday-cyber-monday-recovery-deals", imageUrl: "/pictures/stitch-studio-bench-towels.png", category: "Deals", readTime: "Deals" },
  ],
  ctaTitle: "Find a studio near you",
  ctaSubtitle: "Use our curated city guides to find the best Pilates studios worldwide.",
};

export default function Page() {
  return <EquipmentGuide {...GUIDE} />;
}
