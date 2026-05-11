import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Pilates and Pregnancy: A Complete Guide | Pilates Collective Club",
  description: "How to safely practise Pilates during pregnancy and postpartum — what to do, what to avoid, and how to find a specialist instructor.",
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

function Disclaimer() {
  return (
    <div className="rounded-xl p-6 mb-12" style={{ backgroundColor: "rgba(83,98,87,0.08)", border: "1px solid rgba(83,98,87,0.2)" }}>
      <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Medical disclaimer</p>
      <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>This article provides general educational information about Pilates during pregnancy and postpartum. It is not medical advice. Always consult your obstetrician, midwife, or GP before beginning, continuing, or modifying any exercise programme during pregnancy or following childbirth. Every pregnancy is different, and what is appropriate for one person may not be appropriate for another.</p>
    </div>
  );
}

function TrimesterCard({ trimester, heading, content }: { trimester: string; heading: string; content: string }) {
  return (
    <div className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.35)" }}>
      <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{trimester}</p>
      <h3 className="text-base font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{heading}</h3>
      <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{content}</p>
    </div>
  );
}

export default function PilatesAndPregnancyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Health</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>8 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Pilates and Pregnancy:<br /><span style={{ color: "#8b4a31" }}>A Complete Guide</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>May 2026 · By the Pilates Collective Club editors</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Pilates is one of the most widely recommended movement practices during pregnancy — by midwives, physiotherapists, and obstetricians who appreciate its low-impact nature, its focus on core and pelvic floor function, and its adaptability to a rapidly changing body. But &quot;prenatal Pilates&quot; done well is very different from regular Pilates. This guide explains the distinctions, the benefits, the necessary modifications, and what to look for in a specialist instructor.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1400&q=80" alt="Pregnancy Pilates practice" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 pt-12">
          <div className="max-w-3xl mx-auto">
            <Disclaimer />

            <Section title="Why Pilates is well-suited to pregnancy">
              <p>Pregnancy places extraordinary demands on the musculoskeletal system. The growing uterus shifts the body&apos;s centre of gravity forward, increasing the curve in the lower back (lordosis) and placing new demands on the gluteal and hip muscles. The hormone relaxin loosens the ligaments throughout the body — increasing joint mobility but also reducing stability. The abdominal muscles stretch and often separate (a process called diastasis recti). The pelvic floor carries increasing load.</p>
              <p>Pilates addresses each of these changes directly. The method&apos;s emphasis on core stability — properly understood to include the deep abdominals, the pelvic floor, the diaphragm, and the multifidus — builds the muscular support that counteracts the instability pregnancy creates. The focus on spinal articulation and postural alignment helps manage the lower back pain that affects the majority of pregnant women.</p>
              <p>Crucially, Pilates is highly adaptable. A skilled prenatal Pilates instructor can modify exercises throughout every stage of pregnancy, maintaining the benefits of the practice while eliminating anything contraindicated at a given stage.</p>
            </Section>

            <Callout>Pilates during pregnancy is not about maintaining fitness — it is about maintaining function, managing the physical changes of pregnancy, and preparing the body for birth and recovery.</Callout>

            <Section title="Pilates through each trimester">
              <div className="grid grid-cols-1 gap-5">
                <TrimesterCard
                  trimester="First Trimester (weeks 1–13)"
                  heading="Generally close to normal practice, with awareness"
                  content="For experienced practitioners, the first trimester often allows practice close to normal — energy levels and body changes permitting. The key considerations are fatigue (which can be extreme in early pregnancy) and the avoidance of overheating. Experienced practitioners should inform their instructor of their pregnancy immediately so that any high-intensity or high-impact elements can be modified. New practitioners beginning Pilates in the first trimester should seek a specialist prenatal class or instructor from the outset."
                />
                <TrimesterCard
                  trimester="Second Trimester (weeks 14–27)"
                  heading="Modify supine exercises; focus on stability"
                  content="From approximately 20 weeks, lying flat on the back (supine) should be avoided or minimised — the weight of the uterus can compress the vena cava, reducing blood flow. Many classical Pilates exercises that use the supine position need modification: either elevating the upper body on the reformer box or carriage, or transitioning to side-lying and seated alternatives. The focus shifts to pelvic stability, lateral hip strength, and functional movement. The second trimester is often when women feel best and can practise most consistently."
                />
                <TrimesterCard
                  trimester="Third Trimester (weeks 28–40)"
                  heading="Reduced range, increased focus on breath and pelvic floor"
                  content="As the abdomen grows, range of motion and available positions narrow further. The emphasis moves toward breath work, pelvic floor preparation, and movements that support the positions used in labour. Deep spinal flexion and exercises that increase intra-abdominal pressure are avoided. Side-lying, all-fours (quadruped), and gentle seated work are the primary positions. A skilled instructor makes this trimester deeply valuable despite the physical limitations — the body awareness and breath control cultivated here have direct relevance to labour and birth."
                />
              </div>
            </Section>

            <Section title="Postpartum Pilates: returning to practice">
              <p>The postpartum period requires as much care as pregnancy itself — and in many ways more. The body has undergone one of its most extraordinary physical events and needs graduated return to exercise that respects the healing process.</p>
              <p><strong style={{ color: "#1b1c1c" }}>The early postpartum period (0–6 weeks)</strong> is not the time for exercise in the conventional sense. Gentle breathing, pelvic floor awareness, and gentle walking are appropriate. Nothing that loads the core or the pelvic floor significantly should be attempted. Always receive clearance from your midwife or GP before returning to any exercise.</p>
              <p><strong style={{ color: "#1b1c1c" }}>Weeks 6–12</strong> can include a graduated return to gentle Pilates under the guidance of an instructor with specific postpartum training. The priority is assessing pelvic floor function, checking for diastasis recti, and rebuilding the deep core system slowly and safely. This is not the time to resume a full pre-pregnancy programme.</p>
              <p><strong style={{ color: "#1b1c1c" }}>Weeks 12+</strong> allows for a progressive return to fuller practice as healing allows. Diastasis recti, if present, needs specific rehabilitation — a specialist instructor or women&apos;s health physiotherapist should guide this. Pelvic floor strength and control should be assessed before loading exercises are reintroduced.</p>
              <p>The single most common mistake in postpartum exercise is returning too quickly to high-intensity or high-load training. The connective tissue and pelvic floor need months, not weeks, to fully recover. Pilates — approached progressively and with specialist guidance — is one of the most appropriate practices for this recovery period.</p>
            </Section>

            <Section title="What to avoid during pregnancy">
              <p>The following should be avoided or significantly modified during pregnancy, particularly from the second trimester:</p>
              <ul className="space-y-2 mt-2">
                {[
                  "Exercises in the supine (flat on back) position after approximately 20 weeks",
                  "Deep spinal flexion (full roll-ups, teasers) as the pregnancy progresses",
                  "Movements that significantly increase intra-abdominal pressure",
                  "Prone (face-down) positions as the abdomen grows",
                  "High-impact or high-intensity exercise",
                  "Exercises that cause any pain, diastasis recti strain, or pelvic pressure",
                  "Overheating — keep studio temperatures moderate and rest as needed",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#8b4a31", marginTop: "6px" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            <Callout>Find a teacher who has specific training in prenatal and postnatal Pilates. The modifications required are substantial — general Pilates instruction is not sufficient preparation for working with pregnant clients.</Callout>

            <Section title="Finding a specialist prenatal Pilates instructor">
              <p>Not all Pilates instructors are trained to work with pregnant clients. Look specifically for instructors with dedicated prenatal and postnatal certification, or for women&apos;s health physiotherapists who integrate Pilates into their practice.</p>
              <p>When contacting a studio or instructor, ask directly: &quot;Do you have specific training in prenatal Pilates?&quot; and &quot;How many pregnant clients have you worked with?&quot; A good specialist will be able to discuss trimester-specific modifications, diastasis recti, pelvic floor considerations, and postpartum return to exercise with genuine knowledge.</p>
              <p>Some physiotherapy clinics offer specialist pregnancy and postpartum Pilates programmes delivered by physiotherapists with Pilates training — this combination is particularly valuable if you have specific pelvic floor concerns or a history of diastasis recti. If you are unsure where to start, your midwife or GP can usually refer you to a women&apos;s health physiotherapist who can advise on appropriate exercise.</p>
            </Section>
          </div>
        </section>

        <CTASection title="Find a Pilates studio near you" subtitle="Use our AI Finder to discover curated studios and specialist instructors — coming soon." showSearch searchPlaceholder="Ask: prenatal Pilates studios near me…" />
      </main>
      <Footer />
    </>
  );
}
