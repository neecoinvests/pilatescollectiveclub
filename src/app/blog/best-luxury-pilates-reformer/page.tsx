import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Luxury Pilates Reformers for Home Studios (2026)",
  description: "The world's finest home Pilates reformers — Gratz, Balanced Body Studio, Peak Pilates MVe, Elina Pilates Elite, BASI Systems and Merrithew Rehab V2 Max Plus compared for craftsmanship, performance, and investment value.",
  keywords: [
    "best luxury pilates reformer",
    "best high end pilates reformer home",
    "gratz pilates reformer",
    "balanced body studio reformer",
    "peak pilates mve reformer",
    "elina pilates elite wood reformer",
    "investment pilates reformer 2026",
    "professional grade pilates reformer home studio",
  ],
  openGraph: {
    title: "Best Luxury Pilates Reformers for Home Studios (2026)",
    description: "Gratz, Balanced Body Studio, Peak Pilates MVe, and Elina Pilates — the investment-grade reformers for the serious home studio.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-luxury-pilates-reformer",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-reformer-morning-light.png", width: 1200, height: 630, alt: "Best Luxury Pilates Reformers 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Luxury Pilates Reformers for Home Studios (2026)",
    description: "Gratz, Balanced Body, Peak Pilates MVe, and Elina Pilates — investment-grade reformers for the serious home studio.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-reformer-morning-light.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-luxury-pilates-reformer" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Gratz Classic Reformer",
    price: "$4,645 (86\" aluminium)",
    verdict: "The Original",
    tag: "The Original",
    description: "Gratz Industries built apparatus for Joseph Pilates himself in New York, and its reformer is still made there, to order, in a design that has changed only in refinement. It comes in 80\", 86\" and 89\" lengths, in aluminium (the 86-inch Classic is $4,645) or as a maple Designer model, with the classical spring set, fixed geometry and firm upholstery that classical teachers are trained on. If you practise or teach the classical repertoire, this is the reference machine; contemporary practitioners may prefer the adjustability of Balanced Body or Merrithew. Sold direct from Gratz, not on Amazon; delivery and accessories are extra.",
    affiliateUrl: "https://www.gratzpilates.com/products/86-aluminum-reformer",
  },
  {
    rank: "02",
    name: "Balanced Body Studio Reformer (Revo Footbar)",
    price: "$4,700",
    verdict: "Best Professional Studio Grade",
    tag: "Commercial Grade",
    description: "The Studio Reformer is the machine you are most likely to have used in a contemporary studio, and the version Balanced Body sells on Amazon is the same commercial model. The frame is solid rock maple with commercial-grade upholstery; five Balanced Body springs give 46 resistance combinations; the Revo system adds a 4-position locking footbar and a 5-position springbar, and TwistLock shoulder rests make changes fast. It is built for daily professional use, which in a home means decades. Made to order: allow three to four weeks to ship.",
    affiliateUrl: "https://www.amazon.com/dp/B002XVWIFE?tag=pilatescollective-20",
  },
  {
    rank: "03",
    name: "Peak Pilates MVe Reformer",
    price: "$4,295 with box",
    verdict: "Best Stackable Studio Machine",
    tag: "American Precision",
    description: "Peak Pilates is a Colorado manufacturer, and the MVe is its studio-grade aluminium reformer. It runs five springs (one heavy, two medium, two light, with an optional extra-light) and adds details few stackable reformers have: retractable shoulder blocks, retractable risers and a gear-bar adjustment for fine-tuning carriage position. Because the frame stacks, it suits a home studio that may one day hold two machines. It sells direct at $4,295 with the Long/Short Box, and a Tower bundle is available if you want Cadillac-style work from the same frame.",
    affiliateUrl: "https://www.peakpilates.com/products/mve-reformer",
  },
  {
    rank: "04",
    name: "Elina Pilates Elite Wood Reformer",
    price: "$3,995",
    verdict: "Best European Design",
    tag: "European Craft",
    description: "Elina Pilates is a Spanish manufacturer, and the Elite Wood is its flagship home-and-studio reformer. The frame is rock maple; resistance comes from a six-spring system with a height-adjustable springbar and a 7-position quick-release footbar; the carriage rides on eight polyurethane wheels with precision bearings, which makes it one of the quieter machines here. Like the MVe, it stacks. At around $3,995 it is the lowest-priced machine on this list, and it is sold through Elina's US store and authorised dealers rather than Amazon.",
    affiliateUrl: "https://www.elinapilates.com/us/en/pilates-reformers/307-wood-reformer-for-pilates-elite.html",
  },
  {
    rank: "05",
    name: "BASI Systems Reformer",
    price: "From $6,850",
    verdict: "Best for Contemporary Pilates",
    tag: "Contemporary Standard",
    description: "BASI Systems equipment was developed with Rael Isacowitz, founder of BASI Pilates and one of the method's best-known contemporary educators, to support the BASI repertoire. The reformer runs on aircraft-grade aluminium tracks for a smooth, quiet carriage and adjusts for a wide range of body sizes. In the US it is sold only through the official distributor Bodynetworx: the full Reformer starts at $6,850, and the Compact Reformer (a shorter frame for smaller rooms) starts at $5,250. Not available on Amazon.",
    affiliateUrl: "https://bodynetworx.com/products/reformer",
  },
  {
    rank: "06",
    name: "Merrithew Rehab V2 Max Plus Reformer",
    price: "$8,199",
    verdict: "Best Clinical Pedigree",
    tag: "Clinical Grade",
    description: "Merrithew (the company behind STOTT PILATES) builds the V2 Max Plus for studios, hospitals and physiotherapy clinics, and the Rehab version raises the frame so getting on and off is easier, which is why clinics buy it. It includes the Vertical Frame, making it a reformer and near-complete Cadillac in one; it runs high-precision springs and Merrithew's patented Retractable Rope System; and it offers three gearbar, six carriage-stopper, three headrest and four footbar positions. It is CE-marked as a Class I medical device in Europe. Sold by Merrithew on Amazon and made to order. The most expensive machine here, and the most versatile.",
    affiliateUrl: "https://www.amazon.com/dp/B002ABYKFI?tag=pilatescollective-20",
  },
];

const FAQS = [
  {
    q: "What is the difference between a luxury reformer and a premium reformer?",
    a: "Premium reformers (typically $800–$2,500) are built to rigorous residential standards with quality frames and reliable spring systems. Luxury reformers (roughly $4,000–$8,000+) are the machines professional studios and clinics buy: maple or aluminium frames built for daily commercial use, precision springs, finer adjustability, and manufacturer support and parts that let you service the machine for decades rather than replace it.",
  },
  {
    q: "Is a Gratz reformer worth the price?",
    a: "For classical Pilates practitioners and collectors, yes. Gratz reformers are hand-built in New York to specifications inherited directly from Joseph Pilates, which gives them a lineage no other manufacturer can claim. They hold their value well on the used market, parts remain available from Gratz, and the feel of the classical springs and fixed geometry is exactly what classical teachers train on. If you practise contemporary Pilates, a Balanced Body or Merrithew machine will usually suit you better.",
  },
  {
    q: "What should I consider before buying a luxury Pilates reformer?",
    a: "Space: full-size reformers are roughly 8 feet long and 2–2.5 feet wide, and you want about 2–3 feet of clear floor around them (more if you add a tower or vertical frame). Flooring: hardwood, stone or firm vinyl is ideal; avoid deep-pile carpet. Delivery: most of these machines are made to order and ship by freight, so allow several weeks. Maintenance: manufacturers recommend replacing springs every one to two years with home use, and cleaning rails and wheels regularly.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Best Luxury Pilates Reformers for Home Studios (2026)",
      description: "The world's finest home Pilates reformers — Gratz, Balanced Body Studio, Peak Pilates MVe, Elina Pilates, BASI Systems and Merrithew compared for craftsmanship, performance, and investment value.",
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
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*This page contains affiliate links. We may earn a commission if you purchase through our links, at no extra cost to you. Several luxury reformers are sold only direct from the manufacturer; for those we link to the maker&apos;s own store. Prices checked September 2026.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              At the summit of the Pilates equipment market sits a small number of machines built to a standard that has nothing to do with price sensitivity. Gratz, Balanced Body Studio, Peak Pilates MVe, and Elina Pilates each represent decades of manufacturing craft, precision engineering, and a commitment to the Pilates method that commercial activewear brands cannot replicate.
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Luxury Reformers · Investment Grade</p>
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
