import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioListing from "@/components/StudioListing";
import CityCard from "@/components/CityCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Pilates Studios in Toronto (2026) | Pilates Collective Club",
  description: "Pilates studios in Toronto: our curated guide to the five best reformer and mat studios across Yorkville, Queen West, and the Annex — verified for 2026.",
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
    name: "Body Harmonics — Midtown",
    neighborhood: "Midtown (Yonge & Eglinton)",
    priceLevel: "$$$",
    review: "Body Harmonics is arguably Canada's most respected Pilates institution — a studio and teacher training centre that has shaped the country's Pilates culture for over two decades. The Midtown flagship combines rigorous classical instruction with evidence-based movement science in a way that few studios anywhere in the world match. Founder Margot McKinnon's approach informs every class: anatomy is taught as part of the practice, not an afterthought. Private sessions with the senior faculty represent genuinely world-class coaching. The studio's teacher training programme is considered the gold standard in Canada.",
    address: "489 College Street, Suite 200, Toronto ON M6G 1A5",
    bestFor: "Classical method, teacher-quality instruction, serious practitioners",
    signatureClass: "Body Harmonics Classical Reformer",
    bookingTip: "New clients should book a Pilates assessment before attending group classes — it ensures you're placed at the correct level and allows the instructor to personalise cues. Evening and Saturday morning sessions fill most quickly; book a full week ahead.",
  },
  {
    number: "02",
    name: "Studio KR Pilates",
    neighborhood: "Yorkville",
    priceLevel: "$$$",
    review: "Studio KR occupies a beautifully appointed space in Toronto's most prestigious shopping and dining district, serving Yorkville's affluent residential and professional community with a level of care that matches the neighbourhood's expectations. The studio specialises in private and duet reformer sessions — group classes are offered but the real jewel is the one-to-one attention from an exceptionally qualified teaching team. Lead instructor Karen Reiter trained in New York and brings an unusually nuanced understanding of the classical system that elevates even fundamental exercises into revelatory experiences. An essential Toronto address.",
    address: "87 Avenue Road, Suite 300, Toronto ON M5R 3R9",
    bestFor: "Private and duet sessions, Yorkville clientele, classical expertise",
    signatureClass: "KR Private Reformer & Tower",
    bookingTip: "Private sessions book out two to three weeks in advance with senior instructors. Request Karen for your intake assessment — the insight she provides in a single session is worth the premium. Online booking only; no walk-ins accepted.",
  },
  {
    number: "03",
    name: "Pilates on Bloor",
    neighborhood: "The Annex",
    priceLevel: "$$",
    review: "Pilates on Bloor has been a fixture of the Annex community for over fifteen years — a genuine neighbourhood studio where the owner knows her clients by name and the instruction has real depth without the premium pricing of Yorkville. The studio's reformer classes are thoughtfully programmed, and the mix of classical and contemporary elements reflects an owner-instructor who has done the reading and continues to evolve her teaching. The Annex location draws University of Toronto faculty, healthcare professionals, and long-term Pilates practitioners who value substance over scene.",
    address: "2333 Bloor Street West, Toronto ON M6S 1P3",
    bestFor: "Neighbourhood community, owner-operated quality, value pricing",
    signatureClass: "Bloor Street Reformer Essentials",
    bookingTip: "The studio has a loyal base of long-term clients, which means popular slots are often pre-booked by regulars. Book three to four days ahead and don't hesitate to email directly if you can't find availability online — the owner often accommodates new clients personally.",
  },
  {
    number: "04",
    name: "Reform Pilates Studio",
    neighborhood: "Queen West",
    priceLevel: "$$",
    review: "Reform has established itself as Queen West's go-to reformer studio — a well-designed space that captures the neighbourhood's creative energy while delivering a technically sound, progressive reformer programme. Classes run in a structured 50-minute format with clear level differentiation, making it easy for practitioners to chart their own progression through the studio's offerings. The instructors are young, well-trained, and communicate clearly; the community that has formed around the studio is one of the most engaged in the city. A strong choice for practitioners new to Toronto who want to find their Pilates home quickly.",
    address: "874 Queen Street West, Toronto ON M6J 1G3",
    bestFor: "Level-based progression, Queen West community, efficient 50-min format",
    signatureClass: "Reform Reformer Level 2",
    bookingTip: "Reform uses Mindbody for bookings. Purchase the New Client Special — three classes for a significantly reduced rate — to try different instructors and class levels before committing. Saturday morning classes fill by Wednesday most weeks.",
  },
  {
    number: "05",
    name: "The Pilates Studio — Leslieville",
    neighborhood: "Leslieville",
    priceLevel: "$$",
    review: "The Pilates Studio is Leslieville's finest wellness address — a warm, unpretentious space that has built a fiercely loyal following in one of Toronto's most community-oriented east-end neighbourhoods. The studio offers both reformer and mat classes, with a mat programme that is unusually strong by Toronto standards — ideal for practitioners who want to deepen their understanding of the method beyond the reformer. Owner-instructor Diane Park trained with Stott Pilates and brings the precision and cue-quality that the certification demands. Small class sizes and genuine personalisation make this one of the city's best-kept secrets.",
    address: "1235 Queen Street East, Toronto ON M4M 1L5",
    bestFor: "Mat Pilates, small classes, east-end community",
    signatureClass: "Classical Mat & Reformer Blend",
    bookingTip: "The studio's mat classes are the least-known and most underbooked — a genuine opportunity for practitioners who want a more attentive experience at accessible pricing. Book through the studio website; the waitlist system is reliable and worth joining for popular time slots.",
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
      "numberOfItems": 5,
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
              <Image src="/pictures/samantha-sheppard-b8Q5fHBsyik-unsplash.jpg" alt="Toronto city guide — Pilates Collective Club" fill className="object-cover" style={{ filter: "brightness(0.88)" }} />
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>5 Studios · Curated & Verified</p>
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
