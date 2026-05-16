import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Pilates Collective Club",
  description: "Privacy Policy for Pilates Collective Club — how we collect, use, and protect your information.",
  alternates: { canonical: "https://pilatescollectiveclub.com/privacy" },
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

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: "#fcf9f8", minHeight: "100vh" }}>
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-2xl mx-auto">
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8b4a31", marginBottom: "16px" }}>Legal</p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "38px", fontWeight: 600, color: "#1b1c1c", lineHeight: 1.2, marginBottom: "12px" }}>Privacy Policy</h1>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "#86736d", marginBottom: "48px" }}>Last updated: May 2026</p>

            <div style={{ width: "48px", height: "2px", backgroundColor: "#d9c2ba", marginBottom: "48px" }} />

            <p style={s.p}>
              Pilates Collective Club (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the website pilatescollectiveclub.com. This Privacy Policy explains what information we collect, how we use it, and the choices you have.
            </p>

            <h2 style={s.h2}>Information We Collect</h2>
            <p style={s.p}>We collect minimal information and only what is necessary to operate the site. Specifically:</p>
            <ul style={s.ul}>
              <li style={{ marginBottom: "8px" }}><strong>Usage data.</strong> When you visit the site, our hosting provider and analytics tools may automatically collect standard log data — your IP address, browser type, pages visited, and time spent. This data is used in aggregate to understand how the site is used and improve content. We do not use this data to identify individuals.</li>
              <li style={{ marginBottom: "8px" }}><strong>Cookies.</strong> We use cookies for basic site functionality and analytics (see Cookie Policy below). We do not use advertising cookies or sell data to third parties.</li>
              <li style={{ marginBottom: "8px" }}><strong>Contact information.</strong> If you contact us by email, we retain your email address solely to reply to your message.</li>
            </ul>

            <h2 style={s.h2}>How We Use Your Information</h2>
            <p style={s.p}>We use the information we collect to:</p>
            <ul style={s.ul}>
              <li style={{ marginBottom: "8px" }}>Operate and improve the website</li>
              <li style={{ marginBottom: "8px" }}>Understand which content is most useful to our readers</li>
              <li style={{ marginBottom: "8px" }}>Respond to enquiries submitted by email</li>
            </ul>
            <p style={s.p}>We do not sell, rent, or trade your personal information to any third party for marketing purposes.</p>

            <h2 style={s.h2}>Affiliate Links</h2>
            <p style={s.p}>
              This website contains affiliate links, primarily to Amazon. When you click an affiliate link and make a qualifying purchase, we may earn a small commission at no additional cost to you. Affiliate revenue does not influence our editorial recommendations. For full details, see our <a href="/affiliate-disclosure" style={{ color: "#8b4a31", textDecoration: "underline" }}>Affiliate Disclosure</a>.
            </p>

            <h2 style={s.h2}>Cookies</h2>
            <p style={s.p}>We use the following types of cookies:</p>
            <ul style={s.ul}>
              <li style={{ marginBottom: "8px" }}><strong>Essential cookies.</strong> Required for the site to function correctly. Cannot be disabled.</li>
              <li style={{ marginBottom: "8px" }}><strong>Analytics cookies.</strong> Help us understand how visitors use the site (e.g. Google Analytics or a privacy-first alternative). These are anonymised and not used to identify individuals.</li>
            </ul>
            <p style={s.p}>You can disable non-essential cookies at any time through your browser settings. This will not affect your ability to access the site.</p>

            <h2 style={s.h2}>Third-Party Services</h2>
            <p style={s.p}>We use the following third-party services that may process data on your behalf:</p>
            <ul style={s.ul}>
              <li style={{ marginBottom: "8px" }}><strong>Amazon Associates.</strong> Affiliate programme. Amazon&apos;s privacy policy governs data collected when you click through to Amazon.</li>
              <li style={{ marginBottom: "8px" }}><strong>Unsplash.</strong> Photography service used for editorial imagery. Images are served from Unsplash&apos;s CDN.</li>
              <li style={{ marginBottom: "8px" }}><strong>Analytics provider.</strong> Anonymised visitor analytics to help us improve content.</li>
            </ul>

            <h2 style={s.h2}>Your Rights</h2>
            <p style={s.p}>Depending on your location, you may have the following rights regarding your personal data:</p>
            <ul style={s.ul}>
              <li style={{ marginBottom: "8px" }}>The right to access the personal data we hold about you</li>
              <li style={{ marginBottom: "8px" }}>The right to request correction or deletion of your data</li>
              <li style={{ marginBottom: "8px" }}>The right to object to processing</li>
              <li style={{ marginBottom: "8px" }}>The right to data portability</li>
            </ul>
            <p style={s.p}>To exercise any of these rights, contact us at the email address below.</p>

            <h2 style={s.h2}>Data Retention</h2>
            <p style={s.p}>
              We retain usage analytics data in aggregate form indefinitely. Email correspondence is retained until it is no longer needed to respond to your enquiry. We do not retain personally identifiable information beyond what is required for the stated purposes.
            </p>

            <h2 style={s.h2}>Children&apos;s Privacy</h2>
            <p style={s.p}>
              This website is not directed to children under the age of 16. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us and we will promptly delete it.
            </p>

            <h2 style={s.h2}>Changes to This Policy</h2>
            <p style={s.p}>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of the site after changes are posted constitutes acceptance of the revised policy.
            </p>

            <h2 style={s.h2}>Contact</h2>
            <p style={s.p}>
              For any privacy-related questions or requests, please contact us at: <a href="mailto:hello@pilatescollectiveclub.com" style={{ color: "#8b4a31", textDecoration: "underline" }}>hello@pilatescollectiveclub.com</a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
