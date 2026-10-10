import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import { jsonLdHtml } from "@/lib/schema";

const PAGE_URL = "https://pilatescollectiveclub.com/blog/lagree-for-weight-loss";
const HERO_IMAGE = "https://pilatescollectiveclub.com/pictures/stitch-studio-modern-row.png";
const TITLE = "Lagree for Weight Loss (2026): What to Really Expect";
const DESCRIPTION =
  "Can Lagree help you lose weight? An honest guide to what it does for fat loss and body shape, how often to go, how to track results, and the tools that help.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: "What Lagree can and cannot do for weight loss, how often to train, why the scale lies early on, and the tracking tools worth buying.",
    type: "article",
    url: PAGE_URL,
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: "A modern studio with rows of machines — Lagree for weight loss" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lagree for Weight Loss: What to Really Expect",
    description: "The honest guide: what Lagree does for fat loss, how often to go and how to track it.",
    images: [HERO_IMAGE],
  },
  keywords: [
    "lagree for weight loss",
    "does lagree help you lose weight",
    "lagree weight loss results",
    "lagree calories burned",
    "how often lagree to lose weight",
    "lagree results",
    "lagree body transformation",
    "is lagree good for weight loss",
    "lagree vs pilates weight loss",
    "lagree fat loss",
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

const TRACKING: Pick[] = [
  {
    id: "polar-h10",
    badge: "Best Heart Rate Monitor",
    shortName: "Chest strap",
    name: "Polar H10 Heart Rate Monitor Chest Strap",
    price: "$84.74",
    url: amz("B07PM54P4N"),
    description:
      "The best way to see what a Lagree class actually does to your heart rate. Chest straps read the heart's electrical signal and are generally more accurate during exercise than wrist sensors, which struggle when you grip handles and plank. Polar calls the H10 the most accurate heart rate sensor in its history. It connects over Bluetooth and ANT+ at the same time, so it pairs with most watches and apps. Sold by Amazon.com.",
  },
  {
    id: "coospo-h808s",
    badge: "Best Budget Chest Strap",
    shortName: "Budget chest strap",
    name: "COOSPO H808S Heart Rate Monitor Chest Strap",
    price: "$36.99",
    url: amz("B07R8741CN"),
    description:
      "A quarter of the Polar's price, with Bluetooth and ANT+, IP67 water resistance and an LED and beep to confirm it is working. It works with third-party apps and sports watches. It is the easy way to get chest-strap heart-rate data without a big outlay.",
  },
  {
    id: "withings-body-smart",
    badge: "Best Smart Scale",
    shortName: "Smart scale",
    name: "WITHINGS Body Smart Scale",
    price: "$129.95",
    url: amz("B0C3JNJPZ7"),
    description:
      "Tracks weight to within 50 g and estimates body fat percentage and body composition, with trends on its colour display. It syncs over Wi-Fi and Bluetooth and is compatible with Apple Health. Composition is the point for Lagree, because building muscle while losing fat can leave the number on a basic scale stuck. Sold by Amazon.com.",
  },
  {
    id: "etekcity-scale",
    badge: "Best Budget Scale",
    shortName: "Budget smart scale",
    name: "Etekcity Smart Scale (Weight, Body Fat & BMI)",
    price: "$19.94",
    url: amz("B095YJW56C"),
    description:
      "Weight, body fat and BMI estimates for under $20, syncing with Apple Health and other popular fitness apps through the VeSync app. Like all bathroom-scale body fat readings, the number shifts with hydration, so watch the weekly trend, not the daily figure. Sold by Amazon.com.",
  },
  {
    id: "perfect-tape",
    badge: "Most Honest Tracker",
    shortName: "Body tape",
    name: "Perfect Measuring Tape Body Tape Measure (80\")",
    price: "$8.99",
    url: amz("B00DEGIVVW"),
    description:
      "A retractable 80-inch body tape with a pin lock, so you can measure your own waist accurately. A shrinking waist is often the first sign Lagree is working, even when the scale has not moved. It is the cheapest and most honest tool on this list.",
  },
  {
    id: "renpho-tape",
    badge: "Best Smart Tape",
    shortName: "Smart tape",
    name: "RENPHO Smart Body Measuring Tape",
    price: "$26.99",
    url: amz("B082W886W9"),
    description:
      "A 60-inch Bluetooth tape that sends each measurement to an app and graphs your progress over time. The retractable easy-lock hook means you can measure without help. Choose it over a plain tape if you will actually look at the graphs.",
  },
  {
    id: "etekcity-food",
    badge: "Best Kitchen Tool",
    shortName: "Food scale",
    name: "Etekcity Digital Food Kitchen Scale (11 lb)",
    price: "$13.99",
    url: amz("B0113UZJE2"),
    description:
      "The unglamorous truth is that the kitchen decides most weight loss. This scale weighs up to 11 lb in 1 g increments and has a tare function. Weighing portions for a couple of weeks is the fastest way to learn what you actually eat. Sold by Amazon.com.",
  },
  {
    id: "owala",
    badge: "Best Bottle",
    shortName: "Water bottle",
    name: "Owala FreeSip Insulated Water Bottle 32 oz",
    price: "$29.99",
    url: amz("B085DVHQ57"),
    description:
      "Lagree is very sweaty, and hydration supports both performance and appetite awareness. This 32 oz insulated bottle keeps drinks cold for up to 24 hours and has a locking FreeSip spout. Sold by Amazon.com.",
  },
];

const MICRO: Pick = {
  id: "the-micro",
  badge: "Train More Often",
  shortName: "Home machine",
  name: "The Micro by Lagree Fitness",
  price: "$990.00",
  url: amz("B0BBT7YV93"),
  description:
    "Frequency matters for results, and cost is what usually limits it. Lagree Fitness's own compact home machine, sold by the brand on Amazon, lets regulars add sessions between studio classes. The listing describes low-impact, high-intensity strength and cardio training in a compact, lightweight machine that fits users up to 6'8\".",
};

const ALL_ITEMS: Pick[] = [...TRACKING, MICRO];

const toNumber = (price: string) => {
  const n = parseFloat(price.replace(/[^0-9.]/g, ""));
  return Number.isNaN(n) ? 0 : n;
};
const fmt = (n: number) => `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const STARTER = [TRACKING[1], TRACKING[3], TRACKING[4], TRACKING[6]];
const STARTER_TOTAL = STARTER.reduce((sum, p) => sum + toNumber(p.price), 0); // 26.63 + 19.94 + 8.99 + 9.99 = 65.55

const WEEK = [
  { day: "Mon", plan: "Lagree class" },
  { day: "Tue", plan: "30–45 min brisk walk" },
  { day: "Wed", plan: "Lagree class" },
  { day: "Thu", plan: "Walk or easy bike + stretching" },
  { day: "Fri", plan: "Lagree class" },
  { day: "Sat", plan: "Long walk, hike or a fourth class" },
  { day: "Sun", plan: "Rest" },
];

const FAQS = [
  {
    q: "Is Lagree good for weight loss?",
    a: "It can be a strong part of a weight-loss plan. Lagree is strength training that also raises your heart rate, so it builds and keeps muscle while burning energy. Fat loss, though, depends mostly on eating slightly less than you burn over weeks and months. Lagree plus sensible eating works far better than Lagree alone.",
  },
  {
    q: "How many calories does a Lagree class burn?",
    a: "There is no reliable single number. It depends on your body size, your effort, the springs you choose and the class. Figures you see online are rarely measured. The honest way to find your own number is to wear a chest-strap heart rate monitor for a few classes and treat the calorie estimate from your watch or app as a rough guide, not a fact.",
  },
  {
    q: "How often should I do Lagree to lose weight?",
    a: "Three classes a week is a realistic target for most people, with walking on the other days. US Physical Activity Guidelines recommend at least 150 minutes of moderate (or 75 of vigorous) activity a week, plus muscle-strengthening on two or more days. Lagree covers the strength part, and walking fills in the rest without adding soreness.",
  },
  {
    q: "Why is the scale not moving after starting Lagree?",
    a: "Several reasons are normal. New exercise can make muscles hold more water at first, you may be adding some muscle, and day-to-day weight swings with food, salt and hydration. Track your waist measurement and the weekly average weight rather than daily readings. If nothing changes after six to eight weeks, look at eating habits first.",
  },
  {
    q: "Is Lagree better than Pilates for weight loss?",
    a: "Lagree is usually more intense, with longer time under tension and little rest, so most people's heart rate runs higher than in a typical Pilates class. The best workout for weight loss, though, is the one you will do consistently. See our Lagree vs Pilates guide for a full comparison.",
  },
  {
    q: "Do I need to track anything?",
    a: `No, but a little data helps. The simplest useful setup is a budget chest strap, a basic smart scale, a body tape and a food scale. Those four cost ${fmt(STARTER_TOTAL)} together at the prices on this page. Measure weekly, not daily.`,
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
      "name": "Tools for Tracking Lagree Weight Loss (2026)",
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
        { "@type": "ListItem", "position": 3, "name": "Lagree for Weight Loss", "item": PAGE_URL },
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

export default function LagreeForWeightLossPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={eyebrowStyle}>Results Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Lagree</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Lagree for Weight Loss<br /><span style={{ color: "#8b4a31" }}>(2026): What to Really Expect</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated October 2026 · 11 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Product links on this page go to Amazon, and we earn a small commission on qualifying purchases at no extra cost to you. This article is general information, not medical or nutrition advice. Talk to your doctor before starting a weight-loss plan.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Lagree has a reputation for changing how bodies look, and fast. Some of that is real and some is marketing. This guide gives you the honest version: what Lagree does well for weight loss and what it cannot do on its own. It also covers how often to go, why the scale can lie in the first month, and the simple tools that show you whether it is working.
            </p>
            <p className="text-sm leading-relaxed" style={bodyStyle}>
              Every product was checked live on Amazon on October 3, 2026, at the price shown. Prices change, so the final price is whatever Amazon shows at checkout.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-studio-modern-row.png" alt="A modern studio with rows of machines — Lagree for weight loss" fill className="object-cover" style={{ filter: "brightness(0.85)" }} priority />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-10 mt-4 flex flex-col sm:flex-row gap-3">
              <Link href="/blog/lagree-vs-pilates" className="flex-1 rounded-xl p-4 text-sm font-semibold" style={hubStyle}>
                Choosing a workout? → Lagree vs Pilates
              </Link>
              <a href="#tools" className="flex-1 rounded-xl p-4 text-sm font-semibold" style={hubStyle}>
                Skip to the tracking tools →
              </a>
            </div>

            {/* Short answer */}
            <div className="mb-16 rounded-2xl p-6 md:p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.5)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={eyebrowStyle}>The short answer</p>
              <p className="text-sm leading-relaxed mb-3" style={bodyStyle}>
                <span className="font-semibold" style={{ color: "#1b1c1c" }}>Yes, Lagree can help, but not by itself.</span> It is high-intensity strength training that also gets your heart rate up, which makes it excellent for keeping and building muscle while you lose fat. That is what changes how you look. The fat loss itself mostly comes from eating a little less than you burn, consistently, for weeks. Lagree plus sensible eating is a great combination; Lagree alone often moves the scale less than people hope.
              </p>
            </div>

            {/* What it does */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={h2Style}>What Lagree does well for weight loss</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { heading: "Builds and keeps muscle", body: "Slow, loaded work under tension is strength training. When you eat less, strength training helps you keep muscle, so more of what you lose is fat." },
                  { heading: "Raises your heart rate", body: "With almost no rest and big muscles working continuously, heart rate climbs even without jumping. Strength and cardio happen in the same 45 minutes." },
                  { heading: "Low impact", body: "No jumping means it is easier on joints than running or HIIT, so it suits people carrying extra weight and is easier to do often." },
                  { heading: "It is addictive, in a good way", body: "Consistency beats intensity for weight loss. A workout you look forward to is one you keep doing for months." },
                ].map((item) => (
                  <div key={item.heading} className="rounded-xl p-5" style={cardStyle}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.heading}</p>
                    <p className="text-sm leading-relaxed" style={bodyStyle}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What it can't */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={h2Style}>What Lagree cannot do</h2>
              <ul className="space-y-4">
                {[
                  { h: "Out-train your diet.", b: "Even a very hard class burns an amount of energy that one large snack can replace. Food choices decide most of the result." },
                  { h: "Spot-reduce.", b: "Lagree's ab and inner-thigh work strengthens those muscles, but where you lose fat first is set by your body, not by the exercise." },
                  { h: "Give you a reliable calorie number.", b: "There is no trustworthy single figure for a Lagree class. It varies with body size, effort and springs, so treat any number you see online with suspicion." },
                  { h: "Work on one class a week.", b: "One class is a great start for fitness, but weight-loss results come from frequency and from what you do on the other six days." },
                ].map((item) => (
                  <li key={item.h} className="text-sm leading-relaxed" style={bodyStyle}>
                    <span className="font-semibold" style={{ color: "#1b1c1c" }}>{item.h}</span> {item.b}
                  </li>
                ))}
              </ul>
            </div>

            {/* How often */}
            <Divider label="The plan" />
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-4" style={h2Style}>How often to do Lagree for weight loss</h2>
              <p className="text-sm leading-relaxed mb-6" style={bodyStyle}>
                US Physical Activity Guidelines recommend at least 150 minutes of moderate activity (or 75 minutes of vigorous activity) a week, plus muscle-strengthening on two or more days. For weight loss, more activity generally helps. A realistic Lagree week that hits both targets without burning you out looks like this:
              </p>
              <div className="overflow-hidden mb-6" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
                {WEEK.map((d, i) => (
                  <div key={d.day} className="flex gap-6 px-6 py-3" style={{ borderTop: i === 0 ? "none" : "1px solid rgba(217,194,186,0.25)", backgroundColor: d.plan.startsWith("Lagree") ? "#fcf9f8" : "#ffffff" }}>
                    <p className="text-sm font-semibold w-12 shrink-0" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{d.day}</p>
                    <p className="text-sm" style={bodyStyle}>{d.plan}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm leading-relaxed" style={bodyStyle}>
                Walking is the secret weapon. It adds energy burn without the soreness that would make your next class worse. Starting out? Two classes a week for the first couple of weeks lets your body adapt; our guide to{" "}
                <Link href="/blog/lagree-recovery" style={inlineLinkStyle}>soreness after Lagree</Link> explains why.
              </p>
            </div>

            {/* Scale */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-4" style={h2Style}>Why the scale lies in the first month</h2>
              <p className="text-sm leading-relaxed mb-6" style={bodyStyle}>
                Plenty of people quit in week three because the number did not move. Do not. Early on, three things can mask real progress:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {[
                  { heading: "Water in muscles", body: "New, hard exercise can make muscles hold extra water while they repair. It is temporary." },
                  { heading: "Some muscle gain", body: "Especially for beginners, a little muscle can offset a little fat on the scale, even as your shape changes." },
                  { heading: "Daily noise", body: "Salt, carbs, hydration and hormones swing body weight from one day to the next." },
                ].map((item) => (
                  <div key={item.heading} className="rounded-xl p-5" style={cardStyle}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.heading}</p>
                    <p className="text-sm leading-relaxed" style={bodyStyle}>{item.body}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm leading-relaxed" style={bodyStyle}>
                <span className="font-semibold" style={{ color: "#1b1c1c" }}>What to track instead:</span> your waist measurement once a week, your weekly average weight (not daily readings), how your clothes fit, and whether you can hold heavier springs or longer sets. If none of those change after six to eight weeks, look at eating habits before blaming the workout.
              </p>
            </div>

            {/* Tools */}
            <div id="tools" className="scroll-mt-28">
              <Divider label="The tracking kit" />
            </div>
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-4" style={h2Style}>Tools that show you whether it is working</h2>
              <p className="text-sm leading-relaxed mb-8" style={bodyStyle}>
                You do not need any of this to lose weight. But a small amount of honest data stops you quitting too early. The budget starter set (chest strap, scale, body tape and food scale) costs {fmt(STARTER_TOTAL)} in total.
              </p>

              <div className="mb-10 overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
                <div className="px-6 py-4" style={{ backgroundColor: "#f6f3f2" }}>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={eyebrowStyle}>At a Glance — Weight-Loss Tracking Tools</p>
                </div>
                {TRACKING.map((p, i) => (
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
                  <span>Budget starter set (02, 04, 05, 07)</span>
                  <span>{fmt(STARTER_TOTAL)}</span>
                </div>
              </div>

              <div className="space-y-8">
                {TRACKING.map((p) => (
                  <TierCard key={p.id} p={p} />
                ))}
              </div>
              <p className="text-sm leading-relaxed mt-2" style={bodyStyle}>
                More heart-rate options are in our{" "}
                <Link href="/blog/best-heart-rate-monitor-for-pilates-and-spin" style={inlineLinkStyle}>heart rate monitor guide</Link>, and if you prefer a ring to a watch, see{" "}
                <Link href="/blog/best-smart-ring-for-pilates" style={inlineLinkStyle}>best smart rings</Link>.
              </p>
            </div>

            {/* Micro */}
            <Divider label="Train more often" />
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-4" style={h2Style}>When class fees limit how often you go</h2>
              <p className="text-sm leading-relaxed mb-8" style={bodyStyle}>
                For many people, the real limit on frequency is the price of a class. If you already know the method and want three or four sessions a week, a home machine changes the maths.
              </p>
              <TierCard p={MICRO} />
              <p className="text-sm leading-relaxed mt-2" style={bodyStyle}>
                How it compares with a class pack, plus the add-ons, is in our{" "}
                <Link href="/blog/lagree-fitness" style={inlineLinkStyle}>Lagree Fitness brand guide</Link>. No machine yet? The floor circuit in{" "}
                <Link href="/blog/lagree-exercises" style={inlineLinkStyle}>Lagree exercises</Link> works between classes.
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
                <ArticleCard title="Lagree vs Pilates" excerpt="What separates the two methods, and which suits your goals and body." href="/blog/lagree-vs-pilates" category="Comparison" readTime="10 min read" date="June 2026" imageUrl="/pictures/stitch-reformer-row-studio.png" />
                <ArticleCard title="Pilates for Weight Loss" excerpt="Does Pilates actually help you lose weight? An honest, evidence-based answer with realistic expectations." href="/blog/pilates-for-weight-loss" category="Health" readTime="10 min read" date="May 2026" imageUrl="/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg" />
                <ArticleCard title="Sore After Lagree?" excerpt="Why Lagree soreness happens, how long it lasts, and the recovery gear worth buying." href="/blog/lagree-recovery" category="Lagree" readTime="11 min read" date="October 2026" imageUrl="/pictures/stitch-studio-bench-towels.png" />
                <ArticleCard title="Lagree vs Solidcore" excerpt="Two slow-burn workouts that look alike. What actually differs, and which to book." href="/blog/lagree-vs-solidcore" category="Comparison" readTime="10 min read" date="October 2026" imageUrl="/pictures/stitch-reformer-row-studio.png" />
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
