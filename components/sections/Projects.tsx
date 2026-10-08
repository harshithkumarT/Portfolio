"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { projects, Project } from '@/data/projects';
import { Button } from '@/components/ui/Button';
import { ExternalLink, X, Code2, ArrowRight } from 'lucide-react';
import { Github } from '@/components/ui/Icons';
import { cn } from '@/lib/utils';

export const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Full Stack', 'AI', 'Backend', 'Web Application'];
  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  const featuredProject = projects.find(p => p.featured && p.title === "Multi-Agent Operations System");
  const otherProjects = filteredProjects.filter(p => p !== featuredProject);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-grid">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Featured Work"
          subtitle="Turning complex engineering challenges into polished, functional products."
        />

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                'px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer',
                filter === cat
                  ? 'bg-cyan-500 text-black font-semibold shadow-[0_0_20px_rgba(0,255,255,0.3)]'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Project */}
        {featuredProject && filter === 'All' && (
          <div className="mb-24">
            <FeaturedProjectCard project={featuredProject} onClick={() => setSelectedProject(featuredProject)} />
          </div>
        )}

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {otherProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

const FeaturedProjectCard = ({ project, onClick }: { project: Project, onClick: () => void }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative glass-card rounded-[40px] border-white/20 overflow-hidden cursor-pointer transition-all hover:border-cyan-500/50"
      onClick={onClick}
    >
      <div className="grid lg:grid-cols-2">
        {/* Info */}
        <div className="p-8 sm:p-12 flex flex-col justify-center">
          <div className="mb-6">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20">
              Featured Project
            </span>
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {project.title}
          </h3>
          <p className="text-base sm:text-lg text-muted leading-relaxed mb-8 max-w-lg">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-10">
            {project.technologies.map(tech => (
              <span key={tech} className="text-[10px] font-medium text-white/60 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {project.live && (
              <Button
                variant="primary"
                size="lg"
                className="gap-2"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.live, '_blank');
                }}
              >
                Live Demo
                <ExternalLink size={18} />
              </Button>
            )}
            <Button
              variant="outline"
              size="lg"
              className="gap-2"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.github, '_blank');
              }}
            >
              View Code
              <Github size={18} />
            </Button>
          </div>
        </div>

        {/* Visual Preview */}
        <div className="bg-black/40 p-8 flex items-center justify-center relative overflow-hidden border-t lg:border-t-0 lg:border-l border-white/10">
          <div className="w-full max-w-md glass-card rounded-2xl p-6 border-white/10 shadow-2xl relative z-10">
            <div className="flex items-center justify-between mb-8">
              <div className="text-xs font-bold text-white uppercase tracking-widest">Operations Dashboard</div>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Tickets', val: '124' },
                { label: 'Resolved', val: '91' },
                { label: 'Escalated', val: '18' },
                { label: 'In Progress', val: '15' },
              ].map(stat => (
                <div key={stat.label} className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-[10px] text-muted uppercase">{stat.label}</div>
                  <div className="text-xl font-bold text-white">{stat.val}</div>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              <div className="text-[10px] text-muted uppercase mb-2">Agent Activity</div>
              {[
                { agent: 'Support Agent', status: 'Active' },
                { agent: 'Analysis Agent', status: 'Processing' },
                { agent: 'Decision Agent', status: 'Active' },
              ].map(act => (
                <div key={act.agent} className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-xs text-white">{act.agent}</span>
                  <span className={cn(
                    "text-[10px] px-2 py-0.5 rounded-full font-medium",
                    act.status === 'Active' ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'
                  )}>
                    {act.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ project, index, onClick }: { project: Project, index: number, onClick: () => void }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -8 }}
      className="group relative glass-card rounded-3xl border-white/10 overflow-hidden flex flex-col cursor-pointer transition-all hover:border-cyan-500/50"
      onClick={onClick}
    >
      <div className="aspect-video bg-white/5 relative flex items-center justify-center overflow-hidden">
        <div className="text-white/20 group-hover:text-cyan-500/40 transition-colors duration-500">
          <Code2 size={48} className="opacity-20 group-hover:opacity-50 transition-all" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest px-2 py-0.5 rounded-full bg-cyan-400/10 border border-cyan-400/20">
            {project.category}
          </span>
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-muted text-sm leading-relaxed mb-6 line-clamp-3">
          {project.description}
        </p>
        <div className="mt-auto flex items-center gap-3">
          <Button variant="outline" size="sm" className="flex-1 gap-2 group/btn" onClick={(e) => { e.stopPropagation(); window.open(project.github, '_blank'); }}>
            <Github size={14} />
            Code
            <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
          </Button>
          {project.live && (
            <Button variant="primary" size="sm" className="flex-1 gap-2 group/btn" onClick={(e) => { e.stopPropagation(); window.open(project.live, '_blank'); }}>
              <ExternalLink size={14} />
              Demo
              <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }: { project: Project, onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl border-white/20 shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-white/60 hover:text-white transition-colors z-10 cursor-pointer"
          aria-label="Close Modal"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-12">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest px-2 py-0.5 rounded-full bg-cyan-400/10 border border-cyan-400/20">
              {project.category}
            </span>
            <div className="flex gap-2">
              {project.technologies.map(tech => (
                <span key={tech} className="text-[10px] font-medium text-white/40 px-2 py-1 rounded bg-white/5 border border-white/10">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">{project.title}</h2>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-10">
              <section>
                <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                  <div className="w-1 h-5 bg-cyan-500" />
                  Overview
                </h4>
                <p className="text-muted leading-relaxed">{project.longDescription}</p>
              </section>
              <section>
                <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                  <div className="w-1 h-5 bg-cyan-500" />
                  The Problem
                </h4>
                <p className="text-muted leading-relaxed">{project.problem}</p>
              </section>
              <section>
                <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                  <div className="w-1 h-5 bg-cyan-500" />
                  The Solution
                </h4>
                <p className="text-muted leading-relaxed">{project.solution}</p>
              </section>
            </div>

            <div className="space-y-10">
              <section>
                <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                  <div className="w-1 h-5 bg-cyan-500" />
                  Architecture
                </h4>
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-white/60 p-4 rounded-xl bg-white/5 border border-white/10">
                  <span>Frontend</span>
                  <ArrowRight size={14} />
                  <span>API</span>
                  <ArrowRight size={14} />
                  <span>Backend</span>
                  <ArrowRight size={14} />
                  <span>Database</span>
                  <ArrowRight size={14} />
                  <span>AI</span>
                </div>
              </section>
              <section>
                <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                  <div className="w-1 h-5 bg-cyan-500" />
                  Key Features
                </h4>
                <ul className="space-y-3">
                  {project.features.map((feat, i) => (
                    <li key={i} className="text-muted flex items-start gap-3 text-sm leading-relaxed">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </section>
              <section>
                <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                  <div className="w-1 h-5 bg-cyan-500" />
                  Challenges
                </h4>
                <ul className="space-y-3">
                  {project.challenges.map((chal, i) => (
                    <li key={i} className="text-muted flex items-start gap-3 text-sm leading-relaxed">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      {chal}
                    </li>
                  ))}
                </ul>
              </section>
              <section>
                <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                  <div className="w-1 h-5 bg-cyan-500" />
                  The Learnings
                </h4>
                <ul className="space-y-3">
                  {project.learnings.map((learn, i) => (
                    <li key={i} className="text-muted flex items-start gap-3 text-sm leading-relaxed">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      {learn}
                    </li>
                  ))}
                </ul>
              </section>
              <div className="pt-8 flex gap-4">
                <Button variant="outline" size="md" className="flex-1 gap-2" onClick={() => window.open(project.github, '_blank')}>
                  <Github size={18} />
                  GitHub
                </Button>
                {project.live && (
                  <Button variant="primary" size="md" className="flex-1 gap-2" onClick={() => window.open(project.live, '_blank')}>
                    <ExternalLink size={18} />
                    Live Demo
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
