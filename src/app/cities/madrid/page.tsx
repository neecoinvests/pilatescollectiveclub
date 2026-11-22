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
  title: "Best Pilates Studios in Madrid (2026)",
  description: "The best Pilates studios in Madrid: reformer studios in Salamanca and Chamberí, Lagree near Alonso Martínez and more. Six picks with addresses for 2026.",
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  keywords: ["pilates madrid", "reformer pilates madrid", "best pilates studios madrid", "pilates salamanca madrid", "pilates chamberi", "lagree madrid", "pilates reformer madrid centro", "estudio pilates madrid", "pilates classes madrid"],
  openGraph: {
    title: "Best Pilates Studios in Madrid (2026)",
    description: "Six curated Pilates studios in Madrid: Salamanca, Chamberí and central reformer and Lagree picks. Checked October 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/madrid",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-luxury-studio-wide.png", width: 1200, height: 630, alt: "Madrid Pilates guide, Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Madrid (2026)",
    description: "Six curated Pilates studios in Madrid: Salamanca, Chamberí and central reformer and Lagree picks. Checked October 2026.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-luxury-studio-wide.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/madrid" },
};

const STUDIOS = [
  {
    number: "01",
    name: "Solid Studio",
    neighborhood: "Salamanca · Chamberí · Tribunal · Castellana",
    priceLevel: "$$$",
    websiteUrl: "https://thesolidstudio.es",
    review: "Solid Studio is one of Madrid's best-known reformer brands, with studios on Calle de Columela in Salamanca, Bretón de los Herreros in Chamberí, Calle de Barceló near Tribunal and Paseo de la Castellana. With several locations, it is easy to fit classes around work.",
    caveat: "a multi-site brand, so the feel varies slightly between studios.",
    address: "Calle de Columela 1, 28001 Madrid",
    bestFor: "Reformer classes with several central locations",
    signatureClass: "Reformer Pilates",
    bookingTip: "Pick the studio closest to work; schedules differ between locations.",
  },
  {
    number: "02",
    name: "BeatCore",
    neighborhood: "Chamberí · Salamanca",
    priceLevel: "$$$",
    websiteUrl: "https://beatcore.co",
    review: "BeatCore brought a New York-style, music-driven reformer workout to Madrid, taught on its own Beatformer machines. It has a studio on Calle del Cardenal Cisneros in Chamberí and another on Calle de Francisca Moreno in Salamanca, and both are consistently among the city's highest-rated on booking platforms.",
    caveat: "a high-energy, music-led format; not the place for slow classical technique.",
    address: "Calle del Cardenal Cisneros 56, 28010 Madrid",
    bestFor: "High-energy, music-driven reformer workouts",
    signatureClass: "Beatformer",
    bookingTip: "Classes are small, so book a few days ahead for evening slots.",
  },
  {
    number: "03",
    name: "Pilates Lab",
    neighborhood: "Chamberí",
    priceLevel: "$$$",
    review: "Pilates Lab on Calle de Manuel Silvela in Chamberí offers floor and reformer Pilates and complements them with yoga, physiotherapy and personal training. That mix makes it a good choice if you want a studio that can adapt Pilates to an injury or specific goal.",
    caveat: "a smaller studio; check availability for reformer sessions before you commit.",
    address: "Calle de Manuel Silvela 5, 28010 Madrid",
    bestFor: "Floor and reformer Pilates with physiotherapy on hand",
    signatureClass: "Floor & Reformer Pilates",
    bookingTip: "If you have an injury, ask about combining physio with your first sessions.",
  },
  {
    number: "04",
    name: "Victoria Studio",
    neighborhood: "Salamanca (Goya) · Almagro",
    priceLevel: "$$$",
    websiteUrl: "https://victoriastudio.es",
    review: "Victoria Studio runs reformer Pilates studios on Calle del General Díaz Porlier, near Goya in Salamanca, and on Calle de Almagro in Chamberí. Both are highly rated by clients on booking platforms and suit anyone living or working on the east side of the Castellana.",
    caveat: "two studios with similar names, so double-check which one you have booked.",
    address: "Calle del General Díaz Porlier 2, 28001 Madrid",
    bestFor: "Reformer Pilates in Salamanca and Almagro",
    signatureClass: "Reformer Pilates",
    bookingTip: "Check the location on your booking confirmation: the two studios are in different neighborhoods.",
  },
  {
    number: "05",
    name: "NIROO Lagree Studio",
    neighborhood: "Justicia",
    priceLevel: "$$$",
    review: "NIROO is a dedicated Lagree studio on Calle de Campoamor in the Justicia neighborhood, near Alonso Martínez. Classes run on the Megaformer, with weekday sessions from early morning to early evening and shorter weekend hours.",
    caveat: "Lagree is not classical Pilates; it is a slow, high-tension strength workout on the Megaformer.",
    address: "Calle de Campoamor 3, 28004 Madrid",
    bestFor: "Lagree workouts on the Megaformer",
    signatureClass: "Lagree on the Megaformer",
    bookingTip: "Arrive a few minutes early for your first class to learn the machine.",
  },
  {
    number: "06",
    name: "SINGULAR Home of Pilates",
    neighborhood: "Bellas Vistas (Tetuán)",
    priceLevel: "$$",
    review: "SINGULAR Home of Pilates is on Calle de Jaén in Bellas Vistas, north of the center in Tetuán. It is a neighborhood studio listed on both Urban Sports Club and ClassPass, which makes it easy to try if you already use either membership.",
    caveat: "it is outside the central barrios, so it suits locals more than visitors.",
    address: "Calle de Jaén 21, 28020 Madrid",
    bestFor: "A neighborhood studio north of the center",
    signatureClass: "Pilates Reformer",
    bookingTip: "Use your Urban Sports Club or ClassPass credits to try a class first.",
  },
];

const BOOKING_TIPS = [{"heading": "Book evening classes early", "body": "Madrid's evening slots, after work and before a late dinner, are the busiest. Reserve them a few days ahead at popular studios in Salamanca and Chamberí."}, {"heading": "Use Urban Sports Club or ClassPass to sample", "body": "Many Madrid studios are on Urban Sports Club and ClassPass, so you can compare several before committing to one studio's membership."}, {"heading": "Choose the right format", "body": "Madrid has classical-leaning studios, music-driven formats like BeatCore and dedicated Lagree studios. Decide whether you want technique, intensity or both before you book."}, {"heading": "Check the exact location", "body": "Several brands run more than one studio with similar names. Confirm the address on your booking before you set off."}, {"heading": "Bring grip socks", "body": "Grip socks are required at almost every reformer studio in Madrid. Bring your own to avoid buying them at the desk."}];

const NEIGHBORHOODS = [{"name": "Salamanca", "description": "Madrid's most polished barrio has the densest concentration of reformer studios, including Solid Studio, BeatCore and Victoria Studio near Goya. Expect premium spaces and busy evening timetables."}, {"name": "Chamberí", "description": "A residential favorite with studios on almost every other street, from Pilates Lab to BeatCore and Solid Studio. Good for regular weekly classes close to home."}, {"name": "Justicia & Centro", "description": "Around Alonso Martínez and Tribunal you will find a dedicated Lagree studio and central reformer options, convenient if you live in Chueca or Malasaña."}, {"name": "Tetuán & the north", "description": "Neighborhood studios with easier booking and lower prices than the central barrios, suited to locals."}];

const GEAR = [{"name": "Pilates Grip Socks", "note": "Our pick: toesox Low Rise Full-Toe Grip Socks (2-Pack). Required at most reformer studios; full-toe grip socks are the standard.", "price": "$30.00", "url": "https://www.amazon.com/dp/B07QHNDHW3?tag=pilatescollective-20"}, {"name": "Pilates Mat", "note": "Our pick: Manduka PRO Yoga & Pilates Mat (6mm). A dense 6mm mat for mat classes and home practice between studio sessions.", "price": "$144.00", "url": "https://www.amazon.com/dp/B0000DZFXZ?tag=pilatescollective-20"}, {"name": "Magic Circle", "note": "Our pick: Balanced Body Ultra-Fit Circle (15-inch). Many studios use the magic circle; worth owning for home reinforcement work.", "price": "$35.00", "url": "https://www.amazon.com/dp/B002YQW3IU?tag=pilatescollective-20"}, {"name": "Resistance Bands", "note": "Our pick: Arena Strength Fabric Glute Bands (3-Pack). Fabric loops that carry reformer leg and glute work into home sessions.", "price": "$29.00", "url": "https://www.amazon.com/dp/B07VYK14JC?tag=pilatescollective-20"}, {"name": "Foam Roller", "note": "Our pick: OPTP PRO-Roller Foam Roller (36-inch). For spinal mobility and release work before and after class.", "price": "$62.99", "url": "https://www.amazon.com/dp/B002C9EX14?tag=pilatescollective-20"}, {"name": "Home Pilates Reformer", "note": "Our pick: PAETA Wooden Foldable Reformer. A folding home reformer to keep your practice going between studio classes.", "price": "$719.99", "url": "https://www.amazon.com/dp/B0D7M7JNFV?tag=pilatescollective-20"}];

const RELATED_CITIES = [{"city": "Barcelona", "country": "Spain", "href": "/cities/barcelona", "studioCount": 6}, {"city": "Lisbon", "country": "Portugal", "href": "/cities/lisbon", "studioCount": 6}, {"city": "Paris", "country": "France", "href": "/cities/paris", "studioCount": 6}, {"city": "Milan", "country": "Italy", "href": "/cities/milan", "studioCount": 6}];

const FURTHER_READING = [{"title": "Beginner's Guide to Reformer Pilates", "excerpt": "What to expect in your first reformer class, how to choose a studio and how to progress.", "href": "/blog/beginners-guide-to-reformer-pilates", "category": "Beginner Guide", "readTime": "8 min read"}, {"title": "Best Megaformer Machine (2026)", "excerpt": "The machines behind Lagree classes, and what a home Megaformer setup really costs.", "href": "/blog/best-megaformer-machine", "category": "Lagree", "readTime": "12 min read"}, {"title": "Best Pilates Grip Socks (2026)", "excerpt": "Five verified grip socks for reformer classes, from budget packs to studio favorites.", "href": "/blog/best-pilates-grip-socks", "category": "Accessories", "readTime": "6 min read"}, {"title": "What to Wear to Pilates", "excerpt": "A complete studio outfit guide: leggings, tops, bras and what to leave at home.", "href": "/blog/what-to-wear-to-pilates", "category": "Apparel", "readTime": "6 min read"}];

const CITY_FAQS = [{"q": "What are the best Pilates studios in Madrid?", "a": "Our 6 picks are Solid Studio (Salamanca · Chamberí · Tribunal · Castellana), BeatCore (Chamberí · Salamanca), Pilates Lab (Chamberí), Victoria Studio (Salamanca (Goya) · Almagro), NIROO Lagree Studio (Justicia) and SINGULAR Home of Pilates (Bellas Vistas (Tetuán)). Each listing above covers what the studio is best for, its signature class and a booking tip."}, {"q": "Which Madrid neighborhoods are best for Pilates?", "a": "This guide covers Salamanca, Chamberí, Justicia & Centro and Tetuán & the north. Madrid's most polished barrio has the densest concentration of reformer studios, including Solid Studio, BeatCore and Victoria Studio near Goya. Expect premium spaces and busy evening timetables."}, {"q": "What should I know about booking Pilates classes in Madrid?", "a": "Book evening classes early. Use Urban Sports Club or ClassPass to sample. Choose the right format."}, {"q": "What should I bring to a Pilates class in Madrid?", "a": "Grip socks are required at most reformer studios. Our gear list for Madrid covers grip socks, a Pilates mat, a magic circle, resistance bands, a foam roller and a home reformer."}, {"q": "Is there Lagree in Madrid?", "a": "Yes. NIROO Lagree Studio on Calle de Campoamor teaches the Lagree method on the Megaformer. It is a slow, high-tension strength workout, different from reformer Pilates."}];

const gearName = (g: { name: string; note: string }) => g.note.match(/Our pick: ([^.]+(?:\.\d+[^.]*)?)\./)?.[1] ?? g.name;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Studios in Madrid (2026)",
      "description": "The best Pilates studios in Madrid: reformer studios in Salamanca and Chamberí, Lagree near Alonso Martínez and more. Six picks with addresses for 2026.",
      "url": "https://pilatescollectiveclub.com/cities/madrid",
      "datePublished": "2026-10-29",
      "dateModified": "2026-10-29",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-luxury-studio-wide.png" },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/cities/madrid" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": CITY_FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
    productItemList("Pilates gear for classes in Madrid", GEAR.map((g) => ({ name: gearName(g), description: g.note, price: g.price, url: g.url }))),
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Cities", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "Madrid", "item": "https://pilatescollectiveclub.com/cities/madrid" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Madrid",
      "url": "https://pilatescollectiveclub.com/cities/madrid",
      "numberOfItems": STUDIOS.length,
      "itemListElement": STUDIOS.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "ExerciseGym",
          "name": s.name,
          "description": s.review.slice(0, 200),
          "address": { "@type": "PostalAddress", "streetAddress": s.address, "addressLocality": "Madrid", "addressCountry": "ES" },
        },
      })),
    },
  ],
};

export default function MadridPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
      <Header />
      <main>
        <section className="r-ah r-ah-legacy">
          <div className="r-wrap">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[12.5px] font-bold" style={{ color: "#0a0a0a" }}>City Guide</span>
              <span style={{ color: "#9a9490" }}>·</span>
              <span className="text-[12.5px] font-bold" style={{ color: "#3a3530" }}>Spain</span>
            </div>
            <h1 className="mb-6 r-d r-h1">
              The Best Pilates Studios<br />
              <span style={{ color: "#a98a5f" }}>in Madrid</span>
            </h1>
            <p className="text-base mb-8" style={{ color: "#6f6964" }}>
              Studios checked October 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#ddd6cc" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#3a3530" }}>
              {"Madrid's reformer scene has grown fast, and the barrios of Salamanca and Chamberí are now packed with studios, from multi-site reformer brands to high-energy formats and a dedicated Lagree studio. This guide covers six studios with confirmed addresses, what each is best for and how to book."}
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image relative r-ah-img">
              <Image src="/pictures/stitch-luxury-studio-wide.png" alt="Wide view of a luxury reformer Pilates studio" fill priority className="object-cover" />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-base font-bold mb-1">Madrid, Spain</p>
                  <p className="text-white/70 text-xs">Reformer, Lagree and high-energy formats from Salamanca to Chamberí</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-[12.5px] font-bold mb-10" style={{ color: "#0a0a0a" }}>
              {STUDIOS.length} Studios · Curated & Verified
            </p>
            <div className="space-y-8">
              {STUDIOS.map((studio) => (
                <StudioListing key={studio.number} {...studio} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-10 r-d r-h2">Tips for booking Pilates in Madrid</h2>
            <div className="space-y-6">
              {BOOKING_TIPS.map((tip) => (
                <div key={tip.heading} className="pcc-booking-tip flex gap-5 rounded-2xl p-6" style={{ backgroundColor: "#ede9e3" }}>
                  <div className="w-1.5 rounded-full shrink-0 mt-1" style={{ backgroundColor: "#0a0a0a", minHeight: "20px" }} />
                  <div>
                    <h3 className="text-base mb-1.5 r-hx" style={{ color: "#0a0a0a" }}>{tip.heading}</h3>
                    <p className="text-base leading-relaxed" style={{ color: "#3a3530" }}>{tip.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-4 r-d r-h2">Best neighborhoods for Pilates in Madrid</h2>
            <p className="text-base mb-10" style={{ color: "#3a3530" }}>Where to look depending on where you live, work or stay.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {NEIGHBORHOODS.map((n) => (
                <div key={n.name} className="rounded-2xl p-6" style={{ backgroundColor: "#ede9e3" }}>
                  <h3 className="text-base mb-2 r-hx" style={{ color: "#0a0a0a" }}>{n.name}</h3>
                  <p className="text-base leading-relaxed" style={{ color: "#3a3530" }}>{n.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Studio Gear */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-3 r-d r-h2">What to bring to your first class</h2>
            <p className="text-base mb-10" style={{ color: "#3a3530" }}>
              Grip socks are required at most reformer studios in Madrid. These are our recommended picks, all available on Amazon.{" "}
              <Link href="/affiliate-disclosure" style={{ color: "#0a0a0a", textDecoration: "underline", fontSize: "inherit" }}>Affiliate disclosure.</Link>
            </p>
            <QuickPicks className="mb-0" picks={GEAR.map((g) => ({ name: gearName(g), price: g.price, url: g.url, note: g.name }))} />
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8 r-d r-h2">Frequently asked questions</h2>
            <div className="space-y-6">
              {CITY_FAQS.map((f) => (
                <div key={f.q} className="rounded-2xl p-6" style={{ backgroundColor: "#ede9e3" }}>
                  <h3 className="text-base mb-2 r-hx" style={{ color: "#0a0a0a" }}>{f.q}</h3>
                  <p className="text-base leading-relaxed" style={{ color: "#3a3530" }}>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-3 r-d r-h2">Related city guides</h2>
            <p className="text-base mb-10" style={{ color: "#3a3530" }}>Explore our guides to other cities with thriving Pilates scenes.</p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
              {RELATED_CITIES.map((c) => (
                <CityCard key={c.city} {...c} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-10 r-d r-h2">Further reading</h2>
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
          searchPlaceholder="Ask: best reformer Pilates in Madrid…"
        />
      </main>
      <Footer />
    </>
  );
}
