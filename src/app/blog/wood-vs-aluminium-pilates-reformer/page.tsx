import type { Metadata } from "next";
import EquipmentGuide, { type EquipmentGuideProps } from "@/components/EquipmentGuide";
import { item, PRICES_CHECKED, PRICES_CHECKED_ISO } from "@/lib/reformerCatalog";

const SLUG = "wood-vs-aluminium-pilates-reformer";
const URL = `https://pilatescollectiveclub.com/blog/${SLUG}`;
const HERO = "/pictures/stitch-white-reformer-plaster.png";
const TITLE = "Wood vs Aluminium Pilates Reformer (2026): Which Frame Is Better?";
const DESCRIPTION = "Wood vs aluminium Pilates reformers compared on weight, feel, storage, care and price, with the best maple, walnut and aluminium reformers to buy now.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["wood vs aluminium pilates reformer", "wood vs aluminum reformer", "maple pilates reformer", "aluminium pilates reformer", "wooden reformer vs metal", "best wood pilates reformer", "best aluminum pilates reformer", "balanced body studio reformer maple", "allegro aluminum reformer"],
  openGraph: { title: TITLE, description: DESCRIPTION, type: "article", url: URL, images: [{ url: `https://pilatescollectiveclub.com${HERO}`, width: 1200, height: 630, alt: "A Pilates reformer in a bright room" }] },
  twitter: { card: "summary_large_image", title: "Wood vs Aluminium Pilates Reformer (2026)", description: DESCRIPTION, images: [`https://pilatescollectiveclub.com${HERO}`] },
  alternates: { canonical: URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const GUIDE: EquipmentGuideProps = {
  slug: SLUG,
  title: TITLE,
  description: DESCRIPTION,
  breadcrumb: "Wood vs Aluminium Reformer",
  eyebrow: "Buying Guide",
  eyebrowAccent: "Frame Materials",
  h1: "Wood vs Aluminium Pilates Reformer",
  h1Accent: "(2026): Which Frame Is Better?",
  readTime: "11 min read",
  updatedLabel: `Prices checked ${PRICES_CHECKED}`,
  datePublished: "2026-10-12",
  dateModified: PRICES_CHECKED_ISO,
  heroImage: HERO,
  heroAlt: "A Pilates reformer in a bright, minimal room",
  heroCaption: "Maple · Walnut · Oak · Aluminium",
  intro: [
    "The frame is the first choice most reformer buyers make, often without realising it. Balanced Body's Studio Reformer is solid Strata Rock Maple; its Allegro is anodized aluminium. Merrithew's SPX runs on aluminium rails; PersonalHour builds in maple and walnut. Both materials are used on serious studio machines, so this is not a quality question. It is about weight, storage, looks, care and budget.",
    "Below we compare the two materials on what actually changes your experience, using the weights and specifications published on each listing, then pick the best wood and aluminium reformers you can buy now.",
  ],
  quickPicks: [
    { label: "Best wood reformer", itemId: "balanced-body-studio-reformer" },
    { label: "Best maple + aluminium hybrid", itemId: "balanced-body-rialto" },
    { label: "Best folding wood reformer", itemId: "personalhour-janet-la-force-plus" },
    { label: "Best value wood reformer", itemId: "vevor-maple-reformer" },
    { label: "Best aluminium reformer", itemId: "balanced-body-allegro-stretch" },
    { label: "Best aluminium home package", itemId: "merrithew-at-home-spx" },
  ],
  blocks: [
    {
      kind: "callout",
      eyebrow: "The short answer",
      heading: "Wood or aluminium?",
      body: [
        "Choose wood if the reformer will live in one place, you want it to look like furniture, and you like a heavy, planted machine. Maple is the traditional studio frame.",
        "Choose aluminium if you will move or store the reformer, live on an upper floor, or want lower weight and simpler care. Aluminium frames are standard on many studio machines too.",
        "Can't decide? Balanced Body's Rialto uses a solid maple frame on aluminium legs.",
      ],
    },
    {
      kind: "table",
      eyebrow: "Head to head",
      heading: "Wood vs aluminium reformer: the comparison",
      columns: ["Factor", "Wood (maple, walnut, oak)", "Aluminium"],
      rows: [
        ["Weight", "Heavier. Listed weights: Nano Elite Plus 290 lb, Studio Reformer XSR 212 lb, Rialto 140 lb", "Lighter. Listed weights: At Home SPX 115 lb, Metro IQ 85 lb"],
        ["Moving and storage", "Usually stays put; some fold (Janet La Force Plus)", "Easier to roll, stand up or stack"],
        ["Look", "Warm, furniture-like", "Clean, technical, studio-modern"],
        ["Feel", "Planted and solid underfoot", "Rigid and precise; lighter frames can feel less planted"],
        ["Care", "Follow the maker's care guidance; avoid big humidity swings and direct sun", "Low maintenance; wipe clean"],
        ["Price", "Wide range: from $1,309.90 (VEVOR) to $4,850 (Studio XSR)", "Wide range: from $3,349 (At Home SPX) to $3,710 (Allegro Stretch) here"],
      ],
      note: "Weights and materials as published on each Amazon listing. Not every listing states its weight.",
    },
    {
      kind: "cards",
      eyebrow: "What really changes",
      heading: "Five things the frame material affects",
      cards: [
        { h: "Where you can put it", b: "A 200 to 300 lb wood machine is a fixture. If you share the room, rent, or plan to move it, aluminium is easier. Check your floor if a heavy machine is going upstairs." },
        { h: "How it looks in your home", b: "This matters more than people admit. A maple or walnut reformer reads as furniture in a living space; aluminium reads as equipment." },
        { h: "How it feels to train on", b: "Spring quality and the carriage matter more to feel than the frame. A heavy wood frame does feel very planted, which many people like." },
        { h: "Care and climate", b: "Wood is a natural material. Keep it out of direct sun and away from big humidity swings, and follow the maker's instructions. Aluminium is largely wipe-and-go." },
        { h: "Value over time", b: "Well-known studio brands in either material are recognised second-hand. Brand reputation affects resale more than material does." },
        { h: "Mixed designs", b: "Some machines combine both: Balanced Body's Rialto pairs a solid maple frame with extruded aluminium legs; Merrithew's SPX uses aluminium rails." },
      ],
    },
    {
      kind: "products",
      id: "wood",
      eyebrow: "Best wood reformers",
      heading: "The best wood Pilates reformers",
      items: [
        item("studioRevo", {
          badge: "Best Wood Reformer",
          pros: ["Solid Strata Rock Maple, the classic studio frame", "Up to 46 resistance settings", "Recognised second-hand"],
          cons: ["Does not fold", "Made to order"],
        }),
        item("rialtoBox", {
          badge: "Best Maple + Aluminium Hybrid",
          pros: ["Maple frame, aluminium legs: a lighter wood machine at 140 lb", "Sitting Box Lite included", "Tower upgrade available"],
          cons: ["Made to order"],
        }),
        item("janetLaForce", {
          badge: "Best Folding Wood Reformer",
          pros: ["Solid walnut that folds upright on wheels", "Jumpboard and box included"],
          cons: ["Low stock"],
        }),
        item("nanoElitePlus", {
          badge: "Heaviest, Most Planted Frame",
          pros: ["2\" layered maple frame", "Box and jumpboard included"],
          cons: ["290 lb", "Made to order"],
        }),
        item("vevorMaple", {
          badge: "Best Value Wood Reformer",
          pros: ["Solid maple for $1,309.90", "Sold and shipped by Amazon.com", "6 springs, box and jumpboard"],
          cons: ["Newer brand than the studio names", "Cord-and-spring set-up details vary: read the listing"],
        }),
        item("paetaTower", {
          badge: "Best Wood Reformer with Tower",
          pros: ["Oak frame with tower and converter mat", "Box and jumpboard included"],
          cons: ["Newer brand", "Three-box assembly"],
        }),
      ],
    },
    {
      kind: "products",
      id: "aluminium",
      eyebrow: "Best aluminium reformers",
      heading: "The best aluminium Pilates reformers",
      items: [
        item("allegroStretch", {
          badge: "Best Aluminium Reformer",
          pros: ["Anodized aluminium frame with transport wheels", "Longer, wider carriage for tall users", "5 Signature Springs"],
          cons: ["111\" long", "Made to order"],
        }),
        item("spxHome", {
          badge: "Best Aluminium Home Package",
          pros: ["Aluminium rails, 115 lb", "Box, pole, extender and straps included", "Sold by Amazon.com"],
          cons: ["Low frame height"],
        }),
      ],
    },
  ],
  faqs: [
    { q: "Is a wood or aluminium Pilates reformer better?", a: "Neither is better overall. Wood (usually maple) is heavier, more furniture-like and very planted; aluminium is lighter and easier to move or store. Both are used on professional studio machines, so choose on space, weight and looks." },
    { q: "Are wood reformers heavier?", a: "Generally, yes. On their Amazon listings, the PersonalHour Nano Elite Plus weighs 290 lb and the Balanced Body Studio Reformer (XSR) 212 lb, while Merrithew's aluminium-rail At Home SPX weighs 115 lb." },
    { q: "Do wood reformers need special care?", a: "Wood is a natural material, so keep it out of direct sunlight and away from large humidity swings, and follow the manufacturer's care instructions. Aluminium frames mostly need wiping down." },
    { q: "What is the best wood Pilates reformer?", a: "The Balanced Body Studio Reformer, with a solid Strata Rock Maple frame ($4,700 on Amazon). For less, the Rialto ($3,495) combines a maple frame with aluminium legs, and the VEVOR maple reformer is $1,309.90." },
    { q: "What is the best aluminium Pilates reformer?", a: "The Balanced Body Allegro Stretch ($3,710), with an anodized aluminium frame and a longer, wider carriage. Merrithew's At Home SPX package ($3,349) is the best aluminium-rail option with accessories included." },
  ],
  related: [
    { title: "Best Pilates Reformer Under $3,000", excerpt: "Seven studio-grade picks including wood reformers with towers.", href: "/blog/best-pilates-reformer-under-3000", imageUrl: "/pictures/stitch-reformer-sunlit-minimal.png", category: "Equipment", readTime: "14 min read" },
    { title: "Best Pilates Reformer Under $5,000", excerpt: "Studio Reformer, Rialto, Allegro Stretch and SPX compared.", href: "/blog/best-pilates-reformer-under-5000", imageUrl: "/pictures/stitch-reformer-row-studio.png", category: "Equipment", readTime: "15 min read" },
    { title: "Align Pilates vs Balanced Body", excerpt: "Two studio brands, side by side.", href: "/blog/align-pilates-vs-balanced-body", imageUrl: "/pictures/stitch-reformers-aerial-row.png", category: "Comparison", readTime: "12 min read" },
    { title: "Best Foldable Pilates Reformer", excerpt: "Reformers that fold away for small homes.", href: "/blog/best-foldable-pilates-reformer", imageUrl: "/pictures/stitch-reformer-morning-light.png", category: "Equipment", readTime: "10 min read" },
  ],
};

export default function Page() {
  return <EquipmentGuide {...GUIDE} />;
}
