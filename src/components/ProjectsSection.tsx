import { Project } from "../types";
import { Code, ExternalLink } from "lucide-react";

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection = ({ projects}: ProjectsSectionProps) => {
  

  return (
    <section id="projets" className="container mx-auto px-6 py-16">
      {/* Titre avec effet parallax */}
      <h2
        className="text-3xl font-extrabold text-[#00bcff]  text-center mb-8 tracking-wide"
      >
        🚀 Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
        {projects.map((project) => (
          
            <div className="group relative overflow-hidden rounded-xl shadow-md dark:bg-[#1e293b] duration-300 hover:shadow-lg hover:scale-[1.02]">
              
              {/* Image avec overlay dynamique */}
              <div className="relative h-32 overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Contenu */}
              <div className="p-3">
                <h3 className="text-sm sm:text-base font-semibold mb-1.5 text-[#1e293b] dark:text-white">{project.title}</h3>
                <p className="text-gray-300 mb-2 leading-snug text-xs line-clamp-2">{project.description}</p>
                
                {/* Technologies utilisées */}
                <div className="flex flex-wrap gap-1 mb-2.5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-[10px] sm:text-xs rounded-full bg-[#868686] text-white font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Boutons interactifs */}
                <div className="flex flex-wrap gap-2">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md hover:bg-[#2b2b40] bg-[#3a3a5a] transition-all duration-300 text-white font-medium shadow-sm"
                  >
                    <Code size={14} />
                    <span>Code</span>
                  </a>
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-100 flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md bg-[#01425a] hover:bg-[#009edb] transition-all duration-300 font-medium shadow-sm"
                    >
                      <ExternalLink size={14} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          
        ))}
      </div>
    </section>
  );
};
