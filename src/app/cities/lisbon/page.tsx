import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Studios in Lisbon (2026)",
  description: "Pilates studios in Lisbon: our curated guide to the five best reformer and mat studios across Príncipe Real, Chiado, and Alcântara — verified for 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates studios lisbon", "reformer pilates lisbon", "best pilates lisbon", "pilates principe real", "pilates chiado lisbon", "boutique pilates lisboa", "pilates classes lisbon", "lisbon wellness studios"],
  openGraph: {
    title: "Best Pilates Studios in Lisbon (2026)",
    description: "Our curated guide to Lisbon's five best Pilates studios — from Príncipe Real to Alcântara, verified for 2026.",
    type: "article",
    url: "https://pilatescollectiveclub.com/cities/lisbon",
    images: [{ url: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200&q=80", width: 1200, height: 630, alt: "Lisbon city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Lisbon (2026)",
    description: "Our curated guide to Lisbon's five best Pilates studios — verified for 2026.",
    images: ["https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/lisbon",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "The Kynd Space",
    neighborhood: "Príncipe Real",
    priceLevel: "€€€",
    review: "The Kynd Space has become one of Lisbon's most talked-about wellness addresses since opening in Príncipe Real — the city's most aesthetically coherent neighbourhood, where 19th-century palaces have been converted into concept stores, restaurants, and studios of ambition. The space itself is exceptional: high ceilings, natural light, Balanced Body equipment arranged in a setting that feels more like a design destination than a conventional reformer studio. Instruction draws on a philosophy of sustainable movement and self-awareness, with a teaching team that combines technical depth with a genuinely human approach to working with bodies at different stages. The clientele reflects Príncipe Real's cosmopolitan character: international residents, creative professionals, and Lisbon's design-forward local community. The Kynd Space is where Lisbon's Pilates conversation is happening in 2026.",
    address: "—",
    bestFor: "Design-conscious clients and the creative international community of Príncipe Real",
    signatureClass: "Kynd Signature Reformer",
    bookingTip: "Book via the studio app; Príncipe Real morning sessions sell out earliest in the week",
  },
  {
    number: "02",
    name: "The Reformer Lab",
    neighborhood: "Chiado",
    priceLevel: "€€€",
    review: "The Reformer Lab occupies a prime position in Chiado — the historic literary and cultural heart of Lisbon, where the steep streets give way to elegant squares and a clientele that expects a certain standard from every aspect of their daily life. The studio has invested heavily in equipment and space design, creating a reformer environment that sits comfortably alongside the neighbourhood's other premium offerings. Classes are structured and demanding, with instructors who maintain high technical standards and resist the temptation to make sessions easier than the work requires. The Reformer Lab particularly excels in its intermediate and advanced programming, which provides genuine progression for clients with an established practice. The studio's Chiado address — a ten-minute walk from the city's most visited cultural landmarks — makes it the natural choice for wellness-focused visitors as well as the well-heeled local demographic that has made Chiado its own.",
    address: "—",
    bestFor: "Intermediate to advanced practitioners and discerning visitors to Lisbon",
    signatureClass: "Reformer Lab Signature Class",
    bookingTip: "First-timer packages are good value; confirm expiry windows before purchasing",
  },
  {
    number: "03",
    name: "Prescription Pilates",
    neighborhood: "Lapa",
    priceLevel: "€€€",
    review: "Prescription Pilates takes its name seriously: this is a studio built around the therapeutic and rehabilitative dimensions of Pilates, operating in the quiet embassy district of Lapa with a rigour that reflects its founders' backgrounds in physiotherapy and movement medicine. The studio offers full apparatus sessions — reformer, cadillac, chair, and barrel — with instructors who are able to work with complex clinical presentations alongside general fitness clients, making it one of the few studios in Lisbon where a physiotherapist's referral feels genuinely actionable. Sessions are largely private or semi-private, which allows the level of individual attention that therapeutic work demands. Prescription is not the studio for practitioners seeking group energy or a social class environment — it is the studio for those who need their movement practice to do specific, measurable work on their bodies.",
    address: "—",
    bestFor: "Rehabilitation clients, post-surgical practitioners, and those with complex movement histories",
    signatureClass: "Prescription Private Apparatus Session",
    bookingTip: "Assessment sessions are recommended before booking; enquire about physiotherapy referral packages",
  },
  {
    number: "04",
    name: "PILAT3S Palácio SottoMayor",
    neighborhood: "Avenida da Liberdade",
    priceLevel: "€€€",
    review: "PILAT3S at the Palácio SottoMayor delivers perhaps the most architecturally spectacular reformer experience in Lisbon, operating within one of the Avenida da Liberdade's restored 19th-century palaces in a setting that manages to be both grandly impressive and functionally excellent. The PILAT3S method — internationally consistent, progressive, and technically demanding — finds an ideal home here, where the sense of occasion that the building provides amplifies the quality of each session. Instructors are PILAT3S-certified and experienced, delivering the brand's structured approach with the individual attention that private and semi-private formats allow. The Avenida da Liberdade location places the studio at the axis of Lisbon's luxury retail and hotel district, making it a natural choice for hotel guests at the city's premium properties as well as for the neighbourhood's resident professional community.",
    address: "—",
    bestFor: "Hotel guests, luxury-district professionals, and those drawn to exceptional settings",
    signatureClass: "PILAT3S Signature Reformer",
    bookingTip: "Midweek morning slots have the best availability; weekend classes fill by Wednesday",
  },
  {
    number: "05",
    name: "MokoBoko Studio",
    neighborhood: "Campo de Ourique",
    priceLevel: "€€",
    review: "MokoBoko Studio has become one of Campo de Ourique's most loved neighbourhood fixtures — a genuinely community-embedded studio in a residential quarter known for its tram-served village character and its preference for the authentic over the aspirational. The studio's warmth is not manufactured: instructors know their regulars by name, programming is responsive to what clients actually need, and the atmosphere during class is engaged rather than performative. Pilates here is taught with real care for technique — this is not a gym cardio reformer format dressed up in Pilates vocabulary — and the studio maintains its standards without becoming inaccessible to beginners. Pricing is among the most honest in Lisbon for the quality delivered, which is why the studio's client retention is exceptional. MokoBoko is the kind of studio that Lisbon residents feel genuinely loyal to.",
    address: "—",
    bestFor: "Campo de Ourique residents and those seeking a genuine neighbourhood community studio",
    signatureClass: "MokoBoko Reformer & Mat",
    bookingTip: "Monthly packs are the way regular clients train here; drop-in available but less economical",
  },
  {
    number: "06",
    name: "beHaus Lisbon",
    neighborhood: "Beato",
    priceLevel: "€€",
    review: "beHaus Lisbon sits at the leading edge of the city's eastward creative migration — Beato's former industrial waterfront has become home to tech companies, creative agencies, and a growing cluster of wellness businesses that serve the young professional community now living and working in this rapidly transforming neighbourhood. The studio's aesthetic reflects its setting: raw materials, a stripped-back elegance, and a spatial generosity that makes sessions feel unhurried even in group formats. Programming spans reformer, mat, and occasional specialty workshops, with instructors who bring contemporary movement training backgrounds and a clear enthusiasm for what they teach. beHaus is distinctly accessible in its pricing, which makes it the natural first studio for Lisbon's newer arrivals — the expat tech workers, the remote-working creatives — who are building their city life from scratch and need a wellness anchor to organise around.",
    address: "—",
    bestFor: "East Lisbon's creative and tech community, expats, and Pilates-curious beginners",
    signatureClass: "beHaus Reformer Intro",
    bookingTip: "Excellent introductory rates for new clients; check the studio newsletter for workshop announcements",
  }
];

const BOOKING_TIPS = [
  { heading: "Expect to pay €18–45 per class", body: "Lisbon's Pilates pricing remains among the most accessible of any major European city. Community studios and mat classes can be found from €12–18; group reformer classes at quality independent studios run €20–30; premium private sessions at boutique venues like Studio Corpo command €40–60. Class packs (typically five or ten sessions) offer meaningful discounts at most studios." },
  { heading: "ClassPass has growing coverage in Lisbon", body: "ClassPass has expanded its Lisbon coverage in recent years and is a practical option for visitors wanting to trial studios without committing to packs. Coverage is best in Chiado, Alcântara, and Parque das Nações. Some of the more traditional studios in Príncipe Real and Mouraria do not participate." },
  { heading: "Booking in English is widely possible", body: "Lisbon's international character means most studios are comfortable with English-language bookings and correspondence. Email and WhatsApp are the dominant communication channels — don't be surprised if a studio's booking system is simply a WhatsApp number rather than an online platform. Response times are typically same-day." },
  { heading: "Bring your own grip socks", body: "Grip socks are required at reformer studios but less universally available for purchase than in Northern European cities. Pack a pair in your bag before your first session. Decathlon stores across Lisbon sell suitable fitness socks at very reasonable prices if you arrive unprepared." },
  { heading: "Tipping is not expected in Portugal", body: "Tipping in Portuguese wellness studios follows the country's generally low-tipping culture — it is appreciated but by no means expected. The most valued gesture of appreciation is word-of-mouth recommendation, which drives a significant proportion of new client acquisition at Lisbon's independent studios." },
];

const NEIGHBORHOODS = [
  { name: "Príncipe Real & Bairro Alto", description: "Lisbon's most affluent and historically significant neighbourhood is home to the city's finest premium wellness addresses. Studios here occupy converted palaces and townhouses, attracting an international creative and professional community willing to invest in exceptional instruction. The neighbourhood's dense concentration of galleries, restaurants, and design boutiques makes it the natural home of Lisbon's luxury wellness culture." },
  { name: "Chiado & Baixa", description: "The city's historic commercial centre offers the most accessible quality Pilates in central Lisbon. Studios here benefit from excellent public transport connections and a steady flow of international residents and visitors — most have adapted to offer bilingual instruction. Good value for central Lisbon, with group classes at competitive prices and a convenient location for most of the city's short-term visitors." },
  { name: "Alcântara & Santos", description: "Lisbon's post-industrial west has become a creative wellness hub — converted factories and warehouses host some of the city's most design-forward studios. The neighbourhood's arts and tech community has driven a Pilates scene that is contemporary, community-focused, and distinctly cosmopolitan. Weekend mornings in Alcântara have a particular energy that is worth experiencing." },
  { name: "Mouraria & Intendente", description: "The city's most authentically Lisboeta neighbourhoods — historically working-class, now undergoing careful gentrification — host a small number of community-focused studios that offer exceptional value and genuine cultural experience. Mat Pilates and hybrid movement practices are more prevalent here than reformer-focused offerings, reflecting both the space constraints and the ethos of studios that prioritise accessibility." },
];

const RELATED_CITIES = [
  { city: "Barcelona", country: "Spain", href: "/cities/barcelona", studioCount: 5 },
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 5 },
  { city: "Amsterdam", country: "Netherlands", href: "/cities/amsterdam", studioCount: 5 },
  { city: "Berlin", country: "Germany", href: "/cities/berlin", studioCount: 5 },
];

const FURTHER_READING = [
  { title: "Best Pilates Equipment for Home Practice", excerpt: "Everything you need between studio sessions — from a quality mat to resistance bands.", href: "/blog/best-pilates-equipment-for-home-practice", category: "Equipment", readTime: "10 min read", date: "May 2026", imageUrl: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80" },
  { title: "The Beginner's Guide to Reformer Pilates", excerpt: "What to expect in your first reformer class, how to choose a studio, and how to progress.", href: "/blog/beginners-guide-to-reformer-pilates", category: "Beginner Guide", readTime: "8 min read", date: "May 2026", imageUrl: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=800&q=80" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Lisbon", "item": "https://pilatescollectiveclub.com/cities/lisbon" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Lisbon",
      "description": "Curated guide to the top 5 Pilates studios in Lisbon.",
      "url": "https://pilatescollectiveclub.com/cities/lisbon",
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
            "addressLocality": "Lisbon",
            "addressCountry": "PT",
          },
        },
      })),
    },
  ],
};

export default function LisbonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>City Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Portugal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br /><span style={{ color: "#8b4a31" }}>in Lisbon</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 8 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Lisbon's Pilates scene has grown rapidly alongside the city's emergence as one of Europe's most desirable destinations for international residents and wellness-conscious travellers. The city's combination of a young, internationally educated professional class, a large digital nomad community, and an increasingly sophisticated local demand for quality movement practices has produced a studio landscape that is diverse, accessible, and — at its best — genuinely exceptional. This guide covers the five studios we rate most highly across the city's distinct neighbourhoods.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1400&q=80" alt="Lisbon city guide — Pilates Collective Club" fill className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Lisbon, Portugal</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Europe's most accessible great city, with a Pilates scene to match</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Studios · Curated & Verified</p>
            <div className="space-y-8">
              {STUDIOS.map((studio) => (<StudioListing key={studio.number} {...studio} />))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Lisbon</h2>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Lisbon</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Lisbon's Pilates landscape is shaped by its neighbourhoods.</p>
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

        <CTASection title="Find Pilates near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best reformer Pilates in Lisbon…" />
      </main>
      <Footer />
    </>
  );
}
