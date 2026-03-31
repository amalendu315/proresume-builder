"use client";

import React from "react";
import {
  ArrowRight,
  FileText,
  Zap,
  ShieldCheck,
  LayoutTemplate,
  CheckCircle2,
} from "lucide-react";
 import Header from '@/components/shared/header'; // Uncomment for your real app

// --------------------------------

export default function LandingPage() {
  return (
    <>
      <Header />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 overflow-hidden">
          {/* Background Decorations */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

          <div className="max-w-5xl mx-auto text-center relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 shadow-sm text-sm font-semibold text-zinc-700 mb-8 hover:border-blue-200 transition-colors">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              100% Free & Privacy-First
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 mb-8 leading-[1.1]">
              Craft your perfect resume <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                in minutes, not hours.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Stop fighting with formatting. Our modern builder provides
              ATS-friendly templates, real-time previews, and flawless PDF
              exports so you can focus on landing the interview.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/builder"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20 transition-all active:scale-[0.98]"
              >
                Create My Resume <ArrowRight size={20} />
              </a>
              <a
                href="/templates"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-zinc-900 border border-zinc-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-zinc-50 hover:border-zinc-300 transition-all active:scale-[0.98] shadow-sm"
              >
                <LayoutTemplate size={20} className="text-zinc-500" />
                View Templates
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center gap-6 text-sm font-medium text-zinc-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500" /> No Sign-up
                Required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500" /> ATS
                Optimized
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="py-24 bg-white border-t border-zinc-100 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4 tracking-tight">
                Everything you need to stand out.
              </h2>
              <p className="text-zinc-500 text-lg">
                Designed by developers for professionals. We stripped away the
                bloat to give you exactly what works.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-zinc-50 border border-zinc-100 rounded-3xl p-8 hover:shadow-lg hover:border-blue-100 transition-all duration-300">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-zinc-100 flex items-center justify-center mb-6 text-blue-600">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">
                  Real-Time Preview
                </h3>
                <p className="text-zinc-600 leading-relaxed">
                  See your changes instantly as you type. Our split-screen
                  editor ensures you never have to guess how your final PDF will
                  look.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-zinc-50 border border-zinc-100 rounded-3xl p-8 hover:shadow-lg hover:border-blue-100 transition-all duration-300">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-zinc-100 flex items-center justify-center mb-6 text-blue-600">
                  <FileText size={24} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">
                  ATS-Friendly Designs
                </h3>
                <p className="text-zinc-600 leading-relaxed">
                  Our templates are rigorously tested against modern Applicant
                  Tracking Systems to ensure your resume actually reaches a
                  human.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-zinc-50 border border-zinc-100 rounded-3xl p-8 hover:shadow-lg hover:border-blue-100 transition-all duration-300">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-zinc-100 flex items-center justify-center mb-6 text-blue-600">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">
                  Local & Private
                </h3>
                <p className="text-zinc-600 leading-relaxed">
                  Your data belongs to you. Information stays in your browser
                  and is never stored on our servers. Pure privacy from start to
                  finish.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-5xl mx-auto bg-zinc-900 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-transparent pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Ready to boost your career?
              </h2>
              <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
                Join thousands of professionals who have successfully landed
                their dream jobs using our completely free builder.
              </p>
              <a
                href="/builder"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-500 hover:scale-105 transition-all shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]"
              >
                Get Started for Free <ArrowRight size={24} />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
