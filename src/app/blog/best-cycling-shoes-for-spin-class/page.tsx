import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Cycling Shoes for Spin Class (2026)",
  description: "The best clip-in cycling shoes for indoor spin class — TIEM, Shimano, and budget-friendly Peloton and SPD compatible picks compared for value, compatibility, and comfort.",
  keywords: ["best cycling shoes for spin class", "spin shoes 2026", "peloton cycling shoes", "tiem cycling shoes review", "shimano spin shoes", "spd cycling shoes indoor", "clip in shoes spin class", "best indoor cycling shoes"],
  openGraph: {
    title: "Best Cycling Shoes for Spin Class (2026)",
    description: "Clip-in and cage-compatible cycling shoes compared for power transfer, comfort, and compatibility.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-cycling-shoes-for-spin-class",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg", width: 1200, height: 630, alt: "Best Cycling Shoes for Spin Class 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Cycling Shoes for Spin Class (2026)",
    description: "Cycling shoes compared for indoor spin class power transfer and comfort.",
    images: ["https://pilatescollectiveclub.com/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-cycling-shoes-for-spin-class" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "TIEM Slipstream Indoor Cycling Shoe",
    price: "$145.00",
    verdict: "Best overall spin-specific shoe",
    description:
      "TIEM Athletic is a brand built specifically around indoor cycling rather than adapting road shoes for studio use, and the Slipstream is its flagship SPD-compatible shoe. As the only shoe on this list from a dedicated indoor-cycling brand, it&apos;s the premium pick for practitioners who want a purpose-built spin shoe rather than a repurposed outdoor design.",
    affiliateUrl: "https://www.amazon.com/dp/B07GRNDWKT?tag=pilatescollective-20",
    tag: "Best Overall",
  },
  {
    rank: "02",
    name: "Shimano SH-RP101 Cycling Shoe",
    price: "$65.00",
    verdict: "Best established all-rounder",
    description:
      "Shimano is one of the most established names in cycling hardware, and the SH-RP101 brings that reputation to an accessible indoor-cycling price point. It&apos;s a solid all-rounder for riders who want a trusted brand without paying a premium-tier price, and a sensible middle ground between the boutique TIEM and the budget options further down this list.",
    affiliateUrl: "https://www.amazon.com/dp/B0B6B9QD8G?tag=pilatescollective-20",
    tag: "Best All-Rounder",
  },
  {
    rank: "03",
    name: "KOFUBOKE Indoor Cycling Shoes",
    price: "$69.00",
    verdict: "Best SPD-compatible mid-tier pick",
    description:
      "KOFUBOKE&apos;s indoor cycling shoe is built around SPD cleat compatibility, making it a straightforward match for the many home and studio bikes that ship with SPD-style pedals. Sitting in the same price range as the Shimano option, it&apos;s a reasonable mid-tier pick for riders whose bikes are already set up for SPD cleats.",
    affiliateUrl: "https://www.amazon.com/dp/B0DL5NP6QM?tag=pilatescollective-20",
    tag: "Best SPD Compatible",
  },
  {
    rank: "04",
    name: "Kyedoo Road/Spin Cycling Shoes",
    price: "$52.42",
    verdict: "Best budget-mid Peloton & SPD pick",
    description:
      "The Kyedoo is compatible with both Peloton and SPD pedal systems, which makes it a flexible choice for households with more than one type of bike or for riders who aren&apos;t sure which cleat standard their setup uses. At a budget-mid price point, it&apos;s a practical option for anyone who wants dual compatibility without paying premium-tier prices.",
    affiliateUrl: "https://www.amazon.com/dp/B09PNGYNLC?tag=pilatescollective-20",
    tag: "Best Budget-Mid Pick",
  },
  {
    rank: "05",
    name: "KESCOO Cycling Shoes",
    price: "$41.74",
    verdict: "Best budget pick",
    description:
      "KESCOO&apos;s cycling shoe is Peloton compatible and the least expensive option on this list, making it the entry point for riders who want to try clip-in shoes before committing to a pricier pair. For Peloton owners specifically looking to spend as little as possible while still getting a compatible clip-in shoe, this is the pick.",
    affiliateUrl: "https://www.amazon.com/dp/B092HLHWBM?tag=pilatescollective-20",
    tag: "Best Budget Pick",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Cycling Shoes for Spin Class (2026)",
      "description": "Clip-in and cage-compatible cycling shoes compared for power transfer, comfort, and compatibility.",
      "url": "https://pilatescollectiveclub.com/blog/best-cycling-shoes-for-spin-class",
      "datePublished": "2026-06-30",
      "dateModified": "2026-06-30",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-cycling-shoes-for-spin-class" },
    },
    {
      "@type": "ItemList",
      "name": "Best Cycling Shoes for Spin Class (2026)",
      "numberOfItems": 5,
      "itemListElement": PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "description": p.description.replace(/<[^>]+>/g, ""),
          "offers": { "@type": "Offer", "priceCurrency": "USD", "price": p.price.replace(/[^0-9]/g, ""), "availability": "https://schema.org/InStock", "url": p.affiliateUrl },
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Cycling Shoes for Spin Class", "item": "https://pilatescollectiveclub.com/blog/best-cycling-shoes-for-spin-class" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Delta vs SPD cleats — which do I need?", "acceptedAnswer": { "@type": "Answer", "text": "Delta (3-bolt) cleats are used by Peloton bikes and most boutique studio bikes. SPD (2-bolt) cleats are more common on road and mountain bike pedals and are also supported on bikes like the Schwinn IC4 and NordicTrack S22i. Check your specific bike's pedal type before buying — some shoes, like the Kyedoo, are listed compatible with both Peloton and SPD systems." } },
        { "@type": "Question", "name": "Do I really need clip-in shoes for spin class?", "acceptedAnswer": { "@type": "Answer", "text": "No, but they improve the experience. Clip-in shoes lock your foot to the pedal, allowing you to pull up on the upstroke as well as push down, which engages more muscle groups and improves power transfer efficiency, especially during standing climbs and sprints. Cage pedals work fine for casual riders, but most boutique studios and serious home riders use clip-in systems for this reason." } },
        { "@type": "Question", "name": "Are cycling shoes worth the investment for home spin training?", "acceptedAnswer": { "@type": "Answer", "text": "If your bike has clip-in compatible pedals (most connected bikes do), yes — even a budget clip-in shoe like the KESCOO noticeably improves stability and power transfer over generic sneakers on a bare pedal." } },
      ],
    },
  ],
};

export default function BestCyclingShoesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Equipment Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Indoor Cycling</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Cycling Shoes<br /><span style={{ color: "#8b4a31" }}>for Spin Class (2026)</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated June 2026 · 9 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon and manufacturer sites. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              The right cycling shoe locks your foot to the pedal and turns a generic spin session into genuine power-transfer training, but cleat compatibility, fit, and price vary widely between brands. This guide compares the five shoes most worth considering for home and studio cycling in 2026, from the dedicated-brand TIEM Slipstream to budget-friendly Peloton and SPD compatible picks.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg" alt="Best cycling shoes for spin class 2026" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

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
                  <a href={p.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow"
                    style={{ display: "block", fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "10px 14px", whiteSpace: "nowrap", flexShrink: 0 }}
                  >View →</a>
                </div>
              ))}
            </div>

            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Shoes · Clip-In Cycling</p>
              <div className="space-y-10">
                {PRODUCTS.map((p) => (
                  <div key={p.name}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-semibold" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{p.rank}</span>
                      <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{p.tag}</span>
                    </div>
                    <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.3)" }}>
                      <div className="p-6" style={{ backgroundColor: "#ffffff" }}>
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-xl font-semibold mb-1" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{p.name}</h3>
                            <p className="text-sm font-semibold" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{p.price}</p>
                          </div>
                          <a href={p.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow"
                            style={{ display: "block", fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "10px 14px", whiteSpace: "nowrap", flexShrink: 0 }}
                          >View →</a>
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }} dangerouslySetInnerHTML={{ __html: p.description }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "Delta vs SPD cleats — which do I need?", a: "Delta (3-bolt) cleats are used by Peloton bikes and most boutique studio bikes. SPD (2-bolt) cleats are more common on road bikes and supported by bikes like the Schwinn IC4 and NordicTrack S22i. Check your bike's pedal type before buying — some shoes, like the Kyedoo, are compatible with both Peloton and SPD systems." },
                  { q: "Do I really need clip-in shoes for spin class?", a: "No, but they improve the experience. Clip-in shoes lock your foot to the pedal, allowing you to pull up on the upstroke as well as push down, improving power transfer efficiency, especially during standing climbs and sprints." },
                  { q: "Are cycling shoes worth the investment for home spin training?", a: "If your bike has clip-in compatible pedals, yes — even a budget clip-in shoe noticeably improves stability and power transfer over generic sneakers in a cage. If your bike only has cage pedals, a purpose-built cage shoe offers a smaller but real improvement in grip and comfort." },
                ].map((item) => (
                  <div key={item.q} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.q}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="Best Indoor Spin Bike for Home Studios (2026)" excerpt="Peloton, Schwinn, NordicTrack, and budget bikes compared for building a home cycling studio." href="/blog/best-indoor-spin-bike-for-home-studio" category="Equipment" readTime="11 min read" date="June 2026" imageUrl="/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg" />
                <ArticleCard title="Best Padded Cycling Shorts for Spin Class (2026)" excerpt="The most comfortable padded shorts for long indoor cycling sessions, compared by chamois quality and fit." href="/blog/best-padded-cycling-shorts-for-spin" category="Equipment" readTime="8 min read" date="June 2026" imageUrl="/pictures/jade-stephens-N21356amsyw-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a spin studio near you" subtitle="Use our city guides to find boutique cycling and Pilates studios worldwide." showSearch searchPlaceholder="Ask: best spin studios in Los Angeles..." />
      </main>
      <Footer />
    </>
  );
}
