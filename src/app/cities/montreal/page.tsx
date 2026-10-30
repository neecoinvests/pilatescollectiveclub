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
  title: "Best Pilates Studios in Montreal (2026)",
  description: "The best Pilates studios in Montreal: reformer studios downtown, in Old Montreal, on Saint-Laurent, Saint-Urbain, Saint-Henri and at Royalmount. Six picks.",
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  keywords: ["pilates montreal", "reformer pilates montreal", "best pilates studios montreal", "pilates reformer montréal", "studio pilates montréal", "pilates old montreal", "pilates saint-henri", "barre montreal", "pilates classes montreal"],
  openGraph: {
    title: "Best Pilates Studios in Montreal (2026)",
    description: "Six curated Pilates studios in Montreal: downtown, Old Montreal, Saint-Laurent, Saint-Henri and Royalmount. Checked October 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/montreal",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-studio-modern-row.png", width: 1200, height: 630, alt: "Montreal Pilates guide, Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Montreal (2026)",
    description: "Six curated Pilates studios in Montreal: downtown, Old Montreal, Saint-Laurent, Saint-Henri and Royalmount. Checked October 2026.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-studio-modern-row.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/montreal" },
};

const STUDIOS = [
  {
    number: "01",
    name: "Studio Joie",
    neighborhood: "Downtown (Crescent Street)",
    priceLevel: "$$$",
    review: "Studio Joie is one of Montreal's most-reviewed reformer studios, with thousands of client reviews on ClassPass. Its downtown studio on Crescent Street has a dedicated Reformer Room and a separate Barre Room, so you can mix machine work with barre in one place.",
    caveat: "a popular studio, so peak classes fill quickly.",
    address: "2165 Rue Crescent, Suite 3, Montréal, QC",
    bestFor: "Reformer and barre under one roof downtown",
    signatureClass: "Reformer",
    bookingTip: "Book early-evening classes as soon as the schedule opens.",
  },
  {
    number: "02",
    name: "Pilates Bunker",
    neighborhood: "Saint-Urbain (Mile-Ex)",
    priceLevel: "$$$",
    review: "Pilates Bunker blends reformer Pilates with strength training, with classes such as Reformer Sculpt and Full Body Sweat. It is on Rue Saint-Urbain and is highly rated by thousands of clients on ClassPass.",
    caveat: "strength-led classes; expect to work hard rather than focus on slow technique.",
    address: "7275 Rue Saint-Urbain, Montréal, QC",
    bestFor: "Reformer Pilates with a strength focus",
    signatureClass: "Reformer Sculpt",
    bookingTip: "Start with a Reformer Sculpt class before trying the sweatier formats.",
  },
  {
    number: "03",
    name: "Maison Pause",
    neighborhood: "Old Montreal",
    priceLevel: "$$$",
    review: "Maison Pause describes itself as a wellness destination built around movement, mindfulness and minimalism. Its studio on Rue Saint-Jean in Old Montreal runs reformer classes and is rated 4.8 by thousands of clients on ClassPass.",
    caveat: "a calm, wellness-led space; choose it for mindful movement rather than a high-energy class.",
    address: "465 Rue Saint-Jean, Montréal, QC",
    bestFor: "Calm, minimalist reformer classes in Old Montreal",
    signatureClass: "Reformer",
    bookingTip: "Combine a morning class with a walk through Old Montreal.",
  },
  {
    number: "04",
    name: "Maison C Pilates",
    neighborhood: "Saint-Laurent (Little Italy)",
    priceLevel: "$$$",
    review: "Maison C Pilates is a boutique studio on Boulevard Saint-Laurent, near Little Italy and Rosemont. It runs higher-intensity Pilates classes and is rated 4.9 by clients on ClassPass.",
    caveat: "a smaller studio with a shorter timetable than the big downtown names.",
    address: "6529 Boulevard Saint-Laurent, Montréal, QC",
    bestFor: "Boutique, higher-intensity Pilates on Saint-Laurent",
    signatureClass: "High-Intensity Pilates",
    bookingTip: "Pair a class with a visit to Jean-Talon Market nearby.",
  },
  {
    number: "05",
    name: "Rise Pilates",
    neighborhood: "Royalmount (Mount Royal)",
    priceLevel: "$$$$",
    review: "Rise Pilates is a technically rigorous, design-forward reformer studio inside Royalmount, the shopping and lifestyle destination off the Décarie Expressway. It focuses on precision over spectacle, which suits anyone who wants careful, technical reformer work.",
    caveat: "it is outside the central neighbourhoods, so it suits west-island and Town of Mount Royal residents best.",
    address: "Royalmount, 5050 Chemin de la Côte-de-Liesse, Mont-Royal, QC H4P 0C9",
    bestFor: "Design-led, technical reformer classes",
    signatureClass: "Reformer",
    bookingTip: "Use Royalmount's parking and make a morning of it.",
  },
  {
    number: "06",
    name: "Studio Boa Pilates",
    neighborhood: "Saint-Henri",
    priceLevel: "$$",
    review: "Studio Boa Pilates is a Saint-Henri studio offering a mix of reformer, mat and barre classes designed to build strength, flexibility and balance. It welcomes students of every level, which makes it a friendly neighbourhood choice in the south-west.",
    caveat: "listings do not give a street address, so check the location when you book.",
    address: "Saint-Henri, Montréal, QC",
    bestFor: "Reformer, mat and barre for every level",
    signatureClass: "Reformer, Mat & Barre",
    bookingTip: "Try a mat class first if you are new, then move onto the reformer.",
  },
];

const BOOKING_TIPS = [{"heading": "Book peak classes early", "body": "Before-work and early-evening classes fill first at Montreal's popular reformer studios, especially downtown. Book as soon as the schedule opens."}, {"heading": "Use ClassPass to compare studios", "body": "Most of the studios in this guide list classes on ClassPass, which makes it easy to try a few before choosing one."}, {"heading": "Expect classes in French and English", "body": "Many Montreal instructors teach bilingually. If you prefer one language, check the class description or ask the studio."}, {"heading": "Start at the right level", "body": "If you are new to the reformer, choose a beginner or all-levels class first. Strength-focused formats are more fun once you know the machine."}, {"heading": "Bring grip socks", "body": "Grip socks are required at almost every reformer studio in Montreal. Owning a pair saves buying them at the desk."}];

const NEIGHBORHOODS = [{"name": "Downtown & Golden Square Mile", "description": "Busy studios around Crescent Street with separate reformer and barre rooms, convenient for office workers and visitors staying downtown."}, {"name": "Old Montreal", "description": "Calm, minimalist studios among the historic streets, good for a mindful morning class."}, {"name": "Mile-Ex, Little Italy & Saint-Laurent", "description": "Boutique studios along Saint-Laurent and Saint-Urbain, from strength-led reformer to higher-intensity Pilates."}, {"name": "Saint-Henri & Royalmount", "description": "A friendly all-levels studio in Saint-Henri and a design-led reformer studio at Royalmount for the west of the city."}];

const GEAR = [{"name": "Pilates Grip Socks", "note": "Our pick: toesox Low Rise Full-Toe Grip Socks (2-Pack). Required at most reformer studios; full-toe grip socks are the standard.", "price": "$30.00", "url": "https://www.amazon.com/dp/B07QHNDHW3?tag=pilatescollective-20"}, {"name": "Pilates Mat", "note": "Our pick: Manduka PRO Yoga & Pilates Mat (6mm). A dense 6mm mat for mat classes and home practice between studio sessions.", "price": "$144.00", "url": "https://www.amazon.com/dp/B0000DZFXZ?tag=pilatescollective-20"}, {"name": "Magic Circle", "note": "Our pick: Balanced Body Ultra-Fit Circle (15-inch). Many studios use the magic circle; worth owning for home reinforcement work.", "price": "$35.00", "url": "https://www.amazon.com/dp/B002YQW3IU?tag=pilatescollective-20"}, {"name": "Resistance Bands", "note": "Our pick: Arena Strength Fabric Glute Bands (3-Pack). Fabric loops that carry reformer leg and glute work into home sessions.", "price": "$29.00", "url": "https://www.amazon.com/dp/B07VYK14JC?tag=pilatescollective-20"}, {"name": "Foam Roller", "note": "Our pick: OPTP PRO-Roller Foam Roller (36-inch). For spinal mobility and release work before and after class.", "price": "$62.99", "url": "https://www.amazon.com/dp/B002C9EX14?tag=pilatescollective-20"}, {"name": "Home Pilates Reformer", "note": "Our pick: PAETA Wooden Foldable Reformer. A folding home reformer to keep your practice going between studio classes.", "price": "$719.99", "url": "https://www.amazon.com/dp/B0D7M7JNFV?tag=pilatescollective-20"}];

const RELATED_CITIES = [{"city": "Toronto", "country": "Canada", "href": "/cities/toronto", "studioCount": 6}, {"city": "Vancouver", "country": "Canada", "href": "/cities/vancouver", "studioCount": 6}, {"city": "New York", "country": "United States", "href": "/cities/new-york", "studioCount": 6}, {"city": "Boston", "country": "United States", "href": "/cities/boston", "studioCount": 6}];

const FURTHER_READING = [{"title": "Beginner's Guide to Reformer Pilates", "excerpt": "What to expect in your first reformer class, how to choose a studio and how to progress.", "href": "/blog/beginners-guide-to-reformer-pilates", "category": "Beginner Guide", "readTime": "8 min read"}, {"title": "Best Pilates Grip Socks (2026)", "excerpt": "Five verified grip socks for reformer classes, from budget packs to studio favourites.", "href": "/blog/best-pilates-grip-socks", "category": "Accessories", "readTime": "6 min read"}, {"title": "What to Wear to Pilates", "excerpt": "A complete studio outfit guide: leggings, tops, bras and what to leave at home.", "href": "/blog/what-to-wear-to-pilates", "category": "Apparel", "readTime": "6 min read"}, {"title": "Best Pilates Equipment for Home Practice", "excerpt": "Everything you need between studio sessions, from a quality mat to resistance bands.", "href": "/blog/best-pilates-equipment-for-home-practice", "category": "Equipment", "readTime": "10 min read"}];

const CITY_FAQS = [{"q": "What are the best Pilates studios in Montreal?", "a": "Our 6 picks are Studio Joie (Downtown (Crescent Street)), Pilates Bunker (Saint-Urbain (Mile-Ex)), Maison Pause (Old Montreal), Maison C Pilates (Saint-Laurent (Little Italy)), Rise Pilates (Royalmount (Mount Royal)) and Studio Boa Pilates (Saint-Henri). Each listing above covers what the studio is best for, its signature class and a booking tip."}, {"q": "Which Montreal neighbourhoods are best for Pilates?", "a": "This guide covers Downtown & Golden Square Mile, Old Montreal, Mile-Ex, Little Italy & Saint-Laurent and Saint-Henri & Royalmount. Busy studios around Crescent Street with separate reformer and barre rooms, convenient for office workers and visitors staying downtown."}, {"q": "What should I know about booking Pilates classes in Montreal?", "a": "Book peak classes early. Use ClassPass to compare studios. Expect classes in French and English."}, {"q": "What should I bring to a Pilates class in Montreal?", "a": "Grip socks are required at most reformer studios. Our gear list for Montreal covers grip socks, a Pilates mat, a magic circle, resistance bands, a foam roller and a home reformer."}, {"q": "Are Pilates classes in Montreal taught in English?", "a": "Many Montreal studios teach in both French and English. If you prefer one language, check the class description or ask the studio before you book."}];

const gearName = (g: { name: string; note: string }) => g.note.match(/Our pick: ([^.]+(?:\.\d+[^.]*)?)\./)?.[1] ?? g.name;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Studios in Montreal (2026)",
      "description": "The best Pilates studios in Montreal: reformer studios downtown, in Old Montreal, on Saint-Laurent, Saint-Urbain, Saint-Henri and at Royalmount. Six picks.",
      "url": "https://pilatescollectiveclub.com/cities/montreal",
      "datePublished": "2026-10-29",
      "dateModified": "2026-10-29",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-studio-modern-row.png" },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/cities/montreal" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": CITY_FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
    productItemList("Pilates gear for classes in Montreal", GEAR.map((g) => ({ name: gearName(g), description: g.note, price: g.price, url: g.url }))),
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Cities", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "Montreal", "item": "https://pilatescollectiveclub.com/cities/montreal" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Montreal",
      "url": "https://pilatescollectiveclub.com/cities/montreal",
      "numberOfItems": STUDIOS.length,
      "itemListElement": STUDIOS.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "ExerciseGym",
          "name": s.name,
          "description": s.review.slice(0, 200),
          "address": { "@type": "PostalAddress", "streetAddress": s.address, "addressLocality": "Montreal", "addressCountry": "CA" },
        },
      })),
    },
  ],
};

export default function MontrealPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Canada</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br />
              <span style={{ color: "#8b4a31" }}>in Montreal</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Studios checked October 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              {"Montreal has embraced reformer Pilates with real style, from busy downtown studios with separate reformer and barre rooms to minimalist spaces in Old Montreal and design-led studios at Royalmount. This guide covers six studios across the city, what each does best and how to book your first class."}
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-studio-modern-row.png" alt="A row of reformers in a modern Pilates studio" fill priority className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Montreal, Canada</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Reformer studios from downtown and Old Montreal to Saint-Henri</p>
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
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Montreal</h2>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Montreal</h2>
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
              Grip socks are required at most reformer studios in Montreal. These are our recommended picks, all available on Amazon.{" "}
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
          searchPlaceholder="Ask: best reformer Pilates in Montreal…"
        />
      </main>
      <Footer />
    </>
  );
}
