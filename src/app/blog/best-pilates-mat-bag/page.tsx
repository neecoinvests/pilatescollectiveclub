import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Mat Bags (2026): Carriers & Slings Tested",
  description: "The best Pilates mat bags and carriers tested — Manduka, Gaiam, Lole, and more ranked for durability, comfort, and mat fit. Keep your mat clean and easy to carry.",
  keywords: ["best pilates mat bag", "pilates mat carrier", "pilates mat sling", "manduka mat bag", "gaiam yoga mat bag", "pilates mat bag 2026", "best mat carrier pilates", "yoga mat bag pilates", "pilates mat strap bag"],
  openGraph: {
    title: "Best Pilates Mat Bags (2026): Carriers & Slings Tested",
    description: "The best Pilates mat bags and carriers — tested for durability, comfort, and mat fit.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-mat-bag",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/jade-stephens-N21356amsyw-unsplash.jpg", width: 1200, height: 630, alt: "Best Pilates Mat Bags — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Mat Bags (2026)",
    description: "The best Pilates mat bags and carriers — tested and ranked.",
    images: ["https://pilatescollectiveclub.com/pictures/jade-stephens-N21356amsyw-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-pilates-mat-bag" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Manduka Go Play 2.0 Mat Carrier",
    price: "From $52",
    verdict: "Best overall mat carrier",
    description:
      "The Manduka Go Play 2.0 is the reference point for Pilates and yoga mat carriers — it has been refined over multiple generations into a product that handles every common mat carrying scenario without frustration. The adjustable strap system accommodates mats from 3mm travel mats to 6mm+ thicker Pilates mats (including the Manduka PRO and comparable) without requiring new hardware. The shoulder pad is generous enough to make a 20-minute commute on foot comfortable, the attached side pocket holds a phone and keys, and the open-top sling design allows quick mat retrieval and replacement between classes. The strap hardware is quality-grade and does not loosen with use — a surprising failure point on many competing carriers.",
    affiliateUrl: "https://www.amazon.com/s?k=manduka+go+play+2+mat+carrier&tag=pilatescollective-20",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "Gaiam On-The-Go Yoga Mat Bag",
    price: "From $28",
    verdict: "Best enclosed mat bag",
    description:
      "Gaiam's On-The-Go Mat Bag is a fully enclosed bag rather than an open-sling carrier — the mat slides in through a wide zip opening and is completely protected from rain, dust, and contact. This makes it preferable for transit journeys where an open sling would expose the mat, or for practitioners who store their mat in shared spaces and want full enclosure. The bag is sized to fit mats up to 68 inches long and 6mm thick — which accommodates most standard Pilates mats. The exterior pocket is large enough for a small towel and grip socks. A practical, durable option for practitioners who prioritise mat protection over minimal-carry aesthetics.",
    affiliateUrl: "https://www.amazon.com/s?k=gaiam+on+the+go+yoga+mat+bag&tag=pilatescollective-20",
    tag: "Best Enclosed Bag",
  },
  {
    rank: "03",
    name: "Lole Roll and Go Yoga Mat Bag",
    price: "From $38",
    verdict: "Best style-forward carrier",
    description:
      "Lole's Roll and Go is the most aesthetically refined mat carrier in this guide — it reads as a considered accessory rather than gym equipment, making it appropriate for commutes that pass through offices, cafes, or other non-gym environments. The design uses a single full-length strap that wraps around the mat in multiple configurations, with a top handle for short carries and a shoulder strap for longer distances. The adjustable closure accommodates a range of mat diameters, and the fabric choices lean towards neutrals and earthy tones that complement the Pilates studio aesthetic. For practitioners who care about how their kit looks outside the studio, Lole offers the cleanest option in this category.",
    affiliateUrl: "https://www.amazon.com/s?k=lole+roll+go+yoga+mat+bag&tag=pilatescollective-20",
    tag: "Best Aesthetic",
  },
  {
    rank: "04",
    name: "Athleta Prana Yoga Mat Carrier",
    price: "From $44",
    verdict: "Best for wide or thick mats",
    description:
      "The Athleta Prana Mat Carrier is sized and constructed for mats at the wider and thicker end of the market — which includes several popular Pilates mats that struggle with standard yoga mat carriers. The adjustable cinch system accommodates diameters up to approximately 6 inches when rolled, which covers thick 8mm mats and mats with significant diameter from a rubber or TPE construction. The padded shoulder strap distributes weight more evenly than a thin cord strap, which matters over longer carry distances. For practitioners with premium, thicker Pilates mats that don't fit comfortably into standard carriers, the Prana provides a reliable solution.",
    affiliateUrl: "https://www.amazon.com/s?k=athleta+yoga+mat+carrier+bag&tag=pilatescollective-20",
    tag: "Best for Thick Mats",
  },
  {
    rank: "05",
    name: "Tumaz Yoga Mat Bag",
    price: "From $18",
    verdict: "Best value mat bag",
    description:
      "The Tumaz Yoga Mat Bag is a fully enclosed design at a price point that makes it the obvious starting choice for practitioners who haven't yet decided how much they want to invest in a mat carrier. The bag fits mats up to 72 inches long and 4 inches in diameter — which covers most standard Pilates mats — and includes a small external pocket for essentials. The shoulder strap is not padded, which limits comfort on longer carries, but is adequate for short studio-to-car or studio-to-transit journeys. The closure design keeps the mat completely enclosed and dust-free. A practical, no-frills starting point that performs its function reliably.",
    affiliateUrl: "https://www.amazon.com/s?k=tumaz+yoga+mat+bag+carrier&tag=pilatescollective-20",
    tag: "Best Value",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Mat Bags (2026): Carriers & Slings Tested",
      "description": "The best Pilates mat bags and carriers — tested for durability, comfort, and mat compatibility.",
      "url": "https://pilatescollectiveclub.com/blog/best-pilates-mat-bag",
      "datePublished": "2026-05-21",
      "dateModified": "2026-05-21",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/jade-stephens-N21356amsyw-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-pilates-mat-bag" },
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Mat Bags (2026)",
      "numberOfItems": 5,
      "itemListElement": PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "description": p.description,
          "offers": { "@type": "Offer", "priceCurrency": "USD", "price": p.price.replace(/[^0-9]/g, ""), "availability": "https://schema.org/InStock", "url": p.affiliateUrl },
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Pilates Mat Bags", "item": "https://pilatescollectiveclub.com/blog/best-pilates-mat-bag" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Do I need a mat bag for Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "A mat bag is useful if you carry your own mat to studio classes or practice in multiple locations. Most reformer-only studios provide equipment including mats, so a mat bag is primarily relevant for mat Pilates practitioners. If you practice at home exclusively, a mat bag is unnecessary." } },
        { "@type": "Question", "name": "What size mat bag do I need for a Pilates mat?", "acceptedAnswer": { "@type": "Answer", "text": "Pilates mats are typically longer (72–84 inches) and can be thicker (4–6mm) than standard yoga mats. Check the mat dimensions before buying a bag — most bags specify maximum mat length and diameter. Open sling carriers are more accommodating of different mat sizes than enclosed bags with fixed openings." } },
        { "@type": "Question", "name": "Is an open sling or enclosed bag better for a mat?", "acceptedAnswer": { "@type": "Answer", "text": "Open slings are lighter, more compact, and accommodate a wider range of mat sizes and diameters. Enclosed bags provide better mat protection from rain, dust, and contact — preferable for commuters on public transit or practitioners who store mats in shared spaces. Choose based on your primary use case." } },
      ],
    },
  ],
};

export default function BestPilatesMatBagPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Accessories</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Pilates Mat Bags<br /><span style={{ color: "#8b4a31" }}>(2026): Carriers Tested</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 7 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              A mat bag is one of those purchases that most practitioners delay until they have suffered through enough awkward one-handed commutes with a mat tucked under an arm. The right carrier makes the mat feel lighter, protects it from urban grime and rain, and keeps your hands free — a meaningful quality-of-life improvement for practitioners who walk or transit to class. These five cover the range from open slings to fully enclosed bags, and from budget-conscious to investment-grade, with a focus on Pilates mats specifically, which tend to be longer and heavier than standard yoga mats.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/jade-stephens-N21356amsyw-unsplash.jpg" alt="Best Pilates mat bags and carriers for studio practitioners" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-10 mt-4 overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
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

            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Mat Bags · Carry-Tested</p>
              <div className="space-y-10">
                {PRODUCTS.map((p) => (
                  <div key={p.name}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-semibold" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{p.rank}</span>
                      <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{p.tag}</span>
                    </div>
                    <ProductCard name={p.name} description={p.description} price={p.price} affiliateUrl={p.affiliateUrl} />
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "Do I need a mat bag for Pilates?", a: "A mat bag is useful if you carry your own mat to studio classes or practice in multiple locations. Most reformer-only studios provide equipment including mats, so a mat bag is primarily relevant for mat Pilates practitioners. If you practice at home exclusively, a mat bag is unnecessary." },
                  { q: "What size mat bag do I need for a Pilates mat?", a: "Pilates mats are typically longer (72–84 inches) and can be thicker (4–6mm) than standard yoga mats. Check the mat dimensions before buying a bag — most bags specify maximum mat length and diameter. Open sling carriers are more accommodating of different mat sizes than enclosed bags with fixed openings." },
                  { q: "Is an open sling or enclosed bag better for a mat?", a: "Open slings are lighter, more compact, and accommodate a wider range of mat sizes and diameters. Enclosed bags provide better mat protection from rain, dust, and contact — preferable for commuters on public transit or practitioners who store mats in shared spaces. Choose based on your primary use case." },
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
                <ArticleCard title="Best Pilates Mats" excerpt="The best mats for Pilates — five options tested for thickness, grip, and durability." href="/blog/best-pilates-mat" category="Equipment" readTime="8 min read" date="May 2026" imageUrl="/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg" />
                <ArticleCard title="Best Pilates Bags" excerpt="The best studio carry-alls for your full Pilates kit." href="/blog/best-pilates-bag" category="Accessories" readTime="7 min read" date="May 2026" imageUrl="/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best Pilates studios in Barcelona…" />
      </main>
      <Footer />
    </>
  );
}
