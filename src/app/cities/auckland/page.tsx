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
  title: "Best Pilates Studios in Auckland (2026)",
  description: "The best Pilates studios in Auckland: reformer studios in Parnell, Newmarket, Ponsonby and the CBD, plus heated classes. Six picks with booking tips for 2026.",
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  keywords: ["pilates auckland", "reformer pilates auckland", "best pilates studios auckland", "pilates parnell", "pilates newmarket", "pilates ponsonby", "hot pilates auckland", "pilates classes auckland", "reformer pilates nz"],
  openGraph: {
    title: "Best Pilates Studios in Auckland (2026)",
    description: "Six curated Pilates studios in Auckland: Parnell, Newmarket, Ponsonby and the CBD. Checked October 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/auckland",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-reformers-aerial-row.png", width: 1200, height: 630, alt: "Auckland Pilates guide, Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Auckland (2026)",
    description: "Six curated Pilates studios in Auckland: Parnell, Newmarket, Ponsonby and the CBD. Checked October 2026.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-reformers-aerial-row.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/auckland" },
};

const STUDIOS = [
  {
    number: "01",
    name: "Reform Fitness",
    neighborhood: "Parnell · Newmarket · CBD · Victoria Park",
    priceLevel: "$$$",
    review: "Reform Fitness runs dynamic reformer Pilates across Auckland, including St Georges Bay Road in Parnell, Melrose Street in Newmarket, the CBD and Victoria Park. Its Parnell studio tops ClassPass's New Zealand reformer list, and its Newmarket studio was the most-voted in a Denizen readers' poll.",
    caveat: "a multi-site brand, so the feel varies a little by location.",
    address: "79a Saint Georges Bay Road, Parnell, Auckland",
    bestFor: "Dynamic reformer across the inner city",
    signatureClass: "Dynamic Reformer",
    bookingTip: "Pick the studio nearest work; schedules differ between locations.",
  },
  {
    number: "02",
    name: "STRONG Pilates Newmarket",
    neighborhood: "Newmarket",
    priceLevel: "$$$",
    review: "STRONG Pilates combines strength and cardio on its Rowformer, a machine that blends a rowing machine with a reformer. The Newmarket studio on Melrose Street is rated 4.9 by more than ten thousand ClassPass users.",
    caveat: "a high-intensity format; not the place for slow classical technique.",
    address: "9 Melrose Street, Newmarket, Auckland",
    bestFor: "High-intensity Rowformer workouts",
    signatureClass: "STRONG on the Rowformer",
    bookingTip: "Grip socks are mandatory; bring your own.",
  },
  {
    number: "03",
    name: "Core Collective",
    neighborhood: "Auckland CBD",
    priceLevel: "$$$",
    review: "Core Collective on Wellesley Street in the CBD offers reformer Pilates alongside barre, TRX and yoga, which makes it a good all-rounder if you want variety in one membership.",
    caveat: "a mixed-format studio; reformer is one of several class types.",
    address: "90 Wellesley Street, Auckland",
    bestFor: "Reformer, barre and TRX in the CBD",
    signatureClass: "Reformer Pilates",
    bookingTip: "Lunchtime classes suit CBD workers.",
  },
  {
    number: "04",
    name: "Contour Pilates",
    neighborhood: "Ponsonby",
    priceLevel: "$$$",
    review: "Contour Pilates is Ponsonby's boutique reformer and matwork studio, rated 4.9 on ClassPass. It suits anyone in Ponsonby, Grey Lynn or Herne Bay who wants a smaller, more personal studio than the big brands.",
    caveat: "listings do not give a street address, so check the location when you book.",
    address: "Ponsonby, Auckland",
    bestFor: "Boutique reformer and mat in Ponsonby",
    signatureClass: "Reformer & Matwork",
    bookingTip: "Weekday mid-morning classes are the easiest to get.",
  },
  {
    number: "05",
    name: "Sweat Yoga",
    neighborhood: "Newmarket",
    priceLevel: "$$",
    review: "Sweat Yoga on Morgan Street in Newmarket is a yoga studio whose timetable includes hot Pilates, a good option for winter or anyone who likes to work up a sweat on the mat.",
    caveat: "a yoga studio with hot mat Pilates, not a reformer studio.",
    address: "12 Morgan Street, Newmarket, Auckland",
    bestFor: "Hot mat Pilates",
    signatureClass: "Hot Pilates",
    bookingTip: "Hydrate well before class and bring a large towel.",
  },
  {
    number: "06",
    name: "Refinery Studios",
    neighborhood: "Hobsonville",
    priceLevel: "$$$",
    review: "Refinery runs a heated mat room warmed to about 35 degrees with infrared panels and an unheated reformer room upstairs, so you can choose between heat and machine work in one visit. The Urban List included it in its 2026 guide to Auckland's best Pilates studios.",
    caveat: "it is in Hobsonville, so it suits north-west residents more than inner-city ones.",
    address: "Hobsonville, Auckland",
    bestFor: "Heated mat and reformer under one roof",
    signatureClass: "Heated Mat Pilates",
    bookingTip: "Try the unheated reformer first if you are new.",
  },
];

const BOOKING_TIPS = [{"heading": "Book early mornings and evenings", "body": "Before-work and after-work classes fill first in Parnell, Newmarket and the CBD. Book as soon as the schedule opens."}, {"heading": "Use ClassPass to sample", "body": "Most Auckland studios list on ClassPass, which is an easy way to compare boutique and brand-name studios."}, {"heading": "Try heated classes carefully", "body": "Hot Pilates is popular in Auckland. Hydrate well, bring a towel and start with a regular class if you are new to heat."}, {"heading": "Know your format", "body": "STRONG's Rowformer and dynamic reformer classes are fast and intense, while boutique studios offer more technique. Choose based on your goal."}, {"heading": "Bring grip socks", "body": "Grip socks are mandatory at most reformer studios in Auckland, and some will not let you start class without them."}];

const NEIGHBORHOODS = [{"name": "Parnell", "description": "Home to one of New Zealand's top-rated reformer studios, on St Georges Bay Road near the Parnell Rise shops."}, {"name": "Newmarket", "description": "Auckland's densest cluster, with reformer, Rowformer and hot Pilates studios a few minutes' walk apart around Melrose Street and Morgan Street."}, {"name": "Ponsonby & Grey Lynn", "description": "Boutique reformer and matwork studios for the inner-west suburbs."}, {"name": "CBD & the north-west", "description": "Mixed-format studios in the CBD for office workers, and heated mat plus reformer studios out in Hobsonville."}];

const GEAR = [{"name": "Pilates Grip Socks", "note": "Our pick: toesox Low Rise Full-Toe Grip Socks (2-Pack). Required at most reformer studios; full-toe grip socks are the standard.", "price": "$30.00", "url": "https://www.amazon.com/dp/B07QHNDHW3?tag=pilatescollective-20"}, {"name": "Pilates Mat", "note": "Our pick: Manduka PRO Yoga & Pilates Mat (6mm). A dense 6mm mat for mat classes and home practice between studio sessions.", "price": "$144.00", "url": "https://www.amazon.com/dp/B0000DZFXZ?tag=pilatescollective-20"}, {"name": "Magic Circle", "note": "Our pick: Balanced Body Ultra-Fit Circle (15-inch). Many studios use the magic circle; worth owning for home reinforcement work.", "price": "$35.00", "url": "https://www.amazon.com/dp/B002YQW3IU?tag=pilatescollective-20"}, {"name": "Resistance Bands", "note": "Our pick: Arena Strength Fabric Glute Bands (3-Pack). Fabric loops that carry reformer leg and glute work into home sessions.", "price": "$29.00", "url": "https://www.amazon.com/dp/B07VYK14JC?tag=pilatescollective-20"}, {"name": "Foam Roller", "note": "Our pick: OPTP PRO-Roller Foam Roller (36-inch). For spinal mobility and release work before and after class.", "price": "$62.99", "url": "https://www.amazon.com/dp/B002C9EX14?tag=pilatescollective-20"}, {"name": "Home Pilates Reformer", "note": "Our pick: PAETA Wooden Foldable Reformer. A folding home reformer to keep your practice going between studio classes.", "price": "$719.99", "url": "https://www.amazon.com/dp/B0D7M7JNFV?tag=pilatescollective-20"}];

const RELATED_CITIES = [{"city": "Sydney", "country": "Australia", "href": "/cities/sydney", "studioCount": 6}, {"city": "Melbourne", "country": "Australia", "href": "/cities/melbourne", "studioCount": 6}, {"city": "Brisbane", "country": "Australia", "href": "/cities/brisbane", "studioCount": 6}, {"city": "Honolulu", "country": "United States", "href": "/cities/honolulu", "studioCount": 6}];

const FURTHER_READING = [{"title": "Beginner's Guide to Reformer Pilates", "excerpt": "What to expect in your first reformer class, how to choose a studio and how to progress.", "href": "/blog/beginners-guide-to-reformer-pilates", "category": "Beginner Guide", "readTime": "8 min read"}, {"title": "Best Pilates Grip Socks (2026)", "excerpt": "Five verified grip socks for reformer classes, from budget packs to studio favorites.", "href": "/blog/best-pilates-grip-socks", "category": "Accessories", "readTime": "6 min read"}, {"title": "What to Wear to Pilates", "excerpt": "A complete studio outfit guide: leggings, tops, bras and what to leave at home.", "href": "/blog/what-to-wear-to-pilates", "category": "Apparel", "readTime": "6 min read"}, {"title": "Best Pilates Equipment for Home Practice", "excerpt": "Everything you need between studio sessions, from a quality mat to resistance bands.", "href": "/blog/best-pilates-equipment-for-home-practice", "category": "Equipment", "readTime": "10 min read"}];

const CITY_FAQS = [{"q": "What are the best Pilates studios in Auckland?", "a": "Our 6 picks are Reform Fitness (Parnell · Newmarket · CBD · Victoria Park), STRONG Pilates Newmarket (Newmarket), Core Collective (Auckland CBD), Contour Pilates (Ponsonby), Sweat Yoga (Newmarket) and Refinery Studios (Hobsonville). Each listing above covers what the studio is best for, its signature class and a booking tip."}, {"q": "Which Auckland neighborhoods are best for Pilates?", "a": "This guide covers Parnell, Newmarket, Ponsonby & Grey Lynn and CBD & the north-west. Home to one of New Zealand's top-rated reformer studios, on St Georges Bay Road near the Parnell Rise shops."}, {"q": "What should I know about booking Pilates classes in Auckland?", "a": "Book early mornings and evenings. Use ClassPass to sample. Try heated classes carefully."}, {"q": "What should I bring to a Pilates class in Auckland?", "a": "Grip socks are required at most reformer studios. Our gear list for Auckland covers grip socks, a Pilates mat, a magic circle, resistance bands, a foam roller and a home reformer."}, {"q": "What is a Rowformer?", "a": "The Rowformer is STRONG Pilates' machine, combining elements of a rowing machine and a reformer for a strength and cardio workout. You can try it at STRONG Pilates Newmarket on Melrose Street."}];

const gearName = (g: { name: string; note: string }) => g.note.match(/Our pick: ([^.]+(?:\.\d+[^.]*)?)\./)?.[1] ?? g.name;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Studios in Auckland (2026)",
      "description": "The best Pilates studios in Auckland: reformer studios in Parnell, Newmarket, Ponsonby and the CBD, plus heated classes. Six picks with booking tips for 2026.",
      "url": "https://pilatescollectiveclub.com/cities/auckland",
      "datePublished": "2026-10-29",
      "dateModified": "2026-10-29",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-reformers-aerial-row.png" },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/cities/auckland" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": CITY_FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
    productItemList("Pilates gear for classes in Auckland", GEAR.map((g) => ({ name: gearName(g), description: g.note, price: g.price, url: g.url }))),
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Cities", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "Auckland", "item": "https://pilatescollectiveclub.com/cities/auckland" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Auckland",
      "url": "https://pilatescollectiveclub.com/cities/auckland",
      "numberOfItems": STUDIOS.length,
      "itemListElement": STUDIOS.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "ExerciseGym",
          "name": s.name,
          "description": s.review.slice(0, 200),
          "address": { "@type": "PostalAddress", "streetAddress": s.address, "addressLocality": "Auckland", "addressCountry": "NZ" },
        },
      })),
    },
  ],
};

export default function AucklandPage() {
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
              <span className="text-[12.5px] font-bold" style={{ color: "#3a3530" }}>New Zealand</span>
            </div>
            <h1 className="mb-6 r-d r-h1">
              The Best Pilates Studios<br />
              <span style={{ color: "#a98a5f" }}>in Auckland</span>
            </h1>
            <p className="text-base mb-8" style={{ color: "#6f6964" }}>
              Studios checked October 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#ddd6cc" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#3a3530" }}>
              {"Auckland has become one of New Zealand's strongest reformer cities, with locally grown studios in Parnell and Newmarket, international brands like STRONG Pilates, and heated mat classes for anyone who likes to sweat. This guide covers six studios across the inner suburbs, what each does best and how to book."}
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image relative r-ah-img">
              <Image src="/pictures/stitch-reformers-aerial-row.png" alt="Aerial view of a row of reformers" fill priority className="object-cover" />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-base font-bold mb-1">Auckland, New Zealand</p>
                  <p className="text-white/70 text-xs">Reformer studios in Parnell, Newmarket, Ponsonby and the CBD</p>
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
            <h2 className="mb-10 r-d r-h2">Tips for booking Pilates in Auckland</h2>
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
            <h2 className="mb-4 r-d r-h2">Best neighborhoods for Pilates in Auckland</h2>
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
              Grip socks are required at most reformer studios in Auckland. These are our recommended picks, all available on Amazon.{" "}
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
          searchPlaceholder="Ask: best reformer Pilates in Auckland…"
        />
      </main>
      <Footer />
    </>
  );
}
