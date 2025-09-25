import React, { useState, useEffect } from 'react';

const images = [
  "/assets/images/hero bg/1.jpg",
  "/assets/images/hero bg/3.jpg",
];

const CooperativeSecurity = () => {
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
        <h2>Cooperative Security Services</h2>
        <p>Our cooperative security solutions are designed for residential communities, business districts, and shared spaces where collaborative security is essential for comprehensive protection.</p>
        
        <div className="service-features">
          <h3>Our Cooperative Security Includes:</h3>
          <ul>
            <li>24/7 security patrols and monitoring</li>
            <li>Access control management</li>
            <li>Emergency response coordination</li>
            <li>Community safety programs</li>
            <li>Collaborative security planning</li>
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
              alt="Cooperative security in action"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CooperativeSecurity;
