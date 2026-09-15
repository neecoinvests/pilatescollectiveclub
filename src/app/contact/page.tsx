import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BASE_URL = "https://pilatescollectiveclub.com";

// The address is split here and joined in the browser (see the inline Script
// below) so the served HTML never contains a harvestable mailto: string.
// Change these two parts to change the published address.
const EMAIL_USER = "hello";
const EMAIL_DOMAIN = "pilatescollectiveclub.com";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Pilates Collective Club about advertising, suggesting a studio for a city guide, or correcting something we have published.",
  openGraph: {
    title: "Contact",
    description:
      "Contact Pilates Collective Club about advertising, studio suggestions, or corrections.",
    type: "website",
    url: `${BASE_URL}/contact`,
  },
  alternates: { canonical: `${BASE_URL}/contact` },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${BASE_URL}/contact#webpage`,
      "url": `${BASE_URL}/contact`,
      "name": "Contact",
      "description":
        "Contact Pilates Collective Club about advertising, suggesting a studio for a city guide, or correcting something we have published.",
      "isPartOf": { "@id": `${BASE_URL}/#website` },
      "about": { "@id": `${BASE_URL}/#organization` },
      "inLanguage": "en",
    },
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": "Pilates Collective Club",
      "url": BASE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/pictures/pcc-logo.png`,
        "width": 859,
        "height": 286,
      },
      // Deliberately a URL and not an email address: putting the address in
      // JSON-LD would publish it in the served HTML and defeat the runtime
      // assembly below.
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "url": `${BASE_URL}/contact`,
          "contactType": "editorial and advertising enquiries",
          "availableLanguage": ["en"],
        },
      ],
      "sameAs": [
        "https://www.instagram.com/pilatescollectiveclub",
        "https://www.pinterest.com/pilatescollectiveclub",
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
    padding: "24px 26px",
  } as React.CSSProperties,
  cardTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "17px",
    fontWeight: 600,
    color: "#1b1c1c",
    marginBottom: "10px",
  } as React.CSSProperties,
  cardBody: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "14px",
    fontWeight: 300,
    color: "#53433e",
    lineHeight: 1.8,
    margin: 0,
  } as React.CSSProperties,
  email: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "19px",
    fontWeight: 400,
    color: "#8b4a31",
    textDecoration: "none",
    wordBreak: "break-word" as const,
  } as React.CSSProperties,
};

const CARDS = [
  {
    title: "Advertising",
    body: (
      <>
        Sponsored pages and affiliate partnerships. Tell us what you sell and who
        it is for. Details are on the{" "}
        <Link href="/advertise" style={{ color: "#8b4a31", textDecoration: "underline" }}>
          advertise
        </Link>{" "}
        page.
      </>
    ),
  },
  {
    title: "Suggest a listing",
    body: (
      <>
        Send a studio you think belongs in a{" "}
        <Link href="/cities" style={{ color: "#8b4a31", textDecoration: "underline" }}>
          city guide
        </Link>
        . Include the city, the studio name and its website. Suggestions are free
        and are not a purchase.
      </>
    ),
  },
  {
    title: "Corrections",
    body: (
      <>
        Prices move and studios close. If something we published is wrong, send
        the page address and what is wrong with it. We will check it and fix it.
      </>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main style={{ backgroundColor: "#fcf9f8", minHeight: "100vh" }}>
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-2xl mx-auto">
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8b4a31", marginBottom: "16px" }}>Contact</p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "38px", fontWeight: 600, color: "#1b1c1c", lineHeight: 1.2, marginBottom: "12px" }}>Contact</h1>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "#86736d", marginBottom: "48px" }}>One address, read by a person.</p>

            <div style={{ width: "48px", height: "2px", backgroundColor: "#d9c2ba", marginBottom: "48px" }} />

            {/* Email. Assembled client side, with a readable fallback for
                visitors without JavaScript. */}
            <div style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px", padding: "28px 32px", marginBottom: "40px" }}>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8b4a31", marginBottom: "12px" }}>Email</p>
              <a id="pcc-contact-email" style={s.email} />
              <noscript>
                <p style={{ ...s.cardBody, fontSize: "16px" }}>
                  {EMAIL_USER} at {EMAIL_DOMAIN.replace(/\./g, " dot ")}
                </p>
              </noscript>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 300, color: "#86736d", lineHeight: 1.8, marginTop: "14px", marginBottom: 0 }}>
                Put the topic in the subject line. It gets to the right place faster.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5" style={{ marginBottom: "40px" }}>
              {CARDS.map((c) => (
                <div key={c.title} style={s.card}>
                  <h2 style={s.cardTitle}>{c.title}</h2>
                  <p style={s.cardBody}>{c.body}</p>
                </div>
              ))}
            </div>

            <div style={{ backgroundColor: "#f6f3f2", borderRadius: "12px", padding: "20px 24px" }}>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", fontWeight: 300, color: "#53433e", lineHeight: 1.8, margin: 0 }}>
                Paid content is labelled. Any page an advertiser has paid for says so
                at the top of that page. See our{" "}
                <Link href="/affiliate-disclosure" style={{ color: "#8b4a31", textDecoration: "underline" }}>
                  affiliate disclosure
                </Link>{" "}
                for how commission links work.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Script id="pcc-contact-email-assemble">{`
        (function () {
          var el = document.getElementById('pcc-contact-email');
          if (!el) return;
          var addr = ${JSON.stringify(EMAIL_USER)} + String.fromCharCode(64) + ${JSON.stringify(EMAIL_DOMAIN)};
          el.setAttribute('href', 'mailto:' + addr);
          el.textContent = addr;
        })();
      `}</Script>
    </>
  );
}
