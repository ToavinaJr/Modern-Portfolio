import { AboutSection } from '../components/sections/AboutSection';
import { CertificationsSection } from '../components/sections/CertificationsSection';
import { ContactSection } from '../components/sections/ContactSection';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { HeroSection } from '../components/sections/HeroSection';
import { SelectedWorkSection } from '../components/sections/SelectedWorkSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { usePageMeta } from '../hooks/usePageMeta';

export function HomePage() {
  usePageMeta('Toavina Sylvianno Randriamihaingoson | Software Engineer', 'Software Engineer and Full-Stack Developer in Madagascar building React, NestJS, PostgreSQL, C++/Qt and AI-integrated applications. Available for remote opportunities.', '/');
  return <main id="main-content"><HeroSection /><SelectedWorkSection /><AboutSection /><ExperienceSection /><SkillsSection /><CertificationsSection /><ContactSection /></main>;
}
