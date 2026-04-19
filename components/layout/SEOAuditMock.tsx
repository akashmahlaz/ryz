"use client";
import React, { useState } from "react";
import { ChevronDown, ArrowUp, Paperclip } from "lucide-react";

const TABS = [
  { label: "AI FOR SEO", color: "#4ade80" },
  { label: "RANK TRACKING", color: "#4ade80" },
  { label: "CONTENT AUDIT", color: "#4ade80" },
];

const healthCategories = [
  { name: "Technical structure", score: 8.0, color: "#22c55e", desc: "Clean sitemap, proper canonicals. No crawl errors detected." },
  { name: "Page speed", score: 4.5, color: "#ef4444", desc: "LCP 4.2s — target <2.5s. Image compression needed." },
  { name: "Content quality", score: 6.5, color: "#f59e0b", desc: "38% of pages lack meta descriptions. Thin content on 12 pages." },
  { name: "Keyword coverage", score: 4.0, color: "#ef4444", desc: "High-volume keywords missing from headings. Search intent mismatch." },
  { name: "Internal linking", score: 7.0, color: "#f59e0b", desc: "301 orphaned pages. Internal PageRank distribution uneven." },
  { name: "Schema markup", score: 7.5, color: "#22c55e", desc: "FAQ schema on 40% of eligible pages. Product schema missing." },
];

const overall = 6.2;
const green = healthCategories.filter(c => c.score >= 7).length;
const yellow = healthCategories.filter(c => c.score >= 5 && c.score < 7).length;
const red = healthCategories.filter(c => c.score < 5).length;

export default function SEOAuditMock() {
  const [activeTab, setActiveTab] = useState(1); // RANK TRACKING active by default

  return (
    <div
      className="relative w-full max-w-[640px] rounded-[6px] overflow-hidden bg-[#f8f9fb] text-sm"
      style={{
        boxShadow: "0 25px 60px -10px rgba(0,0,0,0.20), 0 0 0 1px rgba(0,0,0,0.06)",
      }}
    >
      {/* Glassmorphism stacked cards above — matching production */}
      <div className="absolute pointer-events-none" style={{
        top: -88, left: -4, right: -24, bottom: -16,
        transform: "rotate(1.8deg)", transformOrigin: "bottom left",
        backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
        background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.18)",
        borderRadius: 6, zIndex: 0, overflow: "hidden",
      }}>
        <div style={{ padding: "5px 12px 0", fontSize: "10.5px", fontWeight: 800, color: "rgba(255,255,255,0.90)", letterSpacing: "0.08em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#4ade80" }} />
          Content optimization
        </div>
      </div>
      <div className="absolute pointer-events-none" style={{
        top: -58, left: -8, right: -18, bottom: -12,
        transform: "rotate(1deg)", transformOrigin: "bottom left",
        backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
        background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.25)",
        borderRadius: 6, zIndex: 1, overflow: "hidden",
      }}>
        <div style={{ padding: "5px 12px 0", fontSize: "10.5px", fontWeight: 800, color: "rgba(255,255,255,0.92)", letterSpacing: "0.08em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#4ade80" }} />
          AI for SEO
        </div>
      </div>
      <div className="absolute pointer-events-none" style={{
        top: -26, left: -10, right: -10, bottom: -10,
        transform: "rotate(0deg)", transformOrigin: "bottom left",
        backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
        background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.35)",
        borderRadius: 6, boxShadow: "0 12px 48px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.40)",
        zIndex: 2, overflow: "hidden",
      }}>
        <div style={{ padding: "5px 12px 0", fontSize: "10.5px", fontWeight: 800, color: "rgba(255,255,255,0.95)", letterSpacing: "0.08em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#4ade80" }} />
          Rank tracking
        </div>
      </div>

      {/* Main window — z-index 3 to sit above cards */}
      <div className="relative" style={{ zIndex: 3 }}>
        {/* Tab bar — matches MCP video exactly */}
        <div className="flex items-center gap-0 bg-[#EFECE4] border-b border-black/5 px-3 pt-2">
          <div className="flex gap-1.5 pr-3 items-center">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          {TABS.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(i)}
              className={`px-3 pb-2 text-[10.5px] font-bold whitespace-nowrap tracking-[0.05em] transition-colors ${
                activeTab === i
                  ? "bg-[#f8f9fb] text-black border-b-2 border-[#4ade80]"
                  : "text-black/50 hover:text-black/70"
              }`}
              style={{ letterSpacing: "0.05em" }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Selector row */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-black/5 bg-white">
          <div className="flex items-center gap-1.5 text-xs text-black/60 font-medium cursor-pointer hover:text-black/80">
            <span>Google/Meta Ads</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </div>
          <div className="flex gap-3 text-[11px] font-semibold">
            <span className="text-black border-b-2 border-black pb-0.5 cursor-pointer">Chat</span>
            <span className="text-black/40 cursor-pointer hover:text-black/60">Cowork</span>
            <span className="text-black/40 cursor-pointer hover:text-black/60">Code</span>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 py-3">
          {/* AI summary text */}
          <p className="text-[12px] text-black/60 leading-relaxed mb-3">
            ROAS down 0.38x in 30 days means the decline is accelerating, not steady-state. Every finding below is executable today.
          </p>

          {/* Account Health Scorecard */}
          <div className="mb-3">
            <p className="text-[9px] font-bold text-black/40 uppercase tracking-widest mb-2">
              ACCOUNT HEALTH SCORECARD · {healthCategories.length} CATEGORIES
            </p>

            {/* Score grid */}
            <div className="grid grid-cols-4 gap-2 mb-3">
              <div className="text-center">
                <p className="text-[9px] text-black/40 uppercase tracking-wider mb-0.5">OVERALL</p>
                <p className="text-[22px] font-black text-black leading-none">
                  {overall}<span className="text-[11px] text-black/40 font-medium">/10</span>
                </p>
              </div>
              <div className="text-center">
                <p className="text-[9px] text-black/40 uppercase tracking-wider mb-0.5">GREEN</p>
                <p className="text-[22px] font-black text-black leading-none">{green}</p>
              </div>
              <div className="text-center">
                <p className="text-[9px] text-black/40 uppercase tracking-wider mb-0.5">YELLOW</p>
                <p className="text-[22px] font-black text-black leading-none">{yellow}</p>
              </div>
              <div className="text-center">
                <p className="text-[9px] text-black/40 uppercase tracking-wider mb-0.5">RED</p>
                <p className="text-[22px] font-black text-black leading-none">{red}</p>
              </div>
            </div>

            {/* Category rows */}
            <div className="space-y-1.5">
              {healthCategories.map((cat) => (
                <div key={cat.name} className="flex items-start gap-3 py-1 border-b border-black/[0.04]">
                  <div className="flex items-center gap-2 w-[150px] flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: cat.color }} />
                    <span className="text-[11px] text-black/70 font-medium leading-tight">{cat.name}</span>
                  </div>
                  <div className="w-8 text-[12px] font-bold text-black flex-shrink-0">{cat.score}</div>
                  <p className="text-[10px] text-black/50 leading-relaxed">{cat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Usage bar */}
        <div className="border-t border-black/[0.06] px-4 py-2 bg-[#FFF3DC] flex items-center justify-between">
          <span className="text-[10px] text-black/60">You've used 75% of your weekly limit</span>
          <button className="text-[10px] text-black/60 underline hover:text-black/80">Get more usage ×</button>
        </div>

        {/* Reply input */}
        <div className="px-4 py-2.5 border-t border-black/5 bg-white">
          <div className="rounded-[3px] bg-[#f8f9fb] border border-black/10 px-3 py-2 flex items-center gap-2">
            <Paperclip className="w-3.5 h-3.5 text-black/30 flex-shrink-0" />
            <span className="text-[12px] text-black/30 flex-1">Reply...</span>
            <button className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center hover:bg-black/80 transition">
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
