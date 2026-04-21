"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";

function RevealDiv({
  className,
  children,
  delay,
}: {
  className?: string;
  children: React.ReactNode;
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

const FEATURED = {
  company: "Nimbus Commerce",
  industry: "Ecommerce",
  headline: "Nimbus grew organic sessions 163% in 13 weeks",
  description:
    "Autonomous technical SEO turned crawl waste into a ranking engine — without touching the dev team.",
  stats: [
    { value: "+163%", label: "Organic sessions" },
    { value: "4.1×", label: "Top-3 keywords" },
    { value: "1.3s", label: "LCP (was 2.8s)" },
  ],
  quote:
    "Ryze found issues our team had missed for months. Within two weeks, crawl coverage jumped and rankings followed.",
  person: "Marcus Holt",
  role: "Head of Growth",
  image: "/images/case-studies/marcus-holt.jpg",
};

const VIDEO_STORY = {
  company: "Vista Clinics",
  industry: "Healthcare",
  stat: "+121%",
  statLabel: "non-brand clicks",
  headline: "Vista Clinics ranked for 200+ local searches without a single manual schema edit.",
  description:
    "The healthcare network let Ryze handle schema and location signals across 14 clinics. Non-brand clicks grew 121% in three months.",
  quote:
    "Local rankings used to take months. Ryze automated the schema work and we saw results in the first month.",
  person: "Priya Nair",
  role: "Digital Director",
  thumbnail: "/images/case-studies/priya-nair.jpg",
  video: "/vimeo-1053775447.mp4",
};

const PHOTO_STORY = {
  company: "ForgeStack",
  industry: "SaaS",
  stat: "+89%",
  statLabel: "trial signups from SEO",
  quote:
    "Our docs had a massive internal linking gap. Ryze mapped and fixed it — the trial pipeline from SEO doubled.",
  person: "Sophie Adler",
  role: "VP Marketing",
  image: "/images/case-studies/gpt-two-member-pic1.png",
};

const STORY5 = {
  company: "Arclight Digital",
  industry: "Agency",
  headline: "Our clients started asking what changed. The answer was Ryze.",
  quote:
    "We were shipping great content but the technical foundation was leaking equity everywhere. Ryze fixed that without us having to touch a single dev ticket.",
  person: "Daniel Osei",
  role: "Founder & CEO",
  image: "/images/case-studies/story4.png",
  bubble: "12 new page-1 rankings since Monday. Thought you'd want to see this before the client call.",
};

function VideoCard() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function togglePlay() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }

  return (
    <article className="h-full rounded-3xl border border-sky-100/80 bg-white/75 backdrop-blur-xl overflow-hidden flex flex-col shadow-[0_20px_45px_rgba(14,116,144,0.12)]">

      {/* Video with overlays */}
      <div className="relative aspect-3/2 cursor-pointer" onClick={togglePlay}>
        <video
          ref={videoRef}
          src={VIDEO_STORY.video}
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-top"
          onEnded={() => setPlaying(false)}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/35 via-slate-900/10 to-transparent pointer-events-none" />

        {/* Play / Pause button — center */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="w-14 h-14 rounded-full bg-white/92 backdrop-blur-sm border border-white/80 flex items-center justify-center shadow-[0_10px_30px_rgba(15,23,42,0.3)] transition-transform duration-300 hover:scale-110">
            {playing ? (
              /* Pause icon */
              <svg width="16" height="18" viewBox="0 0 16 18" fill="none" aria-hidden="true">
                <rect x="1" y="1" width="5" height="16" rx="1" fill="#18181b" />
                <rect x="10" y="1" width="5" height="16" rx="1" fill="#18181b" />
              </svg>
            ) : (
              /* Play icon */
              <svg width="18" height="20" viewBox="0 0 18 20" fill="none" aria-hidden="true" className="translate-x-px">
                <path d="M2 1.5v17l14-8.5L2 1.5z" fill="#18181b" />
              </svg>
            )}
          </div>
        </div>

        {/* Ryze Enterprise badge — top right */}
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-wide text-slate-900 bg-white/92 border border-white rounded-full px-3.5 py-2 shadow-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/main-logo-sun-2.png" alt="" className="w-4 h-4 object-contain" />
            Ryze Enterprise
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-7 md:p-8 flex flex-col flex-1">
        <p className="text-xs font-medium tracking-widest uppercase text-slate-500 mb-4">
          {VIDEO_STORY.company} · {VIDEO_STORY.industry}
        </p>

        <div className="mb-4">
          <p className="text-3xl font-bold tracking-tight text-emerald-600">
            {VIDEO_STORY.stat}
          </p>
          <p className="text-xs text-slate-500 mt-0.5">{VIDEO_STORY.statLabel}</p>
        </div>

        <blockquote className="flex-1 mb-5">
            <p className="text-sm text-slate-600 leading-relaxed">
            &ldquo;{VIDEO_STORY.quote}&rdquo;
          </p>
        </blockquote>

        <p className="text-xs text-slate-500 pt-4 border-t border-slate-200/70">
          {VIDEO_STORY.person} · {VIDEO_STORY.role}
        </p>
      </div>
    </article>
  );
}

export default function SEOCaseStudy() {
  return (
    <section className="relative bg-linear-to-b from-[#f8fbff] via-white to-[#f4f9ff] py-24 md:py-32 overflow-hidden">
      <div className="pointer-events-none absolute top-16 left-0 w-72 h-72 rounded-full bg-cyan-200/35 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 right-0 w-80 h-80 rounded-full bg-emerald-200/30 blur-3xl" />
      <div className="max-w-275 mx-auto px-5 sm:px-8 relative z-10">

        {/* ── Header ── */}
        <RevealDiv className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-12 md:mb-14">
          <div>
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-cyan-700 bg-cyan-50 border border-cyan-200/70 rounded-full px-3.5 py-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
              Customer stories
            </p>
            <h3 className="text-3xl md:text-[42px] leading-tight tracking-tight font-bold text-slate-900 max-w-xl">
              Real teams. Real traffic lifts.
            </h3>
          </div>
          <p className="text-sm text-slate-600 max-w-xs sm:text-right leading-relaxed">
            Proof that autonomous SEO fixes drive revenue, not just prettier dashboards.
          </p>
        </RevealDiv>

        {/* ── Featured card — photo + content split ── */}
        <RevealDiv className="mb-4">
          <article className="rounded-3xl border border-sky-100/80 bg-white/75 backdrop-blur-xl overflow-hidden shadow-[0_26px_60px_rgba(14,116,144,0.12)]">
            <div className="grid lg:grid-cols-[1fr_1.2fr]">

              {/* Photo */}
              <div className="relative aspect-4/3 lg:aspect-auto lg:min-h-110">
                <Image
                  src={FEATURED.image}
                  alt={FEATURED.person}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/30 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                <p className="text-xs font-medium tracking-widest uppercase text-slate-500 mb-5">
                  {FEATURED.company} · {FEATURED.industry}
                </p>
                <h4 className="text-2xl md:text-3xl font-semibold leading-snug tracking-tight text-slate-900 mb-3">
                  {FEATURED.headline}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-8">
                  {FEATURED.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {FEATURED.stats.map((s) => (
                    <div key={s.label} className="rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-4">
                      <p className="text-2xl font-bold tracking-tight text-emerald-600">
                        {s.value}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Quote + Attribution */}
                <blockquote className="border-t border-slate-200/80 pt-6">
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    &ldquo;{FEATURED.quote}&rdquo;
                  </p>
                  <p className="text-xs text-slate-500">
                    {FEATURED.person} · {FEATURED.role}, {FEATURED.company}
                  </p>
                </blockquote>
              </div>

            </div>
          </article>
        </RevealDiv>

        {/* ── Two cards: video testimonial + photo card ── */}
        <div className="grid md:grid-cols-2 gap-4">

          {/* Video testimonial card */}
          <RevealDiv>
            <VideoCard />
          </RevealDiv>

          {/* Photo card */}
          <RevealDiv delay={80}>
            <article className="h-full rounded-3xl border border-sky-100/80 bg-white/75 backdrop-blur-xl overflow-hidden flex flex-col shadow-[0_20px_45px_rgba(14,116,144,0.12)]">

              {/* Photo */}
              <div className="relative aspect-3/2">
                <Image
                  src={PHOTO_STORY.image}
                  alt={PHOTO_STORY.person}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Content */}
              <div className="p-7 md:p-8 flex flex-col flex-1">
                <p className="text-xs font-medium tracking-widest uppercase text-slate-500 mb-4">
                  {PHOTO_STORY.company} · {PHOTO_STORY.industry}
                </p>

                <div className="mb-4">
                  <p className="text-3xl font-bold tracking-tight text-emerald-600">
                    {PHOTO_STORY.stat}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">{PHOTO_STORY.statLabel}</p>
                </div>

                <blockquote className="flex-1 mb-5">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    &ldquo;{PHOTO_STORY.quote}&rdquo;
                  </p>
                </blockquote>

                <p className="text-xs text-slate-500 pt-4 border-t border-slate-200/70">
                  {PHOTO_STORY.person} · {PHOTO_STORY.role}
                </p>
              </div>
            </article>
          </RevealDiv>

        </div>

        {/* ── Story 5 — Vouch-style split: text left, photo + bubble right ── */}
        <RevealDiv className="mt-4">
          <article className="rounded-3xl bg-white/75 backdrop-blur-xl border border-sky-100/80 overflow-hidden shadow-[0_24px_60px_rgba(14,116,144,0.12)]">
            <div className="grid lg:grid-cols-2 gap-0">

              {/* Left — text content */}
              <div className="flex flex-col justify-center p-10 md:p-14 lg:p-16">
                <p className="text-xs font-medium tracking-widest uppercase text-slate-500 mb-6">
                  {STORY5.company} · {STORY5.industry}
                </p>
                <h4 className="text-3xl md:text-[38px] font-bold leading-[1.15] tracking-tight text-slate-900 mb-8">
                  {STORY5.headline}
                </h4>
                <a
                  href="mailto:hello@get-ryze.ai?subject=Free%20SEO%20Audit%20Request"
                  className="inline-flex items-center gap-2 self-start bg-slate-900 hover:bg-emerald-600 transition-colors text-white text-sm font-semibold px-5 py-3 rounded-full mb-10 shadow-[0_10px_22px_rgba(15,23,42,0.25)]"
                >
                  See how it works
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <blockquote>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    &ldquo;{STORY5.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/main-logo-sun-2.png" alt="Ryze" className="w-7 h-7 object-contain" />
                    <p className="text-xs text-slate-500">
                      {STORY5.person} · {STORY5.role}, {STORY5.company}
                    </p>
                  </div>
                </blockquote>
              </div>

              {/* Right — photo with chat bubble overlay */}
              <div className="relative flex items-center justify-center p-8 md:p-10 lg:p-12">
                {/* Photo card */}
                <div className="relative w-full rounded-2xl overflow-hidden shadow-xl aspect-4/3">
                  <Image
                    src={STORY5.image}
                    alt={STORY5.person}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Floating chat bubble */}
                <div className="absolute bottom-14 left-4 md:left-6 lg:left-8 max-w-65 bg-white/92 backdrop-blur-xl rounded-2xl rounded-bl-sm px-4 py-3 shadow-[0_14px_32px_rgba(15,23,42,0.2)] border border-white">
                  <p className="text-sm font-medium text-slate-800 leading-snug">
                    {STORY5.bubble}
                  </p>
                </div>
              </div>

            </div>
          </article>
        </RevealDiv>

        {/* ── CTA ── */}
        <RevealDiv className="mt-10 text-center">
          <a
            href="mailto:hello@get-ryze.ai?subject=Free%20SEO%20Audit%20Request"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors"
          >
            See how Ryze works for your site
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </RevealDiv>

      </div>
    </section>
  );
}
