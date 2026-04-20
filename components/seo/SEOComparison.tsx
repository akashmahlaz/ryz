"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

function RevealDiv({
  className,
  children,
  delay,
}: {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`fade-in-up visible ${className ?? ""}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

const ROWS = [
  {
    before: "Crawl errors pile up for weeks before anyone notices",
    after: "Every crawl issue caught and triaged within minutes",
  },
  {
    before: "Dev tickets sit in backlog — SEO fixes ship next quarter",
    after: "Fixes deploy automatically, no dev ticket required",
  },
  {
    before: "Content decays silently — you find out when traffic drops",
    after: "Stale pages flagged and refreshed on a weekly cycle",
  },
  {
    before: "Rank tracking lives in a spreadsheet someone updates Fridays",
    after: "Live position data, surfaced the moment movement happens",
  },
  {
    before: "Schema and internal links are a someday project",
    after: "Schema generated, links mapped and placed — continuously",
  },
  {
    before: "Agency sends a PDF report. You read it. Nothing changes.",
    after: "Changes ship first. The report is proof, not a to-do list.",
  },
];

export default function SEOComparison() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">

        {/* Header */}
        <RevealDiv className="mb-14 md:mb-16 max-w-xl">
          <p className="text-xs uppercase tracking-widest font-medium text-zinc-400 mb-3">
            Why teams switch
          </p>
          <h3 className="text-3xl md:text-[40px] leading-tight tracking-tight font-bold text-zinc-900">
            The shift is simple
          </h3>
          <p className="text-sm text-zinc-500 leading-relaxed mt-4">
            Most teams already know what&apos;s broken. They just don&apos;t have the bandwidth to fix it every week. Ryze does.
          </p>
        </RevealDiv>

        {/* Before / After columns */}
        <div className="grid md:grid-cols-2 gap-0 rounded-2xl border border-zinc-200 overflow-hidden">

          {/* Before column */}
          <div className="bg-zinc-50 p-8 md:p-10">
            <RevealDiv>
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-8">
                Without Ryze
              </p>
              <ul className="space-y-6">
                {ROWS.map((row, i) => (
                  <RevealDiv key={i} delay={i * 40}>
                    <li className="flex gap-3 text-sm leading-relaxed text-zinc-500">
                      <span className="mt-0.5 shrink-0 text-zinc-300">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M4 12L12 4M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </span>
                      {row.before}
                    </li>
                  </RevealDiv>
                ))}
              </ul>
            </RevealDiv>
          </div>

          {/* After column */}
          <div className="bg-white p-8 md:p-10 border-t md:border-t-0 md:border-l border-zinc-200">
            <RevealDiv delay={60}>
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-8">
                With Ryze
              </p>
              <ul className="space-y-6">
                {ROWS.map((row, i) => (
                  <RevealDiv key={i} delay={80 + i * 40}>
                    <li className="flex gap-3 text-sm leading-relaxed text-zinc-700">
                      <span className="mt-0.5 shrink-0 text-emerald-500">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {row.after}
                    </li>
                  </RevealDiv>
                ))}
              </ul>
            </RevealDiv>
          </div>

        </div>

      </div>
    </section>
  );
}
