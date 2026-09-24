import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Bike Computer for Indoor Cycling & Spin (2026)",
  description: "The best GPS bike computers for indoor spin training — touchscreen, ANT+/Bluetooth, and budget units compared for speed, cadence, heart rate display, and battery life.",
  keywords: ["best bike computer indoor cycling", "GPS bike computer touchscreen", "budget bike computer 2026", "bike computer for spin bike", "cycling head unit for home training", "ANT+ Bluetooth bike computer", "indoor cycling display unit"],
  openGraph: {
    title: "Best Bike Computer for Indoor Cycling & Spin (2026)",
    description: "GPS bike computers compared for speed, cadence, heart rate, and connectivity.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-bike-computer-for-indoor-cycling",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/dane-wetton-t1NEMSm1rgI-unsplash.jpg", width: 1200, height: 630, alt: "Best Bike Computer for Indoor Cycling 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Bike Computer for Indoor Cycling (2026)",
    description: "GPS bike computers compared for indoor spin training data and connectivity.",
    images: ["https://pilatescollectiveclub.com/pictures/dane-wetton-t1NEMSm1rgI-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-bike-computer-for-indoor-cycling" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "CooSpo CS600 GPS Bike Computer",
    price: "$97.49",
    verdict: "Best overall cycling computer for indoor use",
    description:
      "The CooSpo CS600 pairs a full color touchscreen with both Bluetooth and ANT+ connectivity, so it reads sensors and apps most other computers can, and it adds bike radar support for anyone who also rides outdoors and wants rear-approach alerts built into the same device. The touchscreen makes navigating live data during a session more direct than button-only units, and the dual-protocol connectivity means it isn't locked into a single sensor ecosystem. The best all-round choice for riders who want one capable head unit rather than a phone mount or a stripped-down display.",
    affiliateUrl: "https://www.amazon.com/dp/B0FND4HNZW?tag=pilatescollective-20",
    tag: "Best Overall",
  },
  {
    rank: "02",
    name: "iGPSPORT BSC500",
    price: "$142.49",
    verdict: "Best premium cycling computer",
    description:
      "The BSC500 is iGPSPORT's flagship, with a 3.3-inch touchscreen — the largest display on this list — and map voice navigation built in. For riders who want a genuinely premium head unit with a big, easy-to-read screen and spoken turn guidance rather than just a data readout, this is the step up from the CS600. The larger screen and navigation features come at the highest price here, which makes sense for riders who use the same device outdoors as well as on the spin bike.",
    affiliateUrl: "https://www.amazon.com/dp/B0GVNJJT6F?tag=pilatescollective-20",
    tag: "Best Premium",
  },
  {
    rank: "03",
    name: "CYCPLUS G1",
    price: "$26.99",
    verdict: "Best ultra-lightweight budget pick",
    description:
      "The CYCPLUS G1 weighs around 70 grams, making it the lightest computer on this list by a wide margin, and it does that at a genuinely budget price. For riders who just want basic live metrics on the handlebar without adding bulk or spending much, the G1 is the straightforward entry point — a sensible first head unit before deciding whether to invest in a touchscreen model.",
    affiliateUrl: "https://www.amazon.com/dp/B08R75164S?tag=pilatescollective-20",
    tag: "Best Budget",
  },
  {
    rank: "04",
    name: "iGPSPORT BSC200S",
    price: "$66.49",
    verdict: "Best for long sessions and route navigation",
    description:
      "The BSC200S sits between the ultra-budget and premium options here, with route navigation and long battery life as its standout features. For riders doing longer structured indoor sessions where battery life across back-to-back rides matters, or who want basic navigation without paying for the BSC500's larger touchscreen, this is the mid-tier pick from the same established brand.",
    affiliateUrl: "https://www.amazon.com/dp/B0DNQCNFG2?tag=pilatescollective-20",
    tag: "Best Mid-Range",
  },
  {
    rank: "05",
    name: "BKVTOP Wireless GPS Bike Computer",
    price: "$24.76",
    verdict: "Best lightest-weight budget option",
    description:
      "The BKVTOP is a wireless GPS computer weighing around 50 grams — even lighter than the CYCPLUS G1 — at the lowest price on this list. For riders who want the smallest, least noticeable head unit on the handlebar and don't need a touchscreen or navigation features, this is the most minimal and affordable way to get live ride data during indoor sessions.",
    affiliateUrl: "https://www.amazon.com/dp/B0GMHB839C?tag=pilatescollective-20",
    tag: "Lightest & Cheapest",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Bike Computer for Indoor Cycling & Spin (2026)",
      "description": "Bike computers and cycling displays compared for speed, power, heart rate, and app connectivity.",
      "url": "https://pilatescollectiveclub.com/blog/best-bike-computer-for-indoor-cycling",
      "datePublished": "2026-07-02",
      "dateModified": "2026-07-02",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/dane-wetton-t1NEMSm1rgI-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-bike-computer-for-indoor-cycling" },
    },
    {
      "@type": "ItemList",
      "name": "Best Bike Computers for Indoor Cycling (2026)",
      "numberOfItems": PRODUCTS.length,
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
        { "@type": "ListItem", "position": 3, "name": "Best Bike Computer for Indoor Cycling", "item": "https://pilatescollectiveclub.com/blog/best-bike-computer-for-indoor-cycling" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Do I need a bike computer for indoor spin training?", "acceptedAnswer": { "@type": "Answer", "text": "Not strictly — if your bike has a console or you use a connected platform like Peloton or Zwift on a tablet, your metrics are already displayed. A dedicated cycling computer is most useful for riders on non-connected bikes who want real-time power, cadence, and heart rate displayed without mounting a phone, or for athletes running structured interval plans that benefit from advanced analytics." } },
        { "@type": "Question", "name": "What should I look for in a bike computer for indoor cycling?", "acceptedAnswer": { "@type": "Answer", "text": "Prioritize dual Bluetooth and ANT+ connectivity so the unit can pair with whatever sensors your bike or trainer already uses, and consider whether a touchscreen display is worth the extra cost over a simple button-navigated one. Weight and price matter less for a bike that stays indoors than they do outdoors, so an ultra-light budget unit can be just as effective as a premium touchscreen model for basic speed, cadence, and heart rate display." } },
        { "@type": "Question", "name": "Can I use a bike computer on a Peloton or other connected bike?", "acceptedAnswer": { "@type": "Answer", "text": "Peloton and similar connected bikes use proprietary systems that don't broadcast ANT+ or open Bluetooth data, so a third-party cycling computer cannot read their console metrics. A dedicated head unit is most useful on non-connected bikes paired with external cadence and heart rate sensors." } },
      ],
    },
  ],
};

export default function BestBikeComputerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Spinning</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Tech & Devices</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Bike Computer<br /><span style={{ color: "#8b4a31" }}>for Indoor Cycling (2026)</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated July 2026 · 9 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon and manufacturer sites. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              A dedicated cycling computer turns a non-connected spin bike into a data-rich training environment — displaying live speed, cadence, and heart rate from paired sensors without needing a phone mounted on the handlebar. This guide compares five GPS bike computers in 2026, from a full-featured touchscreen flagship to ultra-light, ultra-budget units.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/dane-wetton-t1NEMSm1rgI-unsplash.jpg" alt="Best bike computer for indoor cycling 2026" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
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
                  >Buy →</a>
                </div>
              ))}
            </div>

            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Computers · GPS Head Units</p>
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
                          >Buy →</a>
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
                  { q: "Do I need a bike computer for indoor spin training?", a: "Not strictly. A dedicated cycling computer is most useful for riders on non-connected bikes who want real-time power, cadence, and heart rate displayed without mounting a phone, or for athletes running structured interval plans with advanced analytics." },
                  { q: "What should I look for in a bike computer for indoor cycling?", a: "Prioritize dual Bluetooth and ANT+ connectivity so the unit pairs with whatever sensors your bike or trainer already uses, and decide whether a touchscreen display is worth the extra cost over a simpler button-navigated one. Weight and price matter less indoors than outdoors, so a light budget unit can be just as effective as a premium touchscreen model for basic speed, cadence, and heart rate display." },
                  { q: "Can I use a bike computer on a Peloton or other connected bike?", a: "Peloton and similar connected bikes use proprietary systems that don't broadcast open ANT+ or Bluetooth data, so a third-party cycling computer cannot read their console metrics. A dedicated head unit is most useful on non-connected bikes paired with external sensors." },
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
                <ArticleCard title="Best Cadence Sensor for Indoor Cycling (2026)" excerpt="Garmin, Wahoo, and budget cadence sensors compared for accuracy and app compatibility." href="/blog/best-cadence-sensor-for-indoor-cycling" category="Tech & Devices" readTime="8 min read" date="June 2026" imageUrl="/pictures/dane-wetton-t1NEMSm1rgI-unsplash.jpg" />
                <ArticleCard title="Best Indoor Spin Bike for Home Studios (2026)" excerpt="Peloton, Schwinn IC4, NordicTrack, and budget bikes compared for resistance and connected apps." href="/blog/best-indoor-spin-bike-for-home-studio" category="Spinning" readTime="11 min read" date="June 2026" imageUrl="/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a spin studio near you" subtitle="Use our city guides to find boutique cycling and Pilates studios worldwide." showSearch searchPlaceholder="Ask: best spin studios in London..." />
      </main>
      <Footer />
    </>
  );
}
