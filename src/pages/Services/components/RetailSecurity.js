import React, { useState, useEffect } from 'react';

const images = [
  "/assets/images/about_img11.jpg",
  "/assets/images/about_img17.jpg",
];

const RetailSecurity = () => {
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
        <h2>Retail Security Services</h2>
        <p>Specialized security solutions designed specifically for retail environments to prevent theft, manage crowds, and ensure a safe shopping experience.</p>
        
        <div className="service-features">
          <h3>Our Retail Security Services Include:</h3>
          <ul>
            <li>Loss prevention officers</li>
            <li>Plain-clothes security personnel</li>
            <li>Customer service-oriented security</li>
            <li>Incident documentation and reporting</li>
            <li>Emergency response coordination</li>
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
              alt="Retail security in action"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RetailSecurity;
