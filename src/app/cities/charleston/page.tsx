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
  title: "Best Pilates Studios in Charleston, SC (2026)",
  description: "The best Pilates studios in Charleston: reformer studios on Meeting Street, Daniel Island, Park Circle and Mount Pleasant, plus private studios. Six picks.",
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  keywords: ["pilates charleston", "reformer pilates charleston sc", "best pilates studios charleston", "pilates mount pleasant", "pilates daniel island", "pilates park circle", "private pilates charleston", "pilates classes charleston sc"],
  openGraph: {
    title: "Best Pilates Studios in Charleston, SC (2026)",
    description: "Six curated Pilates studios in Charleston: downtown, Daniel Island, Park Circle and Mount Pleasant. Checked October 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/charleston",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-studio-open-window.png", width: 1200, height: 630, alt: "Charleston Pilates guide, Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Charleston, SC (2026)",
    description: "Six curated Pilates studios in Charleston: downtown, Daniel Island, Park Circle and Mount Pleasant. Checked October 2026.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-studio-open-window.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/charleston" },
};

const STUDIOS = [
  {
    number: "01",
    name: "Shift Pilates Body Shop",
    neighborhood: "Upper Meeting Street · West Ashley",
    priceLevel: "$$$",
    review: "Shift Pilates Body Shop opened on upper Meeting Street in July 2023 and is run by owners Diana and Joe Walker. It offers reformer and mat group classes and private sessions, and builds a community around workshops and events alongside its regular schedule. A second Shift studio serves West Ashley.",
    caveat: "a community-focused studio; regulars fill favourite time slots, so book ahead.",
    address: "1836 Meeting Street, Suite 102, Charleston, SC 29405",
    bestFor: "Reformer and mat classes with a strong community",
    signatureClass: "Reformer & Mat",
    bookingTip: "Watch the events calendar for workshops that go beyond the regular classes.",
  },
  {
    number: "02",
    name: "Breathe Pilates",
    neighborhood: "Daniel Island · Park Circle",
    priceLevel: "$$$",
    review: "Breathe Pilates has studios on River Landing Drive on Daniel Island and on East Montague Avenue in Park Circle. Its timetable runs levelled reformer classes and equipment circuit sessions, and the Daniel Island studio is among the area's most-reviewed on ClassPass.",
    caveat: "levelled classes mean beginners should start at Level I rather than jumping in.",
    address: "125 River Landing Drive, Charleston, SC 29492",
    bestFor: "Levelled reformer and equipment circuit classes",
    signatureClass: "Equipment Circuit",
    bookingTip: "Start in a Level I reformer class before trying the circuit.",
  },
  {
    number: "03",
    name: "Evolve Modern Pilates",
    neighborhood: "Mount Pleasant",
    priceLevel: "$$$",
    review: "Evolve Modern Pilates opened its first studio in Mount Pleasant in October 2023, founded by Dana Romanosky and Leanna Noel. Its 50-minute classes use advanced XFormer reformers for a high-intensity, low-impact workout. The studio is on Old Georgetown Road, behind Nordstrom Rack.",
    caveat: "a high-intensity format; expect a hard workout rather than slow, technical Pilates.",
    address: "1336 Old Georgetown Road, Mount Pleasant, SC 29464",
    bestFor: "High-intensity, low-impact XFormer classes",
    signatureClass: "XFormer Class",
    bookingTip: "Bring water and a towel; these classes are designed to make you sweat.",
  },
  {
    number: "04",
    name: "Momentum Movement Studios",
    neighborhood: "Upper Meeting Street",
    priceLevel: "$$$",
    review: "Momentum Movement Studios on upper Meeting Street focuses on athletic reformer classes and personalised private Pilates, blending modern Pilates with strength training and yoga principles. It is a good fit if you want Pilates that feels like training.",
    caveat: "older listings show a different address, so confirm the current location before your first visit.",
    address: "765 Meeting Street, Charleston, SC 29403",
    bestFor: "Athletic reformer classes and private sessions",
    signatureClass: "Athletic Reformer",
    bookingTip: "Book a private first if you want a plan built around your goals.",
  },
  {
    number: "05",
    name: "InspoWellness",
    neighborhood: "Downtown (Church Street)",
    priceLevel: "$$$$",
    review: "InspoWellness is a private Pilates studio on Church Street in downtown Charleston. It specialises in one-on-one sessions built around each client's goals and fitness level, and also offers virtual classes for days you cannot make it in.",
    caveat: "private-first, so it costs more per session than a group class.",
    address: "171 Church Street, Charleston, SC 29401",
    bestFor: "One-on-one Pilates downtown",
    signatureClass: "Private Pilates",
    bookingTip: "Ideal if you are new, recovering from injury or want fast, personal progress.",
  },
  {
    number: "06",
    name: "Pilates of Charleston",
    neighborhood: "Mount Pleasant",
    priceLevel: "$$$",
    review: "Pilates of Charleston is a dedicated Pilates studio on South Shelmore Boulevard in Mount Pleasant, offering group reformer classes, mat Pilates and private sessions. Small class sizes make it a comfortable place to learn.",
    caveat: "a smaller studio, so popular times can be limited.",
    address: "778 S Shelmore Blvd #104, Mount Pleasant, SC 29464",
    bestFor: "Small group reformer classes in Mount Pleasant",
    signatureClass: "Group Reformer",
    bookingTip: "Mid-morning weekday classes are the easiest to book.",
  },
];

const BOOKING_TIPS = [{"heading": "Expect to pay about $25-40 a class", "body": "Local directory listings put drop-in reformer classes in the Charleston area at roughly $25-40, with unlimited memberships around $150-250 a month. Check each studio for current rates."}, {"heading": "Look for new-client offers", "body": "Many Charleston studios offer introductory packages for new clients. Use them to try two or three studios before committing."}, {"heading": "Plan around bridge traffic", "body": "Mount Pleasant, Daniel Island and the peninsula are close on a map but traffic on the bridges adds time at rush hour. Pick a studio near home or work."}, {"heading": "Start with the right level", "body": "Studios like Breathe Pilates run levelled classes. Starting at Level I, or with a private session, helps you learn the reformer safely."}, {"heading": "Bring grip socks and water", "body": "Grip socks are required at most reformer studios, and Charleston's heat makes water essential, especially for high-intensity formats."}];

const NEIGHBORHOODS = [{"name": "Downtown & Upper Meeting Street", "description": "The peninsula has owner-run reformer studios along upper Meeting Street and private studios on Church Street, convenient for downtown residents and visitors."}, {"name": "Mount Pleasant", "description": "The largest cluster of studios in the area, from high-intensity XFormer classes to small group reformer studios and Club Pilates."}, {"name": "Daniel Island", "description": "A quieter option with a well-reviewed reformer studio on River Landing Drive, handy for Daniel Island and Cainhoy residents."}, {"name": "Park Circle & West Ashley", "description": "North Charleston's Park Circle and West Ashley both have neighbourhood reformer studios, so you do not need to drive downtown for a good class."}];

const GEAR = [{"name": "Pilates Grip Socks", "note": "Our pick: toesox Low Rise Full-Toe Grip Socks (2-Pack). Required at most reformer studios; full-toe grip socks are the standard.", "price": "$30.00", "url": "https://www.amazon.com/dp/B07QHNDHW3?tag=pilatescollective-20"}, {"name": "Pilates Mat", "note": "Our pick: Manduka PRO Yoga & Pilates Mat (6mm). A dense 6mm mat for mat classes and home practice between studio sessions.", "price": "$144.00", "url": "https://www.amazon.com/dp/B0000DZFXZ?tag=pilatescollective-20"}, {"name": "Magic Circle", "note": "Our pick: Balanced Body Ultra-Fit Circle (15-inch). Many studios use the magic circle; worth owning for home reinforcement work.", "price": "$35.00", "url": "https://www.amazon.com/dp/B002YQW3IU?tag=pilatescollective-20"}, {"name": "Resistance Bands", "note": "Our pick: Arena Strength Fabric Glute Bands (3-Pack). Fabric loops that carry reformer leg and glute work into home sessions.", "price": "$29.00", "url": "https://www.amazon.com/dp/B07VYK14JC?tag=pilatescollective-20"}, {"name": "Foam Roller", "note": "Our pick: OPTP PRO-Roller Foam Roller (36-inch). For spinal mobility and release work before and after class.", "price": "$62.99", "url": "https://www.amazon.com/dp/B002C9EX14?tag=pilatescollective-20"}, {"name": "Home Pilates Reformer", "note": "Our pick: PAETA Wooden Foldable Reformer. A folding home reformer to keep your practice going between studio classes.", "price": "$719.99", "url": "https://www.amazon.com/dp/B0D7M7JNFV?tag=pilatescollective-20"}];

const RELATED_CITIES = [{"city": "Charlotte", "country": "United States", "href": "/cities/charlotte", "studioCount": 6}, {"city": "Raleigh", "country": "United States", "href": "/cities/raleigh", "studioCount": 6}, {"city": "Nashville", "country": "United States", "href": "/cities/nashville", "studioCount": 6}, {"city": "Atlanta", "country": "United States", "href": "/cities/atlanta", "studioCount": 6}];

const FURTHER_READING = [{"title": "Beginner's Guide to Reformer Pilates", "excerpt": "What to expect in your first reformer class, how to choose a studio and how to progress.", "href": "/blog/beginners-guide-to-reformer-pilates", "category": "Beginner Guide", "readTime": "8 min read"}, {"title": "Best Pilates Grip Socks (2026)", "excerpt": "Five verified grip socks for reformer classes, from budget packs to studio favourites.", "href": "/blog/best-pilates-grip-socks", "category": "Accessories", "readTime": "6 min read"}, {"title": "What to Wear to Pilates", "excerpt": "A complete studio outfit guide: leggings, tops, bras and what to leave at home.", "href": "/blog/what-to-wear-to-pilates", "category": "Apparel", "readTime": "6 min read"}, {"title": "Best Pilates Equipment for Home Practice", "excerpt": "Everything you need between studio sessions, from a quality mat to resistance bands.", "href": "/blog/best-pilates-equipment-for-home-practice", "category": "Equipment", "readTime": "10 min read"}];

const CITY_FAQS = [{"q": "What are the best Pilates studios in Charleston?", "a": "Our 6 picks are Shift Pilates Body Shop (Upper Meeting Street · West Ashley), Breathe Pilates (Daniel Island · Park Circle), Evolve Modern Pilates (Mount Pleasant), Momentum Movement Studios (Upper Meeting Street), InspoWellness (Downtown (Church Street)) and Pilates of Charleston (Mount Pleasant). Each listing above covers what the studio is best for, its signature class and a booking tip."}, {"q": "Which Charleston neighbourhoods are best for Pilates?", "a": "This guide covers Downtown & Upper Meeting Street, Mount Pleasant, Daniel Island and Park Circle & West Ashley. The peninsula has owner-run reformer studios along upper Meeting Street and private studios on Church Street, convenient for downtown residents and visitors."}, {"q": "What should I know about booking Pilates classes in Charleston?", "a": "Expect to pay about $25-40 a class. Look for new-client offers. Plan around bridge traffic."}, {"q": "What should I bring to a Pilates class in Charleston?", "a": "Grip socks are required at most reformer studios. Our gear list for Charleston covers grip socks, a Pilates mat, a magic circle, resistance bands, a foam roller and a home reformer."}, {"q": "How much does Pilates cost in Charleston?", "a": "Local directory listings put drop-in reformer classes at roughly $25-40 and unlimited memberships at about $150-250 a month. Private sessions cost more. Check each studio for current prices and new-client offers."}];

const gearName = (g: { name: string; note: string }) => g.note.match(/Our pick: ([^.]+(?:\.\d+[^.]*)?)\./)?.[1] ?? g.name;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Studios in Charleston, SC (2026)",
      "description": "The best Pilates studios in Charleston: reformer studios on Meeting Street, Daniel Island, Park Circle and Mount Pleasant, plus private studios. Six picks.",
      "url": "https://pilatescollectiveclub.com/cities/charleston",
      "datePublished": "2026-10-29",
      "dateModified": "2026-10-29",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-studio-open-window.png" },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/cities/charleston" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": CITY_FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
    productItemList("Pilates gear for classes in Charleston", GEAR.map((g) => ({ name: gearName(g), description: g.note, price: g.price, url: g.url }))),
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Cities", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "Charleston", "item": "https://pilatescollectiveclub.com/cities/charleston" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Charleston, SC",
      "url": "https://pilatescollectiveclub.com/cities/charleston",
      "numberOfItems": STUDIOS.length,
      "itemListElement": STUDIOS.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "ExerciseGym",
          "name": s.name,
          "description": s.review.slice(0, 200),
          "address": { "@type": "PostalAddress", "streetAddress": s.address, "addressLocality": "Charleston", "addressCountry": "US" },
        },
      })),
    },
  ],
};

export default function CharlestonPage() {
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
              <span style={{ color: "#8b4a31" }}>in Charleston, SC</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Studios checked October 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              {"Charleston's Pilates scene has grown well beyond its first reformer studios, with new owner-run studios on upper Meeting Street, high-intensity reformer formats in Mount Pleasant and private studios downtown. This guide covers six studios across the peninsula, Daniel Island and Mount Pleasant, with what each is best for and how to book."}
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-studio-open-window.png" alt="Pilates studio with an open window and natural light" fill priority className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Charleston, SC, United States</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Reformer studios from downtown to Daniel Island and Mount Pleasant</p>
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
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Charleston</h2>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Charleston</h2>
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
              Grip socks are required at most reformer studios in Charleston. These are our recommended picks, all available on Amazon.{" "}
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
          searchPlaceholder="Ask: best reformer Pilates in Charleston…"
        />
      </main>
      <Footer />
    </>
  );
}
