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
  title: "Best Pilates Studios in Indianapolis, IN (2026) — Curated & Verified",
  description:
    "Discover the 6 best Pilates studios in Indianapolis, IN. From Mass Ave and Broad Ripple to Carmel and the north side — expert picks, honest reviews, and booking tips for 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: [
    "pilates studios Indianapolis IN",
    "best pilates Indianapolis",
    "reformer pilates Indianapolis",
    "Mass Ave pilates",
    "Broad Ripple pilates studio",
    "Carmel Indiana pilates",
    "Indianapolis pilates classes 2026",
    "Club Pilates Indianapolis",
  ],
  openGraph: {
    title: "Best Pilates Studios in Indianapolis, IN (2026) — Curated & Verified",
    description:
      "Discover the 6 best Pilates studios in Indianapolis, IN. From Mass Ave to Carmel — expert picks and booking tips for 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/indianapolis",
    images: [
      {
        url: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Pilates studio in Indianapolis, IN",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Indianapolis, IN (2026)",
    description:
      "The 6 best Pilates studios in Indianapolis — curated, verified, and reviewed for 2026.",
    images: [
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1200&h=630&fit=crop",
    ],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/indianapolis",
  },
};

const STUDIOS = [
  {
    number: "1",
    name: "Club Pilates Downtown Indianapolis",
    neighborhood: "Mass Ave / Downtown",
    priceLevel: "$$$",
    review:
      "Club Pilates Downtown Indianapolis anchors the Massachusetts Avenue arts and entertainment corridor with a well-run franchise studio that has become a community hub for Indy's young professional population. The Mass Ave location is the most centrally convenient reformer option in the city, drawing from the surrounding downtown residential towers, Lockerbie Square, and the medical district. Instructors are praised for their energy and genuine investment in client progress — above the franchise average for a downtown urban location.",
    address: "530 Massachusetts Ave #160, Indianapolis, IN 46204",
    bestFor: "Downtown and Mass Ave residents, young professionals, all levels",
    signatureClass: "Reformer Flow",
    bookingTip: "Lunchtime and post-work classes fill with the downtown professional crowd — book 48 hours ahead.",
  },
  {
    number: "2",
    name: "Club Pilates North Indianapolis",
    neighborhood: "Keystone / North Indy",
    priceLevel: "$$$",
    review:
      "Club Pilates North Indianapolis serves the Keystone corridor and surrounding north-side residential neighborhoods with consistent, high-quality reformer programming. The 86th Street location is convenient for residents of Nora, Meridian-Kessler, and the broader north Indianapolis communities. The studio has built a loyal base of regulars who appreciate both the instruction quality and the well-organized schedule. Instructors are consistently attentive and the studio atmosphere is welcoming across all experience levels.",
    address: "2727 E 86th St #145, Indianapolis, IN 46240",
    bestFor: "North Indy residents, Keystone corridor, all levels",
    signatureClass: "Reformer 1.5",
    bookingTip: "Morning classes fill with the north-side professional demographic — book two days ahead for prime morning slots.",
  },
  {
    number: "3",
    name: "Indy House of Pilates",
    neighborhood: "South Indianapolis",
    priceLevel: "$$$",
    review:
      "Indy House of Pilates is one of Indianapolis's most respected independent studios, serving the south-side residential community with a reformer and apparatus program that takes the method seriously as both a physical discipline and a body education practice. The studio is smaller than the franchise options but delivers a more individualized experience — instructors know their clients' movement histories and adjust programming accordingly. Particularly strong for practitioners who want to develop beyond beginner class formats and move toward a more sophisticated practice.",
    address: "5153 Commerce Square Dr, Indianapolis, IN 46237",
    bestFor: "South Indy residents, intermediate to advanced, individualized instruction",
    signatureClass: "Reformer Intermediate",
    bookingTip: "Book the new-client intro session first — instructors use it to match you with the right class level.",
  },
  {
    number: "4",
    name: "Foundations Studio",
    neighborhood: "Nora / Far North Side",
    priceLevel: "$$$",
    review:
      "Foundations Studio is a Nora-area independent studio that lives up to its name — a practice built on genuine instructional foundations rather than fitness trends. The 86th Street location serves the established residential communities of Nora, Crooked Creek, and the surrounding north-side neighborhoods with a program that emphasizes body awareness, progressive skill development, and individualized attention. The studio is particularly well-regarded for its prenatal and postnatal programming, which serves the area's large young-family population with unusual depth and care.",
    address: "1726 E 86th St, Indianapolis, IN 46240",
    bestFor: "Nora and far-north residents, prenatal and postnatal, progressive instruction",
    signatureClass: "Classical Reformer & Mat",
    bookingTip: "Prenatal classes fill several weeks out — book early if you're expecting.",
  },
  {
    number: "5",
    name: "Indy Pilates Plus",
    neighborhood: "Broad Ripple / Near North",
    priceLevel: "$$",
    review:
      "Indy Pilates Plus is Broad Ripple's home studio — an accessible, community-oriented practice that reflects the neighborhood's energetic, health-conscious character. The Gladden Drive location serves the Broad Ripple, Nora, and Butler-Tarkington communities with reformer and mat programming at pricing that makes regular attendance genuinely practical for the area's young professional and active family population. The studio earns strong reviews for its warm instructors and welcoming atmosphere. An ideal starting point for Indianapolis practitioners new to the method.",
    address: "6035 Gladden Dr, Indianapolis, IN 46220",
    bestFor: "Broad Ripple and near-north residents, beginners, accessible pricing",
    signatureClass: "Reformer Flow",
    bookingTip: "Drop-in rates are among the most accessible in Indianapolis — great for sampling before committing to a membership.",
  },
  {
    number: "6",
    name: "Club Pilates Carmel",
    neighborhood: "Carmel",
    priceLevel: "$$$",
    review:
      "Club Pilates Carmel serves one of Indiana's most affluent and wellness-invested suburban cities with a franchise reformer studio that consistently meets Carmel's high expectations. The studio draws from Carmel, Westfield, and Zionsville — a demographic that is health-literate, fitness-experienced, and holds studios to real standards. The instructor team is experienced and professional, the schedule is wide, and membership tiers make regular attendance financially practical. One of the most reliably high-quality Club Pilates locations in the Indiana market.",
    address: "2482 E 146th St, Carmel, IN 46033",
    bestFor: "Carmel and north-suburb residents, experienced practitioners, memberships",
    signatureClass: "Flow",
    bookingTip: "Monthly memberships cut per-class costs significantly — exhaust the intro offer before committing.",
  },
];

const BOOKING_TIPS = [
  {
    heading: "Indianapolis rewards consistent practice through its winters",
    body: "Indianapolis winters are cold, grey, and long — from November through March, outdoor movement is limited and the case for a consistent indoor practice is at its strongest. Practitioners who establish studio routines before the cold arrives maintain them through winter. Book standing slots in September.",
  },
  {
    heading: "The Indy 500 season brings unusual demand",
    body: "The month of May is Indy 500 season, when Indianapolis hosts hundreds of thousands of visitors and the city's professional population is on an unusual schedule. Studios near the downtown and north-side corridors see schedule disruptions and increased demand during race weekend. Book well ahead if you're visiting in May.",
  },
  {
    heading: "The medical corridor creates strong demand for therapeutic instruction",
    body: "Indianapolis is a major healthcare hub — Indiana University Health, Eskenazi, and St. Vincent are among the large systems anchored here. The resulting concentration of healthcare professionals creates strong demand for evidence-informed, therapeutically aware Pilates instruction. Studios with rehabilitation specializations are particularly well-supported.",
  },
  {
    heading: "Intro packages are the most cost-effective entry point",
    body: "Every Indianapolis studio offers a new-client introductory rate. Indianapolis's moderate price point makes the intro package an excellent value — typically three reformer sessions for the price of one drop-in. Use it to evaluate instructor quality and community fit before committing to a membership.",
  },
  {
    heading: "Grip socks are required at every reformer studio",
    body: "Universal across Indianapolis's reformer market. Bring your own — full-toe grip socks from Amazon cost a fraction of front-desk retail at every studio in the city.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Mass Ave & Downtown",
    description:
      "Indianapolis's most vibrant arts and entertainment corridor anchors the city's downtown Pilates scene. The Massachusetts Avenue stretch is walkable, dense with young professionals, and supports a studio culture that reflects the area's creative energy and health-consciousness.",
  },
  {
    name: "Broad Ripple & Near North",
    description:
      "Indianapolis's most active and community-oriented residential district supports independent studios that serve a young, health-invested population with accessible programming and a genuine neighborhood atmosphere.",
  },
  {
    name: "Nora & Far North Side",
    description:
      "The established residential corridor along the 86th Street spine — Nora, Keystone, Meridian-Kessler — supports both franchise and independent studios serving the area's professional and family communities with high-quality, consistently reliable programming.",
  },
  {
    name: "Carmel & North Suburbs",
    description:
      "Indiana's most affluent suburb has developed a strong wellness infrastructure that serves its health-invested residential community with premium franchise studios and a growing number of independent practices. Convenient for practitioners who live or work north of I-465.",
  },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at every reformer studio in Indianapolis. Full-toe grip socks are the universal standard.",
    price: "From $16",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat (6mm)",
    note: "Essential for Indianapolis's mat classes and home practice through the city's significant winter season.",
    price: "From $52",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Standard in Indianapolis's classical studios. Useful for at-home reinforcement between sessions.",
    price: "From $24",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Fabric Resistance Bands",
    note: "Essential for home practice through Indianapolis's long winters when outdoor movement is limited.",
    price: "From $22",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
  {
    name: "High-Density Foam Roller",
    note: "Post-class fascia release — invaluable on cold Indianapolis winter evenings after studio sessions.",
    price: "From $32",
    url: "https://www.amazon.com/s?k=high+density+foam+roller+pilates&tag=pilatescollective-20",
  },
];

const RELATED_CITIES = [
  { city: "Chicago", country: "United States", href: "/cities/chicago", studioCount: 6 },
  { city: "Minneapolis", country: "United States", href: "/cities/minneapolis", studioCount: 6 },
  { city: "Nashville", country: "United States", href: "/cities/nashville", studioCount: 6 },
  { city: "Columbus", country: "United States", href: "/cities/columbus", studioCount: 6 },
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
    title: "How Often Should You Do Pilates?",
    excerpt:
      "The research on training frequency — and how to build a sustainable weekly practice that actually works.",
    href: "/blog/how-often-should-you-do-pilates",
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
        { "@type": "ListItem", position: 3, name: "Indianapolis", item: "https://pilatescollectiveclub.com/cities/indianapolis" },
      ],
    },
    {
      "@type": "ItemList",
      name: "Best Pilates Studios in Indianapolis, IN",
      url: "https://pilatescollectiveclub.com/cities/indianapolis",
      numberOfItems: 6,
      itemListElement: STUDIOS.map((s, i: number) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "ExerciseGym",
          name: s.name,
          description: s.review.slice(0, 160),
          address: { "@type": "PostalAddress", streetAddress: s.address, addressLocality: "Indianapolis", addressRegion: "IN", addressCountry: "US" },
        },
      })),
    },
    {
      "@type": "Article",
      headline: "Best Pilates Studios in Indianapolis, IN (2026)",
      url: "https://pilatescollectiveclub.com/cities/indianapolis",
      dateModified: "2026-06-01",
      author: { "@type": "Organization", name: "Pilates Collective Club" },
      publisher: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com" },
    },
  ],
};

export default function IndianapolisPage() {
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
              Best Pilates Studios in Indianapolis, IN
            </h1>
            <p className="text-sm mb-6" style={{ color: "#9c8678" }}>
              Updated June 2026 · 6 studios reviewed
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "#5c4f47" }}>
              Indianapolis — the Circle City — has grown into one of the Midwest's most dynamic wellness
              markets. The city's sports culture (Colts, Pacers, the Indy 500), large healthcare sector,
              and rapidly expanding young professional population have created genuine demand for
              high-quality movement practices. From the arts corridor of Massachusetts Avenue to the
              polished north suburbs of Carmel, Indianapolis's Pilates scene in 2026 offers a range of
              options that would surprise anyone who hasn't visited recently. These six studios represent
              the best the city has to offer.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto relative rounded-2xl overflow-hidden" style={{ height: "420px" }}>
            <Image
              src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1400&h=840&fit=crop"
              alt="Pilates studio in Indianapolis, IN"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium opacity-90">Indianapolis, Indiana</p>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "#2d2926" }}>
              The 6 Best Pilates Studios in Indianapolis
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
              Booking Tips for Indianapolis
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
              Gear Indianapolis instructors recommend.{" "}
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
              Indianapolis Neighborhoods for Pilates
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
          searchPlaceholder="Ask: best reformer Pilates in Indianapolis…"
        />
      </main>
      <Footer />
    </>
  );
}
