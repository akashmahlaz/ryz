"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const desktopLinks = [
  { label: "AI for SEO", href: "/ai-for-seo" },
  { label: "AI Marketer", href: "https://www.get-ryze.ai/" },
  { label: "MCP", href: "https://www.get-ryze.ai/how-to-connect-claude-to-google-meta-ads-mcp" },
  { label: "Agency", href: "/agency" },
  { label: "FAQ", href: "/#faq" },
  { label: "About Us", href: "/about" },
];

const mobileMainLinks = [
  { label: "AI Marketer", href: "https://www.get-ryze.ai/" },
  { label: "Pricing", href: "https://www.get-ryze.ai/pricing" },
  { label: "MCP", href: "https://www.get-ryze.ai/how-to-connect-claude-to-google-meta-ads-mcp" },
  { label: "Agency", href: "/agency" },
  { label: "FAQ", href: "/#faq" },
];

const aboutLinks = [
  { label: "Our Story", href: "/about" },
  { label: "Case Studies", href: "https://www.get-ryze.ai/agency" },
  { label: "Community", href: "https://www.get-ryze.ai/" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (label: string) => {
    if (label === "AI for SEO") return pathname === "/ai-for-seo";
    if (label === "AI Marketer") return pathname === "/";
    return false;
  };

  const lightMode = scrolled || mobileOpen;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-50 px-6 md:px-12 pt-1.75 pb-0.5 transition-all duration-500 ease-out ${
          lightMode
            ? "bg-white/90 backdrop-blur-md border-b border-zinc-200 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-350 mx-auto flex items-center justify-between relative">
          <div className="flex items-center gap-2 translate-y-0.75 ml-0.5">
            <a href="/" className="flex items-center gap-2">
              <img
                src="/main-logo-sun-2.png"
                alt="Ryze"
                className={`object-contain transition-all duration-500 ease-out w-9.5 h-9.5 ${lightMode ? "" : "invert"}`}
              />
              <span
                className={`tracking-[-0.01em] transition-all duration-500 ease-out -translate-y-0.5 text-[33px] ${lightMode ? "text-black" : "text-white"}`}
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800 }}
              >
                Ryze
              </span>
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-10.5 absolute left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-500 ease-out translate-y-1.25">
            {desktopLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`transition-all duration-500 ease-out tracking-wide text-[15.3px] font-medium ${
                  isActive(link.label)
                    ? lightMode
                      ? "text-black"
                      : "text-white"
                    : lightMode
                      ? "text-zinc-500 hover:text-black"
                      : "text-white hover:text-white/70"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4 translate-y-px">
            <a
              href="#cta"
              className="hidden sm:block font-medium rounded transition-all duration-500 ease-out text-sm px-5 py-2.5 bg-black text-white hover:bg-zinc-800"
            >
              Get started
            </a>

            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((v) => !v)}
              className={`lg:hidden p-2 -mr-2 rounded-full transition-colors ${
                lightMode ? "text-black hover:bg-black/5" : "text-white hover:bg-white/10"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
                aria-hidden="true"
              >
                <path d="M4 5h16" />
                <path d="M4 12h16" />
                <path d="M4 19h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-90 bg-[#f7f7f4] overflow-y-auto">
          <div className="px-4 pt-3 pb-5 min-h-full flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <a href="/" className="flex items-center gap-2">
                <img src="/main-logo-sun-2.png" alt="Ryze" className="w-9 h-9 object-contain" />
                <span
                  className="tracking-[-0.01em] text-[33px] text-black"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800 }}
                >
                  Ryze
                </span>
              </a>

              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-11 h-11 rounded-full border border-[#D99612] text-zinc-800"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {pathname === "/ai-for-seo" && (
                <a href="/ai-for-seo" className="py-1 text-[18px] font-medium text-zinc-500">
                  AI for SEO
                </a>
              )}

              {mobileMainLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="py-1 text-[22px] font-semibold tracking-[-0.03em] text-black"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-8 border-t border-zinc-200 pt-7">
              <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-zinc-400 mb-3">
                About Us
              </div>
              <div className="flex flex-col gap-3">
                {aboutLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="py-1 text-[18px] font-medium tracking-[-0.02em] text-black"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-8 border-t border-zinc-200">
              <a
                href="#cta"
                className="flex w-full items-center justify-center rounded-lg bg-black text-white px-4 py-4 text-[15px] font-medium"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
