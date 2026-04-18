import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import Features from "@/components/layout/Features";
import Results from "@/components/layout/Results";
import CTA from "@/components/layout/CTA";

export default function Home() {
  return (
    <div className="landing-page landing-5-satoshi">
      <Navbar />
      <main>
        {/* Screen 1: Hero with landscape bg + glassmorphism cards + video mockup */}
        <Hero />
        {/* Screen 2: 3-column features (matches AI Marketer's "Autonomous PPC / SEO / Website" section) */}
        <Features />
        {/* Screen 3: FAQ (matches production FAQ section exactly) */}
        <Results />
        {/* Screen 4: CTA + live stats + footer */}
        <CTA />
      </main>
    </div>
  );
}
