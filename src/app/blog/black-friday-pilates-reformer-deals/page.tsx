import type { Metadata } from "next";
import DealsGuide, { type DealsGuideProps } from "@/components/DealsGuide";

const PAGE_URL = "https://pilatescollectiveclub.com/blog/black-friday-pilates-reformer-deals";
const HERO_IMAGE = "https://pilatescollectiveclub.com/pictures/stitch-reformer-sunlit-minimal.png";

export const metadata: Metadata = {
  title: "Pilates Reformer Black Friday Deals 2026",
  description: "Pilates reformer Black Friday 2026: 13 home reformers from under $300 to premium studio brands, with today's Amazon price for each so you can tell a real deal on November 27.",
  keywords: ["pilates reformer black friday", "reformer black friday deal", "black friday pilates reformer 2026", "pilates machine black friday", "cyber monday pilates reformer", "pilates reformer sale", "aeropilates black friday", "balanced body black friday"],
  openGraph: {
    title: "Pilates Reformer Black Friday Deals 2026: Prices to Beat",
    description: "Pilates reformer Black Friday 2026: 13 home reformers from under $300 to premium studio brands, with today's Amazon price for each so you can tell a real deal on November 27.",
    type: "article",
    url: PAGE_URL,
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: "A home Pilates reformer in a sunlit room — reformer Black Friday deals" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilates Reformer Black Friday Deals 2026",
    description: "Pilates reformer Black Friday 2026: 13 home reformers from under $300 to premium studio brands, with today's Amazon price for each so you can tell a real deal on November 27.",
    images: [HERO_IMAGE],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

// Prices are filled from live Amazon listings by the Black Friday generator.
const GUIDE: DealsGuideProps = {
  "slug": "black-friday-pilates-reformer-deals",
  "title": "Pilates Reformer Black Friday Deals 2026: Prices to Beat",
  "description": "Pilates reformer Black Friday 2026: 13 home reformers from under $300 to premium studio brands, with today's Amazon price for each so you can tell a real deal on November 27.",
  "breadcrumb": "Reformer Black Friday Deals",
  "eyebrow": "Reformers",
  "h1": "Pilates Reformer Black Friday",
  "h1Accent": "Deals 2026: Prices to Beat",
  "readTime": "8 min read",
  "heroImage": "/pictures/stitch-reformer-sunlit-minimal.png",
  "heroAlt": "A home Pilates reformer in a sunlit room — reformer Black Friday deals",
  "intro": "A reformer is the biggest Pilates purchase most people make, which makes it the one where Black Friday matters most. Here are 13 machines we track on Amazon, grouped by budget, each with the price it sells for today. Use these numbers to judge any discount you see from mid-November to Cyber Monday.",
  "sections": [
    {
      "id": "under-500",
      "title": "Under $500",
      "intro": "Foldable spring and cord machines from newer brands and AeroPilates. Real resistance at a low price — the trade-off is brand track record and warranty.",
      "items": [
        {
          "asin": "B0D31767J1",
          "name": "WINDFOOT Foldable Pilates Reformer (Jump Board)",
          "badge": "Budget spring reformer",
          "note": "A foldable spring reformer with a jump board. Newer brand: check the warranty terms on the listing.",
          "price": "$295.99"
        },
        {
          "asin": "B0HB4J5RKX",
          "name": "DWKWE Foldable Reformer 88\"",
          "badge": "Longest budget carriage",
          "note": "An 88\" metal-frame foldable reformer with adjustable footbar, dual spring-plus-latex resistance, jump board and headrest.",
          "price": "$284.99"
        },
        {
          "asin": "B01FMODVAE",
          "name": "AeroPilates 287 Reformer",
          "badge": "Established brand, entry level",
          "note": "Stamina's entry AeroPilates with bungee-cord resistance — a known brand at a budget price.",
          "price": "$256.49"
        },
        {
          "asin": "B0DFXQX3XV",
          "name": "PAETA 86\" Foldable Reformer (Piano-Wire Springs)",
          "badge": "Best budget springs",
          "note": "PAETA's foldable reformer with piano-wire springs, sold by PAETA US.",
          "price": "$419.99"
        },
        {
          "asin": "B0G1YL9QTN",
          "name": "PAETA 86\" Foldable Reformer (Dual Resistance)",
          "badge": "Springs plus cords",
          "note": "PAETA's dual-resistance foldable model, sold by PAETA US.",
          "price": "$439.98"
        }
      ]
    },
    {
      "id": "500-1500",
      "title": "$500 to $1,500",
      "intro": "Sturdier home machines, including AeroPilates' best-selling models and wood-frame options.",
      "items": [
        {
          "asin": "B07G5J3SKS",
          "name": "AeroPilates Premier 701 Reformer",
          "badge": "Best-selling home reformer",
          "note": "The AeroPilates Premier, Stamina's popular home model with cord resistance.",
          "price": "$539.99"
        },
        {
          "asin": "B0D7M7JNFV",
          "name": "PAETA Wooden Foldable Reformer with Sitting Box",
          "badge": "Best wood frame under $1,000",
          "note": "A wooden foldable reformer with a sitting box, sold by PAETA US.",
          "price": "$719.99"
        },
        {
          "asin": "B0D2ZT4Z5H",
          "name": "DELAVIN Solid Wood Pilates Reformer",
          "badge": "Solid wood",
          "note": "A solid-wood home reformer — the look of a studio machine for less.",
          "price": "$1,249.99"
        },
        {
          "asin": "B0012TJI8S",
          "name": "AeroPilates Pro XP 557 Reformer",
          "badge": "Top AeroPilates model",
          "note": "AeroPilates' top home reformer. Stock is often limited.",
          "price": "$1,329.99"
        }
      ]
    },
    {
      "id": "premium",
      "title": "Premium and studio brands",
      "intro": "Established Pilates brands. These discount less often — a modest saving here is still a lot of money.",
      "items": [
        {
          "asin": "B09HNCMTZL",
          "name": "Balanced Body Metro IQ Reformer",
          "badge": "Balanced Body at home",
          "note": "Balanced Body's home reformer with wheelbarrow wheels for moving and storage.",
          "price": "$2,330.00"
        },
        {
          "asin": "B0GNDHZXZK",
          "name": "PersonalHour Janet La Force Plus Foldable Reformer",
          "badge": "Premium foldable",
          "note": "A walnut-frame foldable home reformer with box and jumpboard. Often low stock.",
          "price": "$2,555.00"
        },
        {
          "asin": "B099ZJ4C25",
          "name": "Align-Pilates C8-Pro Reformer",
          "badge": "Best-value pro springs",
          "note": "Professional springs and a studio-style carriage at a home price.",
          "price": "$2,750.00"
        },
        {
          "asin": "B004FGT0TM",
          "name": "Merrithew At Home SPX Reformer Package",
          "badge": "STOTT-method home machine",
          "note": "Merrithew's home reformer package, sold by Amazon.com.",
          "price": "$3,349.00"
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
      "h": "Check delivery dates.",
      "b": "Large equipment can ship with a lead time. If it is a gift, make sure it arrives before you need it."
    },
    {
      "h": "Check the returns window.",
      "b": "Amazon usually extends holiday returns on many items bought from November — confirm on the product page before you buy."
    },
    {
      "h": "Budget for accessories.",
      "b": "A box, jump board or extra springs can add a lot. A 'deal' on a bare machine may cost more than a bundle."
    }
  ],
  "faqs": [
    {
      "q": "Is Black Friday a good time to buy a Pilates reformer?",
      "a": "It can be, especially for budget and mid-range home reformers, which are discounted more often than premium studio brands. Know today's price first — that is what this page is for."
    },
    {
      "q": "Do Balanced Body or Merrithew reformers go on sale?",
      "a": "Less often and by less than budget brands. If one does drop, compare with the price we recorded here and check the delivery lead time."
    },
    {
      "q": "What is the cheapest real spring reformer?",
      "a": "Among the machines we track, the foldable reformers from WINDFOOT, DWKWE and PAETA are the lowest-priced models with real springs. They come from newer brands, so check the warranty."
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
