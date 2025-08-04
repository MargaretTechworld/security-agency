import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import '../styles/Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO, TechCorp',
    content: 'Elite Security provided exceptional security services during our product launch event. Their team was professional, attentive, and ensured everything went smoothly without any security concerns.',
    rating: 5,
    image: '/images/testimonial-1.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Director, Global Finance',
    content: 'We\'ve been using Elite Security for our corporate security needs for over three years. Their cybersecurity team helped us prevent potential data breaches and their physical security is top-notch.',
    rating: 5,
    image: '/images/testimonial-2.jpg'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    position: 'Event Manager, Star Events',
    content: 'The executive protection team was outstanding during our high-profile gala. They were discreet yet effective, and our VIP guests felt completely safe throughout the event.',
    rating: 5,
    image: '/images/testimonial-3.jpg'
  },
  {
    id: 4,
    name: 'David Kim',
    position: 'Property Manager, Urban Living',
    content: 'Their 24/7 surveillance and quick response team have significantly improved the safety of our residential complex. The residents feel much more secure with Elite Security on the job.',
    rating: 4,
    image: '/images/testimonial-4.jpg'
  },
  {
    id: 5,
    name: 'Lisa Wong',
    position: 'COO, Retail Group',
    content: 'The risk assessment conducted by Elite Security helped us identify vulnerabilities we never knew existed. Their comprehensive security solution has given us peace of mind.',
    rating: 5,
    image: '/images/testimonial-5.jpg'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };
  
  // Auto-rotate testimonials
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextTestimonial();
      }, 8000);
    }
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);
  
  const currentTestimonial = testimonials[currentIndex];
  
  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <h2 className="section-title">Client <span>Testimonials</span></h2>
        <p className="section-subtitle">What our clients say about our services</p>
        
        <div 
          className="testimonial-container" 
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="testimonial-slide">
            <div className="testimonial-content">
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-text">{currentTestimonial.content}</p>
              
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={`star ${i < currentTestimonial.rating ? 'filled' : ''}`} 
                  />
                ))}
              </div>
              
              <div className="testimonial-author">
                <div className="author-image">
                  <img 
                    src={currentTestimonial.image} 
                    alt={currentTestimonial.name} 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/placeholder-avatar.jpg';
                    }}
                  />
                </div>
                <div className="author-info">
                  <h4>{currentTestimonial.name}</h4>
                  <span>{currentTestimonial.position}</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-navigation">
              <button 
                className="nav-button prev" 
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <FaChevronLeft />
              </button>
              
              <div className="testimonial-dots">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => goToTestimonial(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                className="nav-button next" 
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
