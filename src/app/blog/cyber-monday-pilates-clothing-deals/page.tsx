import type { Metadata } from "next";
import DealsGuide, { type DealsGuideProps } from "@/components/DealsGuide";

export const metadata: Metadata = {
  "title": "Cyber Monday Pilates Clothing Deals 2026: Leggings & Socks",
  "description": "Cyber Monday 2026 Pilates clothing deals on Amazon: leggings, sports bras, tanks, layers, grip socks and bags from CRZ YOGA, Varley, Sweaty Betty and toesox.",
  "keywords": [
    "cyber monday pilates clothing",
    "cyber monday leggings deals",
    "pilates leggings sale",
    "grip socks deal",
    "varley cyber monday",
    "sweaty betty cyber monday",
    "what to wear to pilates"
  ],
  "openGraph": {
    "title": "Cyber Monday Pilates Clothing Deals 2026: Leggings & Socks",
    "description": "Cyber Monday 2026 Pilates clothing deals on Amazon: leggings, sports bras, tanks, layers, grip socks and bags from CRZ YOGA, Varley, Sweaty Betty and toesox.",
    "type": "article",
    "url": "https://pilatescollectiveclub.com/blog/cyber-monday-pilates-clothing-deals",
    "images": [
      {
        "url": "https://pilatescollectiveclub.com/pictures/stitch-retail-activewear.png",
        "width": 1200,
        "height": 630,
        "alt": "Activewear on a rail in a studio shop"
      }
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Cyber Monday Pilates Clothing Deals 2026: Leggings & Socks",
    "description": "Cyber Monday 2026 Pilates clothing deals on Amazon: leggings, sports bras, tanks, layers, grip socks and bags from CRZ YOGA, Varley, Sweaty Betty and toesox.",
    "images": [
      "https://pilatescollectiveclub.com/pictures/stitch-retail-activewear.png"
    ]
  },
  "alternates": {
    "canonical": "https://pilatescollectiveclub.com/blog/cyber-monday-pilates-clothing-deals"
  },
  "robots": {
    "index": true,
    "follow": true,
    "max-image-preview": "large",
    "max-snippet": -1
  }
};

// Prices are the live Amazon prices checked on November 24, 2026 (Creators API), with Amazon's deal badges.
const GUIDE: DealsGuideProps = {
  "slug": "cyber-monday-pilates-clothing-deals",
  "title": "Cyber Monday Pilates Clothing Deals 2026",
  "description": "Cyber Monday 2026 Pilates clothing deals on Amazon: leggings, sports bras, tanks, layers, grip socks and bags from CRZ YOGA, Varley, Sweaty Betty and toesox.",
  "breadcrumb": "Cyber Monday Clothing Deals",
  "eyebrow": "Clothing",
  "h1": "Cyber Monday Pilates Clothing Deals",
  "h1Accent": "2026: What to Wear and Bring",
  "readTime": "8 min read",
  "heroImage": "/pictures/stitch-retail-activewear.png",
  "heroAlt": "Activewear on a rail in a studio shop",
  "intro": "Activewear is a popular Cyber Monday category. For Pilates, the essentials are fitted leggings, a supportive bra or tank, a warm layer and, for reformer classes, grip socks. Here is the best of each at every budget, with Amazon's current price; ten are on an Amazon Black Friday Deal, which runs through Cyber Monday.",
  "sections": [
    {
      "id": "leggings",
      "title": "Leggings",
      "intro": "Fitted and squat-proof, so an instructor can see your alignment.",
      "items": [
        {
          "asin": "B0CTCFMDMJ",
          "name": "HeyNuts Pure&Plain Workout Leggings 25\"",
          "badge": "Best budget",
          "note": "Simple 25-inch leggings at a low price.",
          "price": "$19.99",
          "wasPrice": "$32.00",
          "wasLabel": "List",
          "pctOff": 38
        },
        {
          "asin": "B09P1G2952",
          "name": "CRZ YOGA Butterluxe Leggings 25\"",
          "badge": "Best value",
          "note": "Buttery-soft leggings that many people buy in several colors.",
          "price": "$27.20",
          "wasPrice": "$32.00",
          "wasLabel": "List",
          "pctOff": 15,
          "amazonDeal": true
        },
        {
          "asin": "B0B153HHKD",
          "name": "Sweaty Betty Power Cropped Leggings",
          "badge": "Best for sweaty classes",
          "note": "Sweaty Betty's sweat-wicking cropped leggings.",
          "price": "$98.00"
        },
        {
          "asin": "B07663TDHG",
          "name": "Beyond Yoga Spacedye Caught in the Midi Leggings",
          "badge": "Best high-waisted",
          "note": "Beyond Yoga's high-waisted midi leggings.",
          "price": "$51.97",
          "wasPrice": "$99.00",
          "wasLabel": "List",
          "pctOff": 48,
          "amazonDeal": true
        }
      ]
    },
    {
      "id": "tops",
      "title": "Bras, tanks and layers",
      "intro": "Close-fitting tops stay put when you roll and invert.",
      "items": [
        {
          "asin": "B09ZP9VXLJ",
          "name": "CRZ YOGA Butterluxe U Back Sports Bra",
          "badge": "Best budget bra",
          "note": "A soft U-back sports bra.",
          "price": "$23.80",
          "wasPrice": "$28.00",
          "wasLabel": "List",
          "pctOff": 15,
          "amazonDeal": true
        },
        {
          "asin": "B0BSB22J5P",
          "name": "Sweaty Betty Power Medium Racer Back Bra",
          "badge": "Best support",
          "note": "Sweaty Betty's medium-support racerback bra.",
          "price": "$59.93",
          "wasPrice": "$68.00",
          "wasLabel": "List",
          "pctOff": 12
        },
        {
          "asin": "B0FXN42JWR",
          "name": "Varley Freesoft Harley Bralette",
          "badge": "Best premium bralette",
          "note": "Varley's Freesoft bralette.",
          "price": "$66.00"
        },
        {
          "asin": "B09X9Y5S8G",
          "name": "CRZ YOGA Butterluxe Racerback Tank",
          "badge": "Best tank",
          "note": "A racerback tank with a built-in bra.",
          "price": "$27.20",
          "wasPrice": "$32.00",
          "wasLabel": "List",
          "pctOff": 15,
          "amazonDeal": true
        },
        {
          "asin": "B0BJ2G3JNW",
          "name": "CRZ YOGA Butterluxe Jacket",
          "badge": "Best layer",
          "note": "A soft, waist-length jacket for the walk to class.",
          "price": "$40.80"
        },
        {
          "asin": "B0DFZPBZDV",
          "name": "Varley Davidson Sweat",
          "badge": "Best premium layer",
          "note": "Varley's Davidson sweatshirt.",
          "price": "$138.00"
        }
      ]
    },
    {
      "id": "socks-bag",
      "title": "Grip socks and what to bring",
      "intro": "Most reformer studios require grip socks. A bag, bottle and towel cover the rest.",
      "items": [
        {
          "asin": "B0DQ53GSP5",
          "name": "Muezna Pilates Grip Socks (6 Pairs)",
          "badge": "Best multipack",
          "note": "Six pairs of grip socks for regular classes.",
          "price": "$6.79",
          "wasPrice": "$7.99",
          "wasLabel": "Was",
          "pctOff": 15,
          "amazonDeal": true
        },
        {
          "asin": "B07QHNDHW3",
          "name": "toesox Low Rise Grip Socks (2-Pack)",
          "badge": "Best full-toe",
          "note": "toesox's full-toe grip socks, 2-pack.",
          "price": "$25.50",
          "wasPrice": "$30.00",
          "wasLabel": "List",
          "pctOff": 15,
          "amazonDeal": true,
          "lowStock": true
        },
        {
          "asin": "B0GFPGMWWS",
          "name": "TAVI Stacy Slouch Pilates Socks (2-Pack)",
          "badge": "Best style",
          "note": "TAVI's slouch Pilates socks, 2-pack.",
          "price": "$30.40",
          "wasPrice": "$40.00",
          "wasLabel": "List",
          "pctOff": 24,
          "amazonDeal": true
        },
        {
          "asin": "B0F626LL9W",
          "name": "CoolMate Men's Grip Socks (4 Pairs)",
          "badge": "Best for men",
          "note": "Four pairs of men's grip socks.",
          "price": "$12.10",
          "wasPrice": "$14.99",
          "wasLabel": "Was",
          "pctOff": 19,
          "amazonDeal": true
        },
        {
          "asin": "B0BZYCJK89",
          "name": "Owala FreeSip Water Bottle (24 oz)",
          "badge": "Best bottle",
          "note": "A leak-resistant insulated bottle that fits a bag pocket.",
          "price": "$24.00",
          "wasPrice": "$29.99",
          "wasLabel": "List",
          "pctOff": 20
        },
        {
          "asin": "B0B1VFNFL1",
          "name": "BAGSMART Gym Tote Bag",
          "badge": "Best bag",
          "note": "A tote with room for a mat, shoes and a change of clothes.",
          "price": "$25.06",
          "wasPrice": "$37.99",
          "wasLabel": "Was",
          "pctOff": 34,
          "amazonDeal": true
        },
        {
          "asin": "B07CQM36X3",
          "name": "Ozaiic Pilates Grip Socks (Cotton, Full Cushion Sole)",
          "badge": "Best cotton socks",
          "note": "Ballet-style grip socks in combed cotton with a fully cushioned sole and a strap across the top, per the listing. The grip covers the bottom of the sock, and one size fits women's US shoe sizes 5.5 to 11. Sold by Ozaiic.",
          "price": "$11.84",
          "wasPrice": "$13.99",
          "wasLabel": "Was",
          "pctOff": 15,
          "amazonDeal": true
        }
      ]
    }
  ],
  "watchFor": [
    {
      "h": "Check what the saving is measured against.",
      "b": "Each product shows its Amazon price on November 24, 2026, plus the List or Was price Amazon compares it with. 'Was' is Amazon's recent selling price; 'List' is set by the seller and can be higher than the item usually sells for."
    },
    {
      "h": "Black Friday and Cyber Monday often overlap.",
      "b": "Many deals start before Black Friday and run through Cyber Monday. If the price is good on Friday, there is little reason to wait."
    },
    {
      "h": "Check stock and lead times.",
      "b": "Some machines are low in stock or ship after a lead time. If it is a gift, check the delivery estimate before you buy."
    },
    {
      "h": "Check the returns window.",
      "b": "Amazon usually extends holiday returns on many items bought from November. Confirm on the product page before you buy."
    },
    {
      "h": "Check the size guide.",
      "b": "Sizing varies between brands. Check each listing's size chart, especially for grip socks."
    }
  ],
  "faqs": [
    {
      "q": "When is Cyber Monday 2026?",
      "a": "Cyber Monday is Monday, November 30, 2026, three days after Black Friday on Friday, November 27. Many retailers, including Amazon, usually start holiday sales earlier in November."
    },
    {
      "q": "Are these Cyber Monday prices?",
      "a": "Partly. Amazon's Black Friday and Cyber Monday event started on November 19 and runs through November 30, 2026. Items marked Black Friday Deal show Amazon's event price on November 24; the others show their regular Amazon price that day. Prices can change at any time, so check the listing before you buy."
    },
    {
      "q": "What should I wear to a Pilates class?",
      "a": "Fitted leggings and a close-fitting top or bra, so your instructor can see your alignment and nothing rides up when you roll. Most reformer studios also require grip socks."
    },
    {
      "q": "What should I bring to Pilates?",
      "a": "Grip socks, a water bottle and a small towel. A mat if your class is mat-based and the studio does not provide one, and a bag to carry it all."
    }
  ],
  "guides": [
    {
      "label": "what to bring to the studio",
      "href": "/blog/pilates-studio-bag-essentials"
    },
    {
      "label": "best grip socks",
      "href": "/blog/best-pilates-grip-socks"
    },
    {
      "label": "Black Friday clothing deals",
      "href": "/blog/black-friday-pilates-clothing-deals"
    }
  ],
  "season": "cyber-monday",
  "datePublished": "2026-10-14"
};

export default function Page() {
  return <DealsGuide {...GUIDE} />;
}
