'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import SimpleThemeToggle from './SimpleThemeToggle';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Achievements', href: '/#achievements' },
  { name: 'Certifications', href: '/#certifications' },
  { name: 'Career', href: '/#experience' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (pathname === '/') {
        const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'certifications', 'experience', 'contact'];
        const scrollPosition = window.scrollY + 150;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const handleNavClick = (e, item) => {
    const isAnchor = item.href.includes('#');

    if (isAnchor && pathname === '/') {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      const sectionId = item.href.split('#')[1];
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        setActiveSection(sectionId);
      }
    } else if (isAnchor && pathname !== '/') {
      setIsMobileMenuOpen(false);
    } else if (pathname === item.href) {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 dark:bg-background/80 backdrop-blur-md border-b border-border shadow-sm' : 'bg-transparent border-transparent'}`}
    >
      <div className={`max-w-7xl mx-auto px-4 md:px-6 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="/"
            onClick={(e) => handleNavClick(e, { name: 'Home', href: '/' })}
            className="text-xl md:text-2xl lg:text-3xl font-cursive font-semibold text-foreground z-50 pl-2"
            whileHover={{ scale: 1.05 }}
          >
            Charan <span className="text-primary">Sai</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`relative px-2 lg:px-3 py-1.5 text-base lg:text-xl font-cursive font-medium transition-colors group ${
                  (pathname === item.href || (item.href.includes('#') && activeSection === item.href.split('#')[1])) 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.name}
                <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-primary transform transition-transform origin-left ${
                  (pathname === item.href || (item.href.includes('#') && activeSection === item.href.split('#')[1])) 
                    ? 'scale-x-100' 
                    : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </a>
            ))}
            <div className="pl-2 lg:pl-4 border-l border-border flex items-center space-x-2 lg:space-x-4">
              <SimpleThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1 -mr-2 text-foreground focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-background/95 dark:bg-background/95 backdrop-blur-xl border-t border-border shadow-md"
          >
            <div className="flex flex-col py-6 px-6 space-y-5">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`text-xl font-cursive font-medium transition-colors ${
                    (pathname === item.href || (item.href.includes('#') && activeSection === item.href.split('#')[1])) 
                      ? 'text-primary' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-6 border-t border-border mt-4 flex items-center justify-between gap-4">
                <div className="p-2 bg-muted rounded-xl">
                  <SimpleThemeToggle fontClassName="!text-3xl" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
