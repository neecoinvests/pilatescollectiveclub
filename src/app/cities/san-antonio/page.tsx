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
  title: "Best Pilates Studios in San Antonio, TX (2026) — Curated Guide",
  description: "The best Pilates studios in San Antonio — top-rated boutiques on the north side plus Club Pilates from Alamo Heights to the far west. Six verified picks, 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates san antonio", "reformer pilates san antonio", "best pilates studios san antonio tx", "pilates studio san antonio", "pilates classes san antonio", "alamo heights pilates", "pilates stone oak tx", "pilates texas", "best reformer pilates san antonio"],
  openGraph: {
    title: "Best Pilates Studios in San Antonio, TX (2026)",
    description:
      "Six curated Pilates studios in San Antonio — Alamo Heights and Pearl District reformer boutiques. Verified 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/san-antonio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1469344804473-ce7d7a5b6086?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Pilates studio in San Antonio, TX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in San Antonio (2026)",
    description:
      "The 6 best Pilates studios in San Antonio — curated, verified, and reviewed for 2026.",
    images: [
      "https://images.unsplash.com/photo-1469344804473-ce7d7a5b6086?w=1200&h=630&fit=crop",
    ],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/san-antonio",
  },
};

const STUDIOS = [
  {
    number: "1",
    name: "Studio 1604 Pilates & Fitness",
    neighborhood: "Stone Oak / North San Antonio",
    priceLevel: "$$$",
    review: "Studio 1604, named for the loop that defines San Antonio's north side, leads ClassPass's San Antonio reformer ranking, with a boutique-first approach that puts member experience and instructor expertise ahead of growth.",
    caveat: "popular classes fill quickly — book ahead.",
    address: "434 N Loop 1604 W, Ste 3103, San Antonio, TX 78232",
    bestFor: "Top-rated boutique reformer on the north side",
    signatureClass: "Reformer Pilates",
    bookingTip: "Book a few days ahead for prime-time classes.",
  },
  {
    number: "2",
    name: "IM=X Pilates San Antonio",
    neighborhood: "North Central / Huebner Corridor",
    priceLevel: "$$$",
    review: "IM=X Pilates on Huebner Road combines reformer Pilates with the IM=X functional training system and is rated 4.9 on ClassPass.",
    caveat: "the IM=X format adds functional strength work — different from classical Pilates.",
    address: "15614 Huebner Rd, #114, San Antonio, TX 78248",
    bestFor: "Reformer plus functional IM=X training",
    signatureClass: "IM=X Reformer",
    bookingTip: "Start with a beginner class to learn the format.",
  },
  {
    number: "3",
    name: "Club Pilates Quarry Market",
    neighborhood: "Alamo Heights / Quarry",
    priceLevel: "$$",
    review: "Club Pilates at the Quarry Market on East Basse Road serves Alamo Heights and central-north San Antonio with levelled group reformer classes.",
    caveat: "a franchise format — consistent, but less personalised than an independent studio.",
    address: "255 E Basse Rd, #360, San Antonio, TX 78209",
    bestFor: "Alamo Heights residents",
    signatureClass: "Reformer Flow",
    bookingTip: "Use the intro offer before committing.",
  },
  {
    number: "4",
    name: "Club Pilates Dominion",
    neighborhood: "Dominion / North San Antonio",
    priceLevel: "$$",
    review: "Club Pilates Dominion on IH-10 West serves the Dominion and north-west corridor with levelled group reformer classes.",
    caveat: "a franchise format — consistent, but less personalised than an independent studio.",
    address: "21803 IH-10 W, San Antonio, TX 78257",
    bestFor: "North-west San Antonio residents",
    signatureClass: "Reformer Flow",
    bookingTip: "Morning classes fill first — book two days ahead.",
  },
  {
    number: "5",
    name: "Club Pilates Stone Oak",
    neighborhood: "Stone Oak",
    priceLevel: "$$",
    review: "Club Pilates Stone Oak on Stone Oak Parkway serves the far north side with levelled group reformer classes.",
    caveat: "a franchise format — consistent, but less personalised than an independent studio.",
    address: "20210 Stone Oak Pkwy, Ste 105, San Antonio, TX 78258",
    bestFor: "Stone Oak residents",
    signatureClass: "Reformer Flow",
    bookingTip: "Memberships work out cheapest if you train three or more times a week.",
  },
  {
    number: "6",
    name: "Club Pilates Stevens Ranch",
    neighborhood: "Stevens Ranch / Far West Side",
    priceLevel: "$$",
    review: "Club Pilates Stevens Ranch on Potranco Road brings levelled group reformer classes to the growing far west side.",
    caveat: "a franchise format — consistent, but less personalised than an independent studio.",
    address: "14244 Potranco Rd, San Antonio, TX 78253",
    bestFor: "Far-west-side residents",
    signatureClass: "Reformer Flow",
    bookingTip: "Use the intro offer to try the studio first.",
  },
];

const BOOKING_TIPS = [
  {
    heading: "San Antonio's heat is a scheduling variable",
    body: "Summers in San Antonio run hot — temperatures exceeding 100°F are routine from June through September. Studios are climate-controlled and become the preferred movement option during these months. Demand for early morning and evening classes increases significantly in summer; book those windows in advance before the heat sets in.",
  },
  {
    heading: "The military community creates non-standard scheduling needs",
    body: "San Antonio is home to multiple large military installations — Joint Base San Antonio encompasses Lackland, Fort Sam Houston, and Randolph. A significant portion of studio clientele works military or adjacent schedules. Many west- and south-side studios accommodate early morning and midday classes that serve shift-based schedules — worth asking about if your hours are non-standard.",
  },
  {
    heading: "Intro packages are the most cost-effective entry point",
    body: "Every major San Antonio studio offers a new-client introductory rate — typically three reformer sessions for the price of one drop-in. This is the most financially sensible way to audition a studio before committing to a monthly membership, and gives you enough sessions to judge instructor quality and community fit.",
  },
  {
    heading: "The city is large — choose your quadrant wisely",
    body: "San Antonio spans an enormous geographic footprint. The IH-10 corridor, Loop 1604, and US-281 can add 20–40 minutes of commute time between quadrants at peak hours. Select a studio within your residential or work quadrant rather than the theoretically 'best' studio across town — attendance consistency is the most important variable for any practice.",
  },
  {
    heading: "Grip socks are required at every reformer studio",
    body: "Universal across San Antonio's studio market. Bring your own — front-desk retail costs two to three times the Amazon price. Full-toe grip socks provide the most stability on reformer footbars.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Alamo Heights & Quarry District",
    description:
      "San Antonio's most walkable and culturally rich inner-city neighborhoods. The Quarry District anchors the Alamo Heights corridor with strong wellness infrastructure — studios here serve a sophisticated clientele and maintain correspondingly high instruction standards. A natural starting point for central San Antonio practitioners.",
  },
  {
    name: "Stone Oak & North San Antonio",
    description:
      "The fast-growing far north corridor along US-281 and Loop 1604 is home to San Antonio's most affluent suburban communities. Stone Oak studios serve the area's professional and medical families with high-quality franchise and independent options — convenient for residents who work in the corridor.",
  },
  {
    name: "Dominion & IH-10 West Corridor",
    description:
      "The Dominion and Shavano Park communities along IH-10 West represent San Antonio's most exclusive residential enclave, home to the city's most premium studio offerings. Studios here serve a discerning clientele with correspondingly high expectations for instruction quality and environment.",
  },
  {
    name: "Alamo Ranch & Southwest Side",
    description:
      "San Antonio's most rapidly growing suburban corridor serves a large military and healthcare population with accessible, practically priced reformer programming. Studios here are well-suited to practitioners on non-standard schedules and those new to the method.",
  },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at every reformer studio in San Antonio. Full-toe grip socks are the universal standard.",
    price: "From $15",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat (6mm)",
    note: "Essential for mat classes and home practice during San Antonio's extended hot seasons.",
    price: "From $18",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Standard in classical studios. Useful for at-home reinforcement between studio sessions.",
    price: "From $15",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Fabric Resistance Bands",
    note: "Portable and practical for home practice on San Antonio's many days when outdoor movement is too hot.",
    price: "From $10",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
  {
    name: "High-Density Foam Roller",
    note: "Post-class fascia release — essential for San Antonio's active military and athletic community.",
    price: "From $13",
    url: "https://www.amazon.com/s?k=high+density+foam+roller+pilates&tag=pilatescollective-20",
  },
];

const HOME_REFORMERS = [
  { tag: "Budget Pick", name: "Stamina AeroPilates 287", note: "An accessible entry point to home reformer work — three bungee-cord resistance, a padded footbar and an adjustable headrest.", price: "$359", url: "https://www.amazon.com/dp/B01FMODVAE?tag=pilatescollective-20" },
  { tag: "Mid-Range Pick", name: "AeroPilates Pro XP 557", note: "AeroPilates' top-of-the-range home reformer, a step up for practitioners training several times a week.", price: "$1,330", url: "https://www.amazon.com/dp/B0012TJI8S?tag=pilatescollective-20" },
  { tag: "Buy Once", name: "Balanced Body Allegro Stretch Reformer", note: "Studio-grade and made to order — an anodised aluminium frame, nonslip standing platform and 36-inch adjustable footbar, with a longer, wider carriage for taller users.", price: "$3,710", url: "https://www.amazon.com/dp/B093R8DYC9?tag=pilatescollective-20" },
];

const RELATED_CITIES = [
  { city: "Austin", country: "United States", href: "/cities/austin", studioCount: 6 },
  { city: "Houston", country: "United States", href: "/cities/houston", studioCount: 6 },
  { city: "Dallas", country: "United States", href: "/cities/dallas", studioCount: 6 },
  { city: "Miami", country: "United States", href: "/cities/miami", studioCount: 6 },
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
    title: "Pilates for Athletes",
    excerpt:
      "How Pilates builds the stability, mobility, and body awareness that competitive and recreational athletes need.",
    href: "/blog/pilates-for-athletes",
    category: "Performance",
    readTime: "7 min read",
    date: "2026-01-20",
    imageUrl:
      "https://images.unsplash.com/photo-1469344804473-ce7d7a5b6086?w=800&h=450&fit=crop",
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
        { "@type": "ListItem", position: 3, name: "San Antonio", item: "https://pilatescollectiveclub.com/cities/san-antonio" },
      ],
    },
    {
      "@type": "ItemList",
      name: "Best Pilates Studios in San Antonio, TX",
      url: "https://pilatescollectiveclub.com/cities/san-antonio",
      numberOfItems: 6,
      itemListElement: STUDIOS.map((s, i: number) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "ExerciseGym",
          name: s.name,
          description: s.review.slice(0, 160),
          address: { "@type": "PostalAddress", streetAddress: s.address, addressLocality: "San Antonio", addressRegion: "TX", addressCountry: "US" },
        },
      })),
    },
    {
      "@type": "Article",
      headline: "Best Pilates Studios in San Antonio, TX (2026)",
      url: "https://pilatescollectiveclub.com/cities/san-antonio",
      dateModified: "2026-06-01",
      author: { "@type": "Organization", name: "Pilates Collective Club" },
      publisher: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com" },
    },
  ],
};

export default function SanAntonioPage() {
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
              Best Pilates Studios in San Antonio, TX
            </h1>
            <p className="text-sm mb-6" style={{ color: "#9c8678" }}>
              Updated October 2026 · 6 studios reviewed
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "#5c4f47" }}>
              San Antonio is the United States' seventh-largest city and one of its most underrated wellness markets.
              The city's vast geography — stretching from the inner-city corridors of Alamo Heights to the suburban
              sprawl of Stone Oak and Alamo Ranch — has produced a Pilates scene that reflects its diversity:
              military-adjacent studios built for high-frequency training, affluent north-side boutiques catering
              to discerning professionals, and accessible west-side options serving the city's large family and
              healthcare communities. We've identified the six San Antonio studios that consistently deliver in 2026.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto relative rounded-2xl overflow-hidden" style={{ height: "420px" }}>
            <Image
              src="https://images.unsplash.com/photo-1469344804473-ce7d7a5b6086?w=1400&h=840&fit=crop"
              alt="Pilates studio in San Antonio, TX"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium opacity-90">San Antonio, Texas</p>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: "#fdf3ec", borderTop: "1px solid rgba(184,151,126,0.35)", borderBottom: "1px solid rgba(184,151,126,0.35)" }} className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#b8977e" }}>
              Before You Go
            </p>
            <h2 className="text-2xl font-bold mb-2" style={{ color: "#2d2926" }}>
              What to Bring to Class
            </h2>
            <p className="text-sm mb-8" style={{ color: "#9c8678" }}>
              Gear San Antonio instructors recommend.{" "}
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
              The 6 Best Pilates Studios in San Antonio
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
              Booking Tips for San Antonio
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

        <section style={{ backgroundColor: "#f6f3f2" }} className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8" style={{ color: "#2d2926" }}>
              San Antonio Neighborhoods for Pilates
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
          searchPlaceholder="Ask: best reformer Pilates in San Antonio…"
        />
      </main>
      <Footer />
    </>
  );
}
