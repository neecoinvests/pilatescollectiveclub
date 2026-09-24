import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Cycling Gloves for Spin Class (2026): Padded, Grip & Ventilated",
  description: "The best padded cycling gloves for indoor spin class — compared for palm cushioning, grip, breathability, and comfort during high-output handlebar-heavy sessions.",
  keywords: ["best cycling gloves for spin class", "padded cycling gloves 2026", "indoor cycling gloves review", "spin class gloves fingerless", "bike gloves for peloton", "handlebar grip gloves indoor cycling", "cycling gloves women men"],
  openGraph: {
    title: "Best Cycling Gloves for Spin Class (2026)",
    description: "Padded cycling gloves compared for grip, palm cushioning, and breathability.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-cycling-gloves-for-spin-class",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/junseong-lee-G9H5edUL0T8-unsplash.jpg", width: 1200, height: 630, alt: "Best Cycling Gloves for Spin Class 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Cycling Gloves for Spin Class (2026)",
    description: "Padded cycling gloves compared for indoor spin class grip and comfort.",
    images: ["https://pilatescollectiveclub.com/pictures/junseong-lee-G9H5edUL0T8-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-cycling-gloves-for-spin-class" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "HTZPLOO Bike Gloves",
    price: "$19.99",
    verdict: "Best all-around padded glove",
    description:
      "HTZPLOO's half-finger bike gloves pair an anti-slip palm with a shock-absorbing pad positioned where handlebar pressure builds up during out-of-saddle climbs and sprints. That combination of grip and cushioning is exactly what a spin glove needs to do, and HTZPLOO delivers it at a reasonable price without cutting corners on either side. A solid, well-rounded default pick for most spin riders.",
    affiliateUrl: "https://www.amazon.com/dp/B06XPL2DNR?tag=pilatescollective-20",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "MOREOK Cycling Gloves",
    price: "$12.74",
    verdict: "Best budget pick",
    description:
      "MOREOK's half-finger gloves use 5mm gel padding at the palm, which is a genuinely generous cushioning spec for the price. For riders who want gel-level palm protection during high-output spin sessions without paying premium-brand prices, this is the clearest budget recommendation on the list.",
    affiliateUrl: "https://www.amazon.com/dp/B07B3PVG4Q?tag=pilatescollective-20",
    tag: "Best Budget Pick",
  },
  {
    rank: "03",
    name: "Lamicall Bike Gloves",
    price: "$13.99",
    verdict: "Best simple, secure grip",
    description:
      "Lamicall's bike gloves combine an anti-slip palm surface with a shock-absorbing pad, focused on keeping your grip secure through sweaty, high-tempo intervals without the handlebar pressure translating straight into your palms. A straightforward, no-frills option for riders who just want reliable grip and cushioning.",
    affiliateUrl: "https://www.amazon.com/dp/B0GL1XFKG5?tag=pilatescollective-20",
    tag: "Best Grip",
  },
  {
    rank: "04",
    name: "CXWXC Cycling Gloves",
    price: "$15.28",
    verdict: "Best for breathability",
    description:
      "CXWXC's gloves pair breathable fabric with gel padding at the palm, which is the combination that matters most in a heated spin studio where hands sweat quickly through a class. For riders who run hot and want a glove that won't feel clammy by the second interval, the breathable build here is the standout feature.",
    affiliateUrl: "https://www.amazon.com/dp/B0878J6LK5?tag=pilatescollective-20",
    tag: "Best Breathability",
  },
  {
    rank: "05",
    name: "ATERCEL Workout/Cycling Gloves",
    price: "$13.95",
    verdict: "Best crossover glove for gym and spin",
    description:
      "ATERCEL's gloves are built as a breathable, snug-fitting crossover pick for both general gym workouts and spin class, which makes them a good choice for anyone who doesn't want a glove that only comes out for cycling. If you lift or do other gym work alongside your spin sessions, this is the pick that covers both without needing a second pair.",
    affiliateUrl: "https://www.amazon.com/dp/B07KQR9VXG?tag=pilatescollective-20",
    tag: "Best Crossover Pick",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Cycling Gloves for Spin Class (2026)",
      "description": "Padded cycling gloves compared for grip, palm cushioning, and breathability.",
      "url": "https://pilatescollectiveclub.com/blog/best-cycling-gloves-for-spin-class",
      "datePublished": "2026-06-30",
      "dateModified": "2026-06-30",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/junseong-lee-G9H5edUL0T8-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-cycling-gloves-for-spin-class" },
    },
    {
      "@type": "ItemList",
      "name": "Best Cycling Gloves for Spin Class (2026)",
      "numberOfItems": 5,
      "itemListElement": PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "description": p.description.replace(/<[^>]+>/g, ""),
          "offers": { "@type": "Offer", "priceCurrency": "USD", "price": p.price.replace(/[^0-9]/g, ""), "availability": "https://schema.org/InStock", "url": p.affiliateUrl },
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Cycling Gloves for Spin Class", "item": "https://pilatescollectiveclub.com/blog/best-cycling-gloves-for-spin-class" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Why wear cycling gloves for indoor spin class?", "acceptedAnswer": { "@type": "Answer", "text": "Spin handlebars require sustained grip during out-of-saddle climbs and sprints, which creates ulnar and carpal pressure that over time causes tingling and numbness in the palm and fingers. Padded gloves redistribute that pressure and provide a secure sweat-resistant grip, improving comfort and allowing better form throughout the session." } },
        { "@type": "Question", "name": "Foam vs gel palm padding — which is better for spin class?", "acceptedAnswer": { "@type": "Answer", "text": "Gel padding conforms more precisely to the hand's contact points under pressure and absorbs vibration more effectively over many sessions without bottoming out. Foam padding is lighter and more breathable but compresses faster. For regular spinners training multiple times per week, gel is the better long-term investment." } },
        { "@type": "Question", "name": "Are cycling gloves worth it if I'm new to spin class?", "acceptedAnswer": { "@type": "Answer", "text": "For casual riders doing one class per week, gloves are optional. For anyone training three or more times weekly, especially those who spend significant time out of the saddle during sprints and climbs, gloves meaningfully improve palm comfort and handlebar grip and are worth the investment even at budget-level pricing." } },
      ],
    },
  ],
};

export default function BestCyclingGlovesPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Indoor Cycling</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Cycling Gloves<br /><span style={{ color: "#8b4a31" }}>for Spin Class (2026)</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated June 2026 · 7 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon and manufacturer sites. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Spin handlebars create sustained palm and nerve pressure during out-of-saddle climbs and sprints that bare hands and sweat can&apos;t comfortably manage over a full class. Padded cycling gloves redistribute that pressure and maintain a secure grip throughout. This guide compares five of the best options for 2026, covering an editor&apos;s pick, a budget favorite, and gloves built for extra grip, breathability, and crossover gym use.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/junseong-lee-G9H5edUL0T8-unsplash.jpg" alt="Best cycling gloves for spin class 2026" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

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
                  >Search →</a>
                </div>
              ))}
            </div>

            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Gloves · Padded & Ventilated</p>
              <div className="space-y-10">
                {PRODUCTS.map((p) => (
                  <div key={p.name}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-semibold" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{p.rank}</span>
                      <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{p.tag}</span>
                    </div>
                    <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.3)" }}>
                      <div className="p-6" style={{ backgroundColor: "#ffffff" }}>
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-xl font-semibold mb-1" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{p.name}</h3>
                            <p className="text-sm font-semibold" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{p.price}</p>
                          </div>
                          <a href={p.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow"
                            style={{ display: "block", fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "10px 14px", whiteSpace: "nowrap", flexShrink: 0 }}
                          >Search →</a>
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }} dangerouslySetInnerHTML={{ __html: p.description }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "Why wear cycling gloves for indoor spin class?", a: "Spin handlebars require sustained grip during out-of-saddle climbs and sprints, which creates ulnar and carpal pressure that causes tingling and numbness in the palm over time. Padded gloves redistribute that pressure and provide a secure sweat-resistant grip, improving comfort and form throughout the session." },
                  { q: "Foam vs gel palm padding — which is better for spin class?", a: "Gel padding conforms more precisely to the hand's contact points under pressure and absorbs vibration more effectively without bottoming out. Foam is lighter and more breathable but compresses faster. For regular spinners training multiple times per week, gel is the better long-term investment." },
                  { q: "Are cycling gloves worth it if I'm new to spin class?", a: "For casual riders doing one class per week, gloves are optional. For anyone training three or more times weekly, especially those spending significant time out of the saddle, gloves meaningfully improve palm comfort and handlebar grip." },
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
                <ArticleCard title="Best Cycling Shoes for Spin Class (2026)" excerpt="Clip-in and cage-compatible cycling shoes compared for power transfer and comfort." href="/blog/best-cycling-shoes-for-spin-class" category="Equipment" readTime="9 min read" date="June 2026" imageUrl="/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg" />
                <ArticleCard title="Best Padded Cycling Shorts for Spin Class (2026)" excerpt="Chamois quality and compression fit compared across women's and men's options." href="/blog/best-padded-cycling-shorts-for-spin" category="Equipment" readTime="8 min read" date="June 2026" imageUrl="/pictures/jade-stephens-N21356amsyw-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a spin studio near you" subtitle="Use our city guides to find boutique cycling and Pilates studios worldwide." showSearch searchPlaceholder="Ask: best spin studios in Paris..." />
      </main>
      <Footer />
    </>
  );
}
