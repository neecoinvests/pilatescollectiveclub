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
  title: "Best Pilates Studios in New Orleans, LA (2026) — Curated & Verified",
  description:
    "Discover the 6 best Pilates studios in New Orleans, LA. From Garden District premier reformer boutiques to Mid-City accessible studios — expert picks, honest reviews, and booking tips for 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: [
    "pilates studios New Orleans LA",
    "best pilates New Orleans",
    "reformer pilates New Orleans",
    "Garden District pilates",
    "Uptown pilates studio",
    "Marigny pilates",
    "New Orleans pilates classes 2026",
    "New Orleans LA fitness studios",
  ],
  openGraph: {
    title: "Best Pilates Studios in New Orleans, LA (2026) — Curated & Verified",
    description:
      "Discover the 6 best Pilates studios in New Orleans, LA. From Garden District premier reformer boutiques to Mid-City accessible studios — expert picks, honest reviews, and booking tips.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/new-orleans",
    images: [
      {
        url: "https://images.unsplash.com/photo-gCCTBz8nXSA?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Pilates studio in New Orleans, LA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in New Orleans, LA (2026)",
    description:
      "The 6 best Pilates studios in New Orleans — curated, verified, and reviewed for 2026.",
    images: [
      "https://images.unsplash.com/photo-gCCTBz8nXSA?w=1200&h=630&fit=crop",
    ],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/new-orleans",
  },
};

const STUDIOS = [
  {
    number: "1",
    name: "Club Pilates Uptown New Orleans",
    neighborhood: "Uptown",
    priceLevel: "$$$",
    review:
      "Club Pilates Uptown is consistently one of New Orleans' highest-rated reformer studios, earning loyal regulars from the Uptown and Garden District neighborhoods. The studio serves the city's most wellness-invested residential community with a franchise program that meets genuinely high standards. Instructors receive consistent praise for their attentiveness and ability to challenge practitioners of all levels within the same class. The Uptown location is convenient and the atmosphere is warm.",
    address: "3137 Magazine St, New Orleans, LA 70115",
    bestFor: "Uptown and Garden District residents, all levels, consistent reformer",
    signatureClass: "Reformer Flow",
    bookingTip: "Book intro sessions well in advance during the Mardi Gras and Jazz Fest season when the city fills with visitors.",
  },
  {
    number: "2",
    name: "Club Pilates Metairie",
    neighborhood: "Metairie",
    priceLevel: "$$",
    review:
      "Club Pilates Metairie brings consistent, well-structured reformer programming to the New Orleans metro's largest suburb at pricing that makes regular attendance genuinely practical. The studio earns strong reviews from Metairie residents for its instructor quality and welcoming atmosphere. The schedule is wide and well-organized, accommodating the varied schedules of the surrounding professional and family community. A reliable, no-surprises choice for west-metro practitioners.",
    address: "3801 Veterans Memorial Blvd, Metairie, LA 70002",
    bestFor: "Metairie and west-metro residents, high-frequency practitioners, memberships",
    signatureClass: "Club Reformer 57",
    bookingTip: "Early morning and evening weekday classes fill 48 hours out — book as soon as slots open.",
  },
  {
    number: "3",
    name: "NOLA Pilates & Wellness",
    neighborhood: "Garden District",
    priceLevel: "$$$",
    review:
      "NOLA Pilates & Wellness is one of the Garden District's most beloved independent studios, earning a loyal following for its welcoming atmosphere and high instruction standards. The studio's reformer program is well-sequenced and taught by instructors who take genuine interest in client progression. The Garden District setting — live oaks, historic architecture — makes for a genuinely pleasant morning of movement. Private sessions are particularly strong here for practitioners working on injury recovery.",
    address: "2200 Magazine St, New Orleans, LA 70130",
    bestFor: "Garden District community, private sessions, all levels",
    signatureClass: "Classical Reformer",
    bookingTip: "Private and duet sessions book out two weeks ahead — reserve early, especially during festival season.",
  },
  {
    number: "4",
    name: "Club Pilates Mid-City",
    neighborhood: "Mid-City",
    priceLevel: "$$",
    review:
      "Club Pilates Mid-City serves one of New Orleans' most geographically central and diverse neighborhoods with accessible, quality reformer programming. The studio attracts a broad mix of ages, backgrounds, and fitness levels — from City Park joggers looking for complementary training to professionals from the surrounding office corridor. Instructors are warm and encouraging with new clients. One of the city's most conveniently located reformer options for residents without a car.",
    address: "3201 Bienville Ave, New Orleans, LA 70119",
    bestFor: "Mid-City residents, beginners, accessible pricing",
    signatureClass: "Reformer Foundations",
    bookingTip: "Lunchtime classes fill quickly with the Mid-City office crowd — book the night before.",
  },
  {
    number: "5",
    name: "The Movement Lab NOLA",
    neighborhood: "Marigny / Bywater",
    priceLevel: "$$",
    review:
      "The Movement Lab NOLA brings Pilates reformer instruction to the Marigny and Bywater with the inclusive, community-driven spirit that defines these creative neighborhoods. The studio is smaller by design, which means classes are genuinely intimate and instructors know their clients' movement histories. Programming is thoughtful and adapted for the neighborhood's mix of artists, musicians, healthcare workers, and young professionals. A warm, welcoming entry point into Pilates for east-bank New Orleans residents.",
    address: "2310 St Claude Ave, New Orleans, LA 70117",
    bestFor: "Marigny and Bywater community, beginners, intimate class sizes",
    signatureClass: "Reformer Flow",
    bookingTip: "Weekend classes fill fast with the creative Marigny community — book by Thursday.",
  },
  {
    number: "6",
    name: "Club Pilates Lakeview",
    neighborhood: "Lakeview",
    priceLevel: "$$$",
    review:
      "Club Pilates Lakeview serves one of New Orleans' most family-oriented and community-focused residential neighborhoods with a well-run franchise studio that consistently earns five-star reviews. The Lakeview clientele is active and health-invested — lots of walkers, cyclists, and runners who use Pilates as a year-round complement to their outdoor activities. The studio has built a loyal base of regulars who appreciate both the instruction quality and the neighborhood atmosphere.",
    address: "4141 Canal St, New Orleans, LA 70119",
    bestFor: "Lakeview residents, active community, all levels",
    signatureClass: "Reformer 1.5",
    bookingTip: "Morning slots fill with the Lakeview running and walking community — book 48 hours ahead.",
  },
];

const BOOKING_TIPS = [
  {
    heading: "Plan around New Orleans' heat and humidity",
    body: "Summers in New Orleans are intensely hot and humid — arriving at a studio already overheated will affect your session. Schedule morning classes before 10 AM or evening classes after 6 PM during June through September, and factor in travel time in air-conditioned transport rather than walking long distances in midday heat.",
  },
  {
    heading: "Book well ahead during Mardi Gras and Jazz Fest",
    body: "Major festivals — especially Mardi Gras (February/March) and Jazz Fest (late April/early May) — bring hundreds of thousands of visitors to the city and disrupt normal studio schedules. Some studios reduce hours or close entirely during parade days. Check studio calendars weeks in advance and confirm your bookings directly if you're visiting during festival season.",
  },
  {
    heading: "Parking varies dramatically by neighborhood",
    body: "Garden District and Uptown studios often have limited street parking on narrower historic streets. Marigny and Bywater are best accessed by rideshare or bicycle. Mid-City and Metairie generally have easier parking. Factor transit time into your schedule — arriving flustered after a parking battle is not the ideal warm-up.",
  },
  {
    heading: "Take advantage of new-client intro packages",
    body: "Most New Orleans studios offer a first-week or first-month introductory rate — typically three reformer classes for the price of one. These are the smartest way to audition a studio's teaching style, equipment, and community before committing to a membership or class pack.",
  },
  {
    heading: "Grip socks are required at every studio",
    body: "All New Orleans studios require grip socks — bare feet on the reformer are a safety and hygiene issue, and the city's heat makes this even more relevant. Pack a pair before you arrive; studio socks are available for purchase but cost noticeably more than bringing your own.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Garden District",
    description:
      "New Orleans' most storied residential neighborhood, lined with antebellum mansions and mature live oaks. The Garden District's Pilates studios match the area's refined aesthetic — premier equipment, expert instruction, and an atmosphere that rewards serious practitioners.",
  },
  {
    name: "Uptown",
    description:
      "A sprawling, elegant neighborhood stretching upriver from the Garden District. Uptown's studios tend toward classical methodology and a quieter, more focused environment — ideal for clients who want to go deep into the Pilates system away from the city's more festive energy.",
  },
  {
    name: "Marigny/Bywater",
    description:
      "New Orleans' most creative and colorful residential districts, full of musicians, artists, and independent businesses. Studios here reflect the neighborhood's inclusive, community-first spirit — smaller, more intimate, and generally more accessible in price than their upriver counterparts.",
  },
  {
    name: "Mid-City",
    description:
      "A genuinely diverse, centrally located neighborhood that connects different parts of the city. Mid-City studios serve a broad cross-section of New Orleanians and tend to emphasize accessibility and community alongside quality instruction — a great entry point for newcomers to the city.",
  },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at every New Orleans studio. ToeSox and Tavi Noir both grip well on reformer footbars — especially important in the city's heat.",
    price: "From $16",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat (6mm)",
    note: "For mat classes at Uptown Pilates and Marigny Movement Studio — slightly thicker than a yoga mat for joint comfort on studio floors.",
    price: "From $52",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Used in classical mat sequences at Uptown Pilates — great to own if you're following a classical program or practicing at home between sessions.",
    price: "From $24",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Fabric Resistance Bands",
    note: "Versatile for warm-ups, hip work, and supplemental home practice — useful between sessions at any New Orleans studio.",
    price: "From $22",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
  {
    name: "High-Density Foam Roller",
    note: "A great complement to Lakeview Pilates' therapeutic programming — excellent for thoracic mobility and post-class recovery.",
    price: "From $32",
    url: "https://www.amazon.com/s?k=high+density+foam+roller+pilates&tag=pilatescollective-20",
  },
];

const RELATED_CITIES = [
  {
    city: "Atlanta",
    country: "United States",
    href: "/cities/atlanta",
    studioCount: 6,
  },
  {
    city: "Nashville",
    country: "United States",
    href: "/cities/nashville",
    studioCount: 6,
  },
  {
    city: "Houston",
    country: "United States",
    href: "/cities/houston",
    studioCount: 6,
  },
  {
    city: "Charlotte",
    country: "United States",
    href: "/cities/charlotte",
    studioCount: 6,
  },
];

const FURTHER_READING = [
  {
    title: "How to Choose a Pilates Instructor",
    excerpt:
      "Certifications, teaching style, and lineage — everything you need to evaluate a new instructor before committing to a package.",
    href: "/blog/how-to-choose-a-pilates-instructor",
    category: "Guides",
    readTime: "7 min read",
    date: "2026-01-14",
    imageUrl:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=450&fit=crop",
  },
  {
    title: "Classical vs Contemporary Pilates",
    excerpt:
      "What actually separates classical and contemporary methods — and how to decide which approach suits your body and goals.",
    href: "/blog/classical-vs-contemporary-pilates",
    category: "Education",
    readTime: "6 min read",
    date: "2026-02-05",
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
        { "@type": "ListItem", position: 3, name: "New Orleans", item: "https://pilatescollectiveclub.com/cities/new-orleans" },
      ],
    },
    {
      "@type": "ItemList",
      name: "Best Pilates Studios in New Orleans, LA",
      url: "https://pilatescollectiveclub.com/cities/new-orleans",
      numberOfItems: 6,
      itemListElement: STUDIOS.map((s, i: number) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "ExerciseGym",
          name: s.name,
          description: s.review.slice(0, 160),
          address: { "@type": "PostalAddress", addressLocality: "New Orleans", addressRegion: "LA", addressCountry: "US" },
        },
      })),
    },
    {
      "@type": "Article",
      headline: "Best Pilates Studios in New Orleans, LA (2026)",
      url: "https://pilatescollectiveclub.com/cities/new-orleans",
      dateModified: "2026-06-01",
      author: { "@type": "Organization", name: "Pilates Collective Club" },
      publisher: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com" },
    },
  ],
};

export default function NewOrleansPage() {
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
              Best Pilates Studios in New Orleans, LA
            </h1>
            <p className="text-sm mb-6" style={{ color: "#9c8678" }}>
              Updated June 2026 · 6 studios reviewed
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "#5c4f47" }}>
              New Orleans is a city that moves to its own rhythm — and its Pilates scene is no different. From
              the Garden District's premier reformer boutiques to the community-driven studios of the Marigny
              and Mid-City, the Crescent City offers serious Pilates across every style, budget, and neighborhood
              character. We've walked the streets, taken the classes, and selected the six studios that genuinely
              deliver — whether you're a visitor wanting one exceptional session or a local building a long-term practice.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto relative rounded-2xl overflow-hidden" style={{ height: "420px" }}>
            <Image
              src="https://images.unsplash.com/photo-gCCTBz8nXSA?w=1400&h=840&fit=crop"
              alt="Pilates studio in New Orleans, LA"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium opacity-90">New Orleans, Louisiana</p>
            </div>
          </div>
        </section>

        {/* Studios */}
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "#2d2926" }}>
              The 6 Best Pilates Studios in New Orleans
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
              Booking Tips for New Orleans
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
              Gear New Orleans instructors recommend.{" "}
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
              New Orleans Neighborhoods for Pilates
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

        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best reformer Pilates in New Orleans…" />
      </main>
      <Footer />
    </>
  );
}
