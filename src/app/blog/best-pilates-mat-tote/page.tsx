import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Mat Tote Bags (2026): Carry Your Mat in Style | Pilates Collective Club",
  description: "The best mat tote bags for Pilates — reviewed for mat fit, capacity, and durability. Top picks for women who carry their own mat to class in 2026.",
  keywords: ["best pilates mat tote bag", "pilates mat bag 2026", "yoga mat tote bag", "best mat carrier pilates", "pilates mat carry bag women", "mat bag for pilates", "best mat tote 2026", "pilates mat carry tote"],
  openGraph: {
    title: "Best Pilates Mat Tote Bags (2026)",
    description: "The best mat tote bags for Pilates — tested for mat fit, capacity, and everyday carry.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-mat-tote",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/mathilde-langevin-aBJ3A-2LJyU-unsplash.jpg", width: 1200, height: 630, alt: "Best Pilates Mat Tote Bags — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Mat Tote Bags (2026)",
    description: "The best mat tote bags for Pilates — tested and ranked.",
    images: ["https://pilatescollectiveclub.com/pictures/mathilde-langevin-aBJ3A-2LJyU-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-pilates-mat-tote" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Gaiam Classic Yoga Mat Bag",
    price: "From $28",
    verdict: "Best overall mat tote",
    description:
      "The Gaiam Classic is the default recommendation for practitioners who want a dedicated mat carrier without overthinking it. The zippered main compartment fits most standard Pilates and yoga mats rolled to their natural diameter, and the side mesh pocket holds a water bottle securely without the bag tipping. The shoulder strap is padded and adjustable, distributing the weight of a filled mat bag comfortably across a 15-minute walk to class. The range of colourways is broad, and the fabric holds up to repeated daily use without fraying at the seams. For mat Pilates practitioners attending regular classes, this bag solves the mat-carry problem cleanly and economically.",
    affiliateUrl: "https://www.amazon.com/s?k=gaiam+yoga+mat+bag+tote&tag=pilatescollective-20",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "Alo Yoga Move Mat Tote",
    price: "From $88",
    verdict: "Best premium mat tote",
    description:
      "Alo's Move Mat Tote is the rare bag that solves the mat-carry problem elegantly for practitioners who also need a full studio kit in the same carry. External straps secure a rolled mat to the exterior of the bag, keeping mat and gear contained without requiring a separate carrier. The main compartment holds a complete studio kit including shoes and a change of clothes, and the interior organisation is sufficient for everyday carry items. The aesthetic is unmistakably Alo — clean, minimal, and appropriate for both studio and street. Best suited for mat Pilates practitioners; those who only do reformer work may prefer a simpler tote without external straps.",
    affiliateUrl: "https://www.amazon.com/s?k=alo+yoga+move+mat+tote&tag=pilatescollective-20",
    tag: "Best Premium",
  },
  {
    rank: "03",
    name: "Manduka Go Light Mat Carrier",
    price: "From $38",
    verdict: "Best minimalist mat carrier",
    description:
      "Manduka's Go Light Mat Carrier strips the mat bag concept back to its essentials. The lightweight sling design secures a rolled mat in an open carrier rather than a fully enclosed bag, making it the lightest and most packable option on this list. The adjustable strap converts from shoulder carry to backpack carry, and the open construction means it accommodates mats of various thicknesses and diameters without the fit issues that plague fully enclosed bags. Best for practitioners who travel light and want to carry a mat and a small personal item rather than a full studio kit.",
    affiliateUrl: "https://www.amazon.com/s?k=manduka+go+light+mat+carrier+bag&tag=pilatescollective-20",
    tag: "Best Minimalist",
  },
  {
    rank: "04",
    name: "Lululemon Yoga Mat Bag",
    price: "From $48",
    verdict: "Best structured mat bag",
    description:
      "Lululemon's Yoga Mat Bag takes the enclosed bag approach and executes it with the brand's characteristic attention to detail. The main compartment fits a standard mat snugly, the exterior pocket handles personal items, and the carry handle and adjustable shoulder strap give flexible carrying options for different commute lengths. The fabric is water-resistant and maintains its structure rather than slouching when the mat is removed — a minor but meaningful quality-of-life improvement over cheaper fabric bags. For practitioners who want their mat bag to match a Lululemon studio kit, the integration is seamless.",
    affiliateUrl: "https://www.amazon.com/s?k=lululemon+yoga+mat+bag+carrier&tag=pilatescollective-20",
    tag: "Best Structured",
  },
  {
    rank: "05",
    name: "MIER Large Yoga Mat Tote",
    price: "From $32",
    verdict: "Best value mat tote",
    description:
      "MIER's Large Yoga Mat Tote is the best-value option for practitioners who need more than just a mat carrier. The large main compartment fits a rolled mat alongside a towel, change of clothes, and accessories, effectively combining mat bag and studio bag in a single carry. The side water bottle pocket, interior zip pocket, and key hook cover the organisational basics without unnecessary complexity. The fabric is water-resistant and handles studio use without degrading quickly. For practitioners who attend mat classes and want to avoid carrying two separate bags, this tote eliminates that friction efficiently.",
    affiliateUrl: "https://www.amazon.com/s?k=mier+yoga+mat+bag+tote&tag=pilatescollective-20",
    tag: "Best Value",
  },
  {
    rank: "06",
    name: "Myga Yoga Mat Carry Bag",
    price: "From $22",
    verdict: "Best budget mat bag",
    description:
      "Myga's Yoga Mat Carry Bag is the honest budget recommendation for practitioners who need a mat carrier without a premium price. The design is straightforward — a canvas-style bag with a full-length zip, a side pocket, and a carry handle — and it does what a mat bag needs to do without embellishment. The capacity fits most standard mats, and the fabric, while not as durable as premium options, holds up well across regular weekly use. For beginners who are not yet committed to a specific mat brand or practice style, or practitioners who want a second bag to keep at a studio locker, Myga's bag delivers solid value.",
    affiliateUrl: "https://www.amazon.com/s?k=myga+yoga+mat+carry+bag&tag=pilatescollective-20",
    tag: "Best Budget",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Mat Tote Bags (2026)",
      "description": "The best mat tote bags for Pilates — reviewed for mat fit, capacity, and durability.",
      "url": "https://pilatescollectiveclub.com/blog/best-pilates-mat-tote",
      "datePublished": "2026-06-01",
      "dateModified": "2026-06-26",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/mathilde-langevin-aBJ3A-2LJyU-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-pilates-mat-tote" },
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Mat Tote Bags (2026)",
      "numberOfItems": 6,
      "itemListElement": PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "description": p.description,
          "offers": { "@type": "Offer", "priceCurrency": "USD", "price": p.price.replace(/[^0-9]/g, ""), "availability": "https://schema.org/InStock", "url": p.affiliateUrl },
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Pilates Mat Tote Bags", "item": "https://pilatescollectiveclub.com/blog/best-pilates-mat-tote" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Do I need a mat bag for Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "Only if you carry your own mat to class. Most reformer studios provide mats and equipment. If you attend mat Pilates classes, practice outdoors, or prefer your own mat for hygiene reasons, a dedicated mat bag protects your mat and makes the carry more manageable." } },
        { "@type": "Question", "name": "What size mat bag fits a Pilates mat?", "acceptedAnswer": { "@type": "Answer", "text": "Most standard Pilates mats roll to approximately 68-70cm in length and 12-15cm in diameter. A standard yoga mat bag fits most Pilates mats, though thicker mats (6mm+) may be tighter. Check the diameter of your rolled mat before buying an enclosed bag — an open carrier or strap system avoids fit issues entirely." } },
        { "@type": "Question", "name": "Can a mat tote also carry my studio kit?", "acceptedAnswer": { "@type": "Answer", "text": "Some mat totes — particularly those with a large main compartment alongside external mat straps — can carry both a mat and a full studio kit. The Alo Move Mat Tote and MIER Large Mat Tote both achieve this combination. Dedicated mat carriers (slings or enclosed bags) typically hold only the mat and a small personal item." } },
      ],
    },
  ],
};

export default function BestPilatesMatTotePage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Accessories</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Pilates Mat Tote Bags<br /><span style={{ color: "#8b4a31" }}>(2026): Carry in Style</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated June 2026 · 6 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Carrying a Pilates mat without a proper bag is a friction tax on every class. The mat slips, the strap cuts into your shoulder, and you arrive feeling like you have already been to the gym before the class starts. A good mat tote eliminates that friction entirely — the mat is secured, your hands are free, and you arrive composed. These six bags cover every scenario from the minimalist open carrier to the full studio tote with integrated mat straps, all chosen for Pilates-specific use.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/mathilde-langevin-aBJ3A-2LJyU-unsplash.jpg" alt="Best Pilates mat tote bags" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-10 mt-4 overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Mat Bags · Pilates-Tested</p>
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
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "Do I need a mat bag for Pilates?", a: "Only if you carry your own mat to class. Most reformer studios provide mats and equipment. If you attend mat Pilates classes, practice outdoors, or prefer your own mat for hygiene reasons, a dedicated mat bag protects your mat and makes the carry more manageable." },
                  { q: "What size mat bag fits a Pilates mat?", a: "Most standard Pilates mats roll to approximately 68-70cm in length and 12-15cm in diameter. A standard yoga mat bag fits most Pilates mats, though thicker mats (6mm+) may be tighter. Check the diameter of your rolled mat before buying an enclosed bag — an open carrier or strap system avoids fit issues entirely." },
                  { q: "Can a mat tote also carry my studio kit?", a: "Some mat totes — particularly those with a large main compartment alongside external mat straps — can carry both a mat and a full studio kit. The Alo Move Mat Tote and MIER Large Mat Tote both achieve this combination. Dedicated mat carriers typically hold only the mat and a small personal item." },
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
                <ArticleCard title="Best Pilates Mat Bag (2026)" excerpt="The complete guide to mat bags and studio carry-alls for Pilates practitioners." href="/blog/best-pilates-mat-bag" category="Equipment" readTime="7 min read" date="May 2026" imageUrl="/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg" />
                <ArticleCard title="Best Pilates Mat (2026)" excerpt="Six mats chosen for grip, cushioning, and studio durability." href="/blog/best-pilates-mat" category="Equipment" readTime="8 min read" date="April 2026" imageUrl="/pictures/roxana-popovici-5JQxj-zc5ng-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best Pilates studios in London..." />
      </main>
      <Footer />
    </>
  );
}
