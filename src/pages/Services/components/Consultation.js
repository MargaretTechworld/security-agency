import React, { useState, useEffect } from 'react';
import { FaClipboardCheck, FaChartLine, FaBuilding, FaShieldAlt } from 'react-icons/fa';

const images = [
  "/assets/images/hero bg/1.jpg",
  "/assets/images/hero bg/3.jpg",
];

const Consultation = () => {
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
        <h2>Security Consultation</h2>
        <p>
          Our expert security consultants work with you to assess vulnerabilities and develop comprehensive
          security strategies tailored to your organization's unique needs.
        </p>
        
        <div className="service-features">
          <h3>Our Security Consultation Services Include:</h3>
          <div className="feature">
            <div>
              <h4><FaClipboardCheck className="feature-icon"/> Security Audits</h4>
            </div>
            <p>Comprehensive evaluation of your current security measures and potential vulnerabilities.</p>
          </div>
          
          <div className="feature">
            <div>
              <h4><FaChartLine className="feature-icon"/> Risk Analysis</h4>
            </div>
            <p>Detailed assessment of potential threats and their impact on your organization.</p>
          </div>
          
          <div className="feature">
            <div>
              <h4><FaBuilding className="feature-icon" /> Training Programs</h4>
            </div>
            <p>Specialized security training for your staff and security personnel.</p>
          </div>
          
          <div className="feature">
            <div>
              <h4><FaShieldAlt className="feature-icon" /> Compliance</h4>
            </div>
            <p>Ensuring your security measures meet industry standards and regulations.</p>
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
              alt="Security consultation in progress"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Consultation;