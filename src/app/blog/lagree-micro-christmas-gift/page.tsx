import type { Metadata } from "next";
import EquipmentGuide, { type EquipmentGuideProps } from "@/components/EquipmentGuide";
import { gift, GIFTS_CHECKED, GIFTS_CHECKED_ISO } from "@/lib/giftCatalog";

const SLUG = "lagree-micro-christmas-gift";
const URL = `https://pilatescollectiveclub.com/blog/${SLUG}`;
const HERO = "/pictures/stitch-reformer-loops-hooks.png";
const TITLE = "The Lagree Micro Christmas Gift Guide (2026): Complete Setup";
const DESCRIPTION = "Give Lagree at home this Christmas: the Lagree Micro, its rear platform, handlebars and cables, plus floor protection, gloves and recovery, with bundle prices.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["lagree micro christmas gift", "lagree micro", "lagree micro accessories", "lagree at home", "lagree gifts", "megaformer at home gift", "lagree micro bundle", "lagree micro price"],
  openGraph: { title: TITLE, description: DESCRIPTION, type: "article", url: URL, images: [{ url: `https://pilatescollectiveclub.com${HERO}`, width: 1200, height: 630, alt: "Close-up of loops and hooks on a machine" }] },
  twitter: { card: "summary_large_image", title: "The Lagree Micro Christmas Gift Guide (2026)", description: DESCRIPTION, images: [`https://pilatescollectiveclub.com${HERO}`] },
  alternates: { canonical: URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const GUIDE: EquipmentGuideProps = {
  slug: SLUG,
  title: TITLE,
  description: DESCRIPTION,
  breadcrumb: "Lagree Micro Christmas Gift",
  eyebrow: "Christmas 2026",
  eyebrowAccent: "Lagree",
  h1: "The Lagree Micro Christmas Gift Guide",
  h1Accent: "(2026): The Complete Home Setup",
  readTime: "10 min read",
  updatedLabel: `Prices checked ${GIFTS_CHECKED}`,
  datePublished: GIFTS_CHECKED_ISO,
  dateModified: GIFTS_CHECKED_ISO,
  heroImage: HERO,
  heroAlt: "Close-up of loops and hooks on a training machine",
  heroCaption: "Micro · Rear platform · Handlebars · Cables",
  intro: [
    "Lagree's slow, burning, high-intensity workouts have built a devoted following, and its fans often train several times a week. For a Lagree regular, the best gift you can give is the workout at home.",
    "The Micro is Lagree Fitness' own compact machine. It works on its own, and a set of add-ons unlocks more of the method. Below is everything you need to build the perfect gift at four budgets, with the Amazon price we checked today.",
  ],
  quickPicks: [
    { label: "The machine", itemId: "lagree-micro" },
    { label: "Best first add-on", itemId: "lagree-micro-rear-platform" },
    { label: "Add stability", itemId: "lagree-micro-handlebars" },
    { label: "Add upper-body work", itemId: "lagree-micro-pulley-cables" },
    { label: "Protect the floor", itemId: "marcy-equipment-floor-mat" },
  ],
  blocks: [
    {
      kind: "table",
      eyebrow: "Build the gift",
      heading: "Four Lagree Micro bundles",
      columns: ["Bundle", "What's in it", "Total"],
      rows: [
        ["The Micro", "The Micro by Lagree Fitness", "$990.00"],
        ["The Studio Setup", "Micro $990 + rear platform $290 + handlebars $190", "$1,470.00"],
        ["The Complete Setup", "Micro $990 + rear platform $290 + handlebars $190 + pulley cables $230", "$1,700.00"],
        ["Complete + Front and Back Handles", "The Complete Setup + a second pair of handlebars $190", "$1,890.00"],
      ],
      note: `Amazon prices checked on ${GIFTS_CHECKED}. Handlebars are sold as a pair; using them at both ends needs two pairs and the rear platform, per Lagree Fitness.`,
    },
    {
      kind: "products",
      id: "micro",
      eyebrow: "The machine",
      heading: "The Micro and its add-ons",
      items: [
        gift("lagreeMicro", { badge: "The Gift", pros: ["Megaformer-style workout at home", "Fits users up to 6'8\"", "Stores under a bed or against a wall"], cons: ["Add-ons sold separately"] }),
        gift("microPlatform", { badge: "Best First Add-On", pros: ["Unlocks lunges and more", "Needed for rear handlebars"], cons: ["Adds length: 81.5\" total"] }),
        gift("microHandles", { badge: "Add Stability", pros: ["Front or back", "Sold as a pair"], cons: ["Rear use needs the platform"] }),
        gift("microCables", { badge: "Add Upper-Body Work", pros: ["Adds pulling exercises"], cons: ["Low stock"] }),
      ],
    },
    {
      kind: "products",
      id: "setup",
      eyebrow: "Finish the setup",
      heading: "Floor, grip and kit",
      items: [
        gift("marcyMat", { badge: "Protect the Floor", pros: ["Absorbs impact", "Non-slip"], cons: ["78\" long: shorter than the Micro with platform"] }),
        gift("taviGloves", { badge: "Best Grip Gloves", pros: ["Full palm coverage", "Blister protection"], cons: ["Choose a size"] }),
        gift("taviSocks", { badge: "Best Grip Socks", pros: ["Triangle grip pattern", "Organic cotton"], cons: ["Choose a size"] }),
        gift("lagreeHoodie", { badge: "For the Fan", pros: ["Fun to wrap with the machine"], cons: ["Fan merch, not official Lagree Fitness"] }),
      ],
    },
    {
      kind: "products",
      id: "recovery",
      eyebrow: "After the shakes",
      heading: "Recovery for Lagree regulars",
      items: [
        gift("hypervolt3Pro", { badge: "Best Massage Gun", pros: ["Heated head", "4-hour battery"], cons: ["2.5 lb"] }),
        gift("normatecHips", { badge: "Best for Hips & Glutes", pros: ["Cordless", "Targets glutes, hips and lower back"], cons: ["$599"] }),
      ],
    },
    {
      kind: "cards",
      eyebrow: "Good to know",
      heading: "Before you buy a Lagree Micro",
      cards: [
        { h: "It is Lagree, not Pilates", b: "Lagree Fitness describes the Micro as a Lagree machine: slow, high-intensity, low-impact strength and cardio. It is the right gift for a Lagree fan; a reformer suits a Pilates regular better." },
        { h: "Space", b: "With the rear platform the Micro is 81.5\" long, 20\" wide and 6\" high, per Lagree Fitness. It stores under a bed, against a wall or on a bike rack." },
        { h: "Height", b: "Lagree Fitness says the Micro accommodates users as tall as 6'8\"." },
        { h: "Where to buy", b: "The Micro and its add-ons are sold by Lagree Fitness on Amazon. Check stock on the cables, which were low when we checked." },
      ],
    },
  ],
  faqs: [
    { q: "How much is the Lagree Micro?", a: `The Micro was $990 on Amazon on ${GIFTS_CHECKED}. With the rear platform ($290), handlebars ($190) and pulley cables ($230), the complete setup is $1,700.` },
    { q: "Is the Lagree Micro the same as a Megaformer?", a: "No. The Megaformer is Lagree Fitness' studio machine. The Micro is its compact home machine, designed to deliver the same style of workout in a smaller, lighter, storable format." },
    { q: "What accessories does the Lagree Micro need?", a: "None to start. The rear platform is the most useful first add-on; handlebars add stability (rear use needs the platform), and the pulley cables add upper-body pulling work." },
    { q: "How tall can you be to use the Lagree Micro?", a: "Lagree Fitness says the Micro accommodates users as tall as 6'8\"." },
    { q: "Will the Lagree Micro arrive before Christmas?", a: "The Micro was in stock when we checked. Check the delivery estimate on the listing, and note the pulley cables were low in stock." },
  ],
  related: [
    { title: "Best Megaformer Machine", excerpt: "Megaformers and Lagree-style machines compared.", href: "/blog/best-megaformer-machine", imageUrl: "/pictures/stitch-reformer-spring-detail.png", category: "Equipment", readTime: "12 min read" },
    { title: "Lagree Black Friday Deals", excerpt: "The Micro and add-ons: prices to beat.", href: "/blog/black-friday-lagree-deals", imageUrl: "/pictures/stitch-reformer-spring-detail.png", category: "Deals", readTime: "Deals" },
    { title: "Best Lagree Gifts", excerpt: "Gifts for Lagree lovers at every budget.", href: "/blog/best-lagree-gifts", imageUrl: "/pictures/stitch-grip-socks-footbar.png", category: "Gifts", readTime: "9 min read" },
    { title: "Reformer, Lagree Micro or Bike?", excerpt: "The best home machine gifts compared.", href: "/blog/best-home-workout-machine-christmas-gift", imageUrl: "/pictures/stitch-reformer-spring-detail.png", category: "Gifts", readTime: "11 min read" },
  ],
  ctaTitle: "Find a Lagree studio near you",
  ctaSubtitle: "Use our city guides to find Lagree and boutique Pilates studios worldwide.",
};

export default function Page() {
  return <EquipmentGuide {...GUIDE} />;
}
