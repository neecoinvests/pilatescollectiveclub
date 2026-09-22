import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Premium Pilates Reformer (2026): Luxury Machines Reviewed",
  description: "The best premium Pilates reformers — Gratz, Balanced Body Allegro 2, and Merrithew V2 Max reviewed for professional-grade spring systems, carriage glide, and longevity.",
  openGraph: {
    title: "Best Premium Pilates Reformers (2026): $2K–$5K+",
    description: "Allegro 2, Merrithew V2 Max, Gratz, Elina Elite Wood, and Peak MVe — the definitive premium reformer guide for serious home practitioners.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-premium-pilates-reformer",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg", width: 1200, height: 630, alt: "Best Premium Pilates Reformers — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Premium Pilates Reformers (2026)",
    description: "The definitive guide to premium home Pilates reformers — $2,000 to $5,000+.",
    images: ["https://pilatescollectiveclub.com/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg"],
  },
  keywords: ["best premium pilates reformer", "luxury pilates reformer 2026", "professional pilates reformer buy", "gratz pilates reformer review", "balanced body allegro 2 premium", "merrithew v2 max review", "best high-end pilates reformer", "top pilates reformer brand"],
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-premium-pilates-reformer" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Merrithew SPX Max Reformer",
    price: "$3,499",
    verdict: "Best entry into professional spring reformers",
    tier: "Premium Entry",
    description:
      "The SPX Max is Merrithew's compact professional reformer, found in STOTT PILATES training centres and boutique studios. It runs Merrithew's High Precision Spring package (five springs: 3 × 100%, 1 × 50%, 1 × 25%), has the patented retractable rope system, and adjusts through three gearbar, six carriage-stopper, three headrest and four footbar positions. The carriage sits low (9 inches from the floor), which suits home rooms and makes it easy to step on and off. At $3,499 direct from Merrithew it is the least expensive professional-grade machine here; a bundle with box, platform extender and roll-up pole costs $310 more.",
    affiliateUrl: "https://www.merrithew.com/shop/ProductDetail/ST01077_Spx-Max-Reformer",
    specs: [
      { label: "Dimensions", value: "26.5″W × 97″L" },
      { label: "Weight capacity", value: "350 lbs" },
      { label: "Springs", value: "5 springs (3×100%, 1×50%, 1×25%)" },
      { label: "Carriage height", value: "9 inches" },
      { label: "Machine weight", value: "128 lbs" },
    ],
    pros: ["Same spring package as Merrithew's studio machines", "Patented retractable rope system", "Low, compact frame suits home rooms", "Full accessory ecosystem (jumpboard, box, mat converter)"],
    cons: ["Low carriage height is less comfortable for those with limited mobility", "Base price doesn't include box or accessories", "Sold direct and through dealers, not on Amazon"],
  },
  {
    rank: "02",
    name: "Balanced Body Allegro 2 Reformer",
    price: "$3,995",
    verdict: "Best overall premium home reformer",
    tier: "Premium",
    description:
      "The Allegro 2 is the reformer instructors most often recommend for home use, and for good reason. The aluminium frame is quiet and rigid; the Infinity Footbar adjusts to four heights and slides along the frame to nine positions, so the machine adapts to almost any body length; and five Balanced Body springs (three red, one blue, one yellow) cover the full repertoire. With the optional wheel kit it can be stood on end for storage, and the frame carries a 10-year warranty. It costs $3,995 direct from Balanced Body (more with legs). Balanced Body has also launched the Allegro Nextgen, from $3,245, if you want the newest version of the design.",
    affiliateUrl: "https://www.pilates.com/products/allegro-2-pilates-reformer/",
    specs: [
      { label: "Frame", value: "Aluminium" },
      { label: "Springs", value: "5 springs: 3 red, 1 blue, 1 yellow" },
      { label: "Footbar", value: "Infinity Footbar: 4 heights, 9 horizontal positions" },
      { label: "Storage", value: "Stands on end (wheel kit required)" },
      { label: "Warranty", value: "10 years on frame" },
    ],
    pros: ["Infinity Footbar adjusts along the full frame", "Quiet, rigid aluminium frame", "Stands on end for storage with wheel kit", "10-year frame warranty", "Huge Balanced Body accessory range (tower, jumpboard, box)"],
    cons: ["$3,995 before accessories", "Legs, wheel kit and box cost extra", "Not currently sold on Amazon"],
  },
  {
    rank: "03",
    name: "Merrithew V2 Max Reformer",
    price: "About $4,600",
    verdict: "Best for multi-user households and clinical use",
    tier: "Premium",
    description:
      "The V2 Max is the full-height, wider sibling of the SPX Max, built for high-traffic studios, rehab clinics and serious home users. The carriage is 24 inches wide (versus 22 on the SPX Max) and sits 16 inches off the floor, a standard studio height that is easier to get on and off. It uses the same High Precision Spring package and patented retractable rope system, and it accepts Merrithew's Vertical Frame if you later want Cadillac-style work. Dealer pricing runs about $4,600 for the reformer alone. Choose it over the SPX Max if several people will use the machine or if a higher carriage matters to you.",
    affiliateUrl: "https://www.merrithew.com/shop/ProductDetail/ST01071_V2-Max-Reformer",
    specs: [
      { label: "Dimensions", value: "30″W × 97″L" },
      { label: "Weight capacity", value: "350 lbs" },
      { label: "Springs", value: "5 springs (3×100%, 1×50%, 1×25%)" },
      { label: "Carriage", value: "24″ wide, 16″ from floor" },
      { label: "Machine weight", value: "145 lbs" },
    ],
    pros: ["Wider 24-inch carriage", "Standard 16-inch studio height — easier to mount", "Patented retractable rope system", "Upgradeable with Vertical Frame, jumpboard and rebounder", "Built for commercial use"],
    cons: ["145 lbs and 30 inches wide — needs a dedicated space", "About $1,100 more than the SPX Max for the same spring package", "Sold direct and through dealers, not on Amazon"],
  },
  {
    rank: "04",
    name: "Elina Pilates Elite Wood Reformer",
    price: "$3,995",
    verdict: "Best aesthetics and carriage feel",
    tier: "Premium",
    description:
      "The Elina Elite Wood Reformer is the pick for practitioners who care as much about how the machine looks in a room as how it rides. It is built from rock maple with a six-spring system, a height-adjustable springbar, a 7-position quick-release footbar and eight polyurethane carriage wheels on high-precision bearings, which gives it a notably quiet, smooth glide. It stacks, so it also works for a small studio setup. At about $3,995 it matches the Allegro 2 on price; the trade-off is a smaller North American dealer network and parts ecosystem.",
    affiliateUrl: "https://www.elinapilates.com/us/en/pilates-reformers/307-wood-reformer-for-pilates-elite.html",
    specs: [
      { label: "Construction", value: "Rock maple" },
      { label: "Springs", value: "6 springs, height-adjustable springbar" },
      { label: "Carriage wheels", value: "8 polyurethane, high-precision bearings" },
      { label: "Footbar positions", value: "7 quick-release positions" },
      { label: "Stackable", value: "Yes" },
    ],
    pros: ["Quiet, smooth carriage on eight PU wheels", "Rock maple construction", "Six-spring system", "Genuine studio aesthetic", "Stackable"],
    cons: ["Smaller parts/accessory ecosystem than Balanced Body or Merrithew", "Longer lead times possible (Spanish manufacturer)", "Limited North American dealer network"],
  },
  {
    rank: "05",
    name: "Peak Pilates MVe Reformer",
    price: "$4,295 with box",
    verdict: "Best for home studios with multiple machines",
    tier: "Premium-Professional",
    description:
      "The Peak Pilates MVe ($4,295 with the Long/Short Box, direct from Peak Pilates) is built for home studio owners who want professional build quality and may add a second machine later. MVe reformers nest up to four high for storage. The aluminium frame, five-spring system (1 heavy, 2 medium, 2 light), retractable shoulder blocks, retractable risers and gear-bar adjustment give full-repertoire capability, and a Tower bundle is available if you want reformer, tower and mat work from one frame. Note the 103-inch length: measure your room before you order.",
    affiliateUrl: "https://www.peakpilates.com/products/mve-reformer",
    specs: [
      { label: "Dimensions", value: "15.5″H × 29″W × 103″L" },
      { label: "Weight capacity", value: "300 lbs" },
      { label: "Springs", value: "5 springs (1 heavy, 2 medium, 2 light)" },
      { label: "Machine weight", value: "135 lbs (reformer only)" },
      { label: "Stackable", value: "Nests up to 4 high" },
    ],
    pros: ["Nests up to four high for storage", "Retractable shoulder blocks and risers", "Tower bundle available", "Professional studio quality"],
    cons: ["103 inches long — the longest machine here", "300 lb user limit is lower than Merrithew's 350 lb", "Sold direct and through dealers, not on Amazon"],
  },
  {
    rank: "06",
    name: "Gratz Classic Reformer (Aluminium)",
    price: "$4,645",
    verdict: "Best for classical method purists",
    tier: "Heritage",
    description:
      "Gratz made apparatus for Joseph Pilates in New York and still hand-builds its reformers there to his designs. The Classic Reformer uses four springs of equal tension and a gear bar that changes spring pre-tension rather than swapping springs, which gives the firm, consistent feel classical teachers train on. The 86-inch aluminium Classic costs $4,645 direct from Gratz; other lengths and a maple Designer version are also available. There is little adjustability compared with contemporary machines, and that is the point: if your training is classical, this is the reference.",
    affiliateUrl: "https://www.gratzpilates.com/products/86-aluminum-reformer",
    specs: [
      { label: "Lengths", value: "80″, 86″, 89″" },
      { label: "Springs", value: "4 equal-tension springs + gear bar" },
      { label: "Construction", value: "Aluminium (maple Designer version available)" },
      { label: "Origin", value: "Hand-built in New York" },
      { label: "Lineage", value: "Joseph Pilates' original design" },
    ],
    pros: ["The classical reference machine", "Gear bar adjusts pre-tension, not just spring load", "Unmatched heritage", "Built to last decades", "Three lengths"],
    cons: ["Little adjustability compared with contemporary machines", "Four equal springs (no graduated light springs)", "Lead times vary — made to order", "Limited accessory ecosystem beyond classical apparatus"],
  },
  {
    rank: "07",
    name: "Merrithew At Home SPX Reformer Package",
    price: "$3,349",
    verdict: "Best premium reformer sold on Amazon",
    tier: "Premium Home",
    description:
      "If you want a genuine Merrithew machine with Amazon's delivery and returns, the At Home SPX package is the one to buy, and it is sold and shipped by Amazon.com itself. It is Merrithew's home-specific model rather than the studio SPX Max, but it uses the same quality components: aluminium rails, a smooth, quiet carriage and five springs (4 × 100%, 1 × 50%). The package includes the reformer box, a metal roll-up pole, a padded platform extender and double-loop straps, so there is nothing else to buy to start. It measures 96.5 inches long and weighs 115 lbs.",
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
];

const FAQS = [
  { q: "What is the best premium Pilates reformer for home use?", a: "The Balanced Body Allegro 2 ($3,995) is the most recommended premium home reformer by master-level instructors, with its Infinity Footbar, a 10-year frame warranty, and full Balanced Body accessory compatibility. For classical purists, the Gratz Classic Reformer ($4,645 for the 86-inch aluminium model) is the original Joseph Pilates design. If you want to buy on Amazon, the Merrithew At Home SPX Reformer Package ($3,349, sold by Amazon.com) is the best premium option there." },
  { q: "What is the difference between the Merrithew SPX Max and V2 Max?", a: "Both use the same five-spring High Precision package and Merrithew's patented retractable rope system. The SPX Max ($3,499) is compact: 26.5 inches wide with a 22-inch carriage sitting 9 inches off the floor. The V2 Max (about $4,600) is 30 inches wide with a 24-inch carriage at a standard 16-inch height, which is easier to get on and off and roomier for larger users, and it accepts the Vertical Frame. For one person training at home the SPX Max does the same job for about $1,100 less." },
  { q: "Is the Balanced Body Allegro 2 worth the price?", a: "For practitioners who train 4+ times per week and want a machine they will never replace, yes. The Allegro 2's Infinity Footbar, quiet aluminium frame and 10-year frame warranty justify $3,995. For those training 2-3 times per week, the Merrithew SPX Max at $3,499 covers the full repertoire with comparable spring quality for around $500 less." },
  { q: "Why is the Gratz reformer so expensive?", a: "The Gratz Classic Reformer ($4,645 for the 86-inch aluminium model) is handmade in New York to specifications that trace directly to Joseph Pilates. The four equal springs and gear bar (which changes spring pre-tension rather than swapping springs) create a resistance feel unlike modern competitors. For classical lineage practitioners, the Gratz is not simply expensive — it is the original, and everything else is a variation." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://pilatescollectiveclub.com/blog/best-premium-pilates-reformer/#article",
      "headline": "Best Premium Pilates Reformers (2026): $2,000–$5,000+ Honestly Reviewed",
      "description": "The best premium Pilates reformers for serious home practitioners — Balanced Body Allegro 2, Merrithew V2 Max, Gratz, Elina, and Peak Pilates MVe. Verified prices, honest assessments.",
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
                Prices in this guide were verified at primary sources (pilates.com, merrithew.com, gratzpilates.com, peakpilates.com, elinapilates.com, Amazon) in September 2026. Premium reformer pricing changes; treat our figures as current benchmarks and verify before purchasing.
              </p>
              <div className="rounded-xl p-5 mt-6" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(139,74,49,0.15)" }}>
                <p className="text-sm font-semibold mb-1" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Our overall pick</p>
                <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                  The <strong>Balanced Body Allegro 2</strong> at $3,995 offers the best combination of carriage quality, accessory ecosystem, and long-term value for most serious home practitioners. The Gratz is the right answer if your training is classical and authenticity matters to you above all else.
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>7 Reformers · $3,349 to $4,645</p>
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
                      { model: "Merrithew SPX Max", price: "$3,499", springs: "5 springs", rail: "97″", carriage: "22″ wide, 9″ high", best: "Entry premium" },
                      { model: "Allegro 2", price: "$3,995", springs: "5 springs", rail: "Aluminium frame", carriage: "Infinity Footbar", best: "Best all-round" },
                      { model: "Merrithew V2 Max", price: "~$4,600", springs: "5 high-precision", rail: "97″", carriage: "24″ wide, 16″ high", best: "Multi-user / clinical" },
                      { model: "Elina Elite Wood", price: "$3,995", springs: "6 springs", rail: "Rock maple", carriage: "8 PU wheels", best: "Aesthetics + feel" },
                      { model: "Peak Pilates MVe", price: "$4,295", springs: "5 springs", rail: "103″", carriage: "Standard", best: "Home studios" },
                      { model: "Gratz Classic", price: "$4,645", springs: "4 equal + gear bar", rail: "80–89″", carriage: "Traditional", best: "Classical purists" },
                      { model: "Merrithew At Home SPX", price: "$3,349", springs: "5 springs", rail: "96.5″", carriage: "Standard", best: "Buying on Amazon" },
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
                { who: "Serious home practitioners, all methods", buy: "Balanced Body Allegro 2", reason: "The most complete single purchase — carriage quality, Infinity Footbar, vertical storage, accessory ecosystem, and 10-year warranty." },
                { who: "Practitioners trained in the STOTT/Merrithew method", buy: "Merrithew V2 Max", reason: "The machine your instructors used. Familiar spring feel, retractable rope system, and full Merrithew accessory compatibility." },
                { who: "Classical Pilates practitioners", buy: "Gratz Classic Reformer", reason: "There is no more authentic classical reformer. If your training traces to Romana or the New York classical tradition, the Gratz is the right answer." },
                { who: "Home studio owners running private clients", buy: "Peak Pilates MVe", reason: "Nesting up to four high makes the MVe the practical choice when space and multi-machine use both matter." },
                { who: "Practitioners who prioritise aesthetics and feel equally", buy: "Elina Elite Wood", reason: "The most beautiful machine in this class, with a carriage feel that rivals the Allegro 2 at a comparable price." },
                { who: "Transitioning from studio to home practice, budget-conscious", buy: "Merrithew SPX Max", reason: "The same spring package as the V2 Max for about $1,100 less. The practical choice when the full premium budget is not justified." },
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
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#ffffff", fontFamily: "'Playfair Display', serif" }}>For most people: the Balanced Body Allegro 2.</h2>
              <p className="text-base leading-relaxed mb-6 opacity-85" style={{ color: "#ffffff", fontFamily: "'Montserrat', sans-serif" }}>
                If you are training seriously, training frequently, and want one machine that will serve the full classical and contemporary repertoire for the next twenty years, the Allegro 2 at $3,995 is the clearest answer in the premium category. The Infinity Footbar, vertical storage, huge accessory range and 10-year frame warranty are a combination no competitor matches at this price. If your lineage is classical and you train with a Gratz-familiar instructor, the Gratz Classic is the correct machine — not for nostalgia but for functional authenticity.
              </p>
              <a href="https://www.pilates.com/products/allegro-2-pilates-reformer/" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90" style={{ backgroundColor: "#ffffff", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>
                Shop Balanced Body Allegro 2 →
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
