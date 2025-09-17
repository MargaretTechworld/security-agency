// src/components/Clients.js
import React from 'react';
import { FaShieldAlt } from 'react-icons/fa';
import '../styles/Clients.css';

const logo1 = '/assets/images/clients/logo1.png';
const logo2 = '/assets/images/clients/logo1.jpg';
const logo3 = '/assets/images/clients/logo3.jpeg';
const logo4 = '/assets/images/clients/logo 4.jpeg';

const clients = [
  { id: 1, name: 'PPASL', logo: logo1 },
  { id: 2, name: 'Malador Oil Company', logo: logo2 },
  { id: 3, name: 'St. George\'s Cathedral', logo: null },
  { id: 4, name: 'DDEF Mining Company', logo: null },
  { id: 5, name: 'Freetown Mall Wilkinson Road', logo: logo3 },
  { id: 6, name: 'Connex petrol stations', logo: logo4 },
  { id: 7, name: 'Jamiru& Co', logo: null },
  { id: 8, name: 'Barristers & Solicitor', logo: null }
];

const Clients = () => {
  return (
    <section className="clients-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tagline">TRUSTED BY INDUSTRY LEADERS</span>
          <br />
          <h2 className="section-title-h">Our Esteemed Clients</h2>
          <p className="section-subtitle">
            We collaborate with businesses worldwide to secure their success.
          </p>
        </div>

        <div className="clients-grid">
          {clients.map(client => (
            <div key={client.id} className="client-card">
              <div className="logo-wrapper">
                {client.logo ? (
                  <img src={client.logo} alt={client.name} className="client-logo-img" />
                ) : (
                  <div className="default-logo">
                    <FaShieldAlt className="default-icon" />
                    <span className="client-initials">
                      {client.name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase()}
                    </span>
                  </div>
                )}
              </div>
              <h3 className="client-name">{client.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
