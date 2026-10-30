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
  title: "Best Pilates Studios in Brisbane (2026)",
  description: "The best Pilates studios in Brisbane: reformer studios in Teneriffe, Newstead, West End and Paddington, plus the home of Studio Pilates. Six picks for 2026.",
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  keywords: ["pilates brisbane", "reformer pilates brisbane", "best pilates studios brisbane", "pilates teneriffe", "pilates west end", "pilates paddington brisbane", "pilates newstead", "hot pilates brisbane", "studio pilates brisbane"],
  openGraph: {
    title: "Best Pilates Studios in Brisbane (2026)",
    description: "Six curated Pilates studios in Brisbane: Teneriffe, Newstead, West End and Paddington. Checked October 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/brisbane",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-studio-windowsill.png", width: 1200, height: 630, alt: "Brisbane Pilates guide, Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Brisbane (2026)",
    description: "Six curated Pilates studios in Brisbane: Teneriffe, Newstead, West End and Paddington. Checked October 2026.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-studio-windowsill.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/brisbane" },
};

const STUDIOS = [
  {
    number: "01",
    name: "Vicalates",
    neighborhood: "Teneriffe",
    priceLevel: "$$$",
    review: "Vicalates takes a modern classical approach to Pilates, with reformer and mat classes from its studio on Commercial Road in Teneriffe. It is one of the city's highest-rated studios on ClassPass, with thousands of reviews.",
    caveat: "a popular studio, so peak classes book out early.",
    address: "Shop 3, 85 Commercial Road, Teneriffe QLD 4005",
    bestFor: "Modern classical reformer and mat",
    signatureClass: "Reformer",
    bookingTip: "Book early-morning classes the day the schedule opens.",
  },
  {
    number: "02",
    name: "Power Moves",
    neighborhood: "Teneriffe · West End",
    priceLevel: "$$$",
    review: "Power Moves runs heated, mat and reformer Pilates, plus on-demand reformer classes, from its flagship on Montague Road in West End and its newer studio on Helen Street in Teneriffe. The Teneriffe studio is among the most-reviewed in the city.",
    caveat: "heated classes are intense; hydrate well and start with an unheated class if you are new.",
    address: "22 Helen Street, Teneriffe QLD 4005",
    bestFor: "Heated and reformer Pilates on both sides of the river",
    signatureClass: "Heated Reformer",
    bookingTip: "Bring a large towel and water for heated classes.",
  },
  {
    number: "03",
    name: "CorePlus West End",
    neighborhood: "West End",
    priceLevel: "$$",
    review: "CorePlus West End is upstairs on Boundary Street and is the top-ranked reformer studio in Brisbane on one ClassPass list, with tens of thousands of reviews. Classes include Strength Reformer and Hot Mat Pilates.",
    caveat: "a busy, high-volume studio; great value, less individual attention.",
    address: "Level 1, 1/115 Boundary Street, West End QLD 4101",
    bestFor: "Strength reformer and hot mat at good value",
    signatureClass: "Strength Reformer",
    bookingTip: "Weekend classes fill fast; book midweek for the best choice.",
  },
  {
    number: "04",
    name: "BodySmart Pilates",
    neighborhood: "Paddington",
    priceLevel: "$$$",
    review: "BodySmart Pilates on Lower Cairns Terrace runs a dedicated reformer programme in Paddington and is rated 4.9 by hundreds of clients on ClassPass. It is a calm, neighbourhood alternative to the busier inner-north studios.",
    caveat: "a smaller studio with fewer class times than the big brands.",
    address: "102 Lower Cairns Terrace, Paddington QLD 4064",
    bestFor: "Neighbourhood reformer classes in Paddington",
    signatureClass: "Reformer",
    bookingTip: "Combine class with brunch on Given Terrace.",
  },
  {
    number: "05",
    name: "KX Pilates Newstead",
    neighborhood: "Newstead",
    priceLevel: "$$",
    review: "KX Pilates is a national reformer brand known for fast-paced, strength-focused classes, and its Newstead studio on Commercial Road is a short walk from Teneriffe and Gasworks. It runs beginner classes for anyone new to the reformer.",
    caveat: "a franchise studio with a set class format; consistent, but less personal than a boutique.",
    address: "1/76 Commercial Road, Newstead QLD 4006",
    bestFor: "Fast-paced, strength-focused reformer",
    signatureClass: "KX Beginner",
    bookingTip: "Start in a Beginner class before moving to the full KX workout.",
  },
  {
    number: "06",
    name: "Studio Pilates International",
    neighborhood: "Studios across Brisbane",
    priceLevel: "$$",
    review: "Studio Pilates was founded in Brisbane by Jade and Tanya Winter and opened its first franchise studio in Hamilton in 2013. It is now a global brand known for an intense 40-minute reformer workout, with many studios across Brisbane, including East Brisbane and Kenmore.",
    caveat: "a standardised franchise format; great if you like structure, less so if you want classical teaching.",
    address: "Multiple studios across Brisbane, QLD",
    bestFor: "Efficient 40-minute reformer workouts",
    signatureClass: "40-Minute Reformer",
    bookingTip: "Pick the studio nearest home; the class format is the same everywhere.",
  },
];

const BOOKING_TIPS = [{"heading": "Book early mornings ahead", "body": "Brisbane starts early, and 5:30 and 6:30am classes are often the first to fill at inner-city studios. Book as soon as the schedule opens."}, {"heading": "Try a heated class carefully", "body": "Heated reformer and hot mat classes are popular in Brisbane's climate. Start with a regular class, hydrate well and build up to the heat."}, {"heading": "Use ClassPass to sample", "body": "Most Brisbane studios list on ClassPass, which is an easy way to compare boutique and franchise formats before committing."}, {"heading": "Choose boutique or franchise", "body": "Brisbane has both small boutiques and big brands like Studio Pilates and KX. Boutiques offer more correction; franchises offer more class times."}, {"heading": "Bring grip socks and water", "body": "Grip socks are required at most reformer studios, and the humidity means you will want water, especially for heated classes."}];

const NEIGHBORHOODS = [{"name": "Teneriffe & Newstead", "description": "The heart of Brisbane's boutique Pilates scene, with modern classical, heated and franchise reformer studios within a few blocks."}, {"name": "West End", "description": "Busy, great-value studios on Boundary Street and Montague Road, including heated classes and strength reformer."}, {"name": "Paddington", "description": "Calmer neighbourhood studios on the western side of the CBD, ideal for Paddington and Red Hill residents."}, {"name": "Suburbs", "description": "Studio Pilates and other brands have studios across the suburbs, from East Brisbane to Kenmore, so there is a reformer class near most homes."}];

const GEAR = [{"name": "Pilates Grip Socks", "note": "Our pick: toesox Low Rise Full-Toe Grip Socks (2-Pack). Required at most reformer studios; full-toe grip socks are the standard.", "price": "$30.00", "url": "https://www.amazon.com/dp/B07QHNDHW3?tag=pilatescollective-20"}, {"name": "Pilates Mat", "note": "Our pick: Manduka PRO Yoga & Pilates Mat (6mm). A dense 6mm mat for mat classes and home practice between studio sessions.", "price": "$144.00", "url": "https://www.amazon.com/dp/B0000DZFXZ?tag=pilatescollective-20"}, {"name": "Magic Circle", "note": "Our pick: Balanced Body Ultra-Fit Circle (15-inch). Many studios use the magic circle; worth owning for home reinforcement work.", "price": "$35.00", "url": "https://www.amazon.com/dp/B002YQW3IU?tag=pilatescollective-20"}, {"name": "Resistance Bands", "note": "Our pick: Arena Strength Fabric Glute Bands (3-Pack). Fabric loops that carry reformer leg and glute work into home sessions.", "price": "$29.00", "url": "https://www.amazon.com/dp/B07VYK14JC?tag=pilatescollective-20"}, {"name": "Foam Roller", "note": "Our pick: OPTP PRO-Roller Foam Roller (36-inch). For spinal mobility and release work before and after class.", "price": "$62.99", "url": "https://www.amazon.com/dp/B002C9EX14?tag=pilatescollective-20"}, {"name": "Home Pilates Reformer", "note": "Our pick: PAETA Wooden Foldable Reformer. A folding home reformer to keep your practice going between studio classes.", "price": "$719.99", "url": "https://www.amazon.com/dp/B0D7M7JNFV?tag=pilatescollective-20"}];

const RELATED_CITIES = [{"city": "Sydney", "country": "Australia", "href": "/cities/sydney", "studioCount": 6}, {"city": "Melbourne", "country": "Australia", "href": "/cities/melbourne", "studioCount": 6}, {"city": "Singapore", "country": "Singapore", "href": "/cities/singapore", "studioCount": 6}, {"city": "Honolulu", "country": "United States", "href": "/cities/honolulu", "studioCount": 6}];

const FURTHER_READING = [{"title": "Beginner's Guide to Reformer Pilates", "excerpt": "What to expect in your first reformer class, how to choose a studio and how to progress.", "href": "/blog/beginners-guide-to-reformer-pilates", "category": "Beginner Guide", "readTime": "8 min read"}, {"title": "Best Pilates Grip Socks (2026)", "excerpt": "Five verified grip socks for reformer classes, from budget packs to studio favourites.", "href": "/blog/best-pilates-grip-socks", "category": "Accessories", "readTime": "6 min read"}, {"title": "What to Wear to Pilates", "excerpt": "A complete studio outfit guide: leggings, tops, bras and what to leave at home.", "href": "/blog/what-to-wear-to-pilates", "category": "Apparel", "readTime": "6 min read"}, {"title": "Best Pilates Equipment for Home Practice", "excerpt": "Everything you need between studio sessions, from a quality mat to resistance bands.", "href": "/blog/best-pilates-equipment-for-home-practice", "category": "Equipment", "readTime": "10 min read"}];

const CITY_FAQS = [{"q": "What are the best Pilates studios in Brisbane?", "a": "Our 6 picks are Vicalates (Teneriffe), Power Moves (Teneriffe · West End), CorePlus West End (West End), BodySmart Pilates (Paddington), KX Pilates Newstead (Newstead) and Studio Pilates International (Studios across Brisbane). Each listing above covers what the studio is best for, its signature class and a booking tip."}, {"q": "Which Brisbane neighbourhoods are best for Pilates?", "a": "This guide covers Teneriffe & Newstead, West End, Paddington and Suburbs. The heart of Brisbane's boutique Pilates scene, with modern classical, heated and franchise reformer studios within a few blocks."}, {"q": "What should I know about booking Pilates classes in Brisbane?", "a": "Book early mornings ahead. Try a heated class carefully. Use ClassPass to sample."}, {"q": "What should I bring to a Pilates class in Brisbane?", "a": "Grip socks are required at most reformer studios. Our gear list for Brisbane covers grip socks, a Pilates mat, a magic circle, resistance bands, a foam roller and a home reformer."}, {"q": "Did Studio Pilates start in Brisbane?", "a": "Yes. Studio Pilates International was founded in Brisbane by Jade and Tanya Winter and opened its first franchise studio in Hamilton in 2013. It now has studios around the world."}];

const gearName = (g: { name: string; note: string }) => g.note.match(/Our pick: ([^.]+(?:\.\d+[^.]*)?)\./)?.[1] ?? g.name;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Studios in Brisbane (2026)",
      "description": "The best Pilates studios in Brisbane: reformer studios in Teneriffe, Newstead, West End and Paddington, plus the home of Studio Pilates. Six picks for 2026.",
      "url": "https://pilatescollectiveclub.com/cities/brisbane",
      "datePublished": "2026-10-29",
      "dateModified": "2026-10-29",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-studio-windowsill.png" },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/cities/brisbane" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": CITY_FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
    productItemList("Pilates gear for classes in Brisbane", GEAR.map((g) => ({ name: gearName(g), description: g.note, price: g.price, url: g.url }))),
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Cities", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "Brisbane", "item": "https://pilatescollectiveclub.com/cities/brisbane" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Brisbane",
      "url": "https://pilatescollectiveclub.com/cities/brisbane",
      "numberOfItems": STUDIOS.length,
      "itemListElement": STUDIOS.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "ExerciseGym",
          "name": s.name,
          "description": s.review.slice(0, 200),
          "address": { "@type": "PostalAddress", "streetAddress": s.address, "addressLocality": "Brisbane", "addressCountry": "AU" },
        },
      })),
    },
  ],
};

export default function BrisbanePage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Australia</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br />
              <span style={{ color: "#8b4a31" }}>in Brisbane</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Studios checked October 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              {"Brisbane is one of the world's great reformer cities: it is where Studio Pilates began, and the inner north and West End are packed with boutique studios. This guide covers six of the best, from modern classical studios in Teneriffe to heated classes in West End, with what each does best and how to book."}
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-studio-windowsill.png" alt="Sunlit Pilates studio windowsill with props" fill priority className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Brisbane, Australia</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Reformer studios from Teneriffe and Newstead to West End and Paddington</p>
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
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Brisbane</h2>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Brisbane</h2>
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
              Grip socks are required at most reformer studios in Brisbane. These are our recommended picks, all available on Amazon.{" "}
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
          searchPlaceholder="Ask: best reformer Pilates in Brisbane…"
        />
      </main>
      <Footer />
    </>
  );
}
