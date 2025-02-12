import ThemeToggle  from './ThemeToggle';

interface HeaderProps {
  darkMode: boolean;
  onThemeToggle: () => void;
}

export const Header = ({ darkMode, onThemeToggle }: HeaderProps) => (
  <header className="container mx-auto px-4 py-6">
    <nav className="flex justify-between items-center">
      <h1 className="text-2xl font-bold"> <span className='text-[#00bcff]'>Toavina</span> Jr</h1>
      <ThemeToggle darkMode={darkMode} onToggle={onThemeToggle} />
    </nav>
  </header>
);

export default Header;