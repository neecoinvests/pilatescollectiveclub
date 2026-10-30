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
  title: "Best Pilates Studios in Boulder, CO (2026)",
  description: "The best Pilates studios in Boulder: a classical teacher-training center founded in 1990, reformer studios on Pearl Street, Folsom and Baseline. Six picks.",
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  keywords: ["pilates boulder", "reformer pilates boulder", "best pilates studios boulder", "classical pilates boulder", "pilates teacher training boulder", "pilates pearl street", "pilates classes boulder co", "the pilates center boulder"],
  openGraph: {
    title: "Best Pilates Studios in Boulder, CO (2026)",
    description: "Six curated Pilates studios in Boulder, Colorado, from classical to modern reformer. Checked October 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/boulder",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-reformer-spring-detail.png", width: 1200, height: 630, alt: "Boulder Pilates guide, Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Boulder, CO (2026)",
    description: "Six curated Pilates studios in Boulder, Colorado, from classical to modern reformer. Checked October 2026.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-reformer-spring-detail.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/boulder" },
};

const STUDIOS = [
  {
    number: "01",
    name: "The Pilates Center",
    neighborhood: "Boulder",
    priceLevel: "$$$",
    review: "The Pilates Center was founded in Boulder in 1990 by sisters Amy Taylor Alpers and Rachel Taylor Segel, who launched its teacher training programme in 1991. Its mission is to promote the original, classical method, and its 600-hour comprehensive training is recognised by the University of Colorado Boulder.",
    caveat: "listings show more than one address, so confirm the current studio location before you go.",
    address: "Boulder, CO 80301",
    bestFor: "Classical Pilates and teacher training",
    signatureClass: "Classical Pilates",
    bookingTip: "Ask about privates or apprentice-taught sessions to learn the classical order.",
  },
  {
    number: "02",
    name: "TransFORM Colorado",
    neighborhood: "Pearl Parkway",
    priceLevel: "$$$",
    review: "TransFORM Colorado delivers reformer Pilates for athletes and wellness-minded clients from its Boulder studio on Pearl Parkway, with further studios in Denver. It is rated 4.9 by more than ten thousand ClassPass users.",
    caveat: "athletic, strength-focused classes; expect a workout rather than slow technique.",
    address: "3000 Pearl Parkway, Boulder, CO",
    bestFor: "Athletic reformer Pilates",
    signatureClass: "Reformer",
    bookingTip: "Book early-morning classes before a run or ride.",
  },
  {
    number: "03",
    name: "Care To Pilates",
    neighborhood: "Pearl Street (east)",
    priceLevel: "$$$",
    review: "Care To Pilates is a boutique studio on Pearl Street specialising in reformer and mat Pilates. Its entrance is on Spruce Street, which is worth knowing before your first visit.",
    caveat: "a small studio, so class times are limited.",
    address: "2795 Pearl Street, Suite 102, Boulder, CO 80302",
    bestFor: "Boutique reformer and mat",
    signatureClass: "Reformer Pilates",
    bookingTip: "Use the Spruce Street entrance.",
  },
  {
    number: "04",
    name: "Bolder Pilates",
    neighborhood: "Folsom Street",
    priceLevel: "$$$",
    review: "Bolder Pilates is a small boutique studio on Folsom Street offering personalised group classes and private sessions. It describes itself as voted one of the best places for Pilates in Boulder.",
    caveat: "small classes mean limited spaces.",
    address: "3012 Folsom Street, Boulder, CO 80304",
    bestFor: "Personal attention in small classes",
    signatureClass: "Small Group Reformer",
    bookingTip: "Book a private first if you want a plan built around your goals.",
  },
  {
    number: "05",
    name: "Club Pilates Boulder",
    neighborhood: "Baseline Road",
    priceLevel: "$$",
    review: "Club Pilates Boulder on Baseline Road runs reformer-based classes in a structured system, with levels that make it easy to progress. It is a reliable, good-value option for regular weekly classes.",
    caveat: "a franchise studio; consistent, but less intimate than a boutique.",
    address: "2850 Baseline Road, Unit A-2, Boulder, CO 80303",
    bestFor: "Structured, good-value reformer",
    signatureClass: "Reformer Flow",
    bookingTip: "Start with an intro class so an instructor can set you up.",
  },
  {
    number: "06",
    name: "MK Pilates",
    neighborhood: "30th Street",
    priceLevel: "$$",
    review: "MK Pilates is a dedicated studio on 30th Street offering reformer and mat classes designed to build core stability and flexibility. It is a quieter alternative to the bigger brands.",
    caveat: "limited published information, so check class times and formats when you book.",
    address: "1800 30th Street #218b, Boulder, CO 80301",
    bestFor: "Reformer and mat for core stability",
    signatureClass: "Reformer & Mat",
    bookingTip: "Confirm the schedule directly before your first visit.",
  },
];

const BOOKING_TIPS = [{"heading": "Fit classes around training", "body": "Many Boulder clients run, ride or climb. Early-morning reformer classes work well before training, and slower classical sessions suit recovery days."}, {"heading": "Try classical at least once", "body": "Boulder has one of the country's leading classical training centers. A classical private session is a great way to understand the method."}, {"heading": "Use ClassPass to compare", "body": "Several Boulder studios list on ClassPass, which makes it easy to try boutique and franchise formats before committing."}, {"heading": "Drink more at altitude", "body": "Boulder sits at over 5,000 feet. Hydrate well before class, especially if you are visiting from sea level."}, {"heading": "Bring grip socks", "body": "Grip socks are required at most reformer studios in Boulder. Owning a pair saves buying them at the desk."}];

const NEIGHBORHOODS = [{"name": "Pearl Street & downtown", "description": "Boutique reformer and mat studios a short walk from the Pearl Street Mall."}, {"name": "Folsom & central Boulder", "description": "Small, personal studios with group classes and privates, convenient for central residents and CU staff."}, {"name": "Pearl Parkway & 30th Street", "description": "Athletic reformer studios and quieter boutiques in east Boulder."}, {"name": "Baseline & south Boulder", "description": "Franchise reformer classes with easy parking, plus more studios towards Lafayette and Louisville."}];

const GEAR = [{"name": "Pilates Grip Socks", "note": "Our pick: toesox Low Rise Full-Toe Grip Socks (2-Pack). Required at most reformer studios; full-toe grip socks are the standard.", "price": "$30.00", "url": "https://www.amazon.com/dp/B07QHNDHW3?tag=pilatescollective-20"}, {"name": "Pilates Mat", "note": "Our pick: Manduka PRO Yoga & Pilates Mat (6mm). A dense 6mm mat for mat classes and home practice between studio sessions.", "price": "$144.00", "url": "https://www.amazon.com/dp/B0000DZFXZ?tag=pilatescollective-20"}, {"name": "Magic Circle", "note": "Our pick: Balanced Body Ultra-Fit Circle (15-inch). Many studios use the magic circle; worth owning for home reinforcement work.", "price": "$35.00", "url": "https://www.amazon.com/dp/B002YQW3IU?tag=pilatescollective-20"}, {"name": "Resistance Bands", "note": "Our pick: Arena Strength Fabric Glute Bands (3-Pack). Fabric loops that carry reformer leg and glute work into home sessions.", "price": "$29.00", "url": "https://www.amazon.com/dp/B07VYK14JC?tag=pilatescollective-20"}, {"name": "Foam Roller", "note": "Our pick: OPTP PRO-Roller Foam Roller (36-inch). For spinal mobility and release work before and after class.", "price": "$62.99", "url": "https://www.amazon.com/dp/B002C9EX14?tag=pilatescollective-20"}, {"name": "Home Pilates Reformer", "note": "Our pick: PAETA Wooden Foldable Reformer. A folding home reformer to keep your practice going between studio classes.", "price": "$719.99", "url": "https://www.amazon.com/dp/B0D7M7JNFV?tag=pilatescollective-20"}];

const RELATED_CITIES = [{"city": "Denver", "country": "United States", "href": "/cities/denver", "studioCount": 6}, {"city": "Salt Lake City", "country": "United States", "href": "/cities/salt-lake-city", "studioCount": 6}, {"city": "Austin", "country": "United States", "href": "/cities/austin", "studioCount": 6}, {"city": "Seattle", "country": "United States", "href": "/cities/seattle", "studioCount": 6}];

const FURTHER_READING = [{"title": "Beginner's Guide to Reformer Pilates", "excerpt": "What to expect in your first reformer class, how to choose a studio and how to progress.", "href": "/blog/beginners-guide-to-reformer-pilates", "category": "Beginner Guide", "readTime": "8 min read"}, {"title": "Best Pilates Grip Socks (2026)", "excerpt": "Five verified grip socks for reformer classes, from budget packs to studio favourites.", "href": "/blog/best-pilates-grip-socks", "category": "Accessories", "readTime": "6 min read"}, {"title": "What to Wear to Pilates", "excerpt": "A complete studio outfit guide: leggings, tops, bras and what to leave at home.", "href": "/blog/what-to-wear-to-pilates", "category": "Apparel", "readTime": "6 min read"}, {"title": "Best Pilates Reformer Brands (2026)", "excerpt": "Every major reformer brand ranked, for home practitioners and studio owners.", "href": "/blog/best-pilates-reformer-brands", "category": "Equipment", "readTime": "18 min read"}];

const CITY_FAQS = [{"q": "What are the best Pilates studios in Boulder?", "a": "Our 6 picks are The Pilates Center (Boulder), TransFORM Colorado (Pearl Parkway), Care To Pilates (Pearl Street (east)), Bolder Pilates (Folsom Street), Club Pilates Boulder (Baseline Road) and MK Pilates (30th Street). Each listing above covers what the studio is best for, its signature class and a booking tip."}, {"q": "Which Boulder neighbourhoods are best for Pilates?", "a": "This guide covers Pearl Street & downtown, Folsom & central Boulder, Pearl Parkway & 30th Street and Baseline & south Boulder. Boutique reformer and mat studios a short walk from the Pearl Street Mall."}, {"q": "What should I know about booking Pilates classes in Boulder?", "a": "Fit classes around training. Try classical at least once. Use ClassPass to compare."}, {"q": "What should I bring to a Pilates class in Boulder?", "a": "Grip socks are required at most reformer studios. Our gear list for Boulder covers grip socks, a Pilates mat, a magic circle, resistance bands, a foam roller and a home reformer."}, {"q": "Can I train to become a Pilates teacher in Boulder?", "a": "Yes. The Pilates Center has run a classical teacher training programme since 1991, including a 600-hour comprehensive course, and the University of Colorado Boulder recognises its Pilates teaching certificate."}];

const gearName = (g: { name: string; note: string }) => g.note.match(/Our pick: ([^.]+(?:\.\d+[^.]*)?)\./)?.[1] ?? g.name;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Studios in Boulder, CO (2026)",
      "description": "The best Pilates studios in Boulder: a classical teacher-training center founded in 1990, reformer studios on Pearl Street, Folsom and Baseline. Six picks.",
      "url": "https://pilatescollectiveclub.com/cities/boulder",
      "datePublished": "2026-10-29",
      "dateModified": "2026-10-29",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-reformer-spring-detail.png" },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/cities/boulder" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": CITY_FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
    productItemList("Pilates gear for classes in Boulder", GEAR.map((g) => ({ name: gearName(g), description: g.note, price: g.price, url: g.url }))),
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Cities", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "Boulder", "item": "https://pilatescollectiveclub.com/cities/boulder" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Boulder, CO",
      "url": "https://pilatescollectiveclub.com/cities/boulder",
      "numberOfItems": STUDIOS.length,
      "itemListElement": STUDIOS.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "ExerciseGym",
          "name": s.name,
          "description": s.review.slice(0, 200),
          "address": { "@type": "PostalAddress", "streetAddress": s.address, "addressLocality": "Boulder", "addressCountry": "US" },
        },
      })),
    },
  ],
};

export default function BoulderPage() {
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
              <span style={{ color: "#8b4a31" }}>in Boulder, CO</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Studios checked October 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              {"Boulder is one of America's great Pilates towns: it is home to a classical teacher-training center founded in 1990, and its athletic, outdoorsy community supports everything from small boutique studios to reformer classes built for climbers and runners. This guide covers six studios, what each does best and how to book."}
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-reformer-spring-detail.png" alt="Close-up of reformer springs" fill priority className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Boulder, CO, United States</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Classical roots and modern reformer from Pearl Street to Baseline</p>
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
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Boulder</h2>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Boulder</h2>
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
              Grip socks are required at most reformer studios in Boulder. These are our recommended picks, all available on Amazon.{" "}
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
          searchPlaceholder="Ask: best reformer Pilates in Boulder…"
        />
      </main>
      <Footer />
    </>
  );
}
