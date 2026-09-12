import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Knee Pads for Lagree (2026): Carriage Cushioning Ranked",
  description: "Knee padding for Lagree kneeling work — why wearable sleeves beat loose pads on a moving carriage, ranked for thickness, grip and studio compatibility.",
  keywords: ["best knee pads for lagree", "lagree knee pain", "megaformer knee pad", "knee cushion reformer", "padded knee sleeves pilates", "carriage pad lagree", "kneeling pad pilates", "lagree wheelbarrow knees", "knee protection megaformer", "lagree knee pads 2026"],
  openGraph: {
    title: "Best Knee Pads for Lagree (2026): Carriage Cushioning Ranked",
    description: "Loose pads slide on a travelling carriage. Six padding options ranked, wearable options first.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-lagree-knee-pads",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-hands-on-carriage.png", width: 1200, height: 630, alt: "Best Knee Pads for Lagree — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Knee Pads for Lagree (2026)",
    description: "Why wearable padding beats a loose cushion on a moving Megaformer carriage.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-hands-on-carriage.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-lagree-knee-pads" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Padded Knee Sleeves (Volleyball-Style)",
    price: "From $22",
    verdict: "Best overall — padding that cannot slide",
    description:
      "This is the recommendation most Lagree-specific advice gets wrong. A loose cushion sitting on a carriage that travels under load is a slip hazard: the moment the platform moves and the pad does not, your knee is on a sliding object rather than a stable one. Wearable padding removes the failure mode entirely, because the cushioning moves with your leg. Volleyball-style sleeves are the right form factor — a thin foam or gel pad over the patella inside a compressive sleeve, low-profile enough not to change your kneeling position the way a thick cushion does. They also work for hands-and-knees positions where a mat-sized pad would not reach. Look for a pad covering the patella and just below it, since the tibial tuberosity takes as much pressure as the kneecap in a loaded kneel. Wash after every class; they sit against sweaty skin for 45 minutes.",
    affiliateUrl: "https://www.amazon.com/s?k=padded+knee+sleeves+volleyball+low+profile&tag=pilatescollective-20",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "Non-Slip Backed Kneeling Pad",
    price: "From $18",
    verdict: "Best loose pad, if your studio allows one",
    description:
      "If you prefer a pad to a sleeve, the non-negotiable specification is a genuinely grippy backing — a textured rubber or silicone underside rather than smooth EVA foam. Smooth foam on vinyl is the exact combination that slides, and a pad that shifts mid-set is worse than no pad at all. Look for around 15 to 25mm of thickness: thinner than that and it does not meaningfully spread the load, thicker and it raises your knee enough to change hip and spine alignment in a kneeling lunge, which is a worse trade than the discomfort you were solving. Check your studio's policy before buying, as some do not permit personal items on the carriage for hygiene and liability reasons. Also confirm it fits the carriage width — garden kneelers are the right thickness and often far too wide.",
    affiliateUrl: "https://www.amazon.com/s?k=non+slip+kneeling+pad+exercise+rubber+backed&tag=pilatescollective-20",
    tag: "Best Loose Pad",
  },
  {
    rank: "03",
    name: "Gel Knee Pads with Adjustable Straps",
    price: "From $28",
    verdict: "Best cushioning for sensitive knees",
    description:
      "Gel distributes pressure more evenly than closed-cell foam and is the better material if your knees are the actual reason you avoid kneeling sequences — post-surgical knees, patellar tendinopathy, or simple bony prominence with little natural padding. Strapped models let you set the tension so the pad sits exactly over the contact point rather than migrating down the shin, which is the usual complaint with pull-on sleeves during repeated transitions. The trade-offs are bulk and heat: gel is thicker and warmer than a thin foam sleeve, and in a hot studio you will notice both. Straps also need checking mid-class, since they loosen with sweat. Best suited to someone who needs the extra protection rather than someone who just finds kneeling mildly uncomfortable — for the latter, a thin sleeve is a better everyday choice.",
    affiliateUrl: "https://www.amazon.com/s?k=gel+knee+pads+adjustable+straps+fitness&tag=pilatescollective-20",
    tag: "Most Cushioning",
  },
  {
    rank: "04",
    name: "Quilted Reformer Carriage Pad Cover",
    price: "From $45",
    verdict: "Best permanent solution for a home machine",
    description:
      "If you own the machine, the sensible fix is to pad the carriage rather than your knees. A fitted quilted cover adds a layer of cushioning across the whole platform, stays put because it is secured around the carriage rather than resting on it, and solves kneeling comfort for every exercise at once without you having to remember to bring anything. It also protects the vinyl from sweat, which is the main thing that degrades a carriage surface over years of use, and it comes off for washing. Two things to verify: that the cover is cut for your machine's carriage dimensions, which vary meaningfully between Lagree models and Pilates reformers, and that the face fabric is not slippery — a satiny cover will undo all your grip-sock and legging work. Not an option in a studio, obviously.",
    affiliateUrl: "https://www.amazon.com/s?k=quilted+reformer+carriage+pad+cover+washable&tag=pilatescollective-20",
    tag: "Best for Home Machines",
  },
  {
    rank: "05",
    name: "Dense EVA Balance & Knee Cushion",
    price: "From $20",
    verdict: "Most versatile beyond kneeling",
    description:
      "A small dense EVA cushion — roughly 40 by 25cm, firm rather than squashy — earns its place by doing several jobs. It pads a knee in kneeling work, sits under a wrist in plank and hand-based positions where the carriage edge digs in, and doubles as a balance and proprioception tool for standing work at home. The firmness is what makes it work: a soft cushion compresses to nothing under a loaded knee, while a dense one spreads pressure without raising you much. For anyone building a home Lagree-style setup, it is the most useful single padding purchase. In a studio setting the same caveats as any loose pad apply — check it is permitted, and check the underside grips. Look for a textured base and avoid the soft, low-density foam sold as a knee pad in the yoga aisle.",
    affiliateUrl: "https://www.amazon.com/s?k=dense+eva+balance+pad+knee+cushion+firm&tag=pilatescollective-20",
    tag: "Most Versatile",
  },
  {
    rank: "06",
    name: "Thin Foam Kneeling Pad Under $15",
    price: "From $12",
    verdict: "Cheapest way to test whether padding helps",
    description:
      "Before spending on sleeves or a carriage cover, it is worth establishing whether padding is actually your problem. Some kneeling discomfort in Lagree is not about cushioning at all — it is load placement, and shifting weight slightly back toward the shin or correcting a collapsed hip resolves it without any equipment. A cheap thin pad answers the question in one class. If the discomfort disappears, buy proper padding; if it does not, ask an instructor to look at your kneeling position, because more foam will not fix an alignment issue. Be realistic about what you are getting: thin low-density foam compresses substantially under a loaded knee and most of these have smooth undersides, which makes them a poor long-term choice on a moving carriage. Diagnostic purchase, not a destination.",
    affiliateUrl: "https://www.amazon.com/s?k=thin+foam+kneeling+pad+exercise&tag=pilatescollective-20",
    tag: "Best Budget",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Knee Pads for Lagree (2026): Carriage Cushioning Ranked",
      "description": "Knee padding options for Lagree kneeling work — wearable sleeves, non-slip pads, gel straps, carriage covers and balance cushions compared.",
      "url": "https://pilatescollectiveclub.com/blog/best-lagree-knee-pads",
      "datePublished": "2026-09-12",
      "dateModified": "2026-09-12",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-hands-on-carriage.png", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-lagree-knee-pads" },
    },
    {
      "@type": "ItemList",
      "name": "Best Knee Pads for Lagree (2026)",
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
        { "@type": "ListItem", "position": 3, "name": "Best Knee Pads for Lagree", "item": "https://pilatescollectiveclub.com/blog/best-lagree-knee-pads" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Why do my knees hurt during Lagree?", "acceptedAnswer": { "@type": "Answer", "text": "Usually a combination of surface and duration. The carriage is a thin vinyl pad over a rigid platform, and Lagree holds kneeling positions — wheelbarrow, kneeling lunges, scrambled eggs — for far longer than a conventional reformer class does. Concentrated pressure on the patella and the bony point just below it becomes uncomfortable within a minute or two. That said, not all of it is cushioning: a collapsed hip or weight placed too far forward over the kneecap concentrates load unnecessarily, and correcting position sometimes resolves it entirely. Try the position fix before buying padding." } },
        { "@type": "Question", "name": "Can you bring your own knee pad to a Lagree class?", "acceptedAnswer": { "@type": "Answer", "text": "Check with the studio rather than assuming. Policies vary: some are happy for you to bring padding, while others prohibit personal items on the carriage for hygiene reasons or because a loose pad on a moving platform is a liability concern. Where loose pads are not permitted, wearable knee sleeves generally are, since they are clothing rather than equipment. Many studios also keep a few pads at reception — worth asking before you buy anything at all." } },
        { "@type": "Question", "name": "Are wearable knee sleeves better than a cushion for Lagree?", "acceptedAnswer": { "@type": "Answer", "text": "For Lagree specifically, usually yes, and the reason is the moving carriage. A loose pad only works while it stays where you put it; when the platform travels under load and the pad does not travel with it, your knee ends up on a sliding object. Wearable padding moves with your leg, so the protection is there in every position and in every transition. Sleeves are also lower-profile, which matters because a thick cushion raises the knee enough to alter hip and spine alignment in a kneeling lunge." } },
        { "@type": "Question", "name": "How thick should Lagree knee padding be?", "acceptedAnswer": { "@type": "Answer", "text": "Less than people expect — around 10 to 25mm. Below roughly 10mm there is not enough material to spread the load and it compresses flat under a loaded knee. Above about 25mm you have raised the knee enough to change the geometry of a kneeling lunge, tipping the pelvis and shifting where the work lands, which trades a comfort problem for a technique problem. Thin, dense padding beats thick, soft padding at every price point in this category." } },
      ],
    },
  ],
};

export default function BestLagreeKneePadsPage() {
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
              Best Knee Pads<br /><span style={{ color: "#8b4a31" }}>for Lagree (2026)</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 8 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Most advice here recommends a cushion, which on a Megaformer is the wrong instinct. The carriage travels under load — so a loose pad that stays put while the platform moves leaves your knee balanced on a sliding object. Wearable padding moves with your leg and removes the problem. Thin and dense also beats thick and soft, because a tall cushion tips the pelvis and quietly changes where a kneeling lunge actually works.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-hands-on-carriage.png" alt="Hands braced on a reformer carriage — the thin vinyl over a rigid platform that makes kneeling work uncomfortable" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Options · Ranked</p>
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
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Before you buy</h2>
              <ul className="space-y-3">
                {[
                  "Try the position fix first. Weight placed too far forward over the kneecap, or a collapsed hip, concentrates load unnecessarily — ask an instructor to look before buying foam.",
                  "Check your studio's policy. Some prohibit personal items on the carriage; wearable sleeves are usually permitted where loose pads are not.",
                  "Insist on a grippy underside for any loose pad. Smooth foam on vinyl is the combination that slides.",
                  "Keep it 10–25mm thick. Thinner compresses flat; thicker raises the knee and alters kneeling alignment.",
                  "Cover the tibial tuberosity, not just the patella — the bony point below the kneecap takes as much pressure in a loaded kneel.",
                  "Wash sleeves after every class. They sit against sweaty skin for the whole session.",
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
                  { q: "Why do my knees hurt during Lagree?", a: "Usually a combination of surface and duration. The carriage is a thin vinyl pad over a rigid platform, and Lagree holds kneeling positions — wheelbarrow, kneeling lunges, scrambled eggs — for far longer than a conventional reformer class does. Concentrated pressure on the patella and the bony point just below it becomes uncomfortable within a minute or two. That said, not all of it is cushioning: a collapsed hip or weight placed too far forward over the kneecap concentrates load unnecessarily, and correcting position sometimes resolves it entirely. Try the position fix before buying padding." },
                  { q: "Can you bring your own knee pad to a Lagree class?", a: "Check with the studio rather than assuming. Policies vary: some are happy for you to bring padding, while others prohibit personal items on the carriage for hygiene reasons or because a loose pad on a moving platform is a liability concern. Where loose pads are not permitted, wearable knee sleeves generally are, since they are clothing rather than equipment. Many studios also keep a few pads at reception — worth asking before you buy anything at all." },
                  { q: "Are wearable knee sleeves better than a cushion for Lagree?", a: "For Lagree specifically, usually yes, and the reason is the moving carriage. A loose pad only works while it stays where you put it; when the platform travels under load and the pad does not travel with it, your knee ends up on a sliding object. Wearable padding moves with your leg, so the protection is there in every position and in every transition. Sleeves are also lower-profile, which matters because a thick cushion raises the knee enough to alter hip and spine alignment in a kneeling lunge." },
                  { q: "How thick should Lagree knee padding be?", a: "Less than people expect — around 10 to 25mm. Below roughly 10mm there is not enough material to spread the load and it compresses flat under a loaded knee. Above about 25mm you have raised the knee enough to change the geometry of a kneeling lunge, tipping the pelvis and shifting where the work lands, which trades a comfort problem for a technique problem. Thin, dense padding beats thick, soft padding at every price point in this category." },
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
                <ArticleCard title="Best Lagree Carriage Handles & Megaformer Grips" excerpt="OEM handles, grip wraps and wrist support for carriage pulls." href="/blog/best-lagree-carriage-handles" category="Lagree" readTime="7 min read" date="June 2026" imageUrl="/pictures/stitch-reformer-loops-hooks.png" />
                <ArticleCard title="Pilates for Knee Pain" excerpt="Which exercises strengthen the structures around the knee, and what to avoid." href="/blog/pilates-for-knee-pain" category="Health" readTime="11 min read" date="June 2026" imageUrl="/pictures/roxana-popovici-2QeonB1SdQk-unsplash.jpg" />
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
