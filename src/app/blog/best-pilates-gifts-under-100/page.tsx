import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Gifts Under $100 (2026) | Pilates Collective Club",
  description: "The best pilates gifts under $100 — quality picks that feel premium without the premium price tag. Grip socks, mats, resistance bands, sports bras, and more.",
  keywords: [
    "best pilates gifts under 100",
    "pilates gifts under 100 dollars",
    "affordable pilates gift ideas",
    "pilates Christmas gifts under 100",
    "pilates birthday gift under 100",
    "budget pilates gift guide 2026",
    "pilates gift ideas $100 or less",
    "good pilates gifts women",
  ],
  openGraph: {
    title: "Best Pilates Gifts Under $100 (2026)",
    description: "Quality pilates gifts that feel premium without the high price — all under $100.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-gifts-under-100",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-studio-shelf-props.png", width: 1200, height: 630, alt: "Best Pilates Gifts Under $100 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Gifts Under $100 (2026)",
    description: "Great pilates gifts that don't require a great budget — all under $100.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-studio-shelf-props.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-pilates-gifts-under-100" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Lululemon Align Reversible Bra",
    price: "$48",
    verdict: "Best Under-$50 Gift",
    description: "The Align Bra is Lululemon's most popular sports bra — made from the same Nulu fabric as the iconic Align leggings. It's light, buttery, fully reversible (two colours in one), and designed for low-impact activities like pilates, yoga, and barre where comfort and aesthetics matter as much as performance. The removable cups provide modest coverage and the smoothed silhouette works under fitted studio tops. At $48 it's one of the most thoughtful under-$50 gifts in pilates — she'll wear it to every class.",
    affiliateUrl: "https://www.amazon.com/s?k=lululemon+align+reversible+bra+women&tag=pilatescollective-20",
  },
  {
    rank: "02",
    name: "Gaiam Premium Print Yoga Mat (6mm)",
    price: "$35",
    verdict: "Best Beginner-to-Intermediate Mat",
    description: "Gaiam is the brand that introduced millions of practitioners to quality mats — and their Premium Print line remains genuinely excellent for the price. At 6mm, it provides real joint cushioning for pilates floor work. The non-slip surface grips on both sides, the foam core holds its shape through years of use, and it rolls into a compact cylinder that fits any mat bag. For a gift under $40, this is the most practical choice — she'll use it for home practice immediately.",
    affiliateUrl: "https://www.amazon.com/s?k=gaiam+premium+print+yoga+mat+6mm+pilates&tag=pilatescollective-20",
  },
  {
    rank: "03",
    name: "TriggerPoint GRID Foam Roller",
    price: "$36",
    verdict: "Best Recovery Gift",
    description: "The TriggerPoint GRID is the foam roller that physical therapists recommend and pilates instructors keep in their own kit. Its multi-density surface — three distinct patterns that replicate the pressure of a therapist's hand — targets muscle tissue with a precision that flat-surface rollers cannot match. The hollow core is reinforced to support up to 500 lbs and will never compress over years of use. At $36, it's the single most impactful recovery tool she can own for under $40.",
    affiliateUrl: "https://www.amazon.com/s?k=triggerpoint+grid+foam+roller+original&tag=pilatescollective-20",
  },
  {
    rank: "04",
    name: "Theraband Professional Resistance Band Set",
    price: "$26",
    verdict: "Best Accessory Under $30",
    description: "Theraband is the clinical gold standard in resistance bands — the same brand used in hospital physiotherapy departments and prescribed by sports medicine professionals. The professional set includes six resistance levels from yellow through black, covering every stage of pilates progression from gentle rehabilitation to advanced conditioning. Each band is colour-coded, pre-cut to exercise length, and made from a latex blend that won't snap or degrade. For a practitioner of any level, this is the highest-value-for-money gift on this list.",
    affiliateUrl: "https://www.amazon.com/s?k=theraband+professional+latex+resistance+band+set&tag=pilatescollective-20",
  },
  {
    rank: "05",
    name: "Manduka Lean Cork Yoga Block (Set of 2)",
    price: "$64",
    verdict: "Best Prop Investment",
    description: "Cork blocks are the prop that Pilates and yoga practitioners consistently wish they'd invested in earlier. Manduka's Lean Cork block is denser and more stable than the foam alternative — it won't compress under body weight and provides an unchanging surface regardless of how hard it's pressed. Made from sustainably harvested Portuguese cork with sealed edges that won't crumble. The set-of-two is the practical purchase for practitioners who want a matching pair for symmetrical practice. A prop that lasts decades.",
    affiliateUrl: "https://www.amazon.com/s?k=manduka+lean+cork+yoga+block+set+of+2&tag=pilatescollective-20",
  },
  {
    rank: "06",
    name: "ToeSox Half-Toe Grip Socks — 3-Pack",
    price: "$52",
    verdict: "Best Multi-Pack Gift",
    description: "ToeSox grip socks are required equipment for reformer studios and the preferred choice of the majority of serious practitioners. The half-toe design is specifically engineered for footbar work — the exposed toes provide full proprioceptive feedback on the reformer carriage while the full-grip sole keeps feet anchored on every surface. The three-pack in a coordinated colour set is a gift that's practical, repeatable, and genuinely appreciated. She'll reach for these every class.",
    affiliateUrl: "https://www.amazon.com/s?k=toesox+half+toe+grip+socks+3+pack+pilates&tag=pilatescollective-20",
  },
];

const RELATED = [
  { title: "Best Pilates Gifts Under $50", excerpt: "Thoughtful pilates gifts that keep the budget tight.", href: "/blog/best-pilates-gifts-under-50", category: "Guide", readTime: "7 min", imageUrl: "/pictures/stitch-grip-socks-footbar.png" },
  { title: "Best Pilates Gifts for Beginners", excerpt: "Everything a new practitioner needs to get started right.", href: "/blog/best-pilates-gifts-for-beginners", category: "Guide", readTime: "8 min", imageUrl: "/pictures/stitch-studio-windowsill.png" },
  { title: "Best Pilates Gifts for Your Girlfriend", excerpt: "Picks she'll love and actually use every class.", href: "/blog/best-pilates-gifts-for-girlfriend", category: "Guide", readTime: "8 min", imageUrl: "/pictures/stitch-retail-activewear.png" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Gifts Under $100 (2026)",
      "description": "The best pilates gifts under $100 — quality picks that feel premium without the premium price tag.",
      "url": "https://pilatescollectiveclub.com/blog/best-pilates-gifts-under-100",
      "image": "https://pilatescollectiveclub.com/pictures/stitch-studio-shelf-props.png",
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "datePublished": "2026-07-29",
      "dateModified": "2026-07-29",
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Gifts Under $100",
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
        { "@type": "ListItem", "position": 3, "name": "Best Pilates Gifts Under $100", "item": "https://pilatescollectiveclub.com/blog/best-pilates-gifts-under-100" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What are the best pilates gifts under $100?", "acceptedAnswer": { "@type": "Answer", "text": "The best pilates gifts under $100 are: ToeSox grip socks ($18–52), Theraband resistance set ($26), Gaiam Premium mat ($35), TriggerPoint GRID roller ($36), Lululemon Align Bra ($48), and Manduka Cork Blocks ($64). All are practical, high-quality gifts she'll use every class." } },
        { "@type": "Question", "name": "What is a good pilates gift for under $50?", "acceptedAnswer": { "@type": "Answer", "text": "For under $50, the best pilates gifts are: Lululemon Align Bra ($48), Theraband Professional Set ($26), ToeSox Half-Toe Grip Socks ($18), TriggerPoint GRID Roller ($36), and Gaiam Premium Mat ($35). The Theraband set offers the best value-per-dollar." } },
      ],
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
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "10px", color: "#9a9490", letterSpacing: "0.1em" }}>7 min read</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 400, color: "#1a1714", lineHeight: 1.15, marginBottom: "20px" }}>
            Best Pilates Gifts Under $100
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", color: "#6b6560", lineHeight: 1.8, marginBottom: "28px" }}>
            The best pilates gifts don't have to be expensive — they have to be right. This guide focuses on the sub-$100 tier where thoughtfulness matters more than price: the grip socks she reaches for every class, the foam roller she actually uses, the mat that finally replaces the studio's communal one. All picks are from brands the pilates community trusts, with prices that leave room in any budget.
          </p>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "#9a9490", letterSpacing: "0.08em" }}>✓ All under $100</span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "#9a9490", letterSpacing: "0.08em" }}>✓ Amazon links confirmed</span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "#9a9490", letterSpacing: "0.08em" }}>✓ Updated 2026</span>
          </div>
        </div>
      </section>

      <section className="px-6" style={{ backgroundColor: "#fcf9f8" }}>
        <div className="max-w-3xl mx-auto" style={{ position: "relative", height: "420px" }}>
          <Image src="/pictures/stitch-studio-shelf-props.png" alt="Best Pilates Gifts Under $100" fill style={{ objectFit: "cover" }} />
        </div>
      </section>

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
                  <a href={p.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow" style={{ display: "inline-block", fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#ffffff", backgroundColor: "#0a0a0a", padding: "12px 24px", textDecoration: "none" }}>
                    Shop on Amazon →
                  </a>
                </div>
              </div>
            ))}
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
