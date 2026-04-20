"use client";

import { useState } from "react";
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
    <div ref={ref} className={`fade-in-up ${className ?? ""}`}>
      {children}
    </div>
  );
}

const FAQS = [
  {
    q: "How long does setup take?",
    a: "Most teams connect data sources and launch the first audit in under 20 minutes.",
  },
  {
    q: "Will this override our content team?",
    a: "No. Ryze can run in assisted mode, where every recommendation is reviewed before publishing.",
  },
  {
    q: "Can we roll back AI changes?",
    a: "Yes. Every change has a versioned log so your team can revert with one click.",
  },
  {
    q: "Does it support ecommerce and local SEO?",
    a: "Yes. Product catalogs, collection pages, local landing pages, and service-area pages are supported.",
  },
  {
    q: "How often does the agent run?",
    a: "Crawls, anomaly checks, and opportunity scans run continuously, with configurable frequency limits.",
  },
  {
    q: "What if we already use an SEO agency?",
    a: "Ryze can complement agency strategy by handling execution at speed while the agency focuses on direction.",
  },
];

export default function SEOFAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="bg-[#FEFEF5] py-14 md:py-20">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-12">
        <RevealDiv className="text-center mb-8 md:mb-10">
          <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-zinc-500 mb-2">FAQ</p>
          <h3 className="text-[28px] md:text-[38px] leading-[1.02] tracking-[-0.03em] font-bold text-zinc-900">
            Common questions before you launch
          </h3>
        </RevealDiv>

        <RevealDiv className="space-y-2">
          {FAQS.map((item, idx) => {
            const open = openIdx === idx;
            return (
              <div key={item.q} className="border border-zinc-200 rounded-[6px] bg-white overflow-hidden">
                <button
                  type="button"
                  className="w-full text-left px-4 md:px-5 py-4 flex items-center justify-between gap-4"
                  onClick={() => setOpenIdx(open ? -1 : idx)}
                  aria-expanded={open}
                >
                  <span className="text-[15px] md:text-[16px] font-medium text-zinc-900">{item.q}</span>
                  <span className={`text-zinc-500 transition-transform ${open ? "rotate-45" : "rotate-0"}`}>+</span>
                </button>
                {open && <p className="px-4 md:px-5 pb-4 text-[14px] text-zinc-600 leading-relaxed">{item.a}</p>}
              </div>
            );
          })}
        </RevealDiv>
      </div>
    </section>
  );
}
