import React from "react";
import {
  Sparkles,
  Users,
  Rocket,
  Laptop,
} from "lucide-react";
import Header from "@/components/shared/header";

const VisionPage = () => {
  const pillars = [
    {
      icon: <Users size={24} />,
      title: "Listen First",
      description:
        "Every great application starts with a conversation. I prioritize understanding your goals, your target audience, and your unique vision before writing a single line of code.",
    },
    {
      icon: <Laptop size={24} />,
      title: "Robust Engineering",
      description:
        "Leveraging the power of React, Node.js, MongoDB, and .NET, I build secure, performant, and scalable digital solutions tailored precisely to your requirements.",
    },
    {
      icon: <Rocket size={24} />,
      title: "Mutual Growth",
      description:
        "I don't just hand off code and disappear. I view my clients as partners. When the platforms I build help your business grow, it elevates my journey as a developer too.",
    },
  ];

  return (
    <>
      <Header />
      <div className="bg-zinc-900 text-zinc-50 py-24 md:py-32 min-h-[80vh] flex flex-col justify-center animate-in fade-in duration-700">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-3xl mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-sm font-medium text-zinc-300 mb-6">
              <Sparkles size={14} className="text-zinc-400" />
              <span>My Philosophy</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              A vision built on{" "}
              <span className="text-blue-400">
                collaboration and shared success.
              </span>
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Technology is just a tool; the real magic happens when it brings a
              brilliant concept to life. My goal is to bridge the gap between
              your ideas and flawless technical execution, fostering growth for
              both of us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-zinc-800/40 border border-zinc-700/50 hover:bg-zinc-800/80 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500 group-hover:border-blue-500 group-hover:text-white transition-all text-zinc-300">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default VisionPage