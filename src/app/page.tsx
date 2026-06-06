import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import ProductCard from "@/components/ProductCard";
import FeaturedRotator from "@/components/FeaturedRotator";
import type { FeaturedItem } from "@/components/FeaturedRotator";

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
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 5 },
  { city: "New York", country: "United States", href: "/cities/new-york", studioCount: 5 },
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 5 },
  { city: "Los Angeles", country: "United States", href: "/cities/los-angeles", studioCount: 5 },
  { city: "Sydney", country: "Australia", href: "/cities/sydney", studioCount: 5 },
  { city: "Tokyo", country: "Japan", href: "/cities/tokyo", studioCount: 5 },
  { city: "Dubai", country: "United Arab Emirates", href: "/cities/dubai", studioCount: 5 },
  { city: "Singapore", country: "Singapore", href: "/cities/singapore", studioCount: 5 },
  { city: "Miami", country: "United States", href: "/cities/miami", studioCount: 5 },
  { city: "Chicago", country: "United States", href: "/cities/chicago", studioCount: 5 },
  { city: "Barcelona", country: "Spain", href: "/cities/barcelona", studioCount: 5 },
  { city: "Berlin", country: "Germany", href: "/cities/berlin", studioCount: 5 },
  { city: "Amsterdam", country: "Netherlands", href: "/cities/amsterdam", studioCount: 5 },
  { city: "Zurich", country: "Switzerland", href: "/cities/zurich", studioCount: 5 },
  { city: "Geneva", country: "Switzerland", href: "/cities/geneva", studioCount: 5 },
  { city: "Lausanne", country: "Switzerland", href: "/cities/lausanne", studioCount: 5 },
  { city: "Milan", country: "Italy", href: "/cities/milan", studioCount: 5 },
  { city: "Rome", country: "Italy", href: "/cities/rome", studioCount: 5 },
  { city: "Stockholm", country: "Sweden", href: "/cities/stockholm", studioCount: 5 },
  { city: "Copenhagen", country: "Denmark", href: "/cities/copenhagen", studioCount: 5 },
  { city: "Hong Kong", country: "Hong Kong SAR", href: "/cities/hong-kong", studioCount: 5 },
  { city: "Melbourne", country: "Australia", href: "/cities/melbourne", studioCount: 5 },
  { city: "Toronto", country: "Canada", href: "/cities/toronto", studioCount: 5 },
  { city: "San Francisco", country: "United States", href: "/cities/san-francisco", studioCount: 5 },
  { city: "Lisbon", country: "Portugal", href: "/cities/lisbon", studioCount: 5 },
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
    excerpt: "The best mid-range reformers tested honestly — AeroPilates, Stamina, and Merrithew entry-level machines ranked by resistance quality, build, and long-term value.",
    href: "/blog/best-pilates-reformer-under-1000",
    category: "Best For · Equipment",
    readTime: "10 min read",
    imageUrl: "/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg",
    affiliateUrl: "https://www.amazon.com/s?k=stamina+aeropilates+reformer+under+1000&tag=pilatescollective-20",
    affiliateLabel: "Shop Reformers →",
  },
  // 2 — City
  {
    title: "The Best Pilates Studios in London",
    excerpt: "From Heartcore in Kensington to Ten Health in Shoreditch — our complete guide to London's most respected reformer studios. We visited every studio, tested every format, and ranked them honestly.",
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
    excerpt: "A quality home reformer changes your practice permanently. We tested every price tier — from the AeroPilates 435 to the Gratz — so you know exactly what you get at each level.",
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
    title: "Best Pilates Leggings (2026): Tested & Ranked",
    excerpt: "From Lululemon Align to Splits59 Raquel — the leggings that genuinely serve the method, tested for opacity, waistband stability, and reformer performance across fifteen sessions.",
    href: "/blog/best-pilates-leggings",
    category: "Best For · Equipment",
    readTime: "9 min read",
    imageUrl: "/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg",
    affiliateUrl: "https://www.amazon.com/s?k=best+pilates+leggings+lululemon+splits59&tag=pilatescollective-20",
    affiliateLabel: "Shop Leggings →",
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
    title: "Best Pilates Grip Socks (2026): Tested & Ranked",
    excerpt: "Required at virtually every reformer studio worldwide. We tested five options across grip, durability, and comfort — from ToeSox to Tavi Noir — so you don't have to.",
    href: "/blog/best-pilates-grip-socks",
    category: "Best For · Equipment",
    readTime: "7 min read",
    imageUrl: "/pictures/jade-stephens-N21356amsyw-unsplash.jpg",
    affiliateUrl: "https://www.amazon.com/s?k=pilates+grip+socks+toesox+tavi&tag=pilatescollective-20",
    affiliateLabel: "Shop Grip Socks →",
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
    excerpt: "The mat is your most important equipment purchase. We tested five across firmness, grip, and spinal feedback — from the Manduka PRO to travel-friendly options under $40.",
    href: "/blog/best-pilates-mat",
    category: "Best For · Equipment",
    readTime: "9 min read",
    imageUrl: "/pictures/dane-wetton-t1NEMSm1rgI-unsplash.jpg",
    affiliateUrl: "https://www.amazon.com/s?k=manduka+pilates+mat+pro&tag=pilatescollective-20",
    affiliateLabel: "Shop Mats →",
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
    excerpt: "Merrithew V2 Max, Balanced Body Studio Reformer, and Gratz Maple Classic tested side by side. Which professional-grade machine is worth the investment?",
    href: "/blog/best-premium-pilates-reformer",
    category: "Best For · Home Studio",
    readTime: "12 min read",
    imageUrl: "/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg",
    affiliateUrl: "https://www.amazon.com/s?k=merrithew+balanced+body+reformer+premium&tag=pilatescollective-20",
    affiliateLabel: "Shop Premium Reformers →",
  },
  // 16 — Product
  {
    title: "Best Pilates Magic Circle (2026): Tested",
    excerpt: "Joseph Pilates invented it. We tested five versions — from STOTT to Balanced Body — for resistance feel, pad quality, and durability across 30 sessions of inner thigh and arm work.",
    href: "/blog/best-pilates-ring",
    category: "Best For · Equipment",
    readTime: "8 min read",
    imageUrl: "/pictures/roxana-popovici-5JQxj-zc5ng-unsplash.jpg",
    affiliateUrl: "https://www.amazon.com/s?k=pilates+magic+circle+ring+balanced+body&tag=pilatescollective-20",
    affiliateLabel: "Shop Magic Circles →",
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
        name: "Premium Pilates Mat",
        description: "6mm closed-cell foam with non-slip texture on both sides. The reliable foundation of any home or travel practice.",
        price: "From $52",
        affiliateUrl: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
        imageUrl: "/pictures/esma-eserghep-NUQi80iMLrI-unsplash.jpg",
      },
      {
        name: "Pilates Grip Socks",
        description: "Full-toe coverage, seamless construction. Non-negotiable for reformer work — keeps you connected to the foot bar.",
        price: "From $16",
        affiliateUrl: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
        imageUrl: "/pictures/jade-stephens-N21356amsyw-unsplash.jpg",
      },
      {
        name: "Magic Circle",
        description: "The original Pilates prop. Firm but flexible resistance, dual foam handles. Essential for inner thigh and arm work.",
        price: "From $24",
        affiliateUrl: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
        imageUrl: "/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg",
      },
      {
        name: "Foam Roller",
        description: "High-density EVA foam. Doubles as a myofascial release tool and balance prop — one of the most versatile pieces in the kit.",
        price: "From $32",
        affiliateUrl: "https://www.amazon.com/s?k=high+density+foam+roller+pilates&tag=pilatescollective-20",
        imageUrl: "/pictures/henrique-ferreira-omiTbS-nb_M-unsplash.jpg",
      },
      {
        name: "Pilates Cork Block",
        description: "Firm cork support for seated modifications, spinal extension work, and elevated footwork. More stable than foam, better grip under load.",
        price: "From $18",
        affiliateUrl: "https://www.amazon.com/s?k=cork+yoga+block+pilates+support&tag=pilatescollective-20",
        imageUrl: "/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg",
      },
      {
        name: "Massage Ball Set",
        description: "Dual lacrosse-style balls for targeted myofascial release. Indispensable for foot, glute, and thoracic work between sessions.",
        price: "From $14",
        affiliateUrl: "https://www.amazon.com/s?k=massage+ball+set+myofascial+release+pilates&tag=pilatescollective-20",
        imageUrl: "/pictures/ahmet-kurt-a1IhqqW8JQE-unsplash.jpg",
      },
    ],
  },
  {
    label: "Props & Resistance",
    items: [
      {
        name: "Mini Stability Ball",
        description: "The 9-inch ball transforms mat work entirely. Adds tactile feedback, precise cueing, and progressive resistance to dozens of exercises.",
        price: "From $18",
        affiliateUrl: "https://www.amazon.com/s?k=pilates+mini+stability+ball+9+inch&tag=pilatescollective-20",
        imageUrl: "/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg",
      },
      {
        name: "Resistance Bands Set",
        description: "Fabric-wrapped loops in three resistance levels. Versatile, portable, and far more useful than basic latex therabands.",
        price: "From $22",
        affiliateUrl: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
        imageUrl: "/pictures/junseong-lee-AX8cf6mkCzw-unsplash.jpg",
      },
      {
        name: "Pilates Ankle Weights",
        description: "Neoprene-wrapped, 1–3 lb per leg. Adds meaningful load to the leg circle series, standing footwork, and arabesque variations.",
        price: "From $28",
        affiliateUrl: "https://www.amazon.com/s?k=pilates+ankle+weights+1+2+3+lb&tag=pilatescollective-20",
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
        price: "From $20",
        affiliateUrl: "https://www.amazon.com/s?k=theraband+flexbar+resistance+bar&tag=pilatescollective-20",
        imageUrl: "/pictures/samantha-sheppard-b8Q5fHBsyik-unsplash.jpg",
      },
      {
        name: "Pilates Wedge",
        description: "Slanted foam support for wrist protection during planks and push-ups. Reduces extension load — essential for practitioners with wrist sensitivity.",
        price: "From $22",
        affiliateUrl: "https://www.amazon.com/s?k=pilates+yoga+wedge+wrist+support&tag=pilatescollective-20",
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
        name: "Pilates Toning Balls",
        description: "Weighted soft-grip balls (0.5–1 lb each) for arm, shoulder, and standing balance work. Adds meaningful load without disrupting the Pilates flow.",
        price: "From $24",
        affiliateUrl: "https://www.amazon.com/s?k=pilates+toning+balls+weighted&tag=pilatescollective-20",
        imageUrl: "/pictures/roxana-popovici-Zp4APUiwEsM-unsplash.jpg",
      },
    ],
  },
  {
    label: "Home Studio",
    items: [
      {
        name: "Entry-Level Reformer",
        description: "The AeroPilates 435 delivers 75% of a studio reformer's exercise range at home. The most recommended entry point in this price bracket.",
        price: "From $399",
        affiliateUrl: "https://www.amazon.com/s?k=pilates+reformer+home+aeropilates&tag=pilatescollective-20",
        imageUrl: "/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg",
      },
      {
        name: "Pilates Barrel",
        description: "The ladder barrel is the gateway to spinal articulation work that can't be replicated on a mat. A considered home studio investment.",
        price: "From $185",
        affiliateUrl: "https://www.amazon.com/s?k=pilates+ladder+barrel&tag=pilatescollective-20",
        imageUrl: "/pictures/roxana-popovici-hiHBILFNah4-unsplash.jpg",
      },
      {
        name: "Spine Corrector",
        description: "Brooke Siler's preferred prop for teaching spinal extension and opening the chest. More versatile than it appears and compact enough for any space.",
        price: "From $95",
        affiliateUrl: "https://www.amazon.com/s?k=pilates+spine+corrector&tag=pilatescollective-20",
        imageUrl: "/pictures/logan-weaver-lgnwvr-u76Gd0hP5w4-unsplash.jpg",
      },
      {
        name: "Wunda Chair",
        description: "Joseph Pilates' most underrated invention. Challenges every plane of movement in a compact footprint — ideal for a serious home practice.",
        price: "From $320",
        affiliateUrl: "https://www.amazon.com/s?k=pilates+wunda+chair&tag=pilatescollective-20",
        imageUrl: "/pictures/mathilde-langevin-aBJ3A-2LJyU-unsplash.jpg",
      },
      {
        name: "Arc Barrel",
        description: "The arc is the most compact barrel available — ideal for spinal extension, hip flexor opening, and side-lying work in smaller spaces.",
        price: "From $130",
        affiliateUrl: "https://www.amazon.com/s?k=pilates+arc+barrel&tag=pilatescollective-20",
        imageUrl: "/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg",
      },
      {
        name: "Jump Board",
        description: "Turns any home reformer into a cardio and plyometric platform. Low-impact vertical jumping sequences — the single best reformer add-on for circulation.",
        price: "From $95",
        affiliateUrl: "https://www.amazon.com/s?k=pilates+reformer+jump+board&tag=pilatescollective-20",
        imageUrl: "/pictures/ahmet-kurt-0xn-8kRWOhE-unsplash.jpg",
      },
      {
        name: "Balanced Body CoreAlign",
        description: "The CoreAlign targets functional upright movement — standing balance, gait, and dynamic core stability — in ways the reformer alone cannot replicate.",
        price: "From $1,200",
        affiliateUrl: "https://www.amazon.com/s?k=balanced+body+corealign+pilates&tag=pilatescollective-20",
        imageUrl: "/pictures/roxana-popovici-hiHBILFNah4-unsplash.jpg",
      },
      {
        name: "Pilates Cadillac / Tower",
        description: "The full Cadillac apparatus — or a reformer tower conversion — opens the complete classical repertoire. The most comprehensive piece of Pilates equipment available.",
        price: "From $1,800",
        affiliateUrl: "https://www.amazon.com/s?k=pilates+cadillac+tower+apparatus&tag=pilatescollective-20",
        imageUrl: "/pictures/samantha-sheppard-b8Q5fHBsyik-unsplash.jpg",
      },
      {
        name: "Reformer Accessories Kit",
        description: "Long box, short box, sticky pads, and leather straps. The accessories that meaningfully expand the reformer repertoire beyond the foundation exercises.",
        price: "From $85",
        affiliateUrl: "https://www.amazon.com/s?k=pilates+reformer+accessories+box+straps&tag=pilatescollective-20",
        imageUrl: "/pictures/elena-kloppenburg-erUC4fTtCuo-unsplash.jpg",
      },
    ],
  },
  {
    label: "Apparel",
    items: [
      {
        name: "Pilates Leggings",
        description: "High-waist compression leggings that stay opaque in forward fold and don't roll during footwork. The Lululemon Align and CRZ YOGA Butterluxe are the benchmarks.",
        price: "From $28",
        affiliateUrl: "https://www.amazon.com/s?k=pilates+leggings+high+waist+compression&tag=pilatescollective-20",
        imageUrl: "/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg",
      },
      {
        name: "Pilates Sports Bra",
        description: "Medium-support bralette that keeps the instructor's sightlines clear. The Lululemon Free to Be and Alo Airlift are the most-worn at reformer studios worldwide.",
        price: "From $35",
        affiliateUrl: "https://www.amazon.com/s?k=pilates+sports+bra+medium+support&tag=pilatescollective-20",
        imageUrl: "/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg",
      },
      {
        name: "Pilates Biker Shorts",
        description: "5–6 inch inseam biker shorts let instructors see your knee tracking clearly. The Lululemon Align Short and Alo Airbrush are the studio standards.",
        price: "From $28",
        affiliateUrl: "https://www.amazon.com/s?k=pilates+biker+shorts+high+waist&tag=pilatescollective-20",
        imageUrl: "/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg",
      },
      {
        name: "Pilates Ankle Weights",
        description: "Bala Bangles (1 lb) are the boutique studio standard. The secure magnetic clasp and flat profile stay in position throughout the full Pilates series.",
        price: "From $22",
        affiliateUrl: "https://www.amazon.com/s?k=bala+bangles+ankle+weights+pilates&tag=pilatescollective-20",
        imageUrl: "/pictures/jade-stephens-N21356amsyw-unsplash.jpg",
      },
    ],
  },
  {
    label: "Premium Reformers",
    items: [
      {
        name: "Merrithew SPX Max",
        description: "The professional studio standard used in accredited training centres worldwide. Full 5-spring system, 97-inch rail, 350 lb capacity. The entry point to serious home practice.",
        price: "From $2,199",
        affiliateUrl: "https://www.amazon.com/s?k=merrithew+spx+max+reformer&tag=pilatescollective-20",
        imageUrl: "/pictures/esma-eserghep-NUQi80iMLrI-unsplash.jpg",
      },
      {
        name: "Balanced Body Allegro 2",
        description: "Carbon fibre carriage tracks, Infinity Footbar, and a 10-year frame warranty. The most recommended premium home reformer by master instructors. $3,995.",
        price: "$3,995",
        affiliateUrl: "https://www.amazon.com/s?k=balanced+body+allegro+2+reformer&tag=pilatescollective-20",
        imageUrl: "/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg",
      },
      {
        name: "Merrithew V2 Max",
        description: "Merrithew's most advanced machine. Patented retractable rope system, 24-inch carriage, high-precision springs. The quietest reformer in the Merrithew range.",
        price: "From $3,500",
        affiliateUrl: "https://www.amazon.com/s?k=merrithew+v2+max+reformer&tag=pilatescollective-20",
        imageUrl: "/pictures/samantha-sheppard-b8Q5fHBsyik-unsplash.jpg",
      },
      {
        name: "Gratz Universal Reformer",
        description: "The original. Built since 1965 under Joseph Pilates' direction, handmade in New York. Four springs, 3-gear bar, unchanged in six decades. $4,995–$5,295.",
        price: "From $4,995",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }} />
      <Header />
      <main>

        {/* Hero — editorial split */}
        <section style={{
          display: "flex",
          height: "100vh",
          minHeight: "640px",
          maxHeight: "1000px",
          overflow: "hidden",
        }}>
          {/* Left: image panel (60%) */}
          <div style={{ position: "relative", flex: "0 0 60%", overflow: "hidden" }}>
            <Image
              src="/pictures/roxana-popovici-2QeonB1SdQk-unsplash.jpg"
              alt="Pilates reformer studio"
              fill
              unoptimized
              style={{ objectFit: "cover", objectPosition: "center center" }}
              priority
            />
            {/* Subtle left vignette for depth */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, rgba(0,0,0,0.18) 0%, transparent 40%)",
              pointerEvents: "none",
            }} />
            {/* Issue label pinned bottom-left */}
            <div style={{
              position: "absolute",
              bottom: "36px",
              left: "40px",
              display: "flex",
              flexDirection: "column" as const,
              gap: "6px",
            }}>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: "9px",
                fontWeight: 400,
                letterSpacing: "0.22em",
                textTransform: "uppercase" as const,
                color: "rgba(255,255,255,0.45)",
                margin: 0,
              }}>No. 01 — Est. 2026</p>
              <div style={{ width: "32px", height: "1px", backgroundColor: "rgba(255,255,255,0.3)" }} />
            </div>
          </div>

          {/* Right: editorial text panel (40%) */}
          <div style={{
            flex: "0 0 40%",
            backgroundColor: "#f7f3ee",
            display: "flex",
            flexDirection: "column" as const,
            justifyContent: "space-between",
            padding: "48px 52px",
          }}>
            {/* Top row */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: "9px",
                fontWeight: 500,
                letterSpacing: "0.22em",
                textTransform: "uppercase" as const,
                color: "#9e8e7e",
                margin: 0,
              }}>
                Pilates Collective Club
              </p>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: "9px",
                fontWeight: 400,
                letterSpacing: "0.15em",
                textTransform: "uppercase" as const,
                color: "#c5b5a5",
                margin: 0,
              }}>
                Est. 2026
              </p>
            </div>

            {/* Centre: headline block */}
            <div>
              {/* Gold rule */}
              <div style={{ width: "40px", height: "1px", backgroundColor: "#c5a882", marginBottom: "32px" }} />
              <h1 style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(38px, 4.2vw, 72px)",
                fontWeight: 300,
                lineHeight: 1.0,
                color: "#1a1510",
                letterSpacing: "-0.02em",
                margin: "0 0 28px",
              }}>
                From the<br />
                powerhouse,<br />
                <em style={{ color: "#c5a882", fontStyle: "italic" }}>everything<br />follows.</em>
              </h1>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: "12px",
                fontWeight: 300,
                color: "#7a6e64",
                lineHeight: 1.8,
                margin: "0 0 40px",
                maxWidth: "300px",
                letterSpacing: "0.01em",
              }}>
                Curated studio guides, editorial reviews, and the finest in Pilates equipment — written by practitioners.
              </p>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "10px", maxWidth: "240px" }}>
                <Link href="/#cities" style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "9px",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase" as const,
                  color: "#f7f3ee",
                  textDecoration: "none",
                  backgroundColor: "#1a1510",
                  padding: "14px 28px",
                  display: "block",
                  textAlign: "center" as const,
                }}>
                  Browse Studios
                </Link>
                <Link href="/blog" style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "9px",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase" as const,
                  color: "#1a1510",
                  textDecoration: "none",
                  border: "1px solid #c5b5a5",
                  padding: "13px 28px",
                  display: "block",
                  textAlign: "center" as const,
                }}>
                  Read the Journal
                </Link>
              </div>
            </div>

            {/* Bottom: scroll cue */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "1px", height: "36px", backgroundColor: "#c5b5a5" }} />
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: "9px",
                fontWeight: 400,
                letterSpacing: "0.2em",
                textTransform: "uppercase" as const,
                color: "#c5b5a5",
                margin: 0,
              }}>Scroll</p>
            </div>
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
              <Link href="/cities/zurich" style={{
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
              Built by practitioners,<br />for practitioners.
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "15px", fontWeight: 300, color: "#6b6560", lineHeight: 1.85, marginBottom: "20px" }}>
              We are a small team of passionate Pilates practitioners who got tired of sifting through generic fitness directories to find truly great studios. So we built our own.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "14px", fontWeight: 300, color: "#9a9490", lineHeight: 1.85 }}>
              Every studio in our guides has been personally vetted. Every equipment pick has been tested. Every recommendation is independent — we are never paid to feature a studio.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
