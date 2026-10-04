import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { portfolio } from '../data/portfolio';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { profile } = portfolio;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-canvas/90 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="flex items-center gap-2.5 font-display font-bold text-white">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-slate-900 text-sm text-accent ring-1 ring-line">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary !py-1.5">
              Resume
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="rounded-md p-2 text-slate-300 hover:text-white md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="border-t border-line bg-canvas px-4 py-3 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2.5 text-slate-300 hover:bg-slate-900 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="px-3 pb-2 pt-2">
            <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
              Resume
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
