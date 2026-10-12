import type { Metadata } from "next";
import EquipmentGuide, { type EquipmentGuideProps } from "@/components/EquipmentGuide";
import { item, PRICES_CHECKED, PRICES_CHECKED_ISO } from "@/lib/reformerCatalog";

const SLUG = "merrithew-spx-max-vs-v2-max";
const URL = `https://pilatescollectiveclub.com/blog/${SLUG}`;
const HERO = "/pictures/stitch-reformer-spring-detail.png";
const TITLE = "Merrithew SPX Max vs V2 Max (2026): Which STOTT Reformer?";
const DESCRIPTION = "Merrithew SPX Max vs V2 Max: carriage width (22\" vs 24\"), frame height, springs, Vertical Frame and price, plus the At Home SPX and Rehab V2 Max Plus.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["merrithew spx max vs v2 max", "spx max vs v2 max", "stott pilates spx max", "merrithew v2 max plus", "spx max reformer review", "v2 max reformer review", "stott reformer comparison", "merrithew at home spx", "rehab v2 max plus"],
  openGraph: { title: TITLE, description: DESCRIPTION, type: "article", url: URL, images: [{ url: `https://pilatescollectiveclub.com${HERO}`, width: 1200, height: 630, alt: "Reformer springs close-up" }] },
  twitter: { card: "summary_large_image", title: "Merrithew SPX Max vs V2 Max (2026)", description: DESCRIPTION, images: [`https://pilatescollectiveclub.com${HERO}`] },
  alternates: { canonical: URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const GUIDE: EquipmentGuideProps = {
  slug: SLUG,
  title: TITLE,
  description: DESCRIPTION,
  breadcrumb: "Merrithew SPX Max vs V2 Max",
  eyebrow: "Comparison",
  eyebrowAccent: "Merrithew · STOTT PILATES",
  h1: "Merrithew SPX Max vs V2 Max",
  h1Accent: "(2026): Which STOTT Reformer?",
  readTime: "11 min read",
  updatedLabel: `Prices checked ${PRICES_CHECKED}`,
  datePublished: "2026-10-12",
  dateModified: PRICES_CHECKED_ISO,
  heroImage: HERO,
  heroAlt: "Close-up of reformer springs",
  heroCaption: "SPX Max · V2 Max · At Home SPX · Rehab V2 Max Plus",
  intro: [
    "Merrithew, the company behind STOTT PILATES, makes two reformer families that buyers most often weigh against each other: the compact SPX Max and the larger, higher V2 Max. Merrithew's own material describes the SPX as built lower to the ground and narrower than the V2 Max, and positions the V2 Max for boutique studios, clubs and dedicated Pilates spaces.",
    "Below we compare the two on the specifications Merrithew and its dealers publish, and show the versions you can buy on Amazon today: the At Home SPX package and the Rehab V2 Max Plus.",
  ],
  quickPicks: [
    { label: "Best for most homes", itemId: "merrithew-at-home-spx" },
    { label: "Best SPX for upright storage", itemId: "merrithew-at-home-spx-stand" },
    { label: "Compact studio machine", itemId: "merrithew-spx-max" },
    { label: "Best for clinics and rehab", itemId: "merrithew-rehab-v2-max-plus" },
  ],
  blocks: [
    {
      kind: "callout",
      eyebrow: "The short answer",
      heading: "SPX Max or V2 Max?",
      body: [
        "Choose the SPX family for a home, a small studio or a room you share. It is narrower, lower and lighter, and Merrithew sells it as a home package on Amazon.",
        "Choose the V2 Max family for a dedicated studio or clinic. Its wider 24-inch carriage and higher frame make it easier to get on and off, and the Rehab V2 Max Plus adds a Vertical Frame for tower-style work.",
      ],
    },
    {
      kind: "table",
      eyebrow: "Head to head",
      heading: "SPX Max vs V2 Max Plus: the specs",
      intro: "SPX Max figures are from Merrithew dealer listings; V2 Max Plus figures combine a dealer listing with the Amazon listing for the Rehab V2 Max Plus. Confirm with Merrithew before you buy.",
      columns: ["Spec", "SPX Max", "V2 Max Plus"],
      rows: [
        ["Carriage width", "22\"", "24\""],
        ["Frame width", "About 26.5\"", "About 30\""],
        ["Frame length", "About 97\"", "About 97\""],
        ["Height from floor", "About 9\" (carriage)", "About 16\""],
        ["Springs", "3 × 100%, 1 × 50%, 1 × 25%", "5 high-precision springs"],
        ["Vertical Frame", "Optional", "Included on the Plus"],
        ["Weight", "About 128 lb", "224 lb (Rehab V2 Max Plus, Amazon)"],
        ["Price", "Dealer quote", "$8,199 on Amazon (Rehab V2 Max Plus)"],
      ],
      note: "Merrithew's own jumpboard listing confirms the carriage split: the 22\" jumpboard fits SPX-model reformers, the 24\" fits V2 Max, V2 Max Plus, Rehab and Rack & Roll reformers.",
    },
    {
      kind: "cards",
      eyebrow: "What the differences mean",
      heading: "How the two feel in practice",
      cards: [
        { h: "Carriage width", b: "Two inches matters most for larger or taller practitioners and for side-lying work. The V2 Max's 24-inch carriage gives more room; the SPX's 22-inch carriage keeps the whole machine narrower." },
        { h: "Frame height", b: "A higher frame (about 16 inches on the V2 Max Plus versus about 9 on the SPX) makes it easier to get on and off, which is why clinics and older clients often prefer it." },
        { h: "Footprint", b: "Both are about 97 inches long. The SPX is roughly 3.5 inches narrower and far lighter, so it is easier to move and to fit beside a bed or sofa." },
        { h: "Vertical Frame", b: "The V2 Max Plus includes a Vertical Frame for tower-style exercises. On the SPX Max it is an option, and a mat converter turns a reformer with a Vertical Frame into a virtual Cadillac." },
        { h: "Accessories", b: "Accessories are sized to the carriage. Merrithew lists 22-inch versions for SPX (jumpboard, mat converter, Cardio-Tramp) and 24-inch versions for V2 Max." },
        { h: "Price", b: "The SPX is the lower-cost family. On Amazon, the At Home SPX package is $3,349; the Rehab V2 Max Plus is $8,199." },
      ],
    },
    {
      kind: "products",
      id: "spx",
      eyebrow: "The SPX family",
      heading: "SPX: the compact choice",
      intro: "Amazon carries the At Home SPX package, sold by Amazon.com, plus a version with a vertical storage stand. The SPX Max itself is sold through Merrithew and its dealers.",
      items: [
        item("spxHome", {
          badge: "Best for Most Homes",
          pros: ["Box, roll-up pole, platform extender and straps included", "Sold and shipped by Amazon.com, in stock", "Aluminium rails, 115 lb"],
          cons: ["Lower frame than the V2 Max", "22\" carriage is narrower"],
        }),
        item("spxHomeStand", {
          badge: "Best for Upright Storage",
          pros: ["Includes a vertical stand", "Same package contents"],
          cons: ["$200 more", "Low stock"],
        }),
        item("spxMaxDirect", {
          badge: "Compact Studio Machine",
          pros: ["Merrithew's compact studio reformer", "350 lb user capacity (dealer listings)", "Vertical Frame and mat converter available"],
          cons: ["Not sold on Amazon", "Dealer pricing varies by bundle"],
        }),
      ],
    },
    {
      kind: "products",
      id: "v2-max",
      eyebrow: "The V2 Max family",
      heading: "V2 Max: the studio and clinic choice",
      items: [
        item("v2MaxPlus", {
          badge: "Best for Clinics and Rehab",
          pros: ["Raised frame for easier transfers", "Vertical Frame for tower-style work", "24\" carriage"],
          cons: ["$8,199 and 224 lb", "Made to order", "Needs ceiling height for the Vertical Frame (dealer listings cite 84\" minimum)"],
        }),
      ],
    },
    {
      kind: "products",
      id: "spx-accessories",
      eyebrow: "SPX accessories",
      heading: "Accessories sized for the SPX carriage",
      items: [
        item("spxJumpboard", { badge: "Jumpboard" }),
        item("spxMatConverter", { badge: "Mat Converter" }),
      ],
    },
  ],
  faqs: [
    { q: "What is the difference between the Merrithew SPX Max and V2 Max?", a: "The SPX Max is the compact family: a 22-inch carriage, a frame about 26.5 inches wide and about 9 inches off the floor (dealer listings). The V2 Max is larger: a 24-inch carriage, a frame about 30 inches wide and about 16 inches high on the V2 Max Plus. Merrithew positions the V2 Max for dedicated studios and clubs." },
    { q: "Is the SPX Max good for home use?", a: "Yes. It is the narrower, lighter, lower family, and Merrithew sells the SPX as an At Home package on Amazon ($3,349, sold by Amazon.com) with a box, roll-up pole, platform extender and straps." },
    { q: "Is the V2 Max Plus worth the extra money?", a: "For a clinic, a studio, or a user who finds a low reformer hard to get on and off, often yes: the higher frame and included Vertical Frame are real advantages. For most homes, the SPX covers the same core repertoire for far less." },
    { q: "Can I buy the SPX Max on Amazon?", a: "Not the SPX Max itself. Amazon carries the At Home SPX Reformer Package and SPX-sized accessories. Buy the SPX Max from Merrithew or an authorized dealer." },
    { q: "Do SPX and V2 Max accessories interchange?", a: "Not always. Merrithew's jumpboard listing gives a 22-inch version for SPX carriages and a 24-inch version for V2 Max, V2 Max Plus, Rehab and Rack & Roll reformers. Match accessories to the carriage width." },
  ],
  related: [
    { title: "Merrithew V2 Max Review", excerpt: "The Rehab V2 Max Plus reviewed in detail.", href: "/blog/merrithew-v2-max-review", imageUrl: "/pictures/stitch-reformer-row-studio.png", category: "Review", readTime: "10 min read" },
    { title: "Merrithew SPX Max Review", excerpt: "The compact STOTT reformer, reviewed.", href: "/blog/merrithew-spx-max-review", imageUrl: "/pictures/stitch-reformer-morning-light.png", category: "Review", readTime: "10 min read" },
    { title: "Best Pilates Reformer Under $5,000", excerpt: "Studio machines from Balanced Body, Merrithew and Align.", href: "/blog/best-pilates-reformer-under-5000", imageUrl: "/pictures/stitch-reformer-row-studio.png", category: "Equipment", readTime: "15 min read" },
    { title: "Balanced Body vs Merrithew", excerpt: "The two biggest reformer brands compared.", href: "/blog/balanced-body-vs-merrithew", imageUrl: "/pictures/stitch-reformers-aerial-row.png", category: "Comparison", readTime: "12 min read" },
  ],
};

export default function Page() {
  return <EquipmentGuide {...GUIDE} />;
}
