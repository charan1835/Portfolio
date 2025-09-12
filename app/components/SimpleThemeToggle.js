'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function SimpleThemeToggle() {
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', theme);
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return (
      <div className="p-3 rounded-2xl bg-slate-800/50 border border-slate-700/50">
        <Sun className="w-5 h-5 text-yellow-400" />
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-2xl bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/80 border border-slate-700/50 dark:border-slate-700/50 light:border-slate-200/50 backdrop-blur-sm hover:bg-slate-700/50 dark:hover:bg-slate-700/50 light:hover:bg-white/90 transition-all duration-300"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-slate-600" />
      )}
    </button>
  );
}
