import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "How to Open a Pilates Studio (2026): The Complete Guide",
  description: "What opening a Pilates studio involves: space and ceiling requirements, the equipment order, licensing, insurance, and the numbers that decide it.",
  keywords: ["how to open a pilates studio", "opening a pilates studio", "pilates studio business plan", "pilates studio startup costs", "pilates studio requirements", "start a pilates business", "pilates studio insurance", "pilates studio equipment list", "pilates studio lease", "pilates studio profit margin"],
  openGraph: {
    title: "How to Open a Pilates Studio (2026): The Complete Guide",
    description: "Space, equipment, licensing, insurance and staffing, plus the numbers that decide whether a studio works.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/how-to-open-a-pilates-studio",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-studio-entryway.png", width: 1200, height: 630, alt: "How to Open a Pilates Studio — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Open a Pilates Studio (2026)",
    description: "Space, equipment, licensing, insurance and the numbers behind a working studio.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-studio-entryway.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/how-to-open-a-pilates-studio" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "How to Open a Pilates Studio (2026): The Complete Guide",
      "description": "A practical guide to opening a Pilates studio: premises and ceiling height, the equipment order, licensing and insurance, staffing, and the unit economics that decide viability.",
      "url": "https://pilatescollectiveclub.com/blog/how-to-open-a-pilates-studio",
      "datePublished": "2026-09-16",
      "dateModified": "2026-09-16",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-studio-entryway.png", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/how-to-open-a-pilates-studio" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "How to Open a Pilates Studio", "item": "https://pilatescollectiveclub.com/blog/how-to-open-a-pilates-studio" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Do you need to be a certified instructor to open a Pilates studio?", "acceptedAnswer": { "@type": "Answer", "text": "No. Owning a studio is a business, not a teaching role, and plenty of owners hire all their teaching. But if you are not certified you lose the ability to cover a class at short notice, to judge a teacher's competence in an interview, and to programme the timetable from experience. Most owners who are not teachers themselves compensate by hiring a lead instructor early and paying them properly to own the teaching side." } },
        { "@type": "Question", "name": "How much space does a Pilates studio need?", "acceptedAnswer": { "@type": "Answer", "text": "Work from the apparatus outward rather than from a total square footage. A standard reformer occupies roughly 90 by 26 inches of floor space, and it needs two to three feet clear at each end plus a working side for the teacher and for the footbar and straps to be used safely. That puts a realistic allocation at around 60 to 80 square feet per reformer once circulation is counted. Add a reception area, changing space, a bathroom and storage, and a six-reformer studio generally needs something in the region of 800 to 1,200 square feet. Ceiling height matters as much as floor area if you intend to install a tower or trapeze unit." } },
        { "@type": "Question", "name": "What insurance does a Pilates studio need?", "acceptedAnswer": { "@type": "Answer", "text": "At minimum: professional liability covering instruction, general or public liability covering visitors to the premises, and property cover for the equipment itself, which is the largest single asset in the room. If you employ teachers rather than contracting them, employers' liability or workers' compensation is usually a legal requirement. Many landlords also specify minimum liability limits in the lease. Confirm that your policy covers apparatus work specifically, not just mat instruction, and that it covers anyone teaching under your roof." } },
        { "@type": "Question", "name": "Is a Pilates studio profitable?", "acceptedAnswer": { "@type": "Answer", "text": "It can be, and the arithmetic is unusually transparent. Revenue is capped by how many teaching hours your apparatus and timetable can hold, so profitability turns on class occupancy and on your rent as a share of revenue. The two failure modes are predictable: signing a lease too large for the client base you can realistically build in the first year, and discounting introductory offers so heavily that the members you acquire never convert to full price. Equipment is a one-off cost that lasts a decade or more with maintenance. Rent and payroll are the recurring numbers that decide the outcome." } },
      ],
    },
  ],
};

const PRODUCTS = [
  { name: "Studio Pilates Props Set (Rings, Bands, Balls)", description: "Every apparatus studio still needs props in volume, and props are the one category where buying for a whole studio rather than one person changes what you should order. Buy multiples of each item so a full class can use them simultaneously, and buy a second set of bands from the start because bands are the consumable in this list.", price: "From $40", affiliateUrl: "https://www.amazon.com/s?k=pilates+props+set+magic+circle+resistance+bands+ball&tag=pilatescollective-20" },
  { name: "Commercial Equipment Disinfectant Wipes", description: "Apparatus gets touched constantly and upholstery is the part clients notice. Buy wipes rated safe for vinyl and leatherette rather than a general-purpose cleaner, because alcohol-heavy formulas dry and crack reformer upholstery over a couple of years. This is a recurring line in your budget, not a one-off.", price: "From $30", affiliateUrl: "https://www.amazon.com/s?k=gym+equipment+disinfectant+wipes+vinyl+safe&tag=pilatescollective-20" },
  { name: "Grip Socks for Retail Resale", description: "Most studios require grip socks and most clients forget them, which makes a small stock at reception the easiest retail line to run. Order a spread of sizes in a plain design, price them as a convenience item rather than a fashion one, and treat the margin as covering your laundry and consumables.", price: "From $25", affiliateUrl: "https://www.amazon.com/s?k=pilates+grip+socks+bulk+multipack&tag=pilatescollective-20" },
  { name: "Studio Wall Mirror Panels", description: "Mirrors are a teaching tool for alignment feedback and the single cheapest way to make a small room read as a professional space. Panel systems are worth considering over one large sheet: they are far easier to move into a converted unit through a standard doorway, and a damaged panel is replaceable.", price: "From $120", affiliateUrl: "https://www.amazon.com/s?k=large+wall+mirror+panels+gym+studio&tag=pilatescollective-20" },
  { name: "Equipment Storage Rack and Prop Organiser", description: "The difference between a studio that looks run and one that looks improvised is usually storage. Props left on the floor between classes read as clutter and slow your turnaround, which matters when the timetable is tight. Wall-mounted organisers keep floor area available for the apparatus you paid for.", price: "From $60", affiliateUrl: "https://www.amazon.com/s?k=gym+storage+rack+yoga+mat+prop+organizer&tag=pilatescollective-20" },
  { name: "Bluetooth Studio Sound System", description: "A single speaker in the corner does not work in a room with reformers running, because carriage noise sits in the same range as the music. Two modest speakers placed at opposite ends beat one loud one, and a system with a wired input as well as Bluetooth saves the class when a phone refuses to pair.", price: "From $150", affiliateUrl: "https://www.amazon.com/s?k=bluetooth+speaker+system+fitness+studio&tag=pilatescollective-20" },
];

export default function HowToOpenAPilatesStudioPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Studio Business</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              How to Open a<br /><span style={{ color: "#8b4a31" }}>Pilates Studio</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 15 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              A Pilates studio is a property business with an equipment problem attached. The teaching is the part most owners arrive already knowing, and it is rarely what decides the outcome. What decides it is the lease you sign, the ceiling height of the room you sign for, and how many teaching hours your apparatus can physically hold in a week. Get those three right and a studio is a genuinely good business. Get the lease wrong and no amount of good teaching recovers it.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-studio-entryway.png" alt="The entrance and reception area of a Pilates studio, with the apparatus room visible beyond" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-14 mt-4">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Decide what kind of studio you are opening first</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                This decision sets your equipment bill, your rent, your staffing model and your pricing, and almost every other question becomes easy once it is settled. Owners who skip it end up with a room that half-suits three different models.
              </p>
              <div className="space-y-4">
                {[
                  { label: "Private and duet studio (1 to 3 reformers)", body: "The lowest-risk entry point. Small premises, sometimes a converted residential space where zoning permits it, and revenue built on private and duet sessions at a high hourly rate. The economics work because occupancy is effectively booked in advance rather than hoped for. The ceiling is your own available hours, which is why many owners start here and expand into group once they have a waiting list." },
                  { label: "Group apparatus studio (6 to 12 reformers)", body: "The standard model in most markets. Group reformer classes at a moderate per-head price, filling on a timetable. Revenue scales with occupancy rather than with your personal hours, which is the point, but it requires enough population density to fill off-peak slots and it commits you to a payroll. This is the model most of the equipment and space guidance below assumes." },
                  { label: "Comprehensive classical studio", body: "A full apparatus room: reformers plus cadillac or tower, chair, ladder barrel and props. Higher equipment cost and more floor area per client, offset by premium pricing and a clientele that stays for years. Needs a genuinely qualified teaching team, because the whole proposition is depth rather than throughput." },
                  { label: "Mat and hybrid studio", body: "Little or no apparatus, so the equipment bill is small and the room can be almost anywhere. The trade-off is that you are competing on price and convenience with every gym and yoga studio nearby, with none of the differentiation apparatus gives you. Viable as a second location or alongside something else, harder as a standalone proposition." },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>The premises, and the two measurements that matter most</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Do not start from a square footage target. Start from the apparatus and work outward, because a reformer needs usable space around it rather than just under it. A standard reformer occupies roughly 90 by 26 inches in its operational position, and the teacher needs to reach the footbar end, the headrest end and at least one long side. Count circulation and the honest figure lands near 60 to 80 square feet per machine.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The measurement people forget is height. A reformer with a tower, or any trapeze unit, needs meaningful clearance above the frame, and clients perform standing and kneeling work on the carriage, which is already raised off the floor. Low ceilings do not stop you opening, but they quietly remove the tower repertoire from your syllabus forever, and that is a decision worth making on purpose rather than discovering after signing. Our{" "}
                <Link href="/blog/pilates-reformer-dimensions-and-space-requirements" style={{ color: "#8b4a31", textDecoration: "underline" }}>reformer dimensions and space guide</Link>{" "}
                has the footprint and clearance figures by model.
              </p>
              <div className="space-y-4">
                {[
                  { label: "Floor loading and floor type", body: "Reformers are heavy, and a room of them plus occupants is a real load, particularly above ground floor. Ask about floor loading before you commit in an older building or an upper unit. Surface matters too: apparatus needs a level, hard, non-flexing floor, and sprung or heavily cushioned flooring made for dance is the wrong choice under a reformer." },
                  { label: "Access for delivery", body: "This sinks more fit-outs than it should. Measure the doorways, the corridor turns, the lift dimensions and the stairwell before ordering, and give those numbers to the supplier. Studio reformers arrive substantially assembled and some models genuinely will not turn a tight corner. Confirm delivery access in writing as part of the order." },
                  { label: "Ventilation and temperature", body: "A full class generates real heat and humidity, and a room that becomes unpleasant by the third class of the morning will show up in your retention long before anyone complains. Check the existing system honestly and price any upgrade as part of the fit-out rather than as an afterthought." },
                  { label: "Zoning, use class and occupancy", body: "Confirm that the unit permits fitness or studio use, and that you can obtain the relevant occupancy approval, before money changes hands. Requirements vary by jurisdiction and this is the point to pay a local professional. Accessibility obligations also attach to premises open to the public in most markets, and retrofitting them is far more expensive than designing for them." },
                  { label: "Lease length against your ramp-up", body: "A client base takes time to build, and the rent is due from month one. Weigh a longer term with a rent-free fit-out period against the flexibility of a shorter one. The most common fatal error in this business is a lease sized for the studio you hope to have in year three, signed in month one." },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>The equipment order</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Equipment is your largest one-off cost and the easiest place to make an expensive mistake in either direction. Buying home-grade machines for a commercial timetable means replacing them early and dealing with a voided warranty in the meantime. Buying the top of the range for a studio still proving its timetable ties up capital you will want for rent in month eight.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The distinction that matters is commercial rating, not price. Commercial frames are built for a duty cycle a home machine never sees, and crucially the manufacturer warranty usually distinguishes between domestic and commercial use. A home-rated reformer in a studio is typically out of warranty from the first paid class. We cover what actually differs in{" "}
                <Link href="/blog/commercial-vs-home-pilates-reformer" style={{ color: "#8b4a31", textDecoration: "underline" }}>commercial versus home reformers</Link>, and the itemised budgets in our{" "}
                <Link href="/blog/pilates-studio-equipment-cost-breakdown" style={{ color: "#8b4a31", textDecoration: "underline" }}>studio equipment cost breakdown</Link>.
              </p>
              <div className="space-y-4">
                {[
                  { label: "Buy matching machines", body: "A row of identical reformers is worth paying for. Spring tension, carriage feel and footbar positions differ between brands and even between models in a range, so a mixed room forces the teacher to re-cue every station and makes a group class harder to run well. It also looks like what it is. If budget forces a phased purchase, buy the same model in batches rather than mixing brands." },
                  { label: "Order springs and consumables with the machines", body: "Springs, ropes and straps are wear items with a finite working life. Ordering spare sets alongside the initial purchase costs little, avoids a machine standing idle waiting on a part, and means you are not paying single-unit shipping later. Budget for replacement on a schedule rather than on failure." },
                  { label: "Do not skip the small apparatus", body: "Props are cheap relative to reformers and they carry a disproportionate share of the teaching. Rings, bands, balls, blocks and small weights are what let a teacher differentiate within a mixed-ability class. Buy in class-sized multiples, not in ones." },
                  { label: "Get the installation and service terms in writing", body: "For a multi-machine order, ask what delivery, assembly, calibration and first service include, and what the response time is on a warranty claim. A studio with a broken reformer is a studio with a class it cannot teach. Commercial suppliers generally offer this properly, and it is a reason to buy from them rather than from a marketplace listing." },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Licensing, insurance and the paperwork</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The specifics are jurisdictional and change, so treat this as the list of questions to put to a local accountant and broker rather than as advice. What follows is the set of items that applies almost everywhere.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Business structure", body: "Most owners incorporate rather than trading personally, because a room full of apparatus and members carries liability that you do not want attached to your own assets. The right structure depends on your tax position and whether you intend to take on partners or investment, which is a conversation for an accountant before you register anything." },
                  { title: "Professional and public liability", body: "Professional liability covers the instruction itself; general or public liability covers people being on your premises. You need both. Confirm the policy explicitly covers apparatus-based teaching rather than mat only, and that it extends to every teacher working under your roof, whether employed or contracting." },
                  { title: "Property and business interruption", body: "The apparatus is the single largest asset in the room and it is not cheap to replace. Insure it for replacement value, not book value. Business interruption cover is the line owners most often skip and most regret, because it is what pays the rent if the room is unusable after a leak or a fire." },
                  { title: "Employment status of teachers", body: "Whether your teachers are employees or independent contractors has tax, insurance and legal consequences, and the test is set by law rather than by what the contract calls them. Getting this wrong is expensive retrospectively. Decide it deliberately with professional advice before your first hire." },
                  { title: "Client waivers and health screening", body: "A signed waiver and a pre-participation health questionnaire should be a condition of the first session, not an optional form. They serve two purposes: they limit your exposure, and the screening genuinely changes how a competent teacher handles a new client's first weeks." },
                  { title: "Music licensing", body: "Playing recorded music in a commercial premises generally requires a licence from the relevant collecting societies in your country, and studios do get contacted about it. It is a small annual cost and an easy thing to have in place from opening." },
                  { title: "Data protection", body: "You will hold names, contact details, payment information and health disclosures. That brings obligations under whichever privacy regime applies to you, and it is worth choosing a booking platform that takes those obligations seriously rather than keeping client health notes in a spreadsheet." },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>How the numbers actually work</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Rent, wages and class prices vary too much between markets for anyone to hand you a template that means anything. What does transfer is the shape of the calculation, and it is simple enough to do on one page before you commit to a lease.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Your revenue ceiling is fixed by physics: the number of stations, multiplied by the number of class slots the room can run in a week, multiplied by your price per head. That is the absolute maximum, and nobody achieves it. Apply a realistic occupancy rate and you have your working revenue figure. Against that sit rent, payroll, insurance, software, utilities and consumables, all of which are due whether the class fills or not.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Two things follow from that structure, and they are the whole game. First, because your costs are largely fixed and your capacity is capped, occupancy is the lever that matters more than price. Second, because rent is the largest fixed cost and it never falls, the size of the room you sign for is the most consequential decision you make. Model the quiet Tuesday morning, not the full Saturday.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Two patterns cause most early failures. One is the introductory offer priced so low that it attracts people who were only ever going to attend at that price, which fills the room in month one and empties it in month four. The other is under-budgeting the gap between signing and opening: fit-out overruns, and rent and loan payments start before the first class does. Assume the ramp takes longer than your plan says, and hold enough working capital to be wrong about it.
              </p>
            </div>

            <div className="mb-14 rounded-2xl p-8" style={{ backgroundColor: "#fff4f1", border: "1px solid rgba(139,74,49,0.15)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Settle these before you sign anything</h2>
              <ul className="space-y-3">
                {[
                  "What is the ceiling height, and does it permit tower or trapeze work if you ever want it?",
                  "Will the apparatus physically reach the room? Measure doorways, turns, lifts and stairs, and give the supplier those numbers.",
                  "What is the floor loading, and is the floor level and non-flexing?",
                  "Does the use class and occupancy approval permit a fitness studio, and what accessibility obligations attach?",
                  "Is there a rent-free period for fit-out, and how does the lease term compare with how long your client base will realistically take to build?",
                  "Does the equipment warranty cover commercial use, and what is the warranty response time on a machine that is out of action?",
                  "Does your insurance cover apparatus teaching, every teacher on your timetable, replacement value of the equipment, and business interruption?",
                  "How many weeks of rent and payroll can you cover with no revenue at all?",
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
                  { q: "Do you need to be a certified instructor to open a Pilates studio?", a: "No. Owning a studio is a business, not a teaching role, and plenty of owners hire all their teaching. But if you are not certified you lose the ability to cover a class at short notice, to judge a teacher's competence in an interview, and to programme the timetable from experience. Most owners who are not teachers themselves compensate by hiring a lead instructor early and paying them properly to own the teaching side." },
                  { q: "How much space does a Pilates studio need?", a: "Work from the apparatus outward rather than from a total square footage. A standard reformer occupies roughly 90 by 26 inches of floor space, and it needs two to three feet clear at each end plus a working side for the teacher and for the footbar and straps to be used safely. That puts a realistic allocation at around 60 to 80 square feet per reformer once circulation is counted. Add a reception area, changing space, a bathroom and storage, and a six-reformer studio generally needs something in the region of 800 to 1,200 square feet. Ceiling height matters as much as floor area if you intend to install a tower or trapeze unit." },
                  { q: "What insurance does a Pilates studio need?", a: "At minimum: professional liability covering instruction, general or public liability covering visitors to the premises, and property cover for the equipment itself, which is the largest single asset in the room. If you employ teachers rather than contracting them, employers' liability or workers' compensation is usually a legal requirement. Many landlords also specify minimum liability limits in the lease. Confirm that your policy covers apparatus work specifically, not just mat instruction, and that it covers anyone teaching under your roof." },
                  { q: "Is a Pilates studio profitable?", a: "It can be, and the arithmetic is unusually transparent. Revenue is capped by how many teaching hours your apparatus and timetable can hold, so profitability turns on class occupancy and on your rent as a share of revenue. The two failure modes are predictable: signing a lease too large for the client base you can realistically build in the first year, and discounting introductory offers so heavily that the members you acquire never convert to full price. Equipment is a one-off cost that lasts a decade or more with maintenance. Rent and payroll are the recurring numbers that decide the outcome." },
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
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>The fit-out items you buy off the shelf</h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Reformers and apparatus come from specialist suppliers with commercial warranties, and they should. Everything below is the second list: the props, consumables and fit-out items that are the same product whoever sells them, and where buying in studio quantities is the only real difference.
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
                <ArticleCard title="Pilates Studio Equipment Cost Breakdown" excerpt="Itemised budgets for a small, medium and large studio, with real equipment prices and totals." href="/blog/pilates-studio-equipment-cost-breakdown" category="Guide" readTime="12 min read" date="September 2026" imageUrl="/pictures/stitch-reformers-aerial-row.png" />
                <ArticleCard title="Commercial vs Home Pilates Reformer" excerpt="Frame construction, weight rating, warranty and duty cycle: what the commercial tier actually buys you." href="/blog/commercial-vs-home-pilates-reformer" category="Equipment" readTime="11 min read" date="September 2026" imageUrl="/pictures/stitch-reformer-spring-detail.png" />
                <ArticleCard title="Best Studio Pilates Reformers" excerpt="Commercial-grade machines reviewed on durability, spring range and long-term value." href="/blog/best-studio-pilates-reformers" category="Equipment" readTime="12 min read" date="June 2026" imageUrl="/pictures/stitch-reformer-row-studio.png" />
                <ArticleCard title="How to Become a Pilates Instructor" excerpt="Mat versus comprehensive certification, what the schools cost, and what the job pays." href="/blog/how-to-become-a-pilates-instructor" category="Guide" readTime="13 min read" date="September 2026" imageUrl="/pictures/stitch-studio-modern-row.png" />
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
