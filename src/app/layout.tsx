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
  title: "TDK Company | Premium Software Development",
  description:
    "TDK Company builds scalable, business-focused software solutions. Custom development, website redesign, booking systems, and payment integration.",
  keywords: [
    "software development",
    "custom software",
    "website redesign",
    "booking systems",
    "payment integration",
    "web development",
  ],
  openGraph: {
    title: "TDK Company | Premium Software Development",
    description:
      "We build scalable, business-focused software solutions that drive growth.",
    url: "https://tdk-company.com",
    siteName: "TDK Company",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
