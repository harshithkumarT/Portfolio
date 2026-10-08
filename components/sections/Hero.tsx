"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Mail, FileText, Terminal, Sparkles } from 'lucide-react';
import { Github, Linkedin } from '@/components/ui/Icons';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introductions & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 mb-6 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-semibold text-cyan-400 tracking-wide uppercase">
                Open to Full-Stack & Software Engineering Roles
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6"
            >
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-white bg-clip-text text-transparent">
                Harshithkumar T
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed mb-8"
            >
              A passionate <span className="text-white font-medium">Full Stack Developer</span> and{' '}
              <span className="text-white font-medium">BCA Graduate (8.67 CGPA)</span> building responsive web platforms,
              scalable backend APIs, and autonomous <span className="text-cyan-400 font-medium">multi-agent AI systems</span>.
            </motion.p>

            {/* Call To Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto"
            >
              <Button
                variant="primary"
                size="lg"
                as="a"
                href="#projects"
                className="gap-2 w-full sm:w-auto"
              >
                <span>View Featured Work</span>
                <ArrowRight size={18} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                as="a"
                href="#contact"
                className="gap-2 w-full sm:w-auto"
              >
                <Mail size={18} />
                <span>Contact Me</span>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                as="a"
                href="https://drive.google.com/file/d/1vY3XGaLmMNKbEhx-6fsH6SSxsYR1KGKf/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2 w-full sm:w-auto"
              >
                <FileText size={18} />
                <span>Resume</span>
              </Button>
            </motion.div>

            {/* Social Links & Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-6 pt-4 border-t border-white/10 w-full"
            >
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/harshithkumarT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-white/10 transition-all cursor-pointer"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/harshith-kumar-t/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-white/10 transition-all cursor-pointer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:harshithkumart20@gmail.com"
                  className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-white/10 transition-all cursor-pointer"
                  aria-label="Email Me"
                >
                  <Mail size={20} />
                </a>
              </div>
              <div className="h-4 w-px bg-white/10" />
              <div className="text-xs text-white/50 font-mono">
                Location: <span className="text-white/80">Bengaluru / Open to Relocation</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Code Terminal Card */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-lg glass-card rounded-2xl border-white/15 overflow-hidden shadow-2xl relative group hover:border-cyan-500/40 transition-all"
            >
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-white/50 flex items-center gap-1.5">
                    <Terminal size={12} className="text-cyan-400" />
                    developer.config.ts
                  </span>
                </div>
                <div className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                  Ready to Deploy
                </div>
              </div>

              {/* Code Snippet Content */}
              <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto bg-black/60">
                <div className="text-white/40">// Candidate Specification</div>
                <div>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-cyan-300">softwareEngineer</span> = {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-white/70">name:</span>{' '}
                  <span className="text-emerald-300">&quot;Harshithkumar T&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-white/70">education:</span>{' '}
                  <span className="text-emerald-300">&quot;BCA (8.67 / 10 CGPA)&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-white/70">frontend:</span>{' '}
                  <span className="text-amber-300">[&quot;React&quot;, &quot;Next.js&quot;, &quot;TypeScript&quot;, &quot;Tailwind&quot;]</span>,
                </div>
                <div className="pl-4">
                  <span className="text-white/70">backend:</span>{' '}
                  <span className="text-amber-300">[&quot;Node.js&quot;, &quot;FastAPI&quot;, &quot;PostgreSQL&quot;, &quot;Express&quot;]</span>,
                </div>
                <div className="pl-4">
                  <span className="text-white/70">aiArchitecture:</span>{' '}
                  <span className="text-amber-300">[&quot;Multi-Agent Systems&quot;, &quot;LLMs&quot;, &quot;FastAPI&quot;]</span>,
                </div>
                <div className="pl-4">
                  <span className="text-white/70">availability:</span>{' '}
                  <span className="text-cyan-400 font-bold">&quot;Immediate / High Impact&quot;</span>,
                </div>
                <div>{'};'}</div>
                <div className="mt-4 pt-3 border-t border-white/10 text-white/50 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs text-cyan-400">
                    <Sparkles size={14} /> Full Stack & AI Ready
                  </span>
                  <span className="text-[11px] text-emerald-400">● 100% Tests Passing</span>
                </div>
              </div>

              {/* Bottom Quick Chips */}
              <div className="grid grid-cols-3 gap-2 p-3 bg-white/[0.02] border-t border-white/10 text-center">
                <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[10px] text-white/50 uppercase">CGPA</div>
                  <div className="text-sm font-bold text-white">8.67</div>
                </div>
                <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[10px] text-white/50 uppercase">Projects</div>
                  <div className="text-sm font-bold text-cyan-400">7+ Apps</div>
                </div>
                <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[10px] text-white/50 uppercase">Focus</div>
                  <div className="text-sm font-bold text-white">AI + Web</div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
