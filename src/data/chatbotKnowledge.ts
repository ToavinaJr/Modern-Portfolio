import type { ChatKnowledgeDocument } from '../types';

const chatbotKnowledge: ChatKnowledgeDocument[] = [
  {
    id: 'profile',
    title: 'Professional profile',
    content: 'Toavina Sylvianno RANDRIAMIHAINGOSON, professionally known as ToavinaJr, is a Software Engineer and Full-Stack Developer based in Antananarivo, Madagascar. He builds web applications with React and NestJS and desktop software with C++ and Qt. He is available for remote international opportunities.',
    tags: ['profile', 'about', 'location', 'availability'],
  },
  {
    id: 'education',
    title: 'Education',
    content: 'Toavina is a Master 2 student in Mathematics, Computer Science and Applied Statistics (MISA) at the University of Antananarivo.',
    tags: ['education', 'MISA', 'university', 'master 2'],
  },
  {
    id: 'experience',
    title: 'Professional experience',
    content: 'Toavina teaches mathematics at Ikigasy and provides private mathematics lessons. This work develops pedagogy, communication, logical reasoning, problem-solving and the ability to explain complex subjects. Personal software projects are presented separately and are not described as employment.',
    tags: ['experience', 'teaching', 'mathematics', 'Ikigasy', 'tutoring'],
  },
  {
    id: 'skills',
    title: 'Technical skills',
    content: 'Practiced technologies include React, TypeScript, JavaScript, Next.js, Tailwind CSS, NestJS, Node.js, REST APIs, authentication, PostgreSQL, Prisma, MySQL, C++, Qt, CMake, SFML, Docker, Linux, Git, GitHub, Vercel, LLM API integration and workflow automation. The portfolio does not assign unverified proficiency levels or years of experience.',
    tags: ['skills', 'stack', 'technology'],
  },
  {
    id: 'projects',
    title: 'Selected projects',
    content: 'Selected projects are Fret Flow, an application for guitar learners; Edu OS, an education web application; Kôziko, a social recipe application; and Editera-ko, a C++/Qt code editor with syntax highlighting and terminal support. Live demos and public repositories are linked where available.',
    tags: ['projects', 'work', 'portfolio'],
  },
  {
    id: 'assistant',
    title: 'AI portfolio assistant',
    content: 'This portfolio includes an AI assistant grounded in a curated knowledge base. It retrieves relevant profile context and instructs the language model to decline questions outside the documented portfolio information.',
    tags: ['ai', 'LLM', 'assistant', 'chatbot', 'automation'],
  },
  {
    id: 'contact',
    title: 'Contact and availability',
    content: 'Toavina is based in Antananarivo in the UTC+3 timezone and is available for full-stack roles, C++/Qt opportunities and remote international projects. Contact is available through the portfolio form or LinkedIn.',
    tags: ['contact', 'remote', 'availability'],
  },
];

export const ragConfig = { maxContextDocuments: 3, modelName: 'llama-3.3-70b-versatile' } as const;
export default chatbotKnowledge;
