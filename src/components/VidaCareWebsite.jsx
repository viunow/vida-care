'use client';

import React from 'react';
import { Header } from './Header';
import { Hero } from './Hero';
import { About } from './About';
import { Services } from './Services';
import { Benefits } from './Benefits';
import { Contact } from './Contact';
import { Footer } from './Footer';

const VitaLarWebsite = () => {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Contact />
      <Footer />
    </div>
  );
};

export default VitaLarWebsite;
