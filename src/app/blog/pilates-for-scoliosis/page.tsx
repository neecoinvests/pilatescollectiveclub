import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Pilates for Scoliosis (2026): What Actually Works | Pilates Collective Club",
  description: "Pilates for scoliosis: curvature-specific exercises, contraindications, and instructor qualifications to look for. Guidance from BASI-certified teachers.",
  keywords: ["pilates for scoliosis", "scoliosis pilates exercises", "pilates spinal curve", "pilates schroth method", "pilates scoliosis safe exercises", "reformer pilates scoliosis", "pilates scoliosis instructor", "exercises to avoid scoliosis pilates", "pilates for spinal asymmetry", "scoliosis pilates guide 2026"],
  openGraph: {
    title: "Pilates for Scoliosis: What Actually Works",
    description: "An honest guide to Pilates for scoliosis — what the research shows and how to approach your practice safely.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/pilates-for-scoliosis",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/junseong-lee-AX8cf6mkCzw-unsplash.jpg", width: 1200, height: 630, alt: "Pilates for Scoliosis — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilates for Scoliosis: What Actually Works",
    description: "An honest guide to Pilates for scoliosis — research, safe exercises, and what to avoid.",
    images: ["https://pilatescollectiveclub.com/pictures/junseong-lee-AX8cf6mkCzw-unsplash.jpg"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/blog/pilates-for-scoliosis",
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Pilates for Scoliosis: What Actually Works",
      "description": "An honest guide to Pilates for scoliosis — what the research shows, which exercises help, and what to avoid.",
      "url": "https://pilatescollectiveclub.com/blog/pilates-for-scoliosis",
      "datePublished": "2026-05-14",
      "dateModified": "2026-05-14",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/junseong-lee-AX8cf6mkCzw-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/pilates-for-scoliosis" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Pilates for Scoliosis", "item": "https://pilatescollectiveclub.com/blog/pilates-for-scoliosis" },
      ],
    },
  {
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Can Pilates straighten scoliosis in adults?", "acceptedAnswer": { "@type": "Answer", "text": "No — Pilates cannot reduce Cobb angle in skeletally mature adults. The structural curve is determined by the bone morphology of each vertebra and cannot be changed through exercise. What Pilates can achieve is improved pain management, better postural awareness, stronger paraspinal stabilisers, and improved quality of life. These are clinically meaningful outcomes even without structural change." } },
      { "@type": "Question", "name": "Is reformer or mat Pilates better for scoliosis?", "acceptedAnswer": { "@type": "Answer", "text": "One-on-one reformer sessions with a scoliosis-informed instructor are optimal — the spring resistance can be precisely calibrated to address asymmetric muscle weakness, and the instructor can monitor alignment throughout. Group mat classes are appropriate once you have an individualised programme and understand how to modify standard exercises for your curve pattern." } },
      { "@type": "Question", "name": "Are there any Pilates exercises I should never do with scoliosis?", "acceptedAnswer": { "@type": "Answer", "text": "No universal contraindications apply to all scoliosis — it depends entirely on your specific curve pattern, its location, and your current capacity. Exercises that load into the concavity of your curve or that cause pain during or after the session should be avoided or modified. This is why individual assessment is essential rather than trying to self-navigate a generic exercise programme." } },
      { "@type": "Question", "name": "How long before I see improvement?", "acceptedAnswer": { "@type": "Answer", "text": "Pain reduction typically begins within 6–8 weeks of consistent, appropriate Pilates practice. Meaningful improvements in posture and functional capacity generally emerge at 3–6 months. The condition requires ongoing management — Pilates works best as a long-term component of your routine rather than a finite course of treatment." } }
    ]
  },
  ],
};

export default function PilatesForScoliosisPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Spinal Health</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Pilates for Scoliosis:<br /><span style={{ color: "#8b4a31" }}>What Actually Works</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 12 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Scoliosis affects an estimated 2–3% of the population. For most adults, it is a mild lateral spinal curvature that causes asymmetric loading, muscle imbalance, and in moderate to severe cases, chronic pain. Pilates is one of the most commonly recommended exercises for adults with scoliosis — but the generic advice to &quot;do Pilates for your scoliosis&quot; is dangerously imprecise. What you do, and crucially what you don&apos;t do, matters enormously depending on your specific curve pattern.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/junseong-lee-AX8cf6mkCzw-unsplash.jpg" alt="Pilates for scoliosis — spinal curve management, safe exercises, and Schroth-informed practice guidance" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-14 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What scoliosis actually involves</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Scoliosis is a three-dimensional spinal deformity — not just a lateral curve, but a rotation of the vertebrae around the spinal axis, and in many cases an alteration of the normal sagittal curves (kyphosis and lordosis). A Cobb angle above 10 degrees qualifies as scoliosis by clinical definition. Most adults with idiopathic scoliosis have curves in the 10–40 degree range. Curves above 50 degrees may be candidates for surgical consideration.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The pattern of the curve matters enormously for exercise selection. A right thoracic curve (the most common adult pattern) creates different muscle imbalances from a left lumbar curve or a double-major curve. What helps one pattern may aggravate another. This is why individualised assessment — not a generic Pilates class — is the appropriate starting point.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The goals of Pilates for scoliosis are not to straighten the curve (this is not possible through exercise in skeletally mature adults) but to: manage and reduce pain, develop the paraspinal and core musculature that stabilises the curved spine, address compensatory patterns in the hips and shoulders, and improve the body awareness needed to avoid habitual loading into the concave side of the curve.
              </p>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What the research shows</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Multiple studies have examined Pilates as an intervention for adult scoliosis. A 2018 systematic review in the Journal of Bodywork and Movement Therapies found that Pilates produced statistically significant improvements in pain levels, functional disability, and quality of life in adults with scoliosis. The studies with the strongest outcomes were those using individualised programmes rather than generic group classes.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Importantly, the research does not show that Pilates reduces Cobb angle in adults — the structural curve does not change through exercise once skeletal maturity is reached. What changes is how the body manages, compensates for, and loads the curve. These functional improvements are clinically meaningful for quality of life.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The Schroth method — a German physiotherapy approach involving specific breathing, posture, and exercise techniques — is the most evidence-supported exercise intervention for scoliosis specifically. Many clinical Pilates practitioners integrate Schroth-influenced principles into their scoliosis work. If your primary goal is curve management rather than general fitness, finding a Schroth-trained Pilates instructor is worth the additional effort.
              </p>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What to do — and what to avoid</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  { heading: "Emphasise", body: "Lateral breathing into the concave side. Unilateral exercises that address the asymmetry directly. Elongation and decompression exercises. Gentle rotation away from the convex side where appropriate.", color: "#536257" },
                  { heading: "Approach with care", body: "Deep flexion exercises (roll-up, rollover) that load the spine asymmetrically. Aggressive rotation into the curve. Any exercise that causes the rib hump to become more prominent.", color: "#8b4a31" },
                  { heading: "Prioritise", body: "Side-lying work that loads the convex side of the curve. Breathing exercises that expand the compressed ribcage on the concave side. Hip and pelvis symmetry work if the curve extends into lumbar segments.", color: "#536257" },
                  { heading: "Avoid in generic classes", body: "Standard 'both sides equally' instruction that does not account for your curve pattern. Teachers who are unfamiliar with scoliosis and cannot modify exercises for your specific presentation.", color: "#8b4a31" },
                ].map((item) => (
                  <div key={item.heading} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: item.color, fontFamily: "'Playfair Display', serif" }}>{item.heading}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-14 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>How to find the right instructor</h2>
              <ul className="space-y-3">
                {[
                  "Look for instructors with specific scoliosis training — not just general Pilates certification. Terms to look for: Schroth-trained, BSPTS (Barcelona Scoliosis Physical Therapy School), or clinical Pilates with spinal specialisation.",
                  "Start with individual sessions, not group classes. A scoliosis-informed instructor needs to assess your curve pattern before designing a programme. Generic group classes apply the same exercise selection to everyone, which is inappropriate for a structural asymmetry.",
                  "Request that your instructor communicate with your physiotherapist or orthopaedic consultant. Good scoliosis Pilates should be integrated with your wider medical management, not replace it.",
                  "Re-evaluate every 3–6 months. As your strength and body awareness develop, the exercises that are appropriate change. What was challenging six months ago may now be insufficient, or may need to be modified as your curve pattern responds to loading.",
                  "Be cautious of instructors who claim Pilates will reduce your Cobb angle. This is not evidence-based for adult scoliosis. Honest instructors will focus on pain management, function, and quality of life — not structural correction.",
                ].map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    <span className="font-semibold" style={{ color: "#8b4a31" }}>{i + 1}.</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "Can Pilates straighten scoliosis in adults?", a: "No — Pilates cannot reduce Cobb angle in skeletally mature adults. The structural curve is determined by the bone morphology of each vertebra and cannot be changed through exercise. What Pilates can achieve is improved pain management, better postural awareness, stronger paraspinal stabilisers, and improved quality of life. These are clinically meaningful outcomes even without structural change." },
                  { q: "Is reformer or mat Pilates better for scoliosis?", a: "One-on-one reformer sessions with a scoliosis-informed instructor are optimal — the spring resistance can be precisely calibrated to address asymmetric muscle weakness, and the instructor can monitor alignment throughout. Group mat classes are appropriate once you have an individualised programme and understand how to modify standard exercises for your curve pattern." },
                  { q: "Are there any Pilates exercises I should never do with scoliosis?", a: "No universal contraindications apply to all scoliosis — it depends entirely on your specific curve pattern, its location, and your current capacity. Exercises that load into the concavity of your curve or that cause pain during or after the session should be avoided or modified. This is why individual assessment is essential rather than trying to self-navigate a generic exercise programme." },
                  { q: "How long before I see improvement?", a: "Pain reduction typically begins within 6–8 weeks of consistent, appropriate Pilates practice. Meaningful improvements in posture and functional capacity generally emerge at 3–6 months. The condition requires ongoing management — Pilates works best as a long-term component of your routine rather than a finite course of treatment." },
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
                <ArticleCard title="Pilates for Back Pain" excerpt="Clinical research meets practical guidance on using Pilates to address chronic lower back pain." href="/blog/pilates-for-back-pain" category="Health" readTime="10 min read" date="May 2026" imageUrl="/pictures/junseong-lee-AX8cf6mkCzw-unsplash.jpg" />
                <ArticleCard title="How to Choose a Pilates Instructor" excerpt="Credentials, lineage, teaching style — what actually matters when selecting your teacher." href="/blog/how-to-choose-a-pilates-instructor" category="Guide" readTime="7 min read" date="May 2026" imageUrl="/pictures/roxana-popovici-hiHBILFNah4-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best Pilates studios in Geneva…" />
      </main>
      <Footer />
    </>
  );
}
