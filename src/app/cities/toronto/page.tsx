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
  title: "Best Pilates Studios in Toronto (2026) — Curated Guide",
  description: "The best Pilates studios in Toronto — from Yorkville reformer boutiques to classical practices in Leslieville and Rosedale. Five curated picks, verified 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates toronto", "reformer pilates toronto", "best pilates studios toronto", "pilates studio toronto", "pilates classes toronto", "yorkville pilates", "leslieville pilates", "pilates canada", "best reformer pilates toronto", "pilates rosedale toronto"],
  openGraph: {
    title: "Best Pilates Studios in Toronto (2026)",
    description: "Five curated Pilates studios in Toronto — Yorkville, Leslieville, and Rosedale reformer picks. Verified 2026.",
    url: "https://pilatescollectiveclub.com/cities/toronto",
    images: [{ url: "https://images.unsplash.com/photo-1517090186835-e348b621c9ca?w=1200&q=80", width: 1200, height: 630, alt: "Toronto city guide — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilates Studios in Toronto (2026)",
    description: "Our curated guide to Toronto's five best Pilates studios — verified for 2026.",
    images: ["https://images.unsplash.com/photo-1517090186835-e348b621c9ca?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/cities/toronto",
  },
};

const STUDIOS = [
  {
    number: "01",
    name: "Retrofit Pilates",
    neighborhood: "Bloor West Village",
    priceLevel: "C$$$",
    review: "Retrofit Pilates has become the defining Pilates address in Bloor West Village, drawing a loyal crowd of west-end Torontonians who have graduated from big-box gym classes and want something more considered. The studio runs both reformer and mat programming with an emphasis on classical principles delivered through contemporary teaching, and the instructors have long enough tenures here that the teaching has a depth and coherence rarely found in studios of this age. The space itself is warm without being precious — functional, clean, and proportioned to keep class sizes genuinely small. For Runnersdale and High Park residents, it is the most natural first call.",
    address: "—",
    bestFor: "Classical-informed reformer and mat, west-end community, experienced clients",
    signatureClass: "Reformer Fundamentals",
    bookingTip: "Bloor West parking is manageable compared to downtown Toronto — street parking is usually available nearby. Book weekend morning classes at least five days ahead; they are the most competitive slots.",
  },
  {
    number: "02",
    name: "Fortides Pilates",
    neighborhood: "Roncesvalles",
    priceLevel: "C$$",
    review: "Fortides Pilates has established a quiet authority in the Roncesvalles Village community — a studio where the teaching is serious but the atmosphere is never austere, which is precisely the combination the neighbourhood rewards. The reformer programming is grounded in classical method principles, and instructors are known for the kind of patient, observational teaching that produces real technical progress rather than just a good workout. Pricing is calibrated to the neighbourhood and reflects a genuine commitment to accessibility without sacrificing the quality of the equipment or the instruction. It attracts a mix of parents, creatives, and long-term Pilates practitioners who prefer depth to novelty.",
    address: "—",
    bestFor: "Classical reformer, accessible pricing, Roncesvalles community",
    signatureClass: "Classical Reformer (open level)",
    bookingTip: "The studio is popular with the Roncesvalles morning crowd — book at least three days ahead for early classes. Intro packages are well-priced and allow proper assessment of fit before committing.",
  },
  {
    number: "03",
    name: "Core Studio Pilates",
    neighborhood: "Queen West",
    priceLevel: "C$$$",
    review: "Core Studio Pilates anchors the Queen West wellness corridor with a programme that matches the neighbourhood's design sensibility — considered, precise, and worth the investment. The studio runs reformer and apparatus classes in a beautifully appointed space, and the instruction is drawn from classical lineage with an intelligence that shows in the way teachers adapt to what is happening in the room rather than delivering a fixed routine. The clientele is predominantly creative professionals and Queen West regulars who regard their practice here as a non-negotiable part of the week. It is one of the most consistently praised studios in the city for the quality of its teaching staff.",
    address: "—",
    bestFor: "Classical-informed reformer, apparatus variety, Queen West professionals",
    signatureClass: "Core Reformer (55 min)",
    bookingTip: "Queen West parking is difficult — the studio is TTC-accessible and most regulars arrive by transit. Membership structures offer significant savings for clients training three or more times per week.",
  },
  {
    number: "04",
    name: "Have a Nice Day Pilates",
    neighborhood: "Leslieville",
    priceLevel: "C$$",
    review: "Have a Nice Day Pilates has the kind of name that signals its intent accurately — a studio that takes its teaching seriously while refusing to take itself too seriously, which turns out to be exactly what Leslieville was looking for. The reformer instruction is technically sound and delivered by teachers who have clearly thought about how to make the method legible to a wide range of bodies and experience levels. The space is bright and unpretentious, and the east-end community has responded with the kind of loyalty that keeps small studios solvent and growing. It suits practitioners who want quality instruction in an environment that does not perform its own exclusivity.",
    address: "—",
    bestFor: "Reformer, welcoming atmosphere, Leslieville community, all levels",
    signatureClass: "Reformer Group",
    bookingTip: "Leslieville parking is far more manageable than downtown Toronto — street parking is typically available. Book evening classes in advance as after-work demand in the neighbourhood is high.",
  },
  {
    number: "05",
    name: "Body Harmonics",
    neighborhood: "Dupont",
    priceLevel: "C$$$",
    review: "Body Harmonics is one of Canada's most respected Pilates institutions — its teacher training programme has produced instructors working across the country, and the Dupont studio reflects the depth of that educational commitment in every class it offers. The teaching is rooted in functional anatomy and movement science, and instructors here think in terms of long-term structural change rather than short-term aesthetic outcomes, which produces a different quality of result for clients willing to engage at that level. Private and semi-private sessions allow the full scope of the Body Harmonics method to be applied to individual movement histories, and the results are consistently described as transformative by clients who have trained extensively elsewhere. It is Toronto's essential address for practitioners who regard Pilates as a therapeutic and developmental practice.",
    address: "—",
    bestFor: "Movement science-grounded Pilates, rehabilitation, serious practitioners, teacher training",
    signatureClass: "Private and Semi-Private Apparatus",
    bookingTip: "New clients are encouraged to begin with a private intake session before joining group classes — contact the studio to arrange. The Dupont location has limited street parking; the Davisville subway station is within walking distance.",
  },
  {
    number: "06",
    name: "Imprint Pilates",
    neighborhood: "Kensington Market",
    priceLevel: "C$$",
    review: "Imprint Pilates brings rigorous reformer instruction to Kensington Market at pricing that reflects the neighbourhood's anti-premium sensibility, making it one of the more refreshing studios in a city where boutique fitness can feel aspirationally priced. The teaching is grounded and attentive — instructors make real adjustments and ask real questions about how clients are feeling in their bodies, which is rarer than it should be. The studio attracts a diverse mix of practitioners including many who discovered Pilates here and have no desire to train anywhere else. For practitioners based in the Annex, Harbord Village, or Kensington itself, it is the neighbourhood option with nothing to apologise for.",
    address: "—",
    bestFor: "Reformer, accessible pricing, Kensington and Annex community",
    signatureClass: "Reformer Group",
    bookingTip: "Street parking around Kensington Market is limited — arriving by TTC on the College or Dundas routes is the most reliable option. Intro packages are straightforwardly priced and easy to book online.",
  }
];

const BOOKING_TIPS = [
  { heading: "Expect to pay CA$35–65 per class", body: "Toronto reformer Pilates pricing has risen steadily in recent years. Group reformer classes at independent studios typically run CA$35–50; premium boutique studios in Yorkville and Midtown charge CA$55–65 for group sessions and CA$90–150 for private instruction. Monthly memberships offer the best value for practitioners attending three or more times per week." },
  { heading: "ClassPass is widely available in Toronto", body: "ClassPass has strong Toronto coverage across the studio scene and is an effective way to trial different venues before committing to a membership. Note that premium studios and peak-time slots require higher credit allocations — budget accordingly if you're planning to target Yorkville or Midtown venues." },
  { heading: "Winters require planning ahead", body: "Toronto's winters significantly affect studio attendance patterns. January and February see high demand as practitioners seek warm indoor movement activities; competition for coveted morning slots intensifies. Book further in advance during these months — four to seven days is advisable for popular instructors." },
  { heading: "HST is added to all studio transactions", body: "Ontario's Harmonised Sales Tax (13%) is added to all fitness studio purchases and may not be included in the displayed price. Factor this into your budget when comparing studio pricing — a CA$40 class is effectively CA$45.20 after tax." },
  { heading: "Tipping instructors is appreciated but not mandatory", body: "Unlike the US, tipping fitness instructors in Canada is not culturally obligatory. That said, many Toronto Pilates clients do tip for exceptional private sessions — CA$10–20 is common. For group classes, leaving a thoughtful Google review is generally more meaningful to studios than a tip." },
];

const NEIGHBORHOODS = [
  { name: "Yorkville & Midtown", description: "Toronto's most premium wellness corridor runs through Yorkville and along the Yonge–Eglinton corridor. Studios here attract a mix of established professionals, healthcare executives, and serious practitioners willing to invest in the best instruction the city offers. Expect world-class teaching and pricing to match — but the quality ceiling here is genuinely high." },
  { name: "Queen West & Ossington", description: "Toronto's creative west end has developed a dynamic boutique studio scene that matches the area's design-forward character. Studios here tend to be progressive in their programming, community-oriented in their culture, and more accessible in pricing than the Yorkville corridor. A natural home for practitioners who want quality without formality." },
  { name: "The Annex & Christie Pits", description: "The neighbourhoods between Bloor West and Spadina have nurtured a number of excellent independent studios serving the University of Toronto community and long-term Annex residents. The atmosphere is intellectual and unpretentious; instruction quality is reliably high; pricing is typically more accessible than the city centre. Worth seeking out for genuine neighbourhood studio culture." },
  { name: "Leslieville & Riverdale", description: "Toronto's east end has been quietly developing a strong independent wellness scene over the past decade. Studios here are owner-operated, deeply community-embedded, and represent some of the best value-to-quality propositions in the city. The neighbourhoods' strong sense of local identity has fostered the kind of loyal studio communities that the best Pilates practices thrive on." },
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
];


const RELATED_CITIES = [
  { city: "New York", country: "United States", href: "/cities/new-york", studioCount: 5 },
  { city: "Los Angeles", country: "United States", href: "/cities/los-angeles", studioCount: 5 },
  { city: "London", country: "United Kingdom", href: "/cities/london", studioCount: 5 },
  { city: "Paris", country: "France", href: "/cities/paris", studioCount: 5 },
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
        { "@type": "ListItem", "position": 2, "name": "Toronto", "item": "https://pilatescollectiveclub.com/cities/toronto" },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Best Pilates Studios in Toronto",
      "description": "Curated guide to the top 5 Pilates studios in Toronto.",
      "url": "https://pilatescollectiveclub.com/cities/toronto",
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
            "addressLocality": "Toronto",
            "addressCountry": "CA",
          },
        },
      })),
    },
  ],
};

export default function TorontoPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Canada</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              The Best Pilates Studios<br /><span style={{ color: "#8b4a31" }}>in Toronto</span>
            </h1>
            <p className="text-sm mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 8 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Toronto's Pilates scene is defined by depth — a city with serious instructor talent, a health-conscious professional class, and a studio culture that has evolved well beyond the boutique fitness wave of the 2010s. From the classical institutions of Midtown to the progressive boutique studios of Queen West and the community-rooted independents of the east end, the city's five best studios represent a genuinely diverse and high-quality landscape.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1517090504586-fde19ea6066f?w=1400&q=80" alt="Toronto city guide — Pilates Collective Club" fill className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Toronto, Canada</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>A deep, diverse Pilates scene in North America's most multicultural city</p>
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
            <h2 className="text-3xl font-semibold mb-10" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Tips for booking Pilates in Toronto</h2>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Toronto</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Toronto's Pilates landscape is shaped by its neighbourhoods.</p>
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
              Grip socks are required at most reformer studios in Toronto. These are our recommended picks — all available on Amazon.{" "}
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

        <CTASection title="Find Pilates near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best reformer Pilates in Toronto…" />
      </main>
      <Footer />
    </>
  );
}
