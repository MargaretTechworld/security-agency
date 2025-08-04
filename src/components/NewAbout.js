import React from 'react';
import { 
  FaShieldAlt, 
  FaLock, 
  FaUserShield, 
  FaCheckCircle
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ImageCarousel from './ImageCarousel';
import '../styles/NewAbout.css';

const NewAbout = ({ expanded = false }) => {
  const carouselImages = [
    {
      src: 'https://picsum.photos/1600/900?random=1',
      alt: 'Security Team',
      caption: 'Our Professional Team',
      description: 'Highly trained security professionals ready to serve you'
    },
    {
      src: 'https://picsum.photos/1600/900?random=2',
      alt: 'Security Operations Center',
      caption: '24/7 Monitoring',
      description: 'State-of-the-art surveillance and rapid response'
    },
    {
      src: 'https://picsum.photos/1600/900?random=3',
      alt: 'Security Technology',
      caption: 'Advanced Technology',
      description: 'Cutting-edge security systems and equipment'
    },
    {
      src: 'https://picsum.photos/1600/900?random=4',
      alt: 'Client Meeting',
      caption: 'Personalized Service',
      description: 'Custom security solutions tailored to your needs'
    }
  ];

  const features = [
    {
      icon: <FaShieldAlt className="feature-icon" />,
      title: 'Advanced Protection',
      description: 'State-of-the-art security solutions tailored to your needs'
    },
    {
      icon: <FaLock className="feature-icon" />,
      title: '24/7 Monitoring',
      description: 'Round-the-clock surveillance and rapid response teams'
    },
    {
      icon: <FaUserShield className="feature-icon" />,
      title: 'Expert Team',
      description: 'Certified professionals with extensive security experience'
    }
  ];

  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '500+', label: 'Satisfied Clients' },
    { value: '99.9%', label: 'Success Rate' },
    { value: '24/7', label: 'Support' }
  ];

  if (!expanded) {
    return (
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-grid">
            {/* Left Column - Image Carousel */}
            <div className="about-image">
              <ImageCarousel images={carouselImages} autoPlay={true} interval={5000} />
            </div>
            
            {/* Right Column - Content */}
            <div className="about-content">
              <div className="section-header">
                <span className="section-tag">Why Choose Us</span>
                <h2>Your Trusted Security <span>Partner</span></h2>
                <div className="divider"></div>
                <p className="section-intro">
                  At Elite Security, we combine cutting-edge technology with expert personnel to deliver unparalleled security solutions. Since 2010, we've been the trusted choice for businesses and individuals who value safety and peace of mind.
                </p>
              </div>
              
              <div className="features-grid">
                {features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <div className="feature-icon-container">
                      {feature.icon}
                    </div>
                    <div className="feature-text">
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="stats-container">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
              
              <div className="cta-buttons">
                <Link to="/about" className="btn btn-primary">Learn More</Link>
                <Link to="/contact" className="btn btn-outline">Get a Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Expanded view for the full About page
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About Elite Security</h1>
          <p>Professional security solutions you can trust</p>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="about-main">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <ImageCarousel images={carouselImages} autoPlay={true} interval={5000} />
            </div>
            
            <div className="about-content">
              <h2>Our Story</h2>
              <p>
                Founded in 2010, Elite Security has grown from a small local security firm to a leading provider of comprehensive security solutions. Our journey has been marked by innovation, dedication, and an unwavering commitment to our clients' safety.
              </p>
              
              <h3>Our Mission</h3>
              <p>
                To provide exceptional security services through innovation, integrity, and excellence, ensuring the safety and peace of mind of our clients.
              </p>
              
              <h3>Our Vision</h3>
              <p>
                To be the most trusted security partner, setting industry standards through advanced technology and exceptional service.
              </p>
              
              <div className="values">
                <h3>Core Values</h3>
                <ul>
                  <li><FaCheckCircle className="check-icon" /> Integrity in all our dealings</li>
                  <li><FaCheckCircle className="check-icon" /> Excellence in service delivery</li>
                  <li><FaCheckCircle className="check-icon" /> Innovation in security solutions</li>
                  <li><FaCheckCircle className="check-icon" /> Commitment to client satisfaction</li>
                  <li><FaCheckCircle className="check-icon" /> Respect for all individuals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewAbout;
