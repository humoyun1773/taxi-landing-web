import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Tariffs } from './components/Tariffs';
import { Features } from './components/Features';
import { DriverCTA } from './components/DriverCTA';
import { AppDownload } from './components/AppDownload';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Tariffs />
        <Features />
        <DriverCTA />
        <AppDownload />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
