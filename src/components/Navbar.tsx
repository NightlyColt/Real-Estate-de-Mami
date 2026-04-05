import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NAV_ITEMS } from '../constants';
import { cn } from '../lib/utils';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'glass-nav py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span className="font-serif text-2xl font-bold tracking-tight text-brand-dark">
            Yoselin González
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-brand-accent font-medium">
            Agente Inmobiliaria
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-brand-accent',
                location.pathname === item.path ? 'text-brand-accent' : 'text-brand-dark'
              )}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://wa.me/18090000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-ocean text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-ocean/90 transition-all shadow-lg shadow-brand-ocean/20"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-brand-dark p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-brand-secondary/30 p-6 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    'text-lg font-medium py-2',
                    location.pathname === item.path ? 'text-brand-accent' : 'text-brand-dark'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <hr className="border-brand-secondary/30 my-2" />
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+18090000000"
                  className="flex items-center gap-3 text-brand-dark font-medium"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-secondary/30 flex items-center justify-center">
                    <Phone size={20} className="text-brand-ocean" />
                  </div>
                  +1 (809) 000-0000
                </a>
                <a
                  href="https://wa.me/18090000000"
                  className="flex items-center gap-3 bg-brand-ocean text-white p-4 rounded-xl font-bold justify-center shadow-lg"
                >
                  <MessageCircle size={24} />
                  Escríbeme por WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
