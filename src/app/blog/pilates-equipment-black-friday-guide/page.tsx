import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Pilates Equipment Black Friday Guide (2026): What Discounts",
  description: "Which Pilates equipment actually moves on price in November, which never does, and the list prices to measure any Black Friday claim against.",
  keywords: ["pilates black friday", "pilates equipment black friday", "pilates reformer black friday", "black friday pilates deals 2026", "cyber monday pilates", "pilates reformer sale", "when to buy a pilates reformer", "pilates equipment discount"],
  openGraph: {
    title: "Pilates Equipment Black Friday Guide (2026)",
    description: "What discounts, what never does, and the baseline list prices to judge any deal against.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/pilates-equipment-black-friday-guide",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-retail-activewear.png", width: 1200, height: 630, alt: "Pilates Equipment Black Friday Guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilates Equipment Black Friday Guide (2026)",
    description: "What actually discounts in November, and the prices to measure a deal against.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-retail-activewear.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/pilates-equipment-black-friday-guide" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Pilates Equipment Black Friday Guide (2026): What Really Discounts",
      "description": "A buyer's guide to Pilates equipment in the Black Friday window: which categories discount and which do not, how to judge a claimed saving, and the published list prices to measure against.",
      "url": "https://pilatescollectiveclub.com/blog/pilates-equipment-black-friday-guide",
      "datePublished": "2026-09-16",
      "dateModified": "2026-09-16",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-retail-activewear.png", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/pilates-equipment-black-friday-guide" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Pilates Equipment Black Friday Guide", "item": "https://pilatescollectiveclub.com/blog/pilates-equipment-black-friday-guide" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "When is Black Friday 2026?", "acceptedAnswer": { "@type": "Answer", "text": "Black Friday falls on 27 November 2026, with Cyber Monday on 30 November. In practice the window is far longer than the name suggests: marketplace pricing on smaller equipment and apparel typically starts moving in the first half of November, and some manufacturers run their own promotions on a schedule that has nothing to do with the American calendar. Treat the date as the centre of a several-week period rather than a single day." } },
        { "@type": "Question", "name": "Do Pilates reformers go on sale on Black Friday?", "acceptedAnswer": { "@type": "Answer", "text": "Sometimes, but reformers behave differently from most products in a November sale, and it is worth understanding why before you wait. Studio-grade apparatus is largely sold direct by the manufacturer or through authorised dealers rather than on open marketplaces, which means there is no third-party seller competing on price. Where reductions do appear they tend to be manufacturer promotions, bundle offers that include a jumpboard or props rather than a lower machine price, or clearance on a model being replaced. The consumer end of the market, meaning the sub-$1,000 machines sold through general retailers, behaves much more like ordinary consumer electronics." } },
        { "@type": "Question", "name": "Is it worth waiting until Black Friday to buy Pilates equipment?", "acceptedAnswer": { "@type": "Answer", "text": "For props, apparel, recovery gear and consumer-end machines, waiting a few weeks in November is usually reasonable if you are not in a hurry. For studio-grade apparatus, waiting is a weaker bet: the discount is less predictable, stock on specific models can be thin by late November, and if you are fitting out a studio, a negotiated multi-unit quote from a commercial supplier is normally worth more than any seasonal promotion. If you need the equipment for a specific date, buy when you can confirm delivery rather than gambling on a sale." } },
        { "@type": "Question", "name": "How do I tell whether a Black Friday deal is real?", "acceptedAnswer": { "@type": "Answer", "text": "Know the ordinary price before the sale starts. That single step defeats almost every misleading claim, because the common tactic is not a fake discount but a genuine discount from an inflated reference price. Record the price of everything on your shortlist now, in the weeks before November, and compare against your own note rather than against the retailer's crossed-out figure. Then check three other things: that the seller is the brand or an authorised dealer rather than an unknown third party, that shipping on a heavy item is included, and what the return window and restocking terms are." } },
      ],
    },
  ],
};

const REFORMER_BASELINE = [
  { item: "AeroPilates Pro XP 557", tier: "Consumer", price: "$1,329" },
  { item: "Balanced Body Metro IQ", tier: "Studio standard", price: "$2,295" },
  { item: "Align Pilates C8 Pro", tier: "Studio standard", price: "$2,750" },
  { item: "Merrithew At Home SPX", tier: "Compact", price: "$3,299" },
  { item: "Merrithew SPX Max", tier: "Studio standard", price: "$3,649" },
  { item: "Align Pilates A8 Pro", tier: "Studio standard", price: "$3,700" },
  { item: "BASI Systems Reformer", tier: "Premium", price: "~$3,900" },
  { item: "Balanced Body Allegro 2", tier: "Studio standard", price: "$3,995" },
  { item: "Elina Pilates Elite Wood", tier: "Premium", price: "$3,995" },
  { item: "Peak Pilates MVe", tier: "Premium", price: "$4,295" },
  { item: "Balanced Body Studio Reformer", tier: "Studio standard", price: "$4,400" },
  { item: "Gratz Universal Aluminum", tier: "Classical", price: "$4,590" },
  { item: "Merrithew V2 Max", tier: "Studio standard", price: "$4,999" },
  { item: "Gratz Maple Classic", tier: "Classical", price: "$5,295" },
];

const APPARATUS_BASELINE = [
  { item: "Balanced Body Arc Barrel", tier: "Barrel", price: "$245" },
  { item: "Balanced Body Jump Board", tier: "Attachment", price: "$295" },
  { item: "Balanced Body Spine Corrector", tier: "Barrel", price: "$395" },
  { item: "Balanced Body Ladder Barrel", tier: "Barrel", price: "$1,295" },
  { item: "Balanced Body Wunda Chair", tier: "Chair", price: "$1,800" },
  { item: "Merrithew Split-Pedal Stability Chair", tier: "Chair", price: "$1,999" },
  { item: "Align-Pilates Cadillac Frame (reformer conversion)", tier: "Cadillac", price: "$3,500" },
  { item: "Balanced Body Cadillac", tier: "Cadillac", price: "$8,000" },
];

const REFORMERS = [
  { name: "Balanced Body Metro IQ Reformer", description: "The cheapest genuine spring reformer from a major brand, and the machine that marks the real floor of the category. Short stored length makes it the one that fits where a full studio frame does not.", price: "From $2,295", affiliateUrl: "https://www.amazon.com/s?k=balanced+body+metro+iq+reformer&tag=pilatescollective-20" },
  { name: "Align Pilates C8 Pro Reformer", description: "The value pick among commercial-rated machines, and genuinely not a compromise. Aluminium rails, a graded colour-coded spring set, and a build specified for studio use, at a real discount to anything comparable from Balanced Body.", price: "From $2,750", affiliateUrl: "https://www.amazon.com/s?k=align+pilates+c8+pro+reformer&tag=pilatescollective-20" },
  { name: "Merrithew SPX Max Reformer", description: "The STOTT PILATES reference machine, and the one that folds completely flat onto castors to roll under a bed. Five colour-coded springs with unusually fine gradation at the light end, which is what makes it the pick for rehabilitation and prenatal work.", price: "From $3,649", affiliateUrl: "https://www.amazon.com/s?k=merrithew+spx+max+reformer&tag=pilatescollective-20" },
  { name: "Align Pilates A8 Pro Reformer", description: "The widest carriage in this comparison, which is the clearest thing Align does better than anyone. Larger and taller practitioners notice it immediately in side-lying and kneeling work. List runs $4,200 to $4,320, so check the current dealer figure.", price: "From $3,700", affiliateUrl: "https://www.amazon.com/s?k=align+pilates+a8+pro+reformer&tag=pilatescollective-20" },
  { name: "Balanced Body Allegro 2 Reformer", description: "The folding studio machine most home buyers end up comparing everything else against. Upright fold against a wall, the deepest accessory ecosystem in the industry, and the strongest resale of any reformer here. $3,995 standard, around $4,325 with the leg kit.", price: "From $3,995", affiliateUrl: "https://www.amazon.com/dp/B0D3G2BJZ7?tag=pilatescollective-20" },
  { name: "Balanced Body Studio Reformer", description: "The permanent-installation machine that populates certification centres and clinics. Strata rock maple frame, five signature springs, and full tower compatibility. Price runs $4,400 to $4,800 depending on which of the four footbars you choose. It does not fold.", price: "From $4,400", affiliateUrl: "https://www.amazon.com/dp/B0C9G88VJS?tag=pilatescollective-20" },
  { name: "Merrithew V2 Max Reformer", description: "Merrithew's professional machine: wider carriage than the SPX line, high-precision spring gradation, and the patented retractable rope system that keeps ropes adjustable and out of the way. The one to look at if you are tall or working clinically.", price: "From $4,999", affiliateUrl: "https://www.amazon.com/s?k=merrithew+v2+max+reformer&tag=pilatescollective-20" },
  { name: "Merrithew At Home SPX Reformer", description: "Shorter and narrower than the SPX Max while keeping the same spring system and carriage build. Fits along a wall in most bedrooms. Sold mainly as a package, so confirm what a given price includes.", price: "From $3,299", affiliateUrl: "https://www.amazon.com/s?k=merrithew+at+home+spx+reformer&tag=pilatescollective-20" },
  { name: "Elina Pilates Elite Wood Reformer", description: "Wood-framed studio machine priced against the Allegro 2, with the visual warmth that an aluminium frame does not have. Worth a look if the machine lives in a living space rather than a dedicated room.", price: "From $3,995", affiliateUrl: "https://www.amazon.com/s?k=elina+pilates+elite+wood+reformer&tag=pilatescollective-20" },
  { name: "Peak Pilates MVe Reformer", description: "Classical-leaning studio machine with a longer carriage than most, powder-coated aluminium frame and sealed bearings. A strong choice for tall practitioners and for studios running a classical syllabus.", price: "From $4,295", affiliateUrl: "https://www.amazon.com/s?k=peak+pilates+mve+reformer&tag=pilatescollective-20" },
  { name: "Gratz Universal Aluminum Reformer", description: "The original Gratz design, built to the classical specification and still the reference for that lineage. Buy this if the classical repertoire is what you are training, not because it is the most expensive option. Sold direct at gratzpilates.com, not available on Amazon.", price: "From $4,590", affiliateUrl: "https://www.gratzpilates.com/collections/reformers" },
  { name: "AeroPilates Pro XP 557 Reformer", description: "The one machine from a recognised brand that genuinely costs under $2,000. It uses elastic cord rather than coil springs, which is a real difference in how resistance builds, but for building a habit it is a workable trade.", price: "From $1,329", affiliateUrl: "https://www.amazon.com/s?k=aeropilates+pro+xp+557+reformer&tag=pilatescollective-20" },
  { name: "Balanced Body Cadillac / Trapeze Table", description: "The single biggest line in a comprehensive studio fit-out after the reformers, and what most distinguishes a full apparatus room from a reformer class business. Needs ceiling height and permanent floor space.", price: "From $8,000", affiliateUrl: "https://www.amazon.com/s?k=balanced+body+cadillac+trapeze+table+pilates&tag=pilatescollective-20" },
  { name: "Balanced Body Wunda Chair", description: "The apparatus that carries the most teaching per square foot of any piece in the room. A chair opens up standing, seated and pressing work a reformer cannot reach, in roughly the footprint of an armchair.", price: "From $1,800", affiliateUrl: "https://www.amazon.com/s?k=balanced+body+wunda+chair+pilates&tag=pilatescollective-20" },
  { name: "Balanced Body Ladder Barrel", description: "Spinal extension and lateral work that nothing else in the room replicates, and the piece clients with desk-bound postures benefit from most. A comprehensive studio is not comprehensive without one.", price: "From $1,295", affiliateUrl: "https://www.amazon.com/s?k=balanced+body+ladder+barrel+pilates&tag=pilatescollective-20" },
];

const PRODUCTS = [
  { name: "Pilates Props Set (Ring, Bands, Ball)", description: "Props are the category where a November sale is most likely to be worth acting on, because they sell through open marketplaces with multiple sellers competing. They are also the purchase least likely to disappoint: a ring, a band and a ball genuinely expand what you can do on a mat. Buy a spare set of bands, since bands are the only real consumable here.", price: "From $35", affiliateUrl: "https://www.amazon.com/s?k=pilates+props+set+magic+circle+bands+ball&tag=pilatescollective-20" },
  { name: "Pilates Mat, 6mm or Thicker", description: "A mat is the most-used piece of equipment most practitioners own and the easiest to under-buy. Thickness and density matter more than brand: a 6mm mat that does not compress under the spine is the difference between finishing a session comfortable or sore. Worth watching in a sale because mats discount readily and last years.", price: "From $40", affiliateUrl: "https://www.amazon.com/s?k=pilates+mat+6mm+thick+non+slip&tag=pilatescollective-20" },
  { name: "Reformer Jumpboard", description: "If you already own a reformer, this is the highest-value addition available to it and a sensible thing to put on a November shortlist. Confirm the fit for your exact model before ordering: jumpboards mount to the footbar or frame and mountings are not universal across brands.", price: "From $199", affiliateUrl: "https://www.amazon.com/s?k=pilates+reformer+jumpboard&tag=pilatescollective-20" },
  { name: "Replacement Springs and Ropes", description: "An unglamorous thing to buy in a sale and one of the more useful. Springs and ropes lose tension long before they visibly fail, and a set that has quietly drifted changes every resistance setting you use. Stocking spares at a lower price is genuinely worth doing. Check compatibility with your model, since spring ends and rope lengths differ by brand.", price: "From $45", affiliateUrl: "https://www.amazon.com/s?k=pilates+reformer+replacement+springs+ropes&tag=pilatescollective-20" },
  { name: "Foam Roller and Massage Balls", description: "Recovery gear discounts reliably because it is a crowded marketplace category with little brand loyalty. A dense roller and a pair of massage balls cover most of what a recovery routine needs, and neither wears out. A reasonable default if you want to buy something useful in a sale without much research.", price: "From $25", affiliateUrl: "https://www.amazon.com/s?k=foam+roller+massage+balls+set&tag=pilatescollective-20" },
  { name: "Grip Socks, Multipack", description: "Required by most studios, easily forgotten, and a category where a multipack in a sale is straightforwardly better value than buying pairs through the year. Sizing runs small on many brands, so read the chart rather than ordering your shoe size.", price: "From $25", affiliateUrl: "https://www.amazon.com/s?k=pilates+grip+socks+multipack&tag=pilatescollective-20" },
];

function BaselineTable({ rows }: { rows: { item: string; tier: string; price: string }[] }) {
  return (
    <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", backgroundColor: "#ffffff" }}>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Montserrat', sans-serif", fontSize: "14px" }}>
          <thead>
            <tr style={{ backgroundColor: "#f6f3f2" }}>
              <th style={{ textAlign: "left", padding: "12px 16px", fontWeight: 600, color: "#1b1c1c", whiteSpace: "nowrap" }}>Model</th>
              <th style={{ textAlign: "left", padding: "12px 12px", fontWeight: 600, color: "#1b1c1c", whiteSpace: "nowrap" }}>Tier</th>
              <th style={{ textAlign: "right", padding: "12px 16px", fontWeight: 600, color: "#1b1c1c", whiteSpace: "nowrap" }}>List price</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.item} style={{ borderTop: "1px solid rgba(217,194,186,0.3)" }}>
                <td style={{ padding: "12px 16px", color: "#53433e", fontWeight: 300 }}>{r.item}</td>
                <td style={{ padding: "12px 12px", color: "#86736d", fontWeight: 300, whiteSpace: "nowrap" }}>{r.tier}</td>
                <td style={{ padding: "12px 16px", textAlign: "right", color: "#1b1c1c", whiteSpace: "nowrap" }}>{r.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function PilatesEquipmentBlackFridayGuidePage() {
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
              Pilates Equipment<br /><span style={{ color: "#8b4a31" }}>Black Friday Guide</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated 16 September 2026 · 10 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Black Friday falls on 27 November 2026. This page is published early on purpose, because the single most useful thing you can do about a November sale is know the ordinary price of everything on your shortlist before the sale starts. Below is what genuinely tends to move on price in this category, what almost never does, and the current list prices to measure any claim against.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-retail-activewear.png" alt="Pilates apparel and equipment displayed on retail shelving" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-14 mt-4 rounded-2xl p-7" style={{ backgroundColor: "#fff4f1", border: "1px solid rgba(139,74,49,0.15)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-3" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Live deal status</p>
              <p className="text-base leading-relaxed mb-3" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                <strong>As of 16 September 2026: no verified Black Friday pricing has been published yet.</strong> Nothing in this category has moved, because the promotions do not exist this far out.
              </p>
              <p className="text-base leading-relaxed mb-0" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                We are not going to print a predicted discount percentage. Anybody publishing one in September is guessing, and a guessed number is worse than no number because you might act on it. What this page gives you instead is the baseline: the current list prices, updated as we track them, so that when a deal does appear you can tell in ten seconds whether it is real. We will add confirmed reductions here as they land.
              </p>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Why Pilates equipment behaves oddly in a sale</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Most Black Friday advice assumes a product sold by many retailers competing on price. A good deal happens because sellers undercut each other. Pilates equipment splits into two halves, and only one of them works that way.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Props, mats, apparel, recovery gear and consumer-end machines sell through open marketplaces with multiple sellers and thin margins. This half behaves exactly like ordinary consumer goods in November: prices move, competition is real, and waiting a few weeks is often rewarded.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Studio-grade apparatus does not. Reformers, cadillacs and chairs from the established brands are largely sold direct by the manufacturer or through authorised dealers, which means nobody is competing to undercut anybody on the same machine. Any reduction is a decision the manufacturer makes, not a market outcome. That is why reformer discounts are less predictable, smaller, and more likely to arrive as a bundle than as a lower price.
              </p>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What moves, and what does not</h2>
              <div className="space-y-4">
                {[
                  { label: "Moves readily: props, mats, recovery gear, grip socks", body: "Crowded marketplace categories with several sellers per product and no real brand loyalty. If something here is on your list, November is a reasonable time to buy it. These are also the lowest-risk purchases to make on price alone, because the failure mode of a slightly worse foam roller is not much of a failure." },
                  { label: "Moves, with care: apparel", body: "Discounts are real and often substantial, but sizing is the risk rather than the price. Sale items frequently carry shorter return windows or final-sale terms, and leggings are the category people most need to exchange. Check the return policy before ordering two sizes." },
                  { label: "Moves sometimes: consumer-end reformers", body: "Machines at the sub-$1,000 end sell through general retailers and behave like consumer fitness equipment, so reductions do appear. Be careful what you are comparing: a lower price on a machine that was never rated for what you want to do with it is not a saving. Check the weight rating and carriage travel, not just the sticker." },
                  { label: "Rarely moves much: studio-grade reformers and apparatus", body: "Sold direct or through authorised dealers, so there is no price competition on the same unit. Where something happens it is usually a manufacturer promotion, a bundle adding a jumpboard or props, or clearance on a model being replaced. The last of those is worth watching, because a discontinued model is often the same machine at a real reduction." },
                  { label: "Does not apply: multi-unit studio orders", body: "If you are buying several machines, a negotiated commercial quote is a different and usually better mechanism than any seasonal promotion. Trade pricing on a six or ten machine order is where the money is, and it is available in March as well as November. Ask for a written quote with delivery, assembly and first service itemised." },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Reformer baseline prices</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                These are list prices as at September 2026. The Balanced Body and Align Pilates figures were checked against current dealer listings; the rest are the prices we track across our equipment reviews and are being re-checked. This table is the actual tool on this page: screenshot it, or write down the two or three models you care about, and compare any November claim against these figures rather than against a retailer&apos;s crossed-out number. Prices vary by country and dealer and they move, so confirm before buying.
              </p>
              <BaselineTable rows={REFORMER_BASELINE} />
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Apparatus baseline prices</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Chairs, barrels and cadillacs, on the same basis. Barrels and jumpboards are the items here most likely to see a genuine reduction, because they ship more easily and reach more retailers than a cadillac does.
              </p>
              <BaselineTable rows={APPARATUS_BASELINE} />
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Whether to wait</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                For props, apparel, recovery gear and consumer machines, waiting a few weeks in November is a reasonable bet if nothing is forcing your hand. The downside is small and the upside is real.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                For studio apparatus, waiting is a weaker proposition than it appears, and there are three specific reasons to buy when you are ready instead. Stock on particular models and upholstery colours thins out through late November, and a machine you cannot get is not a bargain. Lead times on direct orders lengthen in the same period, which matters if you have a studio opening date. And if you are buying more than one machine, the negotiated quote route will almost certainly beat the seasonal one.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The one case for genuinely holding out on a reformer is if you have identified a model at the end of its production run. Clearance on a superseded machine is where the real reductions in this category live, and the machine is usually unchanged in every way that matters to you. If you are still deciding which machine you want, our{" "}
                <Link href="/blog/best-home-pilates-reformer" style={{ color: "#8b4a31", textDecoration: "underline" }}>home reformer guide</Link>{" "}
                routes by constraint rather than by price, and the{" "}
                <Link href="/blog/pilates-reformer-dimensions-and-space-requirements" style={{ color: "#8b4a31", textDecoration: "underline" }}>dimensions guide</Link>{" "}
                will tell you whether it fits before you commit to a sale-window decision.
              </p>
            </div>

            <div className="mb-14 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Do these five things before November</h2>
              <ul className="space-y-3">
                {[
                  "Write down the current price of everything on your shortlist now. This is the whole game: a discount from an inflated reference price is the common tactic, and your own note from September defeats it.",
                  "Decide which machine or item you want before the sale, not during it. Sale pressure is designed to make you buy the thing that is discounted rather than the thing you needed.",
                  "For anything heavy, check whether shipping is included and what it costs. Freight can erase a reformer discount entirely.",
                  "Check the seller is the brand or an authorised dealer. Warranty support on apparatus bought from an unknown third party is frequently worth nothing.",
                  "Read the return window and any restocking fee on sale items, especially apparel, where sale terms are often shorter or final.",
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
                  { q: "When is Black Friday 2026?", a: "Black Friday falls on 27 November 2026, with Cyber Monday on 30 November. In practice the window is far longer than the name suggests: marketplace pricing on smaller equipment and apparel typically starts moving in the first half of November, and some manufacturers run their own promotions on a schedule that has nothing to do with the American calendar. Treat the date as the centre of a several-week period rather than a single day." },
                  { q: "Do Pilates reformers go on sale on Black Friday?", a: "Sometimes, but reformers behave differently from most products in a November sale, and it is worth understanding why before you wait. Studio-grade apparatus is largely sold direct by the manufacturer or through authorised dealers rather than on open marketplaces, which means there is no third-party seller competing on price. Where reductions do appear they tend to be manufacturer promotions, bundle offers that include a jumpboard or props rather than a lower machine price, or clearance on a model being replaced. The consumer end of the market, meaning the sub-$1,000 machines sold through general retailers, behaves much more like ordinary consumer electronics." },
                  { q: "Is it worth waiting until Black Friday to buy Pilates equipment?", a: "For props, apparel, recovery gear and consumer-end machines, waiting a few weeks in November is usually reasonable if you are not in a hurry. For studio-grade apparatus, waiting is a weaker bet: the discount is less predictable, stock on specific models can be thin by late November, and if you are fitting out a studio, a negotiated multi-unit quote from a commercial supplier is normally worth more than any seasonal promotion. If you need the equipment for a specific date, buy when you can confirm delivery rather than gambling on a sale." },
                  { q: "How do I tell whether a Black Friday deal is real?", a: "Know the ordinary price before the sale starts. That single step defeats almost every misleading claim, because the common tactic is not a fake discount but a genuine discount from an inflated reference price. Record the price of everything on your shortlist now, in the weeks before November, and compare against your own note rather than against the retailer's crossed-out figure. Then check three other things: that the seller is the brand or an authorised dealer rather than an unknown third party, that shipping on a heavy item is included, and what the return window and restocking terms are." },
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
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>The machines on the baseline table</h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The reformers worth watching in November, at the September list prices you should measure any claimed deal against. Check the warranty covers your intended use before ordering, and confirm the machine fits the room and the route into it.
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
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Worth putting on a November shortlist</h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                These are the categories that genuinely do move on price, which makes them the sensible things to watch rather than the expensive apparatus everybody writes about. Prices shown are ordinary list prices, not sale prices.
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
                <ArticleCard title="How Much Does a Pilates Reformer Cost?" excerpt="What you actually get at every price point, from $300 to $6,000." href="/blog/how-much-does-a-pilates-reformer-cost" category="Equipment" readTime="10 min read" date="June 2026" imageUrl="/pictures/stitch-reformer-sunlit-minimal.png" />
                <ArticleCard title="Best Home Pilates Reformer" excerpt="Start from your constraint, not the price list. Every home bracket compared." href="/blog/best-home-pilates-reformer" category="Equipment" readTime="12 min read" date="June 2026" imageUrl="/pictures/stitch-reformer-morning-light.png" />
                <ArticleCard title="Commercial vs Home Pilates Reformer" excerpt="Frame, weight rating, warranty and duty cycle: what separates the two tiers." href="/blog/commercial-vs-home-pilates-reformer" category="Equipment" readTime="11 min read" date="September 2026" imageUrl="/pictures/stitch-reformer-spring-detail.png" />
                <ArticleCard title="Best Pilates Christmas Gifts" excerpt="Gift picks by budget, from stocking fillers to the serious end." href="/blog/best-pilates-christmas-gifts" category="Equipment" readTime="9 min read" date="June 2026" imageUrl="/pictures/stitch-pilates-essentials-logbook.png" />
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
