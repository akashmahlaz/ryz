"use client";
import React from "react";

const clients = [
  { src: "/client-State_Farm_logo.png", alt: "State Farm" },
  { src: "/client-Luca-Faloni.png", alt: "Luca Faloni" },
  { src: "/client-Pepperfry_logo.png", alt: "Pepperfry" },
  { src: "/client-jenni-ai.svg", alt: "Jenni AI" },
  { src: "/client-caleyx-logo.png", alt: "Caleyx" },
  { src: "/client-superpower-2.png", alt: "Superpower" },
  { src: "/client-tetra-logo.png", alt: "Tetra" },
  { src: "/client-mos_logo1.png", alt: "MOS" },
  { src: "/client-villlyx_logo.png", alt: "Villlyx" },
  { src: "/client-directly_logo.png", alt: "Directly" },
];

const smallClients = [
  { src: "/client-hg_logo.png", alt: "HG" },
  { src: "/client-human-logo-2.png", alt: "Human" },
  { src: "/client-motif_digital.png", alt: "Motif Digital" },
  { src: "/client-pupil_logo1.png", alt: "Pupil" },
  { src: "/client-ritma_logo1.png", alt: "Ritma" },
  { src: "/client-slim-chickens.webp", alt: "Slim Chickens" },
];

export default function ClientLogos() {
  return (
    <section className="bg-[#FEFEF5] border-y border-zinc-100 overflow-hidden py-14 md:py-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-10">
        {/* Huge companies */}
        <div>
          <p className="text-[11px] text-slate-400 uppercase tracking-widest text-center mb-6">
            Trusted by huge companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {clients.map((client) => (
              <div
                key={client.alt}
                className="h-8 md:h-10 w-auto relative flex items-center"
              >
                <img
                  src={client.src}
                  alt={client.alt}
                  className="h-full w-auto object-contain opacity-60 hover:opacity-90 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Small businesses */}
        <div>
          <p className="text-[11px] text-slate-400 uppercase tracking-widest text-center mb-6">
            Trusted by small businesses
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {smallClients.map((client) => (
              <div
                key={client.alt}
                className="h-6 md:h-8 w-auto relative flex items-center"
              >
                <img
                  src={client.src}
                  alt={client.alt}
                  className="h-full w-auto object-contain opacity-50 hover:opacity-80 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
