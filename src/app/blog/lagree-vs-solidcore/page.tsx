import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import { jsonLdHtml } from "@/lib/schema";

const PAGE_URL = "https://pilatescollectiveclub.com/blog/lagree-vs-solidcore";
const HERO_IMAGE = "https://pilatescollectiveclub.com/pictures/stitch-reformer-row-studio.png";
const TITLE = "Lagree vs Solidcore (2026): Differences & What to Wear";
const DESCRIPTION =
  "Lagree vs Solidcore: the machines, class format, tempo and who each suits — plus the grip socks, shorts and towel that work for both, at verified prices.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: "Lagree and Solidcore look alike from the doorway. Here is what actually differs — the machine, the class, the business model — and the kit that works in both studios.",
    type: "article",
    url: PAGE_URL,
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: "A row of spring-loaded machines in a studio — Lagree vs Solidcore" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lagree vs Solidcore (2026): What Actually Differs",
    description: "The machines, the class format, who each suits — and the gear that works for both.",
    images: [HERO_IMAGE],
  },
  keywords: [
    "lagree vs solidcore",
    "solidcore vs lagree",
    "is solidcore lagree",
    "solidcore vs megaformer",
    "difference between lagree and solidcore",
    "solidcore machine",
    "what to wear to solidcore",
    "grip socks for solidcore",
    "lagree or solidcore",
    "solidcore vs pilates",
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

const PICKS: Pick[] = [
  {
    id: "toesox",
    badge: "Best Grip Socks",
    shortName: "Grip socks",
    name: "toesox Low Rise Grip Socks 2-Pack (Full Toe)",
    price: "$30.00",
    url: amz("B07QHNDHW3"),
    description:
      "Grip socks are the one item both studios care about, and two pairs means one is always clean. These are full-toe socks with a patented non-slip grip sole and an arch band, in a 77% organic cotton blend. The five-toe design lets your toes spread on the platform during lunges, which helps when you are holding a slow lunge for a full minute. Sold by The Active Footwear Store.",
  },
  {
    id: "tavi-savvy",
    badge: "Best Closed-Toe Pair",
    shortName: "Closed-toe socks",
    name: "TAVI Savvy Grip Socks",
    price: "$16.00",
    url: amz("B07KRPY2SQ"),
    description:
      "If toe socks feel strange, this is the classic closed-toe alternative. TAVI uses a patented triangle grip pattern that the brand says was designed with instructors, on a certified organic cotton knit. One pair, in fashion colours. Check the size on the listing before you add it to your cart (this listing is Medium).",
  },
  {
    id: "crz-biker",
    badge: "Best Bottoms",
    shortName: "Biker shorts",
    name: "CRZ YOGA Butterluxe Biker Shorts 6\"",
    price: "$24.00",
    url: amz("B0B28B34XX"),
    description:
      "High-rise, 6-inch inseam, very gentle compression and a seamless waistband. On a moving carriage, tight shorts beat loose ones: nothing rides up during a lunge or catches on the springs. The same logic applies to leggings if you run cold. This listing is size Large; pick your size on Amazon.",
  },
  {
    id: "ua-infinity",
    badge: "Best Sports Bra",
    shortName: "Sports bra",
    name: "Under Armour Women's Infinity 2 High Impact Sports Bra",
    price: "$47.85",
    url: amz("B0C12Q3L89"),
    description:
      "Neither class has jumping, so why high support? Because both put you in long planks, inversions and kneeling work where a light bralette shifts. This one has a locked-in, high-support fit, an injection-molded pad and a front mesh panel for breathability. Sold by Amazon.com.",
  },
  {
    id: "shandali",
    badge: "Best Towel",
    shortName: "Grip towel",
    name: "Shandali Stickyfiber Yoga Towel (24\" x 72\")",
    price: "$19.99",
    url: amz("B011IU43WG"),
    description:
      "Both workouts get very sweaty because you never fully rest. A mat-sized towel with a silicone grip back covers the platform or carriage pad for floor and kneeling work, and doubles as a hand towel between sets. Mat-sized at 24\" x 72\".",
  },
  {
    id: "owala",
    badge: "Best Water Bottle",
    shortName: "Water bottle",
    name: "Owala FreeSip Insulated Water Bottle 32 oz",
    price: "$29.99",
    url: amz("B085DVHQ57"),
    description:
      "A 32-ounce double-wall insulated bottle that keeps drinks cold for up to 24 hours. The FreeSip spout lets you sip through the built-in straw or tilt and swig, which is quicker in a short transition. The push-button lid locks, so it will not leak in your bag. Sold by Amazon.com.",
  },
];

const MICRO: Pick = {
  id: "the-micro",
  badge: "Train at Home",
  shortName: "Home machine",
  name: "The Micro by Lagree Fitness",
  price: "$990.00",
  url: amz("B0BBT7YV93"),
  description:
    "If Lagree wins and you want it at home, this is the brand's own compact machine, sold by Lagree Fitness on Amazon. The listing describes low-impact, high-intensity strength and cardio training in a compact, lightweight machine that accommodates users up to 6'8\" and stores under a bed, against a wall or on a bike rack. Solidcore does not sell a home version of its machine.",
};

const ALL_ITEMS: Pick[] = [...PICKS, MICRO];

const toNumber = (price: string) => {
  const n = parseFloat(price.replace(/[^0-9.]/g, ""));
  return Number.isNaN(n) ? 0 : n;
};
const fmt = (n: number) => `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const KIT_TOTAL = PICKS.reduce((sum, p) => sum + toNumber(p.price), 0); // 30 + 16 + 24 + 47.85 + 19.99 + 29.99 = 167.83

const COMPARE = [
  { label: "Who is behind it", lagree: "Lagree Fitness, founded by Sebastien Lagree, which licenses the method and sells the machines", solidcore: "[solidcore], founded by Anne Mahlum in Washington, D.C." },
  { label: "The machine", lagree: "The Megaformer (studio) and The Micro (home)", solidcore: "Its own machine, which the brand nicknames \"Sweatlana\"" },
  { label: "Class length", lagree: "Usually about 45 minutes; some studios run 40 or 50", solidcore: "50 minutes" },
  { label: "Tempo", lagree: "Very slow: often around four counts out and four counts in, with no rest", solidcore: "Slow and controlled, worked to muscle fatigue" },
  { label: "Sequencing", lagree: "Varies by studio, because each licensed studio programs its own classes", solidcore: "One brand with a consistent format; classes are typically built around a few focus areas" },
  { label: "Impact", lagree: "Low impact, high intensity", solidcore: "Low impact, high intensity" },
  { label: "Train at home on the real machine?", lagree: "Yes, The Micro is sold on Amazon", solidcore: "No home machine is sold" },
];

const FAQS = [
  {
    q: "Is Solidcore the same as Lagree?",
    a: "No. They are separate companies with different machines. Lagree is the method created by Sebastien Lagree and taught on the Megaformer in licensed studios. Solidcore is its own brand, founded by Anne Mahlum, with its own machine that it nicknames \"Sweatlana\". They share the same core idea: slow, controlled strength work on a spring-loaded machine with a moving carriage and fixed platforms.",
  },
  {
    q: "Which is harder, Lagree or Solidcore?",
    a: "Both are designed to take muscles to fatigue, so how hard a class feels depends far more on the instructor, the spring load you pick and your own pace than on the brand. Moving slower is harder in both. A practical difference: Solidcore classes run 50 minutes, while most Lagree classes run about 45.",
  },
  {
    q: "What should I wear to Lagree or Solidcore?",
    a: "Fitted clothing and grip socks. Tight leggings or biker shorts will not ride up or catch on the carriage, and a supportive sports bra stays put in planks and inversions. Most studios of both brands require or strongly recommend grip socks, so check your studio's policy before your first class. Bring a towel and a water bottle; you will sweat.",
  },
  {
    q: "Can I do Lagree or Solidcore at home?",
    a: `Lagree, yes: Lagree Fitness sells The Micro on Amazon for ${MICRO.price}, plus add-ons such as a rear platform and handlebars. Solidcore does not sell a home machine. A Pilates reformer is a different machine built for a different method, so it will not reproduce either class exactly.`,
  },
  {
    q: "Is Lagree or Solidcore better for beginners?",
    a: "Either works if you tell the instructor it is your first class and choose lighter springs. Lagree's licensed model means class style varies by studio, so read reviews of your local studio. Solidcore's single-brand format is more predictable from one location to the next. Our Lagree for beginners guide covers what to expect in your first class.",
  },
  {
    q: "Do I need different gear for Lagree and Solidcore?",
    a: `No. The same kit works for both: grip socks, fitted bottoms, a supportive bra, a grip towel and a water bottle. The six picks on this page cost ${fmt(KIT_TOTAL)} together at the prices we verified, and every one is useful in either studio.`,
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
      "name": "Gear for Lagree and Solidcore (2026)",
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
        { "@type": "ListItem", "position": 3, "name": "Lagree vs Solidcore", "item": PAGE_URL },
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

export default function LagreeVsSolidcorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={eyebrowStyle}>Comparison</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Lagree</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Lagree vs Solidcore<br /><span style={{ color: "#8b4a31" }}>(2026): What Actually Differs</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated October 2026 · 10 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Product links on this page go to Amazon, and we earn a small commission on qualifying purchases at no extra cost to you. We are not affiliated with Lagree Fitness or [solidcore].</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              From the doorway, a Lagree class and a Solidcore class look almost identical: a dim room, a row of long spring-loaded machines, people shaking through a lunge that seems to last forever. Underneath, they are two different businesses with two different machines and two different ideas about how a class should run. This guide explains the real differences, helps you pick the one that suits you, and lists the kit that works in both studios.
            </p>
            <p className="text-sm leading-relaxed" style={bodyStyle}>
              Every product below was checked live on Amazon on October 3, 2026, at the price shown. Prices change, so the final price is whatever Amazon shows at checkout.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-reformer-row-studio.png" alt="Rows of spring-loaded machines in a boutique studio — Lagree vs Solidcore" fill className="object-cover" style={{ filter: "brightness(0.85)" }} priority />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-10 mt-4 flex flex-col sm:flex-row gap-3">
              <Link href="/blog/lagree-fitness" className="flex-1 rounded-xl p-4 text-sm font-semibold" style={hubStyle}>
                Who is Lagree Fitness? Read the brand guide →
              </Link>
              <Link href="/blog/lagree-vs-pilates" className="flex-1 rounded-xl p-4 text-sm font-semibold" style={hubStyle}>
                Also deciding on Pilates? → Lagree vs Pilates
              </Link>
            </div>

            {/* Short answer */}
            <div className="mb-16 rounded-2xl p-6 md:p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.5)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={eyebrowStyle}>The short answer</p>
              <p className="text-sm leading-relaxed mb-3" style={bodyStyle}>
                <span className="font-semibold" style={{ color: "#1b1c1c" }}>Solidcore is not Lagree.</span> Both are slow, high-intensity, low-impact strength workouts on a spring-loaded machine with a moving carriage, so they feel similar. The differences are the machine, the business model and how classes are programmed.
              </p>
              <ul className="space-y-2">
                <li className="text-sm leading-relaxed" style={bodyStyle}><span className="font-semibold" style={{ color: "#1b1c1c" }}>Pick Lagree</span> if you want variety from studio to studio, slightly shorter classes, and the option to train on the brand&apos;s own machine at home.</li>
                <li className="text-sm leading-relaxed" style={bodyStyle}><span className="font-semibold" style={{ color: "#1b1c1c" }}>Pick Solidcore</span> if you want one predictable format wherever you book, and a 50-minute class.</li>
                <li className="text-sm leading-relaxed" style={bodyStyle}><span className="font-semibold" style={{ color: "#1b1c1c" }}>Either way</span>, the same grip socks, fitted clothes and towel work in both rooms.</li>
              </ul>
            </div>

            {/* Side by side */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={h2Style}>Lagree vs Solidcore, side by side</h2>
              <div className="overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
                <div className="hidden sm:grid grid-cols-3 gap-4 px-6 py-4" style={{ backgroundColor: "#f6f3f2" }}>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={eyebrowStyle}>&nbsp;</span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={eyebrowStyle}>Lagree</span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={eyebrowStyle}>Solidcore</span>
                </div>
                {COMPARE.map((row, i) => (
                  <div key={row.label} className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 px-6 py-4" style={{ borderTop: i === 0 ? "none" : "1px solid rgba(217,194,186,0.25)", backgroundColor: "#ffffff" }}>
                    <p className="text-sm font-semibold" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{row.label}</p>
                    <p className="text-sm" style={bodyStyle}><span className="sm:hidden font-semibold">Lagree: </span>{row.lagree}</p>
                    <p className="text-sm" style={bodyStyle}><span className="sm:hidden font-semibold">Solidcore: </span>{row.solidcore}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What they share */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={h2Style}>What Lagree and Solidcore have in common</h2>
              <p className="text-sm leading-relaxed mb-6" style={bodyStyle}>
                Both are built on the same training principle: keep a muscle under tension for a long time, slowly, until it fatigues. Neither has jumping. Both use a long machine with a sliding carriage, fixed platforms at the ends and springs you add or remove to change the load. And in both, the shaking you feel halfway through a set is the point, not a sign you are doing it wrong.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { heading: "Slow is harder", body: "Moving slowly removes momentum, so the muscle does all the work. Both styles cue you to slow down when it burns, not speed up." },
                  { heading: "Time under tension", body: "Sets run long with little or no rest between moves, so muscles stay loaded for most of the class." },
                  { heading: "Springs, carriage, platforms", body: "You lunge, plank and crunch between a moving carriage and a fixed platform, with springs adding the resistance." },
                  { heading: "Low impact, high effort", body: "Easier on joints than running or jump training, yet your heart rate climbs because large muscles work continuously." },
                ].map((item) => (
                  <div key={item.heading} className="rounded-xl p-5" style={cardStyle}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.heading}</p>
                    <p className="text-sm leading-relaxed" style={bodyStyle}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Differences */}
            <Divider label="Where they differ" />
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={h2Style}>The four real differences</h2>

              <h3 className="text-xl font-semibold mb-3" style={h2Style}>1. The machine</h3>
              <p className="text-sm leading-relaxed mb-6" style={bodyStyle}>
                Lagree is taught on the Megaformer, the machine Sebastien Lagree designed and the company sells to studios. Lagree Fitness also sells a compact home machine, The Micro. Solidcore trains on its own machine, which the brand nicknames &ldquo;Sweatlana&rdquo;. Like the Megaformer, it has a sliding carriage, springs and straps for arm work. Regulars who have tried both mostly notice differences in feel and layout rather than in the basic idea.
              </p>

              <h3 className="text-xl font-semibold mb-3" style={h2Style}>2. The business model</h3>
              <p className="text-sm leading-relaxed mb-6" style={bodyStyle}>
                This difference shapes your experience more than anything else. Lagree is a method that independent studios license. Each studio buys the machines, trains its instructors in the method and programs its own classes, so two Lagree studios in the same city can feel quite different. Solidcore is a single brand running one format, so a class in one city should feel familiar in another. Neither is better. Lagree rewards you for finding a studio whose style you love, while Solidcore rewards you with consistency.
              </p>

              <h3 className="text-xl font-semibold mb-3" style={h2Style}>3. Class length and structure</h3>
              <p className="text-sm leading-relaxed mb-6" style={bodyStyle}>
                Solidcore classes run 50 minutes. Lagree classes usually run about 45 minutes, though some studios offer 40- or 50-minute formats. Lagree is famous for its tempo: a common cue is about four counts to move the carriage out and four to bring it back, with no rest between exercises. Solidcore is also slow and controlled, and its classes are typically built around a few focus areas rather than trying to hit everything every time.
              </p>

              <h3 className="text-xl font-semibold mb-3" style={h2Style}>4. Can you take it home?</h3>
              <p className="text-sm leading-relaxed" style={bodyStyle}>
                Only Lagree. Lagree Fitness sells The Micro ({MICRO.price}) and its accessories through its own Amazon store, so regulars can supplement studio classes with the genuine machine. Solidcore does not sell a home machine. If home training matters to you, that tips the scale toward Lagree. Our{" "}
                <Link href="/blog/lagree-at-home" style={inlineLinkStyle}>Lagree at home guide</Link> covers how to structure sessions.
              </p>
            </div>

            {/* Who suits which */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={h2Style}>Which one should you book?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  { heading: "Lagree suits you if…", body: "You like variety, want to find a studio with a style you love, prefer a class of about 45 minutes, or might want to train on the real machine at home one day." },
                  { heading: "Solidcore suits you if…", body: "You travel and want the same class wherever you go, like a predictable structure, and are happy with 50 minutes in the room." },
                  { heading: "Coming from Pilates?", body: "Both will feel faster to fatigue and slower in tempo than reformer Pilates. Expect fewer breaks and much more sweat." },
                  { heading: "Coming from HIIT?", body: "You will miss the jumping for about one class. After that, most people are surprised how hard slow work feels." },
                ].map((item) => (
                  <div key={item.heading} className="rounded-xl p-5" style={cardStyle}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.heading}</p>
                    <p className="text-sm leading-relaxed" style={bodyStyle}>{item.body}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm leading-relaxed" style={bodyStyle}>
                Honest advice: try one class of each before you buy a pack. Both are priced like boutique classes, and many studios offer an intro offer for first-timers. For your first Lagree class, read{" "}
                <Link href="/blog/lagree-for-beginners" style={inlineLinkStyle}>Lagree for beginners</Link> before you go.
              </p>
            </div>

            {/* Gear */}
            <Divider label="What to wear and bring" />
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-4" style={h2Style}>One kit for both studios</h2>
              <p className="text-sm leading-relaxed mb-8" style={bodyStyle}>
                The good news: you do not need separate kit. Both workouts are slow, sweaty and done on a moving carriage, so they reward the same things: grip underfoot, clothes that stay put, and something to deal with sweat. Most studios of both brands require or strongly recommend grip socks, so check your studio&apos;s policy before class. None of these products are made by Lagree or Solidcore; they are simply what works.
              </p>

              <div className="mb-10 overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
                <div className="px-6 py-4" style={{ backgroundColor: "#f6f3f2" }}>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={eyebrowStyle}>At a Glance — The Two-Studio Kit</p>
                </div>
                {PICKS.map((p, i) => (
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
                  <span>The full kit (all six)</span>
                  <span>{fmt(KIT_TOTAL)}</span>
                </div>
              </div>

              <div className="space-y-8">
                {PICKS.map((p) => (
                  <TierCard key={p.id} p={p} />
                ))}
              </div>
              <p className="text-sm leading-relaxed mt-2" style={bodyStyle}>
                Want more options in each category? See{" "}
                <Link href="/blog/best-lagree-grip-socks" style={inlineLinkStyle}>Lagree socks</Link>,{" "}
                <Link href="/blog/best-lagree-shorts" style={inlineLinkStyle}>Lagree shorts</Link>,{" "}
                <Link href="/blog/best-sports-bra-for-lagree" style={inlineLinkStyle}>sports bras for Lagree</Link> and{" "}
                <Link href="/blog/best-sweat-towel-for-lagree" style={inlineLinkStyle}>sweat towels for Lagree</Link>, or the whole list in{" "}
                <Link href="/blog/lagree-essentials" style={inlineLinkStyle}>Lagree essentials</Link>.
              </p>
            </div>

            {/* Home */}
            <Divider label="If Lagree wins" />
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-4" style={h2Style}>Training between classes at home</h2>
              <p className="text-sm leading-relaxed mb-8" style={bodyStyle}>
                If you become a regular, home training cuts the cost per workout. This is where the two brands differ most for shoppers, because only Lagree sells its machine to individuals.
              </p>
              <TierCard p={MICRO} />
              <p className="text-sm leading-relaxed mt-2" style={bodyStyle}>
                Add-ons, the full setup cost and how it compares with a class pack are all in our{" "}
                <Link href="/blog/lagree-fitness" style={inlineLinkStyle}>Lagree Fitness brand guide</Link>.
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
                <ArticleCard title="Lagree Fitness Brand Guide" excerpt="The Micro, the Megaformer and what a full home setup really costs." href="/blog/lagree-fitness" category="Lagree" readTime="12 min read" date="September 2026" imageUrl="/pictures/stitch-reformers-aerial-row.png" />
                <ArticleCard title="Lagree vs Pilates" excerpt="What separates the two methods, and which suits your goals and body." href="/blog/lagree-vs-pilates" category="Comparison" readTime="10 min read" date="June 2026" imageUrl="/pictures/stitch-reformer-row-studio.png" />
                <ArticleCard title="Lagree Exercises" excerpt="The signature moves you will hear in class, explained, plus floor versions for home." href="/blog/lagree-exercises" category="Lagree" readTime="12 min read" date="October 2026" imageUrl="/pictures/stitch-hands-on-carriage.png" />
                <ArticleCard title="Lagree for Beginners" excerpt="What to expect in your first class, what to wear, and how to survive the shakes." href="/blog/lagree-for-beginners" category="Lagree" readTime="10 min read" date="September 2026" imageUrl="/pictures/stitch-studio-modern-row.png" />
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
