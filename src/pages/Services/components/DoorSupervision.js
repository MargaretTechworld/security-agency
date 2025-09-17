import React from 'react';
const image1 = "/assets/images/services/door.jpg";
const DoorSupervision = () => {
  return (
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
      <div className="event-img-content">
              <div className="service-img-image">
                <img className="service-img-image" src={image1} alt="Residential security system in place" />
              </div>
            </div>
  
    </div>
  );
};

export default DoorSupervision;
