import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Ball (2026): Mini Ball and Exercise Ball Reviewed | Pilates Collective Club",
  description:
    "The best Pilates balls for home practice — mini Pilates balls for mat work and stability balls for full-body exercises. Tested, compared, and ranked.",
  openGraph: {
    title: "Best Pilates Ball (2026): Mini Ball and Exercise Ball Reviewed",
    description: "The best Pilates balls for home practice — mini Pilates balls for mat work and stability balls for full-body exercises. Tested, compared, and ranked.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-ball",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg", width: 1200, height: 630, alt: "Best Pilates Ball — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Ball (2026): Mini Ball and Exercise Ball Reviewed",
    description: "The best Pilates balls for home practice — mini and stability balls tested and ranked.",
    images: ["https://pilatescollectiveclub.com/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg"],
  },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Trideer Mini Pilates Ball (9-inch)",
    type: "Mini Ball",
    price: "From $12",
    tag: "Best Mini Ball",
    description:
      "The Trideer 9-inch mini ball is the most consistently well-reviewed small Pilates ball on the market — and for good reason. The material is thick, burst-resistant PVC with a surface texture that grips lightly without being sticky. At 9 inches inflated it's the ideal size for inner thigh work, spine articulation support, and the spine corrector alternatives that benefit from a firmer, smaller prop. Comes with a hand pump and repair kit. Excellent value.",
    affiliateUrl: "https://www.amazon.com/s?k=trideer+mini+pilates+ball+9+inch&tag=pilatescollective-20",
  },
  {
    rank: "02",
    name: "Gaiam Total Body Balance Ball Kit (65cm)",
    type: "Stability Ball",
    price: "From $28",
    tag: "Best Stability Ball",
    description:
      "Gaiam&apos;s 65cm stability ball is the benchmark for mid-sized exercise balls used in Pilates, core training, and active sitting. The anti-burst material, non-slip surface, and consistent sizing make it reliable for balance exercises, back extension work, and the full range of ball-based Pilates exercises. The kit includes a pump, resistance band, and workout guide. At 65cm, it&apos;s appropriate for practitioners between 5&apos;4\" and 5&apos;11\".",
    affiliateUrl: "https://www.amazon.com/s?k=gaiam+total+body+balance+ball+65cm&tag=pilatescollective-20",
  },
  {
    rank: "03",
    name: "URBNFit Exercise Ball (55cm)",
    type: "Stability Ball",
    price: "From $22",
    tag: "Best for Shorter Practitioners",
    description:
      "The 55cm URBNFit ball is the right choice for practitioners under 5&apos;4\" — it brings the hips to proper height when seated and allows correct spinal alignment during back extension exercises. The material quality is comparable to Gaiam at a lower price point, and the anti-slip surface is particularly good. Inflates easily with a standard pump. The compact size also makes it easier to store in a small home practice space.",
    affiliateUrl: "https://www.amazon.com/s?k=urbnfit+exercise+ball+55cm&tag=pilatescollective-20",
  },
  {
    rank: "04",
    name: "Live Pro Mini Soft Pilates Ball (10-inch)",
    type: "Mini Ball",
    price: "From $15",
    tag: "Best for Soft Support",
    description:
      "The Live Pro 10-inch soft ball is slightly larger and softer than the Trideer — intentionally so. The semi-deflated feel makes it ideal for exercises where you want the ball to yield slightly under pressure: thoracic support in upper body work, between the knees during bridge variations, and under the sacrum for pelvic mobility exercises. A useful complement if you already have a firmer mini ball and want a different feel for different applications.",
    affiliateUrl: "https://www.amazon.com/s?k=live+pro+mini+soft+pilates+ball&tag=pilatescollective-20",
  },
  {
    rank: "05",
    name: "TheraBand Exercise Ball Pro Series (65cm)",
    type: "Stability Ball",
    price: "From $35",
    tag: "Best Professional Grade",
    description:
      "TheraBand&apos;s Pro Series is the exercise ball of choice in physiotherapy clinics and professional Pilates studios — a step above consumer-grade balls in material quality, anti-burst rating, and sizing precision. The slow-deflate system means that if punctured, the ball loses air gradually rather than explosively, which is a meaningful safety advantage during loaded exercises. Worth the premium if you train with intensity or use the ball for rehabilitation work.",
    affiliateUrl: "https://www.amazon.com/s?k=theraband+exercise+ball+pro+series+65cm&tag=pilatescollective-20",
  },
];

const EXERCISES = [
  { name: "Mini ball inner thigh squeeze", equipment: "Mini ball", level: "All levels", benefit: "Activates adductors, stabilises pelvis" },
  { name: "Ball-supported bridge", equipment: "Mini ball", level: "Beginner–Intermediate", benefit: "Deepens glute activation, challenges pelvic stability" },
  { name: "Thoracic extension over ball", equipment: "Mini ball", level: "All levels", benefit: "Mobilises thoracic spine, counters desk posture" },
  { name: "Stability ball roll-out", equipment: "65cm stability ball", level: "Intermediate", benefit: "Deep core activation, shoulder stability" },
  { name: "Ball back extension", equipment: "65cm stability ball", level: "Intermediate", benefit: "Strengthens erector spinae, opens hip flexors" },
  { name: "Ball wall squat", equipment: "65cm stability ball", level: "All levels", benefit: "Quad and glute strength, knee tracking" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Ball (2026): Mini Ball and Exercise Ball Reviewed",
      "description": "The best Pilates balls for home practice — mini Pilates balls for mat work and stability balls for full-body exercises. Tested, compared, and ranked.",
      "url": "https://pilatescollectiveclub.com/blog/best-pilates-ball",
      "datePublished": "2026-05-01",
      "dateModified": "2026-05-01",
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Pilates Ball", "item": "https://pilatescollectiveclub.com/blog/best-pilates-ball" },
      ],
    },
  ],
};

export default function BestPilatesBallPage() {
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
              Best Pilates Ball<br /><span style={{ color: "#8b4a31" }}>(2026): Mini & Stability</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 8 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              The Pilates ball comes in two distinct forms with very different applications. The mini Pilates ball (8–10 inches) is a precision prop used in mat work to challenge pelvic stability, activate the inner thighs, and support thoracic mobility. The larger stability ball (55–75cm) opens up a wider repertoire of core and back extension exercises. This guide covers the best of both, with sizing guidance and a curated list of exercises to make immediate use of your purchase.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg" alt="Pilates ball exercise" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            {/* Mini vs Stability */}
            <div className="mb-16 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Mini ball vs stability ball: which do you need?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.35)" }}>
                  <h3 className="text-base font-semibold mb-3" style={{ color: "#8b4a31", fontFamily: "'Playfair Display', serif" }}>Mini Pilates Ball (8–10 inches)</h3>
                  <ul className="space-y-2">
                    {["Inner thigh activation during bridges and supine exercises", "Pelvic stabilisation challenge in mat work", "Thoracic support for upper body extension", "Between-knee prop for spinal alignment", "Easily stored — fits in a gym bag"].map((item) => (
                      <li key={item} className="text-sm flex gap-2" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}><span style={{ color: "#8b4a31" }}>·</span>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.35)" }}>
                  <h3 className="text-base font-semibold mb-3" style={{ color: "#8b4a31", fontFamily: "'Playfair Display', serif" }}>Stability Ball (55–75cm)</h3>
                  <ul className="space-y-2">
                    {["Full core engagement during roll-outs and pikes", "Back extension and thoracic mobility exercises", "Active sitting to improve posture", "Hip and hamstring stretching with support", "Balance and proprioceptive training"].map((item) => (
                      <li key={item} className="text-sm flex gap-2" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}><span style={{ color: "#8b4a31" }}>·</span>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="text-sm mt-4" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
                If you can only buy one: start with the mini ball. It&apos;s more specifically Pilates-oriented, cheaper, and easier to store.
              </p>
            </div>

            {/* Products */}
            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Balls · Tested & Ranked</p>
              <div className="space-y-10">
                {PRODUCTS.map((p) => (
                  <div key={p.name}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-semibold" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{p.rank}</span>
                      <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{p.tag}</span>
                      <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: "#f0f7f1", color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>{p.type}</span>
                    </div>
                    <ProductCard
                      name={p.name}
                      description={p.description}
                      price={p.price}
                      affiliateUrl={p.affiliateUrl}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Sizing guide */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Stability ball sizing guide</h2>
              <div className="overflow-x-auto rounded-xl" style={{ border: "1px solid rgba(217,194,186,0.4)" }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: "#f6f3f2", borderBottom: "1px solid rgba(217,194,186,0.4)" }}>
                      {["Your Height", "Ball Size", "Seated Hip Angle"].map((h) => (
                        <th key={h} className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { height: "Under 5'4\" (163cm)", size: "55cm", angle: "90° or slightly above" },
                      { height: "5'4\" – 5'11\" (163–180cm)", size: "65cm", angle: "90° or slightly above" },
                      { height: "Over 5'11\" (180cm+)", size: "75cm", angle: "90° or slightly above" },
                    ].map((row, i) => (
                      <tr key={row.height} style={{ backgroundColor: i % 2 === 0 ? "#ffffff" : "#faf8f7", borderBottom: "1px solid rgba(217,194,186,0.2)" }}>
                        <td className="px-4 py-3 font-medium" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{row.height}</td>
                        <td className="px-4 py-3 font-semibold" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{row.size}</td>
                        <td className="px-4 py-3" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{row.angle}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs mt-3" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>When seated on the ball, your hips should be at or slightly higher than knee height for correct pelvic alignment.</p>
            </div>

            {/* Exercises */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>6 exercises to start with</h2>
              <div className="space-y-3">
                {EXERCISES.map((ex) => (
                  <div key={ex.name} className="flex items-start gap-4 rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <div className="flex-1">
                      <p className="text-sm font-semibold mb-0.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{ex.name}</p>
                      <p className="text-xs" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{ex.benefit}</p>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{ex.equipment}</span>
                      <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: "#f0f7f1", color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>{ex.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Further reading */}
            <div>
              <h2 className="text-2xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="Best Pilates Equipment for Home Practice" excerpt="The complete guide to building a home practice — mats, bands, rings, and more." href="/blog/best-pilates-equipment-for-home-practice" category="Equipment" readTime="10 min read" date="May 2026" imageUrl="/pictures/elena-kloppenburg-erUC4fTtCuo-unsplash.jpg" />
                <ArticleCard title="Best Home Pilates Reformer" excerpt="Every budget covered — from AeroPilates entry models to Balanced Body professional machines." href="/blog/best-home-pilates-reformer" category="Equipment" readTime="11 min read" date="May 2026" imageUrl="/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a Pilates studio near you" subtitle="Explore our curated city guides to find the best Pilates instruction worldwide." showSearch searchPlaceholder="Ask: best Pilates studios in Berlin…" />
      </main>
      <Footer />
    </>
  );
}
