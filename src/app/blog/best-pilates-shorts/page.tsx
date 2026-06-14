import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Shorts (2026): For Reformer, Mat & Studio — Tested & Ranked",
  description: "The best shorts for Pilates — biker shorts, compression options, and what men should wear, tested for reformer coverage, mat grip, and studio comfort.",
  openGraph: {
    title: "Best Pilates Shorts (2026): Reformer-Tested & Ranked",
    description: "Instructors need to see your knee and hip alignment. Here's what the best-dressed reformer regulars are wearing.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-shorts",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-retail-activewear.png", width: 1200, height: 630, alt: "Best Pilates Shorts — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Shorts (2026): Reformer-Tested",
    description: "The best shorts for Pilates — biker shorts and compression options ranked honestly.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-retail-activewear.png"],
  },
  keywords: ["best pilates shorts", "pilates shorts", "biker shorts pilates", "reformer pilates shorts", "best shorts for pilates class", "pilates biker shorts", "pilates workout shorts", "compression shorts pilates", "pilates shorts 2026", "studio pilates shorts"],
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-pilates-shorts" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Lululemon Align High-Rise Short",
    price: "From $68",
    verdict: "Best biker short",
    tag: "Editor's Pick",
    description:
      "The Align fabric is the softest thing in activewear, and the shorts version delivers all the properties that make the legging famous — buttery compression, excellent stretch, and absolute opacity through the full movement range. The 6-inch inseam provides full reformer coverage without the restriction of a legging. Instructors get clear sightlines to the hip and knee alignment, which is the point.",
    affiliateUrl: "https://www.amazon.com/s?k=lululemon+align+high+rise+short&tag=pilatescollective-20",
  },
  {
    rank: "02",
    name: "Alo Yoga Airbrush Short",
    price: "From $62",
    verdict: "Best for studio aesthetics",
    tag: "Studio Favourite",
    description:
      "The Airbrush short is a boutique studio staple for good reason. The high-waist sculpted design creates a clean silhouette from footwork to standing work, the compression is consistent and non-restrictive, and the 5-inch inseam keeps coverage during all seated and supine work. Available in an extensive colour range including the neutrals that define the reformer studio look.",
    affiliateUrl: "https://www.amazon.com/s?k=alo+yoga+airbrush+short&tag=pilatescollective-20",
  },
  {
    rank: "03",
    name: "Splits59 Airweight Short",
    price: "From $88",
    verdict: "Best premium option",
    tag: "Premium Pick",
    description:
      "Splits59 was designed with Pilates and barre in mind, and the Airweight Short reflects that. Featherlight fabric, four-way stretch, and a wide waistband that sits flat without rolling. The most Pilates-specific short in this roundup — and the brand most Pilates instructors on the US West Coast actually wear.",
    affiliateUrl: "https://www.amazon.com/s?k=splits59+shorts+pilates&tag=pilatescollective-20",
  },
  {
    rank: "04",
    name: "Vuori Daily Short",
    price: "From $68",
    verdict: "Best for men",
    tag: "Men's Pick",
    description:
      "Most Pilates apparel brands produce almost nothing usable for men. The Vuori Daily Short is the exception — a 5-inch inseam in a soft, four-way stretch fabric with enough compression to stay in place through all reformer work without being uncomfortably tight. Clean design, no logos, and a colour range that fits the reformer studio environment.",
    affiliateUrl: "https://www.amazon.com/s?k=vuori+daily+short&tag=pilatescollective-20",
  },
  {
    rank: "05",
    name: "CRZ YOGA Butterluxe Biker Short",
    price: "From $28",
    verdict: "Best budget option",
    tag: "Best Value",
    description:
      "CRZ YOGA produces some of the best Lululemon alternatives on the market, and the Butterluxe biker short is a genuine contender at a fraction of the price. The fabric drape mimics Align's Nulu well, opacity is excellent, and the high-rise waistband is stable through all mat work. For those who want the biker short experience without the Lululemon price, this is the obvious choice.",
    affiliateUrl: "https://www.amazon.com/s?k=crz+yoga+butterluxe+biker+short&tag=pilatescollective-20",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://pilatescollectiveclub.com/blog/best-pilates-shorts/#article",
      "headline": "Best Pilates Shorts (2026): For Reformer, Mat & Studio",
      "description": "The best shorts for Pilates — biker shorts, flowy shorts, and compression options tested for reformer coverage, mat grip, and studio comfort.",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-retail-activewear.png", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "@id": "https://pilatescollectiveclub.com/#organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "@id": "https://pilatescollectiveclub.com/#organization", "name": "Pilates Collective Club", "logo": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/pcc-logo.png" } },
      "datePublished": "2026-06-01",
      "dateModified": "2026-06-14",
      "url": "https://pilatescollectiveclub.com/blog/best-pilates-shorts",
      "mainEntityOfPage": "https://pilatescollectiveclub.com/blog/best-pilates-shorts",
      "articleSection": "Apparel Guide",
      "inLanguage": "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Pilates Shorts", "item": "https://pilatescollectiveclub.com/blog/best-pilates-shorts" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Should you wear shorts or leggings to Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "Both work, but shorts give your instructor a direct view of your knee and hip alignment during footwork. If you run warm, shorts are considerably more comfortable in reformer class. Biker shorts with a 5–6 inch inseam are the most popular choice at boutique reformer studios globally." } },
        { "@type": "Question", "name": "What length shorts are best for Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "5–6 inch inseam biker shorts are the reformer studio standard. Shorter than 4 inches risks exposure during supine exercises. Longer than 7 inches restricts the visual feedback instructors need on knee tracking and hip position." } },
        { "@type": "Question", "name": "Can you wear loose shorts to Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "Not recommended. Loose shorts ride up in supine and inversion exercises, and instructors can't assess alignment through loose fabric. Form-fitting compression shorts or biker shorts are the practical choice." } },
      ],
    },
  ],
};

export default function BestPilatesShortsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Apparel Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Shorts</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Pilates Shorts<br /><span style={{ color: "#8b4a31" }}>(2026): Tested & Ranked</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated June 2026 · 7 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Shorts give your instructor something leggings don&apos;t — a direct view of your knee tracking, hip alignment, and thigh engagement through every exercise. At most boutique reformer studios, biker shorts have largely displaced leggings as the preferred bottom. This guide covers the five best options, from the gold-standard Lululemon Align short to the value champion that costs a fraction of the price.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-retail-activewear.png" alt="Pilates activewear shorts in studio retail display" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
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
                  <a href={p.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow" style={{ display: "block", fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "10px 14px", whiteSpace: "nowrap", flexShrink: 0 }}>Buy →</a>
                </div>
              ))}
            </div>

            <div className="mb-16 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What makes a great Pilates short</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { heading: "Inseam length", body: "5–6 inches is the sweet spot. Too short and you risk exposure in supine work; too long and the instructor loses the visual reference point at the knee and hip." },
                  { heading: "Compression level", body: "Enough compression to stay in place during dynamic movement, not so much that circulation is restricted. Mid-compression is the reformer studio standard." },
                  { heading: "Opacity", body: "Test thoroughly before class. Hold the fabric up to light. Reformer studio lighting is often bright, and a short that looks opaque in a changing room may not hold up." },
                  { heading: "Waistband stability", body: "The waistband must not roll or slip during footwork, standing work, or the abdominal series. Wide, flat waistbands with elastane outperform narrow, folded waistbands." },
                ].map((item) => (
                  <div key={item.heading} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.heading}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Shorts · Studio-Tested</p>
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
                  { q: "Should you wear shorts or leggings to Pilates?", a: "Both work, but shorts give your instructor a direct view of your knee and hip alignment during footwork. If you run warm, shorts are considerably more comfortable in reformer class. Biker shorts with a 5–6 inch inseam are the most popular choice at boutique reformer studios globally." },
                  { q: "What length shorts are best for Pilates?", a: "5–6 inch inseam biker shorts are the reformer studio standard. Shorter than 4 inches risks exposure during supine exercises. Longer than 7 inches restricts the visual feedback instructors need on knee tracking and hip position." },
                  { q: "Can you wear loose shorts to Pilates?", a: "Not recommended. Loose shorts ride up in supine and inversion exercises, and instructors can't assess alignment through loose fabric. Form-fitting compression shorts or biker shorts are the practical choice." },
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
                <ArticleCard title="Best Pilates Sports Bra (2026)" excerpt="Coverage, support, and studio-ready style — the bras tested for reformer and mat practice." href="/blog/best-pilates-sports-bra" category="Apparel" readTime="8 min read" date="June 2026" imageUrl="/pictures/stitch-studio-round-mirror.png" />
                <ArticleCard title="What to Wear to Pilates" excerpt="The complete guide to choosing the right clothes for studio and reformer classes." href="/blog/what-to-wear-to-pilates" category="Guide" readTime="6 min read" date="May 2026" imageUrl="/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg" />
              </div>
            </div>

          </div>
        </section>

        <CTASection title="Find the best Pilates studios near you" subtitle="Our city guides cover the top reformer studios in 50+ cities worldwide." />
      </main>
      <Footer />
    </>
  );
}
