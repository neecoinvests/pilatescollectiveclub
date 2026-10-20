import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import AffiliateNote from "@/components/AffiliateNote";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import TopPick from "@/components/TopPick";
import { jsonLdHtml } from "@/lib/schema";

const URL = "https://pilatescollectiveclub.com/blog/best-pilates-leggings";
const HERO = "/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg";
const CHECKED = "October 20, 2026";
const TITLE = "Best Pilates Leggings (2026): 5 Picks for Reformer & Mat";
const DESCRIPTION = "The 5 best Pilates leggings on Amazon, from $26 to $134: Lululemon Align, Beyond Yoga, Sweaty Betty, Varley and CRZ YOGA, compared on waistband, length and fabric.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["best pilates leggings", "pilates leggings 2026", "best leggings for reformer pilates", "lululemon align pilates", "beyond yoga spacedye pilates", "high waist pilates leggings", "best leggings pilates class", "crz yoga pilates leggings", "sweaty betty power leggings pilates", "pilates activewear leggings"],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "article",
    url: URL,
    images: [{ url: `https://pilatescollectiveclub.com${HERO}`, width: 1200, height: 630, alt: "Best Pilates Leggings, Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Leggings (2026)",
    description: DESCRIPTION,
    images: [`https://pilatescollectiveclub.com${HERO}`],
  },
  alternates: { canonical: URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=pilatescollective-20`;

const PRODUCTS = [
  {
    rank: "01",
    name: "Lululemon Align High-Rise Pant 25\"",
    price: "$98.00",
    verdict: "Best overall Pilates legging",
    description:
      "The Align is the legging you will see most often in reformer studios. The listing describes a high rise that keeps you covered, smooth, flat waistband seams that won't dig in, added Lycra for shape retention, a hidden waistband pocket for a key, and a 25\" inseam that sits clear of the footbar and straps. Lululemon does not sell on Amazon itself: this listing is from a third-party reseller, so check the seller rating and returns before you buy.",
    affiliateUrl: amz("B08M8ZTKJS"),
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "Beyond Yoga Spacedye Caught in the Midi High Waisted Legging",
    price: "$99.00",
    verdict: "Softest premium legging",
    description:
      "Beyond Yoga's Spacedye fabric is famous for its soft feel, and this is its best-known legging. Per the listing: a 5\" waistband that sits at your natural waist with gentle compression, 87% polyester and 13% elastane, no outseam for a smooth line on the carriage, and a 28\" midi inseam. Sold by Zappos, an Amazon company.",
    affiliateUrl: amz("B07663TDHG"),
    tag: "Softest",
  },
  {
    rank: "03",
    name: "Sweaty Betty Power 7/8 Workout Leggings",
    price: "$134.00",
    verdict: "Best for sweaty and dynamic classes",
    description:
      "A multi-sport legging that is sweat-wicking and quick-drying, which makes it a good choice for heated studios, jumpboard classes and Lagree. The listing mentions sculpting seams, a side pocket and a back zip pocket, and a 24\" inseam. Sold and shipped by Amazon.com.",
    affiliateUrl: amz("B08HHTVMRX"),
    tag: "Best for Sweat",
  },
  {
    rank: "04",
    name: "Varley FreeSoft 25\" High-Rise Leggings",
    price: "$98.00",
    verdict: "Best light compression",
    description:
      "Varley's FreeSoft legging is soft with light compression and minimal seams, made from 75% polyester and 25% elastane. Minimal seams matter in Pilates, where you spend a lot of time lying and kneeling on the carriage. The 25\" inseam keeps fabric clear of springs and straps. Sold by Zappos, an Amazon company.",
    affiliateUrl: amz("B0D673NJB4"),
    tag: "Light Compression",
  },
  {
    rank: "05",
    name: "CRZ YOGA Naked Feeling Leggings 25\"",
    price: "$26.00",
    verdict: "Best budget legging",
    description:
      "The listing says these are designed for hot yoga or Pilates: sleek, sweat-wicking fabric with decent compression, a high rise, a seamless waistband with a hidden key pocket, and a 25\" inseam. At $26 it is the best way to build a rotation of studio leggings without spending $100 a pair.",
    affiliateUrl: amz("B07DCSM69V"),
    tag: "Best Value",
  },
];

const BRAS = [
  { name: "Beyond Yoga Spacedye Lift Your Spirits Bra", price: "$68.00", url: amz("B07HRVHSST"), note: "Matches the Beyond Yoga legging. Medium support, removable pads." },
  { name: "Sweaty Betty Power Medium Racer Back Sports Bra", price: "$26.10", url: amz("B0BW197M92"), note: "Matches the Sweaty Betty legging. Adjustable T-bar strap; sold by Amazon.com." },
  { name: "CRZ YOGA Butterluxe Y Back Sports Bra", price: "$28.00", url: amz("B0B3CP6VY9"), note: "A soft, light-support bra for the budget rotation." },
];

const FAQS = [
  { q: "What are the best leggings for Pilates?", a: `Our top pick is the Lululemon Align 25" ($98 on Amazon on ${CHECKED}, sold by a reseller). For the softest feel, Beyond Yoga Spacedye ($99); for sweaty classes, Sweaty Betty Power ($134); on a budget, CRZ YOGA Naked Feeling ($26).` },
  { q: "What length legging is best for Pilates?", a: "A 7/8 or 25\" inseam is the most popular choice for reformer Pilates. It keeps fabric clear of the springs and straps and shows the grip of your socks. Full-length and midi styles work well for mat." },
  { q: "Can I wear shorts to Pilates instead of leggings?", a: "Shorts are fine for mat Pilates but less comfortable on the reformer, where you lie on the carriage and kneel on it. Most people prefer leggings for reformer classes." },
  { q: "Do I need compression leggings for Pilates?", a: "No. Any opaque, well-fitting legging works. Compression is a preference: some people like the supported feel, others prefer soft, light-compression styles like Varley FreeSoft or Beyond Yoga Spacedye." },
  { q: "Are pocketed leggings worth it for Pilates?", a: "A small hidden waistband pocket for a key or card is useful on the way to and from the studio. Avoid bulky pockets on the hips, which can press into you on the carriage." },
  { q: "Can I buy Alo Airbrush or Vuori leggings on Amazon?", a: "Neither brand sells those leggings on Amazon. Searching Amazon for them mostly shows other brands, so buy them direct from Alo or Vuori." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": TITLE,
      "description": DESCRIPTION,
      "url": URL,
      "datePublished": "2026-05-12",
      "dateModified": "2026-10-18",
      "image": { "@type": "ImageObject", "url": `https://pilatescollectiveclub.com${HERO}`, "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": URL },
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Leggings (2026)",
      "description": "The five best leggings for Pilates on Amazon, ranked.",
      "url": URL,
      "numberOfItems": PRODUCTS.length,
      "itemListElement": PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "description": p.description,
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": p.price.replace(/[$,]/g, ""),
            "availability": "https://schema.org/InStock",
            "url": p.affiliateUrl,
          },
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Pilates Leggings", "item": URL },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
  ],
};

const sans = "'Montserrat', sans-serif";
const serif = "'Playfair Display', serif";
const linkStyle = { color: "#8b4a31", textDecoration: "underline" };

export default function BestPilatesLeggingsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: sans }}>Equipment Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: sans }}>Apparel</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: serif }}>
              Best Pilates Leggings<br /><span style={{ color: "#8b4a31" }}>(2026): 5 Picks, Ranked</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: sans }}>Prices checked {CHECKED} · 9 min read</p>
            <TopPick name={PRODUCTS[0].name} price={PRODUCTS[0].price} note={'High rise, flat waistband, 25" inseam'} url={PRODUCTS[0].affiliateUrl} />
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: sans, fontWeight: 300 }}>
              Pilates asks a lot of a pair of leggings. Your instructor needs to see your hips, spine and knees, so the fabric has to stay opaque in deep flexion, and a waistband that rolls during the hundred or footwork is a constant distraction. We compared the most popular studio leggings on Amazon on waistband, length, fabric and seams, using each listing&apos;s own specs and the price we checked today. Here are the five that suit the method best.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src={HERO} alt="Pilates leggings for reformer and mat classes" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            {/* Quick reference table */}
            <div className="mb-10 mt-4 overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
              <div className="px-6 py-4" style={{ backgroundColor: "#f6f3f2" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: sans }}>Quick Picks: At a Glance</p>
              </div>
              {PRODUCTS.map((p, i) => (
                <div key={p.name} className="flex items-center gap-3 sm:gap-4 px-6 py-4" style={{ borderTop: i === 0 ? "none" : "1px solid rgba(217,194,186,0.25)", backgroundColor: "#ffffff" }}>
                  <span className="text-base font-semibold w-7 shrink-0 text-center" style={{ color: "#d9c2ba", fontFamily: serif }}>{p.rank}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold leading-tight" style={{ color: "#1b1c1c", fontFamily: sans }}>{p.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#86736d", fontFamily: sans }}>{p.verdict}<span className="md:hidden"> · <span className="font-semibold" style={{ color: "#1b1c1c" }}>{p.price}</span></span></p>
                  </div>
                  <span className="text-xs font-semibold hidden md:block shrink-0 mr-3" style={{ color: "#86736d", fontFamily: sans }}>{p.price}</span>
                  <a href={p.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow sponsored"
                    style={{ display: "block", fontFamily: sans, fontSize: "9px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "10px 14px", whiteSpace: "nowrap", flexShrink: 0 }}
                  >Shop Now →</a>
                </div>
              ))}
              <p className="px-6 py-3 text-xs" style={{ color: "#86736d", fontFamily: sans, backgroundColor: "#ffffff", borderTop: "1px solid rgba(217,194,186,0.25)" }}>Amazon prices checked {CHECKED} for the size and colour linked; prices vary by size and colour.</p>
            </div>
            <AffiliateNote>Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</AffiliateNote>

            <div className="mb-16 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: serif }}>What to look for in Pilates leggings</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { heading: "Opacity", body: "Deep hip flexion, spinal rotation and bridges all stretch the fabric. Try a squat in front of a mirror before you take the tags off: if there is any sheerness, it will show more on the reformer." },
                  { heading: "Waistband stability", body: "A high-rise waistband that stays put through roll-ups, the hundred and leg circles is essential. Avoid drawstrings and low-rise styles for Pilates." },
                  { heading: "Length", body: "A 7/8 (around 25\") inseam is the studio favourite: it keeps fabric clear of springs and straps and shows off your grip socks. Midi and full length suit mat classes." },
                  { heading: "Seams", body: "Flat seams matter more in Pilates than in most workouts, because you lie and kneel on the carriage for most of the class. Look for minimal or flat seams and no outseam." },
                ].map((item) => (
                  <div key={item.heading} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: serif }}>{item.heading}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: sans }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: serif }}>The 5 best Pilates leggings</h2>
              <div className="space-y-10">
                {PRODUCTS.map((p) => (
                  <div key={p.name}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-semibold" style={{ color: "#d9c2ba", fontFamily: serif }}>{p.rank}</span>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: sans }}>{p.tag}</span>
                      </div>
                    </div>
                    <ProductCard name={p.name} description={p.description} price={p.price} affiliateUrl={p.affiliateUrl} ctaLabel="Shop Now →" />
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#8b4a31", fontFamily: sans }}>Not sold on Amazon</p>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: serif }}>Looking for Alo Airbrush or Vuori?</h2>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#53433e", fontFamily: sans }}>
                Both are popular in Pilates studios, but neither brand sells these leggings on Amazon, and an Amazon search for them mostly shows other brands. Buy them direct: <a href="https://www.aloyoga.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Alo Yoga</a> and <a href="https://vuoriclothing.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Vuori</a>.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: sans }}>
                For more premium options on Amazon, see our <Link href="/blog/best-luxury-pilates-leggings" style={linkStyle}>luxury Pilates leggings guide</Link>.
              </p>
            </div>

            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#8b4a31", fontFamily: sans }}>Make it a set</p>
              <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: serif }}>Matching sports bras</h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: sans }}>
                A bra from the same line shares the fabric and colour of your leggings. More options in our <Link href="/blog/best-pilates-sets" style={linkStyle}>Pilates sets</Link> and <Link href="/blog/best-pilates-sports-bra" style={linkStyle}>Pilates sports bra</Link> guides.
              </p>
              <div className="space-y-4">
                {BRAS.map((b) => (
                  <div key={b.name} className="rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-3" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold" style={{ color: "#1b1c1c", fontFamily: serif }}>{b.name} <span style={{ color: "#8b4a31", fontFamily: sans }}>{b.price}</span></p>
                      <p className="text-xs mt-1" style={{ color: "#86736d", fontFamily: sans }}>{b.note}</p>
                    </div>
                    <a href={b.url} target="_blank" rel="noopener noreferrer nofollow sponsored" className="text-center"
                      style={{ fontFamily: sans, fontSize: "9px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "10px 14px", whiteSpace: "nowrap" }}
                    >Shop Now →</a>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: serif }}>Which legging for which class?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { heading: "Reformer", body: "A 25\" high-rise legging with flat seams: Lululemon Align, Varley FreeSoft or CRZ YOGA Naked Feeling. See our reformer leggings guide.", href: "/blog/best-leggings-for-reformer-pilates" },
                  { heading: "Mat", body: "Softness and coverage matter most. Beyond Yoga Spacedye's 28\" midi is a favourite. See our high-waist leggings guide.", href: "/blog/best-high-waist-pilates-leggings" },
                  { heading: "Hot or dynamic classes", body: "Sweat-wicking, quick-drying fabric: Sweaty Betty Power or CRZ YOGA Naked Feeling, which its listing says is designed for hot yoga or Pilates.", href: "/blog/what-to-wear-to-pilates" },
                ].map((item) => (
                  <Link key={item.heading} href={item.href} className="rounded-xl p-5 block" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: serif }}>{item.heading}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: sans }}>{item.body}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: serif }}>Care guide: making leggings last</h2>
              <ul className="space-y-3">
                {[
                  "Wash inside-out on cold. Hot water wears out the elastane that gives leggings their stretch and shape.",
                  "Air dry flat or on a line. Tumble drying shortens the life of any performance fabric.",
                  "Skip fabric softener. It coats moisture-wicking fibres and makes them less breathable.",
                  "Rinse sweaty leggings straight after class if you can't wash them right away.",
                  "Replace them when the waistband loses its grip. A rolling waistband makes it harder for your instructor to see your alignment.",
                ].map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm" style={{ color: "#53433e", fontFamily: sans }}>
                    <span className="font-semibold" style={{ color: "#8b4a31" }}>{i + 1}.</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: serif }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {FAQS.map((item) => (
                  <div key={item.q} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: serif }}>{item.q}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: sans }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: serif }}>Further reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="Best Leggings for Reformer Pilates" excerpt="Leggings chosen for carriage, springs and straps." href="/blog/best-leggings-for-reformer-pilates" category="Apparel" readTime="8 min read" date="October 2026" imageUrl="/pictures/stitch-reformer-sunlit-minimal.png" />
                <ArticleCard title="Best Luxury Pilates Leggings" excerpt="The premium leggings worth the splurge." href="/blog/best-luxury-pilates-leggings" category="Apparel" readTime="8 min read" date="October 2026" imageUrl="/pictures/stitch-retail-activewear.png" />
                <ArticleCard title="Best Pilates Sets" excerpt="Matching legging and bra sets for class." href="/blog/best-pilates-sets" category="Apparel" readTime="8 min read" date="October 2026" imageUrl="/pictures/stitch-studio-round-mirror.png" />
                <ArticleCard title="Best Pilates Grip Socks" excerpt="Required at most reformer studios: five picks at every price." href="/blog/best-pilates-grip-socks" category="Equipment" readTime="7 min read" date="October 2026" imageUrl="/pictures/jade-stephens-N21356amsyw-unsplash.jpg" />
                <ArticleCard title="What to Wear to Pilates" excerpt="The complete guide to studio and reformer clothing." href="/blog/what-to-wear-to-pilates" category="Guide" readTime="6 min read" date="October 2026" imageUrl="/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg" />
                <ArticleCard title="Best Home Pilates Reformer" excerpt="Ready to train at home? Reformers at every budget." href="/blog/best-home-pilates-reformer" category="Equipment" readTime="12 min read" date="October 2026" imageUrl="/pictures/stitch-reformer-morning-light.png" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best Pilates studios in London…" />
      </main>
      <Footer />
    </>
  );
}
