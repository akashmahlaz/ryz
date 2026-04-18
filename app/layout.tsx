import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-satoshi",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ryze AI — AI Agent That Does SEO For You",
  description:
    "Ryze AI autonomously handles your entire SEO strategy — technical audits, content optimization, keyword tracking, and more. Let AI run your SEO.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col ryze-grid">{children}</body>
    </html>
  );
}
