import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import SEOHero from "@/components/seo/SEOHero";
import SEOCapabilities from "@/components/seo/SEOCapabilities";
import SEOProof from "@/components/seo/SEOProof";
import SEOCTA from "@/components/seo/SEOCTA";

export const metadata: Metadata = {
  title: "AI for SEO — Ryze AI",
  description:
    "Autonomous AI agent that runs your SEO — technical audits, content optimization, rank tracking, and site speed. All on autopilot.",
};

export default function AIForSEO() {
  return (
    <div className="landing-page landing-5-satoshi">
      <Navbar />
      <main>
        <SEOHero />
        <SEOCapabilities />
        <SEOProof />
        <SEOCTA />
      </main>
    </div>
  );
}
