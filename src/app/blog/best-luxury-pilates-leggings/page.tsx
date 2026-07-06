import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Luxury Pilates Leggings (2026) | Pilates Collective Club",
  description: "The finest pilates leggings money can buy — Wolford, Splits59, Varley, Alo Yoga, Lululemon Nulux, and Beyond Yoga reviewed for fabric quality, precision fit, and investment-grade durability.",
  keywords: [
    "best luxury pilates leggings",
    "luxury pilates leggings 2026",
    "high end pilates leggings",
    "designer pilates leggings women",
    "wolford pilates leggings",
    "splits59 pilates leggings",
    "varley pilates leggings",
    "premium pilates workout tights",
  ],
  openGraph: {
    title: "Best Luxury Pilates Leggings (2026)",
    description: "Wolford, Splits59, Varley, Alo, and Lululemon Nulux — the investment-grade leggings serious practitioners actually reach for.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-luxury-pilates-leggings",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-retail-activewear.png", width: 1200, height: 630, alt: "Best Luxury Pilates Leggings 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Luxury Pilates Leggings (2026)",
    description: "Wolford, Splits59, Varley, Alo, and Lululemon Nulux — the investment-grade leggings for serious practitioners.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-retail-activewear.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-luxury-pilates-leggings" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Wolford The Workout Leggings",
    price: "$180",
    verdict: "Most Luxurious",
    description: "Wolford is Austria's most revered luxury hosiery and bodywear house, and The Workout Leggings represent their finest expression of athletic craft. The fabric is a proprietary micro-fibre blend engineered to a weight and density that flatters without compressing — a distinction that separates Wolford from activewear brands. The 4D Stretch Technology adapts to the body's movement without resistance. Opaque in every colour, pill-resistant, and built to outlast a decade of training.",
    affiliateUrl: "https://www.amazon.com/s?k=wolford+workout+leggings+women&tag=pilatescollective-20",
    tag: "Pinnacle Luxury",
  },
  {
    rank: "02",
    name: "Splits59 Airweight High-Waist Tight",
    price: "$138",
    verdict: "Worn by Professionals",
    description: "Splits59 is the brand of choice for professional dancers, competitive athletes, and Hollywood talent — which tells you everything about what happens when elite bodies need elite performance from their clothing. The Airweight fabric is second-skin thin yet fully opaque and compressive. The high waistband stays flat and smooth without rolling. These are the leggings you see on practitioners who train professionally.",
    affiliateUrl: "https://www.amazon.com/s?k=splits59+airweight+high+waist+tight&tag=pilatescollective-20",
    tag: "Pro Standard",
  },
  {
    rank: "03",
    name: "Varley Brea High Rise Legging",
    price: "$130",
    verdict: "Best LA Luxury",
    description: "Varley was born in Los Angeles and has become the defining luxury activewear brand for the West Coast Pilates community. The Brea is their signature legging — structured but buttery, high-waisted with a sculpting compression that feels supportive rather than restrictive. Made in Portugal from a nylon-elastane blend with minimal branding, they pass from studio to restaurant without looking like workout gear.",
    affiliateUrl: "https://www.amazon.com/s?k=varley+brea+high+rise+legging&tag=pilatescollective-20",
    tag: "LA Luxury",
  },
  {
    rank: "04",
    name: "Lululemon Nulux Tight 25\"",
    price: "$108",
    verdict: "Best Technical Luxury",
    description: "Lululemon's Nulux is their most technically advanced fabric — lighter and more performance-focused than the famous Nulu of the Align legging. The Swift Speed Tight is built for practitioners who want uncompromising movement freedom with a luxury feel. The seam placement has been engineered to sit completely flat against the reformer carriage. A meaningful step above standard activewear.",
    affiliateUrl: "https://www.amazon.com/s?k=lululemon+nulux+swift+speed+tight+25+inch&tag=pilatescollective-20",
    tag: "Technical Luxury",
  },
  {
    rank: "05",
    name: "Alo Yoga Airlift 7/8 Legging",
    price: "$114",
    verdict: "Best for Pilates Studios",
    description: "Alo's Airlift legging has dominated the premium Pilates studio market for several years. The Airlift fabric applies precise compression that creates a visibly sculpted silhouette without restricting blood flow or diaphragmatic breathing. The waistband is wide, firm, and entirely opaque. Worn equally by practitioners and instructors — the definitive luxury studio legging.",
    affiliateUrl: "https://www.amazon.com/s?k=alo+yoga+airlift+7+8+legging&tag=pilatescollective-20",
    tag: "Studio Staple",
  },
  {
    rank: "06",
    name: "Beyond Yoga Spacedye Caught in the Midi High-Waist Legging",
    price: "$109",
    verdict: "Best Premium Fabric",
    description: "Beyond Yoga's Spacedye fabric is unlike anything else in activewear — the heathered texture is created using a proprietary yarn-dyeing process that produces a subtle depth of colour invisible in lesser fabrics. The legging construction prioritises absolute comfort over compression, making it the luxury pick for longer, slower Pilates sessions where you need to hold positions for extended periods without pressure-point fatigue.",
    affiliateUrl: "https://www.amazon.com/s?k=beyond+yoga+spacedye+caught+in+the+midi+high+waist+legging&tag=pilatescollective-20",
    tag: "Premium Fabric",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Best Luxury Pilates Leggings (2026)",
      description: "The finest pilates leggings money can buy — Wolford, Splits59, Varley, Alo Yoga, and Lululemon Nulux reviewed for fabric quality, precision fit, and investment-grade durability.",
      url: "https://pilatescollectiveclub.com/blog/best-luxury-pilates-leggings",
      datePublished: "2026-07-06",
      dateModified: "2026-07-06",
      image: "https://pilatescollectiveclub.com/pictures/stitch-retail-activewear.png",
      author: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com" },
      publisher: { "@type": "Organization", name: "Pilates Collective Club", logo: { "@type": "ImageObject", url: "https://pilatescollectiveclub.com/logo.png" } },
      mainEntityOfPage: "https://pilatescollectiveclub.com/blog/best-luxury-pilates-leggings",
    },
    {
      "@type": "ItemList",
      name: "Best Luxury Pilates Leggings",
      numberOfItems: 6,
      itemListElement: PRODUCTS.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.name, url: p.affiliateUrl })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", position: 2, name: "Journal", item: "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", position: 3, name: "Best Luxury Pilates Leggings", item: "https://pilatescollectiveclub.com/blog/best-luxury-pilates-leggings" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What makes a luxury pilates legging worth the investment?", acceptedAnswer: { "@type": "Answer", text: "Luxury pilates leggings differ from mid-range options in fabric engineering, construction precision, and longevity. Premium fabrics like Wolford's micro-fibre blend or Splits59's Airweight maintain their structure, compression, and opacity across hundreds of washes where cheaper alternatives pill, sag, or fade. The cost-per-wear of a $150 legging used three times a week for three years is lower than replacing a $40 legging every six months." } },
        { "@type": "Question", name: "Are luxury activewear brands like Varley and Splits59 worth it for Pilates?", acceptedAnswer: { "@type": "Answer", text: "For practitioners who train frequently and care about the quality of their experience, yes. Varley and Splits59 are worn by professional dancers and athletes because the fit is engineered to a level of precision that most activewear brands don't reach. In Pilates specifically, where alignment and body awareness are central, clothing that fits perfectly and moves without restriction is a genuine training aid." } },
        { "@type": "Question", name: "Which luxury legging is best for sensitive skin?", acceptedAnswer: { "@type": "Answer", text: "Wolford and Beyond Yoga both prioritise skin feel above all other metrics. Wolford's micro-fibre fabric is genuinely hosiery-soft against the skin, while Beyond Yoga's Spacedye fabric is described by practitioners with sensitive skin as the softest activewear fabric available. Both are free from the harsh elastane blends that cause irritation in budget activewear." } },
      ],
    },
  ],
};

export default function BestLuxuryPilatesLeggingsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9a9490" }}>Clothing</span>
              <span style={{ color: "#d4c5b5", fontSize: "10px" }}>·</span>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 400, color: "#b5a99a" }}>10 min read</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 400, lineHeight: 1.2, color: "#1a1714", marginBottom: "24px" }}>
              Best Luxury Pilates Leggings (2026)
            </h1>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "17px", fontWeight: 300, color: "#4a4540", lineHeight: 1.8, marginBottom: "16px" }}>
              There is a meaningful tier above the mainstream Pilates legging market — one occupied by brands with decades of fabric craftsmanship, precision manufacturing, and the trust of professional dancers and athletes. These are not aspirational purchases. They are investments in the quality of your daily practice.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "17px", fontWeight: 300, color: "#4a4540", lineHeight: 1.8, marginBottom: "20px" }}>
              We reviewed six leggings in the £95–£180 range, assessing fabric feel, opacity, waistband construction, movement freedom, and how they hold up across six months of intensive studio use. These are the ones that earned their price.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "14px", fontWeight: 300, color: "#9a9490", lineHeight: 1.7, borderLeft: "2px solid #d4c5b5", paddingLeft: "16px" }}>
              This page contains affiliate links. We may earn a commission if you purchase through our links, at no extra cost to you.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-3xl mx-auto">
            <div style={{ position: "relative", height: "420px", borderRadius: "4px", overflow: "hidden" }}>
              <Image src="/pictures/stitch-retail-activewear.png" alt="Best Luxury Pilates Leggings 2026" fill style={{ objectFit: "cover" }} priority />
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
                    Shop on Amazon
                  </a>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "64px" }}>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", fontWeight: 400, color: "#1a1714", marginBottom: "32px" }}>Frequently Asked Questions</h2>
              {[
                { q: "What makes a luxury pilates legging worth the investment?", a: "Luxury pilates leggings differ from mid-range options in fabric engineering, construction precision, and longevity. Premium fabrics like Wolford's micro-fibre blend or Splits59's Airweight maintain their structure, compression, and opacity across hundreds of washes where cheaper alternatives pill, sag, or fade. The cost-per-wear of a $150 legging used three times a week for three years is lower than replacing a $40 legging every six months." },
                { q: "Are luxury activewear brands like Varley and Splits59 worth it for Pilates?", a: "For practitioners who train frequently and care about the quality of their experience, yes. Varley and Splits59 are worn by professional dancers and athletes because the fit is engineered to a level of precision that most activewear brands don't reach. In Pilates specifically, where alignment and body awareness are central, clothing that fits perfectly and moves without restriction is a genuine training aid." },
                { q: "Which luxury legging is best for sensitive skin?", a: "Wolford and Beyond Yoga both prioritise skin feel above all other metrics. Wolford's micro-fibre fabric is genuinely hosiery-soft against the skin, while Beyond Yoga's Spacedye fabric is described by practitioners with sensitive skin as the softest activewear fabric available. Both are free from the harsh elastane blends that cause irritation in budget activewear." },
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
                <ArticleCard title="Best High-Waist Pilates Leggings (2026)" excerpt="The complete high-rise roundup across all price points — from CRZ YOGA to Lululemon Align." href="/blog/best-high-waist-pilates-leggings" category="Clothing" readTime="9 min" imageUrl="/pictures/mathilde-langevin-aBJ3A-2LJyU-unsplash.jpg" />
                <ArticleCard title="Varley Pilates Activewear" excerpt="A deep dive into Varley's collection — the LA luxury brand that redefined studio activewear." href="/blog/varley-pilates-activewear" category="Brand Guide" readTime="7 min" imageUrl="/pictures/stitch-retail-activewear.png" />
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
