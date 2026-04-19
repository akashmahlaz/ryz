"use client";
import React, { useState } from "react";
import SEOHeroMockup from "./SEOHeroMockup";

const HERO_LOGOS = [
  { src: "/google-analytics.svg", alt: "Google Search Console" },
  { src: "/platform-semrush.svg", alt: "SEMrush" },
  { src: "/platform-wordpress.svg", alt: "WordPress" },
  { src: "/platform-shopify.png", alt: "Shopify" },
];

type StackCard = {
  label: string;
  textColor: string;
  style: React.CSSProperties;
};

const STACK_CARDS: StackCard[] = [
  {
    label: "Link intelligence",
    textColor: "rgba(255,255,255,0.90)",
    style: {
      top: -88,
      left: -4,
      right: -8,
      bottom: -16,
      transform: "rotate(1.8deg)",
      transformOrigin: "bottom left",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.18)",
      borderRadius: 6,
      boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
      zIndex: 0,
      overflow: "hidden",
    },
  },
  {
    label: "Content optimization",
    textColor: "rgba(255,255,255,0.92)",
    style: {
      top: -58,
      left: -6,
      right: -5,
      bottom: -12,
      transform: "rotate(1deg)",
      transformOrigin: "bottom left",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      background: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.25)",
      borderRadius: 6,
      boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
      zIndex: 1,
      overflow: "hidden",
    },
  },
  {
    label: "Technical SEO",
    textColor: "rgba(255,255,255,0.95)",
    style: {
      top: -26,
      left: -8,
      right: -2,
      bottom: -8,
      transform: "rotate(0deg)",
      transformOrigin: "bottom left",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      background: "rgba(255,255,255,0.10)",
      border: "1px solid rgba(255,255,255,0.35)",
      borderRadius: 6,
      boxShadow:
        "0 12px 48px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.40)",
      zIndex: 2,
      overflow: "hidden",
    },
  },
];

export default function SEOHero() {
  const [email, setEmail] = useState("");

  return (
    <div className="relative min-h-screen lg:min-h-screen flex flex-col bg-white w-full min-w-0 overflow-hidden">
      {/* Background landscape + green gradient wash */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          alt=""
          className="object-cover absolute inset-0 w-full h-full"
          src="/image.png"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(15, 60, 25, 0.65) 0%, rgba(20, 80, 35, 0.45) 30%, rgba(30, 100, 50, 0.20) 55%, transparent 70%)",
          }}
        />
      </div>

      {/* Content row */}
      <div className="relative flex-1 flex items-start lg:items-center pt-24 pb-6 sm:pt-[116px] sm:pb-8 max-lg:pt-[8.25rem] max-[399px]:pt-[7rem] max-[399px]:pb-6 lg:pt-20 lg:pb-0 min-w-0 min-h-min max-lg:overflow-visible">
        <div className="max-w-[1400px] mx-auto w-full min-w-0 box-border px-4 min-[400px]:px-5 sm:px-6 md:px-12 flex flex-col max-[399px]:gap-6 lg:flex-row items-stretch max-[399px]:items-stretch lg:items-center gap-8 lg:gap-6 xl:gap-8 max-lg:overflow-visible">
          {/* LEFT */}
          <div className="flex-1 min-w-0 w-full lg:max-w-[36%] xl:max-w-[34%] mt-0">
            <h1
              className="hero-fade-up font-bold tracking-[-0.03em] text-white leading-[1.1] mb-4 sm:mb-5 md:mb-6 text-[42px] sm:text-[48px] md:text-[55px] lg:text-[72px]"
              style={{ fontFamily: "'Satoshi', sans-serif" }}
            >
              AI agent
              <br />
              that runs
              <br />
              your SEO
            </h1>

            <p className="hero-fade-up hero-delay-1 text-[17px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-white/85 leading-[1.55] md:leading-relaxed mb-4 sm:mb-6 lg:mb-6 max-w-[440px] font-medium">
              Technical audits, content optimization,
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>rank tracking — on autopilot
            </p>

            <div className="hero-fade-up hero-delay-2 w-full max-w-[373px] mt-2 sm:mt-4 md:mt-6">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center rounded-[3px] bg-white shadow-sm border border-zinc-200 h-11 sm:h-[46px] md:h-[49px] overflow-hidden transition-all focus-within:ring-2 focus-within:ring-[#FF4801]/20 focus-within:border-[#FF4801]/40"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none px-3 sm:px-4 md:px-5 text-[15px] sm:text-[17px] md:text-[19px] text-black placeholder:text-black/40 min-w-0 h-full"
                />
                <button
                  type="submit"
                  className="bg-zinc-900 text-white px-4 sm:px-5 md:px-6 h-full font-medium whitespace-nowrap hover:bg-zinc-700 transition-all flex items-center gap-1.5 sm:gap-2 disabled:opacity-70 rounded-[3px] translate-x-[1.5px]"
                >
                  <span className="text-[14px] sm:text-[16px] md:text-[18px]">Get started</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Logo strip */}
            <div className="hero-fade-up hero-delay-3 flex flex-wrap items-center gap-4 sm:gap-5 mt-4 sm:mt-6 md:mt-8">
              {HERO_LOGOS.map((logo) => (
                <div key={logo.alt} className="h-6 w-9 sm:h-7 sm:w-11 relative">
                  <img
                    alt={logo.alt}
                    className="object-contain brightness-0 invert absolute inset-0 w-full h-full"
                    src={logo.src}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — mockup */}
          <div className="hero-fade-right w-full min-w-0 lg:flex-1 mt-2 sm:mt-4 lg:-mt-[30px] relative">
            <div className="relative">
              {STACK_CARDS.map((c) => (
                <div
                  key={c.label}
                  className="pointer-events-none absolute rounded-[6px] overflow-hidden hidden sm:block"
                  style={c.style}
                >
                  <div
                    style={{
                      padding: "5px 12px 0",
                      fontSize: "10.5px",
                      fontWeight: 800,
                      wordSpacing: "1px",
                      color: c.textColor,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase" as const,
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor: "#4ade80",
                        flexShrink: 0,
                        display: "inline-block",
                      }}
                    />
                    {c.label}
                  </div>
                </div>
              ))}

              <div style={{ position: "relative", zIndex: 3 }}>
                <SEOHeroMockup />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Connect Claude pill — mobile + desktop */}
      <a
        href="#"
        className="fixed bottom-3 right-3 md:bottom-6 md:right-4 z-50 flex items-center gap-1.5 md:gap-2 text-neutral-900 pl-2 md:pl-2.5 pr-2.5 md:pr-3.5 py-2 md:py-3 rounded-full shadow-[0_2px_20px_rgba(0,0,0,0.08),-6px_0_15px_rgba(0,0,0,0.06)] border border-neutral-200 hover:brightness-95 hover:scale-105 transition-all no-underline group max-w-[220px] md:max-w-none"
        style={{ background: "linear-gradient(135deg, #FFF6EE 0%, #FFEFE2 50%, #FFDDC4 100%)" }}
      >
        <img src="/images/mcp-3-steps/claude_logo.png" alt="Claude AI" className="h-6 w-6 md:h-[34px] md:w-[34px] rounded-full object-contain shrink-0" style={{ animation: "mcpSpin 25s linear infinite" }} />
        <span className="text-[12px] md:text-[17px] font-medium leading-tight">
          <span className="hidden md:inline">Audit &amp; optimize your SEO<br />with Claude in 1 click</span>
          <span className="md:hidden">SEO audit with Claude</span>
        </span>
        <span className="text-[#FF4801] font-normal text-[32px] md:text-[44px] leading-none self-center group-hover:translate-x-0.5 transition-transform shrink-0" style={{ transform: "scaleX(0.5) translateY(-3px)" }}>&gt;</span>
      </a>
    </div>
  );
}
