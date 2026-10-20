import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import QuickPicks from "@/components/QuickPicks";
import TopPick from "@/components/TopPick";
import AffiliateNote from "@/components/AffiliateNote";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import { jsonLdHtml, productItemList } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Best Pilates T-Shirts (2026)",
  description: "The best t-shirts for Pilates — compared on breathability, stretch, and studio-ready style. Our top picks from Lululemon, Vuori, Alo Yoga, Nike, and more.",
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
    description: "Top-rated t-shirts for Pilates — breathable, stretchy, and studio-ready from Lululemon, Vuori, Alo Yoga, Nike, and more.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-tshirts",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-retail-activewear.png", width: 1200, height: 630, alt: "Best Pilates T-Shirts 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates T-Shirts (2026)",
    description: "Top-rated t-shirts for Pilates — breathable, stretchy, and studio-ready.",
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
    description: "Lululemon's Metal Vent Tech is the benchmark for Pilates tees. The back panel is open-weave mesh for maximum ventilation during reformer work, while the front stays structured enough for studio settings. Four-way stretch means the fabric moves with you through every rotation and extension without bunching or restricting. Not sold on Amazon: this link goes to Lululemon's own site.",
    affiliateUrl: "https://shop.lululemon.com",
    tag: "Top Pick",
  },
  {
    rank: "02",
    name: "Vuori Strato Tech Tee",
    price: "$64",
    verdict: "Best Breathable",
    description: "Vuori's Strato Tech uses a proprietary anti-microbial polyester that stays fresh through back-to-back sessions. The relaxed fit is on-trend for Pilates studios without being sloppy — it doesn't ride up during supine footwork or aerial work on the reformer. The neutral colourways suit any studio aesthetic. Not sold on Amazon: this link goes to Vuori's own site.",
    affiliateUrl: "https://vuoriclothing.com",
    tag: "Best Breathable",
  },
  {
    rank: "03",
    name: "Alo Yoga The Triumph Tee",
    price: "$58",
    verdict: "Best Studio Style",
    description: "If aesthetics matter in your studio — and they do — the Triumph Tee is Alo's most popular silhouette for a reason. The micro-rib fabric has a polished look that reads elevated without sacrificing movement. It's slightly fitted through the torso, which keeps it from interfering with strap work or carriage-based exercises. Not sold on Amazon: this link goes to Alo Yoga's own site.",
    affiliateUrl: "https://www.aloyoga.com",
    tag: "Studio Favourite",
  },
  {
    rank: "04",
    name: "Nike Dri-FIT Legend Training Tee",
    price: "$37.00",
    verdict: "Best Budget",
    description: "Nike's standard-issue Dri-FIT Legend is the workhorse pick for practitioners who train daily and don't want to think too hard about laundry. It wicks effectively, holds its shape through dozens of washes, and is available in an extensive colour range. At $37, it's the most cost-effective option on this list.",
    affiliateUrl: "https://www.amazon.com/dp/B0CR775CQR?tag=pilatescollective-20",
    tag: "Best Value",
  },
  {
    rank: "05",
    name: "Gymshark Vital Seamless T-Shirt",
    price: "$38",
    verdict: "Best Seamless",
    description: "Seamless construction eliminates every seam that could press into skin during floor work. The Vital fabric is lightweight but substantial enough to feel like real clothing rather than a performance layer. Subtle texture panels on the side add visual interest without adding bulk — a good choice for those who prefer minimalist styling. Not sold on Amazon: this link goes to Gymshark's own site.",
    affiliateUrl: "https://www.gymshark.com",
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
      description: "The best t-shirts for Pilates — compared on breathability, stretch, and studio-ready style.",
      url: "https://pilatescollectiveclub.com/blog/best-pilates-tshirts",
      datePublished: "2026-07-06",
      dateModified: "2026-10-20",
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

const QP_NOTES = ["Best Overall", "Best Breathable", "Best Studio Style", "Best Budget", "Best Seamless", "Best Sustainable"];

const ITEM_LIST = productItemList("Best Pilates T-Shirts (2026)", PRODUCTS.filter((pr) => /amazon\.[a-z.]+\/dp\//.test(pr.affiliateUrl)).map((pr) => ({ name: pr.name, description: pr.description, price: pr.price, url: pr.affiliateUrl })));

export default function BestPilatesTshirtsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml({ "@context": "https://schema.org", ...ITEM_LIST }) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Clothing</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Pilates T-Shirts<br /><span style={{ color: "#8b4a31" }}>(2026)</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Prices checked October 20, 2026 · 8 min read</p>
            <TopPick name={PRODUCTS[3].name} price={PRODUCTS[3].price} note={QP_NOTES[3]} url={PRODUCTS[3].affiliateUrl} />
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              The t-shirt you choose for Pilates matters more than most people realise. A cotton tee becomes a wet, restrictive layer within twenty minutes of reformer work. A quality technical tee stays light, moves with you, and keeps you looking as composed in the last exercise as the first.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-retail-activewear.png" alt="Best Pilates T-Shirts 2026" fill className="object-cover" style={{ filter: "brightness(0.85)" }} priority />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            {/* Quick picks */}
            <QuickPicks className="mb-6 mt-4" picks={PRODUCTS.map((pr, i) => ({ name: pr.name, price: pr.price, url: pr.affiliateUrl, note: QP_NOTES[i] }))} />
            <AffiliateNote>This page contains affiliate links. We may earn a commission if you purchase through our links, at no extra cost to you.</AffiliateNote>

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
                <ArticleCard title="Best Pilates Grip Socks (2026): 5 Verified Picks" excerpt="5 verified, in-stock Pilates grip socks on Amazon: toesox and TAVI studio favourites, Tucketts toeless, plus Gaiam…" href="/blog/best-pilates-grip-socks" category="Activewear" readTime="6 min read" imageUrl="/pictures/jade-stephens-N21356amsyw-unsplash.jpg" />
                <ArticleCard title="Best Pilates Leggings (2026): 5 Picks for Reformer & Mat" excerpt="The 5 best Pilates leggings on Amazon, from $26 to $134: Lululemon Align, Beyond Yoga, Sweaty Betty, Varley and…" href="/blog/best-pilates-leggings" category="Activewear" readTime="9 min read" imageUrl="/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg" />
                <ArticleCard title="Athleta for Pilates (2026): Best Leggings & Tops Reviewed" excerpt="Best Athleta pieces for Pilates, Salutation, Elation, and Brooklyn leggings reviewed for reformer class…" href="/blog/athleta-pilates" category="Activewear" readTime="9 min read" imageUrl="/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg" />
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
