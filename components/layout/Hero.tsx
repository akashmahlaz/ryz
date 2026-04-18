"use client";
import React, { useState } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function Hero() {
  const [email, setEmail] = useState("");
  const h1Ref = useScrollReveal();
  const pRef = useScrollReveal();
  const formRef = useScrollReveal();

  return (
    <div className="relative min-h-screen flex flex-col bg-white w-full min-w-0">
      {/* Background landscape image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          alt=""
          className="object-cover absolute inset-0 w-full h-full"
          src="/landscape-for-landing-3.png"
        />
        {/* Exact gradient overlay from production */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(15, 60, 25, 0.65) 0%, rgba(20, 80, 35, 0.45) 30%, rgba(30, 100, 50, 0.20) 55%, transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative flex-1 flex items-start lg:items-center pt-[116px] pb-16 lg:pt-20 lg:pb-0 min-w-0">
        <div className="max-w-[1800px] mx-auto w-full min-w-0 box-border px-5 sm:px-6 md:px-12 flex flex-col lg:flex-row items-stretch lg:items-start gap-12 lg:gap-8 xl:gap-10">
          {/* Left: Copy */}
          <div className="flex-1 min-w-0 w-full max-w-[1260px] lg:max-w-[45%] xl:max-w-[1260px] mt-0 lg:-mt-[30px] ml-0 lg:ml-[7px]">
            <h1
              ref={h1Ref}
              className="fade-in-up font-bold tracking-[-0.03em] text-white leading-[1.1] md:leading-[1.08] mb-8 md:mb-10 text-[42px] md:text-[55px] lg:text-[72px]"
              style={{ fontFamily: "'Satoshi', sans-serif" }}
            >
              AI agent that
              <br />
              does SEO
              <br />
              for you
            </h1>

            <p
              ref={pRef}
              className="fade-in-up text-[18px] md:text-[20px] lg:text-[22px] text-white/85 leading-[1.6] md:leading-relaxed mb-12 lg:mb-10 max-w-[440px] font-medium"
            >
              Autonomous technical audits, content
              <br />
              optimization, and rank tracking — on autopilot
            </p>

            {/* Email form — exact production markup */}
            <div ref={formRef} className="fade-in-up w-full max-w-[373px] mt-4 md:mt-6">
              <form
              className="flex items-center rounded-[3px] bg-white shadow-sm border border-zinc-200 h-[46px] md:h-[49px] overflow-hidden transition-all focus-within:ring-2 focus-within:ring-[#FF4801]/20 focus-within:border-[#FF4801]/40"
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
                  className="bg-zinc-900 text-white px-[20px] md:px-[24px] h-full font-medium whitespace-nowrap hover:bg-zinc-700 transition-all flex items-center gap-2 disabled:opacity-70 rounded-[3px] translate-x-[1.5px]"
                >
                  <span className="text-[16px] md:text-[18px]">Get started</span>
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
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Platform icons — exact production style (brightness-0 invert) */}
            <div className="flex flex-wrap items-center gap-5 mt-10 md:mt-12">
              {[
                { src: "/platform-google-ads-black.png", alt: "Google Ads" },
                { src: "/meta.png", alt: "Meta" },
                { src: "/google-analytics.svg", alt: "Google Analytics" },
              ].map((icon) => (
                <div key={icon.alt} className="h-7 w-11 relative">
                  <img
                    alt={icon.alt}
                    className="object-contain brightness-0 invert absolute inset-0 w-full h-full"
                    src={icon.src}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stacked glassmorphism cards + video mockup */}
          <div className="w-full min-w-0 max-w-full lg:flex-1 lg:self-start lg:-mt-[30px] flex justify-center lg:justify-start overflow-visible">
            <div className="relative w-full max-w-[953px]" style={{ minHeight: 550 }}>
              {/* Background card 1: Website builder */}
              <div
                className="absolute pointer-events-none"
                style={{
                  top: -88,
                  left: -4,
                  right: -24,
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
                }}
              >
                <div
                  style={{
                    padding: "5px 12px 0",
                    fontSize: "10.5px",
                    fontWeight: 800,
                    color: "rgba(255,255,255,0.90)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" />
                  Content optimization
                </div>
              </div>

              {/* Background card 2: AI for SEO (highlighted) */}
              <div
                className="absolute pointer-events-none"
                style={{
                  top: -58,
                  left: -8,
                  right: -18,
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
                }}
              >
                <div
                  style={{
                    padding: "5px 12px 0",
                    fontSize: "10.5px",
                    fontWeight: 800,
                    color: "rgba(255,255,255,0.92)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" />
                  AI for SEO
                </div>
              </div>

              {/* Background card 3: Rank tracking */}
              <div
                className="absolute pointer-events-none"
                style={{
                  top: -26,
                  left: -10,
                  right: -10,
                  bottom: -10,
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
                }}
              >
                <div
                  style={{
                    padding: "5px 12px 0",
                    fontSize: "10.5px",
                    fontWeight: 800,
                    color: "rgba(255,255,255,0.95)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" />
                  Rank tracking
                </div>
              </div>

              {/* Main mockup container with video */}
              <div
                className="pointer-events-auto rounded-[6px] overflow-hidden bg-[#f8f9fb] relative"
                style={{
                  boxShadow:
                    "0 25px 60px -10px rgba(0,0,0,0.20), 0 0 0 1px rgba(0,0,0,0.06)",
                  height: 550,
                  zIndex: 3,
                }}
              >
                {/* Video mockup — autoplay loop like production */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                  poster="/audit-screen-2-bigger-pixels.png"
                >
                  <source src="/videos/mcp-hero-audit.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
