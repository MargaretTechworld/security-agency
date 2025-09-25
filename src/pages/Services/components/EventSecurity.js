import React, { useState, useEffect } from 'react';

const images = [
  "/assets/images/new img/new5.jpg",
  "/assets/images/new img/new6.jpg",
  "/assets/images/services/event.jpg",
];

const EventSecurity = () => {
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
        <h2>Event Security Services</h2>
        <p>Comprehensive security solutions for events of all sizes, from small private gatherings to large public events, ensuring safety and smooth operations.</p>
        
        <div className="service-features">
          <h3>Our Event Security Services Include:</h3>
          <ul>
            <li>Crowd management and control</li>
            <li>Access control and ticket verification</li>
            <li>VIP and performer protection</li>
            <li>Emergency response planning</li>
            <li>Medical and first aid coordination</li>
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
              alt="Event security in action"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventSecurity;
