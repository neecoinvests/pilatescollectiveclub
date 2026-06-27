import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Pilates for Cyclists (2026): How It Improves Power, Posture & Recovery | Pilates Collective Club",
  description: "How Pilates benefits cyclists — core stability on the bike, hip flexor and IT band relief, spinal extension for aggressive positions, and the best exercises to add to your training.",
  keywords: ["pilates for cyclists", "pilates cycling benefits", "pilates for road cycling", "pilates for mountain biking", "pilates hip flexor cyclists", "pilates core stability cycling", "cycling pilates exercises", "pilates for bike fit"],
  openGraph: {
    title: "Pilates for Cyclists: Power, Posture & Recovery",
    description: "How Pilates improves core stability, posture, and recovery for road and mountain bike cyclists.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/pilates-for-cyclists",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/roxana-popovici-5JQxj-zc5ng-unsplash.jpg", width: 1200, height: 630, alt: "Pilates for Cyclists — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilates for Cyclists: Power, Posture & Recovery",
    description: "How Pilates improves core stability and recovery for cyclists.",
    images: ["https://pilatescollectiveclub.com/pictures/roxana-popovici-5JQxj-zc5ng-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/pilates-for-cyclists" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "TriggerPoint GRID Foam Roller",
    price: "From $35",
    verdict: "Best recovery tool for cyclists",
    description:
      "Cycling creates predictable tightness patterns: the hip flexors shorten from sustained flexion, the IT band tightens from repetitive pedalling, the thoracic spine stiffens from the sustained flexed riding position, and the glutes deactivate from hours of seated loading. The TriggerPoint GRID Foam Roller addresses all four of these patterns efficiently in the 10-15 minutes before a Pilates session or after a ride. The multi-density surface provides more targeted release than flat foam rollers, particularly for the thoracic spine and IT band — two areas where specific pressure rather than broad compression is needed. Used consistently, it maintains the range of motion that Pilates work develops across a full training week.",
    affiliateUrl: "https://www.amazon.com/s?k=triggerpoint+grid+foam+roller+black&tag=pilatescollective-20",
    tag: "Best Recovery Roller",
  },
  {
    rank: "02",
    name: "Fit Simplify Resistance Loop Bands Set",
    price: "From $12",
    verdict: "Best for glute activation before rides",
    description:
      "Cyclists chronically underactivate their gluteus medius — the hip abductor responsible for pelvis stability in the single-leg stance phase of the pedal stroke. Weak gluteus medius activation leads to pelvic drop, knee tracking issues, and lower back pain on longer rides. A 10-minute resistance band activation sequence before cycling — lateral band walks, clam shells, single-leg bridges with band resistance — is one of the most evidence-supported pre-ride warm-ups available. The Fit Simplify fabric band set provides the progressive resistance needed to take a cyclist from minimal activation through challenging hip stability work as glute strength improves over weeks of consistent practice.",
    affiliateUrl: "https://www.amazon.com/s?k=fit+simplify+resistance+loop+bands+set&tag=pilatescollective-20",
    tag: "Best Glute Activation",
  },
  {
    rank: "03",
    name: "ProSource Stretch Strap with Loops",
    price: "From $14",
    verdict: "Best for hip flexor and hamstring release",
    description:
      "The hip flexor shortening that accumulates over hours of cycling requires sustained static stretching to reverse — a 15-second stretch does not meaningfully lengthen chronically shortened tissue. A looped stretch strap allows 60-90 second holds of the hip flexor, hamstring, and calf — the exact muscles that accumulate tightness through cycling — in supine positions that do not require balance or active muscle engagement. This makes the stretch more effective and more comfortable than standing or kneeling hip flexor stretches after a fatiguing ride. For cyclists who follow rides with Pilates sessions, the strap provides the bridge between the two that prevents Pilates exercises from being limited by post-ride stiffness.",
    affiliateUrl: "https://www.amazon.com/s?k=prosource+stretch+strap+with+loops&tag=pilatescollective-20",
    tag: "Best for Hip Flexors",
  },
  {
    rank: "04",
    name: "Manduka PRO Yoga Mat 6mm",
    price: "From $120",
    verdict: "Best mat for post-ride Pilates",
    description:
      "Cyclists doing post-ride Pilates need a mat that performs when they are sweating. The Manduka PRO's closed-cell surface does not absorb moisture, maintaining grip through an entire post-cycling Pilates session without the slipping that occurs on cheaper mats once sweat saturates the open-cell foam. The 6mm thickness provides meaningful cushioning for hip-bone-prominent side-lying exercises and kneeling positions that are uncomfortable on thinner mats after long time in the saddle has compressed the hip area. The mat's length (180cm) accommodates the longer leg extension exercises that are particularly relevant for cyclists working on hip mobility.",
    affiliateUrl: "https://www.amazon.com/s?k=manduka+pro+yoga+mat+6mm&tag=pilatescollective-20",
    tag: "Best Post-Ride Mat",
  },
  {
    rank: "05",
    name: "Lacrosse Ball Set for Massage",
    price: "From $12",
    verdict: "Best for targeted soft tissue release",
    description:
      "A lacrosse or massage ball is more effective than a foam roller for the targeted release cyclists need most: the piriformis (deep hip rotator, compressed during saddle time), the pectoral muscles and anterior shoulder (tightened by the forward lean of the riding position), and the plantar fascia (loaded by foot-intensive pedalling). Rolling the piriformis in a figure-four seated position and the pectorals against a wall before a Pilates spinal extension or shoulder mobility session produces better range of motion outcomes than foam rolling alone. A set of two balls allows bilateral hip release simultaneously, which is practical for time-constrained cyclists.",
    affiliateUrl: "https://www.amazon.com/s?k=lacrosse+ball+massage+set+2+pack&tag=pilatescollectiveclub-20",
    tag: "Best Targeted Release",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Pilates for Cyclists: How It Improves Power, Posture & Recovery",
      "description": "How Pilates improves core stability, posture, and recovery for road and mountain bike cyclists.",
      "url": "https://pilatescollectiveclub.com/blog/pilates-for-cyclists",
      "datePublished": "2026-06-27",
      "dateModified": "2026-06-27",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/roxana-popovici-5JQxj-zc5ng-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/pilates-for-cyclists" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Pilates for Cyclists", "item": "https://pilatescollectiveclub.com/blog/pilates-for-cyclists" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is Pilates good for cyclists?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, significantly. Cycling creates specific muscular imbalances — shortened hip flexors, weak glutes, tight thoracic spine, and underactive scapular stabilisers — that Pilates directly addresses. Core stability improvements from Pilates translate to a more stable pelvis on the bike, better power transfer through the pedal stroke, and reduced lower back pain on longer rides." } },
        { "@type": "Question", "name": "How often should a cyclist do Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "One to two sessions per week is the effective minimum for cyclists seeking meaningful benefit. One full Pilates session (45-60 minutes) per week combined with 10-15 minutes of targeted activation work before rides produces measurable improvements in core stability and hip mobility within 6-8 weeks of consistent practice." } },
        { "@type": "Question", "name": "What Pilates exercises are best for cyclists?", "acceptedAnswer": { "@type": "Answer", "text": "The most relevant Pilates exercises for cyclists are those that address the specific imbalances cycling creates: hip flexor stretching and release, glute and hip abductor activation (clam shells, single-leg bridges), thoracic extension (swan, spine twist), scapular stabilisation (serratus anterior exercises), and lateral core stability (side plank variations). These exercises directly counteract the postural and muscular effects of sustained cycling position." } },
      ],
    },
  ],
};

export default function PilatesForCyclistsPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Sport</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Pilates for Cyclists:<br /><span style={{ color: "#8b4a31" }}>Power, Posture & Recovery</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated June 2026 · 8 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Cycling is one of the most one-dimensional movement patterns in sport. Hours in the same position create predictable muscular imbalances that limit performance and drive injury. Pilates, applied specifically to the imbalances cycling creates, addresses them more directly than general cross-training. Professional cycling teams have integrated Pilates into their training programmes for over a decade — the evidence base is solid and the application is specific.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/roxana-popovici-5JQxj-zc5ng-unsplash.jpg" alt="Pilates for cyclists — core stability and recovery" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What cycling does to your body</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Sustained cycling in the same position creates five specific physical adaptations that reduce performance and increase injury risk if left unaddressed:
              </p>
              <div className="space-y-4">
                {[
                  { issue: "Shortened hip flexors", detail: "Hours of sustained hip flexion shorten the psoas and iliacus. Shortened hip flexors limit stride length in running, cause anterior pelvic tilt on the bike, and are the most common contributor to lower back pain in cyclists." },
                  { issue: "Inhibited glutes", detail: "The seated position and repetitive hip extension of pedalling gradually deactivates the gluteus maximus and medius. Weak glutes mean less power through the pedal stroke and less pelvic stability, which increases knee and lower back loading." },
                  { issue: "Thoracic kyphosis", detail: "Sustained forward lean stiffens the mid-back into a rounded position that limits breathing capacity, compresses cervical structures, and creates shoulder and neck pain on longer rides." },
                  { issue: "Weak scapular stabilisers", detail: "Supporting upper body weight on handlebars without adequate scapular stability creates trapezius and levator scapulae overuse — the source of the chronic neck-shoulder tension cyclists experience." },
                  { issue: "IT band tightness", detail: "Repetitive knee flexion-extension in pedalling progressively tightens the iliotibial band, leading to lateral knee pain — one of the most common cycling overuse injuries." },
                ].map((item) => (
                  <div key={item.issue} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-2" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{item.issue}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>How Pilates addresses each of these</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Pilates is not generic cross-training for cyclists — it directly targets the imbalances cycling creates:
              </p>
              <div className="space-y-4">
                {[
                  { fix: "Hip flexor lengthening", text: "Lunging hip flexor stretches, swan prep, and prone hip extension exercises in Pilates restore hip flexor length and reduce anterior pelvic tilt — directly improving pedalling efficiency and back comfort." },
                  { fix: "Glute activation", text: "Single-leg bridges, clam shells, and reformer footwork with external rotation emphasis re-activate the gluteus maximus and medius in the pattern needed for the pedal stroke. Studies show measurable improvement in glute activation on the bike within 6-8 weeks of consistent Pilates practice." },
                  { fix: "Thoracic extension", text: "Swan, spine twist, and thoracic extension over a foam roller or Pilates arc barrel restore the spinal extension range that cycling progressively removes. Improved thoracic mobility directly reduces neck and shoulder pain on the bike." },
                  { fix: "Scapular stability", text: "Serratus anterior exercises, rowing patterns on the reformer, and prone back extension builds the foundation strength needed to support body weight on handlebars without overloading the neck." },
                ].map((item) => (
                  <div key={item.fix} className="flex gap-4">
                    <div className="w-1.5 rounded-full shrink-0 mt-1" style={{ backgroundColor: "#c5a882", minHeight: "20px" }} />
                    <div>
                      <p className="text-sm font-semibold mb-1" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{item.fix}</p>
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
                  { q: "Is Pilates good for cyclists?", a: "Yes, significantly. Cycling creates specific muscular imbalances — shortened hip flexors, weak glutes, tight thoracic spine, and underactive scapular stabilisers — that Pilates directly addresses. Core stability improvements from Pilates translate to a more stable pelvis on the bike, better power transfer, and reduced lower back pain on longer rides." },
                  { q: "How often should a cyclist do Pilates?", a: "One to two sessions per week is the effective minimum for cyclists seeking meaningful benefit. One full Pilates session (45-60 minutes) per week combined with 10-15 minutes of targeted activation work before rides produces measurable improvements in core stability and hip mobility within 6-8 weeks of consistent practice." },
                  { q: "What Pilates exercises are best for cyclists?", a: "The most relevant exercises address the specific imbalances cycling creates: hip flexor stretching and release, glute activation (clam shells, single-leg bridges), thoracic extension (swan, spine twist), scapular stabilisation, and lateral core stability. These directly counteract the postural and muscular effects of sustained cycling position." },
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
                <ArticleCard title="Pilates for Runners" excerpt="Why runners benefit from Pilates — the specific muscles it targets and how to programme it alongside training." href="/blog/pilates-for-runners" category="Health" readTime="8 min read" date="March 2026" imageUrl="/pictures/roxana-popovici-5JQxj-zc5ng-unsplash.jpg" />
                <ArticleCard title="Pilates Before or After Cardio?" excerpt="The evidence-based answer on sequencing Pilates with your cardio training." href="/blog/pilates-before-or-after-cardio" category="Guide" readTime="6 min read" date="June 2026" imageUrl="/pictures/roxana-popovici-cZ0WYsBFHhs-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best Pilates studios for athletes in London..." />
      </main>
      <Footer />
    </>
  );
}
