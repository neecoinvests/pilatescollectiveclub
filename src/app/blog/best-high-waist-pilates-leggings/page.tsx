import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best High-Waist Pilates Leggings (2026) | Pilates Collective Club",
  description: "The best high-waist leggings for Pilates — tested for waistband hold, squat-proof fabric, and reformer performance. Lululemon Align, Alo Airbrush, CRZ YOGA, and more.",
  keywords: [
    "best high waist pilates leggings",
    "high waist leggings pilates",
    "best high waisted leggings reformer",
    "high rise pilates leggings women",
    "best high waist workout leggings 2026",
    "squat proof high waist leggings pilates",
    "high waist leggings lagree",
    "best pilates leggings high rise",
  ],
  openGraph: {
    title: "Best High-Waist Pilates Leggings (2026)",
    description: "Tested for waistband hold, squat-proof opacity, and reformer performance. Our top high-rise legging picks for Pilates.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-high-waist-pilates-leggings",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/mathilde-langevin-aBJ3A-2LJyU-unsplash.jpg", width: 1200, height: 630, alt: "Best High-Waist Pilates Leggings 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best High-Waist Pilates Leggings (2026)",
    description: "Tested for waistband hold, squat-proof opacity, and reformer performance. Our top high-rise legging picks.",
    images: ["https://pilatescollectiveclub.com/pictures/mathilde-langevin-aBJ3A-2LJyU-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-high-waist-pilates-leggings" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Lululemon Align High-Rise Pant 25\"",
    price: "$98",
    verdict: "Best Overall",
    description: "The Lululemon Align is the most recommended legging in Pilates studios worldwide. The Nulu fabric is featherweight and buttery-soft — described by long-term users as 'wearing nothing'. The high-rise waistband sits just below the navel, stays put through every inversion and reformer sequence, and never digs or rolls. The gold standard at this price point.",
    affiliateUrl: "https://www.amazon.com/s?k=lululemon+align+high+rise+pant+25+inch&tag=pilatescollective-20",
    tag: "Top Pick",
  },
  {
    rank: "02",
    name: "Alo Yoga Airbrush High-Waist Legging",
    price: "$114",
    verdict: "Best Sculpting",
    description: "Alo's Airbrush fabric applies light compression that creates a sculpted appearance without restricting movement or breathing. The high waistband is wide (around 3.5 inches) and completely opaque, making it one of the most secure feeling options for inverted and prone reformer positions. The matte finish and seamless construction photograph beautifully.",
    affiliateUrl: "https://www.amazon.com/s?k=alo+yoga+airbrush+high+waist+legging&tag=pilatescollective-20",
    tag: "Best Sculpting",
  },
  {
    rank: "03",
    name: "Beyond Yoga Spacedye High-Waist Midi Legging",
    price: "$109",
    verdict: "Best for Tall Practitioners",
    description: "Beyond Yoga's Spacedye fabric has a distinctive heathered texture that moves with the body rather than against it. Their sizing runs long — excellent for tall practitioners who find most leggings mid-calf rather than ankle-length. The high waistband has sufficient compression to stay put without feeling tight, and the fabric is fully squat-proof in all colours.",
    affiliateUrl: "https://www.amazon.com/s?k=beyond+yoga+spacedye+high+waist+legging&tag=pilatescollective-20",
    tag: "Best for Tall",
  },
  {
    rank: "04",
    name: "Gymshark Vital Seamless High-Waist Legging",
    price: "$48",
    verdict: "Best Mid-Range",
    description: "Gymshark's Vital Seamless uses a seamless knit construction that eliminates chafing seams entirely — important during long reformer sessions with lateral movements. The high waistband has good hold without excessive compression. Subtle ribbed texture panels on the sides add visual structure without adding bulk. A consistent best-seller for value.",
    affiliateUrl: "https://www.amazon.com/s?k=gymshark+vital+seamless+high+waist+legging&tag=pilatescollective-20",
    tag: "Best Mid-Range",
  },
  {
    rank: "05",
    name: "Vuori Daily Performance Legging",
    price: "$84",
    verdict: "Best Versatile",
    description: "The Vuori Daily Performance Legging bridges the gap between technical workout wear and everyday comfort. The high rise waistband is substantial but never constrictive, and the anti-microbial finish keeps the legging fresh across multiple sessions. The streamlined design transitions seamlessly from studio to errands — a practical choice for busy practitioners.",
    affiliateUrl: "https://www.amazon.com/s?k=vuori+daily+performance+high+waist+legging+women&tag=pilatescollective-20",
    tag: "Most Versatile",
  },
  {
    rank: "06",
    name: "CRZ YOGA Naked Feeling High-Waist Legging",
    price: "$28",
    verdict: "Best Budget",
    description: "The CRZ YOGA Naked Feeling legging has become a cult favourite for budget-conscious Pilates practitioners. The fabric is genuinely comparable to the Lululemon Align in softness and weight. The high waistband holds without rolling. Completely squat-proof. At $28, it's the most remarkable value on this list — and a credible alternative to leggings costing three times the price.",
    affiliateUrl: "https://www.amazon.com/s?k=crz+yoga+naked+feeling+high+waist+legging&tag=pilatescollective-20",
    tag: "Best Value",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Best High-Waist Pilates Leggings (2026)",
      description: "The best high-waist leggings for Pilates — tested for waistband hold, squat-proof fabric, and reformer performance.",
      url: "https://pilatescollectiveclub.com/blog/best-high-waist-pilates-leggings",
      datePublished: "2026-07-06",
      dateModified: "2026-07-06",
      image: "https://pilatescollectiveclub.com/pictures/mathilde-langevin-aBJ3A-2LJyU-unsplash.jpg",
      author: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com" },
      publisher: { "@type": "Organization", name: "Pilates Collective Club", logo: { "@type": "ImageObject", url: "https://pilatescollectiveclub.com/logo.png" } },
      mainEntityOfPage: "https://pilatescollectiveclub.com/blog/best-high-waist-pilates-leggings",
    },
    {
      "@type": "ItemList",
      name: "Best High-Waist Pilates Leggings",
      numberOfItems: 6,
      itemListElement: PRODUCTS.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.name, url: p.affiliateUrl })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", position: 2, name: "Journal", item: "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", position: 3, name: "Best High-Waist Pilates Leggings", item: "https://pilatescollectiveclub.com/blog/best-high-waist-pilates-leggings" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Why do high-waist leggings work better for Pilates?", acceptedAnswer: { "@type": "Answer", text: "High-waist leggings stay in place through the full range of Pilates movement — particularly during supine, inverted, and rolling exercises where mid-rise leggings tend to slip down. The wider waistband also provides light core support and can aid proprioception (body awareness) in the lumbar region, which is beneficial for spinal articulation exercises." } },
        { "@type": "Question", name: "How do I know if a high-waist legging is squat-proof?", acceptedAnswer: { "@type": "Answer", text: "The stretch test: hold the fabric at full extension (both hands pulling outward) and look through it. Squat-proof fabric remains opaque when stretched. Thin fabrics and light-coloured leggings in pale pink or white are most susceptible to becoming see-through. Fabric weight above 200 GSM is generally squat-proof; lighter fabrics need to be tested." } },
        { "@type": "Question", name: "What is the best high-waist legging for Pilates under $50?", acceptedAnswer: { "@type": "Answer", text: "The CRZ YOGA Naked Feeling High-Waist Legging (around $28) and the Gymshark Vital Seamless (around $48) are both excellent picks under $50. The CRZ YOGA competes directly with Lululemon's Align in fabric feel and opacity. The Gymshark offers seamless construction and consistent sizing. Both outperform many leggings in the $70–$90 range." } },
      ],
    },
  ],
};

export default function BestHighWaistPilatesLeggingsPage() {
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
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 400, color: "#b5a99a" }}>9 min read</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 400, lineHeight: 1.2, color: "#1a1714", marginBottom: "24px" }}>
              Best High-Waist Pilates Leggings (2026)
            </h1>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "17px", fontWeight: 300, color: "#4a4540", lineHeight: 1.8, marginBottom: "20px" }}>
              High-waist leggings are the near-universal choice for serious Pilates practitioners. They stay put through roll-ups, swan, and reformer footwork sequences without adjustment — and the wide waistband provides a subtle proprioceptive cue for lumbar awareness. These are the six worth investing in.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "14px", fontWeight: 300, color: "#9a9490", lineHeight: 1.7, borderLeft: "2px solid #d4c5b5", paddingLeft: "16px" }}>
              This page contains affiliate links. We may earn a commission if you purchase through our links, at no extra cost to you.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-3xl mx-auto">
            <div style={{ position: "relative", height: "420px", borderRadius: "4px", overflow: "hidden" }}>
              <Image src="/pictures/mathilde-langevin-aBJ3A-2LJyU-unsplash.jpg" alt="Best High-Waist Pilates Leggings 2026" fill style={{ objectFit: "cover" }} priority />
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
                { q: "Why do high-waist leggings work better for Pilates?", a: "High-waist leggings stay in place through the full range of Pilates movement — particularly during supine, inverted, and rolling exercises where mid-rise leggings tend to slip down. The wider waistband also provides light core support and can aid proprioception (body awareness) in the lumbar region, which is beneficial for spinal articulation exercises." },
                { q: "How do I know if a high-waist legging is squat-proof?", a: "The stretch test: hold the fabric at full extension (both hands pulling outward) and look through it. Squat-proof fabric remains opaque when stretched. Thin fabrics and light-coloured leggings in pale pink or white are most susceptible to becoming see-through. Fabric weight above 200 GSM is generally squat-proof; lighter fabrics need to be tested." },
                { q: "What is the best high-waist legging for Pilates under $50?", a: "The CRZ YOGA Naked Feeling High-Waist Legging (around $28) and the Gymshark Vital Seamless (around $48) are both excellent picks under $50. The CRZ YOGA competes directly with Lululemon's Align in fabric feel and opacity. The Gymshark offers seamless construction and consistent sizing. Both outperform many leggings in the $70–$90 range." },
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
                <ArticleCard title="Best Pilates Leggings" excerpt="The full roundup — all lengths, rises, and fabrics compared for reformer and mat Pilates performance." href="/blog/best-pilates-leggings" category="Clothing" readTime="9 min" imageUrl="/pictures/mathilde-langevin-aBJ3A-2LJyU-unsplash.jpg" />
                <ArticleCard title="Lululemon Align vs Alo Airbrush" excerpt="The two most-compared Pilates leggings head to head — fabric feel, waistband hold, and value." href="/blog/lululemon-align-vs-alo-airbrush" category="Comparison" readTime="7 min" imageUrl="/pictures/stitch-retail-activewear.png" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find Your Studio" subtitle="Explore top-rated Pilates studios near you." showSearch searchPlaceholder="Search by city or neighbourhood..." />
      </main>
      <Footer />
    </>
  );
}
