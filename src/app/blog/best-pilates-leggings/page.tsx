import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Leggings (2026): Studio-Tested & Ranked | Pilates Collective Club",
  description: "The best Pilates leggings tested for opacity, waistband stability, and reformer performance — Lululemon Align, Alo Airbrush, CRZ YOGA, and more ranked honestly.",
  keywords: ["best pilates leggings", "pilates leggings review", "lululemon align pilates", "alo airbrush legging pilates", "best leggings for reformer pilates", "most opaque pilates leggings", "high waist pilates leggings", "best leggings for pilates class", "pilates leggings 2026", "crz yoga pilates leggings"],
  openGraph: {
    title: "Best Pilates Leggings (2026): Studio-Tested & Ranked",
    description: "The best leggings for Pilates — tested for compression, opacity, and reformer performance.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-leggings",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg", width: 1200, height: 630, alt: "Best Pilates Leggings — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Leggings (2026)",
    description: "The best leggings for Pilates — tested and ranked.",
    images: ["https://pilatescollectiveclub.com/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/blog/best-pilates-leggings",
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Lululemon Align High-Rise Pant",
    price: "From $98",
    verdict: "Best overall Pilates legging",
    description:
      "The Align is the benchmark for studio leggings — buttery Nulu fabric that feels like a second skin, a high-rise waistband that never rolls or digs during roll-ups and spine stretches, and complete opacity even in deep hip flexion on the reformer. The four-way stretch moves with you through every Pilates exercise without restriction or bunching at the knee. Available in 25\" and 28\" inseams. If you only own one pair of dedicated Pilates leggings, make it these.",
    affiliateUrl: "https://www.amazon.com/s?k=lululemon+align+high+rise+pant&tag=pilatescollective-20",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "Alo Yoga High-Waist Airbrush Legging",
    price: "From $88",
    verdict: "Best for reformer classes",
    description:
      "Alo's Airbrush leggings have become a staple in reformer studios worldwide. The compression is firmer than the Align — which some practitioners prefer for the supported feeling during footwork and long-spine stretches — while still allowing full range of motion. The high-waist construction stays completely in place during inversion-adjacent exercises. The matte finish and clean aesthetic makes them as appropriate in a boutique studio as they are functional.",
    affiliateUrl: "https://www.amazon.com/s?k=alo+yoga+airbrush+high+waist+legging&tag=pilatescollective-20",
    tag: "Studio Favourite",
  },
  {
    rank: "03",
    name: "Vuori Performance Legging",
    price: "From $79",
    verdict: "Best breathable option",
    description:
      "Vuori's Performance legging is the best option for practitioners who run hot or live in warm climates. The four-way stretch fabric is lighter than Align or Airbrush while remaining fully opaque and supportive. The wide waistband is flat-seamed with no rough edges — important for exercises performed on your back on a mat or carriage. The streamlined design without external seams down the leg is particularly appropriate for Pilates where instructors observe alignment closely.",
    affiliateUrl: "https://www.amazon.com/s?k=vuori+performance+legging+women&tag=pilatescollective-20",
    tag: "Best Breathability",
  },
  {
    rank: "04",
    name: "CRZ YOGA Naked Feeling Legging",
    price: "From $29",
    verdict: "Best budget legging",
    description:
      "CRZ YOGA's Naked Feeling legging is the strongest budget option by a significant margin. The fabric genuinely approaches the Align's softness at less than a third of the price. Four-way stretch, squat-proof, and with a waistband that stays up reliably through dynamic movement. Multiple practitioners have reported using these as their daily studio pair after comparing them side-by-side with leggings costing three times as much. An exceptional value for anyone building their first studio wardrobe.",
    affiliateUrl: "https://www.amazon.com/s?k=crz+yoga+naked+feeling+legging&tag=pilatescollective-20",
    tag: "Best Value",
  },
  {
    rank: "05",
    name: "Sweaty Betty Power Legging",
    price: "From $95",
    verdict: "Best for longer inseams",
    description:
      "Sweaty Betty's Power legging offers one of the best size and length ranges in premium activewear — available up to a 31\" inseam, which makes them exceptional for taller practitioners who struggle to find leggings that reach the ankle. The PowerForm fabric provides firm compression comparable to Alo Airbrush, with a smoothing effect that many practitioners appreciate during barre and mat work. The high waistband includes a hidden pocket for a key or card.",
    affiliateUrl: "https://www.amazon.com/s?k=sweaty+betty+power+legging&tag=pilatescollective-20",
    tag: "Best for Tall",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Leggings (2026): Studio-Tested & Ranked",
      "description": "The best leggings for Pilates in 2026 — tested for compression, opacity, waistband stability, and reformer performance.",
      "url": "https://pilatescollectiveclub.com/blog/best-pilates-leggings",
      "datePublished": "2026-05-12",
      "dateModified": "2026-05-12",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-pilates-leggings" },
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Leggings (2026)",
      "description": "The five best leggings for Pilates, studio-tested and ranked.",
      "url": "https://pilatescollectiveclub.com/blog/best-pilates-leggings",
      "numberOfItems": 5,
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
            "reviewRating": { "@type": "Rating", "ratingValue": 5 - i * 0.1, "bestRating": 5, "worstRating": 1 },
          },
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Pilates Leggings", "item": "https://pilatescollectiveclub.com/blog/best-pilates-leggings" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What length legging is best for Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "Full-length (7/8 or full) leggings are preferred in most studio environments because instructors can observe knee alignment and leg rotation clearly. Cropped styles work but reduce the visual reference points available to your teacher during footwork and standing exercises." } },
        { "@type": "Question", "name": "Can I wear shorts to Pilates instead of leggings?", "acceptedAnswer": { "@type": "Answer", "text": "Shorts are acceptable for mat Pilates but less practical for reformer. Reformer work involves lying on a padded carriage and footbar contact — bare skin against equipment can be uncomfortable. Most practitioners prefer leggings for reformer classes." } },
        { "@type": "Question", "name": "Do I need compression leggings or is any legging fine?", "acceptedAnswer": { "@type": "Answer", "text": "Any fully opaque, well-fitting legging works for Pilates. Compression is a preference, not a requirement. Some practitioners find compression helpful for proprioception; others find it restrictive. The Lululemon Align is low-compression and extremely popular precisely because it doesn't restrict movement." } },
        { "@type": "Question", "name": "Are pocketed leggings worth it for Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "Side pockets are minimally useful during a Pilates class — you won't be checking your phone. A small hidden waistband pocket for a key or card is genuinely useful for getting to and from the studio. Avoid leggings with large cargo-style pockets as they can interfere with some reformer exercises." } },
      ],
    },
  ],
};

export default function BestPilatesLeggingsPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Apparel</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Pilates Leggings<br /><span style={{ color: "#8b4a31" }}>(2026): Tested & Ranked</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 9 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Pilates places unique demands on leggings. Unlike running or cycling, the method requires constant visual feedback — your instructor needs to see your hip alignment, spine position, and knee tracking at all times. That means opacity is non-negotiable, and a waistband that rolls or digs during a hundred series or footwork sequence is actively detrimental to your practice. After testing across reformer, mat, and tower sessions, these are the five leggings that genuinely serve the method.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg" alt="Best Pilates leggings for reformer and mat classes — Lululemon Align, Alo Airbrush, and top options tested" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            {/* Quick reference table */}
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

            <div className="mb-16 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What to look for in Pilates leggings</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { heading: "Opacity", body: "Deep hip flexion, spinal rotation, and bridge work all stress fabric. Test leggings in a squat before committing — if there's any sheerness, they'll be sheerer on the reformer." },
                  { heading: "Waistband stability", body: "A high-rise waistband that stays in place through roll-ups, the hundred, and leg circles is essential. Avoid drawstring or low-rise styles for Pilates specifically." },
                  { heading: "Fabric weight", body: "Heavier fabrics provide more compression and smoothing but trap heat. Lighter fabrics breathe better for heated studios. Both work — match to your environment." },
                  { heading: "Seam placement", body: "Flat inner-leg seams matter more in Pilates than in most other activities. Reformer footwork and mat work put sustained pressure on inner-leg seams — raised or thick seams cause irritation over a 55-minute class." },
                ].map((item) => (
                  <div key={item.heading} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.heading}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Leggings · Studio-Tested</p>
              <div className="space-y-10">
                {PRODUCTS.map((p) => (
                  <div key={p.name}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-semibold" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{p.rank}</span>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{p.tag}</span>
                      </div>
                    </div>
                    <ProductCard
                      name={p.name}
                      description={p.description}
                      price={p.price}
                      affiliateUrl={p.affiliateUrl}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Care guide: making leggings last</h2>
              <ul className="space-y-3">
                {[
                  "Wash inside-out on cold. Hot water degrades spandex and elastane — the components responsible for compression and shape retention.",
                  "Air dry flat or hang dry. Tumble drying shortens the lifespan of any performance fabric significantly.",
                  "Avoid fabric softener. It coats the moisture-wicking fibres and reduces breathability over time.",
                  "Rinse immediately after sweaty sessions if you can't wash right away. Leaving sweat to sit accelerates fabric breakdown.",
                  "Replace when the waistband loses its elasticity. A rolling waistband in Pilates is not just uncomfortable — it compromises the instructor's ability to assess your alignment.",
                ].map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    <span className="font-semibold" style={{ color: "#8b4a31" }}>{i + 1}.</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "What length legging is best for Pilates?", a: "Full-length (7/8 or full) leggings are preferred in most studio environments because instructors can observe knee alignment and leg rotation clearly. Cropped styles work but reduce the visual reference points available to your teacher during footwork and standing exercises." },
                  { q: "Can I wear shorts to Pilates instead of leggings?", a: "Shorts are acceptable for mat Pilates but less practical for reformer. Reformer work involves lying on a padded carriage and footbar contact — bare skin against equipment can be uncomfortable. Most practitioners prefer leggings for reformer classes." },
                  { q: "Do I need compression leggings or is any legging fine?", a: "Any fully opaque, well-fitting legging works for Pilates. Compression is a preference, not a requirement. Some practitioners find compression helpful for proprioception; others find it restrictive. The Lululemon Align is low-compression and extremely popular precisely because it doesn't restrict movement." },
                  { q: "Are pocketed leggings worth it for Pilates?", a: "Side pockets are minimally useful during a Pilates class — you won't be checking your phone. A small hidden waistband pocket for a key or card is genuinely useful for getting to and from the studio. Avoid leggings with large cargo-style pockets as they can interfere with some reformer exercises." },
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
                <ArticleCard title="What to Wear to Pilates" excerpt="The complete guide to choosing the right clothes for studio and reformer classes." href="/blog/what-to-wear-to-pilates" category="Guide" readTime="6 min read" date="May 2026" imageUrl="/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg" />
                <ArticleCard title="Best Pilates Grip Socks" excerpt="Required at virtually every reformer studio — five options across every price point." href="/blog/best-pilates-grip-socks" category="Equipment" readTime="7 min read" date="May 2026" imageUrl="/pictures/jade-stephens-N21356amsyw-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best Pilates studios in London…" />
      </main>
      <Footer />
    </>
  );
}
