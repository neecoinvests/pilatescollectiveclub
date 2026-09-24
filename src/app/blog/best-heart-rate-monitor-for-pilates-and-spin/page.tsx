import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Heart Rate Monitor for Pilates & Spin (2026)",
  description: "The best heart rate monitor chest straps for Pilates, Lagree, and spin class — Polar, CooSpo, CYCPLUS and Powr Labs compared for accuracy, price, and compatibility with Peloton, Zwift, and Garmin.",
  keywords: ["best heart rate monitor 2026", "heart rate monitor for pilates", "heart rate monitor for spin class", "polar h10 review", "polar h9 review", "chest strap heart rate monitor", "best chest strap heart rate", "heart rate monitor peloton compatible"],
  openGraph: {
    title: "Best Heart Rate Monitor for Pilates & Spin (2026)",
    description: "Chest strap heart rate monitors compared for accuracy, price, and app compatibility.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-heart-rate-monitor-for-pilates-and-spin",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/elena-kloppenburg-erUC4fTtCuo-unsplash.jpg", width: 1200, height: 630, alt: "Best Heart Rate Monitor for Pilates and Spin 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Heart Rate Monitor for Pilates & Spin (2026)",
    description: "Chest strap heart rate monitors compared for Pilates, Lagree, and spin class training.",
    images: ["https://pilatescollectiveclub.com/pictures/elena-kloppenburg-erUC4fTtCuo-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-heart-rate-monitor-for-pilates-and-spin" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Polar H10 Heart Rate Monitor Chest Strap",
    price: "$104.93",
    verdict: "Best overall accuracy",
    description:
      "The Polar H10 is widely regarded as the gold standard among consumer heart rate chest straps, and it's the most expensive option here for that reason. It's sold directly by Amazon.com rather than a third-party listing, which is worth knowing if that matters to you when buying hardware you'll wear against your skin. For Lagree and spin training, where heart rate accuracy during rapid intensity changes genuinely matters for zone-based programming, the H10 is the clear premium pick — the strap you buy once and don't think about again.",
    affiliateUrl: "https://www.amazon.com/dp/B07PM54P4N?tag=pilatescollective-20",
    tag: "Best Overall Accuracy",
  },
  {
    rank: "02",
    name: "COOSPO H6 Heart Rate Monitor Chest Strap",
    price: "$25.49",
    verdict: "Best budget pick",
    description:
      "The COOSPO H6 is the most affordable chest strap on this list and a sensible starting point if you just want a reliable strap for tracking zones in class without paying premium pricing. Like the pricier options here, it supports both Bluetooth and ANT+, so it pairs with a phone app and a bike console or Pilates equipment display at the same time. For practitioners who mainly want to see their heart rate zone in class rather than chase the last percentage point of accuracy, this covers the basics at a fraction of the H10's price.",
    affiliateUrl: "https://www.amazon.com/dp/B07BS6B4PD?tag=pilatescollective-20",
    tag: "Best Budget Pick",
  },
  {
    rank: "03",
    name: "Polar H9 Heart Rate Sensor",
    price: "$69.90",
    verdict: "Best mid-tier pick from an established brand",
    description:
      "The Polar H9 is Polar's step-down model from the H10, sold directly by Amazon.com, and it lands squarely between the budget straps and the premium H10 on price. If you want the reassurance of an established, sports-science-trusted brand but don't need every feature the H10 carries, the H9 is the sensible middle option — Polar's core accuracy reputation at a mid-tier price.",
    affiliateUrl: "https://www.amazon.com/dp/B08411DQ96?tag=pilatescollective-20",
    tag: "Best Mid-Tier",
  },
  {
    rank: "04",
    name: "CYCPLUS H2Pro Heart Rate Monitor Chest Strap",
    price: "$29.99",
    verdict: "Best battery life",
    description:
      "The standout spec on the CYCPLUS H2Pro is battery life — rated at 500 hours, which for most people training a handful of times a week means not thinking about the battery for the better part of a year. At a budget-friendly price, it's a strong pick for anyone who wants a chest strap they can set up once and largely forget about, rather than one more piece of kit to keep charged.",
    affiliateUrl: "https://www.amazon.com/dp/B0DLNMMY9M?tag=pilatescollective-20",
    tag: "Best Battery Life",
  },
  {
    rank: "05",
    name: "POWR LABS Heart Rate Monitor Chest Strap",
    price: "$39.99",
    verdict: "Best for Garmin and Peloton compatibility",
    description:
      "Powr Labs positions the H2Pro-competitor strap specifically around Garmin and Peloton compatibility, which makes it a straightforward pick if you already train on either ecosystem and want confirmed compatibility rather than a guess. It sits in the middle of the pack on price, just above the true budget options, as a strap built with a specific pairing use case in mind.",
    affiliateUrl: "https://www.amazon.com/dp/B081GH9RWC?tag=pilatescollective-20",
    tag: "Best for Garmin & Peloton",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Heart Rate Monitor for Pilates & Spin (2026)",
      "description": "Chest strap heart rate monitors compared for accuracy, price, and app compatibility.",
      "url": "https://pilatescollectiveclub.com/blog/best-heart-rate-monitor-for-pilates-and-spin",
      "datePublished": "2026-06-30",
      "dateModified": "2026-09-24",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/elena-kloppenburg-erUC4fTtCuo-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-heart-rate-monitor-for-pilates-and-spin" },
    },
    {
      "@type": "ItemList",
      "name": "Best Heart Rate Monitors for Pilates & Spin (2026)",
      "numberOfItems": PRODUCTS.length,
      "itemListElement": PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "description": p.description.replace(/<[^>]+>/g, ""),
          "offers": { "@type": "Offer", "priceCurrency": "USD", "price": p.price.replace(/[^0-9.]/g, ""), "availability": "https://schema.org/InStock", "url": p.affiliateUrl },
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Heart Rate Monitor for Pilates & Spin", "item": "https://pilatescollectiveclub.com/blog/best-heart-rate-monitor-for-pilates-and-spin" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Why use a chest strap instead of a wrist-based heart rate monitor?", "acceptedAnswer": { "@type": "Answer", "text": "Chest straps like the ones on this list read heart rate directly and are consistently more accurate than wrist-based optical sensors, especially during the rapid intensity changes common in Lagree supersets and spin sprints. For precise zone training during class, a dedicated chest strap is the more reliable choice." } },
        { "@type": "Question", "name": "What's the real difference between the Polar H10 and the Polar H9?", "acceptedAnswer": { "@type": "Answer", "text": "Both are chest straps from the same established brand and sold directly by Amazon.com, but the H10 is Polar's premium model and costs meaningfully more than the H9, which is positioned as the mid-tier option. If budget is the deciding factor and you want Polar's reputation without paying the H10's price, the H9 is the sensible middle ground." } },
        { "@type": "Question", "name": "Do I need a heart rate monitor that's compatible with Peloton or Garmin?", "acceptedAnswer": { "@type": "Answer", "text": "If you train on a connected bike or a Garmin device, confirm compatibility before buying. The Polar H10, Polar H9, CooSpo H6 and CYCPLUS H2Pro all support dual Bluetooth/ANT+ connectivity, and the Powr Labs strap is specifically built and marketed around Garmin and Peloton compatibility." } },
      ],
    },
  ],
};

export default function BestHeartRateMonitorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Tech & Devices</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Lagree & Spin</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Heart Rate Monitor<br /><span style={{ color: "#8b4a31" }}>for Pilates & Spin (2026)</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 8 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Lagree&apos;s slow, sustained tension and spin&apos;s rapid interval bursts both benefit from knowing your heart rate zone in real time, and a dedicated chest strap reads it more reliably than a wrist wearable during fast-changing effort. This guide compares five chest strap monitors, from a budget-friendly starter strap through Polar&apos;s mid-tier and premium models, plus options built around long battery life and specific app compatibility.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/elena-kloppenburg-erUC4fTtCuo-unsplash.jpg" alt="Best heart rate monitor for Pilates and spin 2026" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Chest Straps · Ranked</p>
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
                  { q: "Why use a chest strap instead of a wrist-based heart rate monitor?", a: "Chest straps like the ones on this list read heart rate directly and are consistently more accurate than wrist-based optical sensors, especially during the rapid intensity changes common in Lagree supersets and spin sprints. For precise zone training during class, a dedicated chest strap is the more reliable choice." },
                  { q: "What's the real difference between the Polar H10 and the Polar H9?", a: "Both are chest straps from the same established brand and sold directly by Amazon.com, but the H10 is Polar's premium model and costs meaningfully more than the H9, which is positioned as the mid-tier option. If budget is the deciding factor and you want Polar's reputation without paying the H10's price, the H9 is the sensible middle ground." },
                  { q: "Do I need a heart rate monitor that's compatible with Peloton or Garmin?", a: "If you train on a connected bike or a Garmin device, confirm compatibility before buying. The Polar H10, Polar H9, CooSpo H6 and CYCPLUS H2Pro all support dual Bluetooth/ANT+ connectivity, and the Powr Labs strap is specifically built and marketed around Garmin and Peloton compatibility." },
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
                <ArticleCard title="Best Megaformer Machine (2026)" excerpt="Lagree M3S, The Micro, M3X, and more compared for home and studio Lagree training." href="/blog/best-megaformer-machine" category="Equipment" readTime="10 min read" date="June 2026" imageUrl="/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our city guides to find boutique Lagree and cycling studios worldwide." showSearch searchPlaceholder="Ask: best Lagree studios in Chicago..." />
      </main>
      <Footer />
    </>
  );
}
