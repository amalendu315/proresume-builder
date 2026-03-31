import React from "react";
import {
  FileText,
  CheckCircle2,
  Gift,
  AlertTriangle,
  UserCheck,
  ShieldAlert,
} from "lucide-react";
import Header from "@/components/shared/header";


const TermsPage = () => {
  const terms = [
    {
      icon: CheckCircle2,
      title: "1. Acceptance of Terms",
      content:
        "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this service.",
    },
    {
      icon: Gift,
      title: "2. Free Usage & Open Source",
      content:
        "The resume builder provided on this website is completely free to use. The underlying code is open-source and provided under the MIT License. You are strictly free to use the generated resumes for any personal or commercial career-seeking purposes.",
    },
    {
      icon: AlertTriangle,
      title: "3. Disclaimer of Warranties",
      content:
        'The service is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, expressed or implied, regarding the continuous availability, reliability, or accuracy of the website. We do not guarantee that using these templates will result in employment.',
    },
    {
      icon: UserCheck,
      title: "4. User Responsibilities",
      content:
        "You are solely responsible for the accuracy and legality of the information you include in your resume. We are not responsible for any typos, misrepresentations, or consequences resulting from the distribution of documents created using our tool.",
    },
    {
      icon: ShieldAlert,
      title: "5. Limitation of Liability",
      content:
        "In no event shall the developers or contributors of DevPortfolio be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.",
    },
  ];

  return (
    <>
      <Header />
      <div className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto animate-in fade-in duration-700">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-sm font-semibold text-blue-700 mb-6">
            <FileText size={16} />
            <span>Terms of Service</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 mb-6">
            Terms & <span className="text-blue-600">Conditions.</span>
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

        {/* Terms List */}
        <div className="space-y-6 max-w-3xl mx-auto">
          {terms.map((term, idx) => (
            <div
              key={idx}
              className="bg-white p-6 md:p-8 rounded-3xl border border-zinc-200 shadow-sm flex flex-col sm:flex-row gap-6 group hover:border-blue-200 transition-colors"
            >
              <div className="shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 text-zinc-600 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-all duration-300">
                  <term.icon size={28} />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-zinc-900 mb-2">
                  {term.title}
                </h2>
                <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                  {term.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-12 text-center">
          <p className="text-zinc-500 text-sm">
            If you have any questions regarding these terms, please review our
            Open Source repository or contact us via the main website.
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsPage;