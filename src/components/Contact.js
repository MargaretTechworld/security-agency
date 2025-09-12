import React, { useState} from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaPaperPlane, 
  FaCheck, 
  FaTimes, 
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn 
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState({ show: false, type: '', message: '' });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    // No validation for phone number - it's optional and accepts any format
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Show notification
  const showNotification = (type, message) => {
    setNotification({ show: true, type, message });
    setTimeout(() => {
      setNotification({ ...notification, show: false });
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await emailjs.init('xlevy2Jk-SDdhTdng');
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: 'margarettechworld@gmail.com',
        phone: formData.phone || 'Not provided',
        subject: formData.subject || 'No subject',
        message: formData.message,
        reply_to: formData.email
      };
      
      const result = await emailjs.send(
        'default_service',
        'template_gpawqdz',
        templateParams,
        'xlevy2Jk-SDdhTdng'
      );
      
      if (result.status === 200 || result.text === 'OK') {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        showNotification('success', 'Your message has been sent successfully!');
      }
      
    } catch (error) {
      showNotification('error', 'Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="contact-icon" />,
      title: 'Our Location',
      text: '56 Campbell Street ',
      subtext: 'Freetown, Sierra Leone',
      link: 'https://maps.google.com?q=56+Campbell+Street+Freetown',
      linkText: 'View on Map'
    },
    {
      icon: <FaPhoneAlt className="contact-icon" />,
      title: 'Contact Numbers',
      items: [
        {
          text: '+232 77 702 642',
          label: '24/7 Emergency',
          link: 'tel:+23277702642',
          highlight: true
        },
        {
          text: '+232 31 698 619',
          label: 'General Inquiries',
          link: 'tel:+23231698619'
        },
        {
          text: '+44 786 055 5808',
          label: 'UK Office',
          link: 'tel:+447860555808',
          highlight: false
        }
      ]
    },
    {
      icon: <FaEnvelope className="contact-icon" />,
      title: 'Email Address',
      text: 'eliteprotection25@gmail.com',
      link: 'mailto:eliteprotection25@gmail.com',
      linkText: 'Send Email',
      className: 'contact-email'
    },
    {
      icon: <FaClock className="contact-icon" />,
      title: 'Working Hours',
      text: '24/7 Emergency Response',
      subtext: 'Office: Mon-Sun 8:00 AM - 6:00 PM'
    }
  ];

  // Notification component
  const Notification = () => {
    if (!notification.show) return null;
    
    const bgColor = notification.type === 'success' ? '#4CAF50' : '#F44336';
    const icon = notification.type === 'success' ? 
      <FaCheck className="notification-icon" /> : 
      <FaTimes className="notification-icon" />;
    
    return (
      <div className="notification" style={{ backgroundColor: bgColor }}>
        <div className="notification-content">
          {icon}
          <span>{notification.message}</span>
        </div>
      </div>
    );
  };

  return (
    <section className="contact">
      <Notification />
      <div className="contact-container">
        <p className="section-subtitle">We're here to help and answer any questions you might have. We look forward to hearing from you!</p>
        
        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="contact-form-header">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and our team will get back to you as soon as possible.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  placeholder="Enter your name"
                />
                {errors.name && <div className="error-message">{errors.name}</div>}
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <div className="error-message">{errors.email}</div>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                    placeholder="(123) 456-7890"
                  />
                  {errors.phone && <div className="error-message">{errors.phone}</div>}
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="What's this regarding?"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                  rows="5"
                  placeholder="How can we help you?"
                ></textarea>
                {errors.message && <div className="error-message">{errors.message}</div>}
              </div>
              
              <div className="form-actions">
                <button 
                  type="submit" 
                  className="btn-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <FaPaperPlane className="btn-icon" />
                    </>
                  )}
                </button>
              </div>
              <div>
                <iframe 
                  className="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.2232042441697!2d-13.24170732586963!3d8.477664597377233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf04c3a0ebaa74af%3A0x21a7bbc916e972f5!2s56%20Campbell%20St%2C%20Freetown!5e0!3m2!1sen!2ssl!4v1757690030061!5m2!1sen!2ssl"
                  title="Our Location on Google Maps"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
              
              {isSubmitted && (
                <div className="success-message">
                  <FaCheck />
                  <span>Your message has been sent successfully! We'll get back to you soon.</span>
                </div>
              )}
            </form>
          </div>
          
          {/* Contact Information with Background Image */}
          <div className="contact-info-bg">
            <div className="contact-info-overlay">
              <div className="contact-info-section">
                <div className="contact-info-header">
                  <h2>Contact Information</h2>
                  <p>Reach out to us through any of these channels</p>
                </div>
                
                <div className="contact-info-grid">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="contact-info-item">
                      <div className="contact-info-icon">
                        {item.icon}
                      </div>
                      <div className="contact-info-content">
                        <h3>{item.title}</h3>
                        {item.items ? (
                          <ul className="phone-numbers">
                            {item.items.map((phone, idx) => (
                              <li key={idx} className={phone.highlight ? 'highlight' : ''}>
                                <a href={phone.link} className="phone-link">
                                  {phone.text}
                                </a>
                                {phone.label && <span className="phone-label">{phone.label}</span>}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <>
                            <p>{item.text}</p>
                            {item.subtext && <p className="subtext">{item.subtext}</p>}
                            {item.link && (
                              <a href={item.link} className="contact-info-link">
                                {item.linkText}
                              </a>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="contact-social">
                  <h3>Follow Us</h3>
                  <div className="social-links">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <FaFacebookF />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                      <FaTwitter />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="cta-note">
            <p>We'd love to hear from you! Our team typically responds within 24 hours on business days.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
