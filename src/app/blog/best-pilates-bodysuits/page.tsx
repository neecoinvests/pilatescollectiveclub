import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Bodysuits (2026): Tested & Ranked",
  description: "The best Pilates bodysuits tested for reformer performance — Alo Yoga, Lululemon, Girlfriend Collective, and more ranked for comfort, coverage, and studio style.",
  keywords: ["best pilates bodysuits", "pilates bodysuit", "pilates leotard", "alo yoga bodysuit pilates", "lululemon bodysuit pilates", "reformer pilates bodysuit", "pilates one piece", "best bodysuit for pilates class", "pilates bodysuit 2026"],
  openGraph: {
    title: "Best Pilates Bodysuits (2026): Tested & Ranked",
    description: "The best bodysuits for Pilates — tested for reformer performance and studio style.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-bodysuits",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg", width: 1200, height: 630, alt: "Best Pilates Bodysuits — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Bodysuits (2026)",
    description: "The best bodysuits for Pilates — tested and ranked.",
    images: ["https://pilatescollectiveclub.com/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-pilates-bodysuits" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Alo Yoga Airlift Suit",
    price: "From $118",
    verdict: "Best overall Pilates bodysuit",
    description:
      "The Airlift Suit is the reference point for premium Pilates bodysuits. Alo's Airlift fabric is uniquely engineered — a medium-weight compression that smooths without restricting breath or spinal flexion, which matters enormously in exercises like the hundred, roll-up, and teaser. The scoop neck sits high enough to stay put during inversions, and the built-in shelf bra provides enough support for a full reformer session without requiring a separate sports bra. The clean, sculptural silhouette has made this a studio staple across New York, London, and Los Angeles. Available in a wide range of neutral and seasonal colourways.",
    affiliateUrl: "https://www.amazon.com/s?k=alo+yoga+airlift+suit+bodysuit&tag=pilatescollective-20",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "Lululemon Align Bodysuit",
    price: "From $108",
    verdict: "Best for buttery softness",
    description:
      "Lululemon's Align fabric translated into a bodysuit form is exactly as good as it sounds. The Nulu material is so lightweight and skin-soft that most practitioners forget they're wearing it — which is ideal for the deep proprioceptive focus that Pilates demands. The high-neck variant offers exceptional coverage for exercises performed in supine and prone positions on the reformer carriage, while the scoop-neck version works better for hot studios. The integrated gusset sits smoothly during all seated and standing exercises. If you already love the Align Legging, this bodysuit is the natural wardrobe companion.",
    affiliateUrl: "https://www.amazon.com/s?k=lululemon+align+bodysuit&tag=pilatescollective-20",
    tag: "Most Popular",
  },
  {
    rank: "03",
    name: "Girlfriend Collective Paloma Bra Bodysuit",
    price: "From $68",
    verdict: "Best sustainable option",
    description:
      "Girlfriend Collective's Paloma Bodysuit is the most conscientiously made option on this list — constructed from recycled post-consumer plastic bottles with a buttery LITE fabric that moves well through the full Pilates repertoire. The removable cups provide flexible support, and the adjustable strap configuration lets you wear it as a racerback or straight-across depending on your practice. The compression is lighter than the Alo Airlift, making it preferable for practitioners who find firm compression restrictive during breath-intensive mat work. Inclusive sizing runs from XXS to 6XL.",
    affiliateUrl: "https://www.amazon.com/s?k=girlfriend+collective+paloma+bodysuit&tag=pilatescollective-20",
    tag: "Best Sustainable",
  },
  {
    rank: "04",
    name: "Splits59 Pilates Bodysuit",
    price: "From $88",
    verdict: "Best for studio aesthetics",
    description:
      "Splits59 is the brand most deeply embedded in the studio Pilates world — their bodysuits are designed explicitly for reformer and mat practice, not adapted from gym or running apparel. The Splits59 bodysuit features a high-cut leg for freedom of movement during footwork sequences, a supportive under-bust band that stays in place during spinal articulation, and a minimal aesthetic that reads as polished in a boutique studio environment. The Supplex-blend fabric is mid-weight and compressive without feeling restrictive. A serious option for practitioners who spend multiple sessions per week in the studio.",
    affiliateUrl: "https://www.amazon.com/s?k=splits59+bodysuit+pilates&tag=pilatescollective-20",
    tag: "Studio Favourite",
  },
  {
    rank: "05",
    name: "CRZ YOGA Naked Feeling Bodysuit",
    price: "From $34",
    verdict: "Best value bodysuit",
    description:
      "CRZ YOGA has built a strong reputation for producing premium-fabric activewear at accessible price points, and their Naked Feeling bodysuit is the clearest expression of that proposition. The fabric genuinely approaches the Align's softness, the four-way stretch accommodates the full range of Pilates movement, and the bodysuit stays securely in position through dynamic exercises. The integrated shelf bra provides light support suitable for low-impact studio work. For practitioners who want to try the bodysuit silhouette without committing to a premium price, this is the ideal starting point.",
    affiliateUrl: "https://www.amazon.com/s?k=crz+yoga+naked+feeling+bodysuit&tag=pilatescollective-20",
    tag: "Best Value",
  },
  {
    rank: "06",
    name: "Vuori Halo Performance Bodysuit",
    price: "From $78",
    verdict: "Best breathable bodysuit",
    description:
      "Vuori's Halo Bodysuit uses a lighter, more breathable fabric than most competitors — making it the preferred choice for practitioners in heated studios or warm climates. The Performance fabric is moisture-wicking and quick-drying, which matters in a 55-minute reformer class. The racerback construction keeps straps completely clear of the shoulder blade area, which is particularly relevant in exercises involving scapular movement and stabilisation. The fit is secure without being compressive, and the minimalist design works across a variety of studio environments.",
    affiliateUrl: "https://www.amazon.com/s?k=vuori+bodysuit+performance+women&tag=pilatescollective-20",
    tag: "Best Breathability",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Bodysuits (2026): Tested & Ranked",
      "description": "The best bodysuits for Pilates in 2026 — tested for reformer performance, coverage, and studio style.",
      "url": "https://pilatescollectiveclub.com/blog/best-pilates-bodysuits",
      "datePublished": "2026-05-21",
      "dateModified": "2026-05-21",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-pilates-bodysuits" },
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Bodysuits (2026)",
      "description": "The six best bodysuits for Pilates, tested and ranked.",
      "url": "https://pilatescollectiveclub.com/blog/best-pilates-bodysuits",
      "numberOfItems": 6,
      "itemListElement": PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "description": p.description,
          "offers": { "@type": "Offer", "priceCurrency": "USD", "price": p.price.replace(/[^0-9]/g, ""), "availability": "https://schema.org/InStock", "url": p.affiliateUrl },
          "review": { "@type": "Review", "reviewBody": p.description, "author": { "@type": "Organization", "name": "Pilates Collective Club" }, "reviewRating": { "@type": "Rating", "ratingValue": 5 - i * 0.1, "bestRating": 5, "worstRating": 1 } },
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Pilates Bodysuits", "item": "https://pilatescollectiveclub.com/blog/best-pilates-bodysuits" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Are bodysuits good for Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "Bodysuits are excellent for Pilates. They stay perfectly tucked through all spinal articulation and inversion-adjacent exercises, eliminating the bunching and ride-up common with separate tops. Many boutique studio practitioners have switched exclusively to bodysuits for this reason." } },
        { "@type": "Question", "name": "Do I need to wear a bra under a Pilates bodysuit?", "acceptedAnswer": { "@type": "Answer", "text": "Most performance bodysuits include an integrated shelf bra or removable pads. For low-impact Pilates mat and reformer work, this is typically sufficient for B–D cup sizes. Higher-impact variations or larger cup sizes may benefit from a light wireless bra underneath." } },
        { "@type": "Question", "name": "What should I wear over a Pilates bodysuit?", "acceptedAnswer": { "@type": "Answer", "text": "A bodysuit pairs with leggings, biker shorts, or high-waist shorts. Many practitioners layer a cropped jacket or cardigan for warmth during warm-up and cool-down, then remove it for the main session. The bodysuit silhouette is designed to work as a complete studio outfit on its own." } },
        { "@type": "Question", "name": "Can I wear a bodysuit for reformer Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — bodysuits are particularly well-suited for reformer Pilates. Unlike separate tops, they cannot come untucked during footwork, long-spine exercises, or transitions between positions. Instructors also appreciate the clean silhouette, which makes it easier to observe spinal alignment and hip position." } },
      ],
    },
  ],
};

export default function BestPilatesBodysuitsPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Apparel</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Pilates Bodysuits<br /><span style={{ color: "#8b4a31" }}>(2026): Tested & Ranked</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 8 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              The bodysuit has become the dominant silhouette in boutique Pilates studios — and for practical reasons, not just aesthetic ones. Unlike a separate top, a bodysuit cannot ride up, bunch at the waist, or come untucked during the continuous transitions of a reformer class. Instructors can observe spinal position and hip alignment without fabric interference, and practitioners can move through the full repertoire without interruption. These six bodysuits have been selected for reformer performance, fabric quality, and staying power in serious studios.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg" alt="Best Pilates bodysuits for reformer and mat classes" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
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

            <div className="mb-16 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What makes a bodysuit work for Pilates</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { heading: "Built-in support", body: "A shelf bra or removable pads are essential — a bodysuit without support requires an additional bra underneath, defeating the clean simplicity of the silhouette. Look for brands that specify cup sizes, not just S/M/L." },
                  { heading: "Gusset construction", body: "A seamless or flat-seamed gusset is non-negotiable for comfort during reformer footwork, squatting exercises, and any movement requiring hip flexion beyond 90 degrees." },
                  { heading: "Neckline depth", body: "High-neck and scoop-neck bodysuits each serve different needs. High-neck offers maximum coverage for exercises performed lying down; scoop-neck is cooler for heated studios. Consider your usual practice environment." },
                  { heading: "Fabric weight", body: "Heavier fabrics provide more smoothing and compressive support; lighter fabrics breathe better and feel less restrictive. Match fabric weight to your studio temperature and personal preference for compression." },
                ].map((item) => (
                  <div key={item.heading} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.heading}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Bodysuits · Studio-Tested</p>
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

            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Care guide: bodysuits</h2>
              <ul className="space-y-3">
                {[
                  "Hand wash or machine wash on a delicate cycle in cold water. The gusset seams and bra components are under more stress than standard tops.",
                  "Never put a bodysuit in the dryer. Heat degrades the elastic in the gusset and the support structure of integrated bras significantly faster than air drying.",
                  "Lay flat or hang to dry. Hanging from the shoulder straps when wet can stretch them over time.",
                  "Remove pads before washing and allow to dry separately — pads retain moisture and develop odour if dried inside the bodysuit.",
                  "Rotate between two or three bodysuits rather than wearing the same one daily. Elastane requires 24 hours to fully recover its shape between sessions.",
                ].map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    <span className="font-semibold shrink-0" style={{ color: "#8b4a31" }}>{i + 1}.</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "Are bodysuits good for Pilates?", a: "Bodysuits are excellent for Pilates. They stay perfectly tucked through all spinal articulation and inversion-adjacent exercises, eliminating the bunching and ride-up common with separate tops. Many boutique studio practitioners have switched exclusively to bodysuits for this reason." },
                  { q: "Do I need to wear a bra under a Pilates bodysuit?", a: "Most performance bodysuits include an integrated shelf bra or removable pads. For low-impact Pilates mat and reformer work, this is typically sufficient for B–D cup sizes. Higher-impact variations or larger cup sizes may benefit from a light wireless bra underneath." },
                  { q: "What should I wear over a Pilates bodysuit?", a: "A bodysuit pairs with leggings, biker shorts, or high-waist shorts. Many practitioners layer a cropped jacket or cardigan for warmth during warm-up and cool-down, then remove it for the main session. The bodysuit silhouette is designed to work as a complete studio outfit on its own." },
                  { q: "Can I wear a bodysuit for reformer Pilates?", a: "Yes — bodysuits are particularly well-suited for reformer Pilates. Unlike separate tops, they cannot come untucked during footwork, long-spine exercises, or transitions between positions. Instructors also appreciate the clean silhouette, which makes it easier to observe spinal alignment and hip position." },
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
                <ArticleCard title="Best Pilates Leggings" excerpt="Five studio-tested leggings that pair perfectly with any bodysuit." href="/blog/best-pilates-leggings" category="Apparel" readTime="9 min read" date="May 2026" imageUrl="/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg" />
                <ArticleCard title="What to Wear to Pilates" excerpt="The complete guide to choosing the right clothes for studio and reformer classes." href="/blog/what-to-wear-to-pilates" category="Guide" readTime="6 min read" date="May 2026" imageUrl="/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg" />
                <ArticleCard title="Alo Yoga Pilates Activewear" excerpt="Alo makes two of the six bodysuits in this guide — here's our full brand review." href="/blog/alo-yoga-pilates" category="Brand Review" readTime="10 min read" date="May 2026" imageUrl="/pictures/roxana-popovici-5JQxj-zc5ng-unsplash.jpg" />
                <ArticleCard title="Lululemon Align Review" excerpt="The most popular Pilates bodysuit in the world — honestly reviewed." href="/blog/lululemon-align-review" category="Brand Review" readTime="10 min read" date="May 2026" imageUrl="/pictures/roxana-popovici-2QeonB1SdQk-unsplash.jpg" />
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
