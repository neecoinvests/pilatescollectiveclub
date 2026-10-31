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
  title: "Best Pilates Studios in Austin, TX (2026)",
  description: "The best Pilates studios in Austin: classical Romana's Pilates in Rosedale, reformer on West 6th and South Lamar, Lagree in East Austin. Six picks for 2026.",
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  keywords: ["pilates austin", "reformer pilates austin", "best pilates studios austin", "classical pilates austin", "lagree austin", "megaformer austin", "pilates south lamar", "pilates rosedale", "pilates classes austin"],
  openGraph: {
    title: "Best Pilates Studios in Austin, TX (2026)",
    description: "Six curated Pilates studios in Austin: Rosedale, West 6th, South Lamar, East Austin and Oak Hill. Checked October 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/austin",
    images: [{ url: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=1400&q=80", width: 1200, height: 630, alt: "Austin Pilates guide, Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Austin, TX (2026)",
    description: "Six curated Pilates studios in Austin: Rosedale, West 6th, South Lamar, East Austin and Oak Hill. Checked October 2026.",
    images: ["https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=1400&q=80"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/austin" },
};

const STUDIOS = [
  {
    number: "01",
    name: "ALIGN Pilates Studios",
    neighborhood: "Clarksville / West 6th · East Austin",
    priceLevel: "$$$",
    review: "ALIGN is an education-driven Pilates studio founded by Brooke Bowersock, offering reformer, mat and fully equipped Pilates in Austin and Houston. ALIGN West on West 6th Street is its original studio, rated 4.9 on ClassPass, and ALIGN east doubles as its teacher-training studio.",
    caveat: "\"voted best\" claims on its own channels are self-reported.",
    address: "1204 W 6th St, Austin, TX 78703",
    bestFor: "Education-driven reformer and equipment classes",
    signatureClass: "Reformer",
    bookingTip: "Try ALIGN east if you are interested in teacher training.",
  },
  {
    number: "02",
    name: "Sharp Pilates",
    neighborhood: "Rosedale",
    priceLevel: "$$$$",
    review: "Sharp Pilates on Marathon Boulevard is a Romana's Pilates studio, teaching the classical method through private, semi-private and small-group sessions. It is the place to go in Austin if you want to learn Pilates as Joseph Pilates taught it.",
    caveat: "not to be confused with SharpBody Pilates, a separate reformer studio in East Austin.",
    address: "4111 Marathon Blvd, Suite 150, Austin, TX 78756",
    bestFor: "Classical Romana's Pilates",
    signatureClass: "Classical Private",
    bookingTip: "Start with private sessions to learn the classical order.",
  },
  {
    number: "03",
    name: "Pure Pilates Austin",
    neighborhood: "South Lamar · The Domain",
    priceLevel: "$$$",
    review: "Pure Pilates opened its South Lamar studio in early 2018 with ten Megaformer machines and free parking, and runs Pure Sculpt classes on the Megaformer. It also has a studio at The Domain in north Austin.",
    caveat: "Megaformer classes are intense; pick a reformer studio if you want slower technique.",
    address: "1414 S Lamar Blvd, Ste 101, Austin, TX 78704",
    bestFor: "Megaformer sculpt classes",
    signatureClass: "Pure Sculpt (Megaformer)",
    bookingTip: "Confirm which location you have booked; Domain and South Lamar are far apart.",
  },
  {
    number: "04",
    name: "Urban Lagree",
    neighborhood: "East Austin · Rosedale · South Congress",
    priceLevel: "$$$",
    review: "Urban Lagree is a locally owned Lagree studio founded by Abigayle Rosser and Katie Hayes, who opened their first studio on Chicon Street in East Austin in 2019. Its 45-minute full-body classes run on the Megaformer, and it now has studios in Rosedale and on South Congress too.",
    caveat: "Lagree is not classical Pilates; it is a slower, high-tension format.",
    address: "1212 Chicon St, Ste 104, Austin, TX 78702",
    bestFor: "Locally owned Lagree",
    signatureClass: "Lagree (45 min)",
    bookingTip: "Arrive early for your first class to learn the machine.",
  },
  {
    number: "05",
    name: "Pilates West",
    neighborhood: "Oak Hill (Southwest Austin)",
    priceLevel: "$$$",
    review: "Pilates West opened on Highway 290 in Oak Hill in 2018, offering small-group classes and private sessions on modern equipment, in person and online seven days a week. It is rated 4.9 by thousands of ClassPass users.",
    caveat: "it is in southwest Austin, so it suits Oak Hill and Dripping Springs residents best.",
    address: "6340 US-290 W, Ste 105, Austin, TX 78735",
    bestFor: "Small groups and privates in southwest Austin",
    signatureClass: "Small Group Reformer",
    bookingTip: "Ask about online classes for days you cannot make it in.",
  },
  {
    number: "06",
    name: "ATX Pilates",
    neighborhood: "South Lamar",
    priceLevel: "$$",
    review: "ATX Pilates is a neighbourhood reformer studio on South Lamar Boulevard, listed on ClassPass and convenient for Zilker and Bouldin Creek residents.",
    caveat: "limited published detail; check class formats when you book. Not to be confused with BE Fit Modern Pilates nearby.",
    address: "2300 S Lamar Blvd, Ste 105, Austin, TX 78704",
    bestFor: "Neighbourhood reformer on South Lamar",
    signatureClass: "Reformer",
    bookingTip: "Try a class on ClassPass first.",
  },
];

const BOOKING_TIPS = [{"heading": "Know Pilates from Megaformer and Lagree", "body": "Austin has classical studios, reformer studios and Megaformer/Lagree studios. They feel very different, so pick the style that fits your goal."}, {"heading": "Book early mornings ahead", "body": "Before-work classes fill first in central Austin. Book as soon as the schedule opens."}, {"heading": "Check the location", "body": "Several Austin brands run multiple studios across the city. Confirm the address before you drive."}, {"heading": "Try classical once", "body": "A private session at a classical studio is the best way to understand the method behind every reformer class."}, {"heading": "Bring grip socks and water", "body": "Grip socks are required at most studios, and Texas heat makes water essential."}];

const NEIGHBORHOODS = [{"name": "South Lamar & Zilker", "description": "Megaformer and reformer studios along South Lamar, close to Zilker Park."}, {"name": "Clarksville & West 6th", "description": "An education-driven reformer studio near downtown, convenient for central Austin."}, {"name": "Rosedale & Central Austin", "description": "Classical Romana's Pilates and Lagree studios in quiet central neighbourhoods."}, {"name": "East Austin & Oak Hill", "description": "Locally owned Lagree on Chicon Street and small-group studios out in southwest Austin."}];

const GEAR = [{"name": "Pilates Grip Socks", "note": "Our pick: toesox Low Rise Full-Toe Grip Socks (2-Pack). Required at most reformer studios; full-toe grip socks are the standard.", "price": "$30.00", "url": "https://www.amazon.com/dp/B07QHNDHW3?tag=pilatescollective-20"}, {"name": "Pilates Mat", "note": "Our pick: Manduka PRO Yoga & Pilates Mat (6mm). A dense 6mm mat for mat classes and home practice between studio sessions.", "price": "$144.00", "url": "https://www.amazon.com/dp/B0000DZFXZ?tag=pilatescollective-20"}, {"name": "Magic Circle", "note": "Our pick: Balanced Body Ultra-Fit Circle (15-inch). Many studios use the magic circle; worth owning for home reinforcement work.", "price": "$35.00", "url": "https://www.amazon.com/dp/B002YQW3IU?tag=pilatescollective-20"}, {"name": "Resistance Bands", "note": "Our pick: Arena Strength Fabric Glute Bands (3-Pack). Fabric loops that carry reformer leg and glute work into home sessions.", "price": "$29.00", "url": "https://www.amazon.com/dp/B07VYK14JC?tag=pilatescollective-20"}, {"name": "Foam Roller", "note": "Our pick: OPTP PRO-Roller Foam Roller (36-inch). For spinal mobility and release work before and after class.", "price": "$62.99", "url": "https://www.amazon.com/dp/B002C9EX14?tag=pilatescollective-20"}, {"name": "Home Pilates Reformer", "note": "Our pick: PAETA Wooden Foldable Reformer. A folding home reformer to keep your practice going between studio classes.", "price": "$719.99", "url": "https://www.amazon.com/dp/B0D7M7JNFV?tag=pilatescollective-20"}];

const RELATED_CITIES = [{"city": "Houston", "country": "United States", "href": "/cities/houston", "studioCount": 6}, {"city": "Dallas", "country": "United States", "href": "/cities/dallas", "studioCount": 6}, {"city": "Los Angeles", "country": "United States", "href": "/cities/los-angeles", "studioCount": 6}, {"city": "Miami", "country": "United States", "href": "/cities/miami", "studioCount": 6}];

const FURTHER_READING = [{"title": "Beginner's Guide to Reformer Pilates", "excerpt": "What to expect in your first reformer class, how to choose a studio and how to progress.", "href": "/blog/beginners-guide-to-reformer-pilates", "category": "Beginner Guide", "readTime": "8 min read"}, {"title": "Best Megaformer Machine (2026)", "excerpt": "The machines behind Lagree classes, and what a home Megaformer setup really costs.", "href": "/blog/best-megaformer-machine", "category": "Lagree", "readTime": "12 min read"}, {"title": "Best Pilates Grip Socks (2026)", "excerpt": "Five verified grip socks for reformer classes, from budget packs to studio favourites.", "href": "/blog/best-pilates-grip-socks", "category": "Accessories", "readTime": "6 min read"}, {"title": "What to Wear to Pilates", "excerpt": "A complete studio outfit guide: leggings, tops, bras and what to leave at home.", "href": "/blog/what-to-wear-to-pilates", "category": "Apparel", "readTime": "6 min read"}];

const CITY_FAQS = [{"q": "What are the best Pilates studios in Austin?", "a": "Our 6 picks are ALIGN Pilates Studios (Clarksville / West 6th · East Austin), Sharp Pilates (Rosedale), Pure Pilates Austin (South Lamar · The Domain), Urban Lagree (East Austin · Rosedale · South Congress), Pilates West (Oak Hill (Southwest Austin)) and ATX Pilates (South Lamar). Each listing above covers what the studio is best for, its signature class and a booking tip."}, {"q": "Which Austin neighbourhoods are best for Pilates?", "a": "This guide covers South Lamar & Zilker, Clarksville & West 6th, Rosedale & Central Austin and East Austin & Oak Hill. Megaformer and reformer studios along South Lamar, close to Zilker Park."}, {"q": "What should I know about booking Pilates classes in Austin?", "a": "Know Pilates from Megaformer and Lagree. Book early mornings ahead. Check the location."}, {"q": "What should I bring to a Pilates class in Austin?", "a": "Grip socks are required at most reformer studios. Our gear list for Austin covers grip socks, a Pilates mat, a magic circle, resistance bands, a foam roller and a home reformer."}, {"q": "Is there classical Pilates in Austin?", "a": "Yes. Sharp Pilates in Rosedale is a Romana's Pilates studio teaching the classical method through private, semi-private and small-group sessions."}];

const gearName = (g: { name: string; note: string }) => g.note.match(/Our pick: ([^.]+(?:\.\d+[^.]*)?)\./)?.[1] ?? g.name;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Studios in Austin, TX (2026)",
      "description": "The best Pilates studios in Austin: classical Romana's Pilates in Rosedale, reformer on West 6th and South Lamar, Lagree in East Austin. Six picks for 2026.",
      "url": "https://pilatescollectiveclub.com/cities/austin",
      "datePublished": "2026-06-01",
      "dateModified": "2026-10-31",
      "image": { "@type": "ImageObject", "url": "https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=1400&q=80" },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/cities/austin" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": CITY_FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
    productItemList("Pilates gear for classes in Austin", GEAR.map((g) => ({ name: gearName(g), description: g.note, price: g.price, url: g.url }))),
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Cities", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "Austin", "item": "https://pilatescollectiveclub.com/cities/austin" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Austin, TX",
      "url": "https://pilatescollectiveclub.com/cities/austin",
      "numberOfItems": STUDIOS.length,
      "itemListElement": STUDIOS.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "ExerciseGym",
          "name": s.name,
          "description": s.review.slice(0, 200),
          "address": { "@type": "PostalAddress", "streetAddress": s.address, "addressLocality": "Austin", "addressCountry": "US" },
        },
      })),
    },
  ],
};

export default function AustinPage() {
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
              <span style={{ color: "#8b4a31" }}>in Austin, TX</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Studios checked October 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              {"Austin's Pilates scene runs from classical Romana's Pilates in Rosedale to education-driven reformer studios on West 6th, Megaformer classes on South Lamar and Lagree in East Austin, and new studios keep opening. This guide covers six established studios with confirmed addresses, what each does best and how to book."}
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=1400&q=80" alt="Austin skyline" fill priority className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Austin, TX, United States</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Classical, reformer and Megaformer from South Lamar to Rosedale</p>
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
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Austin</h2>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Austin</h2>
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
              Grip socks are required at most reformer studios in Austin. These are our recommended picks, all available on Amazon.{" "}
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
          searchPlaceholder="Ask: best reformer Pilates in Austin…"
        />
      </main>
      <Footer />
    </>
  );
}
