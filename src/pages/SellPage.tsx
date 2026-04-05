import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Camera, Megaphone, BadgeDollarSign, CalendarCheck } from 'lucide-react';
import { SEO } from '../components/SEO';

export const SellPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <SEO 
        title="Vender Propiedad" 
        description="Vende tu propiedad en Santo Domingo de forma rápida y al mejor precio con Yoselin González. Marketing profesional y asesoría estratégica."
      />

      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center space-y-6">
          <span className="text-brand-accent font-bold uppercase tracking-[0.3em] text-xs">Resultados Excepcionales</span>
          <h1 className="text-5xl md:text-6xl font-bold text-brand-dark">Vende con Estrategia</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            No solo listamos tu propiedad, creamos una campaña de marketing diseñada para atraer al comprador ideal en el menor tiempo posible.
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {[
            {
              icon: TrendingUp,
              title: 'Análisis de Mercado',
              desc: 'Realizamos una valoración profesional (ACM) para fijar el precio competitivo que maximice tu retorno.'
            },
            {
              icon: Camera,
              title: 'Marketing Visual',
              desc: 'Fotografía profesional, video recorridos y home staging para que tu propiedad brille en cada anuncio.'
            },
            {
              icon: Megaphone,
              title: 'Exposición Máxima',
              desc: 'Presencia en portales líderes, redes sociales y mi red exclusiva de contactos nacionales e internacionales.'
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-brand-secondary/20 hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-primary flex items-center justify-center text-brand-accent mb-8">
                <item.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <section className="bg-brand-primary rounded-[4rem] overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-12 md:p-20 space-y-10">
              <h2 className="text-4xl font-bold text-brand-dark">Mi Compromiso de Venta</h2>
              <div className="space-y-8">
                {[
                  {
                    title: 'Filtrado de Prospectos',
                    desc: 'Solo llevamos a tu propiedad a compradores calificados y con capacidad financiera real.'
                  },
                  {
                    title: 'Gestión de Visitas',
                    desc: 'Me encargo de coordinar y realizar cada visita, resaltando los beneficios únicos de tu hogar.'
                  },
                  {
                    title: 'Cierre Seguro',
                    desc: 'Acompañamiento en toda la tramitación legal y fiscal hasta que el dinero esté en tu cuenta.'
                  }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-brand-accent text-brand-dark flex items-center justify-center font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-brand-dark mb-1">{step.title}</h4>
                      <p className="text-gray-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=1000&q=80" 
                className="absolute inset-0 w-full h-full object-cover"
                alt="Selling Property"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        <section className="mt-24 text-center bg-brand-dark text-white p-16 rounded-[3rem] space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">¿Quieres saber cuánto vale tu propiedad hoy?</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Solicita una evaluación de mercado gratuita y sin compromiso. Te enviaré un reporte detallado en menos de 48 horas.
          </p>
          <button className="bg-brand-accent text-brand-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-accent/90 transition-all">
            Solicitar Evaluación Gratis
          </button>
        </section>
      </div>
    </div>
  );
};
