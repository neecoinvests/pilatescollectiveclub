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
  title: "Best Pilates Studios in New Orleans, LA (2026) — Curated Guide",
  description: "The best Pilates studios in New Orleans — reformer boutiques in the Garden District, Uptown, and Mid-City. Six verified picks for every level, 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates new orleans", "reformer pilates new orleans", "best pilates studios new orleans", "pilates studio nola", "pilates classes new orleans", "garden district pilates", "uptown pilates new orleans", "pilates louisiana", "best reformer pilates new orleans"],
  openGraph: {
    title: "Best Pilates Studios in New Orleans, LA (2026)",
    description:
      "Six curated Pilates studios in New Orleans — Garden District and Uptown reformer boutiques. Verified 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/new-orleans",
    images: [
      {
        url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Pilates studio in New Orleans, LA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in New Orleans (2026)",
    description:
      "The 6 best Pilates studios in New Orleans — curated, verified, and reviewed for 2026.",
    images: [
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&q=80",
    ],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/new-orleans",
  },
};

const STUDIOS = [
  {
    number: "1",
    name: "DEFINE body & mind",
    neighborhood: "Uptown",
    priceLevel: "$$$",
    review: "DEFINE body & mind in Uptown is the top-rated reformer studio in New Orleans on ClassPass, at 4.9 from more than 11,000 reviews. Its reformer and Lagree-influenced classes are praised for breaking the reformer down clearly for newcomers while still challenging experienced clients.",
    caveat: "popular classes fill quickly — book ahead, especially in festival season.",
    address: "—",
    bestFor: "Top-rated reformer for beginners and regulars",
    signatureClass: "Reformer",
    bookingTip: "Book well ahead during Mardi Gras and Jazz Fest, when the city fills up.",
  },
  {
    number: "2",
    name: "Club Pilates Uptown",
    neighborhood: "Uptown (Magazine Street)",
    priceLevel: "$$$",
    review: "Club Pilates Uptown on Magazine Street serves Uptown and the Garden District with the brand's levelled group reformer system.",
    caveat: "a franchise format — consistent, but less personalised than an independent studio.",
    address: "6001 Magazine St, New Orleans, LA 70118",
    bestFor: "Structured reformer classes Uptown",
    signatureClass: "Reformer Flow",
    bookingTip: "Early-morning and evening weekday classes fill 48 hours out.",
  },
  {
    number: "3",
    name: "Romney Studios",
    neighborhood: "Uptown (Magazine Street)",
    priceLevel: "$$",
    review: "Romney Studios on Magazine Street is a local Uptown studio offering Pilates classes, listed on ClassPass among the city's reformer options.",
    caveat: "limited published detail about formats and instructors — take a trial class first.",
    address: "5619 Magazine St, New Orleans, LA 70115",
    bestFor: "A local Uptown Pilates studio",
    signatureClass: "Reformer Pilates",
    bookingTip: "Check the schedule for reformer-specific classes.",
  },
  {
    number: "4",
    name: "Club Pilates Mid-City",
    neighborhood: "Mid-City",
    priceLevel: "$$",
    review: "Club Pilates Mid-City on Orleans Avenue is rated 4.8 on ClassPass and brings levelled group reformer classes to one of the city's most central neighbourhoods, close to City Park.",
    caveat: "a franchise studio — reliable structure, less individual programming.",
    address: "3700 Orleans Ave, Suite 103A & B, New Orleans, LA 70119",
    bestFor: "Central reformer classes near City Park",
    signatureClass: "Reformer Flow",
    bookingTip: "Lunchtime classes fill quickly — book the night before.",
  },
  {
    number: "5",
    name: "The Pilates and Yoga Loft",
    neighborhood: "Metairie",
    priceLevel: "$$$",
    review: "The Pilates and Yoga Loft on Metairie Road brings a classical, systematic approach in a spa-like setting, teaching an integrative classical style that identifies and works on each client's individual weaknesses.",
    caveat: "a classical studio — expect precise technique rather than a high-energy class.",
    address: "617 Metairie Rd, Metairie, LA 70005",
    bestFor: "Classical, integrative Pilates in Metairie",
    signatureClass: "Classical Reformer",
    bookingTip: "Start with a private session so the instructor can assess you.",
  },
  {
    number: "6",
    name: "Devotion Studios",
    neighborhood: "French Quarter",
    priceLevel: "$$$",
    review: "Devotion Studios opened in the French Quarter as a reformer Pilates and aerial fitness studio with two rooms, including a dedicated Pilates studio with eight Cadillac reformer machines.",
    caveat: "we could not confirm the exact street address independently — check the studio's website before visiting.",
    address: "—",
    bestFor: "Cadillac-reformer classes and aerial fitness in the Quarter",
    signatureClass: "Cadillac Reformer",
    bookingTip: "Eight machines per class — book ahead for weekends.",
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

const HOME_REFORMERS = [
  { tag: "Budget Pick", name: "Stamina AeroPilates 287", note: "The most accessible full-function reformer — four cords, a rebounder, and a frame that folds flat for storage.", price: "From $299", url: "https://www.amazon.com/s?k=stamina+aeropilates+287&tag=pilatescollective-20" },
  { tag: "Mid-Range Pick", name: "AeroPilates Pro XP 557", note: "A smoother carriage, standing platform, and adjustable footbar for practitioners training several times a week.", price: "From $1,329", url: "https://www.amazon.com/s?k=aeropilates+pro+557&tag=pilatescollective-20" },
  { tag: "Buy Once", name: "Balanced Body Allegro 2", note: "The studio-grade machine serious home practitioners never need to replace — full spring system and fold-flat storage.", price: "From $3,995", url: "https://www.amazon.com/s?k=balanced+body+allegro+2+reformer&tag=pilatescollective-20" },
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
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&q=80",
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
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&q=80",
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
              Updated October 2026 · 6 studios reviewed
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "#5c4f47" }}>
              New Orleans is a city that moves to its own rhythm — and its Pilates scene is no different. From
              the Garden District's premier reformer boutiques to the classical studios in Metairie and Cadillac reformers in the French Quarter, the Crescent City offers serious Pilates across every style, budget, and neighborhood
              character. We've checked every studio's location and details against public listings and selected six that
              stand out — whether you're a visitor wanting one exceptional session or a local building a long-term practice.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto relative rounded-2xl overflow-hidden" style={{ height: "420px" }}>
            <Image
              src="/pictures/neworleans.jpg"
              alt="Pilates studio in New Orleans, LA"
              fill
              unoptimized
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
        <section style={{ backgroundColor: "#fdf3ec", borderTop: "1px solid rgba(184,151,126,0.35)", borderBottom: "1px solid rgba(184,151,126,0.35)" }} className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#b8977e" }}>
              Before You Go
            </p>
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

        <section className="px-6 py-20">
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

        {/* Pilates at Home */}
        <section style={{ backgroundColor: "#f6f3f2" }} className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#b8977e" }}>
              Prefer To Train At Home?
            </p>
            <h2 className="text-2xl font-bold mb-2" style={{ color: "#2d2926" }}>
              Not Convinced? How About Pilates at Home?
            </h2>
            <p className="text-sm mb-8" style={{ color: "#9c8678" }}>
              A home reformer gets you a genuine session on your own schedule.{" "}
              <Link href="/blog/best-home-pilates-reformer" className="underline">See the full reformer guide</Link>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {HOME_REFORMERS.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="block rounded-xl p-5 border transition-shadow hover:shadow-md"
                  style={{ borderColor: "#e8ddd6", backgroundColor: "#fff" }}
                >
                  <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#b8977e" }}>{item.tag}</p>
                  <p className="font-semibold mb-1" style={{ color: "#2d2926" }}>{item.name}</p>
                  <p className="text-sm mb-3" style={{ color: "#5c4f47" }}>{item.note}</p>
                  <p className="text-sm font-semibold" style={{ color: "#b8977e" }}>{item.price} on Amazon →</p>
                </a>
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
