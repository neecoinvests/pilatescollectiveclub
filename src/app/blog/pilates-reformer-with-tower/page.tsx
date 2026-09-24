import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Pilates Reformer with Tower (2026): What's Really on Amazon",
  description: "No standalone tower attachment is confirmed on Amazon. Here's the real tower-compatible reformer, the vertical-frame option, and the Cadillac alternative.",
  keywords: ["best pilates reformer with tower", "pilates reformer tower combo 2026", "reformer with tower buy", "pilates tower attachment review", "merrithew reformer tower", "balanced body reformer tower", "pilates cadillac tower combo", "pilates reformer tower exercises"],
  openGraph: {
    title: "Pilates Reformer with Tower (2026): What's Really on Amazon",
    description: "We could not verify a standalone tower attachment as a live Amazon listing. Here is what we could confirm, honestly.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/pilates-reformer-with-tower",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/roxana-popovici-hiHBILFNah4-unsplash.jpg", width: 1200, height: 630, alt: "Pilates reformer with tower — Pilates Collective Club" }],
  },
  twitter: { card: "summary_large_image", title: "Pilates Reformer with Tower (2026)", description: "An honest look at what's actually sold on Amazon in this category — no fabricated bundles.", images: ["https://pilatescollectiveclub.com/pictures/roxana-popovici-hiHBILFNah4-unsplash.jpg"] },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/pilates-reformer-with-tower" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Merrithew Rehab V2 Max Plus Reformer",
    price: "$8,199",
    verdict: "The one machine we can confirm ships with a built-in vertical frame",
    description: "A note before anything else: we could not find a standalone Pilates tower attachment as a genuine, currently-sold Amazon listing from any brand — not Balanced Body, not Merrithew, not Align-Pilates. What we could verify is this: the Merrithew Rehab V2 Max Plus is a real, live Amazon listing that ships with a built-in Vertical Frame already integrated into the raised frame, along with Merrithew's patented retractable rope system — so tower-style work is part of the machine itself rather than a separate purchase. This is Merrithew's clinical and professional-grade machine (the real product behind any \"Merrithew V2 Max\" reference), priced accordingly at $8,199. It is a serious investment aimed at rehabilitation practices and studios rather than casual home use, but it is the one option on this page where the tower repertoire is confirmed as part of what you're buying, not an assumption.",
    affiliateUrl: "https://www.amazon.com/dp/B002ABYKFI?tag=pilatescollective-20",
    tag: "Built-In Vertical Frame",
  },
  {
    rank: "02",
    name: "Balanced Body Studio Reformer (Revo Footbar)",
    price: "$4,700",
    verdict: "Full tower compatibility confirmed — the tower itself is a separate, unconfirmed purchase",
    description: "This is the real Balanced Body flagship sold on Amazon — not the \"Allegro 2,\" which is not a live listing. Balanced Body's own specifications confirm full tower compatibility for this reformer, so it is a legitimate foundation to build a reformer-and-tower practice on. Where we have to be honest with you: we could not find a standalone Balanced Body tower attachment as a live, currently-sold Amazon listing to pair with it. If you buy this reformer for its tower compatibility, plan on sourcing the tower attachment itself through a Balanced Body dealer and confirming current pricing and lead time directly with them — do not assume it is a quick add-to-cart on Amazon. The reformer does not fold; it is a made-to-order, permanent-installation machine with a Strata rock maple frame and five Signature Springs.",
    affiliateUrl: "https://www.amazon.com/dp/B002XVWIFE?tag=pilatescollective-20",
    tag: "Tower-Compatible Reformer",
  },
  {
    rank: "03",
    name: "Balanced Body Trapeze Table / Cadillac",
    price: "$5,030",
    verdict: "The real, standalone full-apparatus alternative to a tower",
    description: "If what you actually want is the full tower-and-trapeze repertoire rather than a reformer with an add-on, this is the honest alternative: a genuine, live Amazon listing for Balanced Body's standalone Trapeze Table (Cadillac), at $5,030. It is a lead-time item — expect to wait for fabrication and shipping rather than fast delivery — but it is a real, currently-sold piece of apparatus rather than a fabricated bundle. For practitioners who have concluded that a reformer-plus-tower setup can't be assembled reliably from live Amazon listings today, a standalone Cadillac is the more dependable way to get the full apparatus repertoire in one purchase.",
    affiliateUrl: "https://www.amazon.com/dp/B01N5OIH13?tag=pilatescollective-20",
    tag: "Full Apparatus",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Pilates Reformer with Tower (2026): What's Really Sold on Amazon, Honestly Assessed",
      "description": "We could not verify a standalone Pilates tower attachment as a live Amazon listing from any brand. What we could confirm: a Merrithew machine with a built-in vertical frame, a tower-compatible Balanced Body reformer, and the real standalone Cadillac alternative.",
      "url": "https://pilatescollectiveclub.com/blog/pilates-reformer-with-tower",
      "datePublished": "2026-05-16",
      "dateModified": "2026-09-23",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/roxana-popovici-hiHBILFNah4-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/pilates-reformer-with-tower" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Pilates Reformer with Tower", "item": "https://pilatescollectiveclub.com/blog/pilates-reformer-with-tower" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is a Pilates tower the same as a Cadillac?", "acceptedAnswer": { "@type": "Answer", "text": "No. A tower (also called a vertical stand or half-Cadillac) is a partial version of a Cadillac — it typically adds a push-through bar, roll-down bar, and arm and leg spring work but lacks the trapeze, overhead bar, and full spring configuration of a standalone Cadillac. We could not verify a precise percentage of the Cadillac repertoire a tower covers, so treat any specific figure as a rough approximation rather than a measured fact." } },
        { "@type": "Question", "name": "Can I buy a Pilates tower attachment on Amazon?", "acceptedAnswer": { "@type": "Answer", "text": "We could not find a standalone tower attachment as a live, currently-sold Amazon listing from Balanced Body, Merrithew, or Align-Pilates. If tower-style work matters to you, the two real options we could verify are the Merrithew Rehab V2 Max Plus, which ships with a built-in vertical frame, or the Balanced Body Studio Reformer, which is tower-compatible on paper but requires sourcing the tower attachment separately through a dealer." } },
        { "@type": "Question", "name": "Do I need a tower as a beginner?", "acceptedAnswer": { "@type": "Answer", "text": "No. Tower and full-apparatus work is generally recommended for intermediate-to-advanced practitioners with an established reformer foundation. Beginners should focus on the reformer repertoire first." } },
        { "@type": "Question", "name": "What ceiling height do I need for tower or Cadillac work?", "acceptedAnswer": { "@type": "Answer", "text": "We could not verify a precise minimum ceiling height that applies across brands and models. Push-through bar and overhead-bar work generally need more vertical clearance than reformer-only work — check the specific machine's manufacturer specifications and your instructor's guidance before buying." } },
      ],
    },
  ],
};

export default function PilatesReformerWithTowerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        {/* Hero section */}
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Equipment Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Home Studio</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Pilates Reformer with Tower (2026):<br /><span style={{ color: "#8b4a31" }}>What&apos;s Really Sold on Amazon</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 10 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              A reformer is the foundation of a home Pilates studio, and a tower is what most guides describe as the next step. Here is the honest finding from checking this category against real, live Amazon listings: we could not find a standalone Pilates tower attachment reliably sold on Amazon under any brand — not Balanced Body, not Merrithew, not Align-Pilates. This guide explains what a tower is meant to add, and covers the two real machines we could verify (one with a built-in vertical frame, one confirmed tower-compatible on paper) plus the genuine standalone Cadillac alternative.
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/roxana-popovici-hiHBILFNah4-unsplash.jpg" alt="Pilates reformer with tower — complete home studio apparatus setup" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            {/* What does a Pilates tower actually do? */}
            <div className="mb-16 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What does a Pilates tower actually do — and can you buy one?</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                A tower — also called a vertical stand, or half-Cadillac — is generally described as attaching to the foot end of a reformer and adding a vertical frame carrying additional springs, a push-through bar, a roll-down bar, and arm and leg springs. It is meant as a partial substitute for a full Cadillac, a taller standalone apparatus. We could not verify a specific percentage of the Cadillac repertoire a tower reproduces, so treat any exact figure you see elsewhere as a rough approximation, not a measured fact.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Here is the honest complication: we checked for a standalone tower attachment as a genuine, currently-sold Amazon listing from Balanced Body, Merrithew, and Align-Pilates, and could not find one for any of them. That doesn&apos;t mean tower-style training is unavailable — it means the products below reach it in two different, verified ways: a Merrithew machine that ships with the vertical frame built in, and a Balanced Body reformer whose manufacturer specifications confirm tower compatibility (with the tower itself sourced separately through a dealer, not Amazon).
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Who this category is for: serious practitioners who have an established reformer practice and want to continue developing it, practitioners working with an instructor who programs tower or Cadillac work into sessions, and instructors equipping a home teaching studio. It is not a beginner purchase — this kind of apparatus work is typically introduced after a strong reformer and mat foundation has been established.
              </p>
            </div>

            {/* Four buying criteria cards */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Four things to consider before buying</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    heading: "Tower vs full Cadillac",
                    body: "A tower is meant to give access to a meaningful portion of Cadillac-style exercises, though we could not verify a precise percentage. The real, standalone Cadillac we could confirm as a live Amazon listing — Balanced Body's Trapeze Table — is $5,030, not the $8,000-$12,000+ range sometimes quoted for this category. If you want the full trapeze and mat-work repertoire, that is the option to look at; if you specifically want tower-style work added to a reformer, see the two verified paths below.",
                  },
                  {
                    heading: "Reformer and tower compatibility",
                    body: "We could not confirm a standalone tower attachment as a live Amazon listing from Balanced Body, Merrithew, or Align-Pilates. What we could confirm: Balanced Body states full tower compatibility for its Studio Reformer (tower sourced separately through a dealer), and the Merrithew Rehab V2 Max Plus ships with its vertical frame already built in. Always verify current compatibility and availability directly with the manufacturer before assuming a tower purchase will be straightforward.",
                  },
                  {
                    heading: "Spring configuration",
                    body: "We could not verify a specific spring count or configuration for any tower system, since we could not confirm a standalone tower listing to check. If you do find a tower attachment through a dealer, ask for its exact spring configuration before buying — don't assume it matches a reformer's own springs.",
                  },
                  {
                    heading: "Space requirements",
                    body: "We could not independently verify specific floor-space or ceiling-height figures for a reformer-and-tower setup, and an earlier version of this article stated precise numbers we can no longer stand behind. Check the manufacturer's current specifications for the exact machine you're considering before measuring your room.",
                  },
                ].map((item) => (
                  <div key={item.heading} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.heading}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Products section */}
            <div className="mb-16">
              {/* Quick reference table */}
              <div className="mb-10 mt-4 overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
                <div className="px-6 py-4" style={{ backgroundColor: "#f6f3f2" }}>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>3 Real, Verified Amazon Listings</p>
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

              {/* Product cards */}
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

            {/* Tower vs full Cadillac editorial section */}
            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-2xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Built-in tower, tower-compatible reformer, or standalone Cadillac?</h2>
              <div className="mb-6">
                <p className="text-sm font-semibold mb-3 uppercase tracking-[0.15em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Take the Merrithew Rehab V2 Max Plus if:</p>
                <ul className="space-y-2">
                  {[
                    "You want tower-style work built into the machine itself, with no separate attachment purchase to track down.",
                    "You are equipping a rehabilitation or clinical practice — this is Merrithew's clinical-grade machine.",
                    "Budget is less of a constraint than getting a confirmed, working configuration on the first purchase.",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                      <span className="font-semibold shrink-0" style={{ color: "#8b4a31" }}>–</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-6">
                <p className="text-sm font-semibold mb-3 uppercase tracking-[0.15em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Take the Balanced Body Studio Reformer, then source a tower separately, if:</p>
                <ul className="space-y-2">
                  {[
                    "You want to start with a confirmed tower-compatible reformer now and add the tower attachment later through a Balanced Body dealer.",
                    "You already favour Balanced Body's accessory ecosystem and are comfortable buying the tower piece outside of Amazon.",
                    "You want the lower entry price of the reformer alone before committing to the full tower cost.",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                      <span className="font-semibold shrink-0" style={{ color: "#8b4a31" }}>–</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-5" style={{ borderTop: "1px solid rgba(217,194,186,0.4)" }}>
                <p className="text-sm font-semibold mb-1" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>Price context</p>
                <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                  Balanced Body Studio Reformer: $4,700 (tower sourced separately, cost unconfirmed). Merrithew Rehab V2 Max Plus, with its vertical frame built in: $8,199. Balanced Body Trapeze Table / Cadillac, the real standalone full-apparatus alternative: $5,030. We could not verify a lower reformer-plus-tower bundle price, so treat any figure below these as unconfirmed.
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "Is a Pilates tower the same as a Cadillac?",
                    a: "No. A tower (also called a vertical stand or half-Cadillac) is generally described as a partial Cadillac — push-through bar, roll-down bar, and arm and leg spring work without the trapeze, overhead bar, and full spring configuration of a standalone Cadillac. We could not verify a specific percentage of the Cadillac repertoire a tower reproduces, so treat any exact figure as approximate.",
                  },
                  {
                    q: "Can I buy a Pilates tower attachment on Amazon?",
                    a: "We could not find a standalone tower attachment as a live, currently-sold Amazon listing from Balanced Body, Merrithew, or Align-Pilates. If tower-style work matters to you, the two real options we could verify are the Merrithew Rehab V2 Max Plus, which ships with a built-in vertical frame, or the Balanced Body Studio Reformer, which is tower-compatible on paper but requires sourcing the tower attachment separately through a dealer.",
                  },
                  {
                    q: "Do I need a tower as a beginner?",
                    a: "No. Tower and full-apparatus work is generally recommended for intermediate-to-advanced practitioners with an established reformer foundation. Beginners should focus on the reformer repertoire first.",
                  },
                  {
                    q: "What ceiling height do I need for tower or Cadillac work?",
                    a: "We could not verify a precise minimum ceiling height that applies across brands and models. Push-through bar and overhead-bar work generally need more vertical clearance than reformer-only work — check the specific machine's manufacturer specifications and your instructor's guidance before buying.",
                  },
                ].map((item) => (
                  <div key={item.q} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.q}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Further reading */}
            <div>
              <h2 className="text-2xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="Best Home Pilates Reformer (2026)" excerpt="The best home reformers at every price point — from entry-level to studio-grade." href="/blog/best-home-pilates-reformer" category="Equipment Guide" readTime="10 min read" date="May 2026" imageUrl="/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg" />
                <ArticleCard title="Balanced Body vs Merrithew (2026)" excerpt="The two dominant Pilates equipment brands compared honestly." href="/blog/balanced-body-vs-merrithew" category="Equipment Guide" readTime="10 min read" date="May 2026" imageUrl="/pictures/roxana-popovici-cZ0WYsBFHhs-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find studios with tower and Cadillac apparatus" subtitle="Our city guides identify studios with the full Pilates apparatus." />
      </main>
      <Footer />
    </>
  );
}
