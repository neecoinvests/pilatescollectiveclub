import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "How to Build a Consistent Pilates Practice | Pilates Collective Club",
  description:
    "Practical strategies for making Pilates a lasting habit — even with a demanding schedule. Frequency, environment, mindset, and the habits that make the difference.",
};

const RELATED = [
  {
    title: "Best Pilates Equipment for Home Practice",
    excerpt: "Everything you need to build a practice between studio sessions.",
    href: "/blog/best-pilates-equipment-for-home-practice",
    category: "Equipment",
    readTime: "10 min read",
    date: "May 2026",
  },
  {
    title: "The Beginner's Guide to Reformer Pilates",
    excerpt: "What to expect in your first reformer class and how to progress.",
    href: "/blog/beginners-guide-to-reformer-pilates",
    category: "Beginner Guide",
    readTime: "8 min read",
    date: "May 2026",
  },
];

export default function ConsistentPracticePage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Lifestyle</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              How to Build a Consistent<br />
              <span style={{ color: "#8b4a31" }}>Pilates Practice</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 7 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Pilates is a practice that compounds. The difference between someone who has been practising for three months and someone who has been practising for three years is profound — not just physically, but in the quality of attention, the depth of body awareness, and the ease with which they inhabit their body. Getting to that three-year mark requires consistency, and consistency requires more than motivation.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "380px" }}>
              <Image
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1400&q=80"
                alt="Consistent wellness practice"
                fill className="object-cover" style={{ filter: "brightness(0.88)" }}
              />
            </div>
          </div>
        </section>

        <article className="px-6 pb-24">
          <div className="max-w-3xl mx-auto">

            <Section title="Start with frequency, not intensity">
              <p>The most common mistake new practitioners make is treating early Pilates sessions like HIIT classes — pushing through fatigue, booking daily sessions, then burning out or getting injured within the first month. Pilates is a skill acquisition practice. Neural adaptation takes time, and the early sessions are about learning to feel, not about performing.</p>
              <p>Two sessions per week is the optimal starting frequency for most adults. This is enough to build muscle memory between classes without overwhelming the body&apos;s recovery capacity. Once you&apos;ve been consistent at two sessions for six to eight weeks, adding a third is the natural next step.</p>
              <p>The &quot;more is more&quot; logic that works for some forms of training simply doesn&apos;t apply here. A practitioner who has done two sessions a week for twelve months has a more sophisticated practice than one who did daily classes for six weeks.</p>
            </Section>

            <Callout>
              You don&apos;t need to feel exhausted after every session to know it worked. The reformer operates in subtler registers than that.
            </Callout>

            <Section title="Remove the friction from booking">
              <p>Consistency lives in the systems around your practice, not in willpower. If booking your classes requires navigating a difficult website, calling the studio, or making a decision each time, you&apos;ll book less often. The lower the friction, the higher the attendance.</p>
              <p>Choose a studio with a good app and book recurring weekly slots rather than making fresh decisions each week. If Tuesday at 7am works, block it permanently and treat it as an unscheduled appointment — not a preference. Most quality studios allow recurring bookings for members, and using this feature is one of the single most reliable predictors of long-term consistency.</p>
              <p>Lay out your grip socks, water bottle, and bag the night before. Keep a spare set of grip socks in your gym bag permanently. These small preparations reduce the chance that a minor inconvenience becomes an excuse not to go.</p>
            </Section>

            <Section title="Build a home practice alongside studio work">
              <p>A ten-minute daily movement practice at home — even without equipment — dramatically accelerates progression compared to studio-only work. Short sequences of matwork: the Hundred, rolling exercises, single-leg stretches, and standing footwork patterns don&apos;t require a reformer and take less time than it sounds.</p>
              <p>The value of home practice isn&apos;t primarily physical — it&apos;s about building the habit of tuning in to your body on a daily basis. Pilates practitioners who maintain some form of daily movement, even brief, develop a relationship with their bodies that shows unmistakably in the quality of their studio work.</p>
              <p>Start with five minutes. Five minutes is achievable on almost any day, regardless of schedule. A simple sequence of ten repetitions each — breath, chest lift, single-leg stretch, spine stretch forward — is enough to maintain the thread between sessions and begin developing the daily body-awareness habit that characterises serious practitioners.</p>
            </Section>

            <Section title="Track your progress in a way that motivates you">
              <p>Pilates progress is not always visible in the ways conventional fitness culture trains us to expect. You may not lose significant weight. You may not be able to quantify the work in reps and sets. What you will notice — if you pay attention — is functional: you sit more easily, stand more comfortably, move with less effort, sleep better.</p>
              <p>Keep a simple practice journal. Not an elaborate log, but a sentence or two after each session: what you noticed, what felt different, what was hard. Over weeks and months, this journal becomes a record of progress that is far more motivating than any fitness metric — because it tracks the thing that Pilates actually changes, which is the quality of your relationship to your body.</p>
            </Section>

            <Section title="Give it three months before evaluating">
              <p>People who quit Pilates before month three typically do so because they expected results that the method doesn&apos;t deliver in that timeframe — or because they chose a studio that wasn&apos;t right for them. Neither is a reason to abandon the practice.</p>
              <p>If a studio isn&apos;t working, change studios. The right teacher changes everything. Finding them may take a few tries, and that&apos;s fine. Once you find a teacher and a studio that resonates, commit to three months of consistent attendance before making any assessment. The practice reveals itself slowly, and almost always on its own schedule.</p>
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

        <CTASection title="Find your studio" subtitle="Browse our city guides to find a studio you&apos;ll return to, again and again." showSearch searchPlaceholder="Ask: best Pilates studios near me…" />
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
