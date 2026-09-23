import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Hand Weights (2026): 5 Real Options Compared",
  description: "The ProsourceFit Weighted Toning Exercise Ball line (2lb, 3lb, 5lb), the Yes4All Weighted Toning Ball, and the Philosophy Gym Toning Ball are all live, currently-sold Amazon listings. Here's how the five weights compare and which one to buy.",
  keywords: ["best pilates hand weights", "pilates toning balls", "prosourcefit weighted toning ball", "pilates wrist weights", "hand weights for pilates 2026"],
  openGraph: {
    title: "Best Pilates Hand Weights (2026): 5 Real Options Compared",
    description: "Five real, in-stock Amazon toning ball listings compared for Pilates arm work.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-hand-weights",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-props-cork-ring.png", width: 1200, height: 630, alt: "Best Pilates Hand Weights — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Hand Weights (2026)",
    description: "Real, in-stock Amazon listings — compared.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-props-cork-ring.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-pilates-hand-weights" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "ProsourceFit Weighted Toning Exercise Ball (2lb)",
    price: "$11.99",
    verdict: "Best starting weight",
    description:
      "The lightest of the three, and the right starting point for most people new to loaded arm work. It's sand-filled rather than a solid dumbbell, so the weight sits in your palm with an ergonomic shape that puts less strain on the wrist and finger joints than a bar-style dumbbell — a real difference during the high-repetition arm series where a gripped handle tends to fatigue the forearm before the shoulder. Sold by Amazon.com.",
    affiliateUrl: "https://www.amazon.com/dp/B07V8L88DB?tag=pilatescollective-20",
    tag: "Best Starting Weight",
  },
  {
    rank: "02",
    name: "ProsourceFit Weighted Toning Exercise Ball (3lb)",
    price: "$11.99",
    verdict: "The mid-range pick most people settle on",
    description:
      "Same sand-filled, ergonomic design as the 2lb version, one step up in load. This is where most practitioners with some experience land once the 2lb ball stops feeling like enough resistance for standing arm work. Same price as the 2lb, so there's no cost penalty to sizing up if you're already reasonably conditioned. Sold by Amazon.com.",
    affiliateUrl: "https://www.amazon.com/dp/B07V8LBVKR?tag=pilatescollective-20",
    tag: "Mid-Range Pick",
  },
  {
    rank: "03",
    name: "ProsourceFit Weighted Toning Exercise Ball (5lb)",
    price: "$11.99",
    verdict: "For advanced standing series and full-body toning work",
    description:
      "The heaviest in the same ProsourceFit line, built for advanced standing arm series or full-body toning circuits rather than classical low-load mat work. It's easy to overshoot with this weight in seated Pilates arm sequences — the shoulders and neck tend to compensate once the load exceeds what slow, controlled reps can manage — so this is best reserved for practitioners who already know their form holds under load. Sold by Amazon.com.",
    affiliateUrl: "https://www.amazon.com/dp/B07V8L74JY?tag=pilatescollective-20",
    tag: "Advanced / Full Range",
  },
  {
    rank: "04",
    name: "Yes4All Weighted Toning Ball (2-10lb range)",
    price: "$13.85",
    verdict: "Best wide-range line for instability training",
    description:
      "Sold by Amazon.com, this line spans 2lb to 10lb, a wider range than the ProsourceFit set covers in one product family. It's a PVC shell with a sand fill, which shifts slightly as you move it — a real plus for instability and balance drills where a rigid dumbbell feels too static, on top of the standard Pilates toning uses.",
    affiliateUrl: "https://www.amazon.com/dp/B086JRF2GR?tag=pilatescollective-20",
    tag: "Widest Weight Range",
  },
  {
    rank: "05",
    name: "Philosophy Gym Toning Ball (2lb)",
    price: "$13.99",
    verdict: "Best durable mini medicine ball for toss-and-catch work",
    description:
      "A soft-shell PVC mini medicine ball built to hold up to repeated tossing and catching, not just static holds — useful if your routine mixes toning ball work with partner passes or rebound drills where the ProsourceFit's sand-filled design is less suited to repeated impact.",
    affiliateUrl: "https://www.amazon.com/dp/B0921T3G1C?tag=pilatescollective-20",
    tag: "Best For Toss & Catch",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Hand Weights (2026): 5 Real Options Compared",
      "description": "The ProsourceFit Weighted Toning Exercise Ball line (2lb, 3lb, 5lb), the Yes4All Weighted Toning Ball, and the Philosophy Gym Toning Ball, all verified as live Amazon listings and compared for Pilates use.",
      "url": "https://pilatescollectiveclub.com/blog/best-pilates-hand-weights",
      "datePublished": "2026-09-09",
      "dateModified": "2026-09-23",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-props-cork-ring.png", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-pilates-hand-weights" },
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Hand Weights (2026)",
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
        { "@type": "ListItem", "position": 3, "name": "Best Pilates Hand Weights", "item": "https://pilatescollectiveclub.com/blog/best-pilates-hand-weights" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What's the best hand weight sold on Amazon for Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "The ProsourceFit Weighted Toning Exercise Ball is a live, currently-sold Amazon listing available in 2lb, 3lb, and 5lb versions, all $11.99. The Yes4All Weighted Toning Ball ($13.85) spans a wider 2-10lb range, and the Philosophy Gym Toning Ball ($13.99) is a durable pick for toss-and-catch drills. All are sand or PVC-filled and ergonomically shaped, which puts less strain on the wrist than a bar-style dumbbell during high-repetition arm work." } },
        { "@type": "Question", "name": "What weight dumbbells should I use for Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "In general, light loads — commonly cited as one to three pounds — cover most of the Pilates arm repertoire, since the arm series is high-repetition endurance work performed with long levers and little momentum. The ProsourceFit 2lb, Philosophy Gym 2lb, or the low end of the Yes4All range covers that well; the ProsourceFit 5lb or the upper end of the Yes4All range suits advanced standing series or full-body toning work." } },
        { "@type": "Question", "name": "Do I need hand weights for Pilates at all?", "acceptedAnswer": { "@type": "Answer", "text": "No. The classical mat repertoire works without them, and beginners are often better off learning the movements unweighted before adding load. Once form is solid, a light toning ball like the ProsourceFit 2lb or Philosophy Gym 2lb adds resistance without changing the character of the exercise." } },
        { "@type": "Question", "name": "Which of these five should I actually buy?", "acceptedAnswer": { "@type": "Answer", "text": "For most people starting out: the ProsourceFit 2lb ($11.99). For a wider range in one purchase: the Yes4All ($13.85, 2-10lb). For durability against tossing and catching: the Philosophy Gym 2lb ($13.99). For advanced standing series work: the ProsourceFit 5lb ($11.99)." } },
      ],
    },
  ],
};

export default function BestPilatesHandWeightsPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Accessories</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Pilates Hand Weights<br /><span style={{ color: "#8b4a31" }}>(2026): 5 Real Options Compared</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 5 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              A prior version of this article named brands (a neoprene dumbbell set, a vinyl-coated rack, adjustable wrist weights) we couldn&apos;t verify at the time. We&apos;ve since confirmed, directly against live Amazon listings, that five real toning ball options are in stock and ready to buy today: the ProsourceFit Weighted Toning Exercise Ball line in 2lb, 3lb, and 5lb versions (all $11.99), the Yes4All Weighted Toning Ball spanning a 2-10lb range ($13.85), and the Philosophy Gym Toning Ball ($13.99, 2lb). They&apos;re a genuinely good fit for Pilates arm work: sand or PVC-filled and ergonomically shaped, so they put less strain on the wrist and finger joints than a bar-style dumbbell during high-repetition sets.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-props-cork-ring.png" alt="Pilates mat props laid out for arm work" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            {/* Quick reference table */}
            <div className="mb-10 mt-4 overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
              <div className="px-6 py-4" style={{ backgroundColor: "#f6f3f2" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Verified Picks</p>
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>The Full Lineup</p>
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
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>How to choose between the five</h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The three ProsourceFit toning balls share the same sand-filled, ergonomic construction, with load as the only variable; the Yes4All and Philosophy Gym balls add a wider weight range and a toss-friendly build, respectively. Use the criteria below to pick the right one for your practice.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { heading: "Load range", body: "One to three pounds is commonly cited as the appropriate range for the Pilates arm series — heavier loads tend to bring the neck and upper trapezius into play, which works against the exercise's intent. The 2lb and 3lb balls sit squarely in this range." },
                  { heading: "Grip vs. open-hand designs", body: "The toning ball's rounded shape rests in an open palm rather than requiring a closed grip, which reduces forearm recruitment compared with a handled dumbbell — a genuine advantage for the long, controlled arm circles Pilates favors." },
                  { heading: "Surface material", body: "The sand fill gives a soft-touch surface rather than bare metal, which is more comfortable in a sweaty hand and less likely to mark a floor if set down between exercises." },
                  { heading: "Progression", body: "Because the 2lb, 3lb, and 5lb balls are the same price and shape, it's reasonable to start with the 2lb and add the 3lb once the lighter one stops feeling like resistance, rather than buying an adjustable set." },
                ].map((item) => (
                  <div key={item.heading} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.heading}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>How to know your weight is right</h2>
              <ul className="space-y-3">
                {[
                  "Your shoulders stay down. If the shoulders hike toward the ears partway through a set, the weight is likely too heavy — regardless of how light it feels in your hand at rest.",
                  "The neck stays quiet. Neck tension during the arm series is a common signal that the load has exceeded what the shoulder stabilisers can control.",
                  "The last few repetitions look like the first few. Pilates loading is generally judged on whether movement quality holds, not on reaching failure.",
                  "You are not gripping hard. A tight grip means the forearm is compensating — the ProsourceFit balls are shaped to rest in an open palm, so if you find yourself clutching it, size down.",
                  "Range does not shrink. If the arm circles get smaller as the set goes on, drop from the 3lb to the 2lb, or the 5lb to the 3lb.",
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
                  { q: "What's the best hand weight sold on Amazon for Pilates?", a: "The ProsourceFit Weighted Toning Exercise Ball is a live, currently-sold Amazon listing available in 2lb, 3lb, and 5lb versions, all $11.99. The Yes4All Weighted Toning Ball ($13.85) spans a wider 2-10lb range, and the Philosophy Gym Toning Ball ($13.99) is a durable pick for toss-and-catch drills. All are sand or PVC-filled and ergonomically shaped, which puts less strain on the wrist than a bar-style dumbbell during high-repetition arm work." },
                  { q: "What weight dumbbells should I use for Pilates?", a: "In general, light loads — commonly cited as one to three pounds — cover most of the Pilates arm repertoire, since the arm series is high-repetition endurance work performed with long levers and little momentum. The ProsourceFit 2lb, Philosophy Gym 2lb, or the low end of the Yes4All range covers that well; the ProsourceFit 5lb or the upper end of the Yes4All range suits advanced standing series or full-body toning work." },
                  { q: "Do I need hand weights for Pilates at all?", a: "No. The classical mat repertoire works without them, and beginners are often better off learning the movements unweighted before adding load. Once form is solid, a light toning ball like the ProsourceFit 2lb or Philosophy Gym 2lb adds resistance without changing the character of the exercise." },
                  { q: "Which of these five should I actually buy?", a: "For most people starting out: the ProsourceFit 2lb ($11.99). For a wider range in one purchase: the Yes4All ($13.85, 2-10lb). For durability against tossing and catching: the Philosophy Gym 2lb ($13.99). For advanced standing series work: the ProsourceFit 5lb ($11.99)." },
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
                <ArticleCard title="Best Pilates Ankle Weights (2026)" excerpt="Two real, verified ankle weight options — compared for Pilates use." href="/blog/best-pilates-ankle-weights" category="Equipment" readTime="5 min read" date="September 2026" imageUrl="/pictures/stitch-pilates-ball-mat.png" />
                <ArticleCard title="Best Pilates Ring (2026)" excerpt="Magic circles — the honest situation, and the closest real bundle option." href="/blog/best-pilates-ring" category="Equipment" readTime="8 min read" date="May 2026" imageUrl="/pictures/stitch-magic-circle-hand.png" />
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
