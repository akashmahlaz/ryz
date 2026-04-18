"use client";
import React, { useEffect, useState } from "react";

const navLinks = [
  { label: "AI for SEO", href: "#", active: true },
  { label: "AI Marketer", href: "https://www.get-ryze.ai/" },
  { label: "MCP", href: "https://www.get-ryze.ai/how-to-connect-claude-to-google-meta-ads-mcp" },
  { label: "Agency", href: "/agency" },
  { label: "FAQ", href: "#faq" },
  { label: "About Us", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-zinc-200 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-12 h-[60px]">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 translate-y-[2px]">
          <img
            src="/main-logo-sun-2.png"
            alt="Ryze"
            className={`object-contain transition-all duration-500 ease-out w-[34px] h-[34px] ${
              scrolled ? "" : "invert"
            }`}
          />
          <span
            className={`tracking-[-0.01em] transition-all duration-500 ease-out -translate-y-[1px] text-[28px] ${
              scrolled ? "text-black" : "text-white"
            }`}
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800 }}
          >
            Ryze
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                link.active
                  ? scrolled
                    ? "text-black font-semibold"
                    : "text-white font-semibold"
                  : scrolled
                  ? "text-zinc-500 hover:text-black"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA button */}
        <a
          href="#cta"
          className={`hidden sm:flex items-center gap-2 font-medium rounded-[3px] transition-all duration-500 ease-out text-sm px-5 py-2.5 ${
            scrolled
              ? "bg-black text-white hover:bg-zinc-800"
              : "bg-black text-white hover:bg-zinc-800"
          }`}
        >
          Get started
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </a>

        {/* Mobile menu */}
        <button
          className={`lg:hidden p-2 -mr-2 rounded-[3px] transition-colors ${
            scrolled ? "text-black hover:bg-black/5" : "text-white hover:bg-white/10"
          }`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
