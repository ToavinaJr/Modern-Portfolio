import { Code2, ExternalLink } from 'lucide-react';
import type { Project } from '../types';

export function ProjectActions({ project, caseStudy = true }: { project: Project; caseStudy?: boolean }) {
  return <div className="actions">{caseStudy && <a className="button" href={`/projects/${project.slug}`}>Explore Case Study</a>}{project.codeLink ? <a className="text-link" href={project.codeLink} target="_blank" rel="noopener noreferrer"><Code2 />View code</a> : <span className="private">Repository not public</span>}{project.demoLink && <a className="text-link" href={project.demoLink} target="_blank" rel="noopener noreferrer"><ExternalLink />Live demo</a>}</div>;
}

export function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  return <article className={`project-card ${compact ? 'compact' : ''}`}><img src={project.image} alt={`${project.title} application interface`} width="640" height="360" loading="lazy" decoding="async" /><div className="card-body"><div className="eyebrow">{project.category}</div><h3>{project.title}</h3><p>{project.summary}</p><p className="project-role"><strong>Role:</strong> {project.role}</p><ul className="tags" aria-label={`${project.title} technology stack`}>{project.tech.map((item) => <li key={item}>{item}</li>)}</ul><ProjectActions project={project} /></div></article>;
}
