import React from "react";
import {
  Shield,
  Database,
  HardDrive,
  Globe2,
  FileOutput,
  RefreshCw,
} from "lucide-react";
import Header from "@/components/shared/header";



const PrivacyPage = () => {
  const policies = [
    {
      icon: Database,
      title: "1. Data Collection & Storage",
      content:
        'DevPortfolio\'s Resume Builder operates on a strictly "Local First" principle. When you enter your personal information, work experience, and educational background into our tool, that data is processed exclusively within your web browser. We do not transmit your resume content to any external databases or servers.',
    },
    {
      icon: HardDrive,
      title: "2. Cookies & Local Storage",
      content:
        "We may use your browser's local storage to save your progress, ensuring you don't lose your work if you accidentally refresh the page. This data remains securely on your device and can be permanently deleted at any time by clearing your browser's site data.",
    },
    {
      icon: Globe2,
      title: "3. Third-Party Services",
      content:
        "Because our tool is open-source and statically hosted, we rely on minimal third-party services. We may use standard, anonymized analytics (such as Vercel Analytics) to understand basic website traffic. These analytics never capture the personal information you enter into the resume forms.",
    },
    {
      icon: FileOutput,
      title: "4. PDF Generation",
      content:
        "The generation of your final PDF resume is handled entirely on the client side (in your browser) using built-in print capabilities. Your private data is never sent to a third-party API or external rendering service to generate the document.",
    },
    {
      icon: RefreshCw,
      title: "5. Policy Updates",
      content:
        "We may update our Privacy Policy from time to time. Because we do not collect email addresses or maintain user accounts, we cannot notify you directly of changes. We encourage you to review this page periodically.",
    },
  ];

  return (
    <>
      <Header />
      <div className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto animate-in fade-in duration-700">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-sm font-semibold text-blue-700 mb-6">
            <Shield size={16} />
            <span>Privacy Policy</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 mb-6">
            Your data is <span className="text-blue-600">yours.</span>
          </h1>
          <p className="text-lg text-zinc-500">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>

        {/* TL;DR Highlight Card */}
        <div className="bg-zinc-900 rounded-3xl p-8 md:p-10 mb-16 shadow-2xl relative overflow-hidden border border-zinc-800">
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-blue-500/20 blur-3xl rounded-full pointer-events-none"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex h-3 w-3 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.8)]"></span>
              The Short Version
            </h3>
            <p className="text-lg text-zinc-300 leading-relaxed mb-0 max-w-3xl">
              We do not store, sell, or process your resume data on our servers.
              Everything you type into the builder stays entirely within your
              local browser. It is mathematically impossible for us to read your
              resume.
            </p>
          </div>
        </div>

        {/* Detailed Policies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {policies.map((policy, idx) => (
            <div
              key={idx}
              className={`bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 group ${idx === policies.length - 1 && policies.length % 2 !== 0 ? "md:col-span-2 md:max-w-2xl md:mx-auto" : ""}`}
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <policy.icon size={24} />
              </div>
              <h2 className="text-xl font-bold text-zinc-900 mb-3">
                {policy.title}
              </h2>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                {policy.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PrivacyPage;