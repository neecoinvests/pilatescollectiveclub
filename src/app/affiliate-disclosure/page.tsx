import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | Pilates Collective Club",
  description: "Affiliate Disclosure for Pilates Collective Club — how we use affiliate links and how it affects our editorial recommendations.",
  alternates: { canonical: "https://pilatescollectiveclub.com/affiliate-disclosure" },
  robots: { index: true, follow: true },
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
};

export default function AffiliateDisclosurePage() {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: "#fcf9f8", minHeight: "100vh" }}>
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-2xl mx-auto">
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8b4a31", marginBottom: "16px" }}>Legal</p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "38px", fontWeight: 600, color: "#1b1c1c", lineHeight: 1.2, marginBottom: "12px" }}>Affiliate Disclosure</h1>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "#86736d", marginBottom: "48px" }}>Last updated: May 2026</p>

            <div style={{ width: "48px", height: "2px", backgroundColor: "#d9c2ba", marginBottom: "48px" }} />

            {/* Summary box */}
            <div style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px", padding: "28px 32px", marginBottom: "40px" }}>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8b4a31", marginBottom: "12px" }}>The short version</p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px", fontWeight: 300, color: "#53433e", lineHeight: 1.8, margin: 0 }}>
                Some links on this site earn us a small commission if you buy through them. It costs you nothing extra. Our recommendations are always based on research and honest editorial judgment — never on commission rates.
              </p>
            </div>

            <h2 style={s.h2}>Amazon Associates Programme</h2>
            <p style={s.p}>
              Pilates Collective Club is a participant in the Amazon Services LLC Associates Programme, an affiliate advertising programme designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com and its international variants (Amazon.co.uk, Amazon.de, Amazon.fr, etc.).
            </p>
            <p style={s.p}>
              When you click a product link marked with <strong>Buy →</strong> on this site and make a qualifying purchase on Amazon, we may earn a small commission — typically 1–8% depending on the product category. This commission is paid by Amazon and does not increase the price you pay.
            </p>

            <h2 style={s.h2}>How We Mark Affiliate Links</h2>
            <p style={s.p}>
              All articles containing affiliate links carry the following notice at the top of the page:
            </p>
            <div style={{ backgroundColor: "#f6f3f2", borderRadius: "12px", padding: "20px 24px", marginBottom: "16px" }}>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "#86736d", margin: 0, fontStyle: "italic" }}>
                *Some links on this page go to Amazon. We earn a small commission on qualifying purchases.
              </p>
            </div>
            <p style={s.p}>
              Product links within articles (the <strong>Buy →</strong> buttons in product cards and comparison tables) are affiliate links. Internal links to other pages on this site, city guide links, and studio website links are not affiliate links.
            </p>

            <h2 style={s.h2}>Our Editorial Independence</h2>
            <p style={s.p}>
              Affiliate commissions do not influence which products we recommend, how we rank them, or what we write about them. Our product selection and editorial assessments are based on:
            </p>
            <ul style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px", fontWeight: 300, color: "#53433e", lineHeight: 1.85, marginBottom: "16px", paddingLeft: "24px" }}>
              <li style={{ marginBottom: "8px" }}>Research into product specifications, materials, and build quality</li>
              <li style={{ marginBottom: "8px" }}>Information from manufacturer and dealer sources</li>
              <li style={{ marginBottom: "8px" }}>Community feedback from the Pilates practitioner and instructor community</li>
              <li style={{ marginBottom: "8px" }}>Comparison of verified facts across products in the same category</li>
            </ul>
            <p style={s.p}>
              We include honest trade-offs and critical assessments for every product we recommend. We do not give products positive reviews because they earn higher commissions. We do not hide negative aspects of products to protect affiliate relationships.
            </p>
            <p style={s.p}>
              If a product we believe is best for a given use case is not available on Amazon or does not have an affiliate arrangement, we may still feature it and link directly to the manufacturer (for example, Gratz Pilates equipment, which is purchased directly from gratzpilates.com). In those cases, we earn no commission from the recommendation.
            </p>

            <h2 style={s.h2}>Price Accuracy</h2>
            <p style={s.p}>
              Prices listed in our articles are approximate and based on publicly available pricing at the time of writing. Amazon prices change frequently due to sales, promotions, and market conditions. Always verify the current price on Amazon or with the relevant dealer before purchasing.
            </p>

            <h2 style={s.h2}>FTC Compliance</h2>
            <p style={s.p}>
              This disclosure is provided in compliance with the United States Federal Trade Commission (FTC) guidelines on endorsements and testimonials (16 CFR Part 255) and equivalent regulations in other jurisdictions. We are committed to transparency about any material connections between this site and the products or companies we discuss.
            </p>

            <h2 style={s.h2}>Questions</h2>
            <p style={s.p}>
              If you have any questions about our affiliate relationships or editorial process, please contact us at: <a href="mailto:hello@pilatescollectiveclub.com" style={{ color: "#8b4a31", textDecoration: "underline" }}>hello@pilatescollectiveclub.com</a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
