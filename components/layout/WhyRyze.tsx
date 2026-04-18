"use client";
import React from "react";

const cards = [
  {
    title: "Built on insider search knowledge",
    body: "We work with ex-Google Search engineers. Our AI knows exactly how the ranking algorithms work.",
  },
  {
    title: "Fine-tuned our own model",
    body: "Trained on millions of SEO audits, ranking signals, and content patterns.",
  },
  {
    title: "Real-time optimization",
    body: "Monitors your rankings 24/7 and reacts instantly to algorithm updates.",
  },
  {
    title: "Works across every platform",
    body: "Google, Bing, YouTube, Google Discover, AI search (Perplexity, ChatGPT).",
  },
];

export default function WhyRyze() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold tracking-[-0.03em] text-black mb-12 md:mb-16">
          Why Ryze outperforms for SEO
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-[#F5FAF0] rounded-[3px] p-8 ring-1 ring-black/5 flex flex-col gap-4"
            >
              {/* Emerald dot icon */}
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-black mb-2">
                  {card.title}
                </h3>
                <p className="text-[15px] text-zinc-700 leading-relaxed">
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
