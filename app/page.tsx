import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import Features from "@/components/layout/Features";
import Results from "@/components/layout/Results";
import CTA from "@/components/layout/CTA";

export default function Home() {
  return (
    <div className="bg-[#F5FAF0] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Results />
        <CTA />
      </main>
    </div>
  );
}
