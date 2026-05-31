import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Poke Labs",
  description:
    "Poke Labs builds autonomous AI tools for software development. We create open-source agents that maintain your code, review decisions, and ship software — while you sleep. Based in Toronto, Canada.",
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
  ],
  authors: [{ name: "Poke Labs" }],
  creator: "Poke Labs",
  publisher: "Poke Labs",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://pokelabs.org",
    siteName: "Poke Labs",
    title: "Poke Labs",
    description:
      "Poke Labs builds autonomous AI tools for software development. Open-source agents that maintain your code while you sleep.",
    images: [
      {
        url: "https://pokelabs.org/og.png",
        width: 1200,
        height: 630,
        alt: "Poke Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Poke Labs",
    description:
      "Poke Labs builds autonomous AI tools for software development. Open-source agents that maintain your code while you sleep.",
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
    "Poke Labs builds autonomous AI tools for software development. Open-source agents that maintain your code while you sleep.",
  foundingDate: "2026",
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
    "https://pokelabs.org",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistMono.variable} antialiased dark`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
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
