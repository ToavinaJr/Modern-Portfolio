import { ChatKnowledgeDocument } from '../types.js';

const chatbotKnowledge: ChatKnowledgeDocument[] = [
  {
    id: 'profile',
    title: 'Professional Profile',
    content:
      'Toavina Sylvianno is a full-stack developer passionate about high-performance software development and modern web interfaces. With solid training in mathematics and computer science, he combines expertise in C++ for system applications and React/TypeScript for web solutions. Based in East Africa, available for freelance missions, full-time roles, or collaborative projects.',
    tags: ['profile', 'about', 'toavina', 'developer', 'full-stack', 'background'],
  },
  {
    id: 'education',
    title: 'Academic Background',
    content:
      'Master in Computer Science from MISA (2020-2022) - focus: algorithms and software architecture. Master in Fundamental Mathematics from University of Antananarivo (2016-2020) - specialization: numerical analysis. This dual training enables rigorous problem-solving and strong algorithmic thinking.',
    tags: ['education', 'master', 'university', 'degree', 'academic', 'training'],
  },
  {
    id: 'core-skills',
    title: 'Core Skills',
    content:
      'C++ Advanced (OOP, templates, STL, SFML, Qt), React 19 (hooks, Framer Motion, TypeScript), TypeScript strict mode, TailwindCSS, HTML5/CSS3, JavaScript ES2023, MVC/MVVM architecture, Data structures & algorithms, Vite/Webpack build systems.',
    tags: ['skills', 'technical', 'core', 'languages', 'frameworks', 'expertise'],
  },
  {
    id: 'secondary-skills',
    title: 'Additional Skills',
    content:
      'Node.js/Express (beginner), Python (scripting), PHP (WordPress), GraphQL, MongoDB, REST APIs, Git/GitHub, Linux CLI, Problem Solving (HackerRank certified), SQL.',
    tags: ['skills', 'technical', 'secondary', 'tools', 'databases', 'tools'],
  },
  {
    id: 'projects-desktop',
    title: 'Desktop Projects (C++/Qt)',
    content:
      'Editera-ko: Code editor with syntax highlighting and integrated terminal. Draw It: Drawing game with shape detection. Tetris Game: Classic Tetris clone. Media Player: Multimedia player. Chess Game: Full chess game with AI. Sudoku Application: Generator and verifier. Maze Generator: Maze generator and solver. Minesweeper: Retro Minesweeper SFML version.',
    tags: ['projects', 'desktop', 'cpp', 'qt', 'sfml', 'games', 'applications'],
  },
  {
    id: 'projects-web',
    title: 'Web Projects (React/Frontend)',
    content:
      'SpaceTourism: Space tourism website (React, TailwindCSS, Frontend Mentor). BrainWave Clone: Modern tech landing page. 2048 Game: 2048 game implementation. NBA Stats Dashboard: Dashboard with charting. Bright Future Of Web: Corporate website (HTML/CSS/JS). Modern Portfolio: Personal portfolio (Vite, React 19, Framer Motion, Groq AI chatbot integration).',
    tags: ['projects', 'web', 'react', 'frontend', 'dashboard', 'portfolio'],
  },
  {
    id: 'certifications',
    title: 'Professional Certifications',
    content:
      'HackerRank: Problem Solving Intermediate, SQL Basic. Coding Game: C++ Certified (Sep 2024). Sololearn: C++ Advanced, CSS, HTML, PHP. These certifications validate expertise in algorithms, databases, and modern programming languages.',
    tags: ['certifications', 'certificate', 'hackerrank', 'sololearn', 'codingame', 'validation'],
  },
  {
    id: 'approach',
    title: 'Approach & Values',
    content:
      'Clean & maintainable code: following conventions and inline documentation. Performance: algorithm optimization and responsive UX. Continuous learning: staying current with modern technologies. Collaboration: clear communication and constructive feedback. User-centric design: focusing on user experience.',
    tags: ['approach', 'values', 'philosophy', 'methodology', 'excellence'],
  },
  {
    id: 'contact',
    title: 'Contact & Collaboration',
    content:
      'Availability: Freelance, one-off projects, or full-time roles. Typical response time: 24 hours. Contact via portfolio form. Timezone: UTC+3 (EAT). Preferences: Remote-first work, multilingual (French/English).',
    tags: ['contact', 'email', 'form', 'collaboration', 'availability', 'reach-out'],
  },
];

export const ragConfig = {
  minSimilarityScore: 0.2,
  maxContextDocuments: 3,
  contextWindow: 2000,
  modelName: 'llama-3.3-70b-versatile',
};

export default chatbotKnowledge;