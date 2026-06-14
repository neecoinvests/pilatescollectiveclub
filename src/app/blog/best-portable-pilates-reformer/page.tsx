import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Portable Pilates Reformer (2026): Top Picks for Home & Travel | Pilates Collective Club",
  description: "The best portable and foldable Pilates reformers in 2026 — compact designs, honest reviews, and where to buy on Amazon. From budget to professional-grade.",
  keywords: ["best portable pilates reformer", "foldable pilates reformer", "portable pilates reformer 2026", "compact pilates reformer home", "pilates reformer amazon", "travel pilates reformer", "best home pilates reformer portable", "lightweight pilates reformer", "pilates reformer small space", "aeropilates reformer"],
  openGraph: {
    title: "Best Portable Pilates Reformer (2026): Top Home & Travel Picks",
    description: "Compact, foldable, and lightweight Pilates reformers worth buying in 2026 — reviewed honestly with Amazon links.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-portable-pilates-reformer",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-reformer-morning-light.png", width: 1200, height: 630, alt: "Best Portable Pilates Reformer — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Portable Pilates Reformer (2026)",
    description: "Compact and foldable Pilates reformers worth buying — reviewed honestly.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-reformer-morning-light.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-portable-pilates-reformer" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Portable Pilates Reformer (2026): Top Picks for Home & Travel",
      "description": "Reviewed: the best compact and portable Pilates reformers in 2026 — which deliver real Pilates results and which to avoid.",
      "url": "https://pilatescollectiveclub.com/blog/best-portable-pilates-reformer",
      "datePublished": "2026-06-01",
      "dateModified": "2026-06-01",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-reformer-morning-light.png", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-portable-pilates-reformer" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Portable Pilates Reformer", "item": "https://pilatescollectiveclub.com/blog/best-portable-pilates-reformer" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Are portable Pilates reformers worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Portable reformers are worth it if you are a consistent practitioner who cannot access a studio regularly, have limited space at home, or travel frequently. The AeroPilates line offers the most reformer-faithful experience in a consumer-priced, space-efficient format. The compromise compared to a professional reformer is primarily in spring feel and carriage travel distance — the exercises and muscle engagement are genuinely comparable." } },
        { "@type": "Question", "name": "What is the weight limit of portable Pilates reformers?", "acceptedAnswer": { "@type": "Answer", "text": "Most consumer-grade portable reformers (AeroPilates, similar brands) are rated for users up to 300 lbs (136kg). Professional-grade compact reformers (Balanced Body Allegro 2) are rated higher. Always check the manufacturer's specification — the weight rating affects both safety and carriage performance." } },
        { "@type": "Question", "name": "How much space does a portable Pilates reformer need?", "acceptedAnswer": { "@type": "Answer", "text": "In use, most reformers require approximately 7–8 feet (210–240cm) of length and 2 feet (60cm) of width. Folded, compact reformers typically reduce to roughly half the length. The AeroPilates models fold to approximately 120cm — fitting in a large closet or under a queen-size bed. Always check the folded dimensions before purchasing if storage space is a constraint." } },
        { "@type": "Question", "name": "Can a portable reformer replace studio sessions?", "acceptedAnswer": { "@type": "Answer", "text": "For maintaining and developing an established practice, yes — a quality home reformer is a genuine substitute for studio access. For learning Pilates from scratch, it is not a replacement for professional instruction: you need an instructor's eye to establish correct form before practising independently. The ideal progression is to learn in a studio, then supplement or transfer your practice to a home reformer once technique is established." } },
      ],
    },
  ],
};

const REFORMERS = [
  {
    rank: 1,
    name: "Stamina AeroPilates Pro XP 556",
    price: "~£500–650",
    verdict: "Best overall portable reformer",
    tag: "Best Overall",
    description: "The AeroPilates 556 is the most widely sold home reformer in the UK and US market — and for good reason. It delivers a genuinely reformer-faithful experience: four adjustable cords (equivalent to springs), a smooth-rolling padded carriage, and a foot bar that adjusts to multiple positions. The rebounder (mini trampoline footbar) for cardio rebounding is included, which expands the exercise range beyond classical Pilates. Folds upright for storage and handles most standard reformer exercises through intermediate level.",
    affiliateUrl: "https://www.amazon.co.uk/s?k=stamina+aeropilates+pro+xp+556&tag=pilatescollective-20",
    pros: ["Smooth carriage travel", "Includes rebounder for cardio", "Folds upright for storage", "Suitable for up to 136kg / 300lbs"],
    cons: ["Cord resistance less precise than professional springs", "Limited advanced exercise options", "Requires assembly on arrival"],
  },
  {
    rank: 2,
    name: "Stamina AeroPilates Premier 55-4702",
    price: "~£350–450",
    verdict: "Best budget portable reformer",
    tag: "Best Value",
    description: "The more accessible entry point in the AeroPilates range. Four resistance cords, padded carriage, adjustable foot bar, and the same folding mechanism as the 556. The primary differences from the 556 are build material (slightly lighter frame) and the absence of the rebounder. For practitioners focused on classical Pilates mat-to-reformer translation rather than cardio rebounding, this is the better value option — identical core exercise capability at a lower price point.",
    affiliateUrl: "https://www.amazon.co.uk/s?k=stamina+aeropilates+premier+reformer&tag=pilatescollective-20",
    pros: ["Lower price than 556", "Same core exercise capability", "Compact fold for storage", "Good for beginners to intermediate"],
    cons: ["No rebounder included", "Lighter frame than 556", "Four resistance levels only"],
  },
  {
    rank: 3,
    name: "Balanced Body Allegro 2 Reformer",
    price: "~£2,200–2,800",
    verdict: "Best professional portable reformer",
    tag: "Professional Grade",
    description: "The Allegro 2 is Balanced Body's 'portable' professional reformer — used in clinical and studio settings that need a transportable option. It includes the same spring system as full studio reformers (five interchangeable springs), a longer carriage travel, and professional-grade frame construction. It folds flat for transport and storage and is the choice for instructors teaching in multiple locations or serious home practitioners who want a studio experience without compromise. Available through specialist retailers including Amazon.",
    affiliateUrl: "https://www.amazon.co.uk/s?k=balanced+body+allegro+2+reformer&tag=pilatescollective-20",
    pros: ["True professional spring system", "Full exercise repertoire", "Studio-equivalent carriage travel", "Used by professional instructors"],
    cons: ["Significant investment (£2,200+)", "Heavier than consumer reformers", "Requires instruction to use correctly"],
  },
  {
    rank: 4,
    name: "Merrithew At-Home SPX Reformer Bundle",
    price: "~£900–1,200",
    verdict: "Best mid-range reformer",
    tag: "Mid-Range Pick",
    description: "Merrithew (formerly STOTT PILATES) is one of the most respected names in Pilates equipment. The At-Home SPX Reformer offers a genuine spring-based resistance system (not cords), a longer carriage travel than consumer-grade reformers, and the quality construction that Merrithew is known for. The Bundle version includes a vertical stand for the foot bar — enabling a wider range of exercises including standing and kneeling work. A significant step up from AeroPilates in spring feel and exercise range.",
    affiliateUrl: "https://www.amazon.co.uk/s?k=merrithew+at+home+spx+reformer&tag=pilatescollective-20",
    pros: ["True spring system (not cords)", "Longer carriage travel", "Merrithew build quality", "Bundle includes vertical stand"],
    cons: ["Higher price than AeroPilates", "Larger footprint than cord-based models", "Some assembly required"],
  },
];

export default function BestPortablePilatesReformerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Equipment</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>2026 Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Portable<br />Pilates Reformer<br /><span style={{ color: "#8b4a31" }}>2026 Reviews</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated June 2026 · 10 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              The home reformer market has matured significantly since 2020. Where early consumer-grade reformers were crude approximations of the studio experience, today&apos;s best portable reformers deliver genuine Pilates exercise capability — including most of the classical repertoire through intermediate level — in a format that stores in a closet and sets up in two minutes. Here is what is worth buying in 2026.
            </p>
            <p className="text-xs mt-4" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-reformer-morning-light.png" alt="Best portable Pilates reformer 2026 — compact home reformer in morning light studio setting" fill className="object-cover" style={{ filter: "brightness(0.88)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-10 mt-4 rounded-xl p-6" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <p className="text-sm font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Reformers at a glance</p>
              <div className="space-y-2">
                {REFORMERS.map((r) => (
                  <div key={r.rank} className="flex gap-3 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    <span className="font-semibold w-4" style={{ color: "#8b4a31" }}>{r.rank}.</span>
                    <span><span className="font-medium">{r.name}</span> · {r.price} · {r.tag}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-10 mb-14">
              {REFORMERS.map((reformer) => (
                <div key={reformer.rank} className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.35)" }}>
                  <div className="px-6 py-4" style={{ backgroundColor: "#f6f3f2" }}>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-2xl font-bold" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>#{reformer.rank}</span>
                      <span className="text-xs font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full" style={{ backgroundColor: "#8b4a31", color: "#ffffff", fontFamily: "'Montserrat', sans-serif" }}>{reformer.tag}</span>
                    </div>
                    <h2 className="text-xl font-semibold" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{reformer.name}</h2>
                    <p className="text-sm font-medium" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{reformer.price} · {reformer.verdict}</p>
                  </div>
                  <div className="px-6 py-5 bg-white">
                    <p className="text-sm leading-relaxed mb-5" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{reformer.description}</p>
                    <div className="grid grid-cols-2 gap-4 mb-5">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Pros</p>
                        <ul className="space-y-1">
                          {reformer.pros.map((p) => (
                            <li key={p} className="text-xs" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>+ {p}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Cons</p>
                        <ul className="space-y-1">
                          {reformer.cons.map((c) => (
                            <li key={c} className="text-xs" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>- {c}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <a href={reformer.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="inline-block text-sm font-semibold px-5 py-2.5 rounded-full transition-opacity hover:opacity-80" style={{ backgroundColor: "#8b4a31", color: "#ffffff", fontFamily: "'Montserrat', sans-serif" }}>
                      Shop on Amazon →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-14 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>How to choose the right portable reformer</h2>
              <ul className="space-y-3">
                {[
                  "Budget under £600: AeroPilates Pro XP 556 is the clear choice — most exercises, best build quality, includes rebounder.",
                  "Budget £600–£1,500: Merrithew At-Home SPX — genuine springs rather than cords make a meaningful difference in the feel of the practice.",
                  "Budget over £2,000: Balanced Body Allegro 2 — professional standard, full repertoire, built to last decades.",
                  "Space constraint: AeroPilates models fold smallest. Measure your storage space before ordering — folded dimensions vary significantly.",
                  "Already training at a studio: visit the studio to ask what reformer brand they use. Buying the same or similar brand at home ensures the spring feel and exercise vocabulary transfers directly.",
                  "Complete beginner: do not buy a home reformer as your first Pilates purchase. Take 10–20 studio sessions first, establish correct technique with professional guidance, then consider a home reformer to supplement your practice.",
                ].map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    <span className="font-semibold" style={{ color: "#8b4a31" }}>→</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "Are portable Pilates reformers worth it?", a: "Portable reformers are worth it if you are a consistent practitioner who cannot access a studio regularly, have limited space at home, or travel frequently. The AeroPilates line offers the most reformer-faithful experience in a consumer-priced, space-efficient format. The compromise compared to a professional reformer is primarily in spring feel and carriage travel distance — the exercises and muscle engagement are genuinely comparable." },
                  { q: "What is the weight limit of portable Pilates reformers?", a: "Most consumer-grade portable reformers (AeroPilates, similar brands) are rated for users up to 300 lbs (136kg). Professional-grade compact reformers (Balanced Body Allegro 2) are rated higher. Always check the manufacturer's specification — the weight rating affects both safety and carriage performance." },
                  { q: "How much space does a portable Pilates reformer need?", a: "In use, most reformers require approximately 7–8 feet (210–240cm) of length and 2 feet (60cm) of width. Folded, compact reformers typically reduce to roughly half the length. The AeroPilates models fold to approximately 120cm — fitting in a large closet or under a queen-size bed. Always check the folded dimensions before purchasing if storage space is a constraint." },
                  { q: "Can a portable reformer replace studio sessions?", a: "For maintaining and developing an established practice, yes — a quality home reformer is a genuine substitute for studio access. For learning Pilates from scratch, it is not a replacement for professional instruction: you need an instructor's eye to establish correct form before practising independently. The ideal progression is to learn in a studio, then supplement or transfer your practice to a home reformer once technique is established." },
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
                <ArticleCard title="Best Home Pilates Reformer" excerpt="Full comparison of home reformers across all price ranges — including the premium studio-grade options." href="/blog/best-home-pilates-reformer" category="Equipment" readTime="11 min read" date="June 2026" imageUrl="/pictures/stitch-white-reformer-plaster.png" />
                <ArticleCard title="Reformer vs Mat Pilates" excerpt="The honest comparison between reformer and mat — what each does better and which to prioritise." href="/blog/pilates-reformer-vs-mat" category="Comparison" readTime="8 min read" date="June 2026" imageUrl="/pictures/stitch-reformer-sunlit-minimal.png" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best Pilates studios in London…" />
      </main>
      <Footer />
    </>
  );
}
