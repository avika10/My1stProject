
import React from "react";
import { NavLink } from "react-router-dom";
import "./home.css"; 

const SectionOne = () => {
  return (
    <section className="sec-1">
      <div className="navbar">
        <div className="logo">
          <img src="/images/ADJERRY SVG LOGO 1.png" alt="Logo" />
        </div>
        <nav>
          <ul>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/solutions">Solutions</NavLink></li>
            <li><NavLink to="/pricing">Pricing</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <NavLink to="/login" className="login-btn">Log In</NavLink>
          <NavLink to="/signup" className="join-btn">Join Now</NavLink>
        </div>
      </div>

      <header className="headlines">
        <h1>
          Advertise <span className="span">Your Brand</span> on{" "}
          <span className="span">Everyday</span> Essentials!
        </h1>
        <p>
          Reach your target audience with eye-catching designs on disposables that stand out. 
          Transform ordinary cups, bottles, and plates into powerful marketing tools that leave a lasting impression.
        </p>
        <NavLink to="/join">
          <button>Join Now</button>
        </NavLink>
      </header>
      
      <img src="/images/Vector 32 (1).png" className="vector" alt="Vector" />
      <img src="/images/Hero section Image.png" className="img" alt="Hero Section" />
    </section>
  );
};

export default SectionOne;



// export default First;


// function First() {
//   return (
//     <div>
//       <h1>welcome</h1>
//       <Link to="/second"> second </Link>
//     </div>
//   );
// }