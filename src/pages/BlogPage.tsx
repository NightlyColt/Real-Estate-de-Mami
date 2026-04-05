import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { BLOG_POSTS } from '../constants';
import { Link } from 'react-router-dom';

export const BlogPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <SEO 
        title="Blog Inmobiliario" 
        description="Consejos, tendencias y noticias sobre el mercado inmobiliario en Santo Domingo y República Dominicana."
      />

      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center space-y-6">
          <span className="text-brand-accent font-bold uppercase tracking-[0.3em] text-xs">Conocimiento es Poder</span>
          <h1 className="text-5xl md:text-6xl font-bold text-brand-dark">Blog Inmobiliario</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Mantente informado con las últimas tendencias, consejos de inversión y guías prácticas sobre el sector inmobiliario.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {BLOG_POSTS.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] rounded-3xl overflow-hidden mb-6 relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-accent text-brand-dark text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                    Mercado
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs text-gray-400 font-medium uppercase tracking-widest">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    Por Yoselin G.
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-brand-dark group-hover:text-brand-ocean transition-colors leading-tight">
                  {post.title}
                </h2>

                <p className="text-gray-500 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <Link 
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-brand-accent font-bold group-hover:gap-3 transition-all"
                >
                  Leer más
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Box */}
        <div className="mt-24 bg-brand-primary rounded-[3rem] p-12 md:p-20 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Suscríbete a mi boletín mensual</h2>
            <p className="text-gray-600 text-lg">
              Recibe directamente en tu correo las mejores oportunidades de inversión y análisis exclusivos del mercado.
            </p>
          </div>
          <div className="lg:w-1/2 w-full">
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="flex-1 px-6 py-4 rounded-2xl bg-white border-none focus:ring-2 focus:ring-brand-accent transition-all shadow-sm"
              />
              <button className="bg-brand-dark text-white px-8 py-4 rounded-2xl font-bold hover:bg-brand-dark/90 transition-all shadow-lg">
                Suscribirme
              </button>
            </form>
            <p className="text-[10px] text-gray-400 mt-4 uppercase tracking-widest text-center sm:text-left">
              * No enviamos spam. Puedes darte de baja en cualquier momento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
