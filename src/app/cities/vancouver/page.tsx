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
  title: "Best Pilates Studios in Vancouver, BC (2026)",
  description: "The best Pilates studios in Vancouver: classical and reformer studios in Kitsilano, Yaletown, Fairview and the North Shore, plus Lagree. Six picks for 2026.",
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  keywords: ["pilates vancouver", "reformer pilates vancouver", "best pilates studios vancouver", "pilates kitsilano", "pilates yaletown", "lagree vancouver", "pilates west vancouver", "classical pilates vancouver", "pilates classes vancouver bc"],
  openGraph: {
    title: "Best Pilates Studios in Vancouver, BC (2026)",
    description: "Six curated Pilates studios in Vancouver: Kitsilano, Yaletown, Fairview and the North Shore. Checked October 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/vancouver",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-reformer-sunlit-minimal.png", width: 1200, height: 630, alt: "Vancouver Pilates guide, Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Vancouver, BC (2026)",
    description: "Six curated Pilates studios in Vancouver: Kitsilano, Yaletown, Fairview and the North Shore. Checked October 2026.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-reformer-sunlit-minimal.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/vancouver" },
};

const STUDIOS = [
  {
    number: "01",
    name: "Vancouver Pilates Centre",
    neighborhood: "Fairview",
    priceLevel: "$$$",
    review: "Vancouver Pilates Centre describes itself as Canada's original Pilates studio and has been teaching in the city since 1985. It is on West 16th Avenue in Fairview, a few blocks from Cambie Street, and suits anyone who wants an established studio with long teaching roots rather than a new boutique concept.",
    caveat: "opening hours differ between online listings, so check the current timetable before you go.",
    address: "200 - 719 West 16th Avenue, Vancouver, BC V5Z 1S8",
    bestFor: "An established studio with decades of teaching history",
    signatureClass: "Equipment Pilates",
    bookingTip: "Call or email ahead if you want a private session; established studios often fill their best private slots first.",
  },
  {
    number: "02",
    name: "Meridian Pilates",
    neighborhood: "Kitsilano",
    priceLevel: "$$$",
    review: "Meridian is a fully equipped Pilates studio in Kitsilano founded by Kirsten McFarlane. It offers reformer classes, private lessons and workshops, and runs a teacher training programme, which tends to mean instructors who care about technique.",
    caveat: "a technique-focused studio; if you want a sweaty, music-driven class, look at Lagree instead.",
    address: "202 - 2475 Bayswater Street, Vancouver, BC V6K 4N3",
    bestFor: "Reformer classes and privates in a fully equipped studio",
    signatureClass: "Reformer Classes",
    bookingTip: "Ask about workshops if you want to go deeper than a weekly class.",
  },
  {
    number: "03",
    name: "Lagree West",
    neighborhood: "Downtown · Kitsilano · North Vancouver",
    priceLevel: "$$$",
    websiteUrl: "https://lagreewest.com",
    review: "Lagree West teaches the Lagree method on the Megaformer: slow, controlled movements under constant tension that work you harder than the pace suggests. Its main studio is on West Hastings Street downtown, with further studios on West 4th Avenue in Kitsilano and in North Vancouver.",
    caveat: "Lagree is not classical Pilates; it is a high-intensity, slow-tempo workout on a different machine.",
    address: "437 West Hastings Street, Vancouver, BC",
    bestFor: "Lagree workouts on the Megaformer",
    signatureClass: "Lagree on the Megaformer",
    bookingTip: "Arrive early for your first class so an instructor can show you the machine.",
  },
  {
    number: "04",
    name: "FORM Body Lab",
    neighborhood: "Yaletown",
    priceLevel: "$$$$",
    review: "FORM Body Lab is a boutique studio on Mainland Street in Yaletown that combines reformer Pilates with physiotherapy, massage and yoga. Having a physiotherapist on the team makes it a strong choice if you are coming back from an injury or want Pilates as part of a wider recovery plan.",
    caveat: "premium pricing, and a calm, clinic-style space rather than a high-energy class studio.",
    address: "310 - 1152 Mainland Street, Vancouver, BC V6B 4X2",
    bestFor: "Reformer Pilates with physiotherapy under one roof",
    signatureClass: "Reformer Pilates",
    bookingTip: "If you have an injury, book a physio assessment before joining group classes.",
  },
  {
    number: "05",
    name: "Core Community",
    neighborhood: "Kitsilano · Main Street",
    priceLevel: "$$$",
    websiteUrl: "https://corecommunity.ca",
    review: "Core Community is a small, modern reformer studio that caps classes at four people so instructors can correct form closely. It runs studios on West 4th Avenue in Kitsilano and on Main Street, and recommends that newcomers start with its guided 50-minute Align classes or a private session.",
    caveat: "listings show different addresses for its studios, so confirm which location you are booking.",
    address: "1926 West 4th Avenue, Vancouver, BC",
    bestFor: "Very small reformer classes with close form correction",
    signatureClass: "Align (beginner reformer)",
    bookingTip: "New to reformer? Take a few Align classes before moving up.",
  },
  {
    number: "06",
    name: "Foundation Reformer Pilates",
    neighborhood: "West Vancouver",
    priceLevel: "$$$",
    review: "Foundation Reformer Pilates is a boutique reformer studio on Marine Drive in West Vancouver, and is highly rated by clients on ClassPass. It is the obvious pick if you live or work across the Lions Gate Bridge and do not want to commute downtown for class.",
    caveat: "it is in West Vancouver, so allow for bridge traffic if you are coming from downtown.",
    address: "202 - 1847 Marine Drive, West Vancouver, BC",
    bestFor: "Boutique reformer classes on the North Shore",
    signatureClass: "Reformer Pilates",
    bookingTip: "Weekday daytime classes are the easiest way to get a spot on the North Shore.",
  },
];

const BOOKING_TIPS = [{"heading": "Book early mornings and evenings in advance", "body": "Classes before and after work fill first at Vancouver's boutique studios, especially in Kitsilano and Yaletown. Book as soon as the schedule opens if you need a fixed time."}, {"heading": "Start with a beginner class or a private", "body": "Reformer and Lagree machines take a session or two to learn. Studios such as Core Community steer newcomers to beginner classes first, which makes later classes far more effective."}, {"heading": "Know the difference between Pilates and Lagree", "body": "Lagree uses the Megaformer and a slow, high-tension format. It is a great workout but not the same as classical or contemporary reformer Pilates, so pick the style that matches your goal."}, {"heading": "Check ClassPass for sampling", "body": "Many Vancouver studios list classes on ClassPass, which is a low-commitment way to try a few before choosing a home studio."}, {"heading": "Bring grip socks", "body": "Most reformer studios require them. Studios sell them, but owning a pair or two saves money if you go regularly."}];

const NEIGHBORHOODS = [{"name": "Kitsilano", "description": "The heart of Vancouver's boutique fitness scene. Kitsilano has fully equipped teaching studios such as Meridian, small-class reformer studios on West 4th Avenue and a Lagree studio, all within reach of the beach."}, {"name": "Yaletown & Downtown", "description": "Convenient for anyone working in the core. Yaletown's Mainland Street has studios pairing Pilates with physiotherapy, and Lagree West's main studio is on West Hastings."}, {"name": "Fairview & Main Street", "description": "Home to one of Canada's longest-running Pilates studios on West 16th Avenue, with newer reformer studios along Main Street for East Side residents."}, {"name": "North Shore", "description": "West and North Vancouver have their own boutique reformer and Lagree studios, so North Shore residents do not need to cross the bridge for a good class."}];

const GEAR = [{"name": "Pilates Grip Socks", "note": "Our pick: toesox Low Rise Full-Toe Grip Socks (2-Pack). Required at most reformer studios; full-toe grip socks are the standard.", "price": "$30.00", "url": "https://www.amazon.com/dp/B07QHNDHW3?tag=pilatescollective-20"}, {"name": "Pilates Mat", "note": "Our pick: Manduka PRO Yoga & Pilates Mat (6mm). A dense 6mm mat for mat classes and home practice between studio sessions.", "price": "$144.00", "url": "https://www.amazon.com/dp/B0000DZFXZ?tag=pilatescollective-20"}, {"name": "Magic Circle", "note": "Our pick: Balanced Body Ultra-Fit Circle (15-inch). Many studios use the magic circle; worth owning for home reinforcement work.", "price": "$35.00", "url": "https://www.amazon.com/dp/B002YQW3IU?tag=pilatescollective-20"}, {"name": "Resistance Bands", "note": "Our pick: Arena Strength Fabric Glute Bands (3-Pack). Fabric loops that carry reformer leg and glute work into home sessions.", "price": "$29.00", "url": "https://www.amazon.com/dp/B07VYK14JC?tag=pilatescollective-20"}, {"name": "Foam Roller", "note": "Our pick: OPTP PRO-Roller Foam Roller (36-inch). For spinal mobility and release work before and after class.", "price": "$62.99", "url": "https://www.amazon.com/dp/B002C9EX14?tag=pilatescollective-20"}, {"name": "Home Pilates Reformer", "note": "Our pick: PAETA Wooden Foldable Reformer. A folding home reformer to keep your practice going between studio classes.", "price": "$719.99", "url": "https://www.amazon.com/dp/B0D7M7JNFV?tag=pilatescollective-20"}];

const RELATED_CITIES = [{"city": "Seattle", "country": "United States", "href": "/cities/seattle", "studioCount": 6}, {"city": "Portland", "country": "United States", "href": "/cities/portland", "studioCount": 6}, {"city": "Toronto", "country": "Canada", "href": "/cities/toronto", "studioCount": 6}, {"city": "San Francisco", "country": "United States", "href": "/cities/san-francisco", "studioCount": 6}];

const FURTHER_READING = [{"title": "Beginner's Guide to Reformer Pilates", "excerpt": "What to expect in your first reformer class, how to choose a studio and how to progress.", "href": "/blog/beginners-guide-to-reformer-pilates", "category": "Beginner Guide", "readTime": "8 min read"}, {"title": "Best Megaformer Machine (2026)", "excerpt": "The machines behind Lagree classes, and what a home Megaformer setup really costs.", "href": "/blog/best-megaformer-machine", "category": "Lagree", "readTime": "12 min read"}, {"title": "Best Pilates Grip Socks (2026)", "excerpt": "Five verified grip socks for reformer classes, from budget packs to studio favourites.", "href": "/blog/best-pilates-grip-socks", "category": "Accessories", "readTime": "6 min read"}, {"title": "What to Wear to Pilates", "excerpt": "A complete studio outfit guide: leggings, tops, bras and what to leave at home.", "href": "/blog/what-to-wear-to-pilates", "category": "Apparel", "readTime": "6 min read"}];

const CITY_FAQS = [{"q": "What are the best Pilates studios in Vancouver?", "a": "Our 6 picks are Vancouver Pilates Centre (Fairview), Meridian Pilates (Kitsilano), Lagree West (Downtown · Kitsilano · North Vancouver), FORM Body Lab (Yaletown), Core Community (Kitsilano · Main Street) and Foundation Reformer Pilates (West Vancouver). Each listing above covers what the studio is best for, its signature class and a booking tip."}, {"q": "Which Vancouver neighbourhoods are best for Pilates?", "a": "This guide covers Kitsilano, Yaletown & Downtown, Fairview & Main Street and North Shore. The heart of Vancouver's boutique fitness scene. Kitsilano has fully equipped teaching studios such as Meridian, small-class reformer studios on West 4th Avenue and a Lagree studio, all within reach of the beach."}, {"q": "What should I know about booking Pilates classes in Vancouver?", "a": "Book early mornings and evenings in advance. Start with a beginner class or a private. Know the difference between Pilates and Lagree."}, {"q": "What should I bring to a Pilates class in Vancouver?", "a": "Grip socks are required at most reformer studios. Our gear list for Vancouver covers grip socks, a Pilates mat, a magic circle, resistance bands, a foam roller and a home reformer."}, {"q": "Is Lagree the same as Pilates?", "a": "No. Lagree is taught on the Megaformer and uses slow, continuous tension, so it feels more like a high-intensity strength workout. It shares some ideas with Pilates, but if you want classical or contemporary reformer Pilates, choose a Pilates studio such as Vancouver Pilates Centre or Meridian."}];

const gearName = (g: { name: string; note: string }) => g.note.match(/Our pick: ([^.]+(?:\.\d+[^.]*)?)\./)?.[1] ?? g.name;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Studios in Vancouver, BC (2026)",
      "description": "The best Pilates studios in Vancouver: classical and reformer studios in Kitsilano, Yaletown, Fairview and the North Shore, plus Lagree. Six picks for 2026.",
      "url": "https://pilatescollectiveclub.com/cities/vancouver",
      "datePublished": "2026-10-29",
      "dateModified": "2026-10-29",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-reformer-sunlit-minimal.png" },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/cities/vancouver" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": CITY_FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
    productItemList("Pilates gear for classes in Vancouver", GEAR.map((g) => ({ name: gearName(g), description: g.note, price: g.price, url: g.url }))),
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Cities", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "Vancouver", "item": "https://pilatescollectiveclub.com/cities/vancouver" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Vancouver, BC",
      "url": "https://pilatescollectiveclub.com/cities/vancouver",
      "numberOfItems": STUDIOS.length,
      "itemListElement": STUDIOS.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "ExerciseGym",
          "name": s.name,
          "description": s.review.slice(0, 200),
          "address": { "@type": "PostalAddress", "streetAddress": s.address, "addressLocality": "Vancouver", "addressCountry": "CA" },
        },
      })),
    },
  ],
};

export default function VancouverPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Canada</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br />
              <span style={{ color: "#8b4a31" }}>in Vancouver, BC</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Studios checked October 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              {"Vancouver takes movement seriously, and its Pilates scene reflects it: one of the country's longest-running studios sits in Fairview, Kitsilano has fully equipped teaching studios, and Lagree has a strong following downtown. This guide covers six studios across the city and the North Shore, with what each does best and how to book your first class."}
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-reformer-sunlit-minimal.png" alt="Sunlit reformer in a minimal Pilates studio" fill priority className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Vancouver, BC, Canada</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Classical roots, Lagree and boutique reformer across the city</p>
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
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Vancouver</h2>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Vancouver</h2>
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
              Grip socks are required at most reformer studios in Vancouver. These are our recommended picks, all available on Amazon.{" "}
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
          searchPlaceholder="Ask: best reformer Pilates in Vancouver…"
        />
      </main>
      <Footer />
    </>
  );
}
