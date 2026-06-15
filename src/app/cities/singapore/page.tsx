import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Studios in Singapore (2026) — Curated Guide",
  description: "The best Pilates studios in Singapore — reformer boutiques in Orchard, Dempsey, Tiong Bahru, and the CBD. Five curated picks, verified June 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates singapore", "reformer pilates singapore", "best pilates studios singapore", "pilates studio singapore", "pilates classes singapore", "pilates orchard singapore", "pilates dempsey", "pilates tiong bahru", "best reformer pilates singapore", "pilates cbd singapore"],
  openGraph: {
    title: "Best Pilates Studios in Singapore (2026)",
    description: "Five curated Pilates studios in Singapore — Orchard, Dempsey, and Tiong Bahru reformer picks. Verified June 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/singapore",
    images: [{ url: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=80", width: 1200, height: 630, alt: "Singapore city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Singapore (2026)",
    description: "Our curated guide to Singapore's finest Pilates studios — five verified picks with booking tips.",
    images: ["https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=80"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/singapore" },
};

const STUDIOS = [
  {
    number: "01",
    name: "ABSOLUTE Boutique Fitness",
    neighborhood: "Raffles Place",
    priceLevel: "S$$$",
    review: "ABSOLUTE has anchored itself in the Raffles Place financial district with the confidence of a studio that understands its clientele: time-pressed executives who need structured, efficient movement programming delivered without fuss. The reformer classes run to a tight format that maximises the fifty-minute session window, with instructors who know how to scale intensity for clients arriving straight from a board meeting or a cross-border flight. The studio's central location and reliable programming have made it a fixture for Singapore's international banking and legal community, many of whom have held memberships for years. Equipment is well-maintained, the air conditioning is appropriately aggressive for the city's climate, and the front-of-house team operates with the efficiency the postcode demands. For practitioners who value consistency and convenience above boutique atmosphere, ABSOLUTE delivers both.",
    address: "—",
    bestFor: "Time-efficient reformer Pilates for CBD professionals",
    signatureClass: "ABSOLUTE Reformer",
    bookingTip: "Lunchtime slots fill fastest; book the night before for weekday midday classes",
  },
  {
    number: "02",
    name: "PURE Yoga & Pilates",
    neighborhood: "Orchard Road",
    priceLevel: "S$$$$",
    review: "PURE's Singapore flagship occupies a generous floor plate on Orchard Road, positioning itself as the premium all-practice destination for a clientele that takes both yoga and Pilates seriously as complementary disciplines. The Pilates programme is taught by instructors with international training backgrounds, and the studio's investment in Balanced Body and Peak Pilates equipment reflects a commitment that goes beyond aesthetic. The atmosphere is polished without being cold — there is genuine community here, built over years among a membership base that includes diplomats, regional executives, and wellness professionals. Group classes maintain small ratios by Singapore standards, and the workshop calendar brings in international master teachers with enough regularity to keep long-term practitioners engaged. It is the obvious choice for those who want a single, high-quality studio address that can serve all their movement needs.",
    address: "—",
    bestFor: "Premium studio integrating Pilates and yoga under one roof",
    signatureClass: "PURE Reformer Flow",
    bookingTip: "Single passes available but membership unlocks priority booking for peak slots",
  },
  {
    number: "03",
    name: "Lab Studios Duxton",
    neighborhood: "Tanjong Pagar",
    priceLevel: "S$$$",
    review: "Lab Studios has established itself in the Duxton Hill conservation shophouse belt with an aesthetic and teaching philosophy that feels genuinely considered rather than trend-chasing. The studio combines reformer Pilates with barre and sculpt formats, creating a programming menu that retains clients across different energy states and goals throughout the week. Instructors are carefully selected and the cueing is notably specific — this is not a studio where generic motivational language substitutes for technical correction. Tanjong Pagar's creative and professional demographic has adopted Lab as a neighbourhood institution, and the post-class social energy on Duxton Hill's restaurant strip gives the experience a social dimension that purely functional studios lack. The boutique scale means the front desk knows regulars by name, which counts for something in a city with no shortage of impersonal wellness chains.",
    address: "—",
    bestFor: "Reformer, barre, and sculpt in a creative neighbourhood setting",
    signatureClass: "Lab Reformer Sculpt",
    bookingTip: "Duxton Hill can be congested at peak times — arrive by MRT and allow extra walking time",
  },
  {
    number: "04",
    name: "Breathe Pilates",
    neighborhood: "Holland Village",
    priceLevel: "S$$$",
    review: "Breathe Pilates occupies a particular niche in Singapore's studio landscape: a studio that prioritises the therapeutic and rehabilitative dimensions of the method alongside physical conditioning, drawing a clientele that includes postnatal clients, people managing chronic pain, and practitioners returning from injury. The Holland Village location suits this emphasis — the neighbourhood has a settled, residential quality that attracts long-term expat families and locally rooted professionals who want a studio that will adapt to their bodies over time rather than simply loading them harder each week. Instructors hold certifications across multiple Pilates lineages and the teaching is characterised by patience, anatomical literacy, and genuine interest in long-term client outcomes. Small class sizes are maintained deliberately, and the studio's reputation for intelligent, body-aware instruction has sustained a committed membership for over a decade.",
    address: "—",
    bestFor: "Therapeutic and rehabilitative Pilates; postnatal and injury recovery",
    signatureClass: "Breathe Therapeutic Reformer",
    bookingTip: "New clients complete a movement screening before joining group classes",
  },
  {
    number: "05",
    name: "STRONG Pilates",
    neighborhood: "Buona Vista",
    priceLevel: "S$$$",
    review: "STRONG Pilates brings the Australian brand's performance-oriented reformer format to the Buona Vista one-north district, where the research and biomedical community has proven a natural audience for data-informed, results-driven training. The methodology is built around progressive overload on the reformer — heavier springs, compound movements, and a class structure that produces the kind of fatigue associated with genuine strength training rather than light conditioning work. Instructors coach intensity with confidence and the programming is specific enough that clients track meaningful physical progress over weeks and months. The studio suits athletes and fitness-literate clients who have historically dismissed Pilates as insufficiently demanding, and it has converted a number of sceptics among its membership. For practitioners who want the joint safety of the reformer without sacrificing training stimulus, STRONG makes a compelling case.",
    address: "—",
    bestFor: "Performance reformer Pilates for athletic and fitness-oriented clients",
    signatureClass: "STRONG 50",
    bookingTip: "Trial class available; bring lifting shoes or train in grip socks for best foot contact",
  },
  {
    number: "06",
    name: "SG Pilates",
    neighborhood: "Tiong Bahru",
    priceLevel: "S$$",
    review: "SG Pilates has made Tiong Bahru's beloved conservation estate its home, and the studio carries the neighbourhood's characteristic blend of community warmth and quiet independence. Pricing is deliberately accessible by Singapore standards, driven by a founding philosophy that quality Pilates instruction should not be available only to premium membership holders. The teaching draws on a classical foundation and the studio attracts a genuinely mixed clientele — retirees working on mobility, young professionals building body awareness, and experienced practitioners who appreciate the unhurried pace and instructors who take technical corrections seriously. Equipment is well-chosen and well-maintained, and the intimate studio size means sessions rarely feel anonymous. For visitors to Singapore or those priced out of the CBD studio market, SG Pilates offers one of the city's most honest and considered training experiences.",
    address: "—",
    bestFor: "Accessible classical Pilates in a beloved conservation neighbourhood",
    signatureClass: "SG Fundamentals Reformer",
    bookingTip: "Walk-in friendly compared to CBD studios; weekday mornings reliably available",
  }
];

const BOOKING_TIPS = [
  {
    heading: "Book 5–7 days ahead — Singapore studios fill fast",
    body: "Singapore's premium Pilates studios run tight schedules and fill well in advance. Premium studios typically open bookings 7 days ahead; set a reminder and book immediately when slots open for popular morning and evening classes.",
  },
  {
    heading: "ClassPass is widely used and well-supported",
    body: "ClassPass has strong coverage in Singapore and is genuinely useful for sampling studios across districts before committing to a membership. Peak-time classes may carry a credit premium, but off-peak sessions are often excellent value.",
  },
  {
    heading: "GST applies to all studio fees",
    body: "Singapore's 9% GST applies to all wellness and studio services. Published prices may or may not include GST — check before booking to avoid surprises at payment.",
  },
  {
    heading: "Grip socks are mandatory everywhere",
    body: "Every reformer studio in Singapore requires grip socks. Bring your own (toeless style is the norm) or buy at the studio for $20–28 SGD. Most studios also sell branded socks as a keepsake.",
  },
  {
    heading: "Expect to pay $45–90 SGD per reformer class",
    body: "Drop-in rates range from around $45 SGD at volume studios to $90 SGD for private or premium boutique sessions. Monthly memberships and class packs typically offer 20–35% savings over drop-in rates.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "CBD & Tanjong Pagar",
    description:
      "Singapore's financial district has a high density of studios catering to the lunchtime and early-morning professional crowd. Scheduling density is high, and studios here are optimised for convenience and efficiency. Some of the city's most classical and technically rigorous studios are also found here.",
  },
  {
    name: "Orchard & River Valley",
    description:
      "The Orchard corridor is home to several of Singapore's most established premium studios. Convenient, well-connected, and with a loyal residential and hotel-staying clientele, this is a reliable area to find high-quality reformer Pilates in clean, well-maintained facilities.",
  },
  {
    name: "Holland Village & Buona Vista",
    description:
      "Holland Village is a long-time expat enclave and has one of Singapore's most consistent concentrations of independent wellness studios. The atmosphere is relaxed and community-oriented, and studios here tend to have particularly loyal, long-term client bases.",
  },
  {
    name: "Dempsey Hill & Tanglin",
    description:
      "Set in beautifully converted colonial-era barracks, Dempsey Hill is a tranquil wellness enclave away from the urban density. Studios here are typically smaller, more holistic, and attract clients who prioritise calm, quality, and privacy over convenience.",
  },
];

const GEAR = [
  {
    name: "Pilates Grip Socks",
    note: "Required at most reformer studios. Full-toe grip socks are the standard.",
    price: "From $16",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat",
    note: "A quality 6mm mat is worth having for mat classes and home practice between studio sessions.",
    price: "From $52",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Many studios incorporate the magic circle — worth owning for home reinforcement work.",
    price: "From $24",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Resistance Bands",
    note: "Fabric resistance loops extend your home Pilates practice and support reformer spring work.",
    price: "From $22",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
  {
    name: "Foam Roller",
    note: "Essential for fascial release and spinal mobility work before and after class.",
    price: "From $32",
    url: "https://www.amazon.com/s?k=high+density+foam+roller+pilates&tag=pilatescollective-20",
  },
  {
    name: "Home Pilates Reformer",
    note: "A home reformer extends your studio practice — AeroPilates and Align entry models deliver a genuine full-body session.",
    price: "From $450",
    url: "https://www.amazon.com/s?k=home+pilates+reformer+aeropilates+align&tag=pilatescollective-20",
  },
];


const RELATED_CITIES = [
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 5 },
  { city: "Amsterdam", country: "Netherlands", href: "/cities/amsterdam", studioCount: 5 },
  { city: "Berlin", country: "Germany", href: "/cities/berlin", studioCount: 5 },
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 5 },
];

const FURTHER_READING = [
  {
    title: "Best Pilates Equipment for Home Practice",
    excerpt: "Everything you need between studio sessions — from a quality mat to resistance bands.",
    href: "/blog/best-pilates-equipment-for-home-practice",
    category: "Equipment",
    readTime: "10 min read",
    date: "May 2026",
    imageUrl: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80",
  },
  {
    title: "The Beginner's Guide to Reformer Pilates",
    excerpt: "What to expect in your first reformer class, how to choose a studio, and how to progress.",
    href: "/blog/beginners-guide-to-reformer-pilates",
    category: "Beginner Guide",
    readTime: "8 min read",
    date: "May 2026",
    imageUrl: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=800&q=80",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Singapore", "item": "https://pilatescollectiveclub.com/cities/singapore" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Singapore",
      "description": "Curated guide to the top 5 Pilates studios in Singapore.",
      "url": "https://pilatescollectiveclub.com/cities/singapore",
      "numberOfItems": 6,
      "itemListElement": STUDIOS.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "ExerciseGym",
          "name": s.name,
          "description": s.review.slice(0, 200),
          "address": {
            "@type": "PostalAddress",
            "streetAddress": s.address,
            "addressLocality": "Singapore",
            "addressCountry": "SG",
          },
        },
      })),
    },
  ],
};

export default function SingaporePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>
                City Guide
              </span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>
                Singapore
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br />
              <span style={{ color: "#8b4a31" }}>in Singapore</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Updated May 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Singapore has quietly become one of Asia's most sophisticated Pilates markets. A city that takes health seriously, and with a large international professional population accustomed to quality, Singapore has nurtured both classical lineage studios and forward-thinking reformer boutiques that hold their own against the best in London or New York. From the conservation shophouses of Duxton Hill to the waterfront studios of VivoCity, the standard of instruction is consistently high. This guide covers the five studios we rate most highly, with everything you need before booking your first session.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image
                src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1400&q=80"
                alt="Singapore skyline"
                fill
                className="object-cover"
                style={{ filter: "brightness(0.88)" }}
              />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Singapore</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Asia's most sophisticated Pilates market</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>
              6 Studios · Curated & Verified
            </p>
            <div className="space-y-8">
              {STUDIOS.map((studio) => (
                <StudioListing key={studio.number} {...studio} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Tips for booking Pilates in Singapore
            </h2>
            <div className="space-y-6">
              {BOOKING_TIPS.map((tip) => (
                <div key={tip.heading} className="pcc-booking-tip flex gap-5 rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217, 194, 186, 0.3)" }}>
                  <div className="w-1.5 rounded-full shrink-0 mt-1" style={{ backgroundColor: "#8b4a31", minHeight: "20px" }} />
                  <div>
                    <h3 className="text-base font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{tip.heading}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{tip.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best neighbourhoods for Pilates in Singapore
            </h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
              Singapore's Pilates landscape is shaped by its neighbourhoods. Here's where to look depending on where you're based.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {NEIGHBORHOODS.map((n) => (
                <div key={n.name} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217, 194, 186, 0.35)" }}>
                  <h3 className="text-base font-semibold mb-2" style={{ color: "#8b4a31", fontFamily: "'Playfair Display', serif" }}>{n.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{n.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Studio Gear */}
        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What to bring to your first class</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
              Grip socks are required at most reformer studios in Singapore. These are our recommended picks — all available on Amazon.{" "}
              <Link href="/affiliate-disclosure" style={{ color: "#8b4a31", textDecoration: "underline", fontFamily: "'Montserrat', sans-serif", fontSize: "inherit" }}>Affiliate disclosure.</Link>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {GEAR.map((g) => (
                <a key={g.name} href={g.url} target="_blank" rel="noopener noreferrer sponsored" style={{ textDecoration: "none" }}>
                  <div className="rounded-xl p-5 h-full flex flex-col justify-between" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.35)", transition: "border-color 0.2s" }}>
                    <div>
                      <h3 className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{g.name}</h3>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{g.note}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{g.price}</span>
                      <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#c5a882", fontFamily: "'Montserrat', sans-serif" }}>Shop →</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>


        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Related city guides</h2>
            <p className="text-sm mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Explore our guides to other cities with thriving Pilates scenes.</p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
              {RELATED_CITIES.map((c) => (
                <CityCard key={c.city} {...c} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
              {FURTHER_READING.map((a) => (
                <ArticleCard key={a.href} {...a} />
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Find Pilates near you"
          subtitle="Use our curated city guides to find the best Pilates studios worldwide."
          showSearch
          searchPlaceholder="Ask: best reformer Pilates in London…"
        />
      </main>
      <Footer />
    </>
  );
}
