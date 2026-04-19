import MCPSection from "@/components/layout/MCPSection";
import WhatYouCanDo from "@/components/layout/WhatYouCanDo";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import PressLogos from "@/components/layout/PressLogos";
import ClientLogos from "@/components/layout/ClientLogos";
import ShowcaseGrid from "@/components/layout/ShowcaseGrid";
import AuditCTA from "@/components/layout/AuditCTA";
import Features from "@/components/layout/Features";
import WhyRyze from "@/components/layout/WhyRyze";
import Results from "@/components/layout/Results";
import CTA from "@/components/layout/CTA";

export default function Home() {
  return (
    <div className="landing-page landing-5-satoshi">
      <Navbar />
      <main>
        {/* Screen 1: Hero with landscape bg + glassmorphism cards + video mockup */}
        <Hero />
        {/* MCP — Connect Claude to Google & Meta Ads */}
        <MCPSection />
        {/* What you can do with Claude Connector */}
        <WhatYouCanDo />
        {/* Press logos bar */}
        <PressLogos />
        {/* Client logos trust bar */}
        <ClientLogos />
        {/* Showcase grid — see what Ryze does for SEO */}
        <ShowcaseGrid />
        {/* Mid-page CTA — get a free SEO audit */}
        <AuditCTA />
        {/* Screen 2: 3-column features (matches AI Marketer's "Autonomous PPC / SEO / Website" section) */}
        <Features />
        {/* Screen 3: Why Ryze outperforms — 4 feature cards */}
        <WhyRyze />
        {/* Screen 4: FAQ */}
        <Results />
        {/* Screen 5: CTA + live stats + footer */}
        <CTA />
      </main>
    </div>
  );
}
