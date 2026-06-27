import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "How Many Calories Does Pilates Burn? (2026 Data) | Pilates Collective Club",
  description: "How many calories does Pilates burn per session? Accurate data for mat vs reformer Pilates by body weight, intensity, and duration — plus how to track it accurately.",
  keywords: ["how many calories does pilates burn", "pilates calorie burn", "calories burned pilates reformer", "pilates calories per hour", "reformer pilates calories burned", "mat pilates calories", "pilates weight loss calories", "does pilates burn calories"],
  openGraph: {
    title: "How Many Calories Does Pilates Burn? (2026 Data)",
    description: "Accurate calorie data for mat and reformer Pilates — by body weight, intensity, and duration.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/how-many-calories-does-pilates-burn",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/roxana-popovici-hiHBILFNah4-unsplash.jpg", width: 1200, height: 630, alt: "How Many Calories Does Pilates Burn — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Many Calories Does Pilates Burn?",
    description: "Accurate calorie data for mat and reformer Pilates by body weight and intensity.",
    images: ["https://pilatescollectiveclub.com/pictures/roxana-popovici-hiHBILFNah4-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/how-many-calories-does-pilates-burn" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Fitbit Charge 6 Fitness Tracker",
    price: "From $120",
    verdict: "Best fitness tracker for Pilates calorie tracking",
    description:
      "The Fitbit Charge 6 is the most practical wrist-based calorie tracker for Pilates use. The optical heart rate sensor samples continuously throughout a session, and Fitbit's calorie algorithm integrates heart rate data with individual basal metabolic rate for more accurate estimates than MET-based calculators. The slim profile does not interfere with reformer strap work or mat exercises. Battery life is six days, eliminating the frustration of mid-week charging. Fitbit's exercise tracking records Pilates as a specific activity type rather than lumping it with generic yoga, which improves the accuracy of long-term calorie trend analysis. Connects to Google Maps and has built-in GPS for walks and runs to complement your studio sessions.",
    affiliateUrl: "https://www.amazon.com/s?k=fitbit+charge+6+fitness+tracker&tag=pilatescollective-20",
    tag: "Best Overall Tracker",
  },
  {
    rank: "02",
    name: "Garmin Vivosmart 5",
    price: "From $100",
    verdict: "Best slim tracker for studio use",
    description:
      "Garmin's Vivosmart 5 is the slimmest wrist tracker on this list — relevant for Pilates practitioners who find standard fitness bands distracting during reformer exercises where the wrist is in contact with the carriage. The continuous heart rate monitoring and Garmin's Body Battery energy tracking produce calorie data that is reliably within 10-15% of laboratory measurements, which is the realistic accuracy ceiling for optical wrist sensors during low-to-moderate intensity activity. The seven-day battery life is genuinely useful, and Garmin's health data ecosystem is the most comprehensive available for long-term trend analysis.",
    affiliateUrl: "https://www.amazon.com/s?k=garmin+vivosmart+5+fitness+tracker&tag=pilatescollective-20",
    tag: "Best Slim Profile",
  },
  {
    rank: "03",
    name: "Polar H10 Heart Rate Monitor Chest Strap",
    price: "From $95",
    verdict: "Most accurate calorie measurement",
    description:
      "If accuracy is the priority, a chest-based ECG heart rate monitor is meaningfully more accurate than optical wrist sensors for low-to-moderate intensity activity like Pilates, where wrist movement patterns can confuse optical sensors. The Polar H10 chest strap is the gold standard for consumer heart rate monitoring, used as the reference device in most fitness tracker accuracy studies. Paired with a fitness app on your phone, it records a calorie burn that is as close to laboratory accuracy as consumer equipment allows. The electrode strap is comfortable during supine and prone Pilates exercises. Best for practitioners who want precise data rather than convenience.",
    affiliateUrl: "https://www.amazon.com/s?k=polar+h10+heart+rate+monitor+chest+strap&tag=pilatescollective-20",
    tag: "Most Accurate",
  },
  {
    rank: "04",
    name: "Apple Watch SE (2nd Gen)",
    price: "From $199",
    verdict: "Best for iPhone users",
    description:
      "The Apple Watch SE delivers Apple's optical heart rate sensor and calorie algorithms in the most affordable Apple Watch configuration. For iPhone users already in the Apple Health ecosystem, the integration is seamless — Pilates sessions are logged automatically with calorie data that feeds directly into broader health trends. The Workout app includes Pilates as a specific exercise type in recent watchOS versions, improving calorie accuracy over the generic 'Other' workout category. The watch faces and band options available make it the most aesthetically considered fitness tracker for studio use, where the overall aesthetic of your kit is a consideration.",
    affiliateUrl: "https://www.amazon.com/s?k=apple+watch+se+2nd+generation&tag=pilatescollective-20",
    tag: "Best for Apple Users",
  },
  {
    rank: "05",
    name: "Samsung Galaxy Fit3",
    price: "From $40",
    verdict: "Best budget tracker",
    description:
      "Samsung's Galaxy Fit3 delivers continuous heart rate monitoring and calorie tracking at a price point significantly below the Fitbit and Garmin alternatives. The slim band design is comfortable during all Pilates positions including supine exercises where a thicker watch face creates discomfort. Accuracy is comparable to other optical wrist sensors at similar price points — within 15-20% of laboratory measurements for low-intensity activity. For Android users who want a functional activity tracker without committing to a premium price, the Galaxy Fit3 covers the core calorie-tracking function adequately. Battery life is excellent at up to 13 days.",
    affiliateUrl: "https://www.amazon.com/s?k=samsung+galaxy+fit3+fitness+tracker&tag=pilatescollective-20",
    tag: "Best Budget Tracker",
  },
];

const CALORIE_TABLE = [
  { type: "Mat Pilates (beginner)", weight60: "170–200", weight70: "200–235", weight80: "230–270" },
  { type: "Mat Pilates (intermediate)", weight60: "200–240", weight70: "235–280", weight80: "270–320" },
  { type: "Mat Pilates (advanced)", weight60: "240–290", weight70: "280–340", weight80: "320–390" },
  { type: "Reformer Pilates (standard)", weight60: "250–310", weight70: "290–360", weight80: "335–415" },
  { type: "Reformer Pilates (athletic)", weight60: "310–380", weight70: "360–445", weight80: "415–510" },
  { type: "Lagree / Megaformer", weight60: "400–500", weight70: "470–585", weight80: "540–670" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "How Many Calories Does Pilates Burn? (2026 Data)",
      "description": "Accurate calorie data for mat and reformer Pilates by body weight, intensity, and duration.",
      "url": "https://pilatescollectiveclub.com/blog/how-many-calories-does-pilates-burn",
      "datePublished": "2026-06-27",
      "dateModified": "2026-06-27",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/roxana-popovici-hiHBILFNah4-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/how-many-calories-does-pilates-burn" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "How Many Calories Does Pilates Burn?", "item": "https://pilatescollectiveclub.com/blog/how-many-calories-does-pilates-burn" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "How many calories does a 1 hour Pilates class burn?", "acceptedAnswer": { "@type": "Answer", "text": "A 60-minute mat Pilates class burns approximately 170-290 calories for a 60kg person, depending on intensity level. A 60-minute reformer Pilates class burns approximately 250-380 calories for the same person. Lagree or Megaformer classes, which use continuous resistance, can burn 400-500 calories per hour for a 60kg practitioner." } },
        { "@type": "Question", "name": "Does reformer Pilates burn more calories than mat?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, consistently. The spring resistance system of the reformer creates more muscular work than mat bodyweight exercises, elevating heart rate and calorie expenditure by 20-40% compared to mat Pilates at equivalent intensity levels. Advanced reformer classes can approach the calorie burn of moderate-intensity cycling." } },
        { "@type": "Question", "name": "Is Pilates effective for calorie burning and weight loss?", "acceptedAnswer": { "@type": "Answer", "text": "Pilates burns meaningful calories, particularly reformer and athletic-format classes. Its primary advantage for weight management is not acute calorie burn but the combination of muscle development (which elevates resting metabolic rate), improved body composition, and — critically — high adherence rates. Practitioners sustain Pilates practice over years far more consistently than high-intensity exercise programmes, making the cumulative calorie effect significant." } },
      ],
    },
  ],
};

export default function CaloriesPilatesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Health & Fitness</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              How Many Calories<br /><span style={{ color: "#8b4a31" }}>Does Pilates Burn?</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated June 2026 · 7 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Pilates burns significantly more calories than most people expect — and significantly less than most fitness apps report. The truth is somewhere between the dismissive claim that Pilates is "just stretching" and the inflated numbers that studio marketing uses. Here is what the metabolic research actually shows, broken down by format, intensity, and body weight.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/roxana-popovici-hiHBILFNah4-unsplash.jpg" alt="How many calories does Pilates burn per session" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Calories burned per 60-minute session</h2>
              <p className="text-sm mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Estimates based on MET values from the Compendium of Physical Activities and heart rate data from published Pilates metabolic studies. Individual results vary based on fitness level, muscle mass, and specific exercises performed.
              </p>
              <div className="overflow-hidden rounded-xl" style={{ border: "1px solid rgba(217,194,186,0.4)" }}>
                <div className="grid grid-cols-4 px-4 py-3" style={{ backgroundColor: "#f6f3f2" }}>
                  <p className="text-xs font-semibold uppercase tracking-wider col-span-2" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Format</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-center" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>60kg</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-center" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>75kg</p>
                </div>
                {CALORIE_TABLE.map((row, i) => (
                  <div key={row.type} className="grid grid-cols-4 px-4 py-3" style={{ borderTop: "1px solid rgba(217,194,186,0.25)", backgroundColor: i % 2 === 0 ? "#ffffff" : "#fdf9f7" }}>
                    <p className="text-sm col-span-2" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{row.type}</p>
                    <p className="text-sm text-center" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{row.weight60}</p>
                    <p className="text-sm text-center" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{row.weight70}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs mt-3" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Calories per 60-minute session. 75kg column shown for reference.</p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Why the numbers vary so much</h2>
              <div className="space-y-4">
                {[
                  { title: "Body weight", text: "A heavier person burns more calories performing the same exercise, because moving greater mass requires more energy. A 90kg practitioner burns roughly 50% more calories per session than a 60kg practitioner doing the same class." },
                  { title: "Intensity and rest ratio", text: "A class with minimal rest between exercises and higher spring loads on the reformer burns significantly more than a slow-paced mat class with long holds and frequent instruction pauses. Two 'reformer Pilates' classes can differ by 40% in calorie burn depending on format and instructor style." },
                  { title: "Your fitness level", text: "Deconditioned individuals work at a higher percentage of their maximum heart rate performing the same exercises as fit practitioners, burning more calories per session initially. As fitness improves, the same exercises become more efficient and calorie-efficient." },
                  { title: "Measurement method", text: "MET-based estimates (used by most apps) are population averages that can be 20-30% off for an individual. Heart rate-based estimates from a chest strap are more accurate. Indirect calorimetry (measuring oxygen consumption) is the gold standard but not practically available." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-1.5 rounded-full shrink-0 mt-1" style={{ backgroundColor: "#c5a882", minHeight: "20px" }} />
                    <div>
                      <p className="text-sm font-semibold mb-1" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{item.title}</p>
                      <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Track your actual burn accurately</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Generic app estimates for Pilates are often based on outdated or poorly-researched MET values. A wearable that uses your personal heart rate data produces a meaningfully more accurate calorie figure for your individual physiology.
              </p>
              <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>*Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</p>
              <div className="space-y-10">
                {PRODUCTS.map((p) => (
                  <div key={p.name}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-semibold" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{p.rank}</span>
                      <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{p.tag}</span>
                    </div>
                    <ProductCard name={p.name} description={p.description} price={p.price} affiliateUrl={p.affiliateUrl} />
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "How many calories does a 1 hour Pilates class burn?", a: "A 60-minute mat Pilates class burns approximately 170-290 calories for a 60kg person, depending on intensity. A 60-minute reformer Pilates class burns approximately 250-380 calories for the same person. Lagree or Megaformer classes can burn 400-500 calories per hour." },
                  { q: "Does reformer Pilates burn more calories than mat?", a: "Yes, consistently. The spring resistance system of the reformer creates more muscular work than mat bodyweight exercises, elevating heart rate and calorie expenditure by 20-40% compared to mat Pilates at equivalent intensity levels. Advanced reformer classes can approach the calorie burn of moderate-intensity cycling." },
                  { q: "Is Pilates effective for calorie burning and weight loss?", a: "Pilates burns meaningful calories, particularly reformer and athletic-format classes. Its primary advantage for weight management is not acute calorie burn but the combination of muscle development, improved body composition, and high adherence rates. Practitioners sustain Pilates practice over years far more consistently than high-intensity programmes, making the cumulative calorie effect significant." },
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
                <ArticleCard title="Pilates for Weight Loss" excerpt="What Pilates does and doesn't do for weight loss — the honest, evidence-based answer." href="/blog/pilates-for-weight-loss" category="Guide" readTime="7 min read" date="April 2026" imageUrl="/pictures/roxana-popovici-5JQxj-zc5ng-unsplash.jpg" />
                <ArticleCard title="Does Pilates Build Muscle?" excerpt="The honest science-based answer on Pilates and muscle development." href="/blog/does-pilates-build-muscle" category="Guide" readTime="8 min read" date="June 2026" imageUrl="/pictures/roxana-popovici-2QeonB1SdQk-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best reformer Pilates studios in Sydney..." />
      </main>
      <Footer />
    </>
  );
}
