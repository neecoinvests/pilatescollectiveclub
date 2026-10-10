import type { Metadata } from "next";
import DealsGuide, { type DealsGuideProps } from "@/components/DealsGuide";

const PAGE_URL = "https://pilatescollectiveclub.com/blog/black-friday-pilates-deals";
const HERO_IMAGE = "https://pilatescollectiveclub.com/pictures/stitch-luxury-studio-wide.png";

export const metadata: Metadata = {
  title: "Pilates Black Friday Deals 2026: The Watchlist",
  description: "Pilates Black Friday 2026: the reformers, clothing, grip socks and gifts worth watching, with today's Amazon price for each so you can spot a real discount on November 27.",
  keywords: ["pilates black friday", "pilates black friday deals", "black friday pilates deals 2026", "pilates cyber monday", "reformer black friday", "pilates sale", "black friday lagree", "pilates deals"],
  openGraph: {
    title: "Pilates Black Friday Deals 2026: The Watchlist",
    description: "Pilates Black Friday 2026: the reformers, clothing, grip socks and gifts worth watching, with today's Amazon price for each so you can spot a real discount on November 27.",
    type: "article",
    url: PAGE_URL,
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: "A bright Pilates studio — Pilates Black Friday deals 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilates Black Friday Deals 2026: The Watchlist",
    description: "Pilates Black Friday 2026: the reformers, clothing, grip socks and gifts worth watching, with today's Amazon price for each so you can spot a real discount on November 27.",
    images: [HERO_IMAGE],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

// Prices are filled from live Amazon listings by the Black Friday generator.
const GUIDE: DealsGuideProps = {
  "slug": "black-friday-pilates-deals",
  "title": "Pilates Black Friday Deals 2026: The Watchlist",
  "description": "Pilates Black Friday 2026: the reformers, clothing, grip socks and gifts worth watching, with today's Amazon price for each so you can spot a real discount on November 27.",
  "breadcrumb": "Pilates Black Friday Deals",
  "eyebrow": "Deals Hub",
  "h1": "Pilates Black Friday Deals",
  "h1Accent": "2026: The Watchlist",
  "readTime": "6 min read",
  "heroImage": "/pictures/stitch-luxury-studio-wide.png",
  "heroAlt": "A bright Pilates studio — Pilates Black Friday deals 2026",
  "intro": "Black Friday is Friday, November 27, 2026, and Cyber Monday follows on November 30. This is our watchlist: the best-value Pilates, Lagree and spin buys on Amazon, each with the price it sells for today. When the sales start, compare against these numbers and you will know instantly whether a 'deal' is real. Pick a category guide below for the full list.",
  "sections": [
    {
      "id": "reformers",
      "title": "Reformers to watch",
      "intro": "The three home reformers we would buy at each budget — full list in our reformer Black Friday guide.",
      "items": [
        {
          "asin": "B0D31767J1",
          "name": "WINDFOOT Foldable Pilates Reformer (Jump Board)",
          "badge": "Budget spring reformer",
          "note": "A foldable spring reformer with a jump board — one of the lowest-priced real spring machines we list. A newer brand, so check the warranty.",
          "price": "$295.99"
        },
        {
          "asin": "B07G5J3SKS",
          "name": "AeroPilates Premier 701 Reformer",
          "badge": "Best-known beginner brand",
          "note": "Stamina's AeroPilates is the long-established home brand. Cord-based resistance rather than steel springs.",
          "price": "$539.99"
        },
        {
          "asin": "B099ZJ4C25",
          "name": "Align-Pilates C8-Pro Reformer",
          "badge": "Best-value pro springs",
          "note": "Professional springs and a studio-style carriage at a home price.",
          "price": "$2,750.00"
        }
      ]
    },
    {
      "id": "clothing",
      "title": "Clothing and socks to watch",
      "intro": "The pieces you replace most often — and the ones most likely to drop in price.",
      "items": [
        {
          "asin": "B09P1G2952",
          "name": "CRZ YOGA Butterluxe Leggings 25\"",
          "badge": "Best-value leggings",
          "note": "CRZ YOGA's softest, stretchiest fabric — the closest Amazon equivalent to buttery studio leggings.",
          "price": "$32.00"
        },
        {
          "asin": "B07QHNDHW3",
          "name": "toesox Low Rise Grip Socks (Full Toe, 2-Pack)",
          "badge": "Studio favourite socks",
          "note": "Full-toe grip socks with a non-slip sole, in an organic cotton blend.",
          "price": "$30.00"
        },
        {
          "asin": "B0FXN378H8",
          "name": "Varley Freesoft Piped Full Leggings",
          "badge": "Premium leggings",
          "note": "Varley's soft Freesoft fabric, sold by Shopbop (an Amazon company).",
          "price": "$98.00"
        }
      ]
    },
    {
      "id": "gifts",
      "title": "Gifts to watch",
      "intro": "Small, useful and under $50 — see our gifts guide for 13 more.",
      "items": [
        {
          "asin": "B086HNGNFZ",
          "name": "Gaiam Pilates Ring (15\")",
          "badge": "Gift under $20",
          "note": "The magic circle used in most mat classes. Sold by Amazon.com.",
          "price": "$16.39"
        },
        {
          "asin": "B0GSJHPSQT",
          "name": "Byrex Pilates Equipment Kit",
          "badge": "All-in-one gift",
          "note": "A ring, small ball, resistance bands and sliders in one box.",
          "price": "$19.99"
        }
      ]
    },
    {
      "id": "lagree-spin",
      "title": "Lagree and spin to watch",
      "intro": "Lagree's own home machine and a best-selling studio bike.",
      "items": [
        {
          "asin": "B0BBT7YV93",
          "name": "The Micro by Lagree Fitness",
          "badge": "Lagree home machine",
          "note": "Lagree Fitness's own compact home machine, sold by Lagree Fitness. 72\" x 20\" x 6\", 60 lb, four springs.",
          "price": "$990.00"
        },
        {
          "asin": "B07WZXSDKW",
          "name": "Schwinn IC4 Indoor Cycling Bike",
          "badge": "Studio-style bike",
          "note": "Schwinn's magnetic indoor cycling bike, sold by Amazon.com.",
          "price": "$795.99"
        }
      ]
    }
  ],
  "watchFor": [
    {
      "h": "Check the 30-day price, not the strikethrough.",
      "b": "Amazon's 'List' or 'Was' price can be set by the seller. Compare the Black Friday price with the price we recorded here in October — that is the real saving."
    },
    {
      "h": "Check who is selling.",
      "b": "Sold by Amazon.com or the brand's own store is the safest bet for returns. Some listings switch to third-party sellers during sales."
    },
    {
      "h": "Check delivery dates.",
      "b": "Large equipment can ship with a lead time. If it is a gift, make sure it arrives before you need it."
    },
    {
      "h": "Check the returns window.",
      "b": "Amazon usually extends holiday returns on many items bought from November — confirm on the product page before you buy."
    }
  ],
  "faqs": [
    {
      "q": "When is Black Friday 2026?",
      "a": "Black Friday is Friday, November 27, 2026, and Cyber Monday is Monday, November 30, 2026. Many retailers, including Amazon, usually start sales earlier in November."
    },
    {
      "q": "Do Pilates reformers go on sale for Black Friday?",
      "a": "Budget and mid-range home reformers often see discounts; premium studio brands discount less often. Our reformer guide records today's price for every machine so you can judge any deal."
    },
    {
      "q": "Are the prices on this page Black Friday prices?",
      "a": "Not yet. They are the current Amazon prices we checked in October. We will update the pages as Black Friday deals go live — use today's price as the baseline."
    },
    {
      "q": "What Pilates gear is most likely to be discounted?",
      "a": "Clothing, grip socks, mats and small props are discounted most often around Black Friday. Large equipment from established studio brands rarely drops much."
    }
  ],
  "guides": [
    {
      "label": "reformer deals",
      "href": "/blog/black-friday-pilates-reformer-deals"
    },
    {
      "label": "clothing deals",
      "href": "/blog/black-friday-pilates-clothing-deals"
    },
    {
      "label": "gifts under $50",
      "href": "/blog/black-friday-pilates-gifts-under-50"
    },
    {
      "label": "Lagree deals",
      "href": "/blog/black-friday-lagree-deals"
    },
    {
      "label": "spin deals",
      "href": "/blog/black-friday-spin-deals"
    }
  ]
};

export default function Page() {
  return <DealsGuide {...GUIDE} />;
}
