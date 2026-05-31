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
  title: "Poke Labs — AI Lab in Toronto",
  description:
    "Poke Labs is a Toronto-based AI lab building autonomous developer tools. We create open-source AI agents that maintain your code, review decisions, and ship software — while you sleep.",
  keywords: [
    "Poke Labs",
    "AI lab",
    "Toronto",
    "open source",
    "AI agent",
    "developer tools",
    "AI Council",
    "autonomous coding",
    "DevOps automation",
    "Alexander Wondwossen",
    "TheAlxLabs",
  ],
  authors: [{ name: "Poke Labs" }],
  creator: "Poke Labs",
  publisher: "Poke Labs",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://pokelabs.org",
    siteName: "Poke Labs",
    title: "Poke Labs — AI Lab in Toronto",
    description:
      "A Toronto-based AI lab building autonomous developer tools. Open-source AI agents that maintain your code, review decisions, and ship software.",
    images: [
      {
        url: "https://pokelabs.org/og.png",
        width: 1200,
        height: 630,
        alt: "Poke Labs — AI Lab in Toronto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Poke Labs — AI Lab in Toronto",
    description:
      "A Toronto-based AI lab building autonomous developer tools. Open-source AI agents that maintain your code while you sleep.",
    images: ["https://pokelabs.org/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://pokelabs.org",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Poke Labs",
  url: "https://pokelabs.org",
  logo: "https://pokelabs.org/icon.svg",
  description:
    "Poke Labs is a Toronto-based AI lab building autonomous developer tools. Open-source AI agents that maintain your code while you sleep.",
  foundingDate: "2026",
  founder: {
    "@type": "Person",
    name: "Alexander Wondwossen",
    url: "https://thealxlabs.ca",
  },
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toronto",
      addressRegion: "Ontario",
      addressCountry: "CA",
    },
  },
  sameAs: [
    "https://github.com/pokelabshq",
    "https://thealxlabs.ca",
    "https://pokelabs.org",
  ],
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
