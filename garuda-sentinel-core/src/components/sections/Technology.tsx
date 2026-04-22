
import React from 'react';
import { Card } from '@/components/ui/card';

const Technology = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            <span className="cyber-glow">// TECHNOLOGY BEHIND GARUDA</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Ancient wisdom meets cutting-edge AI for unparalleled voice security
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Mythological Inspiration */}
          <Card className="cyber-border p-8">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🦅</div>
              <h3 className="font-orbitron text-2xl text-cyber-blue mb-4">
                THE GARUDA LEGACY
              </h3>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                Named after the divine eagle from Indian puranic tradition, GARUDA embodies the same 
                qualities of vigilance, speed, and protection that made the mythical bird the ultimate guardian.
              </p>
              <p>
                Just as Garuda could detect threats from vast distances and respond with lightning speed, 
                our AI system monitors voice communications for emotional distress and security threats 
                with unmatched precision.
              </p>
              <div className="pt-4 border-t border-gray-700">
                <h4 className="font-tech text-cyber-green mb-2">// CORE PRINCIPLES</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Vigilant monitoring and threat detection</li>
                  <li>• Swift response to emerging dangers</li>
                  <li>• Protection of the innocent and vulnerable</li>
                  <li>• Wisdom-guided decision making</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* AI Technology */}
          <Card className="cyber-border p-8">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🧠</div>
              <h3 className="font-orbitron text-2xl text-cyber-blue mb-4">
                AI & EMOTION RECOGNITION
              </h3>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                Our advanced neural networks analyze micro-patterns in voice data, detecting emotional 
                states, stress levels, and potential deception with 99.7% accuracy.
              </p>
              <p>
                Machine learning algorithms continuously adapt to new threat patterns, ensuring 
                GARUDA stays ahead of evolving cyber attack methodologies.
              </p>
              <div className="pt-4 border-t border-gray-700">
                <h4 className="font-tech text-cyber-green mb-2">// TECHNICAL STACK</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Deep Neural Networks for voice analysis</li>
                  <li>• Real-time emotional pattern recognition</li>
                  <li>• Behavioral anomaly detection algorithms</li>
                  <li>• Quantum-encrypted data processing</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Security Measures */}
        <Card className="cyber-border p-8">
          <h3 className="font-orbitron text-2xl text-cyber-green mb-6 text-center">
            // SECURITY ARCHITECTURE
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🔐</div>
              <h4 className="font-orbitron text-lg text-cyber-blue mb-2">
                Encryption
              </h4>
              <p className="text-gray-400 text-sm">
                Military-grade AES-256 encryption with quantum-resistant protocols
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h4 className="font-orbitron text-lg text-cyber-blue mb-2">
                Privacy Protection
              </h4>
              <p className="text-gray-400 text-sm">
                Zero-knowledge architecture ensures voice data never leaves secure environment
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="font-orbitron text-lg text-cyber-blue mb-2">
                Real-Time Processing
              </h4>
              <p className="text-gray-400 text-sm">
                Sub-millisecond analysis and response times for critical situations
              </p>
            </div>
          </div>
        </Card>

        {/* Algorithm Visualization */}
        <Card className="cyber-border p-8 mt-12">
          <h3 className="font-orbitron text-xl text-cyber-green mb-6 text-center">
            // VOICE ANALYSIS ALGORITHM
          </h3>
          <div className="h-32 bg-black/30 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="w-16 h-16 border-2 border-cyber-blue rounded-full flex items-center justify-center mb-2 animate-pulse">
                  🎤
                </div>
                <div className="text-xs text-gray-400">Input</div>
              </div>
              <div className="text-cyber-green">→</div>
              <div className="text-center">
                <div className="w-16 h-16 border-2 border-cyber-green rounded-full flex items-center justify-center mb-2 animate-pulse" style={{ animationDelay: '0.5s' }}>
                  🧠
                </div>
                <div className="text-xs text-gray-400">Analysis</div>
              </div>
              <div className="text-cyber-green">→</div>
              <div className="text-center">
                <div className="w-16 h-16 border-2 border-cyber-magenta rounded-full flex items-center justify-center mb-2 animate-pulse" style={{ animationDelay: '1s' }}>
                  ⚠️
                </div>
                <div className="text-xs text-gray-400">Detection</div>
              </div>
              <div className="text-cyber-green">→</div>
              <div className="text-center">
                <div className="w-16 h-16 border-2 border-yellow-400 rounded-full flex items-center justify-center mb-2 animate-pulse" style={{ animationDelay: '1.5s' }}>
                  🚨
                </div>
                <div className="text-xs text-gray-400">Response</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Technology;
