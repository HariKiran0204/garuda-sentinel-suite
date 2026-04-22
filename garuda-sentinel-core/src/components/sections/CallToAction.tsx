
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Shield } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <Card className="cyber-border p-12 text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
              <span className="glitch-text cyber-glow" data-text="SECURE YOUR COMMUNICATIONS">
                SECURE YOUR COMMUNICATIONS
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Join the next generation of voice security. Protect your organization with GARUDA's 
              emotion-intelligent threat detection system.
            </p>
          </div>

          {/* Primary CTA */}
          <div className="mb-8">
            <Button className="cyber-button text-xl px-12 py-6 mb-4">
              ENTER SECURE PORTAL
            </Button>
            <div className="text-cyber-blue text-sm font-tech">
              // AUTHORIZED ACCESS REQUIRED
            </div>
          </div>

          {/* Secondary Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Button variant="outline" className="border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black">
              LEARN MORE
            </Button>
            <Button variant="outline" className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-black">
              VIEW DOCUMENTATION
            </Button>
            <Button variant="outline" className="border-cyber-magenta text-cyber-magenta hover:bg-cyber-magenta hover:text-black">
              REQUEST DEMO
            </Button>
          </div>

          {/* Newsletter Signup */}
          <div className="border-t border-gray-700 pt-8">
            <h3 className="font-orbitron text-xl text-cyber-green mb-4">
              // CYBERSECURITY UPDATES
            </h3>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter secure email address"
                className="cyber-border bg-black/50 text-white placeholder-gray-500"
              />
              <Button className="bg-cyber-green text-black hover:bg-cyber-green/80">
                SUBSCRIBE
              </Button>
            </div>
            <p className="text-gray-500 text-xs mt-2 font-tech">
              Get encrypted updates on voice security threats and countermeasures
            </p>
          </div>

          {/* Animated Security Badge */}
          <div className="mt-8">
            <div className="inline-block animate-pulse">
              <div className="border border-cyber-blue rounded-lg p-3">
                <div className="flex items-center space-x-2 text-cyber-blue">
                  <Shield className="h-5 w-5" />
                  <span className="font-tech text-sm">QUANTUM-ENCRYPTED SECURE CONNECTION</span>
                  <Shield className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Resource Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <Card className="cyber-border p-6 text-center hover:scale-105 transition-all duration-300">
            <h4 className="font-orbitron text-lg text-cyber-blue mb-2">
              THREAT INTELLIGENCE
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Access our database of voice-based cyber threats and attack patterns
            </p>
            <Button variant="outline" size="sm" className="border-cyber-blue text-cyber-blue">
              ACCESS DATABASE
            </Button>
          </Card>

          <Card className="cyber-border p-6 text-center hover:scale-105 transition-all duration-300">
            <h4 className="font-orbitron text-lg text-cyber-green mb-2">
              TRAINING MATERIALS
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Learn to identify and respond to voice-based social engineering attacks
            </p>
            <Button variant="outline" size="sm" className="border-cyber-green text-cyber-green">
              START TRAINING
            </Button>
          </Card>

          <Card className="cyber-border p-6 text-center hover:scale-105 transition-all duration-300">
            <h4 className="font-orbitron text-lg text-cyber-magenta mb-2">
              SECURITY COMMUNITY
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Join our network of cybersecurity professionals and researchers
            </p>
            <Button variant="outline" size="sm" className="border-cyber-magenta text-cyber-magenta">
              JOIN COMMUNITY
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
