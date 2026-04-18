"use client";
import React from "react";

const pressLogos = [
  { src: "/press-wsj.svg", alt: "Wall Street Journal" },
  { src: "/press-forbes.svg", alt: "Forbes" },
  { src: "/press-axios.svg", alt: "Axios" },
  { src: "/press-business-insider.svg", alt: "Business Insider" },
  { src: "/press-fortune.svg", alt: "Fortune" },
];

export default function PressLogos() {
  return (
    <section className="bg-white border-y border-zinc-200 overflow-hidden py-10 md:py-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <p className="text-[11px] text-slate-400 uppercase tracking-widest text-center mb-8">
          Featured by the world&apos;s most influential media
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {pressLogos.map((logo) => (
            <div key={logo.alt} className="h-6 md:h-8 w-auto relative flex items-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-full w-auto object-contain grayscale opacity-50 hover:opacity-75 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
