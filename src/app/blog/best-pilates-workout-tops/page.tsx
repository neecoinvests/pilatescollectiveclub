import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Tops & Sports Bras (2026): Studio-Tested | Pilates Collective Club",
  description: "The best Pilates tops and sports bras tested for coverage, instructor visibility, and reformer comfort — Lululemon, Alo Yoga, Varley, and more honestly ranked.",
  keywords: ["best pilates tops", "pilates sports bras", "best pilates workout top", "pilates top review", "pilates studio top", "best sports bra pilates", "lululemon pilates top", "alo yoga pilates bra", "varley pilates top", "pilates activewear top 2026"],
  openGraph: {
    title: "Best Pilates Tops & Sports Bras (2026): Tested for Studio Wear",
    description: "The best workout tops and sports bras for Pilates — tested for coverage, instructor visibility, and reformer comfort.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-workout-tops",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg", width: 1200, height: 630, alt: "Best Pilates Workout Tops — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Tops & Sports Bras (2026)",
    description: "The best workout tops and sports bras for Pilates — tested and ranked.",
    images: ["https://pilatescollectiveclub.com/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/blog/best-pilates-workout-tops",
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Lululemon Align Tank Top",
    price: "From $68",
    verdict: "Best overall Pilates tank top",
    description:
      "The Align tank is the top equivalent of the Align legging — the same buttery Nulu fabric in a fitted, racerback silhouette with a built-in shelf bra. The coverage is full front and back, with no riding up during arm-overhead exercises or shoulder stand prep. The shelf bra provides light support suitable for low-impact work; practitioners who need more support should layer it over a dedicated sports bra. The fabric does not retain odour or pill with regular washing. A wardrobe staple for most regular Pilates practitioners — the neutral colours make it a versatile base layer for any studio.",
    affiliateUrl: "https://www.amazon.com/s?k=lululemon+align+tank+top&tag=matchaspot-20",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "Alo Yoga Airlift Intrigue Bra",
    price: "From $62",
    verdict: "Best sports bra for reformer Pilates",
    description:
      "Alo's Airlift Intrigue is the benchmark for sports bras in the Pilates studio environment. The medium-impact support is exactly right for reformer work — secure enough to be stable during dynamic movements, with none of the compression that makes high-impact bras uncomfortable during sustained floor-based work. The racerback design allows full shoulder mobility. The Airlift fabric is notably comfortable during the lying positions that characterise reformer Pilates — no underwire, no seams in uncomfortable positions, no bunching when the body changes orientation from supine to prone to side-lying.",
    affiliateUrl: "https://www.amazon.com/s?k=alo+yoga+airlift+intrigue+bra&tag=matchaspot-20",
    tag: "Best Sports Bra",
  },
  {
    rank: "03",
    name: "Varley Stratford Bra Top",
    price: "From $55",
    verdict: "Best boutique studio top",
    description:
      "Varley has become the defining aesthetic of the upscale Pilates studio — their pieces are what you see at boutique reformer studios in London, New York, and Los Angeles. The Stratford bra top combines medium support with an elevated, tailored look that reads as appropriate in a luxury studio context without sacrificing function. The thick strap construction sits cleanly on the shoulders without sliding during dynamic arm work. The fabric handles the transition from reformer to post-class street wear without looking like activewear in the conventional sense.",
    affiliateUrl: "https://www.amazon.com/s?k=varley+stratford+bra+top&tag=matchaspot-20",
    tag: "Boutique Studio",
  },
  {
    rank: "04",
    name: "Girlfriend Collective Paloma Bralette",
    price: "From $48",
    verdict: "Best sustainable option",
    description:
      "Girlfriend Collective makes their activewear from recycled plastic bottles, and the Paloma bralette is the most functional piece in their Pilates-relevant range. Light support (appropriate for smaller busts or layering under a tank), clean lines that don't interfere with instructor observation of spinal alignment, and a fabric quality that improves with washing rather than degrading. The brand's commitment to inclusive sizing — up to 6XL — makes it the only premium sustainable option that genuinely works across a wide range of body types and cup sizes.",
    affiliateUrl: "https://www.amazon.com/s?k=girlfriend+collective+paloma+bralette&tag=matchaspot-20",
    tag: "Sustainable",
  },
  {
    rank: "05",
    name: "CRZ YOGA Seamless Long Sleeve",
    price: "From $35",
    verdict: "Best budget top",
    description:
      "For colder studios or practitioners who prefer more coverage, CRZ YOGA's seamless long sleeve is the best budget option. The fitted, four-way stretch construction moves without restriction through the full Pilates movement vocabulary, and the seamless construction eliminates the pressure points that standard seamed tops create when lying on a mat or reformer carriage. The thumb holes keep the sleeve in place during overhead work. Coverage and warmth with no compromise on mobility — at a price point that makes having multiple options practical.",
    affiliateUrl: "https://www.amazon.com/s?k=crz+yoga+seamless+long+sleeve+top&tag=matchaspot-20",
    tag: "Best Budget",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Tops & Sports Bras (2026): Tested for Studio Wear",
      "description": "The best workout tops and sports bras for Pilates in 2026 — tested for coverage, visibility, and reformer comfort.",
      "url": "https://pilatescollectiveclub.com/blog/best-pilates-workout-tops",
      "datePublished": "2026-05-14",
      "dateModified": "2026-05-14",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-pilates-workout-tops" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Pilates Tops", "item": "https://pilatescollectiveclub.com/blog/best-pilates-workout-tops" },
      ],
    },
  {
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Should I wear a sports bra or a built-in tank for Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "Both work. A dedicated sports bra under a tank gives you the most flexibility — you can adjust layers based on studio temperature and preference. A built-in shelf bra tank is convenient for practitioners who don't need significant support. A padded built-in bra is rarely suitable as the sole layer during active reformer work." } },
      { "@type": "Question", "name": "Why do Pilates instructors care what you wear?", "acceptedAnswer": { "@type": "Answer", "text": "Pilates is a movement precision practice. Instructors observe spinal alignment, pelvic position, shoulder placement, and knee tracking in every exercise. Baggy or voluminous tops obscure the body landmarks they need to observe to give effective corrections. This is why fitted, body-conscious clothing is the norm in Pilates studios — it serves the instruction, not just aesthetics." } },
      { "@type": "Question", "name": "Can I wear a regular gym top to a reformer class?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — any fitted top without loose fabric or hardware works. The only functional requirements are that it stays in place across all positions and allows full shoulder mobility. The premium brands recommended here go beyond minimum functionality, but any fitted athletic top without these problems is appropriate." } },
      { "@type": "Question", "name": "What about wearing a hoodie or sweater over my top in class?", "acceptedAnswer": { "@type": "Answer", "text": "Layering for warmth before class is sensible. Most instructors will ask you to remove outer layers once class begins — a hoodie prevents the spinal observation that allows effective cueing. Keep a warm layer for the walk to and from the studio; plan to wear your studio top during the session itself." } }
    ]
  },
  ],
};

export default function BestPilatesWorkoutTopsPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Apparel</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Pilates Tops &amp; Sports Bras<br /><span style={{ color: "#8b4a31" }}>(2026): Studio-Tested</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 8 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Pilates tops need to do something most activewear tops don&apos;t: stay in place and provide clean lines for instructor observation across an enormous range of body positions — lying supine, prone, side-lying, seated, standing, and everything in between. A top that rides up during the hundred, bunches during shoulder bridge, or restricts shoulder mobility during long stretch makes the class both uncomfortable and less effective. These five options have been selected because they actually solve these problems.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg" alt="Best Pilates workout tops and sports bras for studio and reformer — Lululemon, Alo, and Varley tested" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-16 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What makes a Pilates top different</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { heading: "Coverage across positions", body: "A top that covers the midriff while standing may not cover it in seated flexion, supine position, or during side-lying leg work. Test coverage across positions, not just standing." },
                  { heading: "No riding up", body: "Reformer work involves sustained lying and rolling. A top that stays in place in a standing twist must also stay down during roll-ups and the hundred. Longer hems and body-conscious cuts are essential." },
                  { heading: "Shoulder mobility", body: "Overhead work, the long stretch series, and open-leg rocker require full shoulder mobility. Tops with tight armholes or wide straps that pull restrict the arm movement Pilates demands." },
                  { heading: "Support level", body: "Pilates is low-impact but involves significant postural changes. Medium support — enough to be stable without compression — is the ideal. High-impact bras are unnecessarily restrictive during floor-based work." },
                ].map((item) => (
                  <div key={item.heading} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.heading}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Tops & Bras · Studio-Tested</p>
              <div className="space-y-10">
                {PRODUCTS.map((p) => (
                  <div key={p.name}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-semibold" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{p.rank}</span>
                      <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{p.tag}</span>
                    </div>
                    <ProductCard name={p.name} description={p.description} price={p.price} affiliateUrl={p.affiliateUrl} />
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Building a Pilates wardrobe that works</h2>
              <ul className="space-y-3">
                {[
                  "Start with two to three tank tops or long sleeves in neutral colours — these work across every studio aesthetic and don't visually compete with your instructor's cues.",
                  "A medium-support sports bra worn under a tank gives you modular flexibility: the bra works alone in warm studios, the tank alone for cooler days, both together for high-movement classes.",
                  "Avoid tops with loose fabric, pockets, or decorative hardware. Anything that catches on a reformer strap or footbar during a class is a distraction and a safety consideration.",
                  "Machine wash cold, air dry. Performance fabrics lose shape faster in tumble driers — particularly the four-way stretch materials that make fitted Pilates tops functional.",
                  "Replace when the hem loses elasticity and begins to ride up. A hem that doesn't stay down during the rollover is not just annoying — it signals that the fabric's recovery has failed.",
                ].map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    <span className="font-semibold" style={{ color: "#8b4a31" }}>{i + 1}.</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "Should I wear a sports bra or a built-in tank for Pilates?", a: "Both work. A dedicated sports bra under a tank gives you the most flexibility — you can adjust layers based on studio temperature and preference. A built-in shelf bra tank is convenient for practitioners who don't need significant support. A padded built-in bra is rarely suitable as the sole layer during active reformer work." },
                  { q: "Why do Pilates instructors care what you wear?", a: "Pilates is a movement precision practice. Instructors observe spinal alignment, pelvic position, shoulder placement, and knee tracking in every exercise. Baggy or voluminous tops obscure the body landmarks they need to observe to give effective corrections. This is why fitted, body-conscious clothing is the norm in Pilates studios — it serves the instruction, not just aesthetics." },
                  { q: "Can I wear a regular gym top to a reformer class?", a: "Yes — any fitted top without loose fabric or hardware works. The only functional requirements are that it stays in place across all positions and allows full shoulder mobility. The premium brands recommended here go beyond minimum functionality, but any fitted athletic top without these problems is appropriate." },
                  { q: "What about wearing a hoodie or sweater over my top in class?", a: "Layering for warmth before class is sensible. Most instructors will ask you to remove outer layers once class begins — a hoodie prevents the spinal observation that allows effective cueing. Keep a warm layer for the walk to and from the studio; plan to wear your studio top during the session itself." },
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
                <ArticleCard title="What to Wear to Pilates" excerpt="The complete guide to choosing the right clothes for studio and reformer classes." href="/blog/what-to-wear-to-pilates" category="Guide" readTime="6 min read" date="May 2026" imageUrl="/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg" />
                <ArticleCard title="Best Pilates Leggings" excerpt="From Lululemon Align to CRZ YOGA — tested for opacity, waistband stability, and reformer performance." href="/blog/best-pilates-leggings" category="Equipment" readTime="9 min read" date="May 2026" imageUrl="/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best Pilates studios in Barcelona…" />
      </main>
      <Footer />
    </>
  );
}
