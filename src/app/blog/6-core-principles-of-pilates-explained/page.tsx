import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import BlogHero from "@/components/BlogHero";
import BlogSidebar from "@/components/BlogSidebar";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "The 6 Core Principles of Pilates Explained | Pilates Collective Club",
  description: "Centring, concentration, control, precision, breath, flow — the six principles that define the Pilates method explained clearly, with practical cues for each.",
  openGraph: {
    title: "The 6 Core Principles of Pilates, Explained",
    description: "Concentration, control, centering, precision, breath, and flow — the six principles that define the Pilates method and how to apply them in practice.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/6-core-principles-of-pilates-explained",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg", width: 1200, height: 630, alt: "Pilates core principles — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The 6 Core Principles of Pilates, Explained",
    description: "Concentration, control, centering, precision, breath, and flow — the six principles that define the Pilates method.",
    images: ["https://pilatescollectiveclub.com/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg"],
  },
  keywords: ["pilates principles", "6 principles of pilates", "pilates centring", "pilates control", "pilates concentration", "pilates breath", "pilates precision", "pilates flow", "contrology principles", "joseph pilates principles", "what are the principles of pilates", "pilates method explained"],
  alternates: {
    canonical: "https://pilatescollectiveclub.com/blog/6-core-principles-of-pilates-explained",
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRINCIPLES = [
  {
    number: "01",
    name: "Concentration",
    body: "Joseph Pilates insisted that the mind must be fully engaged during every exercise. Unlike many forms of exercise that can be performed mechanically while the attention is elsewhere, Pilates requires continuous mental presence. This isn't incidental — it's the mechanism through which the nervous system learns new movement patterns. Concentration is what separates Pilates from calisthenics.",
  },
  {
    number: "02",
    name: "Control",
    body: "The original name of Pilates was 'Contrology' — the study of control. Every movement is performed with deliberate muscular control rather than momentum, gravity, or habit. This is why Pilates exercises are typically slow: speed allows sloppiness; control demands precision. When you control a movement, you train the muscle fibres, connective tissue, and neural pathways simultaneously.",
  },
  {
    number: "03",
    name: "Centering",
    body: "Pilates identified the centre of the body — the area between the lower ribs and the hip bones, encompassing the deep abdominals, pelvic floor, and spinal stabilisers — as the origin of all movement. He called it the 'powerhouse.' Every exercise, on the mat or the reformer, initiates from and returns to this centre. Developing awareness of and strength in the powerhouse is the defining physical goal of the method.",
  },
  {
    number: "04",
    name: "Precision",
    body: "In Pilates, how you do something matters more than how many times you do it. A single precisely executed leg circle develops more than ten sloppy ones. Precision means performing each movement exactly as it is designed — correct alignment, correct breath, correct range of motion. This is why the method scales beautifully: a beginner's precise ten repetitions and an advanced practitioner's precise ten repetitions produce proportionally equivalent results.",
  },
  {
    number: "05",
    name: "Breath",
    body: "Joseph Pilates considered the breath the most fundamental aspect of the method. His system uses lateral thoracic breathing — expanding the ribcage sideways and to the back — to oxygenate the blood while maintaining core engagement. Inhaling typically prepares for or accompanies movement; exhaling typically accompanies exertion. Learning to match breath to movement transforms the experience of Pilates from exercise to something closer to meditation in motion.",
  },
  {
    number: "06",
    name: "Flow",
    body: "The exercises of the Pilates method are not performed in isolation — they flow into one another through smooth, efficient transitions. Flow is the integration of all five preceding principles: when concentration, control, centering, precision, and breath are working together, movement becomes fluid. Flow is the quality that distinguishes a practitioner who has truly absorbed the method from one who is merely executing exercises.",
  },
];

const RELATED = [
  {
    title: "Classical vs Contemporary Pilates: Which Style Is Right for You?",
    excerpt: "Understanding the key differences between the original method and modern interpretations.",
    href: "/blog/classical-vs-contemporary-pilates",
    category: "Method",
    readTime: "7 min read",
    date: "May 2026",
  },
  {
    title: "How to Build a Consistent Pilates Practice",
    excerpt: "Practical strategies for making Pilates a lasting habit.",
    href: "/blog/how-to-build-a-consistent-pilates-practice",
    category: "Lifestyle",
    readTime: "7 min read",
    date: "May 2026",
  },
];


const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://pilatescollectiveclub.com/blog/6-core-principles-of-pilates-explained/#article",
      "headline": "6 Core Principles of Pilates Explained",
      "description": "Breath, concentration, control, centring, precision, flow — understanding the method's foundations.",
      "image": {
        "@type": "ImageObject",
        "url": "https://pilatescollectiveclub.com/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg",
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
      "url": "https://pilatescollectiveclub.com/blog/6-core-principles-of-pilates-explained",
      "mainEntityOfPage": "https://pilatescollectiveclub.com/blog/6-core-principles-of-pilates-explained",
      "articleSection": "Method",
      "inLanguage": "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Journal", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "6 Core Principles of Pilates Explained", "item": "https://pilatescollectiveclub.com/blog/6-core-principles-of-pilates-explained" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the 6 principles of Pilates?",
      "acceptedAnswer": { "@type": "Answer", "text": "The six classical Pilates principles are: Centring (engaging the core powerhouse), Concentration (full mental focus), Control (muscular command), Precision (exactness of position), Breath (coordinating movement with inhalation and exhalation), and Flow (smooth, continuous transitions)." }
    },
    {
      "@type": "Question",
      "name": "Why is breathing important in Pilates?",
      "acceptedAnswer": { "@type": "Answer", "text": "Breathing in Pilates is functional and intentional. Exhalation on exertion engages the deep abdominals and pelvic floor, supporting spinal stability. Lateral breathing keeps the ribcage stable during abdominal work. Proper breath prevents the Valsalva manoeuvre during loading." }
    },
    {
      "@type": "Question",
      "name": "What is the powerhouse in Pilates?",
      "acceptedAnswer": { "@type": "Answer", "text": "The powerhouse is Joseph Pilates' term for the deep muscular corset supporting the spine: the transverse abdominis, multifidus, pelvic floor, and diaphragm. Modern anatomical understanding describes this as the 'inner unit' or 'local stabilisers'. All Pilates movement initiates from this centre." }
    },
    {
      "@type": "Question",
      "name": "What does 'control' mean in Pilates?",
      "acceptedAnswer": { "@type": "Answer", "text": "Control in Pilates means every movement is directed by muscular effort \u2014 no momentum, no collapsing, no relying on joints rather than muscles. Joseph Pilates originally called his method 'Contrology' \u2014 the complete coordination of body, mind, and spirit." }
    }
      ]
    },
  ],
};
export default function SixPrinciplesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Journal", href: "/blog" }, { label: "The 6 Core Principles of Pilates Explained" }]} />
      <main>
        <BlogHero
          imageUrl="/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg"
          imageAlt="Pilates core principles"
          category="Method"
          title={<>The 6 Core Principles of Pilates,<br /><span style={{ color: "#8b4a31" }}>Explained</span></>}
          date="Updated May 2026"
          readTime="6 min read"
        />

        {/* Two-column layout */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 flex flex-col lg:flex-row gap-12 items-start">
          {/* Main article column */}
          <div className="flex-grow min-w-0" style={{ maxWidth: "720px" }}>

            <article>
              <div className="mb-10 rounded-xl p-6" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217, 194, 186, 0.3)" }}>
                <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                  <strong style={{ color: "#1b1c1c" }}>A note on attribution:</strong> The six principles below — concentration, control, centering, precision, breath, and flow — were codified by Joseph Pilates&apos; students and successors as a framework for teaching the method. Pilates himself wrote about these ideas throughout his work, particularly in his books <em>Your Health</em> (1934) and <em>Return to Life Through Contrology</em> (1945).
                </p>
              </div>

              <div className="space-y-10 mb-16">
                {PRINCIPLES.map((p) => (
                  <div key={p.number} className="flex gap-6 rounded-2xl p-7" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217, 194, 186, 0.35)", boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
                    <div>
                      <span className="text-4xl font-light block mb-1 leading-none" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{p.number}</span>
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold mb-3" style={{ color: "#8b4a31", fontFamily: "'Playfair Display', serif" }}>{p.name}</h2>
                      <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{p.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217, 194, 186, 0.3)" }}>
                <h2 className="text-xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>How to use the principles in your practice</h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                  Don&apos;t try to consciously apply all six principles simultaneously in your early practice — that way lies paralysis. Instead, treat them as a hierarchy to work through over time.
                </p>
                <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                  In your first few months, focus on centering and breath. These are the prerequisites for everything else. Once you can reliably find and maintain your powerhouse, and coordinate breath with movement, concentration and control will begin to emerge naturally.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                  Precision and flow are the last to arrive — and when they do, the experience of Pilates changes completely. You&apos;ll stop counting repetitions and start inhabiting them. That&apos;s when the practice becomes genuinely transformative.
                </p>
              </div>
            </article>

            {/* Continue reading */}
            <div className="mt-16 pt-12" style={{ borderTop: "1px solid rgba(217,194,186,0.4)" }}>
              <h2 className="text-2xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Continue reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {RELATED.map((a) => (<ArticleCard key={a.href} {...a} />))}
              </div>
            </div>
          </div>

          <BlogSidebar related={[
            { title: "The Beginner's Guide to Reformer Pilates", href: "/blog/beginners-guide-to-reformer-pilates", readTime: "8 min read", imageUrl: "/pictures/esma-eserghep-NUQi80iMLrI-unsplash.jpg" },
            { title: "Classical vs Contemporary Pilates", href: "/blog/classical-vs-contemporary-pilates", readTime: "7 min read", imageUrl: "/pictures/junseong-lee-G9H5edUL0T8-unsplash.jpg" },
            { title: "How to Build a Consistent Pilates Practice", href: "/blog/how-to-build-a-consistent-pilates-practice", readTime: "7 min read", imageUrl: "/pictures/logan-weaver-lgnwvr-u76Gd0hP5w4-unsplash.jpg" },
          ]} />
        </div>
      </main>
      <Footer />
    </>
  );
}
