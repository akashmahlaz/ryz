import React from "react";

export default function Navbar() {
  const links = ["AI Marketer", "MCP", "Agency", "FAQ", "About Us"];
  return (
    <nav className="absolute top-0 inset-x-0 z-30 px-6 md:px-10 pt-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="https://media.base44.com/images/public/69e38b1d5a737c4dacc714f2/7fb2485a9_generated_b004d738.png"
            alt="Ryze"
            className="w-8 h-8 pixelated"
          />
          <span className="text-white font-bold text-xl tracking-tight">Ryze</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-white/90 text-sm font-medium">
          {links.map((l) => (
            <a key={l} href="#" className="hover:text-white transition-colors">
              {l}
            </a>
          ))}
        </div>
        <div className="md:hidden text-white text-sm">Menu</div>
      </div>
    </nav>
  );
}