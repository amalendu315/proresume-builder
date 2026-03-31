import React from "react";
import { LayoutTemplate, Menu } from "lucide-react";

const Github = ({ size = 24, className = "" }) => (
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

export default function Header({ rightControls }) {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-zinc-200 flex items-center justify-between px-6 z-40 print:hidden shadow-sm">
      <div className="flex items-center gap-8">
        {/* Brand Logo & Name */}
        <a href="/" className="flex items-center gap-2 cursor-pointer">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="bg-zinc-900 text-white p-1.5 rounded-md shadow-sm">
              <LayoutTemplate size={20} strokeWidth={2.5} />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-zinc-900 hidden sm:block">
              ProResume
            </h1>
            <span className="ml-1 text-[10px] font-bold tracking-wider uppercase bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
              Free
            </span>
          </div>
        </a>

        {/* Main Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-zinc-500">
          <a href="/templates" className="hover:text-zinc-900 transition-colors">
            Templates
          </a>
          <a href="/about" className="hover:text-zinc-900 transition-colors">
            About
          </a>
          <a href="/vision" className="hover:text-zinc-900 transition-colors">
            Vision
          </a>
          <a href="/contact" className="hover:text-zinc-900 transition-colors">
            Contact
          </a>
        </nav>
      </div>

      {/* Right Side Controls (Dynamic) */}
      <div className="flex items-center gap-4">
        {/* If you pass builder controls (like the download button) via props, they render here.
          Otherwise, it defaults to a GitHub link for standard pages.
        */}
        {rightControls ? (
          rightControls
        ) : (
          <a
            href="https://github.com/amalendu315"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 bg-zinc-100 hover:bg-zinc-200 px-3 py-1.5 rounded-md transition-colors"
          >
            <Github size={16} />
            <span className="hidden sm:inline">Star on GitHub</span>
          </a>
        )}

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-zinc-600 hover:text-zinc-900">
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
}
