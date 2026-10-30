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
  title: "Best Pilates Studios in Munich (2026)",
  description: "The best Pilates studios in Munich: reformer studios in Schwabing, Maxvorstadt and Glockenbach, including women-only options. Six picks with addresses for 2026.",
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  keywords: ["pilates munich", "pilates münchen", "reformer pilates münchen", "best pilates studios munich", "pilates schwabing", "pilates maxvorstadt", "reformer pilates munich", "pilates studio münchen", "pilates classes munich"],
  openGraph: {
    title: "Best Pilates Studios in Munich (2026)",
    description: "Six curated reformer Pilates studios in Munich: Schwabing, Maxvorstadt and Glockenbach. Checked October 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/munich",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-reformer-row-studio.png", width: 1200, height: 630, alt: "Munich Pilates guide, Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Munich (2026)",
    description: "Six curated reformer Pilates studios in Munich: Schwabing, Maxvorstadt and Glockenbach. Checked October 2026.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-reformer-row-studio.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/munich" },
};

const STUDIOS = [
  {
    number: "01",
    name: "Rostudios Schwabing",
    neighborhood: "Schwabing · Maxvorstadt",
    priceLevel: "$$$",
    review: "Rostudios is built around ROFORM, its reformer Pilates workout combining control, tempo, strength and precision. The Schwabing location on Hohenzollernstraße has two ROFORM rooms, with 16 reformers in Studio 1, and there is a further studio on Theresienstraße in Maxvorstadt.",
    caveat: "large, busy classes; good energy, but less individual correction than a small boutique.",
    address: "Hohenzollernstraße 9, 80801 München",
    bestFor: "Tempo-driven reformer classes in big studios",
    signatureClass: "ROFORM",
    bookingTip: "Two rooms means more class times; check both Studio 1 and Studio 2 on the schedule.",
  },
  {
    number: "02",
    name: "PURITÉ Pilates",
    neighborhood: "Schwabing",
    priceLevel: "$$$",
    websiteUrl: "https://puritepilates.de",
    review: "PURITÉ runs reformer sessions for every level, from beginners to advanced, in its studio further along Hohenzollernstraße in Schwabing. It is a straightforward choice if you want a dedicated reformer studio with a clear progression.",
    caveat: "grip socks and your own towel are required for reformer classes.",
    address: "Hohenzollernstraße 44, 80801 München",
    bestFor: "Reformer classes for every level",
    signatureClass: "Reformer Pilates",
    bookingTip: "Pack grip socks and a towel; the studio requires both.",
  },
  {
    number: "03",
    name: "selda pilates35",
    neighborhood: "Schwabing-West",
    priceLevel: "$$$",
    review: "selda pilates35 on Leopoldstraße puts quality before quantity, with Pilates and reformer classes focused on mindful, full-body training. It is one of the highest-rated studios in Munich on Urban Sports Club, with close to a thousand reviews.",
    caveat: "a smaller studio, so popular times book out.",
    address: "Leopoldstraße 110, 80802 München",
    bestFor: "Mindful, full-body Pilates and reformer",
    signatureClass: "Pilates Reformer",
    bookingTip: "Book weekday evenings a few days ahead.",
  },
  {
    number: "04",
    name: "HERSPACE Königsplatz",
    neighborhood: "Maxvorstadt",
    priceLevel: "$$$",
    websiteUrl: "https://herspace.studio",
    review: "HERSPACE is a women-only fitness boutique on Karlstraße near Königsplatz, offering reformer Pilates alongside barre, yoga and strength classes, with a wellbeing café on site. Its approach is holistic, including cycle-based training, and there is a second HERSPACE in Pasing.",
    caveat: "women only.",
    address: "Karlstraße 44, 80333 München",
    bestFor: "Women-only reformer, barre and strength",
    signatureClass: "Reformer Pilates",
    bookingTip: "Stay for a coffee at the in-house café after class.",
  },
  {
    number: "05",
    name: "MUNIK reformer studio",
    neighborhood: "Maxvorstadt",
    priceLevel: "$$$",
    review: "MUNIK is a dedicated reformer studio on Theresienstraße in Maxvorstadt, close to the university and the Pinakothek museums. It is listed on both Wellhub and ClassPass, which makes it easy to try with an existing membership.",
    caveat: "holiday opening hours can differ, so check before you go.",
    address: "Theresienstraße 19, 80333 München",
    bestFor: "Reformer classes near the university and museums",
    signatureClass: "Reformer Pilates",
    bookingTip: "Use Wellhub or ClassPass credits for a first class.",
  },
  {
    number: "06",
    name: "Reformer Club München Glockenbach",
    neighborhood: "Glockenbachviertel",
    priceLevel: "$$$",
    review: "Reformer Club München runs a reformer Pilates studio on Klenzestraße in the Glockenbachviertel, one of Munich's liveliest neighbourhoods, with a second studio at Pündterplatz in Schwabing. It is the natural pick if you live south of the old town.",
    caveat: "two locations with similar names, so check which one you have booked.",
    address: "Klenzestraße 41, 80469 München",
    bestFor: "Reformer Pilates south of the old town",
    signatureClass: "Reformer Pilates",
    bookingTip: "Confirm Glockenbach or Schwabing on your booking.",
  },
];

const BOOKING_TIPS = [{"heading": "Use Urban Sports Club, Wellhub or ClassPass", "body": "Most Munich reformer studios are on at least one of these platforms. Reformer classes usually need a higher membership tier, so check before you book."}, {"heading": "Bring grip socks and a towel", "body": "Many Munich studios require both for reformer classes, and some will not let you on the machine without them."}, {"heading": "Book evenings ahead", "body": "After-work classes in Schwabing and Maxvorstadt fill first. Book a few days ahead if you need a fixed time."}, {"heading": "Start at beginner level", "body": "Even if you do mat Pilates, a beginner reformer class helps you learn the springs, straps and footbar safely."}, {"heading": "Check the exact studio", "body": "Several brands run more than one Munich studio with similar names. Confirm the address before you set off."}];

const NEIGHBORHOODS = [{"name": "Schwabing", "description": "The centre of Munich's reformer scene, with large studios and boutiques along Hohenzollernstraße and Leopoldstraße."}, {"name": "Maxvorstadt", "description": "Studios near Königsplatz, the university and the museums, including women-only options and dedicated reformer rooms."}, {"name": "Glockenbachviertel", "description": "A lively neighbourhood south of the old town with its own reformer studio, ideal for Isarvorstadt residents."}, {"name": "Pasing & further out", "description": "Some brands have studios outside the centre, such as HERSPACE in Pasing, so you can train close to home."}];

const GEAR = [{"name": "Pilates Grip Socks", "note": "Our pick: toesox Low Rise Full-Toe Grip Socks (2-Pack). Required at most reformer studios; full-toe grip socks are the standard.", "price": "$30.00", "url": "https://www.amazon.com/dp/B07QHNDHW3?tag=pilatescollective-20"}, {"name": "Pilates Mat", "note": "Our pick: Manduka PRO Yoga & Pilates Mat (6mm). A dense 6mm mat for mat classes and home practice between studio sessions.", "price": "$144.00", "url": "https://www.amazon.com/dp/B0000DZFXZ?tag=pilatescollective-20"}, {"name": "Magic Circle", "note": "Our pick: Balanced Body Ultra-Fit Circle (15-inch). Many studios use the magic circle; worth owning for home reinforcement work.", "price": "$35.00", "url": "https://www.amazon.com/dp/B002YQW3IU?tag=pilatescollective-20"}, {"name": "Resistance Bands", "note": "Our pick: Arena Strength Fabric Glute Bands (3-Pack). Fabric loops that carry reformer leg and glute work into home sessions.", "price": "$29.00", "url": "https://www.amazon.com/dp/B07VYK14JC?tag=pilatescollective-20"}, {"name": "Foam Roller", "note": "Our pick: OPTP PRO-Roller Foam Roller (36-inch). For spinal mobility and release work before and after class.", "price": "$62.99", "url": "https://www.amazon.com/dp/B002C9EX14?tag=pilatescollective-20"}, {"name": "Home Pilates Reformer", "note": "Our pick: PAETA Wooden Foldable Reformer. A folding home reformer to keep your practice going between studio classes.", "price": "$719.99", "url": "https://www.amazon.com/dp/B0D7M7JNFV?tag=pilatescollective-20"}];

const RELATED_CITIES = [{"city": "Zurich", "country": "Switzerland", "href": "/cities/zurich", "studioCount": 6}, {"city": "Berlin", "country": "Germany", "href": "/cities/berlin", "studioCount": 6}, {"city": "Milan", "country": "Italy", "href": "/cities/milan", "studioCount": 6}, {"city": "Geneva", "country": "Switzerland", "href": "/cities/geneva", "studioCount": 6}];

const FURTHER_READING = [{"title": "Beginner's Guide to Reformer Pilates", "excerpt": "What to expect in your first reformer class, how to choose a studio and how to progress.", "href": "/blog/beginners-guide-to-reformer-pilates", "category": "Beginner Guide", "readTime": "8 min read"}, {"title": "Best Pilates Grip Socks (2026)", "excerpt": "Five verified grip socks for reformer classes, from budget packs to studio favourites.", "href": "/blog/best-pilates-grip-socks", "category": "Accessories", "readTime": "6 min read"}, {"title": "What to Wear to Pilates", "excerpt": "A complete studio outfit guide: leggings, tops, bras and what to leave at home.", "href": "/blog/what-to-wear-to-pilates", "category": "Apparel", "readTime": "6 min read"}, {"title": "Best Pilates Reformer Brands (2026)", "excerpt": "Every major reformer brand ranked, for home practitioners and studio owners.", "href": "/blog/best-pilates-reformer-brands", "category": "Equipment", "readTime": "18 min read"}];

const CITY_FAQS = [{"q": "What are the best Pilates studios in Munich?", "a": "Our 6 picks are Rostudios Schwabing (Schwabing · Maxvorstadt), PURITÉ Pilates (Schwabing), selda pilates35 (Schwabing-West), HERSPACE Königsplatz (Maxvorstadt), MUNIK reformer studio (Maxvorstadt) and Reformer Club München Glockenbach (Glockenbachviertel). Each listing above covers what the studio is best for, its signature class and a booking tip."}, {"q": "Which Munich neighbourhoods are best for Pilates?", "a": "This guide covers Schwabing, Maxvorstadt, Glockenbachviertel and Pasing & further out. The centre of Munich's reformer scene, with large studios and boutiques along Hohenzollernstraße and Leopoldstraße."}, {"q": "What should I know about booking Pilates classes in Munich?", "a": "Use Urban Sports Club, Wellhub or ClassPass. Bring grip socks and a towel. Book evenings ahead."}, {"q": "What should I bring to a Pilates class in Munich?", "a": "Grip socks are required at most reformer studios. Our gear list for Munich covers grip socks, a Pilates mat, a magic circle, resistance bands, a foam roller and a home reformer."}, {"q": "Are there women-only Pilates studios in Munich?", "a": "Yes. HERSPACE Königsplatz on Karlstraße is a women-only fitness boutique with reformer Pilates, barre, yoga and strength classes, and REFORMER FOR HER on Schellingstraße also focuses on women."}];

const gearName = (g: { name: string; note: string }) => g.note.match(/Our pick: ([^.]+(?:\.\d+[^.]*)?)\./)?.[1] ?? g.name;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Studios in Munich (2026)",
      "description": "The best Pilates studios in Munich: reformer studios in Schwabing, Maxvorstadt and Glockenbach, including women-only options. Six picks with addresses for 2026.",
      "url": "https://pilatescollectiveclub.com/cities/munich",
      "datePublished": "2026-10-29",
      "dateModified": "2026-10-29",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-reformer-row-studio.png" },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/cities/munich" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": CITY_FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
    productItemList("Pilates gear for classes in Munich", GEAR.map((g) => ({ name: gearName(g), description: g.note, price: g.price, url: g.url }))),
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Cities", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "Munich", "item": "https://pilatescollectiveclub.com/cities/munich" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Munich",
      "url": "https://pilatescollectiveclub.com/cities/munich",
      "numberOfItems": STUDIOS.length,
      "itemListElement": STUDIOS.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "ExerciseGym",
          "name": s.name,
          "description": s.review.slice(0, 200),
          "address": { "@type": "PostalAddress", "streetAddress": s.address, "addressLocality": "Munich", "addressCountry": "DE" },
        },
      })),
    },
  ],
};

export default function MunichPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Germany</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br />
              <span style={{ color: "#8b4a31" }}>in Munich</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Studios checked October 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              {"Reformer Pilates has boomed in Munich, and Schwabing and Maxvorstadt are now dense with dedicated reformer studios. This guide covers six studios with confirmed addresses, from large reformer rooms on Hohenzollernstraße to women-only boutiques near Königsplatz, with what each does best and how to book."}
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-reformer-row-studio.png" alt="Reformers lined up in a bright Pilates studio" fill priority className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Munich, Germany</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Reformer studios across Schwabing, Maxvorstadt and Glockenbach</p>
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
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Munich</h2>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Munich</h2>
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
              Grip socks are required at most reformer studios in Munich. These are our recommended picks, all available on Amazon.{" "}
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
          searchPlaceholder="Ask: best reformer Pilates in Munich…"
        />
      </main>
      <Footer />
    </>
  );
}
