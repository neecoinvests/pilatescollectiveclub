import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Floor Mat for Spin Bike (2026): Protect Your Floor & Absorb Sweat",
  description: "The best floor mats for spin bikes and indoor cycling — compared for thickness, sweat absorption, bike stability, and floor protection on hardwood, tile, and carpet.",
  keywords: ["best floor mat for spin bike", "exercise bike floor mat 2026", "indoor cycling mat hardwood", "peloton floor mat", "sweat mat spin bike", "bike mat for home gym", "equipment floor protector cycling"],
  openGraph: {
    title: "Best Floor Mat for Spin Bike (2026)",
    description: "Floor mats compared for sweat absorption, bike stability, and floor protection.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-floor-mat-for-spin-bike",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/junseong-lee-AX8cf6mkCzw-unsplash.jpg", width: 1200, height: 630, alt: "Best Floor Mat for Spin Bike 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Floor Mat for Spin Bike (2026)",
    description: "Floor mats compared for spin bikes and indoor cycling setups.",
    images: ["https://pilatescollectiveclub.com/pictures/junseong-lee-AX8cf6mkCzw-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-floor-mat-for-spin-bike" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Cycleclub Exercise Bike Mat",
    price: "$28.98",
    verdict: "Best overall floor mat",
    description:
      "Cycleclub US builds this mat at 6mm thick — substantial enough to protect hardwood floors from the weight and vibration of a spin bike without the bulk of a heavy-duty rubber mat. At under $30, it's a well-rounded pick for most home setups.",
    affiliateUrl: "https://www.amazon.com/dp/B0BHQH8D9G?tag=pilatescollective-20",
    tag: "Best Overall",
  },
  {
    rank: "02",
    name: "FLEXLIFT Exercise Bike Mat",
    price: "$19.99",
    verdict: "Best budget pick",
    description:
      "FLEXLIFT's mat is confirmed compatible with Peloton bikes and is the least expensive option on this list. For Peloton owners who want a simple, affordable floor protector without paying for extra thickness or features they don't need, this is the straightforward choice.",
    affiliateUrl: "https://www.amazon.com/dp/B0H517MP29?tag=pilatescollective-20",
    tag: "Best Budget Pick",
  },
  {
    rank: "03",
    name: "Crostice Bike Mat",
    price: "$29.68",
    verdict: "Best Peloton-compatible mid-tier pick",
    description:
      "Crostice Home's mat matches the Cycleclub in thickness at 6mm and is specifically noted as Peloton compatible, sized to fit the Bike and Bike+ footprint. It sits at a similar price to our top pick, making it a strong alternative if the Cycleclub is unavailable.",
    affiliateUrl: "https://www.amazon.com/dp/B09QQMNJ61?tag=pilatescollective-20",
    tag: "Best for Peloton",
  },
  {
    rank: "04",
    name: "Marcy Fitness Equipment Mat",
    price: "$32.98",
    verdict: "Best from an established brand",
    description:
      "Marcy is a long-standing name in home fitness equipment, and this mat is sold directly by Amazon.com, which some buyers prefer for the added confidence in fulfillment and returns. It's a solid, no-surprises floor protector from a brand many practitioners already recognize from other gym equipment.",
    affiliateUrl: "https://www.amazon.com/dp/B0041GQH3S?tag=pilatescollective-20",
    tag: "Best Established Brand",
  },
  {
    rank: "05",
    name: "THAILE Exercise Bike Mat",
    price: "$23.99",
    verdict: "Best low-cost Peloton-compatible pick",
    description:
      "THAILE-US offers another Peloton-compatible mat at a low price point, giving Peloton owners a second budget-friendly option alongside the FLEXLIFT. It's a fine pick for anyone comparison-shopping between the two lowest-priced mats on this list before deciding on finish and fit.",
    affiliateUrl: "https://www.amazon.com/dp/B0FVLT4CJX?tag=pilatescollective-20",
    tag: "Best Low-Cost Peloton Fit",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Floor Mat for Spin Bike (2026)",
      "description": "Floor mats compared for sweat absorption, bike stability, and floor protection.",
      "url": "https://pilatescollectiveclub.com/blog/best-floor-mat-for-spin-bike",
      "datePublished": "2026-06-30",
      "dateModified": "2026-06-30",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/junseong-lee-AX8cf6mkCzw-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-floor-mat-for-spin-bike" },
    },
    {
      "@type": "ItemList",
      "name": "Best Floor Mats for Spin Bikes (2026)",
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
        { "@type": "ListItem", "position": 3, "name": "Best Floor Mat for Spin Bike", "item": "https://pilatescollectiveclub.com/blog/best-floor-mat-for-spin-bike" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Do I really need a mat under my spin bike?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for three reasons: floor protection (spin bikes are heavy and vibrate, scratching or denting hardwood over time), sweat management (a high-output session produces substantial drip that a mat catches before it reaches the floor), and bike stability (a non-slip mat prevents the bike from sliding on smooth floors during out-of-saddle efforts)." } },
        { "@type": "Question", "name": "What size mat do I need for a Peloton or spin bike?", "acceptedAnswer": { "@type": "Answer", "text": "Most full-size connected spin bikes, including Peloton, NordicTrack, and Schwinn IC4, have footprints in the range of 48 by 24 inches. A mat of at least 48 by 24 inches covers the machine, but a larger 60 by 24-36 inch mat also covers the front splash zone where most sweat lands during standing climbs, which is worth the slightly larger footprint." } },
        { "@type": "Question", "name": "Can I use a yoga mat under a spin bike instead of a dedicated mat?", "acceptedAnswer": { "@type": "Answer", "text": "A yoga mat is too thin and too narrow — it will compress and shift under bike weight and vibration, providing inadequate floor protection and poor stability. Dedicated equipment mats are thicker (3/16 to 3/8 inch), wider, and made from PVC or rubber compounds that resist compression under sustained heavy loads." } },
      ],
    },
  ],
};

export default function BestFloorMatSpinBikePage() {
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
              Best Floor Mat<br /><span style={{ color: "#8b4a31" }}>for Spin Bike (2026)</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated June 2026 · 7 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon and manufacturer sites. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              A spin bike without a floor mat scratches hardwood, vibrates into surrounding rooms, and leaves sweat pooling directly on the floor. The right mat solves all three problems and costs a fraction of the bike itself. This guide compares the five best-value options for 2026, from budget Peloton-compatible mats to a pick from an established fitness brand.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/junseong-lee-AX8cf6mkCzw-unsplash.jpg" alt="Best floor mat for spin bike 2026" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Mats · All Floor Types</p>
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
                  { q: "Do I really need a mat under my spin bike?", a: "Yes — spin bikes are heavy and vibrate, potentially scratching or denting hardwood. A high-output session also produces substantial sweat drip, and a non-slip mat prevents the bike from sliding on smooth floors during out-of-saddle efforts." },
                  { q: "What size mat do I need for a Peloton or spin bike?", a: "Most full-size connected bikes have footprints around 48 by 24 inches. A mat of at least that size covers the machine, but a larger 60 by 24-36 inch mat also covers the front splash zone where sweat lands during standing climbs." },
                  { q: "Can I use a yoga mat under a spin bike?", a: "No — a yoga mat is too thin and too narrow. It will compress and shift under bike weight and vibration. Dedicated equipment mats are thicker (3/16 to 3/8 inch) and made from compounds that resist compression under sustained heavy loads." },
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
                <ArticleCard title="Best Cycling Gloves for Spin Class (2026)" excerpt="Padded cycling gloves compared for grip, palm cushioning, and ventilation during high-output spin sessions." href="/blog/best-cycling-gloves-for-spin-class" category="Equipment" readTime="7 min read" date="June 2026" imageUrl="/pictures/junseong-lee-G9H5edUL0T8-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a spin studio near you" subtitle="Use our city guides to find boutique cycling and Pilates studios worldwide." showSearch searchPlaceholder="Ask: best spin studios in Boston..." />
      </main>
      <Footer />
    </>
  );
}
