"use client";

import { useState } from "react";
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
  const ref = useScrollReveal(delay);
  return (
    <div ref={ref} className={`fade-in-up visible ${className ?? ""}`}>
      {children}
    </div>
  );
}

/* ── chevron icon ── */
function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={`shrink-0 text-zinc-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const FAQS = [
  {
    q: "How long until we see results?",
    a: "Most teams see their first technical fixes live within 24 hours of connecting. Ranking improvements typically surface within 2–6 weeks, depending on domain authority and competitive landscape. Ryze prioritizes quick wins first — broken links, missing schema, thin meta — so the early momentum is real.",
  },
  {
    q: "Will Ryze publish changes without our approval?",
    a: "Only if you tell it to. Every workspace has an execution mode: fully autonomous, assisted (you approve before anything ships), or audit-only (recommendations with no write access). Most teams start in assisted mode and open the gates once they trust the output.",
  },
  {
    q: "Can we roll back a change Ryze made?",
    a: "Yes. Every edit is versioned with a before/after diff and a one-click revert. Your team can undo any individual change or batch of changes without touching the CMS directly.",
  },
  {
    q: "Does it work for ecommerce and local SEO?",
    a: "Yes. Ryze handles product pages, collection pages, local landing pages, service-area pages, and multi-location schema. It understands the difference between a Shopify PDP and a WordPress service page and optimizes accordingly.",
  },
  {
    q: "What if we already work with an SEO agency?",
    a: "Ryze works alongside agencies well. The agency sets strategy and direction; Ryze handles the execution at machine speed. Several of our customers run both — the agency focuses on content planning and link building while Ryze handles technical SEO and on-page optimization daily.",
  },
  {
    q: "How is this different from Semrush or Ahrefs?",
    a: "Those tools surface what's wrong. Ryze fixes it. Semrush tells you that 47 pages have missing meta descriptions — Ryze writes them, gets your approval, and publishes. Think of it as the difference between a diagnostic report and having an engineer on call.",
  },
];

export default function SEOFAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[780px] mx-auto px-5 sm:px-8">
        {/* ── Header ── */}
        <RevealDiv className="text-center mb-12 md:mb-16">
          <h3 className="text-3xl md:text-[40px] leading-tight tracking-tight font-bold text-zinc-900">
            Questions we get asked the most
          </h3>
          <p className="mt-3 text-base md:text-lg text-zinc-500 mx-auto max-w-md">
            The questions we hear most from growth and marketing teams evaluating Ryze.
          </p>
        </RevealDiv>

        {/* ── Accordion ── */}
        <div className="divide-y divide-zinc-200 border-t border-b border-zinc-200">
          {FAQS.map((item, idx) => {
            const open = openIdx === idx;
            return (
              <RevealDiv key={item.q} delay={idx * 40}>
                <button
                  type="button"
                  className="w-full text-left py-5 md:py-6 flex items-start justify-between gap-4 cursor-pointer"
                  onClick={() => setOpenIdx(open ? -1 : idx)}
                  aria-expanded={open}
                >
                  <span className="text-[15px] md:text-base font-medium text-zinc-900 leading-snug">
                    {item.q}
                  </span>
                  <Chevron open={open} />
                </button>

                {/* animated panel */}
                <div
                  className="grid transition-[grid-template-rows] duration-200 ease-out"
                  style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 md:pb-6 text-[15px] text-zinc-500 leading-relaxed pr-8">
                      {item.a}
                    </p>
                  </div>
                </div>
              </RevealDiv>
            );
          })}
        </div>
      </div>
    </section>
  );
}
