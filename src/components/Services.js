import React, { useState } from 'react';
import { FaShieldAlt, FaUserShield, FaLock, FaVideo, FaGlobe, FaBuilding } from 'react-icons/fa';
import '../styles/Services.css';

const services = [
  { id: 1, icon: <FaShieldAlt />, title: 'Physical Security', description: 'Professional security personnel and physical protection services to safeguard your premises and assets 24/7.' },
  { id: 2, icon: <FaLock />, title: 'Cybersecurity', description: 'Advanced digital protection solutions to secure your data and systems from cyber threats and breaches.' },
  { id: 3, icon: <FaUserShield />, title: 'Executive Protection', description: 'Discreet and professional personal security services for high-profile individuals and executives.' },
  { id: 4, icon: <FaVideo />, title: 'Surveillance', description: 'State-of-the-art monitoring systems to keep a watchful eye on your property and assets.' },
  { id: 5, icon: <FaGlobe />, title: 'Risk Assessment', description: 'Comprehensive security evaluations to identify vulnerabilities and recommend protective measures.' },
  { id: 6, icon: <FaBuilding />, title: 'Corporate Security', description: 'Tailored security solutions for businesses of all sizes to protect employees and assets.' }
];

const Services = () => {
  const [activeService, setActiveService] = useState(services[0].id);
  const currentService = services.find(s => s.id === activeService);

  return (
    <section id="services" className="services-dashboard-section">
      <div className="services-dashboard container">
        {/* Left Menu */}
        <div className="services-menu">
          {services.map(service => (
            <div
              key={service.id}
              className={`service-menu-item ${activeService === service.id ? 'active' : ''}`}
              onClick={() => setActiveService(service.id)}
            >
              <span className="service-icon">{service.icon}</span>
              <span className="service-title">{service.title}</span>
            </div>
          ))}
        </div>

        {/* Right Content */}
        <div className="services-content">
          <h2>{currentService.title}</h2>
          <p>{currentService.description}</p>
          <a href="#contact" className="btn learn-more-btn">Learn More →</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
