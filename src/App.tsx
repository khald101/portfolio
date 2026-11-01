import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { BackgroundEffect } from './components/BackgroundEffect';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Workflow } from './components/Workflow';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { CinematicIntro } from './components/CinematicIntro';

export const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('ar');
  const [showIntro, setShowIntro] = useState(true);

  // Sync HTML attributes with language state
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    if (language === 'ar') {
      document.body.classList.add('font-cairo');
      document.body.classList.remove('font-outfit');
    } else {
      document.body.classList.add('font-outfit');
      document.body.classList.remove('font-cairo');
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'ar' ? 'en' : 'ar'));
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Cinematic Intro Screen */}
      {showIntro && (
        <CinematicIntro
          language={language}
          onFinish={() => setShowIntro(false)}
        />
      )}

      {/* Dynamic 3D / Particle Ambient Canvas */}
      <BackgroundEffect />

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <Navbar
          language={language}
          onToggleLanguage={toggleLanguage}
        />

        {/* Main Sections */}
        <main className="flex-grow">
          <Hero language={language} />
          <About language={language} />
          <Skills language={language} />
          <Projects language={language} />
          <Workflow language={language} />
          <Contact language={language} />
        </main>

        {/* Footer */}
        <Footer language={language} />

        {/* Mobile Quick Action Floating Bar */}
        <MobileQuickBar language={language} />
      </div>

    </div>
  );
};

export default App;
