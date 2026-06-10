import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DashboardGrid from './components/DashboardGrid';
import ProcessSection from './components/ProcessSection';
import OperatingLawSection from './components/OperatingLawSection';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'ai-assistant'>('home');

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#0b192f] text-gray-200 font-sans relative overflow-x-hidden flex flex-col">
      <div className="scanline z-50 pointer-events-none"></div>
      
      {/* Fixed Navbar */}
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      
      {/* Main Content */}
      <main className="pt-20 flex-1 flex flex-col">
        {activeTab === 'home' ? (
          <>
            <Hero />
            <DashboardGrid />
            <ProcessSection />
            <OperatingLawSection />
            <Footer />
          </>
        ) : (
          <AiAssistant />
        )}
      </main>
    </div>
  );
}
