import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import Features from "@/components/layout/Features";
import Results from "@/components/layout/Results";
import CTA from "@/components/layout/CTA";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Screen 1: Hero */}
        <Hero />
        {/* Screen 2: Features / How it works */}
        <Features />
        {/* Screen 3: FAQ */}
        <Results />
        {/* Screen 4: CTA + Stats + Footer */}
        <CTA />
      </main>
    </div>
  );
}
