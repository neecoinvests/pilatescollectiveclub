import type { Metadata } from "next";
import DealsGuide, { type DealsGuideProps } from "@/components/DealsGuide";

const PAGE_URL = "https://pilatescollectiveclub.com/blog/black-friday-pilates-gifts-under-50";
const HERO_IMAGE = "https://pilatescollectiveclub.com/pictures/stitch-props-cork-ring.png";

export const metadata: Metadata = {
  title: "Pilates Gifts Under $50: Black Friday 2026",
  description: "13 Pilates gifts under $50 to buy on Black Friday 2026 — rings, mats, balls, bands, grip socks, rollers, towels and bags — with today's Amazon price to compare against.",
  keywords: ["pilates gifts under 50", "black friday pilates gifts", "pilates gift ideas", "gifts for pilates lovers", "pilates stocking stuffers", "pilates christmas gifts", "cheap pilates gifts", "pilates gift guide 2026"],
  openGraph: {
    title: "Pilates Gifts Under $50: Black Friday 2026 Picks",
    description: "13 Pilates gifts under $50 to buy on Black Friday 2026 — rings, mats, balls, bands, grip socks, rollers, towels and bags — with today's Amazon price to compare against.",
    type: "article",
    url: PAGE_URL,
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: "Pilates props including a ring — Pilates gifts under $50" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilates Gifts Under $50: Black Friday 2026",
    description: "13 Pilates gifts under $50 to buy on Black Friday 2026 — rings, mats, balls, bands, grip socks, rollers, towels and bags — with today's Amazon price to compare against.",
    images: [HERO_IMAGE],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

// Prices are filled from live Amazon listings by the Black Friday generator.
const GUIDE: DealsGuideProps = {
  "slug": "black-friday-pilates-gifts-under-50",
  "title": "Pilates Gifts Under $50: Black Friday 2026 Picks",
  "description": "13 Pilates gifts under $50 to buy on Black Friday 2026 — rings, mats, balls, bands, grip socks, rollers, towels and bags — with today's Amazon price to compare against.",
  "breadcrumb": "Pilates Gifts Under $50",
  "eyebrow": "Gifts",
  "h1": "Pilates Gifts Under $50",
  "h1Accent": "Black Friday 2026 Picks",
  "readTime": "6 min read",
  "heroImage": "/pictures/stitch-props-cork-ring.png",
  "heroAlt": "Pilates props including a ring — Pilates gifts under $50",
  "intro": "Black Friday is the best moment to cross Pilates gifts off the list: small props and accessories are exactly what goes on sale. Here are 13 useful gifts that all cost under $50 on Amazon today, grouped by budget. Buy early enough for delivery, and check each listing's holiday returns window.",
  "sections": [
    {
      "id": "under-20",
      "title": "Under $20",
      "intro": "Stocking fillers that still get used every class.",
      "items": [
        {
          "asin": "B0DQ53GSP5",
          "name": "Muezna Pilates Grip Socks (6 Pairs)",
          "badge": "Stocking filler",
          "note": "Six pairs of grip socks — the gift every studio regular runs out of.",
          "price": "$7.59"
        },
        {
          "asin": "B010TJC4IM",
          "name": "ProBody Pilates Ball (9\")",
          "badge": "Small prop",
          "note": "The small, soft ball instructors use under the pelvis or between the knees.",
          "price": "$9.95"
        },
        {
          "asin": "B01A58FHQ8",
          "name": "THERABAND Resistance Bands Set (Beginner Kit)",
          "badge": "Home workout",
          "note": "Three non-latex bands in light-to-medium resistances. Sold by Amazon.com.",
          "price": "$11.99"
        },
        {
          "asin": "B01K1TX77W",
          "name": "Rainleaf Microfiber Towel",
          "badge": "Gym-bag essential",
          "note": "A compact, quick-dry microfiber towel for the studio.",
          "price": "$12.99"
        },
        {
          "asin": "B086HNGNFZ",
          "name": "Gaiam Pilates Ring (15\")",
          "badge": "Classic prop",
          "note": "The magic circle used in most mat classes. Sold by Amazon.com.",
          "price": "$16.39"
        },
        {
          "asin": "B011NQZBAI",
          "name": "Gaiam Cargo Yoga Mat Bag",
          "badge": "Mat carrier",
          "note": "A full-zip mat bag with cargo and phone pockets. Sold by Amazon.com.",
          "price": "$19.99"
        },
        {
          "asin": "B0GSJHPSQT",
          "name": "Byrex Pilates Equipment Kit",
          "badge": "All-in-one",
          "note": "A ring, small ball, bands and sliders in one box.",
          "price": "$19.99"
        }
      ]
    },
    {
      "id": "20-35",
      "title": "$20 to $35",
      "intro": "A proper upgrade they would not buy themselves.",
      "items": [
        {
          "asin": "B09WF4GPPC",
          "name": "Gaiam Premium Yoga Mat (6mm)",
          "badge": "Home mat",
          "note": "A 6mm mat for rolling and spinal work at home. Sold by Amazon.com.",
          "price": "$21.00"
        },
        {
          "asin": "B00XM2MRGI",
          "name": "Amazon Basics High-Density Foam Roller (36\")",
          "badge": "Recovery",
          "note": "A full-length firm roller for back and leg release.",
          "price": "$24.14"
        },
        {
          "asin": "B01BVACFAK",
          "name": "TriggerPoint CORE Foam Roller (18\")",
          "badge": "Compact roller",
          "note": "A shorter roller that fits in a gym bag.",
          "price": "$24.99"
        },
        {
          "asin": "B07QHNDHW3",
          "name": "toesox Low Rise Grip Socks (Full Toe, 2-Pack)",
          "badge": "Studio favourite",
          "note": "Two pairs of full-toe grip socks from a studio staple brand.",
          "price": "$30.00"
        }
      ]
    },
    {
      "id": "35-50",
      "title": "$35 to $50",
      "intro": "The splurge — still under $50.",
      "items": [
        {
          "asin": "B0B1VFNFL1",
          "name": "BAGSMART Gym Tote Bag 24L",
          "badge": "Studio bag",
          "note": "A 24L lightweight tote with a yoga mat strap and laptop room. Sold by BAGSMART.",
          "price": "$37.99"
        },
        {
          "asin": "B0BJ2G3JNW",
          "name": "CRZ YOGA Butterluxe Jacket (Waist Length)",
          "badge": "Studio layer",
          "note": "A slim zip jacket with thumbholes for the walk to and from class.",
          "price": "$48.00"
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
      "h": "Order early.",
      "b": "Popular sizes and colours sell out, and holiday delivery slows down. Buying on Black Friday leaves time for exchanges."
    },
    {
      "h": "Check the returns window.",
      "b": "Amazon usually extends holiday returns on many items bought from November — confirm on the product page before you buy."
    }
  ],
  "faqs": [
    {
      "q": "What is a good Pilates gift under $50?",
      "a": "Grip socks, a Pilates ring, a small ball, a mat bag or a foam roller are all useful and under $50. If you are not sure what they have, a grip-sock multi-pack is the safest bet."
    },
    {
      "q": "What do you buy someone who does reformer Pilates?",
      "a": "Grip socks are the most useful — most studios require them. A sweat towel and a studio bag are good add-ons."
    },
    {
      "q": "Will these be cheaper on Black Friday?",
      "a": "Small props and accessories are often discounted around Black Friday. The prices here are today's, so you can see the saving on the day."
    }
  ],
  "guides": [
    {
      "label": "Pilates gifts under $50",
      "href": "/blog/best-pilates-gifts-under-50"
    },
    {
      "label": "Pilates Christmas gifts",
      "href": "/blog/best-pilates-christmas-gifts"
    },
    {
      "label": "Pilates starter kit",
      "href": "/blog/best-pilates-starter-kit"
    },
    {
      "label": "Pilates grip socks",
      "href": "/blog/best-pilates-grip-socks"
    }
  ]
};

export default function Page() {
  return <DealsGuide {...GUIDE} />;
}
