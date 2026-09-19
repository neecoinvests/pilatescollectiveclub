import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Ankle Weights (2026): Studio-Tested Picks",
  description: "The best ankle weights for Pilates — fabric loops, neoprene, and adjustable options tested for reformer and mat Pilates comfort and secure fit.",
  openGraph: {
    title: "Best Pilates Ankle Weights (2026): Bala Bangles & Alternatives",
    description: "The accessory that defines the boutique Pilates aesthetic — and the four alternatives that also deliver.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-ankle-weights",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/jade-stephens-N21356amsyw-unsplash.jpg", width: 1200, height: 630, alt: "Best Pilates Ankle Weights — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Ankle Weights (2026)",
    description: "Bala Bangles vs. BWSS vs. Alo — the best ankle weights for Pilates ranked honestly.",
    images: ["https://pilatescollectiveclub.com/pictures/jade-stephens-N21356amsyw-unsplash.jpg"],
  },
  keywords: ["best pilates ankle weights", "ankle weights for pilates 2026", "pilates ankle weight review", "best ankle weights reformer pilates", "fabric ankle weights pilates", "adjustable ankle weights pilates", "pilates leg weights"],
  alternates: {
    canonical: "https://pilatescollectiveclub.com/blog/best-pilates-ankle-weights",
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Bala Bangles (1lb each)",
    price: "From $55/pair",
    verdict: "Best for studio style",
    tag: "Editor's Pick",
    description:
      "Bala Bangles have become the reformer studio's fashion accessory. Cast iron in a soft silicone sleeve, they strap securely with a magnetic clasp, sit flat against the ankle, and genuinely don't move during the Pilates series. The 1lb weight per ankle is ideal for footwork variations, the side-lying series, and the long-spine massage — enough to activate without destabilising. Comes in a range of colours to match your kit.",
    affiliateUrl: "https://www.amazon.com/s?k=bala+bangles+ankle+weights&tag=pilatescollective-20",
  },
  {
    rank: "02",
    name: "BWSS Adjustable Ankle Weights",
    price: "From $32/pair",
    verdict: "Best value adjustable",
    tag: "Best Value",
    description:
      "The BWSS set is the practical choice for practitioners who want a range of weights without buying multiple sets. Adjustable from 1lb to 10lb per ankle via removable inserts, secured by dual Velcro straps that stay put through all leg work, and padded enough to be comfortable in supine work. Excellent for home practice where flexibility matters.",
    affiliateUrl: "https://www.amazon.com/s?k=BWSS+adjustable+ankle+weights&tag=pilatescollective-20",
  },
  {
    rank: "03",
    name: "Lululemon Ankle Weights",
    price: "From $48/pair",
    verdict: "Best premium fabric wrap",
    tag: "Premium Pick",
    description:
      "Lululemon's ankle weights use the same quality control as their apparel — a soft neoprene wrap with a secure adjustable strap, available in 1lb and 2lb versions. They're heavier-feeling than Bala Bangles for the same weight (denser material) which some practitioners prefer for the leg spring and standing series. The clean design fits the studio aesthetic without compromise.",
    affiliateUrl: "https://www.amazon.com/s?k=lululemon+ankle+weights&tag=pilatescollective-20",
  },
  {
    rank: "04",
    name: "Sportneer Ankle Weights Set",
    price: "From $22/pair",
    verdict: "Best budget",
    tag: "Budget Pick",
    description:
      "For home practice or those new to ankle weights in Pilates, the Sportneer set delivers solid performance at an entry-level price. Adjustable from 0.5lb to 3lb via removable iron sand pockets, dual Velcro closure stays secure, and the neoprene construction is comfortable for longer series. The design is functional rather than stylish — worth noting if you take them to a studio.",
    affiliateUrl: "https://www.amazon.com/s?k=sportneer+adjustable+ankle+weights&tag=pilatescollective-20",
  },
  {
    rank: "05",
    name: "Alo Yoga Ankle Weights",
    price: "From $65/pair",
    verdict: "Best boutique option",
    tag: "Boutique Pick",
    description:
      "Alo's ankle weights are the premium studio choice when aesthetics matter as much as function. Weighted in 1lb and 2lb options, the silicone-coated design echoes the Bala aesthetic but with Alo's distinctive branding and colorways. The magnetic clasp is reliable and opens with one hand, which matters when you're transitioning between exercises. Heavy on style, solid on substance.",
    affiliateUrl: "https://www.amazon.com/s?k=alo+yoga+ankle+weights&tag=pilatescollective-20",
  },
];

const FAQS = [
  {
    q: "What weight ankle weights should I use for Pilates?",
    a: "Start with 0.5lb to 1lb per ankle. Pilates works with precision at low resistance — heavier weights compromise form. The Bala Bangles at 1lb per ankle are the studio standard. Experienced practitioners occasionally go to 2lb for standing work, but the primary benefit of ankle weights in Pilates is proprioceptive feedback, not resistance training.",
  },
  {
    q: "Are Bala Bangles good for Pilates?",
    a: "Yes. Bala Bangles are the most popular ankle weight at reformer studios globally. The secure magnetic clasp, flat profile, and 1lb per ankle weight make them ideal for the Pilates series. The aesthetic also fits the boutique studio environment well.",
  },
  {
    q: "Can you wear ankle weights on the reformer?",
    a: "Yes, with care. Ankle weights work well for mat Pilates and the standing and side-lying series on the reformer. They are generally not used during footwork or exercises where the feet are loaded against the footbar — in those cases, the spring resistance replaces external loading.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://pilatescollectiveclub.com/blog/best-pilates-ankle-weights/#article",
      "headline": "Best Pilates Ankle Weights (2026): Light, Adjustable & Studio-Tested",
      "description": "The best ankle weights for Pilates — options tested for balance, leg spring work, and side-lying series.",
      "image": {
        "@type": "ImageObject",
        "url": "https://pilatescollectiveclub.com/pictures/jade-stephens-N21356amsyw-unsplash.jpg",
        "width": 1200,
        "height": 630,
      },
      "author": {
        "@type": "Organization",
        "@id": "https://pilatescollectiveclub.com/#organization",
        "name": "Pilates Collective Club",
        "url": "https://pilatescollectiveclub.com",
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://pilatescollectiveclub.com/#organization",
        "name": "Pilates Collective Club",
        "logo": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/pcc-logo.png" },
      },
      "datePublished": "2026-05-01",
      "dateModified": "2026-05-17",
      "url": "https://pilatescollectiveclub.com/blog/best-pilates-ankle-weights",
      "mainEntityOfPage": "https://pilatescollectiveclub.com/blog/best-pilates-ankle-weights",
      "articleSection": "Equipment Guide",
      "inLanguage": "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Pilates Ankle Weights", "item": "https://pilatescollectiveclub.com/blog/best-pilates-ankle-weights" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": FAQS.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Ankle Weights (2026)",
      "numberOfItems": PRODUCTS.length,
      "itemListElement": PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "description": p.description,
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": p.price.replace(/[^0-9]/g, ""),
            "availability": "https://schema.org/InStock",
            "url": p.affiliateUrl,
          },
        },
      })),
    },
  ],
};

export default function BestPilatesAnkleWeightsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>

        {/* Hero section */}
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Equipment Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Ankle Weights</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Pilates Ankle Weights<br /><span style={{ color: "#8b4a31" }}>(2026): Studio-Tested</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 7 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Ankle weights in Pilates serve a different purpose than in a gym. The primary benefit is proprioceptive feedback — the added weight helps you feel your leg more acutely, improving control during the side-lying series, standing work, and leg spring exercises. The resistance is secondary. This distinction matters enormously when choosing weight: heavier is not better. This guide ranks the five best options across every price point and use case.
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/jade-stephens-N21356amsyw-unsplash.jpg" alt="Pilates ankle weights for studio use" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What to look for in Pilates ankle weights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { heading: "Weight range", body: "0.5lb to 1lb per ankle is the Pilates-appropriate range. Bala Bangles at 1lb are the studio standard. Go heavier only for advanced standing series work, and only if your form is solid." },
                  { heading: "Closure security", body: "The weight must not shift, slide, or come undone during dynamic leg work. Magnetic clasps (Bala, Alo) and dual Velcro (BWSS) are the most reliable closure types tested." },
                  { heading: "Profile and padding", body: "A low-profile weight sits flush against the ankle and doesn't interfere with footbar work or the loop straps on a reformer. Thick, padded designs can get in the way." },
                  { heading: "Aesthetics", body: "You're wearing these in a boutique studio. Bala Bangles and Alo weights are designed to look good. The Sportneer and BWSS sets are functional rather than stylish — keep this in mind for studio use." },
                ].map((item) => (
                  <div key={item.heading} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.heading}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick reference table */}
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
                  <a href={p.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored"
                    style={{ display: "block", fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "10px 14px", whiteSpace: "nowrap", flexShrink: 0 }}
                  >Buy →</a>
                </div>
              ))}
            </div>

            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Ankle Weights · Studio-Tested</p>
              <div className="space-y-10">
                {PRODUCTS.map((p) => (
                  <div key={p.name}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-semibold" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{p.rank}</span>
                      <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{p.tag}</span>
                    </div>
                    <ProductCard
                      name={p.name}
                      description={p.description}
                      price={p.price}
                      affiliateUrl={p.affiliateUrl}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {FAQS.map((item) => (
                  <div key={item.q} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.q}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Further reading */}
            <div>
              <h2 className="text-2xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="Best Pilates Equipment for Home Practice" excerpt="Everything beyond the reformer — mats, bands, rings, and ankle weights." href="/blog/best-pilates-equipment-for-home-practice" category="Equipment" readTime="10 min read" date="May 2026" imageUrl="/pictures/elena-kloppenburg-erUC4fTtCuo-unsplash.jpg" />
                <ArticleCard title="Best Pilates Resistance Bands (2026)" excerpt="Long bands, loop bands, and fabric options for a serious Pilates context." href="/blog/best-pilates-resistance-bands" category="Equipment" readTime="8 min read" date="May 2026" imageUrl="/pictures/ahmet-kurt-a1IhqqW8JQE-unsplash.jpg" />
                <ArticleCard title="Best Pilates Grip Socks" excerpt="The essential studio accessory — five options across every price point." href="/blog/best-pilates-grip-socks" category="Equipment" readTime="7 min read" date="May 2026" imageUrl="/pictures/jade-stephens-N21356amsyw-unsplash.jpg" />
              </div>
            </div>

          </div>
        </section>

        <CTASection title="Find a studio to try it in" subtitle="Our city guides cover the best Pilates studios worldwide." />

      </main>
      <Footer />
    </>
  );
}
