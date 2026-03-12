import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

const baseUrl = "https://raisulrayat.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Raisul Rayat | Frontend Developer",
    template: "%s | Raisul Rayat",
  },
  description:
    "Raisul Rayat - Frontend Developer specialized in React and Next.js. Building scalable and user-centric web applications.",
  keywords: [
    "Raisul Rayat",
    "Raisul",
    "Rayat",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Bangladesh",
    "Portfolio",
    "Software Engineer",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Raisul Rayat | Frontend Developer",
    description:
      "Frontend Developer specialized in React and Next.js. Building scalable and user-centric web applications.",
    url: baseUrl,
    siteName: "Raisul Rayat Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Raisul Rayat Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raisul Rayat | Frontend Developer",
    description:
      "Frontend Developer specialized in React and Next.js. Building scalable and user-centric web applications.",
    images: ["/og-image.png"],
    creator: "@RaisulRayat",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
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

import { SocialSidebar } from "@/components/ui/social-sidebar";
import { SmoothScroll } from "@/components/ui/smooth-scroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Raisul Rayat",
    url: baseUrl,
    jobTitle: "Frontend Developer",
    sameAs: [
      "https://github.com/Rayat-7",
      "https://linkedin.com/in/raisul-rayat-48781a263",
      "https://x.com/RaisulRayat",
    ],
    description: "Frontend Developer specialized in React and Next.js.",
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700;800;900&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="f26d5e9b-4600-46a7-a981-7a61f9e9ef04"
        ></script>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <SmoothScroll>
          {children}
          <SocialSidebar />
        </SmoothScroll>
      </body>
    </html>
  );
}
