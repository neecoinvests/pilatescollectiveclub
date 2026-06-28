import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Warm-Up Jacket for Pilates (2026): Studio Layers Ranked | Pilates Collective Club",
  description: "The best warm-up jackets for Pilates — Alo Accolade, Lululemon Define, Beyond Yoga, and more compared for studio transit, reformer warm-up, and post-session coverage.",
  keywords: ["best warm up jacket pilates", "pilates warm up jacket 2026", "alo yoga define jacket pilates", "lululemon define jacket pilates", "beyond yoga jacket pilates", "studio layer jacket pilates", "pilates cover up jacket", "reformer pilates warm up layer"],
  openGraph: {
    title: "Best Warm-Up Jacket for Pilates (2026)",
    description: "Studio layers for Pilates — worn on the reformer, between classes, and in transit. Tested and ranked.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-warm-up-jacket-for-pilates",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg", width: 1200, height: 630, alt: "Best Warm-Up Jacket for Pilates — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Warm-Up Jacket for Pilates (2026)",
    description: "Studio layers for Pilates warm-up and transit — tested and ranked.",
    images: ["https://pilatescollectiveclub.com/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-warm-up-jacket-for-pilates" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Alo Yoga Accolade Bomber Jacket",
    price: "From $168",
    verdict: "Best overall studio jacket for Pilates",
    description:
      "The Alo Accolade Bomber is the jacket most consistently seen in boutique Pilates and Lagree studio environments, and its prevalence reflects genuine performance rather than trend alone. The ribbed cuffs and hem seal body heat during reformer warm-up while allowing immediate removal when intensity rises — the bomber cut means it slides off one arm at a time without disrupting a reformer carriage position. The nylon shell is smooth enough that it does not catch on reformer upholstery or leather straps during the transitional exercises where practitioners shift between on-reformer and standing positions. The slim fit allows an instructor to see spinal alignment and shoulder position during warm-up — the same fit requirement that governs all Pilates and Lagree clothing. The front zip opens fully for rapid cooling. The Alo Accolade is also the jacket that holds its appearance through studio washing cycles better than most knit alternatives — the woven nylon resists pilling across consistent use. Available in 12 colourways.",
    affiliateUrl: "https://www.amazon.com/s?k=alo+yoga+accolade+bomber+jacket+women&tag=pilatescollective-20",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "Lululemon Define Jacket",
    price: "From $118",
    verdict: "Best fitted studio jacket",
    description:
      "The Lululemon Define Jacket has been the standard fitted studio layer for a decade, and its persistence in the market is earned by a specific combination of properties that Pilates requires: the four-way stretch Luon fabric moves with the body through every arm reach, spinal extension, and lateral exercise without bunching or resisting, the fitted silhouette allows visibility of the thoracic spine and shoulder alignment that Pilates instruction depends on, and the thumbholes keep sleeves in position during the hand placements of mat warm-up sequences. The Define Jacket can be worn through early reformer warm-up exercises and removed mid-session without disruption. The Luon construction is warmer than the Alo Accolade nylon — making it the better choice for cold morning studio sessions and unheated spaces — but it breathes less effectively once intensity rises. Machine washable; maintains shape through consistent studio use. Available in an extensive colourway range each season.",
    affiliateUrl: "https://www.amazon.com/s?k=lululemon+define+jacket+women&tag=pilatescollective-20",
    tag: "Best Fitted Stretch Layer",
  },
  {
    rank: "03",
    name: "Beyond Yoga Foldover Pullover",
    price: "From $99",
    verdict: "Best soft studio pullover",
    description:
      "The Beyond Yoga Foldover Pullover is the soft-layer alternative for practitioners who prefer a relaxed-fit pullover over a zip jacket for studio transit and warm-up. The space-dye fabric is the brand's signature material — exceptionally soft, four-way stretch, and pill-resistant through heavy washing cycles. The relaxed oversized fit means the pullover is not worn through reformer exercises (the loose fabric would obscure alignment feedback) but functions as the ideal pre-session layer in the changing room and during mat warm-up sequences where lying down and sitting are the primary positions. The foldover hem doubles the waistband for a fitted look when pulled down. For practitioners who want the most comfortable studio transit layer without the precision fit of the Lululemon Define or Alo Accolade, the Beyond Yoga Foldover is the correct recommendation. Multiple seasonal colourways.",
    affiliateUrl: "https://www.amazon.com/s?k=beyond+yoga+foldover+pullover+sweatshirt&tag=pilatescollective-20",
    tag: "Best Soft Pullover",
  },
  {
    rank: "04",
    name: "Varley Claremont Track Top",
    price: "From $110",
    verdict: "Best track jacket for Pilates studio style",
    description:
      "The Varley Claremont Track Top is the premium track jacket in the boutique Pilates wardrobe, and it holds a specific position in the market: it is polished enough for post-class coffee, technical enough for early-session warm-up on the reformer, and distinctive enough that it reads as a considered studio choice rather than a generic gym layer. The soft Claremont fabric — a proprietary brushed ponte blend — is warmer than performance nylon, holds colour through repeated washing, and has enough stretch for shoulder-width exercises without restricting overhead reach. The track jacket silhouette with contrast piping integrates naturally with high-waisted Pilates leggings. Varley is the brand most consistently associated with the boutique Pilates aesthetic across US and European studio communities. The Claremont is their centrepiece layer piece and the jacket most likely to be worn by the instructor leading your class.",
    affiliateUrl: "https://www.amazon.com/s?k=varley+claremont+track+top+jacket&tag=pilatescollective-20",
    tag: "Best Studio Style",
  },
  {
    rank: "05",
    name: "Girlfriend Collective Jackson Cropped Hoodie",
    price: "From $88",
    verdict: "Best sustainable warm-up layer",
    description:
      "The Girlfriend Collective Jackson Cropped Hoodie is the sustainability-forward studio layer choice, made from 100% recycled polyester from post-consumer plastic bottles without compromising on fit or performance. The cropped length pairs with high-waisted Pilates leggings without the bunching at the waistband that full-length hoodies create when tucked or layered. The drawstring hood can be worn up for cold transit and down for studio warm-up. The soft recycled fleece interior provides meaningful warmth for early-morning studio sessions without overheating. Girlfriend Collective sizes inclusively from XXS to 6XL — the widest size range of any jacket on this list. The recycled construction and transparent supply chain align with the values of practitioners who prioritise sustainability across their studio wardrobe.",
    affiliateUrl: "https://www.amazon.com/s?k=girlfriend+collective+jackson+cropped+hoodie&tag=pilatescollective-20",
    tag: "Best Sustainable Option",
  },
  {
    rank: "06",
    name: "Splits59 Warm Up Jacket",
    price: "From $138",
    verdict: "Best performance zip jacket for Lagree",
    description:
      "The Splits59 Warm Up Jacket is designed specifically for the boutique fitness studio environment and performs particularly well for Lagree classes where the warm-up-through-cool-down temperature arc is steeper than in standard Pilates sessions. The lightweight supplex fabric provides wind resistance for studio transit without adding bulk on the Megaformer, the full-zip allows staged removal as class intensity rises, and the slim-to-body cut does not interfere with the multi-limb platform positioning of Lagree exercises during early-session warm-up. Splits59 is one of the few activewear brands with studio-specific garment design rather than repurposed athletic styling — their warm-up jacket proportions are calibrated for reformer and Megaformer use rather than running or gym work. The jacket is available in the brand's signature neutral and muted colourways that integrate with any Pilates or Lagree studio environment.",
    affiliateUrl: "https://www.amazon.com/s?k=splits59+warm+up+jacket+women&tag=pilatescollective-20",
    tag: "Best for Lagree",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Warm-Up Jacket for Pilates (2026): Studio Layers Ranked",
      "description": "Studio layers for Pilates warm-up, transit, and cool-down — the jackets that work on and off the reformer.",
      "url": "https://pilatescollectiveclub.com/blog/best-warm-up-jacket-for-pilates",
      "datePublished": "2026-06-28",
      "dateModified": "2026-06-28",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-warm-up-jacket-for-pilates" },
    },
    {
      "@type": "ItemList",
      "name": "Best Warm-Up Jackets for Pilates (2026)",
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
        { "@type": "ListItem", "position": 3, "name": "Best Warm-Up Jacket for Pilates", "item": "https://pilatescollectiveclub.com/blog/best-warm-up-jacket-for-pilates" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Should you wear a jacket to Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "A warm-up layer for studio transit and early-session warm-up is useful rather than essential. Studios are typically maintained at 65–70°F (18–21°C), so many practitioners remove jackets before stepping on the reformer. The practical use case for a Pilates jacket is transit (from changing room to studio and back), the first 5–10 minutes of mat warm-up in a cool studio, and post-session cool-down. Fitted layers like the Lululemon Define Jacket can be worn through early reformer work without restricting movement or obscuring alignment." } },
        { "@type": "Question", "name": "What should a Pilates warm-up jacket look like?", "acceptedAnswer": { "@type": "Answer", "text": "Fitted enough that an instructor can see your spinal alignment and shoulder position during warm-up. Stretchy enough to accommodate overhead reach and lateral exercises without pulling. Removable quickly — a zip front is preferable to a pullover for mid-session removal without disrupting reformer positioning. Not so warm that it causes overheating in the first 10 minutes. The Alo Accolade Bomber and Lululemon Define Jacket both meet these criteria." } },
        { "@type": "Question", "name": "What do Pilates instructors wear as a layer?", "acceptedAnswer": { "@type": "Answer", "text": "Pilates instructors most commonly wear the Lululemon Define Jacket, Varley Claremont Track Top, or Splits59 Warm Up Jacket as their studio layer. The common criteria across instructor choices: fitted silhouette, stretch fabric, full-zip or easy removal, and a neutral or muted colourway that reads as professional in a studio environment. Oversized or printed layers are less common in instructor wardrobes where alignment visibility matters." } },
      ],
    },
  ],
};

export default function BestWarmUpJacketForPilatesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Style Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Clothing</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Warm-Up Jacket<br /><span style={{ color: "#8b4a31" }}>for Pilates (2026)</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated June 2026 · 7 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              A Pilates warm-up jacket is a specific garment: fitted enough that alignment is visible during early exercises, stretchy enough to move through overhead reach and lateral work, removable quickly mid-session without disrupting a reformer carriage position, and polished enough for the boutique studio environment. These six options — from the Alo Accolade Bomber to the Splits59 Lagree-specific jacket — cover every material, cut, and price point across the studio wardrobe.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg" alt="Best warm-up jacket for Pilates studio use" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Jackets · Studio-Tested</p>
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
                  { q: "Should you wear a jacket to Pilates?", a: "A warm-up layer for studio transit and early-session warm-up is useful rather than essential. Studios are typically maintained at 65–70°F (18–21°C), so many practitioners remove jackets before stepping on the reformer. The practical use case for a Pilates jacket is transit, the first 5–10 minutes of mat warm-up in a cool studio, and post-session cool-down. Fitted layers like the Lululemon Define Jacket can be worn through early reformer work without restricting movement or obscuring alignment." },
                  { q: "What should a Pilates warm-up jacket look like?", a: "Fitted enough that an instructor can see your spinal alignment and shoulder position during warm-up. Stretchy enough to accommodate overhead reach and lateral exercises without pulling. Removable quickly — a zip front is preferable to a pullover for mid-session removal without disrupting reformer positioning. Not so warm that it causes overheating in the first 10 minutes. The Alo Accolade Bomber and Lululemon Define Jacket both meet these criteria." },
                  { q: "What do Pilates instructors wear as a layer?", a: "Pilates instructors most commonly wear the Lululemon Define Jacket, Varley Claremont Track Top, or Splits59 Warm Up Jacket as their studio layer. The common criteria across instructor choices: fitted silhouette, stretch fabric, full-zip or easy removal, and a neutral or muted colourway that reads as professional in a studio environment. Oversized or printed layers are less common in instructor wardrobes where alignment visibility matters." },
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
                <ArticleCard title="What to Wear to Pilates" excerpt="The complete guide to Pilates clothing — what instructors see, what restricts movement, and what the studio expects." href="/blog/what-to-wear-to-pilates" category="Style Guide" readTime="8 min read" date="March 2026" imageUrl="/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg" />
                <ArticleCard title="Best Pilates Leggings (2026)" excerpt="The leggings that make sense on a reformer — grip, compression, and coverage tested across every brand." href="/blog/best-pilates-leggings" category="Equipment" readTime="9 min read" date="April 2026" imageUrl="/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best Pilates studios in New York..." />
      </main>
      <Footer />
    </>
  );
}
