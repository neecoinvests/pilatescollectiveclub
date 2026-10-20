import type { Metadata } from "next";
import EquipmentGuide, { type EquipmentGuideProps, type GuideItem } from "@/components/EquipmentGuide";

const SLUG = "best-headband-for-lagree";
const URL = `https://pilatescollectiveclub.com/blog/${SLUG}`;
const HERO = "/pictures/stitch-studio-round-mirror.png";
const CHECKED = "October 20, 2026";
const CHECKED_ISO = "2026-10-20";
const TITLE = "Best Headband for Lagree (2026): 6 Sweatproof, No-Slip Picks";
const DESCRIPTION = "The best sweatproof, no-slip headbands for Lagree: Halo, Sweaty Bands, Nike, Under Armour, Bondi Band and a 6-pack, compared on grip and sweat control.";

const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=pilatescollective-20`;

const ITEMS: Record<string, Omit<GuideItem, "badge">> = {
  halo: {
    id: "halo-headband-ii", name: "Halo Headband II Pullover Sweatband", brand: "Halo Headband", price: "$16.95", url: amz("B002L9ZEHW"),
    availability: "in-stock", soldBy: "Halo Headband",
    specs: ["Patented silicone SweatSeal channels sweat away from the eyes", "Dryline fabric: 63% nylon, 23% polyester, 14% Lycra", "Silver ions to reduce odour", "Non-slip grip", "Pullover; men or women"],
    body: "The headband for heavy sweaters. Halo's silicone SweatSeal strip channels sweat to the sides instead of into your eyes, which is exactly the problem in a dripping Lagree plank.",
  },
  sweatyBands: {
    id: "sweaty-bands-velvet-lined", name: "Sweaty Bands No-Slip Velvet-Lined Headband (5/8\")", brand: "Sweaty Bands", price: "$19.99", url: amz("B01FSSEBIU"),
    availability: "in-stock", soldBy: "Sweaty Bands",
    specs: ["Velvet lining for non-slip grip", "Stretchy elastic", "Sweat-wicking fabric", "5/8\" wide", "Hand wash, drip dry"],
    body: "A slim headband with a velvet lining that grips without pulling your hair. It keeps flyaways back rather than soaking up lots of sweat, and looks good after class.",
  },
  nike: {
    id: "nike-dri-fit-fury-wide-headband", name: "Nike Dri-FIT Fury Classic Wide Headband", brand: "Nike", price: "$16.00", url: amz("B0DTSWNXC3"),
    availability: "in-stock", soldBy: "Amazon.com",
    specs: ["Dri-FIT fabric", "Breathable", "Wide", "Unisex"],
    body: "A wide Dri-FIT headband sold and shipped by Amazon.com. The width covers more of the forehead, so it soaks up more sweat than slim bands.",
  },
  ua: {
    id: "under-armour-play-up-headband", name: "Under Armour Women's Play Up Headband", brand: "Under Armour", price: "$12.00", url: amz("B08LMSGBHY"),
    availability: "in-stock", soldBy: "Amazon.com",
    specs: ["Breathable, stretchy fabric", "Anti-odor technology", "Exposed spandex elastic interior for grip", "One size"],
    body: "An inexpensive band with an exposed elastic interior that grips without pulling hair. Sold by Amazon.com.",
  },
  bondi: {
    id: "bondi-band-tapered", name: "Bondi Band Tapered Anti-Slip Workout Headband", brand: "Bondi Band", price: "$9.99", url: amz("B00JQXSQ2Q"),
    availability: "in-stock", soldBy: "Liangt Boss",
    specs: ["Moisture-wicking", "Non-slip design, per the listing", "Tapered end", "Made in USA", "One size"],
    body: "A wide, tapered moisture-wicking band made in the USA. The tapered back sits comfortably when you lie on the carriage.",
  },
  qishang: {
    id: "qishang-6-pack-headbands", name: "QiShang 6-Pack Sweat Headbands", brand: "QiShang", price: "$9.99", url: amz("B08HLRSP6B"),
    availability: "in-stock", soldBy: "Qishang Trading",
    specs: ["6 headbands", "Nylon and spandex", "Two silicone non-slip strips inside", "Contains a small amount of latex, per the listing"],
    body: "Six bands for under $10, each with two silicone strips inside. A good way to have a clean band for every class. Skip if you have a latex allergy.",
  },
};

const it = (key: string, badge: string, pros: string[], cons: string[]): GuideItem => ({ ...ITEMS[key], badge, pros, cons });

const GUIDE: EquipmentGuideProps = {
  slug: SLUG,
  title: TITLE,
  description: DESCRIPTION,
  breadcrumb: "Best Headband for Lagree",
  eyebrow: "Lagree",
  eyebrowAccent: "Accessories",
  h1: "The Best Headband for Lagree",
  h1Accent: "6 Sweatproof, No-Slip Picks (2026)",
  readTime: "7 min read",
  updatedLabel: `Prices checked ${CHECKED}`,
  datePublished: CHECKED_ISO,
  dateModified: CHECKED_ISO,
  heroImage: HERO,
  heroAlt: "A round mirror in a boutique studio",
  heroCaption: "Sweat control · No-slip grip · Flat at the back",
  intro: [
    "A Lagree class is slow, hard and very sweaty. Sweat in your eyes in the middle of a plank, or a headband that slides off when you lie back on the carriage, is the last thing you need.",
    "We compared six headbands on Amazon on the two things that matter in Lagree: sweat control and grip. Prices and stock were checked today.",
  ],
  quickPicks: [
    { label: "Best for heavy sweat", itemId: "halo-headband-ii" },
    { label: "Best no-slip slim band", itemId: "sweaty-bands-velvet-lined" },
    { label: "Best wide band", itemId: "nike-dri-fit-fury-wide-headband" },
    { label: "Best budget", itemId: "under-armour-play-up-headband" },
    { label: "Best multipack", itemId: "qishang-6-pack-headbands" },
  ],
  blocks: [
    {
      kind: "table",
      eyebrow: "At a glance",
      heading: "The six headbands compared",
      columns: ["Headband", "Price", "Best for", "Grip"],
      rows: [
        ["Halo Headband II", "$16.95", "Heavy sweat", "Non-slip grip + SweatSeal"],
        ["Sweaty Bands 5/8\"", "$19.99", "Flyaways, style", "Velvet lining"],
        ["Nike Dri-FIT Fury Wide", "$16.00", "Sweat absorption", "Elastic"],
        ["Under Armour Play Up", "$12.00", "Budget", "Exposed elastic interior"],
        ["Bondi Band Tapered", "$9.99", "Lying on the carriage", "Non-slip design"],
        ["QiShang 6-Pack", "$9.99", "A clean band every class", "Silicone strips"],
      ],
      note: `Amazon prices checked on ${CHECKED}.`,
    },
    {
      kind: "products",
      id: "headbands",
      eyebrow: "Our picks",
      heading: "The best headbands for Lagree",
      items: [
        it("halo", "Best for Heavy Sweat", ["SweatSeal keeps sweat out of eyes", "Anti-odour fabric"], ["Pullover, sporty look"]),
        it("sweatyBands", "Best No-Slip Slim Band", ["Velvet grip", "Looks good after class"], ["Slim: absorbs less sweat", "Hand wash only"]),
        it("nike", "Best Wide Band", ["Covers more forehead", "Sold by Amazon.com"], ["Simple elastic grip"]),
        it("ua", "Best Budget", ["Under $11", "Sold by Amazon.com"], ["Thinner than the wide bands"]),
        it("bondi", "Best for Lying Back", ["Tapered back", "Made in USA"], ["Third-party seller"]),
        it("qishang", "Best Multipack", ["Six bands", "Silicone strips"], ["Contains latex"]),
      ],
    },
    {
      kind: "cards",
      eyebrow: "How to choose",
      heading: "What matters in a Lagree headband",
      cards: [
        { h: "Sweat control", b: "Wide bands absorb more. A silicone sweat channel like Halo's redirects sweat away from the eyes." },
        { h: "Grip", b: "Velvet linings and silicone strips stop the band sliding when you lie back or move between front and back of the machine." },
        { h: "A flat back", b: "Knots and bows press into your head on the carriage. Choose a flat or tapered back." },
        { h: "Easy care", b: "You will wash it after every class. Check the care label, and consider a multipack." },
      ],
    },
  ],
  faqs: [
    { q: "What is the best headband for Lagree?", a: `For heavy sweaters, the Halo Headband II ($16.95 on ${CHECKED}), whose silicone SweatSeal channels sweat away from the eyes. For a slim, no-slip band, Sweaty Bands' velvet-lined headband.` },
    { q: "Do you need a headband for Lagree?", a: "Not always, but Lagree is very sweaty and involves planks and lying on the carriage. A headband keeps sweat out of your eyes and hair off your face." },
    { q: "How do I stop my headband slipping in class?", a: "Choose a band with a velvet lining or silicone strips, and put it on over dry hair before class. Slim bands tend to stay put better than wide, loose ones." },
    { q: "Can men wear these headbands?", a: "Yes. The Halo Headband II and the Nike Dri-FIT Fury headband are sold as unisex or for men and women." },
  ],
  related: [
    { title: "Best Sweat Towel for Lagree", excerpt: "Towels for the sweatiest class in fitness.", href: "/blog/best-sweat-towel-for-lagree", imageUrl: "/pictures/stitch-studio-bench-towels.png", category: "Lagree", readTime: "7 min read" },
    { title: "Best Lagree Workout Sets", excerpt: "Matching outfits for class.", href: "/blog/best-lagree-workout-sets", imageUrl: "/pictures/stitch-retail-activewear.png", category: "Lagree", readTime: "8 min read" },
    { title: "Best Water Bottle for Lagree", excerpt: "Bottles for sweaty classes.", href: "/blog/best-water-bottle-for-lagree", imageUrl: "/pictures/stitch-water-towel-bench.png", category: "Lagree", readTime: "7 min read" },
    { title: "What to Wear to Lagree", excerpt: "The complete Lagree outfit guide.", href: "/blog/what-to-wear-to-lagree", imageUrl: "/pictures/stitch-studio-changing-area.png", category: "Lagree", readTime: "8 min read" },
  ],
  ctaTitle: "Find a Lagree studio near you",
  ctaSubtitle: "Use our city guides to find Lagree and boutique Pilates studios worldwide.",
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["best headband for lagree", "lagree headband", "sweatproof headband for lagree", "non slip workout headband", "halo headband lagree", "sweaty bands lagree", "best sweatband for lagree", "headband that doesn't slip"],
  openGraph: { title: TITLE, description: DESCRIPTION, type: "article", url: URL, images: [{ url: `https://pilatescollectiveclub.com${HERO}`, width: 1200, height: 630, alt: "A round mirror in a studio" }] },
  twitter: { card: "summary_large_image", title: "Best Headband for Lagree (2026)", description: DESCRIPTION, images: [`https://pilatescollectiveclub.com${HERO}`] },
  alternates: { canonical: URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

export default function Page() {
  return <EquipmentGuide {...GUIDE} />;
}
