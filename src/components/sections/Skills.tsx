"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { skills } from '@/data/skills';
import { cn } from '@/lib/utils';
import { Code2, Server, Database, Sparkles, Terminal, Wrench } from 'lucide-react';

export const Skills = () => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const categoryIcons: Record<string, React.ReactNode> = {
    Languages: <Code2 size={16} />,
    Frontend: <Sparkles size={16} />,
    Backend: <Server size={16} />,
    Databases: <Database size={16} />,
    Tools: <Wrench size={16} />,
    CS: <Terminal size={16} />,
    AI: <Sparkles size={16} />,
  };

  const categories = ['All', ...Object.keys(skills)];

  const displayedSkills = activeTab === 'All'
    ? Object.entries(skills).flatMap(([category, items]) => items.map(s => ({ ...s, category })))
    : (skills[activeTab as keyof typeof skills] || []).map(s => ({ ...s, category: activeTab }));

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-black/60">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Technical Stack & Expertise"
          subtitle="The languages, frameworks, databases, and AI tooling I use to craft scalable software."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={cn(
                'flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer',
                activeTab === cat
                  ? 'bg-cyan-500 text-black shadow-[0_0_20px_rgba(0,255,255,0.3)]'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
              )}
            >
              {categoryIcons[cat]}
              <span>{cat}</span>
              <span className="text-[10px] opacity-60">
                ({cat === 'All' ? Object.values(skills).flat().length : skills[cat as keyof typeof skills]?.length || 0})
              </span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {displayedSkills.map((skill, index) => (
              <motion.div
                key={`${skill.category}-${skill.name}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25, delay: index * 0.02 }}
                whileHover={{ y: -4, borderColor: 'rgba(0,255,255,0.4)' }}
                className="glass-card p-4 rounded-2xl border-white/10 flex flex-col items-center justify-center text-center group cursor-pointer transition-all hover:bg-white/[0.05]"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-mono font-bold text-sm mb-3 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                  {skill.icon}
                </div>
                <div className="text-white font-medium text-sm group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </div>
                <div className="text-[10px] text-muted uppercase tracking-wider mt-1">
                  {skill.category}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
