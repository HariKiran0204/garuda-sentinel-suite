
import React from 'react';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      title: "Voice Input",
      description: "System captures and processes voice data through secure channels",
      icon: "🎤",
      detail: "Advanced audio processing with noise reduction and enhancement"
    },
    {
      title: "Emotion Analysis",
      description: "AI algorithms analyze emotional patterns and stress indicators",
      icon: "🧠",
      detail: "Machine learning models detect micro-expressions in voice"
    },
    {
      title: "Threat Detection",
      description: "Real-time assessment of potential security threats and anomalies",
      icon: "⚠️",
      detail: "Multi-layered security protocols identify suspicious patterns"
    },
    {
      title: "Emergency Response",
      description: "Automated alerts and response protocols are triggered instantly",
      icon: "🚨",
      detail: "Integration with emergency services and security teams"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            <span className="cyber-glow">// HOW IT WORKS</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Advanced voice analysis pipeline with emotion detection and threat assessment capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="cyber-border p-6 h-full hover:scale-105 transition-all duration-300 group">
                <div className="text-center">
                  <div className="text-4xl mb-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                    {step.icon}
                  </div>
                  <h3 className="font-orbitron text-xl font-bold text-cyber-blue mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {step.description}
                  </p>
                  <div className="text-sm text-gray-500 font-tech">
                    {step.detail}
                  </div>
                </div>
                
                {/* Connection line to next step */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 z-10">
                    <ArrowRight className="text-cyber-green h-6 w-6 animate-pulse" />
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>

        {/* Animated Waveform */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 cyber-border rounded-lg">
            <h3 className="font-orbitron text-lg text-cyber-green mb-4">REAL-TIME VOICE ANALYSIS</h3>
            <div className="flex items-center justify-center space-x-1">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-gradient-to-t from-cyber-blue to-cyber-green rounded-full animate-pulse"
                  style={{
                    height: `${Math.random() * 40 + 10}px`,
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: '1s'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
