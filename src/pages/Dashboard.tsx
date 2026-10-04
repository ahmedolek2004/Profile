import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cpu, ShieldCheck, ArrowLeft } from 'lucide-react';
import { PageShell } from '@/components/layouts/PageShell';
import { NavbarSection } from '@/components/sections/NavbarSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { getCalculatedStats, getProjects, getSkills } from '@/lib/content';

export function Dashboard() {
  const stats = getCalculatedStats();
  const projects = getProjects();
  const skills = getSkills();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageShell>
      <NavbarSection />
      <main className="pt-28 pb-24 px-4 min-h-screen">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-sky-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </Link>
          </div>

          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-semibold tracking-widest text-sky-400 uppercase bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full">
              System Diagnostics
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold font-display text-slate-100">
              Architecture & Data Status Dashboard
            </h1>
            <p className="text-xs sm:text-sm text-slate-400">
              Real-time monitoring of content JSON modules, schema integrity, and client runtime metrics.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
                <span className="text-2xl font-bold font-mono text-sky-400 block">{stat.value}</span>
                <span className="text-xs text-slate-400">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>Content Engine Health</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300 font-mono">
                <li className="flex items-center justify-between p-2 rounded bg-slate-950 border border-slate-800">
                  <span>Profile Schema</span>
                  <span className="text-emerald-400 font-semibold">VALIDATED</span>
                </li>
                <li className="flex items-center justify-between p-2 rounded bg-slate-950 border border-slate-800">
                  <span>Projects Collection ({projects.length})</span>
                  <span className="text-emerald-400 font-semibold font-mono">LOADED</span>
                </li>
                <li className="flex items-center justify-between p-2 rounded bg-slate-950 border border-slate-800">
                  <span>Skill Categories ({skills.categories.length})</span>
                  <span className="text-emerald-400 font-semibold font-mono">ACTIVE</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-sky-400 font-bold text-sm">
                <Cpu className="w-4 h-4" />
                <span>Runtime Environment</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300 font-mono">
                <li className="flex items-center justify-between p-2 rounded bg-slate-950 border border-slate-800">
                  <span>Framework</span>
                  <span className="text-slate-300 font-semibold">React 18 + Vite</span>
                </li>
                <li className="flex items-center justify-between p-2 rounded bg-slate-950 border border-slate-800">
                  <span>Type System</span>
                  <span className="text-slate-300 font-semibold">TypeScript Strict</span>
                </li>
                <li className="flex items-center justify-between p-2 rounded bg-slate-950 border border-slate-800">
                  <span>Styling Engine</span>
                  <span className="text-slate-300 font-semibold">Tailwind CSS 3.4</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </PageShell>
  );
}
