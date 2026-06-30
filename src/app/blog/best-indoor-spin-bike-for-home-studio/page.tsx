import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Indoor Spin Bike for Home Studios (2026) | Pilates Collective Club",
  description: "The best indoor spin bikes for building a home cycling studio — Peloton, Schwinn IC4, NordicTrack, and budget picks compared for resistance, ride feel, and connected apps.",
  keywords: ["best indoor spin bike", "spin bike for home studio 2026", "peloton bike review", "schwinn ic4 review", "nordictrack spin bike", "best indoor cycling bike home", "spin bike vs peloton", "indoor cycling bike buying guide"],
  openGraph: {
    title: "Best Indoor Spin Bike for Home Studios (2026)",
    description: "Indoor spin bikes compared for resistance feel, build quality, and connected training apps.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-indoor-spin-bike-for-home-studio",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg", width: 1200, height: 630, alt: "Best Indoor Spin Bike for Home Studios 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Indoor Spin Bike for Home Studios (2026)",
    description: "Spin bikes compared for ride feel, resistance, and connected apps.",
    images: ["https://pilatescollectiveclub.com/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-indoor-spin-bike-for-home-studio" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Peloton Bike+",
    price: "From $2,495",
    verdict: "Best overall connected spin bike",
    description:
      "The Peloton Bike+ remains the benchmark for connected indoor cycling, pairing magnetic resistance with a rotating 23.8-inch HD touchscreen and access to live and on-demand instructor-led classes. The auto-follow resistance feature adjusts the knob automatically to match instructor cues, which is genuinely useful for riders who want a structured class experience rather than free-ride training. Build quality is excellent — the frame is rated for riders up to 297 lbs, and the belt-drive system is near-silent, an important consideration for home studios in shared or multi-floor housing. The toe-cage pedals are SPD and Delta compatible out of the box. The subscription cost ($44/month for All-Access) is the main ongoing expense to weigh against the hardware price, but for practitioners who want studio-quality cycling instruction at home, the Bike+ is the most complete package available.",
    affiliateUrl: "https://www.amazon.com/s?k=peloton+bike+plus&tag=pilatescollective-20",
    tag: "Best Overall",
  },
  {
    rank: "02",
    name: "Schwinn IC4 Indoor Cycling Bike",
    price: "From $999",
    verdict: "Best value connected bike",
    description:
      "The Schwinn IC4 delivers the core experience of a premium connected bike — magnetic resistance, a 40-lb flywheel, dual-link pedals (SPD and toe cage), and Bluetooth connectivity to Peloton, Zwift, and the Schwinn Trainer app — without requiring a proprietary screen or locking riders into one ecosystem. The console displays cadence, resistance, heart rate, and power output, and riders can mount their own tablet for class streaming. The resistance knob is a simple friction-based dial rather than auto-follow, which some riders prefer for precise manual control. The frame and flywheel feel comparable to bikes costing twice as much. For home studio builders who want flexibility across multiple training apps rather than a single subscription ecosystem, the IC4 is the strongest value proposition in the category.",
    affiliateUrl: "https://www.amazon.com/s?k=schwinn+ic4+indoor+cycling+bike&tag=pilatescollective-20",
    tag: "Best Value",
  },
  {
    rank: "03",
    name: "NordicTrack Commercial S22i Studio Cycle",
    price: "From $1,799",
    verdict: "Best for incline/decline simulation",
    description:
      "The NordicTrack S22i is the only bike in this category that simulates incline and decline terrain — up to 20% incline and -10% decline — via automatic resistance adjustment synced to iFIT's location-based outdoor ride content. The 22-inch rotating touchscreen and iFIT trainer-led programming make this the closest indoor approximation to outdoor road and trail cycling. Build quality is solid, with a 39-lb flywheel and dual-sided SPD/cage pedals. The iFIT subscription ($39/month) is required to unlock the auto-incline feature and most content, similar to Peloton's model. For riders who find flat resistance training monotonous and want terrain variation built into their sessions, the S22i is the standout option.",
    affiliateUrl: "https://www.amazon.com/s?k=nordictrack+s22i+studio+cycle&tag=pilatescollective-20",
    tag: "Best Terrain Simulation",
  },
  {
    rank: "04",
    name: "Bowflex VeloCore",
    price: "From $1,699",
    verdict: "Best for core-engagement training",
    description:
      "The Bowflex VeloCore has a feature no other bike on this list offers: a lean mode that allows the entire bike to tilt up to 16 degrees side to side, engaging the core and obliques in a way fixed-frame bikes cannot replicate. This makes the VeloCore a genuinely interesting crossover for Pilates and Lagree practitioners who already prioritize core stability work and want their cycling sessions to reinforce rather than ignore that training emphasis. The magnetic resistance system is smooth and near-silent, and the bike includes a JRNY app subscription with adaptive workout programming. The lean mode can be locked for riders who prefer a standard fixed-frame ride. For practitioners who want cycling that complements a core-focused training philosophy, the VeloCore is the most distinctive option available.",
    affiliateUrl: "https://www.amazon.com/s?k=bowflex+velocore+bike&tag=pilatescollective-20",
    tag: "Best for Core Engagement",
  },
  {
    rank: "05",
    name: "Yosuda Indoor Cycling Bike",
    price: "From $329",
    verdict: "Best budget entry-level bike",
    description:
      "The Yosuda is a straightforward friction-resistance bike with a 35-lb flywheel, adjustable seat and handlebars, and a basic LCD console tracking speed, distance, and calories. It has no app connectivity or auto-resistance features, but the chain-drive mechanism and flywheel weight provide a genuinely solid ride feel for the price, and the bike has become one of the most consistently well-reviewed budget options on the market. For practitioners testing whether indoor cycling fits into their training routine before committing to a premium connected bike, or building a basic home studio on a tight budget, the Yosuda delivers dependable performance well above its price point.",
    affiliateUrl: "https://www.amazon.com/s?k=yosuda+indoor+cycling+bike&tag=pilatescollective-20",
    tag: "Best Budget Pick",
  },
  {
    rank: "06",
    name: "Echelon Connect Bike EX-5s",
    price: "From $1,199",
    verdict: "Best mid-range connected alternative",
    description:
      "The Echelon EX-5s offers magnetic resistance, a 32-resistance-level system, and full compatibility with the Echelon Fit app as well as Zwift and Peloton's app (when used without a screen). Unlike Peloton, Echelon does not require a screen purchase — riders can mount any tablet or phone — which lowers the effective entry cost considerably. The frame is compact relative to competitors, an advantage for smaller home studio spaces. Resistance is manual via a magnetic dial rather than auto-follow. For riders who want connected-class programming with more hardware flexibility and a smaller footprint than Peloton or NordicTrack, the EX-5s is a strong middle-ground choice.",
    affiliateUrl: "https://www.amazon.com/s?k=echelon+connect+bike+ex5&tag=pilatescollective-20",
    tag: "Best Mid-Range",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Indoor Spin Bike for Home Studios (2026)",
      "description": "Indoor spin bikes compared for resistance feel, build quality, and connected training apps.",
      "url": "https://pilatescollectiveclub.com/blog/best-indoor-spin-bike-for-home-studio",
      "datePublished": "2026-06-30",
      "dateModified": "2026-06-30",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-indoor-spin-bike-for-home-studio" },
    },
    {
      "@type": "ItemList",
      "name": "Best Indoor Spin Bikes for Home Studios (2026)",
      "numberOfItems": 6,
      "itemListElement": PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "description": p.description.replace(/<[^>]+>/g, ""),
          "offers": { "@type": "Offer", "priceCurrency": "USD", "price": p.price.replace(/[^0-9]/g, ""), "availability": "https://schema.org/InStock", "url": p.affiliateUrl },
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Indoor Spin Bike for Home Studios", "item": "https://pilatescollectiveclub.com/blog/best-indoor-spin-bike-for-home-studio" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Do I need a connected bike with a subscription, or is a basic bike enough?", "acceptedAnswer": { "@type": "Answer", "text": "It depends on your training style. Connected bikes like Peloton and NordicTrack provide structured, instructor-led classes that many riders find essential for motivation and pacing, but require an ongoing monthly subscription. Basic bikes like the Yosuda or manually-resistance bikes like the Schwinn IC4 cost less upfront and have no required subscription, but you'll need to self-program your sessions or pair them with free apps. If you already train independently and want flexibility, a non-proprietary bike is the better value. If structured class programming is what keeps you consistent, a connected bike is worth the subscription." } },
        { "@type": "Question", "name": "What resistance type is best — magnetic or friction?", "acceptedAnswer": { "@type": "Answer", "text": "Magnetic resistance, used in the Peloton, Schwinn IC4, NordicTrack S22i, Bowflex VeloCore, and Echelon, is quieter, requires no brake pad replacement, and provides smoother, more consistent resistance across the full range. Friction resistance, used in budget bikes like the Yosuda, uses a felt or leather pad against the flywheel and requires occasional pad replacement, but tends to feel more like an authentic road bike under heavy load. For home studios, especially in shared housing, magnetic resistance is the better choice for noise and maintenance." } },
        { "@type": "Question", "name": "What flywheel weight should I look for?", "acceptedAnswer": { "@type": "Answer", "text": "Flywheel weight affects ride smoothness — heavier flywheels (35-40+ lbs) maintain momentum better and feel closer to outdoor cycling, especially during standing climbs and sprints. Lighter flywheels feel choppier at low cadence. Most quality home spin bikes, including all bikes on this list, use flywheels in the 32-40 lb range, which is sufficient for home training. Studio-grade commercial bikes sometimes use 40+ lb flywheels for the smoothest possible ride under heavy class loads." } },
      ],
    },
  ],
};

export default function BestIndoorSpinBikePage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Indoor Cycling</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Indoor Spin Bike<br /><span style={{ color: "#8b4a31" }}>for Home Studios (2026)</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated June 2026 · 11 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon and manufacturer sites. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Indoor cycling and Pilates have become a near-default cross-training pairing for boutique fitness studios, and many practitioners now want both disciplines available at home. Choosing the right spin bike means weighing connected-class convenience against subscription cost, resistance type against noise level, and footprint against ride quality. This guide compares the six bikes most worth considering for a home studio in 2026, from flagship connected systems to dependable budget options.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg" alt="Best indoor spin bike for home studios 2026" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

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
                  >Search →</a>
                </div>
              ))}
            </div>

            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Bikes · Home Studio Builds</p>
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
                            <h3 className="text-xl font-semibold mb-1" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{p.name}</h3>
                            <p className="text-sm font-semibold" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{p.price}</p>
                          </div>
                          <a href={p.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow"
                            style={{ display: "block", fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "10px 14px", whiteSpace: "nowrap", flexShrink: 0 }}
                          >Search →</a>
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }} dangerouslySetInnerHTML={{ __html: p.description }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "Do I need a connected bike with a subscription, or is a basic bike enough?", a: "It depends on your training style. Connected bikes like Peloton and NordicTrack provide structured, instructor-led classes that many riders find essential for motivation and pacing, but require an ongoing monthly subscription. Basic bikes like the Yosuda or manually-resistance bikes like the Schwinn IC4 cost less upfront and have no required subscription. If structured class programming is what keeps you consistent, a connected bike is worth the subscription." },
                  { q: "What resistance type is best — magnetic or friction?", a: "Magnetic resistance is quieter, requires no brake pad replacement, and provides smoother, more consistent resistance. Friction resistance, used in budget bikes, requires occasional pad replacement but can feel more like authentic road cycling under heavy load. For home studios, especially in shared housing, magnetic resistance is the better choice." },
                  { q: "What flywheel weight should I look for?", a: "Flywheel weight affects ride smoothness — heavier flywheels (35-40+ lbs) maintain momentum better and feel closer to outdoor cycling. Most quality home spin bikes use flywheels in the 32-40 lb range, which is sufficient for home training." },
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
                <ArticleCard title="Best Cycling Shoes for Spin Class (2026)" excerpt="Clip-in vs cage pedals, compatibility, and the best shoes for indoor cycling comfort and power transfer." href="/blog/best-cycling-shoes-for-spin-class" category="Equipment" readTime="9 min read" date="June 2026" imageUrl="/pictures/dane-wetton-AkSJQnem75Y-unsplash.jpg" />
                <ArticleCard title="Best Heart Rate Monitor for Pilates & Spin (2026)" excerpt="Chest straps vs arm bands compared for accuracy, comfort, and compatibility with training apps." href="/blog/best-heart-rate-monitor-for-pilates-and-spin" category="Tech & Devices" readTime="9 min read" date="June 2026" imageUrl="/pictures/elena-kloppenburg-erUC4fTtCuo-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our city guides to find boutique cycling and Pilates studios worldwide." showSearch searchPlaceholder="Ask: best spin studios in New York..." />
      </main>
      <Footer />
    </>
  );
}
