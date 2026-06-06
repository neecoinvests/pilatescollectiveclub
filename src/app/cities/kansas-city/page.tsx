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
  title: "Best Pilates Studios in Kansas City (2026) — Curated & Verified",
  description:
    "Discover the 6 best Pilates studios in Kansas City, MO and KS. From Country Club Plaza and Waldo to Overland Park and Prairie Village — expert picks, honest reviews, and booking tips for 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: [
    "pilates studios Kansas City MO",
    "best pilates Kansas City",
    "reformer pilates Kansas City",
    "Country Club Plaza pilates",
    "Overland Park pilates studio",
    "Kansas City pilates classes 2026",
    "Club Pilates Kansas City",
    "BODYBAR Pilates Kansas City",
  ],
  openGraph: {
    title: "Best Pilates Studios in Kansas City (2026) — Curated & Verified",
    description:
      "Discover the 6 best Pilates studios in Kansas City. From Country Club Plaza to Overland Park — expert picks and booking tips for 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/kansas-city",
    images: [
      {
        url: "https://images.unsplash.com/photo-1613069344419-ce7e1e869daa?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Pilates studio in Kansas City",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Kansas City (2026)",
    description:
      "The 6 best Pilates studios in Kansas City — curated, verified, and reviewed for 2026.",
    images: [
      "https://images.unsplash.com/photo-1613069344419-ce7e1e869daa?w=1200&h=630&fit=crop",
    ],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/kansas-city",
  },
};

const STUDIOS = [
  {
    number: "1",
    name: "Pilates Stance Studio",
    neighborhood: "Brookside East",
    priceLevel: "$$$",
    review:
      "Pilates Stance Studio is the most credentialed classical studio in the Kansas City market and the 2026 Quality Business Awards winner for Best Pilates Studio in Kansas City, Missouri — a distinction earned through genuine instructional depth rather than marketing. The studio specializes in Romana's Pilates®, the most strictly lineage-traced branch of the method, with private and small-group sessions conducted on high-end full apparatus. The Brookside East location serves the surrounding residential community with instruction that takes the method seriously as both a physical discipline and a body education practice. The best choice in KC for practitioners who want a genuinely classical practice.",
    address: "751 E 63rd St, Suite 209, Kansas City, MO 64110",
    bestFor: "Romana's classical lineage, private instruction, full apparatus, serious practitioners",
    signatureClass: "Romana's Classical Reformer",
    bookingTip: "Private slots fill quickly — inquire about opening schedules directly rather than waiting for online availability.",
  },
  {
    number: "2",
    name: "Club Pilates Country Club Plaza",
    neighborhood: "Country Club Plaza / Midtown",
    priceLevel: "$$",
    review:
      "Club Pilates Country Club Plaza sits on the west side of KC's most iconic shopping and dining district — a centrally located studio that draws from the surrounding midtown neighborhoods, the Plaza residential community, and practitioners from across the metro who combine a studio session with Plaza errands. The studio offers eleven class formats including Cardio Sculpt, Suspend (TRX), and Restore, with over 500 hours of instructor training required — above the franchise average. Wellhub and ClassPass compatible. The most convenient franchise reformer option for the city core.",
    address: "610 W 48th St, Kansas City, MO 64112",
    bestFor: "Country Club Plaza and midtown residents, beginners, ClassPass and Wellhub users",
    signatureClass: "Reformer Flow",
    bookingTip: "The Plaza location books quickly around lunch hours — the professional midtown demographic fills those slots early.",
  },
  {
    number: "3",
    name: "Pilates 1901",
    neighborhood: "Waldo",
    priceLevel: "$$",
    review:
      "Pilates 1901 is one of Kansas City's most respected independent boutiques — a STOTT Pilates-certified studio in the Waldo neighborhood that serves the area's active, community-oriented residential community with small-group and private training grounded in one of the most rigorously evidence-based certifications in the field. The studio won the Quality Business Awards' Best Pilates Studio in KC (2023) and maintains a 4.2–5.0 rating across platforms through consistent, results-oriented instruction. The signature T School program — a combined nutrition and movement curriculum — sets the studio apart from the standard reformer offering.",
    address: "222 W Gregory Blvd, Kansas City, MO 64114",
    bestFor: "STOTT-certified instruction, injury rehab, nutrition integration, Waldo residents",
    signatureClass: "STOTT Reformer",
    bookingTip: "The T School nutrition + movement program fills by referral — ask about current cohort availability when booking your first class.",
  },
  {
    number: "4",
    name: "BODYBAR Pilates Kansas City",
    neighborhood: "Midtown",
    priceLevel: "$$",
    review:
      "BODYBAR Pilates brings boutique reformer quality to Kansas City's midtown corridor — 40 to 50-minute modern reformer classes capped at fourteen students, in a sleek studio environment that prioritizes both the quality of instruction and the cohesion of the client community. The 3660 Broadway Blvd location draws from Midtown, Westport, and the surrounding residential neighborhoods, with a Tuesday through Friday early-morning schedule that serves the city's working professional population. Five-star reviews across multiple platforms reflect a studio that delivers on its promise consistently rather than occasionally.",
    address: "3660 Broadway Blvd, Kansas City, MO 64111",
    bestFor: "Boutique reformer, small class caps, Midtown and Westport residents",
    signatureClass: "BODYBAR Reformer",
    bookingTip: "Classes are capped at 14 — book 48 hours ahead for prime morning slots.",
  },
  {
    number: "5",
    name: "Pilates of Kansas City",
    neighborhood: "Prairie Village",
    priceLevel: "$$",
    review:
      "Pilates of Kansas City is one of the metro's most established boutique brands — a multi-location practice with a long-running Prairie Village studio sitting directly on the Missouri-Kansas state line, making it one of the most conveniently located options for the enormous Johnson County suburban population. The studio offers both classical and contemporary reformer programming with a consistent instructor team that clients follow across multiple years. A second location in Overland Park (6764 W 135th St) extends the brand's reach into the south Johnson County corridor. Well-suited for the area's health-invested, professional suburban demographic.",
    address: "7656 State Line Rd, Prairie Village, KS 66208",
    bestFor: "Prairie Village and Johnson County residents, classical and contemporary reformer",
    signatureClass: "Reformer Flow",
    bookingTip: "The state line location splits evenly between MO and KS practitioners — book early for weekend morning slots.",
  },
  {
    number: "6",
    name: "BODYBAR Pilates South Overland Park",
    neighborhood: "South Overland Park",
    priceLevel: "$$",
    review:
      "BODYBAR Pilates South Overland Park is one of the newest additions to the Kansas City metro's Pilates landscape — opened in April 2024 in Deer Creek Woods Shopping Center, covered by the Johnson County Post, and already earning strong reviews for its energetic instruction and welcoming community. The Metcalf Avenue location serves the enormous south Overland Park and Leawood residential population, which previously had limited boutique reformer options relative to its size and wellness investment. The BODYBAR format — capped classes, modern reformers, time-efficient 40–50 minute sessions — fits the suburban professional demographic well.",
    address: "13340 Metcalf Ave, Overland Park, KS 66213",
    bestFor: "South Overland Park and Leawood residents, boutique reformer, efficient workouts",
    signatureClass: "BODYBAR Reformer",
    bookingTip: "The studio is newest in the market — founding member rates may still be available, check directly with the studio.",
  },
];

const BOOKING_TIPS = [
  {
    heading: "KC's winters and summers both favor a studio commitment",
    body: "Kansas City gets both brutal winters and sweltering summers — two seasons that push outdoor exercisers indoors and create year-round demand spikes at reformer studios. Practitioners who build indoor studio routines maintain them across seasons. The best time to establish a recurring slot is September or early spring.",
  },
  {
    heading: "The Missouri-Kansas split matters for scheduling",
    body: "The KC metro spans two states, and a surprisingly large number of practitioners live in one state and work in the other. Studios on State Line Road (like Pilates of Kansas City in Prairie Village) and along the Metcalf corridor serve both sides equally. Factor your daily route across the state line into your studio choice.",
  },
  {
    heading: "Johnson County has the highest density of fitness investment in the metro",
    body: "Overland Park, Leawood, Prairie Village, and the surrounding Johnson County suburbs have developed a dense wellness infrastructure that reflects the area's above-average household income and health-consciousness. Studios in this corridor maintain high instruction standards to compete for a sophisticated client base.",
  },
  {
    heading: "Intro packages are universal — use them before committing",
    body: "Every Kansas City studio offers new-client introductory rates. Use the intro to evaluate instructor quality and community fit before committing to a membership. Classical studios (Pilates Stance) expect a private intake session first — it is not optional.",
  },
  {
    heading: "Grip socks are required at every reformer and BODYBAR studio",
    body: "Universal across the Kansas City reformer market. Full-toe grip socks — bring your own rather than paying front-desk retail prices.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Country Club Plaza & Midtown",
    description:
      "KC's most iconic commercial district anchors the city-core Pilates scene, with both franchise and boutique studios serving the surrounding midtown residential neighborhoods and the Plaza's professional and shopping traffic.",
  },
  {
    name: "Waldo & Brookside",
    description:
      "Kansas City's most character-rich south-city neighborhoods support independent studios that serve a health-invested, community-oriented residential population with specialized programming and genuine instructor depth.",
  },
  {
    name: "Prairie Village & Overland Park",
    description:
      "The Johnson County corridor has developed the metro's highest density of reformer studios — a reflection of the area's affluent, health-conscious suburban population that holds studios to real standards and sustains them with consistent membership.",
  },
  {
    name: "South Overland Park & Leawood",
    description:
      "The southern Johnson County suburbs are the fastest-growing segment of the KC fitness market, with new boutique studios arriving to serve a large residential population that has historically underserved for premium fitness options.",
  },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at every reformer studio in Kansas City. Full-toe grip socks are the universal standard.",
    price: "From $16",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat (6mm)",
    note: "Essential for Kansas City's mat classes and home practice through the city's extreme winters and summers.",
    price: "From $52",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Standard in Kansas City's classical studios. Useful for at-home reinforcement between sessions.",
    price: "From $24",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Fabric Resistance Bands",
    note: "Recommended for home practice between the intensive sessions at KC's classical studios.",
    price: "From $22",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
  {
    name: "High-Density Foam Roller",
    note: "Post-class fascia release — standard recovery tool across Kansas City's reformer and BODYBAR studios.",
    price: "From $32",
    url: "https://www.amazon.com/s?k=high+density+foam+roller+pilates&tag=pilatescollective-20",
  },
];

const RELATED_CITIES = [
  { city: "St. Louis", country: "United States", href: "/cities/st-louis", studioCount: 6 },
  { city: "Denver", country: "United States", href: "/cities/denver", studioCount: 6 },
  { city: "Dallas", country: "United States", href: "/cities/dallas", studioCount: 6 },
  { city: "Minneapolis", country: "United States", href: "/cities/minneapolis", studioCount: 6 },
];

const FURTHER_READING = [
  {
    title: "The Beginner's Guide to Reformer Pilates",
    excerpt:
      "What to expect in your first reformer class, how to choose a studio, and what to bring.",
    href: "/blog/beginners-guide-to-reformer-pilates",
    category: "Beginner Guide",
    readTime: "8 min read",
    date: "2026-03-01",
    imageUrl:
      "https://images.unsplash.com/photo-1616439069669-66dbe74bcdad?w=800&h=450&fit=crop",
  },
  {
    title: "Classical vs Contemporary Pilates",
    excerpt:
      "The real differences between classical and contemporary approaches — and how to choose the right method for your goals.",
    href: "/blog/classical-vs-contemporary-pilates",
    category: "Education",
    readTime: "7 min read",
    date: "2026-01-01",
    imageUrl:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=450&fit=crop",
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
        { "@type": "ListItem", position: 3, name: "Kansas City", item: "https://pilatescollectiveclub.com/cities/kansas-city" },
      ],
    },
    {
      "@type": "ItemList",
      name: "Best Pilates Studios in Kansas City",
      url: "https://pilatescollectiveclub.com/cities/kansas-city",
      numberOfItems: 6,
      itemListElement: STUDIOS.map((s, i: number) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "ExerciseGym",
          name: s.name,
          description: s.review.slice(0, 160),
          address: { "@type": "PostalAddress", streetAddress: s.address, addressLocality: "Kansas City", addressRegion: "MO", addressCountry: "US" },
        },
      })),
    },
    {
      "@type": "Article",
      headline: "Best Pilates Studios in Kansas City (2026)",
      url: "https://pilatescollectiveclub.com/cities/kansas-city",
      dateModified: "2026-06-01",
      author: { "@type": "Organization", name: "Pilates Collective Club" },
      publisher: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com" },
    },
  ],
};

export default function KansasCityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section style={{ backgroundColor: "#fcf9f8" }} className="pt-32 pb-16 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#b8977e" }}>
              City Guide
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#2d2926" }}>
              Best Pilates Studios in Kansas City
            </h1>
            <p className="text-sm mb-6" style={{ color: "#9c8678" }}>
              Updated June 2026 · 6 studios reviewed
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "#5c4f47" }}>
              Kansas City's Pilates market spans two states and covers some of the most contrasting
              fitness geographies in the Midwest — from a Romana's Pilates® classical studio in
              Brookside that won the 2026 Quality Business Award for best in the city, to BODYBAR
              boutique studios in Midtown and south Overland Park catering to KC's growing suburban
              wellness economy. The Country Club Plaza franchise anchors the city core. STOTT-certified
              instruction and nutrition programming set Waldo apart. If you know where to look, Kansas
              City in 2026 delivers quality reformer instruction at every level and price point.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto relative rounded-2xl overflow-hidden" style={{ height: "420px" }}>
            <Image
              src="https://images.unsplash.com/photo-1613069344419-ce7e1e869daa?w=1400&h=840&fit=crop"
              alt="Pilates studio in Kansas City"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium opacity-90">Kansas City, Missouri & Kansas</p>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "#2d2926" }}>
              The 6 Best Pilates Studios in Kansas City
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

        <section style={{ backgroundColor: "#f6f3f2" }} className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8" style={{ color: "#2d2926" }}>
              Booking Tips for Kansas City
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

        <section style={{ backgroundColor: "#fcf9f8" }} className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "#2d2926" }}>
              What to Bring to Class
            </h2>
            <p className="text-sm mb-8" style={{ color: "#9c8678" }}>
              Gear Kansas City instructors recommend.{" "}
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

        <section style={{ backgroundColor: "#f6f3f2" }} className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8" style={{ color: "#2d2926" }}>
              Kansas City Neighborhoods for Pilates
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

        <CTASection
          title="Find Pilates near you"
          subtitle="Use our AI Finder to discover studios in any city — coming soon."
          showSearch
          searchPlaceholder="Ask: best reformer Pilates in Kansas City…"
        />
      </main>
      <Footer />
    </>
  );
}
