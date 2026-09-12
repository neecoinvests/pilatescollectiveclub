import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Sports Bras for Lagree (2026): Tested & Ranked",
  description: "Sports bras for Lagree — why bulky back hardware digs in during supine carriage work, and the high-support, smooth-back, wicking options that do not.",
  keywords: ["best sports bra for lagree", "lagree sports bra", "megaformer sports bra", "high support bra pilates", "smooth back sports bra", "longline sports bra lagree", "seamless sports bra reformer", "sweat wicking sports bra", "lagree outfit", "lagree sports bra 2026"],
  openGraph: {
    title: "Best Sports Bras for Lagree (2026): Tested & Ranked",
    description: "You lie on your back on a firm carriage — so back hardware matters as much as support. Six ranked.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-sports-bra-for-lagree",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/samantha-sheppard-b8Q5fHBsyik-unsplash.jpg", width: 1200, height: 630, alt: "Best Sports Bras for Lagree — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Sports Bras for Lagree (2026)",
    description: "High support, smooth backs, genuine wicking — ranked for Megaformer classes.",
    images: ["https://pilatescollectiveclub.com/pictures/samantha-sheppard-b8Q5fHBsyik-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-sports-bra-for-lagree" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "High-Support Compression Bra with Smooth Back",
    price: "From $54",
    verdict: "Best overall sports bra for Lagree",
    description:
      "Two requirements drive this category and only one of them is obvious. The obvious one is support: Lagree includes pulse work, plank series and often rebounder intervals, which puts it well above mat Pilates on the impact scale and means a light bralette is not enough. The less obvious one is what happens on your back. A large share of the repertoire is performed supine on a firm vinyl carriage, and a bra with a bulky racerback clasp, thick crossed elastic or a plastic slider sitting between your shoulder blades will press into your spine for the entire set. A smooth-back compression bra solves both: firm all-over support with nothing raised along the spine. Look for flatlock or bonded seams rather than overlocked ones, and a wide underband that will not roll when you invert. Pull-on styles avoid hardware entirely.",
    affiliateUrl: "https://www.amazon.com/s?k=high+support+compression+sports+bra+smooth+back+seamless&tag=pilatescollective-20",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "Longline Sports Bra",
    price: "From $48",
    verdict: "Best coverage and most secure underband",
    description:
      "A longline bra extends the band several inches down the ribcage, and that extra surface area does two useful things in a Lagree class. It spreads support across a wider area rather than concentrating it on a narrow underband, which is more comfortable across a 45-minute session with no real rest. And it stays put through inversions and plank transitions, where a standard narrow band tends to ride up and need resetting. The longer cut also means you can train in just the bra in a hot studio without the midriff exposure a standard crop gives, which is why it has become the default in a lot of Lagree studios. The trade-off is heat — more fabric over the ribcage runs warmer, and it can restrict the lateral rib expansion that good breathing depends on if you size down. Buy true to size.",
    affiliateUrl: "https://www.amazon.com/s?k=longline+sports+bra+high+support+wide+band&tag=pilatescollective-20",
    tag: "Best Coverage",
  },
  {
    rank: "03",
    name: "Seamless Medium-Support Bra",
    price: "From $32",
    verdict: "Most comfortable for supine carriage work",
    description:
      "If your main complaint is something digging into your back when you lie down, a fully seamless knit bra is the most direct fix available. Knitted as a single tube with no seams, no clasps and no sliders, there is simply nothing on the back to press into the spine against a firm carriage. They are also the coolest option here, which matters in a warm studio, and the most comfortable to wear under a top. The honest limitation is support level: seamless knits provide medium compression at best, so this is the right choice for smaller busts or for classes without a rebounder component, and the wrong one if you need genuine high support for jumping intervals. Check the underband is a proper wide knit rib rather than a thin elastic, which is where cheap seamless bras fail and start riding up.",
    affiliateUrl: "https://www.amazon.com/s?k=seamless+medium+support+sports+bra+no+clasp&tag=pilatescollective-20",
    tag: "Best Seamless",
  },
  {
    rank: "04",
    name: "Encapsulation Bra with Adjustable Straps",
    price: "From $68",
    verdict: "Best support for larger busts",
    description:
      "Compression bras work by flattening, which is why they stop being adequate above roughly a D cup regardless of how high the stated support level is. Encapsulation designs use separate moulded cups to support each side independently, and for larger busts that is the difference between a class you can concentrate on and one you spend managing. Adjustable straps matter here too, since torso length varies far more than bra sizing accounts for and a fixed strap either digs or leaves slack. The thing to watch for Lagree specifically is the back closure: many encapsulation bras use a conventional hook-and-eye, which is exactly the hardware that presses into your spine on a firm carriage. Look for a flat, low-profile closure or a pull-on encapsulation hybrid, and check the strap adjusters are flat sliders rather than raised plastic.",
    affiliateUrl: "https://www.amazon.com/s?k=encapsulation+high+impact+sports+bra+adjustable+straps&tag=pilatescollective-20",
    tag: "Best for Larger Busts",
  },
  {
    rank: "05",
    name: "Racerback Wicking Bra (Flat Hardware)",
    price: "From $38",
    verdict: "Best for hot studios and heavy sweat",
    description:
      "Lagree runs hot and the sweat is continuous rather than intermittent, so genuine moisture transport matters more here than in a mat class. A technical racerback with a mesh panel across the upper back ventilates where you sweat most, and a polyester or nylon knit with a real wicking finish moves moisture rather than holding it — the practical difference being whether you finish class damp or soaked. The racerback cut also keeps straps clear of the shoulder during overhead and plank work, where standard straps slide. The Lagree-specific caveat is the one that runs through this whole list: choose a racerback with flat bonded hardware, not a raised plastic clasp at the join. That clasp sits precisely between the shoulder blades, which is precisely where your weight rests on the carriage in supine work.",
    affiliateUrl: "https://www.amazon.com/s?k=racerback+sports+bra+mesh+back+moisture+wicking&tag=pilatescollective-20",
    tag: "Most Breathable",
  },
  {
    rank: "06",
    name: "Sports Bra Multipack Under $40",
    price: "From $32",
    verdict: "Best value for frequent classes",
    description:
      "Three or four Lagree classes a week means three or four bras in rotation, and sweat-soaked technical fabric genuinely cannot be rewered. Multipacks solve the laundry arithmetic at a price where you are not precious about wear. Quality in this segment has improved and the better packs offer pull-on seamless or lightly padded compression styles with no back hardware, which happens to be the right specification for carriage work. Set expectations on longevity: elastane recovery in cheap knits degrades faster under heat and sweat, so expect the band to loosen within six to nine months of frequent use rather than a couple of years. Wash cold, never tumble dry. Support level will be medium at most, so treat these as your everyday rotation and keep one properly supportive bra for rebounder classes.",
    affiliateUrl: "https://www.amazon.com/s?k=sports+bra+multipack+seamless+pull+on&tag=pilatescollective-20",
    tag: "Best Value",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Sports Bras for Lagree (2026): Tested & Ranked",
      "description": "Sports bras compared for Lagree and Megaformer classes — support level, back hardware against a firm carriage, breathability and underband security.",
      "url": "https://pilatescollectiveclub.com/blog/best-sports-bra-for-lagree",
      "datePublished": "2026-09-12",
      "dateModified": "2026-09-12",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/samantha-sheppard-b8Q5fHBsyik-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-sports-bra-for-lagree" },
    },
    {
      "@type": "ItemList",
      "name": "Best Sports Bras for Lagree (2026)",
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
        { "@type": "ListItem", "position": 3, "name": "Best Sports Bra for Lagree", "item": "https://pilatescollectiveclub.com/blog/best-sports-bra-for-lagree" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What support level do you need for Lagree?", "acceptedAnswer": { "@type": "Answer", "text": "Medium to high, which is a step up from mat Pilates. Lagree includes sustained pulse work, plank and inversion series, and many studios run a rebounder or jump-board segment — none of which a light bralette handles well. Smaller busts are generally well served by a medium-support compression or seamless style. Above roughly a D cup, look for an encapsulation design with separate moulded cups, since compression bras work by flattening and stop being adequate at that point regardless of the support rating on the label." } },
        { "@type": "Question", "name": "Why does my sports bra dig into my back during reformer work?", "acceptedAnswer": { "@type": "Answer", "text": "Because you are lying on it. A large share of Lagree and reformer work is performed supine on a firm vinyl carriage with very little padding, so any raised hardware on the back of the bra — a racerback clasp, a plastic strap slider, thick crossed elastic, a hook-and-eye closure — is pressed between your spine and a hard surface for the length of the set. It is one of the most common complaints from new practitioners and it is entirely a hardware problem, not a fit problem. Pull-on and seamless styles with flat bonded joins solve it." } },
        { "@type": "Question", "name": "Is a longline bra better for Lagree?", "acceptedAnswer": { "@type": "Answer", "text": "For many people, yes. The extended band spreads support over a wider area of the ribcage rather than concentrating it on a narrow elastic, which is more comfortable across a long continuous class, and it stays put through inversions and plank transitions where a short band rides up. It also allows training in just the bra in a hot studio. The caveats are heat and breathing: more fabric over the ribs runs warmer, and a longline sized down can restrict the lateral rib expansion that good breathing mechanics depend on. Buy true to size." } },
        { "@type": "Question", "name": "How many sports bras do you need for regular Lagree?", "acceptedAnswer": { "@type": "Answer", "text": "One per class between washes, so three or four if you attend three or four times a week. Lagree sweat is continuous rather than intermittent and technical fabrics hold odour once they have been worn damp, so rewearing is not realistic in the way it might be after a gentle mat class. A practical setup is a rotation of mid-priced everyday bras plus one genuinely supportive bra kept for rebounder or higher-impact formats. Wash cold and air dry — heat is what destroys elastane recovery, and the underband is the first thing to go." } },
      ],
    },
  ],
};

export default function BestSportsBraForLagreePage() {
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
              Best Sports Bras<br /><span style={{ color: "#8b4a31" }}>for Lagree (2026)</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 8 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Support is the obvious requirement and only half the story. Much of Lagree happens lying on your back on a firm vinyl carriage, which means any raised hardware on the back of the bra — a racerback clasp, a plastic slider, a hook-and-eye closure — spends the whole set pressed between your spine and a hard surface. It is the most common complaint from new practitioners, and it is a hardware problem, not a fit one.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/samantha-sheppard-b8Q5fHBsyik-unsplash.jpg" alt="Technical training kit for a high-intensity studio class" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Bras · Ranked</p>
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
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What to check</h2>
              <ul className="space-y-3">
                {[
                  "Run a hand over the back before buying. Any raised clasp, slider or hook sits between your spine and a firm carriage for the whole set.",
                  "Prefer pull-on and seamless styles, or racerbacks with flat bonded joins rather than plastic hardware.",
                  "Wide underbands only. Thin elastic bands ride up during inversions and plank transitions.",
                  "Above a D cup, choose encapsulation over compression — compression works by flattening and stops being enough.",
                  "Check it does not restrict lateral rib expansion. If you cannot breathe wide into the ribs, it is too tight or sized down too far.",
                  "Buy three or four. Lagree sweat is continuous, and technical fabric holds odour once worn damp.",
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
                  { q: "What support level do you need for Lagree?", a: "Medium to high, which is a step up from mat Pilates. Lagree includes sustained pulse work, plank and inversion series, and many studios run a rebounder or jump-board segment — none of which a light bralette handles well. Smaller busts are generally well served by a medium-support compression or seamless style. Above roughly a D cup, look for an encapsulation design with separate moulded cups, since compression bras work by flattening and stop being adequate at that point regardless of the support rating on the label." },
                  { q: "Why does my sports bra dig into my back during reformer work?", a: "Because you are lying on it. A large share of Lagree and reformer work is performed supine on a firm vinyl carriage with very little padding, so any raised hardware on the back of the bra — a racerback clasp, a plastic strap slider, thick crossed elastic, a hook-and-eye closure — is pressed between your spine and a hard surface for the length of the set. It is one of the most common complaints from new practitioners and it is entirely a hardware problem, not a fit problem. Pull-on and seamless styles with flat bonded joins solve it." },
                  { q: "Is a longline bra better for Lagree?", a: "For many people, yes. The extended band spreads support over a wider area of the ribcage rather than concentrating it on a narrow elastic, which is more comfortable across a long continuous class, and it stays put through inversions and plank transitions where a short band rides up. It also allows training in just the bra in a hot studio. The caveats are heat and breathing: more fabric over the ribs runs warmer, and a longline sized down can restrict the lateral rib expansion that good breathing mechanics depend on. Buy true to size." },
                  { q: "How many sports bras do you need for regular Lagree?", a: "One per class between washes, so three or four if you attend three or four times a week. Lagree sweat is continuous rather than intermittent and technical fabrics hold odour once they have been worn damp, so rewearing is not realistic in the way it might be after a gentle mat class. A practical setup is a rotation of mid-priced everyday bras plus one genuinely supportive bra kept for rebounder or higher-impact formats. Wash cold and air dry — heat is what destroys elastane recovery, and the underband is the first thing to go." },
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
                <ArticleCard title="Best Grip Socks for Lagree" excerpt="Full-sole silicone versus dot grip on a moving carriage — six pairs ranked." href="/blog/best-lagree-grip-socks" category="Lagree" readTime="8 min read" date="September 2026" imageUrl="/pictures/stitch-grip-socks-footbar.png" />
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
