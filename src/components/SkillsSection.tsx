import { Code, Database, Server, Activity, PenTool } from 'lucide-react';

interface SkillsSectionProps {
  darkMode: boolean;
}

export const SkillsSection = ({darkMode} : SkillsSectionProps) => {
  const skills = [
    { name: 'Frontend Development', icon: <Code size={32} /> },
    { name: 'Backend Development', icon: <Server size={32} /> },
    { name: 'Database Management', icon: <Database size={32} /> },
    // { name: 'Cybersecurity', icon: <Shield size={32} /> },
    { name: 'Problem Solving', icon: <Activity size={32} /> },
    { name: 'UI/UX Design', icon: <PenTool size={32} /> },
  ];

  return (
    <section id="skills" className="container mx-auto px-6 py-20 text-center animate-fade-in-up">
      <h2 className="text-4xl font-extrabold text-[#00bcff] mb-10 animate-text-focus-in">
        Skills & Expertises
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 animate-slide-in-left ${
              darkMode ? 'bg-[#1e293b] text-white' : 'bg-white text-gray-900'
            }`}
          >
            <div className="text-[#00bcff] mb-4 animate-bounce-subtle">{skill.icon}</div>
            <p className={`text-lg font-semibold ${darkMode ? "text-white" : "text-slate-600"} `}>
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
