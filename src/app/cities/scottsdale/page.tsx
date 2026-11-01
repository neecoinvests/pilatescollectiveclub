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
  title: "Best Pilates Studios in Scottsdale, AZ (2026)",
  description: "The best Pilates studios in Scottsdale: precision reformer in McCormick Ranch, Old Town boutiques, HIIT Pilates and North Scottsdale. Six picks for 2026.",
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  keywords: ["pilates scottsdale", "reformer pilates scottsdale", "best pilates studios scottsdale", "pilates old town scottsdale", "hot pilates scottsdale", "pilates north scottsdale", "hiit pilates scottsdale", "pilates classes scottsdale az"],
  openGraph: {
    title: "Best Pilates Studios in Scottsdale, AZ (2026)",
    description: "Six curated Pilates studios in Scottsdale: Old Town, McCormick Ranch, Scottsdale Ranch, the Airpark and North Scottsdale. Checked November 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/scottsdale",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-studio-changing-area.png", width: 1200, height: 630, alt: "Scottsdale Pilates guide, Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Scottsdale, AZ (2026)",
    description: "Six curated Pilates studios in Scottsdale: Old Town, McCormick Ranch, Scottsdale Ranch, the Airpark and North Scottsdale. Checked November 2026.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-studio-changing-area.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/scottsdale" },
};

const STUDIOS = [
  {
    number: "01",
    name: "Workshop Pilates McCormick Ranch",
    neighborhood: "McCormick Ranch",
    priceLevel: "$$$",
    review: "Workshop Pilates is a woman-run studio pairing precision-focused reformer sessions with 105°F heated mat classes. Its McCormick Ranch studio on Hayden Road is rated 4.9 from more than 12,500 ClassPass reviews, and its Arcadia studio ranks among the top reformer studios in Phoenix and Scottsdale.",
    caveat: "heated mat classes are hot; pick reformer if you prefer a cool room.",
    address: "8240 N Hayden Rd, Suite B-107, Scottsdale, AZ 85258",
    bestFor: "Precision reformer and heated mat",
    signatureClass: "Reformer",
    bookingTip: "Bring water and a towel to heated mat classes.",
  },
  {
    number: "02",
    name: "Concrete Pilates",
    neighborhood: "Old Town",
    priceLevel: "$$$",
    review: "Concrete Pilates on East Main Street is an Old Town reformer studio rated 4.8 from thousands of ClassPass reviews, with 50-minute classes including evening Twilight Reformer sessions.",
    caveat: "Old Town parking can be tight at peak times.",
    address: "7015 E Main St, Scottsdale, AZ 85251",
    bestFor: "Boutique reformer in Old Town",
    signatureClass: "Twilight Reformer",
    bookingTip: "Evening Twilight Reformer is a good way to end the day.",
  },
  {
    number: "03",
    name: "Get It Movement HIIT Pilates",
    neighborhood: "Scottsdale Airpark",
    priceLevel: "$$$",
    review: "Get It Movement runs HIIT Pilates on the reformer from its studio on North Scottsdale Road. It holds a 5.0 rating from more than 1,600 ClassPass reviews and ranks second on ClassPass's Phoenix and Scottsdale reformer list.",
    caveat: "high-intensity classes; not the place for slow classical work.",
    address: "13402 N Scottsdale Rd, Suite A105, Scottsdale, AZ 85254",
    bestFor: "High-intensity reformer",
    signatureClass: "HIIT Pilates",
    bookingTip: "Some listings show an older 73rd Street address; use North Scottsdale Road.",
  },
  {
    number: "04",
    name: "BODYBAR Pilates Scottsdale Ranch",
    neighborhood: "Scottsdale Ranch",
    priceLevel: "$$",
    review: "BODYBAR Pilates on Vía Linda uses Balanced Body reformers and runs energetic group reformer classes, with plenty of time slots across the week.",
    caveat: "franchise format with larger, faster classes.",
    address: "10135 E Vía Linda, Suite C111, Scottsdale, AZ 85258",
    bestFor: "Group reformer on Balanced Body equipment",
    signatureClass: "Reformer",
    bookingTip: "Ask about intro offers for first-timers.",
  },
  {
    number: "05",
    name: "The Pilates Room",
    neighborhood: "North Scottsdale (Pima Road)",
    priceLevel: "$$$",
    review: "The Pilates Room on North Pima Road focuses exclusively on reformer Pilates, with group classes and personalised training in a boutique setting.",
    caveat: "a smaller studio; book popular times ahead.",
    address: "20789 N Pima Rd, Suite 150, Scottsdale, AZ 85255",
    bestFor: "Reformer-only boutique",
    signatureClass: "Reformer",
    bookingTip: "Ask about privates if you want personalised training.",
  },
  {
    number: "06",
    name: "Pilates North",
    neighborhood: "Far North Scottsdale",
    priceLevel: "$$",
    review: "Pilates North is a boutique studio on North Scottsdale Road offering mat and reformer classes for all fitness levels, convenient for Carefree and Cave Creek.",
    caveat: "it is far north, so it suits residents of North Scottsdale best.",
    address: "33755 N Scottsdale Rd, Suite 125, Scottsdale, AZ 85266",
    bestFor: "Reformer and mat for all levels",
    signatureClass: "Reformer",
    bookingTip: "Mix mat and reformer classes to build strength faster.",
  },
];

const BOOKING_TIPS = [{"heading": "Pick your format", "body": "Scottsdale has precision reformer, heated mat and HIIT Pilates. They feel very different, so choose the one that fits your goal."}, {"heading": "Book early mornings", "body": "Early classes fill first, especially in summer when locals train before the heat."}, {"heading": "Hydrate", "body": "Desert heat and heated classes add up. Bring a full water bottle to every class."}, {"heading": "Use ClassPass to compare", "body": "Most Scottsdale studios list on ClassPass, which makes it easy to try a few before committing."}, {"heading": "Bring grip socks", "body": "Grip socks are required at most reformer studios in Scottsdale."}];

const NEIGHBORHOODS = [{"name": "Old Town", "description": "Boutique reformer within walking distance of Old Town's restaurants and hotels."}, {"name": "McCormick Ranch & Scottsdale Ranch", "description": "Precision reformer, heated mat and franchise studios in central Scottsdale."}, {"name": "Scottsdale Airpark", "description": "High-intensity reformer on North Scottsdale Road."}, {"name": "North Scottsdale", "description": "Quieter reformer studios along Pima Road and North Scottsdale Road."}];

const GEAR = [{"name": "Pilates Grip Socks", "note": "Our pick: toesox Low Rise Full-Toe Grip Socks (2-Pack). Required at most reformer studios; full-toe grip socks are the standard.", "price": "$30.00", "url": "https://www.amazon.com/dp/B07QHNDHW3?tag=pilatescollective-20"}, {"name": "Pilates Mat", "note": "Our pick: Manduka PRO Yoga & Pilates Mat (6mm). A dense 6mm mat for mat classes and home practice between studio sessions.", "price": "$144.00", "url": "https://www.amazon.com/dp/B0000DZFXZ?tag=pilatescollective-20"}, {"name": "Magic Circle", "note": "Our pick: Balanced Body Ultra-Fit Circle (15-inch). Many studios use the magic circle; worth owning for home reinforcement work.", "price": "$35.00", "url": "https://www.amazon.com/dp/B002YQW3IU?tag=pilatescollective-20"}, {"name": "Resistance Bands", "note": "Our pick: Arena Strength Fabric Glute Bands (3-Pack). Fabric loops that carry reformer leg and glute work into home sessions.", "price": "$29.00", "url": "https://www.amazon.com/dp/B07VYK14JC?tag=pilatescollective-20"}, {"name": "Foam Roller", "note": "Our pick: OPTP PRO-Roller Foam Roller (36-inch). For spinal mobility and release work before and after class.", "price": "$62.99", "url": "https://www.amazon.com/dp/B002C9EX14?tag=pilatescollective-20"}, {"name": "Home Pilates Reformer", "note": "Our pick: PAETA Wooden Foldable Reformer. A folding home reformer to keep your practice going between studio classes.", "price": "$719.99", "url": "https://www.amazon.com/dp/B0D7M7JNFV?tag=pilatescollective-20"}];

const RELATED_CITIES = [{"city": "Phoenix", "country": "United States", "href": "/cities/phoenix", "studioCount": 6}, {"city": "Las Vegas", "country": "United States", "href": "/cities/las-vegas", "studioCount": 6}, {"city": "San Diego", "country": "United States", "href": "/cities/san-diego", "studioCount": 6}, {"city": "Los Angeles", "country": "United States", "href": "/cities/los-angeles", "studioCount": 6}];

const FURTHER_READING = [{"title": "Beginner's Guide to Reformer Pilates", "excerpt": "What to expect in your first reformer class, how to choose a studio and how to progress.", "href": "/blog/beginners-guide-to-reformer-pilates", "category": "Beginner Guide", "readTime": "8 min read"}, {"title": "Best Pilates Grip Socks (2026)", "excerpt": "Five verified grip socks for reformer classes, from budget packs to studio favourites.", "href": "/blog/best-pilates-grip-socks", "category": "Accessories", "readTime": "6 min read"}, {"title": "What to Wear to Pilates", "excerpt": "A complete studio outfit guide: leggings, tops, bras and what to leave at home.", "href": "/blog/what-to-wear-to-pilates", "category": "Apparel", "readTime": "6 min read"}, {"title": "Best Pilates Equipment for Home Practice", "excerpt": "Everything you need between studio sessions, from a quality mat to resistance bands.", "href": "/blog/best-pilates-equipment-for-home-practice", "category": "Equipment", "readTime": "10 min read"}];

const CITY_FAQS = [{"q": "What are the best Pilates studios in Scottsdale?", "a": "Our 6 picks are Workshop Pilates McCormick Ranch (McCormick Ranch), Concrete Pilates (Old Town), Get It Movement HIIT Pilates (Scottsdale Airpark), BODYBAR Pilates Scottsdale Ranch (Scottsdale Ranch), The Pilates Room (North Scottsdale (Pima Road)) and Pilates North (Far North Scottsdale). Each listing above covers what the studio is best for, its signature class and a booking tip."}, {"q": "Which Scottsdale neighbourhoods are best for Pilates?", "a": "This guide covers Old Town, McCormick Ranch & Scottsdale Ranch, Scottsdale Airpark and North Scottsdale. Boutique reformer within walking distance of Old Town's restaurants and hotels."}, {"q": "What should I know about booking Pilates classes in Scottsdale?", "a": "Pick your format. Book early mornings. Hydrate."}, {"q": "What should I bring to a Pilates class in Scottsdale?", "a": "Grip socks are required at most reformer studios. Our gear list for Scottsdale covers grip socks, a Pilates mat, a magic circle, resistance bands, a foam roller and a home reformer."}, {"q": "Is there hot Pilates in Scottsdale?", "a": "Yes. Workshop Pilates runs 105°F heated mat classes alongside reformer at its McCormick Ranch studio."}];

const gearName = (g: { name: string; note: string }) => g.note.match(/Our pick: ([^.]+(?:\.\d+[^.]*)?)\./)?.[1] ?? g.name;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Studios in Scottsdale, AZ (2026)",
      "description": "The best Pilates studios in Scottsdale: precision reformer in McCormick Ranch, Old Town boutiques, HIIT Pilates and North Scottsdale. Six picks for 2026.",
      "url": "https://pilatescollectiveclub.com/cities/scottsdale",
      "datePublished": "2026-11-01",
      "dateModified": "2026-11-01",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-studio-changing-area.png" },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/cities/scottsdale" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": CITY_FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
    productItemList("Pilates gear for classes in Scottsdale", GEAR.map((g) => ({ name: gearName(g), description: g.note, price: g.price, url: g.url }))),
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Cities", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "Scottsdale", "item": "https://pilatescollectiveclub.com/cities/scottsdale" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Scottsdale, AZ",
      "url": "https://pilatescollectiveclub.com/cities/scottsdale",
      "numberOfItems": STUDIOS.length,
      "itemListElement": STUDIOS.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "ExerciseGym",
          "name": s.name,
          "description": s.review.slice(0, 200),
          "address": { "@type": "PostalAddress", "streetAddress": s.address, "addressLocality": "Scottsdale", "addressCountry": "US" },
        },
      })),
    },
  ],
};

export default function ScottsdalePage() {
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
              <span style={{ color: "#8b4a31" }}>in Scottsdale, AZ</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Studios checked November 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              {"Scottsdale has one of the busiest reformer scenes in the Southwest, from precision-focused studios in McCormick Ranch to Old Town boutiques, HIIT Pilates near the Airpark and quieter studios in North Scottsdale. This guide covers six studios with confirmed addresses, what each does best and how to book."}
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-studio-changing-area.png" alt="Bright Pilates studio changing area" fill priority className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Scottsdale, AZ, United States</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Reformer, heated mat and HIIT Pilates from Old Town to North Scottsdale</p>
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
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Scottsdale</h2>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Scottsdale</h2>
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
              Grip socks are required at most reformer studios in Scottsdale. These are our recommended picks, all available on Amazon.{" "}
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
          searchPlaceholder="Ask: best reformer Pilates in Scottsdale…"
        />
      </main>
      <Footer />
    </>
  );
}
