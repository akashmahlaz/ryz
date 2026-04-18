"use client";
import React, { useState } from "react";
import SEOAuditMock from "./SEOAuditMock";

export default function Hero() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col">
      {/* Pixel-art landscape background */}
      <img
        src="/base44.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover pixelated"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/30" />

      <div className="relative z-10 max-w-[1800px] mx-auto w-full px-6 md:px-12 pt-28 md:pt-36 pb-20 flex-1 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        {/* Left copy */}
        <div className="flex-1 text-white max-w-xl">
          <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold tracking-[-0.03em] leading-[1.05]">
            AI agent that does
            <br />
            SEO for you
          </h1>

          <p className="mt-5 text-[17px] md:text-[19px] text-white/85 max-w-lg leading-relaxed">
            Ryze autonomously runs technical audits, optimizes content, tracks
            rankings, and fixes Core Web Vitals — 24/7, on autopilot.
          </p>

          {/* Email form — exact Ryze production style */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex items-center rounded-[3px] bg-white shadow-sm border border-zinc-200 h-[48px] sm:h-[52px] overflow-hidden max-w-md transition-all focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-500/40"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-transparent border-none outline-none px-4 sm:px-5 text-[15px] sm:text-[16px] text-zinc-900 placeholder:text-zinc-400 min-w-0 h-full"
            />
            <button
              type="submit"
              className="bg-zinc-900 text-white px-[20px] md:px-[24px] h-full font-medium whitespace-nowrap hover:bg-zinc-700 transition-all flex items-center gap-2 rounded-[3px] translate-x-[1.5px]"
            >
              <span className="text-[14px] sm:text-[15px]">Get started</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </form>

          {/* Platform icons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {[
              { src: "/google_ads.png", alt: "Google Ads" },
              { src: "/google-analytics.svg", alt: "Google Analytics" },
              { src: "/meta.png", alt: "Meta" },
            ].map((icon) => (
              <div
                key={icon.alt}
                className="w-10 h-10 rounded-[3px] bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center"
              >
                <img src={icon.src} alt={icon.alt} className="w-6 h-6 object-contain" />
              </div>
            ))}
            <span className="text-xs text-white/50 font-medium ml-1">
              + Google Search Console, Ahrefs & more
            </span>
          </div>
        </div>

        {/* Right: SEO audit mock */}
        <div className="flex-1 max-w-2xl w-full lg:pl-4">
          <SEOAuditMock />
        </div>
      </div>
    </section>
  );
}
