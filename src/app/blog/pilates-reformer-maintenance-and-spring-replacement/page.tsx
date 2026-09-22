import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Pilates Reformer Maintenance & Spring Replacement (2026)",
  description: "What wears out on a reformer and when: spring lifespan, rope replacement, rail cleaning and a maintenance schedule for home and studio machines.",
  keywords: ["pilates reformer maintenance", "pilates reformer spring replacement", "how often replace reformer springs", "reformer rope replacement", "pilates reformer cleaning", "reformer carriage noisy", "pilates equipment maintenance schedule", "reformer upholstery care"],
  openGraph: {
    title: "Pilates Reformer Maintenance & Spring Replacement (2026)",
    description: "What wears out, how often, and how to keep a machine feeling like it did new.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/pilates-reformer-maintenance-and-spring-replacement",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-reformer-spring-detail.png", width: 1200, height: 630, alt: "Pilates Reformer Maintenance and Spring Replacement — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reformer Maintenance & Spring Replacement (2026)",
    description: "Spring lifespan, rope replacement, rail cleaning and a real schedule.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-reformer-spring-detail.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/pilates-reformer-maintenance-and-spring-replacement" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Pilates Reformer Maintenance & Spring Replacement (2026)",
      "description": "A maintenance guide for Pilates reformers: spring lifespan and replacement, ropes and straps, rail and wheel cleaning, footbar and upholstery care, with schedules for home and studio use.",
      "url": "https://pilatescollectiveclub.com/blog/pilates-reformer-maintenance-and-spring-replacement",
      "datePublished": "2026-09-16",
      "dateModified": "2026-09-16",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-reformer-spring-detail.png", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/pilates-reformer-maintenance-and-spring-replacement" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Reformer Maintenance & Spring Replacement", "item": "https://pilatescollectiveclub.com/blog/pilates-reformer-maintenance-and-spring-replacement" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "How often should reformer springs be replaced?", "acceptedAnswer": { "@type": "Answer", "text": "There is no universal interval because it depends entirely on hours of use, but the principle is the same everywhere: springs are replaced on a schedule, not on failure. A studio machine on a full timetable works its springs many times harder than a home machine used twice a week, so studios typically replace far more often. The failure mode that matters is not a spring snapping, which is rare, but a spring gradually losing tension so that the resistance you select is no longer the resistance you get. Check manufacturer guidance for your model and keep a record of when each set went on." } },
        { "@type": "Question", "name": "How do I know if my reformer springs are worn?", "acceptedAnswer": { "@type": "Answer", "text": "Unhook a spring and let it hang free. A spring in good condition returns to its original resting length; a tired one stays slightly extended, and the coils near the ends may have visibly separated. Compare springs of the same colour against each other, since they should match. Other signs are corrosion at the hooks, a resistance level that feels easier than it used to at the same setting, and clients or family members reporting that the machine feels different. If one spring in a set has gone, replace the set rather than the single spring so the gradation stays consistent." } },
        { "@type": "Question", "name": "Why is my reformer carriage noisy?", "acceptedAnswer": { "@type": "Answer", "text": "Nearly always dirt in the rail track rather than a failed bearing, which is good news because it is a twenty-minute cleaning job. Dust, skin, hair and lint compact into the track and the wheels then run over it rather than on clean metal. Wipe the rails along their full length with a dry microfiber cloth first, then a barely damp one, and run the carriage through its travel to check. If noise persists after cleaning, or the carriage pulls to one side or changes resistance mid-travel, that points at a wheel or bearing and is a parts conversation with your dealer." } },
        { "@type": "Question", "name": "How do you clean reformer upholstery without damaging it?", "acceptedAnswer": { "@type": "Answer", "text": "Use a cleaner rated for vinyl or leatherette, not a general-purpose disinfectant. Alcohol-heavy and bleach-based products strip the plasticisers out of the vinyl, which dries it until it cracks, and once it cracks moisture reaches the foam and the pad is finished. That turns a wipe-down habit into a re-upholstery bill. Wipe after each session rather than deep cleaning occasionally, and use a vinyl conditioner periodically on a machine that lives somewhere dry or sunny." } },
      ],
    },
  ],
};

const SCHEDULE = [
  { when: "After every session", who: "Home and studio", body: "Wipe the carriage, shoulder rests and footbar with a vinyl-safe cleaner. This is the single habit that most extends upholstery life, and it takes under a minute. In a studio it is also the thing clients notice." },
  { when: "Weekly", who: "Studio · monthly at home", body: "Clean the rails along their full length with a dry microfiber cloth, then a barely damp one. Run the carriage through its travel to check the glide. Most carriage noise starts here and never becomes a problem if you do this." },
  { when: "Monthly", who: "Studio · quarterly at home", body: "Inspect ropes for fraying and check both sides are still the same length. Check carabiners and pulleys. Move the footbar through every position under load. Look over the springs for corrosion at the hooks." },
  { when: "Quarterly", who: "Studio · annually at home", body: "Unhook each spring and check it returns to its resting length. Compare same-colour springs against each other. Check frame fixings for movement, and tighten anything that has worked loose. Condition the upholstery if it lives somewhere dry." },
  { when: "On a schedule you set", who: "Both", body: "Replace springs and ropes as planned maintenance rather than waiting for a failure. Write the date on a label or keep a note, because the whole point is that the wear is gradual and invisible. Follow the manufacturer's guidance for your model and adjust for your actual hours." },
];

const PRODUCTS = [
  { name: "Colaxi 5-Piece Reformer Spring Set", description: "The core of any maintenance programme. Springs lose tension gradually rather than failing dramatically, so the machine drifts away from its calibration without anyone noticing a moment when it changed. Replace as a full set so the colour gradation stays meaningful. This is an aftermarket, universal-ish fit set rather than brand-OEM, so check it against your exact machine before ordering.", price: "$65.54", affiliateUrl: "https://www.amazon.com/dp/B0DC93JC3M?tag=pilatescollective-20" },
  { name: "Balanced Body Replacement Reformer Ropes with Clips", description: "Ropes stretch under load over time, and a stretched rope quietly changes the working length of every strap exercise. Because it happens on both sides at different rates, the first symptom is usually asymmetry that a practitioner feels but cannot name. Replace as a matched pair, and confirm the fit for your exact machine before ordering.", price: "$35", affiliateUrl: "https://www.amazon.com/dp/B0CYM27QMZ?tag=pilatescollective-20" },
  { name: "Amazon Basics Microfiber Cloths (24-pack)", description: "The highest-return maintenance task there is, and the cheapest. Compacted dust in the rail track is the cause of most carriage noise and most gritty glide, and a dry microfiber cloth along the rails, followed by a barely damp one, fixes it. Keep a set with the machine so the job actually gets done rather than deferred.", price: "$10.38", affiliateUrl: "https://www.amazon.com/dp/B009FUF6DM?tag=pilatescollective-20" },
  { name: "Clear Gear Sports Disinfectant Spray", description: "The correct product for wiping down between sessions. Alcohol-heavy and bleach-based cleaners work perfectly well and destroy vinyl over a couple of years by drying out the plasticisers until the surface cracks. A spray rated for vinyl and leatherette costs about the same and does not do that. In a studio this is a recurring budget line, not a one-off.", price: "$21.00", affiliateUrl: "https://www.amazon.com/dp/B0B4F8QG8V?tag=pilatescollective-20" },
  { name: "STAR BRITE Ultimate Vinyl Clean", description: "Periodic conditioning restores some flexibility to upholstery that has dried out, and it is genuinely preventative rather than cosmetic: flexible vinyl resists cracking, and cracking is what ends a pad. Worth doing a few times a year on any machine in a dry room, near a radiator, or in direct sun.", price: "$14.95", affiliateUrl: "https://www.amazon.com/dp/B01CZ2ZW4O?tag=pilatescollective-20" },
  { name: "Eccentfit Pilates Grip Pads (4-pack)", description: "The practical answer to upholstery that is structurally sound but has gone slick with age. A grip pad restores confidence for standing and kneeling work and protects what is left of the original surface. Considerably cheaper than re-upholstery and a sensible way to extend a pad that is not yet cracked.", price: "$7.99", affiliateUrl: "https://www.amazon.com/dp/B0GGR4QXNH?tag=pilatescollective-20" },
];

export default function ReformerMaintenancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Equipment</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Maintenance</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Reformer Maintenance &amp;<br /><span style={{ color: "#8b4a31" }}>Spring Replacement</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated 16 September 2026 · 11 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Reformers do not break so much as drift. Springs lose tension, ropes stretch, rails collect grit, and the machine gets gradually less like the one you bought without ever having a moment where something went wrong. That is what makes maintenance here a schedule rather than a reaction, and it is why a well-kept commercial machine still feels right after a decade.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-reformer-spring-detail.png" alt="Close detail of reformer springs attached to the frame" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-14 mt-4 rounded-2xl p-7" style={{ backgroundColor: "#fff4f1", border: "1px solid rgba(139,74,49,0.15)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-3" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>The principle</p>
              <p className="text-base leading-relaxed mb-0" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Everything that wears on a reformer wears gradually and invisibly. Nothing announces itself. So the only maintenance approach that works is a calendar and a written record of when parts went on, not an inspection habit that relies on noticing a change you are physically adapting to week by week.
              </p>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Springs: the part that matters most</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                A reformer spring does not usually snap. What it does is lose tension, slowly, so that the red spring you select today delivers a little less resistance than the red spring you selected two years ago. The colour coding still says one thing and the machine now does another.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                That matters more than it sounds, because the whole point of a graded spring set is that resistance is a known quantity. Structured programming assumes it. A teacher cueing two red springs is prescribing a load. Rehabilitation and prenatal work depend on the lighter end being genuinely light and genuinely repeatable. A drifted set undermines all of that quietly.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                <strong>How to check:</strong> unhook a spring and let it hang free. A good spring returns to its original resting length. A tired one stays slightly extended and may show separation between the coils near the ends. Compare springs of the same colour against each other, because they should be identical. Also look at the hooks for corrosion, which is the one failure mode that does happen suddenly.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                <strong>Replace as a set.</strong> Swapping one tired spring into a set of five leaves you with a machine whose gradation no longer means anything. Replacement intervals depend entirely on hours, so follow your manufacturer&apos;s guidance for your model and keep a dated record. A studio on a full timetable will replace far more often than a home machine used twice a week, and both are correct.
              </p>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>The maintenance schedule</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Studio intervals first, home intervals in the same row. The difference is hours, not care. A machine doing thirty hours a week needs what a machine doing three hours a week needs, roughly ten times as often.
              </p>
              <div className="space-y-4">
                {SCHEDULE.map((s) => (
                  <div key={s.when} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
                      <p className="text-base font-semibold" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{s.when}</p>
                      <p className="text-xs font-semibold" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{s.who}</p>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{s.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>The other wear items</h2>
              <div className="space-y-4">
                {[
                  { label: "Ropes and straps", body: "Ropes stretch under load, and because the two sides stretch at different rates the first symptom is asymmetry rather than looseness: an exercise that feels subtly different on one side. Check both sides against each other rather than against how they look. Replace as a matched pair, and inspect the carabiners and pulley wheels at the same time since they are part of the same job." },
                  { label: "Rails and wheels", body: "Carriage noise and a gritty glide are almost always compacted dust in the rail track, not a bearing. A dry microfiber cloth along the full length of both rails, followed by a barely damp one, fixes the large majority of complaints. If noise persists after a proper clean, or the carriage pulls to one side or changes resistance partway through its travel, that is a wheel or bearing and a conversation with your dealer." },
                  { label: "Footbar mechanism", body: "Move it through every position under load, not just the one you use. A footbar that does not lock reliably is a safety issue rather than an annoyance, and the mechanism is model-specific, so identifying a problem early gives you time to source the part. This is the component most worth checking on a schedule even though it rarely fails." },
                  { label: "Upholstery", body: "The enemy is not use, it is the wrong cleaner. Alcohol-heavy and bleach-based products strip the plasticisers from vinyl and dry it until it cracks, and once it cracks moisture reaches the foam and the pad is finished. Use a vinyl-rated cleaner between sessions and a conditioner periodically, especially on a machine in a dry room or direct sun." },
                  { label: "Frame fixings", body: "Bolted sections work loose over time under repeated loading, particularly on machines that get moved. A quarterly check and a quarter turn where needed prevents the developing flex and rattle that people mistake for a worn-out machine. Do not overtighten." },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Why this is a business decision in a studio</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                A machine out of action is a class you cannot sell. That is the whole argument for keeping spare springs and ropes on the shelf rather than ordering them when something fails: the part costs the same either way, and the difference is whether a station is unavailable for a week while it ships.
              </p>
              <p className="text-base leading-relaxed">
                <span style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                  It is also what makes commercial apparatus worth its price. A studio-grade frame lasts well over a decade, and the reason the per-year cost works out low is that the wearing layer is designed to be renewed. Buy machines whose parts are catalogued and stocked, maintain them on a calendar, and the apparatus outlives several rounds of everything else in the room. Our{" "}
                </span>
                <Link href="/blog/pilates-studio-equipment-cost-breakdown" style={{ color: "#8b4a31", textDecoration: "underline", fontFamily: "'Montserrat', sans-serif" }}>studio equipment cost breakdown</Link>
                <span style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}> treats consumables as a recurring budget line for exactly this reason.</span>
              </p>
            </div>

            <div className="mb-14 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Common mistakes</h2>
              <ul className="space-y-3">
                {[
                  "Using a general-purpose or alcohol-based disinfectant on upholstery. It works, and it cracks the vinyl within a couple of years.",
                  "Replacing one spring instead of the set, which leaves the colour gradation meaningless.",
                  "Assuming carriage noise is a bearing. Clean the rails first; it usually is not.",
                  "Waiting for a part to fail rather than replacing on a schedule. Gradual wear never announces itself.",
                  "Keeping no record of when springs and ropes went on, which makes any schedule impossible to follow.",
                  "Lubricating the rails with an oil or general-purpose spray. Follow the manufacturer's guidance; the wrong product attracts grit and makes the problem worse.",
                  "Storing a folding machine somewhere damp, which corrodes springs on a machine that has barely been used.",
                ].map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    <span className="font-semibold" style={{ color: "#8b4a31" }}>⚠</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "How often should reformer springs be replaced?", a: "There is no universal interval because it depends entirely on hours of use, but the principle is the same everywhere: springs are replaced on a schedule, not on failure. A studio machine on a full timetable works its springs many times harder than a home machine used twice a week, so studios typically replace far more often. The failure mode that matters is not a spring snapping, which is rare, but a spring gradually losing tension so that the resistance you select is no longer the resistance you get. Check manufacturer guidance for your model and keep a record of when each set went on." },
                  { q: "How do I know if my reformer springs are worn?", a: "Unhook a spring and let it hang free. A spring in good condition returns to its original resting length; a tired one stays slightly extended, and the coils near the ends may have visibly separated. Compare springs of the same colour against each other, since they should match. Other signs are corrosion at the hooks, a resistance level that feels easier than it used to at the same setting, and clients or family members reporting that the machine feels different. If one spring in a set has gone, replace the set rather than the single spring so the gradation stays consistent." },
                  { q: "Why is my reformer carriage noisy?", a: "Nearly always dirt in the rail track rather than a failed bearing, which is good news because it is a twenty-minute cleaning job. Dust, skin, hair and lint compact into the track and the wheels then run over it rather than on clean metal. Wipe the rails along their full length with a dry microfiber cloth first, then a barely damp one, and run the carriage through its travel to check. If noise persists after cleaning, or the carriage pulls to one side or changes resistance mid-travel, that points at a wheel or bearing and is a parts conversation with your dealer." },
                  { q: "How do you clean reformer upholstery without damaging it?", a: "Use a cleaner rated for vinyl or leatherette, not a general-purpose disinfectant. Alcohol-heavy and bleach-based products strip the plasticisers out of the vinyl, which dries it until it cracks, and once it cracks moisture reaches the foam and the pad is finished. That turns a wipe-down habit into a re-upholstery bill. Wipe after each session rather than deep cleaning occasionally, and use a vinyl conditioner periodically on a machine that lives somewhere dry or sunny." },
                ].map((item) => (
                  <div key={item.q} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.q}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment */}
            <div className="mt-16 pt-12" style={{ borderTop: "1px solid rgba(217,194,186,0.4)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-2" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Equipment</p>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Parts and products to keep on hand</h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Springs, ropes and the footbar mechanism are model-specific, so always confirm compatibility with your exact machine and production run before ordering. Cleaning and conditioning products are not, and are worth keeping with the machine so the routine actually happens.
              </p>
              <div className="space-y-8">
                {PRODUCTS.map((p) => (
                  <ProductCard key={p.name} name={p.name} description={p.description} price={p.price} affiliateUrl={p.affiliateUrl} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="Buying a Used Pilates Reformer" excerpt="What to inspect, what refurbishment costs, and the faults that should end the conversation." href="/blog/buying-a-used-pilates-reformer" category="Guide" readTime="11 min read" date="September 2026" imageUrl="/pictures/stitch-reformer-loops-hooks.png" />
                <ArticleCard title="Commercial vs Home Pilates Reformer" excerpt="Why serviceability and warranty separate the tiers more than the frame does." href="/blog/commercial-vs-home-pilates-reformer" category="Comparison" readTime="11 min read" date="September 2026" imageUrl="/pictures/stitch-reformer-row-studio.png" />
                <ArticleCard title="Pilates Studio Equipment Cost Breakdown" excerpt="Itemised budgets at three studio sizes, with consumables as a recurring line." href="/blog/pilates-studio-equipment-cost-breakdown" category="Guide" readTime="12 min read" date="September 2026" imageUrl="/pictures/stitch-reformers-aerial-row.png" />
                <ArticleCard title="Best Pilates Reformer Accessories" excerpt="The add-ons that genuinely expand the repertoire, and the ones that do not." href="/blog/best-pilates-reformer-accessories" category="Equipment" readTime="9 min read" date="June 2026" imageUrl="/pictures/stitch-reformer-sunlit-minimal.png" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best Pilates studios in London…" />
      </main>
      <Footer />
    </>
  );
}
