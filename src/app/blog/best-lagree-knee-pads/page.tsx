import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import { jsonLdHtml } from "@/lib/schema";

const TITLE = "Lagree Knee Pads (2026): Best Knee Pads for the Carriage";
const DESCRIPTION =
  "The best Lagree knee pads: why wearable sleeves beat loose cushions on a moving carriage, plus floor cushions for home work. 5 verified Amazon picks.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "lagree knee pads",
    "knee pads for lagree",
    "knee pad megaformer",
    "lagree knee pain carriage",
    "kneeling pad lagree",
    "best knee pads for lagree",
    "padded knee sleeves lagree",
    "megaformer kneeling",
    "lagree wheelbarrow knees",
    "yoga knee pad cushion",
  ],
  openGraph: {
    title: TITLE,
    description: "Loose pads slide on a travelling carriage. Five verified knee pad picks for Lagree, wearable sleeves first, cushions for floor work at home.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-lagree-knee-pads",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-hands-on-carriage.png", width: 1200, height: 630, alt: "Best Knee Pads for Lagree — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Why wearable padding beats a loose cushion on a moving Megaformer carriage — five verified picks.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-hands-on-carriage.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-lagree-knee-pads" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Mizuno T10 Plus Kneepad (Volleyball Sleeve)",
    price: "$19.99",
    verdict: "Best overall — padding that moves with your knee",
    description:
      "This is the recommendation most Lagree advice gets wrong. A loose cushion on a carriage that travels under load is a slip hazard: the moment the platform moves and the pad does not, your knee is on a sliding object rather than a stable one. Wearable padding removes that failure mode, because the cushioning moves with your leg. The Mizuno T10 Plus is a padded volleyball kneepad — a sleeve you pull on, with padding over the front of the knee — which is the right form factor for wheelbarrows, kneeling lunges and hands-and-knees work on a Megaformer. The listing gives a fit range of roughly 12 to 17.5 inches knee circumference, so measure around the middle of your kneecap before ordering. One important note: the listing does not say whether you get a single pad or a pair, so check the quantity on the product page before you buy. Sold by Amazon.com. Wash after every class; it sits against sweaty skin for the whole session.",
    affiliateUrl: "https://www.amazon.com/dp/B00OP86QSS?tag=pilatescollective-20",
    tag: "Best Overall",
  },
  {
    rank: "02",
    name: "Bodyprox Protective Knee Pads (Thick Sponge Sleeve)",
    price: "$15.99",
    verdict: "Best value wearable sleeve",
    description:
      "The Bodyprox pads follow the same logic as the Mizuno — padding built into a sleeve you wear, so it cannot be left behind when the carriage travels — at a slightly lower price. The listing describes a thick sponge pad and an anti-slip sleeve, which is the combination you want for Lagree: enough material over the kneecap to take the edge off long kneeling holds, and a sleeve designed to stay in place rather than creep down your shin as you move between kneeling and standing positions. Thick padding is a trade-off, though. The more material between your knee and the carriage, the more it can change how you sit in a kneeling lunge, so if a set feels different with the pad on, ease off and let an instructor check your alignment. Check the sizing details on the listing before ordering.",
    affiliateUrl: "https://www.amazon.com/dp/B01L379FPE?tag=pilatescollective-20",
    tag: "Best Value Sleeve",
  },
  {
    rank: "03",
    name: "Gaiam Yoga Knee Pads (Set of 2)",
    price: "$17.99",
    verdict: "Best floor cushion for home work",
    description:
      "Loose cushions are the wrong tool on a moving carriage, but they are the right tool on the floor. If you do Lagree-style mat work at home — kneeling core work, bird dogs, tabletop holds, lunges between Megaformer sessions — a cushion you set down under each knee is simpler than wearing sleeves. The Gaiam set gives you two pads, so you can put one under each knee in tabletop or under knee and hand separately in a plank variation. Sold by Amazon.com. Keep these for floor work rather than taking them onto a studio carriage: a pad that does not travel with the platform is exactly the problem wearable sleeves solve, and many studios do not permit loose items on the machine anyway.",
    affiliateUrl: "https://www.amazon.com/dp/B07G1R42MS?tag=pilatescollective-20",
    tag: "Best Floor Cushion",
  },
  {
    rank: "04",
    name: "Impulse Yoga Knee Pad Cushion (1\" / 25mm)",
    price: "$19.99",
    verdict: "Thickest cushion for sensitive knees",
    description:
      "At 1 inch (25mm), this is the thickest option here and the one to consider if your knees are the actual reason you avoid kneeling work — bony knees with little natural padding, or simply a hard floor at home. Thickness is a double-edged feature, which is why this sits below the sleeves. A 25mm cushion spreads pressure well, but it also lifts the knee enough to change the geometry of a kneeling lunge, tipping the pelvis and shifting where the work lands. Use it for floor sequences where comfort is the priority, and treat it as the upper limit of how thick kneeling padding should be. As with any cushion, it belongs on the floor at home rather than on a moving carriage.",
    affiliateUrl: "https://www.amazon.com/dp/B06WV6XVV9?tag=pilatescollective-20",
    tag: "Thickest Cushion",
  },
  {
    rank: "05",
    name: "HASSLICKIT Yoga Knee Pad Cushion (24 x 9.8 x 0.8 in)",
    price: "$14.99",
    verdict: "Best long pad for two knees at once",
    description:
      "The HASSLICKIT pad is long and narrow — the listing gives 24 x 9.8 x 0.8 inches — which means both knees fit on it at once in tabletop, or one knee and the opposite foot in a kneeling lunge without the pad ending under your shin. At 0.8 inch it is a little thinner than the Impulse, which keeps kneeling alignment closer to normal while still taking the hard edge off a floor. It is the cheapest pick here and the easiest way to find out whether padding fixes your kneeling discomfort at all before spending more. The same rule applies: this is a floor cushion for home work, not something to lay on a studio carriage.",
    affiliateUrl: "https://www.amazon.com/dp/B0D7QB8PYM?tag=pilatescollective-20",
    tag: "Best Long Pad",
  },
];

const FAQS = [
  { q: "Why do my knees hurt during Lagree?", a: "Usually a combination of surface and duration. The carriage is a thin padded surface over a rigid platform, and Lagree holds kneeling positions — wheelbarrows, kneeling lunges and similar — for far longer than most classes do, at a slow tempo with constant tension. Concentrated pressure on the kneecap and the bony point just below it becomes uncomfortable quickly. Not all of it is about cushioning, though: a collapsed hip or weight placed too far forward over the kneecap concentrates load unnecessarily, and correcting your position sometimes resolves it entirely. Try the position fix before buying padding." },
  { q: "Can you bring your own knee pad to a Lagree class?", a: "Check with the studio rather than assuming. Policies vary: some are happy for you to bring padding, while others prohibit personal items on the carriage for hygiene reasons or because a loose pad on a moving platform is a safety concern. Where loose pads are not permitted, wearable knee sleeves are usually fine, since they are clothing rather than equipment. Many studios also keep a few pads at the front desk — worth asking before you buy anything." },
  { q: "Are wearable knee sleeves better than a cushion for Lagree?", a: "On a Megaformer carriage, usually yes, and the reason is that the carriage moves. A loose pad only works while it stays where you put it; when the platform travels under load and the pad does not travel with it, your knee ends up on a sliding object. Wearable padding moves with your leg, so the protection is there in every position and every transition. Cushions are still useful — for floor and mat work at home, where nothing moves underneath you." },
  { q: "How thick should Lagree knee padding be?", a: "Less than people expect — roughly 10 to 25mm (about 0.4 to 1 inch). Too thin and it compresses flat under a loaded knee. Much thicker than an inch and you have raised the knee enough to change the geometry of a kneeling lunge, tipping the pelvis and shifting where the work lands, which trades a comfort problem for a technique problem." },
  { q: "Do knee pads come as a pair?", a: "It depends on the listing. The Gaiam pads are sold as a set of two. The Mizuno T10 Plus listing does not state whether it is a single kneepad or a pair, so check the quantity on the product page before ordering — if it is a single, you will need two for kneeling work on both knees." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": TITLE,
      "description": DESCRIPTION,
      "url": "https://pilatescollectiveclub.com/blog/best-lagree-knee-pads",
      "datePublished": "2026-09-12",
      "dateModified": "2026-10-02",
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
          "offers": { "@type": "Offer", "priceCurrency": "USD", "price": p.price.replace(/[^0-9.]/g, ""), "availability": "https://schema.org/InStock", "url": p.affiliateUrl },
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
      "mainEntity": FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
  ],
};

export default function BestLagreeKneePadsPage() {
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
              Lagree Knee Pads<br /><span style={{ color: "#8b4a31" }}>Best Picks for the Carriage (2026)</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated October 2026 · 9 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Product links on this page go to Amazon, and we earn a small commission on qualifying purchases. Listings and prices were checked on October 2, 2026 and can change. Picks are based on listing details and how each product suits Lagree.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Most advice here recommends a cushion, which on a Megaformer is the wrong instinct. The carriage travels under load — so a loose pad that stays put while the platform moves leaves your knee balanced on a sliding object. Wearable padding moves with your leg and removes the problem. Thin and dense also beats thick and soft, because a tall cushion tips the pelvis and quietly changes where a kneeling lunge actually works.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              So this list is split in two. The first two picks are padded sleeves you wear — the right choice for a studio carriage. The last three are cushions for kneeling work on the floor at home, where nothing moves beneath you and a loose pad is perfectly sensible.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-hands-on-carriage.png" alt="Hands braced on a reformer carriage — the thin padded surface over a rigid platform that makes kneeling work uncomfortable" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
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
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Sleeve or cushion? Why the carriage changes the answer</h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                <p>
                  Kneeling on a Megaformer is not like kneeling on a mat. In a wheelbarrow or a kneeling lunge, one knee is often on the carriage while the carriage slides back and forth against spring resistance, slowly, for a long set. Anything sitting loose on that surface has to stay exactly where you put it while the platform moves, your weight shifts and sweat builds up. A cushion has nothing holding it there except friction, and sweaty vinyl is not a high-friction surface.
                </p>
                <p>
                  A sleeve has no such problem. The padding is attached to your leg, so it is over your kneecap whether the carriage is moving or still, and whether you are kneeling, transitioning to standing or stepping onto a platform. You also do not have to stop between sets to reposition it. That is why the two wearable picks rank first, and why the Mizuno is our top choice despite costing about the same as a cushion.
                </p>
                <p>
                  Cushions still earn a place — just not on the studio carriage. On a floor at home, the surface does not move, and a loose pad is easier to use than sleeves: you set it down, kneel, and move it when you change sides. If your Lagree routine includes floor-based core and kneeling work between studio sessions, one of the three cushions below is the better buy.
                </p>
              </div>
            </div>

            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{PRODUCTS.length} Options · Ranked</p>
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

            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.4)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Not Lagree-specific? That&apos;s fine</h2>
              <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Nobody makes a Lagree-branded knee pad, and you do not need one. A volleyball kneepad is designed for exactly the problem a Megaformer creates — repeated pressure on the front of the knee while the body moves — and yoga knee cushions are built for kneeling on a hard floor. What matters is choosing the right form factor for where you are kneeling: a sleeve on the carriage, a cushion on the floor.
              </p>
            </div>

            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#fff4f1", border: "1px solid rgba(139,74,49,0.15)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Before you buy</h2>
              <ul className="space-y-3">
                {[
                  "Try the position fix first. Weight placed too far forward over the kneecap, or a collapsed hip, concentrates load unnecessarily — ask an instructor to look before buying foam.",
                  "Check your studio's policy. Some prohibit personal items on the carriage; wearable sleeves are usually permitted where loose pads are not.",
                  "Check quantity. Some kneepad listings are a single pad, others a pair — the Mizuno listing does not say, so confirm on the product page.",
                  "Measure your knee. Sleeves are sized by knee circumference; measure around the middle of the kneecap and check it against the sizing on the listing.",
                  "Keep it roughly 10–25mm thick. Thinner compresses flat; much thicker raises the knee and alters kneeling alignment.",
                  "Keep cushions for the floor. A loose pad that does not travel with the carriage is the problem sleeves solve.",
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
                <ArticleCard title="Best Grip Socks for Lagree (2026)" excerpt="Full-toe, toeless and multi-pack grip socks for a sweaty carriage and platforms." href="/blog/best-lagree-grip-socks" category="Lagree" readTime="8 min read" date="October 2026" imageUrl="/pictures/stitch-grip-socks-footbar.png" />
                <ArticleCard title="Lagree for Beginners (2026): Your First-Class Guide" excerpt="What to expect from your first Megaformer class, from the slow tempo to the kneeling work." href="/blog/lagree-for-beginners" category="Lagree" readTime="10 min read" date="October 2026" imageUrl="/pictures/stitch-hands-on-carriage.png" />
                <ArticleCard title="Lagree Essentials (2026): What to Wear, Bring & Buy" excerpt="The complete Lagree kit list — clothing, grip socks, towels, knee padding and what to pack." href="/blog/lagree-essentials" category="Lagree" readTime="10 min read" date="October 2026" imageUrl="/pictures/stitch-reformer-row-studio.png" />
                <ArticleCard title="Best Lagree Carriage Handles & Megaformer Grips (2026)" excerpt="Handles, grip aids and wrist support for carriage pulls and plank work." href="/blog/best-lagree-carriage-handles" category="Lagree" readTime="7 min read" date="October 2026" imageUrl="/pictures/stitch-reformer-loops-hooks.png" />
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
