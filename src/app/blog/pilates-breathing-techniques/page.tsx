import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Pilates Breathing Techniques (2026): Lateral Breathing Explained",
  description: "How to breathe in Pilates: lateral ribcage breathing, why it differs from belly breathing, the exhale-on-effort rule, and the mistakes that stall progress.",
  keywords: ["pilates breathing", "pilates breathing techniques", "lateral breathing pilates", "how to breathe in pilates", "pilates breathing exercises", "intercostal breathing", "pilates breath pattern", "pilates breathing for beginners", "diaphragmatic vs lateral breathing", "pilates breathing 2026"],
  openGraph: {
    title: "Pilates Breathing Techniques (2026): Lateral Breathing Explained",
    description: "Why Pilates breathes into the ribs rather than the belly — and how to learn the pattern properly.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/pilates-breathing-techniques",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/roxana-popovici-Zp4APUiwEsM-unsplash.jpg", width: 1200, height: 630, alt: "Pilates Breathing Techniques — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilates Breathing Techniques: Lateral Breathing Explained",
    description: "The ribcage breathing pattern that underpins the whole method, and how to actually learn it.",
    images: ["https://pilatescollectiveclub.com/pictures/roxana-popovici-Zp4APUiwEsM-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/pilates-breathing-techniques" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Pilates Breathing Techniques (2026): Lateral Breathing Explained",
      "description": "A guide to breathing in Pilates — lateral ribcage breathing, how it differs from diaphragmatic belly breathing, breath patterns for key exercises, and common faults.",
      "url": "https://pilatescollectiveclub.com/blog/pilates-breathing-techniques",
      "datePublished": "2026-09-09",
      "dateModified": "2026-09-09",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/roxana-popovici-Zp4APUiwEsM-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/pilates-breathing-techniques" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Pilates Breathing Techniques", "item": "https://pilatescollectiveclub.com/blog/pilates-breathing-techniques" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is lateral breathing in Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "Lateral breathing — also called intercostal or ribcage breathing — directs the inhale sideways and backwards into the lower ribs rather than forwards into the abdomen. The ribs widen laterally like a bellows while the abdominal wall stays gently drawn in. The diaphragm still descends and does the same work it always does; what changes is where the expansion is allowed to show. This lets you maintain abdominal engagement continuously while still breathing fully, which is why the method uses it." } },
        { "@type": "Question", "name": "Do you breathe in through the nose or mouth in Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "The convention is to inhale through the nose and exhale through the mouth, and it is a practical convention rather than a rule. Nasal inhalation filters and slows the breath and encourages a fuller lateral expansion. Exhaling through the mouth — often through slightly pursed lips, sometimes with an audible sound — encourages a longer, more complete exhale, which is what recruits the deep abdominals. If a blocked nose makes nasal breathing impractical, mouth breathing throughout is fine and will not undermine the exercise." } },
        { "@type": "Question", "name": "Why do I get dizzy or lightheaded during Pilates breathing?", "acceptedAnswer": { "@type": "Answer", "text": "Almost always over-breathing — inhaling harder and more often than needed while concentrating on the pattern, which lowers carbon dioxide levels and produces lightheadedness. The fix is to make the exhale longer than the inhale and let the breath stay quiet rather than forceful. Breath-holding, which is the other common cause, produces the same sensation on release. If lightheadedness persists once your breathing has settled, stop the session and get it checked rather than pushing through it." } },
        { "@type": "Question", "name": "When should I inhale and exhale in Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "The general rule in contemporary Pilates is to exhale on the effort — the flexion, the lift, the moment of greatest abdominal demand — and inhale on the return or preparation. Exhaling naturally recruits the deep abdominal wall and pelvic floor, so it supports the spine exactly when support is most needed. Classical Pilates sometimes reverses this deliberately, notably inhaling into spinal extension. Both are legitimate; what matters far more than the direction is that you keep breathing rather than holding." } },
      ],
    },
  ],
};

const PRODUCTS = [
  { name: "Fabric Resistance Band (Light)", description: "Wrapped around the lower ribs, a light band gives the tactile feedback that makes lateral breathing click. You breathe into the resistance and feel the ribs widen — far more effective than trying to feel it unaided.", price: "From $12", affiliateUrl: "https://www.amazon.com/s?k=light+fabric+resistance+band+pilates&tag=pilatescollective-20" },
  { name: "OPTP Foam Roller (36-inch)", description: "Lying lengthwise along the spine opens the front of the ribcage and lets gravity assist the lateral expansion. The single most useful prop for learning the pattern, and it doubles as thoracic mobility work.", price: "From $29", affiliateUrl: "https://www.amazon.com/s?k=OPTP+foam+roller+36+inch&tag=pilatescollective-20" },
  { name: "Gaiam Pilates Ball (9-inch)", description: "Placed between the shoulder blades or under the ribs, it gives a reference point for where the breath should travel. Also used in seated breathing work to keep the spine tall without gripping.", price: "From $15", affiliateUrl: "https://www.amazon.com/s?k=gaiam+pilates+ball+9+inch&tag=pilatescollective-20" },
  { name: "Balanced Body Magic Circle", description: "Light pressure between the hands during seated breathing engages the connection between the arms, ribcage and deep abdominals — a classic drill for linking breath to upper body position.", price: "From $35", affiliateUrl: "https://www.amazon.com/s?k=balanced+body+magic+circle+pilates&tag=pilatescollective-20" },
  { name: "Manduka PRO Pilates Mat", description: "Breathing work is done lying down for long stretches. A 6mm mat keeps the spine comfortable enough that you can stay there for the ten minutes the practice actually takes.", price: "From $98", affiliateUrl: "https://www.amazon.com/s?k=manduka+pro+pilates+mat+6mm&tag=pilatescollective-20" },
];

export default function PilatesBreathingTechniquesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Method</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Breathing</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Pilates Breathing:<br /><span style={{ color: "#8b4a31" }}>Lateral Breathing Explained</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 10 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Breathing is the first of the six classical Pilates principles and the one most people quietly ignore for their first year. That is understandable — it feels like an instruction about something you already know how to do. But the breath pattern is not decoration on top of the exercises; it is the mechanism that makes abdominal engagement possible while you are still taking in air. Once it clicks, the rest of the method becomes noticeably easier.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/roxana-popovici-Zp4APUiwEsM-unsplash.jpg" alt="Pilates breathing technique — lateral ribcage expansion practised in a supine position" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-14 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Why Pilates does not use belly breathing</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Most breathing instruction you have encountered — in yoga, meditation, or a physiotherapy clinic — teaches diaphragmatic breathing, where the belly rises on the inhale. It is an excellent pattern for relaxation and it is not wrong. It is simply incompatible with what Pilates is asking the abdominal wall to do.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Pilates asks for near-continuous engagement of the deep abdominals to stabilise the spine while the limbs move. If the belly expands outward on every inhale, that engagement releases twelve to sixteen times a minute. You would be alternating between stabilising and letting go, which defeats the purpose of the exercise.
              </p>
              <p className="text-base leading-relaxed">
                <span style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                  Lateral breathing resolves the conflict. The diaphragm still descends and still does its job — this is a common misunderstanding, and lateral breathing is not somehow non-diaphragmatic. What changes is where the expansion is permitted to show. Instead of the abdominal wall moving forward, the lower ribs widen sideways and backwards, hinging at their joints with the spine. You get a full breath, and the abdominal wall never has to release.
                </span>
              </p>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Learning the pattern in four steps</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "1. Find the ribs with your hands",
                    body: "Sit or lie with knees bent. Place your hands on the sides of your lower ribcage, thumbs pointing back, fingers wrapping around the front. Breathe in and try to widen your hands apart without letting the belly push forward or the chest lift toward the chin. Most people feel almost nothing on the first few attempts — the movement is a couple of centimetres, not a dramatic expansion.",
                  },
                  {
                    title: "2. Add a band for feedback",
                    body: "Wrap a light resistance band or a long scarf around the lower ribs, crossed at the front, held with light tension. Now you are breathing into something. The resistance gives your nervous system a target, and this is the step where the pattern usually clicks for people who could not feel it with hands alone. Ten breaths.",
                  },
                  {
                    title: "3. Lengthen the exhale",
                    body: "Inhale for a count of three, exhale for a count of five or six through slightly pursed lips. The long exhale is where the deep abdominals and pelvic floor engage automatically — you do not need to consciously pull anything in. Feel the ribs draw down and together at the end of the exhale. That closing action is the position from which the next breath should start.",
                  },
                  {
                    title: "4. Attach it to movement",
                    body: "Only once the pattern is comfortable at rest should you add exercises. Start with something simple — knee folds, pelvic tilts, a small bridge — exhaling on the effort. Expect the pattern to fall apart the moment the exercise becomes demanding. That is normal, and the fix is to regress the exercise rather than abandon the breath.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Breath patterns for the exercises you will actually meet</h2>
              <div className="space-y-4">
                {[
                  { label: "The Hundred", body: "Five short pumps on the inhale, five on the exhale, ten cycles. The percussive breath is the exercise as much as the arm beat is — it is a deliberate challenge to maintain abdominal engagement while breathing rhythmically under load. If you find yourself holding the breath and pumping the arms, stop and restart at a slower tempo." },
                  { label: "Roll-up", body: "Inhale to prepare and lengthen the spine, exhale through the whole articulation up. The long exhale is what allows the lumbar spine to flex segmentally instead of lifting as a rigid block. Inhale at the top, exhale to roll down. This is the exercise where breath most obviously determines whether the movement is possible." },
                  { label: "Single leg stretch and the abdominal series", body: "Exhale on each change of leg, or exhale across two changes if the pace is quick. The exhale coincides with the moment of greatest demand on the deep abdominals, which is exactly when you want them recruited." },
                  { label: "Spine stretch forward", body: "Inhale to sit tall and lengthen, exhale to curl forward over the legs. The exhale draws the ribs down and lets the thoracic spine flex properly rather than the movement coming from the hips." },
                  { label: "Bridge / shoulder bridge", body: "Exhale to roll the pelvis up, inhale at the top, exhale to roll down vertebra by vertebra. Slower than most people do it — the point is the segmental articulation, and a long exhale is what paces it." },
                  { label: "Swan and extension work", body: "This is where classical and contemporary schools differ. Contemporary practice usually exhales into the lift for abdominal support. Classical practice often inhales into extension, using the breath to expand the chest and assist the shape. Both are defensible; follow whichever your instructor cues rather than fighting the room." },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-14 rounded-2xl p-8" style={{ backgroundColor: "#fff4f1", border: "1px solid rgba(139,74,49,0.15)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>The six faults instructors correct most</h2>
              <ul className="space-y-3">
                {[
                  "Holding the breath during the hard part. The most common fault by a wide margin, and the one that most reliably raises blood pressure and stalls the exercise. If you cannot maintain the breath, the exercise is too advanced for today.",
                  "Breathing into the shoulders. If the collarbones and shoulders rise toward the ears on the inhale, the accessory neck muscles are doing the work — this is the direct cause of the neck tension many beginners blame on the exercises themselves.",
                  "Letting the belly balloon on the inhale. The default pattern reasserting itself. Nothing harmful about it, but it releases the engagement the exercise depends on.",
                  "Flaring the ribs upward rather than widening them sideways. The lower ribs should move out and back, not lift toward the ceiling. Rib flare tips the pelvis and extends the lumbar spine.",
                  "Forcing the breath. Pilates breathing should be full but quiet. Audible, effortful inhalation usually means over-breathing, which is what produces the lightheadedness beginners often report.",
                  "Gripping the abdominals so hard that breathing becomes impossible. Engagement is roughly thirty percent of maximum, not a brace. If you cannot breathe laterally, you are holding too tightly.",
                ].map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    <span className="font-semibold" style={{ color: "#8b4a31" }}>⚠</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>The pelvic floor connection</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The diaphragm and the pelvic floor move together. On the inhale the diaphragm descends and the pelvic floor lengthens downward slightly; on the exhale both recoil upward. This coordination is why Pilates breathing is used so widely in pelvic floor rehabilitation, and why cueing the exhale often produces better pelvic floor activation than instructing someone to squeeze.
              </p>
              <p className="text-base leading-relaxed">
                <span style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                  The practical implication is that a long, complete exhale does most of the work for you. If you are working on pelvic floor function — postnatally, around menopause, or after prostate surgery — the breath pattern is not a preliminary to the exercises. It largely is the exercise, and it is worth spending several weeks on it before adding load.
                </span>
              </p>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "What is lateral breathing in Pilates?", a: "Lateral breathing — also called intercostal or ribcage breathing — directs the inhale sideways and backwards into the lower ribs rather than forwards into the abdomen. The ribs widen laterally like a bellows while the abdominal wall stays gently drawn in. The diaphragm still descends and does the same work it always does; what changes is where the expansion is allowed to show. This lets you maintain abdominal engagement continuously while still breathing fully, which is why the method uses it." },
                  { q: "Do you breathe in through the nose or mouth in Pilates?", a: "The convention is to inhale through the nose and exhale through the mouth, and it is a practical convention rather than a rule. Nasal inhalation filters and slows the breath and encourages a fuller lateral expansion. Exhaling through the mouth — often through slightly pursed lips, sometimes with an audible sound — encourages a longer, more complete exhale, which is what recruits the deep abdominals. If a blocked nose makes nasal breathing impractical, mouth breathing throughout is fine and will not undermine the exercise." },
                  { q: "Why do I get dizzy or lightheaded during Pilates breathing?", a: "Almost always over-breathing — inhaling harder and more often than needed while concentrating on the pattern, which lowers carbon dioxide levels and produces lightheadedness. The fix is to make the exhale longer than the inhale and let the breath stay quiet rather than forceful. Breath-holding, which is the other common cause, produces the same sensation on release. If lightheadedness persists once your breathing has settled, stop the session and get it checked rather than pushing through it." },
                  { q: "When should I inhale and exhale in Pilates?", a: "The general rule in contemporary Pilates is to exhale on the effort — the flexion, the lift, the moment of greatest abdominal demand — and inhale on the return or preparation. Exhaling naturally recruits the deep abdominal wall and pelvic floor, so it supports the spine exactly when support is most needed. Classical Pilates sometimes reverses this deliberately, notably inhaling into spinal extension. Both are legitimate; what matters far more than the direction is that you keep breathing rather than holding." },
                ].map((item) => (
                  <div key={item.q} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.q}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment */}
            <div className="mt-16 pt-12" style={{ borderTop: "1px solid rgba(217,194,186,0.4)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-2" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Equipment</p>
              <h2 className="text-2xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Props that make it click</h2>
              <div className="space-y-8">
                {PRODUCTS.map((p) => (
                  <ProductCard key={p.name} name={p.name} description={p.description} price={p.price} affiliateUrl={p.affiliateUrl} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="The 6 Core Principles of Pilates" excerpt="Breath, concentration, centring, control, precision and flow — what each actually means in practice." href="/blog/6-core-principles-of-pilates-explained" category="Method" readTime="9 min read" date="June 2026" imageUrl="/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg" />
                <ArticleCard title="Pilates for Pelvic Floor" excerpt="How breath-led Pilates supports pelvic floor function postnatally and beyond." href="/blog/pilates-for-pelvic-floor" category="Health" readTime="10 min read" date="June 2026" imageUrl="/pictures/mathilde-langevin-aBJ3A-2LJyU-unsplash.jpg" />
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
