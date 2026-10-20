import type { Metadata } from "next";
import EquipmentGuide, { type EquipmentGuideProps, type GuideItem } from "@/components/EquipmentGuide";

const SLUG = "best-lagree-workout-sets";
const URL = `https://pilatescollectiveclub.com/blog/${SLUG}`;
const HERO = "/pictures/stitch-retail-activewear.png";
const CHECKED = "October 16, 2026";
const CHECKED_ISO = "2026-10-16";
const TITLE = "Best Lagree Workout Sets (2026): 5 Matching Outfits";
const DESCRIPTION = "Matching legging and bra sets for Lagree: Beyond Yoga, Varley, Sweaty Betty, CRZ YOGA and SUUKSESS, with set prices from $39.95 to $183.96 on Amazon.";

const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=pilatescollective-20`;

const ITEMS: Record<string, Omit<GuideItem, "badge">> = {
  beyondLegging: {
    id: "beyond-yoga-spacedye-caught-in-the-midi", name: "Beyond Yoga Spacedye Caught in the Midi High Waisted Legging", brand: "Beyond Yoga", price: "$99.00", url: amz("B07663TDHG"),
    availability: "in-stock", soldBy: "Zappos",
    specs: ["Spacedye fabric: 87% polyester, 13% elastane", "5\" high waistband", "28\" midi inseam", "No outseam", "Machine washable"],
    body: "Beyond Yoga's best-known legging, in its signature soft Spacedye fabric. The high waistband stays put through planks and lunges, and there is no outside seam to rub on the carriage.",
  },
  beyondBra: {
    id: "beyond-yoga-spacedye-lift-your-spirits-bra", name: "Beyond Yoga Spacedye Lift Your Spirits Bra", brand: "Beyond Yoga", price: "$68.00", url: amz("B07HRVHSST"),
    availability: "in-stock", soldBy: "Grivet Outdoors",
    specs: ["Spacedye fabric: 87% polyester, 13% elastane", "Medium support", "Removable pads", "4-way stretch", "Contouring seams"],
    body: "The matching bra in the same Spacedye fabric, with medium support and removable pads. Choose the same colour as the legging for a true set.",
  },
  varleyLegging: {
    id: "varley-freesoft-25-legging", name: "Varley FreeSoft 25\" High-Rise Leggings", brand: "Varley", price: "$98.00", url: amz("B0D673NJB4"),
    availability: "in-stock", soldBy: "Zappos",
    specs: ["FreeSoft fabric: 75% polyester, 25% elastane", "Light compression", "Minimal seams", "25\" inseam", "Machine washable"],
    body: "Varley's FreeSoft legging is soft with light compression and minimal seams, designed, per the listing, for intense training. The 25-inch inseam keeps fabric clear of the springs and straps.",
  },
  varleyBra: {
    id: "varley-freesoft-cori-bra", name: "Varley FreeSoft Cori Bra", brand: "Varley", price: "$72.00", url: amz("B0GQ6TVS9L"),
    availability: "low-stock", soldBy: "Zappos",
    specs: ["FreeSoft fabric: 75% polyester, 25% elastane", "Removable cups", "4-way stretch", "Moisture-wicking"],
    body: "The FreeSoft bra that matches the legging: soft but compressive, with removable cups. Stock was low in some sizes when we checked.",
  },
  sbLegging: {
    id: "sweaty-betty-power-7-8-legging", name: "Sweaty Betty Power 7/8 Workout Leggings", brand: "Sweaty Betty", price: "$134.00", url: amz("B08HHTVMRX"),
    availability: "in-stock", soldBy: "Amazon.com",
    specs: ["Sweat-wicking, quick-drying fabric", "Sculpting seams", "Side pocket and back zip pocket", "24\" inseam"],
    body: "Sweaty Betty's multi-sport legging is sweat-wicking and quick-drying, which matters in a class as sweaty as Lagree. The back zip pocket holds a key or card.",
  },
  sbBra: {
    id: "sweaty-betty-power-medium-bra", name: "Sweaty Betty Power Medium Racer Back Sports Bra", brand: "Sweaty Betty", price: "$26.10", url: amz("B0BW197M92"),
    availability: "in-stock", soldBy: "Amazon.com",
    specs: ["Medium support", "Stretchy, sweat-wicking, quick-drying", "Scoop neck", "Looped back with adjustable T-bar strap"],
    body: "Sweaty Betty's bestselling Power Bra, with an adjustable strap. Sold and shipped by Amazon.com; colours and prices vary by size.",
  },
  crzLegging: {
    id: "crz-yoga-butterluxe-25-legging", name: "CRZ YOGA Butterluxe Leggings 25\"", brand: "CRZ YOGA", price: "$32.00", url: amz("B09P1GB319"),
    availability: "in-stock", soldBy: "CRZ YOGA",
    specs: ["Butterluxe fabric, very gentle compression", "High rise", "25\" inseam, 7/8 length", "Seamless waistband", "Squat proof, per the listing"],
    body: "The best-known budget alternative to premium buttery leggings. The listing says it is designed for yoga or lounging, with very gentle compression, so it suits riders who prefer soft over sculpting.",
  },
  crzBra: {
    id: "crz-yoga-butterluxe-y-back-bra", name: "CRZ YOGA Butterluxe Y Back Sports Bra", brand: "CRZ YOGA", price: "$28.00", url: amz("B0B3CP6VY9"),
    availability: "in-stock", soldBy: "CRZ YOGA",
    specs: ["Butterluxe fabric", "Light support", "Removable pads", "A-D cups", "Spaghetti-strap racerback"],
    body: "The matching Butterluxe bra. Light support only, so pick a more supportive bra if you prefer more hold for jumping or cardio intervals.",
  },
  suuksess: {
    id: "suuksess-double-layered-workout-set", name: "SUUKSESS Double Layered Workout Set (Tank + Leggings)", brand: "SUUKSESS", price: "$39.95", url: amz("B0H73RF834"),
    availability: "in-stock", soldBy: "AIGUO",
    specs: ["2-piece set: built-in-bra tank and high-waisted leggings", "75% nylon, 25% elastane", "Double layer", "Moisture-wicking, not see-through, per the listing", "Sizes XS to XL"],
    body: "A full matching set for under $40: a double-layer tank with a built-in bra and high-waisted leggings. The easiest way to try the matching-set look.",
  },
};

const it = (key: string, badge: string, pros: string[], cons: string[]): GuideItem => ({ ...ITEMS[key], badge, pros, cons });

const GUIDE: EquipmentGuideProps = {
  slug: SLUG,
  title: TITLE,
  description: DESCRIPTION,
  breadcrumb: "Best Lagree Workout Sets",
  eyebrow: "Lagree",
  eyebrowAccent: "What to Wear",
  h1: "The Best Lagree Workout Sets",
  h1Accent: "5 Matching Outfits for Class (2026)",
  readTime: "8 min read",
  updatedLabel: `Prices checked ${CHECKED}`,
  datePublished: CHECKED_ISO,
  dateModified: CHECKED_ISO,
  heroImage: HERO,
  heroAlt: "Activewear hanging in a studio boutique",
  heroCaption: "Beyond Yoga · Varley · Sweaty Betty · CRZ YOGA",
  intro: [
    "Matching sets are the unofficial uniform of the Lagree studio, and for good reason: a high-waisted legging and a bra cut from the same fabric stay in place, feel the same against the carriage, and look put-together when you walk out drenched.",
    "Here are five legging-and-bra sets on Amazon, from a $39.95 two-piece to a $183.96 Sweaty Betty set, with the price and stock we checked today. Set prices add the legging and the bra.",
  ],
  quickPicks: [
    { label: "Best overall set", itemId: "beyond-yoga-spacedye-caught-in-the-midi" },
    { label: "Best for sweaty classes", itemId: "sweaty-betty-power-7-8-legging" },
    { label: "Best light compression", itemId: "varley-freesoft-25-legging" },
    { label: "Best budget legging", itemId: "crz-yoga-butterluxe-25-legging" },
    { label: "Best set under $40", itemId: "suuksess-double-layered-workout-set" },
  ],
  blocks: [
    {
      kind: "table",
      eyebrow: "At a glance",
      heading: "The five sets compared",
      columns: ["Set", "Legging", "Bra", "Set price"],
      rows: [
        ["Beyond Yoga Spacedye", "$99.00", "$68.00", "$167.00"],
        ["Varley FreeSoft", "$98.00", "$72.00", "$170.00"],
        ["Sweaty Betty Power", "$134.00", "$26.10", "$183.96"],
        ["CRZ YOGA Butterluxe", "$32.00", "$28.00", "$60.00"],
        ["SUUKSESS two-piece", "Included", "Built-in-bra tank", "$39.95"],
      ],
      note: `Amazon prices checked on ${CHECKED} for the size and colour linked. Prices can vary by size and colour.`,
    },
    {
      kind: "cards",
      eyebrow: "What to look for",
      heading: "What makes a good Lagree set",
      cards: [
        { h: "A high waist that stays up", b: "Lagree is full of planks, lunges and kneeling work on a moving carriage. A high, wide waistband stops you from adjusting between reps." },
        { h: "Sweat-wicking fabric", b: "Lagree classes are notoriously sweaty. Quick-drying fabric stays lighter and less see-through when wet." },
        { h: "7/8 or midi length", b: "A cropped length shows the grip of your socks and keeps fabric clear of springs and straps." },
        { h: "Minimal hardware", b: "Avoid zips, buckles or bulky seams on the back and hips, which can press into you when lying on the carriage." },
      ],
    },
    {
      kind: "products",
      id: "premium",
      eyebrow: "Premium sets",
      heading: "Premium matching sets",
      items: [
        it("beyondLegging", "Best Overall Set", ["Signature soft Spacedye fabric", "No outseam"], ["Sold by Zappos; colours vary by size"]),
        it("beyondBra", "Matching Bra", ["Removable pads", "Medium support"], ["Not for high-impact cardio"]),
        it("sbLegging", "Best for Sweaty Classes", ["Sweat-wicking and quick-drying", "Sold by Amazon.com", "Back zip pocket"], ["The priciest legging here"]),
        it("sbBra", "Matching Bra", ["Adjustable T-bar strap", "Sold by Amazon.com"], ["Price varies a lot by colour and size"]),
        it("varleyLegging", "Best Light Compression", ["Soft with light compression", "Minimal seams"], ["Sold by Zappos"]),
        it("varleyBra", "Matching Bra", ["Removable cups", "Moisture-wicking"], ["Low stock in some sizes"]),
      ],
    },
    {
      kind: "products",
      id: "budget",
      eyebrow: "Under $60",
      heading: "Budget matching sets",
      items: [
        it("crzLegging", "Best Budget Legging", ["$32", "Very soft", "Seamless waistband"], ["Very gentle compression"]),
        it("crzBra", "Matching Bra", ["$28", "Removable pads"], ["Light support only"]),
        it("suuksess", "Best Set Under $40", ["Tank and leggings in one order", "Double layer"], ["Lesser-known brand"]),
      ],
    },
    {
      kind: "callout",
      eyebrow: "Complete the look",
      heading: "Don't forget the grip socks",
      body: [
        "Many Lagree studios ask for grip socks on the Megaformer. Match them to your set, and add a sweat towel and a headband for the sweatiest classes.",
      ],
    },
  ],
  faqs: [
    { q: "What should I wear to Lagree?", a: "Fitted, sweat-wicking clothing: a high-waisted 7/8 legging, a supportive bra or fitted top, and grip socks. Loose clothing can catch on the springs and carriage." },
    { q: "Are matching sets good for Lagree?", a: "Yes. A legging and bra from the same line usually share a fabric and waistband design, so the set stays in place together and feels consistent against the carriage." },
    { q: "What is the best Lagree workout set?", a: `Our top pick is the Beyond Yoga Spacedye set ($99 legging and $68 bra on ${CHECKED}). For the sweatiest classes, Sweaty Betty's sweat-wicking Power set; on a budget, CRZ YOGA Butterluxe for $60.` },
    { q: "Should I wear shorts or leggings to Lagree?", a: "Either works. Leggings protect your knees and skin on the carriage during kneeling work; shorts are cooler. See our guide to Lagree shorts." },
  ],
  related: [
    { title: "What to Wear to Lagree", excerpt: "The complete Lagree outfit guide.", href: "/blog/what-to-wear-to-lagree", imageUrl: "/pictures/stitch-studio-changing-area.png", category: "Lagree", readTime: "8 min read" },
    { title: "Best Leggings for Lagree", excerpt: "Leggings compared for carriage work.", href: "/blog/best-leggings-for-lagree", imageUrl: "/pictures/stitch-retail-activewear.png", category: "Lagree", readTime: "8 min read" },
    { title: "Best Sports Bra for Lagree", excerpt: "Support for planks and cardio intervals.", href: "/blog/best-sports-bra-for-lagree", imageUrl: "/pictures/stitch-studio-round-mirror.png", category: "Lagree", readTime: "8 min read" },
    { title: "Best Lagree Grip Socks", excerpt: "Grip socks for the Megaformer.", href: "/blog/best-lagree-grip-socks", imageUrl: "/pictures/stitch-grip-socks-footbar.png", category: "Lagree", readTime: "8 min read" },
  ],
  ctaTitle: "Find a Lagree studio near you",
  ctaSubtitle: "Use our city guides to find Lagree and boutique Pilates studios worldwide.",
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["best lagree workout sets", "lagree outfit", "lagree matching set", "what to wear to lagree", "matching workout set for lagree", "beyond yoga spacedye set", "varley freesoft set", "sweaty betty power set", "lagree class outfit ideas"],
  openGraph: { title: TITLE, description: DESCRIPTION, type: "article", url: URL, images: [{ url: `https://pilatescollectiveclub.com${HERO}`, width: 1200, height: 630, alt: "Activewear in a studio boutique" }] },
  twitter: { card: "summary_large_image", title: "Best Lagree Workout Sets (2026)", description: DESCRIPTION, images: [`https://pilatescollectiveclub.com${HERO}`] },
  alternates: { canonical: URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

export default function Page() {
  return <EquipmentGuide {...GUIDE} />;
}
