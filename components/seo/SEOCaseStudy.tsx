"use client";

import Image from "next/image";
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

const STORIES = [
  {
    company: "Vista Clinics",
    industry: "Healthcare",
    stat: "+121%",
    statLabel: "non-brand clicks",
    quote:
      "Local rankings used to take months. Ryze automated the schema work and we saw results in the first month.",
    person: "Priya Nair",
    role: "Digital Director",
    image: "/images/case-studies/priya-nair.jpg",
  },
  {
    company: "ForgeStack",
    industry: "SaaS",
    stat: "+89%",
    statLabel: "trial signups from SEO",
    quote:
      "Our docs had a massive internal linking gap. Ryze mapped and fixed it — the trial pipeline from SEO doubled.",
    person: "Sophie Adler",
    role: "VP Marketing",
    image: "/images/case-studies/sophie-adler.jpg",
  },
];

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

        {/* ── Two compact cards with photos ── */}
        <div className="grid md:grid-cols-2 gap-4">
          {STORIES.map((s, i) => (
            <RevealDiv key={s.company} delay={i * 80}>
              <article className="h-full rounded-2xl border border-zinc-200 bg-white overflow-hidden flex flex-col">

                {/* Photo */}
                <div className="relative aspect-[3/2]">
                  <Image
                    src={s.image}
                    alt={s.person}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div className="p-7 md:p-8 flex flex-col flex-1">
                  <p className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-4">
                    {s.company} · {s.industry}
                  </p>

                  <div className="mb-4">
                    <p className="text-3xl font-bold tracking-tight text-emerald-600">
                      {s.stat}
                    </p>
                    <p className="text-xs text-zinc-400 mt-0.5">{s.statLabel}</p>
                  </div>

                  <blockquote className="flex-1 mb-5">
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      &ldquo;{s.quote}&rdquo;
                    </p>
                  </blockquote>

                  <p className="text-xs text-zinc-400 pt-4 border-t border-zinc-100">
                    {s.person} · {s.role}
                  </p>
                </div>
              </article>
            </RevealDiv>
          ))}
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
