import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Balanced Body Studio Reformer Review (2026): Is It Worth $4,700?",
  description: "Balanced Body Studio Reformer reviewed in full — the real flagship Balanced Body reformer sold on Amazon, since the 'Allegro 2' is not a live listing. Carriage, springs, and value compared to Merrithew.",
  keywords: ["balanced body studio reformer review", "balanced body reformer review 2026", "balanced body allegro 2 review", "studio reformer vs merrithew spx", "balanced body studio reformer price", "best balanced body reformer on amazon", "balanced body reformer buy"],
  openGraph: {
    title: "Balanced Body Studio Reformer Review (2026): Honestly Assessed",
    description: "Deep review of the real Balanced Body flagship sold on Amazon — carriage, springs, and whether $4,700 is justified.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/balanced-body-allegro-2-review",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg", width: 1200, height: 630, alt: "Balanced Body Studio Reformer review — Pilates Collective Club" }],
  },
  twitter: { card: "summary_large_image", title: "Balanced Body Studio Reformer Review (2026)", description: "Is the Studio Reformer worth $4,700? An honest deep review of the real Amazon listing.", images: ["https://pilatescollectiveclub.com/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg"] },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/balanced-body-allegro-2-review" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Balanced Body Studio Reformer (Revo Footbar)",
    price: "$4,700",
    verdict: "The real Balanced Body flagship sold on Amazon",
    description: "A note before anything else: this is often searched for as the \"Allegro 2,\" but that model is not a live Amazon listing — we checked and found no working offer for it. The Balanced Body reformer genuinely sold on Amazon, made to order and shipped by Balanced Body, is the Studio Reformer with the Revo footbar. It carries a Strata rock maple frame, five Signature Springs, and full tower compatibility — the same machine that populates certification centres and clinics. One important correction to older coverage of this category: the Studio Reformer does not fold. It is a permanent-installation machine, not a fold-and-store option, so plan floor space accordingly before ordering.",
    affiliateUrl: "https://www.amazon.com/dp/B002XVWIFE?tag=pilatescollective-20",
    tag: "The Real Listing",
  },
  {
    rank: "02",
    name: "Balanced Body Sitting Box Lite",
    price: "$150",
    verdict: "Opens up short box, long box and overhead work",
    description: "Short box, long box and seated work all need a box, and the Sitting Box Lite is the real, currently-live Balanced Body accessory for it — it sits on the carriage rather than mounting to the frame, so it works across Balanced Body's reformer line rather than being model-specific.",
    affiliateUrl: "https://www.amazon.com/dp/B0723DT2JP?tag=pilatescollective-20",
    tag: "Box Work",
  },
  {
    rank: "03",
    name: "Balanced Body Padded Jumpboard",
    price: "$280",
    verdict: "The genuine cardio add-on for this machine",
    description: "Turns the Studio Reformer into low-impact cardio equipment. This is Balanced Body's own jumpboard rather than a generic aftermarket part — confirm it fits your exact footbar configuration before ordering, since mountings are not universal even within one brand's range.",
    affiliateUrl: "https://www.amazon.com/dp/B08CS4LJZ7?tag=pilatescollective-20",
    tag: "Cardio Add-On",
  },
  {
    rank: "04",
    name: "Balanced Body Replacement Reformer Ropes with Clips",
    price: "$35",
    verdict: "Keep a spare set on hand",
    description: "Ropes lose tension gradually rather than failing visibly, and a stretched rope quietly changes the working length of every strap exercise. Order for your exact model and keep a spare set — spring and rope specs are not interchangeable across brands.",
    affiliateUrl: "https://www.amazon.com/dp/B0CYM27QMZ?tag=pilatescollective-20",
    tag: "Maintenance",
  },
  {
    rank: "05",
    name: "Eccentfit Pilates Grip Pads (4-Pack)",
    price: "$7.99",
    verdict: "Cheap insurance for standing and kneeling work",
    description: "A grip pad makes the carriage feel secure for standing and kneeling exercises and protects the upholstery, which is the first thing to look tired on any reformer. Check the pad dimensions against your carriage width before ordering.",
    affiliateUrl: "https://www.amazon.com/dp/B0GGR4QXNH?tag=pilatescollective-20",
    tag: "Accessory",
  },
];

const SPECS = [
  { label: "Sold by", value: "Balanced Body, direct on Amazon" },
  { label: "Price", value: "$4,700" },
  { label: "Frame", value: "Strata rock maple" },
  { label: "Springs", value: "Five Signature Springs" },
  { label: "Footbar", value: "Revo footbar" },
  { label: "Tower compatible", value: "Yes — full tower compatibility" },
  { label: "Storage", value: "Does not fold — a permanent-installation machine, made to order" },
  { label: "Not verified", value: "No live Amazon listing exists for a model called \"Allegro 2\"; do not confuse this with that name" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Balanced Body Studio Reformer Review (2026): The Real Amazon-Sold Flagship, Honestly Assessed",
      "description": "An honest deep review of the Balanced Body Studio Reformer — the real Balanced Body machine sold on Amazon — carriage quality, spring feel, and whether the $4,700 price is justified.",
      "url": "https://pilatescollectiveclub.com/blog/balanced-body-allegro-2-review",
      "datePublished": "2026-05-16",
      "dateModified": "2026-09-22",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/balanced-body-allegro-2-review" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Balanced Body Studio Reformer Review", "item": "https://pilatescollectiveclub.com/blog/balanced-body-allegro-2-review" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is the \"Balanced Body Allegro 2\" sold on Amazon?",
          "acceptedAnswer": { "@type": "Answer", "text": "We could not find a live Amazon offer under that name. The Balanced Body reformer genuinely sold on Amazon, direct from Balanced Body, is the Studio Reformer with the Revo footbar, at $4,700 — that is the real machine this review covers." },
        },
        {
          "@type": "Question",
          "name": "Does the Studio Reformer fold for storage?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. It is a permanent-installation machine, made to order. If you need a reformer that folds for storage, this is not it — check the current listing for any folding Balanced Body or Merrithew model before assuming one exists." },
        },
        {
          "@type": "Question",
          "name": "Does the Studio Reformer include a box?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. A Balanced Body Sitting Box Lite is a real, separately-sold accessory that works on the carriage without mounting to the frame." },
        },
        {
          "@type": "Question",
          "name": "How does the Studio Reformer compare to Merrithew?",
          "acceptedAnswer": { "@type": "Answer", "text": "Merrithew's real Amazon-sold SPX-family machine, the At Home SPX Reformer Package, is $3,349 — a step below the Studio Reformer's $4,700 — and is built around Merrithew's five-spring system with fine light-end gradation, useful for rehab and prenatal work. Balanced Body's accessory ecosystem is deeper and more widely stocked. Neither machine is verified to fold flat for storage." },
        },
        {
          "@type": "Question",
          "name": "Where do I buy the Balanced Body Studio Reformer?",
          "acceptedAnswer": { "@type": "Answer", "text": "Direct from Balanced Body on Amazon, or through Balanced Body authorized dealers. It ships made to order, so expect a lead time rather than immediate stock." },
        },
      ],
    },
  ],
};

export default function BalancedBodyStudioReformerReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>

        {/* Hero section */}
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Equipment Review</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Balanced Body</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Balanced Body Studio Reformer Review (2026):<br /><span style={{ color: "#8b4a31" }}>The Real Amazon-Sold Flagship, Honestly Assessed</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 11 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              This machine is often searched for as the &quot;Allegro 2,&quot; but we could not find a live Amazon listing under that name. The Balanced Body reformer that is genuinely sold on Amazon, direct from Balanced Body, is the Studio Reformer with the Revo footbar, at $4,700. This review covers that real listing honestly: what it actually offers, one important correction — it does not fold — and how it compares to Merrithew.
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image
                src="/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg"
                alt="Balanced Body Studio Reformer — the real Balanced Body machine sold on Amazon, reviewed for home and studio use"
                fill
                className="object-cover"
                style={{ filter: "brightness(0.85)" }}
              />
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            {/* What makes the Studio Reformer different */}
            <div className="mb-16 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What makes the Studio Reformer different</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The Strata rock maple frame is the machine that populates certification centres and clinics, which is the strongest evidence of its build quality: it is the reformer a huge number of instructors trained on before ever considering one for home use. Five Signature Springs cover the resistance range end to end, and full tower compatibility means the machine can grow into a more complete apparatus station without needing to be replaced. This is the same positioning the Allegro line has historically held in Balanced Body&apos;s catalogue — the professional-grade reference machine — but it is important to be precise about which specific model that actually maps to on Amazon today, because product names in this category change and older reviews have not always kept up.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Here is the correction that matters most: this machine does not fold. It is a permanent-installation reformer, made to order, and it needs a dedicated footprint rather than wall storage space. If you came to this page expecting an upright-folding, wall-stored machine — a description that circulated for the &quot;Allegro 2&quot; — that description does not apply to the Studio Reformer, and we could not verify it applies to any current Balanced Body Amazon listing. Plan your space around a permanent installation before you order.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Balanced Body has built accessories for this platform for decades, and that is where the real, verifiable advantage over smaller brands shows up: sitting boxes, jumpboards, platform extenders and replacement parts are widely stocked and easy to source years after purchase. As a practitioner&apos;s practice deepens, the Studio Reformer accommodates tower work and box series without needing to replace the machine.
              </p>
            </div>

            {/* Full spec sheet */}
            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-6" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>What we could verify</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SPECS.map((spec) => (
                  <div key={spec.label} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{spec.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* The honest case against */}
            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-2xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>The honest case against the Studio Reformer</h2>
              <ul className="space-y-5">
                {[
                  "$4,700 for the reformer alone, before the box, jumpboard and other accessories most buyers end up adding. Budget several hundred dollars more for a realistic complete setup.",
                  "It does not fold. Unlike what older coverage of this category implied, this is a permanent-installation machine, not a fold-and-store option — a genuine constraint in a small apartment or multi-use room.",
                  "Made to order, so expect a lead time rather than immediate delivery — plan your purchase timeline accordingly.",
                  "No instruction included. This is professional apparatus; Balanced Body assumes buyers know how to use it or will get instruction separately.",
                  "Assembly takes real time and is best done with two people, which is standard for professional-grade reformers generally.",
                  "We could not verify exact weight or footprint dimensions for the current listing — check the live Amazon listing for these before ordering, rather than relying on figures quoted elsewhere.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    <span className="font-bold shrink-0 mt-0.5" style={{ color: "#8b4a31" }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Products section */}
            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>The Studio Reformer and Real Accessories to Pair With It</p>

              {/* Quick-picks table */}
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
                    <a
                      href={p.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
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

            {/* Who should buy / who shouldn't */}
            <div className="mb-16 rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.35)" }}>
              <div className="px-8 py-5" style={{ backgroundColor: "#f6f3f2" }}>
                <h2 className="text-2xl font-semibold" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Who should buy the Studio Reformer — and who shouldn&apos;t</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ backgroundColor: "#ffffff" }}>
                <div className="p-8" style={{ borderRight: "1px solid rgba(217,194,186,0.35)" }}>
                  <p className="text-sm font-bold uppercase tracking-[0.15em] mb-5" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Buy it if</p>
                  <ul className="space-y-4">
                    {[
                      "You have a dedicated floor footprint for a permanent-installation machine — this does not fold or tuck away.",
                      "You have trained consistently in a Pilates studio and know the reformer repertoire.",
                      "Reformer Pilates is a lasting part of your practice, not a temporary experiment.",
                      "You want the deepest, most widely-stocked accessory ecosystem for future expansion.",
                      "You plan to add tower work, box series, or jumpboard cardio over time.",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                        <span className="font-bold shrink-0 mt-0.5" style={{ color: "#8b4a31" }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8">
                  <p className="text-sm font-bold uppercase tracking-[0.15em] mb-5" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Don&apos;t buy it if</p>
                  <ul className="space-y-4">
                    {[
                      "You need a reformer that folds away — this machine does not, and we could not verify that any current Balanced Body Amazon listing does.",
                      "You are a complete beginner who has not yet had studio sessions — start in a studio first.",
                      "You want a lower entry price — Merrithew's At Home SPX Reformer Package is $3,349, a real step down.",
                      "You want to try reformer Pilates before committing — an entry-level cord machine for a year first is a cheaper way to test the habit.",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                        <span className="font-bold shrink-0 mt-0.5" style={{ color: "#86736d" }}>✗</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Studio Reformer vs Merrithew At Home SPX */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Studio Reformer vs Merrithew At Home SPX: the real comparison</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                These are the two machines actually sold on Amazon in this category, not the names that circulate in older reviews. On price, the Studio Reformer at $4,700 sits well above the At Home SPX at $3,349. On springs, Merrithew&apos;s system is built around fine gradation at the light-resistance end — genuinely useful for rehab and prenatal work — while the Studio Reformer&apos;s five Signature Springs cover the full range with the frame and tower compatibility that certification centres rely on. Neither machine is verified to fold for storage, so if flat or under-bed storage is a hard requirement, treat that as unresolved and check current listings directly rather than assuming either machine solves it.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                On ecosystem, Balanced Body&apos;s accessory range is wider and more widely stocked, developed over a longer period. The honest verdict: if budget and a lower entry price matter most, the At Home SPX is the real, cheaper, genuinely Merrithew-branded option. If you want the deepest accessory ecosystem and have the permanent floor space for it, the Studio Reformer is the correct purchase — just go in knowing it will not fold away.
              </p>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "Is the \"Balanced Body Allegro 2\" sold on Amazon?",
                    a: "We could not find a live Amazon offer under that name. The Balanced Body reformer genuinely sold on Amazon, direct from Balanced Body, is the Studio Reformer with the Revo footbar, at $4,700 — that is the real machine this review covers.",
                  },
                  {
                    q: "Does the Studio Reformer fold for storage?",
                    a: "No. It is a permanent-installation machine, made to order. If you need a reformer that folds for storage, this is not it — check the current listing for any folding Balanced Body or Merrithew model before assuming one exists.",
                  },
                  {
                    q: "Does the Studio Reformer include a box?",
                    a: "No. A Balanced Body Sitting Box Lite is a real, separately-sold accessory that works on the carriage without mounting to the frame.",
                  },
                  {
                    q: "How does the Studio Reformer compare to Merrithew?",
                    a: "Merrithew's real Amazon-sold SPX-family machine, the At Home SPX Reformer Package, is $3,349 — a step below the Studio Reformer's $4,700 — and is built around Merrithew's five-spring system with fine light-end gradation, useful for rehab and prenatal work. Balanced Body's accessory ecosystem is deeper and more widely stocked. Neither machine is verified to fold flat for storage.",
                  },
                  {
                    q: "Where do I buy the Balanced Body Studio Reformer?",
                    a: "Direct from Balanced Body on Amazon, or through Balanced Body authorized dealers. It ships made to order, so expect a lead time rather than immediate stock.",
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
                <ArticleCard
                  title="Merrithew At Home SPX Review (2026)"
                  excerpt="The Studio Reformer's main rival — an honest deep review of the real Merrithew Amazon listing."
                  href="/blog/merrithew-spx-max-review"
                  category="Equipment Review"
                  readTime="11 min read"
                  date="September 2026"
                  imageUrl="/pictures/junseong-lee-AX8cf6mkCzw-unsplash.jpg"
                />
                <ArticleCard
                  title="Best Pilates Reformer with Tower (2026)"
                  excerpt="How to build a complete home studio with a reformer + tower combination."
                  href="/blog/pilates-reformer-with-tower"
                  category="Equipment Guide"
                  readTime="10 min read"
                  date="May 2026"
                  imageUrl="/pictures/roxana-popovici-hiHBILFNah4-unsplash.jpg"
                />
              </div>
            </div>

          </div>
        </section>

        <CTASection
          title="Try the Studio Reformer at a studio near you"
          subtitle="Our city guides identify studios using Balanced Body equipment."
        />
      </main>
      <Footer />
    </>
  );
}
