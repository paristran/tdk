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
  metadataBase: new URL("https://tdk-company.com"),
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
  authors: [{ name: "TDK Company" }],
  creator: "TDK Company",
  publisher: "TDK Company",
  alternates: {
    canonical: "https://tdk-company.com",
  },
  openGraph: {
    title: "TDK Company | Premium Software Development",
    description:
      "We build scalable, business-focused software solutions that drive growth.",
    url: "https://tdk-company.com",
    siteName: "TDK Company",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TDK Company | Premium Software Development",
    description:
      "TDK Company builds scalable, business-focused software solutions. Custom development, website redesign, booking systems, and payment integration.",
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://tdk-company.com/#organization",
      name: "TDK Company",
      url: "https://tdk-company.com",
      description:
        "TDK Company builds scalable, business-focused software solutions.",
      logo: {
        "@type": "ImageObject",
        url: "https://tdk-company.com/favicon.ico",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://tdk-company.com/#website",
      url: "https://tdk-company.com",
      name: "TDK Company",
      publisher: {
        "@id": "https://tdk-company.com/#organization",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://tdk-company.com/#webpage",
      url: "https://tdk-company.com",
      name: "TDK Company | Premium Software Development",
      isPartOf: {
        "@id": "https://tdk-company.com/#website",
      },
      about: {
        "@id": "https://tdk-company.com/#organization",
      },
      description:
        "TDK Company builds scalable, business-focused software solutions. Custom development, website redesign, booking systems, and payment integration.",
    },
  ],
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
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
