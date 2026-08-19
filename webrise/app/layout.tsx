import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://webrise.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "WebRise — Digital Solutions That Drive Business Growth",
  description:
    "WebRise builds high-converting websites, custom web applications, and AI-powered automations for local businesses and SMEs.",
  keywords: [
    "WebRise",
    "lead generation websites",
    "web applications for local business",
    "AI workflow automation",
    "business automation India",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "WebRise — Digital Solutions That Drive Business Growth",
    description:
      "WebRise builds high-converting websites, custom web applications, and AI-powered automations for local businesses and SMEs.",
    url: siteUrl,
    siteName: "WebRise",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebRise — Digital Solutions That Drive Business Growth",
    description:
      "WebRise builds high-converting websites, custom web applications, and AI-powered automations for local businesses and SMEs.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
