import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Sports Bra (2026): Coverage & Studio Style — Tested",
  description: "The best sports bras for Pilates tested for instructor visibility, reformer comfort, and coverage in inversions — from Lululemon Free to Be to Alo Airlift.",
  openGraph: {
    title: "Best Sports Bras for Pilates (2026): Coverage & Studio Style",
    description: "The bra your instructor is wearing — and the four alternatives worth considering at every price point.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-pilates-sports-bra",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-studio-round-mirror.png", width: 1200, height: 630, alt: "Best Sports Bras for Pilates — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Sports Bras for Pilates (2026)",
    description: "The best sports bras for Pilates — honest reviews from Lululemon to Alo to Girlfriend Collective.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-studio-round-mirror.png"],
  },
  keywords: ["best sports bra for pilates", "pilates sports bra", "best bra for pilates", "lululemon pilates bra", "alo airlift bra pilates", "sports bra reformer pilates", "pilates bra coverage", "best workout bra pilates 2026", "low impact sports bra pilates", "pilates studio bra"],
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-pilates-sports-bra" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Lululemon Free to Be Bra",
    price: "From $48",
    verdict: "Best overall",
    tag: "Editor's Pick",
    description:
      "The Free to Be is the gold standard for Pilates. Buttery-soft Nulu fabric, a scoop neck that stays in place through every roll-down and swan, and just enough structure for medium-impact work. The internal shelf provides coverage in inversions without restrictive underwire. No clasps, no hardware, no seams that press against the reformer headrest in supine — it solves every practical problem a Pilates bra needs to solve.",
    affiliateUrl: "https://www.amazon.com/s?k=lululemon+free+to+be+bra&tag=pilatescollective-20",
  },
  {
    rank: "02",
    name: "Alo Yoga Airlift Bra",
    price: "From $62",
    verdict: "Best for studio aesthetics",
    tag: "Studio Favourite",
    description:
      "The Airlift Bra defines the boutique studio aesthetic. The spaghetti strap and open keyhole back look exceptional, and Alo&apos;s signature Airlift material lifts without wires. Medium support, excellent shape retention, and the open back requires a long tank or high-waist legging. One practical note: the strap hardware sits at the back of the shoulder — check it doesn&apos;t press against the reformer carriage in long supine exercises before committing to it for all your classes.",
    affiliateUrl: "https://www.amazon.com/s?k=alo+yoga+airlift+bra&tag=pilatescollective-20",
  },
  {
    rank: "03",
    name: "Varley Topa Bra",
    price: "From $55",
    verdict: "Best boutique brand option",
    tag: "Boutique Pick",
    description:
      "Varley designs specifically for the reformer studio, and the Topa shows it. The adjustable racerback keeps straps out of the way during arm circles and rowing, the padding is removable and correctly positioned, and the fabric has a subtle texture that elevates the studio look. Wider band than most bralettes, which improves stability during the hundred and other abdominal work. Strong colour range from muted neutrals to soft pastels.",
    affiliateUrl: "https://www.amazon.com/s?k=varley+pilates+bra&tag=pilatescollective-20",
  },
  {
    rank: "04",
    name: "Gymshark Flex Strappy Sports Bra",
    price: "From $35",
    verdict: "Best value",
    tag: "Best Value",
    description:
      "At roughly half the price of Lululemon or Alo, the Gymshark Flex Strappy punches genuinely well. Medium support, good coverage through inversions, an attractive strappy back detail, and the Flex fabric holds shape wash after wash. The main difference from premium options is a slightly less luxurious fabric feel — but the functional performance is strong for the price. A good option for newer practitioners who want quality without the full investment.",
    affiliateUrl: "https://www.amazon.com/s?k=gymshark+flex+strappy+sports+bra&tag=pilatescollective-20",
  },
  {
    rank: "05",
    name: "Girlfriend Collective Paloma Bra",
    price: "From $45",
    verdict: "Best sustainable option",
    tag: "Ethical Pick",
    description:
      "Made from recycled materials, the Paloma Bra is an ethical choice that doesn&apos;t compromise on performance. The wide-strap racerback provides excellent shoulder coverage, the cups are well-padded, and the compression level is ideal for Pilates. The muted, earthy colour palette fits the reformer studio aesthetic perfectly. B Corp certified and size-inclusive — one of the few brands in this space that genuinely caters to a wide range of body types.",
    affiliateUrl: "https://www.amazon.com/s?k=girlfriend+collective+paloma+bra+sports&tag=pilatescollective-20",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://pilatescollectiveclub.com/blog/best-pilates-sports-bra/#article",
      "headline": "Best Sports Bras for Pilates (2026): Coverage, Support & Studio Style",
      "description": "The best sports bras for Pilates tested for instructor visibility, reformer comfort, and coverage in inversions.",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-studio-round-mirror.png", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "@id": "https://pilatescollectiveclub.com/#organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "@id": "https://pilatescollectiveclub.com/#organization", "name": "Pilates Collective Club", "logo": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/pcc-logo.png" } },
      "datePublished": "2026-06-01",
      "dateModified": "2026-06-14",
      "url": "https://pilatescollectiveclub.com/blog/best-pilates-sports-bra",
      "mainEntityOfPage": "https://pilatescollectiveclub.com/blog/best-pilates-sports-bra",
      "articleSection": "Apparel Guide",
      "inLanguage": "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Pilates Sports Bra", "item": "https://pilatescollectiveclub.com/blog/best-pilates-sports-bra" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Do you need a sports bra for Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — but not a high-impact one. Pilates instructors need clear sightlines to your spine, ribcage, and shoulder alignment. A well-fitted light-to-medium support bra keeps coverage appropriate without blocking the visual feedback your instructor uses to correct form." } },
        { "@type": "Question", "name": "Should you wear underwire to Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "No. Underwire presses into the ribcage and sternum during supine work on the reformer, and it restricts the lateral and posterior rib expansion central to Pilates breathing. An internal shelf bra or bralette without underwire is the correct choice for Pilates." } },
        { "@type": "Question", "name": "Is a low or high impact sports bra better for Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "Light to medium impact. Pilates is not a running or jumping workout — high-impact encapsulation bras are unnecessary and often too restrictive for the thoracic breathing that Pilates requires. A light-to-medium compression bralette provides comfort and coverage without restricting movement." } },
      ],
    },
  ],
};

export default function BestPilatesSportsBraPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Apparel Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Sports Bras</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Pilates Sports Bra<br /><span style={{ color: "#8b4a31" }}>(2026): Coverage & Style</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated June 2026 · 8 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              The sports bra choice matters more in Pilates than in almost any other workout. Your instructor needs to see your ribcage expansion during breathing, your shoulder blade position during rowing, and your spinal curve through every transition. Underwire, thick padding, and crossing straps all get in the way. This guide covers five options that don&apos;t — tested for reformer comfort, inversion coverage, and the realities of a 50-minute studio class.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-studio-round-mirror.png" alt="Airy Pilates studio with round mirror — sports bra guide" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-10 mt-4 overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
              <div className="px-6 py-4" style={{ backgroundColor: "#f6f3f2" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Quick Picks — At a Glance</p>
              </div>
              {PRODUCTS.map((p, i) => (
                <div key={p.name} className="flex items-center gap-3 sm:gap-4 px-6 py-4" style={{ borderTop: i === 0 ? "none" : "1px solid rgba(217,194,186,0.25)", backgroundColor: "#ffffff" }}>
                  <span className="text-base font-semibold w-7 shrink-0 text-center" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{p.rank}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold leading-tight" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{p.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{p.verdict}</p>
                  </div>
                  <span className="text-xs font-semibold hidden md:block shrink-0 mr-3" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{p.price}</span>
                  <a href={p.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow" style={{ display: "block", fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "10px 14px", whiteSpace: "nowrap", flexShrink: 0 }}>Buy →</a>
                </div>
              ))}
            </div>

            <div className="mb-16 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What the reformer studio demands from a sports bra</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { heading: "No underwire", body: "Underwire presses into the sternum and ribcage during supine reformer work. It also restricts the lateral rib expansion that Pilates breathing requires. Internal shelf construction is the correct choice." },
                  { heading: "Instructor sightlines", body: "Your instructor tracks your spinal curve, scapular position, and ribcage through every exercise. Thick padding, high backs, and bulky straps obscure exactly what they need to see." },
                  { heading: "Inversion coverage", body: "Roll-downs and supine exercises mean the bra needs to stay put when you change position. Test coverage before committing to a bra for class — pull forward and check it holds." },
                  { heading: "Light-to-medium support only", body: "Pilates is low-impact. High-compression encapsulation bras restrict the thoracic breathing that&apos;s central to the method. Choose comfort and freedom of movement over maximum hold." },
                ].map((item) => (
                  <div key={item.heading} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.heading}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Sports Bras · Studio-Tested</p>
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
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>How to care for a Pilates sports bra</h2>
              <ul className="space-y-3">
                {[
                  "Wash inside-out on a cold, delicate cycle. High heat degrades both the elastic and moisture-management properties of Nulu and Airlift fabrics.",
                  "Air dry flat — tumble drying collapses the cup structure and warps padding over time.",
                  "Never use fabric softener on technical fabrics. It coats the fibres and reduces their ability to manage moisture.",
                  "Rotate between two or three bras so each can recover its shape between sessions.",
                  "Replace when the band loses elasticity — a band that rides up during class is both annoying and a signal the bra is no longer providing correct support.",
                ].map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    <span className="font-semibold shrink-0" style={{ color: "#8b4a31" }}>{i + 1}.</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "Do you need a sports bra for Pilates?", a: "Yes — but not a high-impact one. Pilates instructors need clear sightlines to your spine, ribcage, and shoulder alignment. A well-fitted light-to-medium support bra keeps coverage appropriate without blocking the visual feedback your instructor uses to correct form." },
                  { q: "Should you wear underwire to Pilates?", a: "No. Underwire presses into the ribcage and sternum during supine work on the reformer, and it restricts the lateral and posterior rib expansion central to Pilates breathing. An internal shelf bra or bralette without underwire is the correct choice." },
                  { q: "Is a low or high impact sports bra better for Pilates?", a: "Light to medium impact. Pilates is not a running or jumping workout — high-impact encapsulation bras are unnecessary and often too restrictive for the thoracic breathing that Pilates requires. A light-to-medium compression bralette provides comfort and coverage without restricting movement." },
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
                <ArticleCard title="Best Pilates Shorts (2026)" excerpt="5-inch and 6-inch inseam options tested for reformer coverage, waistband stability, and studio aesthetics." href="/blog/best-pilates-shorts" category="Apparel" readTime="7 min read" date="June 2026" imageUrl="/pictures/stitch-retail-activewear.png" />
                <ArticleCard title="What to Wear to Pilates" excerpt="The complete guide to choosing the right clothes for studio and reformer classes." href="/blog/what-to-wear-to-pilates" category="Guide" readTime="6 min read" date="May 2026" imageUrl="/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg" />
              </div>
            </div>

          </div>
        </section>

        <CTASection title="Find the best Pilates studios near you" subtitle="Our city guides cover the top reformer studios in 50+ cities worldwide." />
      </main>
      <Footer />
    </>
  );
}
