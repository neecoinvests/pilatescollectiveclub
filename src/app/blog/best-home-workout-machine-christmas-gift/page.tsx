import type { Metadata } from "next";
import EquipmentGuide, { type EquipmentGuideProps } from "@/components/EquipmentGuide";
import { item } from "@/lib/reformerCatalog";
import { gift, GIFTS_CHECKED, GIFTS_CHECKED_ISO } from "@/lib/giftCatalog";

const SLUG = "best-home-workout-machine-christmas-gift";
const URL = `https://pilatescollectiveclub.com/blog/${SLUG}`;
const HERO = "/pictures/stitch-reformer-spring-detail.png";
const TITLE = "Reformer, Lagree Micro or Bike? Best Home Machine Gifts (2026)";
const DESCRIPTION = "The best home workout machine to give for Christmas 2026: Pilates reformers, the Lagree Micro and its add-ons, and indoor bikes, compared on space, workout and price.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["home workout machine gift", "best home gym christmas gift", "pilates reformer vs lagree micro", "lagree micro christmas gift", "reformer or spin bike", "home fitness machine gift for her", "best home exercise machine 2026", "lagree micro accessories"],
  openGraph: { title: TITLE, description: DESCRIPTION, type: "article", url: URL, images: [{ url: `https://pilatescollectiveclub.com${HERO}`, width: 1200, height: 630, alt: "Reformer springs close-up" }] },
  twitter: { card: "summary_large_image", title: "Best Home Workout Machine Gifts (2026)", description: DESCRIPTION, images: [`https://pilatescollectiveclub.com${HERO}`] },
  alternates: { canonical: URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const GUIDE: EquipmentGuideProps = {
  slug: SLUG,
  title: TITLE,
  description: DESCRIPTION,
  breadcrumb: "Home Workout Machine Gifts",
  eyebrow: "Christmas 2026",
  eyebrowAccent: "Home Machines",
  h1: "Reformer, Lagree Micro or Indoor Bike?",
  h1Accent: "The Best Home Machine Gifts (2026)",
  readTime: "11 min read",
  updatedLabel: `Prices checked ${GIFTS_CHECKED}`,
  datePublished: GIFTS_CHECKED_ISO,
  dateModified: GIFTS_CHECKED_ISO,
  heroImage: HERO,
  heroAlt: "Close-up of reformer springs",
  heroCaption: "Reformers · Lagree Micro · Indoor bikes",
  intro: [
    "A home workout machine is a gift that gets used several times a week for years. The question is which one: a Pilates reformer for the controlled, full-body work they love in class, the Lagree Micro for slow, high-intensity Megaformer-style sessions, or an indoor bike for cardio.",
    "This guide compares the three, then picks the best of each on Amazon, with the price and stock we checked today.",
  ],
  quickPicks: [
    { label: "Best reformer under $1,000", itemId: "paeta-wooden-foldable-reformer" },
    { label: "Best studio-grade reformer", itemId: "align-c8-pro" },
    { label: "Best Lagree machine", itemId: "lagree-micro" },
    { label: "Best value indoor bike", itemId: "schwinn-ic4" },
    { label: "Best connected bike", itemId: "echelon-smart-connect" },
  ],
  blocks: [
    {
      kind: "table",
      eyebrow: "Which machine?",
      heading: "Reformer vs Lagree Micro vs indoor bike",
      columns: ["", "Pilates reformer", "Lagree Micro", "Indoor bike"],
      rows: [
        ["Best for", "Reformer Pilates regulars", "Lagree and Megaformer fans", "Spin and cardio lovers"],
        ["Workout", "Controlled, full-body, spring resistance", "Slow, high-intensity, low-impact strength", "Cardio and intervals"],
        ["Storage", "Some fold, telescope or stand upright", "Under a bed, against a wall or on a bike rack", "Fixed footprint"],
        ["Price here", "$699.98 to $3,349", "$990 (complete setup $1,700)", "$795.99 to $1,199.99"],
      ],
      note: "Lagree Micro complete setup = Micro $990 + rear platform $290 + handlebars $190 + pulley cables $230.",
    },
    {
      kind: "products",
      id: "reformers",
      eyebrow: "For Pilates lovers",
      heading: "Home reformers",
      items: [
        gift("paetaWoodFold", { badge: "Best Under $1,000", pros: ["Solid oak", "Folds away", "Sitting box included"], cons: ["Newer brand"] }),
        item("vevorMaple", { badge: "Best Value Maple", pros: ["Solid maple", "Sold by Amazon.com", "Box and jumpboard included"], cons: ["Newer brand than the studio names"] }),
        item("metroIQ", { badge: "Best for Small Spaces", pros: ["Telescopes to 62\" for storage", "85 lb"], cons: ["Low stock"] }),
        item("alignC8Pro", { badge: "Best Studio-Grade Reformer", pros: ["Professional springs", "Stackable"], cons: ["Low bed without leg extensions"] }),
        item("spxHome", { badge: "Best Complete Package", pros: ["Accessories included", "Sold by Amazon.com"], cons: ["Low frame height"] }),
      ],
    },
    {
      kind: "products",
      id: "lagree",
      eyebrow: "For Lagree fans",
      heading: "The Lagree Micro and its add-ons",
      intro: "The Micro works on its own; these add-ons unlock more of the Lagree repertoire and make easy extra gifts.",
      items: [
        gift("lagreeMicro", { badge: "Best Lagree Machine", pros: ["Compact and portable", "Fits users up to 6'8\""], cons: ["Accessories sold separately"] }),
        gift("microPlatform", { badge: "Best First Add-On" }),
        gift("microHandles", { badge: "Add Stability" }),
        gift("microCables", { badge: "Add Upper-Body Work" }),
      ],
    },
    {
      kind: "products",
      id: "bikes",
      eyebrow: "For cardio",
      heading: "Indoor bikes",
      items: [
        gift("schwinnIC4", { badge: "Best Value Bike", pros: ["Works with Peloton and Zwift apps", "Sold by Amazon.com"], cons: ["No built-in screen"] }),
        gift("echelon", { badge: "Best Connected Bike", pros: ["22\" rotating screen", "32 resistance levels"], cons: ["Membership needed after the trial"] }),
      ],
    },
    {
      kind: "products",
      id: "add-on",
      eyebrow: "Under the tree too",
      heading: "A finishing touch",
      items: [
        gift("balaBeam", { badge: "Best Add-On", pros: ["Adds load to mat work", "Looks good left out"], cons: ["One fixed weight"] }),
      ],
    },
  ],
  faqs: [
    { q: "Is a reformer or a Lagree Micro a better gift?", a: "It depends on what they love in class. Reformer Pilates regulars will get the most from a reformer; Lagree and Megaformer fans from the Micro, which is smaller and easier to store." },
    { q: "How much is a complete Lagree Micro setup?", a: `On Amazon on ${GIFTS_CHECKED}: the Micro is $990, the rear platform $290, the handlebars $190 and the pulley cables $230, for $1,700 in total.` },
    { q: "What is the best home reformer under $1,000?", a: "The PAETA wooden foldable reformer with a sitting box is $699.98 on Amazon and has a solid oak frame." },
    { q: "Can I use Peloton classes on the Schwinn IC4?", a: "The listing says it works with popular cycling apps such as Peloton and Zwift, with separate subscriptions." },
    { q: "Are these prices final?", a: `They are the Amazon prices we checked on ${GIFTS_CHECKED}. Prices often drop around Black Friday (November 27) and Cyber Monday (November 30).` },
  ],
  related: [
    { title: "Pilates Christmas Gifts Over $500", excerpt: "16 splurge gifts, from reformers to recovery.", href: "/blog/pilates-christmas-gifts-over-500", imageUrl: "/pictures/stitch-luxury-studio-wide.png", category: "Gifts", readTime: "12 min read" },
    { title: "Best Megaformer Machine", excerpt: "Megaformer and Lagree-style machines compared.", href: "/blog/best-megaformer-machine", imageUrl: "/pictures/stitch-reformer-spring-detail.png", category: "Equipment", readTime: "12 min read" },
    { title: "Best Home Pilates Reformer", excerpt: "Home reformers at every budget.", href: "/blog/best-home-pilates-reformer", imageUrl: "/pictures/stitch-reformer-sunlit-minimal.png", category: "Equipment", readTime: "12 min read" },
    { title: "Best Indoor Spin Bike for a Home Studio", excerpt: "Indoor bikes compared.", href: "/blog/best-indoor-spin-bike-for-home-studio", imageUrl: "/pictures/stitch-studio-modern-row.png", category: "Equipment", readTime: "10 min read" },
  ],
  ctaTitle: "Find a studio near you",
  ctaSubtitle: "Use our curated city guides to find the best Pilates studios worldwide.",
};

export default function Page() {
  return <EquipmentGuide {...GUIDE} />;
}
