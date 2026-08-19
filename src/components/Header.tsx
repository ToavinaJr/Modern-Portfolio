import { Menu, Moon, Sun, X } from 'lucide-react';
import { useMobileMenu } from '../hooks/useMobileMenu';

const navigation = [['Home', '/'], ['Projects', '/projects'], ['About', '/#about'], ['Experience', '/#experience'], ['Skills', '/#skills'], ['Contact', '/#contact']];

export function Header({ dark, setDark }: { dark: boolean; setDark: (value: boolean) => void }) {
  const menu = useMobileMenu();

  return <header className="site-header">
    <a className="brand" href="/" aria-label="ToavinaJr home">
      Toavina<span>Jr</span>
    </a>

    <nav
      id="primary-menu"
      aria-label="Primary navigation"
      className={menu.open ? 'open' : ''}
    >
      {navigation.map(([label, href]) => (
        <a
          key={label}
          href={href}
          onClick={menu.close}
        >
          {label}
        </a>
      ))}
    </nav>

    <div className="header-actions">
      <button
        className="icon-button"
        onClick={() => setDark(!dark)}
        aria-label={`Use ${dark ? 'light' : 'dark'} theme`}
      >
        {dark ? <Sun /> : <Moon />}
      </button>

      <button
        className="menu-button icon-button"
        onClick={menu.toggle}
        aria-expanded={menu.open}
        aria-controls="primary-menu"
        aria-label="Toggle navigation"
      >
        {menu.open ? <X /> : <Menu />}
      </button>
    </div>
  </header>
}
