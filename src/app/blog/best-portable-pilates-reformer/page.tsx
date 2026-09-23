import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Portable Pilates Reformer (2026): 6 Real Picks",
  description: "The best portable and foldable Pilates reformers in 2026 — six real, verified Amazon listings from a $295.99 budget folding tier through professional-grade coil-spring machines.",
  keywords: ["best portable pilates reformer", "foldable pilates reformer", "portable pilates reformer 2026", "compact pilates reformer home", "pilates reformer amazon", "travel pilates reformer", "best home pilates reformer portable", "lightweight pilates reformer", "pilates reformer small space", "aeropilates reformer", "budget folding reformer"],
  openGraph: {
    title: "Best Portable Pilates Reformer (2026): 6 Real Picks",
    description: "Compact, foldable, and lightweight Pilates reformers worth buying in 2026 — reviewed honestly with real Amazon listings.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-portable-pilates-reformer",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-reformer-morning-light.png", width: 1200, height: 630, alt: "Best Portable Pilates Reformer — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Portable Pilates Reformer (2026)",
    description: "Six real, verified portable and foldable Pilates reformers — reviewed honestly.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-reformer-morning-light.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-portable-pilates-reformer" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const REFORMERS = [
  {
    rank: 1,
    name: "WINDFOOT Foldable Pilates Reformer w/ Jump Board",
    price: "$295.99",
    verdict: "Cheapest genuinely portable, folding reformer",
    tag: "Best Budget",
    description: "A fresh check of the live Amazon catalog turned up a real tier of budget, generic-brand full reformers that an earlier pass on this guide missed. WINDFOOT is the cheapest of them: a real, live, currently-sold Amazon listing at $295.99, sold by YIWU MUZHU. It's a genuine carriage-and-rail spring reformer, pre-assembled roughly 90% out of the box (a 5–10 minute setup), with a padded rebounder for cardio and a non-slip leather surface, and it folds for storage — making it about as genuinely portable as this category gets. It's a generic brand with no established track record, no instructor certification recognition, and unclear long-term durability or warranty support, which is worth weighing against its price.",
    affiliateUrl: "https://www.amazon.com/dp/B0D31767J1?tag=pilatescollective-20",
    pros: ["Real, currently-sold Amazon listing", "Lowest price of any reformer in this guide", "Folds for storage, pre-assembled ~90%"],
    cons: ["Generic brand, no established track record", "No certification recognition among instructors", "Unclear long-term durability or warranty support"],
  },
  {
    rank: 2,
    name: "DWKWE Gray Metal Frame Foldable Reformer, 88\"",
    price: "$299.99",
    verdict: "Dual resistance in a genuinely foldable frame",
    tag: "Best Dual Resistance",
    description: "DWKWE's 88\" reformer, sold by Jun's Wonderful Store, is a real, live Amazon listing at $299.99 in the same budget-generic-brand tier as WINDFOOT. The listing describes a height-adjustable footbar, dual spring-and-latex resistance, a jump board and headrest included, a reinforced metal frame, and a design that folds for storage. As with WINDFOOT, this is a generic brand without an established track record — treat durability and warranty support as unverified beyond the listing — but it's a real, foldable, carriage-and-rail reformer.",
    affiliateUrl: "https://www.amazon.com/dp/B0HB4J5RKX?tag=pilatescollective-20",
    pros: ["Real, currently-sold Amazon listing", "Height-adjustable footbar, dual spring-and-latex resistance", "Folds for storage"],
    cons: ["Generic brand, no established track record", "Dual resistance system's long-term durability unverified", "No certification recognition among instructors"],
  },
  {
    rank: 3,
    name: "AeroPilates Pro XP 557 Reformer",
    price: "$1,329.99",
    verdict: "Best overall portable reformer from an established brand",
    tag: "Best Overall",
    description: "The AeroPilates Pro XP 557 is one of the most widely sold home reformers in the US market. It uses elastic cord resistance rather than coil springs — a genuinely different feel from a spring-based machine like WINDFOOT, DWKWE, or the Metro IQ and Merrithew SPX below — but it still trains the core reformer movement patterns: footwork, the carriage, a foot bar. We could not verify a folding mechanism, exact folded dimensions, or a specific weight rating for this listing, so check the current Amazon listing for those details before ordering.",
    affiliateUrl: "https://www.amazon.com/dp/B0012TJI8S?tag=pilatescollective-20",
    pros: ["Real, currently-sold Amazon listing", "Established brand with support infrastructure", "Genuinely space-efficient compared to a studio reformer"],
    cons: ["Elastic cord resistance, not coil springs — a real difference from a spring-based machine", "We could not verify folding, exact dimensions, or weight rating — check the listing", "Limited advanced exercise options"],
  },
  {
    rank: 4,
    name: "AeroPilates 701 Premier Reformer",
    price: "$539.99",
    verdict: "Best budget established-brand portable reformer",
    tag: "Best Value",
    description: "A more accessible entry point in the AeroPilates range at roughly a third of the Pro XP 557's price. It uses the same elastic cord resistance system rather than coil springs. We could not verify specific spring/cord counts, fold mechanism, or included accessories for this exact listing beyond what's on the current Amazon page — confirm those details there before ordering rather than assuming they match another AeroPilates model.",
    affiliateUrl: "https://www.amazon.com/dp/B07G5J3SKS?tag=pilatescollective-20",
    pros: ["Lower price than the Pro XP 557", "Real, currently-sold Amazon listing", "Reasonable entry point for testing the format"],
    cons: ["Elastic cord resistance, not coil springs", "We could not verify exact specs or fold behaviour — check the listing", "Likely a shorter carriage than pricier models"],
  },
  {
    rank: 5,
    name: "Balanced Body Metro IQ Reformer",
    price: "$2,330",
    verdict: "Best compact professional-grade reformer",
    tag: "Professional Grade",
    description: "The Metro IQ is Balanced Body's smaller, lighter machine among the professional-grade coil-spring reformers actually sold on Amazon — a real step down in footprint from Balanced Body's Studio Reformer at $4,700, without giving up a genuine spring system. We could not verify a folding or fold-flat storage feature for this listing, so if a fold-away machine is a hard requirement, confirm that on the current Amazon page rather than assuming it applies here.",
    affiliateUrl: "https://www.amazon.com/dp/B09HNCMTZL?tag=pilatescollective-20",
    pros: ["Real coil-spring system from a major professional brand", "Smaller footprint than Balanced Body's Studio Reformer", "Real, currently-sold Amazon listing"],
    cons: ["Meaningful step up in price from AeroPilates or budget models", "We could not verify a folding mechanism — check before assuming it stores flat", "Heavier than consumer cord-based reformers"],
  },
  {
    rank: 6,
    name: "Merrithew At Home SPX Reformer Package",
    price: "$3,349",
    verdict: "Best mid-to-premium reformer",
    tag: "Premium Pick",
    description: "Merrithew (formerly STOTT PILATES) is one of the most respected names in Pilates equipment, and the At Home SPX Reformer Package is the real SPX-family machine Merrithew sells on Amazon — genuine coil springs rather than cords. An earlier version of this guide claimed this machine folds for storage; we could not verify that, so treat any folding claim as unconfirmed and check the current listing before buying on the strength of it.",
    affiliateUrl: "https://www.amazon.com/dp/B004FGT0TM?tag=pilatescollective-20",
    pros: ["Genuine coil-spring system, not elastic cord", "Merrithew build quality and STOTT PILATES methodology", "Real, currently-sold Amazon listing"],
    cons: ["Highest price in this list", "We could not verify a folding or space-saving feature — do not assume it stores away", "Larger footprint than cord-based models"],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Portable Pilates Reformer (2026): 6 Real Picks",
      "description": "Reviewed: six real, verified portable and foldable Pilates reformers in 2026, from a $295.99 budget generic-brand folding tier through professional-grade coil-spring machines.",
      "url": "https://pilatescollectiveclub.com/blog/best-portable-pilates-reformer",
      "datePublished": "2026-06-01",
      "dateModified": "2026-09-23",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-reformer-morning-light.png", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-portable-pilates-reformer" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Portable Pilates Reformer", "item": "https://pilatescollectiveclub.com/blog/best-portable-pilates-reformer" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Portable Pilates Reformers (2026)",
      "numberOfItems": REFORMERS.length,
      "itemListElement": REFORMERS.map((r) => ({
        "@type": "ListItem",
        "position": r.rank,
        "item": {
          "@type": "Product",
          "name": r.name,
          "description": r.description,
          "offers": { "@type": "Offer", "priceCurrency": "USD", "price": r.price.replace(/[^0-9.]/g, ""), "availability": "https://schema.org/InStock", "url": r.affiliateUrl },
        },
      })),
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Are portable Pilates reformers worth it?", "acceptedAnswer": { "@type": "Answer", "text": "They're worth it if you are a consistent practitioner who cannot access a studio regularly, have limited space at home, or travel frequently. Budget generic-brand models like WINDFOOT and DWKWE are real, genuine spring reformers that fold for storage at under $300, though without an established brand's track record. AeroPilates machines use elastic cord resistance rather than coil springs — a genuinely different feel, but one that still trains the core reformer movement patterns. The Balanced Body Metro IQ is the smaller, lighter option among the professional-grade coil-spring machines actually sold on Amazon, for practitioners who want a real spring system without the footprint of a full studio reformer." } },
        { "@type": "Question", "name": "Are the budget WINDFOOT and DWKWE reformers real, or generic knockoffs?", "acceptedAnswer": { "@type": "Answer", "text": "They're real, live, currently-sold Amazon listings describing genuine carriage-and-rail spring reformers, not toys. They are generic or dropship brands rather than established Pilates equipment makers, so they carry no brand track record, no instructor certification recognition, and unclear long-term durability or warranty support — but the underlying machines and their folding-for-storage claims are genuine." } },
        { "@type": "Question", "name": "What is the weight limit of portable Pilates reformers?", "acceptedAnswer": { "@type": "Answer", "text": "Weight ratings vary by model and manufacturer, and we don't have verified figures we're confident quoting across the board. Always check the current Amazon listing or manufacturer spec sheet for your specific machine before buying, rather than relying on a number quoted elsewhere." } },
        { "@type": "Question", "name": "How much space does a portable Pilates reformer need?", "acceptedAnswer": { "@type": "Answer", "text": "In use, most reformers need roughly 7–8 feet of length and 2 feet of width. Beyond that, exact footprint and any folding or storage behaviour varies by model — we could not verify specific folded dimensions for the machines in this guide, so check the current listing for your exact model before assuming it collapses to a given size." } },
        { "@type": "Question", "name": "Can a portable reformer replace studio sessions?", "acceptedAnswer": { "@type": "Answer", "text": "For maintaining and developing an established practice, yes — a quality home reformer is a genuine substitute for studio access. For learning Pilates from scratch, it is not a replacement for professional instruction: you need an instructor's eye to establish correct form before practising independently. The ideal progression is to learn in a studio, then supplement or transfer your practice to a home reformer once technique is established." } },
      ],
    },
  ],
};


export default function BestPortablePilatesReformerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Equipment</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>2026 Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Portable<br />Pilates Reformer<br /><span style={{ color: "#8b4a31" }}>2026 Reviews</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated June 2026 · 10 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              The home reformer market has matured significantly since 2020. Where early consumer-grade reformers were crude approximations of the studio experience, today&apos;s best portable reformers deliver genuine Pilates exercise capability — including most of the classical repertoire through intermediate level — in a format that stores in a closet and sets up in two minutes. An earlier version of this guide, drawing only on established brands, undersold just how far down the price range genuine, portable spring reformers now go: a fresh check of the live Amazon catalog found budget generic-brand models folding and shipping for under $300. Here is what is worth buying in 2026, honestly labeled by brand tier.
            </p>
            <p className="text-xs mt-4" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-reformer-morning-light.png" alt="Best portable Pilates reformer 2026 — compact home reformer in morning light studio setting" fill className="object-cover" style={{ filter: "brightness(0.88)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-10 mt-4 rounded-xl p-6" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <p className="text-sm font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Reformers at a glance</p>
              <div className="space-y-2">
                {REFORMERS.map((r) => (
                  <div key={r.rank} className="flex gap-3 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    <span className="font-semibold w-4" style={{ color: "#8b4a31" }}>{r.rank}.</span>
                    <span><span className="font-medium">{r.name}</span> · {r.price} · {r.tag}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-10 mb-14">
              {REFORMERS.map((reformer) => (
                <div key={reformer.rank} className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.35)" }}>
                  <div className="px-6 py-4" style={{ backgroundColor: "#f6f3f2" }}>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-2xl font-bold" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>#{reformer.rank}</span>
                      <span className="text-xs font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full" style={{ backgroundColor: "#8b4a31", color: "#ffffff", fontFamily: "'Montserrat', sans-serif" }}>{reformer.tag}</span>
                    </div>
                    <h2 className="text-xl font-semibold" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{reformer.name}</h2>
                    <p className="text-sm font-medium" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{reformer.price} · {reformer.verdict}</p>
                  </div>
                  <div className="px-6 py-5 bg-white">
                    <p className="text-sm leading-relaxed mb-5" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{reformer.description}</p>
                    <div className="grid grid-cols-2 gap-4 mb-5">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Pros</p>
                        <ul className="space-y-1">
                          {reformer.pros.map((p) => (
                            <li key={p} className="text-xs" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>+ {p}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Cons</p>
                        <ul className="space-y-1">
                          {reformer.cons.map((c) => (
                            <li key={c} className="text-xs" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>- {c}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <a href={reformer.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="inline-block text-sm font-semibold px-5 py-2.5 rounded-full transition-opacity hover:opacity-80" style={{ backgroundColor: "#8b4a31", color: "#ffffff", fontFamily: "'Montserrat', sans-serif" }}>
                      Shop on Amazon →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-14 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>How to choose the right portable reformer</h2>
              <ul className="space-y-3">
                {[
                  "Budget under $300: WINDFOOT or DWKWE are real, currently-sold, genuine spring reformers that fold for storage — generic brands with no established track record, but a real carriage-and-rail machine at the lowest price point in this category.",
                  "Budget under $600 from an established brand: an AeroPilates elastic-cord reformer (the 701 Premier or Pro XP 557) is the accessible entry point with brand support behind it — cord resistance rather than springs, but a genuine reformer movement pattern.",
                  "Budget $1,000–$2,500: the Balanced Body Metro IQ is a real, smaller-footprint coil-spring machine actually sold on Amazon — a meaningful step up in resistance feel from cord-based or budget generic-brand models, from an established, instructor-recognized brand.",
                  "Budget $3,000+: the Merrithew At Home SPX Reformer Package or Balanced Body's larger machines — genuine professional-grade springs, built to last, but check the current listing rather than assuming a folding or space-saving feature.",
                  "Space constraint: WINDFOOT and DWKWE are the two models here with an explicitly confirmed fold-for-storage design; we could not verify folding for the Metro IQ or Merrithew SPX, so measure your available floor space against each listing's actual footprint before ordering rather than assuming a machine folds away.",
                  "Already training at a studio: visit the studio to ask what reformer brand they use. Buying the same or similar brand at home ensures the spring feel and exercise vocabulary transfers directly.",
                  "Complete beginner: do not buy a home reformer as your first Pilates purchase. Take 10–20 studio sessions first, establish correct technique with professional guidance, then consider a home reformer to supplement your practice.",
                ].map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    <span className="font-semibold" style={{ color: "#8b4a31" }}>→</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "Are portable Pilates reformers worth it?", a: "They're worth it if you are a consistent practitioner who cannot access a studio regularly, have limited space at home, or travel frequently. Budget generic-brand models like WINDFOOT and DWKWE are real, genuine spring reformers that fold for storage at under $300, though without an established brand's track record. AeroPilates machines use elastic cord resistance rather than coil springs — a genuinely different feel, but one that still trains the core reformer movement patterns. The Balanced Body Metro IQ is the smaller, lighter option among the professional-grade coil-spring machines actually sold on Amazon, for practitioners who want a real spring system without the footprint of a full studio reformer." },
                  { q: "Are the budget WINDFOOT and DWKWE reformers real, or generic knockoffs?", a: "They're real, live, currently-sold Amazon listings describing genuine carriage-and-rail spring reformers, not toys. They are generic or dropship brands rather than established Pilates equipment makers, so they carry no brand track record, no instructor certification recognition, and unclear long-term durability or warranty support — but the underlying machines and their folding-for-storage claims are genuine." },
                  { q: "What is the weight limit of portable Pilates reformers?", a: "Weight ratings vary by model and manufacturer, and we don't have verified figures we're confident quoting across the board. Always check the current Amazon listing or manufacturer spec sheet for your specific machine before buying, rather than relying on a number quoted elsewhere." },
                  { q: "How much space does a portable Pilates reformer need?", a: "In use, most reformers need roughly 7–8 feet of length and 2 feet of width. Beyond that, exact footprint and any folding or storage behaviour varies by model — we could not verify specific folded dimensions for the machines in this guide, so check the current listing for your exact model before assuming it collapses to a given size." },
                  { q: "Can a portable reformer replace studio sessions?", a: "For maintaining and developing an established practice, yes — a quality home reformer is a genuine substitute for studio access. For learning Pilates from scratch, it is not a replacement for professional instruction: you need an instructor's eye to establish correct form before practising independently. The ideal progression is to learn in a studio, then supplement or transfer your practice to a home reformer once technique is established." },
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
                <ArticleCard title="Best Home Pilates Reformer" excerpt="Full comparison of home reformers across all price ranges — including the premium studio-grade options." href="/blog/best-home-pilates-reformer" category="Equipment" readTime="11 min read" date="June 2026" imageUrl="/pictures/stitch-white-reformer-plaster.png" />
                <ArticleCard title="Reformer vs Mat Pilates" excerpt="The honest comparison between reformer and mat — what each does better and which to prioritise." href="/blog/pilates-reformer-vs-mat" category="Comparison" readTime="8 min read" date="June 2026" imageUrl="/pictures/stitch-reformer-sunlit-minimal.png" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best Pilates studios in London…" />
      </main>
      <Footer />
    </>
  );
}
