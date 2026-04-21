"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

/* ─── Wrapper for scroll-reveal ─── */
function RevealDiv({
  className,
  children,
  style,
}: {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className={`fade-in-up ${className ?? ""}`} style={style}>
      {children}
    </div>
  );
}

/* ─── Capability card data ─── */
const capabilities = [
  {
    num: "01",
    title: "Technical audits on autopilot",
    bullets: [
      {
        text: "Crawl analysis, Core Web Vitals, structured data — all detected",
        color: "bg-emerald-400",
      },
      {
        text: "One-click fixes applied automatically, no dev needed",
        color: "bg-violet-400",
      },
    ],
    platforms: [
      "/google-analytics.svg",
      "/platform-semrush.svg",
      "/platform-wordpress.svg",
    ],
  },
  {
    num: "02",
    title: "AI-powered content optimization",
    bullets: [
      {
        text: "Keyword gaps identified, title tags rewritten by AI",
        color: "bg-amber-400",
      },
      {
        text: "Meta descriptions, headings, internal links — all optimized",
        color: "bg-rose-400",
      },
    ],
    platforms: [
      "/platform-wordpress.svg",
      "/platform-shopify.png",
      "/platform-semrush.svg",
    ],
  },
  {
    num: "03",
    title: "Real-time rank tracking",
    bullets: [
      {
        text: "Monitor keyword positions across all search engines",
        color: "bg-sky-400",
      },
      {
        text: "Get alerts on drops, track competitor movements",
        color: "bg-fuchsia-400",
      },
    ],
    platforms: [
      "/platform-semrush.svg",
      "/google-analytics.svg",
      "/platform-perplexity.png",
    ],
  },
  {
    num: "04",
    title: "Site speed & Core Web Vitals",
    bullets: [
      {
        text: "Image compression, lazy loading, code splitting — automated",
        color: "bg-orange-400",
      },
      {
        text: "LCP, FID, CLS optimized to pass Google thresholds",
        color: "bg-cyan-400",
      },
    ],
    platforms: [
      "/google-analytics.svg",
      "/platform-wordpress.svg",
      "/platform-shopify.png",
    ],
  },
];

export default function SEOCapabilities() {
  return (
    <section className="py-16 md:py-28 bg-[#FEFEF5]">
      <div className="max-w-350 mx-auto px-4 sm:px-6 md:px-12 xl:px-16">
        {/* Section heading */}
        <RevealDiv className="text-center mb-10 md:mb-10.25">
          <h2 className="text-[28px] md:text-[36px] lg:text-[48px] font-bold tracking-[-0.03em] text-black leading-[1.08]">
            Everything the SEO agent does
          </h2>
          <p className="text-[15px] md:text-[17px] text-zinc-500 leading-relaxed mt-4 max-w-xl mx-auto">
            From crawl analysis to rank tracking — fully autonomous, always
            learning.
          </p>
        </RevealDiv>

        {/* Row 1: Cards 01 + 02 */}
        <div className="flex flex-col md:flex-row gap-2 mb-2">
          {/* Card 01 — narrower */}
          <RevealDiv className="md:w-[calc(41.67%-4px+20px)] rounded-[3px] py-5 sm:py-6.5 px-4 sm:px-6 border border-zinc-300 bg-transparent hover:border-zinc-400 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.06)] transition-all duration-500">
            <div className="flex items-start gap-4 sm:gap-5">
              <span className="text-[36px] md:text-[49px] font-bold bg-linear-to-b from-zinc-300 to-zinc-400/50 bg-clip-text text-transparent leading-none shrink-0">
                {capabilities[0].num}
              </span>
              <div className="w-px self-stretch bg-zinc-200/80" />
              <div className="flex-1 min-w-0">
                <h3 className="text-[18px] md:text-[21px] font-semibold text-black mb-1">
                  {capabilities[0].title}
                </h3>
                <div className="flex flex-col gap-1.5">
                  {capabilities[0].bullets.map((b, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span
                        className={`w-1.5 h-1.5 rounded-[1px] ${b.color} shrink-0`}
                      />
                      <span className="text-[15px] text-zinc-500">
                        {b.text}
                      </span>
                    </div>
                  ))}
                </div>
                {/* Mini viz: audit score */}
                <div className="mt-4 p-3 rounded-[3px] bg-white/80 border border-zinc-100">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-zinc-400">
                      Site Health
                    </span>
                    <span className="text-[9px] text-emerald-500 font-medium">
                      Live
                    </span>
                  </div>
                  <div className="flex items-end gap-1.5 mb-1.5">
                    <span className="text-[18px] font-bold text-black leading-none">
                      92
                    </span>
                    <span className="text-[10px] text-zinc-400">/100</span>
                  </div>
                  <div className="h-1 rounded-full bg-zinc-100 overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: "92%",
                        background:
                          "linear-gradient(90deg, #34d399, #10b981)",
                      }}
                    />
                  </div>
                  <div className="flex gap-3 mt-1.5 flex-wrap">
                    <span className="flex items-center gap-1 text-[8px]">
                      <span className="w-1 h-1 rounded-full bg-red-400" />
                      <span className="text-zinc-500">3 critical</span>
                    </span>
                    <span className="flex items-center gap-1 text-[8px]">
                      <span className="w-1 h-1 rounded-full bg-amber-400" />
                      <span className="text-zinc-500">12 warnings</span>
                    </span>
                    <span className="flex items-center gap-1 text-[8px]">
                      <span className="w-1 h-1 rounded-full bg-emerald-400" />
                      <span className="text-zinc-500">847 passed</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="shrink-0 hidden md:flex flex-col gap-3">
                {capabilities[0].platforms.map((src, j) => (
                  <div key={j} className="h-7 w-7 relative">
                    <img
                      alt=""
                      loading="lazy"
                      width={28}
                      height={28}
                      className="object-contain"
                      src={src}
                    />
                  </div>
                ))}
              </div>
            </div>
          </RevealDiv>

          {/* Card 02 — wider */}
          <RevealDiv className="md:w-[calc(58.33%-4px-20px)] rounded-[3px] py-5 sm:py-6.5 px-4 sm:px-6 border border-zinc-300 bg-transparent hover:border-zinc-400 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.06)] transition-all duration-500">
            <div className="flex items-start gap-4 sm:gap-5">
              <span className="text-[36px] md:text-[49px] font-bold bg-linear-to-b from-zinc-300 to-zinc-400/50 bg-clip-text text-transparent leading-none shrink-0">
                {capabilities[1].num}
              </span>
              <div className="w-px self-stretch bg-zinc-200/80" />
              <div className="flex-1 min-w-0">
                <h3 className="text-[18px] md:text-[21px] font-semibold text-black mb-1">
                  {capabilities[1].title}
                </h3>
                <div className="flex flex-col gap-1.5">
                  {capabilities[1].bullets.map((b, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span
                        className={`w-1.5 h-1.5 rounded-[1px] ${b.color} shrink-0`}
                      />
                      <span className="text-[15px] text-zinc-500">
                        {b.text}
                      </span>
                    </div>
                  ))}
                </div>
                {/* Mini viz: before/after title tag */}
                <div className="mt-4 p-3 rounded-[3px] bg-white/80 border border-zinc-100">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-zinc-400 mb-2 block">
                    Title Tag Optimization
                  </span>
                  <div className="space-y-1.5">
                    <div className="flex items-start gap-2">
                      <span className="text-[8px] font-bold text-red-400 mt-0.5 shrink-0">
                        BEFORE
                      </span>
                      <span className="text-[10px] text-zinc-400 line-through leading-tight">
                        Buy Running Shoes Online - Best Deals &amp; Free
                        Shipping 2026 | ShopSprint
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[8px] font-bold text-emerald-500 mt-0.5 shrink-0">
                        AFTER
                      </span>
                      <span className="text-[10px] text-zinc-700 font-medium leading-tight">
                        AI Running Shoes | Free Shipping Today | ShopSprint
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mt-1.5">
                    <span className="text-[8px] text-emerald-500 font-medium">
                      +22% CTR
                    </span>
                    <span className="text-[8px] text-zinc-300">·</span>
                    <span className="text-[8px] text-zinc-400">
                      58 → 49 chars
                    </span>
                  </div>
                </div>
              </div>
              {/* Platform logos */}
              <div className="shrink-0 hidden md:flex flex-col gap-3">
                {capabilities[1].platforms.map((src, j) => (
                  <div key={j} className="h-7 w-7 relative">
                    <img
                      alt=""
                      loading="lazy"
                      width={28}
                      height={28}
                      className="object-contain"
                      src={src}
                    />
                  </div>
                ))}
              </div>
            </div>
          </RevealDiv>
        </div>

        {/* Row 2: Cards 03 + 04 */}
        <div className="flex flex-col md:flex-row gap-2">
          {/* Card 03 — wider */}
          <RevealDiv className="md:w-[calc(58.33%-4px-65px)] rounded-[3px] py-5 sm:py-6.5 px-4 sm:px-6 border border-zinc-300 bg-transparent hover:border-zinc-400 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.06)] transition-all duration-500">
            <div className="flex items-start gap-4 sm:gap-5">
              <span className="text-[36px] md:text-[49px] font-bold bg-linear-to-b from-zinc-300 to-zinc-400/50 bg-clip-text text-transparent leading-none shrink-0">
                {capabilities[2].num}
              </span>
              <div className="w-px self-stretch bg-zinc-200/80" />
              <div className="flex-1 min-w-0">
                <h3 className="text-[18px] md:text-[21px] font-semibold text-black mb-1">
                  {capabilities[2].title}
                </h3>
                <div className="flex flex-col gap-1.5">
                  {capabilities[2].bullets.map((b, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span
                        className={`w-1.5 h-1.5 rounded-[1px] ${b.color} shrink-0`}
                      />
                      <span className="text-[15px] text-zinc-500">
                        {b.text}
                      </span>
                    </div>
                  ))}
                </div>
                {/* Mini viz: ranking table */}
                <div className="mt-4 p-3 rounded-[3px] bg-white/80 border border-zinc-100">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-zinc-400 mb-2 block">
                    Keyword Rankings
                  </span>
                  <div className="space-y-1">
                    {[
                      { kw: "ai seo tool", pos: 3, delta: 12 },
                      { kw: "seo automation", pos: 5, delta: 8 },
                      { kw: "ai marketing", pos: 7, delta: 15 },
                    ].map((r, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between text-[9px]"
                      >
                        <span className="text-zinc-600">
                          &ldquo;{r.kw}&rdquo;
                        </span>
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-zinc-800">
                            #{r.pos}
                          </span>
                          <span className="text-emerald-500 text-[8px] font-medium">
                            ↑{r.delta}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="shrink-0 hidden md:flex flex-col gap-3">
                {capabilities[2].platforms.map((src, j) => (
                  <div key={j} className="h-7 w-7 relative">
                    <img
                      alt=""
                      loading="lazy"
                      width={28}
                      height={28}
                      className="object-contain"
                      src={src}
                    />
                  </div>
                ))}
              </div>
            </div>
          </RevealDiv>

          {/* Card 04 — narrower */}
          <RevealDiv className="md:w-[calc(41.67%-4px+65px)] rounded-[3px] py-5 sm:py-6.5 px-4 sm:px-6 border border-zinc-300 bg-transparent hover:border-zinc-400 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.06)] transition-all duration-500">
            <div className="flex items-start gap-4 sm:gap-5">
              <span className="text-[36px] md:text-[49px] font-bold bg-linear-to-b from-zinc-300 to-zinc-400/50 bg-clip-text text-transparent leading-none shrink-0">
                {capabilities[3].num}
              </span>
              <div className="w-px self-stretch bg-zinc-200/80" />
              <div className="flex-1 min-w-0">
                <h3 className="text-[18px] md:text-[21px] font-semibold text-black mb-1">
                  {capabilities[3].title}
                </h3>
                <div className="flex flex-col gap-1.5">
                  {capabilities[3].bullets.map((b, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span
                        className={`w-1.5 h-1.5 rounded-[1px] ${b.color} shrink-0`}
                      />
                      <span className="text-[15px] text-zinc-500">
                        {b.text}
                      </span>
                    </div>
                  ))}
                </div>
                {/* Mini viz: Core Web Vitals */}
                <div className="mt-4 p-3 rounded-[3px] bg-white/80 border border-zinc-100">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-zinc-400 mb-2 block">
                    Core Web Vitals
                  </span>
                  <div className="space-y-1.5">
                    {[
                      { metric: "LCP", value: "1.2s", status: "Good" },
                      { metric: "INP", value: "18ms", status: "Good" },
                      { metric: "CLS", value: "0.05", status: "Good" },
                    ].map((v, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between text-[9px]"
                      >
                        <span className="font-medium text-zinc-600">
                          {v.metric}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-zinc-800 tabular-nums">
                            {v.value}
                          </span>
                          <span className="text-[8px] text-emerald-500 font-medium px-1 py-0.5 bg-emerald-50 rounded-xs">
                            {v.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Platform logos */}
              <div className="shrink-0 hidden md:flex flex-col gap-3">
                {capabilities[3].platforms.map((src, j) => (
                  <div key={j} className="h-7 w-7 relative">
                    <img
                      alt=""
                      loading="lazy"
                      width={28}
                      height={28}
                      className="object-contain"
                      src={src}
                    />
                  </div>
                ))}
              </div>
            </div>
          </RevealDiv>
        </div>
      </div>
    </section>
  );
}
