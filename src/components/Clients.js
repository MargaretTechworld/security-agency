// src/components/Clients.js
import React from 'react';
import '../styles/Clients.css';
import logo1 from '../assets/images/clients/logo1.png';
import logo2 from '../assets/images/clients/logo2.png';
import { FaShieldAlt } from 'react-icons/fa';

const clients = [
  { 
    id: 1, 
    name: 'PPASL',
    logo: logo1,
  },
  { 
    id: 2, 
    name: 'Malador Oil Company',
    logo: logo2,
  },
  { 
    id: 3, 
    name: 'St. George\'s Cathedral', 
    logo: null, // No logo available, will use fallback
  },
  { 
    id: 4, 
    name: 'DDEF Mining Company', 
    logo: null, // No logo available, will use fallback
  },
];

const Clients = () => {
  return (
    <section className="clients-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tagline">TRUSTED BY INDUSTRY LEADERS</span><br />
          <h2 className="section-title">Our Esteemed Clients</h2>
          <p className="section-subtitle">
          Our clients trust us to protect what matters most to their business.
          </p>
        </div>
        
        <div className="clients-grid">
          {clients.map((client) => (
            <div key={client.id} className="client-card">
              <div className="client-logo">
                <div className="logo-container">
                  {client.logo ? (
                    <img 
                      src={client.logo} 
                      alt={`${client.name} logo`} 
                      className="client-logo-img"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        const fallback = e.target.nextElementSibling;
                        if (fallback && fallback.classList.contains('default-logo')) {
                          fallback.style.display = 'flex';
                        }
                      }}
                    />
                  ) : (
                    <div className="default-logo">
                      <FaShieldAlt className="default-icon" style={{ color: '#3b82f6' }} />
                      <span className="client-initials">
                        {client.name
                          .split(' ')
                          .map(word => word[0])
                          .join('')
                          .substring(0, 2)
                          .toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="client-name">{client.name}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="client-stats">
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Enterprise Clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">99.9%</div>
            <div className="stat-label">Client Retention</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Security Coverage</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;