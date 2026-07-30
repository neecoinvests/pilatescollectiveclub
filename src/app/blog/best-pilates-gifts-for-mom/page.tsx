import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Gifts for Mom (2026) | Pilates Collective Club",
  description: "The best pilates gifts for your mom — thoughtful, quality picks she'll actually use every class. Manduka mats, Lululemon leggings, foam rollers, and more.",
  keywords: [
    "best pilates gifts for mom",
    "pilates gift ideas for mother",
    "pilates Christmas gift for mom",
    "pilates birthday gift mom",
    "gift for mom who does pilates",
    "pilates Mother's Day gift",
    "what to get your mom for pilates",
    "pilates presents for mothers 2026",
  ],
  openGraph: {
    title: "Best Pilates Gifts for Mom (2026)",
    description: "Thoughtful pilates gifts for your mom — quality picks she'll love and use every class.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-gifts-for-mom",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-studio-reception.png", width: 1200, height: 630, alt: "Best Pilates Gifts for Mom 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Gifts for Mom (2026)",
    description: "The pilates gifts your mom will actually reach for — every class, every time.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-studio-reception.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-pilates-gifts-for-mom" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Manduka PRO Yoga & Pilates Mat",
    price: "$120",
    verdict: "The Heirloom Gift",
    description: "If she's been rolling out a basic studio mat or an entry-level mat she bought years ago, the Manduka PRO is the upgrade she hasn't given herself. It is 6mm thick for full joint cushioning, made from a high-density closed-cell PVC that never absorbs moisture or odour, and backed by a lifetime guarantee — Manduka replaces it free if it ever wears out. Non-slip on both sides, heavy enough to stay anchored, and available in a range of refined colours. Professional instructors buy this mat for themselves. It is the most enduring, practical gift in pilates.",
    affiliateUrl: "https://www.amazon.com/s?k=manduka+pro+yoga+pilates+mat+6mm+lifetime&tag=pilatescollective-20",
  },
  {
    rank: "02",
    name: "Lululemon Align High-Rise Legging 25\"",
    price: "$98",
    verdict: "The Legging She'll Wear to Every Class",
    description: "The Lululemon Align has become the default pilates legging because nothing else feels like it at the price. The Nulu fabric is second-skin light — genuinely soft in a way that synthetic fabrics rarely achieve — and fully opaque in every colour. The high waist doesn't roll or dig. The 25-inch inseam is the ideal length for reformer footwork. If she's been wearing older leggings or anything that pulls down during practice, this is the gift that changes her morning routine. Available in over 30 colours — choose one she's mentioned or stick to black.",
    affiliateUrl: "https://www.amazon.com/s?k=lululemon+align+high+rise+legging+25+inch+women&tag=pilatescollective-20",
  },
  {
    rank: "03",
    name: "TriggerPoint GRID Foam Roller",
    price: "$36",
    verdict: "Best Recovery Gift",
    description: "The TriggerPoint GRID is the foam roller that physical therapists actually recommend — not a generic cylinder from a sporting goods store. Its multi-density exterior (three distinct surface zones that replicate a therapist's fingers, knuckles, and palm) works the thoracic spine, IT band, calves, and hip flexors that accumulate tension in pilates practice. The hollow core supports up to 500 lbs and will never compress over years of use. She'll reach for it before and after every class. At $36 it is one of the best-value recovery gifts that exists.",
    affiliateUrl: "https://www.amazon.com/s?k=triggerpoint+grid+foam+roller+original+13+inch&tag=pilatescollective-20",
  },
  {
    rank: "04",
    name: "Alo Yoga Muse Sweatshirt",
    price: "$89",
    verdict: "Best Studio-to-Street Layer",
    description: "Alo's Muse Sweatshirt has become a staple in the changing rooms of the best pilates studios — it's the layer that instructors and regulars reach for the moment class ends. Made from Alo's Accolade fleece, it's midweight, cropped, and draped beautifully over studio leggings. The relaxed fit and understated branding mean it works from studio to coffee without looking like gym wear. Available in Alo's signature palette of bone, espresso, and dusty slate. A gift that arrives with an immediate use.",
    affiliateUrl: "https://www.amazon.com/s?k=alo+yoga+muse+sweatshirt+women+fleece&tag=pilatescollective-20",
  },
  {
    rank: "05",
    name: "Lululemon Everywhere Belt Bag Large 2L",
    price: "$48",
    verdict: "The Bag Everyone Has",
    description: "The Lululemon belt bag is not a trend — it has become a permanent fixture in pilates studio culture, hanging on lockers and clipped to tote bags across the country. The 2L large version fits a phone, keys, cards, lip balm, and a snack. Water-repellent ripstop fabric, a quick-access front zip, and an adjustable strap that works worn crossbody or around the waist. At $48 it is a considered gift at an accessible price — practical, recognisable, and used every single day.",
    affiliateUrl: "https://www.amazon.com/s?k=lululemon+everywhere+belt+bag+large+2L+women&tag=pilatescollective-20",
  },
  {
    rank: "06",
    name: "Theraband Professional Resistance Band Set",
    price: "$26",
    verdict: "Most Useful Under-$30 Gift",
    description: "Theraband is the clinical standard — the brand used in hospital physiotherapy and prescribed by sports medicine physicians. The professional set includes six colour-coded resistance levels, pre-cut to exercise length, covering everything from gentle warm-up to serious conditioning. For a practitioner building a home practice or doing supplementary work between studio sessions, this set becomes a daily tool. At $26 it is the highest-value pilates gift per dollar on this list — practical, durable, and genuinely useful every week.",
    affiliateUrl: "https://www.amazon.com/s?k=theraband+professional+resistance+band+set+pilates+women&tag=pilatescollective-20",
  },
];

const CRITERIA = [
  {
    heading: "Think about where she is in her practice",
    body: "A mom who has been doing pilates for years already has basics — she doesn't need another mat or resistance bands. She's ready for the upgrade: better leggings, a professional mat, or a quality recovery tool. A beginner mom needs fundamentals first.",
  },
  {
    heading: "Prioritise quality over novelty",
    body: "The best pilates gifts for moms are items she would buy for herself if she was being extravagant. A Manduka PRO mat or Lululemon Align legging says 'I know what you love' in a way that a novelty gift never can. Quality is the message.",
  },
  {
    heading: "Consider her daily routine",
    body: "Does she go to a studio? A belt bag and grip socks are used every class. Does she practice at home? A mat and resistance bands matter more. If she trains hard, recovery tools (foam roller, resistance bands) are the most appreciated gifts.",
  },
  {
    heading: "Clothes require knowing her size",
    body: "If you're confident about her size, leggings and sweatshirts are outstanding gifts. If not, opt for accessories and equipment — mats, bags, rollers, and bands work regardless of size and carry the same sense of occasion as clothing.",
  },
];

const FAQ = [
  {
    q: "What is the best pilates gift for mom?",
    a: "The Manduka PRO mat ($120) is the best pilates gift for a mom who practices regularly — it is lifetime-guaranteed, used by professional instructors, and is a meaningful upgrade from any basic mat. For a more accessible gift, the Lululemon Align Legging ($98) or TriggerPoint GRID Roller ($36) are excellent choices at their respective price points.",
  },
  {
    q: "What do you get a mom who loves pilates?",
    a: "The most appreciated pilates gifts for moms are quality leggings (Lululemon Align), a professional mat (Manduka PRO), a foam roller (TriggerPoint GRID), a studio bag (Lululemon Belt Bag), and resistance bands (Theraband). These are everyday-use items that meaningfully improve her practice rather than decorating a shelf.",
  },
  {
    q: "Is the Manduka PRO mat worth the price as a gift?",
    a: "Yes — the Manduka PRO at $120 is worth every dollar as a gift for a mom who practices regularly. It comes with a lifetime guarantee (Manduka replaces it free if it ever wears out), the closed-cell surface never absorbs sweat or odour, and it is the mat that professional instructors choose for themselves. It will outlast any cheaper mat by years.",
  },
  {
    q: "What pilates gift is good for Mother's Day?",
    a: "The Lululemon Align Legging ($98) is ideal for Mother's Day — it arrives feeling personal and considered, it's used at every class, and the wide colour range means you can choose something she's mentioned. The TriggerPoint GRID Roller ($36) is the best under-$50 Mother's Day pilates gift. Both are available on Amazon with reliable fast shipping.",
  },
];

const RELATED = [
  { title: "Best Pilates Gifts for Your Girlfriend", excerpt: "Lululemon, Alo, Manduka — the picks she'll actually use.", href: "/blog/best-pilates-gifts-for-girlfriend", category: "Guide", readTime: "9 min", imageUrl: "/pictures/stitch-retail-activewear.png" },
  { title: "Best Luxury Pilates Gifts", excerpt: "Investment-grade gifts for the serious practitioner.", href: "/blog/best-luxury-pilates-gifts", category: "Guide", readTime: "9 min", imageUrl: "/pictures/stitch-studio-bench-towels.png" },
  { title: "Best Pilates Gifts Under $100", excerpt: "Quality picks that feel premium without the premium price.", href: "/blog/best-pilates-gifts-under-100", category: "Guide", readTime: "8 min", imageUrl: "/pictures/stitch-studio-shelf-props.png" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Gifts for Mom (2026)",
      "description": "The best pilates gifts for your mom — thoughtful, quality picks she'll actually use every class.",
      "url": "https://pilatescollectiveclub.com/blog/best-pilates-gifts-for-mom",
      "image": "https://pilatescollectiveclub.com/pictures/stitch-studio-reception.png",
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "datePublished": "2026-07-30",
      "dateModified": "2026-07-30",
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Gifts for Mom",
      "numberOfItems": 6,
      "itemListElement": PRODUCTS.map((p, i) => ({ "@type": "ListItem", "position": i + 1, "name": p.name, "url": p.affiliateUrl })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Pilates Gifts for Mom", "item": "https://pilatescollectiveclub.com/blog/best-pilates-gifts-for-mom" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": FAQ.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <section className="pt-32 pb-16 px-6 pcc-page-header" style={{ backgroundColor: "#fcf9f8" }}>
        <div className="max-w-3xl mx-auto">
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8b4a31" }}>Guide</span>
            <span style={{ width: "32px", height: "1px", backgroundColor: "#c5a882", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "10px", color: "#9a9490", letterSpacing: "0.1em" }}>9 min read</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 400, color: "#1a1714", lineHeight: 1.15, marginBottom: "20px" }}>
            Best Pilates Gifts for Mom
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", color: "#6b6560", lineHeight: 1.8, marginBottom: "28px" }}>
            If your mom does pilates, she has a routine she's built around it — and the right gift fits right into that routine. Not a gesture, not a spa voucher: the mat she's been meaning to upgrade, the leggings she wears until they pill, the foam roller she's borrowed from the studio. This guide covers the six gifts that land every time for a pilates-practising mom, chosen for quality she'll notice and practicality she'll appreciate every single class.
          </p>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "#9a9490", letterSpacing: "0.08em" }}>✓ All products verified</span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "#9a9490", letterSpacing: "0.08em" }}>✓ Amazon links confirmed</span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "#9a9490", letterSpacing: "0.08em" }}>✓ Updated 2026</span>
          </div>
        </div>
      </section>
      <section className="px-6" style={{ backgroundColor: "#fcf9f8" }}>
        <div className="max-w-3xl mx-auto" style={{ position: "relative", height: "420px" }}>
          <Image src="/pictures/stitch-studio-reception.png" alt="Best Pilates Gifts for Mom" fill style={{ objectFit: "cover" }} />
        </div>
      </section>
      <section className="px-6 py-20 pcc-content-section" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-3xl mx-auto">

          {/* Quick picks table */}
          <div style={{ marginBottom: "56px", border: "1px solid #ede9e3", overflow: "hidden" }}>
            <div style={{ padding: "16px 24px", backgroundColor: "#faf8f5", borderBottom: "1px solid #ede9e3" }}>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8b4a31", margin: 0 }}>Quick Picks — At a Glance</p>
            </div>
            {PRODUCTS.map((p, i) => (
              <div key={p.rank} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "14px 24px", borderTop: i === 0 ? "none" : "1px solid #ede9e3", backgroundColor: "#ffffff", flexWrap: "wrap" }}>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "12px", color: "#c5a882", minWidth: "28px", flexShrink: 0 }}>{p.rank}</span>
                <div style={{ flex: 1, minWidth: "140px" }}>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "13px", fontWeight: 600, color: "#1a1714", margin: 0, lineHeight: 1.3 }}>{p.name}</p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "#8b4a31", margin: "2px 0 0" }}>{p.verdict}</p>
                </div>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "12px", color: "#9a9490", whiteSpace: "nowrap" }}>{p.price}</span>
                <a href={p.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow" style={{ fontFamily: "var(--font-sans)", fontSize: "9px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", backgroundColor: "#0a0a0a", padding: "8px 14px", textDecoration: "none", whiteSpace: "nowrap", flexShrink: 0 }}>Buy →</a>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "52px" }}>
            {PRODUCTS.map((p) => (
              <div key={p.rank} style={{ borderTop: "1px solid #ede9e3", paddingTop: "40px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", marginBottom: "6px", flexWrap: "wrap" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "16px" }}>
                    <span style={{ fontFamily: "var(--font-serif)", fontSize: "13px", color: "#c5a882", minWidth: "24px" }}>{p.rank}</span>
                    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.35rem", fontWeight: 400, color: "#1a1714", margin: 0 }}>{p.name}</h2>
                  </div>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "12px", color: "#c5a882", whiteSpace: "nowrap" }}>{p.price}</span>
                </div>
                <div style={{ paddingLeft: "40px" }}>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "9px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8b4a31", display: "block", marginBottom: "12px" }}>{p.verdict}</span>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", color: "#4a4540", lineHeight: 1.85, marginBottom: "20px" }}>{p.description}</p>
                  <a href={p.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow" style={{ display: "inline-block", fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#ffffff", backgroundColor: "#0a0a0a", padding: "12px 24px", textDecoration: "none" }}>
                    Shop on Amazon →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* How to choose */}
          <div style={{ marginTop: "72px", padding: "40px", backgroundColor: "#faf8f5", borderLeft: "3px solid #c5a882" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontWeight: 400, color: "#1a1714", marginBottom: "28px", marginTop: 0 }}>How to choose the right pilates gift for your mom</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px" }}>
              {CRITERIA.map((c) => (
                <div key={c.heading} style={{ backgroundColor: "#ffffff", padding: "20px", border: "1px solid #ede9e3" }}>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", color: "#1a1714", marginBottom: "8px", marginTop: 0 }}>{c.heading}</p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "#6b6560", lineHeight: 1.75, margin: 0 }}>{c.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div style={{ marginTop: "72px" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", fontWeight: 400, color: "#1a1714", marginBottom: "32px" }}>Frequently Asked Questions</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {FAQ.map((item) => (
                <div key={item.q} style={{ padding: "24px 28px", backgroundColor: "#faf8f5", border: "1px solid #ede9e3" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem", fontWeight: 400, color: "#1a1714", marginBottom: "10px", marginTop: 0 }}>{item.q}</p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "#4a4540", lineHeight: 1.8, margin: 0 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          <p style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "#9a9490", lineHeight: 1.7, marginTop: "64px", paddingTop: "24px", borderTop: "1px solid #ede9e3" }}>
            Pilates Collective Club participates in the Amazon Associates programme. Purchases through our links earn us a small commission at no additional cost to you. All recommendations are independently chosen.
          </p>
        </div>
      </section>
      <section className="px-6 pb-20 pcc-content-section" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-3xl mx-auto">
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8b4a31", marginBottom: "28px" }}>More Gift Guides</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "24px" }}>
            {RELATED.map((a) => <ArticleCard key={a.href} title={a.title} excerpt={a.excerpt} href={a.href} category={a.category} readTime={a.readTime} imageUrl={a.imageUrl} />)}
          </div>
        </div>
      </section>
      <CTASection title="Find a Pilates Studio Near You" subtitle="Discover the best reformer studios in your city." />
      <Footer />
    </>
  );
}
