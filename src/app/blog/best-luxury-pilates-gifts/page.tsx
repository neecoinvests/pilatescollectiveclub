import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Luxury Pilates Gifts (2026) | Pilates Collective Club",
  description: "The finest luxury pilates gifts for serious practitioners — Theragun, Wolford, Manduka, Liforme, and investment-grade accessories that elevate every practice.",
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
    description: "Investment-grade pilates gifts for the serious practitioner — Theragun, Wolford, Liforme, and more.",
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
    name: "Theragun Pro (5th Generation)",
    price: "$599",
    verdict: "The Ultimate Recovery Gift",
    description: "The Theragun Pro is the percussive therapy device that professional athletes and elite pilates practitioners use for genuine recovery — not the consumer-grade devices that look similar but deliver a fraction of the impact depth. The 5th-generation Pro reaches 16mm of amplitude at 1,750–2,400 RPM, which penetrates deep enough to address the hip flexors, thoracic extensors, and glutes that accumulate tension in serious reformer practice. It includes six attachments, 150-minute battery life, and connects to the Therabody app for guided recovery protocols. A gift that earns its price every day.",
    affiliateUrl: "https://www.amazon.com/s?k=theragun+pro+5th+generation+percussive+therapy&tag=pilatescollective-20",
  },
  {
    rank: "02",
    name: "Wolford The Workout Leggings",
    price: "$180",
    verdict: "Most Luxurious Activewear",
    description: "Wolford is Austria's most revered luxury hosiery house, founded in 1950, and The Workout Leggings represent their finest expression of performance craft. These are not activewear in the usual sense — they are precision-engineered garments made from a proprietary micro-fibre blend that adapts to the body without compressing or restricting. Fully opaque, pill-resistant, and constructed with the same exacting standards as Wolford's couture hosiery. For the practitioner who has tried everything else and wants the finest legging that exists, this is the answer.",
    affiliateUrl: "https://www.amazon.com/s?k=wolford+workout+leggings+women+luxury&tag=pilatescollective-20",
  },
  {
    rank: "03",
    name: "Liforme Yoga & Pilates Mat",
    price: "$140",
    verdict: "Best Luxury Mat",
    description: "Liforme is the mat brand that converted hardcore Manduka loyalists — a meaningful achievement. Made in the UK from eco-polyurethane over a natural rubber base, the Liforme is the only mat with a built-in AlignForMe system: subtle guide markers etched into the surface that help practitioners calibrate footwork, hip alignment, and arm position with precision. The grip is extraordinary — more than any rubber or PVC mat — and the 4.2mm thickness balances cushion and ground connection perfectly. Comes in a premium tote bag and is fully biodegradable at end of life.",
    affiliateUrl: "https://www.amazon.com/s?k=liforme+yoga+pilates+mat+original&tag=pilatescollective-20",
  },
  {
    rank: "04",
    name: "Alo Yoga Alosoft Savant Sweatshirt",
    price: "$148",
    verdict: "Best Luxury Studio Layer",
    description: "Alo's Alosoft fabric is a proprietary ultra-soft terry that has become the defining luxury studio loungewear material. The Savant Sweatshirt is cropped, oversized, and made with the kind of tactile quality that makes you reach for it before and after every class. It drapes beautifully over studio leggings, has a large hood for post-class warmth, and is available in Alo's signature palette of bone, espresso, and slate. This is what the instructors and regulars at the best studios wear between classes — and it shows.",
    affiliateUrl: "https://www.amazon.com/s?k=alo+yoga+alosoft+sweatshirt+women+luxury&tag=pilatescollective-20",
  },
  {
    rank: "05",
    name: "TriggerPoint GRID 2.0 Foam Roller",
    price: "$55",
    verdict: "Best Recovery Tool Under $100",
    description: "TriggerPoint is the foam roller brand that physical therapists, professional sports teams, and Pilates studios consistently specify over cheaper alternatives. The GRID 2.0 uses a multi-density exterior — three different surface patterns that replicate the varying pressure of a therapist's fingers, knuckles, and palm. The hollow core is reinforced to support up to 500 lbs and will never compress or deform. At $55 it is the most thoughtful entry-level luxury gift on this list — practical, durable, and genuinely more effective than anything in a retail sports store.",
    affiliateUrl: "https://www.amazon.com/s?k=triggerpoint+grid+2.0+foam+roller&tag=pilatescollective-20",
  },
  {
    rank: "06",
    name: "Manduka PRO Yoga Mat (Lifetime Guarantee)",
    price: "$120",
    verdict: "The Heirloom Mat",
    description: "The Manduka PRO comes with a lifetime guarantee — the only mat in this category that does. Made from a high-density closed-cell PVC surface over a dense foam core, it is 6mm thick for joint protection and entirely non-porous, meaning it never absorbs sweat or bacteria regardless of how many years it's used. Weighs 7.5 lbs and stays anchored during every exercise. Professional pilates instructors buy this for themselves. That endorsement, backed by a lifetime warranty, makes it one of the best-value luxury gifts in pilates.",
    affiliateUrl: "https://www.amazon.com/s?k=manduka+pro+yoga+mat+lifetime+guarantee&tag=pilatescollective-20",
  },
];

const RELATED = [
  { title: "Best Pilates Gifts for Your Girlfriend", excerpt: "Thoughtful picks she'll love and actually use every class.", href: "/blog/best-pilates-gifts-for-girlfriend", category: "Guide", readTime: "8 min", imageUrl: "/pictures/stitch-retail-activewear.png" },
  { title: "Best Luxury Pilates Leggings", excerpt: "Wolford, Splits59, Varley — the investment-grade leggings.", href: "/blog/best-luxury-pilates-leggings", category: "Clothing", readTime: "10 min", imageUrl: "/pictures/stitch-retail-activewear.png" },
  { title: "Best Luxury Pilates Accessories", excerpt: "Premium tools and accessories for the serious studio practitioner.", href: "/blog/best-luxury-pilates-accessories", category: "Equipment", readTime: "9 min", imageUrl: "/pictures/stitch-studio-shelf-props.png" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Luxury Pilates Gifts (2026)",
      "description": "The finest luxury pilates gifts for serious practitioners — Theragun, Wolford, Manduka, Liforme, and investment-grade accessories.",
      "url": "https://pilatescollectiveclub.com/blog/best-luxury-pilates-gifts",
      "image": "https://pilatescollectiveclub.com/pictures/stitch-studio-bench-towels.png",
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "datePublished": "2026-07-29",
      "dateModified": "2026-07-29",
    },
    {
      "@type": "ItemList",
      "name": "Best Luxury Pilates Gifts",
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
        { "@type": "ListItem", "position": 3, "name": "Best Luxury Pilates Gifts", "item": "https://pilatescollectiveclub.com/blog/best-luxury-pilates-gifts" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is the best luxury pilates gift?", "acceptedAnswer": { "@type": "Answer", "text": "The Theragun Pro ($599) is the most impactful luxury pilates gift — professional-grade percussive therapy that serious practitioners use daily for recovery. For a more accessible luxury gift, the Liforme mat ($140) or Wolford leggings ($180) are exceptional investments." } },
        { "@type": "Question", "name": "What luxury pilates gifts are worth the money?", "acceptedAnswer": { "@type": "Answer", "text": "Theragun Pro, Manduka PRO mat (lifetime guarantee), Wolford leggings, and Liforme mat are all genuinely worth their premium price. The Manduka PRO in particular is among the best-value luxury gifts in pilates — it outlasts any other mat and is guaranteed for life." } },
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
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "10px", color: "#9a9490", letterSpacing: "0.1em" }}>9 min read</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 400, color: "#1a1714", lineHeight: 1.15, marginBottom: "20px" }}>
            Best Luxury Pilates Gifts
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", color: "#6b6560", lineHeight: 1.8, marginBottom: "28px" }}>
            For the serious practitioner who has already covered the basics and deserves something genuinely exceptional. These are investment-grade gifts — tools and garments that professional instructors choose for themselves, that earn their price over years of daily use, and that immediately separate themselves from the standard activewear gift basket. Nothing on this list is padding.
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
        <div className="max-w-3xl mx-auto" style={{ position: "relative", height: "420px" }}>
          <Image src="/pictures/stitch-studio-bench-towels.png" alt="Best Luxury Pilates Gifts" fill style={{ objectFit: "cover" }} />
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
                    style={{ display: "inline-block", fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#ffffff", backgroundColor: "#0a0a0a", padding: "12px 24px", textDecoration: "none" }}
                  >
                    Shop on Amazon →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Affiliate notice */}
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "#9a9490", lineHeight: 1.7, marginTop: "64px", paddingTop: "24px", borderTop: "1px solid #ede9e3" }}>
            Pilates Collective Club participates in the Amazon Associates programme. Purchases through our links earn us a small commission at no additional cost to you. All recommendations are independently chosen.
          </p>
        </div>
      </section>

      {/* Related */}
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

      <CTASection title="Find a Pilates Studio Near You" subtitle="Discover the best reformer studios in your city." />
      <Footer />
    </>
  );
}
