import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import { jsonLdHtml } from "@/lib/schema";

const PAGE_URL = "https://pilatescollectiveclub.com/blog/pilates-essentials";
const HERO_IMAGE = "https://pilatescollectiveclub.com/pictures/stitch-pilates-essentials-logbook.png";
const TITLE = "Pilates Essentials (2026): Every Must-Have in One List";
const DESCRIPTION =
  "Pilates essentials in one list: the best, budget and splurge pick for every category — clothes, grip socks, mat, props, recovery and a home reformer.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: "Every Pilates must-have on one page — best, budget and splurge picks, verified in-stock prices, and what the full kit really costs.",
    type: "article",
    url: PAGE_URL,
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: "Pilates essentials checklist — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilates Essentials (2026): Every Must-Have",
    description: "Best, budget and splurge picks for every Pilates category — plus what the full kit costs.",
    images: [HERO_IMAGE],
  },
  keywords: [
    "pilates essentials",
    "pilates must haves",
    "pilates equipment list",
    "pilates gear checklist",
    "what do i need for pilates",
    "pilates accessories list",
    "pilates essentials for beginners",
    "pilates essentials 2026",
    "home pilates equipment essentials",
    "best pilates accessories",
    "pilates kit list",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=pilatescollective-20`;

type Pick = {
  tier: "Best" | "Budget" | "Splurge" | "Alternative" | "Step Up";
  name: string;
  price: string;
  url: string;
  description: string;
};

type Category = {
  id: string;
  group: string;
  title: string;
  shortName: string;
  intro: string;
  guideHref: string;
  guideLabel: string;
  picks: Pick[];
};

const CATEGORIES: Category[] = [
  // ─── Clothing ───
  {
    id: "leggings",
    group: "Clothing",
    title: "Pilates leggings",
    shortName: "Leggings",
    intro:
      "Leggings do more work in Pilates than in almost any other class: you roll, you lift your legs overhead, and on the reformer your feet go into straps. Look for a high waist that stays put, fabric that stays opaque in a deep squat, and no bulky seams or zips that press into the mat.",
    guideHref: "/blog/best-pilates-leggings",
    guideLabel: "Full leggings guide",
    picks: [
      {
        tier: "Best",
        name: "Varley Freesoft Piped Full Leggings (Marina)",
        price: "$78.40",
        url: amz("B0FXN378H8"),
        description:
          "Varley is a studio-favourite label, and the Freesoft line is its soft, brushed-feel fabric. This full-length, piped pair is sold through Shopbop, an Amazon company, and the listing is shown in Marina. It is the one to buy if you want a single pair that looks as good on the walk to class as it does on the carriage.",
      },
      {
        tier: "Budget",
        name: "CRZ YOGA Butterluxe Leggings 25\"",
        price: "$32.00",
        url: amz("B09P1G2952"),
        description:
          "Sold by CRZ YOGA directly on Amazon, Butterluxe is the brand's buttery-soft line and a common first pair for people who are not ready to spend $100 on leggings. The 25\" inseam lands around the ankle on most heights. At $32.00 you could buy three pairs for roughly the price of one designer pair.",
      },
      {
        tier: "Splurge",
        name: "Alo Yoga Airbrush Legging",
        price: "~$128 (aloyoga.com)",
        url: "https://www.aloyoga.com/",
        description:
          "Not sold on Amazon — this links to aloyoga.com. Airbrush is Alo's sleek, sculpting legging and one of the most recognisable pieces in studio changing rooms. Price is approximate and set by Alo; check the site for current colours and sizes.",
      },
    ],
  },
  {
    id: "sports-bra",
    group: "Clothing",
    title: "Pilates sports bra",
    shortName: "Sports bra",
    intro:
      "Pilates is low-impact, so most people do not need maximum-support running bras. What matters is a band that does not roll up when you lie on your back, straps that do not dig in during arm work, and a back design that is comfortable against a mat or headrest.",
    guideHref: "/blog/best-pilates-sports-bra",
    guideLabel: "Full sports bra guide",
    picks: [
      {
        tier: "Best",
        name: "Varley Freesoft Harley Bralette (Marina)",
        price: "$52.80",
        url: amz("B0FXN42JWR"),
        description:
          "The Harley Bralette is in the same Freesoft fabric and the same Marina colour as the leggings above, so the two make a genuine matching set. Sold through Shopbop. It is a light-support bralette, which suits mat and reformer work but not high-impact cardio.",
      },
      {
        tier: "Budget",
        name: "CRZ YOGA Butterluxe U Back Sports Bra",
        price: "$28.00",
        url: amz("B09ZP9VXLJ"),
        description:
          "The Butterluxe fabric again, this time in a U-back sports bra sold by CRZ YOGA. A U back keeps straps and clasps away from your spine, which is comfortable during roll-downs and supine work on the carriage.",
      },
    ],
  },
  // ─── Studio accessories ───
  {
    id: "grip-socks",
    group: "Studio accessories",
    title: "Grip socks",
    shortName: "Grip socks",
    intro:
      "Most reformer studios require grip socks, for hygiene and so your feet do not slide on the footbar or carriage. Full-sole grip matters more than style. Buy at least two pairs so one can dry while you wear the other.",
    guideHref: "/blog/best-pilates-grip-socks",
    guideLabel: "Full grip socks guide",
    picks: [
      {
        tier: "Best",
        name: "toesox Low Rise Grip Socks 2-Pack (Full Toe)",
        price: "$30.00",
        url: amz("B07QHNDHW3"),
        description:
          "toesox is the original studio grip-sock brand, and this low-rise 2-pack has its full-toe design, with each toe in its own pocket. Sold by The Active Footwear Store, the brand's official distributor on Amazon.",
      },
      {
        tier: "Budget",
        name: "Muezna Pilates Grip Socks (6 Pairs)",
        price: "$7.99",
        url: amz("B0DQ53GSP5"),
        description:
          "Six pairs for $7.99, sold by UISIC. A multi-pack means you always have a clean pair in your bag, which matters more than most people expect once you are going to class several times a week.",
      },
      {
        tier: "Splurge",
        name: "TAVI Stacy Slouch Pilates Socks 2-Pack",
        price: "$40.00",
        url: amz("B0GFPGMWWS"),
        description:
          "TAVI's slouch style is the look many studio regulars go for. This 2-pack is sold by The Active Footwear Store. If you prefer a toeless cut instead, the Tucketts Allegro toeless sock ($18.99) is covered in our full guide.",
      },
    ],
  },
  {
    id: "gloves",
    group: "Studio accessories",
    title: "Pilates gloves",
    shortName: "Gloves",
    intro:
      "Gloves are optional, but they help if your hands get sweaty on reformer straps or handles, or if you do a lot of plank and push-up work on a slippery mat. Half-finger designs keep your fingertips free.",
    guideHref: "/blog/best-pilates-gloves",
    guideLabel: "Full gloves guide",
    picks: [
      {
        tier: "Best",
        name: "TAVI Half Finger Gym Gloves",
        price: "$31.99",
        url: amz("B09GPVMF86"),
        description:
          "A half-finger glove with full-coverage grips across the palm, from TAVI and sold by The Active Footwear Store. It is the natural partner to TAVI or toesox socks if you want grip at both hands and feet.",
      },
      {
        tier: "Budget",
        name: "Gaiam Grippy Yoga Gloves",
        price: "$7.65",
        url: amz("B001VROVEM"),
        description:
          "An inexpensive way to find out whether you like training in gloves at all, from an established yoga brand. Sold by W&E Distribution.",
      },
    ],
  },
  {
    id: "water-bottle",
    group: "Studio accessories",
    title: "Water bottle",
    shortName: "Water bottle",
    intro:
      "Studios are warm and reformer classes are harder than they look. An insulated bottle that closes fully is the best choice, because it will spend time on its side in your bag and on the studio floor.",
    guideHref: "/blog/best-pilates-water-bottle",
    guideLabel: "Full water bottle guide",
    picks: [
      {
        tier: "Best",
        name: "Owala FreeSip Stainless Steel Water Bottle 24 oz",
        price: "$29.99",
        url: amz("B0BZYCJK89"),
        description:
          "The FreeSip lid lets you sip through the built-in straw or tilt it back to drink from the spout, and it locks shut for your bag. 24 oz is a good size for a single class. Sold by Amazon.com.",
      },
      {
        tier: "Splurge",
        name: "STANLEY Quencher H2.0 Flow State Tumbler 40 oz (Peony)",
        price: "$45.00",
        url: amz("B0CRMP3RQT"),
        description:
          "The 40 oz Quencher holds far more than you need for one class, which makes it better for all-day desk-to-studio use. Note that a straw tumbler is not a fully sealed bottle, so keep it upright. Sold by Amazon.com.",
      },
    ],
  },
  {
    id: "bag",
    group: "Studio accessories",
    title: "Pilates bag",
    shortName: "Bag",
    intro:
      "A good Pilates bag separates the clean from the sweaty. Look for a shoe compartment and a wet pocket, and a strap or sleeve for a mat if you take your own to class.",
    guideHref: "/blog/best-pilates-bag",
    guideLabel: "Full bag guide",
    picks: [
      {
        tier: "Best",
        name: "Sportsnew Tote Yoga Mat Gym Bag 20L",
        price: "$29.99",
        url: amz("B0BHP38PNG"),
        description:
          "A 20L tote with a separate shoe compartment and a wet pocket for used socks and towels, sold by Sportsnew. It is built around the studio routine: clothes, bottle, socks and a mat in one bag.",
      },
      {
        tier: "Budget",
        name: "BAGSMART Duffle Bag",
        price: "$21.43",
        url: amz("B0CSYNW3X3"),
        description:
          "A gym and weekender duffle from BAGSMART. It is less Pilates-specific than the tote, but it holds a full change of clothes and works for travel as well as class.",
      },
    ],
  },
  {
    id: "towel",
    group: "Studio accessories",
    title: "Mat towel",
    shortName: "Mat towel",
    intro:
      "A mat-size towel keeps a shared studio mat or reformer carriage between you and the last person's sweat. A silicone-backed towel stays in place instead of bunching under you.",
    guideHref: "/blog/best-yoga-mat-towel-for-pilates",
    guideLabel: "Full mat towel guide",
    picks: [
      {
        tier: "Best",
        name: "Shandali Stickyfiber Yoga Towel",
        price: "$19.99",
        url: amz("B011IU43WG"),
        description:
          "A mat-size towel with a silicone backing that grips the mat underneath. It also doubles as a sweat towel after class. Sold by Shandali.",
      },
    ],
  },
  {
    id: "claw-clip",
    group: "Studio accessories",
    title: "Hair claw clip",
    shortName: "Claw clip",
    intro:
      "Small, but you will notice if you forget it. Long hair needs to be off your neck for supine work, and a high ponytail with a hard elastic can press into the headrest. A claw clip placed low avoids both.",
    guideHref: "/blog/pilates-studio-bag-essentials",
    guideLabel: "Studio bag essentials",
    picks: [
      {
        tier: "Best",
        name: "Kitsch 5\" Large Claw Clips (Black & Tort)",
        price: "$11.87",
        url: amz("B09GYPV213"),
        description:
          "Large claw clips in black and tortoiseshell, sold by Kitsch. The 5\" size holds thick or long hair in one twist.",
      },
    ],
  },
  // ─── Home equipment ───
  {
    id: "mat",
    group: "Home equipment",
    title: "Pilates mat",
    shortName: "Mat",
    intro:
      "Pilates mat work puts your spine directly on the floor for roll-ups, rolling like a ball and the whole series of supine exercises. A thicker, dense mat protects the vertebrae better than a thin, travel-style yoga mat.",
    guideHref: "/blog/best-pilates-mat",
    guideLabel: "Full mat guide",
    picks: [
      {
        tier: "Best",
        name: "Manduka PRO Yoga Mat 6mm (Black)",
        price: "$144.00",
        url: amz("B0000DZFXZ"),
        description:
          "The Manduka PRO is a 6mm mat with a long reputation for durability, which is why it is often the last mat people buy. The 6mm thickness suits spinal work. Sold by Amazon.com.",
      },
      {
        tier: "Budget",
        name: "Gaiam Premium Yoga Mat 6mm",
        price: "$21.00",
        url: amz("B09WF4GPPC"),
        description:
          "The same 6mm thickness at a fraction of the price, from an established brand and sold by Amazon.com. It is the right mat if you are just starting home practice and want to find out whether it will stick.",
      },
      {
        tier: "Splurge",
        name: "Liforme Classic Yoga Mat",
        price: "$165.00",
        url: amz("B01CGLCGRA"),
        description:
          "Liforme's alignment markings help with centring your body and placing your hands and feet evenly, which is useful in Pilates as well as yoga. Sold by Liforme on Amazon.",
      },
    ],
  },
  {
    id: "ring",
    group: "Home equipment",
    title: "Pilates ring",
    shortName: "Pilates ring",
    intro:
      "The ring (or magic circle) adds light resistance for inner thighs, arms and chest, and it gives useful feedback about whether both sides are working evenly. It is one of the cheapest ways to make mat work harder.",
    guideHref: "/blog/best-pilates-ring",
    guideLabel: "Full Pilates ring guide",
    picks: [
      {
        tier: "Best",
        name: "Balanced Body Ultra-Fit Circle Mini 12\"",
        price: "$30.00",
        url: amz("B0008MF640"),
        description:
          "Balanced Body is one of the main studio equipment makers, and this is its 12\" ring, sold by Balanced Body Inc. The smaller diameter works well between the knees or ankles.",
      },
      {
        tier: "Budget",
        name: "Gaiam Pilates Ring Fitness Circle 15\"",
        price: "$13.93",
        url: amz("B086HNGNFZ"),
        description:
          "A full-size 15\" ring at under half the price, sold by Amazon.com. A sensible first ring if you are trying out home Pilates.",
      },
    ],
  },
  {
    id: "ball",
    group: "Home equipment",
    title: "Pilates ball",
    shortName: "Pilates ball",
    intro:
      "A small soft ball goes under the pelvis for bridging, behind the back for supported roll-downs, or between the knees for inner-thigh work. It is also a common prop in many online classes.",
    guideHref: "/blog/best-pilates-ball",
    guideLabel: "Full Pilates ball guide",
    picks: [
      {
        tier: "Best",
        name: "Balanced Body Inflatable Workout Ball 12\"",
        price: "$30.00",
        url: amz("B002YR1YJ8"),
        description:
          "A 12\" inflatable ball from Balanced Body, sold by Balanced Body Inc. You control the firmness by how much you inflate it.",
      },
      {
        tier: "Alternative",
        name: "Bala Pilates Ball",
        price: "$29.00",
        url: amz("B0BQCGM6N9"),
        description:
          "A small, non-weighted Pilates ball from Bala, sold by Bala Bangles. Essentially the same price as the Balanced Body ball, so choose on colour and which brand you prefer.",
      },
    ],
  },
  {
    id: "bands",
    group: "Home equipment",
    title: "Resistance bands",
    shortName: "Resistance bands",
    intro:
      "Bands are the closest thing to reformer springs you can fit in a drawer. Mini loops work glutes and hips; long flat bands mimic reformer strap work for arms and legs.",
    guideHref: "/blog/best-pilates-resistance-bands",
    guideLabel: "Full resistance bands guide",
    picks: [
      {
        tier: "Best",
        name: "Perform Better Mini Band Set of 4",
        price: "$19.95",
        url: amz("B01GVS9EQK"),
        description:
          "Four mini loops in different resistances, sold by Synergee USA. Having four levels means you can progress without buying more.",
      },
      {
        tier: "Budget",
        name: "THERABAND Resistance Bands Beginner Kit",
        price: "$11.99",
        url: amz("B01A58FHQ8"),
        description:
          "THERABAND is the band brand physiotherapists use, and this beginner kit is sold by Amazon.com. Long flat bands suit the leg and arm work that mimics the reformer.",
      },
    ],
  },
  {
    id: "weights",
    group: "Home equipment",
    title: "Ankle and wrist weights",
    shortName: "Ankle & wrist weights",
    intro:
      "Light weights make side-lying leg series and arm work noticeably harder without changing the exercise. In Pilates you only need a little: 1 lb per limb is plenty to start.",
    guideHref: "/blog/best-pilates-ankle-weights",
    guideLabel: "Full ankle weights guide",
    picks: [
      {
        tier: "Best",
        name: "Bala Bangles Wrist & Ankle Weights 1 lb (Pair)",
        price: "$55.00",
        url: amz("B0BQCJRL6Q"),
        description:
          "Bala Bangles are the wrap-around weights that fit both wrists and ankles. The 1 lb pair is the right starting weight for Pilates. Sold by Bala Bangles.",
      },
      {
        tier: "Step Up",
        name: "Bala Bangles Wrist & Ankle Weights 2 lb (Pair)",
        price: "$65.00",
        url: amz("B0BQCG9VMY"),
        description:
          "The same design at 2 lb each. Buy this once 1 lb feels easy, or if you mainly want them for ankles, where legs can handle more load than arms.",
      },
    ],
  },
  {
    id: "arc",
    group: "Home equipment",
    title: "Pilates Arc (spine corrector)",
    shortName: "Pilates Arc",
    intro:
      "The Arc is a step barrel and spine corrector in one: lie over it to open the chest, sit on it for abdominal work, or use the step for stretches. It is an optional extra rather than an essential, but it is the most studio-like prop you can buy for under $200.",
    guideHref: "/blog/best-pilates-barrel",
    guideLabel: "Full barrel guide",
    picks: [
      {
        tier: "Splurge",
        name: "Balanced Body Pilates Arc",
        price: "$189.99",
        url: amz("B002XVSNRG"),
        description:
          "Balanced Body's Arc, sold by Balanced Body Inc. It is light enough to store under a bed and pairs well with a mat for a complete home setup.",
      },
    ],
  },
  // ─── Recovery ───
  {
    id: "foam-roller",
    group: "Recovery",
    title: "Foam roller",
    shortName: "Foam roller",
    intro:
      "A foam roller is both a recovery tool and a Pilates prop. Lying lengthways along it is a classic balance and core challenge, and rolling out the upper back feels good after a class full of flexion.",
    guideHref: "/blog/best-pilates-foam-roller",
    guideLabel: "Full foam roller guide",
    picks: [
      {
        tier: "Best",
        name: "TriggerPoint GRID 2.0 Foam Roller",
        price: "$74.99",
        url: amz("B006GUC9KC"),
        description:
          "The GRID is a hollow-core roller with a textured surface, sold by Amazon.com. Hollow-core rollers hold their shape better over time than soft foam ones.",
      },
      {
        tier: "Splurge",
        name: "Therabody WaveRoller",
        price: "$179.99",
        url: amz("B08HW7GXSQ"),
        description:
          "A vibrating roller from Therabody, sold by TheraGun. You pay for the vibration, so it is only worth it if you already roll regularly and want more from each session.",
      },
    ],
  },
  {
    id: "massage-gun",
    group: "Recovery",
    title: "Massage gun",
    shortName: "Massage gun",
    intro:
      "Not an essential for your first month, but a massage gun is the recovery tool regulars reach for most often once they are training several times a week.",
    guideHref: "/blog/best-massage-gun-for-pilates",
    guideLabel: "Full massage gun guide",
    picks: [
      {
        tier: "Best",
        name: "Therabody TheraGun Relief",
        price: "$159.99",
        url: amz("B0CNS894RH"),
        description:
          "The TheraGun Relief is Therabody's entry-level massage gun, sold by TheraGun. It is simpler than the brand's pro models, which suits general soreness after class.",
      },
    ],
  },
  // ─── The big upgrade ───
  {
    id: "home-reformer",
    group: "The big upgrade",
    title: "Home Pilates reformer",
    shortName: "Home reformer",
    intro:
      "Everything above supports your practice. A reformer changes it. If you are paying for studio classes several times a week, a home machine is the one purchase that can pay for itself.",
    guideHref: "/blog/best-pilates-reformer-for-beginners",
    guideLabel: "Full beginner reformer guide",
    picks: [
      {
        tier: "Budget",
        name: "WINDFOOT Foldable Pilates Reformer",
        price: "$295.99",
        url: amz("B0D31767J1"),
        description:
          "A foldable spring reformer at under $300. WINDFOOT is a newer brand with less of a track record than the names below, so treat it as an entry point rather than a lifetime machine. See our reformers-under-$500 guide for how it compares.",
      },
      {
        tier: "Best",
        name: "AeroPilates Reformer by Stamina",
        price: "$539.99",
        url: amz("B07G5J3SKS"),
        description:
          "AeroPilates is the established home reformer brand. It uses cord resistance rather than springs, which feels different from a studio machine but is smooth and quiet, and it folds for storage. The safest first reformer for most homes.",
      },
      {
        tier: "Splurge",
        name: "Merrithew At Home SPX Reformer Package",
        price: "$3,349.00",
        url: amz("B004FGT0TM"),
        description:
          "Merrithew (STOTT PILATES) is a studio equipment brand, and the At Home SPX is its home version of a studio spring reformer. Sold by Amazon.com. It is the machine to buy if you want the studio feel at home and plan to use it for years.",
      },
    ],
  },
];

const GROUPS = ["Clothing", "Studio accessories", "Home equipment", "Recovery", "The big upgrade"];

const ALL_ITEMS = CATEGORIES.flatMap((c) => c.picks);

const toNumber = (price: string) => {
  const n = parseFloat(price.replace(/[^0-9.]/g, ""));
  return Number.isNaN(n) ? 0 : n;
};

const fmt = (n: number) => `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

// Kits exclude the optional Pilates Arc and the reformer (priced separately below).
const KIT_CATEGORIES = CATEGORIES.filter((c) => c.id !== "arc" && c.id !== "home-reformer");

const pickTier = (c: Category, tier: Pick["tier"]) => c.picks.find((p) => p.tier === tier) ?? c.picks[0];

const BUDGET_KIT = KIT_CATEGORIES.map((c) => ({ category: c.shortName, pick: pickTier(c, "Budget") }));
const BEST_KIT = KIT_CATEGORIES.map((c) => ({ category: c.shortName, pick: pickTier(c, "Best") }));
const BUDGET_TOTAL = BUDGET_KIT.reduce((sum, k) => sum + toNumber(k.pick.price), 0);
const BEST_TOTAL = BEST_KIT.reduce((sum, k) => sum + toNumber(k.pick.price), 0);

const STUDIO_BUDGET_TOTAL = BUDGET_KIT.filter((k) => ["Clothing", "Studio accessories"].includes(KIT_CATEGORIES.find((c) => c.shortName === k.category)?.group ?? "")).reduce((sum, k) => sum + toNumber(k.pick.price), 0);

const REFORMER = CATEGORIES.find((c) => c.id === "home-reformer")!;

const FAQS = [
  {
    q: "What are the Pilates essentials for beginners?",
    a: "For studio classes: grip socks, leggings that stay opaque when you bend, a supportive but comfortable sports bra and a water bottle. For home practice: a thick mat (around 6mm) first, then a ring, a small ball and resistance bands. Everything else is a nice extra rather than a requirement.",
  },
  {
    q: "What do I need to bring to a Pilates class?",
    a: "Grip socks (most reformer studios require them), a water bottle, a small towel and a hair tie or claw clip. Most studios provide mats and equipment, but a mat towel is useful if you prefer not to lie directly on a shared mat.",
  },
  {
    q: "How much does Pilates equipment cost?",
    a: `Using the verified prices on this page, a budget kit covering clothing, studio accessories, home props and recovery comes to ${fmt(BUDGET_TOTAL)}, and the best pick in every category comes to ${fmt(BEST_TOTAL)}. A home reformer is extra: from $295.99 for the WINDFOOT foldable to $3,349.00 for the Merrithew At Home SPX package.`,
  },
  {
    q: "Do I need special clothes for Pilates?",
    a: "You do not need Pilates-branded clothing, but fitted clothes help. Loose shorts and baggy tops ride up when your legs are overhead, and zips or buttons can catch on reformer straps. High-waisted leggings and a fitted top or sports bra are the simplest option.",
  },
  {
    q: "Is a home reformer worth it?",
    a: "Studio reformer classes in major US cities commonly cost $30–$40 or more each. At those prices, the $539.99 AeroPilates reformer costs roughly the same as 13–18 classes, so if you currently go several times a week, a home machine can pay for itself within a few months. It will not replace an instructor's feedback, so many people combine the two.",
  },
  {
    q: "What is the single most important Pilates purchase?",
    a: "For studio classes, grip socks, because most studios will not let you on a reformer without them. For home practice, a good mat, because every mat exercise puts your spine on it.",
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
      "articleSection": "Equipment",
      "inLanguage": "en-US",
    },
    {
      "@type": "ItemList",
      "name": "Pilates Essentials (2026)",
      "numberOfItems": ALL_ITEMS.length,
      "itemListElement": ALL_ITEMS.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "description": p.description,
          "offers": { "@type": "Offer", "priceCurrency": "USD", "price": p.price.replace(/[^0-9.]/g, "") || "0", "availability": "https://schema.org/InStock", "url": p.url },
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Pilates Essentials", "item": PAGE_URL },
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
const bodyStyle = { color: "#53433e", fontFamily: "'Montserrat', sans-serif" };
const h2Style = { color: "#1b1c1c", fontFamily: "'Playfair Display', serif" };
const inlineLinkStyle = { color: "#8b4a31", textDecoration: "underline" };

export default function PilatesEssentialsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={eyebrowStyle}>Equipment Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Essentials</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Pilates Essentials<br /><span style={{ color: "#8b4a31" }}>(2026): Every Must-Have in One List</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 12 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Most links on this page go to Amazon, and we earn a small commission on qualifying purchases. One pick (the Alo Yoga Airbrush Legging) is not sold on Amazon and links directly to aloyoga.com; it is labelled as such.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Pilates needs less gear than most workouts, but the few things you do need make a real difference: socks that grip, leggings that stay put, a mat thick enough for your spine. This is our master list of Pilates essentials, with a best, budget and (where it is worth it) splurge pick in every category, organised from what you wear to what you might one day put in your living room.
            </p>
            <p className="text-sm leading-relaxed" style={bodyStyle}>
              Every Amazon listing below was checked as live and in stock on September 27, 2026, at the price shown. Prices change, so the final price is whatever the retailer shows at checkout.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-pilates-essentials-logbook.png" alt="Pilates essentials checklist — the complete list of Pilates must-haves for studio and home" fill className="object-cover" style={{ filter: "brightness(0.85)" }} priority />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            {/* Related hubs */}
            <div className="mb-10 mt-4 flex flex-col sm:flex-row gap-3">
              <Link href="/blog/reformer-pilates-essentials" className="flex-1 rounded-xl p-4 text-sm font-semibold" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.4)", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif", textDecoration: "none" }}>
                Doing reformer classes? See our reformer essentials →
              </Link>
              <Link href="/blog/pilates-princess-essentials" className="flex-1 rounded-xl p-4 text-sm font-semibold" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.4)", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif", textDecoration: "none" }}>
                Want the aesthetic edit? → Pilates princess essentials
              </Link>
            </div>

            {/* At a glance table */}
            <div className="mb-16 overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
              <div className="px-6 py-4" style={{ backgroundColor: "#f6f3f2" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={eyebrowStyle}>At a Glance — The Complete List</p>
              </div>
              {CATEGORIES.map((c, i) => {
                const best = pickTier(c, "Best");
                return (
                  <div key={c.id} className="flex items-center gap-3 sm:gap-4 px-6 py-4" style={{ borderTop: i === 0 ? "none" : "1px solid rgba(217,194,186,0.25)", backgroundColor: "#ffffff" }}>
                    <span className="text-base font-semibold w-7 shrink-0 text-center" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{String(i + 1).padStart(2, "0")}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs uppercase tracking-[0.12em]" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
                        <a href={`#${c.id}`} style={{ color: "#86736d", textDecoration: "none" }}>{c.shortName}</a>
                      </p>
                      <p className="text-sm font-semibold leading-tight mt-0.5" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{best.name}</p>
                      <p className="text-xs mt-0.5 md:hidden" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{best.price}</p>
                    </div>
                    <span className="text-xs font-semibold hidden md:block shrink-0 mr-3" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{best.price}</span>
                    <a href={best.url} target="_blank" rel="noopener noreferrer sponsored nofollow"
                      style={{ display: "block", fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "10px 14px", whiteSpace: "nowrap", flexShrink: 0 }}
                    >Shop →</a>
                  </div>
                );
              })}
            </div>

            {/* How to use this list */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={h2Style}>What you actually need, and in what order</h2>
              <p className="text-sm leading-relaxed mb-6" style={bodyStyle}>
                You do not need everything on this list, and you definitely do not need it all at once. Here is how to prioritise, depending on how you practise.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { heading: "Studio classes only", body: "Grip socks, leggings, a sports bra and a water bottle. That is the full list. Add a bag and a mat towel once you are going every week." },
                  { heading: "Mat Pilates at home", body: "A 6mm mat first. Then a ring, a small ball and bands, which together cover most of the props used in online mat classes." },
                  { heading: "Three or more classes a week", body: "Recovery starts to matter: a foam roller first, a massage gun later. This is also when a home reformer starts to make financial sense." },
                  { heading: "Budget vs best", body: "Our Best pick is the one we would choose for most people. Budget is the cheapest option we would still recommend. Splurge is worth it only if the upgrade matters to you." },
                ].map((item) => (
                  <div key={item.heading} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.heading}</p>
                    <p className="text-sm leading-relaxed" style={bodyStyle}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Category sections, grouped */}
            {GROUPS.map((group) => (
              <div key={group} className="mb-8">
                <div className="flex items-center gap-4 mb-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] shrink-0" style={eyebrowStyle}>{group}</p>
                  <div className="flex-1 h-px" style={{ backgroundColor: "#d9c2ba" }} />
                </div>

                {group === "The big upgrade" && (
                  <div className="mb-10 rounded-2xl p-6 md:p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.5)" }}>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={eyebrowStyle}>The maths</p>
                    <p className="text-sm leading-relaxed mb-4" style={bodyStyle}>
                      Studio reformer classes in major US cities commonly cost $30–$40 or more each. At that rate, here is roughly how many classes each reformer below is worth:
                    </p>
                    <ul className="space-y-2">
                      {REFORMER.picks.map((p) => {
                        const n = toNumber(p.price);
                        return (
                          <li key={p.name} className="text-sm" style={bodyStyle}>
                            <span className="font-semibold" style={{ color: "#1b1c1c" }}>{p.name}</span> ({p.price}): about {Math.round(n / 40)}–{Math.round(n / 30)} classes
                          </li>
                        );
                      })}
                    </ul>
                    <p className="text-sm leading-relaxed mt-4" style={bodyStyle}>
                      A home machine will not correct your form the way an instructor does, so most people who buy one keep a class or two in their week. See{" "}
                      <Link href="/blog/is-reformer-pilates-worth-it" style={inlineLinkStyle}>is reformer Pilates worth it</Link>{" "}
                      and{" "}
                      <Link href="/blog/how-much-does-pilates-cost" style={inlineLinkStyle}>how much Pilates costs</Link>{" "}
                      for the full picture.
                    </p>
                  </div>
                )}

                {CATEGORIES.filter((c) => c.group === group).map((c) => (
                  <div key={c.id} id={c.id} className="mb-16 scroll-mt-28">
                    <h2 className="text-3xl font-semibold mb-4" style={h2Style}>{c.title}</h2>
                    <p className="text-sm leading-relaxed mb-8" style={bodyStyle}>{c.intro}</p>
                    <div className="space-y-8">
                      {c.picks.map((p) => (
                        <div key={p.name}>
                          <div className="flex items-center gap-3 mb-4">
                            <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{p.tier}</span>
                          </div>
                          <ProductCard name={p.name} description={p.description} price={p.price} affiliateUrl={p.url} />
                        </div>
                      ))}
                    </div>
                    {c.id === "leggings" && (
                      <p className="text-sm leading-relaxed mb-4" style={bodyStyle}>
                        Brand deep-dives: <Link href="/blog/varley-pilates-activewear" style={inlineLinkStyle}>Varley for Pilates</Link> and{" "}
                        <Link href="/blog/alo-yoga-pilates" style={inlineLinkStyle}>Alo Yoga for Pilates</Link>. Not sure what else to wear? Read{" "}
                        <Link href="/blog/what-to-wear-to-pilates" style={inlineLinkStyle}>what to wear to Pilates</Link>.
                      </p>
                    )}
                    {c.id === "home-reformer" && (
                      <p className="text-sm leading-relaxed mb-4" style={bodyStyle}>
                        More reformer guides: <Link href="/blog/best-pilates-reformer-under-500" style={inlineLinkStyle}>best reformers under $500</Link> and{" "}
                        <Link href="/blog/merrithew-pilates" style={inlineLinkStyle}>our Merrithew brand guide</Link>.
                      </p>
                    )}
                    <Link href={c.guideHref} className="text-sm font-semibold" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>
                      {c.guideLabel} →
                    </Link>
                  </div>
                ))}

                {group === "Recovery" && (
                  <div className="mb-16 rounded-2xl p-6 md:p-8" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.5)" }}>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={eyebrowStyle}>What the full kit costs</p>
                    <h2 className="text-2xl font-semibold mb-3" style={h2Style}>The whole list, added up</h2>
                    <p className="text-sm leading-relaxed mb-6" style={bodyStyle}>
                      One item from each of the {KIT_CATEGORIES.length} categories above, using the verified prices on this page. Where a category has no budget pick, the budget kit uses the best pick. The optional Pilates Arc and the home reformer are not included.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        { label: "Essentials on a budget", items: BUDGET_KIT, total: BUDGET_TOTAL },
                        { label: "The best of everything", items: BEST_KIT, total: BEST_TOTAL },
                      ].map((kit) => (
                        <div key={kit.label} className="rounded-xl p-5" style={{ backgroundColor: "#f6f3f2" }}>
                          <p className="text-base font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{kit.label}</p>
                          <ul className="space-y-1.5 mb-4">
                            {kit.items.map((k) => (
                              <li key={k.category} className="flex justify-between gap-3 text-xs" style={bodyStyle}>
                                <span>{k.category}: {k.pick.name}</span>
                                <span className="shrink-0 font-semibold">{k.pick.price}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="flex justify-between pt-3 text-sm font-semibold" style={{ borderTop: "1px solid #d9c2ba", color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>
                            <span>Total</span>
                            <span>{fmt(kit.total)}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed mt-6" style={bodyStyle}>
                      Most of the gap between the two kits comes from the clothing (Varley vs CRZ YOGA) and the mat (Manduka PRO vs Gaiam). Both totals include a $159.99 massage gun, $74.99 foam roller and $55.00 ankle weights, so if you only go to studio classes and skip recovery and home props, the budget clothing and studio accessories alone come to {fmt(STUDIO_BUDGET_TOTAL)}. Home reformers are priced separately below: WINDFOOT $295.99, AeroPilates $539.99, Merrithew At Home SPX $3,349.00.
                    </p>
                  </div>
                )}
              </div>
            ))}

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={h2Style}>Frequently asked questions</h2>
              <div className="space-y-6">
                {FAQS.map((item) => (
                  <div key={item.q} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <h3 className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.q}</h3>
                    <p className="text-sm leading-relaxed" style={bodyStyle}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Further reading */}
            <div>
              <h2 className="text-2xl font-semibold mb-8" style={h2Style}>Further reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="Best Pilates Starter Kit" excerpt="The shortest possible list of what a beginner needs to start Pilates at home or in the studio." href="/blog/best-pilates-starter-kit" category="Equipment" readTime="8 min read" date="September 2026" imageUrl="/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg" />
                <ArticleCard title="Pilates Studio Bag Essentials" excerpt="Exactly what to pack for class, from grip socks to post-class layers." href="/blog/pilates-studio-bag-essentials" category="Guide" readTime="6 min read" date="September 2026" imageUrl="/pictures/jade-stephens-N21356amsyw-unsplash.jpg" />
                <ArticleCard title="What to Wear to Pilates" excerpt="The complete guide to choosing the right clothes for studio and reformer classes." href="/blog/what-to-wear-to-pilates" category="Guide" readTime="6 min read" date="May 2026" imageUrl="/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg" />
                <ArticleCard title="Reformer Pilates Essentials" excerpt="Everything you need for reformer class, organised by the class journey — before, on the carriage and after." href="/blog/reformer-pilates-essentials" category="Equipment" readTime="10 min read" date="September 2026" imageUrl="/pictures/stitch-reformer-sunlit-minimal.png" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best Pilates studios in Amsterdam…" />
      </main>
      <Footer />
    </>
  );
}
