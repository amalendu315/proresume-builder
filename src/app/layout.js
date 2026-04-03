import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Footer from "@/components/shared/footer";

// 0. VIEWPORT CONFIGURATION (For PWA Theme Color)
export const viewport = {
  themeColor: "#2563eb",
};

// 1. DYNAMIC METADATA
// This tells Google and social media exactly what your site is about
export const metadata = {
  metadataBase: new URL("https://proresume-builder.vercel.app"), 
  manifest: "/manifest.json", // <-- Added this line for PWA support
  title: {
    default: "ProResume Builder | Free ATS-Friendly Resume Maker",
    template: "%s | ProResume Builder",
  },
  description:
    "Create professional, ATS-optimized, and multi-page resumes for free. Choose from premium templates, upload your photo locally for privacy, and instantly download as a PDF.",
  keywords: [
    // Core Resume Keywords
    "resume builder",
    "free resume maker",
    "ATS resume",
    "CV builder",
    "create resume online",
    "resume generator",
    "professional CV",
    "multi-page resume",
    
    // Privacy & Tech Features (Your unique selling points!)
    "AI resume builder",
    "AI auto-fill resume",
    "private resume maker",
    "local-first resume builder",
    "open source resume",
    "JSON resume builder",
    "no sign up resume builder",

    // Role-Specific (Targeting your specific templates)
    "software engineer resume",
    "tech resume",
    "developer resume templates",
    "UI/UX designer resume",
    "data scientist CV",
    "digital marketer resume",

    // Portfolio & Hosting Keywords (For your new feature)
    "free portfolio templates",
    "developer portfolio templates",
    "1-click deploy portfolio",
    "vercel portfolio templates",
    "github portfolio templates",
    "Next.js portfolio templates"
  ],
  authors: [
    { name: "Amalendu Pandey", url: "https://amalendu-pandey.vercel.app" },
  ],
  creator: "Amalendu Pandey",
  verification: {
    google: "ZHwm9eaXHsawn5oOvujVl0LQmA4HqJVG6Mrf5jZuQz4",
  },
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
        url: "/image.png",
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
    images: ["/image.png"], 
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
        <Footer />
        {/* Vercel Analytics tracking injected at the root level */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
