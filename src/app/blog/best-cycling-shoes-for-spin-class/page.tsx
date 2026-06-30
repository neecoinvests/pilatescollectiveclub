import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Cycling Shoes for Spin Class (2026) | Pilates Collective Club",
  description: "The best clip-in and cage-compatible cycling shoes for indoor spin class — Peloton, Tiem, Shimano, and budget picks compared for power transfer, comfort, and pedal compatibility.",
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
    name: "Tiem Slipstream Cycling Shoes",
    price: "From $148",
    verdict: "Best overall spin-specific shoe",
    description:
      "Tiem builds shoes specifically for indoor cycling rather than adapting road cycling shoes for studio use, and the Slipstream is the clearest expression of that focus. The shoe ships with a dual-compatible cleat plate that works with both Delta (3-bolt, used by most studio bikes and Peloton) and SPD (2-bolt) systems, so one pair covers nearly every bike you'll encounter. The synthetic leather upper looks like a normal sneaker rather than an obvious cycling shoe, which matters if you're walking to and from class. The BOA dial closure allows micro-adjustment of fit mid-ride without stopping to retie laces. For practitioners who want a single well-built shoe that works across home and studio bikes, the Slipstream is the strongest all-around recommendation.",
    affiliateUrl: "https://www.amazon.com/s?k=tiem+slipstream+cycling+shoes&tag=pilatescollective-20",
    tag: "Best Overall",
  },
  {
    rank: "02",
    name: "Peloton Cycling Shoes",
    price: "From $125",
    verdict: "Best for Peloton bike owners",
    description:
      "Peloton's own cycling shoe is built specifically around the Delta cleat system used on every Peloton Bike and Bike+, and the fit calibration is tuned to that platform. The shoe uses a single BOA dial for fit and a breathable mesh upper. Because it's designed around one specific cleat standard rather than dual compatibility, riders who train across multiple bike brands may find a dual-compatible shoe like the Tiem more practical, but for Peloton-exclusive riders, the brand-matched shoe removes any compatibility guesswork and is priced competitively against third-party alternatives.",
    affiliateUrl: "https://www.amazon.com/s?k=peloton+cycling+shoes&tag=pilatescollective-20",
    tag: "Best for Peloton",
  },
  {
    rank: "03",
    name: "Shimano IC5 Indoor Cycling Shoes",
    price: "From $159",
    verdict: "Best for serious power transfer",
    description:
      "Shimano's road cycling heritage shows in the IC5 — a stiffer nylon-reinforced sole than most studio-specific shoes, designed to minimize energy loss during hard efforts and standing climbs. The shoe is SPD (2-bolt) only, so confirm your bike or pedal compatibility before buying; most home spin bikes including the Schwinn IC4 and NordicTrack S22i ship with dual-sided SPD pedals, making this a strong match. The dual BOA dial closure provides more precise fit adjustment than single-dial competitors. For riders who prioritize power transfer efficiency over walkability — essentially treating spin class as serious training rather than a boutique fitness experience — the IC5 is the most performance-oriented option here.",
    affiliateUrl: "https://www.amazon.com/s?k=shimano+ic5+indoor+cycling+shoes&tag=pilatescollective-20",
    tag: "Best for Performance",
  },
  {
    rank: "04",
    name: "Tiem Aurora Pearl Cycling Shoes",
    price: "From $158",
    verdict: "Best women's-specific fit",
    description:
      "The Aurora is Tiem's women's-specific last, built on a narrower heel and forefoot than the unisex Slipstream, addressing a common fit complaint among women riders that cycling shoes designed on a male last run wide in the heel. Cleat compatibility matches the Slipstream — dual Delta/SPD. The synthetic leather and suede upper construction is the same premium build as Tiem's flagship line. For women practitioners who have struggled with heel slip or sizing inconsistency in unisex cycling shoes, the Aurora's dedicated last is worth the equivalent price point over the standard Slipstream.",
    affiliateUrl: "https://www.amazon.com/s?k=tiem+aurora+womens+cycling+shoes&tag=pilatescollective-20",
    tag: "Best Women's Fit",
  },
  {
    rank: "05",
    name: "Tommaso Pista Indoor Cycling Shoes",
    price: "From $69",
    verdict: "Best budget clip-in shoe",
    description:
      "Tommaso's Pista is a genuine budget entry into 3-bolt/Delta-compatible clip-in shoes, using a synthetic upper with hook-and-loop straps rather than a BOA dial. The fit is less precise than premium options and the sole is more flexible, meaning some efficiency loss under hard efforts, but for riders new to clip-in pedals who want to test whether the locked-in connection improves their ride before investing in a premium shoe, the Pista removes cost as a barrier to trying it.",
    affiliateUrl: "https://www.amazon.com/s?k=tommaso+pista+cycling+shoes&tag=pilatescollective-20",
    tag: "Best Budget Pick",
  },
  {
    rank: "06",
    name: "Tiem Cipher Caged Pedal Shoes",
    price: "From $98",
    verdict: "Best for cage/toe-clip pedals",
    description:
      "Not every home or boutique bike uses clip-in pedals — many still use the traditional toe-cage system, and the Cipher is built specifically for that setup rather than as a compromise shoe. The grippy rubber outsole and reinforced toe box are designed to sit securely inside a cage without slipping, addressing the most common complaint with using a generic sneaker in a caged pedal. For riders on cage-pedal bikes (common in many boutique studios and some budget home bikes) who don't want to switch their pedal hardware, the Cipher is the purpose-built solution rather than an awkward workaround.",
    affiliateUrl: "https://www.amazon.com/s?k=tiem+cipher+caged+cycling+shoes&tag=pilatescollective-20",
    tag: "Best for Cage Pedals",
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
      "numberOfItems": 6,
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
        { "@type": "Question", "name": "Delta vs SPD cleats — which do I need?", "acceptedAnswer": { "@type": "Answer", "text": "Delta (3-bolt) cleats are used by Peloton bikes and most boutique studio bikes. SPD (2-bolt) cleats are more common on road and mountain bike pedals and are also supported on bikes like the Schwinn IC4 and NordicTrack S22i. Check your specific bike's pedal type before buying — many premium shoes like the Tiem Slipstream ship with a dual-compatible cleat plate that covers both systems." } },
        { "@type": "Question", "name": "Do I really need clip-in shoes for spin class?", "acceptedAnswer": { "@type": "Answer", "text": "No, but they improve the experience. Clip-in shoes lock your foot to the pedal, allowing you to pull up on the upstroke as well as push down, which engages more muscle groups and improves power transfer efficiency, especially during standing climbs and sprints. Cage pedals work fine for casual riders, but most boutique studios and serious home riders use clip-in systems for this reason." } },
        { "@type": "Question", "name": "Are cycling shoes worth the investment for home spin training?", "acceptedAnswer": { "@type": "Answer", "text": "If your bike has clip-in compatible pedals (most connected bikes do), yes — even a budget clip-in shoe like the Tommaso Pista noticeably improves stability and power transfer over generic sneakers in a cage. If your bike only has cage pedals, a purpose-built cage shoe like the Tiem Cipher offers a smaller but still real improvement in grip and comfort." } },
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
              The right cycling shoe locks your foot to the pedal and turns a generic spin session into genuine power-transfer training, but cleat compatibility, fit, and walkability vary widely between brands. This guide compares the six shoes most worth considering for home and boutique studio cycling in 2026, from dual-compatible all-rounders to budget-friendly entry points.
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
                  >Search →</a>
                </div>
              ))}
            </div>

            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Shoes · Clip-In & Caged</p>
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
                          >Search →</a>
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
                  { q: "Delta vs SPD cleats — which do I need?", a: "Delta (3-bolt) cleats are used by Peloton bikes and most boutique studio bikes. SPD (2-bolt) cleats are more common on road bikes and supported by bikes like the Schwinn IC4 and NordicTrack S22i. Check your bike's pedal type before buying — many premium shoes ship with a dual-compatible cleat plate." },
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
