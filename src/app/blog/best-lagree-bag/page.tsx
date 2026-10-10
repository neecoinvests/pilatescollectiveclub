import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import UpsellCTA from "@/components/UpsellCTA";
import { jsonLdHtml } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Lagree Bag (2026): Best Gym Bags for Lagree Class",
  description: "The best Lagree bag keeps a soaked towel and studio shoes away from clean clothes. Six picks, from $28.49 bags with shoe and wet pockets to a 37L gym bag.",
  keywords: ["lagree bag", "best bag for lagree", "gym bag for lagree class", "lagree gym bag shoe compartment", "what to bring to lagree", "megaformer gym bag", "gym bag with wet compartment", "gym bag with shoe compartment", "lagree tote bag", "lagree bag 2026"],
  openGraph: {
    title: "Lagree Bag (2026): Best Gym Bags for Lagree Class",
    description: "Lagree is sweaty. Why a wet compartment and a separate shoe compartment matter most, plus six bags worth carrying to class.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-lagree-bag",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-studio-changing-area.png", width: 1200, height: 630, alt: "Best Lagree Bag — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lagree Bag (2026): Best Gym Bags for Lagree",
    description: "Wet compartment, shoe compartment, room for a towel and bottle — six bags for Megaformer classes.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-studio-changing-area.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-lagree-bag" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Fitgriff Gym Bag with Shoe & Wet Compartment",
    price: "$39.95",
    verdict: "Best wet/shoe separation",
    description:
      "This is the bag the rest of the list is measured against, because its listing names the exact two features a Lagree bag needs: a shoe compartment and a wet compartment. Lagree runs at a slow tempo with long time under tension, which means you sweat steadily for the whole class rather than in short bursts, and you leave with a damp towel, damp grip socks and often a damp top. A dedicated wet compartment gives all of that somewhere to go that is not on top of your clean change of clothes or your laptop. The separate shoe compartment does the same job for the trainers you walked in with, which you take off at the door because Megaformer classes are done in grip socks. At $39.95 it sits in the middle of the price range, and it is the most direct answer to the question this page is really asking.",
    affiliateUrl: "https://www.amazon.com/dp/B07RQHPBHC?tag=pilatescollective-20",
    brandDirect: false,
    tag: "Best Wet/Shoe Separation",
  },
  {
    rank: "02",
    name: "Vooray Burner XL Gym Bag 37L",
    price: "$80.00",
    verdict: "Premium pick with the most room",
    description:
      "If your Lagree class is one stop in a longer day — office before, dinner after — capacity starts to matter more than anything else, and at 37 litres the Burner XL is the largest bag on this list. That is enough volume for the full Lagree load: a full-length grip towel for the carriage, a smaller hand towel, a water bottle, grip socks, a complete change of clothes and the shoes you arrived in, without having to compress everything into a ball. This listing is sold through The Active Footwear Store. It is the most expensive bag here at $80.00, so it makes most sense for people who commute straight to and from class several times a week. Check the current listing photos for the internal layout before buying if a sealed wet pocket is a must for you.",
    affiliateUrl: "https://www.amazon.com/dp/B0D64H9SXB?tag=pilatescollective-20",
    brandDirect: false,
    tag: "Premium Pick",
  },
  {
    rank: "03",
    name: "Under Armour Undeniable 5.0 Duffle MD",
    price: "$37.50",
    verdict: "Best classic duffle",
    description:
      "Some people simply prefer a traditional duffle: one big main compartment you can open wide, throw a towel into, and find things in without unpacking. The Undeniable 5.0 is Under Armour's long-running duffle line, this is the medium size, and it is sold by Amazon.com, which keeps returns simple if the size turns out wrong. A duffle shape works well for Lagree because the bulkiest things you carry — a rolled grip towel and a change of clothes — are soft and long, which suits a wide opening better than a narrow backpack. The trade-off is organisation: if you want guaranteed separation for wet kit and shoes, confirm the compartment layout on the listing, or add a washable pouch for the damp towel. At $37.50 it is a durable, no-fuss middle option from a brand most people already trust for training gear.",
    affiliateUrl: "https://www.amazon.com/dp/B093LSTLVK?tag=pilatescollective-20",
    brandDirect: false,
    tag: "Best Duffle",
  },
  {
    rank: "04",
    name: "BAGSMART Gym Bag for Women (Shoe Compartment)",
    price: "$28.49",
    verdict: "Best value",
    description:
      "At $28.49, this is the cheapest route to the single feature that makes the biggest everyday difference: a shoe compartment. Studio floors are grip-sock territory, so the trainers you walk in with come off at the door, and putting outdoor soles back into the same space as a clean top after class is the habit a separate shoe section breaks. It is a sensible first Lagree bag for anyone who is still deciding whether the class is a three-times-a-week habit, and a perfectly good long-term one for people who go straight home after class and do not need a full change of clothes. Pair it with a separate washable pouch for your sweaty towel and socks if you want the same wet-dry separation as the Fitgriff.",
    affiliateUrl: "https://www.amazon.com/dp/B0DMS9Q287?tag=pilatescollective-20",
    brandDirect: false,
    tag: "Best Value",
  },
  {
    rank: "05",
    name: "Sportsnew Tote Yoga Mat Gym Bag 20L",
    price: "$29.99",
    verdict: "Best tote",
    description:
      "A tote is the right shape for people who would rather carry a shoulder bag than a duffle, and this one covers both Lagree essentials in a 20-litre body: its listing names a shoe compartment and a wet pocket. Twenty litres is smaller than the duffles above but comfortably enough for a towel, bottle, grip socks and a top to change into, and the tote format slides more easily into a studio cubby than a long duffle does. It is also designed as a yoga-mat bag, so if you take mat Pilates or yoga on other days you can carry a mat with it — you will not need one for Lagree itself, since you work on the machine. At $29.99 it is one of the two cheapest bags here, alongside the BAGSMART; choose between them on shape, since both cover the shoe question.",
    affiliateUrl: "https://www.amazon.com/dp/B0BHP38PNG?tag=pilatescollective-20",
    brandDirect: false,
    tag: "Best Tote",
  },
  {
    rank: "06",
    name: "Lululemon Everywhere Belt Bag",
    price: "~$38 (lululemon.com)",
    verdict: "Best for phone and keys only",
    description:
      "Not sold on Amazon — this links to lululemon.com. This is not a gym bag, and it is here because a lot of Lagree regulars do not carry one. If you live or work close to your studio and arrive already dressed, the only things you need are a phone, keys, a card and perhaps a hair tie, and a small crossbody belt bag holds exactly that and goes straight into a cubby. It is also a useful second bag for people who carry a duffle: keep valuables in the belt bag on your person or in the cubby and leave the damp duffle on the floor. Because it is bought directly from Lululemon, we do not earn a commission on it.",
    affiliateUrl: "https://shop.lululemon.com/",
    brandDirect: true,
    tag: "Brand-Direct Pick",
  },
];

const AMAZON_PRODUCTS = PRODUCTS.filter((p) => !p.brandDirect);

const FAQS = [
  { q: "What should I look for in a Lagree bag?", a: "Two features matter more than anything else: a wet compartment and a separate shoe compartment. Lagree is a slow-tempo, long time-under-tension workout and most people leave class with a damp towel, damp grip socks and a sweaty top, so a wet compartment keeps that away from clean clothes. Megaformer classes are done in grip socks, so the shoes you arrive in need their own space too. After that, look for enough room for a towel, a water bottle and a change of clothes, and a shape that fits your studio's cubbies." },
  { q: "What should I bring to a Lagree class?", a: "Grip socks (most studios require them), a water bottle, and a towel — many people bring a small hand towel for face and hands plus a full-length grip towel to lay over the carriage. Add a change of clothes if you are not heading straight home, and something for your phone and keys. Leave the yoga mat at home: you work on the machine, not on the floor. Check your studio's own rules, since some provide towels and some sell grip socks at the desk." },
  { q: "Do I need a gym bag with a shoe compartment for Lagree?", a: "It is not essential, but it is the most useful feature for Lagree specifically. Studios have you take outdoor shoes off and train in grip socks, so you are carrying a pair of shoes in and out of every class. A shoe compartment keeps outdoor soles separate from your clean clothes and towel. If your bag does not have one, a washable drawstring shoe pouch does the same job." },
  { q: "Is a duffle, tote or backpack better for Lagree?", a: "It comes down to how you travel and what your studio has for storage. A duffle opens wide and suits bulky, soft items like a rolled towel and a change of clothes. A tote is easier to carry on one shoulder and tends to fit studio cubbies well. A backpack is best if you cycle or walk a long way to class. Whichever shape you choose, the wet and shoe separation matters more than the format." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Lagree Bag (2026): Best Gym Bags for Lagree Class",
      "description": "Gym bags compared for Lagree and Megaformer classes — wet compartments, shoe compartments, capacity for a towel, bottle and change of clothes, and studio-friendly shapes.",
      "url": "https://pilatescollectiveclub.com/blog/best-lagree-bag",
      "datePublished": "2026-10-02",
      "dateModified": "2026-10-02",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-studio-changing-area.png", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-lagree-bag" },
    },
    {
      "@type": "ItemList",
      "name": "Best Bags for Lagree (2026)",
      "numberOfItems": AMAZON_PRODUCTS.length,
      "itemListElement": AMAZON_PRODUCTS.map((p, i) => ({
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
        { "@type": "ListItem", "position": 3, "name": "Best Lagree Bag", "item": "https://pilatescollectiveclub.com/blog/best-lagree-bag" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
  ],
};

export default function BestLagreeBagPage() {
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
              The Best Lagree Bag<br /><span style={{ color: "#8b4a31" }}>for Class (2026)</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated October 2026 · 9 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Most links on this page go to Amazon, and we earn a small commission on qualifying purchases. Amazon prices were checked on 2 October 2026 and can change. One pick (Lululemon) is not sold on Amazon and links directly to lululemon.com; we earn no commission on it.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Lagree is the sweatiest thing most people do in a studio. Slow tempo and long time under tension mean you sweat steadily for the whole class, and you walk out with a damp towel, damp grip socks and a top you would rather not fold back in with your clean clothes. That is why the best Lagree bag is not the prettiest or the biggest — it is the one that separates wet kit and outdoor shoes from everything else.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-studio-changing-area.png" alt="Studio changing area with gym bags — packing for a Lagree class" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
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
                  >{p.brandDirect ? "Shop →" : "Buy →"}</a>
                </div>
              ))}
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What makes a good Lagree bag</h2>
              <div className="space-y-5 text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
                <p>
                  Any bag will carry your things to a Megaformer class. The question is what it carries home. A Lagree session is built around slow, controlled reps held under tension, planks and kneeling work on a moving carriage, and lunges off the platforms, and the result is steady, heavy sweat. By the end you are packing a towel you used on the carriage, grip socks you trained in and possibly a top you changed out of. Put all of that in one open compartment with your clean clothes, your work things or your shoes, and the bag starts to smell within weeks.
                </p>
                <p>
                  <strong style={{ fontWeight: 600, color: "#1b1c1c" }}>1. A wet compartment.</strong> A separate pocket for damp kit is the single most useful feature. It keeps sweat away from dry items on the way home and makes it obvious what needs to go straight into the wash. If you love a bag that does not have one, a washable zip pouch inside the main compartment gets you most of the way there.
                </p>
                <p>
                  <strong style={{ fontWeight: 600, color: "#1b1c1c" }}>2. A separate shoe compartment.</strong> Lagree studios have you train in grip socks, so the trainers you arrive in come off at the door and travel home with you. A shoe compartment keeps outdoor soles away from your towel and change of clothes. This is the feature most people do not think about until they have a bag full of street grit.
                </p>
                <p>
                  <strong style={{ fontWeight: 600, color: "#1b1c1c" }}>3. Room for the real load.</strong> A full Lagree kit is bulkier than it sounds: a hand towel, often a full-length grip towel for the carriage, a water bottle, grip socks, a change of clothes and your shoes. If you commute straight from work, add whatever you carry all day. Size up rather than down.
                </p>
                <p>
                  <strong style={{ fontWeight: 600, color: "#1b1c1c" }}>4. A shape that fits your studio.</strong> Many boutique studios have small cubbies rather than full lockers. A tote or medium duffle usually fits; an oversized bag may end up on the floor by the door. If you are not sure, ask the front desk what most members bring.
                </p>
              </div>
            </div>

            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Picks · Ranked</p>
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

            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.4)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Not Lagree-specific? That&apos;s fine</h2>
              <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                None of these bags is made for Lagree, and you do not need one that is. There is nothing about a Megaformer class that a bag has to be designed around beyond what any sweaty studio workout demands: somewhere for wet kit, somewhere for shoes, and room for a towel and bottle. We chose these because their listings name those features or, in the case of the duffle and the larger bag, because they offer the capacity for a full change of clothes. Prices were checked on Amazon on 2 October 2026; the Lululemon price is approximate and taken from lululemon.com.
              </p>
            </div>

            <UpsellCTA
              eyebrow="Pack It Properly"
              title="What goes in a Lagree bag"
              body="A good bag is only half the job. The two things almost every Lagree regular packs are a grip towel to lay over the carriage when it gets slick with sweat, and a pair of proper grip socks — most studios require them."
              picks={[
                { name: "Manduka Yogitoes Hot Yoga Mat Towel", price: "$72.00", url: "https://www.amazon.com/dp/B0D5ZR3R1M?tag=pilatescollective-20", note: "Sold by Amazon.com. Moisture-activated grip for the carriage." },
                { name: "toesox Low Rise Grip Socks 2-Pack", price: "$30.00", url: "https://www.amazon.com/dp/B07QHNDHW3?tag=pilatescollective-20", note: "The original studio grip-sock brand." },
              ]}
              guideHref="/blog/lagree-essentials"
              guideLabel="See the complete Lagree essentials list"
            />

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What to bring to Lagree</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
                Use this as a packing checklist. Studio policies vary — some provide towels, most sell grip socks at the desk — so check yours before your first class.
              </p>
              <ul className="space-y-3">
                {[
                  "Grip socks. Most Lagree studios require them, and they keep your feet planted on the carriage and platforms during lunges and planks.",
                  "A hand towel for your face and hands, so grip on the handles and straps stays reliable through long holds.",
                  "A full-length grip towel if your studio allows one on the carriage — useful once sweat makes the surface slippery in kneeling and plank work.",
                  "A water bottle. Long time under tension in a warm room is more dehydrating than it feels.",
                  "A change of clothes if you are not going straight home, and a washable pouch or the bag's wet compartment for what you trained in.",
                  "Phone, keys and card — in a small belt bag if you want them on you rather than in a cubby.",
                  "What you do not need: a yoga mat. Lagree is done on the machine.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    <span className="font-semibold" style={{ color: "#8b4a31" }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#fff4f1", border: "1px solid rgba(139,74,49,0.15)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What to avoid</h2>
              <ul className="space-y-3">
                {[
                  "One big open compartment with no way to separate wet kit. Sweaty towels and socks on top of clean clothes is how gym bags start to smell.",
                  "Leaving damp kit zipped in the bag overnight. Even the best wet compartment is for the journey home — unpack and air everything as soon as you get in.",
                  "Bags too large for your studio's cubbies. Check what storage your studio has before buying the biggest duffle you can find.",
                  "Fabric you cannot clean. Your bag will sit on studio floors and carry sweaty kit; pick something you can wipe down or wash.",
                  "Carrying valuables loose in the main compartment. Keep phone and keys in a zip pocket or a small belt bag.",
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
                <ArticleCard title="Best Sweat Towel for Lagree" excerpt="A hand towel and a carriage-length grip towel do two different jobs. Here is what to pack for each." href="/blog/best-sweat-towel-for-lagree" category="Lagree" readTime="8 min read" date="October 2026" imageUrl="/pictures/stitch-water-towel-bench.png" />
                <ArticleCard title="Lagree Socks" excerpt="The grip socks that keep your feet planted on a moving carriage and platforms." href="/blog/best-lagree-grip-socks" category="Lagree" readTime="8 min read" date="October 2026" imageUrl="/pictures/stitch-grip-socks-footbar.png" />
                <ArticleCard title="Lagree Essentials" excerpt="Everything you need for your first Megaformer class, and what you can skip." href="/blog/lagree-essentials" category="Lagree" readTime="8 min read" date="October 2026" imageUrl="/pictures/stitch-studio-shelf-props.png" />
                <ArticleCard title="Best Bags for Pilates" excerpt="Studio bags for reformer and mat classes, from totes to duffles." href="/blog/best-pilates-bag" category="Equipment" readTime="7 min read" date="October 2026" imageUrl="/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best Lagree studios in Los Angeles..." />
      </main>
      <Footer />
    </>
  );
}
