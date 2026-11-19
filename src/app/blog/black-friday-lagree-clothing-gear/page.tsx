import type { Metadata } from "next";
import DealsGuide, { type DealsGuideProps } from "@/components/DealsGuide";

const PAGE_URL = "https://pilatescollectiveclub.com/blog/black-friday-lagree-clothing-gear";
const HERO_IMAGE = "https://pilatescollectiveclub.com/pictures/stitch-grip-socks-footbar.png";

export const metadata: Metadata = {
  title: "Lagree Clothing & Gear Black Friday Deals 2026",
  description: "Lagree Black Friday 2026: grip socks, fitted leggings, shorts and a gym bag for Megaformer regulars, all on an Amazon Black Friday Deal.",
  keywords: ["lagree black friday", "lagree clothing deals", "lagree socks black friday", "lagree gifts black friday", "lagree outfit deals", "lagree merch", "lagree gear sale", "black friday lagree gifts"],
  openGraph: {
    title: "Lagree Clothing & Gear Black Friday Deals 2026",
    description: "Lagree Black Friday 2026: grip socks, fitted leggings, shorts and a gym bag for Megaformer regulars, all on an Amazon Black Friday Deal.",
    type: "article",
    url: PAGE_URL,
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: "Grip socks on a machine: Lagree clothing and gear Black Friday deals" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lagree Clothing & Gear Black Friday Deals 2026",
    description: "Lagree Black Friday 2026: grip socks, fitted leggings, shorts and a gym bag for Megaformer regulars, all on an Amazon Black Friday Deal.",
    images: [HERO_IMAGE],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

// Prices are filled from live Amazon listings by the Black Friday generator.
const GUIDE: DealsGuideProps = {
  "slug": "black-friday-lagree-clothing-gear",
  "title": "Lagree Clothing & Gear Black Friday Deals 2026",
  "description": "Lagree Black Friday 2026: grip socks, fitted leggings, shorts and a gym bag for Megaformer regulars, all on an Amazon Black Friday Deal.",
  "breadcrumb": "Lagree Clothing & Gear Black Friday",
  "eyebrow": "Lagree",
  "h1": "Lagree Clothing & Gear",
  "h1Accent": "Black Friday Deals 2026",
  "readTime": "7 min read",
  "heroImage": "/pictures/stitch-grip-socks-footbar.png",
  "heroAlt": "Grip socks on a machine: Lagree clothing and gear Black Friday deals",
  "intro": "Lagree eats through grip socks, towels and fitted kit faster than almost any class, which makes Black Friday the time to stock up. Here are the seven pieces for Megaformer regulars, men and women, on an Amazon Black Friday Deal on November 19, 2026, each with the saving Amazon reports.",
  "sections": [
    {
      "id": "socks-hands",
      "title": "Grip socks",
      "intro": "The consumables of Lagree: buy them in bulk when they are discounted.",
      "items": [
        {
          "asin": "B07QHNDHW3",
          "name": "toesox Low Rise Grip Socks (Full Toe, 2-Pack)",
          "badge": "Best grip socks",
          "note": "Full-toe grip socks: separate toes help you spread your foot on the platform.",
          "price": "$25.50",
          "wasPrice": "$30.00",
          "wasLabel": "List",
          "pctOff": 15,
          "amazonDeal": true,
          "lowStock": true
        },
        {
          "asin": "B0F626LL9W",
          "name": "CoolMate Men's Grip Socks (4 Pairs)",
          "badge": "Best men's socks",
          "note": "Men's sizes 6–10 and 10–13 with silicone grip dots and arch support.",
          "price": "$12.10",
          "wasPrice": "$14.99",
          "wasLabel": "Was",
          "pctOff": 19,
          "amazonDeal": true
        },
        {
          "asin": "B07H4F3FXK",
          "name": "Muezna Men's Non-Slip Yoga Socks",
          "badge": "Men's single pair",
          "note": "Men's-sized grip socks so the grip covers your whole sole.",
          "price": "$15.29",
          "wasPrice": "$17.99",
          "wasLabel": "Was",
          "pctOff": 15,
          "amazonDeal": true
        }
      ]
    },
    {
      "id": "women",
      "title": "Fitted kit for women",
      "intro": "Fitted, wicking pieces that stay put in bear and plank.",
      "items": [
        {
          "asin": "B09P1G2952",
          "name": "CRZ YOGA Butterluxe Leggings 25\"",
          "badge": "Leggings",
          "note": "CRZ YOGA's softest, stretchiest fabric.",
          "price": "$27.20",
          "wasPrice": "$32.00",
          "wasLabel": "List",
          "pctOff": 15,
          "amazonDeal": true
        },
        {
          "asin": "B0B28B34XX",
          "name": "CRZ YOGA Butterluxe Biker Shorts 6\"",
          "badge": "Biker shorts",
          "note": "Fitted 6-inch biker shorts that don't ride up.",
          "price": "$20.00",
          "wasPrice": "$24.00",
          "wasLabel": "List",
          "pctOff": 17,
          "amazonDeal": true
        }
      ]
    },
    {
      "id": "men",
      "title": "Fitted kit for men",
      "intro": "Lined shorts and fitted tops: the two things men get wrong in their first class.",
      "items": [
        {
          "asin": "B08BNFYKXR",
          "name": "Pudolla Men's 2-in-1 Shorts 5\"",
          "badge": "Lined shorts",
          "note": "A 5-inch short with a compression liner and phone pocket.",
          "price": "$18.75",
          "wasPrice": "$24.99",
          "wasLabel": "Was",
          "pctOff": 25,
          "amazonDeal": true
        }
      ]
    },
    {
      "id": "merch-bags",
      "title": "Bags",
      "intro": "For carrying it all, with shoes and wet kit kept apart.",
      "items": [
        {
          "asin": "B07RQHPBHC",
          "name": "Fitgriff Gym Bag with Shoe & Wet Compartment",
          "badge": "Gym bag",
          "note": "Shoe and wet compartments for sweaty kit after class.",
          "price": "$31.96",
          "wasPrice": "$39.95",
          "wasLabel": "Was",
          "pctOff": 20,
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
      "h": "Check size and color.",
      "b": "Clothing prices often vary by variant, and the deal may not cover yours."
    }
  ],
  "faqs": [
    {
      "q": "What Lagree gear is worth buying on Black Friday?",
      "a": "Grip socks, towels and fitted leggings or tops: you go through them fastest. Stock up when they are discounted."
    },
    {
      "q": "Is there official Lagree merch on Amazon?",
      "a": "Lagree Fitness's Amazon store carries only the Micro and its accessories. Other Lagree-branded clothing on Amazon comes from unofficial fan designs."
    },
    {
      "q": "What is a good Lagree gift?",
      "a": "A grip-sock multi-pack like CoolMate's four pairs, fitted leggings, or a gym bag with a shoe compartment. For a bigger budget, see our Lagree gifts guide."
    }
  ],
  "guides": [
    {
      "label": "Lagree socks",
      "href": "/blog/best-lagree-grip-socks"
    },
    {
      "label": "what to wear to Lagree",
      "href": "/blog/what-to-wear-to-lagree"
    },
    {
      "label": "Lagree for men",
      "href": "/blog/lagree-for-men"
    },
    {
      "label": "Lagree gifts",
      "href": "/blog/best-lagree-gifts"
    }
  ],
  "ctaPlaceholder": "Ask: best Lagree studios in Los Angeles…"
};

export default function Page() {
  return <DealsGuide {...GUIDE} />;
}
