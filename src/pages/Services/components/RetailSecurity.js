import React from 'react';
import image1 from "../../../assets/images/services/retail.jpg";
const RetailSecurity = () => {
  return (
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
      <div className="event-img-content">
              <div className="service-img-image">
                <img className="service-img-image" src={image1} alt="Residential security system in place" />
              </div>
            </div>
    </div>
  );
};

export default RetailSecurity;
