import React from 'react';
import { motion } from 'framer-motion';
import image1 from "../../../assets/images/hero bg/1.jpg";
import image2 from "../../../assets/images/hero bg/3.jpg";
import image3 from "../../../assets/images/hero bg/4.jpg";
import "../../../styles/Services/CloseProtection.css";

const CloseProtection = () => {
  const features = [
    { image: image1 },
    { image: image2 },
    { image: image3 }
  ];

  return (
    <div className="service-detail">
      <section className="service-overview">
        <div className="container">
          <div className="section-header">
            <h2>Close Protection Services</h2>
            <p>
              Our close protection services are designed to provide maximum security 
              while maintaining the lowest possible profile. We understand the unique 
              security challenges faced by high-net-worth individuals, executives, and 
              public figures.
            </p>
          </div>

          {/* Gallery Section */}
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="feature-img-container">
                  <img src={feature.image} alt={`gallery-${index}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Discuss Your Security Needs?</h2>
          <p>Contact us today for a confidential consultation with our close protection experts.</p>
          <button className="cta-button">Request Consultation</button>
        </div>
      </section>
    </div>
  );
};

export default CloseProtection;
