import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Pilates Before or After Cardio? The Right Order Explained (2026) | Pilates Collective Club",
  description: "Should you do Pilates before or after cardio? The evidence-based answer for runners, cyclists, and gym-goers — plus what to do when you train both on the same day.",
  keywords: ["pilates before or after cardio", "should i do pilates before or after running", "pilates and cardio same day", "pilates before or after gym", "pilates before or after workout", "pilates and running order", "pilates before cardio", "pilates after cardio"],
  openGraph: {
    title: "Pilates Before or After Cardio? The Right Order Explained",
    description: "The evidence-based answer on whether to do Pilates before or after cardio — for runners, cyclists, and gym-goers.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/pilates-before-or-after-cardio",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/roxana-popovici-cZ0WYsBFHhs-unsplash.jpg", width: 1200, height: 630, alt: "Pilates Before or After Cardio — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilates Before or After Cardio? The Answer.",
    description: "The evidence-based answer on Pilates and cardio sequencing.",
    images: ["https://pilatescollectiveclub.com/pictures/roxana-popovici-cZ0WYsBFHhs-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/pilates-before-or-after-cardio" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "TriggerPoint GRID Foam Roller",
    price: "From $35",
    verdict: "Best recovery tool between Pilates and cardio",
    description:
      "The TriggerPoint GRID is the most commonly used foam roller for pre-run and post-Pilates tissue preparation. The multi-density surface mimics the pressure of a massage therapist's fingers more accurately than flat foam rollers, releasing the iliotibial band, hip flexors, and thoracic spine before cardio without the deep tissue fatigue that aggressive manual massage creates. Used for 5-10 minutes between a Pilates session and a run, it maintains the mobility gains from the Pilates work while preparing the legs for repetitive impact. The hollow core construction makes it more durable than solid foam alternatives — it does not compress and lose density with regular use.",
    affiliateUrl: "https://www.amazon.com/s?k=triggerpoint+grid+foam+roller&tag=pilatescollective-20",
    tag: "Best Between Sessions",
  },
  {
    rank: "02",
    name: "Theraband Resistance Band Set",
    price: "From $18",
    verdict: "Best for Pilates activation before cardio",
    description:
      "A short glute and hip activation sequence using light resistance bands before cardio — typically 5-10 minutes of clam shells, lateral band walks, and glute bridges — is one of the most evidence-supported warm-up protocols for runners and cyclists. This activation sequence is identical to Pilates hip work, meaning a brief Pilates mini-session before cardio serves a functional warm-up role rather than competing with it. Theraband's colour-coded flat band set provides the light resistance appropriate for activation work — light enough to perform with full neuromuscular control, heavy enough to create the proprioceptive feedback that switches on underactive glutes before impact loading begins.",
    affiliateUrl: "https://www.amazon.com/s?k=theraband+resistance+band+set+light+medium&tag=pilatescollective-20",
    tag: "Best Activation Tool",
  },
  {
    rank: "03",
    name: "Stretch Strap with Loops",
    price: "From $14",
    verdict: "Best flexibility tool post-cardio into Pilates",
    description:
      "A stretch strap with multiple loops allows longer-hold static stretching of the hamstrings, hip flexors, and calves in supine positions — the type of mobility work that is most effective post-cardio and most compatible with the Pilates movement vocabulary. Holding a hamstring stretch with a strap for 60-90 seconds post-run, then moving into a Pilates mat session, creates the optimal sequence for flexibility gains without the performance decrement that pre-exercise static stretching causes. The multiple loops allow precise adjustment of stretch intensity, which matters when fatigued muscles after cardio have less range of motion than during a rested session.",
    affiliateUrl: "https://www.amazon.com/s?k=stretch+strap+yoga+pilates+loops+flexibility&tag=pilatescollective-20",
    tag: "Best for Post-Cardio Mobility",
  },
  {
    rank: "04",
    name: "Manduka PRO Yoga Mat 6mm",
    price: "From $120",
    verdict: "Best mat for combined training days",
    description:
      "On days combining cardio and Pilates, a high-quality non-slip mat eliminates the practical friction of post-run sweat degrading grip during Pilates floor work. The Manduka PRO's closed-cell surface does not absorb moisture — the mat wipes clean between a sweaty run and a Pilates session without becoming slippery. The 6mm cushioning protects joints that have already absorbed impact loading from running, reducing the cumulative fatigue that kneeling and prone exercises create on a standard thin mat after a distance run. The Manduka PRO's longevity — it is guaranteed for life — makes it the right investment for practitioners who train multiple modalities daily.",
    affiliateUrl: "https://www.amazon.com/s?k=manduka+pro+yoga+mat+6mm+non+slip&tag=pilatescollective-20",
    tag: "Best Combined Training Mat",
  },
  {
    rank: "05",
    name: "Nathan Sports Transition Area Bag",
    price: "From $35",
    verdict: "Best bag for gym-to-studio transitions",
    description:
      "For practitioners who run to the gym or cycle to the studio and then attend Pilates, a purpose-built transition bag with separate wet and dry compartments keeps post-cardio kit away from Pilates clothing. The Nathan Sports Transition bag, designed for triathlon transitions, handles this dual-use case better than standard gym bags: the wet compartment seals completely, the size is appropriate for both a cycling or running kit and a Pilates outfit, and the carry options include backpack and shoulder modes for different commute configurations. Practical rather than aesthetic, but genuinely functional for multi-sport practitioners.",
    affiliateUrl: "https://www.amazon.com/s?k=nathan+sports+transition+bag+gym+swim&tag=pilatescollective-20",
    tag: "Best for Multi-Sport",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Pilates Before or After Cardio? The Right Order Explained",
      "description": "The evidence-based answer on whether to do Pilates before or after cardio — for runners, cyclists, and gym-goers.",
      "url": "https://pilatescollectiveclub.com/blog/pilates-before-or-after-cardio",
      "datePublished": "2026-06-27",
      "dateModified": "2026-06-27",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/roxana-popovici-cZ0WYsBFHhs-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/pilates-before-or-after-cardio" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Pilates Before or After Cardio?", "item": "https://pilatescollectiveclub.com/blog/pilates-before-or-after-cardio" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Should I do Pilates before or after cardio?", "acceptedAnswer": { "@type": "Answer", "text": "For most goals, Pilates after cardio is the better sequence. Running or cycling first, then Pilates, means your cardio performance is not compromised by Pilates-induced muscle fatigue, and the Pilates session serves as an active recovery and mobility session for muscles that have been loaded by the cardio work. The exception is when you want to use a short Pilates activation sequence as a warm-up before running — 10 minutes of hip and glute activation before a run is well-supported by evidence and is best done before cardio." } },
        { "@type": "Question", "name": "Can you do Pilates and running on the same day?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Combining Pilates and running on the same day is a common and effective training approach for runners. The mobility work and core strengthening in Pilates directly complements the repetitive loading of running. The optimal sequence is cardio first, then Pilates — unless you are doing a short Pilates activation warm-up (10-15 minutes of hip and glute work) before the run." } },
        { "@type": "Question", "name": "Does Pilates count as cardio?", "acceptedAnswer": { "@type": "Answer", "text": "Standard Pilates does not meet the intensity threshold for cardiovascular training — it does not sustainably elevate heart rate into the aerobic training zone for the duration needed for cardiorespiratory adaptation. Lagree and Megaformer classes, which use continuous resistance with minimal rest, do approach cardiovascular training intensity. For cardiovascular fitness, Pilates should be combined with dedicated cardio training rather than substituted for it." } },
      ],
    },
  ],
};

export default function PilatesBeforeOrAfterCardioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Training</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Pilates Before or<br /><span style={{ color: "#8b4a31" }}>After Cardio?</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated June 2026 · 6 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              The short answer: Pilates after cardio, for most people and most goals. But the full answer depends on what you want from each session, and there is one meaningful exception. Here is the evidence-based case for each approach.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/roxana-popovici-cZ0WYsBFHhs-unsplash.jpg" alt="Pilates before or after cardio — the right order" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>The case for Pilates after cardio</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Doing cardio first preserves your best physical and neuromuscular state for the activity that benefits most from it — the run, the cycle, the swim. Pilates after cardio then serves two functions simultaneously: it completes the session with mobility and core work, and it provides active recovery for muscles loaded by the cardio work.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Your run or cycle is not compromised", text: "Pilates-induced core and hip fatigue before a run increases injury risk and reduces performance. Running with a fatigued core is biomechanically destabilising, particularly in the late miles when form degrades." },
                  { title: "Post-cardio mobility is most effective", text: "Muscles are warm and pliable after cardio, making the hip flexor, hamstring, and thoracic mobility work in Pilates more effective than when performed cold. Range of motion gains from stretching are greater on warm tissue." },
                  { title: "Pilates becomes active recovery", text: "The controlled, low-impact movement of Pilates promotes circulation and tissue recovery after cardio loading without adding significant fatigue. This is the principle behind post-run yoga and stretching sequences used by elite runners." },
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
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>The one case for Pilates before cardio</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                A short Pilates activation sequence — 10-15 minutes of glute activation, hip mobility, and core engagement — before running is well-supported by evidence as a warm-up protocol. This is not a full Pilates class; it is a targeted sequence designed to switch on underactive glutes and hip stabilisers before impact loading begins.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Research consistently shows that runners with strong glute activation have better running economy, lower injury rates, and reduced knee and IT band pain. A 10-minute Pilates-style activation before a run — clam shells, single-leg bridges, lateral band walks — improves the neuromuscular pattern quality of the run without creating the fatigue that a full Pilates class would.
              </p>
              <div className="rounded-xl p-6" style={{ backgroundColor: "#fff9f5", border: "1px solid rgba(197,168,130,0.3)" }}>
                <p className="text-sm font-semibold mb-2" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>The rule of thumb</p>
                <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Short Pilates activation (10-15 min) → fine before cardio. Full Pilates class (45-60 min) → always after cardio.</p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Recommended tools for combined training days</h2>
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
                  { q: "Should I do Pilates before or after cardio?", a: "For most goals, Pilates after cardio is the better sequence. Running or cycling first means your cardio performance is not compromised by Pilates-induced muscle fatigue, and the Pilates session serves as active recovery and mobility work. The exception is a short Pilates activation warm-up (10-15 minutes of hip and glute work) before a run, which is well-supported by evidence." },
                  { q: "Can you do Pilates and running on the same day?", a: "Yes. Combining Pilates and running on the same day is a common and effective training approach for runners. The mobility work and core strengthening in Pilates directly complements the repetitive loading of running. The optimal sequence is cardio first, then Pilates — unless doing a short activation warm-up before the run." },
                  { q: "Does Pilates count as cardio?", a: "Standard Pilates does not meet the intensity threshold for cardiovascular training. It does not sustainably elevate heart rate into the aerobic training zone for the duration needed for cardiorespiratory adaptation. Lagree and Megaformer classes do approach cardiovascular training intensity. For cardiovascular fitness, Pilates should be combined with dedicated cardio rather than substituted for it." },
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
                <ArticleCard title="Pilates for Runners" excerpt="Why runners benefit from Pilates — the specific muscles it targets and how to programme it alongside running training." href="/blog/pilates-for-runners" category="Health" readTime="8 min read" date="March 2026" imageUrl="/pictures/roxana-popovici-5JQxj-zc5ng-unsplash.jpg" />
                <ArticleCard title="Pilates for Athletes" excerpt="How professional and amateur athletes use Pilates for injury prevention, recovery, and performance." href="/blog/pilates-for-athletes" category="Health" readTime="8 min read" date="April 2026" imageUrl="/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best Pilates studios for runners in New York..." />
      </main>
      <Footer />
    </>
  );
}
