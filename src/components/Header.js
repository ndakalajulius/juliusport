import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <h1>My Portfolio</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <a href="ndakala_Professional_CV.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
      </nav>
    </header>
  );
}

export default Header;
