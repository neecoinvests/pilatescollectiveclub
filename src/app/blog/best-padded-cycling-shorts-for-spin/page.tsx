import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Padded Cycling Shorts for Spin Class (2026) | Pilates Collective Club",
  description: "The best padded cycling shorts for indoor spin class — chamois quality, compression fit, and breathability compared across women's and men's options for long studio sessions.",
  keywords: ["best padded cycling shorts", "spin class shorts 2026", "chamois padded shorts indoor cycling", "womens cycling shorts spin", "mens padded bike shorts", "best chamois for spin class", "compression cycling shorts review"],
  openGraph: {
    title: "Best Padded Cycling Shorts for Spin Class (2026)",
    description: "Padded cycling shorts compared for chamois quality, compression fit, and breathability.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-padded-cycling-shorts-for-spin",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/jade-stephens-N21356amsyw-unsplash.jpg", width: 1200, height: 630, alt: "Best Padded Cycling Shorts for Spin Class 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Padded Cycling Shorts for Spin Class (2026)",
    description: "Padded cycling shorts compared for indoor spin class comfort and fit.",
    images: ["https://pilatescollectiveclub.com/pictures/jade-stephens-N21356amsyw-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-padded-cycling-shorts-for-spin" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Baleaf Women's High Waisted Padded Cycling Shorts",
    price: "From $32",
    verdict: "Best overall women's pick",
    description:
      "The Baleaf high-waisted short pairs a multi-density 3D chamois pad with a four-way stretch compression fabric, and the high-rise waistband stays in place through standing climbs and out-of-saddle intervals without rolling — a common complaint with lower-rise shorts during high-intensity spin. The chamois is foam-based rather than gel, which breathes better over a 45-60 minute class but provides slightly less cushioning than premium gel pads for very long rides. Side pockets fit a phone or key, useful since most spin classes don't have storage at the bike. For studio-length sessions, this is the strongest all-around value in women's padded shorts.",
    affiliateUrl: "https://www.amazon.com/s?k=baleaf+womens+padded+cycling+shorts&tag=pilatescollective-20",
    tag: "Best Overall (Women's)",
  },
  {
    rank: "02",
    name: "Pearl Izumi Men's Quest Cycling Shorts",
    price: "From $70",
    verdict: "Best overall men's pick",
    description:
      "Pearl Izumi is a heritage cycling brand and the Quest short reflects that — a multi-panel anatomical chamois designed around sustained pedaling position rather than a generic insert, with a wide elastic waistband and gripper leg hem that stays put without compressing uncomfortably. The fabric is rated UPF 50+ and wicks moisture aggressively, which matters in a heated or high-output spin studio. The price sits well above budget options, but the chamois quality and fit precision are noticeably better for riders doing multiple weekly sessions.",
    affiliateUrl: "https://www.amazon.com/s?k=pearl+izumi+mens+quest+cycling+shorts&tag=pilatescollective-20",
    tag: "Best Overall (Men's)",
  },
  {
    rank: "03",
    name: "Tiem Cadence Bike Short",
    price: "From $98",
    verdict: "Best studio-specific design",
    description:
      "Like its shoe line, Tiem designs the Cadence short specifically around the boutique studio cycling experience rather than outdoor road riding — meaning a shorter, more flattering inseam length appropriate for studio wear and a chamois calibrated for 45-60 minute sessions rather than multi-hour rides. The compression fabric has a matte, non-shiny finish that reads as athleisure rather than overt cycling gear, which some studio-goers prefer for the walk to and from class. The price reflects the boutique positioning, but the fit and finish are genuinely premium.",
    affiliateUrl: "https://www.amazon.com/s?k=tiem+cadence+cycling+shorts&tag=pilatescollective-20",
    tag: "Best Studio Design",
  },
  {
    rank: "04",
    name: "ZOIC Men's Essential Cycling Shorts",
    price: "From $55",
    verdict: "Best looser-fit option",
    description:
      "Not every rider wants a skin-tight compression short, and ZOIC's Essential addresses that with a looser mountain-bike-style outer short over a removable padded liner — effectively two garments in one. This construction allows the outer layer to look like a normal athletic short while the inner liner provides the chamois padding, and the liner can be removed for non-cycling workouts. For riders who find traditional compression cycling shorts too tight or revealing for a mixed-use gym bag, this hybrid design is the most comfortable alternative without sacrificing chamois support.",
    affiliateUrl: "https://www.amazon.com/s?k=zoic+essential+cycling+shorts&tag=pilatescollective-20",
    tag: "Best Loose Fit",
  },
  {
    rank: "05",
    name: "Baleaf Men's 3D Padded Cycling Shorts",
    price: "From $28",
    verdict: "Best budget men's pick",
    description:
      "The men's counterpart to Baleaf's women's short, this budget option uses the same 3D foam chamois construction at a price well below premium brands like Pearl Izumi. Compression fit is snug without being restrictive, and the fabric breathes adequately for studio-length sessions. The chamois pad is noticeably thinner than the Pearl Izumi Quest, which is the main trade-off — fine for 2-3 sessions a week but riders training daily may find the padding wears thin faster. For occasional spin riders or those testing whether padded shorts improve their comfort before investing in a premium pair, this is the lowest-risk entry point.",
    affiliateUrl: "https://www.amazon.com/s?k=baleaf+mens+padded+cycling+shorts&tag=pilatescollective-20",
    tag: "Best Budget Pick",
  },
  {
    rank: "06",
    name: "CHICTRY Women's Cycling Bib Shorts",
    price: "From $45",
    verdict: "Best for waistband-free comfort",
    description:
      "Bib shorts replace the elastic waistband with shoulder straps, eliminating the waist compression and digging that some riders experience during seated climbs and intense intervals. The CHICTRY bib uses a gel-foam hybrid chamois and a breathable mesh back panel. The trade-off is practicality — bibs are less convenient for bathroom breaks than standard shorts, a relevant consideration outside the studio. For riders who specifically struggle with waistband discomfort during longer or higher-intensity spin sessions, the bib format solves that problem directly.",
    affiliateUrl: "https://www.amazon.com/s?k=womens+cycling+bib+shorts&tag=pilatescollective-20",
    tag: "Best Bib Option",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Padded Cycling Shorts for Spin Class (2026)",
      "description": "Padded cycling shorts compared for chamois quality, compression fit, and breathability.",
      "url": "https://pilatescollectiveclub.com/blog/best-padded-cycling-shorts-for-spin",
      "datePublished": "2026-06-30",
      "dateModified": "2026-06-30",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/jade-stephens-N21356amsyw-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-padded-cycling-shorts-for-spin" },
    },
    {
      "@type": "ItemList",
      "name": "Best Padded Cycling Shorts for Spin Class (2026)",
      "numberOfItems": 6,
      "itemListElement": PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "description": p.description.replace(/<[^>]+>/g, ""),
          "offers": { "@type": "Offer", "priceCurrency": "USD", "price": p.price.replace(/[^0-9]/g, ""), "availability": "https://schema.org/InStock", "url": p.affiliateUrl },
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Padded Cycling Shorts for Spin", "item": "https://pilatescollectiveclub.com/blog/best-padded-cycling-shorts-for-spin" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Do I need padded cycling shorts for a 45-minute spin class?", "acceptedAnswer": { "@type": "Answer", "text": "If you ride more than once or twice a week, yes — even a 45-minute session on a narrow spin saddle creates pressure points that a chamois pad meaningfully reduces. Occasional riders can get by without them, but most regular spin-goers find padded shorts noticeably improve comfort and let them maintain better form through the full class." } },
        { "@type": "Question", "name": "Foam vs gel chamois — which is better for spin class?", "acceptedAnswer": { "@type": "Answer", "text": "Foam chamois pads, used in shorts like the Baleaf line, breathe better and feel less bulky, making them well-suited to 45-60 minute indoor sessions in a heated studio. Gel chamois pads provide more cushioning but trap more heat and are generally better suited to multi-hour outdoor rides. For typical spin class length, foam is usually the more comfortable choice." } },
        { "@type": "Question", "name": "Should I wear underwear under padded cycling shorts?", "acceptedAnswer": { "@type": "Answer", "text": "No. Padded cycling shorts are designed to be worn without underwear — the chamois is built to sit directly against skin, and adding underwear creates extra seams and fabric layers that increase friction and chafing risk rather than reducing it." } },
      ],
    },
  ],
};

export default function BestPaddedCyclingShortsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Equipment Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Indoor Cycling</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Padded Cycling<br /><span style={{ color: "#8b4a31" }}>Shorts for Spin (2026)</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated June 2026 · 8 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon and manufacturer sites. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              A narrow spin saddle and 45 minutes of seated and standing intervals will find every pressure point a generic athletic short can't address. Padded cycling shorts — built around a chamois insert and compression fit — are the single most impactful comfort upgrade for regular spin riders. This guide compares the six best women's and men's options for 2026.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/jade-stephens-N21356amsyw-unsplash.jpg" alt="Best padded cycling shorts for spin class 2026" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

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
                  >Search →</a>
                </div>
              ))}
            </div>

            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Shorts · Women's & Men's</p>
              <div className="space-y-10">
                {PRODUCTS.map((p) => (
                  <div key={p.name}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-semibold" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{p.rank}</span>
                      <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{p.tag}</span>
                    </div>
                    <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.3)" }}>
                      <div className="p-6" style={{ backgroundColor: "#ffffff" }}>
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-xl font-semibold mb-1" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{p.name}</h3>
                            <p className="text-sm font-semibold" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{p.price}</p>
                          </div>
                          <a href={p.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow"
                            style={{ display: "block", fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "10px 14px", whiteSpace: "nowrap", flexShrink: 0 }}
                          >Search →</a>
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }} dangerouslySetInnerHTML={{ __html: p.description }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "Do I need padded cycling shorts for a 45-minute spin class?", a: "If you ride more than once or twice a week, yes — even a 45-minute session on a narrow spin saddle creates pressure points that a chamois pad meaningfully reduces. Occasional riders can get by without them, but most regular spin-goers find padded shorts noticeably improve comfort." },
                  { q: "Foam vs gel chamois — which is better for spin class?", a: "Foam chamois pads breathe better and feel less bulky, making them well-suited to 45-60 minute indoor sessions in a heated studio. Gel chamois pads provide more cushioning but trap more heat and suit multi-hour outdoor rides better. For typical spin class length, foam is usually the more comfortable choice." },
                  { q: "Should I wear underwear under padded cycling shorts?", a: "No. Padded cycling shorts are designed to be worn without underwear — the chamois sits directly against skin, and underwear adds extra seams that increase friction and chafing risk." },
                ].map((item) => (
                  <div key={item.q} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.q}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="Best Cycling Shoes for Spin Class (2026)" excerpt="Clip-in vs cage pedals, compatibility, and the best shoes for indoor cycling comfort and power transfer." href="/blog/best-cycling-shoes-for-spin-class" category="Equipment" readTime="9 min read" date="June 2026" imageUrl="/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg" />
                <ArticleCard title="Best Indoor Spin Bike for Home Studios (2026)" excerpt="Peloton, Schwinn, NordicTrack, and budget bikes compared for building a home cycling studio." href="/blog/best-indoor-spin-bike-for-home-studio" category="Equipment" readTime="11 min read" date="June 2026" imageUrl="/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a spin studio near you" subtitle="Use our city guides to find boutique cycling and Pilates studios worldwide." showSearch searchPlaceholder="Ask: best spin studios in Miami..." />
      </main>
      <Footer />
    </>
  );
}
