import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import UpsellCTA from "@/components/UpsellCTA";
import { jsonLdHtml } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Best Pilates Ball (2026): 6 Picks, Mini to Stability",
  description: "Six Pilates balls ranked: Balanced Body's 12-inch ball, Bala, ProBody mini and 65cm stability balls, the Byrex prop kit and the BOSU balance trainer.",
  openGraph: {
    title: "Best Pilates Ball (2026): 6 Picks, Mini to Stability",
    description: "Mini balls, a full-size stability ball, a starter prop bundle and a premium balance trainer — six Pilates balls ranked, with who each one suits.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-ball",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg", width: 1200, height: 630, alt: "Best Pilates Ball — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Ball (2026)",
    description: "Six Pilates balls ranked — mini balls, stability ball, starter bundle and a premium balance upgrade.",
    images: ["https://pilatescollectiveclub.com/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg"],
  },
  keywords: ["best pilates ball", "pilates mini ball 2026", "pilates stability ball", "balanced body pilates ball", "bala pilates ball", "pilates prop kit", "bosu balance trainer", "pilates ball exercises", "small ball for pilates"],
  alternates: {
    canonical: "https://pilatescollectiveclub.com/blog/best-pilates-ball",
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Balanced Body Inflatable Workout Ball (12-inch)",
    type: "Mini Ball",
    price: "$30.00",
    tag: "Best Overall",
    description:
      "Balanced Body is one of the best-known names in studio Pilates equipment, and this 12-inch inflatable ball is sold on Amazon by Balanced Body Inc. itself — the manufacturer, not a reseller. It is the prop to buy if you want a small ball from a brand that makes studio apparatus: use it between the knees for bridges and inner-thigh work, behind the back for supported curl-ups, or under the upper back for thoracic extension.",
    affiliateUrl: "https://www.amazon.com/dp/B002YR1YJ8?tag=pilatescollective-20",
  },
  {
    rank: "02",
    name: "Bala Pilates Ball (Non-Weighted, Small)",
    type: "Mini Ball",
    price: "$29.00",
    tag: "Most Stylish",
    description:
      "Bala is a design-led barre and Pilates brand (best known for its Bangles), and its small non-weighted Pilates ball is sold on Amazon by Bala Bangles directly. Functionally it does the same job as any mini ball — squeezes, supports and feedback during mat work — so the reason to choose it is the look. If your props live out in the open and you care how they sit alongside the rest of your kit, this is the pick.",
    affiliateUrl: "https://www.amazon.com/dp/B0BQCGM6N9?tag=pilatescollective-20",
  },
  {
    rank: "03",
    name: "ProBody Pilates Ball Small (9-inch)",
    type: "Mini Ball",
    price: "$9.49",
    tag: "Best Budget Mini Ball",
    description:
      "A 9-inch mini ball for under $10, sold by ProBody Pilates. It covers the same core uses as the pricier picks above — inner-thigh squeezes, ball-supported bridges and thoracic extension — at a third of the price. If you just want to try small-ball work at home before spending more, start here.",
    affiliateUrl: "https://www.amazon.com/dp/B010TJC4IM?tag=pilatescollective-20",
  },
  {
    rank: "04",
    name: "ProBody Pilates Yoga Ball (65cm, gym grade)",
    type: "Stability Ball",
    price: "$17.95",
    tag: "Best Stability Ball",
    description:
      "If you need the full-size stability ball rather than a mini ball, this 65cm gym-grade ball from ProBody Pilates is the pick. A stability ball is a different tool entirely: it is for roll-outs, pikes, supported back extension, hamstring stretches and seated balance work. Sizing matters — 65cm is a common middle size, so check it suits your height before ordering.",
    affiliateUrl: "https://www.amazon.com/dp/B010TIO30U?tag=pilatescollective-20",
  },
  {
    rank: "05",
    name: "Byrex Pilates Prop Kit",
    type: "Bundle",
    price: "$19.99",
    tag: "Best Starter Bundle",
    description:
      "Rather than a ball on its own, the Byrex kit bundles a Pilates ring, a 10-inch mini ball, resistance bands and sliding discs for $19.99 (sold by ByrexLtd). That makes it the best value if you are building a home mat setup from scratch and want the main small props in one order. It does not include a large stability ball — pair it with the ProBody 65cm ball above if you want both.",
    affiliateUrl: "https://www.amazon.com/dp/B0GSJHPSQT?tag=pilatescollective-20",
  },
  {
    rank: "06",
    name: "BOSU Balance Ball Trainer (26-inch)",
    type: "Balance Trainer",
    price: "$139.99",
    tag: "Premium Balance Upgrade",
    description:
      "To be clear up front: the BOSU is not a classical Pilates prop. It is a 26-inch half-dome balance trainer, sold here by Amazon.com, and it is widely used in Pilates-fusion classes and balance-focused workouts. If you already own a mini ball and want to add unstable-surface work — planks, bridges, squats and balance holds on the dome — it is the premium step up. If you are after a traditional Pilates ball, one of the picks above is the better buy.",
    affiliateUrl: "https://www.amazon.com/dp/B00AQ4F19K?tag=pilatescollective-20",
  },
];

const EXERCISES = [
  { name: "Mini ball inner thigh squeeze", equipment: "Small ball", level: "All levels", benefit: "Activates adductors, stabilises pelvis" },
  { name: "Ball-supported bridge", equipment: "Small ball", level: "Beginner–Intermediate", benefit: "Deepens glute activation, challenges pelvic stability" },
  { name: "Thoracic extension over ball", equipment: "Small ball", level: "All levels", benefit: "Mobilises thoracic spine, counters desk posture" },
];

const FAQS = [
  { q: "What is the best Pilates ball?", a: "For most people, the Balanced Body Inflatable Workout Ball (12-inch, $30.00) is our top pick — it comes from an established studio-equipment brand and is sold on Amazon by the manufacturer. On a budget, the ProBody 9-inch mini ball ($9.49) does the same core jobs for much less." },
  { q: "What is the difference between a mini Pilates ball and a stability ball?", a: "A mini Pilates ball (roughly 8–12 inches) is a prop for tactile feedback and precision cueing — squeezed between the knees, placed behind the back or under the upper spine. A stability ball (roughly 55–75cm) is used for seated balance, roll-outs, pikes and supported stretches. Our mini ball picks are the Balanced Body, Bala and ProBody 9-inch balls; our stability ball pick is the ProBody 65cm." },
  { q: "How inflated should a Pilates mini ball be?", a: "As a general rule, firm enough to maintain shape but soft enough to compress under pressure. Check the specific product's instructions, since inflation guidance varies by model." },
  { q: "Does the Byrex Pilates Prop Kit include a large stability ball?", a: "No. It bundles a Pilates ring, a 10-inch mini ball, resistance bands and sliding discs for $19.99. If you also want a full-size stability ball, the ProBody 65cm ball ($17.95) is our pick." },
  { q: "Is a BOSU ball a Pilates ball?", a: "Not in the classical sense. The BOSU Balance Ball Trainer is a half-dome balance trainer rather than a traditional Pilates prop, but it is widely used in Pilates-fusion and balance classes. Treat it as an upgrade once you already have a mini ball, not a replacement for one." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://pilatescollectiveclub.com/blog/best-pilates-ball/#article",
      "headline": "Best Pilates Ball (2026): 6 Picks, Mini to Stability",
      "description": "Six Pilates balls ranked: two premium mini balls, a budget mini ball, a 65cm stability ball, a starter prop bundle and the BOSU balance trainer as a premium upgrade.",
      "image": {
        "@type": "ImageObject",
        "url": "https://pilatescollectiveclub.com/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg",
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
        "logo": {
          "@type": "ImageObject",
          "url": "https://pilatescollectiveclub.com/pictures/pcc-logo.png",
        },
      },
      "datePublished": "2026-05-01",
      "dateModified": "2026-09-27",
      "url": "https://pilatescollectiveclub.com/blog/best-pilates-ball",
      "mainEntityOfPage": "https://pilatescollectiveclub.com/blog/best-pilates-ball",
      "articleSection": "Equipment",
      "inLanguage": "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Pilates Ball", "item": "https://pilatescollectiveclub.com/blog/best-pilates-ball" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": FAQS.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
    },
  ],
};

export default function BestPilatesBallPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Equipment Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Accessories</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Pilates Ball<br /><span style={{ color: "#8b4a31" }}>(2026): 6 Picks, Mini to Stability</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 7 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              &ldquo;Pilates ball&rdquo; can mean a small squeeze ball for mat work or a full-size stability ball — and they do very different jobs. We&apos;ve ranked six options across both: two premium mini balls, a budget mini ball, a 65cm stability ball, a starter prop bundle, and a premium balance trainer for when you want to go further.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg" alt="Best Pilates ball — mini balls and stability balls for home practice" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            {/* Mini vs Stability */}
            <div className="mb-16 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Mini ball vs stability ball: which do you need?</h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Pilates balls typically come in two forms. Work out which one fits your practice before choosing from the picks below.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.35)" }}>
                  <h3 className="text-base font-semibold mb-3" style={{ color: "#8b4a31", fontFamily: "'Playfair Display', serif" }}>Mini Pilates Ball (roughly 8–10 inches)</h3>
                  <ul className="space-y-2">
                    {["Inner thigh activation during bridges and supine exercises", "Pelvic stabilisation challenge in mat work", "Thoracic support for upper body extension", "Between-knee prop for spinal alignment", "Easily stored — fits in a gym bag"].map((item) => (
                      <li key={item} className="text-sm flex gap-2" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}><span style={{ color: "#8b4a31" }}>·</span>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.35)" }}>
                  <h3 className="text-base font-semibold mb-3" style={{ color: "#8b4a31", fontFamily: "'Playfair Display', serif" }}>Stability Ball (roughly 55–75cm)</h3>
                  <ul className="space-y-2">
                    {["Full core engagement during roll-outs and pikes", "Back extension and thoracic mobility exercises", "Active sitting to improve posture", "Hip and hamstring stretching with support", "Balance and proprioceptive training"].map((item) => (
                      <li key={item} className="text-sm flex gap-2" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}><span style={{ color: "#8b4a31" }}>·</span>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="text-sm mt-4" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
                Most people start with a mini ball. If you want both, the ProBody 65cm stability ball is our full-size pick, and the Byrex kit adds a mini ball plus other small props in one order.
              </p>
            </div>

            {/* Products */}
            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Our Top Picks</p>
              <div className="space-y-10">
                {PRODUCTS.map((p) => (
                  <div key={p.name}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-semibold" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{p.rank}</span>
                      <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{p.tag}</span>
                      <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: "#f0f7f1", color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>{p.type}</span>
                    </div>
                    <ProductCard
                      name={p.name}
                      description={p.description}
                      price={p.price}
                      affiliateUrl={p.affiliateUrl}
                    />
                  </div>
                ))}
              </div>
            </div>

            <UpsellCTA
              eyebrow="Build Your Home Studio"
              title="From props to a proper home setup"
              body="A ball, a ring and a mat cover the mat repertoire. The next step — the one that most changes results — is spring resistance. These are the two upgrades worth considering once props become routine."
              picks={[
                { name: "Manduka PRO Yoga Mat (6mm)", price: "$144", url: "https://www.amazon.com/dp/B0000DZFXZ?tag=pilatescollective-20", note: "Sold by Amazon.com. Dense and stable — the studio-standard surface for ball work." },
                { name: "WINDFOOT Foldable Pilates Reformer", price: "$295.99", url: "https://www.amazon.com/dp/B0D31767J1?tag=pilatescollective-20", note: "A budget spring reformer from a newer brand — the cheapest real spring reformer we have verified." },
              ]}
              guideHref="/blog/best-pilates-reformer-under-500"
              guideLabel="See every home reformer under $500"
            />

            {/* Exercises */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>3 exercises to start with (small ball)</h2>
              <div className="space-y-3">
                {EXERCISES.map((ex) => (
                  <div key={ex.name} className="flex items-start gap-4 rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <div className="flex-1">
                      <p className="text-sm font-semibold mb-0.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{ex.name}</p>
                      <p className="text-xs" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{ex.benefit}</p>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{ex.equipment}</span>
                      <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: "#f0f7f1", color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>{ex.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {FAQS.map((item) => (
                  <div key={item.q} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.q}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Further reading */}
            <div>
              <h2 className="text-2xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="Pilates Essentials: The Complete List" excerpt="The best, budget and splurge pick in every category — clothing, props, recovery and a home reformer, all on one page." href="/blog/pilates-essentials" category="Equipment" readTime="14 min read" date="September 2026" />
                <ArticleCard title="Pilates Princess Essentials" excerpt="The aesthetic edit that actually performs — matching sets, Bala Bangles, grip socks and at-home upgrades." href="/blog/pilates-princess-essentials" category="Clothing" readTime="12 min read" date="September 2026" />
                <ArticleCard title="Best Pilates Equipment for Home Practice" excerpt="The complete guide to building a home practice — mats, bands, rings, and more." href="/blog/best-pilates-equipment-for-home-practice" category="Equipment" readTime="10 min read" date="May 2026" imageUrl="/pictures/elena-kloppenburg-erUC4fTtCuo-unsplash.jpg" />
                <ArticleCard title="Best Home Pilates Reformer" excerpt="Every budget covered — from AeroPilates entry models to Balanced Body professional machines." href="/blog/best-home-pilates-reformer" category="Equipment" readTime="11 min read" date="May 2026" imageUrl="/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a Pilates studio near you" subtitle="Explore our curated city guides to find the best Pilates instruction worldwide." showSearch searchPlaceholder="Ask: best Pilates studios in Berlin…" />
      </main>
      <Footer />
    </>
  );
}
