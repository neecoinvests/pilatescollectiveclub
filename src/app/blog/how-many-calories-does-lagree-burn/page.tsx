import type { Metadata } from "next";
import EquipmentGuide, { type EquipmentGuideProps, type GuideItem } from "@/components/EquipmentGuide";
import { gift } from "@/lib/giftCatalog";

const SLUG = "how-many-calories-does-lagree-burn";
const URL = `https://pilatescollectiveclub.com/blog/${SLUG}`;
const HERO = "/pictures/stitch-pilates-essentials-logbook.png";
const CHECKED = "October 20, 2026";
const CHECKED_ISO = "2026-10-20";
const TITLE = "How Many Calories Does Lagree Burn? (2026 Honest Numbers)";
const DESCRIPTION = "How many calories a 50-minute Lagree class burns: studio claims vs the research, a table by body weight and intensity, and how to measure your own burn.";

const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=pilatescollective-20`;

const polarH10: Omit<GuideItem, "badge"> = {
  id: "polar-h10", name: "Polar H10 Heart Rate Monitor Chest Strap", brand: "Polar", price: "$104.65", url: amz("B07PM54P4N"),
  availability: "in-stock", soldBy: "Amazon.com",
  specs: ["Chest strap heart rate sensor", "Bluetooth and ANT+, usable at the same time", "Pro chest strap with silicone dots to stay in place", "Works with most HRM-compatible apps and watches", "Size M-XXL"],
  body: "Polar calls the H10 the most accurate heart rate sensor in its history. A chest strap reads heart rate from the electrical signal of the heart rather than light through the skin, which suits a workout full of gripping, planks and wrist flexion.",
};

const polarH9: Omit<GuideItem, "badge"> = {
  id: "polar-h9", name: "Polar H9 Heart Rate Sensor", brand: "Polar", price: "$69.90", url: amz("B08411DQ96"),
  availability: "in-stock", soldBy: "Amazon.com",
  specs: ["Chest strap heart rate sensor", "Bluetooth and ANT+", "Soft chest strap", "Sizes XS-S (20\" to 26\") and M-XXL (26\" to 36\")"],
  body: "Polar's more affordable strap, with the same Bluetooth and ANT+ connections. It comes in an XS-S size, useful if standard straps are too loose.",
};

const coospo: Omit<GuideItem, "badge"> = {
  id: "coospo-h6", name: "COOSPO H6 Heart Rate Monitor Chest Strap", brand: "CooSpo", price: "$25.49", url: amz("B07BS6B4PD"),
  availability: "in-stock", soldBy: "CooSpo",
  specs: ["Chest strap heart rate sensor", "Bluetooth and ANT+", "IP67", "Works with apps such as Strava and Polar Beat, per the listing"],
  body: "The budget way to get chest-strap heart rate into your phone or watch. Pair it with a free app and you have a heart rate record of every class.",
};

const GUIDE: EquipmentGuideProps = {
  slug: SLUG,
  title: TITLE,
  description: DESCRIPTION,
  breadcrumb: "How Many Calories Does Lagree Burn?",
  eyebrow: "Lagree",
  eyebrowAccent: "Calories",
  h1: "How Many Calories Does Lagree Burn?",
  h1Accent: "The Honest Numbers (2026)",
  readTime: "9 min read",
  updatedLabel: `Updated ${CHECKED}`,
  datePublished: CHECKED_ISO,
  dateModified: CHECKED_ISO,
  heroImage: HERO,
  heroAlt: "A fitness logbook on a studio bench",
  heroCaption: "Studio claims · Research · Your own number",
  intro: [
    "Lagree has a reputation as one of the hardest 45 to 50 minutes in boutique fitness: slow, continuous reps on the Megaformer until your legs shake. So how many calories does it actually burn?",
    "Studios often quote big numbers, and the research on Lagree itself is thin. Below we separate the claims from the evidence, show what the standard calorie formula gives at different intensities and body weights, and explain how to measure your own burn.",
  ],
  quickPicks: [
    { label: "Most accurate heart rate", itemId: "polar-h10" },
    { label: "Best budget strap", itemId: "coospo-h6" },
    { label: "Best smartwatch", itemId: "apple-watch-series-12" },
    { label: "Best for training load", itemId: "garmin-venu-4" },
    { label: "Best screen-free tracker", itemId: "whoop-one" },
  ],
  blocks: [
    {
      kind: "prose",
      eyebrow: "The short answer",
      heading: "Roughly 300 to 500 calories for most people, sometimes more",
      paragraphs: [
        "There is no independent study that has measured the calorie burn of a Lagree class. The figures you see come from studios and from estimates. Lagree studio marketing often quotes up to around 700 calories for a 50-minute class, while other estimates put a typical class at 300 to 600 calories.",
        "The standard calorie formula, applied to a vigorous workout (6 METs), gives about 310 to 430 calories for a 50-minute class for people weighing 130 to 180 lb. Higher figures are possible if you work at a harder, sustained intensity, are heavier, or take a longer class. Lower figures are likely in a beginner class with more rest and set-up time.",
        "The honest answer for you: wear a heart rate monitor for a few classes and look at your own numbers.",
      ],
    },
    {
      kind: "table",
      eyebrow: "By the numbers",
      heading: "Estimated calories in a 50-minute class",
      intro: "Calculated with the standard formula: calories per minute = METs × 3.5 × body weight in kg ÷ 200. A MET is a multiple of your resting energy use; 6 METs or more counts as vigorous.",
      columns: ["Intensity (METs)", "130 lb (59 kg)", "150 lb (68 kg)", "180 lb (82 kg)"],
      rows: [
        ["2.8 METs (general Pilates, 2024 Compendium)", "145 kcal", "167 kcal", "201 kcal"],
        ["6 METs (vigorous threshold)", "310 kcal", "357 kcal", "431 kcal"],
        ["8 METs (hard, sustained effort)", "413 kcal", "476 kcal", "574 kcal"],
      ],
      note: "These are estimates, not measurements. Lagree has no Compendium entry of its own; the 6 and 8 MET rows show what the formula gives if a class reaches those intensities.",
    },
    {
      kind: "cards",
      eyebrow: "Why the numbers vary",
      heading: "What changes your Lagree calorie burn",
      cards: [
        { h: "Body weight", b: "Calorie burn scales with body weight. At the same intensity, a 180 lb person burns about 40% more than a 130 lb person." },
        { h: "Time under tension", b: "Lagree keeps you moving slowly with little rest. The less time spent changing springs or resting, the higher the average intensity." },
        { h: "Spring load", b: "Heavier springs on slow reps raise effort. Lighter loads to protect form are smart for beginners but lower the burn." },
        { h: "Class length and level", b: "A 45-minute beginner class burns less than a 50-minute advanced one. Count only the minutes you are working." },
      ],
    },
    {
      kind: "table",
      eyebrow: "Compared",
      heading: "Lagree vs Pilates calories",
      columns: ["", "Lagree", "Reformer Pilates"],
      rows: [
        ["Intensity", "Designed to be high-intensity and low-impact", "Usually light to moderate; the 2024 Compendium lists general Pilates at 2.8 METs"],
        ["Research", "No published calorie study we could find", "A 2025 review of four studies found 65 to 214 kcal per session"],
        ["Typical estimate (150 lb, 50 min)", "About 357 kcal at 6 METs", "About 167 kcal at 2.8 METs"],
      ],
      note: "Pilates research figures from the reviews listed in Sources below. Estimates use the formula above.",
    },
    {
      kind: "products",
      id: "chest-straps",
      eyebrow: "Measure it",
      heading: "Chest strap heart rate monitors",
      intro: "A chest strap reads heart rate more directly than a watch. It sends it to your phone or watch, which turns it into a calorie estimate.",
      items: [
        { ...polarH10, badge: "Most Accurate", pros: ["Polar's most accurate sensor, per Polar", "Connects to two devices at once"], cons: ["Costs more than other straps"] },
        { ...polarH9, badge: "Best Value Polar", pros: ["XS-S size available", "Sold by Amazon.com"], cons: ["Fewer features than the H10"] },
        { ...coospo, badge: "Best Budget Strap", pros: ["$29.99", "Bluetooth and ANT+"], cons: ["Lesser-known brand"] },
      ],
    },
    {
      kind: "products",
      id: "watches",
      eyebrow: "Track every class",
      heading: "Smartwatches and trackers",
      intro: "Watches estimate calories from wrist heart rate. Gripping handles and planking can make wrist readings less reliable, so pair a watch with a chest strap if accuracy matters to you.",
      items: [
        gift("appleWatch12", { badge: "Best Smartwatch", pros: ["Pairs with Bluetooth chest straps", "Sold by Amazon.com"], cons: ["Needs an iPhone"] }),
        gift("appleWatchSE3", { badge: "Best Budget Apple Watch", pros: ["The lowest-priced Apple Watch here"], cons: ["Fewer sensors than Series 12"] }),
        gift("garminVenu4", { badge: "Best for Training Load", pros: ["Garmin training metrics", "Works with Android and iPhone"], cons: ["$549.99"] }),
        gift("whoopOne", { badge: "Best Screen-Free Tracker", pros: ["Strain and recovery scores", "12-month membership included"], cons: ["Membership renews after a year"] }),
      ],
    },
    {
      kind: "steps",
      eyebrow: "Do it yourself",
      heading: "How to find your own Lagree calorie burn",
      steps: [
        { h: "Enter your details", b: "Set your age, weight and height in your app. Calorie estimates depend on them." },
        { h: "Choose a strength or HIIT activity", b: "Pick an activity type that matches the effort. A watch set to a low-intensity activity may estimate differently from one set to a strength or interval workout." },
        { h: "Wear a chest strap", b: "Pair a chest strap with your watch or phone so heart rate comes from your chest, not your wrist." },
        { h: "Average three classes", b: "Record three to five classes and use the average. One class tells you little; a trend tells you a lot." },
      ],
    },
    {
      kind: "callout",
      eyebrow: "Keep it in perspective",
      heading: "Calories are only part of the story",
      body: [
        "Lagree is a strength and endurance workout. Its value is in muscle, stamina and consistency, not only the calorie number on your watch.",
        "If weight loss is your goal, read our guide to Lagree for weight loss, and speak to your doctor or a registered dietitian for personal advice.",
      ],
    },
  ],
  faqs: [
    { q: "How many calories does a 50-minute Lagree class burn?", a: "There is no independent study of Lagree's calorie burn. Using the standard formula for a vigorous (6 MET) workout, a 50-minute class burns about 310 to 430 calories for people weighing 130 to 180 lb. Studio marketing often quotes up to around 700." },
    { q: "Does Lagree burn more calories than Pilates?", a: "Usually, yes. Lagree is designed to be high-intensity, while the 2024 Compendium of Physical Activities lists general Pilates at 2.8 METs, a light intensity. A 2025 review of Pilates studies found 65 to 214 calories per session." },
    { q: "Is 700 calories in a Lagree class realistic?", a: "For most people, it is at the high end. The formula only reaches about 700 calories in 50 minutes for a heavier person working at a hard, sustained effort. Measure your own with a heart rate monitor rather than relying on a studio figure." },
    { q: "Why does my watch show fewer calories than the studio says?", a: "Studio figures are general claims, while your watch uses your own heart rate and details. Wrist readings can also slip during gripping and planks; a chest strap gives a steadier heart rate signal." },
    { q: "What is the best way to track calories in Lagree?", a: "A chest strap heart rate monitor, such as the Polar H10, paired with a watch or app, averaged over several classes." },
  ],
  related: [
    { title: "Lagree for Weight Loss", excerpt: "What Lagree can and cannot do for weight loss.", href: "/blog/lagree-for-weight-loss", imageUrl: "/pictures/stitch-studio-modern-row.png", category: "Lagree", readTime: "9 min read" },
    { title: "How Many Calories Does Pilates Burn?", excerpt: "Mat and reformer Pilates calorie data.", href: "/blog/how-many-calories-does-pilates-burn", imageUrl: "/pictures/stitch-reformer-sunlit-minimal.png", category: "Guides", readTime: "9 min read" },
    { title: "Best Heart Rate Monitor for Pilates and Spin", excerpt: "Chest straps and armbands compared.", href: "/blog/best-heart-rate-monitor-for-pilates-and-spin", imageUrl: "/pictures/stitch-studio-shelf-props.png", category: "Equipment", readTime: "9 min read" },
    { title: "Best Reformer for Lagree at Home", excerpt: "The Lagree Micro and reformers for Lagree-style training.", href: "/blog/best-reformer-for-lagree-at-home", imageUrl: "/pictures/stitch-hands-on-carriage.png", category: "Lagree", readTime: "12 min read" },
  ],
  sources: [
    { label: "Herrmann SD et al. 2024 Adult Compendium of Physical Activities. Journal of Sport and Health Science (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/38242596/" },
    { label: "Metabolic intensity and energy cost of Pilates exercises: a systematic review (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/41495794/" },
    { label: "Energy expenditure during a Pilates exercise session: a systematic review. Rev Bras Cineantropom Desempenho Hum (SciELO)", url: "https://www.scielo.br/j/rbcdh/a/7ftmJJDhKb4gZ6Qp8hspVJf/?lang=en" },
    { label: "Resistance Chicago: Lagree FAQ, effectiveness and results", url: "https://www.resistancechicago.com/blog/lagree-faq-results" },
  ],
  ctaTitle: "Find a Lagree studio near you",
  ctaSubtitle: "Use our city guides to find Lagree and boutique Pilates studios worldwide.",
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["how many calories does lagree burn", "lagree calories burned", "lagree calories per class", "megaformer calories burned", "lagree vs pilates calories", "calories burned 50 minute lagree class", "does lagree burn fat", "lagree calorie calculator", "best heart rate monitor for lagree"],
  openGraph: { title: TITLE, description: DESCRIPTION, type: "article", url: URL, images: [{ url: `https://pilatescollectiveclub.com${HERO}`, width: 1200, height: 630, alt: "A fitness logbook on a studio bench" }] },
  twitter: { card: "summary_large_image", title: "How Many Calories Does Lagree Burn?", description: DESCRIPTION, images: [`https://pilatescollectiveclub.com${HERO}`] },
  alternates: { canonical: URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

export default function Page() {
  return <EquipmentGuide {...GUIDE} />;
}
