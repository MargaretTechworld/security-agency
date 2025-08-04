import React, { useState, useEffect } from 'react';
import { FaShieldAlt, FaUserShield, FaUsers, FaDoorOpen, FaShoppingBag, FaCalendarAlt, FaVideo, FaChevronRight, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SecurityConsultant from './components/SecurityConsultant';
import CooperativeSecurity from './components/CooperativeSecurity';
import StaticSecurity from './components/StaticSecurity';
import DoorSupervision from './components/DoorSupervision';
import RetailSecurity from './components/RetailSecurity';
import EventSecurity from './components/EventSecurity';
import CCTVMonitoring from './components/CCTVMonitoring';
import '../../styles/Services/Services.css';

const Services = () => {
  // Use local state to track the active service
  const [activeService, setActiveService] = useState('security-consultant');
  
  const scrollToContent = () => {
    // Use requestAnimationFrame to ensure DOM is updated before scrolling
    requestAnimationFrame(() => {
      const menu = document.querySelector('.services-top-menu');
      const content = document.querySelector('.services-content-container');
      
      if (menu && content) {
        const menuHeight = menu.offsetHeight;
        const contentRect = content.getBoundingClientRect();
        const yOffset = window.pageYOffset + contentRect.top - menuHeight - 20; // 20px additional spacing
        
        // Scroll to the content, accounting for the fixed menu
        window.scrollTo({
          top: yOffset,
          behavior: 'smooth'
        });
      } else if (content) {
        // Fallback if menu is not found
        const yOffset = content.getBoundingClientRect().top + window.pageYOffset - 20;
        window.scrollTo({ top: yOffset, behavior: 'smooth' });
      } else {
        // Final fallback
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  };

  const handleServiceClick = (e, serviceId) => {
    e.preventDefault();
    setActiveService(serviceId);
    // Scroll only when clicking the submenu items
    scrollToContent();
  };

  const services = [
    {
      id: 'security-consultant',
      title: 'Security Consultant',
      icon: <FaUserShield className="service-icon" />,
      brief: 'Expert security assessments and strategic planning for your unique needs',
      component: <SecurityConsultant />
    },
    {
      id: 'cooperative-security',
      title: 'Cooperative Security',
      icon: <FaUsers className="service-icon" />,
      brief: 'Collaborative security solutions for residential and business communities',
      component: <CooperativeSecurity />
    },
    {
      id: 'static-security',
      title: 'Static Security',
      icon: <FaShieldAlt className="service-icon" />,
      brief: 'Dedicated on-site security personnel for your premises',
      component: <StaticSecurity />
    },
    {
      id: 'door-supervision',
      title: 'Door Supervision/Bouncer',
      icon: <FaDoorOpen className="service-icon" />,
      brief: 'Professional door security for venues and events',
      component: <DoorSupervision />
    },
    {
      id: 'retail-security',
      title: 'Retail Security',
      icon: <FaShoppingBag className="service-icon" />,
      brief: 'Specialized security services for retail environments',
      component: <RetailSecurity />
    },
    {
      id: 'event-security',
      title: 'Event Security',
      icon: <FaCalendarAlt className="service-icon" />,
      brief: 'Comprehensive security solutions for events of all sizes',
      component: <EventSecurity />
    },
    {
      id: 'cctv-monitoring',
      title: 'CCTV Monitoring',
      icon: <FaVideo className="service-icon" />,
      brief: '24/7 surveillance and monitoring services for your property',
      component: <CCTVMonitoring />
    }
  ];

  // Get the current service component to render
  const currentServiceData = services.find(service => service.id === activeService) || services[0];

  return (
    <div className="services-page">
      {/* Services Menu */}
      <div className="services-top-menu">
        <div className="container">
          <div className="services-menu-row">
            {services.map((service) => (
              <motion.div
                key={service.id}
                className={`service-menu-item ${activeService === service.id ? 'active' : ''}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => handleServiceClick(e, service.id)}
              >
                <div className="service-menu-icon">{service.icon}</div>
                <div className="service-menu-title">{service.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="services-content-container">
        <div className="container">
          <div className="service-content">
            {currentServiceData?.component}
            
            <div className="cta-box">
              <h3>Need Help With Your Security Needs?</h3>
              <p>Our team of security experts is ready to provide you with a free consultation and customized security solution.</p>
              <Link to="/contact" className="btn-primary">Get a Free Quote</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
