import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Your Reformer Pilates Review (2026): Online Platform Tested | Pilates Collective Club",
  description: "Your Reformer Pilates reviewed — online class library, instructor quality, beginner to advanced content depth, and how it compares to Pilates Anytime and Alo Moves.",
  keywords: ["your reformer pilates review", "your reformer pilates online 2026", "is your reformer pilates worth it", "online reformer pilates platform", "your reformer pilates vs pilates anytime", "best online reformer pilates classes"],
  openGraph: {
    title: "Your Reformer Review (2026): The Connected Home Studio",
    description: "Your Reformer — the premium wood reformer with integrated app reviewed for home studio practitioners.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/your-reformer-pilates",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/henrique-ferreira-omiTbS-nb_M-unsplash.jpg", width: 1200, height: 630, alt: "Your Reformer Pilates review — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Reformer Review (2026)",
    description: "Your Reformer — the connected wood reformer reviewed honestly.",
    images: ["https://pilatescollectiveclub.com/pictures/henrique-ferreira-omiTbS-nb_M-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/your-reformer-pilates" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Your Reformer The Original",
    price: "From $2,999",
    verdict: "Best connected home reformer",
    description:
      "Your Reformer's The Original is one of the most thoughtfully designed home reformers on the market — a machine that takes the Peloton-era principle of hardware plus content and applies it with genuine quality to Pilates. The reformer itself is a full-specification spring machine: a five-spring system, sealed carriage bearings, three-position footbar, and a wood-accented frame that genuinely reads as furniture in a living space rather than gym equipment in a spare room. The YR app integration is the differentiator — an on-demand and live class library built by Your Reformer's team of instructors, accessible through a tablet mount that attaches to the machine. Class lengths range from 20 to 55 minutes across beginner, intermediate, and advanced levels. For home practitioners who want both a quality machine and the guidance structure of a studio without the studio commute, The Original is a compelling and coherent package.",
    affiliateUrl: "https://yourreformer.com",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "Your Reformer The Studio",
    price: "From $3,499",
    verdict: "Best Your Reformer for advanced practitioners",
    description:
      "The Studio is Your Reformer's premium machine — an extended version of The Original with a longer carriage, additional spring configuration options, and a larger platform end for standing work. The most significant upgrade from The Original is the extended footbar reach, which accommodates practitioners up to approximately 6'3\" through the full repertoire. The Studio also features a more comprehensive YR app subscription tier with advanced programming, class packs, and instructor-led progressions that build over weeks. For practitioners who have outgrown The Original or who are taller, The Studio is the appropriate choice within the Your Reformer ecosystem. The wood and aluminium construction is consistent with The Original — same quality standards, larger specification.",
    affiliateUrl: "https://yourreformer.com",
    tag: "Premium Model",
  },
  {
    rank: "03",
    name: "Your Reformer App Subscription",
    price: "From $29/month",
    verdict: "The content ecosystem",
    description:
      "The YR app is the component of Your Reformer that most distinguishes the brand from conventional reformer manufacturers. The subscription provides access to a library of reformer classes filmed specifically for Your Reformer machines, taught by instructors trained in the Your Reformer method. Classes are structured into progressive programmes rather than standalone sessions, which is important for practitioners without a live instructor — progression without guidance is one of the most common failure modes in home reformer practice. The app also includes guided warm-up and cool-down sequences, mobility work, and challenge programmes for experienced practitioners. The subscription is not required to use the reformer itself, but the hardware and content are designed as a unified system.",
    affiliateUrl: "https://yourreformer.com",
    tag: "App Platform",
  },
  {
    rank: "04",
    name: "Your Reformer Accessories Bundle",
    price: "From $149",
    verdict: "Best Your Reformer add-ons",
    description:
      "Your Reformer's accessories range includes reformer-specific add-ons designed to match the aesthetic and functional quality of the machine: a box set, additional spring options, the standing platform, and a mat that fits the carriage dimensions exactly. The accessories are sold as individual items and as bundles. The box set is the most functionally important addition — it unlocks exercises in the short box, long box, and kneeling series that cannot be performed without it. Your Reformer's accessories are designed specifically for their machines and match the wood-and-aluminium aesthetic precisely, which matters for practitioners who care about the home studio environment as a whole.",
    affiliateUrl: "https://yourreformer.com",
    tag: "Accessories",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Your Reformer Review (2026): The Connected Home Studio",
      "description": "Your Reformer reviewed — The Original and The Studio machines, plus the YR app, assessed for home studio practitioners.",
      "url": "https://pilatescollectiveclub.com/blog/your-reformer-pilates",
      "datePublished": "2026-05-21",
      "dateModified": "2026-05-21",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/henrique-ferreira-omiTbS-nb_M-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/your-reformer-pilates" },
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
        { "@type": "Question", "name": "Is Your Reformer worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Your Reformer is worth it for home practitioners who want both a quality reformer and a structured content ecosystem. The hardware performs at a mid-range clinical level — comparable to Align-Pilates or AeroPilates Pro models — and the YR app provides the guided instruction that most home practitioners need to progress safely. If you already have an instructor or prefer independent practice, a non-connected reformer at the same price may offer more hardware for the money." } },
        { "@type": "Question", "name": "Is Your Reformer a spring or bungee reformer?", "acceptedAnswer": { "@type": "Answer", "text": "Your Reformer uses a traditional spring resistance system — not bungee cords. The five-spring configuration is consistent with clinical reformer standards. This is an important distinction from brands like AeroPilates, which use elastic cord resistance, and means that Your Reformer's resistance profile is directly comparable to studio machines." } },
        { "@type": "Question", "name": "Where is Your Reformer made?", "acceptedAnswer": { "@type": "Answer", "text": "Your Reformer is an Australian brand with production in Asia. The company was founded in Australia and its instructor team and content production are Australia-based. The reformers ship globally. As with most equipment brands at this price tier, components are manufactured internationally to a design specification maintained by the brand." } },
        { "@type": "Question", "name": "Can I use Your Reformer without the app?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — Your Reformer functions as a standard spring reformer without any app subscription. The machine does not require connectivity to operate. The app subscription is an optional content layer. Practitioners who already have an instructor, a home Pilates practice, or access to other content platforms can use the reformer independently." } },
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
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 8 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Your Reformer has done for home Pilates what Peloton did for home cycling — combined a high-quality piece of hardware with a structured content ecosystem that makes solo practice genuinely effective. The Australian brand's reformers are built to spring-based clinical standards with a wood-and-aluminium aesthetic that makes them appropriate for any room in the home, and the YR app provides the instructor-led progressive programming that most practitioners need to advance their practice without weekly studio attendance. A new category of home fitness product, executed with real quality.
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
                  { label: "Resistance type", value: "Spring-based (5 springs)" },
                  { label: "Unique offering", value: "Integrated YR app with on-demand classes" },
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>4 Products · Reviewed</p>
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
                  { q: "Is Your Reformer worth it?", a: "Your Reformer is worth it for home practitioners who want both a quality reformer and a structured content ecosystem. The hardware performs at a mid-range clinical level and the YR app provides guided instruction for safe progression. If you already have an instructor or prefer independent practice, a non-connected reformer at the same price may offer more hardware for the money." },
                  { q: "Is Your Reformer a spring or bungee reformer?", a: "Your Reformer uses a traditional spring resistance system — not bungee cords. The five-spring configuration is consistent with clinical reformer standards. This is an important distinction from brands like AeroPilates and means that Your Reformer's resistance profile is directly comparable to studio machines." },
                  { q: "Where is Your Reformer made?", a: "Your Reformer is an Australian brand with production in Asia. The company was founded in Australia and its instructor team and content production are Australia-based. The reformers ship globally." },
                  { q: "Can I use Your Reformer without the app?", a: "Yes — Your Reformer functions as a standard spring reformer without any app subscription. The machine does not require connectivity to operate. Practitioners who already have an instructor or access to other content platforms can use the reformer independently." },
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
                <ArticleCard title="Best Foldable Pilates Reformers" excerpt="The best foldable options — including Your Reformer's collapsible design." href="/blog/best-foldable-pilates-reformer" category="Equipment" readTime="9 min read" date="May 2026" imageUrl="/pictures/junseong-lee-G9H5edUL0T8-unsplash.jpg" />
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
