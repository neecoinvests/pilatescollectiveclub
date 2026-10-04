import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import { jsonLdHtml } from "@/lib/schema";

const PAGE_URL = "https://pilatescollectiveclub.com/blog/best-lagree-jacket";
const HERO_IMAGE = "https://pilatescollectiveclub.com/pictures/stitch-studio-entryway.png";
const TITLE = "Lagree Jacket (2026): The Define Jacket & 6 Fitted Layers";
const DESCRIPTION =
  "The best jackets for Lagree class: the lululemon Define Jacket, a $48 Butterluxe alternative and fitted zip layers with thumbholes — for the cold studio and the sweaty walk home.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: "What to layer for Lagree: the Define Jacket, fitted alternatives from $20, and the warm cover-up for after class. Prices checked live on Amazon.",
    type: "article",
    url: PAGE_URL,
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: "Studio entryway — the best jackets for Lagree class" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lagree Jacket (2026): Define Jacket & Alternatives",
    description: "The Define Jacket, a $48 alternative and fitted zip layers for Lagree class.",
    images: [HERO_IMAGE],
  },
  keywords: [
    "lagree jacket",
    "best jacket for lagree",
    "define jacket lagree",
    "lululemon define jacket alternative",
    "define jacket dupe",
    "what to wear over workout clothes lagree",
    "fitted workout jacket thumbholes",
    "lagree layer",
    "jacket for megaformer class",
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=pilatescollective-20`;
const DEFINE_SEARCH = "https://www.amazon.com/s?k=lululemon+define+jacket&tag=pilatescollective-20";
const LULULEMON = "https://shop.lululemon.com/";

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

const PICKS: Pick[] = [
  {
    id: "define-jacket",
    badge: "The Icon",
    shortName: "lululemon Define",
    name: "lululemon Define Jacket",
    price: "From $188.00",
    url: DEFINE_SEARCH,
    verdict: "The one everyone at the studio is wearing",
    description:
      "The fitted studio jacket other brands copy. Per its listing: added Lycra fibre for shape retention, thumbholes and cuffins to keep sleeves down and hands warm, secure front pockets, and a body-skimming, hip-length fit. One honest caution: lululemon does not sell on Amazon, so Amazon listings come from third-party resellers (we found one at $188.00 from Edgeplay Sports). Check the seller and return policy, or buy direct from lululemon.com for guaranteed authenticity.",
  },
  {
    id: "crz-butterluxe",
    badge: "Best Alternative",
    shortName: "CRZ Butterluxe",
    name: "CRZ YOGA Butterluxe Jacket (Waist Length)",
    price: "$48.00",
    url: amz("B0BJ2G3JNW"),
    verdict: "The Define look for about a quarter of the price",
    description:
      "Slim fit and waist length in CRZ YOGA's Butterluxe fabric, which the brand describes as extremely soft and ultra stretchy. Thumbholes, side zip pockets and inner hidden pockets, with a streamlined back. Sold by CRZ YOGA in several colours. If you already wear Butterluxe leggings to Lagree, this is the matching layer.",
  },
  {
    id: "iuga",
    badge: "Best Fitted Zip",
    shortName: "IUGA zip jacket",
    name: "IUGA Women's Lightweight Full-Zip Workout Jacket",
    price: "$42.99",
    url: amz("B0FGXVD8XD"),
    verdict: "Slim, breathable, with pockets that actually zip",
    description:
      "A slim-fit, lightweight full-zip with thumbhole cuffs and two zippered pockets for your phone and keys. IUGA calls out a windproof collar with a soft inner guard against zipper chafing, and moisture-wicking fabric — useful when you put it straight back on after class.",
  },
  {
    id: "90-degree",
    badge: "Best Track-Style",
    shortName: "90 Degree track jacket",
    name: "90 Degree By Reflex Full-Zip Track Jacket",
    price: "$39.99",
    url: amz("B0799P3C61"),
    verdict: "A sleek nylon-spandex layer that won't overheat",
    description:
      "A slim-fit full-zip running jacket in a nylon/spandex and polyester/spandex blend, with thumbholes and two front pockets. Lightweight and breathable, so it works for the walk in and over a damp tank after class. Backed by a 30-day money-back guarantee, per the listing.",
  },
  {
    id: "dalavch-3",
    badge: "Best Value",
    shortName: "Dalavch 3-pack",
    name: "Dalavch Cropped Full-Zip Workout Jacket (3-Pack)",
    price: "$29.69",
    url: amz("B0GXBJSY47"),
    verdict: "Three fitted cropped layers for under $30",
    description:
      "Three slim, cropped full-zip jackets with thumbholes in breathable stretch fabric. The listing advises sizing up for a looser fit. At about $10 each, this is the way to keep one in your gym bag, one in the car and one at home.",
  },
  {
    id: "gym-people-fleece",
    badge: "Best Warm Cover-Up",
    shortName: "Fleece crop hoodie",
    name: "THE GYM PEOPLE Fleece-Lined Full-Zip Crop Hoodie",
    price: "$19.99",
    url: amz("B0BD5D5QLH"),
    verdict: "For the walk home in winter",
    description:
      "Fleece-lined, waist-length and full-zip, with thumbholes and a kangaroo pocket. Moderate stretch, so it is a cover-up for before and after class rather than something to train in. Sold by THE GYM PEOPLE.",
  },
  {
    id: "crz-half-zip",
    badge: "Best Post-Class Cosy",
    shortName: "CRZ half-zip fleece",
    name: "CRZ YOGA Fleece-Lined Half-Zip Sweatshirt",
    price: "$48.00",
    url: amz("B0FVDKBQKQ"),
    verdict: "Funnel neck and fleece for cold mornings",
    description:
      "A thick cotton-blend sweatshirt with a fuzzy fleece lining, classic fit and waist length, and a funnel neck with half zip. CRZ designs it for daily wear, which is exactly the point: throw it on over a sweaty tank and go.",
  },
];

const FAQS = [
  {
    q: "Do you need a jacket for Lagree?",
    a: "Not during class — you will be too warm within minutes. A layer is for before and after: studios are often kept cool, and you walk out damp with sweat. A fitted zip jacket goes on and off quickly and keeps you warm on the way home.",
  },
  {
    q: "Can you wear a jacket during a Lagree class?",
    a: "Take it off before the first move. Lagree is slow and intense, and you will overheat. A loose layer can also catch on the carriage, springs or platform. Fold it under the machine or in a cubby.",
  },
  {
    q: "Is the lululemon Define Jacket worth it for Lagree?",
    a: "It is a great fitted layer with thumbholes, shape-retaining Lycra fibre and secure pockets, but it costs around $188 at reseller prices. If you want the same fitted look for less, the CRZ YOGA Butterluxe Jacket is $48 and the 90 Degree By Reflex track jacket is $39.99.",
  },
  {
    q: "Is the Define Jacket sold on Amazon?",
    a: "lululemon does not sell on Amazon. Listings there come from third-party resellers, so check the seller rating and return policy. For guaranteed authenticity and full size range, buy at lululemon.com.",
  },
  {
    q: "What should a Lagree jacket have?",
    a: "A fitted cut so it layers neatly, a full zip so it goes on over a damp top easily, thumbholes to keep sleeves down, and zippered pockets for your phone and keys. Fleece is only for the walk home in cold weather.",
  },
];

const ALL_ITEMS = PICKS;

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
      "name": "Best Jackets for Lagree (2026)",
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
        { "@type": "ListItem", "position": 3, "name": "Lagree Jacket", "item": PAGE_URL },
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

export default function LagreeJacketPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Layers</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Lagree Jacket<br /><span style={{ color: "#8b4a31" }}>(2026): The Define Jacket &amp; 6 Fitted Layers</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated October 2026 · 8 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Product links go to Amazon, where we earn a small commission on qualifying purchases at no extra cost to you. Our picks are based on each product&apos;s published specifications and how a layer is used around a Lagree class, not a hands-on test.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Nobody keeps a jacket on through a Lagree class — five minutes of slow lunges on the Megaformer and you&apos;re peeling it off. But you need one for the other two moments: waiting in a cool studio before class, and walking out drenched afterwards. That calls for a fitted zip layer that goes on fast over a damp top, keeps its shape and holds your phone. Here are seven, from the lululemon Define Jacket to a three-pack under $30.
            </p>
            <p className="text-sm leading-relaxed" style={bodyStyle}>
              Every Amazon price and stock status was checked live on October 4, 2026. Prices change, so the final price is whatever Amazon shows at checkout.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-studio-entryway.png" alt="Studio entryway where you take off your layer before Lagree class" fill className="object-cover" style={{ filter: "brightness(0.85)" }} priority />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            {/* Quick picks */}
            <div className="mb-16 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={h2Style}>Quick picks</h2>
              <div className="overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
                {PICKS.map((p, i) => (
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

            {/* What to look for */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={h2Style}>What makes a good Lagree layer</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { h: "Fitted, not baggy", b: "It goes over a tank and leggings without bunching, and a slim cut keeps you warm without bulk." },
                  { h: "Full zip", b: "Pulling a sweatshirt over a soaked sports bra is miserable. A full zip goes on and off in seconds." },
                  { h: "Thumbholes", b: "They keep sleeves down when you carry your bag and water bottle, and keep your hands warm in a cold studio." },
                  { h: "Zip pockets", b: "Phone, keys and card in zippered pockets — so you can leave your bag in the cubby." },
                ].map((item) => (
                  <div key={item.h} className="rounded-xl p-5" style={cardStyle}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.h}</p>
                    <p className="text-sm leading-relaxed" style={bodyStyle}>{item.b}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Picks */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={h2Style}>The 7 best jackets for Lagree</h2>
              <div className="space-y-12">
                {PICKS.map((p, i) => (
                  <TierCard key={p.id} p={p} n={i + 1} />
                ))}
              </div>
            </div>

            {/* Define vs alternative */}
            <div className="mb-16 rounded-2xl p-6 md:p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.5)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={eyebrowStyle}>Define vs the alternatives</p>
              <h2 className="text-2xl font-semibold mb-4" style={h2Style}>Is the Define Jacket worth four times the price?</h2>
              <p className="text-sm leading-relaxed mb-4" style={bodyStyle}>
                <span className="font-semibold" style={strongStyle}>Pay for the Define</span> if you want the specific lululemon fit and fabric, will wear it daily outside the studio, and buy it at full size range from{" "}
                <a href={LULULEMON} target="_blank" rel="noopener noreferrer" style={inlineLinkStyle}>lululemon.com</a>.
              </p>
              <p className="text-sm leading-relaxed" style={bodyStyle}>
                <span className="font-semibold" style={strongStyle}>Buy the alternative</span> if it is mostly a studio layer. The CRZ YOGA Butterluxe Jacket ($48) shares the slim fit, thumbholes and zip pockets; the IUGA ($42.99) and 90 Degree ($39.99) add a sportier, more breathable finish. Spend the difference on{" "}
                <Link href="/blog/best-lagree-grip-socks" style={inlineLinkStyle}>better grip socks</Link>, which matter far more during class.
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

            {/* Further reading */}
            <div>
              <h2 className="text-2xl font-semibold mb-8" style={h2Style}>Complete the outfit</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="What to Wear to Lagree" excerpt="Three complete head-to-toe outfits, from budget to premium, plus what to leave at home." href="/blog/what-to-wear-to-lagree" category="Lagree" readTime="10 min read" date="October 2026" imageUrl="/pictures/stitch-grip-socks-footbar.png" />
                <ArticleCard title="Lagree Shirts & Hoodies" excerpt="Fitted tees for class and the fan hoodies Lagree regulars actually wear." href="/blog/best-lagree-shirts" category="Lagree" readTime="8 min read" date="October 2026" imageUrl="/pictures/stitch-retail-activewear.png" />
                <ArticleCard title="Best Lagree Tops" excerpt="Fitted tanks that stay put through bear crawls and planks." href="/blog/best-lagree-tops" category="Lagree" readTime="8 min read" date="October 2026" imageUrl="/pictures/stitch-retail-activewear.png" />
                <ArticleCard title="Lagree Bag" excerpt="Gym bags with a shoe pocket and a wet compartment for after class." href="/blog/best-lagree-bag" category="Lagree" readTime="8 min read" date="October 2026" imageUrl="/pictures/stitch-studio-bench-towels.png" />
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
