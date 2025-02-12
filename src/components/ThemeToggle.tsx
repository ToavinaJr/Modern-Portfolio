import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  darkMode: boolean;
  onToggle: () => void;
}

const ThemeToggle = ({ darkMode, onToggle }: ThemeToggleProps) => (
  <button
    onClick={onToggle}
    className="p-2 rounded-full hover:bg-[#1e2939] transition-colors"
  >
    {darkMode ? <Sun size={24} /> : <Moon size={24} />}
  </button>
);

export default ThemeToggle;