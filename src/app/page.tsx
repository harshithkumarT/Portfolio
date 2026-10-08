import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { WhyHire } from '@/components/sections/WhyHire';
import { GitHubSection } from '@/components/sections/GitHubSection';
import { Contact } from '@/components/sections/Contact';

export default function Page() {
  return (
    <main className="relative">
      <Navbar />

      <div className="flex flex-col gap-0">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <WhyHire />
        <GitHubSection />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
