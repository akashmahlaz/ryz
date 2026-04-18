import React from "react";

const navLinks = [
  { label: "AI for SEO", href: "#", active: true },
  { label: "AI Marketer", href: "#" },
  { label: "MCP", href: "#" },
  { label: "Agency", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "About Us", href: "#" },
];

export default function Navbar() {
  return (
    <nav className="absolute top-0 inset-x-0 z-30 px-6 md:px-10 pt-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <img
            src="https://media.base44.com/images/public/69e38b1d5a737c4dacc714f2/7fb2485a9_generated_b004d738.png"
            alt="Ryze"
            className="w-8 h-8 pixelated"
          />
          <span className="text-white font-bold text-xl tracking-tight">Ryze</span>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                link.active
                  ? "bg-white/20 text-white backdrop-blur-sm ring-1 ring-white/30"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#cta"
            className="bg-black text-white rounded-full px-5 py-2.5 text-sm font-semibold flex items-center gap-1.5 hover:bg-black/80 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Get started
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="lg:hidden text-white text-sm font-medium bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
          Menu
        </button>
      </div>
    </nav>
  );
}
