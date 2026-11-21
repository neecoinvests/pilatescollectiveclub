import type { Metadata } from "next";
import DealsGuide, { type DealsGuideProps } from "@/components/DealsGuide";

const PAGE_URL = "https://pilatescollectiveclub.com/blog/black-friday-pilates-deals";
const HERO_IMAGE = "https://pilatescollectiveclub.com/pictures/stitch-luxury-studio-wide.png";

export const metadata: Metadata = {
  title: "Pilates Black Friday Deals 2026: Live Amazon Deals",
  description: "Pilates Black Friday 2026 deals live on Amazon: reformers, clothing, grip socks and gifts, with each item's current price and Amazon's deal savings.",
  keywords: ["pilates black friday", "pilates black friday deals", "black friday pilates deals 2026", "pilates cyber monday", "reformer black friday", "pilates sale", "black friday lagree", "pilates deals"],
  openGraph: {
    title: "Pilates Black Friday Deals 2026: Live Amazon Deals",
    description: "Pilates Black Friday 2026 deals live on Amazon: reformers, clothing, grip socks and gifts, with each item's current price and Amazon's deal savings.",
    type: "article",
    url: PAGE_URL,
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: "A bright Pilates studio: Pilates Black Friday deals 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilates Black Friday Deals 2026: Live Amazon Deals",
    description: "Pilates Black Friday 2026 deals live on Amazon: reformers, clothing, grip socks and gifts, with each item's current price and Amazon's deal savings.",
    images: [HERO_IMAGE],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

// Prices are filled from live Amazon listings by the Black Friday generator.
const GUIDE: DealsGuideProps = {
  "slug": "black-friday-pilates-deals",
  "title": "Pilates Black Friday Deals 2026: Live Amazon Deals",
  "description": "Pilates Black Friday 2026 deals live on Amazon: reformers, clothing, grip socks and gifts, with each item's current price and Amazon's deal savings.",
  "breadcrumb": "Pilates Black Friday Deals",
  "eyebrow": "Deals Hub",
  "h1": "Pilates Black Friday Deals",
  "h1Accent": "2026: Live Amazon Deals",
  "readTime": "7 min read",
  "heroImage": "/pictures/stitch-luxury-studio-wide.png",
  "heroAlt": "A bright Pilates studio: Pilates Black Friday deals 2026",
  "intro": "Amazon's Black Friday event is live: it started on November 19 and runs through November 30, 2026, with Black Friday on Friday, November 27 and Cyber Monday on November 30. This hub lists only the Pilates, Lagree and spin buys Amazon has put on a Black Friday Deal, with their current price and saving. Start with the biggest discounts below, or pick a category guide for more.",
  "sections": [
    {
      "id": "best-deals",
      "title": "Biggest deals right now",
      "intro": "The eight largest savings Amazon was showing on Pilates, recovery, Lagree and spin gear on November 19, 2026, all badged Black Friday Deal and running through November 30. Each saving is Amazon's own figure, measured against the list or recent price shown.",
      "items": [
        {
          "asin": "B086HNGNFZ",
          "name": "Gaiam Pilates Ring (15\")",
          "badge": "Biggest saving",
          "note": "A 15\" Pilates ring, the magic circle used in most mat classes, with foam-padded dual handles. It is light and flexible, so you squeeze it between your thighs or hands for inner thigh, arm and core work. Gaiam includes a downloadable exercise guide. Sold by Amazon.com.",
          "price": "$11.13",
          "wasPrice": "$19.99",
          "wasLabel": "List",
          "pctOff": 44,
          "amazonDeal": true
        },
        {
          "asin": "B0CLBFJRW3",
          "name": "Sunny Health & Fitness Smart Pro Exercise Bike",
          "badge": "Step-up pick",
          "note": "A studio-style spin bike with a 40 lb chrome flywheel, a quiet belt drive and stepless felt-pad resistance (push the knob down to stop quickly). The seat adjusts four ways and the handlebars two ways, for inseams from 29\" to 41\". It works with the free SunnyFit app's trainer-led rides. Sold by Amazon.com; stock was limited when we checked.",
          "price": "$259.99",
          "wasPrice": "$399.99",
          "wasLabel": "Was",
          "pctOff": 35,
          "amazonDeal": true,
          "lowStock": true
        },
        {
          "asin": "B0B1VFNFL1",
          "name": "BAGSMART Gym Tote Bag",
          "badge": "Best gym bag",
          "note": "A lightweight 24L nylon tote (1.3 lb) with a built-in yoga mat strap, side pockets for a water bottle, and room for a 15.6\" laptop. It is big enough for a change of clothes and shoes, so it works as a work bag on class days. Sold by BAGSMART.",
          "price": "$25.06",
          "wasPrice": "$37.99",
          "wasLabel": "Was",
          "pctOff": 34,
          "amazonDeal": true
        },
        {
          "asin": "B01BVACFAK",
          "name": "TriggerPoint CORE Foam Roller (18\")",
          "badge": "Compact roller",
          "note": "An 18\" foam roller with TriggerPoint's multi-density grid surface over a solid core, which holds its shape far longer than cheap foam rollers that soften. The short length fits in a gym bag and covers calves, quads, hips and upper back. It comes with access to TriggerPoint's free video library. Sold by Amazon.com.",
          "price": "$23.72",
          "wasPrice": "$34.99",
          "wasLabel": "List",
          "pctOff": 32,
          "amazonDeal": true
        },
        {
          "asin": "B0DV7JN7ZD",
          "name": "Therabody TheraGun Mini (3rd Gen)",
          "badge": "Best massage gun",
          "note": "The third-generation Theragun Mini is 30% smaller, lighter and quieter than the original, and fits in a tote. It has three speeds, one-button control and three attachments (Dampener, Standard Ball and Thumb), plus a travel lock. It connects to the Therabody app over Bluetooth for guided routines. Sold by TheraGun.",
          "price": "$154.99",
          "wasPrice": "$219.99",
          "wasLabel": "List",
          "pctOff": 30,
          "amazonDeal": true
        },
        {
          "asin": "B0D7M7JNFV",
          "name": "PAETA Wooden Foldable Reformer with Sitting Box",
          "badge": "Best wood under $1,000",
          "note": "A foldable reformer with a solid oak frame rated to 500 lb, an extended carriage and six wire springs. It includes a sitting box, jump board, adjustable headrest and shoulder pads, a seven-position footbar and six-position pulley risers, plus wheels to roll it under a bed. Sold by PAETA US. PAETA is a newer brand, so check the warranty terms before you buy.",
          "price": "$664.98",
          "wasPrice": "$899.99",
          "wasLabel": "List",
          "pctOff": 26,
          "amazonDeal": true
        },
        {
          "asin": "B0GFPGMWWS",
          "name": "TAVI Stacy Slouch Pilates Socks (2-Pack)",
          "badge": "Most stylish",
          "note": "TAVI's Stacy socks have a scrunchy slouch-sock look with a patented triangle grip sole designed with Pilates instructors. They are a closed-toe style in a certified organic cotton knit, with an arch band for support. TAVI says the grips do not peel off and the colors do not fade. Two pairs per pack, sold by The Active Footwear Store.",
          "price": "$30.40",
          "wasPrice": "$40.00",
          "wasLabel": "List",
          "pctOff": 24,
          "amazonDeal": true
        },
        {
          "asin": "B01A58FHQ8",
          "name": "THERABAND Resistance Bands Set (Beginner Kit)",
          "badge": "Best bands",
          "note": "THERABAND's beginner kit: three 5 ft flat bands in yellow, red and green, rising from about 3 to 6.7 lb of resistance. They are non-latex, so safe for latex allergies, and they fold into a bag pocket. Good for Pilates arm series, rehab and travel workouts. Sold by Amazon.com.",
          "price": "$10.45",
          "wasPrice": "$13.71",
          "wasLabel": "List",
          "pctOff": 24,
          "amazonDeal": true
        }
      ]
    },
    {
      "id": "clothing",
      "title": "Clothing and socks",
      "intro": "The pieces you replace most often, and the ones most likely to drop in price.",
      "items": [
        {
          "asin": "B09P1G2952",
          "name": "CRZ YOGA Butterluxe Leggings 25\"",
          "badge": "Best-value leggings",
          "note": "CRZ YOGA's Butterluxe leggings are the brand's softest, stretchiest fabric, and the closest thing on Amazon to buttery studio leggings at a fraction of the price. They are high-rise with a seamless waistband, 7/8 length (a 25\" inseam that sits above the ankle) and squat-proof. Compression is very gentle, so they feel more like a second skin than a shapewear legging. Sold by CRZ YOGA.",
          "price": "$27.20",
          "wasPrice": "$32.00",
          "wasLabel": "List",
          "pctOff": 15,
          "amazonDeal": true
        },
        {
          "asin": "B07QHNDHW3",
          "name": "toesox Low Rise Grip Socks (Full Toe, 2-Pack)",
          "badge": "Studio favorite socks",
          "note": "Five-toe grip socks from toesox, a grip sock brand with over 20 years in studios. The separate toes let your feet spread naturally on the reformer footbar or a Lagree platform, and the patented non-slip sole holds on wood floors and mats. The low-rise cut sits below the ankle bone, and the knit is mostly organic cotton (77% cotton). Two pairs per pack, sold by The Active Footwear Store; stock was low when we checked.",
          "price": "$25.50",
          "wasPrice": "$30.00",
          "wasLabel": "List",
          "pctOff": 15,
          "amazonDeal": true,
          "lowStock": true
        }
      ]
    }
  ],
  "watchFor": [
    {
      "h": "Check the 30-day price, not the strikethrough.",
      "b": "Amazon's 'List' price is set by the seller and can be higher than the item usually sells for. Where Amazon shows a 'Was' price (its recent selling price), that is the fairer comparison, and each saving here says which one it uses."
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
      "b": "Amazon usually extends holiday returns on many items bought from November: confirm on the product page before you buy."
    }
  ],
  "faqs": [
    {
      "q": "When is Black Friday 2026?",
      "a": "Black Friday is Friday, November 27, 2026, and Cyber Monday is Monday, November 30, 2026. Many retailers, including Amazon, usually start sales earlier in November."
    },
    {
      "q": "Do Pilates reformers go on sale for Black Friday?",
      "a": "Budget and mid-range home reformers do: on November 19, 2026, four PAETA and DELAVIN machines were on an Amazon Black Friday Deal. Premium studio brands discount less often, and none was on a deal that day. Our reformer deals guide lists the four."
    },
    {
      "q": "Are the prices on this page Black Friday prices?",
      "a": "Yes. Every item here is on an Amazon Black Friday Deal, at Amazon's price on November 19, 2026; the event runs through November 30. Prices can change at any time, so check the listing before you buy."
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
