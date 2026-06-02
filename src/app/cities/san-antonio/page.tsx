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
  title: "Best Pilates Studios in San Antonio, TX (2026) — Curated & Verified",
  description:
    "Discover the 6 best Pilates studios in San Antonio, TX. From Alamo Heights boutiques to North Side reformer studios — expert picks, honest reviews, and booking tips for 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: [
    "pilates studios San Antonio TX",
    "best pilates San Antonio",
    "reformer pilates San Antonio",
    "Alamo Heights pilates",
    "Stone Oak pilates studio",
    "San Antonio pilates classes 2026",
    "SATX fitness studios",
    "Club Pilates San Antonio",
  ],
  openGraph: {
    title: "Best Pilates Studios in San Antonio, TX (2026) — Curated & Verified",
    description:
      "Discover the 6 best Pilates studios in San Antonio, TX. From Alamo Heights to the Dominion corridor — expert picks and booking tips for 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/san-antonio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Pilates studio in San Antonio, TX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in San Antonio, TX (2026)",
    description:
      "The 6 best Pilates studios in San Antonio — curated, verified, and reviewed for 2026.",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=630&fit=crop",
    ],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/san-antonio",
  },
};

const STUDIOS = [
  {
    number: "1",
    name: "Club Pilates Quarry Market",
    neighborhood: "Alamo Heights / Quarry",
    priceLevel: "$$$",
    review:
      "Club Pilates Quarry Market is San Antonio's most centrally located and consistently top-rated reformer studio, drawing a loyal following from the Alamo Heights, Olmos Park, and Monte Vista communities. The Quarry District location is polished and professionally run, with an instructor team that earns consistent five-star reviews for attentiveness and alignment cues across all class levels. The dense schedule and membership tiers make it the practical anchor for practitioners who want to train three or more times a week without hunting for availability.",
    address: "255 E Basse Rd #360, San Antonio, TX 78209",
    bestFor: "Alamo Heights and inner-city residents, all levels, consistent reformer programming",
    signatureClass: "Reformer Flow",
    bookingTip: "Early morning and post-work slots fill 48 hours out — book on Monday for the full week ahead.",
  },
  {
    number: "2",
    name: "Club Pilates Dominion",
    neighborhood: "Dominion / North San Antonio",
    priceLevel: "$$$",
    review:
      "Club Pilates Dominion serves one of San Antonio's most affluent corridors — the gated communities and country clubs of the IH-10 West corridor — with a franchise reformer program that consistently meets the community's high expectations. The Dominion clientele is health-invested and experienced, which has attracted an instructor team that engages genuinely with the curriculum rather than mechanically. The wide schedule accommodates the flexible patterns of the corridor's professional and retired population, and membership tiers make regular attendance financially practical.",
    address: "21803 IH-10 W, San Antonio, TX 78257",
    bestFor: "Dominion and northwest corridor residents, experienced practitioners, memberships",
    signatureClass: "Flow",
    bookingTip: "Morning drop-in slots are the first to fill with the north-side residential crowd — book two days ahead.",
  },
  {
    number: "3",
    name: "Club Pilates Alamo Ranch",
    neighborhood: "Alamo Ranch / Far West Side",
    priceLevel: "$$",
    review:
      "Club Pilates Alamo Ranch brings accessible, well-structured reformer programming to San Antonio's fastest-growing suburban corridor. The Alamo Ranch and Helotes community is active and family-oriented — lots of military families, healthcare workers, and young professionals who use Pilates as a year-round movement anchor. The studio earns strong reviews for its welcoming atmosphere and instructors who are genuinely patient with new clients. Membership pricing is among the most practical in the metro.",
    address: "12016 Alamo Ranch Pkwy #109, San Antonio, TX 78253",
    bestFor: "West-side and Helotes residents, beginners, military families, memberships",
    signatureClass: "Club Reformer 57",
    bookingTip: "Post-school-drop-off morning slots fill fast with the family-oriented west-side demographic.",
  },
  {
    number: "4",
    name: "Club Pilates Stevens Ranch",
    neighborhood: "Stevens Ranch / Southwest",
    priceLevel: "$$",
    review:
      "Club Pilates Stevens Ranch serves San Antonio's expanding southwest suburban population with consistent, professionally taught reformer programming at accessible membership rates. The southwest-side demographic skews military and healthcare — two communities with strong motivation for structured movement practice — and the studio has built a loyal base of regulars who appreciate both the instruction quality and the convenient location. Instructors receive consistent marks for clear cueing and attentiveness to beginners.",
    address: "14244 Potranco Rd, San Antonio, TX 78253",
    bestFor: "Southwest-side and Lackland-adjacent residents, beginners, high-frequency practitioners",
    signatureClass: "Reformer 1.5",
    bookingTip: "The 5:30 PM class fills first with the post-shift military and healthcare crowd — book 48 hours ahead.",
  },
  {
    number: "5",
    name: "IM=X Pilates San Antonio",
    neighborhood: "North Central / Huebner Corridor",
    priceLevel: "$$$",
    review:
      "IM=X Pilates is a nationally recognized boutique brand that brings a more athletic, performance-oriented approach to the reformer than the standard franchise experience. The North Central San Antonio location serves the USAA, Valero, and medical corridor professional community with small-group classes designed to challenge the body beyond beginner format. The IM=X method emphasizes muscular endurance and core integration alongside traditional Pilates principles, making it a strong choice for athletes and fitness-focused practitioners who want more intensity in their sessions.",
    address: "15614 Huebner Rd #114, San Antonio, TX 78248",
    bestFor: "Athletic practitioners, fitness-forward clients, North Central professionals",
    signatureClass: "IM=X Athletic Reformer",
    bookingTip: "Class sizes are capped small — book the new-client intro to get placed in the right level before joining regular classes.",
  },
  {
    number: "6",
    name: "Studio 1604 Pilates & Fitness",
    neighborhood: "Stone Oak / North San Antonio",
    priceLevel: "$$$",
    review:
      "Studio 1604 is Stone Oak's most established independent Pilates and fitness studio, serving the north San Antonio corridor with a program that blends reformer Pilates with functional fitness training. The Stone Oak community — affluent, family-oriented, and deeply invested in physical wellness — has supported this studio through years of consistent quality. Classes are well-structured and instructors are experienced; the studio is particularly strong for practitioners who want a step beyond the standard franchise experience and are interested in how Pilates integrates with broader fitness goals.",
    address: "434 N Loop 1604 W Acc Rd, San Antonio, TX 78232",
    bestFor: "Stone Oak and Far North Side residents, fitness-integrated Pilates, experienced practitioners",
    signatureClass: "Reformer & Functional Fitness",
    bookingTip: "The studio's loyal North Side community means popular time slots fill quickly — set up recurring bookings once you find your preferred class.",
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
    price: "From $16",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat (6mm)",
    note: "Essential for mat classes and home practice during San Antonio's extended hot seasons.",
    price: "From $52",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Standard in classical studios. Useful for at-home reinforcement between studio sessions.",
    price: "From $24",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Fabric Resistance Bands",
    note: "Portable and practical for home practice on San Antonio's many days when outdoor movement is too hot.",
    price: "From $22",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
  {
    name: "High-Density Foam Roller",
    note: "Post-class fascia release — essential for San Antonio's active military and athletic community.",
    price: "From $32",
    url: "https://www.amazon.com/s?k=high+density+foam+roller+pilates&tag=pilatescollective-20",
  },
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
              Updated June 2026 · 6 studios reviewed
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
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1400&h=840&fit=crop"
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

        <section className="px-6 pb-20">
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

        <section style={{ backgroundColor: "#fcf9f8" }} className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
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
