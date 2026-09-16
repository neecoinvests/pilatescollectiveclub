import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Align Pilates vs Balanced Body (2026): Price, Build, Verdict",
  description: "Align Pilates and Balanced Body compared on frame, springs, accessory ecosystem and current dealer pricing, with a clear recommendation for each buyer.",
  keywords: ["align pilates vs balanced body", "align pilates reformer review", "balanced body reformer comparison", "align c8 pro vs allegro 2", "best pilates reformer brand", "align pilates a8 pro", "balanced body studio reformer", "pilates reformer brand comparison"],
  openGraph: {
    title: "Align Pilates vs Balanced Body (2026)",
    description: "Frame, springs, accessories, warranty and real dealer pricing compared.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/align-pilates-vs-balanced-body",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-reformer-row-studio.png", width: 1200, height: 630, alt: "Align Pilates vs Balanced Body — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Align Pilates vs Balanced Body (2026)",
    description: "Which reformer brand is right for you, on price and on build.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-reformer-row-studio.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/align-pilates-vs-balanced-body" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Align Pilates vs Balanced Body (2026): Price, Build, Verdict",
      "description": "A brand-level comparison of Align Pilates and Balanced Body reformers across frame construction, spring systems, accessory ecosystem, warranty and current dealer pricing.",
      "url": "https://pilatescollectiveclub.com/blog/align-pilates-vs-balanced-body",
      "datePublished": "2026-09-16",
      "dateModified": "2026-09-16",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-reformer-row-studio.png", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/align-pilates-vs-balanced-body" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Align Pilates vs Balanced Body", "item": "https://pilatescollectiveclub.com/blog/align-pilates-vs-balanced-body" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is Align Pilates as good as Balanced Body?", "acceptedAnswer": { "@type": "Answer", "text": "For the machine itself, the gap is much smaller than the brand recognition suggests. Both build commercial-rated reformers on aluminium rails with graded spring sets, and both are found in working studios. Where Balanced Body pulls ahead is the accessory ecosystem and the resale market: it is the larger brand, its towers, boxes and jumpboards are more widely stocked, and its machines are easier to sell on. Align competes on price and on carriage width. If you are buying one machine and keeping it, Align is genuinely competitive. If you expect to expand a studio with accessories over years, Balanced Body's ecosystem is worth paying for." } },
        { "@type": "Question", "name": "How much cheaper is Align Pilates than Balanced Body?", "acceptedAnswer": { "@type": "Answer", "text": "Less than most published comparisons suggest, and the gap has narrowed. Checked against current dealer listings in September 2026, the Align C8 Pro runs around $2,750 to $2,900 and the A8 Pro around $3,700 to $3,800 against a list of $4,200 to $4,320. Balanced Body's Allegro 2 is $3,995 standard, and the Studio Reformer is $4,400 to $4,800 depending on footbar. So the C8 Pro genuinely undercuts anything comparable from Balanced Body, but the A8 Pro sits close to the Allegro 2 rather than far below it. Be careful with older figures: a lot of published pricing for Align has not kept up, and US listings may add an import surcharge at checkout." } },
        { "@type": "Question", "name": "Which brand is better for a home studio?", "acceptedAnswer": { "@type": "Answer", "text": "For a single machine at home, the Align C8 Pro is the better value: commercial-rated build at a genuine discount to the Balanced Body equivalent, and a wide carriage that suits larger practitioners. For a home studio you intend to grow, with a tower, boxes and a jumpboard added over time, Balanced Body is the safer commitment because the accessory range is deeper and easier to source. The deciding question is not which machine is better today but whether you will still be buying parts for it in five years." } },
        { "@type": "Question", "name": "Do Align Pilates reformers hold their value?", "acceptedAnswer": { "@type": "Answer", "text": "Less well than Balanced Body, for a straightforward reason: resale depends on how many buyers recognise and want the brand, and Balanced Body has the larger installed base, particularly in the United States. A used Balanced Body machine typically finds a buyer faster and at a higher share of its original price. That difference is worth factoring into the purchase if you might sell within a few years, and worth ignoring entirely if you are buying a machine to keep." } },
      ],
    },
  ],
};

const COMPARISON = [
  {
    factor: "Frame and rails",
    align: "Aluminium rails with a rigid, squared frame. Build quality is genuinely commercial at the Pro level, and the machines are specified for studio use rather than domestic only. Less visual warmth than a maple frame, which some buyers care about and some do not.",
    bb: "Aluminium on the Allegro 2, Strata rock maple on the Studio Reformer. The maple frame is the reference studio machine, heavier and permanent rather than portable, and it is what most certification centres train on.",
  },
  {
    factor: "Spring system",
    align: "Colour-coded graded spring sets across the Pro range, covering the full resistance span for intermediate and advanced programming. Straightforward, well calibrated, and easy to source replacements for.",
    bb: "Five Signature springs on the Studio Reformer, nickel plated, offering a very fine resistance gradation. The spring feel is the thing Balanced Body owners most consistently cite, and it is a real difference rather than marketing.",
  },
  {
    factor: "Carriage width",
    align: "Wider carriage across the A series, which is the clearest single advantage Align has. Larger and taller practitioners notice it immediately, and it makes side-lying and kneeling work more comfortable.",
    bb: "Narrower profile, deliberately, because the Studio Reformer is optimised for side-by-side installation in a studio row. Fine for most practitioners and better for fitting more machines into a given floor area.",
  },
  {
    factor: "Accessory ecosystem",
    align: "A solid core range: jumpboards, boxes, platform extenders, carriage pads, tower options. Everything you need, without the depth of the larger brand.",
    bb: "The deepest accessory range in the industry, and the strongest argument for the brand. Towers, riser kits, the IQ spring system, converters and boxes are all purpose-built and widely stocked. If you expect to expand over years, this is what you are buying.",
  },
  {
    factor: "Availability and support",
    align: "A UK brand with growing US dealer coverage. More dealers than five years ago, but still fewer points of contact than Balanced Body in North America, which matters for warranty response and parts.",
    bb: "Long-established with wide dealer coverage, used in its own certification programmes. Easier to get a machine serviced, easier to get a part, and easier to get someone on the phone.",
  },
  {
    factor: "Resale",
    align: "Softer. A smaller installed base means fewer buyers searching for the brand secondhand, so expect to discount more to sell.",
    bb: "Strong. The brand most people search for on the used market, which means a faster sale at a higher share of the original price. Worth real money if you might upgrade later.",
  },
];

const PRICING = [
  { model: "Align Pilates C8 Pro", price: "~$2,750 to $2,900", note: "The value pick. Undercuts anything comparable from Balanced Body." },
  { model: "Align Pilates A8 Pro", price: "~$3,700 to $3,800", note: "List $4,200 to $4,320. Widest carriage in the comparison." },
  { model: "Balanced Body Allegro 2", price: "$3,995", note: "$4,325 to $4,345 with the leg kit. Folds upright for storage." },
  { model: "Balanced Body Studio Reformer", price: "$4,400 to $4,800", note: "Price varies by footbar: Revo, XSR, Infinity or Classic. Permanent installation." },
];

const REFORMERS = [
  { name: "Align Pilates C8 Pro Reformer", description: "The value pick among commercial-rated machines, and genuinely not a compromise. Aluminium rails, a graded colour-coded spring set, and a build specified for studio use, at a real discount to anything comparable from Balanced Body.", price: "From $2,750", affiliateUrl: "https://www.amazon.com/s?k=align+pilates+c8+pro+reformer&tag=pilatescollective-20" },
  { name: "Align Pilates A8 Pro Reformer", description: "The widest carriage in this comparison, which is the clearest thing Align does better than anyone. Larger and taller practitioners notice it immediately in side-lying and kneeling work. List runs $4,200 to $4,320, so check the current dealer figure.", price: "From $3,700", affiliateUrl: "https://www.amazon.com/s?k=align+pilates+a8+pro+reformer&tag=pilatescollective-20" },
  { name: "Balanced Body Allegro 2 Reformer", description: "The folding studio machine most home buyers end up comparing everything else against. Upright fold against a wall, the deepest accessory ecosystem in the industry, and the strongest resale of any reformer here. $3,995 standard, around $4,325 with the leg kit.", price: "From $3,995", affiliateUrl: "https://www.amazon.com/dp/B0D3G2BJZ7?tag=pilatescollective-20" },
  { name: "Balanced Body Studio Reformer", description: "The permanent-installation machine that populates certification centres and clinics. Strata rock maple frame, five signature springs, and full tower compatibility. Price runs $4,400 to $4,800 depending on which of the four footbars you choose. It does not fold.", price: "From $4,400", affiliateUrl: "https://www.amazon.com/dp/B0C9G88VJS?tag=pilatescollective-20" },
];

const PRODUCTS = [
  { name: "Reformer Jumpboard", description: "Both brands sell their own, and both are mount-specific rather than universal. Whichever machine you land on, a jumpboard is the highest-value addition available to it: it turns a reformer into cardio equipment for a fraction of the cost of buying anything else. Confirm the mounting fits your exact model before ordering.", price: "From $199", affiliateUrl: "https://www.amazon.com/s?k=pilates+reformer+jumpboard&tag=pilatescollective-20" },
  { name: "Reformer Carriage Pad", description: "A grip pad is the cheapest way to make a carriage feel secure for standing and kneeling work, and it protects the upholstery, which is the first thing to look tired on a machine of either brand. Align's wider carriage needs a correspondingly wider pad, so check the dimensions rather than assuming a standard size.", price: "From $89", affiliateUrl: "https://www.amazon.com/s?k=pilates+reformer+carriage+pad+grip&tag=pilatescollective-20" },
  { name: "Reformer Sitting Box", description: "The one accessory that genuinely expands the repertoire rather than refining it, opening up short box, long box and overhead work. Boxes are more brand-agnostic than jumpboards because they sit on the carriage rather than mounting to the frame, so this is a place where a third-party box is a reasonable buy.", price: "From $149", affiliateUrl: "https://www.amazon.com/s?k=pilates+reformer+sitting+box&tag=pilatescollective-20" },
  { name: "Replacement Springs", description: "Springs are graded and colour-coded differently between brands, so this is not a place to buy generic. Order for your exact model. What is worth doing on either brand is keeping a spare set: springs lose tension gradually and a set that has drifted quietly changes every resistance setting you use.", price: "From $45", affiliateUrl: "https://www.amazon.com/s?k=pilates+reformer+replacement+springs&tag=pilatescollective-20" },
  { name: "Platform Extender", description: "Extends the standing platform for jumpboard and standing work, and it is one of the few accessories where the two brands take visibly different approaches to mounting. Useful if you are tall or if you run jumpboard classes. Check compatibility with your footbar position.", price: "From $159", affiliateUrl: "https://www.amazon.com/s?k=pilates+reformer+platform+extender&tag=pilatescollective-20" },
];

export default function AlignPilatesVsBalancedBodyPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Brands</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Align Pilates vs<br /><span style={{ color: "#8b4a31" }}>Balanced Body</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated 16 September 2026 · 12 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              These two brands are cross-shopped constantly and compared badly, usually because the published pricing for Align is out of date. We rechecked both against current dealer listings in September 2026, and the gap is smaller than most comparisons claim. The real decision is not which machine is better. It is whether you are buying one reformer or building a system.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-reformer-row-studio.png" alt="A row of Pilates reformers installed side by side in a studio" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-14 mt-4 rounded-2xl p-7" style={{ backgroundColor: "#fff4f1", border: "1px solid rgba(139,74,49,0.15)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-3" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>The short version</p>
              <p className="text-base leading-relaxed mb-0" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Buying one machine and keeping it: the Align C8 Pro is the value choice and it is not a compromise. Tall or broad, or you want the roomiest carriage: Align A8 Pro. Building a studio you will expand with towers, boxes and converters over years: Balanced Body, for the ecosystem rather than the frame. Might sell within a few years: Balanced Body, for resale.
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
              <h2 className="text-3xl font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What each actually costs</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Checked against current dealer listings in September 2026. A lot of published pricing for Align Pilates is badly out of date, which is how the brand acquired a reputation as a budget option that its current pricing does not support. US listings may also add an import surcharge at checkout, so confirm the delivered total rather than the headline.
              </p>
              <div className="space-y-3">
                {PRICING.map((p) => (
                  <div key={p.model} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1.5">
                      <p className="text-base font-semibold" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{p.model}</p>
                      <p className="text-sm font-semibold" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif", whiteSpace: "nowrap" }}>{p.price}</p>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{p.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>The comparison, factor by factor</h2>
              <div className="space-y-4">
                {COMPARISON.map((row) => (
                  <div key={row.factor} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-base font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{row.factor}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div style={{ minWidth: 0 }}>
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] mb-2" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Align Pilates</p>
                        <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{row.align}</p>
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] mb-2" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Balanced Body</p>
                        <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{row.bb}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>The ecosystem is the real decision</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Compare the two machines on a showroom floor and you would struggle to justify a large price difference. Both are commercial-rated, both run graded springs on aluminium rails, both are in working studios. On the frame alone, Align wins on value at the C8 Pro and the two brands are close at the A8 Pro.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                What separates them is what happens after the purchase. Reformers are platforms, and the accessories that mount to them are model-specific rather than universal. Balanced Body has the deepest catalogue in the industry and the widest dealer network to supply it, so a tower, a riser kit, a converter or a replacement part is easy to get years later. Align has everything most people need and less of the long tail.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                So the question that decides it is not about this purchase. It is whether you are still going to be buying things for this machine in five years. One reformer that stays one reformer: buy on price and carriage width, which means Align. A studio that will grow, or a home setup you intend to build out: buy the ecosystem, which means Balanced Body. Our{" "}
                <Link href="/blog/balanced-body-vs-merrithew" style={{ color: "#8b4a31", textDecoration: "underline" }}>Balanced Body vs Merrithew comparison</Link>{" "}
                covers the other pairing people cross-shop at this level.
              </p>
            </div>

            <div className="mb-14 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Check these before you commit either way</h2>
              <ul className="space-y-3">
                {[
                  "The delivered total, not the headline price. Freight on a reformer is significant and US listings may add an import surcharge at checkout.",
                  "Whether the warranty covers commercial use, if you will teach even occasional paid sessions on it.",
                  "Carriage width against your own frame, particularly if you are above six feet or broad through the shoulders.",
                  "Which accessories you expect to add, and whether they exist for that model rather than for the brand generally.",
                  "Who your nearest dealer is and what the warranty response time is. This is where Balanced Body's network earns its premium.",
                  "Whether the machine fits the room and the route into it, before anything ships.",
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
                  { q: "Is Align Pilates as good as Balanced Body?", a: "For the machine itself, the gap is much smaller than the brand recognition suggests. Both build commercial-rated reformers on aluminium rails with graded spring sets, and both are found in working studios. Where Balanced Body pulls ahead is the accessory ecosystem and the resale market: it is the larger brand, its towers, boxes and jumpboards are more widely stocked, and its machines are easier to sell on. Align competes on price and on carriage width. If you are buying one machine and keeping it, Align is genuinely competitive. If you expect to expand a studio with accessories over years, Balanced Body's ecosystem is worth paying for." },
                  { q: "How much cheaper is Align Pilates than Balanced Body?", a: "Less than most published comparisons suggest, and the gap has narrowed. Checked against current dealer listings in September 2026, the Align C8 Pro runs around $2,750 to $2,900 and the A8 Pro around $3,700 to $3,800 against a list of $4,200 to $4,320. Balanced Body's Allegro 2 is $3,995 standard, and the Studio Reformer is $4,400 to $4,800 depending on footbar. So the C8 Pro genuinely undercuts anything comparable from Balanced Body, but the A8 Pro sits close to the Allegro 2 rather than far below it. Be careful with older figures: a lot of published pricing for Align has not kept up, and US listings may add an import surcharge at checkout." },
                  { q: "Which brand is better for a home studio?", a: "For a single machine at home, the Align C8 Pro is the better value: commercial-rated build at a genuine discount to the Balanced Body equivalent, and a wide carriage that suits larger practitioners. For a home studio you intend to grow, with a tower, boxes and a jumpboard added over time, Balanced Body is the safer commitment because the accessory range is deeper and easier to source. The deciding question is not which machine is better today but whether you will still be buying parts for it in five years." },
                  { q: "Do Align Pilates reformers hold their value?", a: "Less well than Balanced Body, for a straightforward reason: resale depends on how many buyers recognise and want the brand, and Balanced Body has the larger installed base, particularly in the United States. A used Balanced Body machine typically finds a buyer faster and at a higher share of its original price. That difference is worth factoring into the purchase if you might sell within a few years, and worth ignoring entirely if you are buying a machine to keep." },
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
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>The four machines compared</h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Every machine in the pricing table above, at the prices we verified in September 2026. Check the warranty covers your intended use before ordering, and confirm the machine fits the room and the route into it.
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
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Accessories for either machine</h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The accessories people add afterwards. Mountings are model-specific rather than universal, so confirm the fit for your exact machine before ordering any of them.
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
                <ArticleCard title="Balanced Body vs Merrithew" excerpt="Springs, price and verdict on the other pairing buyers cross-shop at this level." href="/blog/balanced-body-vs-merrithew" category="Comparison" readTime="11 min read" date="June 2026" imageUrl="/pictures/stitch-reformer-spring-detail.png" />
                <ArticleCard title="Where to Buy a Pilates Reformer" excerpt="Direct, dealer or marketplace: what each channel costs you and what it protects." href="/blog/where-to-buy-a-pilates-reformer" category="Guide" readTime="11 min read" date="September 2026" imageUrl="/pictures/stitch-studio-entryway.png" />
                <ArticleCard title="Commercial vs Home Pilates Reformer" excerpt="Frame, weight rating, warranty and duty cycle: what separates the two tiers." href="/blog/commercial-vs-home-pilates-reformer" category="Comparison" readTime="11 min read" date="September 2026" imageUrl="/pictures/stitch-reformer-loops-hooks.png" />
                <ArticleCard title="Best Studio Pilates Reformers" excerpt="Commercial-grade machines reviewed on durability, spring range and long-term value." href="/blog/best-studio-pilates-reformers" category="Equipment" readTime="12 min read" date="June 2026" imageUrl="/pictures/stitch-reformers-aerial-row.png" />
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
