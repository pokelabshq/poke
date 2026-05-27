import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Poke Labs — Your AI Employee That Never Sleeps",
  description: "Poke monitors your repos, fixes bugs, updates dependencies, reviews PRs, and ships code — autonomously. So you can actually close your laptop.",
  openGraph: {
    title: "Poke Labs — Your AI Employee That Never Sleeps",
    description: "Poke monitors your repos, fixes bugs, updates dependencies, reviews PRs, and ships code — autonomously.",
    url: "https://pokelabs.org",
    siteName: "Poke Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Poke Labs — Your AI Employee That Never Sleeps",
    description: "Poke monitors your repos, fixes bugs, updates dependencies, reviews PRs, and ships code — autonomously.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#09090b] grain">{children}</body>
    </html>
  );
}
