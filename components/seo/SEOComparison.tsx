"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

const ROWS = [
  { label: "Technical audits", ryze: "Continuous", manual: "Monthly", agency: "Weekly", tools: "Partial" },
  { label: "Fix implementation", ryze: "Auto + assisted", manual: "Manual", agency: "Ticket-based", tools: "None" },
  { label: "Content refresh", ryze: "AI weekly refresh", manual: "Ad hoc", agency: "Batch updates", tools: "Templates" },
  { label: "Rank tracking", ryze: "Real-time", manual: "Spreadsheet", agency: "Weekly report", tools: "Daily" },
  { label: "Response speed", ryze: "Minutes", manual: "Days", agency: "Days-weeks", tools: "Monitoring only" },
];

export default function SEOComparison() {
  const ref = useScrollReveal();

  return (
    <section className="bg-[#FEFEF5] py-14 md:py-20">
      <div className="max-w-[1367px] mx-auto px-4 sm:px-6 md:px-12 xl:px-16" ref={ref}>
        <div className="mb-7 md:mb-9 fade-in-up">
          <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-zinc-500 mb-2">Why teams switch</p>
          <h3 className="text-[28px] md:text-[38px] leading-[1.02] tracking-[-0.03em] font-bold text-zinc-900">
            Ryze vs manual SEO, agency workflows, and point tools
          </h3>
        </div>

        <div className="rounded-[8px] border border-zinc-200 bg-white overflow-hidden fade-in-up">
          <div className="grid grid-cols-5 bg-zinc-900 text-white text-[12px] md:text-[13px] font-semibold">
            <div className="p-3 md:p-4">Capability</div>
            <div className="p-3 md:p-4">Ryze</div>
            <div className="p-3 md:p-4">Manual</div>
            <div className="p-3 md:p-4">Agency</div>
            <div className="p-3 md:p-4">Tools only</div>
          </div>

          {ROWS.map((row, i) => (
            <div key={row.label} className={`grid grid-cols-5 text-[12px] md:text-[13px] ${i % 2 === 0 ? "bg-zinc-50/60" : "bg-white"}`}>
              <div className="p-3 md:p-4 text-zinc-700 font-medium">{row.label}</div>
              <div className="p-3 md:p-4 text-emerald-700 font-semibold">{row.ryze}</div>
              <div className="p-3 md:p-4 text-zinc-500">{row.manual}</div>
              <div className="p-3 md:p-4 text-zinc-500">{row.agency}</div>
              <div className="p-3 md:p-4 text-zinc-500">{row.tools}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
