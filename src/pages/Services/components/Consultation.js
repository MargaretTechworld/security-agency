import React from 'react';
import { FaClipboardCheck, FaChartLine, FaBuilding, FaUsers, FaShieldAlt, FaSearch, FaClipboardList, FaTools, FaSyncAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Consultation = () => {
  return (
    <div className="service-detail">
      <h2>Security Consultation</h2>
      <p className="service-intro">
        Our expert security consultants work with you to assess vulnerabilities and develop comprehensive
        security strategies tailored to your organization's unique needs.
      </p>
      
      <div className="service-features">
        <div className="feature">
          <div>
            <h3><FaClipboardCheck className="feature-icon"/>Security Audits</h3>
          </div>
          <p>Comprehensive evaluation of your current security measures and potential vulnerabilities.</p>
        </div>
        
        <div className="feature">
          <div>
            <h3><FaChartLine className="feature-icon"/>Risk Analysis</h3>
          </div>
          <p>Detailed assessment of potential threats and their impact on your organization.</p>
        </div>
        
        <div className="feature">
          <div>
            <h3><FaBuilding className="feature-icon" />Training Programs</h3>
          </div>
          <p>Specialized security training for your staff and security personnel.</p>
        </div>
        
        <div className="feature">
          <div>
            <h3><FaShieldAlt className="feature-icon" /> Compliance</h3>
          </div>
          <p>Ensuring your security measures meet industry standards and regulations.</p>
        </div>
      </div>
      
      <div className="consultation-process">
        <h2 className="section-title">Our Consultation Process</h2>
        <p className="section-subtitle">A comprehensive approach to understanding and addressing your security needs</p>
        
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <div className="step-header">
                <FaSearch className="step-icon" />
                <h4>Initial Assessment</h4>
              </div>
              <p>We'll discuss your security concerns and conduct a preliminary evaluation of your current security measures.</p>
            </div>
          </div>
          
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <div className="step-header">
                <FaClipboardList className="step-icon" />
                <h4>Customized Plan</h4>
              </div>
              <p>We'll develop a tailored security strategy based on your specific requirements and risk profile.</p>
            </div>
          </div>
          
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <div className="step-header">
                <FaTools className="step-icon" />
                <h4>Implementation</h4>
              </div>
              <p>Our team will implement the recommended security measures with minimal disruption to your operations.</p>
            </div>
          </div>
          
          <div className="step">
            <div className="step-number">4</div>
            <div className="step-content">
              <div className="step-header">
                <FaSyncAlt className="step-icon" />
                <h4>Ongoing Support</h4>
              </div>
              <p>We provide continuous monitoring, maintenance, and updates to ensure your security remains effective.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="cta-section">
        <h3>Secure Your Future Today</h3>
        <p>Schedule a consultation with our security experts to assess your needs and develop a comprehensive security strategy.</p>
        <Link to="/contact" className="btn btn-primary">Request Consultation</Link>
      </div>
    </div>
  );
};

export default Consultation;
