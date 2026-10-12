import type { Metadata } from "next";
import EquipmentGuide, { type EquipmentGuideProps } from "@/components/EquipmentGuide";
import { item, PRICES_CHECKED, PRICES_CHECKED_ISO } from "@/lib/reformerCatalog";

const SLUG = "how-to-open-a-pilates-studio";
const URL = `https://pilatescollectiveclub.com/blog/${SLUG}`;
const HERO = "/pictures/stitch-studio-entryway.png";
const TITLE = "How to Open a Pilates Studio (2026): Steps & Equipment Costs";
const DESCRIPTION = "How to open a Pilates studio in 9 steps: studio model, premises, insurance, teachers and pricing, plus equipment budgets built from live reformer prices.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["how to open a pilates studio", "opening a pilates studio", "pilates studio business plan", "pilates studio startup costs", "pilates studio equipment cost", "pilates studio equipment list", "pilates studio requirements", "start a pilates business", "pilates studio insurance", "commercial pilates reformer"],
  openGraph: { title: TITLE, description: DESCRIPTION, type: "article", url: URL, images: [{ url: `https://pilatescollectiveclub.com${HERO}`, width: 1200, height: 630, alt: "The entrance of a Pilates studio" }] },
  twitter: { card: "summary_large_image", title: "How to Open a Pilates Studio (2026)", description: DESCRIPTION, images: [`https://pilatescollectiveclub.com${HERO}`] },
  alternates: { canonical: URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const GUIDE: EquipmentGuideProps = {
  slug: SLUG,
  title: TITLE,
  description: DESCRIPTION,
  breadcrumb: "How to Open a Pilates Studio",
  eyebrow: "Guide",
  eyebrowAccent: "Studio Business",
  h1: "How to Open a Pilates Studio",
  h1Accent: "(2026): Step by Step, with Equipment Costs",
  readTime: "17 min read",
  updatedLabel: `Equipment prices checked ${PRICES_CHECKED}`,
  datePublished: "2026-09-16",
  dateModified: PRICES_CHECKED_ISO,
  heroImage: HERO,
  heroAlt: "The entrance and reception area of a Pilates studio, with the apparatus room beyond",
  heroCaption: "Model · Premises · Paperwork · Equipment · Team · Launch",
  intro: [
    "A Pilates studio is a property business with an equipment problem attached. The teaching is the part most owners already know, and it is rarely what decides the outcome. What decides it is the lease you sign, the ceiling height of the room you sign for, and how many teaching hours your apparatus can hold in a week.",
    "This guide walks through the nine steps in order, then prices the equipment for five common studio types using the live Amazon listings for Balanced Body and Merrithew apparatus, checked on " + PRICES_CHECKED + ". Rent, wages and class prices vary too much by market for a template to mean anything, so we show you how to run those numbers yourself instead of inventing them.",
  ],
  quickPicks: [
    { label: "Best group-studio reformer", itemId: "balanced-body-studio-reformer" },
    { label: "Best aluminium studio reformer", itemId: "balanced-body-allegro-stretch" },
    { label: "Best reformer + tower", itemId: "balanced-body-studio-reformer-tower" },
    { label: "Best for clinics", itemId: "merrithew-rehab-v2-max-plus" },
    { label: "Best first extra apparatus", itemId: "balanced-body-exo-chair" },
  ],
  blocks: [
    {
      kind: "steps",
      id: "steps",
      eyebrow: "The process",
      heading: "How to open a Pilates studio in 9 steps",
      steps: [
        { h: "Decide what kind of studio you are opening", b: "Private and duet (1 to 3 reformers), group reformer (6 to 12), comprehensive classical (reformers plus Cadillac, chair and barrel), or mat and hybrid. This one decision sets your equipment bill, rent, staffing and pricing, so settle it before anything else." },
        { h: "Run the numbers on one page", b: "Revenue ceiling = stations × weekly class slots × price per head. Apply a realistic occupancy rate, then subtract rent, payroll, insurance, software, utilities and consumables, which are due whether a class fills or not. Model the quiet Tuesday morning, not the full Saturday." },
        { h: "Find premises that fit the apparatus", b: "Start from the machines and work outward. A reformer needs working space on its ends and one long side, and a tower or trapeze needs ceiling height. Check floor loading, delivery access, ventilation and permitted use before you sign." },
        { h: "Set up the business and the paperwork", b: "Choose a business structure with an accountant, confirm zoning and occupancy approval, and arrange professional liability, general liability, equipment and business-interruption cover. Add waivers, health screening, a music licence and a data-protection plan." },
        { h: "Order the equipment", b: "Buy matching, commercially warranted machines in batches, order spare springs and ropes with them, and get delivery, assembly and service terms in writing. Many studio machines are made to order, so place the order early." },
        { h: "Hire your teachers", b: "Decide employee or contractor status with professional advice, since the legal test does not depend on what the contract calls it. If you do not teach yourself, hire a lead instructor early to own the timetable and quality." },
        { h: "Choose booking software and set prices", b: "Pick a booking platform that handles memberships, class packs, waitlists, waivers and secure client data. Price for occupancy you can sustain, and avoid introductory offers so cheap that the clients they attract never convert." },
        { h: "Market before you open", b: "Build a waitlist months ahead: a Google Business Profile, a simple website with the timetable, local partnerships with physios and gyms, and founding-member offers with a clear end date." },
        { h: "Open, measure, adjust", b: "Track occupancy by class slot, introductory-offer conversion and retention every week. Cut or move empty slots, and add machines only when the timetable is consistently full." },
      ],
    },
    {
      kind: "cards",
      id: "studio-types",
      eyebrow: "Step 1 in detail",
      heading: "The four studio models",
      cards: [
        { h: "Private and duet (1 to 3 reformers)", b: "The lowest-risk entry point. Small premises and revenue from private and duet sessions at a high hourly rate. Occupancy is booked in advance rather than hoped for. The ceiling is your own available hours." },
        { h: "Group reformer (6 to 12 reformers)", b: "The standard model in most markets. Classes at a moderate per-head price fill a timetable, so revenue scales with occupancy rather than your hours. It needs population density to fill off-peak slots and commits you to payroll." },
        { h: "Comprehensive classical", b: "Reformers plus a Cadillac or tower, chair, ladder barrel and props. Higher equipment cost and more floor area per client, balanced by premium pricing and long-staying clients. Needs a deeply qualified team." },
        { h: "Mat and hybrid", b: "Little or no apparatus, so the equipment bill is small and the room can be almost anywhere. The trade-off: you compete on price with every gym and yoga studio nearby. Stronger as a second location than a standalone." },
      ],
    },
    {
      kind: "cards",
      id: "premises",
      eyebrow: "Step 3 in detail",
      heading: "Premises: what to check before you sign",
      intro: "The reformers on this page list at about 92 to 111 inches long and 24 to 30 inches wide, and the teacher needs to reach both ends and one long side. Allow for circulation, reception, changing, a bathroom and storage on top.",
      cards: [
        { h: "Ceiling height", b: "Towers and trapeze tables are tall: the Studio Reformer with Tower lists at 78\" high and the Cadillac at 87\" with its canopy. Clients also stand and kneel on a raised carriage. A low ceiling quietly removes tower work from your syllabus." },
        { h: "Floor loading and surface", b: "Apparatus is heavy (the Studio Reformer with Tower lists at 341 lb) and a full room adds occupants. Ask about floor loading in older buildings and upper floors. Apparatus needs a level, hard, non-flexing floor." },
        { h: "Delivery access", b: "Measure doorways, corridor turns, lifts and stairwells before ordering, and give the numbers to the supplier. Some studio machines arrive substantially assembled." },
        { h: "Ventilation and temperature", b: "A full class generates heat and humidity. Check the existing system honestly and price any upgrade into the fit-out." },
        { h: "Zoning and accessibility", b: "Confirm the unit permits fitness use and that you can get occupancy approval before money changes hands. Accessibility obligations usually apply to premises open to the public. Pay a local professional for this." },
        { h: "Lease length vs ramp-up", b: "Rent is due from month one; a client base takes time. Weigh a longer term with a rent-free fit-out period against a shorter, more flexible one. Do not sign for the studio you hope to have in year three." },
      ],
    },
    {
      kind: "cards",
      id: "paperwork",
      eyebrow: "Step 4 in detail",
      heading: "Licensing, insurance and the paperwork",
      intro: "The specifics depend on where you are and change over time. Treat this as the list of questions for a local accountant, lawyer and insurance broker.",
      cards: [
        { h: "Business structure", b: "Most owners incorporate rather than trade personally, because a room full of apparatus and members carries liability you do not want attached to your own assets." },
        { h: "Professional and general liability", b: "Professional liability covers instruction; general liability covers people on your premises. Confirm the policy covers apparatus teaching, not just mat, and every teacher on your timetable." },
        { h: "Equipment and business interruption", b: "Insure apparatus at replacement value. Business-interruption cover pays the rent if the room is unusable after a leak or fire, and is the line owners most often skip." },
        { h: "Teacher employment status", b: "Employee or contractor has tax, insurance and legal consequences, and the test is set by law. Decide it with professional advice before your first hire." },
        { h: "Waivers and health screening", b: "Make a signed waiver and pre-participation health questionnaire a condition of the first session." },
        { h: "Music licence and data protection", b: "Playing recorded music commercially usually needs a licence. You will also hold health and payment data, so choose a booking platform that handles privacy properly." },
      ],
    },
    {
      kind: "prose",
      id: "equipment-advice",
      eyebrow: "Step 5 in detail",
      heading: "How to buy studio equipment",
      paragraphs: [
        "Equipment is your largest one-off cost and the easiest place to make an expensive mistake in either direction. Home-grade machines on a commercial timetable wear out early, and many warranties distinguish between home and commercial use. Top-of-the-range apparatus for a studio still proving its timetable ties up cash you will want for rent.",
        "Buy matching machines. Spring tension, carriage feel and footbar positions differ between brands and models, so a mixed room forces teachers to re-cue every station. If budget forces a phased purchase, buy the same model in batches.",
        "Order spare springs, ropes and straps with the machines, and get delivery, assembly and warranty-response terms in writing. On " + PRICES_CHECKED + ", most Balanced Body studio machines on Amazon were made to order, so allow for the lead time. Ask the seller to confirm commercial-use warranty terms before you order any machine for a studio.",
      ],
    },
    {
      kind: "table",
      id: "budget",
      eyebrow: "Equipment budget",
      heading: "What studio equipment costs: five example fit-outs",
      intro: "Totals use the Amazon prices checked on " + PRICES_CHECKED + " for the machines listed further down this page.",
      columns: ["Studio type", "Apparatus", "Equipment total"],
      rows: [
        ["Private and duet", "2 × Studio Reformer (Revo) $9,400 + 1 × Studio Reformer with Tower & Mat $6,975 + 1 × EXO Chair $1,255", "$17,630"],
        ["Group reformer, maple", "8 × Studio Reformer (Revo) at $4,700", "$37,600"],
        ["Group reformer, aluminium", "8 × Allegro Stretch at $3,710", "$29,680"],
        ["Comprehensive classical", "4 × Studio Reformer (Revo) $18,800 + Studio Reformer with Tower & Mat $6,975 + Cadillac $5,030 + Ladder Barrel $2,195 + EXO Chair $1,255", "$34,255"],
        ["Clinical / rehab", "2 × Merrithew Rehab V2 Max Plus $16,398 + 1 × Ladder Barrel $2,195", "$18,593"],
      ],
      note: "Excludes shipping, tax, props, mirrors, flooring, sound, spare springs and ropes. Prices change; check each listing before you budget.",
    },
    {
      kind: "products",
      id: "reformers",
      eyebrow: "Reformers",
      heading: "Studio reformers to budget for",
      items: [
        item("studioRevo", {
          badge: "Best Group-Studio Reformer",
          body: "The solid-maple machine many studios standardise on, with up to 46 resistance settings from five Signature Springs and a deep range of add-ons. Buy a row of these and every station feels the same.",
          pros: ["Strata Rock Maple frame", "Up to 46 resistance settings", "Wide range of matching accessories"],
          cons: ["Made to order", "Does not fold"],
        }),
        item("studioXsr", {
          badge: "Studio Reformer with Sitting Box",
          pros: ["XSR footbar", "Sitting box and foot strap included"],
          cons: ["212 lb", "Made to order"],
        }),
        item("allegroStretch", {
          badge: "Best Aluminium Studio Reformer",
          pros: ["Longer, wider carriage suits tall clients", "Transport wheels make cleaning and reconfiguring easier", "Lower price per station than the Studio Reformer"],
          cons: ["111\" long: plan the room around it", "Made to order"],
        }),
        item("rialtoTower", {
          badge: "Best Value Reformer + Tower",
          pros: ["Tower with 29 spring-attachment points and mat", "Maple frame on aluminium legs", "$4,230"],
          cons: ["Made to order"],
        }),
      ],
    },
    {
      kind: "products",
      id: "towers",
      eyebrow: "Towers and combination units",
      heading: "Reformer and tower combinations",
      items: [
        item("studioTower", {
          badge: "Best Reformer + Tower",
          pros: ["Reformer, tower and twin conversion mats", "Sitting box included", "Stainless steel tower"],
          cons: ["78\" high: check your ceiling", "341 lb"],
        }),
        item("allegroStretchTower", {
          badge: "Aluminium Reformer + Tower",
          pros: ["Drop-in mat conversion", "22 spring-attachment points on the tower"],
          cons: ["251 lb", "Made to order"],
        }),
        item("v2MaxPlus", {
          badge: "Best for Clinics",
          pros: ["Raised frame for easier transfers", "Vertical Frame for tower-style work", "24\" carriage"],
          cons: ["$8,199", "Made to order"],
        }),
      ],
    },
    {
      kind: "products",
      id: "apparatus",
      eyebrow: "Beyond the reformer",
      heading: "Apparatus for a comprehensive studio",
      items: [
        item("cadillac", {
          badge: "Best Cadillac",
          pros: ["12 Signature Springs", "Push-through bar at 3 heights", "Made in the USA"],
          cons: ["87\" tall with canopy", "Made to order"],
        }),
        item("ladderBarrel", {
          badge: "Best Barrel",
          pros: ["Single-pedal ladder adjustment", "Spinal extension and lateral work nothing else replicates"],
          cons: ["Made to order"],
        }),
        item("exoChair", {
          badge: "Best First Extra Apparatus",
          pros: ["Lots of teaching in a small footprint", "Stackable, 55 lb", "$1,255"],
          cons: ["Single pedal (split-pedal version available)"],
        }),
      ],
    },
    {
      kind: "products",
      id: "accessories",
      eyebrow: "Accessories",
      heading: "Accessories to order with the machines",
      items: [
        item("sittingBoxLite", { badge: "Fits All BB Reformers" }),
        item("studioPlatformExtender", { badge: "For the Studio Reformer" }),
      ],
    },
    {
      kind: "callout",
      eyebrow: "Before you sign anything",
      heading: "Eight questions to settle first",
      dark: true,
      body: [
        "1. What is the ceiling height, and does it allow tower or trapeze work if you want it?",
        "2. Will the apparatus physically reach the room? Measure doorways, turns, lifts and stairs.",
        "3. What is the floor loading, and is the floor level and non-flexing?",
        "4. Does the permitted use and occupancy approval allow a fitness studio, and what accessibility rules apply?",
        "5. Is there a rent-free fit-out period, and does the lease term match how long your client base will take to build?",
        "6. Does the equipment warranty cover commercial use, and how fast are warranty repairs?",
        "7. Does your insurance cover apparatus teaching, every teacher, equipment at replacement value and business interruption?",
        "8. How many weeks of rent and payroll can you cover with no revenue at all?",
      ],
    },
  ],
  faqs: [
    { q: "How much does it cost to equip a Pilates studio?", a: "Using Amazon prices checked on " + PRICES_CHECKED + ": eight Balanced Body Studio Reformers cost $37,600 and eight Allegro Stretch reformers $29,680. A private studio with two Studio Reformers, a Studio Reformer with Tower and an EXO Chair comes to $17,630. That excludes shipping, tax, props, flooring and fit-out." },
    { q: "Do you need to be a certified instructor to open a Pilates studio?", a: "No. Owning a studio is a business, and many owners hire all their teaching. But without certification you cannot cover a class at short notice, judge a teacher in an interview or programme the timetable from experience. Owners who do not teach usually hire a lead instructor early." },
    { q: "How much space does a Pilates studio need?", a: "Work from the apparatus outward. The reformers on this page are about 90 to 111 inches long and 24 to 30 inches wide, and each needs working space at both ends and along one side for the teacher. Add reception, changing, a bathroom and storage. Ceiling height matters as much as floor area if you want a tower or trapeze." },
    { q: "What equipment do you need to open a Pilates studio?", a: "For a group reformer studio: a row of matching commercial reformers, spare springs and ropes, sitting boxes and props in class-sized multiples. A comprehensive studio adds a Cadillac or reformer with tower, a chair and a ladder barrel." },
    { q: "What insurance does a Pilates studio need?", a: "At minimum: professional liability for instruction, general liability for visitors, and property cover for the equipment at replacement value. If you employ teachers, employers' liability or workers' compensation is usually required. Confirm the policy covers apparatus work and every teacher under your roof." },
    { q: "Is a Pilates studio profitable?", a: "It can be, and the maths is transparent. Revenue is capped by stations, class slots and price, so profit turns on occupancy and on rent as a share of revenue. The two common failures are a lease too big for the client base you can build in year one, and introductory offers so cheap that clients never convert to full price." },
  ],
  related: [
    { title: "Pilates Studio Equipment Cost Breakdown", excerpt: "Itemised budgets for small, medium and large studios.", href: "/blog/pilates-studio-equipment-cost-breakdown", imageUrl: "/pictures/stitch-reformers-aerial-row.png", category: "Guide", readTime: "12 min read" },
    { title: "Commercial vs Home Pilates Reformer", excerpt: "What the commercial tier actually buys you.", href: "/blog/commercial-vs-home-pilates-reformer", imageUrl: "/pictures/stitch-reformer-spring-detail.png", category: "Equipment", readTime: "11 min read" },
    { title: "Best Pilates Reformer Under $5,000", excerpt: "Studio Reformer, Rialto, Allegro Stretch and SPX compared.", href: "/blog/best-pilates-reformer-under-5000", imageUrl: "/pictures/stitch-reformer-row-studio.png", category: "Equipment", readTime: "15 min read" },
    { title: "How to Become a Pilates Instructor", excerpt: "Certification routes, costs and what the job pays.", href: "/blog/how-to-become-a-pilates-instructor", imageUrl: "/pictures/stitch-studio-modern-row.png", category: "Guide", readTime: "13 min read" },
  ],
  ctaTitle: "Find a studio near you",
  ctaSubtitle: "Use our curated city guides to find the best Pilates studios worldwide.",
};

export default function Page() {
  return <EquipmentGuide {...GUIDE} />;
}
