import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Club Pilates Review (2026): Is It Worth It? An Honest Assessment | Pilates Collective Club",
  description:
    "An honest Club Pilates review — class quality, instructor training, equipment, membership pricing, and how it compares to boutique independent studios. Who it's right for and who should look elsewhere.",
  keywords: [
    "club pilates review",
    "club pilates",
    "is club pilates worth it",
    "club pilates vs boutique pilates",
    "club pilates membership",
    "club pilates class review",
    "club pilates instructor quality",
    "club pilates pricing",
  ],
  openGraph: {
    title: "Club Pilates Review (2026): Is It Worth It? An Honest Assessment",
    description: "An honest review of Club Pilates — class quality, instructor training, equipment, and how it compares to boutique studios.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/club-pilates-review",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/esma-eserghep-NUQi80iMLrI-unsplash.jpg", width: 1200, height: 630, alt: "Club Pilates Review — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Club Pilates Review (2026): Is It Worth It?",
    description: "An honest review of Club Pilates — class quality, equipment, and how it compares to boutique studios.",
    images: ["https://pilatescollectiveclub.com/pictures/esma-eserghep-NUQi80iMLrI-unsplash.jpg"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/blog/club-pilates-review",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Club Pilates Review (2026): Is It Worth It? An Honest Assessment",
      "description": "An honest Club Pilates review — class quality, instructor training, equipment, membership pricing, and comparison to boutique studios.",
      "url": "https://pilatescollectiveclub.com/blog/club-pilates-review",
      "datePublished": "2026-05-14",
      "dateModified": "2026-05-14",
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Club Pilates Review", "item": "https://pilatescollectiveclub.com/blog/club-pilates-review" },
      ],
    },
  ],
};

const criteria = [
  {
    category: "Equipment",
    rating: "Good",
    ratingColor: "#536257",
    detail: "Club Pilates uses Balanced Body reformers — legitimate professional-grade equipment, the same machines in premium boutique studios. The equipment is well-maintained at most locations and replaced on schedule. This is a genuine strength. You will not find entry-level consumer reformers at Club Pilates.",
  },
  {
    category: "Instructor training",
    rating: "Variable",
    ratingColor: "#c5a882",
    detail: "Club Pilates has its own internal certification programme — the CPT (Club Pilates Teacher) certification — which is proprietary. It covers approximately 500 hours of training, which meets the minimum industry standard. However, the training is franchise-specific and does not have the depth or lineage of STOTT, BASI, or Peak Pilates certifications. Instructor quality varies significantly by location and individual — this is the single greatest quality variable in the chain.",
  },
  {
    category: "Class sizes",
    rating: "Acceptable",
    ratingColor: "#c5a882",
    detail: "Club Pilates caps classes at 12 per reformer session, which is the upper limit of what allows meaningful individual attention. In practice, many classes run at or near capacity. This means instructors are managing 12 bodies simultaneously — appropriate cueing is possible, but the granular individual corrections of a smaller class are less frequent.",
  },
  {
    category: "Membership pricing",
    rating: "Competitive",
    ratingColor: "#536257",
    detail: "Club Pilates membership typically runs $149–$199/month for unlimited or near-unlimited classes — significantly less per class than most independent boutique studios ($35–60 per drop-in). For practitioners who want high-frequency reformer access without the boutique price point, Club Pilates is the most accessible option at scale.",
  },
  {
    category: "Class variety",
    rating: "Good",
    ratingColor: "#536257",
    detail: "Club Pilates offers multiple class formats — Classic Pilates, Cardio Pilates (with jump board), Stretch, Pilates Barre, and foundations classes for beginners. The programme variety is a genuine advantage over boutique studios that offer a single format. The Cardio format with jump boards is particularly popular and well-executed.",
  },
  {
    category: "Individual progression",
    rating: "Limited",
    ratingColor: "#8b4a31",
    detail: "This is Club Pilates' most significant limitation. In a franchise model with revolving instructors and classes of 12, there is limited tracking of individual progress, rare one-on-one attention to specific postural patterns, and minimal custom progression planning. Members who plateau often need to supplement with private sessions at independent studios.",
  },
];

export default function ClubPilatesReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Brand Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Club Pilates</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Club Pilates Review (2026):<br /><span style={{ color: "#8b4a31" }}>Is It Worth It?</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated May 2026 · 11 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Club Pilates is the largest Pilates franchise in the world — over 900 locations across the United States, Canada, and international markets, with hundreds of thousands of active members. For many people, Club Pilates is their first and only experience of reformer Pilates. Whether that&apos;s a good thing depends on what you&apos;re looking for. This review assesses Club Pilates honestly across the factors that actually matter for your practice.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/esma-eserghep-NUQi80iMLrI-unsplash.jpg" alt="Pilates reformer class studio" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-16 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What Club Pilates is — and isn&apos;t</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Club Pilates launched in 2007 in San Diego and grew rapidly through franchising. The model is fundamentally a boutique fitness franchise — standardised programming, branded environments, membership-based pricing, and rapid geographic expansion. It brought reformer Pilates to cities and suburbs that would not otherwise have supported an independent boutique studio, and at price points that made consistent practice accessible to a broader market.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The trade-off inherent in the franchise model is consistency versus quality. Standardisation produces predictable experiences — which is valuable for accessibility — but limits the peak quality achievable at any individual location. An independent boutique studio can be exceptional; a franchise location can be very good, but the structural constraints limit how good.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Club Pilates is not the same experience as a small independent studio with a highly trained instructor and a class of eight. It is a meaningfully different product at a meaningfully different price point. The honest question is whether the Club Pilates product serves your specific practice goals — not whether it&apos;s equivalent to the best independent studios.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Honest assessment across six criteria</h2>
              <div className="space-y-4">
                {criteria.map((c) => (
                  <div key={c.category} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-base font-semibold" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{c.category}</p>
                      <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "#f6f3f2", color: c.ratingColor, fontFamily: "'Montserrat', sans-serif" }}>{c.rating}</span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{c.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Who Club Pilates is right for</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { heading: "Beginners building a habit", body: "The standardised beginner programme, accessible pricing, and high location density make Club Pilates the most practical entry point for someone who has never tried reformer Pilates. The structured foundations classes are generally well-designed." },
                  { heading: "High-frequency practitioners on a budget", body: "If you want to practise 4–5 times per week, Club Pilates membership economics are compelling. The per-class cost at membership rates is a fraction of boutique drop-in pricing." },
                  { heading: "Practitioners between cities", body: "The franchise network's geographic spread means Club Pilates is an option when travelling in ways that independent boutiques are not. Useful for maintaining practice continuity during travel." },
                  { heading: "Cardio-focused reformer practitioners", body: "The jump board programme at Club Pilates is well-developed and consistently offered. For practitioners whose primary goal is cardiovascular Pilates with jump board work, Club Pilates delivers this reliably." },
                ].map((item) => (
                  <div key={item.heading} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#536257", fontFamily: "'Playfair Display', serif" }}>{item.heading}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Who should look elsewhere</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { heading: "Practitioners seeking method depth", body: "If you want to understand the classical method, progress systematically through the repertoire, or develop the deep body awareness that serious Pilates produces, an independent studio with qualified classical or STOTT-trained instructors is necessary." },
                  { heading: "Injury rehabilitation", body: "Club Pilates is not an appropriate environment for injury rehabilitation. The class size, generalised programming, and variable instructor clinical knowledge make it unsuitable for the individualised work that rehabilitation requires." },
                  { heading: "Experienced practitioners who have plateaued", body: "Practitioners with 1–2 years of regular reformer experience typically need more individualised progression than Club Pilates can provide in a class of 12 with standardised programming." },
                  { heading: "Those who want instructor continuity", body: "Franchise staff turnover is typically higher than independent studios. Building a long-term relationship with a specific instructor — which is how Pilates works best — is harder in a franchise environment." },
                ].map((item) => (
                  <div key={item.heading} className="rounded-xl p-5" style={{ backgroundColor: "#fff9f7", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#8b4a31", fontFamily: "'Playfair Display', serif" }}>{item.heading}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>The verdict</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Club Pilates is the most accessible way to build a consistent reformer practice in the United States. The equipment is professional-grade, the price point is competitive, and the programme variety is genuine. For beginners and for high-frequency practitioners whose primary goal is consistent movement rather than deep method education, it delivers real value.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                It is not equivalent to the best independent boutique studios. If your goal is to learn Pilates well — to develop the body awareness, postural correction, and movement quality that the method at its best produces — a smaller independent studio with more qualified instructors and closer individual attention is worth the higher cost. The honest recommendation: Club Pilates to build a practice habit and access to equipment; independent studio instruction to build genuine proficiency.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "How much does Club Pilates cost per month?", a: "Club Pilates memberships typically range from $149 to $199 per month depending on location and tier (8 classes/month vs unlimited). Drop-in rates run $35–45 per class. Annual prepayment discounts are available at most locations. Pricing varies by market — metropolitan areas are typically at the higher end of the range." },
                  { q: "Are Club Pilates instructors qualified?", a: "Club Pilates instructors complete the brand's proprietary CPT certification — approximately 500 hours, which meets the minimum industry standard. This is a legitimate qualification, but less specialised than STOTT, BASI, or classical lineage certifications. Individual instructor quality varies significantly. The best instructors at Club Pilates often continue their education with additional certifications; the weakest are working with minimum credentials only." },
                  { q: "Can a complete beginner start at Club Pilates?", a: "Yes — Club Pilates has a well-structured Foundations programme (typically a series of 101, 201, and 301 classes taken before joining general classes). This is one of the most accessible beginner pathways in the market. The structured onboarding is better than many independent boutique studios that put beginners directly into general intermediate classes." },
                  { q: "How does Club Pilates compare to CorePower Pilates?", a: "CorePower Yoga recently expanded into Pilates programming. Club Pilates has more reformer-specific programming depth and has been building reformer expertise longer. CorePower brings yoga sequencing influence that some practitioners enjoy and others find distracting from the Pilates method. Both are franchise environments with the same structural limitations relative to independent boutique studios." },
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
                <ArticleCard title="How to Find a Great Pilates Studio" excerpt="The specific questions, green flags, and red flags that separate excellent studios from mediocre ones." href="/blog/how-to-find-a-good-pilates-studio" category="Guide" readTime="10 min read" date="May 2026" imageUrl="/pictures/samantha-sheppard-b8Q5fHBsyik-unsplash.jpg" />
                <ArticleCard title="Best Pilates Reformer Brands" excerpt="Gratz vs Balanced Body vs Merrithew vs Align — an honest comparison for home and studio use." href="/blog/best-pilates-reformer-brands" category="Equipment" readTime="12 min read" date="May 2026" imageUrl="/pictures/roxana-popovici-cZ0WYsBFHhs-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find an independent studio near you" subtitle="Use our curated city guides to find the best independent Pilates studios worldwide." showSearch searchPlaceholder="Ask: best boutique Pilates studios in Chicago…" />
      </main>
      <Footer />
    </>
  );
}
