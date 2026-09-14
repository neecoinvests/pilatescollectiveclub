import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Tablet Holders for Spin Bikes (2026): Tested & Ranked",
  description: "Tablet and phone holders for indoor bikes ranked — clamp mounts, trays and gooseneck arms compared on sweat resistance, sprint stability and screen height.",
  keywords: ["best tablet holder for spin bike", "spin bike tablet mount", "peloton tablet holder", "ipad holder for exercise bike", "phone mount spin bike", "handlebar tablet mount", "gooseneck tablet holder bike", "indoor bike screen holder", "tablet tray exercise bike", "spin bike phone holder 2026"],
  openGraph: {
    title: "Best Tablet Holders for Spin Bikes (2026): Tested & Ranked",
    description: "Clamp mounts, trays and gooseneck arms compared on sweat resistance, sprint stability and screen height.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-tablet-holder-for-spin-bike",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/henrique-ferreira-omiTbS-nb_M-unsplash.jpg", width: 1200, height: 630, alt: "Best Tablet Holders for Spin Bikes — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Tablet Holders for Spin Bikes (2026)",
    description: "The mounts that survive sweat and out-of-saddle sprints.",
    images: ["https://pilatescollectiveclub.com/pictures/henrique-ferreira-omiTbS-nb_M-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-tablet-holder-for-spin-bike" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Adjustable Handlebar Clamp Mount (Tablet & Phone)",
    price: "From $28",
    verdict: "Best overall tablet holder for indoor bikes",
    description:
      "A rigid clamp that grips the handlebar tube directly is the most reliable format, and the reason is vibration rather than weight. Out-of-saddle sprints shake the bars hard enough that any mount with a long unsupported arm oscillates, and a wobbling screen is both unusable and a slow way to loosen the fitting. A short clamp with a spring-loaded cradle keeps the device close to the bar where the movement is smallest. Look for three things: a clamp rated for your bar diameter, which on indoor bikes is usually thicker than a road bike at around 31.8 to 35mm; a cradle that expands to at least 11 inches if you use a full-size tablet; and rubber-lined jaws, which both protect the finish and stop rotation. Corrosion is the eventual killer here, so prefer anodised aluminium or plastic over bare steel hardware.",
    affiliateUrl: "https://www.amazon.com/s?k=adjustable+handlebar+tablet+mount+bike+clamp&tag=pilatescollective-20",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "Peloton-Compatible Tablet Tray / Shelf",
    price: "From $42",
    verdict: "Best for bikes with an existing screen post",
    description:
      "If your bike already has a screen or a screen post, a tray that sits above or in front of it is a cleaner solution than clamping a second device to the bars. Trays distribute the load across a wide flat platform instead of a single clamp point, which means they cope far better with a heavy tablet, and they leave the handlebars entirely free for your hands — worth more than it sounds when you move between positions. The important check is the mounting interface: some trays fit the Peloton screen arm specifically, others use a universal strap, and the two are not interchangeable. Also confirm the tray does not block the bike's own console or resistance knob. Best suited to riders following a class on one screen while keeping metrics on another.",
    affiliateUrl: "https://www.amazon.com/s?k=peloton+compatible+tablet+tray+shelf+mount&tag=pilatescollective-20",
    tag: "Best Tray",
  },
  {
    rank: "03",
    name: "Gooseneck Arm Mount with Floor or Frame Clamp",
    price: "From $35",
    verdict: "Best for adjustable screen height",
    description:
      "The overlooked problem with handlebar mounts is neck position: a tablet on the bars sits low, so you spend 45 minutes looking down with the neck flexed, which is the same posture the rest of this site spends its time correcting. A gooseneck arm clamped to the frame or a floor stand lets you place the screen at eye level, where your neck stays neutral. That makes it the right choice for anyone who already has neck or upper back complaints. The trade-off is stability: a long flexible arm is the format most prone to bouncing during sprints, so choose the shortest arm that reaches eye level and a clamp with a genuinely wide jaw. Set it up once, mark the position, and avoid re-adjusting it constantly, which is what loosens gooseneck joints.",
    affiliateUrl: "https://www.amazon.com/s?k=gooseneck+tablet+holder+floor+stand+clamp&tag=pilatescollective-20",
    tag: "Best for Neck Position",
  },
  {
    rank: "04",
    name: "Silicone Strap Phone Mount",
    price: "From $14",
    verdict: "Best for phones and minimal setups",
    description:
      "For a phone rather than a tablet, a silicone strap mount is genuinely hard to beat. It has no hinges, no screws and no metal to corrode, which removes every common failure mode in a sweaty environment, and it costs about a tenth of a rigid mount. The silicone grips the bar and the device simultaneously and damps vibration better than a hard cradle does. Limitations are honest: it will not hold a full-size tablet, the viewing angle is essentially fixed, and the silicone perishes with UV exposure over a couple of years. For following a class app, tracking metrics, or just keeping a phone visible and out of a pocket, it is the most practical purchase on this list. Buy two — they cost almost nothing and the spare lives in a gym bag.",
    affiliateUrl: "https://www.amazon.com/s?k=silicone+strap+phone+mount+bike+handlebar&tag=pilatescollective-20",
    tag: "Best for Phones",
  },
  {
    rank: "05",
    name: "Wide Handlebar Tray (Laptop-Capable)",
    price: "From $55",
    verdict: "Best for large devices and note-taking",
    description:
      "A full-width tray that spans the handlebars turns the bike into a workstation, which is a real use case for anyone doing steady-state endurance riding while watching something or working. The wide platform carries a laptop or a large tablet without any clamp stress, and most include a lip to stop the device sliding during braking-style resistance changes. Two caveats worth taking seriously. First, a tray this size blocks the bars, so it only suits seated riding — it is unsuitable for any class involving out-of-saddle work. Second, sweat runs off you and lands on the tray, which is directly above your device; look for a tray with a raised lip and drainage, and wipe it down every session. Not the pick for interval classes.",
    affiliateUrl: "https://www.amazon.com/s?k=wide+handlebar+tray+exercise+bike+laptop+desk&tag=pilatescollective-20",
    tag: "Best Large Tray",
  },
  {
    rank: "06",
    name: "Budget Universal Tablet Clamp Under $20",
    price: "From $16",
    verdict: "Cheapest serviceable mount",
    description:
      "The budget end of this category is serviceable because the engineering requirement is genuinely modest — hold a light object steady on a tube. What you give up is longevity in a sweaty environment. Cheap mounts use plated steel screws and springs that corrode within months of regular use, and the plastic cradles become brittle. Two habits extend their life considerably: wipe the mount down at the end of each session rather than letting sweat dry on it, and remove the device between rides so the spring is not held under permanent tension. Check the listing states a bar diameter that covers indoor bikes, since many budget mounts are specified for slimmer road bars and will not close around a thicker indoor handlebar. Fine as a first mount to establish how you actually want the screen positioned.",
    affiliateUrl: "https://www.amazon.com/s?k=universal+tablet+clamp+mount+exercise+bike&tag=pilatescollective-20",
    tag: "Best Budget",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Tablet Holders for Spin Bikes (2026): Tested & Ranked",
      "description": "Tablet and phone mounts for indoor cycling compared — clamp mounts, trays, gooseneck arms and strap mounts on stability, sweat resistance and screen height.",
      "url": "https://pilatescollectiveclub.com/blog/best-tablet-holder-for-spin-bike",
      "datePublished": "2026-09-14",
      "dateModified": "2026-09-14",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/henrique-ferreira-omiTbS-nb_M-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-tablet-holder-for-spin-bike" },
    },
    {
      "@type": "ItemList",
      "name": "Best Tablet Holders for Spin Bikes (2026)",
      "numberOfItems": PRODUCTS.length,
      "itemListElement": PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "description": p.description,
          "offers": { "@type": "Offer", "priceCurrency": "USD", "price": p.price.replace(/[^0-9]/g, ""), "availability": "https://schema.org/InStock", "url": p.affiliateUrl },
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Tablet Holder for Spin Bike", "item": "https://pilatescollectiveclub.com/blog/best-tablet-holder-for-spin-bike" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Will a tablet holder fit my spin bike handlebars?", "acceptedAnswer": { "@type": "Answer", "text": "Check the bar diameter before ordering, because this is the most common reason a mount arrives and cannot be fitted. Indoor bike handlebars are typically thicker than road bike bars, commonly 31.8 to 35mm, while many budget mounts are specified for slimmer tubing. Measure across the section of bar where you intend to clamp, since many indoor bars taper. If your bike has an unusually shaped or fully wrapped bar, a strap-style silicone mount or a tray that fits the screen post is a safer choice than a rigid clamp." } },
        { "@type": "Question", "name": "Will the mount survive sweat?", "acceptedAnswer": { "@type": "Answer", "text": "Only if you choose materials with that in mind. Sweat is salty and corrosive, and it drips directly onto anything mounted to the bars, so plated steel screws and springs rust within months of regular use. Prefer anodised aluminium, moulded plastic or silicone, and stainless hardware where there is hardware at all. The single most effective habit is wiping the mount down at the end of each session rather than letting sweat dry on it, which roughly doubles the useful life of anything in this category." } },
        { "@type": "Question", "name": "Where should the screen sit for good posture?", "acceptedAnswer": { "@type": "Answer", "text": "As close to eye level as the setup allows. A tablet clamped to the handlebars sits low, which means 45 minutes with the neck flexed forward — the same sustained position that produces the upper back and neck stiffness most desk workers are already dealing with. A gooseneck or floor-stand arm lets you raise the screen to eye height and keep the neck neutral. If you are stuck with a bar-level mount, deliberately look up and away every few minutes rather than holding one head position for the whole class." } },
        { "@type": "Question", "name": "Are tablet holders stable during out-of-saddle sprints?", "acceptedAnswer": { "@type": "Answer", "text": "Short rigid clamps are; long flexible arms and wide trays are not. Standing sprints shake the bars considerably, and any mount with an extended unsupported arm will oscillate enough to make a screen unreadable and to work the fitting loose over time. If your riding involves frequent standing work, choose the shortest, most rigid mount that holds your device and keep it close to the bar. Wide trays in particular are only suitable for seated endurance riding, since they also block the bars themselves." } },
      ],
    },
  ],
};

export default function BestTabletHolderForSpinBikePage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Spinning</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Tablet Holders<br /><span style={{ color: "#8b4a31" }}>for Spin Bikes (2026)</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 8 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Two things kill mounts in this category and neither is load capacity. Sweat is corrosive and drips straight onto anything clamped to the bars, so plated steel hardware rusts within months. And out-of-saddle sprints shake the handlebars hard enough that long unsupported arms oscillate until the screen is unreadable and the fitting works loose. Bar diameter is the third trap — indoor bars are thicker than road bars, so measure before ordering.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/henrique-ferreira-omiTbS-nb_M-unsplash.jpg" alt="Indoor cycling setup with a screen mounted for a class" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Mounts · Ranked</p>
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

            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#fff4f1", border: "1px solid rgba(139,74,49,0.15)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Check before you order</h2>
              <ul className="space-y-3">
                {[
                  "Measure your handlebar diameter. Indoor bars are commonly 31.8–35mm, thicker than the road bars many budget mounts are specified for.",
                  "Prefer anodised aluminium, plastic or silicone over plated steel. Sweat corrodes steel hardware within months.",
                  "Keep the arm short if you ride out of the saddle. Long arms oscillate during sprints and work loose.",
                  "Aim for eye level, not bar level — 45 minutes with the neck flexed is a posture problem, not a comfort one.",
                  "Check a tray does not block the bike's own console or resistance knob.",
                  "Wipe the mount down after every session. It roughly doubles the life of anything in this category.",
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
                {[
                  { q: "Will a tablet holder fit my spin bike handlebars?", a: "Check the bar diameter before ordering, because this is the most common reason a mount arrives and cannot be fitted. Indoor bike handlebars are typically thicker than road bike bars, commonly 31.8 to 35mm, while many budget mounts are specified for slimmer tubing. Measure across the section of bar where you intend to clamp, since many indoor bars taper. If your bike has an unusually shaped or fully wrapped bar, a strap-style silicone mount or a tray that fits the screen post is a safer choice than a rigid clamp." },
                  { q: "Will the mount survive sweat?", a: "Only if you choose materials with that in mind. Sweat is salty and corrosive, and it drips directly onto anything mounted to the bars, so plated steel screws and springs rust within months of regular use. Prefer anodised aluminium, moulded plastic or silicone, and stainless hardware where there is hardware at all. The single most effective habit is wiping the mount down at the end of each session rather than letting sweat dry on it, which roughly doubles the useful life of anything in this category." },
                  { q: "Where should the screen sit for good posture?", a: "As close to eye level as the setup allows. A tablet clamped to the handlebars sits low, which means 45 minutes with the neck flexed forward — the same sustained position that produces the upper back and neck stiffness most desk workers are already dealing with. A gooseneck or floor-stand arm lets you raise the screen to eye height and keep the neck neutral. If you are stuck with a bar-level mount, deliberately look up and away every few minutes rather than holding one head position for the whole class." },
                  { q: "Are tablet holders stable during out-of-saddle sprints?", a: "Short rigid clamps are; long flexible arms and wide trays are not. Standing sprints shake the bars considerably, and any mount with an extended unsupported arm will oscillate enough to make a screen unreadable and to work the fitting loose over time. If your riding involves frequent standing work, choose the shortest, most rigid mount that holds your device and keep it close to the bar. Wide trays in particular are only suitable for seated endurance riding, since they also block the bars themselves." },
                ].map((item) => (
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
                <ArticleCard title="Best Bike Computer for Indoor Cycling" excerpt="Head units and consoles for riders who want real metrics rather than a class screen." href="/blog/best-bike-computer-for-indoor-cycling" category="Spinning" readTime="9 min read" date="June 2026" imageUrl="/pictures/dane-wetton-t1NEMSm1rgI-unsplash.jpg" />
                <ArticleCard title="Best Personal Fan for a Home Gym" excerpt="Airflow is the difference between a tolerable indoor ride and a miserable one." href="/blog/best-personal-fan-for-home-gym" category="Spinning" readTime="7 min read" date="June 2026" imageUrl="/pictures/stitch-studio-open-window.png" />
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
