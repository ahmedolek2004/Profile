import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Layers,
  Database,
  Server,
  KeyRound,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  TrendingUp,
  Cpu,
  ArrowRight,
} from 'lucide-react';
import { getProjectBySlug, getProjects } from '@/lib/content';
import { PageShell } from '@/components/layouts/PageShell';
import { NavbarSection } from '@/components/sections/NavbarSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { LaptopMockupPlaceholder, ArchitecturePlaceholder, DatabasePlaceholder } from '@/components/placeholders';

export function Project() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = id ? getProjectBySlug(id) : undefined;
  const allProjects = getProjects();
  const relatedProjects = allProjects.filter((p) => p.slug !== id).slice(0, 2);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <PageShell>
        <NavbarSection />
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-28">
          <Layers className="w-12 h-12 text-slate-500 mb-4" />
          <h1 className="text-2xl font-bold text-slate-100 mb-2">Case Study Not Found</h1>
          <p className="text-sm text-slate-400 mb-6">The requested project case study could not be located.</p>
          <Link
            to="/#projects"
            className="px-4 py-2 rounded-xl bg-sky-500 text-slate-950 font-semibold text-xs hover:bg-sky-400 transition-colors"
          >
            Back to Projects
          </Link>
        </div>
        <FooterSection />
      </PageShell>
    );
  }

  return (
    <PageShell>
      <NavbarSection />
      <main className="pt-28 pb-24 px-4 min-h-screen">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Back button */}
          <div>
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-sky-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Projects</span>
            </button>
          </div>

          {/* 1. Hero Section */}
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-mono font-semibold border border-sky-500/20">
                {project.category || 'Full Stack'}
              </span>
              <span className="text-xs text-slate-400 font-mono">Status: {project.status}</span>
              {project.year && <span className="text-xs text-slate-500 font-mono">· {project.year}</span>}
              {project.role && <span className="text-xs text-slate-500 font-mono">· Role: {project.role}</span>}
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold font-display text-slate-100 leading-tight">
              {project.title}
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl">
              {project.summary}
            </p>

            {/* Quick Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-semibold text-xs sm:text-sm transition-all flex items-center gap-2"
                >
                  <Github className="w-4 h-4 text-sky-400" />
                  <span>View Repository</span>
                </a>
              )}
              {project.links.liveDemo && (
                <a
                  href={project.links.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-lg shadow-sky-500/20"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Application</span>
                </a>
              )}
            </div>
          </div>

          {/* Hero Visual Mockup */}
          <div className="p-4 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            {project.media.heroImage ? (
              <img
                src={project.media.heroImage}
                alt={project.title}
                className="w-full h-auto rounded-2xl border border-slate-800"
              />
            ) : (
              <div className="max-w-md mx-auto">
                <LaptopMockupPlaceholder />
              </div>
            )}
          </div>

          {/* Technical Specifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80">
            <div>
              <span className="text-xs font-mono text-slate-400 block mb-1">Duration & Team</span>
              <span className="text-sm font-semibold text-slate-200">
                {[project.duration, project.teamSize].filter(Boolean).join(' · ')}
              </span>
            </div>
            <div>
              <span className="text-xs font-mono text-slate-400 block mb-1">My Role</span>
              <span className="text-sm font-semibold text-sky-400">{project.role || 'Full-Stack Developer'}</span>
            </div>
            <div>
              <span className="text-xs font-mono text-slate-400 block mb-1">Tech Stack</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Key Features */}
          {project.content.features && project.content.features.length > 0 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold font-display text-slate-100 flex items-center gap-3">
                <Cpu className="w-6 h-6 text-sky-400" />
                <span>Key Platform Features</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.content.features.map((feature, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                    <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. System Architecture & Schemas */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold font-display text-slate-100 flex items-center gap-3">
              <Layers className="w-6 h-6 text-indigo-400" />
              <span>System Architecture & Data Design</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Architecture Card */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-4">
                <div className="flex items-center gap-2 text-sky-400 font-bold text-sm">
                  <Server className="w-4 h-4" />
                  <span>Component & Service Architecture</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.diagrams.architecture || 'Modular full-stack architecture decoupling UI from business services.'}
                </p>
                <div className="max-w-xs mx-auto pt-2">
                  <ArchitecturePlaceholder />
                </div>
              </div>

              {/* Database Schema Card */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-4">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <Database className="w-4 h-4" />
                  <span>Database Schema & Entity Relations</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.diagrams.database || 'Normalized relational database schema with foreign key constraints.'}
                </p>
                <div className="max-w-xs mx-auto pt-2">
                  <DatabasePlaceholder />
                </div>
              </div>
            </div>

            {/* API & Auth Specs */}
            {(project.diagrams.apiDocumentation || project.diagrams.authenticationFlow) && (
              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4">
                {project.diagrams.apiDocumentation && (
                  <div>
                    <span className="text-xs font-mono font-semibold text-slate-400 block mb-1">REST API Contract:</span>
                    <p className="text-xs font-mono text-sky-400 bg-slate-950 p-3 rounded-xl border border-slate-800">
                      {project.diagrams.apiDocumentation}
                    </p>
                  </div>
                )}
                {project.diagrams.authenticationFlow && (
                  <div>
                    <span className="text-xs font-mono font-semibold text-slate-400 block mb-1">Authentication Flow:</span>
                    <p className="text-xs text-slate-300 flex items-center gap-2">
                      <KeyRound className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{project.diagrams.authenticationFlow}</span>
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* 4. Technical Challenges & Solutions */}
          {project.content.challenges && project.content.challenges.length > 0 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold font-display text-slate-100 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-400" />
                <span>Technical Challenges & Solutions</span>
              </h2>

              <div className="space-y-4">
                {project.content.challenges.map((challenge, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-amber-400 font-mono text-xs font-semibold mt-0.5">CHALLENGE:</span>
                      <p className="text-xs sm:text-sm text-slate-200 font-medium">{challenge}</p>
                    </div>
                    {project.content.solutions && project.content.solutions[idx] && (
                      <div className="flex items-start gap-3 pl-4 border-l-2 border-sky-500/40">
                        <span className="text-sky-400 font-mono text-xs font-semibold mt-0.5">SOLUTION:</span>
                        <p className="text-xs sm:text-sm text-slate-300">{project.content.solutions[idx]}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. Lessons Learned & Future Improvements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.content.lessonsLearned && project.content.lessonsLearned.length > 0 && (
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-4">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <Lightbulb className="w-4 h-4" />
                  <span>Key Engineering Takeaways</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {project.content.lessonsLearned.map((lesson, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-sky-400 font-mono">•</span>
                      <span>{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.content.performanceMetrics && project.content.performanceMetrics.length > 0 && (
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-4">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span>Verified Performance Metrics</span>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {project.content.performanceMetrics.map((metric) => (
                    <div key={metric.label} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                      <span className="text-lg font-bold font-mono text-emerald-400 block">{metric.value}</span>
                      <span className="text-[11px] text-slate-400">{metric.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 6. Related Projects */}
          {relatedProjects.length > 0 && (
            <div className="pt-12 border-t border-slate-800/80 space-y-6">
              <h3 className="text-xl font-bold font-display text-slate-100">Other Engineering Case Studies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedProjects.map((rel) => (
                  <Link
                    key={rel.slug}
                    to={`/projects/${rel.slug}`}
                    className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-sky-500/40 transition-all group flex items-center justify-between"
                  >
                    <div>
                      <h4 className="font-bold text-slate-100 text-sm group-hover:text-sky-400 transition-colors">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-1">{rel.summary}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <FooterSection />
    </PageShell>
  );
}
