import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Reformer Under $2,000 (2026): 2 Real Picks",
  description: "The Align Pilates H1 is a genuine spring reformer under $2,000, and the AeroPilates XP 557 is the best cord-based alternative. What else claims this bracket and doesn't.",
  keywords: ["best pilates reformer under 2000", "pilates reformer under 2000 dollars", "align pilates h1 review", "spring reformer under 2000", "mid-range pilates reformer 2026", "align pilates reformer under 2000", "best reformer $1000-$2000", "pilates reformer mid-range buy"],
  openGraph: {
    title: "Best Pilates Reformer Under $2,000 (2026): 2 Real Picks",
    description: "One genuine spring reformer and one strong cord-based alternative, both confirmed under $2,000.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-reformer-under-2000",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/tomi-blasic-tj0sM4gHlns-unsplash.jpg", width: 1200, height: 630, alt: "Best Pilates Reformers Under $2000 — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Reformer Under $2,000 (2026)",
    description: "A genuine spring reformer under $2,000, and the best cord-based alternative.",
    images: ["https://pilatescollectiveclub.com/pictures/tomi-blasic-tj0sM4gHlns-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-pilates-reformer-under-2000" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Align Pilates H1 Home Reformer",
    price: "From $1,790",
    verdict: "Best overall — genuine spring resistance",
    description:
      "The H1 is the machine we missed the first time we rebuilt this guide, and it is the one genuine spring reformer we can currently confirm under $2,000 from a recognised brand. It runs four music-wire springs in three strengths (one strong, two medium, one light) rather than bungee cord, which means a linear resistance curve that behaves like the reformer you trained on in a studio, not a softer approximation of one. It does not fold flat for under-bed storage; instead it stands upright on its own frame and wheels out of the way, which needs a ceiling of at least 2.4m (about 7'10\") to store standing. Rated to 120kg (265lb) and built for practitioners from 4'10\" to 6'4\". Dealer pricing varies more than most reformers in this guide, from around $1,600 to $1,900 depending on retailer and current stock, so check the total before ordering. Note: the H1 is not reliably stocked on Amazon.com — this link goes to an authorized dealer instead.",
    affiliateUrl: "https://recovathlete.com/products/align-pilates-h1-home-reformer-machine",
    tag: "Best Overall",
  },
  {
    rank: "02",
    name: "AeroPilates Pro XP 557",
    price: "From $1,329",
    verdict: "Best cord-based alternative",
    description:
      "If the H1's storage height or weight rating rules it out, the XP 557 is the strongest cord-based machine at this budget. Elastic cord resistance rises as it stretches rather than tracking the roughly linear curve of a spring, which is a real difference in feel — softer at the start of a rep, firmer toward the end. That is not a flaw so much as a different mechanism, and it suits beginners and rehabilitation contexts well. The integrated cardio rebounder is included in the package, which spring-based machines at this price require a separate jumpboard to match. The honest limitation: cord is not a substitute for spring resistance in advanced programming, and practitioners training seriously tend to outgrow it within a couple of years.",
    affiliateUrl: "https://www.amazon.com/s?k=aeropilates+pro+xp+557&tag=pilatescollective-20",
    tag: "Best Value",
  },
];

const COMMONLY_ASSUMED = [
  { model: "Peak Pilates Fit", actual: "from $2,200", over: "$200 over" },
  { model: "Align Pilates C2 Pro RC", actual: "$2,280", over: "$280 over" },
  { model: "Balanced Body Metro IQ", actual: "$2,295", over: "$295 over" },
  { model: "Align Pilates C8 Pro", actual: "$2,750", over: "$750 over" },
  { model: "Merrithew At Home SPX", actual: "$3,299", over: "$1,299 over" },
  { model: "Merrithew SPX Max", actual: "$3,649", over: "$1,649 over" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Reformer Under $2,000 (2026): 2 Real Picks",
      "description": "The Align Pilates H1 is a genuine spring reformer confirmed under $2,000, and the AeroPilates XP 557 is the strongest cord-based alternative. What else claims this bracket and does not qualify.",
      "url": "https://pilatescollectiveclub.com/blog/best-pilates-reformer-under-2000",
      "datePublished": "2026-05-21",
      "dateModified": "2026-09-17",
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
        { "@type": "Question", "name": "Is there a genuine spring-based Pilates reformer under $2,000?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, one that we can currently confirm from an established brand: the Align Pilates H1, priced by dealers between roughly $1,600 and $1,900. It runs real coil springs rather than bungee cord. Everything else marketed as a spring reformer near this budget, including the Peak Pilates Fit, the Align C2 Pro RC, the Balanced Body Metro IQ and the Align C8 Pro, checks in between $2,200 and $2,750 on current dealer pricing." } },
        { "@type": "Question", "name": "Is $2,000 enough to buy a good Pilates reformer?", "acceptedAnswer": { "@type": "Answer", "text": "It buys one genuine spring machine, the Align Pilates H1, plus every serious cord-based option on the market. It does not buy the machines most commonly recommended at this budget: the Align C8 Pro is around $2,750, and the Merrithew At Home SPX package runs $3,299 or more. If the H1 does not suit your height, weight or storage constraints, the honest next spring-based budget is closer to $2,200." } },
        { "@type": "Question", "name": "What is the cheapest real Pilates reformer?", "acceptedAnswer": { "@type": "Answer", "text": "Depends whether you mean spring or cord. The AeroPilates Pro XP 557 at around $1,329 is the strongest cord-resistance machine we can verify, and less expensive AeroPilates models exist below $500. For genuine coil-spring resistance, the Align Pilates H1 at roughly $1,600 to $1,900 is the cheapest we can currently confirm from a recognised brand. The next spring reformers up start around $2,200." } },
        { "@type": "Question", "name": "Should I buy a used reformer instead?", "acceptedAnswer": { "@type": "Answer", "text": "It is worth comparing before you decide. A commercial-grade frame from an established brand is built for well over a decade of daily studio use, and the parts that wear out are springs, ropes and upholstery, which are replaceable for a few hundred dollars. At this budget a used studio machine and a new H1 are genuinely competing options, and which wins depends on what turns up locally and in what condition." } },
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
              There is a genuine spring-based reformer under $2,000: the Align Pilates H1, confirmed against dealer listings at $1,600 to $1,900. It is the only machine with real coil springs, not bungee cord, that we can currently verify below this budget from an established brand. Below it we cover the H1 in full, the best cord-based alternative if it does not suit you, and the list of machines that get recommended at this price and are not actually here.
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>The 2 Machines That Qualify</p>
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
              <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Why the H1 almost didn't make this list</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Worth saying plainly: an earlier version of this guide left the H1 out. We had an unverified figure of $2,199 attached to it internally, it did not conflict with anything else on the site, so it went unquestioned. Independent dealer listings put the real price at $1,600 to $1,900. That was a mistake in the previous version, not a change in the market, and it is fixed now.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The lesson generalises: a price that has never been contradicted is not the same as a price that has been checked. Everything in the table below has now been checked against current dealer listings rather than carried over from an earlier draft.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What else claims this bracket, and what it actually costs</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Every machine below appears on somebody&apos;s under-$2,000 list. None of them is under $2,000 on current dealer pricing, checked in September 2026. If you see one of these advertised near $2,000 or below, that listing is either stale or the deal is on a bundle you should read carefully.
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
                These six cluster tightly at $2,200 to $2,300 once you get past the H1, from four unrelated manufacturers. That is the real floor for a mainstream spring reformer once the H1 is accounted for separately.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Choosing between the two picks, or waiting</h2>
              <div className="space-y-4">
                {[
                  { label: "Take the H1 if the storage height and weight rating work for you", body: "This is the pick for anyone who wants real spring feel without spending $2,200+. Check two things before ordering: you need roughly 7'10\" of ceiling clearance to stand it upright for storage, and the 120kg (265lb) user rating needs to comfortably cover the heaviest person who will use it." },
                  { label: "Take the AeroPilates if you are not sure the habit will stick, or the H1's constraints rule it out", body: "Lower commitment, lower price, and a genuinely different but legitimate resistance mechanism. The included cardio rebounder is a real point in its favour if you want more than reformer work from one machine." },
                  { label: "Buy used if you want spring resistance from an established studio brand", body: "A used Balanced Body or Merrithew frame at this budget is a serious option, not a compromise. Springs, ropes and upholstery are the only real wear items and they are inexpensive to replace, so the frame and rails are what actually matter in an inspection." },
                  { label: "Stretch to about $2,200 to $2,300 if neither the H1 nor cord resistance appeals", body: "The Peak Pilates Fit, Align C2 Pro RC and Balanced Body Metro IQ all sit in this band. The jump from the H1 buys you the accessory ecosystem of a bigger brand rather than a meaningfully different reformer experience." },
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
                  { q: "Is there a genuine spring-based Pilates reformer under $2,000?", a: "Yes, one that we can currently confirm from an established brand: the Align Pilates H1, priced by dealers between roughly $1,600 and $1,900. It runs real coil springs rather than bungee cord. Everything else marketed as a spring reformer near this budget, including the Peak Pilates Fit, the Align C2 Pro RC, the Balanced Body Metro IQ and the Align C8 Pro, checks in between $2,200 and $2,750 on current dealer pricing." },
                  { q: "Is $2,000 enough to buy a good Pilates reformer?", a: "It buys one genuine spring machine, the Align Pilates H1, plus every serious cord-based option on the market. It does not buy the machines most commonly recommended at this budget: the Align C8 Pro is around $2,750, and the Merrithew At Home SPX package runs $3,299 or more. If the H1 does not suit your height, weight or storage constraints, the honest next spring-based budget is closer to $2,200." },
                  { q: "What is the cheapest real Pilates reformer?", a: "Depends whether you mean spring or cord. The AeroPilates Pro XP 557 at around $1,329 is the strongest cord-resistance machine we can verify, and less expensive AeroPilates models exist below $500. For genuine coil-spring resistance, the Align Pilates H1 at roughly $1,600 to $1,900 is the cheapest we can currently confirm from a recognised brand. The next spring reformers up start around $2,200." },
                  { q: "Should I buy a used reformer instead?", a: "It is worth comparing before you decide. A commercial-grade frame from an established brand is built for well over a decade of daily studio use, and the parts that wear out are springs, ropes and upholstery, which are replaceable for a few hundred dollars. At this budget a used studio machine and a new H1 are genuinely competing options, and which wins depends on what turns up locally and in what condition." },
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
