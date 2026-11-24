import type { Metadata } from "next";
import DealsGuide, { type DealsGuideProps } from "@/components/DealsGuide";

const PAGE_URL = "https://pilatescollectiveclub.com/blog/black-friday-pilates-clothing-deals";
const HERO_IMAGE = "https://pilatescollectiveclub.com/pictures/stitch-retail-activewear.png";

export const metadata: Metadata = {
  title: "Pilates Clothing Black Friday Deals 2026",
  description: "Pilates clothing Black Friday 2026: leggings, bras and grip socks from CRZ YOGA, toesox, TAVI and Tucketts, all on a deal.",
  keywords: ["pilates clothing black friday", "black friday leggings deals", "pilates leggings black friday", "grip socks black friday", "activewear black friday 2026", "varley black friday", "cyber monday activewear"],
  openGraph: {
    title: "Pilates Clothing Black Friday Deals 2026: Leggings, Bras & Socks",
    description: "Pilates clothing Black Friday 2026: leggings, bras and grip socks from CRZ YOGA, toesox, TAVI and Tucketts, all on a deal.",
    type: "article",
    url: PAGE_URL,
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: "Activewear on a rail: Pilates clothing Black Friday deals" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilates Clothing Black Friday Deals 2026",
    description: "Pilates clothing Black Friday 2026: leggings, bras and grip socks from CRZ YOGA, toesox, TAVI and Tucketts, all on a deal.",
    images: [HERO_IMAGE],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

// Prices are filled from live Amazon listings by the Black Friday generator.
const GUIDE: DealsGuideProps = {
  "slug": "black-friday-pilates-clothing-deals",
  "title": "Pilates Clothing Black Friday Deals 2026: Leggings, Bras & Socks",
  "description": "Pilates clothing Black Friday 2026: leggings, bras and grip socks from CRZ YOGA, toesox, TAVI and Tucketts, all on a deal.",
  "breadcrumb": "Pilates Clothing Black Friday Deals",
  "eyebrow": "Clothing",
  "h1": "Pilates Clothing Black Friday",
  "h1Accent": "Deals 2026: Leggings, Bras & Socks",
  "readTime": "7 min read",
  "heroImage": "/pictures/stitch-retail-activewear.png",
  "heroAlt": "Activewear on a rail: Pilates clothing Black Friday deals",
  "intro": "Activewear is where Black Friday discounts are deepest and most frequent. Here are the eight Pilates pieces on an Amazon Black Friday Deal on November 24, 2026 (leggings, bras and tops, and grip socks), each with the saving Amazon reports.",
  "sections": [
    {
      "id": "leggings",
      "title": "Leggings",
      "intro": "Full-length or 7/8 leggings that stay opaque in a deep squat.",
      "items": [
        {
          "asin": "B09P1G2952",
          "name": "CRZ YOGA Butterluxe Leggings 25\"",
          "badge": "Best value",
          "note": "CRZ YOGA's Butterluxe leggings are the brand's softest, stretchiest fabric, and the closest thing on Amazon to buttery studio leggings at a fraction of the price. They are high-rise with a seamless waistband, 7/8 length (a 25\" inseam that sits above the ankle) and squat-proof. Compression is very gentle, so they feel more like a second skin than a shapewear legging. Sold by CRZ YOGA.",
          "price": "$27.20",
          "wasPrice": "$32.00",
          "wasLabel": "List",
          "pctOff": 15,
          "amazonDeal": true
        },
        {
          "asin": "B07DCSM69V",
          "name": "CRZ YOGA Naked Feeling Leggings 25\"",
          "badge": "Best for hot classes",
          "note": "CRZ YOGA's Naked Feeling leggings are made for hot yoga and Pilates: a sleek, sweat-wicking fabric with a bit more compression than Butterluxe, and lint does not stick to it. They are high-rise, 7/8 length with a 25\" inseam, and have a hidden waistband pocket for a key or card. Sold by CRZ YOGA.",
          "price": "$22.10",
          "wasPrice": "$26.00",
          "wasLabel": "List",
          "pctOff": 15,
          "amazonDeal": true
        }
      ]
    },
    {
      "id": "tops",
      "title": "Sports bras and tops",
      "intro": "Fitted pieces that stay put upside down on the reformer.",
      "items": [
        {
          "asin": "B09ZP9VXLJ",
          "name": "CRZ YOGA Butterluxe U Back Sports Bra",
          "badge": "Best-value bra",
          "note": "A light-support longline sports bra in CRZ YOGA's buttery Butterluxe fabric, for A to D cups. The U-back, scoop neck and wide straps keep it in place when you are upside down on the reformer, and the pads are removable. Sold by CRZ YOGA.",
          "price": "$23.80",
          "wasPrice": "$28.00",
          "wasLabel": "List",
          "pctOff": 15,
          "amazonDeal": true
        },
        {
          "asin": "B09X9Y5S8G",
          "name": "CRZ YOGA Butterluxe Racerback Tank",
          "badge": "Fitted tank",
          "note": "A fitted racerback tank with a built-in bra and removable pads, in CRZ YOGA's ultra-soft Butterluxe fabric. It is cut tight and sits between the waist and high hip, so it does not fall over your face during inversions. Light support: layer a sports bra under it if you need more. Sold by CRZ YOGA.",
          "price": "$27.20",
          "wasPrice": "$32.00",
          "wasLabel": "List",
          "pctOff": 15,
          "amazonDeal": true
        }
      ]
    },
    {
      "id": "socks",
      "title": "Grip socks",
      "intro": "Most studios require them, and they are the easiest thing to stock up on during a sale.",
      "items": [
        {
          "asin": "B07QHNDHW3",
          "name": "toesox Low Rise Grip Socks (Full Toe, 2-Pack)",
          "badge": "Studio favorite",
          "note": "Five-toe grip socks from toesox, a grip sock brand with over 20 years in studios. The separate toes let your feet spread naturally on the reformer footbar or a Lagree platform, and the patented non-slip sole holds on wood floors and mats. The low-rise cut sits below the ankle bone, and the knit is mostly organic cotton (77% cotton). Two pairs per pack, sold by The Active Footwear Store; stock was low when we checked.",
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
          "badge": "Most stylish",
          "note": "TAVI's Stacy socks have a scrunchy slouch-sock look with a patented triangle grip sole designed with Pilates instructors. They are a closed-toe style in a certified organic cotton knit, with an arch band for support. TAVI says the grips do not peel off and the colors do not fade. Two pairs per pack, sold by The Active Footwear Store.",
          "price": "$30.40",
          "wasPrice": "$40.00",
          "wasLabel": "List",
          "pctOff": 24,
          "amazonDeal": true
        },
        {
          "asin": "B072F6QR84",
          "name": "Tucketts Toeless Grip Socks",
          "badge": "Best toeless",
          "note": "Toeless grip socks with an open-toe design, so your toes can spread and grip the footbar, and wide feet or bunions are not squeezed. They are knit left- and right-specific so they do not twist mid-class, from 70% recycled cotton. Made in Colombia by a women-owned brand. One pair (S/M fits US 6 to 9).",
          "price": "$14.99",
          "wasPrice": "$17.99",
          "wasLabel": "List",
          "pctOff": 17,
          "amazonDeal": true
        },
        {
          "asin": "B0DQ53GSP5",
          "name": "Muezna Pilates Grip Socks (6 Pairs)",
          "badge": "Best multi-pack",
          "note": "Six pairs of closed-toe grip socks with silicone dots across the sole, in a breathable mid-weight cotton blend. Closed toes are quicker to pull on than toe socks. Medium fits women's US 5 to 8; Large fits women's 8.5 to 11 or men's 6 to 9. At about a dollar a pair, they are the cheapest way to cover a week of classes.",
          "price": "$6.79",
          "wasPrice": "$7.99",
          "wasLabel": "Was",
          "pctOff": 15,
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
      "h": "Check the size and color.",
      "b": "Activewear prices on Amazon often vary by size and color, and the deal may only apply to some. Check the variant you actually want."
    },
    {
      "h": "Check the returns window.",
      "b": "Amazon usually extends holiday returns on many items bought from November: confirm on the product page before you buy."
    }
  ],
  "faqs": [
    {
      "q": "Do leggings go on sale on Black Friday?",
      "a": "Yes: activewear is one of the most discounted categories. Prices often vary by color and size, so check the exact variant you want."
    },
    {
      "q": "Are lululemon or Alo on sale on Amazon?",
      "a": "lululemon and Alo do not sell their own products on Amazon, so you will not find their official Black Friday deals there. The brands on this page sell on Amazon directly."
    },
    {
      "q": "Which grip socks are worth stocking up on?",
      "a": "A multi-pack like Muezna's six pairs covers a week of classes. For a single favorite pair, toesox and TAVI are studio staples."
    }
  ],
  "guides": [
    {
      "label": "best Pilates leggings",
      "href": "/blog/best-pilates-leggings"
    },
    {
      "label": "Pilates sports bras",
      "href": "/blog/best-pilates-sports-bra"
    },
    {
      "label": "Pilates grip socks",
      "href": "/blog/best-pilates-grip-socks"
    },
    {
      "label": "Pilates sets",
      "href": "/blog/best-pilates-sets"
    }
  ]
};

export default function Page() {
  return <DealsGuide {...GUIDE} />;
}
