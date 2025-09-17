import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import '../styles/Header.css';
const logo = '/assets/images/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    document.body.style.overflow = newState ? 'hidden' : 'auto';
  };

  // Close menu and reset scroll when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';

    // Only scroll to top if we're not on the same page
    if (location.pathname !== window.location.pathname) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [location]);

  // Handle navigation with scroll to top
  const handleNavClick = (e, to) => {
    // Prevent default only if we're on the same page to handle scroll
    if (location.pathname === to) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

    // Close mobile menu when a link is clicked
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = 'auto';
    }
  };

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/services", text: "Services" },
    { to: "/about", text: "About Us" },
    { to: "/careers", text: "Careers" },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <NavLink to="/" className="logo-link">
              <img className="logo-img" src={logo} alt="logo" />
            </NavLink>
          </div>
          <div className="header-cta">
              <div className='ab-a-head'>
                <p className='ab-p'>eliteprotection25@gmail.com </p>
              </div>
              <a href="tel:+23277702642" className="cta-phone">
                <FaPhoneAlt className="phone-icon" />
                <span>+232 32 055466</span>
              </a>
            </div>
          <nav className="nav-menu">
            <ul className="nav-links">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, link.to)}
                  >
                    {link.text}
                    <span className="nav-indicator"></span>
                  </NavLink>
                </li>
              ))}
            </ul>
            <NavLink to="/contact" className="contact-btn">Contact us</NavLink>
          </nav>

          <button
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div className="mobile-menu-backdrop" onClick={toggleMenu}></div>
      )}
    </header>
  );
};

export default Header;
