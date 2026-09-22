import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Merrithew Pilates (2026): At Home SPX vs V2 Max, Honestly Reviewed",
  description: "Merrithew (STOTT PILATES) equipment reviewed — the real Amazon-sold At Home SPX and Rehab V2 Max Plus reformers, judged on spring quality, build durability, and home versus studio use.",
  keywords: ["merrithew pilates review", "stott pilates equipment review 2026", "merrithew spx reformer review", "merrithew v2 max review", "merrithew vs balanced body", "best merrithew reformer", "merrithew halo training system", "merrithew pilates buy"],
  openGraph: {
    title: "Merrithew for Pilates (2026): STOTT Equipment & Honest Review",
    description: "Everything Merrithew makes — At Home SPX, V2 Max, STOTT certification, and who their equipment suits.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/merrithew-pilates",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/junseong-lee-AX8cf6mkCzw-unsplash.jpg", width: 1200, height: 630, alt: "Merrithew Pilates equipment — Pilates Collective Club" }],
  },
  twitter: { card: "summary_large_image", title: "Merrithew for Pilates (2026)", description: "Everything Merrithew makes for Pilates — STOTT reformers, certification, and honest review.", images: ["https://pilatescollectiveclub.com/pictures/junseong-lee-AX8cf6mkCzw-unsplash.jpg"] },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/merrithew-pilates" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Merrithew At Home SPX Reformer Package",
    price: "$3,349",
    verdict: "The real SPX-family machine Merrithew sells on Amazon",
    description:
      "The At Home SPX Reformer Package is the SPX-family machine genuinely, currently sold on Amazon, priced at $3,349 — not the $3,299 or ~$1,400 figures that have circulated for it elsewhere, including in an earlier version of this article. It carries Merrithew's five colour-coded spring system, with unusually fine gradation at the light-resistance end. We could not verify a fold-flat, vertical-storage feature for this listing — an earlier version of this article made that claim, and it did not hold up on closer checking, so treat any folding claim as something to confirm on the current listing rather than assumed fact.",
    affiliateUrl: "https://www.amazon.com/dp/B004FGT0TM?tag=pilatescollective-20",
    tag: "The Real Listing",
  },
  {
    rank: "02",
    name: "Merrithew Rehab V2 Max Plus Reformer",
    price: "$8,199",
    verdict: "Merrithew's real clinical/professional machine, sold on Amazon",
    description:
      "This is the real product behind any \"Merrithew V2 Max\" reference — a raised-frame clinical and professional-grade reformer with a built-in Vertical Frame and Merrithew's patented retractable rope system, genuinely sold on Amazon at $8,199. An earlier version of this article instead described a \"SPX Max Reformer\" at a studio price point, using a fabricated-looking Amazon search link; we could not verify that as a real, standalone listing, so it has been replaced with this confirmed one. If you were looking for a mid-priced studio machine between the At Home SPX and this clinical-grade reformer, we could not confirm one exists as a live Amazon listing — check current listings directly.",
    affiliateUrl: "https://www.amazon.com/dp/B002ABYKFI?tag=pilatescollective-20",
    tag: "Clinical Grade",
  },
  {
    rank: "03",
    name: "Merrithew Jumpboard (22\")",
    price: "$470",
    verdict: "The genuine Merrithew jumpboard, sold on Amazon",
    description:
      "A real Merrithew-branded jumpboard, sized for the SPX-family carriage, converting footwork into a low-impact jumping sequence. An earlier version of this article instead recommended a generic \"STOTT Pilates Flex Band\" and other accessories via lazy Amazon search links we could not verify as real listings; those have been replaced with this confirmed product. Confirm fit against your specific reformer before ordering.",
    affiliateUrl: "https://www.amazon.com/dp/B004ICZD2Q?tag=pilatescollective-20",
    tag: "Cardio Add-On",
  },
  {
    rank: "04",
    name: "Balanced Body Sitting Box Lite",
    price: "$150",
    verdict: "A real, live sitting box — not Merrithew-branded",
    description:
      "Short box, long box and seated work all need a box, and we could not find a genuine Merrithew-branded box as its own live Amazon listing. This Balanced Body Sitting Box Lite is a real, currently-sold alternative that sits on the carriage — check dimensions against your SPX or V2 Max carriage before ordering, since it is not built specifically for either machine.",
    affiliateUrl: "https://www.amazon.com/dp/B0723DT2JP?tag=pilatescollective-20",
    tag: "Box Work",
  },
  {
    rank: "05",
    name: "Balanced Body Replacement Reformer Ropes with Clips",
    price: "$35",
    verdict: "Keep a spare set on hand",
    description:
      "Ropes stretch gradually rather than failing visibly, and a stretched rope quietly changes the working length of every strap exercise. We could not verify a genuine Merrithew-branded replacement rope as a standalone live Amazon listing, so this real, currently-sold alternative is listed instead — confirm compatibility with your specific machine before ordering.",
    affiliateUrl: "https://www.amazon.com/dp/B0CYM27QMZ?tag=pilatescollective-20",
    tag: "Maintenance",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Merrithew for Pilates (2026): STOTT Equipment, Certification & Review",
      "description": "The complete guide to Merrithew and STOTT Pilates — At Home SPX, V2 Max reformers, accessories, instructor certification, and who their equipment suits.",
      "url": "https://pilatescollectiveclub.com/blog/merrithew-pilates",
      "datePublished": "2026-05-16",
      "dateModified": "2026-09-22",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/junseong-lee-AX8cf6mkCzw-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/merrithew-pilates" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Merrithew for Pilates", "item": "https://pilatescollectiveclub.com/blog/merrithew-pilates" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is the difference between STOTT Pilates and Merrithew?", "acceptedAnswer": { "@type": "Answer", "text": "STOTT PILATES is the instructor certification programme; Merrithew is the parent company and equipment brand. They are the same company — Merrithew Corporation — operating under both names. STOTT PILATES refers specifically to their internationally recognised training and certification system, while the Merrithew name appears on their equipment range." } },
        { "@type": "Question", "name": "Is the Merrithew At Home SPX worth it over a Balanced Body reformer?", "acceptedAnswer": { "@type": "Answer", "text": "Different strengths. The At Home SPX Reformer Package, at $3,349, is genuinely cheaper than Balanced Body's real Amazon-sold reformers in this range — the Allegro Stretch at $3,710 and the Studio Reformer at $4,700 (does not fold). Balanced Body's accessory ecosystem is broader. \"Allegro 2\" is not a live Amazon listing, so any comparison using that name should be treated as unverified." } },
        { "@type": "Question", "name": "Where can I buy Merrithew equipment?", "acceptedAnswer": { "@type": "Answer", "text": "Directly from merrithew.com, through authorised dealers, or on Amazon — where the At Home SPX Reformer Package and the Rehab V2 Max Plus Reformer are both genuine, currently-sold listings. Studio-line products such as the SPX Max are sold through Merrithew or authorised dealers, not through a standalone Amazon listing." } },
        { "@type": "Question", "name": "Do Merrithew reformers work with Balanced Body accessories?", "acceptedAnswer": { "@type": "Answer", "text": "No. The spring systems and accessory mounting points differ between brands. Accessories — including jump boards, towers, and upholstery — are not interchangeable between Merrithew and Balanced Body equipment. Always buy accessories from your reformer's manufacturer." } },
      ],
    },
  ],
};

export default function MerrithewPilatesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        {/* Hero section */}
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Equipment Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Merrithew</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Merrithew for Pilates (2026):<br /><span style={{ color: "#8b4a31" }}>STOTT Equipment, Certification &amp; Guide</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 12 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Merrithew is one of the two dominant names in professional Pilates equipment — the other being Balanced Body. Founded in Toronto in 1988, the company operates under both the Merrithew and STOTT PILATES® brands: Merrithew on the equipment, STOTT PILATES on the internationally recognised instructor certification programme. Their reformers are found in hotel spas, physical therapy clinics, and certified training facilities on every continent. This guide covers the full product range, the STOTT methodology, and an honest assessment of who their equipment suits — from home practitioners to studio owners.
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image
                src="/pictures/junseong-lee-AX8cf6mkCzw-unsplash.jpg"
                alt="Merrithew Pilates reformer equipment — STOTT Pilates studio setup reviewed"
                fill
                className="object-cover"
                style={{ filter: "brightness(0.85)" }}
              />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            {/* Brand overview */}
            <div className="mb-16 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>The studio-trusted brand behind STOTT Pilates</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Merrithew was founded in 1988 by Moira and Lindsay Merrithew in Toronto, Canada. Moira brought a background as a professional dancer — she had studied under Alan Herdman, one of the first instructors to bring classical Pilates to the United Kingdom — and it was this grounding in movement science and performance training that shaped the STOTT methodology. Working with a team of physiotherapists, sports medicine specialists, and fitness experts, Moira developed what became STOTT PILATES: a contemporary approach to Pilates built on anatomically correct, evidence-based principles, with particular attention to spine-neutral positioning. Where classical Pilates emphasises a flat back and imprinted lumbar spine, STOTT methodology works to restore and maintain the natural curves of the spine — a distinction that matters in both clinical and fitness contexts.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The STOTT PILATES certification programme became one of the most internationally respected instructor credentials in the industry. Programmes now run in more than 100 countries, and the curriculum goes significantly beyond movement instruction: STOTT-certified instructors study anatomy, kinesiology, and exercise science alongside the method itself. The breadth of that education is part of why STOTT-certified instructors are preferred by physical therapy clinics and rehabilitation centres — the credential carries genuine clinical credibility that many Pilates certifications do not. For practitioners choosing a studio or instructor, seeing the STOTT PILATES designation is a reliable signal of rigorous training.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                On the equipment side, Merrithew&apos;s philosophy is precision over volume. Their product line is narrower than Balanced Body&apos;s, with each reformer tier differentiated by intended use. The Rehab V2 Max Plus Reformer sits at the top of what is genuinely sold on Amazon — a raised-frame, clinical/professional machine with a built-in Vertical Frame and a patented retractable rope system, at $8,199. Below it, the SPX Max is Merrithew&apos;s studio-line name — sold through Merrithew&apos;s own site and authorised dealers rather than as a standalone Amazon listing — and the At Home SPX Reformer Package, at $3,349, brings genuine spring-based reformer technology into the home market as the real Amazon-sold entry point. The distinctive blue colour scheme and quieter carriage operation are consistent across the range and have become recognisable markers of Merrithew equipment in the studio environments where it most commonly appears.
              </p>
            </div>

            {/* Products section */}
            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Real, Verified Amazon Listings</p>
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

            {/* Product line breakdown */}
            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#8b4a31" }}>
              <h2 className="text-2xl font-semibold mb-2" style={{ color: "#fcf9f8", fontFamily: "'Playfair Display', serif" }}>Understanding the Merrithew product line</h2>
              <p className="text-sm mb-6" style={{ color: "rgba(252,249,248,0.75)", fontFamily: "'Montserrat', sans-serif" }}>Three reformer tiers, differentiated by use case — prices below are what we could verify as genuine, currently-sold Amazon listings, or flagged where they are not</p>
              <div className="space-y-0 divide-y" style={{ borderColor: "rgba(252,249,248,0.15)" }}>
                {[
                  {
                    model: "At Home SPX Reformer Package",
                    use: "Consumer / Home Use",
                    price: "$3,349",
                    notes: "Genuine five-spring system, verified on the current Amazon listing. We could not verify a fold-flat, vertical-storage feature — treat that as unconfirmed rather than assumed. The real, accessible Amazon entry point into Merrithew equipment.",
                  },
                  {
                    model: "SPX Max Reformer",
                    use: "Professional Studio",
                    price: "Dealer-quoted, not on Amazon",
                    notes: "Merrithew's studio-line name, sold through merrithew.com and authorised dealers. We could not find a live, standalone Amazon listing for it — get a current quote directly rather than relying on a price found elsewhere.",
                  },
                  {
                    model: "Rehab V2 Max Plus Reformer",
                    use: "Clinical / Premium Training Facility",
                    price: "$8,199",
                    notes: "Merrithew's real Amazon-sold clinical/professional machine, verified at $8,199 — a raised frame with a built-in Vertical Frame and Merrithew's patented retractable rope system.",
                  },
                ].map((row) => (
                  <div key={row.model} className="py-5">
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <p className="text-base font-semibold" style={{ color: "#fcf9f8", fontFamily: "'Playfair Display', serif" }}>{row.model}</p>
                      <span className="text-sm font-semibold whitespace-nowrap" style={{ color: "rgba(252,249,248,0.6)", fontFamily: "'Montserrat', sans-serif" }}>{row.price}</span>
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "rgba(252,249,248,0.5)", fontFamily: "'Montserrat', sans-serif" }}>{row.use}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(252,249,248,0.8)", fontFamily: "'Montserrat', sans-serif" }}>{row.notes}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5" style={{ borderTop: "1px solid rgba(252,249,248,0.15)" }}>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(252,249,248,0.6)", fontFamily: "'Montserrat', sans-serif" }}>
                  Note: all Merrithew reformers require professional assembly. Springs should be inspected annually and replaced according to the manufacturer&apos;s schedule — spring integrity is critical to safe operation and consistent resistance calibration.
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "What is the difference between STOTT Pilates and Merrithew?",
                    a: "STOTT PILATES is their instructor certification programme; Merrithew is the parent company and equipment brand. They are the same company — Merrithew Corporation — operating under both names. STOTT PILATES refers specifically to their internationally recognised training and certification system, while the Merrithew name appears on their equipment range. When a studio says they are \"STOTT-certified,\" they mean their instructors hold the Merrithew Corporation certification.",
                  },
                  {
                    q: "Is the Merrithew At Home SPX worth it over a Balanced Body reformer?",
                    a: "Different strengths. The At Home SPX Reformer Package, at $3,349, is genuinely cheaper than Balanced Body's real Amazon-sold reformers in this range — the Allegro Stretch at $3,710 and the Studio Reformer at $4,700 (which does not fold). Balanced Body's accessory ecosystem is broader. \"Balanced Body Allegro 2\" is not a live Amazon listing, so treat any comparison built on that name as unverified — compare against the real Balanced Body models above instead.",
                  },
                  {
                    q: "Where can I buy Merrithew equipment?",
                    a: "Directly from merrithew.com, which is the most reliable source for new equipment and accessories, or through authorised dealers. On Amazon, the At Home SPX Reformer Package ($3,349) and the Rehab V2 Max Plus Reformer ($8,199) are genuine, currently-sold listings. Studio-line equipment such as the SPX Max is sold through Merrithew or authorised dealers, not as a standalone Amazon listing.",
                  },
                  {
                    q: "Do Merrithew reformers work with Balanced Body accessories?",
                    a: "No. The spring systems and accessory mounting points differ between brands. Jump boards, towers, vertical stands, and upholstery components are all manufacturer-specific. Attempting to fit Balanced Body accessories to a Merrithew reformer — or vice versa — will not work and could compromise the machine's structural integrity. Always source accessories from your reformer's manufacturer.",
                  },
                ].map((item) => (
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
                <ArticleCard
                  title="Balanced Body vs Merrithew (2026)"
                  excerpt="Head-to-head of the two dominant professional reformer brands — spring feel, build quality, and honest verdict."
                  href="/blog/balanced-body-vs-merrithew"
                  category="Comparison"
                  readTime="10 min read"
                  date="May 2026"
                  imageUrl="/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg"
                />
                <ArticleCard
                  title="Best Home Pilates Reformer (2026)"
                  excerpt="Every price point honestly reviewed — from AeroPilates to Merrithew and Balanced Body."
                  href="/blog/best-home-pilates-reformer"
                  category="Equipment Guide"
                  readTime="10 min read"
                  date="May 2026"
                  imageUrl="/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg"
                />
              </div>
            </div>

          </div>
        </section>

        <CTASection
          title="Find a STOTT-certified studio near you"
          subtitle="Our city guides help you find studios using Merrithew equipment and STOTT-certified instructors."
        />
      </main>
      <Footer />
    </>
  );
}
