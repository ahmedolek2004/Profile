import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, Github, ExternalLink, ArrowRight, Layers } from 'lucide-react';
import { getProjects } from '@/lib/content';
import { LaptopMockupPlaceholder } from '@/components/placeholders';

export function ProjectsSection() {
  const projects = getProjects();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category || 'Software')))];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || (project.category || 'Software') === selectedCategory;
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch =
      project.title.toLowerCase().includes(searchLower) ||
      project.summary.toLowerCase().includes(searchLower) ||
      project.techStack.some((t) => t.toLowerCase().includes(searchLower));

    return matchesCategory && matchesSearch;
  });

  const featuredProject = projects.find((p) => p.featured) || projects[0];

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-sky-400 uppercase bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full">
            Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-100 mt-4 mb-4">
            Featured Projects & Engineering Work
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Detailed technical breakdowns of full-stack platforms, client engines, and web applications.
          </p>
        </div>

        {/* Featured Project Banner (Visually Dominant) */}
        {featuredProject && (
          <div className="mb-16 p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-sky-500/30 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-mono font-semibold border border-sky-500/30">
                    ★ Featured Case Study
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{featuredProject.year} · {featuredProject.role}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-100">
                  {featuredProject.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {featuredProject.summary}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {featuredProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-slate-800/90 border border-slate-700 text-slate-300 text-xs font-mono font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Link
                    to={`/projects/${featuredProject.slug}`}
                    className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-sky-500/20 flex items-center gap-2"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  {featuredProject.links.github && (
                    <a
                      href={featuredProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs sm:text-sm font-medium transition-all flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Mockup Preview Area */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-sm rounded-2xl bg-slate-950 border border-slate-800 p-4 shadow-xl">
                  {featuredProject.coverImage ? (
                    <img
                      src={featuredProject.coverImage}
                      alt={featuredProject.title}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  ) : (
                    <LaptopMockupPlaceholder />
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800">
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-sky-500 text-slate-950 font-semibold shadow-md shadow-sky-500/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search projects or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:border-sky-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
                aria-label="Clear Search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-16 text-center rounded-2xl bg-slate-900/40 border border-slate-800">
            <Layers className="w-8 h-8 text-slate-500 mx-auto mb-3" />
            <p className="text-slate-300 font-medium text-sm">No projects matching &quot;{searchQuery}&quot;</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-3 text-xs text-sky-400 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.slug}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm hover:border-sky-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-slate-800 text-sky-400 border border-slate-700/60 font-medium">
                      {project.category || 'Software'}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">{project.status}</span>
                  </div>

                  <h4 className="text-xl font-bold font-display text-slate-100 mb-2 group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 line-clamp-3">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <div className="flex items-center gap-3">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-slate-100 transition-colors"
                        aria-label={`Source code for ${project.title}`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.links.liveDemo && (
                      <a
                        href={project.links.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-sky-400 transition-colors"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
