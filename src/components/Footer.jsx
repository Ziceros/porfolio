import { Code, Briefcase, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold font-display mb-4 text-slate-900 dark:text-white">
              <span className="bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">
                DADZIE KAMAL KENNETH
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-md">
              Développeur Fullstack passionné, basé au Togo, créant des expériences web modernes et performantes.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-white hover:bg-accent-cyan transition-all">
                <Code size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-white hover:bg-accent-purple transition-all">
                <Briefcase size={20} />
              </a>
              <a href="mailto:kennethdadzie506@gmail.com" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-white hover:bg-tg-yellow transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Navigation</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-slate-600 dark:text-slate-400 hover:text-accent-cyan transition-colors">Accueil</a></li>
              <li><a href="/about" className="text-slate-600 dark:text-slate-400 hover:text-accent-cyan transition-colors">À propos</a></li>
              <li><a href="/skills" className="text-slate-600 dark:text-slate-400 hover:text-accent-cyan transition-colors">Compétences</a></li>
              <li><a href="/projects" className="text-slate-600 dark:text-slate-400 hover:text-accent-cyan transition-colors">Projets</a></li>
              <li><a href="/contact" className="text-slate-600 dark:text-slate-400 hover:text-accent-cyan transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <Mail size={16} />
                <span>kennethdadzie506@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <Phone size={16} />
                <span>+228 70 23 54 73</span>
              </li>
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <MapPin size={16} />
                <span>Lomé, Togo</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-700 pt-8 text-center text-slate-500 dark:text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Dadzie Kamal Kenneth. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
