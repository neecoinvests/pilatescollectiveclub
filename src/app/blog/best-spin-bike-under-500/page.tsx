import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Spin Bikes Under $500 (2026): Tested & Ranked",
  description: "Indoor cycling bikes under $500 ranked on flywheel weight, drive type and resistance — plus why magnetic beats friction at this price and what you give up.",
  keywords: ["best spin bike under 500", "cheap spin bike", "budget indoor cycling bike", "yosuda indoor cycling bike", "sunny health spin bike", "magnetic spin bike under 500", "belt drive spin bike", "affordable exercise bike", "spin bike for home under 500", "budget spin bike 2026"],
  openGraph: {
    title: "Best Spin Bikes Under $500 (2026): Tested & Ranked",
    description: "Flywheel weight, drive type and resistance compared — and why magnetic beats friction at this price.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-spin-bike-under-500",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg", width: 1200, height: 630, alt: "Best Spin Bikes Under $500 — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Spin Bikes Under $500 (2026)",
    description: "The budget indoor bikes worth buying, and the specs that actually matter.",
    images: ["https://pilatescollectiveclub.com/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-spin-bike-under-500" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Yosuda Indoor Cycling Bike",
    price: "From $299",
    verdict: "Best overall spin bike under $500",
    description:
      "The Yosuda has become the default budget recommendation for a straightforward reason: it gets the two specifications that matter right at a price where most competitors get one of them wrong. The flywheel is heavy enough — around 35lb on the standard model — to carry momentum through the dead spot at the top of the pedal stroke, which is what separates a bike that feels like cycling from one that feels like pedalling against a brake. And the frame is genuinely stable when you stand up, which many sub-$300 bikes are not. It is friction-resistance rather than magnetic, so expect the felt pad to need replacing after a year or two of heavy use and expect some noise. No console worth the name, no power measurement, and the stock saddle is poor. Budget for a saddle swap and a tablet mount and it is still comfortably the best value here.",
    affiliateUrl: "https://www.amazon.com/s?k=yosuda+indoor+cycling+bike&tag=pilatescollective-20",
    tag: "Editor's Pick",
  },
  {
    rank: "02",
    name: "Sunny Health & Fitness Magnetic Indoor Bike (SF-B1805)",
    price: "From $420",
    verdict: "Best magnetic resistance under $500",
    description:
      "Magnetic resistance is the single upgrade most worth paying for at this price, and the SF-B1805 is the most credible magnetic bike that stays under the ceiling. Magnets apply resistance without touching the flywheel, which means there is nothing to wear out, nothing to replace, and almost no noise — a genuine consideration in a flat or a shared house, and the reason magnetic bikes are the ones people are still using in year five. The 40lb flywheel carries momentum well and the resistance progression is smooth rather than stepped. Against the Yosuda you are paying roughly $120 for quiet operation and zero maintenance. The console remains basic and there is no power meter, which is normal at this price. If the bike lives anywhere noise matters, buy this one rather than the friction alternative.",
    affiliateUrl: "https://www.amazon.com/s?k=sunny+health+fitness+magnetic+indoor+cycling+bike+sf+b1805&tag=pilatescollective-20",
    tag: "Best Magnetic",
  },
  {
    rank: "03",
    name: "Joroto X2 Magnetic Indoor Cycling Bike",
    price: "From $450",
    verdict: "Best build quality at the top of the budget",
    description:
      "The Joroto X2 sits at the upper edge of this bracket and spends the extra money on the frame rather than the features list, which is the right priority. The welded steel frame and wider base stay noticeably more planted during standing sprints than lighter budget bikes, and the higher stated user weight limit reflects real structural difference rather than marketing. Magnetic resistance again, so it runs quietly and needs no pad replacement. The belt drive is smooth and effectively silent. What you still do not get is any meaningful electronics — the console counts time and estimated distance and should be ignored in favour of a phone or a separate cadence sensor. If you are heavier, taller, or ride out of the saddle frequently, the extra stability here is worth more than any feature the cheaper bikes advertise.",
    affiliateUrl: "https://www.amazon.com/s?k=joroto+x2+magnetic+indoor+cycling+bike&tag=pilatescollective-20",
    tag: "Best Build",
  },
  {
    rank: "04",
    name: "Sunny Health & Fitness Belt Drive Bike (SF-B1002)",
    price: "From $330",
    verdict: "Quietest drivetrain for flats and shared houses",
    description:
      "Chain drives are noisier than belt drives, and in an apartment that difference decides whether you can ride at seven in the morning. The SF-B1002 pairs a belt drive with a heavy 49lb flywheel, which is unusually substantial at this price and produces a smooth, road-like feel through the pedal stroke that lighter-flywheel bikes cannot match. The trade-off is that the resistance is friction-based, so while the drivetrain is quiet the resistance pad will eventually wear and can squeak if it gets damp with sweat — keep it wiped down. The heavy flywheel also makes the bike awkward to move, so decide where it lives before assembly. Best suited to steady-state riders who value drivetrain smoothness over the maintenance-free convenience of magnets.",
    affiliateUrl: "https://www.amazon.com/s?k=sunny+health+fitness+belt+drive+indoor+cycling+bike+sf+b1002&tag=pilatescollective-20",
    tag: "Quietest Drivetrain",
  },
  {
    rank: "05",
    name: "Pooboo Magnetic Indoor Cycling Bike",
    price: "From $350",
    verdict: "Best value magnetic option",
    description:
      "Pooboo occupies the gap between the friction-resistance entry bikes and the $420-plus magnetic ones, and for riders who want quiet operation without stretching the budget it is the sensible compromise. Magnetic resistance, a belt drive and a flywheel in the low-to-mid 30lb range make for a quiet bike that needs no consumable parts. The compromises are in the details rather than the fundamentals: the adjustment ranges are narrower than on pricier bikes, which matters if you are much above or below average height, and the finish quality is a step below the Joroto. Check the stated inseam range against your own before ordering, because a bike you cannot set up correctly is worse value than no bike. For an average-height rider wanting quiet, this is the cheapest way to get it.",
    affiliateUrl: "https://www.amazon.com/s?k=pooboo+magnetic+indoor+cycling+bike&tag=pilatescollective-20",
    tag: "Best Value Magnetic",
  },
  {
    rank: "06",
    name: "Budget Indoor Cycling Bike Under $250",
    price: "From $230",
    verdict: "Cheapest bike worth considering",
    description:
      "Below about $250 the compromises stop being about features and start being about whether the bike is pleasant to ride at all. Flywheels drop under 30lb, which produces a lurching pedal stroke rather than a smooth one, frames flex when you stand, and adjustment ranges narrow to the point that taller riders cannot set the saddle correctly. That said, if the alternative is not riding, a cheap bike that gets used beats a good bike you did not buy. Set expectations honestly: plan to replace it rather than upgrade it, keep every bolt checked since budget frames loosen, and verify the return window before assembly. Two specifications are worth insisting on even here — a flywheel of at least 30lb, and a stated inseam range that covers you.",
    affiliateUrl: "https://www.amazon.com/s?k=indoor+cycling+bike+under+250&tag=pilatescollective-20",
    tag: "Best Cheapest",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Spin Bikes Under $500 (2026): Tested & Ranked",
      "description": "Budget indoor cycling bikes compared on flywheel weight, magnetic versus friction resistance, drive type, frame stability and adjustment range.",
      "url": "https://pilatescollectiveclub.com/blog/best-spin-bike-under-500",
      "datePublished": "2026-09-14",
      "dateModified": "2026-09-14",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-spin-bike-under-500" },
    },
    {
      "@type": "ItemList",
      "name": "Best Spin Bikes Under $500 (2026)",
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
        { "@type": "ListItem", "position": 3, "name": "Best Spin Bikes Under $500", "item": "https://pilatescollectiveclub.com/blog/best-spin-bike-under-500" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Magnetic or friction resistance on a budget spin bike?", "acceptedAnswer": { "@type": "Answer", "text": "Magnetic, if you can stretch to it. Magnets apply resistance without touching the flywheel, so there is nothing to wear out, nothing to replace and almost no noise. Friction bikes use a felt pad pressed against the flywheel: cheaper, effective, but the pad wears, needs replacing every year or two under heavy use, and can squeak when damp with sweat. In an apartment or shared house the noise difference alone justifies the roughly $100 premium, and magnetic bikes are the ones people are still riding in year five." } },
        { "@type": "Question", "name": "How heavy should the flywheel be?", "acceptedAnswer": { "@type": "Answer", "text": "At least 30lb, and 35 to 45lb is the sweet spot for this price bracket. Flywheel mass carries momentum through the dead spot at the top of the pedal stroke, which is what makes a bike feel like cycling rather than like pushing against a brake. Below about 30lb the stroke feels lurching and uneven, particularly at low cadence. Beyond roughly 45lb the returns diminish while the bike becomes genuinely difficult to move around a room, so a very heavy flywheel is not automatically better." } },
        { "@type": "Question", "name": "Can you use a budget bike with Peloton or other class apps?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, with one caveat. Apps run on your own tablet or phone, so a bike with no screen is no obstacle — add a mount and you are set. The limitation is metrics: budget bikes have no power meter, so classes calling for specific output numbers cannot be followed precisely. You can add a cheap cadence sensor to match the RPM cues, which covers most of what a class actually asks for. Follow effort and cadence rather than trying to match someone else's wattage." } },
        { "@type": "Question", "name": "What should you budget beyond the bike itself?", "acceptedAnswer": { "@type": "Answer", "text": "Around $100 to $150 covers the things that turn a budget bike into a usable one. The stock saddle on nearly every bike at this price is poor, and a replacement runs $35 to $55. A floor mat protects the surface beneath and damps vibration. A tablet mount is essential if you follow classes, and a cadence sensor is worth having if your console is unreliable, which at this price it is. Factor this in when comparing a $299 bike against a $450 one, because the cheaper bike rarely stays cheaper." } },
      ],
    },
  ],
};

export default function BestSpinBikeUnder500Page() {
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
              Best Spin Bikes<br /><span style={{ color: "#8b4a31" }}>Under $500 (2026)</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 10 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Two specifications decide a bike at this price and neither appears in the marketing. Flywheel weight determines whether the pedal stroke feels like cycling or like pushing against a brake — 35lb and up. And resistance type determines whether you are still happy with the bike in year three: magnets are silent and wear-free, friction pads squeak and need replacing. Everything else on the spec sheet at this price is noise.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/jessica-streser-5ai6kpW4NOw-unsplash.jpg" alt="A home indoor cycling setup in a small space" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Bikes · Ranked</p>
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
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Budget beyond the bike</h2>
              <ul className="space-y-3">
                {[
                  "A replacement saddle, $35–$55. The stock saddle on nearly every bike at this price is the first thing owners change.",
                  "A floor mat to protect the surface below and damp vibration — essential on a hard floor or upstairs.",
                  "A tablet mount if you follow classes, since no bike here has a usable screen.",
                  "A cadence sensor if you want reliable RPM, because the built-in consoles at this price are not trustworthy.",
                  "Check the stated inseam range against your own before ordering. A bike you cannot set up correctly is worse value than no bike.",
                  "Re-check every bolt after the first few rides. Budget frames loosen, and a loose bike feels far worse than it is.",
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
                  { q: "Magnetic or friction resistance on a budget spin bike?", a: "Magnetic, if you can stretch to it. Magnets apply resistance without touching the flywheel, so there is nothing to wear out, nothing to replace and almost no noise. Friction bikes use a felt pad pressed against the flywheel: cheaper, effective, but the pad wears, needs replacing every year or two under heavy use, and can squeak when damp with sweat. In an apartment or shared house the noise difference alone justifies the roughly $100 premium, and magnetic bikes are the ones people are still riding in year five." },
                  { q: "How heavy should the flywheel be?", a: "At least 30lb, and 35 to 45lb is the sweet spot for this price bracket. Flywheel mass carries momentum through the dead spot at the top of the pedal stroke, which is what makes a bike feel like cycling rather than like pushing against a brake. Below about 30lb the stroke feels lurching and uneven, particularly at low cadence. Beyond roughly 45lb the returns diminish while the bike becomes genuinely difficult to move around a room, so a very heavy flywheel is not automatically better." },
                  { q: "Can you use a budget bike with Peloton or other class apps?", a: "Yes, with one caveat. Apps run on your own tablet or phone, so a bike with no screen is no obstacle — add a mount and you are set. The limitation is metrics: budget bikes have no power meter, so classes calling for specific output numbers cannot be followed precisely. You can add a cheap cadence sensor to match the RPM cues, which covers most of what a class actually asks for. Follow effort and cadence rather than trying to match someone else's wattage." },
                  { q: "What should you budget beyond the bike itself?", a: "Around $100 to $150 covers the things that turn a budget bike into a usable one. The stock saddle on nearly every bike at this price is poor, and a replacement runs $35 to $55. A floor mat protects the surface beneath and damps vibration. A tablet mount is essential if you follow classes, and a cadence sensor is worth having if your console is unreliable, which at this price it is. Factor this in when comparing a $299 bike against a $450 one, because the cheaper bike rarely stays cheaper." },
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
                <ArticleCard title="Best Indoor Spin Bike for Home Studios" excerpt="The full range including Peloton, Schwinn, NordicTrack and Bowflex." href="/blog/best-indoor-spin-bike-for-home-studio" category="Spinning" readTime="12 min read" date="June 2026" imageUrl="/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg" />
                <ArticleCard title="Best Spin Bike Seat Cushions" excerpt="Why the stock saddle hurts, and the fix order that solves it properly." href="/blog/best-spin-bike-seat-cushion" category="Spinning" readTime="8 min read" date="September 2026" imageUrl="/pictures/tomi-blasic-tj0sM4gHlns-unsplash.jpg" />
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
