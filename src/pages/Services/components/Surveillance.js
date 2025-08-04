import React from 'react';
import { FaVideo, FaShieldAlt, FaMobileAlt, FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Surveillance = () => {
  return (
    <div className="service-detail">
      <h2>Professional Surveillance Solutions</h2>
      <p className="service-intro">
        Our state-of-the-art surveillance systems provide comprehensive monitoring and protection for your property, assets, and people. 
        With 24/7 monitoring and advanced analytics, we ensure your security is never compromised.
      </p>
      
      <div className="service-features">
        <div className="feature">
          <div className="feature-icon">
            <FaVideo />
          </div>
          <h3>High-Definition Cameras</h3>
          <p>Crystal clear video quality with night vision and motion detection capabilities for round-the-clock monitoring.</p>
        </div>
        
        <div className="feature">
          <div className="feature-icon">
            <FaShieldAlt />
          </div>
          <h3>24/7 Monitoring</h3>
          <p>Our security operations center is staffed by trained professionals monitoring your property at all times.</p>
        </div>
        
        <div className="feature">
          <div className="feature-icon">
            <FaMobileAlt />
          </div>
          <h3>Remote Access</h3>
          <p>Access your surveillance feeds from anywhere using our secure mobile app or web portal.</p>
        </div>
        
        <div className="feature">
          <div className="feature-icon">
            <FaChartLine />
          </div>
          <h3>Advanced Analytics</h3>
          <p>AI-powered analytics for facial recognition, license plate reading, and suspicious activity detection.</p>
        </div>
      </div>
      
      <div className="service-benefits">
        <h3>Benefits of Our Surveillance Solutions</h3>
        <ul>
          <li>Deter criminal activity before it happens</li>
          <li>Gather evidence in case of incidents</li>
          <li>Monitor multiple locations from a single dashboard</li>
          <li>Reduce security personnel costs</li>
          <li>Peace of mind knowing your property is protected</li>
        </ul>
      </div>
      
      <div className="cta-section">
        <h3>Ready to Secure Your Property?</h3>
        <p>Contact us today for a free consultation and security assessment.</p>
        <Link to="/contact" className="btn btn-primary">Get a Free Quote</Link>
      </div>
    </div>
  );
};

export default Surveillance;
