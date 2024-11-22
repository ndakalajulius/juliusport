import React from "react";
import "./../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero-content">
        <h1>Hi, I'm <span>Julius</span></h1>
        <p>Crafting beautiful web experiences, one project at a time.</p>
        <div className="cta-buttons">
          <a href="/projects" className="btn btn-primary">My Projects</a>
          <a href="/contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
