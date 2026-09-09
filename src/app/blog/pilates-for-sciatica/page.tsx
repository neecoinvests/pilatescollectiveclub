import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Pilates for Sciatica (2026): Exercises That Help & What to Avoid",
  description: "Pilates for sciatica: which exercises calm nerve pain, which aggravate a disc, and how the approach changes for piriformis syndrome versus stenosis.",
  keywords: ["pilates for sciatica", "sciatica pilates exercises", "pilates sciatic nerve pain", "pilates piriformis syndrome", "pilates herniated disc sciatica", "pilates spinal stenosis", "sciatica exercises to avoid", "pilates nerve glides", "pilates for leg pain", "sciatica relief pilates 2026"],
  openGraph: {
    title: "Pilates for Sciatica (2026): What Calms the Nerve and What Inflames It",
    description: "The Pilates approach to sciatica — exercises that relieve nerve pain, and the ones that make a disc-related flare worse.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/pilates-for-sciatica",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/roxana-popovici-hiHBILFNah4-unsplash.jpg", width: 1200, height: 630, alt: "Pilates for Sciatica — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilates for Sciatica: What Helps and What to Avoid",
    description: "Which Pilates exercises calm sciatic nerve pain — and which ones aggravate the underlying cause.",
    images: ["https://pilatescollectiveclub.com/pictures/roxana-popovici-hiHBILFNah4-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/pilates-for-sciatica" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Pilates for Sciatica (2026): Exercises That Help & What to Avoid",
      "description": "Guide to Pilates for sciatica — the underlying causes, which exercises calm nerve irritation, which to avoid, and how programming differs by diagnosis.",
      "url": "https://pilatescollectiveclub.com/blog/pilates-for-sciatica",
      "datePublished": "2026-09-09",
      "dateModified": "2026-09-09",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/roxana-popovici-hiHBILFNah4-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/pilates-for-sciatica" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Pilates for Sciatica", "item": "https://pilatescollectiveclub.com/blog/pilates-for-sciatica" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Can Pilates make sciatica worse?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, if the exercise selection is wrong for the cause. The classical Pilates mat repertoire is built around spinal flexion — roll-up, roll-over, spine stretch forward, rolling like a ball. Repeated loaded flexion is the single most provocative movement pattern for disc-related sciatica, and a general mat class can genuinely worsen a flare. The same class may be entirely appropriate for sciatica caused by piriformis irritation. This is why identifying the cause before starting matters more with sciatica than with almost any other complaint." } },
        { "@type": "Question", "name": "How long does it take for Pilates to help sciatica?", "acceptedAnswer": { "@type": "Answer", "text": "Most acute sciatica improves substantially within six to twelve weeks regardless of intervention, so it is difficult to separate the effect of Pilates from natural recovery in that window. What Pilates realistically offers is a faster return to confident movement and a lower chance of recurrence. Expect to notice reduced symptom intensity and improved tolerance for sitting and walking within three to four weeks of twice-weekly practice. Programming for recurrence prevention is a longer project — three to six months." } },
        { "@type": "Question", "name": "Is reformer or mat Pilates better for sciatica?", "acceptedAnswer": { "@type": "Answer", "text": "The reformer has a real advantage during an active flare. Most of its foundational repertoire is performed lying supine with the spine supported and the legs loaded through the footbar, which lets you build hip and leg strength without asking the lumbar spine to flex or bear compressive load. Footwork, supine leg circles in straps, and bridging with the carriage are all typically well tolerated. Mat work becomes appropriate as symptoms centralise, but requires more careful selection because so much of the classical repertoire is flexion-based." } },
        { "@type": "Question", "name": "What is the difference between sciatica and piriformis syndrome?", "acceptedAnswer": { "@type": "Answer", "text": "Sciatica describes the symptom — pain radiating along the path of the sciatic nerve — not the cause. Most commonly the nerve root is compressed or irritated where it exits the lumbar spine, usually by a disc bulge or by narrowing of the spinal canal. In piriformis syndrome the nerve is irritated much lower, where it passes beneath or through the piriformis muscle deep in the buttock. The distinction matters for Pilates because deep gluteal release and hip rotation work help the piriformis presentation but do nothing for a compressed nerve root, while extension-biased spinal work is often the reverse." } },
      ],
    },
  ],
};

const PRODUCTS = [
  { name: "Manduka PRO Pilates Mat", description: "6mm of dense cushioning matters more than usual here — supine spinal work and side-lying hip series are the backbone of sciatica programming, and a thin mat makes both uncomfortable enough that you stop early.", price: "From $98", affiliateUrl: "https://www.amazon.com/s?k=manduka+pro+pilates+mat+6mm&tag=pilatescollective-20" },
  { name: "Lacrosse Ball Set for Massage", description: "The most effective tool for piriformis and deep gluteal release. Seated on the ball in a figure-four position reaches tissue a foam roller cannot. Use before hip mobility work, never directly on radiating nerve pain.", price: "From $12", affiliateUrl: "https://www.amazon.com/s?k=lacrosse+ball+massage+set+2+pack&tag=pilatescollective-20" },
  { name: "ProSource Stretch Strap with Loops", description: "Allows supine hamstring and nerve glide work with the pelvis stable and the lumbar spine neutral — far safer than seated forward folds, which load the discs in exactly the position that provokes sciatica.", price: "From $14", affiliateUrl: "https://www.amazon.com/s?k=prosource+stretch+strap+with+loops&tag=pilatescollective-20" },
  { name: "Fit Simplify Resistance Loop Bands", description: "Light resistance for the clam and side-lying abduction series that rebuilds gluteus medius strength — the muscle group that most reliably fails after a period of guarded, painful walking.", price: "From $12", affiliateUrl: "https://www.amazon.com/s?k=fit+simplify+resistance+loop+bands+set&tag=pilatescollective-20" },
  { name: "OPTP Foam Roller (36-inch)", description: "Used lengthwise under the spine for gentle thoracic extension, which restores the mobility the lumbar spine is otherwise forced to provide. Avoid rolling directly over the lower back during an active flare.", price: "From $29", affiliateUrl: "https://www.amazon.com/s?k=OPTP+foam+roller+36+inch&tag=pilatescollective-20" },
];

export default function PilatesForSciaticaPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Sciatica</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Pilates for Sciatica:<br /><span style={{ color: "#8b4a31" }}>What Calms It, What Inflames It</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 12 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Sciatica is the one complaint where a well-intentioned Pilates class can genuinely set you back. The classical mat repertoire is built around spinal flexion, and repeated loaded flexion is the most provocative movement pattern there is for disc-related nerve pain. Used correctly, though, Pilates is close to an ideal intervention — it builds the hip strength and spinal control that prevent recurrence, in positions that keep the nerve quiet. The entire outcome depends on knowing which sciatica you have.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/roxana-popovici-hiHBILFNah4-unsplash.jpg" alt="Pilates for sciatica — supine spinal work that builds hip strength without compressing the lumbar spine" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-14 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Sciatica is a symptom, not a diagnosis</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                This distinction is the whole article. Sciatica describes pain that radiates along the path of the sciatic nerve — through the buttock, down the back of the thigh, sometimes past the knee into the calf or foot. It says where the pain travels. It says nothing about why the nerve is unhappy, and the why determines which Pilates exercises help and which make things worse.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Three causes account for the overwhelming majority of cases. A lumbar disc bulge or herniation compressing a nerve root is the most common, particularly under fifty. Lumbar spinal stenosis — narrowing of the canal, usually degenerative — is more common over sixty. Piriformis syndrome, where the nerve is irritated by the deep gluteal muscle it passes beneath, sits somewhere behind both in frequency and is more often over-diagnosed than missed.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                These three want almost opposite things. Disc-related sciatica typically settles with extension and hates flexion. Stenosis is usually the reverse — flexion opens the canal and relieves symptoms, extension closes it down. Piriformis irritation responds to deep gluteal release and hip rotation work that does nothing at all for a compressed nerve root. Walking into a general mat class without knowing which one you have is how people conclude that Pilates made their sciatica worse.
              </p>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>The exercises that reliably help</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Pelvic tilts and the neutral spine drill",
                    body: "Supine, knees bent, feet flat, you move slowly between a small posterior tilt and a small anterior tilt, then find the middle. This looks trivial and is the foundation of everything else. Sciatica reliably destroys your sense of where neutral is — after weeks of guarding, most people cannot find it without external feedback. Ten slow repetitions, twice daily, rebuilds the position that every other exercise depends on.",
                  },
                  {
                    title: "Bridging (bilateral, progressing to single-leg)",
                    body: "Loads the glutes and hamstrings in hip extension while the lumbar spine stays supported by the mat. This is the highest-value exercise for most sciatica presentations: glute strength is nearly always compromised, and hip extension power is what allows walking without the lumbar spine compensating. Roll up one vertebra at a time if that is comfortable, or lift as a single block if segmental movement provokes symptoms. Fifteen repetitions, three sets.",
                  },
                  {
                    title: "Side-lying clam with a resistance band",
                    body: "The gluteus medius is the first muscle to weaken during a painful episode and the last to come back on its own. The clam isolates it with essentially zero spinal load, which makes it appropriate from very early on — often within days of an acute flare. Keep the pelvis stacked and still; the moment it rolls back, the work has moved to the wrong muscles. Fifteen repetitions each side.",
                  },
                  {
                    title: "Prone extension work (for disc-related presentations)",
                    body: "Lying face down, propping onto forearms, then progressing to gentle press-ups. For nerve pain driven by a posterior disc bulge, extension is often the position that produces centralisation — symptoms retreating from the calf toward the back. That retreat is the signal you are looking for. If pain instead travels further down the leg, stop; this is not your presentation.",
                  },
                  {
                    title: "Supine nerve glides with a strap",
                    body: "Lying on your back, one leg in a strap, you alternately point and flex the foot while the leg is held near the limit of comfortable range. This mobilises the nerve within its sheath rather than stretching it. Sciatic nerve tissue does not respond well to aggressive static stretching — the gentle, oscillating movement is the point. Ten to fifteen slow cycles, never pushing into sharp or electrical sensation.",
                  },
                  {
                    title: "Reformer footwork",
                    body: "Supine, feet on the bar, spine fully supported, resistance calibrated by springs. It builds leg and hip strength in the one position that asks nothing of the lumbar spine, which is exactly what you want during a flare when almost everything upright is provocative. For many people this is the first meaningful loaded exercise they tolerate.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-14 rounded-2xl p-8" style={{ backgroundColor: "#fff4f1", border: "1px solid rgba(139,74,49,0.15)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Exercises to avoid during an active flare</h2>
              <ul className="space-y-3">
                {[
                  "Roll-up and roll-over — loaded, repeated lumbar flexion is the most provocative pattern for disc-related sciatica. These are staples of the classical mat order, which is why a general class is risky.",
                  "Spine stretch forward and seated forward folds — combine lumbar flexion with hamstring tension on an already irritated nerve.",
                  "Rolling like a ball and open leg rocker — compressive flexion under momentum, with no control over end range.",
                  "Deep loaded rotation (criss-cross, supine spine twist with straight legs) — torsion adds shear to a compromised disc segment.",
                  "Double leg stretch and the hundred with legs low — the long lever creates lumbar extension load the deep abdominals cannot yet control. Keep knees bent and legs high until symptoms settle.",
                  "Aggressive piriformis stretching into sharp pain — if the nerve is already irritated, forceful stretching of the tissue around it usually amplifies symptoms rather than releasing them.",
                ].map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    <span className="font-semibold" style={{ color: "#8b4a31" }}>⚠</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>How programming changes by cause</h2>
              <div className="space-y-4">
                {[
                  { label: "Disc-related (herniation or bulge)", body: "Extension-biased. Prone press-ups, standing extension, and supine work with a neutral or slightly extended lumbar curve. Avoid flexion entirely during the acute phase — including the way you get off the mat. Watch for centralisation: symptoms retreating up the leg toward the spine is the sign the direction is right, even if the back itself feels temporarily worse." },
                  { label: "Lumbar spinal stenosis", body: "Flexion-biased — the opposite of the disc protocol. Knee-to-chest positions, supported forward folds, and cycling-position work open the canal and relieve symptoms. Extension typically aggravates. Walking tolerance is the honest progress marker: distance covered before symptoms start is more informative than pain scores." },
                  { label: "Piriformis syndrome", body: "Deep gluteal release with a massage ball, hip external and internal rotation through range, and glute medius strengthening. Figure-four stretching held gently for sixty to ninety seconds. This is the one presentation where direct work on the buttock is the treatment rather than a distraction from the real problem at the spine." },
                  { label: "Pregnancy-related sciatica", body: "Usually mechanical rather than discogenic — ligament laxity plus a shifting centre of mass. Side-lying work, supported quadruped, and standing exercises with a wall are the mainstays. Avoid supine positions after the first trimester and avoid end-range hip stretching, which the additional laxity makes easy to overshoot." },
                  { label: "Post-surgical (discectomy or decompression)", body: "Pilates is appropriate in later rehabilitation, typically from six to twelve weeks depending on the procedure and always on the surgeon's timeline. Reformer footwork and supported supine work usually come first because they load the legs without asking anything of the healing segment. Never progress ahead of the surgical team's guidance." },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-14 rounded-2xl p-8" style={{ backgroundColor: "#f7f4f0", border: "1px solid rgba(217,194,186,0.4)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>When to stop and seek medical assessment</h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Most sciatica is mechanical and improves. A small number of presentations are not, and they need same-day medical attention rather than an exercise plan. Stop and seek urgent assessment if you develop numbness in the saddle region — inner thighs, groin, buttocks — or any change in bladder or bowel control, or weakness affecting both legs. This combination can indicate cauda equina syndrome, which is a surgical emergency.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Short of that, book a proper assessment before starting if you have progressive weakness in one leg — a foot that catches on stairs, difficulty rising onto the toes — or sciatic symptoms following a significant fall or accident, or pain that is unrelenting at night and unaffected by position. Pilates is a good answer to mechanical nerve irritation. It is not the right first step for any of these.
              </p>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "Can Pilates make sciatica worse?", a: "Yes, if the exercise selection is wrong for the cause. The classical Pilates mat repertoire is built around spinal flexion — roll-up, roll-over, spine stretch forward, rolling like a ball. Repeated loaded flexion is the single most provocative movement pattern for disc-related sciatica, and a general mat class can genuinely worsen a flare. The same class may be entirely appropriate for sciatica caused by piriformis irritation. This is why identifying the cause before starting matters more with sciatica than with almost any other complaint." },
                  { q: "How long does it take for Pilates to help sciatica?", a: "Most acute sciatica improves substantially within six to twelve weeks regardless of intervention, so it is difficult to separate the effect of Pilates from natural recovery in that window. What Pilates realistically offers is a faster return to confident movement and a lower chance of recurrence. Expect to notice reduced symptom intensity and improved tolerance for sitting and walking within three to four weeks of twice-weekly practice. Programming for recurrence prevention is a longer project — three to six months." },
                  { q: "Is reformer or mat Pilates better for sciatica?", a: "The reformer has a real advantage during an active flare. Most of its foundational repertoire is performed lying supine with the spine supported and the legs loaded through the footbar, which lets you build hip and leg strength without asking the lumbar spine to flex or bear compressive load. Footwork, supine leg circles in straps, and bridging with the carriage are all typically well tolerated. Mat work becomes appropriate as symptoms centralise, but requires more careful selection because so much of the classical repertoire is flexion-based." },
                  { q: "What is the difference between sciatica and piriformis syndrome?", a: "Sciatica describes the symptom — pain radiating along the path of the sciatic nerve — not the cause. Most commonly the nerve root is compressed or irritated where it exits the lumbar spine, usually by a disc bulge or by narrowing of the spinal canal. In piriformis syndrome the nerve is irritated much lower, where it passes beneath or through the piriformis muscle deep in the buttock. The distinction matters for Pilates because deep gluteal release and hip rotation work help the piriformis presentation but do nothing for a compressed nerve root, while extension-biased spinal work is often the reverse." },
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
              <h2 className="text-2xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Recommended kit</h2>
              <div className="space-y-8">
                {PRODUCTS.map((p) => (
                  <ProductCard key={p.name} name={p.name} description={p.description} price={p.price} affiliateUrl={p.affiliateUrl} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="Pilates for Back Pain" excerpt="What the evidence supports, which exercises to prioritise, and the mat work to skip during a flare." href="/blog/pilates-for-back-pain" category="Health" readTime="12 min read" date="June 2026" imageUrl="/pictures/roxana-popovici-2QeonB1SdQk-unsplash.jpg" />
                <ArticleCard title="Pilates for Hip Pain" excerpt="Which Pilates exercises relieve hip flexor tightness, bursitis, and labral irritation." href="/blog/pilates-for-hip-pain" category="Health" readTime="11 min read" date="June 2026" imageUrl="/pictures/junseong-lee-AX8cf6mkCzw-unsplash.jpg" />
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
