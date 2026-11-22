import type { Metadata } from "next";
import AffiliateNote from "@/components/AffiliateNote";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import ProductCard from "@/components/ProductCard";
import FeaturedRotator from "@/components/FeaturedRotator";
import type { FeaturedItem } from "@/components/FeaturedRotator";
import { jsonLdHtml } from "@/lib/schema";
import Reveal from "@/components/rail/Reveal";
import Marquee from "@/components/rail/Marquee";
import WordFill from "@/components/rail/WordFill";

export const metadata: Metadata = {
  title: "Pilates Collective Club: Find the Best Pilates Studios Worldwide",
  description: "Curated city guides, studio reviews, and equipment picks for Pilates practitioners. Find the best reformer studios in London, New York, Paris, Zurich and beyond.",
  keywords: ["best pilates studios", "pilates studios near me", "reformer pilates studios", "pilates city guides", "pilates london", "pilates new york", "pilates paris", "pilates zurich", "find pilates studio", "pilates class near me", "best reformer pilates", "pilates studio guide"],
  openGraph: {
    title: "Pilates Collective Club: Find Your Studio. Know Your Method.",
    description: "Curated city guides and expert studio recommendations for Pilates practitioners worldwide. Find the best reformer studios in London, New York, Paris, Zurich and more.",
    type: "website",
    url: "https://pilatescollectiveclub.com",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/roxana-popovici-2QeonB1SdQk-unsplash.jpg", width: 1200, height: 630, alt: "Pilates Collective Club: curated studio guides and equipment picks for Pilates practitioners" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilates Collective Club: Find Your Studio. Know Your Method.",
    description: "Curated city guides and expert studio recommendations for Pilates practitioners worldwide.",
    images: ["https://pilatescollectiveclub.com/pictures/roxana-popovici-2QeonB1SdQk-unsplash.jpg"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com",
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const CITIES = [
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 6 },
  { city: "New York", country: "United States", href: "/cities/new-york", studioCount: 6 },
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 6 },
  { city: "Los Angeles", country: "United States", href: "/cities/los-angeles", studioCount: 6 },
  { city: "Sydney", country: "Australia", href: "/cities/sydney", studioCount: 6 },
  { city: "Tokyo", country: "Japan", href: "/cities/tokyo", studioCount: 6 },
  { city: "Dubai", country: "United Arab Emirates", href: "/cities/dubai", studioCount: 6 },
  { city: "Singapore", country: "Singapore", href: "/cities/singapore", studioCount: 6 },
  { city: "Miami", country: "United States", href: "/cities/miami", studioCount: 6 },
  { city: "Chicago", country: "United States", href: "/cities/chicago", studioCount: 6 },
  { city: "Barcelona", country: "Spain", href: "/cities/barcelona", studioCount: 6 },
  { city: "Berlin", country: "Germany", href: "/cities/berlin", studioCount: 6 },
  { city: "Amsterdam", country: "Netherlands", href: "/cities/amsterdam", studioCount: 6 },
  { city: "Zurich", country: "Switzerland", href: "/cities/zurich", studioCount: 6 },
  { city: "Geneva", country: "Switzerland", href: "/cities/geneva", studioCount: 6 },
  { city: "Lausanne", country: "Switzerland", href: "/cities/lausanne", studioCount: 4 },
  { city: "Milan", country: "Italy", href: "/cities/milan", studioCount: 6 },
  { city: "Rome", country: "Italy", href: "/cities/rome", studioCount: 6 },
  { city: "Stockholm", country: "Sweden", href: "/cities/stockholm", studioCount: 4 },
  { city: "Copenhagen", country: "Denmark", href: "/cities/copenhagen", studioCount: 6 },
  { city: "Hong Kong", country: "Hong Kong SAR", href: "/cities/hong-kong", studioCount: 6 },
  { city: "Melbourne", country: "Australia", href: "/cities/melbourne", studioCount: 6 },
  { city: "Toronto", country: "Canada", href: "/cities/toronto", studioCount: 6 },
  { city: "San Francisco", country: "United States", href: "/cities/san-francisco", studioCount: 6 },
  { city: "Lisbon", country: "Portugal", href: "/cities/lisbon", studioCount: 6 },
  { city: "Austin", country: "United States", href: "/cities/austin", studioCount: 6 },
  { city: "Seattle", country: "United States", href: "/cities/seattle", studioCount: 6 },
  { city: "Boston", country: "United States", href: "/cities/boston", studioCount: 6 },
  { city: "Denver", country: "United States", href: "/cities/denver", studioCount: 6 },
  { city: "Washington DC", country: "United States", href: "/cities/washington-dc", studioCount: 6 },
  { city: "Atlanta", country: "United States", href: "/cities/atlanta", studioCount: 6 },
  { city: "Nashville", country: "United States", href: "/cities/nashville", studioCount: 6 },
  { city: "Dallas", country: "United States", href: "/cities/dallas", studioCount: 6 },
  { city: "Houston", country: "United States", href: "/cities/houston", studioCount: 6 },
  { city: "Philadelphia", country: "United States", href: "/cities/philadelphia", studioCount: 6 },
  { city: "Portland", country: "United States", href: "/cities/portland", studioCount: 6 },
  { city: "Minneapolis", country: "United States", href: "/cities/minneapolis", studioCount: 6 },
  { city: "San Diego", country: "United States", href: "/cities/san-diego", studioCount: 6 },
  { city: "Phoenix", country: "United States", href: "/cities/phoenix", studioCount: 6 },
  { city: "Charlotte", country: "United States", href: "/cities/charlotte", studioCount: 6 },
  { city: "Las Vegas", country: "United States", href: "/cities/las-vegas", studioCount: 6 },
  { city: "New Orleans", country: "United States", href: "/cities/new-orleans", studioCount: 6 },
  { city: "Salt Lake City", country: "United States", href: "/cities/salt-lake-city", studioCount: 6 },
  { city: "Tampa", country: "United States", href: "/cities/tampa", studioCount: 6 },
  { city: "Raleigh", country: "United States", href: "/cities/raleigh", studioCount: 6 },
];

const FEATURED_ITEMS: FeaturedItem[] = [
  // 1, Product
  {
    title: "Best Pilates Reformer Under $1,000 (2026): Honest Reviews",
    excerpt: "The best mid-range reformers compared honestly: AeroPilates, Stamina, and Merrithew entry-level machines ranked by resistance quality, build, and long-term value.",
    href: "/blog/best-pilates-reformer-under-1000",
    category: "Best For · Equipment",
    readTime: "10 min read",
    imageUrl: "/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B01FMODVAE?tag=pilatescollective-20",
    affiliateLabel: "Shop Our Top Pick →",
  },
  // 2, City
  {
    title: "The Best Pilates Studios in London",
    excerpt: "From Heartcore in Kensington to Ten Health in Shoreditch: our complete guide to London's most respected reformer studios. Every studio compared on format, price and reviews.",
    href: "/cities/london",
    category: "City Guide",
    readTime: "8 min read",
    imageUrl: "/pictures/roxana-popovici-2QeonB1SdQk-unsplash.jpg",
  },
  // 3, Article
  {
    title: "The Beginner's Guide to Reformer Pilates",
    excerpt: "What to expect in your first reformer class, how to choose a studio, and how to progress with confidence. Everything a new practitioner needs to know before stepping on the carriage.",
    href: "/blog/beginners-guide-to-reformer-pilates",
    category: "Beginner Guide",
    readTime: "8 min read",
    imageUrl: "/pictures/esma-eserghep-NUQi80iMLrI-unsplash.jpg",
  },
  // 4, Product
  {
    title: "Best Home Pilates Reformer (2026): Every Budget",
    excerpt: "A quality home reformer changes your practice permanently. We compared every price tier, from the AeroPilates 435 to the Gratz, so you know exactly what you get at each level.",
    href: "/blog/best-home-pilates-reformer",
    category: "Best For · Equipment",
    readTime: "11 min read",
    imageUrl: "/pictures/samantha-sheppard-b8Q5fHBsyik-unsplash.jpg",
  },
  // 5, City
  {
    title: "The Best Pilates Studios in New York",
    excerpt: "From Tribeca's classical powerhouses to the Upper East Side's boutique reformer rooms: the definitive guide to New York's five best Pilates studios, verified for 2026.",
    href: "/cities/new-york",
    category: "City Guide",
    readTime: "9 min read",
    imageUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1400&q=80",
  },
  // 6, Article
  {
    title: "Classical vs Contemporary Pilates",
    excerpt: "The split between Joseph Pilates' original Contrology system and modern functional interpretations: what it means for your practice, and how to choose your lineage.",
    href: "/blog/classical-vs-contemporary-pilates",
    category: "Method",
    readTime: "8 min read",
    imageUrl: "/pictures/junseong-lee-G9H5edUL0T8-unsplash.jpg",
  },
  // 7, Product
  {
    title: "Best Pilates Leggings (2026): Compared & Ranked",
    excerpt: "From Lululemon Align to Splits59 Raquel: the leggings that genuinely serve the method, compared on opacity, waistband stability, and reformer performance across fifteen sessions.",
    href: "/blog/best-pilates-leggings",
    category: "Best For · Equipment",
    readTime: "9 min read",
    imageUrl: "/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B08M8ZTKJS?tag=pilatescollective-20",
    affiliateLabel: "Shop Our Top Pick →",
  },
  // 8, City
  {
    title: "The Best Pilates Studios in Paris",
    excerpt: "From the Marais to Saint-Germain: Paris has quietly built one of the most sophisticated Pilates scenes in Europe. Our curated guide to the five studios worth your time.",
    href: "/cities/paris",
    category: "City Guide",
    readTime: "8 min read",
    imageUrl: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=1400&q=80",
  },
  // 9, Article
  {
    title: "Pilates for Back Pain: What the Research Shows",
    excerpt: "Clinical research meets practical guidance. What Pilates can and can't do for chronic lower back pain, and the specific exercises with the strongest evidence behind them.",
    href: "/blog/pilates-for-back-pain",
    category: "Health",
    readTime: "10 min read",
    imageUrl: "/pictures/junseong-lee-AX8cf6mkCzw-unsplash.jpg",
  },
  // 10, Product
  {
    title: "Best Pilates Grip Socks (2026): Compared & Ranked",
    excerpt: "Required at virtually every reformer studio worldwide. We compared five options across grip, durability, and comfort, from ToeSox to Tavi Noir, so you don't have to.",
    href: "/blog/best-pilates-grip-socks",
    category: "Best For · Equipment",
    readTime: "7 min read",
    imageUrl: "/pictures/jade-stephens-N21356amsyw-unsplash.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B07QHNDHW3?tag=pilatescollective-20",
    affiliateLabel: "Shop Our Top Pick →",
  },
  // 11, City
  {
    title: "The Best Pilates Studios in Zurich",
    excerpt: "From lakeside private studios to Seefeld reformer boutiques: our complete guide to Zurich's refined, results-driven Pilates scene. Six studios worth your time.",
    href: "/cities/zurich",
    category: "City Guide",
    readTime: "8 min read",
    imageUrl: "/pictures/henrique-ferreira-omiTbS-nb_M-unsplash.jpg",
  },
  // 12, Article
  {
    title: "Pilates vs Yoga: Key Differences",
    excerpt: "A clear, honest comparison of two of the world's most popular movement practices: how they differ in method, intent, and outcome, and how to decide which is right for you.",
    href: "/blog/pilates-vs-yoga",
    category: "Method",
    readTime: "7 min read",
    imageUrl: "/pictures/mathilde-langevin-aBJ3A-2LJyU-unsplash.jpg",
  },
  // 13, Product
  {
    title: "Best Pilates Mat (2026): Firmness, Grip & Durability",
    excerpt: "The mat is your most important equipment purchase. We compared five across firmness, grip, and spinal feedback, from the Manduka PRO to travel-friendly options under $40.",
    href: "/blog/best-pilates-mat",
    category: "Best For · Equipment",
    readTime: "9 min read",
    imageUrl: "/pictures/dane-wetton-t1NEMSm1rgI-unsplash.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0000DZFXZ?tag=pilatescollective-20",
    affiliateLabel: "Shop Our Top Pick →",
  },
  // 14, City
  {
    title: "The Best Pilates Studios in Tokyo",
    excerpt: "From Minami-Aoyama's precision reformer studios to Daikanyama's boutique movement spaces: the definitive guide to Tokyo's most respected Pilates studios.",
    href: "/cities/tokyo",
    category: "City Guide",
    readTime: "8 min read",
    imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1400&q=80",
  },
  // 15, Product
  {
    title: "Best Premium Pilates Reformers (2026): $2K–$5K+",
    excerpt: "Merrithew V2 Max, Balanced Body Studio Reformer, and Gratz Maple Classic compared side by side. Which professional-grade machine is worth the investment?",
    href: "/blog/best-premium-pilates-reformer",
    category: "Best For · Home Studio",
    readTime: "12 min read",
    imageUrl: "/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B004FGT0TM?tag=pilatescollective-20",
    affiliateLabel: "Shop Our Top Pick →",
  },
  // 16, Product
  {
    title: "Best Pilates Magic Circle (2026): Ranked",
    excerpt: "Joseph Pilates invented it. We compared five versions, from STOTT to Balanced Body, for resistance feel, pad quality, and durability across 30 sessions of inner thigh and arm work.",
    href: "/blog/best-pilates-ring",
    category: "Best For · Equipment",
    readTime: "8 min read",
    imageUrl: "/pictures/roxana-popovici-5JQxj-zc5ng-unsplash.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B002YQW3IU?tag=pilatescollective-20",
    affiliateLabel: "Shop Our Top Pick →",
  },
];

// Journal cards on the homepage: one from each part of the site rather than a run of city guides.
const GUIDES = [
  { title: "Pilates Essentials (2026): The Complete List", excerpt: "Every Pilates essential on one page: the best, budget and splurge pick for leggings, grip socks, mat, props, recovery and a home reformer.", href: "/blog/pilates-essentials", category: "Equipment", readTime: "14 min read" },
  { title: "The Beginner's Guide to Reformer Pilates", excerpt: "What to expect in your first reformer class, how to choose a studio, and how to progress with confidence.", href: "/blog/beginners-guide-to-reformer-pilates", category: "Beginner Guide", readTime: "8 min read" },
  { title: "Best Home Pilates Reformer (2026): Every Budget", excerpt: "A quality home reformer changes your practice permanently. We compared every price tier so you know exactly what you get.", href: "/blog/best-home-pilates-reformer", category: "Equipment", readTime: "11 min read" },
  { title: "Classical vs Contemporary Pilates", excerpt: "Understanding the key differences between the original method and modern interpretations, and which is right for you.", href: "/blog/classical-vs-contemporary-pilates", category: "Method", readTime: "7 min read" },
  { title: "What to Wear to Pilates (2026)", excerpt: "Instructors need to see your alignment. Here's exactly what works, and what to avoid, for reformer, mat, and barre.", href: "/blog/what-to-wear-to-pilates", category: "Beginners", readTime: "6 min read" },
  { title: "Pilates for Back Pain: What the Research Shows", excerpt: "A clear-eyed look at the evidence: what Pilates can and can't do for chronic back pain, and how to start safely.", href: "/blog/pilates-for-back-pain", category: "Wellness", readTime: "9 min read" },
  { title: "Lagree for Beginners (2026): Your First Class", excerpt: "What a first Lagree class really feels like, the mistakes everyone makes, and the short kit worth buying.", href: "/blog/lagree-for-beginners", category: "Lagree", readTime: "11 min read" },
  { title: "How Much Does a Pilates Reformer Cost? (2026): Every Price Tier Explained", excerpt: "Every price tier from $299 to $12,000+: what you actually get at each level and the real total cost of ownership.", href: "/blog/how-much-does-a-pilates-reformer-cost", category: "Guide", readTime: "10 min read" },
  { title: "Best Pilates Reformer Brands (2026): Compared Honestly", excerpt: "Gratz vs Balanced Body vs Merrithew vs Align-Pilates: an honest brand comparison for home users, studio owners, and serious practitioners.", href: "/blog/best-pilates-reformer-brands", category: "Brand Guide", readTime: "12 min read" },
  { title: "The Best Pilates Studios in Zurich", excerpt: "From Seefeld reformer boutiques to lakeside private studios: our complete guide to Zurich's thriving Pilates scene.", href: "/cities/zurich", category: "City Guide", readTime: "8 min read" },
  { title: "The Best Pilates Retreats in Europe", excerpt: "The finest Pilates immersion experiences across the continent, from Provence to Puglia.", href: "/blog/best-pilates-retreats-europe", category: "Travel", readTime: "8 min read" },
  { title: "Pilates for Athletes", excerpt: "How elite sports professionals use Pilates to build functional strength, prevent injury, and extend their careers.", href: "/blog/pilates-for-athletes", category: "Performance", readTime: "7 min read" },
];

// Homepage equipment picks: eight in one grid, ordered from everyday
// essentials to bigger purchases. All were already on the homepage; the full
// range lives in the equipment guides linked under the grid.
const PRODUCT_CATEGORIES = [
  {
    label: "",
    items: [
      {
        name: "toesox Low Rise Full-Toe Grip Socks (2-Pack)",
        description: "Full-toe coverage, seamless construction. Non-negotiable for reformer work: keeps you connected to the foot bar.",
        price: "$30.00",
        affiliateUrl: "https://www.amazon.com/dp/B07QHNDHW3?tag=pilatescollective-20",
        imageUrl: "/pictures/jade-stephens-N21356amsyw-unsplash.jpg",
      },
      {
        name: "Manduka PRO Yoga & Pilates Mat (6mm)",
        description: "A dense 6mm mat built for lifetime durability, per Manduka. The reliable foundation of any home practice.",
        price: "$144.00",
        affiliateUrl: "https://www.amazon.com/dp/B0066T7I54?tag=pilatescollective-20",
        imageUrl: "/pictures/esma-eserghep-NUQi80iMLrI-unsplash.jpg",
      },
      {
        name: "Balanced Body Ultra-Fit Circle (15-inch)",
        description: "The original Pilates prop. Firm but flexible resistance, dual foam handles. Essential for inner thigh and arm work.",
        price: "$35.00",
        affiliateUrl: "https://www.amazon.com/dp/B002YQW3IU?tag=pilatescollective-20",
        imageUrl: "/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg",
      },
      {
        name: "Bala Bangles (1 lb)",
        description: "Bala Bangles (1 lb each) are a boutique studio favorite that wrap on at the wrist or ankle.",
        price: "$55.00",
        affiliateUrl: "https://www.amazon.com/dp/B09SNTB8DF?tag=pilatescollective-20",
        imageUrl: "/pictures/jade-stephens-N21356amsyw-unsplash.jpg",
      },
      {
        name: "OPTP PRO-Roller Foam Roller (36-inch)",
        description: "A full 36 x 6 inch roller for spinal work along the whole back. Doubles as a myofascial release tool and balance prop.",
        price: "$62.99",
        affiliateUrl: "https://www.amazon.com/dp/B002C9EX14?tag=pilatescollective-20",
        imageUrl: "/pictures/henrique-ferreira-omiTbS-nb_M-unsplash.jpg",
      },
      {
        name: "Lululemon Align High-Rise Pant 25-inch",
        description: "High-rise leggings with a flat waistband and a hidden key pocket. A reformer-studio favorite. Sold on Amazon by a reseller, not by Lululemon.",
        price: "$98.00",
        affiliateUrl: "https://www.amazon.com/dp/B08M8ZTKJS?tag=pilatescollective-20",
        imageUrl: "/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg",
      },
      {
        name: "Stamina AeroPilates 287 Reformer",
        description: "AeroPilates' compact home reformer with cord resistance, a padded footbar and an adjustable headrest. An accessible entry point to home reformer work.",
        price: "$349.99",
        affiliateUrl: "https://www.amazon.com/dp/B01FMODVAE?tag=pilatescollective-20",
        imageUrl: "/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg",
      },
      {
        name: "Balanced Body Allegro Stretch Reformer",
        description: "The long version of Balanced Body's aluminum Allegro: a wider, longer carriage and an 18-inch-longer frame for taller users, with five Signature Springs. Made to order.",
        price: "$3,710.00",
        affiliateUrl: "https://www.amazon.com/dp/B093R8DYC9?tag=pilatescollective-20",
        imageUrl: "/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg",
      },
    ],
  },
];

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://pilatescollectiveclub.com/#webpage",
      "url": "https://pilatescollectiveclub.com",
      "name": "Pilates Collective Club: Find Your Studio. Know Your Method.",
      "description": "Curated city guides, expert studio recommendations, and equipment picks for Pilates practitioners worldwide.",
      "isPartOf": { "@id": "https://pilatescollectiveclub.com/#website" },
      "about": { "@id": "https://pilatescollectiveclub.com/#organization" },
      "inLanguage": "en-US",
    },
    {
      "@type": "ItemList",
      "name": "Featured Pilates Articles",
      "url": "https://pilatescollectiveclub.com",
      "numberOfItems": 8,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "url": "https://pilatescollectiveclub.com/cities/zurich", "name": "The Best Pilates Studios in Zurich" },
        { "@type": "ListItem", "position": 2, "url": "https://pilatescollectiveclub.com/blog/beginners-guide-to-reformer-pilates", "name": "The Beginner's Guide to Reformer Pilates" },
        { "@type": "ListItem", "position": 3, "url": "https://pilatescollectiveclub.com/blog/pilates-for-back-pain", "name": "Pilates for Back Pain: What the Research Shows" },
        { "@type": "ListItem", "position": 4, "url": "https://pilatescollectiveclub.com/blog/classical-vs-contemporary-pilates", "name": "Classical vs Contemporary Pilates" },
        { "@type": "ListItem", "position": 5, "url": "https://pilatescollectiveclub.com/blog/best-pilates-equipment-for-home-practice", "name": "Best Pilates Equipment for Home Practice" },
        { "@type": "ListItem", "position": 6, "url": "https://pilatescollectiveclub.com/blog/pilates-vs-yoga", "name": "Pilates vs Yoga: Key Differences" },
        { "@type": "ListItem", "position": 7, "url": "https://pilatescollectiveclub.com/blog/best-pilates-retreats-europe", "name": "The Best Pilates Retreats in Europe" },
        { "@type": "ListItem", "position": 8, "url": "https://pilatescollectiveclub.com/blog/pilates-for-athletes", "name": "Pilates for Athletes" },
      ],
    },
  ],
};

// Marquee rows above the city cards: the same cities, three rows, each name linking to its guide.
const MARQUEE_ROWS = [0, 1, 2].map((r) => CITIES.filter((_, i) => i % 3 === r).map((c) => ({ label: c.city, href: c.href })));

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(homeJsonLd) }} />
      <Header />
      <main>

        {/* Hero */}
        <section className="r-hero">
          {/* Full-bleed background image, fading into the page on the left */}
          <div className="r-hero-bg">
            <Image
              src="/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg"
              alt="Pilates studio"
              fill
              sizes="100vw"
              preload
            />
          </div>

          <div className="r-wrap r-hero-in">
            <div className="r-hero-eyebrow">
              <p className="r-sm">Pilates Collective Club</p>
            </div>

            <h1 className="r-d">
              <span><b>From the</b></span>
              <span><b>powerhouse,</b></span>
              <span><b><em className="r-gold">everything follows.</em></b></span>
            </h1>

            <div className="r-hero-row">
              <p>
                Curated studio guides, editorial reviews, and the best in Pilates equipment, built for the global Pilates community.
              </p>
              <div className="r-hero-ctas">
                <Link href="/blog" className="r-btn">
                  Read the Journal
                </Link>
                <Link href="/#cities" className="r-btn r-btn-o">
                  Browse Studios
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll cue */}
          <p className="r-sm r-hero-cue">Scroll</p>
        </section>

        {/* Featured Story */}
        <FeaturedRotator items={FEATURED_ITEMS} lead={<p>Featured</p>} />

        {/* Equipment */}
        <section id="equipment" className="r-s r-s-flush">
          <div className="r-wrap">
            <Reveal className="r-hd">
              <div>
                <p className="r-sm">Equipment</p>
                <h2 className="r-d">
                  Editor&apos;s essentials
                </h2>
              </div>
              <p className="r-sm">
                Carefully selected. Available on Amazon.
              </p>
            </Reveal>
            <AffiliateNote className="mb-8" />

            {PRODUCT_CATEGORIES.map((cat) => (
              <div key={cat.label} className="r-eg-group">
                {cat.label && <p className="r-eg-label">{cat.label}</p>}
                <div className="r-eg">
                  {cat.items.map((p) => (
                    <ProductCard key={p.name} {...p} />
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-10">
              <Link href="/blog?category=Equipment" className="r-btn r-btn-o">
                All equipment guides
              </Link>
            </div>
          </div>
        </section>

        {/* City Guides */}
        <section id="cities" className="r-s r-s-flush">
          <div className="r-wrap">
            <Reveal className="r-hd">
              <div>
                <p className="r-sm">City Guides</p>
                <h2 className="r-d">
                  Studio guides by city
                </h2>
              </div>
              <Link href="/cities" className="r-btn">
                All cities
              </Link>
            </Reveal>
          </div>

          <Marquee rows={MARQUEE_ROWS} />

          <div className="r-wrap">
            <div className="r-cities">
              {CITIES.map((c) => (
                <CityCard key={c.city} {...c} />
              ))}
            </div>
          </div>
        </section>

        {/* Journal */}
        <section className="r-s r-s-flush">
          <div className="r-wrap">
            <Reveal className="r-hd">
              <div>
                <p className="r-sm">Editorial</p>
                <h2 className="r-d">
                  Journal
                </h2>
              </div>
              <Link href="/blog" className="r-btn">
                All articles
              </Link>
            </Reveal>

            <div className="r-more">
              {GUIDES.map((g) => (
                <ArticleCard key={g.href} {...g} />
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="r-s r-ab">
          <div className="r-wrap">
            <p className="r-sm">About</p>
            <h2 className="r-d">
              The independent guide<br />for serious practitioners.
            </h2>
            <WordFill
              className="r-fill"
              text="Pilates Collective Club is an editorially independent platform built for the global Pilates community. We research studios, review equipment, and document the method, so you spend less time searching and more time on the carriage."
            />
            <p className="r-ab-note">
              Every studio guide is independently researched. Every equipment pick is selected on merit. We are never paid to feature a studio, and we are transparent about the affiliate links that keep this resource free.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
