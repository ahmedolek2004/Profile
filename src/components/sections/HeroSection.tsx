import { Link } from 'react-router-dom';
import { Github, Linkedin, ArrowRight, Download, Mail } from 'lucide-react';
import { getCalculatedStats, getContact, getProfile } from '@/lib/content';
import { ProfileImagePlaceholder } from '@/components/placeholders';

export function HeroSection() {
  const profile = getProfile();
  const contact = getContact();
  const stats = getCalculatedStats();
  const hasPhoto = Boolean(profile.profilePhoto?.trim());

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-28 pb-16 px-4 overflow-hidden">
      {/* Dynamic Glow Mesh Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col items-center text-center">
        {/* Availability Badge */}
        {profile.availability.length > 0 && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-medium mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500" />
            </span>
            <span>{profile.availability[0]}</span>
          </div>
        )}

        {/* Profile Image / Placeholder */}
        <div className="mb-8 relative">
          {hasPhoto ? (
            <div className="relative p-1 rounded-full bg-gradient-to-b from-sky-400 to-indigo-600 shadow-xl shadow-sky-500/10">
              <img
                src={profile.profilePhoto}
                alt={profile.name || 'Ahmed Abdelhalim'}
                width={144}
                height={144}
                loading="eager"
                className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover border-2 border-slate-950"
              />
            </div>
          ) : (
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-slate-900 border-2 border-sky-500/30 p-2 flex items-center justify-center shadow-xl shadow-sky-500/10">
              <ProfileImagePlaceholder />
            </div>
          )}
        </div>

        {/* Main Header */}
        <h1 className="text-4xl sm:text-6xl font-bold font-display tracking-tight text-slate-100 mb-4 max-w-3xl leading-[1.15]">
          Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-sky-500">{profile.name || 'Ahmed Abdelhalim'}</span>
        </h1>

        <h2 className="text-lg sm:text-2xl font-semibold text-sky-400 mb-6 font-sans">
          {profile.title || 'Software Engineer & Full-Stack Developer'}
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed mb-10 font-sans">
          {profile.biography ||
            'I build responsive web applications with React and modern frontend tooling, focusing on reusable components, clean architecture, and practical user experiences.'}
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#projects"
            className="px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-sky-500/20 flex items-center gap-2 group"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <Link
            to="/resume"
            className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-semibold text-sm transition-all flex items-center gap-2"
          >
            <Download className="w-4 h-4 text-sky-400" />
            <span>View Resume</span>
          </Link>

          <a
            href="#contact"
            className="px-6 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800/80 text-slate-300 font-medium text-sm transition-all flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-slate-400" />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Social Accounts */}
        <div className="flex items-center gap-4 mb-16">
          {contact.links.github && (
            <a
              href={contact.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-sky-400 transition-all hover:scale-105"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {contact.links.linkedin && (
            <a
              href={contact.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-sky-400 transition-all hover:scale-105"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
        </div>

        {/* Dynamic Calculated Stats Grid */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center p-3">
              <span className="text-2xl sm:text-3xl font-bold font-mono text-sky-400 mb-1">{stat.value}</span>
              <span className="text-xs text-slate-400 font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
