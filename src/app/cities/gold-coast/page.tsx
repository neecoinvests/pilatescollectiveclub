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
  title: "Best Pilates Studios on the Gold Coast (2026)",
  description: "The best Pilates studios on the Gold Coast: Peaches Pilates and Pilates & Co in Burleigh, Plank HQ in Mermaid Beach and Palm Beach studios. Six picks for 2026.",
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  keywords: ["pilates gold coast", "reformer pilates gold coast", "best pilates studios gold coast", "pilates burleigh", "pilates burleigh heads", "pilates palm beach gold coast", "pilates mermaid beach", "pilates classes gold coast"],
  openGraph: {
    title: "Best Pilates Studios on the Gold Coast (2026)",
    description: "Six curated Pilates studios on the Gold Coast: Burleigh Heads, Burleigh Waters, Mermaid Beach and Palm Beach. Checked November 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/gold-coast",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-hands-on-carriage.png", width: 1200, height: 630, alt: "Gold Coast Pilates guide, Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios on the Gold Coast (2026)",
    description: "Six curated Pilates studios on the Gold Coast: Burleigh Heads, Burleigh Waters, Mermaid Beach and Palm Beach. Checked November 2026.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-hands-on-carriage.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/gold-coast" },
};

const STUDIOS = [
  {
    number: "01",
    name: "Peaches Pilates Burleigh",
    neighborhood: "Burleigh Waters",
    priceLevel: "$$$",
    review: "Peaches Pilates tops ClassPass's Australian reformer list, and its Burleigh studio is rated 4.8 from about 13,000 reviews. Reviewers praise the instruction and the spring-resistance sequences, and classes run from 5:30am.",
    caveat: "popular classes fill fast; book ahead.",
    address: "Shop 17, 109 West Burleigh Rd, Burleigh Waters QLD 4220",
    bestFor: "Top-rated group reformer",
    signatureClass: "Reformer",
    bookingTip: "Book the early classes as soon as the timetable opens.",
  },
  {
    number: "02",
    name: "Pilates & Co Burleigh",
    neighborhood: "Burleigh Heads",
    priceLevel: "$$",
    review: "Pilates & Co runs reformer studios across the Gold Coast, including Burleigh, Bundall, Robina and Pimpama, with expert-led classes. Its Burleigh studio is on West Burleigh Road.",
    caveat: "check which studio you have booked.",
    address: "Unit 5, 75 West Burleigh Rd, Burleigh Heads QLD 4220",
    bestFor: "Reformer across several Gold Coast suburbs",
    signatureClass: "Reformer",
    bookingTip: "Robina or Bundall may be closer if you live inland.",
  },
  {
    number: "03",
    name: "Briqx",
    neighborhood: "Burleigh Heads",
    priceLevel: "$$",
    review: "Briqx is an independent boutique reformer studio in Burleigh Heads, rated highly on ClassPass from thousands of reviews and featured on its Australian reformer list.",
    caveat: "a boutique studio with limited spots per class.",
    address: "60 Township Dr, Burleigh Heads QLD 4220",
    bestFor: "Independent boutique reformer",
    signatureClass: "Reformer",
    bookingTip: "Try it if you prefer an independent over a franchise.",
  },
  {
    number: "04",
    name: "Plank HQ",
    neighborhood: "Mermaid Beach",
    priceLevel: "$$",
    review: "Plank HQ mixes reformer work with functional fitness and ranks third on ClassPass's Australian reformer list, with a 4.7 rating from nearly 9,000 reviews.",
    caveat: "a fitness-led format rather than slow technique work.",
    address: "7/11 Surfers Ave, Mermaid Beach QLD 4218",
    bestFor: "Reformer with functional fitness",
    signatureClass: "Reformer",
    bookingTip: "Good for people who want a workout as well as Pilates.",
  },
  {
    number: "05",
    name: "Pilates On Point",
    neighborhood: "Palm Beach",
    priceLevel: "$$",
    review: "Pilates On Point on the Gold Coast Highway is rated 4.9 from more than 2,500 ClassPass reviews and has added a space in Burleigh too.",
    caveat: "busy at peak times.",
    address: "Shop 1/1154 Gold Coast Hwy, Palm Beach QLD 4221",
    bestFor: "Highly rated reformer in Palm Beach",
    signatureClass: "Reformer",
    bookingTip: "Weekday late mornings are quieter.",
  },
  {
    number: "06",
    name: "RITUAL Yoga & Pilates",
    neighborhood: "Palm Beach",
    priceLevel: "$$",
    review: "RITUAL on Palm Beach Avenue runs yoga and Pilates classes and is rated 4.9 from more than 10,000 ClassPass reviews.",
    caveat: "a yoga and Pilates studio; check that you have booked a reformer class.",
    address: "9 Palm Beach Ave, Palm Beach QLD 4221",
    bestFor: "Pilates and yoga by the beach",
    signatureClass: "Pilates",
    bookingTip: "Pair a Pilates class with a yoga session for recovery.",
  },
];

const BOOKING_TIPS = [{"heading": "Go early", "body": "Gold Coast studios start early, and the 5:30am and 6am classes fill first."}, {"heading": "Base yourself in Burleigh", "body": "Burleigh has the densest cluster of studios, with more just north in Mermaid Beach and south in Palm Beach."}, {"heading": "Use ClassPass to compare", "body": "Most studios in this guide list on ClassPass, which makes it easy to try a few."}, {"heading": "Drink plenty of water", "body": "Queensland humidity makes reformer classes harder. Bring a full bottle."}, {"heading": "Bring grip socks", "body": "Grip socks are required at most reformer studios on the Gold Coast."}];

const NEIGHBORHOODS = [{"name": "Burleigh Heads", "description": "The Gold Coast's busiest Pilates strip, with independents and local brands."}, {"name": "Burleigh Waters", "description": "Top-rated group reformer on West Burleigh Road."}, {"name": "Mermaid Beach", "description": "Reformer with functional fitness on Surfers Avenue."}, {"name": "Palm Beach", "description": "Highly rated reformer and yoga studios near the beach."}];

const GEAR = [{"name": "Pilates Grip Socks", "note": "Our pick: toesox Low Rise Full-Toe Grip Socks (2-Pack). Required at most reformer studios; full-toe grip socks are the standard.", "price": "$30.00", "url": "https://www.amazon.com/dp/B07QHNDHW3?tag=pilatescollective-20"}, {"name": "Pilates Mat", "note": "Our pick: Manduka PRO Yoga & Pilates Mat (6mm). A dense 6mm mat for mat classes and home practice between studio sessions.", "price": "$144.00", "url": "https://www.amazon.com/dp/B0000DZFXZ?tag=pilatescollective-20"}, {"name": "Magic Circle", "note": "Our pick: Balanced Body Ultra-Fit Circle (15-inch). Many studios use the magic circle; worth owning for home reinforcement work.", "price": "$35.00", "url": "https://www.amazon.com/dp/B002YQW3IU?tag=pilatescollective-20"}, {"name": "Resistance Bands", "note": "Our pick: Arena Strength Fabric Glute Bands (3-Pack). Fabric loops that carry reformer leg and glute work into home sessions.", "price": "$29.00", "url": "https://www.amazon.com/dp/B07VYK14JC?tag=pilatescollective-20"}, {"name": "Foam Roller", "note": "Our pick: OPTP PRO-Roller Foam Roller (36-inch). For spinal mobility and release work before and after class.", "price": "$62.99", "url": "https://www.amazon.com/dp/B002C9EX14?tag=pilatescollective-20"}, {"name": "Home Pilates Reformer", "note": "Our pick: PAETA Wooden Foldable Reformer. A folding home reformer to keep your practice going between studio classes.", "price": "$719.99", "url": "https://www.amazon.com/dp/B0D7M7JNFV?tag=pilatescollective-20"}];

const RELATED_CITIES = [{"city": "Brisbane", "country": "Australia", "href": "/cities/brisbane", "studioCount": 6}, {"city": "Sydney", "country": "Australia", "href": "/cities/sydney", "studioCount": 6}, {"city": "Melbourne", "country": "Australia", "href": "/cities/melbourne", "studioCount": 6}, {"city": "Perth", "country": "Australia", "href": "/cities/perth", "studioCount": 6}];

const FURTHER_READING = [{"title": "Beginner's Guide to Reformer Pilates", "excerpt": "What to expect in your first reformer class, how to choose a studio and how to progress.", "href": "/blog/beginners-guide-to-reformer-pilates", "category": "Beginner Guide", "readTime": "8 min read"}, {"title": "Best Pilates Grip Socks (2026)", "excerpt": "Five verified grip socks for reformer classes, from budget packs to studio favourites.", "href": "/blog/best-pilates-grip-socks", "category": "Accessories", "readTime": "6 min read"}, {"title": "What to Wear to Pilates", "excerpt": "A complete studio outfit guide: leggings, tops, bras and what to leave at home.", "href": "/blog/what-to-wear-to-pilates", "category": "Apparel", "readTime": "6 min read"}, {"title": "Best Megaformer Machine (2026)", "excerpt": "The machines behind Lagree classes, and what a home Megaformer setup really costs.", "href": "/blog/best-megaformer-machine", "category": "Lagree", "readTime": "12 min read"}];

const CITY_FAQS = [{"q": "What are the best Pilates studios on the Gold Coast?", "a": "Our 6 picks are Peaches Pilates Burleigh (Burleigh Waters), Pilates & Co Burleigh (Burleigh Heads), Briqx (Burleigh Heads), Plank HQ (Mermaid Beach), Pilates On Point (Palm Beach) and RITUAL Yoga & Pilates (Palm Beach). Each listing above covers what the studio is best for, its signature class and a booking tip."}, {"q": "Which Gold Coast neighbourhoods are best for Pilates?", "a": "This guide covers Burleigh Heads, Burleigh Waters, Mermaid Beach and Palm Beach. The Gold Coast's busiest Pilates strip, with independents and local brands."}, {"q": "What should I know about booking Pilates classes on the Gold Coast?", "a": "Go early. Base yourself in Burleigh. Use ClassPass to compare."}, {"q": "What should I bring to a Pilates class on the Gold Coast?", "a": "Grip socks are required at most reformer studios. Our gear list for the Gold Coast covers grip socks, a Pilates mat, a magic circle, resistance bands, a foam roller and a home reformer."}, {"q": "Where is the best area for Pilates on the Gold Coast?", "a": "Burleigh has the densest cluster of reformer studios, with strong options in Mermaid Beach to the north and Palm Beach to the south."}];

const gearName = (g: { name: string; note: string }) => g.note.match(/Our pick: ([^.]+(?:\.\d+[^.]*)?)\./)?.[1] ?? g.name;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Studios on the Gold Coast (2026)",
      "description": "The best Pilates studios on the Gold Coast: Peaches Pilates and Pilates & Co in Burleigh, Plank HQ in Mermaid Beach and Palm Beach studios. Six picks for 2026.",
      "url": "https://pilatescollectiveclub.com/cities/gold-coast",
      "datePublished": "2026-11-01",
      "dateModified": "2026-11-01",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-hands-on-carriage.png" },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/cities/gold-coast" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": CITY_FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
    productItemList("Pilates gear for classes on the Gold Coast", GEAR.map((g) => ({ name: gearName(g), description: g.note, price: g.price, url: g.url }))),
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Cities", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "Gold Coast", "item": "https://pilatescollectiveclub.com/cities/gold-coast" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios on the Gold Coast, QLD",
      "url": "https://pilatescollectiveclub.com/cities/gold-coast",
      "numberOfItems": STUDIOS.length,
      "itemListElement": STUDIOS.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "ExerciseGym",
          "name": s.name,
          "description": s.review.slice(0, 200),
          "address": { "@type": "PostalAddress", "streetAddress": s.address, "addressLocality": "Gold Coast", "addressCountry": "AU" },
        },
      })),
    },
  ],
};

export default function GoldCoastPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Australia</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br />
              <span style={{ color: "#8b4a31" }}>on the Gold Coast, QLD</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Studios checked November 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              {"The Gold Coast has one of Australia's strongest reformer scenes, concentrated along the southern beaches from Mermaid Beach to Burleigh and Palm Beach. This guide covers six studios with confirmed addresses, what each does best and how to book."}
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-hands-on-carriage.png" alt="Hands resting on a reformer carriage" fill priority className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Gold Coast, QLD, Australia</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Reformer studios from Mermaid Beach and Burleigh to Palm Beach</p>
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
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates on the Gold Coast</h2>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates on the Gold Coast</h2>
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
              Grip socks are required at most reformer studios on the Gold Coast. These are our recommended picks, all available on Amazon.{" "}
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
          searchPlaceholder="Ask: best reformer Pilates on the Gold Coast…"
        />
      </main>
      <Footer />
    </>
  );
}
