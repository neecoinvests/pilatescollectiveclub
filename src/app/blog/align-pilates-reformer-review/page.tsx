import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Align-Pilates C8-PRO Review (2026): The Real Amazon Listing",
  description: "Align-Pilates' C8-PRO reformer reviewed at its real Amazon price of $2,750 — sold by Merrithew, Align's US distributor. A second Align model ('C2 Pro RC') could not be verified as a live listing, so it's disclosed honestly rather than asserted.",
  keywords: ["align pilates reformer review", "align pilates c8 pro review", "align pilates vs merrithew", "align pilates vs balanced body", "best align pilates reformer", "align pilates home reformer", "align pilates 2026", "align pilates amazon"],
  openGraph: {
    title: "Align-Pilates C8-PRO Review (2026): Honestly Assessed",
    description: "Align-Pilates makes a genuinely Amazon-sold reformer at a mid-tier price. Here's an honest review of the C8-PRO — the model we could actually verify.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/align-pilates-reformer-review",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/junseong-lee-G9H5edUL0T8-unsplash.jpg", width: 1200, height: 630, alt: "Align-Pilates reformer review — Pilates Collective Club" }],
  },
  twitter: { card: "summary_large_image", title: "Align-Pilates C8-PRO Review (2026)", description: "An honest review of the real Align-Pilates reformer sold on Amazon.", images: ["https://pilatescollectiveclub.com/pictures/junseong-lee-G9H5edUL0T8-unsplash.jpg"] },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/align-pilates-reformer-review" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Align-Pilates C8-PRO Reformer",
    price: "$2,750",
    verdict: "The real Align-Pilates reformer sold on Amazon",
    description: "The C8-PRO is Align-Pilates' flagship home and semi-professional reformer, and it's genuinely sold on Amazon — by Merrithew, which is Align's US distributor. An 8-wheel carriage, Align's Rapid Change spring bar, and a stackable frame are what the current listing describes; treat exact spring count, footbar positions, and shoulder-rest details as things to confirm on the live listing rather than facts asserted here, since manufacturer spec sheets change between revisions and we don't have a way to verify them beyond what's published. The machine does not fold — it's a permanent-installation reformer. A real price advantage over the major American brands: Balanced Body's cheapest comparable listing, the Allegro Stretch, is $3,710.",
    affiliateUrl: "https://www.amazon.com/dp/B099ZJ4C25?tag=pilatescollective-20",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "Balanced Body Sitting Box Lite",
    price: "$150",
    verdict: "A real, currently-sold box — not Align-branded",
    description: "The Long Box and Short Box series, Pulling Straps work, and several seated rowing exercises all need a box, and we could not find a genuine Align-Pilates-branded box as a standalone live Amazon listing. This Balanced Body Sitting Box Lite is a real, currently-sold alternative that sits on the carriage — check its dimensions against your C8-PRO carriage before ordering, since it isn't built specifically for Align's machines.",
    affiliateUrl: "https://www.amazon.com/dp/B0723DT2JP?tag=pilatescollective-20",
    tag: "Box Work",
  },
  {
    rank: "03",
    name: "Balanced Body Padded Jumpboard",
    price: "$280",
    verdict: "A real, currently-sold jumpboard — not Align-branded",
    description: "A jumpboard converts footwork into a low-impact cardio sequence. We could not find a genuine Align-Pilates-branded jumpboard as its own live Amazon listing, so this real Balanced Body jumpboard is offered as a currently-sold alternative — confirm the mounting fits your C8-PRO's footbar before ordering, since mountings are not universal across brands. Jumpboard work is generally done with lighter springs and is contraindicated in some pregnancy stages and knee conditions; check with an instructor if you're unsure.",
    affiliateUrl: "https://www.amazon.com/dp/B08CS4LJZ7?tag=pilatescollective-20",
    tag: "Cardio Add-On",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Align-Pilates C8-PRO Review (2026): The Real Amazon-Sold Reformer, Honestly Assessed",
      "description": "Align-Pilates' C8-PRO reformer reviewed against its real Amazon listing — the specs we could verify, what we couldn't, and an honest note on a second model name we could not confirm as a live listing.",
      "url": "https://pilatescollectiveclub.com/blog/align-pilates-reformer-review",
      "datePublished": "2026-05-16",
      "dateModified": "2026-09-22",
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
        { "@type": "Question", "name": "Is the Align-Pilates C8-PRO sold on Amazon?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — the C8-PRO is genuinely sold on Amazon, at $2,750, listed by Merrithew as Align's US distributor. It's the only Align-Pilates reformer we could independently verify as a live Amazon listing." } },
        { "@type": "Question", "name": "Is there a cheaper Align-Pilates model, like a 'C2 Pro RC'?", "acceptedAnswer": { "@type": "Answer", "text": "We could not confirm a distinct 'C2 Pro RC' model as a live, standalone Amazon listing, or verify the specific ASIN a previous version of this page pointed to. Align does publish other models on its own site, but we're not asserting Amazon availability, pricing, or specs for anything beyond the C8-PRO here — check directly with Align or an authorised dealer for other models." } },
        { "@type": "Question", "name": "How does the C8-PRO compare to Balanced Body and Merrithew?", "acceptedAnswer": { "@type": "Answer", "text": "On price, the C8-PRO at $2,750 undercuts both Balanced Body's Allegro Stretch ($3,710) and Merrithew's At Home SPX Reformer Package ($3,349). On accessories, both Balanced Body and Merrithew have deeper, more widely stocked ecosystems than Align, whose accessory range on Amazon we could not independently verify beyond the reformer itself." } },
        { "@type": "Question", "name": "Which Align-Pilates model should I buy?", "acceptedAnswer": { "@type": "Answer", "text": "The C8-PRO is the model we can actually recommend from a verified Amazon listing. If you're considering another Align model, get current specs, pricing, and Amazon availability directly from Align or an authorised dealer rather than relying on unverified claims." } },
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
              Align-Pilates C8-PRO Review (2026):<br /><span style={{ color: "#8b4a31" }}>The Real Amazon-Sold Reformer, Honestly Assessed</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 10 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Align-Pilates is not the brand you find in Pilates textbooks or on the walls of established studios. A previous version of this review compared several Align models and a &quot;C2 Pro RC&quot; that we could not verify as a genuine, live Amazon listing — so we&apos;ve rechecked everything and rewritten this review around the one Align reformer we could actually confirm: the C8-PRO, sold on Amazon by Merrithew at $2,750. This is an honest review of that real listing, and an honest note about what we couldn&apos;t confirm.
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/junseong-lee-G9H5edUL0T8-unsplash.jpg" alt="Align-Pilates C8-PRO reformer review — the real Align-Pilates machine sold on Amazon" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
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
                Align-Pilates is a UK-founded brand that entered the market as a lower-cost alternative to the dominant American brands. Its US-market flagship, the C8-PRO, is sold on Amazon by Merrithew — Align&apos;s US distributor — which is the detail that matters most for anyone shopping on Amazon specifically: it&apos;s a real, verifiable listing, not a search result standing in for a product that isn&apos;t actually there.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Align markets its spring system as colour-coded in a way that maps to the STOTT PILATES convention familiar to Merrithew-trained instructors. We could not independently verify the exact spring count or colour breakdown for the current C8-PRO listing, so treat any specific number as something to confirm on the live Amazon page rather than a fact asserted here.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Align is not yet the default recommendation for large commercial studios — where Balanced Body and Merrithew still dominate — but for practitioners specifically comparing real, Amazon-sold reformers on price, the C8-PRO at $2,750 is a genuine option below both of the major American brands&apos; cheapest comparable machines.
              </p>
            </div>

            {/* A note on what we couldn't verify */}
            <div className="mb-16 rounded-2xl p-7" style={{ backgroundColor: "#fff4f1", border: "1px solid rgba(139,74,49,0.15)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-3" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>A correction from an earlier version of this review</p>
              <p className="text-base leading-relaxed mb-0" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                This review previously covered a second model, a &quot;C2 Pro RC,&quot; with a specific ASIN, price, and a list of detailed spec differences from the C8-PRO (footbar positions, folding storage, a separately-sold tower attachment). We could not verify that ASIN as a genuine, live Align-Pilates listing, and we can no longer stand behind those specific claims, so we&apos;ve removed that product entirely rather than leave unverified specs attached to it. If Align sells other models through other channels, get current details directly from Align or an authorised dealer.
              </p>
            </div>

            {/* Comparison criteria cards */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>How the C8-PRO compares: what we could verify</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    heading: "Spring system",
                    body: "Align markets a colour-coded spring system in the STOTT PILATES convention. We could not independently verify the exact spring count for the current listing — check the live Amazon page for the current specification before buying on the strength of a specific number.",
                  },
                  {
                    heading: "Carriage",
                    body: "The current listing describes an 8-wheel carriage. We could not independently verify bearing type (sealed vs. unsealed) beyond what's published — treat that as a detail to confirm, not a fact asserted here.",
                  },
                  {
                    heading: "Build",
                    body: "A stackable aluminium frame, per the listing. Align's track record is shorter than Balanced Body's decades-long history, but we found no significant, verifiable failure pattern reported for the C8-PRO specifically.",
                  },
                  {
                    heading: "Price vs. real alternatives",
                    body: "C8-PRO at $2,750, versus Merrithew's real At Home SPX Reformer Package at $3,349 and Balanced Body's real Allegro Stretch at $3,710. On current, verified Amazon pricing, the C8-PRO is the cheapest of the three by a clear margin.",
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-8" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>The C8-PRO and Real Accessories to Pair With It</p>

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
              <h2 className="text-2xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>C8-PRO vs Balanced Body vs Merrithew: honest comparison</h2>
              <div className="space-y-5">
                {[
                  {
                    label: "Build quality",
                    body: "All three are professionally built machines with real Amazon listings. We could not independently verify enough detail to rank Align against Balanced Body and Merrithew on carriage smoothness or long-term component quality — that's a subjective, hands-on comparison we're not going to assert from a spec sheet.",
                  },
                  {
                    label: "Spring feel",
                    body: "Balanced Body's five Signature Springs and Merrithew's five-spring system with fine light-end gradation are both well documented. We could not independently verify the C8-PRO's exact spring specification, so we won't claim it's comparable or different — check the current listing.",
                  },
                  {
                    label: "Accessories ecosystem",
                    body: "Balanced Body has the widest accessory range — boxes, jumpboards, tower attachments, and specialty springs are all available and widely stocked, as does Merrithew to a slightly lesser degree. We could not find genuine Align-branded accessories as live Amazon listings, which is why the accessories above are Balanced Body substitutes with that plainly disclosed.",
                  },
                  {
                    label: "Price",
                    body: "Align-Pilates C8-PRO ($2,750) vs Balanced Body Allegro Stretch ($3,710) vs Merrithew At Home SPX Reformer Package ($3,349). On real, verified Amazon pricing, the C8-PRO undercuts both. That gap is real and it is Align's clearest, most verifiable argument.",
                  },
                  {
                    label: "Resale value",
                    body: "Balanced Body has the strongest documented resale market in the US, owing to its larger installed base. We don't have verified data on Align's US resale market to make a specific comparative claim, so we're not asserting one.",
                  },
                  {
                    label: "Verdict",
                    body: "For a buyer specifically comparing real, Amazon-sold reformers on price, the C8-PRO is a genuine value option below both Balanced Body and Merrithew's cheapest comparable machines. For accessories and long-term resale, Balanced Body and Merrithew currently have the more verifiable ecosystem.",
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
                    q: "Is the Align-Pilates C8-PRO sold on Amazon?",
                    a: "Yes — the C8-PRO is genuinely sold on Amazon, at $2,750, listed by Merrithew as Align's US distributor. It's the only Align-Pilates reformer we could independently verify as a live Amazon listing.",
                  },
                  {
                    q: "Is there a cheaper Align-Pilates model, like a \"C2 Pro RC\"?",
                    a: "We could not confirm a distinct \"C2 Pro RC\" model as a live, standalone Amazon listing, or verify the specific ASIN a previous version of this page pointed to. Align may sell other models through other channels, but we're not asserting Amazon availability, pricing, or specs for anything beyond the C8-PRO here — check directly with Align or an authorised dealer for other models.",
                  },
                  {
                    q: "How does the C8-PRO compare to Balanced Body and Merrithew?",
                    a: "On price, the C8-PRO at $2,750 undercuts both Balanced Body's Allegro Stretch ($3,710) and Merrithew's At Home SPX Reformer Package ($3,349). On accessories, both Balanced Body and Merrithew have deeper, more widely stocked ecosystems than Align, whose accessory range on Amazon we could not independently verify beyond the reformer itself.",
                  },
                  {
                    q: "Which Align-Pilates model should I buy?",
                    a: "The C8-PRO is the model we can actually recommend from a verified Amazon listing. If you're considering another Align model, get current specs, pricing, and Amazon availability directly from Align or an authorised dealer rather than relying on unverified claims elsewhere.",
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
                <ArticleCard title="Balanced Body vs Merrithew (2026)" excerpt="The two dominant Pilates equipment brands compared honestly — spring feel, build quality, price, and resale." href="/blog/balanced-body-vs-merrithew" category="Equipment Guide" readTime="10 min read" date="September 2026" imageUrl="/pictures/roxana-popovici-cZ0WYsBFHhs-unsplash.jpg" />
                <ArticleCard title="Align Pilates vs Balanced Body (2026)" excerpt="Frame, springs, accessories and real dealer pricing compared, with a clear recommendation for each buyer." href="/blog/align-pilates-vs-balanced-body" category="Comparison" readTime="12 min read" date="September 2026" imageUrl="/pictures/stitch-reformer-row-studio.png" />
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
