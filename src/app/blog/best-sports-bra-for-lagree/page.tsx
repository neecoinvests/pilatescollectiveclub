import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import { jsonLdHtml } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Best Sports Bra for Lagree (2026): 6 Picks by Support",
  description: "The best sports bra for Lagree, matched to support level: high-impact picks for jumps and lunges, smooth backs for supine carriage work, and longline options.",
  keywords: ["sports bra for lagree", "best sports bra for lagree", "lagree sports bra", "high support bra megaformer", "megaformer sports bra", "high impact sports bra lagree", "longline sports bra lagree", "lagree outfit", "what to wear to lagree", "sports bra for reformer"],
  openGraph: {
    title: "Best Sports Bra for Lagree (2026): 6 Picks by Support",
    description: "Six sports bras for Lagree, from high-impact support to a light matching-set bralette — with Amazon prices verified October 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-sports-bra-for-lagree",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/samantha-sheppard-b8Q5fHBsyik-unsplash.jpg", width: 1200, height: 630, alt: "Best Sports Bra for Lagree — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Sports Bra for Lagree (2026)",
    description: "High, mid and light support picks for Megaformer classes — and what to check on the back before you buy.",
    images: ["https://pilatescollectiveclub.com/pictures/samantha-sheppard-b8Q5fHBsyik-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-sports-bra-for-lagree" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const amazon = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=pilatescollective-20`;

const PRODUCTS = [
  {
    rank: "01",
    name: "Under Armour Women's Infinity 2 High Impact Sports Bra",
    price: "$47.85",
    verdict: "Best high support — jump and lunge work",
    description:
      "If your studio programs jumping lunges, rebounder intervals or fast cardio blocks, start here. This is a bra Under Armour sells specifically as high impact, which is the support tier you want when the class stops being slow and controlled. Lagree is mostly slow tempo with long time under tension, but the moments that are not — a burst of jumps off the platform, a run of fast lunges — are exactly where an under-supportive bra becomes the only thing you can think about. It is sold and shipped by Amazon.com, which keeps returns simple if the band size is off. Before you commit, do the one check that matters for Lagree: lie back on the floor or a bench in it and see whether anything on the back presses into your spine, because a large share of the repertoire is performed supine on a firm carriage. If you only buy one supportive bra for Lagree, this is the one we would point most people to.",
    affiliateUrl: amazon("B0C12Q3L89"),
    tag: "Best High Support",
  },
  {
    rank: "02",
    name: "Varley Freesoft Harley Bralette",
    price: "$66.00",
    verdict: "Premium matching-set pick — light support",
    description:
      "Varley has become a studio staple, and the Freesoft Harley is the bralette half of its Freesoft line — the same line and Marina colourway as the Varley Freesoft leggings in our Lagree leggings guide, so it makes a genuine matching set. Be clear about what it is: a bralette, which means light support. That makes it a good choice for smaller busts, for slower sessions built around long holds and controlled pulses, and for anyone who wants one set that works for class and coffee afterwards. It is the wrong choice for a class with jumps or rebounder work, where you want the Under Armour Infinity 2 above instead. On Amazon this listing is sold through Shopbop, an Amazon company, rather than a third-party reseller. If you like the look of matching sets, pair it with a high-impact bra in your rotation for your harder classes rather than asking one piece to do both jobs.",
    affiliateUrl: amazon("B0FXN42JWR"),
    tag: "Premium Pick",
  },
  {
    rank: "03",
    name: "CRZ YOGA Butterluxe U Back Sports Bra",
    price: "$28.00",
    verdict: "Best overall value",
    description:
      "CRZ YOGA's Butterluxe line is the brand's soft-handfeel fabric — the same family as the Butterluxe leggings we recommend for Lagree — and this U Back cut is the one we would pick for everyday classes. The relevance to Lagree is the back. A U-shaped back leaves the area between your shoulder blades open rather than putting a racerback join there, and that join is precisely the spot that takes your weight when you lie supine on the carriage. Soft, buttery fabrics generally trade some compression for comfort, so treat this as an everyday, lower-impact bra for slow, heavy sessions rather than your jumping-day bra. At under $30 it is easy to buy two for a weekly rotation, which matters more than it sounds: Lagree sweat is continuous, and a bra worn damp once is due a wash.",
    affiliateUrl: amazon("B09ZP9VXLJ"),
    tag: "Best Value",
  },
  {
    rank: "04",
    name: "Heathyoga High Impact Sports Bra (Padded Racerback)",
    price: "$24.99",
    verdict: "Best budget high support",
    description:
      "The budget way to get a high-impact bra into your rotation. Heathyoga sells this as a high-impact, padded racerback, which puts it in the same support tier as our top pick at roughly half the price. The racerback cut is useful in Lagree because it keeps the straps on your shoulders through plank series, bear crawls and overhead work, where standard straps tend to slide outward. The trade-off of any racerback is the join between the shoulder blades, so run a hand over it when it arrives: a flat, smooth join is fine on the carriage; a raised clasp or slider is something you will feel through every supine set. Removable padding, where present, is worth checking after washing too — pads that fold or shift are a common annoyance with budget bras. For a second or third high-support bra, or a first one on a tight budget, it is the obvious pick.",
    affiliateUrl: amazon("B08DKWH76W"),
    tag: "Best Budget High Support",
  },
  {
    rank: "05",
    name: "Under Armour Women's Crossback Mid Impact Sports Bra",
    price: "$24.50",
    verdict: "Best mid support",
    description:
      "Mid impact is the honest support level for a lot of Lagree classes. The method is built on slow, controlled reps and long holds rather than bouncing, so if your studio does not program jumps or rebounder work, a mid-support bra is often all you need — and it is more comfortable over a 45-minute class than a high-impact bra with a firmer band. This Under Armour model is sold by Amazon.com at under $25, which makes it an easy everyday bra. The crossback straps stay put through plank and arm work. The one Lagree caveat with any crossed-strap design is where the straps cross: if the crossing point sits flat, you will not notice it on the carriage; if it is bulky, you will. If supine work is where you feel your bra most, the U-back CRZ above is the alternative to try.",
    affiliateUrl: amazon("B0874WGZ92"),
    tag: "Best Mid Support",
  },
  {
    rank: "06",
    name: "Oalka Longline Padded Sports Bra",
    price: "$14.99",
    verdict: "Best longline and best budget",
    description:
      "A longline bra extends the band down the ribcage, and in a Lagree class that extra length does two useful things. It spreads support over a wider area rather than concentrating it on a narrow underband, and it tends to stay put through inversions, plank transitions and kneeling work, where a short band rides up and needs resetting. The longer cut also means you can train in just the bra in a hot studio without the midriff exposure of a standard crop, which is why longlines are so common in Megaformer rooms. The trade-off is warmth — more fabric over the ribs runs hotter — and if you size down, a longline can restrict the lateral rib expansion that good breathing depends on, so buy true to size. At $14.99 it is the cheapest bra here and an easy way to try the style before spending more.",
    affiliateUrl: amazon("B08JTQ4JHP"),
    tag: "Best Longline",
  },
];

const FAQS = [
  { q: "What is the best sports bra for Lagree?", a: "For most people, a high-impact bra for harder classes plus a cheaper everyday bra for the rest. Our high-support pick is the Under Armour Infinity 2 High Impact Sports Bra; for value, the CRZ YOGA Butterluxe U Back. Whatever you choose, check the back before buying: much of Lagree is performed lying on a firm carriage, so any raised clasp or slider between your shoulder blades presses into your spine for the whole set." },
  { q: "What support level do you need for Lagree?", a: "It depends on your class and your bust size. Lagree is mostly slow tempo with long time under tension, so mid support is enough for many people in many classes. If your studio programs jumps, fast lunges or rebounder intervals, step up to a bra sold as high impact. Light-support bralettes suit smaller busts and slower sessions. Larger busts are usually better served by high-support designs across the board, since compression styles work by flattening and become less effective as cup size goes up." },
  { q: "Why does my sports bra dig into my back during Lagree?", a: "Because you are lying on it. A large share of Lagree is performed supine on a firm vinyl carriage, so any raised hardware on the back of the bra — a racerback clasp, a plastic strap slider, a bulky strap crossing, a hook-and-eye closure — is pressed between your spine and a hard surface for the length of the set. It is a hardware problem, not a fit problem. Open-back cuts such as a U back, and racerbacks with flat joins, avoid it." },
  { q: "Is a longline bra good for Lagree?", a: "For many people, yes. The longer band spreads support over a wider area of the ribcage and tends to stay put through inversions and plank transitions where a short band rides up, and it lets you train in just the bra in a hot studio. The caveats are heat and breathing: more fabric over the ribs runs warmer, and a longline sized down can restrict lateral rib expansion. Buy true to size." },
  { q: "How many sports bras do you need for regular Lagree?", a: "One per class between washes, so three or four if you go three or four times a week. Lagree sweat is continuous and technical fabrics hold odour once worn damp, so rewearing is not realistic. A practical setup is a rotation of mid-priced everyday bras plus one genuinely high-support bra for jump or rebounder formats. Wash cold and air dry — heat is what breaks down elastane, and the underband is the first thing to go." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Sports Bra for Lagree (2026): 6 Picks by Support",
      "description": "Sports bras for Lagree and Megaformer classes, chosen by support level and by what sits on your back during supine carriage work.",
      "url": "https://pilatescollectiveclub.com/blog/best-sports-bra-for-lagree",
      "datePublished": "2026-09-12",
      "dateModified": "2026-10-02",
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
          "offers": { "@type": "Offer", "priceCurrency": "USD", "price": p.price.replace(/[^0-9.]/g, ""), "availability": "https://schema.org/InStock", "url": p.affiliateUrl },
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
      "mainEntity": FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
  ],
};

export default function BestSportsBraForLagreePage() {
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
              Best Sports Bras<br /><span style={{ color: "#8b4a31" }}>for Lagree (2026)</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated October 2026 · 9 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Every product link on this page goes to Amazon. As an Amazon Associate we earn from qualifying purchases, at no extra cost to you. Listings and prices were verified on October 2, 2026 and can change.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Support is the obvious requirement and only half the story. Much of Lagree happens lying on your back on a firm vinyl carriage, which means any raised hardware on the back of the bra — a racerback clasp, a plastic slider, a hook-and-eye closure — spends the whole set pressed between your spine and a hard surface. It is the most common complaint from new practitioners, and it is a hardware problem, not a fit one. Below are six bras on Amazon, from high-impact support for jump work to a light matching-set bralette, with notes on what to check on each one for the carriage.
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
            <div className="mb-12 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What a Lagree class asks of a sports bra</h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
                <p>Lagree is not a high-impact method by design. It is built on slow tempo and long time under tension: a lunge on the Megaformer carriage can take four or five seconds each way, and a plank series keeps you holding position while the springs try to pull the carriage out from under you. For that work, the demand on a sports bra is less about bounce and more about staying put — a band that does not ride up when you invert, straps that do not slide off your shoulders in plank, and fabric that copes with heavy, continuous sweat.</p>
                <p>Many studios add faster blocks, though: jumping lunges off the platform, cardio bursts, or rebounder intervals in hybrid formats. Those are where support level suddenly matters, and where a light bralette that felt fine in the slow sections stops feeling fine. That is why we split this list by support tier rather than ranking everything on one scale. Most regulars end up with a mix: one or two high-support bras for harder classes and cheaper mid-support ones for the rest.</p>
                <p>The third factor is specific to the machine. A big share of the repertoire is performed lying on your back on a firm, lightly padded carriage, often with your weight resting right between your shoulder blades. Anything raised on the back of a bra — a clasp, a plastic slider, a bulky strap crossing, a hook-and-eye closure — gets pressed into your spine for the length of the set. None of the listings below promise a hardware-free back, so we have flagged on each card what to check, and why an open U back or a flat racerback join matters.</p>
                <p>How we chose: we picked established brands and current Amazon listings across the three support tiers and a spread of prices, confirmed each one was in stock, and verified the prices on October 2, 2026. The notes below explain our reasoning — the cut, the support tier each brand lists, and how that interacts with Lagree — based on the listings and general fit logic, not on lab results.</p>
              </div>
            </div>

            <div className="mb-10 overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{PRODUCTS.length} Bras · By Support Level</p>
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
              <div className="mt-10 rounded-xl p-6" style={{ backgroundColor: "#f6f3f2" }}>
                <p className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Not Lagree-specific? That&apos;s fine</p>
                <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                  None of these bras are made for Lagree, and you do not need one that is. There is no Lagree-branded sports bra standard — what matters is the right support tier for your classes, a band that stays put through planks and inversions, and nothing raised on the back where you lie on the carriage. A good training bra from a mainstream brand covers all three.
                </p>
              </div>
            </div>

            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#fff4f1", border: "1px solid rgba(139,74,49,0.15)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What to check</h2>
              <ul className="space-y-3">
                {[
                  "Run a hand over the back before buying. Any raised clasp, slider or hook sits between your spine and a firm carriage for the whole set.",
                  "Prefer pull-on and seamless styles, or racerbacks with flat bonded joins rather than plastic hardware.",
                  "Wide underbands only. Thin elastic bands ride up during inversions and plank transitions.",
                  "Match the support tier to your classes: high impact if your studio programs jumps or rebounder work, mid support for slow, controlled sessions.",
                  "Larger busts: lean towards high-support designs even for slower classes — compression styles work by flattening and become less effective as cup size goes up.",
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
                <ArticleCard title="Best Lagree Tops" excerpt="Why fitted tanks beat loose tees on the Megaformer, and five tops to layer over your sports bra." href="/blog/best-lagree-tops" category="Lagree" readTime="8 min read" date="October 2026" imageUrl="/pictures/stitch-retail-activewear.png" />
                <ArticleCard title="Best Leggings for Lagree" excerpt="Fabric, rise and grip on a moving carriage — the leggings that stay put through lunges and planks." href="/blog/best-leggings-for-lagree" category="Lagree" readTime="8 min read" date="October 2026" imageUrl="/pictures/stitch-retail-activewear.png" />
                <ArticleCard title="Lagree Essentials" excerpt="Everything worth bringing to a Lagree class, from grip socks to a sweat towel." href="/blog/lagree-essentials" category="Lagree" readTime="8 min read" imageUrl="/pictures/stitch-hands-on-carriage.png" />
                <ArticleCard title="Best Pilates Sports Bras" excerpt="Our wider guide to sports bras for reformer and mat Pilates." href="/blog/best-pilates-sports-bra" category="Pilates Apparel" readTime="8 min read" imageUrl="/pictures/jade-stephens-N21356amsyw-unsplash.jpg" />
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
