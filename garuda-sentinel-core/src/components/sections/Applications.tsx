
import React from 'react';
import { Card } from '@/components/ui/card';

const Applications = () => {
  const applications = [
    {
      title: "Emergency Call Centers",
      description: "Detecting distress and prioritizing critical calls",
      icon: "🚑",
      features: ["Stress level detection", "Priority routing", "Crisis identification"],
      threat: "False emergency reports"
    },
    {
      title: "Corporate Security",
      description: "Identifying potential social engineering attacks",
      icon: "🏢",
      features: ["Voice authentication", "Insider threat detection", "Social engineering alerts"],
      threat: "Vishing attacks"
    },
    {
      title: "Personal Safety",
      description: "Warning users about suspicious callers",
      icon: "📱",
      features: ["Caller verification", "Scam detection", "Real-time alerts"],
      threat: "Phone scams"
    },
    {
      title: "Law Enforcement",
      description: "Assisting in threat assessment during crisis situations",
      icon: "👮",
      features: ["Hostage negotiation", "Threat analysis", "Evidence collection"],
      threat: "Terrorist communications"
    },
    {
      title: "Healthcare",
      description: "Identifying patients in emotional distress",
      icon: "🏥",
      features: ["Mental health screening", "Emergency triage", "Patient monitoring"],
      threat: "Medical emergencies"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 via-cyber-blue to-cyber-green bg-clip-text text-transparent">
              // REAL-WORLD APPLICATIONS
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            GARUDA's emotion-intelligent technology protects across multiple sectors and use cases
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <Card key={index} className="cyber-border p-6 hover:scale-105 transition-all duration-300 group relative overflow-hidden">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/10 via-cyber-magenta/5 to-cyber-green/10 opacity-50" />
              
              <div className="relative z-10 text-center mb-6">
                <div className="text-4xl mb-4 animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                  {app.icon}
                </div>
                <h3 className="font-orbitron text-xl font-bold bg-gradient-to-r from-cyber-blue to-cyber-green bg-clip-text text-transparent mb-2">
                  {app.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {app.description}
                </p>
              </div>

              <div className="relative z-10 space-y-4">
                <div>
                  <h4 className="font-tech text-sm bg-gradient-to-r from-cyber-blue to-cyber-green bg-clip-text text-transparent mb-2">// FEATURES</h4>
                  <ul className="space-y-1">
                    {app.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-center">
                        <span className="bg-gradient-to-r from-cyber-blue to-cyber-green bg-clip-text text-transparent mr-2">{`>`}</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <h4 className="font-tech text-sm bg-gradient-to-r from-purple-500 to-cyber-magenta bg-clip-text text-transparent mb-2">// PRIMARY THREAT</h4>
                  <p className="text-sm text-gray-400">{app.threat}</p>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/5 via-purple-500/5 to-cyber-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;
