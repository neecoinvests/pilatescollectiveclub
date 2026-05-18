import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogHero from "@/components/BlogHero";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "Pilates During Pregnancy (2026): Trimester-by-Trimester Guide | Pilates Collective Club",
  description: "Pilates and pregnancy: safe exercises by trimester, modifications to avoid, and prenatal reformer guidelines from certified instructors. Full guide.",
  openGraph: {
    title: "Pilates and Pregnancy: A Complete Guide",
    description: "How to safely practise Pilates during pregnancy and postpartum — what to do, what to avoid, and how to find a specialist instructor.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/pilates-and-pregnancy",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/juls-p-lB6lbkbe1XA-unsplash.jpg", width: 1200, height: 630, alt: "Pilates and pregnancy guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilates and Pregnancy: A Complete Guide",
    description: "How to safely practise Pilates during pregnancy and postpartum — what to do, what to avoid.",
    images: ["https://pilatescollectiveclub.com/pictures/juls-p-lB6lbkbe1XA-unsplash.jpg"],
  },
  keywords: ["pilates during pregnancy", "prenatal pilates", "pregnancy pilates guide", "pilates when pregnant", "safe pilates exercises pregnancy", "pilates second trimester", "pilates third trimester", "pelvic floor pilates pregnancy", "antenatal pilates", "prenatal pilates 2026"],
  alternates: {
    canonical: "https://pilatescollectiveclub.com/blog/pilates-and-pregnancy",
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://pilatescollectiveclub.com/blog/pilates-and-pregnancy/#article",
      "headline": "Pilates and Pregnancy",
      "description": "Safe, effective Pilates throughout pregnancy — trimester by trimester.",
      "image": {
        "@type": "ImageObject",
        "url": "https://pilatescollectiveclub.com/pictures/juls-p-lB6lbkbe1XA-unsplash.jpg",
        "width": 1200,
        "height": 800,
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
        "logo": {
          "@type": "ImageObject",
          "url": "https://pilatescollectiveclub.com/pictures/pcc-logo.png",
        },
      },
      "datePublished": "2026-05-01",
      "dateModified": "2026-05-12",
      "url": "https://pilatescollectiveclub.com/blog/pilates-and-pregnancy",
      "mainEntityOfPage": "https://pilatescollectiveclub.com/blog/pilates-and-pregnancy",
      "articleSection": "Health",
      "inLanguage": "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Journal", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Pilates and Pregnancy", "item": "https://pilatescollectiveclub.com/blog/pilates-and-pregnancy" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Pilates safe during pregnancy?",
      "acceptedAnswer": { "@type": "Answer", "text": "Pilates is one of the most recommended exercises during pregnancy when modified appropriately. From the second trimester, exercises lying on the back should be limited. Seek an instructor specifically trained in prenatal Pilates." }
    },
    {
      "@type": "Question",
      "name": "When should I stop certain Pilates exercises during pregnancy?",
      "acceptedAnswer": { "@type": "Answer", "text": "From around 16\u201320 weeks, avoid sustained back-lying exercises. High-load abdominal exercises should be modified to prevent diastasis recti strain. Your instructor will adapt the programme as pregnancy progresses." }
    },
    {
      "@type": "Question",
      "name": "What are the benefits of Pilates during pregnancy?",
      "acceptedAnswer": { "@type": "Answer", "text": "Prenatal Pilates supports pelvic floor function, reduces lower back and hip pain, builds the core strength needed for labour, and helps maintain posture as the body's centre of gravity shifts." }
    },
    {
      "@type": "Question",
      "name": "Can I start Pilates for the first time while pregnant?",
      "acceptedAnswer": { "@type": "Answer", "text": "Starting Pilates during pregnancy is possible but requires a specialist prenatal instructor rather than a general class. Always consult your midwife or obstetrician before beginning any new exercise programme." }
    }
      ]
    },
  ],
};
export default function PilatesAndPregnancyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <BlogHero
          imageUrl="/pictures/juls-p-lB6lbkbe1XA-unsplash.jpg"
          imageAlt="Pregnancy Pilates practice"
          category="Health"
          subcategory="8 min read"
          title={<>Pilates and Pregnancy:<br /><span style={{ color: "#8b4a31" }}>A Complete Guide</span></>}
          date="May 2026"
          readTime="8 min read"
        />

        {/* Two-column layout */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 flex flex-col lg:flex-row gap-12 items-start">
          {/* Main article column */}
          <div className="flex-grow min-w-0" style={{ maxWidth: "720px" }}>

            <section className="pb-20">
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
            </section>
          </div>

          <BlogSidebar related={[
            { title: "How to Choose a Pilates Instructor", href: "/blog/how-to-choose-a-pilates-instructor", readTime: "6 min read", imageUrl: "/pictures/roxana-popovici-hiHBILFNah4-unsplash.jpg" },
            { title: "Pilates for Back Pain", href: "/blog/pilates-for-back-pain", readTime: "9 min read", imageUrl: "/pictures/junseong-lee-AX8cf6mkCzw-unsplash.jpg" },
            { title: "The Beginner's Guide to Reformer Pilates", href: "/blog/beginners-guide-to-reformer-pilates", readTime: "8 min read", imageUrl: "/pictures/esma-eserghep-NUQi80iMLrI-unsplash.jpg" },
          ]} />
        </div>
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
