
import React from 'react';
import Header from '../components/sections/Header';
import HowItWorks from '../components/sections/HowItWorks';
import Applications from '../components/sections/Applications';
import ThreatVisualization from '../components/sections/ThreatVisualization';
import Technology from '../components/sections/Technology';
import Testimonials from '../components/sections/Testimonials';
import CallToAction from '../components/sections/CallToAction';
import Footer from '../components/sections/Footer';
import MatrixBackground from '../components/effects/MatrixBackground';
import ScanningLines from '../components/effects/ScanningLines';
import CursorEffect from '../components/effects/CursorEffect';
import DynamicBackground from '../components/effects/DynamicBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-dark relative">
      <MatrixBackground />
      <DynamicBackground />
      <ScanningLines />
      <CursorEffect />
      
      <div className="relative z-10">
        <Header />
        <HowItWorks />
        <Applications />
        <ThreatVisualization />
        <Technology />
        <Testimonials />
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
