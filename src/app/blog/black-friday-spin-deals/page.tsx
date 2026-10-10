import type { Metadata } from "next";
import DealsGuide, { type DealsGuideProps } from "@/components/DealsGuide";

const PAGE_URL = "https://pilatescollectiveclub.com/blog/black-friday-spin-deals";
const HERO_IMAGE = "https://pilatescollectiveclub.com/pictures/stitch-studio-modern-row.png";

export const metadata: Metadata = {
  title: "Spin Bike & Indoor Cycling Black Friday Deals 2026",
  description: "Spin and indoor cycling Black Friday 2026: bikes from Sunny, YOSUDA, Schwinn and Echelon, plus cycling shoes, pedals, padded shorts, mats and sensors — with today's Amazon price to beat.",
  keywords: ["spin bike black friday", "indoor cycling bike black friday", "exercise bike black friday 2026", "schwinn ic4 black friday", "cycling shoes black friday", "peloton alternative black friday", "spin class gear deals", "cyber monday exercise bike"],
  openGraph: {
    title: "Spin Bike & Indoor Cycling Black Friday Deals 2026",
    description: "Spin and indoor cycling Black Friday 2026: bikes from Sunny, YOSUDA, Schwinn and Echelon, plus cycling shoes, pedals, padded shorts, mats and sensors — with today's Amazon price to beat.",
    type: "article",
    url: PAGE_URL,
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: "A modern studio — spin and indoor cycling Black Friday deals" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spin Bike & Indoor Cycling Black Friday Deals 2026",
    description: "Spin and indoor cycling Black Friday 2026: bikes from Sunny, YOSUDA, Schwinn and Echelon, plus cycling shoes, pedals, padded shorts, mats and sensors — with today's Amazon price to beat.",
    images: [HERO_IMAGE],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

// Prices are filled from live Amazon listings by the Black Friday generator.
const GUIDE: DealsGuideProps = {
  "slug": "black-friday-spin-deals",
  "title": "Spin Bike & Indoor Cycling Black Friday Deals 2026",
  "description": "Spin and indoor cycling Black Friday 2026: bikes from Sunny, YOSUDA, Schwinn and Echelon, plus cycling shoes, pedals, padded shorts, mats and sensors — with today's Amazon price to beat.",
  "breadcrumb": "Spin Black Friday Deals",
  "eyebrow": "Spin",
  "h1": "Spin & Indoor Cycling",
  "h1Accent": "Black Friday Deals 2026",
  "readTime": "7 min read",
  "heroImage": "/pictures/stitch-studio-modern-row.png",
  "heroAlt": "A modern studio — spin and indoor cycling Black Friday deals",
  "intro": "Exercise bikes are one of Black Friday's most discounted fitness categories. Here are five indoor bikes we track on Amazon, from under $300 to Echelon, plus the shoes, pedals, shorts and sensors that make home or studio cycling better. Each shows today's price so you can see the real saving.",
  "sections": [
    {
      "id": "bikes",
      "title": "Indoor bikes",
      "intro": "Magnetic-resistance bikes, sold by Amazon.com or the brand.",
      "items": [
        {
          "asin": "B0DQ6F89GJ",
          "name": "Sunny Health & Fitness Nova Smart Magnetic Bike",
          "badge": "Best budget smart bike",
          "note": "Sunny's beginner smart magnetic bike, sold by Amazon.com.",
          "price": "$299.99"
        },
        {
          "asin": "B097P77B69",
          "name": "YOSUDA PRO Magnetic Exercise Bike",
          "badge": "Best value",
          "note": "A magnetic bike with a 350 lb weight capacity, sold by Amazon.com.",
          "price": "$329.99"
        },
        {
          "asin": "B0CLBFJRW3",
          "name": "Sunny Health & Fitness Smart Pro Exercise Bike",
          "badge": "Step-up pick",
          "note": "Sunny's smart bike for more intensive indoor cycling. Stock is limited.",
          "price": "$399.99"
        },
        {
          "asin": "B07WZXSDKW",
          "name": "Schwinn IC4 Indoor Cycling Bike",
          "badge": "Best studio-style bike",
          "note": "Schwinn's indoor cycling bike, sold by Amazon.com.",
          "price": "$795.99"
        },
        {
          "asin": "B07XGN9G8W",
          "name": "Echelon Smart Connect Fitness Bike",
          "badge": "Peloton alternative",
          "note": "Echelon's connected bike with a free trial membership, sold by Echelon.",
          "price": "$1,199.99"
        }
      ]
    },
    {
      "id": "gear",
      "title": "Shoes, pedals and shorts",
      "intro": "Clip in and pad up — the biggest comfort upgrade for spin.",
      "items": [
        {
          "asin": "B0B6B9QD8G",
          "name": "Shimano SH-RP101 Cycling Shoe",
          "badge": "Best value shoe",
          "note": "Shimano's all-round cycling shoe.",
          "price": "$65.00"
        },
        {
          "asin": "B07GRNDWKT",
          "name": "TIEM Slipstream Indoor Cycling Shoe",
          "badge": "Best indoor shoe",
          "note": "An SPD-compatible shoe designed for indoor cycling.",
          "price": "$145.00"
        },
        {
          "asin": "B07NKFPGPC",
          "name": "Venzo SPD-Compatible Pedals with Toe Clips",
          "badge": "Pedals",
          "note": "SPD-compatible pedals with toe clips — clip in or ride in trainers.",
          "price": "$39.98"
        },
        {
          "asin": "B0BQ6Q1KXH",
          "name": "Baleaf Women's 4D Padded Bike Shorts 7\"",
          "badge": "Padded shorts",
          "note": "High-waist 4D padded shorts with a side pocket.",
          "price": "$36.99"
        }
      ]
    },
    {
      "id": "accessories",
      "title": "Mats and sensors",
      "intro": "Small add-ons that make a home bike work better.",
      "items": [
        {
          "asin": "B0H517MP29",
          "name": "FLEXLIFT Exercise Bike Mat (70\" x 30\")",
          "badge": "Floor mat",
          "note": "Protects floors and reduces noise under the bike.",
          "price": "$19.98"
        },
        {
          "asin": "B07CDCPF4Z",
          "name": "COOSPO BK467 Speed & Cadence Sensor",
          "badge": "Cadence sensor",
          "note": "Adds cadence data to apps on bikes without it.",
          "price": "$15.74"
        },
        {
          "asin": "B07BS6B4PD",
          "name": "COOSPO H6 Heart Rate Monitor",
          "badge": "Budget heart rate",
          "note": "A chest-strap heart rate monitor with Bluetooth and ANT+.",
          "price": "$29.99"
        },
        {
          "asin": "B07PM54P4N",
          "name": "Polar H10 Heart Rate Monitor",
          "badge": "Best heart rate",
          "note": "Polar's chest strap, sold by Amazon.com.",
          "price": "$84.74"
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
      "q": "Are exercise bikes cheaper on Black Friday?",
      "a": "Exercise bikes are among the most discounted fitness products around Black Friday. Compare with the price we recorded here to see the real saving."
    },
    {
      "q": "What is a good Peloton alternative?",
      "a": "Echelon's Smart Connect and Schwinn's IC4 are the best-known alternatives we track. Budget magnetic bikes from Sunny and YOSUDA cost far less."
    },
    {
      "q": "Do I need cycling shoes for spin?",
      "a": "No, but clip-in shoes make pedalling smoother and more efficient. Check your bike's pedals — SPD is the most common for indoor bikes."
    }
  ],
  "guides": [
    {
      "label": "best indoor spin bike",
      "href": "/blog/best-indoor-spin-bike-for-home-studio"
    },
    {
      "label": "spin bikes under $500",
      "href": "/blog/best-spin-bike-under-500"
    },
    {
      "label": "cycling shoes",
      "href": "/blog/best-cycling-shoes-for-spin-class"
    }
  ],
  "ctaPlaceholder": "Ask: best spin studios in New York…"
};

export default function Page() {
  return <DealsGuide {...GUIDE} />;
}
