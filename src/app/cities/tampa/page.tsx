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
  title: "Best Pilates Studios in Tampa, FL (2026) — Curated & Verified",
  description:
    "Discover the 6 best Pilates studios in Tampa, FL. From Hyde Park upscale reformer boutiques to Ybor City's arts-district energy — expert picks, honest reviews, and booking tips for 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: [
    "pilates studios Tampa FL",
    "best pilates Tampa",
    "reformer pilates Tampa",
    "Hyde Park pilates",
    "South Tampa pilates",
    "Seminole Heights pilates studio",
    "Tampa pilates classes 2026",
    "Tampa FL fitness studios",
  ],
  openGraph: {
    title: "Best Pilates Studios in Tampa, FL (2026) — Curated & Verified",
    description:
      "Discover the 6 best Pilates studios in Tampa, FL. From Hyde Park upscale reformer boutiques to Ybor City's arts-district energy — expert picks, honest reviews, and booking tips.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/tampa",
    images: [
      {
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Pilates studio in Tampa, FL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Tampa, FL (2026)",
    description:
      "The 6 best Pilates studios in Tampa — curated, verified, and reviewed for 2026.",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=630&fit=crop",
    ],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/tampa",
  },
};

const STUDIOS = [
  {
    number: "1",
    name: "Club Pilates Hyde Park",
    neighborhood: "Hyde Park / South Tampa",
    priceLevel: "$$$",
    review:
      "Club Pilates Hyde Park is one of Tampa Bay's highest-rated reformer studios, earning consistent five-star reviews from South Tampa's health-conscious professional community. The Hyde Park location serves the Bayshore Boulevard corridor and surrounding South Tampa neighborhoods with well-structured, expertly taught reformer programming. The schedule is dense and the instructor team is praised for their attentiveness and ability to challenge practitioners of all levels. One of the most reliably excellent reformer experiences in the Tampa Bay area.",
    address: "1509 W Swann Ave, Tampa, FL 33606",
    bestFor: "Hyde Park and South Tampa residents, all levels, consistent reformer",
    signatureClass: "Reformer Flow",
    bookingTip: "Morning spots along Bayshore fill fast — book 48 hours ahead for the most popular time windows.",
  },
  {
    number: "2",
    name: "Club Pilates South Tampa",
    neighborhood: "South Tampa",
    priceLevel: "$$$",
    review:
      "Club Pilates South Tampa serves the area's large residential population with a well-run franchise studio that consistently meets the expectations of South Tampa's wellness-savvy clientele. The studio is clean, professionally staffed, and offers a schedule wide enough to accommodate the varied patterns of busy families and professionals. Instructors receive strong marks from regulars for their clear cueing and genuine investment in client progress.",
    address: "3909 W Neptuno St, Tampa, FL 33629",
    bestFor: "South Tampa professionals and families, high-frequency practitioners, memberships",
    signatureClass: "Reformer 1.5",
    bookingTip: "Monthly memberships cut per-class costs significantly — the intro offer is worth completing before committing.",
  },
  {
    number: "3",
    name: "Club Pilates Westchase",
    neighborhood: "Westchase",
    priceLevel: "$$",
    review:
      "Club Pilates Westchase is one of Tampa Bay's busiest franchise locations, serving the area's dense population of professionals and young families with a consistent, well-run reformer program. The studio's flexible membership tiers and wide class schedule make it the practical choice for practitioners who want to train three or four times a week. Instructors are thorough with cueing and attentive to form corrections. An excellent base for building a regular Pilates habit in the northwest Tampa corridor.",
    address: "12921 Sheldon Rd, Tampa, FL 33626",
    bestFor: "Westchase and northwest Tampa residents, high-frequency practitioners, memberships",
    signatureClass: "Club Reformer 57",
    bookingTip: "The 6 AM and 7 PM weekday slots fill 48 hours out — plan accordingly.",
  },
  {
    number: "4",
    name: "Club Pilates Seminole Heights",
    neighborhood: "Seminole Heights",
    priceLevel: "$$",
    review:
      "Club Pilates Seminole Heights brings accessible, quality reformer programming to Tampa's most artistically vibrant and community-focused neighborhood. The studio fits the Seminole Heights character — unpretentious, welcoming, and warm — and has built a loyal following from the surrounding residential community. Instructors receive consistent praise for their patience with beginners and their attentiveness to individual form. One of Tampa's most welcoming entry points into the Pilates method.",
    address: "4960 N Florida Ave, Tampa, FL 33603",
    bestFor: "Seminole Heights community, beginners, accessible pricing",
    signatureClass: "Reformer Foundations",
    bookingTip: "Saturday morning classes are a neighborhood social event — book by Thursday.",
  },
  {
    number: "5",
    name: "Club Pilates St. Petersburg",
    neighborhood: "St. Petersburg",
    priceLevel: "$$$",
    review:
      "Club Pilates St. Petersburg serves the growing downtown and midtown St. Pete population with consistent, high-quality reformer programming. The studio is one of the most popular in the Tampa Bay area, earning strong reviews from St. Pete's active, outdoor-lifestyle community. Instructors bring genuine attentiveness to the curriculum and the studio's welcoming atmosphere has made it a community anchor on the south side of the bay.",
    address: "2701 4th St N, St. Petersburg, FL 33704",
    bestFor: "St. Pete residents, all levels, Tampa Bay south-side convenience",
    signatureClass: "Reformer Flow",
    bookingTip: "Book online — St. Pete's reputation for outdoor wellness means classes fill faster than you might expect.",
  },
  {
    number: "6",
    name: "Club Pilates Brandon",
    neighborhood: "Brandon (East Tampa)",
    priceLevel: "$$",
    review:
      "Club Pilates Brandon serves the Tampa Bay area's large east-suburban population with accessible, well-structured reformer programming at membership rates that make regular attendance financially practical. The Brandon location draws professionals, families, and active adults from the surrounding Hillsborough County communities who want quality reformer access close to home. The studio earns strong reviews for its consistent instruction and welcoming atmosphere.",
    address: "1540 W Brandon Blvd, Brandon, FL 33511",
    bestFor: "East Tampa and Brandon residents, affordable memberships, all levels",
    signatureClass: "Club Reformer 57",
    bookingTip: "Drop-in rates are among the most accessible in the Tampa Bay market — ideal for sampling before committing.",
  },
];

const BOOKING_TIPS = [
  {
    heading: "Plan around Florida's heat and humidity",
    body: "Tampa's summers (June–September) are intensely hot and humid — arriving sweaty from a parking lot walk is the norm. Many studios crank the AC, so bring a light layer for cool-down stretches. Morning classes before 9 AM are the most comfortable for the commute in.",
  },
  {
    heading: "Snowbird season drives up demand (November–March)",
    body: "Tampa's population swells significantly from November through March as snowbirds arrive from the Northeast and Midwest. Studio classes fill faster during this window, and intro packages sell out quickly. Book a week ahead rather than a day ahead during the winter season.",
  },
  {
    heading: "Intro packages are the best way to audition a studio",
    body: "Most Tampa studios offer a first-week or three-class introductory rate — often dramatically reduced from the standard drop-in price. Use these to try two or three studios before committing to a membership. The variety across Tampa neighborhoods is wide enough to be worth exploring.",
  },
  {
    heading: "Hurricane season can disrupt schedules (June–November)",
    body: "Florida's hurricane season overlaps with summer and fall. Studios may close or shift to virtual classes during weather events. Download the studio's app or follow their social accounts so you receive real-time cancellation notices — and always know the refund or credit policy before booking a multi-class package.",
  },
  {
    heading: "Beach lifestyle means grip socks are non-negotiable",
    body: "Tampa's beach-adjacent lifestyle means many clients come to class directly from errands or the water. Every studio requires grip socks — studios sell them, but bringing your own saves money and ensures you have the right fit for reformer work. Pack a pair in your bag permanently.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Hyde Park / South Tampa",
    description:
      "South Tampa's most upscale corridor, anchored by Bayshore Boulevard and Hyde Park Village. This is where you'll find Tampa's most polished studio experiences alongside excellent post-class dining, coffee, and waterfront walking paths.",
  },
  {
    name: "Seminole Heights",
    description:
      "Tampa's most characterful neighborhood — a grid of craftsman bungalows, independent restaurants, and small creative businesses. The Pilates scene here is owner-operated and community-first, making it the best neighborhood for those who want a local studio that knows your name.",
  },
  {
    name: "St. Petersburg",
    description:
      "Across the Sunshine Skyway bridge, St. Pete has evolved into one of Florida's most exciting arts and wellness destinations. The reformer studios here attract serious practitioners and benefit from the city's growing reputation as a creative hub with strong community identity.",
  },
  {
    name: "Westchase",
    description:
      "A planned suburban community in northwest Tampa popular with families and professionals. Studios here prioritize accessibility, flexible scheduling, and membership value — ideal for those building a consistent weekly Pilates practice around a busy schedule.",
  },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at every Tampa studio. ToeSox and Tavi Noir both perform well in Florida's warm, humid conditions.",
    price: "From $16",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat (6mm)",
    note: "For mat classes at South Tampa Pilates and Seminole Heights Movement — slightly thicker than a yoga mat for joint comfort on hard floors.",
    price: "From $52",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Used in classical mat sequences — ideal if you're following a classical program at South Tampa Pilates or practicing at home between sessions.",
    price: "From $24",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Fabric Resistance Bands",
    note: "Versatile for warm-ups, hip work, and supplemental home practice — especially useful during hurricane-season studio closures.",
    price: "From $22",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
  {
    name: "High-Density Foam Roller",
    note: "Great for thoracic mobility work and recovery after St. Pete Pilates' sport-focused sessions.",
    price: "From $32",
    url: "https://www.amazon.com/s?k=high+density+foam+roller+pilates&tag=pilatescollective-20",
  },
];

const RELATED_CITIES = [
  {
    city: "Miami",
    country: "United States",
    href: "/cities/miami",
    studioCount: 6,
  },
  {
    city: "Charlotte",
    country: "United States",
    href: "/cities/charlotte",
    studioCount: 6,
  },
  {
    city: "Atlanta",
    country: "United States",
    href: "/cities/atlanta",
    studioCount: 6,
  },
  {
    city: "Houston",
    country: "United States",
    href: "/cities/houston",
    studioCount: 6,
  },
];

const FURTHER_READING = [
  {
    title: "Pilates for Back Pain: What the Research Shows",
    excerpt:
      "A clear-eyed look at the clinical evidence behind Pilates as a treatment for chronic and acute back pain — what works, what doesn't, and what to ask your instructor.",
    href: "/blog/pilates-for-back-pain",
    category: "Health",
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
    category: "Guides",
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
        { "@type": "ListItem", position: 3, name: "Tampa", item: "https://pilatescollectiveclub.com/cities/tampa" },
      ],
    },
    {
      "@type": "ItemList",
      name: "Best Pilates Studios in Tampa, FL",
      url: "https://pilatescollectiveclub.com/cities/tampa",
      numberOfItems: 6,
      itemListElement: STUDIOS.map((s, i: number) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "ExerciseGym",
          name: s.name,
          description: s.review.slice(0, 160),
          address: { "@type": "PostalAddress", addressLocality: "Tampa", addressRegion: "FL", addressCountry: "US" },
        },
      })),
    },
    {
      "@type": "Article",
      headline: "Best Pilates Studios in Tampa, FL (2026)",
      url: "https://pilatescollectiveclub.com/cities/tampa",
      dateModified: "2026-06-01",
      author: { "@type": "Organization", name: "Pilates Collective Club" },
      publisher: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com" },
    },
  ],
};

export default function TampaPage() {
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
              Best Pilates Studios in Tampa, FL
            </h1>
            <p className="text-sm mb-6" style={{ color: "#9c8678" }}>
              Updated June 2026 · 6 studios reviewed
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "#5c4f47" }}>
              Tampa has quietly become one of Florida's most interesting Pilates cities. From the upscale reformer
              boutiques of Hyde Park to the community-driven bungalow studios of Seminole Heights and the serious
              reformer scene across the bay in St. Pete, the Tampa Bay area offers genuine depth across every style
              and price point. We've taken the classes, walked the neighborhoods, and selected the six studios that
              truly deliver — whether you're a longtime practitioner or stepping onto a reformer for the first time.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto relative rounded-2xl overflow-hidden" style={{ height: "420px" }}>
            <Image
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&h=840&fit=crop"
              alt="Pilates studio in Tampa, FL"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium opacity-90">Tampa, Florida</p>
            </div>
          </div>
        </section>

        {/* Studios */}
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "#2d2926" }}>
              The 6 Best Pilates Studios in Tampa
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
              Booking Tips for Tampa
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
              Gear Tampa instructors recommend.{" "}
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
              Tampa Neighborhoods for Pilates
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

        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best reformer Pilates in Tampa…" />
      </main>
      <Footer />
    </>
  );
}
