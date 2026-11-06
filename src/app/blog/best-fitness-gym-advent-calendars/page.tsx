import type { Metadata } from "next";
import EquipmentGuide, { type EquipmentGuideProps } from "@/components/EquipmentGuide";
import { advent, ADVENT_CHECKED, ADVENT_CHECKED_ISO } from "@/lib/adventCatalog";

const SLUG = "best-fitness-gym-advent-calendars";
const URL = `https://pilatescollectiveclub.com/blog/${SLUG}`;
const HERO = "/pictures/juls-p-lB6lbkbe1XA-unsplash.jpg";
const TITLE = "Best Fitness & Gym Advent Calendars (2026)";
const DESCRIPTION = "8 fitness and gym advent calendars on Amazon for 2026: KELUMI, Bearhug and Kederwa workout gear kits, plus Hyrox and CrossFit 25-day workout books.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["fitness advent calendar", "fitness advent calendar 2026", "gym advent calendar", "workout advent calendar", "fitness advent calendar for men", "fitness advent calendar for women", "hyrox advent calendar", "crossfit advent calendar", "advent calendar for gym lovers"],
  openGraph: { title: TITLE, description: DESCRIPTION, type: "article", url: URL, images: [{ url: `https://pilatescollectiveclub.com${HERO}`, width: 1200, height: 630, alt: "Hands holding pink dumbbells during a home workout" }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [`https://pilatescollectiveclub.com${HERO}`] },
  alternates: { canonical: URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const GUIDE: EquipmentGuideProps = {
  slug: SLUG,
  title: TITLE,
  description: DESCRIPTION,
  breadcrumb: "Fitness & Gym Advent Calendars",
  eyebrow: "Advent Calendars 2026",
  eyebrowAccent: "Fitness & Gym",
  h1: "Best Fitness & Gym Advent Calendars",
  h1Accent: "(2026): 8 Workout Countdowns",
  readTime: "8 min read",
  updatedLabel: `Prices checked ${ADVENT_CHECKED}`,
  datePublished: ADVENT_CHECKED_ISO,
  dateModified: ADVENT_CHECKED_ISO,
  heroImage: HERO,
  heroAlt: "Hands holding a pair of pink dumbbells during a home workout",
  heroCaption: "Gear kits · Daily challenges · Workout books",
  intro: [
    "A fitness advent calendar turns December into a 24-day challenge: one piece of gear a day, from resistance bands and a jump rope to wrist wraps and grip trainers, so there is a reason to move even in the busiest month.",
    "Every calendar below is a live, in-stock Amazon listing we checked today, with contents taken from the listing. They come from newer Amazon brands, so expect practical starter gear rather than premium equipment. Two workout books cover people who already own a full gym.",
  ],
  quickPicks: [
    { label: "Best for beginners", itemId: "kelumi-fitness-advent-calendar" },
    { label: "Best home-gym kit", itemId: "kederwa-fitness-advent-calendar" },
    { label: "Best challenge format", itemId: "bearhug-fitness-advent-calendar" },
    { label: "Best budget", itemId: "luneetya-fitness-gear-advent-calendar" },
    { label: "Best for Hyrox", itemId: "ho-ho-hyrox-advent-book" },
  ],
  blocks: [
    {
      kind: "products",
      id: "gear-calendars",
      eyebrow: "Gear kits",
      heading: "Workout gear advent calendars",
      intro: "24 numbered boxes, one accessory a day. Prices and contents are from each Amazon listing.",
      items: [
        advent("kelumiFitness", { badge: "Best for Beginners", pros: ["A guide card in every box", "Check-in tracker and measurement card"], cons: ["Mostly bands: light on cardio gear"] }),
        advent("kederwaFitness", { badge: "Best Home-Gym Kit", pros: ["Tubes, door anchor and ankle straps", "Lifting gloves and wrist wraps"], cons: ["$43.99"] }),
        advent("bearhugFitness", { badge: "Best Challenge Format", pros: ["Exercise card, fitness dice and measuring tools", "Knee pads and wrist wraps"], cons: ["The priciest gear kit here"] }),
        advent("gleemoriaFitness", { badge: "Best for Lifters", pros: ["Wrist wraps and lifting straps", "Under $30"], cons: ["Less useful for mat training"] }),
        advent("movinpeFitness", { badge: "Best All-Rounder", pros: ["Unisex mix of gear", "Gym bag included"], cons: ["No instruction cards listed"] }),
        advent("luneetyaFitness", { badge: "Best Budget", pros: ["Instruction manual", "Under $25"], cons: ["Smaller, lighter accessories"] }),
      ],
    },
    {
      kind: "products",
      id: "workout-books",
      eyebrow: "For the fully equipped",
      heading: "25-day workout books",
      intro: "A workout a day until Christmas, for someone who already owns the kit.",
      items: [
        advent("hyroxBook", { badge: "Best for Hyrox", pros: ["Beginner to competitor", "Gym and home options"], cons: ["Workouts only, no gear"] }),
        advent("wodmasBook", { badge: "Best for CrossFit", pros: ["Scaled to Rx+", "Garage-gym options"], cons: ["Workouts only, no gear"] }),
      ],
    },
    {
      kind: "cards",
      eyebrow: "Before you buy",
      heading: "How to choose a fitness advent calendar",
      cards: [
        { h: "Order by late November", b: "Advent starts on December 1. Order by around November 25 and check the delivery estimate on the listing." },
        { h: "Bands are the core", b: "The most useful long-term pieces are resistance tubes with handles and a door anchor (Kederwa, KELUMI). They become a real home setup after Christmas." },
        { h: "Beginners need guidance", b: "If the person is new to training, pick a calendar with instructions in each box, like KELUMI, so the gear actually gets used." },
        { h: "\"For men\" is marketing", b: "Several are sold as men's calendars, but the contents are unisex gym gear. Choose by contents, not the label." },
      ],
    },
  ],
  faqs: [
    { q: "What is in a fitness advent calendar?", a: "Usually 24 small workout accessories: resistance bands and tubes, a jump rope, workout gloves, wrist wraps, grip trainers, a towel, socks and a carry bag." },
    { q: "What is the best fitness advent calendar for beginners?", a: "The KELUMI Fitness Advent Calendar 2026 ($39.99) is the most beginner-friendly we found: every box has a guide card explaining the item, with a daily goal and a 24-day check-in tracker." },
    { q: "Is there a Hyrox advent calendar?", a: "Yes, as a book: Ho Ho Hyrox by James Cormack ($11.99) has 25 Christmas Hyrox workouts with gym and home options. The same author wrote Merry WODmas for CrossFit." },
    { q: "Are fitness advent calendars worth it?", a: "As a fun, motivating countdown and a starter home kit, yes. The accessories are entry-level, so they suit beginners and casual trainers more than people with a well-equipped gym." },
    { q: "When do advent calendars sell out?", a: "Popular calendars can sell out in late November. Black Friday is November 27 and Cyber Monday November 30; buying before then is the safer bet for a December 1 start." },
  ],
  related: [
    { title: "Best Pilates & Yoga Advent Calendars (2026)", excerpt: "Prop kits, practice books and mindfulness cards.", href: "/blog/best-pilates-yoga-advent-calendars", imageUrl: "/pictures/stitch-magic-circle-hand.png", category: "Gifts", readTime: "8 min read" },
    { title: "Best Sports Advent Calendars (2026)", excerpt: "Golf, cycling, basketball, football, pickleball and more.", href: "/blog/best-sports-advent-calendars", imageUrl: "/pictures/logan-weaver-lgnwvr-u76Gd0hP5w4-unsplash.jpg", category: "Gifts", readTime: "9 min read" },
    { title: "Fitness Tech Christmas Gifts", excerpt: "Trackers, rings and smart gear.", href: "/blog/fitness-tech-christmas-gifts-for-pilates-lovers", imageUrl: "/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg", category: "Gifts", readTime: "10 min read" },
    { title: "Best Pilates Gifts for Him", excerpt: "Gifts for the man who trains.", href: "/blog/best-pilates-gifts-for-him", imageUrl: "/pictures/stitch-retail-activewear.png", category: "Gifts", readTime: "9 min read" },
  ],
  ctaTitle: "Find a studio near you",
  ctaSubtitle: "Use our curated city guides to find the best Pilates studios worldwide.",
};

export default function Page() {
  return <EquipmentGuide {...GUIDE} />;
}
