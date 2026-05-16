import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Reformer with Tower (2026): Complete Home Studio Guide | Pilates Collective Club",
  description: "The best Pilates reformer with tower combos — Balanced Body, Merrithew, Align-Pilates compared. What a tower adds and whether the investment is justified.",
  keywords: ["pilates reformer with tower", "best pilates reformer tower combo", "balanced body reformer tower", "merrithew reformer tower", "pilates cadillac tower", "pilates tower attachment", "reformer tower combo 2026", "best home pilates studio setup", "pilates vertical stand tower", "reformer plus tower pilates"],
  openGraph: {
    title: "Best Pilates Reformer with Tower (2026): Complete Home Studio",
    description: "Reformer + tower combos compared — what a tower adds to your practice and which setup is worth the investment.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/pilates-reformer-with-tower",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/roxana-popovici-hiHBILFNah4-unsplash.jpg", width: 1200, height: 630, alt: "Pilates reformer with tower — Pilates Collective Club" }],
  },
  twitter: { card: "summary_large_image", title: "Best Pilates Reformer with Tower (2026)", description: "Complete reformer + tower combos for the serious home Pilates studio.", images: ["https://pilatescollectiveclub.com/pictures/roxana-popovici-hiHBILFNah4-unsplash.jpg"] },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/pilates-reformer-with-tower" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Balanced Body Allegro 2 + Tower Bundle",
    price: "From $4,195",
    verdict: "Best complete home studio setup",
    description: "The Balanced Body Allegro 2 with Tower bundle is the most complete home studio apparatus available short of a full Cadillac. The Allegro 2 is the gold-standard home reformer; the Tower attachment adds a push-through bar, roll-down bar, arm springs, and leg springs at the foot end — giving access to the full tower repertoire in a configuration that doesn't require permanent wall installation. The tower folds with the reformer when not in use. The full spring configuration (four reformer springs plus four tower springs in two pairs) covers the complete reformer and tower exercise library. For serious practitioners who train daily and want the deepest possible home practice, this is the benchmark. Typically purchased as separate components from Balanced Body authorised dealers; combined pricing varies.",
    affiliateUrl: "https://www.amazon.com/s?k=balanced+body+allegro+2+reformer+tower&tag=pilatescollective-20",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "Align-Pilates H1 Reformer with Tower",
    price: "From $2,800",
    verdict: "Best value reformer + tower bundle",
    description: "The Align-Pilates H1 is the most compelling value in the reformer-with-tower category — a complete reformer and integrated tower system sold as a single bundle at significantly less than the equivalent Balanced Body or Merrithew combination. The reformer component matches the Align-Pilates C2 Pro in build quality (five springs, sealed bearings, adjustable footbar); the tower adds push-through bar, roll-down bar, and arm and leg springs. The H1 does not fold as compactly as the Allegro 2 but represents meaningful savings — approximately $1,400 less than the Balanced Body equivalent for comparable functionality. For practitioners who want the reformer and tower repertoire without the premium price of the major American brands, the H1 is the strongest recommendation in the market.",
    affiliateUrl: "https://www.amazon.com/s?k=align+pilates+h1+reformer+tower&tag=pilatescollective-20",
    tag: "Best Value",
  },
  {
    rank: "03",
    name: "Merrithew SPX Vertical Stand",
    price: "From $799",
    verdict: "Best tower add-on for existing Merrithew owners",
    description: "The Merrithew SPX Vertical Stand is the tower system designed specifically for the At Home SPX and SPX Max reformers. It attaches to the foot end of the reformer, adding a push-through bar (top-loaded and bottom-loaded), arm springs, and leg springs for the STOTT PILATES tower repertoire. For practitioners who already own a Merrithew reformer, the Vertical Stand is the natural expansion — all STOTT PILATES tower exercises are designed around this specific combination, and the spring colours match the reformer's system for familiar cuing. For practitioners who don't yet own a reformer, note that the Vertical Stand is not a standalone product — it requires a compatible Merrithew base machine.",
    affiliateUrl: "https://www.amazon.com/s?k=merrithew+spx+vertical+stand+tower&tag=pilatescollective-20",
    tag: "For Merrithew Owners",
  },
  {
    rank: "04",
    name: "Balanced Body Wall Tower",
    price: "From $1,195",
    verdict: "Most space-efficient tower solution",
    description: "The Balanced Body Wall Tower mounts directly to wall studs and operates completely independently of a reformer — making it the most space-efficient professional tower solution for home studios. It includes a full push-through bar, roll-down bar, arm springs, and leg springs, and can be used for the complete tower repertoire without a reformer in the room. The wall-mount installation is permanent (requires two wall studs 16\" or 24\" apart); professional installation is recommended. For studios where floor space is extremely limited, the Wall Tower serves as both a dedicated tower and a mat-work station. Compatible with Balanced Body reformers when positioned correctly. A serious piece of apparatus for a serious home studio.",
    affiliateUrl: "https://www.amazon.com/s?k=balanced+body+wall+tower+pilates&tag=pilatescollective-20",
    tag: "Wall-Mounted",
  },
  {
    rank: "05",
    name: "Balanced Body Tower Conversion Kit",
    price: "From $699",
    verdict: "Best affordable tower add-on for Allegro 2 owners",
    description: "The Balanced Body Tower Conversion Kit is the add-on for existing Allegro 2 owners who want to extend into tower work without purchasing the full bundle. The kit includes the vertical frame, push-through bar assembly, roll-down bar, and the arm and leg springs needed for the full Balanced Body tower repertoire. Installation attaches to the existing Allegro 2 foot platform. The kit effectively converts the Allegro 2 into the complete reformer-and-tower system without replacing the existing machine — the most economical path to the complete setup for practitioners who already own the reformer. Compatibility: designed specifically for Balanced Body Allegro 2 and Studio Reformer. Not compatible with other brand reformers.",
    affiliateUrl: "https://www.amazon.com/s?k=balanced+body+tower+conversion+kit+allegro&tag=pilatescollective-20",
    tag: "Upgrade Path",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Reformer with Tower (2026): The Complete Home Studio Guide",
      "description": "The best Pilates reformer with tower combos — Balanced Body, Merrithew, Align-Pilates compared. What a tower adds and whether the investment is justified.",
      "url": "https://pilatescollectiveclub.com/blog/pilates-reformer-with-tower",
      "datePublished": "2026-05-16",
      "dateModified": "2026-05-16",
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
        { "@type": "Question", "name": "Is a Pilates tower the same as a Cadillac?", "acceptedAnswer": { "@type": "Answer", "text": "No. A tower is a partial Cadillac — it provides push-through bar, roll-down bar, and arm and leg spring work but lacks the trapeze, overhead bar, and full spring configuration of a standalone Cadillac. A tower covers 60–70% of the Cadillac repertoire." } },
        { "@type": "Question", "name": "Can I add a tower to any reformer?", "acceptedAnswer": { "@type": "Answer", "text": "Generally, no. Most tower systems are designed for specific reformer brands and models. Always verify compatibility before purchasing a tower add-on. The Align-Pilates H1 is sold as a pre-matched reformer + tower bundle, which eliminates compatibility concerns." } },
        { "@type": "Question", "name": "Do I need a tower as a beginner?", "acceptedAnswer": { "@type": "Answer", "text": "No. The tower is appropriate for intermediate-to-advanced practitioners with an established reformer foundation. Beginners should focus on the reformer repertoire before adding tower work." } },
        { "@type": "Question", "name": "What is the minimum ceiling height for tower work?", "acceptedAnswer": { "@type": "Answer", "text": "For most push-through bar exercises, 2.1m minimum. For arm spring and leg spring work, standard ceiling heights are sufficient. If your ceiling is under 2.1m, check specific exercise requirements with your instructor before purchasing a tower." } },
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
              Best Pilates Reformer with Tower (2026):<br /><span style={{ color: "#8b4a31" }}>The Complete Home Studio Guide</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 10 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              A reformer is the foundation of a home Pilates studio. A tower is what transforms that foundation into a complete apparatus practice. This guide explains what a Pilates tower actually adds to your practice, who needs one, and which reformer-and-tower combination represents the best investment at each price point.
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/roxana-popovici-hiHBILFNah4-unsplash.jpg" alt="Pilates reformer with tower — complete home studio apparatus setup" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            {/* What does a Pilates tower actually do? */}
            <div className="mb-16 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What does a Pilates tower actually do?</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                A tower — also called a vertical stand, or half-Cadillac — attaches to the foot end of a reformer and adds a vertical frame carrying additional springs, a push-through bar, a roll-down bar, and arm and leg springs. It is not a full Cadillac, which is a standalone apparatus approximately 2.1m tall. But it brings approximately 60–70% of the Cadillac repertoire within reach of a standard reformer setup, without requiring a separate apparatus or a dedicated studio footprint.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The tower exercises are distinct from reformer exercises in meaningful ways. The push-through bar work — Spine Stretch, Back Bend, Tower series — loads the spine in extension and flexion that the reformer carriage cannot achieve. The arm spring series develops shoulder girdle strength through ranges of motion unavailable on the reformer. The roll-down bar is one of the most effective tools in the full apparatus system for spinal articulation and flexibility, providing spring-assisted resistance through the full arc of a standing roll-down.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Who needs a tower: serious practitioners who have exhausted the reformer repertoire and want to continue developing their practice. Practitioners working with an instructor who programs tower work into their sessions. Instructors equipping a home teaching studio who need to offer the broadest possible apparatus repertoire. The tower is not a beginner purchase — the tower repertoire is typically introduced after a strong reformer and mat foundation has been established.
              </p>
            </div>

            {/* Four buying criteria cards */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Four things to consider before buying</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    heading: "Tower vs full Cadillac",
                    body: "A tower gives access to approximately 60–70% of Cadillac exercises. If you want the full trapeze, mat work, and overhead bars of a classic Cadillac, budget for a full Cadillac ($8,000–$12,000+). If you want to add tower work to an existing reformer practice, a tower is the right and considerably more economical choice.",
                  },
                  {
                    heading: "Reformer compatibility",
                    body: "Most tower systems are designed for specific reformer brands. Balanced Body towers require Balanced Body reformers; the Merrithew Vertical Stand requires Merrithew reformers. The Align-Pilates H1 is an exception — designed as a single integrated reformer-and-tower unit. Always verify compatibility before purchasing a tower add-on.",
                  },
                  {
                    heading: "Spring configuration",
                    body: "A good tower system should include both push-through bar springs (heavy) and arm and leg springs (lighter). Check the full spring configuration before buying — some budget towers have limited spring options that restrict the range of exercises available.",
                  },
                  {
                    heading: "Space requirements",
                    body: "A reformer with tower setup requires approximately 2.4m × 0.7m of clear floor space plus 2m+ ceiling height for push-through bar exercises. The wall-mounted tower option is the exception — it conserves floor space at the cost of permanent installation. Measure your space carefully before purchasing.",
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
                  <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Reformer + Tower Setups · Expert-Reviewed</p>
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
              <h2 className="text-2xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tower vs full Cadillac: when to upgrade</h2>
              <div className="mb-6">
                <p className="text-sm font-semibold mb-3 uppercase tracking-[0.15em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Start with a reformer + tower if:</p>
                <ul className="space-y-2">
                  {[
                    "You have a strong reformer practice and want the tower repertoire within a reasonable budget.",
                    "Your ceiling height is under 2.2m — a full Cadillac requires more vertical clearance.",
                    "You are an instructor teaching privately from home with space and budget constraints.",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                      <span className="font-semibold shrink-0" style={{ color: "#8b4a31" }}>–</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-6">
                <p className="text-sm font-semibold mb-3 uppercase tracking-[0.15em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Consider a full Cadillac if:</p>
                <ul className="space-y-2">
                  {[
                    "You are a full-time working Pilates instructor whose practice demands the complete apparatus repertoire.",
                    "Your practice includes extensive trapeze work, overhead bar, and mat spring exercises that a tower cannot provide.",
                    "You have a dedicated studio space with 2.4m+ ceilings and the budget to match.",
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
                  Reformer + tower bundle: $2,800–$4,200. Full Cadillac / Trapeze Table: $8,000–$12,000+. The functional overlap justifies the tower for most home practitioners — you access 60–70% of the Cadillac repertoire at roughly a quarter of the price.
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
                    a: "No. A tower is a partial Cadillac — it provides push-through bar, roll-down bar, and arm and leg spring work but lacks the trapeze, overhead bar, and full spring configuration of a standalone Cadillac. A tower covers 60–70% of the Cadillac repertoire.",
                  },
                  {
                    q: "Can I add a tower to any reformer?",
                    a: "Generally, no. Most tower systems are designed for specific reformer brands and models. Always verify compatibility before purchasing a tower add-on. The Align-Pilates H1 is sold as a pre-matched reformer + tower bundle, which eliminates compatibility concerns.",
                  },
                  {
                    q: "Do I need a tower as a beginner?",
                    a: "No. The tower is appropriate for intermediate-to-advanced practitioners with an established reformer foundation. Beginners should focus on the reformer repertoire before adding tower work.",
                  },
                  {
                    q: "What is the minimum ceiling height for tower work?",
                    a: "For most push-through bar exercises, 2.1m minimum. For arm spring and leg spring work, standard ceiling heights are sufficient. If your ceiling is under 2.1m, check specific exercise requirements with your instructor before purchasing a tower.",
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
