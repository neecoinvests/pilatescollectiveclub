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
  title: "Best Pilates Studios in Amsterdam (2026)",
  description: "The best Pilates studios in Amsterdam: reformer studios in De Pijp, Oud-Zuid, Oud-West and Oost, classical BASI training and Lagree. Six picks, checked 2026.",
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  keywords: ["pilates amsterdam", "reformer pilates amsterdam", "best pilates studios amsterdam", "pilates de pijp", "pilates oud-zuid", "lagree amsterdam", "basi pilates amsterdam", "pilates oost amsterdam", "pilates classes amsterdam"],
  openGraph: {
    title: "Best Pilates Studios in Amsterdam (2026)",
    description: "Six curated Pilates studios in Amsterdam: De Pijp, Oud-Zuid, Oud-West, Oost and the centre. Checked October 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/amsterdam",
    images: [{ url: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1400&q=80", width: 1200, height: 630, alt: "Amsterdam Pilates guide, Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Amsterdam (2026)",
    description: "Six curated Pilates studios in Amsterdam: De Pijp, Oud-Zuid, Oud-West, Oost and the centre. Checked October 2026.",
    images: ["https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1400&q=80"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/amsterdam" },
};

const STUDIOS = [
  {
    number: "01",
    name: "PILAT3S De Pijp",
    neighborhood: "De Pijp",
    priceLevel: "€€€",
    review: "PILAT3S opened its De Pijp studio on Ceintuurbaan in 2022: around 200 square metres with seventeen reformers and a coffee bar serving fresh matcha and collagen drinks. It is one of Amsterdam's best-known reformer brands, with a second studio in Oud-Zuid on Karperstraat.",
    caveat: "a large, popular studio; great energy, less individual correction than a small boutique.",
    address: "Ceintuurbaan 131h, 1072 GA Amsterdam",
    bestFor: "Big, design-led reformer classes",
    signatureClass: "Reformer Pilates",
    bookingTip: "Stay for a matcha at the coffee bar after class.",
  },
  {
    number: "02",
    name: "Studio 191",
    neighborhood: "De Pijp · West · Oost",
    priceLevel: "€€€",
    review: "Studio 191 runs reformer and mat Pilates from three Amsterdam studios: Lutmastraat in De Pijp, Jan Hanzenstraat in Oud-West and Beukenweg in Oost. Its timetable includes prenatal classes, and it has its own booking app.",
    caveat: "three studios with similar names, so check which one you have booked.",
    address: "Lutmastraat 191B, 1074 TV Amsterdam",
    bestFor: "Reformer and mat across three neighbourhoods",
    signatureClass: "Reformer Pilates",
    bookingTip: "Use the Studio 191 app to switch between locations.",
  },
  {
    number: "03",
    name: "BASI Pilates Academy Amsterdam",
    neighborhood: "Oud-West",
    priceLevel: "€€€",
    review: "BASI Pilates Academy Amsterdam, formerly The Movement Practice, is the Amsterdam home of BASI, one of the world's best-known Pilates teacher-training organisations. Alongside classes, it trains and certifies instructors, which makes it the place to go for comprehensive, technique-led apparatus work.",
    caveat: "teaching is precise and technical; choose it for depth rather than a sweaty workout.",
    address: "Korte Schimmelstraat 18, 1053 SZ Amsterdam",
    bestFor: "Comprehensive, teacher-level Pilates",
    signatureClass: "BASI Pilates",
    bookingTip: "Ask about private sessions if you want to learn the full apparatus.",
  },
  {
    number: "04",
    name: "Pilates 13",
    neighborhood: "Oud-Zuid",
    priceLevel: "€€€",
    review: "Pilates 13 on Stadionweg in Oud-Zuid is one of Amsterdam's most-reviewed reformer studios, rated 4.8 by more than twelve thousand ClassPass users. It is a convenient choice near the Olympic Stadium and Zuid business district.",
    caveat: "very popular, so peak classes fill early.",
    address: "Stadionweg 153-H, Amsterdam",
    bestFor: "Highly rated reformer in Oud-Zuid",
    signatureClass: "Reformer Pilates",
    bookingTip: "Book before-work classes a few days ahead.",
  },
  {
    number: "05",
    name: "Studio 9 Pilates",
    neighborhood: "Oost (Watergraafsmeer)",
    priceLevel: "€€€",
    review: "Studio 9 is an atmospheric, spotless Pilates studio on Middenweg in Watergraafsmeer, founded by Manon Fakkeldij. It runs reformer classes for Oost residents who would rather not cross town for a good class.",
    caveat: "a smaller studio with a shorter timetable than the big brands.",
    address: "Middenweg 67F, Amsterdam",
    bestFor: "Calm neighbourhood reformer in Oost",
    signatureClass: "Reformer Pilates",
    bookingTip: "Weekday daytime classes are the easiest to book.",
  },
  {
    number: "06",
    name: "CORE40",
    neighborhood: "Centrum (Weteringschans) · Zuid · Noord",
    priceLevel: "€€€",
    review: "CORE40 teaches the Lagree method on the Megaformer, a slow, high-tension workout. Its studios include Weteringschans near the Rijksmuseum, Stadionweg in Zuid and Oslofjordweg in Noord, and it is one of the most-reviewed boutique studios in the city.",
    caveat: "Lagree is not classical Pilates; it is a different machine and a tougher format.",
    address: "Weteringschans 130-132, Amsterdam",
    bestFor: "Lagree on the Megaformer",
    signatureClass: "Lagree on the Megaformer",
    bookingTip: "Arrive early for your first class to learn the machine.",
  },
];

const BOOKING_TIPS = [{"heading": "Book through ClassPass, Urban Sports Club or OneFit", "body": "Most Amsterdam studios list on at least one of these platforms, which makes it easy to try several before choosing one."}, {"heading": "Book before-work and evening classes early", "body": "Peak reformer slots fill first, especially at popular studios in De Pijp and Zuid."}, {"heading": "Check which location you booked", "body": "Several brands run more than one Amsterdam studio. Confirm the address before you cycle over."}, {"heading": "Choose Pilates or Lagree", "body": "Reformer Pilates focuses on control and technique; Lagree on the Megaformer is a slower, tougher strength workout."}, {"heading": "Bring grip socks", "body": "Grip socks are required at almost every reformer studio in Amsterdam."}];

const NEIGHBORHOODS = [{"name": "De Pijp", "description": "Large, design-led reformer studios around Ceintuurbaan and Lutmastraat, close to the Albert Cuyp market."}, {"name": "Oud-Zuid", "description": "Highly rated studios on Stadionweg and Karperstraat, convenient for Zuid offices and the Vondelpark."}, {"name": "Oud-West", "description": "A BASI teacher-training academy and neighbourhood reformer studios between the Vondelpark and the Kinkerstraat."}, {"name": "Oost & Centrum", "description": "Calm neighbourhood studios in Watergraafsmeer and Lagree on the Weteringschans near the Rijksmuseum."}];

const GEAR = [{"name": "Pilates Grip Socks", "note": "Our pick: toesox Low Rise Full-Toe Grip Socks (2-Pack). Required at most reformer studios; full-toe grip socks are the standard.", "price": "$30.00", "url": "https://www.amazon.com/dp/B07QHNDHW3?tag=pilatescollective-20"}, {"name": "Pilates Mat", "note": "Our pick: Manduka PRO Yoga & Pilates Mat (6mm). A dense 6mm mat for mat classes and home practice between studio sessions.", "price": "$144.00", "url": "https://www.amazon.com/dp/B0000DZFXZ?tag=pilatescollective-20"}, {"name": "Magic Circle", "note": "Our pick: Balanced Body Ultra-Fit Circle (15-inch). Many studios use the magic circle; worth owning for home reinforcement work.", "price": "$35.00", "url": "https://www.amazon.com/dp/B002YQW3IU?tag=pilatescollective-20"}, {"name": "Resistance Bands", "note": "Our pick: Arena Strength Fabric Glute Bands (3-Pack). Fabric loops that carry reformer leg and glute work into home sessions.", "price": "$29.00", "url": "https://www.amazon.com/dp/B07VYK14JC?tag=pilatescollective-20"}, {"name": "Foam Roller", "note": "Our pick: OPTP PRO-Roller Foam Roller (36-inch). For spinal mobility and release work before and after class.", "price": "$62.99", "url": "https://www.amazon.com/dp/B002C9EX14?tag=pilatescollective-20"}, {"name": "Home Pilates Reformer", "note": "Our pick: PAETA Wooden Foldable Reformer. A folding home reformer to keep your practice going between studio classes.", "price": "$719.99", "url": "https://www.amazon.com/dp/B0D7M7JNFV?tag=pilatescollective-20"}];

const RELATED_CITIES = [{"city": "Berlin", "country": "Germany", "href": "/cities/berlin", "studioCount": 6}, {"city": "Paris", "country": "France", "href": "/cities/paris", "studioCount": 6}, {"city": "London", "country": "United Kingdom", "href": "/cities/london", "studioCount": 6}, {"city": "Barcelona", "country": "Spain", "href": "/cities/barcelona", "studioCount": 6}];

const FURTHER_READING = [{"title": "Beginner's Guide to Reformer Pilates", "excerpt": "What to expect in your first reformer class, how to choose a studio and how to progress.", "href": "/blog/beginners-guide-to-reformer-pilates", "category": "Beginner Guide", "readTime": "8 min read"}, {"title": "Best Megaformer Machine (2026)", "excerpt": "The machines behind Lagree classes, and what a home Megaformer setup really costs.", "href": "/blog/best-megaformer-machine", "category": "Lagree", "readTime": "12 min read"}, {"title": "Best Pilates Grip Socks (2026)", "excerpt": "Five verified grip socks for reformer classes, from budget packs to studio favourites.", "href": "/blog/best-pilates-grip-socks", "category": "Accessories", "readTime": "6 min read"}, {"title": "What to Wear to Pilates", "excerpt": "A complete studio outfit guide: leggings, tops, bras and what to leave at home.", "href": "/blog/what-to-wear-to-pilates", "category": "Apparel", "readTime": "6 min read"}];

const CITY_FAQS = [{"q": "What are the best Pilates studios in Amsterdam?", "a": "Our 6 picks are PILAT3S De Pijp (De Pijp), Studio 191 (De Pijp · West · Oost), BASI Pilates Academy Amsterdam (Oud-West), Pilates 13 (Oud-Zuid), Studio 9 Pilates (Oost (Watergraafsmeer)) and CORE40 (Centrum (Weteringschans) · Zuid · Noord). Each listing above covers what the studio is best for, its signature class and a booking tip."}, {"q": "Which Amsterdam neighbourhoods are best for Pilates?", "a": "This guide covers De Pijp, Oud-Zuid, Oud-West and Oost & Centrum. Large, design-led reformer studios around Ceintuurbaan and Lutmastraat, close to the Albert Cuyp market."}, {"q": "What should I know about booking Pilates classes in Amsterdam?", "a": "Book through ClassPass, Urban Sports Club or OneFit. Book before-work and evening classes early. Check which location you booked."}, {"q": "What should I bring to a Pilates class in Amsterdam?", "a": "Grip socks are required at most reformer studios. Our gear list for Amsterdam covers grip socks, a Pilates mat, a magic circle, resistance bands, a foam roller and a home reformer."}, {"q": "Is there Lagree in Amsterdam?", "a": "Yes. CORE40 teaches the Lagree method on the Megaformer, with studios on Weteringschans, Stadionweg and in Noord."}];

const gearName = (g: { name: string; note: string }) => g.note.match(/Our pick: ([^.]+(?:\.\d+[^.]*)?)\./)?.[1] ?? g.name;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Studios in Amsterdam (2026)",
      "description": "The best Pilates studios in Amsterdam: reformer studios in De Pijp, Oud-Zuid, Oud-West and Oost, classical BASI training and Lagree. Six picks, checked 2026.",
      "url": "https://pilatescollectiveclub.com/cities/amsterdam",
      "datePublished": "2026-06-28",
      "dateModified": "2026-10-31",
      "image": { "@type": "ImageObject", "url": "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1400&q=80" },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/cities/amsterdam" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": CITY_FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
    productItemList("Pilates gear for classes in Amsterdam", GEAR.map((g) => ({ name: gearName(g), description: g.note, price: g.price, url: g.url }))),
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Cities", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "Amsterdam", "item": "https://pilatescollectiveclub.com/cities/amsterdam" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Amsterdam",
      "url": "https://pilatescollectiveclub.com/cities/amsterdam",
      "numberOfItems": STUDIOS.length,
      "itemListElement": STUDIOS.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "ExerciseGym",
          "name": s.name,
          "description": s.review.slice(0, 200),
          "address": { "@type": "PostalAddress", "streetAddress": s.address, "addressLocality": "Amsterdam", "addressCountry": "NL" },
        },
      })),
    },
  ],
};

export default function AmsterdamPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Netherlands</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br />
              <span style={{ color: "#8b4a31" }}>in Amsterdam</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Studios checked October 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              {"Amsterdam has one of Europe's busiest reformer scenes, with big, design-led studios in De Pijp, highly rated neighbourhood studios in Oud-Zuid and Oost, a BASI teacher-training academy in Oud-West and Lagree near the Weteringschans. This guide covers six studios with confirmed addresses, what each does best and how to book."}
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1400&q=80" alt="Amsterdam canal houses" fill priority className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Amsterdam, Netherlands</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Reformer, classical and Lagree from De Pijp to Oost</p>
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
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Amsterdam</h2>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Amsterdam</h2>
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
              Grip socks are required at most reformer studios in Amsterdam. These are our recommended picks, all available on Amazon.{" "}
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
          searchPlaceholder="Ask: best reformer Pilates in Amsterdam…"
        />
      </main>
      <Footer />
    </>
  );
}
