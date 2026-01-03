import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-full glass flex items-center justify-center group overflow-hidden transition-all duration-300 hover:scale-110"
      aria-label="Toggle theme"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Icons with rotation animation */}
      <div className="relative w-6 h-6">
        <Sun 
          className={`absolute inset-0 w-6 h-6 text-secondary transition-all duration-500 ${
            resolvedTheme === 'dark' 
              ? 'rotate-0 scale-100 opacity-100' 
              : 'rotate-90 scale-0 opacity-0'
          }`} 
        />
        <Moon 
          className={`absolute inset-0 w-6 h-6 text-primary transition-all duration-500 ${
            resolvedTheme === 'light' 
              ? 'rotate-0 scale-100 opacity-100' 
              : '-rotate-90 scale-0 opacity-0'
          }`} 
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
