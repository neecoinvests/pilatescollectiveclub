import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import { jsonLdHtml } from "@/lib/schema";

const PAGE_URL = "https://pilatescollectiveclub.com/blog/what-to-wear-to-lagree";
const HERO_IMAGE = "https://pilatescollectiveclub.com/pictures/stitch-grip-socks-footbar.png";
const TITLE = "What to Wear to Lagree (2026): 3 Complete Outfits";
const DESCRIPTION =
  "What to wear to Lagree, head to toe: the rules for the Megaformer, three complete outfits (about $63, $122 and $294), what to bring and what to leave at home.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: "Head-to-toe Lagree outfits at three budgets, what to bring to class, and what not to wear on a Megaformer. Prices checked live on Amazon.",
    type: "article",
    url: PAGE_URL,
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: "Grip socks on a machine footbar — what to wear to Lagree" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "What to Wear to Lagree (2026): 3 Outfits",
    description: "Three complete Lagree outfits at three budgets, plus what to bring and what to skip.",
    images: [HERO_IMAGE],
  },
  keywords: [
    "what to wear to lagree",
    "lagree outfit",
    "what to wear to lagree class",
    "lagree class outfit",
    "what to wear to megaformer class",
    "lagree dress code",
    "do you need grip socks for lagree",
    "can you wear shorts to lagree",
    "what to bring to lagree",
    "first lagree class what to wear",
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=pilatescollective-20`;

type Item = {
  id: string;
  role: string;
  name: string;
  price: string;
  url: string;
  description: string;
  guide: { label: string; href: string };
};

const toNumber = (price: string) => {
  const n = parseFloat(price.replace(/[^0-9.]/g, ""));
  return Number.isNaN(n) ? 0 : n;
};
const fmt = (n: number) => `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const OUTFITS: { id: string; title: string; who: string; items: Item[] }[] = [
  {
    id: "budget",
    title: "The budget outfit",
    who: "Your first few classes, or a second set for the laundry week.",
    items: [
      { id: "heynuts", role: "Leggings", name: "HeyNuts Pure&Plain Workout Pro 1.0 Leggings 25\"", price: "$19.99", url: amz("B0CTCFMDMJ"), description: "A 25-inch full-length legging at under $20. Full length covers your knees for kneeling work on the carriage.", guide: { label: "Best leggings for Lagree", href: "/blog/best-leggings-for-lagree" } },
      { id: "crz-crop-tank", role: "Top", name: "CRZ YOGA Quick Dry Racerback Crop Tank", price: "$20.00", url: amz("B0H1HK895W"), description: "A quick-dry racerback crop tank. Cropped tops have no hem to slide up or fall over your face in plank and bear.", guide: { label: "Best Lagree tops", href: "/blog/best-lagree-tops" } },
      { id: "oalka", role: "Sports bra", name: "Oalka Longline Padded Sports Bra", price: "$14.99", url: amz("B08JTQ4JHP"), description: "A padded longline crop that doubles as a top on hot days. Lagree is low-impact, so you do not need a high-impact bra unless you prefer one.", guide: { label: "Best sports bra for Lagree", href: "/blog/best-sports-bra-for-lagree" } },
      { id: "muezna-6", role: "Grip socks", name: "Muezna Pilates Grip Socks (6 Pairs)", price: "$7.99", url: amz("B0DQ53GSP5"), description: "Six pairs of grip socks for under $8 — enough for a week of classes without doing laundry. Most studios require grip socks on the machine.", guide: { label: "Lagree socks", href: "/blog/best-lagree-grip-socks" } },
    ],
  },
  {
    id: "best-value",
    title: "The best-value outfit",
    who: "Regulars who want buttery-soft pieces that last.",
    items: [
      { id: "crz-leggings", role: "Leggings", name: "CRZ YOGA Butterluxe Leggings 25\"", price: "$32.00", url: amz("B09P1G2952"), description: "Butterluxe is CRZ YOGA's softest, stretchiest fabric — the closest Amazon equivalent to the buttery studio leggings everyone wears.", guide: { label: "Best leggings for Lagree", href: "/blog/best-leggings-for-lagree" } },
      { id: "crz-tank", role: "Top", name: "CRZ YOGA Butterluxe Racerback Tank", price: "$32.00", url: amz("B09X9Y5S8G"), description: "A fitted racerback tank in the same Butterluxe fabric, so it matches the leggings. Fitted means it stays put upside down.", guide: { label: "Best Lagree tops", href: "/blog/best-lagree-tops" } },
      { id: "crz-bra", role: "Sports bra", name: "CRZ YOGA Butterluxe U Back Sports Bra", price: "$28.00", url: amz("B09ZP9VXLJ"), description: "A Butterluxe U-back bra for low-impact training — comfortable for an hour of slow, intense work.", guide: { label: "Best sports bra for Lagree", href: "/blog/best-sports-bra-for-lagree" } },
      { id: "toesox", role: "Grip socks", name: "toesox Low Rise Grip Socks (Full Toe, 2-Pack)", price: "$30.00", url: amz("B07QHNDHW3"), description: "Full-toe grip socks with a patented non-slip sole. Separate toes help you spread your foot on the platform for lunges.", guide: { label: "Lagree socks", href: "/blog/best-lagree-grip-socks" } },
    ],
  },
  {
    id: "premium",
    title: "The premium outfit",
    who: "The boutique-studio look, head to toe.",
    items: [
      { id: "varley-leggings", role: "Leggings", name: "Varley Freesoft Piped Full Leggings", price: "$98.00", url: amz("B0FXN378H8"), description: "Varley's soft Freesoft fabric with contrast piping, sold by Shopbop (an Amazon company).", guide: { label: "Best leggings for Lagree", href: "/blog/best-leggings-for-lagree" } },
      { id: "varley-tank", role: "Top", name: "Varley Marla Button Placket Tank", price: "$89.60", url: amz("B0FP3MWK1Z"), description: "A fitted tank with a button placket — the studio-to-coffee piece. Sold by Shopbop.", guide: { label: "Best Lagree tops", href: "/blog/best-lagree-tops" } },
      { id: "varley-bra", role: "Sports bra", name: "Varley Freesoft Harley Bralette", price: "$66.00", url: amz("B0FXN42JWR"), description: "A Freesoft bralette that matches the leggings. Light support suits Lagree's low-impact movement. Sold by Shopbop.", guide: { label: "Best sports bra for Lagree", href: "/blog/best-sports-bra-for-lagree" } },
      { id: "tavi-stacy", role: "Grip socks", name: "TAVI Stacy Slouch Pilates Socks (2-Pack)", price: "$40.00", url: amz("B0GFPGMWWS"), description: "Slouchy, closed-toe grip socks from TAVI, a studio favourite. Two pairs per pack.", guide: { label: "Lagree socks", href: "/blog/best-lagree-grip-socks" } },
    ],
  },
];

const BRING: Item[] = [
  { id: "rainleaf", role: "Sweat towel", name: "Rainleaf Microfiber Towel (Quick Dry, Compact)", price: "$12.99", url: amz("B01K1TX77W"), description: "A compact, quick-dry microfiber towel. You will sweat onto the carriage and platform; wipe yourself and the machine between moves.", guide: { label: "Best sweat towel for Lagree", href: "/blog/best-sweat-towel-for-lagree" } },
  { id: "gaiam-gloves", role: "Grip gloves (optional)", name: "Gaiam Grippy Yoga Gloves", price: "$7.65", url: amz("B001VROVEM"), description: "Optional. Grippy gloves help if sweaty hands slip on the handles or platform in plank.", guide: { label: "Lagree gloves", href: "/blog/best-lagree-gloves" } },
  { id: "crz-jacket", role: "Layer", name: "CRZ YOGA Butterluxe Jacket (Waist Length)", price: "$48.00", url: amz("B0BJ2G3JNW"), description: "A slim zip layer with thumbholes for the cold studio before class and the walk home after.", guide: { label: "Lagree jacket", href: "/blog/best-lagree-jacket" } },
  { id: "bagsmart", role: "Bag", name: "BAGSMART Gym Bag (Shoe Compartment)", price: "$28.49", url: amz("B0DMS9Q287"), description: "A lightweight duffel with a shoe compartment — your sneakers go in there while you train in grip socks.", guide: { label: "Lagree bag", href: "/blog/best-lagree-bag" } },
];

const SUMMER_SWAP: Item = { id: "crz-biker", role: "Summer swap", name: "CRZ YOGA Butterluxe Biker Shorts 6\"", price: "$24.00", url: amz("B0B28B34XX"), description: "Swap leggings for fitted 6-inch biker shorts in summer. Fitted, not loose: loose running shorts ride up and gape in bear and wheelbarrow.", guide: { label: "Lagree shorts", href: "/blog/best-lagree-shorts" } };

const ALL_ITEMS: Item[] = [...OUTFITS.flatMap((o) => o.items), SUMMER_SWAP, ...BRING];
const outfitTotal = (items: Item[]) => items.reduce((sum, it) => sum + toNumber(it.price), 0);

const RULES = [
  { h: "Fitted everything.", b: "You will be in plank, bear, wheelbarrow and on all fours on a moving carriage. Loose tops slide up and loose shorts gape. Fitted clothes stay put and won't catch on springs." },
  { h: "Grip socks, no shoes.", b: "Lagree is done in socks on the machine, and most studios require grip socks for safety. Check your studio's policy; many sell them at the desk." },
  { h: "Wicking, not cotton.", b: "Lagree is slow but intense, and you will sweat a lot. Moisture-wicking fabric stays lighter and dries faster than cotton." },
  { h: "Squat-proof leggings.", b: "Lunges and deep squats stretch the fabric. If your leggings go sheer in a squat in the mirror at home, they will in class." },
  { h: "Nothing that snags.", b: "Skip zips, buckles and dangling jewellery on the machine. They scratch the upholstery, catch on springs and get in the way." },
];

const FAQS = [
  { q: "What should I wear to my first Lagree class?", a: "Fitted leggings or biker shorts, a fitted tank or crop top, a supportive sports bra and grip socks. Bring a water bottle and a small towel. You won't wear shoes on the machine, so bring a bag to store them in." },
  { q: "Do you need grip socks for Lagree?", a: "Most Lagree studios require them, and you should wear them anyway: the carriage moves and the platforms get sweaty. Check your studio's policy before your first class. Many studios sell grip socks at the front desk if you forget." },
  { q: "Can you wear shorts to Lagree?", a: "Yes, as long as they are fitted biker shorts. Loose running shorts ride up and gape in bear, wheelbarrow and lunges. A 6-inch inseam is a good middle ground." },
  { q: "Can you wear a loose t-shirt to Lagree?", a: "It will annoy you. Loose tees slide up your back on all fours and fall over your face in plank. A fitted tee, crop top or tank stays put." },
  { q: "Do I need gloves for Lagree?", a: "No. Some people use grippy gloves if their hands sweat and slip on the handles or platform, but most classes are done bare-handed." },
  { q: "What should I bring to Lagree class?", a: "Grip socks, a water bottle, a small sweat towel, a layer for after class and a bag for your shoes and phone. A change of top is a good idea if you are going somewhere afterwards." },
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
      "name": "What to Wear to Lagree: Outfit Pieces (2026)",
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
        { "@type": "ListItem", "position": 3, "name": "What to Wear to Lagree", "item": PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
  ],
};

const eyebrowStyle = { color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" };
const bodyStyle = { color: "#53433e", fontFamily: "'Montserrat', sans-serif" };
const h2Style = { color: "#1b1c1c", fontFamily: "'Playfair Display', serif" };
const inlineLinkStyle = { color: "#8b4a31", textDecoration: "underline" };
const chipStyle = { backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" };
const cardStyle = { backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" };
const strongStyle = { color: "#1b1c1c" };

function ItemCard({ it }: { it: Item }) {
  return (
    <div id={it.id} className="scroll-mt-28">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={chipStyle}>{it.role}</span>
        <Link href={it.guide.href} className="text-xs" style={inlineLinkStyle}>More options: {it.guide.label} →</Link>
      </div>
      <ProductCard name={it.name} description={it.description} price={it.price} affiliateUrl={it.url} />
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

export default function WhatToWearToLagreePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={eyebrowStyle}>Lagree Clothing</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Outfit Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              What to Wear to Lagree<br /><span style={{ color: "#8b4a31" }}>(2026): 3 Complete Outfits</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated October 2026 · 10 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Product links go to Amazon, where we earn a small commission on qualifying purchases at no extra cost to you. Our picks are based on published specifications and how Lagree is taught, not a hands-on test.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Lagree looks gentle from the doorway — slow moves on a sliding machine — and then you&apos;re shaking in a plank on the Megaformer, drenched, with your top sliding up to your armpits. What you wear matters more than in most classes. Here are the five rules, three complete head-to-toe outfits at three budgets, what to bring, and what to leave at home.
            </p>
            <p className="text-sm leading-relaxed" style={bodyStyle}>
              Every Amazon price and stock status was checked live on October 4, 2026. Prices change, so the final price is whatever Amazon shows at checkout.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-grip-socks-footbar.png" alt="Grip socks on a machine — what to wear to Lagree" fill className="object-cover" style={{ filter: "brightness(0.85)" }} priority />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            {/* Outfits at a glance */}
            <div className="mb-16 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={h2Style}>The three outfits at a glance</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {OUTFITS.map((o) => (
                  <a key={o.id} href={`#outfit-${o.id}`} className="rounded-xl p-5 block" style={{ ...cardStyle, textDecoration: "none" }}>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={eyebrowStyle}>{o.title.replace("The ", "")}</p>
                    <p className="text-2xl font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{fmt(outfitTotal(o.items))}</p>
                    <ul className="space-y-1">
                      {o.items.map((it) => (
                        <li key={it.id} className="text-xs leading-relaxed" style={bodyStyle}>{it.role}: {it.price}</li>
                      ))}
                    </ul>
                  </a>
                ))}
              </div>
            </div>

            {/* Rules */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={h2Style}>The 5 rules of dressing for Lagree</h2>
              <ol className="space-y-4">
                {RULES.map((r, i) => (
                  <li key={r.h} className="text-sm leading-relaxed" style={bodyStyle}>
                    <span className="font-semibold" style={strongStyle}>{i + 1}. {r.h}</span> {r.b}
                  </li>
                ))}
              </ol>
            </div>

            {/* Outfits */}
            {OUTFITS.map((o) => (
              <div key={o.id} id={`outfit-${o.id}`} className="mb-16 scroll-mt-28">
                <Divider label={`${o.title.replace("The ", "")} · ${fmt(outfitTotal(o.items))}`} />
                <h2 className="text-3xl font-semibold mb-3" style={h2Style}>{o.title}</h2>
                <p className="text-sm leading-relaxed mb-8" style={bodyStyle}>{o.who}</p>
                <div className="space-y-8">
                  {o.items.map((it) => (
                    <ItemCard key={it.id} it={it} />
                  ))}
                </div>
              </div>
            ))}

            {/* Summer swap */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-4" style={h2Style}>Summer swap: biker shorts</h2>
              <ItemCard it={SUMMER_SWAP} />
            </div>

            {/* Bring */}
            <Divider label="In your bag" />
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-4" style={h2Style}>What to bring to class</h2>
              <p className="text-sm leading-relaxed mb-8" style={bodyStyle}>
                Beyond the outfit: a water bottle, plus these four.
              </p>
              <div className="space-y-8">
                {BRING.map((it) => (
                  <ItemCard key={it.id} it={it} />
                ))}
              </div>
            </div>

            {/* Don't wear */}
            <div className="mb-16 rounded-2xl p-6 md:p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.5)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={eyebrowStyle}>Leave at home</p>
              <h2 className="text-2xl font-semibold mb-4" style={h2Style}>What not to wear to Lagree</h2>
              <ul className="space-y-3">
                {[
                  { h: "Loose running shorts.", b: "They ride up and gape in bear and wheelbarrow." },
                  { h: "Baggy tees and hoodies.", b: "Great for the walk home, terrible upside down on a carriage." },
                  { h: "Sneakers on the machine.", b: "Lagree is done in grip socks; shoes go in your bag." },
                  { h: "Thin or sheer leggings.", b: "Check them in a deep squat before class, not during it." },
                  { h: "Jewellery, belts and zips.", b: "They catch on springs and scratch the upholstery." },
                ].map((x) => (
                  <li key={x.h} className="text-sm leading-relaxed" style={bodyStyle}><span className="font-semibold" style={strongStyle}>{x.h}</span> {x.b}</li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed mt-4" style={bodyStyle}>
                Dressing for a man&apos;s first class? See <Link href="/blog/lagree-for-men" style={inlineLinkStyle}>Lagree for men</Link>. First class nerves? Read <Link href="/blog/lagree-for-beginners" style={inlineLinkStyle}>Lagree for beginners</Link>.
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

            <div>
              <h2 className="text-2xl font-semibold mb-8" style={h2Style}>Further reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="Lagree Socks" excerpt="The best grip socks for a moving Megaformer carriage, including men's pairs." href="/blog/best-lagree-grip-socks" category="Lagree" readTime="9 min read" date="October 2026" imageUrl="/pictures/stitch-grip-socks-footbar.png" />
                <ArticleCard title="Lagree Jacket" excerpt="The Define Jacket and six fitted layers for the cold studio and the walk home." href="/blog/best-lagree-jacket" category="Lagree" readTime="8 min read" date="October 2026" imageUrl="/pictures/stitch-studio-entryway.png" />
                <ArticleCard title="Lagree Shirts & Hoodies" excerpt="Fitted tees for class and the fan hoodies Lagree regulars actually wear." href="/blog/best-lagree-shirts" category="Lagree" readTime="8 min read" date="October 2026" imageUrl="/pictures/stitch-retail-activewear.png" />
                <ArticleCard title="Lagree Essentials" excerpt="Everything to wear, bring and buy for Lagree in one place." href="/blog/lagree-essentials" category="Lagree" readTime="10 min read" date="September 2026" imageUrl="/pictures/stitch-studio-bench-towels.png" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a Lagree studio near you" subtitle="Use our curated city guides to find the best Pilates and Lagree studios worldwide." showSearch searchPlaceholder="Ask: best Lagree studios in Los Angeles…" />
      </main>
      <Footer />
    </>
  );
}
