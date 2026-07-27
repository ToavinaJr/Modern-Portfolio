import { Certification } from '../types';
import { Image, Download } from 'lucide-react';

interface CertificationsSectionProps {
  certifications: Certification[];
}

export const CertificationsSection = ({ certifications }: CertificationsSectionProps) => {
  return (
    <section id="certificats" className="container mx-auto px-4 mb-4 py-12">
      <h2 
        className="text-3xl text-[#00bcff] font-bold mb-6 text-center"
      >
        🏅 Certifications
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {certifications.map((cert) => (
            <div className="group relative overflow-hidden rounded-lg shadow-md bg-white dark:bg-[#1e293b] transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              {/* Image avec overlay */}
              <div className="relative border-1 h-28 sm:h-32 overflow-hidden rounded-t-lg">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Contenu */}
              <div className="p-3">
                <h3 className="text-sm sm:text-base font-semibold mb-1 text-gray-900 dark:text-white leading-snug">{cert.title}</h3>
                <p className="text-[#00bcff] mb-0.5 font-medium text-xs">{cert.issuer}</p>
                {cert.date && (
                  <p className="text-[11px] text-gray-600 dark:text-gray-400 mb-2">{cert.date}</p>
                )}

                {/* Boutons */}
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => window.open(cert.image, '_blank')}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-md cursor-pointer bg-gray-200 dark:bg-[#2b2b40] hover:bg-gray-300 dark:hover:bg-[#3a3a5a] transition-all duration-300 text-gray-800 dark:text-white font-medium shadow-sm"
                  >
                    <Image size={14} />
                    <span>View</span>
                  </button>
                  <a
                    href={cert.image}
                    download
                    className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-md bg-[#01425a] hover:bg-[#009edb] transition-all duration-300 text-white font-medium shadow-sm"
                  >
                    <Download size={14} />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </div>
        ))}
      </div>
    </section>
  );
};
