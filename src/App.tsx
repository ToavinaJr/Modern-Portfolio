import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { EducationSection } from './components/EducationSection';
import { ContactForm } from './components/ContactForm';
import { Project, Certification, Education } from './types';
import { ParallaxProvider } from 'react-scroll-parallax';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const projects: Project[] = [
    {
      title: "Draw It",
      description: "A real-time drawing game built with Qt, and C++",
      tech: ["Qt", "C++"],
      image: "/src/assets/images/Screenshot-draw-it.png",
      demoLink: "",
      codeLink: "https://github.com/example/project"
    },
    {
      title: "Media Player",
      description: "A media player built with Qt an C++",
      tech: ["Qt", "C++"],
      image: "/src/assets/images/Screenshot-Media-Player.png",
      demoLink: "https://demo.example.com",
      codeLink: "https://github.com/example/project"
    },
    {
      title: "Sudoku Application Player",
      description: "A sudoku generator and verificator application built with Qt an C++",
      tech: ["Qt", "C++"],
      image: "/src/assets/images/Screenshot-Sudoku.png",
      demoLink: "https://demo.example.com",
      codeLink: "https://github.com/example/project"
    },
    {
      title: "Maze Application Generator",
      description: "An application built for maze generation and solving built with Qt an C++",
      tech: ["Qt", "C++"],
      image: "/src/assets/images/Screenshot-Maze-Generator.png",
      demoLink: "https://demo.example.com",
      codeLink: "https://github.com/example/project"
    },
  ];
  
  const certifications: Certification[] = [
    {
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2024",
      image: "/api/placeholder/800/400", // Remplacer par votre image
      certificateLink: "/path/to/certificate.pdf"
    },
  ];

  const education: Education[] = [
    {
      degree: "Master's in Computer Science",
      school: "Technical University",
      period: "2020-2022"
    },
    {
      degree: "Bachelor's in Software Engineering",
      school: "Engineering Institute",
      period: "2016-2020"
    }
  ];

  return (
    <ParallaxProvider>
      <div className={`min-h-screen ${darkMode ? 'bg-[#030712] text-[#f4f4f4]' : 'bg-[#f4f4f4] text-[#030712]'}`}>
        <Header darkMode={darkMode} onThemeToggle={() => setDarkMode(!darkMode)} />
        <HeroSection />
        <ProjectsSection projects={projects} />
        <CertificationsSection certifications={certifications}  />
        <EducationSection education={education} darkMode={darkMode} />
        <ContactForm darkMode={darkMode} />
      </div>
    </ParallaxProvider>
  );
};

export default App;