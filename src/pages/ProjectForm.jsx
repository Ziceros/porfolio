import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Briefcase, FileText, DollarSign, Clock, MessageSquare, Code, Image, Database, Smartphone, Globe } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';

export default function ProjectForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    projectDescription: '',
    budget: '',
    deadline: '',
    features: [],
    references: '',
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const featureOptions = [
    { id: 'responsive', label: 'Design Responsive', icon: Smartphone },
    { id: 'cms', label: 'CMS / Admin', icon: Database },
    { id: 'ecommerce', label: 'E-commerce', icon: DollarSign },
    { id: 'seo', label: 'SEO Optimisé', icon: Globe },
    { id: 'animations', label: 'Animations', icon: Code },
    { id: 'images', label: 'Galerie / Médias', icon: Image },
    { id: 'contact', label: 'Formulaire de contact', icon: MessageSquare },
    { id: 'api', label: 'Intégration API', icon: Database },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        features: checked 
          ? [...prev.features, value]
          : prev.features.filter(feature => feature !== value)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      // Simulation d'envoi (remplacez par EmailJS ou autre service)
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Project form submitted:', formData);
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        projectDescription: '',
        budget: '',
        deadline: '',
        features: [],
        references: '',
      });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 text-slate-900 dark:text-white">
                <span className="bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">
                  Décrivez votre projet
                </span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Remplissez ce formulaire et je vous recontacte rapidement pour discuter de votre projet !
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-6">
          <SectionReveal delay={0.1}>
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 md:p-12">
              
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8 p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-2xl flex items-center gap-4"
                >
                  <CheckCircle size={32} className="text-green-600 dark:text-green-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-300">Merci !</h3>
                    <p className="text-green-700 dark:text-green-400">Votre demande a été envoyée avec succès. Je vous recontacte dans les plus brefs délais.</p>
                  </div>
                </motion.div>
              )}
              
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8 p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-2xl flex items-center gap-4"
                >
                  <span className="text-2xl flex-shrink-0">⚠️</span>
                  <div>
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-300">Oups !</h3>
                    <p className="text-red-700 dark:text-red-400">Une erreur est survenue. Veuillez réessayer.</p>
                  </div>
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Step 1: Contact Info */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple flex items-center justify-center text-white font-bold">1</div>
                    <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">Vos coordonnées</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-900 dark:text-slate-300">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-accent-cyan transition-all"
                        placeholder="Votre nom"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-900 dark:text-slate-300">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-accent-cyan transition-all"
                        placeholder="votre@email.com"
                      />
                    </div>
                    
                    <div className="md:col-span-2 space-y-2">
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 dark:text-slate-300">
                        Téléphone (optionnel)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-accent-cyan transition-all"
                        placeholder="+228 00 00 00 00"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Step 2: Project Info */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple flex items-center justify-center text-white font-bold">2</div>
                    <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">Votre projet</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="projectType" className="block text-sm font-semibold text-slate-900 dark:text-slate-300">
                        Type de projet *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-accent-cyan transition-all"
                      >
                        <option value="">Sélectionnez un type de projet</option>
                        <option value="site-vitrine">Site vitrine</option>
                        <option value="ecommerce">Boutique e-commerce</option>
                        <option value="webapp">Application web</option>
                        <option value="landing">Landing page</option>
                        <option value="blog">Blog / Magazine</option>
                        <option value="refonte">Refonte de site existant</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="projectDescription" className="block text-sm font-semibold text-slate-900 dark:text-slate-300">
                        Décrivez votre projet *
                      </label>
                      <textarea
                        id="projectDescription"
                        name="projectDescription"
                        value={formData.projectDescription}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-accent-cyan transition-all resize-none"
                        placeholder="Quel est le but de votre site/app ? Quels sont vos objectifs ? Décrivez votre projet en quelques phrases..."
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="budget" className="block text-sm font-semibold text-slate-900 dark:text-slate-300 flex items-center gap-2">
                          <DollarSign size={16} />
                          Budget estimé
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-accent-cyan transition-all"
                        >
                          <option value="">Sélectionnez une tranche</option>
                          <option value="500-1000">500€ - 1 000€</option>
                          <option value="1000-3000">1 000€ - 3 000€</option>
                          <option value="3000-5000">3 000€ - 5 000€</option>
                          <option value="5000-10000">5 000€ - 10 000€</option>
                          <option value="10000+">10 000€ et plus</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="deadline" className="block text-sm font-semibold text-slate-900 dark:text-slate-300 flex items-center gap-2">
                          <Clock size={16} />
                          Date limite souhaitée
                        </label>
                        <input
                          type="date"
                          id="deadline"
                          name="deadline"
                          value={formData.deadline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-accent-cyan transition-all"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Step 3: Features */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple flex items-center justify-center text-white font-bold">3</div>
                    <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">Fonctionnalités souhaitées</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {featureOptions.map((option) => {
                      const Icon = option.icon;
                      const isChecked = formData.features.includes(option.id);
                      return (
                        <label
                          key={option.id}
                          className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            isChecked 
                              ? 'border-accent-cyan bg-accent-cyan/5 dark:bg-accent-cyan/10' 
                              : 'border-slate-200 dark:border-slate-700 hover:border-accent-cyan/50 bg-slate-50 dark:bg-slate-700/50'
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="features"
                            value={option.id}
                            checked={isChecked}
                            onChange={handleChange}
                            className="w-4 h-4 text-accent-cyan focus:ring-accent-cyan"
                          />
                          <Icon size={20} className={isChecked ? 'text-accent-cyan' : 'text-slate-500 dark:text-slate-400'} />
                          <span className="font-medium text-slate-900 dark:text-slate-300">{option.label}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
                
                {/* Step 4: References */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple flex items-center justify-center text-white font-bold">4</div>
                    <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">Références (optionnel)</h2>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="references" className="block text-sm font-semibold text-slate-900 dark:text-slate-300">
                      Liens vers des sites/apps que vous aimez
                    </label>
                    <textarea
                      id="references"
                      name="references"
                      value={formData.references}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-accent-cyan transition-all resize-none"
                      placeholder="Listez les liens de sites/applications que vous aimez ou qui inspirent votre projet..."
                    />
                  </div>
                </div>
                
                {/* Submit Button */}
                <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-4 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-xl font-bold text-white text-lg hover:opacity-90 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer ma demande
                        <Send size={20} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
