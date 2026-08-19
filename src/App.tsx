import { lazy, Suspense } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { CursorParticles } from './components/CursorParticles';
import projects from './data/project';
import { useRevealAnimations } from './hooks/useRevealAnimations';
import { useTheme } from './hooks/useTheme';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProjectsPage } from './pages/ProjectsPage';

const ChatBot = lazy(() => import('./components/ChatBot'));

export default function App() {
  const { dark, setDark } = useTheme();
  useRevealAnimations();

  const path = location.pathname.replace(/\/$/, '') || '/';
  const project = projects.find((item) => `/projects/${item.slug}` === path);
  const page = path === '/'
    ? <HomePage />
    : path === '/projects'
      ? <ProjectsPage />
      : project
        ? <CaseStudyPage project={project} />
        : <NotFoundPage />;

  return <><a className="skip-link" href="#main-content">Skip to content</a><Header dark={dark} setDark={setDark} /><CursorParticles />{page}<Footer /><Suspense fallback={null}><ChatBot darkMode={dark} /></Suspense></>;
}
