import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import QuickPicks from "@/components/QuickPicks";
import TopPick from "@/components/TopPick";
import AffiliateNote from "@/components/AffiliateNote";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import { jsonLdHtml } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Best Floor Mat for Spin Bike (2026): Top Picks Compared",
  description: "The best floor mats for spin bikes and indoor cycling: compared for thickness, sweat absorption, bike stability, and floor protection on hardwood, tile, and carpet.",
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
      "Cycleclub US builds this mat at 6mm thick: substantial enough to protect hardwood floors from the weight and vibration of a spin bike without the bulk of a heavy-duty rubber mat. At under $30, it's a well-rounded pick for most home setups.",
    affiliateUrl: "https://www.amazon.com/dp/B0BHQH8D9G?tag=pilatescollective-20",
    tag: "Best Overall",
  },
  {
    rank: "02",
    name: "FLEXLIFT Exercise Bike Mat",
    price: "$19.98",
    verdict: "Best budget pick",
    description:
      "FLEXLIFT's mat is confirmed compatible with Peloton bikes and is the least expensive option on this list. For Peloton owners who want a simple, affordable floor protector without paying for extra thickness or features they don't need, this is the straightforward choice.",
    affiliateUrl: "https://www.amazon.com/dp/B0H517MP29?tag=pilatescollective-20",
    tag: "Best Budget Pick",
  },
  {
    rank: "03",
    name: "Crostice Bike Mat",
    price: "$29.99",
    verdict: "Best Peloton-compatible mid-tier pick",
    description:
      "Crostice Home's mat matches the Cycleclub in thickness at 6mm and is specifically noted as Peloton compatible, sized to fit the Bike and Bike+ footprint. It sits at a similar price to our top pick, making it a strong alternative if the Cycleclub is unavailable.",
    affiliateUrl: "https://www.amazon.com/dp/B09QQMNJ61?tag=pilatescollective-20",
    tag: "Best for Peloton",
  },
  {
    rank: "04",
    name: "Marcy Fitness Equipment Mat",
    price: "$42.29",
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
      "dateModified": "2026-10-20",
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
          "offers": { "@type": "Offer", "priceCurrency": "USD", "price": p.price, "availability": "https://schema.org/InStock", "url": p.affiliateUrl },
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
        { "@type": "Question", "name": "Can I use a yoga mat under a spin bike instead of a dedicated mat?", "acceptedAnswer": { "@type": "Answer", "text": "A yoga mat is too thin and too narrow: it will compress and shift under bike weight and vibration, providing inadequate floor protection and poor stability. Dedicated equipment mats are thicker (3/16 to 3/8 inch), wider, and made from PVC or rubber compounds that resist compression under sustained heavy loads." } },
      ],
    },
  ],
};

const QP_NOTES = ["Best overall floor mat", "Best budget pick", "Best Peloton-compatible mid-tier pick", "Best from an established brand", "Best low-cost Peloton-compatible pick"];

export default function BestFloorMatSpinBikePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
      <Header />
      <main>
        <section className="r-ah r-ah-legacy">
          <div className="r-wrap">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[12.5px] font-bold" style={{ color: "#0a0a0a" }}>Equipment Guide</span>
              <span style={{ color: "#9a9490" }}>·</span>
              <span className="text-[12.5px] font-bold" style={{ color: "#3a3530" }}>Indoor Cycling</span>
            </div>
            <h1 className="mb-6 r-d r-h1">
              Best Floor Mat<br /><span style={{ color: "#a98a5f" }}>for Spin Bike (2026)</span>
            </h1>
            <p className="text-base mb-6" style={{ color: "#6f6964" }}>Prices checked October 20, 2026 · 7 min read</p>
            <TopPick name={PRODUCTS[0].name} price={PRODUCTS[0].price} note={QP_NOTES[0]} url={PRODUCTS[0].affiliateUrl} />
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#ddd6cc" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#3a3530" }}>
              A spin bike without a floor mat scratches hardwood, vibrates into surrounding rooms, and leaves sweat pooling directly on the floor. The right mat solves all three problems and costs a fraction of the bike itself. This guide compares the five best-value options for 2026, from budget Peloton-compatible mats to a pick from an established fitness brand.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image relative r-ah-img">
              <Image src="/pictures/junseong-lee-AX8cf6mkCzw-unsplash.jpg" alt="Best floor mat for spin bike 2026" fill className="object-cover" />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <QuickPicks className="mb-6 mt-4" picks={PRODUCTS.map((pr, i) => ({ name: pr.name, price: pr.price, url: pr.affiliateUrl, note: QP_NOTES[i] }))} />
            <AffiliateNote>Some links on this page go to Amazon and manufacturer sites. We earn a small commission on qualifying purchases.</AffiliateNote>

            <div className="mb-16">
              <p className="text-[12.5px] font-bold mb-10" style={{ color: "#0a0a0a" }}>5 Mats · All Floor Types</p>
              <div className="space-y-10">
                {PRODUCTS.map((p) => (
                  <div key={p.name}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl r-hx" style={{ color: "#9a9490" }}>{p.rank}</span>
                      <span className="text-[12.5px] font-bold px-3 py-1 rounded-full" style={{ backgroundColor: "#ede9e3", color: "#0a0a0a" }}>{p.tag}</span>
                    </div>
                    <ProductCard name={p.name} description={p.description} descriptionHtml={p.description} price={p.price} affiliateUrl={p.affiliateUrl} />
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="mb-8 r-d r-h2">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "Do I really need a mat under my spin bike?", a: "Yes: spin bikes are heavy and vibrate, potentially scratching or denting hardwood. A high-output session also produces substantial sweat drip, and a non-slip mat prevents the bike from sliding on smooth floors during out-of-saddle efforts." },
                  { q: "What size mat do I need for a Peloton or spin bike?", a: "Most full-size connected bikes have footprints around 48 by 24 inches. A mat of at least that size covers the machine, but a larger 60 by 24-36 inch mat also covers the front splash zone where sweat lands during standing climbs." },
                  { q: "Can I use a yoga mat under a spin bike?", a: "No: a yoga mat is too thin and too narrow. It will compress and shift under bike weight and vibration. Dedicated equipment mats are thicker (3/16 to 3/8 inch) and made from compounds that resist compression under sustained heavy loads." },
                ].map((item) => (
                  <div key={item.q} className="rounded-2xl p-6" style={{ backgroundColor: "#ede9e3" }}>
                    <p className="text-base mb-2 r-hx" style={{ color: "#0a0a0a" }}>{item.q}</p>
                    <p className="text-base leading-relaxed" style={{ color: "#3a3530" }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-8 r-d r-h2">Further reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="Best Indoor Spin Bike for Home Studios (2026)" excerpt="Peloton, Schwinn IC4, NordicTrack, and budget bikes compared for resistance, ride feel, and connected apps." href="/blog/best-indoor-spin-bike-for-home-studio" category="Equipment" readTime="11 min read" date="June 2026" imageUrl="/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg" />
                <ArticleCard title="Best Cycling Gloves for Spin Class (2026)" excerpt="Padded cycling gloves compared for grip, palm cushioning, and ventilation during high-output spin sessions." href="/blog/best-cycling-gloves-for-spin-class" category="Equipment" readTime="7 min read" date="June 2026" imageUrl="/pictures/junseong-lee-G9H5edUL0T8-unsplash.jpg" />
                <ArticleCard title="Best Clip-In Pedals for Spin Bikes (2026): SPD vs Delta" excerpt="Clip-in pedals and cleats for indoor bikes ranked, why SPD beats Delta for studio cycling, which pedals fit…" href="/blog/best-clip-in-pedals-for-spin-bike" category="Spin" readTime="9 min read" imageUrl="/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg" />
                <ArticleCard title="Best Spin Bike Seat Cushions (2026): Compared & Ranked" excerpt="Spin bike seat cushions and replacement saddles ranked, plus the honest fix order, because a thick gel cover often…" href="/blog/best-spin-bike-seat-cushion" category="Spin" readTime="8 min read" imageUrl="/pictures/tomi-blasic-tj0sM4gHlns-unsplash.jpg" />
                <ArticleCard title="Best Spin Bikes Under $500 (2026): Compared & Ranked" excerpt="Indoor cycling bikes under $500 ranked on flywheel weight, drive type and resistance, plus why magnetic beats…" href="/blog/best-spin-bike-under-500" category="Spin" readTime="10 min read" imageUrl="/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg" />
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
