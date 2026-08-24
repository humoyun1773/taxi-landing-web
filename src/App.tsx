import React from 'react';
import { LoadingScreen } from './components/ui/LoadingScreen';
import { BodyBackgroundSlideshow } from './components/ui/BodyBackgroundSlideshow';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutProject } from './components/AboutProject';
import { TechArchitecture } from './components/TechArchitecture';
import { Tariffs } from './components/Tariffs';
import { HowItWorks } from './components/HowItWorks';
import { AppDownload } from './components/AppDownload';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="app-root">
      <LoadingScreen />
      {/* 1. Global Body-Level Fixed Rotating Background Images */}
      <BodyBackgroundSlideshow />
      
      <Navbar />
      <main>
        <Hero />
        <AboutProject />
        <TechArchitecture />
        <Tariffs />
        <HowItWorks />
        <AppDownload />
      </main>
      <Footer />
    </div>
  );
};

export default App;
