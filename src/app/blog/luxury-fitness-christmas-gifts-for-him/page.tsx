import type { Metadata } from "next";
import EquipmentGuide, { type EquipmentGuideProps } from "@/components/EquipmentGuide";
import { item } from "@/lib/reformerCatalog";
import { gift, GIFTS_CHECKED, GIFTS_CHECKED_ISO } from "@/lib/giftCatalog";

const SLUG = "luxury-fitness-christmas-gifts-for-him";
const URL = `https://pilatescollectiveclub.com/blog/${SLUG}`;
const HERO = "/pictures/stitch-studio-modern-row.png";
const TITLE = "Luxury Fitness Christmas Gifts for Him (2026): 14 Picks";
const DESCRIPTION = "Luxury Christmas gifts for men who train: Garmin Forerunner 970, Apple Watch Ultra 4, WHOOP, Normatec, Theragun, the Lagree Micro and home reformers.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["luxury fitness christmas gifts for him", "christmas gifts for men who work out", "luxury fitness gifts for him", "luxury gifts for men who work out", "premium fitness gifts for him", "pilates gifts for men", "lagree gifts for him", "best christmas gifts for active men 2026", "expensive fitness gifts for husband", "recovery gifts for him"],
  openGraph: { title: TITLE, description: DESCRIPTION, type: "article", url: URL, images: [{ url: `https://pilatescollectiveclub.com${HERO}`, width: 1200, height: 630, alt: "A modern studio with a row of machines" }] },
  twitter: { card: "summary_large_image", title: "Luxury Fitness Christmas Gifts for Him (2026): 14 Picks", description: DESCRIPTION, images: [`https://pilatescollectiveclub.com${HERO}`] },
  alternates: { canonical: URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const GUIDE: EquipmentGuideProps = {
  slug: SLUG,
  title: TITLE,
  description: DESCRIPTION,
  breadcrumb: "Luxury Fitness Christmas Gifts for Him",
  eyebrow: "Christmas 2026",
  eyebrowAccent: "Gifts for Him",
  h1: "Luxury Fitness Christmas Gifts for Him",
  h1Accent: "(2026): 14 Premium Picks",
  readTime: "11 min read",
  updatedLabel: `Prices checked ${GIFTS_CHECKED}`,
  datePublished: GIFTS_CHECKED_ISO,
  dateModified: GIFTS_CHECKED_ISO,
  heroImage: HERO,
  heroAlt: "A modern studio with a row of machines",
  heroCaption: "Tech · Recovery · Home machines",
  intro: [
    "Plenty of men now train on the reformer and the Megaformer, and the ones who train seriously are notoriously hard to buy for. The answer is a gift that upgrades how they train or recover: kit they would never justify buying for themselves.",
    "Here are 14 premium gifts from $249 to $3,349, from a titanium running watch to Normatec boots and a home Lagree machine, with the Amazon price we checked today.",
  ],
  quickPicks: [
    { label: "Best watch", itemId: "garmin-forerunner-970" },
    { label: "Best recovery gift", itemId: "hyperice-normatec-3-legs" },
    { label: "Best massage gun", itemId: "hyperice-hypervolt-3-pro" },
    { label: "Best home machine", itemId: "lagree-micro" },
    { label: "Best home reformer", itemId: "merrithew-at-home-spx" },
  ],
  blocks: [
    {
      kind: "table",
      eyebrow: "At a glance",
      heading: "Luxury gifts for him by type",
      columns: ["Type", "Picks", "Price range"],
      rows: [
        ["Tech", "Powerbeats Pro 2, WHOOP Life, Garmin Forerunner 970, Apple Watch Ultra 4", "$249 to $774"],
        ["Recovery", "Hypervolt 3 Pro, Theragun PRO Plus, Normatec 3 Legs, Normatec Elite, JetBoots PRO Plus", "$349 to $1,149.99"],
        ["Home machines", "Schwinn IC4, Lagree Micro, Echelon Smart Connect, Align C8-PRO, Merrithew SPX", "$795.99 to $3,349"],
      ],
      note: `Amazon prices checked on ${GIFTS_CHECKED}.`,
    },
    {
      kind: "products",
      id: "tech",
      eyebrow: "Tech",
      heading: "Watches, trackers and earbuds",
      items: [
        gift("powerbeatsPro2", { badge: "Best Workout Earbuds", pros: ["Earhooks stay put", "Heart rate sensing"], cons: ["Earhooks are bulkier than standard earbuds"] }),
        gift("whoopLife", { badge: "Best Tracker", pros: ["Screenless, 24/7 wear", "Year of membership included"], cons: ["Membership renews yearly"] }),
        gift("garminFR970", { badge: "Best Watch", pros: ["Titanium and sapphire", "Up to 15 days of battery"], cons: ["47mm"] }),
        gift("appleWatchUltra4", { badge: "Best for iPhone Users", pros: ["Titanium, cellular", "Up to 45 hours"], cons: ["49mm case"] }),
      ],
    },
    {
      kind: "products",
      id: "recovery",
      eyebrow: "Recovery",
      heading: "Recovery he will use every week",
      items: [
        gift("hypervolt3Pro", { badge: "Best Massage Gun", pros: ["Heated head", "4-hour battery"], cons: ["2.5 lb"] }),
        gift("theragunProPlus", { badge: "Most Advanced Massage Gun", pros: ["Heat and vibration therapy"], cons: ["Cold attachment sold separately"] }),
        gift("normatec3Legs", { badge: "Best Recovery Gift", pros: ["The original compression boots", "7 levels"], cons: ["Hose to a control unit"] }),
        gift("normatecElite", { badge: "Best Wireless Boots", pros: ["Hose-free"], cons: ["$1,099"] }),
        gift("jetbootsProPlus", { badge: "Most Advanced Boots", pros: ["Compression, vibration and light"], cons: ["$1,149.99"] }),
      ],
    },
    {
      kind: "products",
      id: "machines",
      eyebrow: "Train at home",
      heading: "Home machines",
      items: [
        gift("schwinnIC4", { badge: "Best Value Bike", pros: ["Works with Peloton and Zwift apps"], cons: ["No built-in screen"] }),
        gift("lagreeMicro", { badge: "Best Home Machine", pros: ["Megaformer-style at home", "Fits users up to 6'8\""], cons: ["Add-ons sold separately"] }),
        gift("echelon", { badge: "Best Connected Bike", pros: ["22\" rotating screen"], cons: ["Membership after the trial"] }),
        item("alignC8Pro", { badge: "Best Reformer for Tall Men", pros: ["Users up to 193 cm (about 6'4\")", "Professional springs"], cons: ["Check height range"] }),
        item("spxHome", { badge: "Best Home Reformer", pros: ["Accessories included", "Sold by Amazon.com"], cons: ["Low frame height"] }),
      ],
    },
  ],
  faqs: [
    { q: "What is a good luxury fitness gift for a man?", a: "A premium watch such as the Garmin Forerunner 970 ($749.99), recovery kit such as Normatec 3 Legs ($899) or a Hypervolt 3 Pro ($349), or a home machine such as the Lagree Micro ($990)." },
    { q: "Do men do Pilates and Lagree?", a: "Yes. Many men take reformer and Lagree classes, and men who train hard often value recovery tools and home machines." },
    { q: "Which home reformer suits a tall man?", a: "Check each machine's height range. Align-Pilates lists the C8-PRO for users up to 193 cm (about 6'4\"). Lagree Fitness says the Micro fits users up to 6'8\"." },
    { q: "Are these prices final?", a: `They are the Amazon prices we checked on ${GIFTS_CHECKED}. Many of these products go on sale around Black Friday (November 27) and Cyber Monday (November 30).` },
  ],
  related: [
    { title: "Best Pilates Gifts for Him", excerpt: "Gifts for men who do Pilates, at every budget.", href: "/blog/best-pilates-gifts-for-him", imageUrl: "/pictures/stitch-studio-modern-row.png", category: "Gifts", readTime: "8 min read" },
    { title: "Fitness Tech Christmas Gifts", excerpt: "Watches, rings, bands and earbuds compared.", href: "/blog/fitness-tech-christmas-gifts-for-pilates-lovers", imageUrl: "/pictures/stitch-pilates-essentials-logbook.png", category: "Gifts", readTime: "11 min read" },
    { title: "The Lagree Micro Christmas Gift Guide", excerpt: "The complete home Lagree setup.", href: "/blog/lagree-micro-christmas-gift", imageUrl: "/pictures/stitch-reformer-loops-hooks.png", category: "Gifts", readTime: "10 min read" },
    { title: "Luxury Recovery Christmas Gifts", excerpt: "Normatec, JetBoots, Theragun and more.", href: "/blog/luxury-recovery-christmas-gifts-for-pilates", imageUrl: "/pictures/stitch-studio-bench-towels.png", category: "Gifts", readTime: "11 min read" },
  ],
  ctaTitle: "Find a studio near you",
  ctaSubtitle: "Use our curated city guides to find the best Pilates and Lagree studios worldwide.",
};

export default function Page() {
  return <EquipmentGuide {...GUIDE} />;
}
