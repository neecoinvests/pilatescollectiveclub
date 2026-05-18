import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Studios in Singapore",
  description:
    "Discover the best Pilates studios in Singapore — from CBD reformer boutiques to Dempsey Hill wellness retreats. Our curated guide to Singapore Pilates in 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: [
    "pilates studios singapore",
    "reformer pilates singapore",
    "best pilates singapore",
    "pilates classes singapore",
    "singapore pilates 2026",
    "pilates cbd singapore",
    "pilates orchard singapore",
    "singapore reformer studios",
    "best reformer pilates singapore",
  ],
  openGraph: {
    title: "Best Pilates Studios in Singapore (2026)",
    description: "Our curated guide to Singapore's finest Pilates studios — five verified picks with booking tips.",
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
    review: "4.9 · 860+ reviews",
    address: "1 Finlayson Green, #02-01, Singapore 049246",
    bestFor: "Premium reformer boutique chain",
    signatureClass: "ABSOLUTE Reformer",
    bookingTip: "ClassPass-compatible; intro 3 classes for S$68",
  },
  {
    number: "02",
    name: "PURE Yoga & Pilates",
    neighborhood: "Orchard Road",
    priceLevel: "S$$$$",
    review: "4.8 · 940+ reviews",
    address: "391 Orchard Rd, #04-09 Ngee Ann City, 238872",
    bestFor: "Luxury yoga & Pilates destination",
    signatureClass: "PURE Reformer Fundamentals",
    bookingTip: "Monthly membership includes unlimited classes",
  },
  {
    number: "03",
    name: "Lab Studios Duxton",
    neighborhood: "Tanjong Pagar",
    priceLevel: "S$$$",
    review: "4.9 · 490+ reviews",
    address: "97 Duxton Rd, #01-01, Singapore 089543",
    bestFor: "Neighbourhood boutique with community vibe",
    signatureClass: "Lab Reformer Circuit",
    bookingTip: "Saturday classes book out by Thursday",
  },
  {
    number: "04",
    name: "Breathe Pilates",
    neighborhood: "Holland Village",
    priceLevel: "S$$$",
    review: "4.9 · 380+ reviews",
    address: "44 Lorong Mambong, Holland Village, 277693",
    bestFor: "Therapeutic & classical Pilates",
    signatureClass: "Breathe Classical Reformer",
    bookingTip: "Physio-led consultations available by appointment",
  },
  {
    number: "05",
    name: "STRONG Pilates",
    neighborhood: "Buona Vista",
    priceLevel: "S$$$",
    review: "4.8 · 560+ reviews",
    address: "71 Ayer Rajah Crescent, #07-14, 139951",
    bestFor: "High-intensity reformer circuit",
    signatureClass: "STRONG 45 Reformer",
    bookingTip: "New client: first class S$20",
  },
  {
    number: "06",
    name: "SG Pilates",
    neighborhood: "Tiong Bahru",
    priceLevel: "S$$",
    review: "4.9 · 310+ reviews",
    address: "78 Guan Chuan St, #01-16, Tiong Bahru, 162078",
    bestFor: "Affordable studio in vintage district",
    signatureClass: "SG Core Reformer",
    bookingTip: "10-class packages start from S$280",
  }
];

const BOOKING_TIPS = [
  {
    heading: "Book 5–7 days ahead — Singapore studios fill fast",
    body: "Singapore&apos;s premium Pilates studios run tight schedules and fill well in advance. Premium studios typically open bookings 7 days ahead; set a reminder and book immediately when slots open for popular morning and evening classes.",
  },
  {
    heading: "ClassPass is widely used and well-supported",
    body: "ClassPass has strong coverage in Singapore and is genuinely useful for sampling studios across districts before committing to a membership. Peak-time classes may carry a credit premium, but off-peak sessions are often excellent value.",
  },
  {
    heading: "GST applies to all studio fees",
    body: "Singapore&apos;s 9% GST applies to all wellness and studio services. Published prices may or may not include GST — check before booking to avoid surprises at payment.",
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
      "Singapore&apos;s financial district has a high density of studios catering to the lunchtime and early-morning professional crowd. Scheduling density is high, and studios here are optimised for convenience and efficiency. Some of the city&apos;s most classical and technically rigorous studios are also found here.",
  },
  {
    name: "Orchard & River Valley",
    description:
      "The Orchard corridor is home to several of Singapore&apos;s most established premium studios. Convenient, well-connected, and with a loyal residential and hotel-staying clientele, this is a reliable area to find high-quality reformer Pilates in clean, well-maintained facilities.",
  },
  {
    name: "Holland Village & Buona Vista",
    description:
      "Holland Village is a long-time expat enclave and has one of Singapore&apos;s most consistent concentrations of independent wellness studios. The atmosphere is relaxed and community-oriented, and studios here tend to have particularly loyal, long-term client bases.",
  },
  {
    name: "Dempsey Hill & Tanglin",
    description:
      "Set in beautifully converted colonial-era barracks, Dempsey Hill is a tranquil wellness enclave away from the urban density. Studios here are typically smaller, more holistic, and attract clients who prioritise calm, quality, and privacy over convenience.",
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
              Singapore has quietly become one of Asia&apos;s most sophisticated Pilates markets. A city that takes health seriously, and with a large international professional population accustomed to quality, Singapore has nurtured both classical lineage studios and forward-thinking reformer boutiques that hold their own against the best in London or New York. From the conservation shophouses of Duxton Hill to the waterfront studios of VivoCity, the standard of instruction is consistently high. This guide covers the five studios we rate most highly, with everything you need before booking your first session.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
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
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Asia&apos;s most sophisticated Pilates market</p>
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
                <div key={tip.heading} className="flex gap-5 rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217, 194, 186, 0.3)" }}>
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
              Singapore&apos;s Pilates landscape is shaped by its neighbourhoods. Here&apos;s where to look depending on where you&apos;re based.
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
