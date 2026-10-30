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
  title: "Best Pilates Studios in Vienna (2026)",
  description: "The best Pilates studios in Vienna: reformer studios in the Innere Stadt, Neubau, Mariahilf, Josefstadt and Alsergrund, plus Lagree. Six picks for 2026.",
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  keywords: ["pilates vienna", "pilates wien", "reformer pilates wien", "best pilates studios vienna", "reformer pilates vienna", "lagree wien", "pilates studio wien", "pilates 1010 wien", "pilates classes vienna english"],
  openGraph: {
    title: "Best Pilates Studios in Vienna (2026)",
    description: "Six curated Pilates studios in Vienna: Innere Stadt, Neubau, Mariahilf, Josefstadt and Alsergrund. Checked October 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/vienna",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-studio-bench-towels.png", width: 1200, height: 630, alt: "Vienna Pilates guide, Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Vienna (2026)",
    description: "Six curated Pilates studios in Vienna: Innere Stadt, Neubau, Mariahilf, Josefstadt and Alsergrund. Checked October 2026.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-studio-bench-towels.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/vienna" },
};

const STUDIOS = [
  {
    number: "01",
    name: "JUNE",
    neighborhood: "Innere Stadt (1st district)",
    priceLevel: "$$$",
    review: "JUNE's signature is its Dynamic Reformer class, a Pilates-inspired reformer workout built for strength, flexibility and posture, with flows set to motivating music. Its studio on Reichsratsstraße near Parliament runs classes in German and English, and there is a second JUNE studio, JUNE Townhouse, on Schwertgasse.",
    caveat: "the entrance is on the Doblhofgasse side, which first-timers often miss.",
    address: "Reichsratsstraße 5, 1010 Wien",
    bestFor: "Dynamic, music-driven reformer in the 1st district",
    signatureClass: "Dynamic Reformer",
    bookingTip: "Look for the English-language Dynamic Reformer sessions if you do not speak German.",
  },
  {
    number: "02",
    name: "Maité",
    neighborhood: "Neubau (7th district)",
    priceLevel: "$$$",
    review: "Maité is a 340-square-metre reformer and yoga club on Neubaugasse, with changing rooms stocked with Dyson hair dryers. Classes include Reformer Flow and Dynamic Reformer, and its Maité Academy runs advanced reformer teacher training at the same address.",
    caveat: "a large, polished club; less intimate than a small owner-run studio.",
    address: "Neubaugasse 64-66, 1070 Wien",
    bestFor: "A spacious reformer club with yoga and teacher training",
    signatureClass: "Reformer Flow",
    bookingTip: "Early-morning Reformer Flow classes are a good way to start the day before work.",
  },
  {
    number: "03",
    name: "PY Studio",
    neighborhood: "Alsergrund (9th district) · 1st district",
    priceLevel: "$$",
    review: "PY Studio runs reformer Pilates, yoga and strength workouts from studios in the 9th and 1st districts, including Garnisongasse near the university. Its 55-minute Reformer Flow and beginner classes are among the best-reviewed in Vienna on Eversports, with thousands of ratings.",
    caveat: "pregnant clients cannot take part in reformer classes, and cancellations need three hours' notice.",
    address: "Garnisongasse 4/1, 1090 Wien",
    bestFor: "Well-reviewed reformer classes at a fair price",
    signatureClass: "Reformer Flow",
    bookingTip: "Start with a beginner reformer class before moving to Reformer Flow.",
  },
  {
    number: "04",
    name: "DIE DER Studio",
    neighborhood: "Mariahilf (6th district)",
    priceLevel: "$$$",
    review: "DIE DER Studio on Nelkengasse brings Los Angeles-style reformer Pilates energy to Vienna, with a personalised approach and instructors who are friendly to beginners. It is rated around 4.9 across booking platforms.",
    caveat: "a boutique studio with a smaller timetable than the larger clubs.",
    address: "Nelkengasse 6/5, 1060 Wien",
    bestFor: "Personalised, LA-style reformer classes",
    signatureClass: "Reformer Pilates",
    bookingTip: "Mention you are new when you book; instructors adapt the class for beginners.",
  },
  {
    number: "05",
    name: "BÅL Studios",
    neighborhood: "Josefstadt (8th district)",
    priceLevel: "$$$",
    review: "BÅL Studios brought high-intensity, low-impact training on next-generation MegaCore machines to Josefstadt. Its 50-minute Full Body Burner class is one of the most intense reformer-style workouts in the city, and it is rated around 4.9 by thousands of ClassPass users.",
    caveat: "MegaCore is closer to Lagree than classical Pilates; expect a tough, sweaty workout.",
    address: "Schmidgasse 2/1, 1080 Wien",
    bestFor: "High-intensity, low-impact MegaCore workouts",
    signatureClass: "Full Body Burner",
    bookingTip: "Bring water and a towel; the format is designed to burn.",
  },
  {
    number: "06",
    name: "MOVEHAUS Lagree",
    neighborhood: "Alsergrund (9th district)",
    priceLevel: "$$$",
    review: "MOVEHAUS teaches the Lagree method on the Megaformer, with slow, controlled movements under constant tension. Its studio on Berggasse in Alsergrund runs Lagree Signature classes, including sessions in German.",
    caveat: "Lagree is not classical Pilates; it is a different machine and a harder, slower format.",
    address: "Berggasse 7, 1090 Wien",
    bestFor: "Lagree workouts on the Megaformer",
    signatureClass: "Lagree Signature",
    bookingTip: "Arrive a few minutes early for your first class so an instructor can show you the machine.",
  },
];

const BOOKING_TIPS = [{"heading": "Book through Eversports, ClassPass or Urban Sports Club", "body": "Most Vienna studios take bookings through at least one of these platforms. Reformer classes often need a higher membership tier, so check before you book."}, {"heading": "Look for English-language classes", "body": "Several Vienna studios, including JUNE, run classes in English as well as German. Check the class name or description before you book."}, {"heading": "Watch cancellation windows", "body": "Studios such as PY Studio need three hours' notice to cancel, and late cancellations are usually charged. Plan around your commute."}, {"heading": "Choose Pilates or Lagree", "body": "Vienna has classical-leaning reformer studios and Megaformer studios. Lagree and MegaCore are tougher, slower formats; reformer Pilates focuses more on technique."}, {"heading": "Bring grip socks", "body": "Grip socks are required at almost every reformer studio in Vienna. Owning a pair saves buying them at the desk."}];

const NEIGHBORHOODS = [{"name": "Innere Stadt (1st district)", "description": "Polished studios near the Ring and Parliament, including Dynamic Reformer classes taught in German and English."}, {"name": "Neubau & Mariahilf (6th and 7th)", "description": "A large reformer club on Neubaugasse and boutique LA-style studios a few streets away, close to Mariahilfer Straße."}, {"name": "Josefstadt (8th)", "description": "High-intensity MegaCore training in a residential district just behind the Rathaus."}, {"name": "Alsergrund (9th)", "description": "Well-reviewed reformer and Lagree studios near the university, convenient for students and young professionals."}];

const GEAR = [{"name": "Pilates Grip Socks", "note": "Our pick: toesox Low Rise Full-Toe Grip Socks (2-Pack). Required at most reformer studios; full-toe grip socks are the standard.", "price": "$30.00", "url": "https://www.amazon.com/dp/B07QHNDHW3?tag=pilatescollective-20"}, {"name": "Pilates Mat", "note": "Our pick: Manduka PRO Yoga & Pilates Mat (6mm). A dense 6mm mat for mat classes and home practice between studio sessions.", "price": "$144.00", "url": "https://www.amazon.com/dp/B0000DZFXZ?tag=pilatescollective-20"}, {"name": "Magic Circle", "note": "Our pick: Balanced Body Ultra-Fit Circle (15-inch). Many studios use the magic circle; worth owning for home reinforcement work.", "price": "$35.00", "url": "https://www.amazon.com/dp/B002YQW3IU?tag=pilatescollective-20"}, {"name": "Resistance Bands", "note": "Our pick: Arena Strength Fabric Glute Bands (3-Pack). Fabric loops that carry reformer leg and glute work into home sessions.", "price": "$29.00", "url": "https://www.amazon.com/dp/B07VYK14JC?tag=pilatescollective-20"}, {"name": "Foam Roller", "note": "Our pick: OPTP PRO-Roller Foam Roller (36-inch). For spinal mobility and release work before and after class.", "price": "$62.99", "url": "https://www.amazon.com/dp/B002C9EX14?tag=pilatescollective-20"}, {"name": "Home Pilates Reformer", "note": "Our pick: PAETA Wooden Foldable Reformer. A folding home reformer to keep your practice going between studio classes.", "price": "$719.99", "url": "https://www.amazon.com/dp/B0D7M7JNFV?tag=pilatescollective-20"}];

const RELATED_CITIES = [{"city": "Munich", "country": "Germany", "href": "/cities/munich", "studioCount": 6}, {"city": "Zurich", "country": "Switzerland", "href": "/cities/zurich", "studioCount": 6}, {"city": "Berlin", "country": "Germany", "href": "/cities/berlin", "studioCount": 6}, {"city": "Milan", "country": "Italy", "href": "/cities/milan", "studioCount": 6}];

const FURTHER_READING = [{"title": "Beginner's Guide to Reformer Pilates", "excerpt": "What to expect in your first reformer class, how to choose a studio and how to progress.", "href": "/blog/beginners-guide-to-reformer-pilates", "category": "Beginner Guide", "readTime": "8 min read"}, {"title": "Best Megaformer Machine (2026)", "excerpt": "The machines behind Lagree classes, and what a home Megaformer setup really costs.", "href": "/blog/best-megaformer-machine", "category": "Lagree", "readTime": "12 min read"}, {"title": "Best Pilates Grip Socks (2026)", "excerpt": "Five verified grip socks for reformer classes, from budget packs to studio favourites.", "href": "/blog/best-pilates-grip-socks", "category": "Accessories", "readTime": "6 min read"}, {"title": "What to Wear to Pilates", "excerpt": "A complete studio outfit guide: leggings, tops, bras and what to leave at home.", "href": "/blog/what-to-wear-to-pilates", "category": "Apparel", "readTime": "6 min read"}];

const CITY_FAQS = [{"q": "What are the best Pilates studios in Vienna?", "a": "Our 6 picks are JUNE (Innere Stadt (1st district)), Maité (Neubau (7th district)), PY Studio (Alsergrund (9th district) · 1st district), DIE DER Studio (Mariahilf (6th district)), BÅL Studios (Josefstadt (8th district)) and MOVEHAUS Lagree (Alsergrund (9th district)). Each listing above covers what the studio is best for, its signature class and a booking tip."}, {"q": "Which Vienna neighbourhoods are best for Pilates?", "a": "This guide covers Innere Stadt (1st district), Neubau & Mariahilf (6th and 7th), Josefstadt (8th) and Alsergrund (9th). Polished studios near the Ring and Parliament, including Dynamic Reformer classes taught in German and English."}, {"q": "What should I know about booking Pilates classes in Vienna?", "a": "Book through Eversports, ClassPass or Urban Sports Club. Look for English-language classes. Watch cancellation windows."}, {"q": "What should I bring to a Pilates class in Vienna?", "a": "Grip socks are required at most reformer studios. Our gear list for Vienna covers grip socks, a Pilates mat, a magic circle, resistance bands, a foam roller and a home reformer."}, {"q": "Can I take Pilates classes in English in Vienna?", "a": "Yes. Several studios, including JUNE on Reichsratsstraße, run classes in English as well as German. Check the class description on the booking platform."}];

const gearName = (g: { name: string; note: string }) => g.note.match(/Our pick: ([^.]+(?:\.\d+[^.]*)?)\./)?.[1] ?? g.name;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Studios in Vienna (2026)",
      "description": "The best Pilates studios in Vienna: reformer studios in the Innere Stadt, Neubau, Mariahilf, Josefstadt and Alsergrund, plus Lagree. Six picks for 2026.",
      "url": "https://pilatescollectiveclub.com/cities/vienna",
      "datePublished": "2026-10-29",
      "dateModified": "2026-10-29",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-studio-bench-towels.png" },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/cities/vienna" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": CITY_FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
    productItemList("Pilates gear for classes in Vienna", GEAR.map((g) => ({ name: gearName(g), description: g.note, price: g.price, url: g.url }))),
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Cities", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "Vienna", "item": "https://pilatescollectiveclub.com/cities/vienna" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Vienna",
      "url": "https://pilatescollectiveclub.com/cities/vienna",
      "numberOfItems": STUDIOS.length,
      "itemListElement": STUDIOS.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "ExerciseGym",
          "name": s.name,
          "description": s.review.slice(0, 200),
          "address": { "@type": "PostalAddress", "streetAddress": s.address, "addressLocality": "Vienna", "addressCountry": "AT" },
        },
      })),
    },
  ],
};

export default function ViennaPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Austria</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br />
              <span style={{ color: "#8b4a31" }}>in Vienna</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Studios checked October 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              {"Vienna's reformer scene has grown quickly, with polished studios in the Innere Stadt, a 340-square-metre reformer club in Neubau and high-intensity formats in Josefstadt. This guide covers six studios with confirmed addresses, including options that teach in English, with what each does best and how to book."}
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-studio-bench-towels.png" alt="Pilates studio bench with folded towels" fill priority className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Vienna, Austria</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Reformer and Lagree studios from the Innere Stadt to Josefstadt and Neubau</p>
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
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Vienna</h2>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Vienna</h2>
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
              Grip socks are required at most reformer studios in Vienna. These are our recommended picks, all available on Amazon.{" "}
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
          searchPlaceholder="Ask: best reformer Pilates in Vienna…"
        />
      </main>
      <Footer />
    </>
  );
}
