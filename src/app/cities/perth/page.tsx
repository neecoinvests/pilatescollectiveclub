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
  title: "Best Pilates Studios in Perth (2026)",
  description: "The best Pilates studios in Perth: KX Pilates in Subiaco, Pilates and Gyrotonic in Mount Hawthorn, North Perth, Applecross and Nedlands. Six picks for 2026.",
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  keywords: ["pilates perth", "reformer pilates perth", "best pilates studios perth", "pilates subiaco", "pilates north perth", "gyrotonic perth", "hot pilates perth", "pilates classes perth wa"],
  openGraph: {
    title: "Best Pilates Studios in Perth (2026)",
    description: "Six curated Pilates studios in Perth: Subiaco, Mount Hawthorn, North Perth, Leederville, Applecross and Nedlands. Checked November 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/perth",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-studio-shelf-props.png", width: 1200, height: 630, alt: "Perth Pilates guide, Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Perth (2026)",
    description: "Six curated Pilates studios in Perth: Subiaco, Mount Hawthorn, North Perth, Leederville, Applecross and Nedlands. Checked November 2026.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-studio-shelf-props.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/perth" },
};

const STUDIOS = [
  {
    number: "01",
    name: "KX Pilates Subiaco",
    neighborhood: "Subiaco",
    priceLevel: "$$",
    review: "KX Pilates sits at the top of ClassPass's Perth reformer ranking across its studios. Its Subiaco studio on Hay Street runs fast-paced 50-minute reformer classes.",
    caveat: "high-energy group classes, so less individual attention.",
    address: "8/531 Hay St, Subiaco WA 6008",
    bestFor: "High-energy group reformer",
    signatureClass: "Reformer",
    bookingTip: "Book early-morning classes a few days ahead.",
  },
  {
    number: "02",
    name: "Revolution Pilates",
    neighborhood: "Mount Hawthorn",
    priceLevel: "$$$",
    review: "Revolution Pilates on Oxford Street teaches both the Pilates method and the Gyrotonic Expansion System, which makes it a good pick for anyone who wants equipment work beyond the reformer.",
    caveat: "hours vary by day; check the timetable before you go.",
    address: "419 Oxford St, Mount Hawthorn WA 6016",
    bestFor: "Pilates and Gyrotonic",
    signatureClass: "Gyrotonic",
    bookingTip: "Try a Gyrotonic session if you have only done reformer.",
  },
  {
    number: "03",
    name: "The Perth Pilates Studio",
    neighborhood: "North Perth",
    priceLevel: "$$$",
    review: "The Perth Pilates Studio on Charles Street offers reformer, mat, small apparatus and Xtend Barre classes, a strong all-round option north of the city.",
    caveat: "some directories list older addresses; use Charles Street.",
    address: "Shop 6, 299 Charles St, North Perth WA 6006",
    bestFor: "All-round equipment Pilates",
    signatureClass: "Reformer",
    bookingTip: "Mix reformer with small apparatus classes for variety.",
  },
  {
    number: "04",
    name: "LIVe Pilates Applecross",
    neighborhood: "Applecross",
    priceLevel: "$$",
    review: "LIVe Pilates on Canning Highway runs matwork, reformer, stretch and barre classes, convenient for the southern riverside suburbs.",
    caveat: "south of the river, so it suits Applecross and Mount Pleasant residents best.",
    address: "763 Canning Hwy, Applecross WA 6153",
    bestFor: "Reformer, mat and stretch south of the river",
    signatureClass: "Reformer",
    bookingTip: "Stretch classes are a good recovery day option.",
  },
  {
    number: "05",
    name: "Redefined Studio",
    neighborhood: "Leederville",
    priceLevel: "$$",
    review: "Redefined is a boutique screen-led reformer studio on Oxford Street, with Fundamentals, Level Up, Core and Stretch classes and its own booking app.",
    caveat: "screen-led classes suit people who like following along; book a coached session if you want hands-on cues.",
    address: "19/181 Oxford St, Leederville WA 6007",
    bestFor: "Screen-led boutique reformer",
    signatureClass: "Fundamentals",
    bookingTip: "Start with the Orientation class.",
  },
  {
    number: "06",
    name: "Love Athletica Nedlands",
    neighborhood: "Nedlands",
    priceLevel: "$$$",
    review: "Love Athletica opened its first Perth studio at Nedlands Square in late October 2026, with 16 reformers for 50-minute athletic and functional strength classes and a 35-degree hot mat room for hot mat and yoga.",
    caveat: "a brand-new studio, so check the latest timetable.",
    address: "Nedlands Square, Nedlands WA 6009",
    bestFor: "Reformer plus hot mat and yoga",
    signatureClass: "Hot Mat",
    bookingTip: "Ask about membership options that include both reformer and hot mat.",
  },
];

const BOOKING_TIPS = [{"heading": "Book before work", "body": "Perth starts early. 6am classes fill first, so book as soon as the timetable opens."}, {"heading": "Try Gyrotonic", "body": "Perth has studios teaching Gyrotonic alongside Pilates. It is a great complement to reformer work."}, {"heading": "Choose hot or cool", "body": "Some studios run heated mat classes. Check the class description if you prefer a cool room."}, {"heading": "Use ClassPass", "body": "Many Perth studios list on ClassPass, which makes it easy to compare a few."}, {"heading": "Bring grip socks", "body": "Grip socks are required at most reformer studios in Perth."}];

const NEIGHBORHOODS = [{"name": "Subiaco & Nedlands", "description": "High-energy reformer on Hay Street and a new hot mat and reformer studio at Nedlands Square."}, {"name": "Mount Hawthorn & Leederville", "description": "Pilates and Gyrotonic on Oxford Street, plus screen-led reformer in Leederville."}, {"name": "North Perth", "description": "An all-round equipment studio on Charles Street."}, {"name": "Applecross", "description": "Reformer, mat and stretch on Canning Highway south of the river."}];

const GEAR = [{"name": "Pilates Grip Socks", "note": "Our pick: toesox Low Rise Full-Toe Grip Socks (2-Pack). Required at most reformer studios; full-toe grip socks are the standard.", "price": "$30.00", "url": "https://www.amazon.com/dp/B07QHNDHW3?tag=pilatescollective-20"}, {"name": "Pilates Mat", "note": "Our pick: Manduka PRO Yoga & Pilates Mat (6mm). A dense 6mm mat for mat classes and home practice between studio sessions.", "price": "$144.00", "url": "https://www.amazon.com/dp/B0000DZFXZ?tag=pilatescollective-20"}, {"name": "Magic Circle", "note": "Our pick: Balanced Body Ultra-Fit Circle (15-inch). Many studios use the magic circle; worth owning for home reinforcement work.", "price": "$35.00", "url": "https://www.amazon.com/dp/B002YQW3IU?tag=pilatescollective-20"}, {"name": "Resistance Bands", "note": "Our pick: Arena Strength Fabric Glute Bands (3-Pack). Fabric loops that carry reformer leg and glute work into home sessions.", "price": "$29.00", "url": "https://www.amazon.com/dp/B07VYK14JC?tag=pilatescollective-20"}, {"name": "Foam Roller", "note": "Our pick: OPTP PRO-Roller Foam Roller (36-inch). For spinal mobility and release work before and after class.", "price": "$62.99", "url": "https://www.amazon.com/dp/B002C9EX14?tag=pilatescollective-20"}, {"name": "Home Pilates Reformer", "note": "Our pick: PAETA Wooden Foldable Reformer. A folding home reformer to keep your practice going between studio classes.", "price": "$719.99", "url": "https://www.amazon.com/dp/B0D7M7JNFV?tag=pilatescollective-20"}];

const RELATED_CITIES = [{"city": "Sydney", "country": "Australia", "href": "/cities/sydney", "studioCount": 6}, {"city": "Melbourne", "country": "Australia", "href": "/cities/melbourne", "studioCount": 6}, {"city": "Brisbane", "country": "Australia", "href": "/cities/brisbane", "studioCount": 6}, {"city": "Singapore", "country": "Singapore", "href": "/cities/singapore", "studioCount": 6}];

const FURTHER_READING = [{"title": "Beginner's Guide to Reformer Pilates", "excerpt": "What to expect in your first reformer class, how to choose a studio and how to progress.", "href": "/blog/beginners-guide-to-reformer-pilates", "category": "Beginner Guide", "readTime": "8 min read"}, {"title": "Best Pilates Grip Socks (2026)", "excerpt": "Five verified grip socks for reformer classes, from budget packs to studio favourites.", "href": "/blog/best-pilates-grip-socks", "category": "Accessories", "readTime": "6 min read"}, {"title": "What to Wear to Pilates", "excerpt": "A complete studio outfit guide: leggings, tops, bras and what to leave at home.", "href": "/blog/what-to-wear-to-pilates", "category": "Apparel", "readTime": "6 min read"}, {"title": "Best Megaformer Machine (2026)", "excerpt": "The machines behind Lagree classes, and what a home Megaformer setup really costs.", "href": "/blog/best-megaformer-machine", "category": "Lagree", "readTime": "12 min read"}];

const CITY_FAQS = [{"q": "What are the best Pilates studios in Perth?", "a": "Our 6 picks are KX Pilates Subiaco (Subiaco), Revolution Pilates (Mount Hawthorn), The Perth Pilates Studio (North Perth), LIVe Pilates Applecross (Applecross), Redefined Studio (Leederville) and Love Athletica Nedlands (Nedlands). Each listing above covers what the studio is best for, its signature class and a booking tip."}, {"q": "Which Perth neighbourhoods are best for Pilates?", "a": "This guide covers Subiaco & Nedlands, Mount Hawthorn & Leederville, North Perth and Applecross. High-energy reformer on Hay Street and a new hot mat and reformer studio at Nedlands Square."}, {"q": "What should I know about booking Pilates classes in Perth?", "a": "Book before work. Try Gyrotonic. Choose hot or cool."}, {"q": "What should I bring to a Pilates class in Perth?", "a": "Grip socks are required at most reformer studios. Our gear list for Perth covers grip socks, a Pilates mat, a magic circle, resistance bands, a foam roller and a home reformer."}, {"q": "Is there Gyrotonic in Perth?", "a": "Yes. Revolution Pilates in Mount Hawthorn teaches both the Pilates method and the Gyrotonic Expansion System."}];

const gearName = (g: { name: string; note: string }) => g.note.match(/Our pick: ([^.]+(?:\.\d+[^.]*)?)\./)?.[1] ?? g.name;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Studios in Perth (2026)",
      "description": "The best Pilates studios in Perth: KX Pilates in Subiaco, Pilates and Gyrotonic in Mount Hawthorn, North Perth, Applecross and Nedlands. Six picks for 2026.",
      "url": "https://pilatescollectiveclub.com/cities/perth",
      "datePublished": "2026-11-01",
      "dateModified": "2026-11-01",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-studio-shelf-props.png" },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/cities/perth" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": CITY_FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
    productItemList("Pilates gear for classes in Perth", GEAR.map((g) => ({ name: gearName(g), description: g.note, price: g.price, url: g.url }))),
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Cities", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "Perth", "item": "https://pilatescollectiveclub.com/cities/perth" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Perth, WA",
      "url": "https://pilatescollectiveclub.com/cities/perth",
      "numberOfItems": STUDIOS.length,
      "itemListElement": STUDIOS.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "ExerciseGym",
          "name": s.name,
          "description": s.review.slice(0, 200),
          "address": { "@type": "PostalAddress", "streetAddress": s.address, "addressLocality": "Perth", "addressCountry": "AU" },
        },
      })),
    },
  ],
};

export default function PerthPage() {
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
              <span style={{ color: "#8b4a31" }}>in Perth, WA</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Studios checked November 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              {"Perth's reformer scene runs from high-energy KX Pilates in Subiaco to long-standing equipment studios in Mount Hawthorn and North Perth, with screen-led reformer in Leederville and a new hot mat and reformer studio in Nedlands. This guide covers six studios with confirmed addresses, what each does best and how to book."}
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-studio-shelf-props.png" alt="Pilates props on a studio shelf" fill priority className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Perth, WA, Australia</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Reformer, Gyrotonic and hot mat studios from Subiaco to Applecross</p>
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
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Perth</h2>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Perth</h2>
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
              Grip socks are required at most reformer studios in Perth. These are our recommended picks, all available on Amazon.{" "}
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
          searchPlaceholder="Ask: best reformer Pilates in Perth…"
        />
      </main>
      <Footer />
    </>
  );
}
