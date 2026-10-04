import { getSkills } from '@/lib/content';
import { Code2, Server, Wrench, Check } from 'lucide-react';

export function SkillsSection() {
  const skillsData = getSkills();

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'frontend':
        return <Code2 className="w-5 h-5 text-sky-400" />;
      case 'backend':
        return <Server className="w-5 h-5 text-indigo-400" />;
      default:
        return <Wrench className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section className="py-24 px-4 bg-slate-950/40 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-sky-400 uppercase bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full">
            Technical Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-100 mt-4 mb-4">
            Skills & Software Engineering Capabilities
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Qualitative breakdown of core frontend, backend, and engineering tooling capabilities used in production projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.categories.map((cat) => (
            <div
              key={cat.id}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-800">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                    {getCategoryIcon(cat.id)}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-100 font-display">{cat.label}</h3>
                    {cat.description && <p className="text-xs text-slate-400">{cat.description}</p>}
                  </div>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill, idx) => {
                    if (typeof skill === 'string') {
                      return (
                        <div key={idx} className="flex items-center gap-2 text-sm text-slate-200">
                          <Check className="w-4 h-4 text-sky-400 shrink-0" />
                          <span>{skill}</span>
                        </div>
                      );
                    }

                    return (
                      <div key={skill.name} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/60">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-semibold text-slate-100">{skill.name}</span>
                          {skill.level && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20 font-medium">
                              {skill.level}
                            </span>
                          )}
                        </div>
                        {skill.description && (
                          <p className="text-xs text-slate-400 leading-relaxed">{skill.description}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
