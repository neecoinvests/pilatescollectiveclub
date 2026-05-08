"use client";

import { useState } from "react";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  searchPlaceholder?: string;
  showSearch?: boolean;
}

export default function CTASection({
  title,
  subtitle,
  searchPlaceholder = "Search studios, cities, or classes…",
  showSearch = false,
}: CTASectionProps) {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section
      className="py-20 px-6"
      style={{ backgroundColor: "#8b4a31" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-semibold mb-4"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#ffffff",
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className="text-lg mb-8 opacity-85"
            style={{ color: "#ffffff", fontFamily: "'Montserrat', sans-serif" }}
          >
            {subtitle}
          </p>
        )}

        {showSearch && (
          <>
            {submitted ? (
              <div
                className="rounded-xl p-6 text-left"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <p
                  className="text-white font-medium mb-2"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  AI Finder is coming soon.
                </p>
                <p
                  className="text-white/80 text-sm mb-4"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  For now, explore our curated Zurich guide.
                </p>
                <a
                  href="/cities/zurich"
                  className="inline-block px-5 py-2.5 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#8b4a31",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  Explore Zurich Guide →
                </a>
              </div>
            ) : (
              <form onSubmit={handleSearch} className="flex gap-2 max-w-xl mx-auto">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={searchPlaceholder}
                  className="flex-1 px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-white/40"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.15)",
                    color: "#ffffff",
                    fontFamily: "'Montserrat', sans-serif",
                    border: "1px solid rgba(255,255,255,0.25)",
                  }}
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90 whitespace-nowrap"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#8b4a31",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  Search
                </button>
              </form>
            )}
          </>
        )}

        {!showSearch && (
          <a
            href="/cities/zurich"
            className="inline-block px-8 py-3.5 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "#ffffff",
              color: "#8b4a31",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Explore City Guides →
          </a>
        )}
      </div>
    </section>
  );
}
