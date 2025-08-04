import React from 'react';
import { FaLock, FaUserShield,FaChartPie, FaNetworkWired } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cybersecurity = () => {
  return (
    <div className="service-detail">
      <h2>Advanced Cybersecurity Solutions</h2>
      <p className="service-intro">
        Protect your digital assets with our comprehensive cybersecurity services. 
        From network security to data protection, we provide enterprise-grade security solutions 
        tailored to your organization's needs.
      </p>
      
      <div className="service-features">
        <div className="feature">
          <div className="feature-icon">
            <FaLock />
          </div>
          <h3>Data Protection</h3>
          <p>End-to-end encryption and data loss prevention to secure your sensitive information.</p>
        </div>
        
        <div className="feature">
          <div className="feature-icon">
            <FaNetworkWired />
          </div>
          <h3>Network Security</h3>
          <p>Advanced firewall protection and intrusion detection systems to safeguard your network.</p>
        </div>
        
        <div className="feature">
          <div className="feature-icon">
            <FaUserShield />
          </div>
          <h3>Threat Intelligence</h3>
          <p>Real-time monitoring and proactive threat detection to prevent cyber attacks.</p>
        </div>
        
        <div className="feature">
          <div className="feature-icon">
            <FaChartPie />
          </div>
          <h3>Security Audits</h3>
          <p>Comprehensive security assessments to identify and address vulnerabilities.</p>
        </div>
      </div>
      
      <div className="service-benefits">
        <h3>Our Cybersecurity Approach</h3>
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
      
      <div className="cta-section">
        <h3>Secure Your Digital Assets Today</h3>
        <p>Get a free cybersecurity assessment and protect your business from evolving threats.</p>
        <Link to="/contact" className="btn btn-primary">Request Assessment</Link>
      </div>
    </div>
  );
};

export default Cybersecurity;
