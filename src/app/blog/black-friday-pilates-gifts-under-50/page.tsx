import type { Metadata } from "next";
import DealsGuide, { type DealsGuideProps } from "@/components/DealsGuide";

const PAGE_URL = "https://pilatescollectiveclub.com/blog/black-friday-pilates-gifts-under-50";
const HERO_IMAGE = "https://pilatescollectiveclub.com/pictures/stitch-props-cork-ring.png";

export const metadata: Metadata = {
  title: "Pilates Gifts Under $50: Black Friday 2026",
  description: "Seven Pilates gifts under $50 on an Amazon Black Friday Deal: a Pilates ring, bands, grip socks, a foam roller, and a gym tote, up to 44% off.",
  keywords: ["pilates gifts under 50", "black friday pilates gifts", "pilates gift ideas", "gifts for pilates lovers", "pilates stocking stuffers", "pilates christmas gifts", "cheap pilates gifts", "pilates gift guide 2026"],
  openGraph: {
    title: "Pilates Gifts Under $50: Black Friday 2026 Picks",
    description: "Seven Pilates gifts under $50 on an Amazon Black Friday Deal: a Pilates ring, bands, grip socks, a foam roller, and a gym tote, up to 44% off.",
    type: "article",
    url: PAGE_URL,
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: "Pilates props including a ring: Pilates gifts under $50" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilates Gifts Under $50: Black Friday 2026",
    description: "Seven Pilates gifts under $50 on an Amazon Black Friday Deal: a Pilates ring, bands, grip socks, a foam roller, and a gym tote, up to 44% off.",
    images: [HERO_IMAGE],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

// Prices are filled from live Amazon listings by the Black Friday generator.
const GUIDE: DealsGuideProps = {
  "slug": "black-friday-pilates-gifts-under-50",
  "title": "Pilates Gifts Under $50: Black Friday 2026 Picks",
  "description": "Seven Pilates gifts under $50 on an Amazon Black Friday Deal: a Pilates ring, bands, grip socks, a foam roller, and a gym tote, up to 44% off.",
  "breadcrumb": "Pilates Gifts Under $50",
  "eyebrow": "Gifts",
  "h1": "Pilates Gifts Under $50",
  "h1Accent": "Black Friday 2026 Picks",
  "readTime": "6 min read",
  "heroImage": "/pictures/stitch-props-cork-ring.png",
  "heroAlt": "Pilates props including a ring: Pilates gifts under $50",
  "intro": "Black Friday is the best moment to cross Pilates gifts off the list: small props and accessories are exactly what goes on sale. Here are seven useful gifts under $50 on an Amazon Black Friday Deal (prices checked November 24, 2026), grouped by budget. Buy early enough for delivery, and check each listing's holiday returns window.",
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
          "note": "Six pairs of closed-toe grip socks with silicone dots across the sole, in a breathable mid-weight cotton blend. Closed toes are quicker to pull on than toe socks. Medium fits women's US 5 to 8; Large fits women's 8.5 to 11 or men's 6 to 9. At about a dollar a pair, they are the cheapest way to cover a week of classes.",
          "price": "$6.79",
          "wasPrice": "$7.99",
          "wasLabel": "Was",
          "pctOff": 15,
          "amazonDeal": true
        },
        {
          "asin": "B01A58FHQ8",
          "name": "THERABAND Resistance Bands Set (Beginner Kit)",
          "badge": "Home workout",
          "note": "THERABAND's beginner kit: three 5 ft flat bands in yellow, red and green, rising from about 3 to 6.7 lb of resistance. They are non-latex, so safe for latex allergies, and they fold into a bag pocket. Good for Pilates arm series, rehab and travel workouts. Sold by Amazon.com.",
          "price": "$10.45",
          "wasPrice": "$13.71",
          "wasLabel": "List",
          "pctOff": 24,
          "amazonDeal": true
        },
        {
          "asin": "B086HNGNFZ",
          "name": "Gaiam Pilates Ring (15\")",
          "badge": "Classic prop",
          "note": "A 15\" Pilates ring, the magic circle used in most mat classes, with foam-padded dual handles. It is light and flexible, so you squeeze it between your thighs or hands for inner thigh, arm and core work. Gaiam includes a downloadable exercise guide. Sold by Amazon.com.",
          "price": "$11.13",
          "wasPrice": "$19.99",
          "wasLabel": "List",
          "pctOff": 44,
          "amazonDeal": true
        },
        {
          "asin": "B07CQM36X3",
          "name": "Ozaiic Pilates Grip Socks (Cotton, Full Cushion Sole)",
          "badge": "Cushioned socks",
          "note": "Ballet-style grip socks in combed cotton with a fully cushioned sole and a strap across the top, per the listing. The grip covers the bottom of the sock, and one size fits women's US shoe sizes 5.5 to 11. Sold by Ozaiic.",
          "price": "$11.84",
          "wasPrice": "$13.99",
          "wasLabel": "Was",
          "pctOff": 15,
          "amazonDeal": true
        }
      ]
    },
    {
      "id": "20-35",
      "title": "$20 to $35",
      "intro": "A proper upgrade they would not buy themselves.",
      "items": [
        {
          "asin": "B01BVACFAK",
          "name": "TriggerPoint CORE Foam Roller (18\")",
          "badge": "Compact roller",
          "note": "An 18\" foam roller with TriggerPoint's multi-density grid surface over a solid core, which holds its shape far longer than cheap foam rollers that soften. The short length fits in a gym bag and covers calves, quads, hips and upper back. It comes with access to TriggerPoint's free video library. Sold by Amazon.com.",
          "price": "$23.72",
          "wasPrice": "$34.99",
          "wasLabel": "List",
          "pctOff": 32,
          "amazonDeal": true
        },
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
          "asin": "B0B1VFNFL1",
          "name": "BAGSMART Gym Tote Bag 24L",
          "badge": "Studio bag",
          "note": "A lightweight 24L nylon tote (1.3 lb) with a built-in yoga mat strap, side pockets for a water bottle, and room for a 15.6\" laptop. It is big enough for a change of clothes and shoes, so it works as a work bag on class days. Sold by BAGSMART.",
          "price": "$25.06",
          "wasPrice": "$37.99",
          "wasLabel": "Was",
          "pctOff": 34,
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
      "h": "Order early.",
      "b": "Popular sizes and colors sell out, and holiday delivery slows down. Buying on Black Friday leaves time for exchanges."
    },
    {
      "h": "Check the returns window.",
      "b": "Amazon usually extends holiday returns on many items bought from November: confirm on the product page before you buy."
    }
  ],
  "faqs": [
    {
      "q": "What is a good Pilates gift under $50?",
      "a": "Grip socks, a Pilates ring, resistance bands, a foam roller or a gym tote are all useful, under $50 and on a Black Friday Deal on this page. If you are not sure what they have, a grip-sock multi-pack is the safest bet."
    },
    {
      "q": "What do you buy someone who does reformer Pilates?",
      "a": "Grip socks are the most useful: most studios require them. A sweat towel and a studio bag are good add-ons."
    },
    {
      "q": "Will these be cheaper on Black Friday?",
      "a": "They already are: all seven gifts here are on an Amazon Black Friday Deal, marked with the saving Amazon reports. The deals run through November 30."
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
