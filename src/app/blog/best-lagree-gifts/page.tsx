import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

const PAGE_URL = "https://pilatescollectiveclub.com/blog/best-lagree-gifts";
const HERO_IMAGE = "https://pilatescollectiveclub.com/pictures/stitch-studio-shelf-props.png";
const TITLE = "Best Lagree Gifts (2026): 18 Ideas by Budget";
const DESCRIPTION =
  "The best gifts for Lagree lovers, from $6 stocking stuffers to The Micro home machine: grip socks, towels, recovery tools and more, at verified Amazon prices.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: "18 gifts a Lagree regular will actually use, sorted by budget: under $25, under $75, under $250 and the big splurge.",
    type: "article",
    url: PAGE_URL,
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: "Studio shelf with props — best Lagree gifts" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Lagree Gifts (2026): 18 Ideas by Budget",
    description: "Gifts a Lagree regular will actually use, from stocking stuffers to The Micro.",
    images: [HERO_IMAGE],
  },
  keywords: [
    "lagree gifts",
    "gifts for lagree lovers",
    "lagree gift ideas",
    "gifts for someone who loves lagree",
    "megaformer gifts",
    "lagree christmas gifts",
    "lagree gift guide",
    "lagree stocking stuffers",
    "gifts for lagree instructor",
    "lagree micro gift",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=pilatescollective-20`;

type Gift = {
  id: string;
  badge: string;
  shortName: string;
  name: string;
  price: string;
  url: string;
  description: string;
};

type Tier = { id: string; label: string; title: string; intro: string; gifts: Gift[] };

const TIERS: Tier[] = [
  {
    id: "under-25",
    label: "Under $25",
    title: "Lagree gifts under $25",
    intro: "Stocking stuffers and Secret Santa gifts that a Lagree regular will genuinely use up, which is the best kind of small gift.",
    gifts: [
      {
        id: "dr-teals",
        badge: "Stocking Stuffer",
        shortName: "Bath soak",
        name: "Dr Teal's Arnica Body Relief Epsom Salt Soak (3 lb)",
        price: "$5.87",
        url: amz("B0DTKLKYW8"),
        description:
          "An Epsom salt (magnesium sulfate) soak with arnica, menthol and eucalyptus oil, marketed for post-workout muscle relief. The science on soaking magnesium through skin is thin, but a 20-minute warm bath after the Lagree shakes is its own reward. Sold by Amazon.com. Pair it with any gift below.",
      },
      {
        id: "tavi-savvy",
        badge: "Safest Bet",
        shortName: "Grip socks",
        name: "TAVI Savvy Grip Socks",
        price: "$16.00",
        url: amz("B07KRPY2SQ"),
        description:
          "Every Lagree regular goes through grip socks, so you can never give too many. TAVI's patented triangle grip and certified organic cotton knit come in fashion colours, which makes them feel like a gift rather than a chore. Check the size on the listing (this one is Medium).",
      },
      {
        id: "gaiam-sliders",
        badge: "For Home Workouts",
        shortName: "Core sliders",
        name: "Gaiam Core Sliding Discs (Set of 2)",
        price: "$17.79",
        url: amz("B0964G1N18"),
        description:
          "Sliders are the closest a floor gets to a moving carriage, which is why they are the backbone of Lagree-inspired home workouts. Dual-sided for carpet and hard floors, light enough to pack. Sold by Amazon.com.",
      },
      {
        id: "shandali",
        badge: "Most Practical",
        shortName: "Grip towel",
        name: "Shandali Stickyfiber Yoga Towel (24\" x 72\")",
        price: "$19.99",
        url: amz("B011IU43WG"),
        description:
          "Lagree is one of the sweatiest workouts in any studio. A mat-sized towel with a silicone grip back covers the platform for floor and kneeling work and doubles as a hand towel. Mat-sized at 24\" x 72\", in several colours.",
      },
      {
        id: "gymboss",
        badge: "For the Home Trainer",
        shortName: "Interval timer",
        name: "Gymboss Interval Timer",
        price: "$20.95",
        url: amz("B00CO8HO6O"),
        description:
          "Lagree runs on the clock. This pager-sized timer runs one or two intervals from 2 seconds to 99 minutes, repeats up to 99 rounds, and alerts with a chime and vibration. It suits anyone who trains at home between classes. Note: it takes one AAA battery, which is not included, so tape one to the box.",
      },
    ],
  },
  {
    id: "under-75",
    label: "Under $75",
    title: "Lagree gifts under $75",
    intro: "The sweet spot. These are the upgrades most people would not buy for themselves: premium versions of things they use every class.",
    gifts: [
      {
        id: "owala",
        badge: "Everyone Needs One",
        shortName: "Water bottle",
        name: "Owala FreeSip Insulated Water Bottle 32 oz",
        price: "$29.99",
        url: amz("B085DVHQ57"),
        description:
          "A 32 oz double-wall insulated bottle that keeps drinks cold for up to 24 hours. The FreeSip spout lets you sip through the built-in straw or tilt and swig, and the push-button lid locks closed for the gym bag. Sold by Amazon.com, in many colours.",
      },
      {
        id: "toesox",
        badge: "The Studio Classic",
        shortName: "Toe grip socks",
        name: "toesox Low Rise Grip Socks 2-Pack (Full Toe)",
        price: "$30.00",
        url: amz("B07QHNDHW3"),
        description:
          "Two pairs of full-toe grip socks with a patented non-slip sole and an arch band, in a 77% organic cotton blend. Toe socks let toes spread on the platform during long lunges; some people love them, so this is a great gift for someone who already wears them.",
      },
      {
        id: "tavi-gloves",
        badge: "For Sweaty Hands",
        shortName: "Grip gloves",
        name: "TAVI Half Finger Grip Gloves",
        price: "$31.99",
        url: amz("B09GPVMF86"),
        description:
          "Half-finger grip gloves with full palm coverage, a breathable cutout and a terry thumb for wiping sweat. They help on handlebars and in long planks when palms get slippery. A thoughtful gift for someone who complains about blisters. This listing is Medium; check sizing.",
      },
      {
        id: "tavi-stacy",
        badge: "Prettiest Pick",
        shortName: "Slouch socks 2-pack",
        name: "TAVI Stacy Slouch Grip Socks 2-Pack",
        price: "$40.00",
        url: amz("B0GFPGMWWS"),
        description:
          "Two pairs of slouchy grip socks with TAVI's patented triangle grip and an organic cotton knit. They are the kind of socks people post on Instagram after class, so they make an easy, stylish gift. This listing is Medium.",
      },
      {
        id: "bala-bangles",
        badge: "Most Giftable",
        shortName: "Wearable weights",
        name: "Bala Bangles Wrist & Ankle Weights (1 lb, pair)",
        price: "$55.00",
        url: amz("B0BQCJRL6Q"),
        description:
          "Steel-core, silicone-wrapped 1 lb bangles that adjust to wrist or ankle. They are the original Shark Tank brand and they look good enough to leave out. For a Lagree fan, they add load to slow floor work on days off from the studio.",
      },
      {
        id: "varley-marla",
        badge: "Studio-to-Street",
        shortName: "Designer tank",
        name: "Varley Marla Button Placket Tank",
        price: "$71.68",
        url: amz("B0FP3MWK1Z"),
        description:
          "A lightweight, super-stretch jersey tank with a crew neck, sold by Shopbop (an Amazon company). Varley is a favourite for the boutique-fitness crowd, and a fitted tank stays put during planks. This listing is size M, so check sizing or include a gift receipt.",
      },
      {
        id: "manduka-yogitoes",
        badge: "Luxury Towel",
        shortName: "Premium towel",
        name: "Manduka Yogitoes Hot Yoga Mat Towel 71\"",
        price: "$72.00",
        url: amz("B0D5ZR3R1M"),
        description:
          "The premium towel. Its surface builds traction as you sweat, and patented silicone nubs stop it shifting on the mat. Built for hot yoga, which makes it ideal for Lagree's sweat levels. Made from recycled materials. Sold by Amazon.com.",
      },
    ],
  },
  {
    id: "under-250",
    label: "Under $250",
    title: "Lagree gifts under $250",
    intro: "Recovery is the gift category Lagree fans appreciate most, because the day after a class is the hard part.",
    gifts: [
      {
        id: "hypersphere-go",
        badge: "Pocket Recovery",
        shortName: "Vibrating ball",
        name: "Hyperice Hypersphere Go Vibrating Massage Ball",
        price: "$109.00",
        url: amz("B07T13X1BD"),
        description:
          "A palm-sized vibrating massage ball with three speeds, TSA carry-on approved. It reaches glutes, calves and feet that a foam roller struggles with, the very spots Lagree lunges hammer. Sold by Hyperice.",
      },
      {
        id: "hypervolt-go-3",
        badge: "Best Value Massage Gun",
        shortName: "Massage gun",
        name: "Hyperice Hypervolt Go 3 Massage Gun",
        price: "$149.00",
        url: amz("B0G82W9ZZK"),
        description:
          "A 1.6 lb travel massage gun with 5 speeds, 2 heads (flat and wedge), up to 4 hours of battery, USB-C charging and QuietGlide technology, in a carry case. It is light enough to live in a gym bag. Sold by Hyperice.",
      },
      {
        id: "theragun-mini",
        badge: "The Gift Upgrade",
        shortName: "Premium massage gun",
        name: "TheraGun Mini (3rd Gen) Massage Gun",
        price: "$219.99",
        url: amz("B0DV7JN7ZD"),
        description:
          "The name most people recognise. It has three attachments, one-button control with three speeds, and Bluetooth for guided routines in the Therabody app. Compact enough for travel, and it comes in several colours. Sold by TheraGun.",
      },
    ],
  },
  {
    id: "splurge",
    label: "The Splurge",
    title: "The big Lagree gift",
    intro: "For a partner, a milestone birthday or the person who has everything, including a ten-class pack.",
    gifts: [
      {
        id: "oura-4",
        badge: "Wear It Everywhere",
        shortName: "Smart ring",
        name: "OURA Ring 4 Smart Ring",
        price: "$349.00",
        url: amz("B0D9WWB3WX"),
        description:
          "Tracks sleep, activity, stress and heart health with no screen and up to 8 days of battery, so it can stay on during class. Two important gifting notes from the listing: Oura uses its own sizing, so use the Oura sizing kit before you buy, and after the first month the membership costs $5.99 a month. This listing is Silver, size 9.",
      },
      {
        id: "rear-platform",
        badge: "For Micro Owners",
        shortName: "Micro add-on",
        name: "Lagree Fitness Micro Rear Platform",
        price: "$290.00",
        url: amz("B0BKN2LSWD"),
        description:
          "Already own The Micro? This is the add-on that unlocks the express lunge, 5th lunge, super crunch, giant wheelbarrow and more, according to Lagree Fitness. It is sold by Lagree Fitness, so it is a genuine part.",
      },
      {
        id: "normatec-hips",
        badge: "Ultimate Recovery",
        shortName: "Compression hips",
        name: "Hyperice Normatec Elite Hips",
        price: "$599.00",
        url: amz("B0FHBZCGDC"),
        description:
          "Cordless dynamic air compression for the hips, glutes, IT bands and lower back, with 7 compression levels, two overlapping zones and up to 4 hours of battery. Those are the areas Lagree lunges and squats load hardest. Sold by Hyperice.",
      },
      {
        id: "the-micro",
        badge: "The Ultimate Lagree Gift",
        shortName: "Home machine",
        name: "The Micro by Lagree Fitness",
        price: "$990.00",
        url: amz("B0BBT7YV93"),
        description:
          "The genuine Lagree home machine, sold by Lagree Fitness on Amazon. It offers low-impact, high-intensity strength and cardio, fits users up to 6'8\" and stores under a bed, against a wall or on a bike rack. It is a big gift, but for a regular it pays back in skipped class fees. Best for someone who already knows the method.",
      },
    ],
  },
];

const ALL_GIFTS: Gift[] = TIERS.flatMap((t) => t.gifts);
const GIFT_NUMBER = new Map(ALL_GIFTS.map((g, i) => [g.id, i + 1]));

const FAQS = [
  {
    q: "What do you get someone who loves Lagree?",
    a: "Things they use every class, upgraded. Grip socks (TAVI or toesox), a grip towel, a good insulated water bottle and recovery tools such as a massage gun are the most useful. For a big gift, Lagree Fitness sells its home machine, The Micro, on Amazon.",
  },
  {
    q: "What is a good Lagree gift under $50?",
    a: "Grip socks are the safest choice: TAVI Savvy socks are $16.00 a pair and the toesox 2-pack is $30.00. The Owala FreeSip 32 oz bottle ($29.99) and the Shandali grip towel ($19.99) are also excellent. Add a Dr Teal's Epsom salt soak ($5.87) to round it out.",
  },
  {
    q: "Are grip socks a good gift for Lagree?",
    a: "Yes. Most Lagree studios require or strongly recommend grip socks, and regulars wear through them. Choose the brand they already wear if you can tell, or go with TAVI's closed-toe style, which suits most people. Check the size on each listing before buying.",
  },
  {
    q: "Is The Micro a good gift?",
    a: "For someone who already takes Lagree classes regularly, it is the ultimate gift. It is the brand's own home machine at $990.00, sold by Lagree Fitness on Amazon. For a beginner, a class pack at their local studio is the better gift, because Lagree relies on an instructor's cues.",
  },
  {
    q: "What is the best recovery gift for Lagree?",
    a: "A massage gun. The Hyperice Hypervolt Go 3 ($149.00) is the value pick and the TheraGun Mini 3rd Gen ($219.99) is the premium pick. For an under-$110 option, the Hyperice Hypersphere Go vibrating ball reaches glutes and calves well. See our guide to recovering after Lagree for more.",
  },
  {
    q: "What gift avoids sizing problems?",
    a: "Water bottles, towels, sliders, timers, massage guns and the bath soak are all one-size. Socks, gloves, tops and the Oura Ring all need a size: Oura uses its own sizing, so use the sizing kit first. Include a gift receipt when in doubt.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${PAGE_URL}/#article`,
      "headline": TITLE,
      "description": DESCRIPTION,
      "image": { "@type": "ImageObject", "url": HERO_IMAGE, "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "@id": "https://pilatescollectiveclub.com/#organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": {
        "@type": "Organization",
        "@id": "https://pilatescollectiveclub.com/#organization",
        "name": "Pilates Collective Club",
        "logo": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/pcc-logo.png" },
      },
      "datePublished": "2026-10-03",
      "dateModified": "2026-10-03",
      "url": PAGE_URL,
      "mainEntityOfPage": PAGE_URL,
      "articleSection": "Lagree",
      "inLanguage": "en-US",
    },
    {
      "@type": "ItemList",
      "name": "Best Lagree Gifts (2026)",
      "numberOfItems": ALL_GIFTS.length,
      "itemListElement": ALL_GIFTS.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "description": p.description,
          "offers": { "@type": "Offer", "priceCurrency": "USD", "price": p.price.replace(/[^0-9.]/g, ""), "availability": "https://schema.org/InStock", "url": p.url },
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Lagree Gifts", "item": PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": FAQS.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
    },
  ],
};

const eyebrowStyle = { color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" };
const bodyStyle = { color: "#53433e", fontFamily: "'Montserrat', sans-serif" };
const h2Style = { color: "#1b1c1c", fontFamily: "'Playfair Display', serif" };
const inlineLinkStyle = { color: "#8b4a31", textDecoration: "underline" };
const chipStyle = { backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" };
const cardStyle = { backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" };
const hubStyle = { backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.4)", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif", textDecoration: "none" };
const shopStyle = { display: "block", fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "10px 14px", whiteSpace: "nowrap" as const, flexShrink: 0 };

function GiftCard({ g }: { g: Gift }) {
  return (
    <div id={g.id} className="scroll-mt-28">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={chipStyle}>{g.badge}</span>
      </div>
      <ProductCard name={g.name} description={g.description} price={g.price} affiliateUrl={g.url} />
    </div>
  );
}

export default function BestLagreeGiftsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={eyebrowStyle}>Gift Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Lagree</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Lagree Gifts<br /><span style={{ color: "#8b4a31" }}>(2026): 18 Ideas for Every Budget</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated October 2026 · 11 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Every link on this page goes to Amazon, and we earn a small commission on qualifying purchases at no extra cost to you.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Shopping for someone who talks about &ldquo;the shakes&rdquo; like it is a good thing? Lagree people are easy to buy for once you know the secret: they go through grip socks and towels fast, they are always a little sore, and they would never buy themselves the premium version of either. Here are 18 gifts they will actually use, sorted by budget, from a $6 stocking stuffer to the brand&apos;s own home machine.
            </p>
            <p className="text-sm leading-relaxed" style={bodyStyle}>
              Every product was checked live on Amazon on October 3, 2026, at the price shown. Prices change, especially around the holidays, so the final price is whatever Amazon shows at checkout.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-studio-shelf-props.png" alt="A studio shelf of props and accessories — best Lagree gifts" fill className="object-cover" style={{ filter: "brightness(0.85)" }} priority />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-10 mt-4 flex flex-col sm:flex-row gap-3">
              {TIERS.map((t) => (
                <a key={t.id} href={`#${t.id}`} className="flex-1 rounded-xl p-4 text-sm font-semibold text-center" style={hubStyle}>
                  {t.label} →
                </a>
              ))}
            </div>

            {/* At a glance */}
            <div className="mb-16 overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
              <div className="px-6 py-4" style={{ backgroundColor: "#f6f3f2" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={eyebrowStyle}>At a Glance — All 18 Lagree Gifts</p>
              </div>
              {TIERS.map((t) => (
                <div key={t.id}>
                  <div className="px-6 py-2" style={{ borderTop: "1px solid rgba(217,194,186,0.25)", backgroundColor: "#fcf9f8" }}>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>{t.label}</p>
                  </div>
                  {t.gifts.map((g) => {
                    const n = GIFT_NUMBER.get(g.id) ?? 0;
                    return (
                      <div key={g.id} className="flex items-center gap-3 sm:gap-4 px-6 py-4" style={{ borderTop: "1px solid rgba(217,194,186,0.25)", backgroundColor: "#ffffff" }}>
                        <span className="text-base font-semibold w-7 shrink-0 text-center" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{String(n).padStart(2, "0")}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs uppercase tracking-[0.12em]" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
                            <a href={`#${g.id}`} style={{ color: "#86736d", textDecoration: "none" }}>{g.shortName}</a>
                          </p>
                          <p className="text-sm font-semibold leading-tight mt-0.5" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{g.name}</p>
                          <p className="text-xs mt-0.5 md:hidden" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{g.price}</p>
                        </div>
                        <span className="text-xs font-semibold hidden md:block shrink-0 mr-3" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{g.price}</span>
                        <a href={g.url} target="_blank" rel="noopener noreferrer sponsored nofollow" style={shopStyle}>Shop →</a>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* How to choose */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={h2Style}>How to pick a Lagree gift they will actually use</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { heading: "Consumables win", body: "Grip socks and towels wear out. A gift that replaces something they already buy never ends up in a drawer." },
                  { heading: "Think sweat and grip", body: "Lagree is slow, long and very sweaty. Anything that helps with grip (socks, gloves, towels) is on-theme." },
                  { heading: "Soreness is real", body: "The day after a class is when Lagree people are most grateful. Recovery gifts land well." },
                  { heading: "Mind the sizes", body: "Socks, gloves, tops and smart rings need a size. Bottles, towels, sliders and massage tools do not." },
                ].map((item) => (
                  <div key={item.heading} className="rounded-xl p-5" style={cardStyle}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.heading}</p>
                    <p className="text-sm leading-relaxed" style={bodyStyle}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tiers */}
            {TIERS.map((t) => (
              <div key={t.id} id={t.id} className="mb-16 scroll-mt-28">
                <div className="flex items-center gap-4 mb-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] shrink-0" style={eyebrowStyle}>{t.label}</p>
                  <div className="flex-1 h-px" style={{ backgroundColor: "#d9c2ba" }} />
                </div>
                <h2 className="text-3xl font-semibold mb-4" style={h2Style}>{t.title}</h2>
                <p className="text-sm leading-relaxed mb-8" style={bodyStyle}>{t.intro}</p>
                <div className="space-y-8">
                  {t.gifts.map((g) => (
                    <GiftCard key={g.id} g={g} />
                  ))}
                </div>
              </div>
            ))}

            {/* Bundles */}
            <div className="mb-16 rounded-2xl p-6 md:p-8" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.5)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={eyebrowStyle}>Ready-made bundles</p>
              <h2 className="text-2xl font-semibold mb-4" style={h2Style}>Three gift sets that always land</h2>
              <ul className="space-y-3">
                <li className="text-sm leading-relaxed" style={bodyStyle}>
                  <span className="font-semibold" style={{ color: "#1b1c1c" }}>The class bag refill (about $66):</span> TAVI Savvy socks ($16.00) + Shandali towel ($19.99) + Owala bottle ($29.99) = $65.98.
                </li>
                <li className="text-sm leading-relaxed" style={bodyStyle}>
                  <span className="font-semibold" style={{ color: "#1b1c1c" }}>The day-after kit (about $155):</span> Hypervolt Go 3 ($149.00) + Dr Teal&apos;s soak ($5.87) = $154.87.
                </li>
                <li className="text-sm leading-relaxed" style={bodyStyle}>
                  <span className="font-semibold" style={{ color: "#1b1c1c" }}>The home studio ($1,280):</span> The Micro ($990.00) + Rear Platform ($290.00) = $1,280.00. See the full setup in our{" "}
                  <Link href="/blog/lagree-fitness" style={inlineLinkStyle}>Lagree Fitness brand guide</Link>.
                </li>
              </ul>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={h2Style}>Frequently asked questions</h2>
              <div className="space-y-6">
                {FAQS.map((item) => (
                  <div key={item.q} className="rounded-xl p-6" style={cardStyle}>
                    <h3 className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.q}</h3>
                    <p className="text-sm leading-relaxed" style={bodyStyle}>{item.a}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm leading-relaxed mt-6" style={bodyStyle}>
                Shopping for a Pilates person too? See{" "}
                <Link href="/blog/best-pilates-gifts-under-50" style={inlineLinkStyle}>Pilates gifts under $50</Link> and{" "}
                <Link href="/blog/best-luxury-pilates-gifts" style={inlineLinkStyle}>luxury Pilates gifts</Link>.
              </p>
            </div>

            {/* Further reading */}
            <div>
              <h2 className="text-2xl font-semibold mb-8" style={h2Style}>Further reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="Lagree Essentials" excerpt="Best, budget and splurge picks for every piece of Lagree gear, from grip socks to recovery." href="/blog/lagree-essentials" category="Equipment" readTime="12 min read" date="September 2026" imageUrl="/pictures/stitch-reformer-row-studio.png" />
                <ArticleCard title="Sore After Lagree?" excerpt="Why Lagree soreness happens, how long it lasts, and the recovery gear worth buying." href="/blog/lagree-recovery" category="Lagree" readTime="11 min read" date="October 2026" imageUrl="/pictures/stitch-studio-bench-towels.png" />
                <ArticleCard title="Lagree Socks" excerpt="The best grip socks for Lagree, from toe socks to closed-toe and men's picks." href="/blog/best-lagree-grip-socks" category="Lagree" readTime="10 min read" date="October 2026" imageUrl="/pictures/stitch-grip-socks-footbar.png" />
                <ArticleCard title="Lagree Fitness Brand Guide" excerpt="The Micro, the Megaformer and what a full home setup really costs." href="/blog/lagree-fitness" category="Lagree" readTime="12 min read" date="September 2026" imageUrl="/pictures/stitch-reformers-aerial-row.png" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="A class pack is a great gift too. Use our curated city guides to find the best studios worldwide." showSearch searchPlaceholder="Ask: best Lagree studios in Los Angeles…" />
      </main>
      <Footer />
    </>
  );
}
