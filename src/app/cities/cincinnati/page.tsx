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
  title: "Best Pilates Studios in Cincinnati, OH (2026) — Curated & Verified",
  description:
    "Discover the 6 best Pilates studios in Cincinnati, OH. From Hyde Park and OTR to Oakley and College Hill — expert picks, honest reviews, and booking tips for 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: [
    "pilates studios Cincinnati OH",
    "best pilates Cincinnati",
    "reformer pilates Cincinnati",
    "Hyde Park pilates studio",
    "Over the Rhine pilates",
    "Oakley pilates studio",
    "Cincinnati pilates classes 2026",
    "Club Pilates Cincinnati",
  ],
  openGraph: {
    title: "Best Pilates Studios in Cincinnati, OH (2026) — Curated & Verified",
    description:
      "Discover the 6 best Pilates studios in Cincinnati, OH. From Hyde Park to Over-the-Rhine — expert picks and booking tips for 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/cincinnati",
    images: [
      {
        url: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Pilates studio in Cincinnati, OH",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Cincinnati, OH (2026)",
    description:
      "The 6 best Pilates studios in Cincinnati — curated, verified, and reviewed for 2026.",
    images: [
      "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&h=630&fit=crop",
    ],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/cincinnati",
  },
};

const STUDIOS = [
  {
    number: "1",
    name: "12th Street Pilates",
    neighborhood: "Over-the-Rhine (OTR)",
    priceLevel: "$$$",
    review:
      "12th Street Pilates is Cincinnati's most credentialed boutique studio — the city's official BASI Pilates host, with all instructors trained in Body Arts and Science International's gold-standard methodology. The Over-the-Rhine location opened in 2012 and has become a fixture in one of the country's most impressive urban revival neighborhoods. The studio's expansion to a third Madisonville location in April 2026 is the most reliable signal of genuine market demand: students are following quality instruction across the city rather than accepting convenient mediocrity. The best choice in Cincinnati for practitioners who want a methodologically grounded, progressive practice.",
    address: "109 E 12th St, Cincinnati, OH 45202",
    bestFor: "BASI-method classical Pilates, serious practitioners, OTR residents",
    signatureClass: "BASI Reformer",
    bookingTip: "The OTR location fills fastest — book the Madisonville location for easier scheduling if you're on the east side.",
  },
  {
    number: "2",
    name: "Club Pilates Hyde Park",
    neighborhood: "Hyde Park",
    priceLevel: "$$",
    review:
      "Club Pilates Hyde Park is the highest-reviewed franchise location in Cincinnati — 22 Yelp reviews updated through May 2026, with consistent praise for instructor knowledge and class variety. The Rookwood Shopping Center location makes it one of the most conveniently situated studios in the city, adjacent to Nordstrom Rack and a dense cluster of Hyde Park retail and dining. The studio offers ten-plus class formats including TRX reformer fusion, Suspend, and Cardio Sculpt across a full daily schedule. A solid, welcoming option for practitioners who want consistent reformer programming at a price point that supports regular attendance.",
    address: "2692 Madison Rd, Cincinnati, OH 45208",
    bestFor: "Beginners to intermediate, wide class variety, Hyde Park and east-side residents",
    signatureClass: "Reformer Flow",
    bookingTip: "The intro class is free — use it to evaluate instructor fit before committing to a membership tier.",
  },
  {
    number: "3",
    name: "Prism Pilates",
    neighborhood: "Oakley",
    priceLevel: "$$",
    review:
      "Prism Pilates is the standout independent reformer studio in Cincinnati — owner-operated, BASI-adjacent in its instructional approach, and capped at seven students per class to ensure the kind of individual attention that distinguishes genuine instruction from generic group fitness. The free intro reformer class for new students is one of the most generous low-barrier entry points in the city. Featured by Cincinnati Refined as a feel-good fitness studio, the studio earns its reputation through results: clients report meaningful improvements in mobility, alignment, and strength within the first month of consistent attendance.",
    address: "3212 Madison Rd, Cincinnati, OH 45209",
    bestFor: "Small-group reformer, individualized instruction, Oakley residents",
    signatureClass: "Reformer Fundamentals",
    bookingTip: "The free intro class is genuinely worth taking — the 7-student cap makes it a real taster of the instruction quality, not just a sales pitch.",
  },
  {
    number: "4",
    name: "College Hill Pilates and Physical Therapy",
    neighborhood: "College Hill",
    priceLevel: "$$$",
    review:
      "College Hill Pilates and Physical Therapy is Cincinnati's most specialized studio — a practice run by licensed physical therapists (Dr. Mindy Nagel, PT, DPT, OCS and Dr. Joe Anneken, PT, DPT, OCS) that fully integrates clinical PT with Pilates apparatus work. The result is a practice genuinely suited to clients coming off surgery, managing chronic pain, or navigating conditions that require medically informed movement programming. The 5.0-star Birdeye rating across 20 reviews, with consistent reports of dramatically improved mobility in just a few sessions, reflects the quality of clinical expertise being applied. The best option in Cincinnati for therapeutic Pilates.",
    address: "5838 Hamilton Ave, Cincinnati, OH 45224",
    bestFor: "Rehabilitation, chronic pain, post-surgery recovery, clinically informed Pilates",
    signatureClass: "Therapeutic Reformer",
    bookingTip: "Mention your injury or condition history when booking — the intake process is more thorough here than at standard studios, and for good reason.",
  },
  {
    number: "5",
    name: "Club Pilates Kenwood",
    neighborhood: "Kenwood",
    priceLevel: "$$",
    review:
      "Club Pilates Kenwood holds a perfect 5.0 rating across multiple directories — an unusual distinction for a franchise studio and a reflection of consistent above-average instruction quality. The Kenwood Road location is conveniently positioned near Kenwood Towne Centre, drawing from the surrounding residential communities of Kenwood, Madeira, and the northeast Cincinnati corridor. The studio delivers the full Club Pilates class menu with flexible scheduling and a welcoming atmosphere that serves both beginners and experienced practitioners without condescension toward either. One of the more reliably high-quality franchise locations in the Ohio market.",
    address: "7827 Kenwood Rd, Cincinnati, OH 45236",
    bestFor: "Kenwood and northeast Cincinnati residents, consistent reformer training, all levels",
    signatureClass: "Reformer 1.5",
    bookingTip: "Morning slots are the most competitive — book two days ahead for preferred times.",
  },
  {
    number: "6",
    name: "Club Pilates Symmes Township",
    neighborhood: "Symmes Township / Northeast Cincinnati",
    priceLevel: "$$",
    review:
      "Club Pilates Symmes Township serves Cincinnati's northeast suburban community with a franchise reformer studio that earns particular recognition for its work with clients managing back pain — a meaningful specialization in a demographic with significant demand for therapeutic movement. The studio has 49 Birdeye reviews praising its instructors' ability to modify programming for chronic conditions without compromising the quality of the workout for pain-free practitioners. The Symmes Township location is convenient for Mason, Blue Ash, and northeast Cincinnati residents who want consistent, accessible reformer programming without the drive to the city center.",
    address: "12088 Montgomery Rd, Cincinnati, OH 45249",
    bestFor: "Back pain relief, northeast Cincinnati suburbs, Mason and Blue Ash residents",
    signatureClass: "Reformer Restore",
    bookingTip: "The back pain specialization means the Restore class format is particularly popular here — book it separately from the standard reformer classes.",
  },
];

const BOOKING_TIPS = [
  {
    heading: "Cincinnati's hills shape neighborhood fitness geography",
    body: "Cincinnati is a city of hills and valleys — travel between neighborhoods can take longer than distances suggest. The east-side cluster (Hyde Park, Kenwood, Oakley) is largely self-contained. OTR and College Hill serve different communities. Choose a studio that sits on your habitual daily route rather than requiring a special trip.",
  },
  {
    heading: "The medical corridor creates strong therapeutic demand",
    body: "Cincinnati is a major healthcare hub — UC Health, Cincinnati Children's, and Mercy Health are among the large systems anchored here. The resulting concentration of healthcare professionals creates elevated demand for evidence-informed, therapeutically aware Pilates instruction. Studios with clinical specializations book out faster than you'd expect.",
  },
  {
    heading: "BASI credentials matter — ask before you book",
    body: "Cincinnati has an unusual concentration of BASI-trained instructors relative to its size. If methodological seriousness matters to you, ask about instructor credentials before booking. The difference between BASI-trained instruction and general group fitness certification is not subtle.",
  },
  {
    heading: "Intro packages are the standard entry point",
    body: "Every Cincinnati studio offers new-client introductory rates. Use the intro to evaluate instructor quality and community fit before committing. The therapeutic studios (College Hill PT, 12th Street) have more involved intake processes — expect a longer first session.",
  },
  {
    heading: "Grip socks are required at every reformer studio",
    body: "Universal across Cincinnati's reformer market. Full-toe grip socks — bring your own rather than paying front-desk retail prices.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Hyde Park & Oakley",
    description:
      "Cincinnati's most active east-side wellness corridor runs through Hyde Park and Oakley — neighborhoods with a health-invested professional population that supports both franchise studios and serious boutique independents.",
  },
  {
    name: "Over-the-Rhine",
    description:
      "OTR's remarkable revival has brought a serious BASI-credentialed Pilates studio to one of the country's most impressive urban renewal neighborhoods, serving the area's growing young professional and creative class population.",
  },
  {
    name: "Kenwood & Northeast Cincinnati",
    description:
      "The northeast corridor from Kenwood through Symmes Township supports two strong franchise locations serving the area's suburban residential community with consistent scheduling and broad class variety.",
  },
  {
    name: "College Hill & Northwest",
    description:
      "College Hill's historic northwest residential character hosts Cincinnati's most specialized studio — a clinical physical therapy and Pilates practice that draws clients from across the metro for its therapeutic expertise.",
  },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at every reformer studio in Cincinnati. Full-toe grip socks are the universal standard.",
    price: "From $16",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat (6mm)",
    note: "Essential for Cincinnati's mat classes and home practice through the city's winter and summer extremes.",
    price: "From $52",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Standard in Cincinnati's classical studios. Useful for at-home reinforcement between sessions.",
    price: "From $24",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Fabric Resistance Bands",
    note: "Recommended by College Hill PT and classical studio instructors for targeted home practice.",
    price: "From $22",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
  {
    name: "High-Density Foam Roller",
    note: "Post-class fascia release — particularly valuable for therapeutic studio clients between appointments.",
    price: "From $32",
    url: "https://www.amazon.com/s?k=high+density+foam+roller+pilates&tag=pilatescollective-20",
  },
];

const RELATED_CITIES = [
  { city: "Columbus", country: "United States", href: "/cities/columbus", studioCount: 6 },
  { city: "Indianapolis", country: "United States", href: "/cities/indianapolis", studioCount: 6 },
  { city: "Pittsburgh", country: "United States", href: "/cities/pittsburgh", studioCount: 6 },
  { city: "Nashville", country: "United States", href: "/cities/nashville", studioCount: 6 },
];

const FURTHER_READING = [
  {
    title: "Pilates for Back Pain",
    excerpt:
      "Why Pilates is one of the most evidence-supported interventions for chronic back pain — and how to find an instructor who understands it.",
    href: "/blog/pilates-for-back-pain",
    category: "Health",
    readTime: "7 min read",
    date: "2026-02-01",
    imageUrl:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=450&fit=crop",
  },
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
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", position: 2, name: "Cities", item: "https://pilatescollectiveclub.com/cities" },
        { "@type": "ListItem", position: 3, name: "Cincinnati", item: "https://pilatescollectiveclub.com/cities/cincinnati" },
      ],
    },
    {
      "@type": "ItemList",
      name: "Best Pilates Studios in Cincinnati, OH",
      url: "https://pilatescollectiveclub.com/cities/cincinnati",
      numberOfItems: 6,
      itemListElement: STUDIOS.map((s, i: number) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "ExerciseGym",
          name: s.name,
          description: s.review.slice(0, 160),
          address: { "@type": "PostalAddress", streetAddress: s.address, addressLocality: "Cincinnati", addressRegion: "OH", addressCountry: "US" },
        },
      })),
    },
    {
      "@type": "Article",
      headline: "Best Pilates Studios in Cincinnati, OH (2026)",
      url: "https://pilatescollectiveclub.com/cities/cincinnati",
      dateModified: "2026-06-01",
      author: { "@type": "Organization", name: "Pilates Collective Club" },
      publisher: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com" },
    },
  ],
};

export default function CincinnatiPage() {
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
              Best Pilates Studios in Cincinnati, OH
            </h1>
            <p className="text-sm mb-6" style={{ color: "#9c8678" }}>
              Updated June 2026 · 6 studios reviewed
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "#5c4f47" }}>
              Cincinnati's Pilates scene has more depth than the city's national fitness profile suggests.
              The combination of a major medical corridor, a vibrant Over-the-Rhine revival, and
              established east-side residential neighborhoods with strong wellness culture has produced
              a market with serious options at every level — from the city's official BASI host studio
              in OTR to a clinical physical therapy and Pilates practice in College Hill, to owner-operated
              boutiques in Oakley capping classes at seven students. These six studios represent the best
              Cincinnati has to offer in 2026.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto relative rounded-2xl overflow-hidden" style={{ height: "420px" }}>
            <Image
              src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1400&h=840&fit=crop"
              alt="Pilates studio in Cincinnati, OH"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium opacity-90">Cincinnati, Ohio</p>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "#2d2926" }}>
              The 6 Best Pilates Studios in Cincinnati
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
              Booking Tips for Cincinnati
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
              Gear Cincinnati instructors recommend.{" "}
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
              Cincinnati Neighborhoods for Pilates
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
          searchPlaceholder="Ask: best reformer Pilates in Cincinnati…"
        />
      </main>
      <Footer />
    </>
  );
}
