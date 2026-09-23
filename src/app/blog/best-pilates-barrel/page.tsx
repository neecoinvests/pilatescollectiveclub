import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Barrel (2026): 4 Real Barrels, Pro to Budget",
  description: "The best Pilates barrels of 2026 — Balanced Body's professional Arc and Ladder Barrel, plus real budget-tier alternatives from PAETA and GDMSTIH, compared for home and studio use, build quality, and spinal mobility benefits.",
  keywords: ["best pilates barrel", "pilates spine corrector review 2026", "pilates arc barrel", "ladder barrel pilates", "pilates barrel for home use", "best pilates barrel buy", "budget pilates ladder barrel", "pilates barrel exercises"],
  openGraph: {
    title: "Best Pilates Barrel (2026): Arc, Spine Corrector & Ladder Barrel",
    description: "Pilates barrels at every budget — Balanced Body's professional tier plus real generic-brand ladder barrel alternatives, compared honestly.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-barrel",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/esma-eserghep-NUQi80iMLrI-unsplash.jpg", width: 1200, height: 630, alt: "Best Pilates barrel guide — Pilates Collective Club" }],
  },
  twitter: { card: "summary_large_image", title: "Best Pilates Barrel (2026)", description: "Arc vs Spine Corrector vs Ladder Barrel, professional to budget — what each does and which to buy.", images: ["https://pilatescollectiveclub.com/pictures/esma-eserghep-NUQi80iMLrI-unsplash.jpg"] },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-pilates-barrel" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Balanced Body Pilates Arc (Spine Corrector)",
    price: "$189.99",
    verdict: "The real Balanced Body barrel sold on Amazon",
    description: "A note before anything else: we could not find separate, standalone Amazon listings for a Balanced Body \"Arc\" and a distinct Balanced Body \"Spine Corrector\" — as far as we could verify, Balanced Body's real Amazon listing is this single Pilates Arc, marketed as covering spine-corrector-style work. It is a half-round foam and upholstered apparatus that supports backbend extensions and hip flexor stretches on the curved side, and a balance/core challenge when flipped flat-side down. It is small enough to store upright and light enough to carry in one hand. We could not independently verify the exact curve height against the taller, stepped-curve profile some classical teachers describe as the dedicated \"Spine Corrector\" shape, so if the deep classical Spine Corrector series specifically is your goal, confirm the curve dimensions on the current listing before assuming this matches.",
    affiliateUrl: "https://www.amazon.com/dp/B002XVSNRG?tag=pilatescollective-20",
    tag: "The Real Listing",
  },
  {
    rank: "02",
    name: "Balanced Body Ladder Barrel",
    price: "$2,195",
    verdict: "The real advanced barrel for the complete repertoire",
    description: "The Ladder Barrel is a full apparatus — a large rounded barrel mounted on a base with a horizontal ladder extending from one side. It is not a beginner purchase: the Ladder Barrel exercises (side stretch over the barrel, back extension, hanging) require significant baseline strength, flexibility, and body awareness. We could not independently verify an adjustable barrel-to-ladder distance for the current listing, so confirm that feature on the live product page rather than assuming it. This is a real, genuine Balanced Body listing sold directly on Amazon.",
    affiliateUrl: "https://www.amazon.com/dp/B01NBVI3JU?tag=pilatescollective-20",
    tag: "Advanced",
  },
  {
    rank: "03",
    name: "PAETA Wooden Ladder Barrel",
    price: "$379.99",
    verdict: "Real budget-tier Ladder Barrel — beech wood, five adjustable rungs",
    description: "Sold by PAETA US on Amazon. This is a genuine, currently-sold Ladder Barrel built from beech wood with five adjustable rungs, a 440lb weight capacity, and a standing platform — a real, functional alternative to Balanced Body's Ladder Barrel at roughly a sixth of the price. It's a generic-brand product without Balanced Body's commercial pedigree or the precise engineering tolerances a working studio depends on for daily heavy use, but for a home practitioner who wants the Ladder Barrel's side-stretch, back-extension and hanging repertoire without a $2,195 outlay, it's a real option, not a compromise dressed up as one. Confirm the rung spacing and standing platform height on the current listing before ordering.",
    affiliateUrl: "https://www.amazon.com/dp/B0DF2JZ4FG?tag=pilatescollective-20",
    tag: "Budget Tier · Real Listing",
  },
  {
    rank: "04",
    name: "GDMSTIH Gray Pilates Ladder Barrel",
    price: "$199.99",
    verdict: "The budget entry point — solid wood, leather-covered surface",
    description: "Sold by Melegant on Amazon. A solid-wood Ladder Barrel with adjustable knob positioning and a leather-covered surface, and the lowest-priced genuine Ladder Barrel we verified — the entry point for anyone who wants to try Ladder Barrel work at home before committing to a larger purchase. As with the PAETA barrel above, this is a generic brand without Balanced Body's professional-studio pedigree, and adjustable knob positioning is a different mechanism from a fully engineered rung system, so check current owner reviews for stability feedback before ordering.",
    affiliateUrl: "https://www.amazon.com/dp/B0G2GS16KZ?tag=pilatescollective-20",
    tag: "Budget Entry Point · Real Listing",
  },
  {
    rank: "05",
    name: "Merrithew Arc Barrel",
    price: "Price on request",
    verdict: "Not sold on Amazon — genuine STOTT PILATES arc, dealer-direct",
    description: "We could not find a live Amazon listing for a Merrithew-branded Arc Barrel, and we could not verify a specific public price, so we're not quoting one. If your teacher is STOTT-certified and your other equipment is Merrithew, staying in that ecosystem is a reasonable choice — but it means buying through Merrithew directly or an authorised dealer, not Amazon.",
    affiliateUrl: "https://www.merrithew.com",
    tag: "STOTT PILATES · Dealer-Direct",
  },
  {
    rank: "06",
    name: "Gratz Spine Corrector",
    price: "Price on request",
    verdict: "Not sold on Amazon — the classical original, dealer-direct",
    description: "We could not find a live Amazon listing for the Gratz Spine Corrector, and we could not verify a specific public price, so we're not quoting one — Gratz pricing is generally supplied on request. It's manufactured to Joseph Pilates' original specifications, and for classical practitioners whose training follows the original exercises as designed, it's the reference apparatus. Purchased directly from Gratz (gratzpilates.com).",
    affiliateUrl: "https://www.gratzpilates.com/collections/barrels",
    tag: "Classical · Dealer-Direct",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Barrel (2026): Arc, Spine Corrector & Ladder Barrel, Pro to Budget",
      "description": "The best Pilates barrels in 2026 — Arc Barrel, Spine Corrector, and Ladder Barrel compared, from Balanced Body's professional tier to real budget-brand Ladder Barrel alternatives from PAETA and GDMSTIH. What each does, who needs it, and which to buy first.",
      "url": "https://pilatescollectiveclub.com/blog/best-pilates-barrel",
      "datePublished": "2026-05-16",
      "dateModified": "2026-09-23",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/esma-eserghep-NUQi80iMLrI-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-pilates-barrel" },
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Barrel 2026",
      "numberOfItems": PRODUCTS.length,
      "itemListElement": PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "description": p.description,
          "offers": { "@type": "Offer", "priceCurrency": "USD", "price": p.price.replace(/[^0-9.]/g, "") || undefined, "availability": "https://schema.org/InStock", "url": p.affiliateUrl },
        },
      })),
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
        { "@type": "Question", "name": "Do I need a barrel if I have a reformer?", "acceptedAnswer": { "@type": "Answer", "text": "The barrel is not a reformer replacement or accessory — it is a separate apparatus that develops different qualities. Extension over the barrel is distinct from Swan on the reformer. For practitioners whose practice feels limited by the reformer and mat alone, a barrel (starting with the Arc) is the natural next piece." } },
        { "@type": "Question", "name": "What is the difference between the Arc and the Spine Corrector?", "acceptedAnswer": { "@type": "Answer", "text": "The Arc has a lower curve, better for supported extension and hip flexor work. The Spine Corrector has a taller curve designed for the classical Spine Corrector series, which develops deep abdominal control and spinal articulation. The Arc is versatile; the Spine Corrector is specific." } },
        { "@type": "Question", "name": "Can a beginner use a Pilates barrel?", "acceptedAnswer": { "@type": "Answer", "text": "The Arc Barrel, yes — with basic movement competence. The Spine Corrector, after a foundation of reformer or mat work (6+ months). The Ladder Barrel, only with instructor guidance." } },
        { "@type": "Question", "name": "Which barrel should I buy first?", "acceptedAnswer": { "@type": "Answer", "text": "The Arc Barrel for most practitioners — it is the most versatile, the most affordable, and the easiest to store. Once the Arc's repertoire feels familiar, the Spine Corrector is the next logical step for classical practitioners." } },
        { "@type": "Question", "name": "Is there a budget alternative to the Balanced Body Ladder Barrel?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Balanced Body's Ladder Barrel, at $2,195, is the professional, studio-grade standard. PAETA's Wooden Ladder Barrel ($379.99, beech wood, five adjustable rungs, 440lb capacity) and the GDMSTIH Gray Ladder Barrel ($199.99, solid wood, leather-covered surface) are real, currently-sold generic-brand alternatives without Balanced Body's commercial pedigree, but genuinely functional for home use at a fraction of the cost." } },
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
        {/* Hero Section */}
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
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 9 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              The Pilates barrel is one of the least understood and most underutilised pieces of apparatus in the system — regularly present in good studios, rarely seen in home practice. There are three distinct barrel functions (Arc, Spine Corrector, Ladder Barrel), each serving different needs and appropriate for different levels of experience. This guide explains what each does and who it is for — honestly: Balanced Body sells one Amazon-listed barrel that covers Arc/spine-corrector-style work, plus its professional Ladder Barrel. Below that professional tier sit two real, currently-sold budget-brand Ladder Barrel alternatives, from PAETA and GDMSTIH — genuine, functional generic-brand options at a fraction of the price, no brand pedigree attached. Merrithew and Gratz make genuine barrels too, but they&apos;re dealer-direct only.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/esma-eserghep-NUQi80iMLrI-unsplash.jpg" alt="Best Pilates barrel guide — Arc, Spine Corrector and Ladder Barrel compared — Pilates Collective Club" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            {/* Three barrels, three purposes */}
            <div className="mb-16 mt-4">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Three barrels, three purposes</h2>
              <div className="space-y-6">
                <div>
                  <p className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Arc Barrel</p>
                  <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    The most accessible barrel in the system. Its low curved surface supports backbends, opens the hip flexors, and creates an abdominal challenge when the practitioner works off the edge — making it useful from beginner to advanced. It can be flipped to challenge balance and core stability in a different plane. The Arc is the Pilates &ldquo;gateway&rdquo; barrel: the correct first purchase for home practitioners, the one most likely to be used consistently, and the one that earns its space in a small home studio more reliably than any other apparatus at its price point.
                  </p>
                </div>
                <div>
                  <p className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Spine Corrector</p>
                  <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    A taller, more pronounced curve designed specifically for the classical Spine Corrector series. Where the Arc supports extension, the Spine Corrector develops it — the greater curve height creates the precise geometry needed for the Side Stretch, Hip Circles, Twist, and Back Extension exercises as Joseph Pilates designed them. The target qualities are spinal articulation, deep abdominal control, and hip flexor flexibility. This is an intermediate to advanced apparatus; most practitioners benefit from an instructor introduction before working the full classical series independently.
                  </p>
                </div>
                <div>
                  <p className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Ladder Barrel</p>
                  <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    A full apparatus — a large rounded barrel mounted on a base with a horizontal ladder extending from one side. The exercises it enables (full backbend over the barrel, side stretching series, hanging from the ladder in extension) require significant baseline strength, flexibility, and body awareness. This is a studio and serious home practitioner purchase: it demands permanent floor space of approximately 100cm × 70cm and a meaningful financial investment. For practitioners at the advanced level or instructors building a complete home studio, the Ladder Barrel adds a dimension of extension and lateral flexibility training that no other apparatus replicates.
                  </p>
                </div>
              </div>
            </div>

            {/* Buying criteria cards */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Five things to consider before buying</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { heading: "Which barrel first", body: "For most home practitioners, the Arc is the correct first barrel — it serves the widest range of exercises, stores easily, and costs a fraction of the Spine Corrector or Ladder Barrel. Start here unless you have a specific classical training context that requires otherwise." },
                  { heading: "Brand compatibility", body: "Balanced Body and Merrithew barrels are designed for their respective methodological ecosystems. Both brands produce quality apparatus; choose based on your instructor's approach. If your teacher is STOTT-certified, the Merrithew Arc is the natural recommendation." },
                  { heading: "Professional vs budget Ladder Barrel", body: "Balanced Body's Ladder Barrel ($2,195) is the professional, studio-grade standard. PAETA ($379.99) and GDMSTIH ($199.99) sell real, functional generic-brand Ladder Barrels for home use — genuine alternatives, not fakes, but without Balanced Body's commercial-grade engineering or pedigree." },
                  { heading: "Curve height", body: "Arc barrels have a lower curve (~20cm); Spine Correctors have a taller curve (~30cm). The height determines which exercises are possible. Classical Spine Corrector work requires the full-height curve — the Arc cannot substitute for it." },
                  { heading: "Storage", body: "Arc Barrels are small and light — store upright in a wardrobe. Spine Correctors are larger and heavier — require a dedicated shelf or corner. Ladder Barrels require permanent floor space of approximately 100cm × 70cm and should be treated as a fixed studio fixture." },
                ].map((item) => (
                  <div key={item.heading} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.heading}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick-picks reference table */}
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

            {/* Product Cards */}
            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{PRODUCTS.length} Barrel Options · Fact-Checked</p>
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

            {/* Barrel exercises editorial section */}
            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-2xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Barrel exercises: what you will actually do</h2>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Arc Barrel</p>
                  <ul className="space-y-2">
                    {[
                      "Swan over the Arc — supported back extension that decompresses the lumbar spine and opens the chest without compressive load.",
                      "Abdominal Curl off the Arc edge — working with the hips above the heart creates a significantly harder abdominal challenge than standard mat work.",
                      "Hip Flexor Stretch — the Arc's curve provides an ideal surface for a sustained, well-supported hip flexor release.",
                      "Side Body stretch — the Arc contour supports a lateral extension that mat work cannot replicate.",
                      "Seated rotation — sitting on the Arc challenges spinal stability while working thoracic rotation.",
                    ].map((ex, i) => (
                      <li key={i} className="flex gap-3 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                        <span className="font-semibold shrink-0" style={{ color: "#8b4a31" }}>–</span>
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ borderTop: "1px solid rgba(217,194,186,0.4)", paddingTop: "24px" }}>
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Spine Corrector</p>
                  <ul className="space-y-2">
                    {[
                      "Back Extension — the full-height curve supports classical back extension with spinal articulation from tailbone to crown.",
                      "Side Stretch — lateral flexion over the barrel with the feet against the base, demanding lateral strength and control.",
                      "Twist — rotational work over the barrel that targets deep thoracic rotation unavailable in mat work.",
                      "Hip Circles — a demanding hip mobility and abdominal stability exercise native to the classical series.",
                      "Classical Spine Corrector series — the complete sequence as designed, developing spinal mobility, hip flexor length, and abdominal control simultaneously.",
                    ].map((ex, i) => (
                      <li key={i} className="flex gap-3 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                        <span className="font-semibold shrink-0" style={{ color: "#8b4a31" }}>–</span>
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ borderTop: "1px solid rgba(217,194,186,0.4)", paddingTop: "24px" }}>
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Ladder Barrel</p>
                  <ul className="space-y-2">
                    {[
                      "Full backbend over the barrel — a dramatic extension requiring both spinal flexibility and the strength to control the descent.",
                      "Side stretching series — lying draped over the barrel in lateral flexion with the feet hooked into the ladder rungs.",
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
                  { q: "Do I need a barrel if I have a reformer?", a: "The barrel is not a reformer replacement or accessory — it is a separate apparatus that develops different qualities. Extension over the barrel is distinct from Swan on the reformer. For practitioners whose practice feels limited by the reformer and mat alone, a barrel (starting with the Arc) is the natural next piece." },
                  { q: "What is the difference between the Arc and the Spine Corrector?", a: "The Arc has a lower curve, better for supported extension and hip flexor work. The Spine Corrector has a taller curve designed for the classical Spine Corrector series, which develops deep abdominal control and spinal articulation. The Arc is versatile; the Spine Corrector is specific." },
                  { q: "Can a beginner use a Pilates barrel?", a: "The Arc Barrel, yes — with basic movement competence. The Spine Corrector, after a foundation of reformer or mat work (6+ months). The Ladder Barrel, only with instructor guidance." },
                  { q: "Which barrel should I buy first?", a: "The Arc Barrel for most practitioners — it is the most versatile, the most affordable, and the easiest to store. Once the Arc's repertoire feels familiar, the Spine Corrector is the next logical step for classical practitioners." },
                  { q: "Is there a budget alternative to the Balanced Body Ladder Barrel?", a: "Yes. Balanced Body's Ladder Barrel, at $2,195, is the professional, studio-grade standard. PAETA's Wooden Ladder Barrel ($379.99, beech wood, five adjustable rungs, 440lb capacity) and the GDMSTIH Gray Ladder Barrel ($199.99, solid wood, leather-covered surface) are real, currently-sold generic-brand alternatives without Balanced Body's commercial pedigree, but genuinely functional for home use at a fraction of the cost." },
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
                <ArticleCard title="Best Pilates Chair (Wunda Chair) 2026" excerpt="The original classical apparatus — what the Wunda Chair does and which brand makes the best one." href="/blog/best-pilates-chair" category="Equipment Guide" readTime="10 min read" date="May 2026" imageUrl="/pictures/samantha-sheppard-b8Q5fHBsyik-unsplash.jpg" />
                <ArticleCard title="Best Home Pilates Reformer (2026)" excerpt="The best home reformers at every price point — from entry-level to studio-grade." href="/blog/best-home-pilates-reformer" category="Equipment Guide" readTime="10 min read" date="May 2026" imageUrl="/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg" />
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
