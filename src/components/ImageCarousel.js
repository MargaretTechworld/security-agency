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

  // Get the correct image source with quality optimization
  const getImageSource = (img, highQuality = false) => {
    let src = '';
    if (typeof img === 'string') {
      src = img;
    } else if (img.src) {
      src = img.src;
    } else if (img.image) {
      src = img.image;
    }

    // In production, we need to handle CDN/optimization parameters
    if (process.env.NODE_ENV === 'production') {
      // If high quality version is requested
      if (highQuality) {
        // Try to get high-res version if specified
        if (img.highRes) return img.highRes;
        
        // If no high-res version, try to modify the URL to get better quality
        if (src.includes('?')) {
          // If there are query parameters, add/update quality
          if (!src.includes('q=')) {
            return `${src}&q=90&auto=format`;
          }
        } else {
          // Add quality parameter
          return `${src}?q=90&auto=format`;
        }
      }
      
      // For regular quality, ensure we're not getting a low-quality version
      if (src.includes('?')) {
        if (src.includes('q=')) {
          // Replace existing quality parameter if it's too low
          return src.replace(/q=\d+/, 'q=80');
        }
        return `${src}&q=80&auto=format`;
      }
      return `${src}?q=80&auto=format`;
    }
    
    // In development, just return the source as is
    return src;
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
              <div className="image-wrapper" style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'hidden'
              }}>
                <img 
                  src={getImageSource(image)}
                  srcSet={`${getImageSource(image, true)} 2x`}
                  alt={image.alt || ''}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 0%',
                    display: 'block',
                    backgroundColor: '#f5f5f5',
                    transition: 'opacity 0.3s ease-in-out',
                    opacity: 0,
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                    willChange: 'transform'
                  }}
                  loading="eager"
                  decoding="async"
                  fetchPriority={index === currentIndex ? 'high' : 'auto'}
                  onLoad={(e) => {
                    e.target.style.opacity = 1;
                    // Preload next image
                    if (images[currentIndex + 1]) {
                      const nextImg = new Image();
                      nextImg.src = getImageSource(images[currentIndex + 1]);
                    }
                  }}
                />
              </div>
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
