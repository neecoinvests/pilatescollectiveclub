import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "The Best Pilates Studios in Zurich | Pilates Collective Club",
  description:
    "Our curated guide to the best Pilates studios in Zurich. Reformer classes, mat Pilates, private sessions — everything you need to know before booking.",
};

const STUDIOS = [
  {
    number: "01",
    name: "Coreform Zurich",
    neighborhood: "Seefeld",
    priceLevel: "€€€",
    review:
      "Coreform is the gold standard for reformer work in Zurich. Nestled in the leafy Seefeld neighbourhood, it draws a mix of serious practitioners and post-rehab clients who value precision over pace. The instructors here are among the most rigorously trained in the city — expect detailed anatomical cueing and class sizes capped at six.",
    address: "Seefeldstrasse 45, 8008 Zürich",
    bestFor: "Reformer enthusiasts and post-rehab clients",
    signatureClass: "Precision Reformer Flow",
    bookingTip: "Book 48 hours in advance — popular morning slots fill within minutes of release.",
  },
  {
    number: "02",
    name: "Studio Align",
    neighborhood: "Kreis 6",
    priceLevel: "€€",
    review:
      "Studio Align is the most approachable studio on this list — and one of the most consistently excellent. Its mat-first philosophy makes it ideal for beginners, but the progressive class structure means long-term practitioners keep coming back. The studio occupies a bright, airy space near the university district and has a warm community feel that's unusual in Zurich.",
    address: "Universitätstrasse 91, 8006 Zürich",
    bestFor: "Beginners and mat Pilates devotees",
    signatureClass: "Foundations Mat",
    bookingTip: "Drop-in friendly on weekday mornings. The 9am Tuesday class rarely fills before same-day.",
  },
  {
    number: "03",
    name: "The Reformer Room",
    neighborhood: "Wiedikon",
    priceLevel: "€€€",
    review:
      "If Coreform is about precision, The Reformer Room is about athletic challenge. This Wiedikon studio attracts a younger, performance-oriented crowd and is known for its high-intensity reformer sequences that borrow from contemporary movement science. Don't let the stripped-back industrial décor fool you — the instruction quality is exceptional.",
    address: "Birmensdorferstrasse 108, 8003 Zürich",
    bestFor: "Advanced practitioners seeking athletic challenge",
    signatureClass: "Athletic Reformer",
    bookingTip: "Sign up for the monthly intensive — it sells out within hours of the newsletter drop.",
  },
  {
    number: "04",
    name: "Flow Pilates Kreis 4",
    neighborhood: "Kreis 4",
    priceLevel: "€€",
    review:
      "Situated in Zurich's most vibrant neighbourhood, Flow Pilates hits the sweet spot between accessibility and ambition. It's particularly popular with young professionals who want an efficient, quality session without the formality of some of the city's more upscale offerings. Evening classes are lively; the studio has a genuine community energy.",
    address: "Langstrasse 149, 8004 Zürich",
    bestFor: "Young professionals, evening classes",
    signatureClass: "Express Core 45",
    bookingTip: "The 6pm Tuesday class fills within an hour of opening. Set a reminder for Monday evening.",
  },
  {
    number: "05",
    name: "Lakeview Pilates Studio",
    neighborhood: "Enge",
    priceLevel: "€€€€",
    review:
      "Lakeview is in a category of its own. Perched above the lake in Enge with views of the Alps on clear days, it operates exclusively on a private-session basis. Your instructor learns your body over time — sessions here are genuinely bespoke. It's an investment, but for clients who work with chronic pain or want to deepen a long-term practice, it delivers results nothing else matches.",
    address: "Mythenquai 10, 8002 Zürich",
    bestFor: "Private sessions, long-term development, lake views",
    signatureClass: "Lakeside Bespoke",
    bookingTip: "Private sessions only. Enquire via their website — waitlist can be 2–3 weeks.",
  },
];

const BOOKING_TIPS = [
  {
    heading: "Book early for morning slots",
    body: "Quality studios in Zurich fill up fast. Most release their weekly schedule on Sunday evening — set a phone reminder if you want prime morning slots.",
  },
  {
    heading: "Introductory offers are common",
    body: "Most studios offer a discounted first-class or introductory pack for new clients. Always check the website before booking a full-price drop-in.",
  },
  {
    heading: "Swiss punctuality is expected",
    body: "Arrive 5–10 minutes early. Arriving late to a small group class is considered disruptive. Some studios have a strict no-late-entry policy.",
  },
  {
    heading: "Grip socks are usually required",
    body: "Almost every reformer studio in Zurich requires grip socks. Some sell them on arrival, but it's cheaper to bring your own.",
  },
  {
    heading: "German helps, but isn't necessary",
    body: "All studios on this list teach in English upon request. Most sessions in Zurich are bilingual German/English by default.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Seefeld",
    description:
      "The upscale eastern lakeside district is home to Zurich's most polished studios. Expect pristine spaces, premium pricing, and a well-heeled clientele.",
  },
  {
    name: "Kreis 6",
    description:
      "The university quarter has a more relaxed, intellectual energy. Studios here tend to be slightly more affordable and genuinely beginner-friendly.",
  },
  {
    name: "Wiedikon",
    description:
      "Increasingly popular with creatives and young professionals, Wiedikon has seen a wave of new studio openings in the past three years.",
  },
  {
    name: "Enge",
    description:
      "This quiet lakeside neighbourhood south of the centre is home to some of Zurich's most exclusive private studios and retreat spaces.",
  },
];

const RELATED_CITIES = [
  { city: "London", country: "United Kingdom", href: "/cities/zurich", studioCount: 12 },
  { city: "Paris", country: "France", href: "/cities/zurich", studioCount: 8 },
  { city: "New York", country: "United States", href: "/cities/zurich", studioCount: 18 },
];

const FURTHER_READING = [
  {
    title: "Best Pilates Equipment for Home Practice",
    excerpt:
      "Everything you need to complement your studio sessions at home, from a quality mat to resistance bands.",
    href: "/blog/best-pilates-equipment-for-home-practice",
    category: "Equipment",
    readTime: "10 min read",
    date: "May 2026",
  },
];

export default function ZurichPage() {
  return (
    <>
      <Header />
      <main>
        {/* Article Header */}
        <section
          className="pt-32 pb-16 px-6"
          style={{ backgroundColor: "#fcf9f8" }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}
              >
                City Guide
              </span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span
                className="text-xs font-semibold uppercase tracking-[0.15em]"
                style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}
              >
                Switzerland
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6"
              style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
            >
              The Best Pilates Studios
              <br />
              <span style={{ color: "#8b4a31" }}>in Zurich</span>
            </h1>

            <p
              className="text-sm mb-8"
              style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}
            >
              Updated May 2026 · 8 min read
            </p>

            {/* Divider */}
            <div
              className="w-16 h-px mb-8"
              style={{ backgroundColor: "#d9c2ba" }}
            />

            <p
              className="text-lg leading-relaxed"
              style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
            >
              Zurich has quietly become one of Europe&apos;s most compelling cities for Pilates. Swiss
              precision and a culture of excellence have shaped a studio scene that takes the method
              seriously — whether you&apos;re stepping onto a reformer for the first time or deepening
              a decade-long practice. This guide covers the five studios we return to again and
              again, the neighbourhoods worth knowing, and everything you need before booking your
              first class.
            </p>
          </div>
        </section>

        {/* Hero image placeholder */}
        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div
              className="w-full rounded-2xl overflow-hidden"
              style={{ height: "420px", background: "linear-gradient(135deg, #e8e2d6 0%, #cbc6ba 40%, #e4e2e1 100%)" }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <p
                    className="text-sm font-semibold uppercase tracking-widest mb-2"
                    style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Zurich, Switzerland
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}
                  >
                    The lakeside city&apos;s thriving Pilates scene
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Studio Listings */}
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-10"
              style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}
            >
              5 Studios · Curated & Verified
            </p>
            <div className="space-y-8">
              {STUDIOS.map((studio) => (
                <StudioListing key={studio.number} {...studio} />
              ))}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section
          className="py-20 px-6"
          style={{ backgroundColor: "#f6f3f2" }}
        >
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-3xl font-semibold mb-10"
              style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
            >
              Tips for booking Pilates in Zurich
            </h2>
            <div className="space-y-6">
              {BOOKING_TIPS.map((tip) => (
                <div
                  key={tip.heading}
                  className="flex gap-5 rounded-xl p-6"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid rgba(217, 194, 186, 0.3)",
                  }}
                >
                  <div
                    className="w-1.5 rounded-full shrink-0 mt-1"
                    style={{ backgroundColor: "#8b4a31", minHeight: "20px" }}
                  />
                  <div>
                    <h3
                      className="text-base font-semibold mb-1.5"
                      style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
                    >
                      {tip.heading}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {tip.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Neighborhoods */}
        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-3xl font-semibold mb-4"
              style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
            >
              Best neighbourhoods for Pilates in Zurich
            </h2>
            <p
              className="text-base mb-10"
              style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
            >
              Where you book depends on where you&apos;re staying or working. Here&apos;s a quick breakdown.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {NEIGHBORHOODS.map((n) => (
                <div
                  key={n.name}
                  className="rounded-xl p-6"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid rgba(217, 194, 186, 0.35)",
                  }}
                >
                  <h3
                    className="text-base font-semibold mb-2"
                    style={{ color: "#8b4a31", fontFamily: "'Playfair Display', serif" }}
                  >
                    {n.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {n.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Cities */}
        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-3xl font-semibold mb-3"
              style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
            >
              Related city guides
            </h2>
            <p
              className="text-sm mb-10"
              style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
            >
              Explore our guides to other cities with thriving Pilates scenes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {RELATED_CITIES.map((c) => (
                <CityCard key={c.city} {...c} />
              ))}
            </div>
          </div>
        </section>

        {/* Further Reading */}
        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-3xl font-semibold mb-10"
              style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
            >
              Further reading
            </h2>
            <div className="max-w-sm">
              {FURTHER_READING.map((a) => (
                <ArticleCard key={a.href} {...a} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection
          title="Find Pilates near you"
          subtitle="Use our AI Finder to discover studios in any city — coming soon."
          showSearch
          searchPlaceholder="Ask: best beginner Pilates in Zurich…"
        />
      </main>
      <Footer />
    </>
  );
}
