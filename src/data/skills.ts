import { Code2 } from 'lucide-react';

import {
  SiCmake,
  SiCplusplus,
  SiDocker,
  SiGit,
  SiGithub,
  SiJavascript,
  SiLinux,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiQt,
  SiReact,
  SiSfml,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';

import type { Skill } from '../types';

const skills: Record<string, Skill[]> = {
  Frontend: [
    { name: 'React', Icon: SiReact },
    { name: 'TypeScript', Icon: SiTypescript },
    { name: 'JavaScript', Icon: SiJavascript },
    { name: 'Next.js', Icon: SiNextdotjs },
    { name: 'Tailwind CSS', Icon: SiTailwindcss },
  ],

  Backend: [
    { name: 'NestJS', Icon: SiNestjs },
    { name: 'REST APIs', Icon: Code2 },
    { name: 'Authentication', Icon: Code2 },
  ],

  Databases: [
    { name: 'PostgreSQL', Icon: SiPostgresql },
    { name: 'Prisma', Icon: SiPrisma },
    { name: 'MySQL', Icon: SiMysql },
  ],

  'Software & Desktop': [
    { name: 'C++', Icon: SiCplusplus },
    { name: 'Qt', Icon: SiQt },
    { name: 'CMake', Icon: SiCmake },
    { name: 'SFML', Icon: SiSfml },
  ],

  'DevOps & Tools': [
    { name: 'Docker', Icon: SiDocker },
    { name: 'Linux', Icon: SiLinux },
    { name: 'Git', Icon: SiGit },
    { name: 'GitHub', Icon: SiGithub },
    { name: 'Vercel', Icon: SiVercel },
  ],

  'AI & Automation': [
    { name: 'LLM API integration', Icon: Code2 },
    { name: 'Knowledge-grounded assistants', Icon: Code2 },
    { name: 'Workflow automation', Icon: Code2 },
  ],
};

export default skills;