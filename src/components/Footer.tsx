import { portfolio } from '../data/portfolio';

export default function Footer() {
  const { profile, social } = portfolio;

  const links = [
    { label: 'GitHub', href: social.github },
    { label: 'LinkedIn', href: social.linkedin },
    { label: 'Email', href: profile.email ? `mailto:${profile.email}` : '' },
    { label: 'Resume', href: profile.resumeUrl },
  ].filter((l) => l.href);

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 text-sm sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display font-semibold text-white">{profile.name}</p>
          <p className="text-slate-400">{profile.title}</p>
        </div>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                {...(l.href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                className="text-slate-400 hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-slate-500">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
