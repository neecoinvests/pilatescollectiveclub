import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import { jsonLdHtml } from "@/lib/schema";
import { BF_DATES, BF_GUIDES, BF_PRICES_CHECKED, BF_PRICES_CHECKED_ISO } from "@/lib/blackFriday";

export type DealItem = {
  asin: string;
  name: string;
  price: string;
  badge: string;
  note: string;
};

export type DealSection = {
  id: string;
  title: string;
  intro: string;
  items: DealItem[];
};

export type DealsGuideProps = {
  slug: string;
  title: string;
  description: string;
  breadcrumb: string;
  eyebrow: string;
  h1: string;
  h1Accent: string;
  readTime: string;
  heroImage: string;
  heroAlt: string;
  intro: string;
  sections: DealSection[];
  watchFor: { h: string; b: string }[];
  faqs: { q: string; a: string }[];
  guides?: { label: string; href: string }[];
  ctaPlaceholder?: string;
};

const SITE = "https://pilatescollectiveclub.com";
const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=pilatescollective-20`;

const eyebrowStyle = { color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" };
const bodyStyle = { color: "#53433e", fontFamily: "'Montserrat', sans-serif" };
const h2Style = { color: "#1b1c1c", fontFamily: "'Playfair Display', serif" };
const inlineLinkStyle = { color: "#8b4a31", textDecoration: "underline" };
const chipStyle = { backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" };
const cardStyle = { backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" };
const rowStyle = (i: number) => ({ borderTop: i === 0 ? "none" : "1px solid rgba(217,194,186,0.25)", backgroundColor: "#ffffff" });

export default function DealsGuide(props: DealsGuideProps) {
  const pageUrl = `${SITE}/blog/${props.slug}`;
  const heroUrl = `${SITE}${props.heroImage}`;
  const allItems = props.sections.flatMap((s) => s.items);
  const related = BF_GUIDES.filter((g) => g.href !== `/blog/${props.slug}`);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${pageUrl}/#article`,
        "headline": props.title,
        "description": props.description,
        "image": { "@type": "ImageObject", "url": heroUrl, "width": 1200, "height": 630 },
        "author": { "@type": "Organization", "@id": `${SITE}/#organization`, "name": "Pilates Collective Club", "url": SITE },
        "publisher": {
          "@type": "Organization",
          "@id": `${SITE}/#organization`,
          "name": "Pilates Collective Club",
          "logo": { "@type": "ImageObject", "url": `${SITE}/pictures/pcc-logo.png` },
        },
        "datePublished": "2026-10-10",
        "dateModified": BF_PRICES_CHECKED_ISO,
        "url": pageUrl,
        "mainEntityOfPage": pageUrl,
        "articleSection": "Deals",
        "inLanguage": "en-US",
      },
      {
        "@type": "ItemList",
        "name": props.title,
        "numberOfItems": allItems.length,
        "itemListElement": allItems.map((p, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "item": {
            "@type": "Product",
            "name": p.name,
            "description": p.note,
            "offers": { "@type": "Offer", "priceCurrency": "USD", "price": p.price, "availability": "https://schema.org/InStock", "url": amz(p.asin) },
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${SITE}/blog` },
          { "@type": "ListItem", "position": 3, "name": props.breadcrumb, "item": pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": props.faqs.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={eyebrowStyle}>Black Friday 2026</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>{props.eyebrow}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              {props.h1}<br /><span style={{ color: "#8b4a31" }}>{props.h1Accent}</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Prices checked {BF_PRICES_CHECKED} · {props.readTime}</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Product links go to Amazon, where we earn a small commission on qualifying purchases at no extra cost to you. The prices shown are the current Amazon prices we checked, not sale prices — we are tracking these listings and will update this page as Black Friday deals go live.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>{props.intro}</p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "380px" }}>
              <Image src={props.heroImage} alt={props.heroAlt} fill className="object-cover" style={{ filter: "brightness(0.85)" }} priority />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            {/* Key dates */}
            <div className="mb-12 mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { label: "Black Friday", value: BF_DATES.blackFriday },
                { label: "Cyber Monday", value: BF_DATES.cyberMonday },
                { label: "Baseline prices checked", value: BF_PRICES_CHECKED },
              ].map((d) => (
                <div key={d.label} className="rounded-xl p-4" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.5)" }}>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={eyebrowStyle}>{d.label}</p>
                  <p className="text-sm font-semibold" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{d.value}</p>
                </div>
              ))}
            </div>

            {/* Watchlist table */}
            <div className="mb-16 overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
              <div className="px-6 py-4" style={{ backgroundColor: "#f6f3f2" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={eyebrowStyle}>The watchlist — price to beat</p>
              </div>
              {allItems.map((p, i) => (
                <div key={p.asin} className="flex items-center gap-3 sm:gap-4 px-6 py-3" style={rowStyle(i)}>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold leading-tight" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{p.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{p.badge} · now {p.price}</p>
                  </div>
                  <a href={amz(p.asin)} target="_blank" rel="noopener noreferrer sponsored"
                    style={{ display: "block", fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "10px 14px", whiteSpace: "nowrap", flexShrink: 0 }}
                  >Check price →</a>
                </div>
              ))}
            </div>

            {/* Sections */}
            {props.sections.map((s) => (
              <div key={s.id} id={s.id} className="mb-16 scroll-mt-28">
                <div className="flex items-center gap-4 mb-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] shrink-0" style={eyebrowStyle}>{s.title}</p>
                  <div className="flex-1 h-px" style={{ backgroundColor: "#d9c2ba" }} />
                </div>
                <h2 className="text-3xl font-semibold mb-4" style={h2Style}>{s.title}</h2>
                <p className="text-sm leading-relaxed mb-8" style={bodyStyle}>{s.intro}</p>
                <div className="space-y-8">
                  {s.items.map((p) => (
                    <div key={p.asin}>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={chipStyle}>{p.badge}</span>
                      </div>
                      <ProductCard name={p.name} description={p.note} price={p.price} affiliateUrl={amz(p.asin)} />
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* How to judge a deal */}
            <div className="mb-16 rounded-2xl p-6 md:p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.5)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={eyebrowStyle}>Before you buy</p>
              <h2 className="text-2xl font-semibold mb-4" style={h2Style}>How to tell a real Black Friday deal</h2>
              <ul className="space-y-3">
                {props.watchFor.map((w) => (
                  <li key={w.h} className="text-sm leading-relaxed" style={bodyStyle}>
                    <span className="font-semibold" style={{ color: "#1b1c1c" }}>{w.h}</span> {w.b}
                  </li>
                ))}
              </ul>
              {props.guides && props.guides.length > 0 && (
                <p className="text-sm leading-relaxed mt-5" style={bodyStyle}>
                  Full reviews behind these picks:{" "}
                  {props.guides.map((g, i) => (
                    <span key={g.href}>
                      {i > 0 && ", "}
                      <Link href={g.href} style={inlineLinkStyle}>{g.label}</Link>
                    </span>
                  ))}
                  .
                </p>
              )}
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={h2Style}>Frequently asked questions</h2>
              <div className="space-y-6">
                {props.faqs.map((item) => (
                  <div key={item.q} className="rounded-xl p-6" style={cardStyle}>
                    <h3 className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.q}</h3>
                    <p className="text-sm leading-relaxed" style={bodyStyle}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* All Black Friday guides */}
            <div>
              <h2 className="text-2xl font-semibold mb-8" style={h2Style}>More Black Friday 2026 guides</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {related.map((g) => (
                  <ArticleCard key={g.href} title={g.title} excerpt={g.excerpt} href={g.href} category={g.group} readTime="Deals" date="November 2026" imageUrl={g.imageUrl} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates and Lagree studios worldwide." showSearch searchPlaceholder={props.ctaPlaceholder ?? "Ask: best reformer studios in New York…"} />
      </main>
      <Footer />
    </>
  );
}
