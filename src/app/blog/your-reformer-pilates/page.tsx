import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Your Reformer Review (2026): Honestly Assessed",
  description: "Your Reformer reviewed — the Australian wood reformer with a built-in app, sold direct rather than on Amazon, plus two real budget-tier Amazon alternatives for buyers who want purchase-today hardware.",
  keywords: ["your reformer review", "your reformer pilates", "your reformer app", "connected pilates reformer", "your reformer original", "yr studio pilates", "best home pilates reformer app", "your reformer australia", "premium wood pilates reformer", "your reformer 2026", "budget pilates reformer amazon"],
  openGraph: {
    title: "Your Reformer Review (2026): Honestly Assessed",
    description: "Your Reformer — the premium wood reformer with an integrated app, reviewed honestly, plus two real budget Amazon alternatives.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/your-reformer-pilates",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/henrique-ferreira-omiTbS-nb_M-unsplash.jpg", width: 1200, height: 630, alt: "Your Reformer Pilates review — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Reformer Review (2026)",
    description: "Your Reformer — the connected wood reformer, sold direct, reviewed honestly, plus two budget Amazon alternatives.",
    images: ["https://pilatescollectiveclub.com/pictures/henrique-ferreira-omiTbS-nb_M-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/your-reformer-pilates" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Your Reformer The Original",
    price: "Priced direct — confirm on yourreformer.com",
    verdict: "The brand's entry connected home reformer",
    description:
      "A note before anything else: Your Reformer is not sold on Amazon, so this section links directly to the brand's own site rather than an Amazon listing, and we could not independently verify the exact price or full spec sheet — confirm both on yourreformer.com before buying. Your Reformer's The Original is positioned as a spring-resistance machine with a wood-accented frame designed to read as furniture rather than gym equipment. The brand's own marketing describes an integrated app with on-demand and live classes, accessible through a tablet mount on the machine. We could not independently verify specific figures such as spring count, class-length ranges, or bearing type, so treat any precise spec quoted elsewhere (including in an earlier version of this article) as something to confirm directly with Your Reformer rather than an established fact.",
    affiliateUrl: "https://yourreformer.com",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "Your Reformer The Studio",
    price: "Priced direct — confirm on yourreformer.com",
    verdict: "The brand's premium tier reformer",
    description:
      "The Studio is described by Your Reformer as its premium machine — an extended version of The Original aimed at taller practitioners and more advanced work. We could not independently verify the exact carriage length, footbar reach, or height range this model accommodates, so treat any specific figure (including a height cutoff) as a claim to confirm directly with Your Reformer rather than an established fact. The construction is described as consistent with The Original — wood and aluminium — at a larger specification and a higher price point that you should confirm on the brand's own site before ordering.",
    affiliateUrl: "https://yourreformer.com",
    tag: "Premium Model",
  },
  {
    rank: "03",
    name: "Your Reformer App Subscription",
    price: "Priced direct — confirm on yourreformer.com",
    verdict: "The content ecosystem",
    description:
      "The YR app is the component of Your Reformer that most distinguishes the brand from conventional reformer manufacturers, at least according to the brand's own marketing. It is described as a library of reformer classes filmed for Your Reformer machines and structured into progressive programmes rather than standalone sessions. We could not independently verify the subscription price or the exact content library size — confirm current pricing directly on yourreformer.com. The subscription is described as optional; the hardware does not require connectivity to operate.",
    affiliateUrl: "https://yourreformer.com",
    tag: "App Platform",
  },
  {
    rank: "04",
    name: "Your Reformer Accessories",
    price: "Priced direct — confirm on yourreformer.com",
    verdict: "Brand-specific add-ons",
    description:
      "Your Reformer sells reformer-specific accessories, including a box set that the brand describes as unlocking short box, long box, and kneeling series work. We could not independently verify current pricing or exactly what ships in any bundle, so confirm contents and cost directly on yourreformer.com before ordering. These are brand-specific accessories designed for Your Reformer machines rather than universal parts.",
    affiliateUrl: "https://yourreformer.com",
    tag: "Accessories",
  },
  {
    rank: "05",
    name: "WINDFOOT Pilates Reformer",
    price: "$295.99",
    verdict: "Not Your Reformer — a real, budget-tier Amazon alternative with no app",
    description:
      "To be upfront: this is not a Your Reformer product, and it doesn't have the integrated app or the furniture-grade finish Your Reformer is known for. It's a basic, no-frills reformer — but it's a genuine, currently-sold Amazon listing at $295.99, which puts real Amazon purchase protection and same-week delivery within reach for buyers priced out of Your Reformer's direct-sale hardware. If you want a connected, premium home studio experience, buy from Your Reformer directly; if you just want working reformer hardware today at a fraction of the cost and are happy to source your own class content, this is an honest, disclosed alternative to consider.",
    affiliateUrl: "https://www.amazon.com/dp/B0D31767J1?tag=pilatescollective-20",
    tag: "Budget Amazon Alternative",
  },
  {
    rank: "06",
    name: "DWKWE Pilates Reformer",
    price: "$299.99",
    verdict: "Not Your Reformer — a second real, budget-tier Amazon alternative",
    description:
      "Also not a Your Reformer product and, like the WINDFOOT above, it skips the app and the wood-accented furniture look entirely. We include it as a second genuine, currently-sold Amazon option at $299.99 for readers comparing budget hardware side by side before deciding whether Your Reformer's premium, app-connected package is worth the price difference to them. Confirm current specs and stock directly on the Amazon listing before buying.",
    affiliateUrl: "https://www.amazon.com/dp/B0HB4J5RKX?tag=pilatescollective-20",
    tag: "Budget Amazon Alternative",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Your Reformer Review (2026): Honestly Assessed",
      "description": "Your Reformer reviewed — The Original and The Studio machines, plus the YR app, sold direct rather than on Amazon, assessed for what could be independently verified, plus two real budget-tier Amazon reformer alternatives.",
      "url": "https://pilatescollectiveclub.com/blog/your-reformer-pilates",
      "datePublished": "2026-05-21",
      "dateModified": "2026-09-23",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/henrique-ferreira-omiTbS-nb_M-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/your-reformer-pilates" },
    },
    {
      "@type": "ItemList",
      "name": "Your Reformer and Verified Amazon Alternatives (2026)",
      "numberOfItems": PRODUCTS.length,
      "itemListElement": PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "description": p.description,
          "url": p.affiliateUrl,
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Your Reformer Review", "item": "https://pilatescollectiveclub.com/blog/your-reformer-pilates" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is Your Reformer sold on Amazon?", "acceptedAnswer": { "@type": "Answer", "text": "No — we could not find a live, currently-sold Amazon listing for Your Reformer. The brand sells direct through yourreformer.com, and that is where the links in this review point. Treat any Amazon listing claiming to be Your Reformer with caution." } },
        { "@type": "Question", "name": "Is Your Reformer worth it?", "acceptedAnswer": { "@type": "Answer", "text": "That depends on how much you value the app-and-hardware package versus buying a machine and content separately. We could not independently verify the brand's specific hardware specs or subscription pricing, so confirm those directly on yourreformer.com before deciding. If you already have an instructor or prefer independent practice, a non-connected reformer may offer more verified hardware for the money." } },
        { "@type": "Question", "name": "Is Your Reformer a spring or bungee reformer?", "acceptedAnswer": { "@type": "Answer", "text": "Your Reformer describes its machines as using spring resistance rather than bungee cords, which would distinguish it from brands like AeroPilates that use elastic cord resistance. We could not independently verify the exact spring configuration, so confirm the current spec directly with the brand." } },
        { "@type": "Question", "name": "Where is Your Reformer made?", "acceptedAnswer": { "@type": "Answer", "text": "Your Reformer is an Australian brand; production location and other manufacturing details should be confirmed directly with the company rather than assumed." } },
        { "@type": "Question", "name": "Can I use Your Reformer without the app?", "acceptedAnswer": { "@type": "Answer", "text": "Your Reformer describes the app subscription as optional and the hardware as usable without connectivity. Confirm this directly with the brand if it's a deciding factor for you." } },
        { "@type": "Question", "name": "Is there a cheaper alternative to Your Reformer on Amazon?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, though these are honest disclosures rather than like-for-like substitutes: the WINDFOOT Pilates Reformer ($295.99) and the DWKWE Pilates Reformer ($299.99) are both real, currently-sold Amazon listings. Neither includes Your Reformer's app or furniture-grade finish — they're basic hardware for buyers who want a purchase-today option at a fraction of the price." } },
      ],
    },
  ],
};


export default function YourReformerPilatesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Brand Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Equipment</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Your Reformer<br /><span style={{ color: "#8b4a31" }}>(2026): The Connected Home Studio</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 10 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*We could not find a live Amazon listing for Your Reformer — four links on this page go directly to yourreformer.com and we earn no commission from them. Two links go to real, verified Amazon products (not Your Reformer-branded), and we earn a small commission on qualifying purchases through them.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Your Reformer pairs a reformer with an integrated app — hardware plus content, in the vein of Peloton&apos;s approach to home cycling. It is sold direct through yourreformer.com rather than on Amazon, so this review is honest about what we could and couldn&apos;t independently verify: we could not confirm the brand&apos;s specific spring count, exact pricing, or precise hardware specifications, and an earlier version of this review stated several of these as settled facts that we can no longer stand behind. What follows covers what the brand itself claims, flags what we couldn&apos;t verify, points you to yourreformer.com to confirm specifics before buying, and adds two real, honestly-disclosed budget Amazon alternatives for readers who want purchase-today hardware instead.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/henrique-ferreira-omiTbS-nb_M-unsplash.jpg" alt="Your Reformer Pilates — The Original and YR Studio reviewed" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-12 mt-4 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Brand overview</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { label: "Origin", value: "Australia" },
                  { label: "Sold on Amazon?", value: "No confirmed live listing for Your Reformer — sold direct via yourreformer.com; two budget Amazon alternatives included" },
                  { label: "Unique offering", value: "Integrated YR app with on-demand classes (per brand's own description)" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#9a9490", fontFamily: "'Montserrat', sans-serif" }}>{item.label}</p>
                    <p className="text-sm" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

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

            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Items · 4 Your Reformer Products + 2 Verified Amazon Alternatives</p>
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
                  { q: "Is Your Reformer sold on Amazon?", a: "No — we could not find a live, currently-sold Amazon listing for Your Reformer. The brand sells direct through yourreformer.com, and that is where the links in this review point. Treat any Amazon listing claiming to be Your Reformer with caution." },
                  { q: "Is Your Reformer worth it?", a: "That depends on how much you value the app-and-hardware package versus buying a machine and content separately. We could not independently verify the brand's specific hardware specs or subscription pricing, so confirm those directly on yourreformer.com before deciding. If you already have an instructor or prefer independent practice, a non-connected reformer may offer more verified hardware for the money." },
                  { q: "Is Your Reformer a spring or bungee reformer?", a: "Your Reformer describes its machines as using spring resistance rather than bungee cords, which would distinguish it from brands like AeroPilates that use elastic cord resistance. We could not independently verify the exact spring configuration, so confirm the current spec directly with the brand." },
                  { q: "Where is Your Reformer made?", a: "Your Reformer is an Australian brand. Production location and other manufacturing details should be confirmed directly with the company rather than assumed." },
                  { q: "Can I use Your Reformer without the app?", a: "Your Reformer describes the app subscription as optional and the hardware as usable without connectivity. Confirm this directly with the brand if it's a deciding factor for you." },
                  { q: "Is there a cheaper alternative to Your Reformer on Amazon?", a: "Yes, though these are honest disclosures rather than like-for-like substitutes: the WINDFOOT Pilates Reformer ($295.99) and the DWKWE Pilates Reformer ($299.99) are both real, currently-sold Amazon listings. Neither includes Your Reformer's app or furniture-grade finish — they're basic hardware for buyers who want a purchase-today option at a fraction of the price." },
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
                <ArticleCard title="Best Home Pilates Reformers" excerpt="The complete buyer's guide across all price points and brands." href="/blog/best-home-pilates-reformer" category="Equipment" readTime="14 min read" date="May 2026" imageUrl="/pictures/tomi-blasic-tj0sM4gHlns-unsplash.jpg" />
                <ArticleCard title="Best Online Pilates Classes" excerpt="The top platforms for guided Pilates at home — including reformer programmes." href="/blog/best-online-pilates-classes" category="Equipment" readTime="8 min read" date="May 2026" imageUrl="/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg" />
                <ArticleCard title="Best Pilates Reformers for Small Spaces" excerpt="How Your Reformer compares against Align and AeroPilates for compact apartment living." href="/blog/best-pilates-reformer-for-small-spaces" category="Equipment" readTime="9 min read" date="May 2026" imageUrl="/pictures/elena-kloppenburg-erUC4fTtCuo-unsplash.jpg" />
                <ArticleCard title="Best Foldable Pilates Reformers" excerpt="Which reformers are genuinely marketed and sold as fold-flat — and which folding claims don't hold up." href="/blog/best-foldable-pilates-reformer" category="Equipment" readTime="9 min read" date="September 2026" imageUrl="/pictures/junseong-lee-G9H5edUL0T8-unsplash.jpg" />
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
