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
  title: "Best Pilates Studios in Baltimore, MD (2026) — Curated Guide",
  description: "The best Pilates studios in Baltimore — reformer boutiques and classical method practices in Fells Point, Mount Vernon, and Harbor East. Verified 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates baltimore", "reformer pilates baltimore", "best pilates studios baltimore", "pilates studio baltimore md", "pilates classes baltimore", "fells point pilates", "harbor east pilates", "pilates maryland", "best reformer pilates baltimore"],
  openGraph: {
    title: "Best Pilates Studios in Baltimore, MD (2026)",
    description:
      "Curated Pilates studios in Baltimore — reformer and classical picks from Fells Point to Harbor East. Verified 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/baltimore",
    images: [
      {
        url: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Pilates studio in Baltimore, MD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Baltimore (2026)",
    description:
      "The 6 best Pilates studios in Baltimore — curated, verified, and reviewed for 2026.",
    images: [
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=1200&h=630&fit=crop",
    ],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/baltimore",
  },
};

const STUDIOS = [
  {
    number: "1",
    name: "Club Pilates Rotunda",
    neighborhood: "Hampden / Rotunda",
    priceLevel: "$$$",
    review: "Club Pilates Rotunda sits inside the Rotunda complex on West 40th Street, at the Hampden–Roland Park border. It offers the brand's levelled group reformer format in a polished, welcoming studio, and it is one of the most convenient reformer options for north Baltimore — Hampden, Roland Park, Medfield and the Johns Hopkins Homewood area.",
    caveat: "a franchise studio follows a national curriculum — consistent and well-organised, but less individual than an owner-run independent.",
    address: "727 W 40th St, Suite 132, Baltimore, MD 21211",
    bestFor: "North Baltimore residents, all levels, structured reformer programme",
    signatureClass: "Reformer Flow",
    bookingTip: "Book morning and early-evening classes at least 48 hours ahead — they are the first to fill.",
  },
  {
    number: "2",
    name: "Club Pilates Canton Waterfront",
    neighborhood: "Canton / Waterfront",
    priceLevel: "$$$",
    review: "Club Pilates' Canton Waterfront studio serves southeast Baltimore — Canton, Brewers Hill and Highlandtown — with the same levelled group reformer system as the Rotunda studio. Reviewers highlight friendly staff, patient instructors and early-morning class options that make it easier to build a consistent routine.",
    caveat: "we could not independently confirm the studio's current street address, so check the Club Pilates website before your first visit.",
    address: "—",
    bestFor: "Canton and southeast Baltimore residents, early-morning classes",
    signatureClass: "Reformer Flow",
    bookingTip: "Weekend mornings are popular — book a few days ahead.",
  },
  {
    number: "3",
    name: "Pilates House",
    neighborhood: "Fells Point",
    priceLevel: "$$$",
    review: "Pilates House on Thames Street is a woman-owned studio known for a technically classical approach to spring-resistance work, and it is one of the most-reviewed Pilates studios in Baltimore on ClassPass (4.9 stars across a very large number of ratings). Classes such as Coreset are designed to be easy for newcomers to follow while still being challenging.",
    caveat: "a classical, technique-led approach means slower, more precise classes — if you want a fast, music-driven sculpt class, try somewhere else first.",
    address: "1809 Thames St, Baltimore, MD 21231",
    bestFor: "Classical-leaning reformer instruction in Fells Point",
    signatureClass: "Coreset",
    bookingTip: "Check ClassPass as well as the studio's own schedule — it is one of the most popular Baltimore listings there.",
  },
  {
    number: "4",
    name: "Ebene Pilates",
    neighborhood: "Locust Point",
    priceLevel: "$$",
    review: "Ebene Pilates on Beason Street describes itself as a classical Pilates studio with a contemporary twist — classical method principles taught with a modern approach. It is a smaller, independent option for South Baltimore residents who want method-based instruction rather than a franchise format.",
    caveat: "there is less published review data for this studio than for the larger names here — take an intro class to judge the teaching yourself.",
    address: "1642 Beason St, Baltimore, MD 21230",
    bestFor: "Classical-with-a-twist Pilates in South Baltimore",
    signatureClass: "Classical Mat & Reformer",
    bookingTip: "Contact the studio before your first visit to find the right class level.",
  },
  {
    number: "5",
    name: "Embody Pilates & Wellness",
    neighborhood: "Mount Washington",
    priceLevel: "$$$",
    review: "Embody is a north Baltimore studio and spa that combines boutique fitness classes — Pilates and barre — with physical therapy, massage, counselling and beauty services under one roof. Classes are small with personalised attention, in a rustic, chic space with modern equipment, which makes it a strong fit for clients who want Pilates alongside therapeutic or recovery services.",
    caveat: "it is a multi-service wellness spa rather than a Pilates-only studio — great for integrated care, less so if you only want classical apparatus work.",
    address: "5002 Lawndale Ave, Baltimore, MD 21210",
    bestFor: "Pilates combined with physical therapy and wellness services",
    signatureClass: "Small-Group Reformer",
    bookingTip: "If you are coming back from an injury, ask about combining physical therapy with Pilates sessions.",
  },
  {
    number: "6",
    name: "Club Pilates Laurel",
    neighborhood: "Laurel (Baltimore–Washington Corridor)",
    priceLevel: "$$",
    review: "Club Pilates Laurel on Baltimore Avenue (US-1) serves the suburban Baltimore–Washington corridor with the brand's levelled group reformer programme. It is a practical choice for people who live or work between the two cities and want reliable reformer access without driving into either downtown.",
    caveat: "a franchise format — consistent, but less individual than an independent studio.",
    address: "14712 Baltimore Ave, Suite 103, Laurel, MD 20707",
    bestFor: "Corridor commuters, all levels, membership-based training",
    signatureClass: "Reformer Flow",
    bookingTip: "Memberships work out cheapest per class if you train three or more times a week.",
  },
];

const BOOKING_TIPS = [
  {
    heading: "Baltimore rewards neighborhood loyalty",
    body: "Baltimore's distinct neighborhood identities — Fells Point, Canton, Hampden, Mount Washington — each have their own studio culture and community character. Choosing a studio in your own neighborhood builds better practice habits than commuting across the city, and in Baltimore's neighborhood-first culture, belonging to a local studio has social as well as physical benefits.",
  },
  {
    heading: "Johns Hopkins and the medical community shape the market",
    body: "Baltimore's enormous healthcare sector — anchored by Johns Hopkins, University of Maryland Medical System, and the VA — creates strong demand for evidence-informed, rehabilitation-aware movement practices. Studios near the medical institutions and the Johns Hopkins campus tend to have instructors with more clinical depth than the national average. Worth seeking out if you're managing a physical condition.",
  },
  {
    heading: "Snow and winter weather affect scheduling",
    body: "Baltimore winters bring occasional significant snowfall that can close studios or reduce attendance. Most studios have liberal credit or make-up policies for weather-related cancellations — confirm the policy before purchasing a class pack. January and February are the months most likely to experience disruptions.",
  },
  {
    heading: "Intro packages are the most financially efficient entry point",
    body: "Every Baltimore studio offers a new-client introductory rate. Three sessions at an introductory price is consistently the best way to evaluate a studio before committing to a monthly membership, and Baltimore's moderate price point makes this especially practical compared to coastal US markets.",
  },
  {
    heading: "Grip socks are required at every reformer studio",
    body: "Universal across Baltimore's reformer market. Bring your own — full-toe grip socks from Amazon are a fraction of front-desk retail at every studio in the city.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Hampden & Roland Park",
    description:
      "Baltimore's most wellness-oriented north-side corridor supports a strong mix of franchise and independent studios. Hampden's independent character and Roland Park's established professional community create a studio culture that is both community-warm and instruction-serious.",
  },
  {
    name: "Fells Point & Canton",
    description:
      "Baltimore's historic waterfront neighborhoods — cobblestone streets, Federal Hill views, and a dense young professional population — have developed excellent independent and franchise studio options. The active, outdoors-first community here demands genuinely good instruction.",
  },
  {
    name: "Mount Washington & North Baltimore",
    description:
      "The quiet urban villages of Baltimore's north side support boutique independent studios with a therapeutic and wellness-integrated approach. Mount Washington in particular has the character of a neighborhood that takes physical health seriously over the long term.",
  },
  {
    name: "Baltimore–Washington Corridor",
    description:
      "The suburban corridor between Baltimore and DC — Laurel, Columbia, Ellicott City — has a strong franchise studio presence serving the large commuter and suburban family population. Accessible, well-priced, and practically convenient for corridor residents.",
  },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at every reformer studio in Baltimore. Full-toe grip socks are the universal standard.",
    price: "From $15",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat (6mm)",
    note: "Essential for Baltimore's mat classes and home practice through the city's significant winter season.",
    price: "From $18",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Standard in Baltimore's classical studios. Supports home practice between sessions.",
    price: "From $15",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Fabric Resistance Bands",
    note: "Portable fabric bands extend your Pilates practice at home through Baltimore's winter months.",
    price: "From $10",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
  {
    name: "High-Density Foam Roller",
    note: "Post-class fascia release — practical for post-commute unwinding and pre-class warm-up in Baltimore's colder months.",
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
  { city: "Washington DC", country: "United States", href: "/cities/washington-dc", studioCount: 6 },
  { city: "Philadelphia", country: "United States", href: "/cities/philadelphia", studioCount: 6 },
  { city: "New York", country: "United States", href: "/cities/new-york", studioCount: 6 },
  { city: "Boston", country: "United States", href: "/cities/boston", studioCount: 6 },
];

const FURTHER_READING = [
  {
    title: "Pilates for Back Pain: What the Research Shows",
    excerpt:
      "What Pilates can and can't do for chronic lower back pain — and the specific exercises with the strongest evidence.",
    href: "/blog/pilates-for-back-pain",
    category: "Health",
    readTime: "10 min read",
    date: "2026-02-14",
    imageUrl:
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&h=450&fit=crop",
  },
  {
    title: "How to Choose a Pilates Instructor",
    excerpt:
      "Certifications, teaching style, and lineage — everything you need to evaluate a new instructor before committing.",
    href: "/blog/how-to-choose-a-pilates-instructor",
    category: "Education",
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
        { "@type": "ListItem", position: 3, name: "Baltimore", item: "https://pilatescollectiveclub.com/cities/baltimore" },
      ],
    },
    {
      "@type": "ItemList",
      name: "Best Pilates Studios in Baltimore, MD",
      url: "https://pilatescollectiveclub.com/cities/baltimore",
      numberOfItems: 6,
      itemListElement: STUDIOS.map((s, i: number) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "ExerciseGym",
          name: s.name,
          description: s.review.slice(0, 160),
          address: { "@type": "PostalAddress", streetAddress: s.address, addressLocality: "Baltimore", addressRegion: "MD", addressCountry: "US" },
        },
      })),
    },
    {
      "@type": "Article",
      headline: "Best Pilates Studios in Baltimore, MD (2026)",
      url: "https://pilatescollectiveclub.com/cities/baltimore",
      dateModified: "2026-06-01",
      author: { "@type": "Organization", name: "Pilates Collective Club" },
      publisher: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com" },
    },
  ],
};

export default function BaltimorePage() {
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
              Best Pilates Studios in Baltimore, MD
            </h1>
            <p className="text-sm mb-6" style={{ color: "#9c8678" }}>
              Updated October 2026 · 6 studios reviewed
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "#5c4f47" }}>
              Baltimore is one of the East Coast's most characterful cities — a place where neighborhoods
              have genuine identities, the waterfront is still working, and the Johns Hopkins medical
              complex produces an unusually health-literate professional class. That combination has
              created a Pilates market that is both community-rooted and instruction-serious. From the
              cobblestone studios of Fells Point to the wellness-integrated boutiques of Mount Washington,
              Baltimore's Pilates scene in 2026 rewards practitioners who explore beyond the franchise
              defaults. These six studios represent the best of what the city offers.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto relative rounded-2xl overflow-hidden" style={{ height: "420px" }}>
            <Image
              src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=1400&h=840&fit=crop"
              alt="Pilates studio in Baltimore, MD"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium opacity-90">Baltimore, Maryland</p>
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
              Gear Baltimore instructors recommend.{" "}
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
              The 6 Best Pilates Studios in Baltimore
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
              Booking Tips for Baltimore
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
              Baltimore Neighborhoods for Pilates
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
          searchPlaceholder="Ask: best reformer Pilates in Baltimore…"
        />
      </main>
      <Footer />
    </>
  );
}
