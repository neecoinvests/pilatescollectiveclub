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
  "intro": "A reformer is the biggest Pilates purchase most people make, which makes it the one where Black Friday matters most. Here are the reformers on an Amazon Black Friday Deal on November 19, 2026, grouped by budget: four machines from PAETA and DELAVIN, at 19% to 26% off. Amazon's event runs through November 30. No AeroPilates, Balanced Body, Merrithew or Align-Pilates machine was on a deal that day.",
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
          "note": "PAETA's foldable reformer with piano-wire springs, sold by PAETA US.",
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
          "note": "PAETA's dual-resistance foldable model, sold by PAETA US.",
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
          "note": "A wooden foldable reformer with a sitting box, sold by PAETA US.",
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
          "note": "A solid-wood home reformer: the look of a studio machine for less.",
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
      "a": "Less often and by less than budget brands. On November 19, 2026, no Balanced Body or Merrithew reformer was on an Amazon Black Friday Deal; our studio reformer guide has their current prices."
    },
    {
      "q": "What is the cheapest real spring reformer?",
      "a": "Of the reformers on a Black Friday Deal, the two PAETA 86\" foldable models are the lowest-priced with real springs: $398.99 and $417.99 on November 19, 2026. PAETA is a newer brand, so check the warranty."
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
