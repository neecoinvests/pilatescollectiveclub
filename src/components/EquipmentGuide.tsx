import Image from "next/image";
import Link from "next/link";
import AffiliateNote from "@/components/AffiliateNote";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import { jsonLdHtml } from "@/lib/schema";

// Long-form equipment buying guide / comparison template. Pages pass data;
// this renders the layout plus Article, Product ItemList, Breadcrumb and FAQ
// structured data.

export type GuideItem = {
  id: string;
  badge: string;
  name: string;
  brand: string;
  price: string;
  url: string;
  // "in-stock" | "low-stock" | "made-to-order" | "back-order" | "direct"
  availability: "in-stock" | "low-stock" | "made-to-order" | "back-order" | "direct";
  soldBy?: string;
  specs: string[];
  body: string;
  pros?: string[];
  cons?: string[];
  ctaLabel?: string;
};

export type GuideBlock =
  | { kind: "prose"; id?: string; eyebrow?: string; heading: string; paragraphs: string[] }
  | { kind: "products"; id: string; eyebrow?: string; heading: string; intro?: string; items: GuideItem[] }
  | { kind: "table"; id?: string; eyebrow?: string; heading: string; intro?: string; columns: string[]; rows: string[][]; note?: string }
  | { kind: "cards"; id?: string; eyebrow?: string; heading: string; intro?: string; cards: { h: string; b: string }[] }
  | { kind: "callout"; eyebrow: string; heading: string; body: string[]; dark?: boolean }
  | { kind: "steps"; id?: string; eyebrow?: string; heading: string; intro?: string; steps: { h: string; b: string }[] };

export type EquipmentGuideProps = {
  slug: string;
  title: string;
  description: string;
  breadcrumb: string;
  eyebrow: string;
  eyebrowAccent: string;
  h1: string;
  h1Accent: string;
  readTime: string;
  updatedLabel: string;
  datePublished: string;
  dateModified: string;
  heroImage: string;
  heroAlt: string;
  heroCaption?: string;
  intro: string[];
  quickPicks?: { label: string; itemId: string }[];
  blocks: GuideBlock[];
  faqs: { q: string; a: string }[];
  related: { title: string; excerpt: string; href: string; imageUrl: string; category: string; readTime: string }[];
  sources?: { label: string; url: string }[];
  ctaTitle?: string;
  ctaSubtitle?: string;
};

const SITE = "https://pilatescollectiveclub.com";
const sans = "'Montserrat', sans-serif";
const serif = "'Playfair Display', serif";
const eyebrowStyle = { color: "#8b4a31", fontFamily: sans };
const bodyStyle = { color: "#53433e", fontFamily: sans };
const h2Style = { color: "#1b1c1c", fontFamily: serif };
const rowStyle = (i: number) => ({ borderTop: i === 0 ? "none" : "1px solid rgba(217,194,186,0.25)", backgroundColor: "#ffffff" });

const AVAILABILITY: Record<GuideItem["availability"], { label: string; schema: string }> = {
  "in-stock": { label: "In stock", schema: "https://schema.org/InStock" },
  "low-stock": { label: "Low stock", schema: "https://schema.org/LimitedAvailability" },
  "made-to-order": { label: "Made to order, ships after a lead time", schema: "https://schema.org/BackOrder" },
  "back-order": { label: "Back-ordered, ships at a later date", schema: "https://schema.org/BackOrder" },
  direct: { label: "Sold direct by the brand or its dealers", schema: "https://schema.org/InStock" },
};

function Eyebrow({ text }: { text?: string }) {
  if (!text) return null;
  return (
    <div className="flex items-center gap-4 mb-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] shrink-0" style={eyebrowStyle}>{text}</p>
      <div className="flex-1 h-px" style={{ backgroundColor: "#d9c2ba" }} />
    </div>
  );
}

function ItemCard({ item, rank }: { item: GuideItem; rank: number }) {
  const external = item.availability === "direct" ? "noopener noreferrer" : "noopener noreferrer sponsored";
  return (
    <div id={item.id} className="scroll-mt-28 rounded-2xl overflow-hidden" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.35)", boxShadow: "0 1px 8px rgba(0,0,0,0.05)" }}>
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="text-xs font-semibold w-6 h-6 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: "#1b1c1c", fontFamily: sans, fontSize: "10px" }}>{rank}</span>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] px-3 py-1 rounded-full" style={{ backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: sans }}>{item.badge}</span>
            </div>
            <h3 className="text-2xl font-semibold" style={{ color: "#1b1c1c", fontFamily: serif }}>{item.name}</h3>
          </div>
          <span className="text-sm font-semibold whitespace-nowrap" style={{ color: "#c5a882", fontFamily: sans }}>{item.price}</span>
        </div>
        <p className="text-xs mb-4" style={{ color: "#86736d", fontFamily: sans }}>
          {AVAILABILITY[item.availability].label}{item.soldBy ? ` · Sold by ${item.soldBy}` : ""}
        </p>
        <p className="text-sm leading-relaxed mb-5" style={bodyStyle}>{item.body}</p>

        <div className="rounded-xl p-4 mb-5" style={{ backgroundColor: "#f9f6f5" }}>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2.5" style={{ color: "#8b4a31", fontFamily: sans }}>Key specs (from the listing)</p>
          <ul className="space-y-1.5">
            {item.specs.map((s) => (
              <li key={s} className="text-xs leading-relaxed flex gap-2" style={bodyStyle}><span style={{ color: "#c5a882", flexShrink: 0 }}>·</span>{s}</li>
            ))}
          </ul>
        </div>

        {(item.pros || item.cons) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {item.pros && (
              <div className="rounded-xl p-4" style={{ backgroundColor: "#f6f8f5" }}>
                <p className="text-xs font-semibold uppercase tracking-widest mb-2.5" style={{ color: "#536257", fontFamily: sans }}>Why buy it</p>
                <ul className="space-y-1.5">
                  {item.pros.map((p) => (
                    <li key={p} className="text-xs leading-relaxed flex gap-2" style={bodyStyle}><span style={{ color: "#536257", flexShrink: 0 }}>+</span>{p}</li>
                  ))}
                </ul>
              </div>
            )}
            {item.cons && (
              <div className="rounded-xl p-4" style={{ backgroundColor: "#f9f6f5" }}>
                <p className="text-xs font-semibold uppercase tracking-widest mb-2.5" style={{ color: "#7a6a64", fontFamily: sans }}>Think twice if</p>
                <ul className="space-y-1.5">
                  {item.cons.map((c) => (
                    <li key={c} className="text-xs leading-relaxed flex gap-2" style={bodyStyle}><span style={{ color: "#c5a882", flexShrink: 0 }}>–</span>{c}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        <a href={item.url} target="_blank" rel={external} className="inline-block px-5 py-2.5 rounded-xl text-xs font-semibold transition-opacity hover:opacity-90" style={{ backgroundColor: "#8b4a31", color: "#ffffff", fontFamily: sans, textDecoration: "none" }}>
          {item.ctaLabel ?? "Shop Now →"}
        </a>
      </div>
    </div>
  );
}

export default function EquipmentGuide(props: EquipmentGuideProps) {
  const pageUrl = `${SITE}/blog/${props.slug}`;
  const heroUrl = `${SITE}${props.heroImage}`;
  const allItems = props.blocks.flatMap((b) => (b.kind === "products" ? b.items : []));
  const itemById = new Map(allItems.map((it) => [it.id, it]));
  const rankById = new Map(allItems.map((it, i) => [it.id, i + 1]));

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
        "publisher": { "@type": "Organization", "@id": `${SITE}/#organization`, "name": "Pilates Collective Club", "logo": { "@type": "ImageObject", "url": `${SITE}/pictures/pcc-logo.png` } },
        "datePublished": props.datePublished,
        "dateModified": props.dateModified,
        "url": pageUrl,
        "mainEntityOfPage": pageUrl,
        "articleSection": "Equipment",
        "inLanguage": "en-US",
      },
      {
        "@type": "ItemList",
        "name": props.title,
        "numberOfItems": allItems.length,
        "itemListElement": allItems.map((it, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "item": {
            "@type": "Product",
            "name": it.name,
            "brand": { "@type": "Brand", "name": it.brand },
            "description": it.body,
            "offers": { "@type": "Offer", "priceCurrency": "USD", "price": it.price, "availability": AVAILABILITY[it.availability].schema, "url": it.url },
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
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={eyebrowStyle}>{props.eyebrow}</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: sans }}>{props.eyebrowAccent}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: serif }}>
              {props.h1}<br /><span style={{ color: "#8b4a31" }}>{props.h1Accent}</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: sans }}>{props.updatedLabel} · {props.readTime}</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            {props.intro.map((p, i) => (
              <p key={i} className={i === 0 ? "text-lg leading-relaxed mb-5" : "text-base leading-relaxed mb-5"} style={{ ...bodyStyle, fontWeight: i === 0 ? 300 : 400 }}>{p}</p>
            ))}
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src={props.heroImage} alt={props.heroAlt} fill className="object-cover" style={{ filter: "brightness(0.85)" }} priority />
              {props.heroCaption && (
                <div className="absolute inset-0 flex items-end p-8">
                  <p className="text-sm font-light" style={{ color: "rgba(255,255,255,0.8)", fontFamily: sans }}>{props.heroCaption}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            {props.quickPicks && props.quickPicks.length > 0 && (
              <div className="mb-4 mt-4 overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
                <div className="px-6 py-4" style={{ backgroundColor: "#f6f3f2" }}>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={eyebrowStyle}>Quick picks: at a glance</p>
                </div>
                {props.quickPicks.map((qp, i) => {
                  const it = itemById.get(qp.itemId);
                  if (!it) return null;
                  return (
                    <div key={qp.itemId} className="flex items-center gap-3 sm:gap-4 px-6 py-4" style={rowStyle(i)}>
                      <span className="text-base font-semibold w-7 shrink-0 text-center" style={{ color: "#d9c2ba", fontFamily: serif }}>{String(rankById.get(qp.itemId)).padStart(2, "0")}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-widest" style={eyebrowStyle}>{qp.label}</p>
                        <a href={`#${it.id}`} className="text-sm font-semibold leading-tight" style={{ color: "#1b1c1c", fontFamily: sans, textDecoration: "none" }}>{it.name}</a>
                      </div>
                      <span className="text-xs font-semibold hidden md:block shrink-0 mr-3" style={{ color: "#86736d", fontFamily: sans }}>{it.price}</span>
                      <a href={it.url} target="_blank" rel={it.availability === "direct" ? "noopener noreferrer" : "noopener noreferrer sponsored"}
                        style={{ display: "block", fontFamily: sans, fontSize: "9px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "10px 14px", whiteSpace: "nowrap", flexShrink: 0 }}
                      >Shop Now →</a>
                    </div>
                  );
                })}
              </div>
            )}
            <AffiliateNote className={props.quickPicks && props.quickPicks.length > 0 ? "mb-16" : "mb-10 mt-4"}>Some links on this page are affiliate links: we earn a small commission on qualifying purchases at no extra cost to you. Specifications are taken from each product&apos;s listing or the manufacturer, not from our own testing. Prices were checked live on Amazon on the date above and change often.</AffiliateNote>

            {props.blocks.map((b, bi) => {
              switch (b.kind) {
                case "prose":
                  return (
                    <div key={bi} id={b.id} className="mb-16 scroll-mt-28">
                      <Eyebrow text={b.eyebrow} />
                      <h2 className="text-3xl font-semibold mb-6" style={h2Style}>{b.heading}</h2>
                      {b.paragraphs.map((p, i) => <p key={i} className="text-base leading-relaxed mb-4" style={bodyStyle}>{p}</p>)}
                    </div>
                  );
                case "products":
                  return (
                    <div key={bi} id={b.id} className="mb-16 scroll-mt-28">
                      <Eyebrow text={b.eyebrow} />
                      <h2 className="text-3xl font-semibold mb-4" style={h2Style}>{b.heading}</h2>
                      {b.intro && <p className="text-sm leading-relaxed mb-8" style={bodyStyle}>{b.intro}</p>}
                      <div className="space-y-10">
                        {b.items.map((it) => <ItemCard key={it.id} item={it} rank={rankById.get(it.id) ?? 0} />)}
                      </div>
                    </div>
                  );
                case "table":
                  return (
                    <div key={bi} id={b.id} className="mb-16 scroll-mt-28">
                      <Eyebrow text={b.eyebrow} />
                      <h2 className="text-3xl font-semibold mb-4" style={h2Style}>{b.heading}</h2>
                      {b.intro && <p className="text-sm leading-relaxed mb-6" style={bodyStyle}>{b.intro}</p>}
                      <div className="overflow-x-auto rounded-2xl" style={{ border: "1px solid rgba(217,194,186,0.4)" }}>
                        <table className="w-full text-sm" style={{ fontFamily: sans, minWidth: "560px" }}>
                          <thead>
                            <tr style={{ backgroundColor: "#f6f3f2" }}>
                              {b.columns.map((c, ci) => (
                                <th key={c} className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-widest" style={{ color: ci === 0 ? "#1b1c1c" : "#8b4a31" }}>{c}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {b.rows.map((r, ri) => (
                              <tr key={ri} style={{ borderTop: "1px solid rgba(217,194,186,0.3)", backgroundColor: "#ffffff" }}>
                                {r.map((cell, ci) => (
                                  <td key={ci} className="px-4 py-3 align-top text-sm leading-relaxed" style={{ color: ci === 0 ? "#1b1c1c" : "#53433e", fontWeight: ci === 0 ? 600 : 400 }}>{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      {b.note && <p className="text-xs mt-3" style={{ color: "#86736d", fontFamily: sans }}>{b.note}</p>}
                    </div>
                  );
                case "cards":
                  return (
                    <div key={bi} id={b.id} className="mb-16 scroll-mt-28">
                      <Eyebrow text={b.eyebrow} />
                      <h2 className="text-3xl font-semibold mb-4" style={h2Style}>{b.heading}</h2>
                      {b.intro && <p className="text-sm leading-relaxed mb-6" style={bodyStyle}>{b.intro}</p>}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {b.cards.map((c) => (
                          <div key={c.h} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                            <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: serif }}>{c.h}</p>
                            <p className="text-sm leading-relaxed" style={bodyStyle}>{c.b}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                case "steps":
                  return (
                    <div key={bi} id={b.id} className="mb-16 scroll-mt-28">
                      <Eyebrow text={b.eyebrow} />
                      <h2 className="text-3xl font-semibold mb-4" style={h2Style}>{b.heading}</h2>
                      {b.intro && <p className="text-sm leading-relaxed mb-6" style={bodyStyle}>{b.intro}</p>}
                      <ol className="space-y-5">
                        {b.steps.map((s, si) => (
                          <li key={s.h} className="flex gap-4">
                            <span className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold" style={{ backgroundColor: "#1b1c1c", color: "#ffffff", fontFamily: sans }}>{si + 1}</span>
                            <div>
                              <p className="text-base font-semibold mb-1" style={{ color: "#1b1c1c", fontFamily: serif }}>{s.h}</p>
                              <p className="text-sm leading-relaxed" style={bodyStyle}>{s.b}</p>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </div>
                  );
                case "callout":
                  return (
                    <div key={bi} className="mb-16 rounded-2xl p-6 md:p-8" style={b.dark ? { backgroundColor: "#1b1c1c" } : { backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.5)" }}>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: b.dark ? "#c5a882" : "#8b4a31", fontFamily: sans }}>{b.eyebrow}</p>
                      <h2 className="text-2xl font-semibold mb-4" style={{ color: b.dark ? "#ffffff" : "#1b1c1c", fontFamily: serif }}>{b.heading}</h2>
                      {b.body.map((p, i) => <p key={i} className="text-sm leading-relaxed mb-3" style={{ color: b.dark ? "rgba(255,255,255,0.8)" : "#53433e", fontFamily: sans }}>{p}</p>)}
                    </div>
                  );
              }
            })}

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={h2Style}>Frequently asked questions</h2>
              <div className="space-y-6">
                {props.faqs.map((f) => (
                  <div key={f.q} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <h3 className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: serif }}>{f.q}</h3>
                    <p className="text-sm leading-relaxed" style={bodyStyle}>{f.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {props.sources && props.sources.length > 0 && (
              <div className="mb-16">
                <h2 className="text-2xl font-semibold mb-6" style={h2Style}>Sources</h2>
                <ul className="space-y-2 list-disc pl-5">
                  {props.sources.map((s) => (
                    <li key={s.url} className="text-sm leading-relaxed" style={bodyStyle}>
                      <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: "#8b4a31", textDecoration: "underline" }}>{s.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h2 className="text-2xl font-semibold mb-8" style={h2Style}>Further reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {props.related.map((r) => (
                  <ArticleCard key={r.href} title={r.title} excerpt={r.excerpt} href={r.href} category={r.category} readTime={r.readTime} date="October 2026" imageUrl={r.imageUrl} />
                ))}
              </div>
              <p className="text-sm leading-relaxed mt-8" style={bodyStyle}>
                Still deciding? Compare every brand in our <Link href="/blog/best-pilates-reformer-brands" style={{ color: "#8b4a31", textDecoration: "underline" }}>reformer brands guide</Link>.
              </p>
            </div>
          </div>
        </section>

        <CTASection title={props.ctaTitle ?? "Find a studio near you"} subtitle={props.ctaSubtitle ?? "Use our curated city guides to find the best Pilates studios worldwide."} showSearch searchPlaceholder="Ask: best reformer studios in New York…" />
      </main>
      <Footer />
    </>
  );
}
