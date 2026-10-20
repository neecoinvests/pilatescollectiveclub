import type { Metadata } from "next";
import EquipmentGuide, { type EquipmentGuideProps } from "@/components/EquipmentGuide";
import { item, PRICES_CHECKED, PRICES_CHECKED_ISO } from "@/lib/reformerCatalog";

const SLUG = "best-pilates-reformer-under-5000";
const URL = `https://pilatescollectiveclub.com/blog/${SLUG}`;
const HERO = "/pictures/stitch-reformer-row-studio.png";
const TITLE = "Best Pilates Reformer Under $5,000 (2026): Studio Picks";
const DESCRIPTION = "The best Pilates reformers under $5,000: Balanced Body Studio, Rialto and Allegro Stretch, Merrithew SPX and Align C8-PRO, compared on specs and live prices.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["best pilates reformer under 5000", "pilates reformer under $5000", "balanced body studio reformer", "balanced body rialto", "allegro stretch reformer", "merrithew at home spx", "professional pilates reformer for home", "studio grade reformer", "reformer with tower under 5000"],
  openGraph: { title: TITLE, description: DESCRIPTION, type: "article", url: URL, images: [{ url: `https://pilatescollectiveclub.com${HERO}`, width: 1200, height: 630, alt: "A row of studio Pilates reformers" }] },
  twitter: { card: "summary_large_image", title: "Best Pilates Reformer Under $5,000 (2026)", description: DESCRIPTION, images: [`https://pilatescollectiveclub.com${HERO}`] },
  alternates: { canonical: URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const GUIDE: EquipmentGuideProps = {
  slug: SLUG,
  title: TITLE,
  description: DESCRIPTION,
  breadcrumb: "Best Reformer Under $5,000",
  eyebrow: "Buying Guide",
  eyebrowAccent: "Studio Reformers",
  h1: "Best Pilates Reformer Under $5,000",
  h1Accent: "(2026): Studio Machines Compared",
  readTime: "15 min read",
  updatedLabel: `Prices checked ${PRICES_CHECKED}`,
  datePublished: "2026-10-12",
  dateModified: PRICES_CHECKED_ISO,
  heroImage: HERO,
  heroAlt: "A row of studio Pilates reformers",
  heroCaption: "Studio-grade reformers · Towers · Upgrades",
  intro: [
    "Up to $5,000 buys the machines studios actually run: Balanced Body's Studio Reformer in solid maple, the maple-and-aluminium Rialto, the long Allegro Stretch, and Merrithew's At Home SPX package. It also buys a reformer with a full tower, which is how many home studios grow into Cadillac work without a second footprint.",
    "We compared every studio-brand reformer we could find on Amazon in this band, using the specifications published on each listing. Most Balanced Body machines are made to order, so we note lead times; prices were checked live.",
  ],
  quickPicks: [
    { label: "Best overall", itemId: "balanced-body-studio-reformer" },
    { label: "Best with sitting box included", itemId: "balanced-body-studio-reformer-xsr" },
    { label: "Best reformer + tower", itemId: "balanced-body-rialto-tower" },
    { label: "Best for tall users", itemId: "balanced-body-allegro-stretch" },
    { label: "Best maple for less", itemId: "balanced-body-rialto" },
    { label: "Best complete home package", itemId: "merrithew-at-home-spx" },
    { label: "Best value", itemId: "align-c8-pro" },
  ],
  blocks: [
    {
      kind: "callout",
      eyebrow: "The short answer",
      heading: "Which reformer under $5,000 should you buy?",
      body: [
        "If you want the reference studio machine, buy the Balanced Body Studio Reformer: a solid Strata Rock Maple frame and five Signature Springs with up to 46 resistance settings. Choose the XSR version ($4,850) if you want the sitting box included.",
        "If you want tower work too, the Balanced Body Rialto with Tower & Mat gives you reformer, tower and mat on one footprint for $4,230.",
        "If you are tall, the Allegro Stretch has a carriage 2 inches wider and 6 inches longer than the standard Allegro.",
        "If you want everything in one box, shipped by Amazon.com, Merrithew's At Home SPX package includes a box, roll-up pole, platform extender and straps for $3,349.",
      ],
    },
    {
      kind: "products",
      id: "studio-reformers",
      eyebrow: "The studio standard",
      heading: "Balanced Body Studio Reformer",
      intro: "The machine most certification centres and studios are built around. Both versions are made to order by Balanced Body.",
      items: [
        item("studioRevo", {
          badge: "Best Overall",
          pros: ["Solid Strata Rock Maple frame", "Up to 46 resistance settings from 5 Signature Springs", "Revo footbar and springbar adjust quickly", "Matches what most studios use"],
          cons: ["Does not fold or stack", "Made to order: allow a lead time", "Box and jumpboard sold separately"],
        }),
        item("studioXsr", {
          badge: "Best with Sitting Box",
          pros: ["Upholstered sitting box and foot strap included", "XSR footbar with non-slip surface", "Same maple frame and springs"],
          cons: ["$150 more than the Revo version", "212 lb: a permanent installation"],
        }),
      ],
    },
    {
      kind: "products",
      id: "rialto-allegro",
      eyebrow: "Mid-range Balanced Body",
      heading: "Rialto and Allegro Stretch",
      intro: "Two ways into Balanced Body for less than the Studio Reformer: the maple-framed Rialto, and the aluminium Allegro Stretch built for taller users.",
      items: [
        item("rialtoTower", {
          badge: "Best Reformer + Tower",
          pros: ["Reformer, tower and mat on one footprint", "29 spring-attachment points on the tower", "Sitting Box Lite included"],
          cons: ["74.6\" tall with the tower: check ceiling clearance", "Made to order"],
        }),
        item("allegroStretch", {
          badge: "Best for Tall Users",
          pros: ["Wider, longer carriage and an 18\"-longer frame than the standard Allegro", "Anodized aluminium frame with transport wheels", "36\" footbar with 4 positions"],
          cons: ["111\" long: needs a long room", "Tower version is $5,275, just over budget"],
        }),
        item("rialtoBox", {
          badge: "Best Maple for Less",
          pros: ["Solid maple frame on aluminium legs", "Sitting Box Lite included", "Can add the tower later with the retrofit kit"],
          cons: ["Made to order", "Jumpboard sold separately"],
        }),
      ],
    },
    {
      kind: "products",
      id: "merrithew-align",
      eyebrow: "Merrithew and Align",
      heading: "The complete-package and value picks",
      items: [
        item("spxHome", {
          badge: "Best Complete Home Package",
          pros: ["Box, roll-up pole, platform extender and straps included", "Sold and shipped by Amazon.com, in stock", "Aluminium rails; STOTT PILATES springs (4 × 100%, 1 × 50%)"],
          cons: ["Lower to the floor than studio machines", "Vertical-stand version is $3,549"],
        }),
        item("alignC8Pro", {
          badge: "Best Value",
          pros: ["Professional Align springs for $2,750", "Stackable; optional legs raise it to 44 cm", "In stock"],
          cons: ["No box or jumpboard included", "Max user height 193 cm"],
        }),
      ],
    },
    {
      kind: "products",
      id: "upgrades",
      eyebrow: "Upgrades",
      heading: "Add-ons worth budgeting for",
      intro: "If your reformer costs less than $5,000, these are the upgrades that use the rest of the budget best.",
      items: [
        item("rialtoRetrofit", { badge: "Tower Upgrade for Rialto" }),
        item("spxJumpboard", { badge: "Jumpboard for SPX" }),
        item("bbJumpboard", { badge: "Jumpboard for Rialto" }),
      ],
    },
    {
      kind: "table",
      eyebrow: "Compare",
      heading: "Reformers under $5,000 compared",
      intro: "Specifications as published on each listing.",
      columns: ["Reformer", "Price", "Frame", "Springs", "Included", "Length"],
      rows: [
        ["BB Studio Reformer (Revo)", "$4,700", "Strata Rock Maple", "5 Signature, 46 settings", "Reformer only", "92.6\""],
        ["BB Studio Reformer (XSR)", "$4,850", "Strata Rock Maple", "5 Signature, 46 settings", "Sitting box, strap", "Not stated"],
        ["BB Rialto + Tower & Mat", "$4,230", "Maple + aluminium legs", "5 Signature + 8 tower", "Tower, mat, box lite", "96\""],
        ["BB Allegro Stretch", "$3,710", "Anodized aluminium", "5 Signature", "Reformer only", "111\""],
        ["BB Rialto + Sitting Box Lite", "$3,495", "Maple + aluminium legs", "5 Signature", "Box lite, strap", "96\""],
        ["Merrithew At Home SPX", "$3,349", "Aluminium rails", "4 × 100%, 1 × 50%", "Box, pole, extender, straps", "96.5\""],
        ["Align-Pilates C8-PRO", "$2,750", "Not stated", "Align professional", "Reformer only", "239.5 cm"],
      ],
    },
    {
      kind: "cards",
      eyebrow: "How to choose",
      heading: "Five decisions that matter more than the brand",
      cards: [
        { h: "Maple or aluminium", b: "Maple (Studio, Rialto) is heavier and permanent with a warm, solid feel. Aluminium (Allegro, SPX) is lighter and easier to move. Our wood vs aluminium guide covers the trade-offs." },
        { h: "Tower now or later", b: "If you want roll-downs and push-through work, a tower bundle costs less than buying one later. The Rialto can be upgraded with a $1,275 retrofit kit." },
        { h: "Ceiling and floor", b: "Tower machines stand about 75 to 78 inches tall. Reformers run 92 to 111 inches long. Measure the room and the route in." },
        { h: "Lead times", b: "Most Balanced Body machines are made to order. The Merrithew At Home SPX and Align C8-PRO were in stock when we checked." },
        { h: "Resale", b: "Studio-brand reformers are widely recognised second-hand, which supports resale value if your plans change." },
        { h: "Accessories", b: "Jumpboards are model-specific: Merrithew's 22-inch board fits SPX carriages, the 24-inch fits V2 Max carriages. Check before ordering." },
      ],
    },
  ],
  faqs: [
    { q: "What is the best Pilates reformer under $5,000?", a: "The Balanced Body Studio Reformer ($4,700 on Amazon, made to order). It has a solid Strata Rock Maple frame and five Signature Springs offering up to 46 resistance settings, and it is the machine many studios and certification centres use." },
    { q: "Can I get a reformer with a tower for under $5,000?", a: "Yes. The Balanced Body Rialto Reformer with Tower & Mat is $4,230 and includes the tower, an over-molded mat and a Sitting Box Lite. The Allegro Stretch with Tower & Mat is $5,275, just over budget." },
    { q: "Balanced Body or Merrithew under $5,000?", a: "Balanced Body if you want a maple studio frame or a tower combo; Merrithew if you want a complete package in one box. Merrithew's At Home SPX ($3,349) includes a box, roll-up pole, platform extender and straps and ships from Amazon.com." },
    { q: "Which reformer is best for tall people?", a: "The Balanced Body Allegro Stretch. Its carriage is 2 inches wider and 6 inches longer, and its frame 18 inches longer, than the standard Allegro." },
    { q: "Why are so many of these made to order?", a: "Balanced Body builds many reformers to order. Expect a lead time before shipping; if you need a machine quickly, the Merrithew At Home SPX and Align C8-PRO were in stock when we checked." },
  ],
  related: [
    { title: "Best Pilates Reformer Under $3,000", excerpt: "Align C8-PRO, Metro IQ, PersonalHour and wood reformers with towers.", href: "/blog/best-pilates-reformer-under-3000", imageUrl: "/pictures/stitch-reformer-sunlit-minimal.png", category: "Equipment", readTime: "14 min read" },
    { title: "Merrithew SPX Max vs V2 Max", excerpt: "Carriage width, height, springs and price compared.", href: "/blog/merrithew-spx-max-vs-v2-max", imageUrl: "/pictures/stitch-reformer-spring-detail.png", category: "Comparison", readTime: "11 min read" },
    { title: "Wood vs Aluminium Pilates Reformer", excerpt: "Which frame suits your home and your practice.", href: "/blog/wood-vs-aluminium-pilates-reformer", imageUrl: "/pictures/stitch-white-reformer-plaster.png", category: "Equipment", readTime: "11 min read" },
    { title: "How to Open a Pilates Studio", excerpt: "Equipment, space and budget for your first studio.", href: "/blog/how-to-open-a-pilates-studio", imageUrl: "/pictures/stitch-luxury-studio-wide.png", category: "Business", readTime: "16 min read" },
  ],
};

export default function Page() {
  return <EquipmentGuide {...GUIDE} />;
}
