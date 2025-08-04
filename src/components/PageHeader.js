import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './PageHeader.css';

const pageTitles = {
  '/services': 'Services',
  '/about': 'About Us',
  '/contact': 'Contact Us',
  '/careers': 'Careers',
  '/resources': 'Resources',
  '/testimonials': 'Client Testimonials',
  '/faqs': 'Frequently Asked Questions'
};

const pageSubtitles = {
 '/services': 'Your trusted partner in security solutions since 2010',
  '/about': 'Your trusted partner in security solutions since 2010',
  '/contact': 'Get in touch with our security experts today',
  '/careers': 'Join our team of security professionals',
  '/resources': 'Security resources and information',
  '/testimonials': 'What our clients say about our services',
  '/faqs': 'Answers to common questions about our services'
};

const PageHeader = () => {
  const location = useLocation();
  const title = pageTitles[location.pathname] || 'Page Not Found';
  const subtitle = pageSubtitles[location.pathname] || 'The page you are looking for does not exist';
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Bubble class
    class Bubble {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;
        this.radius = 3 + Math.random() * 8;
        this.speed = 1 + Math.random() * 2;
        this.opacity = 0.1 + Math.random() * 0.3;
        this.color = `hsla(${180 + Math.random() * 60}, 70%, 60%, ${this.opacity})`;
      }
      
      update() {
        this.y -= this.speed;
        this.x += Math.sin(this.y * 0.01) * 1.5;
        
        if (this.y < -20) {
          this.y = canvas.height + 20;
          this.x = Math.random() * canvas.width;
        }
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        
        // Highlight
        ctx.beginPath();
        ctx.arc(this.x - this.radius/3, this.y - this.radius/3, this.radius/3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.fill();
      }
    }
    
    // Create bubbles
    const bubbles = [];
    for (let i = 0; i < 30; i++) {
      bubbles.push(new Bubble());
    }
    
    // Animation loop
    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#001f3f');
      gradient.addColorStop(1, '#0074D9');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw bubbles
      bubbles.forEach(bubble => {
        bubble.update();
        bubble.draw();
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="page-banner-wrapper">
      <canvas ref={canvasRef} className="bubbles-canvas"></canvas>
      <div className="page-banner">
        <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="page-title"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="page-subtitle"
        >
          {subtitle}
        </motion.p>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
