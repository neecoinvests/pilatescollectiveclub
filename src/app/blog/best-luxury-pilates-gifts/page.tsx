import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Luxury Pilates Gifts (2026)",
  description: "The finest luxury pilates gifts for serious practitioners — Theragun, Liforme, Manduka, Beyond Yoga, Varley and investment-grade accessories that elevate every practice.",
  keywords: [
    "best luxury pilates gifts",
    "high end pilates gift ideas",
    "luxury pilates Christmas gift",
    "premium pilates presents 2026",
    "luxury pilates gift guide",
    "expensive pilates gifts worth buying",
    "pilates gift for serious practitioner",
    "investment pilates gifts women",
  ],
  openGraph: {
    title: "Best Luxury Pilates Gifts (2026)",
    description: "Investment-grade pilates gifts for the serious practitioner — Theragun, Liforme, Manduka, and more.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-luxury-pilates-gifts",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-studio-bench-towels.png", width: 1200, height: 630, alt: "Best Luxury Pilates Gifts 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Luxury Pilates Gifts (2026)",
    description: "The finest pilates gifts money can buy — for practitioners who already have the basics.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-studio-bench-towels.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-luxury-pilates-gifts" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Theragun PRO (5th Generation)",
    price: "$530",
    verdict: "The Ultimate Recovery Gift",
    description: "The Theragun PRO is Therabody's flagship percussive massager, and it's the one physios and serious athletes actually own. Its 16mm amplitude reaches deeper into the glutes, hip flexors and upper back than the cheap lookalikes, the patented triangle handle lets you reach your own back without straining your wrist, and it comes with six attachments (including a Supersoft head for bony areas). Built-in Warm Up, Post Workout, Sleep and Break routines run from the screen, or pair it with the Therabody app. Sold by Therabody on Amazon.",
    affiliateUrl: "https://www.amazon.com/dp/B0B6RL7NQJ?tag=pilatescollective-20",
  },
  {
    rank: "02",
    name: "Beyond Yoga Spacedye Caught in the Midi High Waisted Legging",
    price: "$97",
    verdict: "Most Luxurious Leggings",
    description: "Ask a room of reformer regulars which leggings they reach for first and Beyond Yoga's Spacedye comes up again and again. The heathered space-dyed fabric is exceptionally soft, with enough stretch for full-range work on the carriage, and the 5-inch high waistband gives gentle, smoothing compression without digging in during roll-ups. They come in a wide, inclusive size range and a long list of colours, which makes them an easy gift to get right. Sold by Zappos on Amazon.",
    affiliateUrl: "https://www.amazon.com/dp/B07X3Y5JVL?tag=pilatescollective-20",
  },
  {
    rank: "03",
    name: "Liforme Original Yoga Mat",
    price: "$165",
    verdict: "Best Luxury Mat",
    description: "Liforme is the mat that converts committed Manduka users. Its GripForMe eco-polyurethane top layer over rubber has exceptional grip even when your hands are damp, and the patented AlignForMe markings etched into the surface help you set up hands, feet and hips consistently, which is surprisingly useful for mat Pilates. At 4.2mm it balances cushioning with a stable feel, it's PVC-free, and it comes with Liforme's own carry bag. Sold by Liforme on Amazon.",
    affiliateUrl: "https://www.amazon.com/dp/B0CF6213QQ?tag=pilatescollective-20",
  },
  {
    rank: "04",
    name: "Varley Davidson Sweatshirt",
    price: "$138",
    verdict: "Best Luxury Studio Layer",
    description: "Varley is the London label that dresses a lot of boutique-studio regulars, and the Davidson is its signature crew: a relaxed, soft crew-neck sweatshirt that slips over leggings and a sports bra between classes and looks put-together enough for the coffee afterwards. The marl colourways (ivory, taupe, olive) are the ones to buy as a gift. Sold by Zappos on Amazon, so returns and size exchanges are simple.",
    affiliateUrl: "https://www.amazon.com/dp/B0CKHVXSZ5?tag=pilatescollective-20",
  },
  {
    rank: "05",
    name: "TriggerPoint GRID 2.0 Foam Roller (26\")",
    price: "$75",
    verdict: "Best Recovery Gift Under $100",
    description: "TriggerPoint's GRID is the roller physical therapists and athletic trainers use, and the 2.0 is the 26-inch version: long enough to roll the whole back or lie along the spine after a reformer class. The patented multi-density surface has three zones that mimic a therapist's palm, fingers and fingertips, and the rigid hollow core wrapped in EVA foam doesn't soften over time the way solid foam rollers do. Rated to 500 lbs. Sold and shipped by Amazon.",
    affiliateUrl: "https://www.amazon.com/dp/B006GUC9KC?tag=pilatescollective-20",
  },
  {
    rank: "06",
    name: "Manduka PRO Yoga Mat 6mm",
    price: "$144",
    verdict: "The Heirloom Mat",
    description: "The Manduka PRO is the mat teachers have used for decades, and it comes with a lifetime guarantee. The 6mm ultra-dense cushioning protects knees and spine during rolling and kneeling work without feeling spongy, the closed-cell surface stops sweat soaking into the mat, and a dotted underside keeps it planted on hard floors. It weighs 7.5 lbs, so it's a home mat rather than a travel mat. Expect a short break-in period before the surface reaches full grip. Sold by Amazon.",
    affiliateUrl: "https://www.amazon.com/dp/B0000DZFXZ?tag=pilatescollective-20",
  },
];

const CRITERIA = [
  { heading: "Her level of practice", body: "Luxury gear rewards practitioners who show up regularly. The Theragun Pro or Liforme mat make the most sense for someone training three or more times a week — not occasional practitioners." },
  { heading: "What she already owns", body: "Check before you gift. If she already has a Manduka PRO, gift the Liforme or the Theragun. If she already lives in one brand of leggings, the Beyond Yoga Spacedye or a Varley layer is a safe next-tier upgrade." },
  { heading: "Category: clothing, recovery, or equipment?", body: "Beyond Yoga and Varley are the clothing picks. Theragun Pro and TriggerPoint GRID are recovery. Liforme and Manduka PRO are equipment. Each category serves a different practice need." },
  { heading: "The durability test", body: "A genuine luxury pilates gift earns its price over years of daily use. Manduka PRO has a lifetime guarantee. The Theragun PRO is built for daily professional use. A Liforme mat lasts years with basic care." },
];

const FAQ = [
  { q: "What is the best luxury pilates gift?", a: "The Theragun PRO ($530) is the most impactful luxury pilates gift — professional-grade percussive therapy that serious practitioners use daily for recovery. For a more accessible luxury gift, the Liforme mat ($165) or Beyond Yoga Spacedye leggings ($97) are gifts she'll use every week." },
  { q: "What luxury pilates gifts are worth the money?", a: "Theragun PRO, Manduka PRO mat (lifetime guarantee), Liforme mat and TriggerPoint GRID 2.0 are all genuinely worth their premium price. The Manduka PRO in particular is among the best-value luxury gifts in pilates — it lasts for years and is guaranteed for life." },
  { q: "Is the Theragun worth it for pilates practitioners?", a: "Yes — the Theragun Pro reaches muscle tissue that foam rollers and standard massage tools cannot. For practitioners training three or more times a week, it is the single most impactful recovery investment available. Its 16mm amplitude is deeper than most budget massage guns, which is what lets it work into the glutes, hip flexors and upper back." },
  { q: "What is the most luxurious pilates mat?", a: "The Liforme Original ($165) is generally considered the highest-performing luxury mat — an eco-polyurethane and rubber mat with alignment markers built into the surface. The Manduka PRO ($144) is the professional standard and offers a lifetime guarantee that Liforme does not. Both are excellent; the choice depends on whether she values grip and alignment markers (Liforme) or lifetime durability (Manduka PRO)." },
];

const RELATED = [
  { title: "Best Pilates Gifts for Your Girlfriend", excerpt: "Thoughtful picks she'll love and actually use every class.", href: "/blog/best-pilates-gifts-for-girlfriend", category: "Guide", readTime: "9 min", imageUrl: "/pictures/stitch-retail-activewear.png" },
  { title: "Best Luxury Pilates Leggings", excerpt: "Wolford, Splits59, Varley, lululemon, Alo — the investment-grade leggings.", href: "/blog/best-luxury-pilates-leggings", category: "Clothing", readTime: "10 min", imageUrl: "/pictures/stitch-retail-activewear.png" },
  { title: "Best Luxury Pilates Accessories", excerpt: "Premium tools and accessories for the serious studio practitioner.", href: "/blog/best-luxury-pilates-accessories", category: "Equipment", readTime: "9 min", imageUrl: "/pictures/stitch-studio-shelf-props.png" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Luxury Pilates Gifts (2026)",
      "description": "The finest luxury pilates gifts for serious practitioners — Theragun, Liforme, Manduka, Beyond Yoga, Varley and investment-grade accessories.",
      "url": "https://pilatescollectiveclub.com/blog/best-luxury-pilates-gifts",
      "image": "https://pilatescollectiveclub.com/pictures/stitch-studio-bench-towels.png",
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "datePublished": "2026-07-29",
      "dateModified": "2026-09-22",
    },
    {
      "@type": "ItemList",
      "name": "Best Luxury Pilates Gifts",
      "numberOfItems": 6,
      "itemListElement": PRODUCTS.map((p, i) => ({ "@type": "ListItem", "position": i + 1, "name": p.name, "url": p.affiliateUrl })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Luxury Pilates Gifts", "item": "https://pilatescollectiveclub.com/blog/best-luxury-pilates-gifts" },
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
            Best Luxury Pilates Gifts
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", color: "#6b6560", lineHeight: 1.8, marginBottom: "28px" }}>
            For the serious practitioner who has already covered the basics and deserves something genuinely exceptional. These are investment-grade gifts — tools and garments that professional instructors choose for themselves, that earn their price over years of daily use, and that immediately separate themselves from the standard activewear gift basket. Nothing on this list is padding. Each item earns its place by being the best in its category at any price.
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
          <Image src="/pictures/stitch-studio-bench-towels.png" alt="Best Luxury Pilates Gifts" fill style={{ objectFit: "cover" }} />
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
                    Shop on Amazon →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* How to choose */}
          <div style={{ marginTop: "72px", padding: "40px", backgroundColor: "#faf8f5", borderLeft: "3px solid #c5a882" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontWeight: 400, color: "#1a1714", marginBottom: "28px", marginTop: 0 }}>How to choose a luxury pilates gift</h2>
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
