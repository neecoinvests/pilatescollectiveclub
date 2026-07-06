import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Hoodies & Warm-Up Jackets (2026) | Pilates Collective Club",
  description: "The best hoodies and warm-up jackets for Pilates — tested for warmth, movement freedom, and studio style. Our top picks from Lululemon, Alo Yoga, Vuori, Gymshark, and more.",
  keywords: [
    "best pilates hoodie",
    "best warm up jacket pilates",
    "pilates hoodie women",
    "best sweatshirt for pilates",
    "pilates zip up jacket",
    "best cover up after pilates",
    "pilates studio hoodie 2026",
    "best hoodie lagree pilates",
  ],
  openGraph: {
    title: "Best Pilates Hoodies & Warm-Up Jackets (2026)",
    description: "The best hoodies and warm-up jackets for Pilates — tested for warmth, movement freedom, and studio style.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-hoodie",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg", width: 1200, height: 630, alt: "Best Pilates Hoodies 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Hoodies & Warm-Up Jackets (2026)",
    description: "The best hoodies and warm-up jackets for Pilates — tested for warmth, movement freedom, and studio style.",
    images: ["https://pilatescollectiveclub.com/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-pilates-hoodie" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Lululemon Scuba Oversized Half-Zip Hoodie",
    price: "$118",
    verdict: "Best Overall",
    description: "The Lululemon Scuba is the most-recognised hoodie in the global Pilates community. The French terry fabric is soft enough to wear against bare skin and warm enough for cold studios, pre-class warm-ups, and post-class cool-downs. The oversized fit layers easily over any Pilates outfit. The half-zip makes removal easy between exercises without needing to fully undress.",
    affiliateUrl: "https://www.amazon.com/s?k=lululemon+scuba+oversized+half+zip+hoodie&tag=pilatescollective-20",
    tag: "Top Pick",
  },
  {
    rank: "02",
    name: "Alo Yoga Muse Sweatshirt",
    price: "$114",
    verdict: "Best Premium",
    description: "Alo's Muse Sweatshirt has become a studio staple for practitioners who want their warm-up layer to look as considered as their workout kit. The heavyweight French terry drapes beautifully and the dropped shoulders allow complete arm mobility for warm-up stretches. A crossover piece that transitions from studio to daily wear without looking like gym kit.",
    affiliateUrl: "https://www.amazon.com/s?k=alo+yoga+muse+sweatshirt&tag=pilatescollective-20",
    tag: "Premium",
  },
  {
    rank: "03",
    name: "Vuori Halo Performance Hoodie",
    price: "$89",
    verdict: "Best Performance Hoodie",
    description: "Vuori's Halo Performance Hoodie bridges technical and lifestyle wear better than almost any other option. The CloudKnit fabric is moisture-wicking, quick-drying, and soft against the skin — meaning you can keep it on through your entire session if the studio is cool. The athletic-tapered silhouette doesn't bunch during reformer exercises or restrict shoulder movement.",
    affiliateUrl: "https://www.amazon.com/s?k=vuori+halo+performance+hoodie+women&tag=pilatescollective-20",
    tag: "Best Performance",
  },
  {
    rank: "04",
    name: "Gymshark Crest Hoodie",
    price: "$60",
    verdict: "Best Value",
    description: "The Gymshark Crest Hoodie is the most straightforward, no-nonsense option on this list. The brushed-back fleece interior is genuinely warm, the kangaroo pocket is functional, and the relaxed fit accommodates layers underneath without feeling sloppy. Excellent durability at $60 — a reliable pick for practitioners who need a warm-up layer without the premium price tag.",
    affiliateUrl: "https://www.amazon.com/s?k=gymshark+crest+hoodie+women&tag=pilatescollective-20",
    tag: "Best Value",
  },
  {
    rank: "05",
    name: "Girlfriend Collective Restored Fleece Hoodie",
    price: "$78",
    verdict: "Best Sustainable",
    description: "Made from 100% recycled post-consumer plastic bottles, the Girlfriend Collective Restored Fleece is the most environmentally responsible warm-up layer on this list. The fleece is soft, pill-resistant, and comes in an inclusive size range. Fair Trade certified. For practitioners who want their values reflected in every garment they own.",
    affiliateUrl: "https://www.amazon.com/s?k=girlfriend+collective+restored+fleece+hoodie&tag=pilatescollective-20",
    tag: "Eco Choice",
  },
  {
    rank: "06",
    name: "Amazon Essentials Full-Zip Fleece Hoodie",
    price: "$28",
    verdict: "Best Budget",
    description: "At $28, Amazon's Essentials Full-Zip Fleece Hoodie is the most accessible warm-up option on this list. The full-zip design makes layering and removal effortless, the fleece is adequately warm for most studio temperatures, and the classic cut suits any studio environment. For practitioners just building out their Pilates wardrobe, this is the sensible starting point.",
    affiliateUrl: "https://www.amazon.com/s?k=amazon+essentials+full+zip+fleece+hoodie+women&tag=pilatescollective-20",
    tag: "Budget Pick",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Best Pilates Hoodies & Warm-Up Jackets (2026)",
      description: "The best hoodies and warm-up jackets for Pilates — tested for warmth, movement freedom, and studio style.",
      url: "https://pilatescollectiveclub.com/blog/best-pilates-hoodie",
      datePublished: "2026-07-06",
      dateModified: "2026-07-06",
      image: "https://pilatescollectiveclub.com/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg",
      author: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com" },
      publisher: { "@type": "Organization", name: "Pilates Collective Club", logo: { "@type": "ImageObject", url: "https://pilatescollectiveclub.com/logo.png" } },
      mainEntityOfPage: "https://pilatescollectiveclub.com/blog/best-pilates-hoodie",
    },
    {
      "@type": "ItemList",
      name: "Best Pilates Hoodies & Warm-Up Jackets",
      numberOfItems: 6,
      itemListElement: PRODUCTS.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.name, url: p.affiliateUrl })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", position: 2, name: "Journal", item: "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", position: 3, name: "Best Pilates Hoodies & Warm-Up Jackets", item: "https://pilatescollectiveclub.com/blog/best-pilates-hoodie" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Should I wear a hoodie during a Pilates session?", acceptedAnswer: { "@type": "Answer", text: "In most cases, hoodies are worn before and after rather than during a Pilates session. However, in cold studios or during the first few minutes of a mat warm-up, wearing a lightweight hoodie until your body temperature rises is practical. Remove it before reformer work — excess fabric can interfere with straps and inhibit the instructor's view of your alignment." } },
        { "@type": "Question", name: "What makes a good Pilates hoodie different from a regular one?", acceptedAnswer: { "@type": "Answer", text: "A good Pilates hoodie prioritises arm mobility (raglan or dropped shoulder seams), stays in place when arms are raised, is soft enough to wear against bare skin, and is easy to remove mid-class if needed. A half-zip or full-zip design is more practical than a pullover for layering purposes in a studio setting." } },
        { "@type": "Question", name: "What is the most popular hoodie worn at Pilates studios?", acceptedAnswer: { "@type": "Answer", text: "The Lululemon Scuba Oversized Half-Zip Hoodie is by far the most-seen hoodie in Pilates and reformer studios globally. Its reputation is well-earned: the French terry fabric is exceptionally soft, the oversized fit is comfortable over any base layer, and it has become a recognisable signifier of the Pilates community aesthetic worldwide." } },
      ],
    },
  ],
};

export default function BestPilatesHoodiePage() {
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
              Best Pilates Hoodies &amp; Warm-Up Jackets (2026)
            </h1>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "17px", fontWeight: 300, color: "#4a4540", lineHeight: 1.8, marginBottom: "20px" }}>
              The warm-up layer you throw on before class and reach for immediately after is as much a part of your Pilates kit as your leggings. The right hoodie keeps muscles warm between exercises and signals the kind of considered approach to training that the Pilates method demands.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "14px", fontWeight: 300, color: "#9a9490", lineHeight: 1.7, borderLeft: "2px solid #d4c5b5", paddingLeft: "16px" }}>
              This page contains affiliate links. We may earn a commission if you purchase through our links, at no extra cost to you.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-3xl mx-auto">
            <div style={{ position: "relative", height: "420px", borderRadius: "4px", overflow: "hidden" }}>
              <Image src="/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg" alt="Best Pilates Hoodies 2026" fill style={{ objectFit: "cover" }} priority />
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
                { q: "Should I wear a hoodie during a Pilates session?", a: "In most cases, hoodies are worn before and after rather than during a Pilates session. However, in cold studios or during the first few minutes of a mat warm-up, wearing a lightweight hoodie until your body temperature rises is practical. Remove it before reformer work — excess fabric can interfere with straps and inhibit the instructor's view of your alignment." },
                { q: "What makes a good Pilates hoodie different from a regular one?", a: "A good Pilates hoodie prioritises arm mobility (raglan or dropped shoulder seams), stays in place when arms are raised, is soft enough to wear against bare skin, and is easy to remove mid-class if needed. A half-zip or full-zip design is more practical than a pullover for layering purposes in a studio setting." },
                { q: "What is the most popular hoodie worn at Pilates studios?", a: "The Lululemon Scuba Oversized Half-Zip Hoodie is by far the most-seen hoodie in Pilates and reformer studios globally. Its reputation is well-earned: the French terry fabric is exceptionally soft, the oversized fit is comfortable over any base layer, and it has become a recognisable signifier of the Pilates community aesthetic worldwide." },
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
                <ArticleCard title="Best Pilates T-Shirts (2026)" excerpt="Technical tees from Lululemon, Vuori, Alo Yoga, and Nike — tested for breathability and studio-ready style." href="/blog/best-pilates-tshirts" category="Clothing" readTime="8 min" imageUrl="/pictures/stitch-retail-activewear.png" />
                <ArticleCard title="What to Wear to Pilates" excerpt="The complete guide to Pilates clothing — what works, what to avoid, and how to dress for reformer vs mat." href="/blog/what-to-wear-to-pilates" category="Beginners" readTime="7 min" imageUrl="/pictures/stitch-retail-activewear.png" />
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
