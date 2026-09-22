import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Pilates Reformer Dimensions & Space Requirements (2026)",
  description: "Reformer footprints by class, the clearance you need at each end, ceiling height for tower work, and how to measure your room before you order.",
  keywords: ["pilates reformer dimensions", "pilates reformer space requirements", "how much space for a pilates reformer", "reformer footprint", "pilates reformer ceiling height", "reformer size", "will a reformer fit in my room", "pilates reformer storage space"],
  openGraph: {
    title: "Pilates Reformer Dimensions & Space Requirements (2026)",
    description: "Footprints by class, clearance at each end, ceiling height, and how to measure before ordering.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/pilates-reformer-dimensions-and-space-requirements",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-reformer-sunlit-minimal.png", width: 1200, height: 630, alt: "Pilates Reformer Dimensions and Space Requirements — Pilates Collective Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilates Reformer Dimensions & Space Requirements",
    description: "How much room a reformer really needs, including the clearance nobody measures.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-reformer-sunlit-minimal.png"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/pilates-reformer-dimensions-and-space-requirements" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Pilates Reformer Dimensions & Space Requirements (2026)",
      "description": "Reformer footprints by machine class, clearance requirements at each end and along the working side, ceiling height for tower and standing work, and how to measure a room before ordering.",
      "url": "https://pilatescollectiveclub.com/blog/pilates-reformer-dimensions-and-space-requirements",
      "datePublished": "2026-09-16",
      "dateModified": "2026-09-16",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/stitch-reformer-sunlit-minimal.png", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/pilates-reformer-dimensions-and-space-requirements" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Pilates Reformer Dimensions & Space Requirements", "item": "https://pilatescollectiveclub.com/blog/pilates-reformer-dimensions-and-space-requirements" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "How much space do I need for a Pilates reformer?", "acceptedAnswer": { "@type": "Answer", "text": "A standard reformer occupies approximately 90 by 26 inches of floor space in its operational position. On top of that you need two to three feet clear at each end, for getting on and off, for the footbar end, and because several exercises extend past the frame. Add a working side of at least two feet if anyone will ever teach or spot you. That puts the practical requirement at around 12 to 13 feet of length and 4 to 5 feet of width, or roughly 50 to 65 square feet. Compact and folding models reduce the frame itself to as little as 72 by 22 inches, but they do not reduce the clearance you need at the ends." } },
        { "@type": "Question", "name": "What ceiling height do you need for a Pilates reformer?", "acceptedAnswer": { "@type": "Answer", "text": "For a reformer alone, a standard eight-foot ceiling is fine, because the carriage sits low and almost all of the repertoire is performed lying, seated or kneeling. The constraint appears when you add a tower or trapeze unit, or if you want standing work on the footbar. The carriage platform is already raised off the floor, so a standing practitioner starts roughly a foot higher than they would on the floor, and a tower frame extends well above that. If tower work matters to you, measure your actual ceiling height and check it against the specific model's assembled height before ordering, because this is not something you can work around afterwards." } },
        { "@type": "Question", "name": "Can a Pilates reformer fit in a bedroom or apartment?", "acceptedAnswer": { "@type": "Answer", "text": "Often yes, and the binding constraint is usually length rather than area. A standard reformer at around 90 inches is longer than most beds, so the realistic placement is along a wall, which means the room needs roughly 12 feet in one direction once you count end clearance. Where that does not work, folding and compact models are the category built for the problem: some reduce to around 60 percent of their operational footprint and store vertically against a wall. The trade-off is carriage travel, which changes how some exercises feel." } },
        { "@type": "Question", "name": "Will a reformer fit through my door?", "acceptedAnswer": { "@type": "Answer", "text": "This is the question that catches people out, and it has nothing to do with the room. Studio reformers arrive substantially assembled and are long and rigid, so the limiting factor is rarely the doorway width but the turn from a corridor into a room, the stairwell, or the lift depth. Measure the doorway width, the corridor width, every turn on the route, and the lift internal depth, then give those numbers to the supplier before ordering and ask them to confirm in writing. Flat-packed home models sidestep this entirely, which is a real advantage in an upper-floor apartment." } },
      ],
    },
  ],
};

const CLASSES = [
  {
    label: "Standard studio reformer",
    dims: "~90 x 26 in operational",
    body: "The full-size machine you meet in a studio, and the reference point the whole repertoire is written around. Full carriage travel and a multi-position footbar. Arrives substantially assembled, is heavy, and is not intended to be moved between sessions. If you want what you use in class, this is the class of machine, and the length is the thing to design your room around.",
  },
  {
    label: "Compact full-function reformer",
    dims: "~88 x 24 in operational",
    body: "Shorter and narrower than a studio machine while keeping a spring-based system and usable carriage travel. The Merrithew At Home SPX is the clearest example: shorter and narrower than a full-size studio frame, while keeping the same spring system and carriage build. Fits along a wall in most bedrooms and living rooms. The saving is real but modest, so do not expect it to solve a room that is short by three feet.",
  },
  {
    label: "Folding reformer",
    dims: "Folds to ~40 to 60% of footprint",
    body: "Built for the storage problem specifically. Operational dimensions are close to a compact machine, but the frame folds for vertical storage against a wall, which is what makes it viable in an apartment where nothing can stay set up. Confirm both dimensions before buying, because the operational and folded figures are different numbers and listings sometimes lead with the flattering one.",
  },
  {
    label: "Mini and portable reformer",
    dims: "From ~72 x 22 in operational",
    body: "The smallest category, and the honest trade-off is carriage travel. Shorter travel changes how footwork and long-spine work feel, and taller practitioners notice it most. Genuinely useful where space is the absolute constraint or where the machine must be packed away entirely, but it is a different training experience rather than a smaller version of the same one.",
  },
  {
    label: "Reformer with tower or half-trapeze",
    dims: "Footprint as standard, plus height",
    body: "Adds a vertical frame at the footbar end for spring work from above, covering a good part of the cadillac repertoire in a reformer footprint. Floor area barely changes. Ceiling height becomes the binding constraint instead, and it is the one dimension you cannot design around later. Measure before ordering.",
  },
];

const REFORMERS = [
  { name: "Balanced Body Studio Reformer (Revo Footbar)", description: "The permanent-installation machine that populates certification centres and clinics. Strata rock maple frame, five Signature Springs, and full tower compatibility. Sold direct by Balanced Body on Amazon; made to order. It does not fold.", price: "From $4,700", affiliateUrl: "https://www.amazon.com/dp/B002XVWIFE?tag=pilatescollective-20" },
  { name: "Balanced Body Allegro Stretch Reformer", description: "A wide-carriage studio machine, real and sold direct on Amazon: 2 inches wider and 6 inches longer than the standard Allegro, with a 36-inch adjustable footbar. Anodized aluminium frame, TwistLock shoulder rests.", price: "From $3,710", affiliateUrl: "https://www.amazon.com/dp/B093R8DYC9?tag=pilatescollective-20" },
  { name: "Merrithew At Home SPX Reformer", description: "Shorter and narrower than a full-size studio frame while keeping the same spring system and carriage build. Fits along a wall in most bedrooms. Sold mainly as a package, so confirm what a given price includes.", price: "From $3,349", affiliateUrl: "https://www.amazon.com/dp/B004FGT0TM?tag=pilatescollective-20" },
  { name: "Balanced Body Metro IQ Reformer", description: "The cheapest genuine spring reformer from a major brand, and the machine that marks the real floor of the category. Short stored length makes it the one that fits where a full studio frame does not.", price: "From $2,330", affiliateUrl: "https://www.amazon.com/dp/B09HNCMTZL?tag=pilatescollective-20" },
  { name: "AeroPilates Pro XP 557 Reformer", description: "The one machine from a recognised brand that genuinely costs under $2,000. It uses elastic cord rather than coil springs, which is a real difference in how resistance builds, but for building a habit it is a workable trade.", price: "From $1,329.99", affiliateUrl: "https://www.amazon.com/dp/B0012TJI8S?tag=pilatescollective-20" },
];

const PRODUCTS = [
  { name: "COSHNIBI Reformer Protective Cover", description: "If the machine lives in a living space rather than a dedicated room, a fitted cover keeps dust off the upholstery and the springs and makes the thing read as furniture rather than gym equipment. It also doubles as the honest storage answer for a folded reformer — a dedicated wall-mount bracket has no verified Amazon listing, so a good cover over the folded frame is the real, buyable version of that idea.", price: "From $43.22", affiliateUrl: "https://www.amazon.com/dp/B0G2LHY784?tag=pilatescollective-20" },
  { name: "X-Protector Furniture Sliders, 8-Pack", description: "A full-size reformer is heavy and dragging it across a floor damages both. Sliders under the feet let one person reposition a machine for cleaning or for a class layout change without lifting. The cheapest thing on this list and the one that saves a floor.", price: "From $12.99", affiliateUrl: "https://www.amazon.com/dp/B075CR94J3?tag=pilatescollective-20" },
  { name: "Bosch GLM100-23 Laser Distance Measure", description: "Worth the twenty minutes before a four-figure order. A laser measure gets you accurate ceiling height, doorway widths and corridor turns faster and more reliably than a tape you are holding above your head, and ceiling height is the measurement people guess at and then regret guessing at.", price: "From $62.99", affiliateUrl: "https://www.amazon.com/dp/B0C76CPGC7?tag=pilatescollective-20" },
  { name: "ProsourceFit Interlocking Foam Tiles, 48 sq ft", description: "A reformer concentrates a lot of weight on four small feet, which dents timber and compresses carpet permanently. Interlocking tiles under the frame spread the load, protect a rented floor, and noticeably cut the carriage noise transmitted into the room below, which matters in an apartment.", price: "From $49.99", affiliateUrl: "https://www.amazon.com/dp/B07YN1W5W3?tag=pilatescollective-20" },
  { name: "Eccentfit Pilates Grip Pads, 4-Pack", description: "Cheap insurance in a small space: a grip pad on the carriage keeps standing and kneeling work secure and protects the upholstery, which is the first thing to look tired on a machine used in a tight footprint. Check dimensions against your carriage width before ordering.", price: "From $7.99", affiliateUrl: "https://www.amazon.com/dp/B0GGR4QXNH?tag=pilatescollective-20" },
];

export default function PilatesReformerDimensionsPage() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>Reformers</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
              Reformer Dimensions &amp;<br /><span style={{ color: "#8b4a31" }}>Space Requirements</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>Updated September 2026 · 11 min read</p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              The frame dimensions are the easy part and they are not what decides whether a reformer works in your room. What decides it is the clearance at each end, the ceiling height if you ever want tower work, and whether the machine can physically get from your front door to the room. Those three are the ones people measure after ordering. Here is how to measure them before.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-reformer-sunlit-minimal.png" alt="A Pilates reformer positioned along the wall of a minimal, sunlit room" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <div className="mb-14 mt-4 rounded-2xl p-7" style={{ backgroundColor: "#fff4f1", border: "1px solid rgba(139,74,49,0.15)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-3" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>The number you actually need</p>
              <p className="text-base leading-relaxed mb-3" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Take the machine footprint, add two to three feet at each end, and add a working side of at least two feet if anyone will ever teach or spot you. For a standard reformer at roughly 90 by 26 inches, that lands at about 12 to 13 feet of length and 4 to 5 feet of width, or somewhere around 50 to 65 square feet.
              </p>
              <p className="text-base leading-relaxed mb-0" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The end clearance is not optional padding. Several exercises extend the body past the frame, the footbar end needs room for a teacher to stand, and you have to be able to get on and off safely. A compact machine shortens the frame; it does not shorten the clearance.
              </p>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Footprints by machine class</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Exact dimensions vary between models and between production runs, so treat these as the shape of each category and confirm the figures on the spec sheet for the specific machine you are buying. The class differences below are larger and more decisive than the variation within a class.
              </p>
              <div className="space-y-4">
                {CLASSES.map((c) => (
                  <div key={c.label} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
                      <p className="text-base font-semibold" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{c.label}</p>
                      <p className="text-xs font-semibold" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif", whiteSpace: "nowrap" }}>{c.dims}</p>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{c.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Ceiling height, and why it is the irreversible one</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                For a reformer on its own, ceiling height is rarely a problem. The carriage sits low and the overwhelming majority of the repertoire happens lying, seated or kneeling, so a standard eight-foot ceiling is fine.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                It becomes the binding constraint in two situations. The first is standing work: the carriage platform is already raised off the floor, so a standing practitioner begins roughly a foot higher than they would on the ground, and arms overhead from there eat a surprising amount of room. The second is any tower, half-trapeze or cadillac attachment, where the vertical frame extends well above the carriage and the springs need travel above that.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The reason to settle this first is that it is the only dimension you cannot work around after the fact. A room that is a foot too short can take a compact machine. A room with a low ceiling permanently removes the tower repertoire from what you can do there, and no purchase decision later recovers it. Measure the real height, in the spot the machine will stand, and check it against the assembled height of the specific model. If you are fitting out a studio, our{" "}
                <Link href="/blog/how-to-open-a-pilates-studio" style={{ color: "#8b4a31", textDecoration: "underline" }}>guide to opening a studio</Link>{" "}
                treats this as a pre-lease question for exactly this reason.
              </p>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Getting it into the room</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                This is where deliveries fail, and it is almost never the doorway width. A studio reformer arrives substantially assembled: long, rigid and unable to bend around a corner. Measure all of the following, write them down, and give them to the supplier before you order.
              </p>
              <div className="space-y-4">
                {[
                  { label: "Every turn on the route", body: "The real constraint is diagonal clearance at a corridor-to-room turn, not the width of either. A 90-inch rigid frame needs meaningful diagonal space to pivot. Walk the route with a tape and measure the tightest turn, not the average one." },
                  { label: "Lift internal depth, not just the door", body: "A lift with a wide door and a shallow car will not take a full-size reformer. Measure the internal depth and the diagonal, and check the stated load capacity while you are there." },
                  { label: "Stairwell width and landing turns", body: "Stairs are usually survivable; the half-landing turn is what stops the delivery. If the route involves stairs, measure the landing and consider whether a flat-packed model is the better answer for that building." },
                  { label: "Whether delivery includes getting it into the room", body: "Confirm in writing. Kerbside delivery of a reformer leaves you with a very heavy object on the pavement and no obvious next step. For a studio order, ask whether assembly and calibration are included and who performs them." },
                  { label: "Whether a flat-packed model solves it", body: "Home and compact reformers frequently ship flat-packed and assemble in the room, which removes this whole category of problem. In an upper-floor apartment with tight turns, that is a legitimate reason to choose the class of machine, quite separately from price." },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>If the room is genuinely too small</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                Two honest options, and one thing not to do. The first option is a folding machine: operational dimensions close to a compact reformer, folding to somewhere between 40 and 60 percent of that for vertical storage against a wall. This is the category built for the problem, and if the machine cannot stay set up, it is the answer. See our roundups of{" "}
                <Link href="/blog/best-foldable-pilates-reformer" style={{ color: "#8b4a31", textDecoration: "underline" }}>foldable reformers</Link>{" "}and{" "}
                <Link href="/blog/best-pilates-reformer-for-small-spaces" style={{ color: "#8b4a31", textDecoration: "underline" }}>reformers for small spaces</Link>.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                The second is to accept a mini or portable machine and its shorter carriage travel. That is a real change to how footwork and long-spine work feel rather than a cosmetic one, and taller practitioners notice it most, but a machine you use in a room that fits beats a machine you admire in a room that does not.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                What not to do is buy a full-size machine on the assumption that you will shuffle it into position for each session. Reformers are heavy, dragging them damages floors, and the friction of setting up is the single most reliable predictor of a reformer that stops being used. If it cannot live where you will use it, either fold it properly or buy the class of machine that can.
              </p>
            </div>

            <div className="mb-14 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Measure these seven before you order</h2>
              <ul className="space-y-3">
                {[
                  "Room length in the direction the machine will sit, including two to three feet of clearance at each end.",
                  "Room width at that position, including at least two feet of working side.",
                  "Ceiling height at the spot the machine will stand, and the assembled height of the model if it has a tower.",
                  "Doorway width on the route, and the diagonal clearance at every turn.",
                  "Lift internal depth and load capacity, or stairwell width and landing turns.",
                  "Folded dimensions as well as operational, if you are buying a folding machine.",
                  "Floor type and whether it is level, since apparatus needs a hard, non-flexing surface.",
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
                  { q: "How much space do I need for a Pilates reformer?", a: "A standard reformer occupies approximately 90 by 26 inches of floor space in its operational position. On top of that you need two to three feet clear at each end, for getting on and off, for the footbar end, and because several exercises extend past the frame. Add a working side of at least two feet if anyone will ever teach or spot you. That puts the practical requirement at around 12 to 13 feet of length and 4 to 5 feet of width, or roughly 50 to 65 square feet. Compact and folding models reduce the frame itself to as little as 72 by 22 inches, but they do not reduce the clearance you need at the ends." },
                  { q: "What ceiling height do you need for a Pilates reformer?", a: "For a reformer alone, a standard eight-foot ceiling is fine, because the carriage sits low and almost all of the repertoire is performed lying, seated or kneeling. The constraint appears when you add a tower or trapeze unit, or if you want standing work on the footbar. The carriage platform is already raised off the floor, so a standing practitioner starts roughly a foot higher than they would on the floor, and a tower frame extends well above that. If tower work matters to you, measure your actual ceiling height and check it against the specific model's assembled height before ordering, because this is not something you can work around afterwards." },
                  { q: "Can a Pilates reformer fit in a bedroom or apartment?", a: "Often yes, and the binding constraint is usually length rather than area. A standard reformer at around 90 inches is longer than most beds, so the realistic placement is along a wall, which means the room needs roughly 12 feet in one direction once you count end clearance. Where that does not work, folding and compact models are the category built for the problem: some reduce to around 60 percent of their operational footprint and store vertically against a wall. The trade-off is carriage travel, which changes how some exercises feel." },
                  { q: "Will a reformer fit through my door?", a: "This is the question that catches people out, and it has nothing to do with the room. Studio reformers arrive substantially assembled and are long and rigid, so the limiting factor is rarely the doorway width but the turn from a corridor into a room, the stairwell, or the lift depth. Measure the doorway width, the corridor width, every turn on the route, and the lift internal depth, then give those numbers to the supplier before ordering and ask them to confirm in writing. Flat-packed home models sidestep this entirely, which is a real advantage in an upper-floor apartment." },
                ].map((item) => (
                  <div key={item.q} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.q}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Reformers */}
            <div className="mt-16 pt-12" style={{ borderTop: "1px solid rgba(217,194,186,0.4)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-2" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Reformers</p>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Machines by footprint class</h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                One machine from each class above, from the full studio frame down to the compact and cord-resistance options. Check the warranty covers your intended use before ordering, and confirm the machine fits the room and the route into it.
              </p>
              <div className="space-y-8">
                {REFORMERS.map((p) => (
                  <ProductCard key={p.name} name={p.name} description={p.description} price={p.price} affiliateUrl={p.affiliateUrl} />
                ))}
              </div>
            </div>

            {/* Equipment */}
            <div className="mt-16 pt-12" style={{ borderTop: "1px solid rgba(217,194,186,0.4)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-2" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Equipment</p>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>What makes a tight space work</h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                None of these change the dimensions of your room. What they do is make a machine in a shared space practical to store, safe to move, and less damaging to the floor it stands on. Check weight ratings and model compatibility before ordering.
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
                <ArticleCard title="Best Pilates Reformer for Small Spaces" excerpt="Foldable, compact and wall-storable machines ranked on footprint and full-workout capability." href="/blog/best-pilates-reformer-for-small-spaces" category="Equipment" readTime="11 min read" date="June 2026" imageUrl="/pictures/stitch-reformer-morning-light.png" />
                <ArticleCard title="Best Foldable Pilates Reformer" excerpt="The folding machines that actually fold, and what the mechanism costs you in carriage feel." href="/blog/best-foldable-pilates-reformer" category="Equipment" readTime="10 min read" date="June 2026" imageUrl="/pictures/stitch-reformer-loops-hooks.png" />
                <ArticleCard title="Commercial vs Home Pilates Reformer" excerpt="Frame, weight rating, warranty and duty cycle: what separates the two tiers." href="/blog/commercial-vs-home-pilates-reformer" category="Equipment" readTime="11 min read" date="September 2026" imageUrl="/pictures/stitch-reformer-spring-detail.png" />
                <ArticleCard title="Best Pilates Reformer for Tall People" excerpt="Carriage travel and footbar height are what decide fit above six feet." href="/blog/best-pilates-reformer-for-tall-people" category="Equipment" readTime="10 min read" date="June 2026" imageUrl="/pictures/stitch-reformer-row-studio.png" />
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
