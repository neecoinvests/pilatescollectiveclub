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
  title: "Best Pilates Studios in Berlin (2026)",
  description: "The best Pilates studios in Berlin: big reformer rooms in Prenzlauer Berg, boutique reformer in Kreuzberg and Mitte, and Charlottenburg. Six picks for 2026.",
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  keywords: ["pilates berlin", "reformer pilates berlin", "best pilates studios berlin", "pilates kreuzberg", "pilates mitte", "pilates prenzlauer berg", "pilates charlottenburg", "pilates classes berlin"],
  openGraph: {
    title: "Best Pilates Studios in Berlin (2026)",
    description: "Six curated Pilates studios in Berlin: Kreuzberg, Mitte, Prenzlauer Berg and Charlottenburg. Checked October 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/berlin",
    images: [{ url: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1400&q=80", width: 1200, height: 630, alt: "Berlin Pilates guide, Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Berlin (2026)",
    description: "Six curated Pilates studios in Berlin: Kreuzberg, Mitte, Prenzlauer Berg and Charlottenburg. Checked October 2026.",
    images: ["https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1400&q=80"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/berlin" },
};

const STUDIOS = [
  {
    number: "01",
    name: "The Frame Reformer Pilates",
    neighborhood: "Kreuzberg",
    priceLevel: "$$$",
    review: "The Frame is a bright modern reformer studio on Waldemarstraße with a maximum of nine machines, plus a café, co-working space and sun terrace. It is rated 4.9 from nearly a thousand Urban Sports Club reviews.",
    caveat: "small classes fill quickly at peak times.",
    address: "Waldemarstraße 17, 10179 Berlin",
    bestFor: "Boutique reformer with a café",
    signatureClass: "Reformer Fundamentals",
    bookingTip: "Take at least three Fundamentals classes before moving to more intense formats.",
  },
  {
    number: "02",
    name: "Rostudios Prenzlauer Berg",
    neighborhood: "Prenzlauer Berg (Rosa-Luxemburg-Platz)",
    priceLevel: "$$",
    review: "Rostudios runs two Roform reformer rooms at Schönhauser Allee 9, with 20 and 17 machines, a few steps from the U2 at Rosa-Luxemburg-Platz. Both rooms are rated around 4.8 to 4.9 from tens of thousands of Urban Sports Club reviews, with showers, lockers and towel rental.",
    caveat: "large group classes, so less individual attention.",
    address: "Schönhauser Allee 9, 10119 Berlin",
    bestFor: "High-energy reformer with lots of time slots",
    signatureClass: "Roform",
    bookingTip: "You can book up to 15 minutes before class starts.",
  },
  {
    number: "03",
    name: "YTTP Reformer Kreuzberg",
    neighborhood: "Kreuzberg · Bergmannkiez · Friedrichshain",
    priceLevel: "$$",
    review: "YTTP runs several reformer studios across Berlin. Its Reichenberger Straße studio sits in a Kreuzberg backyard, with sister studios on Zossener Straße in Bergmannkiez and Grünberger Straße in Friedrichshain.",
    caveat: "the Reichenberger Straße entrance is in the backyard, on the right.",
    address: "Reichenberger Straße 124 (backyard, right), 10999 Berlin",
    bestFor: "Reformer across east and south Berlin",
    signatureClass: "Reformer",
    bookingTip: "Pick the studio closest to you; the schedules differ.",
  },
  {
    number: "04",
    name: "Momax Pilates Berlin Mitte",
    neighborhood: "Mitte",
    priceLevel: "$$$",
    review: "Momax on Gipsstraße is a reformer studio focused on precision, breathing and body awareness, with beginner reformer classes on the schedule. It is rated 4.7 from hundreds of ClassPass reviews.",
    caveat: "hours depend on the class schedule and booked appointments.",
    address: "Gipsstraße 23, 10119 Berlin",
    bestFor: "Precise, technique-led reformer",
    signatureClass: "Reformer Beginner",
    bookingTip: "Start with a beginner reformer class.",
  },
  {
    number: "05",
    name: "REALZ Pilates",
    neighborhood: "Mitte",
    priceLevel: "$$$",
    review: "REALZ on Albrechtstraße offers Pilates and massage, with an introductory offer for new customers. It is rated around 4.9 on Eversports.",
    caveat: "a smaller studio with limited published detail; check class formats when you book.",
    address: "Albrechtstraße 19, 10117 Berlin",
    bestFor: "Small studio with massage",
    signatureClass: "Reformer",
    bookingTip: "Use the new-customer offer on Eversports to try it.",
  },
  {
    number: "06",
    name: "YTTP Reformer Charlottenburg",
    neighborhood: "Charlottenburg-Wilmersdorf",
    priceLevel: "$$",
    review: "YTTP's west Berlin studio on Kurfürstendamm brings the brand's reformer classes to Charlottenburg, convenient if you are staying near the Ku'damm.",
    caveat: "same brand as the Kreuzberg studio, so choose by location.",
    address: "Kurfürstendamm 178, Berlin",
    bestFor: "Reformer on the Ku'damm",
    signatureClass: "Reformer",
    bookingTip: "Book through Urban Sports Club if you have a membership.",
  },
];

const BOOKING_TIPS = [{"heading": "Use Urban Sports Club", "body": "Most Berlin reformer studios are on Urban Sports Club. Check which membership tier covers reformer classes."}, {"heading": "Start with fundamentals", "body": "Several studios recommend a few fundamentals classes before moving to more intense formats."}, {"heading": "Book evenings ahead", "body": "After-work classes fill first. Book as soon as the schedule opens."}, {"heading": "Check the entrance", "body": "Many Berlin studios are in courtyards or backyards. Check the directions before your first class."}, {"heading": "Bring grip socks", "body": "Grip socks are required at most reformer studios, and most sell them at the desk."}];

const NEIGHBORHOODS = [{"name": "Kreuzberg", "description": "Boutique reformer on Waldemarstraße and YTTP studios on Reichenberger Straße and in Bergmannkiez."}, {"name": "Mitte", "description": "Smaller technique-led studios on Gipsstraße and Albrechtstraße."}, {"name": "Prenzlauer Berg", "description": "Large Roform reformer rooms by Rosa-Luxemburg-Platz."}, {"name": "Charlottenburg", "description": "Reformer on the Kurfürstendamm for west Berlin."}];

const GEAR = [{"name": "Pilates Grip Socks", "note": "Our pick: toesox Low Rise Full-Toe Grip Socks (2-Pack). Required at most reformer studios; full-toe grip socks are the standard.", "price": "$30.00", "url": "https://www.amazon.com/dp/B07QHNDHW3?tag=pilatescollective-20"}, {"name": "Pilates Mat", "note": "Our pick: Manduka PRO Yoga & Pilates Mat (6mm). A dense 6mm mat for mat classes and home practice between studio sessions.", "price": "$144.00", "url": "https://www.amazon.com/dp/B0000DZFXZ?tag=pilatescollective-20"}, {"name": "Magic Circle", "note": "Our pick: Balanced Body Ultra-Fit Circle (15-inch). Many studios use the magic circle; worth owning for home reinforcement work.", "price": "$35.00", "url": "https://www.amazon.com/dp/B002YQW3IU?tag=pilatescollective-20"}, {"name": "Resistance Bands", "note": "Our pick: Arena Strength Fabric Glute Bands (3-Pack). Fabric loops that carry reformer leg and glute work into home sessions.", "price": "$29.00", "url": "https://www.amazon.com/dp/B07VYK14JC?tag=pilatescollective-20"}, {"name": "Foam Roller", "note": "Our pick: OPTP PRO-Roller Foam Roller (36-inch). For spinal mobility and release work before and after class.", "price": "$62.99", "url": "https://www.amazon.com/dp/B002C9EX14?tag=pilatescollective-20"}, {"name": "Home Pilates Reformer", "note": "Our pick: PAETA Wooden Foldable Reformer. A folding home reformer to keep your practice going between studio classes.", "price": "$719.99", "url": "https://www.amazon.com/dp/B0D7M7JNFV?tag=pilatescollective-20"}];

const RELATED_CITIES = [{"city": "Amsterdam", "country": "Netherlands", "href": "/cities/amsterdam", "studioCount": 6}, {"city": "Paris", "country": "France", "href": "/cities/paris", "studioCount": 6}, {"city": "London", "country": "United Kingdom", "href": "/cities/london", "studioCount": 6}, {"city": "Barcelona", "country": "Spain", "href": "/cities/barcelona", "studioCount": 6}];

const FURTHER_READING = [{"title": "Beginner's Guide to Reformer Pilates", "excerpt": "What to expect in your first reformer class, how to choose a studio and how to progress.", "href": "/blog/beginners-guide-to-reformer-pilates", "category": "Beginner Guide", "readTime": "8 min read"}, {"title": "Best Pilates Grip Socks (2026)", "excerpt": "Five verified grip socks for reformer classes, from budget packs to studio favourites.", "href": "/blog/best-pilates-grip-socks", "category": "Accessories", "readTime": "6 min read"}, {"title": "What to Wear to Pilates", "excerpt": "A complete studio outfit guide: leggings, tops, bras and what to leave at home.", "href": "/blog/what-to-wear-to-pilates", "category": "Apparel", "readTime": "6 min read"}, {"title": "Best Pilates Equipment for Home Practice", "excerpt": "Everything you need between studio sessions, from a quality mat to resistance bands.", "href": "/blog/best-pilates-equipment-for-home-practice", "category": "Equipment", "readTime": "10 min read"}];

const CITY_FAQS = [{"q": "What are the best Pilates studios in Berlin?", "a": "Our 6 picks are The Frame Reformer Pilates (Kreuzberg), Rostudios Prenzlauer Berg (Prenzlauer Berg (Rosa-Luxemburg-Platz)), YTTP Reformer Kreuzberg (Kreuzberg · Bergmannkiez · Friedrichshain), Momax Pilates Berlin Mitte (Mitte), REALZ Pilates (Mitte) and YTTP Reformer Charlottenburg (Charlottenburg-Wilmersdorf). Each listing above covers what the studio is best for, its signature class and a booking tip."}, {"q": "Which Berlin neighbourhoods are best for Pilates?", "a": "This guide covers Kreuzberg, Mitte, Prenzlauer Berg and Charlottenburg. Boutique reformer on Waldemarstraße and YTTP studios on Reichenberger Straße and in Bergmannkiez."}, {"q": "What should I know about booking Pilates classes in Berlin?", "a": "Use Urban Sports Club. Start with fundamentals. Book evenings ahead."}, {"q": "What should I bring to a Pilates class in Berlin?", "a": "Grip socks are required at most reformer studios. Our gear list for Berlin covers grip socks, a Pilates mat, a magic circle, resistance bands, a foam roller and a home reformer."}, {"q": "Can I use Urban Sports Club for reformer Pilates in Berlin?", "a": "Yes. Most of the studios in this guide are on Urban Sports Club, though reformer classes often need a higher membership tier."}];

const gearName = (g: { name: string; note: string }) => g.note.match(/Our pick: ([^.]+(?:\.\d+[^.]*)?)\./)?.[1] ?? g.name;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Studios in Berlin (2026)",
      "description": "The best Pilates studios in Berlin: big reformer rooms in Prenzlauer Berg, boutique reformer in Kreuzberg and Mitte, and Charlottenburg. Six picks for 2026.",
      "url": "https://pilatescollectiveclub.com/cities/berlin",
      "datePublished": "2026-06-28",
      "dateModified": "2026-10-31",
      "image": { "@type": "ImageObject", "url": "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1400&q=80" },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/cities/berlin" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": CITY_FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
    productItemList("Pilates gear for classes in Berlin", GEAR.map((g) => ({ name: gearName(g), description: g.note, price: g.price, url: g.url }))),
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Cities", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "Berlin", "item": "https://pilatescollectiveclub.com/cities/berlin" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Berlin",
      "url": "https://pilatescollectiveclub.com/cities/berlin",
      "numberOfItems": STUDIOS.length,
      "itemListElement": STUDIOS.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "ExerciseGym",
          "name": s.name,
          "description": s.review.slice(0, 200),
          "address": { "@type": "PostalAddress", "streetAddress": s.address, "addressLocality": "Berlin", "addressCountry": "DE" },
        },
      })),
    },
  ],
};

export default function BerlinPage() {
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
              <span style={{ color: "#8b4a31" }}>in Berlin</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Studios checked October 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              {"Berlin has one of Europe's busiest reformer scenes, from large studios with 20 machines near Rosa-Luxemburg-Platz to small boutique rooms in Kreuzberg and Mitte. Most studios are on Urban Sports Club, which makes it easy to try a few. This guide covers six studios with confirmed addresses, what each does best and how to book."}
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1400&q=80" alt="Berlin skyline" fill priority className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Berlin, Germany</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Reformer studios from Kreuzberg to Prenzlauer Berg and Charlottenburg</p>
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
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Berlin</h2>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Berlin</h2>
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
              Grip socks are required at most reformer studios in Berlin. These are our recommended picks, all available on Amazon.{" "}
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
          searchPlaceholder="Ask: best reformer Pilates in Berlin…"
        />
      </main>
      <Footer />
    </>
  );
}
