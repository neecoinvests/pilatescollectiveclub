import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Sets & Matching Outfits (2026) | Pilates Collective Club",
  description: "The best matching Pilates sets of 2026 — legging and bra sets from Lululemon, Alo, and Varley reviewed for reformer class performance and colour range.",
  keywords: ["best pilates sets", "pilates matching sets 2026", "pilates outfit set", "lululemon pilates set", "alo yoga pilates set", "matching pilates leggings bra", "pilates activewear sets", "best workout set pilates"],
  openGraph: {
    title: "Best Pilates Sets (2026): Matching Two-Piece Outfits Ranked",
    description: "The best matching sets for Pilates — tested for reformer performance and studio style.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-sets",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/roxana-popovici-cZ0WYsBFHhs-unsplash.jpg", width: 1200, height: 630, alt: "Best Pilates Matching Sets — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Sets (2026)",
    description: "The best matching sets for Pilates — tested and ranked.",
    images: ["https://pilatescollectiveclub.com/pictures/roxana-popovici-cZ0WYsBFHhs-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-pilates-sets" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Alo Yoga Airbrush High-Waist Legging & Bra Set",
    price: "From $176",
    verdict: "Best overall Pilates set",
    description:
      "Alo's Airbrush set is the default choice in boutique reformer studios across New York, Los Angeles, and London — and for good reason. The matching legging and bra combination is engineered as a coordinated system: the high-waist legging sits perfectly at the waist regardless of the bra style, the fabric weight is consistent across both pieces, and the colourways are designed to complement rather than merely match. The medium-weight compression fabric supports without restricting breath, which is particularly important in exercises like the hundred and long-box series. The sports bra component offers enough coverage and support for a full reformer session without requiring a separate layer.",
    affiliateUrl: "https://www.amazon.com/s?k=alo+yoga+airbrush+set+legging+bra&tag=pilatescollective-20",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "Lululemon Align High-Rise Set",
    price: "From $186",
    verdict: "Best for softness",
    description:
      "The Lululemon Align set pairs the iconic Align High-Rise Pant with the Free to Be Bra or Energy Bra, and the result is the softest coordinated Pilates outfit available at any price point. The Nulu fabric's near-weightless quality is immediately apparent in movement — there's no fabric resistance through hip flexion, spinal rotation, or the deep stretches of the full Pilates repertoire. The set is available in a comprehensive range of neutral and seasonal colourways, and the pieces can be purchased individually to build multiple combinations. A wardrobe investment that justifies itself across hundreds of studio sessions.",
    affiliateUrl: "https://www.amazon.com/s?k=lululemon+align+set+legging+bra&tag=pilatescollective-20",
    tag: "Most Popular",
  },
  {
    rank: "03",
    name: "Sweaty Betty Power Set",
    price: "From $168",
    verdict: "Best for comprehensive sizing",
    description:
      "Sweaty Betty's Power set — pairing the Power Legging with the Power Bra — is the strongest choice for practitioners who need extended sizing or inseam length. The legging is available up to a 31-inch inseam, making it one of the few premium options that genuinely works for tall practitioners, and the brand's size range extends to an inclusive 3XL across both pieces. The PowerForm fabric is firmer and more compressive than Nulu or Airlift, providing a different type of support that many practitioners prefer for the proprioceptive feedback during standing footwork and balance exercises. The UK heritage brand has earned its global reputation.",
    affiliateUrl: "https://www.amazon.com/s?k=sweaty+betty+power+set+legging+bra&tag=pilatescollective-20",
    tag: "Best for Sizing",
  },
  {
    rank: "04",
    name: "Vuori Halo Performance Set",
    price: "From $148",
    verdict: "Best for warm studios",
    description:
      "Vuori's Halo set prioritises breathability above all else — the lightweight Performance fabric moves moisture away from the skin faster than any other set on this list, making it the preferred choice for heated studios and warm-climate practitioners. The fabric is lighter and less compressive than Alo or Sweaty Betty, but it is completely opaque and provides a clean, streamlined aesthetic appropriate for any studio environment. The Halo Bra has a clean cross-back construction that doesn't interfere with scapular movement during stabilisation exercises, and both pieces are available in Vuori's characteristic muted, nature-inspired colourway palette.",
    affiliateUrl: "https://www.amazon.com/s?k=vuori+halo+set+legging+bra+women&tag=pilatescollective-20",
    tag: "Best Breathability",
  },
  {
    rank: "05",
    name: "Girlfriend Collective Compressive Set",
    price: "From $136",
    verdict: "Best sustainable set",
    description:
      "Girlfriend Collective's Compressive Set — pairing their Compressive High-Rise Legging with the Paloma Bra — is the most environmentally considered option in premium Pilates apparel. Both pieces are made from recycled post-consumer materials, and the brand maintains exceptional transparency about its supply chain. The compressive fabric provides firm, supportive coverage suitable for reformer work, and the Paloma Bra's removable cups offer adaptable support. The brand's inclusive sizing runs XXS to 6XL, and the consistently thoughtful colourway releases have built a loyal following among practitioners who want to align their studio wardrobe with broader values.",
    affiliateUrl: "https://www.amazon.com/s?k=girlfriend+collective+compressive+set&tag=pilatescollective-20",
    tag: "Best Sustainable",
  },
  {
    rank: "06",
    name: "CRZ YOGA Naked Feeling Set",
    price: "From $58",
    verdict: "Best value set",
    description:
      "CRZ YOGA's Naked Feeling set offers the most compelling price-to-quality ratio in coordinated Pilates apparel. The legging and bra are sold as a matched set with consistent fabric, colour, and sizing — the coordination is genuine rather than incidental. The Naked Feeling fabric approaches the Align's softness at a fraction of the price, with four-way stretch and complete opacity through the deepest movements of the Pilates repertoire. For practitioners who are new to the method, building a wardrobe, or simply unwilling to spend £170+ on a two-piece outfit, this set is the starting point.",
    affiliateUrl: "https://www.amazon.com/s?k=crz+yoga+naked+feeling+set+legging+bra&tag=pilatescollective-20",
    tag: "Best Value",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Sets (2026): Matching Two-Piece Outfits Ranked",
      "description": "The best matching Pilates sets tested for reformer performance, fabric quality, and studio style.",
      "url": "https://pilatescollectiveclub.com/blog/best-pilates-sets",
      "datePublished": "2026-05-21",
      "dateModified": "2026-05-21",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/roxana-popovici-cZ0WYsBFHhs-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-pilates-sets" },
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Sets (2026)",
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
        { "@type": "ListItem", "position": 3, "name": "Best Pilates Sets", "item": "https://pilatescollectiveclub.com/blog/best-pilates-sets" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is it better to buy a matching Pilates set or mix and match?", "acceptedAnswer": { "@type": "Answer", "text": "Both approaches work. Matching sets offer colour consistency and fabric coordination, and are often slightly discounted compared to buying pieces individually. Mix and match gives more flexibility and allows you to replace individual pieces as they wear. Most serious practitioners do both — a few coordinated sets for efficiency, supplemented with versatile individual pieces." } },
        { "@type": "Question", "name": "What bra style is best for a Pilates set?", "acceptedAnswer": { "@type": "Answer", "text": "Medium-support bras with racerback or T-back constructions work best for Pilates. Halter styles can restrict shoulder movement during arm exercises; thick padded styles add unnecessary bulk. Look for a bra with a clean back profile that won't interfere with the scapular exercises common in the repertoire." } },
        { "@type": "Question", "name": "Are Pilates sets worth the investment?", "acceptedAnswer": { "@type": "Answer", "text": "At premium price points, coordinated sets from Alo, Lululemon, or Sweaty Betty represent a genuine investment. The fabrics are designed to last through regular washing and multiple sessions per week. If you practice three or more times weekly, the per-session cost of a quality set is low. Budget options from CRZ YOGA perform well but have a shorter lifespan." } },
      ],
    },
  ],
};

export default function BestPilatesSetsPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Apparel</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Pilates Sets<br /><span style={{ color: "#8b4a31" }}>(2026): Ranked & Tested</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 8 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              A matching set removes a decision from your morning — and in Pilates, where mental clarity and presence matter, that simplicity has real value. Beyond the aesthetic appeal, coordinated two-piece sets are designed as systems: the fabric weight, compression level, and waistband height are engineered to work together. These six sets represent the best of what the Pilates apparel market currently offers, from investment-grade premium options to exceptional value alternatives.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/roxana-popovici-cZ0WYsBFHhs-unsplash.jpg" alt="Best matching Pilates sets for reformer and studio practice" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Sets · Studio-Tested</p>
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
                  { q: "Is it better to buy a matching Pilates set or mix and match?", a: "Both approaches work. Matching sets offer colour consistency and fabric coordination, and are often slightly discounted compared to buying pieces individually. Mix and match gives more flexibility and allows you to replace individual pieces as they wear. Most serious practitioners do both — a few coordinated sets for efficiency, supplemented with versatile individual pieces." },
                  { q: "What bra style is best for a Pilates set?", a: "Medium-support bras with racerback or T-back constructions work best for Pilates. Halter styles can restrict shoulder movement during arm exercises; thick padded styles add unnecessary bulk. Look for a bra with a clean back profile that won't interfere with the scapular exercises common in the repertoire." },
                  { q: "Are Pilates sets worth the investment?", a: "At premium price points, coordinated sets from Alo, Lululemon, or Sweaty Betty represent a genuine investment. The fabrics are designed to last through regular washing and multiple sessions per week. If you practice three or more times weekly, the per-session cost of a quality set is low. Budget options from CRZ YOGA perform well but have a shorter lifespan." },
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
                <ArticleCard title="Best Pilates Bodysuits" excerpt="The clean one-piece alternative to sets — six tested options for the studio." href="/blog/best-pilates-bodysuits" category="Apparel" readTime="8 min read" date="May 2026" imageUrl="/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg" />
                <ArticleCard title="Best Pilates Leggings" excerpt="Five studio-tested leggings for reformer and mat practice." href="/blog/best-pilates-leggings" category="Apparel" readTime="9 min read" date="May 2026" imageUrl="/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg" />
                <ArticleCard title="Alo Yoga Pilates Activewear" excerpt="Alo makes our top-ranked set in this guide — here's our full brand deep-dive." href="/blog/alo-yoga-pilates" category="Brand Review" readTime="10 min read" date="May 2026" imageUrl="/pictures/roxana-popovici-5JQxj-zc5ng-unsplash.jpg" />
                <ArticleCard title="Sweaty Betty Pilates Activewear" excerpt="The UK brand that dominates Pilates wardrobes — full brand review and buying guide." href="/blog/sweaty-betty-pilates" category="Brand Review" readTime="10 min read" date="May 2026" imageUrl="/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best Pilates studios in New York…" />
      </main>
      <Footer />
    </>
  );
}
