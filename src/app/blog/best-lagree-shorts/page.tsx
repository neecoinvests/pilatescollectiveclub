import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Shorts for Lagree (2026): Tested & Ranked",
  description: "Shorts for Lagree — why bare skin sticks to a vinyl carriage, the inseam length that solves it, and six compressive squat-proof pairs ranked.",
  keywords: ["best shorts for lagree", "lagree shorts", "biker shorts lagree", "megaformer shorts", "compression shorts pilates", "squat proof biker shorts", "mens shorts for lagree", "shorts that dont ride up", "lagree outfit", "lagree shorts 2026"],
  openGraph: {
    title: "Best Shorts for Lagree (2026): Tested & Ranked",
    description: "Bare skin sticks to vinyl. The inseam length that fixes it, plus six compressive squat-proof pairs.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-lagree-shorts",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/ahmet-kurt-0xn-8kRWOhE-unsplash.jpg", width: 1200, height: 630, alt: "Best Shorts for Lagree — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Shorts for Lagree (2026)",
    description: "Inseam length, carriage grip and squat-proofing — six pairs ranked for Megaformer classes.",
    images: ["https://pilatescollectiveclub.com/pictures/ahmet-kurt-0xn-8kRWOhE-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-lagree-shorts" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Mid-Thigh Biker Short (7–8in Inseam)",
    price: "From $45",
    verdict: "Best overall short for Lagree",
    description:
      "Inseam length is the specification that matters here and almost nobody explains why. Lagree involves kneeling, seated and side-lying positions directly on a vinyl carriage, and bare skin on warm vinyl does two unwelcome things: it sticks, which interrupts a transition at exactly the wrong moment, and it leaves sweat on a shared surface. A 7 to 8 inch inseam reaching mid-thigh keeps fabric between you and the carriage in every position the repertoire uses, which a 3 or 5 inch short does not. Beyond length, the requirements match the leggings: firm compression so the short does not need hitching mid-set, a matte rather than buttery face so the leg does not slide, a wide flat waistband that survives inversions, and full opacity under a deep lunge. No side pockets, which catch on handles and cables.",
    affiliateUrl: "https://www.amazon.com/s?k=biker+shorts+7+inch+inseam+high+waist+squat+proof&tag=pilatescollective-20",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "Long Biker Short (10in Inseam)",
    price: "From $52",
    verdict: "Best coverage for kneeling-heavy formats",
    description:
      "A 10 inch inseam finishes just above the knee and is the right answer if your studio's format is heavy on kneeling work — wheelbarrow, kneeling lunges, catfish and the variations built around them. The extra three inches of fabric covers the lower thigh and the area just above the knee, which is precisely the contact zone in a loaded kneel and the region a mid-thigh short leaves exposed. It also spares you the skin-on-vinyl stickiness that makes transitions out of kneeling positions awkward. Practically this is a legging with the calf removed, which is the point: you get thigh coverage and carriage friction without the heat of a full-length pair. Check the hem sits snug, since a loose hem at the knee bunches behind the joint during deep flexion and becomes a distraction.",
    affiliateUrl: "https://www.amazon.com/s?k=long+biker+shorts+10+inch+inseam+compression&tag=pilatescollective-20",
    tag: "Best Coverage",
  },
  {
    rank: "03",
    name: "Biker Short with Silicone Leg Grippers",
    price: "From $58",
    verdict: "Best for shorts that will not ride up",
    description:
      "Riding up is the single most common complaint about shorts in any reformer-style class, and it has a specific cause: the fabric hem has less friction against your thigh than your thigh has against the carriage, so every time the leg slides the short travels upward. A silicone gripper band at the hem — borrowed from cycling shorts, where the same problem exists — anchors the leg and stops the migration entirely. If you have abandoned shorts for leggings purely because of this, this is the feature that brings them back. Two things to check: that the gripper is a continuous silicone band rather than printed dots, which do not hold, and that it is not so aggressive that it digs into the thigh across a 45-minute class. Size up if you are between sizes.",
    affiliateUrl: "https://www.amazon.com/s?k=biker+shorts+silicone+leg+grippers+compression&tag=pilatescollective-20",
    tag: "Best Anti-Ride-Up",
  },
  {
    rank: "04",
    name: "Men's Compression Short with Liner",
    price: "From $42",
    verdict: "Best option for men",
    description:
      "Men arriving at Lagree in loose basketball shorts discover the problem within about ten minutes: loose fabric slides freely on vinyl, rides to the hip in a lunge, and offers no coverage at all in kneeling positions. A fitted compression short with a built-in liner solves all of it, and the liner means it works as a single garment rather than something worn under a looser short. Look for a mid-thigh to knee length for the same carriage-contact reason as the women's pairs, a matte technical face rather than a glossy competition fabric, and flatlock seams to avoid chafing over a long continuous session. A drawcord plus a wide waistband is worth seeking out, since a waistband alone can slide during inversions. Avoid side pockets, which catch on handles and hold sweat.",
    affiliateUrl: "https://www.amazon.com/s?k=mens+compression+shorts+with+liner+flatlock+mid+thigh&tag=pilatescollective-20",
    tag: "Best for Men",
  },
  {
    rank: "05",
    name: "Ribbed / Textured Biker Short",
    price: "From $48",
    verdict: "Best carriage grip",
    description:
      "The same logic that makes a textured legging outperform a smooth one applies with more force to shorts, because there is less fabric doing the gripping. A ribbed or waffle-faced knit has measurably more mechanical friction against vinyl than a flat jersey, which translates directly into a leg that stays put during kneeling and lateral plank work. Ribbed knits also tend to be more opaque at the same weight, which handles the squat-proof question at the same time — useful in a mirrored studio with deep lunges. The trade-off is heat and a slightly heavier feel, which in a warm room over a long class is a genuine consideration, though noticeably less of one in a short than in a full-length legging. The best compromise in this category for anyone whose main complaint is sliding.",
    affiliateUrl: "https://www.amazon.com/s?k=ribbed+textured+biker+shorts+high+waist&tag=pilatescollective-20",
    tag: "Best Grip",
  },
  {
    rank: "06",
    name: "Biker Short Multipack Under $35",
    price: "From $30",
    verdict: "Best value for a class rotation",
    description:
      "Three or four classes a week means three or four pairs, and multipacks are how you get there without spending a class pack on clothing. The mid-market has largely converged on the right specification — high waistband, 7 or 8 inch inseam, no pockets — so a two or three pair pack often ticks the important boxes. Two checks on arrival. Do the daylight stretch test for opacity, since sheerness is where budget shorts most commonly fail and a mirrored studio is unforgiving. And check the waistband is a wide flat band rather than a thin elasticated casing, which rolls the first time you invert. Expect compression to soften within six to nine months of hot, sweaty use rather than lasting years. Wash cold, air dry, and keep one better pair for the classes where you want certainty.",
    affiliateUrl: "https://www.amazon.com/s?k=biker+shorts+multipack+high+waist+squat+proof&tag=pilatescollective-20",
    tag: "Best Value",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Shorts for Lagree (2026): Tested & Ranked",
      "description": "Shorts compared for Lagree and Megaformer classes — inseam length and carriage contact, compression, opacity, leg grippers and waistband security.",
      "url": "https://pilatescollectiveclub.com/blog/best-lagree-shorts",
      "datePublished": "2026-09-12",
      "dateModified": "2026-09-12",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/ahmet-kurt-0xn-8kRWOhE-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-lagree-shorts" },
    },
    {
      "@type": "ItemList",
      "name": "Best Shorts for Lagree (2026)",
      "numberOfItems": PRODUCTS.length,
      "itemListElement": PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "description": p.description,
          "offers": { "@type": "Offer", "priceCurrency": "USD", "price": p.price.replace(/[^0-9]/g, ""), "availability": "https://schema.org/InStock", "url": p.affiliateUrl },
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Shorts for Lagree", "item": "https://pilatescollectiveclub.com/blog/best-lagree-shorts" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Can you wear shorts to Lagree?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, provided the inseam is long enough. The constraint is not modesty but contact: Lagree uses kneeling, seated and side-lying positions directly on a vinyl carriage, and bare skin on warm vinyl sticks during transitions and leaves sweat on a shared surface. A mid-thigh biker short with a 7 to 8 inch inseam keeps fabric between you and the carriage in every position the repertoire uses. Short 3 or 5 inch running shorts and loose gym shorts are the wrong choice for both reasons, and loose fabric also slides freely on the carriage." } },
        { "@type": "Question", "name": "What inseam length is best for Lagree?", "acceptedAnswer": { "@type": "Answer", "text": "Seven to eight inches, reaching mid-thigh, is the sweet spot for most formats — enough coverage for kneeling and seated carriage work without the heat of a full-length legging. Go to ten inches if your studio's format is heavy on kneeling sequences, since the extra length covers the lower thigh and the area just above the knee, which is exactly the contact zone in a loaded kneel. Below about five inches you will have skin on vinyl in several positions, which is the thing the length is there to prevent." } },
        { "@type": "Question", "name": "Why do my shorts ride up during Lagree?", "acceptedAnswer": { "@type": "Answer", "text": "Because the hem has less grip on your thigh than your thigh has on the carriage. Every time the leg slides across the vinyl, the short travels upward rather than moving with you. A silicone gripper band at the hem — the same solution cycling shorts use for the same problem — anchors the leg and stops the migration. Firmer overall compression helps too, since a loose short has more freedom to move. If a pair rides up in the first class, it will ride up in every class; no amount of wearing in fixes it." } },
        { "@type": "Question", "name": "Shorts or leggings for Lagree?", "acceptedAnswer": { "@type": "Answer", "text": "Both work, and the choice mostly comes down to studio temperature. Leggings give maximum carriage coverage and friction, which is why they are the default. Shorts in the 7 to 10 inch range give nearly all of the coverage that matters — the thigh — while venting the calf, which is a real advantage in a hot studio. What does not work is a short inseam or anything loose. If you are choosing one to start with, leggings are the safer purchase; shorts are the upgrade once you know your studio runs warm." } },
      ],
    },
  ],
};

export default function BestLagreeShortsPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Lagree</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Shorts<br /><span style={{ color: "#8b4a31" }}>for Lagree (2026)</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 8 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Inseam length decides this category, and the reason has nothing to do with modesty. Lagree puts you in kneeling, seated and side-lying positions directly on a vinyl carriage, and bare skin on warm vinyl sticks at exactly the wrong moment — as well as leaving sweat on a shared surface. Seven to eight inches keeps fabric between you and the carriage everywhere the repertoire goes. Everything else follows the leggings rules.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/ahmet-kurt-0xn-8kRWOhE-unsplash.jpg" alt="Studio training in compressive shorts — inseam length governs carriage contact" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
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
                  <a href={p.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow"
                    style={{ display: "block", fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "10px 14px", whiteSpace: "nowrap", flexShrink: 0 }}
                  >Buy →</a>
                </div>
              ))}
            </div>

            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Pairs · Ranked</p>
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

            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#fff4f1", border: "1px solid rgba(139,74,49,0.15)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What to avoid</h2>
              <ul className="space-y-3">
                {[
                  "Inseams under five inches. You will have skin on vinyl in kneeling and seated positions, which sticks and is a hygiene issue on shared equipment.",
                  "Loose or flowy gym shorts. They slide freely on the carriage, ride to the hip in a lunge, and hide your alignment from the instructor.",
                  "Side pockets. They catch on handles and cables and hold sweat.",
                  "Printed silicone dots at the hem instead of a continuous gripper band — dots do not hold.",
                  "Thin elasticated waistband casings. They roll during inversions; wide flat bands only.",
                  "Anything that fails a daylight stretch test. Mirrored studios and deep lunges are unforgiving of sheer fabric.",
                ].map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    <span className="font-semibold" style={{ color: "#8b4a31" }}>⚠</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "Can you wear shorts to Lagree?", a: "Yes, provided the inseam is long enough. The constraint is not modesty but contact: Lagree uses kneeling, seated and side-lying positions directly on a vinyl carriage, and bare skin on warm vinyl sticks during transitions and leaves sweat on a shared surface. A mid-thigh biker short with a 7 to 8 inch inseam keeps fabric between you and the carriage in every position the repertoire uses. Short 3 or 5 inch running shorts and loose gym shorts are the wrong choice for both reasons, and loose fabric also slides freely on the carriage." },
                  { q: "What inseam length is best for Lagree?", a: "Seven to eight inches, reaching mid-thigh, is the sweet spot for most formats — enough coverage for kneeling and seated carriage work without the heat of a full-length legging. Go to ten inches if your studio's format is heavy on kneeling sequences, since the extra length covers the lower thigh and the area just above the knee, which is exactly the contact zone in a loaded kneel. Below about five inches you will have skin on vinyl in several positions, which is the thing the length is there to prevent." },
                  { q: "Why do my shorts ride up during Lagree?", a: "Because the hem has less grip on your thigh than your thigh has on the carriage. Every time the leg slides across the vinyl, the short travels upward rather than moving with you. A silicone gripper band at the hem — the same solution cycling shorts use for the same problem — anchors the leg and stops the migration. Firmer overall compression helps too, since a loose short has more freedom to move. If a pair rides up in the first class, it will ride up in every class; no amount of wearing in fixes it." },
                  { q: "Shorts or leggings for Lagree?", a: "Both work, and the choice mostly comes down to studio temperature. Leggings give maximum carriage coverage and friction, which is why they are the default. Shorts in the 7 to 10 inch range give nearly all of the coverage that matters — the thigh — while venting the calf, which is a real advantage in a hot studio. What does not work is a short inseam or anything loose. If you are choosing one to start with, leggings are the safer purchase; shorts are the upgrade once you know your studio runs warm." },
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
                <ArticleCard title="Best Leggings for Lagree" excerpt="Why buttery fabrics slide on a vinyl carriage, and the compressive pairs that hold." href="/blog/best-leggings-for-lagree" category="Lagree" readTime="8 min read" date="September 2026" imageUrl="/pictures/stitch-retail-activewear.png" />
                <ArticleCard title="Best Knee Pads for Lagree" excerpt="Why wearable padding beats a loose cushion on a moving carriage." href="/blog/best-lagree-knee-pads" category="Lagree" readTime="8 min read" date="September 2026" imageUrl="/pictures/stitch-hands-on-carriage.png" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best Pilates studios in New York..." />
      </main>
      <Footer />
    </>
  );
}
