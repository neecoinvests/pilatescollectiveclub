import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Designer & Luxury Pilates Bags (2026)",
  description: "The finest bags for Pilates practitioners — Tory Burch, Marc Jacobs, Varley, Herschel, Stoney Clover Lane and BAGGU compared for structure, capacity, and studio-to-life versatility, all available on Amazon.",
  keywords: [
    "best luxury pilates bag",
    "designer gym bag pilates",
    "best pilates studio bag luxury",
    "high end pilates bag women",
    "designer pilates bag 2026",
    "tory burch ella tote gym",
    "varley duffle bag",
    "best designer gym bag pilates",
  ],
  openGraph: {
    title: "Best Designer & Luxury Pilates Bags (2026)",
    description: "The finest bags for Pilates — Tory Burch, Marc Jacobs, Varley, Herschel and Stoney Clover Lane compared for structure, capacity, and studio-to-life versatility.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-designer-pilates-bag",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-studio-changing-area.png", width: 1200, height: 630, alt: "Best Designer Pilates Bags 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Designer & Luxury Pilates Bags (2026)",
    description: "The finest bags for Pilates — Tory Burch, Marc Jacobs, Varley, Herschel and Stoney Clover Lane compared.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-studio-changing-area.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-designer-pilates-bag" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Tory Burch Ella Tote",
    price: "$260",
    verdict: "Best Designer Tote",
    description: "The Ella is Tory Burch's lightweight nylon tote, and it has quietly become the bag of choice for people who go from reformer class to the office. At 17 × 13 × 5 inches it swallows a change of clothes, grip socks, a water bottle and a laptop, it weighs only 24 oz empty, and the nylon wipes clean if a bottle leaks. It won't hold a rolled mat, so pair it with a mat strap if you bring your own. Sold by Shopbop (an Amazon company).",
    affiliateUrl: "https://www.amazon.com/dp/B0FR9ZHQKF?tag=pilatescollective-20",
    tag: "Designer",
  },
  {
    rank: "02",
    name: "Marc Jacobs The Large Puffy Tote",
    price: "$298",
    verdict: "Best Statement Bag",
    description: "Marc Jacobs' The Tote is one of the most recognisable carryalls of the decade, and the Puffy version is the light, padded-nylon take that suits a studio day. It measures 15 × 12.5 × 7 inches, deeper than most totes, so a folded towel, trainers and a change of clothes fit without a fight, and it weighs just 13 oz. The branding is unmistakable, which is either the point or not your style. Sold by Shopbop (an Amazon company).",
    affiliateUrl: "https://www.amazon.com/dp/B0GXXH5KSV?tag=pilatescollective-20",
    tag: "Statement",
  },
  {
    rank: "03",
    name: "Varley Montlake Club Duffle",
    price: "$164",
    verdict: "Best Studio-to-Street Duffle",
    description: "Varley's Montlake Club Duffle is the studio bag from the brand that dresses so many reformer regulars. It's structured, with leather trim, gold-tone hardware and retro contrast stripes, and at 17.25 × 15 × 7 inches it holds a full Pilates kit plus shoes. Carry it by the handles or on the adjustable shoulder strap. Sold by Shopbop (an Amazon company); stock by colour is limited.",
    affiliateUrl: "https://www.amazon.com/dp/B0GGGLLGG1?tag=pilatescollective-20",
    tag: "Studio-to-Street",
  },
  {
    rank: "04",
    name: "Herschel Novel Duffle (43L)",
    price: "$110",
    verdict: "Best Accessible Luxury",
    description: "The Novel is Herschel's signature duffle, and its best feature for Pilates is the separate zippered shoe compartment in the end panel, which keeps trainers and damp kit away from clean clothes. The 43-litre body (20.5 × 11.75 × 11 inches) is roomy enough for a weekend, the 600D fabric is made from recycled polyester, and the zips are waterproof. Clean, low-key styling with vegan leather handles. Sold and shipped by Amazon.",
    affiliateUrl: "https://www.amazon.com/dp/B0C3B2TWFN?tag=pilatescollective-20",
    tag: "Best Value",
  },
  {
    rank: "05",
    name: "Stoney Clover Lane Clear Pouchette Crossbody",
    price: "$78",
    verdict: "Best Compact Bag",
    description: "Stoney Clover Lane's Clear Pouchette has become one of the most-photographed small bags in studio changing rooms, and it's sold direct by Amazon.com. Clear vinyl with a PU leather trim holds a phone, keys, cards and grip socks so you can see what's inside at a glance, and the adjustable, removable crossbody strap (42–46.5 inches) means it also works as a top-handle pouch. A zipper-and-snap closure keeps it secure on the move to class.",
    affiliateUrl: "https://www.amazon.com/dp/B0D5P7569S?tag=pilatescollective-20",
    tag: "Compact",
  },
  {
    rank: "06",
    name: "BAGGU Cloud Bag",
    price: "$62",
    verdict: "Best Lightweight Carryall",
    description: "BAGGU's puffy nylon Cloud Bag is light, squashy and surprisingly roomy (12.75 × 13.75 × 8 inches), with a top zip and an exterior pocket. It's big enough for a studio change of clothes and a towel, and when you don't need it, it packs into its own detachable interior pouch. The colours are the fun part. Sold by BAGGU on Amazon.",
    affiliateUrl: "https://www.amazon.com/dp/B0FMC4PJM8?tag=pilatescollective-20",
    tag: "Lightweight",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Best Designer & Luxury Pilates Bags (2026)",
      description: "The finest bags for Pilates practitioners — compared for structure, capacity, and studio-to-life versatility.",
      url: "https://pilatescollectiveclub.com/blog/best-designer-pilates-bag",
      datePublished: "2026-07-06",
      dateModified: "2026-09-22",
      image: "https://pilatescollectiveclub.com/pictures/stitch-studio-changing-area.png",
      author: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com" },
      publisher: { "@type": "Organization", name: "Pilates Collective Club", logo: { "@type": "ImageObject", url: "https://pilatescollectiveclub.com/logo.png" } },
      mainEntityOfPage: "https://pilatescollectiveclub.com/blog/best-designer-pilates-bag",
    },
    {
      "@type": "ItemList",
      name: "Best Designer & Luxury Pilates Bags",
      numberOfItems: 6,
      itemListElement: PRODUCTS.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.name, url: p.affiliateUrl })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", position: 2, name: "Journal", item: "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", position: 3, name: "Best Designer & Luxury Pilates Bags", item: "https://pilatescollectiveclub.com/blog/best-designer-pilates-bag" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What should a luxury Pilates bag include?", acceptedAnswer: { "@type": "Answer", text: "A well-designed luxury Pilates bag should have: a main compartment large enough for a rolled mat (or a separate mat sleeve), a separated shoe or wet-kit pocket, internal pockets for keys, card, and phone, water-resistant base material, and a strap configuration comfortable enough for a 20-minute walk to the studio. Bonus: a towel loop, external water bottle pocket, and a padded shoulder strap." } },
        { "@type": "Question", name: "Is a luxury gym bag a worthwhile investment for Pilates?", acceptedAnswer: { "@type": "Answer", text: "Yes, in the same way that a quality mat or legging is worthwhile. A luxury bag made from quality materials will outlast three or four budget alternatives, meaning the cost per year of ownership is comparable or lower. More importantly, a bag you love using reinforces the ritual and intentionality that makes a regular Pilates practice sustainable." } },
        { "@type": "Question", name: "Which designer brands make the best Pilates bags?", acceptedAnswer: { "@type": "Answer", text: "Varley makes the most studio-specific luxury bags, like the Montlake Club Duffle. For fashion-house credibility, Tory Burch's nylon Ella Tote and Marc Jacobs' The Tote are the two designer carryalls you'll see most in studio changing rooms. Herschel's Novel Duffle is the best value, thanks to its separate shoe compartment, and Stoney Clover Lane's Clear Pouchette has become one of the most popular small bags for class." } },
      ],
    },
  ],
};

export default function BestDesignerPilatesBagPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9a9490" }}>Studio Essentials</span>
              <span style={{ color: "#d4c5b5", fontSize: "10px" }}>·</span>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 400, color: "#b5a99a" }}>9 min read</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 400, lineHeight: 1.2, color: "#1a1714", marginBottom: "24px" }}>
              Best Designer &amp; Luxury Pilates Bags (2026)
            </h1>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "17px", fontWeight: 300, color: "#4a4540", lineHeight: 1.8, marginBottom: "16px" }}>
              The bag you carry to the studio is the first and last impression of your practice. For practitioners who have invested in premium kit, a considered bag completes the picture — and the right one transitions from studio changing room to board meeting without drawing a second glance.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "17px", fontWeight: 300, color: "#4a4540", lineHeight: 1.8, marginBottom: "20px" }}>
              We assessed six luxury and designer options for functional design, material quality, interior organisation, and the intangible quality of a bag that looks expensive without announcing itself.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "14px", fontWeight: 300, color: "#9a9490", lineHeight: 1.7, borderLeft: "2px solid #d4c5b5", paddingLeft: "16px" }}>
              This page contains affiliate links. We may earn a commission if you purchase through our links, at no extra cost to you.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-3xl mx-auto">
            <div style={{ position: "relative", height: "420px", borderRadius: "4px", overflow: "hidden" }}>
              <Image src="/pictures/stitch-studio-changing-area.png" alt="Best Designer Pilates Bags 2026" fill style={{ objectFit: "cover" }} priority />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <div style={{ backgroundColor: "#faf7f4", border: "1px solid #e8e0d6", borderRadius: "4px", padding: "28px 32px", marginBottom: "48px" }}>
              <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9a9490", marginBottom: "20px" }}>Quick Picks</h2>
              {PRODUCTS.map((p) => (
                <div key={p.rank} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingBottom: "12px", marginBottom: "12px", borderBottom: "1px solid #ede6dc" }}>
                  <div>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "10px", color: "#b5a99a", marginRight: "10px" }}>{p.rank}</span>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "14px", fontWeight: 400, color: "#1a1714" }}>{p.name}</span>
                  </div>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "12px", fontWeight: 300, color: "#9a9490" }}>{p.verdict}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
              {PRODUCTS.map((p) => (
                <div key={p.rank} style={{ borderTop: "1px solid #ede9e3", paddingTop: "36px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", marginBottom: "8px" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "14px" }}>
                      <span style={{ fontFamily: "var(--font-serif)", fontSize: "13px", color: "#c5a882" }}>{p.rank}</span>
                      <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", fontWeight: 400, color: "#1a1714", margin: 0 }}>{p.name}</h3>
                    </div>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "12px", color: "#c5a882", whiteSpace: "nowrap" }}>{p.price}</span>
                  </div>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#9a9490", display: "block", marginBottom: "14px" }}>{p.verdict}</span>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "15px", fontWeight: 300, color: "#4a4540", lineHeight: 1.8, marginBottom: "20px" }}>{p.description}</p>
                  <a href={p.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow" style={{ display: "inline-block", fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "13px 24px" }}>
                    {p.affiliateUrl.includes("amazon.com") ? "Shop on Amazon" : "Shop Direct"}
                  </a>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "64px" }}>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", fontWeight: 400, color: "#1a1714", marginBottom: "32px" }}>Frequently Asked Questions</h2>
              {[
                { q: "What should a luxury Pilates bag include?", a: "A well-designed luxury Pilates bag should have: a main compartment large enough for a rolled mat (or a separate mat sleeve), a separated shoe or wet-kit pocket, internal pockets for keys, card, and phone, water-resistant base material, and a strap configuration comfortable enough for a 20-minute walk to the studio. Bonus: a towel loop, external water bottle pocket, and a padded shoulder strap." },
                { q: "Is a luxury gym bag a worthwhile investment for Pilates?", a: "Yes, in the same way that a quality mat or legging is worthwhile. A luxury bag made from quality materials will outlast three or four budget alternatives, meaning the cost per year of ownership is comparable or lower. More importantly, a bag you love using reinforces the ritual and intentionality that makes a regular Pilates practice sustainable." },
                { q: "Which designer brands make the best Pilates bags?", a: "Varley makes the most studio-specific luxury bags, like the Montlake Club Duffle. For fashion-house credibility, Tory Burch's nylon Ella Tote and Marc Jacobs' The Tote are the two designer carryalls you'll see most in studio changing rooms. Herschel's Novel Duffle is the best value, thanks to its separate shoe compartment, and Stoney Clover Lane's Clear Pouchette has become one of the most popular small bags for class." },
              ].map((item) => (
                <div key={item.q} style={{ borderTop: "1px solid #ede6dc", paddingTop: "24px", paddingBottom: "24px" }}>
                  <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "15px", fontWeight: 500, color: "#1a1714", marginBottom: "10px" }}>{item.q}</h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "14px", fontWeight: 300, color: "#4a4540", lineHeight: 1.75 }}>{item.a}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "64px" }}>
              <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9a9490", marginBottom: "28px" }}>Further Reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="Best Pilates Studio Bag for Women" excerpt="The full bag roundup — totes, duffles, and backpacks for every budget and studio type." href="/blog/best-pilates-studio-bag-women" category="Studio Essentials" readTime="8 min" imageUrl="/pictures/stitch-studio-changing-area.png" />
                <ArticleCard title="Best Luxury Pilates Leggings (2026)" excerpt="Wolford, Splits59, Varley, and Alo Yoga — the investment-grade leggings for serious practitioners." href="/blog/best-luxury-pilates-leggings" category="Clothing" readTime="10 min" imageUrl="/pictures/stitch-retail-activewear.png" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find Your Studio" subtitle="Discover the world's finest Pilates and reformer studios." showSearch searchPlaceholder="Search by city or neighbourhood..." />
      </main>
      <Footer />
    </>
  );
}
