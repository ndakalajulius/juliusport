import React from "react";
import "./../styles/About.css";
// For faGem
import { faGem } from "@fortawesome/free-solid-svg-icons";
// For faDatabase
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faJava,
  faJs,
  faWordpress,
  faNodeJs,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I'm Julius, a passionate developer with a knack for crafting scalable
          web applications. My expertise lies in React, Node.js, and mobile app
          development. I love tackling challenges and bringing ideas to life.
        </p>
      </div>
      <div className="about-image">
        <img src="/julius.png" alt="Profile" />
      </div>

      {/* Tech Stack Section */}
      <div className="tech-stack">
        <h3>Tech Stack</h3>
        <div className="tech-icons">
          <FontAwesomeIcon icon={faJava} size="2x" />
          <FontAwesomeIcon icon={faJs} size="2x" />
          <FontAwesomeIcon icon={faGem} size="2x" />
          <FontAwesomeIcon icon={faWordpress} size="2x" />
          <FontAwesomeIcon icon={faNodeJs} size="2x" />
          <FontAwesomeIcon icon={faPython} size="2x" />
          <FontAwesomeIcon icon={faDatabase} size="2x" />
          <FontAwesomeIcon icon={faProjectDiagram} size="2x" />
        </div>
      </div>
    </section>
  );
};

export default About;
