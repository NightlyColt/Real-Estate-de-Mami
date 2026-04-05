import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, Home, ShieldCheck, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { PropertyCard } from '../components/PropertyCard';
import { PROPERTIES } from '../constants';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/Animations';

export const HomePage: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <SEO 
        title="Inicio" 
        description="Encuentra tu hogar ideal en Santo Domingo con Yoselin González. Expertos en bienes raíces, apartamentos de lujo y asesoría personalizada."
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 px-6">

        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80" 
            alt="Luxury Real Estate Santo Domingo"
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <FadeIn direction="down" delay={0.2}>
              <div className="inline-flex items-center gap-2 bg-brand-accent/20 backdrop-blur-md border border-brand-accent/30 px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                <span className="text-brand-accent text-xs font-bold uppercase tracking-widest">Tu Realtor de Confianza en RD</span>
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.4}>
              <h1 className="font-serif text-5xl md:text-7xl text-white font-bold leading-[1.1] text-balance">
                Encuentra el hogar que <span className="text-brand-accent italic">siempre</span> soñaste.
              </h1>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.6}>
              <p className="text-xl text-gray-200 max-w-xl leading-relaxed">
                Asesoría inmobiliaria personalizada en Santo Domingo. Elegancia, profesionalismo y resultados excepcionales para compradores e inversionistas.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.8} className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/propiedades"
                className="bg-brand-accent text-brand-dark px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-brand-accent/90 transition-all shadow-xl shadow-brand-accent/20 hover:scale-105 active:scale-95"
              >
                Ver Propiedades
                <ArrowRight size={20} />
              </Link>
              <a
                href="https://wa.me/18090000000"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-all hover:scale-105 active:scale-95"
              >
                <MessageCircle size={20} />
                Agendar Consulta
              </a>
            </FadeIn>

            <StaggerContainer delay={1} className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
              {[
                { val: '10+', label: 'Años de Exp.' },
                { val: '500+', label: 'Propiedades' },
                { val: '98%', label: 'Clientes Felices' }
              ].map((stat, i) => (
                <StaggerItem key={i}>
                  <div className="text-3xl font-bold text-white mb-1">{stat.val}</div>
                  <div className="text-xs uppercase tracking-widest text-gray-400">{stat.label}</div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border-8 border-white/10 shadow-2xl aspect-[4/5] max-w-md mx-auto group">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
                alt="Yoselin González"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-brand-dark to-transparent">
                <div className="text-white font-serif text-2xl font-bold">Yoselin González</div>
                <div className="text-brand-accent text-sm font-medium uppercase tracking-widest">Senior Real Estate Advisor</div>
              </div>
            </div>
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent/20 rounded-full blur-3xl" 
            />
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-ocean/20 rounded-full blur-3xl" 
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="space-y-4">
              <span className="text-brand-accent font-bold uppercase tracking-[0.3em] text-xs">Selección Exclusiva</span>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-dark">Propiedades Destacadas</h2>
              <p className="text-gray-500 max-w-xl">
                Explora nuestra curaduría de las mejores oportunidades inmobiliarias en las zonas más privilegiadas de Santo Domingo.
              </p>
            </div>
            <Link 
              to="/propiedades" 
              className="group flex items-center gap-2 text-brand-dark font-bold hover:text-brand-ocean transition-colors"
            >
              Ver todo el catálogo
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROPERTIES.filter(p => p.featured).map((property, i) => (
              <StaggerItem key={property.id}>
                <PropertyCard property={property} index={i} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-24 px-6 bg-brand-primary relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <FadeIn direction="left" className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.img 
                whileHover={{ scale: 1.02 }}
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80" 
                className="rounded-2xl shadow-lg mt-12" 
                alt="Real Estate Office"
                referrerPolicy="no-referrer"
              />
              <motion.img 
                whileHover={{ scale: 1.02 }}
                src="https://images.unsplash.com/photo-1582408921715-18e7806365c1?auto=format&fit=crop&w=600&q=80" 
                className="rounded-2xl shadow-lg" 
                alt="Luxury Interior"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-2xl shadow-2xl border border-brand-secondary/20 max-w-[240px] text-center"
            >
              <div className="text-4xl font-bold text-brand-accent mb-2">100%</div>
              <p className="text-sm font-medium text-brand-dark">Compromiso con tu inversión</p>
            </motion.div>
          </FadeIn>

          <div className="space-y-10">
            <FadeIn className="space-y-4">
              <span className="text-brand-accent font-bold uppercase tracking-[0.3em] text-xs">Excelencia y Confianza</span>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight text-balance">
                ¿Por qué confiar tu futuro inmobiliario en mis manos?
              </h2>
            </FadeIn>

            <StaggerContainer className="grid gap-8">
              {[
                {
                  icon: ShieldCheck,
                  title: 'Seguridad Jurídica',
                  desc: 'Garantizo que cada transacción cumpla con todos los requisitos legales en RD.'
                },
                {
                  icon: Home,
                  title: 'Conocimiento Local',
                  desc: 'Experta en los sectores más dinámicos y con mayor plusvalía de Santo Domingo.'
                },
                {
                  icon: Users,
                  title: 'Trato Humano',
                  desc: 'No solo vendo propiedades, construyo relaciones basadas en la honestidad y empatía.'
                }
              ].map((item, i) => (
                <StaggerItem key={i} className="flex gap-6 group">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:bg-brand-accent group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-dark mb-2">{item.title}</h4>
                    <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn>
              <Link
                to="/sobre-yoselin"
                className="inline-flex items-center gap-2 bg-brand-dark text-white px-8 py-4 rounded-full font-bold hover:bg-brand-dark/90 transition-all hover:scale-105 active:scale-95"
              >
                Conoce mi trayectoria
                <ArrowRight size={20} />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white">
        <FadeIn className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-brand-accent font-bold uppercase tracking-[0.3em] text-xs">Testimonios</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mt-4">Lo que dicen mis clientes</h2>
        </FadeIn>

        <StaggerContainer className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Ricardo Méndez',
              role: 'Inversionista',
              text: 'Yoselin me ayudó a encontrar el apartamento perfecto en Piantini. Su conocimiento del mercado es impresionante y su asesoría fue clave para cerrar el trato.'
            },
            {
              name: 'Elena Rodríguez',
              role: 'Propietaria',
              text: 'Vender mi casa con Yoselin fue la mejor decisión. Se encargó de todo el marketing y logramos venderla en tiempo récord y al precio que buscábamos.'
            },
            {
              name: 'Carlos Tejeda',
              role: 'Comprador',
              text: 'Excelente trato humano y profesional. Me sentí acompañado en cada paso del proceso de compra. ¡Altamente recomendada!'
            }
          ].map((t, i) => (
            <StaggerItem
              key={i}
              className="bg-brand-primary p-10 rounded-3xl relative hover:shadow-xl transition-all duration-500"
            >
              <div className="flex gap-1 text-brand-accent mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-brand-dark/80 italic mb-8 leading-relaxed">"{t.text}"</p>
              <div>
                <div className="font-bold text-brand-dark">{t.name}</div>
                <div className="text-xs uppercase tracking-widest text-brand-accent font-bold">{t.role}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <FadeIn className="max-w-7xl mx-auto bg-brand-ocean rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-brand-ocean/30">
          <div className="absolute inset-0 opacity-10">
             <img src="https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1920&q=80" className="w-full h-full object-cover" alt="Cityscape" referrerPolicy="no-referrer" />
          </div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold font-serif max-w-3xl mx-auto leading-tight">
              ¿Listo para dar el siguiente paso hacia tu nuevo hogar?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Estoy aquí para guiarte con profesionalismo y calidez. Hablemos hoy mismo sobre tus metas inmobiliarias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contacto"
                className="bg-white text-brand-ocean px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-primary transition-all hover:scale-105 active:scale-95"
              >
                Contáctame Ahora
              </Link>
              <a
                href="https://wa.me/18090000000"
                className="bg-brand-accent text-brand-dark px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-accent/90 transition-all hover:scale-105 active:scale-95"
              >
                WhatsApp Directo
              </a>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};

