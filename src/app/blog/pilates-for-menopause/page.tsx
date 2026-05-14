import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Pilates During Menopause: Bone Density, Hormones & Practice | Pilates Collective Club",
  description:
    "How Pilates supports women through perimenopause and menopause — bone density, hormonal balance, pelvic floor, body composition, and how to adapt your practice as your body changes.",
  keywords: [
    "pilates for menopause",
    "pilates perimenopause",
    "pilates bone density menopause",
    "pilates hormones menopause",
    "best exercise for menopause pilates",
    "pilates pelvic floor menopause",
    "menopause exercise pilates",
    "pilates for women over 50",
  ],
  openGraph: {
    title: "Pilates During Menopause: Bone Density, Hormones & Practice",
    description: "How Pilates supports women through perimenopause and menopause — and how to adapt your practice as your body changes.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/pilates-for-menopause",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg", width: 1200, height: 630, alt: "Pilates for Menopause — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilates During Menopause: Bone Density, Hormones & Practice",
    description: "How Pilates supports women through perimenopause and menopause.",
    images: ["https://pilatescollectiveclub.com/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/blog/pilates-for-menopause",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Pilates During Menopause: Bone Density, Hormones & Practice",
      "description": "How Pilates supports women through perimenopause and menopause — bone density, hormonal balance, pelvic floor, and how to adapt your practice.",
      "url": "https://pilatescollectiveclub.com/blog/pilates-for-menopause",
      "datePublished": "2026-05-14",
      "dateModified": "2026-05-14",
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Pilates for Menopause", "item": "https://pilatescollectiveclub.com/blog/pilates-for-menopause" },
      ],
    },
  ],
};

export default function PilatesForMenopausePage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Women&apos;s Health</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Pilates During Menopause:<br /><span style={{ color: "#8b4a31" }}>Bone Density, Hormones &amp; Practice</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 13 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              The conversation around exercise and menopause has changed significantly. Where the guidance once focused primarily on cardiovascular health and weight management, the current understanding is more specific and more nuanced: resistance training matters for bone density; pelvic floor work matters more than most practitioners realise; and the hormonal environment of perimenopause and post-menopause changes how the body responds to exercise. Pilates is exceptionally well-positioned to address these needs — but the approach needs to be informed by what is actually happening physiologically.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg" alt="Pilates practice for women during menopause" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-14 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What changes during perimenopause and menopause</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The decline in oestrogen that defines menopause has specific, documentable effects on the musculoskeletal system. Oestrogen plays a role in collagen synthesis — which affects joint laxity, tendon strength, and connective tissue quality. As levels decline, practitioners often notice increased joint stiffness, reduced flexibility, and a changed recovery profile after exercise. Injuries that would have healed quickly in earlier decades take longer and need more careful management.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Bone density begins declining meaningfully in the perimenopause period — typically from the mid-40s — and accelerates in the first few years after the final menstrual period. This is clinically significant: women lose approximately 10% of bone density in the first five years after menopause without intervention. The response to this is not rest. Weight-bearing and resistance exercise are the primary non-pharmaceutical interventions with strong evidence for slowing bone loss.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Muscle mass also declines — sarcopenia accelerates after menopause as testosterone and oestrogen both decline. The combination of reduced muscle mass and reduced bone density creates a compound risk for falls and fractures. Exercise that builds and maintains muscle mass while also improving balance and coordination directly addresses this risk profile.
              </p>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Where Pilates specifically helps</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Bone density: loading that matters",
                    body: "The research is clear that mechanical loading — weight-bearing exercise that puts force through bones — stimulates osteoblast activity and slows bone loss. Pilates is not primarily weight-bearing in the conventional sense (running, jumping) but it provides significant axial loading through the spine during standing exercises, footwork, and jump board work on the reformer. Jump board classes are particularly valuable for perimenopausal practitioners: the spring-assisted jumping provides impact stimulus without the injury risk of running on pavement. This is an underappreciated tool for bone health."
                  },
                  {
                    title: "Pelvic floor: the overlooked priority",
                    body: "Pelvic floor dysfunction — urinary leakage, prolapse symptoms, reduced pelvic organ support — is common during and after menopause. The same hormonal changes that affect joint connective tissue affect the pelvic floor ligaments and fascia. Pilates is one of the few exercise systems that integrates pelvic floor work into every exercise through breath timing and core activation sequences. A well-taught Pilates class provides more pelvic floor work than a dedicated Kegel programme precisely because the pelvic floor is treated as a functional component of the movement system rather than an isolated contraction."
                  },
                  {
                    title: "Body composition and insulin sensitivity",
                    body: "The body composition changes of menopause — increased visceral adiposity, redistribution from peripheral to central fat storage — are driven partly by changing insulin sensitivity. Resistance exercise is the most effective intervention for improving insulin sensitivity and maintaining muscle mass. Pilates with progressive spring resistance on the reformer provides genuine resistance stimulus. It is not an equivalent to heavy weightlifting, but for practitioners for whom high-impact or joint-loading resistance training is not appropriate, Pilates offers a meaningful alternative that is consistently adherred to."
                  },
                  {
                    title: "Balance and fall prevention",
                    body: "Proprioception declines with age and hormonal change. Balance — the integration of visual, vestibular, and proprioceptive inputs — degrades measurably in the decade following menopause. Pilates includes significant balance challenge: single-leg standing, unstable surface work, and exercises requiring simultaneous limb movement with spinal stability. The evidence for Pilates reducing fall risk in older women is one of the strongest in the exercise-menopause literature."
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-14 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>How to adapt your Pilates practice during menopause</h2>
              <ul className="space-y-3">
                {[
                  "Add jump board sessions if you don't already do them — the impact stimulus is valuable for bone density and the spring assistance makes it accessible regardless of cardiovascular fitness level.",
                  "Extend your warm-up. Joints take longer to mobilise after hormonal change — 10 minutes of gentle mobility before your main practice reduces injury risk meaningfully.",
                  "Prioritise pelvic floor integration. Ask your instructor to be explicit about pelvic floor timing in the breath cuing. If your instructor doesn't address this, seek one who does.",
                  "Don't reduce intensity because you feel more fatigued. Menopausal fatigue is real but exercise is part of the solution, not a contraindication. Adjust duration before intensity.",
                  "Increase reformer spring resistance progressively. The stimulus for muscle and bone maintenance requires progressive overload. Comfortable isn't sufficient — appropriate challenge is.",
                  "Add at least one session per week of heavier loading alongside your Pilates — moderate-weight strength training specifically targeted at hip and spine bone density.",
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
                  { q: "Is Pilates enough exercise during menopause?", a: "Pilates is an excellent component of a menopause exercise programme, but it is most effective when combined with cardiovascular exercise and some heavy resistance training. The current consensus from women's health specialists is that menopause requires a multi-modal approach: Pilates for core, balance, and pelvic floor; some form of cardiovascular exercise for heart and metabolic health; and heavier loading (weightlifting or impact activity) for bone density specifically." },
                  { q: "Can Pilates help with hot flushes?", a: "Indirectly. Exercise generally does not reduce hot flush frequency, but regular exercise improves the physiological response to temperature dysregulation and significantly reduces the sleep disruption that hot flushes cause. Pilates practitioners who exercise consistently typically report better sleep quality and reduced fatigue compared to sedentary women going through the same hormonal transition." },
                  { q: "Should I tell my Pilates instructor I am in menopause or perimenopause?", a: "Yes — absolutely. A well-informed instructor will adjust their programming to prioritise pelvic floor integration, incorporate appropriate loading for bone density, extend warm-ups, and be aware of joint laxity changes that affect modification decisions. If your instructor does not engage meaningfully with this information, that tells you something about the quality of the instruction." },
                  { q: "I have osteoporosis — can I still do Pilates?", a: "Yes, with appropriate modifications. Pilates is one of the most recommended exercises for women with osteoporosis because it improves balance (reducing fall risk) and can provide bone-stimulating loads without high-impact movements. Avoid deep spinal flexion exercises (roll-up, rollover) and exercises that load the spine in flexion under load. Work with a Pilates instructor who has specific osteoporosis training and coordinate with your medical team." },
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
                <ArticleCard title="Pilates and Pregnancy" excerpt="Safe, effective Pilates throughout pregnancy — trimester by trimester." href="/blog/pilates-and-pregnancy" category="Health" readTime="11 min read" date="May 2026" imageUrl="/pictures/juls-p-lB6lbkbe1XA-unsplash.jpg" />
                <ArticleCard title="Pilates for Back Pain" excerpt="Clinical research meets practical guidance on using Pilates to address chronic lower back pain." href="/blog/pilates-for-back-pain" category="Health" readTime="10 min read" date="May 2026" imageUrl="/pictures/junseong-lee-AX8cf6mkCzw-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best Pilates studios in Lausanne…" />
      </main>
      <Footer />
    </>
  );
}
