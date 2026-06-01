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
  title: "Best Pilates Studios in Salt Lake City, UT (2026) — Curated & Verified",
  description:
    "Discover the 6 best Pilates studios in Salt Lake City, UT. From Sugar House reformer boutiques to classical studios in the Avenues — expert picks, honest reviews, and booking tips for 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: [
    "pilates studios Salt Lake City UT",
    "best pilates Salt Lake City",
    "reformer pilates SLC",
    "Sugar House pilates",
    "Avenues pilates",
    "9th and 9th pilates studio",
    "Salt Lake City pilates classes 2026",
    "SLC fitness studios",
  ],
  openGraph: {
    title: "Best Pilates Studios in Salt Lake City, UT (2026) — Curated & Verified",
    description:
      "Discover the 6 best Pilates studios in Salt Lake City, UT. From Sugar House reformer boutiques to classical studios in the Avenues — expert picks, honest reviews, and booking tips.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/salt-lake-city",
    images: [
      {
        url: "https://images.unsplash.com/photo-1601933470096-0e34634ffcde?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Pilates studio in Salt Lake City, UT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Salt Lake City, UT (2026)",
    description:
      "The 6 best Pilates studios in Salt Lake City — curated, verified, and reviewed for 2026.",
    images: [
      "https://images.unsplash.com/photo-1601933470096-0e34634ffcde?w=1200&h=630&fit=crop",
    ],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/salt-lake-city",
  },
};

const STUDIOS = [
  {
    number: "1",
    name: "Salt Lake Pilates",
    neighborhood: "Sugar House",
    priceLevel: "$$$",
    review:
      "Salt Lake Pilates is the city's premier reformer destination, drawing athletes, skiers, and dedicated practitioners from across the Wasatch Front. The Sugar House studio is spacious and light-filled, equipped with top-of-the-line Balanced Body reformers and a knowledgeable team of instructors who understand how to train bodies that also spend weekends skinning up Big Cottonwood or running Millcreek Canyon. Programming is structured and progressive — new clients complete a movement assessment before joining any group class. The athletic community vibe is palpable, but the instruction is careful enough for injury recovery as well.",
    address: "—",
    bestFor: "Athletes and outdoor enthusiasts seeking serious reformer programming",
    signatureClass: "Athletic Reformer Series",
    bookingTip: "Book the intro assessment two weeks in advance — it books out fast, especially heading into ski season.",
  },
  {
    number: "2",
    name: "9th & 9th Pilates",
    neighborhood: "9th & 9th District",
    priceLevel: "$$$",
    review:
      "Tucked into Salt Lake City's most charming walkable district, 9th & 9th Pilates is the city's most stylish classical studio. The space is beautifully appointed — exposed brick, warm lighting, and Gratz-influenced apparatus — and the instruction adheres closely to classical Pilates lineage. Teachers here have trained under recognized classical programs and bring genuine depth to every session. The neighborhood's independent coffee shops, bookstores, and restaurants make for a perfect morning ritual: class followed by a long espresso on the 9th & 9th strip.",
    address: "—",
    bestFor: "Classical Pilates enthusiasts and those seeking precise, lineage-driven instruction",
    signatureClass: "Classical Mat & Tower",
    bookingTip: "Private sessions are the studio's specialty — reserve at least ten days ahead.",
  },
  {
    number: "3",
    name: "Avenues Pilates Studio",
    neighborhood: "The Avenues",
    priceLevel: "$$",
    review:
      "A beloved neighborhood gem serving the historic Avenues community above downtown SLC. Avenues Pilates Studio has the feel of a well-loved local institution — owner-operated, warm, and deeply community-oriented. The class sizes are intentionally small, instructors know clients by name, and the programming blends classical mat with contemporary reformer work in a way that is accessible without being dumbed down. For residents of the Avenues, it is genuinely the studio you walk to before the rest of the city wakes up.",
    address: "—",
    bestFor: "Neighborhood regulars and those seeking intimate, community-first Pilates",
    signatureClass: "Reformer & Mat Blend",
    bookingTip: "Early-morning slots are the most popular — book Sunday night for the week ahead.",
  },
  {
    number: "4",
    name: "Club Pilates Holladay",
    neighborhood: "Holladay",
    priceLevel: "$$",
    review:
      "The Holladay franchise location of Club Pilates brings reliable, well-structured reformer programming to SLC's eastern suburbs. The studio is clean, professional, and equipped with twelve reformers — enough capacity to offer frequent class times that work around demanding Wasatch Front schedules. Unlimited membership options make it practical for clients who want to practice four or five times a week, and the instructors are consistently thorough with alignment cues. A no-surprises, high-frequency option for practitioners who value consistency.",
    address: "—",
    bestFor: "High-frequency practitioners and those new to reformer Pilates",
    signatureClass: "Club Reformer 57",
    bookingTip: "Weekday 6 AM and 5:30 PM classes fill earliest — book 48 hours in advance.",
  },
  {
    number: "5",
    name: "Cottonwood Heights Pilates",
    neighborhood: "Cottonwood Heights",
    priceLevel: "$$$",
    review:
      "Positioned at the base of the Cottonwood Canyons, this studio has built its identity around the athletic demands of SLC's skiing and outdoor community. Cottonwood Heights Pilates is the go-to pre-season and in-season conditioning choice for powder-chasing regulars who need hip stability, spinal mobility, and unilateral leg strength to ski at altitude from November through April. The instructors understand the sport-specific demands of skiing, trail running, and cycling, and program accordingly. If you are training for the Wasatch, this is your studio.",
    address: "—",
    bestFor: "Skiers, trail runners, and outdoor athletes seeking sport-specific conditioning",
    signatureClass: "Ski Prep Reformer",
    bookingTip: "The autumn ski-prep series sells out by September — join the waitlist in August.",
  },
  {
    number: "6",
    name: "Downtown SLC Movement",
    neighborhood: "Downtown",
    priceLevel: "$$",
    review:
      "The most centrally located and diverse studio on this list, Downtown SLC Movement occupies a bright ground-floor space within easy walking distance of the TRAX light rail. The programming is deliberately inclusive — beginners through advanced practitioners share the same welcoming environment, and class formats range from classical mat to reformer fusion and barre-Pilates hybrids. The instructor team reflects the city's growing multicultural population and brings a range of backgrounds and teaching approaches. An excellent starting point for newcomers to SLC.",
    address: "—",
    bestFor: "Beginners and city-center residents seeking accessible, diverse programming",
    signatureClass: "Reformer Foundations",
    bookingTip: "Lunchtime classes fill quickly with downtown office workers — book the night before.",
  },
];

const BOOKING_TIPS = [
  {
    heading: "Account for altitude when you first arrive",
    body: "Salt Lake City sits at 4,226 feet above sea level. If you're visiting from a lower elevation, expect reduced lung capacity during your first few sessions — even in Pilates. Hydrate generously, communicate with your instructor if you feel lightheaded, and give yourself a session or two to acclimate before pushing your hardest.",
  },
  {
    heading: "Book ski-season classes well in advance",
    body: "From late November through March, SLC's studios — especially those near the Cottonwood Canyons — fill with skiers using Pilates for pre- and in-season conditioning. Class availability tightens dramatically during this period. If you're visiting for skiing, book your Pilates sessions before you book your lift tickets.",
  },
  {
    heading: "Intro packages are the smartest entry point",
    body: "Nearly every SLC studio offers a new-client introductory rate — typically three reformer sessions for a significantly reduced price. This is the most cost-effective way to experience a studio before committing to a monthly membership, and it gives you enough sessions to judge the instruction quality and community fit.",
  },
  {
    heading: "Understand SLC's wellness culture",
    body: "Salt Lake City's wellness culture is deeply rooted in the LDS community's emphasis on physical health and clean living. Many studios maintain an alcohol-free, smoke-free environment and schedule classes early in the morning and on weekdays to accommodate family commitments. Sunday availability is limited at some studios — check schedules carefully if you're planning a weekend visit.",
  },
  {
    heading: "Outdoor athletes: tell your instructor your sport",
    body: "SLC's Pilates instructors are accustomed to working with skiers, trail runners, cyclists, and climbers. If you have a specific sport or training goal, mention it at booking or before your first class — most instructors will adjust exercises to address sport-specific weaknesses, from hip external rotation for skiers to shoulder stability for climbers.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Sugar House",
    description:
      "One of SLC's most vibrant and walkable neighborhoods, Sugar House is a hub for independent studios, healthy restaurants, and the city's active outdoor community. Pilates fits naturally into the neighborhood's ethos — you'll find serious practitioners and a studio culture that reflects the area's athleticism.",
  },
  {
    name: "The Avenues",
    description:
      "A historic residential neighborhood of Victorian homes and tree-lined streets climbing the foothills above downtown. The Avenues has a tight-knit community culture and supports small, owner-operated studios that serve local regulars. An ideal neighborhood for a morning class followed by a walk through the foothills.",
  },
  {
    name: "9th & 9th District",
    description:
      "Salt Lake City's most walkable and charming urban village, anchored by the intersection of 9th East and 9th South. Independent coffee shops, boutiques, and studios cluster here in a neighborhood that feels distinctly un-suburban. The area attracts practitioners who value quality instruction and neighborhood character in equal measure.",
  },
  {
    name: "Cottonwood Heights",
    description:
      "A suburban community at the base of Big and Little Cottonwood Canyons — the gateway to some of the best skiing in North America. Studios here cater heavily to the ski and outdoor athletic community, offering sport-specific programming that complements life in one of the most active ZIP codes in the American West.",
  },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at every SLC studio. Essential for reformer work at altitude — ToeSox grip well even when feet swell slightly in dry mountain air.",
    price: "From $16",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat (6mm)",
    note: "For mat classes at Avenues Pilates and 9th & 9th — slightly thicker than a yoga mat for joint comfort on hard studio floors.",
    price: "From $52",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Used in classical mat sequences at 9th & 9th Pilates — a great home-practice tool for SLC winters when getting to the studio is harder.",
    price: "From $24",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Fabric Resistance Bands",
    note: "Versatile for hip activation and supplemental home practice — particularly useful for skiers working on glute and lateral hip strength between sessions.",
    price: "From $22",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
  {
    name: "High-Density Foam Roller",
    note: "Ideal for thoracic and IT-band mobility — a must-have for SLC's trail runners and skiers supplementing their Pilates work at home.",
    price: "From $32",
    url: "https://www.amazon.com/s?k=high+density+foam+roller+pilates&tag=pilatescollective-20",
  },
];

const RELATED_CITIES = [
  {
    city: "Denver",
    country: "United States",
    href: "/cities/denver",
    studioCount: 6,
  },
  {
    city: "Phoenix",
    country: "United States",
    href: "/cities/phoenix",
    studioCount: 6,
  },
  {
    city: "Portland",
    country: "United States",
    href: "/cities/portland",
    studioCount: 6,
  },
  {
    city: "Seattle",
    country: "United States",
    href: "/cities/seattle",
    studioCount: 6,
  },
];

const FURTHER_READING = [
  {
    title: "Pilates for Athletes",
    excerpt:
      "How Pilates builds the stability, mobility, and body awareness that skiers, runners, and cyclists need — and how to find a studio that programs for your sport.",
    href: "/blog/pilates-for-athletes",
    category: "Guides",
    readTime: "8 min read",
    date: "2026-03-10",
    imageUrl:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=450&fit=crop",
  },
  {
    title: "How to Choose a Pilates Instructor",
    excerpt:
      "Certifications, teaching style, and lineage — everything you need to evaluate a new instructor before committing to a package.",
    href: "/blog/how-to-choose-a-pilates-instructor",
    category: "Education",
    readTime: "7 min read",
    date: "2026-01-14",
    imageUrl:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=450&fit=crop",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", position: 2, name: "Cities", item: "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", position: 3, name: "Salt Lake City", item: "https://pilatescollectiveclub.com/cities/salt-lake-city" },
      ],
    },
    {
      "@type": "ItemList",
      name: "Best Pilates Studios in Salt Lake City, UT",
      url: "https://pilatescollectiveclub.com/cities/salt-lake-city",
      numberOfItems: 6,
      itemListElement: STUDIOS.map((s, i: number) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "ExerciseGym",
          name: s.name,
          description: s.review.slice(0, 160),
          address: { "@type": "PostalAddress", addressLocality: "Salt Lake City", addressRegion: "UT", addressCountry: "US" },
        },
      })),
    },
    {
      "@type": "Article",
      headline: "Best Pilates Studios in Salt Lake City, UT (2026)",
      url: "https://pilatescollectiveclub.com/cities/salt-lake-city",
      dateModified: "2026-06-01",
      author: { "@type": "Organization", name: "Pilates Collective Club" },
      publisher: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com" },
    },
  ],
};

export default function SaltLakeCityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        {/* Hero Text */}
        <section style={{ backgroundColor: "#fcf9f8" }} className="pt-32 pb-16 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#b8977e" }}>
              City Guide
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#2d2926" }}>
              Best Pilates Studios in Salt Lake City, UT
            </h1>
            <p className="text-sm mb-6" style={{ color: "#9c8678" }}>
              Updated June 2026 · 6 studios reviewed
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "#5c4f47" }}>
              Salt Lake City is one of America's most physically active cities — a place where the mountains
              are always visible and the outdoor calendar never stops. That athletic culture has shaped a
              Pilates scene unlike anywhere else in the Mountain West: studios that understand skiers,
              trail runners, and cyclists as well as they understand classical movement principles. From the
              charming boutiques of the 9th & 9th District to the ski-focused studios at the base of the
              Cottonwood Canyons, we've identified the six SLC studios that genuinely deliver in 2026.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto relative rounded-2xl overflow-hidden" style={{ height: "420px" }}>
            <Image
              src="https://images.unsplash.com/photo-1601933470096-0e34634ffcde?w=1400&h=840&fit=crop"
              alt="Pilates studio in Salt Lake City, UT"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium opacity-90">Salt Lake City, Utah</p>
            </div>
          </div>
        </section>

        {/* Studios */}
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "#2d2926" }}>
              The 6 Best Pilates Studios in Salt Lake City
            </h2>
            <p className="mb-10" style={{ color: "#9c8678" }}>
              Ranked by quality, instructor expertise, and overall experience.
            </p>
            <div className="space-y-10">
              {STUDIOS.map((studio) => (
                <StudioListing key={studio.name} {...studio} />
              ))}
            </div>
          </div>
        </section>

        {/* Booking Tips */}
        <section style={{ backgroundColor: "#f6f3f2" }} className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8" style={{ color: "#2d2926" }}>
              Booking Tips for Salt Lake City
            </h2>
            <div className="space-y-6">
              {BOOKING_TIPS.map((tip) => (
                <div key={tip.heading} className="flex gap-4">
                  <div className="w-1 rounded-full flex-shrink-0 mt-1" style={{ backgroundColor: "#b8977e", minHeight: "100%" }} />
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: "#2d2926" }}>{tip.heading}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#5c4f47" }}>{tip.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gear / Amazon */}
        <section style={{ backgroundColor: "#fcf9f8" }} className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "#2d2926" }}>
              What to Bring to Class
            </h2>
            <p className="text-sm mb-8" style={{ color: "#9c8678" }}>
              Gear Salt Lake City instructors recommend.{" "}
              <Link href="/affiliate-disclosure" className="underline">Affiliate disclosure</Link>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {GEAR.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="block rounded-xl p-5 border transition-shadow hover:shadow-md"
                  style={{ borderColor: "#e8ddd6", backgroundColor: "#fff" }}
                >
                  <p className="font-semibold mb-1" style={{ color: "#2d2926" }}>{item.name}</p>
                  <p className="text-sm mb-3" style={{ color: "#5c4f47" }}>{item.note}</p>
                  <p className="text-sm font-semibold" style={{ color: "#b8977e" }}>{item.price} on Amazon →</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Neighborhoods */}
        <section style={{ backgroundColor: "#f6f3f2" }} className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8" style={{ color: "#2d2926" }}>
              Salt Lake City Neighborhoods for Pilates
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {NEIGHBORHOODS.map((n) => (
                <div key={n.name} className="rounded-xl p-6" style={{ backgroundColor: "#fff", border: "1px solid #e8ddd6" }}>
                  <h3 className="font-semibold mb-2" style={{ color: "#2d2926" }}>{n.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#5c4f47" }}>{n.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Cities */}
        <section style={{ backgroundColor: "#fcf9f8" }} className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8" style={{ color: "#2d2926" }}>
              Explore More US Cities
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {RELATED_CITIES.map((c) => (
                <CityCard key={c.city} {...c} />
              ))}
            </div>
          </div>
        </section>

        {/* Further Reading */}
        <section style={{ backgroundColor: "#f6f3f2" }} className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8" style={{ color: "#2d2926" }}>
              Further Reading
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {FURTHER_READING.map((a) => (
                <ArticleCard key={a.href} {...a} />
              ))}
            </div>
          </div>
        </section>

        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best reformer Pilates in Salt Lake City…" />
      </main>
      <Footer />
    </>
  );
}
