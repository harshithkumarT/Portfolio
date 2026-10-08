"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Terminal, Cpu, Lightbulb, Database, Network } from 'lucide-react';
import { cn } from '@/lib/utils';

export const About = () => {
  const journey = [
    { stage: "BCA", desc: "Foundational Computer Applications (8.67 CGPA)", icon: <GraduationCap size={20}/> },
    { stage: "Web Development", desc: "Building responsive modern interfaces", icon: <Terminal size={20}/> },
    { stage: "Full Stack Development", desc: "Integrating Frontend & Backend architectures", icon: <Cpu size={20}/> },
    { stage: "Backend & Databases", desc: "Scaling data & API architecture (SQL & NoSQL)", icon: <Database size={20}/> },
    { stage: "AI Applications", desc: "LLM integration, Prompting & Function Calling", icon: <Lightbulb size={20}/> },
    { stage: "Multi-Agent Systems", desc: "Autonomous AI Orchestration & Multi-Agent Workflows", icon: <Network size={20}/> },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-grid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6"
          >
            I enjoy turning ideas into <span className="text-cyan-400">working software.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            My engineering foundation is built on solid computer science fundamentals, full-stack rigor,
            and an active curiosity for artificial intelligence.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Engineering Story Path */}
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-white/20 to-transparent transform -translate-x-1/2" />
            <div className="space-y-12">
              {journey.map((step, index) => (
                <JourneyStep key={index} step={step} index={index} />
              ))}
            </div>
          </div>

          {/* Stats Area */}
          <div className="grid grid-cols-2 gap-6">
            <StatCard value="8.67 / 10" label="BCA CGPA" subtitle="Strong CS Core" />
            <StatCard value="7+" label="Projects Built" subtitle="Production-Ready" />
            <StatCard value="Full Stack" label="Development" subtitle="Next.js & Node.js" />
            <StatCard value="AI Systems" label="Applications" subtitle="Multi-Agent & LLM" />
          </div>
        </div>
      </div>
    </section>
  );
};

type JourneyStepData = {
  stage: string;
  desc: string;
  icon: React.ReactNode;
};

const JourneyStep = ({ step, index }: { step: JourneyStepData, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        "relative flex items-center gap-8",
        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
      )}
    >
      <div className="z-10 p-3 rounded-full bg-black border-2 border-cyan-500 text-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.3)] shrink-0">
        {step.icon}
      </div>
      <div className={cn(
        "p-6 rounded-2xl glass-card border-white/10 max-w-xs transition-all hover:border-cyan-500/30",
        index % 2 === 0 ? "text-left" : "text-right"
      )}>
        <h4 className="text-white font-bold text-lg">{step.stage}</h4>
        <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
      </div>
    </motion.div>
  );
};

const StatCard = ({ value, label, subtitle }: { value: string, label: string, subtitle?: string }) => (
  <motion.div
    whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.05)' }}
    className="glass-card p-8 rounded-3xl border-white/10 text-center transition-all group hover:border-cyan-500/30"
  >
    <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
      {value}
    </div>
    <div className="text-xs text-muted uppercase font-medium tracking-widest mb-1">
      {label}
    </div>
    {subtitle && (
      <div className="text-[11px] text-white/40 font-mono">
        {subtitle}
      </div>
    )}
  </motion.div>
);
