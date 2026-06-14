import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "What to Pack in Your Pilates Studio Bag (2026) — Instructor-Approved List",
  description: "Everything that goes in a well-packed Pilates studio bag — from the non-negotiable grip socks to the insulated water bottle. What instructors carry, five days a week.",
  openGraph: {
    title: "What to Pack in Your Pilates Studio Bag (2026)",
    description: "The instructor-approved list of what actually belongs in your Pilates bag — and what you can leave at home.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/pilates-studio-bag-essentials",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-pilates-essentials-logbook.png", width: 1200, height: 630, alt: "Pilates Studio Bag Essentials — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "What to Pack in Your Pilates Studio Bag (2026)",
    description: "The instructor-approved packing list for your Pilates studio bag.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-pilates-essentials-logbook.png"],
  },
  keywords: ["pilates studio bag", "what to bring to pilates", "pilates bag essentials", "what to pack for pilates class", "pilates class bag", "reformer pilates what to bring", "pilates class essentials", "what do you need for pilates", "pilates studio bag 2026", "pilates beginner bag"],
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/pilates-studio-bag-essentials" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const ITEMS = [
  {
    rank: "01",
    name: "Pilates Grip Socks",
    price: "From $18",
    verdict: "The one non-negotiable",
    tag: "Essential",
    description:
      "Grip socks are required at virtually every reformer and mat Pilates studio — for hygiene, safety, and effective footwork. Most studios sell them at the desk at a markup. Buying your own ToeSox, Tavi Noir, or Shashi grip socks costs less per pair and gives you a better fit. The half-toe design (ToeSox) improves proprioception; full-toe designs (Tavi Noir) are more comfortable for wide feet. Pack two pairs if you practise more than twice a week.",
    affiliateUrl: "https://www.amazon.com/s?k=toesox+half+toe+pilates+grip+socks&tag=pilatescollective-20",
  },
  {
    rank: "02",
    name: "Insulated Water Bottle",
    price: "From $30",
    verdict: "Cold water, 50 minutes in",
    tag: "Practical",
    description:
      "Boutique studios run warm. A quality insulated bottle keeps water genuinely cold through an entire 50-minute reformer session — something a standard plastic bottle cannot do. The Hydro Flask Standard Mouth 21oz and the Stanley IceFlow are the two most popular studio options: both fit in a reformer side-slot and neither sweats condensation onto the carriage. Avoid anything with a loose lid or straw that can spill.",
    affiliateUrl: "https://www.amazon.com/s?k=insulated+water+bottle+21oz+gym+studio&tag=pilatescollective-20",
  },
  {
    rank: "03",
    name: "Microfibre Gym Towel",
    price: "From $12",
    verdict: "Small, fast-drying, essential",
    tag: "Practical",
    description:
      "A small microfibre towel serves two purposes: wiping down the reformer carriage at the end of class (most studios expect this) and wiping your hands during exercises where grip on the reformer loops matters. A 40cm x 80cm size fits easily in any bag without taking up much space. Microfibre dries significantly faster than cotton between sessions — important if you practise multiple times per week.",
    affiliateUrl: "https://www.amazon.com/s?k=microfibre+gym+towel+small+compact&tag=pilatescollective-20",
  },
  {
    rank: "04",
    name: "Change of Clothes",
    price: "—",
    verdict: "Bring something clean",
    tag: "Comfort",
    description:
      "Most practitioners shower at home after class, but a change of top and clean underwear makes a significant difference if you&apos;re going anywhere after. Pilates doesn&apos;t generate running-level sweat, but the close-contact nature of reformer work means your kit is in contact with the carriage and head rest for the full session. A lightweight tote or mesh bag keeps your clean clothes separate from your used kit inside your main bag.",
    affiliateUrl: "https://www.amazon.com/s?k=mesh+laundry+bag+small+gym&tag=pilatescollective-20",
  },
  {
    rank: "05",
    name: "The Bag Itself",
    price: "From $35",
    verdict: "Compact, structured, studio-appropriate",
    tag: "The Bag",
    description:
      "The ideal Pilates bag holds a rolled mat (if you&apos;re bringing your own), grip socks, a water bottle, a change of clothes, and a small towel — without being so large it&apos;s awkward on public transport or in a studio changing room. The Lululemon City Adventurer Backpack (22L) is the most-seen bag in boutique studios globally. For a more affordable option, the Dagne Dover Allyn Canvas Tote and the Baggu Duck Bag both fit the brief without the price tag.",
    affiliateUrl: "https://www.amazon.com/s?k=pilates+studio+bag+compact+tote+backpack&tag=pilatescollective-20",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://pilatescollectiveclub.com/blog/pilates-studio-bag-essentials/#article",
      "headline": "What to Pack in Your Pilates Studio Bag (2026)",
      "description": "Everything that goes in a well-packed Pilates studio bag — from the non-negotiable grip socks to the insulated water bottle.",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-pilates-essentials-logbook.png", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "@id": "https://pilatescollectiveclub.com/#organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "@id": "https://pilatescollectiveclub.com/#organization", "name": "Pilates Collective Club", "logo": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/pcc-logo.png" } },
      "datePublished": "2026-06-01",
      "dateModified": "2026-06-14",
      "url": "https://pilatescollectiveclub.com/blog/pilates-studio-bag-essentials",
      "mainEntityOfPage": "https://pilatescollectiveclub.com/blog/pilates-studio-bag-essentials",
      "articleSection": "Guide",
      "inLanguage": "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Pilates Studio Bag Essentials", "item": "https://pilatescollectiveclub.com/blog/pilates-studio-bag-essentials" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Do I need to bring a mat to Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "No — studios provide mats and all equipment. You only need to bring your own mat if you prefer a specific thickness or brand, or if you practise at home. Grip socks are the one item you genuinely need to supply yourself." } },
        { "@type": "Question", "name": "What should I not bring to Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "Leave jewellery at home — rings and bracelets scratch the reformer carriage and can catch on straps. Avoid strong perfume in a small studio. Don't bring a large gym bag that takes up an entire changing room bench. Food is unwelcome in most boutique studios." } },
        { "@type": "Question", "name": "Do Pilates studios provide grip socks?", "acceptedAnswer": { "@type": "Answer", "text": "Most studios sell grip socks at the front desk, typically for $18–$25 per pair. Buying your own in advance is cheaper and ensures a better fit — studio socks are usually one-size and rarely the best brands." } },
      ],
    },
  ],
};

export default function PilatesStudioBagEssentialsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Studio Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Essentials</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              What to Pack in Your<br /><span style={{ color: "#8b4a31" }}>Pilates Studio Bag (2026)</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated June 2026 · 6 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Here&apos;s exactly what goes in a well-packed Pilates studio bag — from instructors who carry one five times a week. The short answer: it&apos;s a lot less than you think. Studios provide all equipment. You need grip socks, water, a towel, your kit, and a bag to put it all in. This guide covers each item, the specific products worth buying, and what you can safely leave at home.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-pilates-essentials-logbook.png" alt="Pilates studio essentials — logbook, pen, and accessories" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            {/* What studios provide */}
            <div className="mb-12 mt-4 rounded-2xl p-8" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What the studio provides (leave these at home)</h2>
              <ul className="space-y-2">
                {[
                  "Reformer, Cadillac, Wunda Chair, and all apparatus",
                  "Reformer loops, springs, and straps",
                  "Mats (though you can bring your own)",
                  "Magic circles, foam rollers, and props",
                  "Changing rooms and showers (most boutique studios)",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    <span style={{ color: "#8b4a31" }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Items */}
            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Bag Essentials · Instructor-Approved</p>
              <div className="space-y-10">
                {ITEMS.map((p) => (
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

            {/* The complete bag checklist */}
            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-2xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>The complete checklist</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {[
                  { item: "Grip socks", note: "Non-negotiable" },
                  { item: "Insulated water bottle", note: "Stays cold all class" },
                  { item: "Small microfibre towel", note: "For wiping down carriage" },
                  { item: "Change of top", note: "For after class" },
                  { item: "Clean underwear", note: "If showering at studio" },
                  { item: "The bag itself", note: "22L max for most studios" },
                  { item: "Phone / earphones", note: "Leave in locker during class" },
                  { item: "Card / payment", note: "Some studios are cashless" },
                ].map(({ item, note }) => (
                  <div key={item} className="flex gap-3 items-start">
                    <span className="text-sm font-semibold mt-0.5" style={{ color: "#8b4a31" }}>□</span>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{item}</p>
                      <p className="text-xs" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "Do I need to bring a mat to Pilates?", a: "No — studios provide mats and all equipment. You only need to bring your own mat if you prefer a specific thickness or brand, or if you practise at home. Grip socks are the one item you genuinely need to supply yourself." },
                  { q: "What should I not bring to Pilates?", a: "Leave jewellery at home — rings and bracelets scratch the reformer carriage and can catch on straps. Avoid strong perfume in a small studio. Don't bring a large gym bag that takes up an entire changing room bench. Food is unwelcome in most boutique studios." },
                  { q: "Do Pilates studios provide grip socks?", a: "Most studios sell grip socks at the front desk, typically for $18–$25 per pair. Buying your own in advance is cheaper and ensures a better fit — studio socks are usually one-size and rarely the best brands." },
                ].map((item) => (
                  <div key={item.q} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.q}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="Best Pilates Grip Socks (2026)" excerpt="The grip socks tested across reformer, mat, and barre — from ToeSox to Tavi Noir." href="/blog/best-pilates-grip-socks" category="Equipment" readTime="7 min read" date="May 2026" imageUrl="/pictures/stitch-grip-socks-footbar.png" />
                <ArticleCard title="What to Wear to Pilates" excerpt="The complete guide to choosing the right clothes for studio and reformer classes." href="/blog/what-to-wear-to-pilates" category="Guide" readTime="6 min read" date="May 2026" imageUrl="/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg" />
              </div>
            </div>

          </div>
        </section>

        <CTASection title="Find the best Pilates studios near you" subtitle="Our city guides cover the top reformer studios in 50+ cities worldwide." />
      </main>
      <Footer />
    </>
  );
}
