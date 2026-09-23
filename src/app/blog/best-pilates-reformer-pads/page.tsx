import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Reformer Pads (2026): What's Actually Sold on Amazon",
  description: "We checked for OEM shoulder rest, headrest and carriage pad listings from Balanced Body, Merrithew, AeroPilates and Align Pilates — none turned up as real, live Amazon listings. Here are the real, verified reformer pad and cover accessories we could confirm instead.",
  keywords: [
    "best pilates reformer pads",
    "reformer shoulder rest pads",
    "pilates carriage pad",
    "reformer grip pads",
    "balanced body reformer pads",
    "pilates reformer accessories",
    "reformer pad replacement",
  ],
  openGraph: {
    title: "Best Pilates Reformer Pads (2026): What's Actually Sold on Amazon",
    description: "We checked for OEM shoulder rest, headrest and carriage pad listings — none turned up as real, live Amazon listings. Here's what we could actually verify instead.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-reformer-pads",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-reformer-spring-detail.png", width: 1200, height: 630, alt: "Best Pilates Reformer Pads" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Reformer Pads (2026): What's Actually Sold on Amazon",
    description: "We checked for OEM shoulder rest, headrest and carriage pad listings — none turned up as real, live Amazon listings. Here's what we could actually verify instead.",
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
    name: "Eccentfit Pilates Grip Pads (4-Pack)",
    price: "$7.99",
    verdict: "The real, verified grip/comfort pad accessory for reformers",
    description: "A note before anything else: we searched for brand-specific OEM shoulder rest pads, headrest cushions, and carriage pads from Balanced Body, Merrithew, AeroPilates, and Align Pilates, and none turned up as real, live Amazon listings under those names — the specific claims attached to them (foam density, memory-foam thickness, colourways) were not verifiable. This grip pad is a real, currently-sold Amazon accessory instead: it adds grip and a layer of cushioning at the carriage for standing and kneeling work, and helps protect the upholstery underneath from wear. It is not a shoulder-rest or headrest replacement — check the pad's dimensions against your carriage before ordering.",
    affiliateUrl: "https://www.amazon.com/dp/B0GGR4QXNH?tag=pilatescollective-20",
    tag: "The Real Listing",
  },
  {
    rank: "02",
    name: "COSHNIBI Reformer Protective Cover",
    price: "$43.22",
    verdict: "A real, verified way to protect carriage padding between sessions",
    description: "We could not find a genuine \"universal carriage pad cover\" from any of the brands or aftermarket names commonly searched for. This full protective cover is a real, currently-sold Amazon accessory that does a related job: it covers the reformer's existing upholstery when not in use, protecting it from dust and general wear rather than adding cushioning during a session. Confirm sizing against your specific reformer's dimensions before ordering, since it is not marketed as model-specific.",
    affiliateUrl: "https://www.amazon.com/dp/B0G2LHY784?tag=pilatescollective-20",
    tag: "Protection",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Best Pilates Reformer Pads (2026): What's Actually Sold on Amazon",
      description: "We checked for OEM shoulder rest, headrest and carriage pad listings from Balanced Body, Merrithew, AeroPilates and Align Pilates — none turned up as real, live Amazon listings. Here's what we could actually verify instead.",
      url: "https://pilatescollectiveclub.com/blog/best-pilates-reformer-pads",
      datePublished: "2026-06-28",
      dateModified: "2026-09-23",
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
          name: "Can you buy OEM shoulder rest or headrest pads for a reformer on Amazon?",
          acceptedAnswer: { "@type": "Answer", text: "We could not find genuine, currently-sold OEM shoulder rest, headrest, or carriage pad listings from Balanced Body, Merrithew, AeroPilates, or Align Pilates on Amazon. If your existing pad needs replacing, contact your reformer's manufacturer directly for genuine replacement parts rather than trusting a generic-sounding Amazon listing." },
        },
        {
          "@type": "Question",
          name: "What's a real Amazon alternative for reformer padding and protection?",
          acceptedAnswer: { "@type": "Answer", text: "Eccentfit's Pilates grip pads add grip and cushioning at the carriage for standing and kneeling work, and a COSHNIBI protective cover shields the existing upholstery between sessions. Neither is a true OEM shoulder-rest or headrest replacement, but both are real, verified, currently-sold accessories." },
        },
        {
          "@type": "Question",
          name: "Can you clean reformer pads?",
          acceptedAnswer: { "@type": "Answer", text: "Most upholstered reformer pads can be wiped with a damp cloth and a mild cleaner after use. Avoid harsh alcohol-based sprays that can dry and crack upholstery over time, and check your reformer manufacturer's own care guidance before using any cleaning product on the original padding." },
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
              Best Pilates Reformer Pads (2026): What&apos;s Actually Sold on Amazon
            </h1>
            <p className="text-sm mb-6" style={{ color: "#9e8a7e" }}>Updated September 23, 2026 · 7 min read</p>
            <div className="p-4 rounded-xl mb-8 text-sm" style={{ backgroundColor: "#f0ebe8", color: "#7a6358" }}>
              <strong>Affiliate disclosure:</strong> We may earn a commission on purchases made through links on this page, at no extra cost to you. We only recommend products we have researched thoroughly.
            </div>
            <hr style={{ borderColor: "#e8e0db" }} className="mb-8" />
            <p className="text-lg leading-relaxed" style={{ color: "#5c4a3d" }}>
              The padding between your body and a reformer&apos;s metal frame matters more than most practitioners realise — until a shoulder rest pad compresses flat, or a carriage pad develops a permanent groove from repeated footwork sessions. We went looking for OEM replacement pads from Balanced Body, Merrithew, AeroPilates and Align Pilates and could not find genuine, currently-sold Amazon listings for any of them — the model-specific claims attached to those searches (exact foam density, memory-foam thickness, colourways) were not verifiable either. Below are the real, verified reformer padding and protection accessories we could confirm instead, and honest guidance on where to go for genuine OEM parts.
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

            <div className="rounded-2xl p-8 mb-12" style={{ backgroundColor: "#fcf9f8", border: "1px solid #e8e0db" }}>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#2d1f17" }}>What we could not verify</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#5c4a3d" }}>
                An earlier version of this article featured brand-specific OEM shoulder rest pads, headrest cushions, and carriage pads from Balanced Body, Merrithew, AeroPilates, and Align Pilates, plus an aftermarket &quot;universal&quot; carriage cover and a footbar grip cover — each with specific claimed dimensions, foam densities, and compatible model numbers. We could not find live Amazon listings for any of them under the names searched, and the specific technical claims attached to them could not be independently verified, so they have been removed rather than left in place.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#5c4a3d" }}>
                If your reformer&apos;s shoulder rest or carriage pad needs replacing, the most reliable path is contacting your reformer&apos;s manufacturer directly for a genuine replacement part, or checking Amazon yourself for the current live listing under your exact model — rather than trusting a specific product name or spec quoted on a third-party page.
              </p>
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
