import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Align Pilates Reformer Review (2026): H1, C2 Pro, F2, A8 & C8-S Compared | Pilates Collective Club",
  description: "Align Pilates reformers reviewed honestly — H1, C2 Pro, F2 Folding, A8, and C8-S with Tower compared against Balanced Body and Merrithew at a meaningful price advantage.",
  keywords: ["align pilates reformer review", "align pilates reformer", "align pilates c2 pro", "align pilates f2 folding reformer", "align pilates a8 reformer", "align pilates c8-s tower", "align pilates h1 reformer", "align pilates vs balanced body", "align pilates vs merrithew", "best pilates reformer 2026"],
  openGraph: {
    title: "Align Pilates Reformer Review (2026): H1, C2 Pro, F2, A8 & C8-S",
    description: "Align Pilates makes studio-quality reformers at mid-tier prices. An honest review of their full range — from entry-level to professional studio.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/align-pilates-reformer-review",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-white-reformer-plaster.png", width: 1200, height: 630, alt: "Align Pilates reformer review — Pilates Collective Club" }],
  },
  twitter: { card: "summary_large_image", title: "Align Pilates Reformer Review (2026)", description: "H1 vs C2 Pro vs F2 vs A8 vs C8-S — an honest review of the full Align Pilates range.", images: ["https://pilatescollectiveclub.com/pictures/stitch-white-reformer-plaster.png"] },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/align-pilates-reformer-review" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Align Pilates H1 Home Reformer",
    price: "From $799",
    verdict: "Best entry-level Align Pilates reformer",
    description: "The H1 is Align Pilates' entry point into home reformer practice — a folding machine designed around the constraints of a shared home space. The folding footbar allows the machine to be stored flat against a wall, and the carriage rides on nylon rollers rather than the sealed ball bearings found on professional models. For a practitioner new to reformer work who is not yet certain of their long-term commitment to the apparatus, or who needs a machine that genuinely disappears into a spare room when not in use, the H1 makes the reformer accessible. The four-spring system covers the core reformer repertoire. Expect a smooth but not silky carriage — it performs correctly without the refined feel of the C2 Pro or above. A practical, honest entry-level machine at an accessible price point.",
    affiliateUrl: "https://www.amazon.com/s?k=align+pilates+h1+home+reformer&tag=pilatescollective-20",
    tag: "Entry Level",
  },
  {
    rank: "02",
    name: "Align Pilates C2 Pro Reformer",
    price: "From $1,199",
    verdict: "Best mid-range Align Pilates reformer",
    description: "The C2 Pro is Align Pilates' most popular home model and the first in the range to earn genuine endorsement from working instructors rather than casual home users. Five springs, sealed ball-bearing carriage rollers, an adjustable two-position footbar, and padded shoulder rests make this a professionally capable machine. The carriage action is meaningfully smoother than the H1 — the difference is perceptible on the first use and becomes important across years of practice. The C2 Pro folds upright for wall storage, which separates it from the non-folding professional models above it. Carriage dimensions are approximately 86cm × 60cm, consistent with professional standards. For most home practitioners who want a credible machine without requiring permanent floor space, the C2 Pro is the strongest value point in the Align range.",
    affiliateUrl: "https://www.amazon.com/s?k=align+pilates+c2+pro+reformer&tag=pilatescollective-20",
    tag: "Most Popular",
  },
  {
    rank: "03",
    name: "Align Pilates F2 Folding Reformer",
    price: "From $1,699",
    verdict: "Best folding reformer with professional springs",
    description: "The F2 is the most compelling proposition in the Align range for practitioners who need professional spring quality in a machine that can be stored upright. Unlike the C2 Pro's two-position footbar, the F2 has a three-position adjustable footbar — the same as professional studio machines — and uses the same professional-grade springs as the A8. The folding mechanism is robust and designed for regular use rather than occasional storage. For private instructors who teach in client homes, or practitioners who want full studio spring quality without permanently surrendering floor space, the F2 occupies a uniquely practical position. Carriage dimensions match the A8 at approximately 86cm × 60cm. A professional machine that folds — a genuine rarity in the market.",
    affiliateUrl: "https://www.amazon.com/s?k=align+pilates+f2+folding+reformer&tag=pilatescollective-20",
    tag: "Best Folding",
  },
  {
    rank: "04",
    name: "Align Pilates A8 Reformer",
    price: "From $2,499",
    verdict: "Best professional studio-grade Align Pilates reformer",
    description: "The A8 is Align Pilates' professional studio machine — the model found in commercial Pilates studios across the UK, Europe, and increasingly in North America and Australia. Five professional springs matching the STOTT PILATES colour convention (Blue, Red, Green, Yellow, and a half spring), sealed ball-bearing carriage rollers, a three-position adjustable footbar, and full aluminium-and-steel construction throughout. The carriage action on the A8 is the smoothest in the Align range — a difference that becomes significant when running a full teaching schedule on the machine day after day. The A8 does not fold, which is appropriate: it is built for permanent studio placement. Instructors trained in the Merrithew method will find the spring colour system immediately familiar. The A8 competes directly with the Merrithew SPX Max on specification and is priced meaningfully below the Balanced Body Allegro 2.",
    affiliateUrl: "https://www.amazon.com/s?k=align+pilates+a8+reformer&tag=pilatescollective-20",
    tag: "Studio Grade",
  },
  {
    rank: "05",
    name: "Align Pilates C8-S Reformer with Tower",
    price: "From $3,199",
    verdict: "Best complete Align Pilates studio setup",
    description: "The C8-S with Tower is the most complete apparatus in the Align Pilates range — a full professional reformer with an integrated tower system that attaches to the foot end of the machine, giving access to the combined reformer and tower repertoire without a separate Cadillac. The tower adds springs, a push-through bar, and a roll-down bar, enabling the full classical tower exercises that sit between the reformer and the Cadillac in traditional studio programming. For practitioners who want to progress into trapeze and push-through bar work, or instructors building a complete teaching setup, the C8-S bundle eliminates a separate tower purchase. The reformer component matches the A8 in build quality and spring specification. Assembly requires approximately three hours; the result is a genuinely complete apparatus covering the majority of what a full Cadillac offers.",
    affiliateUrl: "https://www.amazon.com/s?k=align+pilates+c8+reformer+tower&tag=pilatescollective-20",
    tag: "Reformer + Tower",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Align Pilates Reformer Review (2026): H1, C2 Pro, F2, A8 & C8-S Compared",
      "description": "Align Pilates reformers reviewed honestly — H1, C2 Pro, F2 Folding, A8, and C8-S with Tower compared against Balanced Body and Merrithew at a meaningful price advantage.",
      "url": "https://pilatescollectiveclub.com/blog/align-pilates-reformer-review",
      "datePublished": "2026-06-14",
      "dateModified": "2026-06-14",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-white-reformer-plaster.png", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/align-pilates-reformer-review" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Align Pilates Reformer Review", "item": "https://pilatescollectiveclub.com/blog/align-pilates-reformer-review" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is Align Pilates good enough for professional teaching?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. The A8 and C8-S are used by working instructors in commercial studios. The spring system, sealed-bearing carriage, and structural construction meet professional standards. They are a value choice at a comparable quality level to the major American brands, not a compromise." } },
        { "@type": "Question", "name": "How does Align Pilates compare to Balanced Body?", "acceptedAnswer": { "@type": "Answer", "text": "Spring feel and long-term brand reputation slightly favour Balanced Body; price and value favour Align Pilates. Both produce professionally capable machines. The Allegro 2 is widely considered to have the finest carriage feel in its class; the Align A8 is excellent but not quite at that level. For most instructors, the functional gap does not justify the price difference." } },
        { "@type": "Question", "name": "How does Align Pilates compare to Merrithew?", "acceptedAnswer": { "@type": "Answer", "text": "Very closely matched. The spring colour convention is identical, making Align machines immediately familiar to STOTT PILATES-trained instructors. The A8 competes directly with the SPX Max on specification. Merrithew's main advantages are a more established North American service network and a deeper accessories ecosystem." } },
        { "@type": "Question", "name": "Which Align Pilates model should I buy?", "acceptedAnswer": { "@type": "Answer", "text": "The H1 for a first reformer with budget and storage constraints. The C2 Pro for the best value in the range — professional springs, sealed bearings, fold-up storage. The F2 if you need professional spring quality in a machine that still folds. The A8 for a permanent studio machine. The C8-S with Tower to add the full tower and Cadillac repertoire without a separate purchase." } },
      ],
    },
  ],
};

export default function AlignPilatesReformerReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        {/* Hero section */}
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Brand Review</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Equipment Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Align Pilates Reformer Review (2026):<br /><span style={{ color: "#8b4a31" }}>The Brand Earning Studio Endorsement</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated June 2026 · 11 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Align Pilates is not a brand you find cited in classical Pilates textbooks or printed on the walls of long-established studios. They are the brand that working instructors — the ones equipping private teaching rooms and small boutique spaces — are increasingly buying instead of Balanced Body or Merrithew, because the machines perform comparably at 20–40% lower cost. This is an honest review of their full range: what each model is for, where the savings show up, and where they don&apos;t.
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-white-reformer-plaster.png" alt="Align Pilates reformer — sleek white machine against plaster wall" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            {/* Who is Align Pilates */}
            <div className="mb-16 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Who is Align Pilates?</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Founded in the UK, Align Pilates entered the market as a lower-cost alternative to the dominant American brands. Their machines are manufactured to professional specifications — sealed-bearing carriages on professional models, colour-coded spring systems, and aluminium-and-steel construction throughout — and are used in commercial Pilates studios across the UK, Europe, and increasingly in North America and Australia.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The spring colour system maps directly to the STOTT PILATES convention used by Merrithew-trained instructors: Blue for light resistance, Red for medium, Green for heavy, Yellow for extra heavy. Any instructor trained in the Merrithew method can pick up an Align Pilates machine and work without relearning spring conventions — a deliberate design decision that has made Align a credible choice in communities where BASI and Merrithew instructors are prevalent.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The range runs from the entry-level H1 at $799 to the studio C8-S with Tower at $3,199, with each step up bringing a meaningful improvement: from nylon to sealed-bearing carriage rollers, from a two-position to three-position footbar, from folding to permanent construction, and finally to the full reformer-plus-tower combination.
              </p>
            </div>

            {/* Comparison criteria */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What makes Align Pilates different: four criteria</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    heading: "Spring quality",
                    body: "Professional models (C2 Pro and above) use colour-coded springs matching the STOTT PILATES convention. The five-spring system — including a half spring — covers the full reformer repertoire. The entry-level H1 uses a four-spring system without the half spring.",
                  },
                  {
                    heading: "Carriage bearings",
                    body: "This is the most significant quality dividing line in the range. The H1 uses nylon rollers; the C2 Pro and all models above use sealed ball bearings. The difference in carriage smoothness is perceptible immediately and becomes important across years of regular practice.",
                  },
                  {
                    heading: "Carriage dimensions",
                    body: "Professional models (C2 Pro and above) maintain approximately 86cm × 60cm carriage dimensions, consistent with professional studio standards. This accommodates a full range of body types for the standard reformer repertoire, including long-box and short-box series.",
                  },
                  {
                    heading: "Price vs alternatives",
                    body: "The A8 at $2,499 competes with the Merrithew SPX Max at approximately $2,199 and is priced meaningfully below the Balanced Body Allegro 2 at approximately $3,495. At every level of the range, Align Pilates delivers a genuine price advantage over the major American brands.",
                  },
                ].map((item) => (
                  <div key={item.heading} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.heading}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Products section */}
            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-8" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Align Pilates Models · Full Range Reviewed</p>

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

              {/* ProductCards */}
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

            {/* Align vs Balanced Body vs Merrithew comparison */}
            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-2xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Align Pilates vs Balanced Body vs Merrithew: honest comparison</h2>
              <div className="space-y-5">
                {[
                  {
                    label: "Build quality",
                    body: "All three are professionally built. Align Pilates is comparable in structural quality to Merrithew; Balanced Body edges ahead on carriage smoothness and the long-term component track record of a brand with decades of commercial studio presence. For most practitioners and instructors, the functional difference is not meaningful in everyday use.",
                  },
                  {
                    label: "Spring feel",
                    body: "Balanced Body springs have a specific feel that experienced practitioners often prefer — a slightly more progressive tension through the range of motion. Merrithew and Align Pilates springs are comparable in resistance profile and responsiveness. Beginners and intermediate practitioners will not notice a meaningful difference between the three brands.",
                  },
                  {
                    label: "Instructor familiarity",
                    body: "Align Pilates uses the Merrithew spring colour convention (Blue/Red/Green/Yellow/Half), making machines immediately familiar to STOTT PILATES-trained instructors. BASI-trained instructors who primarily work on Balanced Body will need a brief orientation. Classical instructors will find all three brands require some familiarisation.",
                  },
                  {
                    label: "Accessories",
                    body: "Balanced Body has the widest accessories ecosystem — boxes, jumpboards, towers, and specialty springs are widely stocked. Merrithew's is comprehensive. Align Pilates' accessories range covers the core items (box, jumpboard, tower for C8-S) but is not yet as deep. For practitioners who want a full accessories ecosystem, Balanced Body leads.",
                  },
                  {
                    label: "Price",
                    body: "At every level of the range, Align Pilates offers a genuine price advantage. The C2 Pro at $1,199 delivers sealed-bearing quality that requires a significantly higher spend from either American brand. The A8 at $2,499 is priced below the Balanced Body Allegro 2 and near the Merrithew SPX Max on comparable specification.",
                  },
                  {
                    label: "Verdict",
                    body: "In the UK or Europe, Align Pilates is the straightforward recommendation for a professional-quality machine at a fair price, with an established service network. In the US, Balanced Body and Merrithew have stronger service networks and resale markets — but the price gap is real and significant. For instructors equipping a private teaching room rather than a large commercial studio, that gap matters.",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <p className="text-sm font-semibold shrink-0 w-36" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{item.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "Is Align Pilates good enough for professional teaching?",
                    a: "Yes. The A8 and C8-S are used by working instructors in commercial settings. The spring system, sealed-bearing carriage, and structural construction meet professional standards. They are a value choice at a comparable quality level to the major American brands, not a compromise.",
                  },
                  {
                    q: "How does Align Pilates compare to Balanced Body?",
                    a: "Spring feel and long-term brand reputation slightly favour Balanced Body; price and value favour Align Pilates. Both produce professionally capable machines. The Allegro 2 is widely considered to have the finest carriage feel in its class; the Align A8 is excellent but not quite at that level. For most instructors, the functional gap does not justify the price difference.",
                  },
                  {
                    q: "How does Align Pilates compare to Merrithew?",
                    a: "Very closely matched. The spring colour convention is identical, making Align machines immediately familiar to STOTT PILATES-trained instructors. The A8 competes directly with the SPX Max on specification. Merrithew's main advantages are a more established North American service network and a deeper accessories ecosystem.",
                  },
                  {
                    q: "Which Align Pilates model should I buy?",
                    a: "The H1 for a first reformer with budget and storage constraints. The C2 Pro for the best value in the range — professional springs, sealed bearings, fold-up storage. The F2 if you need professional spring quality in a machine that still folds. The A8 for a permanent studio machine. The C8-S with Tower to add the full tower and Cadillac repertoire without a separate purchase.",
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
                <ArticleCard title="Balanced Body vs Merrithew (2026)" excerpt="The two dominant Pilates equipment brands compared honestly — spring feel, build quality, price, and resale value." href="/blog/balanced-body-vs-merrithew" category="Equipment Guide" readTime="10 min read" date="June 2026" imageUrl="/pictures/stitch-reformer-row-studio.png" />
                <ArticleCard title="Best Home Pilates Reformer (2026)" excerpt="The best home reformers at every price point — from entry-level to studio-grade." href="/blog/best-home-pilates-reformer" category="Equipment Guide" readTime="10 min read" date="June 2026" imageUrl="/pictures/stitch-reformer-sunlit-minimal.png" />
              </div>
            </div>

          </div>
        </section>

        <CTASection title="Find a studio using professional Pilates equipment" subtitle="Our city guides identify the best studios worldwide." />
      </main>
      <Footer />
    </>
  );
}
