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
  title: "Best Pilates Studios in Orlando, FL (2026) — Curated Guide",
  description: "The best Pilates studios in Orlando — reformer boutiques in Winter Park, College Park, and Dr. Phillips. Six verified picks for every level, 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates orlando", "reformer pilates orlando", "best pilates studios orlando fl", "pilates studio orlando", "pilates classes orlando", "winter park pilates fl", "pilates dr phillips", "pilates florida", "best reformer pilates orlando"],
  openGraph: {
    title: "Best Pilates Studios in Orlando, FL (2026)",
    description:
      "Six curated Pilates studios in Orlando — Winter Park and College Park reformer boutiques. Verified 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/orlando",
    images: [
      {
        url: "https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Pilates studio in Orlando, FL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Orlando (2026)",
    description:
      "The 6 best Pilates studios in Orlando — curated, verified, and reviewed for 2026.",
    images: [
      "https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?w=1200&h=630&fit=crop",
    ],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/orlando",
  },
};

const STUDIOS = [
  {
    number: "1",
    name: "Club Pilates SODO",
    neighborhood: "SoDo / South Downtown",
    priceLevel: "$$$",
    review:
      "Club Pilates SODO is one of Orlando's most centrally located and consistently top-rated reformer studios, serving the South Orange Avenue corridor that connects Downtown Orlando to the SoDo district. The studio draws a diverse mix of healthcare workers from the nearby ORMC medical complex, young professionals from the surrounding residential developments, and serious practitioners who appreciate the quality of instruction. Consistently earns five-star reviews for attentive instructors and a warm, inclusive community atmosphere.",
    address: "3123 S Orange Ave #103, Orlando, FL 32806",
    bestFor: "Central Orlando and SoDo residents, all levels, consistent reformer",
    signatureClass: "Reformer Flow",
    bookingTip: "Evening classes fill with the post-work SODO crowd — book 48 hours ahead for prime evening slots.",
  },
  {
    number: "2",
    name: "Club Pilates Dr. Phillips",
    neighborhood: "Dr. Phillips / Restaurant Row",
    priceLevel: "$$$",
    review:
      "Club Pilates Dr. Phillips serves one of Orlando's most affluent and wellness-invested communities — the Dr. Phillips corridor along Restaurant Row, home to the theme park industry's executive class and established Florida families. The studio is professionally run and staffed by an instructor team that earns consistently strong reviews from the community's health-savvy clientele. The schedule is wide, the atmosphere is polished, and the proximity to Universal, Disney corporate offices, and the hospitality industry creates a studio community that is both active and demanding of quality.",
    address: "7600 Dr. Phillips Blvd #86, Orlando, FL 32819",
    bestFor: "Dr. Phillips and Restaurant Row residents, theme park industry professionals, all levels",
    signatureClass: "Flow",
    bookingTip: "Morning slots fill with the Dr. Phillips residential community — book two days ahead.",
  },
  {
    number: "3",
    name: "Club Pilates Waterford Lakes",
    neighborhood: "Waterford Lakes / East Orlando",
    priceLevel: "$$",
    review:
      "Club Pilates Waterford Lakes serves East Orlando's large suburban residential population with accessible, well-structured reformer programming at membership rates that make regular attendance genuinely practical. The Waterford Lakes Town Center location is convenient for residents of East Orlando, UCF-adjacent communities, and the surrounding Seminole County suburbs. The studio earns strong reviews for its welcoming atmosphere and instructors who are genuinely patient with practitioners new to the reformer format.",
    address: "504 N Alafaya Trl #108, Orlando, FL 32828",
    bestFor: "East Orlando and UCF-area residents, beginners, affordable memberships",
    signatureClass: "Club Reformer 57",
    bookingTip: "The intro 3-class package is the most cost-effective way to audit the studio before committing to a membership.",
  },
  {
    number: "4",
    name: "Studio Halo",
    neighborhood: "Downtown Orlando",
    priceLevel: "$$$",
    review:
      "Studio Halo is Downtown Orlando's most distinctive independent Pilates studio — a boutique practice on Church Street that serves the city's urban core with a reformer and mat program that takes the method seriously as a movement education discipline. The downtown location draws from the growing residential population of the Thornton Park, Lake Eola Heights, and Parramore communities, as well as professionals from the surrounding office towers. Small class sizes, experienced instructors, and a genuine commitment to individual client development set Studio Halo apart from the franchise options that dominate the broader Orlando market.",
    address: "520 E Church St #105, Orlando, FL 32801",
    bestFor: "Downtown residents, boutique reformer, movement-educated practitioners",
    signatureClass: "Classical Reformer",
    bookingTip: "Classes are capped small — book online as soon as the weekly schedule opens to secure your spot.",
  },
  {
    number: "5",
    name: "BODYBAR Pilates",
    neighborhood: "SoDo / South Downtown",
    priceLevel: "$$$",
    review:
      "BODYBAR Pilates is a premium boutique Pilates brand with a strong Orlando presence in the South Downtown corridor. The brand positions itself as a step above the standard franchise experience — smaller classes, more instructor attention, and a design aesthetic that reflects a genuine investment in the studio environment. The South Orange Avenue location serves the SODO and Delaney Park communities with a program that is physically demanding and thoughtfully sequenced. A strong alternative for practitioners who have plateaued at standard franchise formats and want more intensity and individualization.",
    address: "2875 S Orange Ave #540, Orlando, FL 32806",
    bestFor: "SODO and Delaney Park residents, intermediate practitioners, boutique experience",
    signatureClass: "BODYBAR Reformer",
    bookingTip: "New clients must complete an intro assessment — schedule it before your first group class.",
  },
  {
    number: "6",
    name: "Winter Park Pilates",
    neighborhood: "Winter Park",
    priceLevel: "$$$",
    review:
      "Winter Park Pilates is Orlando's most beloved independent studio — a community anchor in Florida's most charming city that has served Winter Park's sophisticated, wellness-invested residential population for years. The Aloma Avenue location is quintessential Winter Park: unhurried, beautifully appointed, and staffed by instructors who bring genuine mastery of the method alongside the warmth of a neighborhood studio that knows its clients by name. The programming covers the full spectrum from beginner reformer through classical apparatus work, and the studio is particularly well-regarded for its private and duet sessions.",
    address: "3580 Aloma Ave #3, Winter Park, FL 32792",
    bestFor: "Winter Park and northeast Orlando residents, classical and contemporary Pilates, private sessions",
    signatureClass: "Classical Reformer & Apparatus",
    bookingTip: "Private sessions book out two weeks ahead — contact the studio directly to secure consistent availability.",
  },
];

const BOOKING_TIPS = [
  {
    heading: "Orlando's summer heat makes studios essential",
    body: "Central Florida summers are intensely hot and humid from May through October. The outdoor run or bike ride that was pleasant in March becomes genuinely difficult by July. Pilates studios' climate-controlled environments become the primary movement option during these months, and demand for morning and evening classes increases significantly. Book standing slots before summer arrives.",
  },
  {
    heading: "The theme park industry creates non-standard scheduling needs",
    body: "Orlando's enormous hospitality and theme park sector employs hundreds of thousands of workers on shift-based schedules. Many studios accommodate midday and mid-week classes that would be unusual in other cities — worth inquiring about if your schedule follows a non-standard pattern.",
  },
  {
    heading: "Snowbird season drives demand (November–March)",
    body: "Orlando attracts a large seasonal population from November through March — retirees, seasonal workers, and families visiting theme parks. Studio demand increases during this period, particularly at studios near tourist corridors. Establish standing bookings before November if you're a year-round resident.",
  },
  {
    heading: "Intro packages are the smartest entry point",
    body: "Every Orlando studio offers a new-client introductory rate — typically three reformer sessions for the price of one drop-in. This is the most cost-effective way to audit a studio's instruction quality and community fit before committing to a monthly membership.",
  },
  {
    heading: "Grip socks are required at every reformer studio",
    body: "Universal across Orlando's studio market. Bring your own — full-toe grip socks from Amazon cost a fraction of front-desk retail at every studio in the city.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Winter Park",
    description:
      "Florida's most charming small city — brick-lined Park Avenue, canopied streets, and a wellness culture that is genuinely sophisticated. Winter Park's Pilates studios are among the most carefully run in the Orlando metro, serving a residential community that values quality instruction and neighborhood character equally.",
  },
  {
    name: "Dr. Phillips & Restaurant Row",
    description:
      "Orlando's most commercially vibrant residential corridor, anchored by the theme park industry's executive population and the city's premier dining scene. Studios here serve a health-invested, professionally mobile clientele with high expectations for instruction quality and scheduling convenience.",
  },
  {
    name: "SoDo & South Downtown",
    description:
      "The South Orange Avenue corridor connecting Downtown Orlando to the SoDo district is home to Orlando's most interesting independent studio options. A diverse, urban clientele drawn from the medical complex, residential developments, and creative industries makes for a studio community with genuine standards.",
  },
  {
    name: "East Orlando & Waterford Lakes",
    description:
      "East Orlando's large suburban residential population is served by accessible franchise studios that prioritize scheduling density and practical membership pricing. A strong practical option for practitioners based east of the I-4 corridor.",
  },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at every reformer studio in Orlando. Full-toe grip socks are the universal standard.",
    price: "From $16",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat (6mm)",
    note: "Orlando's year-round warm climate makes outdoor and home mat practice genuinely practical — a quality mat is worth owning.",
    price: "From $52",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Standard in Orlando's classical studios. Useful for at-home practice on Florida's many days when outdoor movement is too hot.",
    price: "From $24",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Fabric Resistance Bands",
    note: "Portable fabric bands are perfect for Florida's active lifestyle — useful before and after outdoor activity.",
    price: "From $22",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
  {
    name: "High-Density Foam Roller",
    note: "Post-class fascia release — particularly useful for Orlando's active community who combine Pilates with running, cycling, and outdoor sports.",
    price: "From $32",
    url: "https://www.amazon.com/s?k=high+density+foam+roller+pilates&tag=pilatescollective-20",
  },
];

const RELATED_CITIES = [
  { city: "Miami", country: "United States", href: "/cities/miami", studioCount: 6 },
  { city: "Tampa", country: "United States", href: "/cities/tampa", studioCount: 6 },
  { city: "Atlanta", country: "United States", href: "/cities/atlanta", studioCount: 6 },
  { city: "Nashville", country: "United States", href: "/cities/nashville", studioCount: 6 },
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
    title: "Pilates for Posture",
    excerpt:
      "How consistent Pilates practice addresses the postural patterns created by desk work and sedentary habits.",
    href: "/blog/pilates-for-posture",
    category: "Health",
    readTime: "7 min read",
    date: "2026-02-20",
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
        { "@type": "ListItem", position: 3, name: "Orlando", item: "https://pilatescollectiveclub.com/cities/orlando" },
      ],
    },
    {
      "@type": "ItemList",
      name: "Best Pilates Studios in Orlando, FL",
      url: "https://pilatescollectiveclub.com/cities/orlando",
      numberOfItems: 6,
      itemListElement: STUDIOS.map((s, i: number) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "ExerciseGym",
          name: s.name,
          description: s.review.slice(0, 160),
          address: { "@type": "PostalAddress", streetAddress: s.address, addressLocality: "Orlando", addressRegion: "FL", addressCountry: "US" },
        },
      })),
    },
    {
      "@type": "Article",
      headline: "Best Pilates Studios in Orlando, FL (2026)",
      url: "https://pilatescollectiveclub.com/cities/orlando",
      dateModified: "2026-06-01",
      author: { "@type": "Organization", name: "Pilates Collective Club" },
      publisher: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com" },
    },
  ],
};

export default function OrlandoPage() {
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
              Best Pilates Studios in Orlando, FL
            </h1>
            <p className="text-sm mb-6" style={{ color: "#9c8678" }}>
              Updated June 2026 · 6 studios reviewed
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "#5c4f47" }}>
              Beyond the theme parks, Orlando is one of Florida's most dynamic residential cities — a
              place where the healthcare sector, hospitality industry, and rapidly growing technology
              community have created genuine demand for quality movement practices. The city's year-round
              warmth, active outdoor culture, and diverse population have produced a Pilates market that
              is more sophisticated than its tourism reputation suggests. From the timeless elegance of
              Winter Park to the urban energy of South Downtown, these six studios represent the best
              of what Orlando's Pilates scene offers in 2026.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto relative rounded-2xl overflow-hidden" style={{ height: "420px" }}>
            <Image
              src="https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?w=1400&h=840&fit=crop"
              alt="Pilates studio in Orlando, FL"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium opacity-90">Orlando, Florida</p>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "#2d2926" }}>
              The 6 Best Pilates Studios in Orlando
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
              Booking Tips for Orlando
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
              Gear Orlando instructors recommend.{" "}
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
              Orlando Neighborhoods for Pilates
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
          searchPlaceholder="Ask: best reformer Pilates in Orlando…"
        />
      </main>
      <Footer />
    </>
  );
}
