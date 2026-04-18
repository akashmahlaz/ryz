"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import SEOAuditMock from "./SEOAuditMock";

const platformIcons = [
  {
    name: "Google Search Console",
    src: "https://www.gstatic.com/images/branding/product/1x/searchconsole_64dp.png",
  },
  {
    name: "Google Analytics",
    src: "https://www.gstatic.com/images/branding/product/1x/analytics_64dp.png",
  },
  {
    name: "Ahrefs",
    src: "https://ahrefs.com/favicon.ico",
  },
  {
    name: "SEMrush",
    src: "https://www.semrush.com/favicon.ico",
  },
  {
    name: "Screaming Frog",
    src: "https://www.screamingfrog.co.uk/favicon.ico",
  },
];

export default function Hero() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative min-h-[110vh] overflow-hidden flex flex-col">
      {/* Pixel-art landscape background */}
      <div
        className="absolute inset-0 w-full h-full pixelated"
        style={{
          background:
            "url(https://media.base44.com/images/public/69e38b1d5a737c4dacc714f2/d20eb468a_generated_d6f43358.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />

      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-28 md:pt-36 pb-20 flex-1 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left: copy */}
        <div className="text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-semibold text-white/90 tracking-wide">
              Coming Soon — Join the waitlist
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-[4rem] font-black tracking-tight leading-[1.06] drop-shadow-[0_4px_16px_rgba(0,0,0,0.4)] max-w-xl">
            AI agent that{" "}
            <span className="text-gradient-ryze">does SEO</span>
            {" "}for you
          </h1>

          <p className="mt-5 text-lg md:text-xl text-white/85 max-w-lg leading-relaxed">
            Ryze autonomously audits, optimizes, and ranks your pages — technical
            SEO, content, keywords, Core Web Vitals. All without you lifting a
            finger.
          </p>

          {/* Email form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 email-pill max-w-md"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="placeholder-white/40"
              style={{ color: "white" }}
            />
            <button type="submit" className="btn-primary shrink-0">
              Get started
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </form>

          {/* Platform icons */}
          <div className="mt-10">
            <p className="text-xs text-white/60 font-medium uppercase tracking-widest mb-3">
              Integrates with your stack
            </p>
            <div className="flex flex-wrap gap-3">
              {platformIcons.map((icon) => (
                <div
                  key={icon.name}
                  className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/25 transition-all duration-200 hover:scale-105"
                  title={icon.name}
                >
                  <img
                    src={icon.src}
                    alt={icon.name}
                    className="w-6 h-6 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: SEO audit mock */}
        <div className="lg:pl-4">
          <SEOAuditMock />
        </div>
      </div>
    </section>
  );
}
