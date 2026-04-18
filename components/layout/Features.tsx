"use client";
import React from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";

const features = [
  {
    title: "Autonomous\nSEO agent",
    items: ["Technical SEO audits on autopilot", "AI-powered content optimization"],
    platforms: ["/google-analytics.svg", "/google_ads.png"],
    screenshot: "/audit-screen-2-bigger-pixels.png",
  },
  {
    title: "Autonomous\nrank tracking",
    items: ["Real-time keyword monitoring", "Competitor position alerts"],
    platforms: ["/google-analytics.svg"],
    screenshot: "/mcp-weekly-snapshot.png",
  },
  {
    title: "Autonomous\nsite optimization",
    items: ["Core Web Vitals auto-fix", "Schema markup generation"],
    platforms: ["/google-analytics.svg", "/meta.png"],
    screenshot: "/mcp-more-charts.png",
  },
];

export default function Features() {
  const ref0 = useScrollReveal();
  const ref1 = useScrollReveal();
  const ref2 = useScrollReveal();
  const colRefs = [ref0, ref1, ref2];

  return (
    <section className="relative w-full z-10 bg-gradient-to-b from-white to-zinc-50">
      <div className="max-w-[1600px] mx-auto px-3 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              ref={colRefs[i]}
              className={`fade-in-up relative px-4 md:px-8 py-6 md:py-10 flex flex-col gap-8 group hover:bg-white/50 transition-colors duration-500 items-center lg:items-start text-center lg:text-left ${
                i < features.length - 1 ? "lg:border-r border-zinc-200/60" : ""
              }`}
            >
              <div className="space-y-8">
                <h3 className="text-[28px] md:text-[32px] lg:text-[36px] font-bold tracking-[-0.02em] text-black leading-tight whitespace-pre-line">
                  {feature.title}
                </h3>
                <ul className="space-y-4 mt-4 text-left">
                  {feature.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] text-zinc-700">
                      <div className="mt-2 w-1.5 h-1.5 bg-black flex-shrink-0 rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Screenshot */}
              <div className="relative w-full overflow-hidden rounded-[3px] border border-zinc-200/30 shadow-sm">
                <img
                  src={feature.screenshot}
                  alt={feature.title}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Mock audit card */}
              <div className="relative w-full overflow-hidden rounded-[3px] bg-[#F5FAF0] border border-zinc-200/40 shadow-[0_1px_2px_0_rgba(0,0,0,0.025)] p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-medium text-slate-400 uppercase tracking-widest">
                    {i === 0 ? "Site Health" : i === 1 ? "Rankings" : "Performance"}
                  </span>
                  <span className="text-[11px] text-emerald-500 font-semibold">Live</span>
                </div>
                {/* Green heatmap grid — matches Ryze's contribution chart */}
                <div className="grid grid-cols-12 gap-[2px]">
                  {Array.from({ length: 48 }).map((_, j) => {
                    const opacity = [0.03, 0.11, 0.18, 0.28, 0.38, 0.48, 0.58, 0.68][
                      Math.floor(Math.random() * 8)
                    ];
                    return (
                      <div
                        key={j}
                        className="heatmap-cell rounded-[1px]"
                        style={{
                          backgroundColor:
                            opacity > 0.1
                              ? `rgba(52, 211, 153, ${opacity})`
                              : "rgba(0,0,0,0.03)",
                        }}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Platform icons */}
              <div className="flex items-center gap-3">
                {feature.platforms.map((src, j) => (
                  <div key={j} className="h-6 w-8 relative flex items-center justify-center">
                    <img src={src} alt="" className="h-5 w-5 object-contain opacity-60" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
