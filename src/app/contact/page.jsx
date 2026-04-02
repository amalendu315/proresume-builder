"use client";
import React from "react";
import {
  Mail,
  Send,
  Code2,
  Globe,
  Sparkles
} from "lucide-react";
import Header from "@/components/shared/header";

const ContactPage = () => {
  return (
    <>
      <Header />
      <div className="relative py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto animate-in fade-in duration-700">
        {/* Container Background */}
        <div className="bg-white rounded-[2rem] shadow-2xl shadow-zinc-200/50 border border-zinc-200 overflow-hidden relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Contact Info (Left Side with Image Background) */}
            <div className="relative lg:col-span-2 p-10 md:p-16 text-zinc-50 flex flex-col justify-between overflow-hidden">
              {/* Stunning Image Background */}
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Developer workspace"
                  className="w-full h-full object-cover scale-105"
                />
                {/* Dark Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-zinc-900/85 backdrop-blur-[2px]"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-transparent mix-blend-overlay"></div>
              </div>

              {/* Glowing Accent */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl z-0 pointer-events-none"></div>

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-blue-100 mb-8 backdrop-blur-md uppercase tracking-wider">
                    <Sparkles size={14} className="text-blue-400" />
                    Available for new projects
                  </div>

                  <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                    Let's build <br className="hidden md:block" />
                    <span className="text-blue-400">your concept.</span>
                  </h2>
                  <p className="text-zinc-300 mb-12 max-w-md leading-relaxed text-lg">
                    Have a website idea or a complex web application in mind?
                    I'd love to hear how we can grow your digital presence
                    together.
                  </p>
                </div>

                <div className="space-y-8 mt-8">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm flex items-center justify-center shrink-0 group-hover:bg-blue-500 group-hover:border-blue-400 transition-all shadow-lg">
                      <Mail
                        size={20}
                        className="text-blue-100 group-hover:text-white"
                      />
                    </div>
                    <div className="pt-1">
                      <p className="text-xs text-blue-200 uppercase tracking-wider font-semibold mb-1">
                        Direct Email
                      </p>
                      <a
                        href="mailto:amalendupandey56@gmail.com"
                        className="text-lg font-medium hover:text-blue-300 transition-colors"
                      >
                        amalendupandey56@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm flex items-center justify-center shrink-0 group-hover:bg-blue-500 group-hover:border-blue-400 transition-all shadow-lg">
                      <Globe
                        size={20}
                        className="text-blue-100 group-hover:text-white"
                      />
                    </div>
                    <div className="pt-1">
                      <p className="text-xs text-blue-200 uppercase tracking-wider font-semibold mb-1">
                        Availability
                      </p>
                      <p className="text-lg font-medium">Remote / Worldwide</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm flex items-center justify-center shrink-0 group-hover:bg-blue-500 group-hover:border-blue-400 transition-all shadow-lg">
                      <Code2
                        size={20}
                        className="text-blue-100 group-hover:text-white"
                      />
                    </div>
                    <div className="pt-1">
                      <p className="text-xs text-blue-200 uppercase tracking-wider font-semibold mb-1">
                        Core Stack
                      </p>
                      <p className="text-lg font-medium">MERN, .NET, Node</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form (Right Side) */}
            <div className="lg:col-span-3 p-10 md:p-16 bg-zinc-50/80">
              <form
                className="space-y-6 max-w-xl mx-auto"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
                      className="text-sm font-semibold text-zinc-800"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-zinc-200 shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all placeholder:text-zinc-400"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="lastName"
                      className="text-sm font-semibold text-zinc-800"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-zinc-200 shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all placeholder:text-zinc-400"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-zinc-800"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-zinc-200 shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all placeholder:text-zinc-400"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="projectType"
                    className="text-sm font-semibold text-zinc-800"
                  >
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-zinc-200 shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-zinc-700 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%24%2024%22%20fill%3D%22none%22%20stroke%3D%22%2371717a%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:20px_20px] bg-[position:right_1rem_center] bg-no-repeat pr-10"
                  >
                    <option value="fullstack">
                      Full Stack Web App (MERN/.NET)
                    </option>
                    <option value="frontend">
                      Frontend Development (React)
                    </option>
                    <option value="backend">Backend API (.NET/Node)</option>
                    <option value="consultation">Project Consultation</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-zinc-800"
                  >
                    Tell me about your idea
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-zinc-200 shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all placeholder:text-zinc-400 resize-none"
                    placeholder="What are you looking to build? Who is it for?..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20 transition-all active:scale-[0.98]"
                >
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;