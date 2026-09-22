import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Luxury Pilates Leggings (2026)",
  description: "The finest pilates leggings money can buy on Amazon — Wolford, Splits59, Varley, Sweaty Betty, Year of Ours and Beyond Yoga reviewed for fabric quality, precision fit, and investment-grade durability.",
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
    description: "Wolford, Splits59, Varley, Sweaty Betty and Year of Ours — the investment-grade leggings serious practitioners actually reach for, all available on Amazon.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-luxury-pilates-leggings",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-retail-activewear.png", width: 1200, height: 630, alt: "Best Luxury Pilates Leggings 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Luxury Pilates Leggings (2026)",
    description: "Wolford, Splits59, Varley, Sweaty Betty and Year of Ours — the investment-grade leggings for serious practitioners.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-retail-activewear.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-luxury-pilates-leggings" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Wolford Energy Leggings",
    price: "$144",
    verdict: "Most Luxurious",
    description: "Wolford, the Austrian hosiery house founded in 1950, applies its knitting expertise to activewear with the Energy Leggings. They're circular-knit, which means very few seams to press into you on the carriage, with a matt finish that reads more polished than typical gym leggings. They dry quickly, are sustainably dyed, and are made from recycled BLUFIBRE yarn derived from tyre waste. Full length. Sold by Wolford's own shop on Amazon; stock by size can be thin, so check yours before ordering.",
    affiliateUrl: "https://www.amazon.com/dp/B0G43PB7X4?tag=pilatescollective-20",
    tag: "Pinnacle Luxury",
  },
  {
    rank: "02",
    name: "Splits59 Airweight Super High Waist 7/8 Legging",
    price: "$118",
    verdict: "Best Lightweight Feel",
    description: "Splits59's Airweight fabric is a light, super-stretch jersey that feels close to nothing on, which is exactly what you want for a long reformer session in a warm studio. The Super High Waist version has an 11-inch rise that stays put through roll-ups and teasers, and the 23.5-inch inseam lands above the ankle so the hem never catches on straps. Minimal branding (just a logo at the hem). Sold by Zappos on Amazon.",
    affiliateUrl: "https://www.amazon.com/dp/B0CKF9TXNV?tag=pilatescollective-20",
    tag: "Pro Standard",
  },
  {
    rank: "03",
    name: "Varley FreeSoft High-Rise Legging 25\"",
    price: "$98",
    verdict: "Best London Luxury",
    description: "Varley, the London-founded label beloved of boutique-studio regulars, built its reputation on leggings that look as good at lunch as they do in class. The FreeSoft is its current signature: a buttery-soft 75% polyester / 25% elastane fabric with light compression, minimal seams and a rolled waistband that won't dig in when you're folded forward. The 25-inch inseam is a clean 7/8 on most heights. Sold by Zappos on Amazon.",
    affiliateUrl: "https://www.amazon.com/dp/B0D673GY1H?tag=pilatescollective-20",
    tag: "London Luxury",
  },
  {
    rank: "04",
    name: "Sweaty Betty Power 7/8 Workout Legging",
    price: "$134",
    verdict: "Best Sculpting Legging",
    description: "Sweaty Betty's Power legging is the British brand's studio staple, and it's sold and shipped by Amazon.com directly. The fabric is super-stretchy with flattering seaming that sculpts through the seat and thigh, it's sweat-wicking and quick-drying, and it holds compression through deep flexion instead of relaxing over a class. A side pocket and a back zip pocket hold a key or a card, which none of the other leggings here offer.",
    affiliateUrl: "https://www.amazon.com/dp/B08HHTVMRX?tag=pilatescollective-20",
    tag: "Studio Staple",
  },
  {
    rank: "05",
    name: "Year of Ours Studio Monday Full Legging",
    price: "$120",
    verdict: "The Benchmark",
    description: "Year of Ours has become the legging of choice in a lot of boutique studios, and the Studio Monday is its signature: a lightweight activewear jersey with real stretch, designed for low-impact work like Pilates rather than running or lifting. It's less compressive than the Power legging, which many practitioners prefer for breathing and deep flexion, and the fabric moves with you rather than holding you in. Sold by Shopbop, an Amazon company.",
    affiliateUrl: "https://www.amazon.com/dp/B0H7T8Q7XG?tag=pilatescollective-20",
    tag: "Studio Benchmark",
  },
  {
    rank: "06",
    name: "Beyond Yoga Spacedye Caught in the Midi High Waisted Legging",
    price: "$97",
    verdict: "Softest Fabric",
    description: "Beyond Yoga's Spacedye is the legging people describe as the softest they own. The heathered, space-dyed fabric (87% polyester, 13% elastane) prioritises comfort over compression, and the 5-inch high waistband gives gentle smoothing without pressure points, which makes it ideal for longer, slower mat sessions and holds. It comes in a wide, inclusive size range and dozens of colours. Sold by Zappos on Amazon.",
    affiliateUrl: "https://www.amazon.com/dp/B07X3Y5JVL?tag=pilatescollective-20",
    tag: "Premium Fabric",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Best Luxury Pilates Leggings (2026)",
      description: "The finest pilates leggings money can buy on Amazon — Wolford, Splits59, Varley, Sweaty Betty, Year of Ours and Beyond Yoga reviewed for fabric quality, precision fit, and investment-grade durability.",
      url: "https://pilatescollectiveclub.com/blog/best-luxury-pilates-leggings",
      datePublished: "2026-07-06",
      dateModified: "2026-09-22",
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
        { "@type": "Question", name: "What makes a luxury pilates legging worth the investment?", acceptedAnswer: { "@type": "Answer", text: "Luxury pilates leggings differ from mid-range options in fabric engineering, construction precision, and longevity. Premium fabrics like Varley's FreeSoft, Sweaty Betty's Power fabric or Splits59's Airweight hold their shape, opacity and softness far longer than budget leggings, which tend to pill, sag or go sheer in deep flexion. A $100 legging worn three times a week for years costs less per wear than replacing a $30 pair every few months." } },
        { "@type": "Question", name: "Are luxury activewear brands like Varley and Splits59 worth it for Pilates?", acceptedAnswer: { "@type": "Answer", text: "For practitioners who train frequently and care about the quality of their experience, yes. Brands like Varley and Splits59 put more care into fabric, fit and finishing than most activewear labels. In Pilates specifically, where alignment and body awareness are central, clothing that fits perfectly and moves without restriction is a genuine training aid." } },
        { "@type": "Question", name: "Which luxury legging is best for sensitive skin?", acceptedAnswer: { "@type": "Answer", text: "Beyond Yoga's Spacedye and Year of Ours' Studio Monday are the two most often recommended for sensitive skin: both are exceptionally soft, low-compression fabrics with smooth waistbands. Wolford's circular-knit Energy Leggings are another good option because they have very few seams to rub." } },
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
                    {p.affiliateUrl.includes("amazon.com") ? "Shop on Amazon" : "Shop Direct"}
                  </a>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "64px" }}>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", fontWeight: 400, color: "#1a1714", marginBottom: "32px" }}>Frequently Asked Questions</h2>
              {[
                { q: "What makes a luxury pilates legging worth the investment?", a: "Luxury pilates leggings differ from mid-range options in fabric engineering, construction precision, and longevity. Premium fabrics like Varley's FreeSoft, Sweaty Betty's Power fabric or Splits59's Airweight hold their shape, opacity and softness far longer than budget leggings, which tend to pill, sag or go sheer in deep flexion. A $100 legging worn three times a week for years costs less per wear than replacing a $30 pair every few months." },
                { q: "Are luxury activewear brands like Varley and Splits59 worth it for Pilates?", a: "For practitioners who train frequently and care about the quality of their experience, yes. Brands like Varley and Splits59 put more care into fabric, fit and finishing than most activewear labels. In Pilates specifically, where alignment and body awareness are central, clothing that fits perfectly and moves without restriction is a genuine training aid." },
                { q: "Which luxury legging is best for sensitive skin?", a: "Beyond Yoga's Spacedye and Year of Ours' Studio Monday are the two most often recommended for sensitive skin: both are exceptionally soft, low-compression fabrics with smooth waistbands. Wolford's circular-knit Energy Leggings are another good option because they have very few seams to rub." },
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
