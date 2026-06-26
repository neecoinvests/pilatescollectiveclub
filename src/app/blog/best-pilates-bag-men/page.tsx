import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Bags for Men (2026): Studio Duffels & Backpacks Ranked | Pilates Collective Club",
  description: "The best bags for men attending Pilates — reviewed for capacity, studio organisation, and commute versatility in 2026.",
  keywords: ["best pilates bag men", "pilates gym bag men 2026", "mens pilates bag", "best duffel bag pilates men", "pilates backpack men", "mens studio bag pilates", "best gym bag reformer pilates", "lululemon pilates bag men"],
  openGraph: {
    title: "Best Pilates Bags for Men (2026)",
    description: "The best bags for men attending Pilates — reviewed for capacity, studio organisation, and commute versatility.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-bag-men",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/mathilde-langevin-aBJ3A-2LJyU-unsplash.jpg", width: 1200, height: 630, alt: "Best Pilates Bags for Men — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Bags for Men (2026)",
    description: "The best bags for men attending Pilates — tested and ranked.",
    images: ["https://pilatescollectiveclub.com/pictures/mathilde-langevin-aBJ3A-2LJyU-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-pilates-bag-men" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Lululemon Commuter Backpack",
    price: "From $148",
    verdict: "Best overall bag for men",
    description:
      "The Lululemon Commuter Backpack is the bag that makes the most sense for men whose Pilates practice is part of a broader daily routine — it handles a full studio kit while functioning equally well as a work and travel bag. The capacity is substantial without the bag reading as a gym bag in professional contexts, and the organisation is genuinely considered: a dedicated laptop compartment, interior organisation for a studio kit including shoes and a change of clothes, and external pockets positioned for things that need to be accessed without opening the main compartment. The padded back panel and shoulder straps are comfortable across both short studio commutes and longer travel days. Build quality is consistent with Lululemon's premium positioning.",
    affiliateUrl: "https://www.amazon.com/s?k=lululemon+commuter+backpack+men&tag=pilatescollective-20",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "Herschel Novel Duffel Bag",
    price: "From $75",
    verdict: "Best duffel for men",
    description:
      "Herschel's Novel Duffel is the clean, unfussy studio duffel that handles a complete Pilates kit without drawing attention to itself. The capacity is generous — a full change of clothes, gym shoes, a towel, and accessories fit without compromising organisation — and the separate shoe compartment isolates footwear cleanly from the rest of the bag. The design avoids the overtly athletic branding that makes many gym bags feel out of place in other contexts, which suits practitioners who head from class to work or social commitments. The construction is durable and consistent with Herschel's reputation, and the range of colourways skews appropriately neutral for practitioners who prefer their bag to read as a bag rather than a sports statement.",
    affiliateUrl: "https://www.amazon.com/s?k=herschel+novel+duffel+bag+men&tag=pilatescollective-20",
    tag: "Best Duffel",
  },
  {
    rank: "03",
    name: "Nike Brasilia 9.5 Gym Bag",
    price: "From $38",
    verdict: "Best value bag for men",
    description:
      "Nike's Brasilia 9.5 is the practical, no-nonsense studio bag for men who want reliable function at a straightforward price. The separate shoe compartment is a genuine standout at this price point — properly sized and ventilated, it handles larger men's shoes that budget bags struggle with. The main compartment is spacious enough for a full kit change, and the organisation includes an interior zip pocket and exterior slip pockets for items that need to be accessed quickly. The durability is consistent across the Brasilia line, and the bag handles the wear of multiple sessions per week without premature ageing. For practitioners who want to invest budget in quality gear rather than the bag that carries it, the Brasilia is the standard recommendation.",
    affiliateUrl: "https://www.amazon.com/s?k=nike+brasilia+9.5+gym+bag+men&tag=pilatescollective-20",
    tag: "Best Value",
  },
  {
    rank: "04",
    name: "Vuori Ripstop Duffel",
    price: "From $98",
    verdict: "Best aesthetic bag for men",
    description:
      "Vuori's Ripstop Duffel is the studio bag for men who care about how their kit looks as much as how it performs. The ripstop nylon construction is durable and distinctive without being loud, and the silhouette reads as considered rather than athletic — a bag you'd take to a premium reformer studio and also carry to a weekend away. The capacity suits a full studio kit, the organisation is clean and functional, and the hardware quality reflects the premium price. For practitioners at premium boutique studios where the gear in the changing room receives its own quiet appraisal, the Vuori positions correctly — functional enough to be the everyday bag, refined enough not to look like a concession.",
    affiliateUrl: "https://www.amazon.com/s?k=vuori+ripstop+duffel+bag+men&tag=pilatescollective-20",
    tag: "Best Aesthetic",
  },
  {
    rank: "05",
    name: "Adidas Linear Duffel",
    price: "From $28",
    verdict: "Best budget bag for men",
    description:
      "Adidas's Linear Duffel is the entry-level option for men who need a capable studio bag without a significant outlay. The capacity is sufficient for a standard Pilates kit — grip socks, a change of clothes, a water bottle — and the zippered front pocket and end pockets provide enough organisation for the basics. The polyester construction is durable and wipes clean easily, and the adjustable shoulder strap handles both hand and shoulder carry. Where it underperforms relative to premium options is in the shoe compartment — the Linear doesn't have one, which means footwear shares space with clean clothes unless managed with a separate shoe bag. For practitioners who don't carry studio shoes or who use a dedicated shoe bag, this limitation is manageable.",
    affiliateUrl: "https://www.amazon.com/s?k=adidas+linear+duffel+bag+medium&tag=pilatescollective-20",
    tag: "Best Budget",
  },
  {
    rank: "06",
    name: "Manduka Go Steady Bag",
    price: "From $72",
    verdict: "Best tote for men",
    description:
      "Manduka's Go Steady Bag is the structured tote option for male practitioners who prefer a tote carry over a duffel — a less common choice for men, but one that suits those whose Pilates session is part of a lighter day with a smaller kit. The structured design holds its shape fully loaded or empty, with a reinforced base that sits cleanly on studio benches and locker-room floors. The organisation is comprehensive for a tote format: multiple interior pockets, a secure zip closure, and a key hook. The durable construction is characteristic of Manduka's broader range, and the bag handles daily studio use over years without the structural degradation that cheaper totes experience. A sound choice for the minimalist male practitioner.",
    affiliateUrl: "https://www.amazon.com/s?k=manduka+go+steady+3.0+tote+bag&tag=pilatescollective-20",
    tag: "Best Tote",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Bags for Men (2026)",
      "description": "The best bags for men attending Pilates — reviewed for capacity, studio organisation, and commute versatility.",
      "url": "https://pilatescollectiveclub.com/blog/best-pilates-bag-men",
      "datePublished": "2026-06-01",
      "dateModified": "2026-06-01",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/mathilde-langevin-aBJ3A-2LJyU-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-pilates-bag-men" },
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Bags for Men (2026)",
      "numberOfItems": 6,
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
        { "@type": "ListItem", "position": 3, "name": "Best Pilates Bags for Men", "item": "https://pilatescollectiveclub.com/blog/best-pilates-bag-men" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What bag should men bring to Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "A duffel or backpack in the 20–30 litre range covers most men's Pilates needs. Look for a separate shoe compartment — men's studio shoes take up more space than the average budget bag allows — and at least one interior zip pocket for valuables. A bag that doesn't read as overtly athletic is worth considering if you head from class to work or other commitments." } },
        { "@type": "Question", "name": "Is Pilates popular with men?", "acceptedAnswer": { "@type": "Answer", "text": "Increasingly so. Pilates is well-established in professional sports as a core training method, and male practitioners now represent a significant and growing share of boutique studio attendance. The combination of mobility, core strength, and injury prevention appeals directly to men who train across multiple disciplines." } },
        { "@type": "Question", "name": "What size gym bag do men need for Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "A 20–30 litre bag handles a typical men's Pilates kit: grip socks, a change of clothes (men's clothing takes more volume than women's), a towel, shoes, and personal items. If you shower at the studio and carry a full change, lean toward 28–35 litres. For lighter sessions without a clothes change, 18–22 litres is sufficient." } },
      ],
    },
  ],
};

export default function BestPilatesBagMenPage() {
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
              Best Pilates Bags<br /><span style={{ color: "#8b4a31" }}>for Men (2026)</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated June 2026 · 7 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              The bag requirements for men attending Pilates are straightforward in principle and poorly served in practice: enough capacity for a men's kit change, a proper shoe compartment, and a design that doesn't read as a gym bag in every other context of the day. Most dedicated gym bags solve only the capacity problem and ignore the rest. These six options have been selected for male Pilates practitioners specifically — prioritising shoe compartment quality, organisation that suits a studio kit, and designs that hold up in the kinds of premium studio environments where Pilates increasingly takes place.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/mathilde-langevin-aBJ3A-2LJyU-unsplash.jpg" alt="Best Pilates bags for men" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Bags · Studio-Tested</p>
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
                  { q: "What bag should men bring to Pilates?", a: "A duffel or backpack in the 20–30 litre range covers most men's Pilates needs. Look for a separate shoe compartment — men's studio shoes take up more space than the average budget bag allows — and at least one interior zip pocket for valuables. A bag that doesn't read as overtly athletic is worth considering if you head from class to work or other commitments." },
                  { q: "Is Pilates popular with men?", a: "Increasingly so. Pilates is well-established in professional sports as a core training method, and male practitioners now represent a significant and growing share of boutique studio attendance. The combination of mobility, core strength, and injury prevention appeals directly to men who train across multiple disciplines." },
                  { q: "What size gym bag do men need for Pilates?", a: "A 20–30 litre bag handles a typical men's Pilates kit: grip socks, a change of clothes (men's clothing takes more volume than women's), a towel, shoes, and personal items. If you shower at the studio and carry a full change, lean toward 28–35 litres. For lighter sessions without a clothes change, 18–22 litres is sufficient." },
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
                <ArticleCard title="Best Pilates Bags (2026)" excerpt="Studio totes, duffels, and mat carriers — the complete guide for every type of practitioner." href="/blog/best-pilates-bag" category="Equipment" readTime="7 min read" date="May 2026" imageUrl="/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg" />
                <ArticleCard title="Best Pilates Grip Socks" excerpt="The essential studio accessory — five options across every price point." href="/blog/best-pilates-grip-socks" category="Equipment" readTime="7 min read" date="May 2026" imageUrl="/pictures/jade-stephens-N21356amsyw-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best Pilates studios in Sydney…" />
      </main>
      <Footer />
    </>
  );
}
