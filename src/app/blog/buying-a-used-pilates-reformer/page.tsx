import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Buying a Used Pilates Reformer (2026): What to Inspect",
  description: "What to inspect on a secondhand reformer, which faults are cheap to fix and which end the conversation, and how to price against current new machine prices.",
  keywords: ["used pilates reformer", "buying a used pilates reformer", "secondhand pilates reformer", "refurbished pilates reformer", "used reformer price", "pilates reformer inspection checklist", "used balanced body reformer", "is a used reformer worth it"],
  openGraph: {
    title: "Buying a Used Pilates Reformer (2026)",
    description: "What to inspect, what refurbishment costs, and the faults that should end the conversation.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/buying-a-used-pilates-reformer",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-reformer-loops-hooks.png", width: 1200, height: 630, alt: "Buying a Used Pilates Reformer — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buying a Used Pilates Reformer (2026)",
    description: "Inspect it properly, price it against new, and know which faults to walk away from.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-reformer-loops-hooks.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/buying-a-used-pilates-reformer" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Buying a Used Pilates Reformer (2026): Inspect, Price, Walk Away",
      "description": "A practical guide to the secondhand reformer market: what to inspect, which faults are consumable and which are structural, what refurbishment costs, and how to price against current new machines.",
      "url": "https://pilatescollectiveclub.com/blog/buying-a-used-pilates-reformer",
      "datePublished": "2026-09-16",
      "dateModified": "2026-09-16",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-reformer-loops-hooks.png", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/buying-a-used-pilates-reformer" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Buying a Used Pilates Reformer", "item": "https://pilatescollectiveclub.com/blog/buying-a-used-pilates-reformer" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is it worth buying a used Pilates reformer?", "acceptedAnswer": { "@type": "Answer", "text": "For a commercial-grade machine from an established brand, often yes. A studio frame is built for a decade or more of daily use, and the parts that wear out are springs, ropes and upholstery, all of which are replaceable for a few hundred dollars. What you are really buying is the frame and the rails, and those either are straight and true or they are not. For consumer-end machines the case is weaker: the frame was not built for a long life, replacement parts may not exist, and the saving against a new one is smaller in absolute terms." } },
        { "@type": "Question", "name": "How much should a used Pilates reformer cost?", "acceptedAnswer": { "@type": "Answer", "text": "Price it against what the machine costs new today, not against what it cost when it was bought. Establish the current new price for that exact model, then subtract the cost of the consumables it needs, then discount for age, hours of use and the absence of any warranty. A machine needing a full set of springs, ropes and re-upholstery has several hundred dollars of work ahead of it before it is as-new, and that comes off the price. Brand matters too: Balanced Body has the largest installed base and holds value best, so expect to pay closer to new for one." } },
        { "@type": "Question", "name": "What should I check on a used reformer?", "acceptedAnswer": { "@type": "Answer", "text": "Start with the frame and rails, because those are the only parts that cannot be economically replaced. Sight along the rails for straightness, push the carriage slowly through its full travel listening for grinding or catching, and put weight on the frame to feel for flex or movement at the joints. Then check the springs for corrosion and for whether they still return to length, the ropes for stretch and fraying, the footbar mechanism through every position, and the upholstery for cracking rather than just wear. Finally, confirm the model name and year so you can establish that parts are still available." } },
        { "@type": "Question", "name": "Where do used Pilates reformers come from?", "acceptedAnswer": { "@type": "Answer", "text": "Mostly from studios refitting, relocating or closing, and from home buyers who bought a machine and did not keep up the practice. Studio machines have done far more hours but were built for it and have usually been maintained on a schedule. Home machines have done very little work but may have been stored badly, which is its own problem for springs and upholstery. Some dealers also sell refurbished trade-ins, which cost more than a private sale and typically come with the consumables already replaced and some form of limited warranty." } },
      ],
    },
  ],
};

const INSPECT = [
  { label: "Frame and rails", verdict: "Structural. Walk away if wrong.", body: "Sight along each rail for straightness and run the carriage slowly through its full travel with your hand on the frame. Grinding, catching or a change in resistance mid-travel points at a bent rail or a failed wheel bearing. Press down and rock the frame: any flex or movement at the joints on a machine that should be rigid is a problem you cannot fix at sensible cost. Wooden frames additionally need checking for splits at the joints and for water damage at the feet." },
  { label: "Carriage wheels and bearings", verdict: "Usually fixable, sometimes not.", body: "Push the carriage with one finger from a standstill. It should start smoothly and coast. Noise is often dirt in the rail track rather than a failed bearing, which is a cleaning job. A wheel that has developed a flat spot, or a carriage that pulls to one side, is a parts order and worth pricing before you agree anything." },
  { label: "Springs", verdict: "Consumable. Budget to replace.", body: "Look for corrosion, particularly at the hooks, and for springs that no longer return fully to their resting length. Springs lose tension gradually and a set that has drifted changes every resistance setting on the machine, so a quietly tired set is more common than a visibly broken one. Assume a full replacement set on any machine that has done studio hours and price accordingly." },
  { label: "Ropes, straps and hardware", verdict: "Consumable. Cheap.", body: "Ropes stretch and fray, and a stretched rope changes the working length of every strap exercise without anyone noticing the cause. Check both sides match in length. Look at the carabiners and the pulley wheels too, since those are frequently overlooked and are part of the same replacement job." },
  { label: "Footbar mechanism", verdict: "Check every position.", body: "Move it through every setting and load it in each one. A footbar that will not lock reliably is a safety problem rather than a nuisance, and the mechanism is model-specific, so a failure here means tracking down a part for that exact production run. This is the item most worth testing thoroughly in person." },
  { label: "Upholstery", verdict: "Cosmetic until it cracks.", body: "Surface wear is fine and does not affect the machine. Cracking is different: once the vinyl has split, moisture reaches the foam and the pad is on its way out. Re-upholstery is available for commercial machines and is a real cost, so a cracked carriage pad and shoulder rests should come off the asking price rather than be waved through as cosmetic." },
  { label: "Model, year and parts availability", verdict: "Establish before agreeing.", body: "Get the exact model name and roughly when it was made, then confirm springs, ropes and the footbar parts are still catalogued for it. A machine whose parts have been discontinued is a machine with a finite remaining life, whatever condition it is in today. This single check separates a bargain from a liability." },
];

const REFORMERS = [
  { name: "Balanced Body Studio Reformer", description: "The permanent-installation machine that populates certification centres and clinics. Strata rock maple frame, five Signature Springs, and full tower compatibility. Made to order. It does not fold.", price: "From $4,700", affiliateUrl: "https://www.amazon.com/dp/B002XVWIFE?tag=pilatescollective-20" },
  { name: "Balanced Body Allegro Stretch Reformer", description: "Balanced Body's wide-carriage machine: 2 inches wider and 6 inches longer than the standard Allegro, with a 36-inch adjustable footbar, and the deepest accessory ecosystem in the industry behind it.", price: "From $3,710", affiliateUrl: "https://www.amazon.com/dp/B093R8DYC9?tag=pilatescollective-20" },
  { name: "Align Pilates C8 Pro Reformer", description: "The value pick among commercial-rated machines, and genuinely not a compromise. Aluminium rails, a graded colour-coded spring set, and a build specified for studio use, at a real discount to anything comparable from Balanced Body.", price: "From $2,750", affiliateUrl: "https://www.amazon.com/dp/B099ZJ4C25?tag=pilatescollective-20" },
  { name: "Merrithew At Home SPX Reformer", description: "The STOTT PILATES reference package for home use. Five colour-coded springs with unusually fine gradation at the light end, which is what makes it the pick for rehabilitation and prenatal work, and a frame sized to fit along a wall in most bedrooms.", price: "From $3,349", affiliateUrl: "https://www.amazon.com/dp/B004FGT0TM?tag=pilatescollective-20" },
];

const PRODUCTS = [
  { name: "Colaxi 5-Piece Reformer Spring Set", description: "The first thing to budget for on any used machine that has done studio hours. Springs lose tension gradually rather than failing visibly, so a set that looks fine can still be well off its original calibration. This is an aftermarket, universal-ish fit set rather than brand-OEM, so check it against the exact model before ordering.", price: "$65.54", affiliateUrl: "https://www.amazon.com/dp/B0DC93JC3M?tag=pilatescollective-20" },
  { name: "Balanced Body Replacement Reformer Ropes with Clips", description: "The cheapest meaningful improvement to a secondhand machine. Stretched ropes quietly change the working length of every strap exercise, and mismatched sides are worse than both being long. Replace as a matched pair, and confirm the fit for the exact model before ordering.", price: "$35", affiliateUrl: "https://www.amazon.com/dp/B0CYM27QMZ?tag=pilatescollective-20" },
  { name: "Amazon Basics Microfiber Cloths (24-pack)", description: "Do this before concluding a used machine has a bearing problem. Most carriage noise and most gritty glide is dirt compacted in the rail track, and a dry cloth followed by a barely damp one restores the feel at no cost. It is also the highest-return maintenance task on any reformer, new or old, and takes about twenty minutes.", price: "$10.38", affiliateUrl: "https://www.amazon.com/dp/B009FUF6DM?tag=pilatescollective-20" },
  { name: "STAR BRITE Ultimate Vinyl Clean", description: "The right first treatment for upholstery that has had a previous owner. A formula rated for vinyl and leatherette restores some flexibility to a pad that has dried out and slows the progression toward cracking. Avoid anything alcohol or bleach based, which is what caused the drying in the first place.", price: "$14.95", affiliateUrl: "https://www.amazon.com/dp/B01CZ2ZW4O?tag=pilatescollective-20" },
  { name: "Eccentfit Pilates Grip Pads (4-pack)", description: "A practical answer to upholstery that is sound but slick with age. A grip pad makes standing and kneeling work feel secure again and protects what is left of the original vinyl. Much cheaper than re-upholstery and a reasonable interim step while you decide whether the machine is worth the full job.", price: "$7.99", affiliateUrl: "https://www.amazon.com/dp/B0GGR4QXNH?tag=pilatescollective-20" },
  { name: "X-Protector Furniture Sliders (8-pack)", description: "Private sales never come with delivery. You are collecting a long, heavy machine from someone's studio or spare room, and a set of sliders turns that from a two-person struggle into something manageable without damaging either floor. Bring them with you rather than hoping the seller has some.", price: "$12.99", affiliateUrl: "https://www.amazon.com/dp/B075CR94J3?tag=pilatescollective-20" },
];

export default function BuyingAUsedPilatesReformerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Buying</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Buying a Used<br /><span style={{ color: "#8b4a31" }}>Pilates Reformer</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated 16 September 2026 · 11 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              A commercial reformer is a frame, a pair of rails and a set of consumables. The consumables wear out on a schedule and cost a few hundred dollars to renew. The frame and rails either are true or they are not, and that is the whole inspection. Get that distinction right and the used market is the best value in Pilates equipment. Get it wrong and you have bought a very heavy problem.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-reformer-loops-hooks.png" alt="Detail of the ropes, loops and hooks on a Pilates reformer" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-14 mt-4 rounded-2xl p-7" style={{ backgroundColor: "#fff4f1", border: "1px solid rgba(139,74,49,0.15)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-3" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>The rule</p>
              <p className="text-base leading-relaxed mb-0" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Buy the frame, replace the consumables. Springs, ropes, straps and upholstery are expected costs on any used machine and should come off the price rather than out of your enthusiasm. A bent rail, a flexing frame or a discontinued footbar mechanism is a different category entirely, and no discount makes it a good buy.
              </p>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>The inspection, in order</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Work through these in this sequence, because the first two decide whether the rest is worth doing. If you cannot see the machine in person, ask for video of the carriage running through its full travel and photographs of the rails sighted along their length.
              </p>
              <div className="space-y-4">
                {INSPECT.map((c) => (
                  <div key={c.label} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
                      <p className="text-base font-semibold" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{c.label}</p>
                      <p className="text-xs font-semibold" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{c.verdict}</p>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{c.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>How to price it</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Start from what the machine costs new today, not from what the seller paid. Sellers routinely anchor on their original purchase price, and on a machine bought years ago that number is not the relevant one. Establish the current new price for that exact model first, because published figures for some brands are badly out of date and you want the real one.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                For reference, current new pricing on machines that commonly appear secondhand: the Balanced Body Studio Reformer is $4,700, the Balanced Body Allegro Stretch is $3,710, and the Align Pilates C8 Pro is $2,750. Those are the numbers to discount from. Our{" "}
                <Link href="/blog/align-pilates-vs-balanced-body" style={{ color: "#8b4a31", textDecoration: "underline" }}>brand comparison</Link>{" "}
                has more current pricing across both ranges.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Then subtract, in this order: the consumables it needs, which on a studio machine is realistically a full spring set, ropes and possibly upholstery; a discount for age and hours; and a further discount for the fact that you get no warranty and no recourse at all. What remains is your number. If the seller is close to new-machine pricing, buy new, because a new machine comes with cover and a known history.
              </p>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Where the machines come from, and why it matters</h2>
              <div className="space-y-4">
                {[
                  { label: "Studio refits and closures", body: "The best source, counterintuitively. These machines have done serious hours but were built for it and usually maintained on a schedule, because a studio cannot afford a machine that is out of action. They often come in matched multiples, which is exactly what a new studio wants. Ask what the maintenance routine was and when the springs were last replaced." },
                  { label: "Home sellers who stopped practising", body: "Very low hours, which sounds ideal and sometimes is. The risk is storage rather than use: a machine kept folded in a damp garage for three years has corroded springs and dried upholstery despite barely being used. Ask where it has been living, not just how often it was used." },
                  { label: "Dealer refurbished trade-ins", body: "More expensive than a private sale and usually worth the difference. Consumables are typically already replaced, the machine has been checked by someone who knows it, and there is often a limited warranty. If you cannot inspect confidently yourself, this is the route that removes most of the risk." },
                  { label: "General marketplace listings", body: "The widest selection and the least information. Listings frequently misname models, which matters because parts availability is model-specific. Insist on the exact model name and photographs of the rails and springs before travelling to see anything." },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-14 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Walk away if</h2>
              <ul className="space-y-3">
                {[
                  "A rail is not straight, or the carriage changes resistance partway through its travel.",
                  "The frame flexes or moves at the joints under load on a machine that should be rigid.",
                  "The footbar will not lock reliably in every position, and the mechanism is not available as a part.",
                  "The seller cannot tell you the exact model, and you cannot identify it from the machine itself.",
                  "Springs, ropes and the footbar parts are discontinued for that model.",
                  "A wooden frame has splits at the joints or water damage at the feet.",
                  "The asking price, plus the consumables it obviously needs, lands close to what the machine costs new.",
                  "You cannot inspect it and the seller will not provide video of the carriage running and photographs of the rails.",
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
                  { q: "Is it worth buying a used Pilates reformer?", a: "For a commercial-grade machine from an established brand, often yes. A studio frame is built for a decade or more of daily use, and the parts that wear out are springs, ropes and upholstery, all of which are replaceable for a few hundred dollars. What you are really buying is the frame and the rails, and those either are straight and true or they are not. For consumer-end machines the case is weaker: the frame was not built for a long life, replacement parts may not exist, and the saving against a new one is smaller in absolute terms." },
                  { q: "How much should a used Pilates reformer cost?", a: "Price it against what the machine costs new today, not against what it cost when it was bought. Establish the current new price for that exact model, then subtract the cost of the consumables it needs, then discount for age, hours of use and the absence of any warranty. A machine needing a full set of springs, ropes and re-upholstery has several hundred dollars of work ahead of it before it is as-new, and that comes off the price. Brand matters too: Balanced Body has the largest installed base and holds value best, so expect to pay closer to new for one." },
                  { q: "What should I check on a used reformer?", a: "Start with the frame and rails, because those are the only parts that cannot be economically replaced. Sight along the rails for straightness, push the carriage slowly through its full travel listening for grinding or catching, and put weight on the frame to feel for flex or movement at the joints. Then check the springs for corrosion and for whether they still return to length, the ropes for stretch and fraying, the footbar mechanism through every position, and the upholstery for cracking rather than just wear. Finally, confirm the model name and year so you can establish that parts are still available." },
                  { q: "Where do used Pilates reformers come from?", a: "Mostly from studios refitting, relocating or closing, and from home buyers who bought a machine and did not keep up the practice. Studio machines have done far more hours but were built for it and have usually been maintained on a schedule. Home machines have done very little work but may have been stored badly, which is its own problem for springs and upholstery. Some dealers also sell refurbished trade-ins, which cost more than a private sale and typically come with the consumables already replaced and some form of limited warranty." },
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
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>New prices to value a used machine against</h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Price a secondhand machine down from what it costs new today, not from what the seller paid. These are the current figures. Check the warranty covers your intended use before ordering, and confirm the machine fits the room and the route into it.
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
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Budget these alongside the machine</h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Assume most of this list on any machine that has done studio hours, and price it into your offer rather than treating it as a surprise afterwards. Check compatibility with the exact model before ordering any part.
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
                <ArticleCard title="Reformer Maintenance & Spring Replacement" excerpt="What wears out, how often, and how to keep a machine feeling like it did new." href="/blog/pilates-reformer-maintenance-and-spring-replacement" category="Equipment" readTime="11 min read" date="September 2026" imageUrl="/pictures/stitch-reformer-spring-detail.png" />
                <ArticleCard title="Where to Buy a Pilates Reformer" excerpt="Direct, dealer or marketplace: what each channel costs you and what it protects." href="/blog/where-to-buy-a-pilates-reformer" category="Guide" readTime="11 min read" date="September 2026" imageUrl="/pictures/stitch-studio-entryway.png" />
                <ArticleCard title="Align Pilates vs Balanced Body" excerpt="Frame, springs, ecosystem and current dealer pricing compared." href="/blog/align-pilates-vs-balanced-body" category="Comparison" readTime="12 min read" date="September 2026" imageUrl="/pictures/stitch-reformer-row-studio.png" />
                <ArticleCard title="Reformer Dimensions & Space Requirements" excerpt="Check it fits before you drive across the county to collect it." href="/blog/pilates-reformer-dimensions-and-space-requirements" category="Equipment" readTime="11 min read" date="September 2026" imageUrl="/pictures/stitch-reformer-sunlit-minimal.png" />
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
