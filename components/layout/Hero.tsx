import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import Navbar from "./Navbar";
import ChatMock from "./ChatMock";

export default function Hero() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative min-h-190 md:min-h-205 overflow-hidden">
      {/* Pixel background */}
      <img
        src="https://media.base44.com/images/public/69e38b1d5a737c4dacc714f2/d20eb468a_generated_d6f43358.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover pixelated"
      />
      <div className="absolute inset-0 bg-black/10" />

      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-32 md:pt-36 pb-16 grid lg:grid-cols-2 gap-10 items-center">
        <div className="text-white">
          <img
            src="https://media.base44.com/images/public/69e38b1d5a737c4dacc714f2/7fb2485a9_generated_b004d738.png"
            alt=""
            className="w-16 h-16 mb-6 pixelated"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
            Connect your
            <br />
            ad accounts to Claude
            <br />
            in 1 click
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/90 max-w-lg">
            Analyze and manage your ads, and schedule actions — all from Claude
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex flex-col sm:flex-row gap-2 max-w-md bg-white/95 p-1.5 rounded-full shadow-xl"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-transparent px-4 py-2 text-black placeholder-black/40 focus:outline-none text-sm"
            />
            <button className="bg-black text-white rounded-full px-5 py-2.5 text-sm font-semibold flex items-center justify-center gap-1 hover:bg-black/80 transition">
              Get started <ChevronRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-8 flex items-center gap-4">
            {[
              { src: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg", alt: "Google Ads" },
              { src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg", alt: "Meta" },
              { src: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Google_Analytics_2022_logo.svg", alt: "Google Analytics" },
            ].map((i) => (
              <div key={i.alt} className="w-10 h-10 rounded-lg bg-white/15 backdrop-blur flex items-center justify-center ring-1 ring-white/20">
                <img src={i.src} alt={i.alt} className="w-6 h-6 object-contain" />
              </div>
            ))}
          </div>
        </div>

        <div className="lg:pl-8">
          <ChatMock />
        </div>
      </div>
    </section>
  );
}