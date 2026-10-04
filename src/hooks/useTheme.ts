import { useEffect, useState } from 'react';

export type Theme = 'dark' | 'light' | 'system';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof localStorage === 'undefined') return 'system';
    const saved = localStorage.getItem('portfolio_theme') as Theme | null;
    return saved || 'system';
  });

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const root = document.documentElement;
    const systemTheme =
      typeof window !== 'undefined' && typeof window.matchMedia === 'function'
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
        : 'dark';

    const effectiveTheme = theme === 'system' ? systemTheme : theme;

    if (effectiveTheme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('portfolio_theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : prev === 'light' ? 'system' : 'dark'));
  };

  return { theme, setTheme, toggleTheme };
}
