"use client";

import React from 'react';
import { Github } from '@/components/ui/Icons';
import { Button } from '@/components/ui/Button';

export const GitHubSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Code, Projects & Open Source</h2>
        <p className="text-muted mb-12 max-w-2xl mx-auto">
          Explore my public repositories and contributions to see how I structure my code and solve problems.
        </p>

        <div className="glass-card p-12 rounded-3xl border-white/10 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
          <div className="relative z-10 flex flex-col items-center gap-8">
            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500">
              <Github size={40} className="text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">github.com/harshithkumarT</h3>
              <p className="text-muted">Public repositories, AI experiments, and full-stack projects.</p>
            </div>
            <Button variant="primary" size="lg" className="gap-2" onClick={() => window.open('https://github.com/harshithkumarT', '_blank')}>
              View Profile
              <Github size={18} />
            </Button>
          </div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};
