import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Bar (2026): Honestly Verified",
  description: "We could not confirm a live Amazon listing for a standalone Pilates bar or bar-and-band kit, under any brand. Here's the honest situation and the closest real, verified prop we found — the Byrex Pilates Prop Kit ($19.99), a ring/ball/bands bundle that does not include a bar.",
  keywords: ["best pilates bar", "pilates bar kit", "portable pilates bar", "pilates bar with resistance bands", "pilates stick", "pilates toning bar", "pilates bar for beginners", "adjustable pilates bar"],
  openGraph: {
    title: "Best Pilates Bar (2026): Honestly Verified",
    description: "No standalone Pilates bar listing could be verified on Amazon — the honest situation, and the closest real prop we could confirm.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-bar",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/ahmet-kurt-a1IhqqW8JQE-unsplash.jpg", width: 1200, height: 630, alt: "Best Pilates Bar Kits — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Bar (2026)",
    description: "Honestly verified — what's actually sold on Amazon.",
    images: ["https://pilatescollectiveclub.com/pictures/ahmet-kurt-a1IhqqW8JQE-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-pilates-bar" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Byrex Pilates Prop Kit",
    price: "$19.99",
    verdict: "A real, live Amazon listing — but it does not include a bar",
    description:
      "A note before anything else: this guide previously listed six Pilates bar kits, including specific configurations, dimensions and weights. We could not confirm live Amazon listings for any of them, under any brand — including a claimed Merrithew toning bar — so all six have been removed rather than pointed at a search page or a guessed-at ASIN. We could not find a verified, standalone Pilates bar or bar-and-band kit sold on Amazon at all. The closest real prop we could confirm is the Byrex Pilates Prop Kit at $19.99, which bundles a ring, a small ball, and resistance bands — it does not include a bar, so it is not a substitute if a rigid bar is specifically what you're after, but the bands in the bundle can be used for some of the same movement patterns.",
    affiliateUrl: "https://www.amazon.com/dp/B0GSJHPSQT?tag=pilatescollective-20",
    tag: "Closest Verified Prop",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Bar (2026): Honestly Verified",
      "description": "We could not confirm a live Amazon listing for a standalone Pilates bar under any brand. The honest situation, and the closest real prop we could verify.",
      "url": "https://pilatescollectiveclub.com/blog/best-pilates-bar",
      "datePublished": "2026-09-09",
      "dateModified": "2026-09-09",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/ahmet-kurt-a1IhqqW8JQE-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-pilates-bar" },
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Bar (2026)",
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
        { "@type": "ListItem", "position": 3, "name": "Best Pilates Bar", "item": "https://pilatescollectiveclub.com/blog/best-pilates-bar" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is there a real standalone Pilates bar sold on Amazon?", "acceptedAnswer": { "@type": "Answer", "text": "Not one we could verify. We checked for live listings across portable band-and-bar kits, a claimed Merrithew toning bar, telescopic aluminium bars, heavy-duty kits, and door-anchor kits, and could not confirm a genuine, currently-sold listing for any of them. We are disclosing that gap rather than linking a search page or a guessed-at ASIN. The closest real prop we could verify is the Byrex Pilates Prop Kit, a ring/ball/bands bundle that does not include a bar." } },
        { "@type": "Question", "name": "What does a Pilates bar actually do?", "acceptedAnswer": { "@type": "Answer", "text": "In general, a bar with attached resistance bands keeps the hands a fixed distance apart and the load symmetrical, letting you load footwork, arm pull and abdominal patterns with resistance that increases through range similarly to a reformer spring. It does not reproduce a reformer's moving carriage or the balance demand that comes with it. This is general context, not a claim about a specific product we sell." } },
        { "@type": "Question", "name": "What should I look for if I buy a Pilates bar elsewhere?", "acceptedAnswer": { "@type": "Answer", "text": "Bands that clip to the bar ends rather than the centre keep the load symmetrical; stitched foot loops generally outlast moulded ones; and a bar gauge matched to the band strength you intend to use avoids flex. We can't point you to a specific verified Amazon listing for this category, so treat these as general shopping criteria to apply wherever you buy." } },
        { "@type": "Question", "name": "Does the Byrex Pilates Prop Kit include a bar?", "acceptedAnswer": { "@type": "Answer", "text": "No. It bundles a ring, a small ball, and resistance bands for $19.99 — the bands can be used for some band-based Pilates work, but there is no rigid bar in the kit. If a bar specifically is what you need, we do not currently have a verified Amazon listing to point you to." } },
      ],
    },
  ],
};

export default function BestPilatesBarPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Home Practice</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Pilates Bar<br /><span style={{ color: "#8b4a31" }}>(2026): Honestly Verified</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 6 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              This guide previously ranked six Pilates bar kits, with specific dimensions, weights and configurations. On closer checking, we could not confirm a live, currently-sold Amazon listing for any standalone Pilates bar or bar-and-band kit, under any brand — including a claimed Merrithew toning bar. Rather than keep those listings up with search links standing in for real products, we&apos;ve removed them and are disclosing the gap honestly below, along with the closest real prop we could verify.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/ahmet-kurt-a1IhqqW8JQE-unsplash.jpg" alt="Best Pilates bar kits for home practice — resistance band training on a mat" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
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

            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#fff4f1", border: "1px solid rgba(139,74,49,0.15)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>General buying criteria — since we have no verified bar listing to recommend</h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                We could not verify a specific Pilates bar product to check these against, so treat the following as general shopping criteria to apply if you buy one elsewhere — not specifications of a product we&apos;re recommending.
              </p>
              <ul className="space-y-3">
                {[
                  "Band attachment point — bands should clip to the bar ends, not the centre. Centre-mounted bands pull the bar into rotation and make symmetrical loading harder.",
                  "Foot loop construction — stitched loops generally outlast moulded ones, and the loops tend to fail before the bands do.",
                  "Joint quality on sectional bars — twist-lock collars generally hold under tension better than push-button pins.",
                  "Bar gauge against band strength — a light aluminium bar can flex under heavier bands. Match the bar to the resistance you actually intend to use.",
                  "Replacement bands availability — bands are consumable. Check they can be bought separately before committing to a system.",
                  "Total resistance range — if you have a strength training background, light bands alone may be too easy within weeks.",
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
                  { q: "Is there a real standalone Pilates bar sold on Amazon?", a: "Not one we could verify. We checked for live listings across portable band-and-bar kits, a claimed Merrithew toning bar, telescopic aluminium bars, heavy-duty kits, and door-anchor kits, and could not confirm a genuine, currently-sold listing for any of them. We are disclosing that gap rather than linking a search page or a guessed-at ASIN. The closest real prop we could verify is the Byrex Pilates Prop Kit, a ring/ball/bands bundle that does not include a bar." },
                  { q: "What does a Pilates bar actually do?", a: "In general, a bar with attached resistance bands keeps the hands a fixed distance apart and the load symmetrical, letting you load footwork, arm pull and abdominal patterns with resistance that increases through range similarly to a reformer spring. It does not reproduce a reformer's moving carriage or the balance demand that comes with it. This is general context, not a claim about a specific product we sell." },
                  { q: "What should I look for if I buy a Pilates bar elsewhere?", a: "Bands that clip to the bar ends rather than the centre keep the load symmetrical; stitched foot loops generally outlast moulded ones; and a bar gauge matched to the band strength you intend to use avoids flex. We can't point you to a specific verified Amazon listing for this category, so treat these as general shopping criteria to apply wherever you buy." },
                  { q: "Does the Byrex Pilates Prop Kit include a bar?", a: "No. It bundles a ring, a small ball, and resistance bands for $19.99 — the bands can be used for some band-based Pilates work, but there is no rigid bar in the kit. If a bar specifically is what you need, we do not currently have a verified Amazon listing to point you to." },
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
                <ArticleCard title="Best Pilates Resistance Bands (2026)" excerpt="Loop bands, long bands, and tube bands — the accessories that extend mat training most effectively." href="/blog/best-pilates-resistance-bands" category="Equipment" readTime="7 min read" date="April 2026" imageUrl="/pictures/jade-stephens-N21356amsyw-unsplash.jpg" />
                <ArticleCard title="Best Pilates Equipment for Home Practice" excerpt="The full home setup, from a single mat to a complete apparatus room." href="/blog/best-pilates-equipment-for-home-practice" category="Equipment" readTime="11 min read" date="June 2026" imageUrl="/pictures/stitch-mat-setup-beige.png" />
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
