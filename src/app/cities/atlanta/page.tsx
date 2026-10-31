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
  title: "Best Pilates Studios in Atlanta, GA (2026)",
  description: "The best Pilates studios in Atlanta: top-rated reformer studios in Buckhead, West Midtown and on the BeltLine in Virginia-Highland. Six picks, checked for 2026.",
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  keywords: ["pilates atlanta", "reformer pilates atlanta", "best pilates studios atlanta", "pilates buckhead", "pilates west midtown", "pilates beltline", "pilates virginia highland", "pilates classes atlanta"],
  openGraph: {
    title: "Best Pilates Studios in Atlanta, GA (2026)",
    description: "Six curated Pilates studios in Atlanta: Buckhead, West Midtown, Virginia-Highland and Emory Village. Checked October 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/atlanta",
    images: [{ url: "https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?w=1400&q=80", width: 1200, height: 630, alt: "Atlanta Pilates guide, Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Atlanta, GA (2026)",
    description: "Six curated Pilates studios in Atlanta: Buckhead, West Midtown, Virginia-Highland and Emory Village. Checked October 2026.",
    images: ["https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?w=1400&q=80"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/atlanta" },
};

const STUDIOS = [
  {
    number: "01",
    name: "The Daily Pilates Buckhead",
    neighborhood: "Buckhead Village",
    priceLevel: "$$$",
    review: "The Daily Pilates is one of Atlanta's most-reviewed reformer studios, rated 4.9 by tens of thousands of ClassPass users. Its Buckhead studio on Pharr Road runs classes such as The Daily Sculpt on the reformer, and the brand has been expanding to new studios around metro Atlanta.",
    caveat: "very popular, so peak classes fill quickly.",
    address: "230 Pharr Rd NE, Atlanta, GA 30305",
    bestFor: "Highly rated reformer in Buckhead",
    signatureClass: "The Daily Sculpt (Reformer)",
    bookingTip: "Park in the Buckhead Village deck on Pharr Road; the entrance is near F45.",
  },
  {
    number: "02",
    name: "The Studio Pilates",
    neighborhood: "West Midtown · Emory Village",
    priceLevel: "$$$",
    review: "The Studio Pilates opened its West Midtown studio on Trabert Avenue in 2024, with group reformer and tower classes plus semi-private and private training taught by certified instructors. It also has a studio in Emory Village on North Decatur Road.",
    caveat: "rating figures quoted on its own site are self-reported.",
    address: "763 Trabert Ave NW, Unit D, Atlanta, GA 30318",
    bestFor: "Reformer and tower classes with certified instructors",
    signatureClass: "Reformer + Tower",
    bookingTip: "Start with the Two-Class Trial; free two-hour parking is in the back lot.",
  },
  {
    number: "03",
    name: "HIPfit",
    neighborhood: "Virginia-Highland (on the BeltLine)",
    priceLevel: "$$$",
    review: "HIPfit calls itself the first high-intensity Pilates studio directly on the BeltLine in Virginia-Highland, inside The Training Room on Ponce de Leon Place. It merges low-impact, high-intensity movement with targeted resistance training, and is rated 4.9 by thousands of ClassPass users.",
    caveat: "a high-intensity format; not the place for slow classical technique.",
    address: "742 Ponce de Leon Pl NE, Atlanta, GA 30306",
    bestFor: "High-intensity Pilates on the BeltLine",
    signatureClass: "HIPfit",
    bookingTip: "Book the Sunday-morning introductory class if you are new.",
  },
  {
    number: "04",
    name: "JETSET Pilates Buckhead",
    neighborhood: "Buckhead (Piedmont Road)",
    priceLevel: "$$$",
    review: "JETSET's 50-minute, high-intensity, low-impact reformer workout arrived in Buckhead in 2026, in the Buckhead Landing centre on Piedmont Road. It is run by local franchisees Nick and Neo Celeste, who are also planning a Midtown studio.",
    caveat: "a franchise format built for intensity rather than technique.",
    address: "3330 Piedmont Rd NE, Atlanta, GA 30305",
    bestFor: "Fast, high-intensity reformer",
    signatureClass: "JETSET Reformer",
    bookingTip: "Bring water and a towel; classes are sweaty.",
  },
  {
    number: "05",
    name: "SculptHouse",
    neighborhood: "Buckhead (Peachtree Road)",
    priceLevel: "$$$",
    review: "SculptHouse on Peachtree Road runs high-intensity Pilates-based formats such as CardioSculpt and StrengthSculpt. It suits anyone who wants a hard, music-driven workout with Pilates principles.",
    caveat: "check class descriptions; not every class is on the reformer.",
    address: "3167 Peachtree Rd, Suite Q, Atlanta, GA",
    bestFor: "High-intensity sculpt classes",
    signatureClass: "StrengthSculpt",
    bookingTip: "Try a CardioSculpt class if you want maximum sweat.",
  },
  {
    number: "06",
    name: "Club Pilates Buckhead",
    neighborhood: "Peachtree Battle",
    priceLevel: "$$",
    review: "Club Pilates opened its first in-town Atlanta studio in the Peachtree Battle Shopping Center in 2017. It runs reformer-based classes in a structured, levelled system, which makes it a good-value option for regular weekly practice.",
    caveat: "a franchise studio; consistent, but less intimate than a boutique.",
    address: "2391 Peachtree Rd NE, Suite B3Ab, Atlanta, GA 30305",
    bestFor: "Structured, good-value reformer",
    signatureClass: "Reformer Flow",
    bookingTip: "Start with an intro class so an instructor can set you up.",
  },
];

const BOOKING_TIPS = [{"heading": "Book Buckhead classes early", "body": "Buckhead's top reformer studios are some of the most-booked in the city. Reserve before-work and evening classes a few days ahead."}, {"heading": "Plan around traffic and parking", "body": "Atlanta traffic can turn a short trip into a long one. Choose a studio near home or work, and check parking instructions before your first class."}, {"heading": "Use intro offers", "body": "Many Atlanta studios run trials or intro classes for new clients. Use them to compare two or three before committing."}, {"heading": "Pick your intensity", "body": "Atlanta has many high-intensity reformer formats as well as studios with tower and private training. Choose based on your goal."}, {"heading": "Bring grip socks and water", "body": "Grip socks are required at most reformer studios, and Atlanta summers make water essential."}];

const NEIGHBORHOODS = [{"name": "Buckhead", "description": "The centre of Atlanta's reformer scene, with highly rated studios around Buckhead Village, Piedmont Road and Peachtree Road."}, {"name": "West Midtown", "description": "Reformer and tower studios among the converted warehouses, with easy parking."}, {"name": "Virginia-Highland & the BeltLine", "description": "High-intensity Pilates right on the BeltLine, ideal before or after a walk on the trail."}, {"name": "Emory Village & Decatur", "description": "Neighbourhood studios for the east side, including a second studio from The Studio Pilates."}];

const GEAR = [{"name": "Pilates Grip Socks", "note": "Our pick: toesox Low Rise Full-Toe Grip Socks (2-Pack). Required at most reformer studios; full-toe grip socks are the standard.", "price": "$30.00", "url": "https://www.amazon.com/dp/B07QHNDHW3?tag=pilatescollective-20"}, {"name": "Pilates Mat", "note": "Our pick: Manduka PRO Yoga & Pilates Mat (6mm). A dense 6mm mat for mat classes and home practice between studio sessions.", "price": "$144.00", "url": "https://www.amazon.com/dp/B0000DZFXZ?tag=pilatescollective-20"}, {"name": "Magic Circle", "note": "Our pick: Balanced Body Ultra-Fit Circle (15-inch). Many studios use the magic circle; worth owning for home reinforcement work.", "price": "$35.00", "url": "https://www.amazon.com/dp/B002YQW3IU?tag=pilatescollective-20"}, {"name": "Resistance Bands", "note": "Our pick: Arena Strength Fabric Glute Bands (3-Pack). Fabric loops that carry reformer leg and glute work into home sessions.", "price": "$29.00", "url": "https://www.amazon.com/dp/B07VYK14JC?tag=pilatescollective-20"}, {"name": "Foam Roller", "note": "Our pick: OPTP PRO-Roller Foam Roller (36-inch). For spinal mobility and release work before and after class.", "price": "$62.99", "url": "https://www.amazon.com/dp/B002C9EX14?tag=pilatescollective-20"}, {"name": "Home Pilates Reformer", "note": "Our pick: PAETA Wooden Foldable Reformer. A folding home reformer to keep your practice going between studio classes.", "price": "$719.99", "url": "https://www.amazon.com/dp/B0D7M7JNFV?tag=pilatescollective-20"}];

const RELATED_CITIES = [{"city": "Nashville", "country": "United States", "href": "/cities/nashville", "studioCount": 6}, {"city": "Miami", "country": "United States", "href": "/cities/miami", "studioCount": 6}, {"city": "Washington DC", "country": "United States", "href": "/cities/washington-dc", "studioCount": 6}, {"city": "Austin", "country": "United States", "href": "/cities/austin", "studioCount": 6}];

const FURTHER_READING = [{"title": "Beginner's Guide to Reformer Pilates", "excerpt": "What to expect in your first reformer class, how to choose a studio and how to progress.", "href": "/blog/beginners-guide-to-reformer-pilates", "category": "Beginner Guide", "readTime": "8 min read"}, {"title": "Best Pilates Grip Socks (2026)", "excerpt": "Five verified grip socks for reformer classes, from budget packs to studio favourites.", "href": "/blog/best-pilates-grip-socks", "category": "Accessories", "readTime": "6 min read"}, {"title": "What to Wear to Pilates", "excerpt": "A complete studio outfit guide: leggings, tops, bras and what to leave at home.", "href": "/blog/what-to-wear-to-pilates", "category": "Apparel", "readTime": "6 min read"}, {"title": "Best Pilates Equipment for Home Practice", "excerpt": "Everything you need between studio sessions, from a quality mat to resistance bands.", "href": "/blog/best-pilates-equipment-for-home-practice", "category": "Equipment", "readTime": "10 min read"}];

const CITY_FAQS = [{"q": "What are the best Pilates studios in Atlanta?", "a": "Our 6 picks are The Daily Pilates Buckhead (Buckhead Village), The Studio Pilates (West Midtown · Emory Village), HIPfit (Virginia-Highland (on the BeltLine)), JETSET Pilates Buckhead (Buckhead (Piedmont Road)), SculptHouse (Buckhead (Peachtree Road)) and Club Pilates Buckhead (Peachtree Battle). Each listing above covers what the studio is best for, its signature class and a booking tip."}, {"q": "Which Atlanta neighbourhoods are best for Pilates?", "a": "This guide covers Buckhead, West Midtown, Virginia-Highland & the BeltLine and Emory Village & Decatur. The centre of Atlanta's reformer scene, with highly rated studios around Buckhead Village, Piedmont Road and Peachtree Road."}, {"q": "What should I know about booking Pilates classes in Atlanta?", "a": "Book Buckhead classes early. Plan around traffic and parking. Use intro offers."}, {"q": "What should I bring to a Pilates class in Atlanta?", "a": "Grip socks are required at most reformer studios. Our gear list for Atlanta covers grip socks, a Pilates mat, a magic circle, resistance bands, a foam roller and a home reformer."}, {"q": "Which Atlanta Pilates studio has the most reviews?", "a": "The Daily Pilates in Buckhead is one of the most-reviewed reformer studios in Atlanta, rated 4.9 by tens of thousands of ClassPass users."}];

const gearName = (g: { name: string; note: string }) => g.note.match(/Our pick: ([^.]+(?:\.\d+[^.]*)?)\./)?.[1] ?? g.name;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Studios in Atlanta, GA (2026)",
      "description": "The best Pilates studios in Atlanta: top-rated reformer studios in Buckhead, West Midtown and on the BeltLine in Virginia-Highland. Six picks, checked for 2026.",
      "url": "https://pilatescollectiveclub.com/cities/atlanta",
      "datePublished": "2026-06-01",
      "dateModified": "2026-10-31",
      "image": { "@type": "ImageObject", "url": "https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?w=1400&q=80" },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/cities/atlanta" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": CITY_FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
    productItemList("Pilates gear for classes in Atlanta", GEAR.map((g) => ({ name: gearName(g), description: g.note, price: g.price, url: g.url }))),
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Cities", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "Atlanta", "item": "https://pilatescollectiveclub.com/cities/atlanta" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Atlanta, GA",
      "url": "https://pilatescollectiveclub.com/cities/atlanta",
      "numberOfItems": STUDIOS.length,
      "itemListElement": STUDIOS.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "ExerciseGym",
          "name": s.name,
          "description": s.review.slice(0, 200),
          "address": { "@type": "PostalAddress", "streetAddress": s.address, "addressLocality": "Atlanta", "addressCountry": "US" },
        },
      })),
    },
  ],
};

export default function AtlantaPage() {
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
              <span style={{ color: "#8b4a31" }}>in Atlanta, GA</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Studios checked October 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              {"Pilates has become one of Atlanta's favourite workouts, and Buckhead in particular now has some of the most-reviewed reformer studios in the South. This guide covers six studios with confirmed addresses, from Buckhead to West Midtown and the BeltLine, with what each does best and how to book."}
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?w=1400&q=80" alt="Atlanta skyline" fill priority className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Atlanta, GA, United States</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Reformer studios from Buckhead to West Midtown and the BeltLine</p>
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
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Atlanta</h2>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Atlanta</h2>
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
              Grip socks are required at most reformer studios in Atlanta. These are our recommended picks, all available on Amazon.{" "}
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
          searchPlaceholder="Ask: best reformer Pilates in Atlanta…"
        />
      </main>
      <Footer />
    </>
  );
}
