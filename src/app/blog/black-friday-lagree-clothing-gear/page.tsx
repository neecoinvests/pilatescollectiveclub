import type { Metadata } from "next";
import DealsGuide, { type DealsGuideProps } from "@/components/DealsGuide";

const PAGE_URL = "https://pilatescollectiveclub.com/blog/black-friday-lagree-clothing-gear";
const HERO_IMAGE = "https://pilatescollectiveclub.com/pictures/stitch-grip-socks-footbar.png";

export const metadata: Metadata = {
  title: "Lagree Clothing & Gear Black Friday Deals 2026",
  description: "Lagree Black Friday 2026: grip socks, fitted leggings and tops, men's kit, gloves, towels, bags and Lagree fan merch — with today's Amazon price to beat.",
  keywords: ["lagree black friday", "lagree clothing deals", "lagree socks black friday", "lagree gifts black friday", "lagree outfit deals", "lagree merch", "lagree gear sale", "black friday lagree gifts"],
  openGraph: {
    title: "Lagree Clothing & Gear Black Friday Deals 2026",
    description: "Lagree Black Friday 2026: grip socks, fitted leggings and tops, men's kit, gloves, towels, bags and Lagree fan merch — with today's Amazon price to beat.",
    type: "article",
    url: PAGE_URL,
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: "Grip socks on a machine — Lagree clothing and gear Black Friday deals" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lagree Clothing & Gear Black Friday Deals 2026",
    description: "Lagree Black Friday 2026: grip socks, fitted leggings and tops, men's kit, gloves, towels, bags and Lagree fan merch — with today's Amazon price to beat.",
    images: [HERO_IMAGE],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

// Prices are filled from live Amazon listings by the Black Friday generator.
const GUIDE: DealsGuideProps = {
  "slug": "black-friday-lagree-clothing-gear",
  "title": "Lagree Clothing & Gear Black Friday Deals 2026",
  "description": "Lagree Black Friday 2026: grip socks, fitted leggings and tops, men's kit, gloves, towels, bags and Lagree fan merch — with today's Amazon price to beat.",
  "breadcrumb": "Lagree Clothing & Gear Black Friday",
  "eyebrow": "Lagree",
  "h1": "Lagree Clothing & Gear",
  "h1Accent": "Black Friday Deals 2026",
  "readTime": "7 min read",
  "heroImage": "/pictures/stitch-grip-socks-footbar.png",
  "heroAlt": "Grip socks on a machine — Lagree clothing and gear Black Friday deals",
  "intro": "Lagree eats through grip socks, towels and fitted kit faster than almost any class — which makes Black Friday the time to stock up. Here are 16 pieces we track on Amazon for Megaformer regulars, men and women, plus the fan merch that makes an easy gift. Each one shows today's price so you can spot a real discount.",
  "sections": [
    {
      "id": "socks-hands",
      "title": "Socks, gloves and towels",
      "intro": "The consumables of Lagree — buy them in bulk when they are discounted.",
      "items": [
        {
          "asin": "B07QHNDHW3",
          "name": "toesox Low Rise Grip Socks (Full Toe, 2-Pack)",
          "badge": "Best grip socks",
          "note": "Full-toe grip socks — separate toes help you spread your foot on the platform.",
          "price": "$30.00"
        },
        {
          "asin": "B0F626LL9W",
          "name": "CoolMate Men's Grip Socks (4 Pairs)",
          "badge": "Best men's socks",
          "note": "Men's sizes 6–10 and 10–13 with silicone grip dots and arch support.",
          "price": "$14.99"
        },
        {
          "asin": "B07H4F3FXK",
          "name": "Muezna Men's Non-Slip Yoga Socks",
          "badge": "Men's single pair",
          "note": "Men's-sized grip socks so the grip covers your whole sole.",
          "price": "$19.11"
        },
        {
          "asin": "B09GPVMF86",
          "name": "TAVI Half Finger Gym Gloves",
          "badge": "Best gloves",
          "note": "Half-finger grip gloves for sweaty hands on handles and platforms.",
          "price": "$31.99"
        },
        {
          "asin": "B001VROVEM",
          "name": "Gaiam Grippy Yoga Gloves",
          "badge": "Budget gloves",
          "note": "Grippy gloves for planks on a slippery carriage.",
          "price": "$7.65"
        },
        {
          "asin": "B01K1TX77W",
          "name": "Rainleaf Microfiber Towel",
          "badge": "Sweat towel",
          "note": "A compact, quick-dry towel for you and the machine.",
          "price": "$12.99"
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
          "price": "$32.00"
        },
        {
          "asin": "B0B28B34XX",
          "name": "CRZ YOGA Butterluxe Biker Shorts 6\"",
          "badge": "Biker shorts",
          "note": "Fitted 6-inch biker shorts that don't ride up.",
          "price": "$24.00"
        },
        {
          "asin": "B0H1HK895W",
          "name": "CRZ YOGA Quick Dry Racerback Crop Tank",
          "badge": "Crop tank",
          "note": "A quick-dry crop with nothing to slide up upside down.",
          "price": "$20.00"
        },
        {
          "asin": "B0FGXVD8XD",
          "name": "IUGA Lightweight Full-Zip Workout Jacket",
          "badge": "Layer",
          "note": "Slim full-zip with thumbholes and zippered pockets.",
          "price": "$18.04"
        }
      ]
    },
    {
      "id": "men",
      "title": "Fitted kit for men",
      "intro": "Lined shorts and fitted tops — the two things men get wrong in their first class.",
      "items": [
        {
          "asin": "B08BNFYKXR",
          "name": "Pudolla Men's 2-in-1 Shorts 5\"",
          "badge": "Lined shorts",
          "note": "A 5-inch short with a compression liner and phone pocket.",
          "price": "$24.99"
        },
        {
          "asin": "B0874X72WP",
          "name": "Under Armour Men's HeatGear Compression T-Shirt",
          "badge": "Compression tee",
          "note": "A second-skin compression tee that stays put on all fours. Sold by Amazon.com.",
          "price": "$24.50"
        }
      ]
    },
    {
      "id": "merch-bags",
      "title": "Bags and fan merch",
      "intro": "For carrying it all — and for gifting. The fan designs are unofficial, not Lagree Fitness products.",
      "items": [
        {
          "asin": "B07RQHPBHC",
          "name": "Fitgriff Gym Bag with Shoe & Wet Compartment",
          "badge": "Gym bag",
          "note": "Shoe and wet compartments for sweaty kit after class.",
          "price": "$39.95"
        },
        {
          "asin": "B0CY821PTP",
          "name": "I Love Lagree Pullover Hoodie",
          "badge": "Fan hoodie",
          "note": "Unofficial fan design, sold by Amazon.com — not made or endorsed by Lagree Fitness.",
          "price": "$31.99"
        },
        {
          "asin": "B0G1KV5CTD",
          "name": "Lagree Superstar Tank Top",
          "badge": "Fan tank",
          "note": "Unofficial retro fan design, sold by Amazon.com — not affiliated with Lagree Fitness.",
          "price": "$18.99"
        },
        {
          "asin": "B0CY81GT5X",
          "name": "Women's I Love Lagree V-Neck T-Shirt",
          "badge": "Fan tee",
          "note": "Unofficial fan design, sold by Amazon.com.",
          "price": "$18.99"
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
      "h": "Check size and colour.",
      "b": "Clothing prices often vary by variant, and the deal may not cover yours."
    }
  ],
  "faqs": [
    {
      "q": "What Lagree gear is worth buying on Black Friday?",
      "a": "Grip socks, towels and fitted leggings or tops — you go through them fastest. Stock up when they are discounted."
    },
    {
      "q": "Is there official Lagree merch on Amazon?",
      "a": "Lagree Fitness's Amazon store carries only the Micro and its accessories. The 'I Love Lagree' and 'Lagree Superstar' items are unofficial fan designs."
    },
    {
      "q": "What is a good Lagree gift?",
      "a": "A grip-sock multi-pack, a sweat towel or a fan hoodie. For a bigger budget, see our Lagree gifts guide."
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
