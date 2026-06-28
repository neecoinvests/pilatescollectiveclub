import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Reformer Short Box (2026): Accessories Compared",
  description: "The best reformer short boxes for classical and contemporary Pilates — Balanced Body, Merrithew, Align Pilates, and more. Verified products, honest sizing notes, and what to expect at each price point.",
  keywords: [
    "best pilates reformer short box",
    "reformer short box",
    "pilates short box",
    "balanced body short box",
    "merrithew short box",
    "pilates reformer accessories",
    "pilates box accessory",
    "reformer box pilates",
  ],
  openGraph: {
    title: "Best Pilates Reformer Short Box (2026): Accessories Compared",
    description: "The best reformer short boxes for classical and contemporary Pilates — Balanced Body, Merrithew, Align Pilates, and more.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-reformer-short-box",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-reformer-sunlit-minimal.png", width: 1200, height: 630, alt: "Best Pilates Reformer Short Box" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Reformer Short Box (2026): Accessories Compared",
    description: "The best reformer short boxes for classical and contemporary Pilates — Balanced Body, Merrithew, Align Pilates, and more.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-reformer-sunlit-minimal.png"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/blog/best-pilates-reformer-short-box",
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Balanced Body Standard Short Box",
    price: "From $185",
    verdict: "Best for Balanced Body reformer owners",
    description: "Balanced Body's standard short box is engineered to sit perfectly on Allegro 2 and Studio Reformer carriages. The padded top surface accommodates sitting and supine box work, while the angled base stays locked in place during rollback and tree series. Compatible with Balanced Body's long box and accessory storage system.",
    affiliateUrl: "https://www.amazon.com/s?k=Balanced+Body+Pilates+Short+Box+Reformer&tag=pilatescollective-20",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "Merrithew Short Box for SPX / V2 Max Reformers",
    price: "From $225",
    verdict: "Best for Merrithew reformer owners",
    description: "Merrithew's short box features their signature non-slip base designed for the SPX and V2 Max carriage width. The upholstered padding density is higher than most competitors — notable during seated oblique work and back extension series. Includes a strap loop for footwork variations.",
    affiliateUrl: "https://www.amazon.com/s?k=Merrithew+Short+Box+Pilates+Reformer&tag=pilatescollective-20",
    tag: "Premium Build",
  },
  {
    rank: "03",
    name: "Align Pilates Short Box — A Series Compatible",
    price: "From $165",
    verdict: "Best value box for mid-range reformers",
    description: "Align Pilates produces a clean short box that fits their A8, C8, and F3 reformer carriages with minor shimming adjustments. The solid wood frame with PU leather cover is well-constructed at this price. A dependable option for home practitioners who want brand-matched accessories without the Balanced Body or Merrithew premium.",
    affiliateUrl: "https://www.amazon.com/s?k=Align+Pilates+Short+Box+Reformer+Accessory&tag=pilatescollective-20",
    tag: "Great Value",
  },
  {
    rank: "04",
    name: "AeroPilates Short Box — for AeroPilates Reformers",
    price: "From $89",
    verdict: "Best for AeroPilates home reformer owners",
    description: "Designed specifically for AeroPilates 4700, 5500, and 7500 series reformers, this short box is the most affordable brand-matched option on the market. The padded surface handles sitting and supine work adequately for home practice, and it clicks securely onto the AeroPilates carriage rail system.",
    affiliateUrl: "https://www.amazon.com/s?k=AeroPilates+Short+Box+Reformer&tag=pilatescollective-20",
    tag: "Budget Pick",
  },
  {
    rank: "05",
    name: "Peak Pilates Short Box — MVe & FIT Reformer Compatible",
    price: "From $195",
    verdict: "Best for Peak Pilates users",
    description: "Peak Pilates produces a compact short box compatible with their MVe and FIT reformer lines. The dense upholstery supports extended seated spine work without uncomfortable pressure points. A niche but important option for the significant number of home and studio practitioners using Peak equipment.",
    affiliateUrl: "https://www.amazon.com/s?k=Peak+Pilates+Short+Box+Reformer&tag=pilatescollective-20",
    tag: "Studio Grade",
  },
  {
    rank: "06",
    name: "Universal Pilates Reformer Short Box — Foam Pad",
    price: "From $75",
    verdict: "Best universal option for multi-brand reformers",
    description: "For home practitioners with reformers from smaller brands, a universal short box with adjustable non-slip base strips provides a workable solution. The foam padded design handles the core short box repertoire — rollback, tree, flat back, obliques — without the brand-specific precision of premium boxes.",
    affiliateUrl: "https://www.amazon.com/s?k=Universal+Pilates+Reformer+Short+Box+Accessory&tag=pilatescollective-20",
    tag: "Universal Fit",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Best Pilates Reformer Short Box (2026): Accessories Compared",
      description: "The best reformer short boxes for classical and contemporary Pilates — Balanced Body, Merrithew, Align Pilates, and more.",
      url: "https://pilatescollectiveclub.com/blog/best-pilates-reformer-short-box",
      datePublished: "2026-06-28",
      dateModified: "2026-06-28",
      image: "https://pilatescollectiveclub.com/pictures/stitch-reformer-sunlit-minimal.png",
      author: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com" },
      publisher: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com", logo: { "@type": "ImageObject", url: "https://pilatescollectiveclub.com/logo.png" } },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-pilates-reformer-short-box" },
    },
    {
      "@type": "ItemList",
      name: "Best Pilates Reformer Short Box 2026",
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
        { "@type": "ListItem", position: 3, name: "Best Pilates Reformer Short Box", item: "https://pilatescollectiveclub.com/blog/best-pilates-reformer-short-box" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a Pilates reformer short box used for?",
          acceptedAnswer: { "@type": "Answer", text: "The short box sits on the reformer carriage and supports a series of seated and supine exercises — including rollback, tree, flat back, oblique twist, and back extension. It elevates the practitioner above the carriage rails and provides a stable base for spinal articulation and hip flexor work." },
        },
        {
          "@type": "Question",
          name: "Are reformer short boxes universal or brand-specific?",
          acceptedAnswer: { "@type": "Answer", text: "Most reformer short boxes are brand-specific: Balanced Body boxes fit Balanced Body reformers, Merrithew boxes fit Merrithew carriages. Carriage widths and rail heights vary enough between brands that a mismatched box may rock or not sit flat. Universal options exist but require shimming or non-slip padding to compensate." },
        },
        {
          "@type": "Question",
          name: "Can I use a long box as a short box?",
          acceptedAnswer: { "@type": "Answer", text: "No — they serve different purposes. The short box is a compact square/rectangular platform for seated exercises and rollback series. The long box is a narrower elongated board used for prone back extension, swimming, and rowing exercises. Most studios and advanced home practitioners eventually invest in both." },
        },
      ],
    },
  ],
};

export default function BestPilatesReformerShortBoxPage() {
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
              Best Pilates Reformer Short Box (2026): Accessories Compared
            </h1>
            <p className="text-sm mb-6" style={{ color: "#9e8a7e" }}>Updated June 28, 2026 · 7 min read</p>
            <div className="p-4 rounded-xl mb-8 text-sm" style={{ backgroundColor: "#f0ebe8", color: "#7a6358" }}>
              <strong>Affiliate disclosure:</strong> We may earn a commission on purchases made through links on this page, at no extra cost to you. We only recommend products we have researched thoroughly.
            </div>
            <hr style={{ borderColor: "#e8e0db" }} className="mb-8" />
            <p className="text-lg leading-relaxed" style={{ color: "#5c4a3d" }}>
              The short box unlocks an entire chapter of the Pilates repertoire — rollback series, tree, flat back, oblique twist, and back extension — that simply cannot be done properly without one. Yet it&apos;s one of the most under-purchased accessories for home reformers, often because practitioners don&apos;t realise how brand-specific sizing is. Here&apos;s what to buy for your specific reformer, from the under-$90 AeroPilates option to the studio-grade Merrithew.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-reformer-sunlit-minimal.png" alt="Pilates reformer short box for home and studio use" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
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

            <div className="rounded-2xl p-8 mb-12" style={{ backgroundColor: "#fcf9f8", border: "1px solid #e8e0db" }}>
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#2d1f17" }}>Buyer&apos;s Guide: Choosing a Short Box</h2>
              <div className="space-y-5 text-base leading-relaxed" style={{ color: "#5c4a3d" }}>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: "#2d1f17" }}>Match your reformer brand</h3>
                  <p>The single most important factor. Carriage widths range from 21 inches (AeroPilates) to 24 inches (Merrithew V2 Max). A box designed for a narrower carriage on a wide reformer will rock during rollbacks — potentially dangerous. Always check your reformer&apos;s carriage width before purchasing.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: "#2d1f17" }}>Padding density</h3>
                  <p>Box work involves sustained seated pressure during rollback and oblique series. Thin padding causes discomfort within minutes. Merrithew and Balanced Body use higher-density foam than most budget alternatives. If you plan to use the box frequently, padding quality matters more than price.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: "#2d1f17" }}>Strap compatibility</h3>
                  <p>Many short box exercises use a strap looped around the practitioner&apos;s feet. Some boxes include an integrated strap loop; others require the reformer&apos;s own straps to be repositioned. Confirm which system your box uses before your first session.</p>
                </div>
              </div>
            </div>

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
                  title="Best Pilates Jumpboard (2026): Cardio Attachment Reviewed"
                  excerpt="The jumpboards that add low-impact cardio to your reformer — Balanced Body, Merrithew, and universal options compared."
                  href="/blog/best-pilates-jumpboard"
                  category="Equipment"
                  readTime="7 min"
                  date="2026-06-28"
                  imageUrl="/pictures/stitch-reformer-row-studio.png"
                />
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="Find a studio near you"
          subtitle="Use our curated city guides to discover the best Pilates and Lagree studios in your area."
          showSearch
          searchPlaceholder="Ask: best Pilates studios in New York..."
        />
      </main>
      <Footer />
    </>
  );
}
