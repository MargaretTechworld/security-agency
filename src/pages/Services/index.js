import React, { useState, useEffect } from 'react';
import { 
  FaShieldAlt, FaUserShield, FaUsers, 
  FaDoorOpen, FaShoppingBag, FaCalendarAlt, FaVideo 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import SecurityConsultant from './components/SecurityConsultant';
import CooperativeSecurity from './components/CooperativeSecurity';
import StaticSecurity from './components/StaticSecurity';
import DoorSupervision from './components/DoorSupervision';
import RetailSecurity from './components/RetailSecurity';
import EventSecurity from './components/EventSecurity';
import CCTVMonitoring from './components/CCTVMonitoring';
import CloseProtection from './components/CloseProtection';

import '../../styles/Services/Services.css';

const Services = () => {
  const [activeService, setActiveService] = useState('security-consultant');

  const services = [
    { id: 'security-consultant', title: 'Security Consultant', icon: <FaUserShield className="service-icon" />, component: <SecurityConsultant /> },
    { id: 'cooperative-security', title: 'Cooperative Security', icon: <FaUsers className="service-icon" />, component: <CooperativeSecurity /> },
    { id: 'static-security', title: 'Static Security', icon: <FaShieldAlt className="service-icon" />, component: <StaticSecurity /> },
    { id: 'door-supervision', title: 'Door Supervision/Bouncer', icon: <FaDoorOpen className="service-icon" />, component: <DoorSupervision /> },
    { id: 'retail-security', title: 'Retail Security', icon: <FaShoppingBag className="service-icon" />, component: <RetailSecurity /> },
    { id: 'event-security', title: 'Event Security', icon: <FaCalendarAlt className="service-icon" />, component: <EventSecurity /> },
    { id: 'cctv-monitoring', title: 'CCTV Monitoring', icon: <FaVideo className="service-icon" />, component: <CCTVMonitoring /> },
    { id: 'close-protection', title: 'Close Protection', icon: <FaShieldAlt className="service-icon" />, component: <CloseProtection /> }
  ];

  const currentServiceData =
    services.find((service) => service.id === activeService) || services[0];

  // 🔥 Scroll to top of content when activeService changes
  useEffect(() => {
    const content = document.querySelector('.services-content');
    if (content) {
      window.scrollTo({
        top: content.offsetTop - 60, // adjust offset (e.g., for sticky header)
        behavior: 'smooth'
      });
    }
  }, [activeService]);

  return (
    <div className="services-container">
      {/* ==== Sidebar Menu ==== */}
      <aside className="services-sidebar">
        <ul>
          {services.map((service) => (
            <li
              key={service.id}
              className={activeService === service.id ? 'active' : ''}
              onClick={() => setActiveService(service.id)}
            >
              <motion.div
                className="service-item"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {service.icon}
                {service.title}
              </motion.div>
            </li>
          ))}
        </ul>
      </aside>

      {/* ==== Right Content ==== */}
      <main className="services-content">
        <div className="service-content">
          {currentServiceData?.component}

          <div className="cta-box">
            <h3>Need Help With Your Security Needs?</h3>
            <p>
              Our team of security experts is ready to provide you with a free consultation and customized security solution.
            </p>
            <Link to="/contact" className="btn-primary">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;
