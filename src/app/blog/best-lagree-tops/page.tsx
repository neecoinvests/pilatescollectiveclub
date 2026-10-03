import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import { jsonLdHtml } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Best Lagree Tops (2026): Fitted Tanks That Stay Put",
  description: "The best Lagree tops: fitted, sweat-wicking tanks that stay put in planks and never catch on springs or handles, plus a relaxed tank and how to wear it.",
  keywords: ["lagree tops", "best tops for lagree", "lagree tank top", "what to wear to lagree top", "workout tank for megaformer", "lagree outfit", "lagree workout top", "megaformer top", "fitted workout tank", "what to wear to lagree"],
  openGraph: {
    title: "Best Lagree Tops (2026): Fitted Tanks That Stay Put",
    description: "Five tops for Lagree, chosen for fit, sweat and the Megaformer — with Amazon prices verified October 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-lagree-tops",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-retail-activewear.png", width: 1200, height: 630, alt: "Best Lagree Tops — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Lagree Tops (2026)",
    description: "Fitted, sweat-wicking tanks that stay put through planks and stay clear of springs and handles.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-retail-activewear.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-lagree-tops" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const amazon = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=pilatescollective-20`;

const PRODUCTS = [
  {
    rank: "01",
    name: "CRZ YOGA Butterluxe Racerback Tank",
    price: "$32.00",
    verdict: "Best overall Lagree top",
    description:
      "The default we would suggest for most people. It is a racerback tank in CRZ YOGA's Butterluxe fabric — the same soft-handfeel line as the Butterluxe leggings and biker shorts we recommend elsewhere in our Lagree guides, so it is easy to build a matching outfit. The racerback cut is the right shape for the Megaformer: it leaves your shoulder blades free for plank series, rows and overhead work, and there is no loose sleeve or wide armhole for a handle strap to slip into. Choose your size so the tank sits close to the body rather than draping; that is what stops the hem riding up to your chest when you drop into a plank or flip it over your head in an inversion. It layers over any of the sports bras in our Lagree bra guide. Soft fabrics like this are about comfort first, so if you sweat very heavily, the Under Armour Tech Tank below is the more technical alternative.",
    affiliateUrl: amazon("B09X9Y5S8G"),
    tag: "Best Overall",
  },
  {
    rank: "02",
    name: "Varley Marla Button Placket Tank (Black)",
    price: "$71.68",
    verdict: "Premium pick — studio to street",
    description:
      "For the person whose Lagree class sits between a commute and brunch. Varley is a studio staple, and the Marla is its button-placket tank: the placket gives it more of a going-out look than a standard training tank, which is the point — you can walk out of class and not look like you just walked out of class. In black it pairs with almost anything, including the Varley Freesoft leggings and bralette in our Lagree leggings and bra guides. The Lagree-specific notes are about the buttons and fit. A front placket stays clear of the carriage in supine work, but check how the buttons feel in kneeling and face-down sequences before you commit to it as a class top. And size so it sits close to the body; a top that hangs away will ride up in plank. It is sold on Amazon through Shopbop, an Amazon company. It is a style choice more than a performance one, and priced accordingly.",
    affiliateUrl: amazon("B0FP3MWK1Z"),
    tag: "Premium Pick",
  },
  {
    rank: "03",
    name: "Under Armour Women's Tech Tank",
    price: "$19.99",
    verdict: "Best sweat-wicking value",
    description:
      "Lagree sweat is not the gentle kind. With the studio warm and your muscles under tension for most of the 45 minutes, many people finish soaked, and that is where a technical synthetic tank earns its place over cotton or a soft blend. Cotton holds water and gets heavy and clingy; synthetic training knits are designed to move moisture to the surface where it can evaporate. UA's Tech line is the brand's everyday training fabric, sold here by Amazon.com for under $20, which makes it easy to buy two or three for a weekly rotation. The fit is worth checking for Lagree: if it hangs loose on you, size down or tuck it into a high-waisted legging so the hem cannot flip up in planks or catch on a handle when you reach for it. For the price, it is the most practical way to stock a drawer with tops that can take three or four classes a week.",
    affiliateUrl: amazon("B0C12BNWWN"),
    tag: "Best Value",
  },
  {
    rank: "04",
    name: "CRZ YOGA Quick Dry Racerback Crop Tank",
    price: "$20.00",
    verdict: "Best crop top",
    description:
      "A crop solves the biggest problem with tops on the Megaformer in the simplest possible way: there is no hem to ride up. In planks, inversions and the many moves where your torso tips forward or upside down, a long tank either slides towards your chin or needs tucking. A cropped top ending near the ribs never gets the chance, and it pairs naturally with high-waisted leggings or biker shorts. This one is a quick-dry racerback from CRZ YOGA, so it combines the open-shoulder cut that suits plank and row work with a fabric made to shed sweat rather than hold it. It is a good option for hot studios and for anyone who would otherwise train in just a sports bra but wants a little more coverage. It does sit over a sports bra rather than replace one, so pair it with one of the bras from our Lagree bra guide.",
    affiliateUrl: amazon("B0H1HK895W"),
    tag: "Best Crop",
  },
  {
    rank: "05",
    name: "Under Armour Women's Tech Knockout Tank",
    price: "$30.47",
    verdict: "Best relaxed fit — tuck or tie it",
    description:
      "Not everyone wants a close-fitting top, and that is fine — but on the Megaformer a relaxed tank needs managing. This Under Armour tank has a looser cut than the others here, which is comfortable in a warm studio and more forgiving if you are self-conscious in fitted kit. The trade-off is fabric that hangs away from the body: in a plank it drops towards the carriage, in an inversion it heads for your face, and in lunges and handle work loose fabric has a habit of brushing springs and getting caught under the carriage edge. The fix is simple: tuck it into high-waisted leggings or knot the hem at the side before class. Do that and you get the comfort of a relaxed fit without the hassle. It is sold by Amazon.com. If you find yourself always tying it, the CRZ crop above is the version that does not need it.",
    affiliateUrl: amazon("B0D1613L6S"),
    tag: "Best Relaxed Fit",
  },
];

const FAQS = [
  { q: "What kind of top should you wear to Lagree?", a: "A fitted, sweat-wicking tank or crop worn over a supportive sports bra. Fitted matters because so much of Lagree is in planks, inversions and kneeling work, where a loose top slides towards your chin or flips over your head, and loose fabric can catch on springs, straps and handles. Sweat-wicking matters because Lagree is slow and continuous, and most people sweat heavily for the whole class." },
  { q: "Can you wear a loose T-shirt to Lagree?", a: "You can, but most people only do it once. A loose tee rides up in every plank, hangs down towards the carriage, and can catch on the springs or a handle as you reach for it. If you prefer a relaxed fit, tuck it into high-waisted leggings or tie the hem at the side, or choose a crop so there is no hem to manage at all." },
  { q: "Is a cotton top OK for Lagree?", a: "It is not ideal. Cotton absorbs sweat and holds it, so in a hot, sweaty Lagree class a cotton top gets heavy, clingy and cold once you stop moving. Technical synthetic knits are designed to move moisture to the surface where it can evaporate, which is why most Lagree regulars wear them." },
  { q: "Can you just wear a sports bra to Lagree?", a: "Yes, and plenty of people do, especially in hot studios. Longline sports bras are popular for exactly this reason, because the longer band gives more coverage than a standard crop. A tank or crop on top is a personal preference — useful if you want more coverage or are heading out after class." },
  { q: "How many Lagree tops do you need?", a: "One per class between washes. Lagree sweat is continuous and technical fabrics hold odour once worn damp, so rewearing is not realistic. Two or three tops for a two- or three-class week is a sensible starting point. Wash cold and air dry to protect the stretch fibres." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Lagree Tops (2026): Fitted Tanks That Stay Put",
      "description": "Tops for Lagree and Megaformer classes, chosen for a close fit through planks and inversions, sweat management, and staying clear of springs and handles.",
      "url": "https://pilatescollectiveclub.com/blog/best-lagree-tops",
      "datePublished": "2026-10-02",
      "dateModified": "2026-10-02",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-retail-activewear.png", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-lagree-tops" },
    },
    {
      "@type": "ItemList",
      "name": "Best Lagree Tops (2026)",
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
        { "@type": "ListItem", "position": 3, "name": "Best Lagree Tops", "item": "https://pilatescollectiveclub.com/blog/best-lagree-tops" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
  ],
};

export default function BestLagreeTopsPage() {
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
              Best Lagree Tops<br /><span style={{ color: "#8b4a31" }}>(2026)</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Published October 2026 · 8 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Every product link on this page goes to Amazon. As an Amazon Associate we earn from qualifying purchases, at no extra cost to you. Listings and prices were verified on October 2, 2026 and can change.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              The best Lagree top is the one you forget you are wearing. On the Megaformer that means fitted rather than loose: so much of the class happens in planks, inversions and kneeling work that a loose top spends the session sliding towards your chin, flipping over your head, or brushing the springs and handles. Add the heavy, continuous sweat of a slow-tempo class and the brief is clear — close to the body, sweat-wicking, and layered over a sports bra that does the support work. Below are four tops on Amazon that fit that brief, plus one relaxed tank and how to wear it.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-retail-activewear.png" alt="Fitted training tops on a studio retail rail" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What a Lagree class asks of a top</h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
                <p>A top does less work than any other piece of Lagree kit — your sports bra handles support, your grip socks handle traction — but it is the piece most likely to get in the way. The Megaformer puts your body in positions most gym classes do not. You hold planks on a moving carriage with your hands on the front platform, you tip forward into bear and crawl positions, you kneel on the carriage, and you reach for handles and straps at the ends of the machine. Every one of those positions tips your torso forward or upside down, and gravity takes a loose hem with it.</p>
                <p>That is the main reason fitted beats loose. A top that sits close to the body stays where you put it; one that drapes rides up to your chest in a plank, flips over your head in an inversion, and hangs down towards the carriage where it can brush the springs or get caught under a handle. It sounds minor until you have spent a 45-minute class tugging your shirt back down between every set — or had to stop mid-plank because you cannot see.</p>
                <p>The second factor is sweat. Lagree is slow by design, with long time under tension and very little rest, and studios tend to run warm. Most people sweat heavily and continuously, which is why synthetic training knits that move moisture away from the skin are the norm, and cotton is not. The third is layering: almost everyone wears a top over a sports bra, so the top only needs to cover and stay put. Racerback cuts work well here because they leave the shoulder blades free and line up with most sports bra backs.</p>
                <p>How we chose: we picked fitted tanks, a crop and one relaxed tank from established brands on Amazon, confirmed each listing was in stock, and verified the prices on October 2, 2026. The notes below explain our reasoning — the cut, the fabric each brand lists, and how that plays out on the Megaformer — based on the listings and general fit logic, not on lab results.</p>
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{PRODUCTS.length} Tops · Ranked</p>
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
                  None of these tops are made for Lagree, and nothing about the method calls for one that is. A good fitted training tank from a mainstream brand does the job: close to the body so it stays put through planks and inversions, a fabric that handles heavy sweat, and no loose fabric, long ties or dangling details near the springs and handles.
                </p>
              </div>
            </div>

            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#fff4f1", border: "1px solid rgba(139,74,49,0.15)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What to check</h2>
              <ul className="space-y-3">
                {[
                  "Fitted over loose. A close fit stays put in planks and inversions; a draping top rides up and flips over your head.",
                  "Do the plank test at home: drop into a plank in front of a mirror. If the hem slides towards your chest, size down, tuck it, or choose a crop.",
                  "Avoid long ties, drawstrings and loose fabric near the waist — they can catch on springs, straps and the carriage edge.",
                  "Choose synthetic, sweat-wicking fabric over cotton. Cotton holds sweat and gets heavy and clingy.",
                  "Racerbacks leave your shoulder blades free for rows and plank work and sit neatly over most sports bra backs.",
                  "Buy two or three. Lagree sweat is continuous, and technical fabric holds odour once worn damp.",
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
                <ArticleCard title="Best Sports Bra for Lagree" excerpt="High, mid and light support picks for Megaformer classes — and what to check on the back before you buy." href="/blog/best-sports-bra-for-lagree" category="Lagree" readTime="9 min read" date="October 2026" imageUrl="/pictures/samantha-sheppard-b8Q5fHBsyik-unsplash.jpg" />
                <ArticleCard title="Best Leggings for Lagree" excerpt="Fabric, rise and grip on a moving carriage — the leggings that stay put through lunges and planks." href="/blog/best-leggings-for-lagree" category="Lagree" readTime="8 min read" date="October 2026" imageUrl="/pictures/stitch-retail-activewear.png" />
                <ArticleCard title="Best Lagree Shorts" excerpt="Biker shorts that do not ride up on the carriage, plus men's options with and without liners." href="/blog/best-lagree-shorts" category="Lagree" readTime="8 min read" date="October 2026" imageUrl="/pictures/stitch-retail-activewear.png" />
                <ArticleCard title="Lagree Essentials" excerpt="Everything worth bringing to a Lagree class, from grip socks to a sweat towel." href="/blog/lagree-essentials" category="Lagree" readTime="8 min read" imageUrl="/pictures/stitch-hands-on-carriage.png" />
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
