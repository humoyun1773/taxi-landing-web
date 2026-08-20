import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutProject } from './components/AboutProject';
import { TechArchitecture } from './components/TechArchitecture';
import { Tariffs } from './components/Tariffs';
import { HowItWorks } from './components/HowItWorks';
import { RegionsMap } from './components/RegionsMap';
import { AppDownload } from './components/AppDownload';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Hero />
        <AboutProject />
        <TechArchitecture />
        <Tariffs />
        <HowItWorks />
        <RegionsMap />
        <AppDownload />
      </main>
      <Footer />
    </div>
  );
};

export default App;
