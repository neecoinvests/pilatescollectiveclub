import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

const PAGE_URL = "https://pilatescollectiveclub.com/blog/lagree-for-beginners";
const HERO_IMAGE = "https://pilatescollectiveclub.com/pictures/stitch-hands-on-carriage.png";
const TITLE = "Lagree for Beginners (2026): Your First-Class Guide";
const DESCRIPTION =
  "Lagree for beginners: what your first class feels like, what to expect at the studio, common mistakes, how often to go and the short kit worth buying first.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: "Your first Lagree class, demystified — the slow tempo, the shaking, studio etiquette, beginner mistakes and a short kit that actually helps.",
    type: "article",
    url: PAGE_URL,
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: "Hands on a carriage — Lagree for beginners guide by Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lagree for Beginners (2026): First-Class Guide",
    description: "What a first Lagree class feels like, the mistakes to avoid, how often to go and what to bring.",
    images: [HERO_IMAGE],
  },
  keywords: [
    "lagree for beginners",
    "first lagree class",
    "lagree beginner tips",
    "what to expect lagree class",
    "is lagree hard",
    "lagree class what to wear",
    "what to bring to lagree",
    "how often should i do lagree",
    "lagree at home for beginners",
    "megaformer for beginners",
    "lagree micro",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=pilatescollective-20`;

type Pick = {
  tier: "Pick" | "Budget" | "Upgrade" | "Add-on";
  name: string;
  price: string;
  url: string;
  description: string;
};

type KitItem = {
  id: string;
  shortName: string;
  why: string;
  guideHref: string;
  guideLabel: string;
  picks: Pick[];
};

// ─── Studio kit: what to bring to your first classes ───
const STUDIO_KIT: KitItem[] = [
  {
    id: "grip-socks",
    shortName: "Grip socks",
    why: "Most Lagree studios ask you to wear grip socks on the machine, and the slow, sweaty tempo makes grip matter even more than in a reformer Pilates class. Your feet press into the carriage and platforms for long holds, and a slipping foot is the fastest way to lose your position.",
    guideHref: "/blog/best-lagree-grip-socks",
    guideLabel: "Full Lagree grip socks guide",
    picks: [
      {
        tier: "Pick",
        name: "toesox Low Rise Grip Socks 2-Pack (Full Toe)",
        price: "$30.00",
        url: amz("B07QHNDHW3"),
        description:
          "A full-toe grip sock: each toe sits in its own pocket, which many people find gives a more planted feel when pushing through the balls of the feet. The 2-pack means you can wash one pair while you wear the other — useful once you are going more than once a week.",
      },
      {
        tier: "Budget",
        name: "Muezna Grip Socks (6 Pairs)",
        price: "$7.99",
        url: amz("B0DQ53GSP5"),
        description:
          "Six pairs for $7.99 is the low-risk way to find out whether Lagree is for you before investing in premium socks. Keep a pair in every bag so you never arrive without them.",
      },
    ],
  },
  {
    id: "shorts",
    shortName: "Biker shorts",
    why: "Fitted clothing is the rule. Loose shorts ride up in lunges and on all fours, and zips or drawstrings can catch on the carriage. Tight biker shorts or leggings stay put, and they let the instructor see your knees and hips, which helps them correct your form.",
    guideHref: "/blog/best-lagree-shorts",
    guideLabel: "Full Lagree shorts guide",
    picks: [
      {
        tier: "Pick",
        name: "CRZ YOGA Butterluxe Biker Shorts 6\"",
        price: "$24.00",
        url: amz("B0B28B34XX"),
        description:
          "Sold by CRZ YOGA on Amazon. Butterluxe is the brand's soft, buttery line, and a 6\" inseam is long enough to cover the inner thigh during wide lunges on the carriage. If you prefer full length, the Butterluxe 25\" leggings ($32.00) are the equivalent pick — see our Lagree leggings guide.",
      },
      {
        tier: "Budget",
        name: "CRZ YOGA Butterluxe Biker Shorts 4\"",
        price: "$24.00",
        url: amz("B0B2ZPL1XS"),
        description:
          "Same fabric and price, shorter inseam. Choose the 4\" if you run hot — Lagree rooms can get warm — and you prefer less fabric on the legs.",
      },
    ],
  },
  {
    id: "towel",
    shortName: "Sweat towel",
    why: "Expect to sweat more than you would in a reformer Pilates class. A towel over the carriage keeps your hands and knees from sliding, and it is more hygienic on shared equipment. Some studios hand them out; many do not.",
    guideHref: "/blog/best-sweat-towel-for-lagree",
    guideLabel: "Full Lagree towel guide",
    picks: [
      {
        tier: "Pick",
        name: "Shandali Stickyfiber Yoga Towel",
        price: "$19.99",
        url: amz("B011IU43WG"),
        description:
          "A mat-length towel with a grippy side, so it stays where you put it rather than bunching under your hands. It covers a carriage comfortably and folds small enough for a class bag.",
      },
    ],
  },
  {
    id: "water-bottle",
    shortName: "Water bottle",
    why: "You will want water between blocks. A bottle you can drink from in a few seconds, one-handed, matters more than capacity, because transitions in Lagree are quick.",
    guideHref: "/blog/best-pilates-water-bottle",
    guideLabel: "Full water bottle guide",
    picks: [
      {
        tier: "Pick",
        name: "Owala FreeSip 24 oz",
        price: "$29.99",
        url: amz("B0BZYCJK89"),
        description:
          "The FreeSip spout lets you either sip through the built-in straw or tip it back to swig, and the lid locks so it will not leak in your bag. 24 oz is plenty for a single class.",
      },
      {
        tier: "Upgrade",
        name: "STANLEY Quencher H2.0 40 oz",
        price: "$45.00",
        url: amz("B0CRMP3RQT"),
        description:
          "If you want one bottle for the whole day, not just class, the 40 oz Quencher holds far more. It is bulkier, so leave it by the wall rather than on the machine.",
      },
    ],
  },
  {
    id: "knee-pad",
    shortName: "Knee pad",
    why: "Kneeling moves on the carriage can be uncomfortable on the knees when you are new. A studio may have pads, but if kneeling bothers you, a slim pad of your own takes the edge off.",
    guideHref: "/blog/best-lagree-knee-pads",
    guideLabel: "Full Lagree knee pad guide",
    picks: [
      {
        tier: "Pick",
        name: "Impulse Yoga Knee Pad Cushion (1\" / 25mm)",
        price: "$19.99",
        url: amz("B06WV6XVV9"),
        description:
          "At 1\" (25mm) thick it offers real cushioning for kneeling holds. Check with your instructor before using your own pad on the machine so it does not get in the way of the carriage.",
      },
      {
        tier: "Budget",
        name: "HASSLICKIT Yoga Knee Pad Cushion",
        price: "$14.99",
        url: amz("B0D7QB8PYM"),
        description:
          "Slightly thinner (24 x 9.8 x 0.8 in) and a few dollars cheaper. The longer shape also works for floor practice at home.",
      },
    ],
  },
];

// ─── Home kit: Lagree-inspired floor work between classes ───
const HOME_KIT: KitItem[] = [
  {
    id: "sliders",
    shortName: "Sliders",
    why: "Sliders let you do slow lunges, mountain climbers, pikes and hamstring curls on the floor, with the same need to control the movement in both directions that the carriage demands.",
    guideHref: "/blog/best-exercise-sliders-for-pilates",
    guideLabel: "Full exercise sliders guide",
    picks: [
      {
        tier: "Pick",
        name: "Gaiam Core Sliding Discs (2)",
        price: "$15.82",
        url: amz("B0964G1N18"),
        description:
          "A pair of dual-sided discs: one side for carpet, one for hard floors. They are small enough to keep in a drawer, which is half the battle for home practice.",
      },
      {
        tier: "Upgrade",
        name: "Gliding 9\" Sliders (Vista Fitness)",
        price: "$19.99",
        url: amz("B08WVK6Y5L"),
        description:
          "Larger 9\" sliders give your hands and feet more surface, which some people find steadier in plank-based moves.",
      },
    ],
  },
  {
    id: "timer",
    shortName: "Interval timer",
    why: "Lagree is built around timed sets rather than counting reps. A dedicated interval timer lets you set work and rest periods and stop staring at your phone.",
    guideHref: "/blog/best-interval-timer-for-lagree",
    guideLabel: "Full interval timer guide",
    picks: [
      {
        tier: "Pick",
        name: "Gymboss Interval Timer",
        price: "$20.95",
        url: amz("B00CO8HO6O"),
        description:
          "A simple clip-on interval timer that beeps or vibrates at the end of each interval. Set a long work block and a short rest, and you have a Lagree-style structure for floor work.",
      },
    ],
  },
  {
    id: "ankle-weights",
    shortName: "Ankle weights",
    why: "Light weights add load to leg lifts and floor work, making it harder to rush a movement you would otherwise do quickly. You need very little weight when you move slowly.",
    guideHref: "/blog/best-pilates-ankle-weights",
    guideLabel: "Full ankle weights guide",
    picks: [
      {
        tier: "Pick",
        name: "Bala Bangles 1 lb",
        price: "$55.00",
        url: amz("B0BQCJRL6Q"),
        description:
          "1 lb wearable weights that go on the wrists or ankles. The design is the premium part of the price; the useful part is that 1 lb is enough when you slow down.",
      },
    ],
  },
];

// ─── If you're hooked: The Micro ───
const MICRO: Pick = {
  tier: "Upgrade",
  name: "The Micro by Lagree Fitness",
  price: "$990.00",
  url: amz("B0BBT7YV93"),
  description:
    "Sold by Lagree Fitness on its own Amazon store. The Micro is the brand's compact, lightweight, portable machine, designed to deliver a Megaformer-style workout in a smaller footprint: low-impact, high-intensity strength and cardio. It accommodates users up to 6'8\" and stores under a bed, against a wall or on a bike rack. Stock can be limited — if the listing is unavailable, buy direct from lagreefitness.com.",
};

const MICRO_ADDONS: Pick[] = [
  {
    tier: "Add-on",
    name: "Lagree Fitness Micro Rear Platform",
    price: "$290.00",
    url: amz("B0BKN2LSWD"),
    description:
      "Adds a sturdy rear surface for your feet, hands or knees and unlocks moves such as the express lunge, 5th lunge, super crunch and giant wheelbarrow. The platform is 10.5\" L x 8.5\" W x 6\" H; with it attached, the Micro measures 81.5\" L x 20\" W x 6\" H.",
  },
  {
    tier: "Add-on",
    name: "Lagree Fitness Micro Handlebars (Pair)",
    price: "$190.00",
    url: amz("B0BKMP89SH"),
    description:
      "Handlebars add stability, which is useful when you are new. They can go at the front or the back (the back needs the rear platform), and they are sold as a pair — you need two sets if you want handlebars at both ends.",
  },
];

const ALL_ITEMS: Pick[] = [...STUDIO_KIT.flatMap((c) => c.picks), ...HOME_KIT.flatMap((c) => c.picks), MICRO, ...MICRO_ADDONS];

const toNumber = (price: string) => {
  const n = parseFloat(price.replace(/[^0-9.]/g, ""));
  return Number.isNaN(n) ? 0 : n;
};

const fmt = (n: number) => `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const pickTier = (c: KitItem, tier: Pick["tier"]) => c.picks.find((p) => p.tier === tier) ?? c.picks[0];

const STUDIO_PICK_KIT = STUDIO_KIT.map((c) => ({ category: c.shortName, pick: pickTier(c, "Pick") }));
const STUDIO_BUDGET_KIT = STUDIO_KIT.map((c) => ({ category: c.shortName, pick: pickTier(c, "Budget") }));
const HOME_PICK_KIT = HOME_KIT.map((c) => ({ category: c.shortName, pick: pickTier(c, "Pick") }));

const sumKit = (kit: { pick: Pick }[]) => Math.round(kit.reduce((sum, k) => sum + toNumber(k.pick.price), 0) * 100) / 100;

const STUDIO_PICK_TOTAL = sumKit(STUDIO_PICK_KIT); // 30.00 + 24.00 + 19.99 + 29.99 + 19.99 = 123.97
const STUDIO_BUDGET_TOTAL = sumKit(STUDIO_BUDGET_KIT); // 7.99 + 24.00 + 19.99 + 29.99 + 14.99 = 96.96
const HOME_TOTAL = sumKit(HOME_PICK_KIT); // 15.82 + 20.95 + 55.00 = 91.77
const MICRO_PRICE = toNumber(MICRO.price); // 990.00
const MICRO_SETUP_TOTAL = MICRO_PRICE + MICRO_ADDONS.reduce((s, p) => s + toNumber(p.price), 0); // 990 + 290 + 190 = 1,470.00

const FAQS = [
  {
    q: "Is Lagree good for beginners?",
    a: "Yes, as long as you treat your first few classes as learning sessions rather than tests. Beginners use the same machine and the same moves as everyone else; the difference is lighter spring settings, more modifications and more rest when you need it. Tell the instructor it is your first class so they can set you up and keep an eye on your form.",
  },
  {
    q: "Is Lagree hard?",
    a: "Honestly, yes — and it is harder than it looks. The movements are slow and controlled, so your muscles stay under tension for long stretches with little rest, and it is normal for your legs or core to shake. The good news is that the difficulty is adjustable: slower, smaller and lighter are all valid ways to make a move work for you.",
  },
  {
    q: "What should I wear to my first Lagree class?",
    a: "Fitted biker shorts or leggings, a supportive sports bra or fitted top, and grip socks. Avoid loose shorts, baggy tops and anything with zips or drawstrings that could catch on the carriage. Bring a small towel and a water bottle.",
  },
  {
    q: "How often should a beginner do Lagree?",
    a: "A common starting point is two or three classes a week with at least a day between them, so your muscles have time to recover from the sustained tension. Once the soreness after class fades and your form feels steadier, you can add a session. Listen to your body rather than a schedule.",
  },
  {
    q: "Is Lagree the same as Pilates?",
    a: "No. Sebastien Lagree was inspired by Pilates, but the Lagree method is its own system with its own machine, the Megaformer, and a higher-intensity format. Both use springs and a sliding carriage, which is where the confusion comes from. Our Lagree vs Pilates guide covers the differences in detail.",
  },
  {
    q: "Can I do Lagree at home as a beginner?",
    a: `You can do Lagree-inspired floor work with sliders, an interval timer and light ankle weights (about ${fmt(HOME_TOTAL)} for the picks on this page), but it is not the same as working on a Megaformer. If you are hooked, Lagree Fitness sells its compact home machine, The Micro, for $990.00 on its own Amazon store; stock can be limited, so check lagreefitness.com if it is unavailable. Most beginners are better off learning the moves in a studio first.`,
  },
  {
    q: "Is Lagree safe if I have an injury or am pregnant?",
    a: "Check with your doctor or physiotherapist before starting, and tell your instructor before class. Lagree is a high-intensity method, so if you are recovering from an injury or are pregnant, get personal advice first rather than relying on a general guide.",
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
      "articleSection": "Guides",
      "inLanguage": "en-US",
    },
    {
      "@type": "ItemList",
      "name": "Lagree for Beginners: Starter Kit (2026)",
      "numberOfItems": ALL_ITEMS.length,
      "itemListElement": ALL_ITEMS.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "description": p.description,
          "offers": { "@type": "Offer", "priceCurrency": "USD", "price": p.price.replace(/[^0-9.]/g, "") || "0", "availability": p === MICRO ? "https://schema.org/LimitedAvailability" : "https://schema.org/InStock", "url": p.url },
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Lagree for Beginners", "item": PAGE_URL },
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
const h3Style = { color: "#1b1c1c", fontFamily: "'Playfair Display', serif" };
const inlineLinkStyle = { color: "#8b4a31", textDecoration: "underline" };
const cardStyle = { backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" };

const MISTAKES = [
  {
    heading: "Going too fast",
    body: "The single most common beginner mistake. When a move burns, the instinct is to speed up and get it over with. In Lagree, speed takes tension off the muscle and puts momentum in charge. Slow down further when it gets hard, not faster.",
  },
  {
    heading: "Gripping the handles for dear life",
    body: "A white-knuckle grip tenses your shoulders and neck and steals effort from the muscles the move is meant to work. Hold on firmly enough to be stable, then relax your hands and drop your shoulders away from your ears.",
  },
  {
    heading: "Not tucking",
    body: "You will hear cues like “tuck” or “tuck your pelvis” constantly. It means drawing your tailbone slightly under so your lower back does not arch, particularly in planks and on all fours. Letting the lower back sag shifts the work away from your core.",
  },
  {
    heading: "Adding springs to keep up",
    body: "More resistance is not always harder in Lagree — sometimes a lighter setting is more challenging because you have to control the carriage yourself. Let the instructor guide your spring choice for the first few weeks.",
  },
  {
    heading: "Skipping the modification",
    body: "Instructors offer easier versions for a reason. Taking the modification with good form beats forcing the full version with a collapsing back or wobbling knee. You are not behind; you are learning the move properly.",
  },
  {
    heading: "Holding your breath",
    body: "Long holds invite breath-holding. Keep breathing steadily through the whole set. If you cannot breathe and hold the position at the same time, the position is too hard for today — ease off.",
  },
];

const renderKit = (items: KitItem[]) =>
  items.map((c) => (
    <div key={c.id} id={c.id} className="mb-14 scroll-mt-28">
      <h3 className="text-2xl font-semibold mb-3" style={h3Style}>{c.shortName}</h3>
      <p className="text-sm leading-relaxed mb-8" style={bodyStyle}>{c.why}</p>
      <div className="space-y-8">
        {c.picks.map((p) => (
          <div key={p.name}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{p.tier}</span>
            </div>
            <ProductCard name={p.name} description={p.description} price={p.price} affiliateUrl={p.url} />
          </div>
        ))}
      </div>
      <Link href={c.guideHref} className="text-sm font-semibold" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>
        {c.guideLabel} →
      </Link>
    </div>
  ));

export default function LagreeForBeginnersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={eyebrowStyle}>Beginner Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Lagree</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Lagree for Beginners<br /><span style={{ color: "#8b4a31" }}>(2026): Your First-Class Guide</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 11 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Product links on this page go to Amazon, and we earn a small commission on qualifying purchases. The Megaformer is not sold on Amazon; where we mention it, or where The Micro may be out of stock, we point you to lagreefitness.com, which is not an affiliate link.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Your first Lagree class will probably be one of the hardest slow workouts you have ever done. That is not a warning to stay away — it is the whole point of the method. This guide explains what Lagree is, what a class actually feels like, what happens at the studio, the mistakes almost every beginner makes, and how often to go. At the end there is a short, honest kit list, with a total, so you can turn up prepared without buying things you do not need.
            </p>
            <p className="text-sm leading-relaxed" style={bodyStyle}>
              Every Amazon listing below was checked as live on September 28, 2026, at the price shown. Prices change, so the final price is whatever the retailer shows at checkout.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-hands-on-carriage.png" alt="Hands on a sliding carriage — what to expect in your first Lagree class as a beginner" fill className="object-cover" style={{ filter: "brightness(0.85)" }} priority />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            {/* Related hubs */}
            <div className="mb-10 mt-4 flex flex-col sm:flex-row gap-3">
              <Link href="/blog/lagree-essentials" className="flex-1 rounded-xl p-4 text-sm font-semibold" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.4)", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif", textDecoration: "none" }}>
                Want every category? See our Lagree essentials →
              </Link>
              <Link href="/blog/lagree-vs-pilates" className="flex-1 rounded-xl p-4 text-sm font-semibold" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.4)", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif", textDecoration: "none" }}>
                Coming from Pilates? → Lagree vs Pilates
              </Link>
            </div>

            {/* At a glance */}
            <div className="mb-16 overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
              <div className="px-6 py-4" style={{ backgroundColor: "#f6f3f2" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={eyebrowStyle}>At a Glance — Your First Lagree Class</p>
              </div>
              {[
                { label: "What it is", value: "A slow, high-intensity, low-impact workout on a spring-loaded machine called the Megaformer" },
                { label: "How it feels", value: "Slow, burning and shaky — muscles stay under tension with little rest" },
                { label: "Biggest beginner mistake", value: "Speeding up when it burns. Slow down instead" },
                { label: "How often to start", value: "Two or three classes a week, with rest days between" },
                { label: "What to bring", value: `Grip socks, fitted shorts or leggings, towel, water — starter kit from ${fmt(STUDIO_BUDGET_TOTAL)}` },
              ].map((row, i) => (
                <div key={row.label} className="flex items-start gap-3 sm:gap-4 px-6 py-4" style={{ borderTop: i === 0 ? "none" : "1px solid rgba(217,194,186,0.25)", backgroundColor: "#ffffff" }}>
                  <span className="text-base font-semibold w-7 shrink-0 text-center" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs uppercase tracking-[0.12em]" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{row.label}</p>
                    <p className="text-sm font-semibold leading-tight mt-0.5" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{row.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* What is Lagree */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={h2Style}>What is Lagree, in plain English?</h2>
              <p className="text-sm leading-relaxed mb-4" style={bodyStyle}>
                Lagree is a workout method created by Sebastien Lagree and taught on his own machine, the Megaformer. The Megaformer looks a little like a Pilates reformer — there is a sliding carriage, springs for resistance and platforms at each end — but the method is different. Lagree is built around slow, controlled movement and time under tension: instead of doing lots of quick reps, you move the carriage slowly and keep the working muscle loaded for the whole set.
              </p>
              <p className="text-sm leading-relaxed mb-4" style={bodyStyle}>
                The result is a workout that is low-impact (no jumping, no pounding on your joints) but high-intensity. You are working hard the whole time, just not quickly. Sets flow from one to the next with short transitions, so your heart rate tends to stay up even though nothing about it looks like cardio.
              </p>
              <p className="text-sm leading-relaxed" style={bodyStyle}>
                One thing to get straight early: Lagree is not Pilates. Sebastien Lagree was inspired by Pilates, and the machines share some DNA, but the goals, pace and intensity are different. If you are coming from reformer classes, expect less focus on precise breath and alignment work and much more muscular fatigue. Our{" "}
                <Link href="/blog/lagree-vs-pilates" style={inlineLinkStyle}>Lagree vs Pilates guide</Link> goes deeper, and our{" "}
                <Link href="/blog/lagree-fitness" style={inlineLinkStyle}>Lagree Fitness brand guide</Link> covers the company and its machines.
              </p>
            </div>

            {/* What a class feels like */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={h2Style}>What your first class actually feels like</h2>
              <p className="text-sm leading-relaxed mb-6" style={bodyStyle}>
                Nobody tells you this properly, so here it is honestly.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  { heading: "It is slow — deliberately", body: "The instructor will cue you to move more slowly than feels natural. A single lunge can take several seconds each way. It feels almost too easy for the first few reps." },
                  { heading: "Then the burn arrives", body: "Because the muscle never gets a break, fatigue builds quickly. By the end of a set your legs, glutes or core will be burning in a way that is hard to compare to anything else." },
                  { heading: "You will shake", body: "Shaking legs and abs are normal and expected. It is a sign your muscles are working near their limit, not that you are doing it wrong. Everyone shakes, including regulars." },
                  { heading: "It is sweaty", body: "Expect to sweat more than in a reformer Pilates class. Grip socks and a towel on the carriage stop your hands and feet from slipping." },
                ].map((item) => (
                  <div key={item.heading} className="rounded-xl p-5" style={cardStyle}>
                    <p className="text-sm font-semibold mb-1.5" style={h3Style}>{item.heading}</p>
                    <p className="text-sm leading-relaxed" style={bodyStyle}>{item.body}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-4" style={bodyStyle}>
                The coordination can also feel awkward. You will move between positions on the carriage and platforms quickly, and you will not always know which way to face. That is fine — watch the person next to you, and the instructor will help. By your third or fourth class the transitions start to feel familiar.
              </p>
              <p className="text-sm leading-relaxed" style={bodyStyle}>
                Many beginners feel sore for a day or two afterwards, especially in the legs and core. That usually eases as your body adapts. If something feels sharp or painful rather than simply tired, stop and tell the instructor.
              </p>
            </div>

            {/* Studio expectations */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={h2Style}>What to expect at the studio</h2>
              <p className="text-sm leading-relaxed mb-6" style={bodyStyle}>
                Every studio runs slightly differently, but first classes tend to follow the same pattern. Here is how to make yours go smoothly.
              </p>
              <ol className="space-y-4 mb-6">
                {[
                  { heading: "Book a beginner or intro class if there is one", body: "Many studios offer intro or foundations classes that move more slowly and explain the machine. If there is no beginner class, pick a standard class and tell the front desk it is your first time." },
                  { heading: "Arrive early", body: "Aim to arrive well before class starts. You may need to sign a waiver, find the changing area and put on your grip socks, and the instructor may want to show you the machine before the room fills up." },
                  { heading: "Tell the instructor you are new", body: "They will explain how the springs, carriage and handles work, give you a lighter setting and watch your form. Mention any injuries or health conditions at the same time." },
                  { heading: "Expect grip socks to be required", body: "Most studios ask for them on the machine. If you forget, many sell them at the front desk, but it is cheaper to bring your own." },
                  { heading: "Keep up with the flow, not the room", body: "The class moves on a timer. If you need a break, rest in a safe position and rejoin at the next set. Nobody is watching you as closely as you think." },
                  { heading: "Wipe down your machine", body: "Shared machines get sweaty. Most studios expect you to wipe the carriage and handles at the end of class." },
                ].map((step, i) => (
                  <li key={step.heading} className="flex gap-4">
                    <span className="text-base font-semibold w-7 shrink-0 text-center" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <p className="text-sm font-semibold mb-1" style={h3Style}>{step.heading}</p>
                      <p className="text-sm leading-relaxed" style={bodyStyle}>{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="rounded-xl p-5" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.5)" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-2" style={eyebrowStyle}>A quick safety note</p>
                <p className="text-sm leading-relaxed" style={bodyStyle}>
                  Lagree is a high-intensity method. If you have an injury, a medical condition, or are pregnant or postpartum, check with your doctor or physiotherapist before starting, and tell your instructor before class. This guide is general information, not medical advice.
                </p>
              </div>
            </div>

            {/* Mistakes */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={h2Style}>Six common beginner mistakes (and how to fix them)</h2>
              <div className="space-y-4">
                {MISTAKES.map((m, i) => (
                  <div key={m.heading} className="rounded-xl p-6" style={cardStyle}>
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-sm font-semibold" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{String(i + 1).padStart(2, "0")}</span>
                      <h3 className="text-base font-semibold" style={h3Style}>{m.heading}</h3>
                    </div>
                    <p className="text-sm leading-relaxed" style={bodyStyle}>{m.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Frequency */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={h2Style}>How often should a beginner do Lagree?</h2>
              <p className="text-sm leading-relaxed mb-4" style={bodyStyle}>
                A sensible starting point for most beginners is two or three classes a week, with at least one rest day between them. The slow, sustained tension that makes Lagree effective also means your muscles need time to recover, and turning up exhausted makes it much harder to hold good form.
              </p>
              <p className="text-sm leading-relaxed mb-4" style={bodyStyle}>
                After a few weeks, once the post-class soreness is milder and the moves feel familiar, you can add a class if you want to. Regulars often go more frequently, but they have built up to it. Walking, stretching or a gentle mat session on your off days helps you feel less stiff without adding more load.
              </p>
              <p className="text-sm leading-relaxed" style={bodyStyle}>
                Consistency matters more than volume. Two classes a week you can keep up for months will do more for you than five in the first week followed by a fortnight off.
              </p>
            </div>

            {/* Studio kit */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] shrink-0" style={eyebrowStyle}>What to bring to class</p>
                <div className="flex-1 h-px" style={{ backgroundColor: "#d9c2ba" }} />
              </div>
              <h2 className="text-3xl font-semibold mb-4" style={h2Style}>The beginner Lagree kit: five things, nothing more</h2>
              <p className="text-sm leading-relaxed mb-10" style={bodyStyle}>
                You do not need a new wardrobe for Lagree. You need grip, fitted clothing, a towel and water — plus a knee pad if kneeling bothers you. Here is one well-chosen pick for each, with a cheaper option where it makes sense. For every category, including gloves, sports bras and recovery, see our full{" "}
                <Link href="/blog/lagree-essentials" style={inlineLinkStyle}>Lagree essentials list</Link>.
              </p>
              {renderKit(STUDIO_KIT)}
            </div>

            {/* Kit total */}
            <div className="mb-16 rounded-2xl p-6 md:p-8" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.5)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={eyebrowStyle}>What the beginner kit costs</p>
              <h2 className="text-2xl font-semibold mb-3" style={h2Style}>Your first-class kit, added up</h2>
              <p className="text-sm leading-relaxed mb-6" style={bodyStyle}>
                One item from each of the {STUDIO_KIT.length} categories above, using the verified prices on this page. Where a category has no budget option, the budget kit uses the main pick.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: "Our picks", items: STUDIO_PICK_KIT, total: STUDIO_PICK_TOTAL },
                  { label: "On a budget", items: STUDIO_BUDGET_KIT, total: STUDIO_BUDGET_TOTAL },
                ].map((kit) => (
                  <div key={kit.label} className="rounded-xl p-5" style={{ backgroundColor: "#f6f3f2" }}>
                    <p className="text-base font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{kit.label}</p>
                    <ul className="space-y-1.5 mb-4">
                      {kit.items.map((k) => (
                        <li key={k.category} className="flex justify-between gap-3 text-xs" style={bodyStyle}>
                          <span>{k.category}: {k.pick.name}</span>
                          <span className="shrink-0 font-semibold">{k.pick.price}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-between pt-3 text-sm font-semibold" style={{ borderTop: "1px solid #d9c2ba", color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>
                      <span>Total</span>
                      <span>{fmt(kit.total)}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm leading-relaxed mt-6" style={bodyStyle}>
                Almost all the difference between the two kits is the grip socks ($30.00 vs $7.99) and the knee pad ($19.99 vs $14.99). If you skip the knee pad and borrow the studio&apos;s towel, the true minimum is grip socks, shorts and a bottle you probably already own. Buy the budget kit for your first month, then upgrade whatever you actually use.
              </p>
            </div>

            {/* Home kit */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] shrink-0" style={eyebrowStyle}>Between classes</p>
                <div className="flex-1 h-px" style={{ backgroundColor: "#d9c2ba" }} />
              </div>
              <h2 className="text-3xl font-semibold mb-4" style={h2Style}>Lagree-inspired floor work at home</h2>
              <p className="text-sm leading-relaxed mb-4" style={bodyStyle}>
                Let&apos;s be clear first: floor work is not Lagree. There is no Megaformer, no springs and no carriage, and nothing on the floor recreates the way the machine loads your muscles. What you can practise at home is the principle — slow, controlled movement with the muscle under tension for a timed set — which makes your studio classes feel more familiar.
              </p>
              <p className="text-sm leading-relaxed mb-10" style={bodyStyle}>
                Three inexpensive tools get you most of the way: sliders for lunges and planks, an interval timer for timed sets, and light ankle weights. Together, the picks below come to {fmt(HOME_TOTAL)}. For more ideas, read our{" "}
                <Link href="/blog/lagree-at-home" style={inlineLinkStyle}>Lagree at home guide</Link>.
              </p>
              {renderKit(HOME_KIT)}
              <div className="mb-16 rounded-xl p-5" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.5)" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-2" style={eyebrowStyle}>Home floor kit total</p>
                <ul className="space-y-1.5 mb-4">
                  {HOME_PICK_KIT.map((k) => (
                    <li key={k.category} className="flex justify-between gap-3 text-xs" style={bodyStyle}>
                      <span>{k.category}: {k.pick.name}</span>
                      <span className="shrink-0 font-semibold">{k.pick.price}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between pt-3 text-sm font-semibold" style={{ borderTop: "1px solid #d9c2ba", color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>
                  <span>Total</span>
                  <span>{fmt(HOME_TOTAL)}</span>
                </div>
              </div>
            </div>

            {/* The Micro */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] shrink-0" style={eyebrowStyle}>If you&apos;re hooked</p>
                <div className="flex-1 h-px" style={{ backgroundColor: "#d9c2ba" }} />
              </div>
              <h2 className="text-3xl font-semibold mb-4" style={h2Style}>The Micro: real Lagree at home</h2>
              <p className="text-sm leading-relaxed mb-4" style={bodyStyle}>
                If a few months in you are going several times a week and wish you could train at home, Lagree Fitness makes a compact machine for exactly that. The Micro is designed to deliver the Megaformer-style workout in a smaller, lighter, portable machine, and it is sold by Lagree Fitness itself through its Amazon store. It is not a first purchase — learn the method in a studio before you spend this much — but it is the only genuinely Lagree machine a beginner can realistically buy for home. The studio Megaformer is not sold on Amazon; for that, contact{" "}
                <a href="https://www.lagreefitness.com/" target="_blank" rel="noopener noreferrer" style={inlineLinkStyle}>Lagree Fitness directly</a>.
              </p>
              <div className="mb-8 rounded-xl p-5" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.5)" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-2" style={eyebrowStyle}>Limited stock</p>
                <p className="text-sm leading-relaxed" style={bodyStyle}>
                  The Micro was in stock when we checked, but the listing showed low stock. If it is unavailable when you look, buy direct from{" "}
                  <a href="https://www.lagreefitness.com/" target="_blank" rel="noopener noreferrer" style={inlineLinkStyle}>lagreefitness.com</a>.
                </p>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{MICRO.tier}</span>
              </div>
              <ProductCard name={MICRO.name} description={MICRO.description} price={MICRO.price} affiliateUrl={MICRO.url} />

              <h3 className="text-2xl font-semibold mb-3 mt-6" style={h3Style}>Useful add-ons for a beginner</h3>
              <p className="text-sm leading-relaxed mb-8" style={bodyStyle}>
                You can start with the Micro on its own. These two accessories, also sold by Lagree Fitness, make it more versatile and more stable. A pulley cable attachment ($230.00) is available too, but it is not a beginner priority.
              </p>
              <div className="space-y-8 mb-8">
                {MICRO_ADDONS.map((p) => (
                  <div key={p.name}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{p.tier}</span>
                    </div>
                    <ProductCard name={p.name} description={p.description} price={p.price} affiliateUrl={p.url} />
                  </div>
                ))}
              </div>

              <div className="rounded-2xl p-6 md:p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.5)" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={eyebrowStyle}>The maths</p>
                <p className="text-sm leading-relaxed mb-4" style={bodyStyle}>
                  Lagree classes in major US cities commonly cost $35–$45 or more each. At that rate, The Micro on its own ({MICRO.price}) costs about the same as {Math.round(MICRO_PRICE / 45)}–{Math.round(MICRO_PRICE / 35)} classes. With the rear platform and one pair of handlebars, the setup comes to {fmt(MICRO_SETUP_TOTAL)} ($990.00 + $290.00 + $190.00), or roughly {Math.round(MICRO_SETUP_TOTAL / 45)}–{Math.round(MICRO_SETUP_TOTAL / 35)} classes. Adding the pulley cables brings the full setup to $1,700.00.
                </p>
                <p className="text-sm leading-relaxed" style={bodyStyle}>
                  A home machine will not correct your form the way an instructor does, so most people keep a studio class in their week. For the full machine breakdown, see our{" "}
                  <Link href="/blog/lagree-fitness" style={inlineLinkStyle}>Lagree Fitness guide</Link> and{" "}
                  <Link href="/blog/best-megaformer-machine" style={inlineLinkStyle}>best Megaformer machines</Link>.
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={h2Style}>Frequently asked questions</h2>
              <div className="space-y-6">
                {FAQS.map((item) => (
                  <div key={item.q} className="rounded-xl p-6" style={cardStyle}>
                    <h3 className="text-base font-semibold mb-2" style={h3Style}>{item.q}</h3>
                    <p className="text-sm leading-relaxed" style={bodyStyle}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Further reading */}
            <div>
              <h2 className="text-2xl font-semibold mb-8" style={h2Style}>Further reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="Lagree vs Pilates" excerpt="How the two methods really differ — machine, pace, intensity and who each one suits." href="/blog/lagree-vs-pilates" category="Guide" readTime="10 min read" date="September 2026" imageUrl="/pictures/stitch-reformer-row-studio.png" />
                <ArticleCard title="Lagree Essentials" excerpt="Best, budget and splurge picks for every Lagree category, from grip socks to recovery." href="/blog/lagree-essentials" category="Equipment" readTime="12 min read" date="September 2026" imageUrl="/pictures/stitch-grip-socks-footbar.png" />
                <ArticleCard title="Lagree Fitness: The Brand Guide" excerpt="The company behind the Megaformer and The Micro — and what you can actually buy." href="/blog/lagree-fitness" category="Brand" readTime="12 min read" date="September 2026" imageUrl="/pictures/stitch-reformers-aerial-row.png" />
                <ArticleCard title="Best Lagree Grip Socks" excerpt="The grip socks that stay planted on the carriage through a sweaty Lagree class." href="/blog/best-lagree-grip-socks" category="Equipment" readTime="8 min read" date="September 2026" imageUrl="/pictures/stitch-water-towel-bench.png" />
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
