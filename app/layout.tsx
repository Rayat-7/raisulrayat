import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Raisul Rayat | Frontend Developer",
  description:
    "Raisul Rayat - Frontend Developer specialized in React and Next.js. Building scalable and user-centric web applications.",
  openGraph: {
    title: "Raisul Rayat | Frontend Developer",
    description:
      "Frontend Developer specialized in React and Next.js. Building scalable and user-centric web applications.",
    url: "https://raisulrayat.vercel.app",
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
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

import { SocialSidebar } from "@/components/ui/social-sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      </head>
      <body className="antialiased">
        {children}
        <SocialSidebar />
      </body>
    </html>
  );
}
