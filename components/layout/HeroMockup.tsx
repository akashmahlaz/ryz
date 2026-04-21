"use client";
import React from "react";

/* ---------------- helpers ---------------- */

const DAYS = ["M", "T", "W", "T", "F", "S", "S"];
const HOURS = [
  "12a", "", "2a", "", "4a", "", "6a", "", "8a", "", "10a", "",
  "12p", "", "2p", "", "4p", "", "6p", "", "8p", "", "10p", "",
];

// Mimics the production heatmap densities (low overnight, peak midday/early eve).
function heatValue(day: number, hour: number) {
  const morningRamp = Math.max(0, hour - 4) / 8; // builds 5a→noon
  const eveningRamp = Math.max(0, 22 - hour) / 8;
  const base = Math.min(morningRamp, eveningRamp);
  const dayBoost = day === 1 || day === 3 ? 0.08 : day >= 5 ? -0.1 : 0;
  const v = Math.max(0, Math.min(0.85, base + dayBoost + (hour > 17 ? -0.1 : 0)));
  if (hour < 5) return Math.random() < 0.3 ? 0.11 : 0;
  return v;
}

function HeatCell({ value }: { value: number }) {
  const bg =
    value <= 0
      ? "rgba(0,0,0,0.03)"
      : `rgba(52, 211, 153, ${Math.max(0.11, value).toFixed(3)})`;
  return <div className="aspect-2/1" style={{ backgroundColor: bg }} />;
}

/* ---------------- subcomponents ---------------- */

function Sidebar() {
  const Icon = ({ children, animate }: { children: React.ReactNode; animate?: "dash" | "mark" }) => (
    <div
      className="w-9 h-9 rounded-[3px] flex items-center justify-center"
      style={
        animate === "dash"
          ? { animation: "dashHighlight 30s ease-in-out infinite" }
          : animate === "mark"
          ? { animation: "markHighlight 30s ease-in-out infinite" }
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
    <div className="w-13.75 bg-white border-r border-neutral-100 flex flex-col items-center pt-3 pb-2 shrink-0 gap-0.5">
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

function KpiTile({
  l1, l2, v1, v2, d1, d2, d1Pos = true, d2Pos = true,
}: { l1: string; l2: string; v1: string; v2: string; d1: string; d2: string; d1Pos?: boolean; d2Pos?: boolean; }) {
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

function MiniChart({ heights }: { heights: number[] }) {
  return (
    <div className="relative h-20">
      <div className="absolute left-0 right-0 top-0 bottom-0">
        <div className="flex items-end gap-px h-full">
          {heights.map((h, i) => (
            <div key={i} className="flex-1 bg-slate-300" style={{ height: `${h}%` }} />
          ))}
        </div>
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 180 100">
          <polyline
            fill="none"
            stroke="rgb(52, 211, 153)"
            strokeWidth="1.5"
            opacity="0.7"
            points="5,85 15,82 25,88 35,84 45,80 55,86 65,82 75,88 85,84 95,80 105,86 115,82 125,88 135,84 145,80 155,86 165,82 175,85"
          />
        </svg>
      </div>
    </div>
  );
}

const CHANNEL_ROWS = [
  { logo: "/platform-google-ads.png", name: "Google Ads", spend: "$12.5K", spendW: 80, roas: "4.2x", conv: "3.6%", score: 82, scoreColor: "bg-emerald-400/60" },
  { logo: "/meta.png", name: "Meta Ads", spend: "$8.3K", spendW: 55, roas: "3.1x", conv: "2.6%", score: 45, scoreColor: "bg-slate-300" },
  { logo: "/pintrest-logo-2.png", name: "Pinterest Ads", spend: "$6.8K", spendW: 45, roas: "2.8x", conv: "2.1%", score: 28, scoreColor: "bg-slate-200" },
  { logo: "/platform-tiktok.png", name: "TikTok Ads", spend: "$4.2K", spendW: 30, roas: "3.5x", conv: "4.8%", score: 91, scoreColor: "bg-emerald-400/60" },
];

function ChannelTable() {
  return (
    <div className="bg-white border border-black/6 overflow-hidden">
      <div className="grid grid-cols-[1.4fr_1fr_0.6fr_0.7fr_0.9fr] text-[10px] font-medium text-slate-400 uppercase tracking-widest px-4 py-2 border-b border-black/6">
        <span>Channel</span>
        <span>Ad Spend</span>
        <span>ROAS</span>
        <span>Conv.</span>
        <span>Score</span>
      </div>
      {CHANNEL_ROWS.map((r) => (
        <div key={r.name} className="grid grid-cols-[1.4fr_1fr_0.6fr_0.7fr_0.9fr] items-center px-4 py-2.5 border-b border-black/4 last:border-b-0">
          <span className="flex items-center gap-2">
            <img alt={r.name} width={14} height={14} className="object-contain" src={r.logo} />
            <span className="text-[12px] font-medium text-slate-800">{r.name}</span>
          </span>
          <span className="flex items-center gap-2">
            <div className="w-14 h-1 bg-black/4 overflow-hidden">
              <div className="h-full bg-slate-400" style={{ width: `${r.spendW}%` }} />
            </div>
            <span className="text-[12px] text-slate-500">{r.spend}</span>
          </span>
          <span className="text-[12px] text-slate-600">{r.roas}</span>
          <span className="text-[12px] text-slate-600">{r.conv}</span>
          <span className="flex items-center gap-1.5">
            <div className="w-12 h-1 bg-black/4 overflow-hidden">
              <div className={`h-full ${r.scoreColor}`} style={{ width: `${r.score}%` }} />
            </div>
            <span className="text-[12px] text-slate-500">{r.score}%</span>
          </span>
        </div>
      ))}
    </div>
  );
}

function FunnelOrWaste({
  title, sub, subAccent, rows, labelW,
}: { title: string; sub: string; subAccent: string; rows: { l: string; w: number; v: string }[]; labelW: number; }) {
  return (
    <div className="bg-white p-3">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] font-medium text-slate-400 uppercase tracking-widest">{title}</span>
        <span className="text-[11px] text-slate-400">
          <span className="text-slate-600">{subAccent}</span> {sub}
        </span>
      </div>
      <div className="space-y-2">
        {rows.map((r) => (
          <div key={r.l} className="flex items-center gap-2">
            <span className="text-[11px] text-slate-400 shrink-0 truncate" style={{ width: labelW }}>
              {r.l}
            </span>
            <div className="flex-1 h-1 bg-black/4 overflow-hidden">
              <div className="h-full bg-slate-400" style={{ width: `${r.w}%` }} />
            </div>
            <span className="text-[11px] font-medium text-slate-600 w-10 text-right shrink-0">{r.v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const SUGGESTED = [
  { src: "/hero-6.png", tag: "UGC", title: "Before & After" },
  { src: "/hero-2-2.png", tag: "Video", title: "New Treatments" },
  { src: "/hero-7-2.png", tag: "Carousel", title: "Client Results" },
  { src: "/hero-8.png", tag: "Static", title: "Glow Package" },
];

function SuggestedCreatives() {
  return (
    <div className="bg-white border border-black/6 p-3">
      <span className="text-[11px] font-medium text-slate-400 uppercase tracking-widest block mb-3">
        Suggested Creatives
      </span>
      <div className="grid grid-cols-4 gap-px bg-black/4">
        {SUGGESTED.map((s) => (
          <div key={s.title} className="bg-[#f8f9fb] overflow-hidden">
            <div className="aspect-3/4 relative overflow-hidden">
              <img alt={s.title} className="object-cover absolute inset-0 w-full h-full" style={{ objectPosition: "center 15%" }} src={s.src} />
              <span className="absolute top-1.5 left-1.5 text-[9px] font-semibold text-slate-700 bg-white/80 backdrop-blur-sm px-1.5 py-0.5">{s.tag}</span>
            </div>
            <div className="p-2">
              <h4 className="text-[11px] font-medium text-slate-700 mb-1.5 truncate">{s.title}</h4>
              <div className="flex gap-px">
                <button className="flex-1 text-[10px] text-slate-400 bg-black/3 py-1">Deny</button>
                <button className="flex-1 text-[10px] text-emerald-400 bg-emerald-400/10 py-1">Approve</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const ALERTS = [
  { type: "Budget", issue: "Daily budget pacing 34% behind", action: "Increase bids by 15%" },
  { type: "Creative", issue: "Ad fatigue on top ad set", action: "Rotate in 3 new variations" },
  { type: "Keywords", issue: "QS dropped below 5 on 12 KWs", action: "Rewrite headlines" },
  { type: "Targeting", issue: "38% audience overlap", action: "Merge overlapping audiences" },
  { type: "Bidding", issue: "tROAS underperforming", action: "Lower to 2.5x for 7d" },
  { type: "Keywords", issue: "Neg KW gaps — $180/day", action: "Add 23 exact negatives" },
];

function AlertsTable() {
  return (
    <div className="bg-white border border-black/6 overflow-hidden">
      <div className="grid grid-cols-[0.4fr_1.6fr_1.2fr_0.5fr] text-[10px] font-medium text-slate-400 uppercase tracking-widest px-4 py-2 border-b border-black/6">
        <span>Type</span>
        <span>Issue</span>
        <span>Action</span>
        <span />
      </div>
      {ALERTS.map((a, i) => (
        <div key={i} className="grid grid-cols-[0.4fr_1.6fr_1.2fr_0.5fr] items-center px-4 py-2 border-b border-black/4 last:border-b-0">
          <span className="text-[11px] font-medium text-slate-400">{a.type}</span>
          <span className="text-[11px] text-slate-600 pr-2">{a.issue}</span>
          <span className="text-[11px] text-slate-400 pr-2">{a.action}</span>
          <div className="flex gap-px">
            <button className="text-[10px] text-slate-400 bg-black/3 px-2 py-0.5">Deny</button>
            <button className="text-[10px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5">OK</button>
          </div>
        </div>
      ))}
    </div>
  );
}

const PACING = [
  { l: "Google Search", v: "$8.4K / $12K", w: 70.17, color: "bg-slate-300" },
  { l: "Meta Prospecting", v: "$5.1K / $6K", w: 85, color: "bg-slate-300" },
  { l: "Pinterest Ads", v: "$3.8K / $5K", w: 76, color: "bg-slate-300" },
  { l: "TikTok Test", v: "$2.9K / $3K", w: 96.67, color: "bg-emerald-400/50" },
];
const REGIONS = [
  { l: "California", v: "5.2x · $3.8K", w: 100 },
  { l: "Texas", v: "4.8x · $2.1K", w: 88 },
  { l: "New York", v: "4.5x · $2.9K", w: 76 },
  { l: "Florida", v: "4.1x · $1.6K", w: 64 },
];

function PacingAndRegions() {
  return (
    <div className="grid grid-cols-2 gap-px bg-black/4">
      <div className="bg-white p-3">
        <span className="text-[11px] font-medium text-slate-400 uppercase tracking-widest block mb-3">Monthly Pacing</span>
        <div className="space-y-2.5">
          {PACING.map((r) => (
            <div key={r.l}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] text-slate-500">{r.l}</span>
                <span className="text-[10px] text-slate-400">{r.v}</span>
              </div>
              <div className="w-full h-1 bg-black/4 overflow-hidden">
                <div className={`h-full ${r.color}`} style={{ width: `${r.w}%` }} />
              </div>
            </div>
          ))}
          <div className="border-t border-black/6 pt-2">
            <div className="flex justify-between text-[11px]">
              <span className="text-slate-400">Total</span>
              <span className="font-medium text-slate-700">$20.2K / $26K</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-3">
        <span className="text-[11px] font-medium text-slate-400 uppercase tracking-widest block mb-3">Top Regions by ROAS</span>
        <div className="space-y-2.5">
          {REGIONS.map((r) => (
            <div key={r.l}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] text-slate-500">{r.l}</span>
                <span className="text-[10px] text-slate-400">{r.v}</span>
              </div>
              <div className="w-full h-1 bg-black/4 overflow-hidden">
                <div className="h-full bg-emerald-400/50" style={{ width: `${r.w}%` }} />
              </div>
            </div>
          ))}
          <div className="border-t border-black/6 pt-2">
            <div className="flex justify-between text-[11px]">
              <span className="text-slate-400">Avg. ROAS</span>
              <span className="font-medium text-slate-700">4.6x across 23 states</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const AUCTION = [
  { name: "You (Ryze)", w: 68, share: "68%", overlap: "—", pos: "1.2", highlight: true },
  { name: "Glow Skin Co", w: 54, share: "54%", overlap: "42%", pos: "1.5" },
  { name: "LuxeDerm Studio", w: 41, share: "41%", overlap: "38%", pos: "2.1" },
  { name: "PureSkin Spa", w: 33, share: "33%", overlap: "29%", pos: "2.8" },
  { name: "Radiance Clinic", w: 22, share: "22%", overlap: "18%", pos: "3.4" },
];

function AuctionInsights() {
  return (
    <div className="bg-white border border-black/6 p-3">
      <span className="text-[11px] font-medium text-slate-400 uppercase tracking-widest block mb-3">Auction Insights</span>
      <div className="grid grid-cols-[1.4fr_1fr_0.6fr_0.6fr] text-[10px] font-medium text-slate-400 uppercase tracking-widest pb-1.5 border-b border-black/6">
        <span>Competitor</span>
        <span>Impr. Share</span>
        <span>Overlap</span>
        <span>Pos.</span>
      </div>
      {AUCTION.map((r) => (
        <div
          key={r.name}
          className={`grid grid-cols-[1.4fr_1fr_0.6fr_0.6fr] py-1.5 ${r.highlight ? "bg-emerald-400/6 -mx-3 px-3" : ""}`}
        >
          <span className={`text-[11px] ${r.highlight ? "font-semibold text-emerald-400" : "text-slate-600"}`}>{r.name}</span>
          <span className="flex items-center gap-1.5">
            <div className="w-14 h-1 bg-black/4 overflow-hidden">
              <div className={`h-full ${r.highlight ? "bg-emerald-400/50" : "bg-slate-300"}`} style={{ width: `${r.w}%` }} />
            </div>
            <span className="text-[11px] text-slate-400">{r.share}</span>
          </span>
          <span className="text-[11px] text-slate-400">{r.overlap}</span>
          <span className="text-[11px] text-slate-400">{r.pos}</span>
        </div>
      ))}
    </div>
  );
}

function HeatmapBlock() {
  return (
    <div className="bg-white border border-black/6 px-3 py-2">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[11px] font-medium text-slate-400 uppercase tracking-widest">Performance by Day &amp; Hour</span>
        <span className="text-[11px] text-slate-400">Conversions · Last 30d</span>
      </div>
      <div className="grid grid-cols-[24px_repeat(24,1fr)] gap-0.5">
        <span />
        {HOURS.map((h, i) => (
          <span key={i} className="text-[7px] text-slate-400 text-center leading-none">
            {h}
          </span>
        ))}
        {DAYS.map((d, di) => (
          <React.Fragment key={di}>
            <span className="text-[9px] text-slate-400 text-right pr-1 leading-none flex items-center justify-end">{d}</span>
            {Array.from({ length: 24 }).map((_, hi) => (
              <HeatCell key={hi} value={heatValue(di, hi)} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

/* ---------------- DASHBOARD scene ---------------- */

function DashboardScene() {
  return (
    <div className="space-y-3 px-4 py-4 bg-[#f8f9fb]">
      <div className="grid grid-cols-3 gap-px bg-black/4">
        <KpiTile l1="Cost" l2="ROAS" v1="$12,450" v2="4.2x" d1="+12%" d2="+8%" />
        <KpiTile l1="Conversions" l2="Conv. Rate" v1="508" v2="3.6%" d1="+15%" d2="+5%" />
        <KpiTile l1="Clicks" l2="CTR" v1="14,200" v2="3.8%" d1="+10%" d2="-2%" d2Pos={false} />
      </div>

      <HeatmapBlock />

      <div className="grid grid-cols-2 gap-px bg-black/4">
        <div className="bg-white p-3">
          <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2">
            <div className="w-2 h-2 bg-slate-500" />
            <span>COST</span>
            <div className="w-2.5 h-0.5 bg-emerald-400" />
            <span>ROAS</span>
          </div>
          <MiniChart heights={[55, 40, 65, 50, 70, 80, 90, 60, 45, 85, 95, 70, 50, 80, 60, 75, 90, 65]} />
        </div>
        <div className="bg-white p-3">
          <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2">
            <div className="w-2 h-2 bg-slate-500" />
            <span>CONVERSIONS</span>
            <div className="w-2.5 h-0.5 bg-emerald-400" />
            <span>CONV. RATE</span>
          </div>
          <MiniChart heights={[30, 25, 40, 35, 50, 80, 30, 25, 35, 45, 90, 40, 30, 35, 50, 85, 25, 40]} />
        </div>
      </div>

      <ChannelTable />

      <div className="grid grid-cols-2 gap-px bg-black/4">
        <FunnelOrWaste
          title="Conversion Funnel"
          subAccent="0.06%"
          sub="conv."
          labelW={76}
          rows={[
            { l: "Impressions", w: 100, v: "842K" },
            { l: "Clicks", w: 65, v: "14K" },
            { l: "Leads", w: 40, v: "1.8K" },
            { l: "Conversions", w: 20, v: "508" },
          ]}
        />
        <FunnelOrWaste
          title="Wasted Spend"
          subAccent="$8.3K"
          sub="· 67%"
          labelW={120}
          rows={[
            { l: "Irrelevant Search Terms", w: 90, v: "$2.8K" },
            { l: "Low QS Keywords", w: 70, v: "$1.9K" },
            { l: "Audience Overlap", w: 55, v: "$1.6K" },
            { l: "Budget-Capped", w: 40, v: "$1.2K" },
          ]}
        />
      </div>

      <SuggestedCreatives />
      <AlertsTable />
      <PacingAndRegions />
      <AuctionInsights />
    </div>
  );
}

/* ---------------- CHAT scene ---------------- */

function ChatScene() {
  return (
    <div className="pointer-events-none absolute inset-0 flex" style={{ animation: "chatPhase 30s ease-in-out infinite" }}>
      <div className="w-13.75 shrink-0" />
      <div className="pointer-events-auto flex-1 flex flex-col bg-[#f4f5f7] overflow-hidden">
        <div className="flex-1 overflow-hidden relative">
          <div style={{ animation: "chatScroll 30s ease-in-out infinite" }}>
            <div className="px-5 py-5 space-y-5">
              {/* User message */}
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 shrink-0" />
                <div className="flex-1 flex justify-end items-start gap-2.5">
                  <div className="bg-black/6 rounded-[3px] px-4 py-2.5 max-w-110">
                    <p className="text-[13px] text-black leading-relaxed">
                      Launch a campaign to get more bookings this month
                    </p>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-black/20 shrink-0 flex items-center justify-center text-white text-[9px] font-bold">
                    IB
                  </div>
                </div>
              </div>

              {/* Agent campaign setup */}
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-black shrink-0 flex items-center justify-center text-white text-[9px] font-bold mt-0.5">
                  R
                </div>
                <div className="flex-1 min-w-0 mr-8.5">
                  <span className="text-[12px] font-semibold text-black mb-1.5 block">Ryze agent</span>
                    <div className="rounded-[3px] bg-white p-4 border border-black/6">
                    <p className="text-[12px] text-black/65 leading-[1.7] mb-4">
                      Got it. I&apos;ve built a campaign for{" "}
                      <strong className="text-black font-semibold">Velvet Studio</strong> to maximize bookings in Scottsdale this month.
                    </p>
                    <div className="text-[9px] font-semibold text-black/40 uppercase tracking-[0.12em] mb-1">Campaign Setup</div>
                    <h3 className="text-[14px] font-semibold text-black mb-3">Velvet Studio — March bookings</h3>
                    <div className="grid grid-cols-3 gap-px bg-black/6 mb-4">
                      {[
                        { k: "Daily budget", v: "$85", sub: "$2,550/mo" },
                        { k: "Est. clicks/mo", v: "840", sub: "Based on local CPCs" },
                        { k: "Est. bookings", v: "42–58", sub: "5–7% conv. rate" },
                      ].map((c) => (
                        <div key={c.k} className="bg-white p-3">
                          <div className="text-[10px] text-black/40 mb-1">{c.k}</div>
                          <div className="text-[18px] font-bold text-black leading-none">{c.v}</div>
                          <div className="text-[10px] text-black/30 mt-1">{c.sub}</div>
                        </div>
                      ))}
                    </div>
                    {[
                      ["Platforms", "Google Search + Meta"],
                      ["Radius", "15 miles from Scottsdale, AZ"],
                      ["Schedule", "Mon–Sat, 7am–9pm"],
                      ["Bidding", "Maximize conversions"],
                      ["Landing page", "velvetstudio.com/book"],
                    ].map(([k, v], i) => (
                      <div key={k} className={`flex justify-between py-2 text-[11px] ${i < 4 ? "border-b border-black/4" : ""}`}>
                        <span className="text-black/40">{k}</span>
                        <span className="font-semibold text-black">{v}</span>
                      </div>
                    ))}
                    <div className="flex justify-end gap-px mt-4">
                      <button className="text-[10px] font-semibold text-black/50 bg-black/4 px-3 py-1.5 rounded-[3px]">Edit first</button>
                      <button className="text-[10px] font-semibold text-white bg-black px-3 py-1.5 rounded-[3px]">Launch campaign</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* User message 2 */}
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 shrink-0" />
                <div className="flex-1 flex justify-end items-start gap-2.5">
                  <div className="bg-black/6 rounded-[3px] px-4 py-2.5 max-w-110">
                    <p className="text-[13px] text-black leading-relaxed">Give me a full audit of my Google Ads account</p>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-black/20 shrink-0 flex items-center justify-center text-white text-[9px] font-bold">
                    IB
                  </div>
                </div>
              </div>

              {/* Agent audit response */}
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-black shrink-0 flex items-center justify-center text-white text-[9px] font-bold mt-0.5">
                  R
                </div>
                <div className="flex-1 min-w-0 mr-8.5">
                  <span className="text-[12px] font-semibold text-black mb-1.5 block">Ryze agent</span>
                  <div className="rounded-[3px] bg-white p-4 border border-black/6">
                    <p className="text-[12px] text-black/65 leading-[1.7] mb-4">
                      I&apos;ve audited <strong className="text-black font-semibold">Velvet Studio</strong> — Google Ads. Here&apos;s what I found:
                    </p>
                    <div className="flex gap-4 mb-0">
                      <div className="relative w-15 h-15 shrink-0">
                        <svg viewBox="0 0 120 120" className="w-full h-full">
                          <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth="10" />
                          <circle cx="60" cy="60" r="50" fill="none" stroke="rgb(52,211,153)" strokeWidth="10" strokeDasharray="314" strokeDashoffset="88" strokeLinecap="round" transform="rotate(-90 60 60)" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-[20px] font-bold text-black">72</span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0 flex gap-3">
                        <div className="flex-1">
                          <div className="text-[8px] font-semibold text-black/40 uppercase tracking-[0.12em] mb-1.5">Fix</div>
                          {["Junk placements ($412/mo)", "Overnight ads, zero leads", "Double-counting conversions"].map((t) => (
                            <div key={t} className="flex items-start gap-1 mb-1">
                              <span className="w-1 h-1 bg-black rounded-full shrink-0 mt-1" />
                              <span className="text-[10px] text-black/70 leading-snug">{t}</span>
                            </div>
                          ))}
                        </div>
                        <div className="w-px bg-black/6" />
                        <div className="flex-1">
                          <div className="text-[8px] font-semibold text-black/40 uppercase tracking-[0.12em] mb-1.5">Strong</div>
                          {["Keywords scoring 92", "Tracking setup at 91", "Page loads in 1.2s"].map((t) => (
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
                      You spent <strong className="text-black">$3,420</strong> last month and got{" "}
                      <strong className="text-black">87 bookings</strong> at <strong className="text-black">$39 each</strong>. That&apos;s a{" "}
                      <strong className="text-black">3.8x ROAS</strong>. But <strong className="text-black">$640/mo is going to waste</strong>.
                    </p>
                    <div className="h-px bg-black/6 my-4" />
                    <div className="text-[8px] font-semibold text-black/40 uppercase tracking-[0.12em] mb-2">The biggest problem</div>
                    <p className="text-[12px] text-black/60 leading-[1.7] mb-2">
                      <strong className="text-black">$412/mo is going to junk placements</strong> — 34 low-quality sites generated{" "}
                      <strong className="text-black">2,100 impressions with zero conversions</strong>.
                    </p>
                    <p className="text-[12px] text-black/60 leading-[1.7]">
                      Your ads run 24/7 but <strong className="text-black">not a single booking after 9pm</strong> in 60 days. That&apos;s $148/mo wasted.
                    </p>
                    <div className="h-px bg-black/6 my-4" />
                    <div className="text-[8px] font-semibold text-black/40 uppercase tracking-[0.12em] mb-2">What I&apos;d do</div>
                    <div className="space-y-3">
                      {[
                        ["Exclude 34 junk placements", "Saves $412/mo. Sites like weatherwidget.io and 32 others."],
                        ["Pause ads 9pm–7am", "Saves $148/mo. 94% of conversions happen 8am–8pm."],
                        ["Add 38 negative keywords", "Saves $80/mo. Searches like \"med spa jobs\" and \"diy facial\"."],
                        ["Fix conversion tracking", "Book Now button fires twice — inflating bookings by ~15%."],
                      ].map(([t, d], i) => (
                        <div key={i} className="flex gap-2">
                          <span className="text-[11px] font-bold text-black/20 shrink-0 mt-px w-3 tabular-nums">{i + 1}</span>
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
                      4 fixes save <strong className="text-black">$640/mo</strong> — est.{" "}
                      <strong className="text-black">15–20 more bookings</strong>. ROAS from 3.8x to <strong className="text-black">4.4x</strong>.
                    </p>
                    <div className="flex justify-end gap-px mt-4">
                      <button className="text-[10px] font-semibold text-black/50 bg-black/4 px-3 py-1.5 rounded-[3px]">See full report</button>
                      <button className="text-[10px] font-semibold text-white bg-black px-3 py-1.5 rounded-[3px]">Fix all 4 issues</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-black/6 px-4 py-2.5 bg-white shrink-0">
          <div className="flex items-center bg-black/3 border border-black/6 rounded-[3px] px-3 py-2 gap-2">
            <span className="flex-1 text-[12px] text-black/30">Ask Ryze anything about your ads...</span>
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

/* ---------------- Top-level mockup card ---------------- */

export default function HeroMockup() {
  return (
    <div
      className="pointer-events-auto rounded-[6px] overflow-hidden bg-[#f8f9fb]"
      style={{
        boxShadow: "0 25px 60px -10px rgba(0,0,0,0.20), 0 0 0 1px rgba(0,0,0,0.06)",
        height: 450,
        position: "relative",
        zIndex: 3,
      }}
    >
      <div className="flex" style={{ height: "100%" }}>
        <Sidebar />
        <div className="flex-1 relative overflow-hidden">
          <div style={{ animation: "dashPhase 30s ease-in-out infinite" }}>
            <div style={{ animation: "dashScroll 30s ease-in-out infinite" }}>
              <DashboardScene />
            </div>
          </div>
        </div>
      </div>

      <ChatScene />

      {/* Animated cursor */}
      <div className="absolute pointer-events-none z-10" style={{ animation: "cursorAnim 30s ease-in-out infinite" }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="black" strokeWidth="1">
          <path d="M5 3l14 8-6 2-4 6z" />
        </svg>
      </div>
    </div>
  );
}
