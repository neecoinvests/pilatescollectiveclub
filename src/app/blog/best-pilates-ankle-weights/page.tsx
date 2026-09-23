import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Ankle Weights (2026): 2 Real Options Compared",
  description: "The Sportneer Adjustable Ankle Weights and the BECOJADDE Ankle Weights are both live, currently-sold Amazon listings with verified prices and specs. Here's how they compare for Pilates use.",
  openGraph: {
    title: "Best Pilates Ankle Weights (2026): 2 Real Options Compared",
    description: "The Sportneer Adjustable Ankle Weights and the BECOJADDE Ankle Weights — real, in-stock Amazon listings compared.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-ankle-weights",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/jade-stephens-N21356amsyw-unsplash.jpg", width: 1200, height: 630, alt: "Best Pilates Ankle Weights — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Ankle Weights (2026)",
    description: "Real, in-stock Amazon listings — compared.",
    images: ["https://pilatescollectiveclub.com/pictures/jade-stephens-N21356amsyw-unsplash.jpg"],
  },
  keywords: ["best pilates ankle weights", "sportneer ankle weights", "becojadde ankle weights", "ankle weights for pilates 2026", "pilates leg weights"],
  alternates: {
    canonical: "https://pilatescollectiveclub.com/blog/best-pilates-ankle-weights",
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Sportneer Adjustable Ankle Weights (2-10lb per pair)",
    price: "$27.89",
    verdict: "Best for progressive loading across a wide range",
    description:
      "Each weight adjusts from 1 to 5lb in 1lb increments using removable sand bags, giving a 2-10lb range across the pair. That range covers everything from light Pilates standing series work up to more demanding conditioning, without buying multiple sets. Fits ankles from 7.5 to 12.5 inches, and the sand-bag design keeps the profile relatively low against the leg.",
    affiliateUrl: "https://www.amazon.com/dp/B07F25L7QK?tag=pilatescollective-20",
    tag: "Best Adjustable Range",
  },
  {
    rank: "02",
    name: "BECOJADDE Ankle Weights (Set of 2, 1lb each, expandable)",
    price: "$20.69",
    verdict: "Best secure fit for dynamic mat work",
    description:
      "A lighter, more precisely adjustable option: each 1lb weight is built from individually removable 0.125lb blocks, so you can fine-tune the load in small steps — useful for the low, controlled resistance classical Pilates favors. The non-slip textured back plus adjustable elastic and velcro closure keeps the weight from shifting during dynamic leg circles or side-lying series work.",
    affiliateUrl: "https://www.amazon.com/dp/B0DBHHVMKD?tag=pilatescollective-20",
    tag: "Best Secure Fit",
  },
];

const FAQS = [
  {
    q: "Is there a real ankle weight sold on Amazon that you can verify?",
    a: "Yes. The Sportneer Adjustable Ankle Weights ($27.89, 2-10lb per pair) and the BECOJADDE Ankle Weights ($20.69, set of 2, 1lb each and expandable) are both live, currently-sold Amazon listings.",
  },
  {
    q: "What weight ankle weights should I use for Pilates?",
    a: "In general, 0.5lb to 1lb per ankle is the commonly recommended range for Pilates — the method works with precision at low resistance, and heavier weights tend to compromise form. The BECOJADDE's 0.125lb-increment adjustability suits that range well; the Sportneer's wider 1-5lb per-side range suits practitioners who also want heavier conditioning options.",
  },
  {
    q: "Can you wear ankle weights on the reformer?",
    a: "In general, yes, with care — ankle weights are typically used for mat Pilates and the standing or side-lying series, but not during footwork or exercises where the feet are loaded against the footbar, since spring resistance replaces external loading there.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://pilatescollectiveclub.com/blog/best-pilates-ankle-weights/#article",
      "headline": "Best Pilates Ankle Weights (2026): 2 Real Options Compared",
      "description": "The Sportneer Adjustable Ankle Weights and the BECOJADDE Ankle Weights, both verified as live Amazon listings, compared for Pilates use.",
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
      "dateModified": "2026-09-23",
      "url": "https://pilatescollectiveclub.com/blog/best-pilates-ankle-weights",
      "mainEntityOfPage": "https://pilatescollectiveclub.com/blog/best-pilates-ankle-weights",
      "articleSection": "Equipment Guide",
      "inLanguage": "en-US",
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
          "offers": { "@type": "Offer", "priceCurrency": "USD", "price": p.price.replace(/[^0-9.]/g, ""), "availability": "https://schema.org/InStock", "url": p.affiliateUrl },
        },
      })),
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
              Best Pilates Ankle Weights<br /><span style={{ color: "#8b4a31" }}>(2026): 2 Real Options Compared</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 5 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              A prior version of this article named brands (Bala, BWSS, Lululemon, Alo Yoga) we couldn&apos;t verify at the time. We&apos;ve since confirmed, directly against live Amazon listings, that two real ankle weight options are in stock and ready to buy today: the Sportneer Adjustable Ankle Weights (2-10lb per pair, $27.89) and the BECOJADDE Ankle Weights (set of 2, 1lb each and expandable, $20.69).
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

            {/* Quick reference table */}
            <div className="mb-10 mt-4 overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
              <div className="px-6 py-4" style={{ backgroundColor: "#f6f3f2" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Verified Picks</p>
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>The Full Lineup</p>
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

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>How to choose between the two</h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Both are adjustable, but they solve slightly different problems — one gives you a wider total load range, the other gives finer control at the lighter end.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { heading: "Weight range", body: "0.5lb to 1lb per ankle is generally cited as the Pilates-appropriate range. The BECOJADDE's 0.125lb increments let you dial in precisely within that range; the Sportneer's 1-5lb per-side range covers Pilates loads and extends further for standing series or general conditioning." },
                  { heading: "Closure security", body: "The weight should not shift, slide, or come undone during dynamic leg work. The BECOJADDE uses a non-slip textured back plus adjustable elastic and velcro; the Sportneer secures with its own strap system rated for ankles 7.5-12.5 inches." },
                  { heading: "Profile and padding", body: "A low-profile weight sits flush against the ankle and shouldn't interfere with footbar work or the loop straps on a reformer. Both of these keep a relatively low profile compared with bulkier padded designs." },
                  { heading: "Fit and adjustability", body: "The Sportneer's sand-bag system adjusts in 1lb steps per side; the BECOJADDE's removable 0.125lb blocks adjust in much finer steps. Check the ankle circumference range on each listing against your own measurements before buying." },
                ].map((item) => (
                  <div key={item.heading} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.heading}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
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
                <ArticleCard title="Best Pilates Equipment for Home Practice" excerpt="Everything beyond the reformer — mats, bands, rings, and accessories." href="/blog/best-pilates-equipment-for-home-practice" category="Equipment" readTime="10 min read" date="May 2026" imageUrl="/pictures/elena-kloppenburg-erUC4fTtCuo-unsplash.jpg" />
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
