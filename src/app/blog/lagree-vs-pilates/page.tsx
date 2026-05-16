import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogHero from "@/components/BlogHero";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "Lagree vs Pilates (2026): What's the Difference and Which Is Right for You? | Pilates Collective Club",
  description: "Lagree and Pilates both use reformer-style machines, but they're fundamentally different methods. An honest comparison of results, intensity, injury risk, and cost.",
  keywords: [
    "lagree vs pilates",
    "lagree fitness vs pilates",
    "megaformer vs reformer",
    "lagree method vs pilates",
    "lagree pilates difference",
    "lagree workout review",
    "pilates vs lagree for weight loss",
    "lagree vs pilates reformer",
    "sebastien lagree pilates",
    "lagree fitness 2026",
  ],
  openGraph: {
    title: "Lagree vs Pilates (2026): What's Actually Different?",
    description: "Both use reformer-style machines. But Lagree and Pilates are fundamentally different methods — this guide explains the real distinctions.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/lagree-vs-pilates",
    images: [
      {
        url: "https://pilatescollectiveclub.com/pictures/ahmet-kurt-a1IhqqW8JQE-unsplash.jpg",
        width: 1200,
        height: 630,
        alt: "Lagree vs Pilates — Pilates Collective Club",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lagree vs Pilates (2026)",
    description: "Lagree and Pilates both use machines. They're fundamentally different. Here's what you need to know.",
    images: ["https://pilatescollectiveclub.com/pictures/ahmet-kurt-a1IhqqW8JQE-unsplash.jpg"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/blog/lagree-vs-pilates",
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Lagree vs Pilates (2026): What's the Difference and Which Should You Choose?",
      "url": "https://pilatescollectiveclub.com/blog/lagree-vs-pilates",
      "datePublished": "2026-05-16",
      "dateModified": "2026-05-16",
      "image": {
        "@type": "ImageObject",
        "url": "https://pilatescollectiveclub.com/pictures/ahmet-kurt-a1IhqqW8JQE-unsplash.jpg",
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
        "@id": "https://pilatescollectiveclub.com/blog/lagree-vs-pilates",
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
          "name": "Lagree vs Pilates",
          "item": "https://pilatescollectiveclub.com/blog/lagree-vs-pilates",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Lagree considered Pilates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Lagree is explicitly NOT Pilates. Sebastien Lagree trained in Pilates and was inspired by it, but he developed a distinct method with different principles, intensity, and machine. The Lagree method, the Megaformer, and the training approach are all proprietary and separate from Pilates. Studios marketing Lagree as Pilates are inaccurate.",
          },
        },
        {
          "@type": "Question",
          "name": "Which burns more calories, Lagree or Pilates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lagree burns significantly more calories per session due to its higher intensity and cardiovascular component. Heart rate stays elevated throughout a Lagree class, creating meaningful anaerobic conditioning. Pilates is not designed as a calorie-burning workout — it is a neuromuscular conditioning method focused on precision, control, and deep muscular engagement rather than cardiovascular output.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I do Lagree if I'm recovering from injury?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Consult your healthcare provider before beginning any exercise programme during injury recovery. Generally, Pilates is more appropriate for rehabilitation due to its lower intensity, spring-assisted progressions, and extensive physiotherapy applications. Lagree's high-intensity format, sustained time under tension, and significant cardiovascular component make it less suitable for injury recovery contexts.",
          },
        },
        {
          "@type": "Question",
          "name": "Is the Megaformer available for home use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lagree offers some consumer versions, but the Megaformer is primarily commercial equipment costing approximately $10,000–14,000. This makes it impractical for the vast majority of home practitioners. Home Pilates reformers are far more accessible, ranging from around $300 for entry-level to $7,000+ for studio-grade machines.",
          },
        },
      ],
    },
  ],
};

export default function LagreevsPilatesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <BlogHero
          imageUrl="/pictures/ahmet-kurt-a1IhqqW8JQE-unsplash.jpg"
          imageAlt="Lagree vs Pilates — reformer machine comparison"
          category="Comparison"
          subcategory="Equipment & Method"
          title={
            <>
              Lagree vs Pilates (2026):<br />
              <span style={{ color: "#c5a882" }}>What&rsquo;s the Difference and Which Should You Choose?</span>
            </>
          }
          date="May 2026"
          readTime="9 min read"
        />

        {/* Two-column layout */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 flex flex-col lg:flex-row gap-12 items-start">
          {/* Main article column */}
          <div className="flex-grow min-w-0" style={{ maxWidth: "720px" }}>

            {/* Intro */}
            <div className="mb-14">
              <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
                Many practitioners encounter both methods and struggle to understand the distinction — especially because the Megaformer looks so similar to a Pilates reformer. The machines share a visual language: both involve a carriage on a rail, both use spring resistance, and both are associated with a particular aesthetic of controlled, deliberate movement. But the methods are not the same thing, and conflating them does a disservice to both. This guide explains the actual differences in method, machine, intensity, outcomes, and who each genuinely suits.
              </p>
            </div>

            {/* What is each? */}
            <Section title="What is each method?">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
                {/* Lagree card */}
                <div
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
                    Lagree Fitness
                  </h3>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    Founded by Sebastien Lagree in Los Angeles around 2001, the Lagree method was developed by someone who trained in Pilates — but who deliberately set out to build something different. Lagree is a high-intensity, slow-twitch focused training system performed on a proprietary machine called the Megaformer (sold under model designations including the M3S and M3+). It is NOT Pilates.
                  </p>
                  <ul className="text-sm leading-relaxed space-y-1.5" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    <li><strong style={{ color: "#1b1c1c" }}>Machine:</strong> Megaformer (~$10,000–14,000; commercial only)</li>
                    <li><strong style={{ color: "#1b1c1c" }}>Typical class:</strong> 50 minutes; sustained high intensity</li>
                    <li><strong style={{ color: "#1b1c1c" }}>Key principle:</strong> time under tension; slow-twitch muscle fibres</li>
                    <li><strong style={{ color: "#1b1c1c" }}>Cardio component:</strong> significant; heart rate elevated throughout</li>
                  </ul>
                </div>

                {/* Pilates card */}
                <div
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
                    Developed by Joseph Pilates from the 1920s through the 1940s, Pilates is a systematic method built on six principles: control, precision, breath, centering, concentration, and flow. The reformer uses spring resistance with precise spring selection as an integral part of exercise design — supporting, challenging, or progressively loading movement depending on configuration.
                  </p>
                  <ul className="text-sm leading-relaxed space-y-1.5" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    <li><strong style={{ color: "#1b1c1c" }}>Machine:</strong> Pilates reformer ($300–7,000+; home practice possible)</li>
                    <li><strong style={{ color: "#1b1c1c" }}>Typical class:</strong> 50–55 minutes; low-to-moderate intensity</li>
                    <li><strong style={{ color: "#1b1c1c" }}>Key principle:</strong> neuromuscular control; deep stabilisers</li>
                    <li><strong style={{ color: "#1b1c1c" }}>Cardio component:</strong> minimal; not a cardiovascular workout</li>
                  </ul>
                </div>
              </div>
            </Section>

            <Callout>
              Lagree is not a variation of Pilates — it is a distinct method that happens to use a machine visually inspired by the Pilates reformer. The distinction matters when you are choosing what to practise.
            </Callout>

            {/* Head-to-head comparison */}
            <Section title="Head-to-head: seven criteria">
              <div className="space-y-5 mt-2">

                <CriteriaCard
                  heading="The machine: Megaformer vs Pilates reformer"
                  body={
                    <>
                      <p>Both machines use spring resistance and a sliding carriage on a rail. But the similarities largely end there. The Pilates reformer — the original design refined by Joseph Pilates and subsequently developed by manufacturers such as <Link href="/blog/balanced-body-pilates" style={{ color: "#8b4a31", textDecoration: "underline", textUnderlineOffset: "3px" }}>Balanced Body</Link> and <Link href="/blog/merrithew-pilates" style={{ color: "#8b4a31", textDecoration: "underline", textUnderlineOffset: "3px" }}>Merrithew</Link> — has a single moving platform, a footbar, shoulder rests, and a spring system designed for precise loading across a repertoire of several hundred exercises.</p>
                      <p className="mt-3">The Megaformer has platforms on both ends of the machine, not just one. This allows for a much greater variety of exercise positions and transitions, and the additional platform configuration is fundamental to how Lagree sequences are designed. The Megaformer is heavier, larger, and more expensive than a standard reformer — it costs approximately $10,000–14,000 and is almost exclusively found in commercial studios. Lagree studios and franchises — including SLT in New York and The Studio MDR in Los Angeles — must be licensed to use the Megaformer. It is trademarked equipment, not a general-purpose reformer variant.</p>
                    </>
                  }
                />

                <CriteriaCard
                  heading="Intensity and heart rate"
                  body={
                    <>
                      <p>This is the sharpest practical difference between the two methods, and the one most relevant if you are choosing based on fitness goals. Lagree is designed to be genuinely hard. Classes maintain sustained high intensity throughout, heart rate stays elevated for the majority of the session, and the anaerobic conditioning component is significant. Many practitioners describe the experience as far more demanding than it looks from the outside.</p>
                      <p className="mt-3">Pilates is not a cardiovascular workout. Heart rate elevation in a standard reformer or mat class is low to moderate, and this is not a design flaw — it is intentional. The method&rsquo;s focus is neuromuscular precision, not metabolic output. If you walk away from a Pilates session feeling as though you have done a hard cardio session, something unusual has happened. If you want to be breathing hard and sweating, Lagree will deliver that; Pilates will not.</p>
                    </>
                  }
                />

                <CriteriaCard
                  heading="Muscle targeting"
                  body={
                    <>
                      <p>Lagree is designed around time under tension — exercises are performed at a slow, controlled pace (typically two to four seconds in each direction) with the explicit goal of exhausting slow-twitch muscle fibres. This produces a full-body burn that is diffuse and cumulative throughout a session. The sensation is sustained fatigue across multiple muscle groups simultaneously.</p>
                      <p className="mt-3">Pilates targets the deep stabilising muscles of the pelvis and spine — the transversus abdominis, multifidus, pelvic floor, and hip stabilisers — alongside global mobilisers. The emphasis is on neuromuscular control rather than muscular endurance in the Lagree sense. A Pilates session asks you to engage muscles that may have been dormant for years; the challenge is not always one of brute fatigue but of activation, coordination, and proprioceptive awareness. The two approaches produce genuinely different adaptations.</p>
                    </>
                  }
                />

                <CriteriaCard
                  heading="Injury and rehabilitation"
                  body={
                    <>
                      <p>Pilates has decades of documented physiotherapy applications. Joseph Pilates himself developed elements of the method in rehabilitation contexts, and the modern practice is routinely prescribed for lower back pain, post-surgical recovery, post-natal rehabilitation, osteoporosis management, and scoliosis. The reformer&rsquo;s spring system can be configured to assist movement — reducing the load through a painful range, for example — in ways that make it uniquely useful for therapeutic work.</p>
                      <p className="mt-3">Lagree&rsquo;s high-intensity format makes it substantially less appropriate for rehabilitation. It is designed for generally fit individuals who want to push their conditioning; the sustained muscular demand and cardiovascular component are contraindicated for most injury recovery contexts. If you are managing a physical condition or returning to exercise after injury, Pilates — ideally with a qualified instructor in a small or private setting — is the more considered choice by a significant margin.</p>
                    </>
                  }
                />

                <CriteriaCard
                  heading="Learning curve"
                  body={
                    <>
                      <p>Both methods have genuine learning curves, but they are different in character. Lagree is more immediately accessible for people who already have a fitness background — the instruction is generally cue-based and exercise-focused, and the intensity provides clear physical feedback. Most fitness-experienced practitioners feel reasonably capable within a few sessions, even if technique continues to develop over months.</p>
                      <p className="mt-3">Pilates technique is harder to internalise, but the rewards of getting it right are more far-reaching. The internal attention that Pilates requires — feeling which muscles are working, sensing spinal alignment, integrating breath with movement — takes time to develop and cannot be shortcut. Many practitioners describe a period of genuine confusion in early reformer sessions before the method begins to make sense as a coherent system. That investment is worthwhile: Pilates technique, once acquired, applies to how you move in everyday life in ways that Lagree does not.</p>
                    </>
                  }
                />

                <CriteriaCard
                  heading="Cost and accessibility"
                  body={
                    <>
                      <p>Both methods are primarily studio-based, and per-class pricing is broadly comparable: expect $30–45 per drop-in class for either, with membership pricing reducing the per-session cost at most studios. In major cities, both formats are relatively well represented.</p>
                      <p className="mt-3">The key difference is at home. The Pilates reformer is available for home purchase across a wide price range — from around $300 for entry-level machines to $7,000+ for studio-grade equipment. Our guide to the <Link href="/blog/best-home-pilates-reformer" style={{ color: "#8b4a31", textDecoration: "underline", textUnderlineOffset: "3px" }}>best home Pilates reformer</Link> covers every meaningful price point honestly. The Megaformer, by contrast, is commercial equipment costing $10,000–14,000. Home Lagree practice is not a realistic option for most people, which means the method is entirely dependent on studio access. For those who travel frequently, are based outside major cities, or prefer home practice, this is a meaningful limitation.</p>
                    </>
                  }
                />

                <CriteriaCard
                  heading="Scientific evidence base"
                  body={
                    <>
                      <p>Pilates has a substantial peer-reviewed research record. Studies consistently support its effectiveness for chronic lower back pain, postural improvement, pelvic floor function, balance in older adults, and spinal health broadly. The evidence base spans decades and includes both mat and reformer formats, with clinical applications well-established in physiotherapy literature.</p>
                      <p className="mt-3">Lagree is a newer method and the formal research base is correspondingly smaller. The evidence that exists is broadly supportive, particularly around muscular endurance outcomes and body composition changes in active populations. As the method has grown in popularity, the research has grown with it — but it has not yet accumulated the clinical depth or breadth that Pilates has. For people making decisions based on evidence, this asymmetry is worth noting.</p>
                    </>
                  }
                />

              </div>
            </Section>

            {/* Honest verdict */}
            <Section title="The honest verdict">
              <p>Most dedicated practitioners will eventually try both — and many will find real value in each. But if you are choosing one to start, or deciding which to prioritise, the distinctions are clear enough to give a direct steer.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                {/* Choose Lagree */}
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
                      Choose Lagree if&hellip;
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
                      <span>You want a high-intensity full-body workout with a real cardio component</span>
                    </li>
                    <li className="flex gap-2">
                      <span style={{ color: "#8b4a31", flexShrink: 0 }}>—</span>
                      <span>You are already fit and want to maintain cardiovascular conditioning alongside toning</span>
                    </li>
                    <li className="flex gap-2">
                      <span style={{ color: "#8b4a31", flexShrink: 0 }}>—</span>
                      <span>You enjoy the energy of a class community and music-driven intensity</span>
                    </li>
                    <li className="flex gap-2">
                      <span style={{ color: "#8b4a31", flexShrink: 0 }}>—</span>
                      <span>You have no injury or rehabilitation concerns that require low-intensity work</span>
                    </li>
                    <li className="flex gap-2">
                      <span style={{ color: "#8b4a31", flexShrink: 0 }}>—</span>
                      <span>You have reliable studio access and home practice is not a priority</span>
                    </li>
                  </ul>
                </div>

                {/* Choose Pilates */}
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
                      <span style={{ color: "#53433e", flexShrink: 0 }}>—</span>
                      <span>You have a specific injury, rehabilitation need, or therapeutic goal</span>
                    </li>
                    <li className="flex gap-2">
                      <span style={{ color: "#53433e", flexShrink: 0 }}>—</span>
                      <span>You want a lifetime practice that scales gracefully as you age</span>
                    </li>
                    <li className="flex gap-2">
                      <span style={{ color: "#53433e", flexShrink: 0 }}>—</span>
                      <span>Your instructor and the quality of individual attention matters to you</span>
                    </li>
                    <li className="flex gap-2">
                      <span style={{ color: "#53433e", flexShrink: 0 }}>—</span>
                      <span>You want to develop genuine body awareness and lasting postural control</span>
                    </li>
                    <li className="flex gap-2">
                      <span style={{ color: "#53433e", flexShrink: 0 }}>—</span>
                      <span>Home practice flexibility matters — or you travel frequently</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Section>

            {/* Can you do both */}
            <Section title="Can you do both?">
              <p>
                Yes — and many serious practitioners do. Lagree and Pilates are genuinely complementary rather than competing methods. A common approach is to use Lagree on high-intensity days when you want cardio conditioning alongside full-body work, and Pilates on recovery or technique-focused days when the priority is deep neuromuscular engagement and spinal health. The two methods address different physiological demands and can coexist in the same weekly programme without redundancy.
              </p>
              <p>
                The main thing to be clear on is that they are not interchangeable — attending a Lagree class is not a substitute for Pilates, and vice versa. Each delivers something the other does not, and understanding that distinction is the first step to using both well.
              </p>
            </Section>

            {/* FAQ */}
            <Section title="Frequently asked questions">
              <div className="space-y-5 mt-2">
                {[
                  {
                    q: "Is Lagree considered Pilates?",
                    a: "No. Lagree is explicitly NOT Pilates. Sebastien Lagree trained in Pilates and was inspired by it, but he developed a distinct method with different principles, intensity level, and proprietary machine. The Lagree method has its own training philosophy, its own certification system, and its own equipment. Studios marketing Lagree as Pilates are inaccurate — and this misrepresentation does a disservice to practitioners trying to understand what they are signing up for.",
                  },
                  {
                    q: "Which burns more calories, Lagree or Pilates?",
                    a: "Lagree burns significantly more calories per session. The method's high intensity and sustained cardiovascular component mean heart rate stays elevated throughout class — this is by design, not incidental. Pilates is not designed as a calorie-burning workout. Its neuromuscular focus and low-to-moderate intensity mean caloric expenditure is modest per session, though the body composition and metabolic benefits of consistent Pilates practice are well-documented in research. If calorie burning per session is your primary metric, Lagree wins that comparison clearly.",
                  },
                  {
                    q: "Can I do Lagree if I'm recovering from injury?",
                    a: "Consult your healthcare provider before beginning any exercise programme during injury recovery. As a general principle, Lagree's high-intensity format, sustained time under tension, and significant cardiovascular demand make it less appropriate for rehabilitation than Pilates. Pilates is widely used in physiotherapy settings precisely because its spring system can assist movement through injured ranges, its intensity is controllable, and qualified instructors can adapt exercises to specific conditions. If you are in active recovery, Pilates — ideally in a small-group or private setting with an experienced instructor — is the more considered starting point.",
                  },
                  {
                    q: "Is the Megaformer available for home use?",
                    a: "Lagree has introduced some consumer-facing versions of the Megaformer, but the machine remains primarily commercial equipment at $10,000–14,000. For the vast majority of home practitioners, this puts it out of reach. Home Pilates reformers are far more accessible — quality machines are available from around $300 at the entry level, with studio-grade options in the $3,000–7,000 range. See our home reformer guide for a full breakdown of what each price point actually delivers.",
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
                  title="Best Home Pilates Reformer (2026)"
                  excerpt="Every price point honestly reviewed — AeroPilates to Balanced Body to Merrithew."
                  href="/blog/best-home-pilates-reformer"
                  category="Equipment Guide"
                  readTime="10 min read"
                  date="May 2026"
                  imageUrl="/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg"
                />
                <ArticleCard
                  title="Classical vs Contemporary Pilates"
                  excerpt="Understanding the key differences between the original method and modern interpretations."
                  href="/blog/classical-vs-contemporary-pilates"
                  category="Method"
                  readTime="7 min read"
                  date="May 2026"
                  imageUrl="/pictures/esma-eserghep-NUQi80iMLrI-unsplash.jpg"
                />
              </div>
            </div>

          </div>

          <BlogSidebar
            related={[
              {
                title: "Best Home Pilates Reformer (2026)",
                href: "/blog/best-home-pilates-reformer",
                readTime: "10 min read",
                imageUrl: "/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg",
              },
              {
                title: "Classical vs Contemporary Pilates",
                href: "/blog/classical-vs-contemporary-pilates",
                readTime: "7 min read",
                imageUrl: "/pictures/esma-eserghep-NUQi80iMLrI-unsplash.jpg",
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
          title="Find the right Pilates studio for you"
          subtitle="Our city guides include both reformer Pilates and Lagree studios in major cities."
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
