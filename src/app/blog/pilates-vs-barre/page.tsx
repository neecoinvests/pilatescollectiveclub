import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogHero from "@/components/BlogHero";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import BlogSidebar from "@/components/BlogSidebar";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Pilates vs Barre (2026): Which Workout Is Right for You? | Pilates Collective Club",
  description: "Pilates vs barre — a clear breakdown of their differences in core focus, equipment, injury benefit, cardio, and cost, so you can choose the right discipline for your goals.",
  keywords: [
    "pilates vs barre",
    "barre vs pilates differences",
    "pilates or barre for beginners",
    "pilates vs barre for weight loss",
    "pilates vs barre for toning",
    "reformer pilates vs barre",
    "barre pilates comparison",
    "pilates vs barre which is better",
    "pilates barre difference",
    "pilates vs barre for back pain",
  ],
  openGraph: {
    title: "Pilates vs Barre (2026): Which Is Right for You?",
    description: "Pilates vs barre — how they differ in core focus, equipment, rehabilitation, cardio, and cost. Everything you need to choose the right discipline.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/pilates-vs-barre",
    images: [
      {
        url: "https://pilatescollectiveclub.com/pictures/roxana-popovici-5JQxj-zc5ng-unsplash.jpg",
        width: 1200,
        height: 630,
        alt: "Pilates vs Barre — Pilates Collective Club",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilates vs Barre (2026): Which Is Right for You?",
    description: "Pilates vs barre — how they differ in core focus, equipment, rehabilitation, cardio, and cost. Everything you need to choose.",
    images: ["https://pilatescollectiveclub.com/pictures/roxana-popovici-5JQxj-zc5ng-unsplash.jpg"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/blog/pilates-vs-barre",
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Pilates vs Barre (2026): Which Workout Is Right for You?",
      "url": "https://pilatescollectiveclub.com/blog/pilates-vs-barre",
      "datePublished": "2026-05-16",
      "dateModified": "2026-05-16",
      "image": {
        "@type": "ImageObject",
        "url": "https://pilatescollectiveclub.com/pictures/roxana-popovici-5JQxj-zc5ng-unsplash.jpg",
        "width": 1200,
        "height": 630,
      },
      "author": {
        "@type": "Organization",
        "name": "Pilates Collective Club",
        "url": "https://pilatescollectiveclub.com",
      },
      "publisher": {
        "@type": "Organization",
        "name": "Pilates Collective Club",
        "url": "https://pilatescollectiveclub.com",
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://pilatescollectiveclub.com/blog/pilates-vs-barre",
      },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Pilates vs Barre",
          "item": "https://pilatescollectiveclub.com/blog/pilates-vs-barre",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Pilates or barre better for beginners?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Barre tends to be more immediately accessible for beginners — the format is familiar, equipment is minimal, and the high-rep structure is easy to follow even without prior movement training. Pilates, particularly reformer Pilates, has a steeper initial learning curve due to the apparatus and the precision required. That said, well-run beginner reformer classes are designed specifically for newcomers and many people find them highly accessible. Both are excellent starting points — it depends on whether you prefer a more intuitive entry (barre) or a more structured, technique-driven one (Pilates).",
          },
        },
        {
          "@type": "Question",
          "name": "Which burns more calories, Pilates or barre?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Barre classes typically burn more calories per session than a standard Pilates mat or reformer class, owing to the faster pace, more sustained muscle fatigue, and occasional cardiovascular sequences. Estimates for barre range from 250–400 calories per 55-minute session; Pilates tends toward 180–320 calories depending on intensity and format. However, neither discipline is primarily a calorie-burning tool — both develop body composition, strength, and movement quality that support long-term metabolic health in ways that raw calorie figures don't capture.",
          },
        },
        {
          "@type": "Question",
          "name": "Is barre considered Pilates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Barre and Pilates are distinct disciplines with different origins, principles, and equipment. Barre derives from ballet barre conditioning and was popularised as a studio fitness format by Lotte Berk in the 1950s. Pilates was developed by Joseph Pilates and is centred on controlled movement, deep core engagement, and spinal articulation. Some studios offer hybrid 'Pilates barre' classes that blend elements of both, but these are fusion formats — not the same as either method practised on its own terms.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I do both Pilates and barre in the same week?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — and many practitioners do. The two methods complement each other well. Barre provides muscular endurance, leg conditioning, and a degree of cardiovascular stimulus that Pilates generally does not. Pilates provides deep core work, spinal health, and movement precision that barre does not address as thoroughly. A common approach is two to three Pilates sessions per week alongside one or two barre classes. The main consideration is recovery: if barre leaves your legs heavily fatigued, give them 48 hours before a demanding Pilates session.",
          },
        },
      ],
    },
  ],
};

export default function PilatesVsBarrePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Journal", href: "/blog" }, { label: "Pilates vs Barre (2026): Which Workout Is Right for You?" }]} />
      <main>
        <BlogHero
          imageUrl="/pictures/roxana-popovici-5JQxj-zc5ng-unsplash.jpg"
          imageAlt="Pilates and barre comparison — studio movement practice"
          category="Guide"
          subcategory="Comparison"
          title={
            <>
              Pilates vs Barre:<br />
              <span style={{ color: "#c5a882" }}>Which Is Right for You?</span>
            </>
          }
          date="May 2026"
          readTime="8 min read"
        />

        {/* Two-column layout */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 flex flex-col lg:flex-row gap-12 items-start">
          {/* Main article column */}
          <div className="flex-grow min-w-0" style={{ maxWidth: "720px" }}>

            {/* Intro */}
            <div className="mb-14">
              <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
                At first glance, Pilates and barre occupy the same corner of the fitness landscape: low-impact, studio-based, broadly &ldquo;feminine&rdquo; in cultural perception, and associated with a lean, controlled physicality. But practised seriously, they are quite different disciplines — different in origin, in what they train, in the equipment they require, and in who they genuinely serve best. If you&rsquo;re deciding between them, this guide gives you an honest answer.
              </p>
            </div>

            {/* What is each? */}
            <Section title="What is each discipline?">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
                {/* Pilates card */}
                <div
                  className="rounded-xl p-6"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid rgba(217,194,186,0.3)",
                    borderRadius: "12px",
                    padding: "24px",
                  }}
                >
                  <h3
                    className="text-base font-semibold mb-3"
                    style={{ color: "#8b4a31", fontFamily: "'Playfair Display', serif", fontSize: "17px" }}
                  >
                    Pilates
                  </h3>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    Developed by Joseph Pilates in early twentieth-century Germany and refined over decades in his New York studio, Pilates — originally called &ldquo;Contrology&rdquo; — is a systematic training method built on six principles: concentration, control, centring, precision, breath, and flow. The method targets the deep stabilising muscles of the spine and pelvis, with every exercise demanding conscious engagement rather than momentum.
                  </p>
                  <ul className="text-sm leading-relaxed space-y-1.5" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    <li><strong style={{ color: "#1b1c1c" }}>Equipment:</strong> mat, reformer, Cadillac/tower, Wunda chair, small apparatus</li>
                    <li><strong style={{ color: "#1b1c1c" }}>Typical class:</strong> 50–55 minutes; private, semi-private, or group of up to 12</li>
                    <li><strong style={{ color: "#1b1c1c" }}>Pace:</strong> deliberate, precise, breath-led</li>
                  </ul>
                </div>

                {/* Barre card */}
                <div
                  className="rounded-xl p-6"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid rgba(217,194,186,0.3)",
                    borderRadius: "12px",
                    padding: "24px",
                  }}
                >
                  <h3
                    className="text-base font-semibold mb-3"
                    style={{ color: "#8b4a31", fontFamily: "'Playfair Display', serif", fontSize: "17px" }}
                  >
                    Barre
                  </h3>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    Barre fitness derives from the ballet barre conditioning tradition, popularised as a studio workout by dancer Lotte Berk in London in the 1950s and subsequently developed into the contemporary barre formats practised in studios worldwide. Classes use the ballet barre for balance support while performing high-repetition, isometric holds and small-range movements designed to fatigue specific muscle groups — particularly the glutes, inner thighs, and hamstrings.
                  </p>
                  <ul className="text-sm leading-relaxed space-y-1.5" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    <li><strong style={{ color: "#1b1c1c" }}>Equipment:</strong> ballet barre (or chair back), light hand weights, resistance bands</li>
                    <li><strong style={{ color: "#1b1c1c" }}>Typical class:</strong> 45–60 minutes; group format, often 15–25 participants</li>
                    <li><strong style={{ color: "#1b1c1c" }}>Pace:</strong> faster, music-driven, high-repetition sequences</li>
                  </ul>
                </div>
              </div>
            </Section>

            <Callout>
              Both practices are low-impact and accessible to a wide range of bodies — but they are not interchangeable. The differences become meaningful the moment you have a specific goal.
            </Callout>

            {/* Head-to-head comparison */}
            <Section title="Head-to-head: eight criteria">
              <div className="space-y-5 mt-2">

                <CriteriaCard
                  heading="Core and deep muscle focus"
                  body={
                    <>
                      <p>This is where the two disciplines diverge most significantly. Pilates is built around the deep stabilising muscles — the transversus abdominis, multifidus, pelvic floor, and hip stabilisers — that conventional training largely neglects. Every exercise in the Pilates system is designed to originate from and return to this deep centre, developing the kind of internal stability that underpins good posture and injury-free movement.</p>
                      <p className="mt-3">Barre also works the core — particularly in standing sequences that require balance — but the primary stimulus is the superficial muscles of the glutes, outer and inner thighs, hamstrings, and arms. The &ldquo;barre burn&rdquo; is the sensation of high-rep muscular fatigue in these larger, more peripheral muscle groups. The depth of engagement Pilates demands is not the same thing, and is not always present in a barre class.</p>
                    </>
                  }
                />

                <CriteriaCard
                  heading="Equipment and accessibility"
                  body={
                    <>
                      <p>Barre has a significant advantage here. A ballet barre (or the back of a sturdy chair) is all you need for home practice, and barre classes are offered at competitive price points in most cities. The format translates well to video-based home practice.</p>
                      <p className="mt-3">Pilates mat work is similarly accessible — a good mat is all you need, and the <Link href="/blog/best-pilates-mat" style={{ color: "#8b4a31", textDecoration: "underline", textUnderlineOffset: "3px" }}>best Pilates mat</Link> costs far less than studio equipment. But reformer Pilates — which is the format most people associate with the method — requires either studio membership or a home reformer, which ranges from £500 for entry-level machines to £5,000+ for studio-grade equipment. The reformer is worth the investment, but barre removes that barrier entirely.</p>
                    </>
                  }
                />

                <CriteriaCard
                  heading="Injury rehabilitation and therapeutic value"
                  body={
                    <>
                      <p>Pilates has a genuine clinical track record. Joseph Pilates originally developed elements of the method in a rehabilitation context, and contemporary Pilates is widely used in physiotherapy and sports medicine. The method&rsquo;s adaptability — particularly on the reformer, where spring tension can assist or resist the same exercise — makes it the tool of choice for managing lower back pain, recovering from hip or shoulder surgery, and working with conditions like scoliosis or osteoporosis.</p>
                      <p className="mt-3">Barre is generally safe for healthy individuals but carries less therapeutic depth. The high-repetition format can place sustained load on the knees and hip flexors, which may be problematic for people with existing joint issues. It is not typically prescribed as part of a rehabilitation programme.</p>
                      <p className="mt-3">If you are managing a specific physical condition or recovering from injury, Pilates — ideally with a qualified instructor in a small or private setting — is the more appropriate choice by a meaningful margin.</p>
                    </>
                  }
                />

                <CriteriaCard
                  heading="Posture improvement"
                  body={
                    <>
                      <p>Pilates is among the most evidence-supported methods for postural improvement. Its focus on spinal articulation, scapular stability, and the development of deep anti-gravity muscles directly addresses the forward head posture, rounded shoulders, and excessive lumbar curve that desk-based lifestyles create. Consistent Pilates practice measurably changes how you carry yourself.</p>
                      <p className="mt-3">Barre contributes to posture through its ballet influences — the upright carriage, the awareness of turnout, and the shoulder and back sequences in some class formats. The benefit is real, but less targeted and less consistently delivered across different barre programmes.</p>
                    </>
                  }
                />

                <CriteriaCard
                  heading="Flexibility"
                  body={
                    <>
                      <p>Barre classes typically incorporate more dedicated stretching — particularly for the hamstrings, hip flexors, and calves — owing to their ballet heritage. End-of-class stretch sequences are a standard feature, and some formats devote a significant portion of class time to flexibility work.</p>
                      <p className="mt-3">Pilates develops what practitioners call functional flexibility — the range of motion available within movement, rather than passive flexibility achieved in a static stretch. Spinal mobility, hip mobility, and shoulder girdle flexibility all improve with consistent Pilates practice. But if your primary goal is lengthening tight hamstrings or gaining splits, a dedicated barre or yoga class will get you there faster.</p>
                    </>
                  }
                />

                <CriteriaCard
                  heading="Cardiovascular component"
                  body={
                    <>
                      <p>Barre classes can elevate heart rate meaningfully, particularly in formats that include standing cardio sequences between barre sections. The sustained muscular effort in isometric holds also creates cardiovascular demand even without traditional aerobic movement. For those who want their toning and cardio needs met in one class, barre delivers more reliably.</p>
                      <p className="mt-3">Standard Pilates — mat or reformer — is not a cardiovascular workout. Heart rate elevation is modest and incidental to the goals of the session. The exception is Pilates Jump Board classes, which add a jumping component on the reformer carriage and do provide meaningful cardio stimulus. But this is a specialist format, not the standard Pilates experience.</p>
                    </>
                  }
                />

                <CriteriaCard
                  heading="Learning curve"
                  body={
                    <>
                      <p>Barre is more immediately accessible. The combination of music, familiar-feeling movement patterns, and a format that rewards effort over technique means most people feel reasonably competent after two or three classes. The learning is largely physical — your body adapts to the burn and the balance demands over time.</p>
                      <p className="mt-3">Reformer Pilates has a steeper initial learning curve. The apparatus is unfamiliar, the exercise names are not self-explanatory, and the method demands a quality of internal attention that takes time to develop. Many practitioners describe feeling genuinely lost in their first two or three reformer sessions. This is not a reason to avoid it — the depth of what you gain once the foundations are in place is precisely what makes it worthwhile. But it is a real difference. Our <Link href="/blog/beginners-guide-to-reformer-pilates" style={{ color: "#8b4a31", textDecoration: "underline", textUnderlineOffset: "3px" }}>beginner&rsquo;s guide to reformer Pilates</Link> covers what to expect in those early sessions.</p>
                    </>
                  }
                />

                <CriteriaCard
                  heading="Cost"
                  body={
                    <>
                      <p>Studio class pricing is broadly comparable: barre classes typically run £15–25 per drop-in; reformer Pilates classes £20–40. Both offer membership and class-pack pricing that reduces per-session cost substantially.</p>
                      <p className="mt-3">The real cost difference is at home. A good barre setup requires nothing more than a stable chair or wall-mounted barre (£30–100). Mat Pilates at home requires a quality mat. Reformer Pilates at home requires a reformer — a significant investment that only makes sense if you are committed to the practice long-term. If budget is a meaningful constraint, barre offers excellent value.</p>
                    </>
                  }
                />
              </div>
            </Section>

            {/* Verdict boxes */}
            <Section title="Honest verdict: who should choose each">
              <p>Most people will benefit from both disciplines over the course of their fitness lives. But if you are choosing one to start — or choosing one to prioritise — here is an honest steer.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                {/* Choose Pilates */}
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid rgba(217,194,186,0.3)",
                    borderRadius: "12px",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ backgroundColor: "#8b4a31", padding: "16px 24px" }}>
                    <h3
                      className="font-semibold text-white"
                      style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px" }}
                    >
                      Choose Pilates if&hellip;
                    </h3>
                  </div>
                  <ul
                    className="space-y-3 text-sm leading-relaxed"
                    style={{
                      color: "#53433e",
                      fontFamily: "'Montserrat', sans-serif",
                      padding: "20px 24px",
                    }}
                  >
                    <li className="flex gap-2">
                      <span style={{ color: "#8b4a31", flexShrink: 0 }}>—</span>
                      <span>You have back pain, a past injury, or a rehabilitation goal</span>
                    </li>
                    <li className="flex gap-2">
                      <span style={{ color: "#8b4a31", flexShrink: 0 }}>—</span>
                      <span>You want to address posture, spinal health, or deep core stability</span>
                    </li>
                    <li className="flex gap-2">
                      <span style={{ color: "#8b4a31", flexShrink: 0 }}>—</span>
                      <span>You are drawn to a methodical, technically precise practice</span>
                    </li>
                    <li className="flex gap-2">
                      <span style={{ color: "#8b4a31", flexShrink: 0 }}>—</span>
                      <span>You already train regularly and want to address functional weaknesses</span>
                    </li>
                    <li className="flex gap-2">
                      <span style={{ color: "#8b4a31", flexShrink: 0 }}>—</span>
                      <span>You want the reformer experience and are prepared for the learning investment</span>
                    </li>
                  </ul>
                </div>

                {/* Choose Barre */}
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid rgba(217,194,186,0.3)",
                    borderRadius: "12px",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ backgroundColor: "#53433e", padding: "16px 24px" }}>
                    <h3
                      className="font-semibold text-white"
                      style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px" }}
                    >
                      Choose Barre if&hellip;
                    </h3>
                  </div>
                  <ul
                    className="space-y-3 text-sm leading-relaxed"
                    style={{
                      color: "#53433e",
                      fontFamily: "'Montserrat', sans-serif",
                      padding: "20px 24px",
                    }}
                  >
                    <li className="flex gap-2">
                      <span style={{ color: "#53433e", flexShrink: 0 }}>—</span>
                      <span>Ballet-inspired movement and the idea of dance conditioning appeals to you</span>
                    </li>
                    <li className="flex gap-2">
                      <span style={{ color: "#53433e", flexShrink: 0 }}>—</span>
                      <span>You want high-rep muscular endurance work for glutes, thighs, and arms</span>
                    </li>
                    <li className="flex gap-2">
                      <span style={{ color: "#53433e", flexShrink: 0 }}>—</span>
                      <span>You are new to studio fitness and want a more immediately accessible format</span>
                    </li>
                    <li className="flex gap-2">
                      <span style={{ color: "#53433e", flexShrink: 0 }}>—</span>
                      <span>You prefer a class with a cardio element alongside muscle toning</span>
                    </li>
                    <li className="flex gap-2">
                      <span style={{ color: "#53433e", flexShrink: 0 }}>—</span>
                      <span>Budget or space constraints make reformer investment impractical</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Section>

            {/* Can you do both */}
            <Section title="Can you do both?">
              <p>
                Yes — and it is worth considering. Pilates and barre are genuinely complementary in the areas where each falls short. Barre provides the leg endurance, glute conditioning, and cardiovascular stimulus that a standard Pilates programme does not prioritise; Pilates provides the spinal health, deep core engagement, and movement precision that barre classes rarely address in depth.
              </p>
              <p>
                Many practitioners settle into a rhythm of two or three Pilates sessions per week — including reformer where possible — alongside one barre class for variety and the muscular endurance stimulus barre uniquely delivers. The combination gives you comprehensive coverage: functional strength, posture, cardiovascular fitness, and body composition work across a genuinely varied movement diet. If your wardrobe is already sorted (and if you are unsure what <Link href="/blog/what-to-wear-to-pilates" style={{ color: "#8b4a31", textDecoration: "underline", textUnderlineOffset: "3px" }}>what to wear to Pilates</Link> means in practice), the only real barrier to doing both is time.
              </p>
            </Section>

            {/* FAQ */}
            <Section title="Frequently asked questions">
              <div className="space-y-5 mt-2">
                {[
                  {
                    q: "Is Pilates or barre better for beginners?",
                    a: "Barre tends to be more immediately accessible for beginners — the format is familiar, equipment is minimal, and the high-rep structure is easy to follow even without prior movement training. Pilates, particularly reformer Pilates, has a steeper initial learning curve due to the apparatus and the precision required. That said, well-run beginner reformer classes are designed specifically for newcomers and many people find them highly accessible. Both are excellent starting points — it depends on whether you prefer a more intuitive entry (barre) or a more structured, technique-driven one (Pilates).",
                  },
                  {
                    q: "Which burns more calories, Pilates or barre?",
                    a: "Barre classes typically burn more calories per session than a standard Pilates mat or reformer class, owing to the faster pace, more sustained muscle fatigue, and occasional cardiovascular sequences. Estimates for barre range from 250–400 calories per 55-minute session; Pilates tends toward 180–320 calories depending on intensity and format. However, neither discipline is primarily a calorie-burning tool — both develop body composition, strength, and movement quality that support long-term metabolic health in ways that raw calorie figures don't capture.",
                  },
                  {
                    q: "Is barre considered Pilates?",
                    a: "No. Barre and Pilates are distinct disciplines with different origins, principles, and equipment. Barre derives from ballet barre conditioning and was popularised by Lotte Berk in the 1950s. Pilates was developed by Joseph Pilates and is centred on controlled movement, deep core engagement, and spinal articulation. Some studios offer hybrid 'Pilates barre' classes that blend elements of both, but these are fusion formats — not the same as either method practised on its own terms.",
                  },
                  {
                    q: "Can I do both Pilates and barre in the same week?",
                    a: "Yes — and many practitioners do. The two methods complement each other well. Barre provides muscular endurance, leg conditioning, and a degree of cardiovascular stimulus that Pilates generally does not. Pilates provides deep core work, spinal health, and movement precision that barre does not address as thoroughly. A common approach is two to three Pilates sessions per week alongside one or two barre classes. The main consideration is recovery: if barre leaves your legs heavily fatigued, give them 48 hours before a demanding Pilates session.",
                  },
                ].map((item) => (
                  <div
                    key={item.q}
                    style={{
                      backgroundColor: "#ffffff",
                      border: "1px solid rgba(217,194,186,0.3)",
                      borderRadius: "12px",
                      padding: "24px",
                    }}
                  >
                    <p
                      className="font-semibold mb-3"
                      style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif", fontSize: "16px" }}
                    >
                      {item.q}
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </Section>

            {/* Further reading */}
            <div className="mt-16 pt-12" style={{ borderTop: "1px solid rgba(217,194,186,0.4)" }}>
              <h2
                className="text-2xl font-semibold mb-8"
                style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
              >
                Further reading
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard
                  title="The Beginner's Guide to Reformer Pilates"
                  excerpt="What to expect in your first reformer class, how to choose a studio, and how to progress."
                  href="/blog/beginners-guide-to-reformer-pilates"
                  category="Beginner Guide"
                  readTime="8 min read"
                  date="May 2026"
                  imageUrl="https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=800&q=80"
                />
                <ArticleCard
                  title="Pilates vs Yoga: An Honest Comparison"
                  excerpt="Both are mind-body practices with devoted communities. Here's how to choose."
                  href="/blog/pilates-vs-yoga"
                  category="Guide"
                  readTime="7 min read"
                  date="May 2026"
                  imageUrl="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80"
                />
              </div>
            </div>

          </div>

          <BlogSidebar
            related={[
              {
                title: "The Beginner's Guide to Reformer Pilates",
                href: "/blog/beginners-guide-to-reformer-pilates",
                readTime: "8 min read",
                imageUrl: "/pictures/esma-eserghep-NUQi80iMLrI-unsplash.jpg",
              },
              {
                title: "Pilates Reformer vs Mat",
                href: "/blog/pilates-reformer-vs-mat",
                readTime: "10 min read",
                imageUrl: "/pictures/ahmet-kurt-0xn-8kRWOhE-unsplash.jpg",
              },
              {
                title: "The 6 Core Principles of Pilates, Explained",
                href: "/blog/6-core-principles-of-pilates-explained",
                readTime: "6 min read",
                imageUrl: "/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg",
              },
            ]}
          />
        </div>

        <CTASection
          title="Find a Pilates studio near you"
          subtitle="Explore our curated city guides to discover the best studios worldwide."
          showSearch
          searchPlaceholder="Ask: best Pilates studios in London…"
        />
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-14">
      <h2
        className="text-2xl font-semibold mb-5"
        style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h2>
      <div
        className="space-y-4 text-base leading-relaxed"
        style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
      >
        {children}
      </div>
    </div>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-10 border-l-4 pl-6 py-2" style={{ borderColor: "#8b4a31" }}>
      <p
        className="text-lg italic leading-relaxed"
        style={{ color: "#8b4a31", fontFamily: "'Playfair Display', serif" }}
      >
        {children}
      </p>
    </blockquote>
  );
}

function CriteriaCard({ heading, body }: { heading: string; body: React.ReactNode }) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid rgba(217,194,186,0.3)",
        borderRadius: "12px",
        padding: "24px",
      }}
    >
      <h3
        className="font-semibold mb-3"
        style={{ color: "#8b4a31", fontFamily: "'Playfair Display', serif", fontSize: "17px" }}
      >
        {heading}
      </h3>
      <div
        className="text-sm leading-relaxed"
        style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
      >
        {body}
      </div>
    </div>
  );
}
