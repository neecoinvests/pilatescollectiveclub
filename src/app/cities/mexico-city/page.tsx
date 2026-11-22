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
  title: "Best Pilates Studios in Mexico City (2026)",
  description: "The best Pilates studios in Mexico City: reformer studios in Roma Norte, Condesa and Polanco, plus Lagree. Six picks with addresses, checked for 2026.",
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  keywords: ["pilates mexico city", "pilates cdmx", "reformer pilates cdmx", "pilates reformer roma norte", "pilates condesa", "pilates polanco", "lagree cdmx", "best pilates studios mexico city", "estudio de pilates cdmx"],
  openGraph: {
    title: "Best Pilates Studios in Mexico City (2026)",
    description: "Six curated Pilates studios in Mexico City: Roma Norte, Condesa and Polanco. Checked October 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/mexico-city",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-studio-round-mirror.png", width: 1200, height: 630, alt: "Mexico City Pilates guide, Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Mexico City (2026)",
    description: "Six curated Pilates studios in Mexico City: Roma Norte, Condesa and Polanco. Checked October 2026.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-studio-round-mirror.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/mexico-city" },
};

const STUDIOS = [
  {
    number: "01",
    name: "Casa Pilates",
    neighborhood: "Roma Norte",
    priceLevel: "$$$",
    review: "Casa Pilates is a minimalist boutique studio on Calle Colima in the heart of Roma Norte, offering reformer Pilates, mat Pilates and yoga. Guides praise its coaches, and the studio also sells its own activewear sets.",
    caveat: "a popular Roma studio, so evening classes fill quickly.",
    address: "Colima 76, Roma Norte, Cuauhtémoc, 06700 Ciudad de México",
    bestFor: "Minimalist reformer and mat in Roma Norte",
    signatureClass: "Reformer Pilates",
    bookingTip: "Book evening classes a few days ahead.",
  },
  {
    number: "02",
    name: "Ponte Pila",
    neighborhood: "Roma Norte",
    priceLevel: "$$",
    review: "Ponte Pila is a boutique studio on the first floor at Colima 220, about 200 meters from Plaza Río de Janeiro. It offers functional Pilates, reformer Pilates and barre under one roof.",
    caveat: "its schedule changes, so check the studio's Instagram for current class times.",
    address: "Colima 220, primer piso, Roma Norte, Ciudad de México",
    bestFor: "Reformer, functional Pilates and barre",
    signatureClass: "Reformer Pilates",
    bookingTip: "Follow @pontepila.pilates for schedule updates.",
  },
  {
    number: "03",
    name: "Columna Studio",
    neighborhood: "Condesa",
    priceLevel: "$$$",
    review: "Columna Studio is a reformer studio on Avenida Mazatlán in Condesa, with a second studio, Columna Rodona, on Avenida México facing Parque México. It is a strong choice if you live or stay in Condesa and want reformer classes within walking distance.",
    caveat: "listings disagree on the floor at Mazatlán 83, so check the entrance when you arrive.",
    address: "Avenida Mazatlán 83, Condesa, Cuauhtémoc, 06140 Ciudad de México",
    bestFor: "Reformer classes in Condesa",
    signatureClass: "Reformer Pilates",
    bookingTip: "Message @columnapilates if you cannot find the entrance.",
  },
  {
    number: "04",
    name: "Soulcore by Lagree",
    neighborhood: "Polanco · Condesa",
    priceLevel: "$$$",
    review: "Soulcore teaches the Lagree method, a slow, high-tension workout combining cardio and resistance on the Megaformer. It has studios on Aristóteles in Polanco and on Avenida Mazatlán in Condesa, among other CDMX locations.",
    caveat: "Lagree is not classical Pilates; it is a different machine and a tougher, sweatier workout.",
    address: "Aristóteles 110, Polanco IV Sección, Miguel Hidalgo, 11550 Ciudad de México",
    bestFor: "Lagree workouts on the Megaformer",
    signatureClass: "Lagree on the Megaformer",
    bookingTip: "Arrive early for your first class to learn the machine.",
  },
  {
    number: "05",
    name: "Reform Studio Polanco",
    neighborhood: "Polanco",
    priceLevel: "$$$",
    review: "Reform Studio is a reformer Pilates studio on Aristóteles in Polanco, rated 4.8 by clients on Wellhub. Its listed schedule runs in the late afternoon and evening, which suits people working in Polanco's offices.",
    caveat: "classes are mainly late afternoon and evening, and the studio is closed on Sundays.",
    address: "Aristóteles 92, Polanco, Miguel Hidalgo, Ciudad de México",
    bestFor: "After-work reformer in Polanco",
    signatureClass: "Reformer Pilates",
    bookingTip: "Reservations are required; book before you go.",
  },
  {
    number: "06",
    name: "The Fit Pilates",
    neighborhood: "Roma Norte · Condesa",
    priceLevel: "$$",
    review: "The Fit Pilates is a boutique Pilates brand with studios on Calle Colima in Roma Norte and in Condesa. It is listed on Wellhub, which makes it an easy option to try alongside the other Roma and Condesa studios in this guide.",
    caveat: "a smaller brand with limited published information, so check class types when you book.",
    address: "Calle Colima, Roma Norte, Ciudad de México",
    bestFor: "Boutique Pilates in Roma and Condesa",
    signatureClass: "Reformer Pilates",
    bookingTip: "Use a Wellhub membership to try a class.",
  },
];

const BOOKING_TIPS = [{"heading": "Book through apps or Instagram", "body": "Many Mexico City studios take bookings through their own apps, Wellhub or TotalPass, and post schedule changes on Instagram. Follow your studio for updates."}, {"heading": "Reserve before you go", "body": "Most reformer studios require a reservation, and walk-ins are rarely possible for reformer classes."}, {"heading": "Stay close to your studio", "body": "Traffic in Mexico City can be heavy. Choose a studio within walking distance of where you live or stay in Roma, Condesa or Polanco."}, {"heading": "Know Lagree from Pilates", "body": "Soulcore teaches Lagree on the Megaformer, a slower, high-tension workout. It is excellent, but different from reformer Pilates."}, {"heading": "Bring grip socks and water", "body": "Grip socks are required at most reformer studios, and the altitude makes hydration even more important."}];

const NEIGHBORHOODS = [{"name": "Roma Norte", "description": "Boutique studios along Calle Colima and around Plaza Río de Janeiro, from minimalist reformer spaces to studios mixing reformer, barre and functional Pilates."}, {"name": "Condesa", "description": "Reformer and Lagree studios on Avenida Mazatlán and around Parque México, perfect if you are staying in the area."}, {"name": "Polanco", "description": "Polished studios on and around Aristóteles, with evening classes for people working nearby and Lagree for a tougher workout."}, {"name": "Santa Fe & Bosques", "description": "Studios in the business districts to the west serve residents and office workers who do not want to cross the city."}];

const GEAR = [{"name": "Pilates Grip Socks", "note": "Our pick: toesox Low Rise Full-Toe Grip Socks (2-Pack). Required at most reformer studios; full-toe grip socks are the standard.", "price": "$30.00", "url": "https://www.amazon.com/dp/B07QHNDHW3?tag=pilatescollective-20"}, {"name": "Pilates Mat", "note": "Our pick: Manduka PRO Yoga & Pilates Mat (6mm). A dense 6mm mat for mat classes and home practice between studio sessions.", "price": "$144.00", "url": "https://www.amazon.com/dp/B0000DZFXZ?tag=pilatescollective-20"}, {"name": "Magic Circle", "note": "Our pick: Balanced Body Ultra-Fit Circle (15-inch). Many studios use the magic circle; worth owning for home reinforcement work.", "price": "$35.00", "url": "https://www.amazon.com/dp/B002YQW3IU?tag=pilatescollective-20"}, {"name": "Resistance Bands", "note": "Our pick: Arena Strength Fabric Glute Bands (3-Pack). Fabric loops that carry reformer leg and glute work into home sessions.", "price": "$29.00", "url": "https://www.amazon.com/dp/B07VYK14JC?tag=pilatescollective-20"}, {"name": "Foam Roller", "note": "Our pick: OPTP PRO-Roller Foam Roller (36-inch). For spinal mobility and release work before and after class.", "price": "$62.99", "url": "https://www.amazon.com/dp/B002C9EX14?tag=pilatescollective-20"}, {"name": "Home Pilates Reformer", "note": "Our pick: PAETA Wooden Foldable Reformer. A folding home reformer to keep your practice going between studio classes.", "price": "$719.99", "url": "https://www.amazon.com/dp/B0D7M7JNFV?tag=pilatescollective-20"}];

const RELATED_CITIES = [{"city": "Los Angeles", "country": "United States", "href": "/cities/los-angeles", "studioCount": 6}, {"city": "Miami", "country": "United States", "href": "/cities/miami", "studioCount": 6}, {"city": "Houston", "country": "United States", "href": "/cities/houston", "studioCount": 6}, {"city": "Madrid", "country": "Spain", "href": "/cities/madrid", "studioCount": 6}];

const FURTHER_READING = [{"title": "Beginner's Guide to Reformer Pilates", "excerpt": "What to expect in your first reformer class, how to choose a studio and how to progress.", "href": "/blog/beginners-guide-to-reformer-pilates", "category": "Beginner Guide", "readTime": "8 min read"}, {"title": "Best Megaformer Machine (2026)", "excerpt": "The machines behind Lagree classes, and what a home Megaformer setup really costs.", "href": "/blog/best-megaformer-machine", "category": "Lagree", "readTime": "12 min read"}, {"title": "Best Pilates Grip Socks (2026)", "excerpt": "Five verified grip socks for reformer classes, from budget packs to studio favorites.", "href": "/blog/best-pilates-grip-socks", "category": "Accessories", "readTime": "6 min read"}, {"title": "What to Wear to Pilates", "excerpt": "A complete studio outfit guide: leggings, tops, bras and what to leave at home.", "href": "/blog/what-to-wear-to-pilates", "category": "Apparel", "readTime": "6 min read"}];

const CITY_FAQS = [{"q": "What are the best Pilates studios in Mexico City?", "a": "Our 6 picks are Casa Pilates (Roma Norte), Ponte Pila (Roma Norte), Columna Studio (Condesa), Soulcore by Lagree (Polanco · Condesa), Reform Studio Polanco (Polanco) and The Fit Pilates (Roma Norte · Condesa). Each listing above covers what the studio is best for, its signature class and a booking tip."}, {"q": "Which Mexico City neighborhoods are best for Pilates?", "a": "This guide covers Roma Norte, Condesa, Polanco and Santa Fe & Bosques. Boutique studios along Calle Colima and around Plaza Río de Janeiro, from minimalist reformer spaces to studios mixing reformer, barre and functional Pilates."}, {"q": "What should I know about booking Pilates classes in Mexico City?", "a": "Book through apps or Instagram. Reserve before you go. Stay close to your studio."}, {"q": "What should I bring to a Pilates class in Mexico City?", "a": "Grip socks are required at most reformer studios. Our gear list for Mexico City covers grip socks, a Pilates mat, a magic circle, resistance bands, a foam roller and a home reformer."}, {"q": "Is there Lagree in Mexico City?", "a": "Yes. Soulcore by Lagree has studios in Polanco and Condesa, among other CDMX locations. Lagree uses the Megaformer and is a slower, high-tension workout than reformer Pilates."}];

const gearName = (g: { name: string; note: string }) => g.note.match(/Our pick: ([^.]+(?:\.\d+[^.]*)?)\./)?.[1] ?? g.name;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Studios in Mexico City (2026)",
      "description": "The best Pilates studios in Mexico City: reformer studios in Roma Norte, Condesa and Polanco, plus Lagree. Six picks with addresses, checked for 2026.",
      "url": "https://pilatescollectiveclub.com/cities/mexico-city",
      "datePublished": "2026-10-29",
      "dateModified": "2026-10-29",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-studio-round-mirror.png" },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/cities/mexico-city" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": CITY_FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
    productItemList("Pilates gear for classes in Mexico City", GEAR.map((g) => ({ name: gearName(g), description: g.note, price: g.price, url: g.url }))),
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Cities", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "Mexico City", "item": "https://pilatescollectiveclub.com/cities/mexico-city" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Mexico City",
      "url": "https://pilatescollectiveclub.com/cities/mexico-city",
      "numberOfItems": STUDIOS.length,
      "itemListElement": STUDIOS.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "ExerciseGym",
          "name": s.name,
          "description": s.review.slice(0, 200),
          "address": { "@type": "PostalAddress", "streetAddress": s.address, "addressLocality": "Mexico City", "addressCountry": "MX" },
        },
      })),
    },
  ],
};

export default function MexicoCityPage() {
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
              <span className="text-[12.5px] font-bold" style={{ color: "#3a3530" }}>Mexico</span>
            </div>
            <h1 className="mb-6 r-d r-h1">
              The Best Pilates Studios<br />
              <span style={{ color: "#a98a5f" }}>in Mexico City</span>
            </h1>
            <p className="text-base mb-8" style={{ color: "#6f6964" }}>
              Studios checked October 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#ddd6cc" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#3a3530" }}>
              {"Mexico City's reformer scene is thriving, and Roma Norte, Condesa and Polanco are full of beautiful boutique studios, from minimalist reformer spaces on Calle Colima to Lagree on Avenida Mazatlán. This guide covers six studios with confirmed addresses, what each does best and how to book, whether you live here or are visiting."}
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image relative r-ah-img">
              <Image src="/pictures/stitch-studio-round-mirror.png" alt="Pilates studio with a round mirror and warm light" fill priority className="object-cover" />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-base font-bold mb-1">Mexico City, Mexico</p>
                  <p className="text-white/70 text-xs">Reformer and Lagree in Roma, Condesa and Polanco</p>
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
            <h2 className="mb-10 r-d r-h2">Tips for booking Pilates in Mexico City</h2>
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
            <h2 className="mb-4 r-d r-h2">Best neighborhoods for Pilates in Mexico City</h2>
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
              Grip socks are required at most reformer studios in Mexico City. These are our recommended picks, all available on Amazon.{" "}
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
          searchPlaceholder="Ask: best reformer Pilates in Mexico City…"
        />
      </main>
      <Footer />
    </>
  );
}
