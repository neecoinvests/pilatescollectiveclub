"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center"
      style={{
        backgroundColor: "rgba(252, 249, 248, 0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(217, 194, 186, 0.4)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-mark.svg"
            alt="Pilates Collective Club"
            width={40}
            height={28}
            priority
          />
          <span
            className="text-xl font-semibold tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif", color: "#8b4a31" }}
          >
            Pilates Collective Club
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/#finder"
            className="text-sm font-medium transition-colors hover:text-[#8b4a31]"
            style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
          >
            Finder
          </Link>
          <Link
            href="/blog/best-pilates-equipment-for-home-practice"
            className="text-sm font-medium transition-colors hover:text-[#8b4a31]"
            style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
          >
            Blog
          </Link>
          <Link
            href="/cities/zurich"
            className="text-sm font-medium transition-colors hover:text-[#8b4a31]"
            style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
          >
            Cities
          </Link>
          <Link
            href="/#about"
            className="text-sm font-medium transition-colors hover:text-[#8b4a31]"
            style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
          >
            About
          </Link>
        </nav>

        {/* Search Icon + Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Search Icon */}
          <button
            aria-label="Search"
            className="hidden md:flex items-center justify-center w-9 h-9 rounded-full transition-colors hover:bg-[#f0eded]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#86736d"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-5 h-0.5 transition-all"
              style={{ backgroundColor: "#53433e" }}
            />
            <span
              className="block w-5 h-0.5 transition-all"
              style={{ backgroundColor: "#53433e" }}
            />
            <span
              className="block w-5 h-0.5 transition-all"
              style={{ backgroundColor: "#53433e" }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div
          className="absolute top-20 left-0 right-0 md:hidden py-4 px-6 flex flex-col gap-4"
          style={{
            backgroundColor: "rgba(252, 249, 248, 0.98)",
            borderBottom: "1px solid rgba(217, 194, 186, 0.4)",
          }}
        >
          <Link
            href="/#finder"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium py-2"
            style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
          >
            Finder
          </Link>
          <Link
            href="/blog/best-pilates-equipment-for-home-practice"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium py-2"
            style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
          >
            Blog
          </Link>
          <Link
            href="/cities/zurich"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium py-2"
            style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
          >
            Cities
          </Link>
          <Link
            href="/#about"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium py-2"
            style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
          >
            About
          </Link>
        </div>
      )}
    </header>
  );
}
