"use client";
import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Download,
  Plus,
  Trash2,
  ChevronDown,
  ChevronUp,
  User,
  Briefcase,
  GraduationCap,
  Code,
  Wrench,
  LayoutTemplate,
  Mail,
  Phone,
  MapPin,
  Globe,
  Eye,
  FileEdit,
} from "lucide-react";
import Header from "@/components/shared/header";

// --- CUSTOM BRAND ICONS (Since lucide-react removed them) ---
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

// --- INITIAL DATA (Pre-filled for Amalendu) ---
const initialData = {
  personal: {
    fullName: "Amalendu Pandey",
    role: "FullStack (MERN) Developer",
    email: "amalendu.pandey@example.com",
    phone: "+91 98765 43210",
    location: "Siliguri, West Bengal, India",
    website: "amalendu-pandey.vercel.app",
    github: "github.com/amalendu315",
    linkedin: "linkedin.com/in/amalendu315",
    profileImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300",
  },
  summary:
    "Passionate Full Stack MERN Developer with a strong flair for TypeScript. Experienced in building cutting-edge web applications and creating tech solutions that make a real impact. Background in Cyber Security and Cyber Crime Analysis. Dedicated to continuous learning, open-source contributions, and creating scalable digital experiences.",
  experience: [
    {
      id: "1",
      company: "Open Source Contributor",
      role: "Full Stack Developer",
      startDate: "Jan 2022",
      endDate: "Present",
      description:
        "• Built cutting-edge web applications using the MERN stack and TypeScript.\n• Developed and maintained scalable APIs and backend services.\n• Engaged in community-driven projects, enhancing development processes and code quality.\n• Actively participated in Cyber Security analysis and vulnerability assessments.",
    },
  ],
  education: [
    {
      id: "1",
      school: "University of Technology",
      degree: "Bachelor of Technology in Computer Science",
      year: "2020 - 2024",
      details:
        "Focus on Software Engineering, Cyber Security, and Full-Stack Web Development.",
    },
  ],
  projects: [
    {
      id: "1",
      name: "Tally Scrapper API",
      techStack: "TypeScript, Node.js",
      link: "github.com/amalendu315/tally_scrapper",
      description:
        "A robust scrapper API designed to extract ledger entries and pre-fill them efficiently into the Tally application.",
    },
    {
      id: "2",
      name: "Dynamic TypeScript Airbnb Clone",
      techStack: "TypeScript, MERN Stack",
      link: "github.com/amalendu315/dynamic-typescript-airbnb",
      description:
        "A fully dynamic, full-stack clone of Airbnb featuring property listings, user authentication, and booking mechanics.",
    },
    {
      id: "3",
      name: "Discord Clone",
      techStack: "TypeScript, React, Socket.io",
      link: "github.com/amalendu315/discord_clone",
      description:
        "Real-time communication application mimicking core Discord features including live chat and channel management.",
    },
  ],
  skills:
    "JavaScript, TypeScript, React.js, Next.js, Node.js, Express, MongoDB, Cyber Security, Tailwind CSS, API Design, Git/GitHub",
};

// --- UI COMPONENTS (Shadcn-inspired) ---
const Input = ({ label, ...props }) => (
  <div className="flex flex-col gap-1.5 w-full">
    {label && (
      <label className="text-sm font-medium text-zinc-700">{label}</label>
    )}
    <input
      className="flex h-10 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
      {...props}
    />
  </div>
);

const Textarea = ({ label, ...props }) => (
  <div className="flex flex-col gap-1.5 w-full">
    {label && (
      <label className="text-sm font-medium text-zinc-700">{label}</label>
    )}
    <textarea
      className="flex min-h-[80px] w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
      {...props}
    />
  </div>
);

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2";
  const variants = {
    primary: "bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90 shadow",
    secondary: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200",
    outline:
      "border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900",
    ghost: "hover:bg-zinc-100 hover:text-zinc-900",
    destructive: "bg-red-500 text-zinc-50 hover:bg-red-500/90",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const AccordionItem = ({ title, icon: Icon, isOpen, onToggle, children }) => (
  <div className="border border-zinc-200 rounded-lg mb-4 bg-white shadow-sm overflow-hidden transition-all">
    <button
      onClick={onToggle}
      className="flex w-full items-center justify-between py-4 px-5 font-medium transition-all hover:bg-zinc-50"
    >
      <div className="flex items-center gap-3 text-zinc-800">
        <Icon size={18} className="text-zinc-500" />
        {title}
      </div>
      {isOpen ? (
        <ChevronUp size={16} className="text-zinc-500" />
      ) : (
        <ChevronDown size={16} className="text-zinc-500" />
      )}
    </button>
    {isOpen && (
      <div className="px-5 pb-5 pt-2 border-t border-zinc-100 animate-in slide-in-from-top-2">
        {children}
      </div>
    )}
  </div>
);

function BuilderContent() {
  const searchParams = useSearchParams();
  const defaultTemplate = searchParams.get("template") || "minimalist";

  const [data, setData] = useState(initialData);
  const [template, setTemplate] = useState(defaultTemplate);
  const [openSection, setOpenSection] = useState("personal");

  // Mobile tab state to toggle between editing and previewing
  const [mobileTab, setMobileTab] = useState("editor");

  const handlePrint = () => {
    // Switch to preview just in case they are on mobile edit view before printing
    if (mobileTab !== "preview") {
      setMobileTab("preview");
      // Small delay to allow rendering before print dialog opens
      setTimeout(() => window.print(), 100);
    } else {
      window.print();
    }
  };

  const updatePersonal = (field, value) => {
    setData((prev) => ({
      ...prev,
      personal: { ...prev.personal, [field]: value },
    }));
  };

  const updateArray = (section, id, field, value) => {
    setData((prev) => ({
      ...prev,
      [section]: prev[section].map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    }));
  };

  const addArrayItem = (section, newItem) => {
    setData((prev) => ({
      ...prev,
      [section]: [...prev[section], { ...newItem, id: Date.now().toString() }],
    }));
  };

  const removeArrayItem = (section, id) => {
    setData((prev) => ({
      ...prev,
      [section]: prev[section].filter((item) => item.id !== id),
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      updatePersonal("profileImage", imageUrl);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-zinc-100 font-sans overflow-hidden">
      {/* HEADER (Hidden when printing) */}
      <Header
        rightControls={
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 mr-2">
              <label className="text-sm font-medium text-zinc-600">
                Template:
              </label>
              <select
                value={template}
                onChange={(e) => setTemplate(e.target.value)}
                className="h-9 rounded-md border border-zinc-300 bg-white px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 cursor-pointer shadow-sm"
              >
                <option value="minimalist">Minimalist (ATS)</option>
                <option value="modern">Modern Sidebar</option>
                <option value="professional">Professional Classic</option>
                <option value="executive">Executive Split</option>
                <option value="creative">Creative Accent</option>
                <option value="image-modern">Image - Sidebar</option>
                <option value="image-classic">Image - Classic</option>
                <option value="image-creative">Image - Studio</option>
              </select>
            </div>
            <Button onClick={handlePrint} className="gap-2 shadow-md">
              <Download size={16} />
              <span className="hidden sm:inline">Download PDF</span>
            </Button>
          </div>
        }
      />

      {/* MOBILE TOGGLE NAVIGATION (Fixed at bottom) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center bg-zinc-900 rounded-full p-1.5 shadow-2xl lg:hidden print:hidden border border-zinc-700">
        <button
          onClick={() => setMobileTab("editor")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
            mobileTab === "editor"
              ? "bg-white text-zinc-900 shadow-sm"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          <FileEdit size={16} /> Edit
        </button>
        <button
          onClick={() => setMobileTab("preview")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
            mobileTab === "preview"
              ? "bg-white text-zinc-900 shadow-sm"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          <Eye size={16} /> Preview
        </button>
      </div>

      {/* MAIN LAYOUT */}
      <main className="flex w-full pt-16 flex-1 h-[calc(100vh-4rem)]">
        {/* LEFT PANE: FORM BUILDER */}
        <div
          className={`w-full lg:w-[45%] h-full overflow-y-auto bg-zinc-50/50 p-4 sm:p-6 border-r border-zinc-200 print:hidden pb-32 custom-scrollbar 
          ${mobileTab === "editor" ? "block" : "hidden lg:block"}`}
        >
          <div className="max-w-xl mx-auto space-y-2">
            {/* Mobile Template Selector (Visible only on mobile editor) */}
            <div className="md:hidden bg-white p-4 rounded-lg border border-zinc-200 shadow-sm mb-6 flex flex-col gap-2">
              <label className="text-sm font-semibold text-zinc-700 flex items-center gap-2">
                <LayoutTemplate size={16} className="text-zinc-500" /> Choose
                Template
              </label>
              <select
                value={template}
                onChange={(e) => setTemplate(e.target.value)}
                className="h-10 rounded-md border border-zinc-300 bg-zinc-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 cursor-pointer"
              >
                <option value="minimalist">Minimalist (ATS)</option>
                <option value="modern">Modern Sidebar</option>
                <option value="professional">Professional Classic</option>
                <option value="executive">Executive Split</option>
                <option value="creative">Creative Accent</option>
                <option value="image-modern">Image - Sidebar</option>
                <option value="image-classic">Image - Classic</option>
                <option value="image-creative">Image - Studio</option>
              </select>
            </div>

            <AccordionItem
              title="Personal Details"
              icon={User}
              isOpen={openSection === "personal"}
              onToggle={() =>
                setOpenSection(openSection === "personal" ? "" : "personal")
              }
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Full Name"
                  value={data.personal.fullName}
                  onChange={(e) => updatePersonal("fullName", e.target.value)}
                />
                <Input
                  label="Job Title"
                  value={data.personal.role}
                  onChange={(e) => updatePersonal("role", e.target.value)}
                />

                <div className="flex flex-col gap-1.5 w-full md:col-span-2">
                  <label className="text-sm font-medium text-zinc-700">
                    Profile Image (Local Upload - Not Saved)
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="flex w-full rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm text-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-zinc-100 file:text-zinc-700 hover:file:bg-zinc-200 cursor-pointer"
                  />
                </div>

                <Input
                  label="Email"
                  type="email"
                  value={data.personal.email}
                  onChange={(e) => updatePersonal("email", e.target.value)}
                />
                <Input
                  label="Phone"
                  value={data.personal.phone}
                  onChange={(e) => updatePersonal("phone", e.target.value)}
                />
                <Input
                  label="Location"
                  value={data.personal.location}
                  onChange={(e) => updatePersonal("location", e.target.value)}
                />
                <Input
                  label="Website"
                  value={data.personal.website}
                  onChange={(e) => updatePersonal("website", e.target.value)}
                />
                <Input
                  label="GitHub"
                  value={data.personal.github}
                  onChange={(e) => updatePersonal("github", e.target.value)}
                />
                <Input
                  label="LinkedIn"
                  value={data.personal.linkedin}
                  onChange={(e) => updatePersonal("linkedin", e.target.value)}
                />
              </div>
            </AccordionItem>

            <AccordionItem
              title="Professional Summary"
              icon={Wrench}
              isOpen={openSection === "summary"}
              onToggle={() =>
                setOpenSection(openSection === "summary" ? "" : "summary")
              }
            >
              <Textarea
                label="Summary"
                rows={5}
                value={data.summary}
                onChange={(e) => setData({ ...data, summary: e.target.value })}
                placeholder="Write a brief overview of your background and goals..."
              />
            </AccordionItem>

            <AccordionItem
              title="Experience"
              icon={Briefcase}
              isOpen={openSection === "experience"}
              onToggle={() =>
                setOpenSection(openSection === "experience" ? "" : "experience")
              }
            >
              {data.experience.map((exp) => (
                <div
                  key={exp.id}
                  className="p-4 border border-zinc-200 rounded-md bg-zinc-50 mb-4 relative group"
                >
                  <button
                    onClick={() => removeArrayItem("experience", exp.id)}
                    className="absolute top-2 right-2 p-1.5 text-zinc-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors"
                    title="Delete Experience"
                  >
                    <Trash2 size={16} />
                  </button>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 pr-8">
                    <Input
                      label="Company"
                      value={exp.company}
                      onChange={(e) =>
                        updateArray(
                          "experience",
                          exp.id,
                          "company",
                          e.target.value,
                        )
                      }
                    />
                    <Input
                      label="Role"
                      value={exp.role}
                      onChange={(e) =>
                        updateArray(
                          "experience",
                          exp.id,
                          "role",
                          e.target.value,
                        )
                      }
                    />
                    <Input
                      label="Start Date"
                      value={exp.startDate}
                      onChange={(e) =>
                        updateArray(
                          "experience",
                          exp.id,
                          "startDate",
                          e.target.value,
                        )
                      }
                    />
                    <Input
                      label="End Date"
                      value={exp.endDate}
                      onChange={(e) =>
                        updateArray(
                          "experience",
                          exp.id,
                          "endDate",
                          e.target.value,
                        )
                      }
                    />
                  </div>
                  <Textarea
                    label="Description (Bulleted list recommended)"
                    rows={4}
                    value={exp.description}
                    onChange={(e) =>
                      updateArray(
                        "experience",
                        exp.id,
                        "description",
                        e.target.value,
                      )
                    }
                  />
                </div>
              ))}
              <Button
                variant="outline"
                className="w-full gap-2 border-dashed border-2"
                onClick={() =>
                  addArrayItem("experience", {
                    company: "",
                    role: "",
                    startDate: "",
                    endDate: "",
                    description: "",
                  })
                }
              >
                <Plus size={16} /> Add Experience
              </Button>
            </AccordionItem>

            <AccordionItem
              title="Projects"
              icon={Code}
              isOpen={openSection === "projects"}
              onToggle={() =>
                setOpenSection(openSection === "projects" ? "" : "projects")
              }
            >
              {data.projects.map((proj) => (
                <div
                  key={proj.id}
                  className="p-4 border border-zinc-200 rounded-md bg-zinc-50 mb-4 relative group"
                >
                  <button
                    onClick={() => removeArrayItem("projects", proj.id)}
                    className="absolute top-2 right-2 p-1.5 text-zinc-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 pr-8">
                    <Input
                      label="Project Name"
                      value={proj.name}
                      onChange={(e) =>
                        updateArray("projects", proj.id, "name", e.target.value)
                      }
                    />
                    <Input
                      label="Tech Stack"
                      value={proj.techStack}
                      onChange={(e) =>
                        updateArray(
                          "projects",
                          proj.id,
                          "techStack",
                          e.target.value,
                        )
                      }
                    />
                    <Input
                      label="Link / URL"
                      className="md:col-span-2"
                      value={proj.link}
                      onChange={(e) =>
                        updateArray("projects", proj.id, "link", e.target.value)
                      }
                    />
                  </div>
                  <Textarea
                    label="Description"
                    rows={3}
                    value={proj.description}
                    onChange={(e) =>
                      updateArray(
                        "projects",
                        proj.id,
                        "description",
                        e.target.value,
                      )
                    }
                  />
                </div>
              ))}
              <Button
                variant="outline"
                className="w-full gap-2 border-dashed border-2"
                onClick={() =>
                  addArrayItem("projects", {
                    name: "",
                    techStack: "",
                    link: "",
                    description: "",
                  })
                }
              >
                <Plus size={16} /> Add Project
              </Button>
            </AccordionItem>

            <AccordionItem
              title="Education"
              icon={GraduationCap}
              isOpen={openSection === "education"}
              onToggle={() =>
                setOpenSection(openSection === "education" ? "" : "education")
              }
            >
              {data.education.map((edu) => (
                <div
                  key={edu.id}
                  className="p-4 border border-zinc-200 rounded-md bg-zinc-50 mb-4 relative group"
                >
                  <button
                    onClick={() => removeArrayItem("education", edu.id)}
                    className="absolute top-2 right-2 p-1.5 text-zinc-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 pr-8">
                    <Input
                      label="Institution"
                      value={edu.school}
                      onChange={(e) =>
                        updateArray(
                          "education",
                          edu.id,
                          "school",
                          e.target.value,
                        )
                      }
                    />
                    <Input
                      label="Degree / Course"
                      value={edu.degree}
                      onChange={(e) =>
                        updateArray(
                          "education",
                          edu.id,
                          "degree",
                          e.target.value,
                        )
                      }
                    />
                    <Input
                      label="Timeline (e.g. 2020-2024)"
                      className="md:col-span-2"
                      value={edu.year}
                      onChange={(e) =>
                        updateArray("education", edu.id, "year", e.target.value)
                      }
                    />
                  </div>
                  <Input
                    label="Additional Details / Grades"
                    value={edu.details}
                    onChange={(e) =>
                      updateArray(
                        "education",
                        edu.id,
                        "details",
                        e.target.value,
                      )
                    }
                  />
                </div>
              ))}
              <Button
                variant="outline"
                className="w-full gap-2 border-dashed border-2"
                onClick={() =>
                  addArrayItem("education", {
                    school: "",
                    degree: "",
                    year: "",
                    details: "",
                  })
                }
              >
                <Plus size={16} /> Add Education
              </Button>
            </AccordionItem>

            <AccordionItem
              title="Skills"
              icon={LayoutTemplate}
              isOpen={openSection === "skills"}
              onToggle={() =>
                setOpenSection(openSection === "skills" ? "" : "skills")
              }
            >
              <Textarea
                label="Skills (Comma separated)"
                rows={4}
                value={data.skills}
                onChange={(e) => setData({ ...data, skills: e.target.value })}
                placeholder="React, TypeScript, Node.js..."
              />
            </AccordionItem>
          </div>
        </div>

        {/* RIGHT PANE: LIVE PREVIEW */}
        <div
          className={`w-full lg:w-[55%] h-full bg-zinc-300/40 overflow-auto print:flex print:w-full print:p-0 print:bg-white print:overflow-visible custom-scrollbar
          ${mobileTab === "preview" ? "block" : "hidden lg:block"}`}
        >
          {/* Scrollable container for mobile to ensure the A4 page doesn't shrink or squish */}
          <div className="w-full min-w-min p-4 lg:p-8 flex justify-center pb-32">
            <div className="bg-white shadow-2xl print:shadow-none w-[21cm] min-w-[21cm] min-h-[29.7cm] print:min-w-0 print:max-w-none print:w-full text-zinc-900 transition-all duration-300 relative print:m-0 shrink-0">
              <ResumeTemplate data={data} template={template} />
            </div>
          </div>
        </div>
      </main>

      {/* Tailwind Print Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media print {
          @page { margin: 0; size: auto; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; background: white !important; }
          .custom-scrollbar::-webkit-scrollbar { display: none; }
        }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #d4d4d8; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #a1a1aa; }
      `,
        }}
      />
    </div>
  );
}

// --- MAIN APPLICATION ENTRY ---
export default function App() {
  return (
    <Suspense fallback={<div>Loading builder...</div>}>
      <BuilderContent />
    </Suspense>
  );
}
// --- TEMPLATE RENDERER ---
const ResumeTemplate = ({ data, template }) => {
  // Helper to safely render newlines
  const renderText = (text) =>
    text?.split("\n").map((line, i) => (
      <React.Fragment key={i}>
        {line}
        <br />
      </React.Fragment>
    ));

  if (template === "modern") {
    return (
      <div className="flex min-h-[29.7cm] text-[13px] leading-relaxed font-sans bg-slate-900 print:bg-slate-900">
        {/* Sidebar - Using strict width and shrink-0 to prevent print squishing */}
        <div className="w-[32%] shrink-0 text-slate-100 p-8 print:text-white border-r border-slate-800">
          <div className="mb-8 print:break-inside-avoid">
            <h1 className="text-3xl font-bold tracking-tight uppercase leading-none text-white">
              {data.personal.fullName}
            </h1>
            <h2 className="text-blue-400 font-medium text-lg tracking-wide mt-2">
              {data.personal.role}
            </h2>
          </div>

          <div className="text-sm mb-8 print:break-inside-avoid">
            <h3 className="uppercase tracking-widest font-semibold text-slate-400 border-b border-slate-700 pb-1 mb-3">
              Contact
            </h3>
            <div className="flex flex-col gap-3">
              {data.personal.email && (
                <div className="flex items-center gap-3">
                  <Mail size={14} className="text-blue-400 shrink-0" />
                  <span className="break-all">{data.personal.email}</span>
                </div>
              )}
              {data.personal.phone && (
                <div className="flex items-center gap-3">
                  <Phone size={14} className="text-blue-400 shrink-0" />
                  <span>{data.personal.phone}</span>
                </div>
              )}
              {data.personal.location && (
                <div className="flex items-center gap-3">
                  <MapPin size={14} className="text-blue-400 shrink-0" />
                  <span>{data.personal.location}</span>
                </div>
              )}
              {data.personal.website && (
                <div className="flex items-center gap-3">
                  <Globe size={14} className="text-blue-400 shrink-0" />
                  <span className="break-all">{data.personal.website}</span>
                </div>
              )}
              {data.personal.github && (
                <div className="flex items-center gap-3">
                  <GithubIcon size={14} className="text-blue-400 shrink-0" />
                  <span className="break-all">{data.personal.github}</span>
                </div>
              )}
              {data.personal.linkedin && (
                <div className="flex items-center gap-3">
                  <LinkedinIcon size={14} className="text-blue-400 shrink-0" />
                  <span className="break-all">{data.personal.linkedin}</span>
                </div>
              )}
            </div>
          </div>

          <div className="text-sm mb-8 print:break-inside-avoid">
            <h3 className="uppercase tracking-widest font-semibold text-slate-400 border-b border-slate-700 pb-1 mb-3">
              Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {data.skills.split(",").map(
                (skill, i) =>
                  skill.trim() && (
                    <span
                      key={i}
                      className="bg-slate-800 px-2.5 py-1 rounded text-xs text-slate-300 print:bg-slate-800 print:text-white border border-slate-700"
                    >
                      {skill.trim()}
                    </span>
                  ),
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-[68%] p-8 bg-white print:bg-white text-slate-800">
          {data.summary && (
            <section className="mb-6 print:break-inside-avoid">
              <h3 className="text-lg font-bold text-slate-900 border-b-2 border-slate-200 pb-1 mb-3 uppercase tracking-wide">
                Profile
              </h3>
              <p className="text-slate-600 text-justify">{data.summary}</p>
            </section>
          )}

          {data.experience.length > 0 && (
            <section className="mb-6">
              <h3 className="text-lg font-bold text-slate-900 border-b-2 border-slate-200 pb-1 mb-4 uppercase tracking-wide">
                Experience
              </h3>
              <div className="flex flex-col gap-5">
                {data.experience.map((exp) => (
                  <div key={exp.id} className="print:break-inside-avoid">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-bold text-slate-900 text-[15px]">
                        {exp.role}
                      </h4>
                      <span className="text-xs font-semibold text-blue-600 whitespace-nowrap bg-blue-50 px-2 py-0.5 rounded print:bg-transparent print:p-0">
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-slate-700 mb-2">
                      {exp.company}
                    </div>
                    <div className="text-slate-600 pl-4 border-l-2 border-slate-200 leading-relaxed">
                      {renderText(exp.description)}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {data.projects.length > 0 && (
            <section className="mb-6">
              <h3 className="text-lg font-bold text-slate-900 border-b-2 border-slate-200 pb-1 mb-4 uppercase tracking-wide">
                Projects
              </h3>
              <div className="flex flex-col gap-5">
                {data.projects.map((proj) => (
                  <div key={proj.id} className="print:break-inside-avoid">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-bold text-slate-900">{proj.name}</h4>
                      {proj.link && (
                        <span className="text-xs text-slate-500">
                          {proj.link}
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-semibold text-blue-600 mb-2">
                      {proj.techStack}
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {proj.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {data.education.length > 0 && (
            <section className="mb-6">
              <h3 className="text-lg font-bold text-slate-900 border-b-2 border-slate-200 pb-1 mb-4 uppercase tracking-wide">
                Education
              </h3>
              <div className="flex flex-col gap-4">
                {data.education.map((edu) => (
                  <div key={edu.id} className="print:break-inside-avoid">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-bold text-slate-900">{edu.degree}</h4>
                      <span className="text-xs font-medium text-slate-500">
                        {edu.year}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-slate-700 mb-1">
                      {edu.school}
                    </div>
                    <p className="text-slate-600 text-sm">{edu.details}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    );
  }

  if (template === "professional") {
    return (
      <div className="p-10 font-serif text-[13px] leading-relaxed text-gray-900 min-h-[29.7cm] bg-white">
        <header className="border-b-2 border-gray-900 pb-6 mb-6 flex justify-between items-end print:break-inside-avoid">
          <div className="w-2/3">
            <h1 className="text-4xl font-bold text-gray-900 uppercase tracking-wider mb-2">
              {data.personal.fullName}
            </h1>
            <h2 className="text-xl text-gray-700 italic">
              {data.personal.role}
            </h2>
          </div>
          <div className="text-right text-xs text-gray-600 flex flex-col gap-1 font-sans w-1/3">
            {data.personal.email && <div>{data.personal.email}</div>}
            {data.personal.phone && <div>{data.personal.phone}</div>}
            {data.personal.location && <div>{data.personal.location}</div>}
            <div className="flex gap-2 justify-end mt-1 font-medium flex-wrap">
              {data.personal.github && <span>{data.personal.github}</span>}
              {data.personal.linkedin && (
                <span>| {data.personal.linkedin}</span>
              )}
            </div>
          </div>
        </header>

        {data.summary && (
          <section className="mb-6 print:break-inside-avoid">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">
              Summary
            </h3>
            <p className="text-gray-800 text-justify">{data.summary}</p>
          </section>
        )}

        {data.experience.length > 0 && (
          <section className="mb-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 border-b border-gray-200 pb-1">
              Professional Experience
            </h3>
            <div className="flex flex-col gap-6">
              {data.experience.map((exp) => (
                <div key={exp.id} className="print:break-inside-avoid">
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-bold text-lg text-gray-900">
                      {exp.role}
                    </h4>
                    <span className="text-sm font-sans italic text-gray-600">
                      {exp.startDate} – {exp.endDate}
                    </span>
                  </div>
                  <div className="text-md font-semibold text-gray-700 mb-2">
                    {exp.company}
                  </div>
                  <div className="text-gray-800 pl-4 font-sans text-sm">
                    {renderText(exp.description)}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {data.projects.length > 0 && (
          <section className="mb-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 border-b border-gray-200 pb-1">
              Selected Projects
            </h3>
            <div className="flex flex-col gap-5">
              {data.projects.map((proj) => (
                <div key={proj.id} className="print:break-inside-avoid">
                  <div className="flex justify-between items-baseline mb-1">
                    <div className="flex items-baseline gap-2">
                      <h4 className="font-bold text-gray-900">{proj.name}</h4>
                      <span className="text-xs font-sans text-gray-500 px-2 border-l border-gray-300">
                        {proj.techStack}
                      </span>
                    </div>
                    {proj.link && (
                      <span className="text-xs font-sans text-gray-500">
                        {proj.link}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-800 font-sans text-sm">
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="flex gap-8 print:break-inside-avoid">
          {data.education.length > 0 && (
            <section className="mb-6 w-1/2">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-3 border-b border-gray-200 pb-1">
                Education
              </h3>
              <div className="flex flex-col gap-4">
                {data.education.map((edu) => (
                  <div key={edu.id} className="print:break-inside-avoid">
                    <h4 className="font-bold text-gray-900">{edu.degree}</h4>
                    <div className="text-sm font-semibold text-gray-700">
                      {edu.school}
                    </div>
                    <div className="text-xs font-sans text-gray-500 mb-1">
                      {edu.year}
                    </div>
                    <p className="text-gray-800 font-sans text-xs">
                      {edu.details}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {data.skills && (
            <section className="mb-6 w-1/2 print:break-inside-avoid">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-3 border-b border-gray-200 pb-1">
                Core Competencies
              </h3>
              <div className="font-sans text-sm leading-loose text-gray-800">
                {data.skills.split(",").map((skill, i) => (
                  <React.Fragment key={i}>
                    <span className="font-medium inline-block">
                      {skill.trim()}
                    </span>
                    {i < data.skills.split(",").length - 1 && (
                      <span className="text-gray-300 mx-2">|</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    );
  }

  if (template === "executive") {
    return (
      <div className="p-10 font-sans text-[13px] leading-relaxed text-zinc-900 min-h-[29.7cm] bg-white">
        <header className="text-center print:break-inside-avoid border-b-4 border-slate-800 pb-6 mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-2">
            {data.personal.fullName}
          </h1>
          <div className="text-lg text-slate-600 font-medium mb-4 uppercase tracking-wider">
            {data.personal.role}
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold text-slate-700">
            {data.personal.email && (
              <span className="flex items-center gap-1">
                <Mail size={12} />
                {data.personal.email}
              </span>
            )}
            {data.personal.phone && (
              <span className="flex items-center gap-1">
                <Phone size={12} />
                {data.personal.phone}
              </span>
            )}
            {data.personal.location && (
              <span className="flex items-center gap-1">
                <MapPin size={12} />
                {data.personal.location}
              </span>
            )}
            {data.personal.linkedin && (
              <span className="flex items-center gap-1">
                <LinkedinIcon size={12} />
                {data.personal.linkedin}
              </span>
            )}
          </div>
        </header>

        {data.summary && (
          <section className="mb-8 print:break-inside-avoid text-center max-w-3xl mx-auto">
            <p className="text-slate-700 text-sm font-medium leading-relaxed italic">
              "{data.summary}"
            </p>
          </section>
        )}

        <div className="flex gap-8">
          <div className="w-[65%] shrink-0">
            {data.experience.length > 0 && (
              <section className="mb-8">
                <h2 className="text-lg font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                  <Briefcase size={18} className="text-slate-400" /> Experience
                </h2>
                <div className="flex flex-col gap-6">
                  {data.experience.map((exp) => (
                    <div key={exp.id} className="print:break-inside-avoid">
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="font-bold text-slate-900 text-[15px]">
                          {exp.role}
                        </h3>
                        <span className="text-slate-500 text-xs font-bold bg-slate-100 px-2 py-1 rounded">
                          {exp.startDate} – {exp.endDate}
                        </span>
                      </div>
                      <div className="text-slate-800 font-semibold text-sm mb-2">
                        {exp.company}
                      </div>
                      <div className="text-slate-600 leading-normal space-y-1">
                        {renderText(exp.description)}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {data.projects.length > 0 && (
              <section className="mb-8">
                <h2 className="text-lg font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                  <Code size={18} className="text-slate-400" /> Projects
                </h2>
                <div className="flex flex-col gap-5">
                  {data.projects.map((proj) => (
                    <div
                      key={proj.id}
                      className="print:break-inside-avoid border-l-2 border-slate-200 pl-4"
                    >
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="font-bold text-slate-900">
                          {proj.name}
                        </h3>
                        <span className="text-slate-500 text-xs">
                          {proj.link}
                        </span>
                      </div>
                      <div className="text-blue-600 text-xs font-semibold mb-1.5">
                        {proj.techStack}
                      </div>
                      <p className="text-slate-600 text-sm leading-normal">
                        {proj.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="w-[35%] shrink-0">
            {data.skills && (
              <section className="mb-8 print:break-inside-avoid bg-slate-50 p-5 rounded-lg border border-slate-100">
                <h2 className="text-lg font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                  <Wrench size={18} className="text-slate-400" /> Skills
                </h2>
                <div className="flex flex-wrap gap-2">
                  {data.skills.split(",").map(
                    (skill, i) =>
                      skill.trim() && (
                        <span
                          key={i}
                          className="bg-white border border-slate-200 px-3 py-1.5 rounded-md text-xs font-semibold text-slate-700 shadow-sm"
                        >
                          {skill.trim()}
                        </span>
                      ),
                  )}
                </div>
              </section>
            )}

            {data.education.length > 0 && (
              <section className="mb-8">
                <h2 className="text-lg font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                  <GraduationCap size={18} className="text-slate-400" />{" "}
                  Education
                </h2>
                <div className="flex flex-col gap-5">
                  {data.education.map((edu) => (
                    <div key={edu.id} className="print:break-inside-avoid">
                      <h3 className="font-bold text-slate-900 leading-tight mb-1">
                        {edu.degree}
                      </h3>
                      <div className="text-slate-700 font-medium text-sm mb-1">
                        {edu.school}
                      </div>
                      <div className="text-slate-500 text-xs font-bold mb-2">
                        {edu.year}
                      </div>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        {edu.details}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (template === "creative") {
    return (
      <div className="font-sans text-[13px] leading-relaxed text-zinc-900 min-h-[29.7cm] bg-white">
        <header className="bg-teal-700 print:bg-teal-700 text-white p-10 print:break-inside-avoid">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-black tracking-tight mb-2">
              {data.personal.fullName}
            </h1>
            <div className="text-teal-100 text-xl font-medium mb-6">
              {data.personal.role}
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-teal-50 font-medium">
              {data.personal.email && (
                <span className="flex items-center gap-2">
                  <Mail size={16} className="text-teal-300" />
                  {data.personal.email}
                </span>
              )}
              {data.personal.phone && (
                <span className="flex items-center gap-2">
                  <Phone size={16} className="text-teal-300" />
                  {data.personal.phone}
                </span>
              )}
              {data.personal.location && (
                <span className="flex items-center gap-2">
                  <MapPin size={16} className="text-teal-300" />
                  {data.personal.location}
                </span>
              )}
              {data.personal.website && (
                <span className="flex items-center gap-2">
                  <Globe size={16} className="text-teal-300" />
                  {data.personal.website}
                </span>
              )}
              {data.personal.github && (
                <span className="flex items-center gap-2">
                  <GithubIcon size={16} className="text-teal-300" />
                  {data.personal.github}
                </span>
              )}
            </div>
          </div>
        </header>

        <div className="p-10 max-w-4xl mx-auto">
          {data.summary && (
            <section className="mb-8 print:break-inside-avoid">
              <h2 className="text-2xl font-bold text-teal-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-1 bg-teal-500 rounded-full"></span>{" "}
                Profile
              </h2>
              <p className="text-zinc-700 text-justify text-sm leading-relaxed">
                {data.summary}
              </p>
            </section>
          )}

          {data.skills && (
            <section className="mb-8 print:break-inside-avoid">
              <h2 className="text-2xl font-bold text-teal-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-teal-500 rounded-full"></span>{" "}
                Expertise
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.skills.split(",").map(
                  (skill, i) =>
                    skill.trim() && (
                      <span
                        key={i}
                        className="bg-teal-50 text-teal-800 print:bg-teal-50 px-4 py-1.5 rounded-full text-xs font-bold border border-teal-100"
                      >
                        {skill.trim()}
                      </span>
                    ),
                )}
              </div>
            </section>
          )}

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8">
            <div className="flex flex-col gap-8">
              {data.experience.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold text-teal-900 mb-5 flex items-center gap-2">
                    <span className="w-8 h-1 bg-teal-500 rounded-full"></span>{" "}
                    Experience
                  </h2>
                  <div className="flex flex-col gap-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-teal-200 before:to-transparent">
                    {data.experience.map((exp) => (
                      <div
                        key={exp.id}
                        className="print:break-inside-avoid relative flex items-start pl-8"
                      >
                        <div className="absolute left-0 w-4 h-4 rounded-full bg-teal-500 border-4 border-white mt-1"></div>
                        <div>
                          <h3 className="font-bold text-zinc-900 text-base">
                            {exp.role}
                          </h3>
                          <div className="text-teal-700 font-bold text-sm mb-1">
                            {exp.company}
                          </div>
                          <div className="text-zinc-500 text-xs font-semibold mb-2">
                            {exp.startDate} – {exp.endDate}
                          </div>
                          <div className="text-zinc-600 text-sm leading-relaxed">
                            {renderText(exp.description)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            <div className="flex flex-col gap-8">
              {data.projects.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold text-teal-900 mb-5 flex items-center gap-2">
                    <span className="w-8 h-1 bg-teal-500 rounded-full"></span>{" "}
                    Projects
                  </h2>
                  <div className="flex flex-col gap-4">
                    {data.projects.map((proj) => (
                      <div
                        key={proj.id}
                        className="print:break-inside-avoid bg-zinc-50 p-5 rounded-xl border border-zinc-100 hover:border-teal-200 transition-colors"
                      >
                        <h3 className="font-bold text-zinc-900 text-base mb-1">
                          {proj.name}
                        </h3>
                        <div className="text-teal-600 text-xs font-bold mb-2">
                          {proj.techStack}
                        </div>
                        <p className="text-zinc-600 text-sm mb-2">
                          {proj.description}
                        </p>
                        {proj.link && (
                          <span className="text-zinc-400 text-xs break-all">
                            {proj.link}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {data.education.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold text-teal-900 mb-5 flex items-center gap-2">
                    <span className="w-8 h-1 bg-teal-500 rounded-full"></span>{" "}
                    Education
                  </h2>
                  <div className="flex flex-col gap-4">
                    {data.education.map((edu) => (
                      <div key={edu.id} className="print:break-inside-avoid">
                        <h3 className="font-bold text-zinc-900 text-base">
                          {edu.degree}
                        </h3>
                        <div className="text-zinc-700 font-medium text-sm mt-1">
                          {edu.school}
                        </div>
                        <div className="text-teal-600 text-xs font-bold my-1">
                          {edu.year}
                        </div>
                        <p className="text-zinc-600 text-sm">{edu.details}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (template === "image-modern") {
    return (
      <div className="flex min-h-[29.7cm] text-[13px] leading-relaxed font-sans bg-slate-900 print:bg-slate-900">
        <div className="w-[32%] shrink-0 text-slate-100 p-8 print:text-white border-r border-slate-800 flex flex-col items-center text-center">
          {data.personal.profileImage && (
            <img
              src={data.personal.profileImage}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-slate-700 shadow-lg print:break-inside-avoid"
              crossOrigin="anonymous"
            />
          )}
          <div className="mb-8 print:break-inside-avoid w-full">
            <h1 className="text-3xl font-bold tracking-tight uppercase leading-none text-white">
              {data.personal.fullName}
            </h1>
            <h2 className="text-blue-400 font-medium text-lg tracking-wide mt-2">
              {data.personal.role}
            </h2>
          </div>

          <div className="text-sm mb-8 print:break-inside-avoid w-full text-left">
            <h3 className="uppercase tracking-widest font-semibold text-slate-400 border-b border-slate-700 pb-1 mb-3">
              Contact
            </h3>
            <div className="flex flex-col gap-3">
              {data.personal.email && (
                <div className="flex items-center gap-3">
                  <Mail size={14} className="text-blue-400 shrink-0" />
                  <span className="break-all">{data.personal.email}</span>
                </div>
              )}
              {data.personal.phone && (
                <div className="flex items-center gap-3">
                  <Phone size={14} className="text-blue-400 shrink-0" />
                  <span>{data.personal.phone}</span>
                </div>
              )}
              {data.personal.location && (
                <div className="flex items-center gap-3">
                  <MapPin size={14} className="text-blue-400 shrink-0" />
                  <span>{data.personal.location}</span>
                </div>
              )}
              {data.personal.website && (
                <div className="flex items-center gap-3">
                  <Globe size={14} className="text-blue-400 shrink-0" />
                  <span className="break-all">{data.personal.website}</span>
                </div>
              )}
              {data.personal.github && (
                <div className="flex items-center gap-3">
                  <GithubIcon size={14} className="text-blue-400 shrink-0" />
                  <span className="break-all">{data.personal.github}</span>
                </div>
              )}
              {data.personal.linkedin && (
                <div className="flex items-center gap-3">
                  <LinkedinIcon size={14} className="text-blue-400 shrink-0" />
                  <span className="break-all">{data.personal.linkedin}</span>
                </div>
              )}
            </div>
          </div>

          <div className="text-sm mb-8 print:break-inside-avoid w-full text-left">
            <h3 className="uppercase tracking-widest font-semibold text-slate-400 border-b border-slate-700 pb-1 mb-3">
              Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {data.skills.split(",").map(
                (skill, i) =>
                  skill.trim() && (
                    <span
                      key={i}
                      className="bg-slate-800 px-2.5 py-1 rounded text-xs text-slate-300 print:bg-slate-800 print:text-white border border-slate-700"
                    >
                      {skill.trim()}
                    </span>
                  ),
              )}
            </div>
          </div>
        </div>

        <div className="w-[68%] p-8 bg-white print:bg-white text-slate-800">
          {data.summary && (
            <section className="mb-6 print:break-inside-avoid">
              <h3 className="text-lg font-bold text-slate-900 border-b-2 border-slate-200 pb-1 mb-3 uppercase tracking-wide">
                Profile
              </h3>
              <p className="text-slate-600 text-justify">{data.summary}</p>
            </section>
          )}

          {data.experience.length > 0 && (
            <section className="mb-6">
              <h3 className="text-lg font-bold text-slate-900 border-b-2 border-slate-200 pb-1 mb-4 uppercase tracking-wide">
                Experience
              </h3>
              <div className="flex flex-col gap-5">
                {data.experience.map((exp) => (
                  <div key={exp.id} className="print:break-inside-avoid">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-bold text-slate-900 text-[15px]">
                        {exp.role}
                      </h4>
                      <span className="text-xs font-semibold text-blue-600 whitespace-nowrap bg-blue-50 px-2 py-0.5 rounded print:bg-transparent print:p-0">
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-slate-700 mb-2">
                      {exp.company}
                    </div>
                    <div className="text-slate-600 pl-4 border-l-2 border-slate-200 leading-relaxed">
                      {renderText(exp.description)}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {data.projects.length > 0 && (
            <section className="mb-6">
              <h3 className="text-lg font-bold text-slate-900 border-b-2 border-slate-200 pb-1 mb-4 uppercase tracking-wide">
                Projects
              </h3>
              <div className="flex flex-col gap-5">
                {data.projects.map((proj) => (
                  <div key={proj.id} className="print:break-inside-avoid">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-bold text-slate-900">{proj.name}</h4>
                      {proj.link && (
                        <span className="text-xs text-slate-500">
                          {proj.link}
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-semibold text-blue-600 mb-2">
                      {proj.techStack}
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {proj.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {data.education.length > 0 && (
            <section className="mb-6">
              <h3 className="text-lg font-bold text-slate-900 border-b-2 border-slate-200 pb-1 mb-4 uppercase tracking-wide">
                Education
              </h3>
              <div className="flex flex-col gap-4">
                {data.education.map((edu) => (
                  <div key={edu.id} className="print:break-inside-avoid">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-bold text-slate-900">{edu.degree}</h4>
                      <span className="text-xs font-medium text-slate-500">
                        {edu.year}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-slate-700 mb-1">
                      {edu.school}
                    </div>
                    <p className="text-slate-600 text-sm">{edu.details}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    );
  }

  if (template === "image-classic") {
    return (
      <div className="p-10 font-serif text-[13px] leading-relaxed text-gray-900 min-h-[29.7cm] bg-white">
        <header className="border-b-2 border-gray-900 pb-6 mb-6 flex justify-between items-center print:break-inside-avoid">
          <div className="flex items-center gap-6 w-2/3">
            {data.personal.profileImage && (
              <img
                src={data.personal.profileImage}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-2 border-gray-200 shadow-sm shrink-0"
                crossOrigin="anonymous"
              />
            )}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 uppercase tracking-wider mb-2">
                {data.personal.fullName}
              </h1>
              <h2 className="text-xl text-gray-700 italic">
                {data.personal.role}
              </h2>
            </div>
          </div>
          <div className="text-right text-xs text-gray-600 flex flex-col gap-1 font-sans w-1/3">
            {data.personal.email && <div>{data.personal.email}</div>}
            {data.personal.phone && <div>{data.personal.phone}</div>}
            {data.personal.location && <div>{data.personal.location}</div>}
            <div className="flex gap-2 justify-end mt-1 font-medium flex-wrap">
              {data.personal.github && <span>{data.personal.github}</span>}
              {data.personal.linkedin && (
                <span>| {data.personal.linkedin}</span>
              )}
            </div>
          </div>
        </header>

        {data.summary && (
          <section className="mb-6 print:break-inside-avoid">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">
              Summary
            </h3>
            <p className="text-gray-800 text-justify">{data.summary}</p>
          </section>
        )}

        {data.experience.length > 0 && (
          <section className="mb-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 border-b border-gray-200 pb-1">
              Professional Experience
            </h3>
            <div className="flex flex-col gap-6">
              {data.experience.map((exp) => (
                <div key={exp.id} className="print:break-inside-avoid">
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-bold text-lg text-gray-900">
                      {exp.role}
                    </h4>
                    <span className="text-sm font-sans italic text-gray-600">
                      {exp.startDate} – {exp.endDate}
                    </span>
                  </div>
                  <div className="text-md font-semibold text-gray-700 mb-2">
                    {exp.company}
                  </div>
                  <div className="text-gray-800 pl-4 font-sans text-sm">
                    {renderText(exp.description)}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {data.projects.length > 0 && (
          <section className="mb-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 border-b border-gray-200 pb-1">
              Selected Projects
            </h3>
            <div className="flex flex-col gap-5">
              {data.projects.map((proj) => (
                <div key={proj.id} className="print:break-inside-avoid">
                  <div className="flex justify-between items-baseline mb-1">
                    <div className="flex items-baseline gap-2">
                      <h4 className="font-bold text-gray-900">{proj.name}</h4>
                      <span className="text-xs font-sans text-gray-500 px-2 border-l border-gray-300">
                        {proj.techStack}
                      </span>
                    </div>
                    {proj.link && (
                      <span className="text-xs font-sans text-gray-500">
                        {proj.link}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-800 font-sans text-sm">
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="flex gap-8 print:break-inside-avoid">
          {data.education.length > 0 && (
            <section className="mb-6 w-1/2">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-3 border-b border-gray-200 pb-1">
                Education
              </h3>
              <div className="flex flex-col gap-4">
                {data.education.map((edu) => (
                  <div key={edu.id} className="print:break-inside-avoid">
                    <h4 className="font-bold text-gray-900">{edu.degree}</h4>
                    <div className="text-sm font-semibold text-gray-700">
                      {edu.school}
                    </div>
                    <div className="text-xs font-sans text-gray-500 mb-1">
                      {edu.year}
                    </div>
                    <p className="text-gray-800 font-sans text-xs">
                      {edu.details}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {data.skills && (
            <section className="mb-6 w-1/2 print:break-inside-avoid">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-3 border-b border-gray-200 pb-1">
                Core Competencies
              </h3>
              <div className="font-sans text-sm leading-loose text-gray-800">
                {data.skills.split(",").map((skill, i) => (
                  <React.Fragment key={i}>
                    <span className="font-medium inline-block">
                      {skill.trim()}
                    </span>
                    {i < data.skills.split(",").length - 1 && (
                      <span className="text-gray-300 mx-2">|</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    );
  }

  if (template === "image-creative") {
    return (
      <div className="font-sans text-[13px] leading-relaxed text-zinc-900 min-h-[29.7cm] bg-white">
        <header className="bg-slate-50 border-b border-slate-200 p-10 print:break-inside-avoid text-center flex flex-col items-center">
          {data.personal.profileImage && (
            <img
              src={data.personal.profileImage}
              alt="Profile"
              className="w-36 h-36 rounded-2xl object-cover mb-6 shadow-md border border-slate-200"
              crossOrigin="anonymous"
            />
          )}
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-black tracking-tight mb-2 text-slate-900">
              {data.personal.fullName}
            </h1>
            <div className="text-blue-600 text-xl font-bold mb-6">
              {data.personal.role}
            </div>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-600 font-medium bg-white px-6 py-3 rounded-full shadow-sm border border-slate-100">
              {data.personal.email && (
                <span className="flex items-center gap-2">
                  <Mail size={16} className="text-blue-500" />
                  {data.personal.email}
                </span>
              )}
              {data.personal.phone && (
                <span className="flex items-center gap-2">
                  <Phone size={16} className="text-blue-500" />
                  {data.personal.phone}
                </span>
              )}
              {data.personal.location && (
                <span className="flex items-center gap-2">
                  <MapPin size={16} className="text-blue-500" />
                  {data.personal.location}
                </span>
              )}
            </div>
          </div>
        </header>

        <div className="p-10 max-w-4xl mx-auto">
          {data.summary && (
            <section className="mb-8 print:break-inside-avoid text-center">
              <p className="text-slate-600 text-base leading-relaxed max-w-3xl mx-auto italic">
                "{data.summary}"
              </p>
            </section>
          )}

          {data.skills && (
            <section className="mb-10 print:break-inside-avoid">
              <h2 className="text-xl font-bold text-slate-900 mb-4 border-b-2 border-slate-100 pb-2">
                Technical Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.skills.split(",").map(
                  (skill, i) =>
                    skill.trim() && (
                      <span
                        key={i}
                        className="bg-blue-50 text-blue-700 print:bg-blue-50 px-4 py-1.5 rounded-md text-xs font-bold border border-blue-100"
                      >
                        {skill.trim()}
                      </span>
                    ),
                )}
              </div>
            </section>
          )}

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10">
            <div className="flex flex-col gap-8">
              {data.experience.length > 0 && (
                <section>
                  <h2 className="text-xl font-bold text-slate-900 mb-5 border-b-2 border-slate-100 pb-2">
                    Experience
                  </h2>
                  <div className="flex flex-col gap-6">
                    {data.experience.map((exp) => (
                      <div key={exp.id} className="print:break-inside-avoid">
                        <h3 className="font-bold text-slate-900 text-base">
                          {exp.role}
                        </h3>
                        <div className="text-blue-600 font-bold text-sm mb-1">
                          {exp.company}
                        </div>
                        <div className="text-slate-500 text-xs font-semibold mb-2">
                          {exp.startDate} – {exp.endDate}
                        </div>
                        <div className="text-slate-600 text-sm leading-relaxed border-l-2 border-slate-200 pl-3">
                          {renderText(exp.description)}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            <div className="flex flex-col gap-8">
              {data.projects.length > 0 && (
                <section>
                  <h2 className="text-xl font-bold text-slate-900 mb-5 border-b-2 border-slate-100 pb-2">
                    Projects
                  </h2>
                  <div className="flex flex-col gap-5">
                    {data.projects.map((proj) => (
                      <div
                        key={proj.id}
                        className="print:break-inside-avoid bg-slate-50 p-5 rounded-lg border border-slate-100"
                      >
                        <h3 className="font-bold text-slate-900 text-base mb-1">
                          {proj.name}
                        </h3>
                        <div className="text-blue-600 text-xs font-bold mb-2">
                          {proj.techStack}
                        </div>
                        <p className="text-slate-600 text-sm mb-2">
                          {proj.description}
                        </p>
                        {proj.link && (
                          <span className="text-slate-400 text-xs break-all">
                            {proj.link}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {data.education.length > 0 && (
                <section>
                  <h2 className="text-xl font-bold text-slate-900 mb-5 border-b-2 border-slate-100 pb-2">
                    Education
                  </h2>
                  <div className="flex flex-col gap-4">
                    {data.education.map((edu) => (
                      <div key={edu.id} className="print:break-inside-avoid">
                        <h3 className="font-bold text-slate-900 text-base">
                          {edu.degree}
                        </h3>
                        <div className="text-slate-700 font-medium text-sm mt-1">
                          {edu.school}
                        </div>
                        <div className="text-blue-600 text-xs font-bold my-1">
                          {edu.year}
                        </div>
                        <p className="text-slate-600 text-sm">{edu.details}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // DEFAULT: Minimalist (ATS Friendly)
  return (
    <div className="p-12 font-sans text-[13px] leading-relaxed text-zinc-900 min-h-[29.7cm] bg-white">
      {/* HEADER */}
      <header className="text-center print:break-inside-avoid mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 mb-1">
          {data.personal.fullName}
        </h1>
        <div className="text-sm text-zinc-700 font-medium mb-3">
          {data.personal.role}
        </div>
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-xs text-zinc-600">
          {data.personal.email && <span>{data.personal.email}</span>}
          {data.personal.phone && <span>• {data.personal.phone}</span>}
          {data.personal.location && <span>• {data.personal.location}</span>}
          {data.personal.website && <span>• {data.personal.website}</span>}
          {data.personal.github && <span>• {data.personal.github}</span>}
          {data.personal.linkedin && <span>• {data.personal.linkedin}</span>}
        </div>
      </header>

      {/* SUMMARY */}
      {data.summary && (
        <section className="mb-5 print:break-inside-avoid">
          <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-2">
            Summary
          </h2>
          <p className="text-zinc-700 text-justify">{data.summary}</p>
        </section>
      )}

      {/* SKILLS */}
      {data.skills && (
        <section className="mb-5 print:break-inside-avoid">
          <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-2">
            Skills
          </h2>
          <p className="text-zinc-700 leading-snug font-medium">
            {data.skills
              .split(",")
              .map((s) => s.trim())
              .join(" • ")}
          </p>
        </section>
      )}

      {/* EXPERIENCE */}
      {data.experience.length > 0 && (
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-3">
            Experience
          </h2>
          <div className="flex flex-col gap-4">
            {data.experience.map((exp) => (
              <div key={exp.id} className="print:break-inside-avoid">
                <div className="flex justify-between items-baseline mb-0.5">
                  <h3 className="font-bold text-zinc-900 text-[14px]">
                    {exp.company}
                  </h3>
                  <span className="text-zinc-600 text-xs font-semibold">
                    {exp.startDate} – {exp.endDate}
                  </span>
                </div>
                <div className="text-zinc-800 italic text-sm mb-1.5">
                  {exp.role}
                </div>
                <div className="text-zinc-700 pl-4 leading-normal list-disc list-inside space-y-1">
                  {renderText(exp.description)}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PROJECTS */}
      {data.projects.length > 0 && (
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-3">
            Projects
          </h2>
          <div className="flex flex-col gap-3">
            {data.projects.map((proj) => (
              <div key={proj.id} className="print:break-inside-avoid">
                <div className="flex justify-between items-baseline mb-0.5">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-zinc-900">{proj.name}</h3>
                    <span className="text-zinc-500 text-xs font-medium">
                      | {proj.techStack}
                    </span>
                  </div>
                  <span className="text-zinc-600 text-xs">{proj.link}</span>
                </div>
                <p className="text-zinc-700 text-sm leading-normal mt-1">
                  {proj.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* EDUCATION */}
      {data.education.length > 0 && (
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-3">
            Education
          </h2>
          <div className="flex flex-col gap-3">
            {data.education.map((edu) => (
              <div
                key={edu.id}
                className="print:break-inside-avoid flex justify-between items-start"
              >
                <div>
                  <h3 className="font-bold text-zinc-900">{edu.school}</h3>
                  <div className="text-zinc-800 text-sm">{edu.degree}</div>
                  <p className="text-zinc-600 text-xs mt-1">{edu.details}</p>
                </div>
                <span className="text-zinc-600 text-xs font-semibold whitespace-nowrap ml-4">
                  {edu.year}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
