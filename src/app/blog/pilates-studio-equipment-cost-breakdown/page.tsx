import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Pilates Studio Equipment Cost Breakdown (2026): 3 Real Budgets",
  description: "Itemised equipment budgets for a 3, 6 and 10 reformer Pilates studio, built from current list prices, with the costs most first-time owners leave out.",
  keywords: ["pilates studio equipment cost", "pilates studio startup cost", "cost to equip a pilates studio", "pilates reformer bulk pricing", "commercial pilates equipment price", "pilates studio budget", "how much does pilates equipment cost", "pilates studio equipment list"],
  openGraph: {
    title: "Pilates Studio Equipment Cost Breakdown (2026)",
    description: "Itemised budgets for a 3, 6 and 10 reformer studio, built from current list prices.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/pilates-studio-equipment-cost-breakdown",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-reformers-aerial-row.png", width: 1200, height: 630, alt: "Pilates Studio Equipment Cost Breakdown — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilates Studio Equipment Cost Breakdown (2026)",
    description: "Three itemised studio budgets, and the costs owners forget.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-reformers-aerial-row.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/pilates-studio-equipment-cost-breakdown" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Pilates Studio Equipment Cost Breakdown (2026): 3 Real Budgets",
      "description": "Itemised equipment budgets for a 3, 6 and 10 reformer Pilates studio, built from current list prices, plus the costs first-time owners typically omit.",
      "url": "https://pilatescollectiveclub.com/blog/pilates-studio-equipment-cost-breakdown",
      "datePublished": "2026-09-16",
      "dateModified": "2026-09-16",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-reformers-aerial-row.png", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/pilates-studio-equipment-cost-breakdown" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Pilates Studio Equipment Cost Breakdown", "item": "https://pilatescollectiveclub.com/blog/pilates-studio-equipment-cost-breakdown" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "How much does it cost to equip a Pilates studio?", "acceptedAnswer": { "@type": "Answer", "text": "On current list prices, a three-reformer private studio with basic apparatus and props comes to roughly $11,400. A six-reformer group studio with jumpboards, a chair, barrels and props comes to roughly $27,400. A ten-reformer comprehensive studio with a cadillac, two chairs, a ladder barrel and full props comes to roughly $59,700. Those are equipment-only figures at single-unit list price. They exclude shipping, tax, assembly, flooring and mirrors, and they are before any trade or multi-unit pricing your supplier may offer." } },
        { "@type": "Question", "name": "Do Pilates equipment suppliers give discounts on bulk orders?", "acceptedAnswer": { "@type": "Answer", "text": "Commercial suppliers generally price multi-machine orders differently from single units, and studio or trade accounts are standard practice across the major brands. The size of any reduction is negotiated rather than published, so the only reliable approach is to request a written quote for your full order, including delivery, assembly and first service, rather than adding up website prices. Ask specifically what the quote covers, because a headline machine price that excludes assembly is not comparable to one that includes it." } },
        { "@type": "Question", "name": "What is the cheapest way to open a reformer studio?", "acceptedAnswer": { "@type": "Answer", "text": "Fewer machines of the correct grade, rather than more machines of the wrong grade. A three-reformer room running privates and duets at a high hourly rate needs a fraction of the capital of a group studio and carries a fraction of the rent, and it can be expanded once you have a waiting list. Buying home-rated reformers to fill a larger room is the false economy: the warranty on a domestic machine typically does not cover commercial use, so the saving disappears the first time a frame or a spring fails." } },
        { "@type": "Question", "name": "How long does Pilates studio equipment last?", "acceptedAnswer": { "@type": "Answer", "text": "A commercial-grade reformer frame is built to last well over a decade in studio use, which is why the per-year cost of good apparatus is lower than the sticker price suggests. What wears out is the consumable layer: springs, ropes, straps and upholstery. Budget for those on a replacement schedule rather than waiting for failure, because a machine out of action is a class you cannot teach. Ordering spare springs and ropes with the original purchase is cheaper than ordering them one at a time later." } },
      ],
    },
  ],
};

const smallStudio = [
  { item: "Align Pilates C8 Pro Reformer", qty: "3", unit: "$2,750", line: "$8,250" },
  { item: "Balanced Body Wunda Chair", qty: "1", unit: "$1,800", line: "$1,800" },
  { item: "Balanced Body Spine Corrector", qty: "1", unit: "$395", line: "$395" },
  { item: "Balanced Body Arc Barrel", qty: "1", unit: "$245", line: "$245" },
  { item: "Props: rings, bands, balls, small weights", qty: "set", unit: "~$300", line: "~$300" },
  { item: "Mirrors and prop storage", qty: "set", unit: "~$400", line: "~$400" },
];

const mediumStudio = [
  { item: "Align Pilates A8 Pro Reformer", qty: "6", unit: "$3,700", line: "$22,200" },
  { item: "Reformer jumpboard", qty: "6", unit: "~$199", line: "~$1,194" },
  { item: "Merrithew Split-Pedal Stability Chair", qty: "1", unit: "$1,999", line: "$1,999" },
  { item: "Merrithew Arc Barrel", qty: "2", unit: "$265", line: "$530" },
  { item: "Props in class-sized multiples", qty: "set", unit: "~$600", line: "~$600" },
  { item: "Mirrors, storage and sound system", qty: "set", unit: "~$900", line: "~$900" },
];

const largeStudio = [
  { item: "Balanced Body Allegro 2 Reformer", qty: "10", unit: "$3,995", line: "$39,950" },
  { item: "Balanced Body Cadillac", qty: "1", unit: "$8,000", line: "$8,000" },
  { item: "Balanced Body Jump Board", qty: "10", unit: "$295", line: "$2,950" },
  { item: "Balanced Body Wunda Chair", qty: "2", unit: "$1,800", line: "$3,600" },
  { item: "Balanced Body Ladder Barrel", qty: "1", unit: "$1,295", line: "$1,295" },
  { item: "Balanced Body Arc Barrel", qty: "2", unit: "$245", line: "$490" },
  { item: "Balanced Body Spine Corrector", qty: "1", unit: "$395", line: "$395" },
  { item: "Props in class-sized multiples", qty: "set", unit: "~$1,000", line: "~$1,000" },
  { item: "Mirrors, storage and sound system", qty: "set", unit: "~$2,000", line: "~$2,000" },
];

const PRODUCTS = [
  { name: "Pilates Props Set in Studio Multiples", description: "Rings, bands, balls and small weights are the line every budget underestimates, because a studio needs one per client rather than one per studio. Order in class-sized multiples from the start. Bands are the genuine consumable here: they lose tension and eventually snap, so treat them as a recurring cost rather than a purchase.", price: "From $40", affiliateUrl: "https://www.amazon.com/s?k=pilates+props+set+magic+circle+resistance+bands+ball&tag=pilatescollective-20" },
  { name: "Arc Barrel", description: "The cheapest apparatus in the room relative to how much teaching it carries. An arc barrel opens up spinal extension and supported abdominal work that a reformer cannot replicate, and at a couple of hundred dollars it is the first thing to add once the reformers are in. Two is usually enough for a group studio.", price: "From $245", affiliateUrl: "https://www.amazon.com/s?k=pilates+arc+barrel+spine+corrector&tag=pilatescollective-20" },
  { name: "Reformer Jumpboard", description: "Turns a reformer into cardio equipment for a fraction of the cost of buying anything else, which is why jumpboard classes are on most studio timetables. Budget one per machine if you intend to run jumpboard as a class format, because a shared set of three across six reformers does not work on a timetable.", price: "From $199", affiliateUrl: "https://www.amazon.com/s?k=pilates+reformer+jumpboard&tag=pilatescollective-20" },
  { name: "Replacement Springs and Reformer Ropes", description: "The line that separates a working budget from an optimistic one. Springs and ropes are wear items with a finite life, and a machine waiting on a part is a class you cannot sell. Order spares with the original purchase rather than one at a time later. Check compatibility with your exact model before ordering, since spring ends and rope lengths are not interchangeable across brands.", price: "From $45", affiliateUrl: "https://www.amazon.com/s?k=pilates+reformer+replacement+springs+ropes&tag=pilatescollective-20" },
  { name: "Studio Flooring Tiles or Rubber Matting", description: "Apparatus needs a level, hard, non-flexing floor, and most commercial units do not arrive with one. Interlocking rubber tiles are the usual answer because they install without a contractor, protect the existing floor for your lease exit, and cut the carriage noise that makes a room of six reformers hard to teach over.", price: "From $80", affiliateUrl: "https://www.amazon.com/s?k=rubber+gym+flooring+tiles+interlocking&tag=pilatescollective-20" },
  { name: "Equipment Disinfectant Safe for Vinyl", description: "Upholstery is the part clients judge and the part cheap cleaner destroys. Alcohol-heavy and bleach-based sprays dry reformer upholstery until it cracks, which turns a consumable into a re-upholstery bill. Buy a formula rated for vinyl and leatherette, and budget it monthly.", price: "From $30", affiliateUrl: "https://www.amazon.com/s?k=gym+equipment+disinfectant+spray+vinyl+safe&tag=pilatescollective-20" },
];

function BudgetTable({ rows, total, note }: { rows: { item: string; qty: string; unit: string; line: string }[]; total: string; note: string }) {
  return (
    <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", backgroundColor: "#ffffff" }}>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Montserrat', sans-serif", fontSize: "14px" }}>
          <thead>
            <tr style={{ backgroundColor: "#f6f3f2" }}>
              <th style={{ textAlign: "left", padding: "12px 16px", fontWeight: 600, color: "#1b1c1c", whiteSpace: "nowrap" }}>Item</th>
              <th style={{ textAlign: "center", padding: "12px 12px", fontWeight: 600, color: "#1b1c1c", whiteSpace: "nowrap" }}>Qty</th>
              <th style={{ textAlign: "right", padding: "12px 12px", fontWeight: 600, color: "#1b1c1c", whiteSpace: "nowrap" }}>Unit</th>
              <th style={{ textAlign: "right", padding: "12px 16px", fontWeight: 600, color: "#1b1c1c", whiteSpace: "nowrap" }}>Line</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.item} style={{ borderTop: "1px solid rgba(217,194,186,0.3)" }}>
                <td style={{ padding: "12px 16px", color: "#53433e", fontWeight: 300 }}>{r.item}</td>
                <td style={{ padding: "12px 12px", textAlign: "center", color: "#53433e", fontWeight: 300 }}>{r.qty}</td>
                <td style={{ padding: "12px 12px", textAlign: "right", color: "#53433e", fontWeight: 300, whiteSpace: "nowrap" }}>{r.unit}</td>
                <td style={{ padding: "12px 16px", textAlign: "right", color: "#1b1c1c", whiteSpace: "nowrap" }}>{r.line}</td>
              </tr>
            ))}
            <tr style={{ borderTop: "2px solid rgba(139,74,49,0.3)", backgroundColor: "#fff4f1" }}>
              <td colSpan={3} style={{ padding: "14px 16px", fontWeight: 600, color: "#1b1c1c" }}>Equipment total</td>
              <td style={{ padding: "14px 16px", textAlign: "right", fontWeight: 600, color: "#8b4a31", whiteSpace: "nowrap" }}>{total}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style={{ padding: "14px 16px", margin: 0, fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 300, color: "#86736d", lineHeight: 1.7, borderTop: "1px solid rgba(217,194,186,0.3)" }}>{note}</p>
    </div>
  );
}

export default function PilatesStudioEquipmentCostBreakdownPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Studio Business</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Pilates Studio Equipment<br /><span style={{ color: "#8b4a31" }}>Cost Breakdown</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 12 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Three itemised budgets below, at three studio sizes, built from the list prices we publish across our equipment reviews. Every line is a real product at a real price so you can check the arithmetic and swap any row for the brand you prefer. What these tables give you is the shape of the number and the items people forget, which is what you need before you ask a supplier for a quote.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-reformers-aerial-row.png" alt="A row of Pilates reformers in a studio seen from above" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-14 mt-4 rounded-2xl p-7" style={{ backgroundColor: "#f6f3f2" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-3" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>How to read these numbers</p>
              <p className="text-base leading-relaxed mb-3" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Reformer prices below were checked against current dealer listings in September 2026. Figures marked with a tilde are indicative allowances for props and fit-out rather than a specific product, and chair, barrel and cadillac prices are the list prices we track across our equipment reviews. Apparatus pricing moves and varies by country and dealer, so treat all of it as the basis for a conversation rather than a quote.
              </p>
              <p className="text-base leading-relaxed mb-0" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                These are also single-unit prices. Commercial suppliers price multi-machine orders differently and studio accounts are normal practice, so a real quote for six or ten reformers is a negotiation, not a sum of website prices. Ask for the quote in writing with delivery, assembly and first service itemised, because a machine price that excludes assembly is not comparable to one that includes it.
              </p>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Small studio: 3 reformers, privates and duets</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The lowest-capital way into apparatus Pilates. Three machines in a small room, revenue from privates and duets at a high hourly rate, and a chair and barrel to give the teaching somewhere to go. The C8 Pro is the least expensive genuinely studio-rated reformer we have been able to verify pricing on, which is what keeps this tier reachable without dropping to home-grade frames.
              </p>
              <BudgetTable
                rows={smallStudio}
                total="~$11,390"
                note="Excludes shipping, tax, assembly, flooring and any building work. A studio at this size can often be fitted out without a contractor, which is a genuine part of its cost advantage."
              />
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Medium studio: 6 reformers, group classes</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The standard group model, and the size most new studios open at. Six matching machines, a jumpboard per machine so you can run jumpboard as a timetabled format rather than an occasional novelty, and enough props for a full class to use them at once. The A8 Pro is priced here because it is the widest-carriage machine in the studio range and its pricing is currently verifiable across several dealers.
              </p>
              <BudgetTable
                rows={mediumStudio}
                total="~$27,423"
                note="Excludes shipping, tax, assembly and flooring. Buy the machines matching: mixed brands in one row force the teacher to re-cue every station and make a group class materially harder to run."
              />
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Large studio: 10 reformers, full apparatus</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                A comprehensive room: ten reformers on the group timetable plus the full apparatus complement for privates, teacher training and rehabilitation work. The cadillac is the single biggest line after the reformers and the one that most distinguishes a comprehensive studio from a reformer class business.
              </p>
              <BudgetTable
                rows={largeStudio}
                total="~$59,680"
                note="Excludes shipping, tax, assembly, flooring and building work. At this order size the difference between list price and a negotiated commercial quote is the most valuable conversation of your whole fit-out."
              />
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What these tables leave out</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The totals above are equipment only. Every line below is a real cost of opening that sits outside the apparatus budget, and between them they are frequently larger than the machines. Price them locally: rent and trades vary far too much between markets for a published figure to be worth anything.
              </p>
              <div className="space-y-4">
                {[
                  { label: "Shipping and assembly", body: "Apparatus is heavy and bulky, and freight on a multi-machine order is a real line rather than a rounding error. Some suppliers include assembly and calibration in a studio order and some charge separately. Ask which, and confirm that delivery includes getting the machines into the room rather than onto the pavement." },
                  { label: "Flooring", body: "Apparatus needs a level, hard, non-flexing surface, and most commercial units need something done to the floor. Interlocking rubber tiles are the low-cost route and also cut carriage noise. A poured or fitted floor is a contractor job." },
                  { label: "Mirrors and lighting", body: "Both do more for how a studio reads than their cost suggests, and both are usually the tenant's responsibility. Large mirrors are heavy and awkward to install; panel systems are easier to get through a standard doorway." },
                  { label: "Reception, changing and storage fit-out", body: "Benches, hooks, lockers, a desk, a card reader. Individually small, collectively a few thousand, and entirely invisible in an equipment quote." },
                  { label: "Booking and payment software", body: "A recurring monthly cost from your first day, and one that is difficult to change later once your client base and class history live inside it. Worth choosing carefully rather than quickly." },
                  { label: "Consumables and replacement parts", body: "Springs, ropes, straps, bands, cleaning supplies and laundry. Recurring, predictable, and the line that most first-year budgets omit entirely. Order spare springs and ropes with the original machines." },
                  { label: "Insurance and licences", body: "Professional and public liability, property cover for the apparatus at replacement value, business interruption, and music licensing. See our guide to ", link: { href: "/blog/how-to-open-a-pilates-studio", text: "opening a Pilates studio" }, bodyAfter: " for the full list." },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                      {item.body}
                      {item.link && (
                        <Link href={item.link.href} style={{ color: "#8b4a31", textDecoration: "underline" }}>{item.link.text}</Link>
                      )}
                      {item.bodyAfter}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Where to spend and where not to</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The reformers are not the place to economise, and the reason is warranty rather than snobbery. Manufacturer warranties typically distinguish domestic from commercial use, so a home-rated machine put on a studio timetable is usually out of cover from the first paid class. The saving on the purchase is borrowed against the first frame or spring failure. Our{" "}
                <Link href="/blog/commercial-vs-home-pilates-reformer" style={{ color: "#8b4a31", textDecoration: "underline" }}>commercial versus home comparison</Link>{" "}
                sets out what actually differs in the build.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Spend on matching machines, on commercial rating, and on spare springs and ropes. Those three decisions are difficult and expensive to reverse. Economise instead on the fit-out layer: mirrors, storage, flooring tiles, sound and reception furniture are all replaceable later out of revenue, and nobody has ever left a studio because the prop shelf was plain.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The other genuine economy is buying fewer machines rather than cheaper ones. Three commercial reformers running privates will out-earn six home-grade machines in a room you cannot fill, and they leave you the capital to survive the months before the timetable fills. Machines are easier to add than a lease is to shrink.
              </p>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "How much does it cost to equip a Pilates studio?", a: "On current list prices, a three-reformer private studio with basic apparatus and props comes to roughly $11,400. A six-reformer group studio with jumpboards, a chair, barrels and props comes to roughly $27,400. A ten-reformer comprehensive studio with a cadillac, two chairs, a ladder barrel and full props comes to roughly $59,700. Those are equipment-only figures at single-unit list price. They exclude shipping, tax, assembly, flooring and mirrors, and they are before any trade or multi-unit pricing your supplier may offer." },
                  { q: "Do Pilates equipment suppliers give discounts on bulk orders?", a: "Commercial suppliers generally price multi-machine orders differently from single units, and studio or trade accounts are standard practice across the major brands. The size of any reduction is negotiated rather than published, so the only reliable approach is to request a written quote for your full order, including delivery, assembly and first service, rather than adding up website prices. Ask specifically what the quote covers, because a headline machine price that excludes assembly is not comparable to one that includes it." },
                  { q: "What is the cheapest way to open a reformer studio?", a: "Fewer machines of the correct grade, rather than more machines of the wrong grade. A three-reformer room running privates and duets at a high hourly rate needs a fraction of the capital of a group studio and carries a fraction of the rent, and it can be expanded once you have a waiting list. Buying home-rated reformers to fill a larger room is the false economy: the warranty on a domestic machine typically does not cover commercial use, so the saving disappears the first time a frame or a spring fails." },
                  { q: "How long does Pilates studio equipment last?", a: "A commercial-grade reformer frame is built to last well over a decade in studio use, which is why the per-year cost of good apparatus is lower than the sticker price suggests. What wears out is the consumable layer: springs, ropes, straps and upholstery. Budget for those on a replacement schedule rather than waiting for failure, because a machine out of action is a class you cannot teach. Ordering spare springs and ropes with the original purchase is cheaper than ordering them one at a time later." },
                ].map((item) => (
                  <div key={item.q} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.q}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment */}
            <div className="mt-16 pt-12" style={{ borderTop: "1px solid rgba(217,194,186,0.4)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-2" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Equipment</p>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>The lines you can order today</h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Reformers and cadillacs come from commercial suppliers with commercial warranties, and they should. The items below are the rest of the budget, where the product is the same whoever sells it and the only question is quantity.
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
                <ArticleCard title="How to Open a Pilates Studio" excerpt="Premises, ceiling height, licensing, insurance and the numbers that decide whether a studio works." href="/blog/how-to-open-a-pilates-studio" category="Guide" readTime="15 min read" date="September 2026" imageUrl="/pictures/stitch-studio-entryway.png" />
                <ArticleCard title="Commercial vs Home Pilates Reformer" excerpt="Frame, weight rating, warranty and duty cycle: what separates the two tiers." href="/blog/commercial-vs-home-pilates-reformer" category="Equipment" readTime="11 min read" date="September 2026" imageUrl="/pictures/stitch-reformer-spring-detail.png" />
                <ArticleCard title="Best Studio Pilates Reformers" excerpt="Commercial-grade machines reviewed on durability, spring range and long-term value." href="/blog/best-studio-pilates-reformers" category="Equipment" readTime="12 min read" date="June 2026" imageUrl="/pictures/stitch-reformer-row-studio.png" />
                <ArticleCard title="How Much Does a Pilates Reformer Cost?" excerpt="What you actually get at every price point, from $300 to $6,000." href="/blog/how-much-does-a-pilates-reformer-cost" category="Equipment" readTime="10 min read" date="June 2026" imageUrl="/pictures/stitch-reformer-sunlit-minimal.png" />
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
