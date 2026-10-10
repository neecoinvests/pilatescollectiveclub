import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import { jsonLdHtml } from "@/lib/schema";

const PAGE_URL = "https://pilatescollectiveclub.com/blog/best-lagree-shirts";
const HERO_IMAGE = "https://pilatescollectiveclub.com/pictures/stitch-retail-activewear.png";
const TITLE = "Lagree Shirts & Hoodies (2026): Fitted Tees & Fan Merch";
const DESCRIPTION =
  "The best Lagree shirts: fitted tees that stay put on the Megaformer, plus the 'I Love Lagree' and 'Lagree Superstar' tees and hoodies on Amazon — with what's official and what isn't.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: "Tees that work in Lagree class, and the Lagree fan shirts and hoodies you can buy — with prices checked live on Amazon.",
    type: "article",
    url: PAGE_URL,
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: "Activewear on a rail — the best Lagree shirts and hoodies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lagree Shirts & Hoodies (2026)",
    description: "Fitted tees for class and Lagree fan tees and hoodies, from $19.97.",
    images: [HERO_IMAGE],
  },
  keywords: [
    "lagree shirt",
    "lagree t shirt",
    "lagree hoodie",
    "i love lagree shirt",
    "lagree sweatshirt",
    "lagree merch",
    "best shirt for lagree",
    "what shirt to wear to lagree",
    "lagree tank top",
    "lagree gift shirt",
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=pilatescollective-20`;

type Pick = {
  id: string;
  badge: string;
  shortName: string;
  name: string;
  price: string;
  url: string;
  verdict: string;
  description: string;
};

const CLASS_TEES: Pick[] = [
  {
    id: "crz-seamless",
    badge: "Best Overall Tee",
    shortName: "CRZ Seamless Tee",
    name: "CRZ YOGA Seamless T-Shirt (Hip Length)",
    price: "$24.00",
    url: amz("B0CCS5S8MP"),
    verdict: "Slim, seamless and vented where you sweat",
    description:
      "A slim-fit, hip-length tee from CRZ YOGA's seamless collection: chafe-free, breathable, moisture-wicking and four-way stretch, with knitted mesh from armpit to hem for quick drying and raglan sleeves for free movement. Slim enough that it won't fall over your face in a plank.",
  },
  {
    id: "crz-seamless-crop",
    badge: "Best Cropped Tee",
    shortName: "CRZ Seamless Crop",
    name: "CRZ YOGA Seamless Crop T-Shirt",
    price: "$24.00",
    url: amz("B0D1GDXHT5"),
    verdict: "Nothing to flip up — with high-rise leggings",
    description:
      "The same seamless, moisture-wicking four-way-stretch fabric in a slim, cropped cut, with breathable mesh in high-sweat areas and a crew neck with raglan sleeves. A cropped hem has nothing to slide up your back when you go upside down, so pair it with high-rise leggings.",
  },
  {
    id: "ua-tech-twist",
    badge: "Best Budget Tee",
    shortName: "UA Tech Twist",
    name: "Under Armour Women's Tech Twist Short-Sleeve Crew",
    price: "$19.97",
    url: amz("B0C12FMNZN"),
    verdict: "Quick-dry and soft, sold by Amazon",
    description:
      "UA Tech fabric that is quick-drying, ultra-soft and wicks sweat, in Under Armour's regular fit — not tight, not loose. Regular fit is roomier than the CRZ tees, so tuck it in or size down if you want it to stay put in bear and plank. Also available in a V-neck.",
  },
  {
    id: "dalavch-4",
    badge: "Best Multi-Pack",
    shortName: "Dalavch 4-pack",
    name: "Dalavch Compression Crop Workout Shirts (4-Pack)",
    price: "$24.99",
    url: amz("B0DQ84CJV9"),
    verdict: "Four fitted crop tees for one class-pack night out",
    description:
      "Four slim, fitted compression crop tees in a soft spandex blend — about $6 each. Compression means it stays exactly where you put it, which is the whole brief for Lagree. The listing suggests ordering one size up for a looser fit.",
  },
];

const FAN_MERCH: Pick[] = [
  {
    id: "i-love-lagree-vneck",
    badge: "Fan Tee",
    shortName: "I Love Lagree V-neck",
    name: "Women's I Love Lagree V-Neck T-Shirt",
    price: "$18.99",
    url: amz("B0CY81GT5X"),
    verdict: "The simplest 'I love Lagree' tee",
    description:
      "A lightweight, classic-fit V-neck with an 'I love Lagree' heart design, double-needle sleeve and bottom hem. Unofficial fan design from the Dreadful Scrawl brand, sold by Amazon.com — not made or endorsed by Lagree Fitness. Also comes as a long sleeve, raglan and tri-blend tee.",
  },
  {
    id: "lagree-superstar-tank",
    badge: "Fan Tank",
    shortName: "Lagree Superstar tank",
    name: "Lagree Superstar Tank Top",
    price: "$18.99",
    url: amz("B0G1KV5CTD"),
    verdict: "Retro 70s gradient for the class regular",
    description:
      "A lightweight, classic-fit tank with a retro 70s-style 'Lagree Superstar' gradient design. Unofficial fan merch from Dreadful Scrawl, sold by Amazon.com — not affiliated with Lagree Fitness. Also available as a V-neck tee, crop top, sweatshirt and hoodies.",
  },
  {
    id: "i-love-lagree-hoodie",
    badge: "Fan Hoodie",
    shortName: "I Love Lagree hoodie",
    name: "I Love Lagree Pullover Hoodie",
    price: "$31.99",
    url: amz("B0CY821PTP"),
    verdict: "The after-class pullover",
    description:
      "A classic-fit pullover hoodie with the 'I love Lagree' heart design, a pouch pocket and a double-lined hood. Unofficial fan design, sold by Amazon.com — not made or endorsed by Lagree Fitness.",
  },
  {
    id: "i-love-lagree-zip",
    badge: "Fan Zip Hoodie",
    shortName: "I Love Lagree zip hoodie",
    name: "I Love Lagree Zip Hoodie",
    price: "$33.99",
    url: amz("B0CY7R9KPP"),
    verdict: "Easier over a sweaty top",
    description:
      "The same design on an 8.5 oz, classic-fit zip hoodie with a twill-taped neck. A zip is much easier than a pullover after class. Unofficial fan design, sold by Amazon.com.",
  },
  {
    id: "lagree-superstar-hoodie",
    badge: "Fan Hoodie",
    shortName: "Lagree Superstar hoodie",
    name: "Lagree Superstar Pullover Hoodie",
    price: "$31.99",
    url: amz("B0G1KSSGPJ"),
    verdict: "The gift for your Lagree-obsessed friend",
    description:
      "An 8.5 oz classic-fit pullover with the retro 'Lagree Superstar' gradient design, pitched by its maker as a gift for Lagree coaches and fans. Unofficial fan merch from Dreadful Scrawl, sold by Amazon.com — not affiliated with Lagree Fitness.",
  },
];

const ALL_ITEMS: Pick[] = [...CLASS_TEES, ...FAN_MERCH];

const FAQS = [
  {
    q: "What kind of shirt should I wear to Lagree?",
    a: "A fitted, moisture-wicking top. You spend a lot of time in plank, bear and on all fours on the Megaformer, and a loose tee slides up your back or falls over your face. A slim seamless tee, a cropped tee with high-rise leggings, or a fitted tank all work.",
  },
  {
    q: "Is there official Lagree merch?",
    a: "Lagree Fitness does not sell clothing on Amazon — its Amazon store carries only the Micro home machine and its accessories. The 'I Love Lagree' and 'Lagree Superstar' tees and hoodies on Amazon are unofficial fan designs, sold by Amazon.com. Many Lagree studios sell their own branded merch at the front desk.",
  },
  {
    q: "Can I wear a cotton t-shirt to Lagree?",
    a: "You can, but you will be soaked. Lagree is slow and intense, and cotton holds sweat. Save casual fan tees and hoodies for before and after class, and wear a wicking fitted top on the machine.",
  },
  {
    q: "What is a good gift for someone who loves Lagree?",
    a: "A fan hoodie or tee is a fun, cheap gift. For something they will use every class, grip socks or a sweat towel are hard to beat. See our Lagree gifts guide for 18 ideas by budget.",
  },
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
      "name": "Best Lagree Shirts & Hoodies (2026)",
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
        { "@type": "ListItem", "position": 3, "name": "Lagree Shirts & Hoodies", "item": PAGE_URL },
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

function TierCard({ p, n }: { p: Pick; n: number }) {
  return (
    <div id={p.id} className="scroll-mt-28">
      <div className="flex flex-wrap items-center gap-3 mb-3">
        <span className="text-xs font-semibold" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{String(n).padStart(2, "0")}</span>
        <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={chipStyle}>{p.badge}</span>
      </div>
      <p className="text-sm font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{p.verdict}</p>
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

export default function LagreeShirtsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={eyebrowStyle}>Lagree Clothing</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Tees &amp; Hoodies</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Lagree Shirts &amp; Hoodies<br /><span style={{ color: "#8b4a31" }}>(2026): Fitted Tees &amp; Fan Merch</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated October 2026 · 8 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Product links go to Amazon, where we earn a small commission on qualifying purchases at no extra cost to you. The fan tees and hoodies below are unofficial designs, not Lagree Fitness products. Our picks are based on published specifications, not a hands-on test.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              &ldquo;Lagree shirt&rdquo; means two different things. One is the shirt you actually wear on the Megaformer — and it has to be fitted, because a loose tee slides up your back in bear and falls over your face in plank. The other is the shirt that says you do Lagree: the fan tees and hoodies you wear to class, after class, or give to the friend who won&apos;t stop talking about it. Here are the best of both.
            </p>
            <p className="text-sm leading-relaxed" style={bodyStyle}>
              Every Amazon price and stock status was checked live on October 4, 2026. Prices change, so the final price is whatever Amazon shows at checkout.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-retail-activewear.png" alt="Fitted activewear tees on a rail — Lagree shirts" fill className="object-cover" style={{ filter: "brightness(0.85)" }} priority />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            {/* Quick picks */}
            <div className="mb-16 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={h2Style}>Quick picks</h2>
              <div className="overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
                {ALL_ITEMS.map((p, i) => (
                  <a key={p.id} href={`#${p.id}`} className="flex items-center justify-between gap-4 px-5 py-3" style={{ ...rowStyle(i), textDecoration: "none" }}>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest" style={eyebrowStyle}>{p.badge}</p>
                      <p className="text-sm font-semibold" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{p.shortName}</p>
                    </div>
                    <span className="text-sm font-semibold shrink-0" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{p.price}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Rule */}
            <div className="mb-16 rounded-2xl p-6 md:p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.5)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={eyebrowStyle}>The one rule</p>
              <p className="text-sm leading-relaxed mb-4" style={bodyStyle}>
                <span className="font-semibold" style={strongStyle}>On the machine, fitted and wicking. Off the machine, anything you like.</span> Lagree keeps you in plank, bear, wheelbarrow and on all fours on a moving carriage, and you will sweat a lot. A slim, moisture-wicking top stays put and dries; a loose cotton tee rides up and gets heavy.
              </p>
              <p className="text-sm leading-relaxed" style={bodyStyle}>
                If you prefer a tank, our{" "}
                <Link href="/blog/best-lagree-tops" style={inlineLinkStyle}>best Lagree tops</Link> guide covers fitted racerbacks.
              </p>
            </div>

            <Divider label="For class" />
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-4" style={h2Style}>Tees that work on the Megaformer</h2>
              <p className="text-sm leading-relaxed mb-8" style={bodyStyle}>
                Slim or compression fits in sweat-wicking fabric. All four are sold by the brand or by Amazon.com.
              </p>
              <div className="space-y-12">
                {CLASS_TEES.map((p, i) => (
                  <TierCard key={p.id} p={p} n={i + 1} />
                ))}
              </div>
            </div>

            <Divider label="For fans" />
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-4" style={h2Style}>Lagree tees &amp; hoodies for fans</h2>
              <p className="text-sm leading-relaxed mb-6" style={bodyStyle}>
                Be clear about what these are: <span className="font-semibold" style={strongStyle}>unofficial fan designs</span>, sold by Amazon.com, not Lagree Fitness merchandise. They are classic-fit casual tees and hoodies, not technical training tops, so wear them to and from class rather than on the machine. If you want official studio merch, ask at your studio&apos;s front desk.
              </p>
              <div className="space-y-12">
                {FAN_MERCH.map((p, i) => (
                  <TierCard key={p.id} p={p} n={CLASS_TEES.length + i + 1} />
                ))}
              </div>
              <p className="text-sm leading-relaxed mt-2" style={bodyStyle}>
                Shopping for someone else? Our{" "}
                <Link href="/blog/best-lagree-gifts" style={inlineLinkStyle}>Lagree gifts guide</Link> has 18 ideas by budget.
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
              <h2 className="text-2xl font-semibold mb-8" style={h2Style}>Complete the outfit</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="What to Wear to Lagree" excerpt="Three complete head-to-toe outfits, from budget to premium, plus what to leave at home." href="/blog/what-to-wear-to-lagree" category="Lagree" readTime="10 min read" date="October 2026" imageUrl="/pictures/stitch-grip-socks-footbar.png" />
                <ArticleCard title="Lagree Jacket" excerpt="The Define Jacket and six fitted layers for the cold studio and the walk home." href="/blog/best-lagree-jacket" category="Lagree" readTime="8 min read" date="October 2026" imageUrl="/pictures/stitch-studio-entryway.png" />
                <ArticleCard title="Best Leggings for Lagree" excerpt="Five pairs that stay opaque and stay put on a moving carriage." href="/blog/best-leggings-for-lagree" category="Lagree" readTime="9 min read" date="October 2026" imageUrl="/pictures/stitch-retail-activewear.png" />
                <ArticleCard title="Lagree for Men" excerpt="What men should wear to Lagree, and what to expect from the first class." href="/blog/lagree-for-men" category="Lagree" readTime="9 min read" date="October 2026" imageUrl="/pictures/stitch-reformer-row-studio.png" />
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
