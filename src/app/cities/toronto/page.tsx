import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Studios in Toronto (2026)",
  description: "Pilates studios in Toronto: our curated guide to the five best reformer and mat studios across Yorkville, Queen West, and the Annex — verified for 2026.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  keywords: ["pilates studios toronto", "reformer pilates toronto", "best pilates toronto", "pilates yorkville toronto", "pilates queen west", "boutique pilates toronto", "pilates classes toronto", "toronto wellness studios"],
  openGraph: {
    title: "Best Pilates Studios in Toronto (2026)",
    description: "Our curated guide to Toronto's five best Pilates studios — from Yorkville to Queen West, verified for 2026.",
    type: "article",
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
    priceLevel: "$$$",
    review:
      "Founded in 1999 by professional dancer Barbara Grant, Retrofit Pilates is one of Toronto&apos;s longest-running and most respected studios — a Balanced Body Authorized International Teacher Training Centre, meaning instructors are trained to a rigorous professional standard. The studio offers reformer, springboard, and mat classes across a robust weekly schedule, and reviewers praise the creative, challenging, and level-appropriate programming. The Bloor West Village location is within walking distance of both Jane and Runnymede subway stations.",
    address: "2323 Bloor St W, Suite 206, Toronto, ON M6S 4W1",
    bestFor: "Classical and contemporary reformer, springboard, mat — all levels",
    signatureClass: "Reformer & Springboard Group Class",
    bookingTip: "New clients can access a one-month intro package covering reformer, springboard, and mat classes for $129 — exceptional value for a studio of this caliber. Book online; early morning slots fill first.",
  },
  {
    number: "02",
    name: "Fortides Pilates",
    neighborhood: "Roncesvalles",
    priceLevel: "$$",
    review:
      "Fortides was founded by Steph and Aleks — who bonded over Pilates during their time in London — and is exactly the studio Roncesvalles deserved. The bright, calming space features brand-new Merrithew reformers and a schedule running seven days a week covering Full Body, Foundation, Restore, and Pre/Post-Natal classes. At $37 per class with a two-class welcome offer for $50, it is accessible without feeling cheap. The studio has been profiled by FLEETSTREET as a standout addition to Toronto&apos;s increasingly serious fitness scene.",
    address: "149 Roncesvalles Ave, Toronto, ON M6R 2L2",
    bestFor: "Contemporary reformer, community-focused, pre/postnatal options",
    signatureClass: "Fortides Full Body (50 min)",
    bookingTip: "The Welcome Offer (2 classes/$50) is the best entry point — try Full Body first, then Foundation if you&apos;re newer to reformer Pilates. Evening classes book out fast; early morning weekday spots have the most availability.",
  },
  {
    number: "03",
    name: "Core Studio Pilates & Academy",
    neighborhood: "Fashion District / Queen West",
    priceLevel: "$$",
    review:
      "Core Studio has earned a 94% recommendation rate by maintaining small group sessions (typically 4–6 clients) that ensure every participant receives personalized, hands-on guidance rarely found in group settings. The studio is a certified Power Pilates partner and runs a respected teacher training academy alongside client classes, meaning instructors are actively engaged in continuing education. Located on the 4th floor above Queen West, it draws a downtown professional crowd and is accessible by streetcar.",
    address: "553 Queen St W, 4th Floor, Toronto, ON M5V 2B6",
    bestFor: "Small-group reformer (max 4-6), serious practitioners, aspiring instructors",
    signatureClass: "Small Group Reformer",
    bookingTip: "Book at least 3–4 days ahead for evening Queen West slots — popular with the after-work crowd. Drop-in options are available but advance booking guarantees your preferred instructor.",
  },
  {
    number: "04",
    name: "Have a Nice Day Pilates",
    neighborhood: "Corktown",
    priceLevel: "$$",
    review:
      "Founded by Jennifer Winter during the pandemic, Have a Nice Day Pilates has quickly become one of Toronto&apos;s most talked-about studios, earning 4.9 stars from 82 reviewers who celebrate the welcoming, inclusive atmosphere and genuinely outstanding instruction. The studio&apos;s vaulted-ceiling space on Eastern Ave is strikingly beautiful, and the intro pricing ($99 for 3 reformer classes) makes it easy to try before committing. As Toronto&apos;s first Black-owned Pilates studio, it has attracted significant media attention and a diverse, passionate client community.",
    address: "8 Eastern Ave, Toronto, ON M5A 3C7",
    bestFor: "Inclusive, community-driven reformer Pilates, all backgrounds and levels",
    signatureClass: "Reformer Group (all levels)",
    bookingTip: "The Intro 3 Reformer Pack ($99) is the ideal way to start. Parking on Eastern Ave is limited; the King streetcar (504) stops nearby and the studio is a short walk from Distillery District.",
  },
  {
    number: "05",
    name: "Body Harmonics",
    neighborhood: "Dupont / Christie",
    priceLevel: "$$$",
    review:
      "Body Harmonics is one of Canada&apos;s most respected Pilates institutions, operating both a client studio and a nationally recognized teacher training program. With a 96% recommendation rate and reviews praising the beautiful, light-filled facilities and modern well-maintained equipment, the studio attracts clients ranging from those managing chronic pain to competitive athletes. Their approach integrates current biomechanical research with classical Pilates, resulting in programming that is both evidence-based and deeply effective. A second location at 1835 Yonge St serves clients in midtown.",
    address: "672 Dupont St, Suite 406, Toronto, ON M6G 1Z4",
    bestFor: "Science-based Pilates, rehabilitation, athletic conditioning",
    signatureClass: "Reformer & Functional Movement",
    bookingTip: "Clients interested in rehab-focused work should request an initial assessment with a senior instructor. Book through their website; the Dupont location is reachable on the Bloor-Danforth subway.",
  },
  {
    number: "06",
    name: "Imprint Pilates",
    neighborhood: "Entertainment District / Chinatown",
    priceLevel: "$$$",
    review:
      "Established in 2018, Imprint Pilates has built one of downtown Toronto&apos;s strongest reputations for personalized Pilates work, with a client-centered focus offering private, semi-private, and small-group formats alongside TRX, prenatal and postnatal programming, and integrated health services. Reviewers on TripAdvisor and ClassPass consistently praise the instructor expertise and the measurable improvements in strength and pain management they experience. Located at the intersection of Chinatown, King West, and the Entertainment District, it is remarkably central.",
    address: "204 Spadina Ave, First Floor, Toronto, ON M5T 2C2",
    bestFor: "Private and semi-private reformer, prenatal/postnatal, integrated health",
    signatureClass: "Private Apparatus Session",
    bookingTip: "A semi-private or private intro session with an assessment is strongly recommended before joining group classes. Imprint&apos;s Spadina Ave location has multiple streetcar options (510, 511) for easy access.",
  },
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
              Toronto&apos;s Pilates scene is defined by depth — a city with serious instructor talent, a health-conscious professional class, and a studio culture that has evolved well beyond the boutique fitness wave of the 2010s. From the classical institutions of Midtown to the progressive boutique studios of Queen West and the community-rooted independents of the east end, the city&apos;s five best studios represent a genuinely diverse and high-quality landscape.
            </p>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="https://images.unsplash.com/photo-1517090504586-fde19ea6066f?w=1400&q=80" alt="Toronto city guide — Pilates Collective Club" fill className="object-cover" style={{ filter: "brightness(0.88)" }} />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(27,28,28,0.55) 0%, transparent 60%)" }}>
                <div>
                  <p className="text-white text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Toronto, Canada</p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>A deep, diverse Pilates scene in North America&apos;s most multicultural city</p>
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
            <h2 className="text-3xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Best neighbourhoods for Pilates in Toronto</h2>
            <p className="text-base mb-10" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>Toronto&apos;s Pilates landscape is shaped by its neighbourhoods.</p>
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

        <CTASection title="Find Pilates near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best reformer Pilates in Toronto…" />
      </main>
      <Footer />
    </>
  );
}
