import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Clip-In Pedals for Spin Bikes (2026): SPD vs Delta",
  description: "Clip-in pedals and cleats for indoor bikes ranked — why SPD beats Delta for studio cycling, which pedals fit Peloton, and the cleats to pair with them.",
  keywords: ["best clip in pedals for spin bike", "spd pedals indoor cycling", "peloton spd pedal conversion", "delta vs spd pedals", "dual sided spd pedals", "spin bike cleats", "shimano spd pedals spin", "toe cage pedals spin bike", "indoor cycling pedals", "spin bike pedals 2026"],
  openGraph: {
    title: "Best Clip-In Pedals for Spin Bikes (2026): SPD vs Delta",
    description: "Why SPD beats Delta for studio cycling, which pedals fit Peloton, and the cleats to pair with them.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-clip-in-pedals-for-spin-bike",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg", width: 1200, height: 630, alt: "Best Clip-In Pedals for Spin Bikes — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Clip-In Pedals for Spin Bikes (2026)",
    description: "SPD versus Delta, Peloton conversions, and the cleats that pair with each.",
    images: ["https://pilatescollectiveclub.com/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-clip-in-pedals-for-spin-bike" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Venzo SPD-Compatible Pedals with Toe Clips",
    price: "$39.98",
    verdict: "Best overall pedals for a home spin bike",
    description:
      "Venzo's pedals are Shimano SPD compatible and include toe clips, which gives you two ways to ride the same pedal: clipped in with SPD-cleated shoes, or strapped in with ordinary trainers. That flexibility is the correct default for a shared home bike, where not everyone in the house owns cycling shoes. SPD is the right clip standard for indoor cycling because the cleat is small and recessed into the sole, so you can walk normally between the bike and the rest of the house — unlike a protruding Delta or road cleat. Check that your bike's spindle is 9/16 inch, which is standard on almost every indoor bike, and remember the left pedal is reverse-threaded.",
    affiliateUrl: "https://www.amazon.com/dp/B07NKFPGPC?tag=pilatescollective-20",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "BUCKLOS Bike Clip Pedals (Peloton/Delta/SPD)",
    price: "$39.99",
    verdict: "Best if you're not sure which cleat standard you need",
    description:
      "BUCKLOS builds these as multi-cleat compatible, working across Peloton, Delta, and SPD cleat types. That matters most for households where the bike gets ridden by more than one person with different shoes, or for anyone replacing worn stock pedals without wanting to also commit to a new shoe-and-cleat system right away. Being compatible across standards means you can switch which cleat type you ride without buying a second set of pedals. As with any indoor pedal, confirm the 9/16 inch spindle fits your bike before ordering.",
    affiliateUrl: "https://www.amazon.com/dp/B0DL5R9FB4?tag=pilatescollective-20",
    tag: "Best Multi-Cleat Compatible",
  },
  {
    rank: "03",
    name: "YBEKI Pro-Grade SPD Spin Bike Pedals",
    price: "$35.66",
    verdict: "Best for durability under regular use",
    description:
      "The YBEKI pedal uses sealed bearings, which resist the sweat and moisture that build up under a spin bike over repeated sessions, and it carries a 12-month warranty — a useful signal of confidence from the manufacturer given the price. For riders training several times a week who want a pedal built to hold up rather than the cheapest possible option, the combination of sealed bearings and warranty coverage makes this the more durable pick in this lineup.",
    affiliateUrl: "https://www.amazon.com/dp/B07Y9Q9Q5X?tag=pilatescollective-20",
    tag: "Best for Durability",
  },
  {
    rank: "04",
    name: "Dual-Sided Clip-in Pedals (Peloton/Delta/SPD)",
    price: "$35.99",
    verdict: "Best budget pick",
    description:
      "This dual-sided pedal covers Peloton, Delta, and SPD cleats and clips in from either face, so you don't have to flip the pedal to find the right side. At just under $36, it's the lowest-cost option here that still covers all three major cleat standards, making it a sensible starting point if you want broad compatibility without paying a premium for it.",
    affiliateUrl: "https://www.amazon.com/dp/B0F2NBBC49?tag=pilatescollective-20",
    tag: "Best Budget Pick",
  },
  {
    rank: "05",
    name: "BUCKLOS Mountain Bike Clip/Flat Combo Pedals",
    price: "$35.09",
    verdict: "Best flat-and-clip combo pedal",
    description:
      "This BUCKLOS pedal pairs an SPD-cleat-compatible clip side with a flat platform on the reverse, the same combo-pedal logic that makes sense for any shared bike: clip in with cycling shoes, or ride flat in trainers, on the same pedal without swapping hardware. It's built to mountain-bike pedal standards, which typically means a wider platform than road-oriented pedals — useful if you want a bit more foot support on the flat side during longer sessions.",
    affiliateUrl: "https://www.amazon.com/dp/B0BYJYDLG6?tag=pilatescollective-20",
    tag: "Best Flat/Clip Combo",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Clip-In Pedals for Spin Bikes (2026): SPD vs Delta",
      "description": "Clip-in pedals, cleats and cages for indoor cycling compared — SPD versus Delta standards, Peloton conversions, thread sizes and release tension.",
      "url": "https://pilatescollectiveclub.com/blog/best-clip-in-pedals-for-spin-bike",
      "datePublished": "2026-09-14",
      "dateModified": "2026-09-14",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-clip-in-pedals-for-spin-bike" },
    },
    {
      "@type": "ItemList",
      "name": "Best Clip-In Pedals for Spin Bikes (2026)",
      "numberOfItems": PRODUCTS.length,
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
        { "@type": "ListItem", "position": 3, "name": "Best Clip-In Pedals for Spin Bikes", "item": "https://pilatescollectiveclub.com/blog/best-clip-in-pedals-for-spin-bike" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "SPD or Delta for indoor cycling?", "acceptedAnswer": { "@type": "Answer", "text": "SPD for almost everyone. The SPD cleat is small and sits recessed into the sole, so you can walk normally from the bike to anywhere else — a Delta or LOOK road cleat protrudes and makes walking awkward and slippery. SPD pedals are also usually double-sided, so you can clip in without flipping the pedal to find the right face. Delta exists on indoor bikes mainly because Peloton chose it; it offers a slightly larger contact platform, which matters for long road rides and very little for a 45-minute studio class. If your studio mandates a standard, follow the studio." } },
        { "@type": "Question", "name": "Will any pedals fit my spin bike?", "acceptedAnswer": { "@type": "Answer", "text": "Almost certainly, provided the spindle is 9/16 inch, which is the standard on essentially every indoor bike including Peloton. The narrower 1/2 inch size exists on some very old or department-store machines, so check if your bike is unusual. There is nothing proprietary about a Peloton crank, which is why SPD conversion is straightforward. Remember the left pedal is reverse-threaded — it tightens anticlockwise — and you will need either a 15mm pedal spanner or a 6mm Allen key depending on the pedal design." } },
        { "@type": "Question", "name": "Do clip-in pedals come with cleats?", "acceptedAnswer": { "@type": "Answer", "text": "It varies by listing, and this is a common source of frustration. Some SPD-compatible and multi-cleat pedals include cleats in the box; others do not, and some listings show cleats in the photograph without actually including them. Read the product specification rather than trusting the image, and check the seller's listing details before ordering if cleats matter to your budget." } },
        { "@type": "Question", "name": "Are clip-in pedals worth it for indoor cycling?", "acceptedAnswer": { "@type": "Answer", "text": "For anything more than occasional riding, yes. Being attached to the pedal lets you apply force through the upstroke as well as the downstroke, which distributes work across more muscle and makes high-cadence efforts noticeably smoother. It also stops the foot sliding forward on the pedal, which is what causes hot spots and numbness in trainers. That said, a well-adjusted toe cage delivers a good share of the same benefit, and is the better choice for shared bikes or anyone who wants to get a foot down instantly." } },
      ],
    },
  ],
};

export default function BestClipInPedalsForSpinBikePage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Spinning</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Clip-In Pedals<br /><span style={{ color: "#8b4a31" }}>for Spin Bikes (2026)</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 9 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              One decision governs this category: SPD or Delta. Choose SPD unless your studio tells you otherwise — the cleat sits recessed in the sole so you can walk normally, and the pedals are double-sided so you clip in without hunting for the right face. Delta is on indoor bikes largely because Peloton chose it, and any 9/16 inch SPD pedal will replace it. Nothing about a Peloton crank is proprietary.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg" alt="Cycling shoes and pedals set up for an indoor class" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Options · Ranked</p>
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

            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#fff4f1", border: "1px solid rgba(139,74,49,0.15)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Fitting notes that catch people out</h2>
              <ul className="space-y-3">
                {[
                  "The left pedal is reverse-threaded. It tightens anticlockwise. This is where most pedal swaps go wrong.",
                  "Check the spindle is 9/16 inch. Nearly all indoor bikes use it; the narrower 1/2 inch size will not fit.",
                  "Cleats are often sold separately. Read the specification rather than trusting the product photo.",
                  "Set release tension to the loosest usable setting while you learn, then tighten it as confidence grows.",
                  "Practise clipping out on both sides before your first class, holding onto something solid.",
                  "Cleats are a wear item — replace them when release starts feeling vague, typically once a year with regular riding.",
                ].map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    <span className="font-semibold" style={{ color: "#8b4a31" }}>⚠</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "SPD or Delta for indoor cycling?", a: "SPD for almost everyone. The SPD cleat is small and sits recessed into the sole, so you can walk normally from the bike to anywhere else — a Delta or LOOK road cleat protrudes and makes walking awkward and slippery. SPD pedals are also usually double-sided, so you can clip in without flipping the pedal to find the right face. Delta exists on indoor bikes mainly because Peloton chose it; it offers a slightly larger contact platform, which matters for long road rides and very little for a 45-minute studio class. If your studio mandates a standard, follow the studio." },
                  { q: "Will any pedals fit my spin bike?", a: "Almost certainly, provided the spindle is 9/16 inch, which is the standard on essentially every indoor bike including Peloton. The narrower 1/2 inch size exists on some very old or department-store machines, so check if your bike is unusual. There is nothing proprietary about a Peloton crank, which is why SPD conversion is straightforward. Remember the left pedal is reverse-threaded — it tightens anticlockwise — and you will need either a 15mm pedal spanner or a 6mm Allen key depending on the pedal design." },
                  { q: "Do clip-in pedals come with cleats?", a: "It varies by listing, and this is a common source of frustration. Some SPD-compatible and multi-cleat pedals include cleats in the box; others do not, and some listings show cleats in the photograph without actually including them. Read the product specification rather than trusting the image, and check the seller's listing details before ordering if cleats matter to your budget." },
                  { q: "Are clip-in pedals worth it for indoor cycling?", a: "For anything more than occasional riding, yes. Being attached to the pedal lets you apply force through the upstroke as well as the downstroke, which distributes work across more muscle and makes high-cadence efforts noticeably smoother. It also stops the foot sliding forward on the pedal, which is what causes hot spots and numbness in trainers. That said, a well-adjusted toe cage delivers a good share of the same benefit, and is the better choice for shared bikes or anyone who wants to get a foot down instantly." },
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
                <ArticleCard title="Best Cycling Shoes for Spin Class" excerpt="SPD-compatible shoes ranked for fit, stiffness and walkability." href="/blog/best-cycling-shoes-for-spin-class" category="Spinning" readTime="9 min read" date="June 2026" imageUrl="/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg" />
                <ArticleCard title="Best Cycling Gloves for Spin Class" excerpt="Padded, grip and ventilated gloves for long sessions on the bars." href="/blog/best-cycling-gloves-for-spin-class" category="Spinning" readTime="7 min read" date="June 2026" imageUrl="/pictures/dane-wetton-t1NEMSm1rgI-unsplash.jpg" />
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
