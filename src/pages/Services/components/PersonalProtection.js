import React from 'react';
import { FaUserShield, FaCar, FaBuilding, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PersonalProtection = () => {
  return (
    <div className="service-detail">
      <h2>Executive & Personal Protection</h2>
      <p className="service-intro">
        Our highly trained protection specialists provide discreet, professional security services
        for executives, high-net-worth individuals, and anyone requiring personal protection.
        Your safety is our top priority.
      </p>
      
      <div className="service-features">
        <div className="feature">
          <div className="feature-icon">
            <FaUserShield />
          </div>
          <h3>Executive Protection</h3>
          <p>Discreet, professional security for corporate executives and high-profile individuals.</p>
        </div>
        
        <div className="feature">
          <div className="feature-icon">
            <FaCar />
          </div>
          <h3>Secure Transportation</h3>
          <p>Armored vehicles and trained drivers for safe ground transportation.</p>
        </div>
        
        <div className="feature">
          <div className="feature-icon">
            <FaBuilding />
          </div>
          <h3>Residential Security</h3>
          <p>24/7 residential protection and estate security solutions.</p>
        </div>
        
        <div className="feature">
          <div className="feature-icon">
            <FaGlobe />
          </div>
          <h3>Travel Security</h3>
          <p>International travel protection and risk assessment services.</p>
        </div>
      </div>
      
      <div className="service-benefits">
        <h3>Our Protection Services Include</h3>
        <ul>
          <li>Risk assessment and threat analysis</li>
          <li>Close protection officers with military/law enforcement background</li>
          <li>Advance security planning for events and travel</li>
          <li>Residential and workplace security assessments</li>
          <li>Emergency response and crisis management</li>
        </ul>
      </div>
      
      <div className="protection-levels">
        <h3>Protection Levels</h3>
        <div className="levels-grid">
          <div className="level">
            <h4>Basic</h4>
            <p>Single agent, low profile</p>
            <p>Ideal for low-risk situations</p>
          </div>
          <div className="level featured">
            <h4>Executive</h4>
            <p>2-3 agent team</p>
            <p>Comprehensive protection package</p>
          </div>
          <div className="level">
            <h4>High-Risk</h4>
            <p>4+ agent team</p>
            <p>For high-threat environments</p>
          </div>
        </div>
      </div>
      
      <div className="cta-section">
        <h3>Your Safety is Our Priority</h3>
        <p>Contact us for a confidential consultation about your personal protection needs.</p>
        <Link to="/contact" className="btn btn-primary">Request Protection</Link>
      </div>
    </div>
  );
};

export default PersonalProtection;
