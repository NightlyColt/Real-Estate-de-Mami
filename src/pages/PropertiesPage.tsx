import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import { SEO } from '../components/SEO';
import { PropertyCard } from '../components/PropertyCard';
import { PROPERTIES } from '../constants';

export const PropertiesPage: React.FC = () => {
  const [filter, setFilter] = useState('Todos');
  const types = ['Todos', 'Apartamento', 'Casa', 'Villa'];

  const filteredProperties = filter === 'Todos' 
    ? PROPERTIES 
    : PROPERTIES.filter(p => p.type === filter);

  return (
    <div className="pt-32 pb-24 px-6">
      <SEO 
        title="Propiedades" 
        description="Explora nuestro catálogo exclusivo de casas, apartamentos y villas en venta en Santo Domingo y toda la República Dominicana."
      />

      <div className="max-w-7xl mx-auto">
        <header className="mb-16 space-y-6 text-center">
          <span className="text-brand-accent font-bold uppercase tracking-[0.3em] text-xs">Catálogo Exclusivo</span>
          <h1 className="text-5xl md:text-6xl font-bold text-brand-dark">Propiedades Disponibles</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Encuentra la propiedad que mejor se adapte a tu estilo de vida y objetivos de inversión.
          </p>
        </header>

        {/* Filters & Search */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-brand-secondary/20 mb-12 flex flex-col lg:flex-row gap-6 items-center justify-between">
          <div className="flex flex-wrap gap-2 justify-center">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                  filter === type 
                    ? 'bg-brand-dark text-white shadow-lg' 
                    : 'bg-brand-primary text-brand-dark hover:bg-brand-secondary/50'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Buscar por ubicación o nombre..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-brand-primary border-none focus:ring-2 focus:ring-brand-accent transition-all text-sm"
            />
          </div>

          <button className="flex items-center gap-2 text-brand-dark font-bold text-sm px-6 py-3 rounded-2xl border border-brand-secondary/30 hover:bg-brand-primary transition-all">
            <SlidersHorizontal size={18} />
            Más Filtros
          </button>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property, i) => (
            <PropertyCard key={property.id} property={property} index={i} />
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No se encontraron propiedades con estos criterios.</p>
            <button 
              onClick={() => setFilter('Todos')}
              className="mt-4 text-brand-ocean font-bold underline"
            >
              Ver todas las propiedades
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
