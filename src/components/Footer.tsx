import Image from "next/image";
import Link from "next/link";

type FooterLink = { label: string; href: string };

const EXPLORE: FooterLink[] = [
  { label: "City Guides", href: "/cities" },
  { label: "Journal", href: "/blog" },
  { label: "Brands", href: "/brands" },
  { label: "Equipment", href: "/blog/best-pilates-reformer-brands" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/contact" },
  { label: "Advertise", href: "/advertise" },
];

const JOURNAL: FooterLink[] = [
  { label: "Equipment Reviews", href: "/blog?category=Equipment" },
  { label: "Brand Guides", href: "/blog?category=Brand+Guide" },
  { label: "Method & History", href: "/blog?category=Method" },
  { label: "Health & Wellbeing", href: "/blog?category=Health" },
  { label: "Beginners", href: "/blog?category=Beginners" },
  { label: "Tech & Devices", href: "/blog?category=Tech+%26+Devices" },
  { label: "Lagree", href: "/blog?category=Lagree" },
  { label: "Spinning", href: "/blog?category=Spinning" },
];

const SHOP: FooterLink[] = [
  { label: "Home Reformers", href: "/blog/best-home-pilates-reformer" },
  { label: "Reformer Brands", href: "/blog/best-pilates-reformer-brands" },
  { label: "Grip Socks", href: "/blog/best-pilates-grip-socks" },
  { label: "Leggings", href: "/blog/best-pilates-leggings" },
  { label: "Mats", href: "/blog/best-pilates-mat" },
  { label: "Home Practice Equipment", href: "/blog/best-pilates-equipment-for-home-practice" },
  { label: "All Clothing", href: "/blog?category=Clothing" },
  { label: "Studio Essentials", href: "/blog?category=Studio+Essentials" },
];

const GUIDES: FooterLink[] = [
  { label: "Pilates Essentials", href: "/blog/pilates-essentials" },
  { label: "Beginner's Guide to Reformer Pilates", href: "/blog/beginners-guide-to-reformer-pilates" },
  { label: "Is Reformer Pilates Worth It?", href: "/blog/is-reformer-pilates-worth-it" },
  { label: "What a Reformer Costs", href: "/blog/how-much-does-a-pilates-reformer-cost" },
  { label: "Classical vs Contemporary", href: "/blog/classical-vs-contemporary-pilates" },
  { label: "Pilates vs Yoga", href: "/blog/pilates-vs-yoga" },
  { label: "Pilates for Back Pain", href: "/blog/pilates-for-back-pain" },
  { label: "Lagree Essentials", href: "/blog/lagree-essentials" },
];

const CITIES: FooterLink[] = [
  { label: "London", href: "/cities/london" },
  { label: "New York", href: "/cities/new-york" },
  { label: "Paris", href: "/cities/paris" },
  { label: "Los Angeles", href: "/cities/los-angeles" },
  { label: "Sydney", href: "/cities/sydney" },
  { label: "Dubai", href: "/cities/dubai" },
  { label: "Tokyo", href: "/cities/tokyo" },
  { label: "Singapore", href: "/cities/singapore" },
  { label: "Miami", href: "/cities/miami" },
  { label: "Chicago", href: "/cities/chicago" },
  { label: "Barcelona", href: "/cities/barcelona" },
  { label: "Zurich", href: "/cities/zurich" },
];

const LEGAL: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
];

function Column({ title, links, className = "" }: { title: string; links: FooterLink[]; className?: string }) {
  return (
    <nav className={`r-ft-col ${className}`} aria-label={title}>
      <span className="r-ft-label">{title}</span>
      {links.map((l) => (
        <Link key={l.label} href={l.href} className="r-ft-a">
          {l.label}
        </Link>
      ))}
    </nav>
  );
}

export default function Footer() {
  return (
    <footer className="r-ft">
      <div className="r-wrap">
        {/* Call to action panel */}
        <div className="r-ft-cta">
          <p className="r-d r-ft-cta-h">
            Find your studio.<br />
            <span className="r-gold">Know your method.</span>
          </p>
          <div className="r-ft-cta-btns">
            <Link href="/cities" className="r-btn">
              Browse city guides
            </Link>
            <Link href="/blog" className="r-btn r-btn-o">
              Read the journal
            </Link>
            <Link href="/blog?category=Equipment" className="r-btn r-btn-o">
              Shop gear guides
            </Link>
          </div>
        </div>

        <div className="r-ft-grid">
          {/* Brand */}
          <div className="r-ft-brand">
            <Link href="/" className="r-ft-home">
              <Image src="/pictures/pcc-logo.png" alt="" width={859} height={286} sizes="180px" className="r-ft-logo" />
              Pilates Collective Club
            </Link>
            <p>
              Curated studio guides, expert recommendations, and editorial content for the global Pilates community.
            </p>
          </div>

          <Column title="Explore" links={EXPLORE} />
          <Column title="Journal" links={JOURNAL} />
          <Column title="Shop gear" links={SHOP} />
          <Column title="Popular guides" links={GUIDES} />

          {/* Cities */}
          <nav className="r-ft-col r-ft-cities" aria-label="Cities">
            <span className="r-ft-label">Cities</span>
            <div className="r-ft-pills">
              {CITIES.map((l) => (
                <Link key={l.href} href={l.href} className="r-ft-pill">
                  {l.label}
                </Link>
              ))}
              <Link href="/cities" className="r-ft-pill r-ft-pill-all">
                All cities →
              </Link>
            </div>
          </nav>
        </div>

        <div className="r-ft-base">
          <p>
            © 2026 Pilates Collective Club. All rights reserved. As an Amazon Associate we earn from qualifying purchases.
          </p>
          <nav className="r-ft-legal" aria-label="Legal">
            <span className="r-ft-label">Legal</span>
            {LEGAL.map((l) => (
              <Link key={l.label} href={l.href} className="r-ft-a">
                {l.label}
              </Link>
            ))}
          </nav>
          <p>
            Made for the global Pilates community.
          </p>
          <a href="#content" className="r-ft-a r-ft-top">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
