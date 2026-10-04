import { getExperience } from '@/lib/content';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export function ExperienceSection() {
  const experience = getExperience();

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-sky-400 uppercase bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full">
            Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-100 mt-4 mb-4">
            Experience & Engineering Milestones
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            An honest overview of my hands-on software development projects, academic milestones, and engineering growth.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-8 space-y-12">
          {experience.items.map((item) => (
            <div key={item.id} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Node Icon */}
              <div className="absolute -left-4 top-1.5 w-8 h-8 rounded-full bg-slate-900 border-2 border-sky-500/40 group-hover:border-sky-400 group-hover:bg-sky-500/10 flex items-center justify-center transition-all shadow-md">
                <Briefcase className="w-3.5 h-3.5 text-sky-400" />
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm group-hover:border-slate-700/80 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-sky-500/10 text-sky-400 border border-sky-500/20 font-medium">
                    {item.category || 'Milestone'}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-100 mb-1">{item.title}</h3>
                <div className="flex items-center gap-3 text-sm text-slate-400 mb-4 font-medium">
                  <span>{item.company}</span>
                  {item.location && (
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </span>
                  )}
                </div>

                {item.description && (
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">{item.description}</p>
                )}

                {item.highlights && item.highlights.length > 0 && (
                  <div className="space-y-2 pt-2 border-t border-slate-800/60">
                    {item.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
