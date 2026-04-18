"use client";
import React, { useState } from "react";

export default function AuditCTA() {
  const [email, setEmail] = useState("");

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#FEFEF5]">
      {/* Background gradient fading from left to right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(245,250,240,1) 0%, rgba(254,254,245,0.6) 50%, rgba(254,254,245,1) 100%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left: Audit screenshot */}
          <div className="flex-1 w-full max-w-lg">
            <div className="relative rounded-[3px] overflow-hidden shadow-[0_1px_2px_0_rgba(0,0,0,0.025)] ring-1 ring-black/5">
              <img
                src="/audit-screen-2-bigger-pixels.png"
                alt="SEO Audit preview"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right: Heading + steps + email form */}
          <div className="flex-1 max-w-xl">
            <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold tracking-[-0.03em] text-black leading-tight">
              Get a free audit
              <br />
              of your SEO
            </h2>

            <div className="mt-8 space-y-6">
              {/* Step 1 */}
              <div className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full border border-zinc-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[13px] font-bold text-zinc-600">1</span>
                </div>
                <div>
                  <p className="text-[15px] text-zinc-700 leading-relaxed">
                    Leave us your email
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full border border-zinc-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[13px] font-bold text-zinc-600">2</span>
                </div>
                <div>
                  <p className="text-[15px] text-zinc-700 leading-relaxed">
                    We&apos;ll send you a free audit in one hour
                  </p>
                </div>
              </div>
            </div>

            {/* Email form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 flex items-center rounded-[3px] bg-white shadow-sm border border-zinc-200 h-[48px] overflow-hidden max-w-md transition-all focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-500/40"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="flex-1 bg-transparent border-none outline-none px-4 text-[15px] text-zinc-900 placeholder:text-zinc-400 min-w-0 h-full"
              />
              <button
                type="submit"
                className="shrink-0 bg-zinc-900 text-white px-5 h-full font-medium whitespace-nowrap hover:bg-zinc-700 transition-all flex items-center justify-center gap-2 rounded-[3px] translate-x-[1.5px]"
              >
                <span className="text-[14px]">Get free audit</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </form>

            <p className="mt-3 text-[12px] text-zinc-400">
              No credit card required · Audit delivered in 1 hour
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
