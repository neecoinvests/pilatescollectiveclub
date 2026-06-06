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
  title: "Best Pilates Studios in Charlotte, NC (2026) — Curated & Verified",
  description:
    "Discover the 6 best Pilates studios in Charlotte, NC. From South End reformer boutiques to Myers Park classical studios — expert picks, honest reviews, and booking tips for 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: [
    "pilates studios Charlotte NC",
    "best pilates Charlotte",
    "reformer pilates Charlotte",
    "South End pilates",
    "Myers Park pilates",
    "NoDa pilates studio",
    "Charlotte pilates classes 2026",
    "Charlotte NC fitness studios",
  ],
  openGraph: {
    title: "Best Pilates Studios in Charlotte, NC (2026) — Curated & Verified",
    description:
      "Discover the 6 best Pilates studios in Charlotte, NC. From South End reformer boutiques to Myers Park classical studios — expert picks, honest reviews, and booking tips.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/charlotte",
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Charlotte_night_skyline_2016_02.jpg/1200px-Charlotte_night_skyline_2016_02.jpg?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Pilates studio in Charlotte, NC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Charlotte, NC (2026)",
    description:
      "The 6 best Pilates studios in Charlotte — curated, verified, and reviewed for 2026.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Charlotte_night_skyline_2016_02.jpg/1200px-Charlotte_night_skyline_2016_02.jpg?w=1200&h=630&fit=crop",
    ],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/charlotte",
  },
};

const STUDIOS = [
  {
    number: "1",
    name: "Club Pilates South End",
    neighborhood: "South End",
    priceLevel: "$$$",
    review:
      "Club Pilates South End is one of Charlotte's highest-rated reformer studios, occupying a prime spot in the city's most dynamic fitness and wellness corridor. The South End location draws professionals, athletes, and serious practitioners from across Charlotte's light-rail corridor and surrounding neighborhoods. Instructors are praised for their attentiveness and ability to challenge experienced practitioners while remaining welcoming to beginners. The schedule is dense and well-organized, with classes from early morning through evening.",
    address: "1422 S Tryon St, Charlotte, NC 28203",
    bestFor: "South End community, all levels, contemporary reformer",
    signatureClass: "Reformer Flow",
    bookingTip: "The 6 AM and 5:30 PM weekday classes fill fast — book 48 hours ahead.",
  },
  {
    number: "2",
    name: "Club Pilates Myers Park",
    neighborhood: "Myers Park",
    priceLevel: "$$$",
    review:
      "Club Pilates Myers Park serves Charlotte's most established residential neighborhood with a franchise reformer program that consistently meets the community's high expectations. The Myers Park clientele is experienced and wellness-savvy, which has attracted an instructor team that engages genuinely with the curriculum. The studio has built a loyal community of long-term practitioners who value the quality of instruction and the consistency of the schedule.",
    address: "1928 Sharon Rd W, Charlotte, NC 28210",
    bestFor: "Myers Park residents, all levels, consistent reformer",
    signatureClass: "Flow",
    bookingTip: "Morning classes are popular with the residential Myers Park crowd — book by Thursday for weekend sessions.",
  },
  {
    number: "3",
    name: "Club Pilates NoDa",
    neighborhood: "NoDa (North Davidson)",
    priceLevel: "$$",
    review:
      "Club Pilates NoDa brings well-structured reformer programming to Charlotte's arts and music district at pricing that fits the neighborhood's creative and young professional community. The studio has captured the warm, community-first energy that makes NoDa one of Charlotte's most beloved neighborhoods. Instructors receive consistent high marks for their warmth with new clients and their attention to form throughout class. An excellent starting point for Charlotte practitioners new to the method.",
    address: "3300 N Davidson St, Charlotte, NC 28205",
    bestFor: "NoDa community, beginners, accessible pricing",
    signatureClass: "Reformer Foundations",
    bookingTip: "Weekend reformer classes fill fast — book by Thursday.",
  },
  {
    number: "4",
    name: "Club Pilates Dilworth",
    neighborhood: "Dilworth",
    priceLevel: "$$$",
    review:
      "Club Pilates Dilworth is a well-loved neighborhood studio tucked into one of Charlotte's most charming residential areas. The studio earns consistent five-star reviews for its welcoming atmosphere, attentive instructors, and strong community of regulars who have been training here for years. Dilworth's mix of young families, healthcare professionals, and established Charlotte residents has created a studio community with high standards and genuine warmth.",
    address: "1427 E Blvd, Charlotte, NC 28203",
    bestFor: "Dilworth residents, all levels, neighborhood community",
    signatureClass: "Reformer 1.5",
    bookingTip: "Request a complimentary intro session first — instructors use it to match you with the right class level.",
  },
  {
    number: "5",
    name: "Club Pilates Ballantyne",
    neighborhood: "Ballantyne",
    priceLevel: "$$",
    review:
      "Club Pilates Ballantyne delivers reliable, well-structured reformer programming to South Charlotte's busy professional community. The studio's consistent class formats, unlimited membership options, and dense schedule make it practical for practitioners who want to train three or four times per week. Instructors are thorough with cueing and attentive to form. A dependable, no-surprises option for south-Charlotte residents who prioritize consistency.",
    address: "15105 John J Delaney Dr, Charlotte, NC 28277",
    bestFor: "High-frequency practitioners, south Charlotte residents, memberships",
    signatureClass: "Club Reformer 57",
    bookingTip: "The 6 AM and 7 PM weekday classes fill fast — book 48 hours out.",
  },
  {
    number: "6",
    name: "Club Pilates Plaza Midwood",
    neighborhood: "Plaza Midwood",
    priceLevel: "$$",
    review:
      "Club Pilates Plaza Midwood brings accessible reformer programming to one of Charlotte's most eclectic and walkable neighborhoods. The studio fits the Plaza Midwood character — unpretentious, community-oriented, and welcoming to practitioners of all backgrounds. Instructors know their regulars well and provide genuinely individualized attention within the group class format. Great value in one of Charlotte's most vibrant urban neighborhoods.",
    address: "1218 The Plaza, Charlotte, NC 28205",
    bestFor: "Plaza Midwood community, beginners and intermediates, accessible pricing",
    signatureClass: "Reformer & Core",
    bookingTip: "Six-reformer capacity means spots go quickly — book as soon as the weekly schedule opens.",
  },
];

const BOOKING_TIPS = [
  {
    heading: "Time your visit around Charlotte's mild spring",
    body: "Charlotte's spring (March–May) is ideal for visiting — mild temperatures, in-bloom dogwoods, and studios running seasonal new-client specials. Summer heat sends residents indoors, making July and August peak booking months, so plan further ahead then.",
  },
  {
    heading: "Many studios offer intro packages for new clients",
    body: "Most Charlotte studios offer a first-week or first-month introductory rate — typically three reformer classes for the price of one. These are the best way to audition a studio before committing to a membership.",
  },
  {
    heading: "Ask about corporate wellness partnerships",
    body: "Charlotte's large banking and finance sector means many studios have negotiated rates through corporate wellness programs. Check with your employer's HR team before paying full retail.",
  },
  {
    heading: "Arrive 10 minutes early for equipment orientation",
    body: "Reformers vary slightly between brands and studios. Arriving early lets you adjust footbar height, headrest angle, and spring tension before class starts — critical for getting full value from the session.",
  },
  {
    heading: "Grip socks are required at every Charlotte studio",
    body: "All Charlotte studios require grip socks — bare feet on the reformer are a safety and hygiene issue. Pack a pair; studio socks are available for purchase but cost more than bringing your own.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "South End",
    description:
      "Charlotte's most dynamic neighborhood for fitness and wellness. The Light Rail corridor is lined with boutique studios, healthy cafés, and post-workout brunch spots. Easy to explore on foot or by scooter after class.",
  },
  {
    name: "Myers Park",
    description:
      "An elegant, tree-lined neighborhood south of Uptown. Home to classical studios and wellness practitioners in beautifully restored early 20th-century homes. Quiet and unhurried — perfect for focused Pilates sessions.",
  },
  {
    name: "NoDa (North Davidson)",
    description:
      "Charlotte's arts and music district, full of murals, independent studios, and creative energy. NoDa's Pilates offerings reflect the neighborhood's inclusive, community-first spirit and are generally more accessible in price.",
  },
  {
    name: "Plaza Midwood",
    description:
      "A walkable, eclectic neighborhood popular with young professionals and creatives. Small, owner-operated studios thrive here alongside independent coffee shops and restaurants — great for a full morning of movement and café culture.",
  },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at every Charlotte studio. ToeSox and Tavi Noir both have excellent grip for reformer work.",
    price: "From $16",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat (6mm)",
    note: "For mat classes at Myers Park Pilates and Plaza Midwood — slightly thicker than a yoga mat for joint comfort.",
    price: "From $52",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Used in classical mat sequences — great to own if you're practicing at Myers Park or following a classical program at home.",
    price: "From $24",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Fabric Resistance Bands",
    note: "Versatile for warm-ups, hip work, and supplemental home practice between studio sessions.",
    price: "From $22",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
  {
    name: "High-Density Foam Roller",
    note: "Ideal for thoracic mobility work — a great complement to Dilworth Pilates' therapeutic programming.",
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
    city: "Washington DC",
    country: "United States",
    href: "/cities/washington-dc",
    studioCount: 6,
  },
  {
    city: "Philadelphia",
    country: "United States",
    href: "/cities/philadelphia",
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Charlotte_night_skyline_2016_02.jpg/1200px-Charlotte_night_skyline_2016_02.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Charlotte_night_skyline_2016_02.jpg/1200px-Charlotte_night_skyline_2016_02.jpg",
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
        { "@type": "ListItem", position: 3, name: "Charlotte", item: "https://pilatescollectiveclub.com/cities/charlotte" },
      ],
    },
    {
      "@type": "ItemList",
      name: "Best Pilates Studios in Charlotte, NC",
      url: "https://pilatescollectiveclub.com/cities/charlotte",
      numberOfItems: 6,
      itemListElement: STUDIOS.map((s, i: number) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "ExerciseGym",
          name: s.name,
          description: s.review.slice(0, 160),
          address: { "@type": "PostalAddress", addressLocality: "Charlotte", addressRegion: "NC", addressCountry: "US" },
        },
      })),
    },
    {
      "@type": "Article",
      headline: "Best Pilates Studios in Charlotte, NC (2026)",
      url: "https://pilatescollectiveclub.com/cities/charlotte",
      dateModified: "2026-06-01",
      author: { "@type": "Organization", name: "Pilates Collective Club" },
      publisher: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com" },
    },
  ],
};

export default function CharlottePage() {
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
              Best Pilates Studios in Charlotte, NC
            </h1>
            <p className="text-sm mb-6" style={{ color: "#9c8678" }}>
              Updated June 2026 · 6 studios reviewed
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "#5c4f47" }}>
              Charlotte has emerged as one of the Southeast's most dynamic Pilates cities. From South End's
              warehouse-chic reformer boutiques to the classical apparatus studios of Myers Park, the Queen City
              offers serious Pilates across every style and budget. We've walked through the neighborhoods, taken
              the classes, and selected the six studios that genuinely deliver — whether you're a first-timer or
              a seasoned mover relocating from another city.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto relative rounded-2xl overflow-hidden" style={{ height: "420px" }}>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Charlotte_night_skyline_2016_02.jpg/1200px-Charlotte_night_skyline_2016_02.jpg"
              alt="Pilates studio in Charlotte, NC"
              fill
              unoptimized
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium opacity-90">Charlotte, North Carolina</p>
            </div>
          </div>
        </section>

        {/* Studios */}
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "#2d2926" }}>
              The 6 Best Pilates Studios in Charlotte
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
              Booking Tips for Charlotte
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
              Gear Charlotte instructors recommend.{" "}
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
              Charlotte Neighborhoods for Pilates
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

        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best reformer Pilates in Charlotte…" />
      </main>
      <Footer />
    </>
  );
}
