import { motion } from 'framer-motion';
import { ArrowRight, Code, Terminal, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionReveal from '../components/SectionReveal';
import logoQynx from '../assets/logo_QYNX-Photoroom.png';

const stats = [
  { number: '1+', label: 'Années d\'expérience' },
  { number: '10+', label: 'Projets réalisés' },
  { number: '2026', label: 'Prix Hackathon' },
  { number: '5+', label: 'Technologies' },
];

const featuredProjects = [
  {
    title: 'ChainCacao',
    description: 'Projet lauréat du Miabé Hackathon, 2ème place. Unique développeur de l\'équipe.',
    tags: ['Hackathon', 'Fullstack'],
    color: 'from-tg-green to-tg-yellow',
    link: 'https://chaincaco.tech'
  },
  {
    title: 'Eduschool Pro',
    description: 'Site de gestion d\'école et génération de bulletins automatiques.',
    tags: ['Education', 'Fullstack'],
    color: 'from-accent-cyan to-accent-purple',
    link: 'https://eduschoolpro.upfiesta.com'
  },
  {
    title: 'UpFiesta',
    description: 'Plateforme d\'événementiel avec coordination d\'équipe.',
    tags: ['Team Lead', 'Web App'],
    color: 'from-tg-red to-tg-yellow',
    link: 'https://upfiesta.com'
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 0.3 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] max-w-[2500px] flex items-center justify-center"
          >
            <img 
              src={logoQynx} 
              alt="" 
              className="w-full h-full object-contain"
            />
          </motion.div>
          <motion.div
            animate={{ 
              x: [0, 50, -50, 0],
              y: [0, -30, 30, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              x: [0, -40, 40, 0],
              y: [0, 40, -40, 0],
              scale: [1, 1.15, 1]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              x: [0, 30, -30, 0],
              y: [0, -50, 50, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-tg-yellow/15 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold font-display leading-tight mb-6 text-slate-900 dark:text-white"
              >
                Salut, je suis <br />
                <span className="bg-gradient-to-r from-accent-cyan via-accent-purple to-tg-yellow bg-clip-text text-transparent">
                  Kenneth
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-lg"
              >
                Développeur Fullstack passionné basé au Togo. Je crée des expériences web modernes, performantes et mémorables.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/contact-projet"
                  className="px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full font-semibold text-white hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                  Démarrer un projet
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/projects"
                  className="px-8 py-4 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full font-semibold text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  Voir mes projets
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 rounded-3xl rotate-6 blur-sm" />
                <div className="relative bg-slate-100/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm rounded-3xl overflow-hidden flex items-center justify-center" style={{ height: '450px' }}>
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center">
                      <Code size={48} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold font-display mb-2 text-slate-900 dark:text-white">Creative Developer</h3>
                    <p className="text-slate-600 dark:text-slate-400">Building modern web experiences</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-50/50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <SectionReveal key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold font-display mb-2 bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 dark:text-slate-400">{stat.label}</div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 text-slate-900 dark:text-white">Mes compétences</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Technologies et outils que j'utilise au quotidien</p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: Code, label: 'HTML/CSS' },
              { icon: Terminal, label: 'JavaScript' },
              { icon: Code, label: 'React' },
              { icon: Database, label: 'PHP' },
              { icon: Database, label: 'Laravel' },
              { icon: Database, label: 'MySQL' },
            ].map((skill, index) => (
              <SectionReveal key={index} delay={index * 0.1}>
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 text-center hover:border-accent-cyan/50 transition-colors group">
                  <skill.icon size={32} className="mx-auto mb-4 text-slate-600 dark:text-slate-400 group-hover:text-accent-cyan transition-colors" />
                  <span className="font-medium text-slate-900 dark:text-white">{skill.label}</span>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal className="text-center mt-12">
            <Link
              to="/skills"
              className="inline-flex items-center gap-2 text-accent-cyan hover:text-accent-purple transition-colors font-semibold"
            >
              Voir toutes les compétences
              <ArrowRight size={18} />
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-slate-50/30 dark:bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 text-slate-900 dark:text-white">Projets récents</h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl">Un aperçu de mes derniers travaux</p>
              </div>
              <Link
                to="/projects"
                className="mt-4 md:mt-0 inline-flex items-center gap-2 text-accent-cyan hover:text-accent-purple transition-colors font-semibold"
              >
                Voir tous les projets
                <ArrowRight size={18} />
              </Link>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <SectionReveal key={index} delay={index * 0.15}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group block"
                >
                  <div className={`bg-gradient-to-br ${project.color} p-1 rounded-2xl`}>
                    <div className="bg-white dark:bg-slate-900 rounded-xl p-6 h-full">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-accent-cyan transition-colors text-slate-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">{project.description}</p>
                    </div>
                  </div>
                </a>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionReveal>
            <div className="bg-gradient-to-r from-accent-cyan/10 via-accent-purple/10 to-tg-yellow/10 border border-slate-200 dark:border-slate-700 rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-slate-900 dark:text-white">
                Vous avez un projet en tête ?
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                Discutons de votre projet et voyons comment je peux vous aider à le réaliser.
              </p>
              <Link
                to="/contact-projet"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full font-semibold text-white hover:opacity-90 transition-opacity"
              >
                Commençons une conversation
                <ArrowRight size={20} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
