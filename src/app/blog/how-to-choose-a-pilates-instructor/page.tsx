import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "How to Choose the Right Pilates Instructor | Pilates Collective Club",
  description: "What credentials, experience, and red flags to look for when selecting a Pilates teacher — a practical guide for new and experienced practitioners alike.",
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

function CheckItem({ label, description, isGreen }: { label: string; description: string; isGreen: boolean }) {
  return (
    <div className="flex gap-4 p-5 rounded-xl" style={{ backgroundColor: isGreen ? "rgba(83,98,87,0.06)" : "rgba(139,74,49,0.06)", border: `1px solid ${isGreen ? "rgba(83,98,87,0.2)" : "rgba(139,74,49,0.2)"}` }}>
      <span className="text-lg shrink-0 mt-0.5">{isGreen ? "✓" : "✗"}</span>
      <div>
        <p className="text-sm font-semibold mb-1" style={{ color: isGreen ? "#536257" : "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{label}</p>
        <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{description}</p>
      </div>
    </div>
  );
}

export default function HowToChoosePilatesInstructorPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>6 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              How to Choose<br /><span style={{ color: "#8b4a31" }}>the Right Pilates Instructor</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>May 2026 · By the Pilates Collective Club editors</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              The instructor is the most important variable in your Pilates experience — more important than the studio, the equipment, or the location. A skilled, attentive teacher will transform your practice. An undertrained or inattentive one can waste your time or, in the worst cases, reinforce the movement patterns that Pilates is designed to correct. This guide tells you what to look for, what to ask, and what to walk away from.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1400&q=80" alt="Pilates instructor teaching a class" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 pt-12">
          <div className="max-w-3xl mx-auto">
            <Section title="The certification landscape">
              <p>Pilates instructor certification is not regulated in the same way that medical or physiotherapy qualifications are in most countries. This means the range of training behind someone calling themselves a &quot;Pilates instructor&quot; is extraordinarily wide — from weekend courses with minimal practical hours to multi-year apprenticeship programmes with thousands of supervised teaching hours.</p>
              <p>The most rigorous certifications — those from organisations like the Pilates Method Alliance (PMA), STOTT PILATES, Balanced Body, Romana&apos;s Pilates, and Peak Pilates — require between 450 and 1,000+ hours of training, including anatomy education, practical observation, apprentice teaching, and written and practical examinations. These are genuinely demanding programmes.</p>
              <p>At the other end of the spectrum, weekend and online certification courses can confer the same &quot;certified Pilates instructor&quot; title with a fraction of the training. When choosing an instructor, ask specifically about their certification programme, the hours it required, and the organisation that awarded it.</p>
            </Section>

            <Callout>A great Pilates instructor teaches the person in front of them — not the class. Find someone who sees you specifically, not just the body filling the reformer.</Callout>

            <Section title="What to look for">
              <div className="space-y-3">
                <CheckItem
                  isGreen={true}
                  label="Comprehensive certification (450+ hours)"
                  description="Look for certification from a recognised organisation with rigorous training standards. Ask directly: 'Which programme did you train with, and how many training hours did it require?'"
                />
                <CheckItem
                  isGreen={true}
                  label="Years of teaching experience"
                  description="Certification provides knowledge; experience develops teaching skill. An instructor with 5–10 years of consistent teaching has encountered and solved movement problems that a newly certified instructor hasn't yet seen."
                />
                <CheckItem
                  isGreen={true}
                  label="Ongoing professional development"
                  description="The best instructors continue to study — taking workshops with senior teachers, attending training in related disciplines (physiotherapy, anatomy, somatic movement), and deepening their understanding of the method over time."
                />
                <CheckItem
                  isGreen={true}
                  label="Specific intake or assessment process"
                  description="A teacher who asks about your movement history, injuries, and goals before your first session is taking your individual needs seriously. This is a strong positive signal."
                />
                <CheckItem
                  isGreen={true}
                  label="Clear verbal and hands-on cueing"
                  description="Effective Pilates instruction combines clear verbal cues with precise, appropriate hands-on guidance. A teacher who relies entirely on demonstration without verbal cueing, or who never touches the body to clarify alignment, is limiting their effectiveness."
                />
                <CheckItem
                  isGreen={true}
                  label="Genuine attention to your progress"
                  description="Does the instructor remember your history from session to session? Do they refer back to what you worked on previously? This continuity indicates genuine investment in your development."
                />
              </div>
            </Section>

            <Section title="Red flags to watch for">
              <div className="space-y-3">
                <CheckItem
                  isGreen={false}
                  label="Vague or evasive answers about training"
                  description="A good instructor is proud of their training and happy to discuss it. Evasiveness about certification details is a warning sign worth taking seriously."
                />
                <CheckItem
                  isGreen={false}
                  label="Classes that are too large"
                  description="Pilates is not a practice that scales well to large groups. More than 12 students in a reformer class means individual attention is effectively impossible. More than 20 in a mat class creates similar problems."
                />
                <CheckItem
                  isGreen={false}
                  label="No intake process for new clients"
                  description="A studio that allows anyone to walk into a group reformer class without any assessment of their experience or physical condition is prioritising booking volume over client safety."
                />
                <CheckItem
                  isGreen={false}
                  label="Pain treated as normal"
                  description="Pilates should be challenging and sometimes uncomfortable in the sense of effort, but should never be painful. An instructor who dismisses reports of pain or discomfort is not managing risk appropriately."
                />
                <CheckItem
                  isGreen={false}
                  label="Rote delivery of the same class"
                  description="A teacher who delivers the exact same class session after session, with no adaptation for the individuals in the room, is not teaching — they are executing a template. Good Pilates instruction is responsive and adaptive."
                />
                <CheckItem
                  isGreen={false}
                  label="Pressure to commit immediately"
                  description="Quality studios are confident in their product and don't need high-pressure sales tactics. A studio that aggressively pushes you to commit to a large package before you've had the chance to assess fit is a warning sign."
                />
              </div>
            </Section>

            <Callout>The right instructor will challenge you, see you clearly, and adapt as your practice evolves. This relationship, when it works, is one of the most valuable you&apos;ll have in your physical life.</Callout>

            <Section title="Questions to ask before committing">
              <p>When evaluating a new instructor or studio, these questions are worth asking directly:</p>
              <ul className="space-y-3 mt-4 list-none">
                {[
                  "Where did you train, and what does your certification cover? How many training hours did it require?",
                  "How long have you been teaching, and what types of clients do you work with most?",
                  "Do you have experience with [my specific concern — back pain, post-partum recovery, athletic performance, rehabilitation]?",
                  "How do you structure the first session for a new client?",
                  "How many clients are in your group reformer classes?",
                  "Do you continue to study or take workshops? With whom?",
                ].map((q, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold" style={{ backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{i + 1}</span>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{q}</p>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Classical vs contemporary teachers">
              <p>One important dimension of instructor choice is whether they teach a classical or contemporary approach to Pilates. Classical instructors follow the original Pilates repertoire closely, teaching the exercises in the order and manner developed by Joseph Pilates and transmitted through teachers like Romana Kryzanowska and Kathy Grant. Contemporary instructors draw on the original method but incorporate modern anatomy, movement science, and rehabilitation principles.</p>
              <p>Neither is inherently superior — the best teacher for you depends on your goals and preferences. Classical instruction tends to be more systematic and rigorous in its adherence to the original method. Contemporary instruction tends to be more adaptable to individual needs and modern rehabilitation contexts.</p>
              <p>What matters most is not the lineage — it is the teacher&apos;s depth of training, their experience, and their genuine attentiveness to you as a mover. A highly trained and experienced teacher of either tradition will serve you far better than a superficially certified instructor of the other.</p>
            </Section>
          </div>
        </section>

        <CTASection title="Find a great Pilates studio near you" subtitle="Use our AI Finder to discover curated studios with vetted instructors — coming soon." showSearch searchPlaceholder="Ask: best private Pilates instruction near me…" />
      </main>
      <Footer />
    </>
  );
}
