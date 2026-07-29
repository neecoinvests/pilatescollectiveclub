import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Gifts for Your Girlfriend (2026) | Pilates Collective Club",
  description: "The best pilates gifts for your girlfriend — from Lululemon leggings and Manduka mats to luxury accessories she'll actually use every class. All verified, all shoppable.",
  keywords: [
    "best pilates gifts for girlfriend",
    "pilates gift ideas for her",
    "pilates Christmas gift girlfriend",
    "birthday gift for pilates lover",
    "pilates gift guide women",
    "what to buy a pilates girl",
    "pilates presents girlfriend 2026",
    "thoughtful pilates gift ideas",
  ],
  openGraph: {
    title: "Best Pilates Gifts for Your Girlfriend (2026)",
    description: "Lululemon, Alo, Manduka, and more — the pilates gifts she'll love and actually use.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-gifts-for-girlfriend",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-retail-activewear.png", width: 1200, height: 630, alt: "Best Pilates Gifts for Girlfriend 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Gifts for Your Girlfriend (2026)",
    description: "The pilates gifts she'll genuinely love — leggings, mats, accessories and more.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-retail-activewear.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-pilates-gifts-for-girlfriend" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Lululemon Align High-Rise Legging 25\"",
    price: "$98",
    verdict: "The Gold Standard Gift",
    description: "If she does pilates, she either owns these or wants them. The Align is Lululemon's signature pilates legging — made from their proprietary Nulu fabric, which is so light and soft it genuinely disappears during practice. The 25-inch length is the most popular for reformer work. High-waisted with zero waistband roll, fully opaque in every colour, and available in around 30 shades. If you're unsure of her size, go up one — the Align runs slightly small and exchanges are seamless at any Lululemon store. This is the gift that lands every time.",
    affiliateUrl: "https://www.amazon.com/s?k=lululemon+align+high+rise+legging+25+inch+women&tag=pilatescollective-20",
  },
  {
    rank: "02",
    name: "Alo Yoga Airlift 7/8 Legging",
    price: "$114",
    verdict: "The Luxury Upgrade",
    description: "Alo's Airlift is the legging that has taken over reformer studios from New York to Los Angeles. The Airlift fabric delivers precise, sculpting compression that looks incredible and moves even better. The wide waistband stays put through every footbar press, teaser, and long-stretch. Available in Alo's signature neutral palette — bone, espresso, midnight — these are the leggings she'll wear from class to brunch without changing. A genuinely impressive gift that signals you understand what she cares about.",
    affiliateUrl: "https://www.amazon.com/s?k=alo+yoga+airlift+legging+women&tag=pilatescollective-20",
  },
  {
    rank: "03",
    name: "Manduka PRO Yoga & Pilates Mat",
    price: "$120",
    verdict: "Best Mat Gift",
    description: "The Manduka PRO is the mat that professional pilates instructors buy for themselves. It is 6mm thick for joint support, made from a high-density closed-cell PVC that resists moisture and never absorbs sweat, and carries a lifetime guarantee — Manduka will replace it free if it ever wears out. The non-slip surface grips even during dynamic rolling and footwork. It weighs 7.5 lbs, so it stays put. If she's been practicing on a cheap studio mat, this will transform her home practice. An heirloom-grade gift.",
    affiliateUrl: "https://www.amazon.com/s?k=manduka+pro+yoga+mat+6mm+women&tag=pilatescollective-20",
  },
  {
    rank: "04",
    name: "Lululemon Everywhere Belt Bag Large 2L",
    price: "$48",
    verdict: "Best Pilates Bag Gift",
    description: "The Lululemon belt bag has become the unofficial pilates studio accessory — nearly every practitioner has one clipped to their bag or hung on the studio hook. The large 2L version fits her phone, keys, cards, lip balm, and a snack. It's made from a water-repellent ripstop fabric, has a quick-access front zip, and comes in a wide range of seasonal colours. At $48 it's a thoughtful gift at a very reasonable price point — and she will use it every single day.",
    affiliateUrl: "https://www.amazon.com/s?k=lululemon+everywhere+belt+bag+large+2l&tag=pilatescollective-20",
  },
  {
    rank: "05",
    name: "ToeSox Half-Toe Grip Socks",
    price: "$18",
    verdict: "Essential Studio Accessory",
    description: "Studios require grip socks — no exceptions. ToeSox are the brand that most instructors and practitioners choose when they're spending their own money. The half-toe design exposes the toes for footbar work and gives full proprioceptive feedback on the carriage. The Bellarina style in particular has become a cult favourite in pilates circles. Available in multi-packs in every colour. These make an excellent stocking stuffer or add-on gift that she'll genuinely appreciate.",
    affiliateUrl: "https://www.amazon.com/s?k=toesox+half+toe+grip+socks+pilates+women&tag=pilatescollective-20",
  },
  {
    rank: "06",
    name: "Theraband Professional Resistance Band Set",
    price: "$26",
    verdict: "Best Training Accessory",
    description: "Theraband is the clinical standard in physical therapy and Pilates training — the brand that actual physiotherapists prescribe and the bands most certified Pilates instructors keep in their kit. The professional set includes six resistance levels from yellow (light) to black (extra-heavy) in latex latex-free options. Perfect for at-home pilates practice, pre-class warm-up, and post-class stretching. At $26, this is the highest-value-per-dollar gift on this list — she'll use these for years.",
    affiliateUrl: "https://www.amazon.com/s?k=theraband+professional+resistance+band+set+pilates&tag=pilatescollective-20",
  },
];

const RELATED = [
  { title: "Best Luxury Pilates Gifts", excerpt: "Investment-grade gifts for the serious practitioner.", href: "/blog/best-luxury-pilates-gifts", category: "Guide", readTime: "8 min", imageUrl: "/pictures/stitch-studio-bench-towels.png" },
  { title: "Best Pilates Gifts Under $100", excerpt: "Top-quality pilates gifts that won't break the bank.", href: "/blog/best-pilates-gifts-under-100", category: "Guide", readTime: "7 min", imageUrl: "/pictures/stitch-studio-shelf-props.png" },
  { title: "Best Pilates Leggings", excerpt: "Every top legging reviewed and ranked for studio performance.", href: "/blog/best-pilates-leggings", category: "Clothing", readTime: "10 min", imageUrl: "/pictures/mathilde-langevin-aBJ3A-2LJyU-unsplash.jpg" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Gifts for Your Girlfriend (2026)",
      "description": "The best pilates gifts for your girlfriend — from Lululemon leggings and Manduka mats to luxury accessories she'll actually use every class.",
      "url": "https://pilatescollectiveclub.com/blog/best-pilates-gifts-for-girlfriend",
      "image": "https://pilatescollectiveclub.com/pictures/stitch-retail-activewear.png",
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "datePublished": "2026-07-29",
      "dateModified": "2026-07-29",
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Gifts for Girlfriend",
      "numberOfItems": 6,
      "itemListElement": PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": p.name,
        "url": p.affiliateUrl,
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Pilates Gifts for Girlfriend", "item": "https://pilatescollectiveclub.com/blog/best-pilates-gifts-for-girlfriend" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is the best pilates gift for a girlfriend?", "acceptedAnswer": { "@type": "Answer", "text": "The Lululemon Align Legging ($98) is the most universally loved pilates gift for women. If she practices pilates and doesn't already own a pair, this is the gift she's quietly wanted. They're the gold standard for comfort and performance in studio pilates." } },
        { "@type": "Question", "name": "What do pilates girls want as gifts?", "acceptedAnswer": { "@type": "Answer", "text": "Pilates practitioners consistently want quality leggings (Lululemon Align, Alo Airlift), a professional mat (Manduka PRO), grip socks (ToeSox), a studio bag, and resistance bands. These are items used every class that she'll genuinely appreciate." } },
        { "@type": "Question", "name": "How much should I spend on a pilates gift?", "acceptedAnswer": { "@type": "Answer", "text": "Meaningful pilates gifts start at $18 (grip socks) and scale to $120+ (Manduka PRO mat). For a girlfriend, $50–$100 is a thoughtful budget — it covers quality leggings, a studio bag, or a premium mat." } },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 pcc-page-header" style={{ backgroundColor: "#fcf9f8" }}>
        <div className="max-w-3xl mx-auto">
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8b4a31" }}>Guide</span>
            <span style={{ width: "32px", height: "1px", backgroundColor: "#c5a882", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "10px", color: "#9a9490", letterSpacing: "0.1em" }}>8 min read</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 400, color: "#1a1714", lineHeight: 1.15, marginBottom: "20px" }}>
            Best Pilates Gifts<br />for Your Girlfriend
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", color: "#6b6560", lineHeight: 1.8, marginBottom: "28px" }}>
            If she does pilates, she has opinions about her gear — even if she's never said so out loud. The right gift isn't a candle or a journal. It's the leggings she's been adding to her cart for three months, the mat she's been eyeing at the studio, or the bag that every instructor seems to have. This guide is built around what the pilates community actually uses and loves.
          </p>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "#9a9490", letterSpacing: "0.08em" }}>✓ All products verified</span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "#9a9490", letterSpacing: "0.08em" }}>✓ Amazon links confirmed</span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "#9a9490", letterSpacing: "0.08em" }}>✓ Updated 2026</span>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6" style={{ backgroundColor: "#fcf9f8" }}>
        <div className="max-w-3xl mx-auto" style={{ position: "relative", height: "420px", marginBottom: "0" }}>
          <Image src="/pictures/stitch-retail-activewear.png" alt="Best Pilates Gifts for Girlfriend" fill style={{ objectFit: "cover" }} />
        </div>
      </section>

      {/* Products */}
      <section className="px-6 py-20 pcc-content-section" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-3xl mx-auto">
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
                  <a
                    href={p.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    style={{ display: "inline-block", fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#ffffff", backgroundColor: "#0a0a0a", padding: "12px 24px", textDecoration: "none", transition: "background-color 0.2s" }}
                  >
                    Shop on Amazon →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Buying guide */}
          <div style={{ marginTop: "72px", padding: "40px", backgroundColor: "#faf8f5", borderLeft: "3px solid #c5a882" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontWeight: 400, color: "#1a1714", marginBottom: "20px", marginTop: 0 }}>How to pick the right pilates gift</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                { q: "What level is she?", a: "Beginners need the fundamentals — a mat, grip socks, and a resistance band set. Regulars already have those; invest in quality upgrades like a Lululemon or Alo legging, or a Manduka mat." },
                { q: "Does she practice at home or in studio?", a: "Studio practitioners use grip socks every class, carry a small bag, and care deeply about leggings. Home practitioners will get the most value from a quality mat, resistance bands, and a foam roller." },
                { q: "What's your budget?", a: "Under $30: grip socks or a resistance band set. $30–$70: a quality studio bag or a sports bra. $70–$120: Lululemon leggings or a Manduka mat. $100+: Alo Airlift leggings or a premium accessory bundle." },
              ].map((item, i) => (
                <div key={i}>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em", color: "#1a1714", marginBottom: "4px" }}>{item.q}</p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "#6b6560", lineHeight: 1.75, margin: 0 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Affiliate notice */}
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "#9a9490", lineHeight: 1.7, marginTop: "48px", paddingTop: "24px", borderTop: "1px solid #ede9e3" }}>
            Pilates Collective Club participates in the Amazon Associates programme. Purchases made through our links earn us a small commission at no additional cost to you. All recommendations are independent and based on real pilates community feedback.
          </p>
        </div>
      </section>

      {/* Related articles */}
      <section className="px-6 pb-20 pcc-content-section" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-3xl mx-auto">
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8b4a31", marginBottom: "28px" }}>More Gift Guides</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "24px" }}>
            {RELATED.map((a) => (
              <ArticleCard key={a.href} title={a.title} excerpt={a.excerpt} href={a.href} category={a.category} readTime={a.readTime} imageUrl={a.imageUrl} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
