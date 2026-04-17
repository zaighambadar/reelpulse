import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReelPulse | Instagram Reels Trend Tracker",
  description: "Track the hottest Instagram Reels trends, trending audio, and viral formats in real-time. Stay ahead of the algorithm in 2026.",
  keywords: ["Instagram Reels", "trending", "social media", "viral content", "trends 2026"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
