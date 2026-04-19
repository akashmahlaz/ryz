"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

function RevealDiv({ className, children, style }: { className?: string; children: React.ReactNode; style?: React.CSSProperties }) {
  const ref = useScrollReveal();
  return <div ref={ref} className={`fade-in-up ${className ?? ""}`} style={style}>{children}</div>;
}

export default function MCPSection() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF9F6]">
      <div className="max-w-[1367px] mx-auto px-6 md:px-12 xl:px-16">
        {/* Heading */}
        <RevealDiv className="text-center mb-[41px]">
          <h2 className="text-[28px] md:text-[36px] lg:text-[48px] font-bold tracking-[-0.03em] text-black">
            Ryze AI: Connect Claude to Google &amp; Meta Ads
          </h2>
        </RevealDiv>

        {/* Row 1: Cards 01 + 02 */}
        <div className="flex flex-col md:flex-row gap-2 mb-2">
          {/* Card 01 — narrower */}
          <RevealDiv className="md:w-[calc(41.67%-4px+20px)] rounded-[3px] py-[26px] px-6 border border-zinc-300 bg-transparent hover:border-zinc-400 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.06)] transition-all duration-500">
            <div className="flex items-center gap-5">
              <span className="text-[36px] md:text-[49px] font-bold bg-linear-to-b from-zinc-300 to-zinc-400/50 bg-clip-text text-transparent leading-none shrink-0">01</span>
              <div className="w-px self-stretch bg-zinc-200/80" />
              <div className="flex-1">
                <h3 className="text-[18px] md:text-[21px] font-semibold text-black mb-0">Ask in English, get answers</h3>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-[1px] bg-emerald-400 shrink-0" />
                    <span className="text-[15px] text-zinc-500">&ldquo;How&apos;s my brand campaign doing?&rdquo; — just ask</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-[1px] bg-violet-400 shrink-0" />
                    <span className="text-[15px] text-zinc-500">Audits, reports, and optimizations in seconds</span>
                  </div>
                </div>
              </div>
            </div>
          </RevealDiv>

          {/* Card 02 — wider */}
          <RevealDiv className="md:w-[calc(58.33%-4px-20px)] rounded-[3px] py-[26px] px-6 border border-zinc-300 bg-transparent hover:border-zinc-400 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.06)] transition-all duration-500">
            <div className="flex items-center gap-5">
              <span className="text-[36px] md:text-[49px] font-bold bg-linear-to-b from-zinc-300 to-zinc-400/50 bg-clip-text text-transparent leading-none shrink-0">02</span>
              <div className="w-px self-stretch bg-zinc-200/80" />
              <div className="flex-1">
                <h3 className="text-[18px] md:text-[21px] font-semibold text-black mb-0">All platforms, one conversation</h3>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-[1px] bg-amber-400 shrink-0" />
                    <span className="text-[15px] text-zinc-500">Pull from Google Ads, Meta Ads, and GA4 at once</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-[1px] bg-rose-400 shrink-0" />
                    <span className="text-[15px] text-zinc-500">Compare and deduplicate across accounts</span>
                  </div>
                </div>
              </div>
              {/* Platform logos */}
              <div className="shrink-0 hidden md:grid grid-cols-2 gap-x-5 gap-y-3">
                <div className="h-7 w-7 relative"><img alt="Google Ads" loading="lazy" width={28} height={28} className="object-contain" src="/google_ads.png" /></div>
                <div className="h-7 w-7 relative"><img alt="Meta" loading="lazy" width={28} height={28} className="object-contain" src="/meta.png" /></div>
                <div className="h-7 w-7 relative"><img alt="Google Analytics" loading="lazy" width={28} height={28} className="object-contain" src="/google-analytics.svg" /></div>
                <div className="h-7 w-7 relative"><img alt="TikTok" loading="lazy" width={28} height={28} className="object-contain" src="/platform-tiktok.png" /></div>
              </div>
            </div>
          </RevealDiv>
        </div>

        {/* Row 2: Cards 03 + 04 */}
        <div className="flex flex-col md:flex-row gap-2">
          {/* Card 03 — wider */}
          <RevealDiv className="md:w-[calc(58.33%-4px-65px)] rounded-[3px] py-[26px] px-6 border border-zinc-300 bg-transparent hover:border-zinc-400 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.06)] transition-all duration-500">
            <div className="flex items-center gap-4">
              <span className="text-[36px] md:text-[49px] font-bold bg-linear-to-b from-zinc-300 to-zinc-400/50 bg-clip-text text-transparent leading-none shrink-0">03</span>
              <div className="w-px self-stretch bg-zinc-200/80" />
              <div>
                <h3 className="text-[18px] md:text-[21px] font-semibold text-black mb-0">Read, write, and schedule</h3>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-[1px] bg-sky-400 shrink-0" />
                    <span className="text-[15px] text-zinc-500">Pause campaigns, update bids, add keywords — right from chat</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-[1px] bg-fuchsia-400 shrink-0" />
                    <span className="text-[15px] text-zinc-500">Schedule actions to run later, hands-free</span>
                  </div>
                </div>
              </div>
            </div>
          </RevealDiv>

          {/* Card 04 — narrower */}
          <RevealDiv className="md:w-[calc(41.67%-4px+65px)] rounded-[3px] py-[26px] px-6 border border-zinc-300 bg-transparent hover:border-zinc-400 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.06)] transition-all duration-500">
            <div className="flex items-center gap-5">
              <span className="text-[36px] md:text-[49px] font-bold bg-linear-to-b from-zinc-300 to-zinc-400/50 bg-clip-text text-transparent leading-none shrink-0">04</span>
              <div className="w-px self-stretch bg-zinc-200/80" />
              <div className="flex-1">
                <h3 className="text-[18px] md:text-[21px] font-semibold text-black mb-0">Safe by default</h3>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-[1px] bg-orange-400 shrink-0" />
                    <span className="text-[15px] text-zinc-500">Write actions need your approval before anything changes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-[1px] bg-cyan-400 shrink-0" />
                    <span className="text-[15px] text-zinc-500">Your Meta account won&apos;t get flagged or banned</span>
                  </div>
                </div>
              </div>
            </div>
          </RevealDiv>
        </div>

      </div>
    </section>
  );
}
