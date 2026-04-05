import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description, canonical, type = 'website' }) => {
  const siteTitle = 'Yoselin González | Agente Inmobiliaria Santo Domingo';
  const fullTitle = `${title} | ${siteTitle}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Schema.org for LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          "name": "Yoselin González",
          "image": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
          "description": "Agente Inmobiliaria profesional en Santo Domingo, República Dominicana.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Santo Domingo",
            "addressCountry": "DO"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "18.4861",
            "longitude": "-69.9312"
          },
          "url": "https://yoselingonzalez.com",
          "telephone": "+18090000000"
        })}
      </script>
    </Helmet>
  );
};
