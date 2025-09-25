import React, { useState, useEffect } from 'react';
import { FaVideo, FaShieldAlt, FaMobileAlt, FaChartLine } from 'react-icons/fa';

const images = [
  "/assets/images/hero bg/1.jpg",
  "/assets/images/hero bg/3.jpg",
];

const Surveillance = () => {
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
        <h2>Professional Surveillance Solutions</h2>
        <p>
          Our state-of-the-art surveillance systems provide comprehensive monitoring and protection for your property, assets, and people. 
          With 24/7 monitoring and advanced analytics, we ensure your security is never compromised.
        </p>
        
        <div className="service-features">
          <h3>Our Surveillance Solutions Include:</h3>
          
          <div className="feature">
            <div>
              <h4><FaVideo className="feature-icon" /> High-Definition Cameras</h4>
            </div>
            <p>Crystal clear video quality with night vision and motion detection capabilities for round-the-clock monitoring.</p>
          </div>
          
          <div className="feature">
            <div>
              <h4><FaShieldAlt className="feature-icon" /> 24/7 Monitoring</h4>
            </div>
            <p>Our security operations center is staffed by trained professionals monitoring your property at all times.</p>
          </div>
          
          <div className="feature">
            <div>
              <h4><FaMobileAlt className="feature-icon" /> Remote Access</h4>
            </div>
            <p>Access your surveillance feeds from anywhere using our secure mobile app or web portal.</p>
          </div>
          
          <div className="feature">
            <div>
              <h4><FaChartLine className="feature-icon" /> Advanced Analytics</h4>
            </div>
            <p>AI-powered analytics for facial recognition, license plate reading, and suspicious activity detection.</p>
          </div>
          
          <div className="additional-features">
            <h4>Key Benefits:</h4>
            <ul>
              <li>Deter criminal activity with visible security presence</li>
              <li>Gather evidence with high-quality video recordings</li>
              <li>Reduce security costs with smart, automated monitoring</li>
              <li>Peace of mind knowing your property is protected</li>
            </ul>
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
              alt="Surveillance system in action"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Surveillance;
