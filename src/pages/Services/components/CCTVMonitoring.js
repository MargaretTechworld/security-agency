import React, { useState, useEffect } from 'react';

const images = [
  "/assets/images/about_img3.jpg",
  "/assets/images/about_img4.jpg",
];

const CCTVMonitoring = () => {
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
        <h2>CCTV Monitoring Services</h2>
        <p>24/7 surveillance and monitoring services to protect your property, assets, and people with advanced CCTV technology and professional monitoring.</p>
        
        <div className="service-features">
          <h3>Our CCTV Monitoring Services Include:</h3>
          <ul>
            <li>24/7 live monitoring by security professionals</li>
            <li>High-definition CCTV systems</li>
            <li>Remote access and mobile alerts</li>
            <li>Motion detection and analytics</li>
            <li>Video verification and evidence collection</li>
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
              alt="CCTV monitoring setup"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CCTVMonitoring;
