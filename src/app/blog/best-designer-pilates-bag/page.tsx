import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Designer & Luxury Pilates Bags (2026) | Pilates Collective Club",
  description: "The finest bags for Pilates practitioners — Lululemon, Alo Yoga, Sweaty Betty, Adidas by Stella McCartney, Varley, and Herschel compared for structure, capacity, and studio-to-life versatility.",
  keywords: [
    "best luxury pilates bag",
    "designer gym bag pilates",
    "best pilates studio bag luxury",
    "high end pilates bag women",
    "designer pilates bag 2026",
    "alo yoga gym bag",
    "sweaty betty pilates bag",
    "best designer gym bag pilates",
  ],
  openGraph: {
    title: "Best Designer & Luxury Pilates Bags (2026)",
    description: "The finest bags for Pilates — Lululemon, Alo, Sweaty Betty, Stella McCartney, and Varley compared for structure, capacity, and studio-to-life versatility.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-designer-pilates-bag",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-studio-changing-area.png", width: 1200, height: 630, alt: "Best Designer Pilates Bags 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Designer & Luxury Pilates Bags (2026)",
    description: "The finest bags for Pilates — Lululemon, Alo, Sweaty Betty, and Stella McCartney compared.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-studio-changing-area.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-designer-pilates-bag" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Lululemon Everywhere Belt Bag (Large)",
    price: "$48",
    verdict: "Best Compact Luxury",
    description: "The Lululemon Everywhere Belt Bag has become one of the most recognisable accessories in the global Pilates community — a cultural artefact as much as a functional bag. The large version holds a phone, keys, card, grip socks, and a small snack, making it the perfect companion for studio-only days. Water-resistant, machine-washable, and available in a meticulously curated seasonal palette. The entry point to luxury Pilates accessories.",
    affiliateUrl: "https://www.amazon.com/s?k=lululemon+everywhere+belt+bag+large&tag=pilatescollective-20",
    tag: "Icon",
  },
  {
    rank: "02",
    name: "Alo Yoga Lifestyle Backpack",
    price: "$148",
    verdict: "Best Premium Backpack",
    description: "Alo's Lifestyle Backpack is engineered for the practitioner who moves from studio to workplace without changing bags. The interior is organised for gym kit — a padded laptop sleeve, separated shoe compartment, and a large main compartment that swallows a reformer towel, spare outfit, and full-sized water bottle. The exterior has Alo's signature matte finish and minimal hardware. An investment piece that reads as luxury streetwear.",
    affiliateUrl: "https://www.amazon.com/s?k=alo+yoga+lifestyle+backpack&tag=pilatescollective-20",
    tag: "Premium Backpack",
  },
  {
    rank: "03",
    name: "Sweaty Betty Power Gym Bag",
    price: "$130",
    verdict: "Best British Luxury",
    description: "Sweaty Betty's Power Gym Bag is the most practical luxury gym bag on this list. The British brand's attention to functional detail is exceptional — a water-resistant base, ventilated shoe pocket, wet/dry compartment for post-class kit, internal organiser pockets, and a padded shoulder strap. Available in seasonal colourways that are design-forward without sacrificing versatility. Holds a mat, outfit, shoes, and toiletries comfortably.",
    affiliateUrl: "https://www.amazon.com/s?k=sweaty+betty+power+gym+bag&tag=pilatescollective-20",
    tag: "British Luxury",
  },
  {
    rank: "04",
    name: "Adidas by Stella McCartney Studio Bag",
    price: "$160",
    verdict: "Best Designer Collaboration",
    description: "The Adidas by Stella McCartney collaboration represents the highest-profile meeting of fashion and athletic function in activewear. The Studio Bag is made from partially recycled materials without sacrificing the structural integrity or refined aesthetic of a luxury accessory. Stella McCartney's signature commitment to sustainability — no leather, no fur, no animal products — is built into every detail. A bag that belongs in both the studio changing room and the front row.",
    affiliateUrl: "https://www.amazon.com/s?k=adidas+by+stella+mccartney+studio+gym+bag&tag=pilatescollective-20",
    tag: "Designer Collab",
  },
  {
    rank: "05",
    name: "Varley Perry Holdall",
    price: "$145",
    verdict: "Best Studio-to-Street",
    description: "Varley's Perry Holdall is the brand's answer to the perfect studio bag — structured enough to stand upright, large enough to hold a complete Pilates kit, and refined enough to pass for a weekend travel bag. The interior is fully lined, the base is reinforced, and the matte hardware is consistent with Varley's minimal luxury aesthetic throughout. Available in their signature neutral palette. A considered investment for the practitioner who cares about every detail.",
    affiliateUrl: "https://www.amazon.com/s?k=varley+holdall+gym+bag+women&tag=pilatescollective-20",
    tag: "Studio-to-Street",
  },
  {
    rank: "06",
    name: "Herschel Supply Novel Duffle Bag",
    price: "$100",
    verdict: "Best Accessible Luxury",
    description: "Herschel Supply's Novel Duffle occupies the sweet spot between premium and accessible — well-made, beautifully designed, and priced at the entry point to investment bags. The shoe compartment, interior pockets, and water-resistant construction cover all functional requirements for a Pilates studio bag, while the clean canvas exterior reads as a lifestyle product rather than gym kit. A smart first step into luxury studio accessories.",
    affiliateUrl: "https://www.amazon.com/s?k=herschel+supply+novel+duffle+bag&tag=pilatescollective-20",
    tag: "Accessible Luxury",
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
      dateModified: "2026-07-06",
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
        { "@type": "Question", name: "Which designer brands make the best Pilates bags?", acceptedAnswer: { "@type": "Answer", text: "The activewear brands Sweaty Betty, Alo Yoga, and Varley produce the most Pilates-specific luxury bags — designed with studio use cases in mind rather than general fitness. For fashion-forward luxury, the Adidas by Stella McCartney collection offers designer credibility with genuine athletic function. Lululemon's belt bag, while not a full gym bag, has become the definitive luxury Pilates accessory." } },
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
                    Shop on Amazon
                  </a>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "64px" }}>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", fontWeight: 400, color: "#1a1714", marginBottom: "32px" }}>Frequently Asked Questions</h2>
              {[
                { q: "What should a luxury Pilates bag include?", a: "A well-designed luxury Pilates bag should have: a main compartment large enough for a rolled mat (or a separate mat sleeve), a separated shoe or wet-kit pocket, internal pockets for keys, card, and phone, water-resistant base material, and a strap configuration comfortable enough for a 20-minute walk to the studio. Bonus: a towel loop, external water bottle pocket, and a padded shoulder strap." },
                { q: "Is a luxury gym bag a worthwhile investment for Pilates?", a: "Yes, in the same way that a quality mat or legging is worthwhile. A luxury bag made from quality materials will outlast three or four budget alternatives, meaning the cost per year of ownership is comparable or lower. More importantly, a bag you love using reinforces the ritual and intentionality that makes a regular Pilates practice sustainable." },
                { q: "Which designer brands make the best Pilates bags?", a: "The activewear brands Sweaty Betty, Alo Yoga, and Varley produce the most Pilates-specific luxury bags — designed with studio use cases in mind rather than general fitness. For fashion-forward luxury, the Adidas by Stella McCartney collection offers designer credibility with genuine athletic function. Lululemon's belt bag, while not a full gym bag, has become the definitive luxury Pilates accessory." },
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
