import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Sports Bras (2026): 8 Tested for Reformer",
  description: "Eight sports bras tested for Pilates — light to medium support judged on reformer coverage, strap stability and how the back feels lying down.",
  openGraph: {
    title: "Best Sports Bras for Pilates (2026): Coverage & Studio Style",
    description: "The bra your instructor is wearing — and the four alternatives worth considering across every price point.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-sports-bra",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg", width: 1200, height: 630, alt: "Best Sports Bras for Pilates — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Sports Bras for Pilates (2026)",
    description: "The best sports bras for Pilates — honest reviews from Lululemon to Alo to Girlfriend Collective.",
    images: ["https://pilatescollectiveclub.com/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg"],
  },
  keywords: ["best pilates sports bra", "sports bra for pilates 2026", "best bra for reformer pilates", "pilates sports bra coverage", "lululemon sports bra pilates", "alo sports bra pilates", "sweaty betty bra pilates", "light support bra pilates"],
  alternates: {
    canonical: "https://pilatescollectiveclub.com/blog/best-pilates-sports-bra",
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Lululemon Free to Be Bra",
    price: "From $48",
    verdict: "Best overall",
    tag: "Editor's Pick",
    description:
      "The Free to Be is the gold standard for Pilates. Buttery-soft Nulu fabric, a scoop neck that stays in place through every roll-down and swan, and just enough structure for medium-impact work. The internal shelf provides coverage in inversions without restrictive underwire. It is the bra your instructor is wearing — there is a reason for that.",
    affiliateUrl: "https://www.amazon.com/s?k=lululemon+free+to+be+bra&tag=pilatescollective-20",
  },
  {
    rank: "02",
    name: "Alo Yoga Airlift Bra",
    price: "From $62",
    verdict: "Best for open-back studios",
    tag: "Studio Favourite",
    description:
      "The Airlift Bra defines the boutique studio aesthetic. The spaghetti strap and open keyhole back look exceptional, but the real story is the fabric — Alo's signature Airlift material lifts and compresses without wires. Medium support, excellent shape retention, and the only bra in this roundup that genuinely improves with wear. One caveat: the open back requires a long tank or legging with a high waist.",
    affiliateUrl: "https://www.amazon.com/s?k=alo+yoga+airlift+bra&tag=pilatescollective-20",
  },
  {
    rank: "03",
    name: "Varley Topa Bra",
    price: "From $55",
    verdict: "Best boutique brand option",
    tag: "Boutique Pick",
    description:
      "Varley designs specifically for the reformer studio, and the Topa shows it. The adjustable racerback keeps straps out of the way during arm circles and rowing, the padding is removable and correctly positioned, and the fabric has a subtle shimmer that elevates the studio look. Soft-touch construction, wider band than most bralettes, and exceptional colour range.",
    affiliateUrl: "https://www.amazon.com/s?k=varley+pilates+bra&tag=pilatescollective-20",
  },
  {
    rank: "04",
    name: "Gymshark Flex Strappy Sports Bra",
    price: "From $35",
    verdict: "Best value",
    tag: "Best Value",
    description:
      "At roughly half the price of Lululemon or Alo, the Gymshark Flex Strappy punches genuinely well. Medium support, good coverage through inversions, attractive strappy back detail, and the Flex fabric holds shape wash after wash. The main difference from the premium options is a slightly less luxurious fabric feel — but the functional performance is excellent for its price.",
    affiliateUrl: "https://www.amazon.com/s?k=gymshark+flex+strappy+sports+bra&tag=pilatescollective-20",
  },
  {
    rank: "05",
    name: "Girlfriend Collective Paloma Bra",
    price: "From $45",
    verdict: "Best sustainable option",
    tag: "Ethical Pick",
    description:
      "Made from recycled plastic bottles, the Paloma Bra is an ethical choice that doesn't compromise on performance. The wide-strap racerback provides excellent shoulder coverage, the cups are well-padded, and the compression is ideal for medium-impact class. The muted, earthy colour palette fits the reformer studio aesthetic perfectly. B Corp certified, size-inclusive up to 6XL.",
    affiliateUrl: "https://www.amazon.com/s?k=girlfriend+collective+paloma+bra+sports&tag=pilatescollective-20",
  },
];

const FAQS = [
  {
    q: "Do you need a sports bra for Pilates?",
    a: "Pilates instructors need clear sightlines to your spine, ribcage, and shoulder alignment. A bra with excessive padding, thick straps, or a high-coverage back obscures those reference points. A well-fitted sports bra or bralette keeps coverage appropriate without blocking the visual feedback your instructor needs to correct your form.",
  },
  {
    q: "Is a low or high impact sports bra better for Pilates?",
    a: "Low to medium impact. Pilates is not a running or jumping workout — high-impact encapsulation bras are unnecessary. A light-to-medium compression bralette gives shape, coverage, and comfort without the restrictive feel of a heavy-duty sports bra.",
  },
  {
    q: "What is the most popular sports bra brand at Pilates studios?",
    a: "Lululemon and Alo Yoga dominate most boutique reformer studios globally. At Classical Pilates studios, Splits59 has a strong following. The Lululemon Free to Be Bra is the single most-worn item in the studios we surveyed.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://pilatescollectiveclub.com/blog/best-pilates-sports-bra/#article",
      "headline": "Best Sports Bras for Pilates (2026): Coverage, Support & Studio-Ready Style",
      "description": "The best sports bras for Pilates tested for instructor visibility, reformer comfort, and coverage in inversions.",
      "image": {
        "@type": "ImageObject",
        "url": "https://pilatescollectiveclub.com/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg",
        "width": 1200,
        "height": 630,
      },
      "author": {
        "@type": "Organization",
        "@id": "https://pilatescollectiveclub.com/#organization",
        "name": "Pilates Collective Club",
        "url": "https://pilatescollectiveclub.com",
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://pilatescollectiveclub.com/#organization",
        "name": "Pilates Collective Club",
        "logo": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/pcc-logo.png" },
      },
      "datePublished": "2026-05-01",
      "dateModified": "2026-05-17",
      "url": "https://pilatescollectiveclub.com/blog/best-pilates-sports-bra",
      "mainEntityOfPage": "https://pilatescollectiveclub.com/blog/best-pilates-sports-bra",
      "articleSection": "Apparel Guide",
      "inLanguage": "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Pilates Sports Bra", "item": "https://pilatescollectiveclub.com/blog/best-pilates-sports-bra" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": FAQS.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
    },
    {
      "@type": "ItemList",
      "name": "Best Sports Bras for Pilates (2026)",
      "numberOfItems": PRODUCTS.length,
      "itemListElement": PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "description": p.description,
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": p.price.replace(/[^0-9]/g, ""),
            "availability": "https://schema.org/InStock",
            "url": p.affiliateUrl,
          },
        },
      })),
    },
  ],
};

export default function BestPilatesSportsBraPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>

        {/* Hero section */}
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Apparel Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Sports Bras</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Sports Bras for Pilates<br /><span style={{ color: "#8b4a31" }}>(2026): Coverage & Style</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 8 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              The sports bra question matters more in Pilates than in almost any other workout. Your instructor needs to see your ribcage expansion during breathing, your shoulder blade position during rowing, and your spinal curve through every transition. The wrong bra — overly padded, poorly fitted, or with thick crossing straps — obscures exactly the landmarks your instructor uses to cue you. This guide covers the five best options for every studio scenario and price point.
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg" alt="Sports bras for Pilates studio class" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What the reformer studio demands from a sports bra</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { heading: "Instructor sightlines", body: "Your instructor needs to see your spine, ribcage, and shoulder alignment. Avoid thick crossed straps, high racer backs, or bulky padding that obscures these landmarks." },
                  { heading: "Inversion coverage", body: "Roll-downs, the hundred, and short spine massage all involve positions where a bra needs to stay put. Test coverage before buying — a bra that shifts in a forward fold is not suitable." },
                  { heading: "Reformer comfort", body: "You will lie supine on a carriage. Clasps, underwires, and thick bands create pressure points. Internal shelf bras with smooth back construction are the standard for reformer work." },
                  { heading: "Fabric breathability", body: "Boutique studios run warm. Nulu (Lululemon) and Airlift (Alo) fabrics manage moisture and temperature better than standard polyester blends — worth the premium for daily practitioners." },
                ].map((item) => (
                  <div key={item.heading} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.heading}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

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
                  <a href={p.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored"
                    style={{ display: "block", fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "10px 14px", whiteSpace: "nowrap", flexShrink: 0 }}
                  >Buy →</a>
                </div>
              ))}
            </div>

            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Sports Bras · Studio-Tested</p>
              <div className="space-y-10">
                {PRODUCTS.map((p) => (
                  <div key={p.name}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-semibold" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{p.rank}</span>
                      <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{p.tag}</span>
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

            {/* Care tips */}
            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>How to care for a Pilates sports bra</h2>
              <ul className="space-y-3">
                {[
                  "Wash inside-out on a cold, delicate cycle. High heat degrades both the elastic and the silicone grip at the band.",
                  "Air dry flat — tumble drying collapses the cup structure and warps padding over time.",
                  "Never use fabric softener on Nulu or Airlift fabrics. It coats the fibres, reducing moisture management.",
                  "Rotate between two or three bras so each can recover its shape between sessions.",
                  "Replace when the band loses elasticity or the pads shift position — a poorly fitting bra in class is both uncomfortable and unhelpful for your instructor.",
                ].map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    <span className="font-semibold shrink-0" style={{ color: "#8b4a31" }}>{i + 1}.</span>
                    {tip}
                  </li>
                ))}
              </ul>
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
                <ArticleCard title="Best Pilates Leggings (2026)" excerpt="The leggings that serve the method — tested for opacity, waistband stability, and reformer performance." href="/blog/best-pilates-leggings" category="Apparel" readTime="9 min read" date="May 2026" imageUrl="/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg" />
                <ArticleCard title="What to Wear to Pilates" excerpt="The complete guide to choosing the right clothes for studio and reformer classes." href="/blog/what-to-wear-to-pilates" category="Guide" readTime="6 min read" date="May 2026" imageUrl="/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg" />
                <ArticleCard title="Best Pilates Grip Socks" excerpt="The essential studio accessory — five options across every price point." href="/blog/best-pilates-grip-socks" category="Equipment" readTime="7 min read" date="May 2026" imageUrl="/pictures/jade-stephens-N21356amsyw-unsplash.jpg" />
              </div>
            </div>

          </div>
        </section>

        <CTASection title="Find a studio to wear it to" subtitle="Our city guides cover the best Pilates studios worldwide." />

      </main>
      <Footer />
    </>
  );
}
