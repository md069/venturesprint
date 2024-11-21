import "@v1/ui/globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Provider as AnalyticsProvider } from "@v1/analytics/client";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import localFont from "next/font/local";

const DepartureMono = localFont({
  src: "../fonts/DepartureMono-Regular.woff2",
  variable: "--font-departure-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.venturesprint.io/"),
  title: "VentureSprint - From Idea to Startup, fast",
  description: "Confidently build startups with our AI-driven validation framework. Validate your ideas in just 14 days with VentureSprint.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
