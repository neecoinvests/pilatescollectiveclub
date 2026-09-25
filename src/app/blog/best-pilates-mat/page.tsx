import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Mat (2026): 5 Verified Picks",
  description: "5 verified, in-stock Pilates mats on Amazon, from thickness tiers to alignment lines and eco-friendlier TPE — led by the Gaiam Premium Yoga Mat, 6mm ($21.00).",
  keywords: ["best pilates mat", "pilates mat 2026", "best mat for pilates", "gaiam premium yoga mat pilates", "6mm pilates mat", "10mm yoga mat", "TPE yoga mat", "yoga mat alignment lines", "non-slip pilates mat", "pilates mat vs yoga mat", "best pilates mat buy"],
  openGraph: {
    title: "Best Pilates Mat (2026): 5 Verified Picks",
    description: "Five Pilates mats we verified as real, in-stock Amazon listings — ranked and compared across thickness, material, and features.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-mat",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/dane-wetton-t1NEMSm1rgI-unsplash.jpg", width: 1200, height: 630, alt: "Best Pilates Mat — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Mat (2026)",
    description: "5 verified, in-stock picks — compared on thickness, material, and features.",
    images: ["https://pilatescollectiveclub.com/pictures/dane-wetton-t1NEMSm1rgI-unsplash.jpg"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/blog/best-pilates-mat",
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Gaiam Premium Yoga Mat (6mm)",
    price: "$21.00",
    verdict: "Our long-standing anchor pick — sold by Amazon.com",
    description:
      "Sold directly by Amazon.com, this is the mat this guide has recommended and verified before: a 6mm mat from Gaiam at $21.00. It sits at the commonly cited sweet spot for Pilates — firm enough for spinal feedback, with enough cushioning for sustained floor contact — and remains our default overall pick.",
    affiliateUrl: "https://www.amazon.com/dp/B09WF4GPPC?tag=pilatescollective-20",
    tag: "Best Overall",
  },
  {
    rank: "02",
    name: "Gaiam Essentials Thick Yoga Mat (10mm)",
    price: "$25.43",
    verdict: "More cushioning, same brand — sold by Amazon.com",
    description:
      "Also from Gaiam and sold by Amazon.com, this version steps up to 10mm — roughly two-thirds thicker than the Premium pick above. If you find 6mm too firm on your spine or joints during floor work, this is the same brand's answer at a moderately higher price, $25.43.",
    affiliateUrl: "https://www.amazon.com/dp/B07H9PZ6MH?tag=pilatescollective-20",
    tag: "Best Extra Cushioning",
  },
  {
    rank: "03",
    name: "YOGATI Yoga Mat with Alignment Lines (6mm)",
    price: "$19.98",
    verdict: "6mm with printed alignment lines for form cues",
    description:
      "From YOGATI, this 6mm mat adds printed alignment lines across the surface — a feature aimed at helping you check hand, foot, and hip placement during standing and mat exercises. At $19.98, it's priced close to our overall pick while offering a feature the others in this lineup don't.",
    affiliateUrl: "https://www.amazon.com/dp/B0CJ39LHNX?tag=pilatescollective-20",
    tag: "Best for Alignment Cues",
  },
  {
    rank: "04",
    name: "KEEP TPE Yoga Mat (6mm)",
    price: "$24.99",
    verdict: "TPE material for a lighter, eco-friendlier mat",
    description:
      "Sold by Keep Official Store, this 6mm mat is made from TPE (thermoplastic elastomer) rather than PVC — generally considered a lighter and more eco-friendly material choice. At $24.99, it's a reasonable option if material composition matters to your buying decision.",
    affiliateUrl: "https://www.amazon.com/dp/B0GSRC3Z4Y?tag=pilatescollective-20",
    tag: "Best Eco-Friendlier Pick",
  },
  {
    rank: "05",
    name: "Retrospec Zuma Yoga Mat (6mm TPE)",
    price: "$26.99",
    verdict: "Established brand, cushioned 6mm TPE mat",
    description:
      "Sold by Amazon.com, the Retrospec Zuma is a 6mm TPE mat from an established fitness-equipment brand, described as cushioned. At $26.99, it's the highest-priced mat in this lineup, positioned as a name-brand alternative to the KEEP TPE pick above.",
    affiliateUrl: "https://www.amazon.com/dp/B0GX7FSJ74?tag=pilatescollective-20",
    tag: "Also Great",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Mat (2026): 5 Verified Picks",
      "description": "Five Pilates mats verified as real, in-stock Amazon listings, compared across thickness, material, and features — led by the Gaiam Premium Yoga Mat, 6mm.",
      "url": "https://pilatescollectiveclub.com/blog/best-pilates-mat",
      "datePublished": "2026-05-14",
      "dateModified": "2026-09-23",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/dane-wetton-t1NEMSm1rgI-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-pilates-mat" },
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Mat (2026)",
      "numberOfItems": PRODUCTS.length,
      "itemListElement": PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "description": p.description,
          "offers": { "@type": "Offer", "priceCurrency": "USD", "price": p.price.replace(/[^0-9.]/g, ""), "availability": "https://schema.org/InStock", "url": p.affiliateUrl },
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Pilates Mat", "item": "https://pilatescollectiveclub.com/blog/best-pilates-mat" },
      ],
    },
  {
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Can I use a yoga mat for Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — a yoga mat works for beginners and casual practice. The limitation becomes apparent as your practice develops: softer yoga mats reduce the proprioceptive feedback that makes Pilates articulation exercises effective. If you're practising Pilates more than twice a week, a firmer mat generally improves the quality of your sessions." } },
      { "@type": "Question", "name": "What thickness mat is best for Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "6mm is a commonly cited sweet spot — firm enough for spinal feedback, with enough cushioning for sustained floor contact. Practitioners with sensitive spines or vertebral conditions may prefer thicker mats. This is general guidance; check the exact thickness on any specific listing before buying." } },
      { "@type": "Question", "name": "What's the best overall Pilates mat?", "acceptedAnswer": { "@type": "Answer", "text": "The Gaiam Premium Yoga Mat (6mm, $21.00) is our top overall pick — it sits at the commonly cited 6mm sweet spot for Pilates and is sold directly by Amazon.com. If you want more cushioning, the Gaiam Essentials Thick Yoga Mat (10mm, $25.43) from the same brand is a step up." } },
      { "@type": "Question", "name": "How long should a Pilates mat last?", "acceptedAnswer": { "@type": "Answer", "text": "As a general rule, a well-cared-for mat should last several years of regular practice, while budget mats typically need replacement sooner. We don't have verified longevity data for a specific product to cite here, so treat this as general guidance rather than a claim about any single mat." } }
    ]
  },
  ],
};

export default function BestPilatesMatPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Essentials</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Pilates Mat<br /><span style={{ color: "#8b4a31" }}>(2026): 5 Verified Picks</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 8 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              We checked five Pilates mats against live, in-stock Amazon listings — from our long-standing Gaiam Premium pick to a thicker Gaiam option, a mat with printed alignment lines, and two TPE mats. Here&apos;s how they compare on thickness, material, and features.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/dane-wetton-t1NEMSm1rgI-unsplash.jpg" alt="Best Pilates mat — honestly verified against live Amazon listings" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            {/* Quick reference table */}
            <div className="mb-10 mt-4 overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
              <div className="px-6 py-4" style={{ backgroundColor: "#f6f3f2" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>At a Glance</p>
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

            <div className="mb-16 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Pilates mat vs yoga mat: what&apos;s actually different</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The core difference is firmness. Yoga mats are designed to cushion standing poses and absorb sweat during flow-based practice. They tend toward softer, spongier constructions. Pilates mat work requires sustained lying, spinal articulation, and tactile feedback from the floor — qualities that a spongy yoga mat can undermine. This is general guidance on what makes any mat suitable for Pilates; use it alongside the specific picks below to find the right fit.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { heading: "Thickness", body: "4–6mm is a commonly cited Pilates sweet spot. Thinner provides better feedback; thicker provides more cushioning for sensitive spines. Confirm the exact thickness on the current listing." },
                  { heading: "Firmness", body: "Dense PVC or natural rubber generally outperforms foam for Pilates. Press a finger into the mat — a firm mat barely compresses. A spongy mat that fully compresses under finger pressure is less suitable." },
                  { heading: "Surface texture", body: "Mild grip, not aggressive grip, tends to work best. You need hands and feet to slide slightly for transitions. Check current owner reviews on the listing for a sense of the actual texture." },
                  { heading: "Length", body: "Standard 68\" is sufficient for most practitioners. Taller practitioners (6'+) should look for longer options. Lying with your head off the mat during the hundred is not acceptable." },
                ].map((item) => (
                  <div key={item.heading} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.heading}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Our Top 5 Picks</p>
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

            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Caring for your Pilates mat</h2>
              <ul className="space-y-3">
                {[
                  "Clean after every session with a mild mat spray or water and a few drops of tea tree oil. Avoid alcohol-based cleaners on natural rubber — they can degrade the surface.",
                  "Air dry completely before rolling. Rolling a damp mat traps moisture and can lead to mould in PVC mats.",
                  "Store rolled, not folded. Permanent fold lines create uneven surfaces and weakened points in the material.",
                  "Keep away from direct sunlight during storage. UV exposure can yellow PVC and degrade natural rubber over time.",
                  "Replace when the surface becomes pilled, cracked, or when the mat compresses unevenly underfoot. A compromised surface is a slip risk.",
                ].map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    <span className="font-semibold" style={{ color: "#8b4a31" }}>{i + 1}.</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "Can I use a yoga mat for Pilates?", a: "Yes — a yoga mat works for beginners and casual practice. The limitation becomes apparent as your practice develops: softer yoga mats reduce the proprioceptive feedback that makes Pilates articulation exercises effective. If you're practising Pilates more than twice a week, a firmer mat generally improves the quality of your sessions." },
                  { q: "What thickness mat is best for Pilates?", a: "6mm is a commonly cited sweet spot — firm enough for spinal feedback, with enough cushioning for sustained floor contact. Practitioners with sensitive spines or vertebral conditions may prefer thicker mats. This is general guidance; check the exact thickness on any specific listing before buying." },
                  { q: "What's the best overall Pilates mat?", a: "The Gaiam Premium Yoga Mat (6mm, $21.00) is our top overall pick — it sits at the commonly cited 6mm sweet spot for Pilates and is sold directly by Amazon.com. If you want more cushioning, the Gaiam Essentials Thick Yoga Mat (10mm, $25.43) from the same brand is a step up." },
                  { q: "How long should a Pilates mat last?", a: "As a general rule, a well-cared-for mat should last several years of regular practice, while budget mats typically need replacement sooner. We don't have verified longevity data for a specific product to cite here, so treat this as general guidance rather than a claim about any single mat." },
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
                <ArticleCard title="Best Pilates Starter Kit" excerpt="Everything a beginner needs — mat, grip socks, bands, and ring, in the right order." href="/blog/best-pilates-starter-kit" category="Beginners" readTime="9 min read" date="May 2026" imageUrl="/pictures/roxana-popovici-Zp4APUiwEsM-unsplash.jpg" />
                <ArticleCard title="Pilates Reformer vs Mat" excerpt="What's actually different between reformer and mat Pilates — and how to choose." href="/blog/pilates-reformer-vs-mat" category="Method" readTime="10 min read" date="May 2026" imageUrl="/pictures/ahmet-kurt-0xn-8kRWOhE-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best Pilates studios in Amsterdam…" />
      </main>
      <Footer />
    </>
  );
}
