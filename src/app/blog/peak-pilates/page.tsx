import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Peak Pilates Equipment Review (2026): MVe & Fit Reformers | Pilates Collective Club",
  description: "Peak Pilates MVe and Fit reformers reviewed — spring resistance, carriage construction, and how Peak Pilates compares to Merrithew and Balanced Body.",
  keywords: ["peak pilates review", "peak pilates reformer 2026", "peak pilates mve review", "peak pilates fit reformer", "peak pilates vs merrithew", "peak pilates equipment buy", "peak pilates cadillac review"],
  openGraph: {
    title: "Peak Pilates (2026): Equipment Review & Best Models Ranked",
    description: "Peak Pilates reviewed — classical wood reformers tested for home studios and serious practitioners.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/peak-pilates",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/ahmet-kurt-a1IhqqW8JQE-unsplash.jpg", width: 1200, height: 630, alt: "Peak Pilates equipment review — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peak Pilates (2026): Equipment Review",
    description: "Peak Pilates reformers and apparatus — honest review for classical practitioners.",
    images: ["https://pilatescollectiveclub.com/pictures/ahmet-kurt-a1IhqqW8JQE-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/peak-pilates" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Peak Pilates MVe® Reformer",
    price: "From $3,200",
    verdict: "Best overall Peak Pilates reformer",
    description:
      "The Peak Pilates MVe is the brand's flagship studio reformer and the model most frequently found in high-end classical and hybrid studios. The name stands for Multi-Versatile Equipment, and the design reflects that intent — the carriage dimensions, spring calibration, and footbar geometry are engineered to accommodate the full classical and contemporary repertoire without compromise. The five colour-coded springs cover the resistance range from feather-light single-spring work to heavy multi-spring footwork sequences. The aluminium frame is powder-coated rather than painted, which prevents chipping through years of daily studio use. The carriage glides on sealed ball bearings with a quality and quietness that compares favourably to Balanced Body at a slightly lower price point. For a new studio build or a serious home studio upgrade, the MVe represents the best value proposition in classical-leaning equipment.",
    affiliateUrl: "https://www.amazon.com/s?k=peak+pilates+mve+reformer&tag=pilatescollective-20",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "Peak Pilates casa Reformer",
    price: "From $2,400",
    verdict: "Best Peak Pilates home reformer",
    description:
      "The Peak Pilates casa is the brand's premium home reformer — built with the same materials and spring system as the MVe but engineered for home environments rather than commercial studios. The Baltic Birch wood frame finish is the most immediately distinctive feature: it is genuinely beautiful, appropriate for placement in a living space without the clinical aesthetic that steel and upholstery machines carry. The five-spring system is identical to the MVe, ensuring that home practitioners following a structured curriculum lose nothing in resistance quality. The footbar adjusts across three positions, the headrest has five configurations, and the carriage upholstery is replaceable. For practitioners who want studio-grade equipment that lives permanently in the home rather than a spare room, the casa is the most compelling option in this price range.",
    affiliateUrl: "https://www.amazon.com/s?k=peak+pilates+casa+reformer&tag=pilatescollective-20",
    tag: "Best Home Model",
  },
  {
    rank: "03",
    name: "Peak Pilates Afina Reformer",
    price: "From $3,800",
    verdict: "Best premium classical-style reformer",
    description:
      "The Afina is Peak Pilates' premium studio reformer — a machine positioned above the MVe in both price and specification. The most significant upgrade is the extended carriage and rail system, which accommodates practitioners up to approximately 6'3\" through the complete repertoire without modification. The Afina also features a more refined spring mounting system that allows faster spring changes between exercises — relevant for instructors who teach diverse repertoires and need to adjust resistance mid-session without interrupting flow. The wood platform end boards add to a visual warmth that distinguishes the Afina from purely utilitarian studio machines. A serious investment for established studios or serious long-term home practitioners.",
    affiliateUrl: "https://www.amazon.com/s?k=peak+pilates+afina+reformer&tag=pilatescollective-20",
    tag: "Premium Model",
  },
  {
    rank: "04",
    name: "Peak Pilates Fit Reformer",
    price: "From $1,899",
    verdict: "Best compact Peak Pilates option",
    description:
      "The Peak Pilates Fit Reformer occupies the most accessible position in Peak's lineup — a shorter, lighter machine designed for home practitioners who want genuine spring-based reformer performance in a space-efficient package. The five-spring system is retained from the larger models, which means the Fit does not compromise on resistance quality. The trade-off is carriage travel distance — approximately 8 inches shorter than the MVe — which limits full extension in some exercises for practitioners above 6'0\". For the majority of the population and the majority of the repertoire, the Fit performs without meaningful compromise. The Baltic Birch wood details bring the casa's aesthetic warmth to a more accessible price point.",
    affiliateUrl: "https://www.amazon.com/s?k=peak+pilates+fit+reformer&tag=pilatescollective-20",
    tag: "Most Accessible",
  },
  {
    rank: "05",
    name: "Peak Pilates Wunda Chair",
    price: "From $1,450",
    verdict: "Best Peak Pilates accessory",
    description:
      "The Peak Pilates Wunda Chair is one of the most functionally complete chair options available for home and studio use. The split-pedal design allows unilateral leg exercises not possible on a single-pedal classical chair, and the four-spring configuration covers the resistance range from gentle rehabilitation work to advanced practitioner sequences. The wood construction matches the casa and Afina reformers aesthetically, making it the natural companion piece for a Peak-based home studio. The Wunda Chair is the apparatus that delivers the most strength-building work for its footprint — an efficient addition to any studio where space is at a premium.",
    affiliateUrl: "https://www.amazon.com/s?k=peak+pilates+wunda+chair&tag=pilatescollective-20",
    tag: "Best Accessory",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Peak Pilates (2026): Equipment Review & Best Models Ranked",
      "description": "Peak Pilates equipment reviewed — the MVe, casa, Afina reformers and Wunda Chair tested for classical and contemporary practitioners.",
      "url": "https://pilatescollectiveclub.com/blog/peak-pilates",
      "datePublished": "2026-05-21",
      "dateModified": "2026-05-21",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/ahmet-kurt-a1IhqqW8JQE-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/peak-pilates" },
    },
    {
      "@type": "ItemList",
      "name": "Peak Pilates Equipment (2026)",
      "numberOfItems": 5,
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
        { "@type": "ListItem", "position": 3, "name": "Peak Pilates Review", "item": "https://pilatescollectiveclub.com/blog/peak-pilates" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is Peak Pilates classical or contemporary?", "acceptedAnswer": { "@type": "Answer", "text": "Peak Pilates occupies a classical-leaning position in the market — their equipment dimensions and spring specifications align more closely with classical Pilates proportions than brands like Merrithew/STOTT, which are explicitly contemporary. However, Peak equipment is used in both classical and contemporary studios, and the MVe and Afina are versatile enough to support either approach." } },
        { "@type": "Question", "name": "How does Peak Pilates compare to Balanced Body?", "acceptedAnswer": { "@type": "Answer", "text": "Both brands produce clinical-grade studio equipment at comparable quality levels. Balanced Body has a broader accessory ecosystem and wider global service network. Peak Pilates offers more wood aesthetic options (particularly through the casa and Afina lines) and often a slightly lower price point. The choice typically comes down to aesthetic preference, methodology alignment, and which brand your instructor or training programme recommends." } },
        { "@type": "Question", "name": "Where are Peak Pilates reformers made?", "acceptedAnswer": { "@type": "Answer", "text": "Peak Pilates equipment is designed in the United States. The brand was founded in Colorado and has maintained US-based design and engineering teams, though manufacturing components are sourced internationally. Peak reformers are sold and supported through an authorised dealer network globally." } },
        { "@type": "Question", "name": "What is Baltic Birch and why does Peak Pilates use it?", "acceptedAnswer": { "@type": "Answer", "text": "Baltic Birch is a premium plywood species with very tight grain and minimal knots, making it structurally consistent and visually clean. Peak Pilates uses Baltic Birch for the wood platform elements on their casa and Afina reformers because it machines cleanly, takes finish well, and is dimensionally stable — it does not warp with temperature and humidity changes the way solid wood can." } },
      ],
    },
  ],
};

export default function PeakPilatesPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Equipment</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Peak Pilates<br /><span style={{ color: "#8b4a31" }}>(2026): Equipment Reviewed</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 10 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Peak Pilates is one of the most respected equipment brands in the global Pilates community — occupying a distinctive position as a classically-oriented manufacturer that has embraced modern engineering without abandoning the proportions and resistance profile that classical practitioners require. The brand is known for its use of Baltic Birch wood in the casa and Afina lines, giving their equipment an aesthetic warmth that steel-framed competitors cannot replicate, and for a spring calibration that classical and hybrid teachers consistently describe as having the correct feel for the method.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/ahmet-kurt-a1IhqqW8JQE-unsplash.jpg" alt="Peak Pilates reformers — MVe, casa, and Afina reviewed" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-12 mt-4 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Brand overview</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { label: "Founded", value: "1995, Colorado USA" },
                  { label: "Method alignment", value: "Classical-leaning, hybrid-compatible" },
                  { label: "Best for", value: "Home studios, boutique studios, classical training" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#9a9490", fontFamily: "'Montserrat', sans-serif" }}>{item.label}</p>
                    <p className="text-sm" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

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

            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Models · Reviewed</p>
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
              <h2 className="text-2xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Our verdict</h2>
              <div className="space-y-4">
                {[
                  { label: "Build quality", value: "Excellent — powder-coated aluminium and Baltic Birch wood hold up through years of studio use." },
                  { label: "Spring feel", value: "Classical-leaning — the spring tension profile is more closely matched to classical proportions than Merrithew/STOTT." },
                  { label: "Aesthetics", value: "Among the best in the market — the wood finish models (casa, Afina) are genuinely home-appropriate." },
                  { label: "Accessories ecosystem", value: "Solid but smaller than Balanced Body. The Wunda Chair and Jump Board are well-integrated." },
                  { label: "Verdict", value: "The strongest recommendation for classically-oriented practitioners who want equipment that performs at clinical level and looks at home in a dedicated studio space. A thoughtful alternative to Balanced Body at a comparable or slightly lower price." },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <span className="text-sm font-semibold shrink-0 w-40" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{item.label}</span>
                    <span className="text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "Is Peak Pilates classical or contemporary?", a: "Peak Pilates occupies a classical-leaning position — their equipment dimensions and spring specifications align more closely with classical Pilates proportions than brands like Merrithew/STOTT. However, Peak equipment is used in both classical and contemporary studios, and the MVe and Afina are versatile enough to support either approach." },
                  { q: "How does Peak Pilates compare to Balanced Body?", a: "Both brands produce clinical-grade studio equipment at comparable quality levels. Balanced Body has a broader accessory ecosystem and wider global service network. Peak Pilates offers more wood aesthetic options and often a slightly lower price point. The choice typically comes down to aesthetic preference and methodology alignment." },
                  { q: "Where are Peak Pilates reformers made?", a: "Peak Pilates equipment is designed in the United States. The brand was founded in Colorado and has maintained US-based design and engineering, though manufacturing components are sourced internationally. Peak reformers are sold through an authorised dealer network globally." },
                  { q: "What is Baltic Birch and why does Peak Pilates use it?", a: "Baltic Birch is a premium plywood with very tight grain and minimal knots, making it structurally consistent and visually clean. Peak uses it for the wood platform elements on their casa and Afina reformers because it machines cleanly, takes finish well, and is dimensionally stable — it does not warp with temperature changes the way solid wood can." },
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
                <ArticleCard title="Balanced Body vs Merrithew" excerpt="The two dominant studio brands compared head-to-head." href="/blog/balanced-body-vs-merrithew" category="Comparison" readTime="9 min read" date="May 2026" imageUrl="/pictures/junseong-lee-G9H5edUL0T8-unsplash.jpg" />
                <ArticleCard title="Best Premium Pilates Reformers" excerpt="The top-tier reformers for serious practitioners across all brands." href="/blog/best-premium-pilates-reformer" category="Equipment" readTime="11 min read" date="May 2026" imageUrl="/pictures/tomi-blasic-tj0sM4gHlns-unsplash.jpg" />
                <ArticleCard title="Best Studio Pilates Reformers" excerpt="How Peak compares against Balanced Body, Merrithew, Gratz, and BASI for professional studio use." href="/blog/best-studio-pilates-reformers" category="Equipment" readTime="14 min read" date="May 2026" imageUrl="/pictures/samantha-sheppard-b8Q5fHBsyik-unsplash.jpg" />
                <ArticleCard title="Best Pilates Reformers for Tall People" excerpt="Peak's MVe and Fit reformers are among the longest-carriage options available." href="/blog/best-pilates-reformer-for-tall-people" category="Equipment" readTime="9 min read" date="May 2026" imageUrl="/pictures/mathilde-langevin-aBJ3A-2LJyU-unsplash.jpg" />
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
