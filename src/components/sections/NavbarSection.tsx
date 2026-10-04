import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Command, FileText, Github, Linkedin } from 'lucide-react';
import { getContact, getNavigation, getProfile } from '@/lib/content';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { CommandPalette } from '@/components/ui/CommandPalette';

export function NavbarSection() {
  const profile = getProfile();
  const navigation = getNavigation();
  const contact = getContact();
  const scrollDirection = useScrollDirection();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  const initials = profile.name
    ? profile.name
        .split(' ')
        .map((part) => part[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    : 'AA';

  // Keyboard shortcut Cmd+K / Ctrl+K for command palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [mobileOpen]);

  // Active section tracking via scroll position
  useEffect(() => {
    if (location.pathname !== '/') return;

    const sections = ['home', 'about', 'experience', 'skills', 'projects', 'certificates', 'blog', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      setMobileOpen(false);

      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isVisible = scrollDirection !== 'down' || window.scrollY < 80;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } p-4 max-w-7xl mx-auto`}
      >
        <nav className="mx-auto max-w-6xl bg-slate-900/80 backdrop-blur-lg border border-slate-800/80 rounded-2xl px-5 py-3 shadow-xl flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 font-display text-xl font-bold text-sky-400 hover:text-sky-300 transition-colors"
            aria-label="Home page"
          >
            <span className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center font-mono text-sm font-semibold text-sky-400">
              {initials}
            </span>
            <span className="hidden sm:inline font-sans text-sm text-slate-200 tracking-tight font-medium">
              {profile.name || 'Ahmed Abdelhalim'}
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navigation.mainNav.map((link) => {
              const secId = link.href.replace('/#', '');
              const isActive = location.pathname === '/' && activeSection === secId;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'text-sky-400 bg-sky-500/10 border border-sky-500/20'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Actions & Utilities */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPaletteOpen(true)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 text-slate-300 hover:text-slate-100 text-xs font-medium transition-colors"
              title="Command Palette (Cmd+K)"
              aria-label="Open Command Palette"
            >
              <Command className="w-3.5 h-3.5 text-sky-400" />
              <span className="hidden lg:inline text-[11px] font-mono bg-slate-900 px-1 rounded text-slate-400">⌘K</span>
            </button>

            <Link
              to="/resume"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-sky-400 text-xs font-semibold transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </Link>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors"
              aria-label={mobileOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between p-6 animate-fade-in">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <span className="font-display font-bold text-sky-400 text-lg">{profile.name || 'Ahmed Abdelhalim'}</span>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white"
              aria-label="Close Mobile Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-3 my-auto py-6">
            {navigation.mainNav.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-lg font-medium text-slate-200 hover:text-sky-400 py-2 border-b border-slate-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-4 border-t border-slate-800">
            <Link
              to="/resume"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center py-3 rounded-xl bg-sky-500 text-slate-950 font-semibold text-sm hover:bg-sky-400 transition-colors flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Download / View Resume</span>
            </Link>

            <div className="flex items-center justify-center gap-4 pt-2">
              {contact.links.github && (
                <a
                  href={contact.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-sky-400"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {contact.links.linkedin && (
                <a
                  href={contact.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-sky-400"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Command Palette Modal */}
      <CommandPalette isOpen={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </>
  );
}
