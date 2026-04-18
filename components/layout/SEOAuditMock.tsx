"use client";
import React from "react";
import { Search, Plus, Archive, FileText, Settings, ChevronDown, Paperclip, ArrowUp, CheckCircle2, AlertTriangle, TrendingUp, Globe, Zap, Shield } from "lucide-react";

const auditTabs = [
  { label: "SEO Audit", active: true },
  { label: "Content Score" },
  { label: "Rank Tracker" },
  { label: "Competitors" },
];

const findings = [
  {
    icon: AlertTriangle,
    color: "text-amber-500",
    bg: "bg-amber-50",
    title: "42 missing alt tags",
    sub: "Across blog posts",
    badge: "High",
    badgeColor: "bg-red-100 text-red-700",
  },
  {
    icon: Search,
    color: "text-blue-500",
    bg: "bg-blue-50",
    title: "0 schema markup",
    sub: "Product pages need FAQ",
    badge: "Medium",
    badgeColor: "bg-amber-100 text-amber-700",
  },
  {
    icon: Globe,
    color: "text-green-500",
    bg: "bg-green-50",
    title: "Core Web Vitals: FAILED",
    sub: "LCP 4.2s — target: <2.5s",
    badge: "High",
    badgeColor: "bg-red-100 text-red-700",
  },
  {
    icon: Link,
    color: "text-purple-500",
    bg: "bg-purple-50",
    title: "301 internal links",
    sub: "Need to fix urgently",
    badge: "Low",
    badgeColor: "bg-green-100 text-green-700",
  },
];

function Link({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
    </svg>
  );
}

export default function SEOAuditMock() {
  return (
    <div className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden bg-[#F7F5F0] shadow-[0_32px_80px_rgba(0,0,0,0.25)] ring-1 ring-white/10">
      {/* Mac-style bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#EFECE4] border-b border-black/5">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-black/40 font-medium">
          <span className="text-[#D97757]">✳</span>
          Ryze AI · SEO Agent
          <ChevronDown className="w-3 h-3" />
        </div>
        <div className="w-16" />
      </div>

      {/* Tab bar */}
      <div className="flex items-center gap-0.5 px-3 pt-2 bg-[#EFECE4] border-b border-black/5 overflow-x-auto">
        {auditTabs.map((t) => (
          <div
            key={t.label}
            className={`px-3 pb-2 text-[11px] whitespace-nowrap rounded-t-md transition-colors ${
              t.active
                ? "bg-[#F7F5F0] text-black font-semibold border-b-2 border-green-500"
                : "text-black/50 hover:text-black/70"
            }`}
          >
            {t.label}
          </div>
        ))}
      </div>

      {/* Body */}
      <div className="flex min-h-[28rem]">
        {/* Sidebar */}
        <div className="hidden sm:flex flex-col items-center gap-5 py-5 px-2 border-r border-black/5 text-black/30">
          <Plus className="w-4 h-4 hover:text-black/60 transition" />
          <Search className="w-4 h-4 hover:text-black/60 transition" />
          <Archive className="w-4 h-4 hover:text-black/60 transition" />
          <FileText className="w-4 h-4 hover:text-black/60 transition" />
          <Settings className="w-4 h-4 hover:text-black/60 transition" />
        </div>

        {/* Main chat area */}
        <div className="flex-1 p-4 md:p-5 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-sm font-bold text-black/80">Site Audit — ryze.ai</h2>
              <p className="text-[11px] text-black/40 mt-0.5">Started 2 min ago · 247 pages scanned</p>
            </div>
            <span className="text-[10px] font-semibold bg-green-100 text-green-700 px-2 py-1 rounded-full">
              Live
            </span>
          </div>

          {/* Audit score banner */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-4 mb-4 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] text-white/70 uppercase tracking-widest font-semibold">Site Health Score</p>
                <p className="text-3xl font-black mt-1">62<span className="text-xl text-white/70">/100</span></p>
              </div>
              <div className="flex flex-col gap-1 text-right">
                <div className="flex items-center gap-1 text-[11px]">
                  <AlertTriangle className="w-3.5 h-3.5 text-red-200" />
                  <span className="text-white/90">3 critical issues</span>
                </div>
                <div className="flex items-center gap-1 text-[11px]">
                  <TrendingUp className="w-3.5 h-3.5 text-amber-200" />
                  <span className="text-white/90">12 opportunities</span>
                </div>
              </div>
            </div>
          </div>

          {/* User message */}
          <div className="flex justify-end mb-3">
            <div className="bg-white rounded-2xl rounded-br-md px-3 py-2 text-xs shadow-sm ring-1 ring-black/5 max-w-[85%]">
              Run a full SEO audit and prioritize fixes
            </div>
          </div>

          {/* Assistant response */}
          <div className="space-y-3 mb-4">
            <div className="flex gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-green-500 flex items-center justify-center shrink-0 mt-0.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-[11px] text-black/60 mb-2">
                  Found <strong>247 pages</strong> scanned · <strong>18 critical issues</strong> across 3 categories · prioritized by traffic impact
                </p>
              </div>
            </div>

            {/* Findings cards */}
            <div className="grid grid-cols-1 gap-2">
              {findings.map((f, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 ${f.bg} ring-1 ring-black/5 hover:ring-green-300/50 transition-all cursor-pointer`}
                >
                  <f.icon className={`w-4 h-4 ${f.color} shrink-0`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-black/80 leading-tight">{f.title}</p>
                    <p className="text-[10px] text-black/50 mt-0.5">{f.sub}</p>
                  </div>
                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full shrink-0 ${f.badgeColor}`}>
                    {f.badge}
                  </span>
                </div>
              ))}
            </div>

            {/* Fix button */}
            <button className="w-full mt-2 bg-green-500 hover:bg-green-600 text-white rounded-xl px-4 py-2.5 text-xs font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0">
              <Zap className="w-3.5 h-3.5" />
              Fix all 18 issues automatically →
            </button>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Usage bar */}
          <div className="rounded-lg bg-white ring-1 ring-black/10 px-3 py-2 flex items-center gap-2 mb-2">
            <Paperclip className="w-3.5 h-3.5 text-black/30" />
            <span className="text-xs text-black/40 flex-1">What should I fix next?</span>
            <span className="text-[10px] text-black/40">Claude 4.5</span>
            <button className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center hover:bg-black/80 transition">
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
          <p className="text-[10px] text-black/30 text-center">
            Ryze AI can make mistakes. Verify important decisions.
          </p>
        </div>
      </div>
    </div>
  );
}
