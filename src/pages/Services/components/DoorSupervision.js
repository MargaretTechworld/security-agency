import React, { useState, useEffect } from 'react';

const images = [
  "/assets/images/new img/new4.jpg",
  "/assets/images/about_img8.jpg",
  "/assets/images/services/door.jpg",
];

const DoorSupervision = () => {
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
        <h2>Door Supervision & Bouncer Services</h2>
        <p>Our professional door supervisors and bouncers ensure safe and secure environments at venues, clubs, bars, and events through expert crowd management and conflict resolution.</p>
        
        <div className="service-features">
          <h3>Our Door Supervision Services Include:</h3>
          <ul>
            <li>Professional door security personnel</li>
            <li>ID verification and age verification</li>
            <li>Crowd control and management</li>
            <li>Conflict de-escalation</li>
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
              alt="Professional door supervision"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoorSupervision;
