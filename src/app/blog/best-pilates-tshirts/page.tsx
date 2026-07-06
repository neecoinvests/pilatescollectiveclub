import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates T-Shirts (2026) | Pilates Collective Club",
  description: "The best t-shirts for Pilates — tested for breathability, stretch, and studio-ready style. Our top picks from Lululemon, Vuori, Alo Yoga, Nike, and more.",
  keywords: [
    "best pilates t shirt",
    "best tshirt for pilates",
    "pilates workout tee",
    "best t shirt reformer pilates",
    "pilates studio t shirt women",
    "best athletic tee pilates",
    "breathable t shirt pilates 2026",
    "pilates top women t shirt",
  ],
  openGraph: {
    title: "Best Pilates T-Shirts (2026)",
    description: "Top-tested t-shirts for Pilates — breathable, stretchy, and studio-ready from Lululemon, Vuori, Alo Yoga, Nike, and more.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-tshirts",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-retail-activewear.png", width: 1200, height: 630, alt: "Best Pilates T-Shirts 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates T-Shirts (2026)",
    description: "Top-tested t-shirts for Pilates — breathable, stretchy, and studio-ready.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-retail-activewear.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-pilates-tshirts" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Lululemon Metal Vent Tech Short-Sleeve Shirt",
    price: "$68",
    verdict: "Best Overall",
    description: "Lululemon's Metal Vent Tech is the benchmark for Pilates tees. The back panel is open-weave mesh for maximum ventilation during reformer work, while the front stays structured enough for studio settings. Four-way stretch means the fabric moves with you through every rotation and extension without bunching or restricting.",
    affiliateUrl: "https://www.amazon.com/s?k=lululemon+metal+vent+tech+short+sleeve+shirt&tag=pilatescollective-20",
    tag: "Top Pick",
  },
  {
    rank: "02",
    name: "Vuori Strato Tech Tee",
    price: "$64",
    verdict: "Best Breathable",
    description: "Vuori's Strato Tech uses a proprietary anti-microbial polyester that stays fresh through back-to-back sessions. The relaxed fit is on-trend for Pilates studios without being sloppy — it doesn't ride up during supine footwork or aerial work on the reformer. The neutral colourways suit any studio aesthetic.",
    affiliateUrl: "https://www.amazon.com/s?k=vuori+strato+tech+tee&tag=pilatescollective-20",
    tag: "Best Breathable",
  },
  {
    rank: "03",
    name: "Alo Yoga The Triumph Tee",
    price: "$58",
    verdict: "Best Studio Style",
    description: "If aesthetics matter in your studio — and they do — the Triumph Tee is Alo's most popular silhouette for a reason. The micro-rib fabric has a polished look that reads elevated without sacrificing movement. It's slightly fitted through the torso, which keeps it from interfering with strap work or carriage-based exercises.",
    affiliateUrl: "https://www.amazon.com/s?k=alo+yoga+triumph+tee&tag=pilatescollective-20",
    tag: "Studio Favourite",
  },
  {
    rank: "04",
    name: "Nike Dri-FIT Legend Training Tee",
    price: "$30",
    verdict: "Best Budget",
    description: "Nike's standard-issue Dri-FIT Legend is the workhorse pick for practitioners who train daily and don't want to think too hard about laundry. It wicks effectively, holds its shape through dozens of washes, and is available in an extensive colour range. At $30, it's the most cost-effective option on this list.",
    affiliateUrl: "https://www.amazon.com/s?k=nike+dri-fit+legend+training+tee+women&tag=pilatescollective-20",
    tag: "Best Value",
  },
  {
    rank: "05",
    name: "Gymshark Vital Seamless T-Shirt",
    price: "$38",
    verdict: "Best Seamless",
    description: "Seamless construction eliminates every seam that could press into skin during floor work. The Vital fabric is lightweight but substantial enough to feel like real clothing rather than a performance layer. Subtle texture panels on the side add visual interest without adding bulk — a good choice for those who prefer minimalist styling.",
    affiliateUrl: "https://www.amazon.com/s?k=gymshark+vital+seamless+t+shirt&tag=pilatescollective-20",
    tag: "Seamless Pick",
  },
  {
    rank: "06",
    name: "Patagonia Capilene Cool Trail Shirt",
    price: "$45",
    verdict: "Best Sustainable",
    description: "Made from 100% recycled polyester with HeiQ Fresh technology for odour control, the Capilene Cool Trail is the most environmentally responsible pick on this list without cutting corners on performance. The UPF 40+ rating and flat-lock seams make it a versatile tee equally suited to studio Pilates, outdoor cross-training, or travel.",
    affiliateUrl: "https://www.amazon.com/s?k=patagonia+capilene+cool+trail+shirt&tag=pilatescollective-20",
    tag: "Eco Choice",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Best Pilates T-Shirts (2026)",
      description: "The best t-shirts for Pilates — tested for breathability, stretch, and studio-ready style.",
      url: "https://pilatescollectiveclub.com/blog/best-pilates-tshirts",
      datePublished: "2026-07-06",
      dateModified: "2026-07-06",
      image: "https://pilatescollectiveclub.com/pictures/stitch-retail-activewear.png",
      author: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com" },
      publisher: { "@type": "Organization", name: "Pilates Collective Club", logo: { "@type": "ImageObject", url: "https://pilatescollectiveclub.com/logo.png" } },
      mainEntityOfPage: "https://pilatescollectiveclub.com/blog/best-pilates-tshirts",
    },
    {
      "@type": "ItemList",
      name: "Best Pilates T-Shirts",
      numberOfItems: 6,
      itemListElement: PRODUCTS.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.name, url: p.affiliateUrl })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", position: 2, name: "Journal", item: "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", position: 3, name: "Best Pilates T-Shirts", item: "https://pilatescollectiveclub.com/blog/best-pilates-tshirts" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Should I wear a t-shirt or tank top for Pilates?", acceptedAnswer: { "@type": "Answer", text: "Both work well. T-shirts are preferred in cooler studios or for those who feel more comfortable with covered shoulders. In heated reformer studios or intense Lagree sessions, a tank top may be more practical for temperature regulation. The key is fabric — choose moisture-wicking synthetic blends over cotton." } },
        { "@type": "Question", name: "What fabric is best for a Pilates t-shirt?", acceptedAnswer: { "@type": "Answer", text: "Polyester and nylon blends with moisture-wicking technology are the best choice. They dry quickly, stretch with your movements, and resist odour better than cotton. Look for four-way stretch construction and flatlock seams to avoid chafing during mat and reformer work." } },
        { "@type": "Question", name: "Can I wear a regular t-shirt to Pilates?", acceptedAnswer: { "@type": "Answer", text: "Yes, but regular cotton t-shirts absorb sweat rather than wicking it away, become heavy and uncomfortable mid-session, and can restrict movement. A technical athletic tee makes a noticeable difference in comfort and freedom of movement, especially during intensive reformer or Megaformer sessions." } },
      ],
    },
  ],
};

export default function BestPilatesTshirtsPage() {
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
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 400, color: "#b5a99a" }}>8 min read</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 400, lineHeight: 1.2, color: "#1a1714", marginBottom: "24px" }}>
              Best Pilates T-Shirts (2026)
            </h1>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "17px", fontWeight: 300, color: "#4a4540", lineHeight: 1.8, marginBottom: "20px" }}>
              The t-shirt you choose for Pilates matters more than most people realise. A cotton tee becomes a wet, restrictive layer within twenty minutes of reformer work. A quality technical tee stays light, moves with you, and keeps you looking as composed in the last exercise as the first.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "14px", fontWeight: 300, color: "#9a9490", lineHeight: 1.7, borderLeft: "2px solid #d4c5b5", paddingLeft: "16px" }}>
              This page contains affiliate links. We may earn a commission if you purchase through our links, at no extra cost to you.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-3xl mx-auto">
            <div style={{ position: "relative", height: "420px", borderRadius: "4px", overflow: "hidden" }}>
              <Image src="/pictures/stitch-retail-activewear.png" alt="Best Pilates T-Shirts 2026" fill style={{ objectFit: "cover" }} priority />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            {/* Quick picks */}
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

            {/* Products */}
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

            {/* FAQ */}
            <div style={{ marginTop: "64px" }}>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", fontWeight: 400, color: "#1a1714", marginBottom: "32px" }}>Frequently Asked Questions</h2>
              {[
                { q: "Should I wear a t-shirt or tank top for Pilates?", a: "Both work well. T-shirts are preferred in cooler studios or for those who feel more comfortable with covered shoulders. In heated reformer studios or intense Lagree sessions, a tank top may be more practical for temperature regulation. The key is fabric — choose moisture-wicking synthetic blends over cotton." },
                { q: "What fabric is best for a Pilates t-shirt?", a: "Polyester and nylon blends with moisture-wicking technology are the best choice. They dry quickly, stretch with your movements, and resist odour better than cotton. Look for four-way stretch construction and flatlock seams to avoid chafing during mat and reformer work." },
                { q: "Can I wear a regular t-shirt to Pilates?", a: "Yes, but regular cotton t-shirts absorb sweat rather than wicking it away, become heavy and uncomfortable mid-session, and can restrict movement. A technical athletic tee makes a noticeable difference in comfort and freedom of movement, especially during intensive reformer or Megaformer sessions." },
              ].map((item) => (
                <div key={item.q} style={{ borderTop: "1px solid #ede6dc", paddingTop: "24px", paddingBottom: "24px" }}>
                  <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "15px", fontWeight: 500, color: "#1a1714", marginBottom: "10px" }}>{item.q}</h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "14px", fontWeight: 300, color: "#4a4540", lineHeight: 1.75 }}>{item.a}</p>
                </div>
              ))}
            </div>

            {/* Further reading */}
            <div style={{ marginTop: "64px" }}>
              <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9a9490", marginBottom: "28px" }}>Further Reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="Best Pilates Tank Tops (2026)" excerpt="Racerbacks, strappy tanks, and studio styles compared for breathability, fit, and reformer-ready performance." href="/blog/best-pilates-tank-tops" category="Clothing" readTime="8 min" imageUrl="/pictures/jade-stephens-N21356amsyw-unsplash.jpg" />
                <ArticleCard title="Best Pilates Workout Tops" excerpt="Long-sleeve, short-sleeve, and layering tops compared for reformer and mat Pilates." href="/blog/best-pilates-workout-tops" category="Clothing" readTime="8 min" imageUrl="/pictures/stitch-retail-activewear.png" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find Your Studio" subtitle="Explore top-rated Pilates and reformer studios near you." showSearch searchPlaceholder="Search by city or neighbourhood..." />
      </main>
      <Footer />
    </>
  );
}
