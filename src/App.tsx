import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsCounter } from './components/StatsCounter';
import { Services } from './components/Services';
import { Tariffs } from './components/Tariffs';
import { HowItWorks } from './components/HowItWorks';
import { RegionsMap } from './components/RegionsMap';
import { Safety } from './components/Safety';
import { DriverSection } from './components/DriverSection';
import { AppDownload } from './components/AppDownload';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Hero />
        <StatsCounter />
        <Services />
        <Tariffs />
        <HowItWorks />
        <RegionsMap />
        <Safety />
        <DriverSection />
        <AppDownload />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
