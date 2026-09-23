import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Reformer Under $2,000 (2026): 2 Real Picks",
  description: "We could not verify a genuine spring-resistance reformer reliably sold on Amazon under $2,000. Both real picks in this bracket are AeroPilates cord machines. The cheapest verified spring reformer on Amazon, the Balanced Body Metro IQ, is $2,330 — just over budget.",
  keywords: ["best pilates reformer under 2000", "pilates reformer under 2000 dollars", "spring reformer under 2000", "mid-range pilates reformer 2026", "aeropilates reformer amazon", "best reformer $1000-$2000", "pilates reformer mid-range buy"],
  openGraph: {
    title: "Best Pilates Reformer Under $2,000 (2026): 2 Real Picks",
    description: "Two genuine, live Amazon listings actually under $2,000 — both cord-based. Why no spring reformer we could verify makes the cut.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-reformer-under-2000",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/tomi-blasic-tj0sM4gHlns-unsplash.jpg", width: 1200, height: 630, alt: "Best Pilates Reformers Under $2000 — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Reformer Under $2,000 (2026)",
    description: "Two real, cord-based picks actually under $2,000 — and why no spring reformer we could verify qualifies.",
    images: ["https://pilatescollectiveclub.com/pictures/tomi-blasic-tj0sM4gHlns-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-pilates-reformer-under-2000" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "AeroPilates Pro XP 557 Reformer",
    price: "$1,329.99",
    verdict: "Best overall — genuinely available, genuinely under $2,000",
    description:
      "A note before anything else: we could not verify a genuine spring-resistance reformer that is both from a recognised brand and reliably sold on Amazon under $2,000. An earlier version of this guide named an \"Align C2 Pro RC\" at $2,190 on a fabricated ASIN — that product does not exist as a real listing, and it has been removed. The strongest real pick actually under this budget is the AeroPilates Pro XP 557, a live Amazon listing at $1,329.99. It uses elastic cord resistance rather than coil springs, which is a genuinely different mechanism — softer at the start of a rep, firmer toward the end — and the brand markets it around a fold-flat design, though we could not independently verify exact folded dimensions or weight for the current listing. If genuine spring resistance matters more to you than staying under $2,000, see the note below on the cheapest verified spring reformer we could find on Amazon.",
    affiliateUrl: "https://www.amazon.com/dp/B0012TJI8S?tag=pilatescollective-20",
    tag: "Best Overall",
  },
  {
    rank: "02",
    name: "AeroPilates 701 Premier Reformer",
    price: "$539.99",
    verdict: "Best if you want to spend well under $2,000",
    description:
      "If you want to spend closer to the bottom of this range, the 701 Premier is a real, live Amazon listing at $539.99, also using elastic cord resistance. We could not verify detailed spec differences against the Pro XP 557 beyond price, so treat this as the lower-cost AeroPilates option rather than a fully differentiated machine. As with any cord-based reformer, it is not a substitute for spring resistance in advanced programming.",
    affiliateUrl: "https://www.amazon.com/dp/B07G5J3SKS?tag=pilatescollective-20",
    tag: "Lower Cost",
  },
];

const COMMONLY_ASSUMED = [
  { model: "Balanced Body Metro IQ Reformer", actual: "$2,330", over: "$330 over" },
  { model: "PersonalHour Janet La Force Plus Reformer", actual: "$2,555", over: "$555 over" },
  { model: "Align-Pilates C8-PRO Reformer", actual: "$2,750", over: "$750 over" },
  { model: "Merrithew At Home SPX Reformer Package", actual: "$3,349", over: "$1,349 over" },
  { model: "Balanced Body Allegro Stretch Reformer", actual: "$3,710", over: "$1,710 over" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Reformer Under $2,000 (2026): 2 Real Picks",
      "description": "We could not verify a genuine spring-resistance reformer reliably sold on Amazon under $2,000. Both real picks are AeroPilates cord machines, and the cheapest verified spring reformer on Amazon runs $2,330 — just over budget.",
      "url": "https://pilatescollectiveclub.com/blog/best-pilates-reformer-under-2000",
      "datePublished": "2026-05-21",
      "dateModified": "2026-09-23",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/tomi-blasic-tj0sM4gHlns-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-pilates-reformer-under-2000" },
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Reformers Under $2,000 (2026)",
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
        { "@type": "ListItem", "position": 3, "name": "Best Pilates Reformers Under $2,000", "item": "https://pilatescollectiveclub.com/blog/best-pilates-reformer-under-2000" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is there a genuine spring-based Pilates reformer under $2,000?", "acceptedAnswer": { "@type": "Answer", "text": "Not that we could verify. We checked and could not confirm any coil-spring reformer, from a recognised brand and reliably sold on Amazon, priced under $2,000. The cheapest genuine spring reformer we could verify on Amazon is the Balanced Body Metro IQ at $2,330 — just over this budget. Everything else in spring resistance that we could confirm, including the Align-Pilates C8-PRO ($2,750) and the Merrithew At Home SPX Reformer Package ($3,349), costs meaningfully more." } },
        { "@type": "Question", "name": "Is $2,000 enough to buy a good Pilates reformer?", "acceptedAnswer": { "@type": "Answer", "text": "It buys a genuine, well-reviewed cord-based machine like the AeroPilates Pro XP 557. It does not, as far as we could verify, buy a coil-spring reformer through Amazon — the closest genuinely available spring machine we could confirm is the Balanced Body Metro IQ at $2,330, just over budget." } },
        { "@type": "Question", "name": "What is the cheapest real Pilates reformer?", "acceptedAnswer": { "@type": "Answer", "text": "Depends whether you mean spring or cord resistance. Among verified Amazon listings, the AeroPilates 701 Premier at $539.99 and the AeroPilates Pro XP 557 at $1,329.99 are the strongest cord-resistance machines we can confirm. For genuine coil-spring resistance on Amazon, the cheapest we could verify is the Balanced Body Metro IQ at $2,330." } },
        { "@type": "Question", "name": "Should I buy a used reformer instead?", "acceptedAnswer": { "@type": "Answer", "text": "It is worth comparing before you decide. A commercial-grade frame from an established brand is built for well over a decade of daily studio use, and the parts that wear out are springs, ropes and upholstery, which are replaceable for a few hundred dollars. At this budget, a used studio machine is a genuine alternative to a new cord-based machine, and which wins depends on what turns up locally and in what condition." } },
        { "@type": "Question", "name": "What is the difference between spring and bungee reformers?", "acceptedAnswer": { "@type": "Answer", "text": "Spring reformers use coil springs calibrated to specific resistance values — the same mechanism used in professional studios. The resistance profile is close to linear. Bungee (cord) reformers use elastic cord, which resists progressively more as it stretches, so the feel is softer at the start of a rep and firmer at the end. Springs are generally preferred for structured or advanced programming; cord systems suit beginners and rehabilitation well." } },
      ],
    },
  ],
};

export default function BestPilatesReformerUnder2000Page() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Reformers</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Pilates Reformer<br /><span style={{ color: "#8b4a31" }}>Under $2,000 (2026)</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated 17 September 2026 · 11 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              An honest finding first: we could not verify a genuine coil-spring reformer, from a recognised brand and reliably sold on Amazon, priced under $2,000. An earlier version of this guide named an &quot;Align C2 Pro RC&quot; at $2,190 as its top pick, sold under a specific ASIN — that ASIN does not correspond to a real product, and the model has been removed from this guide entirely. The two real, live Amazon listings we could verify under this budget are both AeroPilates cord machines: the Pro XP 557 at $1,329.99 and the 701 Premier at $539.99. Below we cover both in full, plus the list of genuine spring reformers that cost more than $2,000 — including the cheapest one we could verify, at $2,330.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/tomi-blasic-tj0sM4gHlns-unsplash.jpg" alt="Best Pilates reformers under $2000 for home use" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>The 2 Machines We Recommend</p>
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
              <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Why there is no spring reformer on this list</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Worth saying plainly: an earlier version of this guide recommended an &quot;Align-Pilates C2 Pro RC&quot; as the one genuine spring reformer under $2,000, linked to a specific Amazon product page. On closer checking, that ASIN does not correspond to a real, currently-sold listing — it was a fabricated reference, and we have removed it rather than replace it with another unverified figure.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                We would rather tell you plainly that we could not find a genuine coil-spring reformer under $2,000 than invent one to fill the bracket. If spring resistance matters more to you than staying under this budget, the cheapest verified spring reformer we could find on Amazon is the Balanced Body Metro IQ at $2,330 — see the table below.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What actually costs more than $2,000 in spring resistance</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                These are genuine, verified Amazon listings for spring-resistance reformers — every one of them costs more than $2,000, and the cheapest is only $330 over. If a spring reformer is advertised near $2,000 or below, treat that listing with real suspicion; we could not verify any that actually clears that price.
              </p>
              <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", backgroundColor: "#ffffff" }}>
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Montserrat', sans-serif", fontSize: "14px" }}>
                    <thead>
                      <tr style={{ backgroundColor: "#f6f3f2" }}>
                        <th style={{ textAlign: "left", padding: "12px 16px", fontWeight: 600, color: "#1b1c1c", whiteSpace: "nowrap" }}>Machine</th>
                        <th style={{ textAlign: "right", padding: "12px 12px", fontWeight: 600, color: "#1b1c1c", whiteSpace: "nowrap" }}>Actual price</th>
                        <th style={{ textAlign: "right", padding: "12px 16px", fontWeight: 600, color: "#1b1c1c", whiteSpace: "nowrap" }}>Over budget by</th>
                      </tr>
                    </thead>
                    <tbody>
                      {COMMONLY_ASSUMED.map((r) => (
                        <tr key={r.model} style={{ borderTop: "1px solid rgba(217,194,186,0.3)" }}>
                          <td style={{ padding: "12px 16px", color: "#53433e", fontWeight: 300 }}>{r.model}</td>
                          <td style={{ padding: "12px 12px", textAlign: "right", color: "#1b1c1c", whiteSpace: "nowrap" }}>{r.actual}</td>
                          <td style={{ padding: "12px 16px", textAlign: "right", color: "#8b4a31", whiteSpace: "nowrap" }}>{r.over}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-sm leading-relaxed mt-4" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
                These machines cluster from $2,330 up to $3,710, from three unrelated manufacturers. None of them is under $2,000 — the cheapest we could verify, the Balanced Body Metro IQ, still runs $330 over this budget.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Choosing between the two picks, or spending more</h2>
              <div className="space-y-4">
                {[
                  { label: "Take the AeroPilates Pro XP 557 if you want the strongest machine actually under $2,000", body: "At $1,329.99 this is the best-built cord-resistance machine we could verify at this budget, with a rebounder and a fold-flat design the brand markets around, though we could not independently verify exact folded dimensions." },
                  { label: "Take the AeroPilates 701 Premier if you want to spend well under $2,000, or are not sure the habit will stick", body: "Lower commitment, lower price, and the same cord-based mechanism as the Pro XP 557 in a lower-cost package." },
                  { label: "Buy used if you want spring resistance from an established studio brand", body: "A used Balanced Body or Merrithew frame at this budget is a serious option, not a compromise. Springs, ropes and upholstery are the only real wear items and they are inexpensive to replace, so the frame and rails are what actually matter in an inspection." },
                  { label: "Spend $330 more if genuine spring resistance is non-negotiable", body: "The cheapest coil-spring reformer we could verify as a live Amazon listing is the Balanced Body Metro IQ at $2,330. We could not find a genuine spring reformer that clears $2,000, so this is the honest floor rather than a compromise pick." },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "Is there a genuine spring-based Pilates reformer under $2,000?", a: "Not that we could verify. We checked and could not confirm any coil-spring reformer, from a recognised brand and reliably sold on Amazon, priced under $2,000. The cheapest genuine spring reformer we could verify on Amazon is the Balanced Body Metro IQ at $2,330 — just over this budget. Everything else in spring resistance that we could confirm, including the Align-Pilates C8-PRO ($2,750) and the Merrithew At Home SPX Reformer Package ($3,349), costs meaningfully more." },
                  { q: "Is $2,000 enough to buy a good Pilates reformer?", a: "It buys a genuine, well-reviewed cord-based machine like the AeroPilates Pro XP 557. It does not, as far as we could verify, buy a coil-spring reformer through Amazon — the closest genuinely available spring machine we could confirm is the Balanced Body Metro IQ at $2,330, just over budget." },
                  { q: "What is the cheapest real Pilates reformer?", a: "Depends whether you mean spring or cord resistance. Among verified Amazon listings, the AeroPilates 701 Premier at $539.99 and the AeroPilates Pro XP 557 at $1,329.99 are the strongest cord-resistance machines we can confirm. For genuine coil-spring resistance on Amazon, the cheapest we could verify is the Balanced Body Metro IQ at $2,330." },
                  { q: "Should I buy a used reformer instead?", a: "It is worth comparing before you decide. A commercial-grade frame from an established brand is built for well over a decade of daily studio use, and the parts that wear out are springs, ropes and upholstery, which are replaceable for a few hundred dollars. At this budget, a used studio machine is a genuine alternative to a new cord-based machine, and which wins depends on what turns up locally and in what condition." },
                  { q: "What is the difference between spring and bungee reformers?", a: "Spring reformers use coil springs calibrated to specific resistance values — the same mechanism used in professional studios. The resistance profile is close to linear. Bungee (cord) reformers use elastic cord, which resists progressively more as it stretches, so the feel is softer at the start of a rep and firmer at the end. Springs are generally preferred for structured or advanced programming; cord systems suit beginners and rehabilitation well." },
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
                <ArticleCard title="Best Home Pilates Reformers" excerpt="The complete guide across all budgets — from entry-level to premium." href="/blog/best-home-pilates-reformer" category="Equipment" readTime="14 min read" date="May 2026" imageUrl="/pictures/tomi-blasic-tj0sM4gHlns-unsplash.jpg" />
                <ArticleCard title="Best Pilates Reformers Under $1,000" excerpt="The best entry-level reformers for practitioners starting out." href="/blog/best-pilates-reformer-under-1000" category="Equipment" readTime="9 min read" date="May 2026" imageUrl="/pictures/junseong-lee-AX8cf6mkCzw-unsplash.jpg" />
                <ArticleCard title="Buying a Used Pilates Reformer" excerpt="What to inspect, how to price it against new, and when to walk away." href="/blog/buying-a-used-pilates-reformer" category="Guide" readTime="11 min read" date="September 2026" imageUrl="/pictures/stitch-reformer-loops-hooks.png" />
                <ArticleCard title="Best Premium Pilates Reformers" excerpt="If budget isn't a constraint, these are the machines worth stepping up to." href="/blog/best-premium-pilates-reformer" category="Equipment" readTime="11 min read" date="May 2026" imageUrl="/pictures/tomi-blasic-tj0sM4gHlns-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best Pilates studios in Melbourne…" />
      </main>
      <Footer />
    </>
  );
}
