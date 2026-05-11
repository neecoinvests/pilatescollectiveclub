import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Classical vs Contemporary Pilates: Which Style Is Right for You? | Pilates Collective Club",
  description:
    "Understanding the key differences between classical and contemporary Pilates — the original method, modern interpretations, and how to choose the right approach for your goals.",
  openGraph: {
    title: "Classical vs Contemporary Pilates: Which Style Is Right for You?",
    description: "Understanding the key differences between classical and contemporary Pilates — the original method, modern interpretations, and how to choose the right approach.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/classical-vs-contemporary-pilates",
    images: [{ url: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=1200&q=80", width: 1200, height: 630, alt: "Classical vs Contemporary Pilates — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Classical vs Contemporary Pilates: Which Style Is Right for You?",
    description: "The original method vs modern interpretations — how to choose the right Pilates style for your goals.",
    images: ["https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=1200&q=80"],
  },
};

const RELATED = [
  {
    title: "The 6 Core Principles of Pilates, Explained",
    excerpt: "Concentration, control, centering, precision, breath, and flow — what they actually mean in practice.",
    href: "/blog/6-core-principles-of-pilates-explained",
    category: "Method",
    readTime: "6 min read",
    date: "May 2026",
  },
  {
    title: "The Beginner's Guide to Reformer Pilates",
    excerpt: "Everything you need to know before your first reformer class.",
    href: "/blog/beginners-guide-to-reformer-pilates",
    category: "Beginner Guide",
    readTime: "8 min read",
    date: "May 2026",
  },
];

export default function ClassicalVsContemporaryPage() {
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
              Classical vs Contemporary Pilates:<br />
              <span style={{ color: "#8b4a31" }}>Which Style Is Right for You?</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 7 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Walk into ten different Pilates studios and you may encounter ten different versions of the method. Some will feel rooted, sequential, almost meditative. Others will feel dynamic, fusion-forward, and closer to a HIIT class than anything Joseph Pilates envisioned. Understanding the distinction between classical and contemporary Pilates will help you make a more informed choice — and set better expectations for your practice.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "380px" }}>
              <Image
                src="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=1400&q=80"
                alt="Pilates practice"
                fill className="object-cover" style={{ filter: "brightness(0.88)" }}
              />
            </div>
          </div>
        </section>

        <article className="px-6 pb-24">
          <div className="max-w-3xl mx-auto">

            <Section title="The classical method: Pilates as Joseph intended it">
              <p>Classical Pilates refers to the original system developed by Joseph Pilates between the 1920s and his death in 1967. The exercises — both on the mat and on apparatus like the reformer, Cadillac, chair, and barrel — are performed in a specific sequence that Joseph prescribed and his direct students preserved.</p>
              <p>The classical order is not arbitrary. Each exercise prepares the body for the next: sequences flow from supine to prone, from global to local, building cumulative challenge within each session. Performing the exercises out of order, or substituting modified versions, changes the physiological effect of the whole.</p>
              <p>Classical teachers typically train through lineages connected directly to Joseph&apos;s original students — Romana Kryzanowska, Kathy Grant, Ron Fletcher, and others. Gratz equipment (the brand Joseph himself used) is preferred by many classical practitioners for its specific spring tensions and dimensions.</p>
            </Section>

            <Callout>
              Classical Pilates is a system, not a collection of exercises. The order, the transitions, the breath — all of it is intentional.
            </Callout>

            <Section title="Contemporary Pilates: evolution or departure?">
              <p>Contemporary Pilates emerged in the latter decades of the 20th century as physical therapy research, biomechanics, and exercise science began to inform how Pilates teachers trained and taught. Organisations like STOTT Pilates and BASI (Body Arts and Science International) developed contemporary curricula that incorporated modern understanding of spinal anatomy, neutral spine positioning, and muscle activation sequencing.</p>
              <p>The result is a version of Pilates that is more adaptive, more evidence-informed, and better suited to clinical populations — people recovering from injury, those with significant postural imbalances, or clients with specific rehabilitation needs. Contemporary teachers modify exercises freely, often prioritise neutral spine over Joseph&apos;s preferred imprinted position, and integrate props and functional movement patterns that weren&apos;t part of the original repertoire.</p>
              <p>This flexibility is a genuine strength. But contemporary Pilates also encompasses a wide range of quality: at its best, it is rigorous, intelligent, and highly personalised; at its worst, it is indistinguishable from generic core conditioning classes with reformers.</p>
            </Section>

            <Section title="Fusion formats: Pilates-adjacent or something else?">
              <p>The explosion of boutique fitness studios has produced a third category: Pilates-fusion formats that borrow the reformer, the vocabulary, and the aesthetic of Pilates while departing significantly from its principles. &quot;Cardio reformer,&quot; &quot;Pilates barre,&quot; &quot;Lagree method,&quot; and various branded formats occupy this space.</p>
              <p>These classes can be excellent workouts. Lagree in particular is a serious, evidence-backed training methodology that produces genuine results. But they are not Pilates — and representing them as such misleads new practitioners about what the method actually is and does.</p>
              <p>If you&apos;re new to reformer training, trying a fusion format first is fine — the movement literacy you develop will serve you in any format. But understanding that the &quot;reformer class&quot; you&apos;re attending may bear little methodological relationship to the work Pilates actually requires is an important piece of context.</p>
            </Section>

            <div className="my-12 rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(217, 194, 186, 0.4)" }}>
              <div className="px-6 py-4" style={{ backgroundColor: "#8b4a31" }}>
                <h3 className="text-base font-semibold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>At a glance: Classical vs Contemporary</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  <thead style={{ backgroundColor: "#f6f3f2" }}>
                    <tr>
                      {["", "Classical", "Contemporary"].map((h) => (
                        <th key={h} className="text-left px-5 py-3 font-semibold text-xs uppercase tracking-wider" style={{ color: "#53433e" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Exercise order", "Fixed, prescribed sequence", "Flexible, adapted to client"],
                      ["Spinal position", "Imprinted (flattened lumbar)", "Often neutral spine"],
                      ["Equipment preference", "Gratz (original specifications)", "Balanced Body, Merrithew"],
                      ["Modifications", "Minimal, preserve the system", "Extensive, client-centred"],
                      ["Evidence base", "Traditional lineage & empirical", "Sports science & physiotherapy"],
                      ["Best for", "Discipline, purists, tradition", "Rehab, beginners, clinical needs"],
                    ].map(([aspect, classical, contemporary], i) => (
                      <tr key={aspect} style={{ backgroundColor: i % 2 === 0 ? "#ffffff" : "#faf8f7" }}>
                        <td className="px-5 py-3.5 font-semibold" style={{ color: "#1b1c1c" }}>{aspect}</td>
                        <td className="px-5 py-3.5" style={{ color: "#53433e" }}>{classical}</td>
                        <td className="px-5 py-3.5" style={{ color: "#53433e" }}>{contemporary}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <Section title="Which should you choose?">
              <p>If you&apos;re coming to Pilates to understand the method in its original, structured form — if you&apos;re drawn to the idea of a system with internal logic and historical depth — classical Pilates will resonate deeply. The fixed repertoire, executed with increasing precision over months and years, is one of the most rewarding practices in movement.</p>
              <p>If you&apos;re dealing with an injury, significant postural issues, or want a practice that adapts clearly to your individual needs, contemporary Pilates in the hands of a well-trained instructor is the right choice. The flexibility of the contemporary approach isn&apos;t a compromise — it&apos;s a strength in the right context.</p>
              <p>The honest answer for most beginners is: don&apos;t overthink it. Find a studio with qualified instructors, small classes, and good equipment. Attend consistently. Your body will show you, over time, which direction to deepen.</p>
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

        <CTASection title="Find the right studio for your practice" subtitle="Our city guides highlight the method focus and teaching approach of each studio." showSearch searchPlaceholder="Ask: classical Pilates studios near me…" />
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
