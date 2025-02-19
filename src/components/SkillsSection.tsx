import { Code, Database, Server, Activity, Shield, PenTool } from 'lucide-react';

export const SkillsSection = () => {
  const skills = [
    { name: 'Frontend Development', icon: <Code size={32} /> },
    { name: 'Backend Development', icon: <Server size={32} /> },
    { name: 'Database Management', icon: <Database size={32} /> },
    { name: 'Cybersecurity', icon: <Shield size={32} /> },
    { name: 'Problem Solving', icon: <Activity size={32} /> },
    { name: 'UI/UX Design', icon: <PenTool size={32} /> },
  ];

  return (
    <section id="skills" className="container mx-auto px-6 py-20 text-center animate-fade-in-up">
      <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-600 mb-10 animate-text-focus-in">
        Skills & Expertise
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 animate-slide-in-left"
          >
            <div className="text-[#00bcff] mb-4 animate-bounce-subtle">{skill.icon}</div>
            <p className="text-lg font-semibold text-gray-900 dark:text-gray-300">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
