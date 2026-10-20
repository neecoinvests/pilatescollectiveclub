import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import QuickPicks from "@/components/QuickPicks";
import TopPick from "@/components/TopPick";
import AffiliateNote from "@/components/AffiliateNote";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import { jsonLdHtml } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Best Pilates Tank Tops (2026)",
  description: "The best tank tops for Pilates — racerbacks, strappy styles, and seamless options compared on breathability, support, and reformer-ready fit. Our top picks for 2026.",
  keywords: [
    "best pilates tank top",
    "best tank top for pilates",
    "pilates racerback tank",
    "best tank top reformer pilates",
    "strappy tank pilates",
    "pilates studio tank top women",
    "best workout tank top pilates 2026",
    "pilates tank top lagree",
  ],
  openGraph: {
    title: "Best Pilates Tank Tops (2026)",
    description: "Racerbacks, strappy tanks, and studio styles compared for breathability, fit, and reformer-ready performance.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-tank-tops",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/jade-stephens-N21356amsyw-unsplash.jpg", width: 1200, height: 630, alt: "Best Pilates Tank Tops 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Tank Tops (2026)",
    description: "Racerbacks, strappy tanks, and studio styles compared for breathability, fit, and reformer-ready performance.",
    images: ["https://pilatescollectiveclub.com/pictures/jade-stephens-N21356amsyw-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-pilates-tank-tops" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Lululemon Swiftly Tech Racerback Tank",
    price: "$58",
    verdict: "Best Overall",
    description: "The Swiftly Tech Racerback is the most recommended tank in Pilates studios globally for good reason. The Swiftly fabric is buttery-soft, wicks sweat almost instantly, and the racerback cut provides full shoulder freedom for overhead reaches and shoulder bridge variations. It doesn't ride up, pill, or lose its shape after repeated washing. Not sold on Amazon: this link goes to Lululemon's own site.",
    affiliateUrl: "https://shop.lululemon.com",
    tag: "Top Pick",
  },
  {
    rank: "02",
    name: "Alo Yoga Airlift Intrigue Tank",
    price: "$62",
    verdict: "Best Premium",
    description: "Alo's Airlift fabric is their most technical offering — ultra-lightweight, compressive, and opaque in every colour. The Intrigue Tank features an open-cross back that elevates the silhouette while maximising airflow during heated reformer sessions. Worn equally for Pilates, yoga, and studio barre. Not sold on Amazon: this link goes to Alo Yoga's own site.",
    affiliateUrl: "https://www.aloyoga.com",
    tag: "Premium",
  },
  {
    rank: "03",
    name: "Gymshark Flex Strappy Back Tank",
    price: "$35",
    verdict: "Best for Lagree",
    description: "The multi-strap back of the Gymshark Flex Tank keeps you cool during high-output Lagree sessions while the fitted front stays in place through plank, pike, and mountain climber. Gymshark's Flex fabric has a subtle compression that doesn't restrict breathing — important during slow-twitch Megaformer work where breath control is essential. Not sold on Amazon: this link goes to Gymshark's own site.",
    affiliateUrl: "https://www.gymshark.com",
    tag: "Lagree Favourite",
  },
  {
    rank: "04",
    name: "Nike Dri-FIT One Slim-Fit Tank",
    price: "$35",
    verdict: "Best Budget Performance",
    description: "Nike's Dri-FIT One Tank delivers reliable moisture management at a price that makes it a no-brainer for daily training. The slim fit stays tucked during reformer footwork and the minimal design suits any studio environment. Available in 20+ colours. Wash after wash, it holds its shape and colour longer than most competitors at this price.",
    affiliateUrl: "https://www.amazon.com/s?k=nike+dri-fit+one+slim+fit+tank+top+women&tag=pilatescollective-20",
    tag: "Best Value",
  },
  {
    rank: "05",
    name: "Free People Movement Good Karma Tank",
    price: "$58",
    verdict: "Best Aesthetic",
    description: "Free People's Good Karma Tank bridges the gap between workout gear and everyday wear effortlessly. The loose, draped silhouette is ideal for mat Pilates and studio-to-street transitions, while the modal-blend fabric breathes well and drapes without clinging. A favourite for practitioners who prioritise style alongside performance.",
    affiliateUrl: "https://www.amazon.com/s?k=free+people+movement+good+karma+tank&tag=pilatescollective-20",
    tag: "Lifestyle Pick",
  },
  {
    rank: "06",
    name: "Amazon Essentials Active Performance Tank",
    price: "$18",
    verdict: "Best Budget",
    description: "At under $20, the Amazon Essentials Performance Tank does everything a basic tank needs to: wicks sweat, provides a comfortable fit through a full reformer class, and comes in a wide range of colours. The polyester-elastane blend has reasonable four-way stretch and holds up well to regular washing. An honest, unpretentious pick for beginners.",
    affiliateUrl: "https://www.amazon.com/s?k=amazon+essentials+active+performance+tank+top+women&tag=pilatescollective-20",
    tag: "Budget Pick",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Best Pilates Tank Tops (2026)",
      description: "The best tank tops for Pilates — racerbacks, strappy styles, and seamless options compared on breathability, support, and reformer-ready fit.",
      url: "https://pilatescollectiveclub.com/blog/best-pilates-tank-tops",
      datePublished: "2026-07-06",
      dateModified: "2026-10-20",
      image: "https://pilatescollectiveclub.com/pictures/jade-stephens-N21356amsyw-unsplash.jpg",
      author: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com" },
      publisher: { "@type": "Organization", name: "Pilates Collective Club", logo: { "@type": "ImageObject", url: "https://pilatescollectiveclub.com/logo.png" } },
      mainEntityOfPage: "https://pilatescollectiveclub.com/blog/best-pilates-tank-tops",
    },
    {
      "@type": "ItemList",
      name: "Best Pilates Tank Tops",
      numberOfItems: 6,
      itemListElement: PRODUCTS.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.name, url: p.affiliateUrl })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", position: 2, name: "Journal", item: "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", position: 3, name: "Best Pilates Tank Tops", item: "https://pilatescollectiveclub.com/blog/best-pilates-tank-tops" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What type of tank top is best for reformer Pilates?", acceptedAnswer: { "@type": "Answer", text: "A fitted or semi-fitted tank with a racerback or cross-back strap configuration is ideal for reformer Pilates. It stays in place during supine and prone exercises, doesn't interfere with straps or footbar, and allows instructors to observe spinal alignment. Avoid very loose tanks — they ride up during footwork and inversion-adjacent positions." } },
        { "@type": "Question", name: "Should I wear a tank top or t-shirt for Lagree?", acceptedAnswer: { "@type": "Answer", text: "In heated Lagree studios, a tank top is usually the better choice due to the intensity of the workout and elevated room temperature. The open back of a strappy or racerback tank allows far more heat to escape than a t-shirt. For cooler studios, a fitted t-shirt or long-sleeve base layer may be more comfortable." } },
        { "@type": "Question", name: "What length should a Pilates tank top be?", acceptedAnswer: { "@type": "Answer", text: "A medium-length tank — reaching the high hip — is the most practical for Pilates. It stays tucked during leg work and footbar exercises without being so long it bunches up. Very cropped tanks can expose the lower back during reformer exercises, which is a comfort issue in cooler studios." } },
      ],
    },
  ],
};

const QP_NOTES = ["Best Overall", "Best Premium", "Best for Lagree", "Best Budget Performance", "Best Aesthetic", "Best Budget"];

export default function BestPilatesTankTopsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Clothing</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Pilates Tank Tops<br /><span style={{ color: "#8b4a31" }}>(2026)</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated October 2026 · 8 min read</p>
            <TopPick name={PRODUCTS[0].name} price={PRODUCTS[0].price} note={QP_NOTES[0]} url={PRODUCTS[0].affiliateUrl} />
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              A tank top might be the most-worn item in a Pilates practitioner&apos;s wardrobe. It needs to stay put through footwork, float-free during roll-ups, and not draw a single distracted thought mid-class. These six picks earn their place in any studio kit.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/jade-stephens-N21356amsyw-unsplash.jpg" alt="Best Pilates Tank Tops 2026" fill className="object-cover" style={{ filter: "brightness(0.85)" }} priority />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <QuickPicks className="mb-6 mt-4" picks={PRODUCTS.map((pr, i) => ({ name: pr.name, price: pr.price, url: pr.affiliateUrl, note: QP_NOTES[i] }))} />
            <AffiliateNote>This page contains affiliate links. We may earn a commission if you purchase through our links, at no extra cost to you.</AffiliateNote>

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
                { q: "What type of tank top is best for reformer Pilates?", a: "A fitted or semi-fitted tank with a racerback or cross-back strap configuration is ideal for reformer Pilates. It stays in place during supine and prone exercises, doesn't interfere with straps or footbar, and allows instructors to observe spinal alignment. Avoid very loose tanks — they ride up during footwork and inversion-adjacent positions." },
                { q: "Should I wear a tank top or t-shirt for Lagree?", a: "In heated Lagree studios, a tank top is usually the better choice due to the intensity of the workout and elevated room temperature. The open back of a strappy or racerback tank allows far more heat to escape than a t-shirt. For cooler studios, a fitted t-shirt or long-sleeve base layer may be more comfortable." },
                { q: "What length should a Pilates tank top be?", a: "A medium-length tank — reaching the high hip — is the most practical for Pilates. It stays tucked during leg work and footbar exercises without being so long it bunches up. Very cropped tanks can expose the lower back during reformer exercises, which is a comfort issue in cooler studios." },
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
                <ArticleCard title="Best Pilates T-Shirts (2026)" excerpt="Technical tees from Lululemon, Vuori, Alo Yoga, Nike, and more — compared on breathability and studio-ready style." href="/blog/best-pilates-tshirts" category="Clothing" readTime="8 min" imageUrl="/pictures/stitch-retail-activewear.png" />
                <ArticleCard title="Best Moisture-Wicking Tops for Pilates & Spin" excerpt="The best sweat-wicking tops for high-intensity Lagree and spin sessions, ranked by breathability and fit." href="/blog/best-moisture-wicking-top-for-pilates-and-spin" category="Clothing" readTime="9 min" imageUrl="/pictures/jade-stephens-N21356amsyw-unsplash.jpg" />
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
