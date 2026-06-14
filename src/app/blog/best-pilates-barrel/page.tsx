import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Barrel (2026): Arc, Spine Corrector & Ladder Barrel Compared | Pilates Collective Club",
  description: "The best Pilates barrels in 2026 — Balanced Body Arc, Stamina AeroPilates, Merrithew, Peak Pilates, and Pilates Designs Ladder Barrel reviewed. What each does and who needs it.",
  keywords: ["best pilates barrel", "pilates barrel", "pilates arc barrel", "pilates spine corrector", "pilates ladder barrel", "balanced body arc barrel", "merrithew spine corrector", "best pilates barrel 2026", "pilates barrel for home", "pilates spine corrector review"],
  openGraph: {
    title: "Best Pilates Barrel (2026): Arc, Spine Corrector & Ladder Barrel",
    description: "Three types of Pilates barrel — what each does, who needs it, and which brands make the best versions.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-barrel",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-studio-shelf-props.png", width: 1200, height: 630, alt: "Best Pilates barrel guide — Pilates Collective Club" }],
  },
  twitter: { card: "summary_large_image", title: "Best Pilates Barrel (2026)", description: "Arc vs Spine Corrector vs Ladder Barrel — what each does and which to buy.", images: ["https://pilatescollectiveclub.com/pictures/stitch-studio-shelf-props.png"] },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-pilates-barrel" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Balanced Body Arc Barrel",
    price: "From $375",
    verdict: "Best first barrel for home practice",
    description: "The Balanced Body Arc is the most versatile entry point into barrel work — a half-round foam and vinyl-upholstered apparatus that functions simultaneously as a spine support, a backbend prop, an abdominal challenge tool, and a hip flexor opener. Placed with the curved side down, it supports backbend extensions (Cobra, Swan variations) and hip flexor stretches that mat work cannot replicate. Flipped with the flat side down, it becomes a balance and core challenge surface. It is small enough to store upright against a wall and light enough to carry in one hand. The Arc is distinct from the Spine Corrector — it has a lower, less pronounced curve, better suited to supported extension work and accessible to a wider range of experience levels. For practitioners who want barrel work without the price or storage footprint of a Spine Corrector or Ladder Barrel, the Balanced Body Arc is the correct first purchase. Available directly from Balanced Body and on Amazon.",
    affiliateUrl: "https://www.amazon.com/s?k=balanced+body+arc+barrel+pilates&tag=pilatescollective-20",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "Stamina AeroPilates Spine Corrector",
    price: "From $149",
    verdict: "Best affordable spine corrector",
    description: "The Stamina AeroPilates Spine Corrector is the most accessible entry into the dedicated spine corrector format — a foam-covered barrel apparatus designed for the core spine corrector exercises (back extension, hip flexor opening, side stretches, and chest opener work) at a price point significantly below the professional studio options. For practitioners who want to explore the spine corrector repertoire before committing to a professional-grade apparatus, or who simply need an effective barrel at a budget-friendly price, the Stamina unit performs reliably. The foam is adequately firm for supported extension work; the base is stable on a non-slip mat. It does not match the upholstery quality or longevity of the Balanced Body or Merrithew equivalents, but it performs the core functions correctly. An honest, dependable option at an entry price point.",
    affiliateUrl: "https://www.amazon.com/s?k=stamina+aeropilates+spine+corrector&tag=pilatescollective-20",
    tag: "Best Value",
  },
  {
    rank: "03",
    name: "Merrithew Spine Corrector",
    price: "From $399",
    verdict: "Best studio-grade spine corrector",
    description: "The Merrithew Spine Corrector is the professional studio standard for STOTT PILATES-trained instructors — a taller, more pronounced curve than the Arc Barrel, designed specifically for the classical Spine Corrector series. The Merrithew version maintains precise geometry for the Side Stretch, Hip Circles, Twist, Back Extension, and the full Spine Corrector series as developed in the STOTT PILATES curriculum. Upholstery quality is professional-grade and designed for studio use under daily instruction. For practitioners whose training follows the STOTT PILATES method, or who work with a Merrithew-certified instructor, the Merrithew Spine Corrector is the natural recommendation. The greater curve height compared to the Arc is significant — it changes the geometry of the exercises and allows the full classical sequence that the Arc cannot substitute for.",
    affiliateUrl: "https://www.amazon.com/s?k=merrithew+spine+corrector+pilates&tag=pilatescollective-20",
    tag: "Studio Grade",
  },
  {
    rank: "04",
    name: "Peak Pilates Spine Corrector",
    price: "From $389",
    verdict: "Best spine corrector for Peak Pilates users",
    description: "The Peak Pilates Spine Corrector is the spine corrector designed for use within the Peak Pilates apparatus ecosystem — compatible with the Peak MVe Reformer and Peak Pilates studio setups, and used in Peak-certified instructor training. The curve geometry and upholstery specification are professional-grade; the apparatus performs the complete spine corrector repertoire including back extension, side stretches, hip flexor opening, and the classical chest opener series. For practitioners who train in Peak Pilates-certified studios, or whose instructors use Peak apparatus, the Peak Spine Corrector is the correct brand match. Constructed to the same durability standards as the other Peak apparatus, it is suitable for both home use and small-studio teaching.",
    affiliateUrl: "https://www.amazon.com/s?k=peak+pilates+spine+corrector&tag=pilatescollective-20",
    tag: "Peak Pilates",
  },
  {
    rank: "05",
    name: "Pilates Designs Ladder Barrel",
    price: "From $599",
    verdict: "Best ladder barrel for advanced practice",
    description: "The Pilates Designs Ladder Barrel is the most accessible entry into full ladder barrel work — a complete apparatus combining a large rounded barrel mounted on a base with a horizontal rung ladder extending from one end. The ladder barrel is categorically different from the spine corrector: it enables exercises (full backbend over the barrel, side stretching with feet hooked into the ladder rungs, hanging series for spinal decompression) that require both the barrel and the ladder structure together. These are advanced exercises demanding significant baseline strength, spinal flexibility, and body awareness. The Pilates Designs version makes the ladder barrel format available at a significantly lower price than the Balanced Body equivalent, without the professional-grade upholstery or long-term durability of studio apparatus. For serious home practitioners ready for the advanced ladder barrel repertoire, it is a meaningful and well-priced option.",
    affiliateUrl: "https://www.amazon.com/s?k=pilates+designs+ladder+barrel&tag=pilatescollective-20",
    tag: "Advanced",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Barrel (2026): Arc, Spine Corrector & Ladder Barrel Compared",
      "description": "The best Pilates barrels in 2026 — Balanced Body Arc, Stamina AeroPilates, Merrithew, Peak Pilates, and Pilates Designs Ladder Barrel reviewed. What each does and who needs it.",
      "url": "https://pilatescollectiveclub.com/blog/best-pilates-barrel",
      "datePublished": "2026-06-14",
      "dateModified": "2026-06-14",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-studio-shelf-props.png", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-pilates-barrel" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Pilates Barrel", "item": "https://pilatescollectiveclub.com/blog/best-pilates-barrel" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is the difference between a spine corrector and a ladder barrel?", "acceptedAnswer": { "@type": "Answer", "text": "The spine corrector is a standalone barrel apparatus — a curved surface for back extension, hip flexor opening, and abdominal work. The ladder barrel combines the barrel with a horizontal rung ladder, enabling advanced exercises where the practitioner hooks their feet into the rungs and drapes over the barrel in extension or lateral flexion. The ladder barrel is larger, more expensive, and requires significantly more strength and flexibility. Most practitioners begin with the spine corrector or arc before progressing to the ladder barrel." } },
        { "@type": "Question", "name": "Who needs a Pilates barrel?", "acceptedAnswer": { "@type": "Answer", "text": "Practitioners with tight hip flexors, back issues, or those wanting to deepen extension work. The barrel provides supported back extension that mat work and the reformer cannot fully replicate. It is particularly valuable for people with limited thoracic mobility, those working on spinal articulation, and practitioners seeking hip flexor flexibility gains. Extension over the barrel is a category of movement largely absent from mat-only practice." } },
        { "@type": "Question", "name": "What exercises does a Pilates barrel do?", "acceptedAnswer": { "@type": "Answer", "text": "Swan and back extension (supported by the barrel curve), hip flexor stretching (lying supine over the barrel), chest opener work, side stretches in lateral flexion, abdominal challenges (working off the edge of the barrel with hips elevated), and the full classical Spine Corrector series including Hip Circles and Twist. The ladder barrel adds hanging in extension from the rungs and full backbend work." } },
        { "@type": "Question", "name": "Which barrel should I buy first?", "acceptedAnswer": { "@type": "Answer", "text": "The Balanced Body Arc Barrel for most practitioners — it is the most versatile, most affordable, and easiest to store. Once the arc repertoire feels familiar and if your training follows a classical or STOTT approach, the Merrithew or Peak Spine Corrector is the natural next step. The ladder barrel is a committed purchase for advanced practitioners with space for permanent apparatus." } },
      ],
    },
  ],
};

export default function BestPilatesBarrelPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Barrels</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Pilates Barrel (2026):<br /><span style={{ color: "#8b4a31" }}>Arc, Spine Corrector & Ladder Barrel Compared</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated June 2026 · 10 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              The Pilates barrel is one of the least understood and most underutilised pieces of apparatus in the system — regularly present in good studios, rarely seen in home practice. There are three distinct barrel types (Arc, Spine Corrector, Ladder Barrel), each serving different functions and suited to different levels of experience. This guide explains what each does, who it is for, and which brands make the best versions.
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-studio-shelf-props.png" alt="Pilates studio shelf with cork blocks and props — barrel guide" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            {/* Three barrels explained */}
            <div className="mb-16 mt-4">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Three barrel types, three different purposes</h2>
              <div className="space-y-8">
                <div>
                  <p className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Arc Barrel</p>
                  <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    The most accessible barrel in the system. Its low curved surface supports backbends, opens the hip flexors, and creates an abdominal challenge when working off the edge with hips elevated above heart height. It can be flipped to challenge balance and core stability on the flat side. The Arc is the correct first barrel purchase for most home practitioners: it earns its space consistently, stores easily, and costs a fraction of the Spine Corrector or Ladder Barrel.
                  </p>
                </div>
                <div>
                  <p className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Spine Corrector</p>
                  <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    A taller, more pronounced curve designed specifically for the classical Spine Corrector series — a sequence of exercises that develop spinal articulation, hip flexor flexibility, and deep abdominal control. Where the Arc supports extension, the Spine Corrector develops it: the greater curve height creates the precise geometry needed for the Side Stretch, Hip Circles, Twist, and Back Extension as Joseph Pilates designed them. This is an intermediate to advanced apparatus; most practitioners benefit from instructor introduction before working the full classical series independently.
                  </p>
                </div>
                <div>
                  <p className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Ladder Barrel</p>
                  <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    A full apparatus — a large rounded barrel mounted on a base with a horizontal rung ladder extending from one end. The exercises it enables (full backbend draped over the barrel, side stretching with feet hooked into the rungs, hanging in extension for spinal decompression) require significant baseline strength, flexibility, and body awareness. This is a studio or serious home practitioner purchase: it demands dedicated floor space and a meaningful financial commitment. It is not a beginner apparatus and should not be the first barrel purchase.
                  </p>
                </div>
              </div>
            </div>

            {/* Who needs a barrel */}
            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-2xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Who needs a Pilates barrel?</h2>
              <div className="space-y-4">
                {[
                  { label: "Tight hip flexors", body: "The barrel provides a sustained, well-supported hip flexor stretch that mat work cannot replicate. Practitioners with tight hip flexors from desk work, running, or cycling often find barrel extension work more immediately effective than any other approach." },
                  { label: "Back issues", body: "Supported back extension over the barrel decompresses the lumbar spine and opens the thoracic spine without compressive loading. For practitioners working with a physio-aware instructor on back health, the barrel is often a key tool. Always work under instructor guidance for back conditions." },
                  { label: "Extension work", body: "Practitioners whose practice feels one-dimensional — strong in flexion, limited in extension — will find the barrel opens an entirely new training stimulus. Swan and back extension over the barrel access spinal mobility unavailable in mat or reformer work alone." },
                  { label: "Classical practitioners", body: "The Spine Corrector series is a foundational part of the classical Pilates apparatus program. Practitioners pursuing the full classical method need a Spine Corrector to perform the complete sequence as designed." },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <p className="text-sm font-semibold shrink-0 w-32" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{item.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Buying criteria */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Four things to consider before buying</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { heading: "Which barrel first", body: "For most home practitioners, the Arc is the correct first barrel — it serves the widest range of exercises, stores easily, and costs a fraction of the Spine Corrector or Ladder Barrel. Start here unless a specific classical training context requires a Spine Corrector from the outset." },
                  { heading: "Brand compatibility", body: "Balanced Body and Merrithew barrels are designed for their respective methodological ecosystems. Choose based on your instructor's method. If your teacher is STOTT PILATES-certified, the Merrithew Spine Corrector is the natural recommendation." },
                  { heading: "Curve height", body: "Arc barrels have a lower curve (~20cm); Spine Correctors have a taller curve (~30cm). The height determines which exercises are possible. The full classical Spine Corrector series requires the taller curve — the Arc cannot substitute for it in the exercises that specifically require that geometry." },
                  { heading: "Storage footprint", body: "Arc Barrels are small and light — can be stored upright against a wall. Spine Correctors are heavier and require a dedicated shelf or floor corner. Ladder Barrels require permanent floor space of approximately 100cm × 70cm and should be treated as a fixed studio fixture." },
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-8" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Pilates Barrels · Arc, Spine Corrector & Ladder Barrel</p>

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

              {/* ProductCards */}
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

            {/* Barrel exercises */}
            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-2xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Barrel exercises: what you will actually do</h2>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Arc Barrel — key exercises</p>
                  <ul className="space-y-2">
                    {[
                      "Swan over the Arc — supported back extension that decompresses the lumbar spine and opens the chest without compressive load.",
                      "Abdominal Curl off the Arc edge — working with hips elevated above heart height creates a significantly harder abdominal challenge than standard mat work.",
                      "Hip Flexor Stretch — the Arc's curve provides an ideal surface for a sustained, well-supported hip flexor release in the supine position.",
                      "Side Body stretch — the Arc contour supports a lateral extension that mat work cannot replicate.",
                      "Chest Opener — lying supine over the barrel with arms extended overhead for a supported thoracic extension.",
                    ].map((ex, i) => (
                      <li key={i} className="flex gap-3 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                        <span className="font-semibold shrink-0" style={{ color: "#8b4a31" }}>–</span>
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ borderTop: "1px solid rgba(217,194,186,0.4)", paddingTop: "24px" }}>
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Spine Corrector — key exercises</p>
                  <ul className="space-y-2">
                    {[
                      "Back Extension — the full-height curve supports classical back extension with spinal articulation from tailbone to crown.",
                      "Side Stretch — lateral flexion over the barrel with feet against the base, demanding lateral strength and control.",
                      "Twist — rotational work over the barrel targeting deep thoracic rotation unavailable on the mat or reformer.",
                      "Hip Circles — a demanding hip mobility and abdominal stability exercise native to the classical Spine Corrector series.",
                      "Chest Opener series — the fuller curve enables a deeper thoracic extension than the Arc allows.",
                    ].map((ex, i) => (
                      <li key={i} className="flex gap-3 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                        <span className="font-semibold shrink-0" style={{ color: "#8b4a31" }}>–</span>
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ borderTop: "1px solid rgba(217,194,186,0.4)", paddingTop: "24px" }}>
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Ladder Barrel — key exercises</p>
                  <ul className="space-y-2">
                    {[
                      "Full backbend over the barrel — a dramatic extension requiring both spinal flexibility and the strength to control the descent.",
                      "Side stretching series — lying draped over the barrel in lateral flexion with feet hooked into the ladder rungs.",
                      "Hanging from the ladder in extension — traction-assisted spinal decompression and shoulder girdle opening unavailable on any other apparatus.",
                    ].map((ex, i) => (
                      <li key={i} className="flex gap-3 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                        <span className="font-semibold shrink-0" style={{ color: "#8b4a31" }}>–</span>
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "What is the difference between a spine corrector and a ladder barrel?",
                    a: "The spine corrector is a standalone barrel apparatus — a curved surface for back extension, hip flexor opening, and abdominal work. The ladder barrel combines the barrel with a horizontal rung ladder, enabling advanced exercises where the practitioner hooks their feet into the rungs and drapes over the barrel in extension or lateral flexion. The ladder barrel is larger, more expensive, and requires significantly more strength and flexibility. Most practitioners begin with the arc or spine corrector before progressing to the ladder barrel.",
                  },
                  {
                    q: "Who needs a Pilates barrel?",
                    a: "Practitioners with tight hip flexors, back issues, or those wanting to deepen extension work. The barrel provides supported back extension that mat work and the reformer cannot fully replicate. It is particularly valuable for people with limited thoracic mobility, those working on spinal articulation, and practitioners seeking hip flexor flexibility gains.",
                  },
                  {
                    q: "Can a beginner use a Pilates barrel?",
                    a: "The Arc Barrel, yes — with basic movement competence and ideally some instructor guidance for the first session. The Spine Corrector, after a foundation of reformer or mat work (typically 6+ months). The Ladder Barrel should only be approached with instructor guidance due to the advanced nature of the exercises.",
                  },
                  {
                    q: "Which barrel should I buy first?",
                    a: "The Balanced Body Arc Barrel for most practitioners — it is the most versatile, most affordable, and easiest to store. Once the Arc repertoire feels familiar, the Merrithew or Peak Spine Corrector is the natural next step for practitioners following a classical or STOTT approach. The ladder barrel is a committed purchase for advanced practitioners with dedicated studio space.",
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
                <ArticleCard title="Best Pilates Chair (Wunda Chair) 2026" excerpt="The original classical apparatus — what the Wunda Chair does and which brand makes the best version." href="/blog/best-pilates-chair" category="Equipment Guide" readTime="10 min read" date="June 2026" imageUrl="/pictures/stitch-props-cork-ring.png" />
                <ArticleCard title="Best Home Pilates Reformer (2026)" excerpt="The best home reformers at every price point — from entry-level to studio-grade." href="/blog/best-home-pilates-reformer" category="Equipment Guide" readTime="10 min read" date="June 2026" imageUrl="/pictures/stitch-reformer-sunlit-minimal.png" />
              </div>
            </div>

          </div>
        </section>

        <CTASection title="Find a studio with full barrel apparatus" subtitle="Our city guides cover studios with the complete Pilates apparatus." />
      </main>
      <Footer />
    </>
  );
}
