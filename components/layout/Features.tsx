"use client";
import React from "react";

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
    title: "Technical SEO Audits",
    desc: "Continuously monitors your site for crawl errors, broken links, indexing issues, and sitemap problems — fixes them automatically.",
    color: "from-green-500 to-green-600",
    bg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: "AI Content Optimization",
    desc: "Rewrites meta titles, descriptions, headers, and body copy to match search intent and maximize CTR and ranking potential.",
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    title: "Keyword Rank Tracking",
    desc: "Monitors your keyword positions across Google in real time. Alerts you the moment you're outranked by a competitor.",
    color: "from-purple-500 to-purple-600",
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: "Schema Markup Automation",
    desc: "Automatically adds and validates JSON-LD structured data — FAQ, Product, Organization, Breadcrumb — on every page.",
    color: "from-amber-500 to-amber-600",
    bg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: "Core Web Vitals",
    desc: "Diagnoses LCP, FID, and CLS issues and applies fixes — image compression, lazy loading, render-blocking scripts.",
    color: "from-red-500 to-red-600",
    bg: "bg-red-50",
    iconColor: "text-red-600",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
    ),
    title: "Internal Linking",
    desc: "Maps your content graph and auto-inserts contextual internal links, strengthening topical authority and page equity.",
    color: "from-teal-500 to-teal-600",
    bg: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: "Competitor Analysis",
    desc: "Reverse-engineers what your top 5 competitors rank for, identifies content gaps, and recommends keywords to go after.",
    color: "from-pink-500 to-pink-600",
    bg: "bg-pink-50",
    iconColor: "text-pink-600",
  },
];

export default function Features() {
  return (
    <section className="bg-[#F5FAF0] py-20 md:py-28" id="features">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.15em] text-green-600 bg-green-100 rounded-full px-4 py-1.5 mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black/90 tracking-tight leading-tight">
            Every SEO task.{" "}
            <span className="text-gradient-ryze">Fully automated.</span>
          </h2>
          <p className="mt-4 text-lg text-black/60 leading-relaxed">
            Ryze acts as your dedicated SEO specialist — running audits around
            the clock, optimizing pages in real time, and surfacing only what
            matters.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-6 ring-1 ring-black/5 hover:ring-green-300/60 card-hover flex flex-col gap-4"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center ${feature.iconColor} group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="font-bold text-[15px] text-black/90 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-sm text-black/50 mt-2 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
