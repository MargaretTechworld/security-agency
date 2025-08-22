import React, { useState, useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../styles/ImageCarousel.css';

const ImageCarousel = ({ images, autoPlay = true, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    if (!autoPlay || isPaused) return;
    
    const timer = setTimeout(() => {
      goToNext();
    }, interval);

    return () => clearTimeout(timer);
  }, [currentIndex, isPaused, autoPlay, interval, goToNext]);

  return (
    <div 
      className="carousel-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="carousel-slides">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${image.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center top', /* Focus on the top portion */
              backgroundRepeat: 'no-repeat',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              transition: 'opacity 0.5s ease-in-out',
              /* Ensure the image is properly contained */
              objectPosition: 'center top',
              objectFit: 'cover'
            }}
          >
            <div className="carousel-slide-content">
              {image.caption && (
                <div className="carousel-caption">
                  <h3>{image.caption}</h3>
                  {image.description && <p>{image.description}</p>}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-control prev" onClick={goToPrev}>
        <FaChevronLeft />
      </button>
      <button className="carousel-control next" onClick={goToNext}>
        <FaChevronRight />
      </button>

      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${currentIndex === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
