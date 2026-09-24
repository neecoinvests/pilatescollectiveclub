import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Cadence Sensor for Indoor Cycling & Spin (2026)",
  description: "The best cadence sensors for indoor cycling — CooSpo, CYCPLUS, Magene, GEOID, and iGPSPORT compared for accuracy, connectivity, and compatibility with Zwift, Peloton app, and non-connected bikes.",
  keywords: ["best cadence sensor indoor cycling", "bike cadence sensor 2026", "coospo cadence sensor review", "cycplus cadence sensor", "rpm sensor spin bike", "cadence sensor for zwift", "best rpm meter spin class", "cadence meter indoor bike"],
  openGraph: {
    title: "Best Cadence Sensor for Indoor Cycling & Spin (2026)",
    description: "Cadence sensors compared for accuracy, Bluetooth connectivity, and compatibility with Zwift and Peloton.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-cadence-sensor-for-indoor-cycling",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/dane-wetton-t1NEMSm1rgI-unsplash.jpg", width: 1200, height: 630, alt: "Best Cadence Sensor for Indoor Cycling 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Cadence Sensor for Indoor Cycling (2026)",
    description: "Cadence sensors compared for accuracy and app compatibility.",
    images: ["https://pilatescollectiveclub.com/pictures/dane-wetton-t1NEMSm1rgI-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-cadence-sensor-for-indoor-cycling" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "CooSpo BK467 Speed & Cadence Sensor",
    price: "$15.74",
    verdict: "Best overall cadence sensor",
    description:
      "The CooSpo BK467 is built for both indoor and outdoor cycling, which makes it a sensible default if the same rider also takes the bike outside occasionally. It mounts to the crank arm and reports cadence data to any paired app or head unit. At under $16 it undercuts most name-brand sensors while covering the core job — accurate RPM data streamed live — without asking you to pay for features a spin-bike rider will not use. For anyone who wants one dependable sensor and does not need niche extras, the BK467 is the easiest recommendation.",
    affiliateUrl: "https://www.amazon.com/dp/B07CDCPF4Z?tag=pilatescollective-20",
    tag: "Best Overall",
  },
  {
    rank: "02",
    name: "CYCPLUS Speed & Cadence Sensor",
    price: "$16.99",
    verdict: "Best for sweaty, humid training spaces",
    description:
      "The CYCPLUS sensor transmits over both Bluetooth and ANT+, so it pairs with a phone-based app and a dedicated head unit at once. Its standout feature is an IP67 waterproof rating, which matters more indoors than it sounds — spin bikes sit under riders who sweat heavily, and a sensor mounted near the crank takes the brunt of it. For anyone training in a garage, basement, or heavily air-conditioned studio where moisture and condensation are a recurring issue, the CYCPLUS is the sturdier long-term choice.",
    affiliateUrl: "https://www.amazon.com/dp/B08X49WVV2?tag=pilatescollective-20",
    tag: "Best Sweat & Moisture Resistance",
  },
  {
    rank: "03",
    name: "Magene Speed/Cadence Sensor",
    price: "$16.99",
    verdict: "Best for Zwift and Wahoo Fitness riders",
    description:
      "Magene is a long-established name in cycling sensors, and this speed/cadence unit is explicitly compatible with Zwift and Wahoo Fitness, two of the most widely used training apps for indoor riders. If your spin bike itself has no connectivity and you're building a virtual-training setup around a tablet or phone, confirmed compatibility with the app you actually plan to use matters more than any spec sheet. At the same price point as the CYCPLUS above, the deciding factor between the two is simply which platform you ride on.",
    affiliateUrl: "https://www.amazon.com/dp/B08252X8VS?tag=pilatescollective-20",
    tag: "Best App Compatibility",
  },
  {
    rank: "04",
    name: "GEOID CS600 Cadence/Speed Sensor",
    price: "$14.99",
    verdict: "Best budget pick",
    description:
      "The GEOID CS600 is the least expensive option here, offering both ANT+ and Bluetooth connectivity, which covers the vast majority of training apps and head units. It's a straightforward choice for riders who want to add cadence tracking to a non-connected spin bike without spending much to find out whether they'll use the data regularly. There's nothing exotic about it — it does the core job of reporting cadence and speed at the lowest price in this lineup.",
    affiliateUrl: "https://www.amazon.com/dp/B09PYW7FYV?tag=pilatescollective-20",
    tag: "Best Budget Pick",
  },
  {
    rank: "05",
    name: "iGPSPORT Speed & Cadence Sensor Set",
    price: "$37.99",
    verdict: "Best for wide device compatibility",
    description:
      "iGPSPORT sells this as a set rather than a single sensor, and it's positioned around wide compatibility across apps and head units — useful if you're not committed to one training platform and want a sensor that will keep working if you switch. It sits at the top of the price range in this list, which reflects the set format rather than any premium feature beyond broad compatibility. For riders who want flexibility to move between apps without buying a new sensor later, it's the safer long-term bet.",
    affiliateUrl: "https://www.amazon.com/dp/B0BJ6TVRJG?tag=pilatescollective-20",
    tag: "Best Wide Compatibility",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Cadence Sensor for Indoor Cycling & Spin (2026)",
      "description": "Cadence sensors compared for accuracy, Bluetooth connectivity, and compatibility with Zwift and Peloton.",
      "url": "https://pilatescollectiveclub.com/blog/best-cadence-sensor-for-indoor-cycling",
      "datePublished": "2026-06-30",
      "dateModified": "2026-06-30",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/dane-wetton-t1NEMSm1rgI-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-cadence-sensor-for-indoor-cycling" },
    },
    {
      "@type": "ItemList",
      "name": "Best Cadence Sensors for Indoor Cycling (2026)",
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
        { "@type": "ListItem", "position": 3, "name": "Best Cadence Sensor for Indoor Cycling", "item": "https://pilatescollectiveclub.com/blog/best-cadence-sensor-for-indoor-cycling" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is cadence in indoor cycling, and why does it matter?", "acceptedAnswer": { "@type": "Answer", "text": "Cadence is pedal revolutions per minute (RPM) — how fast you're spinning the crank. Most spin instructors target 60-110 RPM for different exercise types: lower RPM for heavy-resistance hill climbs, higher RPM for speed intervals. A cadence sensor gives you objective feedback on whether you're actually hitting instructor cues, rather than estimating based on feel." } },
        { "@type": "Question", "name": "Do I need a cadence sensor if my spin bike already has a console?", "acceptedAnswer": { "@type": "Answer", "text": "If your bike's console displays RPM and you trust its accuracy, you may not need an additional sensor. However, many budget and even mid-range spin bikes display estimated or uncalibrated cadence. A dedicated sensor provides certified accuracy and can simultaneously stream to your phone or training app even if your bike's console doesn't have app connectivity." } },
        { "@type": "Question", "name": "Bluetooth vs ANT+ cadence sensors — which should I use?", "acceptedAnswer": { "@type": "Answer", "text": "Most modern cadence sensors, including all the options in this guide, transmit over both Bluetooth and ANT+ simultaneously, so the choice usually comes down to what your app or head unit supports rather than the sensor itself. Bluetooth covers phones and tablets, while ANT+ is common on dedicated cycling head units. Dual-protocol sensors let you pair to both at once without switching modes." } },
      ],
    },
  ],
};

export default function BestCadenceSensorPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Indoor Cycling</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Cadence Sensor<br /><span style={{ color: "#8b4a31" }}>for Indoor Cycling (2026)</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated June 2026 · 8 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon and manufacturer sites. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              A cadence sensor turns a non-connected spin bike into a data-capable training tool — streaming live RPM to Zwift, your Peloton app, or any compatible training platform. This guide compares the five best options for 2026, from proven all-rounders like CooSpo and CYCPLUS to budget picks and wide-compatibility sets.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/dane-wetton-t1NEMSm1rgI-unsplash.jpg" alt="Best cadence sensor for indoor cycling 2026" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Sensors · RPM & Cadence</p>
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
                  { q: "What is cadence in indoor cycling, and why does it matter?", a: "Cadence is pedal revolutions per minute (RPM) — how fast you're spinning the crank. Most spin instructors target 60-110 RPM for different exercise types. A cadence sensor gives you objective feedback on whether you're hitting instructor cues rather than estimating based on feel." },
                  { q: "Do I need a cadence sensor if my spin bike already has a console?", a: "If your bike's console displays accurate RPM, you may not need an additional sensor. However, many budget spin bikes display estimated or uncalibrated cadence. A dedicated sensor provides certified accuracy and can simultaneously stream to training apps even if your bike lacks connectivity." },
                  { q: "Magnet-based vs accelerometer cadence sensors — which is more accurate?", a: "Both are accurate for steady-state cadence. Accelerometer-based sensors can lag slightly during rapid RPM changes. Magnet-based sensors use a physical trigger point that is precise even at low cadence. For typical spin class use, both perform comparably well." },
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
                <ArticleCard title="Best Indoor Spin Bike for Home Studios (2026)" excerpt="Peloton, Schwinn IC4, NordicTrack, and budget bikes compared for resistance, ride feel, and connected apps." href="/blog/best-indoor-spin-bike-for-home-studio" category="Equipment" readTime="11 min read" date="June 2026" imageUrl="/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg" />
                <ArticleCard title="Best Heart Rate Monitor for Pilates & Spin (2026)" excerpt="Chest straps and arm bands compared for accuracy and app compatibility." href="/blog/best-heart-rate-monitor-for-pilates-and-spin" category="Tech & Devices" readTime="9 min read" date="June 2026" imageUrl="/pictures/elena-kloppenburg-erUC4fTtCuo-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a spin studio near you" subtitle="Use our city guides to find boutique cycling and Pilates studios worldwide." showSearch searchPlaceholder="Ask: best spin studios in Seattle..." />
      </main>
      <Footer />
    </>
  );
}
