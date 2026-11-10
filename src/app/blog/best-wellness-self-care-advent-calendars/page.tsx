import type { Metadata } from "next";
import EquipmentGuide, { type EquipmentGuideProps } from "@/components/EquipmentGuide";
import { advent, ADVENT_CHECKED, ADVENT_CHECKED_ISO } from "@/lib/adventCatalog";

const SLUG = "best-wellness-self-care-advent-calendars";
const URL = `https://pilatescollectiveclub.com/blog/${SLUG}`;
const HERO = "/pictures/stitch-water-towel-bench.png";
const TITLE = "Best Wellness & Self-Care Advent Calendars (2026)";
const DESCRIPTION = "10 wellness advent calendars on Amazon for 2026: Twinings, Pukka, Stash, Taylors and Tea Forte tea, a Kitsch self-care set, candles, bath bombs and spa treats.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["wellness advent calendar", "self care advent calendar", "self care advent calendar 2026", "tea advent calendar", "tea advent calendar 2026", "twinings advent calendar", "pukka advent calendar", "tea forte advent calendar", "kitsch advent calendar", "candle advent calendar", "bath bomb advent calendar", "spa advent calendar"],
  openGraph: { title: TITLE, description: DESCRIPTION, type: "article", url: URL, images: [{ url: `https://pilatescollectiveclub.com${HERO}`, width: 1200, height: 630, alt: "Cucumber water and a towel on a studio bench" }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [`https://pilatescollectiveclub.com${HERO}`] },
  alternates: { canonical: URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const GUIDE: EquipmentGuideProps = {
  slug: SLUG,
  title: TITLE,
  description: DESCRIPTION,
  breadcrumb: "Wellness & Self-Care Advent Calendars",
  eyebrow: "Advent Calendars 2026",
  eyebrowAccent: "Wellness & Self-Care",
  h1: "Best Wellness & Self-Care Advent Calendars",
  h1Accent: "(2026): Tea, Candles & Spa",
  readTime: "8 min read",
  updatedLabel: `Prices checked ${ADVENT_CHECKED}`,
  datePublished: ADVENT_CHECKED_ISO,
  dateModified: ADVENT_CHECKED_ISO,
  heroImage: HERO,
  heroAlt: "A glass of cucumber water and a rolled towel on a bench in a Pilates studio",
  heroCaption: "Tea · Self-care · Candles · Bath",
  intro: [
    "Not every advent calendar needs to be about training harder. For anyone who moves a lot, the most welcome gift in December is often the opposite: a tea to wind down with after an evening class, a candle for a stretch at home, or a bath that eases sore legs.",
    "These calendars are all live and in stock on Amazon today, with the contents taken from each listing. This is the category with the best-known brands: Twinings, Pukka, Stash, Taylors of Harrogate, Tea Forte and Kitsch.",
  ],
  quickPicks: [
    { label: "Best tea calendar", itemId: "twinings-tea-advent-calendar" },
    { label: "Best caffeine-free options", itemId: "pukka-herbal-tea-advent-calendar" },
    { label: "Best luxury tea", itemId: "tea-forte-advent-calendar" },
    { label: "Best self-care splurge", itemId: "kitsch-12-day-advent-calendar" },
    { label: "Best for wind-down evenings", itemId: "espray-healing-candle-advent-calendar" },
  ],
  blocks: [
    {
      kind: "products",
      id: "tea",
      eyebrow: "Tea",
      heading: "Tea advent calendars",
      intro: "A cup after class instead of a chocolate: five tea calendars from established tea brands.",
      items: [
        advent("twiningsTea", { badge: "Best Tea Calendar", pros: ["2 tea bags a day, 48 in total", "Sold by Amazon"], cons: ["Mostly classic blends"] }),
        advent("pukkaTea", { badge: "Best Caffeine-Free Options", pros: ["Organic herbal blends", "Recyclable paper sachets", "Under $17"], cons: ["One bag a day"] }),
        advent("stashTea", { badge: "Best Dessert Flavors", pros: ["9 caffeine-free blends", "Vanilla caramel, chai and berry flavors"], cons: ["Sweeter flavor profile"] }),
        advent("taylorsTea", { badge: "Best for Tea Purists", pros: ["2 bags a day", "Blending since 1886"], cons: ["Blend list not published"] }),
        advent("teaForte", { badge: "Best Luxury Tea", pros: ["24 different loose-leaf blends", "Signature pyramid infusers"], cons: ["$78"] }),
      ],
    },
    {
      kind: "products",
      id: "self-care",
      eyebrow: "Self-care",
      heading: "Self-care, candle and bath calendars",
      items: [
        advent("kitsch", { badge: "Best Self-Care Splurge", pros: ["Hair and skin care from a known brand", "Satin pillowcase and bonnet"], cons: ["12 days, not 24", "$118.99"] }),
        advent("esprayCandle", { badge: "Best for Wind-Down Evenings", pros: ["24 scents", "Beautiful packaging"], cons: ["Small candles"] }),
        advent("bodyEarth", { badge: "Best Spa Calendar", pros: ["Foot creams, lotions and bath treats", "Under $30"], cons: ["7 of the 24 are festive accessories"] }),
        advent("mivgcrlBath", { badge: "Best for Sore Muscles", pros: ["Epsom salt bath bombs", "24 scents"], cons: ["Needs a bathtub"] }),
        advent("mindfulnessCards", { badge: "Best Under $10", pros: ["A mindfulness task a day", "Display easel"], cons: ["Cards only"] }),
      ],
    },
    {
      kind: "cards",
      eyebrow: "Before you buy",
      heading: "How to choose a wellness advent calendar",
      cards: [
        { h: "Order by late November", b: "Advent starts December 1. Order by around November 25 and check the delivery estimate." },
        { h: "Caffeine", b: "For evening use, look for caffeine-free blends: Pukka and Stash say how many of their teas are caffeine-free." },
        { h: "12 or 24 days?", b: "The Kitsch calendar has 12 days. Start it on December 13 to finish on Christmas Eve." },
        { h: "Pair it with movement", b: "A tea or candle calendar makes a lovely add-on to a class pack or a pair of grip socks for the Pilates lover." },
      ],
    },
  ],
  faqs: [
    { q: "What is the best tea advent calendar?", a: "The Twinings Tea Advent Calendar ($25.99) is the best all-rounder: 48 tea bags, two a day, from 20 of Twinings' blends, sold by Amazon. Tea Forte ($78) is the luxury choice with 24 different loose-leaf pyramid infusers." },
    { q: "Which tea advent calendar has caffeine-free tea?", a: "Pukka's calendar includes caffeine-free herbal blends alongside black and green teas, and the STASH calendar lists 9 caffeine-free and 15 caffeinated teas." },
    { q: "What is in the Kitsch advent calendar?", a: "Per the listing: rice water shampoo and conditioner bars, a hair perfume, a satin pillowcase and bonnet, claw clips, hair elastics, dermaplane oil and 12 dermaplaners, over 12 days." },
    { q: "What is a good self-care advent calendar for someone who works out?", a: "A bath calendar like the MIVGCRL Epsom salt bath bombs ($25.49), or a tea calendar for wind-down evenings after class." },
    { q: "When should I order?", a: "By late November for a December 1 start. Black Friday is November 27 and Cyber Monday November 30; popular calendars can sell out before then." },
  ],
  related: [
    { title: "Best Pilates & Yoga Advent Calendars (2026)", excerpt: "Prop kits, practice books and mindfulness cards.", href: "/blog/best-pilates-yoga-advent-calendars", imageUrl: "/pictures/stitch-magic-circle-hand.png", category: "Gifts", readTime: "8 min read" },
    { title: "Luxury Recovery Christmas Gifts", excerpt: "Normatec, Theragun and more.", href: "/blog/luxury-recovery-christmas-gifts-for-pilates", imageUrl: "/pictures/stitch-studio-bench-towels.png", category: "Gifts", readTime: "11 min read" },
    { title: "Pilates Christmas Gifts for Her", excerpt: "Ideas she'll use, at every budget.", href: "/blog/best-pilates-christmas-gifts-for-her", imageUrl: "/pictures/stitch-retail-activewear.png", category: "Gifts", readTime: "9 min read" },
    { title: "Pilates Secret Santa Gifts", excerpt: "Small gifts for the studio exchange.", href: "/blog/pilates-secret-santa-christmas-gifts", imageUrl: "/pictures/stitch-studio-shelf-props.png", category: "Gifts", readTime: "8 min read" },
  ],
  ctaTitle: "Find a studio near you",
  ctaSubtitle: "Use our curated city guides to find the best Pilates studios worldwide.",
};

export default function Page() {
  return <EquipmentGuide {...GUIDE} />;
}
