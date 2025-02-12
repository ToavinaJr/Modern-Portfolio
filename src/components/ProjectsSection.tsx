import { Project } from "../types";
import { useParallax } from "react-scroll-parallax";
import { Code, ExternalLink } from "lucide-react";

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection = ({ projects}: ProjectsSectionProps) => {
  const titleParallax = useParallax({
    speed: 20,
    translateY: [0, 50],
    opacity: [1, 0],
  });

  return (
    <section className="container mx-auto px-6 py-20">
      {/* Titre avec effet parallax */}
      <h2
        ref={titleParallax.ref as React.RefObject<HTMLHeadingElement>}
        className="text-4xl font-extrabold text-center mb-12 tracking-wide"
      >
        🚀 Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          
            <div className="group relative overflow-hidden rounded-2xl shadow-lg dark:bg-[#1e293b] duration-300 hover:shadow-xl hover:scale-[1.02]">
              
              {/* Image avec overlay dynamique */}
              <div className="relative h-52 overflow-hidden  rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold tracking-wide">Voir Détails</span>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">{project.description}</p>
                
                {/* Technologies utilisées */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs sm:text-sm rounded-full bg-[#00bcff] text-white font-medium shadow-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Boutons interactifs */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2 rounded-lg bg-[#2b2b40] hover:bg-[#3a3a5a] transition-all duration-300 text-white font-medium shadow-md w-full sm:w-auto"
                  >
                    <Code size={18} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2 rounded-lg bg-[#00bcff] hover:bg-[#009edb] transition-all duration-300 text-white font-medium shadow-md w-full sm:w-auto"
                  >
                    <ExternalLink size={18} />
                    <span>Démo</span>
                  </a>
                </div>
              </div>
            </div>
          
        ))}
      </div>
    </section>
  );
};
