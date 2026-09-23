import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Jumpboard (2026): Honestly Verified",
  description: "The Pilates jumpboards we could actually verify as real, live Amazon listings — the Balanced Body Padded Jumpboard ($280) and the Merrithew Jumpboard 22\" ($470). AeroPilates and Align jumpboard listings could not be confirmed and are disclosed, not linked.",
  keywords: ["best pilates jumpboard", "pilates jumpboard review 2026", "pilates jumpboard cardio", "balanced body jumpboard review", "merrithew jumpboard pilates", "pilates cardio jumpboard", "jumpboard pilates workout"],
  openGraph: {
    title: "Best Pilates Jumpboard (2026): Honestly Verified",
    description: "The real, live Amazon-sold Pilates jumpboards — Balanced Body and Merrithew — compared, with unverified brand claims disclosed rather than linked.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-jumpboard",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg", width: 1200, height: 630, alt: "Best Pilates Jumpboards — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Jumpboard (2026)",
    description: "The real, live Amazon-sold Pilates jumpboards — honestly verified.",
    images: ["https://pilatescollectiveclub.com/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-pilates-jumpboard" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Balanced Body Padded Jumpboard",
    price: "$280",
    verdict: "The real Balanced Body jumpboard sold on Amazon",
    description:
      "This is the genuine Balanced Body jumpboard listing we could verify on Amazon, at $280. Balanced Body markets it as a footbar-position accessory for its reformer line, but we could not confirm universal fit across every Balanced Body model — the earlier version of this guide named specific compatible models (including an Allegro 2) that we could not verify, and that claim has been removed. Check the current listing against your specific reformer's footbar dimensions before ordering, since Balanced Body's carriage and footbar sizing has varied across product generations.",
    affiliateUrl: "https://www.amazon.com/dp/B08CS4LJZ7?tag=pilatescollective-20",
    tag: "Balanced Body",
  },
  {
    rank: "02",
    name: "Merrithew Jumpboard (22\")",
    price: "$470",
    verdict: "The real Merrithew jumpboard sold on Amazon",
    description:
      "Merrithew's genuine 22-inch jumpboard, verified at $470 on Amazon. It's built for Merrithew's SPX-family carriage, but we could not confirm it fits every Merrithew or STOTT reformer model as a universal accessory — confirm fit against your specific reformer before ordering rather than assuming compatibility across Merrithew's full range.",
    affiliateUrl: "https://www.amazon.com/dp/B004ICZD2Q?tag=pilatescollective-20",
    tag: "Merrithew",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Jumpboards (2026): Tested & Ranked",
      "description": "The best jumpboards for Pilates reformers — tested for compatibility, bounce quality, and build.",
      "url": "https://pilatescollectiveclub.com/blog/best-pilates-jumpboard",
      "datePublished": "2026-05-21",
      "dateModified": "2026-05-21",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-pilates-jumpboard" },
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Jumpboards (2026)",
      "numberOfItems": PRODUCTS.length,
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
        { "@type": "ListItem", "position": 3, "name": "Best Pilates Jumpboards", "item": "https://pilatescollectiveclub.com/blog/best-pilates-jumpboard" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is a Pilates jumpboard?", "acceptedAnswer": { "@type": "Answer", "text": "A Pilates jumpboard is an accessory that attaches to the footbar position of a reformer, allowing the practitioner to perform jumping and rebounding exercises while lying supine on the carriage. It converts the reformer into a low-impact cardio machine and is used extensively in cardio Pilates and reformer conditioning classes." } },
        { "@type": "Question", "name": "Are Pilates jumpboards compatible with all reformers?", "acceptedAnswer": { "@type": "Answer", "text": "No, and not even within one brand — we could not confirm universal fit for the Balanced Body or Merrithew jumpboards we verified as real Amazon listings. Check the current listing against your specific reformer's footbar dimensions before ordering. We could not find a verified, live Amazon listing for an AeroPilates- or Align-branded jumpboard, so we do not recommend shopping for one under those names on Amazon." } },
        { "@type": "Question", "name": "Is jumpboard Pilates good for cardio?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — jumpboard sequences can raise the heart rate while maintaining the joint-protective benefits of reformer spring resistance. Most instructors recommend 10–20 minute jumpboard intervals within a full reformer session rather than extended standalone cardio sessions." } },
        { "@type": "Question", "name": "Can beginners use a Pilates jumpboard?", "acceptedAnswer": { "@type": "Answer", "text": "Beginners should establish basic reformer competence before adding jumpboard work — typically 2–3 months of consistent reformer practice. The foundational footwork patterns (two-foot landing, controlled spring return) are accessible to beginners; single-leg and advanced variations should wait until greater stabiliser strength is established." } },
      ],
    },
  ],
};

export default function BestPilatesJumpboardPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Reformer Accessories</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Pilates Jumpboard<br /><span style={{ color: "#8b4a31" }}>(2026): Honestly Verified</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 7 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              The jumpboard is a genuinely popular accessory for a home reformer, adding a cardio component through jumping and rebounding sequences while keeping the joint-protective, resistance-based feel of reformer work. This guide previously listed jumpboards from four brands; on closer checking, we could only confirm live Amazon listings for two of them — Balanced Body and Merrithew. The AeroPilates and Align Pilates entries have been removed rather than left pointing at a search page, and that gap is disclosed below rather than guessed at.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg" alt="Best Pilates jumpboards for home reformers" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-10 rounded-2xl p-6" style={{ backgroundColor: "#fff8f5", border: "1px solid rgba(197,168,130,0.3)" }}>
              <p className="text-sm font-semibold mb-2" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Compatibility note</p>
              <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Jumpboards are not universal, and we could not confirm one-size-fits-all compatibility even within the Balanced Body or Merrithew ranges below. Always check the current Amazon listing against your specific reformer&apos;s footbar dimensions before purchasing. Purchasing the wrong jumpboard typically results in a non-returnable accessory that cannot be used.</p>
            </div>

            <div className="mb-10 rounded-2xl p-6" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.3)" }}>
              <p className="text-sm font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>What about AeroPilates and Align Pilates jumpboards?</p>
              <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>An earlier version of this guide listed an &quot;AeroPilates Cardio Rebounder&quot; and an &quot;Align Pilates Jumpboard.&quot; We could not find live, currently-sold Amazon listings for either under those names, so both have been removed rather than pointed at a generic search result. If you own an AeroPilates or Align reformer and want a jumpboard-style accessory, check directly with the manufacturer or an authorised dealer.</p>
            </div>

            <div className="mb-10 mt-4 overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
              <div className="px-6 py-4" style={{ backgroundColor: "#f6f3f2" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Quick Picks — Verified Amazon Listings</p>
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>2 Jumpboards · Verified Amazon Listings</p>
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
                  { q: "What is a Pilates jumpboard?", a: "A Pilates jumpboard is an accessory that attaches to the footbar position of a reformer, allowing the practitioner to perform jumping and rebounding exercises while lying supine on the carriage. It converts the reformer into a low-impact cardio machine and is used extensively in cardio Pilates and reformer conditioning classes." },
                  { q: "Are Pilates jumpboards compatible with all reformers?", a: "No, and not even within one brand — we could not confirm universal fit for the Balanced Body or Merrithew jumpboards we verified as real Amazon listings. Check the current listing against your specific reformer's footbar dimensions before ordering. We could not find a verified, live Amazon listing for an AeroPilates- or Align-branded jumpboard, so we do not recommend shopping for one under those names on Amazon." },
                  { q: "Is jumpboard Pilates good for cardio?", a: "Yes — jumpboard sequences can raise the heart rate while maintaining the joint-protective benefits of reformer spring resistance. Most instructors recommend 10–20 minute jumpboard intervals within a full reformer session rather than extended standalone cardio sessions." },
                  { q: "Can beginners use a Pilates jumpboard?", a: "Beginners should establish basic reformer competence before adding jumpboard work — typically 2–3 months of consistent reformer practice. The foundational footwork patterns are accessible to beginners; single-leg and advanced variations should wait until greater stabiliser strength is established." },
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
                <ArticleCard title="Best Home Pilates Reformers" excerpt="The complete guide to buying a reformer for home practice." href="/blog/best-home-pilates-reformer" category="Equipment" readTime="14 min read" date="May 2026" imageUrl="/pictures/tomi-blasic-tj0sM4gHlns-unsplash.jpg" />
                <ArticleCard title="Best Pilates Reformer Accessories" excerpt="Everything worth adding to your home reformer beyond the jumpboard." href="/blog/best-pilates-reformer-accessories" category="Equipment" readTime="8 min read" date="May 2026" imageUrl="/pictures/junseong-lee-AX8cf6mkCzw-unsplash.jpg" />
                <ArticleCard title="Balanced Body Pilates Brand Guide" excerpt="Everything Balanced Body builds, reviewed honestly." href="/blog/balanced-body-pilates" category="Brand Guide" readTime="11 min read" date="May 2026" imageUrl="/pictures/junseong-lee-G9H5edUL0T8-unsplash.jpg" />
                <ArticleCard title="AeroPilates Review" excerpt="An honest look at AeroPilates reformers for home use." href="/blog/aeropilates-review" category="Brand Review" readTime="10 min read" date="May 2026" imageUrl="/pictures/tomi-blasic-tj0sM4gHlns-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best Pilates studios in Singapore…" />
      </main>
      <Footer />
    </>
  );
}
