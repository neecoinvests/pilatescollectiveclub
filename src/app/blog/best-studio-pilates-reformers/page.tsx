import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Studio Pilates Reformers (2026): Commercial Grade Guide",
  description: "The best studio-grade Pilates reformers — Align-Pilates A8-Pro, Balanced Body Metro IQ and Studio Reformer, BASI Systems and Gratz reviewed with verified specs and prices.",
  openGraph: {
    title: "Best Studio-Grade Pilates Reformers (2026): Align, BASI, Balanced Body & More",
    description: "Five studio-grade reformers that serious home practitioners and studio owners often overlook — with verified specs and honest trade-offs.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-studio-pilates-reformers",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/roxana-popovici-hiHBILFNah4-unsplash.jpg", width: 1200, height: 630, alt: "Studio-grade Pilates reformers — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Studio-Grade Pilates Reformers (2026)",
    description: "Align-Pilates A8-Pro, Balanced Body Metro IQ, BASI Systems, BB Studio Reformer and Gratz Maple — the deeper premium guide.",
    images: ["https://pilatescollectiveclub.com/pictures/roxana-popovici-hiHBILFNah4-unsplash.jpg"],
  },
  keywords: ["best studio pilates reformer", "commercial pilates reformer 2026", "studio grade pilates reformer", "pilates studio equipment buy", "balanced body studio reformer", "merrithew commercial reformer", "gratz studio reformer", "best reformer for pilates studio"],
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-studio-pilates-reformers" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Align-Pilates A8-Pro Reformer",
    price: "Dealer pricing",
    verdict: "Widest carriage and longest travel",
    tier: "Studio Grade",
    description:
      "Align-Pilates' A8-Pro is the reformer to look at if carriage size matters to you. Its 26.5-inch (67cm) carriage is the widest on the market and its 44.5 inches (113cm) of travel is the longest of any standard reformer, which you feel immediately in hip-width supine work and long-box exercises, especially if you have broad shoulders. It rides on eight polyurethane wheels, uses Align's Rapid Change Spring Bar, takes users up to 331 lbs, and can be built on low (11\"), standard (16.5\") or rehab-height (25.25\") legs. Align is widely used in UK and European studios; in the US it is sold through authorised dealers (a bundle with tower runs about $5,590), so get a quote for the configuration you want. If you'd rather buy on Amazon, Align's home C8-Pro ($2,750, sold by Merrithew) uses the same springs and eight-wheel carriage in a stackable home frame.",
    affiliateUrl: "https://goalignpilates.com/product/a8-pro-pilates-reformer/",
    specs: [
      { label: "Carriage width", value: "26.5 inches (67cm)" },
      { label: "Carriage travel", value: "44.5 inches (113cm)" },
      { label: "Weight capacity", value: "331 lbs (150kg)" },
      { label: "Carriage wheels", value: "8 polyurethane" },
      { label: "Leg heights", value: "11\", 16.5\" or 25.25\"" },
    ],
    pros: [
      "Widest carriage (26.5\") and longest travel (44.5\") available",
      "Rapid Change Spring Bar for fast spring changes",
      "Three leg heights, including rehab height",
      "Quiet eight-wheel carriage",
      "331 lb user capacity",
    ],
    cons: [
      "Smaller US dealer network than Balanced Body or Merrithew",
      "Pricing by dealer quote — varies by configuration",
      "Accessory range narrower than Balanced Body's",
      "Less resale recognition in North America",
    ],
  },
  {
    rank: "02",
    name: "Balanced Body Metro IQ Reformer",
    price: "$2,330",
    verdict: "Best for small spaces and city apartments",
    tier: "Premium Compact",
    description:
      "The Metro IQ solves the problem that stops most people owning a real reformer: space. Its patented telescoping frame extends to 98 inches for training and shortens to 62 inches for storage, so it can slide under a bed (wheelbarrow-wheel version) or stand upright in a closet (library-wheel version). You still get Balanced Body's five Signature Springs, a seamless carriage track on an eight-wheel system, a 4-position footbar with 9 inches of adjustment, a 3-position headrest, removable 2-position shoulder rests and a built-in 5.5-inch standing platform. At about 85 lbs it's also far easier to move than a full studio machine. The trade-off is a lighter-duty frame and fewer accessory options than the Allegro 2 or Studio Reformer. Sold by Balanced Body on Amazon.",
    affiliateUrl: "https://www.amazon.com/dp/B09HNCMTZL?tag=pilatescollective-20",
    specs: [
      { label: "Extended length", value: "Up to 98 inches" },
      { label: "Stored length", value: "62 inches (telescoping frame)" },
      { label: "Springs", value: "5 Signature Springs" },
      { label: "Footbar", value: "4 positions, 9\" of adjustment" },
      { label: "Machine weight", value: "About 85 lbs" },
    ],
    pros: [
      "Telescoping frame — 62\" stored, up to 98\" in use",
      "Genuine Balanced Body springs and carriage",
      "Light enough to move and store easily",
      "Built-in standing platform",
      "Sold by Balanced Body on Amazon",
    ],
    cons: [
      "Lighter-duty than a full studio frame",
      "Fewer accessory and tower options than the Allegro 2",
      "Choose the wheel version to match how you’ll store it (under-bed vs upright)",
      "Stock can be limited — check availability",
    ],
  },
  {
    rank: "03",
    name: "BASI Systems Reformer",
    price: "From $6,850",
    verdict: "Best for practitioners trained in the BASI method",
    tier: "Professional",
    description:
      "BASI Systems is the equipment line developed with Rael Isacowitz, founder of BASI Pilates (Body Arts and Science International), to support the BASI repertoire. The reformer runs on aircraft-grade aluminium tracks for a smooth, quiet carriage and adjusts for a wide range of body sizes, and if you trained with a BASI teacher it will feel exactly like the machine you learned on. In the US, BASI Systems equipment is sold exclusively through the official distributor Bodynetworx: the full Reformer starts at $6,850, the Compact Reformer (a shorter frame for smaller rooms) at $5,250, and the Reformer Combo with full tower lists at $11,750. Machines are built to order, so allow for lead time.",
    affiliateUrl: "https://bodynetworx.com/products/reformer",
    specs: [
      { label: "Frame", value: "Aircraft-grade aluminium tracks" },
      { label: "Reformer", value: "From $6,850" },
      { label: "Compact Reformer", value: "From $5,250" },
      { label: "Reformer Combo (with tower)", value: "$11,750 list" },
      { label: "US distributor", value: "Bodynetworx (exclusive)" },
    ],
    pros: [
      "Designed around the BASI method and repertoire",
      "Smooth, quiet aluminium-track carriage",
      "Compact version for smaller rooms",
      "Combo version adds a full Cadillac-style tower",
      "The machine BASI-trained teachers learned on",
    ],
    cons: [
      "The most expensive reformer in this guide",
      "Single US distributor",
      "Built to order — lead times vary",
      "Narrower accessory ecosystem than Balanced Body or Merrithew",
    ],
  },
  {
    rank: "04",
    name: "Balanced Body Studio Reformer (Revo Footbar)",
    price: "$4,700",
    verdict: "Best for serious multi-machine home studios",
    tier: "Professional",
    description:
      "The Studio Reformer is Balanced Body's commercial machine and the one you're most likely to have trained on in a contemporary studio. The frame is solid rock maple with commercial-grade upholstery, built for daily professional use. Five Signature Springs give 46 resistance combinations; the Revo system adds a 4-position locking footbar and a 5-position springbar; TwistLock shoulder rests make fast, secure changes. It is compatible with Balanced Body's tower and mat-conversion options (Balanced Body also sells it with Tower and Mat Conversion for $6,975). At roughly 92.6 × 26.5 inches it doesn't fold or stand on end, so it needs a permanent spot. Sold by Balanced Body on Amazon; made to order, with three to four weeks to ship.",
    affiliateUrl: "https://www.amazon.com/dp/B002XVWIFE?tag=pilatescollective-20",
    specs: [
      { label: "Dimensions", value: "92.6\" L × 26.5\" W × 15\" H" },
      { label: "Frame", value: "Solid rock maple" },
      { label: "Springs", value: "5 Signature Springs (46 combinations)" },
      { label: "Footbar / springbar", value: "Revo: 4-position footbar, 5-position springbar" },
      { label: "Shoulder rests", value: "TwistLock" },
    ],
    pros: [
      "Balanced Body's commercial studio machine",
      "Solid rock maple frame built for daily professional use",
      "Revo footbar and springbar for quick, secure adjustments",
      "Tower and mat-conversion options available",
      "Sold by Balanced Body on Amazon",
    ],
    cons: [
      "Does not fold — needs permanent floor space",
      "More expensive than the Allegro 2",
      "Made to order — three to four weeks to ship",
      "Heavier and less portable than home-focused machines",
    ],
  },
  {
    rank: "05",
    name: "Gratz Designer Reformer (Maple)",
    price: "From $4,590",
    verdict: "Best for classical practitioners who prefer wood",
    tier: "Heritage",
    description:
      "Gratz built apparatus for Joseph Pilates in New York, and the Designer Reformer is its solid rock maple machine, still made there to order from sustainably harvested maple. It shares the classical Gratz set-up with the aluminium Classic: four springs of equal tension and a gear bar that changes spring pre-tension, giving the firm, even feel classical teachers train on. Prices are close to the aluminium version: the 80-inch Designer is $4,590 and the 89-inch starts at $4,745 direct from Gratz. The choice between maple and aluminium is mostly about look and feel; wood needs a little more care and a stable indoor climate. Lead times can run to several months.",
    affiliateUrl: "https://www.gratzpilates.com/products/86-designer-reformer-in-maple-wood",
    specs: [
      { label: "Construction", value: "Solid rock maple" },
      { label: "Springs", value: "4 equal-tension springs + gear bar" },
      { label: "Lengths", value: "80\", 86\", 89\"" },
      { label: "Origin", value: "Hand-built in New York" },
      { label: "Price", value: "$4,590 (80\") to $4,745+ (89\")" },
    ],
    pros: [
      "The classical Gratz feel in solid maple",
      "Gear bar adjusts spring pre-tension",
      "Priced close to the aluminium version",
      "Available in three lengths",
      "Built to last decades",
    ],
    cons: [
      "Wood needs care and a stable climate",
      "Little adjustability compared with contemporary machines",
      "Doesn't fold — permanent installation",
      "Made to order — lead times of up to several months",
    ],
  },
];

const FAQS = [
  { q: "What is the difference between the Balanced Body Allegro 2 and Studio Reformer?", a: "The Allegro 2 is Balanced Body's home-focused machine: an aluminium frame with the Infinity Footbar that slides along the frame, and it can be stood on end for storage with the wheel kit. The Studio Reformer is the commercial machine: a solid rock maple frame, Revo footbar and springbar, built for permanent installation and heavy daily use, with tower and mat-conversion options. Both use Balanced Body's five Signature Springs. For most homes the Allegro 2 is the better fit; for a dedicated studio room, the Studio Reformer." },
  { q: "Is the Align Pilates A8 Pro a genuine professional reformer?", a: "Yes. The Align Pilates A8 Pro is used in boutique studios across the UK and Europe and features the widest carriage (26.5 inches) and longest carriage travel (44.5 inches) of any standard reformer. It takes users up to 331 lbs, runs on eight polyurethane wheels and comes in three leg heights, including rehab height. Its main limitation for North American buyers is the smaller US dealer network compared to Balanced Body or Merrithew." },
  { q: "What makes the BASI Systems reformer different from Balanced Body?", a: "BASI Systems machines were developed with Rael Isacowitz to support the BASI method, so if you trained with BASI they reproduce the set-up and feel you learned on. The reformer runs on aircraft-grade aluminium tracks. The trade-offs are price (from $6,850 for the full Reformer, $5,250 for the Compact), a single US distributor (Bodynetworx) and build-to-order lead times." },
  { q: "Should I buy the Gratz aluminum or maple reformer?", a: "The functional difference is minimal — both use Gratz's four-spring system with a gear bar and come in 80\", 86\" and 89\" lengths. Prices are close, too: the 86-inch aluminium Classic is $4,645, and the maple Designer runs from $4,590 (80\") to $4,745+ (89\"). Choose maple for the look and feel of wood; choose aluminium if you want lower maintenance." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://pilatescollectiveclub.com/blog/best-studio-pilates-reformers/#article",
      "headline": "Best Studio-Grade Pilates Reformers (2026): Align, BASI, Balanced Body & More",
      "description": "Studio-grade Pilates reformers beyond the usual suspects — Align Pilates A8 Pro, Balanced Body Metro IQ, BASI Systems, Balanced Body Studio Reformer, and Gratz Maple.",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/roxana-popovici-hiHBILFNah4-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "@id": "https://pilatescollectiveclub.com/#organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "@id": "https://pilatescollectiveclub.com/#organization", "name": "Pilates Collective Club", "logo": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/pcc-logo.png" } },
      "datePublished": "2026-05-17",
      "dateModified": "2026-09-22",
      "url": "https://pilatescollectiveclub.com/blog/best-studio-pilates-reformers",
      "mainEntityOfPage": "https://pilatescollectiveclub.com/blog/best-studio-pilates-reformers",
      "articleSection": "Equipment",
      "inLanguage": "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Studio Pilates Reformers", "item": "https://pilatescollectiveclub.com/blog/best-studio-pilates-reformers" },
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
      "name": "Best Studio-Grade Pilates Reformers (2026)",
      "numberOfItems": PRODUCTS.length,
      "itemListElement": PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "description": p.description,
          "offers": { "@type": "Offer", "priceCurrency": "USD", "price": p.price.replace(/[^0-9,]/g, "").split(",")[0], "availability": "https://schema.org/InStock", "url": p.affiliateUrl },
          "review": { "@type": "Review", "reviewBody": p.description, "author": { "@type": "Organization", "name": "Pilates Collective Club" }, "reviewRating": { "@type": "Rating", "ratingValue": 4.9 - i * 0.05, "bestRating": 5, "worstRating": 1 } },
        },
      })),
    },
  ],
};

export default function BestStudioReformersPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Studio Reformers</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Studio-Grade Pilates Reformers<br /><span style={{ color: "#8b4a31" }}>(2026): 5 Machines Worth Knowing</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 13 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Our first premium reformer guide covered the machines that appear on every shortlist: Balanced Body Allegro 2, Merrithew V2 Max, Gratz Classic, Elina Elite Wood, Peak MVe, Merrithew SPX Max and the Merrithew At Home SPX. This guide covers five machines that serious practitioners and studio owners frequently miss — either because they represent different price points, different brand lineages, or solve a specific problem (space, method compatibility, carriage width) that the standard roundup machines do not.
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/roxana-popovici-hiHBILFNah4-unsplash.jpg" alt="Studio-grade Pilates reformer machines" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            {/* Introduction */}
            <div className="mb-16 mt-4">
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Prices were checked in September 2026 on Amazon (for the Balanced Body machines, sold by Balanced Body), at gratzpilates.com and at Bodynetworx, BASI Systems&apos; US distributor. Align-Pilates is priced by US dealers, so confirm the configuration you want before ordering.
              </p>
              <div className="rounded-xl p-5 mt-6" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(139,74,49,0.15)" }}>
                <p className="text-sm font-semibold mb-1" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>The standout in this guide</p>
                <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                  For practitioners with space constraints, the <strong>Balanced Body Metro IQ</strong> at $2,330 is the most underrated machine in the premium category. For those building a dedicated studio, the <strong>Balanced Body Studio Reformer</strong> is the commercial machine most contemporary studios run. And if you want more room on the carriage, the <strong>Align-Pilates A8-Pro</strong> has the widest carriage available at 26.5 inches.
                </p>
              </div>
            </div>

            {/* What makes these machines different */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Five machines, five different problems solved</h2>
              <div className="space-y-4">
                {[
                  { heading: "Space constraints (Metro IQ)", body: "The Metro IQ's telescoping frame shrinks from 98 inches to 62 inches for storage, which is the most practical answer to the space problem for urban practitioners, and it still uses genuine Balanced Body springs and carriage." },
                  { heading: "Carriage width (Align A8 Pro)", body: "A standard carriage is 24 inches. The A8 Pro's 26.5-inch carriage is not a marginal improvement — it is immediately felt in hip-width supine exercises, open-hip footwork, and any repertoire element that benefits from wider lateral reference points." },
                  { heading: "Method fidelity (BASI Systems)", body: "If your training certification is through BASI International, your instructor trained on BASI equipment. A BASI Systems reformer reproduces the set-up and feel of the machines the BASI repertoire was developed on." },
                  { heading: "Permanent studio build-out (Studio Reformer)", body: "The Balanced Body Studio Reformer is the commercial machine found in most contemporary studios. If you are building a dedicated home studio with multiple machines, or want a maple machine with tower and mat-conversion options, it is the natural choice over the Allegro 2." },
                  { heading: "Material authenticity (Gratz Maple)", body: "The Gratz maple Designer Reformer is functionally the same as the aluminium Classic. It's for classical practitioners who want the look and feel of a wooden machine, closer to the apparatus Joseph Pilates worked with." },
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Reformers · $2,330 to $6,850+</p>
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
                      {["Reformer", "Price", "Carriage", "Key Feature", "Best For"].map((h) => (
                        <th key={h} className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider whitespace-nowrap" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { model: "Align A8-Pro", price: "Dealer quote", carriage: "26.5\" — widest", feature: "44.5\" travel, 3 leg heights", best: "Carriage width" },
                      { model: "BB Metro IQ", price: "$2,330", carriage: "Standard (telescoping)", feature: "62\" stored length", best: "Small spaces" },
                      { model: "BASI Systems", price: "$6,850+", carriage: "Aluminium tracks", feature: "Compact version from $5,250", best: "BASI practitioners" },
                      { model: "BB Studio Reformer", price: "$4,700", carriage: "Rock maple frame", feature: "Revo footbar, tower option", best: "Home studio build" },
                      { model: "Gratz Maple", price: "$4,590+", carriage: "Traditional", feature: "Gear bar", best: "Classical + wood" },
                    ].map((row, i) => (
                      <tr key={row.model} style={{ backgroundColor: i % 2 === 0 ? "#ffffff" : "#faf8f7", borderBottom: "1px solid rgba(217,194,186,0.2)" }}>
                        <td className="px-4 py-3 font-semibold whitespace-nowrap" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{row.model}</td>
                        <td className="px-4 py-3 whitespace-nowrap" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>{row.price}</td>
                        <td className="px-4 py-3" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{row.carriage}</td>
                        <td className="px-4 py-3" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{row.feature}</td>
                        <td className="px-4 py-3" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{row.best}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs mt-3" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Prices checked on Amazon and at manufacturer or distributor websites, September 2026. BASI and Studio Reformer prices approximate — verify at primary sources before purchasing.</p>
            </div>

            {/* Who should buy what */}
            <div className="mb-16 space-y-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Who should buy which</h2>
              {[
                { who: "Apartment or small-space practitioners", buy: "Balanced Body Metro IQ", reason: "The only machine in the premium category that stores at 62 inches. Genuine Balanced Body springs and carriage in an apartment-friendly format." },
                { who: "Practitioners who train in studios using Align Pilates equipment", buy: "Align Pilates A8 Pro", reason: "If you have trained in a UK or European studio and want to replicate that carriage width at home, the A8-Pro's 26.5-inch carriage is the closest match; ask a US dealer for a quote." },
                { who: "BASI-certified practitioners building a home studio", buy: "BASI Systems Reformer", reason: "If your instructors trained you on BASI equipment, this is the machine that matches what you learned on." },
                { who: "Home studio owners who want full tower capability", buy: "Balanced Body Studio Reformer", reason: "The Allegro 2 can take a tower too, but the Studio Reformer's maple frame and Revo adjustments are built for a permanent, heavily used studio, and Balanced Body sells it with Tower and Mat Conversion." },
                { who: "Classical practitioners who want the maple Gratz", buy: "Gratz Designer Reformer (Maple)", reason: "If you have decided on Gratz (as every classical practitioner should consider), the choice between aluminium and maple is about look and maintenance; they are functionally the same and similarly priced." },
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
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#ffffff", fontFamily: "'Playfair Display', serif" }}>The most underrated machine in this guide: Balanced Body Metro IQ.</h2>
              <p className="text-base leading-relaxed mb-6 opacity-85" style={{ color: "#ffffff", fontFamily: "'Montserrat', sans-serif" }}>
                Most premium reformer guides ignore the Metro IQ because it does not have the prestige of the Allegro 2 or V2 Max. That is a mistake. At $2,330 with a 62-inch stored length and genuine Balanced Body springs, it is the machine that unlocks serious home practice for the majority of urban practitioners who otherwise cannot justify the floor space. If you have room for a permanent installation, the Balanced Body Studio Reformer is the professional choice. And if you are drawn to classical practice, the Gratz maple Designer Reformer (from $4,590) is the closest thing to the original — built to Joseph Pilates&apos; design in the same city where he worked.
              </p>
              <a href="https://www.amazon.com/dp/B09HNCMTZL?tag=pilatescollective-20" target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-6 py-3 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90" style={{ backgroundColor: "#ffffff", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>
                Shop Balanced Body Metro IQ →
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
                <ArticleCard title="Best Premium Pilates Reformers ($2,000–$5,000+)" excerpt="Our first premium reformer guide: Allegro 2, SPX Max, V2 Max, Gratz, Elina and Peak MVe compared." href="/blog/best-premium-pilates-reformer" category="Equipment" readTime="14 min read" date="May 2026" imageUrl="/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg" />
                <ArticleCard title="Balanced Body vs Merrithew: Which Should You Buy?" excerpt="The definitive head-to-head of the two dominant professional reformer brands — compared on carriage, springs, accessories, and value." href="/blog/balanced-body-vs-merrithew" category="Comparison" readTime="13 min read" date="May 2026" imageUrl="/pictures/roxana-popovici-cZ0WYsBFHhs-unsplash.jpg" />
                <ArticleCard title="Peak Pilates Brand Guide" excerpt="Peak's studio reformers are in tens of thousands of professional studios — here's what sets them apart." href="/blog/peak-pilates" category="Brand Guide" readTime="10 min read" date="May 2026" imageUrl="/pictures/samantha-sheppard-b8Q5fHBsyik-unsplash.jpg" />
                <ArticleCard title="BASI Systems Pilates Review" excerpt="The brand behind BASI's world-famous certification programme — and the equipment they build to match it." href="/blog/basi-systems-pilates" category="Brand Guide" readTime="10 min read" date="May 2026" imageUrl="/pictures/junseong-lee-G9H5edUL0T8-unsplash.jpg" />
                <ArticleCard title="Merrithew V2 Max Reformer: In-Depth Review" excerpt="The most detailed assessment of Merrithew's most advanced professional machine." href="/blog/merrithew-v2-max-review" category="Equipment" readTime="11 min read" date="May 2026" imageUrl="/pictures/samantha-sheppard-b8Q5fHBsyik-unsplash.jpg" />
                <ArticleCard title="Align Pilates Reformer Review" excerpt="Align-Pilates makes some of the most compact full-featured reformers on the market." href="/blog/align-pilates-reformer-review" category="Brand Review" readTime="10 min read" date="May 2026" imageUrl="/pictures/elena-kloppenburg-erUC4fTtCuo-unsplash.jpg" />
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
