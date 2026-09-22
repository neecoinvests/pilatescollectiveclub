import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Balanced Body vs Merrithew (2026): Studio Reformer vs At Home SPX",
  description: "Balanced Body's Studio Reformer against Merrithew's At Home SPX Reformer Package — the two commercial-brand reformers actually sold on Amazon, compared on springs, frame, accessory ecosystem and price.",
  keywords: ["balanced body studio reformer vs merrithew at home spx", "balanced body vs merrithew reformer", "best home reformer comparison", "studio reformer review", "at home spx review", "which reformer to buy", "balanced body reformer price", "merrithew reformer price"],
  openGraph: {
    title: "Balanced Body Studio Reformer vs Merrithew At Home SPX (2026)",
    description: "Springs, frame material, accessory ecosystem and price, with a verdict for each buyer — both machines actually available on Amazon.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/balanced-body-allegro-2-vs-merrithew-spx-max",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-reformer-morning-light.png", width: 1200, height: 630, alt: "Balanced Body vs Merrithew reformer comparison — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Balanced Body vs Merrithew (2026)",
    description: "The two commercial reformer brands, compared through the machines you can actually buy on Amazon.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-reformer-morning-light.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/balanced-body-allegro-2-vs-merrithew-spx-max" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Balanced Body Studio Reformer vs Merrithew At Home SPX (2026)",
      "description": "A head-to-head comparison of the Balanced Body Studio Reformer and the Merrithew At Home SPX Reformer Package — the two commercial-brand machines actually sold on Amazon — across spring systems, frame material, accessory ecosystem and price.",
      "url": "https://pilatescollectiveclub.com/blog/balanced-body-allegro-2-vs-merrithew-spx-max",
      "datePublished": "2026-09-16",
      "dateModified": "2026-09-22",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-reformer-morning-light.png", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/balanced-body-allegro-2-vs-merrithew-spx-max" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Balanced Body vs Merrithew", "item": "https://pilatescollectiveclub.com/blog/balanced-body-allegro-2-vs-merrithew-spx-max" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Which is better, the Balanced Body Studio Reformer or the Merrithew At Home SPX?", "acceptedAnswer": { "@type": "Answer", "text": "They sit at different price points and solve different problems. The Studio Reformer is $4,700, has a solid rock maple frame, and plugs into Balanced Body's deep accessory ecosystem (tower, mat conversion, jumpboard). The At Home SPX is $3,349, sold and shipped by Amazon.com directly, and covers the core repertoire on genuine Merrithew springs for meaningfully less. Neither folds flat — both are permanent-installation machines. If budget is the deciding factor, the At Home SPX wins; if you plan to build out a full home studio over years, the Studio Reformer's accessory range is the better long-term platform." } },
        { "@type": "Question", "name": "How much do the Studio Reformer and At Home SPX cost?", "acceptedAnswer": { "@type": "Answer", "text": "The Balanced Body Studio Reformer is $4,700, sold direct by Balanced Body on Amazon. The Merrithew At Home SPX Reformer Package is $3,349, sold and shipped by Amazon.com itself. That's a gap of about $1,350, or roughly 40%, not a rounding error — factor it into the decision rather than treating the two as interchangeable at similar price points." } },
        { "@type": "Question", "name": "Do either of these reformers fold for storage?", "acceptedAnswer": { "@type": "Answer", "text": "No. Neither the Studio Reformer nor the At Home SPX folds flat or collapses for storage — both need a dedicated, permanent floor space of roughly 8 feet by 2.5 feet. If a folding machine matters to you, look at Balanced Body's Allegro 2 (which can stand on end with an optional wheel kit) or AeroPilates' cord-based machines, which do fold on wheels." } },
        { "@type": "Question", "name": "Can you add a tower to either machine?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Balanced Body sells the Studio Reformer with a Tower and Mat Conversion option for $6,975. Merrithew's tower-equipped machine on Amazon is the Rehab V2 Max Plus ($8,199), which includes the Vertical Frame built in rather than as an add-on to the At Home SPX. Confirm tower compatibility for the exact model before ordering, and measure your ceiling height first." } },
      ],
    },
  ],
};

const COMPARISON = [
  {
    factor: "Frame and construction",
    a: "Solid rock maple frame with commercial-grade black upholstery, built for daily professional use — the same frame material used across Balanced Body's studio line.",
    b: "Aluminium rails with high-density foam padding and durable vinyl upholstery, built for home use with the same core components as Merrithew's commercial machines.",
  },
  {
    factor: "Spring system",
    a: "Five Signature Springs giving 46 resistance combinations, with the Revo footbar and springbar for fast, secure adjustments.",
    b: "Five high-tension springs (4×100%, 1×50%), giving fewer light-resistance options than Balanced Body's graded set but genuine Merrithew spring feel.",
  },
  {
    factor: "Accessory ecosystem",
    a: "The deepest in the industry — towers, mat conversions, riser kits, jumpboards, boxes, all purpose-built and widely stocked. This is most of what the price premium buys.",
    b: "The At Home SPX package already includes a reformer box, roll-up pole, platform extender and double-loop straps, so there's less to buy separately to start.",
  },
  {
    factor: "Storage",
    a: "Does not fold. A permanent, roughly 8 by 2.5 foot floor commitment, same as the At Home SPX.",
    b: "Does not fold. Same permanent floor footprint as the Studio Reformer — this is not a point of difference between the two.",
  },
  {
    factor: "Sold by",
    a: "Balanced Body Inc., direct through their Amazon storefront. Made to order, three to four weeks to ship.",
    b: "Amazon.com itself — the only reformer in this comparison with standard Amazon fulfilment and returns.",
  },
  {
    factor: "Price",
    a: "$4,700 for the base machine, checked live on Amazon.",
    b: "$3,349, checked live on Amazon. About $1,350 below the Studio Reformer.",
  },
];

const REFORMERS = [
  { name: "Balanced Body Studio Reformer (Revo Footbar)", description: "The commercial machine most contemporary studios actually run. Solid rock maple frame, five Signature Springs for 46 resistance combinations, and the Revo footbar and springbar system. Sold direct by Balanced Body on Amazon; made to order.", price: "$4,700", affiliateUrl: "https://www.amazon.com/dp/B002XVWIFE?tag=pilatescollective-20" },
  { name: "Merrithew At Home SPX Reformer Package", description: "Merrithew's home-specific reformer, using the same quality components as its studio machines: aluminium rails, a smooth quiet carriage, and five high-tension springs. Comes complete with a reformer box, roll-up pole, platform extender and straps. Sold and shipped by Amazon.com.", price: "$3,349", affiliateUrl: "https://www.amazon.com/dp/B004FGT0TM?tag=pilatescollective-20" },
];

const PRODUCTS = [
  { name: "Balanced Body Padded Jumpboard", description: "Balanced Body's own jumpboard for the Studio Reformer line, turning it into cardio equipment for jump training. Fits Balanced Body's carriage mounting; check compatibility with your exact model before ordering.", price: "$280", affiliateUrl: "https://www.amazon.com/dp/B08CS4LJZ7?tag=pilatescollective-20" },
  { name: "Merrithew Jumpboard (22-inch, SPX/SPX Max)", description: "The Merrithew-specific jumpboard sized for the SPX and SPX Max carriage. Made to order — allow lead time.", price: "$470", affiliateUrl: "https://www.amazon.com/dp/B004ICZD2Q?tag=pilatescollective-20" },
  { name: "Balanced Body Sitting Box Lite", description: "Opens the short box, long box and overhead series on the Studio Reformer. Sits on the carriage rather than mounting to the frame.", price: "$150", affiliateUrl: "https://www.amazon.com/dp/B0723DT2JP?tag=pilatescollective-20" },
  { name: "Pilates Reformer Grip Pads (4-pack)", description: "Non-slip pads for standing and kneeling work on either machine's carriage. Protects the upholstery, which is the first surface to show age on any reformer.", price: "$8", affiliateUrl: "https://www.amazon.com/dp/B0GGR4QXNH?tag=pilatescollective-20" },
  { name: "Balanced Body Replacement Reformer Ropes with Clips", description: "Genuine Balanced Body replacement ropes for the Studio Reformer and Allegro line. Keep a spare set — springs and ropes lose tension gradually rather than failing visibly.", price: "$35", affiliateUrl: "https://www.amazon.com/dp/B0CYM27QMZ?tag=pilatescollective-20" },
  { name: "STAR BRITE Ultimate Vinyl Clean", description: "A vinyl-safe cleaner for either machine's upholstery. Alcohol-heavy and bleach-based cleaners dry vinyl until it cracks; a vinyl-rated formula costs the same and doesn't. Sold by Amazon.com.", price: "$15", affiliateUrl: "https://www.amazon.com/dp/B01CZ2ZW4O?tag=pilatescollective-20" },
];

export default function Allegro2VsSpxMaxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Comparison</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Reformers</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Balanced Body vs<br /><span style={{ color: "#8b4a31" }}>Merrithew</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 11 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              These are the two commercial-brand reformers you can actually buy on Amazon today: Balanced Body&apos;s Studio Reformer and Merrithew&apos;s At Home SPX Reformer Package. They&apos;re not close on price — $4,700 against $3,349, a gap of about 40% — and neither one folds for storage, so this isn&apos;t a comparison of mechanisms. It&apos;s a comparison of what the extra $1,350 actually buys: frame material, spring feel, and how deep an accessory ecosystem you plug into.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-reformer-morning-light.png" alt="A Pilates reformer in a home studio in morning light" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-14 mt-4 rounded-2xl p-7" style={{ backgroundColor: "#fff4f1", border: "1px solid rgba(139,74,49,0.15)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-3" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>The short version</p>
              <p className="text-base leading-relaxed mb-0" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Budget is the real constraint here: At Home SPX, sold and shipped by Amazon.com, gets you genuine Merrithew springs and a complete starter kit for $3,349. If you can stretch to $4,700 and expect to build out a home studio over years with a tower, mat conversion and boxes, the Studio Reformer&apos;s Balanced Body ecosystem is the better long-term platform. Neither folds, so storage isn&apos;t the deciding factor — plan for a permanent 8-by-2.5-foot spot either way.
              </p>
            </div>

            <div className="mb-14 overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
              <div className="px-6 py-4" style={{ backgroundColor: "#f6f3f2" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>At a glance &middot; verified September 2026</p>
              </div>
              {REFORMERS.map((p, i) => (
                <div key={p.name} className="flex items-center gap-3 sm:gap-4 px-6 py-4" style={{ borderTop: i === 0 ? "none" : "1px solid rgba(217,194,186,0.25)", backgroundColor: "#ffffff" }}>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold leading-tight" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{p.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{p.price}</p>
                  </div>
                  <a href={p.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow"
                    style={{ display: "block", fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "10px 14px", whiteSpace: "nowrap", flexShrink: 0 }}
                  >Buy &rarr;</a>
                </div>
              ))}
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Neither one folds — plan the floor space first</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Both machines run the full reformer repertoire, and both are permanent-installation pieces of equipment: roughly 8 feet long by 2.5 feet wide, with no fold-flat or wall-mount storage option on either. If you need a machine that disappears between sessions, this pairing isn&apos;t it — look at Balanced Body&apos;s Allegro 2, which can be stood on end with an optional wheel kit, or a cord-based AeroPilates machine that genuinely folds.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Since storage isn&apos;t the differentiator, the decision comes down to budget and how deep you want to go into an accessory ecosystem. Our{" "}
                <Link href="/blog/pilates-reformer-dimensions-and-space-requirements" style={{ color: "#8b4a31", textDecoration: "underline" }}>dimensions and space guide</Link>{" "}
                covers the clearance both need in use.
              </p>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Head to head</h2>
              <div className="space-y-4">
                {COMPARISON.map((row) => (
                  <div key={row.factor} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-base font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{row.factor}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div style={{ minWidth: 0 }}>
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] mb-2" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Balanced Body Studio Reformer</p>
                        <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{row.a}</p>
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] mb-2" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Merrithew At Home SPX</p>
                        <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{row.b}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>On price: a real 40% gap, not a rounding error</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The Studio Reformer is $4,700, sold direct by Balanced Body through their Amazon storefront, made to order with a three-to-four-week ship time.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The At Home SPX Reformer Package is $3,349 — sold and shipped by Amazon.com itself, the only machine in this comparison with standard Amazon fulfilment. That&apos;s roughly $1,350 less, a genuine 40% price gap that should factor into the decision rather than being treated as a rounding difference.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Both list prices are for the base machine only; towers, boxes and jumpboards are separate purchases on either. Our guide to{" "}
                <Link href="/blog/where-to-buy-a-pilates-reformer" style={{ color: "#8b4a31", textDecoration: "underline" }}>where to buy a reformer</Link>{" "}
                covers how delivery and lead times differ by channel.
              </p>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>The five-year question</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Reformers are platforms. What mounts to them is model-specific, not universal, so the machine you choose determines what you can add to it for as long as you own it.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Balanced Body has the deepest accessory catalogue in the industry — towers, mat conversions, riser kits, jumpboards, boxes, all purpose-built. If you can see yourself adding a tower or mat conversion over the next few years (Balanced Body sells the Studio Reformer with both bundled in for $6,975), that ecosystem is worth paying for now. If you want a reformer to do reformer work and the budget difference matters more, the At Home SPX delivers genuine Merrithew quality with everything you need to start included in the box.
              </p>
            </div>

            <div className="mb-14 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Settle these before ordering either</h2>
              <ul className="space-y-3">
                {[
                  "Is $1,350 the difference that matters most to you, or is the accessory ecosystem worth paying for now?",
                  "Do you want a tower eventually? Confirm compatibility for your exact configuration and measure your ceiling height first.",
                  "Neither machine folds — do you have a genuinely permanent 8-by-2.5-foot spot for it?",
                  "Will you teach paid sessions on it? Check the warranty wording for commercial use before anything else.",
                  "Can the machine physically reach the room? Measure doorways, corridor turns and lift depth.",
                  "What do replacement springs and ropes cost for that model, and are they stocked?",
                ].map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    <span className="font-semibold" style={{ color: "#8b4a31" }}>⚠</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "Which is better, the Balanced Body Studio Reformer or the Merrithew At Home SPX?", a: "They sit at different price points and solve different problems. The Studio Reformer is $4,700, has a solid rock maple frame, and plugs into Balanced Body's deep accessory ecosystem. The At Home SPX is $3,349, sold and shipped by Amazon.com directly, and covers the core repertoire on genuine Merrithew springs for meaningfully less. Neither folds — both are permanent-installation machines. If budget is the deciding factor, the At Home SPX wins; if you plan to build out a full home studio over years, the Studio Reformer's accessory range is the better long-term platform." },
                  { q: "How much do the Studio Reformer and At Home SPX cost?", a: "The Balanced Body Studio Reformer is $4,700, sold direct by Balanced Body on Amazon. The Merrithew At Home SPX Reformer Package is $3,349, sold and shipped by Amazon.com itself. That's a gap of about $1,350, or roughly 40% — factor it into the decision rather than treating the two as interchangeable." },
                  { q: "Do either of these reformers fold for storage?", a: "No. Neither the Studio Reformer nor the At Home SPX folds flat or collapses for storage — both need a dedicated, permanent floor space of roughly 8 feet by 2.5 feet. If a folding machine matters to you, look at Balanced Body's Allegro 2 (which can stand on end with an optional wheel kit) or AeroPilates' cord-based machines, which do fold on wheels." },
                  { q: "Can you add a tower to either machine?", a: "Yes. Balanced Body sells the Studio Reformer with a Tower and Mat Conversion option for $6,975. Merrithew's tower-equipped machine on Amazon is the Rehab V2 Max Plus ($8,199), which includes the Vertical Frame built in rather than as an add-on to the At Home SPX. Confirm tower compatibility for the exact model before ordering, and measure your ceiling height first." },
                ].map((item) => (
                  <div key={item.q} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.q}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Reformers */}
            <div className="mt-16 pt-12" style={{ borderTop: "1px solid rgba(217,194,186,0.4)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-2" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Reformers</p>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Both machines</h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The two machines this comparison is about — both verified live on Amazon. About $1,350 separates them, so decide on budget and ecosystem, not on storage mechanism. Check the warranty covers your intended use before ordering.
              </p>
              <div className="space-y-8">
                {REFORMERS.map((p) => (
                  <ProductCard key={p.name} name={p.name} description={p.description} price={p.price} affiliateUrl={p.affiliateUrl} />
                ))}
              </div>
            </div>

            {/* Equipment */}
            <div className="mt-16 pt-12" style={{ borderTop: "1px solid rgba(217,194,186,0.4)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-2" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Equipment</p>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Accessories for whichever you choose</h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The additions people make after the machine. Mountings and spring fittings are model-specific rather than universal, so confirm compatibility with your exact machine before ordering.
              </p>
              <div className="space-y-8">
                {PRODUCTS.map((p) => (
                  <ProductCard key={p.name} name={p.name} description={p.description} price={p.price} affiliateUrl={p.affiliateUrl} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="Merrithew Rehab V2 Max Plus Review" excerpt="The V2 Max-family machine Merrithew actually sells on Amazon, reviewed in full." href="/blog/merrithew-v2-max-review" category="Equipment" readTime="11 min read" date="September 2026" imageUrl="/pictures/samantha-sheppard-b8Q5fHBsyik-unsplash.jpg" />
                <ArticleCard title="Align Pilates vs Balanced Body" excerpt="The other brand pairing buyers cross-shop, with current pricing." href="/blog/align-pilates-vs-balanced-body" category="Comparison" readTime="12 min read" date="September 2026" imageUrl="/pictures/stitch-reformer-row-studio.png" />
                <ArticleCard title="Where to Buy a Pilates Reformer" excerpt="Direct, dealer or marketplace: what each channel costs and what it protects." href="/blog/where-to-buy-a-pilates-reformer" category="Guide" readTime="11 min read" date="September 2026" imageUrl="/pictures/stitch-studio-entryway.png" />
                <ArticleCard title="Best Premium Pilates Reformers" excerpt="Balanced Body Studio Reformer, Allegro Stretch, Merrithew At Home SPX and more compared." href="/blog/best-premium-pilates-reformer" category="Equipment" readTime="14 min read" date="September 2026" imageUrl="/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg" />
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
