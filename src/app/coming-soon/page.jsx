"use client";

import React from "react";
import {
  Hammer,
  ArrowLeft,
  Clock,
  Rocket,
} from "lucide-react";

import Header from "@/components/shared/header";

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans flex flex-col selection:bg-blue-100 selection:text-blue-900">
      <Header />

      <main className="flex-grow flex items-center justify-center pt-24 pb-12 px-6">
        <div className="max-w-2xl w-full bg-white rounded-3xl border border-zinc-200 shadow-xl p-8 md:p-16 text-center relative overflow-hidden animate-in fade-in zoom-in-95 duration-700">
          {/* Decorative Background Elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-amber-500/10 blur-3xl rounded-full pointer-events-none"></div>

          <div className="relative z-10">
            {/* Animated Icon */}
            <div className="w-24 h-24 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center mb-8 border border-blue-100 shadow-inner relative">
              <Hammer
                size={40}
                className="text-blue-600 animate-[bounce_2s_infinite]"
              />
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-full border border-zinc-100 shadow-sm flex items-center justify-center">
                <Clock size={20} className="text-amber-500" />
              </div>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-amber-700 uppercase tracking-wider mb-6">
              <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
              Under Construction
            </div>

            {/* Text Content */}
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-6 leading-tight">
              We're coding this template <br className="hidden md:block" />{" "}
              right now.
            </h1>

            <p className="text-lg text-zinc-600 leading-relaxed mb-10 max-w-lg mx-auto">
              Quality takes time! We are meticulously hand-crafting these
              developer-grade portfolios to ensure they are fast, fully
              responsive, and easy for you to deploy.
              <br />
              <br />
              <strong className="text-zinc-800">
                Check back in about 2 weeks
              </strong>{" "}
              to see the live preview and clone the repository!
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-900 text-white px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-zinc-800 transition-all active:scale-[0.98] shadow-md"
              >
                <ArrowLeft size={18} /> Back to Portfolios
              </a>
              <a
                href="/builder"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-zinc-700 border border-zinc-200 px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-all active:scale-[0.98] shadow-sm"
              >
                Try the Resume Builder <Rocket size={18} />
              </a>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}
