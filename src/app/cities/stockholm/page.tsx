import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Studios in Stockholm",
  description:
    "Find the best Pilates studios in Stockholm — from Östermalm reformer boutiques to Södermalm wellness spaces. Five expert picks for 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: [
    "pilates studios stockholm",
    "reformer pilates stockholm",
    "best pilates stockholm",
    "pilates classes stockholm",
    "stockholm pilates guide",
    "boutique pilates stockholm",
    "pilates östermalm stockholm",
    "pilates södermalm",
    "stockholm pilates 2026",
  ],
  openGraph: {
    title: "Best Pilates Studios in Stockholm (2026)",
    description:
      "Find the best Pilates studios in Stockholm — five curated picks with booking tips for 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/stockholm",
    images: [
      {
        url: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Stockholm city guide — Pilates Collective Club",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Stockholm (2026)",
    description:
      "Find the best Pilates studios in Stockholm — five curated picks with booking tips for 2026.",
    images: ["https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/stockholm",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "Tim&apos;s Pilates",
    neighborhood: "Östermalm",
    priceLevel: "SEK€€€",
    review: "Tim&apos;s Pilates has earned a reputation as Stockholm&apos;s most technically demanding reformer studio, and its location in Östermalm — the quietly aristocratic district east of the city centre — is entirely fitting for a practice that values precision over performance. The studio is run with genuine rigour: class sizes are small, progressions are tracked, and the instruction reflects a deep understanding of both the classical lineage and contemporary movement science. Östermalm&apos;s clientele of diplomats, executives, and seriously health-conscious residents provides a naturally committed audience, and the atmosphere is one of focused effort rather than boutique spectacle. Equipment is premium and maintained to a high standard. It suits experienced practitioners who want to be genuinely challenged by instruction that meets them at their level.",
    address: "—",
    bestFor: "Technical depth, advanced programming",
    signatureClass: "Tim&apos;s Advanced Reformer",
    bookingTip: "New clients must complete an intro assessment session",
  },
  {
    number: "02",
    name: "Pilates Via",
    neighborhood: "Södermalm",
    priceLevel: "SEK€€€",
    review: "Pilates Via has become a fixture in Södermalm&apos;s well-developed wellness landscape, sitting comfortably alongside the island district&apos;s culture of independent studios, independent thinking, and a healthy suspicion of anything too corporate. The studio has a strong aesthetic identity — considered interiors, natural materials, restrained branding — that reflects Söder&apos;s design sensibility without feeling contrived. Instruction is contemporary and intelligent, drawing on classical Pilates principles with a somatic awareness that suits a neighbourhood clientele accustomed to thoughtful, evidence-based wellness practice. Class sizes are appropriately small and the scheduling accommodates the island&apos;s mix of early risers and flexible creatives. It suits practitioners who want a premium experience that still feels human-scale and genuinely rooted in its neighbourhood.",
    address: "—",
    bestFor: "Design-forward studio, somatic approach",
    signatureClass: "Via Reformer Essentials",
    bookingTip: "Morning and early evening slots fill fastest; book 3+ days ahead",
  },
  {
    number: "03",
    name: "Energii",
    neighborhood: "Vasastan",
    priceLevel: "SEK€€",
    review: "Energii has carved out a loyal following in Vasastan — the residential district north of the city centre known for its tree-lined streets and a population of young professional families who take health seriously — by offering reformer instruction that is both technically sound and genuinely affordable by Stockholm standards. The studio has an informal, welcoming atmosphere that newcomers tend to appreciate, and the instructors have a gift for making the method accessible without oversimplifying it. Programming covers a sensible range from beginner-friendly fundamentals through to more demanding intermediate sessions, and the scheduling is generous enough to accommodate unpredictable working weeks. The space is neat and functional rather than architecturally remarkable. It suits practitioners at any stage who prioritise value and consistency over luxury.",
    address: "—",
    bestFor: "Accessible pricing, welcoming atmosphere",
    signatureClass: "Energii Reformer Flow",
    bookingTip: "10-class card offers the best per-class rate",
  },
  {
    number: "04",
    name: "Stockholm Pilates Center",
    neighborhood: "Kungsholmen",
    priceLevel: "SEK€€€",
    review: "Stockholm Pilates Center occupies a prominent position on Kungsholmen — the island west of the old town where City Hall stands and a dense residential population of professionals and families has established one of the city&apos;s strongest studio cultures. The centre operates across the full Pilates apparatus with a seriousness that few Stockholm studios match: mat, reformer, cadillac, and chair are all taught to a consistently high standard, and the studio has the depth of programming to support practitioners across a multi-year trajectory. Instructors are credentialed and committed, and the overall atmosphere is one of informed seriousness without the austerity that sometimes accompanies classical training environments. It suits practitioners ready to invest in a long-term relationship with the method rather than a series of standalone sessions.",
    address: "—",
    bestFor: "Full apparatus, multi-year progression",
    signatureClass: "SPC Comprehensive Reformer",
    bookingTip: "Trial class package available for first-time clients",
  },
  {
    number: "05",
    name: "The Place Stockholm",
    neighborhood: "Norrmalm",
    priceLevel: "SEK€€€",
    review: "The Place Stockholm has established itself in Norrmalm — the commercial heart of the city, where Stockholm&apos;s major offices, hotels, and cultural institutions are concentrated — as the natural choice for professionals who want a premium reformer session before or after the working day. The studio is polished and well-resourced, the scheduling intensive, and the instruction delivered by a team that understands the particular needs of clients arriving from and returning to demanding professional contexts: efficiency, precision, and visible results. The class formats are clean and well-defined, making it easy for new clients to navigate the programme without extensive orientation. The bilingual instruction (Swedish-English) is a practical advantage in an international business district. It suits high-performing professionals who want their training to match the standard they set in everything else.",
    address: "—",
    bestFor: "Professional clientele, central scheduling, bilingual instruction",
    signatureClass: "The Place Reformer Express",
    bookingTip: "Pre-work 7am classes most competitive; book weekly",
  },
  {
    number: "06",
    name: "Studio Levels",
    neighborhood: "Lidingö",
    priceLevel: "SEK€€",
    review: "Studio Levels is located on Lidingö — the leafy island municipality east of the city, connected to Stockholm by bridge, where a quietly prosperous residential population has created strong demand for quality neighbourhood fitness — and it serves that community with genuine care. The studio has a relaxed and personal character that larger city-centre studios inevitably lose at scale: instructors know their clients, sessions are tailored to the room rather than delivered from a fixed script, and the atmosphere has the warmth of a well-run local enterprise. Pricing is competitive, particularly given the quality of instruction, and the studio makes a deliberate effort to accommodate a range of levels and ages in its class schedule. It suits residents of Lidingö and the eastern suburbs who want the real Pilates experience without commuting to the city for it.",
    address: "—",
    bestFor: "Neighbourhood studio, personal instruction, island community",
    signatureClass: "Levels Reformer Classic",
    bookingTip: "Regulars fill recurring slots; contact studio for availability",
  }
];

const BOOKING_TIPS = [
  {
    heading: "Expect to pay €25–55 per class",
    body: "Stockholm is an expensive city and its Pilates studios reflect that. Group reformer classes at mid-range studios run 280–420 SEK (approximately €25–38); boutique small-group sessions reach 500–600 SEK. Monthly memberships typically offer the best per-session economics for regular practitioners.",
  },
  {
    heading: "Book well in advance — particularly in winter",
    body: "Stockholm&apos;s indoor wellness culture intensifies in the darker months. January through March sees peak demand across all studios. During this period, prime-time classes can sell out within hours of the weekly booking window opening. Set a calendar reminder for your preferred studio&apos;s release day.",
  },
  {
    heading: "Most studios use MindBody or proprietary apps",
    body: "The booking experience in Stockholm is generally smooth and digital. Most studios operate English-language interfaces, and the majority of instructors speak excellent English — language is rarely a barrier at any quality studio.",
  },
  {
    heading: "Grip socks at every studio — no exceptions",
    body: "As across Europe, toeless grip socks are mandatory. Most studios sell them (approximately 150 SEK), but bringing your own is cheaper. A number of Stockholm studios also have proprietary branded socks at a premium — your own will serve just as well.",
  },
  {
    heading: "Trial packages are universally available",
    body: "Stockholm studios are competitive enough that intro offers are standard across the market — typically three to five classes for a reduced rate. The quality gap between studios is real, so sampling two or three before committing to a membership is time well spent.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Östermalm",
    description:
      "Stockholm&apos;s most prestigious residential district sets the standard for premium Pilates in Sweden. Studios here are beautifully designed, meticulously operated, and priced accordingly. The clientele is discerning and the instruction consistently strong. Pilates Östermalm is the landmark address.",
  },
  {
    name: "Vasastan",
    description:
      "An inner-city neighbourhood with genuine community warmth and a growing wellness infrastructure. Vasastan studios tend to prioritise instruction quality and regular-client relationships over aesthetic positioning. Reform Studio captures this approach well — serious about the work, welcoming in character.",
  },
  {
    name: "Norrmalm",
    description:
      "Stockholm&apos;s commercial centre has become an increasingly viable location for boutique wellness thanks to studios like Studio Norr, which prove that quality and central convenience aren&apos;t mutually exclusive. Excellent for visitors and professionals without time to travel to residential neighbourhoods.",
  },
  {
    name: "Södermalm",
    description:
      "The island south of the city centre is Stockholm&apos;s creative quarter — and it&apos;s produced a Pilates culture to match. Studios here tend to be more accessible in price and more progressive in programming, with a community culture that&apos;s warmer and less scene-driven than the northern neighbourhoods.",
  },
];

const RELATED_CITIES = [
  { city: "Amsterdam", country: "Netherlands", href: "/cities/amsterdam", studioCount: 5 },
  { city: "Berlin", country: "Germany", href: "/cities/berlin", studioCount: 5 },
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 5 },
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
        { "@type": "ListItem", "position": 2, "name": "Stockholm", "item": "https://pilatescollectiveclub.com/cities/stockholm" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Stockholm",
      "description": "Curated guide to the top 5 Pilates studios in Stockholm.",
      "url": "https://pilatescollectiveclub.com/cities/stockholm",
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
            "addressLocality": "Stockholm",
            "addressCountry": "SE",
          },
        },
      })),
    },
  ],
};

export default function StockholmPage() {
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
                Sweden
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br />
              <span style={{ color: "#8b4a31" }}>in Stockholm</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
              Updated May 2026 · 8 min read
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Stockholm has developed one of northern Europe&apos;s most coherent wellness cultures, and its Pilates scene is a reflection of that. The city&apos;s instinct for quality design, combined with a population that takes movement seriously, has produced a group of studios that compare favourably with anything in London or Paris. From the premium reformer boutiques of Östermalm to the community-minded spaces of Södermalm, this guide covers the five studios that best represent Stockholm&apos;s considerable Pilates offering.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image
                src="https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=1400&q=80"
                alt="Stockholm city guide"
                fill
                className="object-cover"
                style={{ filter: "brightness(0.88)" }}
              />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Stockholm, Sweden</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Scandinavian design meets serious Pilates culture</p>
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
              Tips for booking Pilates in Stockholm
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
              Best neighbourhoods for Pilates in Stockholm
            </h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
              Stockholm&apos;s Pilates landscape is shaped by its neighbourhoods.
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
          searchPlaceholder="Ask: best reformer Pilates in Stockholm…"
        />
      </main>
      <Footer />
    </>
  );
}
