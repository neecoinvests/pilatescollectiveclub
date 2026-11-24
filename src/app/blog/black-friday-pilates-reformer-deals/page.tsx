import type { Metadata } from "next";
import DealsGuide, { type DealsGuideProps } from "@/components/DealsGuide";

const PAGE_URL = "https://pilatescollectiveclub.com/blog/black-friday-pilates-reformer-deals";
const HERO_IMAGE = "https://pilatescollectiveclub.com/pictures/stitch-reformer-sunlit-minimal.png";

export const metadata: Metadata = {
  title: "Pilates Reformer Black Friday Deals 2026",
  description: "Pilates reformer Black Friday 2026: four home reformers from PAETA and DELAVIN on an Amazon Black Friday Deal, up to 26% off, with live prices.",
  keywords: ["pilates reformer black friday", "reformer black friday deal", "black friday pilates reformer 2026", "pilates machine black friday", "cyber monday pilates reformer", "pilates reformer sale", "aeropilates black friday", "balanced body black friday"],
  openGraph: {
    title: "Pilates Reformer Black Friday Deals 2026: Live Deals",
    description: "Pilates reformer Black Friday 2026: four home reformers from PAETA and DELAVIN on an Amazon Black Friday Deal, up to 26% off, with live prices.",
    type: "article",
    url: PAGE_URL,
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: "A home Pilates reformer in a sunlit room: reformer Black Friday deals" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilates Reformer Black Friday Deals 2026",
    description: "Pilates reformer Black Friday 2026: four home reformers from PAETA and DELAVIN on an Amazon Black Friday Deal, up to 26% off, with live prices.",
    images: [HERO_IMAGE],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

// Prices are filled from live Amazon listings by the Black Friday generator.
const GUIDE: DealsGuideProps = {
  "slug": "black-friday-pilates-reformer-deals",
  "title": "Pilates Reformer Black Friday Deals 2026: Live Deals",
  "description": "Pilates reformer Black Friday 2026: four home reformers from PAETA and DELAVIN on an Amazon Black Friday Deal, up to 26% off, with live prices.",
  "breadcrumb": "Reformer Black Friday Deals",
  "eyebrow": "Reformers",
  "h1": "Pilates Reformer Black Friday",
  "h1Accent": "Deals 2026: Live Deals",
  "readTime": "8 min read",
  "heroImage": "/pictures/stitch-reformer-sunlit-minimal.png",
  "heroAlt": "A home Pilates reformer in a sunlit room: reformer Black Friday deals",
  "intro": "A reformer is the biggest Pilates purchase most people make, which makes it the one where Black Friday matters most. Here are the reformers on an Amazon Black Friday Deal on November 24, 2026, grouped by budget: four machines from PAETA and DELAVIN, at 19% to 26% off. Amazon's event runs through November 30. No AeroPilates, Balanced Body, Merrithew or Align-Pilates machine was on a deal that day.",
  "sections": [
    {
      "id": "under-500",
      "title": "Under $500",
      "intro": "Two foldable PAETA machines with real springs. Real resistance at a low price: PAETA is a newer brand, so check the warranty.",
      "items": [
        {
          "asin": "B0DFXQX3XV",
          "name": "PAETA 86\" Foldable Reformer (Piano-Wire Springs)",
          "badge": "Best budget springs",
          "note": "An 86\" foldable reformer, longer than the usual 75\" folding models, with piano-wire springs for a smoother, quieter ride than elastic cords. Its legs come off to lower the height, a six-position footbar, five-position pulley risers and a jump board, and folds down to 1.4 sq ft for storage. Rated to 500 lb. PAETA lists it for users up to 5'9\", so taller riders should look elsewhere. Sold by PAETA US.",
          "price": "$398.99",
          "wasPrice": "$499.99",
          "wasLabel": "List",
          "pctOff": 20,
          "amazonDeal": true
        },
        {
          "asin": "B0G1YL9QTN",
          "name": "PAETA 86\" Foldable Reformer (Dual Resistance)",
          "badge": "Springs plus cords",
          "note": "PAETA's 86\" folder uses both springs and resistance cords. It comes with a jump board and sitting box, and arrives 90% pre-assembled with an exercise guide. The carbon steel frame is rated to 400 lb and folds to about 2 sq ft. Sold by PAETA US.",
          "price": "$417.99",
          "wasPrice": "$519.99",
          "wasLabel": "List",
          "pctOff": 20,
          "amazonDeal": true
        }
      ]
    },
    {
      "id": "500-1500",
      "title": "$500 to $1,500",
      "intro": "Wood-frame home machines from PAETA and DELAVIN.",
      "items": [
        {
          "asin": "B0D7M7JNFV",
          "name": "PAETA Wooden Foldable Reformer with Sitting Box",
          "badge": "Best wood frame under $1,000",
          "note": "A foldable reformer with a solid oak frame rated to 500 lb, an extended carriage and six wire springs. It includes a sitting box, jump board, adjustable headrest and shoulder pads, a seven-position footbar and six-position pulley risers, plus wheels to roll it under a bed. Sold by PAETA US. PAETA is a newer brand, so check the warranty terms before you buy.",
          "price": "$664.98",
          "wasPrice": "$899.99",
          "wasLabel": "List",
          "pctOff": 26,
          "amazonDeal": true
        },
        {
          "asin": "B0D2ZT4Z5H",
          "name": "DELAVIN Solid Wood Pilates Reformer",
          "badge": "Solid wood",
          "note": "A one-piece solid wood reformer that arrives 90% pre-assembled: you attach the stainless steel tower and you are ready. It comes with a lot for the price: a 7-level footbar, a 5-position pulley tower, push-through and roll-down bars, color-coded springs, a jump board and a reformer box. It is rated to 440 lb and has rear wheels for rolling it against a wall. Sold by Neohome.",
          "price": "$1,120.99",
          "wasPrice": "$1,377.49",
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
    },
    {
      "h": "Budget for accessories.",
      "b": "A box, jump board or extra springs can add a lot. A 'deal' on a bare machine may cost more than a bundle."
    }
  ],
  "faqs": [
    {
      "q": "Is Black Friday a good time to buy a Pilates reformer?",
      "a": "It can be, especially for budget and mid-range home reformers, which are discounted more often than premium studio brands. This page lists only the machines on an Amazon Black Friday Deal."
    },
    {
      "q": "Do Balanced Body or Merrithew reformers go on sale?",
      "a": "Less often and by less than budget brands. On November 24, 2026, no Balanced Body or Merrithew reformer was on an Amazon Black Friday Deal; our studio reformer guide has their current prices."
    },
    {
      "q": "What is the cheapest real spring reformer?",
      "a": "Of the reformers on a Black Friday Deal, the two PAETA 86\" foldable models are the lowest-priced with real springs: $398.99 and $417.99 on November 24, 2026. PAETA is a newer brand, so check the warranty."
    },
    {
      "q": "Should I wait for Cyber Monday?",
      "a": "Prices on big items often stay the same from Black Friday through Cyber Monday. If a reformer you want hits a good price on Black Friday and stock is low, waiting is a risk."
    }
  ],
  "guides": [
    {
      "label": "best home reformers",
      "href": "/blog/best-home-pilates-reformer"
    },
    {
      "label": "reformers under $500",
      "href": "/blog/best-pilates-reformer-under-500"
    },
    {
      "label": "reformer brands compared",
      "href": "/blog/best-pilates-reformer-brands"
    },
    {
      "label": "how much a reformer costs",
      "href": "/blog/how-much-does-a-pilates-reformer-cost"
    }
  ]
};

export default function Page() {
  return <DealsGuide {...GUIDE} />;
}
