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
  title: "Best Pilates Studios in Dublin (2026)",
  description: "The best Pilates studios in Dublin: reformer studios on South William Street, Camden, Fitzwilliam Square, Rathmines and Rathfarnham. Six picks for 2026.",
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  keywords: ["pilates dublin", "reformer pilates dublin", "best pilates studios dublin", "pilates rathmines", "pilates dublin 2", "reformer pilates ireland", "pilates classes dublin", "pilates rathfarnham", "barre dublin"],
  openGraph: {
    title: "Best Pilates Studios in Dublin (2026)",
    description: "Six curated Pilates studios in Dublin: city centre, Rathmines and Rathfarnham reformer picks. Checked October 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/dublin",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-studio-arched-windows.png", width: 1200, height: 630, alt: "Dublin Pilates guide, Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Dublin (2026)",
    description: "Six curated Pilates studios in Dublin: city centre, Rathmines and Rathfarnham reformer picks. Checked October 2026.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-studio-arched-windows.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/dublin" },
};

const STUDIOS = [
  {
    number: "01",
    name: "SAINT Studios",
    neighborhood: "South William Street, Dublin 2",
    priceLevel: "$$$$",
    websiteUrl: "https://saintstudios.ie",
    review: "SAINT Studios is an all-in-one training space on South William Street combining HIIT, spin and reformer Pilates with rooftop recovery facilities, including three saunas and six cold plunges. It quickly became known for its reformer classes, which appear on its timetable as Signature 1 and Signature 2.",
    caveat: "a busy, premium city-centre club; expect a high-energy atmosphere rather than a quiet studio.",
    address: "South William Street, Dublin 2",
    bestFor: "Reformer classes plus sauna and cold-plunge recovery",
    signatureClass: "Signature Reformer",
    bookingTip: "Book a recovery session straight after class to make the most of the rooftop.",
  },
  {
    number: "02",
    name: "yogahub",
    neighborhood: "Camden · Smithfield · more city sites",
    priceLevel: "$$$",
    review: "yogahub runs boutique yoga and reformer Pilates studios across Dublin, including Camden Court off Camden Street and Smithfield. Classes range from hot yoga to Reformer and Sculpt Pilates, and the Camden studio adds a sauna and ice bath. New clients can start with a Reformer Pilates Intro 8 Pack.",
    caveat: "a multi-site brand, so the feel varies a little by location.",
    address: "5-8 Camden Court, Camden Street Lower, Dublin 2",
    bestFor: "Reformer Pilates and hot yoga across several city sites",
    signatureClass: "Reformer Pilates",
    bookingTip: "Start with the Reformer Pilates Intro 8 Pack before choosing a membership.",
  },
  {
    number: "03",
    name: "Luuma",
    neighborhood: "Fitzwilliam Square, Dublin 2",
    priceLevel: "$$$",
    review: "Luuma is a newer Pilates and yoga studio on Fitzwilliam Square South, in the Georgian heart of Dublin 2. Reviewers describe small, intimate classes, and the timetable mixes Pilates such as Tone & Sculpt with yoga flows.",
    caveat: "a small studio, so popular classes book out quickly.",
    address: "29-30 Fitzwilliam Square South, Dublin 2",
    bestFor: "Small, intimate Pilates classes in Georgian Dublin",
    signatureClass: "Pilates: Tone & Sculpt",
    bookingTip: "Book lunchtime classes early if you work nearby.",
  },
  {
    number: "04",
    name: "Monday Studio",
    neighborhood: "Rathmines, Dublin 6",
    priceLevel: "$$$",
    websiteUrl: "https://mondaystudio.ie",
    review: "Monday Studio is a first-floor studio on Rathmines Road Upper offering reformer Pilates, mat Pilates and barre. It is a convenient neighbourhood option for Rathmines and Ranelagh, with a timetable built around reformer classes.",
    caveat: "a neighbourhood studio with a smaller timetable than the big city-centre clubs.",
    address: "First Floor, 3 Rathmines Road Upper, Dublin 6, D06 N5K3",
    bestFor: "Neighbourhood reformer and barre in Rathmines",
    signatureClass: "Reformer Pilates",
    bookingTip: "Weekend morning classes are the most popular; book them early in the week.",
  },
  {
    number: "05",
    name: "Wunderform",
    neighborhood: "Rathmines, Dublin 6",
    priceLevel: "$$$",
    websiteUrl: "https://wunderform.ie",
    review: "Wunderform is a woman-owned contemporary Pilates and movement studio on Rathmines Road Lower. Its barre classes combine ballet, Pilates and strength training in a low-impact format, and the timetable includes Sculpt and Power Barre.",
    caveat: "barre-led rather than reformer-led; choose it for low-impact sculpting rather than machine work.",
    address: "302 Rathmines Road Lower, Dublin 6",
    bestFor: "Low-impact barre and contemporary Pilates",
    signatureClass: "Power Barre",
    bookingTip: "Bring grip socks; they are expected for barre and mat classes too.",
  },
  {
    number: "06",
    name: "Pilates Performance Ireland",
    neighborhood: "Rathfarnham, Dublin 16",
    priceLevel: "$$",
    review: "Pilates Performance Ireland runs reformer and mat classes from Grange Road Retail Park in Rathfarnham, with a clear progression from Reformer Beginners to Level 1 and 2. The studio says it has been named best Pilates studio in Ireland by the All Ireland Business Foundation for seven consecutive years.",
    caveat: "it is in the southern suburbs, so it suits locals more than visitors staying in the centre.",
    address: "Unit 11, Grange Road Retail Park, Rathfarnham, Dublin 16",
    bestFor: "Structured reformer progression in south Dublin",
    signatureClass: "Reformer Beginners",
    bookingTip: "Start in Reformer Beginners, even if you have done mat Pilates before.",
  },
];

const BOOKING_TIPS = [{"heading": "Book reformer classes a few days ahead", "body": "Reformer studios have a fixed number of machines, and evening and weekend classes in Dublin 2 and Rathmines fill first. Book as soon as you know your week."}, {"heading": "Use intro packs to compare studios", "body": "Several Dublin studios offer intro packs for new clients, such as yogahub's Reformer Pilates Intro 8 Pack. They are the cheapest way to find the right fit before committing."}, {"heading": "ClassPass covers a lot of Dublin", "body": "Many Dublin reformer studios list classes on ClassPass, which is handy if you want to sample studios across the city."}, {"heading": "Start at beginner level", "body": "Even experienced mat practitioners benefit from a beginner reformer class to learn the springs, straps and footbar safely."}, {"heading": "Bring grip socks", "body": "Grip socks are expected at almost every reformer studio. Owning a couple of pairs saves buying them at the desk."}];

const NEIGHBORHOODS = [{"name": "Dublin 2 city centre", "description": "South William Street, Camden Street and Fitzwilliam Square cover the full range, from a high-energy training club with rooftop recovery to small Georgian studios. Ideal if you work in the centre."}, {"name": "Rathmines & Ranelagh", "description": "Dublin 6 has a cluster of neighbourhood studios along Rathmines Road, offering reformer, mat and barre within walking distance of each other."}, {"name": "Smithfield & the north inner city", "description": "yogahub's Smithfield studio brings reformer and hot yoga north of the Liffey, a short walk from Stoneybatter."}, {"name": "Rathfarnham & the southern suburbs", "description": "Larger suburban studios with easier parking and structured reformer programmes, suited to regular locals rather than visitors."}];

const GEAR = [{"name": "Pilates Grip Socks", "note": "Our pick: toesox Low Rise Full-Toe Grip Socks (2-Pack). Required at most reformer studios; full-toe grip socks are the standard.", "price": "$30.00", "url": "https://www.amazon.com/dp/B07QHNDHW3?tag=pilatescollective-20"}, {"name": "Pilates Mat", "note": "Our pick: Manduka PRO Yoga & Pilates Mat (6mm). A dense 6mm mat for mat classes and home practice between studio sessions.", "price": "$144.00", "url": "https://www.amazon.com/dp/B0000DZFXZ?tag=pilatescollective-20"}, {"name": "Magic Circle", "note": "Our pick: Balanced Body Ultra-Fit Circle (15-inch). Many studios use the magic circle; worth owning for home reinforcement work.", "price": "$35.00", "url": "https://www.amazon.com/dp/B002YQW3IU?tag=pilatescollective-20"}, {"name": "Resistance Bands", "note": "Our pick: Arena Strength Fabric Glute Bands (3-Pack). Fabric loops that carry reformer leg and glute work into home sessions.", "price": "$29.00", "url": "https://www.amazon.com/dp/B07VYK14JC?tag=pilatescollective-20"}, {"name": "Foam Roller", "note": "Our pick: OPTP PRO-Roller Foam Roller (36-inch). For spinal mobility and release work before and after class.", "price": "$62.99", "url": "https://www.amazon.com/dp/B002C9EX14?tag=pilatescollective-20"}, {"name": "Home Pilates Reformer", "note": "Our pick: PAETA Wooden Foldable Reformer. A folding home reformer to keep your practice going between studio classes.", "price": "$719.99", "url": "https://www.amazon.com/dp/B0D7M7JNFV?tag=pilatescollective-20"}];

const RELATED_CITIES = [{"city": "London", "country": "United Kingdom", "href": "/cities/london", "studioCount": 6}, {"city": "Amsterdam", "country": "Netherlands", "href": "/cities/amsterdam", "studioCount": 6}, {"city": "Paris", "country": "France", "href": "/cities/paris", "studioCount": 6}, {"city": "Copenhagen", "country": "Denmark", "href": "/cities/copenhagen", "studioCount": 6}];

const FURTHER_READING = [{"title": "Beginner's Guide to Reformer Pilates", "excerpt": "What to expect in your first reformer class, how to choose a studio and how to progress.", "href": "/blog/beginners-guide-to-reformer-pilates", "category": "Beginner Guide", "readTime": "8 min read"}, {"title": "Best Pilates Grip Socks (2026)", "excerpt": "Five verified grip socks for reformer classes, from budget packs to studio favourites.", "href": "/blog/best-pilates-grip-socks", "category": "Accessories", "readTime": "6 min read"}, {"title": "What to Wear to Pilates", "excerpt": "A complete studio outfit guide: leggings, tops, bras and what to leave at home.", "href": "/blog/what-to-wear-to-pilates", "category": "Apparel", "readTime": "6 min read"}, {"title": "Best Pilates Equipment for Home Practice", "excerpt": "Everything you need between studio sessions, from a quality mat to resistance bands.", "href": "/blog/best-pilates-equipment-for-home-practice", "category": "Equipment", "readTime": "10 min read"}];

const CITY_FAQS = [{"q": "What are the best Pilates studios in Dublin?", "a": "Our 6 picks are SAINT Studios (South William Street, Dublin 2), yogahub (Camden · Smithfield · more city sites), Luuma (Fitzwilliam Square, Dublin 2), Monday Studio (Rathmines, Dublin 6), Wunderform (Rathmines, Dublin 6) and Pilates Performance Ireland (Rathfarnham, Dublin 16). Each listing above covers what the studio is best for, its signature class and a booking tip."}, {"q": "Which Dublin neighbourhoods are best for Pilates?", "a": "This guide covers Dublin 2 city centre, Rathmines & Ranelagh, Smithfield & the north inner city and Rathfarnham & the southern suburbs. South William Street, Camden Street and Fitzwilliam Square cover the full range, from a high-energy training club with rooftop recovery to small Georgian studios. Ideal if you work in the centre."}, {"q": "What should I know about booking Pilates classes in Dublin?", "a": "Book reformer classes a few days ahead. Use intro packs to compare studios. ClassPass covers a lot of Dublin."}, {"q": "What should I bring to a Pilates class in Dublin?", "a": "Grip socks are required at most reformer studios. Our gear list for Dublin covers grip socks, a Pilates mat, a magic circle, resistance bands, a foam roller and a home reformer."}, {"q": "Do Dublin studios offer recovery facilities?", "a": "Some do. SAINT Studios has rooftop recovery with saunas and cold plunges, and yogahub's Camden studio has a sauna and ice bath. Smaller neighbourhood studios usually focus on classes only."}];

const gearName = (g: { name: string; note: string }) => g.note.match(/Our pick: ([^.]+(?:\.\d+[^.]*)?)\./)?.[1] ?? g.name;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Studios in Dublin (2026)",
      "description": "The best Pilates studios in Dublin: reformer studios on South William Street, Camden, Fitzwilliam Square, Rathmines and Rathfarnham. Six picks for 2026.",
      "url": "https://pilatescollectiveclub.com/cities/dublin",
      "datePublished": "2026-10-29",
      "dateModified": "2026-10-29",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-studio-arched-windows.png" },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/cities/dublin" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": CITY_FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
    productItemList("Pilates gear for classes in Dublin", GEAR.map((g) => ({ name: gearName(g), description: g.note, price: g.price, url: g.url }))),
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Cities", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "Dublin", "item": "https://pilatescollectiveclub.com/cities/dublin" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Dublin",
      "url": "https://pilatescollectiveclub.com/cities/dublin",
      "numberOfItems": STUDIOS.length,
      "itemListElement": STUDIOS.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "ExerciseGym",
          "name": s.name,
          "description": s.review.slice(0, 200),
          "address": { "@type": "PostalAddress", "streetAddress": s.address, "addressLocality": "Dublin", "addressCountry": "IE" },
        },
      })),
    },
  ],
};

export default function DublinPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Ireland</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br />
              <span style={{ color: "#8b4a31" }}>in Dublin</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Studios checked October 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              {"Reformer Pilates has taken off in Dublin, and the city now has everything from all-in-one training clubs with rooftop saunas to small studios in Rathmines where the instructors know every client by name. This guide covers six studios we rate, mostly in Dublin 2 and Dublin 6, with what each is best for and how to book."}
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-studio-arched-windows.png" alt="Pilates studio with tall arched windows" fill priority className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Dublin, Ireland</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Reformer studios from Dublin 2 to Rathmines and Rathfarnham</p>
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
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Dublin</h2>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Dublin</h2>
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
              Grip socks are required at most reformer studios in Dublin. These are our recommended picks, all available on Amazon.{" "}
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
          searchPlaceholder="Ask: best reformer Pilates in Dublin…"
        />
      </main>
      <Footer />
    </>
  );
}
