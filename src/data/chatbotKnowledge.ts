import type { ChatKnowledgeDocument } from '../types';

const chatbotKnowledge: ChatKnowledgeDocument[] = [
  { id:'profile', title:'Professional Profile', content:'Toavina Sylvianno Randriamihaingoson, professionally known as Toavina Jr, is a junior full-stack developer based in Antananarivo, Madagascar. He works with React, NestJS and PostgreSQL, with complementary C++ and Qt experience. He is available for remote international opportunities.', tags:['profile','about','location','availability'] },
  { id:'education', title:'Education', content:'Toavina is a Master 2 student in Mathematics, Computer Science and Applied Statistics (MISA) at the University of Antananarivo.', tags:['education','MISA','university','master 2'] },
  { id:'experience', title:'Experience', content:'Toavina teaches mathematics at Ikigasy and also provides private mathematics lessons. This work develops pedagogy, communication, logical reasoning, problem-solving and the ability to explain complex subjects.', tags:['experience','teaching','mathematics','Ikigasy','tutoring'] },
  { id:'skills', title:'Technical Skills', content:'Practiced technologies include React, Next.js, Tailwind CSS, NestJS, Django/DRF, PostgreSQL, MySQL, Supabase, Neon PostgreSQL, Prisma, C++, Qt, SFML, Python, Docker, Git, Vercel, Render, API integration and AI workflow automation.', tags:['skills','stack','technology'] },
  { id:'projects', title:'Selected Projects', content:'Selected projects are Fret Flow, an application for guitar learners; Edu OS, an education web application; Kôziko, a social recipe application; and Editera-ko, a C++/Qt code editor with syntax highlighting and terminal support.', tags:['projects','work','portfolio'] },
  { id:'contact', title:'Contact and Availability', content:'Toavina is based in Antananarivo in the UTC+3 timezone and is available for full-stack roles, C++/Qt opportunities and remote international projects. Contact is available through the portfolio form or LinkedIn.', tags:['contact','remote','availability'] },
];

export const ragConfig = { minSimilarityScore:0.2, maxContextDocuments:3, contextWindow:2000, modelName:'llama-3.3-70b-versatile' };
export default chatbotKnowledge;
