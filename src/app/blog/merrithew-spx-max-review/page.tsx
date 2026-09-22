import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Merrithew At Home SPX Review (2026): Worth $3,349?",
  description: "Merrithew's At Home SPX Reformer Package reviewed at $3,349 — the real Amazon-sold SPX machine, since a standalone 'SPX Max' is not actually sold there. Spring feel, what's included, and how it compares to Balanced Body.",
  keywords: ["merrithew at home spx review", "merrithew spx reformer 2026", "stott pilates spx review", "merrithew spx price", "merrithew spx vs balanced body", "best home reformer merrithew spx", "is merrithew at home spx worth it", "stott spx reformer comparison"],
  openGraph: {
    title: "Merrithew At Home SPX Review (2026): Honestly Assessed",
    description: "Deep review of Merrithew's real Amazon-sold SPX reformer — spring feel, what's actually included, and the honest comparison with Balanced Body.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/merrithew-spx-max-review",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/junseong-lee-AX8cf6mkCzw-unsplash.jpg", width: 1200, height: 630, alt: "Merrithew At Home SPX review — Pilates Collective Club" }],
  },
  twitter: { card: "summary_large_image", title: "Merrithew At Home SPX Review (2026)", description: "Genuine Merrithew spring quality, STOTT PILATES methodology. An honest deep review of the real Amazon listing.", images: ["https://pilatescollectiveclub.com/pictures/junseong-lee-AX8cf6mkCzw-unsplash.jpg"] },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/merrithew-spx-max-review" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Merrithew At Home SPX Reformer Package",
    price: "$3,349",
    verdict: "The real SPX machine Merrithew actually sells on Amazon",
    description: "A note before anything else: this reformer is often searched for as the \"SPX Max,\" but that name is not a standalone Amazon listing. The machine Merrithew genuinely sells on Amazon is the At Home SPX Reformer Package, and that is what this review covers, priced honestly at $3,349. It carries Merrithew's five colour-coded spring system, with unusually fine gradation at the light end — the range that matters most for rehabilitation and prenatal work — and is sized to fit along a wall in most bedrooms rather than requiring a dedicated studio footprint.",
    affiliateUrl: "https://www.amazon.com/dp/B004FGT0TM?tag=pilatescollective-20",
    tag: "The Real Listing",
  },
  {
    rank: "02",
    name: "Merrithew Jumpboard (22\")",
    price: "$470",
    verdict: "The genuine Merrithew jumpboard for the SPX platform",
    description: "Converts footwork into a low-impact jumping sequence, sized for Merrithew's SPX-family carriage. If you want a cardio component in your home sessions, this is the real Merrithew-branded accessory rather than a generic aftermarket board — confirm fit against your specific reformer before ordering.",
    affiliateUrl: "https://www.amazon.com/dp/B004ICZD2Q?tag=pilatescollective-20",
    tag: "Cardio Add-On",
  },
  {
    rank: "03",
    name: "Balanced Body Sitting Box Lite",
    price: "$150",
    verdict: "A real, live sitting box — not Merrithew-branded",
    description: "Short box, long box and seated work all need a box, and we could not find a genuine Merrithew-branded box as a standalone live Amazon listing. This Balanced Body Sitting Box Lite is a real, currently-sold alternative that sits on the carriage the same way — check the dimensions against your SPX carriage before ordering, since it is not built specifically for this machine.",
    affiliateUrl: "https://www.amazon.com/dp/B0723DT2JP?tag=pilatescollective-20",
    tag: "Box Work",
  },
  {
    rank: "04",
    name: "Balanced Body Replacement Reformer Ropes with Clips",
    price: "$35",
    verdict: "Keep a spare set on hand",
    description: "Ropes stretch gradually rather than failing visibly, and a stretched rope quietly changes the working length of every strap exercise. Rope specs differ by brand, so confirm compatibility with your SPX before ordering, and replace as a matched pair.",
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
  { label: "Sold by", value: "Amazon.com directly, under the At Home SPX Reformer Package listing" },
  { label: "Price", value: "$3,349" },
  { label: "Springs", value: "Five colour-coded springs, with fine gradation at the light-resistance end" },
  { label: "Footprint", value: "Sized to fit along a wall in most bedrooms" },
  { label: "Sold as", value: "A package — confirm exactly what is included before ordering, since Merrithew's packages vary" },
  { label: "Methodology", value: "STOTT PILATES — Merrithew's contemporary, neutral-spine approach to Pilates" },
  { label: "Not included", value: "No verified standalone \"SPX Max\" model exists on Amazon; do not confuse this with the studio-line SPX Max sold through dealers" },
];

const FAQS = [
  {
    q: "Is the \"Merrithew SPX Max\" sold on Amazon?",
    a: "Not as a standalone listing. \"SPX Max\" is Merrithew's studio-line name, sold through Merrithew's own site and authorised dealers. The SPX-family machine actually sold on Amazon is the At Home SPX Reformer Package, at $3,349 — that is the real product this review covers.",
  },
  {
    q: "How does the At Home SPX compare to Balanced Body?",
    a: "Balanced Body's closest real Amazon listings in this range are the Allegro Stretch ($3,710) and the Studio Reformer ($4,700, does not fold). Balanced Body's accessory ecosystem is broader and more widely stocked; Merrithew's spring system is what owners most often cite as the reason to choose the SPX. Both are genuine professional-grade machines.",
  },
  {
    q: "Does the At Home SPX include a box?",
    a: "Confirm exactly what is included with the specific listing before ordering — Merrithew's packages vary and we could not verify a genuine Merrithew-branded box as its own live Amazon listing. A Balanced Body Sitting Box Lite is a real, currently-sold alternative if you need one separately.",
  },
  {
    q: "Does the At Home SPX fold flat for storage?",
    a: "We could not verify a fold-flat-onto-castors feature for this listing, and an earlier version of this review made that claim in error. Treat any folding claim for this machine as unverified until you check the current listing yourself.",
  },
  {
    q: "Where do I buy the Merrithew At Home SPX?",
    a: "Directly on Amazon.com, or through Merrithew authorised dealers listed on merrithew.com. Authorised dealers provide warranty coverage and access to servicing.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Merrithew At Home SPX Review (2026): The Real Amazon-Sold SPX Reformer, Honestly Assessed",
      "description": "An honest deep review of Merrithew's At Home SPX Reformer Package — the real SPX-family machine sold on Amazon — spring feel, what's included, and how it compares to Balanced Body.",
      "url": "https://pilatescollectiveclub.com/blog/merrithew-spx-max-review",
      "datePublished": "2026-05-16",
      "dateModified": "2026-09-22",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/junseong-lee-AX8cf6mkCzw-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/merrithew-spx-max-review" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Merrithew At Home SPX Review", "item": "https://pilatescollectiveclub.com/blog/merrithew-spx-max-review" },
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
  ],
};

export default function MerrithewSPXMaxReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        {/* Hero text */}
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Equipment Review</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Merrithew</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Merrithew At Home SPX Review (2026):<br /><span style={{ color: "#8b4a31" }}>The Real Amazon-Sold SPX, Honestly Assessed</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 11 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              People search for this reformer as the &quot;SPX Max,&quot; but that name isn&apos;t a real, standalone Amazon listing — it&apos;s Merrithew&apos;s studio-line name, sold through Merrithew&apos;s own site and dealers. The machine Merrithew genuinely sells on Amazon is the At Home SPX Reformer Package, at $3,349. This review covers that real listing: what it actually includes, where Merrithew&apos;s spring system genuinely earns its reputation, and how it stacks up against Balanced Body.
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image
                src="/pictures/junseong-lee-AX8cf6mkCzw-unsplash.jpg"
                alt="Merrithew At Home SPX reformer — the real SPX-family Pilates reformer sold on Amazon, reviewed for home use"
                fill
                className="object-cover"
                style={{ filter: "brightness(0.85)" }}
                priority
              />
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            {/* What makes the At Home SPX different */}
            <div className="mb-16 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What makes the At Home SPX different</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Merrithew&apos;s spring system is built around five colour-coded springs with unusually fine gradation at the light end of the resistance range. That precision matters most in rehabilitation exercises, pregnancy Pilates, and early post-surgical recovery, where a small jump between settings can be the difference between a productive rep and one that overloads a joint. The STOTT PILATES certification program has standardised these colour conventions across Merrithew&apos;s global instructor network, so a STOTT-trained practitioner works within the same resistance language wherever they train. For general home practice the difference against a well-built Balanced Body machine is less dramatic — both brands cover the full reformer repertoire — but the light-end gradation is a genuine, specific advantage worth knowing about.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                On footprint, the At Home SPX is sized to fit along a wall in most bedrooms rather than demanding a dedicated studio room, which is the reason it gets recommended for apartments and multi-use spaces. We could not verify a fold-flat-onto-castors storage feature for this specific listing — an earlier version of this review claimed the machine folds flat and rolls under a bed, and that claim did not hold up on closer checking, so it has been removed. If flat-fold, under-bed storage is a hard requirement for you, verify that feature against the current Amazon listing yourself before buying on the strength of it.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Merrithew developed the STOTT PILATES method — a contemporary, biomechanically refined approach to Pilates that emphasises natural spinal curves (neutral spine) rather than the imprinted spine of classical Pilates. For practitioners who have trained with STOTT-certified instructors, which accounts for a large share of the contemporary Pilates community, the spring colour conventions and carriage feel are exactly what they have already been taught on. Moving from studio to home on genuinely Merrithew-branded equipment removes a real variable from that transition.
              </p>
            </div>

            {/* Spec sheet */}
            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-6" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>What we could verify</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SPECS.map((spec) => (
                  <div key={spec.label} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] mb-1.5" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{spec.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Honest case against */}
            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-2xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>The honest case against the At Home SPX</h2>
              <ul className="space-y-5">
                {[
                  { heading: "Not the studio SPX Max", body: "If you specifically want the studio-line SPX Max — the machine used in some STOTT certification training — buying through Amazon does not get you that model. You would need to go through Merrithew's own site or an authorised dealer, at studio-line pricing." },
                  { heading: "Package contents vary", body: "This is sold as a package, and package contents change over time. Confirm exactly what ships with the current listing — box, straps, extenders — before assuming it matches what a previous buyer received." },
                  { heading: "No verified fold-flat storage", body: "We could not confirm a genuine flat-fold-onto-castors mechanism for this listing. Treat any storage claim as something to verify on the current listing, not something to assume." },
                  { heading: "Narrower accessory ecosystem than Balanced Body", body: "Balanced Body's range of towers, boxes, jumpboards and converters is deeper and more widely stocked. We could not find a genuine Merrithew-branded box as its own live Amazon listing at review time, which is why the accessory picks below lean on Balanced Body for that piece." },
                  { heading: "Assembly", body: "Budget a proper window for assembly rather than treating it as a quick unboxing — this is standard for professional-grade reformers generally, and doing it with two people makes it considerably easier." },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    <span className="font-semibold shrink-0 mt-0.5" style={{ color: "#8b4a31" }}>—</span>
                    <span><strong style={{ color: "#1b1c1c" }}>{item.heading}:</strong> {item.body}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products section */}
            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>The At Home SPX and Real Accessories to Pair With It</p>

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

            {/* Who should buy / who shouldn't */}
            <div className="mb-16 rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)" }}>
              <div className="px-6 py-4" style={{ backgroundColor: "#f6f3f2" }}>
                <h2 className="text-xl font-semibold" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Who should buy the At Home SPX — and who shouldn&apos;t</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ backgroundColor: "#ffffff" }}>
                {/* Buy it if */}
                <div className="p-7" style={{ borderRight: "1px solid rgba(217,194,186,0.3)" }}>
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] mb-4" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>Buy it if</p>
                  <ul className="space-y-3">
                    {[
                      "You have trained with STOTT PILATES-certified instructors and want genuinely Merrithew-branded springs at home.",
                      "You want fine resistance gradation at the light end: rehabilitation, prenatal, or post-surgical work.",
                      "You want a reformer that fits along a wall in most bedrooms without demanding a dedicated room.",
                      "You want a real Amazon-sold Merrithew machine rather than a search result for a model that isn't actually there.",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                        <span className="shrink-0 font-semibold" style={{ color: "#8b4a31" }}>+</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Don't buy it if */}
                <div className="p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] mb-4" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>Don&apos;t buy it if</p>
                  <ul className="space-y-3">
                    {[
                      "You specifically want the studio-line SPX Max — that requires buying through Merrithew or a dealer, not Amazon.",
                      "Flat-fold, under-bed storage is a non-negotiable requirement — we could not verify that feature for this listing.",
                      "You want the widest possible accessory ecosystem — Balanced Body's range is broader and more widely stocked.",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                        <span className="shrink-0 font-semibold" style={{ color: "#53433e" }}>–</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* At Home SPX vs Balanced Body */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>At Home SPX vs Balanced Body: the honest comparison</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                On springs, Merrithew&apos;s five-spring system with fine light-end gradation is the machine&apos;s clearest advantage — it&apos;s the reason rehab and prenatal practitioners specifically seek out Merrithew equipment. On accessories, Balanced Body wins clearly: its ecosystem of towers, boxes, jumpboards and converters is deeper and more widely stocked, and it is easier to find genuine parts years later. On price, the real Amazon-sold Balanced Body machines in this range are the Allegro Stretch at $3,710 and the Studio Reformer at $4,700 — both a step above the At Home SPX&apos;s $3,349, and the Studio Reformer does not fold, so it is a permanent-installation purchase rather than a space-saving one.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The clearest summary: the At Home SPX is for practitioners trained in the STOTT system, anyone who wants fine light-end spring gradation for rehab or prenatal work, and buyers who want the lowest-priced genuinely Merrithew-branded machine actually sold on Amazon. Balanced Body is for buyers who want the deepest accessory ecosystem and don&apos;t mind paying more for it. Both are real, professional-grade machines — the decision is about which ecosystem you expect to keep buying into.
              </p>
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
                <ArticleCard
                  title="Merrithew Rehab V2 Max Plus Review (2026)"
                  excerpt="Merrithew's real clinical-grade Amazon listing — an honest deep review."
                  href="/blog/merrithew-v2-max-review"
                  category="Equipment Review"
                  readTime="11 min read"
                  date="September 2026"
                  imageUrl="/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg"
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
          title="Find a STOTT PILATES studio near you"
          subtitle="Our city guides include studios using Merrithew equipment."
        />
      </main>
      <Footer />
    </>
  );
}
