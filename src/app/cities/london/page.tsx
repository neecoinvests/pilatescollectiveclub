import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "The Best Pilates Studios in London | Pilates Collective Club",
  description:
    "Our curated guide to London's finest Pilates studios. From boutique reformer classes in Chelsea to community studios in Shoreditch — everything you need before booking.",
};

const STUDIOS = [
  {
    number: "01",
    name: "Ten Health & Fitness",
    neighborhood: "Shoreditch / City",
    priceLevel: "£££",
    review:
      "Ten is widely considered London's benchmark for premium Pilates — a studio group that takes the physiotherapy foundations of the method seriously. The Shoreditch flagship on Worship Street is immaculate: high ceilings, natural light, and Balanced Body equipment throughout. The instruction quality is unusually high across the board, with many trainers holding dual qualifications in Pilates and sports science. Ten doesn't do trends; it does the work.",
    address: "48 Worship Street, London EC2A 2DX",
    bestFor: "Serious practitioners, rehabilitation, all levels",
    signatureClass: "Reformer Pilates Level 2",
    bookingTip: "The lunchtime slots at Worship Street book within minutes of opening. Download the app and book the Monday release.",
  },
  {
    number: "02",
    name: "Heartcore",
    neighborhood: "Kensington",
    priceLevel: "£££",
    review:
      "Heartcore occupies a particular niche in London's studio scene — part Pilates, part cardio, entirely committed to an aesthetic and community that's hard to replicate. The Kensington studio is beautifully designed, and the instructors bring genuine energy to every class. The reformer sessions here are more dynamic than classical purists might prefer, but for clients looking for a demanding full-body workout with excellent instruction, Heartcore consistently delivers.",
    address: "268-270 Kensington High Street, London W8 6ND",
    bestFor: "Dynamic reformer, fitness-focused clients",
    signatureClass: "Cardio Reformer",
    bookingTip: "The 7am Kensington class is beloved by the local professional crowd — book it four days out at minimum.",
  },
  {
    number: "03",
    name: "Bodyism",
    neighborhood: "Notting Hill",
    priceLevel: "££££",
    review:
      "Bodyism is the jewel of London's wellness scene — a holistic studio that combines nutrition, mindset coaching, and Pilates into one quietly luxurious offering. The Pilates sessions here are private or semi-private only, delivered by some of the most experienced instructors in the city. The Notting Hill setting is utterly beautiful. If budget allows, a Bodyism session is a benchmark experience against which everything else is measured.",
    address: "1a Holland Park Mews, London W11 3SS",
    bestFor: "Private sessions, high-end holistic wellness",
    signatureClass: "Bespoke Body Pilates",
    bookingTip: "Bodyism operates by consultation. Call or email to discuss your goals before booking your first session.",
  },
  {
    number: "04",
    name: "Frame",
    neighborhood: "Shoreditch",
    priceLevel: "££",
    review:
      "Frame has built one of London's most loyal studio communities through a combination of genuinely excellent instruction, welcoming atmosphere, and smart pricing. The Shoreditch studio is unpretentious and fun — far removed from the hushed reverence of some competitors — but don't mistake accessibility for compromised quality. The Pilates programme here is rigorous, and the teaching is consistently strong. It's also one of the most inclusive studios in the city in terms of body type, fitness level, and general warmth.",
    address: "29 New Inn Yard, London EC2A 3EY",
    bestFor: "Community-focused classes, value, beginners to intermediate",
    signatureClass: "Re-Form Pilates",
    bookingTip: "Class packs offer excellent value. The community is friendly — go in without intimidation.",
  },
  {
    number: "05",
    name: "Club Pilates Canary Wharf",
    neighborhood: "Canary Wharf",
    priceLevel: "££",
    review:
      "Club Pilates brings a polished, structured approach to reformer Pilates that works particularly well for professionals working in the Canary Wharf area. The studio is clean and well-equipped, with a clear level-based class structure that makes progression visible and motivating. The membership model encourages consistency, which is exactly what the method demands. Not the most creative studio in London, but one of the most reliably well-run.",
    address: "1 Bank Street, Canary Wharf, London E14 5NL",
    bestFor: "Structured reformer progression, membership model, City workers",
    signatureClass: "CP Signature Reformer",
    bookingTip: "The level-based structure means you'll start at CP1. Complete the intro series before jumping to group classes.",
  },
];

const BOOKING_TIPS = [
  {
    heading: "Book at least 48 hours ahead for peak slots",
    body: "London's top studios fill rapidly. Morning and lunchtime weekday slots at premium studios go within minutes of opening. Most apps allow booking 5–7 days in advance — set a calendar reminder.",
  },
  {
    heading: "Introductory offers are your friend",
    body: "Almost every London studio runs a new-client special — typically 2–3 classes for £30–50. Use these to assess the instruction quality and culture before committing to a monthly membership.",
  },
  {
    heading: "ClassPass works well for London",
    body: "ClassPass gives access to many excellent London studios without a long-term commitment. Useful for sampling before settling on a home studio.",
  },
  {
    heading: "Grip socks are required almost everywhere",
    body: "Bring your own — most studios sell them, but they're cheaper from Amazon or sports retailers. Toeless grip socks are the standard.",
  },
  {
    heading: "Expect to pay £20–35 per class",
    body: "Drop-in reformer Pilates in London runs from around £20 at value studios to £35+ at premium boutiques. Monthly memberships typically bring the per-class cost down to £15–22.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Kensington & Chelsea",
    description:
      "The heartland of London's premium wellness scene. Studios here tend to be beautifully designed, highly priced, and attended by a discerning clientele. Heartcore and several independent boutiques make this the most saturated — in a good way — postcode for Pilates in the city.",
  },
  {
    name: "Shoreditch & East London",
    description:
      "Creative energy meets serious instruction. East London has seen the most exciting studio openings in recent years. Ten Health and Frame both operate here, offering different ends of the spectrum — one clinical, one communal — both excellent.",
  },
  {
    name: "Notting Hill & Westbourne Grove",
    description:
      "Notting Hill is home to some of London's most exclusive wellness addresses. Bodyism leads the field. Expect a neighbourhood-feel mixed with genuine luxury — and long waiting lists for private sessions.",
  },
  {
    name: "Canary Wharf & The City",
    description:
      "Built for convenience around London's financial district. Studios here prioritise schedule density, lunchtime availability, and efficient class formats. Excellent for busy professionals who need quality without the trek west.",
  },
];

const RELATED_CITIES = [
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 5 },
  { city: "Zurich", country: "Switzerland", href: "/cities/zurich", studioCount: 5 },
  { city: "Geneva", country: "Switzerland", href: "/cities/geneva", studioCount: 5 },
  { city: "Lausanne", country: "Switzerland", href: "/cities/lausanne", studioCount: 5 },
];

const FURTHER_READING = [
  {
    title: "Best Pilates Equipment for Home Practice",
    excerpt: "Everything you need between studio sessions — from a quality mat to resistance bands.",
    href: "/blog/best-pilates-equipment-for-home-practice",
    category: "Equipment",
    readTime: "10 min read",
    date: "May 2026",
  },
  {
    title: "The Beginner's Guide to Reformer Pilates",
    excerpt: "What to expect in your first reformer class, how to choose a studio, and how to progress.",
    href: "/blog/beginners-guide-to-reformer-pilates",
    category: "Beginner Guide",
    readTime: "8 min read",
    date: "May 2026",
  },
];

export default function LondonPage() {
  return (
    <>
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
                United Kingdom
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br />
              <span style={{ color: "#8b4a31" }}>in London</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Updated May 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              London has one of the most sophisticated Pilates markets in the world. The city's appetite for high-quality instruction, premium studio design, and method-driven classes has produced a scene that rivals — and in many ways leads — New York and Los Angeles. This guide covers the five studios we rate most highly, from Shoreditch to Notting Hill, along with everything you need to know before booking your first class.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=80"
                alt="London skyline"
                fill
                className="object-cover"
                style={{ filter: "brightness(0.88)" }}
              />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>London, United Kingdom</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>One of the world's most dynamic Pilates markets</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>
              5 Studios · Curated & Verified
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
              Tips for booking Pilates in London
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
              Best neighbourhoods for Pilates in London
            </h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
              London&apos;s Pilates landscape is shaped by its neighbourhoods. Here&apos;s where to look depending on where you&apos;re based.
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
          subtitle="Use our AI Finder to discover studios in any city — coming soon."
          showSearch
          searchPlaceholder="Ask: best reformer Pilates in London…"
        />
      </main>
      <Footer />
    </>
  );
}
