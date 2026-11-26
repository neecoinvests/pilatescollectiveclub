import type { Metadata } from "next";
import DealsGuide, { type DealsGuideProps } from "@/components/DealsGuide";

const PAGE_URL = "https://pilatescollectiveclub.com/blog/black-friday-spin-deals";
const HERO_IMAGE = "https://pilatescollectiveclub.com/pictures/stitch-studio-modern-row.png";

export const metadata: Metadata = {
  title: "Spin Bike & Indoor Cycling Black Friday Deals 2026",
  description: "Spin bike Black Friday 2026: a Sunny smart bike 33% off, plus COOSPO cadence and heart rate sensors, all on Amazon Black Friday Deals.",
  keywords: ["spin bike black friday", "indoor cycling bike black friday", "exercise bike black friday 2026", "schwinn ic4 black friday", "cycling shoes black friday", "peloton alternative black friday", "spin class gear deals", "cyber monday exercise bike"],
  openGraph: {
    title: "Spin Bike & Indoor Cycling Black Friday Deals 2026",
    description: "Spin bike Black Friday 2026: a Sunny smart bike 33% off, plus COOSPO cadence and heart rate sensors, all on Amazon Black Friday Deals.",
    type: "article",
    url: PAGE_URL,
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: "A modern studio: spin and indoor cycling Black Friday deals" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spin Bike & Indoor Cycling Black Friday Deals 2026",
    description: "Spin bike Black Friday 2026: a Sunny smart bike 33% off, plus COOSPO cadence and heart rate sensors, all on Amazon Black Friday Deals.",
    images: [HERO_IMAGE],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

// Prices are filled from live Amazon listings by the Black Friday generator.
const GUIDE: DealsGuideProps = {
  "slug": "black-friday-spin-deals",
  "title": "Spin Bike & Indoor Cycling Black Friday Deals 2026",
  "description": "Spin bike Black Friday 2026: a Sunny smart bike 33% off, plus COOSPO cadence and heart rate sensors, all on Amazon Black Friday Deals.",
  "breadcrumb": "Spin Black Friday Deals",
  "eyebrow": "Spin",
  "h1": "Spin & Indoor Cycling",
  "h1Accent": "Black Friday Deals 2026",
  "readTime": "7 min read",
  "heroImage": "/pictures/stitch-studio-modern-row.png",
  "heroAlt": "A modern studio: spin and indoor cycling Black Friday deals",
  "intro": "Exercise bikes are one of Black Friday's most discounted fitness categories. Here are the indoor cycling buys on an Amazon Black Friday Deal on November 26, 2026: a Sunny smart bike at 33% off, plus two COOSPO sensors. Amazon's event runs through November 30.",
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
          "note": "Sunny's beginner smart bike, with an 18 lb flywheel and quiet magnetic resistance, which needs less upkeep than a felt-pad bike. It fits riders from about 5' to 6'4\" (a 28\" to 35.8\" inseam), and has transport wheels for small apartments. It connects to the free SunnyFit app for trainer-led rides. Sold by Amazon.com.",
          "price": "$199.99",
          "wasPrice": "$299.99",
          "wasLabel": "List",
          "pctOff": 33,
          "amazonDeal": true
        }
      ]
    },
    {
      "id": "accessories",
      "title": "Sensors",
      "intro": "Small add-ons that make a home bike work better.",
      "items": [
        {
          "asin": "B07CDCPF4Z",
          "name": "COOSPO BK467 Speed & Cadence Sensor",
          "badge": "Cadence sensor",
          "note": "A small bike sensor that sends cadence or speed to apps like Zwift, Peloton and Rouvy, or a bike computer, over Bluetooth and ANT+. Each sensor measures one thing at a time: use it in cadence mode on an indoor bike. It is IP67 waterproof. Sold by CooSpo; check whether the listing is for one sensor or two.",
          "price": "$13.22",
          "wasPrice": "$15.74",
          "wasLabel": "Was",
          "pctOff": 16,
          "amazonDeal": true
        },
        {
          "asin": "B07BS6B4PD",
          "name": "COOSPO H6 Heart Rate Monitor",
          "badge": "Budget heart rate",
          "note": "A chest-strap heart rate monitor with Bluetooth and ANT+, so it pairs with phone apps, sports watches, bike computers and machines like the Peloton bike and Concept2 rower. Chest straps are generally more accurate than wrist sensors during hard intervals. Wet the electrodes before you put it on. Sold by CooSpo.",
          "price": "$24.22",
          "wasPrice": "$29.99",
          "wasLabel": "List",
          "pctOff": 19,
          "amazonDeal": true
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
      "q": "Are exercise bikes cheaper on Black Friday?",
      "a": "Exercise bikes are among the most discounted fitness products around Black Friday. The Sunny bike here is 33% off, as Amazon reports it."
    },
    {
      "q": "What is a good Peloton alternative?",
      "a": "Echelon and Schwinn's IC4 are the best-known alternatives, but neither was on an Amazon Black Friday Deal on November 19, 2026. The Sunny smart bike on this page costs far less and is on a deal."
    },
    {
      "q": "Do I need cycling shoes for spin?",
      "a": "No, but clip-in shoes make pedalling smoother and more efficient. Check your bike's pedals: SPD is the most common for indoor bikes."
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
