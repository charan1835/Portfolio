'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import SimpleThemeToggle from './SimpleThemeToggle';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/80 dark:bg-slate-900/80 light:bg-white/80 backdrop-blur-xl border-b border-slate-700/50 dark:border-slate-700/50 light:border-slate-200/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <button
              onClick={() => scrollToSection('#home')}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-pink-300 transition-all duration-300"
            >
              Charan Sai
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-purple-400 dark:hover:text-purple-400 light:hover:text-purple-500 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-slate-800/50 dark:hover:bg-slate-800/50 light:hover:bg-slate-100/50"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <SimpleThemeToggle />
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/80 border border-slate-700/50 dark:border-slate-700/50 light:border-slate-200/50"
                whileTap={{ scale: 0.95 }}
              >
                {isOpen ? (
                  <X className="w-5 h-5 text-slate-300 dark:text-slate-300 light:text-slate-600" />
                ) : (
                  <Menu className="w-5 h-5 text-slate-300 dark:text-slate-300 light:text-slate-600" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className={`md:hidden ${isOpen ? 'overflow-visible' : 'overflow-hidden'}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/90 dark:bg-slate-800/90 light:bg-white/90 backdrop-blur-xl rounded-2xl mt-2 border border-slate-700/50 dark:border-slate-700/50 light:border-slate-200/50">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-3 py-2 rounded-xl text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-purple-400 dark:hover:text-purple-400 light:hover:text-purple-500 hover:bg-slate-700/50 dark:hover:bg-slate-700/50 light:hover:bg-slate-100/50 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
