import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Luxury Pilates Reformers for Home Studios (2026) | Pilates Collective Club",
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
    description: "Gratz Industries built the first modern Pilates reformer in New York under Joseph Pilates himself, and the design has changed only in refinement since. Every Gratz reformer is hand-built to order in New York using aircraft-grade aluminium, precision-tensioned springs calibrated to Pilates' original specifications, and hardwood components finished to a standard indistinguishable from fine furniture. Classical Pilates studios worldwide consider no other reformer. A Gratz is not an equipment purchase — it is an heirloom.",
    affiliateUrl: "https://www.amazon.com/s?k=gratz+pilates+reformer+classical&tag=pilatescollective-20",
    tag: "The Original",
  },
  {
    rank: "02",
    name: "Balanced Body Studio Reformer",
    price: "From $4,500",
    verdict: "Best Professional Studio Grade",
    description: "Balanced Body is the world's largest professional Pilates equipment manufacturer, supplying the majority of certified Pilates studios globally. Their Studio Reformer is built to withstand eight hours of daily commercial use — the frame is welded aircraft-grade aluminium, the carriage glides on precision ball-bearing wheels, and the spring bar accommodates the full range of Balanced Body spring sets. A commercial-grade machine sold into the home studio market with no compromises.",
    affiliateUrl: "https://www.amazon.com/s?k=balanced+body+studio+reformer+pilates&tag=pilatescollective-20",
    tag: "Commercial Grade",
  },
  {
    rank: "03",
    name: "Peak Pilates MVe Reformer",
    price: "From $3,800",
    verdict: "Best American Craftsmanship",
    description: "Peak Pilates is a Colorado-based manufacturer whose MVe Reformer has earned a devoted following in premium home studios across North America. The machine uses a patented spring system that allows finer tension graduation than most competitors — critical for the progressive loading principles of Pilates. The aluminium extrusion frame is anodised to a quality that reads as architectural rather than athletic. Designed specifically for the demanding home practitioner.",
    affiliateUrl: "https://www.amazon.com/s?k=peak+pilates+mve+reformer&tag=pilatescollective-20",
    tag: "American Precision",
  },
  {
    rank: "04",
    name: "Elina Pilates Elite RC Reformer",
    price: "From $4,200",
    verdict: "Best European Craftsmanship",
    description: "Elina Pilates is a Spanish manufacturer who has emerged as Europe's finest Pilates equipment house over the past decade. The Elite RC is their flagship reformer — constructed from anodised aluminium, upholstered in premium Alcantara, and fitted with high-tension springs manufactured in Germany. The carriage travel is among the smoothest of any reformer in this review. Used by elite studios in Madrid, London, and Paris, it is now available for the discerning home practitioner.",
    affiliateUrl: "https://www.amazon.com/s?k=elina+pilates+elite+rc+reformer&tag=pilatescollective-20",
    tag: "European Luxury",
  },
  {
    rank: "05",
    name: "BASI Systems Pilates Reformer",
    price: "From $3,500",
    verdict: "Best for Contemporary Pilates",
    description: "BASI Systems was developed by Rael Isacowitz — one of the world's foremost Pilates educators — to support his contemporary Pilates methodology. The reformer integrates several design refinements not found in classical machines: a longer carriage travel for taller practitioners, a broader footbar range, and rope-and-pulley geometry optimised for contemporary exercise progressions. The preferred reformer of BASI-certified instructors worldwide.",
    affiliateUrl: "https://www.amazon.com/s?k=basi+systems+pilates+reformer&tag=pilatescollective-20",
    tag: "Contemporary Standard",
  },
  {
    rank: "06",
    name: "Stott Pilates SPX Max Plus Reformer",
    price: "From $3,200",
    verdict: "Best Premium Entry Point",
    description: "Merrithew's SPX Max Plus is the most accessible machine on this list while still delivering professional studio performance. The reformer features a five-spring system, adjustable footbar with four positions, and the Merrithew proprietary rope-and-pulley system that has earned the trust of hospitals, physical therapy clinics, and elite training facilities globally. For practitioners entering the luxury reformer market, the SPX Max Plus is the most considered starting point.",
    affiliateUrl: "https://www.amazon.com/s?k=stott+pilates+spx+max+reformer+merrithew&tag=pilatescollective-20",
    tag: "Premium Entry",
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
      numberOfItems: 6,
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
      mainEntity: [
        { "@type": "Question", name: "What is the difference between a luxury reformer and a premium reformer?", acceptedAnswer: { "@type": "Answer", text: "Premium reformers (typically $800–$2,500) are built to rigorous residential standards with quality frames and reliable spring systems. Luxury reformers ($3,200–$5,500+) are built to commercial studio standards, hand-manufactured with aerospace-grade materials, precision-calibrated springs, and upholstery and finishing normally reserved for professional studio environments. Luxury machines typically carry lifetime frame warranties and are maintained and serviced over decades, not replaced." } },
        { "@type": "Question", name: "Is a Gratz reformer worth the price?", acceptedAnswer: { "@type": "Answer", text: "For classical Pilates practitioners and collectors, yes. Gratz reformers are hand-built in New York to specifications inherited directly from Joseph Pilates, making them the only machines that can genuinely claim historical authenticity. They appreciate in value, can be restored indefinitely by Gratz's service team, and provide an exercise experience that contemporary machines — however technically refined — cannot replicate. A Gratz is a generational investment." } },
        { "@type": "Question", name: "What should I consider before buying a luxury Pilates reformer?", acceptedAnswer: { "@type": "Answer", text: "Space: luxury reformers are typically 8–9 feet long and require 4+ feet of clearance on each end. Ceiling height: footwork in full extension requires 9+ feet for tall practitioners. Flooring: hardwood or stone is ideal; luxury reformers should not sit on deep-pile carpet. Access: most luxury machines ship in multiple pieces and require professional assembly. Budget for ongoing maintenance — annual spring replacement and carriage wheel servicing is standard practice for commercial-grade machines." } },
      ],
    },
  ],
};

export default function BestLuxuryPilatesReformerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9a9490" }}>Equipment</span>
              <span style={{ color: "#d4c5b5", fontSize: "10px" }}>·</span>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 400, color: "#b5a99a" }}>11 min read</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 400, lineHeight: 1.2, color: "#1a1714", marginBottom: "24px" }}>
              Best Luxury Pilates Reformers for Home Studios (2026)
            </h1>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "17px", fontWeight: 300, color: "#4a4540", lineHeight: 1.8, marginBottom: "16px" }}>
              At the summit of the Pilates equipment market sits a small number of machines built to a standard that has nothing to do with price sensitivity. Gratz, Balanced Body Studio, Peak Pilates MVe, and Elina Pilates each represent decades of manufacturing craft, precision engineering, and a commitment to the Pilates method that commercial activewear brands cannot replicate.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "17px", fontWeight: 300, color: "#4a4540", lineHeight: 1.8, marginBottom: "20px" }}>
              These are machines built to last thirty years in commercial studio environments, now available to the serious home practitioner. They are not the first reformer most people buy — they are often the last.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "14px", fontWeight: 300, color: "#9a9490", lineHeight: 1.7, borderLeft: "2px solid #d4c5b5", paddingLeft: "16px" }}>
              This page contains affiliate links. We may earn a commission if you purchase through our links, at no extra cost to you. Note: luxury reformers are typically purchased directly from manufacturers — the Amazon links above will surface available search results and related products.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-3xl mx-auto">
            <div style={{ position: "relative", height: "420px", borderRadius: "4px", overflow: "hidden" }}>
              <Image src="/pictures/stitch-reformer-morning-light.png" alt="Best Luxury Pilates Reformers 2026" fill style={{ objectFit: "cover" }} priority />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <div style={{ backgroundColor: "#faf7f4", border: "1px solid #e8e0d6", borderRadius: "4px", padding: "28px 32px", marginBottom: "48px" }}>
              <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9a9490", marginBottom: "20px" }}>Quick Picks</h2>
              {PRODUCTS.map((p) => (
                <div key={p.rank} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingBottom: "12px", marginBottom: "12px", borderBottom: "1px solid #ede6dc" }}>
                  <div>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "10px", color: "#b5a99a", marginRight: "10px" }}>{p.rank}</span>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "14px", fontWeight: 400, color: "#1a1714" }}>{p.name}</span>
                  </div>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "12px", fontWeight: 300, color: "#9a9490" }}>{p.verdict}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
              {PRODUCTS.map((p) => (
                <div key={p.rank} style={{ borderTop: "1px solid #ede9e3", paddingTop: "36px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", marginBottom: "8px" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "14px" }}>
                      <span style={{ fontFamily: "var(--font-serif)", fontSize: "13px", color: "#c5a882" }}>{p.rank}</span>
                      <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", fontWeight: 400, color: "#1a1714", margin: 0 }}>{p.name}</h3>
                    </div>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "12px", color: "#c5a882", whiteSpace: "nowrap" }}>{p.price}</span>
                  </div>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#9a9490", display: "block", marginBottom: "14px" }}>{p.verdict}</span>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "15px", fontWeight: 300, color: "#4a4540", lineHeight: 1.8, marginBottom: "20px" }}>{p.description}</p>
                  <a href={p.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow" style={{ display: "inline-block", fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "13px 24px" }}>
                    Search on Amazon
                  </a>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "64px" }}>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", fontWeight: 400, color: "#1a1714", marginBottom: "32px" }}>Frequently Asked Questions</h2>
              {[
                { q: "What is the difference between a luxury reformer and a premium reformer?", a: "Premium reformers (typically $800–$2,500) are built to rigorous residential standards with quality frames and reliable spring systems. Luxury reformers ($3,200–$5,500+) are built to commercial studio standards, hand-manufactured with aerospace-grade materials, precision-calibrated springs, and upholstery and finishing normally reserved for professional studio environments. Luxury machines typically carry lifetime frame warranties and are maintained and serviced over decades, not replaced." },
                { q: "Is a Gratz reformer worth the price?", a: "For classical Pilates practitioners and collectors, yes. Gratz reformers are hand-built in New York to specifications inherited directly from Joseph Pilates, making them the only machines that can genuinely claim historical authenticity. They appreciate in value, can be restored indefinitely by Gratz's service team, and provide an exercise experience that contemporary machines — however technically refined — cannot replicate. A Gratz is a generational investment." },
                { q: "What should I consider before buying a luxury Pilates reformer?", a: "Space: luxury reformers are typically 8–9 feet long and require 4+ feet of clearance on each end. Ceiling height: footwork in full extension requires 9+ feet for tall practitioners. Flooring: hardwood or stone is ideal; luxury reformers should not sit on deep-pile carpet. Budget for ongoing maintenance — annual spring replacement and carriage wheel servicing is standard practice for commercial-grade machines." },
              ].map((item) => (
                <div key={item.q} style={{ borderTop: "1px solid #ede6dc", paddingTop: "24px", paddingBottom: "24px" }}>
                  <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "15px", fontWeight: 500, color: "#1a1714", marginBottom: "10px" }}>{item.q}</h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "14px", fontWeight: 300, color: "#4a4540", lineHeight: 1.75 }}>{item.a}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "64px" }}>
              <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9a9490", marginBottom: "28px" }}>Further Reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="Best Luxury Pilates Accessories" excerpt="Balanced Body Magic Circle, TriggerPoint GRID, Manduka cork props — premium small equipment for the serious practitioner." href="/blog/best-luxury-pilates-accessories" category="Equipment" readTime="9 min" imageUrl="/pictures/stitch-props-cork-ring.png" />
                <ArticleCard title="Best Premium Pilates Reformer" excerpt="The best reformers at the $800–$2,500 tier — Merrithew SPX, Align Pilates, and more for serious home practitioners." href="/blog/best-premium-pilates-reformer" category="Equipment" readTime="10 min" imageUrl="/pictures/stitch-reformers-aerial-row.png" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find Your Studio" subtitle="Discover the world's finest Pilates and reformer studios." showSearch searchPlaceholder="Search by city or neighbourhood..." />
      </main>
      <Footer />
    </>
  );
}
