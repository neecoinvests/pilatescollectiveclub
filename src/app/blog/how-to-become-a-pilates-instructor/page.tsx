import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "How to Become a Pilates Instructor (2026): Training, Cost & Timeline",
  description: "Pilates teacher training explained: mat versus comprehensive certification, what the major schools cost, hours required, exams, and what the job actually pays.",
  keywords: ["how to become a pilates instructor", "pilates teacher training", "pilates certification", "pilates instructor course", "comprehensive pilates certification", "pilates teacher training cost", "NPCP certification", "balanced body teacher training", "BASI pilates training", "pilates instructor salary"],
  openGraph: {
    title: "How to Become a Pilates Instructor (2026): The Complete Guide",
    description: "Mat versus comprehensive training, what the major schools cost, the hours involved, and whether the career pays.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/how-to-become-a-pilates-instructor",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-studio-modern-row.png", width: 1200, height: 630, alt: "How to Become a Pilates Instructor — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Become a Pilates Instructor: Training, Cost & Timeline",
    description: "What Pilates teacher training involves, what it costs, and what the job actually pays.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-studio-modern-row.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/how-to-become-a-pilates-instructor" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "How to Become a Pilates Instructor (2026): Training, Cost & Timeline",
      "description": "A practical guide to Pilates teacher training — mat versus comprehensive certification, the major schools, costs, hours, exams, and career realities.",
      "url": "https://pilatescollectiveclub.com/blog/how-to-become-a-pilates-instructor",
      "datePublished": "2026-09-09",
      "dateModified": "2026-09-09",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-studio-modern-row.png", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/how-to-become-a-pilates-instructor" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "How to Become a Pilates Instructor", "item": "https://pilatescollectiveclub.com/blog/how-to-become-a-pilates-instructor" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "How long does it take to become a Pilates instructor?", "acceptedAnswer": { "@type": "Answer", "text": "A mat-only certification typically takes two to four months and runs somewhere between 40 and 100 hours. A comprehensive certification covering mat plus reformer, cadillac, chair and barrels usually requires 450 to 600 hours and takes nine to eighteen months alongside other work. Those hours are not all classroom time — most programmes split them between taught modules, self-practice, observation of experienced teachers, and supervised practice teaching, and the observation and practice-teaching hours are what stretch the calendar." } },
        { "@type": "Question", "name": "How much does Pilates teacher training cost?", "acceptedAnswer": { "@type": "Answer", "text": "Mat certifications generally run $1,000 to $2,500. Comprehensive programmes from the established schools typically fall between $5,000 and $12,000 depending on the school, the country and how much equipment access is bundled. Budget beyond tuition as well: exam fees, required textbooks, and studio time to complete practice hours can add several hundred to a couple of thousand more. Many programmes let you pay per module, which spreads the cost across a year or more." } },
        { "@type": "Question", "name": "Do you need a certification to teach Pilates?", "acceptedAnswer": { "@type": "Answer", "text": "There is no legal licence required to teach Pilates in most countries — the term itself is not trademark-protected, following a well-known US court ruling in 2000. In practice, certification is effectively mandatory: reputable studios will not hire uncertified teachers, and liability insurance is difficult or impossible to obtain without a recognised qualification. The absence of statutory regulation is precisely why the school you train with carries so much weight." } },
        { "@type": "Question", "name": "How much do Pilates instructors earn?", "acceptedAnswer": { "@type": "Answer", "text": "Group class rates commonly run $30 to $75 per class in most Western markets, with private sessions billed at $60 to $120 to the instructor after the studio takes its share. Full-time employed roles exist but are the minority; most teachers piece together income across several studios plus private clients, and privates are where the money actually is. A realistic full-time income sits somewhere between $35,000 and $70,000, with experienced teachers running their own client base or studio earning meaningfully more." } },
      ],
    },
  ],
};

const PRODUCTS = [
  { name: "Trail Guide to the Body", description: "The palpation and anatomy reference most training programmes assign or assume. Worth buying before your course starts — the anatomy module moves quickly and arriving with the landmarks already familiar changes how much you absorb.", price: "From $55", affiliateUrl: "https://www.amazon.com/s?k=trail+guide+to+the+body+anatomy&tag=pilatescollective-20" },
  { name: "Return to Life Through Contrology", description: "Joseph Pilates' own 1945 text. Short, opinionated, and still the primary source every lineage argues about. Any programme with a history module will expect you to have read it.", price: "From $12", affiliateUrl: "https://www.amazon.com/s?k=return+to+life+through+contrology+joseph+pilates&tag=pilatescollective-20" },
  { name: "Anatomy of Movement", description: "The functional anatomy text that explains movement rather than naming parts. The reference teachers keep long after the exam, because it answers the questions clients actually ask.", price: "From $32", affiliateUrl: "https://www.amazon.com/s?k=anatomy+of+movement+calais+germain&tag=pilatescollective-20" },
  { name: "Manduka PRO Pilates Mat", description: "You will spend several hundred hours on a mat during training — self-practice, observation, and practice teaching. A 6mm mat that does not compress is the difference between finishing a long module comfortable or sore.", price: "From $98", affiliateUrl: "https://www.amazon.com/s?k=manduka+pro+pilates+mat+6mm&tag=pilatescollective-20" },
  { name: "Pilates Props Set (Ring, Bands & Ball)", description: "Practice-teaching hours usually have to happen outside studio time, and most programmes expect you to own the small apparatus. A bundled ring, band and ball set covers the mat syllabus.", price: "From $35", affiliateUrl: "https://www.amazon.com/s?k=pilates+props+set+magic+circle+bands+ball&tag=pilatescollective-20" },
];

export default function HowToBecomeAPilatesInstructorPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Teacher Training</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              How to Become a<br /><span style={{ color: "#8b4a31" }}>Pilates Instructor</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 13 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Pilates teaching is an unregulated profession with an expensive, rigorous, and entirely voluntary training culture. Nobody can stop you calling yourself a Pilates instructor tomorrow. Almost nobody will hire you or insure you if you do. That gap between the legal position and the professional one is the single most important thing to understand before spending five figures on a certification.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-studio-modern-row.png" alt="A Pilates studio set up for teacher training, with reformers arranged for supervised practice teaching" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-14 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Why the certification you choose matters so much</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                In 2000 a US court ruled that &quot;Pilates&quot; is a generic term describing an exercise method rather than a protected trademark. The practical consequence is that no central body controls who may teach it, and a weekend course and a 600-hour comprehensive programme can both issue something called a certificate.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The industry filled that vacuum itself. Studios hire on the reputation of the school you trained with, and a handful of established programmes function as the de facto standard. Insurers take a similar view. So while the qualification is optional in law, choosing a school with a weak reputation is close to wasting the money entirely — you will have the certificate and still not be hireable at the studios you want to work in.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                A useful cross-check exists in the United States. The National Pilates Certification Program administers an independent, third-party exam that is not tied to any single school, and passing it earns a credential recognised across lineages. It is not required for most jobs, but it is the closest thing the profession has to a neutral standard, and holding it travels well if you move cities or countries.
              </p>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Mat-only or comprehensive?</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                This is the first real decision and it determines cost, timeline and where you can work. There is no wrong answer, only a mismatch between the qualification and the job you want.
              </p>
              <div className="space-y-4">
                {[
                  { label: "Mat certification — 40 to 100 hours, $1,000–$2,500, 2–4 months", body: "Qualifies you to teach mat classes in gyms, community settings and some studios. It is the cheaper, faster entry point and a legitimate way to test whether you enjoy teaching before committing to the full programme. The limitation is real, though: the reformer-led studio market, which is where most of the paid work and nearly all the private clients are, will not hire you on a mat certificate alone." },
                  { label: "Comprehensive certification — 450 to 600 hours, $5,000–$12,000, 9–18 months", body: "Covers mat plus reformer, cadillac or tower, chair, and barrels. This is what studios mean when a job listing says 'comprehensively trained', and it is the qualification that unlocks private clients, rehabilitation-adjacent work, and the higher end of the pay scale. Most people who intend to teach seriously end up here, and many arrive via a mat certificate first." },
                  { label: "Bridge or upgrade programmes", body: "If you already hold a mat certification, most schools offer a bridge into their comprehensive programme that credits your existing hours. This makes the mat-first route considerably less wasteful than it appears, and it is the path a good number of teachers take deliberately — earn while you train." },
                  { label: "Apparatus-specific and specialist modules", body: "Shorter add-ons in reformer-only teaching, pre- and postnatal, injury and rehabilitation, or a specific population like older adults. These are continuing-education courses rather than entry qualifications, but the pre- and postnatal and rehabilitation modules in particular tend to pay for themselves quickly through the client work they open up." },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>The major schools and what distinguishes them</h2>
              <div className="space-y-4">
                {[
                  { label: "Balanced Body", body: "The most widely available comprehensive programme internationally, with a contemporary, anatomy-forward approach and a modular structure that suits people training around a job. Broad studio recognition and the easiest to find near you in most countries." },
                  { label: "BASI Pilates", body: "Contemporary, highly systematic, and known for a structured block system for sequencing classes. Graduates tend to be strong programme designers. Well regarded internationally, with a reputation for academic rigour." },
                  { label: "Merrithew (STOTT PILATES)", body: "Contemporary with a strong biomechanical and rehabilitation orientation, and the closest fit if you intend to work alongside physiotherapy or with clinical populations. Extensive continuing-education catalogue and very wide equipment compatibility." },
                  { label: "Polestar Pilates", body: "Explicitly rehabilitation-oriented, founded by physiotherapists, and the usual choice for allied health professionals adding Pilates to clinical practice. Heavier on movement science than on the classical repertoire." },
                  { label: "Classical lineages (Romana's, Peak, The Pilates Center and others)", body: "Teach the original order and method with limited modification, tracing lineage back to Joseph Pilates directly. Training tends to be demanding and apprenticeship-heavy. Choose this route if the classical repertoire is what draws you — and be aware that classical and contemporary studios have distinctly different hiring preferences." },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What the training actually involves</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Taught modules",
                    body: "Weekend or week-long intensives covering repertoire, anatomy, biomechanics, cueing and contraindications. Typically 120 to 180 hours of the comprehensive total. This is the part people budget for and the smallest share of the real time commitment.",
                  },
                  {
                    title: "Self-practice hours",
                    body: "Usually 100 to 150 hours of doing the work in your own body. Not busywork — you cannot cue a movement you have not felt, and examiners can tell immediately which candidates skipped this. Requires ongoing studio access, which is a cost worth confirming before enrolling.",
                  },
                  {
                    title: "Observation hours",
                    body: "Watching experienced teachers work, typically 50 to 100 hours. The most undervalued component of the whole programme. Watching how a good teacher handles a client who cannot do the exercise as prescribed teaches something no manual conveys.",
                  },
                  {
                    title: "Practice teaching",
                    body: "Between 100 and 200 hours teaching under supervision, first fellow trainees and then real clients. This is where teaching is actually learned and where most people discover the hard part is not knowing the repertoire but reading a body in real time and adjusting.",
                  },
                  {
                    title: "Written and practical examination",
                    body: "A written paper covering anatomy, contraindications and method, plus a practical assessment where you teach a session to an examiner. Most schools allow retakes. The practical is generally the harder of the two, and the usual failure mode is over-teaching rather than under-knowing.",
                  },
                  {
                    title: "Insurance and continuing education",
                    body: "Professional liability insurance is inexpensive but essential, and most insurers require proof of certification. Most schools and the NPCP credential also require continuing education credits to stay current, so the training does not entirely end at qualification.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-14 rounded-2xl p-8" style={{ backgroundColor: "#fff4f1", border: "1px solid rgba(139,74,49,0.15)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Questions to ask before you pay a deposit</h2>
              <ul className="space-y-3">
                {[
                  "Is studio access for self-practice and practice-teaching hours included, or charged separately? This is the most common hidden cost and can add substantially to the total.",
                  "What is the total hour requirement, and how is it split between taught, observed, and practised hours?",
                  "Who actually teaches the modules, and how long have they been teaching teachers rather than clients?",
                  "What is the pass rate, and what does a retake cost?",
                  "Does the programme prepare you for the NPCP exam if you want that independent credential?",
                  "Is there a job placement or mentoring pathway afterwards? Some schools feed directly into affiliated studios, which is worth real money in your first year.",
                  "Which equipment brand is the training delivered on? You will be most fluent on what you trained on, and studios run different systems.",
                ].map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    <span className="font-semibold" style={{ color: "#8b4a31" }}>⚠</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>The career, honestly</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Most Pilates teachers are self-employed and assemble an income from several sources: group classes at two or three studios, private clients, and sometimes corporate or online work. Group rates commonly run $30 to $75 a class; privates pay considerably better, and building a private client base is the single clearest route to a sustainable income.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The economics have a hard ceiling worth understanding before you commit. You are paid for hours taught, and there is a physical limit to how many quality hours you can teach in a week — most experienced teachers put it around twenty to twenty-five before their own body and attention suffer. Growth past that point means raising your rate, teaching your own workshops, or opening a studio, all of which are different jobs from teaching.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The first year is usually the hardest financially. Newly qualified teachers get the unpopular time slots, and building a client base takes eighteen months or so. Nearly everyone who lasts started by teaching whatever they were offered. If you can keep other income while you build, do.
              </p>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "How long does it take to become a Pilates instructor?", a: "A mat-only certification typically takes two to four months and runs somewhere between 40 and 100 hours. A comprehensive certification covering mat plus reformer, cadillac, chair and barrels usually requires 450 to 600 hours and takes nine to eighteen months alongside other work. Those hours are not all classroom time — most programmes split them between taught modules, self-practice, observation of experienced teachers, and supervised practice teaching, and the observation and practice-teaching hours are what stretch the calendar." },
                  { q: "How much does Pilates teacher training cost?", a: "Mat certifications generally run $1,000 to $2,500. Comprehensive programmes from the established schools typically fall between $5,000 and $12,000 depending on the school, the country and how much equipment access is bundled. Budget beyond tuition as well: exam fees, required textbooks, and studio time to complete practice hours can add several hundred to a couple of thousand more. Many programmes let you pay per module, which spreads the cost across a year or more." },
                  { q: "Do you need a certification to teach Pilates?", a: "There is no legal licence required to teach Pilates in most countries — the term itself is not trademark-protected, following a well-known US court ruling in 2000. In practice, certification is effectively mandatory: reputable studios will not hire uncertified teachers, and liability insurance is difficult or impossible to obtain without a recognised qualification. The absence of statutory regulation is precisely why the school you train with carries so much weight." },
                  { q: "How much do Pilates instructors earn?", a: "Group class rates commonly run $30 to $75 per class in most Western markets, with private sessions billed at $60 to $120 to the instructor after the studio takes its share. Full-time employed roles exist but are the minority; most teachers piece together income across several studios plus private clients, and privates are where the money actually is. A realistic full-time income sits somewhere between $35,000 and $70,000, with experienced teachers running their own client base or studio earning meaningfully more." },
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
              <h2 className="text-2xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What to buy before you start</h2>
              <div className="space-y-8">
                {PRODUCTS.map((p) => (
                  <ProductCard key={p.name} name={p.name} description={p.description} price={p.price} affiliateUrl={p.affiliateUrl} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Further reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="How to Choose a Pilates Instructor" excerpt="What certifications actually mean when you are the one hiring a teacher." href="/blog/how-to-choose-a-pilates-instructor" category="Guide" readTime="9 min read" date="June 2026" imageUrl="/pictures/stitch-hands-on-carriage.png" />
                <ArticleCard title="Classical vs Contemporary Pilates" excerpt="The two main lineages, what separates them, and which training route suits you." href="/blog/classical-vs-contemporary-pilates" category="Method" readTime="10 min read" date="June 2026" imageUrl="/pictures/stitch-reformer-sunlit-minimal.png" />
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
