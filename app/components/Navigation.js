'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
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
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 150; // Offset for header height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Header offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 dark:bg-background/80 backdrop-blur-md border-b border-border shadow-sm' : 'bg-transparent border-transparent'}`}
    >
      <div className={`max-w-7xl mx-auto px-6 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="text-4xl font-cursive font-semibold text-foreground z-50 pl-2"
            whileHover={{ scale: 1.05 }}
          >
            Charan <span className="text-primary">Sai</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`relative px-4 py-2 text-2xl font-cursive font-medium transition-colors group ${activeSection === item.href.substring(1) ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
              >
                {item.name}
                <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-primary transform transition-transform origin-left ${activeSection === item.href.substring(1) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
              </a>
            ))}
            <div className="pl-4 border-l border-border flex items-center space-x-4">
              <SimpleThemeToggle />
              <a
                href="/charansaichimbili.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 text-xl font-cursive font-medium bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Mobile Theme Toggle and Resume */}
          <div className="md:hidden flex items-center gap-3">
            <SimpleThemeToggle />
            <a
              href="/charansaichimbili.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 text-lg font-cursive font-medium bg-primary text-white rounded-md hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              Resume
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Horizontal Scroll "Tabs" - The "Section Scroll Thing" */}
      <div className="md:hidden border-t border-border bg-background/95 dark:bg-background/95 backdrop-blur-xl">
        <div className="overflow-x-auto no-scrollbar py-3 px-4 flex gap-4 snap-x">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={`whitespace-nowrap text-xl font-cursive font-medium px-4 py-2 rounded-full transition-all snap-center ${activeSection === item.href.substring(1)
                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                : 'text-muted-foreground hover:text-foreground bg-muted/50 border border-border'
                }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
