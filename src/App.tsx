import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TaxiMarquee } from './components/TaxiMarquee';
import { StatsCounter } from './components/StatsCounter';
import { AboutProject } from './components/AboutProject';
import { TechArchitecture } from './components/TechArchitecture';
import { Services } from './components/Services';
import { Tariffs } from './components/Tariffs';
import { HowItWorks } from './components/HowItWorks';
import { RegionsMap } from './components/RegionsMap';
import { DriverSection } from './components/DriverSection';
import { AppDownload } from './components/AppDownload';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Hero />
        <TaxiMarquee />
        <StatsCounter />
        <AboutProject />
        <TechArchitecture />
        <Services />
        <Tariffs />
        <HowItWorks />
        <RegionsMap />
        <DriverSection />
        <AppDownload />
        <TaxiMarquee />
      </main>
      <Footer />
    </div>
  );
};

export default App;
