import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import { jsonLdHtml } from "@/lib/schema";

const PAGE_URL = "https://pilatescollectiveclub.com/blog/lagree-micro-review";
const HERO_IMAGE = "https://pilatescollectiveclub.com/pictures/stitch-reformer-spring-detail.png";
const TITLE = "Lagree Micro Review (2026): Specs, Springs & Real Cost";
const DESCRIPTION =
  "The Lagree Micro, reviewed from its spec sheet: 72\" x 20\", 60 lb, four springs, fits users to 6'8\". What each add-on unlocks, the space you need and the real cost.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: "Everything you need to know before buying The Micro by Lagree Fitness: dimensions, the four springs, storage, accessories, floor space and what a full setup costs.",
    type: "article",
    url: PAGE_URL,
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: "Springs on a carriage machine — Lagree Micro review" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lagree Micro Review (2026): Specs & Real Cost",
    description: "The Micro by Lagree Fitness: 72\" x 20\", 60 lb, four springs, $990 — and what the add-ons unlock.",
    images: [HERO_IMAGE],
  },
  keywords: [
    "lagree micro review",
    "lagree micro",
    "the micro by lagree fitness",
    "lagree micro dimensions",
    "lagree micro springs",
    "lagree micro price",
    "microformer",
    "lagree micro worth it",
    "lagree micro accessories",
    "lagree home machine",
    "lagree micro weight limit",
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
  badge: "The Machine",
  shortName: "The Micro",
  name: "The Micro by Lagree Fitness",
  price: "$990.00",
  url: amz("B0BBT7YV93"),
  description:
    "Lagree Fitness's own home machine, sold by Lagree Fitness on Amazon. Per the listing: 72\" long x 20\" wide x 6\" high, 60 lb, four springs (red heavy, gray medium, black light, white extra light), built for low-impact, high-intensity strength and cardio, and designed to accommodate users up to 6'8\". It stores under a bed, against a wall or on a bike rack.",
};

const ACCESSORIES: Pick[] = [
  {
    id: "rear-platform",
    badge: "Add-On #1",
    shortName: "Rear platform",
    name: "Lagree Fitness Micro Rear Platform",
    price: "$290.00",
    url: amz("B0BKN2LSWD"),
    description:
      "A sturdy rear surface for your feet, hands, knees and heels. Lagree Fitness lists the express lunge, 5th lunge, super crunch and giant wheelbarrow among the moves it adds. The platform is 10.5\" L x 8.5\" W x 6\" H, and with it fitted the Micro becomes 81.5\" L x 20\" W x 6\" H. Sold by Lagree Fitness.",
  },
  {
    id: "handlebars",
    badge: "Add-On #2",
    shortName: "Handlebars",
    name: "Lagree Fitness Micro Handlebars (Pair)",
    price: "$190.00",
    url: amz("B0BKMP89SH"),
    description:
      "Handlebars designed with comfort and wrist support in mind, for moves such as Catfish, Twister, Spoon and Runner's Lunge. They fit the front or back of the Micro (the back needs the rear platform) and install in seconds with a pull-pin, no tools. Sold as a pair: for handles at both ends at once you need two pairs. Sold by Lagree Fitness.",
  },
  {
    id: "pulley-cables",
    badge: "Add-On #3",
    shortName: "Pulley cables",
    name: "Lagree Fitness Micro Pulley Cables",
    price: "$230.00",
    url: amz("B0BYMD4S91"),
    description:
      "The Micro's cable attachment, sold by Lagree Fitness. Be aware that the Amazon listing gives almost no specification beyond the name, and stock is limited — if you want details or it is unavailable, check lagreefitness.com before ordering.",
  },
];

const SETUP_KIT: Pick[] = [
  {
    id: "marcy-mat",
    badge: "Floor Mat — Micro Only",
    shortName: "Floor mat (78\")",
    name: "Marcy Equipment Mat & Floor Protector (78\" x 36\")",
    price: "$32.92",
    url: amz("B0041GQH3S"),
    description:
      "A 1/4-inch EVA foam equipment mat with a non-slip matte layer that steadies machines and absorbs impact. At 78\" long it covers the Micro's 72\" length with room to spare, but not the 81.5\" of a Micro with the rear platform. Sold by Amazon.com.",
  },
  {
    id: "rubber-cal",
    badge: "Floor Mat — With Platform",
    shortName: "Floor mat (4 x 7 ft)",
    name: "Rubber-Cal Diamond-Plate Rubber Flooring Roll (4 x 7 ft, 3mm)",
    price: "$49.50",
    url: amz("B005SUKZJ8"),
    description:
      "A 3mm synthetic-rubber protector roll, 4 ft x 7 ft — that is 84\" long, enough for the 81.5\" Micro-plus-platform footprint, and wide enough to step around the machine. Sold by Amazon.com.",
  },
  {
    id: "toesox",
    badge: "Grip",
    shortName: "Grip socks",
    name: "toesox Low Rise Grip Socks 2-Pack (Full Toe)",
    price: "$30.00",
    url: amz("B07QHNDHW3"),
    description:
      "Full-toe grip socks with a patented non-slip sole, in a 77% organic cotton blend. Lunges between platform and carriage are where you slip, so grip matters as much at home as in a studio. Sold by The Active Footwear Store.",
  },
  {
    id: "impulse-knee",
    badge: "Kneeling",
    shortName: "Knee pad",
    name: "Impulse Yoga Knee Pad Cushion (1\")",
    price: "$19.99",
    url: amz("B06WV6XVV9"),
    description:
      "One inch of foam for kneeling moves on the carriage or floor work beside the machine.",
  },
  {
    id: "gymboss",
    badge: "Timing",
    shortName: "Interval timer",
    name: "Gymboss Interval Timer",
    price: "$20.95",
    url: amz("B00CO8HO6O"),
    description:
      "Lagree is timed, not counted. This pager-sized timer runs one or two intervals from 2 seconds to 99 minutes with up to 99 repeats, and alerts by chime and vibration — handy when you train without a class video.",
  },
];

const ALL_ITEMS: Pick[] = [MICRO, ...ACCESSORIES, ...SETUP_KIT];

const toNumber = (price: string) => {
  const n = parseFloat(price.replace(/[^0-9.]/g, ""));
  return Number.isNaN(n) ? 0 : n;
};
const fmt = (n: number) => `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const MICRO_PRICE = toNumber(MICRO.price); // 990
const PLATFORM_PRICE = toNumber(ACCESSORIES[0].price); // 290
const BARS_PRICE = toNumber(ACCESSORIES[1].price); // 190
const CABLES_PRICE = toNumber(ACCESSORIES[2].price); // 230
const BUNDLES = [
  { label: "The Micro only", items: "Micro", total: MICRO_PRICE }, // 990
  { label: "Micro + rear platform", items: "Micro, platform", total: MICRO_PRICE + PLATFORM_PRICE }, // 1,280
  { label: "Micro + platform + one pair of handlebars", items: "Micro, platform, handlebars", total: MICRO_PRICE + PLATFORM_PRICE + BARS_PRICE }, // 1,470
  { label: "Everything (one pair of handlebars)", items: "Micro, platform, handlebars, cables", total: MICRO_PRICE + PLATFORM_PRICE + BARS_PRICE + CABLES_PRICE }, // 1,700
  { label: "Everything with handlebars front and back", items: "Micro, platform, 2 pairs of handlebars, cables", total: MICRO_PRICE + PLATFORM_PRICE + 2 * BARS_PRICE + CABLES_PRICE }, // 1,890
];

// Lagree classes commonly cost $35–$45+ in major US cities.
const classRange = (n: number) => `${Math.round(n / 45)}–${Math.round(n / 35)}`;

const SPECS = [
  { label: "Price", value: `${MICRO.price} (sold by Lagree Fitness on Amazon)` },
  { label: "Dimensions", value: "72\" L x 20\" W x 6\" H" },
  { label: "With rear platform", value: "81.5\" L x 20\" W x 6\" H" },
  { label: "Weight", value: "60 lb" },
  { label: "User height", value: "Accommodates users up to 6'8\"" },
  { label: "Springs included", value: "4: red (heavy), gray (medium), black (light), white (extra light)" },
  { label: "Storage", value: "Under a bed, against a wall or on a bike rack" },
  { label: "Classes", value: "Lagree On Demand (lagreeod.com), recommended on the listing" },
];

const SPRINGS = [
  { color: "#b42318", name: "Red", load: "Heavy" },
  { color: "#6b7280", name: "Gray", load: "Medium" },
  { color: "#111827", name: "Black", load: "Light" },
  { color: "#f3f4f6", name: "White", load: "Extra light" },
];

const FAQS = [
  {
    q: "How big is the Lagree Micro?",
    a: "According to the Amazon listing, The Micro measures 72 inches long, 20 inches wide and 6 inches high, and weighs 60 lb. With the optional rear platform fitted it becomes 81.5 inches long. Plan for space around it to step on and off and to move the carriage through its full range.",
  },
  {
    q: "How many springs does the Lagree Micro have?",
    a: "Four: one red (heavy), one gray (medium), one black (light) and one white (extra light). Different springs give you different loads, so you can make a move harder or easier — and in Lagree, lighter is not always easier, because a lighter load can make the carriage less stable.",
  },
  {
    q: "Can tall people use the Lagree Micro?",
    a: "Yes. The listing says the Micro accommodates users up to 6'8\", which covers almost everyone.",
  },
  {
    q: "Is the Lagree Micro worth it?",
    a: `For people who already take Lagree classes and want to train between them, it can be. The Micro is ${fmt(MICRO_PRICE)}; with the rear platform it is ${fmt(MICRO_PRICE + PLATFORM_PRICE)}. At $35–$45 a class, the Micro alone equals roughly ${classRange(MICRO_PRICE)} classes. It does not replace an instructor, so it suits people who already know the method.`,
  },
  {
    q: "Which Lagree Micro accessory should I buy first?",
    a: "The rear platform. It adds the most exercises (express lunge, 5th lunge, super crunch, giant wheelbarrow and more) and you need it before handlebars can go on the back. Handlebars come next for stability in moves like Catfish and Spoon. The pulley cables have the least published detail and limited stock.",
  },
  {
    q: "Where can I find Lagree Micro workouts?",
    a: "The Micro's Amazon listing points to Lagree On Demand at lagreeod.com for virtual Micro classes — Lagree's own streaming library.",
  },
  {
    q: "Is the Lagree Micro the same as a Pilates reformer?",
    a: "No. The listing itself says \"Not Pilates, it's Lagree\". Both use springs and a sliding carriage, but the Micro is built for the Lagree method's slow, time-under-tension exercises and machine layout, not the Pilates reformer repertoire.",
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
      "name": "The Lagree Micro, Its Accessories and Home Setup (2026)",
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
        { "@type": "ListItem", "position": 3, "name": "Lagree Micro Review", "item": PAGE_URL },
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

export default function LagreeMicroReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={eyebrowStyle}>Machine Review</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Lagree Fitness</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Lagree Micro<br /><span style={{ color: "#8b4a31" }}>(2026): Specs, Springs &amp; Real Cost</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated October 2026 · 12 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Product links on this page go to Amazon, where we earn a small commission on qualifying purchases at no extra cost to you. Lagree On Demand and lagreefitness.com links are not affiliate links. This review is based on Lagree Fitness&apos;s published specifications and listings, not a hands-on test.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              The Micro is the only machine Lagree Fitness sells for the home, and its Amazon listing has one blunt line in the title: &ldquo;Not Pilates, it&apos;s Lagree.&rdquo; Before you spend {MICRO.price} on it, here is everything the spec sheet tells you — the exact size and weight, what each of the four springs does, how much floor you really need, which add-ons are worth it, and what a complete setup costs against a studio class pack.
            </p>
            <p className="text-sm leading-relaxed" style={bodyStyle}>
              All prices and specifications were checked live on Amazon on October 4, 2026. The Micro and its accessories are sold by Lagree Fitness itself; the pulley cables were low on stock. Prices change, so the final price is whatever Amazon shows at checkout.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-reformer-spring-detail.png" alt="Close-up of springs on a carriage machine — Lagree Micro springs explained" fill className="object-cover" style={{ filter: "brightness(0.85)" }} priority />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-10 mt-4 flex flex-col sm:flex-row gap-3">
              <Link href="/blog/lagree-micro-vs-megaformer" className="flex-1 rounded-xl p-4 text-sm font-semibold" style={hubStyle}>
                Deciding between machines? → Micro vs Megaformer
              </Link>
              <Link href="/blog/lagree-fitness" className="flex-1 rounded-xl p-4 text-sm font-semibold" style={hubStyle}>
                The brand behind it → Lagree Fitness guide
              </Link>
            </div>

            {/* Verdict */}
            <div className="mb-16 rounded-2xl p-6 md:p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.5)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={eyebrowStyle}>The verdict</p>
              <p className="text-sm leading-relaxed mb-4" style={bodyStyle}>
                <span className="font-semibold" style={{ color: "#1b1c1c" }}>Buy it if</span> you already take Lagree classes, want genuine Lagree at home between them, and have about seven feet of floor (eight with the rear platform). It is the brand&apos;s own machine, compact enough to slide under a bed, and fits users up to 6&apos;8&quot;.
              </p>
              <p className="text-sm leading-relaxed mb-4" style={bodyStyle}>
                <span className="font-semibold" style={{ color: "#1b1c1c" }}>Skip it if</span> you have never done Lagree, or you actually want Pilates. Lagree depends heavily on instructor cues, and a Pilates reformer is a different machine for a different method.
              </p>
              <p className="text-sm leading-relaxed" style={bodyStyle}>
                <span className="font-semibold" style={{ color: "#1b1c1c" }}>Budget for the rear platform.</span> The realistic setup is {fmt(MICRO_PRICE + PLATFORM_PRICE)}, not {fmt(MICRO_PRICE)}.
              </p>
            </div>

            {/* Spec sheet */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={h2Style}>The spec sheet</h2>
              <div className="overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
                {SPECS.map((s, i) => (
                  <div key={s.label} className="flex flex-col sm:flex-row gap-1 sm:gap-6 px-6 py-4" style={rowStyle(i)}>
                    <p className="text-sm font-semibold sm:w-44 shrink-0" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{s.label}</p>
                    <p className="text-sm leading-relaxed" style={bodyStyle}>{s.value}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs mt-3" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Source: The Micro&apos;s and the Micro Rear Platform&apos;s Amazon listings, sold by Lagree Fitness.</p>
            </div>

            {/* Springs */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-4" style={h2Style}>The four springs, explained</h2>
              <p className="text-sm leading-relaxed mb-6" style={bodyStyle}>
                The Micro ships with four springs, each a different load. Choosing which ones to use is how you set the difficulty of every move.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {SPRINGS.map((s) => (
                  <div key={s.name} className="rounded-xl p-5 text-center" style={cardStyle}>
                    <div className="mx-auto mb-3 rounded-full" style={{ width: 28, height: 28, backgroundColor: s.color, border: "1px solid #d9c2ba" }} />
                    <p className="text-sm font-semibold" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{s.name}</p>
                    <p className="text-xs" style={bodyStyle}>{s.load}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm leading-relaxed" style={bodyStyle}>
                One thing that surprises people new to Lagree: <span className="font-semibold" style={{ color: "#1b1c1c" }}>lighter is not automatically easier.</span> Pressing moves such as Catfish are generally done heavy so the tension lands in the abs, while a lighter load can make the carriage less stable and harder to control in other moves. If you train from Lagree On Demand videos, follow the instructor&apos;s spring cues rather than guessing. For the moves themselves, see{" "}
                <Link href="/blog/lagree-exercises" style={inlineLinkStyle}>Lagree exercises explained</Link>.
              </p>
            </div>

            {/* Space */}
            <Divider label="Before you buy" />
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-4" style={h2Style}>How much space you really need</h2>
              <p className="text-sm leading-relaxed mb-6" style={bodyStyle}>
                The Micro is small for a carriage machine, but you still need a clear strip of floor long enough to lie and lunge on, plus room to step on and off.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  { heading: "Micro alone", body: "72\" x 20\" — exactly 10 sq ft of footprint. Add space on at least one long side to mount and dismount, so think in terms of a 7 ft x 4 ft zone." },
                  { heading: "With the rear platform", body: "81.5\" x 20\". The platform adds almost 10 inches of length, so plan an 8 ft x 4 ft zone. Measure before ordering the platform, not after." },
                  { heading: "Height and storage", body: "At 6\" high and 60 lb, it slides under many beds, leans against a wall or hangs on a bike rack, according to Lagree Fitness. Check your bed clearance first." },
                  { heading: "Floor protection", body: "A 60 lb machine with a moving carriage will mark wood floors and creep on hard ones. An equipment mat steadies it and protects the floor — size it to the setup you are buying." },
                ].map((item) => (
                  <div key={item.heading} className="rounded-xl p-5" style={cardStyle}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.heading}</p>
                    <p className="text-sm leading-relaxed" style={bodyStyle}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Machine */}
            <Divider label="The machine" />
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-4" style={h2Style}>The Micro by Lagree Fitness</h2>
              <p className="text-sm leading-relaxed mb-8" style={bodyStyle}>
                Lagree Fitness describes the Micro as compact, lightweight and portable, designed to strengthen, tighten and tone as quickly as its larger predecessor, the Megaformer — but at home. That comparison is the brand&apos;s own claim; what is certain is that it is the genuine Lagree home machine, sold by Lagree Fitness, not a look-alike.
              </p>
              <TierCard p={MICRO} />
            </div>

            {/* Accessories */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-4" style={h2Style}>The three add-ons, ranked</h2>
              <p className="text-sm leading-relaxed mb-8" style={bodyStyle}>
                Lagree Fitness sells three accessories for the Micro, all on Amazon. They are not equally important.
              </p>
              <div className="space-y-8">
                {ACCESSORIES.map((p) => (
                  <TierCard key={p.id} p={p} />
                ))}
              </div>
              <div className="mt-6 rounded-2xl p-6 md:p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.5)" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={eyebrowStyle}>Three things the listings tell you</p>
                <ul className="space-y-3">
                  <li className="text-sm leading-relaxed" style={bodyStyle}><span className="font-semibold" style={{ color: "#1b1c1c" }}>Platform before back handlebars.</span> Handlebars can only go on the back of the Micro once the rear platform is fitted.</li>
                  <li className="text-sm leading-relaxed" style={bodyStyle}><span className="font-semibold" style={{ color: "#1b1c1c" }}>One pair = one end.</span> For handlebars front and back at the same time, buy two pairs ({fmt(BARS_PRICE * 2)}). The pull-pin fitting means you can also move one pair between ends in seconds.</li>
                  <li className="text-sm leading-relaxed" style={bodyStyle}><span className="font-semibold" style={{ color: "#1b1c1c" }}>Cables last.</span> The pulley cables listing carries almost no detail and limited stock; ask Lagree Fitness for specifics if you need them.</li>
                </ul>
              </div>
            </div>

            {/* Cost */}
            <div className="mb-16 rounded-2xl p-6 md:p-8" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.5)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={eyebrowStyle}>The real cost</p>
              <h2 className="text-2xl font-semibold mb-4" style={h2Style}>Five ways to build a Micro setup</h2>
              <div className="overflow-hidden mb-6" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "12px" }}>
                {BUNDLES.map((b, i) => (
                  <div key={b.label} className="flex items-center justify-between gap-4 px-5 py-3" style={rowStyle(i)}>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{b.label}</p>
                      <p className="text-xs" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>≈ {classRange(b.total)} studio classes</p>
                    </div>
                    <span className="text-sm font-semibold shrink-0" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{fmt(b.total)}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm leading-relaxed" style={bodyStyle}>
                Class equivalents assume Lagree classes at $35–$45 each, a common range in major US cities. Train three times a week and the Micro with its platform equals roughly two to three months of classes; once a week, closer to half a year. Most owners keep some studio classes for the coaching, so treat these numbers as the ceiling on savings. Add a streaming subscription from{" "}
                <a href={LAGREE_OD} target="_blank" rel="noopener noreferrer" style={inlineLinkStyle}>Lagree On Demand</a> if you want guided Micro classes.
              </p>
            </div>

            {/* Setup kit */}
            <Divider label="Complete the setup" />
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-4" style={h2Style}>The home kit around the Micro</h2>
              <p className="text-sm leading-relaxed mb-8" style={bodyStyle}>
                None of these are Lagree-branded, and none are essential. They are simply what makes a home Lagree session safer, quieter and closer to the studio: a mat sized to the machine, grip underfoot, a cushion for kneeling work and a timer.
              </p>
              <div className="space-y-8">
                {SETUP_KIT.map((p) => (
                  <TierCard key={p.id} p={p} />
                ))}
              </div>
              <p className="text-sm leading-relaxed mt-2" style={bodyStyle}>
                More choice in each category: <Link href="/blog/best-lagree-grip-socks" style={inlineLinkStyle}>Lagree socks</Link>,{" "}
                <Link href="/blog/best-lagree-knee-pads" style={inlineLinkStyle}>Lagree knee pads</Link> and{" "}
                <Link href="/blog/best-interval-timer-for-lagree" style={inlineLinkStyle}>interval timers for Lagree</Link>.
              </p>
            </div>

            {/* Drawbacks */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={h2Style}>The honest drawbacks</h2>
              <ul className="space-y-4">
                {[
                  { h: "No instructor in the box.", b: "Lagree relies on constant cues — slower, lower, hips level. Without classes or on-demand videos, most people drift into moving too fast." },
                  { h: "The base price is not the real price.", b: `Most of the move library people know from class needs the rear platform, which takes the setup to ${fmt(MICRO_PRICE + PLATFORM_PRICE)}.` },
                  { h: "Thin details on the cables.", b: "The pulley cables listing gives almost no information. That is unusual for a $230 accessory." },
                  { h: "Stock can be patchy.", b: "Accessories have run low on Amazon. If something is unavailable, the same products are sold direct at lagreefitness.com." },
                ].map((item) => (
                  <li key={item.h} className="text-sm leading-relaxed" style={bodyStyle}>
                    <span className="font-semibold" style={{ color: "#1b1c1c" }}>{item.h}</span> {item.b}
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed mt-6" style={bodyStyle}>
                Not sure the home machine is the right Lagree purchase at all? Our{" "}
                <Link href="/blog/lagree-micro-vs-megaformer" style={inlineLinkStyle}>Micro vs Megaformer comparison</Link> lays out what you keep and what you lose compared with studio classes, and{" "}
                <a href={LAGREE_DIRECT} target="_blank" rel="noopener noreferrer" style={inlineLinkStyle}>lagreefitness.com</a> lists the brand&apos;s full range.
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
                <ArticleCard title="Lagree Micro vs Megaformer" excerpt="The home machine against the studio machine: what carries over, what doesn't, and the cost per workout." href="/blog/lagree-micro-vs-megaformer" category="Lagree" readTime="11 min read" date="October 2026" imageUrl="/pictures/stitch-reformers-aerial-row.png" />
                <ArticleCard title="Lagree Fitness Brand Guide" excerpt="The method, the Megaformer and The Micro, plus every accessory and the full setup cost." href="/blog/lagree-fitness" category="Lagree" readTime="12 min read" date="September 2026" imageUrl="/pictures/stitch-reformers-aerial-row.png" />
                <ArticleCard title="Lagree Exercises" excerpt="The signature moves explained, plus a 20-minute Lagree-inspired floor workout." href="/blog/lagree-exercises" category="Lagree" readTime="12 min read" date="October 2026" imageUrl="/pictures/stitch-hands-on-carriage.png" />
                <ArticleCard title="Lagree at Home" excerpt="How to train the Lagree way at home, from the Micro to floor work between classes." href="/blog/lagree-at-home" category="Lagree" readTime="9 min read" date="September 2026" imageUrl="/pictures/stitch-hands-on-carriage.png" />
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
