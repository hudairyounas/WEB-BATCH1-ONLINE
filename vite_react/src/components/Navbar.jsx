import React from "react";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        <div className="logo">FuturePlix</div>
        <nav className="menu-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#courses">Courses</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
