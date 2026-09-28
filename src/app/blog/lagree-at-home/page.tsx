import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Lagree at Home (2026): The Full Setup, Honestly Costed",
  description: "What a home Lagree setup really costs — The Micro ($990, sold on Amazon by Lagree Fitness), the direct-only Megaformer, and the kit that makes it work.",
  keywords: ["lagree at home", "home lagree setup", "megaformer at home", "microformer home", "lagree home workout equipment", "lagree machine for home", "lagree accessories", "home lagree studio", "lagree equipment cost", "lagree at home 2026"],
  openGraph: {
    title: "Lagree at Home (2026): The Full Setup, Honestly Costed",
    description: "The Micro is on Amazon from Lagree Fitness; the Megaformer comes direct. Everything else that makes a home setup work — ranked.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/lagree-at-home",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-reformer-morning-light.png", width: 1200, height: 630, alt: "Lagree at Home — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lagree at Home (2026): The Full Setup",
    description: "What a home Lagree setup costs, and which parts you can actually buy on Amazon.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-reformer-morning-light.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/lagree-at-home" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Gymboss Interval Timer",
    price: "$20.95",
    verdict: "The one piece of kit a home Lagree setup genuinely needs",
    description:
      "Lagree is built on time under tension — sets run 60 seconds and beyond with no rest, and the whole method depends on holding an effort for a prescribed duration rather than counting repetitions. Without a visible countdown you will unconsciously shorten sets as they get hard, which is precisely when the adaptation happens. A dedicated interval timer solves this in a way a phone cannot: it does not need unlocking mid-set, it does not interrupt itself with notifications, and once your work and rest intervals are programmed you can run a whole session rather than restarting between exercises. The Gymboss is the pick here because it does exactly that job and nothing else. If you would rather read the countdown from across the room, our interval timer guide covers wall-mounted clocks. This is the cheapest purchase on the list and the one that most changes how the sessions actually go.",
    affiliateUrl: "https://www.amazon.com/dp/B00CO8HO6O?tag=pilatescollective-20",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "toesox Low Rise Grip Socks (2-Pack)",
    price: "$30.00",
    verdict: "Non-negotiable on any carriage machine",
    description:
      "Whatever machine you end up with, the carriage surface is slick vinyl and it moves under load. Grip socks are the difference between a secure plank and an unplanned slide, and the specification matters more at home than in a studio because there is no instructor watching to catch a bad position. Insist on continuous silicone coverage across the whole footbed rather than scattered dots — dots hold under straight-down load and shear sideways off vinyl, which is the exact direction Lagree loads them during lunges and lateral work. The pick here is the toesox full-toe 2-pack. Buy several pairs if you are training three or more times a week; sweat-soaked grip socks are not something you rewear. A snug arch band stops the sock rotating underfoot, which is the other common failure.",
    affiliateUrl: "https://www.amazon.com/dp/B07QHNDHW3?tag=pilatescollective-20",
    tag: "Essential",
  },
  {
    rank: "03",
    name: "WHATAFIT Resistance Bands with Handles (150 lb set)",
    price: "$22.07",
    verdict: "Best way to train the method without the machine",
    description:
      "If the machine is out of budget for now, a resistance band set with handles and a door anchor is the closest you can get to the loading pattern Lagree uses. The method is built on slow eccentric control against continuous spring tension, and a cable with a long elastic travel reproduces that resistance curve far better than a dumbbell, which loads by gravity alone and unloads at the top of every movement. Anchored to a door, a cable set covers the standing, kneeling and lunging sequences that make up a large share of a Lagree class. It will not reproduce the carriage instability, which is the part you cannot substitute. This WHATAFIT set is the verified pick here: five stackable bands from 10 to 50 lb (up to 150 lb combined) with two cushioned handles and a door anchor, sold by the brand on Amazon. Check the door anchor seats firmly before loading it.",
    affiliateUrl: "https://www.amazon.com/dp/B07DWSPQQY?tag=pilatescollective-20",
    tag: "Best Machine Substitute",
  },
  {
    rank: "04",
    name: "Mizuno T10 Plus Kneepad (Padded Sleeve)",
    price: "$19.99",
    verdict: "Best fix for the kneeling sequences",
    description:
      "Kneeling work is a large share of the Lagree repertoire and the carriage is a thin vinyl pad over a rigid platform, which becomes uncomfortable within a minute or two. The instinct is to buy a cushion, and on a moving carriage that is the wrong answer — a loose pad stays put while the platform travels, leaving your knee balanced on a sliding object. Wearable padding moves with your leg, so the protection is present in every position and every transition. Keep it thin, around 10 to 25mm: thicker padding raises the knee enough to tip the pelvis and change the geometry of a kneeling lunge, trading a comfort problem for a technique one. The Mizuno T10 Plus, a volleyball kneepad sold by Amazon.com, is the verified pick: a high-density foam pad built into a moisture-wicking sleeve, one size for knees roughly 12 to 17.5 inches around. Check the listing's quantity before ordering — you want one for each knee.",
    affiliateUrl: "https://www.amazon.com/dp/B00OP86QSS?tag=pilatescollective-20",
    tag: "Best Knee Protection",
  },
  {
    rank: "05",
    name: "DUMOS Arched Full Length Floor Mirror (64 x 21 in)",
    price: "$48.96",
    verdict: "Best substitute for an instructor's eye",
    description:
      "The thing you lose training at home is correction, and a mirror is the only practical replacement. Lagree positions are held long enough that small faults — a dropped hip in a plank, a collapsed lower back in a kneeling lunge — compound over a 45-minute session, and without feedback you will not notice. A leaning mirror is the right format because the slight backward tilt drops the sightline toward the floor, where most of the work happens; a mirror mounted flat at standing height shows you very little once you are on the carriage. Anchor it to the wall regardless of what the instructions say, since a 64-inch glass panel near a moving machine is not something to leave free-standing.",
    affiliateUrl: "https://www.amazon.com/dp/B0H5JK3V8X?tag=pilatescollective-20",
    tag: "Best Form Feedback",
  },
  {
    rank: "06",
    name: "Shandali Stickyfiber Yoga Towel",
    price: "$19.99",
    verdict: "More functional than it sounds",
    description:
      "Lagree produces continuous rather than intermittent sweat, and on a machine that matters for a practical reason beyond comfort: sweat on a vinyl carriage makes it slippery in exactly the places your hands and feet need grip. A towel within reach is a safety item as much as a convenience. A dedicated yoga towel like the Shandali is a better choice than a cotton gym towel, which stays damp and starts to smell. Buy two rather than one — you want one on the machine, one for your hands, and a clean one in rotation. Wash without fabric softener, which coats towel fibres and reduces absorbency, the single most common way people ruin a performance towel.",
    affiliateUrl: "https://www.amazon.com/dp/B011IU43WG?tag=pilatescollective-20",
    tag: "Best Value",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Lagree at Home (2026): The Full Setup, Honestly Costed",
      "description": "A practical guide to setting up Lagree at home — The Micro ($990, sold on Amazon by Lagree Fitness), the direct-only Megaformer, and the kit that makes it work.",
      "url": "https://pilatescollectiveclub.com/blog/lagree-at-home",
      "datePublished": "2026-09-14",
      "dateModified": "2026-09-28",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-reformer-morning-light.png", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/lagree-at-home" },
    },
    {
      "@type": "ItemList",
      "name": "Lagree at Home — Essential Kit (2026)",
      "numberOfItems": PRODUCTS.length,
      "itemListElement": PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "description": p.description,
          "offers": { "@type": "Offer", "priceCurrency": "USD", "price": p.price.replace(/[^0-9.]/g, "") || "0", "availability": "https://schema.org/InStock", "url": p.affiliateUrl },
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Lagree at Home", "item": "https://pilatescollectiveclub.com/blog/lagree-at-home" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Can you buy a Megaformer for home use?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. The full-size Megaformer is sold direct by Lagree Fitness rather than on Amazon — expect several thousand dollars and to deal with the manufacturer for delivery and servicing. The Micro, Lagree Fitness's compact home machine, is the realistic home option: it is $990.00 on Amazon, sold by Lagree Fitness through its own Amazon store, with a rear platform ($290.00), handlebars ($190.00 a pair) and pulley cables ($230.00) sold separately. Stock can be limited; if it is unavailable, buy direct from lagreefitness.com. Be wary of other listings claiming to be Lagree machines — the genuine one is sold by Lagree Fitness." } },
        { "@type": "Question", "name": "Can you do Lagree without a Megaformer?", "acceptedAnswer": { "@type": "Answer", "text": "You can train the principles without reproducing the method exactly. Lagree is built on slow eccentric control against continuous spring tension with no rest, and a heavy resistance cable set anchored to a door reproduces that loading pattern reasonably well for standing, kneeling and lunging sequences. What you cannot substitute is the moving carriage, which adds a constant stabilisation demand to every exercise. Treat cable work as effective training in the same style rather than as Lagree itself." } },
        { "@type": "Question", "name": "What does a home Lagree setup cost in total?", "acceptedAnswer": { "@type": "Answer", "text": "The machine dominates everything else. A Megaformer runs into several thousand dollars direct from Lagree Fitness; The Micro is $990.00 on Amazon from Lagree Fitness, or $1,700.00 with the rear platform, one pair of handlebars and the pulley cables. Against that, the supporting kit is minor — an interval timer, grip socks, a towel, knee sleeves and a mirror come to roughly $225 to $300 in total. If the machine is out of reach, a cable-based setup with the same accessories lands under $400 and still gives you a genuine training stimulus while you decide." } },
        { "@type": "Question", "name": "Is training Lagree at home a good idea without an instructor?", "acceptedAnswer": { "@type": "Answer", "text": "It works better once you have some studio time behind you. Lagree holds positions long enough that small faults compound — a dropped hip in a plank, a collapsed lower back in a kneeling lunge — and at home nobody corrects them. A reasonable approach is a block of studio classes first to learn the positions and the cueing, then home training for volume, with a mirror for feedback and periodic studio sessions to recalibrate. Going straight to home training with no instruction is where most technique problems start." } },
      ],
    },
  ],
};

const CLUSTER = [
  { label: "The machine itself", body: "The Megaformer M3S and M3X and The Micro compared, plus the studio-grade alternatives.", href: "/blog/best-megaformer-machine", cta: "Megaformer machines" },
  { label: "Springs and cables", body: "OEM replacement springs, resistance cables and how spring load maps to difficulty.", href: "/blog/best-lagree-resistance-springs-cables", cta: "Springs and cables" },
  { label: "Carriage handles and grips", body: "Replacement handles, grip wraps and wrist support for carriage pulls.", href: "/blog/best-lagree-carriage-handles", cta: "Handles and grips" },
  { label: "Platform extenders", body: "Extenders and risers that widen the working surface for plank and lunge sequences.", href: "/blog/best-megaformer-platform-extender", cta: "Platform extenders" },
  { label: "Cardio attachments", body: "Rebounder attachments for the jumping intervals some formats build in.", href: "/blog/best-lagree-cardio-rebounder-attachment", cta: "Rebounder attachments" },
  { label: "Timers", body: "Wall clocks and interval timers, compared on readability from the machine.", href: "/blog/best-interval-timer-for-lagree", cta: "Interval timers" },
  { label: "Grip socks", body: "Full-sole versus dot grip, and why it matters more on a moving carriage.", href: "/blog/best-lagree-grip-socks", cta: "Grip socks for Lagree" },
  { label: "What to wear", body: "Leggings, shorts and bras chosen around carriage friction and supine hardware.", href: "/blog/best-leggings-for-lagree", cta: "Leggings for Lagree" },
];

export default function LagreeAtHomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Lagree</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Lagree at Home:<br /><span style={{ color: "#8b4a31" }}>The Full Setup, Costed</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 10 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Start with the machine. The full-size Megaformer is sold direct by Lagree Fitness at several thousand dollars and is not on Amazon — but The Micro, Lagree Fitness&apos;s compact home machine, is: it is $990.00, sold by Lagree Fitness through its own Amazon store. Everything else — the timer that actually governs your sets, the socks that stop you sliding, the mirror doing the job an instructor would — is ordinary kit, costs roughly $225 to $300 in total, and is what most of this page covers.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-reformer-morning-light.png" alt="A carriage machine set up at home in morning light" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12 mt-4">
              <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>The machine: The Micro</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The Micro is Lagree Fitness&apos;s answer to Lagree at home: a compact, lightweight, portable machine designed to deliver the Megaformer-style workout in a smaller footprint. It accommodates users up to 6&apos;8&quot; and stores under a bed, against a wall, or on a bike rack. It is sold on Amazon by Lagree Fitness itself, through the brand&apos;s own store. Stock can be limited — if the listing shows as unavailable, buy direct from{" "}
                <a href="https://www.lagreefitness.com/" target="_blank" rel="noopener noreferrer nofollow" style={{ color: "#8b4a31" }}>lagreefitness.com</a>. The rear platform ($290.00), handlebars ($190.00 a pair) and pulley cables ($230.00) are sold separately, which takes a full Micro setup to $1,700.00. The full-size Megaformer is not on Amazon; it is sold direct by Lagree Fitness.
              </p>
              <ProductCard
                name="The Micro by Lagree Fitness"
                description="Lagree Fitness's compact home machine — low-impact, high-intensity strength and cardio in a smaller, portable format. Sold by Lagree Fitness's own Amazon store; stock can be limited, so check lagreefitness.com if it is unavailable."
                price="$990.00"
                affiliateUrl="https://www.amazon.com/dp/B0BBT7YV93?tag=pilatescollective-20"
              />
            </div>

            <div className="mb-10 overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
              <div className="px-6 py-4" style={{ backgroundColor: "#f6f3f2" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>The Kit — At a Glance</p>
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Essentials · Ranked</p>
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

            {/* Cluster routing */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Go deeper on any piece</h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Each part of a Lagree setup has its own decisions and its own failure modes. These are the detailed guides for each.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CLUSTER.map((t) => (
                  <div key={t.href} className="rounded-xl p-5 flex flex-col" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.35)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{t.label}</p>
                    <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{t.body}</p>
                    <Link href={t.href} className="text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif", textDecoration: "none" }}>
                      {t.cta} →
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "Can you buy a Megaformer for home use?", a: "Yes. The full-size Megaformer is sold direct by Lagree Fitness rather than on Amazon — expect several thousand dollars and to deal with the manufacturer for delivery and servicing. The Micro, Lagree Fitness's compact home machine, is the realistic home option: it is $990.00 on Amazon, sold by Lagree Fitness through its own Amazon store, with a rear platform ($290.00), handlebars ($190.00 a pair) and pulley cables ($230.00) sold separately. Stock can be limited; if it is unavailable, buy direct from lagreefitness.com. Be wary of other listings claiming to be Lagree machines — the genuine one is sold by Lagree Fitness." },
                  { q: "Can you do Lagree without a Megaformer?", a: "You can train the principles without reproducing the method exactly. Lagree is built on slow eccentric control against continuous spring tension with no rest, and a heavy resistance cable set anchored to a door reproduces that loading pattern reasonably well for standing, kneeling and lunging sequences. What you cannot substitute is the moving carriage, which adds a constant stabilisation demand to every exercise. Treat cable work as effective training in the same style rather than as Lagree itself." },
                  { q: "What does a home Lagree setup cost in total?", a: "The machine dominates everything else. A Megaformer runs into several thousand dollars direct from Lagree Fitness; The Micro is $990.00 on Amazon from Lagree Fitness, or $1,700.00 with the rear platform, one pair of handlebars and the pulley cables. Against that, the supporting kit is minor — an interval timer, grip socks, a towel, knee sleeves and a mirror come to roughly $225 to $300 in total. If the machine is out of reach, a cable-based setup with the same accessories lands under $400 and still gives you a genuine training stimulus while you decide." },
                  { q: "Is training Lagree at home a good idea without an instructor?", a: "It works better once you have some studio time behind you. Lagree holds positions long enough that small faults compound — a dropped hip in a plank, a collapsed lower back in a kneeling lunge — and at home nobody corrects them. A reasonable approach is a block of studio classes first to learn the positions and the cueing, then home training for volume, with a mirror for feedback and periodic studio sessions to recalibrate. Going straight to home training with no instruction is where most technique problems start." },
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
                <ArticleCard title="Lagree vs Pilates" excerpt="What separates the two methods, and which suits your goals and body." href="/blog/lagree-vs-pilates" category="Comparison" readTime="10 min read" date="June 2026" imageUrl="/pictures/stitch-reformer-row-studio.png" />
                <ArticleCard title="Best Megaformer Machine" excerpt="Lagree equipment reviewed, plus the studio-grade alternatives worth considering." href="/blog/best-megaformer-machine" category="Lagree" readTime="11 min read" date="June 2026" imageUrl="/pictures/stitch-reformers-aerial-row.png" />
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
