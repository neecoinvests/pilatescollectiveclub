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
  title: "Best Pilates Studios in Fort Lauderdale (2026)",
  description: "The best Pilates studios in Fort Lauderdale: classical Pilates on Las Olas, reformer studios on Federal Highway and Flagler Village, and more. Six picks.",
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  keywords: ["pilates fort lauderdale", "reformer pilates fort lauderdale", "best pilates studios fort lauderdale", "pilates las olas", "classical pilates fort lauderdale", "hot pilates fort lauderdale", "pilates flagler village", "pilates classes fort lauderdale"],
  openGraph: {
    title: "Best Pilates Studios in Fort Lauderdale (2026)",
    description: "Six curated Pilates studios in Fort Lauderdale: Las Olas, Federal Highway and Flagler Village. Checked October 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/fort-lauderdale",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-studio-reception.png", width: 1200, height: 630, alt: "Fort Lauderdale Pilates guide, Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Fort Lauderdale (2026)",
    description: "Six curated Pilates studios in Fort Lauderdale: Las Olas, Federal Highway and Flagler Village. Checked October 2026.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-studio-reception.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/fort-lauderdale" },
};

const STUDIOS = [
  {
    number: "01",
    name: "Reforming Pilates",
    neighborhood: "Federal Highway (Victoria Park)",
    priceLevel: "$$$$",
    review: "Reforming Pilates runs daily reformer classes for all levels on North Federal Highway and is one of the most-reviewed studios in South Florida, with tens of thousands of ClassPass ratings. A sister studio, Reforming Pilates Heat, runs heated mat classes a block away.",
    caveat: "in-demand classes; book ahead or join the waitlist.",
    address: "470 N Federal Highway, Fort Lauderdale, FL 33301",
    bestFor: "In-demand reformer for every level",
    signatureClass: "Reformer",
    bookingTip: "Pair a reformer class with a heated mat session at Reforming Pilates Heat.",
  },
  {
    number: "02",
    name: "Zoeli Pilates & Wellness",
    neighborhood: "Las Olas (Colee Hammock)",
    priceLevel: "$$$$",
    review: "Zoeli is a boutique classical Pilates studio on East Las Olas Boulevard that emphasises the original method and individual coaching. Owner Amanda Marley is a USPA Supervising Instructor, and the studio offers private lessons, teacher training and injury-recovery sessions.",
    caveat: "classical teaching is precise and methodical; choose it for technique, not a sweaty class.",
    address: "1515 E Las Olas Blvd, Suite A, Fort Lauderdale, FL 33301",
    bestFor: "Classical Pilates and privates on Las Olas",
    signatureClass: "Classical Private",
    bookingTip: "Start with a private session to learn the classical system.",
  },
  {
    number: "03",
    name: "JETSET Pilates",
    neighborhood: "Flagler Village",
    priceLevel: "$$$",
    review: "JETSET's 50-minute, high-intensity, low-impact reformer workout has made JETSET a fast-growing Florida Pilates brand. Its Fort Lauderdale studio on NE 6th Street is rated 4.9 by thousands of ClassPass users.",
    caveat: "a high-intensity format; not the place for slow classical technique.",
    address: "421 NE 6th Street, Fort Lauderdale, FL",
    bestFor: "Fast, high-intensity reformer workouts",
    signatureClass: "JETSET Reformer",
    bookingTip: "Bring water and a towel; classes are sweaty.",
  },
  {
    number: "04",
    name: "TREMBLE Fort Lauderdale",
    neighborhood: "Federal Highway",
    priceLevel: "$$$",
    review: "TREMBLE offers high-intensity, low-impact, full-body reformer classes on North Federal Highway. It is rated 5.0 by close to two hundred Google reviewers.",
    caveat: "an intense format; build up gradually if you are new to the reformer.",
    address: "1511 N Federal Highway, Fort Lauderdale, FL",
    bestFor: "High-intensity, low-impact reformer",
    signatureClass: "TREMBLE Reformer",
    bookingTip: "Ask about intro offers for first-timers.",
  },
  {
    number: "05",
    name: "PYRA Pilates",
    neighborhood: "Flagler Village",
    priceLevel: "$$$",
    review: "PYRA Pilates is a reformer studio on NE 2nd Avenue in Flagler Village, a short walk from JETSET and the Brightline station, convenient for anyone living or working downtown.",
    caveat: "a newer studio with less published detail; check class formats when you book.",
    address: "731 NE 2nd Avenue, Fort Lauderdale, FL",
    bestFor: "Reformer classes in Flagler Village",
    signatureClass: "Reformer Pilates",
    bookingTip: "Try it on ClassPass before committing.",
  },
  {
    number: "06",
    name: "Ritual Body Pilates",
    neighborhood: "Commercial Boulevard (Galt Ocean Mile area)",
    priceLevel: "$$$",
    review: "Ritual Body Pilates is a woman-owned studio on East Commercial Boulevard, near the beach in the north of the city. Early ClassPass reviews give it a perfect 5.0.",
    caveat: "a smaller studio with a limited timetable.",
    address: "3000 E Commercial Blvd, Fort Lauderdale, FL 33308",
    bestFor: "Boutique Pilates near the northern beaches",
    signatureClass: "Reformer Pilates",
    bookingTip: "Combine class with a walk on the beach at Lauderdale-by-the-Sea.",
  },
];

const BOOKING_TIPS = [{"heading": "Book ahead in winter", "body": "Fort Lauderdale is busiest from roughly November to April. Book several days ahead and join waitlists at popular studios."}, {"heading": "Choose your intensity", "body": "Federal Highway and Flagler Village are full of high-intensity reformer formats, while Las Olas has a classical studio. Pick the style that matches your goal."}, {"heading": "Try heated classes carefully", "body": "Heated mat Pilates is popular in South Florida. Hydrate well and start with a regular class if you are new."}, {"heading": "Use ClassPass to sample", "body": "Most Fort Lauderdale studios list on ClassPass, which is an easy way to compare formats before committing."}, {"heading": "Bring grip socks and water", "body": "Grip socks are required at most reformer studios, and the Florida heat makes water essential."}];

const NEIGHBORHOODS = [{"name": "Las Olas", "description": "A classical Pilates studio among the boutiques and restaurants of East Las Olas Boulevard."}, {"name": "Federal Highway & Victoria Park", "description": "The heart of the reformer scene, with in-demand reformer studios and heated mat classes within a few blocks."}, {"name": "Flagler Village & downtown", "description": "High-intensity reformer studios near the Brightline station, ideal for downtown residents."}, {"name": "North beaches", "description": "Smaller studios along Commercial Boulevard near Galt Ocean Mile and Lauderdale-by-the-Sea."}];

const GEAR = [{"name": "Pilates Grip Socks", "note": "Our pick: toesox Low Rise Full-Toe Grip Socks (2-Pack). Required at most reformer studios; full-toe grip socks are the standard.", "price": "$30.00", "url": "https://www.amazon.com/dp/B07QHNDHW3?tag=pilatescollective-20"}, {"name": "Pilates Mat", "note": "Our pick: Manduka PRO Yoga & Pilates Mat (6mm). A dense 6mm mat for mat classes and home practice between studio sessions.", "price": "$144.00", "url": "https://www.amazon.com/dp/B0000DZFXZ?tag=pilatescollective-20"}, {"name": "Magic Circle", "note": "Our pick: Balanced Body Ultra-Fit Circle (15-inch). Many studios use the magic circle; worth owning for home reinforcement work.", "price": "$35.00", "url": "https://www.amazon.com/dp/B002YQW3IU?tag=pilatescollective-20"}, {"name": "Resistance Bands", "note": "Our pick: Arena Strength Fabric Glute Bands (3-Pack). Fabric loops that carry reformer leg and glute work into home sessions.", "price": "$29.00", "url": "https://www.amazon.com/dp/B07VYK14JC?tag=pilatescollective-20"}, {"name": "Foam Roller", "note": "Our pick: OPTP PRO-Roller Foam Roller (36-inch). For spinal mobility and release work before and after class.", "price": "$62.99", "url": "https://www.amazon.com/dp/B002C9EX14?tag=pilatescollective-20"}, {"name": "Home Pilates Reformer", "note": "Our pick: PAETA Wooden Foldable Reformer. A folding home reformer to keep your practice going between studio classes.", "price": "$719.99", "url": "https://www.amazon.com/dp/B0D7M7JNFV?tag=pilatescollective-20"}];

const RELATED_CITIES = [{"city": "Miami", "country": "United States", "href": "/cities/miami", "studioCount": 6}, {"city": "Palm Beach", "country": "United States", "href": "/cities/palm-beach", "studioCount": 6}, {"city": "Tampa", "country": "United States", "href": "/cities/tampa", "studioCount": 6}, {"city": "Orlando", "country": "United States", "href": "/cities/orlando", "studioCount": 6}];

const FURTHER_READING = [{"title": "Beginner's Guide to Reformer Pilates", "excerpt": "What to expect in your first reformer class, how to choose a studio and how to progress.", "href": "/blog/beginners-guide-to-reformer-pilates", "category": "Beginner Guide", "readTime": "8 min read"}, {"title": "Best Pilates Grip Socks (2026)", "excerpt": "Five verified grip socks for reformer classes, from budget packs to studio favourites.", "href": "/blog/best-pilates-grip-socks", "category": "Accessories", "readTime": "6 min read"}, {"title": "What to Wear to Pilates", "excerpt": "A complete studio outfit guide: leggings, tops, bras and what to leave at home.", "href": "/blog/what-to-wear-to-pilates", "category": "Apparel", "readTime": "6 min read"}, {"title": "Best Pilates Equipment for Home Practice", "excerpt": "Everything you need between studio sessions, from a quality mat to resistance bands.", "href": "/blog/best-pilates-equipment-for-home-practice", "category": "Equipment", "readTime": "10 min read"}];

const CITY_FAQS = [{"q": "What are the best Pilates studios in Fort Lauderdale?", "a": "Our 6 picks are Reforming Pilates (Federal Highway (Victoria Park)), Zoeli Pilates & Wellness (Las Olas (Colee Hammock)), JETSET Pilates (Flagler Village), TREMBLE Fort Lauderdale (Federal Highway), PYRA Pilates (Flagler Village) and Ritual Body Pilates (Commercial Boulevard (Galt Ocean Mile area)). Each listing above covers what the studio is best for, its signature class and a booking tip."}, {"q": "Which Fort Lauderdale neighbourhoods are best for Pilates?", "a": "This guide covers Las Olas, Federal Highway & Victoria Park, Flagler Village & downtown and North beaches. A classical Pilates studio among the boutiques and restaurants of East Las Olas Boulevard."}, {"q": "What should I know about booking Pilates classes in Fort Lauderdale?", "a": "Book ahead in winter. Choose your intensity. Try heated classes carefully."}, {"q": "What should I bring to a Pilates class in Fort Lauderdale?", "a": "Grip socks are required at most reformer studios. Our gear list for Fort Lauderdale covers grip socks, a Pilates mat, a magic circle, resistance bands, a foam roller and a home reformer."}, {"q": "Is there classical Pilates in Fort Lauderdale?", "a": "Yes. Zoeli Pilates & Wellness on East Las Olas Boulevard teaches the classical method, with private lessons, teacher training and injury-recovery sessions."}];

const gearName = (g: { name: string; note: string }) => g.note.match(/Our pick: ([^.]+(?:\.\d+[^.]*)?)\./)?.[1] ?? g.name;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Studios in Fort Lauderdale (2026)",
      "description": "The best Pilates studios in Fort Lauderdale: classical Pilates on Las Olas, reformer studios on Federal Highway and Flagler Village, and more. Six picks.",
      "url": "https://pilatescollectiveclub.com/cities/fort-lauderdale",
      "datePublished": "2026-10-29",
      "dateModified": "2026-10-29",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-studio-reception.png" },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/cities/fort-lauderdale" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": CITY_FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
    productItemList("Pilates gear for classes in Fort Lauderdale", GEAR.map((g) => ({ name: gearName(g), description: g.note, price: g.price, url: g.url }))),
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Cities", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "Fort Lauderdale", "item": "https://pilatescollectiveclub.com/cities/fort-lauderdale" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Fort Lauderdale",
      "url": "https://pilatescollectiveclub.com/cities/fort-lauderdale",
      "numberOfItems": STUDIOS.length,
      "itemListElement": STUDIOS.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "ExerciseGym",
          "name": s.name,
          "description": s.review.slice(0, 200),
          "address": { "@type": "PostalAddress", "streetAddress": s.address, "addressLocality": "Fort Lauderdale", "addressCountry": "US" },
        },
      })),
    },
  ],
};

export default function FortLauderdalePage() {
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
              <span style={{ color: "#8b4a31" }}>in Fort Lauderdale</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Studios checked October 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              {"Fort Lauderdale has one of South Florida's busiest reformer scenes, with in-demand studios along Federal Highway, high-intensity formats in Flagler Village and a classical studio on Las Olas Boulevard. This guide covers six studios, what each does best and how to book."}
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-studio-reception.png" alt="Reception of a modern Pilates studio" fill priority className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Fort Lauderdale, United States</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Reformer and classical studios from Las Olas to Federal Highway</p>
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
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Fort Lauderdale</h2>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Fort Lauderdale</h2>
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
              Grip socks are required at most reformer studios in Fort Lauderdale. These are our recommended picks, all available on Amazon.{" "}
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
          searchPlaceholder="Ask: best reformer Pilates in Fort Lauderdale…"
        />
      </main>
      <Footer />
    </>
  );
}
