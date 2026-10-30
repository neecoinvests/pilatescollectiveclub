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
  title: "Best Pilates Studios in Edinburgh (2026)",
  description: "The best Pilates studios in Edinburgh: reformer and classical studios in the New Town and Leith, plus Lagree. Six picks with addresses, checked for 2026.",
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  keywords: ["pilates edinburgh", "reformer pilates edinburgh", "best pilates studios edinburgh", "pilates new town edinburgh", "pilates leith", "classical pilates edinburgh", "lagree edinburgh", "pilates classes edinburgh", "barre edinburgh"],
  openGraph: {
    title: "Best Pilates Studios in Edinburgh (2026)",
    description: "Six curated Pilates studios in Edinburgh: New Town, Leith and the city centre. Checked October 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/edinburgh",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-studio-entryway.png", width: 1200, height: 630, alt: "Edinburgh Pilates guide, Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Edinburgh (2026)",
    description: "Six curated Pilates studios in Edinburgh: New Town, Leith and the city centre. Checked October 2026.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-studio-entryway.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/edinburgh" },
};

const STUDIOS = [
  {
    number: "01",
    name: "Mena Reformer Pilates + co",
    neighborhood: "New Town (West End)",
    priceLevel: "$$$",
    review: "Mena is a boutique reformer Pilates and barre studio on Saint Colme Street, just off Charlotte Square. It ranks near the top of ClassPass's UK reformer list, and its classes run from an open-level Reformer Foundation to Barre Sculpt.",
    caveat: "one of the most popular studios in the city, so peak classes book out.",
    address: "1 Saint Colme Street, Edinburgh",
    bestFor: "Top-rated reformer and barre in the New Town",
    signatureClass: "Reformer Foundation",
    bookingTip: "Book Reformer Foundation first if you are new to the machine.",
  },
  {
    number: "02",
    name: "Luma Pilates",
    neighborhood: "New Town",
    priceLevel: "$$$",
    review: "Luma Pilates on Northumberland Street was co-founded by Lucia Poulter, an advanced BASI-certified Pilates instructor with more than two decades of experience. Teaching is rooted in classical Pilates, with reformer, barre, mat Pilates and yoga, and Fundamentals classes for beginners.",
    caveat: "a technique-focused studio; choose it for precision rather than a high-energy class.",
    address: "15 Northumberland Street, Edinburgh EH3 6LN",
    bestFor: "Classically rooted reformer teaching",
    signatureClass: "Reformer Fundamentals",
    bookingTip: "Start with Fundamentals, even if you have done Pilates elsewhere.",
  },
  {
    number: "03",
    name: "The Pilates Hub",
    neighborhood: "Leith (The Shore)",
    priceLevel: "$$$",
    review: "The Pilates Hub teaches classical Pilates in a light-filled warehouse near The Shore in Leith. Edinburgh's official visitor guide describes it as one of a handful of studios in Scotland teaching the original Pilates system on apparatus made the traditional way, with group classes on the reformer, tower and chair.",
    caveat: "classical teaching is precise and methodical, not a cardio workout.",
    address: "18/2 Shore Place, Edinburgh EH6 6SW",
    bestFor: "Classical Pilates on traditional apparatus",
    signatureClass: "Classical Reformer & Tower",
    bookingTip: "Consider a private session first to learn the classical order.",
  },
  {
    number: "04",
    name: "Hone Pilates",
    neighborhood: "New Town (Stockbridge edge)",
    priceLevel: "$$$",
    review: "Hone is a boutique reformer studio in a bright, open first-floor space in a Georgian building on Howe Street, between the New Town and Stockbridge. Its timetable includes an Apprentice Reformer class for newcomers.",
    caveat: "a small studio, so class times are limited.",
    address: "1st Floor, 26 Howe Street, Edinburgh EH3 6TG",
    bestFor: "Boutique reformer near Stockbridge",
    signatureClass: "Apprentice Reformer",
    bookingTip: "Pair a morning class with brunch in Stockbridge.",
  },
  {
    number: "05",
    name: "Tribe Leith Walk",
    neighborhood: "Leith Walk",
    priceLevel: "$$",
    review: "Tribe is one of Edinburgh's most popular boutique fitness brands, and its Leith Walk studio on Haddington Place runs 45-minute reformer classes. It has tens of thousands of reviews on ClassPass, and Tribe also has studios in the New Town and Stockbridge.",
    caveat: "busy, high-volume classes; great energy, less individual correction.",
    address: "35 Haddington Place, Edinburgh",
    bestFor: "Efficient 45-minute reformer classes",
    signatureClass: "Reformer (45 mins)",
    bookingTip: "Book a few days ahead for evenings.",
  },
  {
    number: "06",
    name: "Tallie Lagree Fitness Studio",
    neighborhood: "Top of Leith Walk (Picardy Place)",
    priceLevel: "$$$",
    review: "Tallie teaches the Lagree method on the Megaformer from Greenside Place, at the top of Leith Walk. It is one of the most-reviewed boutique studios in Edinburgh, and a strong choice if you want a slow, high-tension strength workout.",
    caveat: "Lagree is not classical Pilates; it is a different machine and a harder, slower format.",
    address: "1st Floor West, 25 Greenside Place, Edinburgh",
    bestFor: "Lagree on the Megaformer",
    signatureClass: "Lagree",
    bookingTip: "Arrive early for your first class to learn the machine.",
  },
];

const BOOKING_TIPS = [{"heading": "Book ahead, especially in August", "body": "Edinburgh's population swells during the Festival, and the best studios fill quickly. Book several days ahead for peak times year-round."}, {"heading": "Start with a foundation class", "body": "Studios like Mena, Luma and Hone run beginner classes (Foundation, Fundamentals, Apprentice). They make every later class safer and more effective."}, {"heading": "Try classical if you want depth", "body": "Edinburgh has rare classical studios teaching on the full apparatus. If you want to understand the method, book a private session first."}, {"heading": "Use ClassPass to compare", "body": "Most Edinburgh studios list classes on ClassPass, which makes it easy to try a few before choosing a home studio."}, {"heading": "Bring grip socks", "body": "Grip socks are required at almost every reformer studio in Edinburgh. Owning a pair or two saves money if you go regularly."}];

const NEIGHBORHOODS = [{"name": "New Town", "description": "Georgian studios around Charlotte Square, Northumberland Street and Howe Street, home to some of the UK's best-rated reformer classes."}, {"name": "Leith & The Shore", "description": "A classical Pilates studio in a converted warehouse near The Shore, plus newer reformer boutiques around Leith."}, {"name": "Leith Walk & Picardy Place", "description": "High-energy reformer and Lagree studios at the top of Leith Walk, an easy walk from the east end of Princes Street."}, {"name": "City centre", "description": "Central options including One Spa, which added a dedicated reformer studio in July 2026, open to non-members."}];

const GEAR = [{"name": "Pilates Grip Socks", "note": "Our pick: toesox Low Rise Full-Toe Grip Socks (2-Pack). Required at most reformer studios; full-toe grip socks are the standard.", "price": "$30.00", "url": "https://www.amazon.com/dp/B07QHNDHW3?tag=pilatescollective-20"}, {"name": "Pilates Mat", "note": "Our pick: Manduka PRO Yoga & Pilates Mat (6mm). A dense 6mm mat for mat classes and home practice between studio sessions.", "price": "$144.00", "url": "https://www.amazon.com/dp/B0000DZFXZ?tag=pilatescollective-20"}, {"name": "Magic Circle", "note": "Our pick: Balanced Body Ultra-Fit Circle (15-inch). Many studios use the magic circle; worth owning for home reinforcement work.", "price": "$35.00", "url": "https://www.amazon.com/dp/B002YQW3IU?tag=pilatescollective-20"}, {"name": "Resistance Bands", "note": "Our pick: Arena Strength Fabric Glute Bands (3-Pack). Fabric loops that carry reformer leg and glute work into home sessions.", "price": "$29.00", "url": "https://www.amazon.com/dp/B07VYK14JC?tag=pilatescollective-20"}, {"name": "Foam Roller", "note": "Our pick: OPTP PRO-Roller Foam Roller (36-inch). For spinal mobility and release work before and after class.", "price": "$62.99", "url": "https://www.amazon.com/dp/B002C9EX14?tag=pilatescollective-20"}, {"name": "Home Pilates Reformer", "note": "Our pick: PAETA Wooden Foldable Reformer. A folding home reformer to keep your practice going between studio classes.", "price": "$719.99", "url": "https://www.amazon.com/dp/B0D7M7JNFV?tag=pilatescollective-20"}];

const RELATED_CITIES = [{"city": "London", "country": "United Kingdom", "href": "/cities/london", "studioCount": 6}, {"city": "Dublin", "country": "Ireland", "href": "/cities/dublin", "studioCount": 6}, {"city": "Copenhagen", "country": "Denmark", "href": "/cities/copenhagen", "studioCount": 6}, {"city": "Amsterdam", "country": "Netherlands", "href": "/cities/amsterdam", "studioCount": 6}];

const FURTHER_READING = [{"title": "Beginner's Guide to Reformer Pilates", "excerpt": "What to expect in your first reformer class, how to choose a studio and how to progress.", "href": "/blog/beginners-guide-to-reformer-pilates", "category": "Beginner Guide", "readTime": "8 min read"}, {"title": "Best Megaformer Machine (2026)", "excerpt": "The machines behind Lagree classes, and what a home Megaformer setup really costs.", "href": "/blog/best-megaformer-machine", "category": "Lagree", "readTime": "12 min read"}, {"title": "Best Pilates Grip Socks (2026)", "excerpt": "Five verified grip socks for reformer classes, from budget packs to studio favourites.", "href": "/blog/best-pilates-grip-socks", "category": "Accessories", "readTime": "6 min read"}, {"title": "What to Wear to Pilates", "excerpt": "A complete studio outfit guide: leggings, tops, bras and what to leave at home.", "href": "/blog/what-to-wear-to-pilates", "category": "Apparel", "readTime": "6 min read"}];

const CITY_FAQS = [{"q": "What are the best Pilates studios in Edinburgh?", "a": "Our 6 picks are Mena Reformer Pilates + co (New Town (West End)), Luma Pilates (New Town), The Pilates Hub (Leith (The Shore)), Hone Pilates (New Town (Stockbridge edge)), Tribe Leith Walk (Leith Walk) and Tallie Lagree Fitness Studio (Top of Leith Walk (Picardy Place)). Each listing above covers what the studio is best for, its signature class and a booking tip."}, {"q": "Which Edinburgh neighbourhoods are best for Pilates?", "a": "This guide covers New Town, Leith & The Shore, Leith Walk & Picardy Place and City centre. Georgian studios around Charlotte Square, Northumberland Street and Howe Street, home to some of the UK's best-rated reformer classes."}, {"q": "What should I know about booking Pilates classes in Edinburgh?", "a": "Book ahead, especially in August. Start with a foundation class. Try classical if you want depth."}, {"q": "What should I bring to a Pilates class in Edinburgh?", "a": "Grip socks are required at most reformer studios. Our gear list for Edinburgh covers grip socks, a Pilates mat, a magic circle, resistance bands, a foam roller and a home reformer."}, {"q": "Is there classical Pilates in Edinburgh?", "a": "Yes. The Pilates Hub in Leith teaches the original Pilates system on traditional apparatus, including the reformer, tower and chair, and Luma Pilates' teaching is rooted in classical Pilates."}];

const gearName = (g: { name: string; note: string }) => g.note.match(/Our pick: ([^.]+(?:\.\d+[^.]*)?)\./)?.[1] ?? g.name;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Studios in Edinburgh (2026)",
      "description": "The best Pilates studios in Edinburgh: reformer and classical studios in the New Town and Leith, plus Lagree. Six picks with addresses, checked for 2026.",
      "url": "https://pilatescollectiveclub.com/cities/edinburgh",
      "datePublished": "2026-10-29",
      "dateModified": "2026-10-29",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-studio-entryway.png" },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/cities/edinburgh" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": CITY_FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
    productItemList("Pilates gear for classes in Edinburgh", GEAR.map((g) => ({ name: gearName(g), description: g.note, price: g.price, url: g.url }))),
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Cities", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "Edinburgh", "item": "https://pilatescollectiveclub.com/cities/edinburgh" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Edinburgh",
      "url": "https://pilatescollectiveclub.com/cities/edinburgh",
      "numberOfItems": STUDIOS.length,
      "itemListElement": STUDIOS.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "ExerciseGym",
          "name": s.name,
          "description": s.review.slice(0, 200),
          "address": { "@type": "PostalAddress", "streetAddress": s.address, "addressLocality": "Edinburgh", "addressCountry": "GB" },
        },
      })),
    },
  ],
};

export default function EdinburghPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>City Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>United Kingdom</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br />
              <span style={{ color: "#8b4a31" }}>in Edinburgh</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Studios checked October 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              {"Edinburgh punches well above its size for Pilates: Georgian New Town studios run some of the UK's best-rated reformer classes, Leith has one of Scotland's few fully classical studios, and Lagree has arrived near the top of Leith Walk. This guide covers six studios, what each does best and how to book."}
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-studio-entryway.png" alt="Bright entryway of a boutique Pilates studio" fill priority className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Edinburgh, United Kingdom</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Reformer, classical and Lagree studios across the New Town and Leith</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>
              {STUDIOS.length} Studios · Curated & Verified
            </p>
            <div className="space-y-8">
              {STUDIOS.map((studio) => (
                <StudioListing key={studio.number} {...studio} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Edinburgh</h2>
            <div className="space-y-6">
              {BOOKING_TIPS.map((tip) => (
                <div key={tip.heading} className="pcc-booking-tip flex gap-5 rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217, 194, 186, 0.3)" }}>
                  <div className="w-1.5 rounded-full shrink-0 mt-1" style={{ backgroundColor: "#8b4a31", minHeight: "20px" }} />
                  <div>
                    <h3 className="text-base font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{tip.heading}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{tip.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Edinburgh</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Where to look depending on where you live, work or stay.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {NEIGHBORHOODS.map((n) => (
                <div key={n.name} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217, 194, 186, 0.35)" }}>
                  <h3 className="text-base font-semibold mb-2" style={{ color: "#8b4a31", fontFamily: "'Playfair Display', serif" }}>{n.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{n.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Studio Gear */}
        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What to bring to your first class</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
              Grip socks are required at most reformer studios in Edinburgh. These are our recommended picks, all available on Amazon.{" "}
              <Link href="/affiliate-disclosure" style={{ color: "#8b4a31", textDecoration: "underline", fontFamily: "'Montserrat', sans-serif", fontSize: "inherit" }}>Affiliate disclosure.</Link>
            </p>
            <QuickPicks className="mb-0" picks={GEAR.map((g) => ({ name: gearName(g), price: g.price, url: g.url, note: g.name }))} />
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
            <div className="space-y-6">
              {CITY_FAQS.map((f) => (
                <div key={f.q} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                  <h3 className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{f.q}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Related city guides</h2>
            <p className="text-sm mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Explore our guides to other cities with thriving Pilates scenes.</p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
              {RELATED_CITIES.map((c) => (
                <CityCard key={c.city} {...c} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
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
          searchPlaceholder="Ask: best reformer Pilates in Edinburgh…"
        />
      </main>
      <Footer />
    </>
  );
}
