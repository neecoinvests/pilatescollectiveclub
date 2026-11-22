import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import QuickPicks from "@/components/QuickPicks";
import TopPick from "@/components/TopPick";
import AffiliateNote from "@/components/AffiliateNote";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import { jsonLdHtml } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Best Heart Rate Monitor for Pilates & Spin (2026)",
  description: "The best heart rate monitor chest straps for Pilates, Lagree and spin: Polar, CooSpo and more compared for accuracy, price and Peloton and Zwift support.",
  keywords: ["best heart rate monitor 2026", "heart rate monitor for pilates", "heart rate monitor for spin class", "polar h10 review", "polar h9 review", "chest strap heart rate monitor", "best chest strap heart rate", "heart rate monitor peloton compatible"],
  openGraph: {
    title: "Best Heart Rate Monitor for Pilates & Spin (2026)",
    description: "Chest strap heart rate monitors compared for accuracy, price, and app compatibility.",
    type: "article",
    url: "https://pilatescollectiveclub.com/blog/best-heart-rate-monitor-for-pilates-and-spin",
    images: [{ url: "https://pilatescollectiveclub.com/pictures/elena-kloppenburg-erUC4fTtCuo-unsplash.jpg", width: 1200, height: 630, alt: "Best Heart Rate Monitor for Pilates and Spin 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Heart Rate Monitor for Pilates & Spin (2026)",
    description: "Chest strap heart rate monitors compared for Pilates, Lagree, and spin class training.",
    images: ["https://pilatescollectiveclub.com/pictures/elena-kloppenburg-erUC4fTtCuo-unsplash.jpg"],
  },
  alternates: { canonical: "https://pilatescollectiveclub.com/blog/best-heart-rate-monitor-for-pilates-and-spin" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const PRODUCTS = [
  {
    rank: "01",
    name: "Polar H10 Heart Rate Monitor Chest Strap",
    price: "$104.65",
    verdict: "Best overall accuracy",
    description:
      "The Polar H10 is widely regarded as the gold standard among consumer heart rate chest straps, and it's the most expensive option here for that reason. It's sold directly by Amazon.com rather than a third-party listing, which is worth knowing if that matters to you when buying hardware you'll wear against your skin. For Lagree and spin training, where heart rate accuracy during rapid intensity changes genuinely matters for zone-based programming, the H10 is the clear premium pick: the strap you buy once and don't think about again.",
    affiliateUrl: "https://www.amazon.com/dp/B07PM54P4N?tag=pilatescollective-20",
    tag: "Best Overall Accuracy",
  },
  {
    rank: "02",
    name: "COOSPO H6 Heart Rate Monitor Chest Strap",
    price: "$25.49",
    verdict: "Best budget pick",
    description:
      "The COOSPO H6 is the most affordable chest strap on this list and a sensible starting point if you just want a reliable strap for tracking zones in class without paying premium pricing. Like the pricier options here, it supports both Bluetooth and ANT+, so it pairs with a phone app and a bike console or Pilates equipment display at the same time. For practitioners who mainly want to see their heart rate zone in class rather than chase the last percentage point of accuracy, this covers the basics at a fraction of the H10's price.",
    affiliateUrl: "https://www.amazon.com/dp/B07BS6B4PD?tag=pilatescollective-20",
    tag: "Best Budget Pick",
  },
  {
    rank: "03",
    name: "Polar H9 Heart Rate Sensor",
    price: "$69.90",
    verdict: "Best mid-tier pick from an established brand",
    description:
      "The Polar H9 is Polar's step-down model from the H10, sold directly by Amazon.com, and it lands squarely between the budget straps and the premium H10 on price. If you want the reassurance of an established, sports-science-trusted brand but don't need every feature the H10 carries, the H9 is the sensible middle option: Polar's core accuracy reputation at a mid-tier price.",
    affiliateUrl: "https://www.amazon.com/dp/B08411DQ96?tag=pilatescollective-20",
    tag: "Best Mid-Tier",
  },
  {
    rank: "04",
    name: "CYCPLUS H2Pro Heart Rate Monitor Chest Strap",
    price: "$29.99",
    verdict: "Best battery life",
    description:
      "The standout spec on the CYCPLUS H2Pro is battery life, rated at 500 hours, which for most people training a handful of times a week means not thinking about the battery for the better part of a year. At a budget-friendly price, it's a strong pick for anyone who wants a chest strap they can set up once and largely forget about, rather than one more piece of kit to keep charged.",
    affiliateUrl: "https://www.amazon.com/dp/B0DLNMMY9M?tag=pilatescollective-20",
    tag: "Best Battery Life",
  },
  {
    rank: "05",
    name: "POWR LABS Heart Rate Monitor Chest Strap",
    price: "$39.99",
    verdict: "Best for Garmin and Peloton compatibility",
    description:
      "Powr Labs positions the H2Pro-competitor strap specifically around Garmin and Peloton compatibility, which makes it a straightforward pick if you already train on either ecosystem and want confirmed compatibility rather than a guess. It sits in the middle of the pack on price, just above the true budget options, as a strap built with a specific pairing use case in mind.",
    affiliateUrl: "https://www.amazon.com/dp/B081GH9RWC?tag=pilatescollective-20",
    tag: "Best for Garmin & Peloton",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Heart Rate Monitor for Pilates & Spin (2026)",
      "description": "Chest strap heart rate monitors compared for accuracy, price, and app compatibility.",
      "url": "https://pilatescollectiveclub.com/blog/best-heart-rate-monitor-for-pilates-and-spin",
      "datePublished": "2026-06-30",
      "dateModified": "2026-10-20",
      "image": { "@type": "ImageObject", "url": "https://pilatescollectiveclub.com/pictures/elena-kloppenburg-erUC4fTtCuo-unsplash.jpg", "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "publisher": { "@type": "Organization", "name": "Pilates Collective Club", "url": "https://pilatescollectiveclub.com" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pilatescollectiveclub.com/blog/best-heart-rate-monitor-for-pilates-and-spin" },
    },
    {
      "@type": "ItemList",
      "name": "Best Heart Rate Monitors for Pilates & Spin (2026)",
      "numberOfItems": PRODUCTS.length,
      "itemListElement": PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "description": p.description.replace(/<[^>]+>/g, ""),
          "offers": { "@type": "Offer", "priceCurrency": "USD", "price": p.price.replace(/[^0-9.]/g, ""), "availability": "https://schema.org/InStock", "url": p.affiliateUrl },
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilatescollectiveclub.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pilatescollectiveclub.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Best Heart Rate Monitor for Pilates & Spin", "item": "https://pilatescollectiveclub.com/blog/best-heart-rate-monitor-for-pilates-and-spin" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Why use a chest strap instead of a wrist-based heart rate monitor?", "acceptedAnswer": { "@type": "Answer", "text": "Chest straps like the ones on this list read heart rate directly and are consistently more accurate than wrist-based optical sensors, especially during the rapid intensity changes common in Lagree supersets and spin sprints. For precise zone training during class, a dedicated chest strap is the more reliable choice." } },
        { "@type": "Question", "name": "What's the real difference between the Polar H10 and the Polar H9?", "acceptedAnswer": { "@type": "Answer", "text": "Both are chest straps from the same established brand and sold directly by Amazon.com, but the H10 is Polar's premium model and costs meaningfully more than the H9, which is positioned as the mid-tier option. If budget is the deciding factor and you want Polar's reputation without paying the H10's price, the H9 is the sensible middle ground." } },
        { "@type": "Question", "name": "Do I need a heart rate monitor that's compatible with Peloton or Garmin?", "acceptedAnswer": { "@type": "Answer", "text": "If you train on a connected bike or a Garmin device, confirm compatibility before buying. The Polar H10, Polar H9, CooSpo H6 and CYCPLUS H2Pro all support dual Bluetooth/ANT+ connectivity, and the Powr Labs strap is specifically built and marketed around Garmin and Peloton compatibility." } },
      ],
    },
  ],
};

const QP_NOTES = ["Best overall accuracy", "Best budget pick", "Best mid-tier pick from an established brand", "Best battery life", "Best for Garmin and Peloton compatibility"];

export default function BestHeartRateMonitorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
      <Header />
      <main>
        <section className="r-ah r-ah-legacy">
          <div className="r-wrap">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[12.5px] font-bold" style={{ color: "#0a0a0a" }}>Tech & Devices</span>
              <span style={{ color: "#9a9490" }}>·</span>
              <span className="text-[12.5px] font-bold" style={{ color: "#3a3530" }}>Lagree & Spin</span>
            </div>
            <h1 className="mb-6 r-d r-h1">
              Best Heart Rate Monitor<br /><span style={{ color: "#a98a5f" }}>for Pilates & Spin (2026)</span>
            </h1>
            <p className="text-base mb-6" style={{ color: "#6f6964" }}>Prices checked October 20, 2026 · 8 min read</p>
            <TopPick name={PRODUCTS[0].name} price={PRODUCTS[0].price} note={QP_NOTES[0]} url={PRODUCTS[0].affiliateUrl} />
            <div className="w-16 h-px mb-8" style={{ backgroundColor: "#ddd6cc" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#3a3530" }}>
              Lagree&apos;s slow, sustained tension and spin&apos;s rapid interval bursts both benefit from knowing your heart rate zone in real time, and a dedicated chest strap reads it more reliably than a wrist wearable during fast-changing effort. This guide compares five chest strap monitors, from a budget-friendly starter strap through Polar&apos;s mid-tier and premium models, plus options built around long battery life and specific app compatibility.
            </p>
          </div>
        </section>

        <section className="px-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="pcc-city-hero-image relative r-ah-img">
              <Image src="/pictures/elena-kloppenburg-erUC4fTtCuo-unsplash.jpg" alt="Best heart rate monitor for Pilates and spin 2026" fill className="object-cover" />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">

            <QuickPicks className="mb-6 mt-4" picks={PRODUCTS.map((pr, i) => ({ name: pr.name, price: pr.price, url: pr.affiliateUrl, note: QP_NOTES[i] }))} />
            <AffiliateNote>Some links on this page go to Amazon. We earn a small commission on qualifying purchases.</AffiliateNote>

            <div className="mb-16">
              <p className="text-[12.5px] font-bold mb-10" style={{ color: "#0a0a0a" }}>5 Chest Straps · Ranked</p>
              <div className="space-y-10">
                {PRODUCTS.map((p) => (
                  <div key={p.name}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl r-hx" style={{ color: "#9a9490" }}>{p.rank}</span>
                      <span className="text-[12.5px] font-bold px-3 py-1 rounded-full" style={{ backgroundColor: "#ede9e3", color: "#0a0a0a" }}>{p.tag}</span>
                    </div>
                    <ProductCard name={p.name} description={p.description} descriptionHtml={p.description} price={p.price} affiliateUrl={p.affiliateUrl} />
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="mb-8 r-d r-h2">Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: "Why use a chest strap instead of a wrist-based heart rate monitor?", a: "Chest straps like the ones on this list read heart rate directly and are consistently more accurate than wrist-based optical sensors, especially during the rapid intensity changes common in Lagree supersets and spin sprints. For precise zone training during class, a dedicated chest strap is the more reliable choice." },
                  { q: "What's the real difference between the Polar H10 and the Polar H9?", a: "Both are chest straps from the same established brand and sold directly by Amazon.com, but the H10 is Polar's premium model and costs meaningfully more than the H9, which is positioned as the mid-tier option. If budget is the deciding factor and you want Polar's reputation without paying the H10's price, the H9 is the sensible middle ground." },
                  { q: "Do I need a heart rate monitor that's compatible with Peloton or Garmin?", a: "If you train on a connected bike or a Garmin device, confirm compatibility before buying. The Polar H10, Polar H9, CooSpo H6 and CYCPLUS H2Pro all support dual Bluetooth/ANT+ connectivity, and the Powr Labs strap is specifically built and marketed around Garmin and Peloton compatibility." },
                ].map((item) => (
                  <div key={item.q} className="rounded-2xl p-6" style={{ backgroundColor: "#ede9e3" }}>
                    <p className="text-base mb-2 r-hx" style={{ color: "#0a0a0a" }}>{item.q}</p>
                    <p className="text-base leading-relaxed" style={{ color: "#3a3530" }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-8 r-d r-h2">Further reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard title="Best Indoor Spin Bike for Home Studios (2026)" excerpt="Peloton, Schwinn, NordicTrack, and budget bikes compared for building a home cycling studio." href="/blog/best-indoor-spin-bike-for-home-studio" category="Equipment" readTime="11 min read" date="June 2026" imageUrl="/pictures/ahmet-kurt-0fiVrPJg5kU-unsplash.jpg" />
                <ArticleCard title="Best Megaformer Machine (2026)" excerpt="Lagree M3S, The Micro, M3X, and more compared for home and studio Lagree training." href="/blog/best-megaformer-machine" category="Equipment" readTime="10 min read" date="June 2026" imageUrl="/pictures/roxana-popovici-aY5uOJ2o96g-unsplash.jpg" />
                <ArticleCard title="Best Smartwatch for Pilates (2026): Compared & Ranked" excerpt="The best budget smartwatches and fitness trackers for Pilates, heart rate accuracy, thin profile for reformer…" href="/blog/best-smartwatch-for-pilates" category="Guide" readTime="8 min read" imageUrl="/pictures/roxana-popovici-hiHBILFNah4-unsplash.jpg" />
                <ArticleCard title="Best Smart Ring for Pilates (2026): Oura & Budget Picks" excerpt="The best smart rings for Pilates, the premium Oura Ring 5 compared against four budget-friendly rings for heart…" href="/blog/best-smart-ring-for-pilates" category="Guide" readTime="7 min read" imageUrl="/pictures/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg" />
                <ArticleCard title="How Many Calories Does Pilates Burn? (2026 Data)" excerpt="How many calories does Pilates burn per session? Accurate data for mat vs reformer Pilates by body weight…" href="/blog/how-many-calories-does-pilates-burn" category="Activewear" readTime="7 min read" imageUrl="/pictures/roxana-popovici-hiHBILFNah4-unsplash.jpg" />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Find a studio near you" subtitle="Use our city guides to find boutique Lagree and cycling studios worldwide." showSearch searchPlaceholder="Ask: best Lagree studios in Chicago..." />
      </main>
      <Footer />
    </>
  );
}
