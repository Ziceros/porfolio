import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';

const allProjects = [
  {
    id: 1,
    title: 'ChainCacao',
    description: 'Projet lauréat du Miabé Hackathon, 2ème place. Unique développeur de l\'équipe, j\'ai développé une plateforme complète.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    tags: ['Hackathon', 'Fullstack', 'PHP', 'MySQL'],
    category: 'fullstack',
    link: 'https://chaincaco.tech',
    github: 'https://github.com',
    color: 'from-tg-green to-tg-yellow',
    year: '2026'
  },
  {
    id: 2,
    title: 'UpFiesta',
    description: 'Plateforme d\'événementiel avec coordination d\'équipe. J\'ai supervisé le développement et assuré la cohérence du projet.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=400&fit=crop',
    tags: ['Team Lead', 'Web App', 'React', 'Laravel'],
    category: 'fullstack',
    link: 'https://upfiesta.com',
    github: 'https://github.com',
    color: 'from-accent-cyan to-accent-purple',
    year: '2026'
  },
  {
    id: 3,
    title: 'Happy Residence',
    description: 'Site web moderne et responsive pour l\'hôtel Happy Residence, hébergé sur Vercel avec d\'excellentes performances.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=400&fit=crop',
    tags: ['Hotel', 'Vercel', 'Frontend', 'UI/UX'],
    category: 'frontend',
    link: 'https://happyresidence.vercel.app',
    github: 'https://github.com',
    color: 'from-tg-red to-tg-yellow',
    year: '2026'
  },
  {
    id: 4,
    title: 'Portfolio V1',
    description: 'Ma première version de portfolio, réalisée avec HTML, CSS et JavaScript vanilla.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'frontend',
    link: '#',
    github: 'https://github.com',
    color: 'from-orange-500 to-red-500',
    year: '2026'
  },
  {
    id: 5,
    title: 'API REST',
    description: 'API RESTful développée avec Laravel pour une application mobile de gestion de tâches.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    tags: ['Laravel', 'API', 'Backend', 'MySQL'],
    category: 'backend',
    link: '#',
    github: 'https://github.com',
    color: 'from-red-500 to-orange-500',
    year: '2026'
  },
  {
    id: 6,
    title: 'Dashboard Admin',
    description: 'Interface d\'administration moderne avec React et Tailwind CSS pour la gestion de contenu.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    tags: ['React', 'Dashboard', 'Tailwind', 'Frontend'],
    category: 'frontend',
    link: '#',
    github: 'https://github.com',
    color: 'from-cyan-500 to-blue-500',
    year: '2026'
  }
];

const categories = [
  { id: 'all', label: 'Tous' },
  { id: 'fullstack', label: 'Fullstack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  return (
    <div className="bg-white dark:bg-slate-900 pt-24 pb-20">
      {/* Hero */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 text-slate-900 dark:text-white">
                Mes <span className="bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">projets</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Une sélection de mes travaux récents et de mes projets personnels
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    filter === category.id
                      ? 'bg-gradient-to-r from-accent-cyan to-accent-purple text-white shadow-lg shadow-accent-cyan/25'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <SectionReveal key={project.id} delay={index * 0.1}>
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl overflow-hidden hover:border-accent-cyan/50 hover:shadow-xl transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-80`} />
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <Code2 size={18} />
                </a>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 text-xs font-bold bg-gradient-to-r from-accent-cyan to-accent-purple text-white rounded-full">
                        {project.year}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-accent-cyan transition-colors text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              </SectionReveal>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-600 dark:text-slate-400 text-lg">Aucun projet dans cette catégorie pour le moment.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
