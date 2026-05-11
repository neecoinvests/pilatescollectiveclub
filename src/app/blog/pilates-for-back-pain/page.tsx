import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Pilates for Back Pain: What the Research Shows | Pilates Collective Club",
  description:
    "A clear-eyed look at the evidence for Pilates as a treatment for back pain — what it can and can't do, which exercises help most, and how to find the right instructor.",
  openGraph: {
    title: "Pilates for Back Pain: What the Research Shows",
    description: "A clear-eyed look at the evidence for Pilates as a treatment for back pain — what it can and can't do, which exercises help most, and how to find the right instructor.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/pilates-for-back-pain",
    images: [{ url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80", width: 1200, height: 630, alt: "Pilates for back pain — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilates for Back Pain: What the Research Shows",
    description: "The evidence for Pilates as a treatment for back pain — what it can and can't do.",
    images: ["https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80"],
  },
};

const RELATED = [
  {
    title: "The Beginner's Guide to Reformer Pilates",
    excerpt: "What to expect in your first reformer class and how to choose the right studio.",
    href: "/blog/beginners-guide-to-reformer-pilates",
    category: "Beginner Guide",
    readTime: "8 min read",
    date: "May 2026",
  },
  {
    title: "How to Build a Consistent Pilates Practice",
    excerpt: "Practical strategies for making Pilates a lasting habit.",
    href: "/blog/how-to-build-a-consistent-pilates-practice",
    category: "Lifestyle",
    readTime: "7 min read",
    date: "May 2026",
  },
];

export default function PilatesForBackPainPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Wellness</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Pilates for Back Pain:<br />
              <span style={{ color: "#8b4a31" }}>What the Research Shows</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 9 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Back pain affects approximately 80% of adults at some point in their lives, making it one of the most prevalent and costly health conditions in the world. Pilates is frequently cited as a treatment — by physiotherapists, GPs, and wellness practitioners alike. But what does the evidence actually show? And how should you use Pilates if you&apos;re dealing with back pain right now?
            </p>
          </div>
        </section>

        <section className="px-6 mb-4">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-xl p-5 flex gap-4" style={{ backgroundColor: "#fff7f3", border: "1px solid rgba(139, 74, 49, 0.2)" }}>
              <svg className="shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8b4a31" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                <strong style={{ color: "#8b4a31" }}>Medical disclaimer:</strong> This article is for informational purposes only and does not constitute medical advice. If you are experiencing acute back pain, consult a qualified healthcare provider before beginning any exercise programme.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 mb-16 mt-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "380px" }}>
              <Image
                src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=1400&q=80"
                alt="Wellness and movement therapy"
                fill className="object-cover" style={{ filter: "brightness(0.88)" }}
              />
            </div>
          </div>
        </section>

        <article className="px-6 pb-24">
          <div className="max-w-3xl mx-auto">

            <Section title="What the research actually says">
              <p>The evidence base for Pilates as a treatment for chronic low back pain is, by the standards of exercise science, reasonably strong. A 2015 systematic review published in the <em>Journal of Orthopaedic & Sports Physical Therapy</em> found that Pilates was more effective than minimal intervention (advice alone or general practitioner care) for reducing pain and disability in chronic low back pain patients. A 2016 Cochrane review reached similar conclusions — Pilates produced short-term improvements in pain and function that were comparable to other forms of exercise and superior to no treatment.</p>
              <p>The caveat is important: &quot;other forms of exercise.&quot; Pilates is not uniquely superior to other well-designed exercise interventions for back pain. Walking, swimming, general strength training, and yoga have all produced comparable results in controlled trials. What Pilates does offer is a particularly well-structured approach to core stabilisation, spinal mobility, and body awareness — qualities that make it especially relevant for back pain populations.</p>
            </Section>

            <Callout>
              Pilates is not a cure for back pain. It is a tool for building the strength, mobility, and awareness that reduce pain over time. This distinction matters.
            </Callout>

            <Section title="Why Pilates addresses back pain effectively">
              <p>Most chronic back pain is associated with one or more of the following: weak deep spinal stabilisers (particularly the multifidus and transversus abdominis), reduced spinal mobility, poor movement patterns under load, and inadequate hip and gluteal strength. Pilates addresses all of these directly.</p>
              <p>The deep core muscles — particularly the transversus abdominis and pelvic floor — are the primary focus of the foundational Pilates repertoire. Unlike the superficial abdominals targeted in conventional &quot;core&quot; training, these muscles provide the moment-to-moment dynamic stability that the spine needs under load. Training them requires the precise, slow, intentional movement that Pilates demands — and that most gym-based exercise does not.</p>
              <p>The reformer, in particular, is well-suited to back pain rehabilitation. The spring resistance can be precisely adjusted to match a client&apos;s current capacity, and the supported positions (lying, seated with back support) allow movement to be trained in ranges that are pain-free even when standing exercise is not yet possible.</p>
            </Section>

            <Section title="What Pilates cannot do">
              <p>Back pain has many causes — structural (disc herniation, spinal stenosis, facet joint disease), inflammatory (ankylosing spondylitis, rheumatoid arthritis), and psychosocial (stress, sleep disruption, catastrophising). Pilates addresses the musculoskeletal components of the first category effectively but is not a treatment for structural pathology requiring medical or surgical intervention.</p>
              <p>If you&apos;ve been told you have a herniated disc, spinal stenosis, or spondylolisthesis, Pilates may still be appropriate — many people with these diagnoses benefit significantly — but you should begin with a clinical Pilates instructor who has physiotherapy training, not a general group class. The difference in how exercises are modified can be significant.</p>
              <p>Acute back pain — recent onset, severe pain — is generally not a good time to start Pilates. The first priority is settling the acute phase, which typically takes 4–6 weeks. Pilates is most effective in the sub-acute and chronic phases, where rebuilding strength and movement quality becomes the primary goal.</p>
            </Section>

            <Section title="How to start Pilates if you have back pain">
              <p>Begin with a private session rather than a group class. A qualified instructor needs to understand your history, assess your movement patterns, and identify which exercises are appropriate and which require modification. Many studios offer a clinical intake assessment specifically for clients with injuries or pain conditions — use this service.</p>
              <p>Look specifically for instructors who hold comprehensive Pilates certifications and, ideally, additional qualifications in clinical Pilates, physiotherapy, or sports medicine. The APPI (Australian Physiotherapy and Pilates Institute) and STOTT Pilates clinical training pathways both produce instructors well-equipped to work with back pain populations.</p>
              <p>Progress slowly and communicate consistently. Pain during a Pilates exercise — beyond mild muscular fatigue — is a signal to stop and modify. A good instructor will adjust; if yours doesn&apos;t, find another one. The reformer sessions that help most in early recovery tend to be gentle, focused, and shorter in duration: 30–45 minutes with careful attention to which positions load the spine.</p>
            </Section>

            <div className="my-12 rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(217, 194, 186, 0.4)" }}>
              <div className="px-6 py-4" style={{ backgroundColor: "#8b4a31" }}>
                <h3 className="text-base font-semibold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Pilates & Back Pain: Quick Reference</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  <thead style={{ backgroundColor: "#f6f3f2" }}>
                    <tr>
                      {["Situation", "Recommendation"].map((h) => (
                        <th key={h} className="text-left px-5 py-3 font-semibold text-xs uppercase tracking-wider" style={{ color: "#53433e" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Acute back pain (under 6 weeks)", "Rest, consult GP. Hold off on Pilates until sub-acute phase."],
                      ["Chronic low back pain (6+ weeks)", "Pilates is appropriate. Begin with private clinical sessions."],
                      ["Herniated disc", "Clinical Pilates with a physio-trained instructor. Avoid flexion-heavy exercises initially."],
                      ["Post-surgical (6+ months)", "Pilates can be excellent for rebuilding. Get clearance from surgeon first."],
                      ["Postural back pain (desk-related)", "Group reformer classes appropriate. Focus on spinal mobility and hip strength."],
                      ["Sciatica", "Private clinical sessions. Some exercises are contraindicated — instructor needs to know."],
                    ].map(([situation, rec], i) => (
                      <tr key={situation} style={{ backgroundColor: i % 2 === 0 ? "#ffffff" : "#faf8f7" }}>
                        <td className="px-5 py-3.5 font-semibold" style={{ color: "#1b1c1c" }}>{situation}</td>
                        <td className="px-5 py-3.5" style={{ color: "#53433e" }}>{rec}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <Section title="The long-term picture">
              <p>The practitioners who benefit most from Pilates for back pain are those who treat it as a long-term practice rather than a short-term fix. The deep stabiliser strength and movement quality that Pilates develops take months to build — but once built, they tend to be durable in a way that other interventions are not.</p>
              <p>Many people begin Pilates because of back pain and continue for decades because of what the practice does for their quality of life more broadly. That is, ultimately, the most compelling evidence of all.</p>
            </Section>

          </div>
        </article>

        <section className="py-16 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Continue reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
              {RELATED.map((a) => (<ArticleCard key={a.href} {...a} />))}
            </div>
          </div>
        </section>

        <CTASection title="Find a clinical Pilates studio" subtitle="Our city guides highlight studios with physiotherapy-trained instructors." showSearch searchPlaceholder="Ask: clinical Pilates for back pain near me…" />
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{title}</h2>
      <div className="space-y-4 text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
        {children}
      </div>
    </div>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-10 border-l-4 pl-6 py-2" style={{ borderColor: "#8b4a31" }}>
      <p className="text-lg italic leading-relaxed" style={{ color: "#8b4a31", fontFamily: "'Playfair Display', serif" }}>{children}</p>
    </blockquote>
  );
}
