import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Free People Movement for Pilates (2026): Best Pieces & Honest Review | Pilates Collective Club",
  description: "Free People Movement Pilates wear reviewed: FP Movement leggings, bras, and tops tested for comfort, grip, and style in reformer and mat classes.",
  keywords: ["free people movement pilates", "fp movement pilates", "free people pilates leggings", "fp movement good karma legging", "free people movement review", "fp movement vs lululemon pilates", "free people movement activewear pilates", "fp movement studio", "free people pilates clothes 2026", "fp movement pilates review"],
  openGraph: {
    title: "Free People Movement for Pilates (2026): Best Pieces & Honest Review",
    description: "The complete guide to Free People Movement activewear for Pilates — the best pieces that combine lifestyle aesthetic with genuine studio performance.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/free-people-movement-pilates",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/roxana-popovici-hiHBILFNah4-unsplash.jpg", width: 1200, height: 630, alt: "Free People Movement for Pilates — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free People Movement for Pilates (2026): Best Pieces & Honest Review",
    description: "The complete guide to Free People Movement for Pilates — lifestyle aesthetic meets genuine studio performance.",
    images: ["https://pilatescollectiveclub.com/pictures/roxana-popovici-hiHBILFNah4-unsplash.jpg"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/blog/free-people-movement-pilates",
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "FP Movement Good Karma Legging",
    price: "From $78",
    verdict: "Best Legging",
    description:
      "The Good Karma is Free People Movement&apos;s flagship legging for a reason — buttery-soft fabric with a high waist that genuinely stays in place through the full Pilates mat repertoire. The compression is light to medium, which suits mat work and private session formats where proprioceptive feedback matters less than comfort over a long class. Fully opaque at every angle, which is non-negotiable in a method where you are frequently horizontal with an instructor present. The range of muted, earthy tones is exactly what the FP Movement customer expects from the brand — and it delivers on that aesthetic consistently.",
    affiliateUrl: "https://www.amazon.com/s?k=free+people+movement+good+karma+legging&tag=pilatescollective-20",
    tag: "Top Pick",
  },
  {
    rank: "02",
    name: "FP Movement Sunny Yoga Legging",
    price: "From $68",
    verdict: "Best for Flow/Mat",
    description:
      "The Sunny is lighter in weight than the Good Karma — designed for warmer studios and practitioners who run hot. The fabric is still fully opaque and provides enough structure to stay up without rolling, but the breathability is meaningfully better than the Good Karma in a heated environment. For studios that run their mat classes warm, or for summer practice, the Sunny is the correct FP Movement choice. The lighter construction does make it slightly less suitable for reformer work, where the extra contact with the carriage surface demands a more substantial fabric.",
    affiliateUrl: "https://www.amazon.com/s?k=free+people+movement+sunny+yoga+legging&tag=pilatescollective-20",
    tag: "Warm Studios",
  },
  {
    rank: "03",
    name: "FP Movement Barely There Bra",
    price: "From $48",
    verdict: "Best Light-Support Bra",
    description:
      "The Barely There is named precisely for what it feels like to wear — minimal structure, soft fabric, barely perceptible when you&apos;re working through a mat series. The support level is appropriate for Pilates, which is low-impact enough that a full sports bra is unnecessary and often uncomfortable during prone and supine exercises. The bra sits flat against the body without bulging at the back, which matters when you are lying on a reformer carriage. For practitioners transitioning from yoga or barre, the Barely There will feel immediately familiar.",
    affiliateUrl: "https://www.amazon.com/s?k=free+people+movement+barely+there+bra&tag=pilatescollective-20",
    tag: "Best Bra",
  },
  {
    rank: "04",
    name: "FP Movement Hot Shot Short",
    price: "From $48",
    verdict: "Best Short",
    description:
      "The 3-inch inseam Hot Shot Short is shorter than most Pilates practitioners are used to, but the cut is clean and non-restrictive through every hip and knee position in the mat repertoire. The fabric is compact — no excess material to bunch at the groin during teaser or roll-up variations. The waistband is wide and high enough to stay in position without rolling. FP Movement&apos;s aesthetic shows clearly in the Hot Shot — this is a short that looks deliberately designed rather than functional-by-accident, which is part of its appeal to the brand&apos;s core customer.",
    affiliateUrl: "https://www.amazon.com/s?k=free+people+movement+hot+shot+short&tag=pilatescollective-20",
    tag: "Best Short",
  },
  {
    rank: "05",
    name: "FP Movement Roll With It Hoodie",
    price: "From $88",
    verdict: "Best Post-Class Layer",
    description:
      "The Roll With It Hoodie has become the defining piece of the Pilates girl aesthetic for a reason: it is exactly the right weight, silhouette, and texture for the post-class transition. The oversized cut wears over any legging or short without looking sloppy, the fabric is soft enough to wear directly against post-workout skin, and the range of neutral tones photograph well — a consideration that is not irrelevant to a significant portion of the brand&apos;s customer base. As a functional product it is excellent; as a signal of the lifestyle associated with dedicated studio practice, it is unmatched.",
    affiliateUrl: "https://www.amazon.com/s?k=free+people+movement+roll+with+it+hoodie&tag=pilatescollective-20",
    tag: "Post-Class Layer",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Free People Movement for Pilates (2026): Best Pieces & Honest Review",
      "description": "The complete guide to Free People Movement activewear for Pilates — the best pieces that combine lifestyle aesthetic with genuine studio performance.",
      "url": "https://pilatescollectiveclub.com/blog/free-people-movement-pilates",
      "datePublished": "2026-05-14",
      "dateModified": "2026-05-14",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/roxana-popovici-hiHBILFNah4-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/free-people-movement-pilates" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Free People Movement for Pilates", "item": "https://pilatescollectiveclub.com/blog/free-people-movement-pilates" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is Free People Movement good for Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — with the honest caveat that FP Movement prioritises aesthetic and feel over technical performance. The Good Karma Legging and Barely There Bra are genuinely excellent for mat Pilates and private sessions. For high-intensity reformer classes or practitioners who want maximum compression and proprioceptive feedback, Splits59 or Varley will perform better. FP Movement is the correct choice if you want clothes that look and feel beautiful at a lower price than Lululemon." } },
        { "@type": "Question", "name": "FP Movement vs Lululemon for Pilates — which is better?", "acceptedAnswer": { "@type": "Answer", "text": "Different buyers. Lululemon's Align legging and FP Movement's Good Karma legging occupy similar softness territory, but Lululemon's construction is slightly more technical and their waistband engineering is more consistent across the range. FP Movement is $10-25 cheaper per piece on comparable items, has a warmer aesthetic, and the Roll With It Hoodie has no Lululemon equivalent. If you're choosing one brand, Lululemon wins on technical performance; FP Movement wins on lifestyle coherence and price." } },
        { "@type": "Question", "name": "Does FP Movement run true to size?", "acceptedAnswer": { "@type": "Answer", "text": "Generally yes for the leggings. The Good Karma and Sunny leggings run true to size — go with your usual activewear size. The Roll With It Hoodie runs large intentionally; if you want a fitted look, size down one. The Hot Shot Short runs small in the waist — if between sizes, size up." } },
        { "@type": "Question", "name": "Is Free People Movement worth the price for Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. At $68-88 for leggings, FP Movement is priced below Lululemon and Alo for comparable quality. The brand's aesthetic is strongly developed and the core pieces — Good Karma Legging, Barely There Bra, Roll With It Hoodie — are excellent for regular studio use. The value proposition is clearer than it is at Alo, where the premium is more strongly tied to brand positioning." } },
      ],
    },
  ],
};

export default function FreePeopleMovementPilatesPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>FP Movement</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Free People Movement<br /><span style={{ color: "#8b4a31" }}>for Pilates (2026): Honest Review</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 8 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Free People Movement is Free People&apos;s activewear sub-brand — and it occupies a specific niche in the Pilates market that neither Lululemon nor Alo fully serves. The aesthetic is softer, more romantic, and more lifestyle-oriented than the technical-luxe positioning of its main competitors. For a significant segment of the Pilates market, that is precisely what they want. The honest question is whether the clothes perform as well as they look — and the answer is mostly yes.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/roxana-popovici-hiHBILFNah4-unsplash.jpg" alt="Free People Movement activewear for Pilates — the brand that defines the pilates girl aesthetic" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-16 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Aesthetic vs function: the honest FP Movement position</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Free People Movement sits at a specific point on the spectrum between technical performance and lifestyle dressing. It is not Splits59 or Varley — brands where fabric engineering and studio-specific construction are the primary focus. It is also not a fashion brand making activewear as an afterthought. The pieces work. The Good Karma Legging is fully opaque, stays in place, and is comfortable through a full 55-minute class. But the design process starts from aesthetic and material feel, then arrives at function — rather than the reverse.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                For the practitioner who attends Pilates three times a week, posts occasionally about their practice, and wants clothes that look intentionally beautiful rather than sporting — FP Movement is the strongest option at this price point. For the practitioner who wants maximum technical performance, look at Splits59 or our main leggings guide instead.
              </p>
            </div>

            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 FP Movement Pieces · Pilates-Reviewed</p>
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
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>FP Movement pieces to approach with caution</h2>
              <ul className="space-y-3">
                {[
                  "Flowy or draped styles: FP Movement makes beautiful draped pieces that are not appropriate for reformer work. Excess fabric catches on equipment. On the mat they are fine; on any apparatus they create problems.",
                  "Mesh-insert leggings: Like most brands, FP Movement&apos;s mesh panels are not fully opaque. Any legging with mesh at the thigh or back of knee is a problem during the Pilates repertoire.",
                  "Linen-blend activewear: FP Movement periodically releases linen-blend pieces that look beautiful and perform poorly during exercise. These are for post-class wear or gentle stretching, not studio practice.",
                  "Very light bralettes: The lightest FP Movement bras provide minimal support and will not hold position during dynamic reformer exercises. Match the support level to the intensity of what you&apos;re doing.",
                ].map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm list-none" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    <span className="font-semibold shrink-0" style={{ color: "#8b4a31" }}>✕</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "Is Free People Movement good for Pilates?", a: "Yes — with the honest caveat that FP Movement prioritises aesthetic and feel over technical performance. The Good Karma Legging and Barely There Bra are genuinely excellent for mat Pilates and private sessions. For high-intensity reformer classes or practitioners who want maximum compression, Splits59 or Varley will perform better. FP Movement is the correct choice if you want clothes that look and feel beautiful at a lower price than Lululemon." },
                  { q: "FP Movement vs Lululemon for Pilates — which is better?", a: "Different buyers. Lululemon's construction is slightly more technical and their waistband engineering is more consistent across the range. FP Movement is $10-25 cheaper per piece on comparable items, has a warmer aesthetic, and the Roll With It Hoodie has no Lululemon equivalent. If you're choosing one brand, Lululemon wins on technical performance; FP Movement wins on lifestyle coherence and price." },
                  { q: "Does FP Movement run true to size?", a: "Generally yes for the leggings. The Good Karma and Sunny leggings run true to size — go with your usual activewear size. The Roll With It Hoodie runs large intentionally; if you want a fitted look, size down one. The Hot Shot Short runs small in the waist — if between sizes, size up." },
                  { q: "Is Free People Movement worth the price for Pilates?", a: "Yes. At $68-88 for leggings, FP Movement is priced below Lululemon and Alo for comparable quality. The Good Karma Legging, Barely There Bra, and Roll With It Hoodie are excellent for regular studio use. The value proposition is clearer than it is at Alo, where the premium is more strongly tied to brand positioning." },
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
                <ArticleCard title="Alo Yoga for Pilates (2026)" excerpt="Everything Alo makes that's worth buying for Pilates — and an honest look at what doesn't deliver." href="/blog/alo-yoga-pilates" category="Brand Guide" readTime="10 min read" date="May 2026" imageUrl="/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg" />
                <ArticleCard title="What to Wear to Pilates" excerpt="The definitive guide to dressing for reformer and mat Pilates — what works, what to avoid, and why it matters." href="/blog/what-to-wear-to-pilates" category="Style Guide" readTime="7 min read" date="May 2026" imageUrl="/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg" />
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
