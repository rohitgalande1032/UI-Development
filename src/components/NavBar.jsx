import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">🚗 3DCustomizer</div>
      
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#home">Home</a>
        <a href="#buttons">Customized Buttons</a>
        <a href="#video">Video</a>
        <a href="#gallery">Gallery</a>
        <a href="#footer">Contact</a>
      </div>

      <div 
        className={`hamburger ${isOpen ? 'open' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
