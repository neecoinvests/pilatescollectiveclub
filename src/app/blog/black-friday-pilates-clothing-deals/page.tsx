import type { Metadata } from "next";
import DealsGuide, { type DealsGuideProps } from "@/components/DealsGuide";

const PAGE_URL = "https://pilatescollectiveclub.com/blog/black-friday-pilates-clothing-deals";
const HERO_IMAGE = "https://pilatescollectiveclub.com/pictures/stitch-retail-activewear.png";

export const metadata: Metadata = {
  title: "Pilates Clothing Black Friday Deals 2026",
  description: "Pilates clothing Black Friday 2026: leggings, sports bras, tops, grip socks and layers from CRZ YOGA, Varley, Sweaty Betty, toesox and TAVI — with today's Amazon price to beat.",
  keywords: ["pilates clothing black friday", "black friday leggings deals", "pilates leggings black friday", "grip socks black friday", "activewear black friday 2026", "varley black friday", "sweaty betty black friday", "cyber monday activewear"],
  openGraph: {
    title: "Pilates Clothing Black Friday Deals 2026: Leggings, Bras & Socks",
    description: "Pilates clothing Black Friday 2026: leggings, sports bras, tops, grip socks and layers from CRZ YOGA, Varley, Sweaty Betty, toesox and TAVI — with today's Amazon price to beat.",
    type: "article",
    url: PAGE_URL,
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: "Activewear on a rail — Pilates clothing Black Friday deals" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilates Clothing Black Friday Deals 2026",
    description: "Pilates clothing Black Friday 2026: leggings, sports bras, tops, grip socks and layers from CRZ YOGA, Varley, Sweaty Betty, toesox and TAVI — with today's Amazon price to beat.",
    images: [HERO_IMAGE],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

// Prices are filled from live Amazon listings by the Black Friday generator.
const GUIDE: DealsGuideProps = {
  "slug": "black-friday-pilates-clothing-deals",
  "title": "Pilates Clothing Black Friday Deals 2026: Leggings, Bras & Socks",
  "description": "Pilates clothing Black Friday 2026: leggings, sports bras, tops, grip socks and layers from CRZ YOGA, Varley, Sweaty Betty, toesox and TAVI — with today's Amazon price to beat.",
  "breadcrumb": "Pilates Clothing Black Friday Deals",
  "eyebrow": "Clothing",
  "h1": "Pilates Clothing Black Friday",
  "h1Accent": "Deals 2026: Leggings, Bras & Socks",
  "readTime": "7 min read",
  "heroImage": "/pictures/stitch-retail-activewear.png",
  "heroAlt": "Activewear on a rail — Pilates clothing Black Friday deals",
  "intro": "Activewear is where Black Friday discounts are deepest and most frequent. Here are 16 Pilates pieces we track on Amazon — leggings, bras and tops, grip socks and layers — each with today's price, so you can tell a genuine markdown from a recycled 'was' price.",
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
          "note": "CRZ YOGA's softest, stretchiest fabric — the closest Amazon equivalent to buttery studio leggings.",
          "price": "$32.00"
        },
        {
          "asin": "B07DCRMWXT",
          "name": "CRZ YOGA Naked Feeling Leggings 25\"",
          "badge": "Best for hot classes",
          "note": "High-rise, sweat-wicking, with a hidden waistband pocket. Designed for hot yoga or Pilates.",
          "price": "$26.00"
        },
        {
          "asin": "B0CTCFMDMJ",
          "name": "HeyNuts Pure&Plain Workout Pro 1.0 Leggings 25\"",
          "badge": "Best budget",
          "note": "A 25-inch full-length legging at a budget price.",
          "price": "$19.99"
        },
        {
          "asin": "B0B153HHKD",
          "name": "Sweaty Betty Power Cropped Leggings",
          "badge": "Premium, sold by Amazon",
          "note": "Sweat-wicking, quick-drying, with sculpting seams, a side pocket and a back zip pocket. Sold by Amazon.com.",
          "price": "$98.00"
        },
        {
          "asin": "B0FXN378H8",
          "name": "Varley Freesoft Piped Full Leggings",
          "badge": "Premium",
          "note": "Varley's soft Freesoft fabric with contrast piping, sold by Shopbop (an Amazon company).",
          "price": "$98.00"
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
          "note": "A Butterluxe U-back bra for low-impact training.",
          "price": "$28.00"
        },
        {
          "asin": "B0BSB22J5P",
          "name": "Sweaty Betty Power Medium Racer Back Bra",
          "badge": "Premium bra",
          "note": "Medium impact with removable pads and an adjustable T-bar strap. Sold by Amazon.com.",
          "price": "$68.00"
        },
        {
          "asin": "B0FXN42JWR",
          "name": "Varley Freesoft Harley Bralette",
          "badge": "Premium bralette",
          "note": "A light-support Freesoft bralette that matches the Varley leggings. Sold by Shopbop.",
          "price": "$66.00"
        },
        {
          "asin": "B09X9Y5S8G",
          "name": "CRZ YOGA Butterluxe Racerback Tank",
          "badge": "Fitted tank",
          "note": "A fitted racerback tank in Butterluxe fabric.",
          "price": "$32.00"
        },
        {
          "asin": "B0FP3MWK1Z",
          "name": "Varley Marla Button Placket Tank",
          "badge": "Studio-to-street tank",
          "note": "A fitted tank with a button placket. Sold by Shopbop.",
          "price": "$89.60"
        }
      ]
    },
    {
      "id": "socks",
      "title": "Grip socks",
      "intro": "Most studios require them — and they are the easiest thing to stock up on during a sale.",
      "items": [
        {
          "asin": "B07QHNDHW3",
          "name": "toesox Low Rise Grip Socks (Full Toe, 2-Pack)",
          "badge": "Studio favourite",
          "note": "Full-toe grip socks with a non-slip sole, in an organic cotton blend.",
          "price": "$30.00"
        },
        {
          "asin": "B0GFPGMWWS",
          "name": "TAVI Stacy Slouch Pilates Socks (2-Pack)",
          "badge": "Most stylish",
          "note": "Slouchy closed-toe grip socks from TAVI.",
          "price": "$40.00"
        },
        {
          "asin": "B072F6QR84",
          "name": "Tucketts Toeless Grip Socks",
          "badge": "Best toeless",
          "note": "Toeless grip socks — for people who dislike socks over their toes.",
          "price": "$18.99"
        },
        {
          "asin": "B0DQ53GSP5",
          "name": "Muezna Pilates Grip Socks (6 Pairs)",
          "badge": "Best multi-pack",
          "note": "Six pairs of grip socks — a week of classes without laundry.",
          "price": "$7.59"
        }
      ]
    },
    {
      "id": "layers",
      "title": "Layers",
      "intro": "The warm-up layer you wear to and from class.",
      "items": [
        {
          "asin": "B0BJ2G3JNW",
          "name": "CRZ YOGA Butterluxe Jacket (Waist Length)",
          "badge": "Best-value layer",
          "note": "Slim-fit, waist-length zip jacket with thumbholes and zip pockets.",
          "price": "$48.00"
        },
        {
          "asin": "B0DFZPBZDV",
          "name": "Varley Davidson Sweat",
          "badge": "Premium layer",
          "note": "Varley's relaxed sweatshirt for after class.",
          "price": "$138.00"
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
      "h": "Check the size and colour.",
      "b": "Activewear prices on Amazon often vary by size and colour, and the deal may only apply to some. Check the variant you actually want."
    },
    {
      "h": "Check the returns window.",
      "b": "Amazon usually extends holiday returns on many items bought from November — confirm on the product page before you buy."
    }
  ],
  "faqs": [
    {
      "q": "Do leggings go on sale on Black Friday?",
      "a": "Yes — activewear is one of the most discounted categories. Prices often vary by colour and size, so check the exact variant you want."
    },
    {
      "q": "Are lululemon or Alo on sale on Amazon?",
      "a": "lululemon and Alo do not sell their own products on Amazon, so you will not find their official Black Friday deals there. The brands on this page sell on Amazon directly or through Amazon-owned Shopbop."
    },
    {
      "q": "Which grip socks are worth stocking up on?",
      "a": "A multi-pack like Muezna's six pairs covers a week of classes. For a single favourite pair, toesox and TAVI are studio staples."
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
