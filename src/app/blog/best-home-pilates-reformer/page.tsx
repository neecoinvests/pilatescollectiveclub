import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Home Pilates Reformer (2026): Every Budget, Honestly Reviewed | Pilates Collective Club",
  description:
    "The best home Pilates reformers tested across every price point — from budget-friendly AeroPilates to professional Merrithew and Balanced Body machines. Find the right one for your space and budget.",
  openGraph: {
    title: "Best Home Pilates Reformer (2026): Every Budget, Honestly Reviewed",
    description: "The best home Pilates reformers tested across every price point — from AeroPilates to Merrithew and Balanced Body.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-home-pilates-reformer",
    images: [{ url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80", width: 1200, height: 630, alt: "Best Home Pilates Reformer — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Home Pilates Reformer (2026)",
    description: "The best home Pilates reformers tested across every price point.",
    images: ["https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80"],
  },
};

const PRODUCTS = [
  {
    name: "Stamina AeroPilates 287",
    tier: "Budget",
    price: "From $299",
    verdict: "Best budget entry point",
    description:
      "Four cords, a rebounder, and a foldable frame make the 287 the most accessible full-function reformer on the market. The cord-based resistance is softer than spring systems but perfectly usable for foundational footwork, stretching, and the rowing series. Folds flat and stores under a bed. A genuine reformer experience at a fraction of the cost.",
    affiliateUrl: "https://www.amazon.com/s?k=stamina+aeropilates+287&tag=pilatescollective-20",
    pros: ["Foldable for small spaces", "Rebounder included", "Good for beginners"],
    cons: ["Cord resistance differs from spring feel", "Limited weight capacity", "Less stable than studio machines"],
  },
  {
    name: "AeroPilates Pro XP 557",
    tier: "Mid-Range",
    price: "From $799",
    verdict: "Best mid-range reformer",
    description:
      "The 557 is a meaningful step up — four cords, a smoother carriage, a full standing platform, and a rebounder built for cardio intervals. The adjustable footbar and shoulder rests accommodate a wider range of heights, and the frame is substantially more rigid than budget models. For practitioners who train four or more times per week, this is the sweet spot between cost and quality.",
    affiliateUrl: "https://www.amazon.com/s?k=aeropilates+pro+557&tag=pilatescollective-20",
    pros: ["Standing platform included", "Smooth carriage action", "Adjustable for most heights"],
    cons: ["Still cord-based, not spring", "Heavier to move", "Assembly takes 90 minutes"],
  },
  {
    name: "Merrithew SPX Max",
    tier: "Premium",
    price: "From $2,199",
    verdict: "Best professional-grade home reformer",
    description:
      "The SPX Max is the machine you'll find in professional training studios worldwide — a full spring system, full-length rails, and a carriage that moves with the precision and weight you'll recognise from your best studio sessions. The jump board attachment, vertical stand, and tower options make this a complete apparatus investment. Built to last decades with proper maintenance.",
    affiliateUrl: "https://www.amazon.com/s?k=merrithew+spx+reformer&tag=pilatescollective-20",
    pros: ["True spring resistance", "Studio-equivalent quality", "Full accessory ecosystem"],
    cons: ["Significant investment", "Large footprint (requires dedicated space)", "Weighs 115lbs"],
  },
  {
    name: "Balanced Body Allegro 2",
    tier: "Premium",
    price: "From $3,495",
    verdict: "Best overall home reformer",
    description:
      "The Allegro 2 is the gold standard for serious home practitioners. Used by professional dancers, physiotherapists, and elite instructors worldwide, it features Balanced Body's signature smooth-glide carriage, a full four-spring system, fold-flat option, and compatibility with the complete Balanced Body accessories range including the Tower, Cadillac, and Box. If you're committing to a serious home practice, this is the machine to buy once.",
    affiliateUrl: "https://www.amazon.com/s?k=balanced+body+allegro+2+reformer&tag=pilatescollective-20",
    pros: ["Best carriage feel available", "Folds for storage", "Full Balanced Body accessory compatibility"],
    cons: ["Premium price", "Requires professional assembly", "Overkill for casual practitioners"],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Home Pilates Reformer (2026): Every Budget, Honestly Reviewed",
      "description": "The best home Pilates reformers tested across every price point — from budget AeroPilates to professional Merrithew and Balanced Body machines.",
      "url": "https://pilatescollectiveclub.com/blog/best-home-pilates-reformer",
      "datePublished": "2026-05-01",
      "dateModified": "2026-05-01",
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Home Pilates Reformer", "item": "https://pilatescollectiveclub.com/blog/best-home-pilates-reformer" },
      ],
    },
  ],
};

export default function BestHomeReformerPage() {
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
              Best Home Pilates Reformer<br /><span style={{ color: "#8b4a31" }}>(2026): Honestly Reviewed</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 11 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              A quality home reformer changes your practice permanently. The ability to train consistently, on your schedule, without the cost and logistics of studio attendance compounds into meaningful results over months and years. But the reformer market spans an enormous price range — from $299 cord-based foldables to $4,500 professional spring machines — and the differences matter. This guide tells you exactly what you get at each level and which machines are genuinely worth the investment.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1400&q=80" alt="Home Pilates reformer machine" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            {/* What to look for */}
            <div className="mb-16 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What actually matters in a home reformer</h2>
              <div className="space-y-4">
                {[
                  { heading: "Spring vs cord resistance", body: "Professional reformers use calibrated steel springs. Budget models substitute elastic cords. Cords are usable, but the resistance curve is different — they get harder through the movement rather than maintaining consistent tension. For beginners, this is manageable. For trained practitioners, it will feel wrong." },
                  { heading: "Carriage weight and glide quality", body: "The carriage should move smoothly, quietly, and with consistent resistance throughout the stroke. Cheap carriages wobble laterally, squeak, and have uneven glide. This directly affects your ability to perform controlled, precise movement — the entire point of reformer Pilates." },
                  { heading: "Rail length", body: "Standard studio reformers have a rail of around 96–100 inches. Shorter rails restrict the full range of motion for tall practitioners and limit certain exercises. Check rail length before buying, especially if you're over 5'10\"." },
                  { heading: "Frame stability", body: "The reformer must not rock, flex, or shift during explosive footwork or jump board work. Cheap aluminium frames flex under load — this is both a quality and a safety issue." },
                  { heading: "Footbar adjustability", body: "A footbar that adjusts to multiple heights and positions is essential for proper alignment in footwork and for accommodating different leg lengths. Fixed footbars significantly limit the repertoire you can safely perform." },
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

            {/* Products */}
            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>4 Reformers · Every Budget</p>
              <div className="space-y-12">
                {PRODUCTS.map((p, i) => (
                  <div key={p.name}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{p.tier}</span>
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

            {/* Comparison table */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Quick comparison</h2>
              <div className="overflow-x-auto rounded-xl" style={{ border: "1px solid rgba(217,194,186,0.4)" }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: "#f6f3f2", borderBottom: "1px solid rgba(217,194,186,0.4)" }}>
                      {["Model", "Price", "Resistance", "Rail Length", "Best For"].map((h) => (
                        <th key={h} className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { model: "Stamina 287", price: "$299", resistance: "4 cords", rail: "88\"", best: "Beginners, small spaces" },
                      { model: "AeroPilates 557", price: "$799", resistance: "4 cords", rail: "91\"", best: "Regular practitioners" },
                      { model: "Merrithew SPX Max", price: "$2,199", resistance: "5 springs", rail: "96\"", best: "Serious practitioners" },
                      { model: "Balanced Body Allegro 2", price: "$3,495", resistance: "4 springs", rail: "99\"", best: "Professional home studio" },
                    ].map((row, i) => (
                      <tr key={row.model} style={{ backgroundColor: i % 2 === 0 ? "#ffffff" : "#faf8f7", borderBottom: "1px solid rgba(217,194,186,0.2)" }}>
                        <td className="px-4 py-3 font-semibold" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{row.model}</td>
                        <td className="px-4 py-3" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>{row.price}</td>
                        <td className="px-4 py-3" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{row.resistance}</td>
                        <td className="px-4 py-3" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{row.rail}</td>
                        <td className="px-4 py-3" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{row.best}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Space requirements */}
            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Space requirements to plan for</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                A full-size reformer requires a minimum footprint of approximately 8.5 feet long by 2.5 feet wide, plus clearance around the machine for safe movement. The Balanced Body Allegro 2 and Merrithew SPX require a dedicated space — they cannot be moved easily once assembled.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Foldable models (the AeroPilates range and the Allegro 2) can be stored vertically against a wall when not in use, reducing the permanent footprint to roughly 30 inches by 12 inches. If space is your primary constraint, the Allegro 2&apos;s fold-flat feature makes it uniquely practical for its class.
              </p>
            </div>

            {/* Verdict */}
            <div className="mb-16 rounded-2xl p-8 md:p-10" style={{ background: "linear-gradient(135deg, #8b4a31 0%, #a86247 100%)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-4 opacity-75" style={{ color: "#ffffff", fontFamily: "'Montserrat', sans-serif" }}>Our Verdict</p>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#ffffff", fontFamily: "'Playfair Display', serif" }}>Buy once, buy the Balanced Body Allegro 2.</h2>
              <p className="text-base leading-relaxed mb-6 opacity-85" style={{ color: "#ffffff", fontFamily: "'Montserrat', sans-serif" }}>
                If budget is genuinely no constraint, the Allegro 2 is the machine you will never need to replace. If you&apos;re working with a tighter budget but want a real spring reformer, the Merrithew SPX Max is the professional-grade entry point. For beginners testing the water, the AeroPilates 557 delivers a credible reformer-like experience at a fraction of the cost.
              </p>
              <a href="https://www.amazon.com/s?k=balanced+body+allegro+2+reformer&tag=pilatescollective-20" target="_blank" rel="noopener noreferrer nofollow" className="inline-block px-6 py-3 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90" style={{ backgroundColor: "#ffffff", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>
                Shop Balanced Body on Amazon →
              </a>
            </div>

            {/* Further reading */}
            <div>
              <h2 className="text-2xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="Best Pilates Equipment for Home Practice" excerpt="Everything beyond the reformer — mats, bands, rings, and ankle weights." href="/blog/best-pilates-equipment-for-home-practice" category="Equipment" readTime="10 min read" date="May 2026" imageUrl="https://images.unsplash.com/photo-1609899464726-209daa3fde40?w=800&q=80" />
                <ArticleCard title="Beginner's Guide to Reformer Pilates" excerpt="What to expect from your first reformer class and how to prepare." href="/blog/beginners-guide-to-reformer-pilates" category="Guide" readTime="8 min read" date="May 2026" imageUrl="https://images.unsplash.com/photo-1518310952931-b1de897abd40?w=800&q=80" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a reformer studio near you" subtitle="Explore our curated city guides to find the best reformer Pilates studios worldwide." showSearch searchPlaceholder="Ask: best reformer Pilates in London…" />
      </main>
      <Footer />
    </>
  );
}
