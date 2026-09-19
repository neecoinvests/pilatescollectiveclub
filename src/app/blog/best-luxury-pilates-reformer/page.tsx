import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Luxury Pilates Reformers for Home Studios (2026)",
  description: "The world's finest home Pilates reformers — Gratz Industries, Balanced Body Studio, Peak Pilates MVe, Elina Pilates Elite RC, and BASI Systems compared for craftsmanship, performance, and investment value.",
  keywords: [
    "best luxury pilates reformer",
    "best high end pilates reformer home",
    "gratz pilates reformer",
    "balanced body studio reformer",
    "peak pilates mve reformer",
    "elina pilates elite reformer",
    "investment pilates reformer 2026",
    "professional grade pilates reformer home studio",
  ],
  openGraph: {
    title: "Best Luxury Pilates Reformers for Home Studios (2026)",
    description: "Gratz, Balanced Body Studio, Peak Pilates MVe, and Elina Pilates — the investment-grade reformers for the serious home studio.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-luxury-pilates-reformer",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-reformer-morning-light.png", width: 1200, height: 630, alt: "Best Luxury Pilates Reformers 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Luxury Pilates Reformers for Home Studios (2026)",
    description: "Gratz, Balanced Body, Peak Pilates MVe, and Elina Pilates — investment-grade reformers for the serious home studio.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-reformer-morning-light.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-luxury-pilates-reformer" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Gratz Industries Pilates Reformer",
    price: "From $5,200",
    verdict: "The Original",
    tag: "The Original",
    description: "Gratz Industries built the first modern Pilates reformer in New York under Joseph Pilates himself, and the design has changed only in refinement since. Every Gratz reformer is hand-built to order in New York using aircraft-grade aluminium, precision-tensioned springs calibrated to Pilates' original specifications, and hardwood components finished to a standard indistinguishable from fine furniture. Classical Pilates studios worldwide consider no other reformer. A Gratz is not an equipment purchase — it is an heirloom. Sold direct at gratzpilates.com, not available on Amazon.",
    affiliateUrl: "https://www.gratzpilates.com/collections/reformers",
  },
  {
    rank: "02",
    name: "Balanced Body Studio Reformer",
    price: "From $4,400",
    verdict: "Best Professional Studio Grade",
    tag: "Commercial Grade",
    description: "Balanced Body is the world's largest professional Pilates equipment manufacturer, supplying the majority of certified Pilates studios globally. Their Studio Reformer is built to withstand eight hours of daily commercial use — the frame is welded aircraft-grade aluminium, the carriage glides on precision ball-bearing wheels, and the spring bar accommodates the full range of Balanced Body spring sets. A commercial-grade machine sold into the home studio market with no compromises.",
    affiliateUrl: "https://www.amazon.com/s?k=balanced+body+studio+reformer+pilates&tag=pilatescollective-20",
  },
  {
    rank: "03",
    name: "Peak Pilates MVe Reformer",
    price: "From $4,295",
    verdict: "Best American Craftsmanship",
    tag: "American Precision",
    description: "Peak Pilates is a Colorado-based manufacturer whose MVe Reformer has earned a devoted following in premium home studios across North America. The machine uses a patented spring system that allows finer tension graduation than most competitors — critical for the progressive loading principles of Pilates. The aluminium extrusion frame is anodised to a quality that reads as architectural rather than athletic. Designed specifically for the demanding home practitioner.",
    affiliateUrl: "https://www.amazon.com/s?k=peak+pilates+mve+reformer&tag=pilatescollective-20",
  },
  {
    rank: "04",
    name: "Elina Pilates Elite RC Reformer",
    price: "From $4,200",
    verdict: "Best European Craftsmanship",
    tag: "European Luxury",
    description: "Elina Pilates is a Spanish manufacturer who has emerged as Europe's finest Pilates equipment house over the past decade. The Elite RC is their flagship reformer — constructed from anodised aluminium, upholstered in premium Alcantara, and fitted with high-tension springs manufactured in Germany. The carriage travel is among the smoothest of any reformer in this review. Used by elite studios in Madrid, London, and Paris, it is now available for the discerning home practitioner.",
    affiliateUrl: "https://www.amazon.com/s?k=elina+pilates+elite+rc+reformer&tag=pilatescollective-20",
  },
  {
    rank: "05",
    name: "BASI Systems Pilates Reformer",
    price: "From $3,500",
    verdict: "Best for Contemporary Pilates",
    tag: "Contemporary Standard",
    description: "BASI Systems was developed by Rael Isacowitz — one of the world's foremost Pilates educators — to support his contemporary Pilates methodology. The reformer integrates several design refinements not found in classical machines: a longer carriage travel for taller practitioners, a broader footbar range, and rope-and-pulley geometry optimised for contemporary exercise progressions. The preferred reformer of BASI-certified instructors worldwide. Sold direct at basisystems.com, not available on Amazon.",
    affiliateUrl: "https://basisystems.com/product-category/reformers/",
  },
  {
    rank: "06",
    name: "Merrithew V2 Max Reformer",
    price: "From $4,999",
    verdict: "Best Clinical Pedigree",
    tag: "Clinical Grade",
    description: "The V2 Max is Merrithew's professional reformer and the machine the STOTT PILATES method was built around. It runs a five-spring system with high-precision gradation, a wider carriage than the SPX line, and the patented retractable rope system that keeps the ropes out of the way between exercises. That combination is why it is found in hospitals, physiotherapy clinics and teacher-training centres rather than only in studios. At $4,999 it is priced against the Balanced Body Studio Reformer, and the choice between them comes down to whether you want Merrithew's rehabilitation orientation or Balanced Body's accessory ecosystem.",
    affiliateUrl: "https://www.amazon.com/s?k=merrithew+v2+max+reformer&tag=pilatescollective-20",
  },
];

const FAQS = [
  {
    q: "What is the difference between a luxury reformer and a premium reformer?",
    a: "Premium reformers (typically $800–$2,500) are built to rigorous residential standards with quality frames and reliable spring systems. Luxury reformers ($3,200–$5,500+) are built to commercial studio standards, hand-manufactured with aerospace-grade materials, precision-calibrated springs, and upholstery and finishing normally reserved for professional studio environments. Luxury machines typically carry lifetime frame warranties and are maintained and serviced over decades, not replaced.",
  },
  {
    q: "Is a Gratz reformer worth the price?",
    a: "For classical Pilates practitioners and collectors, yes. Gratz reformers are hand-built in New York to specifications inherited directly from Joseph Pilates, making them the only machines that can genuinely claim historical authenticity. They appreciate in value, can be restored indefinitely by Gratz's service team, and provide an exercise experience that contemporary machines — however technically refined — cannot replicate. A Gratz is a generational investment.",
  },
  {
    q: "What should I consider before buying a luxury Pilates reformer?",
    a: "Space: luxury reformers are typically 8–9 feet long and require 4+ feet of clearance on each end. Ceiling height: footwork in full extension requires 9+ feet for tall practitioners. Flooring: hardwood or stone is ideal; luxury reformers should not sit on deep-pile carpet. Budget for ongoing maintenance — annual spring replacement and carriage wheel servicing is standard practice for commercial-grade machines.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Best Luxury Pilates Reformers for Home Studios (2026)",
      description: "The world's finest home Pilates reformers — Gratz, Balanced Body Studio, Peak Pilates MVe, Elina Pilates, and BASI Systems compared for craftsmanship, performance, and investment value.",
      url: "https://pilatescollectiveclub.com/blog/best-luxury-pilates-reformer",
      datePublished: "2026-07-06",
      dateModified: "2026-07-06",
      image: "https://pilatescollectiveclub.com/pictures/stitch-reformer-morning-light.png",
      author: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com" },
      publisher: { "@type": "Organization", name: "Pilates Collective Club", logo: { "@type": "ImageObject", url: "https://pilatescollectiveclub.com/logo.png" } },
      mainEntityOfPage: "https://pilatescollectiveclub.com/blog/best-luxury-pilates-reformer",
    },
    {
      "@type": "ItemList",
      name: "Best Luxury Pilates Reformers for Home Studios",
      numberOfItems: PRODUCTS.length,
      itemListElement: PRODUCTS.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.name, url: p.affiliateUrl })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", position: 2, name: "Journal", item: "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", position: 3, name: "Best Luxury Pilates Reformers", item: "https://pilatescollectiveclub.com/blog/best-luxury-pilates-reformer" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function BestLuxuryPilatesReformerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>

        {/* Hero section */}
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Equipment</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Luxury Reformers</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Luxury Pilates Reformers<br /><span style={{ color: "#8b4a31" }}>for Home Studios (2026)</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated July 2026 · 11 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*This page contains affiliate links. We may earn a commission if you purchase through our links, at no extra cost to you. Note: luxury reformers are typically purchased directly from manufacturers — the Amazon links above will surface available search results and related products.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              At the summit of the Pilates equipment market sits a small number of machines built to a standard that has nothing to do with price sensitivity. Gratz, Balanced Body Studio, Peak Pilates MVe, and Elina Pilates each represent decades of manufacturing craft, precision engineering, and a commitment to the Pilates method that commercial activewear brands cannot replicate.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              These are machines built to last thirty years in commercial studio environments, now available to the serious home practitioner. They are not the first reformer most people buy — they are often the last.
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-reformer-morning-light.png" alt="Best Luxury Pilates Reformers 2026" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

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

            {/* Product cards */}
            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Luxury Reformers · Investment Grade</p>
              <div className="space-y-12">
                {PRODUCTS.map((p) => (
                  <div key={p.name}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-semibold" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{p.rank}</span>
                      <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{p.tag}</span>
                      <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>{p.verdict}</span>
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
                <ArticleCard title="Best Luxury Pilates Accessories" excerpt="Balanced Body Magic Circle, TriggerPoint GRID, Manduka cork props — premium small equipment for the serious practitioner." href="/blog/best-luxury-pilates-accessories" category="Equipment" readTime="9 min" imageUrl="/pictures/stitch-props-cork-ring.png" />
                <ArticleCard title="Best Premium Pilates Reformer" excerpt="The best reformers at the $800–$2,500 tier — Merrithew SPX, Align Pilates, and more for serious home practitioners." href="/blog/best-premium-pilates-reformer" category="Equipment" readTime="10 min" imageUrl="/pictures/stitch-reformers-aerial-row.png" />
              </div>
            </div>

          </div>
        </section>

        <CTASection title="Find Your Studio" subtitle="Discover the world's finest Pilates and reformer studios." />

      </main>
      <Footer />
    </>
  );
}
