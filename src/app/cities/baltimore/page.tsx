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
  title: "Best Pilates Studios in Baltimore, MD (2026)",
  description: "The best Pilates studios in Baltimore: infrared reformer in Fells Point, Black-owned Ébène Pilates, North Baltimore studios and [solidcore]. Six picks for 2026.",
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  keywords: ["pilates baltimore", "reformer pilates baltimore", "best pilates studios baltimore", "pilates fells point", "hot pilates baltimore", "pilates federal hill", "pilates hampden", "pilates classes baltimore"],
  openGraph: {
    title: "Best Pilates Studios in Baltimore, MD (2026)",
    description: "Six curated Pilates studios in Baltimore: Fells Point, Locust Point, Federal Hill, Hampden and North Baltimore. Checked October 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/baltimore",
    images: [{ url: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=1400&h=840&fit=crop", width: 1200, height: 630, alt: "Baltimore Pilates guide, Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Baltimore, MD (2026)",
    description: "Six curated Pilates studios in Baltimore: Fells Point, Locust Point, Federal Hill, Hampden and North Baltimore. Checked October 2026.",
    images: ["https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=1400&h=840&fit=crop"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/baltimore" },
};

const STUDIOS = [
  {
    number: "01",
    name: "Pilates House",
    neighborhood: "Fells Point · Roland Park",
    priceLevel: "$$$",
    review: "Pilates House is a boutique studio specialising in reformer and infrared classes, with its Fells Point studio on Thames Street and a second studio in Village Square at Cross Keys in Roland Park. The schedule mixes reformer formats with heated mat classes such as Hot Sculpt, and the Fells Point studio has thousands of ClassPass reviews averaging around 4.8.",
    caveat: "infrared classes are hot; skip them if you prefer a cool room.",
    address: "1809 Thames St, Baltimore, MD 21231",
    bestFor: "Reformer and infrared classes",
    signatureClass: "Hot Sculpt",
    bookingTip: "The Roland Park studio is at 5100 Falls Rd, Suite 38, if you live north of the city.",
  },
  {
    number: "02",
    name: "Ébène Pilates",
    neighborhood: "Locust Point",
    priceLevel: "$$$",
    review: "Ébène Pilates on Beason Street is Baltimore's first Black-owned Pilates studio, built around an inclusive community and reformer classes taught at an energetic pace. ClassPass users rate it around 4.9.",
    caveat: "a smaller studio, so popular times fill quickly.",
    address: "1642 Beason St, Baltimore, MD 21230",
    bestFor: "Inclusive, high-energy reformer",
    signatureClass: "Reformer",
    bookingTip: "Book evening classes a few days ahead.",
  },
  {
    number: "03",
    name: "Embody Pilates & Wellness",
    neighborhood: "North Baltimore",
    priceLevel: "$$$",
    review: "Embody Pilates & Wellness on Lawndale Avenue combines a Pilates and barre studio with wellness services including physical therapy and massage, which makes it a good fit if you are working around an injury.",
    caveat: "check which services are offered at the times you want.",
    address: "5002 Lawndale Ave, Suite A, Baltimore, MD 21210",
    bestFor: "Pilates alongside physical therapy",
    signatureClass: "Reformer",
    bookingTip: "Ask about pairing classes with physical therapy if you are recovering from an injury.",
  },
  {
    number: "04",
    name: "Club Pilates Rotunda",
    neighborhood: "Hampden / Rotunda",
    priceLevel: "$$",
    review: "Club Pilates Rotunda in the Rotunda development runs the chain's levelled reformer programme, from Intro classes to Level 2, with plenty of time slots each day. It is a reliable choice for beginners in Hampden, Roland Park and Charles Village.",
    caveat: "franchise format with larger classes than the independents.",
    address: "727 W 40th St, Suite 132, Baltimore, MD 21211",
    bestFor: "Structured beginner reformer",
    signatureClass: "CP Reformer Flow",
    bookingTip: "Start with an Intro class before booking Level 1.",
  },
  {
    number: "05",
    name: "[solidcore] Fed Hill",
    neighborhood: "Federal Hill",
    priceLevel: "$$$",
    review: "[solidcore] Fed Hill sits in the 101 Cross Street apartment complex. Its 50-minute classes on the Sculptor machine are slow, high-tension strength workouts inspired by Pilates.",
    caveat: "not classical Pilates; it is a high-intensity strength format.",
    address: "101 Cross St, Suite B, Baltimore, MD 21230",
    bestFor: "High-intensity, Pilates-inspired strength",
    signatureClass: "Signature50",
    bookingTip: "Arrive early for your first class to set up the machine.",
  },
  {
    number: "06",
    name: "Pilates House Roland Park",
    neighborhood: "Roland Park / Cross Keys",
    priceLevel: "$$$",
    review: "Pilates House's second studio, in Village Square at Cross Keys, brings the same reformer and infrared formats to North Baltimore, with Hot Sculpt and Hot Pilates on the schedule. ClassPass users rate it around 4.8 from hundreds of reviews.",
    caveat: "same brand as the Fells Point studio, so choose by location.",
    address: "5100 Falls Rd, Suite 38, Baltimore, MD 21210",
    bestFor: "Reformer and hot classes in North Baltimore",
    signatureClass: "Hot Pilates",
    bookingTip: "Parking is easier here than in Fells Point.",
  },
];

const BOOKING_TIPS = [{"heading": "Choose hot or cool", "body": "Some Baltimore studios run infrared heated classes. Check the class description if you prefer a cool room."}, {"heading": "Know Pilates from [solidcore]", "body": "[solidcore] is a high-intensity strength format inspired by Pilates. Pick a reformer studio if you want technique-focused classes."}, {"heading": "Book evenings ahead", "body": "After-work classes fill first at the smaller independents. Book a few days ahead."}, {"heading": "Plan parking in Fells Point", "body": "Street parking near Thames Street is tight. Allow extra time or walk from nearby garages."}, {"heading": "Bring grip socks", "body": "Grip socks are required at most reformer studios, and most sell them at the desk if you forget."}];

const NEIGHBORHOODS = [{"name": "Fells Point", "description": "Infrared reformer classes on Thames Street, close to the harbour."}, {"name": "Locust Point & Federal Hill", "description": "Ébène Pilates and [solidcore], convenient for South Baltimore residents."}, {"name": "Hampden & Rotunda", "description": "Club Pilates in the Rotunda, an easy choice for beginners in central North Baltimore."}, {"name": "Roland Park & North Baltimore", "description": "Pilates House at Cross Keys and Embody Pilates & Wellness on Lawndale Avenue."}];

const GEAR = [{"name": "Pilates Grip Socks", "note": "Our pick: toesox Low Rise Full-Toe Grip Socks (2-Pack). Required at most reformer studios; full-toe grip socks are the standard.", "price": "$30.00", "url": "https://www.amazon.com/dp/B07QHNDHW3?tag=pilatescollective-20"}, {"name": "Pilates Mat", "note": "Our pick: Manduka PRO Yoga & Pilates Mat (6mm). A dense 6mm mat for mat classes and home practice between studio sessions.", "price": "$144.00", "url": "https://www.amazon.com/dp/B0000DZFXZ?tag=pilatescollective-20"}, {"name": "Magic Circle", "note": "Our pick: Balanced Body Ultra-Fit Circle (15-inch). Many studios use the magic circle; worth owning for home reinforcement work.", "price": "$35.00", "url": "https://www.amazon.com/dp/B002YQW3IU?tag=pilatescollective-20"}, {"name": "Resistance Bands", "note": "Our pick: Arena Strength Fabric Glute Bands (3-Pack). Fabric loops that carry reformer leg and glute work into home sessions.", "price": "$29.00", "url": "https://www.amazon.com/dp/B07VYK14JC?tag=pilatescollective-20"}, {"name": "Foam Roller", "note": "Our pick: OPTP PRO-Roller Foam Roller (36-inch). For spinal mobility and release work before and after class.", "price": "$62.99", "url": "https://www.amazon.com/dp/B002C9EX14?tag=pilatescollective-20"}, {"name": "Home Pilates Reformer", "note": "Our pick: PAETA Wooden Foldable Reformer. A folding home reformer to keep your practice going between studio classes.", "price": "$719.99", "url": "https://www.amazon.com/dp/B0D7M7JNFV?tag=pilatescollective-20"}];

const RELATED_CITIES = [{"city": "Washington DC", "country": "United States", "href": "/cities/washington-dc", "studioCount": 6}, {"city": "Philadelphia", "country": "United States", "href": "/cities/philadelphia", "studioCount": 6}, {"city": "New York", "country": "United States", "href": "/cities/new-york", "studioCount": 6}, {"city": "Boston", "country": "United States", "href": "/cities/boston", "studioCount": 6}];

const FURTHER_READING = [{"title": "Beginner's Guide to Reformer Pilates", "excerpt": "What to expect in your first reformer class, how to choose a studio and how to progress.", "href": "/blog/beginners-guide-to-reformer-pilates", "category": "Beginner Guide", "readTime": "8 min read"}, {"title": "Best Pilates Grip Socks (2026)", "excerpt": "Five verified grip socks for reformer classes, from budget packs to studio favourites.", "href": "/blog/best-pilates-grip-socks", "category": "Accessories", "readTime": "6 min read"}, {"title": "What to Wear to Pilates", "excerpt": "A complete studio outfit guide: leggings, tops, bras and what to leave at home.", "href": "/blog/what-to-wear-to-pilates", "category": "Apparel", "readTime": "6 min read"}, {"title": "Best Pilates Reformer Brands (2026)", "excerpt": "Every major reformer brand ranked, for home practitioners and studio owners.", "href": "/blog/best-pilates-reformer-brands", "category": "Equipment", "readTime": "18 min read"}];

const CITY_FAQS = [{"q": "What are the best Pilates studios in Baltimore?", "a": "Our 6 picks are Pilates House (Fells Point · Roland Park), Ébène Pilates (Locust Point), Embody Pilates & Wellness (North Baltimore), Club Pilates Rotunda (Hampden / Rotunda), [solidcore] Fed Hill (Federal Hill) and Pilates House Roland Park (Roland Park / Cross Keys). Each listing above covers what the studio is best for, its signature class and a booking tip."}, {"q": "Which Baltimore neighbourhoods are best for Pilates?", "a": "This guide covers Fells Point, Locust Point & Federal Hill, Hampden & Rotunda and Roland Park & North Baltimore. Infrared reformer classes on Thames Street, close to the harbour."}, {"q": "What should I know about booking Pilates classes in Baltimore?", "a": "Choose hot or cool. Know Pilates from [solidcore]. Book evenings ahead."}, {"q": "What should I bring to a Pilates class in Baltimore?", "a": "Grip socks are required at most reformer studios. Our gear list for Baltimore covers grip socks, a Pilates mat, a magic circle, resistance bands, a foam roller and a home reformer."}, {"q": "Is there hot Pilates in Baltimore?", "a": "Yes. Pilates House runs infrared classes such as Hot Sculpt at its Fells Point and Roland Park studios."}];

const gearName = (g: { name: string; note: string }) => g.note.match(/Our pick: ([^.]+(?:\.\d+[^.]*)?)\./)?.[1] ?? g.name;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Studios in Baltimore, MD (2026)",
      "description": "The best Pilates studios in Baltimore: infrared reformer in Fells Point, Black-owned Ébène Pilates, North Baltimore studios and [solidcore]. Six picks for 2026.",
      "url": "https://pilatescollectiveclub.com/cities/baltimore",
      "datePublished": "2026-06-01",
      "dateModified": "2026-10-31",
      "image": { "@type": "ImageObject", "url": "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=1400&h=840&fit=crop" },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/cities/baltimore" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": CITY_FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
    productItemList("Pilates gear for classes in Baltimore", GEAR.map((g) => ({ name: gearName(g), description: g.note, price: g.price, url: g.url }))),
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Cities", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "Baltimore", "item": "https://pilatescollectiveclub.com/cities/baltimore" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Baltimore, MD",
      "url": "https://pilatescollectiveclub.com/cities/baltimore",
      "numberOfItems": STUDIOS.length,
      "itemListElement": STUDIOS.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "ExerciseGym",
          "name": s.name,
          "description": s.review.slice(0, 200),
          "address": { "@type": "PostalAddress", "streetAddress": s.address, "addressLocality": "Baltimore", "addressCountry": "US" },
        },
      })),
    },
  ],
};

export default function BaltimorePage() {
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
              <span style={{ color: "#8b4a31" }}>in Baltimore, MD</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Studios checked October 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              {"Baltimore's Pilates scene is built around a few strong independents: an infrared reformer studio on Thames Street in Fells Point, the city's first Black-owned Pilates studio in Locust Point and a Pilates-and-wellness studio in North Baltimore, plus Club Pilates and [solidcore]. This guide covers six studios with confirmed addresses, what each does best and how to book."}
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=1400&h=840&fit=crop" alt="Baltimore Inner Harbor" fill priority className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Baltimore, MD, United States</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Reformer, infrared and strength classes from Fells Point to Roland Park</p>
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
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Baltimore</h2>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Baltimore</h2>
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
              Grip socks are required at most reformer studios in Baltimore. These are our recommended picks, all available on Amazon.{" "}
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
          searchPlaceholder="Ask: best reformer Pilates in Baltimore…"
        />
      </main>
      <Footer />
    </>
  );
}
