import type { Metadata } from "next";
import DealsGuide, { type DealsGuideProps } from "@/components/DealsGuide";

const PAGE_URL = "https://pilatescollectiveclub.com/blog/black-friday-lagree-deals";
const HERO_IMAGE = "https://pilatescollectiveclub.com/pictures/stitch-reformer-spring-detail.png";

export const metadata: Metadata = {
  title: "Lagree Black Friday Deals 2026: Micro & Setup",
  description: "Lagree Black Friday 2026: the Lagree Micro, its rear platform, handlebars and cables, and the home setup around it, with live Amazon prices.",
  keywords: ["lagree black friday", "lagree micro black friday", "lagree micro sale", "lagree fitness black friday", "megaformer black friday", "lagree deals 2026", "lagree cyber monday", "lagree at home deal"],
  openGraph: {
    title: "Lagree Black Friday Deals 2026: The Micro & Home Setup",
    description: "Lagree Black Friday 2026: the Lagree Micro, its rear platform, handlebars and cables, and the home setup around it, with live Amazon prices.",
    type: "article",
    url: PAGE_URL,
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: "Springs on a carriage machine: Lagree Micro Black Friday deals" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lagree Black Friday Deals 2026: Micro & Setup",
    description: "Lagree Black Friday 2026: the Lagree Micro, its rear platform, handlebars and cables, and the home setup around it, with live Amazon prices.",
    images: [HERO_IMAGE],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

// Prices are filled from live Amazon listings by the Black Friday generator.
const GUIDE: DealsGuideProps = {
  "slug": "black-friday-lagree-deals",
  "title": "Lagree Black Friday Deals 2026: The Micro & Home Setup",
  "description": "Lagree Black Friday 2026: the Lagree Micro, its rear platform, handlebars and cables, and the home setup around it, with live Amazon prices.",
  "breadcrumb": "Lagree Black Friday Deals",
  "eyebrow": "Lagree",
  "h1": "Lagree Black Friday Deals",
  "h1Accent": "2026: The Micro & Home Setup",
  "readTime": "6 min read",
  "heroImage": "/pictures/stitch-reformer-spring-detail.png",
  "heroAlt": "Springs on a carriage machine: Lagree Micro Black Friday deals",
  "intro": "The Micro is Lagree Fitness's own home machine, and it is sold by Lagree Fitness on Amazon along with its three add-ons. Whether the brand runs a Black Friday price is up to Lagree Fitness, so here is exactly what each piece cost on November 26, 2026, plus the home-setup gear around it that is far more likely to be discounted.",
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
          "note": "Lagree Fitness's own compact home machine, sold by Lagree Fitness on Amazon. It measures 72\" x 20\" x 6\", weighs 60 lb and comes with four springs (heavy, medium, light and extra light). It fits users up to 6'8\" and stores under a bed, against a wall or on a bike rack.",
          "price": "$990.00"
        },
        {
          "asin": "B0BKN2LSWD",
          "name": "Lagree Fitness Micro Rear Platform",
          "badge": "Add-on #1",
          "note": "The add-on most Micro owners buy first. The rear platform (10.5\" x 8.5\" x 6\") gives you a sturdy place to plant feet, hands and knees, and unlocks moves like the express lunge, 5th lunge, super crunch and giant wheelbarrow. With it fitted, the Micro is 81.5\" long. Sold by Lagree Fitness.",
          "price": "$290.00"
        },
        {
          "asin": "B0BKMP89SH",
          "name": "Lagree Fitness Micro Handlebars (Pair)",
          "badge": "Add-on #2",
          "note": "A pair of handlebars that pin onto the front or back of the Micro in seconds, with no tools. They add the stability you need for Catfish, Twister, Spoon and Runner's Lunge. Using them at the back requires the rear platform, and you need two pairs for handles at both ends. Sold by Lagree Fitness.",
          "price": "$190.00"
        },
        {
          "asin": "B0BYMD4S91",
          "name": "Lagree Fitness Micro Pulley Cables",
          "badge": "Add-on #3",
          "note": "The Micro's pulley cable attachment, sold by Lagree Fitness, for adding cable-based moves to your home sessions. Stock is often limited; if it shows unavailable, buy direct from lagreefitness.com.",
          "price": "$230.00",
          "lowStock": true
        }
      ]
    },
    {
      "id": "setup",
      "title": "The home setup",
      "intro": "Not Lagree-branded: the everyday gear that makes home sessions safer and quieter, and the most likely to drop in price.",
      "items": [
        {
          "asin": "B0041GQH3S",
          "name": "Marcy Equipment Mat & Floor Protector (78\" x 36\")",
          "badge": "Floor mat: Micro only",
          "note": "A 78\" x 36\" mat of 1/4\" EVA foam that goes under the Micro to protect your floor, cut vibration and noise, and stop the machine from creeping. At 78\" it covers the Micro on its own (72\"), but not with the rear platform fitted (81.5\"). Sold by Amazon.com.",
          "price": "$24.49",
          "wasPrice": "$29.99",
          "wasLabel": "List",
          "pctOff": 18,
          "amazonDeal": true
        },
        {
          "asin": "B005SUKZJ8",
          "name": "Rubber-Cal Rubber Flooring Roll (4 x 7 ft)",
          "badge": "Floor mat, with platform",
          "note": "A 4 x 7 ft roll of 3 mm diamond-plate rubber flooring. At 84\" long, it is long enough for the Micro with its rear platform fitted (81.5\"), which a standard 78\" equipment mat is not. Sold by Amazon.com.",
          "price": "$49.88"
        },
        {
          "asin": "B06WV6XVV9",
          "name": "Impulse Yoga Knee Pad Cushion (1\")",
          "badge": "Kneeling",
          "note": "A 24\" x 12\" cushion with a full inch of foam, for kneeling moves on the carriage or a hard floor. It now comes with a breathable mesh carry bag. Also handy for planks and push-ups if your wrists or knees complain.",
          "price": "$15.99",
          "wasPrice": "$19.99",
          "wasLabel": "Was",
          "pctOff": 20,
          "amazonDeal": true
        },
        {
          "asin": "B00CO8HO6O",
          "name": "Gymboss Interval Timer",
          "badge": "Timing",
          "note": "Lagree is timed, not counted, and this pager-sized timer runs one or two intervals from two seconds to 99 minutes, repeating up to 99 times. It alerts you with a chime, a vibration or both, and clips to your waistband. It is sweat and impact resistant, and takes one AAA battery (not included).",
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
      "b": "Amazon's 'List' price is set by the seller and can be higher than the item usually sells for. Where Amazon shows a 'Was' price (its recent selling price), that is the fairer comparison, and each saving here says which one it uses."
    },
    {
      "h": "Price the full setup.",
      "b": "A discount on the Micro alone matters less if you also need the rear platform. Add up the setup you will actually use."
    }
  ],
  "faqs": [
    {
      "q": "Does the Lagree Micro go on sale for Black Friday?",
      "a": "That depends on Lagree Fitness, which sells the Micro on Amazon. On November 26, 2026, the Micro was not part of Amazon's Black Friday deals, so check the listing for the current price."
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
