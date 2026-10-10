import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import { jsonLdHtml } from "@/lib/schema";

const PAGE_URL = "https://pilatescollectiveclub.com/blog/reformer-pilates-essentials";
const HERO_IMAGE = "https://pilatescollectiveclub.com/pictures/stitch-reformer-sunlit-minimal.png";
const TITLE = "Reformer Pilates Essentials (2026): What to Bring & Wear";
const DESCRIPTION =
  "Reformer Pilates essentials for every stage of class: what to wear, what to bring, what to skip, plus home reformers from $295.99. Every pick verified.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: "The reformer class kit, organised by the class journey — before class, on the carriage, after class, and taking it home — with verified Best, Budget and Splurge picks.",
    type: "article",
    url: PAGE_URL,
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: "Reformer Pilates essentials — a sunlit reformer studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reformer Pilates Essentials (2026)",
    description: "What to wear, what to bring, what to skip — plus home reformers from $295.99.",
    images: [HERO_IMAGE],
  },
  keywords: [
    "reformer pilates essentials",
    "what do you need for reformer pilates",
    "what to bring to reformer pilates",
    "reformer class essentials",
    "reformer pilates must haves",
    "first reformer class what to wear",
    "what not to wear to reformer pilates",
    "reformer pilates grip socks",
    "reformer pilates kit list",
    "home pilates reformer vs classes",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

type Tier = "Best" | "Budget" | "Splurge" | "Best Toeless" | "Add-On";

interface Item {
  tier: Tier;
  name: string;
  price: string;
  description: string;
  url: string;
  /** Set for brand-direct links (not sold on Amazon). */
  directSite?: string;
}

interface Category {
  id: string;
  title: string;
  glanceLabel: string;
  intro: string;
  items: Item[];
  guideHref?: string;
  guideLabel?: string;
}

interface Stage {
  id: string;
  step: string;
  heading: string;
  intro: string;
  categories: Category[];
}

const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=pilatescollective-20`;

// ─── Individual verified products (prices verified 2026-09-27) ──────────────
const P = {
  sportsnewTote: { name: "Sportsnew Tote Yoga Mat Gym Bag 20L", price: "$29.99", url: amz("B0BHP38PNG") },
  bagsmartDuffle: { name: "BAGSMART Duffle Bag (Gym / Weekender)", price: "$29.99", url: amz("B0CSYNW3X3") },
  lululemonBelt: { name: "Lululemon Everywhere Belt Bag", price: "~$38", url: "https://shop.lululemon.com/", directSite: "lululemon.com" },
  owala: { name: "Owala FreeSip Stainless Steel Water Bottle, 24 oz", price: "$29.99", url: amz("B0BZYCJK89") },
  stanley: { name: "STANLEY Quencher H2.0 FlowState Tumbler, 40 oz (Peony)", price: "$45.00", url: amz("B0CRMP3RQT") },
  toesox: { name: "toesox Low Rise Grip Socks 2-Pack (Full Toe)", price: "$30.00", url: amz("B07QHNDHW3") },
  muezna: { name: "Muezna Pilates Grip Socks (6 Pairs)", price: "$7.99", url: amz("B0DQ53GSP5") },
  tavi: { name: "TAVI Stacy Slouch Pilates Socks, 2-Pack", price: "$40.00", url: amz("B0GFPGMWWS") },
  tucketts: { name: "Tucketts Toeless Grip Socks (Allegro)", price: "$18.99", url: amz("B072F6QR84") },
  taviGloves: { name: "TAVI Half Finger Gym Gloves (Full-Coverage Grips)", price: "$31.99", url: amz("B09GPVMF86") },
  gaiamGloves: { name: "Gaiam Grippy Yoga Gloves", price: "$7.65", url: amz("B001VROVEM") },
  varleyLeggings: { name: "Varley Freesoft Piped Full Leggings (Marina)", price: "$98.00", url: amz("B0FXN378H8") },
  crzLeggings: { name: "CRZ YOGA Butterluxe Leggings 25\"", price: "$32.00", url: amz("B09P1G2952") },
  alo: { name: "Alo Yoga Airbrush Legging", price: "~$128", url: "https://www.aloyoga.com/", directSite: "aloyoga.com" },
  varleyBra: { name: "Varley Freesoft Harley Bralette (Marina)", price: "$66.00", url: amz("B0FXN42JWR") },
  crzBra: { name: "CRZ YOGA Butterluxe U Back Sports Bra", price: "$28.00", url: amz("B09ZP9VXLJ") },
  kitsch: { name: "Kitsch 5\" Large Claw Clips (Black & Tort)", price: "$11.87", url: amz("B09GYPV213") },
  shandali: { name: "Shandali Stickyfiber Yoga Towel (Mat-Size)", price: "$19.99", url: amz("B011IU43WG") },
  grid: { name: "TriggerPoint GRID 2.0 Foam Roller", price: "$74.99", url: amz("B006GUC9KC") },
  waveRoller: { name: "Therabody WaveRoller (Vibrating)", price: "$179.99", url: amz("B08HW7GXSQ") },
  theragun: { name: "Therabody TheraGun Relief Massage Gun", price: "$119.99", url: amz("B0CNS894RH") },
  windfoot: { name: "WINDFOOT Foldable Pilates Reformer", price: "$295.99", url: amz("B0D31767J1") },
  aero: { name: "AeroPilates Reformer by Stamina", price: "$539.99", url: amz("B07G5J3SKS") },
  spx: { name: "Merrithew At Home SPX Reformer Package", price: "$3,349.00", url: amz("B004FGT0TM") },
  arc: { name: "Balanced Body Pilates Arc", price: "$189.99", url: amz("B002XVSNRG") },
};

const directNote = (site: string) => ` Not sold on Amazon — this links to ${site}.`;

const STAGES: Stage[] = [
  {
    id: "before-class",
    step: "Stage 1",
    heading: "Before class: pack the bag",
    intro:
      "Reformer studios run on tight turnarounds. Classes often start on the minute, and the carriage you are assigned may have just been vacated. Arriving with everything in one bag — socks already in the front pocket, bottle full — is the difference between a calm set-up and a rushed one.",
    categories: [
      {
        id: "bag",
        title: "A bag that separates clean from sweaty",
        glanceLabel: "Studio bag",
        intro:
          "You do not need a mat for most reformer classes, so a reformer bag is less about carrying bulk and more about organisation: a spot for shoes you take off at the door, a pocket for damp socks after class, and room for a layer.",
        items: [
          { tier: "Best", ...P.sportsnewTote, description: "A 20L tote with a separate shoe compartment and a wet pocket — exactly the two features a reformer bag needs. Shoes go in their own section at check-in, used grip socks go in the wet pocket afterwards, and nothing damp touches your post-class layer. It also has room for a mat on days you do a mat class instead." },
          { tier: "Budget", ...P.bagsmartDuffle, description: "If you commute to class from work or prefer a structured holdall, this BAGSMART duffle is the lowest-priced option in our pool at $29.99. It works as a gym bag and a weekender, so it earns its keep outside the studio too." },
          { tier: "Add-On", ...P.lululemonBelt, description: "Not a class bag, but a small crossbody for the essentials you want on you rather than in a cubby: phone, keys, card, a claw clip. Handy if your studio has open shelving instead of lockers." + directNote("lululemon.com") },
        ],
        guideHref: "/blog/best-pilates-bag",
        guideLabel: "Full guide: best Pilates bags",
      },
      {
        id: "bottle",
        title: "A bottle you can sip from between series",
        glanceLabel: "Water bottle",
        intro:
          "Reformer work is steady rather than frantic, but spring resistance and a warm studio add up. Choose a bottle that stands on the floor beside the carriage without tipping and opens with one hand.",
        items: [
          { tier: "Best", ...P.owala, description: "The Owala FreeSip lets you either sip through the built-in straw or tip it back from the spout, which is useful when you have ten seconds between footwork and the next series. At 24 oz it is compact enough to sit beside the carriage frame. Sold by Amazon.com." },
          { tier: "Splurge", ...P.stanley, description: "The 40 oz Quencher holds far more water, which suits back-to-back classes or a long day. The trade-off is size: check that your studio has floor space beside each reformer before bringing a tumbler this large. Sold by Amazon.com." },
        ],
        guideHref: "/blog/best-pilates-water-bottle",
        guideLabel: "Full guide: best Pilates water bottles",
      },
    ],
  },
  {
    id: "on-the-carriage",
    step: "Stage 2",
    heading: "On the carriage: grip, fit and coverage",
    intro:
      "This is where the kit genuinely matters. A reformer carriage moves under you, your feet press a metal footbar, and your legs go into straps overhead. The right socks keep you from sliding; the right clothes stay put, stay opaque and do not catch on anything.",
    categories: [
      {
        id: "grip-socks",
        title: "Grip socks for reformer Pilates",
        glanceLabel: "Grip socks",
        intro:
          "Most studios require grip socks on the reformer for hygiene and safety. Look for grip across the whole sole, including the heel: in footwork your heels press into the bar, and a sock with dots only under the ball of the foot can slip.",
        items: [
          { tier: "Best", ...P.toesox, description: "toesox is the original studio grip-sock brand, and this low-rise 2-pack is its full-toe design, sold on Amazon by The Active Footwear Store, the official distributor. Two pairs means one to wear and one in the wash." },
          { tier: "Budget", ...P.muezna, description: "Six pairs for $7.99 from seller UISIC. If you take three or more classes a week, a multi-pack means a fresh, dry pair every time. Ideal for a first month of classes before you know which style you prefer." },
          { tier: "Splurge", ...P.tavi, description: "TAVI's Stacy is a slouch-style Pilates sock, sold as a 2-pack by The Active Footwear Store. You are paying for the look more than extra function — but if you like a slouch sock over the ankle, this is the one." },
          { tier: "Best Toeless", ...P.tucketts, description: "Tucketts builds specifically for barre and Pilates. The Allegro is a toeless cut, which many people with wide feet or painted toenails prefer." },
        ],
        guideHref: "/blog/best-pilates-grip-socks",
        guideLabel: "Full guide: best Pilates grip socks",
      },
      {
        id: "gloves",
        title: "Grip gloves for straps and planks",
        glanceLabel: "Grip gloves",
        intro:
          "Optional, but worth it if your hands sweat on the straps, or if your class includes long planks on the footbar or the carriage. Many teachers also like them for hygiene on shared handles.",
        items: [
          { tier: "Best", ...P.taviGloves, description: "Half-finger gloves with full-coverage grips across the palm, from TAVI, sold by The Active Footwear Store. Full palm coverage matters more than finger coverage on a reformer, where you mostly press into flat surfaces or hold loops." },
          { tier: "Budget", ...P.gaiamGloves, description: "At $7.65, a low-risk way to find out whether you like training in gloves at all. Gaiam is a long-established yoga and Pilates accessories brand." },
        ],
        guideHref: "/blog/best-pilates-gloves",
        guideLabel: "Full guide: best Pilates gloves",
      },
      {
        id: "leggings",
        title: "Leggings that stay opaque in straps and footwork",
        glanceLabel: "Leggings",
        intro:
          "Reformer classes put your legs in positions mat classes rarely do: feet in straps overhead, deep frog, wide second on the footbar, with a teacher and a mirror nearby. Choose full-length or 7/8 leggings with a high waist and no zips or hardware, then do a deep squat in front of a mirror at home before your first class. That test tells you more about opacity than any product page.",
        items: [
          { tier: "Best", ...P.varleyLeggings, description: "Varley is a studio-favourite label, and the Freesoft Piped leggings are a full-length, clean design with no hardware to catch on the carriage. This listing (Marina colourway) is sold via Shopbop, an Amazon company. It is the pair to buy if you are committing to reformer as a habit." },
          { tier: "Budget", ...P.crzLeggings, description: "CRZ YOGA's Butterluxe is the pick for anyone starting out, at a third of the Varley price. The 25\" inseam sits around the ankle on many heights, which keeps fabric clear of the footbar and springs." },
          { tier: "Splurge", ...P.alo, description: "Alo's Airbrush is the legging many studio regulars already own, and it is a smooth, high-waisted design with no hardware." + directNote("aloyoga.com") },
        ],
        guideHref: "/blog/best-leggings-for-reformer-pilates",
        guideLabel: "Full guide: best leggings for reformer Pilates",
      },
      {
        id: "bra",
        title: "A supportive sports bra with no hardware",
        glanceLabel: "Sports bra",
        intro:
          "Reformer is low impact, so you rarely need maximum support. What matters more is that nothing digs in when you lie supine on the carriage: no clasps at the back, no chunky adjusters, and straps that stay flat against the headrest and shoulder rests.",
        items: [
          { tier: "Best", ...P.varleyBra, description: "A soft bralette from Varley's Freesoft range, and the same Marina colourway as the leggings above if you want a matching set. Sold via Shopbop, an Amazon company." },
          { tier: "Budget", ...P.crzBra, description: "CRZ YOGA's Butterluxe U Back bra pairs naturally with the Butterluxe leggings, and the U-back cut keeps straps out of the way of the shoulder rests." },
        ],
        guideHref: "/blog/best-pilates-sports-bra",
        guideLabel: "Full guide: best Pilates sports bras",
      },
    ],
  },
  {
    id: "after-class",
    step: "Stage 3",
    heading: "After class: wipe down, cool down, recover",
    intro:
      "The last five minutes of a reformer class are shared work: you reset springs, wipe the carriage and clear the space for the next person. Then comes the part most people skip, which is looking after the muscles you just worked.",
    categories: [
      {
        id: "towel",
        title: "A towel for mat sections and wipe-downs",
        glanceLabel: "Towel",
        intro:
          "Many reformer classes include a mat section, and some studios let you lay a towel over the carriage. A silicone-backed towel stays put rather than bunching when you move.",
        items: [
          { tier: "Best", ...P.shandali, description: "A mat-size Stickyfiber towel with a silicone-dotted back so it grips whatever it is laid on. Use it over a studio mat, over the carriage where the studio permits, or at home." },
        ],
        guideHref: "/blog/best-yoga-mat-towel-for-pilates",
        guideLabel: "Full guide: best mat towels for Pilates",
      },
      {
        id: "foam-roller",
        title: "A foam roller for the day after",
        glanceLabel: "Foam roller",
        intro:
          "Reformer footwork, lunges and feet-in-straps series load the quads, glutes and inner thighs more than people expect. Ten minutes of rolling at home is a cheap way to feel better the next day.",
        items: [
          { tier: "Best", ...P.grid, description: "The GRID 2.0 is a firm, textured roller from an established recovery brand. Sold by Amazon.com. Useful for quads, IT band area and upper back — and for mat Pilates exercises that use a roller." },
          { tier: "Splurge", ...P.waveRoller, description: "Therabody's WaveRoller adds vibration to the roller format. If you already use a roller and want more from it, this is the step up; if you have never rolled before, start with the GRID." },
        ],
        guideHref: "/blog/best-pilates-foam-roller",
        guideLabel: "Full guide: best Pilates foam rollers",
      },
      {
        id: "massage-gun",
        title: "A massage gun for targeted work",
        glanceLabel: "Massage gun",
        intro:
          "A massage gun reaches places a roller cannot, like calves after a heavy footwork class or the front of the hips after a lot of leg springs.",
        items: [
          { tier: "Best", ...P.theragun, description: "The TheraGun Relief is Therabody's entry model, sold by TheraGun on Amazon. A good choice if you want percussive therapy from a recognised brand without paying for pro-level features." },
        ],
        guideHref: "/blog/best-massage-gun-for-pilates",
        guideLabel: "Full guide: best massage guns for Pilates",
      },
    ],
  },
];

const REFORMERS: Item[] = [
  { tier: "Budget", ...P.windfoot, description: "A foldable spring reformer at under $300. WINDFOOT is a newer brand with less of a track record than the other two options here, so treat it as a way to test whether you actually use a home reformer before spending more. Springs rather than cords mean resistance closer to what you feel in studio." },
  { tier: "Best", ...P.aero, description: "AeroPilates by Stamina is an established home reformer brand with a long history on the market. It uses cord resistance rather than springs, which feels different from a studio machine, but it folds for storage and is the most proven option under $1,000 in our pool." },
  { tier: "Splurge", ...P.spx, description: "Merrithew is the company behind STOTT PILATES, and the SPX line is its home version of a studio machine. Sold by Amazon.com. This is the option for someone replacing a large share of their studio classes, not topping them up." },
];

const ARC: Item = {
  tier: "Add-On",
  ...P.arc,
  description: "Balanced Body's Pilates Arc is a step barrel / spine corrector: a small curved prop used for spinal extension, side-lying work and core series. It is not a reformer, but it gives you a lot of reformer-adjacent spine work for a fraction of the price, and it stores under a sofa.",
};

const KITSCH: Item = {
  tier: "Add-On",
  ...P.kitsch,
  description: "A large claw clip holds long hair low at the nape, so nothing presses into the reformer headrest when you lie on the carriage.",
};

const ALL_ITEMS: Item[] = [...STAGES.flatMap((s) => s.categories.flatMap((c) => c.items)), KITSCH, ...REFORMERS, ARC];

const toNumber = (price: string) => {
  const n = price.replace(/[^0-9.]/g, "");
  return n === "" ? "0" : n;
};
const money = (n: number) => `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

// ─── Kit totals (sum of listed verified prices) ─────────────────────────────
const BUDGET_KIT = [
  { label: "Bag", ...P.bagsmartDuffle },
  { label: "Bottle", ...P.owala },
  { label: "Grip socks", ...P.muezna },
  { label: "Gloves", ...P.gaiamGloves },
  { label: "Leggings", ...P.crzLeggings },
  { label: "Sports bra", ...P.crzBra },
  { label: "Claw clip", ...P.kitsch },
  { label: "Towel", ...P.shandali },
];
const BEST_KIT = [
  { label: "Bag", ...P.sportsnewTote },
  { label: "Bottle", ...P.owala },
  { label: "Grip socks", ...P.toesox },
  { label: "Gloves", ...P.taviGloves },
  { label: "Leggings", ...P.varleyLeggings },
  { label: "Sports bra", ...P.varleyBra },
  { label: "Claw clip", ...P.kitsch },
  { label: "Towel", ...P.shandali },
  { label: "Foam roller", ...P.grid },
  { label: "Massage gun", ...P.theragun },
];
const sumKit = (kit: { price: string }[]) => kit.reduce((acc, k) => acc + Math.round(Number(toNumber(k.price)) * 100), 0) / 100;
const BUDGET_TOTAL = sumKit(BUDGET_KIT);
const BEST_TOTAL = sumKit(BEST_KIT);

const classesAt = (price: string, perClass: number) => Math.round(Number(toNumber(price)) / perClass);

const FAQS = [
  {
    q: "What do you need for reformer Pilates?",
    a: "For a studio reformer class, the only true essentials are grip socks (most studios require them), fitted clothing without zips or loose fabric, and a water bottle. Everything else — grip gloves, a studio bag, a towel, recovery tools — makes classes more comfortable but is optional. A budget kit covering all of it comes to about " + money(BUDGET_TOTAL) + " at the prices listed on this page.",
  },
  {
    q: "What should I wear to my first reformer Pilates class?",
    a: "Full-length or 7/8 leggings with a high waist, a supportive sports bra or fitted top with no back clasps, and grip socks. Avoid loose shorts, baggy T-shirts, zips, buckles and jewellery: loose fabric can catch in springs and straps, and hardware is uncomfortable when you lie on the carriage. Tie long hair back low or with a claw clip so it doesn't press into the headrest.",
  },
  {
    q: "Do you need grip socks for reformer Pilates?",
    a: "Almost always, yes. Most reformer studios require grip socks for hygiene and safety, and some sell them at the front desk at a markup. Look for grip across the whole sole, including the heel, because your heels press into the footbar during footwork.",
  },
  {
    q: "What should you not wear to reformer Pilates?",
    a: "Skip loose or wide-leg shorts, baggy tops that ride up when you are upside down, anything with zips, buckles or metal hardware, big rings, bracelets and dangling necklaces, and regular socks or bare feet if your studio requires grip socks. High ponytails and hair clips on the back of the head also get in the way when you lie supine.",
  },
  {
    q: "What should I bring to a reformer Pilates class?",
    a: "Grip socks, a water bottle, a hair tie or claw clip, and a bag that keeps shoes and damp socks away from clean clothes. A small towel is useful if your class includes a mat section. You don't normally need to bring a mat or any equipment — the studio provides the reformer, springs and props.",
  },
  {
    q: "Is a home reformer cheaper than reformer classes?",
    a: "It can be, if you use it. Studio reformer classes in major US cities commonly cost $30–$40 or more each. At those prices, the WINDFOOT reformer ($295.99) costs about the same as 7–10 classes, the AeroPilates reformer ($539.99) about 13–18 classes, and the Merrithew At Home SPX package ($3,349.00) about 84–112 classes. A home machine works best alongside some instruction rather than as a total replacement for a teacher.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${PAGE_URL}/#article`,
      "headline": TITLE,
      "description": DESCRIPTION,
      "image": {
        "@type": "ImageObject",
        "url": HERO_IMAGE,
        "width": 1200,
        "height": 630,
      },
      "author": {
        "@type": "Organization",
        "@id": "https://pilatescollectiveclub.com/#organization",
        "name": "Pilates Collective Club",
        "url": "https://pilatescollectiveclub.com",
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://pilatescollectiveclub.com/#organization",
        "name": "Pilates Collective Club",
        "logo": {
          "@type": "ImageObject",
          "url": "https://pilatescollectiveclub.com/pictures/pcc-logo.png",
        },
      },
      "datePublished": "2026-09-27",
      "dateModified": "2026-09-27",
      "url": PAGE_URL,
      "mainEntityOfPage": PAGE_URL,
      "articleSection": "Equipment",
      "inLanguage": "en-US",
    },
    {
      "@type": "ItemList",
      "name": "Reformer Pilates Essentials (2026)",
      "numberOfItems": ALL_ITEMS.length,
      "itemListElement": ALL_ITEMS.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "description": p.description,
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": toNumber(p.price),
            ...(p.directSite ? {} : { "availability": "https://schema.org/InStock" }),
            "url": p.url,
          },
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Reformer Pilates Essentials", "item": PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": FAQS.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
    },
  ],
};

// ─── Shared styles ─────────────────────────────────────────────────────────
const sans = "'Montserrat', sans-serif";
const serif = "'Playfair Display', serif";
const bodyText = { color: "#53433e", fontFamily: sans };
const linkStyle = { color: "#8b4a31", textDecoration: "underline" };
const buttonStyle = {
  display: "block",
  fontFamily: sans,
  fontSize: "9px",
  fontWeight: 600,
  letterSpacing: "0.15em",
  textTransform: "uppercase" as const,
  color: "#ffffff",
  textDecoration: "none",
  backgroundColor: "#0a0a0a",
  padding: "10px 14px",
  whiteSpace: "nowrap" as const,
  flexShrink: 0,
};

function TierChip({ tier }: { tier: Tier }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "#f6f3f2", color: "#8b4a31", fontFamily: sans }}>{tier}</span>
    </div>
  );
}

function ItemCard({ item }: { item: Item }) {
  return (
    <div>
      <TierChip tier={item.tier} />
      <ProductCard name={item.name} description={item.description} price={item.price} affiliateUrl={item.url} />
    </div>
  );
}

function GuideLink({ href, label }: { href: string; label: string }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.15em] mt-2" style={{ fontFamily: sans }}>
      <Link href={href} style={{ color: "#8b4a31", textDecoration: "none" }}>{label} →</Link>
    </p>
  );
}

export default function ReformerPilatesEssentialsPage() {
  const glanceRows = STAGES.flatMap((s) => s.categories.map((c) => ({ stage: s.heading.split(":")[0], label: c.glanceLabel, item: c.items[0] })));
  glanceRows.push({ stage: "Taking it home", label: "Home reformer", item: REFORMERS[1] });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: sans }}>Equipment Guide</span>
              <span style={{ color: "#d9c2ba" }}>·</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: sans }}>Reformer</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: serif }}>
              Reformer Pilates Essentials<br /><span style={{ color: "#8b4a31" }}>(2026): What to Bring &amp; Wear</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: sans }}>Updated September 2026 · 12 min read</p>
            <p className="text-xs mb-8" style={{ color: "#86736d", fontFamily: sans }}>
              *Most links on this page go to Amazon, and we earn a small commission on qualifying purchases. Two picks (Alo Yoga and Lululemon) are not sold on Amazon and link directly to the brand&apos;s own website; those are marked in the product description. Prices were verified on 27 September 2026 and can change.
            </p>
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#d9c2ba" }} />
            <p className="text-lg leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: sans, fontWeight: 300 }}>
              A reformer class asks more of your kit than a mat class does. The carriage moves, your feet press a metal footbar, your legs go up into straps, and you spend half the class lying on your back. The wrong socks slip, loose shorts catch, and a back clasp digs into your spine on the headrest.
            </p>
            <p className="text-base leading-relaxed mb-6" style={bodyText}>
              So instead of another long list, this guide follows the order you actually use things: <strong>before class</strong> (the bag and bottle), <strong>on the carriage</strong> (socks, gloves, leggings, bra), <strong>after class</strong> (towel and recovery), and finally <strong>taking it home</strong> with a reformer of your own. Each category has a Best pick, and where it makes sense a Budget and a Splurge option. Every Amazon listing and price was checked as live and in stock on the day we published.
            </p>
            <p className="text-sm leading-relaxed" style={bodyText}>
              New to the machine? Start with our{" "}
              <Link href="/blog/beginners-guide-to-reformer-pilates" style={linkStyle}>beginner&apos;s guide to reformer Pilates</Link>. Want every category, not just reformer? See the full{" "}
              <Link href="/blog/pilates-essentials" style={linkStyle}>Pilates essentials list</Link>, or the aesthetic edit in{" "}
              <Link href="/blog/pilates-princess-essentials" style={linkStyle}>Pilates princess essentials</Link>.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-reformer-sunlit-minimal.png" alt="Reformer Pilates essentials — a sunlit minimal studio with a Pilates reformer ready for class" fill className="object-cover" style={{ filter: "brightness(0.85)" }} priority />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            {/* At a glance */}
            <div className="mb-16 mt-4 overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
              <div className="px-6 py-4" style={{ backgroundColor: "#f6f3f2" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: sans }}>At a Glance — the complete reformer kit</p>
              </div>
              {glanceRows.map((row, i) => (
                <div key={row.label} className="flex items-center gap-3 sm:gap-4 px-6 py-4" style={{ borderTop: i === 0 ? "none" : "1px solid rgba(217,194,186,0.25)", backgroundColor: "#ffffff" }}>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs uppercase tracking-[0.15em] mb-1" style={{ color: "#8b4a31", fontFamily: sans }}>{row.label}</p>
                    <p className="text-sm font-semibold leading-tight" style={{ color: "#1b1c1c", fontFamily: sans }}>{row.item.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#86736d", fontFamily: sans }}>{row.stage} · {row.item.tier} pick</p>
                  </div>
                  <span className="text-xs font-semibold hidden md:block shrink-0 mr-3" style={{ color: "#86736d", fontFamily: sans }}>{row.item.price}</span>
                  <a href={row.item.url} target="_blank" rel="noopener noreferrer nofollow" style={buttonStyle}>Shop →</a>
                </div>
              ))}
            </div>

            {/* The short answer */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: serif }}>What do you actually need for reformer Pilates?</h2>
              <p className="text-sm leading-relaxed mb-4" style={bodyText}>
                Strictly, three things: grip socks, fitted clothes with no hardware, and water. The studio supplies the reformer, springs, straps, boxes and any small props. Everything else on this page earns its place by making classes more comfortable, more hygienic or easier to recover from — but none of it is a ticket to entry.
              </p>
              <p className="text-sm leading-relaxed" style={bodyText}>
                If you are booking a first class this week, buy socks first, check your existing leggings for opacity, and add the rest once you know you are going back. That is the order the tiers below are designed around.
              </p>
            </div>

            {STAGES.map((stage) => (
              <div key={stage.id} id={stage.id} className="mb-20">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#8b4a31", fontFamily: sans }}>{stage.step} of 4</p>
                <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: serif }}>{stage.heading}</h2>
                <p className="text-sm leading-relaxed mb-12" style={bodyText}>{stage.intro}</p>

                {stage.id === "on-the-carriage" && (
                  <div id="etiquette" className="mb-14 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
                    <h3 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: serif }}>Reformer etiquette &amp; what not to wear</h3>
                    <p className="text-sm leading-relaxed mb-5" style={bodyText}>
                      Most of these are unwritten rules. Teachers notice them, and so does the person on the next carriage.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Skip loose or wide-leg shorts. When your feet go into the straps, loose hems gape — and loose fabric can catch in springs or rope.",
                        "Leave zips, buckles and metal trims at home. They scratch upholstery and dig into your back when you lie on the carriage.",
                        "Take off rings, bracelets and long necklaces. Rings get pinched on straps and handles, and necklaces swing into your face in inversions.",
                        "Avoid baggy T-shirts. They slide up to your chin in anything with your hips lifted. A fitted top or tucked-in tank works better.",
                        "Tie long hair low or clip it. A high ponytail presses into the headrest when you lie down.",
                        "Arrive five minutes early, and tell the teacher about injuries or pregnancy before class starts, not mid-series.",
                        "Never step on or off a carriage without checking the springs. Ask if you are unsure how to reset them.",
                        "Wipe down the carriage, shoulder rests, footbar and straps at the end of class with the studio's spray, and leave springs as the teacher asks.",
                      ].map((tip, i) => (
                        <li key={tip} className="flex gap-3 text-sm" style={bodyText}>
                          <span className="font-semibold" style={{ color: "#8b4a31" }}>{i + 1}.</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm leading-relaxed mt-5" style={bodyText}>
                      For hair, a large claw clip at the nape is the reformer regulars&apos; trick: it holds everything without a bump at the back of your head. The{" "}
                      <a href={P.kitsch.url} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>Kitsch 5&quot; Large Claw Clips (Black &amp; Tort, $11.87)</a>{" "}
                      are big enough for thick hair. More on clothing in our guide to{" "}
                      <Link href="/blog/what-to-wear-to-pilates" style={linkStyle}>what to wear to Pilates</Link>.
                    </p>
                  </div>
                )}

                {stage.categories.map((cat) => (
                  <div key={cat.id} id={cat.id} className="mb-14">
                    <h3 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: serif }}>{cat.title}</h3>
                    <p className="text-sm leading-relaxed mb-8" style={bodyText}>{cat.intro}</p>
                    <div className="space-y-10">
                      {cat.items.map((item) => (
                        <ItemCard key={item.name} item={item} />
                      ))}
                    </div>
                    {cat.guideHref && cat.guideLabel && <GuideLink href={cat.guideHref} label={cat.guideLabel} />}
                  </div>
                ))}
              </div>
            ))}

            {/* Kit cost box */}
            <div id="kit-cost" className="mb-20 rounded-2xl p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.35)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: serif }}>What the full reformer kit costs</h2>
              <p className="text-sm leading-relaxed mb-6" style={bodyText}>
                Honest totals, added up from the prices listed on this page. The budget kit covers everything you need to walk into class; the best kit adds our top pick in every category plus recovery tools. Neither includes a home reformer — that comes next.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Budget class kit", kit: BUDGET_KIT, total: BUDGET_TOTAL },
                  { title: "Best-of-everything kit", kit: BEST_KIT, total: BEST_TOTAL },
                ].map((box) => (
                  <div key={box.title} className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-sm font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: serif }}>{box.title}</p>
                    <ul className="space-y-1.5 mb-4">
                      {box.kit.map((k) => (
                        <li key={k.label} className="flex justify-between gap-3 text-xs" style={bodyText}>
                          <span>{k.label} — {k.name}</span>
                          <span className="shrink-0">{k.price}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-between pt-3 text-sm font-semibold" style={{ borderTop: "1px solid rgba(217,194,186,0.4)", color: "#8b4a31", fontFamily: sans }}>
                      <span>Total</span>
                      <span>{money(box.total)}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm leading-relaxed mt-6" style={bodyText}>
                For context: studio reformer classes in major US cities commonly cost $30–$40 or more each, so the budget kit costs roughly what four or five classes do. Most of it — the bag, bottle, clip and towel — lasts for years. Grip socks are the one true consumable; plan to replace them once the grip wears smooth.
              </p>
            </div>

            {/* The big upgrade */}
            <div id="taking-it-home" className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#8b4a31", fontFamily: sans }}>Stage 4 of 4 · The big upgrade</p>
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "#1b1c1c", fontFamily: serif }}>Taking it home: is a home reformer worth it?</h2>
              <p className="text-sm leading-relaxed mb-4" style={bodyText}>
                Once you are taking two or three reformer classes a week, the maths starts to look different. At $30–$40 a class, two classes a week is roughly $60–$80 a week, or somewhere around $3,000–$4,000 a year. A home reformer is a one-off cost, and every session you do on it instead of in a studio moves you closer to having paid it off.
              </p>
              <p className="text-sm leading-relaxed mb-8" style={bodyText}>
                That is the honest case for it — and the honest caveats matter just as much. A home machine does not correct your form the way a good teacher does, it needs floor space (check our{" "}
                <Link href="/blog/pilates-reformer-dimensions-and-space-requirements" style={linkStyle}>reformer dimensions and space guide</Link>{" "}
                first), and the savings only exist if you actually use it. Most people get the best result from a hybrid: a home reformer for most sessions, plus a studio class or private session every week or two to keep technique sharp.
              </p>

              {/* Break-even table */}
              <div className="mb-12 overflow-hidden" style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
                <div className="px-6 py-4" style={{ backgroundColor: "#f6f3f2" }}>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: sans }}>Cost vs classes — roughly how many studio classes each one equals</p>
                </div>
                <div className="grid grid-cols-4 gap-3 px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em]" style={{ backgroundColor: "#ffffff", color: "#86736d", fontFamily: sans }}>
                  <span className="col-span-2">Reformer</span>
                  <span>At $30/class</span>
                  <span>At $40/class</span>
                </div>
                {[...REFORMERS, ARC].map((r) => (
                  <div key={r.name} className="grid grid-cols-4 gap-3 px-6 py-4 text-sm" style={{ borderTop: "1px solid rgba(217,194,186,0.25)", backgroundColor: "#ffffff", fontFamily: sans }}>
                    <span className="col-span-2" style={{ color: "#1b1c1c" }}>
                      <span className="font-semibold">{r.name}</span>
                      <span className="block text-xs" style={{ color: "#86736d" }}>{r.price}</span>
                    </span>
                    <span style={{ color: "#53433e" }}>≈ {classesAt(r.price, 30)} classes</span>
                    <span style={{ color: "#53433e" }}>≈ {classesAt(r.price, 40)} classes</span>
                  </div>
                ))}
              </div>

              <div className="space-y-10">
                {REFORMERS.map((item) => (
                  <ItemCard key={item.name} item={item} />
                ))}
              </div>
              <p className="text-sm leading-relaxed mt-6 mb-2" style={bodyText}>
                Which tier? If you are unsure you will use a machine at home, the WINDFOOT is the lowest-risk way to find out. If you want a brand with years of home users behind it, choose the AeroPilates and accept that cords feel different from springs. The Merrithew SPX only makes sense if you are ready to move most of your practice home — at that point, it is the one that feels most like the studio.
              </p>
              <GuideLink href="/blog/best-pilates-reformer-under-500" label="Full guide: best Pilates reformers under $500" />
              <GuideLink href="/blog/best-pilates-reformer-for-beginners" label="Full guide: best reformers for beginners" />
              <GuideLink href="/blog/merrithew-pilates" label="Full guide: Merrithew home reformers" />

              <div className="mt-14">
                <h3 className="text-2xl font-semibold mb-4" style={{ color: "#1b1c1c", fontFamily: serif }}>Not ready for a reformer? Start with the Arc</h3>
                <p className="text-sm leading-relaxed mb-8" style={bodyText}>
                  If a full machine is too much space or money right now, a spine corrector covers a surprising amount of the spinal extension and core work you do on reformer, and pairs well with a mat at home.
                </p>
                <ItemCard item={ARC} />
                <GuideLink href="/blog/best-pilates-barrel" label="Full guide: best Pilates barrels" />
              </div>

              <p className="text-sm leading-relaxed mt-10" style={bodyText}>
                Still deciding whether classes are worth the spend at all? Read{" "}
                <Link href="/blog/is-reformer-pilates-worth-it" style={linkStyle}>is reformer Pilates worth it</Link>{" "}
                and our breakdown of{" "}
                <Link href="/blog/how-much-does-a-pilates-reformer-cost" style={linkStyle}>how much a Pilates reformer costs</Link>.
              </p>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: serif }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {FAQS.map((item) => (
                  <div key={item.q} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
                    <p className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: serif }}>{item.q}</p>
                    <p className="text-sm leading-relaxed" style={bodyText}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Further reading */}
            <div>
              <h2 className="text-2xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: serif }}>Further reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="Best Pilates Reformer Under $500" excerpt="Budget home reformers compared honestly — what you get, and what you give up, below $500." href="/blog/best-pilates-reformer-under-500" category="Equipment" readTime="10 min read" date="September 2026" />
                <ArticleCard title="Best Pilates Reformer for Beginners" excerpt="The home reformers that suit a first machine, from folding cord models to studio-brand springs." href="/blog/best-pilates-reformer-for-beginners" category="Equipment" readTime="10 min read" date="September 2026" />
                <ArticleCard title="Best Pilates Grip Socks" excerpt="toesox, TAVI, Tucketts and budget multi-packs — verified and compared for reformer class." href="/blog/best-pilates-grip-socks" category="Accessories" readTime="6 min read" date="September 2026" />
                <ArticleCard title="Pilates Essentials" excerpt="The master list: the best pick in every Pilates category, from clothing to home equipment." href="/blog/pilates-essentials" category="Guide" readTime="12 min read" date="September 2026" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a reformer studio near you" subtitle="Use our curated city guides to find the best Pilates studios worldwide." showSearch searchPlaceholder="Ask: best reformer studios in London…" />
      </main>
      <Footer />
    </>
  );
}
