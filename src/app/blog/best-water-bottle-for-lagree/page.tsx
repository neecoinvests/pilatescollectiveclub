import type { Metadata } from "next";
import EquipmentGuide, { type EquipmentGuideProps, type GuideItem } from "@/components/EquipmentGuide";

const SLUG = "best-water-bottle-for-lagree";
const URL = `https://pilatescollectiveclub.com/blog/${SLUG}`;
const HERO = "/pictures/stitch-water-towel-bench.png";
const CHECKED = "October 20, 2026";
const CHECKED_ISO = "2026-10-20";
const TITLE = "Best Water Bottle for Lagree (2026): 5 Bottles Ranked";
const DESCRIPTION = "The best water bottles for sweaty Lagree classes: LARQ, YETI, Owala and Stanley, compared on one-handed drinking and cold, plus LMNT electrolytes.";

const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=pilatescollective-20`;

const ITEMS: Record<string, Omit<GuideItem, "badge">> = {
  larq2: {
    id: "larq-purevis-2-filter-straw", name: "LARQ PureVis 2 Smart UV Self-Cleaning Bottle with Filter Straw", brand: "LARQ", price: "$129.00", url: amz("B0D8BNWTCS"),
    availability: "in-stock", soldBy: "LARQ, Inc.",
    specs: ["UV-C LED activates every 2 hours", "Nano filter straw, about 40 gallons per filter", "Double-wall insulation: cold up to 24 hours", "Logs sips in the LARQ app", "USB-C; 2 to 3 weeks per charge"],
    body: "The most advanced bottle here: a UV-C light in the cap keeps the bottle fresh, a filter straw cleans tap water, and the app can track how much you drink. A strong choice if you refill from studio taps.",
  },
  larq: {
    id: "larq-purevis-17oz", name: "LARQ PureVis Smart UV Self-Cleaning Bottle (17 oz)", brand: "LARQ", price: "$99.00", url: amz("B07YGYKWVQ"),
    availability: "in-stock", soldBy: "LARQ, Inc.",
    specs: ["17 oz", "UV-C LED activates every 2 hours", "Cold 24 hours or hot 12 hours", "Up to a month per charge", "Fits cup holders and bag side pockets"],
    body: "The original self-cleaning LARQ bottle. No more funky smell from a bottle that sat in a gym bag. At 17 oz it is the smallest here, so refill before class.",
  },
  yeti: {
    id: "yeti-rambler-26-chug", name: "YETI Rambler 26 oz Bottle with Chug Cap", brand: "YETI", price: "$40.00", url: amz("B0842S56G8"),
    availability: "in-stock", soldBy: "YETI Authorized",
    specs: ["26 oz", "Leakproof Chug Cap", "Double-wall vacuum insulation", "18/8 stainless steel", "Dishwasher safe; 10.5\" tall"],
    body: "Tough, leakproof and dishwasher safe. The Chug Cap opens with a half twist for big gulps between sets.",
  },
  owala: {
    id: "owala-freesip-32", name: "Owala FreeSip 32 oz Insulated Bottle", brand: "Owala", price: "$29.99", url: amz("B085DVHQ57"),
    availability: "in-stock", soldBy: "Amazon.com",
    specs: ["32 oz", "FreeSip spout: sip through the straw or swig", "Push-button lid with lock", "Cold up to 24 hours", "Not compatible with standard car cup holders, per the listing"],
    body: "The best one-handed bottle for class: press the button, sip, and get back on the machine. 32 oz is enough for a sweaty class and the walk home.",
  },
  stanley: {
    id: "stanley-iceflow-2-flip-straw-30", name: "Stanley IceFlow 2.0 Flip Straw Tumbler (30 oz)", brand: "Stanley", price: "$35.00", url: amz("B0DR9PMK1W"),
    availability: "in-stock", soldBy: "Amazon.com",
    specs: ["30 oz", "Flip straw lid, leak-resistant", "Cold 20 hours, iced up to 3 days", "Carry handle; cupholder-compatible base", "Dishwasher safe"],
    body: "Stanley's flip-straw tumbler with a carry handle. Leak-resistant rather than leakproof, so keep it upright in your bag.",
  },
  lmnt: {
    id: "lmnt-raspberry-salt-30", name: "LMNT Zero Sugar Electrolytes, Raspberry Salt (30 sticks)", brand: "LMNT", price: "$45.00", url: amz("B07SH31T9V"),
    availability: "in-stock", soldBy: "Drink LMNT",
    specs: ["30 stick packs", "Zero sugar", "Mix one stick with 16 to 32 oz of water"],
    body: "A popular zero-sugar electrolyte mix. One stick goes in 16 to 32 oz of water, which suits every bottle here. Check the sodium content on the listing if you watch your salt intake.",
  },
};

const it = (key: string, badge: string, pros: string[], cons: string[]): GuideItem => ({ ...ITEMS[key], badge, pros, cons });

const GUIDE: EquipmentGuideProps = {
  slug: SLUG,
  title: TITLE,
  description: DESCRIPTION,
  breadcrumb: "Best Water Bottle for Lagree",
  eyebrow: "Lagree",
  eyebrowAccent: "Accessories",
  h1: "The Best Water Bottle for Lagree",
  h1Accent: "5 Bottles + Electrolytes (2026)",
  readTime: "7 min read",
  updatedLabel: `Prices checked ${CHECKED}`,
  datePublished: CHECKED_ISO,
  dateModified: CHECKED_ISO,
  heroImage: HERO,
  heroAlt: "A water bottle and towel on a studio bench",
  heroCaption: "LARQ · YETI · Owala · Stanley · LMNT",
  intro: [
    "Lagree leaves most people soaked. Transitions are short, so you want a bottle you can open with one hand, drink from fast and put down without a spill, then something cold for the walk home.",
    "Here are five bottles on Amazon, from $29.99 to a $129 self-cleaning LARQ, plus an electrolyte mix for the sweatiest classes. Prices and stock were checked today.",
  ],
  quickPicks: [
    { label: "Best overall", itemId: "owala-freesip-32" },
    { label: "Best self-cleaning", itemId: "larq-purevis-2-filter-straw" },
    { label: "Most durable", itemId: "yeti-rambler-26-chug" },
    { label: "Best with a handle", itemId: "stanley-iceflow-2-flip-straw-30" },
    { label: "Best electrolytes", itemId: "lmnt-raspberry-salt-30" },
  ],
  blocks: [
    {
      kind: "table",
      eyebrow: "At a glance",
      heading: "The five bottles compared",
      columns: ["Bottle", "Price", "Size", "Opens one-handed", "Cold"],
      rows: [
        ["Owala FreeSip", "$29.99", "32 oz", "Yes, push button", "Up to 24 h"],
        ["Stanley IceFlow 2.0 Flip Straw", "$35.00", "30 oz", "Yes, flip straw", "20 h"],
        ["YETI Rambler with Chug Cap", "$40.00", "26 oz", "Half twist", "Insulated"],
        ["LARQ PureVis", "$99.00", "17 oz", "Screw cap", "24 h"],
        ["LARQ PureVis 2 Filter Straw", "$129.00", "See listing", "Straw", "Up to 24 h"],
      ],
      note: `Amazon prices checked on ${CHECKED}. Specs from each listing.`,
    },
    {
      kind: "products",
      id: "bottles",
      eyebrow: "Our picks",
      heading: "The best water bottles for Lagree",
      items: [
        it("owala", "Best Overall", ["One-handed push button", "Straw or swig", "Sold by Amazon.com"], ["Does not fit standard car cup holders"]),
        it("larq2", "Best Self-Cleaning", ["UV-C self-cleaning", "Filter straw", "App hydration tracking"], ["$129", "Cap needs charging"]),
        it("larq", "Best Compact", ["Self-cleaning", "A month per charge"], ["17 oz: small for a sweaty class"]),
        it("yeti", "Most Durable", ["Leakproof", "Dishwasher safe"], ["Not one-handed"]),
        it("stanley", "Best with a Handle", ["Carry handle", "Fits cup holders"], ["Leak-resistant, not leakproof"]),
      ],
    },
    {
      kind: "products",
      id: "electrolytes",
      eyebrow: "What to put in it",
      heading: "Electrolytes for sweaty classes",
      intro: "Plain water is enough for most classes. If you sweat heavily or train twice a day, an electrolyte mix can help you replace what you lose in sweat.",
      items: [
        it("lmnt", "Best Electrolytes", ["Zero sugar", "One stick per bottle"], ["Salty taste is not for everyone"]),
      ],
    },
    {
      kind: "cards",
      eyebrow: "How to choose",
      heading: "What matters in a Lagree water bottle",
      cards: [
        { h: "One-handed opening", b: "Transitions are short. A push button or flip straw lets you drink without stopping long." },
        { h: "Leakproof in the bag", b: "Your bottle shares a bag with your phone and clothes. Leakproof caps beat leak-resistant ones." },
        { h: "Size", b: "Around 26 to 32 oz covers most classes. Smaller bottles need a refill." },
        { h: "Easy to clean", b: "Dishwasher-safe bodies or self-cleaning caps keep a gym bottle fresh." },
      ],
    },
  ],
  faqs: [
    { q: "What is the best water bottle for Lagree?", a: `The Owala FreeSip 32 oz ($29.99 on ${CHECKED}): it opens one-handed with a push button and lets you sip through a straw or swig, so you lose little time between exercises.` },
    { q: "How much water should I bring to Lagree?", a: "Most people find 26 to 32 oz covers a 45 to 50 minute class and the trip home. Drink before class too, and bring more if you sweat heavily." },
    { q: "Do I need electrolytes for Lagree?", a: "Not for most classes. If you sweat heavily, take back-to-back classes or train in a hot room, an electrolyte mix such as LMNT can help. Check with your doctor if you watch your sodium intake." },
    { q: "Is a self-cleaning LARQ bottle worth it?", a: "If your bottle lives in a gym bag, the UV-C cap helps keep it fresh between washes. It costs more and the cap needs charging, so it is a nice upgrade rather than a must-have." },
  ],
  related: [
    { title: "Best Headband for Lagree", excerpt: "Sweatproof, no-slip headbands.", href: "/blog/best-headband-for-lagree", imageUrl: "/pictures/stitch-studio-round-mirror.png", category: "Lagree", readTime: "7 min read" },
    { title: "Best Sweat Towel for Lagree", excerpt: "Towels for the sweatiest class in fitness.", href: "/blog/best-sweat-towel-for-lagree", imageUrl: "/pictures/stitch-studio-bench-towels.png", category: "Lagree", readTime: "7 min read" },
    { title: "Best Lagree Bag", excerpt: "Bags for class and the commute.", href: "/blog/best-lagree-bag", imageUrl: "/pictures/stitch-studio-entryway.png", category: "Lagree", readTime: "8 min read" },
    { title: "Lagree Essentials", excerpt: "Everything to bring to class.", href: "/blog/lagree-essentials", imageUrl: "/pictures/stitch-studio-shelf-props.png", category: "Lagree", readTime: "8 min read" },
  ],
  ctaTitle: "Find a Lagree studio near you",
  ctaSubtitle: "Use our city guides to find Lagree and boutique Pilates studios worldwide.",
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["best water bottle for lagree", "lagree water bottle", "water bottle for workout class", "owala freesip lagree", "larq purevis gym", "electrolytes for lagree", "best gym water bottle 2026", "what to bring to lagree"],
  openGraph: { title: TITLE, description: DESCRIPTION, type: "article", url: URL, images: [{ url: `https://pilatescollectiveclub.com${HERO}`, width: 1200, height: 630, alt: "A water bottle and towel on a bench" }] },
  twitter: { card: "summary_large_image", title: "Best Water Bottle for Lagree (2026)", description: DESCRIPTION, images: [`https://pilatescollectiveclub.com${HERO}`] },
  alternates: { canonical: URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

export default function Page() {
  return <EquipmentGuide {...GUIDE} />;
}
