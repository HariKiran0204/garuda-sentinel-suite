
import React from 'react';
import { Shield } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 py-12 bg-cyber-darker">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <h3 className="font-orbitron text-2xl font-bold text-cyber-blue mb-2">
                GARUDA
              </h3>
              <p className="text-gray-400 max-w-md">
                Emotion-Intelligent Sentinel for Real-Time Threat Detection and Emergency Response. 
                Protecting communications with advanced AI and the wisdom of ancient guardians.
              </p>
            </div>
            
            {/* Security Info */}
            <div className="flex items-center space-x-2 text-cyber-green text-sm">
              <Shield className="h-4 w-4" />
              <span className="font-tech">QUANTUM-ENCRYPTED • ZERO-KNOWLEDGE ARCHITECTURE</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron text-lg text-cyber-green mb-4">SECURITY RESOURCES</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyber-blue transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyber-blue transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyber-blue transition-colors">
                  Security Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyber-blue transition-colors">
                  Compliance Reports
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-orbitron text-lg text-cyber-green mb-4">SECURE CONTACT</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="font-tech">security@garuda.ai</li>
              <li className="font-tech">emergency@garuda.ai</li>
              <li className="font-tech">+1 (555) GARUDA-1</li>
              <li className="text-xs">PGP Key: 0x4A7F9E2B</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm font-tech mb-4 md:mb-0">
            © {currentYear} GARUDA Security Systems. All rights reserved. | 
            <span className="text-cyber-blue ml-1">
              CLASSIFIED DEFENSE TECHNOLOGY
            </span>
          </div>
          
          {/* Cyber-styled social links */}
          <div className="flex space-x-4">
            {['TWITTER', 'LINKEDIN', 'GITHUB'].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-gray-500 hover:text-cyber-blue transition-colors text-sm font-tech"
              >
                [{platform}]
              </a>
            ))}
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-8 p-4 border border-cyber-blue/30 rounded-lg bg-cyber-blue/5">
          <p className="text-xs text-gray-400 font-tech text-center">
            <span className="text-cyber-blue">SECURITY NOTICE:</span> This system is monitored and protected by advanced 
            AI threat detection. Unauthorized access attempts will be detected, logged, and reported to appropriate authorities.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
