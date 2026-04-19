import type { Metadata } from "next";
import Script from "next/script";
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
  title: "TDK Company | AI-Powered Software Development",
  description:
    "TDK Company designs and ships AI-native products — intelligent chatbots, AI tutoring platforms, and full-stack SaaS applications powered by the latest in generative AI and machine learning.",
  keywords: [
    "AI development",
    "AI chatbot",
    "AI tutor",
    "generative AI",
    "LLM integration",
    "custom software",
    "SaaS development",
    "machine learning",
    "AI-powered applications",
    "software development",
  ],
  authors: [{ name: "TDK Company" }],
  creator: "TDK Company",
  publisher: "TDK Company",
  alternates: {
    canonical: "https://tdk-company.com",
  },
  openGraph: {
    title: "TDK Company | AI-Powered Software Development",
    description:
      "We design and ship AI-native products — intelligent chatbots, tutoring platforms, and full-stack SaaS applications.",
    url: "https://tdk-company.com",
    siteName: "TDK Company",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TDK Company | AI-Powered Software Development",
    description:
      "TDK Company designs and ships AI-native products — intelligent chatbots, AI tutoring platforms, and full-stack SaaS applications.",
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4B2KZYJDDX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4B2KZYJDDX');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
