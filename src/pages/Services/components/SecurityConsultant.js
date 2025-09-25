import React, { useState, useEffect } from 'react';

const images = [
  "/assets/images/new img/new2.jpg",
  "/assets/images/new img/new1.jpg",
];

const SecurityConsultant = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="services-img-cont">
      <div className="service-detail">
        <h2>Security Consultant Services</h2>
        <p>Our expert security consultants provide comprehensive security assessments and strategic planning to protect your assets and ensure safety. We analyze your unique security needs and develop customized solutions.</p>
        <div className="service-features">
          <h3>Our Security Consulting Services Include:</h3>
          <ul>
            <li>Security risk assessments and audits</li>
            <li>Security policy and procedure development</li>
            <li>Threat and vulnerability analysis</li>
            <li>Security program development</li>
            <li>Regulatory compliance consulting</li>
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
              alt="Security consultant in action" // Updated alt text
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecurityConsultant;