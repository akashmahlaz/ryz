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
  headline: "Vista Clinics: Local SEO on Autopilot",
  description:
    "The healthcare network automated schema markup with Ryze Enterprise and grew non-brand clicks by 121%.",
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
    <article className="h-full rounded-2xl border border-zinc-200 bg-white overflow-hidden flex flex-col">

      {/* Video with overlays */}
      <div className="relative aspect-[3/2] cursor-pointer" onClick={togglePlay}>
        <video
          ref={videoRef}
          src={VIDEO_STORY.video}
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-top"
          onEnded={() => setPlaying(false)}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />

        {/* Play / Pause button — center */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110">
            {playing ? (
              /* Pause icon */
              <svg width="16" height="18" viewBox="0 0 16 18" fill="none" aria-hidden="true">
                <rect x="1" y="1" width="5" height="16" rx="1" fill="#18181b" />
                <rect x="10" y="1" width="5" height="16" rx="1" fill="#18181b" />
              </svg>
            ) : (
              /* Play icon */
              <svg width="18" height="20" viewBox="0 0 18 20" fill="none" aria-hidden="true" className="translate-x-[1px]">
                <path d="M2 1.5v17l14-8.5L2 1.5z" fill="#18181b" />
              </svg>
            )}
          </div>
        </div>

        {/* Ryze Enterprise badge — top right */}
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-wide text-zinc-900 bg-white rounded-full px-3.5 py-2 shadow-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/main-logo-sun-2.png" alt="" className="w-4 h-4 object-contain" />
            Ryze Enterprise
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-7 md:p-8 flex flex-col flex-1">
        <p className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-4">
          {VIDEO_STORY.company} · {VIDEO_STORY.industry}
        </p>

        <div className="mb-4">
          <p className="text-3xl font-bold tracking-tight text-emerald-600">
            {VIDEO_STORY.stat}
          </p>
          <p className="text-xs text-zinc-400 mt-0.5">{VIDEO_STORY.statLabel}</p>
        </div>

        <blockquote className="flex-1 mb-5">
          <p className="text-sm text-zinc-500 leading-relaxed">
            &ldquo;{VIDEO_STORY.quote}&rdquo;
          </p>
        </blockquote>

        <p className="text-xs text-zinc-400 pt-4 border-t border-zinc-100">
          {VIDEO_STORY.person} · {VIDEO_STORY.role}
        </p>
      </div>
    </article>
  );
}

export default function SEOCaseStudy() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">

        {/* ── Header ── */}
        <RevealDiv className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 md:mb-14">
          <div>
            <p className="text-xs uppercase tracking-widest font-medium text-zinc-400 mb-3">
              Customer stories
            </p>
            <h3 className="text-3xl md:text-[40px] leading-tight tracking-tight font-bold text-zinc-900">
              Success stories
            </h3>
          </div>
          <p className="text-sm text-zinc-500 max-w-xs sm:text-right leading-relaxed">
            Learn how teams like yours turned SEO debt into organic growth.
          </p>
        </RevealDiv>

        {/* ── Featured card — photo + content split ── */}
        <RevealDiv className="mb-4">
          <article className="rounded-2xl border border-zinc-200 bg-zinc-50 overflow-hidden">
            <div className="grid lg:grid-cols-[1fr_1.2fr]">

              {/* Photo */}
              <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[440px]">
                <Image
                  src={FEATURED.image}
                  alt={FEATURED.person}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                <p className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-5">
                  {FEATURED.company} · {FEATURED.industry}
                </p>
                <h4 className="text-xl md:text-2xl font-semibold leading-snug tracking-tight text-zinc-900 mb-3">
                  {FEATURED.headline}
                </h4>
                <p className="text-sm text-zinc-500 leading-relaxed mb-8">
                  {FEATURED.description}
                </p>

                {/* Stats */}
                <div className="flex gap-8 mb-8">
                  {FEATURED.stats.map((s) => (
                    <div key={s.label}>
                      <p className="text-2xl font-bold tracking-tight text-emerald-600">
                        {s.value}
                      </p>
                      <p className="text-xs text-zinc-400 mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Quote + Attribution */}
                <blockquote className="border-t border-zinc-200 pt-6">
                  <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                    &ldquo;{FEATURED.quote}&rdquo;
                  </p>
                  <p className="text-xs text-zinc-400">
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
            <article className="h-full rounded-2xl border border-zinc-200 bg-white overflow-hidden flex flex-col">

              {/* Photo */}
              <div className="relative aspect-[3/2]">
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
                <p className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-4">
                  {PHOTO_STORY.company} · {PHOTO_STORY.industry}
                </p>

                <div className="mb-4">
                  <p className="text-3xl font-bold tracking-tight text-emerald-600">
                    {PHOTO_STORY.stat}
                  </p>
                  <p className="text-xs text-zinc-400 mt-0.5">{PHOTO_STORY.statLabel}</p>
                </div>

                <blockquote className="flex-1 mb-5">
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    &ldquo;{PHOTO_STORY.quote}&rdquo;
                  </p>
                </blockquote>

                <p className="text-xs text-zinc-400 pt-4 border-t border-zinc-100">
                  {PHOTO_STORY.person} · {PHOTO_STORY.role}
                </p>
              </div>
            </article>
          </RevealDiv>

        </div>

        {/* ── CTA ── */}
        <RevealDiv className="mt-10 text-center">
          <a
            href="mailto:hello@get-ryze.ai?subject=Free%20SEO%20Audit%20Request"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700 hover:text-emerald-600 transition-colors"
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
