import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Download, Mail, MapPin, ArrowLeft, Printer, Github, Linkedin } from 'lucide-react';
import { getContact, getProfile, getResume } from '@/lib/content';
import { PageShell } from '@/components/layouts/PageShell';
import { NavbarSection } from '@/components/sections/NavbarSection';
import { FooterSection } from '@/components/sections/FooterSection';

export function Resume() {
  const profile = getProfile();
  const contact = getContact();
  const resume = getResume();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <PageShell>
      <div className="print:hidden">
        <NavbarSection />
      </div>

      <main className="pt-28 print:pt-0 pb-24 px-4 min-h-screen">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Top Actions Header (Hidden when printing) */}
          <div className="flex flex-wrap items-center justify-between gap-4 print:hidden">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-sky-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </Link>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-medium transition-colors flex items-center gap-2"
              >
                <Printer className="w-4 h-4 text-sky-400" />
                <span>Print Resume</span>
              </button>

              {profile.resumeUrl ? (
                <a
                  href={profile.resumeUrl}
                  download
                  className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-semibold transition-colors flex items-center gap-2 shadow-lg shadow-sky-500/20"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </a>
              ) : (
                <span className="px-4 py-2 rounded-xl bg-slate-800/80 text-slate-400 text-xs font-mono">
                  Resume PDF will be added
                </span>
              )}
            </div>
          </div>

          {/* Printable Resume Document Paper */}
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/90 border border-slate-800/80 shadow-2xl text-slate-100 print:bg-white print:text-black print:p-0 print:border-none print:shadow-none space-y-8 font-sans">
            {/* Header */}
            <div className="border-b border-slate-800 print:border-slate-300 pb-6 space-y-3">
              <h1 className="text-3xl sm:text-4xl font-bold font-display text-slate-100 print:text-black">
                {profile.name || 'Ahmed Abdelhalim'}
              </h1>
              <p className="text-base sm:text-lg font-semibold text-sky-400 print:text-slate-800">
                {profile.title || 'Software Engineer & Full-Stack Developer'}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 print:text-slate-600 pt-2">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-sky-400 print:text-slate-700" />
                  {contact.email || profile.email || 'ahmed.abdelhalim.dev@gmail.com'}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-400 print:text-slate-700" />
                  {contact.location || profile.location || 'Alexandria, Egypt'}
                </span>
                {contact.links.github && (
                  <span className="flex items-center gap-1.5">
                    <Github className="w-3.5 h-3.5 text-sky-400 print:text-slate-700" />
                    {contact.links.github}
                  </span>
                )}
                {contact.links.linkedin && (
                  <span className="flex items-center gap-1.5">
                    <Linkedin className="w-3.5 h-3.5 text-sky-400 print:text-slate-700" />
                    {contact.links.linkedin}
                  </span>
                )}
              </div>
            </div>

            {/* Summary */}
            {resume.summary && (
              <div className="space-y-2">
                <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-sky-400 print:text-black border-b border-slate-800/80 print:border-slate-300 pb-1">
                  Professional Summary
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed">
                  {resume.summary}
                </p>
              </div>
            )}

            {/* Structured Resume Sections */}
            {resume.sections &&
              resume.sections.map((section) => (
                <div key={section.id} className="space-y-4">
                  <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-sky-400 print:text-black border-b border-slate-800/80 print:border-slate-300 pb-1">
                    {section.title}
                  </h2>

                  <div className="space-y-4">
                    {section.items.map((item, idx) => (
                      <div key={idx} className="space-y-1.5">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="font-bold text-slate-100 print:text-black text-sm sm:text-base">
                            {item.title}
                          </h3>
                          {item.period && (
                            <span className="text-xs font-mono text-slate-400 print:text-slate-600">
                              {item.period}
                            </span>
                          )}
                        </div>

                        {item.subtitle && (
                          <p className="text-xs text-sky-400 print:text-slate-700 font-medium">
                            {item.subtitle}
                          </p>
                        )}

                        {item.description && (
                          <p className="text-xs text-slate-300 print:text-slate-800 leading-relaxed">
                            {item.description}
                          </p>
                        )}

                        {item.highlights && item.highlights.length > 0 && (
                          <ul className="list-disc list-inside space-y-1 pt-1 text-xs text-slate-300 print:text-slate-800">
                            {item.highlights.map((h, hIdx) => (
                              <li key={hIdx}>{h}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </main>

      <div className="print:hidden">
        <FooterSection />
      </div>
    </PageShell>
  );
}
