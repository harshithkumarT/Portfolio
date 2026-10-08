"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Mail, Phone, Send, CheckCircle2 } from 'lucide-react';
import { Github, Linkedin } from '@/components/ui/Icons';
import { Button } from '@/components/ui/Button';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Let's Build Something Together"
          subtitle="I'm currently open to opportunities as a Full Stack Developer or Software Engineer."
        />

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <div className="space-y-6">
              <ContactItem icon={<Mail size={20} />} label="Email" value="harshithkumart20@gmail.com" href="mailto:harshithkumart20@gmail.com" />
              <ContactItem icon={<Phone size={20} />} label="Phone" value="+91 6361095887" href="tel:+916361095887" />
              <ContactItem icon={<Github size={20} />} label="GitHub" value="github.com/harshithkumarT" href="https://github.com/harshithkumarT" />
              <ContactItem icon={<Linkedin size={20} />} label="LinkedIn" value="linkedin.com/in/harshithkumar-t/" href="https://www.linkedin.com/in/harshithkumar-t/" />
            </div>
            <div className="p-8 rounded-3xl glass-card border-white/10">
               <h4 className="text-white font-bold mb-2">Quick Note</h4>
               <p className="text-muted text-sm leading-relaxed">
                 I&apos;m always excited to discuss full-stack engineering, multi-agent AI systems, and new project opportunities. Feel free to reach out anytime!
               </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 rounded-3xl border-white/10">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center justify-center text-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Received!</h3>
                <p className="text-muted text-sm max-w-sm">
                  Thank you for reaching out, {formData.name || 'there'}! I&apos;ll get back to you as soon as possible.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="mt-4"
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-white/60 uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-white/60 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-white/60 uppercase tracking-wider">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your project or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    required
                  />
                </div>
                <Button className="w-full gap-2" size="lg" type="submit">
                  <span>Send Message</span>
                  <Send size={18} />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 p-4 rounded-2xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all group cursor-pointer"
  >
    <div className="p-3 rounded-xl bg-white/5 text-white group-hover:text-cyan-400 transition-colors shrink-0">
      {icon}
    </div>
    <div>
      <div className="text-xs text-white/40 uppercase font-medium tracking-wider">{label}</div>
      <div className="text-white font-medium group-hover:text-cyan-300 transition-colors">{value}</div>
    </div>
  </a>
);
