import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import { jsonLdHtml } from "@/lib/schema";

const PAGE_URL = "https://pilatescollectiveclub.com/blog/lagree-essentials";
const HERO_IMAGE = "https://pilatescollectiveclub.com/pictures/stitch-reformer-row-studio.png";
const TITLE = "Lagree Essentials (2026): What to Wear, Bring & Buy";
const DESCRIPTION =
  "Lagree essentials in one list: best, budget and splurge picks for grip socks, gloves, biker shorts, knee pads and more, plus The Micro and its real cost.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: "Everything to wear, bring and buy for Lagree on one page — best, budget and splurge picks, verified prices, and what The Micro home setup really costs.",
    type: "article",
    url: PAGE_URL,
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: "Lagree essentials — what to wear, bring and buy — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lagree Essentials (2026): Wear, Bring & Buy",
    description: "Best, budget and splurge Lagree gear — plus The Micro home machine and what the full kit costs.",
    images: [HERO_IMAGE],
  },
  keywords: [
    "lagree essentials",
    "what to wear to lagree",
    "what to bring to lagree class",
    "lagree must haves",
    "lagree gear",
    "lagree accessories",
    "lagree micro accessories",
    "lagree grip socks",
    "lagree essentials 2026",
    "lagree at home equipment",
    "lagree class checklist",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=pilatescollective-20`;
const LAGREE_DIRECT = "https://www.lagreefitness.com/";

type Pick = {
  tier: "Best" | "Budget" | "Splurge" | "Alternative" | "Accessory" | "Studio machine";
  name: string;
  price: string;
  url: string;
  description: string;
  limited?: boolean;
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
  // ─── What to wear ───
  {
    id: "shorts",
    group: "What to wear",
    title: "Lagree shorts",
    shortName: "Biker shorts",
    intro:
      "Lagree moves you through lunges, deep squats and kneeling work on a moving carriage, often with your legs wide. Loose running shorts ride up and can catch on the machine, so the Lagree regular's choice is a tight biker short that stays exactly where you put it. A 4\" inseam is the cooler option; a 6\" inseam covers more thigh against the carriage.",
    guideHref: "/blog/best-lagree-shorts",
    guideLabel: "Full Lagree shorts guide",
    picks: [
      {
        tier: "Best",
        name: "CRZ YOGA Butterluxe Biker Shorts 6\"",
        price: "$24.00",
        url: amz("B0B28B34XX"),
        description:
          "CRZ YOGA's Butterluxe is its buttery-soft fabric line, and the 6\" length is the one to pick if you want more coverage between your thighs and the carriage during lunges and kneeling work. At $24.00 it is inexpensive enough to own two pairs for back-to-back classes.",
      },
      {
        tier: "Alternative",
        name: "CRZ YOGA Butterluxe Biker Shorts 4\"",
        price: "$24.00",
        url: amz("B0B2ZPL1XS"),
        description:
          "The same Butterluxe fabric and the same price in a shorter 4\" inseam. Choose this if you run hot, which many people do in a Lagree class, and prefer less fabric on your legs.",
      },
    ],
  },
  {
    id: "leggings",
    group: "What to wear",
    title: "Leggings for Lagree",
    shortName: "Leggings",
    intro:
      "If you prefer full coverage, leggings work just as well as shorts, provided they are fitted, high-waisted and opaque in a deep lunge. Skip anything with zip pockets or hardware at the waist or ankle: on a Lagree machine you are kneeling, lying and planking on the carriage, and hard trims press in or snag.",
    guideHref: "/blog/best-leggings-for-lagree",
    guideLabel: "Full Lagree leggings guide",
    picks: [
      {
        tier: "Best",
        name: "Varley Freesoft Piped Full Leggings",
        price: "$78.40",
        url: amz("B0FXN378H8"),
        description:
          "Varley's Freesoft line is its soft, brushed-feel fabric, and this full-length piped pair is sold through Shopbop, an Amazon company. It is the pick if you want one pair that looks polished on the way to class and stays put through a slow, sweaty 45 minutes.",
      },
      {
        tier: "Budget",
        name: "CRZ YOGA Butterluxe Leggings 25\"",
        price: "$32.00",
        url: amz("B09P1G2952"),
        description:
          "The same Butterluxe fabric as the biker shorts above, in a 25\" inseam that lands around the ankle on most heights. Sold by CRZ YOGA directly on Amazon, and a sensible first pair if you are still deciding whether Lagree is for you.",
      },
    ],
  },
  {
    id: "sports-bra",
    group: "What to wear",
    title: "Sports bra for Lagree",
    shortName: "Sports bra",
    intro:
      "Lagree is low-impact, so you do not need a maximum-support running bra. You do need a band that does not roll when you plank or lie back on the carriage, and a back design without clasps pressing into your spine.",
    guideHref: "/blog/best-sports-bra-for-lagree",
    guideLabel: "Full Lagree sports bra guide",
    picks: [
      {
        tier: "Best",
        name: "Varley Freesoft Harley Bralette",
        price: "$52.80",
        url: amz("B0FXN42JWR"),
        description:
          "Made in the same Freesoft fabric as the Varley leggings, so the two form a matching set. Sold through Shopbop. It is a light-support bralette, which suits the slow, controlled pace of Lagree rather than high-impact cardio.",
      },
      {
        tier: "Budget",
        name: "CRZ YOGA Butterluxe U Back Sports Bra",
        price: "$28.00",
        url: amz("B09ZP9VXLJ"),
        description:
          "A U-back sports bra in CRZ YOGA's Butterluxe fabric. The U back keeps straps away from the spine, which is comfortable when you are lying on the carriage.",
      },
    ],
  },
  // ─── What to bring ───
  {
    id: "grip-socks",
    group: "What to bring",
    title: "Grip socks for Lagree",
    shortName: "Grip socks",
    intro:
      "Grip matters even more in Lagree than in Pilates. Classes are sweatier, and you hold positions on a moving carriage for a long time under tension, so a sock that slips even slightly throws off your whole set. Many studios require grip socks; buy at least two pairs so one can dry while you wear the other.",
    guideHref: "/blog/best-lagree-grip-socks",
    guideLabel: "Full Lagree grip socks guide",
    picks: [
      {
        tier: "Best",
        name: "toesox Low Rise Grip Socks 2-Pack (Full Toe)",
        price: "$30.00",
        url: amz("B07QHNDHW3"),
        description:
          "toesox is one of the original studio grip-sock brands, and this low-rise 2-pack uses its full-toe design, with each toe in its own pocket. Two pairs in one pack covers a week of classes with a rest day for washing.",
      },
      {
        tier: "Budget",
        name: "Muezna Pilates Grip Socks (6 Pairs)",
        price: "$7.99",
        url: amz("B0DQ53GSP5"),
        description:
          "Six pairs for $7.99. Because Lagree socks get soaked, a multi-pack that means you always have a clean, dry pair in your bag is worth more than it sounds.",
      },
      {
        tier: "Splurge",
        name: "TAVI Stacy Slouch 2-Pack",
        price: "$40.00",
        url: amz("B0GFPGMWWS"),
        description:
          "TAVI's slouch style is the look many studio regulars go for, with grip on the sole. Choose it if you want your socks to look as good as they work.",
      },
    ],
  },
  {
    id: "gloves",
    group: "What to bring",
    title: "Gloves for Lagree",
    shortName: "Gloves",
    intro:
      "Gloves are optional, but Lagree makes a stronger case for them than Pilates does. Plenty of moves put your hands on the machine's handles, straps or the carriage itself while you are sweating, and a grippy palm keeps planks and pulling work steady.",
    guideHref: "/blog/best-pilates-gloves",
    guideLabel: "Full gloves guide",
    picks: [
      {
        tier: "Best",
        name: "TAVI Half Finger Gym Gloves",
        price: "$31.99",
        url: amz("B09GPVMF86"),
        description:
          "A half-finger glove with grips across the palm, which leaves your fingertips free to adjust springs and handles. It pairs naturally with TAVI or toesox socks if you want grip at both hands and feet.",
      },
      {
        tier: "Budget",
        name: "Gaiam Grippy Yoga Gloves",
        price: "$7.65",
        url: amz("B001VROVEM"),
        description:
          "An inexpensive way to find out whether you like training in gloves at all, from an established yoga brand.",
      },
    ],
  },
  {
    id: "knee-pad",
    group: "What to bring",
    title: "Knee pad",
    shortName: "Knee pad",
    intro:
      "Lagree includes kneeling work on the carriage and platforms, and holding a kneeling position for a slow set is when sensitive knees start to complain. A thin, dense pad slides under your knees without changing the exercise, and it doubles for floor work at home.",
    guideHref: "/blog/best-lagree-knee-pads",
    guideLabel: "Full Lagree knee pad guide",
    picks: [
      {
        tier: "Best",
        name: "Impulse Yoga Knee Pad Cushion (1\" / 25mm)",
        price: "$19.99",
        url: amz("B06WV6XVV9"),
        description:
          "At 1\" (25mm) thick, this is the more cushioned of our two picks, and the one to choose if kneeling is already uncomfortable for you.",
      },
      {
        tier: "Budget",
        name: "HASSLICKIT Yoga Knee Pad Cushion",
        price: "$14.99",
        url: amz("B0D7QB8PYM"),
        description:
          "A 24 x 9.8 x 0.8 in pad. It is slightly thinner than the Impulse pad and long enough to cover both knees side by side.",
      },
    ],
  },
  {
    id: "towel",
    group: "What to bring",
    title: "Sweat towel",
    shortName: "Towel",
    intro:
      "Expect to sweat more in Lagree than in a typical reformer Pilates class. A towel that grips rather than bunches keeps a damp carriage from turning slippery mid-set.",
    guideHref: "/blog/best-sweat-towel-for-lagree",
    guideLabel: "Full Lagree towel guide",
    picks: [
      {
        tier: "Best",
        name: "Shandali Stickyfiber Yoga Towel",
        price: "$19.99",
        url: amz("B011IU43WG"),
        description:
          "A mat-size towel with a silicone backing that grips the surface underneath. Lay it on the carriage for floor-style moves, or keep it at hand to wipe down between sets.",
      },
    ],
  },
  {
    id: "water-bottle",
    group: "What to bring",
    title: "Water bottle",
    shortName: "Water bottle",
    intro:
      "A sweaty class calls for a bottle you can drink from in the few seconds between moves, and one that seals fully for your bag.",
    guideHref: "/blog/best-pilates-water-bottle",
    guideLabel: "Full water bottle guide",
    picks: [
      {
        tier: "Best",
        name: "Owala FreeSip Stainless Steel Water Bottle 24 oz",
        price: "$29.99",
        url: amz("B0BZYCJK89"),
        description:
          "Sip through the built-in straw or tilt it back to drink from the spout, then lock the lid for your bag. 24 oz is the right size for a single class.",
      },
      {
        tier: "Splurge",
        name: "STANLEY Quencher H2.0 Tumbler 40 oz",
        price: "$45.00",
        url: amz("B0CRMP3RQT"),
        description:
          "Far more capacity than one class needs, which makes it better for all-day desk-to-studio use. A straw tumbler is not a fully sealed bottle, so keep it upright.",
      },
    ],
  },
  // ─── Train between classes ───
  {
    id: "interval-timer",
    group: "Train between classes",
    title: "Interval timer",
    shortName: "Interval timer",
    intro:
      "Lagree is built on timed, continuous sets rather than rep counts. If you practise Lagree-inspired floor work at home, a dedicated interval timer keeps you honest about time under tension without reaching for your phone.",
    guideHref: "/blog/best-interval-timer-for-lagree",
    guideLabel: "Full interval timer guide",
    picks: [
      {
        tier: "Best",
        name: "Gymboss Interval Timer",
        price: "$20.95",
        url: amz("B00CO8HO6O"),
        description:
          "A dedicated interval timer you set for work and rest periods, so your phone can stay in your bag. It does one job, which is exactly what you want mid-set.",
      },
    ],
  },
  {
    id: "sliders",
    group: "Train between classes",
    title: "Sliders",
    shortName: "Sliders",
    intro:
      "Sliders are the cheapest way to borrow the feel of a moving carriage at home: lunges, mountain climbers and pikes where your foot or hand glides under load. They are not a Megaformer, but slow slider work is a useful way to stay conditioned between classes.",
    guideHref: "/blog/best-exercise-sliders-for-pilates",
    guideLabel: "Full sliders guide",
    picks: [
      {
        tier: "Best",
        name: "Gaiam Core Sliding Discs (2)",
        price: "$15.82",
        url: amz("B0964G1N18"),
        description:
          "A pair of sliding discs from an established fitness brand. Two discs let you do both single-leg and two-hand moves.",
      },
      {
        tier: "Budget",
        name: "Elite Sportz Core Sliders",
        price: "$9.89",
        url: amz("B00OYRW4UE"),
        description:
          "The lowest-cost way to try slider work. If you only use them once a week, there is little reason to spend more.",
      },
      {
        tier: "Alternative",
        name: "Gliding 9\" Sliders (Vista Fitness)",
        price: "$19.99",
        url: amz("B08WVK6Y5L"),
        description:
          "A 9\" slider, which leaves room for a full hand or foot in planks and lunges.",
      },
    ],
  },
  {
    id: "ankle-weights",
    group: "Train between classes",
    title: "Ankle and wrist weights",
    shortName: "Ankle weights",
    intro:
      "A little load goes a long way at Lagree tempo. Light wrap-on weights make slow floor work noticeably harder without changing the exercise.",
    guideHref: "/blog/best-pilates-ankle-weights",
    guideLabel: "Full ankle weights guide",
    picks: [
      {
        tier: "Best",
        name: "Bala Bangles 1 lb (Pair)",
        price: "$55.00",
        url: amz("B0BQCJRL6Q"),
        description:
          "Bala Bangles wrap around wrists or ankles, and 1 lb per limb is the right starting point for slow, time-under-tension work.",
      },
    ],
  },
  {
    id: "recovery",
    group: "Train between classes",
    title: "Recovery",
    shortName: "Recovery",
    intro:
      "Slow, time-under-tension work tends to leave you sore, especially in your first few weeks. A roller comes first; a massage gun is the upgrade once you are training several times a week.",
    guideHref: "/blog/best-massage-gun-for-pilates",
    guideLabel: "Full massage gun guide",
    picks: [
      {
        tier: "Best",
        name: "TriggerPoint GRID 2.0 Foam Roller",
        price: "$74.99",
        url: amz("B006GUC9KC"),
        description:
          "A hollow-core roller with a textured surface. Hollow-core rollers hold their shape better over time than soft foam ones.",
      },
      {
        tier: "Splurge",
        name: "Therabody TheraGun Relief",
        price: "$159.99",
        url: amz("B0CNS894RH"),
        description:
          "Therabody's entry-level massage gun. It is simpler than the brand's pro models, which suits general post-class soreness.",
      },
    ],
  },
  // ─── The big upgrade ───
  {
    id: "the-micro",
    group: "The big upgrade",
    title: "The Micro by Lagree Fitness",
    shortName: "The Micro",
    intro:
      "Everything above supports your classes. The Micro is the only way on this page to do real Lagree at home. It is Lagree Fitness's compact home machine, and it and its accessories are sold on Amazon by Lagree Fitness itself, through the brand's own store.",
    guideHref: "/blog/lagree-fitness",
    guideLabel: "Full Lagree Fitness brand guide",
    picks: [
      {
        tier: "Best",
        name: "The Micro by Lagree Fitness",
        price: "$990.00",
        url: amz("B0BBT7YV93"),
        limited: true,
        description:
          "Lagree Fitness designed The Micro to deliver the Megaformer-style workout in a smaller machine: low-impact, high-intensity strength and cardio in a compact, lightweight and portable frame. It accommodates users up to 6'8\" and stores under a bed, against a wall or on a bike rack. Stock on Amazon can be limited; if it is unavailable, buy direct from lagreefitness.com.",
      },
      {
        tier: "Accessory",
        name: "Lagree Fitness Micro Rear Platform",
        price: "$290.00",
        url: amz("B0BKN2LSWD"),
        description:
          "Adds a sturdy rear surface for your feet, hands or knees and unlocks moves such as the express lunge, 5th lunge, super crunch and giant wheelbarrow. The platform is 10.5\" L x 8.5\" W x 6\" H; with it attached, the Micro measures 81.5\" L x 20\" W x 6\" H. The first accessory to buy.",
      },
      {
        tier: "Accessory",
        name: "Lagree Fitness Micro Handlebars (Pair)",
        price: "$190.00",
        url: amz("B0BKMP89SH"),
        description:
          "Handlebars add stability and can be mounted at the front or the back, though the back position requires the rear platform. They are sold as a pair, so if you want handlebars at the front and the back at the same time you need two sets.",
      },
      {
        tier: "Accessory",
        name: "Lagree Fitness Micro Pulley Cables",
        price: "$230.00",
        url: amz("B0BYMD4S91"),
        limited: true,
        description:
          "The cable attachment for The Micro, sold by Lagree Fitness. Stock can be limited. Buy it last, once you know which parts of the workout you want to add.",
      },
      {
        tier: "Studio machine",
        name: "Lagree Megaformer (M3S / M3X)",
        price: "Contact Lagree Fitness",
        url: LAGREE_DIRECT,
        description:
          "Not sold on Amazon — this links to lagreefitness.com. The Megaformer is Lagree's commercial studio machine, the one you train on in class. It is aimed at studios; contact Lagree Fitness directly for pricing.",
      },
    ],
  },
];

const GROUPS = ["What to wear", "What to bring", "Train between classes", "The big upgrade"];

const toNumber = (price: string) => {
  const n = parseFloat(price.replace(/[^0-9.]/g, ""));
  return Number.isNaN(n) ? 0 : n;
};

const fmt = (n: number) => `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

// Only products with a verified numeric price go into the ItemList (the Megaformer is quote-only).
const ALL_ITEMS = CATEGORIES.flatMap((c) => c.picks).filter((p) => toNumber(p.price) > 0);

// Kits exclude biker shorts (leggings are counted as the bottom; shorts are a cheaper swap) and The Micro (priced separately).
const KIT_CATEGORIES = CATEGORIES.filter((c) => c.id !== "shorts" && c.id !== "the-micro");

const pickTier = (c: Category, tier: Pick["tier"]) => c.picks.find((p) => p.tier === tier) ?? c.picks[0];

const BUDGET_KIT = KIT_CATEGORIES.map((c) => ({ category: c.shortName, pick: pickTier(c, "Budget") }));
const BEST_KIT = KIT_CATEGORIES.map((c) => ({ category: c.shortName, pick: pickTier(c, "Best") }));
const BUDGET_TOTAL = BUDGET_KIT.reduce((sum, k) => sum + toNumber(k.pick.price), 0);
const BEST_TOTAL = BEST_KIT.reduce((sum, k) => sum + toNumber(k.pick.price), 0);

const CLASS_GROUPS = ["What to wear", "What to bring"];
const inClassGroup = (category: string) => CLASS_GROUPS.includes(KIT_CATEGORIES.find((c) => c.shortName === category)?.group ?? "");
const CLASS_BUDGET_TOTAL = BUDGET_KIT.filter((k) => inClassGroup(k.category)).reduce((sum, k) => sum + toNumber(k.pick.price), 0);
const CLASS_BEST_TOTAL = BEST_KIT.filter((k) => inClassGroup(k.category)).reduce((sum, k) => sum + toNumber(k.pick.price), 0);

const MICRO = CATEGORIES.find((c) => c.id === "the-micro")!;
const MICRO_SETUP = MICRO.picks.filter((p) => p.tier !== "Studio machine");
const MICRO_SETUP_TOTAL = MICRO_SETUP.reduce((sum, p) => sum + toNumber(p.price), 0); // $1,700.00
const HANDLEBARS_PRICE = 190;

const FAQS = [
  {
    q: "What should I wear to Lagree?",
    a: "Fitted clothes with no loose fabric or hardware. Tight biker shorts or high-waisted leggings that stay opaque in a deep lunge, a sports bra or fitted top that does not ride up when you plank, and grip socks. Avoid loose shorts, which ride up and can catch on the machine, and avoid zips or metal trims that press into you when you kneel or lie on the carriage.",
  },
  {
    q: "What do I need to bring to a Lagree class?",
    a: "Grip socks (many studios require them), a water bottle and a towel. Lagree is sweatier than most reformer Pilates classes, so a towel that grips the carriage is more useful than you might expect. Gloves and a knee pad are optional extras worth adding if your hands slip or kneeling work bothers your knees.",
  },
  {
    q: "Do I need special grip socks for Lagree?",
    a: "Any grip sock with a full grippy sole works, and the same socks you would wear to reformer Pilates are fine. Grip matters more in Lagree because you hold positions on a moving carriage for a long time while sweating, so replace socks once the grip starts to wear.",
  },
  {
    q: "How much does Lagree gear cost?",
    a: `Using the verified prices on this page, the budget kit comes to ${fmt(BUDGET_TOTAL)} and the best pick in every category comes to ${fmt(BEST_TOTAL)}. If you only need what you wear and bring to class, that drops to ${fmt(CLASS_BUDGET_TOTAL)} on a budget or ${fmt(CLASS_BEST_TOTAL)} for the best picks. A home Micro setup is separate: $990.00 for the machine alone, or ${fmt(MICRO_SETUP_TOTAL)} with the rear platform, one pair of handlebars and the pulley cables.`,
  },
  {
    q: "Can I do Lagree at home?",
    a: "Yes, with The Micro, Lagree Fitness's compact home machine, which is sold on Amazon by Lagree Fitness's own store for $990.00. Stock can be limited; if it is unavailable, buy it direct from lagreefitness.com. Without a machine, sliders, light ankle weights and an interval timer let you do Lagree-inspired floor work, but that is not the same as training on a Megaformer.",
  },
  {
    q: "Which Micro accessories do I need?",
    a: "None to start: The Micro works on its own. The rear platform ($290.00) is the most useful first add-on because it unlocks moves such as the express lunge and super crunch, and it is required if you want handlebars at the back. Handlebars ($190.00) are sold as a pair, so front and back at once means two sets. The pulley cables ($230.00) are the last thing most people add.",
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
      "datePublished": "2026-09-28",
      "dateModified": "2026-09-28",
      "url": PAGE_URL,
      "mainEntityOfPage": PAGE_URL,
      "articleSection": "Equipment",
      "inLanguage": "en-US",
    },
    {
      "@type": "ItemList",
      "name": "Lagree Essentials (2026)",
      "numberOfItems": ALL_ITEMS.length,
      "itemListElement": ALL_ITEMS.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "description": p.description,
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": p.price.replace(/[^0-9.]/g, "") || "0",
            "availability": p.limited ? "https://schema.org/LimitedAvailability" : "https://schema.org/InStock",
            "url": p.url,
          },
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Lagree Essentials", "item": PAGE_URL },
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

export default function LagreeEssentialsPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Lagree</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Lagree Essentials<br /><span style={{ color: "#8b4a31" }}>(2026): What to Wear, Bring &amp; Buy</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 11 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Most links on this page go to Amazon, and we earn a small commission on qualifying purchases. One item (the Lagree Megaformer) is not sold on Amazon and links directly to lagreefitness.com; it is labelled as such.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Lagree looks like reformer Pilates from the doorway, but it trains differently: slow, controlled, continuous movement on a moving carriage, with time under tension until your muscles shake. That changes what you should wear and bring. This is our master list of Lagree essentials, with a best, budget and (where it is worth it) splurge pick in every category, from the grip socks in your bag to The Micro, Lagree Fitness&apos;s own home machine.
            </p>
            <p className="text-sm leading-relaxed" style={bodyStyle}>
              Every Amazon listing below was checked as live on September 28, 2026, at the price shown. Prices change, so the final price is whatever the retailer shows at checkout. The Micro and its pulley cables were showing limited stock.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-reformer-row-studio.png" alt="Lagree essentials — what to wear, bring and buy for Lagree class and home training" fill className="object-cover" style={{ filter: "brightness(0.85)" }} priority />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            {/* Related hubs */}
            <div className="mb-10 mt-4 flex flex-col sm:flex-row gap-3">
              <Link href="/blog/lagree-for-beginners" className="flex-1 rounded-xl p-4 text-sm font-semibold" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.4)", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif", textDecoration: "none" }}>
                First class coming up? Read Lagree for beginners →
              </Link>
              <Link href="/blog/pilates-essentials" className="flex-1 rounded-xl p-4 text-sm font-semibold" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.4)", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif", textDecoration: "none" }}>
                Doing Pilates too? → Pilates essentials
              </Link>
              <Link href="/blog/what-to-wear-to-lagree" className="flex-1 rounded-xl p-4 text-sm font-semibold" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.4)", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif", textDecoration: "none" }}>
                Full outfits? → What to wear to Lagree
              </Link>
            </div>

            {/* At a glance table */}
            <div className="mb-16 overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
              <div className="px-6 py-4" style={{ backgroundColor: "#f6f3f2" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={eyebrowStyle}>At a Glance — The Complete Lagree List</p>
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
                      <p className="text-xs mt-0.5 md:hidden" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{best.price}{best.limited ? " · limited stock" : ""}</p>
                    </div>
                    <span className="text-xs font-semibold hidden md:block shrink-0 mr-3" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{best.price}{best.limited ? " · limited stock" : ""}</span>
                    <a href={best.url} target="_blank" rel="noopener noreferrer sponsored nofollow"
                      style={{ display: "block", fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "10px 14px", whiteSpace: "nowrap", flexShrink: 0 }}
                    >Shop →</a>
                  </div>
                );
              })}
            </div>

            {/* Lagree-specific advice */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={h2Style}>Why Lagree gear is not quite Pilates gear</h2>
              <p className="text-sm leading-relaxed mb-6" style={bodyStyle}>
                If you already own reformer Pilates kit, most of it will work. But Lagree puts different demands on it, and a few small choices make a noticeable difference once you are mid-set with your legs shaking. If you want the method itself explained, start with{" "}
                <Link href="/blog/lagree-vs-pilates" style={inlineLinkStyle}>Lagree vs Pilates</Link>.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { heading: "It is sweatier, so grip matters more", body: "Slow, continuous work with little rest means more sweat on your hands, feet and the carriage. Fresh grip socks, a grippy towel and, if your hands slip, gloves solve most problems." },
                  { heading: "Nothing loose, nothing hard", body: "Loose shorts ride up in lunges and can catch on the machine. Zips, buckles and metal trims press into you when you kneel or lie on the carriage. Fitted and hardware-free is the rule." },
                  { heading: "Hands work harder than you expect", body: "Many Lagree moves put your hands on handles, straps or the carriage while you hold a plank or pull. That is where gloves earn their place." },
                  { heading: "Knees take a beating", body: "Kneeling on the carriage or platform for a slow set is uncomfortable for many people. A thin knee pad is a cheap fix, and you can use it at home too." },
                ].map((item) => (
                  <div key={item.heading} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.heading}</p>
                    <p className="text-sm leading-relaxed" style={bodyStyle}>{item.body}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm leading-relaxed mt-6" style={bodyStyle}>
                <span className="font-semibold" style={{ color: "#1b1c1c" }}>What to buy first:</span> for your first few classes, grip socks, fitted shorts or leggings, a sports bra, a towel and a water bottle cover everything. Add gloves and a knee pad once you know you are coming back. Everything under &ldquo;Train between classes&rdquo; is for people practising at home, and The Micro is for people who are properly hooked. Our Best pick is the one we would choose for most people, Budget is the cheapest option we would still recommend, and Splurge is worth it only if the upgrade matters to you.
              </p>
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
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={eyebrowStyle}>The Micro setup, added up</p>
                    <p className="text-sm leading-relaxed mb-4" style={bodyStyle}>
                      The Micro works on its own, but most people who buy it end up adding accessories. Here is what the full setup costs at the verified prices on Lagree Fitness&apos;s Amazon store:
                    </p>
                    <ul className="space-y-1.5 mb-4">
                      {MICRO_SETUP.map((p) => (
                        <li key={p.name} className="flex justify-between gap-3 text-sm" style={bodyStyle}>
                          <span>{p.name}</span>
                          <span className="shrink-0 font-semibold">{p.price}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-between pt-3 mb-4 text-sm font-semibold" style={{ borderTop: "1px solid #d9c2ba", color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>
                      <span>Full setup ($990 + $290 + $190 + $230)</span>
                      <span>{fmt(MICRO_SETUP_TOTAL)}</span>
                    </div>
                    <p className="text-sm leading-relaxed mb-4" style={bodyStyle}>
                      That total includes one pair of handlebars. If you want handlebars at the front and the back at the same time, add a second pair: {fmt(MICRO_SETUP_TOTAL)} + {fmt(HANDLEBARS_PRICE)} = {fmt(MICRO_SETUP_TOTAL + HANDLEBARS_PRICE)}. The Micro plus the rear platform alone comes to {fmt(990 + 290)}.
                    </p>
                    <p className="text-sm leading-relaxed" style={bodyStyle}>
                      Against classes: Lagree classes in major US cities commonly cost $35–$45 or more each. At that rate, The Micro alone ({fmt(990)}) is worth about {Math.round(990 / 45)}–{Math.round(990 / 35)} classes, and the full {fmt(MICRO_SETUP_TOTAL)} setup about {Math.round(MICRO_SETUP_TOTAL / 45)}–{Math.round(MICRO_SETUP_TOTAL / 35)} classes. A home machine will not replace an instructor&apos;s cues, so most people keep a class or two in their week. For the full home picture, see{" "}
                      <Link href="/blog/lagree-at-home" style={inlineLinkStyle}>Lagree at home</Link>.
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
                            {p.limited && (
                              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Limited stock</span>
                            )}
                          </div>
                          <ProductCard name={p.name} description={p.description} price={p.price} affiliateUrl={p.url} />
                        </div>
                      ))}
                    </div>
                    {c.id === "shorts" && (
                      <p className="text-sm leading-relaxed mb-4" style={bodyStyle}>
                        Shorts or leggings is personal preference; you only need one. Both are fitted, which is the point.
                      </p>
                    )}
                    {c.id === "the-micro" && (
                      <div className="text-sm leading-relaxed mb-4 space-y-3" style={bodyStyle}>
                        <p>
                          <span className="font-semibold" style={{ color: "#1b1c1c" }}>If The Micro is out of stock:</span> Amazon stock has been limited, so if the listing shows it as unavailable, buy it direct from{" "}
                          <a href={LAGREE_DIRECT} target="_blank" rel="noopener noreferrer" style={inlineLinkStyle}>lagreefitness.com</a>.
                        </p>
                        <p>
                          <span className="font-semibold" style={{ color: "#1b1c1c" }}>Not a Lagree machine:</span> a home Pilates reformer is a spring-and-carriage machine too, but it is built for a different method. If that is what you actually want, see{" "}
                          <Link href="/blog/best-home-pilates-reformer" style={inlineLinkStyle}>the best home Pilates reformers</Link>. For studio machines, read our{" "}
                          <Link href="/blog/best-megaformer-machine" style={inlineLinkStyle}>Megaformer machine guide</Link>.
                        </p>
                      </div>
                    )}
                    <Link href={c.guideHref} className="text-sm font-semibold" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>
                      {c.guideLabel} →
                    </Link>
                  </div>
                ))}

                {group === "Train between classes" && (
                  <div className="mb-16 rounded-2xl p-6 md:p-8" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.5)" }}>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={eyebrowStyle}>What the full kit costs</p>
                    <h2 className="text-2xl font-semibold mb-3" style={h2Style}>The whole Lagree list, added up</h2>
                    <p className="text-sm leading-relaxed mb-6" style={bodyStyle}>
                      One item from each of the {KIT_CATEGORIES.length} categories above, using the verified prices on this page. Leggings are counted as your bottom (biker shorts are a cheaper swap), and where a category has no budget pick, the budget kit uses the best pick. The Micro is priced separately below.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        { label: "Lagree on a budget", items: BUDGET_KIT, total: BUDGET_TOTAL },
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
                      If you only go to class and skip the home and recovery gear, what you wear and bring comes to {fmt(CLASS_BUDGET_TOTAL)} on a budget or {fmt(CLASS_BEST_TOTAL)} for the best picks. Most of the gap between the two kits is clothing: Varley leggings and bralette ($78.40 + $52.80) against CRZ YOGA ($32.00 + $28.00). Swapping leggings for $24.00 biker shorts saves $8.00 on the budget kit and $54.40 on the best kit. The Micro setup is extra: {fmt(990)} for the machine, {fmt(MICRO_SETUP_TOTAL)} with all three accessories.
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
                <ArticleCard title="Lagree Fitness: The Brand, the Megaformer and The Micro" excerpt="Who Lagree Fitness is, how the machines differ, and what you can actually buy for home." href="/blog/lagree-fitness" category="Guide" readTime="10 min read" date="September 2026" imageUrl="/pictures/stitch-reformers-aerial-row.png" />
                <ArticleCard title="Lagree for Beginners" excerpt="What your first Lagree class feels like, the mistakes to avoid and what to bring." href="/blog/lagree-for-beginners" category="Guide" readTime="9 min read" date="September 2026" imageUrl="/pictures/stitch-hands-on-carriage.png" />
                <ArticleCard title="Best Lagree Grip Socks" excerpt="The grip socks that hold on a sweaty carriage, from budget multi-packs to studio favourites." href="/blog/best-lagree-grip-socks" category="Equipment" readTime="8 min read" date="September 2026" imageUrl="/pictures/stitch-reformer-row-studio.png" />
                <ArticleCard title="Pilates Essentials" excerpt="Every Pilates must-have in one list, with best, budget and splurge picks and what the full kit costs." href="/blog/pilates-essentials" category="Equipment" readTime="12 min read" date="September 2026" imageUrl="/pictures/stitch-pilates-essentials-logbook.png" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates and Lagree studios worldwide." showSearch searchPlaceholder="Ask: best Lagree studios in Los Angeles…" />
      </main>
      <Footer />
    </>
  );
}
