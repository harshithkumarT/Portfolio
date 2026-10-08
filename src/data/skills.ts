export interface Skill {
  name: string;
  category: string;
  icon: string;
}

export const skills = {
  Languages: [
    { name: "Python", icon: "Pi" },
    { name: "TypeScript", icon: "Ts" },
    { name: "JavaScript", icon: "Js" },
    { name: "Java", icon: "Ja" },
    { name: "SQL", icon: "Sq" },
  ],
  Frontend: [
    { name: "React", icon: "Re" },
    { name: "Next.js", icon: "Nx" },
    { name: "HTML", icon: "Ht" },
    { name: "CSS", icon: "Cs" },
    { name: "Tailwind CSS", icon: "Tw" },
  ],
  Backend: [
    { name: "Node.js", icon: "No" },
    { name: "Express.js", icon: "Ex" },
    { name: "FastAPI", icon: "Fa" },
    { name: "REST APIs", icon: "Ra" },
  ],
  Databases: [
    { name: "PostgreSQL", icon: "Pg" },
    { name: "MySQL", icon: "My" },
    { name: "MongoDB", icon: "Mg" },
  ],
  Tools: [
    { name: "Pytest", icon: "Py" },
    { name: "Jest", icon: "Je" },
    { name: "Docker", icon: "Do" },
    { name: "Git", icon: "Gi" },
    { name: "GitHub", icon: "Gh" },
    { name: "Postman", icon: "Po" },
  ],
  CS: [
    { name: "DSA", icon: "Ds" },
    { name: "OOP", icon: "Oo" },
    { name: "DBMS", icon: "Db" },
    { name: "Software Engineering", icon: "Se" },
  ],
  AI: [
    { name: "LLM Applications", icon: "Ll" },
    { name: "AI-powered Apps", icon: "Ai" },
    { name: "Multi-Agent Systems", icon: "Ma" },
    { name: "AI Automation", icon: "Aa" },
  ],
};
