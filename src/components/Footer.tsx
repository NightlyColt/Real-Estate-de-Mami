import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link to="/" className="flex flex-col">
            <span className="font-serif text-3xl font-bold tracking-tight text-white">
              Yoselin González
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-brand-accent font-medium">
              Agente Inmobiliaria
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Tu aliada estratégica en el mercado inmobiliario de Santo Domingo. 
            Elegancia, profesionalismo y resultados excepcionales.
          </p>
          <div className="flex gap-4">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-serif text-xl font-bold mb-6">Enlaces Rápidos</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link to="/propiedades" className="hover:text-brand-accent transition-colors">Propiedades</Link></li>
            <li><Link to="/sobre-yoselin" className="hover:text-brand-accent transition-colors">Sobre Mí</Link></li>
            <li><Link to="/comprar" className="hover:text-brand-accent transition-colors">Guía de Compra</Link></li>
            <li><Link to="/vender" className="hover:text-brand-accent transition-colors">Vender Propiedad</Link></li>
            <li><Link to="/blog" className="hover:text-brand-accent transition-colors">Blog Inmobiliario</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl font-bold mb-6">Contacto</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-brand-accent shrink-0" />
              <span>Piantini, Santo Domingo, Rep. Dom.</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-brand-accent shrink-0" />
              <span>+1 (809) 000-0000</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-brand-accent shrink-0" />
              <span>contacto@yoselingonzalez.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl font-bold mb-6">Newsletter</h4>
          <p className="text-gray-400 text-sm mb-4">
            Recibe las mejores oportunidades de inversión en tu correo.
          </p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-accent transition-colors"
            />
            <button className="bg-brand-accent text-brand-dark font-bold py-3 rounded-lg hover:bg-brand-accent/90 transition-all">
              Suscribirme
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
        <p>© 2024 Yoselin González. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
          <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
        </div>
      </div>
    </footer>
  );
};
