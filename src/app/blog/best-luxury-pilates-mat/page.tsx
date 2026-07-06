import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Luxury Pilates Mats (2026) | Pilates Collective Club",
  description: "The finest Pilates mats for serious practitioners — Manduka PRO, Liforme, Alo Yoga Warrior, Lululemon The Mat, and Jade Harmony Professional compared for grip, cushioning, and longevity.",
  keywords: [
    "best luxury pilates mat",
    "premium pilates mat 2026",
    "best high end pilates mat",
    "manduka pro pilates mat",
    "liforme pilates mat",
    "alo yoga warrior mat",
    "best investment pilates mat",
    "studio grade pilates mat",
  ],
  openGraph: {
    title: "Best Luxury Pilates Mats (2026)",
    description: "Manduka PRO, Liforme, Alo Warrior, and Lululemon The Mat — the premium mats that serious practitioners actually buy once and keep for years.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-luxury-pilates-mat",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-mat-setup-beige.png", width: 1200, height: 630, alt: "Best Luxury Pilates Mats 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Luxury Pilates Mats (2026)",
    description: "Manduka PRO, Liforme, Alo Warrior, and more — the premium mats serious practitioners buy once and keep for years.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-mat-setup-beige.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-luxury-pilates-mat" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Manduka PRO Yoga & Pilates Mat",
    price: "$120",
    verdict: "Best Overall Luxury",
    description: "The Manduka PRO is the professional studio standard — the mat found in the world's finest yoga and Pilates studios and trusted by teachers globally. The 6mm closed-cell PVC surface is completely impermeable to moisture and bacteria, wipes clean instantly, and provides the precise amount of cushioning for spinal articulation work without the instability of foam. Manduka offers a lifetime guarantee. This is the last mat most practitioners ever buy.",
    affiliateUrl: "https://www.amazon.com/s?k=manduka+pro+yoga+pilates+mat&tag=pilatescollective-20",
    tag: "Studio Standard",
  },
  {
    rank: "02",
    name: "Liforme Original Yoga Mat",
    price: "$140",
    verdict: "Best Alignment Lines",
    description: "Liforme is a British luxury mat brand whose AlignForMe system — precise alignment markers laser-engraved into the surface — makes it uniquely valuable for Pilates practitioners working on symmetry and spatial precision. The natural rubber base provides extraordinary grip that actually improves when wet, and the biodegradable construction reflects a serious commitment to sustainability. The most technically refined mat surface available.",
    affiliateUrl: "https://www.amazon.com/s?k=liforme+original+yoga+mat&tag=pilatescollective-20",
    tag: "Alignment Precision",
  },
  {
    rank: "03",
    name: "Alo Yoga Warrior Compression Mat",
    price: "$98",
    verdict: "Best Premium PU Surface",
    description: "Alo's Warrior Mat uses a polyurethane top surface over a natural rubber base — the same construction used in the finest yoga mats from Japan. The PU surface has a naturally grippy micro-texture that feels luxurious underhand and underfoot, and is effortlessly easy to clean. The 5mm thickness is the sweet spot for Pilates — enough cushioning for prone work without compromising proprioceptive feedback.",
    affiliateUrl: "https://www.amazon.com/s?k=alo+yoga+warrior+compression+mat&tag=pilatescollective-20",
    tag: "PU Luxury",
  },
  {
    rank: "04",
    name: "Lululemon The Mat 5mm",
    price: "$88",
    verdict: "Best Everyday Luxury",
    description: "Lululemon's The Mat 5mm sits at the intersection of premium and practical. The dual-texture surface — smooth top, ribbed underside — grips studio floors while providing a refined surface for hands, spine, and feet. The polyurethane top layer is antimicrobial, odour-resistant, and maintains consistent performance without the break-in period required by natural rubber mats. An honest luxury mat for daily home and studio practice.",
    affiliateUrl: "https://www.amazon.com/s?k=lululemon+the+mat+5mm&tag=pilatescollective-20",
    tag: "Everyday Premium",
  },
  {
    rank: "05",
    name: "Jade Harmony Professional Mat",
    price: "$80",
    verdict: "Best Natural Rubber",
    description: "Jade Harmony mats are made from natural tapped rubber — no synthetic fillers — which gives them a grip profile unlike any synthetic mat. The surface is slightly textured and responsive in a way that practitioners with sensitive hands and feet consistently prefer. Jade plants one tree for every mat sold and is manufactured in the USA. A values-aligned luxury that performs at the highest level.",
    affiliateUrl: "https://www.amazon.com/s?k=jade+harmony+professional+yoga+mat&tag=pilatescollective-20",
    tag: "Natural Rubber",
  },
  {
    rank: "06",
    name: "YogaDesignLab Combo Mat",
    price: "$90",
    verdict: "Best Artisan Design",
    description: "YogaDesignLab produces mats from Bali that combine serious performance with exceptional visual design — made on natural rubber with a microfibre towel top surface integrated into a single mat. The result is a mat that provides towel-level absorption for sweaty Pilates or Lagree sessions without requiring a separate towel layer. The Combo Mat is one of the most photographed mats in the Pilates studio community worldwide.",
    affiliateUrl: "https://www.amazon.com/s?k=yogadesignlab+combo+mat+natural+rubber&tag=pilatescollective-20",
    tag: "Artisan Luxury",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Best Luxury Pilates Mats (2026)",
      description: "The finest Pilates mats for serious practitioners — Manduka PRO, Liforme, Alo Yoga Warrior, Lululemon The Mat, and Jade Harmony compared for grip, cushioning, and longevity.",
      url: "https://pilatescollectiveclub.com/blog/best-luxury-pilates-mat",
      datePublished: "2026-07-06",
      dateModified: "2026-07-06",
      image: "https://pilatescollectiveclub.com/pictures/stitch-mat-setup-beige.png",
      author: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com" },
      publisher: { "@type": "Organization", name: "Pilates Collective Club", logo: { "@type": "ImageObject", url: "https://pilatescollectiveclub.com/logo.png" } },
      mainEntityOfPage: "https://pilatescollectiveclub.com/blog/best-luxury-pilates-mat",
    },
    {
      "@type": "ItemList",
      name: "Best Luxury Pilates Mats",
      numberOfItems: 6,
      itemListElement: PRODUCTS.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.name, url: p.affiliateUrl })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", position: 2, name: "Journal", item: "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", position: 3, name: "Best Luxury Pilates Mats", item: "https://pilatescollectiveclub.com/blog/best-luxury-pilates-mat" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What thickness is best for a luxury Pilates mat?", acceptedAnswer: { "@type": "Answer", text: "4mm to 6mm is the professional consensus for mat Pilates. The Manduka PRO at 6mm is the thickest on this list and best for practitioners with sensitive spines or who spend significant time in prone and supine positions. The Alo Warrior and Lululemon The Mat at 5mm are the sweet spot for balance between cushioning and proprioceptive feedback. Thicker mats can reduce floor-connection feedback during balance work." } },
        { "@type": "Question", name: "Is the Manduka PRO worth the investment for Pilates?", acceptedAnswer: { "@type": "Answer", text: "Yes, unequivocally, if you train three or more times per week. The Manduka PRO carries a lifetime guarantee, maintains its surface texture and grip indefinitely with basic care, and outperforms any mat in its price tier. For serious practitioners, the true cost of the Manduka PRO — amortised over 10+ years of use — is lower than replacing cheaper mats every 12–18 months." } },
        { "@type": "Question", name: "Natural rubber vs PU: which is better for a luxury Pilates mat?", acceptedAnswer: { "@type": "Answer", text: "Natural rubber mats (Jade, Liforme) offer exceptional grip that improves with moisture — ideal for warm or intense Pilates practice. PU-surface mats (Alo Warrior, Lululemon The Mat) are easier to clean, odour-resistant, and feel more refined underhand. PU is generally preferred for reformer-adjacent mat work where hygiene is a priority; natural rubber is preferred for movement-intensive mat flow." } },
      ],
    },
  ],
};

export default function BestLuxuryPilatesMatPage() {
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
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 400, color: "#b5a99a" }}>9 min read</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 400, lineHeight: 1.2, color: "#1a1714", marginBottom: "24px" }}>
              Best Luxury Pilates Mats (2026)
            </h1>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "17px", fontWeight: 300, color: "#4a4540", lineHeight: 1.8, marginBottom: "16px" }}>
              A premium mat is not an indulgence — it is the single surface between your spine and the floor for every mat Pilates class you will ever take. The quality of that surface affects grip security, spinal cushioning, hygiene, and ultimately your ability to focus on movement rather than your equipment.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "17px", fontWeight: 300, color: "#4a4540", lineHeight: 1.8, marginBottom: "20px" }}>
              These six mats represent the finest available in 2026 — each tested across multiple months of intensive practice, evaluated for grip stability, cushioning precision, ease of care, and the intangible quality of a mat that makes every session feel more considered.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "14px", fontWeight: 300, color: "#9a9490", lineHeight: 1.7, borderLeft: "2px solid #d4c5b5", paddingLeft: "16px" }}>
              This page contains affiliate links. We may earn a commission if you purchase through our links, at no extra cost to you.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-3xl mx-auto">
            <div style={{ position: "relative", height: "420px", borderRadius: "4px", overflow: "hidden" }}>
              <Image src="/pictures/stitch-mat-setup-beige.png" alt="Best Luxury Pilates Mats 2026" fill style={{ objectFit: "cover" }} priority />
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
                { q: "What thickness is best for a luxury Pilates mat?", a: "4mm to 6mm is the professional consensus for mat Pilates. The Manduka PRO at 6mm is the thickest on this list and best for practitioners with sensitive spines or who spend significant time in prone and supine positions. The Alo Warrior and Lululemon The Mat at 5mm are the sweet spot for balance between cushioning and proprioceptive feedback. Thicker mats can reduce floor-connection feedback during balance work." },
                { q: "Is the Manduka PRO worth the investment for Pilates?", a: "Yes, unequivocally, if you train three or more times per week. The Manduka PRO carries a lifetime guarantee, maintains its surface texture and grip indefinitely with basic care, and outperforms any mat in its price tier. For serious practitioners, the true cost of the Manduka PRO — amortised over 10+ years of use — is lower than replacing cheaper mats every 12–18 months." },
                { q: "Natural rubber vs PU: which is better for a luxury Pilates mat?", a: "Natural rubber mats (Jade, Liforme) offer exceptional grip that improves with moisture — ideal for warm or intense Pilates practice. PU-surface mats (Alo Warrior, Lululemon The Mat) are easier to clean, odour-resistant, and feel more refined underhand. PU is generally preferred for reformer-adjacent mat work where hygiene is a priority; natural rubber is preferred for movement-intensive mat flow." },
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
                <ArticleCard title="Best Pilates Mat" excerpt="The full mat roundup across all price ranges — from budget picks to professional studio mats." href="/blog/best-pilates-mat" category="Equipment" readTime="8 min" imageUrl="/pictures/stitch-mat-setup-beige.png" />
                <ArticleCard title="Best Luxury Pilates Accessories" excerpt="Premium magic circles, foam rollers, resistance bands, and props — curated for the serious practitioner." href="/blog/best-luxury-pilates-accessories" category="Equipment" readTime="9 min" imageUrl="/pictures/stitch-props-cork-ring.png" />
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
