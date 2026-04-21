"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useScrollReveal } from "@/lib/useScrollReveal";
import {
  Clock,
  AlertTriangle,
  XCircle,
  FileText,
  Zap,
  CheckCircle2,
  Activity,
  BarChart2,
} from "lucide-react";

const BEFORE = [
  { icon: Clock,          text: "Crawl issues pile up for weeks unnoticed",       tag: "Delayed"   },
  { icon: AlertTriangle,  text: "SEO fixes blocked in dev backlog for months",    tag: "Stalled"   },
  { icon: XCircle,        text: "Content decays silently — rankings bleed out",   tag: "Untracked" },
  { icon: FileText,       text: "Monthly PDFs arrive long after damage is done",  tag: "Reactive"  },
];

const AFTER = [
  { icon: Zap,          text: "Anomalies flagged and triaged within minutes",        tag: "Real-time" },
  { icon: CheckCircle2, text: "Technical fixes ship automatically — no ticket",      tag: "Auto"      },
  { icon: Activity,     text: "Weekly content refreshes keep your rankings safe",    tag: "Proactive" },
  { icon: BarChart2,    text: "Live dashboards show what changed and when",          tag: "Live"      },
];

function RevealDiv({
  children,
  className,
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`fade-in-up visible ${className ?? ""}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

export default function SEOComparison() {
  const [isAfter, setIsAfter] = useState(false);
  const items = isAfter ? AFTER : BEFORE;

  // Auto-cycle every 3.4s
  useEffect(() => {
    const id = setInterval(() => setIsAfter((v) => !v), 3400);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative bg-linear-to-b from-[#f8fbff] via-[#f3f8ff] to-[#eef6ff] py-24 md:py-32 overflow-hidden">

      {/* Ambient glow — transitions with state */}
      <div
        className="pointer-events-none absolute inset-0 transition-all duration-2000"
        style={{
          background: isAfter
            ? "radial-gradient(ellipse 70% 52% at 50% 58%, rgba(16,185,129,0.24), rgba(255,255,255,0) 65%)"
            : "radial-gradient(ellipse 70% 52% at 50% 58%, rgba(244,63,94,0.2), rgba(255,255,255,0) 65%)",
        }}
      />

      <div className="max-w-2xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="pointer-events-none absolute -inset-x-1 top-10 bottom-1 rounded-3xl bg-white/35 border border-white/65 backdrop-blur-2xl shadow-[0_35px_80px_rgba(14,116,144,0.18)]" />
        <div className="pointer-events-none absolute inset-x-14 top-2 h-28 rounded-full bg-linear-to-r from-sky-200/45 via-cyan-200/55 to-emerald-200/45 blur-3xl" />

        {/* Header */}
        <RevealDiv className="relative text-center mb-14">
          <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-slate-500 mb-5">
            The Shift
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-5">
            SEO that runs itself.{" "}
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 via-sky-600 to-emerald-500">
              Not you.
            </span>
          </h2>
          <p className="text-slate-600 text-base max-w-lg mx-auto leading-relaxed">
            Every item on the left is something your team currently manages manually. Ryze eliminates all of it.
          </p>
        </RevealDiv>

        {/* Toggle pill */}
        <RevealDiv delay={80} className="relative flex justify-center mb-8">
          <button
            onClick={() => setIsAfter((v) => !v)}
            aria-label="Toggle between before and after states"
            className="relative flex items-center bg-white/60 border border-white/75 rounded-full p-1 gap-0 cursor-pointer backdrop-blur-2xl shadow-[0_18px_45px_rgba(14,116,144,0.2)] focus-visible:outline-2 focus-visible:outline-emerald-500"
          >
            {/* Sliding highlight */}
            <motion.span
              layout
              transition={{ type: "spring", stiffness: 450, damping: 42 }}
              className="absolute top-1 bottom-1 rounded-full"
              style={{
                left: isAfter ? "calc(50% + 2px)" : "2px",
                right: isAfter ? "2px" : "calc(50% + 2px)",
                background: isAfter
                  ? "rgba(16, 185, 129, 0.22)"
                  : "rgba(244, 63, 94, 0.2)",
                border: isAfter
                  ? "1px solid rgba(52, 211, 153, 0.55)"
                  : "1px solid rgba(251, 113, 133, 0.5)",
                boxShadow: isAfter
                  ? "0 0 24px rgba(16, 185, 129, 0.25)"
                  : "0 0 24px rgba(244, 63, 94, 0.2)",
              }}
            />
            <span
              className={`relative z-10 px-6 py-2.5 text-[13px] font-semibold rounded-full select-none transition-colors duration-300 ${
                !isAfter ? "text-rose-600" : "text-slate-500"
              }`}
            >
              Without Ryze
            </span>
            <span
              className={`relative z-10 px-6 py-2.5 text-[13px] font-semibold rounded-full select-none transition-colors duration-300 ${
                isAfter ? "text-emerald-700" : "text-slate-500"
              }`}
            >
              With Ryze
            </span>
          </button>
        </RevealDiv>

        {/* Card */}
        <RevealDiv delay={140} className="relative">
          <motion.div
            animate={{
              borderColor: isAfter
                ? "rgba(52, 211, 153, 0.42)"
                : "rgba(148, 163, 184, 0.45)",
              backgroundColor: isAfter
                ? "rgba(240, 253, 244, 0.58)"
                : "rgba(255, 255, 255, 0.52)",
            }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="relative rounded-2xl border overflow-hidden backdrop-blur-2xl shadow-[0_30px_70px_rgba(14,116,144,0.2)]"
          >
            <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-white/70 via-white/20 to-transparent" />
            <div className="pointer-events-none absolute -top-8 left-8 h-24 w-48 rotate-[-8deg] bg-white/55 blur-2xl" />
            <div className="pointer-events-none absolute -right-7 top-12 h-36 w-18 rounded-full bg-linear-to-b from-cyan-200/55 to-transparent blur-xl" />
            {/* Terminal top bar */}
            <motion.div
              animate={{
                backgroundColor: isAfter
                  ? "rgba(16, 185, 129, 0.14)"
                  : "rgba(148, 163, 184, 0.18)",
                borderBottomColor: isAfter
                  ? "rgba(52, 211, 153, 0.32)"
                  : "rgba(148, 163, 184, 0.3)",
              }}
              transition={{ duration: 0.7 }}
              className="relative px-5 py-3.5 border-b flex items-center gap-3 backdrop-blur-xl"
            >
              <motion.span
                animate={{ backgroundColor: isAfter ? "#10b981" : "#ef4444" }}
                transition={{ duration: 0.5 }}
                className="w-2 h-2 rounded-full animate-pulse"
              />
              <AnimatePresence mode="wait">
                <motion.span
                  key={isAfter ? "after-label" : "before-label"}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.25 }}
                  className={`text-[12px] font-mono tracking-wide ${
                    isAfter ? "text-emerald-700/80" : "text-rose-600/75"
                  }`}
                >
                  {isAfter ? "ryze.ai — monitoring active" : "seo-tasks-manual.xlsx"}
                </motion.span>
              </AnimatePresence>
              <div className="flex gap-1.5 ml-auto">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="w-2.5 h-2.5 rounded-full bg-slate-500/60" />
                ))}
              </div>
            </motion.div>

            {/* Rows */}
            <div className="relative p-4 grid gap-2.5">
              <AnimatePresence mode="popLayout">
                {items.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={`${String(isAfter)}-${i}`}
                      initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                      transition={{
                        duration: 0.38,
                        delay: i * 0.065,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      className={`flex items-center gap-4 rounded-xl px-4 py-3.5 border transition-colors ${
                        isAfter
                          ? "bg-emerald-100/45 border-emerald-300/45 backdrop-blur-2xl shadow-[0_12px_26px_rgba(16,185,129,0.16)]"
                          : "bg-white/55 border-slate-300/45 backdrop-blur-2xl shadow-[0_12px_26px_rgba(14,116,144,0.12)]"
                      }`}
                    >
                      <div className="pointer-events-none absolute inset-0 rounded-xl bg-linear-to-r from-white/45 via-transparent to-cyan-100/25" />
                      <div
                        className={`relative shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                          isAfter ? "bg-emerald-500/15" : "bg-rose-500/15"
                        }`}
                      >
                        <Icon
                          className={`w-4 h-4 ${
                            isAfter ? "text-emerald-700" : "text-rose-600"
                          }`}
                          strokeWidth={1.75}
                        />
                      </div>
                      <span
                        className={`relative flex-1 text-[14px] font-medium leading-snug ${
                          isAfter ? "text-emerald-950/80" : "text-slate-700"
                        }`}
                      >
                        {item.text}
                      </span>
                      <span
                        className={`relative text-[11px] px-2.5 py-1 rounded-full font-semibold tracking-wide shrink-0 ${
                          isAfter
                            ? "bg-emerald-400/20 text-emerald-800 border border-emerald-500/30"
                            : "bg-rose-400/20 text-rose-700 border border-rose-500/30"
                        }`}
                      >
                        {item.tag}
                      </span>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </motion.div>
        </RevealDiv>

      </div>
    </section>
  );
}
