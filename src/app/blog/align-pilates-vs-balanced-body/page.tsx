import type { Metadata } from "next";
import EquipmentGuide, { type EquipmentGuideProps } from "@/components/EquipmentGuide";
import { item, PRICES_CHECKED, PRICES_CHECKED_ISO } from "@/lib/reformerCatalog";

const SLUG = "align-pilates-vs-balanced-body";
const URL = `https://pilatescollectiveclub.com/blog/${SLUG}`;
const HERO = "/pictures/stitch-reformer-row-studio.png";
const TITLE = "Align Pilates vs Balanced Body (2026): Price, Build, Verdict";
const DESCRIPTION = "Align-Pilates C8-PRO vs Balanced Body Metro IQ, Allegro Stretch, Rialto and Studio Reformer: specs, storage, accessories and live prices, with a clear verdict.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["align pilates vs balanced body", "align pilates reformer review", "align c8 pro review", "align c8 pro vs balanced body", "align c8 pro vs allegro stretch", "balanced body metro iq vs align c8 pro", "balanced body reformer comparison", "best pilates reformer brand", "balanced body studio reformer"],
  openGraph: { title: TITLE, description: DESCRIPTION, type: "article", url: URL, images: [{ url: `https://pilatescollectiveclub.com${HERO}`, width: 1200, height: 630, alt: "A row of Pilates reformers in a studio" }] },
  twitter: { card: "summary_large_image", title: "Align Pilates vs Balanced Body (2026)", description: DESCRIPTION, images: [`https://pilatescollectiveclub.com${HERO}`] },
  alternates: { canonical: URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const GUIDE: EquipmentGuideProps = {
  slug: SLUG,
  title: TITLE,
  description: DESCRIPTION,
  breadcrumb: "Align Pilates vs Balanced Body",
  eyebrow: "Comparison",
  eyebrowAccent: "Brands",
  h1: "Align Pilates vs Balanced Body",
  h1Accent: "(2026): Price, Build, Verdict",
  readTime: "13 min read",
  updatedLabel: `Prices checked ${PRICES_CHECKED}`,
  datePublished: "2026-09-16",
  dateModified: PRICES_CHECKED_ISO,
  heroImage: HERO,
  heroAlt: "A row of Pilates reformers installed side by side in a studio",
  heroCaption: "C8-PRO · Metro IQ · Allegro Stretch · Rialto · Studio Reformer",
  intro: [
    "Align-Pilates and Balanced Body are cross-shopped constantly, and usually compared badly, with machines you cannot actually buy the way the article suggests. We rechecked every listing on Amazon on " + PRICES_CHECKED + ": one Align reformer is sold there, the C8-PRO, against five Balanced Body machines from $2,330 to $4,850.",
    "The real decision is rarely which frame is better. It is whether you want one great-value machine to keep, or a platform you will build on with towers, boxes and jumpboards for years. Below: the specs side by side, what each difference means in practice, and a verdict for each kind of buyer.",
  ],
  quickPicks: [
    { label: "Best value overall", itemId: "align-c8-pro" },
    { label: "Best for small spaces", itemId: "balanced-body-metro-iq" },
    { label: "Best for tall users", itemId: "balanced-body-allegro-stretch" },
    { label: "Best wood-frame value", itemId: "balanced-body-rialto" },
    { label: "Best studio-grade machine", itemId: "balanced-body-studio-reformer" },
  ],
  blocks: [
    {
      kind: "callout",
      eyebrow: "The short answer",
      heading: "Which brand should you buy?",
      body: [
        "Buying one reformer to keep at home: the Align C8-PRO ($2,750) is the value choice. It uses the same springs as Align's professional machines, stacks for storage and is in stock on Amazon.",
        "Short on space: Balanced Body's Metro IQ ($2,330) telescopes from 98\" to 62\" for storage and weighs 85 lb.",
        "Tall, or building a studio you will grow: Balanced Body. The Allegro Stretch has a longer, wider carriage, and the Rialto and Studio Reformer have the deepest accessory range of either brand.",
      ],
    },
    {
      kind: "table",
      eyebrow: "Head to head",
      heading: "Align C8-PRO vs Balanced Body: the specs",
      intro: "All figures are from each machine's Amazon listing. Prices were checked on " + PRICES_CHECKED + " and can change.",
      columns: ["Machine", "Frame", "Springs", "Size (L × W × H)", "Storage", "Price"],
      rows: [
        ["Align C8-PRO", "Not stated on listing", "Same springs as Align pro machines; Rapid Change Spring Bar", "239.5 × 66 × 26 cm (about 94\" × 26\" × 10\")", "Stackable", "$2,750"],
        ["BB Metro IQ", "Telescoping frame", "5 Signature Springs", "98\" in use, 62\" stored; 85 lb", "Telescopes", "$2,330"],
        ["BB Rialto (with box)", "Solid maple on aluminium legs", "5 Signature Springs", "96\" × 26.5\" × 14\"; 140 lb", "Stays put", "$3,495"],
        ["BB Allegro Stretch", "Anodized aluminium", "5 Signature Springs", "111\" × 24.5\" × 14\"", "Transport wheels", "$3,710"],
        ["BB Studio Reformer (Revo)", "Strata Rock Maple", "5 Signature Springs, up to 46 settings", "92.6\" × 26.5\" × 15\"", "Stays put", "$4,700"],
      ],
      note: "The C8-PRO's optional leg extensions raise the bed from 26 cm to 44 cm (about 10\" to 17\"), per the listing.",
    },
    {
      kind: "cards",
      eyebrow: "What the differences mean",
      heading: "Six things that should decide it",
      cards: [
        { h: "Price", b: "The C8-PRO costs $2,750. The closest Balanced Body machines are the Metro IQ ($2,330, a smaller-footprint design) and the Rialto ($3,495). The Studio Reformer, Balanced Body's flagship, is $4,700." },
        { h: "Storage", b: "The C8-PRO stacks. The Metro IQ telescopes to 62 inches. The Allegro Stretch rolls on transport wheels. The Rialto and Studio Reformer are built to stay where you put them." },
        { h: "Bed height", b: "The C8-PRO sits about 10 inches high, with optional legs that lift it to about 17. The Allegro Stretch stands on 14-inch legs and the Studio Reformer at 15 inches. Higher beds are easier to get on and off." },
        { h: "Tall users", b: "Align lists the C8-PRO for users 145 to 193 cm (about 4'9\" to 6'4\") and up to 150 kg. If you are near the top of that range, the Allegro Stretch's carriage is 2 inches wider and 6 inches longer than the standard Allegro." },
        { h: "Accessories", b: "Balanced Body sells its sitting box, jumpboards, platform extenders, replacement ropes and tower kits on Amazon. If you plan to add a tower or jumpboard later, that range is a real advantage." },
        { h: "Who sells it", b: "On Amazon, the C8-PRO is sold through Merrithew's storefront; Balanced Body sells its own machines directly. Many Balanced Body machines are made to order, so check the delivery estimate before you buy." },
      ],
    },
    {
      kind: "products",
      id: "align",
      eyebrow: "Align-Pilates",
      heading: "The Align reformer you can buy on Amazon",
      intro: "Align's studio machines, such as the A8-Pro, are sold through dealers rather than on Amazon. The C8-PRO is the one to compare here.",
      items: [
        item("alignC8Pro", {
          badge: "Best Value Overall",
          pros: ["Same springs as Align's professional reformers", "Stackable, with optional leg extensions for studio height", "In stock on Amazon"],
          cons: ["Smaller accessory range than Balanced Body on Amazon", "Low bed height without the leg extensions"],
        }),
      ],
    },
    {
      kind: "products",
      id: "balanced-body",
      eyebrow: "Balanced Body",
      heading: "The Balanced Body reformers to compare it with",
      items: [
        item("metroIQ", {
          badge: "Best for Small Spaces",
          pros: ["Telescopes from 98\" to 62\" for storage", "Only 85 lb", "5 Signature Springs, like the studio machines"],
          cons: ["Low stock", "A home machine rather than a studio workhorse"],
        }),
        item("allegroStretch", {
          badge: "Best for Tall Users",
          pros: ["Longer, wider carriage than the standard Allegro", "36\" footbar with 4 locking positions", "Transport wheels"],
          cons: ["111\" long: measure your room", "Made to order"],
        }),
        item("rialtoBox", {
          badge: "Best Wood-Frame Value",
          pros: ["Solid maple frame on aluminium legs", "Sitting Box Lite included", "Can take a tower later with the retrofit kit"],
          cons: ["Made to order", "Does not fold or stack"],
        }),
        item("studioRevo", {
          badge: "Best Studio-Grade Machine",
          pros: ["Strata Rock Maple, the classic studio frame", "Up to 46 resistance settings", "Deep range of add-ons"],
          cons: ["$4,700", "Made to order"],
        }),
        item("studioXsr", {
          badge: "Studio Reformer with Sitting Box",
          pros: ["XSR footbar", "Sitting box and foot strap included"],
          cons: ["212 lb", "Made to order"],
        }),
      ],
    },
    {
      kind: "products",
      id: "accessories",
      eyebrow: "Build the system",
      heading: "Balanced Body accessories sold on Amazon",
      intro: "These are part of why Balanced Body appeals to buyers who plan to expand. Check each listing's compatibility notes against your machine.",
      items: [
        item("sittingBoxLite", { badge: "Fits All BB Reformers" }),
        item("studioPlatformExtender", { badge: "For the Studio Reformer" }),
        item("bbJumpboard", { badge: "For the Rialto" }),
        item("rialtoRetrofit", { badge: "Add a Tower to a Rialto" }),
      ],
    },
    {
      kind: "prose",
      eyebrow: "Our verdict",
      heading: "Align or Balanced Body?",
      paragraphs: [
        "If you want one excellent reformer for your home and do not plan to build on it, buy the Align C8-PRO. At $2,750 it is the best value of the machines here, it is in stock, and it stacks away.",
        "If space is the problem, the Balanced Body Metro IQ is cheaper still and stores at 62 inches. If you are tall, the Allegro Stretch was built for you.",
        "If you are building a studio, or a home setup you expect to grow with a tower, box and jumpboard, choose Balanced Body. The Rialto is the value route into that system; the Studio Reformer is the machine many studios standardise on.",
      ],
    },
  ],
  faqs: [
    { q: "Is Align Pilates as good as Balanced Body?", a: "For a single home machine, the Align C8-PRO competes well: it uses the same springs as Align's professional reformers, has an 8-wheel PU carriage and stacks for storage. Balanced Body's advantage is range: more machines, more accessories sold on Amazon, and machines like the Studio Reformer that many studios standardise on." },
    { q: "How much cheaper is Align Pilates than Balanced Body?", a: "On Amazon on " + PRICES_CHECKED + ", the Align C8-PRO was $2,750. Balanced Body's Metro IQ was $2,330, the Rialto $3,495, the Allegro Stretch $3,710 and the Studio Reformer $4,700. So Align undercuts Balanced Body's full-size machines, but the compact Metro IQ is cheaper." },
    { q: "Which is better for a home studio?", a: "For one machine you will keep, the Align C8-PRO is the better value. For a home studio you plan to expand with a tower, box and jumpboard, Balanced Body is the safer choice because its accessories are easier to buy." },
    { q: "Is the Align C8-PRO good for tall people?", a: "Align lists the C8-PRO for users from 145 to 193 cm (about 4'9\" to 6'4\") and up to 150 kg. If you are near or above that height, look at the Balanced Body Allegro Stretch, whose carriage is 2 inches wider and 6 inches longer than the standard Allegro." },
    { q: "Can I buy Align Pilates reformers on Amazon?", a: "In the US, the C8-PRO is sold on Amazon through Merrithew's storefront. Align's studio models, such as the A8-Pro, are sold through dealers." },
    { q: "Are Balanced Body reformers in stock?", a: "Many are made to order. On " + PRICES_CHECKED + ", the Allegro Stretch, Rialto and Studio Reformer showed made-to-order lead times on Amazon, and the Metro IQ showed low stock. The Align C8-PRO was in stock." },
  ],
  related: [
    { title: "Best Pilates Reformer Under $3,000", excerpt: "Seven studio-grade picks, including the C8-PRO and Metro IQ.", href: "/blog/best-pilates-reformer-under-3000", imageUrl: "/pictures/stitch-reformer-sunlit-minimal.png", category: "Equipment", readTime: "14 min read" },
    { title: "Best Pilates Reformer Under $5,000", excerpt: "Studio Reformer, Rialto, Allegro Stretch and SPX compared.", href: "/blog/best-pilates-reformer-under-5000", imageUrl: "/pictures/stitch-reformer-row-studio.png", category: "Equipment", readTime: "15 min read" },
    { title: "Wood vs Aluminium Pilates Reformer", excerpt: "Which frame material suits your space.", href: "/blog/wood-vs-aluminium-pilates-reformer", imageUrl: "/pictures/stitch-white-reformer-plaster.png", category: "Equipment", readTime: "11 min read" },
    { title: "Balanced Body vs Merrithew", excerpt: "The two biggest reformer brands compared.", href: "/blog/balanced-body-vs-merrithew", imageUrl: "/pictures/stitch-reformers-aerial-row.png", category: "Comparison", readTime: "12 min read" },
  ],
};

export default function Page() {
  return <EquipmentGuide {...GUIDE} />;
}
