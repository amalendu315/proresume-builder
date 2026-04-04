"use client";
import React, { useState, useEffect } from "react";
import {
  MonitorSmartphone,
  Github,
  FileJson,
  Rocket,
  ExternalLink,
  ChevronRight ,
  Code2,
  LayoutTemplate,
  PlayCircle,
  Menu,
  X,
  ArrowLeft,
  CheckCircle2,
  BookOpen,
  Server,
} from "lucide-react";
import Header from "@/components/shared/header";
import Link from "next/link";



const portfolioTemplates = [
  // DESIGN & VISUAL ARTS
  {
    id: "design-gallery",
    category: "Design & Visual Arts",
    title: "The Masonry Gallery",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    shortDescription:
      "Let your visuals do the talking with this edge-to-edge image gallery layout.",
    longDescription:
      "For designers, the work is everything. The Masonry Gallery template removes all distracting UI elements and puts your high-resolution mockups, wireframes, and final designs front and center. Clicking an image expands it into a beautiful, distraction-free modal.",
    features: [
      "Fluid masonry grid layout",
      "High-res image optimization",
      "Smooth image lightbox",
      "Minimalist navigation",
    ],
    previewUrl: "#",
    repoUrl: "https://github.com/your-username/template-design-gallery",
  },
  {
    id: "design-casestudy",
    category: "Design & Visual Arts",
    title: "Case Study Focus",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    shortDescription:
      "A text-and-image balanced layout designed specifically for deep-dive UX case studies.",
    longDescription:
      "UX is about the process, not just the final product. This template is structured to help you tell the story of your projects. It includes pre-built sections for 'The Problem', 'Research', 'Wireframes', and 'The Solution', formatted with beautiful editorial typography.",
    features: [
      "Editorial typography scale",
      "Pre-structured case study pages",
      "Sticky table of contents",
      "Before/After image sliders",
    ],
    previewUrl: "#",
    repoUrl: "https://github.com/your-username/template-design-casestudy",
  },
  {
    id: "design-brutalist",
    category: "Design & Visual Arts",
    title: "Neo-Brutalist",
    image:
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    shortDescription:
      "Bold, raw, and high-contrast. For designers who want to make a loud statement.",
    longDescription:
      "Break the rules safely. The Neo-Brutalist template uses stark contrasts, large bold typography, and visible grid lines to create a highly trendy, memorable portfolio. Ideal for brand designers, edgy product designers, and creative directors.",
    features: [
      "High contrast color palette",
      "Oversized typography",
      "Visible structural borders",
      "Micro-interactions",
    ],
    previewUrl: "#",
    repoUrl: "https://github.com/your-username/template-design-brutalist",
  },

  // TECH & DEVELOPMENT
  {
    id: "dev-terminal",
    category: "Tech & Development",
    title: "Terminal Minimalist",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    shortDescription:
      "A dark-themed, code-centric portfolio perfect for backend and full-stack developers.",
    longDescription:
      "The Terminal Minimalist template strips away the fluff and focuses entirely on your code, contributions, and technical prowess. Featuring a dark-mode-first design, monospaced typography, and a layout inspired by modern code editors, this template tells recruiters immediately that you are a serious developer.",
    features: [
      "Dark mode out of the box",
      "Dedicated GitHub contribution graph section",
      "Syntax-highlighted skill showcase",
      "Lightning fast load times",
    ],
    previewUrl: "#",
    repoUrl: "https://github.com/your-username/template-dev-terminal",
  },
  {
    id: "dev-clean",
    category: "Tech & Development",
    title: "Clean Architecture",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    shortDescription:
      "Bright, airy, and highly professional layout for frontend and enterprise developers.",
    longDescription:
      "If you are applying to enterprise companies or design-conscious tech firms, Clean Architecture is your best bet. It utilizes abundant whitespace, clean sans-serif typography, and organized grid layouts to present your complex projects in a highly readable format.",
    features: [
      "Bento-box project grid",
      "Interactive tech stack hover effects",
      "Prominent contact CTA",
      "SEO Optimized",
    ],
    previewUrl: "#",
    repoUrl: "https://github.com/your-username/template-dev-clean",
  },
  {
    id: "dev-interactive",
    category: "Tech & Development",
    title: "The 3D Canvas",
    image:
      "https://images.unsplash.com/photo-1618477388954-7852f32655cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    shortDescription:
      "Show off your creative coding skills with this interactive, WebGL-powered portfolio.",
    longDescription:
      "Stand out from the crowd of static websites. The 3D Canvas integrates lightweight Three.js elements to create a memorable, interactive experience without sacrificing performance or accessibility. Perfect for creative developers and creative technologists.",
    features: [
      "Interactive 3D hero section",
      "Scroll-triggered animations",
      "Custom cursor effects",
      "Dynamic data loading",
    ],
    previewUrl: "#",
    repoUrl: "https://github.com/your-username/template-dev-3d",
  },

  // WRITING & CONTENT
  {
    id: "content-editorial",
    category: "Writing & Content",
    title: "The Digital Magazine",
    image:
      "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    shortDescription:
      "Content-first design perfect for journalists, authors, and content strategists.",
    longDescription:
      "If your strength is in words, your portfolio should reflect that. This template is inspired by premium digital magazines. It offers a beautiful reading experience, perfect for hosting long-form articles, essays, and published clips.",
    features: [
      "Distraction-free reading layout",
      "Rich text formatting options",
      "Elegant serif typography",
      "Category tagging system",
    ],
    previewUrl: "#",
    repoUrl: "https://github.com/your-username/template-content-editorial",
  },
  {
    id: "content-copywriter",
    category: "Writing & Content",
    title: "The Conversion Copy",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead27d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    shortDescription:
      "A high-converting portfolio designed to showcase copywriting ROI and ad copy.",
    longDescription:
      "Built specifically for direct response and UX copywriters. This template allows you to display the 'Before and After' of your copy, highlight conversion metrics, and embed PDF samples of technical documentation seamlessly.",
    features: [
      "Before/After text comparisons",
      "Metric highlight blocks",
      "PDF embedding support",
      "Client logo carousel",
    ],
    previewUrl: "#",
    repoUrl: "https://github.com/your-username/template-content-copywriter",
  },
  {
    id: "content-minimalist",
    category: "Writing & Content",
    title: "The Typewriter",
    image:
      "https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    shortDescription:
      "A brutally simple, ultra-minimalist layout that puts absolute focus on your writing.",
    longDescription:
      "No flashy animations, no massive header images. The Typewriter template uses beautiful typography and plenty of whitespace to let your words breathe. Perfect for authors and technical writers.",
    features: [
      "Ultra-fast loading",
      "Light/Dark mode toggle",
      "Print-friendly CSS",
      "RSS feed generation",
    ],
    previewUrl: "#",
    repoUrl: "https://github.com/your-username/template-content-minimalist",
  },

  // MEDIA & ENTERTAINMENT
  {
    id: "media-cinematic",
    category: "Media & Entertainment",
    title: "Cinematic Showreel",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    shortDescription:
      "An immersive, video-first portfolio designed for filmmakers, actors, and videographers.",
    longDescription:
      "Make an instant impact. This template features a full-screen, autoplaying video background to immediately grab attention. It seamlessly integrates with Vimeo and YouTube to host your high-res showreels without slowing down the site.",
    features: [
      "Autoplaying video hero",
      "Lazy-loaded video embeds",
      "Dark cinematic theme",
      "Credits & Cast list formatting",
    ],
    previewUrl: "#",
    repoUrl: "https://github.com/your-username/template-media-cinematic",
  },
  {
    id: "media-lookbook",
    category: "Media & Entertainment",
    title: "The Lookbook",
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    shortDescription:
      "A stylish, grid-based layout perfect for models, makeup artists, and fashion photographers.",
    longDescription:
      "Designed to look like a high-end fashion editorial. The Lookbook organizes your photoshoots into cohesive collections, allowing visitors to easily flip through your different styles, campaigns, and commercial work.",
    features: [
      "Collection-based galleries",
      "Smooth infinite scroll",
      "Instagram feed integration",
      "Downloadable comp card/press kit",
    ],
    previewUrl: "#",
    repoUrl: "https://github.com/your-username/template-media-lookbook",
  },
  {
    id: "media-horizontal",
    category: "Media & Entertainment",
    title: "Studio Horizontal",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    shortDescription:
      "A unique horizontal scrolling experience tailored for professional photographers.",
    longDescription:
      "Break away from the standard vertical scroll. This template allows users to pan sideways through your photo series, mimicking the experience of walking through an art gallery. Perfect for storytelling through photography.",
    features: [
      "Horizontal scroll mechanics",
      "Full-height image optimization",
      "EXIF data hover states",
      "Client proofing portal link",
    ],
    previewUrl: "#",
    repoUrl: "https://github.com/your-username/template-media-horizontal",
  },

  // ARCHITECTURE & SPACE
  {
    id: "arch-blueprint",
    category: "Architecture & Space",
    title: "The Blueprint",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    shortDescription:
      "A structured, geometric layout ideal for architects and urban planners.",
    longDescription:
      "Show the process from draft to reality. This template provides dedicated sections to display early sketches, AutoCAD blueprints, and final structural photographs side-by-side to highlight your comprehensive vision.",
    features: [
      "Geometric grid layout",
      "Draft vs Reality comparison slider",
      "Project specs data tables",
      "Clean, structural typography",
    ],
    previewUrl: "#",
    repoUrl: "https://github.com/your-username/template-arch-blueprint",
  },
  {
    id: "arch-spatial",
    category: "Architecture & Space",
    title: "Spatial Immersion",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    shortDescription:
      "A highly visual template focused on large-scale interior and exterior renderings.",
    longDescription:
      "Let the space speak for itself. Featuring edge-to-edge photography and support for 360-degree panoramic embeds, this template drops potential clients right into the spaces you have designed.",
    features: [
      "Edge-to-edge photography",
      "360-degree viewer integration",
      "Subtle parallax scrolling",
      "Minimalist overlay menus",
    ],
    previewUrl: "#",
    repoUrl: "https://github.com/your-username/template-arch-spatial",
  },
  {
    id: "arch-textures",
    category: "Architecture & Space",
    title: "Materials & Light",
    image:
      "https://images.unsplash.com/photo-1600607687931-ce8e11a12931?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    shortDescription:
      "Detail-oriented layout designed specifically for interior designers and decorators.",
    longDescription:
      "Interior design is all about the details. This template allows you to break down your projects into mood boards, color palettes, and material selections alongside the final staged room photographs.",
    features: [
      "Interactive mood board layouts",
      "Color palette extraction",
      "Before/After staging sliders",
      "Vendor/Supplier credit lists",
    ],
    previewUrl: "#",
    repoUrl: "https://github.com/your-username/template-arch-textures",
  },

  // MARKETING & STRATEGY
  {
    id: "marketing-funnel",
    category: "Marketing & Strategy",
    title: "The Conversion Funnel",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    shortDescription:
      "Treat yourself like a product. A landing-page style portfolio built to convert recruiters.",
    longDescription:
      "Marketing is about results. This template is structured exactly like a high-converting SaaS landing page. It guides the recruiter through your value proposition, highlights your highest ROI campaigns as 'features', and uses strong Call-to-Action buttons to drive them to contact you.",
    features: [
      "Hero section with clear value prop",
      "Metrics-highlighting counters",
      "Testimonial carousel",
      "Floating sticky CTA",
    ],
    previewUrl: "#",
    repoUrl: "https://github.com/your-username/template-marketing-funnel",
  },
  {
    id: "marketing-social",
    category: "Marketing & Strategy",
    title: "The Campaign Grid",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    shortDescription:
      "A highly visual, vibrant grid layout designed for social media and PR managers.",
    longDescription:
      "Social media managers need to show visual impact alongside engagement metrics. The Campaign Grid mimics the feel of a curated social feed but allows you to flip each 'post' to reveal the strategy and analytics behind the campaign.",
    features: [
      "Social-feed inspired masonry",
      "Flip-card analytics reveal",
      "Video/Reel support",
      "Vibrant, customizable gradients",
    ],
    previewUrl: "#",
    repoUrl: "https://github.com/your-username/template-marketing-social",
  },
  {
    id: "marketing-growth",
    category: "Marketing & Strategy",
    title: "Growth Dashboard",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    shortDescription:
      "A data-driven layout designed to showcase SEO rankings, traffic growth, and ROI.",
    longDescription:
      "For the analytical marketer. This template integrates beautiful, interactive charts and graphs to visually demonstrate the business growth you've achieved. Perfect for performance marketers, SEO specialists, and growth hackers.",
    features: [
      "Interactive data visualizations",
      "Timeline growth charts",
      "Case study metric highlights",
      "Clean, corporate aesthetic",
    ],
    previewUrl: "#",
    repoUrl: "https://github.com/your-username/template-marketing-growth",
  },

  // CONSULTING & EVENTS
  {
    id: "consult-keynote",
    category: "Consulting & Events",
    title: "The Keynote Speaker",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    shortDescription:
      "A commanding layout built for public speakers, thought leaders, and coaches.",
    longDescription:
      "Establish immediate authority. This template focuses heavily on your personal brand, featuring large areas for stage photography, embedded speaking sizzle reels, and a streamlined booking form for event organizers.",
    features: [
      "Prominent booking CTA",
      "Video sizzle reel section",
      "Topic/Workshop breakdown cards",
      "Press & Media feature logos",
    ],
    previewUrl: "#",
    repoUrl: "https://github.com/your-username/template-consult-keynote",
  },
  {
    id: "consult-corporate",
    category: "Consulting & Events",
    title: "Corporate Trust",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    shortDescription:
      "A clean, highly professional design for business consultants and strategists.",
    longDescription:
      "When consulting for B2B clients, trust is everything. This template is designed to look like a boutique agency website. It relies on crisp typography, structured service offerings, and prominent client testimonials to build credibility.",
    features: [
      "Service offering grids",
      "In-depth case study pages",
      "Prominent testimonial blocks",
      "Professional, muted color palettes",
    ],
    previewUrl: "#",
    repoUrl: "https://github.com/your-username/template-consult-corporate",
  },
  {
    id: "consult-events",
    category: "Consulting & Events",
    title: "Event Highlight",
    image:
      "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    shortDescription:
      "A vibrant, celebratory portfolio for event planners and experiential designers.",
    longDescription:
      "Showcase the magic of your events. This template features expansive photo galleries, timeline breakdowns of event execution, and sections to highlight vendor collaborations and guest experiences.",
    features: [
      "Dynamic photo carousels",
      "Event stat counters (guests, scale)",
      "Vendor partner links",
      "Festive, customizable styling",
    ],
    previewUrl: "#",
    repoUrl: "https://github.com/your-username/template-consult-events",
  },
];

const categories = [
  "All",
  "Design & Visual Arts",
  "Tech & Development",
  "Writing & Content",
  "Media & Entertainment",
  "Architecture & Space",
  "Marketing & Strategy",
  "Consulting & Events",
];
export default function PortfoliosPage() {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // State to handle which template detail page is open. Null means show the grid.
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  // Scroll to top when a template is selected
  useEffect(() => {
    if (selectedTemplate) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [selectedTemplate]);

  const filteredTemplates =
    selectedCategory === "All"
      ? portfolioTemplates
      : portfolioTemplates.filter((t) => t.category === selectedCategory);

  const steps = [
    {
      id: 1,
      icon: <MonitorSmartphone size={24} />,
      title: "Choose & Preview",
      desc: "Browse our collection of developer-grade portfolios below. Find the layout that matches your profession.",
    },
    {
      id: 2,
      icon: <Rocket size={24} />,
      title: "Click Deploy",
      desc: "Click 'Deploy to Vercel'. Vercel will automatically copy the website code into your own free GitHub account.",
    },
    {
      id: 3,
      icon: <FileJson size={24} />,
      title: "Edit data.js",
      desc: "Open the data.js file in your new GitHub repo. Just replace our placeholder text with your name and links.",
    },
    {
      id: 4,
      icon: <Server size={24} />,
      title: "Auto-Updates",
      desc: "Hit 'Commit' in GitHub. Vercel detects the change and automatically updates your live website in seconds!",
    },
  ];

  // ==========================================
  // VIEW 1: THE TEMPLATE DETAIL PAGE
  // ==========================================
  if (selectedTemplate) {
    return (
      <div className="min-h-screen bg-zinc-50 font-sans flex flex-col pb-20">
        <Header />
        <main className="flex-grow pt-24 px-6 md:px-12 max-w-6xl mx-auto w-full animate-in slide-in-from-right-8 duration-500">
          {/* Back Navigation */}
          <button
            onClick={() => setSelectedTemplate(null)}
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 font-medium mb-8 transition-colors"
          >
            <ArrowLeft size={18} /> Back to templates
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left Column: Image & Details */}
            <div className="lg:col-span-2 space-y-8">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 shadow-lg">
                <img
                  src={selectedTemplate.image}
                  alt={selectedTemplate.title}
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>

              <div>
                <div className="inline-block px-3 py-1 bg-zinc-200 text-zinc-700 text-xs font-bold uppercase tracking-wider rounded-md mb-4">
                  {selectedTemplate.category}
                </div>
                <h1 className="text-4xl font-extrabold text-zinc-900 mb-4">
                  {selectedTemplate.title}
                </h1>
                <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                  {selectedTemplate.longDescription}
                </p>

                <h3 className="text-lg font-bold text-zinc-900 mb-4 border-b border-zinc-200 pb-2">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {selectedTemplate.features.map((feat, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-zinc-700"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-blue-500 shrink-0 mt-0.5"
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: The "How To" Guide */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-zinc-200 shadow-sm relative overflow-hidden">
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10 -mt-20 -mr-20"></div>

                <h2 className="text-2xl font-bold text-zinc-900 mb-2">
                  How to use this template
                </h2>
                <p className="text-zinc-500 mb-8">
                  Follow these simple steps to claim this website as your own.
                  No advanced coding required.
                </p>

                <div className="space-y-8 mb-10 relative before:absolute before:inset-0 before:ml-[1.125rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-zinc-200 before:via-zinc-200 before:to-transparent">
                  {/* Step 1 */}
                  <div className="relative flex items-start gap-6">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 shadow-md ring-4 ring-white z-10">
                      1
                    </div>
                    <div className="pt-2">
                      <h4 className="text-lg font-bold text-zinc-900 mb-2">
                        Deploy to Vercel
                      </h4>
                      <p className="text-zinc-600 leading-relaxed text-sm mb-4">
                        Click the primary deploy button below. Vercel will ask
                        you to log in with GitHub. Once authorized, Vercel will
                        automatically copy this exact website's code into a
                        private repository on your GitHub account and host it
                        live for free!
                      </p>
                      <a
                        href={`https://vercel.com/new/clone?repository-url=${encodeURIComponent(selectedTemplate.repoUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-zinc-900 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-zinc-800 transition-all shadow-sm"
                      >
                        <Rocket size={16} /> Deploy via Vercel
                      </a>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative flex items-start gap-6">
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-zinc-300 text-zinc-500 font-bold flex items-center justify-center shrink-0 ring-4 ring-white z-10">
                      2
                    </div>
                    <div className="pt-2">
                      <h4 className="text-lg font-bold text-zinc-900 mb-2">
                        Find the{" "}
                        <code className="bg-zinc-100 text-pink-600 px-1.5 py-0.5 rounded">
                          data.js
                        </code>{" "}
                        file
                      </h4>
                      <p className="text-zinc-600 leading-relaxed text-sm">
                        Go to your GitHub profile and open the newly created
                        repository. Navigate to the{" "}
                        <strong>
                          <code className="text-zinc-800">src</code>
                        </strong>{" "}
                        folder, and click on the{" "}
                        <strong>
                          <code className="text-zinc-800">data.js</code>
                        </strong>{" "}
                        file. This file acts as the database for your website.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative flex items-start gap-6">
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-zinc-300 text-zinc-500 font-bold flex items-center justify-center shrink-0 ring-4 ring-white z-10">
                      3
                    </div>
                    <div className="pt-2">
                      <h4 className="text-lg font-bold text-zinc-900 mb-2">
                        Edit and Commit
                      </h4>
                      <p className="text-zinc-600 leading-relaxed text-sm">
                        Click the pencil icon (✏️) in GitHub to edit the file.
                        Replace the placeholder name, links, and project
                        descriptions with your own actual data. Scroll to the
                        bottom and click the green{" "}
                        <strong>"Commit changes"</strong> button.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="relative flex items-start gap-6">
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-zinc-300 text-zinc-500 font-bold flex items-center justify-center shrink-0 ring-4 ring-white z-10">
                      4
                    </div>
                    <div className="pt-2">
                      <h4 className="text-lg font-bold text-zinc-900 mb-2">
                        Watch the Magic Happen
                      </h4>
                      <p className="text-zinc-600 leading-relaxed text-sm">
                        That's it! Because you connected Vercel in Step 1,
                        Vercel is constantly watching your GitHub. The moment
                        you clicked "Commit", Vercel started rebuilding your
                        site. Within 30 seconds, your live URL will reflect all
                        your personal information!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <BookOpen size={24} className="text-blue-600 shrink-0" />
                    <div>
                      <h4 className="font-bold text-blue-900 text-sm">
                        Need visual help?
                      </h4>
                      <p className="text-xs text-blue-700 mt-0.5">
                        Watch our 2-minute video guide.
                      </p>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="w-full sm:w-auto text-center bg-white border border-blue-200 text-blue-700 px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-600 hover:text-white transition-colors shadow-sm"
                  >
                    Watch Tutorial
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // ==========================================
  // VIEW 2: THE MAIN GRID PAGE
  // ==========================================
  return (
    <div className="min-h-screen bg-zinc-50 font-sans selection:bg-blue-100 selection:text-blue-900 flex flex-col">
      <Header />

      <main className="grow pt-24 pb-20">
        {/* HERO SECTION */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-sm font-semibold text-blue-700 mb-6">
            <Code2 size={16} />
            <span>Developer-Grade Portfolios</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900 mb-6">
            Own your corner of the{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">
              internet.
            </span>
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Stop renting space on rigid portfolio builders. Grab our open-source
            portfolio templates, customize your data.js file, and host them
            forever for free on Vercel.
          </p>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section className="px-6 md:px-12 max-w-6xl mx-auto mb-24">
          <div className="bg-white rounded-3xl border border-zinc-200 shadow-sm p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">
                How it works (It's easier than you think)
              </h2>
              <p className="text-zinc-500">
                You don't need to be a senior developer to launch these. Just
                follow 4 simple steps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              <div className="hidden lg:block absolute top-10 left-12 right-12 h-0.5 bg-zinc-100 -z-10"></div>

              {steps.map((step) => (
                <div
                  key={step.id}
                  className="flex flex-col items-center text-center group cursor-default"
                  onMouseEnter={() => setActiveStep(step.id)}
                >
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-300 shadow-sm
                    ${
                      activeStep === step.id
                        ? "bg-blue-600 text-white scale-110 shadow-blue-500/30 ring-4 ring-blue-50"
                        : "bg-white text-zinc-400 border border-zinc-200"
                    }`}
                  >
                    {step.icon}
                  </div>
                  <div className="bg-zinc-100 text-zinc-500 text-xs font-bold px-2 py-1 rounded mb-3 uppercase tracking-wider">
                    Step {step.id}
                  </div>
                  <h3
                    className={`text-lg font-bold mb-3 transition-colors ${activeStep === step.id ? "text-zinc-900" : "text-zinc-700"}`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed max-w-[200px]">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TEMPLATES GRID WITH FILTERS */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
            <h2 className="text-3xl font-bold text-zinc-900">
              Select a Template
            </h2>

            {/* Custom Category Filter Tabs */}
            <div className="flex overflow-x-auto pb-2 md:pb-0 hide-scrollbar gap-2 custom-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-zinc-900 text-white shadow-md"
                      : "bg-white text-zinc-600 border border-zinc-200 hover:bg-zinc-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map((template) => (
              <div
                key={template.id}
                className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col group"
              >
                {/* Image Preview */}
                <div className="aspect-16/10 overflow-hidden relative border-b border-zinc-100">
                  <img
                    src={template.image}
                    alt={template.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur text-zinc-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm border border-zinc-200/50">
                      {template.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">
                    {template.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-6 flex-grow">
                    {template.shortDescription}
                  </p>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={"/coming-soon"}
                    //   target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-zinc-50 text-zinc-700 border border-zinc-200 px-3 py-2.5 rounded-xl font-bold text-sm hover:bg-zinc-100 hover:text-zinc-900 transition-all"
                    >
                      <ExternalLink size={16} /> Live Preview
                    </a>
                    <Link
                    //   onClick={}
                    href={"/coming-soon"}
                      className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-3 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-700 transition-all shadow-sm"
                    >
                      Use Template <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredTemplates.length === 0 && (
            <div className="text-center py-20 text-zinc-500">
              No templates found for this category yet. We're adding more soon!
            </div>
          )}
        </section>
      </main>

      {/* Hide scrollbar styles for the filter tabs */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `,
        }}
      />
    </div>
  );
}
