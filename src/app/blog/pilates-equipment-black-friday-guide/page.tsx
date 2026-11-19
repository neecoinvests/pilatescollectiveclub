import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import QuickPicks from "@/components/QuickPicks";
import TopPick from "@/components/TopPick";
import AffiliateNote from "@/components/AffiliateNote";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import ProductCard from "@/components/ProductCard";
import { jsonLdHtml, productItemList } from "@/lib/schema";
import { BF_GUIDES } from "@/lib/blackFriday";

export const metadata: Metadata = {
  title: "Pilates Equipment Black Friday Guide (2026): Sale Picks",
  description: "Which Pilates equipment actually moves on price in November, which never does, and the list prices to measure any Black Friday claim against.",
  keywords: ["pilates black friday", "pilates equipment black friday", "pilates reformer black friday", "black friday pilates deals 2026", "cyber monday pilates", "pilates reformer sale", "when to buy a pilates reformer", "pilates equipment discount"],
  openGraph: {
    title: "Pilates Equipment Black Friday Guide (2026)",
    description: "Black Friday 2026: which Pilates equipment discounts, what never does, and the list prices to judge any deal against.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/pilates-equipment-black-friday-guide",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-retail-activewear.png", width: 1200, height: 630, alt: "Pilates Equipment Black Friday Guide: Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilates Equipment Black Friday Guide (2026)",
    description: "Black Friday 2026: what Pilates equipment actually discounts, and the prices to measure a deal against.",
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
      "dateModified": "2026-11-19",
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
        { "@type": "Question", "name": "When is Black Friday 2026?", "acceptedAnswer": { "@type": "Answer", "text": "Black Friday falls on November 27, 2026, with Cyber Monday on November 30, and Amazon's Black Friday deals run from November 19 to November 30. In practice the window is far longer than the name suggests: marketplace pricing on smaller equipment and apparel typically starts moving in the first half of November, and some manufacturers run their own promotions on a schedule that has nothing to do with the American calendar. Treat the date as the center of a several-week period rather than a single day." } },
        { "@type": "Question", "name": "Do Pilates reformers go on sale on Black Friday?", "acceptedAnswer": { "@type": "Answer", "text": "Sometimes, but reformers behave differently from most products in a November sale, and it is worth understanding why before you wait. Studio-grade apparatus is largely sold direct by the manufacturer or through authorized dealers rather than on open marketplaces, which means there is no third-party seller competing on price. Where reductions do appear they tend to be manufacturer promotions, bundle offers that include a jumpboard or props rather than a lower machine price, or clearance on a model being replaced. The consumer end of the market, meaning the sub-$1,000 machines sold through general retailers, behaves much more like ordinary consumer electronics." } },
        { "@type": "Question", "name": "Is it worth waiting until Black Friday to buy Pilates equipment?", "acceptedAnswer": { "@type": "Answer", "text": "For props, apparel, recovery gear and consumer-end machines, waiting a few weeks in November is usually reasonable if you are not in a hurry. For studio-grade apparatus, waiting is a weaker bet: the discount is less predictable, stock on specific models can be thin by late November, and if you are fitting out a studio, a negotiated multi-unit quote from a commercial supplier is normally worth more than any seasonal promotion. If you need the equipment for a specific date, buy when you can confirm delivery rather than gambling on a sale." } },
        { "@type": "Question", "name": "How do I tell whether a Black Friday deal is real?", "acceptedAnswer": { "@type": "Answer", "text": "Know the ordinary price before the sale starts. That single step defeats almost every misleading claim, because the common tactic is not a fake discount but a genuine discount from an inflated reference price. Record the price of everything on your shortlist now, in the weeks before November, and compare against your own note rather than against the retailer's crossed-out figure. Then check three other things: that the seller is the brand or an authorized dealer rather than an unknown third party, that shipping on a heavy item is included, and what the return window and restocking terms are." } },
      ],
    },
  ],
};

const REFORMER_BASELINE = [
  { item: "WINDFOOT Foldable Reformer w/ Jump Board", tier: "Budget spring (generic brand)", price: "$295.99", now: "$289.99" },
  { item: "DWKWE Foldable Reformer, 88\"", tier: "Budget spring (generic brand)", price: "$284.99", now: "$339.99" },
  { item: "PAETA 86\" Foldable Reformer (piano-wire springs)", tier: "Budget spring (generic brand)", price: "$439.99", now: "$398.99 · Black Friday Deal, 20% off" },
  { item: "PAETA Wooden Foldable Reformer w/ Sitting Box", tier: "Budget spring (generic brand)", price: "$699.98", now: "$664.98 · Black Friday Deal, 26% off" },
  { item: "AeroPilates Pro XP 557", tier: "Consumer (cord-based)", price: "$1,329.99", now: "$1,329.99" },
  { item: "Balanced Body Metro IQ", tier: "Studio standard", price: "$2,330", now: "$2,524" },
  { item: "PersonalHour Janet La Force Plus", tier: "Studio standard", price: "$2,555", now: "$2,555" },
  { item: "Align-Pilates C8-PRO", tier: "Studio standard", price: "$2,750", now: "$2,750" },
  { item: "Merrithew At Home SPX", tier: "Compact", price: "$3,349", now: "$3,349" },
  { item: "Balanced Body Allegro Stretch", tier: "Studio standard", price: "$3,710", now: "$3,710" },
  { item: "BASI Systems Reformer", tier: "Premium", price: "~$3,900", now: "Not on Amazon" },
  { item: "Gratz Universal Aluminum", tier: "Classical", price: "$4,590", now: "Not on Amazon" },
  { item: "Balanced Body Studio Reformer", tier: "Studio standard", price: "$4,700", now: "$4,700" },
  { item: "Gratz Maple Classic", tier: "Classical", price: "$5,295", now: "Not on Amazon" },
  { item: "Merrithew Rehab V2 Max Plus", tier: "Premium", price: "$8,199", now: "Unavailable on Amazon" },
];

const APPARATUS_BASELINE = [
  { item: "Balanced Body Pilates Arc (Spine Corrector)", tier: "Barrel", price: "$189.99", now: "$189.99" },
  { item: "Balanced Body Padded Jumpboard", tier: "Attachment", price: "$280", now: "$280" },
  { item: "Balanced Body EXO Pilates Chair (single-pedal)", tier: "Chair", price: "$1,255", now: "$1,255" },
  { item: "Merrithew Split-Pedal Stability Chair", tier: "Chair", price: "$1,999", now: "Not on Amazon" },
  { item: "Balanced Body Ladder Barrel", tier: "Barrel", price: "$2,195", now: "$2,195" },
  { item: "Align-Pilates Cadillac Frame (reformer conversion)", tier: "Cadillac", price: "$3,500", now: "Not on Amazon" },
  { item: "Balanced Body Trapeze Table / Cadillac", tier: "Cadillac", price: "$5,030", now: "$5,030" },
];

const REFORMERS = [
  { name: "PAETA 86\" Foldable Reformer (Piano Wire Springs)", description: "Genuine piano-wire spring resistance, a 500 lb weight capacity, and folds for storage: a real spring reformer under $500. Like the other budget entries here, PAETA is a generic brand without an established reputation among instructors, so treat the low price as buying real springs plus brand-risk, not as a discount on an established machine.", price: "$398.99 (List $499.99)", affiliateUrl: "https://www.amazon.com/dp/B0DFXQX3XV?tag=pilatescollective-20" },
];

const PRODUCTS = [
  { name: "TriggerPoint GRID 2.0 Foam Roller", description: "Recovery gear discounts reliably because it is a crowded marketplace category with little brand loyalty. A dense roller covers most of what a recovery routine needs and never wears out. This listing is the roller only: massage balls are sold separately if you want both.", price: "$63.74 (List $74.99)", affiliateUrl: "https://www.amazon.com/dp/B006GUC9KC?tag=pilatescollective-20" },
  { name: "Muezna Pilates Grip Socks, 6-Pair", description: "Required by most studios, easily forgotten, and a category where a multipack in a sale is straightforwardly better value than buying pairs through the year. Sizing runs small on many brands, so read the chart rather than ordering your shoe size.", price: "$6.79 (List $7.99)", affiliateUrl: "https://www.amazon.com/dp/B0DQ53GSP5?tag=pilatescollective-20" },
];

function BaselineTable({ rows }: { rows: { item: string; tier: string; price: string; now: string }[] }) {
  return (
    <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", backgroundColor: "#ffffff" }}>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Montserrat', sans-serif", fontSize: "14px" }}>
          <thead>
            <tr style={{ backgroundColor: "#f6f3f2" }}>
              <th style={{ textAlign: "left", padding: "12px 16px", fontWeight: 600, color: "#1b1c1c", whiteSpace: "nowrap" }}>Model</th>
              <th style={{ textAlign: "left", padding: "12px 12px", fontWeight: 600, color: "#1b1c1c", whiteSpace: "nowrap" }}>Tier</th>
              <th style={{ textAlign: "right", padding: "12px 12px", fontWeight: 600, color: "#1b1c1c", whiteSpace: "nowrap" }}>September</th>
              <th style={{ textAlign: "right", padding: "12px 16px", fontWeight: 600, color: "#1b1c1c", whiteSpace: "nowrap" }}>November 19</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.item} style={{ borderTop: "1px solid rgba(217,194,186,0.3)" }}>
                <td style={{ padding: "12px 16px", color: "#53433e", fontWeight: 300 }}>{r.item}</td>
                <td style={{ padding: "12px 12px", color: "#86736d", fontWeight: 300, whiteSpace: "nowrap" }}>{r.tier}</td>
                <td style={{ padding: "12px 12px", textAlign: "right", color: "#86736d", whiteSpace: "nowrap" }}>{r.price}</td>
                <td style={{ padding: "12px 16px", textAlign: "right", color: /Deal/.test(r.now) ? "#8b4a31" : "#1b1c1c", fontWeight: /Deal/.test(r.now) ? 600 : 400 }}>{r.now}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const QP_NOTES = ["Black Friday Deal · recovery gear that discounts reliably", "Black Friday Deal · grip socks required by most studios"];

const ITEM_LIST = productItemList("Quick picks: Pilates Equipment Black Friday Guide (2026): Sale Picks", (PRODUCTS.map((pr, i) => ({ name: pr.name, price: pr.price, url: pr.affiliateUrl, note: QP_NOTES[i] }))).filter((p) => !p.url.includes("/s?k=")).map((p) => ({ name: p.name, description: p.note, price: p.price, url: p.url })));

export default function PilatesEquipmentBlackFridayGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml({ "@context": "https://schema.org", ...ITEM_LIST }) }} />
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
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated November 19, 2026 · 10 min read</p>
            <TopPick name={PRODUCTS[0].name} price={PRODUCTS[0].price} note={QP_NOTES[0]} url={PRODUCTS[0].affiliateUrl} />
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Black Friday falls on November 27, 2026. This page was published early on purpose, because the single most useful thing you can do about a November sale is know the ordinary price of everything on your shortlist before the sale starts. Below is what genuinely tends to move on price in this category, what almost never does, and the current list prices to measure any claim against.
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

            <QuickPicks className="mb-6 mt-4" picks={PRODUCTS.map((pr, i) => ({ name: pr.name, price: pr.price, url: pr.affiliateUrl, note: QP_NOTES[i] }))} />
            <AffiliateNote />
            <div className="mb-12 mt-4 rounded-2xl p-6" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.5)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Black Friday 2026 deal guides</p>
              <div className="flex flex-wrap gap-2">
                {BF_GUIDES.filter((g) => g.href !== "/blog/pilates-equipment-black-friday-guide").map((g) => (
                  <Link key={g.href} href={g.href} className="text-xs font-semibold px-3 py-2 rounded-full" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.6)", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif", textDecoration: "none" }}>{g.title} →</Link>
                ))}
              </div>
            </div>

            <div className="mb-14 mt-4 rounded-2xl p-7" style={{ backgroundColor: "#fff4f1", border: "1px solid rgba(139,74,49,0.15)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-3" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Live deal status</p>
              <p className="text-base leading-relaxed mb-3" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                <strong>Update, November 19, 2026: Amazon&apos;s Black Friday deals are live, through November 30.</strong> We re-checked every Amazon listing on this page. What moved is exactly what this guide predicted: the prop kit, grip socks, foam roller and two budget PAETA reformers are discounted, the PAETA machines by 20% and 26% as official Black Friday Deals. What did not move: every studio-grade machine from Balanced Body, Merrithew, Align and PersonalHour. Two prices went up instead: the Balanced Body Metro IQ (from $2,330 to $2,524) and the DWKWE foldable (from $284.99 to $339.99).
              </p>
              <p className="text-base leading-relaxed mb-0" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                We still do not print predicted discounts. The tables below show the September price next to Amazon&apos;s price on November 19, so you can see in ten seconds whether a claimed saving is real. Savings quoted on this page are Amazon&apos;s own figures against the list or recent price it shows.
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
                Studio-grade apparatus does not. Reformers, cadillacs and chairs from the established brands are largely sold direct by the manufacturer or through authorized dealers, which means nobody is competing to undercut anybody on the same machine. Any reduction is a decision the manufacturer makes, not a market outcome. That is why reformer discounts are less predictable, smaller, and more likely to arrive as a bundle than as a lower price.
              </p>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What moves, and what does not</h2>
              <div className="space-y-4">
                {[
                  { label: "Moves readily: props, mats, recovery gear, grip socks", body: "Crowded marketplace categories with several sellers per product and no real brand loyalty. If something here is on your list, November is a reasonable time to buy it. These are also the lowest-risk purchases to make on price alone, because the failure mode of a slightly worse foam roller is not much of a failure." },
                  { label: "Moves, with care: apparel", body: "Discounts are real and often substantial, but sizing is the risk rather than the price. Sale items frequently carry shorter return windows or final-sale terms, and leggings are the category people most need to exchange. Check the return policy before ordering two sizes." },
                  { label: "Moves sometimes: consumer-end reformers", body: "Machines at the sub-$1,000 end sell through general retailers and behave like consumer fitness equipment, so reductions do appear. This tier now genuinely splits in two: cord-based machines like the AeroPilates Pro XP 557, and a newer wave of budget, generic-brand folding reformers (WINDFOOT, DWKWE, PAETA) that use real spring resistance rather than cords, from $295.99 to $699.98. The springs are real; what you're giving up is brand track record, not resistance type: these are generic/dropship sellers with no certification recognition among instructors and unclear warranty support. Be careful what you are comparing: a lower price on a machine that was never rated for what you want to do with it is not a saving. Check the weight rating and carriage travel, not just the sticker." },
                  { label: "Rarely moves much: studio-grade reformers and apparatus", body: "Sold direct or through authorized dealers, so there is no price competition on the same unit. Where something happens it is usually a manufacturer promotion, a bundle adding a jumpboard or props, or clearance on a model being replaced. The last of those is worth watching, because a discontinued model is often the same machine at a real reduction." },
                  { label: "Does not apply: multi-unit studio orders", body: "If you are buying several machines, a negotiated commercial quote is a different and usually better mechanism than any seasonal promotion. Trade pricing on a six or ten machine order is where the money is, and it is available in March as well as November. Ask for a written quote with delivery, assembly and first service itemized." },
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
                The September column is the list price we recorded before any sale; the November 19 column is Amazon&apos;s price that day, with any Black Friday Deal marked. Models marked Not on Amazon are sold direct or through dealers. This table is the actual tool on this page: screenshot it, or write down the two or three models you care about, and compare any November claim against these figures rather than against a retailer&apos;s crossed-out number. Prices vary by country and dealer and they move, so confirm before buying.
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
                For studio apparatus, waiting is a weaker proposition than it appears, and there are three specific reasons to buy when you are ready instead. Stock on particular models and upholstery colors thins out through late November, and a machine you cannot get is not a bargain. Lead times on direct orders lengthen in the same period, which matters if you have a studio opening date. And if you are buying more than one machine, the negotiated quote route will almost certainly beat the seasonal one.
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
                  "Check the seller is the brand or an authorized dealer. Warranty support on apparatus bought from an unknown third party is frequently worth nothing.",
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
                  { q: "When is Black Friday 2026?", a: "Black Friday falls on November 27, 2026, with Cyber Monday on November 30, and Amazon's Black Friday deals run from November 19 to November 30. In practice the window is far longer than the name suggests: marketplace pricing on smaller equipment and apparel typically starts moving in the first half of November, and some manufacturers run their own promotions on a schedule that has nothing to do with the American calendar. Treat the date as the center of a several-week period rather than a single day." },
                  { q: "Do Pilates reformers go on sale on Black Friday?", a: "Sometimes, but reformers behave differently from most products in a November sale, and it is worth understanding why before you wait. Studio-grade apparatus is largely sold direct by the manufacturer or through authorized dealers rather than on open marketplaces, which means there is no third-party seller competing on price. Where reductions do appear they tend to be manufacturer promotions, bundle offers that include a jumpboard or props rather than a lower machine price, or clearance on a model being replaced. The consumer end of the market, meaning the sub-$1,000 machines sold through general retailers, behaves much more like ordinary consumer electronics." },
                  { q: "Is it worth waiting until Black Friday to buy Pilates equipment?", a: "For props, apparel, recovery gear and consumer-end machines, waiting a few weeks in November is usually reasonable if you are not in a hurry. For studio-grade apparatus, waiting is a weaker bet: the discount is less predictable, stock on specific models can be thin by late November, and if you are fitting out a studio, a negotiated multi-unit quote from a commercial supplier is normally worth more than any seasonal promotion. If you need the equipment for a specific date, buy when you can confirm delivery rather than gambling on a sale." },
                  { q: "How do I tell whether a Black Friday deal is real?", a: "Know the ordinary price before the sale starts. That single step defeats almost every misleading claim, because the common tactic is not a fake discount but a genuine discount from an inflated reference price. Record the price of everything on your shortlist now, in the weeks before November, and compare against your own note rather than against the retailer's crossed-out figure. Then check three other things: that the seller is the brand or an authorized dealer rather than an unknown third party, that shipping on a heavy item is included, and what the return window and restocking terms are." },
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
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>The reformer on a Black Friday Deal</h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Of the reformers in the table above, this is the one on an Amazon Black Friday Deal on November 19, 2026 that we recommend (the PAETA wooden model is in our reformer deals guide). Check the warranty covers your intended use before ordering, and confirm the machine fits the room and the route into it.
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
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Equipment on a Black Friday Deal</h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Recovery gear and grip socks are categories that genuinely move on price, and these two are on an Amazon Black Friday Deal through November 30. Prices shown are Amazon&apos;s on November 19, 2026, with the saving Amazon reports.
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
