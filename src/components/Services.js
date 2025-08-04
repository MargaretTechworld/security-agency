import React from 'react';
import { FaShieldAlt, FaUserShield, FaLock, FaVideo, FaGlobe, FaBuilding } from 'react-icons/fa';
import '../styles/Services.css';

const services = [
  {
    id: 1,
    icon: <FaShieldAlt className="service-icon" />,
    title: 'Physical Security',
    description: 'Professional security personnel and physical protection services to safeguard your premises and assets 24/7.'
  },
  {
    id: 2,
    icon: <FaLock className="service-icon" />,
    title: 'Cybersecurity',
    description: 'Advanced digital protection solutions to secure your data and systems from cyber threats and breaches.'
  },
  {
    id: 3,
    icon: <FaUserShield className="service-icon" />,
    title: 'Executive Protection',
    description: 'Discreet and professional personal security services for high-profile individuals and executives.'
  },
  {
    id: 4,
    icon: <FaVideo className="service-icon" />,
    title: 'Surveillance',
    description: 'State-of-the-art monitoring systems to keep a watchful eye on your property and assets.'
  },
  {
    id: 5,
    icon: <FaGlobe className="service-icon" />,
    title: 'Risk Assessment',
    description: 'Comprehensive security evaluations to identify vulnerabilities and recommend protective measures.'
  },
  {
    id: 6,
    icon: <FaBuilding className="service-icon" />,
    title: 'Corporate Security',
    description: 'Tailored security solutions for businesses of all sizes to protect employees and assets.'
  }
];

const Services = () => {
  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon-container">
                {service.icon} <h3 className="service-title">{service.title}</h3>
              </div>
              <p className="service-description">{service.description}</p>
              <a href="#contact" className="service-link">Learn More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
