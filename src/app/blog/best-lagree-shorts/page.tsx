import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Lagree Shorts (2026): 7 Best Biker Shorts for Class",
  description: "The best Lagree shorts: why inseam length matters on a vinyl carriage, and seven verified biker and men's shorts from $12.99, in 4 to 8 inch inseams.",
  keywords: ["lagree shorts", "shorts for lagree", "biker shorts lagree", "best shorts for megaformer", "men's shorts lagree", "best lagree shorts", "megaformer shorts", "what to wear to lagree", "lagree outfit", "lagree shorts 2026"],
  openGraph: {
    title: "Lagree Shorts (2026): 7 Best Biker Shorts for Class",
    description: "Inseam length decides this category. Seven verified biker and men's shorts for the Megaformer, from $12.99.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-lagree-shorts",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/ahmet-kurt-0xn-8kRWOhE-unsplash.jpg", width: 1200, height: 630, alt: "Best Lagree Shorts — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lagree Shorts (2026)",
    description: "Inseam length, fit and carriage contact — seven verified biker and men's shorts for Megaformer classes.",
    images: ["https://pilatescollectiveclub.com/pictures/ahmet-kurt-0xn-8kRWOhE-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-lagree-shorts" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "CRZ YOGA Butterluxe Biker Shorts 6\"",
    price: "$24.00",
    verdict: "Best overall short for Lagree",
    description:
      "A 6-inch inseam is the most versatile length for a Megaformer, and this is the pair we would start with. Lagree puts you in kneeling, seated and side-lying positions directly on a vinyl carriage, and bare skin on warm vinyl sticks during transitions and leaves sweat on a shared machine. Six inches keeps fabric over most of the thigh in those positions while still venting heat in a warm room, which is the whole reason to choose shorts over leggings. As a high-waisted biker short it is fitted rather than loose, so there is no flapping hem to ride up in a lunge or catch on the carriage, springs or straps. Butterluxe is CRZ's soft-feel line; the trade-off with any very soft fabric is a little less hold against vinyl than a firmer, matte face, so if you feel your thigh creep in kneeling work, wipe the carriage between sets. At $24 it is also priced to buy two for a weekly rotation.",
    affiliateUrl: "https://www.amazon.com/dp/B0B28B34XX?tag=pilatescollective-20",
    tag: "Best Overall",
  },
  {
    rank: "02",
    name: "CRZ YOGA Butterluxe Biker Shorts 4\"",
    price: "$24.00",
    verdict: "Best shorter inseam",
    description:
      "The same short in a 4-inch inseam, for anyone who runs hot or simply prefers a shorter leg. It is the shortest length we would recommend for the Megaformer, and it comes with an honest trade-off: in kneeling and seated positions, more of your upper thigh will be on the carriage itself. That is manageable if you keep a towel handy and wipe the carriage, but if you find skin sticking to the vinyl during transitions, the 6-inch version above is the fix. Everything else carries over: it is fitted, so nothing rides up or catches, and the high waist is there for the forward folds and pikes that Lagree is built around. If you are between this and the 6-inch, start with the 6 and add the 4 for hot days.",
    affiliateUrl: "https://www.amazon.com/dp/B0B2ZPL1XS?tag=pilatescollective-20",
    tag: "Best Shorter Inseam",
  },
  {
    rank: "03",
    name: "CRZ YOGA Butterbreeze Athletic Biker Shorts 6\"",
    price: "$28.00",
    verdict: "Best lightweight option",
    description:
      "Butterbreeze is the CRZ line to look at if your studio runs warm and you want something that feels lighter than Butterluxe. The listing positions it as an athletic biker short, and it keeps the 6-inch inseam we recommend as the default for carriage contact. For Lagree, a lighter short makes sense: classes are slow but intense, with long time under tension and very little rest, and heat builds up in a fitted garment over 45 minutes. Check the fabric description on the listing against your own preference before buying, and do a daylight stretch test on arrival, since lighter fabrics are where opacity is most worth confirming in a mirrored room. At $4 more than Butterluxe, it is a sensible second pair for summer or for hot-room formats.",
    affiliateUrl: "https://www.amazon.com/dp/B0D71Y5L1M?tag=pilatescollective-20",
    tag: "Best Lightweight",
  },
  {
    rank: "04",
    name: "baleaf Women's High Waist Biker Shorts with 3 Pockets",
    price: "$16.99",
    verdict: "Best with pockets",
    description:
      "Pockets are not something Lagree needs, but plenty of people want one pair of shorts that works for class and for the walk or run either side of it, and this is the pick for that. It is a high-waist biker short with three pockets. Pockets on a fitted biker short sit flat against the leg, which is a very different thing from the loose side pockets on gym shorts that catch on handles and straps. The rule for class is simple: empty them. A phone or keys in a thigh pocket will press into you in side-lying work and get in the way on the carriage. Check the inseam options on the listing, and pick the longest one you are comfortable with for carriage contact. At $16.99, it is also a good value way to add a pair to the rotation.",
    affiliateUrl: "https://www.amazon.com/dp/B074SK5229?tag=pilatescollective-20",
    tag: "Best with Pockets",
  },
  {
    rank: "05",
    name: "IUGA High Waist Biker Shorts 8\"",
    price: "$12.99",
    verdict: "Best long inseam and best budget",
    description:
      "The cheapest pair here is also the longest, which makes it an easy recommendation for kneeling-heavy formats. An 8-inch inseam reaches further down the thigh than the 6-inch picks, covering more of the area that is in contact with the carriage in a loaded kneel or a seated sequence. It is also the length to choose if you have abandoned shorts because of skin sticking to the vinyl. Practically it behaves like a legging with the calf removed: thigh coverage without the heat of a full-length pair. At $12.99, the checks on arrival are worth doing: the daylight stretch test for opacity, and a forward fold to make sure the waistband stays up. Budget elastane also tends to lose its fit sooner under hot, frequent washing, so wash cold and air dry.",
    affiliateUrl: "https://www.amazon.com/dp/B09TQYP613?tag=pilatescollective-20",
    tag: "Best Long Inseam",
  },
  {
    rank: "06",
    name: "Surenow Men's 2-in-1 Workout Shorts 7\" (with Liner)",
    price: "$16.99",
    verdict: "Best option for men",
    description:
      "Men arriving at Lagree in loose basketball shorts find out quickly why they do not work: loose fabric rides up in a lunge, can catch on springs and straps, and leaves bare thigh on vinyl in kneeling positions. A 2-in-1 short is the practical middle ground for men who do not want to wear a biker short on its own. The built-in liner is the part doing the work on the carriage, keeping the thigh covered and the fit secure, while the 7-inch outer short gives you a conventional look. Be honest with yourself about the trade-off: the outer layer is still looser than a biker short, so in deep folds and inversions it can shift, and you should keep it clear of the handles and straps. If that bothers you, a fitted legging such as the Under Armour pick in our leggings guide removes the problem entirely.",
    affiliateUrl: "https://www.amazon.com/dp/B089K2ZM9Y?tag=pilatescollective-20",
    tag: "Best for Men",
  },
  {
    rank: "07",
    name: "CRZ YOGA Linerless Workout Shorts 5\"",
    price: "$28.00",
    verdict: "Men's / unisex linerless option",
    description:
      "For anyone who already owns compression shorts or tights and wants an outer short to wear over them, this linerless 5-inch short is the cleaner option, since a built-in liner on top of your own base layer is one layer too many. That is the way we would wear it to Lagree: over a fitted base, not on its own. Worn alone, a 5-inch linerless short leaves too much thigh on the carriage in kneeling work and too much loose fabric free to ride up. Over a fitted base layer, it gives the coverage and fit the carriage needs with the look of a regular short. It also suits people who move between Lagree and other training in the same session and want one outer short for all of it.",
    affiliateUrl: "https://www.amazon.com/dp/B0CQ4Y9V74?tag=pilatescollective-20",
    tag: "Linerless",
  },
];

const FAQS = [
  { q: "Can you wear shorts to Lagree?", a: "Yes, provided they are fitted and the inseam is long enough. The concern is not modesty but contact: Lagree uses kneeling, seated and side-lying positions directly on a vinyl carriage, and bare skin on warm vinyl sticks during transitions and leaves sweat on a shared surface. A fitted biker short with a 6 to 8 inch inseam keeps fabric between you and the carriage in most positions. Loose gym shorts are the wrong choice: they ride up in lunges and can catch on springs, handles and straps." },
  { q: "What inseam length is best for Lagree?", a: "Six inches is the most versatile length for most people, which is why the CRZ YOGA Butterluxe 6-inch short is our top pick. Go to 8 inches, like the IUGA pair, if your studio's format is heavy on kneeling sequences, since the extra length covers more of the thigh that sits on the carriage. Four inches is the shortest we would recommend; below that you will have skin on vinyl in several positions." },
  { q: "Why do my shorts ride up during Lagree?", a: "Because the hem has less grip on your thigh than your thigh has on the carriage. Every time the leg slides across the vinyl, a loose or slick short travels upward rather than moving with you. A fitted, longer biker short has more fabric in contact with your leg and less freedom to move. If a pair rides up in the first class, it will ride up in every class; no amount of wearing in fixes it." },
  { q: "What shorts should men wear to Lagree?", a: "A fitted short or a 2-in-1 short with a built-in liner. The liner keeps the thigh covered and the fit secure on the carriage; the outer short gives a conventional look. Our men's pick is the Surenow 2-in-1 with a 7-inch outer short. If you already own compression shorts, a linerless outer short such as CRZ YOGA's 5-inch can go over them. Avoid loose shorts worn on their own." },
  { q: "Shorts or leggings for Lagree?", a: "Both work, and the choice mostly comes down to studio temperature. Leggings give maximum carriage coverage, which is why they are the default. Shorts in the 6 to 8 inch range cover most of the thigh, which is the part that matters on the carriage, while venting heat. What does not work is a very short inseam or anything loose. If you are choosing one to start with, leggings are the safer purchase; shorts are the upgrade once you know your studio runs warm." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Lagree Shorts (2026): 7 Best Biker Shorts for Class",
      "description": "Shorts for Lagree and Megaformer classes: inseam length and carriage contact, fit, opacity and waistband security, with seven verified biker and men's shorts.",
      "url": "https://pilatescollectiveclub.com/blog/best-lagree-shorts",
      "datePublished": "2026-09-12",
      "dateModified": "2026-10-02",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/ahmet-kurt-0xn-8kRWOhE-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-lagree-shorts" },
    },
    {
      "@type": "ItemList",
      "name": "Best Lagree Shorts (2026)",
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
        { "@type": "ListItem", "position": 3, "name": "Best Lagree Shorts", "item": "https://pilatescollectiveclub.com/blog/best-lagree-shorts" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
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
              Best Lagree Shorts<br /><span style={{ color: "#8b4a31" }}>for Class (2026)</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated October 2026 · 9 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*All product links on this page go to Amazon. We earn a small commission on qualifying purchases. Prices were checked on October 2, 2026 and can change.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Inseam length decides this category, and the reason has nothing to do with modesty. Lagree puts you in kneeling, seated and side-lying positions directly on a vinyl carriage, and bare skin on warm vinyl sticks at exactly the wrong moment — as well as leaving sweat on a shared machine. A fitted biker short with a 6 to 8 inch inseam keeps fabric between you and the carriage in most of the repertoire, and a fitted leg has nothing to ride up in a lunge or catch on the springs, handles and straps. Here are seven verified pairs, from a $12.99 long-inseam budget pick to men&apos;s lined and linerless options.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/ahmet-kurt-0xn-8kRWOhE-unsplash.jpg" alt="Studio training in fitted shorts — inseam length governs carriage contact" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
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
                <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>None of these shorts is made or endorsed by Lagree Fitness, and you do not need a pair that is. What the Megaformer asks of a short is simple: fitted, long enough to keep your thigh off the vinyl, opaque in a deep lunge, and with a waistband that stays up when you fold forward. Any well-made biker short that ticks those boxes will do. These seven are a verified starting point across lengths and budgets.</p>
              </div>
            </div>

            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#fff4f1", border: "1px solid rgba(139,74,49,0.15)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What to avoid</h2>
              <ul className="space-y-3">
                {[
                  "Inseams under four inches. You will have skin on vinyl in kneeling and seated positions, which sticks and is a hygiene issue on shared equipment.",
                  "Loose or flowy gym shorts worn on their own. They ride to the hip in a lunge, can catch on springs and straps, and hide your alignment from the instructor.",
                  "Loaded pockets. Flat pockets on a biker short are fine; a phone or keys in them during class are not.",
                  "Thin elasticated waistband casings. They roll when you fold forward; wide flat bands only.",
                  "Anything that fails a daylight stretch test. Mirrored studios and deep lunges are unforgiving of sheer fabric.",
                  "Tumble drying. Heat shortens the life of elastane, and a short that loses its fit starts riding up.",
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
                <ArticleCard title="Best Leggings for Lagree" excerpt="What a legging needs to do on a moving carriage, and five verified pairs from budget to premium." href="/blog/best-leggings-for-lagree" category="Lagree" readTime="9 min read" date="October 2026" />
                <ArticleCard title="Best Lagree Tops" excerpt="Why fitted beats loose on a Megaformer, and the tanks that stay put in a plank." href="/blog/best-lagree-tops" category="Lagree" readTime="8 min read" date="October 2026" />
                <ArticleCard title="Lagree Essentials" excerpt="Everything to wear, bring and buy for Lagree — best, budget and splurge picks on one page." href="/blog/lagree-essentials" category="Lagree" readTime="12 min read" date="September 2026" />
                <ArticleCard title="Best Lagree Socks" excerpt="Grip socks for the Megaformer: full-toe, toeless, multi-packs and men's picks." href="/blog/best-lagree-grip-socks" category="Lagree" readTime="8 min read" date="October 2026" />
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
