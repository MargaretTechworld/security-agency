import React, { useState, useEffect } from 'react';

const images = [
  "/assets/images/hero bg/4.jpg",
  "/assets/images/hero bg/5.jpg",
  "/assets/images/hero bg/6.jpg",
];

const StaticSecurity = () => {
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
        <h2>Static Security Services</h2>
        <p>Dedicated security personnel stationed at fixed locations to provide consistent protection for your property, assets, and personnel.</p>
        
        <div className="service-features">
          <h3>Our Static Security Services Include:</h3>
          <ul>
            <li>24/7 security guard services</li>
            <li>Access control and monitoring</li>
            <li>Patrol services for large premises</li>
            <li>Emergency response teams</li>
            <li>Security for construction sites</li>
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
              alt="Static security personnel on duty"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaticSecurity;
