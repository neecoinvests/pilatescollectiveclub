import Link from "next/link";

const EXPLORE = [
  { label: "City Guides", href: "/cities" },
  { label: "Journal", href: "/blog" },
  { label: "Brands", href: "/brands" },
  { label: "Equipment", href: "/blog/best-pilates-reformer-brands" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/contact" },
  { label: "Advertise", href: "/advertise" },
];

const JOURNAL = [
  { label: "Equipment Reviews", href: "/blog?category=Equipment" },
  { label: "Brand Guides", href: "/blog?category=Brand+Guide" },
  { label: "Method & History", href: "/blog?category=Method" },
  { label: "Health & Wellbeing", href: "/blog?category=Health" },
  { label: "Beginners", href: "/blog?category=Beginners" },
  { label: "Tech & Devices", href: "/blog?category=Tech+%26+Devices" },
  { label: "Lagree", href: "/blog?category=Lagree" },
  { label: "Spinning", href: "/blog?category=Spinning" },
];

const CITIES = [
  { label: "London", href: "/cities/london" },
  { label: "New York", href: "/cities/new-york" },
  { label: "Paris", href: "/cities/paris" },
  { label: "Los Angeles", href: "/cities/los-angeles" },
  { label: "Sydney", href: "/cities/sydney" },
  { label: "Dubai", href: "/cities/dubai" },
];

const LEGAL = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
];

export default function Footer() {
  return (
    <footer className="r-ft">
      <div className="r-wrap">
        <div className="r-ft-big" aria-hidden="true">Pilates Collective Club</div>
        <div className="r-ft-grid">
          {/* Brand */}
          <div className="r-ft-brand">
            <Link href="/" className="r-ft-home">
              Pilates Collective Club
            </Link>
            <p>
              Curated studio guides, expert recommendations, and editorial content for the global Pilates community.
            </p>
          </div>

          {/* Explore */}
          <div>
            <span className="r-ft-label">Explore</span>
            {EXPLORE.map((l) => (
              <Link key={l.href} href={l.href} className="r-ft-a">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Journal by category */}
          <div>
            <span className="r-ft-label">Journal</span>
            {JOURNAL.map((l) => (
              <Link key={l.href} href={l.href} className="r-ft-a">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Cities + Legal */}
          <div>
            <span className="r-ft-label">Cities</span>
            {CITIES.map((l) => (
              <Link key={l.href} href={l.href} className="r-ft-a">
                {l.label}
              </Link>
            ))}
            <Link href="/cities" className="r-ft-a r-ft-a-all">
              All cities →
            </Link>

            <div className="r-ft-legal">
              <span className="r-ft-label">Legal</span>
              {LEGAL.map((l) => (
                <Link key={l.label} href={l.href} className="r-ft-a">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="r-ft-base">
          <p>
            © 2026 Pilates Collective Club. All rights reserved. As an Amazon Associate we earn from qualifying purchases.
          </p>
          <p>
            Made for the global Pilates community.
          </p>
        </div>
      </div>
    </footer>
  );
}
