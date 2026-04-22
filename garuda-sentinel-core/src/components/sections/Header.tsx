
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Zap } from 'lucide-react';

const Header = () => {
  const [logoClicks, setLogoClicks] = useState(0);

  const handleLogoClick = () => {
    setLogoClicks(prev => {
      const newCount = prev + 1;
      if (newCount === 3) {
        document.body.classList.add('special-animation');
        setTimeout(() => {
          document.body.classList.remove('special-animation');
        }, 3000);
        return 0;
      }
      return newCount;
    });
  };

  return (
    <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 text-center z-10">
        <div className="mb-8">
          <div 
            className="inline-block cursor-pointer mb-4 relative"
            onClick={handleLogoClick}
          >
            <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-cyber-blue/20 to-cyber-green/20 rounded-lg blur-md"></div>
              
              <h1 className="font-orbitron text-6xl md:text-8xl font-bold relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyber-blue via-purple-400 to-cyber-green">
                  GARUDA
                </span>
              </h1>
              
              <div className="absolute h-[2px] w-full top-1/2 left-0 bg-gradient-to-r from-transparent via-cyber-blue/50 to-transparent opacity-50">
                <div className="absolute h-full w-20 bg-cyber-blue/80 animate-[scan-line_3s_ease-in-out_infinite]"></div>
              </div>
            </div>
          </div>
          <div className="text-transparent bg-gradient-to-r from-purple-500 to-cyber-blue bg-clip-text text-sm font-tech tracking-widest mb-2">
            ENCRYPTED
          </div>
          <Badge variant="outline" className="border-gradient-to-r from-cyber-blue to-cyber-green text-transparent bg-gradient-to-r from-cyber-blue to-cyber-green bg-clip-text mb-4">
            v2.6.8
          </Badge>
        </div>

        <div className="mb-8">
          <h2 className="font-orbitron text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed">
            Emotion-Intelligent Sentinel for Real-Time Threat Detection and Emergency Response
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Establishing secure connection to advanced voice analysis system with military-grade encryption protocols.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Badge className="bg-gradient-to-r from-purple-500/20 to-cyber-blue/20 border border-purple-500/30 px-4 py-2">
            <Shield className="mr-2 h-4 w-4 text-purple-400" />
            <span className="bg-gradient-to-r from-purple-400 to-cyber-blue bg-clip-text text-transparent">
              End-to-End Encryption
            </span>
          </Badge>
          <Badge className="bg-gradient-to-r from-cyber-blue/20 to-cyber-green/20 border border-cyber-blue/30 px-4 py-2">
            <Zap className="mr-2 h-4 w-4 text-cyber-blue" />
            <span className="bg-gradient-to-r from-cyber-blue to-cyber-green bg-clip-text text-transparent">
              Real-Time Analysis
            </span>
          </Badge>
        </div>

        <div className="space-y-4">
          <Button className="relative px-8 py-4 text-lg overflow-hidden group">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 via-cyber-blue to-cyber-green transition-all duration-300 ease-out opacity-80 group-hover:opacity-100"></span>
            <a href="http://localhost:3002/" target='_blank'><span className="relative text-black font-bold">ENTER SECURE PORTAL</span></a>
          </Button>
          <div className="bg-gradient-to-r from-purple-500 via-cyber-blue to-cyber-green bg-clip-text text-transparent text-sm font-tech">
            // AUTHORIZED PERSONNEL ONLY
          </div>
        </div>

        <div className="absolute top-1/2 left-10 w-2 h-32 bg-gradient-to-t from-cyber-blue to-transparent data-stream" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-20 w-2 h-24 bg-gradient-to-t from-cyber-green to-transparent data-stream" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-2 h-28 bg-gradient-to-t from-purple-500 to-transparent data-stream" style={{ animationDelay: '2s' }} />
      </div>
    </header>
  );
};

export default Header;
