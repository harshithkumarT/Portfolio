"use client";

import React, { useState, useEffect } from 'react';
import { Github, Linkedin } from '@/components/ui/Icons';

export const Footer = () => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-12 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white">Harshithkumar T</h3>
            <p className="text-muted text-sm">Full Stack Developer • Software Engineer</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-white/60">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/harshithkumarT" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 text-white/60 hover:text-white transition-colors" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/harshithkumar-t/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 text-white/60 hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-white/30">
          © {year ?? 2026} Harshithkumar T. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
