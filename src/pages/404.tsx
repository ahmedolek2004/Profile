import { Link, useNavigate } from 'react-router-dom';
import { Compass, Home, ArrowLeft } from 'lucide-react';
import { PageShell } from '@/components/layouts/PageShell';
import { NavbarSection } from '@/components/sections/NavbarSection';
import { FooterSection } from '@/components/sections/FooterSection';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <PageShell>
      <NavbarSection />
      <main className="min-h-[75vh] flex flex-col items-center justify-center text-center px-4 pt-28 pb-16">
        <div className="max-w-md w-full p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center mx-auto">
            <Compass className="w-8 h-8 animate-pulse" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-sky-400">404 ERROR</span>
            <h1 className="text-2xl sm:text-3xl font-bold font-display text-slate-100">
              Page Not Found
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              The page or resource you are looking for doesn&apos;t exist or has been moved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => navigate(-1)}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Go Back</span>
            </button>

            <Link
              to="/"
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-semibold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20"
            >
              <Home className="w-4 h-4" />
              <span>Return Home</span>
            </Link>
          </div>
        </div>
      </main>
      <FooterSection />
    </PageShell>
  );
}
