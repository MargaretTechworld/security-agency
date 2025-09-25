import React, { useState, useEffect } from 'react';
import { FaUserShield, FaCar, FaBuilding, FaGlobe } from 'react-icons/fa';

const images = [
  "/assets/images/hero bg/1.jpg",
  "/assets/images/hero bg/3.jpg",
];

const PersonalProtection = () => {
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
        <h2>Executive & Personal Protection</h2>
        <p>
          Our highly trained protection specialists provide discreet, professional security services
          for executives, high-net-worth individuals, and anyone requiring personal protection.
          Your safety is our top priority.
        </p>
        
        <div className="service-features">
          <h3>Our Protection Services Include:</h3>
          <div className="feature">
            <div>
              <h4><FaUserShield className="feature-icon" /> Executive Protection</h4>
            </div>
            <p>Discreet, professional security for corporate executives and high-profile individuals.</p>
          </div>
          
          <div className="feature">
            <div>
              <h4><FaCar className="feature-icon" /> Secure Transportation</h4>
            </div>
            <p>Armored vehicles and trained drivers for safe ground transportation.</p>
          </div>
          
          <div className="feature">
            <div>
              <h4><FaBuilding className="feature-icon" /> Residential Security</h4>
            </div>
            <p>24/7 residential protection and estate security solutions.</p>
          </div>
          
          <div className="feature">
            <div>
              <h4><FaGlobe className="feature-icon" /> Travel Security</h4>
            </div>
            <p>International travel protection and risk assessment services.</p>
          </div>
        </div>
        
        <div className="additional-features">
          <h4>Additional Benefits:</h4>
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
      </div>
      <div className="side-div">
        <div className="sliding-images">
          {images.map((image, index) => (
            <img
              key={index}
              className={`side-img ${index === currentIndex ? 'active' : ''}`}
              src={image}
              alt="Executive protection in action"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalProtection;
