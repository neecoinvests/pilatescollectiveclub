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
  title: "Best Pilates Studios in Honolulu (2026)",
  description: "The best Pilates studios in Honolulu and Oahu: Lagree in Waikiki, reformer in Ward Village and Diamond Head, plus Kailua and the North Shore. Six picks.",
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  keywords: ["pilates honolulu", "reformer pilates honolulu", "best pilates studios honolulu", "pilates waikiki", "lagree honolulu", "pilates kailua", "pilates oahu", "pilates north shore oahu", "pilates diamond head"],
  openGraph: {
    title: "Best Pilates Studios in Honolulu (2026)",
    description: "Six curated Pilates studios in Honolulu and Oahu: Waikiki, Ward Village, Diamond Head, Kailua and the North Shore. Checked October 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/honolulu",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-reformer-morning-light.png", width: 1200, height: 630, alt: "Honolulu Pilates guide, Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Honolulu (2026)",
    description: "Six curated Pilates studios in Honolulu and Oahu: Waikiki, Ward Village, Diamond Head, Kailua and the North Shore. Checked October 2026.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-reformer-morning-light.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/honolulu" },
};

const STUDIOS = [
  {
    number: "01",
    name: "Lagree Oahu",
    neighborhood: "Waikiki",
    priceLevel: "$$$",
    websiteUrl: "https://lagreeoahufitness.com",
    review: "Lagree Oahu opened as the first fitness studio at Waikiki's Royal Hawaiian Center, on Level 3 of Building A. It teaches the Lagree method on the Megaformer: slow, controlled movement under constant tension. Its central Waikiki location makes it the easiest high-quality option for visitors.",
    caveat: "Lagree is not classical Pilates; it is a high-intensity, slow-tempo workout on a different machine.",
    address: "Royal Hawaiian Center, Building A, Level 3, 2201 Kalakaua Avenue, Honolulu, HI 96815",
    bestFor: "Lagree workouts in the heart of Waikiki",
    signatureClass: "Lagree on the Megaformer",
    bookingTip: "Visitors should book a day or two ahead; morning classes are popular.",
  },
  {
    number: "02",
    name: "Pilates O Ka La",
    neighborhood: "Diamond Head",
    priceLevel: "$$$",
    review: "Pilates O Ka La is a Diamond Head studio on Monsarrat Avenue offering reformer, Cadillac, chair and mat work. Group classes are capped at six people, so instruction stays personal, and the full range of apparatus suits anyone who wants more than reformer-only classes.",
    caveat: "small classes mean limited spaces, especially at weekends.",
    address: "3106 Monsarrat Avenue, Honolulu, HI 96815",
    bestFor: "Small classes on the full apparatus",
    signatureClass: "Reformer & Cadillac",
    bookingTip: "Pair a class with a walk around Kapiolani Park, a few minutes away.",
  },
  {
    number: "03",
    name: "Club Pilates Honolulu",
    neighborhood: "Ward Village · Kakaako",
    priceLevel: "$$",
    websiteUrl: "https://www.clubpilates.com/honolulu",
    review: "Club Pilates Honolulu was the brand's first Hawaii studio, in the 'A'ali'i Shops at Ward Village and run by franchisees David and Michelle Lo. It teaches reformer-based classes for every age and fitness level, with a structured class system that makes it easy to progress.",
    caveat: "a franchise studio: consistent and well-equipped, but less intimate than an owner-run boutique.",
    address: "987 Queen Street, Suite 102, Honolulu, HI 96814",
    bestFor: "Structured reformer classes for every level",
    signatureClass: "Reformer Flow",
    bookingTip: "Start with an intro class so an instructor can set you up on the reformer.",
  },
  {
    number: "04",
    name: "808 Barre + Pilates",
    neighborhood: "Kailua",
    priceLevel: "$$$",
    review: "808 Barre + Pilates is a small-group studio on Ku'ulei Road in Kailua offering barre and reformer classes. Reformer classes are capped at four people and barre and mat at eight, so you get real attention from the instructor.",
    caveat: "the reformers are white, so skip sunscreen, lotion and self-tanner before class.",
    address: "270 Ku'ulei Road #205, Kailua, HI 96734",
    bestFor: "Tiny reformer classes on the Windward side",
    signatureClass: "808 Reformer",
    bookingTip: "With only four reformers per class, book as early as you can.",
  },
  {
    number: "05",
    name: "Pilates Training Center Hawaii",
    neighborhood: "Kailua",
    priceLevel: "$$$",
    review: "Pilates Training Center Hawaii in Kailua is listed by STOTT PILATES as the only STOTT PILATES Licensed Training Center in Hawaii. That makes it the place where many of the island's instructors train, and a strong choice for technically precise sessions.",
    caveat: "listings show more than one Kailua address, so confirm the current location before you go.",
    address: "Kailua, HI 96734",
    bestFor: "STOTT PILATES teaching and instructor training",
    signatureClass: "STOTT PILATES",
    bookingTip: "Ask about privates if you want technique-focused coaching.",
  },
  {
    number: "06",
    name: "Sunset Beach Pilates",
    neighborhood: "North Shore",
    priceLevel: "$$$",
    websiteUrl: "https://sunsetbeachpilates.com",
    review: "Sunset Beach Pilates has taught on the North Shore since 2014, offering mat and reformer Pilates with a focus on core strength and posture. It also streams its classes on demand, so you can keep practising once you leave the island.",
    caveat: "it is on the North Shore, about an hour's drive from Honolulu.",
    address: "Sunset Beach, Haleiwa, HI 96712",
    bestFor: "Reformer and mat Pilates on the North Shore",
    signatureClass: "Reformer & Mat",
    bookingTip: "Combine a class with a North Shore day trip.",
  },
];

const BOOKING_TIPS = [{"heading": "Book ahead if you are visiting", "body": "Small studios on Oahu have limited spaces, and Waikiki classes are popular with visitors. Book a day or two ahead, especially for mornings."}, {"heading": "Skip sunscreen before class", "body": "Lotion and sunscreen make reformer upholstery slippery and can stain light-coloured machines. Some studios, such as 808 Barre + Pilates, ask you to avoid them before class."}, {"heading": "Plan for the drive", "body": "Kailua is about 30 minutes from Honolulu and the North Shore about an hour. Choose a studio close to where you are staying."}, {"heading": "Know Lagree from Pilates", "body": "Lagree on the Megaformer is a slow, high-tension strength workout. It is great, but different from reformer Pilates, so pick the style you want."}, {"heading": "Bring grip socks and water", "body": "Grip socks are required at most reformer studios, and the heat means you will want water, especially for Lagree."}];

const NEIGHBORHOODS = [{"name": "Waikiki", "description": "The easiest base for visitors, with a Lagree studio inside the Royal Hawaiian Center steps from the beach."}, {"name": "Kakaako & Ward Village", "description": "Modern studios in Honolulu's newest neighbourhood, including the island's first Club Pilates, handy for downtown workers."}, {"name": "Diamond Head & Kapahulu", "description": "Small, locally owned studios with the full Pilates apparatus, close to Kapiolani Park."}, {"name": "Kailua & the North Shore", "description": "Windward Kailua has tiny reformer classes and a STOTT PILATES training centre, while the North Shore has a long-running studio near Sunset Beach."}];

const GEAR = [{"name": "Pilates Grip Socks", "note": "Our pick: toesox Low Rise Full-Toe Grip Socks (2-Pack). Required at most reformer studios; full-toe grip socks are the standard.", "price": "$30.00", "url": "https://www.amazon.com/dp/B07QHNDHW3?tag=pilatescollective-20"}, {"name": "Pilates Mat", "note": "Our pick: Manduka PRO Yoga & Pilates Mat (6mm). A dense 6mm mat for mat classes and home practice between studio sessions.", "price": "$144.00", "url": "https://www.amazon.com/dp/B0000DZFXZ?tag=pilatescollective-20"}, {"name": "Magic Circle", "note": "Our pick: Balanced Body Ultra-Fit Circle (15-inch). Many studios use the magic circle; worth owning for home reinforcement work.", "price": "$35.00", "url": "https://www.amazon.com/dp/B002YQW3IU?tag=pilatescollective-20"}, {"name": "Resistance Bands", "note": "Our pick: Arena Strength Fabric Glute Bands (3-Pack). Fabric loops that carry reformer leg and glute work into home sessions.", "price": "$29.00", "url": "https://www.amazon.com/dp/B07VYK14JC?tag=pilatescollective-20"}, {"name": "Foam Roller", "note": "Our pick: OPTP PRO-Roller Foam Roller (36-inch). For spinal mobility and release work before and after class.", "price": "$62.99", "url": "https://www.amazon.com/dp/B002C9EX14?tag=pilatescollective-20"}, {"name": "Home Pilates Reformer", "note": "Our pick: PAETA Wooden Foldable Reformer. A folding home reformer to keep your practice going between studio classes.", "price": "$719.99", "url": "https://www.amazon.com/dp/B0D7M7JNFV?tag=pilatescollective-20"}];

const RELATED_CITIES = [{"city": "Los Angeles", "country": "United States", "href": "/cities/los-angeles", "studioCount": 6}, {"city": "San Diego", "country": "United States", "href": "/cities/san-diego", "studioCount": 6}, {"city": "San Francisco", "country": "United States", "href": "/cities/san-francisco", "studioCount": 6}, {"city": "Sydney", "country": "Australia", "href": "/cities/sydney", "studioCount": 6}];

const FURTHER_READING = [{"title": "Beginner's Guide to Reformer Pilates", "excerpt": "What to expect in your first reformer class, how to choose a studio and how to progress.", "href": "/blog/beginners-guide-to-reformer-pilates", "category": "Beginner Guide", "readTime": "8 min read"}, {"title": "Best Megaformer Machine (2026)", "excerpt": "The machines behind Lagree classes, and what a home Megaformer setup really costs.", "href": "/blog/best-megaformer-machine", "category": "Lagree", "readTime": "12 min read"}, {"title": "Best Pilates Grip Socks (2026)", "excerpt": "Five verified grip socks for reformer classes, from budget packs to studio favourites.", "href": "/blog/best-pilates-grip-socks", "category": "Accessories", "readTime": "6 min read"}, {"title": "What to Wear to Pilates", "excerpt": "A complete studio outfit guide: leggings, tops, bras and what to leave at home.", "href": "/blog/what-to-wear-to-pilates", "category": "Apparel", "readTime": "6 min read"}];

const CITY_FAQS = [{"q": "What are the best Pilates studios in Honolulu?", "a": "Our 6 picks are Lagree Oahu (Waikiki), Pilates O Ka La (Diamond Head), Club Pilates Honolulu (Ward Village · Kakaako), 808 Barre + Pilates (Kailua), Pilates Training Center Hawaii (Kailua) and Sunset Beach Pilates (North Shore). Each listing above covers what the studio is best for, its signature class and a booking tip."}, {"q": "Which Honolulu neighbourhoods are best for Pilates?", "a": "This guide covers Waikiki, Kakaako & Ward Village, Diamond Head & Kapahulu and Kailua & the North Shore. The easiest base for visitors, with a Lagree studio inside the Royal Hawaiian Center steps from the beach."}, {"q": "What should I know about booking Pilates classes in Honolulu?", "a": "Book ahead if you are visiting. Skip sunscreen before class. Plan for the drive."}, {"q": "What should I bring to a Pilates class in Honolulu?", "a": "Grip socks are required at most reformer studios. Our gear list for Honolulu covers grip socks, a Pilates mat, a magic circle, resistance bands, a foam roller and a home reformer."}, {"q": "Can visitors take Pilates classes in Waikiki?", "a": "Yes. Lagree Oahu at the Royal Hawaiian Center is in the middle of Waikiki, and Pilates O Ka La near Diamond Head is a short ride away. Book a day or two ahead and bring grip socks."}];

const gearName = (g: { name: string; note: string }) => g.note.match(/Our pick: ([^.]+(?:\.\d+[^.]*)?)\./)?.[1] ?? g.name;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Pilates Studios in Honolulu (2026)",
      "description": "The best Pilates studios in Honolulu and Oahu: Lagree in Waikiki, reformer in Ward Village and Diamond Head, plus Kailua and the North Shore. Six picks.",
      "url": "https://pilatescollectiveclub.com/cities/honolulu",
      "datePublished": "2026-10-29",
      "dateModified": "2026-10-29",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-reformer-morning-light.png" },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/cities/honolulu" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": CITY_FAQS.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
    },
    productItemList("Pilates gear for classes in Honolulu", GEAR.map((g) => ({ name: gearName(g), description: g.note, price: g.price, url: g.url }))),
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Cities", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "Honolulu", "item": "https://pilatescollectiveclub.com/cities/honolulu" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Honolulu",
      "url": "https://pilatescollectiveclub.com/cities/honolulu",
      "numberOfItems": STUDIOS.length,
      "itemListElement": STUDIOS.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "ExerciseGym",
          "name": s.name,
          "description": s.review.slice(0, 200),
          "address": { "@type": "PostalAddress", "streetAddress": s.address, "addressLocality": "Honolulu", "addressCountry": "US" },
        },
      })),
    },
  ],
};

export default function HonoluluPage() {
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
              <span style={{ color: "#8b4a31" }}>in Honolulu</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Studios checked October 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              {"Honolulu's Pilates scene ranges from a Lagree studio inside Waikiki's Royal Hawaiian Center to small classical studios near Diamond Head, with excellent options across the island in Kailua and on the North Shore. This guide covers six studios on Oahu, what each does best and how to book, whether you live here or are visiting."}
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-reformer-morning-light.png" alt="Reformer in soft morning light" fill priority className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Honolulu, United States</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Waikiki, Ward Village, Diamond Head, Kailua and the North Shore</p>
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
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Honolulu</h2>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Honolulu</h2>
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
              Grip socks are required at most reformer studios in Honolulu. These are our recommended picks, all available on Amazon.{" "}
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
          searchPlaceholder="Ask: best reformer Pilates in Honolulu…"
        />
      </main>
      <Footer />
    </>
  );
}
