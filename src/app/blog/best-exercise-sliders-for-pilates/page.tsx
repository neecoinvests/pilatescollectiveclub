import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Exercise Sliders for Pilates (2026): Real Options Compared",
  description: "Two real, purpose-built core gliding discs for Pilates — the Gaiam Core Sliding Discs ($17.79) and the A AZURELIFE Exercise Core Sliders ($9.99) — dual-sided for carpet and hard floors, compared for Pilates mat work.",
  keywords: ["best exercise sliders pilates", "pilates sliders 2026", "exercise gliders pilates mat", "best gliding discs pilates", "core sliders pilates", "gaiam core sliding discs", "azurelife exercise sliders"],
  openGraph: {
    title: "Best Exercise Sliders for Pilates (2026): Real Options Compared",
    description: "Gaiam and A AZURELIFE — two real, purpose-built core gliding discs compared for Pilates mat work.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-exercise-sliders-for-pilates",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/elena-kloppenburg-erUC4fTtCuo-unsplash.jpg", width: 1200, height: 630, alt: "Best Exercise Sliders for Pilates — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Exercise Sliders for Pilates (2026)",
    description: "Gaiam and A AZURELIFE — two real, purpose-built core sliders compared.",
    images: ["https://pilatescollectiveclub.com/pictures/elena-kloppenburg-erUC4fTtCuo-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-exercise-sliders-for-pilates" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "A AZURELIFE Exercise Core Sliders (Set of 2)",
    price: "$9.99",
    verdict: "Best budget pick",
    description:
      "Sold by A AZURELIFE, this dual-sided pair of 7-inch discs pairs a smooth plastic side for carpet with a foam side for hard floors, so you flip depending on your practice surface. Lightweight and genuinely portable — easy to toss in a bag for travel or a studio session away from home.",
    affiliateUrl: "https://www.amazon.com/dp/B07RK1CL2T?tag=pilatescollective-20",
    tag: "Budget Pick",
  },
  {
    rank: "02",
    name: "Gaiam Core Sliding Discs (Set of 2)",
    price: "$17.79",
    verdict: "Best all-rounder",
    description:
      "Sold directly by Amazon.com, this Gaiam pair is dual-sided for both carpet and hard floors, purpose-built for core and ab engagement work — lunges, squats, mountain climbers, and the same hamstring-curl and pike patterns that translate directly from reformer footwork. The Gaiam name carries a level of build consistency that's reassuring for anyone building this into a regular routine.",
    affiliateUrl: "https://www.amazon.com/dp/B0964G1N18?tag=pilatescollective-20",
    tag: "Best All-Rounder",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Exercise Sliders for Pilates (2026): Real Options Compared",
      "description": "Two real, purpose-built core gliding discs for Pilates — Gaiam and A AZURELIFE, compared for carpet and hard-floor use.",
      "url": "https://pilatescollectiveclub.com/blog/best-exercise-sliders-for-pilates",
      "datePublished": "2026-06-28",
      "dateModified": "2026-09-23",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/elena-kloppenburg-erUC4fTtCuo-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-exercise-sliders-for-pilates" },
    },
    {
      "@type": "ItemList",
      "name": "Best Exercise Sliders for Pilates (2026)",
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
        { "@type": "ListItem", "position": 3, "name": "Best Exercise Sliders for Pilates", "item": "https://pilatescollectiveclub.com/blog/best-exercise-sliders-for-pilates" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is the best exercise slider for Pilates on Amazon?", "acceptedAnswer": { "@type": "Answer", "text": "The Gaiam Core Sliding Discs ($17.79) are the best all-rounder — dual-sided for carpet and hard floors, purpose-built for core and ab engagement work. The A AZURELIFE Exercise Core Sliders ($9.99) are the best budget pick, also dual-sided with a smooth plastic side and a foam side." } },
        { "@type": "Question", "name": "Do I need sliders for Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "No, but a gliding disc under the foot or hand can meaningfully expand a mat repertoire — hamstring curls, lunges, pike and plank variations that standard mat work cannot replicate without equipment." } },
        { "@type": "Question", "name": "Do sliders work on both carpet and hardwood?", "acceptedAnswer": { "@type": "Answer", "text": "Both the Gaiam and A AZURELIFE discs are dual-sided by design — one side (typically foam) for carpet and one side (typically smooth plastic) for hard floors. Flip the disc to match your practice surface." } },
      ],
    },
  ],
};

export default function BestExerciseSlidersForPilatesPage() {
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
              Best Exercise Sliders<br /><span style={{ color: "#8b4a31" }}>for Pilates (2026): Real Options Compared</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 5 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Gliding discs under the foot or hand are a genuinely useful mat accessory — they expand a mat repertoire with hamstring curls, lunges, pike and plank variations that standard mat work cannot replicate without equipment. Below are two real, purpose-built core sliders, both dual-sided for carpet and hard floors: the Gaiam set as the all-round pick, and the A AZURELIFE set as the budget option.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/elena-kloppenburg-erUC4fTtCuo-unsplash.jpg" alt="Best exercise sliders for Pilates mat practice — Gaiam and A AZURELIFE core gliding discs" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>The Sliders, Compared</p>
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

            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.3)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Key Pilates slider exercises</h2>
              <div className="space-y-3 text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                <p><strong>Supine hamstring curl.</strong> Lie on your back, heels on sliders, hips bridged. Slide feet away until legs are extended, then curl back. Directly replicates the reformer footwork hamstring press.</p>
                <p><strong>Lateral lunge slide.</strong> Stand with one foot on a slider. Slide the foot laterally while lowering into a single-leg squat, then slide back. Engages the adductors and glute medius — muscles that reformer lateral work targets specifically.</p>
                <p><strong>Pike.</strong> Plank position, feet on sliders. Draw feet toward hands by piking at the hips, keeping legs straight. The spinal articulation and hip flexor demand directly parallel the reformer pike-to-elephant sequence.</p>
                <p><strong>Mountain climber (slow tempo).</strong> Plank, feet on sliders. Alternate driving knees toward chest under control. Slow tempo with a deliberate pause at full knee drive replicates the reformer running cadence.</p>
                <p><strong>Reverse lunge slide.</strong> Stand on one foot, other foot on slider behind. Slide the back foot further behind while lowering into a lunge, then slide forward. Controls the eccentric hip flexor lengthening that reformer lunge springs provide.</p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "What is the best exercise slider for Pilates on Amazon?", a: "The Gaiam Core Sliding Discs ($17.79) are the best all-rounder — dual-sided for carpet and hard floors, purpose-built for core and ab engagement work. The A AZURELIFE Exercise Core Sliders ($9.99) are the best budget pick, also dual-sided with a smooth plastic side and a foam side." },
                  { q: "Do I need sliders for Pilates?", a: "No, but a gliding disc under the foot or hand can meaningfully expand a mat repertoire — hamstring curls, lunges, pike and plank variations that standard mat work cannot replicate without equipment." },
                  { q: "Do sliders work on both carpet and hardwood?", a: "Both the Gaiam and A AZURELIFE discs are dual-sided by design — one side (typically foam) for carpet and one side (typically smooth plastic) for hard floors. Flip the disc to match your practice surface." },
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
                <ArticleCard title="Best Pilates Resistance Bands (2026)" excerpt="Loop bands, long bands, and tube bands for Pilates — the accessories that extend your mat training most effectively." href="/blog/best-pilates-resistance-bands" category="Equipment" readTime="7 min read" date="April 2026" imageUrl="/pictures/jade-stephens-N21356amsyw-unsplash.jpg" />
                <ArticleCard title="Best Pilates Equipment for Home Practice (2026)" excerpt="The complete home studio — what to buy first, what to buy later, and what to skip entirely." href="/blog/best-pilates-equipment-for-home-practice" category="Equipment" readTime="10 min read" date="March 2026" imageUrl="/pictures/elena-kloppenburg-erUC4fTtCuo-unsplash.jpg" />
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
