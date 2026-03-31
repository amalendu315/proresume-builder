"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowRight, 
  LayoutTemplate,
  CheckCircle2
} from 'lucide-react';
import Header from '@/components/shared/header';

const TemplatesPage = () => {
  const router = useRouter();

  const handleSelectTemplate = (templateId) => {
    // Redirects to your homepage (the builder) with the template ID in the URL
    router.push(`/builder/?template=${templateId}`);
  };

  const templates = [
    {
      id: "minimalist",
      name: "Minimalist",
      description: "Clean, ATS-friendly design focusing on readability.",
      tags: ["ATS Friendly", "Simple", "Standard"],
      color: "from-zinc-100 to-white border-zinc-200",
      layoutPreview: (
        <div className="w-full h-full flex flex-col p-4 gap-2">
          <div className="h-6 w-3/4 bg-zinc-300 rounded mb-2 mx-auto"></div>
          <div className="h-2 w-full bg-zinc-200 rounded"></div>
          <div className="h-2 w-5/6 bg-zinc-200 rounded"></div>
          <div className="mt-4 h-3 w-1/3 bg-zinc-300 rounded"></div>
          <div className="h-2 w-full bg-zinc-200 rounded"></div>
          <div className="h-2 w-4/5 bg-zinc-200 rounded"></div>
        </div>
      )
    },
    {
      id: "modern",
      name: "Modern Sidebar",
      description: "Sleek dark sidebar to highlight contact info and skills.",
      tags: ["Dark Mode", "Two-Column", "Tech"],
      color: "from-slate-900 to-slate-800 border-slate-700 text-white",
      layoutPreview: (
        <div className="w-full h-full flex">
          <div className="w-1/3 h-full bg-slate-800 p-2 flex flex-col gap-2">
             <div className="h-3 w-full bg-slate-600 rounded"></div>
             <div className="h-2 w-3/4 bg-slate-600 rounded"></div>
          </div>
          <div className="w-2/3 h-full bg-white p-3 flex flex-col gap-2">
            <div className="h-2 w-full bg-zinc-200 rounded"></div>
            <div className="h-2 w-5/6 bg-zinc-200 rounded"></div>
            <div className="h-2 w-full bg-zinc-200 rounded"></div>
          </div>
        </div>
      )
    },
    {
      id: "professional",
      name: "Professional Classic",
      description: "Traditional serif typography for corporate roles.",
      tags: ["Corporate", "Serif", "Formal"],
      color: "from-gray-50 to-white border-gray-300",
      layoutPreview: (
        <div className="w-full h-full flex flex-col p-4 gap-2">
          <div className="border-b-2 border-gray-800 pb-2 mb-2 flex justify-between">
            <div className="h-4 w-1/2 bg-gray-800 rounded"></div>
            <div className="h-2 w-1/4 bg-gray-400 rounded mt-2"></div>
          </div>
          <div className="h-2 w-full bg-gray-200 rounded"></div>
          <div className="h-2 w-5/6 bg-gray-200 rounded"></div>
        </div>
      )
    },
    {
      id: "executive",
      name: "Executive Split",
      description: "A balanced 60/40 split emphasizing experience and skills.",
      tags: ["Modern", "Split Layout", "Management"],
      color: "from-slate-50 to-white border-slate-200",
      layoutPreview: (
        <div className="w-full h-full flex flex-col p-4 gap-2">
          <div className="h-6 w-1/2 bg-slate-800 rounded mx-auto mb-2"></div>
          <div className="flex gap-2 h-full">
            <div className="w-3/5 h-full flex flex-col gap-2 border-r border-slate-200 pr-2">
              <div className="h-2 w-full bg-slate-200 rounded"></div>
              <div className="h-2 w-5/6 bg-slate-200 rounded"></div>
            </div>
            <div className="w-2/5 h-full flex flex-col gap-2 bg-slate-100 p-2 rounded">
              <div className="h-2 w-full bg-slate-300 rounded"></div>
              <div className="h-2 w-3/4 bg-slate-300 rounded"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "creative",
      name: "Creative Accent",
      description: "Bold teal header for design and creative roles.",
      tags: ["Colorful", "Creative", "Bold"],
      color: "from-teal-700 to-teal-800 border-teal-600 text-white",
      layoutPreview: (
        <div className="w-full h-full flex flex-col">
          <div className="h-12 w-full bg-teal-700 p-2">
            <div className="h-3 w-1/2 bg-teal-400 rounded mb-1"></div>
            <div className="h-2 w-1/3 bg-teal-500 rounded"></div>
          </div>
          <div className="flex-1 bg-white p-3 flex flex-col gap-2">
             <div className="h-2 w-full bg-zinc-200 rounded"></div>
             <div className="h-2 w-4/5 bg-zinc-200 rounded"></div>
          </div>
        </div>
      )
    },
    {
      id: "image-modern",
      name: "Image - Sidebar",
      description: "Modern sidebar layout including a profile picture.",
      tags: ["Profile Photo", "Dark Sidebar"],
      color: "from-slate-900 to-slate-800 border-slate-700 text-white",
      layoutPreview: (
        <div className="w-full h-full flex">
          <div className="w-1/3 h-full bg-slate-800 p-2 flex flex-col items-center gap-2">
             <div className="h-8 w-8 bg-slate-600 rounded-full mb-1"></div>
             <div className="h-2 w-full bg-slate-600 rounded"></div>
             <div className="h-2 w-3/4 bg-slate-600 rounded"></div>
          </div>
          <div className="w-2/3 h-full bg-white p-3 flex flex-col gap-2">
            <div className="h-2 w-full bg-zinc-200 rounded"></div>
            <div className="h-2 w-5/6 bg-zinc-200 rounded"></div>
          </div>
        </div>
      )
    },
    {
      id: "image-classic",
      name: "Image - Classic",
      description: "Traditional layout with a professional headshot.",
      tags: ["Profile Photo", "Corporate"],
      color: "from-gray-50 to-white border-gray-300",
      layoutPreview: (
        <div className="w-full h-full flex flex-col p-4 gap-2">
          <div className="border-b-2 border-gray-800 pb-2 mb-2 flex items-center gap-2">
            <div className="h-8 w-8 bg-gray-300 rounded-full shrink-0"></div>
            <div className="flex-1">
              <div className="h-3 w-3/4 bg-gray-800 rounded mb-1"></div>
              <div className="h-2 w-1/2 bg-gray-400 rounded"></div>
            </div>
          </div>
          <div className="h-2 w-full bg-gray-200 rounded"></div>
          <div className="h-2 w-5/6 bg-gray-200 rounded"></div>
        </div>
      )
    },
    {
      id: "image-creative",
      name: "Image - Studio",
      description: "Center-aligned creative layout with a large photo.",
      tags: ["Profile Photo", "Creative", "Centered"],
      color: "from-slate-50 to-white border-slate-200",
      layoutPreview: (
        <div className="w-full h-full flex flex-col">
          <div className="h-16 w-full bg-slate-100 border-b border-slate-200 flex flex-col items-center justify-center gap-1 p-2">
             <div className="h-6 w-6 bg-slate-300 rounded-lg"></div>
             <div className="h-2 w-1/2 bg-slate-800 rounded"></div>
          </div>
          <div className="flex-1 bg-white p-3 flex flex-col items-center gap-2">
             <div className="h-2 w-3/4 bg-zinc-200 rounded"></div>
             <div className="h-2 w-full bg-zinc-200 rounded"></div>
          </div>
        </div>
      )
    }
  ];

  return (
    <>
      <Header />
      <div className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto animate-in fade-in duration-700">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-sm font-semibold text-blue-700 mb-6">
            <LayoutTemplate size={16} />
            <span>Resume Templates</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
            Choose your <span className="text-blue-600">starting point.</span>
          </h1>
          <p className="text-lg text-zinc-600 leading-relaxed">
            Select from our collection of professionally designed templates. Whether you need something ATS-friendly or highly creative, we've got you covered.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {templates.map((template) => (
            <div 
              key={template.id} 
              className="group relative flex flex-col bg-white rounded-2xl border border-zinc-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 overflow-hidden"
            >
              {/* Visual Preview Area */}
              <div className={`h-48 w-full bg-gradient-to-br ${template.color} border-b border-zinc-100 relative overflow-hidden flex items-center justify-center p-6`}>
                <div className="w-[120px] h-[160px] bg-white shadow-md rounded overflow-hidden rotate-[-2deg] group-hover:rotate-0 group-hover:scale-105 transition-transform duration-500 ease-out border border-black/5">
                  {template.layoutPreview}
                </div>
              </div>

              {/* Template Info */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-zinc-900 mb-2">{template.name}</h3>
                <p className="text-sm text-zinc-500 mb-4 flex-grow">{template.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {template.tags.map((tag, i) => (
                    <span key={i} className="text-[11px] font-semibold tracking-wide uppercase px-2 py-1 bg-zinc-100 text-zinc-600 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button using Next.js Navigation */}
                <button 
                  onClick={() => handleSelectTemplate(template.id)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-zinc-50 text-zinc-900 border border-zinc-200 px-4 py-2.5 rounded-xl font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 group-hover:shadow-md"
                >
                  Use Template <ArrowRight size={16} />
                </button>
              </div>
              
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white rounded-full p-1 shadow-md text-blue-500">
                  <CheckCircle2 size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TemplatesPage;