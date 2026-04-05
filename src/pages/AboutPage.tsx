import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle2, Heart, Target, Quote } from 'lucide-react';
import { SEO } from '../components/SEO';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <SEO 
        title="Sobre Yoselin González" 
        description="Conoce la trayectoria y filosofía de Yoselin González, tu agente inmobiliaria de confianza en Santo Domingo."
      />

      <div className="max-w-7xl mx-auto">
        {/* Bio Section */}
        <section className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
                alt="Yoselin González" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-brand-accent p-10 rounded-3xl shadow-xl hidden md:block">
              <Quote className="text-white mb-4" size={40} />
              <p className="text-brand-dark font-serif text-xl italic font-bold leading-relaxed max-w-[280px]">
                "Mi misión es transformar la búsqueda de un hogar en una experiencia placentera y segura."
              </p>
            </div>
          </motion.div>

          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-brand-accent font-bold uppercase tracking-[0.3em] text-xs">Mi Trayectoria</span>
              <h1 className="text-5xl md:text-6xl font-bold text-brand-dark">Yoselin González</h1>
              <p className="text-brand-ocean font-bold text-xl">Agente Inmobiliaria / Senior Advisor</p>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Con más de 10 años de experiencia en el dinámico mercado inmobiliario de Santo Domingo, me he especializado en conectar a personas con espacios que reflejan su estilo de vida y aspiraciones.
              </p>
              <p>
                Mi enfoque combina un profundo conocimiento técnico del mercado con una calidez humana que me permite entender las necesidades reales de mis clientes. No solo facilito transacciones; asesoro sueños y protejo inversiones.
              </p>
              <p>
                Como experta local, conozco cada rincón de sectores como Piantini, Naco, Bella Vista y Arroyo Hondo, permitiéndome ofrecer oportunidades exclusivas antes de que lleguen al mercado masivo.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center text-brand-accent">
                  <Award size={24} />
                </div>
                <span className="font-bold text-brand-dark">Certificada REALTOR®</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center text-brand-accent">
                  <CheckCircle2 size={24} />
                </div>
                <span className="font-bold text-brand-dark">+500 Cierres Exitosos</span>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-brand-dark text-white rounded-[3rem] p-12 md:p-24 mb-32">
          <div className="max-w-4xl mx-auto text-center space-y-16">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">Mi Filosofía de Servicio</h2>
              <p className="text-gray-400 text-lg">Valores que guían cada una de mis acciones profesionales.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: Heart,
                  title: 'Empatía',
                  desc: 'Entiendo que detrás de cada propiedad hay una historia y un proyecto de vida.'
                },
                {
                  icon: Target,
                  title: 'Precisión',
                  desc: 'Análisis de datos y tendencias para asegurar el mejor precio y rentabilidad.'
                },
                {
                  icon: Heart, // Placeholder for ShieldCheck
                  title: 'Integridad',
                  desc: 'Transparencia absoluta en cada paso del proceso legal y comercial.'
                }
              ].map((v, i) => (
                <div key={i} className="space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-brand-accent/20 flex items-center justify-center text-brand-accent mx-auto">
                    <v.icon size={32} />
                  </div>
                  <h4 className="text-xl font-bold">{v.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center space-y-8">
          <h2 className="text-4xl font-bold text-brand-dark">¿Trabajamos juntos?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Permíteme ser tu guía en esta importante decisión. Mi compromiso es tu tranquilidad.
          </p>
          <button className="bg-brand-accent text-brand-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-accent/90 transition-all">
            Agendar una cita conmigo
          </button>
        </section>
      </div>
    </div>
  );
};
