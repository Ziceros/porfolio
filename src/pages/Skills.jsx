import { motion } from 'framer-motion';
import { Code2, Database, Globe, Layout, Smartphone, Terminal, Server, GitBranch, Palette } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Layout,
    skills: [
      { name: 'HTML', level: 90, color: 'from-orange-500 to-red-500' },
      { name: 'CSS', level: 85, color: 'from-blue-500 to-cyan-500' },
      { name: 'JavaScript', level: 70, color: 'from-yellow-400 to-yellow-600' },
      { name: 'React', level: 65, color: 'from-cyan-400 to-blue-500' },
    ]
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      { name: 'PHP', level: 80, color: 'from-indigo-500 to-purple-500' },
      { name: 'Laravel', level: 78, color: 'from-red-500 to-orange-500' },
    ]
  },
  {
    title: 'Database',
    icon: Database,
    skills: [
      { name: 'MySQL', level: 75, color: 'from-blue-600 to-blue-800' },
    ]
  },
  {
    title: 'Outils & Autres',
    icon: Terminal,
    skills: [
      { name: 'Git', level: 80, color: 'from-orange-600 to-red-600' },
      { name: 'Figma', level: 60, color: 'from-pink-500 to-purple-600' },
      { name: 'Vercel', level: 70, color: 'from-gray-600 to-gray-800' },
    ]
  }
];

const techStack = [
  { name: 'HTML5', color: 'bg-orange-500' },
  { name: 'CSS3', color: 'bg-blue-500' },
  { name: 'JavaScript', color: 'bg-yellow-400' },
  { name: 'React', color: 'bg-cyan-400' },
  { name: 'PHP', color: 'bg-indigo-500' },
  { name: 'Laravel', color: 'bg-red-500' },
  { name: 'MySQL', color: 'bg-blue-600' },
  { name: 'Git', color: 'bg-orange-600' },
  { name: 'Tailwind', color: 'bg-cyan-500' },
  { name: 'Vercel', color: 'bg-gray-700' },
];

export default function Skills() {
  return (
    <div className="bg-white dark:bg-slate-900 pt-24 pb-20">
      {/* Hero */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 text-slate-900 dark:text-white">
                Mes <span className="bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">compétences</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Technologies et outils que j'utilise pour créer des projets incroyables
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <div className="flex flex-wrap justify-center gap-4 mb-20">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-semibold hover:border-accent-cyan/50 transition-all cursor-default text-slate-900 dark:text-white"
                >
                  <span className={`inline-block w-2 h-2 rounded-full mr-2 ${tech.color}`} />
                  {tech.name}
                </motion.div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, catIndex) => (
              <SectionReveal key={catIndex} delay={catIndex * 0.15}>
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 flex items-center justify-center border border-slate-200 dark:border-slate-700">
                      <category.icon size={28} className="text-accent-cyan" />
                    </div>
                    <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">{category.title}</h2>
                  </div>
                  
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: catIndex * 0.15 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between mb-2">
                          <span className="font-semibold text-slate-900 dark:text-white">{skill.name}</span>
                          <span className="text-slate-600 dark:text-slate-400">{skill.level}%</span>
                        </div>
                        <div className="h-3 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ delay: catIndex * 0.15 + skillIndex * 0.1 + 0.2, duration: 1, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="py-20 bg-slate-50/30 dark:bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-slate-900 dark:text-white">Ce que je fais</h2>
              <p className="text-slate-600 dark:text-slate-400">Services que je propose</p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: 'Développement Web',
                description: 'Création de sites web et applications web modernes et performants.'
              },
              {
                icon: Globe,
                title: 'Site Vitrine',
                description: 'Sites web professionnels pour présenter votre entreprise ou vos services.'
              },
              {
                icon: Database,
                title: 'Backend & API',
                description: 'Développement de backends robustes et d\'APIs RESTful.'
              },
              {
                icon: Layout,
                title: 'UI/UX Design',
                description: 'Création d\'interfaces utilisateur intuitives et agréables.'
              },
              {
                icon: Smartphone,
                title: 'Responsive Design',
                description: 'Sites web parfaitement adaptés à tous les écrans.'
              },
              {
                icon: GitBranch,
                title: 'Maintenance',
                description: 'Mise à jour et amélioration de vos projets existants.'
              }
            ].map((item, index) => (
              <SectionReveal key={index} delay={index * 0.1}>
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 hover:border-accent-cyan/50 transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-slate-200 dark:border-slate-700">
                    <item.icon size={28} className="text-accent-cyan" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
