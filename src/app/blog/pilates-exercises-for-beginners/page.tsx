import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import BlogHero from "@/components/BlogHero";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "Pilates Exercises for Beginners (2026): 15 Moves to Start | Pilates Collective Club",
  description: "15 foundational Pilates exercises for beginners — reformer and mat moves explained with modifications, spring settings, and progression tips for new practitioners.",
  openGraph: {
    title: "10 Pilates Exercises for Beginners: The Essential Foundation",
    description: "The Hundred, Roll Up, Single Leg Stretch — the 10 exercises every beginner should master before anything else.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/pilates-exercises-for-beginners",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg", width: 1200, height: 630, alt: "Pilates Exercises for Beginners — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "10 Pilates Exercises for Beginners",
    description: "The 10 foundational Pilates exercises every beginner should master first.",
    images: ["https://pilatescollectiveclub.com/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg"],
  },
  keywords: ["pilates exercises for beginners", "beginner pilates moves 2026", "easy pilates exercises", "pilates starter exercises", "pilates reformer exercises beginners", "simple pilates mat moves", "foundational pilates exercises", "pilates workout beginners"],
  alternates: {
    canonical: "https://pilatescollectiveclub.com/blog/pilates-exercises-for-beginners",
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const exercises = [
  {
    number: "01",
    name: "The Hundred",
    trains: "Deep abdominals, breath coordination, spinal stability",
    description: "Lie on your back with knees bent to tabletop. Lift your head and shoulders into a slight curl. Pump your arms up and down in small, controlled movements — 5 counts inhaling, 5 counts exhaling — for 100 pumps total. The pumping arms drive the breath; the stable torso is the point.",
    mistake: "Pulling the neck with the hands. Your head should be cradled, not gripped, and the lift should come from the abdominals, not the neck flexors.",
    progression: "2-4 weeks of daily practice with knees bent. Progress to legs at 45 degrees only when the lower back doesn't lift off the mat.",
  },
  {
    number: "02",
    name: "The Roll Up",
    trains: "Spinal articulation, abdominal strength, hip flexor length",
    description: "Lie flat with arms extended overhead. Inhale to prepare, then exhale as you peel the spine off the mat sequentially from the head down — vertebra by vertebra — reaching forward over your legs. Inhale at the top, then reverse the process back to flat.",
    mistake: "Using momentum to throw yourself upright. The Roll Up should be controlled and sequential — if you can't do it smoothly, return to the Half Roll Back as a preliminary exercise.",
    progression: "Master with knees slightly bent if the hamstrings limit range. Straight legs are the target.",
  },
  {
    number: "03",
    name: "Single Leg Circle",
    trains: "Hip mobility, pelvic stability, core control",
    description: "Lie flat with one leg extended toward the ceiling. Draw a circle with the working leg, stabilising the pelvis completely throughout. The pelvis should not rock, shift, or lift — only the leg moves. 5 circles each direction, then switch legs.",
    mistake: "Allowing the hip to lift or rock. If the circle is small enough to keep the pelvis completely still, it's the right size. Too large a circle is cheating — the work is in the stability, not the range.",
    progression: "Begin with small circles. Increase the circle size only when pelvic stability is consistent.",
  },
  {
    number: "04",
    name: "Rolling Like a Ball",
    trains: "Spinal massage, abdominal control, breath awareness",
    description: "Sit at the front of your mat, knees to chest, feet lifted, spine rounded into a C-curve. Balance on your tailbone. Inhale as you roll back to the shoulder blades; exhale as you roll forward to the starting balance point. Do not roll onto the neck.",
    mistake: "Flinging backward and crashing. The movement should be controlled — the exhale on the forward roll engages the deep abdominals to control the return.",
    progression: "If rolling feels uncontrolled, practice the C-curve balance position alone first. Build the core control before adding the roll.",
  },
  {
    number: "05",
    name: "Single Leg Stretch",
    trains: "Abdominal endurance, coordination, hip flexor mobility",
    description: "Lie on your back in a slight curl. Draw one knee to chest while extending the other leg. Alternate legs in a rhythmic, coordinated pattern — right hand to outside ankle, left hand to inside knee on the right leg. Maintain the chest lift throughout.",
    mistake: "Losing the abdominal engagement as the legs move. The legs are the expression; the stable, lifted torso is the work. If the lower back rises off the mat, the legs are too low or the abdominals have lost connection.",
    progression: "Begin with legs at a high angle (60-70 degrees). Lower the extended leg toward the floor only as core control improves.",
  },
  {
    number: "06",
    name: "Double Leg Stretch",
    trains: "Core integration, breath coordination, spinal stability",
    description: "From Single Leg Stretch position, draw both knees to chest. Inhale as you extend both arms and legs away from the centre simultaneously. Exhale as you circle the arms back around and draw the knees in. The movement of the limbs away from the centre while the core holds is the central challenge.",
    mistake: "Allowing the lower back to arch as the legs extend. The moment the back lifts, the core has disengaged. Reduce the challenge by keeping the extended legs higher or limiting the reach of the arms.",
    progression: "Legs at 60-70 degrees initially. Progress to lower angles as core control improves.",
  },
  {
    number: "07",
    name: "Spine Stretch Forward",
    trains: "Spinal flexion, hamstring length, postural awareness",
    description: "Sit upright with legs extended wider than hip width, feet flexed. Inhale to grow tall. Exhale as you reach forward, rounding the spine sequentially from the crown of the head. The goal is not to reach the feet but to create length in each vertebra. Inhale to return.",
    mistake: "Hinging forward from the hips with a flat back rather than rounding the spine. Spine Stretch Forward is a spinal articulation exercise, not a hamstring stretch — the round is intentional.",
    progression: "If hamstring tightness prevents upright sitting, sit on a rolled blanket to tilt the pelvis forward.",
  },
  {
    number: "08",
    name: "The Bridge",
    trains: "Glutes, hamstrings, spinal articulation, pelvic stability",
    description: "Lie on your back with knees bent, feet hip-width apart and parallel. Inhale to prepare. Exhale as you tilt the pelvis and peel the spine off the mat vertebra by vertebra until the hips are in a straight line from knees to shoulders. Inhale at the top. Exhale to lower sequentially.",
    mistake: "Popping up to full extension without articulating the spine. The sequential quality — each vertebra peeling off and returning — is the Pilates distinction. Treat it as a massage for the spine, not simply a glute exercise.",
    progression: "Single-leg bridge (one foot lifted) is the natural progression once the two-leg version is stable and sequential.",
  },
  {
    number: "09",
    name: "Swan / Swimming",
    trains: "Spinal extension, posterior chain, breath integration",
    description: "Lie prone (face down) with hands under the shoulders. Inhale to lengthen; exhale to lift the chest using the back muscles, not the hands. The arms support but do not push. For Swimming: extend into a hover and alternate lifting opposite arm and leg while maintaining torso stability and a rapid, coordinated breath pattern.",
    mistake: "Compressing the lower back rather than lengthening and lifting. The sensation should be of the spine getting longer, not shorter. If there is pinching in the lower back, reduce the range of motion significantly.",
    progression: "Swan before Swimming. Ensure comfortable prone extension before adding the coordination challenge of the Swimming pattern.",
  },
  {
    number: "10",
    name: "Side Kicks",
    trains: "Hip abductors, core lateral stability, hip flexor length",
    description: "Lie on your side in a straight line. Lift the top leg to hip height. Kick forward with a pulsed double beat; sweep back with control. The torso remains completely still — no rocking, no collapsing. The challenge is maintaining the stable side position while the leg moves freely.",
    mistake: "Rolling the pelvis forward or back with each kick. Place one hand in front of the navel and feel for movement — if the hand moves, the pelvis is rotating. Reduce the leg's range until the pelvis stays square.",
    progression: "Progress through the full side-lying series: front/back, circles, inner thigh lifts, and banana before adding ankle weights.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://pilatescollectiveclub.com/blog/pilates-exercises-for-beginners/#article",
      "headline": "10 Pilates Exercises for Beginners: The Essential Starting Point",
      "description": "The 10 foundational Pilates exercises every beginner should master first — with correct technique, common mistakes, and progression guidance.",
      "image": {
        "@type": "ImageObject",
        "url": "https://pilatescollectiveclub.com/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg",
        "width": 1200,
        "height": 630,
      },
      "author": {
        "@type": "Organization",
        "@id": "https://pilatescollectiveclub.com/#organization",
        "name": "Pilates Collective Club",
        "url": "https://pilatescollectiveclub.com",
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://pilatescollectiveclub.com/#organization",
        "name": "Pilates Collective Club",
        "logo": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/pcc-logo.png" },
      },
      "datePublished": "2026-05-01",
      "dateModified": "2026-05-17",
      "url": "https://pilatescollectiveclub.com/blog/pilates-exercises-for-beginners",
      "mainEntityOfPage": "https://pilatescollectiveclub.com/blog/pilates-exercises-for-beginners",
      "articleSection": "Beginners",
      "inLanguage": "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Pilates Exercises for Beginners", "item": "https://pilatescollectiveclub.com/blog/pilates-exercises-for-beginners" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How often should a beginner do Pilates?",
          "acceptedAnswer": { "@type": "Answer", "text": "2-3 sessions per week is the recommended starting frequency. This gives your body time to adapt between sessions while building the neural connections needed for proper movement patterning. After 6-8 weeks, many beginners move to 3-4 sessions per week." }
        },
        {
          "@type": "Question",
          "name": "Do you need equipment for beginner Pilates?",
          "acceptedAnswer": { "@type": "Answer", "text": "A good mat is the only essential. A 6mm or thicker mat provides the spinal cushioning needed for mat work. The magic circle, resistance bands, and Pilates ball are excellent supplemental tools once the foundational exercises are established." }
        },
        {
          "@type": "Question",
          "name": "How long should a beginner Pilates session be?",
          "acceptedAnswer": { "@type": "Answer", "text": "30-45 minutes is the ideal beginner session length. This is long enough to warm up, cover 6-10 exercises properly, and cool down — but short enough that technique doesn't deteriorate from fatigue. Quality of movement matters more than duration." }
        },
        {
          "@type": "Question",
          "name": "Is Pilates hard for beginners?",
          "acceptedAnswer": { "@type": "Answer", "text": "The movements appear simple but demand genuine concentration. The first 10-15 sessions are often humbling — stabilising the pelvis during leg movements, finding the deep abdominals, and maintaining spinal elongation simultaneously are skills that take weeks to develop. Progress is consistent and measurable, which is what keeps beginners engaged." }
        },
      ],
    },
  ],
};

export default function PilatesExercisesForBeginnersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <BlogHero
          imageUrl="/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg"
          imageAlt="Beginner Pilates mat practice"
          category="Beginners"
          subcategory="Exercise Guide"
          title={<>10 Pilates Exercises<br /><span style={{ color: "#8b4a31" }}>for Beginners</span></>}
          date="Updated May 2026"
          readTime="11 min read"
        />

        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-grow min-w-0" style={{ maxWidth: "720px" }}>

            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>

            <section className="pb-20">
              <p className="text-lg leading-relaxed mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
                Joseph Pilates developed his method as a progression — each exercise building on the last, each skill creating the foundation for the next. The 10 exercises in this guide are the most fundamental in the mat repertoire. Master these before progressing to the teaser, the corkscrew, or the scissors. The foundation is everything in Pilates.
              </p>

              <p className="text-base leading-relaxed mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                For home practice, all you need is a quality mat — the{" "}
                <a href="https://www.amazon.com/s?k=manduka+pro+pilates+mat&tag=pilatescollective-20" target="_blank" rel="noopener noreferrer sponsored" style={{ color: "#8b4a31", fontWeight: 600 }}>Manduka PRO</a>{" "}
                or{" "}
                <a href="https://www.amazon.com/s?k=liforme+pilates+mat&tag=pilatescollective-20" target="_blank" rel="noopener noreferrer sponsored" style={{ color: "#8b4a31", fontWeight: 600 }}>Liforme</a>{" "}
                are the two most recommended options for beginners. A 6mm thickness provides adequate spinal cushioning for the roll-down exercises. See our{" "}
                <a href="/blog/best-pilates-mat" style={{ color: "#8b4a31", fontWeight: 600 }}>full mat guide here</a>.
              </p>

              <div className="space-y-12 mb-16">
                {exercises.map((ex) => (
                  <div key={ex.name} className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.35)" }}>
                    <div className="px-6 py-5" style={{ backgroundColor: "#f6f3f2", borderBottom: "1px solid rgba(217,194,186,0.35)" }}>
                      <div className="flex items-center gap-4">
                        <span className="text-2xl font-semibold" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{ex.number}</span>
                        <div>
                          <h2 className="text-xl font-semibold" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{ex.name}</h2>
                          <p className="text-xs mt-1" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>{ex.trains}</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-6 py-5 bg-white space-y-4">
                      <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{ex.description}</p>
                      <div className="rounded-lg p-4" style={{ backgroundColor: "#fdf5f3", border: "1px solid rgba(139,74,49,0.15)" }}>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Common mistake</p>
                        <p className="text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{ex.mistake}</p>
                      </div>
                      <div className="rounded-lg p-4" style={{ backgroundColor: "#f0f7f1", border: "1px solid rgba(83,98,87,0.2)" }}>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Progression</p>
                        <p className="text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{ex.progression}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
                <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Equipment for your first Pilates kit</h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                  These 10 exercises require only a mat. But as you build consistency, a few accessories enhance the experience significantly:
                </p>
                <ul className="space-y-2 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                  <li>A{" "}<a href="https://www.amazon.com/s?k=pilates+magic+circle+ring&tag=pilatescollective-20" target="_blank" rel="noopener noreferrer sponsored" style={{ color: "#8b4a31", fontWeight: 600 }}>Pilates magic circle</a>{" "}adds resistance to the inner thigh, arm, and abdominal work.</li>
                  <li><a href="https://www.amazon.com/s?k=pilates+resistance+bands+long&tag=pilatescollective-20" target="_blank" rel="noopener noreferrer sponsored" style={{ color: "#8b4a31", fontWeight: 600 }}>Long resistance bands</a>{" "}extend the arm and leg work and substitute for a reformer in some rowing exercises.</li>
                  <li>A{" "}<a href="https://www.amazon.com/s?k=pilates+small+ball+mini&tag=pilatescollective-20" target="_blank" rel="noopener noreferrer sponsored" style={{ color: "#8b4a31", fontWeight: 600 }}>Pilates small ball</a>{" "}adds proprioceptive challenge and supports the lower back in some exercises.</li>
                </ul>
              </div>

              <div className="mb-16">
                <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
                <div className="space-y-6">
                  {[
                    { q: "How often should a beginner do Pilates?", a: "2-3 sessions per week is the recommended starting frequency. This gives your body time to adapt between sessions while building the neural connections needed for proper movement patterning. After 6-8 weeks, many beginners move to 3-4 sessions per week." },
                    { q: "Do you need equipment for beginner Pilates?", a: "A good mat is the only essential. A 6mm or thicker mat provides the spinal cushioning needed for mat work. The magic circle, resistance bands, and Pilates ball are excellent supplemental tools once the foundational exercises are established." },
                    { q: "How long should a beginner Pilates session be?", a: "30-45 minutes is the ideal beginner session length. This is long enough to warm up, cover 6-10 exercises properly, and cool down — but short enough that technique doesn't deteriorate from fatigue. Quality of movement matters more than duration." },
                    { q: "Is Pilates hard for beginners?", a: "The movements appear simple but demand genuine concentration. The first 10-15 sessions are often humbling — stabilising the pelvis during leg movements, finding the deep abdominals, and maintaining spinal elongation simultaneously are skills that take weeks to develop. Progress is consistent and measurable, which is what keeps beginners engaged." },
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
                  <ArticleCard title="Best Pilates Mat (2026)" excerpt="Five mats ranked for beginners — firmness, grip, and spinal cushioning." href="/blog/best-pilates-mat" category="Equipment" readTime="9 min read" date="May 2026" imageUrl="/pictures/dane-wetton-t1NEMSm1rgI-unsplash.jpg" />
                  <ArticleCard title="Best Pilates Starter Kit (2026)" excerpt="Everything to buy first — mat, grip socks, bands, ring — in the right order." href="/blog/best-pilates-starter-kit" category="Beginners" readTime="9 min read" date="May 2026" imageUrl="/pictures/roxana-popovici-Zp4APUiwEsM-unsplash.jpg" />
                </div>
              </div>
            </section>
          </div>

          <BlogSidebar related={[
            { title: "Best Pilates Mat (2026)", href: "/blog/best-pilates-mat", readTime: "9 min read", imageUrl: "/pictures/dane-wetton-t1NEMSm1rgI-unsplash.jpg" },
            { title: "Best Pilates Starter Kit", href: "/blog/best-pilates-starter-kit", readTime: "9 min read", imageUrl: "/pictures/roxana-popovici-Zp4APUiwEsM-unsplash.jpg" },
            { title: "How Often Should You Do Pilates?", href: "/blog/how-often-should-you-do-pilates", readTime: "7 min read", imageUrl: "/pictures/roxana-popovici-2QeonB1SdQk-unsplash.jpg" },
          ]} />
        </div>
      </main>
      <Footer />
    </>
  );
}
