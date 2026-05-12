import { ChatKnowledgeDocument } from '../types.js';

const chatbotKnowledge: ChatKnowledgeDocument[] = [
  {
    id: 'profile',
    title: 'Profil Professionnel',
    content:
      'Toavina Sylvianno est un développeur full-stack passionné par le développement logiciel haute performance et les interfaces web modernes. Avec une formation solide en mathématiques et informatique, il combine expertise en C++ pour les applications système et React/TypeScript pour les solutions web. Basé en Afrique de l\'Est, il est disponible pour missions de freelance, CDI ou projets collaboratifs.',
    tags: ['profil', 'presentation', 'toavina', 'about', 'developpeur', 'full-stack'],
  },
  {
    id: 'education',
    title: 'Formation Académique',
    content:
      'Formation: Master en Computer Science à MISA (2020-2022) - focus: algorithmes, architecture logicielle. Master en Mathématiques Fondamentales, Université d\'Antananarivo (2016-2020) - spécialisation: analyse numérique. Cette double formation mathématique et informatique permet une approche rigoureuse des problèmes complexes.',
    tags: ['formation', 'education', 'master', 'universite', 'diplome', 'academique'],
  },
  {
    id: 'core-skills',
    title: 'Compétences Principales',
    content:
      'C++ Advanced (POO, templates, STL, SFML, Qt), React 19 (hooks, Framer Motion, TypeScript), TypeScript strict, TailwindCSS, HTML5/CSS3, JavaScript ES2023, Architecture MVC/MV*, Algorithmes et structures de données, Vite/Webpack build systems.',
    tags: ['skills', 'competences', 'core', 'languages', 'frameworks'],
  },
  {
    id: 'secondary-skills',
    title: 'Compétences Secondaires',
    content:
      'Node.js/Express (débutant), Python (scripting), PHP (WordPress), GraphQL, MongoDB, REST APIs, Git/GitHub, Linux CLI, Problem Solving (HackerRank certified), SQL.',
    tags: ['skills', 'competences', 'secondary', 'tools', 'databases'],
  },
  {
    id: 'projects-desktop',
    title: 'Projets Desktop (C++/Qt)',
    content:
      'Editera-ko: Éditeur de code avec syntax highlighting et terminal intégré. Draw It: Jeu de dessin avec détection de formes. Tetris Game: Clone du Tetris classique. Media Player: Lecteur multimédia. Chess Game: Jeu d\'échecs complet avec IA. Sudoku Application: Générateur et vérificateur. Maze Generator: Générateur et solver de labyrinthes. Minesweeper: Version SFML du Démineur rétro.',
    tags: ['projets', 'desktop', 'cpp', 'qt', 'sfml', 'games'],
  },
  {
    id: 'projects-web',
    title: 'Projets Web (React/Frontend)',
    content:
      'SpaceTourism: Site de tourisme spatial (React, TailwindCSS, Frontend Mentor). BrainWave Clone: Landing page tech moderne. 2048 Game: Implémentation du jeu 2048. NBA Stats Dashboard: Dashboard avec charting. Bright Future Of Web: Site corporate (HTML/CSS/JS). Modern Portfolio: Portfolio personnel (Vite, React 19, Framer Motion, Groq AI chatbot intégré).',
    tags: ['projets', 'web', 'react', 'frontend', 'dashboard'],
  },
  {
    id: 'certifications',
    title: 'Certifications Profesionnelles',
    content:
      'HackerRank: Problem Solving Intermediate, SQL Basic. Coding Game: C++ Certified (Sep 2024). Sololearn: C++ Advanced, CSS, HTML, PHP. Ces certifications attestent d\'une expertise validée en algorithmique, bases de données, et langages modernes.',
    tags: ['certifications', 'certificat', 'hackerrank', 'sololearn', 'codingame', 'validation'],
  },
  {
    id: 'approach',
    title: 'Approche et Valeurs',
    content:
      'Code propre et maintenable: respect des conventions, documentation inline. Performance: optimisation des algorithmes et UX responsive. Apprentissage continu: suivi des technologies modernes. Collaboration: communication claire, feedback constructif. User-centric: design orienté expérience utilisateur.',
    tags: ['approche', 'valeurs', 'philosophie', 'methode', 'excellence'],
  },
  {
    id: 'contact',
    title: 'Contact et Collaboration',
    content:
      'Disponibilité: Freelance, projets ponctuels, CDI. Réponse typique: 24h. Contact via formulaire portfolio. Horaires: Fuseau horaire UTC+3 (EAT). Préférences: Remote-first, code en français possible.',
    tags: ['contact', 'email', 'formulaire', 'collaboration', 'disponibilite'],
  },
];

export const ragConfig = {
  minSimilarityScore: 0.2,
  maxContextDocuments: 3,
  contextWindow: 2000,
  modelName: 'llama-3.3-70b-versatile',
};

export default chatbotKnowledge;