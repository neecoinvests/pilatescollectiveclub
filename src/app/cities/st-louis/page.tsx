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
  title: "Best Pilates Studios in St. Louis, MO (2026) — Curated & Verified",
  description:
    "Discover the 6 best Pilates studios in St. Louis, MO. From Ladue and Tower Grove South to Central West End and Lindenwood Park — expert picks, honest reviews, and booking tips for 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: [
    "pilates studios St Louis MO",
    "best pilates St Louis",
    "reformer pilates St Louis",
    "Ladue pilates studio",
    "Central West End pilates",
    "Tower Grove pilates studio",
    "St Louis pilates classes 2026",
    "Club Pilates St Louis",
  ],
  openGraph: {
    title: "Best Pilates Studios in St. Louis, MO (2026) — Curated & Verified",
    description:
      "Discover the 6 best Pilates studios in St. Louis, MO. From Ladue to Tower Grove — expert picks and booking tips for 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/st-louis",
    images: [
      {
        url: "https://images.unsplash.com/photo-E27qyMgymcA?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Pilates studio in St. Louis, MO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in St. Louis, MO (2026)",
    description:
      "The 6 best Pilates studios in St. Louis — curated, verified, and reviewed for 2026.",
    images: [
      "https://images.unsplash.com/photo-E27qyMgymcA?w=1200&h=630&fit=crop",
    ],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/st-louis",
  },
};

const STUDIOS = [
  {
    number: "1",
    name: "The Pilates Center of St. Louis",
    neighborhood: "Ladue",
    priceLevel: "$$$",
    review:
      "The Pilates Center of St. Louis is one of the metro area's most enduring and respected Pilates practices — open since 2008, founded by master instructor Karen Prechtl, who has been in the fitness industry since 1980 and brings a depth of experience that is rare in any market. The studio offers a full apparatus program including Reformer, Tower, and Cadillac, alongside a complete Balanced Body Instructor Certification Program that speaks to the seriousness of its instructional standards. A Yelp Neighborhood Favorite with a 5.0 rating, reviewers consistently describe the studio as transformative — not a hyperbolic word when the instruction is this precise and personal.",
    address: "9825 Clayton Rd, Saint Louis, MO 63124",
    bestFor: "Classical apparatus Pilates, private and small-group sessions, instructor training",
    signatureClass: "Reformer & Cadillac",
    bookingTip: "The studio is appointment-driven — inquire about availability directly rather than expecting open online booking.",
  },
  {
    number: "2",
    name: "Club Pilates Brentwood",
    neighborhood: "Brentwood",
    priceLevel: "$$",
    review:
      "Club Pilates Brentwood is the most accessible franchise reformer option in the St. Louis market — a well-run studio with a wide daily schedule (6 am to 8:30 pm on weekdays), eleven class formats, and a membership pricing structure that makes regular attendance financially practical. Listed on ClassPass and Wellhub, it's compatible with a broad range of corporate wellness programs. The inner-ring Brentwood location is convenient for residents across south and central St. Louis and attracts a loyal base of regular practitioners who appreciate both the quality of instruction and the predictability of the class schedule.",
    address: "2535 S Brentwood Blvd, St. Louis, MO 63144",
    bestFor: "Beginners to intermediate, wide schedule, ClassPass and Wellhub users",
    signatureClass: "Reformer Flow",
    bookingTip: "The free intro class is the smartest way to start — instructors use it to match you with the right progression track.",
  },
  {
    number: "3",
    name: "Freeman Pilates",
    neighborhood: "Tower Grove South",
    priceLevel: "$$$",
    review:
      "Freeman Pilates is one of St. Louis's most reviewed and recommended boutique studios — an intimate, instructor-led practice run by Emily Freeman in Tower Grove South, with a second location (Studio II by Freeman Pilates) in the Central West End. Classes are capped at four students, ensuring real individual attention rather than generic group instruction. The studio is consistently praised on both Yelp and ClassPass for attentive, corrective cueing and a clean, serene environment that reflects the seriousness with which Freeman approaches the method. An excellent choice for practitioners who want meaningful instruction in a small, focused setting.",
    address: "3172 Morganford Rd, St. Louis, MO 63116",
    bestFor: "Small-group instruction, private sessions, beginners and post-rehab clients",
    signatureClass: "Reformer & Apparatus",
    bookingTip: "Classes cap at 4 students — book several days ahead, especially for weekday morning slots.",
  },
  {
    number: "4",
    name: "PLNK STL",
    neighborhood: "Ladue Village",
    priceLevel: "$$$",
    review:
      "PLNK STL is St. Louis's premier Lagree Megaformer studio — the place for practitioners who want the precision and low-impact benefit structure of Pilates with significantly higher intensity. The flagship Lindbergh location has built one of the most-reviewed Lagree practices in the Midwest (53 Yelp reviews at its flagship, 41 at the Central West End location), with instructors consistently praised for their knowledge, energy, and ability to push clients past perceived limits safely. St. Louis Magazine covered PLNK's expansion to the CWE as a notable local fitness story — the studio has earned its following through real results.",
    address: "1560 S Lindbergh Blvd, Saint Louis, MO 63131",
    bestFor: "High-intensity reformer, Lagree Megaformer, strength and conditioning",
    signatureClass: "Lagree Megaformer",
    bookingTip: "The Megaformer format is physically demanding — take the intro class before moving to regular sessions.",
  },
  {
    number: "5",
    name: "Casa Di Pilates",
    neighborhood: "The Grove / Forest Park Southeast",
    priceLevel: "$$",
    review:
      "Casa Di Pilates is one of St. Louis's most distinctive newer studios — an Italian-inspired boutique space in the Grove neighborhood offering two formats not widely combined elsewhere in the city: Reformer Pilates and Infrared Hot Mat Pilates. The studio holds a 5.0 rating on both Yelp and Poyst, earned through small class sizes, genuinely warm instruction, and an atmosphere that makes practitioners feel immediately welcomed. The resident studio dog Milo is a noted fixture and a reliable indicator of the studio's community-first character. An excellent choice for clients who want a boutique experience at a more accessible price point than the classical studios.",
    address: "1530 S Kingshighway Blvd, Suite 204, St. Louis, MO 63110",
    bestFor: "Reformer and infrared hot mat, community atmosphere, accessible boutique pricing",
    signatureClass: "Infrared Hot Mat Pilates",
    bookingTip: "The hot mat classes require advance booking — space is limited and demand has grown significantly since opening.",
  },
  {
    number: "6",
    name: "Studio Ivanhoe Pilates & Movement",
    neighborhood: "Lindenwood Park",
    priceLevel: "$$",
    review:
      "Studio Ivanhoe is one of the best-equipped independent studios in St. Louis — a 1,300-square-foot space with five Balanced Body Reformers with towers, a Cadillac/Reformer combo, wall towers, chairs, a ladder barrel, and a separate 400-square-foot hardwood studio for barre and mat classes. The Lindenwood Park location serves south St. Louis's residential community with the kind of full apparatus programming that is rare at this price point. Instructor Laura is consistently praised in reviews for her technical depth and genuine investment in client progress. One of the few south-city options offering the complete classical Pilates apparatus suite.",
    address: "3219 Ivanhoe Ave, St. Louis, MO 63139",
    bestFor: "Full classical apparatus, barre, south St. Louis residents, intermediate practitioners",
    signatureClass: "Classical Reformer & Barre",
    bookingTip: "The full apparatus offering is underutilized — ask about Cadillac and chair sessions if you want to develop beyond reformer work.",
  },
];

const BOOKING_TIPS = [
  {
    heading: "St. Louis summers drive studio demand differently than most cities",
    body: "Unlike many northern cities, St. Louis summers are hot and humid enough to push outdoor exercisers indoors. Studio demand peaks in summer and winter simultaneously, with spring and fall offering better availability. If you want preferred time slots, commit to a membership schedule in late summer.",
  },
  {
    heading: "The south city vs. county geography shapes your options",
    body: "St. Louis's city-county division means the practical fitness geography is split. South city (Lindenwood Park, Tower Grove, The Grove) has excellent independent boutiques. The inner-ring suburbs (Brentwood, Ladue, Clayton) concentrate the franchise and classical studios. Choose based on where you actually spend your time.",
  },
  {
    heading: "Classical studios expect a private intake session",
    body: "The Pilates Center and Freeman Pilates both expect an initial private session before placing you in small-group programming. This is standard classical practice — instructors use the intake to understand your movement history, injuries, and goals. It is worth taking seriously rather than rushing through.",
  },
  {
    heading: "Lagree is not Pilates — know what you're signing up for",
    body: "PLNK STL uses the Lagree Megaformer, which is physically significantly more demanding than traditional reformer Pilates. If you're new to either, start with conventional Pilates at Club Pilates or Casa Di Pilates before transitioning to Lagree. The intensity difference is meaningful.",
  },
  {
    heading: "Grip socks are required at every reformer and Megaformer studio",
    body: "Universal across St. Louis's reformer market. Full-toe grip socks — bring your own rather than paying front-desk retail.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Ladue & Clayton",
    description:
      "St. Louis's most affluent western suburbs have developed a premium wellness infrastructure with long-running classical studios and instructor training programs that set the standard for the broader metro market.",
  },
  {
    name: "Tower Grove & The Grove",
    description:
      "South St. Louis's most culturally vibrant neighborhoods host independent boutique studios that serve a health-invested, community-oriented population with intimate instruction at competitive price points.",
  },
  {
    name: "Central West End",
    description:
      "St. Louis's most walkable urban neighborhood supports both boutique branches of established south city studios and Lagree franchise locations serving the area's dense professional and medical corridor population.",
  },
  {
    name: "Brentwood & Inner Suburbs",
    description:
      "The inner-ring western suburbs offer the most accessible franchise reformer programming in the metro — wide schedules, ClassPass compatibility, and consistent instruction for practitioners who prioritize convenience.",
  },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at every reformer studio in St. Louis. Full-toe grip socks are the universal standard.",
    price: "From $16",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat (6mm)",
    note: "Essential for St. Louis's mat classes and home practice through the city's hot summers and cold winters.",
    price: "From $52",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Standard in St. Louis's classical studios. Useful for at-home reinforcement between sessions.",
    price: "From $24",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Fabric Resistance Bands",
    note: "Versatile for home practice — particularly useful between the intensive sessions common at St. Louis's classical studios.",
    price: "From $22",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
  {
    name: "High-Density Foam Roller",
    note: "Post-class fascia release — a standard recovery tool across St. Louis's reformer and Megaformer studios.",
    price: "From $32",
    url: "https://www.amazon.com/s?k=high+density+foam+roller+pilates&tag=pilatescollective-20",
  },
];

const RELATED_CITIES = [
  { city: "Kansas City", country: "United States", href: "/cities/kansas-city", studioCount: 6 },
  { city: "Chicago", country: "United States", href: "/cities/chicago", studioCount: 6 },
  { city: "Nashville", country: "United States", href: "/cities/nashville", studioCount: 6 },
  { city: "Indianapolis", country: "United States", href: "/cities/indianapolis", studioCount: 6 },
];

const FURTHER_READING = [
  {
    title: "Lagree vs Pilates: What's the Difference?",
    excerpt:
      "The Megaformer isn't a reformer. Here's what separates Lagree from traditional Pilates — and how to choose.",
    href: "/blog/lagree-vs-pilates",
    category: "Education",
    readTime: "6 min read",
    date: "2026-02-01",
    imageUrl:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=450&fit=crop",
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
      "https://images.unsplash.com/photo-1616439069669-66dbe74bcdad?w=800&h=450&fit=crop",
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
        { "@type": "ListItem", position: 3, name: "St. Louis", item: "https://pilatescollectiveclub.com/cities/st-louis" },
      ],
    },
    {
      "@type": "ItemList",
      name: "Best Pilates Studios in St. Louis, MO",
      url: "https://pilatescollectiveclub.com/cities/st-louis",
      numberOfItems: 6,
      itemListElement: STUDIOS.map((s, i: number) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "ExerciseGym",
          name: s.name,
          description: s.review.slice(0, 160),
          address: { "@type": "PostalAddress", streetAddress: s.address, addressLocality: "St. Louis", addressRegion: "MO", addressCountry: "US" },
        },
      })),
    },
    {
      "@type": "Article",
      headline: "Best Pilates Studios in St. Louis, MO (2026)",
      url: "https://pilatescollectiveclub.com/cities/st-louis",
      dateModified: "2026-06-01",
      author: { "@type": "Organization", name: "Pilates Collective Club" },
      publisher: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com" },
    },
  ],
};

export default function StLouisPage() {
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
              Best Pilates Studios in St. Louis, MO
            </h1>
            <p className="text-sm mb-6" style={{ color: "#9c8678" }}>
              Updated June 2026 · 6 studios reviewed
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "#5c4f47" }}>
              St. Louis has developed a quietly serious Pilates culture — one that spans the spectrum
              from a master-instructor-led classical apparatus studio in Ladue that has been operating
              since 2008, to the city's premier Lagree Megaformer studio expanding across multiple
              locations, to intimate boutique practices in Tower Grove and Lindenwood Park where class
              caps of four mean instruction is genuinely personal. The city's combination of a large
              medical corridor, established health-conscious suburbs, and a revitalizing urban core has
              produced a market with real depth at every price point.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto relative rounded-2xl overflow-hidden" style={{ height: "420px" }}>
            <Image
              src="https://images.unsplash.com/photo-E27qyMgymcA?w=1400&h=840&fit=crop"
              alt="Pilates studio in St. Louis, MO"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium opacity-90">St. Louis, Missouri</p>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "#2d2926" }}>
              The 6 Best Pilates Studios in St. Louis
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
              Booking Tips for St. Louis
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
              Gear St. Louis instructors recommend.{" "}
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
              St. Louis Neighborhoods for Pilates
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
          searchPlaceholder="Ask: best reformer Pilates in St. Louis…"
        />
      </main>
      <Footer />
    </>
  );
}
