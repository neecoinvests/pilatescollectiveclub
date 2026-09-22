import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Where to Buy a Pilates Reformer (2026): Direct vs Dealer",
  description: "Buying direct, through a specialist dealer or on a marketplace: what each channel costs, what it protects, and the delivered-total traps on a heavy machine.",
  keywords: ["where to buy a pilates reformer", "buy pilates reformer online", "pilates reformer dealer", "buy reformer direct from manufacturer", "pilates reformer amazon", "pilates reformer shipping cost", "authorised pilates dealer", "pilates reformer warranty dealer"],
  openGraph: {
    title: "Where to Buy a Pilates Reformer (2026)",
    description: "Direct, dealer or marketplace. What each channel costs and what it protects.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/where-to-buy-a-pilates-reformer",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-studio-entryway.png", width: 1200, height: 630, alt: "Where to Buy a Pilates Reformer — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Where to Buy a Pilates Reformer (2026)",
    description: "Direct, dealer or marketplace, and the delivered-total traps.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-studio-entryway.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/where-to-buy-a-pilates-reformer" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Where to Buy a Pilates Reformer (2026): Direct vs Dealer",
      "description": "A comparison of the channels for buying a Pilates reformer: manufacturer direct, specialist dealers, general marketplaces and the used market, covering price, warranty, delivery and recourse.",
      "url": "https://pilatescollectiveclub.com/blog/where-to-buy-a-pilates-reformer",
      "datePublished": "2026-09-16",
      "dateModified": "2026-09-16",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-studio-entryway.png", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/where-to-buy-a-pilates-reformer" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Where to Buy a Pilates Reformer", "item": "https://pilatescollectiveclub.com/blog/where-to-buy-a-pilates-reformer" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is it cheaper to buy a reformer direct from the manufacturer?", "acceptedAnswer": { "@type": "Answer", "text": "Not necessarily, and this surprises people. Manufacturers generally hold list price, while specialist dealers compete with each other and frequently list the same machine below list, sometimes several hundred dollars below. What direct buying gives you is the full configuration range, since options like footbar type, upholstery colour and leg height are often only selectable at source. The practical approach is to identify the exact configuration you want on the manufacturer's site, then price that same specification across two or three authorised dealers before ordering." } },
        { "@type": "Question", "name": "Should I buy a Pilates reformer on Amazon?", "acceptedAnswer": { "@type": "Answer", "text": "For accessories, props and consumer-end machines, marketplaces are a reasonable channel. For studio-grade apparatus, check who the seller actually is before ordering. Major brands do list machines on marketplaces, and buying from the brand's own storefront is fine. Buying the same machine from an unidentified third-party seller is a different transaction: manufacturer warranties are commonly tied to purchase from the brand or an authorised dealer, so support may be worth nothing, and returns on an item this heavy can be impractical regardless of the stated policy." } },
        { "@type": "Question", "name": "How much does reformer delivery cost?", "acceptedAnswer": { "@type": "Answer", "text": "It varies enough that you should never compare machines on headline price alone. A studio reformer is heavy, long and ships as freight rather than parcel, so the delivered total can differ by hundreds of dollars between sellers offering the same machine. Some dealers include free shipping as their main competitive lever. Also establish what delivery actually means: kerbside drop-off leaves a very heavy crate on the pavement, while room-of-choice delivery and assembly are separate services that may or may not be included." } },
        { "@type": "Question", "name": "What should I check before ordering a reformer online?", "acceptedAnswer": { "@type": "Answer", "text": "Five things. That the seller is the brand or a named authorised dealer. The delivered total including freight, tax and any import surcharge, rather than the headline price. What delivery includes, specifically whether it reaches the room and whether assembly is covered. That the machine will physically get from the door to the room, which means measuring doorways, corridor turns and lift depth first. And the warranty terms for your intended use, because a domestic warranty typically excludes commercial use from the first paid session." } },
      ],
    },
  ],
};

const CHANNELS = [
  {
    label: "Direct from the manufacturer",
    best: "Full configuration choice and warranty certainty",
    body: "The only channel where you reliably get the complete options list: footbar type, upholstery, leg height, spring configuration. Warranty registration is straightforward because there is no question about provenance. The trade-off is price, since manufacturers generally hold list rather than discount, and lead times on a made-to-order configuration can be long. Use the manufacturer's site to decide your exact specification even if you end up buying elsewhere.",
  },
  {
    label: "Specialist Pilates dealers",
    best: "Price, and people who know the product",
    body: "Independent retailers that carry several brands, compete with each other, and frequently list the same machine below list price. Many use free freight as their main lever, which on an item this heavy is worth real money. The good ones also answer questions competently, which matters when you are choosing between footbar options you have never used. Confirm they are an authorised dealer for that brand, because the warranty usually depends on it.",
  },
  {
    label: "General marketplaces",
    best: "Accessories, props and consumer-end machines",
    body: "Fine for the small stuff and for machines at the consumer end. For studio apparatus, the question is who the seller is: a brand storefront is one transaction, an unidentified third-party reseller is another. Marketplace returns policies also collide with reality on a hundred-kilogram crate. Check the seller identity, the warranty position and what a return would actually involve before ordering anything large.",
  },
  {
    label: "The used market",
    best: "Budget, if you can inspect it",
    body: "Studios refit and close, and a well-maintained commercial machine has a long life left in it. Prices are meaningfully below new, and springs and upholstery are replaceable. The risks are frame damage, missing model-specific parts and no warranty at all. Worth doing if you can see the machine in person and know what to look for.",
  },
];

const REFORMERS = [
  { name: "Balanced Body Allegro Stretch Reformer", description: "The wide-carriage folding machine most home buyers end up comparing everything else against, and a real listing rather than a discontinued one: 2 inches wider and 6 inches longer than the standard Allegro, with a 36-inch adjustable footbar and TwistLock shoulder rests, sold direct on Amazon.", price: "From $3,710", affiliateUrl: "https://www.amazon.com/dp/B093R8DYC9?tag=pilatescollective-20" },
  { name: "Balanced Body Studio Reformer (Revo Footbar)", description: "The permanent-installation machine that populates certification centres and clinics. Strata rock maple frame, five Signature Springs, and full tower compatibility. Sold direct by Balanced Body on Amazon; made to order. It does not fold.", price: "From $4,700", affiliateUrl: "https://www.amazon.com/dp/B002XVWIFE?tag=pilatescollective-20" },
  { name: "Merrithew At Home SPX Reformer", description: "The STOTT PILATES compact reference machine, sold mainly as a package, so confirm what a given price includes. Five colour-coded springs with unusually fine gradation at the light end, which is what makes it the pick for rehabilitation and prenatal work. Fits along a wall in most bedrooms.", price: "From $3,349", affiliateUrl: "https://www.amazon.com/dp/B004FGT0TM?tag=pilatescollective-20" },
  { name: "Align-Pilates C8-PRO Reformer", description: "The value pick among commercial-rated machines, and genuinely not a compromise. Aluminium rails, a graded colour-coded spring set, and a build specified for studio use, sold on Amazon by Merrithew, Align's US distributor, at a real discount to anything comparable from Balanced Body.", price: "From $2,750", affiliateUrl: "https://www.amazon.com/dp/B099ZJ4C25?tag=pilatescollective-20" },
  { name: "Balanced Body Metro IQ Reformer", description: "The cheapest genuine spring reformer from a major brand, and the machine that marks the real floor of the category. Short stored length makes it the one that fits where a full studio frame does not.", price: "From $2,330", affiliateUrl: "https://www.amazon.com/dp/B09HNCMTZL?tag=pilatescollective-20" },
];

const PRODUCTS = [
  { name: "Colaxi 5-Piece Reformer Spring Set", description: "Worth knowing the price of before you buy any machine, because spring availability is a genuine differentiator between brands and a genuine risk on the used market. This is an aftermarket, universal-ish-fit set rather than a brand-OEM one, so check the fit against your exact model before ordering.", price: "From $65.54", affiliateUrl: "https://www.amazon.com/dp/B0DC93JC3M?tag=pilatescollective-20" },
  { name: "Balanced Body Replacement Reformer Ropes with Clips", description: "The other consumable, and the one most likely to be tired on a machine bought secondhand. Ropes stretch gradually and a stretched rope changes the working length of every strap exercise. Replace as a matched pair rather than individually so both sides behave the same.", price: "From $35", affiliateUrl: "https://www.amazon.com/dp/B0CYM27QMZ?tag=pilatescollective-20" },
  { name: "X-Protector Furniture Sliders, 8-Pack", description: "If delivery is kerbside, this is the difference between a manageable afternoon and a damaged floor. Sliders let two people move a crated or assembled machine across a room without dragging it — sliders alone, not moving straps. Cheap, and you will use them again every time the room gets rearranged.", price: "From $12.99", affiliateUrl: "https://www.amazon.com/dp/B075CR94J3?tag=pilatescollective-20" },
  { name: "Bosch GLM100-23 Laser Distance Measure", description: "Buy this before you buy the reformer. Doorway widths, corridor turns, lift depth and ceiling height are the measurements that decide whether a delivery succeeds, and they are the ones people estimate. Twenty minutes of measuring is cheap insurance on a four-figure order.", price: "From $62.99", affiliateUrl: "https://www.amazon.com/dp/B0C76CPGC7?tag=pilatescollective-20" },
  { name: "ProsourceFit Interlocking Foam Tiles, 48 sq ft", description: "A reformer puts a lot of weight on four small feet. Interlocking floor tiles under the frame spread the load, protect a rented or timber floor, and cut the carriage noise transmitted through the building. Order them to arrive before the machine does.", price: "From $49.99", affiliateUrl: "https://www.amazon.com/dp/B07YN1W5W3?tag=pilatescollective-20" },
  { name: "STAR BRITE Ultimate Vinyl Clean", description: "The first thing to do with any machine that has had a previous owner, and the right habit on a new one. Alcohol-heavy and bleach-based cleaners dry reformer upholstery until it cracks, so use a formula rated for vinyl and leatherette from the start rather than discovering the difference in year three.", price: "From $14.95", affiliateUrl: "https://www.amazon.com/dp/B01CZ2ZW4O?tag=pilatescollective-20" },
];

export default function WhereToBuyAPilatesReformerPage() {
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
              Where to Buy a<br /><span style={{ color: "#8b4a31" }}>Pilates Reformer</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated 16 September 2026 · 11 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              The same reformer can differ by several hundred dollars delivered depending on where you buy it, and the cheapest listing is not always the cheapest purchase. Freight, configuration options, warranty validity and whether anyone brings the machine into the room all move with the channel. Here is what each one is actually good for.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-studio-entryway.png" alt="The entrance to a Pilates studio with equipment visible beyond" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-14 mt-4 rounded-2xl p-7" style={{ backgroundColor: "#fff4f1", border: "1px solid rgba(139,74,49,0.15)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-3" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>The method that works</p>
              <p className="text-base leading-relaxed mb-0" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Decide your exact configuration on the manufacturer&apos;s site, because that is where the full options list lives. Then price that same specification across two or three authorised dealers, comparing delivered totals rather than headline prices. Then confirm the machine can physically reach the room before anything ships. Most of the money and nearly all of the disasters are in steps two and three.
              </p>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>The four channels</h2>
              <div className="space-y-4">
                {CHANNELS.map((c) => (
                  <div key={c.label} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-base font-semibold mb-1" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{c.label}</p>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Best for: {c.best}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{c.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Compare delivered totals, not prices</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                A reformer is freight, not a parcel. It is long, heavy and awkward, and the cost of moving it is a material share of the purchase rather than a rounding error. Two dealers listing the same machine at the same price can land hundreds of dollars apart once shipping is applied, which is precisely why free freight is a common competitive lever in this category.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Three other things move the delivered total. Tax, obviously, and it varies by where the seller ships from. Import charges, which in the current US market can appear as a surcharge added at checkout rather than in the listed price, so the number you see is not always the number you pay. And assembly, which on a studio machine may be a separate line or may be bundled.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                So build the comparison on one number: what leaves your account, for a machine standing assembled in the room you want it in. Anything else is not a comparison. Ask each seller for that figure in writing and the differences between them become obvious quickly.
              </p>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What the channel protects</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Price is the visible difference. Recourse is the one that matters when something goes wrong, and it varies more than the price does.
              </p>
              <div className="space-y-4">
                {[
                  { label: "Warranty validity", body: "Manufacturer warranties are commonly conditional on purchase from the brand or an authorised dealer. The same machine bought from an unidentified reseller can arrive with no support at all, which on apparatus with a decade-long expected life is a significant thing to give up for a modest saving. Ask the seller directly whether they are authorised for that brand." },
                  { label: "Parts supply", body: "Springs, ropes and upholstery are wear items you will buy repeatedly over the machine's life. A dealer relationship is worth having for this alone, because they know which part fits which production run. Buying from a channel that vanishes leaves you searching for parts by measurement." },
                  { label: "Damage in transit", body: "Freight damage on something this size does happen, and the claims process differs by channel. Establish before ordering who is responsible if the crate arrives damaged, what the inspection window is, and whether you must note damage at the point of delivery. Photograph the crate before signing anything." },
                  { label: "Getting it into the room", body: "Kerbside delivery is the default on freight and it leaves you with a crate on the pavement. Room-of-choice delivery and assembly are usually available as separate services, and for a studio order they are often included. Confirm which you are buying, because the difference is a very heavy problem on a Tuesday afternoon." },
                  { label: "Configuration correctness", body: "Footbar type, leg height and upholstery are selected at order. A dealer who knows the product catches a mismatch before it ships; a marketplace listing does not. If you are unsure which footbar you want, that is a reason to buy from someone you can ask." },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>If you are buying more than one</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Multi-machine orders work differently and none of the above really applies. Commercial suppliers price studio fit-outs as quotes rather than as listings, and trade accounts are normal practice across the major brands. The size of any reduction is negotiated, so the only way to find out is to ask for a written quote for the full order.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Ask for delivery, assembly, calibration and first service itemised separately, because a machine price that excludes assembly is not comparable to one that includes it, and on six or ten machines that difference is substantial. Our{" "}
                <Link href="/blog/pilates-studio-equipment-cost-breakdown" style={{ color: "#8b4a31", textDecoration: "underline" }}>studio equipment cost breakdown</Link>{" "}
                sets out what a full fit-out comes to at three sizes, and what sits outside the equipment budget.
              </p>
            </div>

            <div className="mb-14 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Before you place the order</h2>
              <ul className="space-y-3">
                {[
                  "Confirm the seller is the brand or a named authorised dealer for that brand.",
                  "Get the delivered total in writing: machine, freight, tax, any import surcharge, assembly.",
                  "Establish whether delivery is kerbside or reaches the room, and whether assembly is included.",
                  "Measure the doorways, every corridor turn, the lift depth and the ceiling height, and give those numbers to the seller.",
                  "Read the warranty for your intended use. A domestic warranty typically excludes commercial use from the first paid session.",
                  "Check what the return position actually is on a freight item, not what the general policy page says.",
                  "Ask what replacement springs and ropes cost for that model, and whether they are stocked.",
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
                  { q: "Is it cheaper to buy a reformer direct from the manufacturer?", a: "Not necessarily, and this surprises people. Manufacturers generally hold list price, while specialist dealers compete with each other and frequently list the same machine below list, sometimes several hundred dollars below. What direct buying gives you is the full configuration range, since options like footbar type, upholstery colour and leg height are often only selectable at source. The practical approach is to identify the exact configuration you want on the manufacturer's site, then price that same specification across two or three authorised dealers before ordering." },
                  { q: "Should I buy a Pilates reformer on Amazon?", a: "For accessories, props and consumer-end machines, marketplaces are a reasonable channel. For studio-grade apparatus, check who the seller actually is before ordering. Major brands do list machines on marketplaces, and buying from the brand's own storefront is fine. Buying the same machine from an unidentified third-party seller is a different transaction: manufacturer warranties are commonly tied to purchase from the brand or an authorised dealer, so support may be worth nothing, and returns on an item this heavy can be impractical regardless of the stated policy." },
                  { q: "How much does reformer delivery cost?", a: "It varies enough that you should never compare machines on headline price alone. A studio reformer is heavy, long and ships as freight rather than parcel, so the delivered total can differ by hundreds of dollars between sellers offering the same machine. Some dealers include free shipping as their main competitive lever. Also establish what delivery actually means: kerbside drop-off leaves a very heavy crate on the pavement, while room-of-choice delivery and assembly are separate services that may or may not be included." },
                  { q: "What should I check before ordering a reformer online?", a: "Five things. That the seller is the brand or a named authorised dealer. The delivered total including freight, tax and any import surcharge, rather than the headline price. What delivery includes, specifically whether it reaches the room and whether assembly is covered. That the machine will physically get from the door to the room, which means measuring doorways, corridor turns and lift depth first. And the warranty terms for your intended use, because a domestic warranty typically excludes commercial use from the first paid session." },
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
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>The machines most people are pricing</h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Whichever channel you buy through, these are the machines this decision usually comes down to. Compare delivered totals, not headline prices. Check the warranty covers your intended use before ordering, and confirm the machine fits the room and the route into it.
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
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What to have before the machine arrives</h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                These are the things worth having in the room before the freight turns up, plus the wear parts whose price and availability are worth checking before you commit to a model at all.
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
                <ArticleCard title="Buying a Used Pilates Reformer" excerpt="What to inspect, what refurbishment costs, and the faults that should end the conversation." href="/blog/buying-a-used-pilates-reformer" category="Guide" readTime="11 min read" date="September 2026" imageUrl="/pictures/stitch-reformer-loops-hooks.png" />
                <ArticleCard title="Align Pilates vs Balanced Body" excerpt="Frame, springs, ecosystem and real dealer pricing compared." href="/blog/align-pilates-vs-balanced-body" category="Comparison" readTime="12 min read" date="September 2026" imageUrl="/pictures/stitch-reformer-row-studio.png" />
                <ArticleCard title="Reformer Dimensions & Space Requirements" excerpt="Footprints, clearance, ceiling height and getting the machine through the door." href="/blog/pilates-reformer-dimensions-and-space-requirements" category="Equipment" readTime="11 min read" date="September 2026" imageUrl="/pictures/stitch-reformer-sunlit-minimal.png" />
                <ArticleCard title="How Much Does a Pilates Reformer Cost?" excerpt="What you actually get at every price point, from $300 to $6,000." href="/blog/how-much-does-a-pilates-reformer-cost" category="Equipment" readTime="10 min read" date="June 2026" imageUrl="/pictures/stitch-reformer-morning-light.png" />
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
