"use client";

import { useState, useRef, useEffect } from "react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

/* ─── Animated counter ─── */
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

/* ─── Pixel dots ─── */
const DOTS = [
  { top: "6%", left: "4%", size: 6, color: "#4CAF50", opacity: 0.87 },
  { top: "18%", left: "8%", size: 5, color: "#64B5F6", opacity: 0.84 },
  { top: "30%", left: "2%", size: 6, color: "#42A5F5", opacity: 0.89 },
  { top: "42%", left: "10%", size: 5, color: "#FFD54F", opacity: 0.83 },
  { top: "55%", left: "5%", size: 6, color: "#81C784", opacity: 0.87 },
  { top: "68%", left: "12%", size: 5, color: "#2E7D32", opacity: 0.82 },
  { top: "80%", left: "3%", size: 6, color: "#64B5F6", opacity: 0.88 },
  { top: "90%", left: "9%", size: 5, color: "#FFF176", opacity: 0.84 },
  { top: "14%", left: "18%", size: 4, color: "#4CAF50", opacity: 0.77 },
  { top: "50%", left: "15%", size: 4, color: "#42A5F5", opacity: 0.8 },
  { top: "75%", left: "20%", size: 4, color: "#81C784", opacity: 0.76 },
  { top: "35%", left: "85%", size: 3, color: "#4CAF50", opacity: 0.31 },
  { top: "65%", left: "90%", size: 3, color: "#64B5F6", opacity: 0.27 },
];

export default function SEOCTA() {
  const yesterday = (() => {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  })();

  return (
    <section className="relative isolate w-full lg:min-h-screen overflow-hidden grid grid-cols-1 lg:grid-cols-3 border-t border-black/5">
      {/* ── Left panel: SEO Stats ── */}
      <div
        className="relative z-20 flex flex-col px-4 md:px-8 lg:px-12 overflow-hidden"
        style={{ background: "#F5FAF0" }}
      >
        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(120,170,100,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(120,170,100,0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Pixel dots */}
        {DOTS.map((d, i) => (
          <div
            key={i}
            className="absolute z-0 pointer-events-none"
            style={{
              top: d.top,
              left: d.left,
              width: `${d.size}px`,
              height: `${d.size}px`,
              background: d.color,
              opacity: d.opacity,
            }}
          />
        ))}

        {/* Scan line */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute left-0 right-0 h-px bg-linear-to-r from-transparent via-emerald-300/15 to-transparent"
            style={{
              animation: "scanLine 8s cubic-bezier(0.45,0,0.55,1) infinite",
            }}
          />
        </div>

        {/* Stats content */}
        <div
          className="relative z-10 w-full max-w-[335px] mx-auto flex-1 flex flex-col justify-center py-10"
          style={{ transform: "translateY(0)" }}
        >
          {/* Title */}
          <div className="mb-7">
            <span id="about-seo-agent" className="text-[20px] md:text-[23px] lg:text-[26px] tracking-[0.02em] text-black">
              <span className="font-medium">SEO results across</span>
              <br />
              <span className="font-extrabold">2,000+ sites</span>
            </span>
          </div>

          <div className="space-y-0">
            {/* ORGANIC */}
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-zinc-700 mb-4 flex items-center gap-2">
                <span className="relative w-1.5 h-1.5 shrink-0">
                  <span className="absolute -inset-0.75 bg-emerald-400/20 animate-pulse" />
                  <span className="absolute inset-0 bg-emerald-400 animate-pulse" />
                </span>
                Organic Traffic
              </p>
              <div className="space-y-3">
                <div className="flex items-end gap-3">
                  <span className="text-[13px] text-zinc-600 leading-tight w-17.5 md:w-21.25 shrink-0 pb-0.5">
                    Organic
                    <br />
                    visits driven
                  </span>
                  <div className="flex-1 border-b border-dotted border-zinc-300 mb-1.5" />
                  <span className="text-[15px] font-normal text-black tabular-nums w-17.5 md:w-20 text-right shrink-0 pixel-font-pulse">
                    <Counter value={23.5} suffix="M" decimals={1} />
                  </span>
                </div>
                <div className="flex items-end gap-3">
                  <span className="text-[13px] text-zinc-600 leading-tight w-17.5 md:w-21.25 shrink-0 pb-0.5">
                    Keywords
                    <br />
                    on page 1
                  </span>
                  <div className="flex-1 border-b border-dotted border-zinc-300 mb-1.5" />
                  <span className="text-[15px] font-normal text-black tabular-nums w-17.5 md:w-20 text-right shrink-0 pixel-font-pulse">
                    48k+
                  </span>
                </div>
              </div>
            </div>

            <div className="my-6 h-px bg-zinc-200/60" />

            {/* TECHNICAL */}
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-zinc-700 mb-4 flex items-center gap-2">
                <span className="relative w-1.5 h-1.5 shrink-0">
                  <span className="absolute -inset-0.75 bg-emerald-400/20 animate-pulse" />
                  <span className="absolute inset-0 bg-emerald-400 animate-pulse" />
                </span>
                Technical
              </p>
              <div className="space-y-3">
                <div className="flex items-end gap-3">
                  <span className="text-[13px] text-zinc-600 leading-tight w-17.5 md:w-21.25 shrink-0 pb-0.5">
                    Sites
                    <br />
                    audited
                  </span>
                  <div className="flex-1 border-b border-dotted border-zinc-300 mb-1.5" />
                  <span className="text-[15px] font-normal text-black tabular-nums w-17.5 md:w-20 text-right shrink-0 pixel-font-pulse">
                    <Counter value={2847} />
                  </span>
                </div>
                <div className="flex items-end gap-3">
                  <span className="text-[13px] text-zinc-600 leading-tight w-17.5 md:w-21.25 shrink-0 pb-0.5">
                    Issues
                    <br />
                    auto-fixed
                  </span>
                  <div className="flex-1 border-b border-dotted border-zinc-300 mb-1.5" />
                  <span className="text-[15px] font-normal text-black tabular-nums w-17.5 md:w-20 text-right shrink-0 pixel-font-pulse">
                    <Counter value={142} suffix="K" />
                  </span>
                </div>
              </div>
            </div>

            <div className="my-6 h-px bg-zinc-200/60" />

            {/* CONTENT */}
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-zinc-700 mb-4 flex items-center gap-2">
                <span className="relative w-1.5 h-1.5 shrink-0">
                  <span className="absolute -inset-0.75 bg-emerald-400/20 animate-pulse" />
                  <span className="absolute inset-0 bg-emerald-400 animate-pulse" />
                </span>
                Content
              </p>
              <div className="space-y-3">
                <div className="flex items-end gap-3">
                  <span className="text-[13px] text-zinc-600 leading-tight w-17.5 md:w-21.25 shrink-0 pb-0.5">
                    Pages
                    <br />
                    optimized
                  </span>
                  <div className="flex-1 border-b border-dotted border-zinc-300 mb-1.5" />
                  <span className="text-[15px] font-normal text-black tabular-nums w-17.5 md:w-20 text-right shrink-0 pixel-font-pulse">
                    <Counter value={847} suffix="K" />
                  </span>
                </div>
                <div className="flex items-end gap-3">
                  <span className="text-[13px] text-zinc-600 leading-tight w-17.5 md:w-21.25 shrink-0 pb-0.5">
                    Avg. CTR
                    <br />
                    lift
                  </span>
                  <div className="flex-1 border-b border-dotted border-zinc-300 mb-1.5" />
                  <span className="text-[15px] font-normal text-black tabular-nums w-17.5 md:w-20 text-right shrink-0 pixel-font-pulse">
                    <Counter value={22} prefix="+" suffix="%" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Last updated */}
          <div className="mt-6">
            <div className="h-px bg-zinc-200/60 mb-3" />
            <div className="font-mono text-[13px] text-zinc-600 tracking-wider space-y-1">
              <div>Last updated: {yesterday}</div>
              <div className="text-emerald-500/70 flex items-center gap-1.5">
                <span className="relative w-1.5 h-1.5 shrink-0">
                  <span className="absolute -inset-0.75 bg-emerald-400/20 animate-pulse" />
                  <span className="absolute inset-0 bg-emerald-400 animate-pulse" />
                </span>
                All systems ok
              </div>
            </div>
          </div>
        </div>

        {/* Footer links */}
        <div className="relative z-10 pb-4 pt-0">
          <div className="flex items-center gap-3 md:gap-5 flex-wrap mb-3">
            <a
              href="#about-seo-agent"
              className="text-[13px] text-zinc-400 hover:text-zinc-600 transition-colors"
            >
              About
            </a>
            <a
              href="#privacy-note"
              className="text-[13px] text-zinc-400 hover:text-zinc-600 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#terms-note"
              className="text-[13px] text-zinc-400 hover:text-zinc-600 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="mailto:hello@get-ryze.ai"
              className="text-[13px] text-zinc-400 hover:text-zinc-600 transition-colors"
            >
              hello@get-ryze.ai
            </a>
          </div>
          <div className="space-y-1 pb-2">
            <p id="privacy-note" className="text-[11px] text-zinc-500 leading-relaxed">
              Privacy: We only use your email to send product updates and onboarding support.
            </p>
            <p id="terms-note" className="text-[11px] text-zinc-500 leading-relaxed">
              Terms: Frontend preview experience. Final production policies are applied at launch.
            </p>
          </div>
        </div>
      </div>

      {/* ── Right panel: CTA ── */}
      <div className="relative z-10 flex items-center justify-center px-4 md:px-8 lg:px-14 py-10 md:py-16 overflow-hidden lg:col-span-2">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            alt=""
            loading="lazy"
            decoding="async"
            className="object-cover object-right-bottom"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              color: "transparent",
            }}
            sizes="100vw"
            src="/landscape-for-landing-3.png"
          />
          {/* Darker overlay for text readability */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(10,40,25,0.45) 0%, rgba(15,60,35,0.30) 50%, transparent 100%)",
            }}
          />
        </div>

        {/* Glassmorphism card */}
        <div className="relative z-10 w-full max-w-127.25">
          <div
            className="backdrop-blur-md rounded-[10px] p-5 shadow-lg"
            style={{
              background: "rgba(255,255,255,0.25)",
              border: "1px solid rgba(255,255,255,0.4)",
            }}
          >
            <div
              className="rounded-[3px] px-5 sm:px-7 md:px-10 py-8 sm:py-10 md:py-12 flex flex-col items-center text-center"
              style={{ background: "rgba(255,255,255,0.93)" }}
            >
              {/* Social proof badge */}
              <div className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1">
                <span className="relative w-1.5 h-1.5 shrink-0">
                  <span className="absolute -inset-0.75 bg-emerald-400/30 animate-pulse rounded-full" />
                  <span className="absolute inset-0 bg-emerald-500 rounded-full" />
                </span>
                <span className="text-[11px] font-semibold text-emerald-700 tracking-wide uppercase">2,000+ sites — live results</span>
              </div>

              <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-bold tracking-[-0.03em] leading-[0.92] mb-4 text-zinc-900">
                Let AI run
                <br />
                <span style={{ background: "linear-gradient(90deg,#16a34a,#4ade80)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  your SEO
                </span>
              </h2>
              <p className="text-zinc-500 text-[14px] leading-relaxed mb-7 max-w-xs">
                Autonomous audits, content optimization, and rank tracking —
                all on autopilot. No agency required.
              </p>

              <div id="seo-cta-form" className="w-full max-w-sm space-y-2.5">
                <a
                  href="mailto:hello@get-ryze.ai?subject=Book%20a%20Ryze%20SEO%20Demo"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-[3px] bg-zinc-900 text-white text-[14px] sm:text-[15px] font-semibold py-3.5 hover:bg-zinc-700 transition-colors shadow-sm"
                >
                  Book a free 30-min demo
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex w-full items-center justify-center rounded-[3px] border border-zinc-200 bg-white text-zinc-600 text-[13px] font-medium py-3 hover:bg-zinc-50 transition-colors"
                >
                  Start free — no credit card needed
                </a>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[11px] text-zinc-400">
                <span className="flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6l3 3 5-5" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Setup in 5 minutes
                </span>
                <span className="flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6l3 3 5-5" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Weekly AI refreshes
                </span>
                <span className="flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6l3 3 5-5" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Cancel anytime
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
