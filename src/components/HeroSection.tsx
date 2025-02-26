import { Github, Linkedin, Download } from 'lucide-react';
import { FaHandshake } from "react-icons/fa";
export const HeroSection = () => (
  <section id="hero" className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 rounded-lg shadow-xl animate-fade-in">
    <div className="md:w-1/3 flex justify-center">
      <img
        src="/images/photo_profil.jpg"
        alt="Profile"
        className="rounded-full w-48 h-48 md:w-56 md:h-56 object-cover shadow-lg border-4 border-white dark:border-gray-700 transition-all duration-300 hover:scale-105 animate-slide-in-left"
      />
    </div>
    <div className="md:w-2/3 text-center md:text-left space-y-6 animate-slide-in-right">
      <h2 className="sm:text- md:text-5xl font-extrabold text-gray-900 dark:text-white animate-text-focus-in">
        Junior Developer
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-lg mx-auto md:mx-0 animate-fade-in-up">
        Passionate about creating innovative web solutions with modern technologies.
      </p>
      <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-start mt-4 items-center animate-fade-in-up">
        <div className="flex gap-6">
          <a 
            href="https://github.com/ToavinaJr" 
            className="text-gray-700 dark:text-gray-300 hover:text-[#00bcff] transition-all flex items-center hover:scale-110 duration-300" 
            target='_blank'
            >
            <Github size={28} className="animate-bounce-subtle"/>
          </a>
          <a 
            href="https://www.linkedin.com/in/randriamihaingoson-toavina-sylvianno-38a987276" 
            className="text-gray-700 dark:text-gray-300 hover:text-[#00bcff] transition-all flex items-center hover:scale-110 duration-300" 
            target='_blank'
            >
            <Linkedin size={28} className="animate-bounce-subtle"/>
          </a>
        </div>
        <div className='flex gap-6'>
          <button className="text-white px-5 py-3 rounded-full flex items-center gap-3 font-semibold shadow-lg cursor-pointer bg-[#01425a] hover:bg-[#009edb] transition-all duration-300 hover:scale-105 animate-pulse">
            <Download size={24} />
            Resume
          </button>
          <a 
            href="#contact" 
            className="text-gray-700 px-5 py-3 rounded-full  gap-3 font-semibold shadow-lg cursor-pointer  hover:bg-[#009edb] hover:scale-105 bg-blue-500 dark:text-gray-300 flex items-center " 
            >          
            Hire Me
            <FaHandshake size={24}/>
          </a>
        </div>
      </div>
    </div>
    <style >{`
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-100px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(100px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes textFocusIn {
        0% {
          filter: blur(12px);
          opacity: 0;
        }
        100% {
          filter: blur(0);
          opacity: 1;
        }
      }
      
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes bounceSlight {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-5px);
        }
      }
      
      .animate-fade-in {
        animation: fadeIn 1s ease-out;
      }
      
      .animate-slide-in-left {
        animation: slideInLeft 1s ease-out;
      }
      
      .animate-slide-in-right {
        animation: slideInRight 1s ease-out;
      }
      
      .animate-text-focus-in {
        animation: textFocusIn 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
      }
      
      .animate-fade-in-up {
        animation: fadeInUp 1s ease-out;
      }
      
      .animate-bounce-subtle {
        animation: bounceSlight 2s infinite;
      }
    `}</style>
  </section>
);