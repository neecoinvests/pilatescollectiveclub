import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import QuickPicks from "@/components/QuickPicks";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import { jsonLdHtml, productItemList } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Best Pilates Studios in Manchester (2026)",
  description: "The best Pilates studios in Manchester: reformer at Goods Yard, King Street West, Dale Street and Ancoats, plus Restart and Whitefield. Six picks for 2026.",
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  keywords: ["pilates manchester", "reformer pilates manchester", "best pilates studios manchester", "reformer pilates manchester city center", "pilates ancoats", "pilates northern quarter", "pilates whitefield", "pilates classes manchester"],
  openGraph: {
    title: "Best Pilates Studios in Manchester (2026)",
    description: "Six curated Pilates studios in Manchester: city center, Ancoats, Cheetham Hill and Whitefield. Checked November 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/manchester",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-mats-corner-sunlit.png", width: 1200, height: 630, alt: "Manchester Pilates guide, Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Manchester (2026)",
    description: "Six curated Pilates studios in Manchester: city center, Ancoats, Cheetham Hill and Whitefield. Checked November 2026.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-mats-corner-sunlit.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/manchester" },
};

const STUDIOS = [
  {
    number: "01",
    name: "The Formula Studio (Formula MCR)",
    neighborhood: "Goods Yard (St John's)",
    priceLevel: "$$$",
    review: "The Formula sits in Goods Yard, one of the city center's newest developments, with panoramic views over the square next to Aviva Studios. It tops ClassPass's Manchester reformer ranking with a 4.9 rating from thousands of reviews.",
    caveat: "popular slots go quickly; book ahead.",
    address: "6 Goods Yard St, Manchester M3 3BG",
    bestFor: "Polished reformer with a view",
    signatureClass: "Reformer",
    bookingTip: "Book weekend classes early in the week.",
  },
  {
    number: "02",
    name: "Kore Studios",
    neighborhood: "King Street West (Spinningfields)",
    priceLevel: "$$$",
    review: "Kore Studios on King Street West runs reformer Pilates and strength classes and holds a consistent 4.88 average from more than 10,000 ClassPass reviews.",
    caveat: "a busy central studio at peak times.",
    address: "31-33 King Street West, Manchester",
    bestFor: "Reformer and strength in the city center",
    signatureClass: "Reformer",
    bookingTip: "Lunchtime classes suit city-center workers.",
  },
  {
    number: "03",
    name: "Runway Pilates",
    neighborhood: "Dale Street (Northern Quarter)",
    priceLevel: "$$$",
    review: "Runway Pilates is one of the most established reformer studios in Manchester, running 45-minute full-body group classes on Merrithew reformers at Dale House.",
    caveat: "45-minute classes move quickly.",
    address: "Dale House, 35 Dale St, Manchester",
    bestFor: "Established reformer on Merrithew equipment",
    signatureClass: "Reformer (45 min)",
    bookingTip: "Easy to reach from Piccadilly station.",
  },
  {
    number: "04",
    name: "Restart Reformer Pilates",
    neighborhood: "Cheetham Hill · Circle Square · Deansgate · Bankside",
    priceLevel: "$$",
    review: "Restart is one of Manchester's fastest-growing reformer studios, with studios in Cheetham Hill, Circle Square and Deansgate and a newer site at Bankside in Colliers Yard. It offers five class types, including a Foundation class for beginners.",
    caveat: "check which studio you have booked; they are spread across the city.",
    address: "The Bee Hive, 53 Derby St, Cheetham Hill, Manchester M8 8HW",
    bestFor: "Beginner-friendly reformer across the city",
    signatureClass: "Foundation",
    bookingTip: "Start with Foundation before trying the faster classes.",
  },
  {
    number: "05",
    name: "The Reformer Studio Ancoats",
    neighborhood: "Ancoats",
    priceLevel: "$$",
    review: "The Reformer Studio sits in Sam's Yard on Port Street, on the edge of Ancoats and the Northern Quarter, and runs group reformer classes including prenatal sessions.",
    caveat: "some listings show an older Dale Street address; use Port Street.",
    address: "Sam's Yard, 70 Port St, Manchester M1 2EG",
    bestFor: "Reformer in Ancoats, including prenatal",
    signatureClass: "Reformer",
    bookingTip: "Ask about prenatal classes if you are expecting.",
  },
  {
    number: "06",
    name: "Whitefield Reformer Pilates",
    neighborhood: "Whitefield (North Manchester)",
    priceLevel: "$$",
    review: "Whitefield Reformer Pilates is a boutique studio on Bury New Road that opened in 2019, a good option if you live in north Manchester.",
    caveat: "outside the city center; best for north Manchester residents.",
    address: "143a Bury New Rd, Whitefield, Manchester M45 6AA",
    bestFor: "Boutique reformer in north Manchester",
    signatureClass: "Reformer",
    bookingTip: "Easy to reach from Whitefield Metrolink.",
  },
];

const BOOKING_TIPS = [{"heading": "Book ahead", "body": "City-center reformer classes fill quickly, especially before work and at weekends."}, {"heading": "Start with fundamentals", "body": "Several studios offer foundation or beginner classes. Take one before moving to faster formats."}, {"heading": "Use the Metrolink", "body": "Most studios in this guide are a short walk from a tram stop."}, {"heading": "Use ClassPass to compare", "body": "Most Manchester studios list on ClassPass, which makes it easy to try a few."}, {"heading": "Bring grip socks", "body": "Grip socks are required at most reformer studios in Manchester."}];

const NEIGHBORHOODS = [{"name": "City center & Spinningfields", "description": "Polished reformer studios at Goods Yard and on King Street West."}, {"name": "Northern Quarter & Ancoats", "description": "Established reformer on Dale Street and in Sam's Yard on Port Street."}, {"name": "Cheetham Hill", "description": "Restart's original studio at The Bee Hive on Derby Street."}, {"name": "Whitefield", "description": "A boutique studio on Bury New Road for north Manchester."}];

const GEAR = [{"name": "Pilates Grip Socks", "note": "Our pick: toesox Low Rise Full-Toe Grip Socks (2-Pack). Required at most reformer studios; full-toe grip socks are the standard.", "price": "$30.00", "url": "https://www.amazon.com/dp/B07QHNDHW3?tag=pilatescollective-20"}, {"name": "Pilates Mat", "note": "Our pick: Manduka PRO Yoga & Pilates Mat (6mm). A dense 6mm mat for mat classes and home practice between studio sessions.", "price": "$144.00", "url": "https://www.amazon.com/dp/B0000DZFXZ?tag=pilatescollective-20"}, {"name": "Magic Circle", "note": "Our pick: Balanced Body Ultra-Fit Circle (15-inch). Many studios use the magic circle; worth owning for home reinforcement work.", "price": "$35.00", "url": "https://www.amazon.com/dp/B002YQW3IU?tag=pilatescollective-20"}, {"name": "Resistance Bands", "note": "Our pick: Arena Strength Fabric Glute Bands (3-Pack). Fabric loops that carry reformer leg and glute work into home sessions.", "price": "$29.00", "url": "https://www.amazon.com/dp/B07VYK14JC?tag=pilatescollective-20"}, {"name": "Foam Roller", "note": "Our pick: OPTP PRO-Roller Foam Roller (36-inch). For spinal mobility and release work before and after class.", "price": "$62.99", "url": "https://www.amazon.com/dp/B002C9EX14?tag=pilatescollective-20"}, {"name": "Home Pilates Reformer", "note": "Our pick: PAETA Wooden Foldable Reformer. A folding home reformer to keep your practice going between studio classes.", "price": "$719.99", "url": "https://www.amazon.com/dp/B0D7M7JNFV?tag=pilatescollective-20"}];

const RELATED_CITIES = [{"city": "London", "country": "United Kingdom", "href": "/cities/london", "studioCount": 6}, {"city": "Edinburgh", "country": "United Kingdom", "href": "/cities/edinburgh", "studioCount": 6}, {"city": "Dublin", "country": "Ireland", "href": "/cities/dublin", "studioCount": 6}, {"city": "Amsterdam", "country": "Netherlands", "href": "/cities/amsterdam", "studioCount": 6}];

const FURTHER_READING = [{"title": "Beginner's Guide to Reformer Pilates", "excerpt": "What to expect in your first reformer class, how to choose a studio and how to progress.", "href": "/blog/beginners-guide-to-reformer-pilates", "category": "Beginner Guide", "readTime": "8 min read"}, {"title": "Best Pilates Grip Socks (2026)", "excerpt": "Five verified grip socks for reformer classes, from budget packs to studio favorites.", "href": "/blog/best-pilates-grip-socks", "category": "Accessories", "readTime": "6 min read"}, {"title": "What to Wear to Pilates", "excerpt": "A complete studio outfit guide: leggings, tops, bras and what to leave at home.", "href": "/blog/what-to-wear-to-pilates", "category": "Apparel", "readTime": "6 min read"}, {"title": "Best Pilates Equipment for Home Practice", "excerpt": "Everything you need between studio sessions, from a quality mat to resistance bands.", "href": "/blog/best-pilates-equipment-for-home-practice", "category": "Equipment", "readTime": "10 min read"}];

const CITY_FAQS = [{"q": "What are the best Pilates studios in Manchester?", "a": "Our 6 picks are The Formula Studio (Formula MCR) (Goods Yard (St John's)), Kore Studios (King Street West (Spinningfields)), Runway Pilates (Dale Street (Northern Quarter)), Restart Reformer Pilates (Cheetham Hill · Circle Square · Deansgate · Bankside), The Reformer Studio Ancoats (Ancoats) and Whitefield Reformer Pilates (Whitefield (North Manchester)). Each listing above covers what the studio is best for, its signature class and a booking tip."}, {"q": "Which Manchester neighborhoods are best for Pilates?", "a": "This guide covers City center & Spinningfields, Northern Quarter & Ancoats, Cheetham Hill and Whitefield. Polished reformer studios at Goods Yard and on King Street West."}, {"q": "What should I know about booking Pilates classes in Manchester?", "a": "Book ahead. Start with fundamentals. Use the Metrolink."}, {"q": "What should I bring to a Pilates class in Manchester?", "a": "Grip socks are required at most reformer studios. Our gear list for Manchester covers grip socks, a Pilates mat, a magic circle, resistance bands, a foam roller and a home reformer."}, {"q": "Where should a beginner start with reformer Pilates in Manchester?", "a": "Restart Reformer Pilates runs a Foundation class for beginners, and Runway Pilates and The Formula also suit newcomers who tell the instructor they are new."}];

const gearName = (g: { name: string; note: string }) => g.note.match(/Our pick: ([^.]+(?:\.\d+[^.]*)?)\./)?.[1] ?? g.name;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Studios in Manchester (2026)",
      "description": "The best Pilates studios in Manchester: reformer at Goods Yard, King Street West, Dale Street and Ancoats, plus Restart and Whitefield. Six picks for 2026.",
      "url": "https://pilatescollectiveclub.com/cities/manchester",
      "datePublished": "2026-11-01",
      "dateModified": "2026-11-01",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-mats-corner-sunlit.png" },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/cities/manchester" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": CITY_FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
    productItemList("Pilates gear for classes in Manchester", GEAR.map((g) => ({ name: gearName(g), description: g.note, price: g.price, url: g.url }))),
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Cities", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "Manchester", "item": "https://pilatescollectiveclub.com/cities/manchester" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Manchester",
      "url": "https://pilatescollectiveclub.com/cities/manchester",
      "numberOfItems": STUDIOS.length,
      "itemListElement": STUDIOS.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "ExerciseGym",
          "name": s.name,
          "description": s.review.slice(0, 200),
          "address": { "@type": "PostalAddress", "streetAddress": s.address, "addressLocality": "Manchester", "addressCountry": "GB" },
        },
      })),
    },
  ],
};

export default function ManchesterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
      <Header />
      <main>
        <section className="r-ah r-ah-legacy">
          <div className="r-wrap">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[12.5px] font-bold" style={{ color: "#0a0a0a" }}>City Guide</span>
              <span style={{ color: "#9a9490" }}>·</span>
              <span className="text-[12.5px] font-bold" style={{ color: "#3a3530" }}>United Kingdom</span>
            </div>
            <h1 className="mb-6 r-d r-h1">
              The Best Pilates Studios<br />
              <span style={{ color: "#a98a5f" }}>in Manchester</span>
            </h1>
            <p className="text-base mb-8" style={{ color: "#6f6964" }}>
              Studios checked November 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#ddd6cc" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#3a3530" }}>
              {"Manchester's reformer scene has grown fast, with polished city-center studios at Goods Yard and King Street West, established names on Dale Street and in Ancoats, and a fast-growing local brand with several studios. This guide covers six studios with confirmed addresses, what each does best and how to book."}
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image relative r-ah-img">
              <Image src="/pictures/stitch-mats-corner-sunlit.png" alt="Sunlit corner of a Pilates studio with mats" fill priority className="object-cover" />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-base font-bold mb-1">Manchester, United Kingdom</p>
                  <p className="text-white/70 text-xs">Reformer studios from Spinningfields and Ancoats to Cheetham Hill and Whitefield</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-[12.5px] font-bold mb-10" style={{ color: "#0a0a0a" }}>
              {STUDIOS.length} Studios · Curated & Verified
            </p>
            <div className="space-y-8">
              {STUDIOS.map((studio) => (
                <StudioListing key={studio.number} {...studio} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-10 r-d r-h2">Tips for booking Pilates in Manchester</h2>
            <div className="space-y-6">
              {BOOKING_TIPS.map((tip) => (
                <div key={tip.heading} className="pcc-booking-tip flex gap-5 rounded-2xl p-6" style={{ backgroundColor: "#ede9e3" }}>
                  <div className="w-1.5 rounded-full shrink-0 mt-1" style={{ backgroundColor: "#0a0a0a", minHeight: "20px" }} />
                  <div>
                    <h3 className="text-base mb-1.5 r-hx" style={{ color: "#0a0a0a" }}>{tip.heading}</h3>
                    <p className="text-base leading-relaxed" style={{ color: "#3a3530" }}>{tip.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-4 r-d r-h2">Best neighborhoods for Pilates in Manchester</h2>
            <p className="text-base mb-10" style={{ color: "#3a3530" }}>Where to look depending on where you live, work or stay.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {NEIGHBORHOODS.map((n) => (
                <div key={n.name} className="rounded-2xl p-6" style={{ backgroundColor: "#ede9e3" }}>
                  <h3 className="text-base mb-2 r-hx" style={{ color: "#0a0a0a" }}>{n.name}</h3>
                  <p className="text-base leading-relaxed" style={{ color: "#3a3530" }}>{n.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Studio Gear */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-3 r-d r-h2">What to bring to your first class</h2>
            <p className="text-base mb-10" style={{ color: "#3a3530" }}>
              Grip socks are required at most reformer studios in Manchester. These are our recommended picks, all available on Amazon.{" "}
              <Link href="/affiliate-disclosure" style={{ color: "#0a0a0a", textDecoration: "underline", fontSize: "inherit" }}>Affiliate disclosure.</Link>
            </p>
            <QuickPicks className="mb-0" picks={GEAR.map((g) => ({ name: gearName(g), price: g.price, url: g.url, note: g.name }))} />
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8 r-d r-h2">Frequently asked questions</h2>
            <div className="space-y-6">
              {CITY_FAQS.map((f) => (
                <div key={f.q} className="rounded-2xl p-6" style={{ backgroundColor: "#ede9e3" }}>
                  <h3 className="text-base mb-2 r-hx" style={{ color: "#0a0a0a" }}>{f.q}</h3>
                  <p className="text-base leading-relaxed" style={{ color: "#3a3530" }}>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-3 r-d r-h2">Related city guides</h2>
            <p className="text-base mb-10" style={{ color: "#3a3530" }}>Explore our guides to other cities with thriving Pilates scenes.</p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
              {RELATED_CITIES.map((c) => (
                <CityCard key={c.city} {...c} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-10 r-d r-h2">Further reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {FURTHER_READING.map((a) => (
                <ArticleCard key={a.href} {...a} />
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Find Pilates near you"
          subtitle="Explore our curated guides to the best studios in cities worldwide."
          showSearch
          searchPlaceholder="Ask: best reformer Pilates in Manchester…"
        />
      </main>
      <Footer />
    </>
  );
}
