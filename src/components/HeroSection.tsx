import { Github, Linkedin, Download } from 'lucide-react';

export const HeroSection = () => (
  <section className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 rounded-lg shadow-xl">
    <div className="md:w-1/3 flex justify-center">
      <img
        src="/src/assets/images/photo_profil.jpg"
        alt="Profile"
        className="rounded-full w-48 h-48 md:w-56 md:h-56 object-cover shadow-lg border-4 border-white dark:border-gray-700 transition-transform transform hover:scale-105"
      />
    </div>
    <div className="md:w-2/3 text-center md:text-left space-y-6">
      <h2 className="sm:text- md:text-5xl font-extrabold text-gray-900 dark:text-white">Full Stack Developer</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-lg mx-auto md:mx-0">
        Passionate about creating innovative web solutions with modern technologies.
      </p>
      <div className="flex gap-6 justify-center md:justify-start mt-4 items-center">
        <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-[#00bcff] transition-all flex items-center">
          <Github size={28} />
        </a>
        <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-[#00bcff] transition-all flex items-center">
          <Linkedin size={28} />
        </a>
        <button className="text-white px-5 py-3 rounded-full flex items-center gap-3 font-semibold shadow-lg cursor-pointer hover:bg-[#01425a] bg-[#009edb]">
          <Download size={24} />
          Resume
        </button>
      </div>
    </div>
  </section>
);
