import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Best Personal Fan for Home Gym, Spin & Lagree (2026) | Pilates Collective Club",
  description: "The best personal fans for home gyms, spin bikes, and Lagree studios — Dyson, Vornado, Dreo, and budget picks compared for airflow, noise, and placement flexibility.",
  keywords: ["best personal fan home gym", "fan for spin bike 2026", "lagree studio fan", "dyson fan home gym", "vornado fan workout", "dreo fan review", "best fan for indoor cycling", "quiet fan for exercise room"],
  openGraph: {
    title: "Best Personal Fan for Home Gym, Spin & Lagree (2026)",
    description: "Personal fans compared for airflow, noise level, and placement flexibility in home gyms and studios.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-personal-fan-for-home-gym",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/ahmet-kurt-a1IhqqW8JQE-unsplash.jpg", width: 1200, height: 630, alt: "Best Personal Fan for Home Gym 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Personal Fan for Home Gym (2026)",
    description: "Personal fans compared for airflow, noise, and placement in home gyms.",
    images: ["https://pilatescollectiveclub.com/pictures/ahmet-kurt-a1IhqqW8JQE-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-personal-fan-for-home-gym" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Dreo Smart Tower Fan",
    price: "From $79",
    verdict: "Best overall home gym fan",
    description:
      "The Dreo Smart Tower Fan consistently tops independent home gym fan tests for its combination of strong airflow, low noise, and app-controlled scheduling — a useful feature for practitioners who want the fan running before they begin a session without manually adjusting it at the start of each workout. The 90-degree oscillation covers a wide zone that suits both a spin bike facing one direction and a Megaformer or mat area beside it. At its highest setting, airflow is strong enough to noticeably cool a 300-400 square foot exercise room. The noise at maximum speed is measurably lower than comparable-airflow tower fans from other brands. WiFi and voice assistant (Alexa/Google) control are built in at no additional subscription cost.",
    affiliateUrl: "https://www.amazon.com/s?k=dreo+smart+tower+fan&tag=pilatescollective-20",
    tag: "Best Overall",
  },
  {
    rank: "02",
    name: "Dyson Pure Cool TP07",
    price: "From $549",
    verdict: "Best premium air purifier and fan combo",
    description:
      "The Dyson TP07 combines a HEPA air purifier with a bladeless fan — relevant for home gym spaces where dust, pet dander, or general air quality compounds the elevated breathing rate of a high-output session. The bladeless design produces smooth, consistent airflow without the buffeting of bladed fans. App control, voice assistant integration, and auto-mode that adjusts to air quality sensors are all included. The price is significantly above any other fan on this list, and for most practitioners the air purification feature alone doesn't justify the premium. For home gyms in apartments or dusty environments where breathing quality matters alongside cooling, the TP07 is genuinely dual-purpose.",
    affiliateUrl: "https://www.amazon.com/s?k=dyson+pure+cool+tp07+tower+fan&tag=pilatescollective-20",
    tag: "Best Premium",
  },
  {
    rank: "03",
    name: "Vornado 660 Large Room Air Circulator",
    price: "From $119",
    verdict: "Best for moving air throughout an entire room",
    description:
      "Where tower fans push air in a narrow stream, Vornado's whole-room circulation design moves air in a vortex pattern that creates continuous circulation throughout the space rather than cooling only the person directly in front of the unit. For home gym rooms where multiple people train, or for practitioners who move between a spin bike and a Megaformer in different parts of the room, the 660's room-wide circulation is more effective than a directional fan at any single position. Noise is moderate at high settings, and the simple 4-speed dial is the opposite of smart-fan complexity — intentional for practitioners who want to set it and forget it.",
    affiliateUrl: "https://www.amazon.com/s?k=vornado+660+large+room+air+circulator&tag=pilatescollective-20",
    tag: "Best Room Circulator",
  },
  {
    rank: "04",
    name: "Honeywell HT-900 TurboForce Fan",
    price: "From $19",
    verdict: "Best budget directional fan",
    description:
      "The Honeywell HT-900 is a compact, powerful directional fan that clips or stands and can be positioned to blow directly at the face and chest — the most targeted cooling approach for spin bike riders who want a stream of air at a fixed position during stationary cycling. The three-speed motor produces strong airflow for its size, and the wide-angle pivot allows adjustment from floor placement up to handlebar height without a stand. At under $20, it's the lowest-risk trial of whether desk-position fan cooling improves your spin sessions before investing in a floor fan or tower unit.",
    affiliateUrl: "https://www.amazon.com/s?k=honeywell+ht-900+turboforce+fan&tag=pilatescollective-20",
    tag: "Best Budget Pick",
  },
  {
    rank: "05",
    name: "Lasko 4924 High Velocity Blower Fan",
    price: "From $59",
    verdict: "Best high-velocity airflow for hot studios",
    description:
      "The Lasko 4924 is a barrel-style blower fan that moves significantly more air volume than tower or pedestal fans of comparable price — designed for industrial-style room cooling rather than aesthetic placement. For home gym spaces that heat up quickly during intense sessions, or for practitioners training in garages or rooms without air conditioning, the 4924's raw airflow capacity is the most effective cooling tool on this list below the Dyson. The noise is correspondingly higher — this is not a quiet studio fan — and the design is purely functional. For performance over aesthetics in a dedicated training space, it's the best value for raw cooling power.",
    affiliateUrl: "https://www.amazon.com/s?k=lasko+4924+high+velocity+blower+fan&tag=pilatescollective-20",
    tag: "Best High-Velocity",
  },
  {
    rank: "06",
    name: "Dreo Pilot Max Pedestal Fan",
    price: "From $89",
    verdict: "Best height-adjustable floor fan",
    description:
      "The Dreo Pilot Max is a pedestal fan with an adjustable-height stand (39 to 53 inches) that allows positioning the airflow head at spin bike handlebar height — the most useful position for direct face and chest cooling during seated and out-of-saddle cycling. The brushless DC motor is quieter than comparably powerful AC pedestal fans, and the 120-degree oscillation covers a wider arc than most tower fans. App and remote control allow adjustment without leaving the bike. For practitioners who want a floor fan positioned specifically to cool them at bike height during spin sessions, the adjustable stand makes this the most practically positioned option.",
    affiliateUrl: "https://www.amazon.com/s?k=dreo+pilot+max+pedestal+fan&tag=pilatescollective-20",
    tag: "Best Height-Adjustable",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Personal Fan for Home Gym, Spin & Lagree (2026)",
      "description": "Personal fans compared for airflow, noise level, and placement flexibility in home gyms and studios.",
      "url": "https://pilatescollectiveclub.com/blog/best-personal-fan-for-home-gym",
      "datePublished": "2026-07-02",
      "dateModified": "2026-07-02",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/ahmet-kurt-a1IhqqW8JQE-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-personal-fan-for-home-gym" },
    },
    {
      "@type": "ItemList",
      "name": "Best Personal Fans for Home Gym, Spin & Lagree (2026)",
      "numberOfItems": 6,
      "itemListElement": PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "description": p.description.replace(/<[^>]+>/g, ""),
          "offers": { "@type": "Offer", "priceCurrency": "USD", "price": p.price.replace(/[^0-9]/g, ""), "availability": "https://schema.org/InStock", "url": p.affiliateUrl },
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Personal Fan for Home Gym", "item": "https://pilatescollectiveclub.com/blog/best-personal-fan-for-home-gym" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What kind of fan works best for a spin bike setup?", "acceptedAnswer": { "@type": "Answer", "text": "A directional fan positioned at handlebar height and aimed at the face and chest is most effective for spin bike cooling — you want high airflow at the specific position you're stationary in, rather than room-wide circulation. A height-adjustable pedestal fan like the Dreo Pilot Max, or a compact directional fan like the Honeywell HT-900 clipped near handlebar height, are the most practical spin-specific setups." } },
        { "@type": "Question", "name": "Is a noisy fan a problem during Lagree or Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "It can be, particularly during breath-focused Pilates sessions where audio cues from an instructor or app need to be audible. Tower fans with brushless DC motors, like the Dreo Smart Tower, operate significantly more quietly than traditional AC motor fans and are better suited to movement-based sessions where breathing cues and music need to be heard clearly." } },
        { "@type": "Question", "name": "Does cooling with a fan actually improve workout performance?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — research consistently shows that cooling airflow during high-intensity exercise reduces core temperature, which extends the time before heat-induced fatigue onset, allowing higher output to be maintained for longer. For spin and Lagree sessions, a fan is one of the highest-impact low-cost performance aids available." } },
      ],
    },
  ],
};

export default function BestPersonalFanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Studio Essentials</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Spin & Lagree</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Best Personal Fan<br /><span style={{ color: "#8b4a31" }}>for Home Gym (2026)</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated July 2026 · 8 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon and manufacturer sites. We earn a small commission on qualifying purchases.</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Cooling airflow during high-intensity spin and Lagree sessions meaningfully extends performance by delaying heat-induced fatigue — the research is consistent. The right fan for a home gym isn't the same as an office fan: you need real airflow, smart placement options, and manageable noise. This guide compares the six best for 2026.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/ahmet-kurt-a1IhqqW8JQE-unsplash.jpg" alt="Best personal fan for home gym spin and Lagree 2026" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10 overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
              <div className="px-6 py-4" style={{ backgroundColor: "#f6f3f2" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Quick Picks — At a Glance</p>
              </div>
              {PRODUCTS.map((p, i) => (
                <div key={p.name} className="flex items-center gap-3 sm:gap-4 px-6 py-4" style={{ borderTop: i === 0 ? "none" : "1px solid rgba(217,194,186,0.25)", backgroundColor: "#ffffff" }}>
                  <span className="text-base font-semibold w-7 shrink-0 text-center" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{p.rank}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold leading-tight" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{p.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{p.verdict}</p>
                  </div>
                  <span className="text-xs font-semibold hidden md:block shrink-0 mr-3" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{p.price}</span>
                  <a href={p.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow"
                    style={{ display: "block", fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "10px 14px", whiteSpace: "nowrap", flexShrink: 0 }}
                  >Search →</a>
                </div>
              ))}
            </div>

            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>6 Fans · Tower, Pedestal & Directional</p>
              <div className="space-y-10">
                {PRODUCTS.map((p) => (
                  <div key={p.name}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-semibold" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{p.rank}</span>
                      <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{p.tag}</span>
                    </div>
                    <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.3)" }}>
                      <div className="p-6" style={{ backgroundColor: "#ffffff" }}>
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-xl font-semibold mb-1" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{p.name}</h3>
                            <p className="text-sm font-semibold" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{p.price}</p>
                          </div>
                          <a href={p.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow"
                            style={{ display: "block", fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "10px 14px", whiteSpace: "nowrap", flexShrink: 0 }}
                          >Search →</a>
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }} dangerouslySetInnerHTML={{ __html: p.description }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "What kind of fan works best for a spin bike setup?", a: "A directional fan positioned at handlebar height aimed at the face and chest is most effective. You want high airflow at the specific position you're stationary in. A height-adjustable pedestal fan or a compact directional fan clipped near handlebar height are the most practical spin-specific setups." },
                  { q: "Is a noisy fan a problem during Lagree or Pilates?", a: "It can be, particularly during breath-focused sessions where audio cues need to be audible. Tower fans with brushless DC motors, like the Dreo Smart Tower, operate significantly more quietly than traditional AC motor fans and are better suited to studio sessions." },
                  { q: "Does cooling with a fan actually improve workout performance?", a: "Yes — research consistently shows that cooling airflow during high-intensity exercise reduces core temperature, which extends the time before heat-induced fatigue onset. For spin and Lagree sessions, a fan is one of the highest-impact low-cost performance aids available." },
                ].map((item) => (
                  <div key={item.q} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.q}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="Best Indoor Spin Bike for Home Studios (2026)" excerpt="Peloton, Schwinn IC4, NordicTrack, and budget bikes compared for resistance and connected apps." href="/blog/best-indoor-spin-bike-for-home-studio" category="Spinning" readTime="11 min read" date="June 2026" imageUrl="/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg" />
                <ArticleCard title="Best Floor Mat for Spin Bike (2026)" excerpt="Floor mats compared for sweat absorption, bike stability, and floor protection." href="/blog/best-floor-mat-for-spin-bike" category="Equipment" readTime="7 min read" date="June 2026" imageUrl="/pictures/junseong-lee-AX8cf6mkCzw-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our city guides to find boutique Lagree and cycling studios worldwide." showSearch searchPlaceholder="Ask: best Lagree studios in Sydney..." />
      </main>
      <Footer />
    </>
  );
}
