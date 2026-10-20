import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import AffiliateNote from "@/components/AffiliateNote";
import QuickPicks from "@/components/QuickPicks";
import TopPick from "@/components/TopPick";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import { jsonLdHtml, productItemList } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Best Pilates Gifts for Your Girlfriend (2026)",
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
    price: "$98.00",
    verdict: "The Gold Standard Gift",
    description: "If she does pilates, she either owns these or wants them. The Align is Lululemon's signature pilates legging — made from their proprietary Nulu fabric, which is so light and soft it genuinely disappears during practice. The 25-inch length is the most popular for reformer work. High-waisted with zero waistband roll, fully opaque in every colour, and available in around 30 shades. If you're unsure of her size, go up one — the Align runs slightly small and exchanges are seamless at any Lululemon store. This is the gift that lands every time.",
    affiliateUrl: "https://www.amazon.com/dp/B08M8ZTKJS?tag=pilatescollective-20",
  },
  {
    rank: "02",
    name: "Alo Yoga Airlift 7/8 Legging",
    price: "$114",
    verdict: "The Luxury Upgrade",
    description: "Alo's Airlift is the legging that has taken over reformer studios from New York to Los Angeles. The Airlift fabric delivers precise, sculpting compression that looks incredible and moves even better. The wide waistband stays put through every footbar press, teaser, and long-stretch. Available in Alo's signature neutral palette — bone, espresso, midnight — these are the leggings she'll wear from class to brunch without changing. A genuinely impressive gift that signals you understand what she cares about. Not sold on Amazon: this link goes to Alo Yoga's own site.",
    affiliateUrl: "https://www.aloyoga.com",
  },
  {
    rank: "03",
    name: "Manduka PRO Yoga & Pilates Mat",
    price: "$144.00",
    verdict: "Best Mat Gift",
    description: "The Manduka PRO is the mat that professional pilates instructors buy for themselves. It is 6mm thick for joint support, made from a high-density closed-cell PVC that resists moisture and never absorbs sweat, and carries a lifetime guarantee — Manduka will replace it free if it ever wears out. The non-slip surface grips even during dynamic rolling and footwork. It weighs 7.5 lbs, so it stays put. If she's been practicing on a cheap studio mat, this will transform her home practice. An heirloom-grade gift.",
    affiliateUrl: "https://www.amazon.com/dp/B0066T7I54?tag=pilatescollective-20",
  },
  {
    rank: "04",
    name: "Lululemon Everywhere Belt Bag Large 2L",
    price: "$38",
    verdict: "Best Pilates Bag Gift",
    description: "The Lululemon belt bag has become the unofficial pilates studio accessory — nearly every practitioner has one clipped to their bag or hung on the studio hook. The large 2L version fits her phone, keys, cards, lip balm, and a snack. It's made from a water-repellent ripstop fabric, has a quick-access front zip, and comes in a wide range of seasonal colours. At $48 it's a thoughtful gift at a very reasonable price point — and she will use it every single day. Not sold on Amazon: this link goes to Lululemon's own site.",
    affiliateUrl: "https://shop.lululemon.com",
  },
  {
    rank: "05",
    name: "ToeSox Half-Toe Grip Socks",
    price: "$16.00",
    verdict: "Essential Studio Accessory",
    description: "Studios require grip socks — no exceptions. ToeSox are the brand that most instructors and practitioners choose when they're spending their own money. The half-toe design exposes the toes for footbar work and gives full proprioceptive feedback on the carriage. The Bellarina style in particular has become a cult favourite in pilates circles. Available in multi-packs in every colour. These make an excellent stocking stuffer or add-on gift that she'll genuinely appreciate.",
    affiliateUrl: "https://www.amazon.com/dp/B00VLMY04S?tag=pilatescollective-20",
  },
  {
    rank: "06",
    name: "Theraband Professional Resistance Band Set",
    price: "$19.47",
    verdict: "Best Training Accessory",
    description: "Theraband is the clinical standard in physical therapy and Pilates training — the brand that actual physiotherapists prescribe and the bands most certified Pilates instructors keep in their kit. The professional set includes six resistance levels from yellow (light) to black (extra-heavy). Perfect for at-home pilates practice, pre-class warm-up, and post-class stretching. At $26, this is the highest-value-per-dollar gift on this list — she'll use these for years.",
    affiliateUrl: "https://www.amazon.com/dp/B07RF9FYM6?tag=pilatescollective-20",
  },
];

const CRITERIA = [
  { heading: "Her practice level", body: "Beginners need fundamentals — a mat, grip socks, a resistance band set. A regular practitioner already has these; invest in a quality upgrade like Lululemon leggings or a Manduka PRO mat." },
  { heading: "Studio or home practice?", body: "Studio practitioners use grip socks every class, carry a small bag, and care about leggings. Home practitioners get the most value from a quality mat, resistance bands, and a foam roller." },
  { heading: "Safe vs. specific gifts", body: "Leggings and mats require knowing her size. Grip socks, resistance bands, belt bags, and foam rollers are size-independent — ideal if you want a safe pick." },
  { heading: "Budget guide", body: "Under $30: grip socks or a resistance band set. $30–$70: a belt bag or sports bra. $70–$120: Lululemon leggings. Over $120: a Manduka PRO mat, Alo Airlift leggings or a Theragun." },
];

const FAQ = [
  { q: "What is the best pilates gift for a girlfriend?", a: "The Lululemon Align Legging ($98) is the most universally loved pilates gift for women. If she practices pilates and doesn't already own a pair, this is the gift she's quietly wanted. They're the gold standard for comfort and performance in studio pilates." },
  { q: "What do pilates girls want as gifts?", a: "Pilates practitioners consistently want quality leggings (Lululemon Align, Alo Airlift), a professional mat (Manduka PRO), grip socks (ToeSox), a studio bag (Lululemon belt bag), and resistance bands. These are items she uses every class that make a real difference." },
  { q: "How much should I spend on a pilates gift for my girlfriend?", a: "Meaningful pilates gifts start at $18 (grip socks) and scale to $144 (Manduka PRO mat). For a girlfriend, $50–$100 is a thoughtful budget — it covers quality leggings, a studio bag, or a premium mat. Grip socks and bands make excellent add-on gifts at any budget." },
  { q: "What size should I buy for pilates leggings?", a: "Lululemon Align leggings run slightly small — if you're between sizes or unsure, go up one. Alo Airlift runs true to size. If you don't know her size, a Lululemon gift card lets her choose in-store with their free size consultation. For socks: most brands offer S/M (US W 5–8) and M/L (US W 8–11)." },
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
      "dateModified": "2026-10-20",
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Gifts for Girlfriend",
      "numberOfItems": 6,
      "itemListElement": PRODUCTS.map((p, i) => ({ "@type": "ListItem", "position": i + 1, "name": p.name, "url": p.affiliateUrl })),
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
      "mainEntity": FAQ.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
  ],
};

const QP_NOTES = ["The Gold Standard Gift", "The Luxury Upgrade", "Best Mat Gift", "Best Pilates Bag Gift", "Essential Studio Accessory", "Best Training Accessory"];

const ITEM_LIST = productItemList("Best Pilates Gifts for Your Girlfriend (2026)", PRODUCTS.filter((pr) => /amazon\.[a-z.]+\/dp\//.test(pr.affiliateUrl)).map((pr) => ({ name: pr.name, description: pr.description, price: pr.price, url: pr.affiliateUrl })));

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml({ "@context": "https://schema.org", ...ITEM_LIST }) }} />
      <Header />

      <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
            Best Pilates Gifts<br />for Your Girlfriend
          </h1>
          <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Prices checked October 20, 2026 · 9 min read</p>
          <TopPick name={PRODUCTS[0].name} price={PRODUCTS[0].price} note={QP_NOTES[0]} url={PRODUCTS[0].affiliateUrl} />
          <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
          <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
            If she does pilates, she has opinions about her gear — even if she's never said so out loud. The right gift isn't a candle or a journal. It's the leggings she's been adding to her cart for three months, the mat she's been eyeing at the studio, or the bag that every instructor seems to have. This guide covers six picks the pilates community consistently loves, ranked by what actually lands — with buying advice to help you choose the right one for her.
          </p>
        </div>
      </section>

      <section className="px-6" style={{ backgroundColor: "#fcf9f8" }}>
        <div className="max-w-5xl mx-auto">
          <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
            <Image src="/pictures/stitch-retail-activewear.png" alt="Best Pilates Gifts for Girlfriend" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
          </div>
        </div>
      </section>

      <section className="px-6 py-20 pcc-content-section" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-3xl mx-auto">

          {/* Quick picks table */}
          <QuickPicks className="mb-6" picks={PRODUCTS.map((pr, i) => ({ name: pr.name, price: pr.price, url: pr.affiliateUrl, note: QP_NOTES[i] }))} />
          <AffiliateNote className="mb-14" />

          {/* Products */}
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
                    Shop Now →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* How to choose */}
          <div style={{ marginTop: "72px", padding: "40px", backgroundColor: "#faf8f5", borderLeft: "3px solid #c5a882" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontWeight: 400, color: "#1a1714", marginBottom: "28px", marginTop: 0 }}>How to pick the right pilates gift</h2>
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
            Pilates Collective Club participates in the Amazon Associates programme. Purchases made through our links earn us a small commission at no additional cost to you. All recommendations are independent and based on real pilates community feedback.
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
