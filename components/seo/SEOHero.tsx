"use client";

import React, { useState } from "react";

/* ─── Platform logos relevant to SEO ─── */
const SEO_LOGOS = [
  { src: "/google-analytics.svg", alt: "Google Search Console" },
  { src: "/icons-google-analytics.png", alt: "Google Analytics" },
  { src: "/platform-shopify.png", alt: "Shopify" },
  { src: "/platform-perplexity.png", alt: "Perplexity" },
  { src: "/platform-chatgpt.png", alt: "ChatGPT" },
];

/* ─── Stack cards (glassmorphism behind dashboard mock) ─── */
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

/* ─── Dashboard data ─── */
const AUDIT_ITEMS = [
  {
    text: "Fix 12 broken internal links draining crawl budget",
    impact: "+18% crawl",
  },
  {
    text: "Add schema markup to 34 product pages",
    impact: "+22% CTR",
  },
  {
    text: "Compress 89 images over 500KB slowing CWV",
    impact: "+15 LCP",
  },
  {
    text: "Redirect 41 404 pages with existing backlinks",
    impact: "+2.1K links",
  },
  {
    text: "Optimize 23 title tags exceeding 60 chars",
    impact: "+12% CTR",
  },
];

const RANKINGS = [
  { keyword: "ai seo tool", position: 3, change: 12 },
  { keyword: "seo automation", position: 5, change: 8 },
  { keyword: "ai marketing agent", position: 7, change: 15 },
  { keyword: "automated seo audit", position: 4, change: 6 },
];

const SPARKLINE = [
  12, 15, 18, 22, 20, 25, 28, 32, 30, 35, 38, 42, 45, 44, 48, 50, 55, 58,
  56, 62, 65, 68, 72, 70, 75, 78, 82, 85, 88, 95,
];

export default function SEOHero() {
  const [email, setEmail] = useState("");

  return (
    <div className="relative min-h-screen flex flex-col bg-white w-full min-w-0 overflow-hidden">
      {/* ── Background landscape + gradient overlay ── */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          alt=""
          className="object-cover absolute inset-0 w-full h-full"
          src="/landscape-for-landing-3.png"
        />
        {/* Slightly cooler teal-green overlay for SEO distinction */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(130deg, rgba(10,55,35,0.72) 0%, rgba(15,75,50,0.50) 30%, rgba(25,95,60,0.22) 55%, transparent 72%)",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative flex-1 flex items-start lg:items-center pt-[116px] pb-8 max-lg:pt-[8.25rem] max-[399px]:pt-[7.75rem] max-[399px]:pb-12 lg:pt-20 lg:pb-0 min-w-0 min-h-min max-lg:overflow-visible">
        <div className="max-w-[1400px] mx-auto w-full min-w-0 box-border px-5 min-[400px]:px-6 sm:px-6 md:px-12 flex flex-col max-[399px]:gap-10 lg:flex-row items-stretch max-[399px]:items-stretch lg:items-center gap-12 lg:gap-6 xl:gap-8 max-lg:overflow-visible">
          {/* ─ LEFT: Text + Form ─ */}
          <div className="flex-1 min-w-0 w-full lg:max-w-[36%] xl:max-w-[34%] mt-0">
            <h1
              className="hero-fade-up font-bold tracking-[-0.03em] text-white leading-[1.1] md:leading-[1.08] mb-5 md:mb-6 text-[42px] max-[399px]:text-[2.1rem] max-[399px]:leading-[1.12] max-[399px]:break-words md:text-[55px] lg:text-[72px]"
              style={{ fontFamily: "'Satoshi', sans-serif" }}
            >
              AI agent
              <br />
              that runs
              <br />
              your SEO
            </h1>

            <p className="hero-fade-up hero-delay-1 text-[18px] max-[399px]:text-[16px] md:text-[20px] lg:text-[22px] text-white/85 leading-[1.6] md:leading-relaxed mb-6 max-[399px]:mb-4 lg:mb-6 max-w-[440px] max-[399px]:max-w-full font-medium max-[399px]:break-words">
              Technical audits, content optimization,
              <br className="hidden md:block" /> rank tracking — autonomous,
              24/7.
            </p>

            {/* Email form */}
            <div className="hero-fade-up hero-delay-2 w-full max-w-[373px] max-[399px]:max-w-full mt-4 md:mt-6">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center rounded-[3px] bg-white shadow-sm border border-zinc-200 h-[46px] md:h-[49px] overflow-hidden transition-all focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-500/40"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none px-4 md:px-5 text-[17px] md:text-[19px] text-black placeholder:text-black/40 min-w-0 h-full"
                />
                <button
                  type="submit"
                  className="bg-zinc-900 text-white px-5 md:px-6 h-full font-medium whitespace-nowrap hover:bg-zinc-700 transition-all flex items-center gap-2 disabled:opacity-70 rounded-[3px] translate-x-[1.5px]"
                >
                  <span className="text-[16px] md:text-[18px]">
                    Get started
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Platform logos */}
            <div className="hero-fade-up hero-delay-3 flex flex-wrap items-center gap-5 max-[399px]:gap-3 mt-6 max-[399px]:mt-4 md:mt-8">
              {SEO_LOGOS.map((logo) => (
                <div key={logo.alt} className="h-7 w-11 relative">
                  <img
                    alt={logo.alt}
                    className="object-contain brightness-0 invert absolute inset-0 w-full h-full"
                    src={logo.src}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ─ RIGHT: Dashboard Mockup with Stack Cards ─ */}
          <div className="hero-fade-right w-full min-w-0 lg:flex-1 mt-6 lg:-mt-[30px] relative">
            <div className="relative">
              {/* Glassmorphic stack cards behind */}
              {STACK_CARDS.map((c) => (
                <div
                  key={c.label}
                  className="pointer-events-none absolute rounded-[6px] overflow-hidden"
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

              {/* ── SEO Dashboard Mock ── */}
              <div style={{ position: "relative", zIndex: 3 }}>
                <div className="bg-[#F8F9FB] rounded-[6px] border border-black/[0.08] shadow-[0_25px_60px_-10px_rgba(0,0,0,0.20),0_0_0_1px_rgba(0,0,0,0.06)] overflow-hidden">
                  {/* macOS window chrome */}
                  <div className="flex items-center px-3 py-2.5 bg-[#EFECE4] border-b border-black/[0.06]">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                    </div>
                    <span className="flex-1 text-center text-[10px] text-zinc-400 font-medium tracking-wide">
                      Ryze SEO Agent — yourdomain.com
                    </span>
                  </div>

                  {/* Tab bar */}
                  <div className="flex border-b border-zinc-200/60 bg-white">
                    {["Overview", "Technical", "Content", "Rankings"].map(
                      (tab, i) => (
                        <button
                          key={tab}
                          className={`px-3 md:px-4 py-2 text-[10px] md:text-[11px] font-medium transition-colors ${
                            i === 0
                              ? "text-black border-b-2 border-black"
                              : "text-zinc-400 border-b-2 border-transparent"
                          }`}
                        >
                          {tab}
                        </button>
                      )
                    )}
                  </div>

                  {/* Dashboard content */}
                  <div className="p-3 md:p-4 space-y-3 md:space-y-4 bg-white">
                    {/* ▸ Site Health Score */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500">
                          Site Health
                        </span>
                        <span className="flex items-center gap-1 text-[8px] md:text-[9px] text-emerald-500 font-medium">
                          <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                          Updated now
                        </span>
                      </div>
                      <div className="flex items-end gap-2 mb-2">
                        <span className="text-[24px] md:text-[28px] font-bold text-black leading-none">
                          92
                        </span>
                        <span className="text-[11px] md:text-[12px] text-zinc-400 mb-0.5">
                          /100
                        </span>
                      </div>
                      {/* Score bar */}
                      <div className="h-1.5 rounded-full bg-zinc-100 overflow-hidden mb-2">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: "92%",
                            background:
                              "linear-gradient(90deg, #34d399 0%, #10b981 100%)",
                          }}
                        />
                      </div>
                      <div className="flex gap-3 md:gap-4">
                        {[
                          {
                            label: "Critical",
                            count: 3,
                            color: "bg-red-400",
                          },
                          {
                            label: "Warnings",
                            count: 12,
                            color: "bg-amber-400",
                          },
                          {
                            label: "Passed",
                            count: 847,
                            color: "bg-emerald-400",
                          },
                        ].map((item) => (
                          <span
                            key={item.label}
                            className="flex items-center gap-1 text-[8px] md:text-[9px]"
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${item.color}`}
                            />
                            <span className="text-zinc-500">{item.label}</span>
                            <span className="font-semibold text-zinc-700">
                              {item.count}
                            </span>
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="h-px bg-zinc-100" />

                    {/* ▸ Auto-Fixes */}
                    <div>
                      <span className="text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500 mb-2 block">
                        Auto-Fixes Ready
                      </span>
                      <div className="space-y-1.5">
                        {AUDIT_ITEMS.slice(0, 4).map((item, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 py-1.5 px-2 rounded-[3px] bg-zinc-50/80 border border-zinc-100"
                          >
                            <span className="text-[9px] md:text-[10px] text-zinc-600 flex-1 leading-tight">
                              {item.text}
                            </span>
                            <span className="text-[8px] md:text-[9px] text-emerald-500 font-medium shrink-0">
                              {item.impact}
                            </span>
                            <span className="text-[7px] md:text-[8px] bg-zinc-900 text-white px-1.5 md:px-2 py-0.5 rounded-[2px] font-medium shrink-0">
                              Apply
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="h-px bg-zinc-100" />

                    {/* ▸ Organic Traffic Sparkline */}
                    <div>
                      <span className="text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500 mb-2 block">
                        Organic Traffic · Last 30 days
                      </span>
                      <div className="flex items-end gap-2 mb-2">
                        <span className="text-[16px] md:text-[18px] font-bold text-black leading-none">
                          23,451
                        </span>
                        <span className="text-[10px] md:text-[11px] text-emerald-500 font-medium">
                          ↑ +142%
                        </span>
                      </div>
                      <div className="flex items-end gap-[2px] h-8 md:h-10">
                        {SPARKLINE.map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t-[1px]"
                            style={{
                              height: `${h}%`,
                              background: `rgba(52, 211, 153, ${0.25 + (h / 95) * 0.55})`,
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="h-px bg-zinc-100" />

                    {/* ▸ Top Rankings */}
                    <div>
                      <span className="text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500 mb-2 block">
                        Top Rankings
                      </span>
                      <div className="space-y-1 md:space-y-1.5">
                        {RANKINGS.map((r, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between text-[9px] md:text-[10px]"
                          >
                            <span className="text-zinc-600 truncate mr-2">
                              &ldquo;{r.keyword}&rdquo;
                            </span>
                            <div className="flex items-center gap-2 shrink-0">
                              <span className="font-bold text-zinc-800">
                                #{r.position}
                              </span>
                              <span className="text-emerald-500 text-[8px] md:text-[9px] font-medium">
                                ↑{r.change}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
