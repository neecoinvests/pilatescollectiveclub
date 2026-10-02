import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

const TITLE = "Lagree Handles (2026): Megaformer, Micro & Grip Aids";
const DESCRIPTION = "Lagree handles, honestly: Megaformer handles come from Lagree Fitness, the Micro Handlebars are on Amazon, and the rest are grip aids for sweaty hands.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["lagree handles", "megaformer handles", "lagree carriage handles", "lagree micro handlebars", "grip for lagree handles", "megaformer replacement parts", "lagree micro accessories", "lagree grip gloves", "lagree wrist wraps", "megaformer grip pads"],
  openGraph: {
    title: TITLE,
    description: "Where Megaformer handles really come from, the Lagree Micro Handlebars on Amazon, and the grip aids that help sweaty hands hold on.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-lagree-carriage-handles",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-hands-on-carriage.png", width: 1200, height: 630, alt: "Lagree handles and grip aids 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Megaformer handles, the Lagree Micro Handlebars, and grip aids for sweaty hands, explained honestly.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-hands-on-carriage.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-lagree-carriage-handles" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=pilatescollective-20`;
const isAmazon = (url: string) => /amazon\.[a-z.]+\//.test(url);
const linkRel = (url: string) => (isAmazon(url) ? "noopener noreferrer nofollow sponsored" : "noopener noreferrer nofollow");
const linkLabel = (url: string) => (isAmazon(url) ? "Shop on Amazon" : "Shop Direct");

const PRODUCTS = [
  {
    rank: "01",
    name: "Lagree Fitness Micro Handlebars (Pair)",
    price: "$190.00",
    verdict: "The real Lagree handles on Amazon, for The Micro only",
    description:
      "These are the only genuine Lagree-branded handles we could find on Amazon, and they are sold by Lagree Fitness itself through its own Amazon store. The important caveat: they are made for <strong>The Micro</strong>, Lagree's compact home machine, and fit The Micro only. They will not retrofit a studio Megaformer, a Pilates reformer or any other machine. The handlebars are sold as a pair and can be mounted at the front or the back of The Micro. Using them at the back requires the <a href=\"https://www.amazon.com/dp/B0BKN2LSWD?tag=pilatescollective-20\" style=\"color:#8b4a31\" target=\"_blank\" rel=\"noopener noreferrer nofollow sponsored\">Micro Rear Platform</a> ($290.00, also sold by Lagree Fitness), and if you want handlebars at both ends at the same time you need two pairs. Why they matter for Lagree-style work: a lot of the method happens in planks, kneeling positions and lunges where your hands need something solid to hold while the carriage moves under you. On a bare Micro, those holds are improvised; with handlebars they become stable, repeatable positions you can sink into for the long, slow time under tension the method is built on. If you own The Micro, this is the handle upgrade, full stop.",
    affiliateUrl: amz("B0BKMP89SH"),
    tag: "Best for The Micro",
  },
  {
    rank: "02",
    name: "Megaformer Handles & Replacement Parts (Lagree Fitness)",
    price: "Contact Lagree Fitness",
    verdict: "Studio Megaformer owners: buy OEM, direct",
    description:
      "<strong>Not sold on Amazon. This links to lagreefitness.com.</strong> If you own or run a full-size Megaformer, the handles on it are original-equipment parts, and the only reliable source for replacements is the manufacturer. We could not find genuine Megaformer handles listed on Amazon, and we could not verify a public price, so we are not quoting one. Earlier versions of this page pointed to an Amazon search for an &quot;OEM handle set&quot;; that search did not lead to a verified Lagree product, so we removed it. Contact Lagree Fitness (or the dealer you bought the machine from) with your machine model and they can tell you which part fits. Treat any third-party listing claiming to be a &quot;Megaformer handle&quot; with caution: the handles are part of a commercial machine that takes heavy spring loads, and a part that doesn't mount exactly as designed is not worth the saving.",
    affiliateUrl: "https://www.lagreefitness.com/",
    tag: "Megaformer Owners",
  },
  {
    rank: "03",
    name: "TAVI Half Finger Gym Gloves",
    price: "$31.99",
    verdict: "Best grip glove for handles and straps",
    description:
      "From here down, nothing is a handle. These are grip aids: things you wear so your hands stay put on whatever handle the studio's machine already has. TAVI is a studio-wear brand best known for grip socks, and these half-finger gloves are the most Lagree-appropriate glove we found. The half-finger cut matters for the method: your fingertips stay bare, so you keep feel on the handle and on the platform when you move from a handle hold into a plank with your palms down. The glove covers the palm, which is where sweat builds up and where repeated slow pulls and long holds tend to rub. Sold through The Active Footwear Store, an official TAVI distributor. For a deeper look at the category, see our <a href=\"/blog/best-lagree-gloves\" style=\"color:#8b4a31\">Lagree gloves guide</a>.",
    affiliateUrl: amz("B09GPVMF86"),
    tag: "Best Grip Glove",
  },
  {
    rank: "04",
    name: "PULLUP & DIP Neoprene Grip Pads (Set of 4)",
    price: "$10.90",
    verdict: "Best minimalist grip aid",
    description:
      "If gloves feel like too much, grip pads are the lighter option. These are neoprene pads that sit between your palm and the handle; you hold the pad and the handle together rather than wearing anything. That makes them quick to use only where you need them, for example during a long handle-assisted plank series, and to set down on the platform when you switch to work that doesn't use the handles. A set of four means you have a spare pair for the next class while one pair dries. Neoprene is the same family of material used in wetsuits, so it holds up to sweat, which is the main reason hands slip in a hot, slow Lagree class.",
    affiliateUrl: amz("B07G2QTGY1"),
    tag: "Best Grip Pads",
  },
  {
    rank: "05",
    name: "Harbinger Pro 20-Inch WristWraps (Pair)",
    price: "$15.50",
    verdict: "Best wrist support for plank-heavy sessions",
    description:
      "Sold by Amazon.com. These do not improve your grip at all; they support your wrists. That is relevant here because many of the moves where you hold the handles are also moves where your wrists bear load: planks with hands on the front platform or the handles, kneeling work, and long holds where the wrist slowly drifts into extension as you fatigue. These are 20-inch wraps sold as a pair, with a thumb loop to anchor each wrap while you wind it on. Wrap snugly for the plank-heavy blocks and loosen between them. If you have ongoing wrist pain, talk to your instructor about modifications rather than wrapping through it.",
    affiliateUrl: amz("B000KFZ2JY"),
    tag: "Best Wrist Support",
  },
  {
    rank: "06",
    name: "Gaiam Grippy Yoga Gloves",
    price: "$7.65",
    verdict: "Best budget grip glove",
    description:
      "The low-cost way to find out whether gloves help you at all. Gaiam's grippy yoga gloves are made for exactly the problem Lagree regulars describe: palms that get slippery against a handle or platform once the sweat starts. They are not a premium training glove, and at this price you shouldn't expect one, but if you are unsure whether you are a glove person, this is a sensible first try before spending more on the TAVI pair above.",
    affiliateUrl: amz("B001VROVEM"),
    tag: "Best Budget Grip",
  },
];

const AMAZON_PRODUCTS = PRODUCTS.filter((p) => isAmazon(p.affiliateUrl));

const FAQS = [
  { q: "Can I buy Megaformer handles on Amazon?", a: "Not as far as we could verify. Full-size Megaformer handles are original-equipment parts sold by Lagree Fitness, so contact Lagree Fitness or the dealer you bought the machine from. The Lagree handles you can buy on Amazon are the Lagree Fitness Micro Handlebars, which fit The Micro only." },
  { q: "Do the Lagree Micro Handlebars fit a Megaformer or a reformer?", a: "No. They are made for The Micro, Lagree Fitness's compact home machine, and fit The Micro only. They are sold as a pair ($190.00) and can go at the front or back of The Micro; the back position needs the Micro Rear Platform ($290.00), and you need two pairs to have handlebars at both ends." },
  { q: "My hands slip on the handles in class. What helps?", a: "You can't change the studio's handles, but you can change your grip. Half-finger grip gloves cover the sweaty palm while leaving your fingertips bare, neoprene grip pads go between your palm and the handle only when you need them, and a towel within reach lets you dry your hands between blocks. Any of these is cheaper and more practical than trying to replace equipment you don't own." },
  { q: "Should I wear gloves or use bare hands for Lagree?", a: "Both are fine. Many people train bare-handed. Gloves or grip pads are worth trying if sweaty palms make you over-grip, if you get calluses or rubbing from long handle holds, or if you want a little more confidence in planks. Half-finger styles keep more feel on the platform than full gloves." },
  { q: "How do I reduce wrist strain when holding the handles?", a: "Keep the wrist stacked and neutral rather than letting it sag into extension as you tire, ask your instructor for a modification if a position hurts, and consider wrist wraps for plank-heavy blocks. Wraps support the joint; they don't replace good positioning or rest if something is painful." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": TITLE,
      "description": DESCRIPTION,
      "url": "https://pilatescollectiveclub.com/blog/best-lagree-carriage-handles",
      "datePublished": "2026-07-02",
      "dateModified": "2026-10-02",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-hands-on-carriage.png", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-lagree-carriage-handles" },
    },
    {
      "@type": "ItemList",
      "name": "Lagree Handles and Grip Aids on Amazon (2026)",
      "numberOfItems": AMAZON_PRODUCTS.length,
      "itemListElement": AMAZON_PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "description": p.description.replace(/<[^>]+>/g, "").replace(/&quot;/g, "\""),
          "offers": { "@type": "Offer", "priceCurrency": "USD", "price": p.price.replace(/[^0-9.]/g, ""), "availability": "https://schema.org/InStock", "url": p.affiliateUrl },
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Lagree Handles", "item": "https://pilatescollectiveclub.com/blog/best-lagree-carriage-handles" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
  ],
};

const bodyStyle = { color: "#53433e", fontFamily: "'Montserrat', sans-serif" };
const h2Style = { color: "#1b1c1c", fontFamily: "'Playfair Display', serif" };
const inlineLinkStyle = { color: "#8b4a31", textDecoration: "underline" };
const buttonStyle = { display: "block", fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "10px 14px", whiteSpace: "nowrap" as const, flexShrink: 0 };

export default function BestLagreeCarriageHandlesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Lagree</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Equipment Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={h2Style}>
              Lagree Handles<br /><span style={{ color: "#8b4a31" }}>& Grip Aids (2026)</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated October 2026 · 9 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Most links on this page go to Amazon, where we earn a small commission on qualifying purchases. One link goes directly to lagreefitness.com because Megaformer parts are not sold on Amazon. Amazon prices were verified on October 2, 2026 and can change.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ ...bodyStyle, fontWeight: 300 }}>
              Search for &quot;Lagree handles&quot; and you&apos;ll find plenty of listings that hint at Megaformer compatibility. Very few of them are what they seem. Here is the honest picture: the handles on a studio Megaformer are original parts you get from Lagree Fitness. The one genuine Lagree handle product on Amazon is the Micro Handlebars, for Lagree&apos;s compact home machine. Everything else worth buying is a grip aid, something that helps your hands hold the handles you already have.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-hands-on-carriage.png" alt="Hands gripping a Lagree-style carriage" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-10 rounded-2xl p-6" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.4)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>How we chose these picks</p>
              <p className="text-sm leading-relaxed" style={bodyStyle}>Only one true Lagree handle is sold on Amazon — the Lagree Fitness Micro Handlebars — so that leads the list, and everything else is a grip aid rather than a handle. Every Amazon product below links to a specific listing whose price and availability we verified on October 2, 2026. We have not used these products in a lab test; the reasoning below is based on what each listing states and how Lagree classes actually use the hands.</p>
            </div>

            <h2 className="text-3xl font-semibold mb-6" style={h2Style}>What &quot;Lagree handles&quot; actually means</h2>
            <div className="space-y-5 mb-12 text-base leading-relaxed" style={bodyStyle}>
              <p>People mean three different things by &quot;Lagree handles&quot;, and the right purchase depends on which one you mean.</p>
              <p><strong>1. The handles on a studio Megaformer.</strong> These are built into a commercial machine and sold by its manufacturer. If you own a Megaformer and a handle is damaged or missing, you need an OEM replacement from Lagree Fitness. Nothing on Amazon is a verified substitute.</p>
              <p><strong>2. Handles for The Micro.</strong> The Micro is Lagree Fitness&apos;s compact home machine, and its handlebars are sold separately. This is the one case where a real Lagree handle product is on Amazon, sold by Lagree Fitness itself. Our <Link href="/blog/lagree-fitness" style={inlineLinkStyle}>Lagree Fitness brand guide</Link> covers the company and what it sells.</p>
              <p><strong>3. Something to help you hold the handles in class.</strong> This is what most people searching actually need. You don&apos;t own the studio&apos;s machine, you can&apos;t change its handles, but your hands slip, rub or tire. The answer is a grip aid: gloves, grip pads or wrist support. These aren&apos;t Lagree-branded, and they don&apos;t need to be.</p>
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
                  <a href={p.affiliateUrl} target="_blank" rel={linkRel(p.affiliateUrl)} style={buttonStyle}>{linkLabel(p.affiliateUrl)}</a>
                </div>
              ))}
            </div>

            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Picks · Handles, Grip Aids & Wrist Support</p>
              <div className="space-y-10">
                {PRODUCTS.map((p) => (
                  <div key={p.name}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-semibold" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{p.rank}</span>
                      <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{p.tag}</span>
                    </div>
                    <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.3)" }}>
                      <div className="p-6" style={{ backgroundColor: "#ffffff" }}>
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-xl font-semibold mb-1" style={h2Style}>{p.name}</h3>
                            <p className="text-sm font-semibold" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{p.price}</p>
                          </div>
                          <a href={p.affiliateUrl} target="_blank" rel={linkRel(p.affiliateUrl)} style={buttonStyle}>{linkLabel(p.affiliateUrl)}</a>
                        </div>
                        <p className="text-sm leading-relaxed" style={bodyStyle} dangerouslySetInnerHTML={{ __html: p.description }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.3)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={h2Style}>Not Lagree-specific? That&apos;s fine</h2>
              <p className="text-sm leading-relaxed" style={bodyStyle}>Only the first two picks are Lagree products. The gloves, pads and wraps are general training gear, and that&apos;s the honest state of the market: nobody makes a verified &quot;Megaformer grip&quot; accessory, and you don&apos;t need one. What your hands need on a Lagree machine is the same thing they need on any sweaty handle under slow, sustained load: friction where the palm meets the bar, and a stable wrist. Buy for that, and ignore any listing that leans on the Lagree or Megaformer name without being sold by Lagree Fitness.</p>
            </div>

            <h2 className="text-3xl font-semibold mb-6" style={h2Style}>Why grip matters more in Lagree than in most classes</h2>
            <div className="space-y-5 mb-12 text-base leading-relaxed" style={bodyStyle}>
              <p><strong>Slow tempo means long holds.</strong> Lagree is built on slow, controlled movement and continuous time under tension. A rep that takes a second or two in a gym can take several times longer on the machine, and you may hold a position for a full block. Your grip is working the whole time, so small problems such as a slightly slippery palm or a rubbing spot get magnified over a 45-minute class.</p>
              <p><strong>Sweat builds as the class goes on.</strong> Lagree classes are sweaty and hard. By the second half, palms that felt fine in the warm-up can start to slide. When your hand slips, the instinct is to squeeze harder, which tires your forearms and pulls attention away from the muscles the move is meant to target.</p>
              <p><strong>The carriage moves under you.</strong> Unlike a static bar, you&apos;re holding on while the carriage glides against spring resistance. A confident grip is part of what lets you control that movement slowly instead of being pulled through it.</p>
              <p><strong>Hands go from handles to platforms.</strong> Many sequences move from a handle hold straight into a plank or kneeling position with your palms flat on a platform. That&apos;s why we favour half-finger gloves and grip pads over thick full-finger gloves: bare fingertips keep feel on the platform, and pads can simply be set down.</p>
            </div>

            <h2 className="text-3xl font-semibold mb-6" style={h2Style}>Gloves, pads or wraps: which do you need?</h2>
            <div className="space-y-5 mb-12 text-base leading-relaxed" style={bodyStyle}>
              <p><strong>Choose gloves</strong> if your palms get slippery or sore and you want something you can put on before class and forget about. Half-finger styles such as the TAVI pair are the best compromise for Lagree because they leave your fingertips free.</p>
              <p><strong>Choose grip pads</strong> if you only struggle in certain blocks. You hold them against the handle when you need them and set them aside the rest of the time. They&apos;re also the cheapest way to see whether extra grip helps you at all.</p>
              <p><strong>Choose wrist wraps</strong> if the problem is your wrists rather than your grip, typically an ache after plank-heavy sequences. Wraps support the joint; they won&apos;t stop your hands slipping. Some people use wraps and gloves together.</p>
              <p><strong>Choose nothing</strong> if your grip is fine. Plenty of regulars train bare-handed with a towel nearby, and that is a perfectly good approach. Our <Link href="/blog/best-lagree-gloves" style={inlineLinkStyle}>Lagree gloves guide</Link> goes deeper on when gloves are worth it.</p>
            </div>

            <h2 className="text-3xl font-semibold mb-6" style={h2Style}>If you own The Micro</h2>
            <div className="space-y-5 mb-12 text-base leading-relaxed" style={bodyStyle}>
              <p>The Micro is sold without handlebars. The Lagree Fitness Micro Handlebars ($190.00 a pair) can be used at the front or the back of the machine. Using them at the back requires the Micro Rear Platform ($290.00), and you need two pairs of handlebars if you want them at both ends at once. Plan the purchase in that order: machine, then rear platform if you want it, then handlebars for each end you&apos;ll use.</p>
              <p>For the full picture of setting up at home, including what The Micro costs and how it compares with a studio machine, see our <Link href="/blog/best-megaformer-machine" style={inlineLinkStyle}>best Megaformer machine guide</Link> and <Link href="/blog/lagree-at-home" style={inlineLinkStyle}>Lagree at home</Link>.</p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={h2Style}>Frequently asked questions</h2>
              <div className="space-y-6">
                {FAQS.map((item) => (
                  <div key={item.q} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-base font-semibold mb-2" style={h2Style}>{item.q}</p>
                    <p className="text-sm leading-relaxed" style={bodyStyle}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-8" style={h2Style}>Further reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="Lagree Fitness: The Brand Guide" excerpt="The company behind the Megaformer and The Micro, and what you can actually buy." href="/blog/lagree-fitness" category="Brand" readTime="12 min read" date="September 2026" imageUrl="/pictures/stitch-reformers-aerial-row.png" />
                <ArticleCard title="Lagree Gloves (2026)" excerpt="Do you need gloves for Lagree? Who benefits, and the grip gloves and wraps worth buying." href="/blog/best-lagree-gloves" category="Lagree" readTime="9 min read" date="October 2026" imageUrl="/pictures/stitch-hands-on-carriage.png" />
                <ArticleCard title="Best Megaformer Machine" excerpt="Lagree equipment reviewed, plus the studio-grade alternatives worth considering." href="/blog/best-megaformer-machine" category="Lagree" readTime="11 min read" date="September 2026" imageUrl="/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg" />
                <ArticleCard title="Lagree at Home" excerpt="How to train the Lagree way at home, from the Micro to floor work between classes." href="/blog/lagree-at-home" category="Lagree" readTime="9 min read" date="September 2026" imageUrl="/pictures/stitch-hands-on-carriage.png" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a Lagree studio near you" subtitle="Use our city guides to find licensed Lagree and boutique Pilates studios worldwide." showSearch searchPlaceholder="Ask: best Lagree studios in Miami..." />
      </main>
      <Footer />
    </>
  );
}
