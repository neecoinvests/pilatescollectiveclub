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
  title: "Best Pilates Studios in Barcelona (2026)",
  description: "The best Pilates studios in Barcelona: strength-focused reformer, Lagree in Sant Gervasi, boutique studios in Gràcia and Poblenou. Six picks for 2026.",
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  keywords: ["pilates barcelona", "reformer pilates barcelona", "best pilates studios barcelona", "pilates eixample", "pilates gracia", "pilates poblenou", "lagree barcelona", "pilates classes barcelona"],
  openGraph: {
    title: "Best Pilates Studios in Barcelona (2026)",
    description: "Six curated Pilates studios in Barcelona: Eixample, Poblenou, Sant Gervasi, Gràcia and Poble-sec. Checked October 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/barcelona",
    images: [{ url: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1400&q=80", width: 1200, height: 630, alt: "Barcelona Pilates guide, Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Barcelona (2026)",
    description: "Six curated Pilates studios in Barcelona: Eixample, Poblenou, Sant Gervasi, Gràcia and Poble-sec. Checked October 2026.",
    images: ["https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1400&q=80"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/barcelona" },
};

const STUDIOS = [
  {
    number: "01",
    name: "MUDRA Pilates Reformer",
    neighborhood: "Poble-sec",
    priceLevel: "$$$",
    review: "MUDRA treats reformer Pilates as a strength practice first and is one of the highest-rated reformer studios in Barcelona on ClassPass, at 4.9 from thousands of reviews.",
    caveat: "classes are demanding; tell the instructor if you are new.",
    address: "Carrer de Teodor Bonaplata 10, 08004 Barcelona",
    bestFor: "Strength-focused reformer",
    signatureClass: "Reformer",
    bookingTip: "Book popular evening slots several days ahead.",
  },
  {
    number: "02",
    name: "Intensión Studio",
    neighborhood: "Sant Gervasi",
    priceLevel: "$$$",
    review: "Intensión Studio runs reformer and Lagree-style classes, including a lighter Lagree format, in a passage off the upper Eixample. ClassPass users rate it around 4.8 from thousands of reviews.",
    caveat: "Lagree is a slower, high-tension format, not classical Pilates.",
    address: "Passatge de Marimon 4, Barcelona",
    bestFor: "Reformer and Lagree",
    signatureClass: "Light Lagree",
    bookingTip: "Start with the lighter Lagree class if you are new to the machine.",
  },
  {
    number: "03",
    name: "BCN Pilates Poblenou",
    neighborhood: "Poblenou",
    priceLevel: "$$",
    review: "BCN Pilates runs several reformer studios in Poblenou and one in Sagrada Família. The Llull studio offers 50-minute reformer and mat classes plus open reformer practice without an instructor, and has thousands of ClassPass ratings.",
    caveat: "bookings are binding and the door closes two minutes after class starts.",
    address: "Carrer de Llull 233, 08025 Barcelona",
    bestFor: "Reformer classes and open practice",
    signatureClass: "Reformer (50 min)",
    bookingTip: "Bring a towel and water, and arrive on time.",
  },
  {
    number: "04",
    name: "Mou Pilates",
    neighborhood: "Sant Gervasi · Eixample",
    priceLevel: "$$$",
    review: "Mou Pilates is a reformer studio offering personalised instruction and small-group classes, with its Santaló studio in Sant Gervasi and a second studio on Carrer d'Aribau. It is rated 4.9 across ClassPass, Urban Sports Club and Wellhub.",
    caveat: "strict punctuality: about five minutes' grace, and socks are mandatory.",
    address: "Carrer de Santaló 15, 08021 Barcelona",
    bestFor: "Small-group reformer",
    signatureClass: "Reformer (50 min)",
    bookingTip: "Try the Aribau studio at Carrer d'Aribau 24 if you are staying in the Eixample.",
  },
  {
    number: "05",
    name: "SimplyBe Pilates",
    neighborhood: "Eixample (near Urquinaona)",
    priceLevel: "$$$",
    review: "SimplyBe combines Pilates with osteopathy and massage, and lists strength, barre, pregnancy, injury prevention and rehabilitation among its specialities. It suits anyone coming back from an injury or pregnancy.",
    caveat: "check whether a class is mat or equipment-based when you book.",
    address: "Carrer de Pau Claris 83, 3-3, 08010 Barcelona",
    bestFor: "Pilates for rehab and pregnancy",
    signatureClass: "Pilates",
    bookingTip: "Ask about pairing classes with osteopathy if you are recovering from an injury.",
  },
  {
    number: "06",
    name: "Nexes Pilates Gràcia",
    neighborhood: "Gràcia",
    priceLevel: "$$",
    review: "Nexes Pilates on Travessera de Gràcia is a neighbourhood reformer studio listed on Urban Sports Club, convenient if you are staying in Gràcia.",
    caveat: "limited published detail; check class formats when you book.",
    address: "Travessera de Gràcia 185, Barcelona",
    bestFor: "Neighbourhood reformer in Gràcia",
    signatureClass: "Reformer",
    bookingTip: "Try a class through Urban Sports Club first.",
  },
];

const BOOKING_TIPS = [{"heading": "Use a class pass", "body": "Most Barcelona studios are on ClassPass, Urban Sports Club or Wellhub, so you can try several before committing."}, {"heading": "Be on time", "body": "Several studios close the door a few minutes after class starts and treat bookings as binding."}, {"heading": "Know reformer from Lagree", "body": "Barcelona has both. Lagree is slower and more intense; reformer Pilates focuses on control and technique."}, {"heading": "Book evenings ahead", "body": "After-work classes fill first. Book as soon as the schedule opens."}, {"heading": "Bring grip socks", "body": "Socks are mandatory at most reformer studios in the city."}];

const NEIGHBORHOODS = [{"name": "Eixample", "description": "Central studios near Urquinaona and on Carrer d'Aribau, easy to reach by metro."}, {"name": "Sant Gervasi", "description": "Small-group reformer and Lagree studios in the quieter upper city."}, {"name": "Poblenou", "description": "Several reformer studios in the former industrial district near the beach."}, {"name": "Gràcia & Poble-sec", "description": "Neighbourhood reformer in Gràcia and a strength-focused studio near Paral·lel."}];

const GEAR = [{"name": "Pilates Grip Socks", "note": "Our pick: toesox Low Rise Full-Toe Grip Socks (2-Pack). Required at most reformer studios; full-toe grip socks are the standard.", "price": "$30.00", "url": "https://www.amazon.com/dp/B07QHNDHW3?tag=pilatescollective-20"}, {"name": "Pilates Mat", "note": "Our pick: Manduka PRO Yoga & Pilates Mat (6mm). A dense 6mm mat for mat classes and home practice between studio sessions.", "price": "$144.00", "url": "https://www.amazon.com/dp/B0000DZFXZ?tag=pilatescollective-20"}, {"name": "Magic Circle", "note": "Our pick: Balanced Body Ultra-Fit Circle (15-inch). Many studios use the magic circle; worth owning for home reinforcement work.", "price": "$35.00", "url": "https://www.amazon.com/dp/B002YQW3IU?tag=pilatescollective-20"}, {"name": "Resistance Bands", "note": "Our pick: Arena Strength Fabric Glute Bands (3-Pack). Fabric loops that carry reformer leg and glute work into home sessions.", "price": "$29.00", "url": "https://www.amazon.com/dp/B07VYK14JC?tag=pilatescollective-20"}, {"name": "Foam Roller", "note": "Our pick: OPTP PRO-Roller Foam Roller (36-inch). For spinal mobility and release work before and after class.", "price": "$62.99", "url": "https://www.amazon.com/dp/B002C9EX14?tag=pilatescollective-20"}, {"name": "Home Pilates Reformer", "note": "Our pick: PAETA Wooden Foldable Reformer. A folding home reformer to keep your practice going between studio classes.", "price": "$719.99", "url": "https://www.amazon.com/dp/B0D7M7JNFV?tag=pilatescollective-20"}];

const RELATED_CITIES = [{"city": "Paris", "country": "France", "href": "/cities/paris", "studioCount": 6}, {"city": "Amsterdam", "country": "Netherlands", "href": "/cities/amsterdam", "studioCount": 6}, {"city": "Berlin", "country": "Germany", "href": "/cities/berlin", "studioCount": 6}, {"city": "London", "country": "United Kingdom", "href": "/cities/london", "studioCount": 6}];

const FURTHER_READING = [{"title": "Beginner's Guide to Reformer Pilates", "excerpt": "What to expect in your first reformer class, how to choose a studio and how to progress.", "href": "/blog/beginners-guide-to-reformer-pilates", "category": "Beginner Guide", "readTime": "8 min read"}, {"title": "Best Pilates Grip Socks (2026)", "excerpt": "Five verified grip socks for reformer classes, from budget packs to studio favourites.", "href": "/blog/best-pilates-grip-socks", "category": "Accessories", "readTime": "6 min read"}, {"title": "What to Wear to Pilates", "excerpt": "A complete studio outfit guide: leggings, tops, bras and what to leave at home.", "href": "/blog/what-to-wear-to-pilates", "category": "Apparel", "readTime": "6 min read"}, {"title": "Best Megaformer Machine (2026)", "excerpt": "The machines behind Lagree classes, and what a home Megaformer setup really costs.", "href": "/blog/best-megaformer-machine", "category": "Lagree", "readTime": "12 min read"}];

const CITY_FAQS = [{"q": "What are the best Pilates studios in Barcelona?", "a": "Our 6 picks are MUDRA Pilates Reformer (Poble-sec), Intensión Studio (Sant Gervasi), BCN Pilates Poblenou (Poblenou), Mou Pilates (Sant Gervasi · Eixample), SimplyBe Pilates (Eixample (near Urquinaona)) and Nexes Pilates Gràcia (Gràcia). Each listing above covers what the studio is best for, its signature class and a booking tip."}, {"q": "Which Barcelona neighbourhoods are best for Pilates?", "a": "This guide covers Eixample, Sant Gervasi, Poblenou and Gràcia & Poble-sec. Central studios near Urquinaona and on Carrer d'Aribau, easy to reach by metro."}, {"q": "What should I know about booking Pilates classes in Barcelona?", "a": "Use a class pass. Be on time. Know reformer from Lagree."}, {"q": "What should I bring to a Pilates class in Barcelona?", "a": "Grip socks are required at most reformer studios. Our gear list for Barcelona covers grip socks, a Pilates mat, a magic circle, resistance bands, a foam roller and a home reformer."}, {"q": "Can I use ClassPass or Urban Sports Club for Pilates in Barcelona?", "a": "Yes. Most of the studios in this guide are listed on ClassPass, Urban Sports Club or Wellhub."}];

const gearName = (g: { name: string; note: string }) => g.note.match(/Our pick: ([^.]+(?:\.\d+[^.]*)?)\./)?.[1] ?? g.name;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Studios in Barcelona (2026)",
      "description": "The best Pilates studios in Barcelona: strength-focused reformer, Lagree in Sant Gervasi, boutique studios in Gràcia and Poblenou. Six picks for 2026.",
      "url": "https://pilatescollectiveclub.com/cities/barcelona",
      "datePublished": "2026-06-28",
      "dateModified": "2026-10-31",
      "image": { "@type": "ImageObject", "url": "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1400&q=80" },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/cities/barcelona" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": CITY_FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
    productItemList("Pilates gear for classes in Barcelona", GEAR.map((g) => ({ name: gearName(g), description: g.note, price: g.price, url: g.url }))),
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Cities", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "Barcelona", "item": "https://pilatescollectiveclub.com/cities/barcelona" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Barcelona",
      "url": "https://pilatescollectiveclub.com/cities/barcelona",
      "numberOfItems": STUDIOS.length,
      "itemListElement": STUDIOS.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "ExerciseGym",
          "name": s.name,
          "description": s.review.slice(0, 200),
          "address": { "@type": "PostalAddress", "streetAddress": s.address, "addressLocality": "Barcelona", "addressCountry": "ES" },
        },
      })),
    },
  ],
};

export default function BarcelonaPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Spain</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br />
              <span style={{ color: "#8b4a31" }}>in Barcelona</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Studios checked October 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              {"Barcelona's reformer scene has grown fast, with strength-focused studios, Lagree and small boutique rooms spread from Poblenou to Sant Gervasi. Most studios are on ClassPass, Urban Sports Club or Wellhub, which makes it easy to try a few. This guide covers six studios with confirmed addresses, what each does best and how to book."}
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1400&q=80" alt="Barcelona skyline" fill priority className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Barcelona, Spain</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Strength-focused reformer, Lagree and boutique studios from Poblenou to Sant Gervasi</p>
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
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Barcelona</h2>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Barcelona</h2>
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
              Grip socks are required at most reformer studios in Barcelona. These are our recommended picks, all available on Amazon.{" "}
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
          searchPlaceholder="Ask: best reformer Pilates in Barcelona…"
        />
      </main>
      <Footer />
    </>
  );
}
