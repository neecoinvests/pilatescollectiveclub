import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Floor Mat for Spin Bike (2026): Protect Your Floor & Absorb Sweat | Pilates Collective Club",
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
    name: "BalanceFrom GoFit High Density Treadmill/Exercise Bike Mat",
    price: "From $29",
    verdict: "Best overall budget floor mat",
    description:
      "The BalanceFrom GoFit is a 3/16-inch PVC mat that covers the full bike footprint plus additional area around the pedals where most sweat drips during high-output sessions. The ribbed top surface channels moisture rather than pooling it, which keeps the floor underneath dry and reduces slip risk during standing climbs and transitions off the bike. The PVC construction is compatible with hardwood, tile, laminate, and carpet — though the mat's own base grip is designed for hard floors and can shift slightly on thick carpet. Cleanup is straightforward with a damp cloth. At this price point it's the most consistently well-reviewed option in the category.",
    affiliateUrl: "https://www.amazon.com/s?k=balancefrom+exercise+bike+mat&tag=pilatescollective-20",
    tag: "Best Overall Budget",
  },
  {
    rank: "02",
    name: "SuperMats Heavy Duty Equipment Mat",
    price: "From $59",
    verdict: "Best heavy-duty protection",
    description:
      "SuperMats builds equipment mats specifically for the weight and vibration load of indoor cycling bikes, which is meaningfully different from a yoga mat or light fitness mat — the PVC compound is denser, the thickness is greater (0.4 inches), and the ribbing pattern is engineered to remain flat under repeated weighted vibration rather than curling at the edges over time. For riders with premium hardwood floors or concrete where any movement of the bike could cause damage or noise, the SuperMats is the most protective option. The slightly higher price is justified for anyone with expensive flooring.",
    affiliateUrl: "https://www.amazon.com/s?k=supermats+heavy+duty+equipment+mat+cycling&tag=pilatescollective-20",
    tag: "Best Heavy-Duty",
  },
  {
    rank: "03",
    name: "Peloton Equipment Mat",
    price: "From $38",
    verdict: "Best for Peloton bike owners",
    description:
      "Peloton's own equipment mat is sized specifically for the Bike and Bike+ footprint, with an extended area at the front to catch sweat drip from riders during out-of-saddle climbs. The mat is thicker than generic alternatives (3/8 inch) and uses a textured top surface and non-slip base designed for the specific weight and vibration pattern of Peloton hardware. For Peloton owners who want guaranteed size compatibility and a mat from the same brand, this is a sensible choice, though it costs slightly more than comparably-thick third-party mats.",
    affiliateUrl: "https://www.amazon.com/s?k=peloton+equipment+mat&tag=pilatescollective-20",
    tag: "Best for Peloton",
  },
  {
    rank: "04",
    name: "ProSource Fit Puzzle Exercise Mat (Foam Tiles)",
    price: "From $29",
    verdict: "Best modular/customizable option",
    description:
      "For home studios where a single fixed-size mat doesn't fit the space or where the same floor area is used for multiple training disciplines, the ProSource foam puzzle tiles provide a customizable floor surface that can be expanded or reconfigured as needed. The 0.5-inch EVA foam provides genuine cushioning and sweat-resistance, and individual tiles can be replaced if one becomes damaged rather than replacing the entire mat. The main limitation is that puzzle tile edges can lift slightly over time under heavy equipment, and the joins create small ridges that some riders find distracting. For dedicated bike-only setups, a solid mat is typically more stable; for multi-use spaces, tiles offer flexibility no solid mat can match.",
    affiliateUrl: "https://www.amazon.com/s?k=prosource+puzzle+exercise+mat+foam+tiles&tag=pilatescollective-20",
    tag: "Best Modular Setup",
  },
  {
    rank: "05",
    name: "Retrospec Solana Thick Fitness Mat",
    price: "From $49",
    verdict: "Best dual-purpose mat",
    description:
      "The Retrospec Solana is wider and longer than most dedicated bike mats, with a foam-over-rubber construction that works well both as a bike platform mat and as a standalone yoga or stretching surface for the warm-up and cool-down work that typically follows a spin session. For home practitioners who want one mat that serves multiple functions rather than separate equipment for the bike and the floor, the Solana's dimensions (6mm thick, 68 by 24 inch) make it genuinely dual-purpose in a way narrower bike mats are not. The trade-off is that it's lighter and slightly thinner than dedicated heavy-duty bike mats.",
    affiliateUrl: "https://www.amazon.com/s?k=retrospec+solana+fitness+mat&tag=pilatescollective-20",
    tag: "Best Dual-Purpose",
  },
  {
    rank: "06",
    name: "Rubber Cal Elephant Bark Flooring Mat",
    price: "From $79",
    verdict: "Best for garage gyms and concrete floors",
    description:
      "Concrete and garage floors require a different floor protection strategy than hardwood — the hard surface doesn't dent or scratch, but the high-impact bike vibration is amplified through concrete into surrounding walls and structures. Rubber Cal's thick rubber mat (3/8 inch solid recycled rubber) absorbs vibration and provides a grippy, sweat-resistant surface ideal for concrete home studio floors. The rubber composition is more durable than PVC for permanent installation use and can handle the full weight of a Peloton or NordicTrack without compression over years. The heavier weight and smell of new rubber mats are the main trade-offs for this category.",
    affiliateUrl: "https://www.amazon.com/s?k=rubber+cal+elephant+bark+gym+mat&tag=pilatescollective-20",
    tag: "Best for Garage Gyms",
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
              A spin bike without a floor mat scratches hardwood, vibrates into surrounding rooms, and leaves sweat pooling directly on the floor. The right mat solves all three problems and costs a fraction of the bike itself. This guide compares the six best options for 2026, from budget PVC mats to garage-gym rubber and modular foam tiles.
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
                  >Search →</a>
                </div>
              ))}
            </div>

            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Mats · All Floor Types</p>
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
