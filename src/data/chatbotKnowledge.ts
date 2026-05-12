import { ChatKnowledgeDocument } from '../types';

const chatbotKnowledge: ChatKnowledgeDocument[] = [
  {
    id: 'profile',
    title: 'Profil',
    content:
      'Toavina est un développeur passionné par le développement logiciel et le web. Son portfolio met en avant une expérience solide en C++, React, TypeScript, TailwindCSS, HTML, CSS et JavaScript.',
    tags: ['profil', 'presentation', 'toavina', 'about'],
  },
  {
    id: 'education',
    title: 'Formation',
    content:
      'Il a obtenu un Master en Computer Science à MISA entre 2020 et 2022, ainsi qu\'un Master en Mathématiques fondamentales à l\'Université d\'Antananarivo entre 2016 et 2020.',
    tags: ['formation', 'education', 'master', 'universite'],
  },
  {
    id: 'stack',
    title: 'Stack technique',
    content:
      'Ses technologies principales incluent C++, JavaScript, React, TailwindCSS, TypeScript, HTML5 et CSS3. Il a aussi des bases en Node.js, Python, PHP, GraphQL, MongoDB, Rust et Next.js.',
    tags: ['stack', 'technologies', 'competences', 'skills'],
  },
  {
    id: 'projects',
    title: 'Projets',
    content:
      'Son portfolio contient plusieurs projets C++ et Qt comme Editera-ko, Draw It, Tetris Game, Media Player, Chess Game, Sudoku Application Player et Maze Application Generator, ainsi que des projets web comme SpaceTourism, BrainWave Clone, 2048 Game et NBA Stat.',
    tags: ['projets', 'realisation', 'portfolio', 'projects'],
  },
  {
    id: 'certifications',
    title: 'Certifications',
    content:
      'Il possède des certifications Hackerrank en Problem Solving et SQL, ainsi que plusieurs certifications Sololearn et Codingame en C++, CSS, HTML, PHP et C.',
    tags: ['certifications', 'certificat', 'hackerrank', 'sololearn', 'codingame'],
  },
  {
    id: 'contact',
    title: 'Contact',
    content:
      'Le portfolio contient un formulaire de contact pour les messages professionnels et les opportunités de collaboration.',
    tags: ['contact', 'email', 'formulaire'],
  },
];

export default chatbotKnowledge;