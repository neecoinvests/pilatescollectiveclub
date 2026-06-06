import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Beyond Yoga for Pilates (2026): Brand Review & Best Pieces",
  description: "Beyond Yoga reviewed for Pilates — the Spacedye leggings, bras, and sets tested for reformer and mat performance. Is it the right brand for your studio wardrobe?",
  keywords: ["beyond yoga pilates", "beyond yoga review", "beyond yoga spacedye legging pilates", "best beyond yoga for pilates", "beyond yoga reformer pilates", "beyond yoga vs lululemon pilates", "beyond yoga activewear review 2026"],
  openGraph: {
    title: "Beyond Yoga for Pilates (2026): Brand Review & Best Pieces",
    description: "Beyond Yoga reviewed for Pilates — Spacedye leggings, bras, and sets tested for studio performance.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/beyond-yoga-pilates",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/samantha-sheppard-b8Q5fHBsyik-unsplash.jpg", width: 1200, height: 630, alt: "Beyond Yoga for Pilates — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beyond Yoga for Pilates (2026)",
    description: "Beyond Yoga reviewed for Pilates — tested and ranked.",
    images: ["https://pilatescollectiveclub.com/pictures/samantha-sheppard-b8Q5fHBsyik-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/beyond-yoga-pilates" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Beyond Yoga Spacedye Caught in the Midi High Waisted Legging",
    price: "From $98",
    verdict: "Best Beyond Yoga piece for Pilates",
    description:
      "The Spacedye Midi Legging is Beyond Yoga's defining product and the clearest expression of the brand's design philosophy: exceptional softness, inclusive sizing, and a distinctive spacedye pattern that photographs beautifully in any studio. The fabric — Beyond Yoga's proprietary Spacedye knit — is genuinely comparable in softness to Lululemon Nulu, with a slightly heavier weight that provides more smoothing compression without feeling restrictive. The high-waisted construction sits comfortably above the hip through all Pilates movement, and the flat inner seams prevent irritation during the sustained floor work of mat practice. Available in a comprehensive range of heathered colourways, none of which look cheap at any price point.",
    affiliateUrl: "https://www.amazon.com/s?k=beyond+yoga+spacedye+high+waist+legging&tag=pilatescollective-20",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "Beyond Yoga Spacedye Uplift Bra",
    price: "From $62",
    verdict: "Best bra for Beyond Yoga sets",
    description:
      "The Uplift Bra is the ideal companion piece to the Spacedye Legging for Pilates. The construction provides light-to-medium support — appropriate for the low-impact demands of reformer and mat practice — with a clean racerback profile that stays completely clear of the shoulder blades during scapular stabilisation exercises. The spacedye fabric matches exactly with the legging for a fully coordinated studio look, and the wide underband provides a smooth base that doesn't create pressure points during floor exercises. Removable pads allow adjustment for personal preference, and the bra's length is cut specifically to work at high-rise waistbands without a gap.",
    affiliateUrl: "https://www.amazon.com/s?k=beyond+yoga+spacedye+uplift+bra&tag=pilatescollective-20",
    tag: "Best Companion Piece",
  },
  {
    rank: "03",
    name: "Beyond Yoga Spacedye Caught in the Midi Short",
    price: "From $68",
    verdict: "Best Beyond Yoga short for Pilates",
    description:
      "The Spacedye Midi Short brings the same exceptional fabric to a biker short silhouette with an inseam length of approximately 5.5 inches — slightly shorter than the Lululemon Align 6-inch short, but cut to prevent ride-up during reformer movement through a snug but non-restrictive fit. The matching spacedye pattern to the full legging and bra makes this short an effective component in a coordinated three-piece wardrobe. The high-rise waistband is consistent with the rest of the Spacedye range: flat, wide, and reliably stationary through dynamic movement.",
    affiliateUrl: "https://www.amazon.com/s?k=beyond+yoga+spacedye+short+high+waist&tag=pilatescollective-20",
    tag: "Best Short",
  },
  {
    rank: "04",
    name: "Beyond Yoga Spacedye At Your Leisure High Waisted Flare Pant",
    price: "From $108",
    verdict: "Best for studio-to-street style",
    description:
      "The At Your Leisure Flare Pant occupies an interesting position in the Pilates wardrobe — it is genuinely appropriate for studio practice while functioning as convincing everyday wear. The high-rise, close-fitting upper transitions to a gentle flare below the knee that reads more as a fashion trouser than activewear from a distance. The Spacedye fabric provides the same excellent softness and moderate compression as the flagship legging. For practitioners who commute directly from work to the studio and want a single garment that works in both contexts, the flare pant is a practical and aesthetic solution.",
    affiliateUrl: "https://www.amazon.com/s?k=beyond+yoga+spacedye+flare+pant&tag=pilatescollective-20",
    tag: "Best Versatile",
  },
  {
    rank: "05",
    name: "Beyond Yoga Spacedye Slim Racerback Tank",
    price: "From $54",
    verdict: "Best top for Pilates",
    description:
      "Beyond Yoga's Slim Racerback Tank is the most functional top in the brand's range for Pilates use. The racerback construction keeps straps away from the shoulder blade area — relevant for exercises involving scapular movement and arm work on the reformer — while the slim-fit silhouette stays tucked through active movement without requiring a bodysuit. The Spacedye fabric breathes well and matches the legging range for a complete studio ensemble. The tank is cut slightly longer than most activewear tops, sitting reliably below the waistband of the high-rise legging through all spinal articulation.",
    affiliateUrl: "https://www.amazon.com/s?k=beyond+yoga+spacedye+racerback+tank&tag=pilatescollective-20",
    tag: "Best Top",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Beyond Yoga for Pilates (2026): Brand Review & Best Pieces",
      "description": "Beyond Yoga reviewed for Pilates — the Spacedye leggings, bras, and sets tested for reformer and mat performance.",
      "url": "https://pilatescollectiveclub.com/blog/beyond-yoga-pilates",
      "datePublished": "2026-05-21",
      "dateModified": "2026-05-21",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/samantha-sheppard-b8Q5fHBsyik-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/beyond-yoga-pilates" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Beyond Yoga for Pilates", "item": "https://pilatescollectiveclub.com/blog/beyond-yoga-pilates" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is Beyond Yoga good for Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — Beyond Yoga's Spacedye fabric is one of the softest and most comfortable options available for studio Pilates. The brand's inclusive sizing (XXS–3XL across most styles), consistent quality control, and the distinctive spacedye aesthetic have earned it a loyal following in the Pilates community. It sits slightly below Lululemon and Alo Yoga in premium performance, but ahead of most mid-market alternatives." } },
        { "@type": "Question", "name": "How does Beyond Yoga compare to Lululemon for Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "Both brands produce excellent Pilates apparel. Lululemon Align Nulu fabric has a slight edge in overall softness. Beyond Yoga Spacedye has a slight advantage in size inclusivity and offers better value at comparable price points. The choice often comes down to aesthetic preference — Lululemon's clean minimal look versus Beyond Yoga's distinctive spacedye texture." } },
        { "@type": "Question", "name": "Does Beyond Yoga run true to size?", "acceptedAnswer": { "@type": "Answer", "text": "Beyond Yoga generally runs true to size. The Spacedye fabric stretches enough that most people do well in their usual size. If you prefer a firmer compression fit, size down one. The brand's website includes detailed size charts with measurements for each style." } },
      ],
    },
  ],
};

export default function BeyondYogaPilatesPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Apparel</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Beyond Yoga<br /><span style={{ color: "#8b4a31" }}>for Pilates: Brand Review</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 8 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Beyond Yoga is one of the most underrepresented brands in the Pilates conversation — surprising, given that its Spacedye fabric is among the most genuinely soft options available for studio practice, and its size range (XXS to 3XL across most styles) addresses a significant gap left by brands like Alo Yoga and Splits59. The brand was acquired by Levi Strauss in 2021 and has continued to expand without meaningfully compromising its original quality. For practitioners who find Lululemon too minimal aesthetically or want more size options without compromising fabric quality, Beyond Yoga warrants close attention.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/samantha-sheppard-b8Q5fHBsyik-unsplash.jpg" alt="Beyond Yoga Spacedye activewear reviewed for Pilates practice" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-12 mt-4 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What is Spacedye fabric?</h2>
              <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Beyond Yoga&apos;s Spacedye is a proprietary knit fabric that creates a subtle, heathered colour variation through a yarn-dyeing process that applies colour before knitting rather than after. The result is a depth and texture that reads as distinctly premium compared to standard solid-colour activewear. The fabric itself is a blend of polyester and elastane that delivers four-way stretch, moderate compression, and exceptional softness — comparable in touch to Lululemon Nulu but with a slightly heavier weight. It is opaque through all studio movement and maintains its shape and colour through consistent washing.
              </p>
            </div>

            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Best Pieces · Studio-Tested</p>
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

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "Is Beyond Yoga good for Pilates?", a: "Yes — Beyond Yoga's Spacedye fabric is one of the softest and most comfortable options available for studio Pilates. The brand's inclusive sizing, consistent quality control, and the distinctive spacedye aesthetic have earned it a loyal following in the Pilates community." },
                  { q: "How does Beyond Yoga compare to Lululemon for Pilates?", a: "Both brands produce excellent Pilates apparel. Lululemon Align Nulu fabric has a slight edge in overall softness. Beyond Yoga Spacedye has a slight advantage in size inclusivity and offers better value at comparable price points. The choice often comes down to aesthetic preference." },
                  { q: "Does Beyond Yoga run true to size?", a: "Beyond Yoga generally runs true to size. The Spacedye fabric stretches enough that most people do well in their usual size. If you prefer a firmer compression fit, size down one. The brand's website includes detailed size charts with measurements for each style." },
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
                <ArticleCard title="Best Pilates Leggings" excerpt="Five studio-tested leggings including Beyond Yoga, ranked across all price points." href="/blog/best-pilates-leggings" category="Apparel" readTime="9 min read" date="May 2026" imageUrl="/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg" />
                <ArticleCard title="Lululemon Align Review" excerpt="An honest review of the most popular Pilates legging — is it worth it?" href="/blog/lululemon-align-review" category="Brand Review" readTime="10 min read" date="May 2026" imageUrl="/pictures/roxana-popovici-2QeonB1SdQk-unsplash.jpg" />
                <ArticleCard title="Best Pilates Sets" excerpt="Six coordinated sets — see how Beyond Yoga's Spacedye set compares." href="/blog/best-pilates-sets" category="Apparel" readTime="8 min read" date="May 2026" imageUrl="/pictures/roxana-popovici-cZ0WYsBFHhs-unsplash.jpg" />
                <ArticleCard title="Best Pilates Bodysuits" excerpt="One-piece options for Pilates practice — an alternative to Beyond Yoga's legging-led line." href="/blog/best-pilates-bodysuits" category="Apparel" readTime="8 min read" date="May 2026" imageUrl="/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best Pilates studios in Paris…" />
      </main>
      <Footer />
    </>
  );
}
