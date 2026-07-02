import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Bike Computer for Indoor Cycling & Spin (2026) | Pilates Collective Club",
  description: "The best bike computers and cycling displays for indoor spin training — Garmin, Wahoo ELEMNT, and tablet mounts compared for speed, power, heart rate display, and app connectivity.",
  keywords: ["best bike computer indoor cycling", "wahoo elemnt bolt review 2026", "garmin edge indoor cycling", "bike computer for spin bike", "cycling head unit for home training", "best cycling computer zwift", "indoor cycling display unit"],
  openGraph: {
    title: "Best Bike Computer for Indoor Cycling & Spin (2026)",
    description: "Bike computers and cycling displays compared for speed, power, heart rate, and app connectivity.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-bike-computer-for-indoor-cycling",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/dane-wetton-t1NEMSm1rgI-unsplash.jpg", width: 1200, height: 630, alt: "Best Bike Computer for Indoor Cycling 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Bike Computer for Indoor Cycling (2026)",
    description: "Bike computers compared for indoor spin training data and app compatibility.",
    images: ["https://pilatescollectiveclub.com/pictures/dane-wetton-t1NEMSm1rgI-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-bike-computer-for-indoor-cycling" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Wahoo ELEMNT BOLT v2",
    price: "From $279",
    verdict: "Best overall cycling computer for indoor use",
    description:
      "The Wahoo ELEMNT BOLT v2 is the most popular cycling computer among serious indoor trainers because it pairs seamlessly with both Wahoo's own smart trainer ecosystem and third-party apps including Zwift and TrainerRoad via ANT+ and Bluetooth simultaneously. The 2.2-inch colour display is sharp and readable from a spin bike saddle position, and the device auto-configures from the Wahoo companion app without the button-navigation complexity of Garmin's setup process. In indoor mode, it displays real-time power, cadence, heart rate, and interval data from connected sensors and trainer apps. Battery life is rated at 15 hours but is effectively unlimited for indoor sessions where charging between rides is easy. The best choice for riders who want a dedicated head unit rather than a phone mount.",
    affiliateUrl: "https://www.amazon.com/s?k=wahoo+elemnt+bolt+v2+cycling+computer&tag=pilatescollective-20",
    tag: "Best Overall",
  },
  {
    rank: "02",
    name: "Garmin Edge 530",
    price: "From $299",
    verdict: "Best for data-driven structured training",
    description:
      "The Garmin Edge 530 provides the most comprehensive training analytics of any head unit at its price point — training load, recovery time, VO2 max estimates, and performance condition all built into the on-device software without requiring a companion app. For riders running structured interval plans or building training volume across multiple weekly sessions, the Edge 530's native analytics are more powerful than the ELEMNT BOLT's simpler display. Zwift and TrainerRoad connectivity work via ANT+ FE-C for controlled trainer integration. The interface is more complex than Wahoo's and requires more initial setup investment, but rewards that investment with significantly deeper performance tracking over time.",
    affiliateUrl: "https://www.amazon.com/s?k=garmin+edge+530+cycling+computer&tag=pilatescollective-20",
    tag: "Best for Data Analysis",
  },
  {
    rank: "03",
    name: "Wahoo ELEMNT ROAM v2",
    price: "From $379",
    verdict: "Best premium cycling computer",
    description:
      "The ROAM v2 is Wahoo's larger-screen flagship, with a 3.5-inch full-colour display that shows mapping for outdoor rides and a more spacious data layout for indoor training. For serious riders who train both indoors and outdoors and want one device for both, the ROAM v2's screen size makes it meaningfully more readable than the BOLT at a glance during hard intervals. The ANT+ and Bluetooth multi-sensor connectivity matches the BOLT, as does the Zwift/TrainerRoad integration. The larger price premium over the BOLT is only justified for riders who genuinely use both indoor and outdoor tracking regularly.",
    affiliateUrl: "https://www.amazon.com/s?k=wahoo+elemnt+roam+v2+cycling+computer&tag=pilatescollective-20",
    tag: "Best Premium",
  },
  {
    rank: "04",
    name: "Garmin Edge 130 Plus",
    price: "From $149",
    verdict: "Best compact budget head unit",
    description:
      "The Edge 130 Plus is Garmin's entry-level head unit, providing speed, cadence, heart rate, and basic power display in a compact form factor at a significantly lower price than the Edge 530 or ELEMNT BOLT. For riders who want a dedicated display showing live metrics without phone mounting or screen-share complexity, the 130 Plus covers the key indoor training metrics without the advanced analytics features that add cost to premium models. Bluetooth and ANT+ connectivity allow pairing with cadence sensors and heart rate straps. A sensible first head unit for riders not yet sure how deeply they want to invest in training data.",
    affiliateUrl: "https://www.amazon.com/s?k=garmin+edge+130+plus+cycling+computer&tag=pilatescollective-20",
    tag: "Best Budget Head Unit",
  },
  {
    rank: "05",
    name: "Lumen Cycling iPhone/Android Tablet Mount",
    price: "From $25",
    verdict: "Best phone/tablet display mount",
    description:
      "For riders who don't want a dedicated cycling computer but want their phone or tablet in a stable, readable position during indoor sessions, a quality handlebar mount is the most practical and affordable solution. The Lumen mount uses a secure clamp that fits most handlebar diameters and holds devices firmly through out-of-saddle vibration without the lens scratching common in cheaper silicone mounts. With a phone or tablet mounted, riders gain access to the full Zwift, Peloton, or TrainerRoad interface on a larger screen than any dedicated cycling computer. The obvious limitation is that the phone must be available and charged for every session.",
    affiliateUrl: "https://www.amazon.com/s?k=bike+handlebar+phone+tablet+mount+indoor+cycling&tag=pilatescollective-20",
    tag: "Best Phone Mount",
  },
  {
    rank: "06",
    name: "CooSpo BC107 Bluetooth Cycling Computer",
    price: "From $29",
    verdict: "Best ultra-budget speed/cadence display",
    description:
      "The CooSpo BC107 is a basic wired-free cycling computer displaying speed and cadence from paired Bluetooth sensors at a price that removes every barrier to entry. There is no power display, no mapping, and no training analytics — but for riders who simply want live cadence and speed feedback on a small screen without a phone mount or dedicated cycling computer investment, it delivers the core display function reliably. Compatible with most Bluetooth cadence sensors including the Garmin and Wahoo units covered in our cadence sensor guide. The correct first step before investing in a premium head unit.",
    affiliateUrl: "https://www.amazon.com/s?k=coospo+bc107+bluetooth+cycling+computer&tag=pilatescollective-20",
    tag: "Best Ultra-Budget",
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
        { "@type": "ListItem", "position": 3, "name": "Best Bike Computer for Indoor Cycling", "item": "https://pilatescollectiveclub.com/blog/best-bike-computer-for-indoor-cycling" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Do I need a bike computer for indoor spin training?", "acceptedAnswer": { "@type": "Answer", "text": "Not strictly — if your bike has a console or you use a connected platform like Peloton or Zwift on a tablet, your metrics are already displayed. A dedicated cycling computer is most useful for riders on non-connected bikes who want real-time power, cadence, and heart rate displayed without mounting a phone, or for athletes running structured interval plans that benefit from advanced analytics." } },
        { "@type": "Question", "name": "Wahoo ELEMNT vs Garmin Edge — which is better for indoor use?", "acceptedAnswer": { "@type": "Answer", "text": "For indoor-specific training, the Wahoo ELEMNT BOLT is generally preferred for its simpler setup and seamless Zwift/TrainerRoad integration. The Garmin Edge wins for structured training analytics and deeper performance data. Both provide comparable accuracy for speed, cadence, heart rate, and power display from connected sensors." } },
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
              A dedicated cycling computer turns a non-connected spin bike into a data-rich training environment — displaying live power, cadence, and heart rate without a phone mount and integrating with Zwift and TrainerRoad for structured indoor training. This guide compares the six best options in 2026, from flagship head units to budget displays and simple phone mounts.
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
                  >Search →</a>
                </div>
              ))}
            </div>

            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Computers · Head Units & Mounts</p>
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
                  { q: "Do I need a bike computer for indoor spin training?", a: "Not strictly. A dedicated cycling computer is most useful for riders on non-connected bikes who want real-time power, cadence, and heart rate displayed without mounting a phone, or for athletes running structured interval plans with advanced analytics." },
                  { q: "Wahoo ELEMNT vs Garmin Edge — which is better for indoor use?", a: "For indoor-specific training, Wahoo ELEMNT is generally preferred for simpler setup and seamless Zwift/TrainerRoad integration. Garmin Edge wins for structured training analytics and deeper performance data. Both provide comparable accuracy for the core metrics." },
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
