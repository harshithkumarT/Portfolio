export interface Experience {
  title: string;
  period: string;
  description: string;
  type: 'education' | 'learning' | 'project' | 'milestone';
}

export const experience: Experience[] = [
  {
    title: "BCA Graduation",
    period: "Degree Completed",
    description: "Completed Bachelor of Computer Applications with an 8.67/10 CGPA, establishing a strong foundation in computer science and software development.",
    type: "education",
  },
  {
    title: "Full-Stack Development Learning",
    period: "Ongoing",
    description: "Mastered modern web technologies including React, Next.js, Node.js, and PostgreSQL to build production-ready applications.",
    type: "learning",
  },
  {
    title: "AI Application Development",
    period: "Recent",
    description: "Explored and implemented LLM-based systems, focusing on prompt engineering and AI-driven automation.",
    type: "learning",
  },
  {
    title: "Building Production-Style Projects",
    period: "Ongoing",
    description: "Developed a suite of complex applications including AI interview simulators and operational platforms with a focus on clean code and scalability.",
    type: "project",
  },
  {
    title: "Exploring Multi-Agent Systems",
    period: "Current Focus",
    description: "Researching and implementing multi-agent architectures to coordinate multiple AI agents for complex operational workflows.",
    type: "milestone",
  },
];
