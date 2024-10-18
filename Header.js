import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigationItems = [
    <Link to="/" onClick={toggleMobileMenu} className="nav-link">Home</Link>,
    <NavLink to="/About" onClick={toggleMobileMenu} className="nav-link">About Us</NavLink>,
    <NavLink to="/Login" onClick={toggleMobileMenu} className="nav-link">Login</NavLink>,
    <NavLink to="/Register" onClick={toggleMobileMenu} className="nav-link">Register</NavLink>
  ];

  useEffect(() => {
    // Scroll event for changing header background
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    // Menu toggle for mobile view
    const menuIcon = document.querySelector('.menu');
    const navbarLinks = document.querySelector('.navbar-links');

    const handleMenuClick = () => {
      navbarLinks.classList.toggle('mobile-active');
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    menuIcon?.addEventListener('click', handleMenuClick);

    // Cleanup function to remove event listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
      menuIcon?.removeEventListener('click', handleMenuClick);
    };
  }, []);

  return (
    <header className="header">
      <div className="navbar-logo">
        <img src="starlogo-removebg-preview.png" alt="ABC School Logo" className="logo" />
        <h1 className="school-name">BRILLIENTSTAR</h1>
        <h2 className="school-subtitle">S C H O O L S</h2>
      </div>
      <nav className="navbar-links">
        <div className={`menu-icon ${isMobileMenuOpen ? "open" : ""}`} onClick={toggleMobileMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        {navigationItems.map((item, index) => (
          <div key={index} className="navItem">
            {item}
          </div>
        ))}
      </nav>
      <div className="navbar-contact">
        <button className="contact-btn">Contact Us</button>
      </div>
    </header>
  );
}

export default Header;
