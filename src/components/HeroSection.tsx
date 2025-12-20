import { Github, Linkedin, Download } from 'lucide-react';
import { FaHandshake } from "react-icons/fa";
import { motion, Variants, useReducedMotion } from 'framer-motion';

interface HeroSectionProps {
  darkMode: boolean;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const HeroSection = ({ darkMode } : HeroSectionProps) => {
  const reduce = useReducedMotion();

  return (
    <motion.section
      id="hero"
      className={`mt-24 container container-hero mx-auto px-6 py-8 md:py-20 flex flex-col md:flex-row items-center gap-12 bg-gradient-to-b md:min-h-[80vh] from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 rounded-lg shadow-xl`}
      initial={reduce ? undefined : 'hidden'}
      animate={reduce ? undefined : 'visible'}
      variants={containerVariants}
    >
      <motion.div className="md:w-1/3 flex justify-center" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
        <motion.img
          src="/images/photo_profil.jpg"
          alt="Toavina Jr — profile"
          loading="lazy"
          className="rounded-full w-48 h-48 md:w-56 md:h-56 object-cover shadow-lg border-4 border-white dark:border-gray-700 transition-all duration-300 hover:scale-105"
          variants={{ hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'anticipate' } } }}
        />
      </motion.div>

      <motion.div className="md:w-2/3 text-center md:text-left space-y-3 md:space-y-6" variants={itemVariants}>
        <motion.h2
          className={`text-3xl md:text-5xl font-extrabold ${!darkMode ? "text-[#009edb]" : "text-white"}`}
          variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } } }}
        >
          Junior Developer
        </motion.h2>

        <motion.p className={`text-lg ${!darkMode ? "text-gray-600" : "text-gray-300"} max-w-lg mx-auto md:mx-0`} variants={itemVariants}>
          Passionate about creating innovative web solutions with modern technologies.
        </motion.p>

        <motion.div className="flex flex-col-reverse md:flex-row gap-6 justify-center md:justify-start mt-4 items-center" variants={itemVariants}>
          <motion.div className="flex gap-6" variants={itemVariants}>
            <a
              href="https://github.com/ToavinaJr"
              className={`${!darkMode ? "text-gray-700" : "text-gray-300"} hover:text-[#00bcff] dark:hover:text-[#00bcff] transition-all flex items-center hover:scale-110 duration-300`}
              target='_blank'
              rel="noopener noreferrer"
            >
              <Github size={28} className="animate-bounce-subtle" />
            </a>
            <a
              href="https://www.linkedin.com/in/randriamihaingoson-toavina-sylvianno-38a987276"
              className={`${!darkMode ? "text-gray-700" : "text-gray-300"} hover:text-[#00bcff] dark:hover:text-[#00bcff] transition-all flex items-center hover:scale-110 duration-300`}
              target='_blank'
              rel="noopener noreferrer"
            >
              <Linkedin size={28} className="animate-bounce-subtle" />
            </a>
          </motion.div>

          <motion.div className='flex xs:flex-col flex-row gap-6' variants={itemVariants}>
            <a href="/pdf/CV-RANDRIAMIHAINGOSON_Toavina_Sylvianno.pdf" download aria-label="Download resume" target='_blank' rel="noopener noreferrer" className="text-white p-2 md:px-5 md:py-3 rounded-full flex items-center gap-3 font-semibold shadow-lg cursor-pointer bg-[#01425a] hover:bg-[#009edb] transition-all duration-300 hover:scale-105">
              <Download size={24} />
              Resume
            </a>
            <a
              href="#contact"
              className="bg-blue-500 text-white p-2 md:px-5 md:py-3 rounded-full gap-3 font-semibold shadow-lg cursor-pointer hover:bg-[#009edb] hover:scale-105 dark:bg-blue-600 flex items-center"
            >
              Hire Me
              <FaHandshake size={24} />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

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

      .container-hero {
        background-image: url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%23442e68' fill-opacity='0.33'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
      }
    `}</style>
    </motion.section>
  );
};