import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Align-Pilates Reformer Review (2026): C2 Pro, C8 Pro & H1 Compared | Pilates Collective Club",
  description: "Align-Pilates reformers reviewed honestly — C2 Pro, C8 Pro, and H1 with tower compared against Balanced Body and Merrithew at a significantly lower price.",
  keywords: ["align pilates reformer review", "align pilates c2 pro", "align pilates c8 pro", "align pilates h1 reformer", "align pilates vs balanced body", "align pilates vs merrithew", "best pilates reformer mid range", "align pilates 2026", "align pilates uk reformer", "studio quality home reformer"],
  openGraph: {
    title: "Align-Pilates Reformer Review (2026): C2 Pro, C8 Pro & H1",
    description: "Align-Pilates makes studio-grade reformers at mid-tier prices. Here's an honest review of their main machines.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/align-pilates-reformer-review",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/junseong-lee-G9H5edUL0T8-unsplash.jpg", width: 1200, height: 630, alt: "Align-Pilates reformer review — Pilates Collective Club" }],
  },
  twitter: { card: "summary_large_image", title: "Align-Pilates Reformer Review (2026)", description: "C2 Pro vs C8 Pro vs H1 — an honest review of Align-Pilates' reformer range.", images: ["https://pilatescollectiveclub.com/pictures/junseong-lee-G9H5edUL0T8-unsplash.jpg"] },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/align-pilates-reformer-review" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Align-Pilates C8 Pro Reformer",
    price: "From $2,200",
    verdict: "Best overall Align-Pilates reformer",
    description: "The C8 Pro is Align-Pilates' flagship home and semi-professional reformer — and the model that has most effectively broken into the Balanced Body and Merrithew market. Five springs (blue, red, green, yellow, and a half spring), sealed ball-bearing carriage rollers, an adjustable three-position footbar, padded shoulder rests with height adjustment, and a full-length aluminum and steel frame. The carriage action is genuinely smooth — indistinguishable from machines costing twice as much in everyday use. The spring colour system matches the STOTT PILATES convention, which makes it immediately familiar to instructors trained in that method. The C8 Pro ships in a single box requiring professional assembly; budget approximately two hours. The machine does not fold, but the build quality justifies permanent placement. A serious reformer at a meaningful price advantage over the major American brands.",
    affiliateUrl: "https://www.amazon.com/s?k=align+pilates+c8+pro+reformer&tag=pilatescollective-20",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "Align-Pilates C2 Pro Reformer",
    price: "From $1,499",
    verdict: "Best entry into professional-grade reformers",
    description: "The C2 Pro is Align-Pilates' entry professional model — the first Align machine to earn genuine endorsement from working instructors rather than casual home users. Five springs, sealed bearings, adjustable footbar, and an aluminium frame that matches the structural rigidity of machines in a significantly higher price bracket. The primary difference from the C8 Pro is refinement of components: the C2 Pro's footbar adjustment is two-position (vs three), the shoulder rest padding is slightly thinner, and the overall polish is a step below the flagship. For practitioners and instructors who want a credible professional machine at an accessible price, the C2 Pro is exceptional value. It also folds upright — a meaningful advantage over the non-folding C8 Pro for home studios.",
    affiliateUrl: "https://www.amazon.com/s?k=align+pilates+c2+pro+reformer&tag=pilatescollective-20",
    tag: "Best Entry Pro",
  },
  {
    rank: "03",
    name: "Align-Pilates H1 Reformer with Tower",
    price: "From $2,800",
    verdict: "Best complete home studio setup",
    description: "The H1 with Tower is the most compelling proposition in the Align-Pilates range — a full reformer plus an integrated tower system that attaches to the foot end of the machine, giving access to the complete reformer and tower repertoire without needing a separate Cadillac. For home practitioners who want to progress beyond the reformer into trapeze work, push-through bar exercises, and leg spring exercises, the H1 bundle eliminates the need for a separate $1,500+ tower purchase. The reformer component matches the C2 Pro in build quality; the tower adds springs, a push-through bar, and a roll-down bar. The full assembly requires approximately three hours but results in a genuinely complete apparatus that covers most of what a full studio Cadillac offers.",
    affiliateUrl: "https://www.amazon.com/s?k=align+pilates+h1+reformer+tower&tag=pilatescollective-20",
    tag: "Reformer + Tower",
  },
  {
    rank: "04",
    name: "Align-Pilates Reformer Box",
    price: "From $149",
    verdict: "Essential accessory for the full repertoire",
    description: "The Align-Pilates Box is compatible with both the C2 Pro and C8 Pro and is required for a significant portion of the reformer repertoire — the Long Box and Short Box series, the Pulling Straps exercises, and several of the seated rowing series cannot be performed without it. The Box is constructed from padded plywood with aluminium reinforcement; it sits stably on the reformer carriage and handles bodyweight in prone and seated positions without flex. This is not an optional upgrade — it is a necessary accessory for anyone intending to perform the full reformer program. Purchase it at the same time as the reformer.",
    affiliateUrl: "https://www.amazon.com/s?k=align+pilates+reformer+box&tag=pilatescollective-20",
    tag: "Essential Accessory",
  },
  {
    rank: "05",
    name: "Align-Pilates Reformer Jumpboard",
    price: "From $199",
    verdict: "Best accessory for cardio intervals",
    description: "The Align-Pilates Jumpboard attaches to the foot end of the C2 Pro and C8 Pro reformers and converts footwork into a low-impact cardio sequence — a particularly valuable addition for practitioners who want a complete workout without the joint impact of running or traditional aerobics. The board is padded, stable, and sized to accommodate both parallel and turned-out foot positions across the standard jump repertoire. Jumpboard work requires the reformer to be in a suitable position (springs relatively light) and is contraindicated during certain phases of pregnancy and for some knee conditions. For practitioners without contraindications, the jumpboard meaningfully extends the workout variety available from a home reformer.",
    affiliateUrl: "https://www.amazon.com/s?k=align+pilates+jumpboard+reformer&tag=pilatescollective-20",
    tag: "Cardio Add-On",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Align-Pilates Reformer Review (2026): The Mid-Tier Machine Earning Studio Endorsement",
      "description": "Align-Pilates reformers reviewed honestly — C2 Pro, C8 Pro, and H1 with tower compared against Balanced Body and Merrithew at a significantly lower price.",
      "url": "https://pilatescollectiveclub.com/blog/align-pilates-reformer-review",
      "datePublished": "2026-05-16",
      "dateModified": "2026-05-16",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/junseong-lee-G9H5edUL0T8-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/align-pilates-reformer-review" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Align-Pilates Reformer Review", "item": "https://pilatescollectiveclub.com/blog/align-pilates-reformer-review" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is Align-Pilates good enough for professional teaching?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. The C2 Pro and C8 Pro are used by working instructors in commercial settings. The spring system, carriage quality, and structural integrity meet professional standards." } },
        { "@type": "Question", "name": "How does Align-Pilates compare to Balanced Body?", "acceptedAnswer": { "@type": "Answer", "text": "Spring feel and long-term reputation slightly favour Balanced Body; price and value favour Align-Pilates. Both are professional-grade. The Allegro 2 is widely considered the best carriage feel available; the C8 Pro is excellent but not quite at that level." } },
        { "@type": "Question", "name": "Is Align-Pilates available in the United States?", "acceptedAnswer": { "@type": "Answer", "text": "Available through specialist dealers and on Amazon. The brand is US-available but the service network is less established than Balanced Body or Merrithew's. Factor in shipping costs and servicing access when comparing prices." } },
        { "@type": "Question", "name": "Which Align-Pilates model should I buy?", "acceptedAnswer": { "@type": "Answer", "text": "The C8 Pro for a dedicated home studio or professional teaching room. The C2 Pro for a home practitioner who wants professional spring quality at a lower price. The H1 with Tower if you want the reformer + tower repertoire without purchasing two separate pieces of equipment." } },
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
              Align-Pilates Reformer Review (2026):<br /><span style={{ color: "#8b4a31" }}>The Mid-Tier Machine Earning Studio Endorsement</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 10 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Align-Pilates is not the brand you find in Pilates textbooks or on the walls of established studios. They are the brand that working instructors — the ones equipping private teaching rooms and small boutique spaces — are increasingly buying instead of Balanced Body or Merrithew, because the machines perform comparably at 20–40% lower cost. This is an honest review of their main models, who each is for, and where the savings show up (and where they don&apos;t).
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/junseong-lee-G9H5edUL0T8-unsplash.jpg" alt="Align-Pilates reformer review — C2 Pro, C8 Pro, and H1 compared" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            {/* Who is Align-Pilates */}
            <div className="mb-16 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Who is Align-Pilates and why should you consider them?</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Founded in the UK, Align-Pilates entered the market as a lower-cost alternative to the dominant American brands. Their machines are manufactured to professional specifications — sealed-bearing carriages, colour-coded spring systems, and aluminium-and-steel construction throughout — and are used in commercial Pilates studios in the UK, Europe, and increasingly in the US and Australia.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The colour-coded spring system — Blue for light resistance, Red for medium, Green for heavy, Yellow for extra heavy — directly maps to the STOTT PILATES convention. Any instructor trained in the Merrithew method can pick up an Align-Pilates machine and work without relearning spring conventions. That compatibility is not accidental; it is a deliberate design decision that has made Align-Pilates a credible choice for working instructors.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The brand&apos;s credibility has grown significantly in the UK and European market. They are not yet the default recommendation for large commercial studios — where Balanced Body and Merrithew still dominate — but for the growing private instructor market, small boutique studios, and serious home practitioners, Align-Pilates represents a legitimate and increasingly respected choice.
              </p>
            </div>

            {/* Comparison criteria cards */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>How Align-Pilates compares: four criteria</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    heading: "Spring system",
                    body: "Five springs, colour-coded matching the STOTT PILATES convention. Comparable to Merrithew's system in feel and familiarity; Balanced Body uses a different but equally professional approach. No meaningful functional difference in everyday use.",
                  },
                  {
                    heading: "Carriage quality",
                    body: "Sealed ball-bearing rollers on all professional models (C2 Pro upward). Smooth, consistent action comparable to Balanced Body and Merrithew. Entry-level models below the C2 Pro use nylon rollers — a meaningful distinction when selecting a machine.",
                  },
                  {
                    heading: "Build durability",
                    body: "Aluminium frame with steel hardware throughout. Commercial studio-grade construction. Align&apos;s track record is shorter than Balanced Body&apos;s decades-long history, but no significant failure patterns have emerged in professional use.",
                  },
                  {
                    heading: "Price vs alternatives",
                    body: "C8 Pro at $2,200 vs Merrithew SPX Max at $2,199 and Balanced Body Allegro 2 at $3,495. Align-Pilates offers comparable functionality at either parity with Merrithew or a meaningful 37% discount against Balanced Body.",
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-8" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Align-Pilates Products · Expert-Reviewed</p>

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

            {/* Honest comparison editorial */}
            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-2xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Align-Pilates vs Balanced Body vs Merrithew: honest comparison</h2>
              <div className="space-y-5">
                {[
                  {
                    label: "Build quality",
                    body: "All three are professionally built. Align-Pilates is comparable in structural quality to Merrithew; Balanced Body edges ahead on carriage smoothness and long-term component quality. For most practitioners and instructors, the difference is not meaningful in everyday use.",
                  },
                  {
                    label: "Spring feel",
                    body: "Balanced Body springs have a specific feel that experienced practitioners often prefer. Merrithew and Align-Pilates springs are comparable in resistance profile and responsiveness. Beginners will not notice the difference between any of the three.",
                  },
                  {
                    label: "Accessories ecosystem",
                    body: "Balanced Body has the widest accessory range — boxes, jumpboards, tower attachments, and specialty springs are all available and widely stocked. Merrithew&apos;s is comprehensive. Align-Pilates&apos; accessory range is growing but not yet as deep; the core accessories (box, jumpboard) are available.",
                  },
                  {
                    label: "Price",
                    body: "Align-Pilates C8 Pro ($2,200) vs Balanced Body Allegro 2 ($3,495) vs Merrithew SPX Max ($2,199). Align-Pilates is at parity with Merrithew and 37% less than Balanced Body. The price difference between Align and Balanced Body is real and significant.",
                  },
                  {
                    label: "Resale value",
                    body: "Balanced Body has the strongest resale market in the US — used Allegro 2s hold value well and sell readily. Merrithew is second. Align-Pilates resale is growing but less established, particularly outside the UK and Europe.",
                  },
                  {
                    label: "Verdict",
                    body: "In the UK or Europe, Align-Pilates is the straightforward recommendation for a professional-quality machine at a fair price. In the US, Balanced Body and Merrithew still have stronger service networks and resale markets, but the price gap is real — and for instructors equipping a private teaching room rather than a commercial studio, that gap matters.",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <p className="text-sm font-semibold shrink-0 w-32" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{item.label}</p>
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
                    q: "Is Align-Pilates good enough for professional teaching?",
                    a: "Yes. The C2 Pro and C8 Pro are used by working instructors in commercial settings. The spring system, carriage quality, and structural integrity meet professional standards. They are not a compromise choice — they are a value choice at a comparable quality level to the major American brands.",
                  },
                  {
                    q: "How does Align-Pilates compare to Balanced Body?",
                    a: "Spring feel and long-term reputation slightly favour Balanced Body; price and value favour Align-Pilates. Both are professional-grade. The Allegro 2 is widely considered the best carriage feel available at its price point; the C8 Pro is excellent but not quite at that level. For most instructors, the functional difference does not justify the price difference.",
                  },
                  {
                    q: "Is Align-Pilates available in the United States?",
                    a: "Available through specialist dealers and on Amazon. The brand is US-available but the service network is less established than Balanced Body or Merrithew's. Factor in shipping costs and servicing access when comparing prices — the sticker price advantage can narrow once those variables are included.",
                  },
                  {
                    q: "Which Align-Pilates model should I buy?",
                    a: "The C8 Pro for a dedicated home studio or professional teaching room where the machine will be in permanent use. The C2 Pro for a home practitioner who wants professional spring quality at a lower price and values the fold-up storage option. The H1 with Tower if you want the reformer and tower repertoire without purchasing two separate pieces of equipment.",
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
                <ArticleCard title="Balanced Body vs Merrithew (2026)" excerpt="The two dominant Pilates equipment brands compared honestly — spring feel, build quality, price, and resale." href="/blog/balanced-body-vs-merrithew" category="Equipment Guide" readTime="10 min read" date="May 2026" imageUrl="/pictures/roxana-popovici-cZ0WYsBFHhs-unsplash.jpg" />
                <ArticleCard title="Best Home Pilates Reformer (2026)" excerpt="The best home reformers at every price point — from entry-level to studio-grade." href="/blog/best-home-pilates-reformer" category="Equipment Guide" readTime="10 min read" date="May 2026" imageUrl="/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg" />
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
