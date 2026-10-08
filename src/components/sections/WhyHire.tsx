"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CheckCircle2 } from 'lucide-react';

export const WhyHire = () => {
  const reasons = [
    {
      title: "Full-Stack Thinking",
      description: "I understand how frontend, backend, APIs, and databases work together to create a seamless user experience and a robust system architecture."
    },
    {
      title: "AI Development",
      description: "I’m actively building AI-powered applications and experimenting with LLM-based systems and multi-agent architectures to solve real problems."
    },
    {
      title: "Problem Solving",
      description: "I enjoy breaking complex requirements into smaller, manageable engineering problems and implementing clean, maintainable solutions."
    },
    {
      title: "Continuous Learning",
      description: "I continuously explore new technologies, improve my software engineering fundamentals, and stay updated with the evolving AI landscape."
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Why Work With Me?"
          subtitle="Bringing a combination of technical rigor, curiosity, and a product-oriented mindset."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-3xl border-white/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <CheckCircle2 size={48} className="text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-4 relative z-10">{reason.title}</h3>
              <p className="text-muted text-sm leading-relaxed relative z-10">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
