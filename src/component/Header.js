
import React from 'react';
import './Header.css';
// import Logo from "./images/image.png"

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="/images/image (1) 2.png" alt="logo" />
        </div>
        <ul className="navbar-menu">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Solutions</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
        <div className="navbar-buttons">
          <a href="#">Log In</a>
          <a href="#" className="join-now">Join Now</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
