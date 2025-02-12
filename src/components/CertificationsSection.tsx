import { Certification } from '../types';
import { useParallax } from 'react-scroll-parallax';
import { Image, Download } from 'lucide-react';

interface CertificationsSectionProps {
  certifications: Certification[];
}

export const CertificationsSection = ({ certifications }: CertificationsSectionProps) => {
  const titleParallax = useParallax({
    speed: 20,
    translateY: [0, 50],
    opacity: [1, 0],
  });

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 
        ref={titleParallax.ref as React.RefObject<HTMLHeadingElement>}
        className="text-3xl font-bold mb-8 text-center"
      >
        🎓 Certifications
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certifications.map((cert) => (
            <div className="group relative overflow-hidden rounded-lg shadow-md bg-white dark:bg-[#1e293b] transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              {/* Image avec overlay */}
              <div className="relative h-40 sm:h-48 overflow-hidden rounded-t-lg mb-2.5">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white text-sm font-medium tracking-wide">Voir Détails</span>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-4 sm:p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{cert.title}</h3>
                <p className="text-[#00bcff] mb-1 font-medium text-sm">{cert.issuer}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">{cert.date}</p>

                {/* Boutons */}
                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => window.open(cert.image, '_blank')}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 dark:bg-[#2b2b40] hover:bg-gray-300 dark:hover:bg-[#3a3a5a] transition-all duration-300 text-gray-800 dark:text-white font-medium shadow-sm"
                  >
                    <Image size={16} />
                    <span>Voir</span>
                  </button>
                  <a
                    href={cert.certificateLink}
                    download
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00bcff] hover:bg-[#009edb] transition-all duration-300 text-white font-medium shadow-sm"
                  >
                    <Download size={16} />
                    <span>Télécharger</span>
                  </a>
                </div>
              </div>
            </div>
        ))}
      </div>
    </section>
  );
};
