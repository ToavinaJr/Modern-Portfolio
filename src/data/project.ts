import type { Project } from '../types';

const projects: Project[] = [
  {
    slug: 'fret-flow',
    title: 'Fret Flow',
    summary:
      'A full-stack learning application that gives guitar learners a focused place to discover and follow practice content.',
    problem:
      'Guitar learning material can be fragmented, making it difficult to maintain a clear practice path.',
    goals: [
      'Create a focused guitar-learning interface',
      'Keep the experience usable across screen sizes',
      'Separate the client experience from backend responsibilities',
    ],
    solution:
      'A responsive React experience supported by a NestJS backend.',
    role: 'Full-stack design and development',
    features: [
      'Guitar learning interface',
      'Responsive web experience',
    ],
    architecture: [
      'React client',
      'NestJS application layer',
    ],
    decisions: [
      'React supports a component-based learning interface',
      'NestJS provides a structured backend foundation',
    ],
    tech: ['React', 'Tailwind CSS', 'NestJS'],
    image: '/images/Screenshot-Fret_Flow.png',
    demoLink: 'https://flowfret-jr.vercel.app/',
    category: 'Full-Stack',
    selected: true,
    status: 'Live demo available',
    results:
      'A deployed application that visitors can explore through the public live demo.',
    learned:
      'How to divide a product experience between reusable frontend components and backend services.',
  },
  {
    slug: 'edu-os',
    title: 'Edu OS',
    summary:
      'A full-stack web application that organizes an education-focused experience in a responsive interface.',
    problem:
      'Education workflows need clear information hierarchy and an interface that remains usable on different devices.',
    goals: [
      'Design an education-focused product interface',
      'Build responsive layouts',
      'Connect the interface to a structured backend',
    ],
    solution:
      'A React and Tailwind CSS client backed by a NestJS application.',
    role: 'Full-stack design and development',
    features: [
      'Education-focused interface',
      'Responsive layouts',
    ],
    architecture: [
      'React client',
      'NestJS application layer',
    ],
    decisions: [
      'A component-driven UI keeps education views consistent',
      'NestJS separates backend concerns from presentation',
    ],
    tech: ['React', 'Tailwind CSS', 'NestJS'],
    image: '/images/Screenshot-Edu_OS.png',
    demoLink: 'https://edu-os-ruddy.vercel.app/',
    category: 'Full-Stack',
    selected: true,
    status: 'Live demo available',
    results:
      'A deployed education application available as a public demo.',
    learned:
      'How information architecture and responsive behavior shape an education product.',
  },
  {
    slug: 'koziko',
    title: 'Kôziko',
    summary:
      'A social recipe application designed for sharing and discovering recipes through a community-focused interface.',
    problem:
      'Recipe discovery and sharing benefit from a single experience that balances content browsing with social interaction.',
    goals: [
      'Make recipes easy to discover',
      'Support a community-style sharing experience',
      'Deliver a responsive interface',
    ],
    solution:
      'A React interface centered on recipe content, supported by a NestJS backend.',
    role: 'Full-stack design and development',
    features: [
      'Recipe discovery',
      'Social sharing interface',
      'Responsive layouts',
    ],
    architecture: [
      'React client',
      'NestJS application layer',
    ],
    decisions: [
      'Content-first cards support recipe scanning',
      'A backend boundary leaves room for social and recipe data workflows',
    ],
    tech: ['React', 'Tailwind CSS', 'NestJS'],
    image: '/images/Screenshoot-Koziko.png',
    demoLink: 'https://koziko.vercel.app/',
    category: 'Full-Stack',
    selected: true,
    status: 'Live demo available',
    results:
      'A deployed social recipe experience available through a live demo.',
    learned:
      'How to structure a content-rich interface around discovery and community actions.',
  },
  {
    slug: 'editera-ko',
    title: 'Editera-ko',
    summary:
      'A native desktop code editor that combines syntax highlighting and terminal access in a single Qt workspace.',
    problem:
      'A coding workflow requires editing and terminal access without continually switching between unrelated tools.',
    goals: [
      'Create a native editing workspace',
      'Support readable syntax highlighting',
      'Provide terminal access from the application',
    ],
    solution:
      'A C++ and Qt desktop application that brings editing and terminal capabilities together.',
    role: 'Desktop software design and C++/Qt development',
    features: [
      'Code editing',
      'Syntax highlighting',
      'Terminal support',
    ],
    architecture: [
      'Qt desktop interface',
      'C++ application logic',
      'Editor and terminal capabilities',
    ],
    decisions: [
      'Qt provides native desktop widgets and cross-platform structure',
      'C++ gives direct control over application behavior',
    ],
    tech: ['C++', 'Qt'],
    image: '/images/Screenshoot-Editera-ko.png',
    codeLink: 'https://github.com/ToavinaJr/Editerako-App',
    category: 'C++/Qt',
    selected: true,
    status: 'Source available',
    results:
      'A working desktop editor with a public source repository for code review.',
    learned:
      'How native UI state, editor behavior and system-facing features fit within a desktop application.',
  },
  {
    slug: 'portfolio-ai-assistant',
    title: 'AI Portfolio Assistant',
    summary:
      'A knowledge-grounded assistant that answers questions about this portfolio while explicitly declining unsupported claims.',
    problem:
      'A general-purpose chatbot can hallucinate experience, projects or skills that are not part of a professional profile.',
    goals: [
      'Ground answers in curated portfolio facts',
      'Keep credentials server-side',
      'Handle timeouts, empty responses and rate limits',
    ],
    solution:
      'A React chat interface retrieves through a server endpoint that selects curated context and applies strict model instructions.',
    role: 'Frontend, API integration and reliability design',
    features: [
      'Curated knowledge base',
      'Context retrieval',
      'Server-side LLM call',
      'Loading and error states',
      'Rate limiting',
    ],
    architecture: [
      'React chat interface',
      'Serverless API boundary',
      'Curated TypeScript knowledge documents',
      'Groq-hosted language model',
    ],
    decisions: [
      'The server rebuilds trusted context instead of accepting it from the browser',
      'Low temperature and refusal rules reduce unsupported claims',
      'A request timeout prevents indefinite loading',
    ],
    tech: [
      'React',
      'TypeScript',
      'REST API',
      'Groq API',
      'LLM',
    ],
    image: '/images/og-portfolio.png',
    category: 'AI Integration',
    selected: true,
    status: 'Implemented in this portfolio',
    challenge:
      'Preventing client-supplied context and model fluency from being mistaken for verified portfolio facts.',
    results:
      'Visitors can ask focused questions with explicit loading, rate-limit, empty-response and outage handling.',
    learned:
      'Grounding quality depends as much on the trust boundary and curated data as on the model prompt.',
  },
  {
    slug: 'draw-it',
    title: 'Draw It',
    summary: 'A desktop drawing application built with Qt and C++.',
    solution: 'An interactive native drawing experience.',
    role: 'Desktop development',
    features: ['Shape drawing'],
    tech: ['C++', 'Qt'],
    image: '/images/Screenshot-draw-it.png',
    codeLink:
      'https://github.com/ToavinaJr/Shape-Drawer-Application-avec-Qt',
    category: 'C++/Qt',
    selected: false,
    status: 'Source available',
  },
  {
    slug: 'tetris',
    title: 'Tetris Game',
    summary: 'A desktop implementation of the classic puzzle game.',
    solution: 'A native Qt version of Tetris.',
    role: 'Game development',
    features: ['Keyboard-controlled gameplay'],
    tech: ['C++', 'Qt'],
    image: '/images/Screenshot-Tetris.png',
    codeLink: 'https://github.com/ToavinaJr/Tetris-Game-Qt',
    category: 'Games',
    selected: false,
    status: 'Source available',
  },
  {
    slug: 'media-player',
    title: 'Media Player',
    summary: 'A native desktop media player.',
    solution: 'A Qt interface for playing media.',
    role: 'Desktop development',
    features: ['Media playback interface'],
    tech: ['C++', 'Qt'],
    image: '/images/Screenshot-Media-Player.png',
    codeLink:
      'https://github.com/ToavinaJr/Media-Player-QT',
    category: 'C++/Qt',
    selected: false,
    status: 'Source available',
  },
  {
    slug: 'space-tourism',
    title: 'Space Tourism',
    summary:
      'A responsive Frontend Mentor space-tourism challenge.',
    solution:
      'A polished multi-section frontend experience.',
    role: 'Frontend development',
    features: ['Responsive interface'],
    tech: ['React', 'Tailwind CSS'],
    image: '/images/Screenshot-spacetourism.png',
    demoLink:
      'https://spacetourism-rciqya8vi-toavina-sylviannos-projects.vercel.app/',
    codeLink:
      'https://github.com/ToavinaJr/spacetourism',
    category: 'Frontend',
    selected: false,
    status: 'Live demo and source available',
  },
  {
    slug: 'chess',
    title: 'Chess Game',
    summary: 'A chess game built with C++ and SFML.',
    solution: 'A desktop implementation of chess.',
    role: 'Game development',
    features: ['Chess gameplay'],
    tech: ['C++', 'SFML'],
    image: '/images/Screenshot-Chess.png',
    codeLink:
      'https://github.com/ToavinaJr/Jr-Chess-SFML',
    category: 'Games',
    selected: false,
    status: 'Source available',
  },
  {
    slug: 'sudoku',
    title: 'Sudoku',
    summary: 'A Sudoku generator and validator.',
    solution:
      'A desktop application for generating and checking puzzles.',
    role: 'Desktop development',
    features: [
      'Puzzle generation',
      'Solution validation',
    ],
    tech: ['C++', 'Qt'],
    image: '/images/Screenshot-Sudoku.png',
    codeLink:
      'https://github.com/ToavinaJr/Sudoku-app-with-Qt',
    category: 'Games',
    selected: false,
    status: 'Source available',
  },
  {
    slug: 'maze',
    title: 'Maze Generator',
    summary: 'A desktop maze generator and solver.',
    solution:
      'An interactive visualization of maze generation and solving.',
    role: 'Desktop development',
    features: [
      'Maze generation',
      'Maze solving',
    ],
    tech: ['C++', 'Qt'],
    image: '/images/Screenshot-Maze-Generator.png',
    codeLink:
      'https://github.com/ToavinaJr/Maze-Project-avec-Qt',
    category: 'C++/Qt',
    selected: false,
    status: 'Source available',
  },
  {
    slug: 'minesweeper',
    title: 'Minesweeper',
    summary:
      'A desktop version of the classic Minesweeper game.',
    solution:
      'A C++ and SFML implementation of the puzzle game.',
    role: 'Game development',
    features: ['Classic puzzle gameplay'],
    tech: ['C++', 'SFML'],
    image: '/images/Screenshot-Minesweeper.png',
    codeLink:
      'https://github.com/ToavinaJr/Minesweeper-SFML',
    category: 'Games',
    selected: false,
    status: 'Source available',
  },
];

export default projects;