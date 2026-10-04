import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  Home,
  User,
  Briefcase,
  Code2,
  FolderGit2,
  Award,
  BookOpen,
  Mail,
  FileText,
  Github,
  Linkedin,
  X,
} from 'lucide-react';
import { getContact } from '@/lib/content';

interface CommandItem {
  id: string;
  title: string;
  category: 'Navigation' | 'Actions' | 'Social';
  icon: React.ReactNode;
  perform: () => void;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const contact = getContact();

  const handleNavigate = (path: string) => {
    onClose();
    if (path.startsWith('/#')) {
      if (window.location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(path.replace('/', ''));
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(path.replace('/', ''));
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
    }
  };

  const commands: CommandItem[] = [
    {
      id: 'nav-home',
      title: 'Go to Home',
      category: 'Navigation',
      icon: <Home className="w-4 h-4" />,
      perform: () => handleNavigate('/#home'),
    },
    {
      id: 'nav-about',
      title: 'Go to About',
      category: 'Navigation',
      icon: <User className="w-4 h-4" />,
      perform: () => handleNavigate('/#about'),
    },
    {
      id: 'nav-experience',
      title: 'Go to Experience',
      category: 'Navigation',
      icon: <Briefcase className="w-4 h-4" />,
      perform: () => handleNavigate('/#experience'),
    },
    {
      id: 'nav-skills',
      title: 'Go to Skills',
      category: 'Navigation',
      icon: <Code2 className="w-4 h-4" />,
      perform: () => handleNavigate('/#skills'),
    },
    {
      id: 'nav-projects',
      title: 'Go to Projects',
      category: 'Navigation',
      icon: <FolderGit2 className="w-4 h-4" />,
      perform: () => handleNavigate('/#projects'),
    },
    {
      id: 'nav-certificates',
      title: 'Go to Certificates',
      category: 'Navigation',
      icon: <Award className="w-4 h-4" />,
      perform: () => handleNavigate('/#certificates'),
    },
    {
      id: 'nav-blog',
      title: 'Go to Blog',
      category: 'Navigation',
      icon: <BookOpen className="w-4 h-4" />,
      perform: () => handleNavigate('/#blog'),
    },
    {
      id: 'nav-contact',
      title: 'Go to Contact',
      category: 'Navigation',
      icon: <Mail className="w-4 h-4" />,
      perform: () => handleNavigate('/#contact'),
    },
    {
      id: 'action-resume',
      title: 'View Resume',
      category: 'Actions',
      icon: <FileText className="w-4 h-4" />,
      perform: () => handleNavigate('/resume'),
    },
    {
      id: 'social-github',
      title: 'Open GitHub Profile',
      category: 'Social',
      icon: <Github className="w-4 h-4" />,
      perform: () => {
        if (contact.links.github) window.open(contact.links.github, '_blank');
        onClose();
      },
    },
    {
      id: 'social-linkedin',
      title: 'Open LinkedIn Profile',
      category: 'Social',
      icon: <Linkedin className="w-4 h-4" />,
      perform: () => {
        if (contact.links.linkedin) window.open(contact.links.linkedin, '_blank');
        onClose();
      },
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].perform();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-xl shadow-2xl overflow-hidden">
        <div className="flex items-center px-4 py-3 border-b border-slate-800 gap-3">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            className="w-full bg-transparent text-slate-100 placeholder-slate-500 focus:outline-none text-sm"
            placeholder="Type a command or search section..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-200 transition-colors p-1 rounded-md"
            aria-label="Close Command Palette"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-2">
          {filteredCommands.length === 0 ? (
            <div className="p-4 text-center text-sm text-slate-500">No commands matching &quot;{query}&quot;</div>
          ) : (
            filteredCommands.map((cmd, idx) => (
              <button
                key={cmd.id}
                onClick={cmd.perform}
                onMouseEnter={() => setSelectedIndex(idx)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors text-left ${
                  idx === selectedIndex ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20' : 'text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={idx === selectedIndex ? 'text-sky-400' : 'text-slate-400'}>{cmd.icon}</span>
                  <span>{cmd.title}</span>
                </div>
                <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400">{cmd.category}</span>
              </button>
            ))
          )}
        </div>

        <div className="px-4 py-2 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <span><kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 font-mono text-[10px]">↑↓</kbd> Navigate</span>
            <span><kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 font-mono text-[10px]">↵</kbd> Select</span>
            <span><kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 font-mono text-[10px]">ESC</kbd> Close</span>
          </div>
          <span className="font-mono text-sky-400/80">Command Palette</span>
        </div>
      </div>
    </div>
  );
}
