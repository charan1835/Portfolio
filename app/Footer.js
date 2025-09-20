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
    <footer className="bg-slate-800/50 border-t border-slate-700/50 py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        <p className="text-sm text-slate-400">
          &copy; {currentYear} Charan Sai. All rights reserved.
        </p>
        <div className="flex gap-4">
          {socialLinks.map((social) => (
            <motion.a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors" whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}