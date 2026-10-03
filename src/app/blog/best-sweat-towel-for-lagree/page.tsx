import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import { jsonLdHtml } from "@/lib/schema";

const TITLE = "Best Sweat Towel for Lagree (2026): Grip & Hand Towels";
const DESCRIPTION =
  "The best sweat towel for Lagree: grip towels that cover a sweaty carriage plus quick-dry hand towels for face and handles. 5 verified Amazon picks.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "sweat towel for lagree",
    "lagree towel",
    "best towel for lagree",
    "megaformer towel",
    "gym towel lagree",
    "lagree grip towel",
    "non-slip towel megaformer",
    "quick dry gym towel",
    "hot yoga towel for lagree",
    "lagree sweat towel",
  ],
  openGraph: {
    title: TITLE,
    description: "Two towels, two jobs: a grip towel for a sweaty carriage and a quick-dry hand towel for face and handles. Five verified picks for Lagree.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-sweat-towel-for-lagree",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/stitch-water-towel-bench.png", width: 1200, height: 630, alt: "Best Sweat Towel for Lagree" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Two towels, two jobs: a grip towel for a sweaty carriage and a quick-dry hand towel for face and handles.",
    images: ["https://pilatescollectiveclub.com/pictures/stitch-water-towel-bench.png"],
  },
  alternates: {
    canonical: "https://pilatescollectiveclub.com/blog/best-sweat-towel-for-lagree",
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Manduka Yogitoes Hot Yoga Mat Towel (71\")",
    price: "$72.00",
    verdict: "Premium pick for covering the carriage or mat",
    description: "This is the towel for the second job — covering a surface rather than wiping your face. The Yogitoes is a full-length 71\" mat towel with a moisture-activated grip, which is exactly the property you want in Lagree: the sweatier the class gets, the more the towel is supposed to hold rather than skate. That matters on a Megaformer carriage, where you spend long, slow sets in plank, kneeling and bear positions with your hands and knees pressing into vinyl that gets slick fast. At 71\" it is longer than a carriage, so expect to fold it to fit, or keep it for mat and floor work at home. It is the most expensive towel here by a distance; buy it if slipping in planks is your actual problem, not as a face towel. Sold by Amazon.com.",
    affiliateUrl: "https://www.amazon.com/dp/B0D5ZR3R1M?tag=pilatescollective-20",
    tag: "Premium Pick",
  },
  {
    rank: "02",
    name: "Shandali Stickyfiber Yoga Towel (Silicone Backed, Mat Size)",
    price: "$19.99",
    verdict: "Best value grip towel",
    description: "If you want a grip towel but not a $72 one, the Shandali Stickyfiber is the sensible middle ground. The listing describes it as mat-sized with a silicone-backed underside, and that backing is the feature that counts: a plain towel laid on a carriage or mat tends to bunch and slide under a loaded hand, while a backed towel is designed to stay where you put it. For Lagree that means more confidence in long plank holds and kneeling work on a sweaty surface. As with any mat-length towel, fold it to carriage size in the studio and check the studio is happy with personal towels on the machine. A strong first purchase for anyone who wants to try a grip towel before spending more.",
    affiliateUrl: "https://www.amazon.com/dp/B011IU43WG?tag=pilatescollective-20",
    tag: "Best Value",
  },
  {
    rank: "03",
    name: "Eunzel Hot Yoga Towel with Grip Dots (2-Pack)",
    price: "$26.99",
    verdict: "Best 2-pack grip towel",
    description: "Lagree regulars who go three or four times a week run into a laundry problem before they run into a grip problem: a sweat-soaked grip towel needs washing after every class. The Eunzel listing is a 2-pack of hot yoga towels with grip dots on the underside, so one can be in the wash while the other is in your bag. Grip dots are a different design from a fully silicone-backed towel — the dots give traction at contact points rather than across the whole back — but the purpose is the same: keep the towel from sliding on a sweaty carriage or mat. For the price of two, it is the best way to cover a full week of classes without doing laundry daily.",
    affiliateUrl: "https://www.amazon.com/dp/B0F5QSYZW8?tag=pilatescollective-20",
    tag: "Best 2-Pack",
  },
  {
    rank: "04",
    name: "Rainleaf Microfiber Towel (Quick Dry, Compact)",
    price: "$12.99",
    verdict: "Best hand and face sweat towel",
    description: "This is the towel for the first job — the one you actually reach for between sets. Lagree's slow tempo and long time under tension mean the sweat builds steadily rather than in bursts, and by the second half of class it is running into your eyes and making the handles and straps slippery. A compact, quick-dry microfiber towel is the right tool: small enough to sit on the platform or drape over the frame without getting in the way of the carriage, and quick to dry so it is not still damp in your bag the next morning. Rainleaf is a simple, inexpensive version of exactly that, and the obvious pick if you only buy one towel.",
    affiliateUrl: "https://www.amazon.com/dp/B01K1TX77W?tag=pilatescollective-20",
    tag: "Best Hand Towel",
  },
  {
    rank: "05",
    name: "PackTowl Personal Ultralight Microfiber Towel",
    price: "$16.95",
    verdict: "Best ultralight towel for your bag",
    description: "PackTowl comes from the travel and outdoor world, and the Personal Ultralight is built around being light and small when packed. That suits the Lagree commute: if you go straight from work to class, or carry everything in a small tote, an ultralight microfiber towel takes up almost no room alongside your grip socks, bottle and a change of clothes. It does the same job as the Rainleaf — face, neck, hands and a quick wipe of the handles — and the choice between them is mostly about how much you care about pack size and weight. Sold by Amazon.com.",
    affiliateUrl: "https://www.amazon.com/dp/B0BL8JFYFN?tag=pilatescollective-20",
    tag: "Best Ultralight",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: TITLE,
      description: DESCRIPTION,
      url: "https://pilatescollectiveclub.com/blog/best-sweat-towel-for-lagree",
      datePublished: "2026-06-28",
      dateModified: "2026-10-02",
      image: "https://pilatescollectiveclub.com/pictures/stitch-water-towel-bench.png",
      author: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com" },
      publisher: { "@type": "Organization", name: "Pilates Collective Club", url: "https://pilatescollectiveclub.com", logo: { "@type": "ImageObject", url: "https://pilatescollectiveclub.com/logo.png" } },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-sweat-towel-for-lagree" },
    },
    {
      "@type": "ItemList",
      name: "Best Sweat Towel for Lagree (2026)",
      numberOfItems: PRODUCTS.length,
      itemListElement: PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Product",
          name: p.name,
          description: p.description,
          offers: { "@type": "Offer", priceCurrency: "USD", price: p.price.replace(/[^0-9.]/g, ""), availability: "https://schema.org/InStock", url: p.affiliateUrl },
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", position: 3, name: "Best Sweat Towel for Lagree", item: "https://pilatescollectiveclub.com/blog/best-sweat-towel-for-lagree" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do I need a towel for Lagree?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Lagree is slow, continuous and built on long time under tension, so most people sweat heavily from the first few minutes to the last. A small towel keeps sweat out of your eyes and off the handles and straps, and many regulars add a grip towel over the carriage for plank and kneeling work. Studio policies on towels vary, so ask whether towels are provided before your first class." },
        },
        {
          "@type": "Question",
          name: "Do Lagree studios provide towels?",
          acceptedAnswer: { "@type": "Answer", text: "Some do and some do not, and some offer towels to rent or buy at the front desk. Because it varies by studio, check before your first class. Even where small towels are provided, a grip towel for the carriage is usually something you bring yourself." },
        },
        {
          "@type": "Question",
          name: "What is the difference between a sweat towel and a grip towel?",
          acceptedAnswer: { "@type": "Answer", text: "A sweat towel is a small, absorbent, quick-dry towel for your face, neck and hands, and for wiping the handles between sets. A grip towel is a full-length towel with a silicone or grip-dot underside that you lay over the carriage or mat so your hands and knees do not slide on a sweaty surface. They do different jobs, and many Lagree regulars carry one of each." },
        },
        {
          "@type": "Question",
          name: "Can I put a grip towel on a Megaformer carriage?",
          acceptedAnswer: { "@type": "Answer", text: "Often, but check with your studio first, as some prefer nothing loose on the carriage. Mat-length towels are longer than a carriage, so fold the towel to fit and make sure it lies flat with no loose edge hanging toward the rails or springs. A towel with a backed or dotted underside is designed to stay put; a plain towel laid flat is more likely to bunch and slide." },
        },
        {
          "@type": "Question",
          name: "Is microfiber better than cotton for a Lagree towel?",
          acceptedAnswer: { "@type": "Answer", text: "For a towel that lives in a gym bag, generally yes. Microfiber is thin, light and dries faster than a thick cotton towel, so it packs smaller and is less likely to be damp when you next reach for it. Cotton feels softer against skin but is bulkier and slower to dry, which is a nuisance if you take class several times a week." },
        },
      ],
    },
  ],
};

export default function BestSweatTowelForLagreePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex gap-2 mb-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide" style={{ backgroundColor: "#f0ebe8", color: "#5c4a3d" }}>Studio Essentials</span>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide" style={{ backgroundColor: "#f0ebe8", color: "#5c4a3d" }}>Lagree</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: "#2d1f17" }}>
              Best Sweat Towel for Lagree (2026): Grip Towels &amp; Hand Towels
            </h1>
            <p className="text-sm mb-6" style={{ color: "#9e8a7e" }}>Updated October 2026 · 8 min read</p>
            <div className="p-4 rounded-xl mb-8 text-sm" style={{ backgroundColor: "#f0ebe8", color: "#7a6358" }}>
              <strong>Affiliate disclosure:</strong> Product links on this page go to Amazon, and we may earn a commission on qualifying purchases at no extra cost to you. Listings and prices were checked on Amazon on October 2, 2026 and can change. Our picks are based on the listing details and on how each towel suits Lagree.
            </div>
            <hr style={{ borderColor: "#e8e0db" }} className="mb-8" />
            <p className="text-lg leading-relaxed mb-6" style={{ color: "#5c4a3d" }}>
              Lagree generates more sweat per class than almost any other studio format. The tempo is slow, the sets are long and the muscles never really get a break, so instead of a burst of sweat at the end you get a steady build that has soaked your hands, face and the carriage by the halfway point. A towel is not an afterthought in this method; it is part of the kit.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "#5c4a3d" }}>
              The mistake most people make is buying one towel and expecting it to do two different jobs. Below we explain the difference, then pick five towels that cover both — two quick-dry hand towels for your face and the handles, and three grip towels for covering a sweaty carriage or mat.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
              <Image src="/pictures/stitch-water-towel-bench.png" alt="Studio sweat towel and water bottle for Lagree fitness" fill className="object-cover" style={{ filter: "brightness(0.85)" }} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl p-6 mb-12" style={{ backgroundColor: "#fcf9f8", border: "1px solid #e8e0db" }}>
              <h2 className="text-lg font-bold mb-4" style={{ color: "#2d1f17" }}>Quick Picks</h2>
              <ul className="space-y-2 text-sm" style={{ color: "#5c4a3d" }}>
                {PRODUCTS.map((p) => (
                  <li key={p.rank} className="flex gap-3">
                    <span className="font-bold" style={{ color: "#c4956a", minWidth: "28px" }}>{p.rank}</span>
                    <span><a href={p.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow" className="font-semibold hover:underline" style={{ color: "#2d1f17" }}>{p.name}</a> — {p.verdict} <span style={{ color: "#9e8a7e" }}>({p.price})</span></span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#2d1f17" }}>One towel or two? The two jobs a Lagree towel does</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#5c4a3d" }}>
                <strong>Job one is wiping sweat.</strong> Your face, neck and hands get wet within minutes, and wet hands are a problem on a Megaformer because so much of the work runs through the handles and straps. A small, absorbent, quick-dry towel that you can grab during a transition and set down on the platform is what you need here. Microfiber is the usual choice because it is thin, light and dries quickly, so it fits in a small bag and is not still damp the next day.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#5c4a3d" }}>
                <strong>Job two is grip on the surface.</strong> Lagree spends a lot of time in planks, bear holds, kneeling lunges and other positions where your hands or knees press into the carriage while it moves under spring tension. Sweat on vinyl is slippery. A grip towel — full length, with a silicone-backed or dotted underside — goes over the carriage or mat and gives your hands and knees a surface that is designed to stay put as it gets wet. A plain gym towel laid flat does this badly: it bunches, slides and can leave a loose corner near the rails.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#5c4a3d" }}>
                If you only buy one, buy a hand towel — every Lagree class needs one. Add a grip towel if you notice your hands sliding in planks, or if your studio does not provide anything for the carriage. Before laying anything on the machine, ask your studio whether personal towels on the carriage are allowed.
              </p>
            </div>

            {PRODUCTS.map((p) => (
              <div key={p.rank} className="mb-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl font-black" style={{ color: "#e8e0db" }}>{p.rank}</span>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#f0ebe8", color: "#c4956a" }}>{p.tag}</span>
                </div>
                <ProductCard name={p.name} description={p.description} price={p.price} affiliateUrl={p.affiliateUrl} />
              </div>
            ))}

            <div className="rounded-2xl p-6 mb-12" style={{ backgroundColor: "#fcf9f8", border: "1px solid #e8e0db" }}>
              <h2 className="text-lg font-bold mb-3" style={{ color: "#2d1f17" }}>Not Lagree-specific? That&apos;s fine</h2>
              <p className="text-base leading-relaxed" style={{ color: "#5c4a3d" }}>
                None of these towels is made for Lagree, and you will not find a towel that is. Hot yoga towels and travel microfiber towels happen to solve the exact problems a Megaformer class creates — heavy sweat, slippery hands and a slick surface under planks and kneeling work. What matters is matching the towel to the job, not the label on it.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#2d1f17" }}>How to choose a towel for Lagree</h2>
              <ul className="space-y-3 text-base leading-relaxed" style={{ color: "#5c4a3d" }}>
                <li><strong>Size to the job.</strong> A hand towel should be small enough to sit on the platform or frame without drifting into the carriage&apos;s path. A grip towel should cover where your hands and knees land; a mat-length towel will need folding on a carriage.</li>
                <li><strong>Check the underside of a grip towel.</strong> Silicone backing and grip dots are both designed to stop the towel sliding. A plain towel has neither and is the one most likely to bunch mid-set.</li>
                <li><strong>Plan for laundry.</strong> A towel used in a Lagree class needs washing afterwards. If you go several times a week, a 2-pack or a second towel saves you washing every day.</li>
                <li><strong>Keep edges tidy.</strong> On a moving carriage, fold any overhang under rather than letting it hang toward the rails, springs or wheels.</li>
                <li><strong>Think about your bag.</strong> If you commute to class, a light, compact microfiber towel takes up far less room than a thick cotton one and dries faster afterwards.</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#2d1f17" }}>Frequently Asked Questions</h2>
              <div className="space-y-6">
                {(jsonLd["@graph"][3] as { mainEntity: { name: string; acceptedAnswer: { text: string } }[] }).mainEntity.map((faq) => (
                  <div key={faq.name}>
                    <h3 className="font-semibold mb-2" style={{ color: "#2d1f17" }}>{faq.name}</h3>
                    <p className="text-base leading-relaxed" style={{ color: "#5c4a3d" }}>{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#2d1f17" }}>Further Reading</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <ArticleCard
                  title="Lagree Essentials (2026): What to Wear, Bring & Buy"
                  excerpt="The complete kit list for Lagree — clothing, grip socks, towels and what to pack for your first class."
                  href="/blog/lagree-essentials"
                  category="Lagree"
                  readTime="10 min"
                  date="2026-10-02"
                  imageUrl="/pictures/stitch-reformer-row-studio.png"
                />
                <ArticleCard
                  title="Best Grip Socks for Lagree (2026)"
                  excerpt="Full-toe, toeless and multi-pack grip socks for a sweaty Megaformer carriage and platforms."
                  href="/blog/best-lagree-grip-socks"
                  category="Lagree"
                  readTime="8 min"
                  date="2026-10-02"
                  imageUrl="/pictures/stitch-grip-socks-footbar.png"
                />
                <ArticleCard
                  title="Best Bag for Lagree (2026)"
                  excerpt="Gym bags with wet and shoe compartments — room for a towel, bottle and a change of clothes."
                  href="/blog/best-lagree-bag"
                  category="Lagree"
                  readTime="8 min"
                  date="2026-10-02"
                  imageUrl="/pictures/stitch-studio-bench-towels.png"
                />
                <ArticleCard
                  title="Best Yoga Mat Towel for Pilates (2026)"
                  excerpt="Non-slip mat towels that turn a sweaty mat or carriage into a stable surface."
                  href="/blog/best-yoga-mat-towel-for-pilates"
                  category="Equipment"
                  readTime="6 min"
                  date="2026-06-28"
                  imageUrl="/pictures/roxana-popovici-lKe5jm-Sypw-unsplash.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="Find a Lagree studio near you"
          subtitle="Use our curated city guides to discover the best Lagree Fitness and Pilates studios in your area."
          showSearch
          searchPlaceholder="Ask: best Lagree studios in Miami..."
        />
      </main>
      <Footer />
    </>
  );
}
