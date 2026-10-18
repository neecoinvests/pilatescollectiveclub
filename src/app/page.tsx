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

export const metadata: Metadata = {
  title: "Pilates Collective Club — Find the Best Pilates Studios Worldwide",
  description: "Curated city guides, studio reviews, and equipment picks for Pilates practitioners. Find the best reformer studios in London, New York, Paris, Zurich and beyond.",
  keywords: ["best pilates studios", "pilates studios near me", "reformer pilates studios", "pilates city guides", "pilates london", "pilates new york", "pilates paris", "pilates zurich", "find pilates studio", "pilates class near me", "best reformer pilates", "pilates studio guide"],
  openGraph: {
    title: "Pilates Collective Club — Find Your Studio. Know Your Method.",
    description: "Curated city guides and expert studio recommendations for Pilates practitioners worldwide. Find the best reformer studios in London, New York, Paris, Zurich and more.",
    type: "website",
    url: "https://pilatescollectiveclub.com",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/roxana-popovici-2QeonB1SdQk-unsplash.jpg", width: 1200, height: 630, alt: "Pilates Collective Club — curated studio guides and equipment picks for Pilates practitioners" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilates Collective Club — Find Your Studio. Know Your Method.",
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
  // 1 — Product
  {
    title: "Best Pilates Reformer Under $1,000 (2026): Honest Reviews",
    excerpt: "The best mid-range reformers compared honestly — AeroPilates, Stamina, and Merrithew entry-level machines ranked by resistance quality, build, and long-term value.",
    href: "/blog/best-pilates-reformer-under-1000",
    category: "Best For · Equipment",
    readTime: "10 min read",
    imageUrl: "/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B01FMODVAE?tag=pilatescollective-20",
    affiliateLabel: "Shop Our Top Pick →",
  },
  // 2 — City
  {
    title: "The Best Pilates Studios in London",
    excerpt: "From Heartcore in Kensington to Ten Health in Shoreditch — our complete guide to London's most respected reformer studios. Every studio compared on format, price and reviews.",
    href: "/cities/london",
    category: "City Guide",
    readTime: "8 min read",
    imageUrl: "/pictures/roxana-popovici-2QeonB1SdQk-unsplash.jpg",
  },
  // 3 — Article
  {
    title: "The Beginner's Guide to Reformer Pilates",
    excerpt: "What to expect in your first reformer class, how to choose a studio, and how to progress with confidence. Everything a new practitioner needs to know before stepping on the carriage.",
    href: "/blog/beginners-guide-to-reformer-pilates",
    category: "Beginner Guide",
    readTime: "8 min read",
    imageUrl: "/pictures/esma-eserghep-NUQi80iMLrI-unsplash.jpg",
  },
  // 4 — Product
  {
    title: "Best Home Pilates Reformer (2026): Every Budget",
    excerpt: "A quality home reformer changes your practice permanently. We compared every price tier — from the AeroPilates 435 to the Gratz — so you know exactly what you get at each level.",
    href: "/blog/best-home-pilates-reformer",
    category: "Best For · Equipment",
    readTime: "11 min read",
    imageUrl: "/pictures/samantha-sheppard-b8Q5fHBsyik-unsplash.jpg",
  },
  // 5 — City
  {
    title: "The Best Pilates Studios in New York",
    excerpt: "From Tribeca's classical powerhouses to the Upper East Side's boutique reformer rooms — the definitive guide to New York's five best Pilates studios, verified for 2026.",
    href: "/cities/new-york",
    category: "City Guide",
    readTime: "9 min read",
    imageUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1400&q=80",
  },
  // 6 — Article
  {
    title: "Classical vs Contemporary Pilates",
    excerpt: "The split between Joseph Pilates' original Contrology system and modern functional interpretations — what it means for your practice, and how to choose your lineage.",
    href: "/blog/classical-vs-contemporary-pilates",
    category: "Method",
    readTime: "8 min read",
    imageUrl: "/pictures/junseong-lee-G9H5edUL0T8-unsplash.jpg",
  },
  // 7 — Product
  {
    title: "Best Pilates Leggings (2026): Compared & Ranked",
    excerpt: "From Lululemon Align to Splits59 Raquel — the leggings that genuinely serve the method, compared on opacity, waistband stability, and reformer performance across fifteen sessions.",
    href: "/blog/best-pilates-leggings",
    category: "Best For · Equipment",
    readTime: "9 min read",
    imageUrl: "/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B08M8ZTKJS?tag=pilatescollective-20",
    affiliateLabel: "Shop Our Top Pick →",
  },
  // 8 — City
  {
    title: "The Best Pilates Studios in Paris",
    excerpt: "From the Marais to Saint-Germain — Paris has quietly built one of the most sophisticated Pilates scenes in Europe. Our curated guide to the five studios worth your time.",
    href: "/cities/paris",
    category: "City Guide",
    readTime: "8 min read",
    imageUrl: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=1400&q=80",
  },
  // 9 — Article
  {
    title: "Pilates for Back Pain: What the Research Shows",
    excerpt: "Clinical research meets practical guidance. What Pilates can and can't do for chronic lower back pain — and the specific exercises with the strongest evidence behind them.",
    href: "/blog/pilates-for-back-pain",
    category: "Health",
    readTime: "10 min read",
    imageUrl: "/pictures/junseong-lee-AX8cf6mkCzw-unsplash.jpg",
  },
  // 10 — Product
  {
    title: "Best Pilates Grip Socks (2026): Compared & Ranked",
    excerpt: "Required at virtually every reformer studio worldwide. We compared five options across grip, durability, and comfort — from ToeSox to Tavi Noir — so you don't have to.",
    href: "/blog/best-pilates-grip-socks",
    category: "Best For · Equipment",
    readTime: "7 min read",
    imageUrl: "/pictures/jade-stephens-N21356amsyw-unsplash.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B07QHNDHW3?tag=pilatescollective-20",
    affiliateLabel: "Shop Our Top Pick →",
  },
  // 11 — City
  {
    title: "The Best Pilates Studios in Zurich",
    excerpt: "From lakeside private studios to Seefeld reformer boutiques — our complete guide to Zurich's refined, results-driven Pilates scene. Six studios worth your time.",
    href: "/cities/zurich",
    category: "City Guide",
    readTime: "8 min read",
    imageUrl: "/pictures/henrique-ferreira-omiTbS-nb_M-unsplash.jpg",
  },
  // 12 — Article
  {
    title: "Pilates vs Yoga: Key Differences",
    excerpt: "A clear, honest comparison of two of the world's most popular movement practices — how they differ in method, intent, and outcome, and how to decide which is right for you.",
    href: "/blog/pilates-vs-yoga",
    category: "Method",
    readTime: "7 min read",
    imageUrl: "/pictures/mathilde-langevin-aBJ3A-2LJyU-unsplash.jpg",
  },
  // 13 — Product
  {
    title: "Best Pilates Mat (2026): Firmness, Grip & Durability",
    excerpt: "The mat is your most important equipment purchase. We compared five across firmness, grip, and spinal feedback — from the Manduka PRO to travel-friendly options under $40.",
    href: "/blog/best-pilates-mat",
    category: "Best For · Equipment",
    readTime: "9 min read",
    imageUrl: "/pictures/dane-wetton-t1NEMSm1rgI-unsplash.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B0000DZFXZ?tag=pilatescollective-20",
    affiliateLabel: "Shop Our Top Pick →",
  },
  // 14 — City
  {
    title: "The Best Pilates Studios in Tokyo",
    excerpt: "From Minami-Aoyama's precision reformer studios to Daikanyama's boutique movement spaces — the definitive guide to Tokyo's most respected Pilates studios.",
    href: "/cities/tokyo",
    category: "City Guide",
    readTime: "8 min read",
    imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1400&q=80",
  },
  // 15 — Product
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
  // 16 — Product
  {
    title: "Best Pilates Magic Circle (2026): Ranked",
    excerpt: "Joseph Pilates invented it. We compared five versions — from STOTT to Balanced Body — for resistance feel, pad quality, and durability across 30 sessions of inner thigh and arm work.",
    href: "/blog/best-pilates-ring",
    category: "Best For · Equipment",
    readTime: "8 min read",
    imageUrl: "/pictures/roxana-popovici-5JQxj-zc5ng-unsplash.jpg",
    affiliateUrl: "https://www.amazon.com/dp/B002YQW3IU?tag=pilatescollective-20",
    affiliateLabel: "Shop Our Top Pick →",
  },
];

const GUIDES = [
  { title: "The Best Pilates Studios in Tampa, FL", excerpt: "From Hyde Park's upscale reformer studios to Seminole Heights' independent scene — six verified picks across the Tampa Bay area.", href: "/cities/tampa", category: "City Guide", readTime: "9 min read", date: "June 2026" },
  { title: "The Best Pilates Studios in Raleigh, NC", excerpt: "From North Hills classics to Durham's creative movement studios — the definitive Pilates guide for the Research Triangle.", href: "/cities/raleigh", category: "City Guide", readTime: "9 min read", date: "June 2026" },
  { title: "The Best Pilates Studios in Charlotte, NC", excerpt: "From South End's reformer boutiques to Myers Park's classical studios — six verified picks across Charlotte's vibrant Pilates scene.", href: "/cities/charlotte", category: "City Guide", readTime: "9 min read", date: "June 2026" },
  { title: "The Best Pilates Studios in Portland, OR", excerpt: "From the Pearl District's warehouse studios to Lake Oswego's serene spaces — the definitive guide to Portland's best Pilates studios.", href: "/cities/portland", category: "City Guide", readTime: "9 min read", date: "June 2026" },
  { title: "The Best Pilates Studios in Austin, TX", excerpt: "From classical Rosedale studios to community-focused East Austin practices — our complete guide to Austin's growing Pilates scene.", href: "/cities/austin", category: "City Guide", readTime: "9 min read", date: "June 2026" },
  { title: "The Best Pilates Studios in Washington DC", excerpt: "From Georgetown's classical depth to Arlington's professional reformer rooms — six verified picks across the DC metro area.", href: "/cities/washington-dc", category: "City Guide", readTime: "9 min read", date: "June 2026" },
  { title: "The Best Pilates Studios in Dallas, TX", excerpt: "From Highland Park classical studios to Deep Ellum's movement-forward independents — the definitive guide to Dallas's best Pilates studios.", href: "/cities/dallas", category: "City Guide", readTime: "9 min read", date: "June 2026" },
  { title: "The Best Pilates Studios in Philadelphia, PA", excerpt: "From Rittenhouse Square's classical practices to Fishtown's community-oriented studios — six verified picks across Philadelphia.", href: "/cities/philadelphia", category: "City Guide", readTime: "9 min read", date: "June 2026" },
  { title: "The Best Pilates Studios in Zurich", excerpt: "From Seefeld reformer boutiques to lakeside private studios — our complete guide to Zurich's thriving Pilates scene.", href: "/cities/zurich", category: "City Guide", readTime: "8 min read", date: "May 2026" },
  { title: "The Beginner's Guide to Reformer Pilates", excerpt: "What to expect in your first reformer class, how to choose a studio, and how to progress with confidence.", href: "/blog/beginners-guide-to-reformer-pilates", category: "Beginner Guide", readTime: "8 min read", date: "May 2026" },
  { title: "Pilates for Back Pain: What the Research Shows", excerpt: "A clear-eyed look at the evidence — what Pilates can and can't do for chronic back pain, and how to start safely.", href: "/blog/pilates-for-back-pain", category: "Wellness", readTime: "9 min read", date: "May 2026" },
  { title: "Classical vs Contemporary Pilates", excerpt: "Understanding the key differences between the original method and modern interpretations — and which is right for you.", href: "/blog/classical-vs-contemporary-pilates", category: "Method", readTime: "7 min read", date: "May 2026" },
  { title: "Best Pilates Equipment for Home Practice", excerpt: "Everything you actually need to build a consistent home practice, from a quality mat to the best reformer alternatives.", href: "/blog/best-pilates-equipment-for-home-practice", category: "Equipment", readTime: "10 min read", date: "May 2026" },
  { title: "Pilates vs Yoga: Key Differences", excerpt: "A clear, honest comparison of two of the world's most popular movement practices — and how to decide between them.", href: "/blog/pilates-vs-yoga", category: "Method", readTime: "7 min read", date: "May 2026" },
  { title: "The Best Pilates Retreats in Europe", excerpt: "The finest Pilates immersion experiences across the continent, from Provence to Puglia.", href: "/blog/best-pilates-retreats-europe", category: "Travel", readTime: "8 min read", date: "May 2026" },
  { title: "Pilates for Athletes", excerpt: "How elite sports professionals use Pilates to build functional strength, prevent injury, and extend their careers.", href: "/blog/pilates-for-athletes", category: "Performance", readTime: "7 min read", date: "May 2026" },
];

const PRODUCT_CATEGORIES = [
  {
    label: "Studio Essentials",
    items: [
      {
        name: "Manduka PRO Yoga & Pilates Mat (6mm)",
        description: "A dense 6mm mat built for lifetime durability, per Manduka. The reliable foundation of any home practice.",
        price: "$144.00",
        affiliateUrl: "https://www.amazon.com/dp/B0066T7I54?tag=pilatescollective-20",
        imageUrl: "/pictures/esma-eserghep-NUQi80iMLrI-unsplash.jpg",
      },
      {
        name: "toesox Low Rise Full-Toe Grip Socks (2-Pack)",
        description: "Full-toe coverage, seamless construction. Non-negotiable for reformer work — keeps you connected to the foot bar.",
        price: "$30.00",
        affiliateUrl: "https://www.amazon.com/dp/B07QHNDHW3?tag=pilatescollective-20",
        imageUrl: "/pictures/jade-stephens-N21356amsyw-unsplash.jpg",
      },
      {
        name: "Balanced Body Ultra-Fit Circle (15-inch)",
        description: "The original Pilates prop. Firm but flexible resistance, dual foam handles. Essential for inner thigh and arm work.",
        price: "$35.00",
        affiliateUrl: "https://www.amazon.com/dp/B002YQW3IU?tag=pilatescollective-20",
        imageUrl: "/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg",
      },
      {
        name: "OPTP PRO-Roller Foam Roller (36-inch)",
        description: "A full 36 x 6 inch roller for spinal work along the whole back. Doubles as a myofascial release tool and balance prop.",
        price: "$62.99",
        affiliateUrl: "https://www.amazon.com/dp/B002C9EX14?tag=pilatescollective-20",
        imageUrl: "/pictures/henrique-ferreira-omiTbS-nb_M-unsplash.jpg",
      },
      {
        name: "Manduka Cork Yoga Block",
        description: "Firm cork support for seated modifications, spinal extension work, and elevated footwork. More stable than foam, better grip under load.",
        price: "$26.00",
        affiliateUrl: "https://www.amazon.com/dp/B000VUAGAS?tag=pilatescollective-20",
        imageUrl: "/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg",
      },
      {
        name: "Tune Up Fitness Therapy Balls (in Tote)",
        description: "A pair of grippy therapy balls in a tote, for targeted myofascial release on the feet, glutes and upper back between sessions.",
        price: "$19.99",
        affiliateUrl: "https://www.amazon.com/dp/B00ERFBX9G?tag=pilatescollective-20",
        imageUrl: "/pictures/ahmet-kurt-a1IhqqW8JQE-unsplash.jpg",
      },
    ],
  },
  {
    label: "Props & Resistance",
    items: [
      {
        name: "THERABAND Mini Ball (9-inch)",
        description: "The 9-inch ball transforms mat work entirely. Adds tactile feedback, precise cueing, and progressive resistance to dozens of exercises.",
        price: "$14.45",
        affiliateUrl: "https://www.amazon.com/dp/B008DIFJT8?tag=pilatescollective-20",
        imageUrl: "/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg",
      },
      {
        name: "Arena Strength Fabric Glute Bands (3-Pack)",
        description: "Fabric-wrapped loops in three resistance levels. Versatile, portable, and far more useful than basic latex therabands.",
        price: "$29.00",
        affiliateUrl: "https://www.amazon.com/dp/B07VYK14JC?tag=pilatescollective-20",
        imageUrl: "/pictures/junseong-lee-AX8cf6mkCzw-unsplash.jpg",
      },
      {
        name: "Bala Bangles (1 lb)",
        description: "1 lb each. Adds load to the leg circle series, standing footwork, and arabesque variations.",
        price: "$55.00",
        affiliateUrl: "https://www.amazon.com/dp/B09SNTB8DF?tag=pilatescollective-20",
        imageUrl: "/pictures/juls-p-lB6lbkbe1XA-unsplash.jpg",
      },
      {
        name: "Stability Ball (55cm)",
        description: "For practitioners 5'1\" to 5'7\". Ideal for spinal rolling, seated balance work, and open-chain leg exercises.",
        price: "From $28",
        affiliateUrl: "https://www.amazon.com/s?k=pilates+exercise+stability+ball+55cm&tag=pilatescollective-20",
        imageUrl: "/pictures/dane-wetton-t1NEMSm1rgI-unsplash.jpg",
      },
      {
        name: "Theraband Flexbar",
        description: "For grip strength and wrist rehabilitation. Increasingly used in Pilates for hand and forearm conditioning in reformer prep work.",
        price: "$18.80",
        affiliateUrl: "https://www.amazon.com/dp/B00066D6K4?tag=pilatescollective-20",
        imageUrl: "/pictures/samantha-sheppard-b8Q5fHBsyik-unsplash.jpg",
      },
      {
        name: "StrongTek Yoga Wedge Blocks (2-Pack)",
        description: "Slanted foam support for wrist protection during planks and push-ups. Reduces extension load — essential for practitioners with wrist sensitivity.",
        price: "$29.95",
        affiliateUrl: "https://www.amazon.com/dp/B07BGQZVWK?tag=pilatescollective-20",
        imageUrl: "/pictures/roxana-popovici-5JQxj-zc5ng-unsplash.jpg",
      },
      {
        name: "Long Resistance Band",
        description: "2-metre looped band in light, medium, and heavy. Essential for the arm series, footwork variations, and full-body stretching sequences.",
        price: "From $12",
        affiliateUrl: "https://www.amazon.com/s?k=long+resistance+band+set+pilates+exercise&tag=pilatescollective-20",
        imageUrl: "/pictures/elena-kloppenburg-erUC4fTtCuo-unsplash.jpg",
      },
      {
        name: "SISSEL Pilates Toning Balls (2 x 1 lb)",
        description: "Weighted soft-grip balls (1 lb each) for arm, shoulder, and standing balance work. Adds meaningful load without disrupting the Pilates flow.",
        price: "$26.89",
        affiliateUrl: "https://www.amazon.com/dp/B005LD3M9W?tag=pilatescollective-20",
        imageUrl: "/pictures/roxana-popovici-Zp4APUiwEsM-unsplash.jpg",
      },
    ],
  },
  {
    label: "Home Studio",
    items: [
      {
        name: "Stamina AeroPilates 287 Reformer",
        description: "AeroPilates' compact home reformer with cord resistance, a padded footbar and an adjustable headrest. An accessible entry point to home reformer work.",
        price: "$359.00",
        affiliateUrl: "https://www.amazon.com/dp/B01FMODVAE?tag=pilatescollective-20",
        imageUrl: "/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg",
      },
      {
        name: "PAETA Wooden Ladder Barrel",
        description: "The ladder barrel is the gateway to spinal articulation work that can't be replicated on a mat. A considered home studio investment.",
        price: "$379.99",
        affiliateUrl: "https://www.amazon.com/dp/B0DF2JZ4FG?tag=pilatescollective-20",
        imageUrl: "/pictures/roxana-popovici-hiHBILFNah4-unsplash.jpg",
      },
      {
        name: "Yes4All Pilates Spine Corrector",
        description: "A foldable spine corrector for spinal extension and chest opening, compact enough for most home spaces.",
        price: "$116.74",
        affiliateUrl: "https://www.amazon.com/dp/B0CK253K55?tag=pilatescollective-20",
        imageUrl: "/pictures/logan-weaver-lgnwvr-u76Gd0hP5w4-unsplash.jpg",
      },
      {
        name: "AeroPilates Precision Pilates Chair",
        description: "Joseph Pilates' most underrated invention. Challenges every plane of movement in a compact footprint — ideal for a serious home practice.",
        price: "$449.00",
        affiliateUrl: "https://www.amazon.com/dp/B07YVYLZZ2?tag=pilatescollective-20",
        imageUrl: "/pictures/mathilde-langevin-aBJ3A-2LJyU-unsplash.jpg",
      },
      {
        name: "Balanced Body Pilates Arc",
        description: "The arc is the most compact barrel available — ideal for spinal extension, hip flexor opening, and side-lying work in smaller spaces.",
        price: "$189.99",
        affiliateUrl: "https://www.amazon.com/dp/B002XVSNRG?tag=pilatescollective-20",
        imageUrl: "/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg",
      },
      {
        name: "Balanced Body Padded Jumpboard (Allegro 2)",
        description: "Balanced Body's padded jumpboard for the Allegro 2 reformer. Adds low-impact jumping sequences for cardio.",
        price: "$350.00",
        affiliateUrl: "https://www.amazon.com/dp/B008Z3NREA?tag=pilatescollective-20",
        imageUrl: "/pictures/ahmet-kurt-0xn-8kRWOhE-unsplash.jpg",
      },
      {
        name: "Balanced Body CoreAlign",
        description: "The CoreAlign targets functional upright movement — standing balance, gait, and dynamic core stability — in ways the reformer alone cannot replicate. Not sold on Amazon: this link goes to Balanced Body's own site.",
        price: "From $1,200",
        affiliateUrl: "https://www.pilates.com",
        imageUrl: "/pictures/roxana-popovici-hiHBILFNah4-unsplash.jpg",
      },
      {
        name: "Balanced Body Trapeze Table (Cadillac)",
        description: "The full Cadillac apparatus — or a reformer tower conversion — opens the complete classical repertoire. The most comprehensive piece of Pilates equipment available.",
        price: "$5,030.00",
        affiliateUrl: "https://www.amazon.com/dp/B01N5OIH13?tag=pilatescollective-20",
        imageUrl: "/pictures/samantha-sheppard-b8Q5fHBsyik-unsplash.jpg",
      },
      {
        name: "Balanced Body Sitting Box Lite",
        description: "Balanced Body's lightweight sitting box for long box and short box work, the accessory that expands the reformer repertoire most.",
        price: "$150.00",
        affiliateUrl: "https://www.amazon.com/dp/B0723DT2JP?tag=pilatescollective-20",
        imageUrl: "/pictures/elena-kloppenburg-erUC4fTtCuo-unsplash.jpg",
      },
    ],
  },
  {
    label: "Apparel",
    items: [
      {
        name: "Lululemon Align High-Rise Pant 25-inch",
        description: "High-rise leggings with a flat waistband and a hidden key pocket. A reformer-studio favourite. Sold on Amazon by a reseller, not by Lululemon.",
        price: "$98.00",
        affiliateUrl: "https://www.amazon.com/dp/B08M8ZTKJS?tag=pilatescollective-20",
        imageUrl: "/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg",
      },
      {
        name: "Beyond Yoga Spacedye Lift Your Spirits Bra",
        description: "Medium-support bra with removable pads in Beyond Yoga's soft Spacedye fabric. Keeps the instructor's sightlines clear.",
        price: "$68.00",
        affiliateUrl: "https://www.amazon.com/dp/B07HRVHSST?tag=pilatescollective-20",
        imageUrl: "/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg",
      },
      {
        name: "CRZ YOGA Butterluxe Biker Shorts (6-inch)",
        description: "5–6 inch inseam biker shorts let instructors see your knee tracking clearly. The Lululemon Align Short and Alo Airbrush are the studio standards.",
        price: "$24.00",
        affiliateUrl: "https://www.amazon.com/dp/B0B287V65J?tag=pilatescollective-20",
        imageUrl: "/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg",
      },
      {
        name: "Bala Bangles (1 lb)",
        description: "Bala Bangles (1 lb each) are a boutique studio favourite that wrap on at the wrist or ankle.",
        price: "$55.00",
        affiliateUrl: "https://www.amazon.com/dp/B09SNTB8DF?tag=pilatescollective-20",
        imageUrl: "/pictures/jade-stephens-N21356amsyw-unsplash.jpg",
      },
    ],
  },
  {
    label: "Premium Reformers",
    items: [
      {
        name: "Merrithew SPX Max",
        description: "The professional studio standard used in accredited training centres worldwide. Full 5-spring system, 97-inch rail, 350 lb capacity. The entry point to serious home practice. Not sold on Amazon: this link goes to Merrithew's own site.",
        price: "Sold direct",
        affiliateUrl: "https://www.merrithew.com",
        imageUrl: "/pictures/esma-eserghep-NUQi80iMLrI-unsplash.jpg",
      },
      {
        name: "Balanced Body Allegro Stretch Reformer",
        description: "The long version of Balanced Body's aluminium Allegro: a wider, longer carriage and an 18-inch-longer frame for taller users, with five Signature Springs. Made to order.",
        price: "$3,710.00",
        affiliateUrl: "https://www.amazon.com/dp/B093R8DYC9?tag=pilatescollective-20",
        imageUrl: "/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg",
      },
      {
        name: "Merrithew Rehab V2 Max Plus Reformer",
        description: "Merrithew's raised-frame reformer for clinics and serious home studios, with the Vertical Frame for tower-style work. Made to order.",
        price: "$8,199.00",
        affiliateUrl: "https://www.amazon.com/dp/B002ABYKFI?tag=pilatescollective-20",
        imageUrl: "/pictures/samantha-sheppard-b8Q5fHBsyik-unsplash.jpg",
      },
      {
        name: "Gratz Universal Reformer",
        description: "The original. Built since 1965 under Joseph Pilates' direction, handmade in New York. Four springs, 3-gear bar, unchanged in six decades. $4,590–$5,295.",
        price: "From $4,590",
        affiliateUrl: "https://www.gratzpilates.com/collections/reformers",
        imageUrl: "/pictures/roxana-popovici-cZ0WYsBFHhs-unsplash.jpg",
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
      "name": "Pilates Collective Club — Find Your Studio. Know Your Method.",
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

const label = {
  fontFamily: "var(--font-sans)",
  fontSize: "10px",
  fontWeight: 500,
  letterSpacing: "0.25em",
  textTransform: "uppercase" as const,
  color: "#9a9490",
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(homeJsonLd) }} />
      <Header />
      <main>

        {/* Hero */}
        <section className="pcc-hero" style={{
          position: "relative",
          height: "100svh",
          minHeight: "520px",
          maxHeight: "1000px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}>
          {/* Full-bleed background image */}
          <Image
            src="/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg"
            alt="Pilates studio"
            fill
            style={{ objectFit: "cover", objectPosition: "center 20%" }}
            priority
          />
          {/* Cinematic gradient overlay — dark at bottom for legibility */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(8,8,8,0.90) 0%, rgba(8,8,8,0.45) 45%, rgba(8,8,8,0.10) 100%)",
          }} />
          {/* Top bar — logo label */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            padding: "32px 52px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 2,
          }}>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "0.22em",
              textTransform: "uppercase" as const,
              color: "rgba(255,255,255,0.55)",
              margin: 0,
            }}>
              Pilates Collective Club
            </p>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "10px",
              fontWeight: 400,
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
              color: "rgba(255,255,255,0.35)",
              margin: 0,
            }}>
              Est. 2026
            </p>
          </div>

          {/* Main content — pinned to bottom */}
          <div className="pcc-hero-content" style={{
            position: "relative",
            zIndex: 2,
            padding: "0 52px 64px",
            maxWidth: "1300px",
            width: "100%",
          }}>
            {/* Thin gold rule */}
            <div style={{ width: "48px", height: "1px", backgroundColor: "#c5a882", marginBottom: "28px" }} />

            <h1 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(48px, 7.5vw, 112px)",
              fontWeight: 300,
              lineHeight: 0.98,
              color: "#ffffff",
              letterSpacing: "-0.02em",
              marginBottom: "36px",
              maxWidth: "780px",
            }}>
              From the<br />
              powerhouse,<br />
              <em style={{ color: "#c5a882" }}>everything follows.</em>
            </h1>

            <div style={{ display: "flex", alignItems: "center", gap: "32px", flexWrap: "wrap" }}>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                fontWeight: 300,
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.7,
                maxWidth: "380px",
                margin: 0,
                letterSpacing: "0.01em",
              }}>
                Curated studio guides, editorial reviews, and the best in Pilates equipment — built for the global Pilates community.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/blog" style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "10px",
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase" as const,
                  color: "#0a0a0a",
                  textDecoration: "none",
                  backgroundColor: "#ffffff",
                  padding: "13px 26px",
                  display: "inline-block",
                  boxSizing: "border-box" as const,
                  whiteSpace: "nowrap",
                }}>
                  Read the Journal
                </Link>
                <Link href="/#cities" style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "10px",
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase" as const,
                  color: "#ffffff",
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.4)",
                  padding: "13px 26px",
                  display: "inline-block",
                  boxSizing: "border-box" as const,
                  whiteSpace: "nowrap",
                }}>
                  Browse Studios
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll cue */}
          <div style={{
            position: "absolute",
            bottom: "36px",
            right: "52px",
            zIndex: 2,
            display: "flex",
            flexDirection: "column" as const,
            alignItems: "center",
            gap: "8px",
          }}>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "9px",
              fontWeight: 400,
              letterSpacing: "0.2em",
              textTransform: "uppercase" as const,
              color: "rgba(255,255,255,0.3)",
              margin: 0,
              writingMode: "vertical-rl" as const,
            }}>Scroll</p>
            <div style={{ width: "1px", height: "40px", backgroundColor: "rgba(255,255,255,0.2)" }} />
          </div>
        </section>

        <div className="pcc-divider" style={{ height: "1px", backgroundColor: "#ede9e3", margin: "0 40px" }} />

        {/* Featured Story */}
        <section className="pcc-hp-section" style={{ padding: "100px 40px", backgroundColor: "#ffffff" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <p style={{ ...label, marginBottom: "40px" }}>Featured</p>
            <FeaturedRotator items={FEATURED_ITEMS} />
          </div>
        </section>

        <div className="pcc-divider" style={{ height: "1px", backgroundColor: "#ede9e3", margin: "0 40px" }} />

        {/* Equipment */}
        <section id="equipment" className="pcc-hp-section" style={{ padding: "100px 40px", backgroundColor: "#f7f4f0" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div className="pcc-section-header" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "64px" }}>
              <div>
                <p style={{ ...label, marginBottom: "12px" }}>Equipment</p>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400, color: "#0a0a0a", margin: 0 }}>
                  Editor&apos;s essentials
                </h2>
              </div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "13px", fontWeight: 300, color: "#9a9490", margin: 0 }}>
                Carefully selected. Available on Amazon.
              </p>
            </div>
            <AffiliateNote className="mb-12 -mt-12" />

            {PRODUCT_CATEGORIES.map((cat, ci) => (
              <div key={cat.label} style={{ marginBottom: ci < PRODUCT_CATEGORIES.length - 1 ? "72px" : 0 }}>
                <p style={{ ...label, marginBottom: "28px", color: "#0a0a0a" }}>{cat.label}</p>
                <div className="pcc-grid-products" style={{ display: "grid", gap: "24px" }}>
                  {cat.items.map((p) => (
                    <ProductCard key={p.name} {...p} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="pcc-divider" style={{ height: "1px", backgroundColor: "#ede9e3", margin: "0 40px" }} />

        {/* City Guides */}
        <section id="cities" className="pcc-hp-section" style={{ padding: "100px 40px", backgroundColor: "#ffffff" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div className="pcc-section-header" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "52px" }}>
              <div>
                <p style={{ ...label, marginBottom: "12px" }}>City Guides</p>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400, color: "#0a0a0a", margin: 0 }}>
                  Studio guides by city
                </h2>
              </div>
              <Link href="/cities" style={{
                fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 500,
                letterSpacing: "0.15em", textTransform: "uppercase", color: "#9a9490",
                textDecoration: "none", borderBottom: "1px solid #9a9490", paddingBottom: "2px",
              }}>
                All cities
              </Link>
            </div>

            <div className="pcc-grid-cities" style={{ display: "grid", gap: "2px" }}>
              {CITIES.map((c) => (
                <CityCard key={c.city} {...c} />
              ))}
            </div>
          </div>
        </section>

        <div className="pcc-divider" style={{ height: "1px", backgroundColor: "#ede9e3", margin: "0 40px" }} />

        {/* Journal */}
        <section className="pcc-hp-section" style={{ padding: "100px 40px", backgroundColor: "#ffffff" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div className="pcc-section-header" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "8px" }}>
              <div>
                <p style={{ ...label, marginBottom: "12px" }}>Editorial</p>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400, color: "#0a0a0a", margin: 0 }}>
                  Journal
                </h2>
              </div>
              <Link href="/blog" style={{
                fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 500,
                letterSpacing: "0.15em", textTransform: "uppercase", color: "#9a9490",
                textDecoration: "none", borderBottom: "1px solid #9a9490", paddingBottom: "2px",
              }}>
                All articles
              </Link>
            </div>

            <div className="pcc-grid-journal" style={{ display: "grid", gap: "0 60px" }}>
              {GUIDES.map((g) => (
                <ArticleCard key={g.href} {...g} />
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="pcc-hp-section" style={{ padding: "120px 40px", backgroundColor: "#ffffff" }}>
          <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
            <p style={{ ...label, marginBottom: "20px" }}>About</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 400, color: "#0a0a0a", marginBottom: "32px", lineHeight: 1.2 }}>
              The independent guide<br />for serious practitioners.
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "15px", fontWeight: 300, color: "#6b6560", lineHeight: 1.85, marginBottom: "20px" }}>
              Pilates Collective Club is an editorially independent platform built for the global Pilates community. We research studios, review equipment, and document the method — so you spend less time searching and more time on the carriage.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "14px", fontWeight: 300, color: "#9a9490", lineHeight: 1.85 }}>
              Every studio guide is independently researched. Every equipment pick is selected on merit. We are never paid to feature a studio — and we are transparent about the affiliate links that keep this resource free.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
