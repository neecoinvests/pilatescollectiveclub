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
  description: "What a home Lagree setup actually costs — why the machine cannot be bought on Amazon, which accessories can, and the kit that makes the practice work.",
  keywords: ["lagree at home", "home lagree setup", "megaformer at home", "microformer home", "lagree home workout equipment", "lagree machine for home", "lagree accessories", "home lagree studio", "lagree equipment cost", "lagree at home 2026"],
  openGraph: {
    title: "Lagree at Home (2026): The Full Setup, Honestly Costed",
    description: "The machine comes direct from Lagree. Everything else that makes a home setup work — ranked.",
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
    name: "Multi-Sport Interval Timer Wall Clock",
    price: "From $45",
    verdict: "The one piece of kit a home Lagree setup genuinely needs",
    description:
      "Lagree is built on time under tension — sets run 60 seconds and beyond with no rest, and the whole method depends on holding an effort for a prescribed duration rather than counting repetitions. Without a visible countdown you will unconsciously shorten sets as they get hard, which is precisely when the adaptation happens. A large wall-mounted interval timer solves this in a way a phone cannot: it is readable from a plank position across the room, it does not need unlocking mid-set, and it does not interrupt itself with notifications. Look for digits at least two inches tall, a remote, and programmable work and rest intervals so you can set a whole class rather than restarting between exercises. This is the cheapest purchase on the list and the one that most changes how the sessions actually go.",
    affiliateUrl: "https://www.amazon.com/s?k=multi+sport+interval+timer+wall+clock+gym&tag=pilatescollective-20",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "Full-Sole Grip Socks",
    price: "From $20",
    verdict: "Non-negotiable on any carriage machine",
    description:
      "Whatever machine you end up with, the carriage surface is slick vinyl and it moves under load. Full-sole silicone grip socks are the difference between a secure plank and an unplanned slide, and the specification matters more at home than in a studio because there is no instructor watching to catch a bad position. Insist on continuous silicone coverage across the whole footbed rather than scattered dots — dots hold under straight-down load and shear sideways off vinyl, which is the exact direction Lagree loads them during lunges and lateral work. Buy several pairs if you are training three or more times a week; sweat-soaked grip socks are not something you rewear. A snug arch band stops the sock rotating underfoot, which is the other common failure.",
    affiliateUrl: "https://www.amazon.com/s?k=full+sole+grip+socks+non+slip+pilates&tag=pilatescollective-20",
    tag: "Essential",
  },
  {
    rank: "03",
    name: "Heavy-Duty Resistance Cable Set",
    price: "From $35",
    verdict: "Best way to train the method without the machine",
    description:
      "If the machine is out of budget for now — and at several thousand dollars it is for most people — a heavy resistance cable set is the closest you can get to the loading pattern Lagree uses. The method is built on slow eccentric control against continuous spring tension, and a cable with a long elastic travel reproduces that resistance curve far better than a dumbbell, which loads by gravity alone and unloads at the top of every movement. Anchored to a door, a cable set covers the standing, kneeling and lunging sequences that make up a large share of a Lagree class. It will not reproduce the carriage instability, which is the part you cannot substitute. Choose a set with graduated resistance and a load-rated door anchor rather than a moulded plastic one.",
    affiliateUrl: "https://www.amazon.com/s?k=heavy+duty+resistance+cable+set+door+anchor&tag=pilatescollective-20",
    tag: "Best Machine Substitute",
  },
  {
    rank: "04",
    name: "Padded Knee Sleeves",
    price: "From $22",
    verdict: "Best fix for the kneeling sequences",
    description:
      "Kneeling work is a large share of the Lagree repertoire and the carriage is a thin vinyl pad over a rigid platform, which becomes uncomfortable within a minute or two. The instinct is to buy a cushion, and on a moving carriage that is the wrong answer — a loose pad stays put while the platform travels, leaving your knee balanced on a sliding object. Wearable padding moves with your leg, so the protection is present in every position and every transition. Keep it thin, around 10 to 25mm: thicker padding raises the knee enough to tip the pelvis and change the geometry of a kneeling lunge, trading a comfort problem for a technique one. Look for coverage over the patella and the bony point just below it.",
    affiliateUrl: "https://www.amazon.com/s?k=padded+knee+sleeves+volleyball+low+profile&tag=pilatescollective-20",
    tag: "Best Knee Protection",
  },
  {
    rank: "05",
    name: "Large Leaning Floor Mirror",
    price: "From $130",
    verdict: "Best substitute for an instructor's eye",
    description:
      "The thing you lose training at home is correction, and a mirror is the only practical replacement. Lagree positions are held long enough that small faults — a dropped hip in a plank, a collapsed lower back in a kneeling lunge — compound over a 45-minute session, and without feedback you will not notice. A leaning mirror is the right format because the slight backward tilt drops the sightline toward the floor, where most of the work happens; a mirror mounted flat at standing height shows you very little once you are on the carriage. Anchor it to the wall regardless of what the instructions say, since a 65-inch glass panel near a moving machine is not something to leave free-standing.",
    affiliateUrl: "https://www.amazon.com/s?k=large+leaning+floor+mirror+65+x+22+full+length&tag=pilatescollective-20",
    tag: "Best Form Feedback",
  },
  {
    rank: "06",
    name: "Microfibre Sweat Towel (Multipack)",
    price: "From $22",
    verdict: "More functional than it sounds",
    description:
      "Lagree produces continuous rather than intermittent sweat, and on a machine that matters for a practical reason beyond comfort: sweat on a vinyl carriage makes it slippery in exactly the places your hands and feet need grip. A towel within reach is a safety item as much as a convenience. Microfibre is the right material because it absorbs several times its weight and dries fast enough to be used again the same day, where cotton stays damp and starts to smell. Buy a multipack rather than a single premium towel — you want one on the machine, one for your hands, and clean ones in rotation. Wash without fabric softener, which coats the fibres and destroys absorbency, the single most common way people ruin microfibre.",
    affiliateUrl: "https://www.amazon.com/s?k=microfiber+gym+sweat+towel+multipack&tag=pilatescollective-20",
    tag: "Best Value",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Lagree at Home (2026): The Full Setup, Honestly Costed",
      "description": "A practical guide to setting up Lagree at home — what the machine costs and why it is not on Amazon, which accessories are, and the kit that makes it work.",
      "url": "https://pilatescollectiveclub.com/blog/lagree-at-home",
      "datePublished": "2026-09-14",
      "dateModified": "2026-09-14",
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
          "offers": { "@type": "Offer", "priceCurrency": "USD", "price": p.price.replace(/[^0-9]/g, ""), "availability": "https://schema.org/InStock", "url": p.affiliateUrl },
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
        { "@type": "Question", "name": "Can you buy a Megaformer for home use?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, but not from Amazon. Lagree Fitness sells its machines directly, and the Megaformer, Microformer and Proformer are proprietary equipment rather than general retail products. Expect several thousand dollars for a Megaformer and rather less for the smaller Microformer, and expect to deal with the manufacturer for delivery and servicing. This is worth knowing before you start searching, because the Lagree-branded items you will find on general marketplaces are accessories and consumables rather than machines." } },
        { "@type": "Question", "name": "Can you do Lagree without a Megaformer?", "acceptedAnswer": { "@type": "Answer", "text": "You can train the principles without reproducing the method exactly. Lagree is built on slow eccentric control against continuous spring tension with no rest, and a heavy resistance cable set anchored to a door reproduces that loading pattern reasonably well for standing, kneeling and lunging sequences. What you cannot substitute is the moving carriage, which adds a constant stabilisation demand to every exercise. Treat cable work as effective training in the same style rather than as Lagree itself." } },
        { "@type": "Question", "name": "What does a home Lagree setup cost in total?", "acceptedAnswer": { "@type": "Answer", "text": "The machine dominates everything else. A Megaformer runs into several thousand dollars direct from Lagree Fitness; the smaller Microformer is considerably less. Against that, the supporting kit is minor — an interval timer, grip socks, towels, knee sleeves and a mirror come to roughly $250 to $300 in total. If the machine is out of reach, a cable-based setup with the same accessories lands under $400 and still gives you a genuine training stimulus while you decide." } },
        { "@type": "Question", "name": "Is training Lagree at home a good idea without an instructor?", "acceptedAnswer": { "@type": "Answer", "text": "It works better once you have some studio time behind you. Lagree holds positions long enough that small faults compound — a dropped hip in a plank, a collapsed lower back in a kneeling lunge — and at home nobody corrects them. A reasonable approach is a block of studio classes first to learn the positions and the cueing, then home training for volume, with a mirror for feedback and periodic studio sessions to recalibrate. Going straight to home training with no instruction is where most technique problems start." } },
      ],
    },
  ],
};

const CLUSTER = [
  { label: "The machine itself", body: "Megaformer, Microformer and Proformer compared, plus the studio-grade alternatives.", href: "/blog/best-megaformer-machine", cta: "Megaformer machines" },
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
              Start with the part nobody tells you: the machine is not on Amazon. Lagree Fitness sells the Megaformer, Microformer and Proformer directly, as proprietary equipment, at several thousand dollars for the full-size machines. Everything else — the timer that actually governs your sets, the socks that stop you sliding, the mirror doing the job an instructor would — is ordinary kit, costs about $250 in total, and is what this page covers.
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
            <div className="mb-10 mt-4 overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
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
                  { q: "Can you buy a Megaformer for home use?", a: "Yes, but not from Amazon. Lagree Fitness sells its machines directly, and the Megaformer, Microformer and Proformer are proprietary equipment rather than general retail products. Expect several thousand dollars for a Megaformer and rather less for the smaller Microformer, and expect to deal with the manufacturer for delivery and servicing. This is worth knowing before you start searching, because the Lagree-branded items you will find on general marketplaces are accessories and consumables rather than machines." },
                  { q: "Can you do Lagree without a Megaformer?", a: "You can train the principles without reproducing the method exactly. Lagree is built on slow eccentric control against continuous spring tension with no rest, and a heavy resistance cable set anchored to a door reproduces that loading pattern reasonably well for standing, kneeling and lunging sequences. What you cannot substitute is the moving carriage, which adds a constant stabilisation demand to every exercise. Treat cable work as effective training in the same style rather than as Lagree itself." },
                  { q: "What does a home Lagree setup cost in total?", a: "The machine dominates everything else. A Megaformer runs into several thousand dollars direct from Lagree Fitness; the smaller Microformer is considerably less. Against that, the supporting kit is minor — an interval timer, grip socks, towels, knee sleeves and a mirror come to roughly $250 to $300 in total. If the machine is out of reach, a cable-based setup with the same accessories lands under $400 and still gives you a genuine training stimulus while you decide." },
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
