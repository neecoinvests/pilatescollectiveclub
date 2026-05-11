import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Equipment for Home Practice | Pilates Collective Club",
  description:
    "Our definitive guide to home Pilates equipment. From quality mats to resistance bands and reformer alternatives — everything you actually need.",
};

export default function BlogEquipmentPage() {
  return (
    <>
      <Header />
      <main>
        {/* Article Header */}
        <section
          className="pt-32 pb-16 px-6"
          style={{ backgroundColor: "#fcf9f8" }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}
              >
                Equipment Guide
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6"
              style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
            >
              Best Pilates Equipment
              <br />
              <span style={{ color: "#8b4a31" }}>for Home Practice</span>
            </h1>

            <p
              className="text-sm mb-6"
              style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}
            >
              Updated May 2026 · 10 min read
            </p>

            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>

            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />

            <p
              className="text-lg leading-relaxed"
              style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
            >
              Building a home Pilates practice is one of the most valuable investments you can make
              in your long-term movement health. But the equipment market is cluttered with
              mediocre gear and inflated claims. This guide cuts through the noise — here&apos;s what
              actually makes a difference, what you can skip, and what to buy first.
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "380px" }}>
              <Image src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1400&q=80" alt="Pilates home practice equipment" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        {/* Article Body */}
        <article className="px-6 pb-20">
          <div className="max-w-3xl mx-auto space-y-20">

            {/* Section 1 — Mat */}
            <section>
              <h2
                className="text-3xl font-semibold mb-6"
                style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
              >
                Best Pilates Mat
              </h2>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
              >
                A Pilates mat is not a yoga mat. The primary difference is density and thickness —
                Pilates work requires more cushioning because you spend significant time with your
                spine, sacrum, and hip bones pressing against the floor. The minimum we recommend
                is <strong>6mm</strong>; if you have any sensitivity in the lower back or hips, go
                to 8mm.
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
              >
                Non-slip texture is non-negotiable — you&apos;ll be pulling and pushing against the mat
                with bare feet or grip socks throughout your session. Closed-cell foam is easier to
                wipe clean and resists moisture. Our top pick balances density, grip, and
                portability without compromising on quality.
              </p>
              <ProductCard
                name="The Studio Mat Pro"
                description="6mm thick, high-density closed-cell foam with a natural cork surface layer for superior grip. Lightweight, easy to wipe clean, and comes with a carry strap. Our top recommendation for serious home practitioners."
                price="From $52"

              />
            </section>

            {/* Section 2 — Resistance Bands */}
            <section>
              <h2
                className="text-3xl font-semibold mb-6"
                style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
              >
                Best Resistance Bands
              </h2>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
              >
                Resistance bands are the most versatile piece of equipment you can own for home
                Pilates. They replicate many of the spring-based exercises from the reformer,
                particularly footwork, chest expansion, and rowing series. A set of three
                resistance levels — light, medium, and heavy — covers virtually every application.
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
              >
                Opt for fabric-covered bands over bare latex. They&apos;re more comfortable against
                skin, don&apos;t snap as dramatically when they fail, and don&apos;t roll up the thighs
                during leg exercises.
              </p>
              <ProductCard
                name="Premium Resistance Band Set"
                description="Set of 3 fabric-covered bands (light, medium, heavy). Durable looped design with anti-slip inner layer. Ideal for Pilates footwork, chest expansion, and stretching series. Includes a mesh storage bag."
                price="From $28"

              />
            </section>

            {/* Section 3 — Ring */}
            <section>
              <h2
                className="text-3xl font-semibold mb-6"
                style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
              >
                Best Pilates Ring (Magic Circle)
              </h2>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
              >
                Joseph Pilates originally designed the magic circle using the ring from a beer
                keg. The modern version is a flexible fibreglass or metal ring with padded handles,
                and it remains one of the most effective props in classical repertoire. Primary
                targets are the inner thighs and pelvic floor, but it&apos;s equally useful for chest
                and arm work.
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
              >
                The key quality markers are the handle padding and the ring&apos;s flexibility. Too
                rigid and you risk wrist strain; too soft and it won&apos;t provide useful resistance. A
                good magic circle should spring back cleanly without wobbling.
              </p>
              <ProductCard
                name="Precision Magic Circle"
                description="Fibreglass core with dual foam-padded handles. Provides firm but pliable resistance ideal for inner thigh, arm, and chest work. 38cm diameter, compatible with standard Pilates repertoire."
                price="From $35"

              />
            </section>

            {/* Section 4 — Ankle Weights */}
            <section>
              <h2
                className="text-3xl font-semibold mb-6"
                style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
              >
                Best Ankle Weights
              </h2>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
              >
                Ankle weights add useful resistance to leg circle, side-lying, and standing leg
                work. For beginners, start at 0.5kg per leg — this is more than enough to feel
                meaningful resistance in hip and glute exercises without compromising form.
                Progress slowly; the goal is always controlled movement with full range of motion,
                not heavier weight with compromised alignment.
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
              >
                Adjustable ankle weights are ideal for home practice — they grow with you as your
                strength develops, and you won&apos;t need to buy multiple pairs.
              </p>
              <ProductCard
                name="Adjustable Ankle Weights"
                description="Neoprene-covered with adjustable fill pockets, 0.5–2kg per weight. Machine washable, secure velcro closure, and a slim profile that doesn't restrict movement range. A rare combination of quality and versatility."
                price="From $38"

              />
            </section>

            {/* Section 5 — Reformer Alternative */}
            <section>
              <h2
                className="text-3xl font-semibold mb-6"
                style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
              >
                Best Reformer Alternative
              </h2>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
              >
                A full reformer is the gold standard for home Pilates, but it requires significant
                space and investment (typically $1,800–$4,500 for a quality model). For most home
                practitioners, a Pilates board or fitness board offers the most accessible
                reformer-like experience — spring-loaded resistance, a sliding surface, and enough
                versatility to cover the majority of the classical reformer repertoire.
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
              >
                These boards are generally under $220, fold flat for storage, and can be used
                against any stable wall. They don&apos;t replicate the full reformer experience — the
                carriage feel is quite different — but for footwork, leg press, and standing work,
                they&apos;re genuinely useful.
              </p>
              <ProductCard
                name="Home Pilates Board"
                description="Spring-loaded sliding board with adjustable resistance. Foldable and wall-mountable. Covers footwork, squat series, and standing balance exercises. A smart option before committing to a full reformer."
                price="From $179"

              />
            </section>

            {/* Section 6 — Beginners */}
            <section
              className="rounded-2xl p-8"
              style={{
                backgroundColor: "#f6f3f2",
                border: "1px solid rgba(217, 194, 186, 0.35)",
              }}
            >
              <h2
                className="text-2xl font-semibold mb-4"
                style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
              >
                What beginners actually need
              </h2>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
              >
                If you&apos;re just starting your home practice, the answer is simple: a quality mat
                and enough space to lie down. That&apos;s genuinely all you need to build a solid
                foundation. The fundamental Pilates mat repertoire — the hundred, roll-up, single
                leg circles, rolling like a ball, the series of five — requires nothing but your
                own body weight.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
              >
                Add a resistance band once you&apos;ve established a consistent practice. Everything
                else is supplementary. The best equipment is the equipment you&apos;ll actually use —
                don&apos;t let gear acquisition become a substitute for showing up.
              </p>
            </section>

            {/* Comparison Table */}
            <section>
              <h2
                className="text-3xl font-semibold mb-8"
                style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
              >
                Equipment comparison
              </h2>
              <div className="overflow-x-auto rounded-xl" style={{ border: "1px solid rgba(217, 194, 186, 0.4)" }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: "#f6f3f2", borderBottom: "1px solid rgba(217, 194, 186, 0.4)" }}>
                      {["Item", "Beginner Need", "Budget Option", "Premium Option", "Our Pick"].map((h) => (
                        <th
                          key={h}
                          className="text-left px-5 py-4 text-xs font-semibold uppercase tracking-wider"
                          style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        item: "Mat",
                        need: "Essential",
                        budget: "Standard foam, ~$22",
                        premium: "Cork/natural rubber, $90+",
                        pick: "The Studio Mat Pro",
                      },
                      {
                        item: "Resistance Bands",
                        need: "Very useful",
                        budget: "Latex loop bands, $9",
                        premium: "Fabric set of 3, $33",
                        pick: "Premium Resistance Band Set",
                      },
                      {
                        item: "Pilates Ring",
                        need: "Optional",
                        budget: "Basic plastic, $13",
                        premium: "Fibreglass with padding, $44",
                        pick: "Precision Magic Circle",
                      },
                      {
                        item: "Ankle Weights",
                        need: "Optional",
                        budget: "Fixed 1kg pair, $11",
                        premium: "Adjustable neoprene, $44",
                        pick: "Adjustable Ankle Weights",
                      },
                      {
                        item: "Reformer Alternative",
                        need: "Advanced",
                        budget: "Second-hand reformer, $450",
                        premium: "Full home reformer, $2,200+",
                        pick: "Home Pilates Board",
                      },
                    ].map((row, i) => (
                      <tr
                        key={row.item}
                        style={{
                          backgroundColor: i % 2 === 0 ? "#ffffff" : "#faf8f7",
                          borderBottom: "1px solid rgba(217, 194, 186, 0.2)",
                        }}
                      >
                        <td className="px-5 py-4 font-semibold" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>
                          {row.item}
                        </td>
                        <td className="px-5 py-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                          {row.need}
                        </td>
                        <td className="px-5 py-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                          {row.budget}
                        </td>
                        <td className="px-5 py-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                          {row.premium}
                        </td>
                        <td className="px-5 py-4 font-medium" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>
                          {row.pick}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Final Recommendation */}
            <section
              className="rounded-2xl p-8 md:p-10"
              style={{
                background: "linear-gradient(135deg, #8b4a31 0%, #a86247 100%)",
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em] mb-4 opacity-75"
                style={{ color: "#ffffff", fontFamily: "'Montserrat', sans-serif" }}
              >
                Our Recommendation
              </p>
              <h2
                className="text-2xl font-semibold mb-4"
                style={{ color: "#ffffff", fontFamily: "'Playfair Display', serif" }}
              >
                Start with a mat and one resistance band.
              </h2>
              <p
                className="text-base leading-relaxed mb-6 opacity-85"
                style={{ color: "#ffffff", fontFamily: "'Montserrat', sans-serif" }}
              >
                Build from there as your practice deepens. The classic mat repertoire is more than
                enough to develop real strength and body awareness. Equipment amplifies a good
                practice — it doesn&apos;t create one.
              </p>
              <a
                href="/cities/zurich"
                className="inline-block px-6 py-3 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#8b4a31",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Find a studio near you →
              </a>
            </section>

            {/* Further reading */}
            <section>
              <h2
                className="text-2xl font-semibold mb-8"
                style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
              >
                Further reading
              </h2>
              <div className="max-w-sm">
                <ArticleCard
                  title="The Best Pilates Studios in Zurich"
                  excerpt="Our complete guide to Zurich's best reformer studios, mat classes, and private sessions."
                  href="/cities/zurich"
                  category="City Guide"
                  readTime="8 min read"
                  date="May 2026"
                />
              </div>
            </section>
          </div>
        </article>

        {/* CTA */}
        <CTASection
          title="Find your perfect Pilates studio"
          subtitle="Use our AI Finder to discover curated studios in any city."
          showSearch
          searchPlaceholder="Ask: best reformer Pilates near me…"
        />
      </main>
      <Footer />
    </>
  );
}
