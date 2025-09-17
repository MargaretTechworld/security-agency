import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../styles/ImageCarousel.css';

const ImageCarousel = ({ 
  images, 
  autoPlay = true, 
  showControls = true, 
  showIndicators = true, 
  interval = 5000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);

  const goToNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  }, [images.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToSlide = (index) => {
    if (index >= 0 && index < images.length) {
      setCurrentIndex(index);
    }
  };

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || isPaused || images.length <= 1) return;
    const timer = setInterval(goToNext, interval);
    return () => clearInterval(timer);
  }, [currentIndex, isPaused, autoPlay, interval, goToNext, images.length]);

  if (!images || images.length === 0) return null;

  // Get the correct image source (support both src and image properties)
  const getImageSource = (img) => {
    if (typeof img === 'string') return img;
    if (img.src) return img.src;
    if (img.image) return img.image;
    return '';
  };

  return (
    <div 
      ref={carouselRef}
      className="carousel-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        className="carousel-slides"
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {images.map((image, index) => {
          const imgSrc = getImageSource(image);
          return (
            <div 
              key={index}
              className={`carousel-slide ${currentIndex === index ? 'active' : ''}`}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: currentIndex === index ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: currentIndex === index ? 1 : 0
              }}
              aria-hidden={currentIndex !== index}
            >
              <img 
                src={imgSrc} 
                alt={image.alt || ''}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 0%', /* Show the very top of the images */
                  display: 'block'
                }}
              />
              {image.caption && (
                <div className="carousel-caption">
                  <h3>{image.caption}</h3>
                  {image.description && <p>{image.description}</p>}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {showControls && images.length > 1 && (
        <>
          <button 
            className="carousel-control prev" 
            onClick={goToPrev}
            aria-label="Previous slide"
          >
            <FaChevronLeft />
          </button>
          
          <button 
            className="carousel-control next" 
            onClick={goToNext}
            aria-label="Next slide"
          >
            <FaChevronRight />
          </button>
        </>
      )}

      {showIndicators && images.length > 1 && (
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
      )}
    </div>
  );
};

ImageCarousel.propTypes = {
  images: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string,
      image: PropTypes.string,
      alt: PropTypes.string,
      caption: PropTypes.string,
      description: PropTypes.string
    }))
  ]).isRequired,
  autoPlay: PropTypes.bool,
  showControls: PropTypes.bool,
  showIndicators: PropTypes.bool,
  interval: PropTypes.number
};

export default ImageCarousel;
