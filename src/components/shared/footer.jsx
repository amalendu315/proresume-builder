import React from "react";
import { LayoutTemplate, Mail, Heart } from "lucide-react";

// --- CUSTOM BRAND ICONS ---
const GithubIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-300 border-t border-zinc-900 font-sans print:hidden relative z-50">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 lg:gap-12 mb-12">
          {/* Brand & Description */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-white">
              <div className="bg-white text-zinc-950 p-1.5 rounded-md">
                <LayoutTemplate size={20} strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold tracking-tight">
                ProResume Builder
              </span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              Bridging the gap in the market by providing premium-grade,
              ATS-friendly, and highly extensible resumes for everyone—at
              absolutely zero cost.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Product
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/templates"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Templates
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/opensource"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Open Source
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/amalendu315"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-zinc-900 rounded-full hover:bg-white hover:text-zinc-950 transition-all duration-300"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-zinc-900 rounded-full hover:bg-white hover:text-zinc-950 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-zinc-900 rounded-full hover:bg-white hover:text-zinc-950 transition-all duration-300"
                aria-label="Twitter"
              >
                <TwitterIcon size={18} />
              </a>
              <a
                href="mailto:amalendu.pandey@example.com"
                className="p-2 bg-zinc-900 rounded-full hover:bg-white hover:text-zinc-950 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <p>© {currentYear} Amalendu Pandey. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <Heart size={14} className="text-red-500 fill-red-500" />{" "}
            using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
