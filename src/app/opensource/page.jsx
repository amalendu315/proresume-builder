import React from "react";
import {
  Heart,
  GitPullRequest,
  Bug,
  Lightbulb,
  Code2,
} from "lucide-react";
import Header from "@/components/shared/header";

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

const OpenSourcePage = () => {
  return (
    <>
      <Header />
      <div className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto animate-in fade-in duration-700">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-sm font-semibold text-blue-700 mb-6">
            <Heart size={16} className="text-red-500 fill-red-500" />
            <span>Proudly Open Source</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 mb-6">
            Built by developers, <br />
            <span className="text-blue-600">for the community.</span>
          </h1>
          <p className="text-lg text-zinc-600 leading-relaxed mb-10">
            We believe high-quality career tools shouldn't be locked behind
            paywalls. This entire project is open-source, allowing anyone to
            inspect, learn from, and contribute to the code.
          </p>

          <a
            href="https://github.com/amalendu315/proresume-builder"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-zinc-800 transition-all active:scale-[0.98] shadow-lg shadow-zinc-900/20"
          >
            <GithubIcon size={20} />
            View on GitHub
          </a>
        </div>

        {/* Stack & Contribution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Core Tech Stack */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-zinc-200 shadow-sm">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Code2 size={24} />
            </div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">
              Built with Modern Tech
            </h2>
            <p className="text-zinc-600 mb-8 leading-relaxed">
              This project utilizes a modern web stack to ensure fast load
              times, excellent developer experience, and seamless client-side
              interactions.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Next.js",
                "React",
                "Tailwind CSS",
                "Lucide Icons",
                "MERN Stack",
                "Vercel",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-zinc-100 border border-zinc-200 text-zinc-700 px-3 py-1.5 rounded-lg text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* How to Contribute */}
          <div className="bg-zinc-900 p-8 md:p-10 rounded-3xl border border-zinc-800 text-white shadow-xl relative overflow-hidden">
            {/* Decorative background flair */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
              <div className="w-12 h-12 bg-zinc-800 text-blue-400 rounded-xl flex items-center justify-center mb-6">
                <GitPullRequest size={24} />
              </div>
              <h2 className="text-2xl font-bold mb-4">How to Contribute</h2>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                Contributions make the open source community such an amazing
                place to learn, inspire, and create. Any contributions you make
                are greatly appreciated.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-zinc-800/50 p-4 rounded-xl border border-zinc-700/50 hover:bg-zinc-800 transition-colors">
                  <Bug size={20} className="text-red-400 shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm text-zinc-200">
                      Report a Bug
                    </h4>
                    <p className="text-xs text-zinc-400">
                      Open an issue on GitHub if you spot any problems.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-zinc-800/50 p-4 rounded-xl border border-zinc-700/50 hover:bg-zinc-800 transition-colors">
                  <Lightbulb size={20} className="text-yellow-400 shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm text-zinc-200">
                      Request a Feature
                    </h4>
                    <p className="text-xs text-zinc-400">
                      Have an idea for a new template? Let us know!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OpenSourcePage;

