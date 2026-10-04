import { useState } from 'react';
import { ArrowRight, Download, MapPin } from 'lucide-react';
import { portfolio } from '../data/portfolio';

export default function Hero() {
  const { profile } = portfolio;
  const [photoFailed, setPhotoFailed] = useState(false);
  const showPhoto = Boolean(profile.photoUrl) && !photoFailed;

  return (
    <section id="home" className="mx-auto flex min-h-[85vh] w-full max-w-5xl items-center px-4 pb-16 pt-28 sm:px-6">
      <div className="fade-up flex w-full flex-col-reverse items-start gap-10 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-slate-900 px-3 py-1 text-xs font-medium text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
            {profile.availability}
          </p>

          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">{profile.name}</h1>
          <p className="mt-3 text-xl font-semibold text-accent sm:text-2xl">{profile.role}</p>
          <p className="mt-1 text-sm text-slate-400 sm:text-base">{profile.heroStack}</p>

          <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">{profile.tagline}</p>

          <p className="mt-4 flex items-center gap-1.5 text-sm text-slate-400">
            <MapPin size={15} aria-hidden="true" />
            {profile.location}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              View Projects <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Download size={16} aria-hidden="true" /> Download Resume
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        {showPhoto ? (
          <img
            src={profile.photoUrl}
            alt={`Portrait of ${profile.name}`}
            width={240}
            height={320}
            onError={() => setPhotoFailed(true)}
            className="h-52 w-40 shrink-0 rounded-2xl border border-line object-cover sm:h-64 sm:w-48 md:h-80 md:w-60"
          />
        ) : (
          <div
            aria-hidden="true"
            className="grid h-28 w-28 shrink-0 place-items-center rounded-2xl border border-line bg-slate-900 font-display text-4xl font-bold text-accent md:h-40 md:w-40"
          >
            {profile.initials}
          </div>
        )}
      </div>
    </section>
  );
}
