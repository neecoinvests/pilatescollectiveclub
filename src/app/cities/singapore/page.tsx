import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import { jsonLdHtml } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Best Pilates Studios in Singapore (2026) — Curated Guide",
  description: "The best Pilates studios in Singapore — reformer and physio-led studios on Orchard Road, in the CBD, Holland Village and beyond. Six curated picks, verified October 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates singapore", "reformer pilates singapore", "best pilates studios singapore", "pilates studio singapore", "pilates classes singapore", "pilates orchard singapore", "pilates dempsey", "pilates tiong bahru", "best reformer pilates singapore", "pilates cbd singapore"],
  openGraph: {
    title: "Best Pilates Studios in Singapore (2026)",
    description: "Six curated Pilates studios in Singapore — Orchard, CBD and Holland Village picks. Verified October 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/singapore",
    images: [{ url: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=80", width: 1200, height: 630, alt: "Singapore city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Singapore (2026)",
    description: "Our curated guide to Singapore's finest Pilates studios — six verified picks with booking tips.",
    images: ["https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=80"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/cities/singapore" },
};

const STUDIOS = [
  {
    number: "01",
    name: "Absolute Pilates — The Centrepoint",
    neighborhood: "Orchard Road",
    priceLevel: "$$$",
    review: "Absolute is one of Singapore's best-known boutique fitness brands, and its Pilates studios run reformer and Wunda chair classes. The Centrepoint studio on Orchard Road is the most central; there is another at i12 Katong. New clients have been offered two trial classes for $49.",
    caveat: "a larger brand — consistent and polished, but less intimate than a small independent studio.",
    address: "176 Orchard Rd, #04-06 & #04-101, The Centrepoint, Singapore 238843",
    bestFor: "Reformer and Wunda chair classes on Orchard Road",
    signatureClass: "Reformer & Wunda Chair",
    bookingTip: "Use the trial offer to compare formats before buying a pack.",
  },
  {
    number: "02",
    name: "Breathe Pilates",
    neighborhood: "Raffles Quay · United Square · Katong · The Heeren · Galaxis",
    priceLevel: "$$$",
    review: "Breathe Pilates combines physiotherapy and Pilates for rehab and fitness, with programmes for injury recovery and chronic pain. It runs five studios with more than 100 weekly classes, including Raffles Quay in the CBD, and moved its flagship from Novena to United Square in 2026.",
    caveat: "physio-led programmes are priced accordingly — classes have started from about $55.",
    address: "6 Raffles Quay, #11-02, Singapore 048580",
    bestFor: "Physio-informed Pilates for rehab and chronic pain",
    signatureClass: "Rehab Reformer",
    bookingTip: "Ask about a physiotherapy assessment if you are managing an injury.",
  },
  {
    number: "03",
    name: "STRONG Pilates — Tanjong Pagar",
    neighborhood: "Tanjong Pagar",
    priceLevel: "$$",
    review: "STRONG Pilates, the Australian brand, runs HIIT-style reformer classes in Singapore, with studios including Tanjong Pagar, Holland Village and Orchard.",
    caveat: "high-intensity, music-driven classes — not classical Pilates.",
    address: "—",
    bestFor: "HIIT-style reformer in the CBD",
    signatureClass: "STRONG Reformer",
    bookingTip: "Trial prices vary by studio — check the one closest to you.",
  },
  {
    number: "04",
    name: "MORF",
    neighborhood: "Geylang / Sims Avenue",
    priceLevel: "$$$",
    review: "MORF is a women-only reformer studio that leads ClassPass's Singapore reformer ranking, with a 4.85 average from more than 140 reformer-specific reviews and nearly 4.9 overall across more than 18,000 sessions.",
    caveat: "women-only.",
    address: "483 Sims Ave, Singapore",
    bestFor: "Women-only reformer with top ratings",
    signatureClass: "Reformer Pilates",
    bookingTip: "Popular classes fill quickly — book a few days ahead.",
  },
  {
    number: "05",
    name: "Lab Studios — Holland Village",
    neighborhood: "Holland Village",
    priceLevel: "$$",
    review: "Lab Studios runs yoga, barre and Pilates, with a dedicated reformer Pilates outpost; its Holland Village studio is on Holland Avenue.",
    caveat: "a multi-discipline brand — check which classes are reformer.",
    address: "245A Holland Ave, Singapore",
    bestFor: "Pilates alongside yoga and barre in Holland Village",
    signatureClass: "Reformer Pilates",
    bookingTip: "Check the schedule for reformer classes specifically.",
  },
  {
    number: "06",
    name: "Pure Fitness — Pilates",
    neighborhood: "Central Singapore",
    priceLevel: "$$$",
    review: "Pure is a large gym brand whose Pilates classes focus on strengthening and lengthening muscles, building flexibility and agility — a convenient option if you already train at Pure.",
    caveat: "a gym-based class rather than a boutique Pilates studio.",
    address: "—",
    bestFor: "Pilates for existing Pure members",
    signatureClass: "Pilates Class",
    bookingTip: "Check your membership tier covers Pilates classes.",
  },
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
    price: "From $15",
    url: "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
  },
  {
    name: "Pilates Mat",
    note: "A quality 6mm mat is worth having for mat classes and home practice between studio sessions.",
    price: "From $18",
    url: "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
  },
  {
    name: "Magic Circle",
    note: "Many studios incorporate the magic circle — worth owning for home reinforcement work.",
    price: "From $15",
    url: "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
  },
  {
    name: "Resistance Bands",
    note: "Fabric resistance loops extend your home Pilates practice and support reformer spring work.",
    price: "From $10",
    url: "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
  },
  {
    name: "Foam Roller",
    note: "Essential for fascial release and spinal mobility work before and after class.",
    price: "From $13",
    url: "https://www.amazon.com/s?k=high+density+foam+roller+pilates&tag=pilatescollective-20",
  },
  {
    name: "Home Pilates Reformer",
    note: "A home reformer extends your studio practice — AeroPilates and Align entry models deliver a genuine full-body session.",
    price: "From $359",
    url: "https://www.amazon.com/s?k=home+pilates+reformer+aeropilates+align&tag=pilatescollective-20",
  },
];


const RELATED_CITIES = [
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 6 },
  { city: "Amsterdam", country: "Netherlands", href: "/cities/amsterdam", studioCount: 6 },
  { city: "Berlin", country: "Germany", href: "/cities/berlin", studioCount: 6 },
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 6 },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
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
              Singapore has quietly become one of Asia's most sophisticated Pilates markets. A city that takes health seriously, and with a large international professional population accustomed to quality, Singapore has nurtured both classical lineage studios and forward-thinking reformer boutiques that hold their own against the best in London or New York. From Orchard Road to the CBD and Holland Village, there is a strong studio within reach of most of the island. This guide covers six studios we rate highly, with everything you need before booking your first session.
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
