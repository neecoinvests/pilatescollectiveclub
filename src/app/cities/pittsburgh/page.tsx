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
  title: "Best Pilates Studios in Pittsburgh, PA (2026) — Curated & Verified",
  description:
    "Discover the 6 best Pilates studios in Pittsburgh, PA. From Shadyside and the Strip District to Mt. Lebanon and Point Breeze — expert picks, honest reviews, and booking tips for 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: [
    "pilates studios Pittsburgh PA",
    "best pilates Pittsburgh",
    "reformer pilates Pittsburgh",
    "Shadyside pilates studio",
    "Strip District pilates",
    "Mt Lebanon pilates",
    "Pittsburgh pilates classes 2026",
    "Club Pilates Pittsburgh",
  ],
  openGraph: {
    title: "Best Pilates Studios in Pittsburgh, PA (2026) — Curated & Verified",
    description:
      "Discover the 6 best Pilates studios in Pittsburgh, PA. From Shadyside to Mt. Lebanon — expert picks and booking tips for 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/pittsburgh",
    images: [
      {
        url: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Pilates studio in Pittsburgh, PA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Pittsburgh, PA (2026)",
    description:
      "The 6 best Pilates studios in Pittsburgh — curated, verified, and reviewed for 2026.",
    images: [
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1200&h=630&fit=crop",
    ],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/pittsburgh",
  },
};

const STUDIOS = [
  {
    number: "1",
    name: "Reform Pilates",
    neighborhood: "Strip District",
    priceLevel: "$$",
    review:
      "Reform Pilates is one of Pittsburgh's most exciting newer studios — a boutique reformer practice earning a 5.0-star rating on Google and building a loyal following in the Strip District's rapidly evolving wellness corridor. Founder Natalie has created a studio environment that is rigorous without being intimidating, precise without being cold. The on-site red light therapy room is a genuine differentiator, making post-class recovery a natural extension of the visit. Instructors are praised consistently for their attentiveness and genuine investment in client progress — qualities that set the studio well above the franchise average.",
    address: "2722 Penn Ave, Pittsburgh, PA 15222",
    bestFor: "Boutique reformer experience, post-class recovery, Strip District residents",
    signatureClass: "Reformer Flow",
    bookingTip: "The studio fills fast given its 5-star reputation — book at least 48 hours ahead, especially for weekend classes.",
  },
  {
    number: "2",
    name: "Club Pilates Shadyside",
    neighborhood: "Shadyside",
    priceLevel: "$$",
    review:
      "Club Pilates Shadyside is Pittsburgh's most centrally located franchise reformer studio, sitting squarely in the heart of one of the city's most walkable and wellness-invested neighborhoods. The Centre Avenue location is convenient for residents of Shadyside, Squirrel Hill, East Liberty, and the Oakland medical corridor. The studio offers the full Club Pilates class menu — Reformer Flow, Cardio Sculpt, Suspend, Restore — with a free intro class for new clients and Wellhub/ClassPass compatibility that makes it accessible to corporate wellness program participants. Instructors are consistent and professional.",
    address: "5430 Centre Ave, Pittsburgh, PA 15232",
    bestFor: "Beginners to intermediate, Shadyside and East End residents, ClassPass and Wellhub users",
    signatureClass: "Reformer Flow",
    bookingTip: "Use the free intro class before committing to a membership — instructors use it to calibrate your starting level.",
  },
  {
    number: "3",
    name: "STHIEL Pilates & MOVEment Center",
    neighborhood: "East Liberty",
    priceLevel: "$$",
    review:
      "STHIEL Pilates & MOVEment Center is Pittsburgh's most distinctive studio — the only licensed AntiGravity Fitness provider between Columbus and Philadelphia. The East Liberty location blends classical Pilates with aerial yoga, aerial fitness, and fascial conditioning into a multi-discipline movement practice that attracts clients who want more than a standard reformer experience. Private Pilates sessions are thorough and individualized. The studio occupies a meaningful niche in Pittsburgh's fitness landscape: technically serious, methodologically diverse, and deeply committed to movement as a whole-body practice.",
    address: "316 S Saint Clair St, Pittsburgh, PA 15206",
    bestFor: "Multi-discipline movement, aerial fitness, private Pilates instruction",
    signatureClass: "AntiGravity Pilates Fusion",
    bookingTip: "Book private Pilates separately from the aerial classes — the instructor team specializes differently across disciplines.",
  },
  {
    number: "4",
    name: "Moxie Mind & Body Pilates Studio",
    neighborhood: "Downtown / Market Square",
    priceLevel: "$$$",
    review:
      "Moxie Mind & Body has served Downtown Pittsburgh from its Market Square location for over a decade, making it one of the city's most established and respected classical Pilates practices. Certified through Power Pilates — a lineage-based method tracing directly to Joseph Pilates — the studio emphasizes precision, progression, and genuine understanding of the method over fitness trends. Sessions are private and semi-private, appointment-driven, and delivered by instructors who know their clients' histories. The best choice in Pittsburgh for practitioners who want to develop a serious, methodologically grounded practice.",
    address: "24 Market Place, 2nd Floor, Pittsburgh, PA 15222",
    bestFor: "Classical Pilates, private instruction, post-rehab, serious practitioners",
    signatureClass: "Classical Reformer & Apparatus",
    bookingTip: "First session is a private intake assessment — book this before expecting group availability.",
  },
  {
    number: "5",
    name: "Touchstone Pilates",
    neighborhood: "Mt. Lebanon",
    priceLevel: "$$$",
    review:
      "Touchstone Pilates is the standard-bearer for classical Pilates in Pittsburgh. Open since 2007, it is the only studio in the city offering Romana's Pilates® — the most strictly lineage-traced branch of the method — and its instructors Lisa Pellow and Heather Bartley are the only accredited Romana's Pilates® teachers in Pittsburgh. The studio uses full Gratz equipment (the gold standard in classical apparatus) and has been recognized by Gratz Pilates in their Featured Studio Series. The approach is demanding, the instruction is exceptional, and the results speak for themselves.",
    address: "250 Mt. Lebanon Blvd, Suite 413, Pittsburgh, PA 15234",
    bestFor: "Romana's classical lineage, serious practitioners, full Gratz apparatus",
    signatureClass: "Romana's Classical Reformer",
    bookingTip: "Waitlists are common for recurring private slots — inquire about openings directly with the studio.",
  },
  {
    number: "6",
    name: "Stellar Pilates",
    neighborhood: "Point Breeze",
    priceLevel: "$$",
    review:
      "Stellar Pilates is Point Breeze's boutique reformer studio — an intimate eight-reformer practice built on Balanced Body Studio Reformers with a community-first ethos that matches the neighborhood's character. The studio's standout entry point is a free 50-minute intro class every Saturday at noon, one of the most accessible low-barrier samplers in Pittsburgh's pilates market. Small class sizes mean instructors can provide real individual attention rather than generic cuing. The founder brings deep classical training to a modern, approachable format. Ideal for East End residents seeking quality instruction at a more accessible price point.",
    address: "6634 Hamilton Ave, Pittsburgh, PA 15206",
    bestFor: "Point Breeze and East End residents, beginners, small-group instruction",
    signatureClass: "Reformer Foundation",
    bookingTip: "The free Saturday intro class fills — reserve your spot online rather than walking in.",
  },
];

const BOOKING_TIPS = [
  {
    heading: "Pittsburgh winters reward a studio commitment made in autumn",
    body: "Pittsburgh's winters are grey, wet, and long — from November through March, consistent outdoor movement is limited. Practitioners who lock in a studio routine before the cold arrives maintain it through winter. Book recurring slots in September and October before the demand spike.",
  },
  {
    heading: "The Oakland medical corridor creates strong therapeutic demand",
    body: "Pittsburgh's concentration of world-class hospitals and research institutions — UPMC, Allegheny Health Network, Carnegie Mellon, Pitt — creates a large, health-literate population with elevated demand for evidence-informed Pilates instruction. Studios with rehabilitation specializations are particularly well-supported.",
  },
  {
    heading: "Neighborhood geography matters more in Pittsburgh than most cities",
    body: "Pittsburgh's bridges and hills mean that cross-neighborhood travel takes longer than distances suggest. Choose a studio within your habitual route — between home and work, or near your weekend grocery run. A great studio thirty minutes away will lose out to an adequate studio five minutes away.",
  },
  {
    heading: "Intro packages are the standard entry point across Pittsburgh studios",
    body: "Every studio in Pittsburgh offers new-client introductory rates. Use the intro to evaluate instructor quality, community fit, and studio culture before committing. Classical studios in particular expect an initial private intake session — it is not optional.",
  },
  {
    heading: "Grip socks are required at every reformer studio",
    body: "Universal across Pittsburgh's reformer market. Full-toe grip socks are the standard — bring your own rather than paying front-desk retail prices.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Shadyside & East End",
    description:
      "Pittsburgh's most walkable wellness corridor runs through Shadyside, East Liberty, and Point Breeze — a cluster of neighborhoods with a health-invested, professional population that supports both franchise studios and serious independent boutiques.",
  },
  {
    name: "Strip District",
    description:
      "Pittsburgh's most rapidly transforming neighborhood has developed a strong wellness infrastructure alongside its food hall and tech office conversions. The Strip District's boutique studios serve the area's young professional population and downtown residents.",
  },
  {
    name: "Downtown & Market Square",
    description:
      "Pittsburgh's downtown core hosts a handful of serious classical studios serving the medical corridor and professional population with private and semi-private programming that prioritizes depth over volume.",
  },
  {
    name: "Mt. Lebanon & South Hills",
    description:
      "Pittsburgh's most affluent south-side suburbs support premium studios with serious classical credentials. Mt. Lebanon in particular has developed a reputation for quality instruction that draws practitioners from across the region.",
  },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at every reformer studio in Pittsburgh. Full-toe grip socks are the universal standard.",
    price: "From $16",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat (6mm)",
    note: "Essential for Pittsburgh's mat classes and home practice through the city's long winter season.",
    price: "From $52",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Standard in Pittsburgh's classical studios. Useful for at-home reinforcement between sessions.",
    price: "From $24",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Fabric Resistance Bands",
    note: "Essential for home practice through Pittsburgh's significant winter season.",
    price: "From $22",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
  {
    name: "High-Density Foam Roller",
    note: "Post-class fascia release — invaluable after Pittsburgh's hill-heavy commutes and studio sessions.",
    price: "From $32",
    url: "https://www.amazon.com/s?k=high+density+foam+roller+pilates&tag=pilatescollective-20",
  },
];

const RELATED_CITIES = [
  { city: "Philadelphia", country: "United States", href: "/cities/philadelphia", studioCount: 6 },
  { city: "Cleveland", country: "United States", href: "/cities/cleveland", studioCount: 6 },
  { city: "Columbus", country: "United States", href: "/cities/columbus", studioCount: 6 },
  { city: "Washington DC", country: "United States", href: "/cities/washington-dc", studioCount: 6 },
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
        { "@type": "ListItem", position: 3, name: "Pittsburgh", item: "https://pilatescollectiveclub.com/cities/pittsburgh" },
      ],
    },
    {
      "@type": "ItemList",
      name: "Best Pilates Studios in Pittsburgh, PA",
      url: "https://pilatescollectiveclub.com/cities/pittsburgh",
      numberOfItems: 6,
      itemListElement: STUDIOS.map((s, i: number) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "ExerciseGym",
          name: s.name,
          description: s.review.slice(0, 160),
          address: { "@type": "PostalAddress", streetAddress: s.address, addressLocality: "Pittsburgh", addressRegion: "PA", addressCountry: "US" },
        },
      })),
    },
    {
      "@type": "Article",
      headline: "Best Pilates Studios in Pittsburgh, PA (2026)",
      url: "https://pilatescollectiveclub.com/cities/pittsburgh",
      dateModified: "2026-06-01",
      author: { "@type": "Organization", name: "Pilates Collective Club" },
      publisher: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com" },
    },
  ],
};

export default function PittsburghPage() {
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
              Best Pilates Studios in Pittsburgh, PA
            </h1>
            <p className="text-sm mb-6" style={{ color: "#9c8678" }}>
              Updated June 2026 · 6 studios reviewed
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "#5c4f47" }}>
              Pittsburgh has quietly become one of the mid-Atlantic's most interesting wellness cities. The
              same renaissance that transformed the Strip District, East Liberty, and Lawrenceville into
              destinations has also built a serious Pilates market — ranging from a nationally recognized
              classical studio in Mt. Lebanon operating on full Gratz equipment, to boutique reformer
              spaces in Shadyside and Point Breeze that punch well above their size. Whether you're
              looking for Romana's lineage, aerial Pilates fusion, or accessible group reformer classes,
              Pittsburgh in 2026 delivers more than most outsiders expect.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto relative rounded-2xl overflow-hidden" style={{ height: "420px" }}>
            <Image
              src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1400&h=840&fit=crop"
              alt="Pilates studio in Pittsburgh, PA"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium opacity-90">Pittsburgh, Pennsylvania</p>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "#2d2926" }}>
              The 6 Best Pilates Studios in Pittsburgh
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
              Booking Tips for Pittsburgh
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
              Gear Pittsburgh instructors recommend.{" "}
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
              Pittsburgh Neighborhoods for Pilates
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
          searchPlaceholder="Ask: best reformer Pilates in Pittsburgh…"
        />
      </main>
      <Footer />
    </>
  );
}
