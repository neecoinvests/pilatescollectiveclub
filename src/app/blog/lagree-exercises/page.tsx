import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

const PAGE_URL = "https://pilatescollectiveclub.com/blog/lagree-exercises";
const HERO_IMAGE = "https://pilatescollectiveclub.com/pictures/stitch-hands-on-carriage.png";
const TITLE = "Lagree Exercises (2026): Signature Moves Explained";
const DESCRIPTION =
  "Lagree exercises explained: Wheelbarrow, Catfish, Bear, Super Lunge, Scrambled Eggs and more — the cues that matter, plus a Lagree-inspired home workout.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: "The Lagree move names you hear in class, what they work and the form cues that matter — plus a 20-minute Lagree-inspired floor workout and the kit for it.",
    type: "article",
    url: PAGE_URL,
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: "Hands on a machine carriage — Lagree exercises explained" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lagree Exercises: Signature Moves Explained",
    description: "Wheelbarrow, Catfish, Bear, Super Lunge and more — plus a Lagree-inspired home workout.",
    images: [HERO_IMAGE],
  },
  keywords: [
    "lagree exercises",
    "lagree moves",
    "lagree wheelbarrow",
    "lagree catfish",
    "lagree bear exercise",
    "lagree super lunge",
    "lagree scrambled eggs",
    "megaformer exercises",
    "lagree workout at home",
    "lagree exercise names",
    "lagree glossary",
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

const FLOOR_KIT: Pick[] = [
  {
    id: "gaiam-sliders",
    badge: "Best Sliders",
    shortName: "Core sliders",
    name: "Gaiam Core Sliding Discs (Set of 2)",
    price: "$17.79",
    url: amz("B0964G1N18"),
    description:
      "Sliders are the closest thing to a carriage you can put on a floor: your hand or foot glides out under control and you have to pull it back. That is why every move in the home workout below uses them. These are dual-sided for carpet and hard floors, light enough to take to class, and sold by Amazon.com.",
  },
  {
    id: "azurelife-sliders",
    badge: "Budget Sliders",
    shortName: "Budget sliders",
    name: "A AZURELIFE Exercise Core Sliders",
    price: "$8.99",
    url: amz("B07M96HMDJ"),
    description:
      "A 7-inch, dual-sided pair at half the price: a smooth plastic side for carpet and a foam side for hard floors, wood or tile. One honest note from the listing itself: used plastic-side down, the slider can scratch and scratch your floor, so use the foam side on hardwood.",
  },
  {
    id: "fit-simplify",
    badge: "Best Bands",
    shortName: "Loop bands",
    name: "Fit Simplify Resistance Loop Bands (Set of 5)",
    price: "$9.98",
    url: amz("B01AVDVHTI"),
    description:
      "Springs make Lagree's resistance; at home, loop bands do the job. Five 12\" x 2\" loops in five resistance levels let you go heavier as you get stronger, with an instruction guide and a carry bag. Around the thighs, they turn bridges and slow squats into something close to class intensity.",
  },
  {
    id: "bala-bangles",
    badge: "Best Wearable Weights",
    shortName: "Wrist & ankle weights",
    name: "Bala Bangles Wrist & Ankle Weights (1 lb, pair)",
    price: "$55.00",
    url: amz("B0BQCJRL6Q"),
    description:
      "Two 1 lb bangles with a steel core and silicone wrap, adjustable by repositioning the weighted bars. In a slow Lagree-style tempo, 1 lb on each ankle is plenty for leg lifts and on each wrist for long planks. This is the premium pick; the brand also sells heavier sets.",
  },
  {
    id: "gaiam-mat",
    badge: "Best Mat",
    shortName: "Thick mat",
    name: "Gaiam Essentials Thick Yoga Mat (10mm)",
    price: "$25.12",
    url: amz("B07H9PZDQW"),
    description:
      "10mm high-density NBR foam that the listing says reduces pressure on knees, plus an easy-cinch carry strap. Lagree-style floor work spends a lot of time on knees and forearms, where a thin mat hurts. Use sliders on the floor beside the mat rather than on it; foam is too grippy for gliding. Sold by Amazon.com.",
  },
  {
    id: "impulse-knee",
    badge: "Best Knee Cushion",
    shortName: "Knee pad",
    name: "Impulse Yoga Knee Pad Cushion (1\")",
    price: "$19.99",
    url: amz("B06WV6XVV9"),
    description:
      "One inch of foam for kneeling planks, saws and crunches, which is far more than a mat gives you. Slip it under your knees or forearms for the plank-family moves in the workout below.",
  },
  {
    id: "gymboss",
    badge: "Best Timer",
    shortName: "Interval timer",
    name: "Gymboss Interval Timer",
    price: "$20.95",
    url: amz("B00CO8HO6O"),
    description:
      "Lagree is timed, not counted. This pager-sized timer runs one or two intervals from 2 seconds to 99 minutes and repeats up to 99 rounds, with a chime and vibration alert. Set 60 seconds of work and 10 seconds of transition, clip it on and stop checking your phone.",
  },
];

const MICRO_SETUP: Pick[] = [
  {
    id: "the-micro",
    badge: "The Real Machine",
    shortName: "Home machine",
    name: "The Micro by Lagree Fitness",
    price: "$990.00",
    url: amz("B0BBT7YV93"),
    description:
      "If you want the real moves rather than floor versions, this is Lagree Fitness's own compact machine, sold by the brand on Amazon. The listing describes low-impact, high-intensity strength and cardio in a compact, lightweight machine that fits users up to 6'8\" and stores under a bed, against a wall or on a bike rack.",
  },
  {
    id: "rear-platform",
    badge: "Unlocks More Moves",
    shortName: "Rear platform",
    name: "Lagree Fitness Micro Rear Platform",
    price: "$290.00",
    url: amz("B0BKN2LSWD"),
    description:
      "The add-on that matters most for exercise variety. Lagree Fitness lists the express lunge, 5th lunge, super crunch and giant wheelbarrow among the moves it adds. It measures 10.5\" L x 8.5\" W x 6\" H and makes the Micro 81.5\" long. Sold by Lagree Fitness.",
  },
];

const ALL_ITEMS: Pick[] = [...FLOOR_KIT, ...MICRO_SETUP];

const toNumber = (price: string) => {
  const n = parseFloat(price.replace(/[^0-9.]/g, ""));
  return Number.isNaN(n) ? 0 : n;
};
const fmt = (n: number) => `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const FLOOR_TOTAL = FLOOR_KIT.reduce((sum, p) => sum + toNumber(p.price), 0); // 17.79 + 8.99 + 9.98 + 55 + 25.12 + 19.99 + 20.95 = 157.82
const ESSENTIAL_FLOOR = [FLOOR_KIT[0], FLOOR_KIT[2], FLOOR_KIT[4], FLOOR_KIT[6]];
const ESSENTIAL_TOTAL = ESSENTIAL_FLOOR.reduce((sum, p) => sum + toNumber(p.price), 0); // 17.79 + 9.98 + 25.12 + 20.95 = 73.84
const MICRO_TOTAL = MICRO_SETUP.reduce((sum, p) => sum + toNumber(p.price), 0); // 990 + 290 = 1,280

type Move = { name: string; family: string; what: string; cues: string[] };

const MOVES: Move[] = [
  {
    name: "Wheelbarrow",
    family: "Core",
    what: "The move Sebastien Lagree calls the most important core exercise, and the one that inspired his machines. It belongs to the plank family, and the work comes from holding a long, strong body while the carriage moves.",
    cues: ["Keep the body long; letting the hips drift up or sag takes the load off your core.", "Control the carriage on the way back. Resisting the springs is half the work."],
  },
  {
    name: "Catfish",
    family: "Core / full body",
    what: "Part of the Wheelbarrow series of pressing moves. You push against heavy spring tension from a straight-arm plank, and it works the whole body, though the burn should land in your abs.",
    cues: ["Hips in line with shoulders; do not let them drop.", "Shoulders stay behind the wrists and pressed down; arms straight and strong.", "Heavy springs, slow tempo. Too light and it turns into an arm exercise."],
  },
  {
    name: "Icebreaker",
    family: "Core (modification)",
    what: "The knees-down version of Catfish. Instructors offer it when your form slips, and it is also a progression toward the full move.",
    cues: ["Same shoulder position as Catfish.", "Knees down is not cheating; it is how you keep the tension in your abs."],
  },
  {
    name: "Bear",
    family: "Core",
    what: "You are on hands and toes and move between a plank and a tabletop by bending your knees. The hips stay still, which isolates the deep core.",
    cues: ["Hips do not rise or sway; only the knees bend.", "Hover the knees. Do not rest them."],
  },
  {
    name: "Kneeling Saw & Crunch",
    family: "Core / upper body",
    what: "A forearm-based kneeling move that combines a saw (moving forward and back from the shoulders) with a crunch.",
    cues: ["Press into your forearms to switch on your lats.", "Crunch with shoulders stacked over elbows.", "Do not shift your weight back into your knees."],
  },
  {
    name: "Super Lunge",
    family: "Legs & glutes",
    what: "One of Lagree's signature leg moves. Like the other lunges and squats on the machine, it is a split stance between the fixed platform and the moving carriage, so the working leg has to control the carriage the whole time.",
    cues: ["Slow out, slow in: around four counts each way.", "Chest up; drive through the front heel.", "Shaking is expected. Stopping is optional."],
  },
  {
    name: "Scrambled Eggs",
    family: "Obliques",
    what: "A move from Lagree's oblique family, often named alongside Super Lunge and Catfish as one of the method's most recognisable exercises.",
    cues: ["Keep the movement slow and small rather than swinging.", "If your lower back takes over, reduce the range."],
  },
  {
    name: "Mermaid",
    family: "Obliques",
    what: "Another oblique exercise, and the one reviewers most often describe as looking graceful and feeling brutal.",
    cues: ["Length through the side body before you move.", "Control the carriage on the way back; that is where the work is."],
  },
];

const PLATFORM_MOVES = ["Express Lunge", "5th Lunge", "Super Crunch", "Giant Wheelbarrow"];

const HOME_CIRCUIT = [
  { move: "Slider reverse lunge (right)", note: "Front foot planted, back foot on a slider. Slide back for four counts, return for four. Echoes the platform-and-carriage split of a Lagree lunge." },
  { move: "Slider reverse lunge (left)", note: "Same tempo. Add Bala Bangles on the ankles once 60 seconds feels easy." },
  { move: "Slider plank knee tuck", note: "Hands on the floor, feet on sliders. Tuck the knees slowly with hips level: the Bear idea, on the floor." },
  { move: "Slider pike", note: "From the same plank, lift the hips to a pike over four counts and lower over four." },
  { move: "Forearm plank saw", note: "Forearms on the knee pad, feet on sliders. Rock forward and back from the shoulders, like the Kneeling Saw." },
  { move: "Banded slow squat", note: "Loop band above the knees. Four counts down, four up, never locking out at the top." },
  { move: "Banded glute bridge", note: "Band above the knees, push the knees out the whole time. Pause at the top." },
  { move: "Side plank with slider reach", note: "Top foot on a slider; reach it forward and back slowly. Switch sides at the halfway beep." },
];

const FAQS = [
  {
    q: "What are the main Lagree exercises?",
    a: "Lagree combines familiar strength moves such as planks, lunges, squats and push-ups with its own signature exercises. The names you will hear most are the Wheelbarrow, Catfish, Bear, Super Lunge, Scrambled Eggs, the Kneeling Saw & Crunch and the Mermaid. Lagree Fitness also names the Express Lunge, 5th Lunge, Super Crunch and Giant Wheelbarrow among the moves its Micro rear platform adds.",
  },
  {
    q: "Why are Lagree exercises done so slowly?",
    a: "To keep muscles under tension. A common cue is about four counts to move the carriage out and four to bring it back, with no rest between exercises. Moving slowly removes momentum, so the muscle does all the work and fatigues faster. Speeding up makes a Lagree move easier, which is why instructors keep telling you to slow down.",
  },
  {
    q: "What is the Wheelbarrow in Lagree?",
    a: "A plank-family core exercise that Sebastien Lagree has described as the most important core move, and the one that inspired his equipment. Catfish belongs to the same series of pressing moves, and the Icebreaker is its knees-down modification.",
  },
  {
    q: "Can I do Lagree exercises at home without a machine?",
    a: `Not the real ones; they rely on the machine's carriage, platforms and springs. You can get close to the feel with sliders, loop bands and a slow tempo. The 20-minute floor circuit on this page uses kit costing ${fmt(ESSENTIAL_TOTAL)} for the essentials. For the genuine moves, Lagree Fitness sells The Micro (${MICRO_SETUP[0].price}) on Amazon.`,
  },
  {
    q: "Which Lagree moves need the Micro rear platform?",
    a: `Lagree Fitness lists the Express Lunge, 5th Lunge, Super Crunch and Giant Wheelbarrow among the exercises the rear platform adds. The platform costs ${MICRO_SETUP[1].price}, so the Micro plus platform comes to ${fmt(MICRO_TOTAL)} at the prices we verified.`,
  },
  {
    q: "How heavy should the springs be for Lagree exercises?",
    a: "It depends on the move, and your instructor will cue it. Pressing moves such as Catfish are generally done with a heavy spring load, so the tension lands in the abs rather than the arms. Heavier is not always harder, though. On some moves a lighter load makes the carriage less stable and the exercise harder to control.",
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
      "name": "Kit for Lagree-Style Exercises at Home (2026)",
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
        { "@type": "ListItem", "position": 3, "name": "Lagree Exercises", "item": PAGE_URL },
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

export default function LagreeExercisesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={eyebrowStyle}>Method Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Lagree</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Lagree Exercises<br /><span style={{ color: "#8b4a31" }}>(2026): The Signature Moves, Explained</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated October 2026 · 12 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Product links on this page go to Amazon, and we earn a small commission on qualifying purchases at no extra cost to you. This guide is educational and does not replace instruction from a certified Lagree instructor.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              &ldquo;Next: Catfish. Then Bear. Slower.&rdquo; If you have just started Lagree, half the class can feel like a foreign language. This guide translates the move names you will hear most and explains what each one works. It also gives the form cues that separate a move that burns from one that just hurts. At the end is a 20-minute Lagree-inspired floor workout for the days you cannot get to the studio, plus the kit for it.
            </p>
            <p className="text-sm leading-relaxed" style={bodyStyle}>
              Every product on this page was checked live on Amazon on October 3, 2026, at the price shown. Prices change, so the final price is whatever Amazon shows at checkout.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-hands-on-carriage.png" alt="Hands braced on a machine carriage — Lagree exercises explained" fill className="object-cover" style={{ filter: "brightness(0.85)" }} priority />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-10 mt-4 flex flex-col sm:flex-row gap-3">
              <Link href="/blog/lagree-for-beginners" className="flex-1 rounded-xl p-4 text-sm font-semibold" style={hubStyle}>
                First class coming up? → Lagree for beginners
              </Link>
              <Link href="/blog/lagree-fitness" className="flex-1 rounded-xl p-4 text-sm font-semibold" style={hubStyle}>
                Want the real machine at home? → The Micro
              </Link>
            </div>

            {/* Rules */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={h2Style}>The three rules behind every Lagree move</h2>
              <p className="text-sm leading-relaxed mb-6" style={bodyStyle}>
                The exercise library is huge; studios often say the Megaformer allows hundreds of variations. You do not need to memorise them. Every move follows the same three rules, and once you understand those, any new name makes sense.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { heading: "1. Slow tempo", body: "Around four counts to move the carriage out and four to bring it back. Slow removes momentum, so the muscle does all the work." },
                  { heading: "2. No rest", body: "Moves flow into each other with time under tension the whole way. Your muscles are meant to reach fatigue, and that is where the shakes come from." },
                  { heading: "3. Carriage vs platform", body: "Most moves put one part of you on a fixed platform and another on the moving carriage. Controlling that gap is the workout." },
                ].map((item) => (
                  <div key={item.heading} className="rounded-xl p-5" style={cardStyle}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.heading}</p>
                    <p className="text-sm leading-relaxed" style={bodyStyle}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Moves */}
            <Divider label="The move glossary" />
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-4" style={h2Style}>Lagree exercise names, decoded</h2>
              <p className="text-sm leading-relaxed mb-8" style={bodyStyle}>
                These are the names you will hear most in class. Studios program their own sequences, so the exact setup and spring load can vary. Your instructor&apos;s cue always wins over a description on a website.
              </p>
              <div className="space-y-6">
                {MOVES.map((m) => (
                  <div key={m.name} className="rounded-2xl p-6" style={cardStyle}>
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <h3 className="text-xl font-semibold" style={h2Style}>{m.name}</h3>
                      <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={chipStyle}>{m.family}</span>
                    </div>
                    <p className="text-sm leading-relaxed mb-3" style={bodyStyle}>{m.what}</p>
                    <ul className="space-y-1.5">
                      {m.cues.map((c) => (
                        <li key={c} className="text-sm leading-relaxed flex gap-2" style={bodyStyle}>
                          <span style={{ color: "#8b4a31" }}>›</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl p-6 md:p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.5)" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={eyebrowStyle}>Platform moves</p>
                <p className="text-sm leading-relaxed mb-3" style={bodyStyle}>
                  Some moves need a platform at each end of the machine. Lagree Fitness names these among the exercises its Micro rear platform adds:
                </p>
                <div className="flex flex-wrap gap-2">
                  {PLATFORM_MOVES.map((m) => (
                    <span key={m} className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ backgroundColor: "#ffffff", color: "#1b1c1c", border: "1px solid rgba(217,194,186,0.5)", fontFamily: "'Montserrat', sans-serif" }}>{m}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={h2Style}>Five form mistakes almost everyone makes</h2>
              <ul className="space-y-4">
                {[
                  { h: "Going fast when it burns.", b: "Speed feels like escape, but it shifts the work onto momentum. Slow down instead." },
                  { h: "Letting the hips sag in planks.", b: "In Catfish and Wheelbarrow, hips in line with shoulders is the whole exercise." },
                  { h: "Shoulders creeping past the wrists.", b: "Keep them behind the wrist line and pressed down into your lats." },
                  { h: "Resting at the end of the range.", b: "Lagree has no lockout pause. Turn around before the joint takes the load." },
                  { h: "Choosing springs to look strong.", b: "Pick the load that lets you hold the tempo. Your instructor will adjust it." },
                ].map((item) => (
                  <li key={item.h} className="text-sm leading-relaxed" style={bodyStyle}>
                    <span className="font-semibold" style={{ color: "#1b1c1c" }}>{item.h}</span> {item.b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Home circuit */}
            <Divider label="No machine? Try this" />
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-4" style={h2Style}>A 20-minute Lagree-inspired floor workout</h2>
              <p className="text-sm leading-relaxed mb-6" style={bodyStyle}>
                To be clear, this is not Lagree. Real Lagree needs a carriage, platforms and springs. But sliders, bands and the same slow tempo get you surprisingly close to the feel. Set an interval timer for <span className="font-semibold" style={{ color: "#1b1c1c" }}>60 seconds of work and 10 seconds of transition</span>, run the eight moves below and repeat the circuit twice. That is about 19 minutes. Move at four counts out and four counts in throughout.
              </p>
              <div className="overflow-hidden mb-6" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
                {HOME_CIRCUIT.map((s, i) => (
                  <div key={s.move} className="flex gap-4 px-6 py-4" style={{ borderTop: i === 0 ? "none" : "1px solid rgba(217,194,186,0.25)", backgroundColor: "#ffffff" }}>
                    <span className="text-base font-semibold w-7 shrink-0 text-center" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{s.move}</p>
                      <p className="text-xs mt-0.5 leading-relaxed" style={bodyStyle}>{s.note}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm leading-relaxed" style={bodyStyle}>
                Keep it safe: warm up first, stop if anything hurts (rather than burns), and if you are pregnant, injured or new to exercise, check with a professional first. For more on structuring home sessions, see{" "}
                <Link href="/blog/lagree-at-home" style={inlineLinkStyle}>Lagree at home</Link>.
              </p>
            </div>

            {/* Kit */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-4" style={h2Style}>The kit for the home workout</h2>
              <p className="text-sm leading-relaxed mb-8" style={bodyStyle}>
                Everything the circuit above uses. The four essentials are sliders, bands, a mat and a timer; the bangles, knee pad and budget sliders are upgrades or alternatives.
              </p>

              <div className="mb-10 overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
                <div className="px-6 py-4" style={{ backgroundColor: "#f6f3f2" }}>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={eyebrowStyle}>At a Glance — Home Lagree-Style Kit</p>
                </div>
                {FLOOR_KIT.map((p, i) => (
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
                  <span>Essentials only (sliders, bands, mat, timer)</span>
                  <span>{fmt(ESSENTIAL_TOTAL)}</span>
                </div>
                <div className="px-6 py-4 flex justify-between gap-3 text-sm font-semibold" style={{ borderTop: "1px solid rgba(217,194,186,0.25)", backgroundColor: "#f6f3f2", color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>
                  <span>Everything on the list</span>
                  <span>{fmt(FLOOR_TOTAL)}</span>
                </div>
              </div>

              <div className="space-y-8">
                {FLOOR_KIT.map((p) => (
                  <TierCard key={p.id} p={p} />
                ))}
              </div>
              <p className="text-sm leading-relaxed mt-2" style={bodyStyle}>
                More choice: <Link href="/blog/best-exercise-sliders-for-pilates" style={inlineLinkStyle}>best exercise sliders</Link>,{" "}
                <Link href="/blog/best-pilates-ankle-weights" style={inlineLinkStyle}>best ankle weights</Link> and{" "}
                <Link href="/blog/best-interval-timer-for-lagree" style={inlineLinkStyle}>best interval timers for Lagree</Link>.
              </p>
            </div>

            {/* Real machine */}
            <Divider label="The real thing" />
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-4" style={h2Style}>Want the real moves at home?</h2>
              <p className="text-sm leading-relaxed mb-8" style={bodyStyle}>
                Floor versions are a bridge, not a replacement. If you want to do the actual exercises in this glossary, Lagree Fitness sells its own compact machine, and the platform that unlocks the lunge and crunch variations, on Amazon. Together they come to {fmt(MICRO_TOTAL)} ({MICRO_SETUP[0].price} + {MICRO_SETUP[1].price}).
              </p>
              <div className="space-y-8">
                {MICRO_SETUP.map((p) => (
                  <TierCard key={p.id} p={p} />
                ))}
              </div>
              <p className="text-sm leading-relaxed mt-2" style={bodyStyle}>
                Handlebars, pulley cables and the full setup cost compared with a class pack are in our{" "}
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
                <ArticleCard title="Lagree for Beginners" excerpt="What to expect in your first class, what to wear, and how to survive the shakes." href="/blog/lagree-for-beginners" category="Lagree" readTime="10 min read" date="September 2026" imageUrl="/pictures/stitch-studio-modern-row.png" />
                <ArticleCard title="Lagree at Home" excerpt="How to train the Lagree way at home, from the Micro to floor work between classes." href="/blog/lagree-at-home" category="Lagree" readTime="9 min read" date="September 2026" imageUrl="/pictures/stitch-hands-on-carriage.png" />
                <ArticleCard title="Lagree vs Solidcore" excerpt="Two slow-burn workouts that look alike. What actually differs, and which to book." href="/blog/lagree-vs-solidcore" category="Comparison" readTime="10 min read" date="October 2026" imageUrl="/pictures/stitch-reformer-row-studio.png" />
                <ArticleCard title="Sore After Lagree?" excerpt="Why Lagree soreness happens, how long it lasts, and the recovery gear worth buying." href="/blog/lagree-recovery" category="Lagree" readTime="11 min read" date="October 2026" imageUrl="/pictures/stitch-studio-bench-towels.png" />
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
