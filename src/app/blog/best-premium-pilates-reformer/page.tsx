import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Premium Pilates Reformer (2026): Available Now on Amazon",
  description: "The best premium Pilates reformers you can actually buy today — Balanced Body, Merrithew, Align-Pilates and PersonalHour reviewed for professional-grade spring systems, carriage glide, and longevity.",
  openGraph: {
    title: "Best Premium Pilates Reformers (2026): $2,350–$4,700",
    description: "Balanced Body Studio Reformer, Allegro Stretch, Merrithew At Home SPX, Align-Pilates C8-PRO and PersonalHour — the definitive premium reformer guide for serious home practitioners.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-premium-pilates-reformer",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg", width: 1200, height: 630, alt: "Best Premium Pilates Reformers — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Premium Pilates Reformers (2026)",
    description: "The definitive guide to premium home Pilates reformers — $2,350 to $4,700, all verified in stock.",
    images: ["https://pilatescollectiveclub.com/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg"],
  },
  keywords: ["best premium pilates reformer", "luxury pilates reformer 2026", "professional pilates reformer buy", "balanced body studio reformer review", "align pilates c8 pro review", "merrithew at home spx review", "best high-end pilates reformer", "top pilates reformer brand"],
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-premium-pilates-reformer" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Merrithew At Home SPX Reformer Package",
    price: "$3,349",
    verdict: "Best premium reformer sold on Amazon",
    tier: "Premium Home",
    description:
      "Sold and shipped by Amazon.com itself, this is a genuine Merrithew machine with Amazon's delivery and returns behind it. It's Merrithew's home-specific model rather than the studio SPX Max, but it uses the same quality components: aluminium rails, a smooth, quiet carriage and five springs (4 × 100%, 1 × 50%). The package includes the reformer box, a metal roll-up pole, a padded platform extender and double-loop straps, so there is nothing else to buy to start. It measures 96.5 inches long and weighs 115 lbs.",
    affiliateUrl: "https://www.amazon.com/dp/B004FGT0TM?tag=pilatescollective-20",
    specs: [
      { label: "Length", value: "96.5 inches" },
      { label: "Springs", value: "5 springs (4×100%, 1×50%)" },
      { label: "Included", value: "Box, roll-up pole, platform extender, straps" },
      { label: "Machine weight", value: "115 lbs" },
      { label: "Sold by", value: "Amazon.com" },
    ],
    pros: ["Sold and shipped by Amazon.com", "Complete package — box, pole and extender included", "Genuine Merrithew build quality", "Lowest price for a premium-brand spring reformer"],
    cons: ["Home model, not the studio SPX Max", "Four equal springs plus one half — fewer light options than the SPX Max", "Amazon price moves; check the current listing"],
  },
  {
    rank: "02",
    name: "Balanced Body Studio Reformer (Revo Footbar)",
    price: "$4,700",
    verdict: "Best overall premium reformer",
    tier: "Premium",
    description:
      "The Studio Reformer is Balanced Body's commercial machine, sold direct by Balanced Body through their Amazon storefront. The frame is solid rock maple with commercial-grade upholstery, built for daily professional use. Five Signature Springs give 46 resistance combinations; the Revo system adds a 4-position locking footbar and a 5-position springbar; TwistLock shoulder rests make fast, secure changes. It doesn't fold, so it needs a permanent spot, and it's made to order — allow three to four weeks to ship.",
    affiliateUrl: "https://www.amazon.com/dp/B002XVWIFE?tag=pilatescollective-20",
    specs: [
      { label: "Dimensions", value: "92.6\" L × 26.5\" W × 15\" H" },
      { label: "Frame", value: "Solid rock maple" },
      { label: "Springs", value: "5 Signature Springs (46 combinations)" },
      { label: "Footbar / springbar", value: "Revo: 4-position footbar, 5-position springbar" },
      { label: "Sold by", value: "Balanced Body Inc. (Amazon)" },
    ],
    pros: ["Solid rock maple frame built for daily professional use", "Revo footbar and springbar for quick, secure adjustments", "46 resistance combinations", "Sold by Balanced Body on Amazon"],
    cons: ["Does not fold — needs permanent floor space", "Made to order — three to four weeks to ship", "Heavier and less portable than home-focused machines"],
  },
  {
    rank: "03",
    name: "Balanced Body Allegro Stretch Reformer",
    price: "$3,710",
    verdict: "Best for taller or larger practitioners",
    tier: "Premium",
    description:
      "The Allegro Stretch is Balanced Body's answer for practitioners who find standard reformers cramped: a carriage 2 inches wider and 6 inches longer than the regular Allegro, with a 36-inch adjustable footbar (4 locking positions) instead of a fixed-width bar. The frame is low-maintenance anodized aluminium with a built-in nonslip standing platform, TwistLock shoulder rests, and an 8-wheel suspension system (4 vertical, 4 horizontal) for a smooth, stable glide. Sold direct by Balanced Body through Amazon.",
    affiliateUrl: "https://www.amazon.com/dp/B093R8DYC9?tag=pilatescollective-20",
    specs: [
      { label: "Carriage", value: "2\" wider, 6\" longer than the standard Allegro" },
      { label: "Footbar", value: "36\" adjustable, 4 locking positions" },
      { label: "Frame", value: "Anodized aluminium" },
      { label: "Carriage suspension", value: "8-wheel (4 vertical, 4 horizontal)" },
      { label: "Sold by", value: "Balanced Body Inc. (Amazon)" },
    ],
    pros: ["Wider, longer carriage for tall or larger bodies", "36\" adjustable footbar with 4 locking positions", "TwistLock shoulder rests", "Built-in nonslip standing platform"],
    cons: ["Larger footprint than a standard-size reformer", "Made to order — allow lead time to ship", "Heavier due to the extended frame"],
  },
  {
    rank: "04",
    name: "Align-Pilates C8-PRO Reformer",
    price: "$2,750",
    verdict: "Best value professional-grade reformer",
    tier: "Premium Value",
    description:
      "The C8-PRO brings Align-Pilates' professional spring package into a home-sized, stackable frame, and it's sold on Amazon by Merrithew, Align's US distributor. It runs on an 8-PU-wheel carriage for a quiet, low-maintenance ride, and the Rapid Change Spring Bar lets you swap resistance fast. Optional leg extensions raise the bed height to 44cm (versus 26cm standard) if you want a taller, more studio-like position. At 239.5cm long and rated for users up to 150kg (331 lbs), it's a serious machine at a price well under the other premium options here.",
    affiliateUrl: "https://www.amazon.com/dp/B099ZJ4C25?tag=pilatescollective-20",
    specs: [
      { label: "Length", value: "239.5cm (94.3\")" },
      { label: "Carriage", value: "8 PU wheels" },
      { label: "Springs", value: "Rapid Change Spring Bar" },
      { label: "Weight capacity", value: "150kg (331 lbs)" },
      { label: "Sold by", value: "Merrithew. (Amazon)" },
    ],
    pros: ["Lowest price of a true professional-grade spring reformer here", "Rapid Change Spring Bar — fast, tool-free adjustments", "Stackable for storage", "Optional leg extensions for studio bed height"],
    cons: ["Smaller accessory range than Balanced Body or Merrithew", "Home-sized frame, not a full studio machine", "Sold by a third-party distributor, not Align directly"],
  },
  {
    rank: "05",
    name: "PersonalHour Janet La Force Plus",
    price: "$2,555",
    verdict: "Best walnut wood home reformer",
    tier: "Premium Home",
    description:
      "For a wood-frame reformer at a lower price point than the maple studio machines, the Janet La Force Plus is a solid walnut, foldable reformer sold on Amazon by PilatesUS. It runs six adjustable springs, has a cushioned carriage and adjustable footbar, and the frame is tower-ready if you want to add a vertical frame later. It folds upright on wheels for storage, which none of the maple studio machines in this guide can do, and ships with a jumpboard, box, foot strap and loops included.",
    affiliateUrl: "https://www.amazon.com/dp/B0GNDHZXZK?tag=pilatescollective-20",
    specs: [
      { label: "Frame", value: "Solid walnut" },
      { label: "Springs", value: "6 adjustable springs" },
      { label: "Storage", value: "Folds upright on wheels" },
      { label: "Included", value: "Jumpboard, box, foot strap, loops" },
      { label: "Sold by", value: "PilatesUS (Amazon)" },
    ],
    pros: ["Solid walnut frame — distinct from the aluminium/maple machines here", "Folds upright on wheels for storage", "Tower-ready frame", "Full accessory set included in the price"],
    cons: ["Smaller, newer brand than Balanced Body or Merrithew", "Stock can run scarce — check availability", "Less established resale value"],
  },
  {
    rank: "06",
    name: "Balanced Body Metro IQ Reformer",
    price: "$2,350",
    verdict: "Best space-saving premium reformer",
    tier: "Premium Compact",
    description:
      "The Metro IQ solves the space problem that keeps most people from owning a full reformer. Its patented telescoping frame extends for training and shortens by 36 inches for storage, sliding under a bed or standing in a closet depending on the wheel kit. You still get genuine Balanced Body engineering: five Signature Springs, a seamless carriage on an 8-wheel system, a 4-position footbar with 9 inches of adjustment, a 3-position headrest and a built-in 5.5-inch standing platform. Sold direct by Balanced Body through Amazon.",
    affiliateUrl: "https://www.amazon.com/dp/B0F79ZCQMV?tag=pilatescollective-20",
    specs: [
      { label: "Storage reduction", value: "36 inches shorter when stored" },
      { label: "Springs", value: "5 Signature Springs" },
      { label: "Footbar", value: "4 positions, 9\" of adjustment" },
      { label: "Standing platform", value: "5.5\" built-in" },
      { label: "Sold by", value: "Balanced Body Inc. (Amazon)" },
    ],
    pros: ["Telescoping frame shortens by 36\" for storage", "Genuine Balanced Body springs and carriage", "Built-in standing platform", "Sold by Balanced Body on Amazon"],
    cons: ["Lighter-duty than a full studio frame", "Stock can run scarce — check availability", "Fewer accessory options than the Studio Reformer or Allegro line"],
  },
];

const FAQS = [
  { q: "What is the best premium Pilates reformer for home use?", a: "The Balanced Body Studio Reformer ($4,700) is the most complete premium home reformer — a solid rock maple frame, 46 resistance combinations, and full compatibility with Balanced Body's accessory range. If you want the lowest price for a genuine premium-brand machine, the Merrithew At Home SPX Reformer Package ($3,349) is sold and shipped by Amazon.com. For a lower price on a true professional spring system, the Align-Pilates C8-PRO ($2,750) is the best value in this guide." },
  { q: "What's the difference between the Balanced Body Studio Reformer and the Allegro Stretch?", a: "Both are genuine Balanced Body machines. The Studio Reformer ($4,700) is the commercial-grade frame used in professional studios, with solid rock maple construction and the Revo footbar system. The Allegro Stretch ($3,710) is built specifically for taller or larger practitioners — its carriage is 2 inches wider and 6 inches longer, with a 36-inch adjustable footbar instead of a fixed bar. Choose the Studio Reformer for maximum durability and accessory compatibility; choose the Allegro Stretch if a standard-size carriage feels cramped." },
  { q: "Is the Align-Pilates C8-PRO a real professional reformer?", a: "Yes. It uses Align-Pilates' Rapid Change Spring Bar and an 8-wheel PU carriage, the same core engineering as Align's studio machines, in a home-sized, stackable frame. At $2,750 it's the least expensive true professional-grade spring reformer in this guide, though its accessory ecosystem is smaller than Balanced Body's or Merrithew's." },
  { q: "What's the difference between a maple, aluminium and walnut reformer?", a: "The frame material mostly affects weight, sound and price rather than performance. Solid rock maple (Balanced Body Studio Reformer) and solid walnut (PersonalHour Janet La Force Plus) are heavier and have a warmer, quieter carriage sound. Anodized aluminium (Allegro Stretch, Align C8-PRO) is lighter, lower-maintenance and often more affordable. All the machines in this guide use genuine calibrated steel springs regardless of frame material." },
];
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://pilatescollectiveclub.com/blog/best-premium-pilates-reformer/#article",
      "headline": "Best Premium Pilates Reformers (2026): $2,000–$5,000+ Honestly Reviewed",
      "description": "The best premium Pilates reformers for serious home practitioners — Balanced Body Studio Reformer, Allegro Stretch, Merrithew At Home SPX, Align-Pilates C8-PRO and PersonalHour. Verified prices, honest assessments.",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "@id": "https://pilatescollectiveclub.com/#organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "@id": "https://pilatescollectiveclub.com/#organization", "name": "Pilates Collective Club", "logo": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/pcc-logo.png" } },
      "datePublished": "2026-05-17",
      "dateModified": "2026-09-22",
      "url": "https://pilatescollectiveclub.com/blog/best-premium-pilates-reformer",
      "mainEntityOfPage": "https://pilatescollectiveclub.com/blog/best-premium-pilates-reformer",
      "articleSection": "Equipment",
      "inLanguage": "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Premium Pilates Reformers", "item": "https://pilatescollectiveclub.com/blog/best-premium-pilates-reformer" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": FAQS.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
    },
    {
      "@type": "ItemList",
      "name": "Best Premium Pilates Reformers (2026)",
      "numberOfItems": PRODUCTS.length,
      "itemListElement": PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "description": p.description,
          "offers": { "@type": "Offer", "priceCurrency": "USD", "price": p.price.replace(/[^0-9]/g, ""), "availability": "https://schema.org/InStock", "url": p.affiliateUrl },
          "review": { "@type": "Review", "reviewBody": p.description, "author": { "@type": "Organization", "name": "Pilates Collective Club" }, "reviewRating": { "@type": "Rating", "ratingValue": 5 - i * 0.05, "bestRating": 5, "worstRating": 1 } },
        },
      })),
    },
  ],
};

export default function BestPremiumReformerPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Premium Reformers</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Premium Pilates Reformers<br /><span style={{ color: "#8b4a31" }}>(2026): $2,000–$5,000+</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 14 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              At $2,000 and above, you are no longer shopping by compromise. Every machine in this roundup uses a true steel spring system, supports the full classical and contemporary repertoire, and will outlast a decade of serious daily practice. The question is not which one works — they all work. The question is which one fits your training style, available space, and tolerance for the specific trade-offs each brand makes.
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg" alt="Premium Pilates reformer machine" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            {/* Introduction */}
            <div className="mb-16 mt-4">
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Every machine in this guide is sold on Amazon by the manufacturer or an authorised distributor, and prices and stock were verified there in September 2026. Reformer pricing and availability change; treat our figures as current benchmarks and check the listing before buying.
              </p>
              <div className="rounded-xl p-5 mt-6" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(139,74,49,0.15)" }}>
                <p className="text-sm font-semibold mb-1" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Our overall pick</p>
                <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                  The <strong>Balanced Body Studio Reformer</strong> at $4,700 offers the best combination of carriage quality, accessory ecosystem, and long-term value for most serious home practitioners. The <strong>Align-Pilates C8-PRO</strong> at $2,750 is the right answer if budget matters more than brand.
                </p>
              </div>
            </div>

            {/* What separates premium from budget */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What you actually get at $2,000+</h2>
              <div className="space-y-4">
                {[
                  { heading: "Steel springs, not cords", body: "Every machine in this guide uses calibrated steel springs. The resistance curve is consistent throughout the movement range — it does not accelerate at end range as elastic cords do. This is not an aesthetic difference. It fundamentally changes how exercises feel and how your body learns to control movement against resistance." },
                  { heading: "Frame rigidity under load", body: "Premium frames do not flex during explosive footwork or jump board intervals. Cheap aluminium frames introduce micro-movements that compromise precision. At this price tier, the frame is rigid enough that the only movement you feel is intentional carriage travel." },
                  { heading: "Carriage precision", body: "High-precision bearing systems (polyurethane wheels, precision-machined rails) eliminate the lateral wobble and uneven glide of entry-level machines. The difference is immediately perceptible to any trained practitioner. A precise carriage is what makes subtle weight-shifting and control exercises possible." },
                  { heading: "Full repertoire compatibility", body: "Rails of 96–103 inches accommodate practitioners up to 6'3\". Adjustable shoulder rests, three-position headrests, and multi-position footbars mean the machine conforms to the practitioner rather than the reverse." },
                  { heading: "Accessory ecosystems", body: "Every brand in this guide has a developed accessory range — jump boards, boxes, towers, Cadillac conversions, vertical stands. Buying into an ecosystem means your machine can grow with your practice rather than becoming obsolete." },
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

            {/* Products */}
            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Reformers · $2,350 to $4,700</p>
              <div className="space-y-16">
                {PRODUCTS.map((p) => (
                  <div key={p.name}>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="text-2xl font-semibold" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{p.rank}</span>
                      <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{p.tier}</span>
                      <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>{p.verdict}</span>
                    </div>
                    <ProductCard name={p.name} description={p.description} price={p.price} affiliateUrl={p.affiliateUrl} />

                    {/* Specs */}
                    <div className="mt-4 rounded-xl overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.3)" }}>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(217,194,186,0.3)" }}>
                        {p.specs.map((s) => (
                          <div key={s.label} className="px-4 py-3" style={{ backgroundColor: "#faf8f7" }}>
                            <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{s.label}</p>
                            <p className="text-xs" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{s.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pros / cons */}
                    <div className="mt-3 grid grid-cols-2 gap-3">
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
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Side-by-side comparison</h2>
              <div className="overflow-x-auto rounded-xl" style={{ border: "1px solid rgba(217,194,186,0.4)" }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: "#f6f3f2", borderBottom: "1px solid rgba(217,194,186,0.4)" }}>
                      {["Reformer", "Price", "Springs", "Rail", "Carriage", "Best For"].map((h) => (
                        <th key={h} className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider whitespace-nowrap" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { model: "Merrithew At Home SPX", price: "$3,349", springs: "5 springs", rail: "96.5″", carriage: "Standard", best: "Buying on Amazon.com" },
                      { model: "Balanced Body Studio Reformer", price: "$4,700", springs: "5 springs, 46 combos", rail: "92.6″", carriage: "Rock maple, Revo footbar", best: "Best all-round" },
                      { model: "Balanced Body Allegro Stretch", price: "$3,710", springs: "5 springs", rail: "Extended carriage", carriage: "36″ adjustable footbar", best: "Tall / larger bodies" },
                      { model: "Align-Pilates C8-PRO", price: "$2,750", springs: "Rapid Change Spring Bar", rail: "94.3″", carriage: "8 PU wheels", best: "Best value" },
                      { model: "PersonalHour Janet La Force Plus", price: "$2,555", springs: "6 springs", rail: "Foldable", carriage: "Solid walnut", best: "Wood + foldable" },
                      { model: "Balanced Body Metro IQ", price: "$2,350", springs: "5 springs", rail: "Telescoping (-36″ stored)", carriage: "Standard", best: "Small spaces" },
                    ].map((row, i) => (
                      <tr key={row.model} style={{ backgroundColor: i % 2 === 0 ? "#ffffff" : "#faf8f7", borderBottom: "1px solid rgba(217,194,186,0.2)" }}>
                        <td className="px-4 py-3 font-semibold whitespace-nowrap" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{row.model}</td>
                        <td className="px-4 py-3 whitespace-nowrap" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>{row.price}</td>
                        <td className="px-4 py-3" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{row.springs}</td>
                        <td className="px-4 py-3 whitespace-nowrap" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{row.rail}</td>
                        <td className="px-4 py-3" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{row.carriage}</td>
                        <td className="px-4 py-3" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{row.best}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs mt-3" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Prices checked at manufacturer websites and Amazon, September 2026. Base reformer prices; accessories and white-glove delivery typically extra.</p>
            </div>

            {/* Who should buy what */}
            <div className="mb-16 space-y-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Who should buy which</h2>
              {[
                { who: "Serious home practitioners, all methods", buy: "Balanced Body Studio Reformer", reason: "The most complete single purchase — solid maple carriage, Revo footbar and springbar, 46 resistance combinations, and Balanced Body's full accessory ecosystem." },
                { who: "Buying with Amazon's delivery and returns", buy: "Merrithew At Home SPX", reason: "Sold and shipped by Amazon.com directly, at the lowest price of any premium-brand machine here." },
                { who: "Tall or larger-bodied practitioners", buy: "Balanced Body Allegro Stretch", reason: "A wider, longer carriage and a 36-inch adjustable footbar make this the right choice when a standard reformer feels cramped." },
                { who: "Budget-conscious buyers who still want true springs", buy: "Align-Pilates C8-PRO", reason: "The least expensive genuine professional-grade spring reformer in this guide, with a Rapid Change Spring Bar and a stackable frame." },
                { who: "Practitioners who want a wood-frame home machine", buy: "PersonalHour Janet La Force Plus", reason: "Solid walnut construction, six adjustable springs, and it folds upright for storage — something the maple studio machines can't do." },
                { who: "Small apartments and limited floor space", buy: "Balanced Body Metro IQ", reason: "A telescoping frame that shortens by 36 inches for storage without sacrificing genuine Balanced Body springs and carriage." },
              ].map((item) => (
                <div key={item.who} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                  <div className="flex flex-wrap items-start gap-3 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded" style={{ backgroundColor: "#f6f3f2", color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{item.who}</span>
                    <span className="text-sm font-semibold" style={{ color: "#8b4a31", fontFamily: "'Playfair Display', serif" }}>→ {item.buy}</span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.reason}</p>
                </div>
              ))}
            </div>

            {/* Verdict */}
            <div className="mb-16 rounded-2xl p-8 md:p-10" style={{ background: "linear-gradient(135deg, #8b4a31 0%, #a86247 100%)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-4 opacity-75" style={{ color: "#ffffff", fontFamily: "'Montserrat', sans-serif" }}>Our Verdict</p>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#ffffff", fontFamily: "'Playfair Display', serif" }}>For most people: the Balanced Body Studio Reformer.</h2>
              <p className="text-base leading-relaxed mb-6 opacity-85" style={{ color: "#ffffff", fontFamily: "'Montserrat', sans-serif" }}>
                If you are training seriously, training frequently, and want one machine that will serve the full classical and contemporary repertoire for the next twenty years, the Studio Reformer at $4,700 is the clearest answer in the premium category. The solid maple carriage, Revo footbar and springbar, and Balanced Body&apos;s huge accessory range are a combination no competitor matches at this price, and it&apos;s sold direct on Amazon. If budget matters more than brand, the Align-Pilates C8-PRO at $2,750 is the best value here — a genuine professional spring system for well under the price of the maple machines.
              </p>
              <a href="https://www.amazon.com/dp/B002XVWIFE?tag=pilatescollective-20" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90" style={{ backgroundColor: "#ffffff", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>
                Shop Balanced Body Studio Reformer on Amazon →
              </a>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {FAQS.map((item) => (
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
                <ArticleCard title="Merrithew V2 Max Reformer: In-Depth Review" excerpt="The most detailed assessment of Merrithew's most advanced professional machine." href="/blog/merrithew-v2-max-review" category="Equipment" readTime="11 min read" date="May 2026" imageUrl="/pictures/samantha-sheppard-b8Q5fHBsyik-unsplash.jpg" />
                <ArticleCard title="Balanced Body vs Merrithew" excerpt="The definitive head-to-head of the two dominant professional reformer brands." href="/blog/balanced-body-vs-merrithew" category="Comparison" readTime="13 min read" date="May 2026" imageUrl="/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg" />
                <ArticleCard title="Peak Pilates Brand Guide" excerpt="Peak's MVe reformer is a top-tier premium machine favoured by classical studios worldwide." href="/blog/peak-pilates" category="Brand Guide" readTime="10 min read" date="May 2026" imageUrl="/pictures/junseong-lee-G9H5edUL0T8-unsplash.jpg" />
                <ArticleCard title="Elina Pilates Brand Guide" excerpt="Elina's handcrafted wood and aluminum reformers compete directly with Balanced Body and Merrithew." href="/blog/elina-pilates" category="Brand Guide" readTime="10 min read" date="May 2026" imageUrl="/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg" />
                <ArticleCard title="Balanced Body Allegro 2 Review" excerpt="The machine on its own terms: carriage, springs, fold and who it suits." href="/blog/balanced-body-allegro-2-review" category="Equipment" readTime="10 min read" date="June 2026" imageUrl="/pictures/stitch-reformer-sunlit-minimal.png" />
              </div>
            </div>

          </div>
        </section>

        <CTASection title="Start with a studio before buying" subtitle="Find the best Pilates studios near you in our city guides." />

      </main>
      <Footer />
    </>
  );
}
