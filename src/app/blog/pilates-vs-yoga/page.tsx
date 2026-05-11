import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Pilates vs Yoga: Key Differences and How to Choose | Pilates Collective Club",
  description: "A clear, honest comparison of Pilates and yoga — what each practice develops, who each suits, and how to choose between them.",
};

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

function CompareRow({ feature, pilates, yoga }: { feature: string; pilates: string; yoga: string }) {
  return (
    <tr>
      <td className="py-3 pr-6 font-semibold text-sm align-top" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif", borderBottom: "1px solid rgba(217,194,186,0.3)", minWidth: "140px" }}>{feature}</td>
      <td className="py-3 pr-6 text-sm align-top" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", borderBottom: "1px solid rgba(217,194,186,0.3)" }}>{pilates}</td>
      <td className="py-3 text-sm align-top" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", borderBottom: "1px solid rgba(217,194,186,0.3)" }}>{yoga}</td>
    </tr>
  );
}

export default function PilatesVsYogaPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Method</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>7 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Pilates vs Yoga:<br /><span style={{ color: "#8b4a31" }}>Key Differences and How to Choose</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>May 2026 · By the Pilates Collective Club editors</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              They share a studio, often share practitioners, and are frequently discussed in the same breath. But Pilates and yoga are fundamentally different practices with different origins, different physical demands, and different outcomes. If you&apos;re deciding between them — or wondering whether to combine both — this guide lays out the honest comparison.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1400&q=80" alt="Pilates and yoga practice comparison" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 pt-12">
          <div className="max-w-3xl mx-auto">
            <Section title="Origins and philosophy">
              <p>Yoga is an ancient Indian practice with roots stretching back thousands of years. Its physical forms — hatha, vinyasa, ashtanga — are a small part of a much broader spiritual and philosophical tradition concerned with the union of mind, body, and consciousness. The physical practice, in most traditions, is understood as preparation for meditation and deeper states of awareness.</p>
              <p>Pilates was developed by Joseph Pilates in early twentieth-century Germany, refined during his years running a New York studio from 1926 onwards. It has no spiritual or religious dimension — it is a systematic physical training method designed to develop strength, control, flexibility, and efficient movement. Pilates called it &quot;Contrology&quot; — the art of controlled movement.</p>
              <p>This distinction matters practically: yoga classes often include philosophical elements, breath work rooted in pranayama tradition, and in some styles, chanting or meditation. Pilates classes are focused entirely on physical training.</p>
            </Section>

            <Callout>The question isn&apos;t which is better — it&apos;s which is better for you, at this point in your life, with the goals you currently have.</Callout>

            <Section title="What each practice develops">
              <p><strong style={{ color: "#1b1c1c" }}>Pilates</strong> primarily develops core strength, spinal articulation, postural alignment, and controlled movement patterns. The method works the deep stabilising muscles — the transversus abdominis, the multifidus, the pelvic floor — that most conventional gym training neglects. Reformer Pilates adds spring resistance, which develops muscular strength and endurance in ways that mat work alone cannot.</p>
              <p><strong style={{ color: "#1b1c1c" }}>Yoga</strong> primarily develops flexibility, balance, and body awareness, alongside — in flowing styles — cardiovascular fitness. More strength-oriented styles (ashtanga, power yoga) build considerable upper body and functional strength. The practice also develops breath regulation and, in dedicated practitioners, significant mental stillness.</p>
              <p>Both practices improve body awareness, reduce injury risk, and produce calmer, more functional movers. The difference is emphasis: Pilates is more clinical and targeted; yoga is broader and, for many practitioners, more holistic.</p>
            </Section>

            <Section title="The comparison at a glance">
              <div className="overflow-x-auto rounded-xl" style={{ border: "1px solid rgba(217,194,186,0.4)" }}>
                <table className="w-full" style={{ borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ backgroundColor: "#f6f3f2" }}>
                      <th className="py-4 px-5 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}></th>
                      <th className="py-4 px-5 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Pilates</th>
                      <th className="py-4 px-5 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Yoga</th>
                    </tr>
                  </thead>
                  <tbody className="px-5">
                    <CompareRow feature="Primary focus" pilates="Core strength, postural alignment, controlled movement" yoga="Flexibility, balance, breath, mindfulness" />
                    <CompareRow feature="Equipment" pilates="Mat, reformer, Cadillac, Wunda Chair, small apparatus" yoga="Mat, blocks, straps (minimal equipment needed)" />
                    <CompareRow feature="Class formats" pilates="Private, semi-private, small group (max 10–12)" yoga="Group classes of all sizes; privates less common" />
                    <CompareRow feature="Spiritual dimension" pilates="None — purely physical training" yoga="Yes, ranging from minimal to central depending on style" />
                    <CompareRow feature="Cardiovascular benefit" pilates="Moderate (higher in dynamic reformer classes)" yoga="Low to high depending on style (vinyasa/ashtanga)" />
                    <CompareRow feature="Cost" pilates="Higher (equipment and small classes)" yoga="Lower to moderate (large group classes common)" />
                    <CompareRow feature="Best for" pilates="Rehabilitation, posture, precise movement control" yoga="Flexibility, stress reduction, mind-body connection" />
                  </tbody>
                </table>
              </div>
            </Section>

            <Section title="Injury and rehabilitation">
              <p>Pilates has a stronger clinical track record in physical rehabilitation than yoga. The method was originally developed partly in a healthcare context — Joseph Pilates worked with injured dancers and used his apparatus for rehabilitation — and the classical method&apos;s precision and adaptability makes it a tool of choice for physiotherapists and sports medicine practitioners.</p>
              <p>Yoga is not without rehabilitative value — gentle yoga is frequently prescribed for lower back pain, and restorative yoga has documented benefits for nervous system regulation. But yoga injuries, particularly in group classes where individual attention is limited, are more common than commonly acknowledged. The emphasis on flexibility can, in some practitioners, create hypermobility without the corresponding stability.</p>
              <p>If you are recovering from injury or working with a specific physical condition, Pilates — particularly in a private or clinical setting — is typically the more appropriate choice.</p>
            </Section>

            <Callout>They are not competing practices. For many serious movers, the question is not either/or — it is how to use both intelligently.</Callout>

            <Section title="Can you do both?">
              <p>Many dedicated practitioners do both, and the two methods complement each other well. Pilates provides the structural foundation — the core strength, postural awareness, and movement precision — that makes yoga practice more effective and less injury-prone. Yoga provides the range of motion, the breath awareness, and often the mental stillness that enhances Pilates work.</p>
              <p>The combination is particularly effective for athletes and for those managing chronic tension or stress. Several physiotherapists recommend Pilates for structural work and yoga for nervous system regulation, treating the two as addressing different aspects of the same whole.</p>
              <p>If time and budget only allow one, consider your primary goal: if it is physical function, posture, and strength — choose Pilates. If it is flexibility, mental calm, and a holistic mind-body practice — choose yoga. If both matter, start with whichever you&apos;ll sustain, and add the other when ready.</p>
            </Section>

            <Section title="Choosing the right style within each">
              <p><strong style={{ color: "#1b1c1c" }}>Within Pilates:</strong> Classical Pilates (following the original Pilates sequence) suits those who want a methodical, progressive system. Contemporary Pilates is more adaptive and incorporates modern movement science. Reformer Pilates adds resistance and is generally more physically demanding than mat work alone.</p>
              <p><strong style={{ color: "#1b1c1c" }}>Within yoga:</strong> Hatha yoga is slow-paced and accessible to beginners. Vinyasa is flowing and cardiovascular. Ashtanga is the most structured and physically demanding. Yin yoga is passive and focused on connective tissue and the nervous system. Restorative yoga is deeply relaxing and therapeutic.</p>
              <p>The style matters as much as the practice. A vigorous ashtanga practice is physically closer to reformer Pilates than it is to restorative yoga. Choose based on your temperament and your goals — not on what you think you should be doing.</p>
            </Section>
          </div>
        </section>

        <CTASection title="Find a Pilates studio near you" subtitle="Use our AI Finder to discover curated studios in your city — coming soon." showSearch searchPlaceholder="Ask: best beginner Pilates studios near me…" />
      </main>
      <Footer />
    </>
  );
}
