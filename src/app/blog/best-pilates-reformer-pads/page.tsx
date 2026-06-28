import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Reformer Pads (2026): Shoulder Rests & Carriage Pads",
  description: "The best replacement and upgrade pads for Pilates reformers — shoulder rest pads, headrest cushions, carriage pads, and footbar covers from Balanced Body, Merrithew, and aftermarket brands.",
  keywords: [
    "best pilates reformer pads",
    "reformer shoulder rest pads",
    "pilates carriage pad",
    "reformer headrest cushion",
    "balanced body reformer pads",
    "merrithew shoulder rest",
    "pilates reformer accessories",
    "reformer pad replacement",
  ],
  openGraph: {
    title: "Best Pilates Reformer Pads (2026): Shoulder Rests & Carriage Pads",
    description: "The best replacement and upgrade pads for Pilates reformers — shoulder rests, headrests, carriage pads, and footbar covers compared.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-reformer-pads",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-reformer-spring-detail.png", width: 1200, height: 630, alt: "Best Pilates Reformer Pads" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Reformer Pads (2026): Shoulder Rests & Carriage Pads",
    description: "The best replacement and upgrade pads for Pilates reformers — shoulder rests, headrests, carriage pads, and footbar covers compared.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-reformer-spring-detail.png"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/blog/best-pilates-reformer-pads",
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Balanced Body Reformer Shoulder Rest Pads — Replacement Set",
    price: "From $79",
    verdict: "Best for Balanced Body reformer owners",
    description: "Balanced Body's OEM replacement shoulder rest pads are precision-matched to their Allegro 2, Studio Reformer, and Studio Reformer 2 carriages. The high-density foam maintains its shape after years of use — a common complaint with cheaper aftermarket pads that compress and deform within months. Available in the standard caramel and black colourways that match original Balanced Body upholstery.",
    affiliateUrl: "https://www.amazon.com/s?k=Balanced+Body+Reformer+Shoulder+Rest+Pads+Replacement&tag=pilatescollective-20",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "Merrithew Shoulder Rest Pads — SPX & V2 Max Compatible",
    price: "From $95",
    verdict: "Best for Merrithew reformer owners",
    description: "Merrithew's shoulder rest replacement pads are built to the same specification as the original units — firmer than Balanced Body pads, which suits the SPX's more structured footwork position. The proprietary PU leather covering is notably resistant to sweat absorption and wipes clean without discolouration. Designed to clip directly onto the existing shoulder rest frame.",
    affiliateUrl: "https://www.amazon.com/s?k=Merrithew+Shoulder+Rest+Pads+SPX+Reformer&tag=pilatescollective-20",
    tag: "OEM Quality",
  },
  {
    rank: "03",
    name: "AeroPilates Reformer Cushion Pad — Headrest & Shoulder",
    price: "From $49",
    verdict: "Best for AeroPilates owners",
    description: "AeroPilates replacement cushion pads cover both headrest and shoulder rest positions — important because AeroPilates home reformers ship with thinner padding than commercial units. The upgrade pads add 15mm of additional foam depth, a meaningful improvement during long exercise sets. Installs without tools on AeroPilates 4700 and 5500 series reformers.",
    affiliateUrl: "https://www.amazon.com/s?k=AeroPilates+Reformer+Cushion+Pad+Headrest+Shoulder&tag=pilatescollective-20",
    tag: "Comfort Upgrade",
  },
  {
    rank: "04",
    name: "Mats By Maven — Universal Reformer Carriage Pad Cover",
    price: "From $65",
    verdict: "Best aftermarket carriage pad",
    description: "Mats By Maven produces machine-washable carriage pad covers that fit over standard Balanced Body, Merrithew, and AeroPilates carriages. The micro-velvet surface provides grip during supine exercises while remaining hygienic — a practical solution for home studios where multiple family members share a reformer. Available in 8 colourways to match studio aesthetics.",
    affiliateUrl: "https://www.amazon.com/s?k=Mats+By+Maven+Universal+Reformer+Carriage+Pad+Cover&tag=pilatescollective-20",
    tag: "Washable Cover",
  },
  {
    rank: "05",
    name: "Pilates Reformer Footbar Pad — Foam Grip Cover",
    price: "From $28",
    verdict: "Best footbar comfort upgrade",
    description: "Aftermarket foam footbar covers add grip and cushioning to the standard steel or aluminum footbar surface — particularly useful for practitioners with sensitive arches or those who work barefoot on the footbar. The split-zip design installs in under a minute without removing footbar bolts. Compatible with most standard footbar diameters (29–35mm).",
    affiliateUrl: "https://www.amazon.com/s?k=Pilates+Reformer+Footbar+Pad+Foam+Grip+Cover&tag=pilatescollective-20",
    tag: "Footbar Comfort",
  },
  {
    rank: "06",
    name: "Align Pilates Carriage Pad — F3 & C8 Series",
    price: "From $89",
    verdict: "Best for Align Pilates reformers",
    description: "Align Pilates' replacement carriage pad is manufactured to fit their F3 and C8 reformer carriages with a precise cut that eliminates the gap issues common with universal covers. The 3.5-inch thick memory foam topper significantly upgrades the comfort profile of mid-range Align reformers — noticeable in long sessions and for practitioners with back sensitivity.",
    affiliateUrl: "https://www.amazon.com/s?k=Align+Pilates+Carriage+Pad+Reformer+Replacement&tag=pilatescollective-20",
    tag: "Memory Foam",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Best Pilates Reformer Pads (2026): Shoulder Rests & Carriage Pads",
      description: "The best replacement and upgrade pads for Pilates reformers — shoulder rests, headrests, carriage pads, and footbar covers compared.",
      url: "https://pilatescollectiveclub.com/blog/best-pilates-reformer-pads",
      datePublished: "2026-06-28",
      dateModified: "2026-06-28",
      image: "https://pilatescollectiveclub.com/pictures/stitch-reformer-spring-detail.png",
      author: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com" },
      publisher: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com", logo: { "@type": "ImageObject", url: "https://pilatescollectiveclub.com/logo.png" } },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-pilates-reformer-pads" },
    },
    {
      "@type": "ItemList",
      name: "Best Pilates Reformer Pads 2026",
      numberOfItems: PRODUCTS.length,
      itemListElement: PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Product",
          name: p.name,
          description: p.description,
          offers: { "@type": "Offer", priceCurrency: "USD", price: p.price.replace(/[^0-9]/g, ""), availability: "https://schema.org/InStock", url: p.affiliateUrl },
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", position: 3, name: "Best Pilates Reformer Pads", item: "https://pilatescollectiveclub.com/blog/best-pilates-reformer-pads" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "When should you replace reformer shoulder rest pads?",
          acceptedAnswer: { "@type": "Answer", text: "Replace shoulder rest pads when they have lost more than 20% of their original height (compression set), when the PU leather shows cracking or peeling, or when the foam no longer returns to shape after a session. Most studio-grade pads last 3–5 years under daily use; home reformer pads often last longer with lighter load." },
        },
        {
          "@type": "Question",
          name: "Are aftermarket reformer pads as good as OEM?",
          acceptedAnswer: { "@type": "Answer", text: "For carriage covers and footbar grips, aftermarket options often perform comparably to OEM — particularly the washable carriage covers that OEM brands don't offer. For shoulder rest pads that need precise sizing and consistent density, OEM replacements from Balanced Body or Merrithew are generally worth the premium." },
        },
        {
          "@type": "Question",
          name: "Can you clean reformer pads?",
          acceptedAnswer: { "@type": "Answer", text: "PU leather shoulder rest pads can be wiped with a damp cloth and mild cleaner after use. Avoid alcohol-based sprays that dry and crack PU leather over time. Fabric carriage covers (like those from Mats By Maven) are machine washable, which is why many instructors prefer them over direct contact with the foam carriage pad." },
        },
      ],
    },
  ],
};

export default function BestPilatesReformerPadsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex gap-2 mb-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide" style={{ backgroundColor: "#f0ebe8", color: "#5c4a3d" }}>Equipment</span>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide" style={{ backgroundColor: "#f0ebe8", color: "#5c4a3d" }}>Reformer Accessories</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: "#2d1f17" }}>
              Best Pilates Reformer Pads (2026): Shoulder Rests &amp; Carriage Pads
            </h1>
            <p className="text-sm mb-6" style={{ color: "#9e8a7e" }}>Updated June 28, 2026 · 7 min read</p>
            <div className="p-4 rounded-xl mb-8 text-sm" style={{ backgroundColor: "#f0ebe8", color: "#7a6358" }}>
              <strong>Affiliate disclosure:</strong> We may earn a commission on purchases made through links on this page, at no extra cost to you. We only recommend products we have researched thoroughly.
            </div>
            <hr style={{ borderColor: "#e8e0db" }} className="mb-8" />
            <p className="text-lg leading-relaxed" style={{ color: "#5c4a3d" }}>
              The padding between your body and a reformer's metal frame matters more than most practitioners realise — until a shoulder rest pad compresses flat and starts leaving pressure marks, or a carriage pad develops a permanent groove from repeated footwork sessions. Replacing worn pads restores both comfort and exercise quality. These six options cover the major reformer brands and the best aftermarket solutions for mixed-brand setups.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-reformer-spring-detail.png" alt="Pilates reformer pad and spring detail" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl p-6 mb-12" style={{ backgroundColor: "#fcf9f8", border: "1px solid #e8e0db" }}>
              <h2 className="text-lg font-bold mb-4" style={{ color: "#2d1f17" }}>Quick Picks</h2>
              <ul className="space-y-2 text-sm" style={{ color: "#5c4a3d" }}>
                {PRODUCTS.map((p) => (
                  <li key={p.rank} className="flex gap-3">
                    <span className="font-bold" style={{ color: "#c4956a", minWidth: "28px" }}>{p.rank}</span>
                    <span><a href={p.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow" className="font-semibold hover:underline" style={{ color: "#2d1f17" }}>{p.name}</a> — {p.verdict}</span>
                  </li>
                ))}
              </ul>
            </div>

            {PRODUCTS.map((p) => (
              <div key={p.rank} className="mb-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl font-black" style={{ color: "#e8e0db" }}>{p.rank}</span>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#f0ebe8", color: "#c4956a" }}>{p.tag}</span>
                </div>
                <ProductCard name={p.name} description={p.description} price={p.price} affiliateUrl={p.affiliateUrl} />
              </div>
            ))}

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#2d1f17" }}>Frequently Asked Questions</h2>
              <div className="space-y-6">
                {(jsonLd["@graph"][3] as { mainEntity: { name: string; acceptedAnswer: { text: string } }[] }).mainEntity.map((faq) => (
                  <div key={faq.name}>
                    <h3 className="font-semibold mb-2" style={{ color: "#2d1f17" }}>{faq.name}</h3>
                    <p className="text-base leading-relaxed" style={{ color: "#5c4a3d" }}>{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#2d1f17" }}>Further Reading</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <ArticleCard
                  title="Best Pilates Reformer Accessories (2026): Springs, Boxes & More"
                  excerpt="The accessories that expand what your home reformer can do — from jump boards to tower attachments."
                  href="/blog/best-pilates-reformer-accessories"
                  category="Equipment"
                  readTime="8 min"
                  date="2026-06-28"
                  imageUrl="/pictures/stitch-reformer-loops-hooks.png"
                />
                <ArticleCard
                  title="Best Pilates Reformer Short Box (2026): Accessories Compared"
                  excerpt="Balanced Body, Merrithew, Align — the short boxes that unlock the rollback and tree series for home reformer owners."
                  href="/blog/best-pilates-reformer-short-box"
                  category="Equipment"
                  readTime="7 min"
                  date="2026-06-28"
                  imageUrl="/pictures/stitch-reformer-sunlit-minimal.png"
                />
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="Find a studio near you"
          subtitle="Use our curated city guides to discover the best Pilates and Lagree studios in your area."
          showSearch
          searchPlaceholder="Ask: best Pilates studios in London..."
        />
      </main>
      <Footer />
    </>
  );
}
