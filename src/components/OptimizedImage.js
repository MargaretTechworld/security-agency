import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/Components/OptimizedImage.css';

const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '',
  lazy = true,
  priority = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setImgSrc(src);
      setIsLoaded(true);
    };
    
    return () => {
      img.onload = null;
    };
  }, [src]);

  const placeholder = (
    <div 
      className={`image-placeholder ${className}`} 
      style={{ width, height }}
    />
  );

  if (!isLoaded) return placeholder;

  return (
    <motion.div
      className={`optimized-image-container ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        loading={lazy ? 'lazy' : 'eager'}
        className={`optimized-image ${isLoaded ? 'loaded' : ''}`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </motion.div>
  );
};

export default OptimizedImage;
