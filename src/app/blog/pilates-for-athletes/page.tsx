import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Pilates for Athletes | Pilates Collective Club",
  description: "How elite sports professionals use Pilates to build functional strength, prevent injury, and extend their careers — and what recreational athletes can learn from them.",
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

function SportCard({ sport, benefit, detail }: { sport: string; benefit: string; detail: string }) {
  return (
    <div className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.35)" }}>
      <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-2" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{sport}</p>
      <h3 className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{benefit}</h3>
      <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{detail}</p>
    </div>
  );
}

export default function PilatesForAthletesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Performance</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>7 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Pilates for Athletes:<br /><span style={{ color: "#8b4a31" }}>Strength, Longevity, and the Competitive Edge</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>May 2026 · By the Pilates Collective Club editors</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              The list of elite athletes who have integrated Pilates into their training is long and growing: professional footballers, Olympic swimmers, NBA players, professional cyclists, touring tennis professionals. This isn&apos;t a trend — it&apos;s a considered response to what Pilates specifically offers that conventional athletic training does not. This guide explains the mechanism, the evidence, and the practical application for athletes at every level.
            </p>
          </div>
        </section>

        <section className="px-6 pb-20 pt-12">
          <div className="max-w-3xl mx-auto">
            <Section title="Why elite athletes turn to Pilates">
              <p>At the highest levels of sport, marginal gains determine outcomes. Athletes and their support teams are always looking for training interventions that improve performance, reduce injury risk, or extend careers. Pilates has become part of many elite programmes for a specific reason: it addresses the foundational movement quality that conventional sports training often neglects.</p>
              <p>Most athletic training is sport-specific and often dominated by primary movers — the large muscle groups most involved in the sport&apos;s demands. This develops impressive power and skill, but frequently at the expense of the stabilising muscles and movement control that protect joints and allow forces to be transmitted efficiently through the body. Pilates targets exactly this.</p>
              <p>The result, for most athletes who integrate Pilates seriously, is not a dramatic change in strength metrics — it&apos;s a qualitative improvement in how the body moves and absorbs force, which over time translates to fewer injuries, faster recovery, and often measurable performance improvement in sport-specific skills.</p>
            </Section>

            <Callout>Pilates doesn&apos;t make you stronger in the way a weight room does. It makes your existing strength more available — more efficiently delivered through a better-organised body.</Callout>

            <Section title="What Pilates specifically develops for athletes">
              <p><strong style={{ color: "#1b1c1c" }}>Deep core stability.</strong> The transversus abdominis, multifidus, pelvic floor, and diaphragm form a cylinder of support around the spine. Athletic training rarely specifically targets these muscles, which are too deep and too stabilising in function to be effectively worked through conventional exercises. Pilates is explicitly designed to develop this deep system — and the difference it makes to spinal stability, power transfer, and injury resilience is significant.</p>
              <p><strong style={{ color: "#1b1c1c" }}>Spinal mobility and articulation.</strong> Pilates requires the spine to move in all directions — flexion, extension, lateral flexion, rotation — with control. For athletes whose sports involve repetitive, unidirectional movement (cyclists, swimmers, rowers), the spinal mobility and symmetry that Pilates develops is particularly valuable.</p>
              <p><strong style={{ color: "#1b1c1c" }}>Hip function and gluteal activation.</strong> Weak or poorly coordinated gluteal muscles are implicated in a huge range of sports injuries — from knee problems to lower back pain to hamstring strains. Pilates is exceptionally effective at developing gluteal strength and the neuromuscular coordination needed to activate these muscles at the right moment during athletic movement.</p>
              <p><strong style={{ color: "#1b1c1c" }}>Body awareness and proprioception.</strong> Pilates demands continuous attention to body position, movement quality, and the relationship between body parts. This cultivated proprioception — the body&apos;s sense of itself in space — transfers directly to athletic performance, particularly in sports requiring balance, coordination, and reactive movement.</p>
              <p><strong style={{ color: "#1b1c1c" }}>Breathing under load.</strong> The Pilates method teaches coordinated breathing that supports movement — exhaling through effort, using breath to support the core. For athletes competing in endurance sports or high-intensity disciplines, this conscious relationship between breath and physical effort has practical performance implications.</p>
            </Section>

            <Section title="Sport-specific applications">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
                <SportCard
                  sport="Cycling"
                  benefit="Spinal endurance and hip symmetry"
                  detail="The sustained forward lean of road cycling shortens hip flexors and loads the lower back asymmetrically over thousands of kilometres. Pilates counteracts these adaptations, maintaining spinal health and hip mobility across a long season."
                />
                <SportCard
                  sport="Swimming"
                  benefit="Shoulder stability and thoracic rotation"
                  detail="Competitive swimming demands extraordinary shoulder mobility under load. Pilates develops the rotator cuff stability and thoracic rotation that protect swimmers&apos; shoulders and improve stroke efficiency."
                />
                <SportCard
                  sport="Tennis & Racket Sports"
                  benefit="Rotational power and injury prevention"
                  detail="Tennis is a sport of powerful rotation repeated thousands of times per season. Pilates develops the deep rotators and spinal stabilisers that make this rotation more powerful and far less likely to produce injury."
                />
                <SportCard
                  sport="Football & Field Sports"
                  benefit="Hip function and deceleration mechanics"
                  detail="Groin injuries are among the most common in football. Pilates is used by several elite clubs as preventive training for the hip complex — developing the strength and coordination that protect against the rapid direction changes that injure poorly prepared hips."
                />
                <SportCard
                  sport="Running"
                  benefit="Pelvic stability and gait efficiency"
                  detail="Pelvic drop — the pelvis tilting laterally with each stride — is among the most common biomechanical faults in runners and a contributor to IT band syndrome, patellofemoral pain, and hip injuries. Pilates-trained lateral hip stability addresses this directly."
                />
                <SportCard
                  sport="Golf"
                  benefit="Rotational sequencing and spinal health"
                  detail="The golf swing is one of sport&apos;s most demanding rotational movements. Pilates improves the thoraco-lumbar dissociation and sequential rotation that creates clubhead speed while protecting the lumbar spine from the repetitive torque of thousands of swings."
                />
              </div>
            </Section>

            <Callout>The athletes who benefit most from Pilates are not those who add it as a supplement — it&apos;s those who integrate it as a foundational part of how they train.</Callout>

            <Section title="How to integrate Pilates into an athletic training programme">
              <p><strong style={{ color: "#1b1c1c" }}>Start with private sessions.</strong> Athletes bringing specific movement patterns, training loads, and performance goals need individualised attention that group classes cannot provide. A good Pilates instructor will assess your movement, identify sport-specific imbalances, and design a programme that addresses them. This investment at the start pays dividends throughout.</p>
              <p><strong style={{ color: "#1b1c1c" }}>Treat it as training, not recovery.</strong> Pilates is sometimes positioned as a recovery or cross-training modality — something to do on rest days. It is more productive when treated as a performance intervention that receives the same attention and consistency as primary training. Two sessions per week, done seriously and consistently, will produce measurable results over 8–12 weeks.</p>
              <p><strong style={{ color: "#1b1c1c" }}>Communicate with your teacher.</strong> The best Pilates instructors who work with athletes want to understand your training load, your sport&apos;s physical demands, and any injuries or areas of concern. This dialogue shapes the programme and prevents the Pilates work from conflicting with peak training periods.</p>
              <p><strong style={{ color: "#1b1c1c" }}>Look for sport-specific experience.</strong> Not all Pilates instructors have experience working with athletes. Look for teachers with backgrounds in rehabilitation, sports physiotherapy, or explicit experience training competitive athletes. They will understand load management, periodisation, and the specific demands of athletic training in a way that general instructors may not.</p>
            </Section>

            <Section title="The recreational athlete">
              <p>Everything above applies with equal force to recreational athletes — the weekend cyclist, the club-level tennis player, the habitual runner. The physical demands are lower than elite sport, but the fundamental mechanism is the same: Pilates builds the foundation that makes athletic movement more efficient and more durable.</p>
              <p>For recreational athletes, the injury prevention benefit is arguably the most significant. Recreational sport has high injury rates, partly because the participants train hard enough to incur overuse injuries but lack the professional support systems that manage these risks in elite athletes. Pilates provides a meaningful degree of the structural protection that professional athletes access through their full support teams.</p>
              <p>If you run, cycle, play tennis, swim competitively, or participate seriously in any physical sport — Pilates is not a luxury. It is, as the evidence increasingly suggests, one of the most valuable investments you can make in the longevity and quality of your athletic life.</p>
            </Section>
          </div>
        </section>

        <CTASection title="Find a Pilates studio near you" subtitle="Use our AI Finder to discover curated studios in your city — coming soon." showSearch searchPlaceholder="Ask: best Pilates studios for athletes near me…" />
      </main>
      <Footer />
    </>
  );
}
