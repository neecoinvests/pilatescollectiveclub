import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import { jsonLdHtml } from "@/lib/schema";

const PAGE_URL = "https://pilatescollectiveclub.com/blog/lagree-fitness";
const HERO_IMAGE = "https://pilatescollectiveclub.com/pictures/stitch-reformers-aerial-row.png";
const TITLE = "Lagree Fitness (2026): The Micro, Megaformer & What to Buy";
const DESCRIPTION =
  "Lagree Fitness explained: the method, the Megaformer, and The Micro ($990) sold on Lagree's own Amazon store — plus every accessory and the full setup cost.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: "The complete Lagree Fitness brand guide — the method, the Megaformer, The Micro home machine and its accessories, and what a full home setup really costs.",
    type: "article",
    url: PAGE_URL,
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: "Lagree Fitness machines in a studio — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lagree Fitness (2026): The Micro & Megaformer",
    description: "The Lagree Fitness brand guide — The Micro ($990), its accessories and the full home setup cost.",
    images: [HERO_IMAGE],
  },
  keywords: [
    "lagree fitness",
    "lagree fitness micro",
    "lagree micro review",
    "lagree fitness machine",
    "lagree fitness at home",
    "megaformer vs micro",
    "lagree fitness amazon",
    "the micro by lagree fitness",
    "lagree micro accessories",
    "lagree micro price",
    "megaformer",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=pilatescollective-20`;
const LAGREE_DIRECT = "https://www.lagreefitness.com/";

type Pick = {
  id: string;
  tier: "Home machine" | "Accessory" | "Studio machine" | "Not Lagree";
  shortName: string;
  name: string;
  price: string;
  url: string;
  description: string;
};

const MICRO: Pick = {
  id: "the-micro",
  tier: "Home machine",
  shortName: "Home machine",
  name: "The Micro by Lagree Fitness",
  price: "$990.00",
  url: amz("B0BBT7YV93"),
  description:
    "Lagree Fitness's own compact home machine, sold by Lagree Fitness through its Amazon store. The listing describes it as low-impact, high-intensity strength and cardio training in a compact, lightweight, portable machine designed to deliver the Megaformer-style workout in a smaller footprint. It accommodates users up to 6'8\" and can be stored under a bed, against a wall or on a bike rack. Stock can be limited: if the Amazon listing shows unavailable, buy direct from lagreefitness.com.",
};

const ACCESSORIES: Pick[] = [
  {
    id: "rear-platform",
    tier: "Accessory",
    shortName: "Rear platform",
    name: "Lagree Fitness Micro Rear Platform",
    price: "$290.00",
    url: amz("B0BKN2LSWD"),
    description:
      "Adds a sturdy rear surface for your feet, hands or knees, which unlocks Lagree moves such as the express lunge, 5th lunge, super crunch and giant wheelbarrow. The platform itself measures 10.5\" L x 8.5\" W x 6\" H, and the Micro with the platform fitted measures 81.5\" L x 20\" W x 6\" H. Sold by Lagree Fitness.",
  },
  {
    id: "handlebars",
    tier: "Accessory",
    shortName: "Handlebars",
    name: "Lagree Fitness Micro Handlebars (Pair)",
    price: "$190.00",
    url: amz("B0BKMP89SH"),
    description:
      "Handlebars that add stability, usable at the front or the back of the Micro. Mounting them at the back requires the rear platform. They are sold as a pair, so if you want handlebars at the front AND the back at the same time, you need two sets. Sold by Lagree Fitness.",
  },
  {
    id: "pulley-cables",
    tier: "Accessory",
    shortName: "Pulley cables",
    name: "Lagree Fitness Micro Pulley Cables",
    price: "$230.00",
    url: amz("B0BYMD4S91"),
    description:
      "The cable attachment for the Micro, sold by Lagree Fitness. The Amazon listing gives no further specifications, so check with Lagree Fitness if you need details before buying. Stock is limited; if it is unavailable on Amazon, buy direct from lagreefitness.com.",
  },
];

const MEGAFORMER: Pick = {
  id: "megaformer",
  tier: "Studio machine",
  shortName: "Studio machine",
  name: "Megaformer (M3S / M3X)",
  price: "Contact Lagree Fitness",
  url: LAGREE_DIRECT,
  description:
    "Not sold on Amazon — this links to lagreefitness.com. The Megaformer is the commercial machine you use in Lagree studios. It is sold directly by Lagree Fitness, primarily to studios, and pricing is quoted on request, so contact Lagree Fitness for current models and pricing.",
};

const ALTERNATIVES: Pick[] = [
  {
    id: "windfoot",
    tier: "Not Lagree",
    shortName: "Pilates reformer (budget)",
    name: "WINDFOOT Foldable Pilates Reformer",
    price: "$295.99",
    url: amz("B0D31767J1"),
    description:
      "This is a Pilates reformer, not a Lagree machine. It is a foldable spring-and-carriage reformer from a newer budget brand with less of a track record. It suits Pilates reformer workouts at home, but it will not reproduce Lagree-specific moves or the Megaformer layout.",
  },
  {
    id: "merrithew",
    tier: "Not Lagree",
    shortName: "Pilates reformer (premium)",
    name: "Merrithew At Home SPX Reformer Package",
    price: "$3,349.00",
    url: amz("B004FGT0TM"),
    description:
      "This is a Pilates reformer, not a Lagree machine. Merrithew (STOTT PILATES) is an established studio equipment brand and the At Home SPX is its home spring reformer. Buy it if you want Pilates reformer training for years, not as a Megaformer substitute.",
  },
];

type Gear = { category: string; name: string; price: string; url: string; note: string; guideHref: string };

const GEAR: Gear[] = [
  { category: "Grip socks", name: "toesox Low Rise Grip Socks 2-Pack (Full Toe)", price: "$30.00", url: amz("B07QHNDHW3"), note: "Lagree is sweaty and slow — grip on the carriage and platform matters.", guideHref: "/blog/best-lagree-grip-socks" },
  { category: "Knee pad", name: "Impulse Yoga Knee Pad Cushion (1\")", price: "$19.99", url: amz("B06WV6XVV9"), note: "Cushions kneeling work on the carriage or the floor.", guideHref: "/blog/best-lagree-knee-pads" },
  { category: "Gloves", name: "Gaiam Grippy Yoga Gloves", price: "$7.65", url: amz("B001VROVEM"), note: "Helps sweaty hands on handlebars and platforms.", guideHref: "/blog/best-pilates-gloves" },
  { category: "Shorts", name: "CRZ YOGA Butterluxe Biker Shorts 6\"", price: "$24.00", url: amz("B0B28B34XX"), note: "Tight biker shorts do not ride up or catch on the carriage.", guideHref: "/blog/best-lagree-shorts" },
  { category: "Towel", name: "Shandali Stickyfiber Yoga Towel", price: "$19.99", url: amz("B011IU43WG"), note: "Keeps a sweaty carriage from getting slippery.", guideHref: "/blog/best-sweat-towel-for-lagree" },
  { category: "Interval timer", name: "Gymboss Interval Timer", price: "$20.95", url: amz("B00CO8HO6O"), note: "Lagree sets are timed — useful when training on a Micro at home.", guideHref: "/blog/best-interval-timer-for-lagree" },
];

const toNumber = (price: string) => {
  const n = parseFloat(price.replace(/[^0-9.]/g, ""));
  return Number.isNaN(n) ? 0 : n;
};

const fmt = (n: number) => `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const SETUP = [MICRO, ...ACCESSORIES];
const MICRO_PRICE = toNumber(MICRO.price); // 990
const HANDLEBAR_PRICE = toNumber(ACCESSORIES[1].price); // 190
const SETUP_TOTAL = SETUP.reduce((sum, p) => sum + toNumber(p.price), 0); // 990 + 290 + 190 + 230 = 1,700
const SETUP_TWO_BARS = SETUP_TOTAL + HANDLEBAR_PRICE; // 1,700 + 190 = 1,890
const GEAR_TOTAL = GEAR.reduce((sum, g) => sum + toNumber(g.price), 0); // 30 + 19.99 + 7.65 + 24 + 19.99 + 20.95 = 122.58

// Classes commonly cost $35–$45+ in major US cities.
const classRange = (n: number) => `${Math.round(n / 45)}–${Math.round(n / 35)}`;

const GLANCE: Pick[] = [MICRO, ...ACCESSORIES, MEGAFORMER];
const ALL_ITEMS: Pick[] = [MICRO, ...ACCESSORIES, MEGAFORMER, ...ALTERNATIVES];

const FAQS = [
  {
    q: "What is Lagree Fitness?",
    a: "Lagree Fitness is the company behind the Lagree method and the Megaformer machine, founded by Sebastien Lagree. The method is a slow, controlled, high-intensity, low-impact workout built around time under tension on a spring-loaded carriage machine. The company also makes The Micro, a compact home machine.",
  },
  {
    q: "Is the Lagree Micro worth it?",
    a: `If you already take Lagree classes regularly, it can be. The Micro costs ${fmt(MICRO_PRICE)} on its own and ${fmt(SETUP_TOTAL)} with the rear platform, one pair of handlebars and the pulley cables. Lagree classes commonly cost $35–$45 or more each in major US cities, so the Micro alone equals roughly ${classRange(MICRO_PRICE)} classes and the full setup roughly ${classRange(SETUP_TOTAL)} classes. It will not replace an instructor's cues, so many people keep some studio classes.`,
  },
  {
    q: "What is the difference between the Micro and the Megaformer?",
    a: "The Megaformer is Lagree Fitness's commercial studio machine, sold directly by Lagree Fitness with pricing on request. The Micro is its compact, lightweight home machine, designed to deliver the Megaformer-style workout in a smaller machine that stores under a bed, against a wall or on a bike rack. The Micro costs $990 on Amazon, and adding the rear platform, handlebars and pulley cables expands the moves you can do on it.",
  },
  {
    q: "Can tall people use the Lagree Micro?",
    a: "Yes. According to the Amazon listing, the Micro accommodates users up to 6'8\". With the rear platform fitted, the machine measures 81.5\" long, 20\" wide and 6\" high, so plan floor space for that length plus room to move around it.",
  },
  {
    q: "Where can I buy Lagree Fitness equipment?",
    a: "The Micro (B0BBT7YV93), the Micro Rear Platform, the Micro Handlebars and the Micro Pulley Cables are sold by Lagree Fitness through its own Amazon store. The Micro and the pulley cables can be low on stock; if they are unavailable, buy direct from lagreefitness.com. The Megaformer is not sold on Amazon and is available only from Lagree Fitness directly.",
  },
  {
    q: "Do I need the Micro accessories?",
    a: "No, the Micro works on its own. The rear platform ($290) is the most useful add-on because it unlocks moves such as the express lunge, 5th lunge, super crunch and giant wheelbarrow, and it is required if you want to mount handlebars at the back. Handlebars ($190 a pair) add stability; you need two pairs for front and back at the same time. The pulley cables ($230) add cable work.",
  },
  {
    q: "Is a Pilates reformer the same as a Lagree Micro?",
    a: "No. Both use springs and a sliding carriage, but the Lagree method is a different workout with its own machine layout, pace and exercises. A Pilates reformer such as the WINDFOOT foldable ($295.99) or the Merrithew At Home SPX ($3,349.00) is built for Pilates, not Lagree.",
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
      "image": {
        "@type": "ImageObject",
        "url": HERO_IMAGE,
        "width": 1200,
        "height": 630,
      },
      "author": {
        "@type": "Organization",
        "@id": "https://pilatescollectiveclub.com/#organization",
        "name": "Pilates Collective Club",
        "url": "https://pilatescollectiveclub.com",
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://pilatescollectiveclub.com/#organization",
        "name": "Pilates Collective Club",
        "logo": {
          "@type": "ImageObject",
          "url": "https://pilatescollectiveclub.com/pictures/pcc-logo.png",
        },
      },
      "datePublished": "2026-09-28",
      "dateModified": "2026-09-28",
      "url": PAGE_URL,
      "mainEntityOfPage": PAGE_URL,
      "articleSection": "Lagree",
      "inLanguage": "en-US",
    },
    {
      "@type": "ItemList",
      "name": "Lagree Fitness Machines and Accessories (2026)",
      "numberOfItems": ALL_ITEMS.length,
      "itemListElement": ALL_ITEMS.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "description": p.description,
          "offers": { "@type": "Offer", "priceCurrency": "USD", "price": p.price.replace(/[^0-9.]/g, "") || "0", "availability": "https://schema.org/InStock", "url": p.url },
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Lagree Fitness", "item": PAGE_URL },
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

function TierCard({ p }: { p: Pick }) {
  return (
    <div id={p.id} className="scroll-mt-28">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={chipStyle}>{p.tier}</span>
      </div>
      <ProductCard name={p.name} description={p.description} price={p.price} affiliateUrl={p.url} />
    </div>
  );
}

export default function LagreeFitnessPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={eyebrowStyle}>Brand Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Lagree</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Lagree Fitness<br /><span style={{ color: "#8b4a31" }}>(2026): The Micro, Megaformer &amp; What to Buy</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 11 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Most links on this page go to Amazon, and we earn a small commission on qualifying purchases. The Megaformer is not sold on Amazon and links directly to lagreefitness.com; it is labelled as such.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Lagree Fitness is the company behind the Lagree method and the Megaformer, the spring-loaded machine you shake on in Lagree studios. What most people do not realise is that you can buy genuine Lagree-branded equipment for home: The Micro, Lagree Fitness&apos;s compact home machine, and its accessories are sold by Lagree Fitness through its own Amazon store. This guide covers who the brand is, how the method works, the machine family, and exactly what a full home setup costs.
            </p>
            <p className="text-sm leading-relaxed" style={bodyStyle}>
              Every Amazon listing below was checked as live on September 28, 2026, at the price shown. The Micro and the Micro Pulley Cables were low on stock at that time; if either is unavailable, buy direct from{" "}
              <a href={LAGREE_DIRECT} target="_blank" rel="noopener noreferrer" style={inlineLinkStyle}>lagreefitness.com</a>. Prices change, so the final price is whatever the retailer shows at checkout.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-reformers-aerial-row.png" alt="Rows of Lagree-style machines in a studio — Lagree Fitness brand guide" fill className="object-cover" style={{ filter: "brightness(0.85)" }} priority />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            {/* Related hubs */}
            <div className="mb-10 mt-4 flex flex-col sm:flex-row gap-3">
              <Link href="/blog/lagree-essentials" className="flex-1 rounded-xl p-4 text-sm font-semibold" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.4)", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif", textDecoration: "none" }}>
                Going to class? See our Lagree essentials →
              </Link>
              <Link href="/blog/lagree-for-beginners" className="flex-1 rounded-xl p-4 text-sm font-semibold" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.4)", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif", textDecoration: "none" }}>
                First class coming up? → Lagree for beginners
              </Link>
            </div>

            {/* At a glance table */}
            <div className="mb-16 overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
              <div className="px-6 py-4" style={{ backgroundColor: "#f6f3f2" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={eyebrowStyle}>At a Glance — Lagree Fitness Equipment</p>
              </div>
              {GLANCE.map((p, i) => (
                <div key={p.id} className="flex items-center gap-3 sm:gap-4 px-6 py-4" style={{ borderTop: i === 0 ? "none" : "1px solid rgba(217,194,186,0.25)", backgroundColor: "#ffffff" }}>
                  <span className="text-base font-semibold w-7 shrink-0 text-center" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs uppercase tracking-[0.12em]" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
                      <a href={`#${p.id}`} style={{ color: "#86736d", textDecoration: "none" }}>{p.shortName}</a>
                    </p>
                    <p className="text-sm font-semibold leading-tight mt-0.5" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{p.name}</p>
                    <p className="text-xs mt-0.5 md:hidden" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{p.price}</p>
                  </div>
                  <span className="text-xs font-semibold hidden md:block shrink-0 mr-3" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{p.price}</span>
                  <a href={p.url} target="_blank" rel="noopener noreferrer sponsored nofollow"
                    style={{ display: "block", fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "10px 14px", whiteSpace: "nowrap", flexShrink: 0 }}
                  >Shop →</a>
                </div>
              ))}
              <div className="px-6 py-4 flex justify-between gap-3 text-sm font-semibold" style={{ borderTop: "1px solid rgba(217,194,186,0.25)", backgroundColor: "#f6f3f2", color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>
                <span>Full Micro home setup (items 01–04)</span>
                <span>{fmt(SETUP_TOTAL)}</span>
              </div>
            </div>

            {/* What Lagree Fitness is */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={h2Style}>What Lagree Fitness is</h2>
              <p className="text-sm leading-relaxed mb-4" style={bodyStyle}>
                Lagree Fitness is the company behind the Lagree method, which was created by Sebastien Lagree, and it makes the machines the method is taught on. When you book a Lagree class, the machine under you is a Megaformer, and the workout is built around it. That tight link between method and machine is what makes Lagree different from most boutique formats: the equipment is not generic gym kit with a branded class on top, it is the thing the whole programme is written for.
              </p>
              <p className="text-sm leading-relaxed mb-4" style={bodyStyle}>
                For shoppers, the brand splits into two product lines. The Megaformer is the commercial studio machine, sold directly by Lagree Fitness. The Micro is the compact home machine, and it, together with its rear platform, handlebars and pulley cables, is sold by Lagree Fitness on Amazon. That matters because it means the Amazon listings on this page are the real, brand-sold products, not look-alikes from unrelated sellers.
              </p>
              <p className="text-sm leading-relaxed" style={bodyStyle}>
                If you are comparing Lagree with Pilates before you commit to either, start with{" "}
                <Link href="/blog/lagree-vs-pilates" style={inlineLinkStyle}>Lagree vs Pilates</Link>, then come back here for the equipment.
              </p>
            </div>

            {/* The method */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={h2Style}>The Lagree method in brief</h2>
              <p className="text-sm leading-relaxed mb-6" style={bodyStyle}>
                Lagree is a high-intensity, low-impact workout. Instead of jumping or running, you move slowly and with control against spring resistance, keeping muscles working for long stretches. The shaking you feel halfway through a set is the point.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { heading: "Slow and controlled", body: "Every rep is deliberately slow. Moving fast actually makes it easier, which is why instructors keep cueing you to slow down." },
                  { heading: "Time under tension", body: "Muscles stay loaded for the whole set rather than resting at the top or bottom of each rep. That is where the burn comes from." },
                  { heading: "Springs and a carriage", body: "Like a Pilates reformer, the machine uses springs and a sliding carriage, but the layout, platforms and exercise library are Lagree's own." },
                  { heading: "Low impact, high effort", body: "There is no jumping, which is easier on joints, yet the workout is intense. Strength and cardio happen in the same class." },
                ].map((item) => (
                  <div key={item.heading} className="rounded-xl p-5" style={cardStyle}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.heading}</p>
                    <p className="text-sm leading-relaxed" style={bodyStyle}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Studio machine */}
            <div className="flex items-center gap-4 mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] shrink-0" style={eyebrowStyle}>The studio machine</p>
              <div className="flex-1 h-px" style={{ backgroundColor: "#d9c2ba" }} />
            </div>
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-4" style={h2Style}>The Megaformer</h2>
              <p className="text-sm leading-relaxed mb-8" style={bodyStyle}>
                The Megaformer is the machine that defines Lagree. It is built for studios: commercial-grade, designed for back-to-back classes and sized for a studio floor rather than a spare room. Lagree Fitness sells it directly, and current models are referred to as the M3S and M3X. We do not quote a price here because Lagree Fitness provides pricing on request. For most people reading this, the Megaformer is the machine you use in class, not the one you buy.
              </p>
              <TierCard p={MEGAFORMER} />
              <p className="text-sm leading-relaxed mt-2" style={bodyStyle}>
                Comparing Lagree machines and the alternatives? See our{" "}
                <Link href="/blog/best-megaformer-machine" style={inlineLinkStyle}>best Megaformer machine guide</Link>.
              </p>
            </div>

            {/* The Micro */}
            <div className="flex items-center gap-4 mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] shrink-0" style={eyebrowStyle}>The home machine</p>
              <div className="flex-1 h-px" style={{ backgroundColor: "#d9c2ba" }} />
            </div>
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-4" style={h2Style}>The Micro by Lagree Fitness</h2>
              <p className="text-sm leading-relaxed mb-6" style={bodyStyle}>
                The Micro is the reason this page exists. It is Lagree Fitness&apos;s own answer to &ldquo;can I do Lagree at home?&rdquo;, and at {MICRO.price} it is sold by Lagree Fitness through its Amazon store. Here is what the listing says it does, and what that means in practice.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { heading: "Megaformer-style, smaller", body: "Designed to deliver the Megaformer-style workout in a smaller machine. It is the brand's own home format, not a third-party copy." },
                  { heading: "Strength and cardio", body: "Low-impact, high-intensity strength and cardio training, the same promise as a studio class." },
                  { heading: "Compact and portable", body: "Compact, lightweight and portable. It stores under a bed, against a wall or on a bike rack, so it does not need a dedicated room." },
                  { heading: "Fits tall users", body: "Accommodates users up to 6'8\", which is unusually generous for a home machine." },
                ].map((item) => (
                  <div key={item.heading} className="rounded-xl p-5" style={cardStyle}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.heading}</p>
                    <p className="text-sm leading-relaxed" style={bodyStyle}>{item.body}</p>
                  </div>
                ))}
              </div>
              <TierCard p={MICRO} />
              <p className="text-sm leading-relaxed mt-2 mb-4" style={bodyStyle}>
                <span className="font-semibold" style={{ color: "#1b1c1c" }}>Limited stock:</span> the Micro was showing low stock on Amazon when we checked. If the listing is unavailable, the same machine is sold direct at{" "}
                <a href={LAGREE_DIRECT} target="_blank" rel="noopener noreferrer" style={inlineLinkStyle}>lagreefitness.com</a>.
              </p>
              <p className="text-sm leading-relaxed" style={bodyStyle}>
                An honest caveat: a machine at home does not come with an instructor. Lagree relies heavily on cueing (slower, lower, tuck), so the Micro makes most sense for people who already know the method from class. New to Lagree? Take a few studio classes first — our{" "}
                <Link href="/blog/lagree-for-beginners" style={inlineLinkStyle}>Lagree for beginners guide</Link> explains what to expect — and read{" "}
                <Link href="/blog/lagree-at-home" style={inlineLinkStyle}>Lagree at home</Link> for how to structure home sessions.
              </p>
            </div>

            {/* Accessories */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-4" style={h2Style}>Micro accessories: what each one unlocks</h2>
              <p className="text-sm leading-relaxed mb-8" style={bodyStyle}>
                The Micro works on its own, but Lagree Fitness sells three add-ons, all through the same Amazon store. They are not all equal. Here is how to decide.
              </p>
              <div className="space-y-8">
                {ACCESSORIES.map((p) => (
                  <TierCard key={p.id} p={p} />
                ))}
              </div>
              <div className="mt-6 rounded-2xl p-6 md:p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.5)" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={eyebrowStyle}>How to prioritise</p>
                <ul className="space-y-3">
                  <li className="text-sm leading-relaxed" style={bodyStyle}>
                    <span className="font-semibold" style={{ color: "#1b1c1c" }}>Rear platform first.</span> It adds the most exercises (express lunge, 5th lunge, super crunch, giant wheelbarrow), and it is required before handlebars can go at the back.
                  </li>
                  <li className="text-sm leading-relaxed" style={bodyStyle}>
                    <span className="font-semibold" style={{ color: "#1b1c1c" }}>The handlebar gotcha.</span> One pair ({ACCESSORIES[1].price}) goes at the front or the back, not both. If you want handlebars in both positions at once, buy two pairs: 2 × $190.00 = {fmt(HANDLEBAR_PRICE * 2)}.
                  </li>
                  <li className="text-sm leading-relaxed" style={bodyStyle}>
                    <span className="font-semibold" style={{ color: "#1b1c1c" }}>Pulley cables last.</span> Useful for cable work, but the listing gives no further detail and stock is limited. If Amazon is out, check{" "}
                    <a href={LAGREE_DIRECT} target="_blank" rel="noopener noreferrer" style={inlineLinkStyle}>lagreefitness.com</a>.
                  </li>
                </ul>
              </div>
            </div>

            {/* Cost box */}
            <div className="mb-16 rounded-2xl p-6 md:p-8" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.5)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={eyebrowStyle}>What the full setup costs</p>
              <h2 className="text-2xl font-semibold mb-3" style={h2Style}>The Micro home setup, added up</h2>
              <p className="text-sm leading-relaxed mb-6" style={bodyStyle}>
                Using the verified Amazon prices on this page, with one pair of handlebars.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-5" style={{ backgroundColor: "#f6f3f2" }}>
                  <p className="text-base font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Full Micro setup</p>
                  <ul className="space-y-1.5 mb-4">
                    {SETUP.map((p) => (
                      <li key={p.id} className="flex justify-between gap-3 text-xs" style={bodyStyle}>
                        <span>{p.name}</span>
                        <span className="shrink-0 font-semibold">{p.price}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between pt-3 text-sm font-semibold" style={{ borderTop: "1px solid #d9c2ba", color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>
                    <span>Total</span>
                    <span>{fmt(SETUP_TOTAL)}</span>
                  </div>
                  <p className="text-xs mt-3" style={bodyStyle}>$990.00 + $290.00 + $190.00 + $230.00 = {fmt(SETUP_TOTAL)}</p>
                </div>
                <div className="rounded-xl p-5" style={{ backgroundColor: "#f6f3f2" }}>
                  <p className="text-base font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Other ways to build it</p>
                  <ul className="space-y-1.5 mb-4">
                    <li className="flex justify-between gap-3 text-xs" style={bodyStyle}>
                      <span>The Micro only</span>
                      <span className="shrink-0 font-semibold">{fmt(MICRO_PRICE)}</span>
                    </li>
                    <li className="flex justify-between gap-3 text-xs" style={bodyStyle}>
                      <span>Micro + rear platform ($990.00 + $290.00)</span>
                      <span className="shrink-0 font-semibold">{fmt(MICRO_PRICE + toNumber(ACCESSORIES[0].price))}</span>
                    </li>
                    <li className="flex justify-between gap-3 text-xs" style={bodyStyle}>
                      <span>Full setup with two handlebar pairs ({fmt(SETUP_TOTAL)} + $190.00)</span>
                      <span className="shrink-0 font-semibold">{fmt(SETUP_TWO_BARS)}</span>
                    </li>
                  </ul>
                  <div className="flex justify-between pt-3 text-sm font-semibold" style={{ borderTop: "1px solid #d9c2ba", color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>
                    <span>Class gear (optional)</span>
                    <span>{fmt(GEAR_TOTAL)}</span>
                  </div>
                  <p className="text-xs mt-3" style={bodyStyle}>The six gear picks listed further down this page.</p>
                </div>
              </div>

              <div className="mt-6 rounded-xl p-5" style={{ backgroundColor: "#f6f3f2" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={eyebrowStyle}>Cost vs classes</p>
                <p className="text-sm leading-relaxed mb-3" style={bodyStyle}>
                  Lagree classes commonly cost $35–$45 or more each in major US cities. Dividing each price by $45 and by $35 gives a rough break-even:
                </p>
                <ul className="space-y-2">
                  {[
                    { label: "The Micro only", n: MICRO_PRICE },
                    { label: "Micro + rear platform", n: MICRO_PRICE + toNumber(ACCESSORIES[0].price) },
                    { label: "Full Micro setup", n: SETUP_TOTAL },
                  ].map((row) => (
                    <li key={row.label} className="text-sm" style={bodyStyle}>
                      <span className="font-semibold" style={{ color: "#1b1c1c" }}>{row.label}</span> ({fmt(row.n)}): about {classRange(row.n)} classes
                    </li>
                  ))}
                </ul>
                <p className="text-sm leading-relaxed mt-3" style={bodyStyle}>
                  If you go three times a week, the full setup is worth roughly three to four months of classes at those prices. If you go once a week, it takes most of a year. Most people who buy a Micro keep some studio classes for the instruction, so treat these figures as a ceiling on savings rather than a promise. See{" "}
                  <Link href="/blog/how-much-does-pilates-cost" style={inlineLinkStyle}>how much Pilates costs</Link>{" "}
                  for how boutique class pricing compares.
                </p>
              </div>
            </div>

            {/* Gear */}
            <div className="flex items-center gap-4 mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] shrink-0" style={eyebrowStyle}>What to wear and bring</p>
              <div className="flex-1 h-px" style={{ backgroundColor: "#d9c2ba" }} />
            </div>
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-4" style={h2Style}>Gear for Lagree, at home or in class</h2>
              <p className="text-sm leading-relaxed mb-6" style={bodyStyle}>
                Lagree is slower and sweatier than most Pilates reformer classes, so grip matters more, and loose shorts or zips are a liability on a moving carriage. These six picks cover the basics; the full best, budget and splurge list for every category is in our{" "}
                <Link href="/blog/lagree-essentials" style={inlineLinkStyle}>Lagree essentials guide</Link>.
              </p>
              <div className="overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
                {GEAR.map((g, i) => (
                  <div key={g.name} className="flex items-center gap-3 sm:gap-4 px-6 py-4" style={{ borderTop: i === 0 ? "none" : "1px solid rgba(217,194,186,0.25)", backgroundColor: "#ffffff" }}>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs uppercase tracking-[0.12em]" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
                        <Link href={g.guideHref} style={{ color: "#86736d", textDecoration: "none" }}>{g.category}</Link>
                      </p>
                      <p className="text-sm font-semibold leading-tight mt-0.5" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{g.name} · {g.price}</p>
                      <p className="text-xs mt-0.5" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{g.note}</p>
                    </div>
                    <a href={g.url} target="_blank" rel="noopener noreferrer sponsored nofollow"
                      style={{ display: "block", fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "10px 14px", whiteSpace: "nowrap", flexShrink: 0 }}
                    >Shop →</a>
                  </div>
                ))}
                <div className="px-6 py-4 flex justify-between gap-3 text-sm font-semibold" style={{ borderTop: "1px solid rgba(217,194,186,0.25)", backgroundColor: "#f6f3f2", color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>
                  <span>All six</span>
                  <span>{fmt(GEAR_TOTAL)}</span>
                </div>
              </div>
            </div>

            {/* Micro vs Pilates reformer */}
            <div className="flex items-center gap-4 mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] shrink-0" style={eyebrowStyle}>Honest comparison</p>
              <div className="flex-1 h-px" style={{ backgroundColor: "#d9c2ba" }} />
            </div>
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-4" style={h2Style}>The Micro vs a Pilates reformer</h2>
              <p className="text-sm leading-relaxed mb-4" style={bodyStyle}>
                Both machines use springs and a sliding carriage, so it is tempting to treat them as interchangeable. They are not. Lagree is a different method with its own machine layout, exercise library and pace: slower, longer sets and more time under tension. A Pilates reformer is designed for Pilates repertoire, with footbar and strap work built around it. You can get a hard workout on either, but you will not be doing Lagree on a Pilates reformer.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { heading: "Choose the Micro if…", body: "You love Lagree classes specifically, want the brand's own home machine, and value compact storage. Budget $990 to $1,700 depending on accessories." },
                  { heading: "Choose a Pilates reformer if…", body: "You actually prefer Pilates, or you want a machine for Pilates repertoire. Reformers span a wide price range, from under $300 to several thousand dollars." },
                ].map((item) => (
                  <div key={item.heading} className="rounded-xl p-5" style={cardStyle}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.heading}</p>
                    <p className="text-sm leading-relaxed" style={bodyStyle}>{item.body}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-8" style={bodyStyle}>
                If you decide a Pilates reformer is the better fit, these two bracket the market. To be clear: <span className="font-semibold" style={{ color: "#1b1c1c" }}>neither is a Lagree machine.</span>
              </p>
              <div className="space-y-8">
                {ALTERNATIVES.map((p) => (
                  <TierCard key={p.id} p={p} />
                ))}
              </div>
              <p className="text-sm leading-relaxed mt-2" style={bodyStyle}>
                More on the Pilates side: <Link href="/blog/best-foldable-pilates-reformer" style={inlineLinkStyle}>best foldable Pilates reformers</Link> and{" "}
                <Link href="/blog/merrithew-pilates" style={inlineLinkStyle}>our Merrithew brand guide</Link>. Tall? See{" "}
                <Link href="/blog/best-pilates-reformer-for-tall-people" style={inlineLinkStyle}>best reformers for tall people</Link> — though at up to 6&apos;8&quot;, the Micro already covers most heights.
              </p>
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
            </div>

            {/* Further reading */}
            <div>
              <h2 className="text-2xl font-semibold mb-8" style={h2Style}>Further reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="Best Megaformer Machine" excerpt="Lagree equipment reviewed, plus the studio-grade alternatives worth considering." href="/blog/best-megaformer-machine" category="Lagree" readTime="11 min read" date="September 2026" imageUrl="/pictures/stitch-reformers-aerial-row.png" />
                <ArticleCard title="Lagree at Home" excerpt="How to train the Lagree way at home, from the Micro to floor work between classes." href="/blog/lagree-at-home" category="Lagree" readTime="9 min read" date="September 2026" imageUrl="/pictures/stitch-hands-on-carriage.png" />
                <ArticleCard title="Lagree vs Pilates" excerpt="What separates the two methods, and which suits your goals and body." href="/blog/lagree-vs-pilates" category="Comparison" readTime="10 min read" date="June 2026" imageUrl="/pictures/stitch-reformer-row-studio.png" />
                <ArticleCard title="Lagree Essentials" excerpt="Best, budget and splurge picks for every piece of Lagree gear — from grip socks to recovery." href="/blog/lagree-essentials" category="Equipment" readTime="12 min read" date="September 2026" imageUrl="/pictures/stitch-reformer-row-studio.png" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best Lagree studios in Los Angeles…" />
      </main>
      <Footer />
    </>
  );
}
