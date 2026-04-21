"use client";

import { useState } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";

/* ─── step data (from original source) ─── */
const STEPS = [
  {
    num: "1",
    title: "Go to Settings",
    bullets: [
      "Open claude.ai in your browser",
      "Click your profile icon",
      "Select Settings",
    ],
    img: "/images/mcp-3-steps/01_go_to_settings.png",
    alt: "Claude AI Settings menu — first step to set up MCP connector for Google and Meta Ads",
  },
  {
    num: "2",
    title: "Go to Custom Connectors",
    bullets: [
      "Open the Connectors tab",
      "Scroll to the bottom",
      "Click 'Add custom connector'",
    ],
    img: "/images/mcp-3-steps/02_go_to_custom_connectors.png",
    alt: "Claude Connectors tab with Add custom connector option for MCP setup",
  },
  {
    num: "3",
    title: "Add MCP link",
    bullets: [
      'Set Name to "Ryze AI"',
      "Paste MCP URL into the URL field",
      "Click Save to connect",
    ],
    cta: true,
    img: "/images/mcp-3-steps/03_add_mcp_link.png",
    alt: "Pasting Ryze AI MCP server URL into Claude custom connector configuration",
  },
  {
    num: "4",
    title: "Connect Google & Meta",
    bullets: [
      "Follow the OAuth prompt",
      "Grant access to Google Ads & Meta Ads",
      "Add Google Analytics too",
    ],
    img: "/images/mcp-3-steps/04_connect_google_meta.png",
    alt: "OAuth prompt to connect Google Ads and Meta Ads to Claude via Ryze AI MCP",
  },
  {
    num: "5",
    title: "Analyze your account",
    bullets: [
      "Ask Claude to audit campaigns",
      "Pull spend reports instantly",
      "Find wasted budget in seconds",
    ],
    img: "/images/mcp-3-steps/05_analyze_your_account.png",
    alt: "Claude AI analyzing Google Ads and Meta Ads account performance via MCP",
  },
];

/* active tab color per index */
const ACTIVE_BG = ["#C4501A", "#D4622E", "#E07542", "#EC8A5C", "#F5A67E"];
/* inactive tab color per index */
const INACTIVE_BG = ["#F4C4A8", "#F6CEAF", "#F8D8BC", "#FAE4CC", "#FCEEDE"];

function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className={`fade-in-up ${className ?? ""}`}>
      {children}
    </div>
  );
}

export default function SetupGuide() {
  const [active, setActive] = useState(0);
  const step = STEPS[active];

  return (
    <section className="px-6 lg:px-10 xl:px-16 pt-18.25 pb-24 bg-white">
      <div className="max-w-318.75 mx-auto w-full">
        {/* Heading */}
        <Reveal className="text-center mb-5.5 px-2">
          <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold tracking-[-0.03em] text-black">
            <span
              className="pixel-font text-[22px] md:text-[26px] tracking-wide bg-clip-text text-transparent"
              style={{
                transform: "scaleY(1.6) translateY(-2px)",
                transformOrigin: "center",
                display: "inline-block",
                letterSpacing: "0.15em",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundImage:
                  "linear-gradient(135deg, #8E3E25 0%, #A04830 25%, #964428 50%, #A84C32 75%, #8E3E25 100%)",
                backgroundSize: "120% 120%",
              }}
            >
              Setup guide:
            </span>{" "}
            Link your ads to Claude in 10 sec
          </h2>
        </Reveal>

        {/* Tab navigation */}
        <div className="flex gap-1 overflow-x-auto">
          {STEPS.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="px-3 md:px-5 py-2 text-sm font-bold transition-all duration-200 rounded-t-[3px] shrink-0 cursor-pointer border-none"
              style={{
                backgroundColor: active === i ? ACTIVE_BG[i] : INACTIVE_BG[i],
                color: active === i ? "#fff" : "#6B5B50",
              }}
            >
              <span className="hidden md:inline">Step {s.num}</span>
              <span className="md:hidden">{s.num}</span>
            </button>
          ))}
        </div>

        {/* Step content panel */}
        <div className="bg-[#F7F8FA] border border-zinc-200/60 rounded-b-[3px] rounded-tr-[3px] p-6 md:p-10 shadow-[0_2px_16px_rgba(0,0,0,0.04)] min-h-125.5">
          <div className="flex flex-col md:flex-row gap-8 md:gap-10 md:items-start h-full">
            {/* Left: title + bullets */}
            <div className="md:w-[17%] shrink-0 flex flex-col justify-center md:py-4">
              <h3 className="text-[28px] md:text-[32px] lg:text-[36px] font-bold tracking-[-0.02em] text-black leading-tight mb-4 mt-0">
                {step.title}
              </h3>
              <ul className="space-y-2.5 list-none p-0 m-0 mb-4">
                {step.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="text-zinc-800 text-base leading-relaxed flex items-start gap-2.5"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-[#C4501A] shrink-0 mt-2.25" />
                    {b}
                  </li>
                ))}
              </ul>
              {step.cta && (
                <a
                  href="#"
                  className="inline-block bg-zinc-900 text-white text-sm font-bold px-6 py-3 rounded-[3px] hover:bg-zinc-700 active:scale-95 transition-all duration-150 no-underline"
                >
                  Get link →
                </a>
              )}
            </div>

            {/* Right: screenshot + arrow */}
            <div className="flex items-center ml-0 lg:ml-11.25 flex-1 min-w-0">
              <div className="w-full bg-white rounded-[3px] shadow-[0_2px_4px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.06)] overflow-hidden">
                <img
                  alt={step.alt}
                  loading="lazy"
                  width={900}
                  height={560}
                  decoding="async"
                  className="w-full h-auto block"
                  style={{ color: "transparent" }}
                  src={step.img}
                />
              </div>
              {active < 4 && (
                <button
                  onClick={() => setActive(active + 1)}
                  className="shrink-0 w-10 h-10 flex items-center justify-center cursor-pointer bg-transparent border-none ml-2 hover:scale-110 active:scale-95 transition-transform duration-150"
                >
                  <img
                    src="/next-arrow-2.png"
                    alt="Next step"
                    className="w-62.25 brightness-75 animate-[pulseRight_1.5s_ease-in-out_infinite]"
                    style={{ transform: "scaleY(1.75)" }}
                  />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Help contact bar */}
        <div className="text-center mt-4 mb-2 text-sm text-neutral-400">
          Need help?{" "}
          <a href="mailto:hello@get-ryze.ai" className="text-[#FF4801] underline">
            hello@get-ryze.ai
          </a>
          &nbsp;/&nbsp;Text/WhatsApp{" "}
          <a href="https://wa.me/16314805598" className="text-[#FF4801] underline">
            +1 631 480 55 98
          </a>
        </div>
      </div>
    </section>
  );
}
