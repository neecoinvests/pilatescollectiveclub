import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Clothes for Men (2026): What to Wear",
  description: "The best Pilates clothes for men — fitted shorts, tops and compression tights from Rhone, Lululemon, Vuori, Under Armour and CRZ YOGA, chosen for the reformer.",
  keywords: ["best pilates clothes for men", "men pilates outfit 2026", "what to wear pilates men", "men reformer pilates outfit", "best mens activewear pilates", "men pilates shorts", "men pilates leggings", "lululemon pilates men", "vuori pilates men", "rhone pilates men", "under armour compression leggings pilates"],
  openGraph: {
    title: "Best Pilates Clothes for Men (2026): Shorts, Tights & Tops",
    description: "What men should actually wear to Pilates — seven picks across every budget.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-clothes-for-men",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/samantha-sheppard-b8Q5fHBsyik-unsplash.jpg", width: 1200, height: 630, alt: "Best Pilates clothes for men — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Clothes for Men (2026)",
    description: "Rhone, Lululemon, Vuori, Under Armour, CRZ YOGA — the best men's Pilates clothing.",
    images: ["https://pilatescollectiveclub.com/pictures/samantha-sheppard-b8Q5fHBsyik-unsplash.jpg"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/blog/best-pilates-clothes-for-men",
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: 1,
    name: "Rhone Men's 5\" Pursuit Shorts (Lined)",
    price: "$84.00",
    verdict: "Best overall men's Pilates short",
    description: "Rhone is a men's performance brand, and this listing is sold on Amazon by Rhone itself (RHONE APPAREL INC), so you are buying the genuine article. The Pursuit is a lined short, which matters in Pilates: the built-in liner keeps you covered through footwork, leg circles and hip work on the reformer without needing a separate base layer. The 5\" inseam is on the shorter side of our 7–9\" guideline — it gives instructors a clear view of knee and hip tracking, and the liner handles coverage. If you prefer more length, size your choice by inseam first.",
    affiliateUrl: "https://www.amazon.com/dp/B0F5YC8SKL?tag=pilatescollective-20",
    tag: "pilatescollective-20",
  },
  {
    rank: 2,
    name: "Rhone Reign Men's Workout Shirt",
    price: "$54.40",
    verdict: "Best men's Pilates top",
    description: "The right Pilates top for men is close-fitting without being restrictive — loose tops pile up during rolldowns and inversions, obscuring both your position and your instructor's view of your spine. The Reign is Rhone's workout shirt, sold on Amazon directly by the brand (RHONE APPAREL INC). Choose your normal size for a fitted — not tight — silhouette that stays down through mat work and does not restrict shoulder movement on the reformer straps. It pairs naturally with the Pursuit short above.",
    affiliateUrl: "https://www.amazon.com/dp/B0CKC5XTNT?tag=pilatescollective-20",
    tag: "pilatescollective-20",
  },
  {
    rank: 3,
    name: "Lululemon ABC Short",
    price: "~$68 (lululemon.com)",
    verdict: "Best brand-direct men's studio short",
    description: "Not sold on Amazon — this links to lululemon.com. The ABC is one of the best-known men's shorts in studios. The gusseted construction and four-way stretch Warpstreme fabric reduce the bunching and restriction you feel in most athletic shorts during hip work, spine articulation and deep hip flexor exercises on the reformer. Pick an inseam in the 7–9\" range for the best balance of coverage during footwork and leg-alignment visibility for your instructor. Lululemon does not sell through Amazon, so we link to the brand's own site rather than an Amazon search that would surface unrelated products.",
    affiliateUrl: "https://shop.lululemon.com/",
    tag: "",
  },
  {
    rank: 4,
    name: "Vuori Kore Short",
    price: "~$64 (vuoriclothing.com)",
    verdict: "Best brand-direct premium alternative",
    description: "Not sold on Amazon — this links to vuoriclothing.com. Vuori's Kore Short is a popular alternative to Lululemon for men who want a cleaner, more refined aesthetic in the studio. It has a tailored fit that holds well through the hip-hinge movements that are heavy in Pilates. Vuori's colour palette runs muted compared with most athletic brands, which makes it a natural choice if you care about how your kit looks as much as how it performs. Vuori does not sell through Amazon, so we link to the brand's own site.",
    affiliateUrl: "https://vuoriclothing.com/",
    tag: "",
  },
  {
    rank: 5,
    name: "Under Armour Men's Tech Mesh Shorts",
    price: "$33.00",
    verdict: "Best mid-price men's short",
    description: "Sold and shipped by Amazon.com, this is an easy, reliable buy from an established athletic brand at well under half the price of the premium picks. It is a general training short rather than a Pilates-specific cut, so check the fit before class: you want it close enough that it does not ride up or catch on the footbar during carriage work. A sensible choice if you are trying a few classes before committing to studio-specific kit.",
    affiliateUrl: "https://www.amazon.com/dp/B07CZBPFTM?tag=pilatescollective-20",
    tag: "pilatescollective-20",
  },
  {
    rank: 6,
    name: "Under Armour Men's HeatGear Armour Leggings",
    price: "$27.00",
    verdict: "Best men's compression tights for reformer",
    description: "Compression tights are the right choice for many men's Pilates practice — they allow instructors to see your leg and hip alignment clearly, they do not shift or bunch on the reformer carriage, and they give proprioceptive feedback that helps with precision footwork. HeatGear is Under Armour's established compression line, and this listing is sold by Amazon.com. Wear them alone or under shorts if you prefer extra coverage.",
    affiliateUrl: "https://www.amazon.com/dp/B0874X381F?tag=pilatescollective-20",
    tag: "pilatescollective-20",
  },
  {
    rank: 7,
    name: "CRZ YOGA Linerless Workout Shorts 5\"",
    price: "$28.00",
    verdict: "Best budget men's Pilates short",
    description: "Sold on Amazon by CRZ YOGA, a well-reviewed budget activewear brand. These are linerless, so they work best worn over a pair of compression shorts or tights — a common setup for men who want the look of shorts with the coverage and alignment visibility of tights. The 5\" inseam keeps the fabric clear of the footbar and gives instructors a clear view of the knee. The best-value option in this guide.",
    affiliateUrl: "https://www.amazon.com/dp/B0CQ4Y9V74?tag=pilatescollective-20",
    tag: "pilatescollective-20",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Clothes for Men (2026): Shorts, Tights and Tops",
      "description": "The best Pilates clothes for men — shorts, compression tights, and tops from Rhone, Lululemon, Vuori, Under Armour, and CRZ YOGA.",
      "url": "https://pilatescollectiveclub.com/blog/best-pilates-clothes-for-men",
      "datePublished": "2026-05-21",
      "dateModified": "2026-09-27",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/samantha-sheppard-b8Q5fHBsyik-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-pilates-clothes-for-men" },
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Clothes for Men 2026",
      "url": "https://pilatescollectiveclub.com/blog/best-pilates-clothes-for-men",
      "numberOfItems": PRODUCTS.length,
      "itemListElement": PRODUCTS.map((p, i) => ({ "@type": "ListItem", "position": i + 1, "name": p.name, "url": p.affiliateUrl })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Pilates Clothes for Men", "item": "https://pilatescollectiveclub.com/blog/best-pilates-clothes-for-men" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What should men wear to Pilates?",
          "acceptedAnswer": { "@type": "Answer", "text": "Men should wear close-fitting shorts or compression tights to Pilates — not loose shorts or tracksuit bottoms. Close-fitting clothing allows your instructor to see your alignment and corrects a major source of wasted feedback. The Rhone Pursuit Short or Under Armour HeatGear compression leggings are two good starting points." },
        },
        {
          "@type": "Question",
          "name": "Can men wear shorts to Pilates?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes — shorts are perfectly appropriate for Pilates. A 7–9 inch inseam works best: long enough that you are covered during hip and footwork, short enough that instructors can see your knee and hip alignment. Avoid very short athletic shorts (under 5\") and basketball-length shorts (over 11\") — both create practical problems on the reformer." },
        },
        {
          "@type": "Question",
          "name": "Do men wear leggings to Pilates?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, and for serious practice, compression tights are often the better choice. They prevent the shifting and bunching that shorts experience on the reformer carriage, allow your instructor to see full leg alignment through the whole foot-to-hip chain, and provide proprioceptive feedback that helps with precision work. Under Armour HeatGear leggings are the best value option in our guide." },
        },
      ],
    },
  ],
};

export default function BestPilatesClothesForMenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Apparel</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Men</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Pilates Clothes<br /><span style={{ color: "#8b4a31" }}>for Men (2026)</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 9 min read</p>
            <p className="text-xs mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon, where we earn a small commission on qualifying purchases. Lululemon and Vuori links go directly to the brands&apos; own sites.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Men show up to Pilates in basketball shorts and oversized T-shirts more often than not. It is a practical mistake — loose clothing prevents instructors from seeing your alignment, shifts and bunches on the reformer carriage, and turns a precision practice into a guessing game. This guide covers the seven best men&apos;s Pilates clothing options: what to wear, why it matters, and which specific pieces hold up in the studio.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "380px" }}>
              <Image src="/pictures/samantha-sheppard-b8Q5fHBsyik-unsplash.jpg" alt="Men's Pilates clothing — best shorts, tights and tops for studio practice" fill className="object-cover" style={{ filter: "brightness(0.82)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto space-y-16">

            {/* Why clothing matters for men */}
            <div>
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Why clothing matters in Pilates — specifically for men</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Pilates is a precision practice. Your instructor needs to see the relationship between your foot, knee, hip, and spine during footwork, the hundred, and long stretch — the whole kinetic chain from ankle to shoulder. Baggy shorts and loose tops make that impossible. You are paying for cueing and correction. Bad clothing wastes it.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                There is also a practical dimension: loose fabric catches on reformer footbars, pools during rolldowns, and shifts during carriage movements. Close-fitting technical fabric stays in place. The seven pieces below solve both problems.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { heading: "Shorts: 7–9\" inseam", body: "Long enough for coverage during hip work, short enough for leg alignment visibility." },
                  { heading: "Tights: medium compression", body: "Prevents shifting on the carriage, shows full hip-to-foot alignment chain." },
                  { heading: "Tops: fitted, not tight", body: "Stays down through rolldowns and inversions, doesn't restrict shoulder movement." },
                ].map((item) => (
                  <div key={item.heading} className="rounded-xl p-4" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.heading}</p>
                    <p className="text-xs leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Products */}
            <div>
              <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>The 7 best men&apos;s Pilates clothing picks</h2>
              <div className="space-y-8">
                {PRODUCTS.map((product) => (
                  <div key={product.rank} className="rounded-2xl overflow-hidden" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.35)", boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
                    <div className="p-7">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-semibold w-6 h-6 rounded-full flex items-center justify-center text-white flex-shrink-0" style={{ backgroundColor: "#1b1c1c", fontFamily: "'Montserrat', sans-serif", fontSize: "10px" }}>{product.rank}</span>
                          <div>
                            <h3 className="text-xl font-semibold" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{product.name}</h3>
                            <p className="text-xs mt-0.5" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>{product.verdict}</p>
                          </div>
                        </div>
                        <span className="text-sm font-semibold whitespace-nowrap" style={{ color: "#c5a882", fontFamily: "'Montserrat', sans-serif" }}>{product.price}</span>
                      </div>
                      <p className="text-sm leading-relaxed mb-5" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{product.description}</p>
                      <a href={product.affiliateUrl} target="_blank" rel={product.affiliateUrl.includes("amazon.com") ? "noopener noreferrer sponsored" : "noopener noreferrer"} className="inline-block px-5 py-2.5 rounded-xl text-xs font-semibold transition-opacity hover:opacity-90" style={{ backgroundColor: "#8b4a31", color: "#ffffff", fontFamily: "'Montserrat', sans-serif" }}>
                        Shop {product.name.split(" ").slice(0, 2).join(" ")} →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Men&apos;s Pilates clothing — common questions</h2>
              <div className="space-y-4">
                {[
                  { q: "What should men wear to Pilates?", a: "Close-fitting shorts (7–9\" inseam) or compression tights, with a fitted top. Loose shorts and baggy T-shirts prevent your instructor from seeing your alignment — which defeats the purpose of a correction-based practice. The Rhone Pursuit Short and Under Armour HeatGear compression leggings are two good starting points at different price points." },
                  { q: "Can men wear shorts to Pilates?", a: "Yes — shorts are perfectly appropriate. A 7–9 inch inseam is ideal: long enough for coverage during hip flexor and footwork exercises, short enough for instructors to see knee and hip tracking. Avoid very short athletic shorts (under 5\") which create coverage problems, and basketball-length shorts (11\"+) which bunch on the reformer and hide alignment." },
                  { q: "Do men need grip socks for Pilates?", a: "Yes — grip socks are required or strongly recommended at most studios. The grippy sole prevents slipping on reformer footbars and mat surfaces during standing balance work. Standard athletic socks are too slippery. Toesox and Tavi Noir are the most studio-recommended brands for men." },
                  { q: "What is the difference between Lululemon and Vuori for Pilates?", a: "Both are excellent for Pilates. Lululemon's ABC Short has a more technical, performance-focused cut built around a gusseted, four-way stretch design. Vuori's Kore Short has a tailored fit and a cleaner, more muted aesthetic. Neither brand sells on Amazon, so we link directly to lululemon.com and vuoriclothing.com." },
                ].map((faq, i) => (
                  <div key={i} className="rounded-xl p-5" style={{ backgroundColor: "#fcf9f8", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{faq.q}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Further reading */}
            <div>
              <h2 className="text-2xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="Best Pilates Equipment for Men" excerpt="Mats, grip socks, foam rollers, resistance bands and the best home reformer for men — all compared." href="/blog/best-pilates-equipment-for-men" category="Equipment" readTime="10 min read" date="May 2026" imageUrl="/pictures/tomi-blasic-tj0sM4gHlns-unsplash.jpg" />
                <ArticleCard title="What to Wear to Pilates" excerpt="The complete guide to Pilates clothing — covering women and men, mat and reformer classes." href="/blog/what-to-wear-to-pilates" category="Guide" readTime="6 min read" date="May 2026" imageUrl="/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg" />
                <ArticleCard title="Best Pilates Grip Socks" excerpt="The right grip sock prevents slipping on reformer footbars and mat surfaces — six options compared." href="/blog/best-pilates-grip-socks" category="Apparel" readTime="6 min read" date="May 2026" imageUrl="/pictures/jade-stephens-N21356amsyw-unsplash.jpg" />
                <ArticleCard title="Gymshark Pilates Activewear" excerpt="Gymshark's Pilates range for men — which pieces work in the studio and which don't." href="/blog/gymshark-pilates" category="Brand Review" readTime="9 min read" date="May 2026" imageUrl="/pictures/roxana-popovici-hiHBILFNah4-unsplash.jpg" />
              </div>
            </div>

          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best Pilates studios in London…" />
      </main>
      <Footer />
    </>
  );
}
