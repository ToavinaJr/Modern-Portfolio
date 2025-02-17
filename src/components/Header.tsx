import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  onThemeToggle: () => void;
}

export const Header = ({ darkMode, onThemeToggle }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '#hero', label: 'Accueil' },
    { href: '#projets', label: 'Projets' },
    { href: '#educations', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <span className="text-[#00bcff]">Toavina</span> Jr
        </h1>

        {/* Navigation desktop */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-[#00bcff] transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle darkMode={darkMode} onToggle={onThemeToggle} />
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
                className={`absolute top-0 left-0 transform transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                }`}
              />
              <Menu 
                className={`absolute top-0 left-0 transform transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Menu mobile avec animation */}
      <div 
        className={`fixed inset-0 bg-white dark:bg-gray-900 z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container mx-auto px-4 pt-24">
          <ul className="space-y-6">
            {navLinks.map((link, index) => (
              <li 
                key={link.href}
                className={`transform transition-all duration-300 ease-in-out ${
                  isMenuOpen 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-8 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <a
                  href={link.href}
                  className="block text-2xl font-semibold hover:text-[#00bcff] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;