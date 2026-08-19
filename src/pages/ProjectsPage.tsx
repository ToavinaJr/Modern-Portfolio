import { ProjectCard } from '../components/ProjectCard';
import projects from '../data/project';
import { usePageMeta } from '../hooks/usePageMeta';

export function ProjectsPage() {
  usePageMeta('Software Projects | ToavinaJr', 'Case studies and software projects by ToavinaJr across full-stack web development, C++/Qt desktop software and frontend engineering.', '/projects');
  return <main id="main-content" className="page">
    <div className="page-intro">
      <div className="eyebrow">
        Selected engineering work
      </div>

      <h1>Projects &amp; Case Studies</h1>

      <p>
        Four primary projects show full-stack and desktop work. Smaller builds
        remain available as supporting practice rather than competing for
        attention.
      </p>
    </div>

    <section className="section">
      <h2>Featured case studies</h2>

      <div className="project-grid selected">
        {projects
          .filter((project) => project.selected)
          .map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
      </div>
    </section>

    <section className="section">
      <h2>Additional projects</h2>

      <div className="project-grid compact-grid">
        {projects
          .filter((project) => !project.selected)
          .map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              compact
            />
          ))}
      </div>
    </section>
  </main>
}
