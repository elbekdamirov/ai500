import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Demo from './components/Demo';
import ProblemSolution from './components/ProblemSolution';
import Benefits from './components/Benefits';
import Features from './components/Features';
import WhyUs from './components/WhyUs';
import TechStack from './components/TechStack';
import Team from './components/Team';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Header />
      <main>
        <Hero />
        <Demo />
        <ProblemSolution />
        <Benefits />
        <Features />
        <Team />
        <WhyUs />
        <TechStack />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
}

export default App;
