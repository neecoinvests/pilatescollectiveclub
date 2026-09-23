import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Mat (2026): Honestly Verified",
  description: "This guide previously listed Manduka PRO, Liforme, REEHUT, and other mats with specific prices and specs we could not confirm as live Amazon listings. The one mat we could verify is the Gaiam Premium Yoga Mat, 6mm ($21.00) — disclosed honestly, along with the gap on the rest.",
  keywords: ["best pilates mat", "pilates mat 2026", "best mat for pilates", "gaiam premium yoga mat pilates", "6mm pilates mat", "non-slip pilates mat", "pilates mat vs yoga mat", "best pilates mat buy"],
  openGraph: {
    title: "Best Pilates Mat (2026): Honestly Verified",
    description: "We could not confirm live Amazon listings for most of the mats this guide used to recommend. Here's the honest situation and the one mat we could verify.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-mat",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/dane-wetton-t1NEMSm1rgI-unsplash.jpg", width: 1200, height: 630, alt: "Best Pilates Mat — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Mat (2026)",
    description: "Honestly verified — what's actually sold on Amazon.",
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
    verdict: "The one mat we could verify as a live Amazon listing",
    description:
      "A note before anything else: this guide previously ranked five mats — Manduka PRO, a separate Gaiam Performance Dry-Grip mat, Liforme, REEHUT, and a Manduka eKO Superlite travel mat — with specific prices, thicknesses, and material claims. We could not confirm live Amazon listings matching those specific products and prices, so they've been removed rather than left pointing at guessed-at claims. The one mat we could verify as a real, currently-sold Amazon listing is the Gaiam Premium Yoga Mat at 6mm, $21.00. We don't have independently verified data on its exact firmness or grip texture relative to the mats we previously listed, so treat the buying criteria below as general guidance to check against the current listing yourself, not a spec sheet we're vouching for point by point.",
    affiliateUrl: "https://www.amazon.com/dp/B09WF4GPPC?tag=pilatescollective-20",
    tag: "Verified Pick",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Mat (2026): Honestly Verified",
      "description": "We could not confirm live Amazon listings for most of the mats this guide used to recommend. The honest situation, and the one mat we could verify.",
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
      { "@type": "Question", "name": "Is there a specific mat brand you can verify is actually sold on Amazon?", "acceptedAnswer": { "@type": "Answer", "text": "We could confirm the Gaiam Premium Yoga Mat (6mm, $21.00) as a live listing. We previously named several other brands with specific prices and specs that we could not confirm, so we removed those claims rather than leave them unverified." } },
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
              Best Pilates Mat<br /><span style={{ color: "#8b4a31" }}>(2026): Honestly Verified</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 8 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              This guide previously ranked five mats — Manduka PRO, a Gaiam Performance Dry-Grip mat, Liforme, REEHUT, and a Manduka eKO Superlite travel mat — with specific prices and material claims. On closer checking, we could not confirm live Amazon listings matching those specific products, so we&apos;ve removed the unverifiable ones rather than leave guessed-at claims up. The one mat we could verify as a real, currently-sold Amazon listing is the Gaiam Premium Yoga Mat at 6mm, $21.00.
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
                <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>What We Could Verify</p>
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
                The core difference is firmness. Yoga mats are designed to cushion standing poses and absorb sweat during flow-based practice. They tend toward softer, spongier constructions. Pilates mat work requires sustained lying, spinal articulation, and tactile feedback from the floor — qualities that a spongy yoga mat can undermine. This is general guidance on what makes any mat suitable for Pilates; we could not verify the exact firmness of the specific mat we recommend below, so check the listing yourself.
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>What We Could Verify</p>
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
                  { q: "Is there a specific mat brand you can verify is actually sold on Amazon?", a: "We could confirm the Gaiam Premium Yoga Mat (6mm, $21.00) as a live listing. We previously named several other brands with specific prices and specs that we could not confirm, so we removed those claims rather than leave them unverified." },
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
