import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Luxury Pilates Reformers for Home Studios (2026)",
  description: "The finest Pilates reformers available on Amazon — Balanced Body's full Studio and Rialto luxury line, plus Merrithew's Rehab V2 Max Plus, compared for craftsmanship, performance, and investment value.",
  keywords: [
    "best luxury pilates reformer",
    "best high end pilates reformer home",
    "balanced body studio reformer",
    "balanced body rialto reformer",
    "merrithew rehab v2 max plus",
    "reformer with tower and mat conversion",
    "investment pilates reformer 2026",
    "professional grade pilates reformer home studio",
  ],
  openGraph: {
    title: "Best Luxury Pilates Reformers for Home Studios (2026)",
    description: "Balanced Body's Studio and Rialto luxury line, plus Merrithew's Rehab V2 Max Plus — the investment-grade reformers for the serious home studio, all available on Amazon.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-luxury-pilates-reformer",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-reformer-morning-light.png", width: 1200, height: 630, alt: "Best Luxury Pilates Reformers 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Luxury Pilates Reformers for Home Studios (2026)",
    description: "Balanced Body Studio and Rialto, plus Merrithew Rehab V2 Max Plus — investment-grade reformers for the serious home studio.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-reformer-morning-light.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-luxury-pilates-reformer" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Balanced Body Studio Reformer with Tower and Mat Conversion",
    price: "$6,975",
    verdict: "The Most Complete Apparatus",
    tag: "3-in-1 System",
    description: "This is the top of Balanced Body's line: the commercial Studio Reformer with a hand-crafted stainless steel Tower and a Mat Conversion built in, so one frame gives you reformer, Cadillac-style tower work and elevated mat training. The hand-built Strata Rock Maple frame carries 5 Reformer Signature Springs plus 8 Tower Signature Springs with snap hooks, a Revo footbar, and it ships with a sitting box, D-ring loops and neoprene handles. If you only ever buy one piece of equipment, this is the one that replaces an entire studio corner. Sold direct by Balanced Body on Amazon; made to order.",
    affiliateUrl: "https://www.amazon.com/dp/B01NAUBYBF?tag=pilatescollective-20",
  },
  {
    rank: "02",
    name: "Merrithew Rehab V2 Max Plus Reformer",
    price: "$8,199",
    verdict: "Best Clinical Pedigree",
    tag: "Clinical Grade",
    description: "Merrithew (the company behind STOTT PILATES) builds the V2 Max Plus for studios, hospitals and physiotherapy clinics, and the Rehab version raises the frame so getting on and off is easier, which is why clinics buy it. It includes the Vertical Frame, making it a reformer and near-complete Cadillac in one; it runs high-precision springs and Merrithew's patented Retractable Rope System; and it offers three gearbar, six carriage-stopper, three headrest and four footbar positions. It is CE-marked as a Class I medical device in Europe. Sold by Merrithew on Amazon and made to order. The most expensive machine here.",
    affiliateUrl: "https://www.amazon.com/dp/B002ABYKFI?tag=pilatescollective-20",
  },
  {
    rank: "03",
    name: "Balanced Body Studio Reformer with XSR Footbar",
    price: "$4,850",
    verdict: "Most Adjustable Footbar",
    tag: "Commercial Grade",
    description: "The same solid Strata Rock Maple Studio Reformer, built with the XSR footbar instead of the standard Revo — a wider range of footbar and springbar positions for practitioners who want to fine-tune leg and foot placement precisely. It keeps the TwistLock shoulder rests, the weight-bearing and adjustable-wheel carriage system, and the 5 Signature Springs. Sold direct by Balanced Body on Amazon; made to order.",
    affiliateUrl: "https://www.amazon.com/dp/B0CQZ1KCKY?tag=pilatescollective-20",
  },
  {
    rank: "04",
    name: "Balanced Body Studio Reformer (Revo Footbar)",
    price: "$4,700",
    verdict: "Best Professional Studio Grade",
    tag: "Commercial Grade",
    description: "The Studio Reformer is the machine you are most likely to have used in a contemporary studio, and the version Balanced Body sells on Amazon is the same commercial model. The frame is solid rock maple with commercial-grade upholstery; five Balanced Body springs give 46 resistance combinations; the Revo system adds a 4-position locking footbar and a 5-position springbar, and TwistLock shoulder rests make changes fast. It is built for daily professional use, which in a home means decades. Made to order: allow three to four weeks to ship.",
    affiliateUrl: "https://www.amazon.com/dp/B002XVWIFE?tag=pilatescollective-20",
  },
  {
    rank: "05",
    name: "Balanced Body Rialto Reformer with Tower and Mat Conversion",
    price: "$4,230",
    verdict: "Best 3-in-1 at a Lower Price",
    tag: "3-in-1 System",
    description: "Balanced Body's Rialto line is built to the same reformer-plus-tower-plus-mat concept as the flagship Studio Reformer, at a lower price. The included tower has 29 spring attachment points, a wood roll-down bar and an attached push-through bar, with 8 Tower Signature Springs, and the reformer runs 5 Signature Springs with a 5-position footbar. It ships with a Sitting Box Lite and a footstrap. If you want the versatility of a Cadillac without the Studio Reformer's price, this is it. Sold direct by Balanced Body on Amazon.",
    affiliateUrl: "https://www.amazon.com/dp/B08CR4XZWD?tag=pilatescollective-20",
  },
  {
    rank: "06",
    name: "Balanced Body Rialto Reformer with Sitting Box Lite",
    price: "$3,495",
    verdict: "Most Accessible Luxury Entry Point",
    tag: "Entry Luxury",
    description: "The reformer-only version of the Rialto is the lowest-priced way into Balanced Body's luxury line. Cushioned padding on the carriage and head/shoulder rests, a secure 5-position footbar, a 3-position no-roll springbar, and the same 5 Signature Springs as the rest of the range give genuine studio-grade performance. It comes with a Sitting Box Lite included. If your budget tops out before the Studio Reformer or the Tower bundles, start here. Sold direct by Balanced Body on Amazon.",
    affiliateUrl: "https://www.amazon.com/dp/B08CS2FYGB?tag=pilatescollective-20",
  },
];

const FAQS = [
  {
    q: "What is the difference between a luxury reformer and a premium reformer?",
    a: "Premium reformers (typically $800–$2,500) are built to rigorous residential standards with quality frames and reliable spring systems. Luxury reformers (roughly $3,500–$8,200) are the machines professional studios and clinics buy: solid maple frames built for daily commercial use, precision springs, tower and mat-conversion options, and manufacturer support and parts that let you service the machine for decades rather than replace it.",
  },
  {
    q: "What's the difference between the Studio Reformer and the Rialto?",
    a: "Both are genuine Balanced Body luxury reformers sold direct through Amazon. The Studio Reformer is the commercial flagship: it's the machine most contemporary studios actually run, with the widest accessory compatibility. The Rialto is Balanced Body's slightly more affordable luxury line, using the same 5 Signature Springs and comparable build quality at a lower price point. Both are available with a Tower and Mat Conversion if you want reformer, Cadillac-style tower work and elevated mat training from one frame.",
  },
  {
    q: "What should I consider before buying a luxury Pilates reformer?",
    a: "Space: full-size reformers are roughly 8 feet long and 2–2.5 feet wide, and you want about 2–3 feet of clear floor around them (more if you add a tower or vertical frame). A Tower and Mat Conversion adds height, so check your ceiling clearance too. Flooring: hardwood, stone or firm vinyl is ideal; avoid deep-pile carpet. Delivery: most of these machines are made to order and ship by freight, so allow several weeks. Maintenance: manufacturers recommend replacing springs every one to two years with home use, and cleaning rails and wheels regularly.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Best Luxury Pilates Reformers for Home Studios (2026)",
      description: "The finest Pilates reformers available on Amazon — Balanced Body's Studio and Rialto luxury line, plus Merrithew's Rehab V2 Max Plus, compared for craftsmanship, performance, and investment value.",
      url: "https://pilatescollectiveclub.com/blog/best-luxury-pilates-reformer",
      datePublished: "2026-07-06",
      dateModified: "2026-09-22",
      image: "https://pilatescollectiveclub.com/pictures/stitch-reformer-morning-light.png",
      author: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com" },
      publisher: { "@type": "Organization", name: "Pilates Collective Club", logo: { "@type": "ImageObject", url: "https://pilatescollectiveclub.com/logo.png" } },
      mainEntityOfPage: "https://pilatescollectiveclub.com/blog/best-luxury-pilates-reformer",
    },
    {
      "@type": "ItemList",
      name: "Best Luxury Pilates Reformers for Home Studios",
      numberOfItems: PRODUCTS.length,
      itemListElement: PRODUCTS.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.name, url: p.affiliateUrl })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", position: 2, name: "Journal", item: "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", position: 3, name: "Best Luxury Pilates Reformers", item: "https://pilatescollectiveclub.com/blog/best-luxury-pilates-reformer" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function BestLuxuryPilatesReformerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>

        {/* Hero section */}
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Equipment</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Luxury Reformers</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Luxury Pilates Reformers<br /><span style={{ color: "#8b4a31" }}>for Home Studios (2026)</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 11 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*This page contains affiliate links. We may earn a commission if you purchase through our links, at no extra cost to you. Every reformer in this guide is sold direct through Amazon. Prices checked September 2026.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              At the summit of the Pilates equipment market sits a small number of machines built to a standard that has nothing to do with price sensitivity. Balanced Body&apos;s Studio and Rialto lines, and Merrithew&apos;s clinical-grade Rehab V2 Max Plus, represent decades of manufacturing craft and precision engineering — and, unlike most boutique reformer makers, they&apos;re sold direct through Amazon rather than only through a dealer network.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              These are machines built to last thirty years in commercial studio environments, now available to the serious home practitioner. They are not the first reformer most people buy — they are often the last.
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-reformer-morning-light.png" alt="Best Luxury Pilates Reformers 2026" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            {/* Quick reference table */}
            <div className="mb-10 overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
              <div className="px-6 py-4" style={{ backgroundColor: "#f6f3f2" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Quick Picks — At a Glance</p>
              </div>
              {PRODUCTS.map((p, i) => (
                <div key={p.name} className="flex items-center gap-3 sm:gap-4 px-6 py-4" style={{ borderTop: i === 0 ? "none" : "1px solid rgba(217,194,186,0.25)", backgroundColor: "#ffffff" }}>
                  <span className="text-base font-semibold w-7 shrink-0 text-center" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{p.rank}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold leading-tight" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{p.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{p.verdict}</p>
                  </div>
                  <span className="text-xs font-semibold hidden md:block shrink-0 mr-3" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{p.price}</span>
                  <a href={p.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow"
                    style={{ display: "block", fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "10px 14px", whiteSpace: "nowrap", flexShrink: 0 }}
                  >Buy →</a>
                </div>
              ))}
            </div>

            {/* Product cards */}
            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Luxury Reformers · $3,495 to $8,199</p>
              <div className="space-y-12">
                {PRODUCTS.map((p) => (
                  <div key={p.name}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-semibold" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{p.rank}</span>
                      <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{p.tag}</span>
                      <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>{p.verdict}</span>
                    </div>
                    <ProductCard
                      name={p.name}
                      description={p.description}
                      price={p.price}
                      affiliateUrl={p.affiliateUrl}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {FAQS.map((item) => (
                  <div key={item.q} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.q}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Further reading */}
            <div>
              <h2 className="text-2xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="Best Luxury Pilates Accessories" excerpt="STOTT Fitness Circle Pro, TriggerPoint GRID 2.0, the Balanced Body Pilates Arc — premium small equipment for the serious practitioner." href="/blog/best-luxury-pilates-accessories" category="Equipment" readTime="9 min" imageUrl="/pictures/stitch-props-cork-ring.png" />
                <ArticleCard title="Best Premium Pilates Reformer" excerpt="The best reformers at the $800–$2,500 tier — Merrithew SPX, Align Pilates, and more for serious home practitioners." href="/blog/best-premium-pilates-reformer" category="Equipment" readTime="10 min" imageUrl="/pictures/stitch-reformers-aerial-row.png" />
              </div>
            </div>

          </div>
        </section>

        <CTASection title="Find Your Studio" subtitle="Discover the world's finest Pilates and reformer studios." />

      </main>
      <Footer />
    </>
  );
}
