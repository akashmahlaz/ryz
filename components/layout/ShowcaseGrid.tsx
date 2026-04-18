"use client";
import React from "react";

const cards = [
  {
    src: "/mcp-weekly-snapshot.png",
    label: "Weekly snapshot",
  },
  {
    src: "/mcp-cpa-by-funnel-stage.png",
    label: "CPA by funnel stage",
  },
  {
    src: "/mcp-more-charts.png",
    label: "Analytics charts",
  },
  {
    src: "/mcp-overlap-platforms.png",
    label: "Platform overlap",
  },
  {
    src: "/mcp-example-of-audit-claude-mcp.png",
    label: "Technical audit",
  },
];

export default function ShowcaseGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold tracking-[-0.03em] text-black mb-12 md:mb-16">
          See what Ryze does for your SEO
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {cards.map((card) => (
            <div
              key={card.label}
              className="relative rounded-[3px] overflow-hidden aspect-[4/3] group cursor-pointer"
            >
              {/* Background image */}
              <img
                src={card.src}
                alt={card.label}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Dark gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* Label */}
              <div className="absolute bottom-3 left-0 right-0 px-3">
                <span className="text-white text-[11px] font-semibold uppercase tracking-[0.12em]">
                  {card.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
