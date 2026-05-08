"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer style={{ backgroundColor: "#e4e2e1" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="text-xl font-semibold tracking-tight block mb-3"
              style={{ fontFamily: "'Playfair Display', serif", color: "#8b4a31" }}
            >
              Pilates Collective Club
            </Link>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
            >
              Curated city guides, expert studio recommendations, and AI-powered search for Pilates
              lovers worldwide.
            </p>
          </div>

          {/* Navigation Columns */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-[0.15em] mb-4"
              style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}
            >
              Explore
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "AI Finder", href: "/#finder" },
                { label: "City Guides", href: "/cities/zurich" },
                { label: "About", href: "/#about" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-[#8b4a31]"
                    style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-[0.15em] mb-4"
              style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}
            >
              Content
            </h3>
            <ul className="space-y-3">
              {[
                {
                  label: "Blog",
                  href: "/blog/best-pilates-equipment-for-home-practice",
                },
                { label: "Zurich Guide", href: "/cities/zurich" },
                { label: "Equipment Picks", href: "/blog/best-pilates-equipment-for-home-practice" },
                { label: "Studio Reviews", href: "/cities/zurich" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-[#8b4a31]"
                    style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-[0.15em] mb-4"
              style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}
            >
              Legal
            </h3>
            <ul className="space-y-3 mb-8">
              {[
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Use", href: "#" },
                { label: "Affiliate Disclosure", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-[#8b4a31]"
                    style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <h3
              className="text-xs font-semibold uppercase tracking-[0.15em] mb-3"
              style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}
            >
              Newsletter
            </h3>
            {subscribed ? (
              <p
                className="text-sm"
                style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}
              >
                Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="px-3 py-2 text-sm rounded-lg border outline-none focus:ring-2 focus:ring-[#8b4a31]/30"
                  style={{
                    borderColor: "#d9c2ba",
                    backgroundColor: "#fcf9f8",
                    color: "#1b1c1c",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium rounded-lg transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: "#8b4a31",
                    color: "#ffffff",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(139, 74, 49, 0.15)" }}
        >
          <p
            className="text-xs"
            style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}
          >
            © 2026 Pilates Collective Club. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}
          >
            Made with care for the Pilates community
          </p>
        </div>
      </div>
    </footer>
  );
}
