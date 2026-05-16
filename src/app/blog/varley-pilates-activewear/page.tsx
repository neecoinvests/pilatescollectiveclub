import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Varley for Pilates (2026): Best Pieces for the Boutique Studio | Pilates Collective Club",
  description: "The Varley Reeves Legging, Stratford Bra, and Paloma Tank reviewed for Pilates — the British boutique brand trusted in London, Paris, and Zurich studio circles.",
  keywords: ["varley pilates", "varley for pilates", "varley reeves legging pilates", "varley stratford bra pilates", "varley activewear review", "varley vs lululemon pilates", "varley vs alo pilates", "varley boutique studio", "best varley pilates pieces", "varley pilates review 2026"],
  openGraph: {
    title: "Varley for Pilates (2026): Best Pieces for the Boutique Studio",
    description: "The best Varley pieces for Pilates — honest review of the brand that defines the boutique studio aesthetic.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/varley-pilates-activewear",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/logan-weaver-lgnwvr-u76Gd0hP5w4-unsplash.jpg", width: 1200, height: 630, alt: "Varley for Pilates — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Varley for Pilates (2026): Best Pieces",
    description: "The best Varley pieces for Pilates — honest review of the boutique studio brand.",
    images: ["https://pilatescollectiveclub.com/pictures/logan-weaver-lgnwvr-u76Gd0hP5w4-unsplash.jpg"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/blog/varley-pilates-activewear",
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Varley Reeves High Waist Legging",
    price: "From $120",
    verdict: "Best Varley legging for Pilates",
    description:
      "The Reeves is Varley&apos;s most Pilates-appropriate legging — high waist, minimal seaming, and their signature LUXE-fit fabric which achieves a similar buttery quality to the Lululemon Align while providing marginally more compression. Fully opaque at every angle, including deep hip flexion on the reformer. The waistband is one of the most stable in the premium category — flat-edged construction that sits cleanly against the skin without digging during roll-ups or the hundred. The tonal aesthetic — available in muted, sophisticated neutrals — is exactly what the boutique studio environment demands.",
    affiliateUrl: "https://www.amazon.com/s?k=varley+reeves+high+waist+legging&tag=matchaspot-20",
    tag: "Top Pick",
  },
  {
    rank: "02",
    name: "Varley Stratford Bra Top",
    price: "From $75",
    verdict: "Best Varley bra for studio wear",
    description:
      "The Stratford bra top is the piece that made Varley recognisable in boutique studios — a medium-support, wide-strap design that provides genuine hold for reformer movement while looking sophisticated enough for the luxury studio context. The thick straps at the back create a distinctive aesthetic detail that is also functionally important: they sit cleanly on the shoulders without sliding during overhead arm work. The medium support level is exactly appropriate for Pilates — secure without the compression that restricts movement during lying-based exercises.",
    affiliateUrl: "https://www.amazon.com/s?k=varley+stratford+bra+top&tag=matchaspot-20",
    tag: "Brand Signature",
  },
  {
    rank: "03",
    name: "Varley Paloma Top",
    price: "From $88",
    verdict: "Best Varley fitted tank",
    description:
      "The Paloma is Varley&apos;s fitted tank — longer than most activewear tanks, with a hem that genuinely stays in place through the entire Pilates repertoire. The extra length is deliberate: Varley understands that their customer is on a reformer carriage, not standing upright. The LUXE-fit fabric has the same comfortable, soft quality as the Reeves legging. Worn over the Stratford bra, the Paloma tank creates one of the most complete and functional Pilates studio outfits available. The clean, minimal aesthetic means no external hardware, pockets, or panels that could interfere with equipment.",
    affiliateUrl: "https://www.amazon.com/s?k=varley+paloma+long+tank+top&tag=matchaspot-20",
    tag: "Best Tank",
  },
  {
    rank: "04",
    name: "Varley Hinsdale Legging (7/8 length)",
    price: "From $110",
    verdict: "Best Varley legging for warmer studios",
    description:
      "The Hinsdale uses Varley&apos;s lighter Move-Fit fabric — designed for movement with less compression and better breathability than the LUXE-fit Reeves. For practitioners in heated studios or those who overheat during dynamic reformer classes, the Hinsdale provides the same Varley aesthetic and waistband quality with meaningfully more airflow. Still fully opaque. The 7/8 length hits at the mid-calf — a proportion that works well on both the reformer and in the streets post-class. A secondary legging purchase after the Reeves, not a replacement.",
    affiliateUrl: "https://www.amazon.com/s?k=varley+hinsdale+legging&tag=matchaspot-20",
    tag: "Warm Studios",
  },
  {
    rank: "05",
    name: "Varley Oatlands Pullover",
    price: "From $95",
    verdict: "Best Varley layer for post-class",
    description:
      "Varley understands the transition problem — from reformer class to the rest of the day — better than most activewear brands. The Oatlands pullover sits cleanly over a bra and legging without looking like activewear. The fabric is warm enough for London or New York winters while remaining breathable enough to wear immediately after a session. The cut is designed to wear over activewear specifically — slightly longer in the back, with a silhouette that accommodates legging and bra without bunching. For practitioners who go directly from class to other commitments, this is one of the most practical pieces in the Varley range.",
    affiliateUrl: "https://www.amazon.com/s?k=varley+oatlands+pullover&tag=matchaspot-20",
    tag: "Post-Class Layer",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Varley for Pilates (2026): Best Pieces for the Boutique Studio",
      "description": "The complete guide to Varley activewear for Pilates — honest review of the brand's best and weakest pieces for the boutique reformer environment.",
      "url": "https://pilatescollectiveclub.com/blog/varley-pilates-activewear",
      "datePublished": "2026-05-14",
      "dateModified": "2026-05-14",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/logan-weaver-lgnwvr-u76Gd0hP5w4-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/varley-pilates-activewear" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Varley for Pilates", "item": "https://pilatescollectiveclub.com/blog/varley-pilates-activewear" },
      ],
    },
  {
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Is Varley worth the price for Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — with the caveat that you buy the right pieces. The Reeves legging and Stratford bra are genuinely premium products with Pilates-specific design decisions. The durability is excellent — Varley pieces last through intensive studio use with proper care. The brand's less functional pieces (relaxed fits, mesh panels) are not worth the price for Pilates specifically. Buy selectively." } },
      { "@type": "Question", "name": "How does Varley sizing compare to Lululemon?", "acceptedAnswer": { "@type": "Answer", "text": "Varley generally runs true to size across their legging range. The Reeves and Hinsdale both have slightly more compression than the equivalent Lululemon Align at the same size, which most practitioners find appropriate. If you are between sizes and usually size up in Lululemon, stay true to size in Varley. The waistband does not have significant give, so sizing accurately is important." } },
      { "@type": "Question", "name": "Where can I buy Varley?", "acceptedAnswer": { "@type": "Answer", "text": "Varley is available through their own website, Net-a-Porter, Selfridges, Bloomingdale's, and selected boutique activewear retailers. Amazon carries some Varley pieces but the selection is inconsistent and not always current season. For the full range including new arrivals, the brand's own website is the most reliable source." } },
      { "@type": "Question", "name": "Varley vs Alo vs Lululemon — which brand should I buy first?", "acceptedAnswer": { "@type": "Answer", "text": "For most practitioners starting a studio wardrobe: start with Lululemon Align (best value, widest availability, proven performance). Add Alo Airbrush if you prefer firmer compression. Add Varley if you want the European boutique aesthetic or find Alo's colourways too saturated. Varley is typically the third brand in a practitioner's wardrobe rather than the first, but those who start with it rarely leave it." } }
    ]
  },
  ],
};

export default function VarleyPilatesPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Varley</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Varley for Pilates (2026):<br /><span style={{ color: "#8b4a31" }}>The Boutique Studio Brand Reviewed</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 9 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Varley was founded in London in 2012 with a specific vision: activewear designed for the boutique fitness environment — Pilates, barre, and yoga studios where the aesthetic matters as much as the performance. The brand has earned its position at the premium end of the Pilates wardrobe through consistent quality and a deep understanding of the specific demands the method places on clothing. This guide covers the pieces worth buying and the honest limitations of the brand.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/logan-weaver-lgnwvr-u76Gd0hP5w4-unsplash.jpg" alt="Varley Reeves legging and Stratford bra for Pilates — boutique studio activewear brand reviewed" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-16 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What makes Varley different from Lululemon and Alo</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Varley occupies a specific market position: more sophisticated in aesthetic than Lululemon, more European in sensibility than Alo. The brand is British-founded and their colour palette reflects it — muted, tonal, understated rather than the saturated hues that Alo uses. In the boutique Pilates studios of Mayfair, Paris, and Zurich, Varley is the most common premium brand. In New York, it competes directly with Alo.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The functional differentiator is their approach to fabric — the LUXE-fit fabric used across their core Pilates range achieves a specific balance of softness and structure that positions the brand between the pure softness of the Lululemon Align and the firmer compression of the Alo Airbrush. For practitioners who find the Align slightly too unstructured and the Airbrush slightly too firm, Varley is the natural choice.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                {[
                  { heading: "vs Lululemon", body: "More structured than the Align. Similar softness to the Align Bra. More sophisticated colour palette. Higher price point for equivalent pieces." },
                  { heading: "vs Alo Yoga", body: "Less compression than the Airbrush. More European aesthetic. Better post-class transition pieces. More neutral colourways." },
                  { heading: "vs Vuori", body: "More Pilates-specific design intent. Less unisex appeal. Higher price. Cleaner studio aesthetic, less street-casual." },
                ].map((item) => (
                  <div key={item.heading} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.heading}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Varley Pieces · Studio-Tested</p>
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
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Varley pieces that don&apos;t suit Pilates</h2>
              <ul className="space-y-3">
                {[
                  "Varley relaxed-fit joggers: Beautiful for everything except reformer Pilates. Loose fabric catches on equipment and obscures instructor observation of leg alignment.",
                  "Varley mesh-panel leggings: The ventilation panels reduce opacity — a problem in any Pilates exercise that involves the instructor observing hip or thigh alignment.",
                  "Varley oversized zip-through (for class): Fine for pre and post. Too voluminous for wearing during a reformer session. Remove before stepping onto the machine.",
                  "Any Varley piece with exterior hardware (zip pulls, metal toggles): These catch on reformer straps and footbar surfaces. Stick to the clean, hardware-free pieces for in-class wear.",
                ].map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    <span className="font-semibold" style={{ color: "#8b4a31" }}>✕</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "Is Varley worth the price for Pilates?", a: "Yes — with the caveat that you buy the right pieces. The Reeves legging and Stratford bra are genuinely premium products with Pilates-specific design decisions. The durability is excellent — Varley pieces last through intensive studio use with proper care. The brand's less functional pieces (relaxed fits, mesh panels) are not worth the price for Pilates specifically. Buy selectively." },
                  { q: "How does Varley sizing compare to Lululemon?", a: "Varley generally runs true to size across their legging range. The Reeves and Hinsdale both have slightly more compression than the equivalent Lululemon Align at the same size, which most practitioners find appropriate. If you are between sizes and usually size up in Lululemon, stay true to size in Varley. The waistband does not have significant give, so sizing accurately is important." },
                  { q: "Where can I buy Varley?", a: "Varley is available through their own website, Net-a-Porter, Selfridges, Bloomingdale's, and selected boutique activewear retailers. Amazon carries some Varley pieces but the selection is inconsistent and not always current season. For the full range including new arrivals, the brand's own website is the most reliable source." },
                  { q: "Varley vs Alo vs Lululemon — which brand should I buy first?", a: "For most practitioners starting a studio wardrobe: start with Lululemon Align (best value, widest availability, proven performance). Add Alo Airbrush if you prefer firmer compression. Add Varley if you want the European boutique aesthetic or find Alo's colourways too saturated. Varley is typically the third brand in a practitioner's wardrobe rather than the first, but those who start with it rarely leave it." },
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
                <ArticleCard title="Alo Yoga for Pilates" excerpt="The best Alo pieces for Pilates — Airbrush legging, Airlift bra, Alo Moves, and what to skip." href="/blog/alo-yoga-pilates" category="Brand Guide" readTime="10 min read" date="May 2026" imageUrl="/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg" />
                <ArticleCard title="Lululemon for Pilates" excerpt="The best Lululemon pieces for studio and reformer Pilates — Align legging, Align bra, and what to avoid." href="/blog/lululemon-pilates" category="Brand Guide" readTime="10 min read" date="May 2026" imageUrl="/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg" />
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
