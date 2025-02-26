import { Certification } from '../types';
import { Image, Download } from 'lucide-react';

interface CertificationsSectionProps {
  certifications: Certification[];
}

export const CertificationsSection = ({ certifications }: CertificationsSectionProps) => {
  return (
    <section id="certificats" className="container mx-auto px-4 mb-4 py-16">
      <h2 
        className="text-3xl text-[#00bcff] font-bold mb-8 text-center"
      >
        🏅 Certifications
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {certifications.map((cert) => (
            <div className="group relative overflow-hidden rounded-lg shadow-md bg-white dark:bg-[#1e293b] transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              {/* Image avec overlay */}
              <div className="relative border-1 h-40 sm:h-48 overflow-hidden rounded-t-lg mb-2.5">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
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
                    className="flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer bg-gray-200 dark:bg-[#2b2b40] hover:bg-gray-300 dark:hover:bg-[#3a3a5a] transition-all duration-300 text-gray-800 dark:text-white font-medium shadow-sm"
                  >
                    <Image size={16} />
                    <span>View</span>
                  </button>
                  <a
                    href={cert.image}
                    download
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#01425a] hover:bg-[#009edb] transition-all duration-300 text-white font-medium shadow-sm"
                  >
                    <Download size={16} />
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
