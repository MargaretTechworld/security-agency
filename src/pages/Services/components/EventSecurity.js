import React from 'react';
import image1 from "../../../assets/images/services/event.jpg";
const EventSecurity = () => {
  return (
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
      <div className="event-img-content">
              <div className="service-img-image">
                <img className="service-img-image" src={image1} alt="Residential security system in place" />
              </div>
            </div>
    </div>
  );
};

export default EventSecurity;
