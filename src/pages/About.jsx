import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Heart, MapPin, Globe, Code } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';
import kenPhoto from '../assets/ken.png';

const timeline = [
  {
    year: '2026',
    title: 'Année de tous les projets',
    description: 'Miabé Hackathon (2ème place avec ChainCacao), UpFiesta, Happy Residence et bien d\'autres ont été développés cette année.',
    icon: Award,
    color: 'from-tg-yellow to-tg-red'
  },
  {
    year: '2025',
    title: 'Début du développement',
    description: 'Découverte et apprentissage des technologies web (HTML, CSS, JS).',
    icon: GraduationCap,
    color: 'from-accent-purple to-tg-yellow'
  }
];

const values = [
  {
    title: 'Passion',
    description: 'J\'aime ce que je fais et ça se ressent dans mon travail.',
    icon: Heart,
    color: 'text-tg-red'
  },
  {
    title: 'Qualité',
    description: 'Je vise toujours l\'excellence dans chaque ligne de code.',
    icon: Award,
    color: 'text-tg-yellow'
  },
  {
    title: 'Innovation',
    description: 'Toujours à la recherche de nouvelles technologies et solutions.',
    icon: Code,
    color: 'text-accent-cyan'
  }
];

export default function About() {
  return (
    <div className="bg-white dark:bg-slate-900 pt-24 pb-20">
      {/* Hero */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 text-slate-900 dark:text-white">
                À propos de <span className="bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">moi</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Développeur Fullstack passionné, basé à Lomé, au Togo 🇹🇬
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 rounded-3xl blur-xl" />
                <div className="relative bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-64 h-64 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple p-2 overflow-hidden shadow-2xl">
                      <img src={kenPhoto} alt="Dadzie Kamal Kenneth" className="w-full h-full object-cover rounded-full" />
                    </div>
                    <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">Dadzie Kamal Kenneth</h3>
                    <p className="text-slate-600 dark:text-slate-400">Développeur Fullstack</p>
                    <div className="flex items-center justify-center gap-2 mt-4 text-slate-600 dark:text-slate-400">
                      <MapPin size={16} />
                      <span>Lomé, Togo</span>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="space-y-6">
                <p className="text-lg text-slate-900 dark:text-white leading-relaxed">
                  Salut ! Je suis Kenneth, un développeur web passionné par la création d'expériences numériques exceptionnelles. Basé au Togo, je combine créativité et technique pour donner vie à des projets ambitieux.
                </p>
                <p className="text-lg text-slate-900 dark:text-white leading-relaxed">
                  Mon parcours a commencé avec une curiosité pour le web, et aujourd'hui, je maîtrise un stack complet allant du frontend au backend, avec une préférence pour <span className="text-accent-cyan font-semibold">Laravel</span> et <span className="text-accent-purple font-semibold">React</span>.
                </p>
                <p className="text-lg text-slate-900 dark:text-white leading-relaxed">
                  Quand je ne code pas, j'aime explorer de nouvelles technologies, participer à des hackathons et contribuer à la communauté tech togolaise.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* QYNX Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-slate-900 dark:text-white">
                <span className="bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">QYNX</span> - Mon Entreprise
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Votre vision, connectée à l’infini.</p>
            </div>
          </SectionReveal>

          {/* QYNX Mission */}
          <SectionReveal>
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 md:p-12 mb-12">
              <h3 className="text-2xl font-bold mb-6 font-display text-slate-900 dark:text-white">Notre Mission</h3>
              <p className="text-lg text-slate-900 dark:text-white leading-relaxed">
                QYNX est un écosystème technologique spécialisé dans la création et le développement de solutions web et mobiles de pointe. L'entreprise fusionne l'agilité stratégique, la précision d'ingénierie et une vision globale pour concevoir des applications robustes, fluides et prêtes pour le futur.
              </p>
            </div>
          </SectionReveal>

          {/* QYNX Acronym */}
          <SectionReveal delay={0.1}>
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-8 font-display text-center text-slate-900 dark:text-white">L'Acronyme QYNX</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { letter: 'Q', name: 'Quantum', desc: 'L\'Innovation Absolue. Évoque la vitesse supérieure et les technologies d\'avant-garde.' },
                  { letter: 'Y', name: 'Yield', desc: 'La Performance & Le Rendement. Symbolise l\'efficacité du code et le retour sur investissement.' },
                  { letter: 'N', name: 'Nexus', desc: 'La Connexion Centrale. Le point de convergence où les idées se transforment en outils numériques.' },
                  { letter: 'X', name: 'Multiplier', desc: 'L\'Expansion Infinie. La croissance exponentielle et les possibilités illimitées.' }
                ].map((item, index) => (
                  <SectionReveal key={index} delay={index * 0.1}>
                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 text-center hover:border-accent-cyan/50 transition-all group">
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center text-3xl font-bold text-white group-hover:scale-110 transition-transform">
                        {item.letter}
                      </div>
                      <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{item.name}</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* QYNX Values */}
          <SectionReveal delay={0.2}>
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-8 font-display text-center text-slate-900 dark:text-white">Nos Valeurs Clés</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: 'La Clarté', icon: '👁️', desc: 'Des interfaces épurées, intuitives et fluides. La complexité doit rester invisible pour l\'utilisateur.' },
                  { title: 'La Robustesse', icon: '🏗️', desc: 'Pas de compromis sur la sécurité ni la performance. Des architectures solides comme des fondations de gratte-ciel.' },
                  { title: 'L\'Évolution', icon: '🚀', desc: 'Des solutions modulaires et évolutives, prêtes pour les technologies de demain (IA, automatisations).' }
                ].map((value, index) => (
                  <SectionReveal key={index} delay={index * 0.1}>
                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 text-center hover:border-accent-cyan/50 transition-all group">
                      <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                        {value.icon}
                      </div>
                      <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{value.title}</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">{value.desc}</p>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* QYNX Concept */}
          <SectionReveal delay={0.3}>
            <div className="bg-gradient-to-r from-accent-cyan/10 to-accent-purple/10 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 md:p-12 text-center">
              <div className="text-6xl mb-6">🐱‍👤 ∞</div>
              <h3 className="text-2xl font-bold mb-6 font-display text-slate-900 dark:text-white">Le Lynx & L'Infini</h3>
              <p className="text-lg text-slate-900 dark:text-white leading-relaxed max-w-3xl mx-auto">
                QYNX, c’est l’œil du lynx pour la précision du code, combiné à la puissance de l'infini pour la croissance des projets de nos clients. Nous ne créons pas de simples sites ou applications, nous bâtissons des moteurs de croissance durables.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50/30 dark:bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-slate-900 dark:text-white">Mes valeurs</h2>
              <p className="text-slate-600 dark:text-slate-400">Ce qui me guide au quotidien</p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <SectionReveal key={index} delay={index * 0.15}>
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 text-center hover:border-accent-cyan/50 transition-all group">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center ${value.color} group-hover:scale-110 transition-transform`}>
                    <value.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{value.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{value.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-slate-900 dark:text-white">Mon parcours</h2>
              <p className="text-slate-600 dark:text-slate-400">Une évolution constante</p>
            </div>
          </SectionReveal>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 transform md:-translate-x-1/2" />
            
            {timeline.map((item, index) => (
              <SectionReveal key={index} delay={index * 0.15}>
                <motion.div
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 hover:border-accent-cyan/50 transition-colors">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 bg-gradient-to-r ${item.color} text-white`}>
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{item.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-200 dark:border-slate-700 transform -translate-x-1/2 z-10 flex items-center justify-center">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.color}`} />
                  </div>
                  
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
