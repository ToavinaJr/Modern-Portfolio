import { Mail } from 'lucide-react';
import { useParallax } from 'react-scroll-parallax';

interface ContactFormProps {
  darkMode: boolean;
}

export const ContactForm = ({ darkMode }: ContactFormProps) => {
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
        🤙 Contact Me
      </h2>
      <form 
        className={`max-w-lg mx-auto sm:space-y-4 space-y-6 p-8 rounded-lg shadow-lg ${darkMode ? 'bg-[#1e293b] text-white' : 'bg-white text-gray-900'}`}
        action="https://formspree.io/f/xrbeaovo"
        method="POST"
      >
        <div className="relative">
          <label className={`block mb-2 text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Name</label>
          <input
            type="text"
            className={`w-full p-3 rounded-lg border ${darkMode ? 'border-gray-600 bg-[#1e293b] text-white' : 'border-gray-300 bg-gray-100 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-[#00bcff] transition`}
            name="name"
          />
        </div>
        <div className="relative">
          <label className={`block mb-2 text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
          <input
            type="email"
            className={`w-full p-3 rounded-lg border ${darkMode ? 'border-gray-600 bg-[#1e293b] text-white' : 'border-gray-300 bg-gray-100 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-[#00bcff] transition`}
            name="email"
          />
        </div>
        <div className="relative">
          <label className={`block mb-2 text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
          <textarea
            rows={4}
            className={`w-full p-3 rounded-lg border ${darkMode ? 'border-gray-600 bg-[#1e293b] text-white' : 'border-gray-300 bg-gray-100 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-[#00bcff] transition`}
            name='text'
          />
        </div>
        <input type="hidden" name="_next" value="https://portfolio-toavinajr.vercel.app"></input>
        <button
          type="submit"
          className="w-full cursor-pointer bg-[#01425a] hover:bg-[#009edb] transition-all duration-300 text-white py-3 rounded-lg flex items-center justify-center gap-2 shadow-md"
        >
          <Mail size={20} />
          Send Message
        </button>
        
      </form>
    </section>
  );
};
