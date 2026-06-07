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
  title: "Best Pilates Studios in Columbus, OH (2026) — Curated Guide",
  description: "The best Pilates studios in Columbus — reformer boutiques in Short North, German Village, and Clintonville. Verified 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates columbus", "reformer pilates columbus", "best pilates studios columbus ohio", "pilates studio columbus oh", "pilates classes columbus", "short north pilates", "german village pilates", "pilates ohio", "best reformer pilates columbus"],
  openGraph: {
    title: "Best Pilates Studios in Columbus, OH (2026)",
    description:
      "Curated Pilates studios in Columbus — Short North and German Village reformer boutiques. Verified 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/columbus",
    images: [
      {
        url: "https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Pilates studio in Columbus, OH",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Columbus (2026)",
    description:
      "The 6 best Pilates studios in Columbus — curated, verified, and reviewed for 2026.",
    images: [
      "https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b?w=1200&h=630&fit=crop",
    ],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/columbus",
  },
};

const STUDIOS = [
  {
    number: "1",
    name: "Pilates Plus",
    neighborhood: "Short North",
    priceLevel: "$",
    review:
      "Pilates Plus occupies the best real estate in Columbus's fitness landscape — a studio at the heart of the Short North arts corridor, where High Street culture, Ohio State proximity, and a young professional population converge. The studio's combination of Reformer, Mat Pilates, and yoga under one roof makes it unusually versatile for a city with a large university-adjacent demographic. Student discounts and accessible drop-in rates make regular attendance genuinely practical. ADA accessible with on-street parking nearby. The Short North location means the studio is as easy to reach on foot as it is by car — a genuine rarity in Columbus.",
    address: "1147 N High St, Columbus, OH 43201",
    bestFor: "Short North residents, OSU community, beginners, reformer and mat combo",
    signatureClass: "Reformer & Mat Fusion",
    bookingTip: "Student discounts are available — ask at the front desk before paying full drop-in rates.",
  },
  {
    number: "2",
    name: "Club Pilates Grandview Yard",
    neighborhood: "Grandview Heights",
    priceLevel: "$$",
    review:
      "Club Pilates Grandview Yard benefits from one of the best-designed studio settings in the Columbus market — inside the walkable Grandview Yard mixed-use development, with three hours of free attached garage parking that removes the friction that makes urban studio-going inconsistent. The studio earns consistently strong reviews for welcoming, non-intimidating instruction and a clear progression structure that serves beginners without boring intermediate practitioners. The full Club Pilates class menu is available, including Cardio Sculpt and Suspend, across a wide daily schedule. One of the more reliably pleasant franchise experiences in Ohio.",
    address: "1080 Yard St, Grandview Heights, OH 43212",
    bestFor: "Beginners, Grandview and Clintonville residents, accessible reformer training",
    signatureClass: "Reformer Flow",
    bookingTip: "Free 3-hour garage parking is attached to the development — no meter stress.",
  },
  {
    number: "3",
    name: "Reform Pilates UA",
    neighborhood: "Upper Arlington",
    priceLevel: "$$",
    review:
      "Reform Pilates UA is one of Columbus's most-loved independent studios — a boutique owner-operated practice tucked into Upper Arlington's charming Mallway historic district, where natural light from two sides creates an environment that feels genuinely different from a franchise floor. Instructors are regularly singled out by name in reviews for their ability to tailor sessions to individual goals, including post-surgical recovery, long COVID rehabilitation, and prenatal work. The studio's 5.0 rating is a direct function of the quality of instruction rather than marketing. An exceptional choice for practitioners who want individualized attention within a small-group setting.",
    address: "2064 Arlington Ave, Columbus, OH 43221",
    bestFor: "Upper Arlington residents, individualized instruction, post-rehab, prenatal",
    signatureClass: "Reformer Fundamentals",
    bookingTip: "The small class cap means slots fill fast — book the intro package as soon as possible to claim a recurring spot.",
  },
  {
    number: "4",
    name: "The Pilates Studio (TPS)",
    neighborhood: "Bexley",
    priceLevel: "$$$",
    review:
      "The Pilates Studio is one of Columbus's most established boutique practices — a women-owned, full-apparatus studio in Bexley offering Reformer, Gyrotonic, Power Plate, and TRX programming. The Bexley location serves the area's professional and family communities with a methodologically serious approach that extends well beyond standard reformer group classes. TPS is a recognized training venue through its apparatus-based curriculum, making it one of the few Columbus studios equipped to take practitioners from beginner to advanced apparatus work on the same premises. The Gyrotonic equipment is a notable differentiator — one of few Columbus studios to offer it.",
    address: "2228 E Main St, Bexley, OH 43209",
    bestFor: "Classical Pilates, Gyrotonic, experienced practitioners, Bexley residents",
    signatureClass: "Reformer & Gyrotonic",
    bookingTip: "Gyrotonic slots are limited — book at least a week ahead if that's your focus.",
  },
  {
    number: "5",
    name: "Body Pure Pilates",
    neighborhood: "Northeast Columbus",
    priceLevel: "$$",
    review:
      "Body Pure Pilates is Columbus's most credentialed classical studio — a Power Pilates Host Training Center, which means its instructors are trained to the highest standard in the lineage-based method. The studio offers private, semi-private, small-group apparatus, mat classes, and TRX, with a consistent 4–5 star rating across multiple review platforms driven by real client results: meaningful strength gains, improved mobility, and the kind of body awareness that only develops through principled instruction. The northeast Columbus location serves the Gahanna-adjacent community and is worth the drive for practitioners who want a serious classical practice.",
    address: "200 W Johnstown Rd, Columbus, OH 43230",
    bestFor: "Classical Pilates, Power Pilates lineage, serious practitioners, NE Columbus",
    signatureClass: "Classical Apparatus",
    bookingTip: "Start with a private intake session — the studio uses it to match you with the right class level and format.",
  },
  {
    number: "6",
    name: "Club Pilates East Columbus",
    neighborhood: "East Columbus",
    priceLevel: "$$",
    review:
      "Club Pilates East Columbus fills a genuine gap in the city's reformer landscape — before this location opened, east-side residents faced a significant drive to access franchise reformer instruction. The East Broad Street location draws from the Eastland area and surrounding east-side communities, bringing the Club Pilates class menu and modification-savvy instruction within reach of a neighborhood that previously lacked convenient options. Instructors are praised for their warmth and their ability to make beginners feel immediately capable rather than overwhelmed. A solid, welcoming entry point for east-side Columbus residents new to the method.",
    address: "6919 E Broad St, Columbus, OH 43213",
    bestFor: "East Columbus residents, beginners, accessible reformer training",
    signatureClass: "Reformer 1.0",
    bookingTip: "The intro package is the best entry point — three sessions at a significant discount before choosing a membership tier.",
  },
];

const BOOKING_TIPS = [
  {
    heading: "Columbus winters are long — build a routine before they arrive",
    body: "Columbus winters run from November through March, with cold, grey stretches that make outdoor movement impractical. Practitioners who establish indoor studio routines before the season hold them through winter. Lock in recurring slots in September or October.",
  },
  {
    heading: "OSU's academic calendar shapes studio demand",
    body: "Ohio State's massive enrollment creates pronounced seasonal demand fluctuations. Short North and Grandview studios see surges during the academic year and drops during summer. If you want a specific time slot, book consistently — open availability during the school year is rare.",
  },
  {
    heading: "Columbus is a driving city — choose a studio on your route",
    body: "Unlike denser cities, Columbus requires a car for most studio visits. The most successful practitioners choose studios that fall naturally between home and work, or adjacent to a regular errand. A great studio that requires a special trip will lose to a good studio that requires none.",
  },
  {
    heading: "Classical studios require an intake session first",
    body: "Body Pure Pilates and The Pilates Studio (Bexley) both expect a private intake session before placing you in group or semi-private classes. This is standard practice in classical studios — the intake informs the instructor how to work with your body. It is not optional and is worth doing properly.",
  },
  {
    heading: "Grip socks are required at every reformer studio",
    body: "Universal across Columbus's reformer market. Full-toe grip socks — bring your own to avoid paying front-desk retail prices.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Short North & Clintonville",
    description:
      "Columbus's most vibrant arts corridor runs through Short North and into Clintonville — a walkable, culturally rich stretch that supports accessible studios serving the city's largest young professional and university-adjacent population.",
  },
  {
    name: "Grandview Heights & Upper Arlington",
    description:
      "Columbus's most wellness-invested inner-ring suburbs host both franchise and independent studios serving the area's professional and family communities with high-quality instruction and consistently reliable programming.",
  },
  {
    name: "Bexley & East Side",
    description:
      "The Bexley corridor and the broader east side are home to serious classical studios and newer franchise options serving a health-invested residential community that values genuine instructor expertise.",
  },
  {
    name: "Northeast Columbus & Gahanna",
    description:
      "The northeast quadrant has developed a strong reformer infrastructure serving the suburban residential communities of Gahanna, Westerville, and New Albany, with credentialed classical studios alongside franchise options.",
  },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at every reformer studio in Columbus. Full-toe grip socks are the universal standard.",
    price: "From $16",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat (6mm)",
    note: "Essential for Columbus's mat classes and home practice through the city's long winter season.",
    price: "From $52",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Standard in Columbus's classical studios. Useful for at-home reinforcement between sessions.",
    price: "From $24",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Fabric Resistance Bands",
    note: "Essential for home practice through Columbus's significant winter season.",
    price: "From $22",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
  {
    name: "High-Density Foam Roller",
    note: "Post-class fascia release — a standard recovery tool at Columbus's classical studios.",
    price: "From $32",
    url: "https://www.amazon.com/s?k=high+density+foam+roller+pilates&tag=pilatescollective-20",
  },
];

const RELATED_CITIES = [
  { city: "Cincinnati", country: "United States", href: "/cities/cincinnati", studioCount: 6 },
  { city: "Indianapolis", country: "United States", href: "/cities/indianapolis", studioCount: 6 },
  { city: "Pittsburgh", country: "United States", href: "/cities/pittsburgh", studioCount: 6 },
  { city: "Chicago", country: "United States", href: "/cities/chicago", studioCount: 6 },
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
    title: "How to Find a Good Pilates Studio",
    excerpt:
      "The questions to ask, the red flags to avoid, and what separates a great studio from a mediocre one.",
    href: "/blog/how-to-find-a-good-pilates-studio",
    category: "Education",
    readTime: "6 min read",
    date: "2026-02-01",
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
        { "@type": "ListItem", position: 3, name: "Columbus", item: "https://pilatescollectiveclub.com/cities/columbus" },
      ],
    },
    {
      "@type": "ItemList",
      name: "Best Pilates Studios in Columbus, OH",
      url: "https://pilatescollectiveclub.com/cities/columbus",
      numberOfItems: 6,
      itemListElement: STUDIOS.map((s, i: number) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "ExerciseGym",
          name: s.name,
          description: s.review.slice(0, 160),
          address: { "@type": "PostalAddress", streetAddress: s.address, addressLocality: "Columbus", addressRegion: "OH", addressCountry: "US" },
        },
      })),
    },
    {
      "@type": "Article",
      headline: "Best Pilates Studios in Columbus, OH (2026)",
      url: "https://pilatescollectiveclub.com/cities/columbus",
      dateModified: "2026-06-01",
      author: { "@type": "Organization", name: "Pilates Collective Club" },
      publisher: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com" },
    },
  ],
};

export default function ColumbusPage() {
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
              Best Pilates Studios in Columbus, OH
            </h1>
            <p className="text-sm mb-6" style={{ color: "#9c8678" }}>
              Updated June 2026 · 6 studios reviewed
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "#5c4f47" }}>
              Columbus has become one of the Midwest's most interesting fitness cities. The combination
              of Ohio State's enormous university population, a rapidly expanding tech and professional
              sector, and a serious wellness culture has created a Pilates market that ranges from
              nationally credentialed classical studios in Bexley and the northeast to accessible
              boutiques in the Short North arts corridor. Whether you're a first-timer looking for a
              welcoming reformer introduction or an experienced practitioner seeking Power Pilates or
              Gyrotonic training, Columbus in 2026 has genuine options at every level.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto relative rounded-2xl overflow-hidden" style={{ height: "420px" }}>
            <Image
              src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b?w=1400&h=840&fit=crop"
              alt="Pilates studio in Columbus, OH"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium opacity-90">Columbus, Ohio</p>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "#2d2926" }}>
              The 6 Best Pilates Studios in Columbus
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
              Booking Tips for Columbus
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
              Gear Columbus instructors recommend.{" "}
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
              Columbus Neighborhoods for Pilates
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
          searchPlaceholder="Ask: best reformer Pilates in Columbus…"
        />
      </main>
      <Footer />
    </>
  );
}
