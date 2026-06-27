import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Pilates for Diastasis Recti (2026): What Works, What to Avoid | Pilates Collective Club",
  description: "Pilates for diastasis recti — which exercises are safe, which to avoid, how to progress, and what equipment actually helps. Evidence-based guide for postpartum recovery.",
  keywords: ["pilates for diastasis recti", "diastasis recti pilates exercises", "safe pilates diastasis recti", "pilates postpartum diastasis recti", "diastasis recti exercise guide", "pilates ab separation recovery", "diastasis recti healing pilates", "reformer pilates diastasis recti"],
  openGraph: {
    title: "Pilates for Diastasis Recti: What Works & What to Avoid",
    description: "Safe Pilates exercises for diastasis recti — evidence-based guidance on recovery, progression, and what to avoid.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/pilates-for-diastasis-recti",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg", width: 1200, height: 630, alt: "Pilates for Diastasis Recti — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilates for Diastasis Recti: What Works & What to Avoid",
    description: "Safe Pilates exercises for diastasis recti — evidence-based guidance.",
    images: ["https://pilatescollectiveclub.com/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/pilates-for-diastasis-recti" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Leonisa Postpartum Belly Band",
    price: "From $38",
    verdict: "Best abdominal support for early recovery",
    description:
      "A firm but comfortable postpartum belly band provides external support for the linea alba during early diastasis recti recovery, reducing strain on the separation during standing, walking, and gentle exercises. The Leonisa band uses a wide panel design that distributes compression evenly across the abdominal wall without digging into the hips or rolling down during movement. It is worn under clothing during the day and removed for Pilates sessions where intentional core activation is the goal. Evidence supports abdominal binders as a short-term adjunct to reduce discomfort and improve function in the early postpartum period — not as a substitute for progressive rehabilitation.",
    affiliateUrl: "https://www.amazon.com/s?k=leonisa+postpartum+belly+band+support&tag=pilatescollective-20",
    tag: "Best Recovery Support",
  },
  {
    rank: "02",
    name: "Gaiam Essentials Thick Yoga Mat 10mm",
    price: "From $35",
    verdict: "Best mat for floor-based recovery work",
    description:
      "A thick, well-cushioned mat is particularly important for diastasis recti rehabilitation Pilates, where a significant proportion of exercises are performed in supine and prone positions and where excessive spinal extension from a thin mat can load the abdominal wall inappropriately. The Gaiam 10mm Essentials mat provides enough cushioning to keep the thoracic spine in a supported neutral position during lying exercises without the instability that comes from overly soft foam. The non-slip texture handles the seated and quadruped positions central to early rehabilitation, and the 68-inch length is adequate for most practitioners working through the full range of diastasis recti exercises.",
    affiliateUrl: "https://www.amazon.com/s?k=gaiam+essentials+thick+yoga+mat+10mm&tag=pilatescollective-20",
    tag: "Best Rehabilitation Mat",
  },
  {
    rank: "03",
    name: "Fit Simplify Resistance Loop Bands Set",
    price: "From $12",
    verdict: "Best resistance bands for DR rehab",
    description:
      "Light resistance loop bands are a core tool in diastasis recti Pilates rehabilitation, used for hip and glute exercises that load the core indirectly without creating the direct intra-abdominal pressure that worsens separation. The Fit Simplify set includes five resistance levels — from extra light to extra heavy — which allows progressive overload as the rehabilitation advances. The bands are fabric-backed rather than plain latex, reducing the rolling and digging that makes plain latex bands uncomfortable on bare skin during floor exercises. All five levels are relevant to a typical DR rehabilitation programme: the lightest for early glute work and the heavier levels as strength returns over months.",
    affiliateUrl: "https://www.amazon.com/s?k=fit+simplify+resistance+loop+bands+set+5&tag=pilatescollective-20",
    tag: "Best for Progressive Rehab",
  },
  {
    rank: "04",
    name: "Trideer Pilates Ball 9 Inch Overball",
    price: "From $14",
    verdict: "Best prop for breathing exercises",
    description:
      "A small Pilates overball is one of the most useful props for diastasis recti rehabilitation. Placed between the knees in supine exercises, it encourages medial hip activation which creates indirect transverse abdominis engagement without the direct loading that crunches and sit-ups generate. Placed against the wall in standing exercises, it provides tactile feedback for neutral spine positioning. The 9-inch size is appropriate for most practitioners' hip widths and provides enough resistance to be useful without requiring significant force production. Trideer's overball is reliably firm — some budget alternatives deflate quickly — and available in a range of muted colours appropriate for home studio use.",
    affiliateUrl: "https://www.amazon.com/s?k=trideer+pilates+ball+9+inch+overball&tag=pilatescollective-20",
    tag: "Best Rehabilitation Prop",
  },
  {
    rank: "05",
    name: "Mutu System Diastasis Recti Program Book",
    price: "From $22",
    verdict: "Best structured recovery guide",
    description:
      "The Mutu System is among the most evidence-cited diastasis recti rehabilitation programmes available, developed by a UK physiotherapist and reviewed by pelvic floor specialists. The book format provides the foundational framework for a self-directed rehabilitation programme, covering the assessment of separation severity, the progression logic from early recovery through return to full activity, and the specific exercise contraindications most rehabilitation guides omit. While a one-to-one physiotherapist assessment remains the gold standard for diastasis recti recovery, the Mutu System provides a more rigorous and evidence-grounded starting point than the generic postpartum exercise content that dominates social media.",
    affiliateUrl: "https://www.amazon.com/s?k=mutu+system+diastasis+recti+book&tag=pilatescollective-20",
    tag: "Best Recovery Programme",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Pilates for Diastasis Recti: What Works, What to Avoid",
      "description": "Safe Pilates exercises for diastasis recti — evidence-based guidance on recovery, progression, and what to avoid.",
      "url": "https://pilatescollectiveclub.com/blog/pilates-for-diastasis-recti",
      "datePublished": "2026-06-26",
      "dateModified": "2026-06-26",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/pilates-for-diastasis-recti" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Pilates for Diastasis Recti", "item": "https://pilatescollectiveclub.com/blog/pilates-for-diastasis-recti" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is Pilates good for diastasis recti?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, when appropriately modified. Pilates emphasises deep core activation, breath coordination, and controlled movement — all central to diastasis recti rehabilitation. The key is working with a qualified instructor who understands abdominal separation and can modify standard Pilates exercises to avoid loading the linea alba inappropriately, particularly in the early recovery phase." } },
        { "@type": "Question", "name": "Which Pilates exercises should I avoid with diastasis recti?", "acceptedAnswer": { "@type": "Answer", "text": "Avoid exercises that cause coning or doming of the abdominal wall — the visible ridge that appears along the midline when the separation is being loaded. Standard crunches, double-leg lowering, the Pilates Hundred in the traditional position, and any exercise that creates high intra-abdominal pressure should be avoided until the separation has closed sufficiently and core function has returned. A pelvic floor physiotherapist assessment is the most reliable way to identify your specific safe range." } },
        { "@type": "Question", "name": "How long does it take for diastasis recti to heal with Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "Recovery timelines vary significantly by severity of separation, postnatal history, and consistency of rehabilitation. A mild separation (1-2 finger widths) with consistent targeted rehabilitation can show meaningful improvement within 8-16 weeks. Moderate to severe separations typically require 6-12 months of progressive rehabilitation. The quality of tissue tension at the linea alba matters as much as the gap measurement — functional recovery often precedes full closure." } },
      ],
    },
  ],
};

export default function PilatesForDiastasisRectiPage() {
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
              Pilates for<br /><span style={{ color: "#8b4a31" }}>Diastasis Recti</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated June 2026 · 9 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Diastasis recti — the separation of the rectus abdominis muscles at the linea alba — affects up to 60% of women at some point postpartum. Pilates, when correctly adapted, is one of the most effective rehabilitation modalities available. When incorrectly applied, it can delay recovery and worsen the separation. The distinction is in the details: which exercises, in what sequence, with what breath pattern, at what stage of recovery.
            </p>
            <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: "#fff9f5", border: "1px solid rgba(197,168,130,0.3)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-2" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Medical note</p>
              <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>This guide is for general educational purposes. Diastasis recti severity varies significantly between individuals, and a pelvic floor physiotherapist assessment is the most reliable starting point for a personalised recovery programme.</p>
            </div>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg" alt="Pilates exercises for diastasis recti recovery" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What is diastasis recti?</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Diastasis recti (DR) is the widening of the gap between the two sides of the rectus abdominis — the linea alba. It occurs when the connective tissue is stretched beyond its capacity to maintain tension, most commonly during pregnancy. A gap wider than 2 finger widths (approximately 2.5cm) at the level of the navel, combined with poor tissue tension at that gap, is the clinical definition most physiotherapists use.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The measurement alone is not the only meaningful factor — a 3-finger gap with good tissue tension (where the connective tissue still generates force) may be less functionally limiting than a 2-finger gap with poor tension. This is why self-assessment has limits and a professional assessment is valuable.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Safe Pilates exercises for diastasis recti</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The following exercises are generally considered safe across most stages of diastasis recti recovery, provided they do not cause coning or doming of the abdominal wall:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { title: "Diaphragmatic breathing", text: "360-degree breathing that expands the ribcage laterally and engages the diaphragm in coordination with the pelvic floor is the foundation of every rehabilitation programme. This is not passive — it is an active relearning of how the deep core pressurisation system functions." },
                  { title: "Heel slides", text: "Lying supine with knees bent, slowly sliding one heel along the floor to extend the leg without allowing the lumbar spine to arch or the abdominal wall to bulge. This creates low-load transverse abdominis engagement without pressure spikes." },
                  { title: "Clam shells", text: "Lying on your side with hips stacked, rotating the top knee open while keeping the pelvis still. Targets the hip abductors and glutes indirectly, which stabilise the pelvis and reduce load on the linea alba during standing activities." },
                  { title: "Bird-dog", text: "From quadruped (hands and knees), extending one arm and the opposite leg simultaneously while maintaining a neutral spine. This exercise builds rotational stability without direct abdominal loading, and is central to most advanced diastasis rehabilitation programmes." },
                  { title: "Wall roll-downs", text: "Standing with the back against a wall, slowly rolling the spine down vertebra by vertebra and returning. The wall provides feedback on spinal position and limits the range to what the core can control without creating pressure spikes." },
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
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Exercises to avoid</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The following exercises create high intra-abdominal pressure or directly load the linea alba and should be avoided until the separation has closed and tissue tension has returned:
              </p>
              <div className="rounded-xl p-6" style={{ backgroundColor: "#fff9f5", border: "1px solid rgba(197,168,130,0.3)" }}>
                <ul className="space-y-2">
                  {["Traditional crunches and sit-ups", "The Pilates Hundred (unmodified)", "Double-leg lowering from the floor", "Oblique crunches and twisting sit-up variations", "Heavy lifting without breath management", "Plank variations held for duration (initially)"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span style={{ color: "#8b4a31" }}>×</span>
                      <span className="text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item}</span>
                    </li>
                  ))}
                </ul>
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
                  { q: "Is Pilates good for diastasis recti?", a: "Yes, when appropriately modified. Pilates emphasises deep core activation, breath coordination, and controlled movement — all central to diastasis recti rehabilitation. The key is working with a qualified instructor who understands abdominal separation and can modify standard Pilates exercises to avoid loading the linea alba inappropriately, particularly in the early recovery phase." },
                  { q: "Which Pilates exercises should I avoid with diastasis recti?", a: "Avoid exercises that cause coning or doming of the abdominal wall — the visible ridge that appears along the midline when the separation is being loaded. Standard crunches, double-leg lowering, the Pilates Hundred in the traditional position, and any exercise that creates high intra-abdominal pressure should be avoided until the separation has closed sufficiently. A pelvic floor physiotherapist assessment is the most reliable way to identify your specific safe range." },
                  { q: "How long does it take for diastasis recti to heal with Pilates?", a: "Recovery timelines vary significantly by severity of separation, postnatal history, and consistency of rehabilitation. A mild separation with consistent targeted rehabilitation can show meaningful improvement within 8-16 weeks. Moderate to severe separations typically require 6-12 months of progressive rehabilitation. The quality of tissue tension at the linea alba matters as much as the gap measurement — functional recovery often precedes full closure." },
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
                <ArticleCard title="Pilates for Pelvic Floor" excerpt="How Pilates supports pelvic floor function — exercises, cues, and what the research says." href="/blog/pilates-for-pelvic-floor" category="Health" readTime="7 min read" date="April 2026" imageUrl="/pictures/roxana-popovici-5JQxj-zc5ng-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: Pilates studios with postnatal classes in London..." />
      </main>
      <Footer />
    </>
  );
}
