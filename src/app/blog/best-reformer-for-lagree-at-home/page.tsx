import type { Metadata } from "next";
import EquipmentGuide, { type EquipmentGuideProps, type GuideItem } from "@/components/EquipmentGuide";
import { item } from "@/lib/reformerCatalog";
import { gift } from "@/lib/giftCatalog";

const SLUG = "best-reformer-for-lagree-at-home";
const URL = `https://pilatescollectiveclub.com/blog/${SLUG}`;
const HERO = "/pictures/stitch-hands-on-carriage.png";
const CHECKED = "October 16, 2026";
const CHECKED_ISO = "2026-10-16";
const TITLE = "Best Reformer for Lagree at Home (2026): 9 Machines Compared";
const DESCRIPTION = "The best machines for Lagree-style workouts at home, from the $990 Lagree Micro to reformers from $295.99 to $3,349, compared on length, springs and capacity.";

const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=pilatescollective-20`;

const buytime: Omit<GuideItem, "badge"> = {
  id: "buytime-96-wooden-reformer", name: "Buytime 96\" Wooden Pilates Reformer with Springs, Jump Board & Sitting Box", brand: "Buytime", price: "$529.99", url: amz("B0HDCZHW6K"),
  availability: "in-stock", soldBy: "Glory Universal Direct",
  specs: ["Rubberwood frame, 95.7\" long", "5 progressive springs", "Supports users up to 500 lb", "Jump board, sitting box, double-loop straps, headrest and shoulder blocks included", "Folds vertically; built-in wheels", "About 90% pre-assembled"],
  body: "The most machine for the money here: a full-length 95.7-inch wooden frame rated for users up to 500 lb, five springs, and a sitting box in the box. The length and the high weight rating are what matter for Lagree-style lunges and planks on the carriage.",
};

const windfoot: Omit<GuideItem, "badge"> = {
  id: "windfoot-foldable-reformer", name: "WINDFOOT Foldable Pilates Reformer with Jump Board", brand: "WINDFOOT", price: "$295.99", url: amz("B0D31767J1"),
  availability: "in-stock", soldBy: "YIWU MUZHU",
  specs: ["4 × 22 lb springs plus 5 × 11 lb resistance cords", "Padded rebounder (jump board) included", "Height-adjustable pulley system", "Folds; wheels for moving", "Supports up to 300 lb", "77 lb; about 90% pre-assembled"],
  body: "The cheapest way to put a sliding carriage under your feet. It mixes springs with cords, so the resistance feels less like a studio machine, and the 300 lb capacity is the lowest here. Fine for trying slow, Lagree-style tempo work before you spend more.",
};

const balanceFrom: Omit<GuideItem, "badge"> = {
  id: "balancefrom-foldable-reformer", name: "BalanceFrom Foldable Pilates Reformer with Adjustable Height", brand: "BalanceFrom", price: "$319.99", url: amz("B0G5Y6RJZF"),
  availability: "in-stock", soldBy: "Spreetail",
  specs: ["89\" long", "Removable stands: high or low position", "Piano-wire springs", "Supports up to 500 lb on six legs", "550 LRO high-density foam padding", "Folds; no tools needed"],
  body: "A budget reformer with two things Lagree-style training needs: an 89-inch length and a 500 lb rating. The listing says the high position is for standing flows and lunges. The frame is metal rather than wood.",
};

const vevorFold: Omit<GuideItem, "badge"> = {
  id: "vevor-foldable-maple-reformer", name: "VEVOR Foldable Wooden Pilates Reformer", brand: "VEVOR", price: "$779.31", url: amz("B0F43L49KC"),
  availability: "in-stock", soldBy: "Amazon.com",
  specs: ["Solid maple frame", "5 springs: 1 strong, 3 medium, 1 light", "Supports up to 400 lb", "Jump board and Pilates box included", "Folds to 48 × 18 × 27 in"],
  body: "A maple reformer sold and shipped by Amazon.com that folds to 48 × 18 × 27 inches. A good choice if you want wood, easy returns and a machine that disappears after the workout.",
};

const GUIDE: EquipmentGuideProps = {
  slug: SLUG,
  title: TITLE,
  description: DESCRIPTION,
  breadcrumb: "Best Reformer for Lagree at Home",
  eyebrow: "Lagree at Home",
  eyebrowAccent: "Buying Guide",
  h1: "The Best Reformer for Lagree",
  h1Accent: "Workouts at Home (2026)",
  readTime: "12 min read",
  updatedLabel: `Prices checked ${CHECKED}`,
  datePublished: CHECKED_ISO,
  dateModified: CHECKED_ISO,
  heroImage: HERO,
  heroAlt: "Hands resting on a reformer carriage",
  heroCaption: "Lagree Micro · Home reformers · Studio-grade",
  intro: [
    "Lagree is built around a machine: the Megaformer. Studios use it for slow, high-intensity, low-impact strength and cardio, and once you are hooked it is natural to want that burn at home without a class pass.",
    "There are two routes. The Lagree Micro is Lagree Fitness' own compact home machine. The other is a Pilates reformer, which shares the sliding carriage and springs and can handle a lot of Lagree-style work if you pick one with the right length, springs and weight rating. Below are nine machines on Amazon, from $295.99 to $3,349, with the price and stock we checked today.",
  ],
  quickPicks: [
    { label: "The real Lagree machine", itemId: "lagree-micro" },
    { label: "Best value reformer", itemId: "buytime-96-wooden-reformer" },
    { label: "Best under $300", itemId: "windfoot-foldable-reformer" },
    { label: "Best wood reformer under $1,000", itemId: "paeta-wooden-foldable-reformer" },
    { label: "Best studio-grade reformer", itemId: "align-c8-pro" },
  ],
  blocks: [
    {
      kind: "table",
      eyebrow: "At a glance",
      heading: "The nine machines compared",
      columns: ["Machine", "Price", "Length", "Max user weight", "Folds"],
      rows: [
        ["WINDFOOT Foldable", "$295.99", "Not listed", "300 lb", "Yes"],
        ["BalanceFrom Foldable", "$319.99", "89\"", "500 lb", "Yes"],
        ["Buytime 96\" Wooden", "$529.99", "95.7\"", "500 lb", "Yes, vertically"],
        ["PAETA Wooden Foldable", "$699.98", "See listing", "500 lb", "Yes"],
        ["VEVOR Foldable Maple", "$779.31", "See listing", "400 lb", "Yes"],
        ["Lagree Micro", "$990.00", "81.5\" with rear platform", "See listing", "Stores flat or upright"],
        ["VEVOR Maple", "$1,309.90", "See listing", "400 lb", "See listing"],
        ["Align-Pilates C8-PRO", "$2,750.00", "239.5 cm (94.3\")", "150 kg (330 lb)", "Stacks"],
        ["Merrithew At Home SPX", "$3,349.00", "96.5\"", "See listing", "See listing"],
      ],
      note: `Amazon prices and availability checked on ${CHECKED}. Specs are from each listing; "See listing" means the listing does not state it clearly.`,
    },
    {
      kind: "cards",
      eyebrow: "Before you buy",
      heading: "Reformer vs Megaformer: what changes at home",
      intro: "A Pilates reformer is not a Megaformer, and no reformer will copy a Lagree class exactly. These are the differences that matter when you train Lagree-style on one.",
      cards: [
        { h: "Platforms at both ends", b: "Lagree choreography uses standing platforms at the front and back of the carriage for lunges and planks. A reformer has a footbar end and a headrest end, so look for a long frame and a sitting box or standing platform you can work from." },
        { h: "Heavier springs, slower tempo", b: "The Lagree burn comes from slow, continuous time under tension. A reformer with several springs, including a heavy one, lets you load the carriage enough to make slow work hard." },
        { h: "A high weight rating", b: "Lunges and planks on a moving carriage put more load on the frame than lying-down Pilates. We favour machines rated for 400 to 500 lb." },
        { h: "Length", b: "Long frames give you room for lunges and full-length planks. The Buytime is 95.7 inches and the BalanceFrom 89 inches, per their listings." },
      ],
    },
    {
      kind: "products",
      id: "lagree",
      eyebrow: "The real thing",
      heading: "The Lagree Micro",
      intro: "If you want Lagree itself rather than a reformer workout, this is Lagree Fitness' own home machine. It works on its own; the rear platform and handlebars unlock more of the repertoire.",
      items: [
        gift("lagreeMicro", { badge: "The Real Lagree Machine", pros: ["Made by Lagree Fitness for Lagree workouts", "Fits users up to 6'8\" per Lagree Fitness", "Stores under a bed or against a wall"], cons: ["Platform, handlebars and cables sold separately"] }),
        gift("microPlatform", { badge: "Best First Add-On", pros: ["Adds the rear platform for lunges", "Needed for rear handlebars"], cons: ["Takes the Micro to 81.5\" long"] }),
        gift("microHandles", { badge: "Add Stability", pros: ["Use at the front or back", "Sold as a pair"], cons: ["Rear use needs the platform"] }),
      ],
    },
    {
      kind: "products",
      id: "budget",
      eyebrow: "Under $1,000",
      heading: "Best reformers for Lagree-style training on a budget",
      items: [
        { ...buytime, badge: "Best Value Reformer", pros: ["95.7\" long", "500 lb rating", "Sitting box included"], cons: ["Newer brand with a short track record"] },
        { ...windfoot, badge: "Best Under $300", pros: ["The lowest price here", "Rebounder for cardio intervals"], cons: ["300 lb rating", "Cords plus springs, not all springs"] },
        { ...balanceFrom, badge: "Best Budget for Tall Users", pros: ["89\" long", "500 lb rating", "High position for standing work"], cons: ["Metal frame, less studio-like"] },
        gift("paetaWoodFold", { badge: "Best Wood Under $1,000", pros: ["Solid oak frame", "Folds away", "Sitting box included"], cons: ["Newer brand than the studio names"] }),
        { ...vevorFold, badge: "Best Foldable Maple", pros: ["Sold and shipped by Amazon.com", "Folds to 48 × 18 × 27 in"], cons: ["Only one heavy spring"] },
      ],
    },
    {
      kind: "products",
      id: "studio",
      eyebrow: "Studio-grade",
      heading: "Best reformers if you train every day",
      items: [
        item("vevorMaple", { badge: "Best Value Full-Size", pros: ["Solid maple", "Sold by Amazon.com", "Box and jumpboard included"], cons: ["176 lb: heavier to move than the foldables"] }),
        item("alignC8Pro", { badge: "Best Studio-Grade Reformer", pros: ["Same springs as Align's professional reformers", "Stackable"], cons: ["Low bed without the optional leg extensions"] }),
        item("spxHome", { badge: "Best Complete Package", pros: ["Box, platform extender and straps included", "Sold and shipped by Amazon.com"], cons: ["Low frame height"] }),
      ],
    },
    {
      kind: "steps",
      eyebrow: "Set it up",
      heading: "How to make a home reformer feel more like Lagree",
      steps: [
        { h: "Slow everything down", b: "Lagree classes are known for slow, controlled reps with little rest. Count four seconds out and four seconds back and keep moving between exercises." },
        { h: "Load the carriage", b: "Start heavier than you would for Pilates and reduce if your form breaks. Slow work on light springs is easy; slow work on heavy springs is where the burn comes from." },
        { h: "Use the sitting box and platform", b: "A sitting box or platform extender gives you a stable surface to lunge and plank from, the closest a reformer gets to the Megaformer's platforms." },
        { h: "Protect the floor and your grip", b: "Put a floor mat under the machine, and wear grip socks or gloves for carriage planks." },
      ],
    },
    {
      kind: "callout",
      eyebrow: "Safety",
      heading: "Learn the moves in a studio first",
      body: [
        "Standing and planking on a moving carriage takes practice. If you are new to Lagree, take a few studio classes before you train alone, and start with lighter springs at home.",
        "Check each machine's maximum user weight and height on the listing before you order.",
      ],
    },
  ],
  faqs: [
    { q: "Can you do Lagree on a Pilates reformer?", a: "You can do a lot of Lagree-style work on a reformer: slow, high-tension lunges, planks and squats on the carriage. It will not copy a Megaformer class exactly, because the Megaformer has platforms at both ends. A long reformer with heavy springs and a sitting box gets you closest." },
    { q: "What is the best machine for Lagree at home?", a: `For Lagree itself, the Lagree Micro ($990 on ${CHECKED}), Lagree Fitness' own home machine. For a reformer you can use for Lagree-style and Pilates workouts, the Buytime 96" wooden reformer ($529.99) is the best value, with a 95.7" frame and a 500 lb rating.` },
    { q: "Is the Lagree Micro the same as a Megaformer?", a: "No. The Megaformer is Lagree Fitness' studio machine. The Micro is its compact home machine, designed for the same style of workout in a smaller format that stores away." },
    { q: "How much does a Lagree machine cost for home?", a: `The Lagree Micro was $990 on Amazon on ${CHECKED}; with the rear platform ($290) and handlebars ($190) it comes to $1,470. Reformers in this guide start at $295.99.` },
    { q: "What should I look for in a reformer for Lagree-style workouts?", a: "A long frame (around 89 inches or more), several springs including a heavy one, a high maximum user weight (400 to 500 lb), and a sitting box or standing platform to lunge from." },
  ],
  related: [
    { title: "Lagree at Home: The Full Setup", excerpt: "What a home Lagree setup really costs.", href: "/blog/lagree-at-home", imageUrl: "/pictures/stitch-reformer-morning-light.png", category: "Lagree", readTime: "10 min read" },
    { title: "Lagree Micro vs Megaformer", excerpt: "The home machine and the studio machine compared.", href: "/blog/lagree-micro-vs-megaformer", imageUrl: "/pictures/stitch-reformer-spring-detail.png", category: "Lagree", readTime: "9 min read" },
    { title: "Best Megaformer Machine", excerpt: "Megaformers and Lagree-style machines compared.", href: "/blog/best-megaformer-machine", imageUrl: "/pictures/stitch-reformer-loops-hooks.png", category: "Equipment", readTime: "12 min read" },
    { title: "How Many Calories Does Lagree Burn?", excerpt: "What the numbers say, and how to track your own.", href: "/blog/how-many-calories-does-lagree-burn", imageUrl: "/pictures/stitch-pilates-essentials-logbook.png", category: "Lagree", readTime: "9 min read" },
  ],
  ctaTitle: "Find a Lagree studio near you",
  ctaSubtitle: "Use our city guides to find Lagree and boutique Pilates studios worldwide.",
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["best reformer for lagree at home", "lagree reformer at home", "lagree machine for home", "can you do lagree on a pilates reformer", "lagree micro", "megaformer at home", "best home megaformer alternative", "lagree style workout at home", "home lagree machine 2026"],
  openGraph: { title: TITLE, description: DESCRIPTION, type: "article", url: URL, images: [{ url: `https://pilatescollectiveclub.com${HERO}`, width: 1200, height: 630, alt: "Hands on a reformer carriage" }] },
  twitter: { card: "summary_large_image", title: "Best Reformer for Lagree at Home (2026)", description: DESCRIPTION, images: [`https://pilatescollectiveclub.com${HERO}`] },
  alternates: { canonical: URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

export default function Page() {
  return <EquipmentGuide {...GUIDE} />;
}
