import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Postnatal Pilates (2026): When to Start, What's Safe, How to Progress | Pilates Collective Club",
  description: "A complete guide to postnatal Pilates — when you can safely return, which exercises to start with, how to progress, and what equipment supports recovery after birth.",
  keywords: ["postnatal pilates", "pilates after birth", "postpartum pilates guide", "when to start pilates after baby", "postnatal pilates exercises", "pilates after c-section", "postpartum core pilates", "returning to pilates after pregnancy"],
  openGraph: {
    title: "Postnatal Pilates: When to Start, What's Safe, How to Progress",
    description: "A complete guide to returning to Pilates after birth — safe exercises, timelines, and equipment.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/postnatal-pilates",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/roxana-popovici-Zp4APUiwEsM-unsplash.jpg", width: 1200, height: 630, alt: "Postnatal Pilates — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Postnatal Pilates: When to Start & What's Safe",
    description: "A complete guide to postnatal Pilates — timelines, safe exercises, and equipment.",
    images: ["https://pilatescollectiveclub.com/pictures/roxana-popovici-Zp4APUiwEsM-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/postnatal-pilates" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Theraband Resistance Band Set",
    price: "From $18",
    verdict: "Best resistance bands for postnatal rehab",
    description:
      "Theraband's colour-coded resistance bands are the standard in physiotherapy clinics for postnatal rehabilitation and are equally effective for home Pilates practice. The flat band format allows a wider range of grip positions than loop bands — wrapping around the foot for supine leg exercises, anchored under the mat for arm work, or held for standing exercises. The progressive resistance system (yellow through black, lightest to heaviest) allows the safe incremental progression that postnatal recovery demands: starting with minimal resistance and advancing as core and whole-body strength returns over months. Each band is long enough to create multiple exercise setups from a single cut.",
    affiliateUrl: "https://www.amazon.com/s?k=theraband+resistance+band+set+light+medium+heavy&tag=pilatescollective-20",
    tag: "Best for Progressive Recovery",
  },
  {
    rank: "02",
    name: "Manduka PRO Yoga Mat 6mm",
    price: "From $120",
    verdict: "Best mat for postnatal practice",
    description:
      "The Manduka PRO is the recommended mat for postnatal Pilates for two reasons specific to postpartum practice: its 6mm thickness provides meaningful cushioning for joints that have increased laxity from relaxin, and its closed-cell surface does not absorb moisture — relevant for the increased perspiration that accompanies the early postpartum period. The non-slip surface performs consistently whether the practitioner is dry or sweating, and the mat is dense enough to resist compression under kneeling positions without bottoming out. The Manduka PRO is an investment that outlasts most alternatives by years, which suits practitioners building a long-term home Pilates practice through the postnatal period and beyond.",
    affiliateUrl: "https://www.amazon.com/s?k=manduka+pro+yoga+mat+6mm&tag=pilatescollective-20",
    tag: "Best Postnatal Mat",
  },
  {
    rank: "03",
    name: "Bellababy Hands-Free Pumping Bra",
    price: "From $28",
    verdict: "Best practical accessory for nursing mothers",
    description:
      "For breastfeeding practitioners who attend Pilates classes or practice at home, a supportive hands-free pumping bra that also functions as a sports bra simplifies the logistics of fitting practice around feeding schedules. The Bellababy design provides enough compression for low-to-moderate intensity Pilates while accommodating the breast size changes of the postpartum period. The adjustable fit accounts for daily volume fluctuations. This is a practical consideration that standard Pilates accessory guides omit — the physical discomfort of a poorly fitting bra during postnatal exercise is a genuine barrier to consistent practice, and solving it directly improves adherence.",
    affiliateUrl: "https://www.amazon.com/s?k=bellababy+hands+free+pumping+bra+sports&tag=pilatescollective-20",
    tag: "Best for Nursing Mothers",
  },
  {
    rank: "04",
    name: "Lacrosse Ball Massage Set",
    price: "From $12",
    verdict: "Best recovery tool for tight postpartum muscles",
    description:
      "Targeted soft-tissue release using a lacrosse or massage ball is one of the most effective self-care tools for postnatal practitioners dealing with the shoulder and upper back tension that accumulates from feeding, carrying, and sleep positions. Rolling the thoracic spine, releasing the pectorals against a wall, and releasing the glutes in a figure-four position can meaningfully improve the mobility available for Pilates exercises. The dense rubber lacrosse ball provides more specific pressure than a foam roller, allowing targeted release of individual muscles rather than broad compression. A set of two allows bilateral hip and glute release simultaneously.",
    affiliateUrl: "https://www.amazon.com/s?k=lacrosse+ball+massage+set+2+pack&tag=pilatescollective-20",
    tag: "Best Recovery Tool",
  },
  {
    rank: "05",
    name: "CLMBR Postnatal Exercise Recovery Book",
    price: "From $18",
    verdict: "Best postnatal exercise reference",
    description:
      "A structured postnatal exercise guide written by a qualified women's health physiotherapist provides the progression logic and safety framework that generic fitness content lacks. The specific considerations for returning to exercise after both vaginal birth and caesarean section — with different timelines, different scar tissue management protocols, and different loading parameters — require more nuance than a standard beginner Pilates guide provides. Look for books authored by physiotherapists who specialise in pelvic health; the quality gap between clinical expertise and general fitness advice is significant in this area.",
    affiliateUrl: "https://www.amazon.com/s?k=postnatal+exercise+recovery+guide+physiotherapist&tag=pilatescollective-20",
    tag: "Best Reference Guide",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Postnatal Pilates: When to Start, What's Safe, How to Progress",
      "description": "A complete guide to returning to Pilates after birth — safe exercises, timelines, and equipment.",
      "url": "https://pilatescollectiveclub.com/blog/postnatal-pilates",
      "datePublished": "2026-06-26",
      "dateModified": "2026-06-26",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/roxana-popovici-Zp4APUiwEsM-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/postnatal-pilates" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Postnatal Pilates", "item": "https://pilatescollectiveclub.com/blog/postnatal-pilates" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "When can I start Pilates after giving birth?", "acceptedAnswer": { "@type": "Answer", "text": "After a vaginal birth with no complications, gentle diaphragmatic breathing, pelvic floor activation, and very light core reconnection exercises can begin within the first 1-2 weeks if they feel comfortable. More active floor Pilates is generally appropriate from 6-8 weeks after medical clearance. After a caesarean section, the timeline is longer — typically 8-12 weeks before beginning floor exercises, with scar tissue management beginning earlier under physiotherapist guidance." } },
        { "@type": "Question", "name": "Is reformer Pilates safe postnatally?", "acceptedAnswer": { "@type": "Answer", "text": "Reformer Pilates is safe postnatally when the instructor has postnatal training and can modify exercises appropriately. The reformer's spring resistance system actually makes some exercises more accessible postnatally than mat work, because spring assistance can reduce load rather than adding it. Most studios recommend waiting until 8-12 weeks postnatally before attending a reformer class, and informing the instructor of your postnatal status so modifications can be applied." } },
        { "@type": "Question", "name": "What Pilates exercises should I avoid after having a baby?", "acceptedAnswer": { "@type": "Answer", "text": "Avoid any exercise that causes leaking, heaviness, or pressure in the pelvic floor, or that creates coning or doming of the abdominal wall. Traditional crunches, sit-ups, double-leg lowering, and high-impact exercises should wait until pelvic floor and core function has been assessed and cleared by a women's health physiotherapist." } },
      ],
    },
  ],
};

export default function PostnatalPilatesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Health</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Postpartum Recovery</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Postnatal Pilates:<br /><span style={{ color: "#8b4a31" }}>When, What & How to Progress</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated June 2026 · 10 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Returning to Pilates after birth is not simply a matter of resuming where you left off. The postpartum body — regardless of birth type — has undergone significant structural, hormonal, and neurological changes that require a different approach to exercise for months after delivery. Pilates, when appropriately adapted, is one of the most effective tools for postpartum recovery. Applied without modification, it can slow recovery and cause lasting harm.
            </p>
            <div className="rounded-xl p-6 mb-4" style={{ backgroundColor: "#fff9f5", border: "1px solid rgba(197,168,130,0.3)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-2" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Medical note</p>
              <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Always obtain medical clearance from your midwife or GP before returning to exercise. A pelvic floor physiotherapist assessment is strongly recommended before returning to any structured exercise programme postnatally.</p>
            </div>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/roxana-popovici-Zp4APUiwEsM-unsplash.jpg" alt="Postnatal Pilates recovery guide" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>When to start: realistic timelines</h2>
              <div className="space-y-6">
                {[
                  { phase: "Weeks 1–6 (vaginal birth)", content: "Diaphragmatic breathing, pelvic floor reconnection, gentle heel slides, and short walks. No loaded exercise. This phase is about restoring the coordination between breath, pelvic floor, and deep abdominals — not building fitness." },
                  { phase: "Weeks 6–12 (after clearance)", content: "With medical clearance, gentle mat Pilates can begin: bird-dog, clam shells, modified side-lying exercises. Avoid double-leg work, crunches, and any exercise that causes pelvic floor symptoms. Inform any Pilates instructor of your postnatal status." },
                  { phase: "3–6 months postpartum", content: "Gradual return to fuller mat and reformer Pilates, guided by pelvic floor function rather than by a fixed timeline. Most practitioners can return to a standard class with minimal modifications by 3-4 months if recovery has progressed well." },
                  { phase: "After caesarean section", content: "Add 2-4 weeks to each of the above phases. Scar tissue management with a physiotherapist typically begins around 6-8 weeks, and loaded exercise is delayed until 10-12 weeks with clearance. Reformer Pilates may be accessible earlier than floor-based work that requires getting up and down repeatedly." },
                ].map((item) => (
                  <div key={item.phase} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-2" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{item.phase}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.content}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>The starting exercises</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The following exercises form the foundation of a postnatal Pilates programme and can be performed from as early as 1-2 weeks postpartum (vaginal birth) if they feel comfortable and cause no pelvic floor symptoms:
              </p>
              <div className="space-y-4">
                {[
                  { title: "360 breathing", text: "Lying or sitting, inhale to expand the ribcage in all directions. Exhale slowly, allowing the pelvic floor to gently lift and the deep abdominals to draw in. Repeat 10 times. This is the single most important exercise in the early postpartum period." },
                  { title: "Pelvic floor lifts", text: "Gently lift the pelvic floor (as if stopping the flow of urine), hold for 5 seconds, release fully. 10 repetitions. Do not grip the glutes or hold your breath. Quality matters far more than quantity." },
                  { title: "Heel slides", text: "Lying supine with knees bent, slowly slide one heel to extend the leg, breathing out as you slide. The lower back should remain in contact with the mat. Return and repeat on the other side. 10 each side." },
                  { title: "Supported bridge", text: "From supine with knees bent, exhale to lift the pelvis to a comfortable bridge height, hold for 2 breaths, lower slowly. Start with partial range if full extension creates pressure. 8-10 repetitions." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-1.5 rounded-full shrink-0 mt-1" style={{ backgroundColor: "#c5a882", minHeight: "20px" }} />
                    <div>
                      <p className="text-sm font-semibold mb-1" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{item.title}</p>
                      <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Recommended equipment</h2>
              <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
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
                  { q: "When can I start Pilates after giving birth?", a: "After a vaginal birth with no complications, gentle diaphragmatic breathing, pelvic floor activation, and very light core reconnection exercises can begin within the first 1-2 weeks if they feel comfortable. More active floor Pilates is generally appropriate from 6-8 weeks after medical clearance. After a caesarean section, the timeline is longer — typically 8-12 weeks before beginning floor exercises." },
                  { q: "Is reformer Pilates safe postnatally?", a: "Reformer Pilates is safe postnatally when the instructor has postnatal training and can modify exercises appropriately. The reformer's spring resistance system actually makes some exercises more accessible postnatally than mat work, because spring assistance can reduce load rather than adding it. Most studios recommend waiting until 8-12 weeks postnatally before attending a reformer class." },
                  { q: "What Pilates exercises should I avoid after having a baby?", a: "Avoid any exercise that causes leaking, heaviness, or pressure in the pelvic floor, or that creates coning or doming of the abdominal wall. Traditional crunches, sit-ups, double-leg lowering, and high-impact exercises should wait until pelvic floor and core function has been assessed and cleared by a women's health physiotherapist." },
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
                <ArticleCard title="Pilates and Pregnancy" excerpt="Safe Pilates practice through all trimesters — what changes, what stays, what to avoid." href="/blog/pilates-and-pregnancy" category="Health" readTime="8 min read" date="March 2026" imageUrl="/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg" />
                <ArticleCard title="Pilates for Diastasis Recti" excerpt="Which exercises help, which to avoid, and how to progress through abdominal separation recovery." href="/blog/pilates-for-diastasis-recti" category="Health" readTime="9 min read" date="June 2026" imageUrl="/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a postnatal Pilates studio" subtitle="Use our curated city guides to find studios with specialist postnatal classes." showSearch searchPlaceholder="Ask: postnatal Pilates classes in London..." />
      </main>
      <Footer />
    </>
  );
}
