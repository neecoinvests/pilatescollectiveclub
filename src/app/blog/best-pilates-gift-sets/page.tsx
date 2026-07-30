import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Gift Sets & Bundles (2026) | Pilates Collective Club",
  description: "The best pilates gift sets — curated bundles of mats, socks, resistance bands, and accessories that give practitioners everything they need in one thoughtful gift.",
  keywords: [
    "best pilates gift sets",
    "pilates gift bundle ideas",
    "pilates starter set gift",
    "pilates equipment set gift",
    "pilates bundle Christmas gift",
    "pilates gift basket ideas",
    "pilates accessories gift set",
    "complete pilates gift set 2026",
  ],
  openGraph: {
    title: "Best Pilates Gift Sets & Bundles (2026)",
    description: "Curated pilates gift bundles — everything she needs in one thoughtful, complete gift.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-gift-sets",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-water-towel-bench.png", width: 1200, height: 630, alt: "Best Pilates Gift Sets 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Gift Sets & Bundles (2026)",
    description: "Complete pilates gift sets and bundle ideas — curated for every budget and every level.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-water-towel-bench.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-pilates-gift-sets" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const SETS = [
  {
    rank: "01",
    name: "The Complete Beginner Set",
    price: "$79 total",
    verdict: "Best First Pilates Gift Bundle",
    description: "For someone just starting pilates, assemble: a Gaiam Premium Mat ($35), ToeSox Half-Toe Grip Socks ($18), and a Theraband Resistance Band Set ($26). Together these three items cover everything a beginner needs for their first reformer class and at-home practice — a mat to work on, socks the studio requires, and bands for supplementary conditioning. Total cost: around $79, and every item gets immediate use from day one. Wrap them together with a note explaining each piece and why it matters.",
    affiliateUrl: "https://www.amazon.com/s?k=gaiam+premium+pilates+mat+beginners+kit&tag=pilatescollective-20",
  },
  {
    rank: "02",
    name: "The Lululemon Studio Bundle",
    price: "$146 total",
    verdict: "Best Premium Gift Bundle",
    description: "Two Lululemon pieces that work together perfectly: the Align High-Rise Legging 25\" ($98) and the Everywhere Belt Bag 2L ($48). The Align is the studio standard legging; the belt bag is the studio standard accessory. Together they cover what she wears and what she carries to every class. Both are available across a rotating seasonal palette — choose coordinating or contrasting colours. At $146 total this is a complete, considered gift that demonstrates real knowledge of what she cares about. No filler required.",
    affiliateUrl: "https://www.amazon.com/s?k=lululemon+align+legging+women+pilates&tag=pilatescollective-20",
  },
  {
    rank: "03",
    name: "The Recovery Set",
    price: "$71 total",
    verdict: "Best Wellness Gift Bundle",
    description: "For the practitioner who trains hard and needs to recover well: TriggerPoint GRID Foam Roller ($36) plus a Theraband Resistance Band Set ($26) for active recovery and mobility work, and a Trideer Pilates Ball ($20) for targeted spinal mobility and stretching. Together these three pieces cover myofascial release, resistance mobility, and ball work — a complete recovery and maintenance kit for any level of practitioner. Approximately $82 total, presented in a simple basket with a handwritten card.",
    affiliateUrl: "https://www.amazon.com/s?k=triggerpoint+grid+foam+roller+recovery+set&tag=pilatescollective-20",
  },
  {
    rank: "04",
    name: "The Luxury Mat & Bag Bundle",
    price: "$268 total",
    verdict: "Best Investment Gift Bundle",
    description: "The pairing that serious practitioners build toward: a Manduka PRO Mat ($120) and a Liforme Original Mat Bag ($148). The Manduka PRO is the lifetime-guaranteed professional mat; the Liforme bag is designed specifically to carry it, with a padded shoulder strap, water bottle pocket, and accessory compartment. Together they make an heirloom-grade set — the mat and bag she'll still be using a decade from now. A gift that communicates genuine understanding of the practice and what it deserves.",
    affiliateUrl: "https://www.amazon.com/s?k=manduka+pro+mat+bag+set+pilates+gift&tag=pilatescollective-20",
  },
  {
    rank: "05",
    name: "The Alo Yoga Pilates Set",
    price: "$176 total",
    verdict: "Best Clothing Bundle",
    description: "Alo's two most coveted pilates pieces paired together: the Airlift 7/8 Legging ($114) and the Airlift Strappy Bra ($62). Both are made from Alo's signature Airlift fabric — precision-compression, sculpting, and engineered for zero movement during exercise. Choosing matching or tonal colourways (both come in bone, black, espresso, and seasonal shades) creates a complete studio look that is as intentional and refined as the practice itself. This is the bundle that arrives and goes directly into her next-class bag.",
    affiliateUrl: "https://www.amazon.com/s?k=alo+yoga+airlift+legging+bra+set+women&tag=pilatescollective-20",
  },
  {
    rank: "06",
    name: "The Tech & Recovery Bundle",
    price: "$334 total",
    verdict: "Best High-End Gift Bundle",
    description: "For the serious practitioner ready for the next level of recovery: Theragun Elite ($299) plus a TriggerPoint GRID Roller ($36). The Theragun handles deep percussive therapy for the hip flexors, thoracic spine, and shoulders; the GRID covers myofascial rolling for the IT band, calves, and thoracic extensors. Together they build a complete recovery toolkit that professional athletes use. Approximately $335 total — an exceptional end-of-year gift, or a pooled gift from a group of studio friends.",
    affiliateUrl: "https://www.amazon.com/s?k=theragun+elite+recovery+set+pilates&tag=pilatescollective-20",
  },
];

const RELATED = [
  { title: "Best Pilates Gifts for Your Girlfriend", excerpt: "Individual picks she'll love — Lululemon, Alo, Manduka.", href: "/blog/best-pilates-gifts-for-girlfriend", category: "Guide", readTime: "8 min", imageUrl: "/pictures/stitch-retail-activewear.png" },
  { title: "Best Pilates Gifts Under $100", excerpt: "Quality pilates gifts that stay comfortably under $100.", href: "/blog/best-pilates-gifts-under-100", category: "Guide", readTime: "7 min", imageUrl: "/pictures/stitch-studio-shelf-props.png" },
  { title: "Best Pilates Starter Kit", excerpt: "The complete equipment kit for home pilates practice.", href: "/blog/best-pilates-starter-kit", category: "Equipment", readTime: "9 min", imageUrl: "/pictures/stitch-studio-shelf-props.png" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Gift Sets & Bundles (2026)",
      "description": "The best pilates gift sets — curated bundles that give practitioners everything they need in one thoughtful gift.",
      "url": "https://pilatescollectiveclub.com/blog/best-pilates-gift-sets",
      "image": "https://pilatescollectiveclub.com/pictures/stitch-water-towel-bench.png",
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "datePublished": "2026-07-30",
      "dateModified": "2026-07-30",
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Gift Sets",
      "numberOfItems": 6,
      "itemListElement": SETS.map((p, i) => ({ "@type": "ListItem", "position": i + 1, "name": p.name, "url": p.affiliateUrl })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Pilates Gift Sets", "item": "https://pilatescollectiveclub.com/blog/best-pilates-gift-sets" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is a good pilates gift set?", "acceptedAnswer": { "@type": "Answer", "text": "The best pilates gift set for a beginner is: Gaiam mat ($35) + ToeSox grip socks ($18) + Theraband set ($26) = $79 total. For an experienced practitioner: Lululemon Align Legging ($98) + Lululemon Belt Bag ($48) = $146 total. Both bundles feel complete and intentional." } },
        { "@type": "Question", "name": "How do I make a pilates gift basket?", "acceptedAnswer": { "@type": "Answer", "text": "Build a pilates gift basket around three items: something to train in (leggings or a sports bra), something to train on (a mat or grip socks), and something to recover with (a foam roller or resistance bands). Add a handwritten card noting why you chose each piece. The Theraband set, ToeSox socks, and Gaiam mat together make an excellent complete basket for around $79." } },
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
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "10px", color: "#9a9490", letterSpacing: "0.1em" }}>9 min read</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 400, color: "#1a1714", lineHeight: 1.15, marginBottom: "20px" }}>
            Best Pilates Gift Sets & Bundles
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", color: "#6b6560", lineHeight: 1.8, marginBottom: "28px" }}>
            A single great gift is good. A curated set of two or three items that work together — covering training, recovery, and every daily ritual around her practice — is better. This guide builds six complete pilates gift bundles across every budget tier, from a $79 beginner kit to a $334 high-performance recovery set. Each bundle is designed so every item in it earns its place.
          </p>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "#9a9490", letterSpacing: "0.08em" }}>✓ Curated bundles at every budget</span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "#9a9490", letterSpacing: "0.08em" }}>✓ Amazon links confirmed</span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "#9a9490", letterSpacing: "0.08em" }}>✓ Updated 2026</span>
          </div>
        </div>
      </section>
      <section className="px-6" style={{ backgroundColor: "#fcf9f8" }}>
        <div className="max-w-3xl mx-auto" style={{ position: "relative", height: "420px" }}>
          <Image src="/pictures/stitch-water-towel-bench.png" alt="Best Pilates Gift Sets and Bundles" fill style={{ objectFit: "cover" }} />
        </div>
      </section>
      <section className="px-6 py-20 pcc-content-section" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-3xl mx-auto">
          <div style={{ display: "flex", flexDirection: "column", gap: "52px" }}>
            {SETS.map((p) => (
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
            {RELATED.map((a) => <ArticleCard key={a.href} title={a.title} excerpt={a.excerpt} href={a.href} category={a.category} readTime={a.readTime} imageUrl={a.imageUrl} />)}
          </div>
        </div>
      </section>
      <CTASection title="Find a Pilates Studio Near You" subtitle="Discover the best reformer studios in your city." />
      <Footer />
    </>
  );
}
