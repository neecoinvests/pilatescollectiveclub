import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import UpsellCTA from "@/components/UpsellCTA";

export const metadata: Metadata = {
  title: "Lagree Socks (2026): Best Grip Socks for Lagree",
  description: "The best Lagree socks for a moving Megaformer carriage: full-toe, closed-toe, toeless and men's grip socks, with Amazon prices verified October 2026.",
  keywords: ["lagree socks", "lagree grip socks", "socks for lagree", "megaformer socks", "grip socks for lagree", "lagree socks men", "best socks for lagree class", "toesox lagree", "tavi grip socks lagree", "toeless grip socks lagree"],
  openGraph: {
    title: "Lagree Socks (2026): Best Grip Socks for Lagree",
    description: "Grip socks for Lagree and the Megaformer — full-toe, closed-toe, toeless and men's pairs, with verified Amazon prices and honest reasoning.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-lagree-grip-socks",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-grip-socks-footbar.png", width: 1200, height: 630, alt: "Lagree Socks — Best Grip Socks for Lagree — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lagree Socks (2026): Best Grip Socks for Lagree",
    description: "The grip socks worth wearing on a moving Megaformer carriage — verified listings and prices.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-grip-socks-footbar.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-lagree-grip-socks" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "toesox Low Rise Grip Socks (Full Toe, 2-Pack)",
    price: "$30.00",
    verdict: "Best overall Lagree socks",
    description:
      "toesox is one of the best-known studio grip-sock brands, and the Low Rise full-toe 2-pack is the most sensible way into it for Lagree. Two pairs matters more than it sounds: Lagree is slow, long time-under-tension work that leaves socks damp by the end of class, so rewearing a pair is not realistic and a single pair means doing laundry around your schedule. The individual toe pockets let your toes spread and press into the carriage independently, which many people find steadier in single-leg lunges and balance-heavy sequences on a platform that is moving under them. The low-rise cut keeps the sock short, so there is less fabric to bunch when you are kneeling on the carriage. The trade-off is the toe pockets themselves — they take a few extra seconds to seat properly. On Amazon this listing is sold by The Active Footwear Store, an official toesox distributor.",
    affiliateUrl: "https://www.amazon.com/dp/B07QHNDHW3?tag=pilatescollective-20",
    tag: "Best Overall",
  },
  {
    rank: "02",
    name: "toesox Bellarina Grip Socks (Full Toe)",
    price: "$18.00",
    verdict: "Best single pair",
    description:
      "If you want to try full-toe socks before committing to a multi-pack, the Bellarina is the single-pair route into toesox. The design is the same idea as the Low Rise — separate toe pockets so the toes can grip independently. It is a good choice for a trial class or as the pair you keep in your bag for a drop-in. The $18.00 price is for the Black, Medium listing we checked; other colours and sizes are separate listings and can be priced differently, so confirm the size on the page before you buy. As with any full-toe sock, take a minute to seat each toe before you step onto the carriage — a half-seated toe pocket is a distraction you do not want mid-plank.",
    affiliateUrl: "https://www.amazon.com/dp/B00TXH0BK0?tag=pilatescollective-20",
    tag: "Best Single Pair",
  },
  {
    rank: "03",
    name: "TAVI Stacy Slouch Pilates Socks (2-Pack)",
    price: "$40.00",
    verdict: "Premium pick",
    description:
      "TAVI is a studio grip-sock brand, and the Stacy is its slouch style — a closed-toe sock with a longer, relaxed leg that you push down around the ankle. It is the pair to pick if you want something that looks considered on the way into class and out to coffee afterwards. Closed-toe construction is faster to pull on than a full-toe sock, which is genuinely useful when you are changing in a studio lobby minutes before the doors open. At $40.00 for two pairs it is the most expensive option per pair on this list, so it makes most sense as one part of a rotation rather than your only socks. If you attend Lagree several times a week, pair it with a cheaper multi-pack for the everyday classes.",
    affiliateUrl: "https://www.amazon.com/dp/B0GFPGMWWS?tag=pilatescollective-20",
    tag: "Premium Pick",
  },
  {
    rank: "04",
    name: "TAVI Savvy Grip Socks",
    price: "$16.00",
    verdict: "Best closed-toe value",
    description:
      "The Savvy is TAVI's everyday closed-toe grip sock and the cheapest way into the brand. For most people, closed-toe is the practical default for Lagree: no toe pockets to fiddle with, quick to put on, and a single sock shape that is easier to fit if your toes do not like being separated. What you give up is independent toe grip, which some people value in single-leg work and others never notice. The $16.00 price is for the Haze, Medium listing we checked — TAVI sells colours and sizes as separate listings, so prices can differ. Look at the sole photos on the listing before you buy and pick the size by the brand's chart rather than your shoe size alone.",
    affiliateUrl: "https://www.amazon.com/dp/B07KRPY2SQ?tag=pilatescollective-20",
    tag: "Best Closed-Toe Value",
  },
  {
    rank: "05",
    name: "Tucketts Toeless Grip Socks (Allegro)",
    price: "$18.99",
    verdict: "Best toeless",
    description:
      "Toeless grip socks leave the toes bare while keeping a grip sole under the ball and heel of the foot. The appeal for Lagree is twofold: your toes can make direct contact with the carriage or platform, and a toeless sock runs a little cooler in a hot, sweaty class. Some people simply cannot stand fabric between their toes, and this is the style for them. Two honest caveats. First, check your studio's policy — most accept toeless socks, but some ask for full coverage for hygiene. Second, bare toes are less protected if you catch a foot on a platform edge or handle during transitions. If your studio allows them, Tucketts is a well-known toeless option.",
    affiliateUrl: "https://www.amazon.com/dp/B072F6QR84?tag=pilatescollective-20",
    tag: "Best Toeless",
  },
  {
    rank: "06",
    name: "Muezna Pilates Grip Socks (6 Pairs)",
    price: "$7.99",
    verdict: "Best multi-pack on a budget",
    description:
      "Six pairs for $7.99 solves the real Lagree sock problem, which is volume rather than prestige. If you take three or four classes a week, you need a rotation — every pair comes off damp — and buying that many branded pairs is an expensive way to stay ahead of your laundry. A budget multi-pack like this is ideal for a first month of classes, for keeping a spare pair in your car or bag, or as the everyday pairs that let your premium socks last longer. Set your expectations accordingly: at this price, do not expect the same finish or longevity as toesox or TAVI. Look at the sole photos and choose a pattern with grip reaching under the ball of the foot, which is where your weight lands in planks and lunges.",
    affiliateUrl: "https://www.amazon.com/dp/B0DQ53GSP5?tag=pilatescollective-20",
    tag: "Best Multi-Pack",
  },
  {
    rank: "07",
    name: "Muezna Men's Non-Slip Yoga Socks",
    price: "$17.99",
    verdict: "Best Lagree socks for men",
    description:
      "Most grip socks are sized and styled with women in mind, and the problem for larger feet is not just tightness. If the grip area stops short of where your forefoot actually lands, the sole cannot support you in a lunge or a plank on a moving carriage. A men's-specific sock is sized for a longer foot, so the grip area has a better chance of covering it. This Muezna listing is labelled as a men's non-slip sock, which makes it the easiest starting point if you have struggled to find Lagree socks in your size. Check the listing's size chart against your foot length and the number of pairs included before ordering.",
    affiliateUrl: "https://www.amazon.com/dp/B07H4F3FXK?tag=pilatescollective-20",
    tag: "Best for Men",
  },
  {
    rank: "08",
    name: "CoolMate Men's Grip Socks (4 Pairs)",
    price: "$14.99",
    verdict: "Best men's multi-pack",
    description:
      "The men's equivalent of the budget multi-pack: four pairs of men's grip socks for $14.99. If you are a regular in class, this is the cheaper way to build a rotation, with the Muezna men's pair above as an alternative if you only want one or two. The same logic applies as with every multi-pack — volume first, longevity second — so treat these as your everyday pairs. Before you buy, compare the size chart with your foot length rather than relying on a shoe-size conversion, and check that the grip print on the sole reaches the forefoot.",
    affiliateUrl: "https://www.amazon.com/dp/B0F626LL9W?tag=pilatescollective-20",
    tag: "Men's Multi-Pack",
  },
  {
    rank: "09",
    name: "Gaiam Grippy Studio Yoga Socks",
    price: "$8.94",
    verdict: "Best open-toe budget option",
    description:
      "If you have a trial class booked tomorrow and want to avoid paying studio-reception prices, Gaiam is the cheap, widely available fallback. It is a yoga sock first, not a Lagree-specific design, and the open-toe style has the same pros and cons as the Tucketts pair above: cooler and more toe contact, less coverage. At $8.94 (sold by Amazon.com at the time we checked) it is a reasonable way to find out whether you enjoy Lagree before you spend more. If you keep going, upgrade to a pair you choose deliberately for the sole pattern and fit.",
    affiliateUrl: "https://www.amazon.com/dp/B079VX3FBG?tag=pilatescollective-20",
    tag: "Budget Open-Toe",
  },
];

const FAQS = [
  { q: "Do you need grip socks for Lagree?", a: "At most Lagree studios, yes — grip socks are usually required rather than recommended, partly for hygiene and partly because the carriage and platforms are slippery under bare feet or ordinary socks once you start sweating. Studios usually sell pairs at reception, but buying before your first class gives you more choice and usually costs less. Check your studio's policy page in case it asks for a particular style, such as full coverage." },
  { q: "What is the difference between Lagree socks and Pilates grip socks?", a: "There is no separate 'Lagree sock' category — Lagree socks are grip socks. What changes is the demand. Lagree holds you in slow lunges and planks on a moving carriage for long sets, with a lot of sweat. That shifts the load sideways across the sole as well as straight down, so grip coverage under the ball of the foot and a fit that does not rotate underfoot matter more than they do on a mat." },
  { q: "Full-toe, closed-toe or toeless socks for Lagree?", a: "All three work, and for most people it is personal preference. Full-toe socks (such as toesox) let the toes spread and grip independently. Closed-toe socks (such as TAVI) are quicker to put on and suit people who dislike toe pockets. Toeless socks (such as Tucketts) run cooler and leave the toes bare, but check that your studio allows them. Choose by fit and sole coverage first, toe style second." },
  { q: "Can men wear grip socks for Lagree?", a: "Yes, and they should — the rules are the same for everyone. The main issue for men is size: many grip socks are graded for smaller feet, so the grip area can end before the forefoot. Look for listings labelled as men's (the Muezna Men's and CoolMate Men's socks above) and size them by foot length." },
  { q: "Can you wear regular socks on a Megaformer?", a: "Not safely. Ordinary socks slide on the carriage and platforms, especially once you start sweating, and most studios will not let you train in them. If you forget your grip socks, buy a pair at reception rather than risk it." },
  { q: "How many pairs of Lagree socks do you need?", a: "Plan on one pair per class between washes. If you train two or three times a week, three to five pairs keeps you covered — which is why a multi-pack plus one or two premium pairs is the most practical setup. Wash them inside out on a cool cycle and air-dry them, because heat is generally hard on silicone grip prints." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Lagree Socks (2026): Best Grip Socks for Lagree",
      "description": "The best Lagree socks for a moving Megaformer carriage: full-toe, closed-toe, toeless and men's grip socks, with Amazon prices verified October 2026.",
      "url": "https://pilatescollectiveclub.com/blog/best-lagree-grip-socks",
      "datePublished": "2026-09-12",
      "dateModified": "2026-10-02",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-grip-socks-footbar.png", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-lagree-grip-socks" },
    },
    {
      "@type": "ItemList",
      "name": "Best Lagree Socks (2026)",
      "numberOfItems": PRODUCTS.length,
      "itemListElement": PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "description": p.verdict,
          "offers": { "@type": "Offer", "priceCurrency": "USD", "price": p.price.replace(/[^0-9.]/g, ""), "availability": "https://schema.org/InStock", "url": p.affiliateUrl },
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Lagree Socks", "item": "https://pilatescollectiveclub.com/blog/best-lagree-grip-socks" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
  ],
};

const h2Style = { color: "#1b1c1c", fontFamily: "'Playfair Display', serif" };
const bodyStyle = { color: "#53433e", fontFamily: "'Montserrat', sans-serif" };

export default function BestLagreeGripSocksPage() {
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
              Lagree Socks<br /><span style={{ color: "#8b4a31" }}>The Best Grip Socks for Lagree (2026)</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated October 2026 · 9 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Product links on this page go to Amazon. As an Amazon Associate we earn from qualifying purchases, at no extra cost to you. Listings and prices were verified on Amazon on October 2, 2026 and may change.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Lagree socks are not a special product — they are grip socks — but Lagree asks more of them than almost any other class. You hold slow lunges and planks for long sets on a carriage that moves under you, you sweat heavily, and you kneel, step and transition between platforms all class. Below are nine verified pairs covering every style that works: full-toe, closed-toe, toeless, men&apos;s and budget multi-packs.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-grip-socks-footbar.png" alt="Lagree socks — grip socks braced on a footbar" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
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
                  <a href={p.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored nofollow"
                    style={{ display: "block", fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "10px 14px", whiteSpace: "nowrap", flexShrink: 0 }}
                  >Buy →</a>
                </div>
              ))}
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={h2Style}>What makes a good Lagree sock</h2>
              <div className="space-y-4 text-base leading-relaxed" style={bodyStyle}>
                <p>
                  On a mat, grip mostly has to resist your weight pressing straight down. On a Megaformer it also has to resist sideways and forward-back shear, because the carriage slides on its rails while you hold a lunge or plank against spring tension. Lagree&apos;s slow tempo makes that worse rather than better: instead of a quick rep, your foot holds the same position under load for a long set, often while sweat builds up inside the sock.
                </p>
                <p>
                  That is why the sole pattern matters more than the brand name. As a general design principle, a sole with grip printed across most of the footbed gives more contact area than a sparse scatter of small dots, and contact area is what holds under sideways load. Whatever pair you choose, look at the sole photos on the listing and check that the grip reaches under the ball of the foot, where your weight lands in planks and lunges.
                </p>
                <p>
                  Fit is the second half of the job. A sock that is too big will twist under the foot, and once the grip has rotated away from where you are pushing, the sole cannot help you. Size by the brand&apos;s chart and your foot length rather than by habit.
                </p>
              </div>
            </div>

            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>9 Pairs · Verified Listings</p>
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
                <p className="text-base font-semibold mb-2" style={h2Style}>Not Lagree-branded? That&apos;s fine.</p>
                <p className="text-sm leading-relaxed" style={bodyStyle}>
                  None of these socks is made specifically for Lagree, and that is normal — studio grip socks are designed for Pilates, barre, yoga and Lagree alike. What makes a pair right for Lagree is not a label but the sole coverage, the fit and how many pairs you have in rotation. Prices shown are the Amazon prices we verified on October 2, 2026; colour and size variations can be priced differently.
                </p>
              </div>
            </div>

            <UpsellCTA
              eyebrow="Complete Your Lagree Kit"
              title="Socks sorted. Here's what Lagree regulars add next"
              body="Lagree is sweaty and kneel-heavy. A grip towel keeps the carriage from turning slick halfway through class, and a padded knee sleeve takes the edge off kneeling work on a hard, moving carriage. These are the two add-ons most worth buying after your socks."
              picks={[
                { name: "Manduka Yogitoes Hot Yoga Mat Towel", price: "$72.00", url: "https://www.amazon.com/dp/B0D5ZR3R1M?tag=pilatescollective-20", note: "Sold by Amazon.com. Silicone-dot, moisture-activated grip designed for sweaty sessions." },
                { name: "Mizuno T10 Plus Kneepad", price: "$19.99", url: "https://www.amazon.com/dp/B00OP86QSS?tag=pilatescollective-20", note: "Sold by Amazon.com. A padded volleyball sleeve that moves with your knee on the carriage." },
              ]}
              guideHref="/blog/lagree-essentials"
              guideLabel="See the complete Lagree essentials list"
            />

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={h2Style}>Full-toe, closed-toe or toeless?</h2>
              <div className="space-y-4 text-base leading-relaxed" style={bodyStyle}>
                <p>
                  <strong>Full-toe socks</strong> (toesox Low Rise, toesox Bellarina) give each toe its own pocket. The argument for them in Lagree is balance: in single-leg lunges and narrow stances on the platforms, spreading the toes gives you a wider base. The argument against is convenience — they are slower to put on, and some people find toe pockets uncomfortable.
                </p>
                <p>
                  <strong>Closed-toe socks</strong> (TAVI Savvy, TAVI Stacy, most multi-packs) are the easy default. One shape, quick to pull on, and easier to find in a wide range of sizes. You lose independent toe grip, which matters to some people and not at all to others.
                </p>
                <p>
                  <strong>Toeless and open-toe socks</strong> (Tucketts, Gaiam Grippy Studio) leave the toes bare and run cooler — a real plus in a hot Lagree room. Confirm that your studio allows them, and accept a little less protection for your toes during transitions.
                </p>
                <p>
                  If you are unsure, start with one closed-toe pair and one full-toe pair, and after a couple of weeks of classes you will know which you reach for.
                </p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={h2Style}>Lagree socks for men</h2>
              <div className="space-y-4 text-base leading-relaxed" style={bodyStyle}>
                <p>
                  For men, sizing is the usual problem. A sock graded for a smaller foot is not just tight: it can leave the grip area ending before your forefoot, which is exactly where you push in a lunge or plank. The two men&apos;s listings above — the Muezna Men&apos;s Non-Slip Yoga Socks for a single purchase and the CoolMate Men&apos;s Grip Socks 4-pack for a rotation — are the simplest starting points. Size by foot length, not by a shoe-size conversion.
                </p>
              </div>
            </div>

            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#fff4f1", border: "1px solid rgba(139,74,49,0.15)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What to check before buying</h2>
              <ul className="space-y-3">
                {[
                  "Sole coverage. Look at the listing photos and check that the grip print reaches under the ball of the foot, where your weight lands on a moving carriage.",
                  "Fit by foot length. A sock that rotates underfoot is useless mid-set, however good the sole.",
                  "Enough pairs. Lagree is sweaty enough that rewearing is not realistic — plan one pair per class between washes.",
                  "Studio rules. Some studios ask for full coverage or a particular style; check before you buy toeless socks.",
                  "Colour and size listings. Branded socks are often listed separately by colour and size, and prices can differ between them.",
                  "Care. Wash inside out on a cool cycle and air-dry — heat is generally hard on silicone grip prints.",
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
                <ArticleCard title="Lagree Essentials" excerpt="Everything to wear, bring and buy for Lagree — on one page." href="/blog/lagree-essentials" category="Lagree" readTime="12 min read" date="October 2026" />
                <ArticleCard title="Lagree for Beginners" excerpt="What to expect from your first Lagree class, and how to prepare for it." href="/blog/lagree-for-beginners" category="Lagree" readTime="10 min read" date="October 2026" />
                <ArticleCard title="Best Knee Pads for Lagree" excerpt="Wearable sleeves versus cushions for kneeling work on the carriage." href="/blog/best-lagree-knee-pads" category="Lagree" readTime="7 min read" date="October 2026" />
                <ArticleCard title="Best Pilates Grip Socks" excerpt="Verified grip sock picks for reformer and mat Pilates." href="/blog/best-pilates-grip-socks" category="Equipment" readTime="8 min read" date="2026" />
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
