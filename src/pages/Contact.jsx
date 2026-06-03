import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Code, Briefcase, MessageCircle } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Pour utiliser EmailJS, vous devrez créer un compte sur emailjs.com
      // et remplacer ces valeurs par les vôtres
      /*
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        'YOUR_PUBLIC_KEY'
      );
      */
      
      // Simulation d'envoi pour la démo
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'kennethdadzie506@gmail.com',
      link: 'mailto:kennethdadzie506@gmail.com',
      color: 'from-accent-cyan to-accent-purple'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+228 70 23 54 73',
      link: 'tel:+22870235473',
      color: 'from-tg-green to-tg-yellow'
    },
    {
      icon: MapPin,
      title: 'Localisation',
      value: 'Lomé, Togo 🇹🇬',
      link: null,
      color: 'from-tg-red to-tg-yellow'
    }
  ];

  const socialLinks = [
    { icon: Code, link: 'https://github.com', name: 'GitHub' },
    { icon: Briefcase, link: 'https://linkedin.com', name: 'LinkedIn' },
    { icon: MessageCircle, link: 'https://twitter.com', name: 'Twitter' },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 pt-24 pb-20">
      {/* Hero */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 text-slate-900 dark:text-white">
                Contactez-<span className="bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">moi</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Vous avez un projet en tête ? Discutons-en !
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <SectionReveal>
              <div>
                <h2 className="text-2xl font-bold font-display mb-8 text-slate-900 dark:text-white">Restons en contact</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8">
                  N'hésitez pas à me contacter pour discuter de vos projets, poser des questions ou simplement dire bonjour !
                </p>

                <div className="space-y-6 mb-12">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      target={info.link?.startsWith('mailto') || info.link?.startsWith('tel') ? '_self' : '_blank'}
                      rel={info.link ? 'noreferrer' : undefined}
                      className={`flex items-center gap-4 p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl hover:border-accent-cyan/50 transition-all group ${!info.link ? 'cursor-default' : ''}`}
                    >
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <info.icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-sm text-slate-600 dark:text-slate-400 mb-1">{info.title}</h3>
                        <p className="text-lg font-semibold text-slate-900 dark:text-white">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Suivez-moi</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noreferrer"
                        className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 hover:text-accent-cyan transition-all"
                      >
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>

            {/* Contact Form */}
            <SectionReveal delay={0.2}>
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-8">
                <h2 className="text-2xl font-bold font-display mb-6 text-slate-900 dark:text-white">Envoyez-moi un message</h2>
                
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3 text-green-600 dark:text-green-400"
                  >
                    <CheckCircle size={20} />
                    <span>Message envoyé avec succès ! Je vous répondrai bientôt.</span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-600 dark:text-red-400"
                  >
                    <span>⚠️</span>
                    <span>Une erreur est survenue. Veuillez réessayer.</span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-900 dark:text-slate-300 mb-2">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:border-accent-cyan transition-colors"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-900 dark:text-slate-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:border-accent-cyan transition-colors"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-900 dark:text-slate-300 mb-2">
                      Sujet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:border-accent-cyan transition-colors"
                      placeholder="Sujet de votre message"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-900 dark:text-slate-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:border-accent-cyan transition-colors resize-none"
                      placeholder="Votre message..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-4 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-xl font-semibold text-white hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <span>Envoi en cours...</span>
                    ) : (
                      <>
                        <span>Envoyer le message</span>
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
