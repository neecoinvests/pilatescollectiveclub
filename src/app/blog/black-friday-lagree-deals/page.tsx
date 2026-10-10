import type { Metadata } from "next";
import DealsGuide, { type DealsGuideProps } from "@/components/DealsGuide";

const PAGE_URL = "https://pilatescollectiveclub.com/blog/black-friday-lagree-deals";
const HERO_IMAGE = "https://pilatescollectiveclub.com/pictures/stitch-reformer-spring-detail.png";

export const metadata: Metadata = {
  title: "Lagree Black Friday Deals 2026: Micro & Setup",
  description: "Lagree Black Friday 2026: the Lagree Micro, its rear platform, handlebars and cables, and the home-setup gear around it — with today's Amazon price to beat.",
  keywords: ["lagree black friday", "lagree micro black friday", "lagree micro sale", "lagree fitness black friday", "megaformer black friday", "lagree deals 2026", "lagree cyber monday", "lagree at home deal"],
  openGraph: {
    title: "Lagree Black Friday Deals 2026: The Micro & Home Setup",
    description: "Lagree Black Friday 2026: the Lagree Micro, its rear platform, handlebars and cables, and the home-setup gear around it — with today's Amazon price to beat.",
    type: "article",
    url: PAGE_URL,
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: "Springs on a carriage machine — Lagree Micro Black Friday deals" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lagree Black Friday Deals 2026: Micro & Setup",
    description: "Lagree Black Friday 2026: the Lagree Micro, its rear platform, handlebars and cables, and the home-setup gear around it — with today's Amazon price to beat.",
    images: [HERO_IMAGE],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

// Prices are filled from live Amazon listings by the Black Friday generator.
const GUIDE: DealsGuideProps = {
  "slug": "black-friday-lagree-deals",
  "title": "Lagree Black Friday Deals 2026: The Micro & Home Setup",
  "description": "Lagree Black Friday 2026: the Lagree Micro, its rear platform, handlebars and cables, and the home-setup gear around it — with today's Amazon price to beat.",
  "breadcrumb": "Lagree Black Friday Deals",
  "eyebrow": "Lagree",
  "h1": "Lagree Black Friday Deals",
  "h1Accent": "2026: The Micro & Home Setup",
  "readTime": "6 min read",
  "heroImage": "/pictures/stitch-reformer-spring-detail.png",
  "heroAlt": "Springs on a carriage machine — Lagree Micro Black Friday deals",
  "intro": "The Micro is Lagree Fitness's own home machine, and it is sold by Lagree Fitness on Amazon along with its three add-ons. Whether the brand runs a Black Friday price is up to Lagree Fitness — so here is exactly what each piece costs today, plus the home-setup gear around it that is far more likely to be discounted.",
  "sections": [
    {
      "id": "micro",
      "title": "The Micro and its add-ons",
      "intro": "All four are sold by Lagree Fitness on Amazon. The rear platform is the add-on most owners buy first.",
      "items": [
        {
          "asin": "B0BBT7YV93",
          "name": "The Micro by Lagree Fitness",
          "badge": "The machine",
          "note": "72\" x 20\" x 6\", 60 lb, four springs, fits users up to 6'8\". Stores under a bed or against a wall.",
          "price": "$990.00"
        },
        {
          "asin": "B0BKN2LSWD",
          "name": "Lagree Fitness Micro Rear Platform",
          "badge": "Add-on #1",
          "note": "Unlocks the express lunge, 5th lunge, super crunch and giant wheelbarrow. With it, the Micro is 81.5\" long.",
          "price": "$290.00"
        },
        {
          "asin": "B0BKMP89SH",
          "name": "Lagree Fitness Micro Handlebars (Pair)",
          "badge": "Add-on #2",
          "note": "For Catfish, Twister, Spoon and Runner's Lunge. Front or back — the back needs the rear platform.",
          "price": "$190.00"
        },
        {
          "asin": "B0BYMD4S91",
          "name": "Lagree Fitness Micro Pulley Cables",
          "badge": "Add-on #3",
          "note": "The Micro's cable attachment. Stock is limited.",
          "price": "$230.00"
        }
      ]
    },
    {
      "id": "setup",
      "title": "The home setup",
      "intro": "Not Lagree-branded — the everyday gear that makes home sessions safer and quieter, and the most likely to drop in price.",
      "items": [
        {
          "asin": "B0041GQH3S",
          "name": "Marcy Equipment Mat & Floor Protector (78\" x 36\")",
          "badge": "Floor mat — Micro only",
          "note": "Covers the Micro's 72\" length. Not long enough with the rear platform.",
          "price": "$34.71"
        },
        {
          "asin": "B005SUKZJ8",
          "name": "Rubber-Cal Rubber Flooring Roll (4 x 7 ft)",
          "badge": "Floor mat — with platform",
          "note": "84\" long — enough for the Micro with its rear platform.",
          "price": "$49.50"
        },
        {
          "asin": "B06WV6XVV9",
          "name": "Impulse Yoga Knee Pad Cushion (1\")",
          "badge": "Kneeling",
          "note": "One inch of foam for kneeling moves on the carriage.",
          "price": "$19.99"
        },
        {
          "asin": "B00CO8HO6O",
          "name": "Gymboss Interval Timer",
          "badge": "Timing",
          "note": "Lagree is timed, not counted. Runs one or two intervals with chime and vibration alerts.",
          "price": "$20.95"
        }
      ]
    }
  ],
  "watchFor": [
    {
      "h": "Buy from Lagree Fitness.",
      "b": "The Micro and its add-ons are sold by Lagree Fitness on Amazon. Be wary of the same items from unknown third-party sellers."
    },
    {
      "h": "Check the 30-day price, not the strikethrough.",
      "b": "Amazon's 'List' or 'Was' price can be set by the seller. Compare the Black Friday price with the price we recorded here in October — that is the real saving."
    },
    {
      "h": "Price the full setup.",
      "b": "A discount on the Micro alone matters less if you also need the rear platform. Add up the setup you will actually use."
    }
  ],
  "faqs": [
    {
      "q": "Does the Lagree Micro go on sale for Black Friday?",
      "a": "That depends on Lagree Fitness, which sells the Micro on Amazon. We have recorded today's price so you can see straight away if it drops."
    },
    {
      "q": "Can you buy a Megaformer on Black Friday?",
      "a": "The Megaformer is sold directly by Lagree Fitness, mainly to studios, with pricing on request. It is not sold on Amazon. For home training, Lagree Fitness makes the Micro."
    },
    {
      "q": "Which Micro add-on should I buy first?",
      "a": "The rear platform. It adds the most moves and is required before handlebars can go on the back of the Micro."
    }
  ],
  "guides": [
    {
      "label": "Lagree Micro review",
      "href": "/blog/lagree-micro-review"
    },
    {
      "label": "Micro vs Megaformer",
      "href": "/blog/lagree-micro-vs-megaformer"
    },
    {
      "label": "Lagree Fitness brand guide",
      "href": "/blog/lagree-fitness"
    }
  ],
  "ctaPlaceholder": "Ask: best Lagree studios in Los Angeles…"
};

export default function Page() {
  return <DealsGuide {...GUIDE} />;
}
