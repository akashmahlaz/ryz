"use client";
import React from "react";

const faqs = [
  {
    q: "What does the SEO agent do?",
    a: "The SEO agent runs continuous technical audits, fixes broken links, optimizes title tags and meta descriptions, adds schema markup, monitors Core Web Vitals, and tracks your rankings — all automatically.",
  },
  {
    q: "How does it connect to my site?",
    a: "Connect via Google Search Console and Google Analytics API. The agent starts scanning immediately — no code changes needed. Full audit results within minutes.",
  },
  {
    q: "Does it actually make changes to my site?",
    a: "Ryze can suggest changes for manual review, or apply them automatically with one-click approval. You stay in control of what goes live.",
  },
  {
    q: "How is this different from Ahrefs or SEMrush?",
    a: "Those tools audit and report. Ryze audits, reports, AND fixes. It's an autonomous agent that takes action — not just a dashboard you have to interpret yourself.",
  },
  {
    q: "Can I use it for client sites?",
    a: "Absolutely. Manage hundreds of client sites from one dashboard, with AI agents running SEO audits across all of them simultaneously. White-label ready.",
  },
];

export default function Results() {
  return (
    <section id="faq" className="scroll-mt-24 md:scroll-mt-28 py-24 bg-white">
      <div className="max-w-[800px] mx-auto px-6 md:px-12">
        <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-bold tracking-[-0.03em] text-black text-center mb-8 md:mb-14">
          Frequently asked questions
        </h2>
        <div className="divide-y divide-zinc-200">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="py-5">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left cursor-pointer gap-3"
        aria-expanded={open}
      >
        <span className="text-[17px] font-semibold text-black pr-2">{question}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`w-5 h-5 text-zinc-400 flex-shrink-0 transition-transform duration-300 ease-out ${
            open ? "rotate-180" : ""
          }`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="pt-3 pb-0.5 text-[15px] text-zinc-500 leading-relaxed pr-12">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
