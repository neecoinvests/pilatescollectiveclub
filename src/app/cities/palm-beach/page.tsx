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
  title: "Best Pilates Studios in Palm Beach, FL (2026)",
  description: "The best Pilates studios in Palm Beach and West Palm Beach: reformer studios on the island, downtown and along South Dixie Highway. Six picks for 2026.",
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  keywords: ["pilates palm beach", "pilates west palm beach", "reformer pilates west palm beach", "best pilates studios palm beach", "pilates palm beach island", "barre palm beach", "pilates south dixie highway", "pilates classes west palm beach"],
  openGraph: {
    title: "Best Pilates Studios in Palm Beach, FL (2026)",
    description: "Six curated Pilates studios in Palm Beach and West Palm Beach. Checked October 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/palm-beach",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-white-reformer-plaster.png", width: 1200, height: 630, alt: "Palm Beach Pilates guide, Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Palm Beach, FL (2026)",
    description: "Six curated Pilates studios in Palm Beach and West Palm Beach. Checked October 2026.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-white-reformer-plaster.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/palm-beach" },
};

const STUDIOS = [
  {
    number: "01",
    name: "Labarre Pilates",
    neighborhood: "Palm Beach island",
    priceLevel: "$$$$",
    review: "Labarre Pilates on South County Road is described by Goop as the only studio on Palm Beach Island offering reformer Pilates, barre and mat classes all in one place. It also has a sister location, The Studio by Labarre.",
    caveat: "island pricing; expect to pay a premium.",
    address: "330 S County Road, Palm Beach, FL 33480",
    bestFor: "Reformer, barre and mat on the island",
    signatureClass: "Reformer & Barre",
    bookingTip: "Book ahead in season (roughly November to April), when the island is busiest.",
  },
  {
    number: "02",
    name: "Reforming Pilates",
    neighborhood: "Downtown West Palm Beach",
    priceLevel: "$$$$",
    review: "Reforming Pilates runs daily group and private reformer sessions from its studio on Gardenia Street in downtown West Palm Beach. Listings call it the most wait-listed Pilates studio in South Florida, and it is rated 4.9 by thousands of clients on ClassPass.",
    caveat: "it earns its wait-lists; book well ahead or join the waitlist early.",
    address: "Gardenia Street, West Palm Beach, FL 33401",
    bestFor: "In-demand group and private reformer",
    signatureClass: "Reformer",
    bookingTip: "Join waitlists early; spots often open the day before.",
  },
  {
    number: "03",
    name: "Maison Forme",
    neighborhood: "Downtown West Palm Beach",
    priceLevel: "$$$",
    review: "Maison Forme is a boutique Pilates studio on Palm Street offering both reformer and mat classes. It is a smaller, more personal alternative to the busier downtown studios.",
    caveat: "a smaller studio with a limited timetable.",
    address: "502 Palm Street, Suites 6 & 8, West Palm Beach, FL 33401",
    bestFor: "Boutique reformer and mat",
    signatureClass: "Reformer",
    bookingTip: "Mid-morning weekday classes are the easiest to get.",
  },
  {
    number: "04",
    name: "TREMBLE West Palm Beach",
    neighborhood: "South Dixie Highway",
    priceLevel: "$$$",
    review: "TREMBLE offers high-intensity, low-impact reformer classes that combine strength, cardio and core work. Its West Palm Beach studio is on South Dixie Highway, and the brand also runs pop-up classes at the West Palm Beach GreenMarket.",
    caveat: "a high-intensity format; not the place for slow classical technique.",
    address: "2805 S Dixie Highway, West Palm Beach, FL 33405",
    bestFor: "High-intensity, low-impact reformer",
    signatureClass: "TREMBLE Reformer",
    bookingTip: "Bring water and a towel; these classes are sweaty.",
  },
  {
    number: "05",
    name: "Sculpt Shop",
    neighborhood: "South Dixie Highway",
    priceLevel: "$$$",
    review: "Sculpt Shop is a boutique studio on South Dixie Highway specialising in Pilates for all fitness levels, and there is another Sculpt Shop studio in Jupiter. It is a friendly choice if you want a challenging class without an intimidating atmosphere.",
    caveat: "listings show more than one Dixie Highway address, so confirm the location before your first class.",
    address: "South Dixie Highway, West Palm Beach, FL",
    bestFor: "Pilates for every fitness level",
    signatureClass: "Sculpt Pilates",
    bookingTip: "Check the address on your booking confirmation.",
  },
  {
    number: "06",
    name: "Club Pilates West Palm Beach",
    neighborhood: "South Dixie Highway",
    priceLevel: "$$",
    review: "Club Pilates West Palm Beach on South Dixie Highway offers reformer-based classes in a structured system, with levels that make it easy to progress. It is a reliable, good-value option for regular weekly classes.",
    caveat: "a franchise studio; consistent and well-equipped, but less intimate than a boutique.",
    address: "2604 S Dixie Highway, West Palm Beach, FL 33401",
    bestFor: "Structured, good-value reformer classes",
    signatureClass: "Reformer Flow",
    bookingTip: "Start with an intro class so an instructor can set you up.",
  },
];

const BOOKING_TIPS = [{"heading": "Book ahead in season", "body": "From roughly November to April, Palm Beach's population swells and the best studios fill quickly. Book several days ahead and use waitlists."}, {"heading": "Use waitlists", "body": "In-demand studios such as Reforming Pilates run waitlists, and spots often open the day before. Join early."}, {"heading": "Choose island or mainland", "body": "Palm Beach island studios are close to the beach and premium-priced, while West Palm Beach has more studios and class times."}, {"heading": "Pick your intensity", "body": "South Dixie Highway has several high-intensity reformer formats, while downtown and island studios lean more boutique. Choose the style you want."}, {"heading": "Bring grip socks and water", "body": "Grip socks are required at most reformer studios, and Florida heat means water is essential."}];

const NEIGHBORHOODS = [{"name": "Palm Beach island", "description": "Premium studios on South County Road, steps from Worth Avenue, with reformer, barre and mat in one place."}, {"name": "Downtown West Palm Beach", "description": "In-demand reformer studios around Gardenia Street, Palm Street and the waterfront, convenient for downtown residents."}, {"name": "South Dixie Highway (SoSo)", "description": "A strip of reformer studios from high-intensity formats to franchise classes, with easy parking."}, {"name": "Further north", "description": "Several brands also run studios in Palm Beach Gardens and Jupiter for residents in the north of the county."}];

const GEAR = [{"name": "Pilates Grip Socks", "note": "Our pick: toesox Low Rise Full-Toe Grip Socks (2-Pack). Required at most reformer studios; full-toe grip socks are the standard.", "price": "$30.00", "url": "https://www.amazon.com/dp/B07QHNDHW3?tag=pilatescollective-20"}, {"name": "Pilates Mat", "note": "Our pick: Manduka PRO Yoga & Pilates Mat (6mm). A dense 6mm mat for mat classes and home practice between studio sessions.", "price": "$144.00", "url": "https://www.amazon.com/dp/B0000DZFXZ?tag=pilatescollective-20"}, {"name": "Magic Circle", "note": "Our pick: Balanced Body Ultra-Fit Circle (15-inch). Many studios use the magic circle; worth owning for home reinforcement work.", "price": "$35.00", "url": "https://www.amazon.com/dp/B002YQW3IU?tag=pilatescollective-20"}, {"name": "Resistance Bands", "note": "Our pick: Arena Strength Fabric Glute Bands (3-Pack). Fabric loops that carry reformer leg and glute work into home sessions.", "price": "$29.00", "url": "https://www.amazon.com/dp/B07VYK14JC?tag=pilatescollective-20"}, {"name": "Foam Roller", "note": "Our pick: OPTP PRO-Roller Foam Roller (36-inch). For spinal mobility and release work before and after class.", "price": "$62.99", "url": "https://www.amazon.com/dp/B002C9EX14?tag=pilatescollective-20"}, {"name": "Home Pilates Reformer", "note": "Our pick: PAETA Wooden Foldable Reformer. A folding home reformer to keep your practice going between studio classes.", "price": "$719.99", "url": "https://www.amazon.com/dp/B0D7M7JNFV?tag=pilatescollective-20"}];

const RELATED_CITIES = [{"city": "Miami", "country": "United States", "href": "/cities/miami", "studioCount": 6}, {"city": "Tampa", "country": "United States", "href": "/cities/tampa", "studioCount": 6}, {"city": "Orlando", "country": "United States", "href": "/cities/orlando", "studioCount": 6}, {"city": "New York", "country": "United States", "href": "/cities/new-york", "studioCount": 6}];

const FURTHER_READING = [{"title": "Beginner's Guide to Reformer Pilates", "excerpt": "What to expect in your first reformer class, how to choose a studio and how to progress.", "href": "/blog/beginners-guide-to-reformer-pilates", "category": "Beginner Guide", "readTime": "8 min read"}, {"title": "Best Pilates Grip Socks (2026)", "excerpt": "Five verified grip socks for reformer classes, from budget packs to studio favourites.", "href": "/blog/best-pilates-grip-socks", "category": "Accessories", "readTime": "6 min read"}, {"title": "What to Wear to Pilates", "excerpt": "A complete studio outfit guide: leggings, tops, bras and what to leave at home.", "href": "/blog/what-to-wear-to-pilates", "category": "Apparel", "readTime": "6 min read"}, {"title": "Best Pilates Equipment for Home Practice", "excerpt": "Everything you need between studio sessions, from a quality mat to resistance bands.", "href": "/blog/best-pilates-equipment-for-home-practice", "category": "Equipment", "readTime": "10 min read"}];

const CITY_FAQS = [{"q": "What are the best Pilates studios in Palm Beach?", "a": "Our 6 picks are Labarre Pilates (Palm Beach island), Reforming Pilates (Downtown West Palm Beach), Maison Forme (Downtown West Palm Beach), TREMBLE West Palm Beach (South Dixie Highway), Sculpt Shop (South Dixie Highway) and Club Pilates West Palm Beach (South Dixie Highway). Each listing above covers what the studio is best for, its signature class and a booking tip."}, {"q": "Which Palm Beach neighbourhoods are best for Pilates?", "a": "This guide covers Palm Beach island, Downtown West Palm Beach, South Dixie Highway (SoSo) and Further north. Premium studios on South County Road, steps from Worth Avenue, with reformer, barre and mat in one place."}, {"q": "What should I know about booking Pilates classes in Palm Beach?", "a": "Book ahead in season. Use waitlists. Choose island or mainland."}, {"q": "What should I bring to a Pilates class in Palm Beach?", "a": "Grip socks are required at most reformer studios. Our gear list for Palm Beach covers grip socks, a Pilates mat, a magic circle, resistance bands, a foam roller and a home reformer."}, {"q": "When is it hardest to book Pilates in Palm Beach?", "a": "During the winter season, roughly November to April, when the population swells. Book several days ahead and use studio waitlists."}];

const gearName = (g: { name: string; note: string }) => g.note.match(/Our pick: ([^.]+(?:\.\d+[^.]*)?)\./)?.[1] ?? g.name;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Studios in Palm Beach, FL (2026)",
      "description": "The best Pilates studios in Palm Beach and West Palm Beach: reformer studios on the island, downtown and along South Dixie Highway. Six picks for 2026.",
      "url": "https://pilatescollectiveclub.com/cities/palm-beach",
      "datePublished": "2026-10-29",
      "dateModified": "2026-10-29",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-white-reformer-plaster.png" },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/cities/palm-beach" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": CITY_FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
    productItemList("Pilates gear for classes in Palm Beach", GEAR.map((g) => ({ name: gearName(g), description: g.note, price: g.price, url: g.url }))),
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Cities", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "Palm Beach", "item": "https://pilatescollectiveclub.com/cities/palm-beach" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Palm Beach",
      "url": "https://pilatescollectiveclub.com/cities/palm-beach",
      "numberOfItems": STUDIOS.length,
      "itemListElement": STUDIOS.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "ExerciseGym",
          "name": s.name,
          "description": s.review.slice(0, 200),
          "address": { "@type": "PostalAddress", "streetAddress": s.address, "addressLocality": "Palm Beach", "addressCountry": "US" },
        },
      })),
    },
  ],
};

export default function PalmBeachPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>United States</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br />
              <span style={{ color: "#8b4a31" }}>in Palm Beach</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Studios checked October 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              {"Palm Beach has some of Florida's most polished Pilates studios, from an all-in-one reformer, barre and mat studio on the island to wait-listed reformer classes in downtown West Palm Beach and high-intensity formats along South Dixie Highway. This guide covers six studios, what each is best for and how to book."}
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-white-reformer-plaster.png" alt="White reformer against a plaster wall" fill priority className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Palm Beach, United States</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Palm Beach island and downtown West Palm Beach</p>
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
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Palm Beach</h2>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Palm Beach</h2>
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
              Grip socks are required at most reformer studios in Palm Beach. These are our recommended picks, all available on Amazon.{" "}
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
          searchPlaceholder="Ask: best reformer Pilates in Palm Beach…"
        />
      </main>
      <Footer />
    </>
  );
}
