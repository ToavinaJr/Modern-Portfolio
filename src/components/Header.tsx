import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  onThemeToggle: () => void;
}

export const Header = ({ darkMode, onThemeToggle }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#hero');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '#hero', label: 'Accueil' },
    { href: '#projets', label: 'Projets' },
    { href: "#certificats", label: 'Certificats' },
    { href: '#educations', label: 'Education' },
    { href: '#skills', label: 'Skills' },
    { href: '#stack', label: 'Stack' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="container backdrop-blur-md sticky z-[50] top-0 left-0 mx-auto px-4 py-6 animate-fade-in">
      <nav className="flex justify-between items-center">
        <h1 className="text-2xl font-bold animate-slide-down">
          <span className="text-[#00bcff] hover:text-[#009edb] transition-colors duration-300">Toavina</span>
          <span className="animate-text-focus-in"> Jr</span>
        </h1>

        {/* Navigation desktop */}
        <div className="hidden md:flex items-center gap-8 animate-slide-down">
          <ul className="flex space-x-6">
            {navLinks.map((link, index) => (
              <li 
                key={link.href}
                className="transform transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <a
                  href={link.href}
                  className={`relative py-2 hover:text-[#00bcff] transition-colors duration-200 dark:text-gray-200
                    ${activeLink === link.href ? 'text-[#00bcff]' : ''}
                    after:content-[''] after:absolute after:w-full after:h-0.5 
                    after:bg-[#00bcff] after:left-0 after:bottom-0 
                    after:transform after:scale-x-0 after:origin-right
                    after:transition-transform after:duration-300
                    hover:after:scale-x-100 hover:after:origin-left`}
                  onClick={() => setActiveLink(link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
            <ThemeToggle darkMode={darkMode} onToggle={onThemeToggle} />
          </div>
        </div>

        {/* Bouton menu burger et theme toggle mobile */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle darkMode={darkMode} onToggle={onThemeToggle} />
          <button
            onClick={toggleMenu}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors relative z-50"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <X
                className={`absolute top-0 left-0 transform transition-all duration-300 ease-in-out text-gray-800 dark:text-gray-200 ${
                  isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                }`}
              />
              <Menu 
                className={`absolute top-0 left-0 transform transition-all duration-300 ease-in-out text-gray-800 dark:text-gray-200 ${
                  isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Menu mobile avec modes sombre/clair améliorés */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-gray-50 dark:bg-gray-900 backdrop-blur-none z-40 transform transition-all duration-300 ease-in-out md:hidden overflow-hidden ${
          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="h-full container mx-auto px-4 pt-24 bg-gray-50 dark:bg-gray-900">
          <ul className="space-y-6">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className={`transform transition-all duration-300 ease-in-out
                  ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <a
                  href={link.href}
                  className={`block text-2xl font-semibold text-gray-900 dark:text-gray-100
                    hover:text-[#00bcff] dark:hover:text-[#00bcff] transition-all duration-300 
                    hover:translate-x-2 ${activeLink === link.href ? 'text-[#00bcff] dark:text-[#00bcff]' : ''}`}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveLink(link.href);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
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

        .animate-slide-down {
          animation: slideDown 0.5s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .animate-text-focus-in {
          animation: textFocusIn 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
        }
      `}</style>
    </header>
  );
};

export default Header;