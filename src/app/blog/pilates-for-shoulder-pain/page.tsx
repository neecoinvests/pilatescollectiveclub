import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Pilates for Shoulder Pain (2026): Exercises for Rotator Cuff & Impingement",
  description: "Pilates for shoulder pain: scapular stability work that resolves impingement, rotator cuff programming, and the loaded positions to avoid during a flare.",
  keywords: ["pilates for shoulder pain", "pilates rotator cuff", "pilates shoulder impingement", "pilates scapular stability", "pilates frozen shoulder", "shoulder exercises pilates", "pilates serratus anterior", "pilates thoracic mobility shoulder", "pilates shoulder rehab", "shoulder pain pilates 2026"],
  openGraph: {
    title: "Pilates for Shoulder Pain (2026): The Scapular Work That Fixes It",
    description: "Why most shoulder pain is a scapular control problem — and the Pilates programming that addresses it.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/pilates-for-shoulder-pain",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg", width: 1200, height: 630, alt: "Pilates for Shoulder Pain — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilates for Shoulder Pain: Rotator Cuff and Impingement",
    description: "The scapular stability work that resolves most shoulder pain, and what to avoid during a flare.",
    images: ["https://pilatescollectiveclub.com/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/pilates-for-shoulder-pain" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Pilates for Shoulder Pain (2026): Exercises for Rotator Cuff & Impingement",
      "description": "Guide to Pilates for shoulder pain — scapular stability, rotator cuff programming, thoracic mobility, and exercise modifications by condition.",
      "url": "https://pilatescollectiveclub.com/blog/pilates-for-shoulder-pain",
      "datePublished": "2026-09-09",
      "dateModified": "2026-09-09",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/pilates-for-shoulder-pain" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Pilates for Shoulder Pain", "item": "https://pilatescollectiveclub.com/blog/pilates-for-shoulder-pain" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Can Pilates fix a rotator cuff problem?", "acceptedAnswer": { "@type": "Answer", "text": "For rotator cuff tendinopathy — the overuse presentation, not a full tear — progressive loading is the accepted first-line treatment, and Pilates delivers it well. The rotator cuff's job is to hold the humeral head centred in the socket while larger muscles move the arm, which is precisely the kind of control-under-load that Pilates trains. A full-thickness tear is a different matter and needs imaging and a surgical opinion. Pilates has a role in rehabilitation afterwards, but it is not the treatment for the tear itself." } },
        { "@type": "Question", "name": "Why does my shoulder hurt when I lift my arm overhead?", "acceptedAnswer": { "@type": "Answer", "text": "A painful arc between roughly 60 and 120 degrees of elevation is the classic pattern of subacromial impingement — soft tissue being compressed in the space beneath the acromion. The space narrows when the scapula fails to rotate upward as the arm rises, which is usually a control problem in serratus anterior and lower trapezius rather than anything wrong with the joint. That is why treatment aimed at the scapula tends to outperform treatment aimed at the sore spot." } },
        { "@type": "Question", "name": "Should I do Pilates with frozen shoulder?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, but the goal depends on the stage. Adhesive capsulitis moves through a painful freezing phase, a stiff frozen phase, and a gradual thawing phase, and the whole process typically runs one to three years. During the painful phase, aggressive stretching makes things worse; gentle pain-free movement and work on the surrounding thoracic spine and scapula is appropriate. Range-of-motion work becomes productive during the frozen and thawing stages. Pilates cannot shorten the natural course, but it reliably limits how much strength and thoracic mobility you lose along the way." } },
        { "@type": "Question", "name": "Which Pilates exercises should I avoid with shoulder pain?", "acceptedAnswer": { "@type": "Answer", "text": "Avoid loaded overhead positions and full weight-bearing through the hands during an active flare — that means push-ups, plank, front support, and the elephant and long stretch series on the reformer. Behind-the-neck positions and any movement that reproduces the painful arc should also be deferred. Most of these can be modified rather than dropped: plank against a wall, quadruped instead of full front support, and arm springs with a shortened lever keep the training effect without the compression." } },
      ],
    },
  ],
};

const PRODUCTS = [
  { name: "TheraBand Resistance Bands Set", description: "Light resistance is the whole point for rotator cuff work — the cuff is an endurance stabiliser, not a prime mover. A graded set lets you start at genuinely low load for external rotation and progress in small increments.", price: "From $22", affiliateUrl: "https://www.amazon.com/s?k=theraband+resistance+bands+set+light&tag=pilatescollective-20" },
  { name: "OPTP Foam Roller (36-inch)", description: "Used lengthwise under the spine, it lets the shoulders fall into extension under gravity — the single most effective way to restore the thoracic mobility that overhead reach depends on.", price: "From $29", affiliateUrl: "https://www.amazon.com/s?k=OPTP+foam+roller+36+inch&tag=pilatescollective-20" },
  { name: "Lacrosse Ball Set for Massage", description: "For pectoral and posterior cuff release against a wall. Wall work gives you fine control over pressure, which matters far more here than on the glutes or back.", price: "From $12", affiliateUrl: "https://www.amazon.com/s?k=lacrosse+ball+massage+set+2+pack&tag=pilatescollective-20" },
  { name: "Cork Yoga Blocks (Set of 2)", description: "Used under the hands in quadruped and modified front support to reduce the range the shoulder has to control, and under the head in supine work to keep the neck neutral while the shoulders release.", price: "From $28", affiliateUrl: "https://www.amazon.com/s?k=cork+yoga+blocks+set+of+2&tag=pilatescollective-20" },
  { name: "Manduka PRO Pilates Mat", description: "A dense, non-slip surface matters for prone Y-T-W work and quadruped scapular drills — on a thin or slippery mat the hands travel and the scapular position you are trying to hold is lost.", price: "From $98", affiliateUrl: "https://www.amazon.com/s?k=manduka+pro+pilates+mat+6mm&tag=pilatescollective-20" },
];

export default function PilatesForShoulderPainPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Shoulder Pain</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Pilates for Shoulder Pain:<br /><span style={{ color: "#8b4a31" }}>Fix the Scapula, Not the Sore Spot</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 11 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              The shoulder is the most mobile joint in the body and pays for it in stability. Almost none of that stability comes from bone — it comes from muscular control, and most of that control acts on the shoulder blade rather than the shoulder itself. This is why the sore spot at the front of the shoulder is so rarely where the problem lives, and why Pilates, which trains scapular control more thoroughly than almost any other movement discipline, works so well for it.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg" alt="Pilates for shoulder pain — scapular stability and thoracic mobility work for rotator cuff and impingement" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-14 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Why the shoulder blade decides whether your shoulder hurts</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Raising your arm overhead is not one movement. Roughly two-thirds of the range comes from the ball-and-socket joint itself; the remaining third comes from the shoulder blade rotating upward across the ribcage. The two have to happen in proportion. When the scapula fails to rotate — because serratus anterior and lower trapezius are not doing their share — the humerus runs out of clearance early and starts compressing the tissue underneath the acromion. That is subacromial impingement, and it is a control failure rather than a structural one.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                A second, quieter contributor sits below the shoulder entirely. Overhead reach requires the thoracic spine to extend. A stiff upper back — the default after years at a desk — removes extension the arm needs, and the shoulder makes up the difference by pushing into range it cannot control. Treating the shoulder while ignoring a rigid thoracic spine is why a lot of shoulder rehabilitation stalls.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Pilates is unusually well matched to both problems. Scapular setting is cued at the start of nearly every upper body exercise in the repertoire, thoracic extension is trained directly, and the arm work is performed against springs — which load the muscle through range without the joint compression that free weights create overhead. The result is a system that trains exactly what the shoulder is missing.
              </p>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>The exercises that do the work</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Scapular setting — the prerequisite",
                    body: "Lying prone or sitting tall, you draw the shoulder blades gently down and slightly together, then release. No arm movement at all. It is the least impressive exercise in the repertoire and the one everything else depends on: if you cannot find this position without shrugging, every subsequent exercise trains the upper trapezius you are trying to quieten. Ten slow holds of five seconds, several times daily.",
                  },
                  {
                    title: "Serratus anterior punches",
                    body: "Supine, arms vertical holding a light weight or band, you press the shoulder blade forward off the mat without bending the elbow, then let it return. This isolates serratus anterior, the muscle most responsible for upward scapular rotation and the one most commonly asleep in impingement. The movement is small — two or three centimetres of travel. Fifteen repetitions, three sets.",
                  },
                  {
                    title: "Side-lying external rotation",
                    body: "Lying on your side, elbow tucked to the ribs at ninety degrees, you rotate the forearm upward against a light band. This is the standard loading exercise for the posterior rotator cuff, which is almost always weak relative to the internal rotators in desk-bound and overhead-sport populations. Keep the load genuinely light; the cuff responds to endurance work, and heavy resistance simply recruits the larger muscles instead.",
                  },
                  {
                    title: "Prone Y, T and W series",
                    body: "Lying face down, arms forming each letter in turn, lifting only a few centimetres. Targets lower and middle trapezius through their full functional range. The Y position in particular is the most direct lower trapezius exercise available without equipment. Quality collapses quickly here — stop the set when the shoulders start to shrug rather than counting to a number.",
                  },
                  {
                    title: "Thoracic extension over a foam roller",
                    body: "Roller placed horizontally across the mid-back, hands supporting the head, you extend gently over it and breathe. Restores the extension the shoulder needs to reach overhead without compensating. Two minutes at each of three or four segments up the thoracic spine. Never place the roller below the ribcage — the lumbar spine does not need more extension.",
                  },
                  {
                    title: "Reformer arm springs, seated and supine",
                    body: "Spring resistance loads the shoulder eccentrically through range, with the resistance curve at its lightest where the joint is most vulnerable. Supine chest expansion and arm circles are usually the first loaded upper body work a painful shoulder tolerates. Keep the range inside the painful arc initially and expand it as control improves.",
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
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What to avoid or modify during a flare</h2>
              <ul className="space-y-3">
                {[
                  "Full push-ups and front support (plank) — maximal closed-chain load on a shoulder that cannot yet control it. Regress to wall or incline push-ups, and quadruped instead of plank.",
                  "Elephant, long stretch and down stretch on the reformer — sustained weight-bearing through the hands with the shoulder near end range.",
                  "Loaded overhead pressing and any movement that reproduces the painful arc between roughly 60 and 120 degrees.",
                  "Behind-the-neck positions and aggressive posterior capsule stretching — both push the joint into the position where impingement is most likely.",
                  "Swan dive and heavy prone extension with the arms long — the lever is longer than an irritated cuff can stabilise. Keep hands under the shoulders instead.",
                  "Any exercise cued by shrugging. If the upper trapezius takes over, the exercise has stopped training what you intended and is reinforcing the pattern that caused the problem.",
                ].map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    <span className="font-semibold" style={{ color: "#8b4a31" }}>⚠</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Programming by condition</h2>
              <div className="space-y-4">
                {[
                  { label: "Subacromial impingement", body: "The most common presentation and the most responsive. Prioritise serratus anterior and lower trapezius, restore thoracic extension, and train inside the pain-free arc while it widens. Most people notice meaningful change in four to six weeks. Persisting through the painful arc rather than working around it is the usual reason progress stalls." },
                  { label: "Rotator cuff tendinopathy", body: "Progressive loading is the treatment. Light external rotation work, high repetitions, performed most days rather than occasionally and hard. Some discomfort during loading is acceptable and expected; sharp pain, or soreness that persists into the following day, means the load was too high. Expect a three-month timeline, not a three-week one." },
                  { label: "Frozen shoulder (adhesive capsulitis)", body: "Match the work to the stage. During the painful freezing phase, keep movement gentle and pain-free and put the effort into the thoracic spine and scapula instead. Range work becomes productive in the frozen and thawing phases. Pilates does not shorten the natural one-to-three-year course, but it substantially limits the strength and mobility lost around it." },
                  { label: "Shoulder instability and hypermobility", body: "Stability, never stretching. This population already has range in abundance and lacks control of it. Closed-chain work — hands supported on a stable surface — builds co-contraction around the joint. Avoid end-range positions and anything that produces a sensation of the joint slipping. Progress slowly and hold positions longer rather than adding load." },
                  { label: "Post-operative shoulder", body: "After cuff repair or stabilisation surgery, the protocol belongs to the surgeon, and it is genuinely restrictive in the early months. Pilates typically enters at the point active movement is permitted, usually starting with supported scapular work and supine arm springs. Never bring a pre-injury class plan to a repaired shoulder." },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "Can Pilates fix a rotator cuff problem?", a: "For rotator cuff tendinopathy — the overuse presentation, not a full tear — progressive loading is the accepted first-line treatment, and Pilates delivers it well. The rotator cuff's job is to hold the humeral head centred in the socket while larger muscles move the arm, which is precisely the kind of control-under-load that Pilates trains. A full-thickness tear is a different matter and needs imaging and a surgical opinion. Pilates has a role in rehabilitation afterwards, but it is not the treatment for the tear itself." },
                  { q: "Why does my shoulder hurt when I lift my arm overhead?", a: "A painful arc between roughly 60 and 120 degrees of elevation is the classic pattern of subacromial impingement — soft tissue being compressed in the space beneath the acromion. The space narrows when the scapula fails to rotate upward as the arm rises, which is usually a control problem in serratus anterior and lower trapezius rather than anything wrong with the joint. That is why treatment aimed at the scapula tends to outperform treatment aimed at the sore spot." },
                  { q: "Should I do Pilates with frozen shoulder?", a: "Yes, but the goal depends on the stage. Adhesive capsulitis moves through a painful freezing phase, a stiff frozen phase, and a gradual thawing phase, and the whole process typically runs one to three years. During the painful phase, aggressive stretching makes things worse; gentle pain-free movement and work on the surrounding thoracic spine and scapula is appropriate. Range-of-motion work becomes productive during the frozen and thawing stages. Pilates cannot shorten the natural course, but it reliably limits how much strength and thoracic mobility you lose along the way." },
                  { q: "Which Pilates exercises should I avoid with shoulder pain?", a: "Avoid loaded overhead positions and full weight-bearing through the hands during an active flare — that means push-ups, plank, front support, and the elephant and long stretch series on the reformer. Behind-the-neck positions and any movement that reproduces the painful arc should also be deferred. Most of these can be modified rather than dropped: plank against a wall, quadruped instead of full front support, and arm springs with a shortened lever keep the training effect without the compression." },
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
                <ArticleCard title="Pilates for Neck Pain" excerpt="The thoracic and scapular work that resolves most desk-related neck tension." href="/blog/pilates-for-neck-pain" category="Health" readTime="11 min read" date="June 2026" imageUrl="/pictures/roxana-popovici-cZ0WYsBFHhs-unsplash.jpg" />
                <ArticleCard title="Pilates for Office Workers" excerpt="A desk-worker's routine for thoracic stiffness, hip flexor tightness, and postural fatigue." href="/blog/pilates-for-office-workers" category="Health" readTime="10 min read" date="June 2026" imageUrl="/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg" />
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
