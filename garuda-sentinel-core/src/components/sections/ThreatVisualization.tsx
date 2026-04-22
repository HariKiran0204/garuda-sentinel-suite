
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

const ThreatVisualization = () => {
  const [threatsDetected, setThreatsDetected] = useState(1247);
  const [callsProcessed, setCallsProcessed] = useState(89432);

  useEffect(() => {
    const interval = setInterval(() => {
      setThreatsDetected(prev => prev + Math.floor(Math.random() * 3));
      setCallsProcessed(prev => prev + Math.floor(Math.random() * 5));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const threatData = [
    { industry: "Finance", percentage: 34, color: "bg-cyber-blue" },
    { industry: "Healthcare", percentage: 28, color: "bg-cyber-green" },
    { industry: "Government", percentage: 22, color: "bg-cyber-magenta" },
    { industry: "Education", percentage: 16, color: "bg-yellow-400" }
  ];

  const attackTypes = [
    { type: "Vishing", count: 456 },
    { type: "Social Engineering", count: 392 },
    { type: "Voice Spoofing", count: 289 },
    { type: "Emotional Manipulation", count: 110 }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            <span className="cyber-glow">// CYBER THREAT VISUALIZATION</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Real-time threat intelligence and attack pattern analysis
          </p>
        </div>

        {/* Live Counters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="cyber-border p-8 text-center">
            <h3 className="font-orbitron text-2xl text-cyber-blue mb-4">THREATS DETECTED TODAY</h3>
            <div className="text-5xl font-bold text-cyber-green animate-pulse mb-2">
              {threatsDetected.toLocaleString()}
            </div>
            <div className="text-sm text-gray-400 font-tech">
              // REAL-TIME MONITORING ACTIVE
            </div>
          </Card>

          <Card className="cyber-border p-8 text-center">
            <h3 className="font-orbitron text-2xl text-cyber-blue mb-4">SECURE CALLS PROCESSED</h3>
            <div className="text-5xl font-bold text-cyber-green animate-pulse mb-2">
              {callsProcessed.toLocaleString()}
            </div>
            <div className="text-sm text-gray-400 font-tech">
              // 99.7% ACCURACY RATE
            </div>
          </Card>
        </div>

        {/* Industry Targets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="cyber-border p-8">
            <h3 className="font-orbitron text-xl text-cyber-green mb-6">
              // MOST TARGETED INDUSTRIES
            </h3>
            <div className="space-y-4">
              {threatData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-300">{item.industry}</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${item.color} transition-all duration-1000`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <span className="text-cyber-blue font-tech text-sm w-8">
                      {item.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="cyber-border p-8">
            <h3 className="font-orbitron text-xl text-cyber-green mb-6">
              // ATTACK VECTORS DETECTED
            </h3>
            <div className="space-y-4">
              {attackTypes.map((attack, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-300">{attack.type}</span>
                  <span className="text-cyber-magenta font-tech">
                    {attack.count}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Global Threat Map Placeholder */}
        <Card className="cyber-border p-8 mt-12">
          <h3 className="font-orbitron text-xl text-cyber-green mb-6 text-center">
            // GLOBAL THREAT ACTIVITY
          </h3>
          <div className="h-64 bg-black/30 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-cyber-blue text-6xl mb-4">🌍</div>
                <p className="text-gray-400">Interactive threat map monitoring global voice-based attacks</p>
                <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-cyber-blue">AMERICAS</div>
                    <div className="text-cyber-green">342 threats</div>
                  </div>
                  <div className="text-center">
                    <div className="text-cyber-blue">EUROPE</div>
                    <div className="text-cyber-green">289 threats</div>
                  </div>
                  <div className="text-center">
                    <div className="text-cyber-blue">ASIA-PACIFIC</div>
                    <div className="text-cyber-green">616 threats</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Animated threat indicators */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-cyber-magenta rounded-full animate-pulse" />
            <div className="absolute top-8 right-12 w-2 h-2 bg-cyber-magenta rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-8 left-1/3 w-2 h-2 bg-cyber-magenta rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ThreatVisualization;
