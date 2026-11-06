import { Code2 } from 'lucide-react';

import {
  SiCmake,
  SiCplusplus,
  SiBootstrap,
  SiDjango,
  SiDotnet,
  SiDocker,
  SiExpo,
  SiFastapi,
  SiFirebase,
  SiFlutter,
  SiGraphql,
  SiGtk,
  SiGit,
  SiGithub,
  SiJavascript,
  SiLinux,
  SiMysql,
  SiMongodb,
  SiN8N,
  SiNginx,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiRedis,
  SiQt,
  SiReact,
  SiSfml,
  SiTailwindcss,
  SiApache,
  SiSqlalchemy,
  SiSupabase,
  SiTypescript,
  SiTypeorm,
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
    { name: 'Flutter', Icon: SiFlutter },
    { name: 'Bootstrap', Icon: SiBootstrap },
    { name: 'React Native', Icon: Code2 },
    { name: 'Expo', Icon: SiExpo },
  ],

  Backend: [
    { name: 'NestJS', Icon: SiNestjs },
    { name: 'REST APIs', Icon: Code2 },
    { name: 'Authentication', Icon: Code2 },
    { name: '.NET', Icon: SiDotnet },
    { name: 'Django', Icon: SiDjango },
    { name: 'FastAPI', Icon: SiFastapi },
  ],

  Databases: [
    { name: 'PostgreSQL', Icon: SiPostgresql },
    { name: 'Prisma', Icon: SiPrisma },
    { name: 'MySQL', Icon: SiMysql },
    { name: 'GraphQL', Icon: SiGraphql },
    { name: 'Redis', Icon: SiRedis },
    { name: 'Qdrant', Icon: Code2 },
    { name: 'MongoDB', Icon: SiMongodb },
    { name: 'Neo4j', Icon: Code2 },
    { name: 'Supabase', Icon: SiSupabase },
    { name: 'Neon', Icon: Code2 },
    { name: 'Firebase', Icon: SiFirebase },
    { name: 'TypeORM', Icon: SiTypeorm },
    { name: 'SQLAlchemy', Icon: SiSqlalchemy },
  ],

  'Software & Desktop': [
    { name: 'C++', Icon: SiCplusplus },
    { name: 'Qt', Icon: SiQt },
    { name: 'CMake', Icon: SiCmake },
    { name: 'SFML', Icon: SiSfml },
    { name: 'GTK', Icon: SiGtk },
  ],

  'DevOps & Tools': [
    { name: 'Docker', Icon: SiDocker },
    { name: 'Linux', Icon: SiLinux },
    { name: 'Git', Icon: SiGit },
    { name: 'GitHub', Icon: SiGithub },
    { name: 'Vercel', Icon: SiVercel },
    { name: 'Nginx', Icon: SiNginx },
    { name: 'Apache', Icon: SiApache },
  ],

  'AI & Automation': [
    { name: 'LLM API integration', Icon: Code2 },
    { name: 'Knowledge-grounded assistants', Icon: Code2 },
    { name: 'Workflow automation', Icon: Code2 },
    { name: 'n8n', Icon: SiN8N },
  ],
};

export default skills;
