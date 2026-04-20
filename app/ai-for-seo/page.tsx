import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import SEOHero from "@/components/seo/SEOHero";
import SEOCapabilities from "@/components/seo/SEOCapabilities";
import SEOProof from "@/components/seo/SEOProof";
import SEOCTA from "@/components/seo/SEOCTA";

export const metadata: Metadata = {
  metadataBase: new URL("https://get-ryze.ai"),
  title: "AI for SEO — Ryze AI",
  description:
    "Autonomous AI agent that runs your SEO — technical audits, content optimization, rank tracking, and site speed. All on autopilot.",
  keywords: [
    "AI SEO agent",
    "SEO automation",
    "technical SEO audit",
    "content optimization",
    "rank tracking",
    "core web vitals",
  ],
  alternates: {
    canonical: "/ai-for-seo",
  },
  openGraph: {
    type: "website",
    url: "https://get-ryze.ai/ai-for-seo",
    title: "AI for SEO — Ryze AI",
    description:
      "Autonomous AI agent for technical audits, content optimization, rank tracking, and site speed on autopilot.",
    siteName: "Ryze AI",
    images: [
      {
        url: "/landscape-for-landing-3.png",
        width: 1200,
        height: 630,
        alt: "Ryze AI for SEO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for SEO — Ryze AI",
    description:
      "Technical audits, content optimization, rank tracking, and site speed on autopilot.",
    images: ["/landscape-for-landing-3.png"],
  },
};

const seoServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Ryze AI for SEO",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Autonomous AI SEO agent for technical audits, content optimization, rank tracking, and site speed improvements.",
  url: "https://get-ryze.ai/ai-for-seo",
  brand: {
    "@type": "Brand",
    name: "Ryze AI",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function AIForSEO() {
  return (
    <div className="landing-page landing-5-satoshi">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoServiceJsonLd) }}
      />
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
