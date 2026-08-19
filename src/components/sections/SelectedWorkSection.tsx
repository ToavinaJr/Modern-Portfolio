import projects from '../../data/project';
import { ProjectCard } from '../ProjectCard';

export function SelectedWorkSection() {
  return (
    <section
      id="selected-work"
      className="section"
    >
      <div className="section-heading">
        <div>
          <div className="eyebrow">
            Selected work
          </div>

          <h2>
            Engineering across web and desktop
          </h2>
        </div>

        <a href="/projects">
          Explore all projects →
        </a>
      </div>

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
  );
}