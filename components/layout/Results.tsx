"use client";
import React from "react";

const stats = [
  {
    category: "SEO",
    color: "text-green-600",
    items: [
      { value: "23.5M", label: "Organic visits driven", sub: "across 2,000+ clients" },
      { value: "48k+", label: "Keywords on page 1", sub: "tracked continuously" },
    ],
  },
  {
    category: "Content",
    color: "text-blue-600",
    items: [
      { value: "12k+", label: "AI articles published", sub: "0% plagiarism, 100% original" },
      { value: "14 days", label: "Avg. time to rank", sub: "vs 6-month industry average" },
    ],
  },
  {
    category: "Technical",
    color: "text-purple-600",
    items: [
      { value: "250k+", label: "Issues fixed automatically", sub: "zero manual work" },
      { value: "94%", label: "Core Web Vitals pass rate", sub: "after Ryze optimization" },
    ],
  },
];

const testimonials = [
  {
    quote:
      "Ryze found and fixed 180 crawl errors we didn't know existed. Our organic traffic doubled in 90 days.",
    name: "Sarah Chen",
    role: "Head of Growth, TechFlow",
    avatar: "SC",
    bg: "bg-green-100",
    textColor: "text-green-700",
  },
  {
    quote:
      "We went from page 3 to page 1 for 400 keywords in 6 weeks. The competitor analysis alone is worth it.",
    name: "Marcus Johnson",
    role: "SEO Director, Nomad Studios",
    avatar: "MJ",
    bg: "bg-blue-100",
    textColor: "text-blue-700",
  },
  {
    quote:
      "Core Web Vitals score jumped from 52 to 97. Ryze fixed image sizing and lazy loading automatically.",
    name: "Priya Sharma",
    role: "CTO, Buildfast",
    avatar: "PS",
    bg: "bg-purple-100",
    textColor: "text-purple-700",
  },
];

const logos = [
  "TechCrunch",
  "Forbes",
  "Product Hunt",
  "G2",
  "Capterra",
];

export default function Results() {
  return (
    <section className="bg-white py-20 md:py-28 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/40 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.15em] text-green-600 bg-green-50 rounded-full px-4 py-1.5 mb-4 border border-green-200">
            Live Results
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black/90 tracking-tight leading-tight">
            Real impact across{" "}
            <span className="text-gradient-ryze">2,000+ clients</span>
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((group) => (
            <div key={group.category} className="bg-[#F5FAF0] rounded-2xl p-6 md:p-8 ring-1 ring-black/5">
              <p className={`text-xs font-bold uppercase tracking-widest ${group.color} mb-5`}>
                {group.category}
              </p>
              <div className="space-y-6">
                {group.items.map((item) => (
                  <div key={item.label} className="animate-count">
                    <p className="text-4xl md:text-5xl font-black text-black/90 leading-none">
                      {item.value}
                    </p>
                    <p className="text-sm font-semibold text-black/80 mt-1">{item.label}</p>
                    <p className="text-xs text-black/40 mt-0.5">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#F5FAF0] rounded-2xl p-6 ring-1 ring-black/5 card-hover flex flex-col gap-4"
            >
              {/* Quote marks */}
              <div className="text-4xl text-green-300 font-serif leading-none">"</div>
              <p className="text-sm text-black/70 leading-relaxed -mt-3">{t.quote}</p>
              <div className="flex items-center gap-3 mt-auto">
                <div className={`w-10 h-10 rounded-full ${t.bg} flex items-center justify-center`}>
                  <span className={`text-sm font-bold ${t.textColor}`}>{t.avatar}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-black/80">{t.name}</p>
                  <p className="text-xs text-black/40">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Press / trust logos */}
        <div className="mt-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-black/30 mb-6">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {logos.map((logo) => (
              <span
                key={logo}
                className="text-sm font-bold text-black/20 uppercase tracking-widest hover:text-black/40 transition-colors cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
