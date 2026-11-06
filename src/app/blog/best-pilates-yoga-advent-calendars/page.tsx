import type { Metadata } from "next";
import EquipmentGuide, { type EquipmentGuideProps } from "@/components/EquipmentGuide";
import { advent, ADVENT_CHECKED, ADVENT_CHECKED_ISO } from "@/lib/adventCatalog";

const SLUG = "best-pilates-yoga-advent-calendars";
const URL = `https://pilatescollectiveclub.com/blog/${SLUG}`;
const HERO = "/pictures/stitch-magic-circle-hand.png";
const TITLE = "Best Pilates & Yoga Advent Calendars (2026)";
const DESCRIPTION = "9 Pilates and yoga advent calendars on Amazon for 2026: MOVINPE, JAZOZT and pidouzim prop kits, a $19.99 budget pick, yoga countdown books and mindfulness cards.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["pilates advent calendar", "pilates advent calendar 2026", "yoga advent calendar", "yoga advent calendar 2026", "fitness advent calendar for women", "pilates christmas countdown", "advent calendar for pilates lovers", "mindfulness advent calendar", "chair yoga advent calendar"],
  openGraph: { title: TITLE, description: DESCRIPTION, type: "article", url: URL, images: [{ url: `https://pilatescollectiveclub.com${HERO}`, width: 1200, height: 630, alt: "A hand holding a grey Pilates ring" }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [`https://pilatescollectiveclub.com${HERO}`] },
  alternates: { canonical: URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const GUIDE: EquipmentGuideProps = {
  slug: SLUG,
  title: TITLE,
  description: DESCRIPTION,
  breadcrumb: "Pilates & Yoga Advent Calendars",
  eyebrow: "Advent Calendars 2026",
  eyebrowAccent: "Pilates & Yoga",
  h1: "Best Pilates & Yoga Advent Calendars",
  h1Accent: "(2026): 9 Countdowns for the Mat",
  readTime: "8 min read",
  updatedLabel: `Prices checked ${ADVENT_CHECKED}`,
  datePublished: ADVENT_CHECKED_ISO,
  dateModified: ADVENT_CHECKED_ISO,
  heroImage: HERO,
  heroAlt: "A hand holding a grey Pilates ring",
  heroCaption: "Prop kits · Practice books · Mindfulness",
  intro: [
    "A Pilates advent calendar swaps 24 chocolates for 24 small props: a ring, a mini ball, grip socks, sliders and bands. By Christmas Eve the person who opens it has a complete home mat kit.",
    "We checked every calendar below on Amazon today: each one is a live, in-stock listing, and the contents come from the listing itself. Most Pilates calendars are made by newer Amazon brands rather than the big equipment names, so treat them as starter props and a fun countdown, not studio-grade equipment.",
  ],
  quickPicks: [
    { label: "Best Pilates calendar", itemId: "movinpe-pilates-advent-calendar" },
    { label: "Best for mat Pilates", itemId: "jazozt-yoga-pilates-advent-calendar" },
    { label: "Best for recovery", itemId: "pidouzim-fitness-advent-calendar-women" },
    { label: "Best budget", itemId: "sunnino-fitness-advent-calendar" },
    { label: "Best stocking filler", itemId: "embracing-mindfulness-advent-calendar" },
  ],
  blocks: [
    {
      kind: "products",
      id: "prop-calendars",
      eyebrow: "Prop kits",
      heading: "Pilates and yoga advent calendars",
      intro: "Each calendar has 24 numbered boxes with one accessory a day. Prices and contents are from the Amazon listing.",
      items: [
        advent("movinpePilates", { badge: "Best Pilates Calendar", pros: ["Real Pilates props: ring, ball, grip socks, sliders", "Storage bag for the studio"], cons: ["Starter-level quality, not studio gear"] }),
        advent("jazoztYogaPilates", { badge: "Best for Mat Pilates", pros: ["Two Pilates balls and a stretching strap", "Beginner instruction guide"], cons: ["Full item list not published"] }),
        advent("pidouzimFitness", { badge: "Best for Recovery", pros: ["Massage roller and massage balls", "Storage bag"], cons: ["Less Pilates-specific than MOVINPE"] }),
        advent("imnbestYoga", { badge: "Best Yoga & Self-Care Mix", pros: ["Five-band set plus grip socks", "Candle and meditation chime for wind-down"], cons: ["Some items are decorative"] }),
        advent("yuzeemingPilates", { badge: "Good Mid-Price Option", pros: ["Ball, grip socks and strap", "Under $30"], cons: ["Listing is vague about all 24 items"] }),
        advent("sunninoFitness", { badge: "Best Budget", pros: ["Graded five-band set", "Under $20"], cons: ["More general fitness than Pilates"] }),
      ],
    },
    {
      kind: "products",
      id: "books-and-cards",
      eyebrow: "No props needed",
      heading: "Practice books and mindfulness cards",
      intro: "For someone who already owns their gear: a daily practice instead of a daily gadget.",
      items: [
        advent("yogaBook", { badge: "Best Yoga Practice Calendar", pros: ["3 poses a day", "Easy to post"], cons: ["A book, no props"] }),
        advent("chairYogaBook", { badge: "Best for Seniors", pros: ["Gentle seated routines"], cons: ["Too easy for regular practitioners"] }),
        advent("mindfulnessCards", { badge: "Best Stocking Filler", pros: ["Under $8", "Display easel included"], cons: ["Mindfulness tasks, not exercise"] }),
      ],
    },
    {
      kind: "cards",
      eyebrow: "Before you buy",
      heading: "How to choose a Pilates advent calendar",
      cards: [
        { h: "Order by late November", b: "Advent starts on December 1. Order by around November 25 so it arrives in time, and check the delivery estimate on each listing." },
        { h: "Props or gym gear?", b: "Look for a ring, small ball, grip socks and sliders. Calendars that list gloves, jump ropes and lifting straps are general fitness kits." },
        { h: "Who it is for", b: "Prop kits suit beginners building a home kit. Someone with a full studio setup will enjoy a practice book or mindfulness cards more." },
        { h: "Sizes", b: "Grip socks in these kits are usually one size. If they practise on the reformer, a dedicated pair of grip socks is still worth buying." },
      ],
    },
  ],
  faqs: [
    { q: "Is there a Pilates advent calendar?", a: "Yes. The MOVINPE Pilates Advent Calendar 2026 ($39.99) includes a Pilates ring, Pilates ball, grip socks, sliding discs and resistance bands across 24 days, and JAZOZT and pidouzim make similar Pilates and yoga calendars." },
    { q: "What is in a Pilates advent calendar?", a: "Usually small props: a mini Pilates ball, a Pilates ring, resistance and loop bands, grip socks, sliders, a stretching strap and a storage bag, one item a day for 24 days." },
    { q: "Are fitness advent calendars good quality?", a: "Most are made by newer Amazon brands and contain starter-level accessories. They are great for a fun countdown and a beginner home kit, but they are not a replacement for studio-grade equipment." },
    { q: "When should I buy an advent calendar?", a: "Buy by late November so it arrives before December 1. Prices sometimes drop around Black Friday (November 27) and Cyber Monday (November 30), but popular calendars can sell out." },
    { q: "What is a good advent calendar for someone who already has Pilates gear?", a: "A practice calendar, such as the Yoga Advent Calendar book with three poses a day, or the Embracing Mindfulness card calendar ($7.95)." },
  ],
  related: [
    { title: "Best Fitness & Gym Advent Calendars (2026)", excerpt: "Workout gear countdowns and daily challenge books.", href: "/blog/best-fitness-gym-advent-calendars", imageUrl: "/pictures/juls-p-lB6lbkbe1XA-unsplash.jpg", category: "Gifts", readTime: "8 min read" },
    { title: "Best Wellness & Self-Care Advent Calendars (2026)", excerpt: "Tea, candles and spa calendars for recovery evenings.", href: "/blog/best-wellness-self-care-advent-calendars", imageUrl: "/pictures/stitch-water-towel-bench.png", category: "Gifts", readTime: "8 min read" },
    { title: "Pilates Christmas Stocking Stuffers", excerpt: "Small gifts for Pilates lovers.", href: "/blog/pilates-christmas-stocking-stuffers", imageUrl: "/pictures/stitch-grip-socks-footbar.png", category: "Gifts", readTime: "9 min read" },
    { title: "Best Pilates Christmas Gifts", excerpt: "The complete Pilates gift guide.", href: "/blog/best-pilates-christmas-gifts", imageUrl: "/pictures/stitch-studio-entryway.png", category: "Gifts", readTime: "10 min read" },
  ],
  ctaTitle: "Find a studio near you",
  ctaSubtitle: "Use our curated city guides to find the best Pilates studios worldwide.",
};

export default function Page() {
  return <EquipmentGuide {...GUIDE} />;
}
