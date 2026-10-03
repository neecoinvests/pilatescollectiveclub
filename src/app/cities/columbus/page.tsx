import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import { jsonLdHtml } from "@/lib/schema";

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
    priceLevel: "$$",
    review: "Pilates Plus is a woman-owned, LGBTQ-friendly studio on North High Street in the Short North, offering reformer classes (including 45-minute beginner reformer), mat Pilates and yoga under one roof. It is rated 4.8 from more than 100 reviews on ClassPass, and reviewers single out instructors by name for welcoming beginners.",
    caveat: "a mixed reformer, mat and yoga studio — if you want classical apparatus work beyond the reformer, Body Pure Pilates is the better fit.",
    address: "1147 N High St, Columbus, OH 43201",
    bestFor: "Beginner-friendly reformer and mat classes in the Short North",
    signatureClass: "Beginner Reformer (45 min)",
    bookingTip: "Start with the 45-minute beginner reformer class before moving to mixed-level classes.",
  },
  {
    number: "2",
    name: "Club Pilates Grandview Yard",
    neighborhood: "Grandview Heights",
    priceLevel: "$$$",
    review: "Club Pilates Grandview Yard sits inside the walkable Grandview Yard mixed-use development and offers the full Club Pilates class menu — including Reformer Flow, Cardio Sculpt and Suspend — in a levelled system that suits beginners without boring intermediate members.",
    caveat: "a franchise format — consistent and well-organised, but less individual than an owner-run studio.",
    address: "1080 Yard St, Grandview Heights, OH 43212",
    bestFor: "Structured, levelled reformer classes west of downtown",
    signatureClass: "Reformer Flow",
    bookingTip: "Check the Grandview Yard parking rules before your first visit — the development has garage parking.",
  },
  {
    number: "3",
    name: "Reform Pilates",
    neighborhood: "Upper Arlington (Mallway)",
    priceLevel: "$$",
    review: "Reform Pilates is a boutique studio of more than 1,400 square feet in Upper Arlington's Mallway, with large windows, natural light and newly remodelled plank flooring. It offers private sessions, small group classes at beginner, intermediate and advanced levels, and online classes, and is within walking distance of shops with easy parking out front and on Arlington Avenue.",
    caveat: "its online review count is small, so treat ratings as a promising signal rather than proof.",
    address: "2064 Arlington Ave, Columbus, OH 43221",
    bestFor: "Small-group and private reformer in Upper Arlington",
    signatureClass: "Small Group Reformer",
    bookingTip: "Small groups fill quickly — book a recurring slot once you find a time that suits you.",
  },
  {
    number: "4",
    name: "Internal Pilates",
    neighborhood: "Clintonville",
    priceLevel: "$$",
    review: "Internal Pilates is a boutique reformer Pilates and fitness studio on North High Street in Clintonville, and one of the highest-rated reformer studios in Columbus on ClassPass (4.9 from more than 1,000 reviews). Alongside small-group reformer classes it runs Jump Pilates cardio classes, which add a cardio element and work the lower body and core in a different way.",
    caveat: "Jump Pilates classes are intermediate level — build a reformer foundation first.",
    address: "4700 N High St, Columbus, OH 43214",
    bestFor: "Small-group reformer and Jump Pilates cardio",
    signatureClass: "Jump Pilates Cardio",
    bookingTip: "Try a standard reformer class before booking a Jump class.",
  },
  {
    number: "5",
    name: "Body Pure Pilates",
    neighborhood: "Northeast Columbus",
    priceLevel: "$$$",
    review: "Body Pure Pilates and Wellness teaches the classical Pilates method with Power Pilates certified instructors, and it also offers the Gyrotonic and Gyrokinesis methods, TRX and Xtend Barre, plus massage therapy and muscle activation therapy. Clients can choose one-to-one sessions, small groups or classes, and the studio has showers, towels and free parking.",
    caveat: "the breadth of services (Gyrotonic, barre, TRX, massage) means it is a full wellness studio rather than a Pilates-only room.",
    address: "200 W Johnstown Rd, Columbus, OH 43230",
    bestFor: "Classical Pilates and Gyrotonic on the east side",
    signatureClass: "Classical Apparatus",
    bookingTip: "Start with a private session — the studio uses it to match you with the right class level.",
  },
  {
    number: "6",
    name: "Club Pilates East Columbus",
    neighborhood: "East Columbus",
    priceLevel: "$$",
    review: "Club Pilates East Columbus on East Broad Street brings levelled group reformer classes to the east side, with weekday classes from 8am to 8pm and weekend classes until 2pm. It is a convenient entry point for east-side residents new to the method.",
    caveat: "a franchise studio — reliable structure, less individual programming.",
    address: "6919 E Broad St, Columbus, OH 43213",
    bestFor: "East-side residents new to reformer Pilates",
    signatureClass: "Reformer Flow",
    bookingTip: "An intro offer is the best way to start before choosing a membership.",
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
    heading: "Start classical studios with a private session",
    body: "Classical studios such as Body Pure Pilates generally recommend a private session before you join group or semi-private classes. It lets the instructor learn how to work with your body, and it makes group classes far easier to follow.",
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
    price: "From $15",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat (6mm)",
    note: "Essential for Columbus's mat classes and home practice through the city's long winter season.",
    price: "From $18",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Standard in Columbus's classical studios. Useful for at-home reinforcement between sessions.",
    price: "From $15",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Fabric Resistance Bands",
    note: "Essential for home practice through Columbus's significant winter season.",
    price: "From $10",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
  {
    name: "High-Density Foam Roller",
    note: "Post-class fascia release — a standard recovery tool at Columbus's classical studios.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
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
              Updated October 2026 · 6 studios reviewed
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "#5c4f47" }}>
              Columbus has become one of the Midwest's most interesting fitness cities. The combination
              of Ohio State's enormous university population, a rapidly expanding tech and professional
              sector, and a serious wellness culture has created a Pilates market that ranges from
              Power Pilates-certified classical teaching in the northeast to accessible
              boutiques in the Short North and Clintonville. Whether you're a first-timer looking for a
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

        <section style={{ backgroundColor: "#fdf3ec", borderTop: "1px solid rgba(184,151,126,0.35)", borderBottom: "1px solid rgba(184,151,126,0.35)" }} className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#b8977e" }}>
              Before You Go
            </p>
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

        <section className="px-6 py-20">
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
          searchPlaceholder="Ask: best reformer Pilates in Columbus…"
        />
      </main>
      <Footer />
    </>
  );
}
