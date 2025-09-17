import React from 'react';
import image1 from "../../../assets/images/hero bg/1.jpg";

const CloseProtection = () => {
  return (
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

      <div className="event-img-content">
        <div className="service-img-image">
          <img 
            className="service-img" 
            src={image1} 
            alt="Close protection officer providing VIP security" 
          />
        </div>
      </div>
    </div>
  );
};

export default CloseProtection;
