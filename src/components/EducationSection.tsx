import { Education } from '../types';
import { ParallaxCard } from './ParallaxCard';
import { School } from 'lucide-react';

interface EducationSectionProps {
  education: Education[];
  darkMode: boolean;
}

export const EducationSection = ({ education, darkMode }: EducationSectionProps) => {
  return (
    <section id='educations' className="container mx-auto px-4 py-16">
      <h2 
        className="text-4xl text-gray-900 dark:text-gray-600  font-extrabold text-center mb-12 tracking-wide "
      >
        🎓 Education
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {education.map((edu, index) => (
          <ParallaxCard key={index} darkMode={darkMode} index={index}>
            <div className="group relative overflow-hidden rounded-lg p-6 bg-gradient-to-r from-[#1e293b] to-[#00bcff] text-white shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <School size={24} className="text-[#00bcff]" />
                <h3 className="text-xl font-bold">{edu.degree}</h3>
              </div>
              <p className="text-lg font-semibold mb-2">{edu.school}</p>
              <p className="text-sm opacity-80">{edu.period}</p>
            </div>
          </ParallaxCard>
        ))}
      </div>
    </section>
  );
};