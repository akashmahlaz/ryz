"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

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
@keyframes proofClickFlash {
  0%   { transform: translate(-50%, -50%) scale(0.55); opacity: 0.45; }
  100% { transform: translate(-50%, -50%) scale(1.9); opacity: 0; }
}
@keyframes proofFailShake {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-2px); }
  40% { transform: translateX(2px); }
  60% { transform: translateX(-1px); }
  80% { transform: translateX(1px); }
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
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplay(
        decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString()
      );
      return;
    }

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
  }, [value, decimals, prefersReducedMotion]);

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
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

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
  }, [prefersReducedMotion]);

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
  const FAIL_ON_INDEX = 2;
  const MOVE_MS = 980;
  const CLICK_MS = 170;

  const [activeIdx, setActiveIdx] = useState(-1);
  const [appliedSet, setAppliedSet] = useState<Set<number>>(new Set());
  const [failedSet, setFailedSet] = useState<Set<number>>(new Set());
  const [retryingIdx, setRetryingIdx] = useState(-1);
  const [clickPulseIdx, setClickPulseIdx] = useState(-1);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [clickFlashPos, setClickFlashPos] = useState({ x: 0, y: 0 });
  const [showClickFlash, setShowClickFlash] = useState(false);
  const [showRipple, setShowRipple] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const timersRef = useRef<number[]>([]);
  const failedOnceRef = useRef<Set<number>>(new Set());
  const started = useRef(false);
  const fixCount = FIXES.length;

  const schedule = useCallback((fn: () => void, delay: number) => {
    const id = window.setTimeout(fn, delay);
    timersRef.current.push(id);
    return id;
  }, []);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((id) => window.clearTimeout(id));
    timersRef.current = [];
  }, []);

  const getButtonCenter = useCallback((idx: number) => {
    const container = containerRef.current;
    const button = buttonRefs.current[idx];
    if (!container || !button) return null;

    const cRect = container.getBoundingClientRect();
    const bRect = button.getBoundingClientRect();

    return {
      x: bRect.left - cRect.left + bRect.width / 2,
      y: bRect.top - cRect.top + bRect.height / 2,
    };
  }, []);

  const runSequence = useCallback(() => {
    if (prefersReducedMotion) {
      setAppliedSet(new Set(FIXES.map((_, i) => i)));
      setFailedSet(new Set());
      setRetryingIdx(-1);
      setClickPulseIdx(-1);
      setActiveIdx(-1);
      setCursorVisible(false);
      setShowClickFlash(false);
      setShowRipple(false);
      return;
    }

    clearTimers();
    let step = 0;
    setAppliedSet(new Set());
    setFailedSet(new Set());
    setRetryingIdx(-1);
    setClickPulseIdx(-1);
    setActiveIdx(-1);
    setCursorVisible(false);
    setShowClickFlash(false);
    setShowRipple(false);
    failedOnceRef.current = new Set();

    const next = () => {
      if (step >= fixCount) {
        // reset after pause
        schedule(() => {
          setAppliedSet(new Set());
          setFailedSet(new Set());
          setRetryingIdx(-1);
          setClickPulseIdx(-1);
          setActiveIdx(-1);
          setCursorPos({ x: 0, y: 0 });
          setCursorVisible(false);
          setShowClickFlash(false);
          schedule(runSequence, 1200);
        }, 2500);
        return;
      }

      const currentIdx = step;
      const target = getButtonCenter(currentIdx);
      if (target) {
        setCursorPos(target);
        setClickFlashPos(target);
        setCursorVisible(true);
      }

      // Move cursor to button
      setActiveIdx(currentIdx);
      setRetryingIdx(-1);

      // Click after cursor arrives
      schedule(() => {
        setClickPulseIdx(currentIdx);
        setShowClickFlash(true);
        setShowRipple(true);
        schedule(() => {
          setShowRipple(false);
          setShowClickFlash(false);
          setClickPulseIdx(-1);
        }, 260);

        // Mark as applied, with one realistic fail/retry cycle.
        schedule(() => {
          if (currentIdx === FAIL_ON_INDEX && !failedOnceRef.current.has(currentIdx)) {
            failedOnceRef.current.add(currentIdx);
            setFailedSet((prev) => {
              const nextSet = new Set(prev);
              nextSet.add(currentIdx);
              return nextSet;
            });
            setRetryingIdx(currentIdx);

            schedule(() => {
              setFailedSet((prev) => {
                const nextSet = new Set(prev);
                nextSet.delete(currentIdx);
                return nextSet;
              });
              setRetryingIdx(-1);
              schedule(next, 240);
            }, 520);
            return;
          }

          setAppliedSet((prev) => {
            const nextSet = new Set(prev);
            nextSet.add(currentIdx);
            return nextSet;
          });
          step = currentIdx + 1;
          schedule(next, 600);
        }, CLICK_MS);
      }, MOVE_MS);
    };

    // Start after initial delay
    schedule(next, 1000);
  }, [fixCount, getButtonCenter, clearTimers, schedule, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setAppliedSet(new Set(FIXES.map((_, i) => i)));
      setFailedSet(new Set());
      setRetryingIdx(-1);
      setClickPulseIdx(-1);
      setActiveIdx(-1);
      setCursorVisible(false);
      setShowClickFlash(false);
      setShowRipple(false);
      return;
    }

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
    return () => {
      obs.disconnect();
      clearTimers();
    };
  }, [runSequence, clearTimers, prefersReducedMotion]);

  return (
    <div ref={containerRef} className="relative">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500">
          Auto-Fixes Ready
        </span>
        <span className="text-[10px] text-zinc-400">
          {appliedSet.size}/{fixCount} applied · {retryingIdx >= 0 ? "retrying…" : appliedSet.size === fixCount ? "done ✓" : "running…"}
        </span>
      </div>
      <div className="space-y-2">
        {FIXES.map((fix, i) => {
          const isApplied = appliedSet.has(i);
          const isFailed = failedSet.has(i);
          const isTarget = activeIdx === i && !isApplied;
          return (
            <div
              key={i}
              className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 py-2.5 px-3 md:px-4 rounded-[3px] border transition-all duration-500 ${
                isApplied
                  ? "bg-emerald-50/60 border-emerald-200/60"
                  : isFailed
                  ? "bg-rose-50/70 border-rose-200"
                  : isTarget
                  ? "bg-zinc-100/80 border-zinc-200 scale-[1.01]"
                  : "bg-zinc-50/80 border-zinc-100"
              } ${isFailed ? "animate-[proofFailShake_0.28s_ease-in-out]" : ""}`}
            >
              <div className="flex items-center gap-2 flex-1 min-w-0">
                {/* Check icon or bullet */}
                <div className="w-4 h-4 shrink-0 flex items-center justify-center">
                  {isApplied ? (
                    <svg className="w-4 h-4 text-emerald-500" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ animation: "proofCheckPop 0.4s ease-out forwards" }}>
                      <path d="M3 8.5l3.5 3.5L13 4" />
                    </svg>
                  ) : (
                    <div className={`w-1.5 h-1.5 rounded-full ${isFailed ? "bg-rose-500" : isTarget ? "bg-zinc-900" : "bg-zinc-300"}`} />
                  )}
                </div>
                <span className={`text-[12px] md:text-[13px] leading-snug transition-all duration-500 relative ${isApplied ? "text-zinc-400" : isFailed ? "text-rose-600" : "text-zinc-600"}`}>
                  {fix.text}
                  {isApplied && (
                    <span className="absolute left-0 top-1/2 h-px bg-zinc-300" style={{ animation: "proofStrikethrough 0.3s ease-out forwards" }} />
                  )}
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 ml-6 sm:ml-0">
                <span className={`text-[11px] font-medium shrink-0 transition-colors duration-500 ${isApplied ? "text-emerald-500" : isFailed ? "text-rose-500" : "text-emerald-500/70"}`}>
                  {fix.impact}
                </span>
                <button
                  ref={(el) => {
                    buttonRefs.current[i] = el;
                  }}
                  className={`text-[10px] px-2.5 py-1 rounded-[3px] font-medium shrink-0 transition-all duration-200 ${
                    isApplied
                      ? "bg-emerald-500 text-white"
                      : isFailed
                      ? "bg-rose-500 text-white"
                      : isTarget
                      ? "bg-zinc-900 text-white ring-2 ring-zinc-900/20 scale-105"
                      : "bg-zinc-900 text-white hover:bg-zinc-700"
                  } ${clickPulseIdx === i ? "scale-95 brightness-110" : ""}`}
                >
                  {isApplied ? "Done ✓" : isFailed ? "Retry" : "Apply"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Animated cursor */}
      <div
        className={`absolute pointer-events-none z-20 hidden md:block transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${cursorVisible ? "opacity-100" : "opacity-0"}`}
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px`, transform: "translate(-50%, -50%)" }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white" stroke="black" strokeWidth="1.2">
          <path d="M5 3l14 8-6 2-4 6z" />
        </svg>
        {showRipple && (
          <div className="absolute top-1 left-1 w-3 h-3 rounded-full bg-zinc-900/20" style={{ animation: "proofRipple 0.4s ease-out forwards" }} />
        )}
      </div>
      {showClickFlash && (
        <div
          className="absolute pointer-events-none z-10 hidden md:block w-6 h-6 rounded-full bg-zinc-900/15"
          style={{ left: `${clickFlashPos.x}px`, top: `${clickFlashPos.y}px`, animation: "proofClickFlash 0.24s ease-out forwards" }}
        />
      )}
    </div>
  );
}

export default function SEOProof() {
  return (
    <section className="py-24 md:py-32 bg-[#FEFEF5]">
      <style dangerouslySetInnerHTML={{ __html: PROOF_KEYFRAMES }} />
      <div className="max-w-275 mx-auto px-5 sm:px-8">
        {/* ── Section heading ── */}
        <RevealDiv className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-[40px] leading-tight tracking-tight font-bold text-zinc-900">
            Your site audited. Issues fixed.
            <br className="hidden md:block" /> No manual work required.
          </h2>
          <p className="mt-3 text-base md:text-lg text-zinc-500 max-w-lg mx-auto">
            Ryze runs continuous technical audits and applies fixes in real time — no tickets, no waiting.
          </p>
        </RevealDiv>

        {/* ── Full audit card ── */}
        <RevealDiv className="max-w-240 mx-auto mb-14 md:mb-20">
          <div className="bg-white rounded-[6px] border border-black/6 shadow-[0_2px_16px_rgba(0,0,0,0.04)] overflow-hidden">
            {/* Window chrome */}
            <div className="flex items-center px-3 sm:px-4 py-2 sm:py-2.5 bg-[#EFECE4] border-b border-black/6">
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

        {/* ── Press logos ── */}
        <RevealDiv className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-30">
          {[
            { src: "/press-wsj.svg", alt: "WSJ" },
            { src: "/press-forbes.svg", alt: "Forbes" },
            { src: "/press-axios.svg", alt: "Axios" },
            { src: "/press-business-insider.svg", alt: "Business Insider" },
            { src: "/press-fortune.svg", alt: "Fortune" },
          ].map((logo) => (
            <div key={logo.alt} className="h-4 md:h-5 relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
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
