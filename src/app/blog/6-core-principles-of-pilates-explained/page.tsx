import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "The 6 Core Principles of Pilates, Explained | Pilates Collective Club",
  description:
    "Concentration, control, centering, precision, breath, and flow — the six principles that define the Pilates method and how to apply them in practice.",
  openGraph: {
    title: "The 6 Core Principles of Pilates, Explained",
    description: "Concentration, control, centering, precision, breath, and flow — the six principles that define the Pilates method and how to apply them in practice.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/6-core-principles-of-pilates-explained",
    images: [{ url: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=1200&q=80", width: 1200, height: 630, alt: "Pilates core principles — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The 6 Core Principles of Pilates, Explained",
    description: "Concentration, control, centering, precision, breath, and flow — the six principles that define the Pilates method.",
    images: ["https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=1200&q=80"],
  },
};

const PRINCIPLES = [
  {
    number: "01",
    name: "Concentration",
    body: "Joseph Pilates insisted that the mind must be fully engaged during every exercise. Unlike many forms of exercise that can be performed mechanically while the attention is elsewhere, Pilates requires continuous mental presence. This isn't incidental — it's the mechanism through which the nervous system learns new movement patterns. Concentration is what separates Pilates from calisthenics.",
  },
  {
    number: "02",
    name: "Control",
    body: "The original name of Pilates was 'Contrology' — the study of control. Every movement is performed with deliberate muscular control rather than momentum, gravity, or habit. This is why Pilates exercises are typically slow: speed allows sloppiness; control demands precision. When you control a movement, you train the muscle fibres, connective tissue, and neural pathways simultaneously.",
  },
  {
    number: "03",
    name: "Centering",
    body: "Pilates identified the centre of the body — the area between the lower ribs and the hip bones, encompassing the deep abdominals, pelvic floor, and spinal stabilisers — as the origin of all movement. He called it the 'powerhouse.' Every exercise, on the mat or the reformer, initiates from and returns to this centre. Developing awareness of and strength in the powerhouse is the defining physical goal of the method.",
  },
  {
    number: "04",
    name: "Precision",
    body: "In Pilates, how you do something matters more than how many times you do it. A single precisely executed leg circle develops more than ten sloppy ones. Precision means performing each movement exactly as it is designed — correct alignment, correct breath, correct range of motion. This is why the method scales beautifully: a beginner's precise ten repetitions and an advanced practitioner's precise ten repetitions produce proportionally equivalent results.",
  },
  {
    number: "05",
    name: "Breath",
    body: "Joseph Pilates considered the breath the most fundamental aspect of the method. His system uses lateral thoracic breathing — expanding the ribcage sideways and to the back — to oxygenate the blood while maintaining core engagement. Inhaling typically prepares for or accompanies movement; exhaling typically accompanies exertion. Learning to match breath to movement transforms the experience of Pilates from exercise to something closer to meditation in motion.",
  },
  {
    number: "06",
    name: "Flow",
    body: "The exercises of the Pilates method are not performed in isolation — they flow into one another through smooth, efficient transitions. Flow is the integration of all five preceding principles: when concentration, control, centering, precision, and breath are working together, movement becomes fluid. Flow is the quality that distinguishes a practitioner who has truly absorbed the method from one who is merely executing exercises.",
  },
];

const RELATED = [
  {
    title: "Classical vs Contemporary Pilates: Which Style Is Right for You?",
    excerpt: "Understanding the key differences between the original method and modern interpretations.",
    href: "/blog/classical-vs-contemporary-pilates",
    category: "Method",
    readTime: "7 min read",
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

export default function SixPrinciplesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Method</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The 6 Core Principles of Pilates,<br />
              <span style={{ color: "#8b4a31" }}>Explained</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 6 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Most people who discover Pilates do so through its physical results — better posture, stronger core, less back pain. These outcomes are real, but they are symptoms of something deeper. The Pilates method is built on six organising principles that transform a collection of exercises into a coherent system. Understanding them doesn&apos;t just make you a better practitioner — it changes how you move through the world.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "380px" }}>
              <Image
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1400&q=80"
                alt="Mindful movement practice"
                fill className="object-cover" style={{ filter: "brightness(0.88)" }}
              />
            </div>
          </div>
        </section>

        <article className="px-6 pb-24">
          <div className="max-w-3xl mx-auto">

            <div className="mb-10 rounded-xl p-6" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217, 194, 186, 0.3)" }}>
              <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                <strong style={{ color: "#1b1c1c" }}>A note on attribution:</strong> The six principles below — concentration, control, centering, precision, breath, and flow — were codified by Joseph Pilates&apos; students and successors as a framework for teaching the method. Pilates himself wrote about these ideas throughout his work, particularly in his books <em>Your Health</em> (1934) and <em>Return to Life Through Contrology</em> (1945).
              </p>
            </div>

            <div className="space-y-10 mb-16">
              {PRINCIPLES.map((p) => (
                <div key={p.number} className="flex gap-6 rounded-2xl p-7" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217, 194, 186, 0.35)", boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
                  <div>
                    <span className="text-4xl font-light block mb-1 leading-none" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{p.number}</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-3" style={{ color: "#8b4a31", fontFamily: "'Playfair Display', serif" }}>{p.name}</h2>
                    <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{p.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217, 194, 186, 0.3)" }}>
              <h2 className="text-xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>How to use the principles in your practice</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Don&apos;t try to consciously apply all six principles simultaneously in your early practice — that way lies paralysis. Instead, treat them as a hierarchy to work through over time.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                In your first few months, focus on centering and breath. These are the prerequisites for everything else. Once you can reliably find and maintain your powerhouse, and coordinate breath with movement, concentration and control will begin to emerge naturally.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Precision and flow are the last to arrive — and when they do, the experience of Pilates changes completely. You&apos;ll stop counting repetitions and start inhabiting them. That&apos;s when the practice becomes genuinely transformative.
              </p>
            </div>

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

        <CTASection title="Deepen your practice" subtitle="Find studios that teach the method with depth and rigour — browse our city guides." showSearch searchPlaceholder="Ask: best classical Pilates studios…" />
      </main>
      <Footer />
    </>
  );
}
