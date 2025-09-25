import React, { useState, useEffect } from 'react';

const images = [
  "/assets/images/hero bg/1.jpg",
  "/assets/images/hero bg/3.jpg",
];

const CloseProtection = () => {
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
        <h2>Close Protection Services</h2>
        <p>
          Our highly trained close protection officers provide discreet and professional 
          personal security for individuals, executives, VIPs, and high-profile clients. 
          We ensure safety and peace of mind through proactive risk assessment and 
          tailored protection strategies.
        </p>
        
        <div className="service-features">
          <h3>Our Close Protection Services Include:</h3>
          <ul>
            <li>Personal bodyguards and executive protection</li>
            <li>Secure travel planning and escort services</li>
            <li>Threat and risk assessment</li>
            <li>Residential and workplace protection</li>
            <li>24/7 security coverage tailored to client needs</li>
          </ul>
        </div>
      </div>
      <div className="side-div">
        <div className="sliding-images">
          {images.map((image, index) => (
            <img
              key={index}
              className={`side-img ${index === currentIndex ? 'active' : ''}`}
              src={image}
              alt="Close protection officer in action"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CloseProtection;
