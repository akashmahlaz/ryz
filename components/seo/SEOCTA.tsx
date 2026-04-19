"use client";

import { useState, useRef, useEffect } from "react";

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
  const [email, setEmail] = useState("");

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
    <section className="relative w-full min-h-screen overflow-hidden grid grid-cols-1 lg:grid-cols-3">
      {/* ── Left panel: SEO Stats ── */}
      <div
        className="relative flex items-stretch justify-center px-4 md:px-8 lg:px-12 overflow-hidden"
        style={{ background: "#F5FAF0" }}
      >
        {/* Grid lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(120,170,100,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(120,170,100,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            opacity: 0,
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
          className="relative z-10 w-full max-w-[335px] flex flex-col justify-center h-full py-12 lg:py-0"
          style={{ transform: "translateY(-30px)" }}
        >
          {/* Title */}
          <div className="mb-7">
            <span className="text-[20px] md:text-[23px] lg:text-[26px] tracking-[0.02em] text-black">
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
                  <span className="text-[15px] font-normal text-black tabular-nums w-17.5 md:w-20 text-right shrink-0 pixel-font-pulse -ml-2">
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
                  <span className="text-[15px] font-normal text-black tabular-nums w-17.5 md:w-20 text-right shrink-0 pixel-font-pulse -ml-2">
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
                  <span className="text-[15px] font-normal text-black tabular-nums w-17.5 md:w-20 text-right shrink-0 pixel-font-pulse -ml-2">
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
                  <span className="text-[15px] font-normal text-black tabular-nums w-17.5 md:w-20 text-right shrink-0 pixel-font-pulse -ml-2">
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
                  <span className="text-[15px] font-normal text-black tabular-nums w-17.5 md:w-20 text-right shrink-0 pixel-font-pulse -ml-2">
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
                  <span className="text-[15px] font-normal text-black tabular-nums w-17.5 md:w-20 text-right shrink-0 pixel-font-pulse -ml-2">
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
        <div className="absolute bottom-0 left-0 right-0 px-4 md:px-8 lg:px-12 pb-1 z-10">
          <div className="flex items-center gap-3 md:gap-5 flex-wrap mb-3">
            <a
              href="/about"
              className="text-[13px] text-zinc-400 hover:text-zinc-600 transition-colors"
            >
              About
            </a>
            <a
              href="/privacy"
              className="text-[13px] text-zinc-400 hover:text-zinc-600 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/term-services"
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
        </div>
      </div>

      {/* ── Right panel: CTA ── */}
      <div className="relative flex items-center justify-center px-4 md:px-8 lg:px-14 py-10 md:py-16 overflow-hidden lg:col-span-2">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            alt=""
            loading="lazy"
            decoding="async"
            className="object-cover object-bottom-right"
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
              className="rounded-lg px-8 md:px-10 py-8 md:py-10 flex flex-col items-center text-center"
              style={{ background: "rgba(255,255,255,0.92)" }}
            >
              <h2 className="text-[26px] md:text-[30px] lg:text-[38px] font-bold tracking-[-0.03em] leading-[0.9] mb-4 text-zinc-900">
                Let AI run
                <br />
                your SEO
              </h2>
              <p className="text-zinc-500 text-[14px] leading-relaxed mb-6 max-w-sm">
                Get started with the autonomous SEO agent. Technical audits,
                content optimization, and rank tracking — on autopilot.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="relative w-full max-w-sm"
              >
                <div className="flex items-stretch rounded-[3px] bg-white shadow-sm border border-zinc-200 min-h-12.5 overflow-hidden">
                  <input
                    type="email"
                    placeholder="work@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 min-w-0 basis-0 bg-transparent border-none outline-none pl-4 pr-3 sm:px-5 text-[15px] text-zinc-900 placeholder:text-zinc-400 h-full min-h-12.5"
                  />
                  <button
                    type="submit"
                    className="shrink-0 bg-zinc-900 text-white px-3.5 sm:px-5 md:px-7 h-full min-h-12.5 font-medium whitespace-nowrap hover:bg-zinc-700 transition-all flex items-center justify-center gap-1.5 sm:gap-2 disabled:opacity-70 rounded-[3px] translate-x-[1.5px]"
                  >
                    <span className="text-[13px] sm:text-[15px]">
                      Get started
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
