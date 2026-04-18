import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ryze AI — Autonomous SEO Agent",
  description:
    "AI agent that does SEO for you — technical audits, content optimization, keyword tracking, and rank monitoring. All on autopilot.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
