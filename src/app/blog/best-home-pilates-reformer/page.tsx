import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Home Pilates Reformer (2026): $359 to $4,700 Compared",
  description: "Home Pilates reformers from $359 to $4,700 compared on springs, rail length and footprint — plus which budget tier actually fits your space and practice.",
  openGraph: {
    title: "Best Home Pilates Reformer (2026): Every Budget, Honestly Reviewed",
    description: "The best home Pilates reformers tested across every price point — from AeroPilates to Merrithew and Balanced Body.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-home-pilates-reformer",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg", width: 1200, height: 630, alt: "Best Home Pilates Reformer — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Home Pilates Reformer (2026)",
    description: "The best home Pilates reformers tested across every price point.",
    images: ["https://pilatescollectiveclub.com/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg"],
  },
  keywords: ["best home pilates reformer", "best home pilates reformer 2026", "pilates reformer for home use", "home reformer pilates review", "best pilates reformer to buy", "top rated home pilates reformer", "pilates reformer home workout", "best reformer for beginners at home"],
  alternates: {
    canonical: "https://pilatescollectiveclub.com/blog/best-home-pilates-reformer",
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Stamina AeroPilates 287",
    tier: "Budget",
    price: "$359",
    verdict: "Best budget entry point",
    description:
      "The 287 is the least expensive way to get a real sliding-carriage reformer at home. Resistance comes from three heavy-duty elastic bungee cords rather than springs, which feels softer than a studio machine but works well for foundational footwork, stretching and the rowing series. It has a padded 3-position headrest, padded footbar, foam hand and foot straps, and it folds on wheels to store. The 17.5-inch platform is narrower than studio carriages, so it suits smaller frames best. Two workout DVDs and a wall chart are included.",
    affiliateUrl: "https://www.amazon.com/dp/B01FMODVAE?tag=pilatescollective-20",
    pros: ["Lowest price for a sliding-carriage reformer", "Folds on wheels for storage", "Light enough (about 56 lbs) to move easily"],
    cons: ["Elastic cords, not springs", "Narrow 17.5\" platform", "Less stable than studio machines"],
  },
  {
    rank: "02",
    name: "AeroPilates Pro XP 557",
    tier: "Mid-Range",
    price: "$1,330",
    verdict: "Best mid-range reformer",
    description:
      "The Pro XP 557 is AeroPilates' top home machine and a real step up: it uses four springs (two low-resistance, two high-resistance) instead of cords, has 69 inches of carriage travel for taller users, and includes the Free-Form Cardio Rebounder for jumping intervals plus a standing platform. The padded footbar adjusts to three positions and the frame takes users up to 300 lbs. At 100.5 inches long and 133 lbs it needs a dedicated spot. Sold by Spreetail on Amazon; stock can be limited.",
    affiliateUrl: "https://www.amazon.com/dp/B0012TJI8S?tag=pilatescollective-20",
    pros: ["Four springs, not cords", "Cardio rebounder and standing platform included", "69\" carriage travel suits taller users"],
    cons: ["100.5\" long — needs space", "133 lbs — heavy to move", "Not at studio-machine level for advanced work"],
  },
  {
    rank: "03",
    name: "Merrithew At Home SPX Reformer Package",
    tier: "Premium",
    price: "$3,349",
    verdict: "Best professional-brand home reformer on Amazon",
    description:
      "Merrithew (the company behind STOTT PILATES) designed the At Home SPX for home use with the same quality components as its studio machines, and this package is sold and shipped by Amazon.com. It has aluminium rails, a smooth, whisper-quiet carriage and five high-tension springs (4 × 100%, 1 × 50%), and it comes with a reformer box, metal roll-up pole, padded platform extender and double-loop straps, so you have everything needed for the full repertoire. It's 96.5 inches long and weighs 115 lbs.",
    affiliateUrl: "https://www.amazon.com/dp/B004FGT0TM?tag=pilatescollective-20",
    pros: ["True spring resistance", "Box, pole and platform extender included", "Sold and shipped by Amazon.com"],
    cons: ["Significant investment", "Needs a dedicated 8-foot space", "Fewer light-spring options than Merrithew's studio SPX Max"],
  },
  {
    rank: "04",
    name: "Balanced Body Studio Reformer",
    tier: "Premium",
    price: "$4,700",
    verdict: "Best overall home reformer",
    description:
      "The Studio Reformer is Balanced Body's commercial machine, and it's the one instructors most often trained on. It has a solid rock maple frame with commercial-grade upholstery, five Signature Springs giving 46 resistance combinations, and the Revo system's 4-position locking footbar and 5-position springbar. TwistLock shoulder rests make adjustments fast. It doesn't fold, so it needs a permanent spot, and it works with the full Balanced Body accessory range, including the Tower and Mat Conversion. Sold direct by Balanced Body on Amazon; made to order, three to four weeks to ship.",
    affiliateUrl: "https://www.amazon.com/dp/B002XVWIFE?tag=pilatescollective-20",
    pros: ["Solid rock maple frame built for daily professional use", "Revo footbar and springbar for quick, secure adjustments", "Full Balanced Body accessory compatibility"],
    cons: ["Premium price", "Doesn't fold — needs permanent floor space", "Overkill for casual practitioners"],
  },
];

const FAQS = [
  {
    q: "How much does a home Pilates reformer cost?",
    a: "Home Pilates reformers range from $300 to $5,000+ for professional machines. A solid spring-based home reformer typically costs $1,300–$2,500, and professional-brand machines like the Merrithew At Home SPX ($3,349) or Balanced Body Studio Reformer ($4,700) cost more.",
  },
  {
    q: "What is the best entry-level home reformer?",
    a: "For a tight budget, the AeroPilates 287 (about $359) is the least expensive real sliding-carriage reformer; the AeroPilates Premier 701 (about $540) adds a fourth resistance cord and a 300 lb user limit. Both use elastic cords rather than springs and fold on wheels for storage.",
  },
  {
    q: "How much space does a home Pilates reformer need?",
    a: "A standard reformer requires approximately 8 feet (2.4m) of length and 3 feet (0.9m) of width. A minimum room footprint of 12 by 8 feet is comfortable for most reformers with clearance.",
  },
  {
    q: "Is a home reformer as good as a studio reformer?",
    a: "Professional-brand home machines like the Merrithew At Home SPX or Balanced Body Studio Reformer cover the full repertoire. Professional studio machines are more robust but the difference is manageable for home practice.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://pilatescollectiveclub.com/blog/best-home-pilates-reformer/#article",
      "headline": "Best Home Pilates Reformer (2026): Every Budget, Honestly Reviewed",
      "description": "The best home Pilates reformers tested across every price point — from budget AeroPilates to professional Merrithew and Balanced Body machines.",
      "image": {
        "@type": "ImageObject",
        "url": "https://pilatescollectiveclub.com/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg",
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
      "datePublished": "2026-05-01",
      "dateModified": "2026-09-22",
      "url": "https://pilatescollectiveclub.com/blog/best-home-pilates-reformer",
      "mainEntityOfPage": "https://pilatescollectiveclub.com/blog/best-home-pilates-reformer",
      "articleSection": "Equipment",
      "inLanguage": "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Home Pilates Reformer", "item": "https://pilatescollectiveclub.com/blog/best-home-pilates-reformer" },
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
    {
      "@type": "ItemList",
      "name": "Best Home Pilates Reformers (2026)",
      "numberOfItems": PRODUCTS.length,
      "itemListElement": PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "description": p.description,
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": p.price.replace(/[^0-9]/g, ""),
            "availability": "https://schema.org/InStock",
            "url": p.affiliateUrl,
          },
          "review": {
            "@type": "Review",
            "reviewBody": p.description,
            "author": { "@type": "Organization", "name": "Pilates Collective Club" },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": 5 - i * 0.1,
              "bestRating": 5,
              "worstRating": 1,
            },
          },
        },
      })),
    },
  ],
};

export default function BestHomeReformerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>

        {/* Hero section */}
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Equipment Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Reformers</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Home Pilates Reformer<br /><span style={{ color: "#8b4a31" }}>(2026): Honestly Reviewed</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 11 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              The best home Pilates reformers tested across every price point — from AeroPilates to Merrithew and Balanced Body.
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg" alt="Home Pilates reformer machine" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            {/* What to look for */}
            <div className="mb-16 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What actually matters in a home reformer</h2>
              <div className="space-y-4">
                {[
                  { heading: "Spring vs cord resistance", body: "Professional reformers use calibrated steel springs. Budget models substitute elastic cords. Cords are usable, but they feel softer and less even than springs, and they lose tension over time. For beginners, this is manageable. Trained practitioners will notice the difference." },
                  { heading: "Carriage weight and glide quality", body: "The carriage should move smoothly, quietly, and with consistent resistance throughout the stroke. Cheap carriages wobble laterally, squeak, and have uneven glide. This directly affects your ability to perform controlled, precise movement — the entire point of reformer Pilates." },
                  { heading: "Rail length", body: "Standard studio reformers have a rail of around 96–100 inches. Shorter rails restrict the full range of motion for tall practitioners and limit certain exercises. Check rail length before buying, especially if you're over 5'10\"." },
                  { heading: "Frame stability", body: "The reformer must not rock, flex, or shift during explosive footwork or jump board work. Cheap aluminium frames flex under load — this is both a quality and a safety issue." },
                  { heading: "Footbar adjustability", body: "A footbar that adjusts to multiple heights and positions is essential for proper alignment in footwork and for accommodating different leg lengths. Fixed footbars significantly limit the repertoire you can safely perform." },
                ].map((item) => (
                  <div key={item.heading} className="flex gap-5 rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <div className="w-1.5 rounded-full shrink-0 mt-1" style={{ backgroundColor: "#8b4a31", minHeight: "20px" }} />
                    <div>
                      <p className="text-sm font-semibold mb-1" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.heading}</p>
                      <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick reference table */}
            <div className="mb-10 overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
              <div className="px-6 py-4" style={{ backgroundColor: "#f6f3f2" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Quick Picks — At a Glance</p>
              </div>
              {PRODUCTS.map((p, i) => (
                <div key={p.name} className="flex items-center gap-3 sm:gap-4 px-6 py-4" style={{ borderTop: i === 0 ? "none" : "1px solid rgba(217,194,186,0.25)", backgroundColor: "#ffffff" }}>
                  <span className="text-base font-semibold w-7 shrink-0 text-center" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{p.rank}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold leading-tight" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{p.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{p.verdict}</p>
                  </div>
                  <span className="text-xs font-semibold hidden md:block shrink-0 mr-3" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{p.price}</span>
                  <a href={p.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow"
                    style={{ display: "block", fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "10px 14px", whiteSpace: "nowrap", flexShrink: 0 }}
                  >Buy →</a>
                </div>
              ))}
            </div>

            {/* Products */}
            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>4 Reformers · Every Budget</p>
              <div className="space-y-12">
                {PRODUCTS.map((p) => (
                  <div key={p.name}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-semibold" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{p.rank}</span>
                      <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{p.tier}</span>
                      <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>{p.verdict}</span>
                    </div>
                    <ProductCard
                      name={p.name}
                      description={p.description}
                      price={p.price}
                      affiliateUrl={p.affiliateUrl}
                    />
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="rounded-lg p-4" style={{ backgroundColor: "#f0f7f1", border: "1px solid rgba(83,98,87,0.2)" }}>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Pros</p>
                        <ul className="space-y-1">
                          {p.pros.map((pro) => <li key={pro} className="text-xs" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>+ {pro}</li>)}
                        </ul>
                      </div>
                      <div className="rounded-lg p-4" style={{ backgroundColor: "#fdf5f3", border: "1px solid rgba(139,74,49,0.15)" }}>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Cons</p>
                        <ul className="space-y-1">
                          {p.cons.map((con) => <li key={con} className="text-xs" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>− {con}</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comparison table */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Quick comparison</h2>
              <div className="overflow-x-auto rounded-xl" style={{ border: "1px solid rgba(217,194,186,0.4)" }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: "#f6f3f2", borderBottom: "1px solid rgba(217,194,186,0.4)" }}>
                      {["Model", "Price", "Resistance", "Length", "Best For"].map((h) => (
                        <th key={h} className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { model: "Stamina 287", price: "$359", resistance: "3 cords", rail: "85\" overall", best: "Beginners, small spaces" },
                      { model: "AeroPilates 557", price: "$1,330", resistance: "4 springs", rail: "100.5\" overall", best: "Regular practitioners" },
                      { model: "Merrithew At Home SPX", price: "$3,349", resistance: "5 springs", rail: "96.5\" overall", best: "Serious practitioners" },
                      { model: "Balanced Body Studio Reformer", price: "$4,700", resistance: "5 springs", rail: "~8 ft", best: "Professional home studio" },
                    ].map((row, i) => (
                      <tr key={row.model} style={{ backgroundColor: i % 2 === 0 ? "#ffffff" : "#faf8f7", borderBottom: "1px solid rgba(217,194,186,0.2)" }}>
                        <td className="px-4 py-3 font-semibold" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{row.model}</td>
                        <td className="px-4 py-3" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>{row.price}</td>
                        <td className="px-4 py-3" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{row.resistance}</td>
                        <td className="px-4 py-3" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{row.rail}</td>
                        <td className="px-4 py-3" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{row.best}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Which tier is right for you — routes to the dedicated guide per budget and constraint */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Start from your constraint, not the price list</h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Almost nobody buying a reformer is choosing freely between a $359 machine and a $4,700 one. In practice one constraint decides it — a budget ceiling, a room that will not take a permanent 8.5-foot footprint, or a torso too long for a short rail. Find your constraint below and go straight to the guide written for it.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Budget under $500", body: "Cord-resistance machines only at this price. Genuine reformer movement patterns, but not a spring feel.", href: "/blog/best-pilates-reformer-under-500", cta: "Reformers under $500" },
                  { label: "Budget $500–$1,000", body: "The value sweet spot for regular home practice. Longer rails and better carriages than the entry tier.", href: "/blog/best-pilates-reformer-under-1000", cta: "Reformers under $1,000" },
                  { label: "Budget $1,000–$2,000", body: "Where true steel springs start. The resistance curve changes how every exercise feels.", href: "/blog/best-pilates-reformer-under-2000", cta: "Reformers under $2,000" },
                  { label: "Budget $2,000 and up", body: "Studio-grade frames and carriages built to outlast a decade of daily use. Buy once.", href: "/blog/best-premium-pilates-reformer", cta: "Premium reformers" },
                  { label: "The room has another purpose", body: "Machines that fold and stand vertically against a wall, dropping the stored footprint to about 30 by 12 inches.", href: "/blog/best-foldable-pilates-reformer", cta: "Foldable reformers" },
                  { label: "No space for a full-size frame", body: "Compact and half-length machines for flats where 8.5 feet is simply not available.", href: "/blog/best-pilates-reformer-for-small-spaces", cta: "Reformers for small spaces" },
                  { label: "You are over about 5ft 10in", body: "Rail length is the specification that matters. Short rails cut your leg extension short on every exercise.", href: "/blog/best-pilates-reformer-for-tall-people", cta: "Reformers for tall people" },
                  { label: "First reformer, still learning", body: "What to prioritise before spending, and which features you will not use in your first year.", href: "/blog/best-pilates-reformer-for-beginners", cta: "Reformers for beginners" },
                ].map((t) => (
                  <div key={t.href} className="rounded-xl p-5 flex flex-col" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.35)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{t.label}</p>
                    <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{t.body}</p>
                    <Link href={t.href} className="text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif", textDecoration: "none" }}>
                      {t.cta} →
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Space requirements */}
            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Space requirements to plan for</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                A full-size reformer requires a minimum footprint of approximately 8.5 feet long by 2.5 feet wide, plus clearance around the machine for safe movement. Both the Merrithew At Home SPX and the Balanced Body Studio Reformer need a dedicated, permanent space — neither folds.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                AeroPilates machines fold on wheels, which frees most of the floor when you&apos;re not training. If space is your main constraint, look at Balanced Body&apos;s Metro IQ, whose telescoping frame shortens to 62 inches for storage, or the Allegro 2, which can be stood on end with its wheel kit.
              </p>
            </div>

            {/* Verdict */}
            <div className="mb-16 rounded-2xl p-8 md:p-10" style={{ background: "linear-gradient(135deg, #8b4a31 0%, #a86247 100%)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-4 opacity-75" style={{ color: "#ffffff", fontFamily: "'Montserrat', sans-serif" }}>Our Verdict</p>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#ffffff", fontFamily: "'Playfair Display', serif" }}>Buy once, buy the Balanced Body Studio Reformer.</h2>
              <p className="text-base leading-relaxed mb-6 opacity-85" style={{ color: "#ffffff", fontFamily: "'Montserrat', sans-serif" }}>
                If budget is genuinely no constraint, the Studio Reformer is the machine you will never need to replace. If you want a professional-brand spring reformer with Amazon delivery at a lower price, the Merrithew At Home SPX package is the one to buy. For regular practice on a smaller budget, the spring-based AeroPilates Pro XP 557 is a real step up from entry-level machines, and the AeroPilates 287 is the lowest-cost way to start.
              </p>
              <a href="https://www.amazon.com/dp/B002XVWIFE?tag=pilatescollective-20" target="_blank" rel="noopener noreferrer nofollow" className="inline-block px-6 py-3 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90" style={{ backgroundColor: "#ffffff", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>
                Shop Balanced Body Studio Reformer on Amazon →
              </a>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {FAQS.map((item) => (
                  <div key={item.q} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.q}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Further reading */}
            <div>
              <h2 className="text-2xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="Best Pilates Reformer Brands (2026)" excerpt="Balanced Body, Merrithew, Align, Gratz, Elina and Peak — who builds what, and at what price." href="/blog/best-pilates-reformer-brands" category="Equipment" readTime="12 min read" date="June 2026" imageUrl="/pictures/stitch-reformers-aerial-row.png" />
                <ArticleCard title="How Much Does a Pilates Reformer Cost?" excerpt="What the money actually buys between $300 and $6,000, and where the jumps in quality fall." href="/blog/how-much-does-a-pilates-reformer-cost" category="Equipment" readTime="10 min read" date="June 2026" imageUrl="/pictures/stitch-reformer-spring-detail.png" />
                <ArticleCard title="The Beginner's Guide to Reformer Pilates" excerpt="What to expect in your first reformer class, how to choose a studio, and how to progress." href="/blog/beginners-guide-to-reformer-pilates" category="Beginners" readTime="8 min read" date="May 2026" imageUrl="/pictures/esma-eserghep-NUQi80iMLrI-unsplash.jpg" />
              </div>
            </div>

          </div>
        </section>

        <CTASection title="Start with a studio before buying" subtitle="Find the best Pilates studios near you in our city guides." />

      </main>
      <Footer />
    </>
  );
}
