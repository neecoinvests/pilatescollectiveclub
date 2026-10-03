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
  title: "Best Leggings for Lagree (2026): 5 Pairs by Use",
  description: "The best leggings for Lagree: what matters on a moving Megaformer carriage, plus five verified pairs from budget to premium, including a men's option.",
  keywords: ["leggings for lagree", "best leggings for lagree", "lagree leggings", "squat proof leggings lagree", "what leggings for megaformer", "lagree outfit leggings", "megaformer leggings", "lululemon wunder train lagree", "mens leggings lagree", "lagree leggings 2026"],
  openGraph: {
    title: "Best Leggings for Lagree (2026): 5 Pairs by Use",
    description: "What a legging needs to do on a Megaformer, and five verified pairs from budget to premium, plus a men's option.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-leggings-for-lagree",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-retail-activewear.png", width: 1200, height: 630, alt: "Best Leggings for Lagree — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Leggings for Lagree (2026)",
    description: "What a legging needs to do on a moving carriage, and five verified pairs worth wearing to class.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-retail-activewear.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-leggings-for-lagree" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "CRZ YOGA Butterluxe Leggings 25\"",
    price: "$32.00",
    verdict: "Best overall value for Lagree",
    description:
      "The pair we would point most people to first, because it gets the Lagree basics right at a price that makes owning two or three realistic, which matters when you are sweating through a pair every class. It is a high-waisted legging with a 25-inch inseam, which lands at or just above the ankle on most people depending on height. That length is a sensible middle ground for a Megaformer: you keep full coverage on the thigh and knee, where you kneel and plank on the carriage, without a long hem bunching at the ankle or sitting near the footbar. Butterluxe is CRZ's soft-feel line, and the name tells you what it is selling. The honest caveat is the one this whole page turns on: the softer and slicker a fabric face, the less it holds against a vinyl carriage. If you find your knee or thigh creeping during kneeling work, that is the fabric, not your form. Do a daylight stretch test on arrival for opacity before relying on it in a mirrored room.",
    affiliateUrl: "https://www.amazon.com/dp/B09P1G2952?tag=pilatescollective-20",
    tag: "Best Overall Value",
  },
  {
    rank: "02",
    name: "Varley Freesoft Piped Full Leggings",
    price: "$78.40",
    verdict: "Premium pick, studio to street",
    description:
      "Varley is the pick if you want one pair that looks as considered outside the studio as it does on the carriage. This is a full-length legging with contrast piping, and the price shown is for the Marina colourway on the listing, which is sold by Shopbop (an Amazon company); other colours may be priced differently. The appeal for Lagree is mostly about what a premium pair tends to do well over months rather than weeks: hold its shape through repeated hot, sweaty washes, and keep the waistband sitting where you put it while you work through a long, slow set of lunges and planks. Full length gives maximum coverage on the carriage, which is useful in kneeling and side-lying work, at the cost of extra warmth in a hot room. Look at the waistband and the piping placement on the product photos before buying: you want a wide, flat band and seams that will not press into you in a plank. Treat it the way you would any premium activewear: cold wash, no tumble dryer.",
    affiliateUrl: "https://www.amazon.com/dp/B0FXN378H8?tag=pilatescollective-20",
    tag: "Premium Pick",
  },
  {
    rank: "03",
    name: "Lululemon Wunder Train High-Rise Tight",
    price: "~$98",
    verdict: "Brand-direct pick (lululemon.com)",
    description:
      "Not sold on Amazon by Lululemon — this links to lululemon.com. On Amazon, Wunder Train appears only via third-party resellers priced above retail, so we link to Lululemon directly; the approximate $98 price is Lululemon's own. If you already shop Lululemon, this is the line to look at for Lagree rather than the Align. Lululemon positions Wunder Train as a training tight, whereas Align is sold on a weightless, barely-there feel aimed at yoga and low-impact work. That distinction matters on a Megaformer, where you want a legging that stays put and supports you through long time-under-tension sets rather than one designed to disappear. The high rise is the other reason it suits the format: a tall waistband is less likely to roll down when you fold into a pike or work in a reverse plank. Check the inseam options on Lululemon's site before ordering, since Lululemon sells its tights in several lengths.",
    affiliateUrl: "https://shop.lululemon.com/",
    tag: "Brand-Direct",
  },
  {
    rank: "04",
    name: "HeyNuts Pure&Plain Workout Pro 1.0 Leggings 25\"",
    price: "$19.99",
    verdict: "Best budget pair",
    description:
      "At under $20, this is the rational purchase if you are a few classes into a Lagree intro pack and not yet sure it will stick, or if you want an extra pair for the rotation. It is sold by Hawthorn Athletic and shares the 25-inch inseam of the CRZ pair, so it covers the thigh and knee for carriage contact without excess fabric at the ankle. The \"Workout Pro\" naming signals a training legging rather than a lounge one, but at this price the checks on arrival are your responsibility. First, the daylight stretch test: pull the fabric over your hand in good light, and if you can read print through it, it will be sheer in a deep lunge with a mirror behind you. Second, the waistband: put it on and fold forward. If it rolls standing still, it will roll on the carriage. Budget elastane blends also tend to lose recovery sooner under hot, frequent washing, so wash cold and air dry.",
    affiliateUrl: "https://www.amazon.com/dp/B0CTCFMDMJ?tag=pilatescollective-20",
    tag: "Best Budget",
  },
  {
    rank: "05",
    name: "Under Armour Men's HeatGear Armour Leggings",
    price: "$27.00",
    verdict: "Best option for men",
    description:
      "Men often arrive at their first Lagree class in loose gym shorts and discover within ten minutes why that does not work: loose fabric rides up in a lunge, can catch on the carriage edge or springs, and leaves bare skin on vinyl in kneeling positions, which sticks and leaves sweat on a shared machine. A fitted legging fixes all of it, and Under Armour's HeatGear Armour legging is the straightforward, widely available option. HeatGear is the name Under Armour gives its warm-conditions gear, which suits a studio that runs hot. Wear it on its own or under a short, whichever you are comfortable with. A fitted leg also lets your instructor see your hip and knee alignment, which is half the value of a coached class. If you prefer shorts, see our Lagree shorts guide, which includes men's options with a built-in liner.",
    affiliateUrl: "https://www.amazon.com/dp/B0874X381F?tag=pilatescollective-20",
    tag: "Best for Men",
  },
];

const FAQS = [
  { q: "What leggings are best for Lagree?", a: "A fitted, high-waisted legging that stays opaque in a deep lunge, has a wide flat waistband that will not roll when you fold forward, and has no loose fabric, zips or bulky pockets to catch on the carriage or springs. Our value pick is the CRZ YOGA Butterluxe 25-inch legging at $32; the budget pick is the HeyNuts Workout Pro 1.0 at $19.99; Varley's Freesoft legging is the premium option; Lululemon shoppers should look at Wunder Train rather than Align; and Under Armour's HeatGear Armour legging is the men's pick." },
  { q: "Why do my leggings slide on the Megaformer?", a: "Usually because the fabric face is slick against the carriage. The Megaformer carriage is upholstered in vinyl, and very soft, smooth fabrics have little to grab onto, which you notice in kneeling, plank and side-lying work while the carriage travels under you. A firmer, more matte or textured fabric generally holds better. Sweat makes the problem worse, so wiping the carriage between sets helps too." },
  { q: "Are Lululemon Aligns good for Lagree?", a: "They will get you through a class, but they are not the Lululemon line we would choose for it. Align is sold on a weightless, barely-there feel aimed at yoga and low-impact work. Lagree is slow, sweaty and high-tension, with long holds on a moving carriage, so a training tight suits it better. From the same brand, Wunder Train is positioned as a training tight; we link to it on lululemon.com because on Amazon it only appears via third-party resellers above retail." },
  { q: "What should you avoid in leggings for Lagree?", a: "Loose or flared styles, which can catch on the carriage or springs and hide the alignment your instructor needs to see. Thin elasticated waistbands, which roll when you fold forward or go into a pike. Bulky or zipped pockets that press into you in a plank. And anything that fails a daylight stretch test for opacity, because Lagree involves deep lunges and wide stances in a mirrored room." },
  { q: "Do men wear leggings to Lagree?", a: "Yes, and they are one of the best choices a man can make for the format. Loose shorts ride up in lunges and leave bare skin on vinyl in kneeling work. A fitted legging, worn alone or under shorts, keeps the leg covered and lets the instructor see your knee and hip alignment. Under Armour's HeatGear Armour legging is our men's pick." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Leggings for Lagree (2026): 5 Pairs by Use",
      "description": "Leggings for Lagree and Megaformer classes: what matters on a moving carriage (fit, waistband, opacity, sweat, length) and five verified pairs from budget to premium, including a men's option.",
      "url": "https://pilatescollectiveclub.com/blog/best-leggings-for-lagree",
      "datePublished": "2026-09-12",
      "dateModified": "2026-10-02",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-retail-activewear.png", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-leggings-for-lagree" },
    },
    {
      "@type": "ItemList",
      "name": "Best Leggings for Lagree (2026)",
      "numberOfItems": PRODUCTS.length,
      "itemListElement": PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "description": p.description,
          "offers": { "@type": "Offer", "priceCurrency": "USD", "price": p.price.replace(/[^0-9.]/g, ""), "availability": "https://schema.org/InStock", "url": p.affiliateUrl },
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Leggings for Lagree", "item": "https://pilatescollectiveclub.com/blog/best-leggings-for-lagree" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
  ],
};

export default function BestLeggingsForLagreePage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Lagree</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Leggings<br /><span style={{ color: "#8b4a31" }}>for Lagree (2026)</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated October 2026 · 9 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Most links on this page go to Amazon, where we earn a small commission on qualifying purchases. One pick (Lululemon) is not sold on Amazon by the brand and links directly to lululemon.com. Amazon prices were checked on October 2, 2026 and can change.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Choosing leggings for Lagree is less about brand than about what happens on a moving carriage. The Megaformer is slow and relentless: long time under tension, heavy sweat, kneeling and plank work on a vinyl carriage that travels under you, and handles and straps close to your hips. A good Lagree legging stays where you put it, stays opaque in a deep lunge, keeps its waistband up when you fold forward, and has nothing loose to catch. Here are five verified pairs, from a $19.99 starter to a premium studio-to-street option, plus a men&apos;s pick.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-retail-activewear.png" alt="Technical activewear on a studio rail — fit, waistband and fabric face matter more than brand for Lagree" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
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

            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What a Lagree legging actually has to do</h2>
              <div className="space-y-4 text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                <p><strong>Stay put on a moving carriage.</strong> In kneeling, plank and side-lying work your leg is pressed into a vinyl carriage that slides under you. Very soft, slick fabric faces have little to grab onto, so the leg can creep. Firmer, more matte fabrics generally hold better. Fit matters just as much: a legging that needs hitching up between sets is a distraction for the full 45 minutes.</p>
                <p><strong>Keep the waistband up.</strong> Lagree folds you forward constantly: pikes, reverse planks, deep lunges. A wide, flat, high waistband stays in place; a thin elasticated casing rolls. Fold forward in the fitting room or at home before you trust a pair in class.</p>
                <p><strong>Stay opaque under stretch.</strong> Deep lunges and wide stances in a mirrored room find out sheer fabric fast. The daylight stretch test (fabric pulled over your hand, held up to a window) is the quickest check there is.</p>
                <p><strong>Handle sweat.</strong> The tempo is slow but the effort is high and the room is usually warm. A training fabric that moves sweat along is more comfortable than a cotton-feel lounge legging that soaks it up and stays heavy.</p>
                <p><strong>Nothing to catch.</strong> Handles, straps, springs and the carriage edge are all close to your hips and legs. Loose hems, flares, zips and bulky pockets are the things that snag.</p>
              </div>
            </div>

            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{PRODUCTS.length} Pairs · Picked by Use</p>
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
              <div className="mt-10 rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                <p className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Not Lagree-specific? That&apos;s fine.</p>
                <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>None of these leggings is made or endorsed by Lagree Fitness, and you do not need one that is. Studios do not require a branded legging; they need you covered, comfortable and not catching on the machine. Any well-fitted, opaque, high-waisted training legging with no loose fabric does the job. These five are simply a verified starting point at different prices.</p>
              </div>
            </div>

            <UpsellCTA
              eyebrow="Complete Your Lagree Kit"
              title="Leggings sorted? The rest of the uniform"
              body="Two more pieces make the biggest difference on a Megaformer: grip socks, because most studios require them and bare feet slip on a sweaty platform, and a supportive sports bra for the jump and lunge sequences."
              picks={[
                { name: "toesox Low Rise Grip Socks 2-Pack", price: "$30.00", url: "https://www.amazon.com/dp/B07QHNDHW3?tag=pilatescollective-20", note: "The original studio grip-sock brand, full-toe." },
                { name: "Under Armour Women's Infinity 2 High Impact Sports Bra", price: "$47.85", url: "https://www.amazon.com/dp/B0C12Q3L89?tag=pilatescollective-20", note: "Sold by Amazon.com. High-impact support for jump and lunge work." },
              ]}
              guideHref="/blog/lagree-essentials"
              guideLabel="See the complete Lagree essentials list"
            />

            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#fff4f1", border: "1px solid rgba(139,74,49,0.15)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What to avoid</h2>
              <ul className="space-y-3">
                {[
                  "Very slick, glossy fabric faces if you already find yourself sliding in kneeling and plank work.",
                  "Bulky or zipped pockets. They press into you in a plank and can catch on handles and straps.",
                  "Thin elasticated waistband casings. They roll the first time you fold forward. Wide flat bands only.",
                  "Anything that fails the daylight stretch test. Deep lunges in a mirrored room are unforgiving.",
                  "Loose or flared styles. They can catch on the carriage and hide the alignment an instructor needs to see.",
                  "Tumble drying. Heat shortens the life of elastane, and a legging that loses its fit stops staying put.",
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
                {FAQS.map((item) => (
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
                <ArticleCard title="Best Lagree Shorts" excerpt="Biker shorts for the Megaformer: inseam length, carriage contact and seven verified pairs, including men's options." href="/blog/best-lagree-shorts" category="Lagree" readTime="9 min read" date="October 2026" />
                <ArticleCard title="Best Sports Bra for Lagree" excerpt="High, mid and light support picks for a sweaty, lunge-heavy Megaformer class." href="/blog/best-sports-bra-for-lagree" category="Lagree" readTime="8 min read" date="October 2026" />
                <ArticleCard title="Best Lagree Tops" excerpt="Why fitted beats loose on a Megaformer, and the tanks that stay put in a plank." href="/blog/best-lagree-tops" category="Lagree" readTime="8 min read" date="October 2026" />
                <ArticleCard title="Lagree Essentials" excerpt="Everything to wear, bring and buy for Lagree — best, budget and splurge picks on one page." href="/blog/lagree-essentials" category="Lagree" readTime="12 min read" date="September 2026" />
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
