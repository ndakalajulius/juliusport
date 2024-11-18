import React from "react";
import "./../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <h1>My Portfolio</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
      </nav>
    </header>
  );
}

export default Header;
