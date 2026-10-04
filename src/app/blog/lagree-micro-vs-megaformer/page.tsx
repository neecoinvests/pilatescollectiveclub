import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import { jsonLdHtml } from "@/lib/schema";

const PAGE_URL = "https://pilatescollectiveclub.com/blog/lagree-micro-vs-megaformer";
const HERO_IMAGE = "https://pilatescollectiveclub.com/pictures/stitch-reformers-aerial-row.png";
const TITLE = "Lagree Micro vs Megaformer (2026): Home Machine or Studio?";
const DESCRIPTION =
  "Lagree Micro vs Megaformer: the $990 home machine against the studio machine. Size, platforms, handles, what carries over from class, and the cost per workout.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: "The Micro by Lagree Fitness against the Megaformer you use in class: what each is for, what carries over at home, what doesn't, and the cost-per-workout maths.",
    type: "article",
    url: PAGE_URL,
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: "A row of carriage machines in a studio — Lagree Micro vs Megaformer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lagree Micro vs Megaformer (2026)",
    description: "The $990 home machine vs the studio Megaformer: what carries over, what doesn't, and the cost per workout.",
    images: [HERO_IMAGE],
  },
  keywords: [
    "lagree micro vs megaformer",
    "megaformer vs micro",
    "micro vs megaformer",
    "megaformer at home",
    "can you buy a megaformer",
    "megaformer for home",
    "lagree micro or classes",
    "lagree home machine vs studio",
    "megaformer price",
    "is the lagree micro the same as the megaformer",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=pilatescollective-20`;
const LAGREE_OD = "https://www.lagreeod.com/";
const LAGREE_DIRECT = "https://www.lagreefitness.com/";

type Pick = {
  id: string;
  badge: string;
  shortName: string;
  name: string;
  price: string;
  url: string;
  description: string;
};

const MICRO: Pick = {
  id: "the-micro",
  badge: "Home Machine",
  shortName: "The Micro",
  name: "The Micro by Lagree Fitness",
  price: "$990.00",
  url: amz("B0BBT7YV93"),
  description:
    "Lagree Fitness's own home machine, sold by Lagree Fitness on Amazon. Per the listing: 72\" long x 20\" wide x 6\" high, 60 lb, four springs (red heavy, gray medium, black light, white extra light), designed for users up to 6'8\". It stores under a bed, against a wall or on a bike rack, and the listing points to Lagree On Demand for classes.",
};

const MICRO_ADDONS: Pick[] = [
  {
    id: "rear-platform",
    badge: "Closes the Gap #1",
    shortName: "Rear platform",
    name: "Lagree Fitness Micro Rear Platform",
    price: "$290.00",
    url: amz("B0BKN2LSWD"),
    description:
      "The add-on that makes the Micro feel most like a studio machine: a rear surface for feet, hands and knees that unlocks the express lunge, 5th lunge, super crunch and giant wheelbarrow, according to Lagree Fitness. 10.5\" L x 8.5\" W x 6\" H; the Micro with it fitted is 81.5\" long. Sold by Lagree Fitness.",
  },
  {
    id: "handlebars",
    badge: "Closes the Gap #2",
    shortName: "Handlebars",
    name: "Lagree Fitness Micro Handlebars (Pair)",
    price: "$190.00",
    url: amz("B0BKMP89SH"),
    description:
      "Handles for Catfish, Twister, Spoon and Runner's Lunge, with wrist support in mind. They fit the front or back of the Micro (the back needs the rear platform) and pull-pin on without tools. One pair covers one end. Sold by Lagree Fitness.",
  },
  {
    id: "pulley-cables",
    badge: "Closes the Gap #3",
    shortName: "Pulley cables",
    name: "Lagree Fitness Micro Pulley Cables",
    price: "$230.00",
    url: amz("B0BYMD4S91"),
    description:
      "The Micro's cable attachment, sold by Lagree Fitness. The listing gives almost no specification beyond the name and stock is limited, so check lagreefitness.com for details before ordering.",
  },
];

const MEGAFORMER: Pick = {
  id: "megaformer",
  badge: "Studio Machine — Not Sold on Amazon",
  shortName: "Megaformer",
  name: "Megaformer (M3S / M3X)",
  price: "Contact Lagree Fitness",
  url: LAGREE_DIRECT,
  description:
    "Not sold on Amazon — this links to lagreefitness.com and is not an affiliate link. The Megaformer is the commercial machine used in Lagree studios. Lagree Fitness sells it directly, mainly to studios and licensees, and quotes pricing on request.",
};

const ALL_ITEMS: Pick[] = [MICRO, ...MICRO_ADDONS, MEGAFORMER];

const toNumber = (price: string) => {
  const n = parseFloat(price.replace(/[^0-9.]/g, ""));
  return Number.isNaN(n) ? 0 : n;
};
const fmt = (n: number) => `$${n.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;

const MICRO_PRICE = toNumber(MICRO.price); // 990
const PLATFORM_PRICE = toNumber(MICRO_ADDONS[0].price); // 290
const BARS_PRICE = toNumber(MICRO_ADDONS[1].price); // 190
const CABLES_PRICE = toNumber(MICRO_ADDONS[2].price); // 230
const CORE_SETUP = MICRO_PRICE + PLATFORM_PRICE; // 1,280
const FULL_SETUP = MICRO_PRICE + PLATFORM_PRICE + BARS_PRICE + CABLES_PRICE; // 1,700

// Lagree classes commonly cost $35–$45+ in major US cities.
const CLASS_LOW = 35;
const CLASS_HIGH = 45;
const breakEven = (n: number) => `${Math.round(n / CLASS_HIGH)}–${Math.round(n / CLASS_LOW)}`;

const COMPARISON = [
  { label: "Made by", micro: "Lagree Fitness", mega: "Lagree Fitness" },
  { label: "Built for", micro: "Home use", mega: "Commercial studios" },
  { label: "Where to buy", micro: "Amazon (sold by Lagree Fitness) or lagreefitness.com", mega: "Direct from Lagree Fitness only" },
  { label: "Price", micro: `${fmt(MICRO_PRICE)}; ${fmt(CORE_SETUP)} with the rear platform`, mega: "Quoted on request" },
  { label: "Size", micro: "72\" x 20\" x 6\", 60 lb (81.5\" long with platform)", mega: "Full studio-length machine, built for a studio floor" },
  { label: "Platforms", micro: "Carriage plus optional rear platform", mega: "Platforms at both ends, built in" },
  { label: "Handles & cables", micro: "Optional add-ons", mega: "Part of the studio setup" },
  { label: "Springs", micro: "Four: red, gray, black, white", mega: "Studio spring system" },
  { label: "Storage", micro: "Under a bed, against a wall, on a bike rack", mega: "Permanently installed" },
  { label: "Coaching", micro: "Lagree On Demand videos", mega: "A live instructor in every class" },
];

const CARRIES = [
  { h: "The method itself.", b: "Slow, controlled movement and time under tension on a spring-loaded carriage. That is the heart of Lagree, and the Micro is built for it by the people who wrote the method." },
  { h: "Spring-based resistance.", b: "Four springs from heavy to extra light let you change the load move by move, as you would in class." },
  { h: "Carriage work.", b: "Moves that happen on the carriage itself transfer directly." },
  { h: "Lunges and platform moves — with the add-on.", b: "The express lunge, 5th lunge, super crunch and giant wheelbarrow need the rear platform. Without it, a large part of the class repertoire is off the table." },
];

const LOSES = [
  { h: "The instructor.", b: "In class, someone tells you to slow down, drop your hips, change springs. On-demand video helps, but nobody is correcting your form." },
  { h: "A front-and-back layout as standard.", b: "A studio Megaformer comes with platforms at both ends and handles in place. On the Micro you build that up piece by piece, and the back handlebars need the rear platform first." },
  { h: "The room.", b: "Group energy, music, a set start time you booked and paid for. For many people that is what makes them show up." },
  { h: "Studio scale.", b: "The Micro is deliberately smaller so it fits a home. Lagree Fitness positions it as delivering the Megaformer-style workout in a compact machine, not as a shrunk Megaformer." },
];

const PERSONAS = [
  {
    title: "Choose the Micro if…",
    points: [
      "You already take Lagree classes and know the main moves and spring cues.",
      "Your nearest studio is far, or class times don't fit your week.",
      "You will train at home at least twice a week, every week.",
      "You have a clear strip of about 7–8 ft of floor and somewhere to store a 60 lb machine.",
    ],
  },
  {
    title: "Stay with Megaformer classes if…",
    points: [
      "You are new to Lagree and still learning the moves.",
      "You need a booked class to actually turn up.",
      "You train once a week or less — the machine would take a long time to pay for itself.",
      "You live in a small space with no realistic storage.",
    ],
  },
  {
    title: "Do both if…",
    points: [
      "You love Lagree and want three or more sessions a week without three or more class fees.",
      "You want an instructor to keep your form honest once a week, and the Micro for the rest.",
      "You travel to a studio when you can and want consistency when you can't.",
    ],
  },
];

const FAQS = [
  {
    q: "What is the difference between the Lagree Micro and the Megaformer?",
    a: `Both are made by Lagree Fitness. The Megaformer is the commercial machine used in Lagree studios, sold directly by Lagree Fitness with pricing on request. The Micro is the brand's compact home machine: ${fmt(MICRO_PRICE)} on Amazon, 72" x 20" x 6", 60 lb, with four springs, and it stores under a bed or against a wall. Platform, handlebar and cable moves that come built in on a studio Megaformer are optional add-ons on the Micro.`,
  },
  {
    q: "Can I buy a Megaformer for my home?",
    a: "Lagree Fitness sells the Megaformer directly, primarily to studios, and quotes pricing on request; it is not sold on Amazon. It is a commercial, studio-sized machine. For home use, Lagree Fitness makes the Micro, which is the machine it designs and sells for that purpose.",
  },
  {
    q: "Is a Lagree Micro workout as good as a Megaformer class?",
    a: "The method is the same, and with the rear platform you can do much of the familiar repertoire. What you lose is the instructor correcting your form and the structure of a booked class. Most people get the best results using the Micro between classes rather than instead of them, especially early on.",
  },
  {
    q: "How many classes does the Lagree Micro pay for?",
    a: `At $${CLASS_LOW}–$${CLASS_HIGH} a class, the Micro alone (${fmt(MICRO_PRICE)}) equals roughly ${breakEven(MICRO_PRICE)} classes, the Micro with the rear platform (${fmt(CORE_SETUP)}) roughly ${breakEven(CORE_SETUP)}, and the full setup with one pair of handlebars and the pulley cables (${fmt(FULL_SETUP)}) roughly ${breakEven(FULL_SETUP)}. A streaming subscription for guided classes is extra.`,
  },
  {
    q: "Do I need the rear platform to make the Micro feel like a Megaformer?",
    a: "It is the single biggest step. Lagree Fitness lists the express lunge, 5th lunge, super crunch and giant wheelbarrow among the moves it adds, and it is required before handlebars can go on the back of the Micro.",
  },
  {
    q: "Should a beginner start on the Micro or in a studio?",
    a: "In a studio. Lagree is cue-heavy: speed, spring choice and body position all change how hard a move is. A few weeks of classes on a Megaformer teach you the moves and the springs, and then the Micro becomes far more useful at home.",
  },
  {
    q: "Is the Micro the same as a Pilates reformer?",
    a: "No. Its Amazon listing says \"Not Pilates, it's Lagree\". Both use springs and a carriage, but the Micro and the Megaformer are built for the Lagree method, not the Pilates reformer repertoire.",
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
      "datePublished": "2026-10-04",
      "dateModified": "2026-10-04",
      "url": PAGE_URL,
      "mainEntityOfPage": PAGE_URL,
      "articleSection": "Lagree",
      "inLanguage": "en-US",
    },
    {
      "@type": "ItemList",
      "name": "Lagree Micro vs Megaformer: The Machines and Micro Add-Ons (2026)",
      "numberOfItems": ALL_ITEMS.length,
      "itemListElement": ALL_ITEMS.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "description": p.description,
          "offers": { "@type": "Offer", "priceCurrency": "USD", "price": p.price, "availability": "https://schema.org/InStock", "url": p.url },
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Lagree Micro vs Megaformer", "item": PAGE_URL },
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
const rowStyle = (i: number) => ({ borderTop: i === 0 ? "none" : "1px solid rgba(217,194,186,0.25)", backgroundColor: "#ffffff" });
const strongStyle = { color: "#1b1c1c" };

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

export default function LagreeMicroVsMegaformerPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Lagree Fitness</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Lagree Micro vs Megaformer<br /><span style={{ color: "#8b4a31" }}>(2026): Home Machine or Studio?</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated October 2026 · 11 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Micro links go to Amazon, where we earn a small commission on qualifying purchases at no extra cost to you. The Megaformer is not sold on Amazon; its link goes to lagreefitness.com and is not an affiliate link. This comparison is based on Lagree Fitness&apos;s published listings and information, not a hands-on test.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Every Lagree regular eventually does the maths: three classes a week adds up fast, and Lagree Fitness sells a home machine. So is the Micro ({MICRO.price}) a substitute for the Megaformer you shake on in class? Not quite — but for the right person it is the best Lagree purchase there is. Here is exactly what each machine is for, what carries over at home and what doesn&apos;t, and the cost-per-workout numbers.
            </p>
            <p className="text-sm leading-relaxed" style={bodyStyle}>
              Micro prices and stock were checked live on Amazon on October 4, 2026; all four items are sold by Lagree Fitness, and the pulley cables were low on stock. Megaformer pricing is not published — Lagree Fitness quotes it on request.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-reformers-aerial-row.png" alt="A row of carriage machines in a studio — Lagree Micro vs Megaformer" fill className="object-cover" style={{ filter: "brightness(0.85)" }} priority />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-10 mt-4 flex flex-col sm:flex-row gap-3">
              <Link href="/blog/lagree-micro-review" className="flex-1 rounded-xl p-4 text-sm font-semibold" style={hubStyle}>
                Leaning towards the Micro? → Full Micro review
              </Link>
              <Link href="/blog/lagree-fitness" className="flex-1 rounded-xl p-4 text-sm font-semibold" style={hubStyle}>
                The brand behind both → Lagree Fitness guide
              </Link>
            </div>

            {/* Short answer */}
            <div className="mb-16 rounded-2xl p-6 md:p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.5)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={eyebrowStyle}>The short answer</p>
              <p className="text-sm leading-relaxed mb-4" style={bodyStyle}>
                <span className="font-semibold" style={strongStyle}>They are not rivals.</span> The Megaformer is the studio machine; Lagree Fitness sells it to studios and quotes the price on request. The Micro is the machine Lagree Fitness makes for your home. The real choice is <em>classes only</em>, <em>Micro only</em> or <em>both</em>.
              </p>
              <p className="text-sm leading-relaxed mb-4" style={bodyStyle}>
                <span className="font-semibold" style={strongStyle}>New to Lagree?</span> Start on a Megaformer, in class. The method is cue-heavy and you need to learn it from an instructor.
              </p>
              <p className="text-sm leading-relaxed" style={bodyStyle}>
                <span className="font-semibold" style={strongStyle}>Already hooked?</span> The Micro with its rear platform ({fmt(CORE_SETUP)}) costs about the same as {breakEven(CORE_SETUP)} classes, and turns one or two studio sessions a week into four or five workouts.
              </p>
            </div>

            {/* Comparison table */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={h2Style}>Side by side</h2>
              <div className="overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
                <div className="hidden sm:grid grid-cols-[9rem_1fr_1fr] gap-4 px-6 py-3" style={{ backgroundColor: "#f6f3f2" }}>
                  <span />
                  <p className="text-xs font-semibold uppercase tracking-widest" style={eyebrowStyle}>The Micro</p>
                  <p className="text-xs font-semibold uppercase tracking-widest" style={eyebrowStyle}>Megaformer</p>
                </div>
                {COMPARISON.map((r, i) => (
                  <div key={r.label} className="grid grid-cols-1 sm:grid-cols-[9rem_1fr_1fr] gap-1 sm:gap-4 px-6 py-4" style={rowStyle(i)}>
                    <p className="text-sm font-semibold" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{r.label}</p>
                    <p className="text-sm leading-relaxed" style={bodyStyle}><span className="sm:hidden font-semibold" style={strongStyle}>Micro: </span>{r.micro}</p>
                    <p className="text-sm leading-relaxed" style={bodyStyle}><span className="sm:hidden font-semibold" style={strongStyle}>Megaformer: </span>{r.mega}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs mt-3" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Micro details: the Micro and Micro Rear Platform Amazon listings, sold by Lagree Fitness. Megaformer: Lagree Fitness, which publishes no consumer price.</p>
            </div>

            {/* What carries over */}
            <Divider label="Class vs home" />
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={h2Style}>What carries over from class to the Micro</h2>
              <ul className="space-y-4 mb-12">
                {CARRIES.map((item) => (
                  <li key={item.h} className="text-sm leading-relaxed" style={bodyStyle}>
                    <span className="font-semibold" style={strongStyle}>{item.h}</span> {item.b}
                  </li>
                ))}
              </ul>
              <h2 className="text-3xl font-semibold mb-6" style={h2Style}>What you give up</h2>
              <ul className="space-y-4">
                {LOSES.map((item) => (
                  <li key={item.h} className="text-sm leading-relaxed" style={bodyStyle}>
                    <span className="font-semibold" style={strongStyle}>{item.h}</span> {item.b}
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed mt-6" style={bodyStyle}>
                The best fix for the missing instructor is{" "}
                <a href={LAGREE_OD} target="_blank" rel="noopener noreferrer" style={inlineLinkStyle}>Lagree On Demand</a>, which the Micro&apos;s listing recommends for virtual classes. To learn the moves by name first, read{" "}
                <Link href="/blog/lagree-exercises" style={inlineLinkStyle}>Lagree exercises explained</Link>.
              </p>
            </div>

            {/* Cost per workout */}
            <div className="mb-16 rounded-2xl p-6 md:p-8" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.5)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={eyebrowStyle}>The money</p>
              <h2 className="text-2xl font-semibold mb-4" style={h2Style}>When does the Micro pay for itself?</h2>
              <div className="overflow-hidden mb-6" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "12px" }}>
                {[
                  { label: "The Micro only", total: MICRO_PRICE },
                  { label: "Micro + rear platform", total: CORE_SETUP },
                  { label: "Micro + platform + handlebars + cables", total: FULL_SETUP },
                ].map((b, i) => (
                  <div key={b.label} className="flex items-center justify-between gap-4 px-5 py-3" style={rowStyle(i)}>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{b.label}</p>
                      <p className="text-xs" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>≈ {breakEven(b.total)} Megaformer classes</p>
                    </div>
                    <span className="text-sm font-semibold shrink-0" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{fmt(b.total)}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-4" style={bodyStyle}>
                Class equivalents assume a Lagree class costs ${CLASS_LOW}–${CLASS_HIGH}, a common range in major US cities; memberships and class packs can bring that down, so check your own studio&apos;s rate.
              </p>
              <p className="text-sm leading-relaxed" style={bodyStyle}>
                <span className="font-semibold" style={strongStyle}>A realistic example:</span> you swap two of three weekly classes for Micro sessions. At ${CLASS_LOW}–${CLASS_HIGH} a class that saves ${2 * CLASS_LOW}–${2 * CLASS_HIGH} a week, so the {fmt(CORE_SETUP)} Micro-and-platform setup is covered in about {Math.round(CORE_SETUP / (2 * CLASS_HIGH))}–{Math.round(CORE_SETUP / (2 * CLASS_LOW))} weeks — before any streaming subscription. Swap just one class a week and it takes about {Math.round(CORE_SETUP / CLASS_HIGH)}–{Math.round(CORE_SETUP / CLASS_LOW)} weeks.
              </p>
            </div>

            {/* Personas */}
            <Divider label="Decide" />
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={h2Style}>Which one is right for you</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {PERSONAS.map((p) => (
                  <div key={p.title} className="rounded-xl p-5" style={cardStyle}>
                    <p className="text-base font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{p.title}</p>
                    <ul className="space-y-2">
                      {p.points.map((pt) => (
                        <li key={pt} className="text-sm leading-relaxed" style={bodyStyle}>— {pt}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Machines */}
            <Divider label="The machines" />
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-4" style={h2Style}>The Micro and the add-ons that close the gap</h2>
              <p className="text-sm leading-relaxed mb-8" style={bodyStyle}>
                Out of the box the Micro is a carriage with four springs. Each add-on brings it a step closer to the studio layout you know. Buy them in this order.
              </p>
              <div className="space-y-8">
                <TierCard p={MICRO} />
                {MICRO_ADDONS.map((p) => (
                  <TierCard key={p.id} p={p} />
                ))}
              </div>
              <p className="text-sm leading-relaxed mt-2" style={bodyStyle}>
                Specs, springs, floor space and five setup budgets are in our full{" "}
                <Link href="/blog/lagree-micro-review" style={inlineLinkStyle}>Lagree Micro review</Link>.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-4" style={h2Style}>The Megaformer</h2>
              <p className="text-sm leading-relaxed mb-8" style={bodyStyle}>
                The Megaformer is the machine that defines Lagree, and the one under you in every licensed class. Lagree Fitness sells it directly — current models are referred to as the M3S and M3X — and quotes pricing on request. If you are opening a studio, contact the brand. If you simply want to ride one, book a class.
              </p>
              <TierCard p={MEGAFORMER} />
              <p className="text-sm leading-relaxed mt-2" style={bodyStyle}>
                Comparing studio machines and look-alikes? See our{" "}
                <Link href="/blog/best-megaformer-machine" style={inlineLinkStyle}>Megaformer machine guide</Link>.
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
                <ArticleCard title="Lagree Micro Review" excerpt="The spec sheet, the four springs, the space you need and five ways to build a setup." href="/blog/lagree-micro-review" category="Lagree" readTime="12 min read" date="October 2026" imageUrl="/pictures/stitch-reformer-spring-detail.png" />
                <ArticleCard title="Lagree Fitness Brand Guide" excerpt="The method, the Megaformer and The Micro, plus every accessory and the full setup cost." href="/blog/lagree-fitness" category="Lagree" readTime="12 min read" date="September 2026" imageUrl="/pictures/stitch-reformers-aerial-row.png" />
                <ArticleCard title="Lagree for Beginners" excerpt="What to expect from your first Megaformer class and how to survive it." href="/blog/lagree-for-beginners" category="Lagree" readTime="9 min read" date="September 2026" imageUrl="/pictures/stitch-hands-on-carriage.png" />
                <ArticleCard title="Lagree at Home" excerpt="How to train the Lagree way at home, from the Micro to floor work between classes." href="/blog/lagree-at-home" category="Lagree" readTime="9 min read" date="September 2026" imageUrl="/pictures/stitch-hands-on-carriage.png" />
              </div>
              <p className="text-sm leading-relaxed mt-8" style={bodyStyle}>
                Brand site:{" "}
                <a href={LAGREE_DIRECT} target="_blank" rel="noopener noreferrer" style={inlineLinkStyle}>lagreefitness.com</a>.
              </p>
            </div>
          </div>
        </section>

        <CTASection title="Find a Lagree studio near you" subtitle="Use our curated city guides to find the best Pilates and Lagree studios worldwide." showSearch searchPlaceholder="Ask: best Lagree studios in Los Angeles…" />
      </main>
      <Footer />
    </>
  );
}
