"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';
import { Github, Linkedin } from '@/components/ui/Icons';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple section tracking
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'py-3 bg-black/75 backdrop-blur-md border-b border-white/10 shadow-lg' : 'py-5 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Left: Brand */}
        <div className="flex items-center gap-3">
          <a href="#home" className="text-xl font-bold text-white tracking-tighter hover:text-cyan-400 transition-colors">
            Harshithkumar T
          </a>
          <div className="hidden md:flex items-center gap-2 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-[10px] font-semibold text-cyan-400 uppercase tracking-wider">
              Available for Opportunities
            </span>
          </div>
        </div>

        {/* Center: Links (Desktop) */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                'px-4 py-2 text-sm font-medium transition-colors rounded-full',
                activeSection === link.href.substring(1)
                  ? 'text-white bg-white/10'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              )}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right: Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm" as="a" href="https://drive.google.com/file/d/1vY3XGaLmMNKbEhx-6fsH6SSxsYR1KGKf/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="gap-2">
            <FileText size={16} />
            Resume
          </Button>
          <div className="flex items-center gap-2">
            <a href="https://github.com/harshithkumarT" target="_blank" rel="noopener noreferrer" className="p-2 text-white/60 hover:text-cyan-400 transition-colors" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/harshith-kumar-t/" target="_blank" rel="noopener noreferrer" className="p-2 text-white/60 hover:text-cyan-400 transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-white/70 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-white/10 my-2" />
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <a href="https://github.com/harshithkumarT" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white" aria-label="GitHub">
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/harshith-kumar-t/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white" aria-label="LinkedIn">
                    <Linkedin size={24} />
                  </a>
                </div>
                <Button variant="primary" size="sm" as="a" href="https://drive.google.com/file/d/1vY3XGaLmMNKbEhx-6fsH6SSxsYR1KGKf/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  Resume
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
