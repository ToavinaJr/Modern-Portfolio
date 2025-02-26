import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { EducationSection } from './components/EducationSection';
import { ContactForm } from './components/ContactForm';
import { ParallaxProvider } from 'react-scroll-parallax';
import { StackSection } from './components/StackSection';
import { SkillsSection } from './components/SkillsSection';
import  dataEducation  from '../src/data/education';
import dataCertification from './data/certification';
import dataProject from './data/project';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ParallaxProvider>
      <div className={`min-h-screen ${darkMode ? 'bg-[#030712] text-[#645c5c]' : 'bg-[#f4f4f4] text-[#030712]'} w-[100vw] overflow-x-hidden`}>
        <Header darkMode={darkMode} onThemeToggle={() => setDarkMode(!darkMode)} />
        <HeroSection darkMode={darkMode}/>
        <ProjectsSection projects={dataProject} />
        <CertificationsSection certifications={dataCertification} />
        <EducationSection education={dataEducation} darkMode={darkMode} />
        <SkillsSection />
        <StackSection darkMode={darkMode}/>
        <ContactForm darkMode={darkMode} />
      </div>
    </ParallaxProvider>
  );
};

export default App;