import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Mini Pilates Reformer (2026): 6 Real Picks, Verified",
  description: "The best compact Pilates reformers for home use — real, verified Amazon listings and prices only, from budget folding generic brands to an established-brand compact spring machine.",
  openGraph: {
    title: "Best Mini Pilates Reformer (2026): 6 Real Picks, Verified",
    description: "Compact reformers reviewed against real, verified Amazon listings — what we could confirm, and what to check yourself.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-mini-pilates-reformer",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/elena-kloppenburg-erUC4fTtCuo-unsplash.jpg", width: 1200, height: 630, alt: "Best Mini Pilates Reformer — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Mini Pilates Reformer (2026)",
    description: "Compact Pilates reformers for small spaces — checked against real, verified Amazon listings.",
    images: ["https://pilatescollectiveclub.com/pictures/elena-kloppenburg-erUC4fTtCuo-unsplash.jpg"],
  },
  keywords: ["best mini pilates reformer", "mini pilates reformer review 2026", "compact pilates reformer", "small pilates reformer home", "mini reformer pilates workout", "best mini reformer pilates", "pilates mini reformer vs full size", "budget mini reformer"],
  alternates: {
    canonical: "https://pilatescollectiveclub.com/blog/best-mini-pilates-reformer",
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "WINDFOOT Foldable Pilates Reformer w/ Jump Board",
    price: "$295.99",
    verdict: "Cheapest genuine full reformer we could verify",
    tag: "Best Budget",
    description:
      "A note before anything else: this guide previously featured a generic \"Pilates Foldable Mini Reformer (FB-F01)\" linked via an Amazon search rather than a specific, verified listing — we could not confirm that model as a real, currently-sold product, so it has been removed. A more recent check of the live Amazon catalog turned up a real tier of budget, generic-brand full reformers that a previous pass on this article missed entirely. WINDFOOT is the cheapest of them: a real, live, currently-sold Amazon listing at $295.99, sold by YIWU MUZHU, describing a genuine carriage-and-rail spring reformer that is pre-assembled roughly 90% out of the box (a 5–10 minute setup), with a padded rebounder for cardio and a non-slip leather surface, and folds for compact storage. It's a generic brand with no established track record or instructor certification recognition, and unclear long-term durability — but it's a real, small-footprint reformer at a genuinely low price.",
    affiliateUrl: "https://www.amazon.com/dp/B0D31767J1?tag=pilatescollective-20",
    pros: ["Genuine, live Amazon listing", "Lowest price of any real reformer in this guide", "Folds for compact storage, pre-assembled ~90%"],
    cons: ["Generic brand, no established track record", "No certification recognition among instructors", "Unclear long-term durability or warranty support"],
  },
  {
    rank: "02",
    name: "DWKWE Gray Metal Frame Foldable Reformer, 88\"",
    price: "$299.99",
    verdict: "Dual spring-and-latex resistance in a foldable frame",
    tag: "Best Dual Resistance",
    description:
      "DWKWE's 88\" reformer, sold by Jun's Wonderful Store, is another real, live Amazon listing in the same budget-generic-brand tier as WINDFOOT, at $299.99. The listing describes a height-adjustable footbar, a dual resistance system combining springs and latex resistance bands, a jump board and headrest included, a reinforced metal frame, and a design that folds for storage. As with WINDFOOT, treat the brand's durability and warranty support as unverified beyond the listing itself — this is a generic brand, not an established Pilates equipment maker — but the underlying machine is a genuine carriage-and-rail reformer that folds down to a compact footprint.",
    affiliateUrl: "https://www.amazon.com/dp/B0HB4J5RKX?tag=pilatescollective-20",
    pros: ["Genuine, live Amazon listing", "Height-adjustable footbar and included jump board", "Folds for compact storage"],
    cons: ["Generic brand, no established track record", "Dual spring-and-latex system's long-term durability unverified", "No certification recognition among instructors"],
  },
  {
    rank: "03",
    name: "AeroPilates Reformer 287",
    price: "$359",
    verdict: "Best budget compact reformer from an established brand",
    tag: "Established Brand Budget",
    description:
      "The AeroPilates 287 is the smallest full-function reformer from a recognized, established brand that we could verify as a real, live Amazon listing, at $359. It uses elastic cord resistance rather than coil springs, which feels genuinely different from the spring-based WINDFOOT and DWKWE models above, and covers much of the foundational reformer repertoire. We could not independently verify exact folded dimensions or assembly time for the current listing — confirm those on the product page.",
    affiliateUrl: "https://www.amazon.com/dp/B01FMODVAE?tag=pilatescollective-20",
    pros: ["Genuine, live Amazon listing", "Established brand with support infrastructure", "Good for beginners and flexibility work"],
    cons: ["Elastic cord resistance differs from springs", "Shorter rail limits some exercises", "Less stable than full studio reformers"],
  },
  {
    rank: "04",
    name: "AeroPilates 701 Premier Reformer",
    price: "$539.99",
    verdict: "Best mid-tier compact reformer",
    tag: "Editor's Pick",
    description:
      "The 701 Premier is AeroPilates' mid-tier model, a real, live Amazon listing at $539.99, sitting between the 287 and the brand's higher-end Pro XP 557. Like the rest of the range it uses elastic cord resistance rather than coil springs. We could not independently verify a specific cord count, weight capacity, or exact repertoire coverage percentage for this model — treat any such figure quoted elsewhere as something to confirm on the current Amazon listing.",
    affiliateUrl: "https://www.amazon.com/dp/B07G5J3SKS?tag=pilatescollective-20",
    pros: ["Genuine, live Amazon listing", "Mid-tier step up from the 287", "Cord-based, consistent with the AeroPilates line"],
    cons: ["Cord-based, not spring resistance", "Requires assembly", "Specific spec sheet not independently verifiable"],
  },
  {
    rank: "05",
    name: "Balanced Body Metro IQ Reformer",
    price: "$2,330",
    verdict: "Established-brand compact spring reformer",
    tag: "Best Established Compact",
    description:
      "The Metro IQ is Balanced Body's smaller, lighter machine among the professional-grade coil-spring reformers actually sold on Amazon — a real, live Amazon listing at $2,330, with a genuinely short stored length compared to the brand's full Studio Reformer. It uses real coil-spring resistance, not cord or latex band, and comes from an established, instructor-recognized brand with a long track record. We could not verify a fold-flat mechanism for this listing, so if folding specifically (rather than just a compact footprint) is a requirement, confirm that on the current listing first.",
    affiliateUrl: "https://www.amazon.com/dp/B09HNCMTZL?tag=pilatescollective-20",
    pros: ["Established, instructor-recognized brand", "Genuine coil-spring resistance", "Short stored length among professional-grade reformers"],
    cons: ["Meaningful step up in price from AeroPilates or budget models", "Folding not verified — compact, not confirmed to fold", "Heavier than consumer cord-based reformers"],
  },
  {
    rank: "06",
    name: "Align-Pilates C8-PRO Reformer",
    price: "$2,750",
    verdict: "Real spring-based option — not marketed as a compact/mini model",
    tag: "Premium Pick",
    description:
      "An earlier version of this article named a \"C2 Pro RC\" model at a different ASIN — we could not verify that specific model name or listing as genuine and currently sold, so it has been corrected. The real Align-Pilates machine sold on Amazon, through Merrithew (Align's US distributor), is the C8-PRO, at $2,750. It uses genuine coil-spring resistance. We could not independently verify rail length, width, height rating, or a folding mechanism specifically for this listing, and it isn't marketed by Align as a dedicated \"mini\" or narrow-profile model — confirm dimensions against your available space on the current listing before ordering.",
    affiliateUrl: "https://www.amazon.com/dp/B099ZJ4C25?tag=pilatescollective-20",
    pros: ["Genuine coil-spring resistance", "Real, live Amazon listing", "Commercial-rated build"],
    cons: ["Not specifically marketed as compact", "Significant investment versus cord-based options", "Fold status unverified"],
  },
];

const FAQS = [
  {
    q: "Is a mini or compact Pilates reformer worth it?",
    a: "For the tightest budgets, WINDFOOT ($295.99) and DWKWE ($299.99) are real, currently-sold, genuine spring reformers that fold for storage — generic brands without an established track record, but real machines. For beginners or space-constrained practitioners who prefer a recognized brand, the AeroPilates 287 at $359 is a genuine, real Amazon listing worth considering. For practitioners who train frequently and want spring-based resistance from an established brand, the Balanced Body Metro IQ ($2,330) or Align-Pilates C8-PRO ($2,750) are real steps up. We could not verify a specific repertoire-coverage percentage for any of these machines, so treat that as a general impression rather than a measured figure.",
  },
  {
    q: "Are the budget WINDFOOT and DWKWE reformers genuine spring reformers?",
    a: "Yes — these are real, live, currently-sold Amazon listings describing genuine carriage-and-rail construction, not toys. They are generic or dropship brands rather than established Pilates equipment makers like Balanced Body or Align-Pilates, so they carry no brand track record, no instructor certification recognition, and unclear long-term durability or warranty support. Their listings do explicitly describe folding for compact storage.",
  },
  {
    q: "How much space does a compact Pilates reformer need?",
    a: "We could not independently verify specific rail-length or width figures for the machines in this guide. As a general rule, a compact or entry-level reformer takes up less floor space than a full studio machine, but check the exact dimensions on the current Amazon listing against your available space before buying, rather than relying on a figure quoted here or elsewhere.",
  },
  {
    q: "Can you get a full Pilates workout on a compact reformer?",
    a: "You can cover a meaningful part of the reformer repertoire — footwork, seated work, and much of the beginner-to-intermediate vocabulary — on machines like the AeroPilates line or the budget spring models. We could not verify a specific percentage-of-repertoire figure, so treat any such number as a rough impression rather than a measured fact.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://pilatescollectiveclub.com/blog/best-mini-pilates-reformer/#article",
      "headline": "Best Mini Pilates Reformer (2026): 6 Real Picks, Verified",
      "description": "The best mini Pilates reformers for small spaces — real, verified Amazon listings from a $295.99 budget generic-brand folding tier through established-brand compact spring machines.",
      "image": {
        "@type": "ImageObject",
        "url": "https://pilatescollectiveclub.com/pictures/elena-kloppenburg-erUC4fTtCuo-unsplash.jpg",
        "width": 1200,
        "height": 630,
      },
      "author": {
        "@type": "Organization",
        "@id": "https://pilatescollectiveclub.com/#organization",
        "name": "Pilates Collective Club",
        "url": "https://pilatescollectiveclub.com",
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://pilatescollectiveclub.com/#organization",
        "name": "Pilates Collective Club",
        "logo": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/pcc-logo.png" },
      },
      "datePublished": "2026-05-01",
      "dateModified": "2026-09-23",
      "url": "https://pilatescollectiveclub.com/blog/best-mini-pilates-reformer",
      "mainEntityOfPage": "https://pilatescollectiveclub.com/blog/best-mini-pilates-reformer",
      "articleSection": "Equipment Guide",
      "inLanguage": "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Mini Pilates Reformer", "item": "https://pilatescollectiveclub.com/blog/best-mini-pilates-reformer" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": FAQS.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
    },
    {
      "@type": "ItemList",
      "name": "Best Mini Pilates Reformers (2026)",
      "numberOfItems": PRODUCTS.length,
      "itemListElement": PRODUCTS.map((p, i) => {
        const numericPrice = p.price.replace(/[^0-9.]/g, "");
        return {
          "@type": "ListItem",
          "position": i + 1,
          "item": {
            "@type": "Product",
            "name": p.name,
            "description": p.description,
            ...(numericPrice
              ? { "offers": { "@type": "Offer", "priceCurrency": "USD", "price": numericPrice, "availability": "https://schema.org/InStock", "url": p.affiliateUrl } }
              : {}),
          },
        };
      }),
    },
  ],
};

export default function BestMiniPilatesReformerPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Mini Reformers</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Mini Pilates Reformer<br /><span style={{ color: "#8b4a31" }}>(2026): Compact & Effective</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 9 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Space is the most common barrier to owning a Pilates reformer. A full-size machine requires a dedicated room; most apartments won&apos;t accommodate one. The compact reformer market claims to address this, but this category is rife with generic Amazon search-result links standing in for specific products, and model names that don&apos;t map to a real listing. An earlier version of this guide, having filtered those out, was left with only established-brand options and concluded there wasn&apos;t much of a true budget tier. A fresh check of the live Amazon catalog corrected that: WINDFOOT and DWKWE are real, currently-sold, genuine spring reformers that fold for compact storage at under $300. This guide now covers six reformers we could verify as real, currently-sold Amazon listings — from $295.99 for a budget generic-brand folding model to $2,750 for an established-brand coil-spring machine.
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/elena-kloppenburg-erUC4fTtCuo-unsplash.jpg" alt="Compact Pilates reformer for home use" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What separates a real mini reformer from a toy</h2>
              <div className="space-y-4">
                {[
                  { heading: "Resistance type", body: "Coil springs vs elastic cords — this is the most reliable distinction to shop on, and a real one. Springs provide progressive resistance as they lengthen; cords, like the elastic cords AeroPilates uses, build resistance differently and feel noticeably different in use. Neither is objectively wrong, but know which one you're buying." },
                  { heading: "Rail length", body: "Rail length affects what exercises are comfortable, but we could not independently verify specific rail-length figures for the machines in this guide — check the current Amazon listing's dimensions against your own height and reach before buying." },
                  { heading: "Carriage stability", body: "Lighter, budget-tier reformers can have less lateral rigidity than full studio machines. We could not verify specific stability claims for individual listings — check current owner reviews on the product page rather than a general claim." },
                  { heading: "Footbar and shoulder rest adjustability", body: "Fixed footbars and non-adjustable shoulder rests limit the machine to one body proportion, while adjustable components accommodate a wider range of heights. Confirm which type a specific listing has before buying." },
                ].map((item) => (
                  <div key={item.heading} className="flex gap-5 rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <div className="w-1.5 rounded-full shrink-0 mt-1" style={{ backgroundColor: "#8b4a31", minHeight: "20px" }} />
                    <div>
                      <p className="text-sm font-semibold mb-1" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.heading}</p>
                      <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick reference table */}
            <div className="mb-10 overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{PRODUCTS.length} Mini Reformers · Every Budget</p>
              <div className="space-y-12">
                {PRODUCTS.map((p) => (
                  <div key={p.name}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-semibold" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{p.rank}</span>
                      <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{p.tag}</span>
                      <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>{p.verdict}</span>
                    </div>
                    <ProductCard
                      name={p.name}
                      description={p.description}
                      price={p.price}
                      affiliateUrl={p.affiliateUrl}
                    />
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div className="rounded-lg p-4" style={{ backgroundColor: "#f0f7f1", border: "1px solid rgba(83,98,87,0.2)" }}>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Pros</p>
                        <ul className="space-y-1">
                          {p.pros.map((pro) => <li key={pro} className="text-xs" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>+ {pro}</li>)}
                        </ul>
                      </div>
                      <div className="rounded-lg p-4" style={{ backgroundColor: "#fdf5f3", border: "1px solid rgba(139,74,49,0.15)" }}>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Cons</p>
                        <ul className="space-y-1">
                          {p.cons.map((con) => <li key={con} className="text-xs" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>− {con}</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {FAQS.map((item) => (
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
                <ArticleCard title="Best Home Pilates Reformer (2026)" excerpt="Every budget from $299 to $3,500+ — the full guide to home reformers." href="/blog/best-home-pilates-reformer" category="Equipment" readTime="11 min read" date="May 2026" imageUrl="/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg" />
                <ArticleCard title="Best Pilates Reformer Under $1,000" excerpt="The honest guide to every reformer under four figures — spring vs cord." href="/blog/best-pilates-reformer-under-1000" category="Equipment" readTime="8 min read" date="May 2026" imageUrl="/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg" />
                <ArticleCard title="The Beginner's Guide to Reformer Pilates" excerpt="What to expect in your first reformer class, how to choose a studio, and how to progress." href="/blog/beginners-guide-to-reformer-pilates" category="Beginners" readTime="8 min read" date="May 2026" imageUrl="/pictures/esma-eserghep-NUQi80iMLrI-unsplash.jpg" />
              </div>
            </div>

          </div>
        </section>

        <CTASection title="Find a studio to try the reformer first" subtitle="Our city guides cover the best Pilates studios worldwide." />

      </main>
      <Footer />
    </>
  );
}
