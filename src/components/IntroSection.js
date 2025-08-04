import React from 'react';
import { FaShieldAlt, FaUserShield, FaVideo, FaHeadset } from 'react-icons/fa';
import '../styles/IntroSection.css';

const IntroSection = () => {
  const features = [
    {
      icon: <FaShieldAlt className="feature-icon" />,
      title: "Advanced Protection",
      description: "State-of-the-art security solutions tailored to your specific needs"
    },
    {
      icon: <FaUserShield className="feature-icon" />,
      title: "Trained Professionals",
      description: "Highly skilled and certified security personnel on duty 24/7"
    },
    {
      icon: <FaVideo className="feature-icon" />,
      title: "Smart Surveillance",
      description: "Cutting-edge monitoring systems for complete peace of mind"
    },
    {
      icon: <FaHeadset className="feature-icon" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance whenever you need it"
    }
  ];

  return (
    <section className="intro-section">
      <div className="container">
        <div className="intro-content">
          <div className="intro-text">
            <h2 className="section-title">
              <span className="highlight">Trusted</span> Security Solutions
              <span className="title-accent">.</span>
            </h2>
            <p className="intro-description">
              At <strong>Elite Security</strong>, we provide comprehensive security solutions designed to protect your business, property, and loved ones. 
              With years of experience in the industry, our team of experts is committed to delivering top-tier security services 
              that meet the highest standards of excellence.
            </p>
          </div>
          
          <div className="intro-features">
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon-container">
                    {feature.icon}
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
