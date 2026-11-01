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
  title: "Best Pilates Studios in Boston, MA (2026)",
  description: "The best Pilates studios in Boston: classical Pilates in the South End and Jamaica Plain, boutique reformer in Back Bay and the North End. Six picks for 2026.",
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  keywords: ["pilates boston", "reformer pilates boston", "best pilates studios boston", "classical pilates boston", "pilates back bay", "pilates south end", "pilates jamaica plain", "pilates classes boston"],
  openGraph: {
    title: "Best Pilates Studios in Boston, MA (2026)",
    description: "Six curated Pilates studios in Boston: South End, Jamaica Plain, Back Bay and the Waterfront. Checked October 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/boston",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/boston.jpg", width: 1200, height: 630, alt: "Boston Pilates guide, Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Boston, MA (2026)",
    description: "Six curated Pilates studios in Boston: South End, Jamaica Plain, Back Bay and the Waterfront. Checked October 2026.",
    images: ["https://pilatescollectiveclub.com/pictures/boston.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/boston" },
};

const STUDIOS = [
  {
    number: "01",
    name: "Endurance Pilates and Yoga",
    neighborhood: "South End",
    priceLevel: "$$$",
    review: "Endurance was founded by Master Pilates Trainer Julie Erickson, opened in Arlington in 2010 and moved to Washington Street in the South End. It focuses on classical Pilates, with mat, reformer and tower classes plus private and semi-private sessions on Gratz equipment, and also offers yoga.",
    caveat: "a classical studio, so expect a set order of exercises rather than fast-paced fusion.",
    address: "1636 Washington St, Boston, MA 02118",
    bestFor: "Classical Pilates on Gratz equipment",
    signatureClass: "Classical Tower",
    bookingTip: "Try a tower class if you have only done reformer before.",
  },
  {
    number: "02",
    name: "Pilates Back Bay",
    neighborhood: "Back Bay",
    priceLevel: "$$$",
    review: "Pilates Back Bay is a fully equipped boutique studio on the third floor of 376 Boylston Street, and a Power Pilates studio teaching the classical method.",
    caveat: "not to be confused with Club Pilates Back Bay on St James Avenue.",
    address: "376 Boylston St, 3rd Floor, Boston, MA 02116",
    bestFor: "Classical Pilates in Back Bay",
    signatureClass: "Classical Private",
    bookingTip: "Start with privates to learn the classical system.",
  },
  {
    number: "03",
    name: "Boston Pilates",
    neighborhood: "Jamaica Plain",
    priceLevel: "$$$",
    review: "Boston Pilates on Green Street follows the teachings of Joseph Pilates, with small-group and private sessions on reformers, towers and chairs as well as mat classes. It is a Power Pilates studio near the Green Street stop on the Orange Line.",
    caveat: "a small studio with limited class times.",
    address: "160 Green St, Jamaica Plain, MA 02130",
    bestFor: "Classical Pilates in Jamaica Plain",
    signatureClass: "Small Group Apparatus",
    bookingTip: "Take the Orange Line to Green Street.",
  },
  {
    number: "04",
    name: "Boston Body Pilates (Back Bay)",
    neighborhood: "Back Bay",
    priceLevel: "$$$",
    review: "Boston Body Pilates runs reformer classes at 17 Arlington Street, next to the Arlington T stop at the end of Newbury Street, with a second studio on Commercial Wharf.",
    caveat: "listings differ on which locations are current; confirm the studio when you book.",
    address: "17 Arlington St, First Floor, Boston, MA 02116",
    bestFor: "Boutique reformer by the Public Garden",
    signatureClass: "Reformer",
    bookingTip: "Take the Green Line to Arlington.",
  },
  {
    number: "05",
    name: "Boston Body Pilates (Waterfront)",
    neighborhood: "Waterfront / North End",
    priceLevel: "$$$",
    review: "Boston Body's Commercial Wharf studio offers reformer classes on the Waterfront, convenient for the North End and the Financial District.",
    caveat: "same brand as the Back Bay studio, so choose by location.",
    address: "34 Commercial Wharf, Boston, MA 02110",
    bestFor: "Reformer on the Waterfront",
    signatureClass: "Reformer",
    bookingTip: "Good for before-work classes if you work downtown.",
  },
  {
    number: "06",
    name: "Club Pilates Back Bay",
    neighborhood: "Back Bay",
    priceLevel: "$$",
    review: "Club Pilates Back Bay on St James Avenue runs the chain's levelled reformer programme and offers a free 30-minute introductory class. ClassPass users rate it highly across thousands of reviews.",
    caveat: "franchise format with larger classes than the independents.",
    address: "31 St James Ave, Boston, MA 02116",
    bestFor: "Structured beginner reformer",
    signatureClass: "CP Reformer Flow",
    bookingTip: "Book the free intro class first.",
  },
];

const BOOKING_TIPS = [{"heading": "Try classical Pilates", "body": "Boston has several classical studios. A private session is the best way to learn the method behind every reformer class."}, {"heading": "Use the T", "body": "Most studios here are a short walk from a T stop. Parking in Back Bay and the South End is expensive."}, {"heading": "Book early mornings ahead", "body": "Before-work classes fill first in Back Bay. Book as soon as the schedule opens."}, {"heading": "Check the location", "body": "Some brands run more than one studio. Confirm the address before you go."}, {"heading": "Bring grip socks", "body": "Grip socks are required at most reformer studios."}];

const NEIGHBORHOODS = [{"name": "Back Bay", "description": "Classical, boutique reformer and Club Pilates studios around Boylston Street and the Public Garden."}, {"name": "South End", "description": "A classical studio on Washington Street with tower and reformer classes."}, {"name": "Jamaica Plain", "description": "A small classical studio near the Green Street Orange Line stop."}, {"name": "Waterfront & North End", "description": "Boutique reformer on Commercial Wharf."}];

const GEAR = [{"name": "Pilates Grip Socks", "note": "Our pick: toesox Low Rise Full-Toe Grip Socks (2-Pack). Required at most reformer studios; full-toe grip socks are the standard.", "price": "$30.00", "url": "https://www.amazon.com/dp/B07QHNDHW3?tag=pilatescollective-20"}, {"name": "Pilates Mat", "note": "Our pick: Manduka PRO Yoga & Pilates Mat (6mm). A dense 6mm mat for mat classes and home practice between studio sessions.", "price": "$144.00", "url": "https://www.amazon.com/dp/B0000DZFXZ?tag=pilatescollective-20"}, {"name": "Magic Circle", "note": "Our pick: Balanced Body Ultra-Fit Circle (15-inch). Many studios use the magic circle; worth owning for home reinforcement work.", "price": "$35.00", "url": "https://www.amazon.com/dp/B002YQW3IU?tag=pilatescollective-20"}, {"name": "Resistance Bands", "note": "Our pick: Arena Strength Fabric Glute Bands (3-Pack). Fabric loops that carry reformer leg and glute work into home sessions.", "price": "$29.00", "url": "https://www.amazon.com/dp/B07VYK14JC?tag=pilatescollective-20"}, {"name": "Foam Roller", "note": "Our pick: OPTP PRO-Roller Foam Roller (36-inch). For spinal mobility and release work before and after class.", "price": "$62.99", "url": "https://www.amazon.com/dp/B002C9EX14?tag=pilatescollective-20"}, {"name": "Home Pilates Reformer", "note": "Our pick: PAETA Wooden Foldable Reformer. A folding home reformer to keep your practice going between studio classes.", "price": "$719.99", "url": "https://www.amazon.com/dp/B0D7M7JNFV?tag=pilatescollective-20"}];

const RELATED_CITIES = [{"city": "New York", "country": "United States", "href": "/cities/new-york", "studioCount": 6}, {"city": "Washington DC", "country": "United States", "href": "/cities/washington-dc", "studioCount": 6}, {"city": "Chicago", "country": "United States", "href": "/cities/chicago", "studioCount": 6}, {"city": "London", "country": "United Kingdom", "href": "/cities/london", "studioCount": 6}];

const FURTHER_READING = [{"title": "Beginner's Guide to Reformer Pilates", "excerpt": "What to expect in your first reformer class, how to choose a studio and how to progress.", "href": "/blog/beginners-guide-to-reformer-pilates", "category": "Beginner Guide", "readTime": "8 min read"}, {"title": "Best Pilates Grip Socks (2026)", "excerpt": "Five verified grip socks for reformer classes, from budget packs to studio favourites.", "href": "/blog/best-pilates-grip-socks", "category": "Accessories", "readTime": "6 min read"}, {"title": "What to Wear to Pilates", "excerpt": "A complete studio outfit guide: leggings, tops, bras and what to leave at home.", "href": "/blog/what-to-wear-to-pilates", "category": "Apparel", "readTime": "6 min read"}, {"title": "Best Pilates Reformer Brands (2026)", "excerpt": "Every major reformer brand ranked, for home practitioners and studio owners.", "href": "/blog/best-pilates-reformer-brands", "category": "Equipment", "readTime": "18 min read"}];

const CITY_FAQS = [{"q": "What are the best Pilates studios in Boston?", "a": "Our 6 picks are Endurance Pilates and Yoga (South End), Pilates Back Bay (Back Bay), Boston Pilates (Jamaica Plain), Boston Body Pilates (Back Bay) (Back Bay), Boston Body Pilates (Waterfront) (Waterfront / North End) and Club Pilates Back Bay (Back Bay). Each listing above covers what the studio is best for, its signature class and a booking tip."}, {"q": "Which Boston neighbourhoods are best for Pilates?", "a": "This guide covers Back Bay, South End, Jamaica Plain and Waterfront & North End. Classical, boutique reformer and Club Pilates studios around Boylston Street and the Public Garden."}, {"q": "What should I know about booking Pilates classes in Boston?", "a": "Try classical Pilates. Use the T. Book early mornings ahead."}, {"q": "What should I bring to a Pilates class in Boston?", "a": "Grip socks are required at most reformer studios. Our gear list for Boston covers grip socks, a Pilates mat, a magic circle, resistance bands, a foam roller and a home reformer."}, {"q": "Is there classical Pilates in Boston?", "a": "Yes. Endurance Pilates and Yoga, Pilates Back Bay and Boston Pilates all teach the classical method."}];

const gearName = (g: { name: string; note: string }) => g.note.match(/Our pick: ([^.]+(?:\.\d+[^.]*)?)\./)?.[1] ?? g.name;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Studios in Boston, MA (2026)",
      "description": "The best Pilates studios in Boston: classical Pilates in the South End and Jamaica Plain, boutique reformer in Back Bay and the North End. Six picks for 2026.",
      "url": "https://pilatescollectiveclub.com/cities/boston",
      "datePublished": "2026-06-01",
      "dateModified": "2026-10-31",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/boston.jpg" },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/cities/boston" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": CITY_FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
    productItemList("Pilates gear for classes in Boston", GEAR.map((g) => ({ name: gearName(g), description: g.note, price: g.price, url: g.url }))),
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Cities", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "Boston", "item": "https://pilatescollectiveclub.com/cities/boston" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Boston, MA",
      "url": "https://pilatescollectiveclub.com/cities/boston",
      "numberOfItems": STUDIOS.length,
      "itemListElement": STUDIOS.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "ExerciseGym",
          "name": s.name,
          "description": s.review.slice(0, 200),
          "address": { "@type": "PostalAddress", "streetAddress": s.address, "addressLocality": "Boston", "addressCountry": "US" },
        },
      })),
    },
  ],
};

export default function BostonPage() {
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
              <span style={{ color: "#8b4a31" }}>in Boston, MA</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Studios checked October 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              {"Boston has a strong classical Pilates tradition, with fully equipped studios in the South End, Jamaica Plain and Back Bay, alongside boutique reformer studios and Club Pilates. This guide covers six studios with confirmed addresses, what each does best and how to book."}
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/boston.jpg" alt="Boston skyline" fill priority className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Boston, MA, United States</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Classical Pilates, boutique reformer and Club Pilates from the South End to Back Bay</p>
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
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Boston</h2>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Boston</h2>
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
              Grip socks are required at most reformer studios in Boston. These are our recommended picks, all available on Amazon.{" "}
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
          searchPlaceholder="Ask: best reformer Pilates in Boston…"
        />
      </main>
      <Footer />
    </>
  );
}
