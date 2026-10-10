import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import { jsonLdHtml } from "@/lib/schema";

const PAGE_URL = "https://pilatescollectiveclub.com/blog/lagree-recovery";
const HERO_IMAGE = "https://pilatescollectiveclub.com/pictures/stitch-studio-bench-towels.png";
const TITLE = "Sore After Lagree? Recovery Gear That Helps (2026)";
const DESCRIPTION =
  "Why Lagree makes you so sore, how long it lasts, what actually helps, and the recovery gear worth buying, from an $8 massage ball to Normatec boots.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: "The honest guide to Lagree soreness: why slow work hurts the next day, what the evidence says helps, and the recovery tools worth the money.",
    type: "article",
    url: PAGE_URL,
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: "Towels on a studio bench — recovering after Lagree" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sore After Lagree? What Helps (2026)",
    description: "Why Lagree soreness happens, how long it lasts and the recovery gear worth buying.",
    images: [HERO_IMAGE],
  },
  keywords: [
    "sore after lagree",
    "lagree soreness",
    "lagree recovery",
    "how long sore after lagree",
    "lagree doms",
    "massage gun for lagree",
    "foam roller after lagree",
    "is it normal to be sore after lagree",
    "lagree recovery tools",
    "lagree sore legs",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=pilatescollective-20`;

type Pick = {
  id: string;
  badge: string;
  shortName: string;
  name: string;
  price: string;
  url: string;
  description: string;
};

const BASICS: Pick[] = [
  {
    id: "kieba-balls",
    badge: "Best Under $10",
    shortName: "Massage balls",
    name: "Kieba Massage Lacrosse Balls (Set of 2)",
    price: "$7.99",
    url: amz("B017V7UKW2"),
    description:
      "Two firm, solid-rubber balls. You lean into one against a wall or the floor and let body weight do the work. They reach the glutes and the outer hips that Lagree lunges load, and the arches of your feet after a long class on grip socks. They are the cheapest effective recovery tool there is.",
  },
  {
    id: "triggerpoint-grid",
    badge: "Best Foam Roller",
    shortName: "Foam roller",
    name: "TriggerPoint GRID Foam Roller (13\")",
    price: "$28.96",
    url: amz("B00BIBMB70"),
    description:
      "A multi-density foam surface over a rigid, hollow core that will not break down or lose shape. The 13-inch length is compact enough to keep by the sofa, and the listing includes access to TriggerPoint's free instructional video library. Quads, glutes and upper back are the Lagree priorities. Sold by Amazon.com.",
  },
  {
    id: "dr-teals",
    badge: "Best Bath Soak",
    shortName: "Epsom salt",
    name: "Dr Teal's Arnica Body Relief Epsom Salt Soak (3 lb)",
    price: "$5.87",
    url: amz("B0DTKLKYW8"),
    description:
      "Magnesium sulfate with arnica, menthol and eucalyptus oil. To be honest about it, evidence that magnesium absorbs through skin in any useful amount is weak. The 20-minute warm bath is the part that feels good, and the scent makes it a ritual. At under $6, that is fine. Sold by Amazon.com.",
  },
  {
    id: "fitrell-socks",
    badge: "Best Compression Socks",
    shortName: "Compression socks",
    name: "FITRELL Compression Socks 20–30 mmHg (3 Pairs)",
    price: "$14.99",
    url: amz("B07VWT4XRG"),
    description:
      "Three pairs of knee-high, graduated compression socks with moisture-wicking fabric. Many people like how they feel on calves after heavy leg days, though research on compression for recovery is mixed. Size by calf circumference: this listing is S/M, which fits a 9–15 inch calf. If you have a circulation condition, ask your doctor before using 20–30 mmHg compression.",
  },
];

const GUNS: Pick[] = [
  {
    id: "renpho-ascend",
    badge: "Best Budget Massage Gun",
    shortName: "Budget massage gun",
    name: "RENPHO Ascend Massage Gun",
    price: "$59.99",
    url: amz("B0F9WKKZYS"),
    description:
      "Seven amplitude settings from 6 to 12mm, five speeds (1,800 to 2,600 RPM), five heads and a joystick with a display. It covers most of what a premium gun does for a third of the price. Sold by Renpho Wellness.",
  },
  {
    id: "hypervolt-go-3",
    badge: "Best Value",
    shortName: "Travel massage gun",
    name: "Hyperice Hypervolt Go 3",
    price: "$149.00",
    url: amz("B0G82W9ZZK"),
    description:
      "A 1.6 lb travel gun with 5 speeds, flat and wedge heads, up to 4 hours of battery and USB-C charging, in a carry case. It is light and quiet enough to use in the studio changing room right after class. Sold by Hyperice.",
  },
  {
    id: "theragun-mini",
    badge: "Best Premium",
    shortName: "Premium massage gun",
    name: "TheraGun Mini (3rd Gen)",
    price: "$169.99",
    url: amz("B0DV7JN7ZD"),
    description:
      "Three attachments, one-button control with three speeds, and Bluetooth for guided routines in the Therabody app. Compact enough for a gym bag, with the brand most physical therapists' clients already know. Sold by TheraGun.",
  },
];

const SPLURGE: Pick = {
  id: "normatec-3",
  badge: "The Splurge",
  shortName: "Compression boots",
  name: "Hyperice Normatec 3 Legs (Standard)",
  price: "$899.00",
  url: amz("B0B72QBWHC"),
  description:
    "Dynamic air compression boots with 7 levels, 5 overlapping zones and ZoneBoost targeting. They are a luxury: they feel excellent after a hard leg day, and they make sense if you train Lagree five or more times a week. They are not essential for anyone. Choose the size carefully; this listing is Standard. Sold by Hyperice.",
};

const ALL_ITEMS: Pick[] = [...BASICS, ...GUNS, SPLURGE];

const toNumber = (price: string) => {
  const n = parseFloat(price.replace(/[^0-9.]/g, ""));
  return Number.isNaN(n) ? 0 : n;
};
const fmt = (n: number) => `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const BASICS_TOTAL = BASICS.reduce((sum, p) => sum + toNumber(p.price), 0); // 7.99 + 28.96 + 5.87 + 14.99 = 57.81
const STARTER_TOTAL = toNumber(BASICS[0].price) + toNumber(BASICS[1].price); // 7.99 + 28.96 = 36.95

const TIMELINE = [
  { when: "During class", what: "The shakes. That is muscle fatigue, not soreness, and it is the point of the method." },
  { when: "12–24 hours", what: "Soreness starts to creep in, typically in the quads, glutes, abs and inner thighs." },
  { when: "24–72 hours", what: "The peak. Stairs and sitting down are the hard part. This is delayed-onset muscle soreness (DOMS)." },
  { when: "3–5 days", what: "Fading. Light movement usually makes it feel better, not worse." },
  { when: "After a few weeks", what: "With regular classes, the same workout usually leaves you much less sore." },
];

const FAQS = [
  {
    q: "Why am I so sore after Lagree?",
    a: "Lagree is slow, with long time under tension and almost no rest, and much of the work happens on the return, as you control the carriage against the springs. That lowering, braking phase (eccentric work) is the type of muscle work most associated with delayed-onset muscle soreness. New movement patterns add to it, which is why beginners feel it most.",
  },
  {
    q: "How long does soreness after Lagree last?",
    a: "Delayed-onset muscle soreness typically starts 12 to 24 hours after exercise, peaks around 24 to 72 hours, and fades within about five days. With regular classes, most people find the same workout leaves them much less sore after a few weeks.",
  },
  {
    q: "Should I go to Lagree when I am sore?",
    a: "Mild soreness is usually fine. Many people find a class or light movement makes them feel better. Choose lighter springs, tell your instructor, and work at the pace that allows good form. If soreness is severe or changes how you move, take a rest day or do gentle walking instead.",
  },
  {
    q: "Is a massage gun or a foam roller better after Lagree?",
    a: `Start with a foam roller and a massage ball: together they cost ${fmt(STARTER_TOTAL)} and cover most needs. A massage gun is more convenient for glutes, calves and hard-to-reach spots, and is easier to use daily. Research suggests massage and foam rolling can modestly reduce how sore you feel.`,
  },
  {
    q: "When is soreness after Lagree a warning sign?",
    a: "Get medical attention for severe muscle pain out of proportion to the workout, unusual weakness, swelling, or dark, tea- or cola-coloured urine. Together these can signal rhabdomyolysis, a rare but serious condition sometimes linked to very intense new exercise. Also stop and get checked for sharp pain, pain in a joint rather than a muscle, or pain that worsens after a week.",
  },
  {
    q: "Do Epsom salt baths help Lagree soreness?",
    a: "The warm bath is relaxing, and that has real value. Evidence that magnesium from Epsom salts absorbs through skin in a meaningful amount is weak, so think of it as a ritual rather than a treatment. At about $6 a bag, it is an inexpensive one.",
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
      "name": "Best Recovery Gear After Lagree (2026)",
      "numberOfItems": ALL_ITEMS.length,
      "itemListElement": ALL_ITEMS.map((p, i) => ({
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
        { "@type": "ListItem", "position": 3, "name": "Sore After Lagree", "item": PAGE_URL },
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

function TierCard({ p }: { p: Pick }) {
  return (
    <div id={p.id} className="scroll-mt-28">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={chipStyle}>{p.badge}</span>
      </div>
      <ProductCard name={p.name} description={p.description} price={p.price} affiliateUrl={p.url} />
    </div>
  );
}

function Divider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] shrink-0" style={eyebrowStyle}>{label}</p>
      <div className="flex-1 h-px" style={{ backgroundColor: "#d9c2ba" }} />
    </div>
  );
}

export default function LagreeRecoveryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={eyebrowStyle}>Recovery</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Lagree</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Sore After Lagree?<br /><span style={{ color: "#8b4a31" }}>What Helps, and the Gear Worth Buying</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated October 2026 · 11 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Product links on this page go to Amazon, and we earn a small commission on qualifying purchases at no extra cost to you. This article is general information, not medical advice.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              You survived the class. You even enjoyed the shakes. Then you tried to sit down the next morning. Lagree has a reputation for next-day soreness that surprises even people who lift or run, and there is a good reason for it. This guide explains why it happens and how long it lasts. It covers what genuinely helps, which is less than marketing suggests, and the recovery tools worth your money at every budget.
            </p>
            <p className="text-sm leading-relaxed" style={bodyStyle}>
              Every product was checked live on Amazon on October 3, 2026, at the price shown. Prices change, so the final price is whatever Amazon shows at checkout.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-studio-bench-towels.png" alt="Folded towels on a studio bench — recovering after Lagree" fill className="object-cover" style={{ filter: "brightness(0.85)" }} priority />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-10 mt-4 flex flex-col sm:flex-row gap-3">
              <a href="#kit" className="flex-1 rounded-xl p-4 text-sm font-semibold" style={hubStyle}>
                Skip to the recovery gear →
              </a>
              <Link href="/blog/lagree-for-beginners" className="flex-1 rounded-xl p-4 text-sm font-semibold" style={hubStyle}>
                New to Lagree? → Beginner&apos;s guide
              </Link>
            </div>

            {/* Why */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={h2Style}>Why Lagree makes you so sore</h2>
              <p className="text-sm leading-relaxed mb-6" style={bodyStyle}>
                The soreness you feel a day or two later is delayed-onset muscle soreness (DOMS). Lagree is almost designed to cause it, for three reasons:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { heading: "The slow return", body: "Half of every rep is controlling the carriage against the springs. That braking, lowering phase (eccentric work) is the type most linked to DOMS." },
                  { heading: "No rest", body: "Long time under tension with few breaks takes muscles to fatigue far more often than a typical gym session." },
                  { heading: "New angles", body: "Lunges between a moving carriage and a fixed platform load muscles in unfamiliar ways. Novelty is a major soreness trigger." },
                ].map((item) => (
                  <div key={item.heading} className="rounded-xl p-5" style={cardStyle}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.heading}</p>
                    <p className="text-sm leading-relaxed" style={bodyStyle}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={h2Style}>How long Lagree soreness lasts</h2>
              <div className="overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
                {TIMELINE.map((t, i) => (
                  <div key={t.when} className="flex flex-col sm:flex-row gap-1 sm:gap-6 px-6 py-4" style={{ borderTop: i === 0 ? "none" : "1px solid rgba(217,194,186,0.25)", backgroundColor: "#ffffff" }}>
                    <p className="text-sm font-semibold sm:w-40 shrink-0" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{t.when}</p>
                    <p className="text-sm leading-relaxed" style={bodyStyle}>{t.what}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What helps */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={h2Style}>What actually helps (and what is just nice)</h2>
              <p className="text-sm leading-relaxed mb-6" style={bodyStyle}>
                The honest truth about DOMS is that time fixes it. Nothing makes it vanish overnight. Some things reliably make it more bearable, and some are mostly ritual. Both have their place, as long as you know which is which.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="rounded-xl p-5" style={cardStyle}>
                  <p className="text-sm font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Worth doing</p>
                  <ul className="space-y-1.5">
                    {[
                      "Gentle movement: walking, an easy bike ride, light stretching",
                      "Sleep, which matters more than any gadget",
                      "Enough protein and fluids across the day",
                      "Massage and foam rolling, which can modestly reduce how sore you feel",
                      "Coming back regularly; consistency cuts soreness most",
                    ].map((x) => (
                      <li key={x} className="text-sm leading-relaxed flex gap-2" style={bodyStyle}><span style={{ color: "#536257" }}>✓</span><span>{x}</span></li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl p-5" style={cardStyle}>
                  <p className="text-sm font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Nice, but mostly ritual</p>
                  <ul className="space-y-1.5">
                    {[
                      "Epsom salt baths; the warmth helps, but skin absorption of magnesium is doubtful",
                      "Compression socks, which feel good though recovery evidence is mixed",
                      "Compression boots: a luxury, not a necessity",
                      "Anything promising to \"flush out lactic acid\", which is not what causes DOMS",
                    ].map((x) => (
                      <li key={x} className="text-sm leading-relaxed flex gap-2" style={bodyStyle}><span style={{ color: "#86736d" }}>~</span><span>{x}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="rounded-2xl p-6" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.5)" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-2" style={eyebrowStyle}>When it is not normal soreness</p>
                <p className="text-sm leading-relaxed" style={bodyStyle}>
                  Get medical help for severe pain out of proportion to the workout, unusual weakness, swelling, or dark, tea- or cola-coloured urine. These can signal rhabdomyolysis, which is rare but serious. Sharp pain, pain in a joint rather than a muscle, or pain that worsens after a week also deserves a professional opinion.
                </p>
              </div>
            </div>

            {/* Day after plan */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={h2Style}>A simple day-after routine</h2>
              <ol className="space-y-3">
                {[
                  { h: "Morning: move.", b: "A 15–20 minute walk does more for stiff quads than sitting still." },
                  { h: "Midday: roll.", b: "60–90 seconds each on quads, glutes and upper back with a foam roller. Go slowly and keep the pressure moderate." },
                  { h: "Target the knots.", b: "Use a massage ball against a wall for glutes and outer hips, or a massage gun for 1–2 minutes per muscle group." },
                  { h: "Evening: unwind.", b: "A warm bath, gentle stretching and an early night." },
                  { h: "Next class: go lighter.", b: "Choose lighter springs and keep the tempo. Soreness fades fastest with regular sessions." },
                ].map((s, i) => (
                  <li key={s.h} className="flex gap-4">
                    <span className="text-base font-semibold w-7 shrink-0 text-center" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-sm leading-relaxed" style={bodyStyle}><span className="font-semibold" style={{ color: "#1b1c1c" }}>{s.h}</span> {s.b}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Kit */}
            <div id="kit" className="scroll-mt-28">
              <Divider label="The recovery kit" />
            </div>
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-4" style={h2Style}>Recovery gear worth buying after Lagree</h2>
              <p className="text-sm leading-relaxed mb-8" style={bodyStyle}>
                Start cheap. A massage ball and a foam roller ({fmt(STARTER_TOTAL)} together) handle most of what a Lagree regular needs. Add a massage gun if you train three or more times a week or want something quicker to use. Compression boots are for the devoted.
              </p>

              <div className="mb-10 overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
                <div className="px-6 py-4" style={{ backgroundColor: "#f6f3f2" }}>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={eyebrowStyle}>At a Glance — Lagree Recovery Gear</p>
                </div>
                {ALL_ITEMS.map((p, i) => (
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
                    <a href={p.url} target="_blank" rel="noopener noreferrer sponsored nofollow" style={shopStyle}>Shop →</a>
                  </div>
                ))}
                <div className="px-6 py-4 flex justify-between gap-3 text-sm font-semibold" style={{ borderTop: "1px solid rgba(217,194,186,0.25)", backgroundColor: "#f6f3f2", color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>
                  <span>All four basics (01–04)</span>
                  <span>{fmt(BASICS_TOTAL)}</span>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-6" style={h2Style}>The basics</h3>
              <div className="space-y-8 mb-12">
                {BASICS.map((p) => (
                  <TierCard key={p.id} p={p} />
                ))}
              </div>

              <h3 className="text-2xl font-semibold mb-4" style={h2Style}>Massage guns</h3>
              <p className="text-sm leading-relaxed mb-6" style={bodyStyle}>
                All three do the same basic job. You are paying for weight, noise, battery and brand. For Lagree, the glutes, quads, calves and the arches of your feet are where a gun earns its keep.
              </p>
              <div className="space-y-8 mb-12">
                {GUNS.map((p) => (
                  <TierCard key={p.id} p={p} />
                ))}
              </div>

              <h3 className="text-2xl font-semibold mb-6" style={h2Style}>The splurge</h3>
              <TierCard p={SPLURGE} />
              <p className="text-sm leading-relaxed mt-2" style={bodyStyle}>
                More options: <Link href="/blog/best-massage-gun-for-pilates" style={inlineLinkStyle}>best massage guns</Link>,{" "}
                <Link href="/blog/best-pilates-foam-roller" style={inlineLinkStyle}>best foam rollers</Link> and{" "}
                <Link href="/blog/best-massage-balls-for-pilates" style={inlineLinkStyle}>best massage balls</Link>.
              </p>
            </div>

            {/* Prevention */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-4" style={h2Style}>Less sore next time</h2>
              <p className="text-sm leading-relaxed mb-4" style={bodyStyle}>
                The most effective soreness fix is the least exciting one: come back. Muscles adapt quickly to a new type of work, so the first two or three weeks of Lagree are usually the worst. Until then, pick lighter springs, keep the slow tempo rather than chasing heavy loads, and space your first few classes a couple of days apart.
              </p>
              <p className="text-sm leading-relaxed" style={bodyStyle}>
                Good grip also matters more than people think. Slipping on a sweaty carriage makes you brace and tense in ways that leave you sorer. Grip socks and a towel help; see{" "}
                <Link href="/blog/best-lagree-grip-socks" style={inlineLinkStyle}>Lagree socks</Link> and{" "}
                <Link href="/blog/best-sweat-towel-for-lagree" style={inlineLinkStyle}>sweat towels for Lagree</Link>.
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
                <ArticleCard title="Lagree Exercises" excerpt="The signature moves you will hear in class, explained, plus floor versions for home." href="/blog/lagree-exercises" category="Lagree" readTime="12 min read" date="October 2026" imageUrl="/pictures/stitch-hands-on-carriage.png" />
                <ArticleCard title="Lagree for Beginners" excerpt="What to expect in your first class, what to wear, and how to survive the shakes." href="/blog/lagree-for-beginners" category="Lagree" readTime="10 min read" date="September 2026" imageUrl="/pictures/stitch-studio-modern-row.png" />
                <ArticleCard title="Best Lagree Gifts" excerpt="18 gifts a Lagree regular will actually use, from stocking stuffers to The Micro." href="/blog/best-lagree-gifts" category="Lagree" readTime="11 min read" date="October 2026" imageUrl="/pictures/stitch-studio-shelf-props.png" />
                <ArticleCard title="Lagree Essentials" excerpt="Best, budget and splurge picks for every piece of Lagree gear, from grip socks to recovery." href="/blog/lagree-essentials" category="Equipment" readTime="12 min read" date="September 2026" imageUrl="/pictures/stitch-reformer-row-studio.png" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates and Lagree studios worldwide." showSearch searchPlaceholder="Ask: best Lagree studios in Los Angeles…" />
      </main>
      <Footer />
    </>
  );
}
