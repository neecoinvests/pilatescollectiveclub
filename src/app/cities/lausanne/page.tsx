import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "The Best Pilates Studios in Lausanne | Pilates Collective Club",
  description:
    "Our curated guide to Lausanne's best Pilates studios. Overlooking Lake Geneva, this university city has a growing and quality-conscious wellness scene.",
};

const STUDIOS = [
  {
    number: "01",
    name: "Studio Pilates Lausanne",
    neighborhood: "Centre-Ville",
    priceLevel: "CHF ···",
    review:
      "Studio Pilates Lausanne has earned its reputation as the city&apos;s reference studio through years of quietly consistent, high-quality instruction. The centre-ville location is bright and well-equipped, with Merrithew reformers and a team that clearly loves what it does. Classes are taught in both French and English, which is a genuine rarity in Lausanne and makes this the natural starting point for international practitioners visiting or relocating to the city.",
    address: "Rue du Petit-Chêne 12, 1003 Lausanne",
    bestFor: "Bilingual instruction, all levels, reliable quality",
    signatureClass: "Reformer Essentials",
    bookingTip: "Book through their online platform at least 48 hours ahead. The Friday morning session has a loyal following — book it on Monday.",
  },
  {
    number: "02",
    name: "Body Reform Lausanne",
    neighborhood: "Ouchy",
    priceLevel: "CHF ····",
    review:
      "Perched in the lakeside Ouchy neighbourhood with views toward the Alps, Body Reform is Lausanne's most design-conscious studio — and one of its most ambitious. The instruction here draws on clinical Pilates and Gyrotonic principles, making it an exceptional choice for clients dealing with chronic pain, postural issues, or post-surgical rehabilitation. The private and duet session programme is the studio's strongest offering: personalised, deeply skilled, and worth every centime of the premium pricing.",
    address: "Avenue d'Ouchy 33, 1006 Lausanne",
    bestFor: "Private sessions, rehabilitation, clinical Pilates",
    signatureClass: "Clinical Reformer & Tower",
    bookingTip: "Private sessions require an initial assessment. The waitlist for regular slots can be several weeks — enquire early.",
  },
  {
    number: "03",
    name: "Reform & Co Lausanne",
    neighborhood: "Flon",
    priceLevel: "CHF ···",
    review:
      "Reform & Co has found an excellent home in Lausanne&apos;s Flon district — the city&apos;s creative and commercial hub — and its atmosphere reflects the neighbourhood well: energetic, design-forward, and genuinely welcoming. The class programme is varied, with reformer, mat, and fusion formats that keep regulars engaged without compromising the core principles of the method. The teaching team is young but highly trained, and the community that has developed around the studio is one of its most attractive qualities.",
    address: "Place de l'Europe 7, 1003 Lausanne",
    bestFor: "Varied formats, community, younger professional crowd",
    signatureClass: "Reform Flow 55",
    bookingTip: "The app makes booking and cancellation simple. The Tuesday evening class is the studio&apos;s social highlight of the week — get on the list.",
  },
  {
    number: "04",
    name: "Centre Pilates EPFL Area",
    neighborhood: "Écublens",
    priceLevel: "CHF ··",
    review:
      "Situated close to the EPFL campus in Écublens, this studio has developed a strong following among the academic and research community — practitioners who want to understand the biomechanics of what they&apos;re doing as much as feel the results. The instruction here is analytical and educational, which suits some clients perfectly and may not resonate with others. If you&apos;ve ever wanted a Pilates teacher to explain exactly why each exercise exists, this is your studio.",
    address: "Route Cantonale 17, 1024 Écublens",
    bestFor: "Analytical instruction, EPFL/university community, value pricing",
    signatureClass: "Biomechanics Reformer",
    bookingTip: "The studio is busiest during term time. Summer months offer more flexibility. Monthly passes offer the best value.",
  },
  {
    number: "05",
    name: "Espace Mouvement Lausanne",
    neighborhood: "Pully",
    priceLevel: "CHF ··",
    review:
      "Espace Mouvement occupies a calm, light-filled space in the residential suburb of Pully, just east of central Lausanne. The studio has the feel of a neighbourhood secret — quietly excellent without advertising itself aggressively. The instruction team includes several certified teachers with backgrounds in dance and physiotherapy, and the cross-disciplinary approach gives the classes a sophistication that belies the modest pricing. An excellent choice for practitioners who value depth over spectacle.",
    address: "Chemin de la Damataire 3, 1009 Pully",
    bestFor: "Intimate atmosphere, cross-disciplinary approach, neighbourhood studio",
    signatureClass: "Movement & Reformer",
    bookingTip: "Small classes of five clients maximum. The waiting list for regular spots is worth joining — attrition is low because clients tend to stay for years.",
  },
];

const BOOKING_TIPS = [
  {
    heading: "Lausanne is smaller than Zurich or Geneva",
    body: "The city's Pilates scene is more intimate, which means quality studios have fewer spots and regulars tend to book recurring slots. Flexibility on timing helps if you're new to a studio.",
  },
  {
    heading: "CHF 30–50 per class is the typical range",
    body: "Drop-in rates across Lausanne's studios run from around CHF 30 at more accessible studios to CHF 50 at premium private session specialists. Abonnements are available at all studios and offer significant savings.",
  },
  {
    heading: "French is the primary language",
    body: "Most Lausanne studios teach in French. However, several offer English instruction on request or have bilingual teachers — check when you book.",
  },
  {
    heading: "Ouchy is worth the commute",
    body: "If you're based in central Lausanne, the metro M2 gets you to the lakeside Ouchy neighbourhood in under 10 minutes. The studios there often have the most beautiful settings in the region.",
  },
  {
    heading: "Early booking is essential",
    body: "Unlike larger cities with many competing studios, Lausanne's best spots fill quickly. Book three to five days ahead for prime morning slots.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Centre-Ville",
    description:
      "The city centre is well-served by public transport and has the highest concentration of studios. Practical for practitioners who are visiting or working centrally.",
  },
  {
    name: "Ouchy",
    description:
      "The lakeside neighbourhood at the foot of the city, reached via the funicular or metro. Studios here offer the most scenic practice environments in the region.",
  },
  {
    name: "Flon",
    description:
      "Lausanne's revitalised cultural and commercial district. A younger crowd, energetic studios, and a vibrant social scene that makes the before-and-after ritual particularly enjoyable.",
  },
  {
    name: "Pully",
    description:
      "The quiet eastern suburb is home to neighbourhood studios with a loyal local following. Lower prices, intimate atmosphere, and the kind of long-term community feel that's hard to manufacture.",
  },
];

const RELATED_CITIES = [
  { city: "Geneva", country: "Switzerland", href: "/cities/geneva", studioCount: 5 },
  { city: "Zurich", country: "Switzerland", href: "/cities/zurich", studioCount: 5 },
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 5 },
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 5 },
];

const FURTHER_READING = [
  {
    title: "The 6 Core Principles of Pilates, Explained",
    excerpt: "Concentration, control, centering, precision, breath, and flow — what they actually mean in practice.",
    href: "/blog/6-core-principles-of-pilates-explained",
    category: "Method",
    readTime: "6 min read",
    date: "May 2026",
  },
  {
    title: "Best Pilates Equipment for Home Practice",
    excerpt: "Build a home practice that complements your studio sessions.",
    href: "/blog/best-pilates-equipment-for-home-practice",
    category: "Equipment",
    readTime: "10 min read",
    date: "May 2026",
  },
];

export default function LausannePage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>City Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Switzerland</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br />
              <span style={{ color: "#8b4a31" }}>in Lausanne</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 7 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Lausanne sits on the terraced shores of Lake Geneva — a city of hills, academic energy, and a wellness culture that has evolved quietly into something genuinely impressive. Smaller than Zurich or Geneva, it rewards those who take the time to look. The studios here are intimate, instruction-led, and almost always stunning in location. This guide covers the five we rate most highly.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=80"
                alt="Swiss alpine lake view near Lausanne"
                fill
                className="object-cover"
                style={{ filter: "brightness(0.88)" }}
              />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Lausanne, Switzerland</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Intimate studios above a stunning lakeshore</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Studios · Curated & Verified</p>
            <div className="space-y-8">
              {STUDIOS.map((studio) => (<StudioListing key={studio.number} {...studio} />))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Lausanne</h2>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Lausanne</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Lausanne&apos;s hills shape its neighbourhoods as much as its culture. Here&apos;s where to look.</p>
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
              {RELATED_CITIES.map((c) => (<CityCard key={c.city} {...c} />))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
              {FURTHER_READING.map((a) => (<ArticleCard key={a.href} {...a} />))}
            </div>
          </div>
        </section>

        <CTASection title="Find Pilates near you" subtitle="Use our AI Finder to discover studios in any city — coming soon." showSearch searchPlaceholder="Ask: best Pilates studios in Lausanne…" />
      </main>
      <Footer />
    </>
  );
}
