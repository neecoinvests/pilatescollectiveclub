import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Studios in Denver, CO (2026) — Curated Guide",
  description: "The best Pilates studios in Denver — from Cherry Creek reformer boutiques to RiNo classical practices. Six verified picks for every level, 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates denver", "reformer pilates denver", "best pilates studios denver co", "pilates studio denver", "pilates classes denver", "cherry creek pilates", "rino pilates denver", "pilates colorado", "best reformer pilates denver", "pilates boulder co"],
  openGraph: {
    title: "Best Pilates Studios in Denver, CO (2026)",
    description: "Six curated Pilates studios in Denver — Cherry Creek reformer boutiques to RiNo classical method. Verified 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/denver",
    images: [{ url: "https://images.unsplash.com/photo-1546156929-a4c0ac411f47?w=1200&q=80", width: 1200, height: 630, alt: "Denver Colorado city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Denver (2026)",
    description: "Six curated Pilates studios in Denver — verified picks for every level.",
    images: ["https://images.unsplash.com/photo-1546156929-a4c0ac411f47?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/denver",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "Whole Body Studios",
    neighborhood: "Bonnie Brae / Washington Park",
    priceLevel: "$$",
    review: "Whole Body Studios at 747 South University Boulevard is arguably Denver's most beloved all-around boutique fitness studio, with a 4.8-star rating drawn from thousands of reviews. Set in the Bonnie Brae neighborhood near Washington Park, the studio is large, spotlessly clean, and known for its friendly and thoroughly trained instructors. They offer Pilates reformer and mat, barre, heated yoga, and HIIT — all at some of the most competitive pricing in the city for the quality level.",
    address: "747 S University Blvd, Denver, CO 80209",
    bestFor: "Pilates, barre, yoga, and HIIT under one roof; affordable quality",
    signatureClass: "Reformer Pilates",
    bookingTip: "Book reformer classes 2–3 days ahead; popular evening and Saturday morning slots disappear first.",
  },
  {
    number: "02",
    name: "Axis Pilates Colorado",
    neighborhood: "Congress Park / Alamo Placita",
    priceLevel: "$$$",
    review: "Axis Pilates at 1138 East 6th Avenue is a Nextdoor Neighborhood Favorite in both Congress Park and Alamo Placita, maintaining strong Google and Yelp ratings for years. The studio distinguishes itself with an unusually broad range of classical Pilates apparatus — including Tower, Wunda Chair, and reformer — and instructors who excel at adapting workouts for individual bodies, especially those with injuries or postural challenges. Clients consistently note the warm, community-oriented atmosphere.",
    address: "1138 E 6th Ave, Denver, CO 80218",
    bestFor: "Classical Pilates apparatus variety; injury-aware instruction",
    signatureClass: "Tower Pilates",
    bookingTip: "The studio offers an introductory series for new clients — the most effective way to get oriented to their apparatus before joining regular group classes.",
  },
  {
    number: "03",
    name: "Boost Pilates",
    neighborhood: "RiNo (River North Art District)",
    priceLevel: "$$$",
    review: "Boost Pilates RiNo carries a 4.9-star rating and has been praised as a beautiful, well-equipped studio with exceptional instructors described as encouraging and skilled. Located in Denver's vibrant River North Art District, the studio blends classical Pilates with cardio intervals for a more intense total-body session. The facility is clean, modern, and full of natural light — a setting that reflects the creative energy of the surrounding neighborhood.",
    address: "3463 Blake St, Denver, CO 80205",
    bestFor: "Contemporary reformer Pilates with cardio bursts; RiNo crowd",
    signatureClass: "Boost Reformer",
    bookingTip: "RiNo is trendy and parking can be limited; street parking on Blake and neighboring blocks is usually available but arrive a few minutes early.",
  },
  {
    number: "04",
    name: "Uncommon Practice Pilates",
    neighborhood: "Highland (LoHi)",
    priceLevel: "$$",
    review: "Nestled at the corner of West 38th and King Street in the heart of the Highland neighborhood, Uncommon Practice Pilates carries a 4.8-star rating and is known for its attentive instructors who tailor every class to the people in the room. The studio is praised for modifications provided for injuries and for creating a genuine sense of community among regulars. Equipment is kept clean and in excellent condition in a space that feels welcoming rather than intimidating.",
    address: "3451 W 38th Ave, Denver, CO 80211",
    bestFor: "Boutique studio in walkable Highland; personalized small-group instruction",
    signatureClass: "Reformer Group Flow",
    bookingTip: "The Highland neighborhood is walkable from LoHi restaurants and bars — pair a class with a neighborhood outing for the full experience.",
  },
  {
    number: "05",
    name: "Fierce45",
    neighborhood: "Lower Highlands (LoHi)",
    priceLevel: "$$$",
    review: "Fierce45 at 1208 West 38th Avenue is Colorado's premier high-intensity Pilates studio, delivering a 45-minute Megaformer-based workout that is simultaneously low-impact and fiercely challenging. The LoHi studio has a loyal following who appreciate the knowledgeable instructors and the sense of accomplishment after each class. Slow, controlled movements target muscles most gym workouts miss, with a culture that welcomes all fitness levels while still pushing every client to their actual edge.",
    address: "1208 W 38th Ave, Denver, CO 80211",
    bestFor: "High-intensity Pilates; 45-minute efficient format; Megaformer-style training",
    signatureClass: "Fierce45 Signature",
    bookingTip: "Classes are capped and fill quickly — book through the app at least 48 hours out. Late-cancel fees apply, so plan accordingly.",
  },
  {
    number: "06",
    name: "Pilates Evolution Cherry Creek",
    neighborhood: "Cherry Creek",
    priceLevel: "$$$",
    review: "Pilates Evolution Cherry Creek at 300 Josephine Street is the only studio in Colorado offering the SPX fitness program developed by Lagree in Los Angeles — a 40-minute total-body Pilates-based workout designed to lengthen and strengthen muscles simultaneously. Located above the Cherry Creek shopping district, it draws a well-heeled clientele seeking efficient, results-driven sessions. The studio is best suited for clients who already have some Pilates or fitness base.",
    address: "300 Josephine St, Ste 210, Denver, CO 80206",
    bestFor: "Lagree SPX method; Cherry Creek residents; efficient 40-minute sessions",
    signatureClass: "SPX 40",
    bookingTip: "The 40-minute format is deceptively intense — first-timers should take the intro session before attending a regular class.",
  },
];

const BOOKING_TIPS = [
  { heading: "Expect to pay $28–55 per class", body: "Denver's Pilates market is meaningfully cheaper than the coastal US cities. Drop-in rates run from around $28 at community studios to $55 at premium private practices. Monthly memberships and session packs bring per-class costs to $18–30 for regular practitioners — significantly more accessible than New York or Los Angeles." },
  { heading: "Altitude genuinely affects your first sessions", body: "Denver sits at 5,280 feet above sea level. Practitioners new to altitude commonly report that their first few sessions feel harder than expected — heart rate runs higher, breath is shorter. Allow 1–2 weeks of acclimatisation before assessing your performance relative to sea-level standards." },
  { heading: "Winter weather disrupts scheduling", body: "Colorado snowstorms can affect commute times unpredictably. Studios with late-cancellation policies are worth understanding before you commit. Building buffer time into morning appointments is good practice from October through March." },
  { heading: "The outdoor culture complements Pilates well", body: "Denver's ski, trail running, and cycling communities are among Pilates's most committed converts — the method's core and spinal work is directly applicable to mountain sports performance. Studios that understand this crossover tend to produce the most relevant programming for the city's most active practitioners." },
  { heading: "Grip socks and warm layers are both useful", body: "Studio temperatures in Denver can be cool, especially in early morning winter sessions. Grip socks are universally required; a light warm layer for the first few minutes of class is practical from November through April." },
];

const NEIGHBORHOODS = [
  { name: "Cherry Creek & Cherry Creek North", description: "Denver's most design-conscious neighbourhood is home to several of the city's best Pilates practices. Higher price points, excellent instruction quality, and a wellness-invested clientele that sets a high standard for local studios." },
  { name: "The Highlands", description: "One of Denver's most active and community-minded residential districts, with a growing concentration of high-quality reformer studios. Studios here tend toward the athletic and community-focused — well-suited to the neighbourhood's trail runners and outdoor enthusiasts." },
  { name: "Washington Park & South Denver", description: "Denver's most fitness-active residential zone outside Cherry Creek supports a strong independent studio culture. Classes here attract the regulars who have moved beyond studio-hopping and want a consistent practice close to home." },
  { name: "RiNo / River North & Downtown", description: "Denver's arts and technology corridor has developed an accessible, independent Pilates culture that welcomes practitioners across the ability spectrum. Pricing is more accessible than Cherry Creek, and the atmosphere is less formal without being less serious about the work." },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at every reformer studio in Denver. Full-toe grip socks are the standard.",
    price: "From $16",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat",
    note: "Essential for mat classes and home practice — especially useful during Colorado winter months.",
    price: "From $52",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Standard prop in many Denver classical studios. Own one for home reinforcement between sessions.",
    price: "From $24",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Resistance Bands Set",
    note: "Portable and effective for home practice — particularly useful on days when altitude or weather disrupts your studio schedule.",
    price: "From $22",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
];

const RELATED_CITIES = [
  { city: "Chicago", country: "United States", href: "/cities/chicago", studioCount: 6 },
  { city: "San Francisco", country: "United States", href: "/cities/san-francisco", studioCount: 6 },
  { city: "Austin", country: "United States", href: "/cities/austin", studioCount: 6 },
  { city: "Seattle", country: "United States", href: "/cities/seattle", studioCount: 6 },
];

const FURTHER_READING = [
  { title: "Pilates for Athletes", excerpt: "How elite sports professionals use Pilates to build functional strength, prevent injury, and extend their careers.", href: "/blog/pilates-for-athletes", category: "Performance", readTime: "7 min read", date: "June 2026", imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80" },
  { title: "Best Pilates Equipment for Home Practice", excerpt: "Everything you actually need to build a consistent home practice, from a quality mat to the best reformer alternatives.", href: "/blog/best-pilates-equipment-for-home-practice", category: "Equipment", readTime: "10 min read", date: "June 2026", imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Cities", "item": "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", "position": 3, "name": "Denver", "item": "https://pilatescollectiveclub.com/cities/denver" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Denver, CO",
      "description": "Curated guide to the top Pilates studios in Denver, Colorado, verified June 2026.",
      "url": "https://pilatescollectiveclub.com/cities/denver",
      "numberOfItems": 6,
      "itemListElement": STUDIOS.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "ExerciseGym",
          "name": s.name,
          "description": s.review.slice(0, 200),
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Denver",
            "addressRegion": "CO",
            "addressCountry": "US",
          },
        },
      })),
    },
    {
      "@type": "Article",
      "headline": "The Best Pilates Studios in Denver, CO (2026)",
      "description": "A curated guide to the six best Pilates studios in Denver, Colorado — verified June 2026.",
      "url": "https://pilatescollectiveclub.com/cities/denver",
      "dateModified": "2026-06-01",
      "author": { "@type": "Organization", "name": "Pilates Collective Club" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
    },
  ],
};

export default function DenverPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>City Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>United States</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br /><span style={{ color: "#8b4a31" }}>in Denver, Colorado</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated June 2026 · 9 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Denver's outdoor-first identity has always coexisted with a serious indoor movement culture, and its Pilates scene is a direct expression of that duality. The city's altitude, its relationship to skiing, trail running, and cycling, and the growing professional population that has arrived from both coasts have produced a market with genuine range — from classical Cherry Creek studios to community-oriented East Colfax practices. The method thrives here because it serves the active body so well. This guide covers the six studios worth your time, verified June 2026.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1546156929-a4c0ac411f47?w=1400&q=80" alt="Denver Colorado skyline with Rockies" fill className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Denver, Colorado</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Pilates at altitude — where the active life demands intelligent movement</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Studios */}
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Studios · Curated & Verified</p>
            <div className="space-y-8">{STUDIOS.map((s) => <StudioListing key={s.number} {...s} />)}</div>
          </div>
        </section>

        {/* Booking Tips */}
        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Denver</h2>
            <div className="space-y-6">
              {BOOKING_TIPS.map((t) => (
                <div key={t.heading} className="pcc-booking-tip flex gap-5 rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                  <div className="w-1.5 rounded-full shrink-0 mt-1" style={{ backgroundColor: "#8b4a31", minHeight: "20px" }} />
                  <div>
                    <h3 className="text-base font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{t.heading}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{t.body}</p>
                  </div>
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
              Denver studios require grip socks. Given Colorado winters and altitude, a mat and warm layers are also practical investments.{" "}
              <Link href="/affiliate-disclosure" style={{ color: "#8b4a31", textDecoration: "underline", fontFamily: "'Montserrat', sans-serif", fontSize: "inherit" }}>Affiliate disclosure.</Link>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {GEAR.map((g) => (
                <a key={g.name} href={g.url} target="_blank" rel="noopener noreferrer sponsored" style={{ textDecoration: "none" }}>
                  <div className="rounded-xl p-5 h-full flex flex-col justify-between" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.35)" }}>
                    <div>
                      <h3 className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{g.name}</h3>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{g.note}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{g.price}</span>
                      <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#c5a882", fontFamily: "'Montserrat', sans-serif" }}>Shop →</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Neighbourhoods */}
        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Denver</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Denver's studio quality is distributed across the city rather than concentrated in a single area. Here's where to look.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {NEIGHBORHOODS.map((n) => (
                <div key={n.name} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.35)" }}>
                  <h3 className="text-base font-semibold mb-2" style={{ color: "#8b4a31", fontFamily: "'Playfair Display', serif" }}>{n.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{n.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Cities */}
        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Related city guides</h2>
            <p className="text-sm mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Explore our guides to other cities with thriving Pilates scenes.</p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">{RELATED_CITIES.map((c) => <CityCard key={c.city} {...c} />)}</div>
          </div>
        </section>

        {/* Further Reading */}
        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">{FURTHER_READING.map((a) => <ArticleCard key={a.href} {...a} />)}</div>
          </div>
        </section>

        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best Pilates for athletes in Denver…" />
      </main>
      <Footer />
    </>
  );
}
