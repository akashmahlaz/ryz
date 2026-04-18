"use client";
import React, { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative overflow-hidden py-20 md:py-28" id="cta">
      {/* Pixel-art background */}
      <div
        className="absolute inset-0 w-full h-full pixelated"
        style={{
          background: "url(https://media.base44.com/images/public/69e38b1d5a737c4dacc714f2/d20eb468a_generated_d6f43358.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Main CTA card */}
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-semibold text-white/90">Limited early access</span>
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.06] drop-shadow-[0_4px_16px_rgba(0,0,0,0.4)]">
            Let AI run your SEO
          </h2>
          <p className="mt-5 text-lg md:text-xl text-white/80 max-w-lg mx-auto leading-relaxed">
            Join the waitlist and be first to experience autonomous SEO — technical audits,
            content optimization, rank tracking, and competitor analysis, all done for you.
          </p>

          {/* Email pill form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 email-pill max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="placeholder-white/40"
              style={{ color: "white" }}
            />
            <button type="submit" className="btn-primary shrink-0">
              Get started
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </form>

          <p className="mt-4 text-sm text-white/50">
            Free for the first 100 signups. No credit card required.
          </p>
        </div>

        {/* Social proof badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          {[
            { icon: "✓", text: "No credit card" },
            { icon: "✓", text: "Cancel anytime" },
            { icon: "✓", text: "Setup in 2 mins" },
          ].map((b) => (
            <div key={b.text} className="flex items-center gap-2 text-white/70 text-sm font-medium bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5">
              <span className="text-green-400 font-bold">{b.icon}</span>
              {b.text}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-black/30 backdrop-blur-sm border-t border-white/10 mt-0">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo + tagline */}
            <div className="flex items-center gap-2.5">
              <img
                src="https://media.base44.com/images/public/69e38b1d5a737c4dacc714f2/7fb2485a9_generated_b004d738.png"
                alt="Ryze"
                className="w-7 h-7 pixelated"
              />
              <span className="text-white font-bold text-lg">Ryze</span>
              <span className="text-white/40 text-sm ml-2">— AI for SEO</span>
            </div>

            {/* Links */}
            <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
              <a href="#" className="hover:text-white transition-colors">About Us</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="mailto:hello@ryze.ai" className="hover:text-white transition-colors">hello@ryze.ai</a>
            </nav>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-6 pt-6 border-t border-white/10">
            <p className="text-xs text-white/30">
              © 2026 Ryze AI, Inc. All rights reserved.
            </p>
            <p className="text-xs text-white/20">
              Last updated: April 2026
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
