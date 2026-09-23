import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Ball (2026): Honestly Verified",
  description: "We could not confirm live Amazon listings for the standalone mini and stability balls this guide used to recommend, under brands like Trideer, Gaiam, URBNFit, Live Pro, or TheraBand. The closest real, currently-sold option we could verify is the Byrex Pilates Prop Kit ($19.99), which bundles a small ball with a ring and resistance bands.",
  openGraph: {
    title: "Best Pilates Ball (2026): Honestly Verified",
    description: "No standalone Pilates ball listing could be verified on Amazon — here's the honest situation and the closest real bundle option.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-ball",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg", width: 1200, height: 630, alt: "Best Pilates Ball — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Ball (2026)",
    description: "Honestly verified — what's actually sold on Amazon.",
    images: ["https://pilatescollectiveclub.com/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg"],
  },
  keywords: ["best pilates ball", "pilates mini ball 2026", "pilates prop kit", "pilates ball exercises", "small ball for pilates"],
  alternates: {
    canonical: "https://pilatescollectiveclub.com/blog/best-pilates-ball",
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Byrex Pilates Prop Kit",
    type: "Bundle",
    price: "$19.99",
    tag: "Honest Pick — Bundle",
    description:
      "A note before anything else: this guide previously listed five standalone balls — a Trideer mini ball, a Gaiam stability ball, an URBNFit stability ball, a Live Pro mini ball, and a TheraBand stability ball — with specific sizes and prices. We could not confirm live Amazon listings for any of them under those names, so they've been removed rather than pointed at guessed-at claims. The one prop we could verify as a real, currently-sold Amazon listing is the Byrex Pilates Prop Kit at $19.99, which bundles a small ball with a ring and resistance bands. It is not a standalone ball and it is not a large stability/exercise ball at all — buy it if the bundle format and small-ball size work for you, but it is not a substitute if a 55–75cm stability ball is specifically what you're after.",
    affiliateUrl: "https://www.amazon.com/dp/B0GSJHPSQT?tag=pilatescollective-20",
  },
];

const EXERCISES = [
  { name: "Mini ball inner thigh squeeze", equipment: "Small ball", level: "All levels", benefit: "Activates adductors, stabilises pelvis" },
  { name: "Ball-supported bridge", equipment: "Small ball", level: "Beginner–Intermediate", benefit: "Deepens glute activation, challenges pelvic stability" },
  { name: "Thoracic extension over ball", equipment: "Small ball", level: "All levels", benefit: "Mobilises thoracic spine, counters desk posture" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://pilatescollectiveclub.com/blog/best-pilates-ball/#article",
      "headline": "Best Pilates Ball (2026): Honestly Verified",
      "description": "We could not confirm live Amazon listings for the standalone balls this guide used to recommend. The closest real, currently-sold option is a bundle, not a standalone ball.",
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
      "dateModified": "2026-09-23",
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
      "mainEntity": [
    {
      "@type": "Question",
      "name": "Is there a real standalone Pilates ball sold on Amazon?",
      "acceptedAnswer": { "@type": "Answer", "text": "Not one we could verify. We checked for live listings under Trideer, Gaiam, URBNFit, Live Pro, and TheraBand and could not confirm any of them as currently-sold standalone Pilates balls at the sizes and prices we'd previously listed. The closest real, live Amazon listing we could verify is the Byrex Pilates Prop Kit, which bundles a small ball with a ring and resistance bands rather than selling a ball alone." }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a mini Pilates ball and a stability ball?",
      "acceptedAnswer": { "@type": "Answer", "text": "In general, a mini Pilates ball (roughly 8–10 inches) is a prop for tactile feedback and precision cueing, while a larger stability ball (roughly 55–75cm) is used for seated balance and core work. We don't currently have a verified Amazon listing for a large stability ball, so this is general context rather than a claim about a specific product we sell." }
    },
    {
      "@type": "Question",
      "name": "How inflated should a Pilates mini ball be?",
      "acceptedAnswer": { "@type": "Answer", "text": "As a general rule, firm enough to maintain shape but soft enough to compress under pressure. Check the specific product's instructions, since inflation guidance varies by model." }
    },
    {
      "@type": "Question",
      "name": "Does the Byrex Pilates Prop Kit include a large stability ball?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. It bundles a small ball with a ring and resistance bands for $19.99. If a large 55–75cm stability ball is specifically what you need, we do not currently have a verified Amazon listing to point you to." }
    }
      ]
    },
  ],
};

export default function BestPilatesBallPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
              Best Pilates Ball<br /><span style={{ color: "#8b4a31" }}>(2026): Honestly Verified</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 7 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              This guide previously ranked five Pilates balls — mini balls and larger stability balls across several brands — with specific sizes and prices. On closer checking, we could not confirm live Amazon listings matching those specific products, so we&apos;ve removed them and are disclosing the gap honestly below, along with the closest real bundle we could verify.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg" alt="Best Pilates ball — honestly verified against live Amazon listings" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            {/* Mini vs Stability */}
            <div className="mb-16 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Mini ball vs stability ball: which do you need?</h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                This is general guidance on the two forms Pilates balls typically come in — we could not verify a specific standalone product for either category, so treat it as background knowledge rather than a spec sheet for our pick below.
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
                We do not currently have a verified Amazon listing for a large stability ball, so if that&apos;s specifically what you need, treat this page as background reading rather than a source for that purchase.
              </p>
            </div>

            {/* Products */}
            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>What We Could Verify</p>
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
                {[
                  { q: "Is there a real standalone Pilates ball sold on Amazon?", a: "Not one we could verify. We checked for live listings under Trideer, Gaiam, URBNFit, Live Pro, and TheraBand and could not confirm any of them as currently-sold standalone Pilates balls at the sizes and prices we'd previously listed. The closest real, live Amazon listing we could verify is the Byrex Pilates Prop Kit, which bundles a small ball with a ring and resistance bands rather than selling a ball alone." },
                  { q: "What is the difference between a mini Pilates ball and a stability ball?", a: "In general, a mini Pilates ball (roughly 8–10 inches) is a prop for tactile feedback and precision cueing, while a larger stability ball (roughly 55–75cm) is used for seated balance and core work. We don't currently have a verified Amazon listing for a large stability ball, so this is general context rather than a claim about a specific product we sell." },
                  { q: "How inflated should a Pilates mini ball be?", a: "As a general rule, firm enough to maintain shape but soft enough to compress under pressure. Check the specific product's instructions, since inflation guidance varies by model." },
                  { q: "Does the Byrex Pilates Prop Kit include a large stability ball?", a: "No. It bundles a small ball with a ring and resistance bands for $19.99. If a large 55–75cm stability ball is specifically what you need, we do not currently have a verified Amazon listing to point you to." },
                ].map((item) => (
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
