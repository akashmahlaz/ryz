"use client";
import React from "react";

/* ================================================================
   SEO Hero Mockup — fully self-contained, responsive via CSS scale
   ================================================================
   • All keyframes are component-scoped (no globals.css dependency)
   • Inner scene is built at a fixed 450px "design height"
   • On smaller screens the whole scene scales down proportionally
   • Desktop shows 1:1, tablet ~0.76x, mobile ~0.53x
   ================================================================ */

/* ---------- Component-scoped keyframes ---------- */

const KEYFRAMES = `
@keyframes seoDashPhase {
  0%   { opacity: 1; }
  38%  { opacity: 1; }
  40%  { opacity: 0; }
  100% { opacity: 0; }
}
@keyframes seoDashScroll {
  0%, 1% { transform: translateY(0); }
  36%    { transform: translateY(calc(-100% + 600px)); }
  100%   { transform: translateY(calc(-100% + 600px)); }
}
@keyframes seoChatPhase {
  0%    { opacity: 0; }
  40%   { opacity: 0; }
  43%   { opacity: 1; }
  99%   { opacity: 1; }
  99.7% { opacity: 0; }
  100%  { opacity: 0; }
}
@keyframes seoChatScroll {
  0%, 45% { transform: translateY(0); }
  48%     { transform: translateY(0); }
  95%     { transform: translateY(calc(-100% + 600px)); }
  100%    { transform: translateY(calc(-100% + 600px)); }
}
@keyframes seoCursorAnim {
  0%   { opacity: 0; top: 50%; left: 50%; }
  30%  { opacity: 0; top: 50%; left: 50%; }
  33%  { opacity: 1; top: 50%; left: 50%; }
  38%  { opacity: 1; top: 30%; left: 3.5%; }
  39%  { opacity: 1; top: 30%; left: 3.5%; transform: scale(0.75); }
  40%  { opacity: 1; top: 30%; left: 3.5%; transform: scale(1); }
  43%  { opacity: 0; top: 30%; left: 3.5%; }
  100% { opacity: 0; }
}
@keyframes seoDashHL {
  0%   { background: rgba(0,0,0,0.06); }
  38%  { background: rgba(0,0,0,0.06); }
  40%  { background: transparent; }
  99.7%{ background: transparent; }
  100% { background: rgba(0,0,0,0.06); }
}
@keyframes seoMarkHL {
  0%   { background: transparent; }
  38%  { background: transparent; }
  40%  { background: rgba(0,0,0,0.06); }
  99%  { background: rgba(0,0,0,0.06); }
  99.7%{ background: transparent; }
  100% { background: transparent; }
}
@keyframes seoCrawlPulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%      { opacity: 0.4; transform: scale(1.4); }
}
@keyframes seoCrawlScan {
  0%   { top: 0; }
  100% { top: 100%; }
}
@keyframes seoCrawlFeed {
  0%   { transform: translateY(0); }
  100% { transform: translateY(-50%); }
}
`;

/* ==================== Sub-components ==================== */

function Sidebar() {
  const Icon = ({ children, animate }: { children: React.ReactNode; animate?: "dash" | "mark" }) => (
    <div
      className="w-9 h-9 rounded-[3px] flex items-center justify-center"
      style={
        animate === "dash"
          ? { animation: "seoDashHL 30s ease-in-out infinite" }
          : animate === "mark"
          ? { animation: "seoMarkHL 30s ease-in-out infinite" }
          : undefined
      }
    >
      {children}
    </div>
  );
  const stroke = (cls: string) => ({
    className: cls,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 2,
  });
  return (
    <div className="w-[55px] bg-white border-r border-neutral-100 flex flex-col items-center pt-3 pb-2 shrink-0 gap-0.5">
      <div className="w-7 h-7 mb-3">
        <img src="/main-logo-sun-2.png" alt="" className="w-full h-full object-contain" />
      </div>
      <Icon animate="dash">
        <svg {...stroke("w-4 h-4 text-neutral-500")}>
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      </Icon>
      <Icon>
        <svg {...stroke("w-4 h-4 text-neutral-500")}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </Icon>
      <Icon>
        <svg {...stroke("w-4 h-4 text-neutral-400")}>
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </Icon>
      <Icon animate="mark">
        <svg {...stroke("w-4 h-4 text-neutral-400")}>
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        </svg>
      </Icon>
      <Icon>
        <svg {...stroke("w-4 h-4 text-neutral-400")}>
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
      </Icon>
      <Icon>
        <svg {...stroke("w-4 h-4 text-neutral-400")}>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      </Icon>
      <div className="mt-auto">
        <Icon>
          <svg {...stroke("w-4 h-4 text-neutral-400")}>
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
          </svg>
        </Icon>
      </div>
    </div>
  );
}

/* ---- KPI tile ---- */
function KpiTile({
  l1, l2, v1, v2, d1, d2, d1Pos = true, d2Pos = true,
}: { l1: string; l2: string; v1: string; v2: string; d1: string; d2: string; d1Pos?: boolean; d2Pos?: boolean }) {
  return (
    <div className="bg-white p-3">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[11px] font-medium text-slate-400 uppercase tracking-widest">{l1}</span>
        <span className="text-[11px] font-medium text-slate-400 uppercase tracking-widest">{l2}</span>
      </div>
      <div className="flex items-baseline justify-between">
        <div className="flex items-baseline gap-1.5">
          <span className="text-[20px] font-semibold text-slate-900 tracking-tight">{v1}</span>
          <span className={`text-[11px] font-medium ${d1Pos ? "text-emerald-400" : "text-slate-400"}`}>{d1}</span>
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className="text-[20px] font-semibold text-slate-900 tracking-tight">{v2}</span>
          <span className={`text-[11px] font-medium ${d2Pos ? "text-emerald-400" : "text-slate-400"}`}>{d2}</span>
        </div>
      </div>
    </div>
  );
}

/* ---- Mini Chart ---- */
function MiniChart({ heights }: { heights: number[] }) {
  return (
    <div className="relative h-[80px]">
      <div className="absolute inset-0">
        <div className="flex items-end gap-px h-full">
          {heights.map((h, i) => (
            <div key={i} className="flex-1 bg-slate-300" style={{ height: `${h}%` }} />
          ))}
        </div>
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 180 100">
          <polyline
            fill="none" stroke="rgb(52, 211, 153)" strokeWidth="1.5" opacity="0.7"
            points="5,85 15,78 25,72 35,68 45,60 55,55 65,50 75,42 85,38 95,32 105,28 115,24 125,20 135,18 145,15 155,12 165,10 175,8"
          />
        </svg>
      </div>
    </div>
  );
}

/* ---- Keyword Rankings Table ---- */
const KEYWORD_ROWS = [
  { keyword: "best skincare routine", pos: 3, delta: "+5", vol: "14.8K", url: "/blog/skincare-routine", difficulty: 42, diffColor: "bg-emerald-400/60", trend: "up" as const },
  { keyword: "anti aging serum reviews", pos: 7, delta: "+12", vol: "9.2K", url: "/products/serums", difficulty: 56, diffColor: "bg-slate-300", trend: "up" as const },
  { keyword: "natural face moisturizer", pos: 1, delta: "+2", vol: "22.1K", url: "/products/moisturizer", difficulty: 38, diffColor: "bg-emerald-400/60", trend: "up" as const },
  { keyword: "how to reduce wrinkles", pos: 4, delta: "+8", vol: "18.4K", url: "/blog/reduce-wrinkles", difficulty: 61, diffColor: "bg-slate-300", trend: "up" as const },
  { keyword: "organic beauty products", pos: 2, delta: "+3", vol: "12.6K", url: "/collections/organic", difficulty: 45, diffColor: "bg-emerald-400/60", trend: "up" as const },
];

function KeywordTable() {
  return (
    <div className="bg-white border border-black/6 overflow-hidden">
      <div className="grid grid-cols-[1.6fr_0.5fr_0.5fr_0.6fr_0.6fr] text-[10px] font-medium text-slate-400 uppercase tracking-widest px-4 py-2 border-b border-black/6">
        <span>Keyword</span><span>Pos.</span><span>Vol.</span><span>URL</span><span>Difficulty</span>
      </div>
      {KEYWORD_ROWS.map((r) => (
        <div key={r.keyword} className="grid grid-cols-[1.6fr_0.5fr_0.5fr_0.6fr_0.6fr] items-center px-4 py-2.5 border-b border-black/4 last:border-b-0">
          <span className="flex items-center gap-1.5 text-[12px] font-medium text-slate-800 truncate pr-2">
            <svg className="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke="rgb(52,211,153)" strokeWidth="2.5">
              <path d="M7 17l5-5 5 5" /><path d="M7 12l5-5 5 5" />
            </svg>
            {r.keyword}
          </span>
          <span className="flex items-center gap-1.5">
            <span className={`text-[12px] font-semibold ${r.pos <= 3 ? "text-emerald-500" : "text-amber-500"}`}>#{r.pos}</span>
            <span className="text-[10px] font-medium text-emerald-400">{r.delta}</span>
          </span>
          <span className="text-[12px] text-slate-500">{r.vol}</span>
          <span className="text-[11px] text-slate-400 truncate">{r.url}</span>
          <span className="flex items-center gap-1.5">
            <div className="w-12 h-1 bg-black/4 overflow-hidden"><div className={`h-full ${r.diffColor}`} style={{ width: `${r.difficulty}%` }} /></div>
            <span className="text-[12px] text-slate-500">{r.difficulty}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

/* ---- Backlink Profile ---- */
const BACKLINK_ROWS = [
  { domain: "forbes.com", da: 95, links: 12, type: "Editorial", status: "Live" },
  { domain: "healthline.com", da: 92, links: 8, type: "Guest Post", status: "Live" },
  { domain: "byrdie.com", da: 88, links: 5, type: "Product Review", status: "Live" },
  { domain: "allure.com", da: 91, links: 3, type: "Mention", status: "Live" },
  { domain: "reddit.com/r/skincare", da: 82, links: 18, type: "Forum", status: "Live" },
];

function BacklinkTable() {
  return (
    <div className="bg-white border border-black/6 overflow-hidden">
      <div className="grid grid-cols-[1.4fr_0.5fr_0.5fr_0.8fr_0.5fr] text-[10px] font-medium text-slate-400 uppercase tracking-widest px-4 py-2 border-b border-black/6">
        <span>Domain</span><span>DA</span><span>Links</span><span>Type</span><span>Status</span>
      </div>
      {BACKLINK_ROWS.map((r) => (
        <div key={r.domain} className="grid grid-cols-[1.4fr_0.5fr_0.5fr_0.8fr_0.5fr] items-center px-4 py-2.5 border-b border-black/4 last:border-b-0">
          <span className="text-[12px] font-medium text-slate-800 truncate">{r.domain}</span>
          <span className="flex items-center gap-1.5">
            <div className="w-10 h-1 bg-black/4 overflow-hidden"><div className="h-full bg-emerald-400/50" style={{ width: `${r.da}%` }} /></div>
            <span className="text-[11px] text-slate-500">{r.da}</span>
          </span>
          <span className="text-[12px] text-slate-600">{r.links}</span>
          <span className="text-[12px] text-slate-500">{r.type}</span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-[10px] font-medium text-emerald-400">{r.status}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

/* ---- Technical Audit Issues ---- */
const AUDIT_ITEMS = [
  { type: "Critical", issue: "12 broken internal links (404)", action: "Auto-redirect to nearest match", severity: "bg-red-400" },
  { type: "Warning", issue: "34 pages missing meta descriptions", action: "Generate from page content", severity: "bg-amber-400" },
  { type: "Warning", issue: "89 images missing alt text", action: "Generate descriptive alt tags", severity: "bg-amber-400" },
  { type: "Critical", issue: "Duplicate H1 tags on 8 pages", action: "Rewrite unique H1s", severity: "bg-red-400" },
  { type: "Info", issue: "23 pages thin content (<300 words)", action: "Expand with AI content", severity: "bg-blue-400" },
  { type: "Warning", issue: "Sitemap missing 41 indexed pages", action: "Regenerate XML sitemap", severity: "bg-amber-400" },
];

function AuditTable() {
  return (
    <div className="bg-white border border-black/6 overflow-hidden">
      <div className="grid grid-cols-[0.4fr_1.6fr_1.2fr_0.5fr] text-[10px] font-medium text-slate-400 uppercase tracking-widest px-4 py-2 border-b border-black/6">
        <span>Sev.</span><span>Issue</span><span>Action</span><span />
      </div>
      {AUDIT_ITEMS.map((a, i) => (
        <div key={i} className="grid grid-cols-[0.4fr_1.6fr_1.2fr_0.5fr] items-center px-4 py-2 border-b border-black/4 last:border-b-0">
          <span className="flex items-center gap-1.5">
            <div className={`w-1.5 h-1.5 rounded-full ${a.severity}`} />
            <span className="text-[11px] font-medium text-slate-400">{a.type}</span>
          </span>
          <span className="text-[11px] text-slate-600 pr-2">{a.issue}</span>
          <span className="text-[11px] text-slate-400 pr-2">{a.action}</span>
          <div className="flex gap-px">
            <button className="text-[10px] text-slate-400 bg-black/3 px-2 py-0.5">Skip</button>
            <button className="text-[10px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5">Fix</button>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---- Content Scores ---- */
const CONTENT_PAGES = [
  { title: "Skincare Routine Guide", score: 92, words: "2,847", kw: "12 kw", readability: "A", issues: 0 },
  { title: "Anti-Aging Serum Review", score: 78, words: "1,650", kw: "8 kw", readability: "B+", issues: 3 },
  { title: "Organic Beauty 2025", score: 85, words: "2,100", kw: "15 kw", readability: "A-", issues: 1 },
  { title: "Wrinkle Prevention Tips", score: 64, words: "980", kw: "5 kw", readability: "C+", issues: 5 },
];

function ContentScores() {
  return (
    <div className="bg-white border border-black/6 p-3">
      <span className="text-[11px] font-medium text-slate-400 uppercase tracking-widest block mb-3">Content Optimization</span>
      <div className="space-y-2">
        {CONTENT_PAGES.map((p) => {
          const barColor = p.score >= 90 ? "bg-emerald-400" : p.score >= 75 ? "bg-amber-400" : "bg-red-400";
          return (
            <div key={p.title} className="bg-[#f8f9fb] p-2">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-medium text-slate-700 truncate flex-1 pr-2">{p.title}</span>
                <span className={`text-[10px] font-semibold ${p.score >= 90 ? "text-emerald-500" : p.score >= 75 ? "text-amber-500" : "text-red-400"}`}>{p.score}/100</span>
              </div>
              <div className="w-full h-[3px] bg-black/4 mb-2 overflow-hidden"><div className={`h-full ${barColor}`} style={{ width: `${p.score}%` }} /></div>
              <div className="flex items-center gap-3">
                <span className="text-[9px] text-slate-400">{p.words} words</span>
                <span className="text-[9px] text-slate-400">{p.kw}</span>
                <span className="text-[9px] text-slate-400">Read: {p.readability}</span>
                {p.issues > 0 ? (
                  <span className="text-[9px] text-red-400 ml-auto">{p.issues} issues</span>
                ) : (
                  <span className="text-[9px] text-emerald-500 ml-auto">Optimized</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ---- Funnel / Metric bars ---- */
function FunnelOrMetric({
  title, sub, subAccent, rows, labelW,
}: { title: string; sub: string; subAccent: string; rows: { l: string; w: number; v: string }[]; labelW: number }) {
  return (
    <div className="bg-white p-3">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] font-medium text-slate-400 uppercase tracking-widest">{title}</span>
        <span className="text-[11px] text-slate-400"><span className="text-slate-600">{subAccent}</span> {sub}</span>
      </div>
      <div className="space-y-2">
        {rows.map((r) => (
          <div key={r.l} className="flex items-center gap-2">
            <span className="text-[11px] text-slate-400 shrink-0 truncate" style={{ width: labelW }}>{r.l}</span>
            <div className="flex-1 h-1 bg-black/4 overflow-hidden"><div className="h-full bg-slate-400" style={{ width: `${r.w}%` }} /></div>
            <span className="text-[11px] font-medium text-slate-600 w-10 text-right shrink-0">{r.v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---- Core Web Vitals + Crawl Health ---- */
const CWV = [
  { l: "LCP (Largest Contentful Paint)", v: "1.2s", w: 85, color: "bg-emerald-400/50" },
  { l: "INP (Interaction to Next Paint)", v: "18ms", w: 95, color: "bg-emerald-400/50" },
  { l: "CLS (Cumulative Layout Shift)", v: "0.05", w: 90, color: "bg-emerald-400/50" },
  { l: "TTFB (Time to First Byte)", v: "0.3s", w: 92, color: "bg-emerald-400/50" },
];
const CRAWL_STATS = [
  { l: "Pages Indexed", v: "847 / 912", w: 93 },
  { l: "Crawl Budget Used", v: "78%", w: 78 },
  { l: "Orphan Pages", v: "12 found", w: 15 },
  { l: "Redirect Chains", v: "3 chains", w: 8 },
];

function VitalsAndCrawl() {
  return (
    <div className="grid grid-cols-2 gap-px bg-black/4">
      <div className="bg-white p-3">
        <span className="text-[11px] font-medium text-slate-400 uppercase tracking-widest block mb-3">Core Web Vitals</span>
        <div className="space-y-2.5">
          {CWV.map((r) => (
            <div key={r.l}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] text-slate-500 truncate pr-2">{r.l}</span>
                <span className="text-[10px] text-slate-400 shrink-0">{r.v}</span>
              </div>
              <div className="w-full h-1 bg-black/4 overflow-hidden"><div className={`h-full ${r.color}`} style={{ width: `${r.w}%` }} /></div>
            </div>
          ))}
          <div className="border-t border-black/6 pt-2">
            <div className="flex justify-between text-[11px]">
              <span className="text-slate-400">Overall</span>
              <span className="font-medium text-emerald-500">All Passing ✓</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-3">
        <span className="text-[11px] font-medium text-slate-400 uppercase tracking-widest block mb-3">Crawl Health</span>
        <div className="space-y-2.5">
          {CRAWL_STATS.map((r) => (
            <div key={r.l}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] text-slate-500">{r.l}</span>
                <span className="text-[10px] text-slate-400">{r.v}</span>
              </div>
              <div className="w-full h-1 bg-black/4 overflow-hidden"><div className="h-full bg-emerald-400/50" style={{ width: `${r.w}%` }} /></div>
            </div>
          ))}
          <div className="border-t border-black/6 pt-2">
            <div className="flex justify-between text-[11px]">
              <span className="text-slate-400">Index Coverage</span>
              <span className="font-medium text-slate-700">92.8% indexed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---- Competitor Analysis ---- */
const COMPETITORS = [
  { name: "You (Ryze SEO)", w: 72, share: "72%", kws: "4,821", traffic: "142K", highlight: true },
  { name: "Glow Skin Co", w: 58, share: "58%", kws: "3,200", traffic: "98K" },
  { name: "LuxeDerm Studio", w: 45, share: "45%", kws: "2,100", traffic: "76K" },
  { name: "PureSkin Spa", w: 34, share: "34%", kws: "1,800", traffic: "52K" },
  { name: "Radiance Clinic", w: 22, share: "22%", kws: "980", traffic: "31K" },
];

function CompetitorAnalysis() {
  return (
    <div className="bg-white border border-black/6 p-3">
      <span className="text-[11px] font-medium text-slate-400 uppercase tracking-widest block mb-3">Competitor Visibility</span>
      <div className="grid grid-cols-[1.4fr_1fr_0.6fr_0.6fr] text-[10px] font-medium text-slate-400 uppercase tracking-widest pb-1.5 border-b border-black/6">
        <span>Competitor</span><span>Visibility</span><span>Keywords</span><span>Traffic</span>
      </div>
      {COMPETITORS.map((r) => (
        <div key={r.name} className={`grid grid-cols-[1.4fr_1fr_0.6fr_0.6fr] py-1.5 ${r.highlight ? "bg-emerald-400/[0.06] -mx-3 px-3" : ""}`}>
          <span className={`text-[11px] ${r.highlight ? "font-semibold text-emerald-400" : "text-slate-600"}`}>{r.name}</span>
          <span className="flex items-center gap-1.5">
            <div className="w-14 h-1 bg-black/4 overflow-hidden"><div className={`h-full ${r.highlight ? "bg-emerald-400/50" : "bg-slate-300"}`} style={{ width: `${r.w}%` }} /></div>
            <span className="text-[11px] text-slate-400">{r.share}</span>
          </span>
          <span className="text-[11px] text-slate-400">{r.kws}</span>
          <span className="text-[11px] text-slate-400">{r.traffic}</span>
        </div>
      ))}
    </div>
  );
}

/* ---- SERP Position Tracker ---- */
const SERP_KEYWORDS = [
  { kw: "best skincare routine", positions: [18, 15, 12, 9, 7, 5, 4, 3, 3, 2] },
  { kw: "anti aging serum", positions: [32, 28, 22, 18, 14, 11, 8, 6, 5, 4] },
  { kw: "organic beauty products", positions: [45, 40, 35, 28, 22, 16, 12, 9, 7, 5] },
  { kw: "wrinkle prevention tips", positions: [50, 48, 42, 35, 30, 24, 18, 14, 10, 8] },
  { kw: "natural moisturizer face", positions: [24, 20, 16, 13, 10, 8, 6, 5, 4, 3] },
];
const SERP_WEEKS = ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10"];

function SerpPositionTracker() {
  const maxPos = 50;
  const colW = 100 / SERP_WEEKS.length;
  const colors = ["#34d399", "#60a5fa", "#f59e0b", "#f472b6", "#a78bfa"];
  return (
    <div className="bg-white border border-black/6 px-3 py-2">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-medium text-slate-400 uppercase tracking-widest">SERP Position Tracker</span>
        <span className="text-[11px] text-slate-400">Last 10 weeks</span>
      </div>
      <div className="relative h-[70px] mb-1.5">
        <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
          {SERP_KEYWORDS.map((kw, ki) => {
            const pts = kw.positions.map((p, i) => `${i * colW + colW / 2},${(p / maxPos) * 50}`).join(" ");
            return <polyline key={ki} points={pts} fill="none" stroke={colors[ki]} strokeWidth="0.7" opacity="0.85" />;
          })}
        </svg>
        <span className="absolute top-0 left-0 text-[7px] text-slate-400">#1</span>
        <span className="absolute bottom-0 left-0 text-[7px] text-slate-400">#50</span>
      </div>
      <div className="flex justify-between px-0.5">
        {SERP_WEEKS.map((w) => <span key={w} className="text-[7px] text-slate-400">{w}</span>)}
      </div>
      <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2">
        {SERP_KEYWORDS.map((kw, ki) => (
          <div key={ki} className="flex items-center gap-1">
            <span className="w-2 h-[2px] shrink-0" style={{ backgroundColor: colors[ki] }} />
            <span className="text-[8px] text-slate-500 truncate max-w-[80px]">{kw.kw}</span>
            <span className="text-[8px] font-medium text-slate-600">#{kw.positions[kw.positions.length - 1]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---- Live Crawl Visualizer ---- */
const CRAWL_URLS = [
  { url: "/blog/skincare-routine", status: 200, issues: 0, label: "OK" },
  { url: "/products/serums", status: 200, issues: 2, label: "2 issues" },
  { url: "/old-promo-2023", status: 404, issues: 1, label: "404" },
  { url: "/collections/organic", status: 200, issues: 0, label: "OK" },
  { url: "/blog/reduce-wrinkles", status: 301, issues: 1, label: "Redirect" },
  { url: "/products/moisturizer", status: 200, issues: 3, label: "3 issues" },
  { url: "/about-us", status: 200, issues: 0, label: "OK" },
  { url: "/discontinued-item", status: 404, issues: 1, label: "404" },
];

function CrawlVisualizer() {
  return (
    <div className="bg-white border border-black/6 overflow-hidden">
      <div className="flex items-center gap-2 px-3 py-1.5 bg-[#f3f4f6] border-b border-black/6">
        <div className="flex gap-1">
          <span className="w-[7px] h-[7px] rounded-full bg-[#ff5f57]" />
          <span className="w-[7px] h-[7px] rounded-full bg-[#ffbd2e]" />
          <span className="w-[7px] h-[7px] rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 flex items-center bg-white border border-black/6 rounded-[3px] px-2 py-[2px] gap-1.5">
          <svg className="w-2.5 h-2.5 text-slate-300 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
          </svg>
          <span className="text-[9px] text-slate-400 truncate">velvetstudio.com</span>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ animation: "seoCrawlPulse 1.5s ease-in-out infinite" }} />
          <span className="text-[9px] font-medium text-emerald-500">Crawling…</span>
          <span className="text-[9px] text-slate-400">847 / 912</span>
        </div>
      </div>
      <div className="relative h-[72px] overflow-hidden">
        <div className="absolute inset-x-0 h-[2px] bg-emerald-400/40 z-10 pointer-events-none" style={{ animation: "seoCrawlScan 3s linear infinite" }} />
        <div className="absolute inset-0" style={{ animation: "seoCrawlFeed 12s linear infinite" }}>
          <div className="px-3 py-1.5 space-y-px">
            {[...CRAWL_URLS, ...CRAWL_URLS].map((u, i) => (
              <div key={i} className="flex items-center gap-2 py-[3px]">
                <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${u.status === 404 ? "bg-red-400" : u.status === 301 ? "bg-amber-400" : u.issues > 0 ? "bg-amber-300" : "bg-emerald-400"}`} />
                <span className="text-[10px] text-slate-500 truncate flex-1 font-mono">{u.url}</span>
                <span className={`text-[9px] font-medium shrink-0 ${u.status === 404 ? "text-red-400" : u.status === 301 ? "text-amber-500" : u.issues > 0 ? "text-amber-500" : "text-emerald-400"}`}>{u.label}</span>
                <span className="text-[9px] text-slate-300 shrink-0">{u.status}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-white to-transparent pointer-events-none z-[5]" />
        <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-white to-transparent pointer-events-none z-[5]" />
      </div>
    </div>
  );
}

/* ---- SEO Score Ring ---- */
function SeoScoreRing() {
  const score = 84;
  const radius = 20;
  const strokeW = 5;
  const circumference = radius * 2 * Math.PI;
  const offset = ((100 - score) / 100) * circumference;
  return (
    <div className="bg-white border border-black/6 p-3 flex items-center gap-4">
      <div className="relative w-[52px] h-[52px] shrink-0">
        <svg viewBox="0 0 52 52" className="w-full h-full -rotate-90">
          <circle cx="26" cy="26" r={radius} fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth={strokeW} />
          <circle cx="26" cy="26" r={radius} fill="none" stroke="rgb(52,211,153)" strokeWidth={strokeW} strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[15px] font-bold text-slate-900 leading-none">{score}</span>
        </div>
      </div>
      <div className="flex-1 min-w-0 flex items-center gap-4">
        <div className="flex-1 min-w-0">
          <div className="text-[10px] font-medium text-slate-400 uppercase tracking-widest mb-0.5">SEO Score</div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-[16px] font-semibold text-slate-900">Good</span>
            <span className="text-[10px] text-emerald-400 font-medium">+12 pts this month</span>
          </div>
        </div>
        <div className="w-px h-8 bg-black/6" />
        <div className="flex-1 min-w-0">
          <div className="text-[10px] font-medium text-slate-400 uppercase tracking-widest mb-0.5">Site Health</div>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-[5px] bg-black/4 rounded-full overflow-hidden"><div className="h-full bg-emerald-400/60 rounded-full" style={{ width: "84%" }} /></div>
            <span className="text-[11px] font-medium text-slate-600 shrink-0">84%</span>
          </div>
        </div>
        <div className="w-px h-8 bg-black/6" />
        <div className="shrink-0">
          <div className="text-[10px] font-medium text-slate-400 uppercase tracking-widest mb-0.5">Issues</div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-[16px] font-semibold text-slate-900">142</span>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" /><span className="text-[10px] text-slate-400">12</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /><span className="text-[10px] text-slate-400">89</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" /><span className="text-[10px] text-slate-400">41</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==================== DASHBOARD scene ==================== */

function DashboardScene() {
  return (
    <div className="space-y-3 px-4 py-4 bg-[#f8f9fb]">
      <CrawlVisualizer />
      <SeoScoreRing />

      <div className="grid grid-cols-3 gap-px bg-black/4">
        <KpiTile l1="Organic Traffic" l2="Keywords" v1="23,451" v2="4,821" d1="+142%" d2="+18%" />
        <KpiTile l1="Backlinks" l2="Domain Rating" v1="1,284" v2="72" d1="+34" d2="+5" />
        <KpiTile l1="Pages Indexed" l2="Avg. Position" v1="847" v2="8.4" d1="+12%" d2="+3.2" />
      </div>

      <SerpPositionTracker />

      <div className="grid grid-cols-2 gap-px bg-black/4">
        <div className="bg-white p-3">
          <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2">
            <div className="w-2 h-2 bg-slate-500" /><span>TRAFFIC</span>
            <div className="w-2.5 h-[2px] bg-emerald-400" /><span>RANKINGS</span>
          </div>
          <MiniChart heights={[22, 28, 25, 34, 30, 42, 38, 52, 48, 60, 55, 68, 72, 65, 78, 82, 86, 90]} />
        </div>
        <div className="bg-white p-3">
          <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2">
            <div className="w-2 h-2 bg-slate-500" /><span>BACKLINKS</span>
            <div className="w-2.5 h-[2px] bg-emerald-400" /><span>DOMAIN RATING</span>
          </div>
          <MiniChart heights={[30, 35, 32, 40, 38, 48, 44, 52, 55, 50, 60, 65, 62, 70, 68, 75, 78, 82]} />
        </div>
      </div>

      <KeywordTable />

      <div className="grid grid-cols-2 gap-px bg-black/4">
        <FunnelOrMetric title="Search Funnel" subAccent="3.6%" sub="avg CTR" labelW={76}
          rows={[
            { l: "Impressions", w: 100, v: "642K" },
            { l: "Clicks", w: 42, v: "23.4K" },
            { l: "Engaged", w: 28, v: "8.2K" },
            { l: "Conversions", w: 12, v: "1,847" },
          ]}
        />
        <FunnelOrMetric title="SEO Issues Found" subAccent="142" sub="· auto-fixable" labelW={120}
          rows={[
            { l: "Broken Links", w: 35, v: "12" },
            { l: "Missing Meta Tags", w: 90, v: "34" },
            { l: "Duplicate Content", w: 25, v: "8" },
            { l: "Slow Pages (>3s)", w: 45, v: "15" },
          ]}
        />
      </div>

      <ContentScores />
      <AuditTable />
      <VitalsAndCrawl />
      <CompetitorAnalysis />
      <BacklinkTable />
    </div>
  );
}

/* ==================== CHAT scene ==================== */

function ChatScene() {
  return (
    <div className="pointer-events-none absolute inset-0 flex" style={{ animation: "seoChatPhase 30s ease-in-out infinite" }}>
      <div className="w-[55px] shrink-0" />
      <div className="pointer-events-auto flex-1 flex flex-col bg-[#f4f5f7] overflow-hidden">
        <div className="flex-1 overflow-hidden relative">
          <div style={{ animation: "seoChatScroll 30s ease-in-out infinite" }}>
            <div className="px-5 py-5 space-y-5">
              {/* User message */}
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 shrink-0" />
                <div className="flex-1 flex justify-end items-start gap-2.5">
                  <div className="bg-black/6 rounded-[3px] px-4 py-2.5 max-w-[440px]">
                    <p className="text-[13px] text-black leading-relaxed">Run a full SEO audit on my website and fix everything</p>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-black/20 shrink-0 flex items-center justify-center text-white text-[9px] font-bold">IB</div>
                </div>
              </div>

              {/* Agent SEO audit response */}
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-black shrink-0 flex items-center justify-center text-white text-[9px] font-bold mt-0.5">R</div>
                <div className="flex-1 min-w-0 mr-[34px]">
                  <span className="text-[12px] font-semibold text-black mb-1.5 block">Ryze SEO agent</span>
                  <div className="rounded-[3px] bg-white p-4 border border-black/6">
                    <p className="text-[12px] text-black/65 leading-[1.7] mb-4">
                      I&apos;ve crawled <strong className="text-black font-semibold">velvetstudio.com</strong> — 912 pages analyzed. Here&apos;s the full audit:
                    </p>
                    <div className="flex gap-4 mb-0">
                      <div className="relative w-[60px] h-[60px] shrink-0">
                        <svg viewBox="0 0 120 120" className="w-full h-full">
                          <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth="10" />
                          <circle cx="60" cy="60" r="50" fill="none" stroke="rgb(52,211,153)" strokeWidth="10" strokeDasharray="314" strokeDashoffset="50" strokeLinecap="round" transform="rotate(-90 60 60)" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-[20px] font-bold text-black">84</span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0 flex gap-3">
                        <div className="flex-1">
                          <div className="text-[8px] font-semibold text-black/40 uppercase tracking-[0.12em] mb-1.5">Issues Found</div>
                          {["12 broken internal links (404)", "34 missing meta descriptions", "8 duplicate H1 tags"].map((t) => (
                            <div key={t} className="flex items-start gap-1 mb-1">
                              <span className="w-1 h-1 bg-black rounded-full shrink-0 mt-1" />
                              <span className="text-[10px] text-black/70 leading-snug">{t}</span>
                            </div>
                          ))}
                        </div>
                        <div className="w-px bg-black/6" />
                        <div className="flex-1">
                          <div className="text-[8px] font-semibold text-black/40 uppercase tracking-[0.12em] mb-1.5">Strong</div>
                          {["Core Web Vitals passing", "SSL + HTTPS configured", "Mobile-first responsive"].map((t) => (
                            <div key={t} className="flex items-start gap-1 mb-1">
                              <span className="w-1 h-1 bg-[rgb(52,211,153)] rounded-full shrink-0 mt-1" />
                              <span className="text-[10px] text-black/50 leading-snug">{t}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="h-px bg-black/6 my-4" />
                    <p className="text-[12px] text-black/60 leading-[1.7]">
                      Your site has <strong className="text-black">847 indexed pages</strong> with{" "}
                      <strong className="text-black">23,451 monthly organic visits</strong>. Domain rating is{" "}
                      <strong className="text-black">72/100</strong>. But <strong className="text-black">142 issues are holding you back</strong>.
                    </p>
                    <div className="h-px bg-black/6 my-4" />
                    <div className="text-[8px] font-semibold text-black/40 uppercase tracking-[0.12em] mb-2">The biggest problems</div>
                    <p className="text-[12px] text-black/60 leading-[1.7] mb-2">
                      <strong className="text-black">12 broken links are losing you link equity</strong> — pages with{" "}
                      <strong className="text-black">3,200 backlinks pointing to 404s</strong>.
                    </p>
                    <p className="text-[12px] text-black/60 leading-[1.7]">
                      <strong className="text-black">34 pages missing meta descriptions</strong> — these get 28% fewer clicks than pages with descriptions.
                    </p>
                    <div className="h-px bg-black/6 my-4" />
                    <div className="text-[8px] font-semibold text-black/40 uppercase tracking-[0.12em] mb-2">What I&apos;ll do</div>
                    <div className="space-y-3">
                      {[
                        ["Fix 12 broken links with smart redirects", "Recovers 3,200 backlinks. Auto-redirect to nearest matching page."],
                        ["Generate 34 meta descriptions", "AI-written from page content. Est. +22% CTR on those pages."],
                        ["Add schema markup to 89 pages", "Product, article, and FAQ schema for rich snippets."],
                        ["Optimize 23 title tags over 60 chars", "Truncated in SERPs — rewrite to 55 chars with target keywords."],
                      ].map(([t, d], i) => (
                        <div key={i} className="flex gap-2">
                          <span className="text-[11px] font-bold text-black/20 shrink-0 mt-[1px] w-3 tabular-nums">{i + 1}</span>
                          <div>
                            <p className="text-[12px] text-black leading-snug font-semibold">{t}</p>
                            <p className="text-[11px] text-black/50 mt-0.5 leading-[1.6]">{d}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="h-px bg-black/6 my-4" />
                    <div className="text-[8px] font-semibold text-black/40 uppercase tracking-[0.12em] mb-2">Bottom line</div>
                    <p className="text-[12px] text-black/60 leading-[1.7]">
                      4 fixes across <strong className="text-black">142 issues</strong> — est.{" "}
                      <strong className="text-black">+35% organic traffic</strong> in 90 days. Score from 84 to <strong className="text-black">94+</strong>.
                    </p>
                    <div className="flex justify-end gap-px mt-4">
                      <button className="text-[10px] font-semibold text-black/50 bg-black/4 px-3 py-1.5 rounded-[3px]">See full report</button>
                      <button className="text-[10px] font-semibold text-white bg-black px-3 py-1.5 rounded-[3px]">Fix all 142 issues</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* User message 2 */}
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 shrink-0" />
                <div className="flex-1 flex justify-end items-start gap-2.5">
                  <div className="bg-black/6 rounded-[3px] px-4 py-2.5 max-w-[440px]">
                    <p className="text-[13px] text-black leading-relaxed">Optimize my top 10 pages for better rankings</p>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-black/20 shrink-0 flex items-center justify-center text-white text-[9px] font-bold">IB</div>
                </div>
              </div>

              {/* Agent content optimization response */}
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-black shrink-0 flex items-center justify-center text-white text-[9px] font-bold mt-0.5">R</div>
                <div className="flex-1 min-w-0 mr-[34px]">
                  <span className="text-[12px] font-semibold text-black mb-1.5 block">Ryze SEO agent</span>
                  <div className="rounded-[3px] bg-white p-4 border border-black/6">
                    <p className="text-[12px] text-black/65 leading-[1.7] mb-4">
                      I&apos;ve analyzed your top 10 pages against competitors. Here&apos;s the optimization plan:
                    </p>
                    <div className="text-[9px] font-semibold text-black/40 uppercase tracking-[0.12em] mb-1">Content Optimization</div>
                    <h3 className="text-[14px] font-semibold text-black mb-3">Top 10 Pages — Quick Wins</h3>
                    <div className="grid grid-cols-3 gap-px bg-black/6 mb-4">
                      {[
                        { k: "Pages to optimize", v: "10", sub: "Top traffic pages" },
                        { k: "Est. traffic gain", v: "+42%", sub: "Based on SERP analysis" },
                        { k: "Keywords targeted", v: "156", sub: "Primary + secondary" },
                      ].map((c) => (
                        <div key={c.k} className="bg-white p-3">
                          <div className="text-[10px] text-black/40 mb-1">{c.k}</div>
                          <div className="text-[18px] font-bold text-black leading-none">{c.v}</div>
                          <div className="text-[10px] text-black/30 mt-1">{c.sub}</div>
                        </div>
                      ))}
                    </div>
                    {[
                      ["Target keyword", "best skincare routine"],
                      ["Current position", "#7 → target #1–3"],
                      ["Content gap", "1,200 words vs competitor avg 2,800"],
                      ["Internal links needed", "8 links from authority pages"],
                      ["Schema to add", "HowTo + FAQ structured data"],
                    ].map(([k, v], i) => (
                      <div key={k} className={`flex justify-between py-2 text-[11px] ${i < 4 ? "border-b border-black/4" : ""}`}>
                        <span className="text-black/40">{k}</span>
                        <span className="font-semibold text-black">{v}</span>
                      </div>
                    ))}
                    <div className="flex justify-end gap-px mt-4">
                      <button className="text-[10px] font-semibold text-black/50 bg-black/4 px-3 py-1.5 rounded-[3px]">Review each</button>
                      <button className="text-[10px] font-semibold text-white bg-black px-3 py-1.5 rounded-[3px]">Optimize all 10</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-black/6 px-4 py-2.5 bg-white shrink-0">
          <div className="flex items-center bg-black/3 border border-black/6 rounded-[3px] px-3 py-2 gap-2">
            <span className="flex-1 text-[12px] text-black/30">Ask Ryze anything about your SEO...</span>
            <div className="w-6 h-6 bg-black rounded-[3px] flex items-center justify-center shrink-0">
              <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==================== Top-level mockup ==================== */

export default function SEOHeroMockup() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: KEYFRAMES }} />

      {/*
        Outer card — responsive height via Tailwind.
        The inner scene is fixed at 450px tall, so we scale it to fit.
        Mobile  (< 640px): card ~240px tall → scale ≈ 0.53
        Tablet  (640–768): card ~340px tall → scale ≈ 0.76
        Desktop (768+):    card 450px tall  → scale = 1
      */}
      <div
        className="pointer-events-auto rounded-[6px] overflow-hidden bg-[#f8f9fb] relative
                   h-[240px] sm:h-[340px] md:h-[450px]"
        style={{
          boxShadow: "0 25px 60px -10px rgba(0,0,0,0.20), 0 0 0 1px rgba(0,0,0,0.06)",
          zIndex: 3,
        }}
      >
        {/*
          Inner fixed-size scene: always 450px tall.
          Scaled down with transform on smaller screens.
          origin-top-left + inverse w/h keeps it filling the card.
        */}
        <div
          className="origin-top-left
                     scale-[0.53] w-[188.7%] h-[188.7%]
                     sm:scale-[0.756] sm:w-[132.3%] sm:h-[132.3%]
                     md:scale-100 md:w-full md:h-full"
        >
          <div className="flex" style={{ height: 450 }}>
            <Sidebar />
            <div className="flex-1 relative overflow-hidden">
              <div style={{ animation: "seoDashPhase 30s ease-in-out infinite" }}>
                <div style={{ animation: "seoDashScroll 30s ease-in-out infinite" }}>
                  <DashboardScene />
                </div>
              </div>
            </div>
          </div>

          <ChatScene />

          {/* Animated cursor */}
          <div className="absolute pointer-events-none z-10" style={{ animation: "seoCursorAnim 30s ease-in-out infinite" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="black" strokeWidth="1">
              <path d="M5 3l14 8-6 2-4 6z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
