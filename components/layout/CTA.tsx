"use client";
import React, { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");

  return (
    <>
      {/* Stats section — matches Ryze's footer stats exactly */}
      <section className="relative w-full min-h-[70vh] overflow-hidden ryze-grid bg-[#F5FAF0]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            {/* Left: CTA */}
            <div className="flex-1 max-w-xl">
              <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold tracking-[-0.03em] leading-tight text-black">
                Let AI Run
                <br />
                Your SEO
              </h2>
              <p className="mt-4 text-[15px] text-zinc-500 leading-relaxed max-w-md">
                Get your autonomous SEO agent. Connect Google Search Console, Analytics,
                and let Ryze handle technical audits, content optimization, and rank tracking.
              </p>

              {/* Email form */}
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-6 flex items-center rounded-[3px] bg-white shadow-sm border border-zinc-200 h-[48px] sm:h-[52px] overflow-hidden max-w-md transition-all focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-500/40"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="flex-1 bg-transparent border-none outline-none px-4 sm:px-5 text-[15px] sm:text-[16px] text-zinc-900 placeholder:text-zinc-400 min-w-0 h-full"
                />
                <button
                  type="submit"
                  className="shrink-0 bg-zinc-900 text-white px-3.5 sm:px-5 md:px-7 h-full min-h-[50px] font-medium whitespace-nowrap hover:bg-zinc-700 transition-all flex items-center justify-center gap-1.5 sm:gap-2 rounded-[3px] translate-x-[1.5px]"
                >
                  <span className="text-[14px] sm:text-[15px]">Get started</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </form>

              <p className="mt-3 text-xs text-zinc-400">
                Need help?{" "}
                <a href="mailto:hello@get-ryze.ai" className="underline hover:text-zinc-600 transition-colors">
                  hello@get-ryze.ai
                </a>{" "}
                /{" "}
                <a href="https://wa.me/16314805598" className="underline hover:text-zinc-600 transition-colors">
                  Text/WhatsApp +1 631 480 55 98
                </a>
              </p>
            </div>

            {/* Right: Live stats */}
            <div className="flex-1 w-full">
              <p className="text-[13px] font-medium text-zinc-500 mb-6">
                Live results across <span className="text-black font-bold">2,000+ clients</span>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* SEO stats */}
                <div className="space-y-4">
                  <p className="text-[11px] font-semibold text-emerald-600 uppercase tracking-widest flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    SEO
                  </p>
                  <div>
                    <p className="text-[11px] text-zinc-400">Organic visits driven</p>
                    <p className="text-[28px] font-bold text-black tracking-tight">23.5M</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-zinc-400">Keywords on page 1</p>
                    <p className="text-[28px] font-bold text-black tracking-tight">48k+</p>
                  </div>
                </div>

                {/* Content stats */}
                <div className="space-y-4">
                  <p className="text-[11px] font-semibold text-blue-600 uppercase tracking-widest flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    Content
                  </p>
                  <div>
                    <p className="text-[11px] text-zinc-400">AI articles published</p>
                    <p className="text-[28px] font-bold text-black tracking-tight">12k+</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-zinc-400">Avg. time to rank</p>
                    <p className="text-[28px] font-bold text-black tracking-tight">14 days</p>
                  </div>
                </div>

                {/* Technical stats */}
                <div className="space-y-4">
                  <p className="text-[11px] font-semibold text-purple-600 uppercase tracking-widest flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    Technical
                  </p>
                  <div>
                    <p className="text-[11px] text-zinc-400">Issues auto-fixed</p>
                    <p className="text-[28px] font-bold text-black tracking-tight">250k+</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-zinc-400">Core Web Vitals pass</p>
                    <p className="text-[28px] font-bold text-black tracking-tight">94%</p>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-[11px] text-zinc-300">
                Last updated: Apr 18, 2026 · All systems ok
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-zinc-100 py-8">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-sm text-zinc-400">
            <a href="/about" className="hover:text-zinc-600 transition-colors">About</a>
            <a href="/privacy" className="hover:text-zinc-600 transition-colors">Privacy Policy</a>
            <a href="/term-services" className="hover:text-zinc-600 transition-colors">Terms of Service</a>
            <a href="mailto:hello@get-ryze.ai" className="hover:text-zinc-600 transition-colors">hello@get-ryze.ai</a>
          </div>
          <p className="text-xs text-zinc-300">© 2026 Ryze AI</p>
        </div>
      </footer>
    </>
  );
}
