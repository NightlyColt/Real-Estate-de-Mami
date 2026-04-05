import React from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, Key, FileText, Handshake } from 'lucide-react';
import { SEO } from '../components/SEO';

export const BuyPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <SEO 
        title="Guía de Compra" 
        description="Aprende cómo comprar una propiedad en República Dominicana con nuestra guía paso a paso. Asesoría experta para compradores e inversionistas."
      />

      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center space-y-6">
          <span className="text-brand-accent font-bold uppercase tracking-[0.3em] text-xs">Tu Nuevo Hogar Comienza Aquí</span>
          <h1 className="text-5xl md:text-6xl font-bold text-brand-dark">Guía del Comprador</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Simplificamos el proceso de compra para que tu única preocupación sea elegir la decoración de tu nuevo espacio.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            {[
              {
                step: '01',
                title: 'Definición de Objetivos',
                icon: Target,
                desc: 'Identificamos tus necesidades reales: ubicación, presupuesto, tipo de propiedad y objetivos de inversión (vivienda o rentabilidad).'
              },
              {
                step: '02',
                title: 'Búsqueda y Selección',
                icon: Search,
                desc: 'Acceso a mi red exclusiva de propiedades. Filtramos las mejores opciones para optimizar tu tiempo y visitar solo lo que realmente te interesa.'
              },
              {
                step: '03',
                title: 'Debida Diligencia',
                icon: ShieldCheck,
                desc: 'Verificamos el estatus legal de la propiedad, títulos, impuestos y cargas para garantizar una compra 100% segura.'
              },
              {
                step: '04',
                title: 'Negociación y Cierre',
                icon: Handshake,
                desc: 'Utilizo mi experiencia para negociar las mejores condiciones posibles y te acompaño en la firma de contratos y entrega de llaves.'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-8 group"
              >
                <div className="text-5xl font-serif font-bold text-brand-secondary/40 group-hover:text-brand-accent transition-colors">
                  {item.step}
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-brand-dark">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-brand-primary rounded-[3rem] p-10 md:p-16 space-y-10 sticky top-32">
            <h2 className="text-3xl font-bold text-brand-dark">¿Por qué comprar con un experto?</h2>
            <ul className="space-y-6">
              {[
                'Acceso a propiedades "Off-Market" (antes de publicarse).',
                'Asesoría financiera para préstamos hipotecarios en RD.',
                'Gestión de exenciones fiscales (Confotur) si aplica.',
                'Acompañamiento legal especializado.',
                'Análisis de plusvalía y retorno de inversión.'
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="text-brand-ocean shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">{text}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-brand-dark text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-dark/90 transition-all shadow-xl">
              Descargar Guía PDF Gratuita
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Target = ({ size, className }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);

const ShieldCheck = ({ size, className }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
);

const CheckCircle2 = ({ size, className }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
);
