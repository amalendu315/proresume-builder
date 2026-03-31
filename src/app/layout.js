import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

// 1. DYNAMIC METADATA
// This tells Google and social media exactly what your site is about
export const metadata = {
  metadataBase: new URL("https://proresume-builder.vercel.app"), // TODO: Replace with your actual Vercel domain
  title: {
    default: "ProResume Builder | Free ATS-Friendly Resume Maker",
    template: "%s | ProResume Builder",
  },
  description:
    "Create professional, ATS-optimized, and multi-page resumes for free. Choose from premium templates, upload your photo locally for privacy, and instantly download as a PDF.",
  keywords: [
    "resume builder",
    "free resume maker",
    "ATS resume",
    "CV builder",
    "multi-page resume",
    "tech resume",
    "professional CV",
  ],
  authors: [
    { name: "Amalendu Pandey", url: "https://amalendu-pandey.vercel.app" },
  ],
  creator: "Amalendu Pandey",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://proresume-builder.vercel.app",
    title: "ProResume Builder | Free ATS-Friendly Resume Maker",
    description:
      "Create professional, ATS-optimized resumes for free. 100% private and secure.",
    siteName: "ProResume Builder",
    images: [
      {
        url: "/image.png", // TODO: Add a 1200x630 screenshot of your app to your /public folder
        width: 1200,
        height: 630,
        alt: "ProResume Builder Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ProResume Builder | Free ATS-Friendly Resume Maker",
    description:
      "Build your perfect resume in minutes. No premium paywalls, totally free.",
    images: ["/image.png"], // Uses the same image as OpenGraph
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-zinc-100">
        {/* Your main app content */}
        {children}

        {/* Vercel Analytics tracking injected at the root level */}
        <Analytics />
      </body>
    </html>
  );
}
