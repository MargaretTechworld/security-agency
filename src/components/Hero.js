import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import '../styles/Hero.css';

// Import images with webp format if available
import heroBg1 from '../assets/images/hero bg/1.jpg';
import heroBg3 from '../assets/images/hero bg/3.jpg';
import heroBg4 from '../assets/images/hero bg/4.jpg';
import heroBg5 from '../assets/images/hero bg/5.jpg';

const slides = [
  { background: heroBg1, alt: 'Security Team' },
  { background: heroBg3, alt: 'Security Monitoring' },
  { background: heroBg4, alt: 'Security Personnel' },
  { background: heroBg5, alt: 'Security Operations' }
];

const quotes = [
  "The best defense is a good offense. And the best offense is a good security system.",
  "Security is not a product, but a process.",
  "The greatest threat to security is the illusion of security.",
  "Your security is our priority."
];

// Preload images
const preloadImages = (images) => {
  images.forEach(src => {
    const img = new Image();
    img.src = src.background;
  });
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Preload images on component mount
  useEffect(() => {
    preloadImages(slides);
    setIsLoaded(true);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  // Auto-advance slides
  useEffect(() => {
    if (isHovered || !isLoaded) return;
    const slideTimer = setInterval(nextSlide, 5000);
    return () => clearInterval(slideTimer);
  }, [isHovered, nextSlide, isLoaded]);

  // Auto-advance quotes
  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setCurrentQuote(prev => (prev === quotes.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(quoteTimer);
  }, []);

  if (!isLoaded) {
    return (
      <section className="hero loading">
        <div className="hero-carousel" />
      </section>
    );
  }

  return (
    <section className="hero">
      <div 
        className="hero-carousel"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Hero carousel"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${slide.background})`,
              opacity: index === currentSlide ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out'
            }}
            aria-hidden={index !== currentSlide}
            role="img"
            aria-label={slide.alt}
          />
        ))}
        <div className="overlay" />
      </div>

      <div className="hero-info">
        <div className="hero-info-content">
          <h1 className="company-title">Elite Security</h1>
          <p className="company-subtitle">Your Trusted Partner in Protection</p>
          <div className="quote-container">
            <p className="quote-text">"{quotes[currentQuote]}"</p>
          </div>

          <div className="contact-details">
            <a href="tel:+1234567890" className="contact-item">
              <FaPhone /> (232) 32 055466
            </a>
            <a href="mailto:eliteprotection25@gmail.com" className="contact-item">
              <FaEnvelope /> eliteprotection25@gmail.com
            </a>
          </div>

          <Link to="/services" className="contact-btn" aria-label="View our services">
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
