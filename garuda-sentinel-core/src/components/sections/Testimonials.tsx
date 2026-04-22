
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Security Officer",
      company: "CyberShield Industries",
      quote: "GARUDA has revolutionized our threat detection capabilities. The emotion analysis feature caught social engineering attempts we never would have detected manually.",
      rating: "A+",
      metric: "97% threat detection improvement"
    },
    {
      name: "Marcus Rodriguez",
      role: "Emergency Response Director",
      company: "Metro Emergency Services",
      quote: "The real-time emotional distress detection has saved countless lives. GARUDA prioritizes our most critical calls with unprecedented accuracy.",
      rating: "AAA",
      metric: "34% faster emergency response"
    },
    {
      name: "Agent Thompson",
      role: "Cybersecurity Specialist",
      company: "Federal Security Agency",
      quote: "As someone who's dealt with voice-based threats for over a decade, GARUDA's AI capabilities are simply unmatched. It's like having a digital guardian angel.",
      rating: "S-Class",
      metric: "99.7% accuracy rate"
    }
  ];

  const certifications = [
    { name: "ISO 27001", level: "Certified" },
    { name: "SOC 2 Type II", level: "Compliant" },
    { name: "NIST Framework", level: "Aligned" },
    { name: "GDPR", level: "Compliant" }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            <span className="cyber-glow">// TESTIMONIALS & CERTIFICATIONS</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Trusted by security professionals and certified by leading organizations worldwide
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="cyber-border p-6 hover:scale-105 transition-all duration-300">
              <div className="mb-4">
                <div className="flex justify-between items-start mb-3">
                  <Badge className="bg-cyber-green text-black">
                    {testimonial.rating}
                  </Badge>
                  <div className="text-right">
                    <div className="text-cyber-blue font-tech text-sm">
                      {testimonial.metric}
                    </div>
                  </div>
                </div>
                <blockquote className="text-gray-300 italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
              </div>
              <div className="border-t border-gray-700 pt-4">
                <div className="font-orbitron text-cyber-blue">
                  {testimonial.name}
                </div>
                <div className="text-gray-400 text-sm">
                  {testimonial.role}
                </div>
                <div className="text-gray-500 text-xs font-tech">
                  {testimonial.company}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Security Certifications */}
        <Card className="cyber-border p-8">
          <h3 className="font-orbitron text-2xl text-cyber-green mb-6 text-center">
            // SECURITY CERTIFICATIONS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 border-2 border-cyber-blue rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-cyber-blue" />
                </div>
                <div className="font-tech text-cyber-blue text-sm mb-1">
                  {cert.name}
                </div>
                <Badge variant="outline" className="border-cyber-green text-cyber-green">
                  {cert.level}
                </Badge>
              </div>
            ))}
          </div>
        </Card>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <Card className="cyber-border p-6 text-center">
            <div className="text-3xl font-bold text-cyber-green mb-2">99.7%</div>
            <div className="text-gray-400">Threat Detection Accuracy</div>
          </Card>
          <Card className="cyber-border p-6 text-center">
            <div className="text-3xl font-bold text-cyber-blue mb-2">&lt;50ms</div>
            <div className="text-gray-400">Average Response Time</div>
          </Card>
          <Card className="cyber-border p-6 text-center">
            <div className="text-3xl font-bold text-cyber-magenta mb-2">24/7</div>
            <div className="text-gray-400">Continuous Monitoring</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
