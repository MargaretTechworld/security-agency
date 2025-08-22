import React from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaShieldAlt,
  FaUserShield,
  FaLock,
  FaClipboardCheck,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', path: '/', icon: <FaShieldAlt className="link-icon" /> },
    { name: 'Services', path: '/services', icon: <FaLock className="link-icon" /> },
    { name: 'About Us', path: '/about', icon: <FaUserShield className="link-icon" /> },
    { name: 'Contact', path: '/contact', icon: <FaPhoneAlt className="link-icon" /> },
    { name: 'Careers', path: '/careers', icon: <FaClipboardCheck className="link-icon" /> },
  ];
  
  const services = [
    { name: 'Security Consultant', path: '/services/security-consultant' },
    { name: 'Cooperative Security', path: '/services/cooperative-security' },
    { name: 'Static Security', path: '/services/static-security' },
    { name: 'Door Supervision/Bouncer', path: '/services/door-supervision' },
    { name: 'Retail Security', path: '/services/retail-security' },
    { name: 'Event Security', path: '/services/event-security' },
    { name: 'CCTV Monitoring', path: '/services/cctv-monitoring' },
  ];
  
  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookie-policy' },
    { name: 'GDPR Compliance', path: '/gdpr' },
    { name: 'Sitemap', path: '/sitemap' },
  ];
  
  const socialLinks = [
    { 
      icon: <FaFacebookF className="social-icon" />, 
      url: 'https://facebook.com', 
      name: 'Facebook',
      color: '#3b5998'
    },
    { 
      icon: <FaTwitter className="social-icon" />, 
      url: 'https://twitter.com', 
      name: 'Twitter',
      color: '#1da1f2'
    },
    { 
      icon: <FaLinkedinIn className="social-icon" />, 
      url: 'https://linkedin.com', 
      name: 'LinkedIn',
      color: '#0077b5'
    },
    { 
      icon: <FaInstagram className="social-icon" />, 
      url: 'https://instagram.com', 
      name: 'Instagram',
      color: '#e1306c'
    },
  ];
  
  const contactInfo = [
    { 
      icon: <FaMapMarkerAlt className="contact-icon" />, 
      text: '2 Hall Street, Brookfields',
      subtext: 'Freetown, Sierra Leone',
      link: 'https://maps.google.com?q=2+Hall+Street+Brookfields+Freetown'
    },
    { 
      title: 'Phone',
      items: [
        { 
          text: '+232 77 702 642',
          label: 'Primary',
          link: 'tel:+23277702642'
        },
        { 
          text: '+232 31 698 619',
          label: 'Secondary',
          link: 'tel:+23231698619'
        },
        { 
          text: '+232 32 054 66',
          label: 'Office',
          link: 'tel:+2323205466'
        },
        { 
          text: '+44 786 055 5808',
          label: 'UK Office',
          link: 'tel:+447860555808'
        }
      ]
    },
    { 
      icon: <FaEnvelope className="contact-icon" />, 
      text: 'eliteprotection25@gmail.com',
      link: 'mailto:eliteprotection25@gmail.com'
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* About Column */}
            <div className="footer-col about-col">
              <div className="footer-logo-container">
                <Link to="/" className="footer-logo">
                  Elite<span>Security</span>
                </Link>
              </div>
              <p className="footer-about">
                Providing premium security solutions with unmatched professionalism and integrity. Our team of experts is dedicated to ensuring your safety and peace of mind.
              </p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={`Visit our ${social.name} page`}
                    style={{ '--social-color': social.color }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Column */}
            <div className="footer-col">
              <h3 className="footer-title">Contact Us</h3>
              <div className="contact-info">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-item">
                    {item.icon && (
                      <a href={item.link} className="contact-link" target="_blank" rel="noopener noreferrer">
                        <span className="icon-wrapper">{item.icon}</span>
                        <div className="contact-text">
                          <span>{item.text}</span>
                          {item.subtext && <span className="contact-subtext">{item.subtext}</span>}
                        </div>
                      </a>
                    )}
                    {item.title && (
                      <div className="phone-section">
                        <div className="contact-title">
                          <FaPhoneAlt className="contact-icon" />
                          <span>{item.title}</span>
                        </div>
                        <div className="phone-numbers">
                          {item.items.map((phone, i) => (
                            <a key={i} href={phone.link} className="phone-number">
                              <span className="phone-text">{phone.text}</span>
                              {phone.label && <span className="phone-label">{phone.label}</span>}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Services Column */}
            <div className="footer-col">
              <h3 className="footer-title">Our Services</h3>
              <ul className="footer-links">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link to={service.path} className="footer-link">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links Column */}
            <div className="footer-col">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="footer-link">
                      {link.icon}
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="footer-cta">
                <Link to="/contact" className="btn btn-primary">Get a Free Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; {currentYear} Elite Security Solutions. All Rights Reserved.
            </p>
            <div className="footer-legal">
              {legalLinks.map((link, index) => (
                <React.Fragment key={index}>
                  <Link to={link.path} className="legal-link">{link.name}</Link>
                  {index < legalLinks.length - 1 && <span>•</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
