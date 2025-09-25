import React, { useState, useEffect } from 'react';
import { FaLock, FaUserShield, FaChartPie, FaNetworkWired } from 'react-icons/fa';

const images = [
  "/assets/images/hero bg/1.jpg",
  "/assets/images/hero bg/3.jpg",
];

const Cybersecurity = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="services-img-cont">
      <div className="service-detail">
        <h2>Advanced Cybersecurity Solutions</h2>
        <p>
          Protect your digital assets with our comprehensive cybersecurity services. 
          From network security to data protection, we provide enterprise-grade security solutions 
          tailored to your organization's needs.
        </p>
        
        <div className="service-features">
          <h3>Our Cybersecurity Services Include:</h3>
          <div className="feature">
            <div>
              <h4><FaLock className="feature-icon" /> Data Protection</h4>
            </div>
            <p>End-to-end encryption and data loss prevention to secure your sensitive information.</p>
          </div>
          
          <div className="feature">
            <div>
              <h4><FaNetworkWired className="feature-icon" /> Network Security</h4>
            </div>
            <p>Advanced firewall protection and intrusion detection systems to safeguard your network.</p>
          </div>
          
          <div className="feature">
            <div>
              <h4><FaUserShield className="feature-icon" /> Threat Intelligence</h4>
            </div>
            <p>Real-time monitoring and proactive threat detection to prevent cyber attacks.</p>
          </div>
          
          <div className="feature">
            <div>
              <h4><FaChartPie className="feature-icon" /> Security Audits</h4>
            </div>
            <p>Comprehensive security assessments to identify and address vulnerabilities.</p>
          </div>
          <div className="additional-features">
            <h4>Additional Benefits:</h4>
            <ul>
              <li>24/7 security monitoring and incident response</li>
              <li>Regular security updates and patch management</li>
              <li>Employee cybersecurity training programs</li>
              <li>Compliance with industry standards (GDPR, HIPAA, PCI-DSS)</li>
              <li>Custom security solutions for your business needs</li>
            </ul>
          </div>
          <div className="cyber-stats">
            <div className="stat">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime Guarantee</div>
            </div>
            <div className="stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Security Monitoring</div>
            </div>
            <div className="stat">
              <div className="stat-number">30min</div>
              <div className="stat-label">Average Response Time</div>
            </div>
          </div>
        </div>
      </div>
      <div className="side-div">
        <div className="sliding-images">
          {images.map((image, index) => (
            <img
              key={index}
              className={`side-img ${index === currentIndex ? 'active' : ''}`}
              src={image}
              alt="Cybersecurity protection"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cybersecurity;
