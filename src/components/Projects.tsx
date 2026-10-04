import { ExternalLink, Github } from 'lucide-react';
import Section from './Section';
import { portfolio } from '../data/portfolio';

export default function Projects() {
  const { projects } = portfolio;
  if (projects.length === 0) return null;

  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className="card flex flex-col hover:border-slate-600">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <h3 className="font-display text-lg font-semibold text-white">{p.title}</h3>
              {p.status && (
                <span className="rounded-full border border-accent/40 px-2.5 py-0.5 text-xs font-medium text-accent">
                  {p.status}
                </span>
              )}
            </div>

            <p className="mt-3 text-sm leading-relaxed">{p.description}</p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <li key={t} className="tag">
                  {t}
                </li>
              ))}
            </ul>

            {(p.github || p.demo) && (
              <div className="mt-5 flex flex-wrap gap-4 pt-1 text-sm font-medium">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-accent hover:underline"
                  >
                    <Github size={15} aria-hidden="true" /> GitHub
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-accent hover:underline"
                  >
                    <ExternalLink size={15} aria-hidden="true" /> Live Demo
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
