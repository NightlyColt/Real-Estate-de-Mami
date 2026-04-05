import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageCircle, Send, Instagram, Facebook, Linkedin } from 'lucide-react';
import { SEO } from '../components/SEO';

import { FadeIn, StaggerContainer, StaggerItem } from '../components/Animations';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <SEO 
        title="Contacto" 
        description="Ponte en contacto con Yoselin González para asesoría inmobiliaria en Santo Domingo. Estamos listos para ayudarte a encontrar tu hogar ideal."
      />

      <div className="max-w-7xl mx-auto">
        <FadeIn direction="down" className="mb-20 text-center space-y-6">
          <span className="text-brand-accent font-bold uppercase tracking-[0.3em] text-xs">Hablemos</span>
          <h1 className="text-5xl md:text-6xl font-bold text-brand-dark">¿Cómo puedo ayudarte?</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Estoy a solo un mensaje de distancia. Ya sea que busques comprar, vender o invertir, estoy lista para asesorarte.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <StaggerContainer className="space-y-12">
            <div className="grid gap-8">
              {[
                {
                  icon: Phone,
                  title: 'Llámanos',
                  value: '+1 (809) 000-0000',
                  link: 'tel:+18090000000'
                },
                {
                  icon: MessageCircle,
                  title: 'WhatsApp',
                  value: '+1 (809) 000-0000',
                  link: 'https://wa.me/18090000000'
                },
                {
                  icon: Mail,
                  title: 'Correo Electrónico',
                  value: 'contacto@yoselingonzalez.com',
                  link: 'mailto:contacto@yoselingonzalez.com'
                },
                {
                  icon: MapPin,
                  title: 'Oficina',
                  value: 'Piantini, Santo Domingo, Rep. Dom.',
                  link: '#'
                }
              ].map((item, i) => (
                <StaggerItem
                  key={i}
                  direction="left"
                  className="flex items-center gap-6 p-6 rounded-3xl bg-white border border-brand-secondary/20 hover:border-brand-accent transition-all group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-primary flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all">
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">{item.title}</h4>
                    <p className="text-xl font-bold text-brand-dark">{item.value}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>

            <FadeIn delay={0.4} className="space-y-6">
              <h4 className="text-xl font-bold text-brand-dark">Sígueme en redes sociales</h4>
              <div className="flex gap-4">
                {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    className="w-12 h-12 rounded-2xl border border-brand-secondary/30 flex items-center justify-center text-brand-dark hover:bg-brand-dark hover:text-white transition-all"
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </FadeIn>
          </StaggerContainer>

          {/* Contact Form */}
          <FadeIn direction="right" className="bg-brand-dark p-10 md:p-16 rounded-[3rem] text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-8">Envíanos un mensaje</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Nombre Completo</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-brand-accent transition-colors"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Teléfono</label>
                  <input 
                    type="tel" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-brand-accent transition-colors"
                    placeholder="Ej. 809-000-0000"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Correo Electrónico</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-brand-accent transition-colors"
                  placeholder="juan@ejemplo.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Mensaje</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-brand-accent transition-colors resize-none"
                  placeholder="¿En qué puedo ayudarte?"
                />
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-brand-accent text-brand-dark font-bold py-5 rounded-2xl text-lg flex items-center justify-center gap-2 hover:bg-brand-accent/90 transition-all"
              >
                Enviar Mensaje
                <Send size={20} />
              </motion.button>
            </form>
          </FadeIn>
        </div>

        {/* Map Placeholder */}
        <div className="mt-24 aspect-[21/9] rounded-[3rem] overflow-hidden grayscale opacity-50 border border-brand-secondary/20">
          <img 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover"
            alt="Map Location"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
};
