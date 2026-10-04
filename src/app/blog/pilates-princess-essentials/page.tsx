import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import { jsonLdHtml } from "@/lib/schema";

const PAGE_URL = "https://pilatescollectiveclub.com/blog/pilates-princess-essentials";
const HERO_IMAGE = "https://pilatescollectiveclub.com/pictures/stitch-retail-activewear.png";
const TITLE = "Pilates Princess Essentials (2026): The Aesthetic Edit";
const DESCRIPTION =
  "Pilates princess essentials that perform first and look pretty second: a Varley matching set, TAVI socks, Bala Bangles, a Liforme mat and honest budget dupes.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: "The pilates princess aesthetic, edited for performance: a genuine matching set, grip socks, Bala Bangles, the post-class layer and the dream home reformer.",
    type: "article",
    url: PAGE_URL,
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: "Pilates princess essentials — matching activewear set and studio accessories" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilates Princess Essentials (2026)",
    description: "The aesthetic edit — pieces that look beautiful and actually perform, with honest budget dupes.",
    images: [HERO_IMAGE],
  },
  keywords: [
    "pilates princess essentials",
    "pilates princess aesthetic",
    "pilates princess outfit",
    "pilates girl essentials",
    "that girl pilates essentials",
    "pilates aesthetic must haves",
    "pilates princess matching set",
    "pilates princess accessories",
    "aesthetic pilates gear",
    "pilates princess starter kit",
    "pilates princess gift ideas",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const amazon = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=pilatescollective-20`;

type Tier = "Best" | "Budget" | "Splurge";

interface Item {
  tier: Tier;
  tag: string;
  name: string;
  price: string;
  description: string;
  url: string;
  brandDirect?: boolean;
  /** Category label when this is the headline pick shown in the At-a-glance table */
  glance?: string;
}

interface Section {
  id: string;
  eyebrow: string;
  heading: string;
  intro: string;
  items: Item[];
  guides: { href: string; label: string }[];
}

const SECTIONS: Section[] = [
  {
    id: "matching-set",
    eyebrow: "01 — The matching set",
    heading: "The matching set: Varley Freesoft in Marina",
    intro:
      "The matching set is the foundation of the look, and it is also where performance matters most. Reformer footwork, bridging and feet-in-straps work put your leggings under tension from every angle, so they need to stay opaque when stretched and sit still at the waist when you roll down. A sports bra has to hold through long spans of lying supine and rolling like a ball without a strap sliding off the shoulder. Buy for those jobs first; the colourway comes second. The good news is that the pieces below do both.",
    items: [
      {
        tier: "Best",
        tag: "Best — the set",
        name: "Varley Freesoft Piped Full Leggings (Marina)",
        price: "$78.40",
        description:
          "Varley is a studio-favourite label, and the Freesoft Piped Full Legging is the half of this edit that makes it a genuine set: it is listed in the Marina colourway, the same shade as the Harley Bralette below, so you are buying a true match rather than a near-miss. The piping detail gives it a polished, tailored look off the carriage. It is sold on Amazon via Shopbop, an Amazon company, at $78.40 when we verified the listing.",
        url: amazon("B0FXN378H8"),
        glance: "Leggings",
      },
      {
        tier: "Best",
        tag: "Best — the matching top",
        name: "Varley Freesoft Harley Bralette (Marina)",
        price: "$52.80",
        description:
          "The other half of the Marina set. A bralette-style top suits Pilates better than it suits running: the work is controlled and low-impact, so you can prioritise comfort and a clean neckline over maximum compression. If you are larger-chested or also wear your kit for HIIT, see our sports bra guide for higher-support options. Sold via Shopbop (an Amazon company) at $52.80.",
        url: amazon("B0FXN42JWR"),
        glance: "Bralette (matching)",
      },
      {
        tier: "Splurge",
        tag: "Splurge — the alternative",
        name: "Alo Yoga Airbrush Legging",
        price: "~$128 (aloyoga.com)",
        description:
          "Not sold on Amazon — this links to aloyoga.com. The Airbrush is one of the most recognisable leggings in boutique studios and the obvious alternative if you prefer Alo's sleek, sculpted finish to Varley's softer look. Price shown is approximate from Alo's own site, so check the current price and colourways there. Our Alo deep-dive covers the rest of the range.",
        url: "https://www.aloyoga.com/",
        brandDirect: true,
      },
      {
        tier: "Budget",
        tag: "Budget dupe — leggings",
        name: "CRZ YOGA Butterluxe Leggings 25\"",
        price: "$32.00",
        description:
          "The honest budget answer. CRZ YOGA's Butterluxe line is widely used as an affordable alternative to premium studio leggings, and at $32.00 (sold by CRZ YOGA) it is roughly a third of the Varley price. The 25\" inseam lands above the ankle, which keeps fabric clear of the footbar and straps. Choose a colour that sits near your bra and you have a convincing set for a fraction of the cost.",
        url: amazon("B09P1G2952"),
      },
      {
        tier: "Budget",
        tag: "Budget dupe — top",
        name: "CRZ YOGA Butterluxe U Back Sports Bra",
        price: "$28.00",
        description:
          "Pair it with the Butterluxe leggings for a same-fabric budget set. The U-back is a flattering shape that keeps straps flat against your shoulder blades when you are lying on the carriage. $28.00, sold by CRZ YOGA.",
        url: amazon("B09ZP9VXLJ"),
      },
    ],
    guides: [
      { href: "/blog/varley-pilates-activewear", label: "Full guide: Varley for Pilates →" },
      { href: "/blog/best-pilates-leggings", label: "Best Pilates leggings →" },
      { href: "/blog/best-pilates-sports-bra", label: "Best Pilates sports bras →" },
    ],
  },
  {
    id: "grip-socks",
    eyebrow: "02 — Grip socks",
    heading: "Grip socks: the detail every studio notices",
    intro:
      "Most reformer studios require grip socks, which makes them the one accessory you will wear every single class. That also makes them the easiest place to add a little polish. Function first: you want grip that covers the sole so your feet stay put on the footbar and platform. After that, cut and colour are fair game.",
    items: [
      {
        tier: "Best",
        tag: "Best",
        name: "toesox Low Rise Grip Socks 2-Pack (Full Toe)",
        price: "$30.00",
        description:
          "toesox is the original studio grip-sock brand, and this low-rise 2-pack uses its full-toe design, with each toe in its own pocket. The low cut is clean and minimal under a full-length legging. Sold by The Active Footwear Store, the official distributor, at $30.00 for two pairs.",
        url: amazon("B07QHNDHW3"),
        glance: "Grip socks",
      },
      {
        tier: "Splurge",
        tag: "Splurge — the aesthetic pick",
        name: "TAVI Stacy Slouch Pilates Socks, 2-Pack",
        price: "$40.00",
        description:
          "If one sock defines the pilates princess look, it is the slouch sock worn scrunched above the ankle. TAVI's Stacy is exactly that, in a premium 2-pack from the brand's official distributor, The Active Footwear Store. At $40.00 it is the priciest sock here; buy it if you love the silhouette, not because it grips better than the toesox.",
        url: amazon("B0GFPGMWWS"),
      },
      {
        tier: "Budget",
        tag: "Budget",
        name: "Muezna Pilates Grip Socks (6 pairs)",
        price: "$7.99",
        description:
          "Six pairs for $7.99, sold by UISIC. Not the prettiest, but a multi-pack means a fresh pair is always clean when you have back-to-back classes, which is its own kind of luxury.",
        url: amazon("B0DQ53GSP5"),
      },
    ],
    guides: [{ href: "/blog/best-pilates-grip-socks", label: "Full guide: best Pilates grip socks →" }],
  },
  {
    id: "accessories",
    eyebrow: "03 — The accessories",
    heading: "The accessories: bangles, bottle, claw clip, bag",
    intro:
      "This is where the aesthetic really lives, and where it is easiest to overspend on things that do not earn their place. Each pick below has a job: adding load to mat work, keeping you hydrated through a double class, keeping hair off your neck when you roll, and carrying the lot.",
    items: [
      {
        tier: "Best",
        tag: "Best — wrist & ankle weights",
        name: "Bala Bangles Wrist & Ankle Weights, 1 lb (pair)",
        price: "$55.00",
        description:
          "Bala turned the humble ankle weight into something you would leave out on a shelf, but the reason they belong here is practical: a light wrist or ankle weight adds real challenge to arm series, side-lying leg work and hundreds. Start with 1 lb. In Pilates, light load for many controlled reps beats heavy load with sloppy form. $55.00 for the pair, sold by Bala Bangles.",
        url: amazon("B0BQCJRL6Q"),
        glance: "Wrist & ankle weights",
      },
      {
        tier: "Splurge",
        tag: "Step up — 2 lb",
        name: "Bala Bangles Wrist & Ankle Weights, 2 lb (pair)",
        price: "$65.00",
        description:
          "The same design at 2 lb per bangle. A good second pair once 1 lb feels easy for leg work, while you keep the lighter pair for arms. $65.00, sold by Bala Bangles.",
        url: amazon("B0BQCG9VMY"),
      },
      {
        tier: "Splurge",
        tag: "The aesthetic bottle",
        name: "STANLEY Quencher H2.0 Flow State Tumbler 40 oz (Peony)",
        price: "$45.00",
        description:
          "The tumbler that became shorthand for the whole wellness aesthetic, here in a soft Peony. At 40 oz it covers a long class plus the walk home, and the handle makes it easy to carry alongside a mat. The trade-off is size: it is tall, and a tumbler with a straw lid is designed for sipping upright rather than tossing on its side in a bag. Sold by Amazon.com at $45.00.",
        url: amazon("B0CRMP3RQT"),
      },
      {
        tier: "Best",
        tag: "Best — performance bottle",
        name: "Owala FreeSip Stainless Steel Water Bottle, 24 oz",
        price: "$29.99",
        description:
          "Performance first: the FreeSip is a compact 24 oz stainless bottle that fits a bag side pocket and a studio cubby more easily than a 40 oz tumbler. It comes in plenty of colourways, so it still suits the look. If you only buy one bottle, this is the practical pick. $29.99, sold by Amazon.com.",
        url: amazon("B0BZYCJK89"),
        glance: "Water bottle",
      },
      {
        tier: "Best",
        tag: "Best — hair",
        name: "Kitsch 5\" Large Claw Clips (Black & Tort)",
        price: "$11.87",
        description:
          "The claw clip is the signature detail of the look, and it is also the most functional: long hair tied up and off your neck stays out of the way for rolling, spine stretch and anything on the reformer. A large 5\" clip holds thick hair; the black and tortoiseshell pair covers every set. $11.87, sold by Kitsch LLC.",
        url: amazon("B09GYPV213"),
        glance: "Claw clip",
      },
      {
        tier: "Splurge",
        tag: "The belt bag",
        name: "Lululemon Everywhere Belt Bag",
        price: "~$38 (lululemon.com)",
        description:
          "Not sold on Amazon — this links to lululemon.com. The Everywhere Belt Bag is a studio-to-coffee staple: phone, keys and card worn crossbody so your main bag can stay in the cubby. Price is approximate from Lululemon's site; colours change seasonally.",
        url: "https://shop.lululemon.com/",
        brandDirect: true,
      },
      {
        tier: "Best",
        tag: "Best — the tote",
        name: "Sportsnew Tote Yoga Mat Gym Bag 20L",
        price: "$29.99",
        description:
          "A tote that actually works as a Pilates bag: 20L of space, a separate shoe compartment so trainers stay away from your set, and a wet pocket for used grip socks. It is the functional answer to carrying a whole kit without looking like you are headed to the gym. $29.99, sold by Sportsnew.",
        url: amazon("B0BHP38PNG"),
        glance: "Tote bag",
      },
    ],
    guides: [
      { href: "/blog/best-pilates-ankle-weights", label: "Full guide: best Pilates ankle weights →" },
      { href: "/blog/best-pilates-water-bottle", label: "Best Pilates water bottles →" },
      { href: "/blog/best-pilates-bag", label: "Best Pilates bags →" },
    ],
  },
  {
    id: "post-class",
    eyebrow: "04 — The post-class layer",
    heading: "The post-class layer: Varley knit and sweat",
    intro:
      "Half of the aesthetic happens after class: the walk to coffee, the drive home, the errands you run still in your set. A good layer turns activewear into an outfit and keeps you warm once your muscles cool. Both picks are Varley, so they sit naturally over the Marina set.",
    items: [
      {
        tier: "Best",
        tag: "Best — the light layer",
        name: "Varley Callie Knit Top (Porcelain Blue)",
        price: "$61.60",
        description:
          "A knit top in a soft Porcelain Blue that sits well over a bralette for the in-between seasons. It is the lighter, more versatile of the two layers. $61.60, sold via Shopbop (an Amazon company).",
        url: amazon("B0FP46RRCG"),
        glance: "Knit top",
      },
      {
        tier: "Splurge",
        tag: "Splurge — the sweat",
        name: "Varley Davidson Sweat (Taupe Marl)",
        price: "$138.00",
        description:
          "The cosy option for cold mornings and early classes. Taupe Marl is a neutral that works with almost any set colour, which is what makes an expensive sweatshirt earn its keep. $138.00, sold by Zappos on Amazon.",
        url: amazon("B0DFZPBZDV"),
      },
    ],
    guides: [
      { href: "/blog/varley-pilates-activewear", label: "Full guide: Varley for Pilates →" },
      { href: "/blog/best-pilates-hoodie", label: "Best Pilates hoodies →" },
    ],
  },
  {
    id: "at-home",
    eyebrow: "05 — The at-home aesthetic",
    heading: "The at-home aesthetic: mat, ball and ring",
    intro:
      "Home practice is where the look becomes a habit. A mat you love to unroll gets unrolled more often, and a small ball and ring give you most of the props a mat class uses. Performance note: a yoga mat is usually thinner than a dedicated Pilates mat, so if you have sensitive knees or spine, fold a towel under you for rolling work or read our mat guide first.",
    items: [
      {
        tier: "Splurge",
        tag: "Splurge — the mat",
        name: "Liforme Classic Yoga Mat (alignment design)",
        price: "$165.00",
        description:
          "The mat with the printed alignment markers, and one of the most photographed mats in any studio. The markings are genuinely useful in Pilates too: they help you set up square and centred for leg circles, side-lying series and standing work. $165.00, sold by Liforme.",
        url: amazon("B01CGLCGRA"),
        glance: "Mat",
      },
      {
        tier: "Budget",
        tag: "Budget — the mat",
        name: "Gaiam Premium Yoga Mat 6mm",
        price: "$21.00",
        description:
          "The honest budget alternative. A 6mm mat is on the thicker side for yoga mats, which is welcome for Pilates rolling work, and Gaiam is a long-established brand. $21.00, sold by Amazon.com.",
        url: amazon("B09WF4GPPC"),
      },
      {
        tier: "Best",
        tag: "Best — the ball",
        name: "Bala Pilates Ball (small, non-weighted)",
        price: "$29.00",
        description:
          "A small, non-weighted Pilates ball is one of the most versatile props there is: under the pelvis for support, between the knees for inner-thigh work, behind the back for a gentle curl. Bala's version keeps the look consistent with your bangles. $29.00, sold by Bala Bangles.",
        url: amazon("B0BQCGM6N9"),
        glance: "Pilates ball",
      },
      {
        tier: "Best",
        tag: "Best — the ring",
        name: "Balanced Body Ultra-Fit Circle Mini 12\"",
        price: "$30.00",
        description:
          "Balanced Body is one of the major studio equipment makers, and its mini circle is a compact 12\" Pilates ring for inner- and outer-thigh work, arm presses and chest work. A studio-brand prop at a small-prop price. $30.00, sold by Balanced Body Inc.",
        url: amazon("B0008MF640"),
        glance: "Pilates ring",
      },
      {
        tier: "Budget",
        tag: "Budget — the ring",
        name: "Gaiam Pilates Ring Fitness Circle 15\"",
        price: "$14.48",
        description:
          "A larger 15\" ring from Gaiam at under half the price. Perfectly fine for learning ring work at home. $14.48, sold by Amazon.com.",
        url: amazon("B086HNGNFZ"),
      },
    ],
    guides: [
      { href: "/blog/best-pilates-mat", label: "Full guide: best Pilates mats →" },
      { href: "/blog/best-pilates-ball", label: "Best Pilates balls →" },
      { href: "/blog/best-pilates-ring", label: "Best Pilates rings →" },
    ],
  },
  {
    id: "self-care",
    eyebrow: "06 — Self-care",
    heading: "Self-care: the recovery ritual",
    intro:
      "Recovery is part of the look for a reason: it is part of the practice. A few minutes on tight calves, glutes and upper back after class or a long day at a desk is a pleasant way to finish, and it makes the next session feel better.",
    items: [
      {
        tier: "Splurge",
        tag: "The recovery splurge",
        name: "Therabody TheraGun Relief Massage Gun",
        price: "$159.99",
        description:
          "The TheraGun Relief is Therabody's more approachable massage gun, from one of the best-known names in percussive therapy. Use it on large muscle groups such as calves, quads, glutes and the upper back, and keep it away from the neck, spine and bony areas. $159.99, sold by TheraGun.",
        url: amazon("B0CNS894RH"),
        glance: "Massage gun",
      },
    ],
    guides: [{ href: "/blog/best-massage-gun-for-pilates", label: "Full guide: best massage guns for Pilates →" }],
  },
];

const DREAM: Item[] = [
  {
    tier: "Splurge",
    tag: "The dream",
    name: "Merrithew At Home SPX Reformer Package",
    price: "$3,349.00",
    description:
      "The real studio-brand reformer for home. Merrithew is the company behind STOTT PILATES, and the At Home SPX package brings its studio lineage into a home-sized machine. It is a serious investment at $3,349.00, sold by Amazon.com. At a common $30–$40 per studio class, that is roughly the cost of 85 to 110 classes, so it makes sense for someone who already practises several times a week and plans to keep going for years.",
    url: amazon("B004FGT0TM"),
    glance: "Home reformer",
  },
  {
    tier: "Best",
    tag: "The established middle",
    name: "AeroPilates Reformer by Stamina",
    price: "$539.99",
    description:
      "An established home brand with a long track record. It uses cord resistance rather than springs, so it feels different from a studio reformer, and it folds for storage. A sensible middle ground at $539.99.",
    url: amazon("B07G5J3SKS"),
  },
  {
    tier: "Budget",
    tag: "The accessible option",
    name: "WINDFOOT Foldable Pilates Reformer",
    price: "$295.99",
    description:
      "A budget spring reformer that folds away. WINDFOOT is a newer brand with less track record than the names above, so treat it as an accessible way to try reformer work at home rather than a studio replacement. At $295.99 it costs roughly what 7 to 10 studio classes commonly cost.",
    url: amazon("B0D31767J1"),
  },
];

const ALL_ITEMS: Item[] = [...SECTIONS.flatMap((s) => s.items), ...DREAM];

const priceNumber = (price: string) => {
  const n = price.replace(/[^0-9.]/g, "");
  return n === "" ? "0" : n;
};

const findItem = (name: string) => {
  const item = ALL_ITEMS.find((i) => i.name === name);
  if (!item) throw new Error(`Missing item: ${name}`);
  return item;
};

const STARTER_KIT = [
  "CRZ YOGA Butterluxe Leggings 25\"",
  "CRZ YOGA Butterluxe U Back Sports Bra",
  "Muezna Pilates Grip Socks (6 pairs)",
  "Owala FreeSip Stainless Steel Water Bottle, 24 oz",
  "Kitsch 5\" Large Claw Clips (Black & Tort)",
  "Sportsnew Tote Yoga Mat Gym Bag 20L",
  "Gaiam Premium Yoga Mat 6mm",
  "Gaiam Pilates Ring Fitness Circle 15\"",
].map(findItem);

const FULL_EDIT = [
  "Varley Freesoft Piped Full Leggings (Marina)",
  "Varley Freesoft Harley Bralette (Marina)",
  "TAVI Stacy Slouch Pilates Socks, 2-Pack",
  "Bala Bangles Wrist & Ankle Weights, 1 lb (pair)",
  "STANLEY Quencher H2.0 Flow State Tumbler 40 oz (Peony)",
  "Kitsch 5\" Large Claw Clips (Black & Tort)",
  "Sportsnew Tote Yoga Mat Gym Bag 20L",
  "Varley Callie Knit Top (Porcelain Blue)",
  "Varley Davidson Sweat (Taupe Marl)",
  "Liforme Classic Yoga Mat (alignment design)",
  "Bala Pilates Ball (small, non-weighted)",
  "Balanced Body Ultra-Fit Circle Mini 12\"",
  "Therabody TheraGun Relief Massage Gun",
].map(findItem);

// Sum in cents to avoid floating-point drift
const kitTotal = (items: Item[]) =>
  (items.reduce((sum, i) => sum + Math.round(Number(priceNumber(i.price)) * 100), 0) / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

const STARTER_TOTAL = kitTotal(STARTER_KIT);
const FULL_TOTAL = kitTotal(FULL_EDIT);

const GLANCE = ALL_ITEMS.filter((i) => i.glance);

const FAQS = [
  {
    q: "What are pilates princess essentials?",
    a: "The pilates princess aesthetic is a polished, soft-toned take on studio Pilates: a matching set, grip socks (often slouch-style), a claw clip, a statement water bottle, light wrist and ankle weights such as Bala Bangles, and a cosy post-class layer. The essentials that matter most for performance are leggings that stay opaque when stretched, grip socks with full-sole grip, and a bra that stays put when you lie and roll.",
  },
  {
    q: "What does a pilates princess wear to class?",
    a: "Usually a matching legging-and-bralette set in a soft colour, grip socks, and hair up in a claw clip, with a knit or sweatshirt for after class. Our pick is the Varley Freesoft Piped Full Leggings ($78.40) with the Harley Bralette ($52.80), both in Marina, so they genuinely match. The budget version is the CRZ YOGA Butterluxe leggings ($32.00) and U Back bra ($28.00).",
  },
  {
    q: "How much does the pilates princess aesthetic cost?",
    a: `Using the verified prices on this page, our starter aesthetic kit of budget dupes (set, socks, bottle, claw clip, tote, mat and ring) totals ${STARTER_TOTAL}. The full edit, with the Varley set and layers, TAVI socks, Bala Bangles, Stanley tumbler, Liforme mat, props and a TheraGun Relief, totals ${FULL_TOTAL}, before the optional brand-direct pieces and any home reformer.`,
  },
  {
    q: "Are Bala Bangles worth it for Pilates?",
    a: "They are worth it if you will actually use them: light wrist and ankle weights add real challenge to mat arm series and leg work, and Bala's design is easy to take on and off. Start with the 1 lb pair ($55.00); the 2 lb pair ($65.00) is a good step up for leg work. Keep the load light and the form precise.",
  },
  {
    q: "Stanley or Owala for Pilates?",
    a: "For performance, the Owala FreeSip 24 oz ($29.99) is more practical: it is compact and fits a bag pocket or studio cubby easily. The Stanley Quencher 40 oz in Peony ($45.00) holds more and is the more aesthetic choice, but it is tall and best carried upright.",
  },
  {
    q: "Is a home reformer worth it for the pilates princess lifestyle?",
    a: "Only if you already practise regularly. Studio reformer classes in major US cities commonly cost $30–$40 or more each. The WINDFOOT Foldable Reformer ($295.99) costs roughly 7 to 10 classes; the Merrithew At Home SPX Reformer Package ($3,349.00) is a long-term investment for someone practising several times a week.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${PAGE_URL}/#article`,
      "headline": TITLE,
      "description": DESCRIPTION,
      "image": {
        "@type": "ImageObject",
        "url": HERO_IMAGE,
        "width": 1200,
        "height": 630,
      },
      "author": {
        "@type": "Organization",
        "@id": "https://pilatescollectiveclub.com/#organization",
        "name": "Pilates Collective Club",
        "url": "https://pilatescollectiveclub.com",
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://pilatescollectiveclub.com/#organization",
        "name": "Pilates Collective Club",
        "logo": {
          "@type": "ImageObject",
          "url": "https://pilatescollectiveclub.com/pictures/pcc-logo.png",
        },
      },
      "datePublished": "2026-09-27",
      "dateModified": "2026-09-27",
      "url": PAGE_URL,
      "mainEntityOfPage": PAGE_URL,
      "articleSection": "Style",
      "inLanguage": "en-US",
    },
    {
      "@type": "ItemList",
      "name": "Pilates Princess Essentials (2026)",
      "numberOfItems": ALL_ITEMS.length,
      "itemListElement": ALL_ITEMS.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "description": p.description,
          "offers": { "@type": "Offer", "priceCurrency": "USD", "price": priceNumber(p.price), "availability": "https://schema.org/InStock", "url": p.url },
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Pilates Princess Essentials", "item": PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": FAQS.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
    },
  ],
};

const eyebrowStyle = { color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" };
const h2Style = { color: "#1b1c1c", fontFamily: "'Playfair Display', serif" };
const bodyStyle = { color: "#53433e", fontFamily: "'Montserrat', sans-serif" };
const mutedStyle = { color: "#86736d", fontFamily: "'Montserrat', sans-serif" };
const cardStyle = { backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" };
const guideLinkStyle = { color: "#8b4a31", fontFamily: "'Montserrat', sans-serif", textDecoration: "none" };

function ProductBlock({ item }: { item: Item }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{item.tag}</span>
      </div>
      <ProductCard name={item.name} description={item.description} price={item.price} affiliateUrl={item.url} />
    </div>
  );
}

function KitList({ title, subtitle, items, total }: { title: string; subtitle: string; items: Item[]; total: string }) {
  return (
    <div className="rounded-xl p-6" style={cardStyle}>
      <p className="text-lg font-semibold mb-1" style={h2Style}>{title}</p>
      <p className="text-xs mb-4" style={mutedStyle}>{subtitle}</p>
      <ul className="space-y-2 mb-4">
        {items.map((i) => (
          <li key={i.name} className="flex justify-between gap-3 text-xs" style={bodyStyle}>
            <span>{i.name}</span>
            <span className="shrink-0 font-semibold">{i.price}</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-between gap-3 pt-3" style={{ borderTop: "1px solid rgba(217,194,186,0.5)" }}>
        <span className="text-sm font-semibold" style={h2Style}>Total</span>
        <span className="text-sm font-semibold" style={eyebrowStyle}>{total}</span>
      </div>
    </div>
  );
}

export default function PilatesPrincessEssentialsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={eyebrowStyle}>Style Edit</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Essentials</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={h2Style}>
              Pilates Princess Essentials<br /><span style={{ color: "#8b4a31" }}>(2026): The Aesthetic Edit</span>
            </h1>
            <p className="text-sm mb-6" style={mutedStyle}>Updated September 2026 · 11 min read</p>
            <p className="text-xs mb-8" style={mutedStyle}>
              *Most links on this page go to Amazon, and we earn a small commission on qualifying purchases. Two picks (Alo Yoga and Lululemon) link directly to the brand&apos;s own website and are clearly marked. Prices were verified on 27 September 2026 and can change.
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed mb-6" style={{ ...bodyStyle, fontWeight: 300 }}>
              The pilates princess aesthetic is soft colours, matching sets, slouchy grip socks, a claw clip and a beautiful water bottle. It is easy to buy the look and end up with leggings that go sheer on the footbar or a bra that slides every time you roll. This edit works the other way round: <strong style={{ fontWeight: 600 }}>performance first, pretty second</strong>. Every pick has a job in class, every price was checked against a live listing, and wherever a budget dupe does the job, we say so.
            </p>
            <p className="text-sm leading-relaxed" style={bodyStyle}>
              Want the no-frills version? See our <Link href="/blog/pilates-essentials" style={guideLinkStyle}>complete Pilates essentials list →</Link> or, for studio classes, our <Link href="/blog/reformer-pilates-essentials" style={guideLinkStyle}>reformer Pilates essentials →</Link>
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-retail-activewear.png" alt="Pilates princess essentials — soft-toned matching activewear sets and studio accessories on a boutique rail" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            {/* At a glance */}
            <div className="mb-10 mt-4 overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
              <div className="px-6 py-4" style={{ backgroundColor: "#f6f3f2" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={eyebrowStyle}>At a Glance — the complete edit</p>
              </div>
              {GLANCE.map((p, i) => (
                <div key={p.name} className="flex items-center gap-3 sm:gap-4 px-6 py-4" style={{ borderTop: i === 0 ? "none" : "1px solid rgba(217,194,186,0.25)", backgroundColor: "#ffffff" }}>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] mb-0.5" style={mutedStyle}>{p.glance}</p>
                    <p className="text-sm font-semibold leading-tight" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{p.name}</p>
                  </div>
                  <span className="text-xs font-semibold hidden md:block shrink-0 mr-3" style={mutedStyle}>{p.price}</span>
                  <a href={p.url} target="_blank" rel="noopener noreferrer nofollow"
                    style={{ display: "block", fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "10px 14px", whiteSpace: "nowrap", flexShrink: 0 }}
                  >Shop →</a>
                </div>
              ))}
            </div>

            {/* Principles */}
            <div className="mb-16 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={h2Style}>How we edited: performance first, pretty second</h2>
              <p className="text-sm leading-relaxed mb-6" style={bodyStyle}>
                An aesthetic is only worth buying into if it survives a real class. Four rules shaped every pick on this page.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { heading: "It has to work on the carriage", body: "Leggings that stay opaque in deep flexion, a top that stays put on your back, socks with real sole grip. If it fails in class, it is not an essential, however good it looks." },
                  { heading: "A real match beats a near-miss", body: "Our headline set is two Varley Freesoft pieces listed in the same Marina colourway, so they genuinely match rather than sit a shade apart." },
                  { heading: "Budget dupes, honestly offered", body: "Where a cheaper piece does the same job, it is listed as the budget pick. The premium version earns its place on finish and feel, not on performance you cannot get elsewhere." },
                  { heading: "Verified, not invented", body: "Every Amazon price was checked against a live, in-stock listing. We do not quote ratings or claim to have tested products; the two brand-direct links are flagged." },
                ].map((item) => (
                  <div key={item.heading} className="rounded-xl p-5" style={cardStyle}>
                    <p className="text-sm font-semibold mb-1.5" style={h2Style}>{item.heading}</p>
                    <p className="text-sm leading-relaxed" style={bodyStyle}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Category sections */}
            {SECTIONS.map((s) => (
              <div key={s.id} id={s.id} className="mb-16">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={eyebrowStyle}>{s.eyebrow}</p>
                <h2 className="text-3xl font-semibold mb-4" style={h2Style}>{s.heading}</h2>
                <p className="text-sm leading-relaxed mb-10" style={bodyStyle}>{s.intro}</p>
                <div className="space-y-10">
                  {s.items.map((item) => (
                    <ProductBlock key={item.name} item={item} />
                  ))}
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2">
                  {s.guides.map((g) => (
                    <Link key={g.href + g.label} href={g.href} className="text-xs font-semibold uppercase tracking-[0.12em]" style={guideLinkStyle}>{g.label}</Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Kit cost */}
            <div className="mb-16 rounded-2xl p-6 md:p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={eyebrowStyle}>What the kit costs</p>
              <h2 className="text-2xl font-semibold mb-3" style={h2Style}>The starter aesthetic vs the full edit</h2>
              <p className="text-sm leading-relaxed mb-6" style={bodyStyle}>
                The honest maths, using the verified Amazon prices above. Both kits cover a matching set, grip socks, a bottle, a claw clip, a bag and home props; the full edit adds the Varley layers, Bala Bangles and recovery. Brand-direct pieces (Alo, Lululemon) and the home reformer are left out of both totals.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <KitList title="The starter aesthetic" subtitle="Budget dupes that do the job" items={STARTER_KIT} total={STARTER_TOTAL} />
                <KitList title="The full edit" subtitle="The premium pick in every category" items={FULL_EDIT} total={FULL_TOTAL} />
              </div>
              <p className="text-xs leading-relaxed" style={mutedStyle}>
                Our advice: you do not need to buy either kit in one go. Start with the pieces you will use every class (leggings, grip socks, a claw clip) and treat the layers, bangles and mat as upgrades. The Varley set alone is $131.20 for the pair, close to the entire starter kit, so the dupe route is a completely reasonable place to begin.
              </p>
            </div>

            {/* The dream */}
            <div id="the-dream" className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={eyebrowStyle}>07 — The dream</p>
              <h2 className="text-3xl font-semibold mb-4" style={h2Style}>The dream: a reformer of your own</h2>
              <p className="text-sm leading-relaxed mb-4" style={bodyStyle}>
                Every aesthetic has its ultimate piece, and for this one it is a reformer at home: sunlight, a quiet corner, a session whenever you like. It is also the one purchase on this page that can pay for itself. Studio reformer classes in major US cities commonly cost $30–$40 or more each, so if you are going three or four times a week the numbers add up quickly.
              </p>
              <p className="text-sm leading-relaxed mb-10" style={bodyStyle}>
                Two honest caveats. A home machine does not replace a teacher&apos;s eye, so keep some studio or online classes in the mix. And measure your space before you fall in love with a machine: reformers need floor length plus room to move around them.
              </p>
              <div className="space-y-10">
                {DREAM.map((item) => (
                  <ProductBlock key={item.name} item={item} />
                ))}
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2">
                <Link href="/blog/merrithew-pilates" className="text-xs font-semibold uppercase tracking-[0.12em]" style={guideLinkStyle}>Full guide: Merrithew for home →</Link>
                <Link href="/blog/best-pilates-reformer-under-500" className="text-xs font-semibold uppercase tracking-[0.12em]" style={guideLinkStyle}>Best reformers under $500 →</Link>
                <Link href="/blog/best-pilates-reformer-for-beginners" className="text-xs font-semibold uppercase tracking-[0.12em]" style={guideLinkStyle}>Best reformers for beginners →</Link>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={h2Style}>Frequently asked questions</h2>
              <div className="space-y-6">
                {FAQS.map((item) => (
                  <div key={item.q} className="rounded-xl p-6" style={cardStyle}>
                    <p className="text-base font-semibold mb-2" style={h2Style}>{item.q}</p>
                    <p className="text-sm leading-relaxed" style={bodyStyle}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Further reading */}
            <div>
              <h2 className="text-2xl font-semibold mb-8" style={h2Style}>Further reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="Varley for Pilates" excerpt="The studio-favourite label behind our matching set: which Varley pieces work best for reformer and mat." href="/blog/varley-pilates-activewear" category="Brand Guide" readTime="8 min read" date="September 2026" />
                <ArticleCard title="Alo Yoga for Pilates" excerpt="Airbrush, Airlift and the rest of the Alo range, judged on how they perform on the carriage." href="/blog/alo-yoga-pilates" category="Brand Guide" readTime="8 min read" date="September 2026" />
                <ArticleCard title="Best Luxury Pilates Leggings" excerpt="The premium leggings worth the price, and what you actually get for the extra spend." href="/blog/best-luxury-pilates-leggings" category="Clothing" readTime="9 min read" date="September 2026" />
                <ArticleCard title="Pilates Essentials: The Complete List" excerpt="The best pick in every category, from grip socks to a home reformer, all in one place." href="/blog/pilates-essentials" category="Essentials" readTime="12 min read" date="September 2026" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best reformer studios in Los Angeles…" />
      </main>
      <Footer />
    </>
  );
}
