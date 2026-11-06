import type { Metadata } from "next";
import EquipmentGuide, { type EquipmentGuideProps } from "@/components/EquipmentGuide";
import { advent, ADVENT_CHECKED, ADVENT_CHECKED_ISO } from "@/lib/adventCatalog";

const SLUG = "best-sports-advent-calendars";
const URL = `https://pilatescollectiveclub.com/blog/${SLUG}`;
const HERO = "/pictures/logan-weaver-lgnwvr-u76Gd0hP5w4-unsplash.jpg";
const TITLE = "Best Sports Advent Calendars (2026): One per Sport";
const DESCRIPTION = "11 sports advent calendars on Amazon for 2026: golf, a metabo bike tool calendar, official NBA and NFL TeenyMates, soccer, pickleball, fishing and outdoors.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["sports advent calendar", "sports advent calendar 2026", "golf advent calendar", "cycling advent calendar", "bike tool advent calendar", "nba advent calendar", "nfl advent calendar", "soccer advent calendar", "pickleball advent calendar", "fishing advent calendar", "survival advent calendar"],
  openGraph: { title: TITLE, description: DESCRIPTION, type: "article", url: URL, images: [{ url: `https://pilatescollectiveclub.com${HERO}`, width: 1200, height: 630, alt: "Two women training on a gym floor beside a dumbbell" }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [`https://pilatescollectiveclub.com${HERO}`] },
  alternates: { canonical: URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const GUIDE: EquipmentGuideProps = {
  slug: SLUG,
  title: TITLE,
  description: DESCRIPTION,
  breadcrumb: "Sports Advent Calendars",
  eyebrow: "Advent Calendars 2026",
  eyebrowAccent: "Sports",
  h1: "Best Sports Advent Calendars",
  h1Accent: "(2026): One for Every Sport",
  readTime: "9 min read",
  updatedLabel: `Prices checked ${ADVENT_CHECKED}`,
  datePublished: ADVENT_CHECKED_ISO,
  dateModified: ADVENT_CHECKED_ISO,
  heroImage: HERO,
  heroAlt: "Two women doing back extensions on a gym floor beside a dumbbell",
  heroCaption: "Golf · Cycling · Basketball · Football · Soccer · Pickleball · Fishing · Outdoors",
  intro: [
    "Almost every sport now has its own advent calendar, from golf tees to bike tools. The best ones are useful well beyond December: a metabo bike toolkit or a box of fishing lures is still in use next summer.",
    "We picked one or two calendars per sport, all live and in stock on Amazon today, with the contents taken from each listing. A few come from big names (metabo, Funko and the officially licensed NBA and NFL TeenyMates); most others are from newer Amazon brands.",
  ],
  quickPicks: [
    { label: "Best for golfers", itemId: "gowinn-golf-advent-calendar" },
    { label: "Best for cyclists", itemId: "metabo-bicycle-tool-advent-calendar" },
    { label: "Best for basketball fans", itemId: "teenymates-nba-advent-calendar" },
    { label: "Best for pickleball", itemId: "seans-choice-pickleball-advent-calendar" },
    { label: "Best for anglers", itemId: "fonmang-fishing-advent-calendar" },
  ],
  blocks: [
    {
      kind: "products",
      id: "golf",
      eyebrow: "Golf",
      heading: "Golf advent calendars",
      items: [
        advent("gowinnGolf", { badge: "Best Golf Calendar", pros: ["Course essentials: tees, markers, divot tools", "Cap, bottle and towel"], cons: ["$49.99"] }),
        advent("kreativekraftGolf", { badge: "Best Budget Golf", pros: ["Under $20", "Includes a pair of socks"], cons: ["More novelty than kit"] }),
      ],
    },
    {
      kind: "products",
      id: "cycling",
      eyebrow: "Cycling",
      heading: "Cycling advent calendars",
      items: [
        advent("metaboBike", { badge: "Best for Cyclists", pros: ["A real maintenance toolkit", "From a long-established tool brand"], cons: ["Low stock, ships from Amazon Germany", "$72.31"] }),
        advent("zjtapeBike", { badge: "Best for Commuters", pros: ["Lighting, safety and storage accessories", "Under $40"], cons: ["Less of a workshop kit"] }),
      ],
    },
    {
      kind: "products",
      id: "team-sports",
      eyebrow: "Team sports",
      heading: "Basketball, football and soccer",
      intro: "The licensed calendars are collectibles for fans, especially kids.",
      items: [
        advent("teenymatesNba", { badge: "Best for Basketball Fans", pros: ["Officially licensed NBA figures", "Builds a mini court"], cons: ["$64.99", "Collectibles, not training gear"] }),
        advent("funkoNba", { badge: "Best Budget Basketball", pros: ["Funko, sold by Amazon", "Under $40"], cons: ["14 days, 13 figures"] }),
        advent("teenymatesNfl", { badge: "Best for Football Fans", pros: ["Officially licensed NFL figures", "Builds a mini field"], cons: ["$64.99"] }),
        advent("venobatSoccer", { badge: "Best for Young Soccer Fans", pros: ["Builds two teams and a pitch", "Screen-free"], cons: ["Unlicensed, generic players"] }),
      ],
    },
    {
      kind: "products",
      id: "racket-water-outdoors",
      eyebrow: "Court, water and trail",
      heading: "Pickleball, fishing and outdoors",
      items: [
        advent("seansChoicePickleball", { badge: "Best for Pickleball", pros: ["Indoor and outdoor balls", "Grip tape and ball retriever"], cons: ["No paddle"] }),
        advent("fonmangFishing", { badge: "Best for Anglers", pros: ["From a fishing-tackle brand", "Lures for six rigging styles"], cons: ["Freshwater only"] }),
        advent("bearhugSurvival", { badge: "Best for Hikers & Campers", pros: ["Fire, light, navigation and emergency gear"], cons: ["Includes a knife: adults only"] }),
      ],
    },
    {
      kind: "cards",
      eyebrow: "Before you buy",
      heading: "How to choose a sports advent calendar",
      cards: [
        { h: "Order by late November", b: "Advent starts December 1. Order by around November 25 and check delivery; the metabo calendar ships from Amazon Germany and is marked low stock." },
        { h: "Gear or collectibles?", b: "Golf, cycling, pickleball and fishing calendars are practical kit. The NBA, NFL and soccer calendars are collectibles for fans." },
        { h: "Check the day count", b: "Most have 24 days. The Funko NBA calendar has 14, so start it on December 11 to finish on Christmas Eve." },
        { h: "Age suitability", b: "The survival kit includes a knife and fire starter. The Funko calendar is rated 3+; check the listing for the others." },
      ],
    },
  ],
  faqs: [
    { q: "What is the best golf advent calendar?", a: "The Gowinn Golf Advent Calendar 2026 ($49.99) is the most complete we found, with tees, ball markers, divot tools, a cap, a water bottle and towels. KreativeKraft is a cheaper, more novelty option at $18.99." },
    { q: "Is there a cycling advent calendar with real tools?", a: "Yes. The metabo Bicycle Tool Advent Calendar 2026 ($72.31) includes a mini ratchet with 11 bits, a chain rivet, a spoke tensioner, tyre levers and valve tools, plus a saddle bag and torch." },
    { q: "Are there official NBA and NFL advent calendars?", a: "Yes. TeenyMates NBA and NFL advent calendars ($64.99 each) contain officially licensed mini figures with real team uniforms. Funko also makes a 14-day NBA Pocket POP! calendar." },
    { q: "What is in a pickleball advent calendar?", a: "The Sean's Choice calendar includes 4 pickleballs (2 outdoor, 2 indoor), a cooling towel, ball retriever, paddle eraser, grip tapes, a cap and socks, plus a few fun extras." },
    { q: "When should I order a sports advent calendar?", a: "By late November for a December 1 start. Black Friday is November 27 and Cyber Monday November 30, but popular calendars can sell out first." },
  ],
  related: [
    { title: "Best Fitness & Gym Advent Calendars (2026)", excerpt: "Workout gear countdowns and daily challenge books.", href: "/blog/best-fitness-gym-advent-calendars", imageUrl: "/pictures/juls-p-lB6lbkbe1XA-unsplash.jpg", category: "Gifts", readTime: "8 min read" },
    { title: "Best Pilates & Yoga Advent Calendars (2026)", excerpt: "Prop kits, practice books and mindfulness cards.", href: "/blog/best-pilates-yoga-advent-calendars", imageUrl: "/pictures/stitch-magic-circle-hand.png", category: "Gifts", readTime: "8 min read" },
    { title: "Black Friday Spin & Cycling Deals", excerpt: "Indoor cycling deals to watch.", href: "/blog/black-friday-spin-deals", imageUrl: "/pictures/ahmet-kurt-0xn-8kRWOhE-unsplash.jpg", category: "Deals", readTime: "8 min read" },
    { title: "Luxury Fitness Christmas Gifts for Him", excerpt: "Premium gifts for the man who trains.", href: "/blog/luxury-fitness-christmas-gifts-for-him", imageUrl: "/pictures/stitch-retail-activewear.png", category: "Gifts", readTime: "10 min read" },
  ],
  ctaTitle: "Find a studio near you",
  ctaSubtitle: "Use our curated city guides to find the best Pilates studios worldwide.",
};

export default function Page() {
  return <EquipmentGuide {...GUIDE} />;
}
