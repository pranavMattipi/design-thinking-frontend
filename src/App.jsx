import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeInfo from './components/HomeInfo';
import AboutUs from './components/AboutUs';
import ProblemDiscovery from './components/ProblemDiscovery';
import UserUnderstanding from './components/UserUnderstanding';
import ProblemFraming from './components/ProblemFraming';
import Ideation from './components/Ideation';
import EvaluationShortlisting from './components/EvaluationShortlisting';
import SolutionFraming from './components/SolutionFraming';
import Mission from './components/Mission';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-purple-100 selection:text-purple-900">
      <Navbar />
      <main>
        <Hero />
        <HomeInfo />
        <AboutUs />
        <ProblemDiscovery />
        <UserUnderstanding />
        <ProblemFraming />
        <Ideation />
        <EvaluationShortlisting />
        <SolutionFraming />
        <Mission />
      </main>
      <Footer />
    </div>
  );
}

export default App;
