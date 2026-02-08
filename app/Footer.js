'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Instagram } from 'lucide-react';

const socialLinks = [
  { name: 'Email', href: 'mailto:chimbilicharan@gmail.com', icon: Mail },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/chimbili-charan-sai-a9a623291/', icon: Linkedin },
  { name: 'GitHub', href: 'https://github.com/charan1835', icon: Github },
  { name: 'Instagram', href: 'https://www.instagram.com/c.charan.19/', icon: Instagram },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Charan Sai. All rights reserved.
        </p>
        <div className="flex gap-4">
          {socialLinks.map((social) => (
            <motion.a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>

        <div>
          <a href="https://github.com/charan1835" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
            <Github className="w-5 h-5" />
            <p>GitHub</p>
          </a>
        </div>
      </div>
    </footer>
  );
}