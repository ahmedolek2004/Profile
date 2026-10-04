import { getEducation, getLearning, getProfile } from '@/lib/content';
import { GraduationCap, BookOpen, Target, Compass, Sparkles } from 'lucide-react';

export function AboutSection() {
  const profile = getProfile();
  const education = getEducation();
  const learning = getLearning();

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-sky-400 uppercase bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full">
            Engineering Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-100 mt-4 mb-4">
            About & Development Philosophy
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            I am driven by clean code, robust type systems, and building intuitive user experiences that solve real-world problems.
          </p>
        </div>

        {/* Top Grid: Journey & Development Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Journey Card */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-display text-slate-100">Engineering Journey</h3>
            </div>
            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
              {profile.about.journey.length > 0 ? (
                profile.about.journey.map((paragraph, idx) => (
                  <p key={idx} className="flex gap-3">
                    <span className="text-sky-400 font-mono text-xs mt-1">0{idx + 1}.</span>
                    <span>{paragraph}</span>
                  </p>
                ))
              ) : (
                <p>Passionate about software architecture, clean code, and continuous learning.</p>
              )}
            </div>
          </div>

          {/* Goal & Career Direction */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-display text-slate-100">Career Goal & Focus</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {profile.about.goal ||
                  'To engineer scalable web platforms, master full-stack software architecture, and contribute to impactful technological products.'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80">
              <span className="text-xs font-mono text-slate-400 block mb-2 font-semibold">Location & Mobility</span>
              <span className="text-sm text-sky-400 font-medium">{profile.location || 'Alexandria, Egypt'} · Open to Remote & Relocation</span>
            </div>
          </div>
        </div>

        {/* Bottom Grid: Education & Currently Learning */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-display text-slate-100">Academic Education</h3>
            </div>

            {education.items.map((edu) => (
              <div key={edu.id} className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="font-bold text-slate-100 text-base">{edu.degree}</h4>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-emerald-400 border border-emerald-500/20 font-medium">
                    {edu.startDate} - {edu.expectedGraduation} ({edu.status})
                  </span>
                </div>
                <p className="text-sm text-sky-400 font-medium">{edu.field}</p>
                <p className="text-xs text-slate-400">{edu.institution} {edu.location ? `· ${edu.location}` : ''}</p>

                {edu.relevantCoursework && edu.relevantCoursework.length > 0 && (
                  <div className="pt-3">
                    <span className="text-xs font-semibold text-slate-300 block mb-2">Relevant Coursework:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.relevantCoursework.map((course) => (
                        <span key={course} className="text-[11px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Currently Learning */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-display text-slate-100">Active Technical Focus</h3>
            </div>

            <div className="space-y-4">
              {learning.items.map((item) => (
                <div key={item.id} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold text-slate-200">{item.technology}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {item.progress || 'In Progress'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-2">{item.description}</p>
                  {item.resources && item.resources.length > 0 && (
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span>{item.resources.join(' · ')}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
