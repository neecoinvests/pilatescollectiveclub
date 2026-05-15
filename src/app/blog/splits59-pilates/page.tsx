import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Splits59 for Pilates (2026): The Brand Built for the Method | Pilates Collective Club",
  description:
    "Splits59 is the activewear brand most explicitly designed for Pilates and barre. This guide covers the best Splits59 pieces for reformer and mat work — the Raquel legging, Sylvie bra, and what to prioritise.",
  keywords: [
    "splits59 pilates",
    "splits59 for pilates",
    "splits59 raquel legging",
    "splits59 activewear review",
    "best splits59 pilates",
    "splits59 barre pilates",
  ],
  openGraph: {
    title: "Splits59 for Pilates (2026): The Brand Built for the Method",
    description: "Splits59 is the activewear brand most explicitly designed for Pilates and barre — the Raquel legging, Sylvie bra, and what to prioritise.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/splits59-pilates",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/elena-kloppenburg-erUC4fTtCuo-unsplash.jpg", width: 1200, height: 630, alt: "Splits59 for Pilates — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Splits59 for Pilates (2026): The Brand Built for the Method",
    description: "The Raquel legging, the Sylvie bra, and the full Splits59 range reviewed for Pilates practitioners.",
    images: ["https://pilatescollectiveclub.com/pictures/elena-kloppenburg-erUC4fTtCuo-unsplash.jpg"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/blog/splits59-pilates",
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Splits59 Raquel High Waist Legging",
    price: "From $138",
    verdict: "Best Pilates Legging Available",
    description:
      "The Raquel is the legging most serious Pilates practitioners reference when asked what they actually wear — and the reason is specific. The wide, flat waistband was engineered for the repeated hip flexion of reformer footwork: it does not fold, roll, or create pressure points through hundreds of repetitions in a bent-knee position. The fabric has a precise compression level — held but not restricted — that provides proprioceptive feedback on leg alignment without limiting spinal articulation or rotation. Full opacity in every position, including the deep hip flexion of standing split-squat balance work. The price is significant but the Raquel outlasts almost everything else in terms of wash cycles and maintained compression quality. If you practise four or more times per week, this is the economically rational choice.",
    affiliateUrl: "https://www.amazon.com/s?k=splits59+raquel+high+waist+legging&tag=pilatescollective-20",
    tag: "Top Pick",
  },
  {
    rank: "02",
    name: "Splits59 Sylvie Shelf Bra Crop",
    price: "From $82",
    verdict: "Best Bra / Top",
    description:
      "The Sylvie is not strictly a bra — it is a fitted crop top with a built-in shelf bra, which makes it the correct choice for Pilates practitioners who want more coverage than a standalone bra provides without the bulk of a layered bra-plus-tank combination. The integrated shelf bra provides light-to-medium support that is appropriate for all Pilates except jump board; for vigorous jump board, wear the Sylvie over a higher-support bra. The back is fully covered, which eliminates the visibility concern some practitioners have with racerback bras during spinal extension work. The crop length sits at the high hip — correct for reformer work, clears the waistband during standing sequences.",
    affiliateUrl: "https://www.amazon.com/s?k=splits59+sylvie+shelf+bra+crop&tag=pilatescollective-20",
    tag: "Best Top",
  },
  {
    rank: "03",
    name: "Splits59 Beckett Jacket",
    price: "From $148",
    verdict: "Best Layer",
    description:
      "The most overlooked Splits59 piece for regular studio practitioners. The Beckett is a fitted jacket — not a hoodie, not a zip-up sweatshirt — designed for the transition from street to studio and back. It sits close to the body without restricting movement, which means it can be worn during warm-up sequences on the mat before removing for the main class. The construction is substantial enough for UK and European climates. The price is high for a jacket, but it is made to the same standard as the Raquel and wears accordingly. For practitioners who arrive from outside to a cold studio, the difference between a well-fitting jacket and a baggy sweatshirt is worth paying for.",
    affiliateUrl: "https://www.amazon.com/s?k=splits59+beckett+jacket+activewear&tag=pilatescollective-20",
    tag: "Best Layer",
  },
  {
    rank: "04",
    name: "Splits59 Hartley High Waist Legging",
    price: "From $108",
    verdict: "Best Value Option",
    description:
      "The Hartley uses a lighter-weight fabric than the Raquel and sits at a lower price point — the entry to the Splits59 range for practitioners who want to test the brand before committing to Raquel pricing. The waistband is similarly engineered, wide and flat, and performs comparably to the Raquel for mat work. The difference shows in the fabric compression: the Hartley is softer and less structured, which some practitioners actively prefer for gentle mat practice, prenatal Pilates, or sessions that are more restorative than dynamic. For vigorous reformer classes, the Raquel is meaningfully better; for lighter mat work, the Hartley closes most of that gap at $30 less.",
    affiliateUrl: "https://www.amazon.com/s?k=splits59+hartley+high+waist+legging&tag=pilatescollective-20",
    tag: "Best Value",
  },
  {
    rank: "05",
    name: "Splits59 Airweight Short",
    price: "From $68",
    verdict: "Best Shorts",
    description:
      "Splits59 makes the best Pilates-specific shorts in the market because they understand exactly what the reformer requires: a fitted mid-thigh cut with no inner-seam bulk, a waistband that does not create pressure at the hip crease in deep flexion, and opacity in all positions including the internally-rotated hip positions common in footwork. The Airweight fabric is the brand&apos;s lightest, which makes these appropriate for warm studios and summer mat practice. The distinction from Gymshark or generic athletic shorts is immediate in wear — the construction is specifically calibrated for the movement patterns of Pilates rather than adapted from a gym or running context.",
    affiliateUrl: "https://www.amazon.com/s?k=splits59+airweight+shorts&tag=pilatescollective-20",
    tag: "Best Shorts",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Splits59 for Pilates (2026): The Brand Built for the Method",
      "description": "Splits59 is the activewear brand most explicitly designed for Pilates and barre — the Raquel legging, Sylvie bra, and what to prioritise.",
      "url": "https://pilatescollectiveclub.com/blog/splits59-pilates",
      "datePublished": "2026-05-14",
      "dateModified": "2026-05-14",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/elena-kloppenburg-erUC4fTtCuo-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/splits59-pilates" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Splits59 for Pilates", "item": "https://pilatescollectiveclub.com/blog/splits59-pilates" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is Splits59 worth the price?", "acceptedAnswer": { "@type": "Answer", "text": "For the Raquel Legging specifically — yes, and decisively. The Raquel is one of the few pieces of activewear where the design brief was explicitly the demands of the Pilates reformer, and the engineering reflects that origin. The waistband does not fold during footwork, the compression does not restrict spinal articulation, and the fabric maintains its performance over significantly more wash cycles than comparable premium leggings. Practitioners who invest in the Raquel consistently report wearing it for two or more years without degradation. At $138-148, the cost-per-wear calculation is often better than cheaper alternatives that need replacing annually." } },
        { "@type": "Question", "name": "How does Splits59 sizing run?", "acceptedAnswer": { "@type": "Answer", "text": "Splits59 runs true to size in the Raquel and Hartley leggings. The brand does not have a bodybuilding compression bias, so sizing up is rarely necessary. If you are between sizes and prefer a held, structured feeling through dynamic reformer work, size down. If you prefer a softer compression for mat-focused practice, stay true to size. The Sylvie top runs slightly small in the bust — practitioners with a larger bust measurement than their band size should size up in the Sylvie specifically." } },
        { "@type": "Question", "name": "Where can I buy Splits59?", "acceptedAnswer": { "@type": "Answer", "text": "Splits59 sells directly at splits59.com with the full range. They are stocked at select boutique studios and activewear retailers in LA, New York, and London. Amazon carries a curated selection, which is useful for Prime delivery and returns convenience. The brand does not have the retail footprint of Lululemon or Alo — online is the primary channel for most practitioners outside major US cities." } },
        { "@type": "Question", "name": "Splits59 vs Lululemon for Pilates — which is better?", "acceptedAnswer": { "@type": "Answer", "text": "For Pilates specifically, the Raquel Legging is better than the Lululemon Align for reformer work. The Align is softer and more comfortable for extended mat sessions where you want minimal sensation from the legging. The Raquel is better for active reformer classes where waistband stability and compression calibration matter. For bras and tops, the difference is narrower — both brands offer excellent options. The Splits59 range is narrower overall (they do not make shoes, bags, or casual wear), which is a feature rather than a limitation if you are buying specifically for Pilates." } },
      ],
    },
  ],
};

export default function Splits59PilatesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Brand Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Splits59</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Splits59 for Pilates (2026):<br /><span style={{ color: "#8b4a31" }}>The Brand Built for the Method</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 10 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Splits59 is the only major activewear brand that was founded explicitly for the Pilates and barre community. Every other brand in this space — Lululemon, Alo, Sweaty Betty — came from yoga, running, or gym culture and adapted. Splits59 started with the reformer in mind. That design origin shows up in every technical decision the brand makes, and the Raquel Legging is the most compelling evidence of what Pilates-specific activewear design can achieve.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/elena-kloppenburg-erUC4fTtCuo-unsplash.jpg" alt="Splits59 Raquel legging for Pilates — the best activewear brand designed specifically for reformer and mat work" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-16 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What makes Splits59 different</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The LA brand was founded by two Pilates practitioners who were unsatisfied with what the existing market offered: leggings that were designed for yoga were too soft and lacked waistband structure; gym leggings had too much compression for spinal mobility work; everything else was a compromise. The founding design brief was the specific biomechanical demands of the classical Pilates reformer — repeated hip flexion, spinal articulation, rotation, and the full range of proprioceptive demands that distinguish the method from simpler movement modalities.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The result is a narrow range — Splits59 does not make shoes, casual loungewear, or lifestyle accessories — that is consistently excellent within its scope. The brand has developed a cult following among serious practitioners and working Pilates instructors, particularly in LA and New York, that is based on product performance rather than marketing spend.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The price point is the primary barrier: the Raquel at $138-148 is among the most expensive Pilates leggings available. The case for that price is made below — but it requires a specific kind of practitioner: frequent, committed, and willing to invest in gear that will perform at the highest level for two or more years.
              </p>
            </div>

            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>How Splits59 compares</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { brand: "vs Lululemon", summary: "More Pilates-specific, slightly more expensive. The Raquel is better than the Align for reformer work; the Align is softer for extended mat sessions. A narrower range but every piece is Pilates-native." },
                  { brand: "vs Varley", summary: "Similar LA premium positioning, different aesthetic. Varley is more fashion-forward; Splits59 is more function-first. The Raquel outperforms Varley&apos;s best leggings for reformer waistband performance." },
                  { brand: "vs Alo Yoga", summary: "Less fashion-forward, more function-oriented. Alo has a stronger studio-to-street aesthetic; Splits59 has better engineering for the method itself. Different priorities, both legitimate." },
                ].map((item) => (
                  <div key={item.brand} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{item.brand}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.summary}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Splits59 Pieces · Pilates-Tested</p>
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

            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>The honest case for the Raquel&apos;s price</h2>
              <p className="mb-4 text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The Raquel Legging costs more than the Lululemon Align and significantly more than Gymshark. The case for paying that premium is specific and evidence-based:
              </p>
              <ul className="space-y-3">
                {[
                  "The wide, flat waistband was designed specifically for the hip flexion demands of reformer footwork — a technical requirement no other brand has addressed as directly. It does not fold or roll under repeated bent-knee work.",
                  "The compression level is calibrated for the full range of spinal articulation the Pilates repertoire demands. It provides proprioceptive feedback without restricting movement — a difficult balance that the Raquel achieves and most leggings do not.",
                  "The fabric maintains compression quality over significantly more wash cycles than comparable premium leggings. Practitioners who practise four or more times per week consistently report two-year-plus lifespan without degradation.",
                  "The opacity is absolute in every position including the deep external rotation and hip flexion positions that expose opacity failures in other leggings.",
                ].map((point, i) => (
                  <li key={i} className="flex gap-3 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    <span className="font-semibold flex-shrink-0" style={{ color: "#8b4a31" }}>→</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "Is Splits59 worth the price?", a: "For the Raquel Legging specifically — yes, and decisively. The Raquel is one of the few pieces of activewear where the design brief was explicitly the demands of the Pilates reformer. The waistband does not fold during footwork, the compression does not restrict spinal articulation, and the fabric maintains its performance over significantly more wash cycles than comparable premium leggings. At $138-148, the cost-per-wear calculation is often better than cheaper alternatives that need replacing annually." },
                  { q: "How does Splits59 sizing run?", a: "Splits59 runs true to size in the Raquel and Hartley leggings. The brand does not have a bodybuilding compression bias, so sizing up is rarely necessary. If you prefer a held, structured feeling through dynamic reformer work, size down. If you prefer softer compression for mat-focused practice, stay true to size. The Sylvie top runs slightly small in the bust — practitioners with a larger bust measurement than their band size should size up in the Sylvie." },
                  { q: "Where can I buy Splits59?", a: "Splits59 sells directly at splits59.com with the full range. They are stocked at select boutique studios and activewear retailers in LA, New York, and London. Amazon carries a curated selection, useful for Prime delivery and returns convenience. The brand does not have the retail footprint of Lululemon or Alo — online is the primary channel for most practitioners." },
                  { q: "Splits59 vs Lululemon for Pilates — which is better?", a: "For Pilates specifically, the Raquel Legging is better than the Lululemon Align for reformer work. The Align is softer and more comfortable for extended mat sessions. The Raquel is better for active reformer classes where waistband stability and compression calibration matter. The Splits59 range is narrower overall — they do not make shoes, bags, or casual wear — which is a feature rather than a limitation if you are buying specifically for Pilates." },
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
                <ArticleCard title="Varley for Pilates (2026)" excerpt="The LA brand with cult status in UK and European Pilates studios — the best pieces, honestly reviewed." href="/blog/varley-pilates-activewear" category="Brand Guide" readTime="9 min read" date="May 2026" imageUrl="/pictures/logan-weaver-lgnwvr-u76Gd0hP5w4-unsplash.jpg" />
                <ArticleCard title="Best Pilates Leggings (2026)" excerpt="Five leggings across every price point — tested for opacity, waistband stability, and reformer performance." href="/blog/best-pilates-leggings" category="Buyer&apos;s Guide" readTime="9 min read" date="May 2026" imageUrl="/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best Pilates studios in Los Angeles…" />
      </main>
      <Footer />
    </>
  );
}
