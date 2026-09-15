import type { Metadata } from "next";
import Link from "next/link";
import fs from "node:fs";
import path from "node:path";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BASE_URL = "https://pilatescollectiveclub.com";

export const metadata: Metadata = {
  title: "Advertise",
  description:
    "Advertising on Pilates Collective Club: sponsored pages written by us and labelled as sponsored, plus affiliate partnerships. Priced per project.",
  openGraph: {
    title: "Advertise",
    description:
      "Sponsored pages and affiliate partnerships on Pilates Collective Club. Priced per project.",
    type: "website",
    url: `${BASE_URL}/advertise`,
  },
  alternates: { canonical: `${BASE_URL}/advertise` },
  robots: { index: true, follow: true },
};

const APP_DIR = path.join(process.cwd(), "src", "app");

// Counted from the repository at build time rather than written down, so the
// figures on this page cannot drift away from what the site actually contains.
function countRouteDirs(segment: string): number {
  const dir = path.join(APP_DIR, segment);
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isDirectory() &&
        fs.existsSync(path.join(dir, entry.name, "page.tsx")),
    ).length;
}

function pageFiles(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return pageFiles(full);
    return entry.name === "page.tsx" ? [full] : [];
  });
}

function countOccurrences(files: string[], needle: string): number {
  return files.reduce(
    (total, file) => total + fs.readFileSync(file, "utf8").split(needle).length - 1,
    0,
  );
}

const cityPages = pageFiles(path.join(APP_DIR, "cities"));
const allPages = pageFiles(APP_DIR);

const STATS = [
  { value: countRouteDirs("blog").toLocaleString("en-US"), label: "Articles published" },
  { value: countRouteDirs("cities").toLocaleString("en-US"), label: "City guides" },
  { value: countOccurrences(cityPages, "signatureClass:").toLocaleString("en-US"), label: "Studios listed" },
  { value: countOccurrences(allPages, "affiliateUrl:").toLocaleString("en-US"), label: "Product write-ups" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/advertise#webpage`,
      "url": `${BASE_URL}/advertise`,
      "name": "Advertise",
      "description":
        "Advertising on Pilates Collective Club: sponsored pages written by us and labelled as sponsored, plus affiliate partnerships. Priced per project.",
      "isPartOf": { "@id": `${BASE_URL}/#website` },
      "about": { "@id": `${BASE_URL}/#organization` },
      "inLanguage": "en",
      "breadcrumb": { "@id": `${BASE_URL}/advertise#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${BASE_URL}/advertise#breadcrumb`,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
        { "@type": "ListItem", "position": 2, "name": "Advertise", "item": `${BASE_URL}/advertise` },
      ],
    },
  ],
};

const s = {
  h2: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "22px",
    fontWeight: 600,
    color: "#1b1c1c",
    marginTop: "48px",
    marginBottom: "16px",
  } as React.CSSProperties,
  p: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "15px",
    fontWeight: 300,
    color: "#53433e",
    lineHeight: 1.85,
    marginBottom: "16px",
  } as React.CSSProperties,
  card: {
    backgroundColor: "#ffffff",
    border: "1px solid rgba(217,194,186,0.4)",
    borderRadius: "16px",
    padding: "26px 30px",
    marginBottom: "20px",
  } as React.CSSProperties,
  cardTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "19px",
    fontWeight: 600,
    color: "#1b1c1c",
    marginBottom: "12px",
  } as React.CSSProperties,
  statValue: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "32px",
    fontWeight: 600,
    color: "#1b1c1c",
    lineHeight: 1.1,
    marginBottom: "6px",
  } as React.CSSProperties,
  statLabel: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "10px",
    fontWeight: 600,
    letterSpacing: "0.14em",
    textTransform: "uppercase" as const,
    color: "#86736d",
    margin: 0,
  } as React.CSSProperties,
  li: { marginBottom: "10px" } as React.CSSProperties,
};

export default function AdvertisePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main style={{ backgroundColor: "#fcf9f8", minHeight: "100vh" }}>
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-2xl mx-auto">
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8b4a31", marginBottom: "16px" }}>Advertise</p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "38px", fontWeight: 600, color: "#1b1c1c", lineHeight: 1.2, marginBottom: "12px" }}>Advertise</h1>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "#86736d", marginBottom: "48px" }}>Two ways to work with us.</p>

            <div style={{ width: "48px", height: "2px", backgroundColor: "#d9c2ba", marginBottom: "48px" }} />

            <p style={s.p}>
              We publish studio guides, equipment reviews and buying guides for
              Pilates, Lagree and indoor cycling. Readers arrive from search,
              usually while deciding what to buy or where to train.
            </p>
            <p style={s.p}>
              We sell one thing: a page of its own. We do not sell places in a
              ranking.
            </p>

            {/* Stats. Counted from the repository at build time. */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px", padding: "30px 32px", marginTop: "40px", marginBottom: "8px" }}>
              {STATS.map((stat) => (
                <div key={stat.label} style={{ minWidth: 0 }}>
                  <p style={s.statValue}>{stat.value}</p>
                  <p style={s.statLabel}>{stat.label}</p>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 300, color: "#86736d", lineHeight: 1.7, marginBottom: "8px" }}>
              Counts taken from the published site. Traffic and audience figures are
              available on request.
            </p>

            <h2 style={s.h2}>What we offer</h2>

            <div style={s.card}>
              <h3 style={s.cardTitle}>Sponsored pages</h3>
              <p style={{ ...s.p, marginBottom: "12px" }}>
                A dedicated article about your product or studio, on its own
                address on this site. We research it and we write it. It is
                labelled as sponsored at the top of the page.
              </p>
              <p style={{ ...s.p, marginBottom: 0 }}>
                You get a draft to check for factual accuracy before it goes live.
                You can correct a fact. The wording stays ours.
              </p>
            </div>

            <div style={s.card}>
              <h3 style={s.cardTitle}>Affiliate partnerships</h3>
              <p style={{ ...s.p, marginBottom: 0 }}>
                If you run an affiliate programme, we can link to you through it
                where your product already fits an article. Commission does not
                buy a place in a ranking or change a verdict. Our{" "}
                <Link href="/affiliate-disclosure" style={{ color: "#8b4a31", textDecoration: "underline" }}>
                  affiliate disclosure
                </Link>{" "}
                explains how these links are marked.
              </p>
            </div>

            <h2 style={s.h2}>How we keep it straight</h2>
            <div style={{ backgroundColor: "#f6f3f2", borderRadius: "12px", padding: "24px 28px", marginBottom: "16px" }}>
              <ul style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px", fontWeight: 300, color: "#53433e", lineHeight: 1.85, margin: 0, paddingLeft: "22px" }}>
                <li style={s.li}>Sponsored pages carry a label at the top of the page.</li>
                <li style={s.li}>Our editorial rankings and city guides are not for sale.</li>
                <li style={{ marginBottom: 0 }}>We write the copy and we keep control of our words.</li>
              </ul>
            </div>

            <h2 style={s.h2}>Pricing</h2>
            <p style={s.p}>
              We price per project. The cost depends on the scope of the page, the
              research involved and how long it stays up. Tell us what you have in
              mind and we will quote it.
            </p>

            <div style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px", padding: "28px 32px", marginTop: "40px" }}>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8b4a31", marginBottom: "12px" }}>Get in touch</p>
              <p style={{ ...s.p, marginBottom: "18px" }}>
                Send us what you sell, who it is for, and what you want the page to
                do.
              </p>
              <Link
                href="/contact"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#ffffff",
                  backgroundColor: "#8b4a31",
                  textDecoration: "none",
                  display: "inline-block",
                  padding: "14px 28px",
                  borderRadius: "999px",
                }}
              >
                Contact us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
