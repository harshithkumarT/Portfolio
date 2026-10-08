"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { experience, Experience as ExperienceType } from '@/data/experience';
import { cn } from '@/lib/utils';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="My Engineering Journey"
          subtitle="A timeline of my growth as a developer, from academic foundations to AI systems."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-white/10 to-transparent transform -translate-x-1/2" />

          <div className="space-y-12">
            {experience.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ item, index }: { item: ExperienceType, index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={cn("relative flex items-center justify-between md:justify-normal", isEven ? "md:flex-row-reverse" : "md:flex-row")}
    >
      {/* Dot */}
      <div className="absolute left-4 md:left-1/2 w-3.5 h-3.5 rounded-full bg-cyan-400 border-2 border-black shadow-[0_0_12px_rgba(0,255,255,0.8)] transform -translate-x-1/2 z-10" />

      {/* Content */}
      <div className="ml-12 md:ml-0 md:w-1/2 p-6 rounded-2xl glass-card border-white/10 transition-all hover:border-cyan-500/40">
        <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">{item.period}</div>
        <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
        <p className="text-muted leading-relaxed text-sm">{item.description}</p>
      </div>
      <div className="hidden md:block w-1/2" />
    </motion.div>
  );
};
