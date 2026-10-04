import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import { jsonLdHtml } from "@/lib/schema";

const PAGE_URL = "https://pilatescollectiveclub.com/blog/lagree-for-men";
const HERO_IMAGE = "https://pilatescollectiveclub.com/pictures/stitch-reformer-row-studio.png";
const TITLE = "Lagree for Men (2026): What to Wear & What to Expect";
const DESCRIPTION =
  "Lagree for men: why strong guys still shake on the Megaformer, what to wear (lined shorts, fitted tops, men's grip socks) and two complete outfits from about $53.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: "A man's guide to Lagree: what the class is really like, the clothing that works on a Megaformer, and two complete outfits with prices checked live on Amazon.",
    type: "article",
    url: PAGE_URL,
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: "A row of studio machines — Lagree for men" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lagree for Men (2026)",
    description: "What men should wear to Lagree and what to expect from the first class.",
    images: [HERO_IMAGE],
  },
  keywords: [
    "lagree for men",
    "is lagree good for men",
    "what should men wear to lagree",
    "men's lagree outfit",
    "lagree men",
    "men's grip socks lagree",
    "megaformer for men",
    "lagree vs weightlifting",
    "men's shorts for lagree",
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=pilatescollective-20`;

type Pick = {
  id: string;
  role: string;
  name: string;
  price: string;
  url: string;
  description: string;
};

const toNumber = (price: string) => {
  const n = parseFloat(price.replace(/[^0-9.]/g, ""));
  return Number.isNaN(n) ? 0 : n;
};
const fmt = (n: number) => `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const SHORTS: Pick[] = [
  {
    id: "pudolla",
    role: "Best Budget Shorts",
    name: "Pudolla Men's 2-in-1 Running Shorts 5\"",
    price: "$24.99",
    url: amz("B08BNFYKXR"),
    description:
      "A 5-inch 2-in-1 short: a lightweight outer layer over a breathable compression liner, with a phone pocket and a back zip pocket, plus an elastic waistband with internal drawcord. The liner is the point — it keeps you covered in wheelbarrow, bear and wide lunges.",
  },
  {
    id: "rhone-pursuit",
    role: "Best Premium Shorts",
    name: "Rhone Men's 5\" Pursuit Shorts (Lined)",
    price: "$84.00",
    url: amz("B0F5YC8SKL"),
    description:
      "Rhone's moisture-wicking Pursuit fabric with all-way stretch and a medium-compression liner, which includes a drop-in pocket. Also sold unlined — for Lagree, get the lined version. Sold by Rhone.",
  },
  {
    id: "ua-heatgear-leggings",
    role: "Best Tights",
    name: "Under Armour Men's HeatGear Armour Leggings",
    price: "$28.00",
    url: amz("B0874X381F"),
    description:
      "Compression-fit, super-light HeatGear leggings with a 28\" inseam, ergonomic seams and a side drop-in pocket. Wear them alone or under shorts — full coverage for kneeling on the carriage, and nothing rides up. Sold by Amazon.com.",
  },
];

const TOPS: Pick[] = [
  {
    id: "ua-tech-2",
    role: "Best Budget Tee",
    name: "Under Armour Men's Tech 2.0 Short-Sleeve T-Shirt",
    price: "$18.75",
    url: amz("B07D126W6P"),
    description:
      "UA Tech fabric that is quick-drying, ultra-soft, wicks sweat and has anti-odor technology, in a streamlined fit with a shaped hem. Sold by Amazon.com. Size down if you want it to stay put on all fours.",
  },
  {
    id: "ua-compression",
    role: "Best Fitted Tee",
    name: "Under Armour Men's HeatGear Compression T-Shirt",
    price: "$24.50",
    url: amz("B0874X72WP"),
    description:
      "An ultra-tight, second-skin compression tee in super-light HeatGear fabric, with mesh underarm and back panels for ventilation and hybrid raglan sleeves for range of motion. Compression is the surest way to keep a top in place upside down. Sold by Amazon.com.",
  },
  {
    id: "rhone-reign",
    role: "Best Premium Tee",
    name: "Rhone Reign Men's Workout Shirt",
    price: "$54.40",
    url: amz("B0CKC5XTNT"),
    description:
      "A moisture-wicking, odor-resistant, UPF 50+ training tee from Rhone — the one that also looks fine at brunch after class. Sold by Rhone.",
  },
  {
    id: "tacvasen-tank",
    role: "Best Tank",
    name: "TACVASEN Men's Sleeveless Workout Shirt",
    price: "$9.99",
    url: amz("B0C6T8MFPT"),
    description:
      "A tagless, crew-neck sleeveless shirt in an 89% polyester, 11% spandex blend with 4-way stretch, quick-dry fabric. A close fit and no sleeves mean nothing flaps around in plank.",
  },
];

const SOCKS: Pick[] = [
  {
    id: "muezna-men",
    role: "Best Men's Grip Socks",
    name: "Muezna Men's Non-Slip Yoga Socks",
    price: "$17.99",
    url: amz("B07H4F3FXK"),
    description:
      "Men's-sized grip socks. The common problem for bigger feet is a grip pattern that stops short of where your foot actually presses; buy men's sizing so the grip covers your whole sole.",
  },
  {
    id: "coolmate",
    role: "Best Men's Multi-Pack",
    name: "CoolMate Men's Grip Socks (4 Pairs)",
    price: "$14.99",
    url: amz("B0F626LL9W"),
    description:
      "Four pairs of ankle grip socks with textured silicone grip dots and arch support, in men's sizes 6–10 and 10–13. A cotton/polyester/elastane knit, machine washable. Under $4 a pair.",
  },
];

const ALL_ITEMS: Pick[] = [...SHORTS, ...TOPS, ...SOCKS];
const byId = (id: string) => ALL_ITEMS.find((p) => p.id === id) as Pick;

const OUTFITS = [
  { title: "The starter outfit", ids: ["pudolla", "tacvasen-tank", "muezna-men"] },
  { title: "The premium outfit", ids: ["rhone-pursuit", "rhone-reign", "muezna-men"] },
];

const EXPECT = [
  { h: "Strength doesn't transfer the way you think.", b: "Lagree is slow, constant tension with no rest. Big lifters are often surprised to be shaking within minutes, because the moves target stabilisers and endurance, not one-rep strength." },
  { h: "Heavier springs aren't always harder.", b: "On a Megaformer, a lighter load can make the carriage less stable and a move harder to control. Follow the instructor's spring cues rather than loading up." },
  { h: "Slow is the whole point.", b: "The most common correction for first-timers is 'slower'. Moving fast uses momentum; moving slowly keeps the muscle under tension." },
  { h: "Tight hips and hamstrings show up fast.", b: "Lunges on the platform and carriage expose limited mobility. Take the easier option the instructor offers; nobody is watching." },
  { h: "You'll sweat more than you expect.", b: "Bring a towel and wear wicking fabric. Cotton gets heavy." },
];

const FAQS = [
  { q: "Is Lagree good for men?", a: "Yes. Lagree is a slow, high-intensity, low-impact workout built around time under tension, which builds muscular endurance and core strength without heavy loading on the joints. Many men use it alongside lifting or running." },
  { q: "What should men wear to Lagree?", a: "Shorts with a built-in compression liner (or compression tights), a fitted wicking tee or tank, and grip socks in men's sizing. Avoid loose, unlined running shorts — they gape in wheelbarrow, bear and wide lunges." },
  { q: "Do men need grip socks for Lagree?", a: "Most studios require grip socks for everyone. Buy men's sizing so the grip covers your whole sole; many 'one size' grip socks are cut for smaller feet." },
  { q: "Is Lagree harder than lifting weights?", a: "It is different. Lifting uses heavy loads with rest between sets; Lagree uses moderate spring resistance with slow, continuous movement and very little rest. Many strong people find it humbling at first." },
  { q: "Can tall men do Lagree?", a: "Yes. If you are very tall, tell the instructor before class so they can help you set up. For home training, Lagree Fitness says its Micro home machine accommodates users up to 6'8\"." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${PAGE_URL}/#article`,
      "headline": TITLE,
      "description": DESCRIPTION,
      "image": { "@type": "ImageObject", "url": HERO_IMAGE, "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "@id": "https://pilatescollectiveclub.com/#organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": {
        "@type": "Organization",
        "@id": "https://pilatescollectiveclub.com/#organization",
        "name": "Pilates Collective Club",
        "logo": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/pcc-logo.png" },
      },
      "datePublished": "2026-10-04",
      "dateModified": "2026-10-04",
      "url": PAGE_URL,
      "mainEntityOfPage": PAGE_URL,
      "articleSection": "Lagree",
      "inLanguage": "en-US",
    },
    {
      "@type": "ItemList",
      "name": "Men's Lagree Clothing (2026)",
      "numberOfItems": ALL_ITEMS.length,
      "itemListElement": ALL_ITEMS.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "description": p.description,
          "offers": { "@type": "Offer", "priceCurrency": "USD", "price": p.price, "availability": "https://schema.org/InStock", "url": p.url },
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Lagree for Men", "item": PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
  ],
};

const eyebrowStyle = { color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" };
const bodyStyle = { color: "#53433e", fontFamily: "'Montserrat', sans-serif" };
const h2Style = { color: "#1b1c1c", fontFamily: "'Playfair Display', serif" };
const inlineLinkStyle = { color: "#8b4a31", textDecoration: "underline" };
const chipStyle = { backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" };
const cardStyle = { backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" };
const rowStyle = (i: number) => ({ borderTop: i === 0 ? "none" : "1px solid rgba(217,194,186,0.25)", backgroundColor: "#ffffff" });
const strongStyle = { color: "#1b1c1c" };

function PickCard({ p }: { p: Pick }) {
  return (
    <div id={p.id} className="scroll-mt-28">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={chipStyle}>{p.role}</span>
      </div>
      <ProductCard name={p.name} description={p.description} price={p.price} affiliateUrl={p.url} />
    </div>
  );
}

function Divider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] shrink-0" style={eyebrowStyle}>{label}</p>
      <div className="flex-1 h-px" style={{ backgroundColor: "#d9c2ba" }} />
    </div>
  );
}

export default function LagreeForMenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={eyebrowStyle}>Lagree Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Men</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Lagree for Men<br /><span style={{ color: "#8b4a31" }}>(2026): What to Wear &amp; What to Expect</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated October 2026 · 9 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Product links go to Amazon, where we earn a small commission on qualifying purchases at no extra cost to you. Our picks are based on published specifications and how Lagree is taught, not a hands-on test.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Plenty of men walk into their first Lagree class expecting a gentle stretch on a fancy machine, and walk out with shaking legs. The Megaformer is a strength workout built on slow, unbroken tension — and it rewards control, not ego. Here is what to expect, and exactly what to wear, because the standard men&apos;s gym kit of loose shorts and a baggy tee is the wrong choice for this class.
            </p>
            <p className="text-sm leading-relaxed" style={bodyStyle}>
              Every Amazon price and stock status was checked live on October 4, 2026. Prices change, so the final price is whatever Amazon shows at checkout.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-reformer-row-studio.png" alt="A row of studio machines — Lagree for men" fill className="object-cover" style={{ filter: "brightness(0.85)" }} priority />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            {/* Short answer */}
            <div className="mb-16 mt-4 rounded-2xl p-6 md:p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.5)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={eyebrowStyle}>The short version</p>
              <ul className="space-y-3">
                <li className="text-sm leading-relaxed" style={bodyStyle}><span className="font-semibold" style={strongStyle}>Shorts with a liner, or tights.</span> Unlined running shorts gape in wheelbarrow, bear and wide lunges.</li>
                <li className="text-sm leading-relaxed" style={bodyStyle}><span className="font-semibold" style={strongStyle}>A fitted top.</span> A loose tee slides up to your armpits on all fours.</li>
                <li className="text-sm leading-relaxed" style={bodyStyle}><span className="font-semibold" style={strongStyle}>Men&apos;s grip socks.</span> Studios require them; men&apos;s sizing makes the grip cover your whole sole.</li>
              </ul>
            </div>

            {/* Expect */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={h2Style}>What to expect from your first class</h2>
              <ul className="space-y-4">
                {EXPECT.map((x) => (
                  <li key={x.h} className="text-sm leading-relaxed" style={bodyStyle}><span className="font-semibold" style={strongStyle}>{x.h}</span> {x.b}</li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed mt-6" style={bodyStyle}>
                For the move names you&apos;ll hear, see <Link href="/blog/lagree-exercises" style={inlineLinkStyle}>Lagree exercises explained</Link>; for the first-class walkthrough, <Link href="/blog/lagree-for-beginners" style={inlineLinkStyle}>Lagree for beginners</Link>.
              </p>
            </div>

            {/* Outfits */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={h2Style}>Two complete outfits</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {OUTFITS.map((o) => {
                  const items = o.ids.map(byId);
                  return (
                    <div key={o.title} className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)" }}>
                      <div className="px-5 py-4" style={{ backgroundColor: "#f6f3f2" }}>
                        <p className="text-sm font-semibold" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{o.title}</p>
                        <p className="text-xl font-semibold" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{fmt(items.reduce((s, p) => s + toNumber(p.price), 0))}</p>
                      </div>
                      {items.map((p, i) => (
                        <a key={p.id} href={`#${p.id}`} className="flex justify-between gap-3 px-5 py-3" style={{ ...rowStyle(i), textDecoration: "none" }}>
                          <span className="text-xs" style={bodyStyle}>{p.name}</span>
                          <span className="text-xs font-semibold shrink-0" style={{ color: "#1b1c1c" }}>{p.price}</span>
                        </a>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>

            <Divider label="Shorts & tights" />
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-4" style={h2Style}>Bottoms: the one that matters most</h2>
              <p className="text-sm leading-relaxed mb-8" style={bodyStyle}>
                Lagree puts you in wide lunges, on all fours and with your legs apart on a moving carriage. A built-in compression liner is non-negotiable if you wear shorts. Compression tights work alone or underneath.
              </p>
              <div className="space-y-8">
                {SHORTS.map((p) => <PickCard key={p.id} p={p} />)}
              </div>
              <p className="text-sm leading-relaxed mt-2" style={bodyStyle}>
                More options: <Link href="/blog/best-lagree-shorts" style={inlineLinkStyle}>Lagree shorts</Link> and <Link href="/blog/best-pilates-clothes-for-men" style={inlineLinkStyle}>Pilates clothes for men</Link>.
              </p>
            </div>

            <Divider label="Tops" />
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-4" style={h2Style}>Tops that stay put</h2>
              <p className="text-sm leading-relaxed mb-8" style={bodyStyle}>
                Fitted or compression, in wicking fabric. If you only own regular-fit tees, size down for class.
              </p>
              <div className="space-y-8">
                {TOPS.map((p) => <PickCard key={p.id} p={p} />)}
              </div>
            </div>

            <Divider label="Socks" />
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-4" style={h2Style}>Grip socks in men&apos;s sizes</h2>
              <div className="space-y-8">
                {SOCKS.map((p) => <PickCard key={p.id} p={p} />)}
              </div>
              <p className="text-sm leading-relaxed mt-2" style={bodyStyle}>
                More choice in our <Link href="/blog/best-lagree-grip-socks" style={inlineLinkStyle}>Lagree socks guide</Link>. Sweaty hands slipping in plank? See <Link href="/blog/best-lagree-gloves" style={inlineLinkStyle}>Lagree gloves</Link>.
              </p>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={h2Style}>Frequently asked questions</h2>
              <div className="space-y-6">
                {FAQS.map((item) => (
                  <div key={item.q} className="rounded-xl p-6" style={cardStyle}>
                    <h3 className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.q}</h3>
                    <p className="text-sm leading-relaxed" style={bodyStyle}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-8" style={h2Style}>Further reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="What to Wear to Lagree" excerpt="Three complete head-to-toe outfits, from budget to premium, plus what to leave at home." href="/blog/what-to-wear-to-lagree" category="Lagree" readTime="10 min read" date="October 2026" imageUrl="/pictures/stitch-grip-socks-footbar.png" />
                <ArticleCard title="Lagree for Beginners" excerpt="What to expect from your first Megaformer class and how to survive it." href="/blog/lagree-for-beginners" category="Lagree" readTime="9 min read" date="September 2026" imageUrl="/pictures/stitch-hands-on-carriage.png" />
                <ArticleCard title="Lagree vs Pilates" excerpt="The machines, the methods and which is right for you." href="/blog/lagree-vs-pilates" category="Lagree" readTime="10 min read" date="September 2026" imageUrl="/pictures/stitch-reformers-aerial-row.png" />
                <ArticleCard title="Sore After Lagree?" excerpt="Recovery gear that helps after a hard Megaformer class." href="/blog/lagree-recovery" category="Lagree" readTime="9 min read" date="October 2026" imageUrl="/pictures/stitch-studio-bench-towels.png" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a Lagree studio near you" subtitle="Use our curated city guides to find the best Pilates and Lagree studios worldwide." showSearch searchPlaceholder="Ask: best Lagree studios in Los Angeles…" />
      </main>
      <Footer />
    </>
  );
}
