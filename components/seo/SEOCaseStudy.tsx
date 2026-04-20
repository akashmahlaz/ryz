"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

function RevealDiv({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className={`fade-in-up visible ${className ?? ""}`}>
      {children}
    </div>
  );
}

const CASE_STUDIES = [
  {
    brand: "Nimbus Commerce",
    vertical: "Ecommerce",
    lift: "+163% organic sessions",
    time: "In 90 days",
    wins: ["17.2K broken links repaired", "Average LCP cut from 2.8s to 1.3s", "Top-3 keyword count grew 4.1x"],
  },
  {
    brand: "Vista Clinics",
    vertical: "Healthcare",
    lift: "+121% non-brand clicks",
    time: "In 12 weeks",
    wins: ["Schema deployed across 420 service pages", "Local rankings improved in 37 cities", "CTR rose from 2.9% to 6.4%"],
  },
  {
    brand: "ForgeStack",
    vertical: "SaaS",
    lift: "+89% trial signups from SEO",
    time: "In 10 weeks",
    wins: ["Topic clusters expanded from 14 to 66", "Internal link depth corrected across docs", "AI refreshes lifted stale pages back to page 1"],
  },
];

export default function SEOCaseStudy() {
  return (
    <section className="bg-[#FEFEF5] py-16 md:py-24 border-t border-black/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 xl:px-16">
        <RevealDiv className="flex items-end justify-between gap-4 mb-10 md:mb-12">
          <div>
            <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-zinc-500 mb-2">Proof, not promises</p>
            <h3 className="text-[28px] md:text-[36px] lg:text-[42px] leading-[1.05] tracking-[-0.03em] font-bold text-zinc-900">
              Real SEO growth from live deployments
            </h3>
          </div>
          <span className="hidden md:inline-flex px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[12px] font-medium">
            90-day snapshots
          </span>
        </RevealDiv>

        <RevealDiv className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5">
          {CASE_STUDIES.map((study) => (
            <article
              key={study.brand}
              className="rounded-[8px] border border-zinc-200 bg-white p-5 md:p-6 shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.12em] text-zinc-400">{study.vertical}</p>
                  <p className="text-[18px] font-semibold text-zinc-900">{study.brand}</p>
                </div>
                <span className="text-[11px] text-zinc-500">{study.time}</span>
              </div>

              <p className="text-[20px] leading-tight font-bold tracking-[-0.02em] text-emerald-600 mb-4">{study.lift}</p>

              <ul className="space-y-2">
                {study.wins.map((win) => (
                  <li key={win} className="text-[13px] text-zinc-600 leading-relaxed flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 mt-1.5 shrink-0" />
                    <span>{win}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-[11px] text-zinc-400 border-t border-zinc-100 pt-3">
                Source: 90-day anonymized customer cohort.
              </p>
            </article>
          ))}
        </RevealDiv>
      </div>
    </section>
  );
}
