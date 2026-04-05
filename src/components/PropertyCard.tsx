import React from 'react';
import { motion } from 'motion/react';
import { Bed, Bath, Square, MapPin, ChevronRight } from 'lucide-react';
import { Property } from '../types';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  property: Property;
  index?: number;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-brand-secondary/20"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-white/90 backdrop-blur-sm text-brand-dark text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            {property.type}
          </span>
          {property.featured && (
            <span className="bg-brand-accent text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
              Destacada
            </span>
          )}
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-brand-dark/80 backdrop-blur-md text-white text-lg font-bold px-4 py-2 rounded-lg">
            US$ {property.price.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <div className="flex items-center gap-1 text-brand-ocean mb-1">
            <MapPin size={14} />
            <span className="text-xs font-medium uppercase tracking-wide">{property.location}</span>
          </div>
          <h3 className="font-serif text-xl font-bold text-brand-dark group-hover:text-brand-ocean transition-colors">
            {property.title}
          </h3>
        </div>

        <div className="flex items-center justify-between py-4 border-y border-brand-secondary/20">
          <div className="flex items-center gap-2">
            <Bed size={18} className="text-brand-accent" />
            <span className="text-sm font-medium text-gray-600">{property.beds} Hab</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath size={18} className="text-brand-accent" />
            <span className="text-sm font-medium text-gray-600">{property.baths} Baños</span>
          </div>
          <div className="flex items-center gap-2">
            <Square size={18} className="text-brand-accent" />
            <span className="text-sm font-medium text-gray-600">{property.sqft} m²</span>
          </div>
        </div>

        <Link
          to={`/propiedades/${property.id}`}
          className="flex items-center justify-center gap-2 w-full bg-brand-secondary/30 text-brand-dark font-bold py-3 rounded-xl hover:bg-brand-ocean hover:text-white transition-all group/btn"
        >
          Ver Detalles
          <ChevronRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};
