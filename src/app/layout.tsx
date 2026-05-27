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
  title: "Poke — Your code, maintained autonomously.",
  description:
    "Poke is an AI DevOps agent that monitors your repos, fixes bugs, updates dependencies, and ships code while you sleep.",
  openGraph: {
    title: "Poke — Your code, maintained autonomously.",
    description:
      "An autonomous AI DevOps agent that monitors your repos, fixes bugs, updates dependencies, and ships code while you sleep.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
    >
      <body>{children}</body>
    </html>
  );
}
