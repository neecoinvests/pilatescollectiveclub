import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Bolsters for Pilates (2026): Tested & Ranked",
  description: "The best bolsters for Pilates compared — rectangular, round, pranayama and prenatal bolsters ranked for firmness, fill, spinal support and side-lying work.",
  keywords: ["best yoga bolster for pilates", "pilates bolster", "restorative bolster", "rectangular yoga bolster", "round yoga bolster", "pranayama bolster", "buckwheat bolster", "prenatal pilates bolster", "bolster for spinal support", "pilates bolster 2026"],
  openGraph: {
    title: "Best Bolsters for Pilates (2026): Tested & Ranked",
    description: "Rectangular, round, pranayama and prenatal bolsters compared for firmness, fill and spinal support.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-yoga-bolster-for-pilates",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/juls-p-lB6lbkbe1XA-unsplash.jpg", width: 1200, height: 630, alt: "Best Bolsters for Pilates — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Bolsters for Pilates (2026)",
    description: "The bolsters worth buying for restorative, prenatal and supported Pilates work.",
    images: ["https://pilatescollectiveclub.com/pictures/juls-p-lB6lbkbe1XA-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-yoga-bolster-for-pilates" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Gaiam Yoga Bolster Pillow",
    price: "$40.17",
    verdict: "Best overall bolster for Pilates",
    description:
      "Gaiam is one of the more established names in yoga and Pilates props, which makes this the safe default if you want a single rectangular bolster that covers restorative work, supported stretching and side-lying positions without any guesswork. It's sold and shipped by Amazon.com directly, which simplifies returns if the firmness or footprint isn't right for your frame. As a general-purpose rectangular bolster, it does the core job any bolster is bought for: holding a body part at a fixed height so the surrounding muscles can release during restorative and supported Pilates work — which is why it's the pick to start with if you're buying your first one.",
    affiliateUrl: "https://www.amazon.com/dp/B0D4LPGRC8?tag=pilatescollective-20",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "TokSay Yoga Bolster Pillow",
    price: "$35.99",
    verdict: "Best for restorative and yin practice",
    description:
      "TokSay markets this bolster specifically for restorative and yin yoga and meditation, which matches how most Pilates practitioners actually use a bolster outside of class — for supported floor work and breath-led cool-downs rather than active exercise. At $35.99 it undercuts the Gaiam by a few dollars while covering the same core use case, making it a sensible pick for anyone building a home restorative setup without paying for a bigger-name brand.",
    affiliateUrl: "https://www.amazon.com/dp/B0CWTXN11K?tag=pilatescollective-20",
    tag: "Best for Restorative & Yin",
  },
  {
    rank: "03",
    name: "JZHLLA 2-PC Yoga Bolster Set",
    price: "$30.99",
    verdict: "Best value — two shapes in one purchase",
    description:
      "This is the only set on this list, pairing a rectangular bolster with a cylinder in a single $30.99 purchase — effectively giving you both of the two most useful bolster shapes (flat-topped for knees, ribs and spinal support; round for chest-opening and supported backbend work) at a price where either shape alone would usually be a compromise. The washable velvet cover is worth calling out on its own: plenty of budget bolsters only advertise a removable cover, not a machine-washable one, and washability matters more on a prop you rest directly against.",
    affiliateUrl: "https://www.amazon.com/dp/B0FN681FYG?tag=pilatescollective-20",
    tag: "Best Value Set",
  },
  {
    rank: "04",
    name: "Hihealer Round Yoga Bolster",
    price: "$41.99",
    verdict: "Best round bolster for chest opening",
    description:
      "The round shape is the better choice specifically for supported backbends and thoracic opening — placed lengthwise under the spine, its curved profile lets the ribcage fall open on both sides in a way a flat rectangular bolster can't replicate. Hihealer positions this one as a meditation cushion as much as a yoga prop, which fits: seated use for breathwork and cross-legged sitting is where a round bolster earns its keep once it's braced against something so it can't roll. At $41.99 it's the most expensive product here, so it's worth buying specifically for the round profile rather than as a general first bolster.",
    affiliateUrl: "https://www.amazon.com/dp/B0H366LRFD?tag=pilatescollective-20",
    tag: "Best for Chest Opening",
  },
  {
    rank: "05",
    name: "MABOZOO Yoga Bolster Pillow",
    price: "$30.99",
    verdict: "Best budget pick with a carry handle",
    description:
      "MABOZOO's rectangular bolster ties the JZHLLA set for the lowest price here, and it's the one built with portability in mind — a carry handle is a genuinely useful feature if you're moving a bolster between rooms, to a studio, or onto a mat set up somewhere other than a dedicated practice space. If your budget stretches to only one bolster and you want the standard rectangular shape rather than a two-piece set or a round profile, this is the straightforward entry-level option.",
    affiliateUrl: "https://www.amazon.com/dp/B0DYJHNQGK?tag=pilatescollective-20",
    tag: "Best Entry-Level",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Bolsters for Pilates (2026): Tested & Ranked",
      "description": "Rectangular, round, pranayama, buckwheat and prenatal bolsters compared for firmness, fill, spinal support and side-lying Pilates work.",
      "url": "https://pilatescollectiveclub.com/blog/best-yoga-bolster-for-pilates",
      "datePublished": "2026-09-10",
      "dateModified": "2026-09-10",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/juls-p-lB6lbkbe1XA-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-yoga-bolster-for-pilates" },
    },
    {
      "@type": "ItemList",
      "name": "Best Bolsters for Pilates (2026)",
      "numberOfItems": PRODUCTS.length,
      "itemListElement": PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "description": p.description,
          "offers": { "@type": "Offer", "priceCurrency": "USD", "price": p.price.replace(/[^0-9]/g, ""), "availability": "https://schema.org/InStock", "url": p.affiliateUrl },
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Bolsters for Pilates", "item": "https://pilatescollectiveclub.com/blog/best-yoga-bolster-for-pilates" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Do you need a bolster for Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "Not for the classical repertoire, which uses no props at all. A bolster becomes genuinely useful in three situations: pregnancy and postnatal work, where side-lying support makes the difference between a sustainable session and an abandoned one; restorative and breath-led practice, where the body needs to be held in position long enough to release; and any presentation where a supported position is the only comfortable starting point, such as acute back pain. Outside those, a bolster is a comfort rather than a requirement." } },
        { "@type": "Question", "name": "What is the difference between a bolster and a foam roller?", "acceptedAnswer": { "@type": "Answer", "text": "They have opposite purposes despite the similar shape. A foam roller is hard and designed to apply concentrated pressure into tissue — you move on it, and some discomfort is part of the point. A bolster is soft-firm and designed to hold a body part still at a set height so the surrounding muscles can let go — you rest on it, and any discomfort means it is the wrong prop or the wrong position. Neither substitutes for the other: rolling on a bolster achieves nothing, and resting on a roller for several minutes is unpleasant." } },
        { "@type": "Question", "name": "What size bolster should I buy?", "acceptedAnswer": { "@type": "Answer", "text": "The standard rectangular size of roughly 25 by 12 by 6 inches suits most adults and most uses. Height is the dimension worth thinking about: 6 inches is the versatile default, while 9-inch round bolsters give more lift for supported backbends and under-knee support and can be too much for smaller frames. Anyone under about 5'2\" often finds a standard bolster lifts them uncomfortably high in supine work and is better served by a lower-profile or pranayama bolster." } },
        { "@type": "Question", "name": "What fill is best in a bolster?", "acceptedAnswer": { "@type": "Answer", "text": "Densely packed cotton batting is the best general-purpose fill — firm, resilient, and it holds loft for years. Buckwheat hulls are firmer still and moulding, which suits heavier users and anyone who keeps bottoming out other bolsters, at the cost of considerable weight. Polyester or foam-chip fill is the budget option and the one to be wary of, because it compresses permanently rather than recovering, so a bolster that felt supportive on arrival can be noticeably flatter within a year." } },
      ],
    },
  ],
};

export default function BestYogaBolsterForPilatesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Equipment Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Props</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Bolsters<br /><span style={{ color: "#8b4a31" }}>for Pilates (2026)</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 8 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Firmness is the specification that matters most here, and it is the one most listings are vaguest about. A bolster exists to hold a body part at a fixed height while the muscles around it release — so a soft one, which compresses within seconds of load, has stopped being a bolster and become a cushion. These five cover the shapes worth owning, from an everyday rectangular default to a two-piece set and a round option for chest-opening work.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/juls-p-lB6lbkbe1XA-unsplash.jpg" alt="Best bolsters for Pilates — supported restorative and side-lying positions" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10 mt-4 overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
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

            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Bolsters · Ranked</p>
              <div className="space-y-10">
                {PRODUCTS.map((p) => (
                  <div key={p.name}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-semibold" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{p.rank}</span>
                      <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{p.tag}</span>
                    </div>
                    <ProductCard name={p.name} description={p.description} price={p.price} affiliateUrl={p.affiliateUrl} />
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#fff4f1", border: "1px solid rgba(139,74,49,0.15)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What to check before buying</h2>
              <ul className="space-y-3">
                {[
                  "Press it hard with a flat palm on arrival. If it compresses more than about a third, it will not hold a body in position — return it.",
                  "Check the fill is stated. Listings that describe only the cover fabric and never name the fill are almost always polyester.",
                  "Insist on a removable cover with a full-length zip. The cover needs washing; the fill must never get wet.",
                  "Match height to your frame — a standard 6-inch bolster lifts smaller practitioners uncomfortably high in supine positions.",
                  "Buckwheat is heavy. Excellent at home, genuinely awkward to carry to a studio.",
                  "Carry handles are worth having on any bolster you intend to move between rooms.",
                ].map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    <span className="font-semibold" style={{ color: "#8b4a31" }}>⚠</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "Do you need a bolster for Pilates?", a: "Not for the classical repertoire, which uses no props at all. A bolster becomes genuinely useful in three situations: pregnancy and postnatal work, where side-lying support makes the difference between a sustainable session and an abandoned one; restorative and breath-led practice, where the body needs to be held in position long enough to release; and any presentation where a supported position is the only comfortable starting point, such as acute back pain. Outside those, a bolster is a comfort rather than a requirement." },
                  { q: "What is the difference between a bolster and a foam roller?", a: "They have opposite purposes despite the similar shape. A foam roller is hard and designed to apply concentrated pressure into tissue — you move on it, and some discomfort is part of the point. A bolster is soft-firm and designed to hold a body part still at a set height so the surrounding muscles can let go — you rest on it, and any discomfort means it is the wrong prop or the wrong position. Neither substitutes for the other: rolling on a bolster achieves nothing, and resting on a roller for several minutes is unpleasant." },
                  { q: "What size bolster should I buy?", a: "The standard rectangular size of roughly 25 by 12 by 6 inches suits most adults and most uses. Height is the dimension worth thinking about: 6 inches is the versatile default, while 9-inch round bolsters give more lift for supported backbends and under-knee support and can be too much for smaller frames. Anyone under about 5'2\" often finds a standard bolster lifts them uncomfortably high in supine work and is better served by a lower-profile or pranayama bolster." },
                  { q: "What fill is best in a bolster?", a: "Densely packed cotton batting is the best general-purpose fill — firm, resilient, and it holds loft for years. Buckwheat hulls are firmer still and moulding, which suits heavier users and anyone who keeps bottoming out other bolsters, at the cost of considerable weight. Polyester or foam-chip fill is the budget option and the one to be wary of, because it compresses permanently rather than recovering, so a bolster that felt supportive on arrival can be noticeably flatter within a year." },
                ].map((item) => (
                  <div key={item.q} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.q}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="Pilates and Pregnancy" excerpt="What changes each trimester, which positions to set aside, and how to keep practising safely." href="/blog/pilates-and-pregnancy" category="Health" readTime="11 min read" date="June 2026" imageUrl="/pictures/mathilde-langevin-aBJ3A-2LJyU-unsplash.jpg" />
                <ArticleCard title="Best Yoga Blocks for Pilates (2026)" excerpt="Cork, foam and wood blocks compared for support, height and stability." href="/blog/best-yoga-blocks-for-pilates" category="Equipment" readTime="7 min read" date="June 2026" imageUrl="/pictures/stitch-props-cork-ring.png" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best Pilates studios in New York..." />
      </main>
      <Footer />
    </>
  );
}
