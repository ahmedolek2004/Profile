import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, FileText, ArrowUp } from 'lucide-react';
import { getContact, getNavigation, getProfile } from '@/lib/content';

export function FooterSection() {
  const profile = getProfile();
  const contact = getContact();
  const navigation = getNavigation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-16 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="font-display text-xl font-bold text-sky-400">
              {profile.name || 'Ahmed Abdelhalim'}
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              {profile.title || 'Software Engineer & Full-Stack Developer'} focusing on modern web application architectures, React, TypeScript, and clean user experiences.
            </p>
            <div className="pt-2 text-xs font-mono text-slate-500">
              Built with React 18 · TypeScript · Tailwind CSS · Vite
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              {navigation.mainNav.slice(0, 6).map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-sky-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Contact */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 block">
              Connect & Resume
            </span>
            <div className="flex flex-col gap-2">
              <Link
                to="/resume"
                className="inline-flex items-center gap-2 text-xs text-sky-400 hover:underline font-medium"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View / Download Resume</span>
              </Link>
              <a
                href={`mailto:${contact.email || profile.email}`}
                className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-slate-200"
              >
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span>{contact.email || profile.email || 'ahmed.abdelhalim.dev@gmail.com'}</span>
              </a>
            </div>

            <div className="flex items-center gap-3 pt-4">
              {contact.links.github && (
                <a
                  href={contact.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-sky-400 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {contact.links.linkedin && (
                <a
                  href={contact.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-sky-400 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} {profile.name || 'Ahmed Abdelhalim'}. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3 text-sky-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
