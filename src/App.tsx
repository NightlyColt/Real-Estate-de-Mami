/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { PropertiesPage } from './pages/PropertiesPage';
import { AboutPage } from './pages/AboutPage';
import { BuyPage } from './pages/BuyPage';
import { SellPage } from './pages/SellPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/propiedades" element={<PropertiesPage />} />
              <Route path="/sobre-yoselin" element={<AboutPage />} />
              <Route path="/comprar" element={<BuyPage />} />
              <Route path="/vender" element={<SellPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contacto" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

