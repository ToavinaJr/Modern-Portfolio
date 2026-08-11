import type { ChatKnowledgeDocument } from '../types';

const chatbotKnowledge: ChatKnowledgeDocument[] = [
  { id:'profile', title:'Professional Profile', content:'Toavina Sylvianno Randriamihaingoson, professionally known as Toavina Jr, is a junior full-stack developer based in Antananarivo, Madagascar. He works with React, NestJS and PostgreSQL, with complementary C++ and Qt experience. He is available for remote international opportunities.', tags:['profile','about','location','availability'] },
  { id:'education', title:'Education', content:'Toavina is a fourth-year student in Mathematics, Computer Science and Applied Statistics (MISA) at the University of Antananarivo. No graduation date has been provided.', tags:['education','MISA','university'] },
  { id:'experience', title:'Experience', content:'His previous experience teaching mathematics developed pedagogy, communication, logical reasoning, problem-solving and the ability to explain complex subjects. The institution and period have not been provided.', tags:['experience','teaching','mathematics'] },
  { id:'skills', title:'Technical Skills', content:'Practiced technologies include React, Next.js, Tailwind CSS, NestJS, Django/DRF, PostgreSQL, Prisma, C++, Qt, SFML, Python, Docker, Git, Vercel, Render, Neon PostgreSQL, API integration and AI workflow automation.', tags:['skills','stack','technology'] },
  { id:'projects', title:'Selected Projects', content:'Selected projects are Fret Flow, an application for guitar learners; Edu OS, an education web application; Kôziko, a social recipe application; and Editera-ko, a C++/Qt code editor with syntax highlighting and terminal support.', tags:['projects','work','portfolio'] },
  { id:'contact', title:'Contact and Availability', content:'Toavina is based in Antananarivo in the UTC+3 timezone and is available for junior full-stack roles, C++/Qt opportunities, internships and remote international projects. Contact is available through the portfolio form or LinkedIn.', tags:['contact','remote','availability'] },
];

export const ragConfig = { minSimilarityScore:0.2, maxContextDocuments:3, contextWindow:2000, modelName:'llama-3.3-70b-versatile' };
export default chatbotKnowledge;
