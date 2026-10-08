export interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  github: string;
  live?: string;
  featured?: boolean;
  category: 'Full Stack' | 'AI' | 'Backend' | 'Web Application';
  features: string[];
  problem: string;
  solution: string;
  challenges: string[];
  learnings: string[];
}

export const projects: Project[] = [
  {
    title: "Multi-Agent Operations System",
    description: "An AI-powered operations platform that uses multiple intelligent agents to process and manage support workflows.",
    longDescription: "A sophisticated operations platform leveraging a multi-agent architecture to automate complex support workflows. It transforms raw user tickets into structured actions by coordinating specialized AI agents.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Python", "FastAPI", "PostgreSQL", "LLMs"],
    github: "https://github.com/harshithkumarT",
    live: "https://multi-agent-operations.vercel.app/",
    featured: true,
    category: "AI",
    features: [
      "Multi-agent coordination for task routing",
      "Automated decision-making engine",
      "Real-time operational dashboard",
      "Integrated ticket management system"
    ],
    problem: "Support workflows are often bottlenecked by manual ticket triaging and decision-making, leading to slow response times.",
    solution: "Implemented a system of specialized AI agents that collaborate to analyze, categorize, and execute responses to support tickets autonomously.",
    challenges: ["Managing agent state consistency", "Reducing LLM hallucination in operational steps", "Optimizing latency between agent handoffs"],
    learnings: ["Deep understanding of Multi-Agent Orchestration", "Advanced prompt engineering for structured output", "Scaling FastAPI for AI workloads"]
  },
  {
    title: "AI Interview Simulator & Feedback Engine",
    description: "An AI-powered interview platform designed to simulate interviews and generate structured feedback.",
    longDescription: "A comprehensive tool for job seekers to practice technical interviews. The system simulates a real interviewer, analyzes responses in real-time, and provides a detailed feedback report.",
    technologies: ["Next.js", "React", "TypeScript", "AI / LLM", "APIs"],
    github: "https://github.com/harshithkumarT",
    live: "https://ai-simulater-and-feedback-engine-frontend.onrender.com",
    featured: true,
    category: "AI",
    features: [
      "Dynamic interview scenario generation",
      "Real-time response analysis",
      "Structured feedback scoring system",
      "Interview history tracking"
    ],
    problem: "Candidates lack a low-pressure environment to practice technical communication and receive objective feedback.",
    solution: "Created an AI-driven simulation that mimics technical interview patterns and uses an LLM to grade responses against industry standards.",
    challenges: ["Maintaining conversational flow", "Designing a rubric for objective AI feedback", "Frontend state management for complex interview flows"],
    learnings: ["Building interactive AI chat interfaces", "Integrating LLMs for evaluation tasks", "User experience design for educational tools"]
  },
  {
    title: "AI-Powered Code Review Tool",
    description: "A developer tool that analyzes source code and provides actionable feedback on code quality and maintainability.",
    longDescription: "An automated code review assistant that integrates with development workflows to identify potential bugs, security vulnerabilities, and style inconsistencies before they hit production.",
    technologies: ["Next.js", "TypeScript", "Python", "AI / LLM", "REST API"],
    github: "https://github.com/harshithkumarT",
    featured: true,
    category: "AI",
    features: [
      "Automated logic and maintainability checks",
      "AI-suggested code refactors",
      "Security vulnerability detection",
      "Best-practice alignment scoring"
    ],
    problem: "Manual code reviews are time-consuming and can miss subtle logic errors or maintainability issues.",
    solution: "Developed a tool that uses LLMs specialized in coding to perform static and semantic analysis of source files.",
    challenges: ["Handling large code context windows", "Reducing false positives in bug detection", "Creating a clean diff-style UI for feedback"],
    learnings: ["Static analysis concepts", "Optimizing prompts for code review", "Developing developer-centric UI/UX"]
  },
  {
    title: "AI Project Mentor",
    description: "An AI-powered application that helps developers plan projects and break ideas into implementation steps.",
    longDescription: "A strategic planning tool for developers that transforms a high-level project idea into a detailed technical roadmap, including tech stack recommendations and task breakdowns.",
    technologies: ["Next.js", "TypeScript", "AI / LLM"],
    github: "https://github.com/harshithkumarT",
    category: "AI",
    features: [
      "Technical roadmap generation",
      "Step-by-step implementation guides",
      "Tech stack optimization suggestions",
      "Project milestone tracking"
    ],
    problem: "Beginning developers often struggle to move from a high-level idea to a concrete implementation plan.",
    solution: "Built an AI mentor that guides users through the architectural phase of development, generating actionable tasks.",
    challenges: ["Structuring output for hierarchical tasks", "Balancing generic vs specific tech advice"],
    learnings: ["Product strategy for developer tools", "Hierarchical data modeling for roadmaps"]
  },
  {
    title: "Event Management System",
    description: "A full-stack event management application for creating, managing, and organizing events.",
    longDescription: "A robust platform for organizing events, managing participant registrations, and handling administrative workflows with a secure backend.",
    technologies: ["React", "Node.js", "Express.js", "PostgreSQL"],
    github: "https://github.com/harshithkumarT",
    category: "Full Stack",
    features: [
      "Event creation and scheduling",
      "Participant registration system",
      "Admin dashboard for event tracking",
      "Email notifications for registrants"
    ],
    problem: "Manual event coordination is prone to errors and difficult to scale.",
    solution: "Developed a centralized database-driven application to automate the event lifecycle from creation to attendance.",
    challenges: ["Handling concurrent registrations", "Database schema design for flexible event types"],
    learnings: ["Relational database optimization", "RESTful API design with Express"]
  },
  {
    title: "Student Management System",
    description: "A database-driven platform for managing student records, academic information, and administrative workflows.",
    longDescription: "A professional administrative tool designed to streamline the management of student data, attendance, and academic records.",
    technologies: ["React", "Node.js", "Express.js", "PostgreSQL"],
    github: "https://github.com/harshithkumarT",
    category: "Full Stack",
    features: [
      "Secure Authentication and RBAC",
      "Comprehensive admin dashboard",
      "Attendance tracking system",
      "Academic record management"
    ],
    problem: "Academic institutions often rely on fragmented systems for student data management.",
    solution: "Created a unified platform with a robust PostgreSQL backend to ensure data integrity and accessibility.",
    challenges: ["Implementing Role-Based Access Control (RBAC)", "Designing complex queries for academic reports"],
    learnings: ["Advanced SQL queries", "Authentication and Authorization patterns"]
  },
  {
    title: "E-Commerce Application",
    description: "A full-stack e-commerce application focused on product browsing and backend API integration.",
    longDescription: "A modern shopping experience featuring product catalogs, cart management, and a secure checkout flow.",
    technologies: ["Next.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/harshithkumarT",
    category: "Full Stack",
    features: [
      "Dynamic product catalog",
      "Persistent shopping cart",
      "User account management",
      "Integrated payment flow mockup"
    ],
    problem: "Building a scalable storefront requires seamless integration between the UI and a flexible database.",
    solution: "Utilized a NoSQL database for flexible product schemas and Next.js for a performant frontend.",
    challenges: ["State synchronization between cart and server", "Optimizing image loading for products"],
    learnings: ["NoSQL data modeling", "Next.js Server Components for SEO"]
  }
];
