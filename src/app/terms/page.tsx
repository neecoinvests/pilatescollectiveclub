import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | Pilates Collective Club",
  description: "Terms and Conditions for use of pilatescollectiveclub.com.",
  alternates: { canonical: "https://pilatescollectiveclub.com/terms" },
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
  ul: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "15px",
    fontWeight: 300,
    color: "#53433e",
    lineHeight: 1.85,
    marginBottom: "16px",
    paddingLeft: "24px",
  } as React.CSSProperties,
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: "#fcf9f8", minHeight: "100vh" }}>
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-2xl mx-auto">
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8b4a31", marginBottom: "16px" }}>Legal</p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "38px", fontWeight: 600, color: "#1b1c1c", lineHeight: 1.2, marginBottom: "12px" }}>Terms &amp; Conditions</h1>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "#86736d", marginBottom: "48px" }}>Last updated: May 2026</p>

            <div style={{ width: "48px", height: "2px", backgroundColor: "#d9c2ba", marginBottom: "48px" }} />

            <p style={s.p}>
              By accessing or using pilatescollectiveclub.com (the &quot;Site&quot;), you agree to be bound by these Terms &amp; Conditions. If you do not agree, please do not use the Site. These terms apply to all visitors, readers, and users of the Site.
            </p>

            <h2 style={s.h2}>Use of the Site</h2>
            <p style={s.p}>The Site is provided for informational and editorial purposes. You agree to use it only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use and enjoyment of the Site.</p>
            <p style={s.p}>You must not:</p>
            <ul style={s.ul}>
              <li style={{ marginBottom: "8px" }}>Reproduce, duplicate, or copy content from the Site without prior written permission</li>
              <li style={{ marginBottom: "8px" }}>Sell or redistribute content from the Site</li>
              <li style={{ marginBottom: "8px" }}>Use the Site in any way that causes damage or impairs availability</li>
              <li style={{ marginBottom: "8px" }}>Use automated tools to scrape or harvest content from the Site</li>
            </ul>

            <h2 style={s.h2}>Intellectual Property</h2>
            <p style={s.p}>
              All content on the Site — including text, editorial copy, layout, and design — is the property of Pilates Collective Club or its content suppliers and is protected by applicable copyright and intellectual property laws. Photography sourced from Unsplash is subject to the Unsplash licence.
            </p>
            <p style={s.p}>
              You may quote brief excerpts from articles for non-commercial purposes (commentary, criticism, education) provided you attribute the source with a link to the original page.
            </p>

            <h2 style={s.h2}>Disclaimer of Warranties</h2>
            <p style={s.p}>
              The content on this Site is provided &quot;as is&quot; and for general informational purposes only. We make no representations or warranties of any kind — express or implied — about the accuracy, completeness, reliability, or suitability of any information on the Site.
            </p>
            <p style={s.p}>
              In particular, content related to Pilates exercises, equipment, and health benefits is editorial in nature and does not constitute medical or professional advice. Always consult a qualified instructor or healthcare provider before beginning a new exercise programme, especially if you have a pre-existing health condition.
            </p>

            <h2 style={s.h2}>Affiliate Links & Product Recommendations</h2>
            <p style={s.p}>
              The Site participates in affiliate programmes including Amazon Associates. Product recommendations are editorial opinions based on research and analysis. We may earn a commission if you purchase through an affiliate link. This does not affect our editorial independence or the price you pay. See our <a href="/affiliate-disclosure" style={{ color: "#8b4a31", textDecoration: "underline" }}>Affiliate Disclosure</a> for full details.
            </p>
            <p style={s.p}>
              We are not responsible for the content, accuracy, or practices of third-party websites linked from the Site, including Amazon and studio websites.
            </p>

            <h2 style={s.h2}>Limitation of Liability</h2>
            <p style={s.p}>
              To the fullest extent permitted by law, Pilates Collective Club shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of — or inability to use — the Site or its content. This includes any injury or harm resulting from following exercise advice found on the Site.
            </p>

            <h2 style={s.h2}>Studio Listings & Third-Party Information</h2>
            <p style={s.p}>
              Studio information (addresses, class offerings, pricing) is sourced from public sources and is provided for editorial reference only. We do not verify or guarantee the accuracy of studio listings. Always confirm details directly with the studio before visiting. We have no commercial relationship with the studios listed in our city guides unless explicitly stated.
            </p>

            <h2 style={s.h2}>Privacy</h2>
            <p style={s.p}>
              Your use of the Site is also governed by our <a href="/privacy" style={{ color: "#8b4a31", textDecoration: "underline" }}>Privacy Policy</a>, which is incorporated into these Terms by reference.
            </p>

            <h2 style={s.h2}>Changes to These Terms</h2>
            <p style={s.p}>
              We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated date. Continued use of the Site after any changes constitutes acceptance of the revised Terms.
            </p>

            <h2 style={s.h2}>Governing Law</h2>
            <p style={s.p}>
              These Terms are governed by and construed in accordance with applicable law. Any disputes relating to these Terms shall be subject to the exclusive jurisdiction of the competent courts.
            </p>

            <h2 style={s.h2}>Contact</h2>
            <p style={s.p}>
              For any questions about these Terms, please use the contact form on the Site.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
