import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Code, Briefcase, Mail, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import logoQynx from '../assets/logo_QYNX-Photoroom.png';
import { useTheme } from './ThemeContext';

const navLinks = [
  { path: '/', label: 'Accueil' },
  { path: '/about', label: 'À propos' },
  { path: '/skills', label: 'Compétences' },
  { path: '/projects', label: 'Projets' },
  { path: '/contact-projet', label: 'Démarrer un projet' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 0);
  }, [location]);

  return (
    <nav 
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
        scrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-slate-200 dark:border-slate-800 py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3">
          <img 
            src={logoQynx} 
            alt="QYNX Logo" 
            className="h-20 w-auto object-contain drop-shadow-xl"
          />
        </NavLink>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                clsx(
                  'text-sm font-medium transition-colors hover:text-accent-cyan',
                  isActive ? 'text-accent-cyan' : 'text-slate-600 dark:text-slate-300'
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a
            href="mailto:kennethdadzie506@gmail.com"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple text-white font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Me contacter
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-900 dark:text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    clsx(
                      'text-lg font-medium py-2 transition-colors',
                      isActive ? 'text-accent-cyan' : 'text-slate-700 dark:text-slate-300'
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-accent-cyan"><Code size={20} /></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-accent-purple"><Briefcase size={20} /></a>
                <a href="mailto:kennethdadzie506@gmail.com" className="text-slate-600 dark:text-slate-300 hover:text-tg-yellow"><Mail size={20} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
