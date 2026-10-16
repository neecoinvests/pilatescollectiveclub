import type { Metadata } from "next";
import EquipmentGuide, { type EquipmentGuideProps } from "@/components/EquipmentGuide";
import { gift, GIFTS_CHECKED, GIFTS_CHECKED_ISO } from "@/lib/giftCatalog";

const SLUG = "luxury-recovery-christmas-gifts-for-pilates";
const URL = `https://pilatescollectiveclub.com/blog/${SLUG}`;
const HERO = "/pictures/stitch-studio-bench-towels.png";
const TITLE = "Luxury Recovery Christmas Gifts for Pilates Lovers (2026)";
const DESCRIPTION = "14 luxury recovery Christmas gifts for Pilates lovers: Normatec and JetBoots compression boots, Theragun, a HigherDOSE sauna blanket and Oura Ring 5.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["luxury recovery christmas gifts", "recovery christmas gifts for pilates lovers", "luxury recovery gifts", "recovery gifts for pilates lovers", "normatec christmas gift", "theragun christmas gift", "best compression boots gift", "infrared sauna blanket gift", "oura ring 5 gift", "luxury wellness gifts 2026"],
  openGraph: { title: TITLE, description: DESCRIPTION, type: "article", url: URL, images: [{ url: `https://pilatescollectiveclub.com${HERO}`, width: 1200, height: 630, alt: "Towels on a studio bench" }] },
  twitter: { card: "summary_large_image", title: "Luxury Recovery Christmas Gifts for Pilates Lovers (2026)", description: DESCRIPTION, images: [`https://pilatescollectiveclub.com${HERO}`] },
  alternates: { canonical: URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const GUIDE: EquipmentGuideProps = {
  slug: SLUG,
  title: TITLE,
  description: DESCRIPTION,
  breadcrumb: "Luxury Recovery Christmas Gifts",
  eyebrow: "Christmas 2026",
  eyebrowAccent: "Recovery & Wellness",
  h1: "Luxury Recovery Christmas Gifts",
  h1Accent: "for Pilates Lovers (2026): 14 Picks",
  readTime: "11 min read",
  updatedLabel: `Prices checked ${GIFTS_CHECKED}`,
  datePublished: "2026-10-15",
  dateModified: GIFTS_CHECKED_ISO,
  heroImage: HERO,
  heroAlt: "Folded towels on a bench in a Pilates studio",
  heroCaption: "Compression boots · Massage guns · Heat · Sleep",
  intro: [
    "People who train hard love recovery tech, and it is exactly the kind of thing they rarely buy for themselves. Compression boots, a premium massage gun or a sauna blanket turn the hours after class into part of the routine.",
    "Below are 14 recovery gifts from Hyperice, Therabody, HigherDOSE and Oura, from $219.99 to $1,549, with the price and stock we checked on Amazon today. The specs come from each listing.",
  ],
  quickPicks: [
    { label: "Best compression boots", itemId: "hyperice-normatec-3-legs" },
    { label: "Best wireless boots", itemId: "hyperice-normatec-elite" },
    { label: "Best value boots", itemId: "therabody-jetboots-prime" },
    { label: "Best massage gun", itemId: "therabody-theragun-pro-plus" },
    { label: "Best wellness splurge", itemId: "higherdose-infrared-sauna-blanket" },
  ],
  blocks: [
    {
      kind: "table",
      eyebrow: "Compression boots compared",
      heading: "Normatec vs JetBoots",
      columns: ["Boots", "Price", "Wireless", "Settings"],
      rows: [
        ["Therabody JetBoots Prime", "$549.99", "Yes", "Built-in control panel; 4 overlapping chambers"],
        ["Hyperice Normatec 3 Legs", "$899.00", "No (control unit)", "7 compression levels, 5 zones"],
        ["Hyperice Normatec Elite", "$1,099.00", "Yes, hose-free", "7 levels; legs synchronised"],
        ["Therabody JetBoots PRO Plus", "$1,149.99", "Yes", "8 presets; compression, vibration and light"],
      ],
      note: "Details from each Amazon listing. JetBoots are sold by inseam size; the links open the Regular (30–34\") size.",
    },
    {
      kind: "products",
      id: "compression",
      eyebrow: "Compression",
      heading: "Compression boots and wraps",
      items: [
        gift("jetbootsPrime", { badge: "Best Value Boots", pros: ["Wireless and packable", "3-hour battery"], cons: ["Fewer settings than Normatec"] }),
        gift("normatecHips", { badge: "Best for Hips & Lower Back", pros: ["Cordless", "Targets IT bands, glutes and hips"], cons: ["Does not cover the legs"] }),
        gift("normatec3Legs", { badge: "Best Compression Boots", pros: ["The original air-compression system", "7 levels and app features"], cons: ["Hose to a control unit"] }),
        gift("normatecElite", { badge: "Best Wireless Boots", pros: ["No hoses or control box", "Synchronised legs"], cons: ["More expensive than Normatec 3"] }),
        gift("jetbootsProPlus", { badge: "Most Advanced Boots", pros: ["Compression, vibration and light", "8 presets"], cons: ["The priciest boots here"] }),
        gift("normatec3Lower", { badge: "Best for Legs + Hips", pros: ["Legs and hip attachments"], cons: ["$1,149"] }),
        gift("normatec3Full", { badge: "The Complete System", pros: ["Legs, arms and hips"], cons: ["$1,549"] }),
      ],
    },
    {
      kind: "products",
      id: "massage",
      eyebrow: "Percussion and heat",
      heading: "Massage guns and heat therapy",
      items: [
        gift("thermBack", { badge: "Best for Desk Workers", pros: ["Heat, infrared, LED and vibration"], cons: ["Lower back only"] }),
        gift("theragunPrimePlus", { badge: "Best Heated Massage Gun", pros: ["3 heat levels", "Works with Plus attachments"], cons: ["4 attachments vs 6 on the PRO"] }),
        gift("theragunPro", { badge: "Best Classic Massage Gun", pros: ["6 attachments", "Built-in routines"], cons: ["Ships at a later date: check the listing"] }),
        gift("theragunProPlus", { badge: "Best Massage Gun", pros: ["Adds heat and vibration therapy"], cons: ["Cold attachment sold separately"] }),
      ],
    },
    {
      kind: "products",
      id: "wellness",
      eyebrow: "Rest and wellness",
      heading: "Sleep, sauna and tracking",
      items: [
        gift("smartGoggles", { badge: "Best Wind-Down Gift", pros: ["Heat, compression and vibration", "Blackout design"], cons: ["For relaxation, not muscle recovery"] }),
        gift("oura5", { badge: "Best Tracker", pros: ["Sleep, activity and stress in a ring", "All-titanium"], cons: ["Monthly membership after the first month", "Needs the sizing kit"] }),
        gift("higherdose", { badge: "Best Wellness Splurge", pros: ["Home sauna sessions", "9 heat levels"], cons: ["Low stock"] }),
      ],
    },
    {
      kind: "cards",
      eyebrow: "Choosing",
      heading: "How to pick the right recovery gift",
      cards: [
        { h: "Legs or everywhere?", b: "Boots treat the legs. If their tightness is in the hips and lower back, the Normatec Elite Hips or Normatec 3 Lower Body is the better gift." },
        { h: "Wired or wireless", b: "Wireless boots (Normatec Elite, JetBoots) are quicker to use and to store. Normatec 3 uses a control unit connected by hoses." },
        { h: "Sizing", b: "JetBoots come in inseam sizes and Oura Ring 5 uses its own sizing kit. Check before ordering, or check the holiday returns window." },
        { h: "Ongoing costs", b: "Oura needs a membership after the first month ($5.99/month, per the listing). The other gifts here have no subscription to use the basic features." },
      ],
    },
  ],
  faqs: [
    { q: "What is the best luxury recovery gift?", a: "Compression boots are the standout luxury recovery gift. Hyperice Normatec 3 Legs ($899) is the original system; Therabody JetBoots Prime ($549.99) is a wireless, lower-priced alternative." },
    { q: "Are Normatec boots worth it?", a: "For someone who trains several times a week, many find them a worthwhile part of recovery. They use sequential air compression with 7 levels on Normatec 3. They are a luxury rather than a necessity." },
    { q: "Which Theragun is best as a gift?", a: "The Theragun PRO Plus ($649.99) is Therabody's most advanced model, adding heat and vibration. The Theragun PRO 5th Gen ($529.99) is the classic professional model, and the Prime Plus ($429.99) adds heat at a lower price." },
    { q: "Does the Oura Ring need a subscription?", a: "Yes. Per the listing, the first month of membership is included and it costs $5.99 a month afterwards." },
    { q: "Will these arrive by Christmas?", a: "Most are in stock; a few are marked low stock. Check the delivery estimate on each listing, and remember prices often drop around Black Friday (November 27) and Cyber Monday (November 30)." },
  ],
  related: [
    { title: "Pilates Christmas Gifts Over $500", excerpt: "16 splurge gifts, from reformers to recovery.", href: "/blog/pilates-christmas-gifts-over-500", imageUrl: "/pictures/stitch-luxury-studio-wide.png", category: "Gifts", readTime: "12 min read" },
    { title: "Best Massage Gun for Pilates", excerpt: "Massage guns compared for Pilates recovery.", href: "/blog/best-massage-gun-for-pilates", imageUrl: "/pictures/stitch-studio-shelf-props.png", category: "Recovery", readTime: "9 min read" },
    { title: "Best Luxury Pilates Gifts", excerpt: "Premium gifts for the Pilates lover.", href: "/blog/best-luxury-pilates-gifts", imageUrl: "/pictures/stitch-retail-activewear.png", category: "Gifts", readTime: "9 min read" },
    { title: "Pilates Christmas Gifts for Her", excerpt: "18 ideas she'll use, at every budget.", href: "/blog/best-pilates-christmas-gifts-for-her", imageUrl: "/pictures/stitch-retail-activewear.png", category: "Gifts", readTime: "9 min read" },
  ],
  ctaTitle: "Find a studio near you",
  ctaSubtitle: "Use our curated city guides to find the best Pilates studios worldwide.",
};

export default function Page() {
  return <EquipmentGuide {...GUIDE} />;
}
