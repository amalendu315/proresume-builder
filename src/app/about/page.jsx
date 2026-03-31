
import React from "react";
import {
  ArrowRight,
  Code2,
  Terminal,
} from "lucide-react";
import Header from "@/components/shared/header";


 const AboutPage = () => {
  return (
    <>
      <Header />
      <div className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-sm font-medium text-blue-800">
              <Terminal size={14} className="text-blue-500" />
              <span>Full Stack Developer</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-zinc-900 leading-[1.1]">
              You have the idea. <br />I build the{" "}
              <span className="text-blue-600">reality.</span>
            </h1>

            <p className="text-lg text-zinc-600 leading-relaxed max-w-lg">
              I am an independent Website Developer specializing in the{" "}
              <strong>MERN stack</strong> and <strong>.NET</strong>. My approach
              is simple: I listen deeply to your unique concepts and transform
              them into robust, scalable web applications.
            </p>

            <p className="text-lg text-zinc-600 leading-relaxed max-w-lg">
              I believe in mutual growth. By delivering high-quality technical
              solutions that help your business thrive, we build a foundation
              for shared success.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-full font-medium hover:bg-zinc-800 transition-all hover:gap-3"
              >
                Let's Discuss Your Project <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-zinc-100 overflow-hidden relative shadow-2xl border border-zinc-200/50">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Developer coding on a laptop"
                className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-500 hover:scale-105 transform"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent mix-blend-multiply rounded-3xl" />
            </div>

            {/* Floating badge */}
            <div
              className="absolute top-8 -left-8 bg-white p-5 rounded-2xl shadow-xl border border-zinc-100 max-w-[220px] animate-bounce"
              style={{ animationDuration: "4s" }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Code2 size={16} />
                </div>
                <p className="text-sm font-bold text-zinc-900">MERN & .NET</p>
              </div>
              <p className="text-xs text-zinc-500">
                End-to-end web application expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
