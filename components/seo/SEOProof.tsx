"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";

/* ─── Component-scoped keyframes ─── */
const PROOF_KEYFRAMES = `
@keyframes proofCursorMove {
  0%   { top: 20%; left: 60%; opacity: 0; }
  5%   { top: 20%; left: 60%; opacity: 1; }
  15%  { top: var(--target-y); left: var(--target-x); opacity: 1; }
  18%  { transform: scale(0.8); }
  20%  { transform: scale(1); }
  25%  { top: var(--target-y); left: var(--target-x); opacity: 1; }
  30%  { opacity: 0; }
  100% { opacity: 0; }
}
@keyframes proofRipple {
  0%   { transform: scale(0); opacity: 0.5; }
  100% { transform: scale(2.5); opacity: 0; }
}
@keyframes proofCheckPop {
  0%   { transform: scale(0) rotate(-45deg); opacity: 0; }
  50%  { transform: scale(1.2) rotate(0deg); opacity: 1; }
  100% { transform: scale(1) rotate(0deg); opacity: 1; }
}
@keyframes proofStrikethrough {
  0%   { width: 0; }
  100% { width: 100%; }
}
@keyframes proofSlideUp {
  0%   { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(-6px); opacity: 0.4; }
}
`;

/* ─── Animated counter (reusable, same pattern as ConnectCTA) ─── */
function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState("0");
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const dur = 1200;
          const t0 = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - t0) / dur, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            const v = ease * value;
            setDisplay(
              decimals > 0
                ? v.toFixed(decimals)
                : Math.round(v).toLocaleString()
            );
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

/* ─── Animated progress bar ─── */
function AnimatedBar({ width, color }: { width: number; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="h-1.5 rounded-full bg-zinc-100 overflow-hidden"
    >
      <div
        className="h-full rounded-full transition-all duration-1000 ease-out"
        style={{
          width: visible ? `${width}%` : "0%",
          background: color,
        }}
      />
    </div>
  );
}

/* ─── Audit categories ─── */
const AUDIT_CATS = [
  {
    label: "Keywords",
    score: 92,
    color: "linear-gradient(90deg, #34d399, #10b981)",
    desc: "Strong keyword targeting with high relevance scores across all landing pages.",
  },
  {
    label: "Technical",
    score: 85,
    color: "linear-gradient(90deg, #34d399, #059669)",
    desc: "Solid crawlability. 12 broken links and 3 redirect chains need attention.",
  },
  {
    label: "Content",
    score: 78,
    color: "linear-gradient(90deg, #fbbf24, #f59e0b)",
    desc: "23 title tags too long, 18 pages missing meta descriptions, thin content on 7 URLs.",
  },
  {
    label: "Speed",
    score: 95,
    color: "linear-gradient(90deg, #34d399, #10b981)",
    desc: "Excellent Core Web Vitals. LCP 1.2s, INP 18ms, CLS 0.05 — all passing.",
  },
];

/* ─── Fix items from the SEO agent ─── */
const FIXES = [
  {
    text: "Fix 12 broken internal links draining crawl budget",
    impact: "+18% crawl",
  },
  {
    text: "Add schema markup to 34 product pages missing structured data",
    impact: "+22% CTR",
  },
  {
    text: "Compress 89 images over 500KB slowing Core Web Vitals",
    impact: "+15 LCP",
  },
  {
    text: "Redirect 41 404 pages with existing backlinks to relevant content",
    impact: "+2.1K links",
  },
  {
    text: "Optimize 23 title tags exceeding 60 characters",
    impact: "+12% CTR",
  },
  {
    text: "Create internal links from 8 high-authority pages to target keywords",
    impact: "+31 positions",
  },
];

/* ─── Reveal wrapper ─── */
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

/* ─── Animated fix list with cursor ─── */
function AnimatedFixList() {
  const [activeIdx, setActiveIdx] = useState(-1);
  const [appliedSet, setAppliedSet] = useState<Set<number>>(new Set());
  const [cursorPos, setCursorPos] = useState({ x: "70%", y: "20%" });
  const [showRipple, setShowRipple] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const fixCount = FIXES.length;

  const runSequence = useCallback(() => {
    let step = 0;
    setAppliedSet(new Set());
    setActiveIdx(-1);

    const next = () => {
      if (step >= fixCount) {
        // reset after pause
        setTimeout(() => {
          setAppliedSet(new Set());
          setActiveIdx(-1);
          setCursorPos({ x: "70%", y: "20%" });
          setTimeout(runSequence, 1200);
        }, 2500);
        return;
      }

      const btnY = `${18 + step * 13}%`;
      const btnX = "92%";

      // Move cursor to button
      setCursorPos({ x: btnX, y: btnY });
      setActiveIdx(step);

      // Click after cursor arrives
      setTimeout(() => {
        setShowRipple(true);
        setTimeout(() => setShowRipple(false), 400);

        // Mark as applied
        setTimeout(() => {
          setAppliedSet((prev) => new Set(prev).add(step));
          step++;
          setTimeout(next, 600);
        }, 300);
      }, 800);
    };

    // Start after initial delay
    setTimeout(next, 1000);
  }, [fixCount]);

  useEffect(() => {
    if (!containerRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          runSequence();
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, [runSequence]);

  return (
    <div ref={containerRef} className="relative">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500">
          Auto-Fixes Ready
        </span>
        <span className="text-[10px] text-zinc-400">
          {appliedSet.size}/{fixCount} applied · {appliedSet.size === fixCount ? "done ✓" : "running…"}
        </span>
      </div>
      <div className="space-y-2">
        {FIXES.map((fix, i) => {
          const isApplied = appliedSet.has(i);
          const isTarget = activeIdx === i && !isApplied;
          return (
            <div
              key={i}
              className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 py-2.5 px-3 md:px-4 rounded-[3px] border transition-all duration-500 ${
                isApplied
                  ? "bg-emerald-50/60 border-emerald-200/60"
                  : isTarget
                  ? "bg-zinc-100/80 border-zinc-200 scale-[1.01]"
                  : "bg-zinc-50/80 border-zinc-100"
              }`}
            >
              <div className="flex items-center gap-2 flex-1 min-w-0">
                {/* Check icon or bullet */}
                <div className="w-4 h-4 shrink-0 flex items-center justify-center">
                  {isApplied ? (
                    <svg className="w-4 h-4 text-emerald-500" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ animation: "proofCheckPop 0.4s ease-out forwards" }}>
                      <path d="M3 8.5l3.5 3.5L13 4" />
                    </svg>
                  ) : (
                    <div className={`w-1.5 h-1.5 rounded-full ${isTarget ? "bg-zinc-900" : "bg-zinc-300"}`} />
                  )}
                </div>
                <span className={`text-[12px] md:text-[13px] leading-snug transition-all duration-500 relative ${isApplied ? "text-zinc-400" : "text-zinc-600"}`}>
                  {fix.text}
                  {isApplied && (
                    <span className="absolute left-0 top-1/2 h-px bg-zinc-300" style={{ animation: "proofStrikethrough 0.3s ease-out forwards" }} />
                  )}
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 ml-6 sm:ml-0">
                <span className={`text-[11px] font-medium shrink-0 transition-colors duration-500 ${isApplied ? "text-emerald-500" : "text-emerald-500/70"}`}>
                  {fix.impact}
                </span>
                <button
                  className={`text-[10px] px-2.5 py-1 rounded-[3px] font-medium shrink-0 transition-all duration-300 ${
                    isApplied
                      ? "bg-emerald-500 text-white"
                      : isTarget
                      ? "bg-zinc-900 text-white ring-2 ring-zinc-900/20 scale-105"
                      : "bg-zinc-900 text-white hover:bg-zinc-700"
                  }`}
                >
                  {isApplied ? "Done ✓" : "Apply"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Animated cursor */}
      <div
        className="absolute pointer-events-none z-20 hidden md:block transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ left: cursorPos.x, top: cursorPos.y }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white" stroke="black" strokeWidth="1.2">
          <path d="M5 3l14 8-6 2-4 6z" />
        </svg>
        {showRipple && (
          <div className="absolute top-1 left-1 w-3 h-3 rounded-full bg-zinc-900/20" style={{ animation: "proofRipple 0.4s ease-out forwards" }} />
        )}
      </div>
    </div>
  );
}

export default function SEOProof() {
  return (
    <section className="py-16 md:py-28 bg-[#FEFEF5]">
      <style dangerouslySetInnerHTML={{ __html: PROOF_KEYFRAMES }} />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        {/* ── Section heading ── */}
        <RevealDiv className="text-center mb-10 md:mb-16">
          <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold tracking-[-0.03em] text-black leading-[1.08]">
            See what the SEO
            <br className="hidden md:block" /> agent finds
          </h2>
          <p className="text-[15px] md:text-[17px] text-zinc-500 leading-relaxed mt-4 max-w-lg mx-auto">
            Continuous technical audits. Every issue found. Every fix applied.
          </p>
        </RevealDiv>

        {/* ── Full audit card ── */}
        <RevealDiv className="max-w-[1000px] mx-auto mb-14 md:mb-20">
          <div className="bg-white rounded-[6px] border border-black/[0.06] shadow-[0_2px_16px_rgba(0,0,0,0.04)] overflow-hidden">
            {/* Window chrome */}
            <div className="flex items-center px-3 sm:px-4 py-2 sm:py-2.5 bg-[#EFECE4] border-b border-black/[0.06]">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              </div>
              <span className="flex-1 text-center text-[10px] sm:text-[11px] text-zinc-400 font-medium tracking-wide">
                Full Site Audit — yourdomain.com
              </span>
              <span className="flex items-center gap-1 text-[10px] text-emerald-500 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live
              </span>
            </div>

            <div className="p-4 sm:p-5 md:p-8">
              {/* Score grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 md:mb-8">
                {AUDIT_CATS.map((cat) => (
                  <div key={cat.label}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500">
                        {cat.label}
                      </span>
                      <span className="text-[18px] sm:text-[20px] md:text-[24px] font-bold text-black leading-none">
                        {cat.score}
                        <span className="text-[10px] sm:text-[11px] text-zinc-400 font-normal ml-0.5">
                          %
                        </span>
                      </span>
                    </div>
                    <AnimatedBar width={cat.score} color={cat.color} />
                    <p className="text-[9px] sm:text-[10px] text-zinc-400 leading-relaxed mt-1.5 sm:mt-2">
                      {cat.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-zinc-100 mb-5 md:mb-6" />

              {/* Animated fix list with cursor */}
              <AnimatedFixList />
            </div>
          </div>
        </RevealDiv>

        {/* ── Stat counters ── */}
        <RevealDiv className="max-w-[900px] mx-auto mb-12 md:mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-center">
            {[
              {
                value: 2847,
                suffix: "",
                label: "Audits run",
                decimals: 0,
                prefix: "",
              },
              {
                value: 23.5,
                suffix: "M",
                label: "Pages crawled",
                decimals: 1,
                prefix: "",
              },
              {
                value: 142,
                suffix: "%",
                label: "Avg. traffic lift",
                decimals: 0,
                prefix: "+",
              },
              {
                value: 48,
                suffix: "K+",
                label: "Keywords tracked",
                decimals: 0,
                prefix: "",
              },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-[28px] md:text-[36px] font-bold text-black tracking-[-0.02em] leading-none mb-2">
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    decimals={stat.decimals}
                  />
                </div>
                <div className="text-[13px] text-zinc-500 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </RevealDiv>

        {/* ── Press logos ── */}
        <RevealDiv className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-40">
          {[
            { src: "/press-wsj.svg", alt: "WSJ" },
            { src: "/press-forbes.svg", alt: "Forbes" },
            { src: "/press-axios.svg", alt: "Axios" },
            {
              src: "/press-business-insider.svg",
              alt: "Business Insider",
            },
            { src: "/press-fortune.svg", alt: "Fortune" },
          ].map((logo) => (
            <div key={logo.alt} className="h-5 md:h-6 relative">
              <img
                alt={logo.alt}
                loading="lazy"
                className="h-full w-auto object-contain"
                src={logo.src}
              />
            </div>
          ))}
        </RevealDiv>
      </div>
    </section>
  );
}
